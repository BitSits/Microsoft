//-------------------------------------------------------------------------
//
//  Copyright (C) 2004 Microsoft Corporation
//  All rights reserved.
//
//  File: HoverRegionBase.cs
//  
//  Description: Defines a region of hidden controls on the main drawing surface, 
//  which become visible when the pen hovers near.  Class is abstract -- actual child 
//	controls are instantiated and managed by derived class (and parent form).
//--------------------------------------------------------------------------

using System;
using System.Drawing;
using System.Windows.Forms;
using System.Collections;
using System.Reflection; // Used to invoke Control.InvokePaint and Control.Background methods.

internal abstract class HoverRegionBase
{
	//
	// Initialization

	public HoverRegionBase(Control parent, bool pinned)
	{
		this.parent = parent;
		this.pinned = pinned;
		if (!pinned)
			parent.MouseMove += new MouseEventHandler(parent_MouseMove);

		enabled = true;
	}

	//
	// Interface

	public bool Enabled
	{
		get
		{ return enabled; }
		set
		{
			enabled = value;
			foreach (Control c in Controls)
				c.Visible = enabled;
		}
	}

	public bool Pinned
	{
		get
		{ return pinned; }
	}

	public void AddControl(Control control, bool rightaligned)
	{
		ArrayList temp = new ArrayList(Controls);
		temp.Add(control);
		Controls = (Control[])temp.ToArray(typeof(Control));

		temp = new ArrayList(ControlAlignments);
		temp.Add(rightaligned);
		ControlAlignments = (bool[])temp.ToArray(typeof(bool));
	}

	public void AddControl(Control control)
	{
		AddControl(control,false);
	}

	public Control[] Controls
	{
		get
		{ return children != null ? children : new Control[0]; }
		set
		{ children = value; }
	}

	public bool[] ControlAlignments
	{
		get
		{ return rhsflags != null ? rhsflags : new bool[0]; }
		set
		{ rhsflags = value; }
	}

	public Control Parent
	{
		get
		{ return parent; }
		set
		{ parent = value; }
	}

	public void UpdateTargetRectLayout()
	{
		// Ensure controls along right hand side aren't clipped off-window.
		int n = Controls.Length;

		int x=20,y=20,d=20+22,xr=Parent.Width-d;

		targetarea = Rectangle.Empty;
		for (int i=0; i < n; ++i)
		{
			Control c = Controls[i];
			bool rhs = ControlAlignments[i];

			if (rhs)
			{
				c.Location = new Point(xr,y);
				xr -= d;
			}	
			else 
			{
				c.Location = new Point(x,y);
				x += d;
			}

			targetarea = Rectangle.Union(targetarea, new Rectangle(c.Location,c.Size));
		}

		targetarea.Inflate(20,20);
	}

	public virtual void DisplayInitial()
	{
		// Ensure layout is correct.
		UpdateTargetRectLayout();

		// Raise flag, to keep controls initially visible for a few seconds.
		initialDisplay = true; 

		// Show the controls.
		foreach (Control control in Controls)
			if (!control.Visible) control.Show();
		childrenVisible = true;

		// Set initialDisplay flag to false, after a few seconds.
		Timer initialtimer = new Timer();
		initialtimer.Interval = 3000;
		initialtimer.Tick += new EventHandler(initialtimer_Tick);
		initialtimer.Start();
	}

	//
	// Implementation

	private Control parent;
	private Rectangle targetarea;
	private bool enabled;
	private readonly bool pinned;
	private Control[] children;
	private bool[] rhsflags;
	private bool ghostsVisible;
	private bool childrenVisible;
	private bool initialDisplay;

	private void initialtimer_Tick(object sender, EventArgs e)
	{
		// Stop the timer.
		Timer t = sender as Timer;
		t.Stop();
		t.Dispose();

		this.initialDisplay = false;
	}

	private void parent_MouseMove(object sender, MouseEventArgs e)
	{
		if (pinned) return;
		if (!enabled) return;

		// Out of range?
		if (!IsCursorInRange() && !initialDisplay)
		{
			// Hide the controls.
			if (childrenVisible)
			{
				foreach (Control control in Controls)
					if (control.Visible) control.Hide();
				childrenVisible = false;
			}
		}
		else
		{
			// In range -- not showing anything yet?
			if (!childrenVisible && !ghostsVisible && Form.MouseButtons == MouseButtons.None)
			{
				// Show the ghosts, and fire a one-shot timer.
				ShowGhosts();
				StartOneShotTimer();
			}
		}
	}

	private bool IsCursorInRange()
	{
		Rectangle screentarget = parent.RectangleToScreen(targetarea);
		return (screentarget.Contains(Form.MousePosition));
	}

	private void ShowGhosts()
	{
		// Induce controls to paint themselves into an offscreen buffer, then wash over 
		// with a 33% alpha brush of the parent's background color.
		MethodInfo invokepaintbackground = typeof(Control).GetMethod(
			"InvokePaintBackground",BindingFlags.Instance|BindingFlags.NonPublic);

		MethodInfo invokepaint = typeof(Control).GetMethod(
			"InvokePaint",BindingFlags.Instance|BindingFlags.NonPublic);

		using (Graphics g = parent.CreateGraphics())
		{
			foreach (Control c in Controls)
			{
				int w = c.ClientRectangle.Width;
				int h = c.ClientRectangle.Height;
				System.Drawing.Imaging.PixelFormat argb32 = 
					System.Drawing.Imaging.PixelFormat.Format32bppArgb;

				using (Image bufferimage = new Bitmap(w,h,argb32))
				using (Graphics buffer = Graphics.FromImage(bufferimage))
				{
					PaintEventArgs pea = new PaintEventArgs(buffer,c.ClientRectangle);

					invokepaintbackground.Invoke(c, new object[] { c, pea });
					invokepaint.Invoke(c, new object[] { c, pea });

					Brush blend = new SolidBrush(Color.FromArgb(192,parent.BackColor));
					buffer.FillRectangle(blend,c.ClientRectangle);

					// Note: should probably draw in parent.Paint, not here.  But 
					// the parent window is unlikely to receive a repaint message 
					// in the small window of time the ghost buttons are visible, so 
					// this works.
					g.DrawImageUnscaled(bufferimage,c.Location.X,c.Location.Y);
				}
			}
		}

		ghostsVisible = true;
	}

	private void StartOneShotTimer()
	{
		Timer oneshot = new Timer();
		oneshot.Interval = 600;
		oneshot.Tick += new EventHandler(oneshot_Tick);
		oneshot.Start();
	}

	private void oneshot_Tick(object sender, EventArgs e)
	{
		// Stop the timer.
		Timer t = sender as Timer;
		t.Stop();
		t.Dispose();

		// Is the pen still in range?
		if (IsCursorInRange())
		{
			// Show the controls.
			foreach (Control control in Controls)
				if (!control.Visible) control.Show();
			childrenVisible = true;
		}

		// Hide the ghosts.
		ghostsVisible = false;
		parent.Invalidate(targetarea,true);
	}
}
