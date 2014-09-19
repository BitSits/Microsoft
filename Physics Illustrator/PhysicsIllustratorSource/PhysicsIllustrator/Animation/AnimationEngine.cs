//-------------------------------------------------------------------------
//
//  Copyright (C) 2004 Microsoft Corporation
//  All rights reserved.
//
//  This source code is only intended as a supplement to the
//  Microsoft Tablet PC Platform SDK Reference and related electronic 
//  documentation provided with the Software Development Kit.
//  See these sources for more detailed information. 
//
//  File: AnimationEngine.cs
//  
//  Description: Main animation loop.
//--------------------------------------------------------------------------
using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Collections;
using System.Windows.Forms;
using System.ComponentModel;
using Microsoft.Ink;

class AnimationEngine
{
	//
	// Interface

	public void Start(MagicDocument doc, Control wnd)
	{
		this.doc = doc;
		this.wnd = wnd;

		running = true;

		// Mark any object that is initially at rest if it overlaps with something
		// anchored or something else at rest.
		MarkInitialAtRest();

		int then = Environment.TickCount-50;
		while (running)
		{
			// Relax the CPU if we're running better than 20fps (50ms); also 
			// guard against any period longer than 50ms.
			int now = Environment.TickCount;
			if (now-then < 50)
			{
				int delay = 50 - (now-then);
				delay -= delay%10;
				if (delay > 0) System.Threading.Thread.Sleep(delay);
			}

			// Run the engine for 50 milliseconds before refresh.
			Tick(50);

			// Render the new frame of animation.
			wnd.Refresh();

			// Service the message queue.
			Application.DoEvents();

			// Continue.
			then = now;
			continue;
		}
	}

	public void Stop()
	{
		running = false;
	}

	public MagicDocument Document
	{
		get { return doc; }
	}

	//
	// Implementation

	MagicDocument doc;
	Control wnd;

	volatile bool running;

	// Mark any object that is initially at rest if it overlaps with something
	// anchored or something else at rest.
	private void MarkInitialAtRest()
	{
		// For now, only go one level.
		foreach (RigidBodyBase body in doc.Bodies)
		{
			if (body.anchored)
			{
				MarkAtRestIfOverlap(body);
			}
		}
	}

	// Marks initialAtRest = true if overlapping this body.
	private void MarkAtRestIfOverlap(RigidBodyBase restingBody)
	{
		foreach (RigidBodyBase body in doc.Bodies)
		{
			if (!body.anchored && !body.initiallyAtRest)
			{
				Point contactPoint;
				PointF normal;
				if (FindIntersection(restingBody, body, out contactPoint, out normal))
				{
					body.initiallyAtRest = true;
					MarkAtRestIfOverlap(body);
				}
			}
		}
	}
				
