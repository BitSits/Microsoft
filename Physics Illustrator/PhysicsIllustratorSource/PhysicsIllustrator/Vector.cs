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
//  File: Vector.cs
//  
//  Description: 2D vector class.
//--------------------------------------------------------------------------

using System;
using System.Drawing;
using System.Drawing.Drawing2D;

public struct Vector
{
	private int dx,dy;

	public Vector(int dx, int dy)
	{
		this.dx = dx;
		this.dy = dy;
	}

	public Vector Clone()
	{
		return new Vector(this.dx, this.dy);
	}

	//
	// Valuetype obligations

	public static bool operator==(Vector lhs, Vector rhs)
	{
		return (lhs.dx == rhs.dx && lhs.dy == rhs.dy);
	}

	public static bool operator!=(Vector lhs, Vector rhs)
	{
		return (lhs.dx != rhs.dx || lhs.dy != rhs.dy);
	}

	public override bool Equals(object obj)
	{
		if (obj == null) return false;
		if (obj.GetType() != typeof(Vector)) return false;
		Vector v = (Vector)obj;
		return v == this; // fwd to op=
	}

	public override int GetHashCode()
	{
		return ToSize().GetHashCode();
	}

	public override string ToString()
	{
		return ToSize().ToString();
	}

	//
	// Interop

	public static Vector FromSize(Size sz)
	{
		return new Vector(sz.Width,sz.Height);
	}

	public static Vector FromPoint(Point p)
	{
		return new Vector(p.X,p.Y);
	}
	public static Vector FromPoints(Point p, Point q)
	{
		return new Vector(q.X-p.X, q.Y-p.Y);
	}

	public Size ToSize() { return new Size(dx,dy); }

	//
	// Interface

	public int DX { get { return dx; } }
	public int DY { get { return dy; } }

	public double Length { get { return Math.Sqrt(LengthSq); } }
	public double LengthSq { get { return dx*dx+dy*dy; } }

	public static Point operator+(Point p, Vector v)
	{
		return new Point(p.X+v.dx,p.Y+v.dy);
	}

	public static Point operator-(Point p, Vector v)
	{
		return new Point(p.X-v.dx,p.Y-v.dy);
	}

	public static Vector operator+(Vector lhs, Vector rhs)
	{
		return new Vector(lhs.dx+rhs.dx, lhs.dy+rhs.dy);
	}

	public static Vector operator-(Vector lhs, Vector rhs)
	{
		return new Vector(lhs.dx-rhs.dx, lhs.dy-rhs.dy);
	}

	public static Vector operator*(Vector lhs, double rhs)
	{
		return new Vector(MathEx.Round(lhs.dx*rhs),MathEx.Round(lhs.dy*rhs));
	}

	public static Vector operator/(Vector lhs, double rhs)
	{
		return new Vector(MathEx.Round(lhs.dx/rhs),MathEx.Round(lhs.dy/rhs));
	}

	public static double Cross(Vector ba, Vector bc)
	{
		// BAxBC
		return MathEx.Determinant2x2(
			ba.dx, ba.dy,
			bc.dx, bc.dy);
	}

	public void Transform(Matrix m)
	{
		Point[] wrap = new Point[] { new Point(dx,dy) };
		m.TransformVectors(wrap);
		dx = wrap[0].X; dy = wrap[0].Y;
	}
	public static Vector Transform(Vector v, Matrix m)
	{
		Vector v1 = v;
		v1.Transform(m);
		return v1;
	}

	public int Dot(Vector v)
	{
		return dx*v.dx + dy*v.dy;
	}

	public void ProjectOnto(Vector v)
	{
		double vLength = v.Length;
		double dotPerLength = Dot(v) / vLength;
		dx = MathEx.Round(dotPerLength * v.dx / vLength);
		dy = MathEx.Round(dotPerLength * v.dy / vLength);
	}

	public Vector Normalize()
	{
		double length = Length;
		return new Vector(MathEx.Round(dx/length), MathEx.Round(dy/length));
	}
}