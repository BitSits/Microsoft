//-------------------------------------------------------------------------
//
//  Copyright (C) 2004 Microsoft Corporation
//  All rights reserved.
//
//  File: LeastSquaresRegression.cs
//  
//  Description: Least-squares regression, used to fit 
//	the general conic equation to a stream of points.
//--------------------------------------------------------------------------

using System;

namespace LeastSquaresRegression
{
	internal class Matrix
	{
		private double[][] data;
		private int rows;
		private int columns;
	
		public Matrix(int rows, int columns)
		{
			this.rows = rows;
			this.columns = columns;
			this.data = new double[rows][];
			for (int i = 0; i < rows; i++)
			{
				this.data[i] = new double[columns];
			}
		}
	
		double[][] Data
		{
			get { return data; }
		}
	
		public int Rows
		{
			get { return rows; }
		}

		public int Columns
		{
			get { return columns; }
		}

		public double this[int i, int j]
		{
			set { data[i][j] = value; }
			get { return data[i][j]; }
		}

		public Matrix Submatrix(int i0, int i1, int j0, int j1)
		{
			Matrix X = new Matrix(i1-i0+1,j1-j0+1);
			double[][] x = X.Data;
			for (int i = i0; i <= i1; i++)
				for (int j = j0; j <= j1; j++)
					x[i - i0][j - j0] = data[i][j];
			return X;
		}

		public Matrix Clone()
		{
			Matrix X = new Matrix(rows, columns);
			double[][] x = X.Data;
			for (int i = 0; i < rows; i++)
				for (int j = 0; j < columns; j++)
					x[i][j] = data[i][j];
			return X;
		}

		public Matrix Solve(Matrix rhs)
		{
			return GetQrDecomposition().Solve(rhs);
		}

		private QrDecomposition GetQrDecomposition()
		{
			return new QrDecomposition(this);
		}

		private class QrDecomposition //: IQrDecomposition
		{
			private Matrix QR;
			private double[] Rdiag;
		
			public QrDecomposition(Matrix A)
			{
				QR = (Matrix) A.Clone();
				double[][] qr = QR.Data;
				int m = A.Rows;
				int n = A.Columns;
				Rdiag = new double[n];
		
				for (int k = 0; k < n; k++) 
				{
					// Compute 2-norm of k-th column without under/overflow.
					double nrm = 0;
					for (int i = k; i < m; i++)
						nrm = MathHelper.Hypotenuse(nrm,qr[i][k]);
					 
					if (nrm != 0.0) 
					{
						// Form k-th Householder vector.
						if (qr[k][k] < 0)
							nrm = -nrm;
						for (int i = k; i < m; i++)
							qr[i][k] /= nrm;
						qr[k][k] += 1.0;
		
						// Apply transformation to remaining columns.
						for (int j = k+1; j < n; j++) 
						{
							double s = 0.0; 
							for (int i = k; i < m; i++)
								s += qr[i][k]*qr[i][j];
							s = -s/qr[k][k];
							for (int i = k; i < m; i++)
								qr[i][j] += s*qr[i][k];
						}
					}
					Rdiag[k] = -nrm;
				}
			}
		
			public Matrix Solve(Matrix rhs)
			{
				if (rhs.Rows != QR.Rows) throw new ArgumentException("Matrix row dimensions must agree.");
				if (!IsFullRank) throw new InvalidOperationException("Matrix is rank deficient.");
					
				// Copy right hand side
				int count = rhs.Columns;
				Matrix X = rhs.Clone();
				int m = QR.Rows;
				int n = QR.Columns;
				double[][] qr = QR.Data;
				
				// Compute Y = transpose(Q)*B
				for (int k = 0; k < n; k++) 
				{
					for (int j = 0; j < count; j++) 
					{
						double s = 0.0; 
						for (int i = k; i < m; i++)
							s += qr[i][k] * X[i,j];
						s = -s / qr[k][k];
						for (int i = k; i < m; i++)
							X[i,j] += s * qr[i][k];
					}
				}
					
				// Solve R*X = Y;
				for (int k = n-1; k >= 0; k--) 
				{
					for (int j = 0; j < count; j++) 
						X[k,j] /= Rdiag[k];
		
					for (int i = 0; i < k; i++) 
						for (int j = 0; j < count; j++) 
							X[i,j] -= X[k,j] * qr[i][k];
				}
		
				return X.Submatrix(0, n-1, 0, count-1);
			}
		
			public bool IsFullRank
			{
				get
				{
					int columns = QR.Columns;
					for (int j = 0; j < columns; j++) 
						if (Rdiag[j] == 0)
							return false;
					return true;
				}			
			}

		}

		private class MathHelper
		{
			public static double Hypotenuse(double a, double b) 
			{
				if (Math.Abs(a) > Math.Abs(b))
				{
					double r = b / a;
					return Math.Abs(a) * Math.Sqrt(1 + r * r);
				}

				if (b != 0)
				{
					double r = a / b;
					return Math.Abs(b) * Math.Sqrt(1 + r * r);
				}

				return 0.0;
			}
		}
	}
}
