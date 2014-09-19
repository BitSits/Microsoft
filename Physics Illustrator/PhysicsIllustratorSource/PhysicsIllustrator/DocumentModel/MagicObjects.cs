//-------------------------------------------------------------------------
//
//  Copyright (C) 2004 Microsoft Corporation
//  All rights reserved.
//
//  File: MagicObjects.cs
//  
//  Description: XML serialization mapping for .physi document elements.
//--------------------------------------------------------------------------

using System;
using System.Xml;
using System.Xml.Serialization;
using System.Collections;
using System.Drawing;
using System.Drawing.Drawing2D;

//
// Abstract base type for rigidbodies and mechanisms

public abstract class MagicObject
{
	[XmlAttribute] public int strokeid;

	// The visual representation of all MagicObjects is kept in a GraphicsPath object, for 
	// quick and efficient rendering, without a lot of excess computation (except for 
	// binding mechanisms like Rope and Spring, which must be redrawn each frame).
	protected internal GraphicsPath gp;
	protected internal abstract void UpdateGP();

	// Basic operations common to all MagicObjects, such as render and move.
	internal virtual Rectangle BoundingBox
	{
		get
		{
			UpdateGP();
			RectangleF bbox = gp.GetBounds();
			return Geometry.Round(bbox);
		}
	}

	// Used by both editor-mode and animation-mode.
	internal abstract void Render(Graphics g); 
	// Used by the editor for move, resize, and other representations.
	internal abstract void Transform(Matrix m); 
	// Used for animation as in move or rotate.
	internal abstract void Move(int dx, int dy, float da); 
}

//
// Rigid body types

public abstract class RigidBodyBase : MagicObject
{
	[XmlAttribute] public bool anchored = false;
	[XmlAttribute] public double density = 1.0;
	[XmlAttribute] public double cfriction = 1.0;
	[XmlAttribute] public double elasticity = 0.75;

	[XmlIgnore] public Color fillcolor = Color.DarkCyan;
	[XmlAttribute("fillcolor")] public string xml_fillcolor
	{
		get
		{ return String.Format("{0},{1},{2},{3}",fillcolor.A,fillcolor.R,fillcolor.G,fillcolor.B); }
		set
		{
			fillcolor = Color.FromName(value);
			if (fillcolor.ToArgb() == 0)
			{
				string[] argb = value.Split(',');
				if (argb.Length != 4) 
					fillcolor = Color.DarkCyan;
				else
					fillcolor = Color.FromArgb(
						Int32.Parse(argb[0]),Int32.Parse(argb[1]),
						Int32.Parse(argb[2]),Int32.Parse(argb[3]));
			}
		}
	}

	// Same as Move, but doesn't store previous values.
	internal abstract void MoveNoStore(int dx, int dy, float da); 

	// Not serialized, used only during animation:

	// Linear-velocity and angular-velocity
	internal double Vx,Vy; internal double Va;

	// Forces to be applied
	internal protected Vector totalForce = new Vector(0, 0);
	internal protected double totalAngularForce = 0.0;

	// If true, then initially don't move.
	internal bool initiallyAtRest = false;

	// Used for backing up.
	internal int lastMoveX = 0;
	internal int lastMoveY = 0;
	internal float lastMoveA = 0;

	internal override void Render(Graphics g)
	{
		UpdateGP();

		Brush brush;
		if (anchored)
			brush = new HatchBrush(HatchStyle.HorizontalBrick,Color.DarkGray,fillcolor);
		else
			brush = new SolidBrush(fillcolor);

		g.FillPath(brush,gp);
		g.DrawPath(Pens.Black,gp);

		brush.Dispose();

		Point cg = CG;
		g.FillRectangle(Brushes.Black,cg.X-30,cg.Y-30,61,61);
	}

	// Basic operations and properties for all solid-body types: hit testing, mass, 
	// center of gravity (cg), and moment of inertia (mi).
	internal virtual bool HitTest(Point p)
	{
		UpdateGP();
		return gp.IsVisible(p);
	}

	internal abstract RigidBodyBase Clone(int newstrokeid);
	internal abstract void Straighten();

	internal abstract double Mass { get; } // units: g (1g = 1e6 isu², at density 1.0)
	internal abstract Point CG { get; } // ink-space world coordinates
	internal abstract double I { get; } // units: g·cm²
	internal abstract void MoveBack();

	// The bodies' data-model is not animated, in memory.  It's more convenient and 
	// increases perfomance to simply animate the Region (for hit-testing) 
	// and the GraphicsPath (for rendering) by using a 2D affine matrix transform.
	protected internal Matrix displacement = new Matrix();
	protected internal Region rgncache;

