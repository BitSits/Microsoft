/* 
 * Form1.cs
 * © 2004 Microsoft Corporation
 * 
 * 2003.12.15: Shawn A. Van Ness -- Leszynski Group, Inc.
 *   Original version.
 * 
 * Test container for SmartTag.
 */
using System;
using System.Drawing;
using System.Collections;
using System.ComponentModel;
using System.Windows.Forms;

namespace TestForm
{
	/// <summary>
	/// Summary description for Form1.
	/// </summary>
	public class Form1 : System.Windows.Forms.Form
	{
		[STAThread]
		static void Main() 
		{
			Application.Run(new Form1());
		}

		private System.Windows.Forms.Button button1;
		private System.ComponentModel.Container components = null;

		private PhysicsIllustrator.SmartTag.SmartTag smartTag = null;

		public Form1()
		{
			// Required for Windows Form Designer support
			InitializeComponent();

			// Setup SmartTag and associated ContextMenu
			ContextMenu ctxm = new ContextMenu();
			ctxm.MenuItems.Add("Foo", new EventHandler(HandleCtxMenuItemClick));
			ctxm.MenuItems.Add("Bar", new EventHandler(HandleCtxMenuItemClick));
			ctxm.MenuItems.Add("Qux", new EventHandler(HandleCtxMenuItemClick));

			this.smartTag = new PhysicsIllustrator.SmartTag.SmartTag(this);
			this.smartTag.ContextMenu = ctxm;

			this.Controls.Add(this.smartTag);
		}

		protected override void Dispose( bool disposing )
		{
			if( disposing )
			{
				if (components != null) 
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
			this.button1 = new System.Windows.Forms.Button();
			this.SuspendLayout();
			// 
			// button1
			// 
			this.button1.Location = new System.Drawing.Point(80, 80);
			this.button1.Name = "button1";
			this.button1.TabIndex = 0;
			this.button1.Text = "button1";
			this.button1.Click += new System.EventHandler(this.button1_Click);
			// 
			// Form1
			// 
			this.AutoScaleBaseSize = new System.Drawing.Size(5, 13);
			this.ClientSize = new System.Drawing.Size(292, 271);
			this.Controls.Add(this.button1);
			this.Name = "Form1";
			this.Text = "Form1";
			this.ResumeLayout(false);

		}
		#endregion

		private void button1_Click(object sender, System.EventArgs e)
		{
			if (this.smartTag.Visible)
				this.smartTag.Hide();
			else
				this.smartTag.Show(this.button1.Location+this.button1.Size, PhysicsIllustrator.SmartTag.SmartTag.Lightening);
		}

		private static void HandleCtxMenuItemClick(object sender, EventArgs e)
		{
			MessageBox.Show(sender.ToString(), "Hello, SmartTag!");
		}
	}
}
