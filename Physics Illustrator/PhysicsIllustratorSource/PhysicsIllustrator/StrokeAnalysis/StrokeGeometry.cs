//-------------------------------------------------------------------------
//
//  Copyright (C) 2004 Microsoft Corporation
//  All rights reserved.
//
//  File: StrokeGeometry.cs
//  
//  Description: Geometric operations on ink strokes.
//--------------------------------------------------------------------------

using System;
using System.Drawing;

using Microsoft.Ink;

public sealed class StrokeGeometry
{
	Stroke stroke;

	public StrokeGeometry(Stroke stroke)
	{
		this.stroke = stroke;
	}

	// Full-fidelity stroke-length integration
	public double IntegrateLength()
	{
		Point[] points = stroke.GetPoints();
		int numpoints = points.Length;
		int numsegs = numpoints-1;
		
		// Integrate the exact length of each segment.
		double d = 0.0;
		for (int i=0; i < numsegs; ++i)
			d += Geometry.DistanceBetween(points[i],points[i+1]);
		
		return d;
	}
	public static double IntegrateLength(Stroke stroke)
	{
		StrokeGeometry sg = new StrokeGeometry(stroke);
		return sg.IntegrateLength();
	}

	// Approximate stroke-length integration (a little faster, but inexact).
	public double IntegrateLengthApproximate(double tolerance)
	{
		Point[] points = stroke.GetPoints();
		int numpoints = points.Length;
		int numsegs = numpoints-1;

		// Remeasure at increasing resolution until desired tolerance is met.
		double prevd = 0.0;
		for (int divisor=32; divisor <= numsegs; divisor*=2)
		{
			divisor = Math.Min(divisor,numsegs); // Clip the divisor at numsegs.
			System.Diagnostics.Debug.Assert((divisor < numsegs/4), 
				"Perf: divisor grew too high", "Consider calling IntegrateLength instead");

			double d = 0.0;
			for (int i=0; i < divisor; ++i)
			{
				int a = i*(numsegs)/divisor;
				int b = (i+1)*(numsegs)/divisor;
				d += Geometry.DistanceBetween(points[a],points[b]);
			}

			if (Math.Abs(d-prevd) < tolerance)
				return d;

			prevd = d;
		} //next divisor

		return prevd; // You will never be here, unless numpoints==1.
	}
	public static double IntegrateLengthApproximate(Stroke stroke, double tolerance)
	{
		StrokeGeometry sg = new StrokeGeometry(stroke);
		return sg.IntegrateLengthApproximate(tolerance);
	}

	// You can't specify a boundary, intrastroke, 
	// by using the Tablet SDK's NearestPoint method.
	public int FindClosestPointTo(Point p, int start, int finish)
	{
		FcptImpl fi = new FcptImpl(stroke,p);
		GoldenSectionDescender.F f = new GoldenSectionDescender.F(fi.F);
		GoldenSectionDescender gsd = new GoldenSectionDescender(f);
		
		return MathEx.Round(gsd.FindMinimumWithin(start,finish,1));
	}
	public static int FindClosestPointTo(Stroke stroke, Point p, int start, int finish)
	{
		StrokeGeometry sg = new StrokeGeometry(stroke);
		return sg.FindClosestPointTo(p,start,finish);
	}

	private class FcptImpl
	{
		Stroke s; Point p;
		public FcptImpl(Stroke s, Point p)
		{ this.s = s; this.p = p; }

		public double F(double x)
		{
			int i = MathEx.Round(x);
			Point q = s.GetPoint(i);
			return (p.X-q.X)*(p.X-q.X) + (p.Y-q.Y)*(p.Y-q.Y);
		}
	}

}