	internal virtual void UpdateRgn()
	{
		if (rgncache != null) rgncache.Dispose();
		rgncache = new Region(gp);
	}

	// Note: this method is somewhat expensive, and called fairly often.  A better 
	// approach to region/region hit testing could be implemented, to improve 
	// performance and return more useful info (such as a collision-normal vector).
	internal static Region GetOverlap(RigidBodyBase body1, RigidBodyBase body2)
	{
		body1.UpdateGP(); body1.UpdateRgn();
		body2.UpdateGP(); body2.UpdateRgn();

		Region overlap = body1.rgncache.Clone();
		overlap.Intersect(body2.rgncache);
		return overlap;
	}

}

public sealed class EllipticalBody : RigidBodyBase
{
	[XmlIgnore] public Point CenterPoint;
	[XmlElement("CenterPoint")] public string xml_CenterPoint
	{
		get
		{ return MagicDocument.Convert.ToString(CenterPoint); }
		set
		{ CenterPoint = MagicDocument.Convert.ToPoint(value); }
	}

	[XmlElement] public int MajorAxis; //ink-space units
	[XmlElement] public int MinorAxis; //ink-space units
	[XmlElement] public float Orientation; //degrees [-90,+90]

	protected internal override void UpdateGP()
	{
		// We keep the gp updated as we go; if it's already initialized, return.
		if (gp != null) return;
		else gp = new GraphicsPath();

		// Establish the elliptical shape.
		gp.AddEllipse(-MajorAxis,-MinorAxis,MajorAxis*2,MinorAxis*2);

		using (Matrix m = new Matrix())
		{
			m.Translate(CenterPoint.X,CenterPoint.Y);
			m.Rotate(Orientation);
			gp.Transform(m);
		}

		// Reset the displacement matrix and clear associated caches.
		if (displacement == null)
			displacement = new Matrix(); 
		else
			displacement.Reset();

		if (rgncache != null) rgncache.Dispose();
		rgncache = null;
	}

	internal override RigidBodyBase Clone(int newstrokeid)
	{
		// Instantiate a clone as the most-derived type.
		EllipticalBody clone = (EllipticalBody)this.MemberwiseClone();

		// Sever ties to the original's gp and rgn caches.
		clone.gp = null;
		clone.rgncache = null;

		// Set the new stroke id.
		clone.strokeid = newstrokeid;

		// Move it down, and to the right a bit.
		using (Matrix m = new Matrix())
		{
			m.Translate(1000f,1000f);
			clone.Transform(m);
		}

		return clone;
	}

	internal override void Straighten()
	{
		// Move the major and minor axes toward each other.
		double sumaxes = MajorAxis+MinorAxis;

		double ellipseness = (double)MajorAxis/MinorAxis;
		ellipseness = Math.Floor((ellipseness - 0.05)*10.0)/10.0;

		if (ellipseness < 1.0) ellipseness = 1.0;

		MinorAxis = MathEx.Round(sumaxes/(1+ellipseness));
		MajorAxis = MathEx.Round(ellipseness*MinorAxis);

		// Recreate graphicspath.
		if (gp != null) { gp.Dispose(); gp = null; }
		UpdateGP();
	}

	internal override double Mass
	{
		get
		{
			// Area of ellipse: pab
			double area = Math.PI*MajorAxis*MinorAxis; // isu² or 0.01mm²
			area /= 1e6; // cm²
			return density*area; // density in g/cm²
		}
	}

	internal override Point CG
	{
		get
		{
			UpdateGP();
			return Geometry.TransformPoint(displacement,CenterPoint);
		}
	}

	internal override double I
	{
		get
		{
			// Mass moment of inertia for ellipse: 1/4a²m+1/4b²m
			return Mass/4*(MathEx.Square(MajorAxis/1000.0)+MathEx.Square(MinorAxis/1000.0));
		}
	}

	internal override void Transform(Matrix m)
	{
		UpdateGP();

		Ellipse elli = new Ellipse(CenterPoint,MajorAxis,MinorAxis,Orientation);
		elli.Transform(m);

		CenterPoint = elli.Center;
		MajorAxis = elli.MajorAxis;
		MinorAxis = elli.MinorAxis;
		Orientation = elli.Orientation;

		gp.Transform(m);
		displacement.Reset();

		if (rgncache != null)
			rgncache.Transform(m);
	}

	internal override void Move(int dx, int dy, float da)
	{
		MoveNoStore(dx, dy, da);

		// Store for undoing move.
		lastMoveX = dx;
		lastMoveY = dy;
		lastMoveA = da;
	}