	private void Tick(int milliseconds)
	{
		double dt = milliseconds/1000.0; // Convert to fractional seconds.

		// Integrate forces for each body.
		foreach (RigidBodyBase body in doc.Bodies)
		{
			// Don't move background-anchored bodies.
			if (body.anchored) continue;

			// First, apply gravitational force (if defined).
			body.totalForce = new Vector(0,0);
			body.totalAngularForce = 0.0;

			if (doc.Gravity != null)
			{
				Point fp; // force point, body-local coordinates (ink-space)
				Vector fv; // force vector, g톓su/s�
				doc.Gravity.GetForceForBody(body, out fp, out fv);

				// Gravity acts proportional to bodies' mass.
				// The fudgefactor variable makes forces match expected perceptions.
				double fudgefactor = 3.0; 
				fv = (fv*body.Mass)/fudgefactor;

				body.totalForce += fv;
			}

			// Integrate the forces and moments from mechanisms.
			MechanismBase[] mechs = doc.GetMechanismsForBody(body);

			foreach (MechanismBase mech in mechs)
			{
				// Rods require the delta time to calculate force properly.
				if (mech is RodMech)
				{
					((RodMech)mech).dt = dt;
				}

				Point fp; // force point, body-local coords (ink-space)
				Vector fv; // force vector, g톓su/s�
				mech.GetForceForBody(body, out fp, out fv);

				body.totalForce += fv;
				body.totalAngularForce += 
					Vector.Cross(Vector.FromPoints(Point.Empty,fp), fv)/1e6;
			}

			// Integrate forces and moments from any pending collisions.
			foreach (CollisionResponse cr in this.collisions)
			{
				if (!Object.ReferenceEquals(cr.body,body)) continue;

				body.totalForce += cr.impulseforce;
				body.totalAngularForce += Vector.Cross(Vector.FromPoints(
					cr.body.CG,cr.contactpoint), cr.impulseforce)/1e6;

				// If collision is between body not at rest and body at rest,
				// then the body at rest is no longer at rest.
				if (cr.body.initiallyAtRest && 
					!cr.collidingBody.anchored && !cr.collidingBody.initiallyAtRest)
				{
					cr.body.initiallyAtRest = false;
				}
			}

		}
			
		// Apply forces, to move each body.
		foreach (RigidBodyBase body in doc.Bodies)
		{
			// If body still at rest, don't move it.
			if (body.initiallyAtRest)
				continue;

			// Add it up, and move the bodies.  Note, we're just doing simple 
			// Euler integration, for now.  If integration error proves to be a 
			// problem, Runge-Kutta or Improved Euler could be implemented here, 
			// for better results (at the expense of a little performance).
			body.Vx += dt * body.totalForce.DX/body.Mass; // isu/sec
			body.Vy += dt * body.totalForce.DY/body.Mass; // isu/sec
			body.Va += dt * body.totalAngularForce/body.I; // radians/sec

			int dx=0,dy=0; float da=0f;

			dx = MathEx.Round(dt * body.Vx);
			dy = MathEx.Round(dt * body.Vy);
			da = (float)Geometry.Rad2Deg(dt * body.Va);

			body.Move(dx,dy,da);

			// Move force mechanisms
			foreach (MechanismBase mech in doc.GetMechanismsForBody(body))
			{
				if (mech is ForceMechanismBase)
					mech.Move(dx,dy,da);
			}
		}
		
		// Apply a method to stabilize rods, pin joints, and ropes.
		StabilizeBindingMechanisms();

		// Everything works better when there are no overlaps, so physically
		// separate any objects that are intersecting.
		SeparateIntersectingObjects();

		// Look for collisions, apply impulses.
		collisions.Clear();
		foreach (RigidBodyBase body1 in doc.Bodies)
		foreach (RigidBodyBase body2 in doc.Bodies)
		{
			if (Object.ReferenceEquals(body1,body2)) continue;

			if (body1.anchored && body2.anchored) continue;

			Point contactPoint;
			PointF normal;
			if (!FindIntersection(body1, body2, out contactPoint, out normal)) continue;

			using (Graphics g = wnd.CreateGraphics())
			using (Region contactrgn = RigidBodyBase.GetOverlap(body1,body2))
			{
				if (contactrgn.IsEmpty(g)) continue;

				// We've got a hit; but make sure it's waxing not waning.
				int dx1=0,dy1=0,dx2=0,dy2=0; float da1=0f,da2=0f;

				dx1 = MathEx.Round(dt * body1.Vx);
				dy1 = MathEx.Round(dt * body1.Vy);
				da1 = (float)Geometry.Rad2Deg(dt * body1.Va);
				dx2 = MathEx.Round(dt * body2.Vx);
				dy2 = MathEx.Round(dt * body2.Vy);
				da2 = (float)Geometry.Rad2Deg(dt * body2.Va);

				using (Matrix m1 = new Matrix())
				using (Matrix m2 = new Matrix())
				using (Region rgn = new Region())
				{
					m1.Translate(dx1,dy1);
					m1.RotateAt(da1,body1.CG);
					m2.Translate(dx2,dy2);
					m2.RotateAt(da2,body2.CG);

					Region contactrgn1 = body1.rgncache.Clone();
					Region contactrgn2 = body2.rgncache.Clone();

					contactrgn1.Transform(m1);
					contactrgn2.Transform(m2);

					rgn.Intersect(contactrgn1);
					rgn.Intersect(contactrgn2);

					float newarea = Geometry.CalculateArea(rgn);
					float oldarea = Geometry.CalculateArea(contactrgn);

					if (newarea < oldarea)
						continue;
				}
			
				// Calculate contact point, and relative velocities.

				// Make a 1000 unit normal so that we can use ints.
				Vector collNormal = new Vector(MathEx.Round(normal.X * 1000),
					MathEx.Round(normal.Y * 1000));
				double collNormalLength = collNormal.Length;
				if (collNormalLength == 0)
					continue;

				// Find the relative velocity at the collision point.
				Vector rvBodies = new Vector(MathEx.Round(body1.Vx - body2.Vx), 
					MathEx.Round(body1.Vy - body2.Vy));
				// Add in the velocity due to rotation of the bodies.
				Vector cgToContact1 = Vector.FromPoints(body1.CG, contactPoint);
				Vector orthoToCG1 = new Vector(-cgToContact1.DY, cgToContact1.DX);
				Vector cgToContact2 = Vector.FromPoints(body2.CG, contactPoint);
				Vector orthoToCG2 = new Vector(-cgToContact2.DY, cgToContact2.DX);
				Vector rv = rvBodies + orthoToCG1 * body1.Va - orthoToCG2 * body2.Va;

				CollisionResponse cr = new CollisionResponse();
				cr.body = body2;
				cr.collidingBody = body1;
				cr.contactpoint = contactPoint;

				// Take the smaller of the two elasticities for the collision.
				double elasticity = Math.Min(body1.elasticity, body2.elasticity);

				// Calculate the change in velocity times mass.
				// These formulas come from _Physics for Game Developers_ by Bourg, p 98.
				double impulseTimesMass = 0;
				if (body1.anchored && collNormalLength > 0)
				{
					impulseTimesMass = (1 + elasticity) * rv.Dot(collNormal) /
						(1/ body2.Mass +  
						Math.Abs(collNormal.Dot(orthoToCG2) * Vector.Cross(cgToContact2, collNormal)) / 
						body2.I / 1e6 / collNormal.LengthSq) /
						collNormalLength;
				}
				else if (collNormalLength > 0)
				{
					impulseTimesMass = (1 + elasticity) * rv.Dot(collNormal) /
						(1/body1.Mass + 1/body2.Mass +
						Math.Abs(collNormal.Dot(orthoToCG1) * Vector.Cross(cgToContact1, collNormal)) / 
						body1.I / 1e6 / collNormal.LengthSq +
						Math.Abs(collNormal.Dot(orthoToCG2) * Vector.Cross(cgToContact2, collNormal)) / 
						body2.I / 1e6 / collNormal.LengthSq) /
						collNormalLength;
				}

				// Force that will result in that change in velocity.
				cr.impulseforce = collNormal * (impulseTimesMass / dt  / collNormalLength);

				// Add sliding friction for ellipses colliding with polygons.
				if (!body2.anchored && body2 is EllipticalBody && body1 is PolygonalBody)
				{
					// Figure out the velocity parallel to the normal.
					double velocityNormal = rvBodies.Dot(collNormal) / collNormalLength;

					// The frictional force is proportional to that.
					// Note: For some reason, a coefficient of friction of 1.0 
					// sometimes creates a singularity.
					double cfriction = Math.Min(body2.cfriction, .99);
					double frictionForceMagnitude = 
						Math.Abs(velocityNormal) * cfriction * body2.Mass / dt;

					// Figure out the velocity orthogonal to the normal.
					Vector orthoNormal = new Vector(collNormal.DY, -collNormal.DX);
					double velocityOrtho = -rv.Dot(orthoNormal) / collNormalLength;

					// You can't have a frictional force that actually reverses the velocity.
					double maximumForce = Math.Abs(velocityOrtho * body2.Mass / dt);

					try
					{
						// The frictional force will be along the orthogonal to the normal,
						// in the opposite direction of the velocity.
						Vector frictionForce = orthoNormal * (-Math.Sign(velocityOrtho) * 
							Math.Min(frictionForceMagnitude, maximumForce)) / collNormalLength;

						// Add friction. 
						cr.impulseforce += frictionForce;
					}
					catch (ArithmeticException ex)
					{
						Console.WriteLine("Silding friction exception: " + ex.ToString());
					}

				}

				collisions.Add(cr);

			}
		}

	}

