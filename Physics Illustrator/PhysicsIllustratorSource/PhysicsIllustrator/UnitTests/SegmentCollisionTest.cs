//-------------------------------------------------------------------------
//
//  Copyright (C) 2004 Microsoft Corporation
//  All rights reserved.
//
//  File: SegmentCollisionTest.cs
//  
//  Description: Unit tests for SegmentCollision.
//--------------------------------------------------------------------------

using System;
using System.Drawing;

#if TEST
namespace UnitTests
{
	internal class SegmentCollisionTest
	{
		//[UnitTest]
		static bool Run()
		{
			Fixture[] fixes = GetFixtures();
			for (int i=0; i < fixes.Length; ++i)
			{
				Fixture fix = fixes[i];

				double tAB, tPQ;
				bool h1 = SegmentCollision.HitTest(fix.a,fix.b,fix.p,fix.q, out tAB, out tPQ);
				bool h2 = SegmentCollision.HitTest(fix.a,fix.b,fix.p,fix.q);

				if (h1 != h2)
				{
					Console.Error.WriteLine(String.Format("Test fixture [{0}] did not match across algorithms!",fix.caseName));
					Console.Error.WriteLine("h1={0}, h2={1}, tAB={2}, tPQ={3}",
						h1,h2,tAB,tPQ);
					return false;
				}
				else if (h1 != fix.expected)
				{
					Console.Error.WriteLine(String.Format("Test fixture [{0}] did not match expected result.",fix.caseName));
					return false;
				}
				else
					Console.WriteLine(String.Format("Test fixture [{0}] passed.",fix.caseName));
			}

			return true;
		}

		internal struct Fixture
		{
			public string caseName;
			public Point a,b;
			public Point p,q;
			public bool expected;
		}

		internal static Fixture[] GetFixtures()
		{
			Fixture[] fixes = new Fixture[9];
			int n = 0;

			fixes[n].caseName = "Positive test";
			fixes[n].a = new Point(15,15); fixes[n].b = new Point(25,25);
			fixes[n].p = new Point(15,25); fixes[n].q = new Point(25,15);
			fixes[n++].expected = true;

			fixes[n].caseName = "Another positive test";
			fixes[n].a = new Point(2500,2500); fixes[n].b = new Point(1500,1500);
			fixes[n].p = new Point(2500,1500); fixes[n].q = new Point(1500,2500);
			fixes[n++].expected = true;

			fixes[n].caseName = "Parallel, not collinear";
			fixes[n].a = new Point(15,15); fixes[n].b = new Point(25,25);
			fixes[n].p = new Point(15,25); fixes[n].q = new Point(25,35);
			fixes[n++].expected = false;

			fixes[n].caseName = "Parallel collinear, not overlapping";
			fixes[n].a = new Point(15,15); fixes[n].b = new Point(25,25);
			fixes[n].p = new Point(35,35); fixes[n].q = new Point(45,45);
			fixes[n++].expected = false;

			fixes[n].caseName = "Parallel collinear, overlapping";
			fixes[n].a = new Point(15,15); fixes[n].b = new Point(25,25);
			fixes[n].p = new Point(20,20); fixes[n].q = new Point(30,30);
			fixes[n++].expected = true;

			fixes[n].caseName = "Parallel collinear, contained";
			fixes[n].a = new Point(15,15); fixes[n].b = new Point(35,35);
			fixes[n].p = new Point(20,20); fixes[n].q = new Point(30,30);
			fixes[n++].expected = true;

			fixes[n].caseName = "Endpoint on midpoint, not parallel";
			fixes[n].a = new Point(15,15); fixes[n].b = new Point(25,25);
			fixes[n].p = new Point(20,20); fixes[n].q = new Point(20,30);
			fixes[n++].expected = true;

			fixes[n].caseName = "Endpoint on endpoint, not parallel";
			fixes[n].a = new Point(15,15); fixes[n].b = new Point(25,25);
			fixes[n].p = new Point(25,25); fixes[n].q = new Point(25,35);
			fixes[n++].expected = true;

			fixes[n].caseName = "Parallel collinear, endpoint on endpoint";
			fixes[n].a = new Point(15,15); fixes[n].b = new Point(25,25);
			fixes[n].p = new Point(25,25); fixes[n].q = new Point(35,35);
			fixes[n++].expected = true;

			return fixes;
		}
	}
}
#endif