	internal override void MoveNoStore(int dx, int dy, float da)
	{
		UpdateGP();

		using (Matrix m = new Matrix())
		{
			m.Translate(dx,dy);
			m.RotateAt(da, new PointF(CG.X,CG.Y));
			
			gp.Transform(m);
			displacement.Multiply(m,MatrixOrder.Append);

			if (rgncache != null)
				rgncache.Transform(m);
		}
	}

	// Used for backing up object in order to make it less likely
	// to overlap during a collision.
	internal override void MoveBack()
	{
		UpdateGP();

		using (Matrix m = new Matrix())
		{
			// Opposite order as move.
			// Ideally, you'd undo the rotation as well, but it turns out that
			// it's more realistic without undoing the rotation.
//			m.RotateAt(-lastMoveA, new PointF(CG.X,CG.Y));
			m.Translate(-lastMoveX, -lastMoveY);

			gp.Transform(m);
			displacement.Multiply(m,MatrixOrder.Append);

			if (rgncache != null)
			{
				rgncache.Transform(m);
			}
		}

		// So it won't be done more than once.
		lastMoveX = 0;
		lastMoveY = 0;
		lastMoveA = 0;
	}

	public Point[] GetPoints()
	{
		Ellipse elli = new Ellipse(CenterPoint,MajorAxis,MinorAxis,Orientation);
		return elli.GetPoints(60, displacement);
	}

}

public sealed class PolygonalBody : RigidBodyBase
{
	[XmlIgnore] public Point[] Vertices;
	[XmlElement("Vertex")] public string[] xml_Vertices
	{
		get
		{ return MagicDocument.Convert.ToStringArray(Vertices); }
		set
		{ Vertices = MagicDocument.Convert.ToPointArray(value); }
	}

	protected internal override void UpdateGP()
	{
		// We keep the graphics path updated as we go; if it's already initialized, return.
		if (gp != null) return;
		else gp = new GraphicsPath();

		// Establish the polgonal vertices.
		gp.AddPolygon(Vertices);

		// Reset the displacement matrix, and clear associated caches.
		if (displacement == null)
			displacement = new Matrix(); 
		else
			displacement.Reset();

		if (rgncache != null) rgncache.Dispose();
		rgncache = null;

		cgcache = Point.Empty;
	}

	internal override RigidBodyBase Clone(int newstrokeid)
	{
		// Instantiate a clone as the most-derived type.
		PolygonalBody clone = (PolygonalBody)this.MemberwiseClone();

		// Sever ties to the original's gp and rgn caches.
		clone.gp = null;
		clone.rgncache = null;

		// Make value-copies of reference types.
		clone.Vertices = (Point[])Vertices.Clone();

		// Set the new stroke id.
		clone.strokeid = newstrokeid;

		// Move it down, and to the right a bit.
		using (Matrix m = new Matrix())
		{
			m.Translate(1000f,1000f);
			clone.Transform(m);
		}

		return clone;
	}

	internal override void Straighten()
	{
		PolygonRegularizer.Straighten(ref Vertices);

		// Recreate graphicspath.
		if (gp != null) { gp.Dispose(); gp = null; }
		UpdateGP();
	}

	internal override double Mass
	{
		get
		{
			UpdateGP();

			// This is expensive to compute (involves GetRegionScans) so we do it once, 
			// when drawn, and cache the results.
			if (rgncache == null)
			{
				rgncache = new Region(gp);
				cgcache = Geometry.CenterOfGravity(rgncache);
				masscache = density*Geometry.CalculateArea(rgncache)/1e6;
				mmicache = density*Geometry.CalculateMoment(rgncache);
			}
			return masscache;
		}
	}
	private double masscache;

	internal override Point CG 
	{
		get
		{
			UpdateGP();

			// This is expensive to compute (involves GetRegionScans) so we do it once, 
			// when drawn, and cache the results.
			if (rgncache == null)
			{
				rgncache = new Region(gp);
				cgcache = Geometry.CenterOfGravity(rgncache);
				masscache = density*Geometry.CalculateArea(rgncache)/1e6;
				mmicache = density*Geometry.CalculateMoment(rgncache);
			}
			return cgcache;
		}
	}
	private Point cgcache;

	internal override double I
	{
		get
		{
			UpdateGP();

			// This is expensive to compute (involves GetRegionScans) so we do it once, 
			// when drawn, and cache the results.
			if (rgncache == null)
			{
				rgncache = new Region(gp);
				cgcache = Geometry.CenterOfGravity(rgncache);
				masscache = density*Geometry.CalculateArea(rgncache)/1e6;
				mmicache = density*Geometry.CalculateMoment(rgncache);
			}
			return mmicache;
		}
	}
	private double mmicache;

