//-------------------------------------------------------------------------
//
//  Copyright (C) 2004 Microsoft Corporation
//  All rights reserved.
//
//  File: PolygonRegularizer.cs
//  
//  Description: Polygon straightening logic.
//--------------------------------------------------------------------------

using System;
using System.Collections;
using System.Drawing;
using System.Drawing.Drawing2D;

using dbg=System.Diagnostics.Debug;

internal sealed class PolygonRegularizer
{
	private PolygonRegularizer(Point[] vertices)
	{
		this.vertices = (Point[])vertices.Clone();
	}

	Point[] vertices;
	
	double[] sidelengths;
	double[] angles;

	double[] idealsidelengths;
	double[] idealangles;
	double[] idealanglescomplement;
	Point[] idealverts;

	//
	// Interface

	public static void Straighten(ref Point[] vertices)
	{
		PolygonRegularizer pr = new PolygonRegularizer(vertices);
		
		pr.CongealSideLengths();
		pr.CongealVertexAngles();
		pr.RescaleVertexAngles();

		pr.ReconstructIdealizedPolygon();
		pr.QuantizeSegmentOrientations();

		vertices = pr.idealverts;
	}

	//
	// Implementation

	private void CongealSideLengths()
	{
		// Get side lengths.
		int n = vertices.Length;
		sidelengths = new double[n];
		for (int i=0; i < n; ++i)
		{
			int a=i; int b=i+1;
			if (b >= n) b = 0; // wrap
			sidelengths[i] = Geometry.DistanceBetween(vertices[a],vertices[b]);
		}

		// Group them into heuristic buckets -- no two groups closer than 500 isu.
		ScalarPartitioning sp = new ScalarPartitioning(sidelengths);
		idealsidelengths = sp.Partition(500.0);
	}

	private void CongealVertexAngles()
	{
		// Get internal angles.
		int n = vertices.Length;
		double[] absangles = new double[n]; // always positive
		angles = new double[n]; // retains left/right sign
		for (int i=0; i < n; ++i)
		{
			int a=i-1; int b=i; int c=i+1;
			if (a < 0) a = n-1; // wrap left
			if (c >= n) c = 0; // wrap right
			absangles[i] = Geometry.Rad2Deg(Geometry.AngleDescribedBy(vertices[a],vertices[b],vertices[c]));
			angles[i] = Geometry.Rad2Deg(Geometry.CurveDescribedBy(vertices[a],vertices[b],vertices[c]));
		}

		// Group angles into heuristic buckets -- no two groups closer than 12°.
		ScalarPartitioning sp = new ScalarPartitioning(absangles);
		idealangles = sp.Partition(12.0);

		// Retain original sign (left/right curvature) of angle.
		for (int i=0; i < n; ++i)
			idealangles[i] = Math.Sign(angles[i]) * idealangles[i];
	}

	private void RescaleVertexAngles()
	{
		// Get external complements to the idealized internal angles; remember them for later, 
		// but for now make sure they add up to 360°.
		int n = vertices.Length;
		idealanglescomplement = new double[n];
		double sumext = 0.0;
		for (int i=0; i < n; ++i)
		{
			if (idealangles[i] < 0)
				idealanglescomplement[i] = -180-idealangles[i];
			else // idealangles[i] >= 0
				idealanglescomplement[i] = 180-idealangles[i];

			sumext += idealanglescomplement[i];

			dbg.WriteLine(String.Format("idealangle: {0}, extangle: {1}", idealangles[i], idealanglescomplement[i]));
		}

		double rescale = sumext/360.0;
		dbg.WriteLine("rescale: "+rescale);

		for (int i=0; i < n; ++i)
		{
			idealangles[i] *= rescale;
			dbg.WriteLine(String.Format("idealangle: {0}", idealangles[i]));
		}

	}

