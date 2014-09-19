//-------------------------------------------------------------------------
//
//  Copyright (C) 2004 Microsoft Corporation
//  All rights reserved.
//
//  File: Geometry.cs
//  
//  Description: Geometry functions.
//--------------------------------------------------------------------------

using System;
using System.Drawing;
using System.Drawing.Drawing2D;

internal sealed class Geometry
{
	private Geometry() { } // suppress default public ctor

	public static double Deg2Rad(double t)
	{ return t*Math.PI/180.0; }

	public static double Rad2Deg(double t)
	{ return t*180.0/Math.PI; }

	public static Point Midpoint(Point a, Point b)
	{
		int avgx = (a.X+b.X)/2;
		int avgy = (a.Y+b.Y)/2;
		return new Point(avgx,avgy);
	}

	public static Size SizeFromPoints(Point a, Point b)
	{
		return new Size(b.X-a.X,b.Y-a.Y);
	}

	public static Point Midpoint(Rectangle r)
	{
		return new Point((r.Left+r.Right)/2,(r.Top+r.Bottom)/2);
	}

	public static PointF Midpoint(RectangleF r)
	{
		return new PointF((r.Left+r.Right)/2F,(r.Top+r.Bottom)/2F);
	}

	public static Point Interpolate(Point a, Point b, double t)
	{
		if (Double.IsNaN(t) || Double.IsInfinity(t)) t = 0.5;
		int dx = MathEx.Round(t*(b.X-a.X));
		int dy = MathEx.Round(t*(b.Y-a.Y));
		return new Point(a.X+dx,a.Y+dy);
	}

	public static Point GetPointOffLineSegment(
		Point head, Point tail, double u, double v)
	{
		Vector vect = Vector.FromPoints(head,tail);
		double th = Math.Atan2(vect.DY,vect.DX);

		double len = Geometry.DistanceBetween(head,tail);
		if (u < 0) u = len+u;

		double dx = v * Math.Sin(-th);
		double dy = v * Math.Cos(th);

		Point midp = Geometry.Interpolate(head,tail,u/len) + 
            new Vector(MathEx.Round(dx),MathEx.Round(dy));

		return midp;
	}

	public static Point OffsetPolar(Point o, double th, double dist)
	{
		int dx = MathEx.Round(dist*Math.Cos(th));
		int dy = MathEx.Round(dist*Math.Sin(th));
		o.Offset(dx,dy);
		return o;
	}

	public static Rectangle Round(RectangleF rect)
	{
		return new Rectangle(MathEx.Round(rect.Left),MathEx.Round(rect.Top),
			MathEx.Round(rect.Width),MathEx.Round(rect.Height));
	}

	public static double DistanceBetween(Point p, Point q)
	{
		// From Pythagorus
		return Math.Sqrt((double)(p.X-q.X)*(p.X-q.X) + (double)(p.Y-q.Y)*(p.Y-q.Y));
	}

	public static double DistanceToLine(Point p, Point a, Point b)
	{
		// Sanity-check for coincident points a and b (and avoiding div/0, below)
		if (a == b)
			return DistanceBetween(p, a);

		// Math is here: http://astronomy.swin.edu.au/~pbourke/geometry/pointline/
		int distsquare = (a.X-b.X)*(a.X-b.X)+(a.Y-b.Y)*(a.Y-b.Y);
		int utop = ((p.X-a.X)*(b.X-a.X)+(p.Y-a.Y)*(b.Y-a.Y));
		double u = ((double)utop)/((double)distsquare);

		Point x = new Point(a.X+(int)(u*(b.X-a.X)), a.Y+(int)(u*(b.Y-a.Y)));
		return DistanceBetween(p, x);
	}