	internal override void Transform(Matrix m)
	{
		UpdateGP();

		m.TransformPoints(Vertices);

		gp.Transform(m);
		displacement.Reset();

		if (rgncache != null)
		{
			rgncache.Transform(m);
			cgcache = Geometry.TransformPoint(m,cgcache);
		}
	}

	internal override void Move(int dx, int dy, float da)
	{
		MoveNoStore(dx, dy, da);

		// Store for undoing move.
		lastMoveX = dx;
		lastMoveY = dy;
		lastMoveA = da;
	}

	internal override void MoveNoStore(int dx, int dy, float da)
	{
		UpdateGP();

		using (Matrix m = new Matrix())
		{
			m.Translate(dx,dy);
			m.RotateAt(da, new PointF(CG.X,CG.Y));

			gp.Transform(m);
			displacement.Multiply(m,MatrixOrder.Append);

			if (rgncache != null)
			{
				rgncache.Transform(m);
				cgcache = Geometry.TransformPoint(m,cgcache);
			}
		}
	}

	// Used for backing up object in order to make it less likely
	// to overlap during a collision.
	internal override void MoveBack()
	{
		UpdateGP();

		using (Matrix m = new Matrix())
		{
			// Opposite order as move.
			// Ideally, you'd undo the rotation as well, but it turns out that
			// it's more realistic without undoing the rotation.
//			m.RotateAt(-lastMoveA, new PointF(CG.X,CG.Y));
			m.Translate(-lastMoveX, -lastMoveY);

			gp.Transform(m);
			displacement.Multiply(m,MatrixOrder.Append);

			if (rgncache != null)
			{
				rgncache.Transform(m);
				cgcache = Geometry.TransformPoint(m,cgcache);
			}
		}

		// So it won't be done more than once.
		lastMoveX = 0;
		lastMoveY = 0;
		lastMoveA = 0;
	}
}

//
// Mechanism types

public abstract class MechanismBase : MagicObject
{
	// Post-deserialization callback, to dereference back-pointers in the XML.
	internal abstract void CompleteDeserialization(MagicDocument doc);

	// Mechanisms apply forces to their respective bodies through this method.
	internal abstract void GetForceForBody(RigidBodyBase body, out Point p, out Vector v);
}

//
// Unary mechanisms (forces)

public abstract class ForceMechanismBase : MechanismBase
{
	[XmlIgnore] public Vector vector;
	[XmlAttribute("Vector")] public string xml_vector
	{
		get
		{ return MagicDocument.Convert.ToString(vector); }
		set
		{ vector = MagicDocument.Convert.ToVector(value); }
	}

	[XmlElement] public BodyRef Body;

	internal override void Render(Graphics g)
	{
		UpdateGP();
		g.DrawPath(pen,gp);
	}
	private static Pen pen = new Pen(Color.Goldenrod,50f);

	protected internal const double forceFactor = 1.5;

	internal override void Transform(Matrix m)
	{
		vector.Transform(m);
		Body.attachloc = Geometry.TransformPointAsVector(m,Body.attachloc);

		// Recreate graphicspath at new location.
		if (gp != null) { gp.Dispose(); gp = null; }
		UpdateGP();
	}

	internal override void CompleteDeserialization(MagicDocument doc)
	{
		Body.Object = doc.LookupBody(Body.strokeref);
	}
}

public sealed class ExternalForceMech : ForceMechanismBase
{
	protected internal override void UpdateGP()
	{
		// We keep the gp updated as we go; if it's already initialized, return.
		if (gp != null) return;
		else gp = new GraphicsPath();

		// Draw an arrow from attachpoint, outward.
		Point attachpoint = Body.Object.CG + Vector.FromPoint(Body.attachloc);
		attachpoint = Geometry.TransformPoint(Body.Object.displacement,attachpoint);

		Point endpoint = attachpoint + vector;
		Point b = Geometry.GetPointOffLineSegment(attachpoint,endpoint,-400,+300);
		Point c = Geometry.GetPointOffLineSegment(attachpoint,endpoint,-400,-300);

		gp.AddLine(attachpoint,endpoint);
		gp.AddLine(endpoint,b);
		gp.AddLine(endpoint,c);
	}