	private void ReconstructIdealizedPolygon()
	{
		int n = vertices.Length;
		// An extra spot for a temporary "tailpoint".
		Point[] idealvertsx = new Point[n+1]; 

		// First, find longest segment (to use as starting point).
		int longesti = -1;
		double longest = -1;
		for (int i=0; i < n; ++i)
		{
			if (this.idealsidelengths[i] > longest)
			{ longest = this.idealsidelengths[i]; longesti = i; }
		}
		int longestj = longesti+1;
		if (longestj >= n) longestj = 0; //wrap

		// Start at vertex ahead of longest segment, and go from there.
		idealvertsx[0] = vertices[longesti];
		double theta = Math.Atan2(vertices[longestj].Y-vertices[longesti].Y,
			vertices[longestj].X-vertices[longesti].X);

		for (int i=0; i < n; ++i)
		{
			int ii = longesti+i;
			if (ii >= n) ii -= n; //wrap

			idealvertsx[i+1] = Geometry.OffsetPolar(
				idealvertsx[i],theta,idealsidelengths[ii]);

			int jj = ii+1;
			if (jj >= n) jj = 0; // wrap
			theta += Geometry.Deg2Rad(idealanglescomplement[jj]);
		}

		// Replace headpoint and tailpoint with virtual intersection.
		double tAB, tPQ;
		Point headA=idealvertsx[0],headB=idealvertsx[1],
			tailP=idealvertsx[n-1],tailQ=idealvertsx[n-0];
		SegmentCollision.HitTest(headA,headB,tailP,tailQ, out tAB, out tPQ);

		Point virtualIntersectH = Geometry.Interpolate(headA,headB,tAB);
		Point virtualIntersectT = Geometry.Interpolate(tailP,tailQ,tPQ);
		Point virtualIntersect = Geometry.Interpolate(virtualIntersectH,virtualIntersectT,0.5);

		this.idealverts = new Point[n];
		Array.Copy(idealvertsx,idealverts,n);
		idealverts[0] = virtualIntersect;

		// Recenter on original center of gravity (CG).
		Point oldcg = Geometry.EstimatePolygonCentroid(vertices);
		Point newcg = Geometry.EstimatePolygonCentroid(idealverts);
		using (Matrix m = new Matrix())
		{
			m.Translate(oldcg.X-newcg.X,oldcg.Y-newcg.Y);
			m.TransformPoints(idealverts);
		}
	}

	private void QuantizeSegmentOrientations()
	{
		// Find the optimal rotation angle, to minimize segments' orientation from 0/30/45/60.
		Point center = Geometry.EstimatePolygonCentroid(idealverts);
		QsoImpl fi = new QsoImpl(idealverts,center);
		GoldenSectionDescender.F f = new GoldenSectionDescender.F(fi.F);
		GoldenSectionDescender gsd = new GoldenSectionDescender(f);

		double tolerance = 0.01;
		double optangle = gsd.FindMinimumWithin(-12.0,+12.0,tolerance);

		// Now rotate them!
		using (Matrix m = new Matrix())
		{
			m.RotateAt((float)optangle, new PointF(center.X,center.Y));
			m.TransformPoints(idealverts);
		}
	}

	private class QsoImpl
	{
		public QsoImpl(Point[] verts, Point center)
		{ this.verts = verts; this.center = new PointF(center.X,center.Y); }

		private Point[] verts;
		private PointF center;

		public double F(double angle)
		{
			// Make a scratch copy of the vertices.
			Point[] verts = this.verts.Clone() as Point[];

			// Rotate them the specified amount, around the centroid.
			using (Matrix m = new Matrix())
			{
				m.RotateAt((float)angle, new PointF(center.X,center.Y));
				m.TransformPoints(verts);
			}

			// Accumulate the segments' deviation from 0/15/30/60/90.
			double sumE = 0.0;

			int n = verts.Length;
			for (int i=0; i < n; ++i)
			{
				int a=i; int b=i+1;
				if (b >= n) b = 0; // wrap

				double sidelen = Geometry.DistanceBetween(verts[a],verts[b]);

				double theta = Geometry.Rad2Deg(
					Math.Atan2(verts[b].Y-verts[a].Y,verts[b].X-verts[a].X));

				// Quantize angle around 0/30/45/60/90/120/135/150/180.
				sumE += sidelen * Math.Min(
					Math.Abs(Math.IEEERemainder(theta,30.0)),
					Math.Abs(Math.IEEERemainder(theta,45.0)));
			}

			dbg.WriteLine(String.Format("Testing {0}°, error={1}", angle, sumE));
			return sumE;
		}
	}

}