	public static double AngleDescribedBy(Point a, Point b, Point c)
	{
		// BA·BC == |BA||BC|Cos(a)... a == ACos(BA·BC÷|BA||BC|)
		double dotProduct = (a.X-b.X)*(c.X-b.X) + (a.Y-b.Y)*(c.Y-b.Y);
		double baMagnitude = Math.Sqrt((a.X-b.X)*(a.X-b.X)+(a.Y-b.Y)*(a.Y-b.Y));
		double bcMagnitude = Math.Sqrt((c.X-b.X)*(c.X-b.X)+(c.Y-b.Y)*(c.Y-b.Y));
		double cosTheta = dotProduct/(baMagnitude*bcMagnitude);
		double theta = Math.Acos(cosTheta);
		return theta; //radians, [0,180]
	}

	public static double CurveDescribedBy(Point a, Point b, Point c)
	{
		double th = Math.PI - AngleDescribedBy(a,b,c);
		return (IsRightHandTurn(a,b,c) ? +th : -th);

	}

	public static double CrossABC(Point a, Point b, Point c)
	{
		// BAxBC
		Vector ba = Vector.FromPoints(b,a);
		Vector bc = Vector.FromPoints(b,c);
		return Vector.Cross(ba,bc);
	}

	public static bool IsRightHandTurn(Point a, Point b, Point c)
	{
		// We check for z<0 because GDI is a left-handed coordinate system.
		return (CrossABC(a,b,c) < 0.0);
	}

	public static float CalculateArea(Region region)
	{
		using (Matrix identity = new Matrix())
		{
			RectangleF[] rects = region.GetRegionScans(identity);

			float sumA = 0f;
			foreach (RectangleF rect in rects)
				sumA += (rect.Width*rect.Height);

			return sumA;
		}
	}

	public static Point CenterOfGravity(Region region)
	{
		using (Matrix identity = new Matrix())
		{
			RectangleF[] rects = region.GetRegionScans(identity);

			float sumX = 0f;
			float sumY = 0f;
			float area = 0f;
			foreach (RectangleF rect in rects)
			{
				sumX += ((rect.Left+rect.Right)/2f) * (rect.Width*rect.Height);
				sumY += ((rect.Top+rect.Bottom)/2f) * (rect.Width*rect.Height);
				area += (rect.Width*rect.Height);
			}
			int avgX = MathEx.Round(sumX/area);
			int avgY = MathEx.Round(sumY/area);

			return new Point(avgX,avgY);
		}
	}

	public static Point EstimatePolygonCentroid(Point[] vertices)
	{
		int sumX = 0, sumY = 0;
		foreach (Point p in vertices)
		{
			sumX += p.X;
			sumY += p.Y;
		}

		int n = vertices.Length;
		int avgX = sumX/n, avgY = sumY/n;

		return new Point(avgX,avgY);
	}


	public static double CalculateMoment(Region region)
	{
		Point cg = CenterOfGravity(region);

		using (Matrix identity = new Matrix())
		{
			RectangleF[] rects = region.GetRegionScans(identity);

			double moment = 0.0;
			foreach (RectangleF rect in rects)
			{
				// Sum I0+md²; I0 = m/12*(W²+H²)
				Point cp = Geometry.Midpoint(Geometry.Round(rect));
				double m = (rect.Width/1000f*rect.Height/1000f); // assume 1g/cm²
				double i0 = m/12.0 * (MathEx.Square(rect.Width/1000f)+MathEx.Square(rect.Height/1000f));
				moment += i0 + m * MathEx.Square(Geometry.DistanceBetween(cp,cg)/1000f);
			}

			return moment;
		}
	}

	public static Matrix MatrixFromRects(Rectangle from, Rectangle to)
	{
		Point[] pts = new Point[3];
		pts[0] = to.Location;
		pts[1] = to.Location + new Size(to.Width,0);
		pts[2] = to.Location + new Size(0,to.Height);
		return new Matrix(from, pts);
	}

	public static Point TransformPoint(Matrix m, Point p)
	{
		Point[] wrap = new Point[] { p };
		m.TransformPoints(wrap);
		return wrap[0];
	}

	public static Point TransformPointAsVector(Matrix m, Point v)
	{
		Point[] wrap = new Point[] { v };
		m.TransformVectors(wrap);
		return wrap[0];
	}
}
