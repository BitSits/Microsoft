//-------------------------------------------------------------------------
//
//  Copyright (C) 2004 Microsoft Corporation
//  All rights reserved.
//
//  File: MathEx.cs
//  
//  Description: Math functions.
//--------------------------------------------------------------------------
using System;

internal sealed class MathEx
{
	private MathEx() {}

	public static double Square(double v)
	{ return v*v; }

	public static int Square(int v)
	{ return v*v; }

	public static int Round(float f)
	{
		int i = (int)f;
		float m = (f >= 0f) ? 0.5f : -0.5f;

		if (f-i > m)
			return i+1;
		else
			return i;
	}
	public static int Round(double d)
	{
		int i = (int)d;
		double m = (d >= 0.0) ? 0.5 : -0.5;

		if (d-i > m)
			return i+1;
		else
			return i;
	}

	public static int Average(params int[] vals)
	{
		int sum = 0;
		foreach (int val in vals)
			sum += val;

		return sum/vals.Length;
	}

	public static double Average(params double[] vals)
	{
		double sum = 0.0;
		foreach (double val in vals)
			sum += val;

		return sum/vals.Length;
	}

	public static double Determinant2x2(
		double a11, double a12, 
		double a21, double a22)
	{
		return (a11*a22-a12*a21);
	}

}