	// For now, just return whether collision has occurred.
	private bool FindIntersection(RigidBodyBase body1, RigidBodyBase body2, 
		out Point contactPoint, out PointF normal)
	{
		// Initialize out variables.
		contactPoint = new Point(0, 0);
		normal = new PointF(0, 0);

		if (!body1.BoundingBox.IntersectsWith(body2.BoundingBox))
			return false;

		if (ConnectedByJoint(body1, body2))
			return false;

		Point[] vertices1, vertices2;
		if (body1 is PolygonalBody)
		{
			vertices1 = (Point[])((PolygonalBody)body1).Vertices.Clone();
			body1.displacement.TransformPoints(vertices1);
		}
		else
		{
			// Approximate vertices for ellipse.
			vertices1 = ((EllipticalBody)body1).GetPoints();
		}
		if (body2 is PolygonalBody)
		{
			vertices2 = (Point[])((PolygonalBody)body2).Vertices.Clone();
			body2.displacement.TransformPoints(vertices2);
		}
		else
		{
			// Approximate vertices for ellipse.
			vertices2 = ((EllipticalBody)body2).GetPoints();
		}

		// Loop through each segment and look for intersections.
		ArrayList intersections = new ArrayList();
		for (int i = 0; i < vertices1.Length; i++)
		{
			for (int j = 0; j < vertices2.Length; j++)
			{
				double tAB, tPQ;
				Point v1 = vertices1[i];
				Point v1Next = vertices1[(i + 1) % vertices1.Length];
				Point v2 = vertices2[j];
				Point v2Next = vertices2[(j + 1) % vertices2.Length];
				bool hit = SegmentCollision.HitTest(v1, v1Next, v2, v2Next, 
					out tAB, out tPQ);

				if (hit)
				{
					// Find intersections from here.
					Point intersection = new Point((int)(v1.X + (v1Next.X - v1.X) * tAB),
						(int)(v1.Y + (v1Next.Y - v1.Y) * tAB));
					intersections.Add(intersection);
				}
			}
		}

		// If no intersections, then no collisions.
		if (intersections.Count == 0)
			return false;

		// Get average intersection.
		int sumX = 0;
		int sumY = 0;
		foreach (Point intersection in intersections)
		{
			sumX += intersection.X;
			sumY += intersection.Y;

		}
		contactPoint = new Point(sumX / intersections.Count, 
			sumY / intersections.Count);

		// Find normal by constructing orthogonal vector from first/last intersections.
		// Note: this can be improved by doing a linear fit through the intersections.
		Point i0 = (Point)intersections[0];
		Point i1 = (Point)intersections[intersections.Count - 1];

		// Create a normal vector.
		Vector normalVec = new Vector(i1.Y - i0.Y, i0.X - i1.X);

		// Compare to vector between contact point and body1.
		Vector collToBody1 = 
			new Vector(contactPoint.X - body1.CG.X, contactPoint.Y - body1.CG.Y);

		// If in the opposite direction, reverse normal.
		if (collToBody1.Dot(normalVec) < 0)
			normalVec = normalVec * -1.0;

		// Normalize.
		double normalLength = normalVec.Length;
		if (normalLength > 0)
			normal = new PointF((float)(normalVec.DX / normalLength), 
				(float)(normalVec.DY / normalLength));
		else
			normal = new PointF(0, 0);
		
        return true;
	}