	internal override void Move(int dx, int dy, float da)
	{
		UpdateGP();

		using (Matrix m = new Matrix())
		{
			// Rotate vector with body object, but hold direction constant.
			PointF bodycg = new PointF(Body.Object.CG.X,Body.Object.CG.Y);

			m.Translate(dx,dy);
			m.RotateAt(da, bodycg);

			gp.Transform(m);
			m.Reset();

			m.RotateAt(-da, gp.PathPoints[0]);
			gp.Transform(m);

			// Adjust so that you are always the correct distance from the 
			// center of gravity.
			Vector attachVector = Vector.FromPoint(Body.attachloc);
			Point currentAttachPt = 
				new Point(MathEx.Round(gp.PathPoints[0].X), MathEx.Round(gp.PathPoints[0].Y));
			Vector currentVector = Vector.FromPoints(Body.Object.CG, currentAttachPt);
			double currentLength = currentVector.Length;
			if (currentLength > 0)
			{
				Vector deltaVector = currentVector * (1 - attachVector.Length / currentLength);
				// Adjust by this delta vector.
				m.Reset();
				m.Translate(-(int)deltaVector.DX, -(int)deltaVector.DY);
				gp.Transform(m);
			}
		}

	}

	internal override void GetForceForBody(RigidBodyBase body, out Point p, out Vector v)
	{
		System.Diagnostics.Debug.Assert(Object.ReferenceEquals(body,Body.Object));

		// Rotate the attachpoint to match the body's current position.
		p = Geometry.TransformPointAsVector(body.displacement,Body.attachloc);

		// Return vector times force factor.
		v = vector * ForceMechanismBase.forceFactor;
	}
}

public sealed class PropulsiveForceMech : ForceMechanismBase
{
	protected internal override void UpdateGP()
	{
		// We keep the graphics point updated as we go; 
		// if it's already initialized, return.
		if (gp != null) return;
		else gp = new GraphicsPath();

		// Draw an arrow inward, to the attachpoint.
		Point attachpoint = Body.Object.CG + Vector.FromPoint(Body.attachloc);
		attachpoint = Geometry.TransformPoint(Body.Object.displacement,attachpoint);

		Point headpoint = attachpoint - vector;
		Point b = Geometry.GetPointOffLineSegment(headpoint,attachpoint,-400,+300);
		Point c = Geometry.GetPointOffLineSegment(headpoint,attachpoint,-400,-300);

		gp.AddLine(headpoint,attachpoint);
		gp.AddLine(attachpoint,b);
		gp.AddLine(attachpoint,c);
	}

	internal override void Move(int dx, int dy, float da)
	{
		UpdateGP();

		using (Matrix m = new Matrix())
		{
			// Rotate the whole force vector with body object.
			PointF bodycg = new PointF(Body.Object.CG.X,Body.Object.CG.Y);

			m.Translate(dx,dy);
			m.RotateAt(da, bodycg);

			gp.Transform(m);
	
			// Adjust so that you are always the correct distance 
			// from the center of gravity.
			Vector attachVector = Vector.FromPoint(Body.attachloc);
			Point currentAttachPt = 
				new Point(MathEx.Round(gp.PathPoints[1].X), MathEx.Round(gp.PathPoints[1].Y));
			Vector currentVector = Vector.FromPoints(Body.Object.CG, currentAttachPt);
			double currentLength = currentVector.Length;
			if (currentLength > 0)
			{
				Vector deltaVector = currentVector * (1 - attachVector.Length / currentLength);
				// Adjust by this delta vector.
				m.Reset();
				m.Translate(-(int)deltaVector.DX, -(int)deltaVector.DY);
				gp.Transform(m);
			}

		}
	}

	internal override void GetForceForBody(RigidBodyBase body, out Point p, out Vector v)
	{
		System.Diagnostics.Debug.Assert(Object.ReferenceEquals(body,Body.Object));

		// Rotate the attachpoint to match the body's current position.
		p = Geometry.TransformPointAsVector(body.displacement,Body.attachloc);

		// Rotate the vector as well.
		v = Vector.Transform(vector,body.displacement) * ForceMechanismBase.forceFactor;
	}
}

public sealed class GravitationalForceMech : ForceMechanismBase
{
	[XmlIgnore] public Point origin;
	[XmlAttribute("Origin")] public string xml_origin
	{
		get
		{ return MagicDocument.Convert.ToString(origin); }
		set
		{ origin = MagicDocument.Convert.ToPoint(value); }
	}

	internal override void Render(Graphics g)
	{
		UpdateGP();
		g.DrawPath(pen,gp);
	}
	private static Pen pen = new Pen(Color.Orange,75f);

