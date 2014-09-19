/* 
 * SmartTag.cs
 * © 2004 Microsoft Corporation
 * 
 * 2003.12.15: Shawn A. Van Ness -- Leszynski Group, Inc.
 *   Original version.
 * 
 * UserControl for Office-style "smart tag" UI widget.
 */
using System;
using System.Collections;
using System.ComponentModel;
using System.Drawing;
using System.Windows.Forms;

namespace PhysicsIllustrator.SmartTag
{
	/// <summary>
	/// SmartTag-style control.
	/// </summary>
	public class SmartTag : System.Windows.Forms.UserControl
	{
		private System.Drawing.Image image = null;
		private bool hovering = false;
		private bool showingMenu = false;

		//
		// Construction

		public SmartTag() : this(Lightning)
		{ }

		public SmartTag(Image image)
		{
			// This call is required by the Windows.Forms Form Designer.
			InitializeComponent();

			// Further initialization
			Visible = false;
			image = image;

			SetStyle(
				ControlStyles.UserPaint|
				ControlStyles.AllPaintingInWmPaint|
				ControlStyles.DoubleBuffer, 
				true);
		}

		//
		// Public interface

		public void Show(Image image)
		{
			this.image = image;
			base.Show();
		}

		public void Show(Point location)
		{
			this.Location = location;
			base.Show();
		}

		public void Show(Point location, Image image)
		{
			this.Location = location;
			this.image = image;
			base.Show();
		}

		public Image Image
		{
			get
			{ return image; }
			set
			{ image = value; Invalidate(); }
		}

		public MenuItem FindMenuItem(string caption)
		{
			if (ContextMenu != null)
			{
				foreach (MenuItem item in ContextMenu.MenuItems)
				{
					if (item.Text == caption)
						return item;
				}
			}
			return null;
		}

		//
		// Preprepared images

		public static Image Lightning
		{
			get
			{
				return new Bitmap(System.Reflection.Assembly.GetExecutingAssembly().GetManifestResourceStream(
					@"PhysicsIllustrator.SmartTag.Lightning.ico"));
			}
		}

		public static Image Warning
		{
			get
			{
				return new Bitmap(System.Reflection.Assembly.GetExecutingAssembly().GetManifestResourceStream(
					@"PhysicsIllustrator.SmartTag.Warning.ico"));
			}
		}

		public static Image Information
		{
			get
			{
				return new Bitmap(System.Reflection.Assembly.GetExecutingAssembly().GetManifestResourceStream(
					@"PhysicsIllustrator.SmartTag.Information.ico"));
			}
		}

		public static Image Error
		{
			get
			{
				return new Bitmap(System.Reflection.Assembly.GetExecutingAssembly().GetManifestResourceStream(
					@"PhysicsIllustrator.SmartTag.Error.ico"));
			}
		}

		//
		// Overrides

		protected override CreateParams CreateParams
		{
			get
			{
				CreateParams cp = base.CreateParams;
				cp.ClassStyle |= 0x00020000; //CS_DROPSHADOW
				return cp;
			}
		}

		protected override void OnPaint(PaintEventArgs e)
		{
			base.OnPaint(e);

			Graphics g = e.Graphics;

			// Draw image
			g.DrawImageUnscaled(image, 0,0);

			// Draw border
			g.DrawRectangle(Pens.CornflowerBlue, 0,0, Width-1,Height-1);

			// Draw dropdown arrow
			if (hovering)
			{
				Point[] points = { new Point(26,10), new Point(32,10), new Point(29,13) };
				g.FillPolygon(Brushes.Black, points);
			}
		}

		protected override void OnMouseHover(EventArgs e)
		{
			base.OnMouseHover(e);

			// Make ourselves a little bigger, brighter
			hovering = true;
			BackColor = Color.FromKnownColor(KnownColor.ControlLightLight);

			// Only grow dropdown arrow if we have a menu to offer.
			if (ContextMenu != null)
				Size = new Size(36,22);
		}

		protected override void OnMouseLeave(EventArgs e)
		{
			base.OnMouseLeave(e);

			RestoreAppearance();
		}

		protected override void OnClick(EventArgs e)
		{
			base.OnClick(e);

			// Show the context menu
			if (ContextMenu != null)
			{
				showingMenu = true;
				ContextMenu.Show(this, new Point(0,0)+new Size(0,Height-1));
				showingMenu = false;
				RestoreAppearance();
			}
		}

		private void RestoreAppearance()
		{
			// Restore ordinary size, appearance.
			if (!showingMenu)
			{
				hovering = false;
				BackColor = Color.FromKnownColor(KnownColor.Control);
				Size = new Size(22,22);
			}
		}

		#region Component Designer generated code
		/// <summary>
		/// Required method for Designer support - do not modify 
		/// the contents of this method with the code editor.
		/// </summary>
		private void InitializeComponent()
		{
			// 
			// SmartTag
			// 
			this.BackColor = Color.FromKnownColor(KnownColor.Control);
			this.Cursor = System.Windows.Forms.Cursors.Hand;
			this.Name = "SmartTag";
			this.Size = new System.Drawing.Size(22,22);
		}
		#endregion
	}
}