	// Returns true if the objects are connected by a joint.
	// (Assumes body1 != body2)
	private bool ConnectedByJoint(RigidBodyBase body1, RigidBodyBase body2)
	{
		foreach (MechanismBase mech in doc.GetMechanismsForBody(body1))
		{
			if (mech is JointMech)
			{
				JointMech joint = (JointMech)mech;
				if (Object.ReferenceEquals(joint.EndpointA.Object, body2) ||
				    Object.ReferenceEquals(joint.EndpointB.Object, body2))
					return true;
			}
		}
		return false;
	}

	// Separates all intersecting objects so that they no longer overlap.
	private void SeparateIntersectingObjects()
	{
		// Move objects along the normal until no longer intersecting.
		foreach (CollisionResponse cr in this.collisions)
		{
			// Ideally, move both bodies in inverse proportion to their weight.
			// For now, move the body with fewer collisions, or the lighter body.
			if (cr.body.anchored || cr.body.initiallyAtRest)
				continue;
			if (!cr.collidingBody.anchored)
			{
				// Compare which body has more collisions.
				int nBodyCollisions = 0;
				int nCollidingBodyCollisions = 0;
				foreach (CollisionResponse crTemp in this.collisions)
				{
					if (crTemp.body == cr.body)
						nBodyCollisions++;
					if (crTemp.body == cr.collidingBody)
						nCollidingBodyCollisions++;
				}
				if (nBodyCollisions > nCollidingBodyCollisions)
					continue;
				// If same number of collisions, move the lighter object.
				if (nBodyCollisions == nCollidingBodyCollisions)
				{
					if (cr.body.Mass > cr.collidingBody.Mass)
						continue;
				}
			}

			// Search for the least amount to move the object so that it is not colliding.
			double delta = 32;
			Point contactPoint;
			PointF normal;
			bool collide = FindIntersection(cr.body, cr.collidingBody, 
				out contactPoint, out normal);
			if (!collide)
				continue;
			bool initialColliding = true;
			Point originalCG = cr.body.CG;
			for (int i = 0; i < 50; i++)
			{
				bool oldCollide = collide;
				cr.body.MoveNoStore(MathEx.Round(-normal.X * delta), 
					MathEx.Round(-normal.Y * delta), 0);
				collide = FindIntersection(cr.body, cr.collidingBody, 
					out contactPoint, out normal);
				// Check if we are close enough.
				if (!collide && Math.Abs(delta) < 2)
					break;

				// If you haven't broken out yet, keep trying.
				if (collide && initialColliding)
					continue;

				if (collide != oldCollide)
				{
					// If you've gone over the boundary, then double back.
					delta = - 0.5 * delta;
				}
				else
				{
					// Keep going, but half as much.
					delta = 0.5 * delta;
				}
			}
			
			if (collide)
			{
				// If you're still colliding after all that, then just move back.
				cr.body.MoveBack();
			}
			else
			{
				// Also, move the forces on the body.
				foreach (MechanismBase forceMech in doc.GetMechanismsForBody(cr.body))
				{
					if (forceMech is ForceMechanismBase)
					{
						forceMech.Move(cr.body.CG.X - originalCG.X, 
							cr.body.CG.Y - originalCG.Y, 0);
					}
				}
			}
		}
	}

