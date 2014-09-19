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
//  File: SegmentCollision.cs
//  
//  Description: Intersection detection and/or extrapolation, 
//  for simple line segments.
//--------------------------------------------------------------------------
using System;
using System.Drawing;

internal sealed class SegmentCollision
{
	private SegmentCollision() { }

	//
	// Interface

	public static bool HitTest(Point a, Point b, Point p, Point q)
	{
		// Validate arguments.
		if (a == b) throw new ArgumentException("Line segment AB is a singular point.");
		if (p == q) throw new ArgumentException("Line segment PQ is a singular point.");

		// Take cross product from A to B, through P and then Q; 
		// return false if same sign.
		double apb = Math.Sign(Geometry.CrossABC(a,p,b));
		double aqb = Math.Sign(Geometry.CrossABC(a,q,b));
		if (apb < 0 && aqb < 0) return false;
		if (apb > 0 && aqb > 0) return false;

		// Now, do the same from P to Q, through A and then B.
		double paq = Math.Sign(Geometry.CrossABC(p,a,q));
		double pbq = Math.Sign(Geometry.CrossABC(p,b,q));
		if (paq < 0 && pbq < 0) return false;
		if (paq > 0 && pbq > 0) return false;

		// We either intersect, or have a collinear case; we check the more common first
		// (whereby none of the signs is zero).
		if (apb*aqb*paq*pbq != 0)
			return true;

		// At least one of our endpoints is collinear with the other segment; we test 
		// the endpoints against the bounding boxes, to determine intersection.
		Point abUL = new Point(Math.Min(a.X,b.X),Math.Min(a.Y,b.Y));
		Size abWH = new Size(Math.Abs(a.X-b.X)+1,Math.Abs(a.Y-b.Y)+1);
		Rectangle abRect = new Rectangle(abUL,abWH);

		if (apb == 0 && abRect.Contains(p)) return true;
		if (aqb == 0 && abRect.Contains(q)) return true;
		
		Point pqUL = new Point(Math.Min(p.X,q.X),Math.Min(p.Y,q.Y));
		Size pqWH = new Size(Math.Abs(p.X-q.X)+1,Math.Abs(p.Y-q.Y)+1);
		Rectangle pqRect = new Rectangle(pqUL,pqWH);

		if (paq == 0 && pqRect.Contains(a)) return true;
		if (pbq == 0 && pqRect.Contains(b)) return true;

		// If we made it this far, the segments are not touching.
		return false;
	}

	public static bool HitTest(Point a, Point b, Point p, Point q, 
		out double tAB, out double tPQ)
	{
		// Initialize [out] args.
		tAB = tPQ = Double.NaN;

		// To find the point of intersection, we define each line segment 
		// parametrically, based on 0<t<1:
		//   X = X0 + (X1-X0)t
		//   Y = Y0 + (Y1-Y0)t
		// We have two such parametric equations, one for each line segment.  So we 
		// equate the X's and Y's, and solve for the two values of t:
		//   ax + (bx-ax)t' = px + (qx-px)t"
		//   ay + (by-ay)t' = py + (qy-py)t"
		// Rearranging, to solve by using Cramer's Rule:
		//   (bx-ax)t' + (px-qx)t" = (px-ax) => [bx-ax px-qx][px-ax]
		//   (by-ay)t' + (py-qy)t" = (py-ay) => [by-ay py-qy][py-ay]
		double a11 = b.X-a.X; double a12 = p.X-q.X; double b1 = p.X-a.X;
		double a21 = b.Y-a.Y; double a22 = p.Y-q.Y; double b2 = p.Y-a.Y;

		double d = MathEx.Determinant2x2(a11,a12,a21,a22);
		// Note: values for t will be infinity or NaN, in parallel or collinear cases 
		// (where d==0.0).
		
		tAB = MathEx.Determinant2x2(b1,a12,b2,a22)/d;
		tPQ = MathEx.Determinant2x2(a11,b1,a21,b2)/d;

		//return (0.0 <= tAB && tAB <= 1.0 && 0.0 <= tPQ && tPQ <= 1.0);
		return HitTest(a,b,p,q); 
		// Note: we can't simply check for 0<tAB,tPQ<1, 
		// due to some inconsistencies in parallel/collinear/overlapping cases.
		// (Adding a little logic to reconcile that might improve performance here.)
	}
}