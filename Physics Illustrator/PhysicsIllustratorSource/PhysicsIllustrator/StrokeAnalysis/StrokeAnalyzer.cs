//-------------------------------------------------------------------------
//
//  Copyright (C) 2004 Microsoft Corporation
//  All rights reserved.
//
//  File: StrokeAnalyzer.cs
//  
//  Description: This file examines Ink Strokes and detects whether the strokes 
//  are closed and performs polygon approximation.
//  
//--------------------------------------------------------------------------

using System;
using System.Collections;
using System.Drawing;

using Microsoft.Ink;

using dbg=System.Diagnostics.Debug;

public sealed class StrokeAnalyzer
{
	//
	// Interface

	public static double AnalyzeTotalCurvature(Stroke stroke, double tolerance)
	{
		// Break the stroke down into indices.
		int[] indices;
		Point[] vv = SegmentizeStroke(stroke, tolerance, out indices);
		int nv = vv.Length;

		// Sum up the external angles formed at each vertex.
		double total = 0.0;
		for (int i=1; i < nv-1; ++i)
		{
			Point a,b,c;
			a = vv[i-1];
			b = vv[i];
			c = vv[i+1];
			total += Geometry.CurveDescribedBy(a,b,c);
		}

		dbg.WriteLine(String.Format("AnalyzeTotalCurvature: {0:G5}",total));
		return total;
	}

	public static void AnalyzeClosedness(Stroke stroke, double tolerance, 
		out bool closed, out Point[] vertices) // out double tAB, out double tPQ)
	{
		closed = false;
		vertices = null;

		// Formulate closure gap-tolerance, based on stroke length (but clipped to <= 500isu).
		double len = StrokeGeometry.IntegrateLength(stroke);

		double segtol = Math.Max(50,Math.Min(tolerance,len/20.0));
		double gaptol = Math.Max(150,Math.Min(tolerance,len/7.0));

		dbg.WriteLine(String.Format("length: {0}",len));
		dbg.WriteLine(String.Format("segtol: {0}",segtol));
		dbg.WriteLine(String.Format("gaptol: {0}",gaptol));

		// Break the stroke down into indices.
		int[] indices;
		vertices = SegmentizeStroke(stroke,segtol, out indices);
		int nv = vertices.Length;

		// Do the head/tail segments intersect?  Are they close?
		if (nv >= 4)
		{
			Point headA = (Point)vertices[0];
			Point headB = (Point)vertices[1];
			Point tailP = (Point)vertices[nv-2];
			Point tailQ = (Point)vertices[nv-1];

			double tAB, tPQ;
			SegmentCollision.HitTest(headA,headB,tailP,tailQ, out tAB, out tPQ);

			Point virtualIntersectH = Geometry.Interpolate(headA,headB,tAB);
			Point virtualIntersectT = Geometry.Interpolate(tailP,tailQ,tPQ);
			Point virtualIntersect = Geometry.Interpolate(virtualIntersectH,virtualIntersectT,0.5);

			double dh2i = Geometry.DistanceBetween(headA,virtualIntersect);
			double dt2i = Geometry.DistanceBetween(tailQ,virtualIntersect);

#if DEBUG
			dbg.WriteLine(String.Format("numV: {0}",nv));
			dbg.WriteLine(String.Format("tAB: {0}",tAB));
			dbg.WriteLine(String.Format("tPQ: {0}",tPQ));

			dbg.WriteLine(String.Format("isct: {0}",virtualIntersect));

			dbg.WriteLine(String.Format("dh2i: {0}",dh2i));
			dbg.WriteLine(String.Format("dt2i: {0}",dt2i));
#endif

			if (dh2i < gaptol && dt2i < gaptol)
			{
				closed = true;
				// Adjust the head point to the actual intersection.
				vertices[0] = virtualIntersect; 
				dbg.WriteLine("Closed! Why? dh/t2i < gaptol");
			}
			else if ((-0.3 < tAB && tAB < 0.3) && (0.7 < tPQ && tPQ < 1.3))
			{				
				closed = true;
				// Adjust the head point to the actual intersection.
				vertices[0] = virtualIntersect; 
				dbg.WriteLine("Closed! Why? |t*| < 0.3");
			}
			else
			{
				// Last chance: measure nearest distance from head to tail segment.
				int closeI = StrokeGeometry.FindClosestPointTo(
					stroke, headA, indices[nv-2], indices[nv-1]);
				Point close = stroke.GetPoint(closeI);
				double d = Geometry.DistanceBetween(headA,close);
				if (d < gaptol)
				{
					closed = true; // Keep the head point; discard the tail point below.
					dbg.WriteLine("Closed! Why? Last chance head/tail distance < gaptol");
				}
			}

			// Remove the last point as redundant if it's closed.
			if (closed)
			{
				Point[] verticesX = new Point[nv-1];
				Array.Copy(vertices,verticesX,nv-1);
				vertices = verticesX;
			}
		}
	}

	//
	// Implementation

	private static Point[] SegmentizeStroke(Stroke stroke, double tolerance, out int[] indices)
	{
		// Grab the ink points.
		Point[] points = stroke.GetPoints();
		int n = points.Length;

		// Segmentize at desired tolerance, to produce array of vertices.
		ArrayList vertexIndices = new ArrayList();
		vertexIndices.Add(0);
		SegmentizeSquiggle(vertexIndices,points,0,n-1,tolerance); 
		// populates vertexIndices list

		indices = vertexIndices.ToArray(typeof(int)) as int[];

		int nv = indices.Length;
		Point[] vertices = new Point[nv];

		for (int i=0; i < nv; ++i)
		{
			int index = indices[i];
			vertices[i] = points[index];
		}

		return vertices;
	}

	private static void SegmentizeSquiggle(ArrayList vertexIndices, Point[] points, int iHead, int iTail, double tolerance)
	{
		int iA = iHead;
		int iB = iTail;

		while (iA < iTail)
		{
			// Scan ink points from A to B, tracking the point of max deviation (X) 
			// from a straight line segment.
			int iX = iA;
			double maxDist = 0.0;
			for (int i=iA; i < iB; ++i)
			{
				double d = Geometry.DistanceToLine(points[i], points[iA], points[iB]);
				if (d > maxDist)
				{ maxDist = d; iX = i; }
			}

			// Is max deviation within acceptable limits?
			if (maxDist < tolerance)
			{
				// Push new line segment, update indices, and loop.
				vertexIndices.Add(iB);
				iA = iB;
				iB = iTail;
			}
			else
			{
				// Treat the point of max deviation as a cusp, and try again.
				iB = iX;
			}

			continue;
		}

		return;
	}

}