	// Stabilize rods, joints, and ropes. 
	private void StabilizeBindingMechanisms()
	{
		foreach (MechanismBase mech in doc.Mechanisms)
		{
			if (mech is BindingMechanismBase)
			{
				BindingMechanismBase binder = (BindingMechanismBase) mech;
				// Synch the velocity and position of the lighter body to the heavier one.
				BodyRef bodyRefToHeavy, bodyRefLight;
				if (binder.EndpointA.Object.anchored)
				{
					bodyRefToHeavy = binder.EndpointA;
					bodyRefLight = binder.EndpointB;
				}
				else if (binder.EndpointB.Object.anchored)
				{
					bodyRefToHeavy = binder.EndpointB;
					bodyRefLight = binder.EndpointA;
				}
				else if (binder.EndpointA.Object.Mass > binder.EndpointB.Object.Mass)
				{
					bodyRefToHeavy = binder.EndpointA;
					bodyRefLight = binder.EndpointB;
				}
				else 
				{
					bodyRefToHeavy = binder.EndpointB;
					bodyRefLight = binder.EndpointA;
				}

				// Calculate endpoint mismatch.
				Point pointHeavy = bodyRefToHeavy.Object.CG + 
					Vector.Transform(Vector.FromPoint(bodyRefToHeavy.attachloc), bodyRefToHeavy.Object.displacement);
				Point pointLight = bodyRefLight.Object.CG + 
					Vector.Transform(Vector.FromPoint(bodyRefLight.attachloc), bodyRefLight.Object.displacement);
				
				// Move light object half way to match up correct distance to heavy object.
				double distance = Geometry.DistanceBetween(pointHeavy, pointLight);
				if (distance > 0)
				{
					// Get the length you are supposed to be at.
					double length;
					if (binder is RodMech)
						length = ((RodMech)binder).length;
					else if (binder is RopeMech)
					{
						length = ((RopeMech)binder).length;
						// Don't need to do anything if you are shorter than the length.
						if (distance < length)
							continue;
					}
					else
						continue;

					// Find the ideal position given that length.
					Vector heavyToLight = Vector.FromPoints(pointHeavy, pointLight);
					Vector heavyToIdeal = heavyToLight * (length / heavyToLight.Length);
					Point idealPosition = 
						new Point(MathEx.Round(pointHeavy.X + heavyToIdeal.DX),
						MathEx.Round(pointHeavy.Y + heavyToIdeal.DY));
					Vector moveVector = new Vector((idealPosition.X - pointLight.X)/2,
						(idealPosition.Y - pointLight.Y)/2);
					bodyRefLight.Object.MoveNoStore(moveVector.DX, moveVector.DY, 0);

					// Also, move the forces on the body.
					foreach (MechanismBase forceMech in doc.GetMechanismsForBody(bodyRefLight.Object))
					{
						if (forceMech is ForceMechanismBase)
						{
							forceMech.Move(moveVector.DX, moveVector.DY, 0);
						}
					}
				}
			}
		}
	}