	protected internal override void UpdateGP()
	{
		// We keep the graphics point updated as we go; 
		// if it's already initialized, return.
		if (gp != null) return;
		else gp = new GraphicsPath();

		// Draw an arrow from head to tail.
		Point tailpoint = origin + vector;

		if (tailpoint == origin)
			return; // no gravity

		Point b = Geometry.GetPointOffLineSegment(origin,tailpoint,-400,+300);
		Point c = Geometry.GetPointOffLineSegment(origin,tailpoint,-400,-300);

		gp.AddLine(origin,tailpoint);
		gp.AddLine(tailpoint,b);
		gp.AddLine(tailpoint,c);
	}

	internal override void Move(int dx, int dy, float da)
	{
		//nop
	}

	internal override void GetForceForBody(RigidBodyBase body, out Point p, out Vector v)
	{
		// Gravity always pulls on the bodies' CG.
		p = Point.Empty;

		// Return vector times force factor.
		v = vector * ForceMechanismBase.forceFactor;
	}
}

//
// Binary mechanisms (rods, ropes, springs, joints)

public abstract class BindingMechanismBase : MechanismBase
{
	[XmlElement] public BodyRef EndpointA;
	[XmlElement] public BodyRef EndpointB;

	internal override void CompleteDeserialization(MagicDocument doc)
	{
		EndpointA.Object = doc.LookupBody(EndpointA.strokeref);
		EndpointB.Object = doc.LookupBody(EndpointB.strokeref);
	}

	// These two methods are NOPs -- binding mechanisms are always redrawn, in their 
	// entirety, regardless of how their attached bodies are moved or resized.
	internal override void Transform(Matrix m)
	{ }
	internal override void Move(int dx, int dy, float da)
	{ }
}

public class RodMech : BindingMechanismBase
{
	[XmlAttribute] public double length = 100.0;

	// Delta time
	protected internal double dt = 50 / 1000;

	protected internal override void UpdateGP()
	{
		if (gp == null) gp = new GraphicsPath();
		else gp.Reset();

		// Draw line from head to tail.
		Point head = EndpointA.Object.CG + Vector.Transform(
			Vector.FromPoint(EndpointA.attachloc), EndpointA.Object.displacement);

		Point tail = EndpointB.Object.CG + Vector.Transform(
			Vector.FromPoint(EndpointB.attachloc), EndpointB.Object.displacement);

		gp.AddLine(head,tail);
	}

	internal override void Render(Graphics g)
	{
		UpdateGP();
		g.DrawPath(pen,gp);
	}
	private static Pen pen = new Pen(Color.Silver,120f);

	internal override void GetForceForBody(RigidBodyBase body, out Point p, out Vector v)
	{
		// Rotate the attachpoint to match the body's current position.
		BodyRef bodyref = null, farside = null;
		if (Object.ReferenceEquals(body,EndpointA.Object))
		{
			bodyref = EndpointA; farside = EndpointB;
		}
		else if (Object.ReferenceEquals(body,EndpointB.Object))
		{
			bodyref = EndpointB; farside = EndpointA;
		}
		else 
			throw new ApplicationException("Bogus bodyref!");

		p = Geometry.TransformPointAsVector(body.displacement,bodyref.attachloc);

		// Form the force vector from head to tail.
		Point head = bodyref.Object.CG + 
			Vector.Transform(Vector.FromPoint(bodyref.attachloc), bodyref.Object.displacement);
		Point tail = farside.Object.CG + 
			Vector.Transform(Vector.FromPoint(farside.attachloc), farside.Object.displacement);

		double distance = Geometry.DistanceBetween(head,tail);

		if (distance == 0.0)
		{
			// No force required
			v = new Vector(0, 0);
			return;
		}

		// We want to get the distance to be the length as quickly as possible with as
		// little overshooting. To do this, let's apply a force that will bring it part 
		// way towards the goal.
		Vector alongRod = Vector.FromPoints(head, tail);

		// Calculate force to get us a fraction of the way there.  Note: we exclude 
		// pin joints (by testing length > 0) from this calculation, because it adversely 
		// affects the rotation of wheels.
		double fraction = 0.5;
		if (!farside.Object.anchored && bodyref.Object.Mass > 0 && farside.Object.Mass > 0 &&
			length > 0)
		{
			// The fraction should be inversely proportional to the relative mass 
			// of the object so that lighter objects end up moving more.
			fraction *= 1 / ((1 / bodyref.Object.Mass + 1 / farside.Object.Mass) * bodyref.Object.Mass);
		}

		v =	alongRod * (body.Mass * fraction * (distance - length) / distance / (dt * dt));
	}
}

public class RopeMech : BindingMechanismBase
{
	[XmlAttribute] public double length = 5.0;

