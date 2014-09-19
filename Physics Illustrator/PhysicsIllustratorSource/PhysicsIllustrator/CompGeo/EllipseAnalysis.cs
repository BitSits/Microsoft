//-------------------------------------------------------------------------
//
//  Copyright (C) 2004 Microsoft Corporation
//  All rights reserved.
//
//  File: EllipseAnalysis.cs
//  
//  Description: Computational geometry for ellipse/conic analysis.
//--------------------------------------------------------------------------


using System;
using System.Drawing;
using System.Drawing.Drawing2D;

internal class EllipseAnalysis
{
	//
	// Interface

	public static void RegressEllipsePoints(Point[] points, 
		out double x2, out double xy, out double y2, out double x1, out double y1, out double c0)
	{
		int n = points.Length;

		// Solve using QrDecomposition (least-squares regression)
		LeastSquaresRegression.Matrix lhs = new LeastSquaresRegression.Matrix(n,5);

		for (int i=0; i<n; ++i)
		{
			Point p = points[i];
			lhs[i,0] = p.X*p.X;
			lhs[i,1] = p.X*p.Y;
			lhs[i,2] = p.Y*p.Y;
			lhs[i,3] = p.X;
			lhs[i,4] = p.Y;
		}

		LeastSquaresRegression.Matrix rhs = new LeastSquaresRegression.Matrix(n,1);
		for (int i=0; i<n; ++i)
			rhs[i,0] = -1.0;

		LeastSquaresRegression.Matrix sln = lhs.Solve(rhs);

		x2 = sln[0,0]; xy = sln[1,0]; y2 = sln[2,0]; x1 = sln[3,0]; y1 = sln[4,0]; c0 = 1.0;

		EllipseAnalysis.NormalizeCoeffs(ref x2, ref xy, ref y2, ref x1, ref y1, ref c0);
	}

	public static bool IsConicAnEllipse(double x2, double xy, double y2, double x1, double y1, double c0)
	{
		// From http://www.geom.uiuc.edu/docs/reference/CRC-formulas/node28.html
		unchecked
		{
			// Calculate "delta"
			double[,] md = {
						{ x2, xy/2, x1/2 },
						{ xy/2, y2, y1/2 },
						{ x1/2, y1/2, c0 }
						   };
			double delta = Determinant3x3(md);

			// Calculate "jacobian"
			double[,] mj = {
						{ x2, xy/2 },
						{ xy/2, y2 }
						   };
			double jacob = Determinant2x2(mj);

			if (Math.Abs(delta) < 1e-12)
				return false;
			if (jacob < 0.0)
				return false;
			if (delta/(x2+y2) >= 0.0)
				return false;
		}

		return true;
	}

	public static void ReduceConic(double x2, double xy, double y2, double x1, double y1, double c0, 
		out double cx, out double cy, out double mj, out double mn, out double th)
	{
		// From http://www.ercangurvit.com/analyticplane/reduc.htm
		unchecked
		{
			// Center point == solution of {2Ax+Cy+D=0,Cx+2By+E=0}
			cx = Determinant2x2(-x1,xy,-y1,2*y2)/Determinant2x2(2*x2,xy,xy,2*y2);
			cy = Determinant2x2(2*x2,-x1,xy,-y1)/Determinant2x2(2*x2,xy,xy,2*y2);

			// Now equation is Ax² + 2Bxy + Cy² + F(cx,cy) = 0
			c0 = x2*cx*cx + xy*cx*cy + y2*cy*cy + x1*cx + y1*cy + c0;

			// Calculate eigenroots of the system, and solve quadratic
			xy /= 2.0; // to match semantics of the coeffs on reduc.htm
			double b = -1*(x2+y2);
			double c = x2*y2-xy*xy;
			double r1 = -b/2 - Math.Sqrt(b*b-4*c)/2;
			double r2 = -b/2 + Math.Sqrt(b*b-4*c)/2;

			// Now the ellipse is Ax² + Cy² + F = 0.
			// Divide through by -F to get standard form.
			mj = 1/Math.Sqrt(r1/(-c0));
			mn = 1/Math.Sqrt(r2/(-c0));

			// Calculate orientation (safely).
			if (Math.Abs(xy) > EffectivelyZero)
				th = Math.Atan((r1-x2)/xy);
			else if (Math.Abs(r1-y2) > EffectivelyZero)
				th = Math.Atan(xy/(r1-y2));
			else
				th = Math.PI/2;//90°
		}
	}

	//
	// Implementation

	private static void NormalizeCoeffs(
		ref double a, ref double b, ref double c, ref double d, ref double e, ref double f)
	{
		if (a != 0.0)
		{
			b /= a; c /= a; d /= a; e /= a; f /= a; a = 1.0;
		}
		else if (b != 0.0)
		{
			c /= b; d /= b; e /= b; f /= b; b = 1.0;
		}
		else if (c != 0.0)
		{
			d /= c; e /= c; f /= c; c = 1.0;
		}
		else if (d != 0.0)
		{
			e /= d; f /= d; d = 1.0;
		}
		else if (e != 0.0)
		{
			f /= e; e = 1.0;
		}

		if (Math.Abs(a) < 1e-10) a = 0.0;
		if (Math.Abs(b) < 1e-10) b = 0.0;
		if (Math.Abs(c) < 1e-10) c = 0.0;
		if (Math.Abs(d) < 1e-10) d = 0.0;
		if (Math.Abs(e) < 1e-10) e = 0.0;
		if (Math.Abs(f) < 1e-10) f = 0.0;
	}

	private static double Determinant2x2(
		double a11, double a12,
		double a21, double a22)
	{
		return (a11*a22-a12*a21);
	}

	private static double Determinant2x2(double[,] m)
	{
		System.Diagnostics.Debug.Assert(m.Rank == 2);
		System.Diagnostics.Debug.Assert(m.GetLength(0) == 2);
		System.Diagnostics.Debug.Assert(m.GetLength(1) == 2);
		return Determinant2x2(
			m[0,0],m[0,1],
			m[1,0],m[1,1]
			);
	}

	private static double Determinant3x3( 
		double a11, double a12, double a13, 
		double a21, double a22, double a23, 
		double a31, double a32, double a33)
	{
		// Calculate determinant of 3x3 matrix 
		// [http://mathforum.org/library/drmath/view/51440.html]
		return (
			a11*(a22*a33 - a32*a23) - 
			a12*(a21*a33 - a31*a23) + 
			a13*(a21*a32 - a31*a22)
			);
	}

	private static double Determinant3x3(double[,] m)
	{
		System.Diagnostics.Debug.Assert(m.Rank == 2);
		System.Diagnostics.Debug.Assert(m.GetLength(0) == 3);
		System.Diagnostics.Debug.Assert(m.GetLength(1) == 3);
		return Determinant3x3(
			m[0,0],m[0,1],m[0,2],
			m[1,0],m[1,1],m[1,2],
			m[2,0],m[2,1],m[2,2]
			);
	}

	private readonly static double EffectivelyZero = Math.Sqrt(Double.Epsilon);
}