	// Polygons that are resting on other polygons will slide around a little because
	// of small collision forces. This forces them to be still.
	private void StabilizeRestingPolygons(double dt)
	{
		foreach (CollisionResponse cr in this.collisions)
		{
			if (!cr.body.anchored && cr.body is PolygonalBody && 
				cr.collidingBody is PolygonalBody)
			{
				// Not resting if spinning, or going to be spinning.
				double maxSpin = 2.0;
				if (Math.Abs(cr.body.Va) > maxSpin || 
					Math.Abs(cr.collidingBody.Va) > maxSpin)
					continue;

				// Get the minimum friction.
				double cfriction = 
					Math.Min(cr.body.cfriction, cr.collidingBody.cfriction);

				// Check relative velocity against coefficient of friction.
				double velocityFactor = 1000;

				// This vector is approximately close to orthogonal to the normal of 
				// the collision.
				Vector rv = new Vector(MathEx.Round(cr.body.Vx - cr.collidingBody.Vx),
					MathEx.Round(cr.body.Vy - cr.collidingBody.Vy));
				if (rv.Length < velocityFactor * cfriction)
				{
					if (cr.collidingBody.anchored)
					{
						// Keep at rest.
						cr.body.Vx = 0;
						cr.body.Vy = 0;
					}
					else
					{
						// Average the velocities.
						cr.body.Vx = 0.5 * (cr.body.Vx + cr.collidingBody.Vx);
						cr.body.Vy = 0.5 * (cr.body.Vy + cr.collidingBody.Vy);
					}

					// Stop any spinning and forces, unless starting to spin.
					double futureVa = dt * cr.body.totalAngularForce / cr.body.I;
					double deltaVa = 2.0;
					if (Math.Abs(futureVa) - Math.Abs(cr.body.Va) < deltaVa)
					{
						cr.body.Va = 0;
						cr.body.totalAngularForce = 0;
					}

					// Subtract out gravity.
					if (doc.Gravity != null)
					{
						Point fp; // force point, body-local coords (ink-space)
						Vector fv; // force vector, g톓su/s�
						doc.Gravity.GetForceForBody(cr.body, out fp, out fv);

						// Gravity acts proportional to bodies' mass.
						// The fudgefactor variable makes forces match expected perceptions.
						double fudgefactor = 3.0; 
						fv = (fv * cr.body.Mass)/fudgefactor;

						cr.body.totalForce += fv;
					}

					// Move back so that you are not colliding.
					cr.body.MoveBack();
				}
			}
		}
	}

	class CollisionResponse
	{
		public RigidBodyBase body;
		public RigidBodyBase collidingBody;
		public Point contactpoint;
		public Vector impulseforce;
	}

	private ArrayList collisions = new ArrayList();
}