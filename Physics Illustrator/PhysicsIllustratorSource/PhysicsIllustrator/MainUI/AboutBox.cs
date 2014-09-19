//-------------------------------------------------------------------------
//
//  Copyright (C) 2004 Microsoft Corporation
//  All rights reserved.
//
//  File: AboutBox.cs
//  
//  Description: About box form.
//--------------------------------------------------------------------------

using System;
using System.Drawing;
using System.Windows.Forms;
using System.ComponentModel;
using System.Reflection;

using dbg=System.Diagnostics.Debug;

//[System.ComponentModel.DesignerCategory("Code")]
internal class AboutBox : System.Windows.Forms.Form
{
	private System.Windows.Forms.Button button1;
	private System.Windows.Forms.Panel panel1;
	private System.Windows.Forms.Label label1;
	private System.Windows.Forms.Label label2;
	private System.Windows.Forms.Label label3;
	private System.Windows.Forms.LinkLabel linkLabel2;
	private System.Windows.Forms.LinkLabel linkLabel3;
	private System.Windows.Forms.LinkLabel linkLabel4;
	private System.Windows.Forms.LinkLabel linkLabel1;

	// 
	// Initialization 

	public AboutBox()
	{
		// Required for Windows Form Designer support.
		InitializeComponent();

		// Load our icon.
		this.Icon = new Icon(typeof(AboutBox),"PhysicsIllustrator.ico");

		// Set the version label.
		this.label1.Text = String.Format(this.label1.Text,
			Application.ProductVersion);

		// Load image for panel, tracking the size-change.
		int y0 = this.panel1.Bottom;
		this.panel1.BackgroundImage = Global.LoadImage("Resources.SplashScreen.jpg");
		this.panel1.ClientSize = panel1.BackgroundImage.Size;
		int dy1 = this.panel1.Bottom-y0;

		// Resize the window to accommodate: controls will shift according to 
		// their anchor settings.
		this.Width = panel1.BackgroundImage.Width;
		this.Height += dy1;
	}

