//-------------------------------------------------------------------------
//
//  Copyright (C) 2004 Microsoft Corporation
//  All rights reserved.
//
//  File: GoldenSectionDescender.cs
//  
//  Description: Golden-section search for function minima.
//--------------------------------------------------------------------------

using System;
using System.Collections;

using dbg=System.Diagnostics.Debug;

internal sealed class GoldenSectionDescender
{
	public delegate double F(double x);

	public GoldenSectionDescender(F f)
	{
		this.f = f;
	}

	public double FindMinimumWithinRange(double initialGuess, double searchRadius, double tolerance)
	{
		double left = initialGuess-searchRadius/2;
		double right = initialGuess+searchRadius/2;
		return FindMinimumWithin(left,right,tolerance);
	}

	public double FindMinimumWithin(double left, double right, double tolerance)
	{
		double middle = left+(right-left)/GoldenRatio;

		double leftY = f(left);
		double rightY = f(right);
		double middleY = f(middle);

		// Ensure we're bracketing the minimum; else, try again with different midpoint.
		if (!(middleY < leftY && middleY < rightY))
		{
			middle = right-(right-left)/GoldenRatio;
			middleY = f(middle);

			if (!(middleY < leftY && middleY < rightY))
				return (leftY < rightY) ? left : right;
		}

		while (right-left > tolerance)
		{
			if (right-middle > middle-left)
			{
				double middle2 = left+(right-left)/GoldenRatio; // step right
				double middle2Y = f(middle2);

				if (middle2Y < middleY)
				{ left = middle; middle = middle2; middleY = middle2Y; }
				else
				{ right = middle2; }
			}
			else
			{
				double middle2 = right-(right-left)/GoldenRatio; // step left
				double middle2Y = f(middle2);

				if (middle2Y < middleY)
				{ right = middle; middle = middle2; middleY = middle2Y; }
				else
				{ left = middle2; }
			}
		}

		return (left+right)/2.0;
	}

	//
	// Implementation

	private F f;
	private readonly double GoldenRatio = 2*Math.Cos(Math.PI/5);
}