	[XmlElement("Midpoint",typeof(BodyRef))]
	public ArrayList midpoints; // Note: pulleys not yet implemented.

	protected internal Vector previousDamping = new Vector(0, 0);

	protected internal override void UpdateGP()
	{
		if (gp == null) gp = new GraphicsPath();
		else gp.Reset();

		// Draw curved line from head to tail, by establishing a bezier control point 
		// off the center, representing the "slack" overage of the rope's length.
		Point head = EndpointA.Object.CG + Vector.Transform(
			Vector.FromPoint(EndpointA.attachloc), EndpointA.Object.displacement);

		Point tail = EndpointB.Object.CG + Vector.Transform(
			Vector.FromPoint(EndpointB.attachloc), EndpointB.Object.displacement);

		double distance = Geometry.DistanceBetween(head,tail);
		double onethird = distance/3; // This factor makes results look about right.
		double overage = Math.Max(0.0, length - distance);

		Point midp1 = Geometry.GetPointOffLineSegment(head,tail,+onethird,+overage);
		Point midp2 = Geometry.GetPointOffLineSegment(head,tail,-onethird,-overage);

		gp.AddBezier(head,midp1,midp2,tail);
	}

	internal override void Render(Graphics g)
	{
		UpdateGP();
		g.DrawPath(pen,gp);
	}
	private static Pen pen = new Pen(Color.Green,75f);

	internal override void GetForceForBody(RigidBodyBase body, out Point p, out Vector v)
	{
		// Rotate the attachpoint to match the body's current position.
		BodyRef bodyref = null, farside = null;
		if (Object.ReferenceEquals(body,EndpointA.Object))
		{
			bodyref = EndpointA; farside = EndpointB;
		}
		else if (Object.ReferenceEquals(body,EndpointB.Object))
		{
			bodyref = EndpointB; farside = EndpointA;
		}
		else 
			throw new ApplicationException("Bogus bodyref!");

		p = Geometry.TransformPointAsVector(body.displacement,bodyref.attachloc);

		// Form the force vector from head to tail.
		Point head = bodyref.Object.CG + 
			Vector.Transform(Vector.FromPoint(bodyref.attachloc), bodyref.Object.displacement);
		Point tail = farside.Object.CG + 
			Vector.Transform(Vector.FromPoint(farside.attachloc), farside.Object.displacement);

		double distance = Geometry.DistanceBetween(head,tail);

		// Model rope like a rod, but only when the rope is taught.
		v = new Vector(0,0);
		if (distance > length)
		{
			// We want to get the distance to be the length as quickly as possible with as
			// little overshooting. To do this, let's apply a force that will bring it part 
			// way towards the goal.
			Vector alongRope = Vector.FromPoints(head, tail);

			// This dt doesn't have to be as critical as the rod, so we can just approximate
			// with something reasonable.
			double dt = 50.0 / 1000;

			// Calculate the force to get us a fraction of the way there.
			double fraction = 0.25;
			if (!farside.Object.anchored && bodyref.Object.Mass > 0 && farside.Object.Mass > 0)
			{
				// The fraction should be inversely proportional to the relative mass 
				// of the object so that lighter objects end up moving more.
				fraction *= 1 / ((1 / bodyref.Object.Mass + 1 / farside.Object.Mass) * bodyref.Object.Mass);
			}

			v =	alongRope * (body.Mass * fraction * (distance - length) / distance / (dt * dt));

			// Calculate the damping force that cancels out velocity along the rope.
			Vector velocityAlongRope = new Vector((int)(bodyref.Object.Vx - farside.Object.Vx),
				(int)(bodyref.Object.Vy - farside.Object.Vy));
			velocityAlongRope.ProjectOnto(alongRope);
			Vector damping = velocityAlongRope * (-body.Mass / dt);

			// Check to make sure we are not bouncing back and forth.
			if (!(Math.Sign(damping.DX) != Math.Sign(previousDamping.DX) &&
				Math.Sign(damping.DY) != Math.Sign(previousDamping.DY)))
			{
				v += damping;
			}
			previousDamping = damping;
		}
		else
		{
			previousDamping = new Vector(0, 0);
		}
	}
}

public sealed class SpringMech : BindingMechanismBase
{
	[XmlAttribute] public double extension = 100.0;
	[XmlAttribute] public double stiffness = 1.0;

