//-------------------------------------------------------------------------
//
//  Copyright (C) 2004 Microsoft Corporation
//  All rights reserved.
//
//  File: BodyPropertiesForm.cs
//  
//  Description: Form for editing bodies' material properties.
//--------------------------------------------------------------------------

using System;
using System.Drawing;
using System.Collections;
using System.ComponentModel;
using System.Windows.Forms;

public class BodyPropertiesForm : System.Windows.Forms.Form
{
	private System.Windows.Forms.GroupBox groupBox1;
	private System.Windows.Forms.GroupBox groupBox2;
	private System.Windows.Forms.GroupBox groupBox3;
	private System.Windows.Forms.TrackBar trackBar1;
	private System.Windows.Forms.TrackBar trackBar2;
	private System.Windows.Forms.TrackBar trackBar3;
	private System.Windows.Forms.Button button1;
	private System.Windows.Forms.Button button2;
	private System.Windows.Forms.Button button3;

	private System.ComponentModel.Container components = null;
	private System.Windows.Forms.ColorDialog colorDialog1;

	private RigidBodyBase body;
	private System.Windows.Forms.ListBox listBox1;
	private System.Windows.Forms.GroupBox groupBox4;

	public BodyPropertiesForm(RigidBodyBase body)
	{
		// Required for Windows Form Designer support
		InitializeComponent();

		// Further initialization.
		this.body = body;
		InitTrackBarValues();
	}

	protected override void Dispose( bool disposing )
	{
		if( disposing )
		{
			if(components != null)
			{
				components.Dispose();
			}
		}
		base.Dispose( disposing );
	}

