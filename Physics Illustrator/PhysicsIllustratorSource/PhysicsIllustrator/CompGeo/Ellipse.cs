//-------------------------------------------------------------------------
//
//  Copyright (C) 2004 Microsoft Corporation
//  All rights reserved.
//
//  File: Ellipse.cs
//  
//  Description: Ellipse representation.
//--------------------------------------------------------------------------

using System;
using System.Drawing;
using System.Drawing.Drawing2D;

internal struct Ellipse
{
	int cx, cy, mj, mn;
	float th;

	public Ellipse(Point center, int majoraxis, int minoraxis, float orientation) :
		this(center.X,center.Y,majoraxis,minoraxis,orientation)
	{}

	public Ellipse(int centerx, int centery, int majoraxis, int minoraxis, float orientation)
	{
		this.cx = centerx;
		this.cy = centery;
		this.mj = majoraxis;
		this.mn = minoraxis;
		this.th = orientation;
	}

	public bool IsEmpty
	{
		get
		{ return (cx == 0 && cy == 0 && mj == 0 && mn == 0); }
	}

	public Point Center
	{
		get { return new Point(cx,cy); }
	}

	public int MajorAxis
	{
		get { return mj; }
	}

	public int MinorAxis
	{
		get { return mn; }
	}

	public float Orientation
	{
		get { return th; }
	}

	public static Ellipse FromRegression(Point[] points)
	{
		double x2,xy,y2,x1,y1,c0;
		EllipseAnalysis.RegressEllipsePoints(points, out x2, out xy, out y2, out x1, out y1, out c0);

		if (!EllipseAnalysis.IsConicAnEllipse(x2,xy,y2,x1,y1,c0))
			return new Ellipse(0,0,0,0,0f); //throw new ApplicationException("Error regressing ellipse: parameters non-conic.");

		double cx,cy,mj,mn,th;
		EllipseAnalysis.ReduceConic(x2,xy,y2,x1,y1,c0, out cx, out cy, out mj, out mn, out th);

		return new Ellipse((int)cx,(int)cy,(int)mj,(int)mn,(float)Geometry.Rad2Deg(th));
	}

	public bool IsFit(Point[] points)
	{
		// Note: rigorously calculating distance(point,ellipse) is very hard... 
		// overlay the regions and compare the areas, for now.
		using (GraphicsPath polygp = new GraphicsPath())
		using (GraphicsPath elligp = new GraphicsPath())
		using (Matrix m = new Matrix())
		{
			// Set up gp for stroke.
			polygp.AddPolygon(points);

			// Set up gp for ellipse.
			elligp.AddEllipse((float)-mj,(float)-mn,(float)mj*2,(float)mn*2);

			m.Translate((float)cx,(float)cy);
			m.Rotate((float)th);
			elligp.Transform(m);

			// Prepare regions for area-calculation.
			using (Region xor = new Region(elligp))
			using (Region isc = new Region(elligp))
			{
				xor.Xor(polygp);
				isc.Intersect(polygp);

				float badarea = Geometry.CalculateArea(xor);
				float iscarea = Geometry.CalculateArea(isc);
				float ratio = iscarea/badarea;

				//heuristic: 10.0 seems about right.
				return (ratio > 10f);
			}
		}
	}

	public void Transform(Matrix m)
	{
		// Get five representative points.
		Point[] points = GetPoints(5, m);

		// Create ellipse from regression
		Ellipse elli = FromRegression(points);
		this.cx = elli.cx;
		this.cy = elli.cy;
		this.mj = elli.mj;
		this.mn = elli.mn;
		this.th = elli.th;
	}

	public Point[] GetPoints(int nPoints, Matrix m)
	{
		// Generate sequence of points on ellipse.
		Point[] points = new Point[nPoints];
		for (int i=0; i < nPoints; ++i)
		{
			double t = i* 2 * Math.PI / nPoints;
			double x = mj*Math.Cos(t);
			double y = mn*Math.Sin(t);

			double h = Math.Sqrt(x*x + y*y);
			double q = Math.Atan2(y,x);

			x = h*Math.Cos(q+Geometry.Deg2Rad(th));
			y = h*Math.Sin(q+Geometry.Deg2Rad(th));

			points[i].X = (int)Math.Round(x+cx);
			points[i].Y = (int)Math.Round(y+cy);
		}

		// Apply the transform to the points.
		m.TransformPoints(points);

		return points;
	}
}