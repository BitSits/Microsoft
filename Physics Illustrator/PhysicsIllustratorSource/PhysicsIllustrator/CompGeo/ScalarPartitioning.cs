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
//  File: ScalarPartitioning.cs
//  
//  Description: Algorithm for partitioning sets of scalar values.
//--------------------------------------------------------------------------

using System;
using System.Collections;

using dbg=System.Diagnostics.Debug;

internal sealed class ScalarPartitioning
{
	// A sorted set of values, along with the original indices.
	private IndexValueCouplet[] svalues; 

	public ScalarPartitioning(double[] values)
	{
		int n = values.Length;

		// Plot the values on a number line (in other words, sort them).  
		// But retain the ordering of the items, for later re-ordering.
		this.svalues = new IndexValueCouplet[n];
		for (int i=0; i < n; ++i)
			svalues[i] = new IndexValueCouplet(i,values[i]);

		Array.Sort(svalues,IndexValueCouplet.ByValue);
	}
	
	private class IndexValueCouplet
	{
		public int index;
		public double value;

		public IndexValueCouplet(int index, double value)
		{
			this.index = index;
			this.value = value;
		}

		public static IComparer ByIndex 
		{ get { return new CompareByIndex(); } }

		private class CompareByIndex : IComparer
		{
			public int Compare(object x, object y)
			{
				IndexValueCouplet xx = (IndexValueCouplet)x;
				IndexValueCouplet yy = (IndexValueCouplet)y;

				if (xx.index == yy.index) return 0;
				else return (xx.index < yy.index) ? -1 : +1;
			}
		}

		public static IComparer ByValue
		{ get { return new CompareByValue(); } }

		private class CompareByValue : IComparer
		{
			public int Compare(object x, object y)
			{
				IndexValueCouplet xx = (IndexValueCouplet)x;
				IndexValueCouplet yy = (IndexValueCouplet)y;

				if (xx.value == yy.value) return 0;
				else return (xx.value < yy.value) ? -1 : +1;
			}
		}
	}

	public double[] Partition(double groupSizeThreshold)
	{
		bool debug = true;
		return Partition(groupSizeThreshold,debug);
	}

	public double[] Partition(double groupSizeThreshold, bool debug)
	{
		if (debug)
		{
			dbg.WriteLine("Sorted values:");
			foreach (IndexValueCouplet vc in svalues)
				dbg.Write(String.Format("{0} ", vc.value.ToString("G4").PadLeft(5)));
			dbg.WriteLine("");
		}

		// Measure the gap sizes.
		int n = svalues.Length;
		double[] gaps = new double[n-1];
		for (int i=0; i < n-1; ++i)
			gaps[i] = svalues[i+1].value-svalues[i].value;

		if (debug)
		{
			dbg.WriteLine("Gap sizes:");
			foreach (double val in gaps)
				dbg.Write(String.Format("{0} ", val.ToString("G4").PadLeft(5)));
			dbg.WriteLine("");
		}

		// Divide and partition.
		ArrayList groupBucket = new ArrayList(n); // reasonable upper-bound guess for bucket size
		DivideAndConquer(groupBucket, gaps, groupSizeThreshold, 0, n-1);

		// Return result buckets as jagged array of doubles.
		IndexValueCouplet[][] buckets = (IndexValueCouplet[][])groupBucket.ToArray(typeof(IndexValueCouplet[]));

		if (debug)
		{
			dbg.WriteLine("Resulting group buckets:");
			foreach (IndexValueCouplet[] bucket in buckets)
			{
				foreach (IndexValueCouplet vc in bucket)
					dbg.Write(String.Format("#{0}:{1} ", vc.index, vc.value.ToString("G4").PadLeft(5)));
				dbg.WriteLine("");
			}
		}

		// Calculate per-bucket average, and construct result-array.
		double[] newvalues = new double[n];
		foreach (IndexValueCouplet[] bucket in buckets)
		{
			double sum = 0.0;
			foreach (IndexValueCouplet vc in bucket)
				sum += vc.value;
			double avg = sum/bucket.Length;
			foreach (IndexValueCouplet vc in bucket)
				newvalues[vc.index] = avg;
		}

		if (debug)
		{
			dbg.WriteLine("Resulting values:");
			foreach (double val in newvalues)
				dbg.Write(String.Format("{0} ", val.ToString("G4").PadLeft(5)));
			dbg.WriteLine("");
		}

		return newvalues;
	}

	private void DivideAndConquer(ArrayList groupBucket, double[] gaps, double threshold, int a, int b)
	{
		// First, check for trivial recursion 
		// (for example, if there's only one element in range).
		if (a == b)
		{
			// Add group (of one) to bucket, and pop back up the stack.
			IndexValueCouplet[] group = new IndexValueCouplet[1];
			Array.Copy(this.svalues,a,group,0,1);

			groupBucket.Add(group);
			return;
		}

		// Find the two biggest gaps (or biggest single gap, if there's only 
		// two points in this range).
		System.Diagnostics.Debug.Assert(gaps.Length > 0);
		int biggest = -1; int biggest2 = -1;
		for (int i=a; i < b; ++i)
		{
			if (biggest < 0 || gaps[i] > gaps[biggest])
			{
				biggest2 = biggest; biggest = i;
			}
			else if (biggest2 < 0 || gaps[i] > gaps[biggest2])
			{
				biggest2 = i;
			}
		}
		if (biggest2 < 0) biggest2 = biggest;

		// Only split further if one of the following two conditions is met:
		//   - range > 2x specified threshold, or 
		//   - range > 1x threshold, and there exists an obvious split point 
		//     (say, a gap 1.5x bigger than any other).
		double range = svalues[b].value-svalues[a].value;
		double gapSizeRatio = gaps[biggest]/gaps[biggest2];
		if ((range > 2*threshold) || (range > 1*threshold && gapSizeRatio > 1.5))
		{
			// Split on the biggest single gap.
			DivideAndConquer(groupBucket, gaps, threshold, a, biggest);
			DivideAndConquer(groupBucket, gaps, threshold, biggest+1, b);
		}
		else
		{
			// Add group to bucket, and pop back up the stack.
			int n = b-a+1;
			IndexValueCouplet[] group = new IndexValueCouplet[n];
			Array.Copy(this.svalues,a,group,0,n);

			groupBucket.Add(group);
			return;
		}
	}

}