	#region Windows Form Designer generated code
	private void InitializeComponent()
	{
		this.button1 = new System.Windows.Forms.Button();
		this.panel1 = new System.Windows.Forms.Panel();
		this.label1 = new System.Windows.Forms.Label();
		this.label2 = new System.Windows.Forms.Label();
		this.label3 = new System.Windows.Forms.Label();
		this.linkLabel1 = new System.Windows.Forms.LinkLabel();
		this.linkLabel2 = new System.Windows.Forms.LinkLabel();
		this.linkLabel3 = new System.Windows.Forms.LinkLabel();
		this.linkLabel4 = new System.Windows.Forms.LinkLabel();
		this.SuspendLayout();
		// 
		// button1
		// 
		this.button1.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Right)));
		this.button1.DialogResult = System.Windows.Forms.DialogResult.OK;
		this.button1.FlatStyle = System.Windows.Forms.FlatStyle.System;
		this.button1.Location = new System.Drawing.Point(280, 372);
		this.button1.Name = "button1";
		this.button1.TabIndex = 0;
		this.button1.Text = "OK";
		// 
		// panel1
		// 
		this.panel1.BackColor = System.Drawing.SystemColors.Window;
		this.panel1.Dock = System.Windows.Forms.DockStyle.Top;
		this.panel1.Location = new System.Drawing.Point(0, 0);
		this.panel1.Name = "panel1";
		this.panel1.Size = new System.Drawing.Size(360, 220);
		this.panel1.TabIndex = 1;
		// 
		// label1
		// 
		this.label1.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left) 
			| System.Windows.Forms.AnchorStyles.Right)));
		this.label1.FlatStyle = System.Windows.Forms.FlatStyle.System;
		this.label1.Location = new System.Drawing.Point(4, 236);
		this.label1.Name = "label1";
		this.label1.Size = new System.Drawing.Size(352, 16);
		this.label1.TabIndex = 2;
		this.label1.Text = "Physics Illustrator for Tablet PC -- version {0}";
		this.label1.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
		// 
		// label2
		// 
		this.label2.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left) 
			| System.Windows.Forms.AnchorStyles.Right)));
		this.label2.FlatStyle = System.Windows.Forms.FlatStyle.System;
		this.label2.Location = new System.Drawing.Point(4, 256);
		this.label2.Name = "label2";
		this.label2.Size = new System.Drawing.Size(352, 16);
		this.label2.TabIndex = 3;
		this.label2.Text = "Copyright © 2004 Microsoft Corporation.  All rights reserved.";
		this.label2.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
		// 
		// label3
		// 
		this.label3.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left) 
			| System.Windows.Forms.AnchorStyles.Right)));
		this.label3.FlatStyle = System.Windows.Forms.FlatStyle.System;
		this.label3.Location = new System.Drawing.Point(4, 276);
		this.label3.Name = "label3";
		this.label3.Size = new System.Drawing.Size(352, 16);
		this.label3.TabIndex = 4;
		this.label3.Text = "Created by Leszynski Group, Inc.";
		this.label3.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
		// 
		// linkLabel1
		// 
		this.linkLabel1.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left)));
		this.linkLabel1.AutoSize = true;
		this.linkLabel1.FlatStyle = System.Windows.Forms.FlatStyle.System;
		this.linkLabel1.Location = new System.Drawing.Point(8, 316);
		this.linkLabel1.Name = "linkLabel1";
		this.linkLabel1.Size = new System.Drawing.Size(174, 16);
		this.linkLabel1.TabIndex = 5;
		this.linkLabel1.TabStop = true;
		this.linkLabel1.Text = "http://www.microsoft.com/tabletpc";
		this.linkLabel1.LinkClicked += new System.Windows.Forms.LinkLabelLinkClickedEventHandler(this.linkLabelN_LinkClicked);
		// 
		// linkLabel2
		// 
		this.linkLabel2.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left)));
		this.linkLabel2.AutoSize = true;
		this.linkLabel2.FlatStyle = System.Windows.Forms.FlatStyle.System;
		this.linkLabel2.Location = new System.Drawing.Point(8, 336);
		this.linkLabel2.Name = "linkLabel2";
		this.linkLabel2.Size = new System.Drawing.Size(150, 16);
		this.linkLabel2.TabIndex = 6;
		this.linkLabel2.TabStop = true;
		this.linkLabel2.Text = "http://research.microsoft.com";
		this.linkLabel2.LinkClicked += new System.Windows.Forms.LinkLabelLinkClickedEventHandler(this.linkLabelN_LinkClicked);
		// 
		// linkLabel3
		// 
		this.linkLabel3.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left)));
		this.linkLabel3.AutoSize = true;
		this.linkLabel3.FlatStyle = System.Windows.Forms.FlatStyle.System;
		this.linkLabel3.Location = new System.Drawing.Point(8, 356);
		this.linkLabel3.Name = "linkLabel3";
		this.linkLabel3.Size = new System.Drawing.Size(174, 16);
		this.linkLabel3.TabIndex = 7;
		this.linkLabel3.TabStop = true;
		this.linkLabel3.Text = "http://www.leszynski.com/tabletpc";
		this.linkLabel3.LinkClicked += new System.Windows.Forms.LinkLabelLinkClickedEventHandler(this.linkLabelN_LinkClicked);
		// 
		// linkLabel4
		// 
		this.linkLabel4.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left)));
		this.linkLabel4.AutoSize = true;
		this.linkLabel4.FlatStyle = System.Windows.Forms.FlatStyle.System;
		this.linkLabel4.Location = new System.Drawing.Point(8, 376);
		this.linkLabel4.Name = "linkLabel4";
		this.linkLabel4.Size = new System.Drawing.Size(123, 16);
		this.linkLabel4.TabIndex = 8;
		this.linkLabel4.TabStop = true;
		this.linkLabel4.Text = "http://www.csail.mit.edu";
		this.linkLabel4.LinkClicked += new System.Windows.Forms.LinkLabelLinkClickedEventHandler(this.linkLabelN_LinkClicked);
		// 
		// AboutBox
		// 
		this.AcceptButton = this.button1;
		this.AutoScaleBaseSize = new System.Drawing.Size(5, 13);
		this.ClientSize = new System.Drawing.Size(360, 400);
		this.Controls.Add(this.linkLabel4);
		this.Controls.Add(this.linkLabel3);
		this.Controls.Add(this.linkLabel2);
		this.Controls.Add(this.linkLabel1);
		this.Controls.Add(this.label2);
		this.Controls.Add(this.label1);
		this.Controls.Add(this.label3);
		this.Controls.Add(this.panel1);
		this.Controls.Add(this.button1);
		this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedDialog;
		this.MaximizeBox = false;
		this.MinimizeBox = false;
		this.Name = "AboutBox";
		this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
		this.Text = "About Physics Illustrator for Tablet PC";
		this.ResumeLayout(false);

	}
	#endregion

	//
	// Implementation

	private void linkLabelN_LinkClicked(object sender, System.Windows.Forms.LinkLabelLinkClickedEventArgs e)
	{
		LinkLabel label = (LinkLabel)sender;
		string url = label.Text;
		try
		{
			System.Diagnostics.Process.Start(url);
			label.LinkVisited = true;
		}
		catch (Exception ex)
		{
			MessageBox.Show(this,ex.Message,Application.ProductName,MessageBoxButtons.OK,MessageBoxIcon.Error);
		}
	}
}