	#region Windows Form Designer generated code
	/// <summary>
	/// Required method for Designer support - do not modify
	/// the contents of this method with the code editor.
	/// </summary>
	private void InitializeComponent()
	{
		this.groupBox1 = new System.Windows.Forms.GroupBox();
		this.trackBar1 = new System.Windows.Forms.TrackBar();
		this.groupBox2 = new System.Windows.Forms.GroupBox();
		this.trackBar2 = new System.Windows.Forms.TrackBar();
		this.groupBox3 = new System.Windows.Forms.GroupBox();
		this.trackBar3 = new System.Windows.Forms.TrackBar();
		this.button1 = new System.Windows.Forms.Button();
		this.button2 = new System.Windows.Forms.Button();
		this.colorDialog1 = new System.Windows.Forms.ColorDialog();
		this.button3 = new System.Windows.Forms.Button();
		this.listBox1 = new System.Windows.Forms.ListBox();
		this.groupBox4 = new System.Windows.Forms.GroupBox();
		this.groupBox1.SuspendLayout();
		((System.ComponentModel.ISupportInitialize)(this.trackBar1)).BeginInit();
		this.groupBox2.SuspendLayout();
		((System.ComponentModel.ISupportInitialize)(this.trackBar2)).BeginInit();
		this.groupBox3.SuspendLayout();
		((System.ComponentModel.ISupportInitialize)(this.trackBar3)).BeginInit();
		this.groupBox4.SuspendLayout();
		this.SuspendLayout();
		// 
		// groupBox1
		// 
		this.groupBox1.Controls.Add(this.trackBar1);
		this.groupBox1.Location = new System.Drawing.Point(144, 8);
		this.groupBox1.Name = "groupBox1";
		this.groupBox1.Size = new System.Drawing.Size(280, 64);
		this.groupBox1.TabIndex = 1;
		this.groupBox1.TabStop = false;
		this.groupBox1.Text = "Density";
		// 
		// trackBar1
		// 
		this.trackBar1.Dock = System.Windows.Forms.DockStyle.Fill;
		this.trackBar1.Location = new System.Drawing.Point(3, 16);
		this.trackBar1.Maximum = 100;
		this.trackBar1.Name = "trackBar1";
		this.trackBar1.Size = new System.Drawing.Size(274, 45);
		this.trackBar1.TabIndex = 0;
		this.trackBar1.TickFrequency = 10;
		this.trackBar1.TickStyle = System.Windows.Forms.TickStyle.TopLeft;
		this.trackBar1.Value = 50;
		this.trackBar1.ValueChanged += new System.EventHandler(this.trackBar1_ValueChanged);
		// 
		// groupBox2
		// 
		this.groupBox2.Controls.Add(this.trackBar2);
		this.groupBox2.Location = new System.Drawing.Point(144, 80);
		this.groupBox2.Name = "groupBox2";
		this.groupBox2.Size = new System.Drawing.Size(280, 64);
		this.groupBox2.TabIndex = 2;
		this.groupBox2.TabStop = false;
		this.groupBox2.Text = "Elasticity";
		// 
		// trackBar2
		// 
		this.trackBar2.Dock = System.Windows.Forms.DockStyle.Fill;
		this.trackBar2.Location = new System.Drawing.Point(3, 16);
		this.trackBar2.Maximum = 100;
		this.trackBar2.Name = "trackBar2";
		this.trackBar2.Size = new System.Drawing.Size(274, 45);
		this.trackBar2.TabIndex = 0;
		this.trackBar2.TickFrequency = 10;
		this.trackBar2.TickStyle = System.Windows.Forms.TickStyle.TopLeft;
		this.trackBar2.Value = 75;
		this.trackBar2.ValueChanged += new System.EventHandler(this.trackBar2_ValueChanged);
		// 
		// groupBox3
		// 
		this.groupBox3.Controls.Add(this.trackBar3);
		this.groupBox3.Location = new System.Drawing.Point(144, 152);
		this.groupBox3.Name = "groupBox3";
		this.groupBox3.Size = new System.Drawing.Size(280, 64);
		this.groupBox3.TabIndex = 3;
		this.groupBox3.TabStop = false;
		this.groupBox3.Text = "Friction";
		// 
		// trackBar3
		// 
		this.trackBar3.Dock = System.Windows.Forms.DockStyle.Fill;
		this.trackBar3.Location = new System.Drawing.Point(3, 16);
		this.trackBar3.Maximum = 100;
		this.trackBar3.Name = "trackBar3";
		this.trackBar3.Size = new System.Drawing.Size(274, 45);
		this.trackBar3.TabIndex = 0;
		this.trackBar3.TickFrequency = 10;
		this.trackBar3.TickStyle = System.Windows.Forms.TickStyle.TopLeft;
		this.trackBar3.Value = 100;
		this.trackBar3.ValueChanged += new System.EventHandler(this.trackBar3_ValueChanged);
		// 
		// button1
		// 
		this.button1.DialogResult = System.Windows.Forms.DialogResult.Cancel;
		this.button1.Location = new System.Drawing.Point(256, 224);
		this.button1.Name = "button1";
		this.button1.Size = new System.Drawing.Size(80, 24);
		this.button1.TabIndex = 5;
		this.button1.Text = "OK";
		this.button1.Click += new System.EventHandler(this.button1_Click);
		// 
		// button2
		// 
		this.button2.DialogResult = System.Windows.Forms.DialogResult.Cancel;
		this.button2.Location = new System.Drawing.Point(344, 224);
		this.button2.Name = "button2";
		this.button2.Size = new System.Drawing.Size(80, 24);
		this.button2.TabIndex = 6;
		this.button2.Text = "Cancel";
		// 
		// colorDialog1
		// 
		this.colorDialog1.AllowFullOpen = false;
		this.colorDialog1.Color = System.Drawing.Color.DarkCyan;
		this.colorDialog1.SolidColorOnly = true;
		// 
		// button3
		// 
		this.button3.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
		this.button3.Location = new System.Drawing.Point(144, 224);
		this.button3.Name = "button3";
		this.button3.Size = new System.Drawing.Size(80, 24);
		this.button3.TabIndex = 4;
		this.button3.Text = "Color...";
		this.button3.Click += new System.EventHandler(this.button3_Click);
		// 
		// listBox1
		// 
		this.listBox1.IntegralHeight = false;
		this.listBox1.Items.AddRange(new object[] {
													  "Rubber",
													  "Steel",
													  "Wood",
													  "Ice",
													  "Plastic",
													  "Clay",
													  "Rock"});
		this.listBox1.Location = new System.Drawing.Point(8, 16);
		this.listBox1.Name = "listBox1";
		this.listBox1.Size = new System.Drawing.Size(112, 208);
		this.listBox1.TabIndex = 0;
		this.listBox1.SelectedIndexChanged += new System.EventHandler(this.listBox1_SelectedIndexChanged);
		// 
		// groupBox4
		// 
		this.groupBox4.Controls.Add(this.listBox1);
		this.groupBox4.Location = new System.Drawing.Point(8, 8);
		this.groupBox4.Name = "groupBox4";
		this.groupBox4.Size = new System.Drawing.Size(128, 232);
		this.groupBox4.TabIndex = 7;
		this.groupBox4.TabStop = false;
		this.groupBox4.Text = "Predefined materials";
		// 
		// BodyPropertiesForm
		// 
		this.AcceptButton = this.button1;
		this.AutoScaleBaseSize = new System.Drawing.Size(5, 13);
		this.CancelButton = this.button2;
		this.ClientSize = new System.Drawing.Size(434, 253);
		this.ControlBox = false;
		this.Controls.Add(this.groupBox4);
		this.Controls.Add(this.button3);
		this.Controls.Add(this.button2);
		this.Controls.Add(this.button1);
		this.Controls.Add(this.groupBox3);
		this.Controls.Add(this.groupBox1);
		this.Controls.Add(this.groupBox2);
		this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedDialog;
		this.Name = "BodyPropertiesForm";
		this.Text = "Material Properties";
		this.groupBox1.ResumeLayout(false);
		((System.ComponentModel.ISupportInitialize)(this.trackBar1)).EndInit();
		this.groupBox2.ResumeLayout(false);
		((System.ComponentModel.ISupportInitialize)(this.trackBar2)).EndInit();
		this.groupBox3.ResumeLayout(false);
		((System.ComponentModel.ISupportInitialize)(this.trackBar3)).EndInit();
		this.groupBox4.ResumeLayout(false);
		this.ResumeLayout(false);

	}
	#endregion

