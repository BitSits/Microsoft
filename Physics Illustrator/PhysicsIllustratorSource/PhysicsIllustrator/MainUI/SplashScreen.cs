//-------------------------------------------------------------------------
//
//  Copyright (C) 2004 Microsoft Corporation
//  All rights reserved.
//
//  File: SplashScreen.cs
//  
//  Description: Splash screen form.
//--------------------------------------------------------------------------

using System;
using System.Drawing;
using System.Windows.Forms;
using System.ComponentModel;

using dbg=System.Diagnostics.Debug;

[System.ComponentModel.DesignerCategory("Code")]
internal class SplashScreen : System.Windows.Forms.Form
{
	// 
	// Initialization 

	public SplashScreen()
	{
		// Required for Windows Form Designer support.
		InitializeComponent();

		// Load our icon.
		this.Icon = new Icon(typeof(SplashScreen),"PhysicsIllustrator.ico");

		// Load the background image.
		this.BackgroundImage = Global.LoadImage("Resources.SplashScreen.jpg");
		this.ClientSize = BackgroundImage.Size;

		// Declare repaint optimizations.
		base.SetStyle(
			ControlStyles.UserPaint|
			ControlStyles.AllPaintingInWmPaint|
			ControlStyles.DoubleBuffer,
			true);
	}

	#region Windows Form Designer generated code
	private void InitializeComponent()
	{
		// 
		// SplashScreen
		// 
		this.BackColor = System.Drawing.Color.Linen;
		this.ClientSize = new System.Drawing.Size(400, 300);
		this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
		this.Name = "SplashScreen";
		this.ShowInTaskbar = false;
		this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
		this.TopMost = true;
	}
	#endregion

	//
	// Overrides

	protected override void OnLoad(EventArgs e)
	{
		base.OnLoad(e);

		// Wake up in 5 seconds.
		Timer t = new Timer();
		t.Interval = 5000;
		t.Tick += new EventHandler(t_Tick);
		t.Start();
	}

	protected override void OnPaint(PaintEventArgs e)
	{
		base.OnPaint(e);

		// Paint a thin border.
		Rectangle border = this.ClientRectangle;
		border.Width -= 1;
		border.Height -= 1;

		e.Graphics.DrawRectangle(Pens.Black, border);
	}


	private void t_Tick(object sender, EventArgs e)
	{
		// One time only.
		Timer t = sender as Timer;
		t.Stop();
		t.Dispose();

		// If the splash screen still exists, dispose of it.
		if (!this.IsDisposed)
			this.Close();
	}
}