	protected internal override void UpdateGP()
	{
		if (gp == null) gp = new GraphicsPath();
		else gp.Reset();

		// Draw zigzag line from head to tail.
		Point head = EndpointA.Object.CG + Vector.Transform(
			Vector.FromPoint(EndpointA.attachloc), EndpointA.Object.displacement);

		Point tail = EndpointB.Object.CG + Vector.Transform(
			Vector.FromPoint(EndpointB.attachloc), EndpointB.Object.displacement);

		double distance = Geometry.DistanceBetween(head,tail);
		double stretch = distance/extension;

		double halfmod = stretch*Math.Abs(Math.IEEERemainder(extension,1000))/2;

		ArrayList points = new ArrayList();
		points.Add(head);
		points.Add(Geometry.GetPointOffLineSegment(head,tail,+halfmod,0));

		double v = +500.0;
		for (double u = halfmod+500*stretch; 
			u < distance-halfmod; 
			u += 1000.0*stretch)
		{
			v *= -1;
			points.Add(Geometry.GetPointOffLineSegment(head,tail,u,v));
		}
		points.Add(Geometry.GetPointOffLineSegment(head,tail,-halfmod,0));
		points.Add(tail);

		gp.AddLines((Point[])points.ToArray(typeof(Point)));
	}

	internal override void Render(Graphics g)
	{
		UpdateGP();
		g.DrawPath(pen,gp);
	}
	private static Pen pen = new Pen(Color.OrangeRed,75f);

	internal override void GetForceForBody(RigidBodyBase body, out Point p, out Vector v)
	{
		// Rotate the attachpoint to match the body's current position.
		BodyRef bodyref = null, farside = null;
		if (Object.ReferenceEquals(body,EndpointA.Object))
		{
			bodyref = EndpointA; farside = EndpointB;
		}
		else if (Object.ReferenceEquals(body,EndpointB.Object))
		{
			bodyref = EndpointB; farside = EndpointA;
		}
		else 
			throw new ApplicationException("Bogus bodyref!");

		p = Geometry.TransformPointAsVector(body.displacement,bodyref.attachloc);

		// Form the force vector from head to tail.
		Point head = bodyref.Object.CG + 
			Vector.Transform(Vector.FromPoint(bodyref.attachloc), bodyref.Object.displacement);
		Point tail = farside.Object.CG + 
			Vector.Transform(Vector.FromPoint(farside.attachloc), farside.Object.displacement);

		double distance = Geometry.DistanceBetween(head,tail);

		// Scale based on over/under distance.
		v = Vector.FromPoints(head,tail);
		v *= stiffness*(distance-extension)/distance;
	}
}

// Joints are modeled as Rods with zero length.
public sealed class JointMech : RodMech
{
	[XmlAttribute] public double torque = 0.0;
	[XmlAttribute] public double cfriction = 1.0;

	// Constructor sets length to zero.
	public JointMech()
	{
		length = 0;
	}

	protected internal override void UpdateGP()
	{
		if (gp == null) gp = new GraphicsPath();
		else gp.Reset();

		// Draw small circle over head/tail midpoint; or a connecting line if they've 
		// drifted far away.
		Point head = EndpointA.Object.CG + Vector.Transform(
			Vector.FromPoint(EndpointA.attachloc), EndpointA.Object.displacement);

		Point tail = EndpointB.Object.CG + Vector.Transform(
			Vector.FromPoint(EndpointB.attachloc), EndpointB.Object.displacement);

		Point center;
		if (EndpointA.Object.anchored)
		{
			center = head;
		}
		else if (EndpointB.Object.anchored)
		{
			center = tail;
		}
		else
		{
			center = Geometry.Midpoint(head,tail);
		}

		Rectangle rect = new Rectangle(center, Size.Empty);
		rect.Inflate(75,75);

		if (Geometry.DistanceBetween(head,tail) < 175.0)
			gp.AddEllipse(rect);
		else
			gp.AddLine(head,tail);
	}

	internal override void Render(Graphics g)
	{
		UpdateGP();
		g.DrawPath(pen,gp);
	}
	private static Pen pen = new Pen(Color.DarkGray,50f);
}

//
// Attachment point

public sealed class BodyRef
{
	[XmlAttribute] public int strokeref;

	[XmlIgnore] public Point attachloc;
	[XmlAttribute("attachloc")] public string xml_attachloc
	{
		get
		{ return MagicDocument.Convert.ToString(attachloc); }
		set
		{ attachloc = MagicDocument.Convert.ToPoint(value); }
	}

	private RigidBodyBase body;

	internal static BodyRef For(RigidBodyBase body, Point location)
	{
		BodyRef @this = new BodyRef();
		@this.body = body;
		@this.strokeref = body.strokeid;
		@this.attachloc = location - new Size(body.CG);
		return @this;
	}

	internal RigidBodyBase Object
	{
		get { return body; }
		set { body = value; }
	}
}