	private void InitTrackBarValues()
	{
		this.trackBar1.Value = (int)(100*body.density/10.0);
		this.trackBar2.Value = (int)(100*body.elasticity);
		this.trackBar3.Value = (int)(100*body.cfriction);

		trackBar1_ValueChanged(this,EventArgs.Empty);
		trackBar2_ValueChanged(this,EventArgs.Empty);
		trackBar3_ValueChanged(this,EventArgs.Empty);

		SetColor(body.fillcolor);
	}

	private double ScaleDensity(int trackval)
	{
		return (double)trackval/10.0;
	}

	private double ScaleElasticity(int trackval)
	{
		return (double)trackval/100.0;
	}

	private double ScaleCFriction(int trackval)
	{
		return (double)trackval/100.0;
	}


	private void button1_Click(object sender, System.EventArgs e)
	{
		// Commit the values; scale density from 0-100 to 0.1-10.0, 
		// scale elasticity 0-100 to 0.0-1.0, cfriction 0-100 to 0.0-1.0.
		body.density = ScaleDensity(this.trackBar1.Value);
		body.elasticity = ScaleElasticity(this.trackBar2.Value);
		body.cfriction = ScaleCFriction(this.trackBar3.Value);

		body.fillcolor = button3.BackColor;
	}

	private void trackBar1_ValueChanged(object sender, EventArgs e)
	{
		if (!inListboxChanging) listBox1.ClearSelected();
		this.groupBox1.Text = String.Format("Density: {0}",
			ScaleDensity(this.trackBar1.Value));
	}

	private void trackBar2_ValueChanged(object sender, EventArgs e)
	{
		if (!inListboxChanging) listBox1.ClearSelected();
		this.groupBox2.Text = String.Format("Elasticity: {0}",
			ScaleElasticity(this.trackBar2.Value));
	}

	private void trackBar3_ValueChanged(object sender, EventArgs e)
	{
		if (!inListboxChanging) listBox1.ClearSelected();
		this.groupBox3.Text = String.Format("Friction: {0}",
			ScaleCFriction(this.trackBar3.Value));
	}

	private void button3_Click(object sender, System.EventArgs e)
	{
		if (!inListboxChanging) listBox1.ClearSelected();
		if (this.colorDialog1.ShowDialog(this) == DialogResult.OK)
		{
			SetColor(this.colorDialog1.Color);
		}
	}

	private void SetColor(Color c)
	{
		button3.BackColor = c;

		if ((c.R+c.G+c.B)/3 < 128)
			button3.ForeColor = Color.White;
		else
			button3.ForeColor = Color.Black;
	}

	private bool inListboxChanging = false;

	private void listBox1_SelectedIndexChanged(object sender, System.EventArgs e)
	{
		inListboxChanging = true;

		switch (listBox1.SelectedItem as string)
		{
			case "Rubber":
				trackBar1.Value = 11;
				trackBar2.Value = 99;
				trackBar3.Value = 99;
				SetColor(Color.Black);
				break;
			case "Steel":
				trackBar1.Value = 78;
				trackBar2.Value = 99;
				trackBar3.Value = 40;
				SetColor(Color.SteelBlue);
				break;
			case "Wood":
				trackBar1.Value = 7;
				trackBar2.Value = 75;
				trackBar3.Value = 80;
				SetColor(Color.BurlyWood);
				break;
			case "Ice":
				trackBar1.Value = 9;
				trackBar2.Value = 60;
				trackBar3.Value = 10;
				SetColor(Color.Snow);
				break;
			case "Plastic":
				trackBar1.Value = 8;
				trackBar2.Value = 85;
				trackBar3.Value = 60;
				SetColor(Color.DeepSkyBlue);
				break;
			case "Clay":
				trackBar1.Value = 20;
				trackBar2.Value = 1;
				trackBar3.Value = 95;
				SetColor(Color.Firebrick);
				break;
			case "Rock":
				trackBar1.Value = 30;
				trackBar2.Value = 85;
				trackBar3.Value = 80;
				SetColor(Color.SlateGray);
				break;
			default:
				break;
		}

		inListboxChanging = false;
	}

}