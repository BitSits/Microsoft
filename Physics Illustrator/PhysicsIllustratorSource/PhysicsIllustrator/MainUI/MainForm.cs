//-------------------------------------------------------------------------
//
//  Copyright (C) 2004 Microsoft Corporation
//  All rights reserved.
//
//  File: MainForm.cs
//  
//  Description: Main full-screen window and drawing surface.
//--------------------------------------------------------------------------

using System;
using System.IO;
using System.Collections;
using System.Reflection;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Windows.Forms;
using System.ComponentModel;

using Microsoft.Ink;

using dbg=System.Diagnostics.Debug;

[System.ComponentModel.DesignerCategory("Code")]
internal class MainForm : System.Windows.Forms.Form
{
	//
	// Instance data

	private MagicDocument doc;

	private InkOverlay inkoverlay;
	private HoverRegion hover;
	private ToolTip menuttip;
	private PhysicsIllustrator.SmartTag.SmartTag bodytag;

	private string savedfilename;
	private InkOverlayEditingMode declaredmode;
	private static readonly Guid BarrelSwitchId = 
		new Guid("f0720328-663b-418f-85a6-9531ae3ecdfa"); 

	private AnimationEngine engine;

	// 
	// Initialization 

	public MainForm()
	{
		// Required for Windows Form Designer support.
		InitializeComponent();

		// Load our icon.
		this.Icon = new Icon(typeof(MainForm),"PhysicsIllustrator.ico");

		// Initialize the per-item smart tag.
		bodytag = new PhysicsIllustrator.SmartTag.SmartTag();
		bodytag.Image = Global.LoadImage("Resources.PenMenu.ico");
		bodytag.Visible = false;

		bodytag.ContextMenu = new ContextMenu();
		bodytag.ContextMenu.MenuItems.Add("Clone", new EventHandler(hover_EditCloneClicked));
		bodytag.ContextMenu.MenuItems.Add("Delete", new EventHandler(hover_EditDeleteClicked));
		bodytag.ContextMenu.MenuItems.Add("-");
		bodytag.ContextMenu.MenuItems.Add("Straighten", new EventHandler(hover_EditStraightenClicked));
		bodytag.ContextMenu.MenuItems.Add("Properties...", new EventHandler(hover_EditPropertiesClicked));

		this.Controls.Add(bodytag);

		// Go fullscreen.  Note: this works even with the taskbar set 
		// to "keep on top of other windows".  
		this.WindowState = System.Windows.Forms.FormWindowState.Normal;
		this.Bounds = Screen.PrimaryScreen.Bounds;

		// Declare repaint optimizations.
		base.SetStyle(
			ControlStyles.UserPaint|
			ControlStyles.AllPaintingInWmPaint|
			ControlStyles.DoubleBuffer,
			true);

		// Init inkoverlay.
		inkoverlay = new InkOverlay(this.Handle,true);
		inkoverlay.CollectionMode = CollectionMode.InkOnly; // no gestures

		inkoverlay.AutoRedraw = false; // Dynamic rendering only; we do all the painting.

		DrawingAttributes da = new DrawingAttributes();
		da.AntiAliased = false;
		inkoverlay.DefaultDrawingAttributes = da;

		inkoverlay.Stroke += new InkCollectorStrokeEventHandler(inkoverlay_Stroke);

		inkoverlay.CursorInRange += new InkCollectorCursorInRangeEventHandler(inkoverlay_CursorInRange);
		inkoverlay.StrokesDeleting += new InkOverlayStrokesDeletingEventHandler(inkoverlay_StrokesDeleting);

		inkoverlay.SelectionChanging += new InkOverlaySelectionChangingEventHandler(inkoverlay_SelectionChanging);
		inkoverlay.SelectionChanged += new InkOverlaySelectionChangedEventHandler(inkoverlay_SelectionChanged);
		inkoverlay.SelectionMoved += new InkOverlaySelectionMovedEventHandler(inkoverlay_SelectionMoved);
		inkoverlay.SelectionResized += new InkOverlaySelectionResizedEventHandler(inkoverlay_SelectionResized);

		declaredmode = inkoverlay.EditingMode;

		// Spin up SDI model (ink+doc).
		doc = new MagicDocument();
		inkoverlay.Ink = doc.Ink;

		inkoverlay.Enabled = !DesignMode;

		inkoverlay.Ink.InkAdded += new StrokesEventHandler(inkoverlay_Ink_InkAdded);
	}

	#region Windows Form Designer generated code
	private void InitializeComponent()
	{
		// 
		// MainForm
		// 
		this.BackColor = System.Drawing.Color.Linen;
		this.ClientSize = new System.Drawing.Size(1024, 768);
		this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
		this.Name = "MainForm";
		this.StartPosition = System.Windows.Forms.FormStartPosition.Manual;
		this.Text = "Physics Illustrator for Tablet PC";
	}
	#endregion

	//
	// Overrides

	protected override void OnLoad(EventArgs e)
	{
		base.OnLoad(e);

		// Declare hover-region for controls in upper-right corner (upper-left if right 
		// handed).  We do this here, not in the constructor, so our layout changes 
		// (resize/maximized) will have had a chance to kick in.
		hover = new HoverRegion(this,Config.PinHoverPanel);
		menuttip = new ToolTip();
		hover.InitializeControls(menuttip);
		hover.EnablePerItemEditCommands(false);
		this.Controls.AddRange(hover.Controls);

		// Subscribe to logical application-events, exposed from hover-bar.
		hover.FileNewClicked += new EventHandler(hover_FileNewClicked);
		hover.FileOpenClicked += new EventHandler(hover_FileOpenClicked);
		hover.FileSaveClicked += new EventHandler(hover_FileSaveClicked);
		hover.FileSaveAsClicked += new EventHandler(hover_FileSaveAsClicked);
		hover.FileHelpClicked += new EventHandler(hover_FileHelpClicked);
		hover.FileAboutClicked += new EventHandler(hover_FileAboutClicked);
		hover.FileExitClicked += new EventHandler(hover_FileExitClicked);

		hover.EditCloneClicked += new EventHandler(hover_EditCloneClicked);
		hover.EditDeleteClicked += new EventHandler(hover_EditDeleteClicked);
		hover.EditStraightenClicked += new EventHandler(hover_EditStraightenClicked);
		hover.EditPropertiesClicked += new EventHandler(hover_EditPropertiesClicked);

		hover.PenDrawClicked += new EventHandler(hover_PenDrawClicked);
		hover.PenEraseClicked += new EventHandler(hover_PenEraseClicked);
		hover.PenLassoClicked += new EventHandler(hover_PenLassoClicked);

		hover.AnimateClicked += new EventHandler(hover_AnimateClicked);
		hover.MinimizeClicked += new EventHandler(hover_MinimizeClicked);

		// Respond to portrait/landscape orientation changes.
		Microsoft.Win32.SystemEvents.DisplaySettingsChanged += 
			new EventHandler(SystemEvents_DisplaySettingsChanged);

		// Show controls initially, for a few seconds, as a hint to the user.
		hover.DisplayInitial();
	}

	protected override void OnPaint(PaintEventArgs e)
	{
		base.OnPaint(e);
		Graphics g = e.Graphics;

		// Set "world" transform == ink-to-pixel space transform.
		Rectangle rect = new Rectangle(0,0,10000,10000);
		Point[] plgpts = new Point[] { 
										 new Point(0,0), 
										 new Point(10000,0), 
										 new Point(0,10000)
									 };
		inkoverlay.Renderer.InkSpaceToPixel(g, ref plgpts);
		using (Matrix world = new Matrix(rect,plgpts))
		{
			g.Transform = world;
		}

		// Use actual doc when editing; throwaway clone when animating.
		MagicDocument doc = this.doc;

		if (!inkoverlay.Enabled && engine != null && engine.Document != null)
			doc = engine.Document;

		// Draw gravity vector in background.
		if (doc.Gravity != null)
			doc.Gravity.Render(g);

		// Draw bodies.
		foreach (RigidBodyBase body in doc.Bodies)
		{
			body.Render(g);
		}

		// Draw mechs.
		foreach (MechanismBase mech in doc.Mechanisms)
		{
			mech.Render(g);
		}
	}

	protected override void OnMove(EventArgs e)
	{
		dbg.WriteLine("----- OnMove -----");
		base.OnMove(e);

		// Layout hover-region target area and child controls.
		if (hover != null) hover.UpdateTargetRectLayout();
	}
	protected override void OnResize(EventArgs e)
	{
		dbg.WriteLine("----- OnResize -----");
		base.OnResize(e);

		// Layout hover-region target area and child controls.
		if (hover != null) hover.UpdateTargetRectLayout();
	}

	protected override void OnClosing(CancelEventArgs e)
	{
		dbg.WriteLine("----- OnClosing -----");
		base.OnClosing(e);

		if (!IsUserSure())
			e.Cancel = true;
	}

	//
	// Implementation

	private void InvalidateInkSpaceRectangle(Rectangle rect)
	{
		using (Graphics g = this.CreateGraphics())
		{
			Point ul = new Point(rect.Left,rect.Top);
			Point lr = new Point(rect.Right,rect.Bottom);
			Point[] pts = { ul, lr };
			inkoverlay.Renderer.InkSpaceToPixel(g, ref pts);

			ul = pts[0]; lr = pts[1];
			rect = new Rectangle(ul.X, ul.Y, lr.X-ul.X, lr.Y-ul.Y);

			rect.Inflate(7,7);
			Invalidate(rect);
		}
	}

	private bool IsUserSure()
	{
		// Don't bother the user if the form's not dirty.
		if (!doc.Ink.Dirty || doc.Ink.Strokes.Count < 1) return true;

		DialogResult dr = MessageBox.Show(
			"Do you want to save the changes to this document?", 
			Application.ProductName, 
			MessageBoxButtons.YesNoCancel, 
			MessageBoxIcon.Warning, 
			MessageBoxDefaultButton.Button1);

		if (dr == DialogResult.Yes)
		{
			if (this.savedfilename == null)
			{
				dr = ShowSaveAsDialog();
			}
			else
			{
				JustSaveIt();
			}
		}

		return (dr != DialogResult.Cancel);
	}

	private RigidBodyBase MakeBodyFromClosedStroke(Stroke stroke, Point[] vertices)
	{
		// Form a new body -- ellipse or polygon?
		RigidBodyBase newbody = null;

		Point[] points = stroke.GetPoints();
		Ellipse elli = Ellipse.FromRegression(points);
		if (!elli.IsEmpty && elli.IsFit(points))
		{
			dbg.WriteLine("new EllipticalBody");

			newbody = new EllipticalBody();
			EllipticalBody body = newbody as EllipticalBody;

			body.CenterPoint = elli.Center;
			body.MajorAxis = elli.MajorAxis;
			body.MinorAxis = elli.MinorAxis;
			body.Orientation = elli.Orientation;

			// Close to circle? Snap to it.
			if ((float)elli.MajorAxis/(float)elli.MinorAxis < 1.25)
			{
				int r = (elli.MajorAxis+elli.MinorAxis)/2;
				body.MajorAxis = body.MinorAxis = r;
				body.Orientation = 0;
			}
		}
		else
		{
			dbg.WriteLine("new PolygonalBody");

			newbody = new PolygonalBody();
			PolygonalBody body = newbody as PolygonalBody;
			body.Vertices = vertices;
		}

		dbg.WriteLine(String.Format("Mass={0}, I={1}",newbody.Mass,newbody.I));

		newbody.strokeid = stroke.Id;
		doc.Bodies.Add(newbody);

		return newbody;
	}

	private MechanismBase MakeRodRopeOrSpring(Stroke stroke, RigidBodyBase headbody, RigidBodyBase tailbody)
	{
		// Rod, Rope, or Spring: we decide based on straightness, curvyness, and loopiness.
		int np = stroke.PacketCount;
		Point head = stroke.GetPoint(0), tail = stroke.GetPoint(np-1);
		double distance = Geometry.DistanceBetween(head,tail);

		StrokeGeometry sg = new StrokeGeometry(stroke);
		double length = sg.IntegrateLength();

		// Consider spring: analyze total net curvature of the stroke, and call it a 
		// spring if it makes at least 540 degrees (1.5 loops) in the same direction.
		double tt = StrokeAnalyzer.AnalyzeTotalCurvature(stroke,100.0);
		if (Math.Abs(Geometry.Rad2Deg(tt)) > 540.0)
		{
			dbg.WriteLine("new SpringMech");

			SpringMech newmech = new SpringMech();
			newmech.EndpointA = BodyRef.For(headbody,head);
			newmech.EndpointB = BodyRef.For(tailbody,tail);
			newmech.extension = distance;
			newmech.stiffness = MathEx.Square(tt)/100; //Heuristic: th²/100 feels about right.

			newmech.strokeid = stroke.Id;
			doc.Mechanisms.Add(newmech);
			return newmech;
		}

		// Straight and narrow?
		double rodropethreshold = 1.1; //heuristic
		if (length/distance < rodropethreshold)
		{
			dbg.WriteLine("new RodMech");

			RodMech newmech = new RodMech();
			newmech.EndpointA = BodyRef.For(headbody,head);
			newmech.EndpointB = BodyRef.For(tailbody,tail);
			newmech.length = distance;

			newmech.strokeid = stroke.Id;
			doc.Mechanisms.Add(newmech);
			return newmech;
		}
		else
		{
			dbg.WriteLine("new RopeMech");

			RopeMech newmech = new RopeMech();
			newmech.EndpointA = BodyRef.For(headbody,head);
			newmech.EndpointB = BodyRef.For(tailbody,tail);
			newmech.length = length;

			newmech.strokeid = stroke.Id;
			doc.Mechanisms.Add(newmech);
			return newmech;
		}
	}

	private void inkoverlay_Stroke(object sender, InkCollectorStrokeEventArgs e)
	{
		dbg.WriteLine("----- inkoverlay_Stroke -----");

		// Ensure we're on the UI thread.
		dbg.Assert(!this.InvokeRequired);

		// Check to make sure we're not erasing.
		if (inkoverlay.EditingMode == InkOverlayEditingMode.Delete)
			return;

		try // To prevent exceptions from propagating back to ink runtime.
		{
			// Hook for tap-to-select feature, in lasso-mode.
			if (inkoverlay.EditingMode == InkOverlayEditingMode.Select)
			{
				TryTapToSelect(e.Stroke);
				return;
			}

			// Analyze stroke geometry.
			bool closed;
			Point[] vertices;
			double tolerance = 500.0; //Heuristic: 500 seems about right.
			StrokeAnalyzer.AnalyzeClosedness(e.Stroke, tolerance, out closed, out vertices);

			// Interpret stroke in document-context: first, consider closed strokes.
			if (closed)
			{
				// Check for a small elliptical-gesture over two or more bodies. 
				// If so, it's a pin joint!
				Rectangle bbox = e.Stroke.GetBoundingBox();
				Point midp = Geometry.Midpoint(bbox);

				RigidBodyBase[] hits = doc.HitTestBodies(midp);

				if (hits.Length >= 2 && bbox.Width < 1000 && bbox.Height < 1000)
				{
					RigidBodyBase top = hits[0];
					RigidBodyBase bottom = hits[1];

					// Snap to CG if close to either top's or bottom's.
					if (Geometry.DistanceBetween(midp,top.CG) < 500.0)
						midp = top.CG;
					else if (Geometry.DistanceBetween(midp,bottom.CG) < 500.0)
						midp = bottom.CG;

					dbg.WriteLine("new JointMech");

					JointMech newmech = new JointMech();
					newmech.EndpointA = BodyRef.For(bottom,midp);
					newmech.EndpointB = BodyRef.For(top,midp);

					newmech.strokeid = e.Stroke.Id;
					doc.Mechanisms.Add(newmech);

					// Repaint area around the newmech (unions with stroke bbox, below).
					Rectangle dirtybbox = newmech.BoundingBox;
					InvalidateInkSpaceRectangle(dirtybbox);
					return;
				}
				else
				{
					// Larger stroke, and/or no centerpoint hits -- form a new solid body.
					RigidBodyBase newbody = MakeBodyFromClosedStroke(e.Stroke,vertices);

					// Repaint area around the newbody (unions with stroke bbox, below).
					Rectangle dirtybbox = newbody.BoundingBox;
					InvalidateInkSpaceRectangle(dirtybbox);

					// Select it, to show the smart tag.
					inkoverlay.Selection = this.MakeSingleStrokeCollection(e.Stroke);
					return;
				}
			}

			// An unclosed stroke -- 
			// Check if head and/or tail is hit on existing bodies.
			int np = e.Stroke.PacketCount;
			Point head = e.Stroke.GetPoint(0), tail = e.Stroke.GetPoint(np-1);

			RigidBodyBase[] headhits = doc.HitTestBodies(head);
			RigidBodyBase[] tailhits = doc.HitTestBodies(tail);

			if (headhits.Length == 0 && tailhits.Length == 0)
			{
				// Neither head or tail hit, so let's try harder to make a body 
				// out of this stroke.
				Point[] dummy;
				tolerance = 2000.0; //Heuristic: vastly relax closure tolerance.
				StrokeAnalyzer.AnalyzeClosedness(e.Stroke, tolerance, out closed, out dummy);

				if (closed)
				{
					RigidBodyBase newbody = MakeBodyFromClosedStroke(e.Stroke,vertices);

					// Repaint area around the newbody (unions with stroke bbox, below).
					Rectangle dirtybbox = newbody.BoundingBox;
					InvalidateInkSpaceRectangle(dirtybbox);

					// Select it, to show the smart tag.
					inkoverlay.Selection = this.MakeSingleStrokeCollection(e.Stroke);
					return;
				}
				else if (Geometry.DistanceBetween(head,tail) > 500.0)
				{
					// Interpret this stroke as a gravity-vector.
					GravitationalForceMech newgrav = new GravitationalForceMech();
					newgrav.Body = null; // Applies to all bodies!
					newgrav.origin = head;
					newgrav.vector = Vector.FromPoints(head,tail);

					// Repaint area around the gravity vector (unions with stroke bbox, below).
					Rectangle dirtybbox = newgrav.BoundingBox;
					InvalidateInkSpaceRectangle(dirtybbox);

					// Throw out the current gravity-vector stroke, if it exists.
					if (doc.Gravity != null)
					{
						dirtybbox = doc.Gravity.BoundingBox;
						InvalidateInkSpaceRectangle(dirtybbox);

						Stroke old = GetStrokeById(doc.Gravity.strokeid);
						doc.Ink.DeleteStroke(old);
					}

					newgrav.strokeid = e.Stroke.Id;
					doc.Gravity = newgrav;
					return;
				}
				else
				{
					// This stroke is probably an accidental tap -- discard it.
					e.Cancel = true;
					return;
				}
			}

			if (headhits.Length > 0 && tailhits.Length == 0)
			{
				// If only the head is hit, it must be an 'attractive force'.
				RigidBodyBase body = headhits[0];

				dbg.WriteLine("new ExternalForceMech");

				ExternalForceMech newmech = new ExternalForceMech();
				newmech.Body = BodyRef.For(body,head);
				newmech.vector = Vector.FromPoints(head,tail);

				newmech.strokeid = e.Stroke.Id;
				doc.Mechanisms.Add(newmech);

				// Repaint area around the newmech (unions with stroke bbox, below).
				Rectangle dirtybbox = newmech.BoundingBox;
				InvalidateInkSpaceRectangle(dirtybbox);
				return;
			}

			if (headhits.Length == 0 && tailhits.Length > 0)
			{
				// If only the tail is hit, it must be a 'propulsive force'.
				RigidBodyBase body = tailhits[0];

				dbg.WriteLine("new PropulsiveForceMech");

				PropulsiveForceMech newmech = new PropulsiveForceMech();
				newmech.Body = BodyRef.For(body,tail);
				newmech.vector = Vector.FromPoints(head,tail);

				newmech.strokeid = e.Stroke.Id;
				doc.Mechanisms.Add(newmech);

				// Repaint area around the newmech (unions with stroke bbox, below).
				Rectangle dirtybbox = newmech.BoundingBox;
				InvalidateInkSpaceRectangle(dirtybbox);
				return;
			}

			if (true) // scope
			{
				// Create a binding mechanism between two bodies.
				RigidBodyBase headbody = headhits[0], tailbody = tailhits[0];

				// If both the head and the tail hit same object, 
				// attach the head to the one behind.
				if (Object.ReferenceEquals(headbody,tailbody))
				{
					if (headhits.Length > 1)
						headbody = headhits[1];
					else if (tailhits.Length > 1)
						tailbody = tailhits[1];
					else
					{
						// Don't self-connect. We will perhaps interpret the stroke as an 
						// anchor-gesture or a selection-gesture, 
						// but if we cannot, we will cancel.
						int nc = e.Stroke.PolylineCusps.Length;
						if (np <= 25)
						{
							inkoverlay.Selection = MakeSingleStrokeCollection(headbody.strokeid);
							SetEditingMode(InkOverlayEditingMode.Select,false);
						}
						else if (np <= 150 && (nc >= 3 && nc <= 5))
						{
							headbody.anchored = !headbody.anchored; //toggle
						}

						e.Cancel = true;

						// Repaint area around the headbody (unions with stroke bbox, below).
						Rectangle dirtybbox = headbody.BoundingBox;
						InvalidateInkSpaceRectangle(dirtybbox);
						return;
					}
				}

				// Create a rope, rod, or spring out of the stroke.
				MechanismBase newmech = MakeRodRopeOrSpring(e.Stroke,headbody,tailbody);

				if (newmech != null)
				{
					// Repaint area around the newmech (unions with stroke bbox, below).
					Rectangle dirtybbox = newmech.BoundingBox;
					InvalidateInkSpaceRectangle(dirtybbox);
					return;
				}
				else
				{
					// Throw out the stroke, and return.
					e.Cancel = true;
					return;
				}
			}
		}
		catch (Exception ex)
		{
			// Cancel the stroke, and log the error.
			e.Cancel = true;
			Global.HandleThreadException(this, new System.Threading.ThreadExceptionEventArgs(ex));
		}
		finally
		{
			// Repaint the area around the stroke (unions with newbody/mech region, above).
			Rectangle dirtybbox = e.Stroke.GetBoundingBox();
			InvalidateInkSpaceRectangle(dirtybbox);
		}
	}

	private void TryTapToSelect(Stroke stroke)
	{
		// We interpret strokes with fewer than 25 packets, 
		// starting and ending on the same body, as tap gestures.
		int np = stroke.PacketCount;
		Point head = stroke.GetPoint(0), tail = stroke.GetPoint(np-1);
		RigidBodyBase[] headhits = doc.HitTestBodies(head);
		RigidBodyBase[] tailhits = doc.HitTestBodies(tail);

		if (np <= 25 && 
			headhits.Length > 0 && 
			tailhits.Length > 0 && 
			Object.ReferenceEquals(headhits[0],tailhits[0]))
		{
			tappedbody = headhits[0];

			// Ensure we didn't just tap what's already selected.
			ArrayList selbodies = new ArrayList(
				doc.GetBodiesFor(inkoverlay.Selection));
			if (selbodies.Contains(tappedbody))
				return;

			// We must delay the call to set_Selection, until after InkOverlay is 
			// finished looking at this stroke.  BeginInvoke seems to work nicely 
			// for this purpose.
			dbg.WriteLine("-------TTS--------");
			base.BeginInvoke(new MethodInvoker(DelayTapToSelect));
		}
	}
	private RigidBodyBase tappedbody;
	private void DelayTapToSelect()
	{
		dbg.WriteLine("-------TTSx--------");
		if (tappedbody != null)
			inkoverlay.Selection = MakeSingleStrokeCollection(tappedbody.strokeid);
	}

	private void inkoverlay_CursorInRange(object sender, InkCollectorCursorInRangeEventArgs e)
	{
		dbg.WriteLine("----- inkoverlay_CursorInRange -----");

		// Ensure we're on the UI thread.
		dbg.Assert(!this.InvokeRequired);

		try // To prevent exceptions from propagating back to ink runtime.
		{
			if (e.Cursor.Inverted)
				SetEditingMode(InkOverlayEditingMode.Delete,false);
			else
				SetEditingMode(declaredmode,false);
		}
		catch (Exception ex)
		{
			// Log the error.
			Global.HandleThreadException(this, new System.Threading.ThreadExceptionEventArgs(ex));
		}
	}

	private void inkoverlay_StrokesDeleting(object sender, InkOverlayStrokesDeletingEventArgs e)
	{
		dbg.WriteLine("----- inkoverlay_StrokesDeleting -----");

		// Ensure we're on the UI thread.
		dbg.Assert(!this.InvokeRequired);

		// Track region to repaint.
		Rectangle dirtybbox = Rectangle.Empty;

		try // To prevent exceptions from propagating back to ink runtime.
		{
			// Get objects for stroke(s) to delete.
			RigidBodyBase[] bodies = doc.GetBodiesFor(e.StrokesToDelete);
			MechanismBase[] mechs = doc.GetMechanismsFor(e.StrokesToDelete);

			// Delete mechanisms.
			foreach (MechanismBase mech in mechs)
			{
				doc.Mechanisms.Remove(mech);
				dirtybbox = Rectangle.Union(dirtybbox,mech.BoundingBox);
			}

			// Delete bodies and their attached mechanisms.
			foreach (RigidBodyBase body in bodies)
			{
				mechs = doc.GetMechanismsForBody(body);
				foreach (MechanismBase mech in mechs)
				{
					doc.Mechanisms.Remove(mech);
					dirtybbox = Rectangle.Union(dirtybbox,mech.BoundingBox);

					Strokes mstrokes = doc.Ink.CreateStrokes(new int[] { mech.strokeid });
					doc.Ink.DeleteStrokes(mstrokes);
				}

				doc.Bodies.Remove(body);
				dirtybbox = Rectangle.Union(dirtybbox,body.BoundingBox);
			}

			// Check if this stroke was the gravity vector's?
			if (doc.Gravity != null)
			{
				foreach (Stroke s in e.StrokesToDelete)
					if (s.Id == doc.Gravity.strokeid) 
					{
						this.InvalidateInkSpaceRectangle(doc.Gravity.BoundingBox);
						doc.Gravity = null;
					}
			}
		}
		catch (Exception ex)
		{
			// Log the error.
			Global.HandleThreadException(this, new System.Threading.ThreadExceptionEventArgs(ex));
		}
		finally
		{
			// Repaint the affected area.
			InvalidateInkSpaceRectangle(dirtybbox);
		}
	}

	private Stroke GetStrokeById(int id)
	{
		int[] ids = new int[] { id };
		Strokes strokes = doc.Ink.CreateStrokes(ids);
		if (strokes.Count != 1) throw new ApplicationException("Bogus stroke id");
		return strokes[0];
	}

	private void inkoverlay_SelectionChanging(object sender, InkOverlaySelectionChangingEventArgs e)
	{
		dbg.WriteLine("----- inkoverlay_SelectionChanging -----");

		// Ensure we're on the UI thread.
		dbg.Assert(!this.InvokeRequired);

		try // To prevent exceptions from propagating back to ink runtime.
		{
			if (e.NewSelection.Count > 0)
			{
				// Get objects for selected stroke(s); remove mechanisms from bucket.
				MechanismBase[] mechs = doc.GetMechanismsFor(e.NewSelection);
				foreach (MechanismBase mech in mechs)
				{
					Stroke mechstroke = GetStrokeById(mech.strokeid);
					e.NewSelection.Remove(mechstroke);
				}

				// Don't allow gravity to be selected, either.
				if (doc.Gravity != null)
				{
					Stroke gravstroke = GetStrokeById(doc.Gravity.strokeid);
					e.NewSelection.Remove(gravstroke);
				}
			}
		}
		catch (Exception ex)
		{
			// Log the error.
			Global.HandleThreadException(this, new System.Threading.ThreadExceptionEventArgs(ex));
		}
	}

	private void inkoverlay_SelectionChanged(object sender, EventArgs e)
	{
		dbg.WriteLine("----- inkoverlay_SelectionChanged -----");

		// Ensure we're on the UI thread.
		dbg.Assert(!this.InvokeRequired);

		try // To prevent exceptions from propagating back to ink runtime.
		{
			// Show smarttag if only single-selection.
			RigidBodyBase[] bodies = doc.GetBodiesFor(inkoverlay.Selection);
			if (bodies.Length != 1)
			{
				hover.EnablePerItemEditCommands(false);
				if (bodytag.Visible) bodytag.Hide();
				return;
			}

			RigidBodyBase body = bodies[0];
			hover.EnablePerItemEditCommands(true);

			ShowBodyTag(body);
		}
		catch (Exception ex)
		{
			// Log the error.
			Global.HandleThreadException(this, new System.Threading.ThreadExceptionEventArgs(ex));
		}
	}

	private void ShowBodyTag(RigidBodyBase body)
	{
		// Establish point on lower-right of selected body's bbox.
		Point p = new Point(body.BoundingBox.Right,body.BoundingBox.Bottom);
		using (Graphics g = this.CreateGraphics())
		{
			// Convert to pixel-space.
			inkoverlay.Renderer.InkSpaceToPixel(g, ref p);
		}

		// Make sure we're not off the edge of the screen.
		if (p.X > this.Right-bodytag.Width) p.X = this.Right-bodytag.Width;
		if (p.Y > this.Bottom-bodytag.Height) p.Y = this.Bottom-bodytag.Height;

		bodytag.Show(p);
	}

	private void inkoverlay_SelectionMoved(object sender, InkOverlaySelectionMovedEventArgs e)
	{
		// Share impl with resize.
		inkoverlay_SelectionMovedOrResized(sender,e.OldSelectionBoundingRect);
	}

	private void inkoverlay_SelectionResized(object sender, InkOverlaySelectionResizedEventArgs e)
	{
		// Share impl with move.
		inkoverlay_SelectionMovedOrResized(sender,e.OldSelectionBoundingRect);
	}

	private void inkoverlay_SelectionMovedOrResized(object sender, Rectangle oldbbox)
	{
		dbg.WriteLine("----- inkoverlay_SelectionMovedOrResized -----");

		// Ensure we're on the UI thread.
		dbg.Assert(!this.InvokeRequired);

		try // To prevent exceptions from propagating back to ink runtime.
		{
			// Formulate matrix to represent old->new transform.
			Strokes selection = inkoverlay.Selection;
			Rectangle newbbox = selection.GetBoundingBox();

			using (Matrix m = Geometry.MatrixFromRects(oldbbox,newbbox))
			{
				// Move the bodies and any attached mechanisms.
				ArrayList mechlist = new ArrayList();
				RigidBodyBase[] bodies = doc.GetBodiesFor(selection);
				foreach (RigidBodyBase body in bodies)
				{
					body.Transform(m);
					MechanismBase[] mechs = doc.GetMechanismsForBody(body);
					foreach (MechanismBase mech in mechs)
						if (!mechlist.Contains(mech)) mechlist.Add(mech);
					
					// Move the bodytag to match.
					if (bodytag.Visible) ShowBodyTag(body);
				}

				foreach (MechanismBase mech in mechlist)
					mech.Transform(m);
			}

			// Repaint everything.  Note: if excess flicker becomes apparent, it 
			// might be reduced by invalidating the individual items' bounding boxes.
			Invalidate();
		}
		catch (Exception ex)
		{
			// Log the error.
			Global.HandleThreadException(this, new System.Threading.ThreadExceptionEventArgs(ex));
		}
	}

	private int[] neweststrokeids; // Note: Ink.AddStrokesAtRectangle doesn't return 
	// the new stroke ids, so we must get them ourselves, from the InkAdded event.

	private void inkoverlay_Ink_InkAdded(object sender, StrokesEventArgs e)
	{
		// This event fires on a background thread, which creates a race condition 
		// when you access neweststrokeids.  
		// Return to the UI thread before continuing.
		if (this.InvokeRequired)
		{
			this.Invoke(
				new StrokesEventHandler(inkoverlay_Ink_InkAdded), 
				new object[] { sender, e });
			return;
		}

		dbg.WriteLine("----- inkoverlay_Ink_InkAdded -----");

		try // To prevent exceptions from propagating back to ink runtime.
		{
			neweststrokeids = e.StrokeIds;
		}
		catch (Exception ex)
		{
			// Log the error.
			Global.HandleThreadException(this, new System.Threading.ThreadExceptionEventArgs(ex));
		}
	}

	private void SystemEvents_DisplaySettingsChanged(object sender, EventArgs e)
	{
		dbg.WriteLine("----- SystemEvents_DisplaySettingsChanged -----");

		// Layout hover-region target area and child controls.
		if (hover != null) hover.UpdateTargetRectLayout();
	}

	//
	// Menu item handlers

	private void hover_FileNewClicked(object sender, System.EventArgs e)
	{
		if (!IsUserSure())
			return;

		doc = new MagicDocument();
		HookupOverlayToNewInk();
		savedfilename = null;

		Invalidate();
	}

	private void HookupOverlayToNewInk()
	{
		// Hook up the new ink to the InkOverlay, and induce a repaint.
		DisableInkOverlay();
		try
		{
			inkoverlay.Ink = doc.Ink;
			inkoverlay.Ink.InkAdded += new StrokesEventHandler(inkoverlay_Ink_InkAdded);
		}
		finally
		{ inkoverlay.Enabled = true; }

		Invalidate();
	}

	private void DisableInkOverlay()
	{
		while (inkoverlay.CollectingInk) Application.DoEvents();  //review: racey spin?
		inkoverlay.Enabled = false;
		inkoverlay.Selection = EmptyStrokes;
	}

	private void hover_FileOpenClicked(object sender, EventArgs e)
	{
		if (!IsUserSure())
			return;

		OpenFileDialog ofd = new OpenFileDialog();
		ofd.DefaultExt = "physi";
		ofd.Filter = "Physics Illustrator files (*.physi)|*.physi|All files (*.*)|*.*";
		if (ofd.ShowDialog() == DialogResult.OK)
		{
			OpenDocument(ofd.FileName);
		}	
	}

	public void OpenDocument(string filename)
	{
		try
		{
			using (System.IO.TextReader reader = File.OpenText(filename))
			{
				// Load it!  And hook up the new Ink object.
				doc = MagicDocument.LoadDocument(reader);
				savedfilename = filename;
				doc.Ink.Dirty = false;

				HookupOverlayToNewInk();
			}
		}
		catch (IOException ex)
		{
			MessageBox.Show(
				ex.Message, 
				Application.ProductName, 
				MessageBoxButtons.OK, 
				MessageBoxIcon.Warning);
		}
	}

	private void hover_FileSaveClicked(object sender, EventArgs e)
	{
		// If we haven't saved yet, do a save-as.  Else, just save.
		if (this.savedfilename == null)
		{
			ShowSaveAsDialog();
		}
		else
		{
			JustSaveIt();
		}
	}

	private void hover_FileSaveAsClicked(object sender, EventArgs e)
	{
		ShowSaveAsDialog();
	}

	private void JustSaveIt()
	{
		// Write it! And remember to set the Dirty property to false.
		dbg.Assert(savedfilename != null);

		using (TextWriter writer = File.CreateText(savedfilename))
		{
			doc.WriteDocument(writer);
			doc.Ink.Dirty = false;
		}
	}

	private DialogResult ShowSaveAsDialog()
	{
		SaveFileDialog sfd = new SaveFileDialog();
		sfd.AddExtension = true;
		sfd.DefaultExt = "physi";
		sfd.Filter = "Physics Illustrator files (*.physi)|*.physi|All files (*.*)|*.*";

		DialogResult dr = sfd.ShowDialog();
		if (dr == DialogResult.OK)
		{
			savedfilename = sfd.FileName;
			JustSaveIt();
		}

		return dr;
	}

	private void hover_FileHelpClicked(object sender, EventArgs e)
	{
		// Kickoff help file in separate process.
		Assembly thisassem = Assembly.GetExecutingAssembly();
		string help = Path.Combine(
			Path.GetDirectoryName(thisassem.Location),
			"PhysicsIllustratorForTabletPC.chm");
		System.Diagnostics.Process.Start(help);
	}

	private void hover_FileAboutClicked(object sender, EventArgs e)
	{
		AboutBox dlg = new AboutBox();
		dlg.ShowDialog(this);
	}

	private void hover_FileExitClicked(object sender, EventArgs e)
	{
		this.Close();
	}

	private void hover_EditCloneClicked(object sender, EventArgs e)
	{
		Strokes selected = inkoverlay.Selection;
		if (selected == null || selected.Count != 1) return;

		// Get objects for the targeted stroke(s).  Ensure that only one is selected.
		RigidBodyBase[] bodies = doc.GetBodiesFor(selected);
		if (bodies.Length != 1) return;

		RigidBodyBase body = bodies[0];

		// First, clone the ink stroke.  Move it down and to the right a bit.
		Rectangle newrect = selected.GetBoundingBox();
		newrect.Offset(1000,1000);
		doc.Ink.AddStrokesAtRectangle(selected,newrect);

		// Next, clone the body, binding it to the new stroke id. 
		// Note: we got the new Strokes' ids by listening to the InkAdded event
		// AddStrokesAtRectangle doesn't return the strokes' ids.
		RigidBodyBase newbody = body.Clone(neweststrokeids[0]);

		doc.Bodies.Add(newbody);

		// Repaint the area around the newbody.
		Rectangle dirtybbox = newbody.BoundingBox;
		InvalidateInkSpaceRectangle(dirtybbox);

		// Select it, to show the smart tag.
		inkoverlay.Selection = doc.Ink.CreateStrokes(neweststrokeids);
	}

	private void hover_EditDeleteClicked(object sender, EventArgs e)
	{
		Strokes doomed = inkoverlay.Selection;
		if (doomed == null || doomed.Count != 1) return;

		// Simply delegate to the UI handler for deleting strokes.
		this.inkoverlay_StrokesDeleting(this, 
			new InkOverlayStrokesDeletingEventArgs(doomed));

		// Now, actually delete the strokes, too.
		doc.Ink.DeleteStrokes(doomed);

		// Clear the selection rectangle.
		inkoverlay.Selection = EmptyStrokes;
	}

	private void hover_EditStraightenClicked(object sender, EventArgs e)
	{
		Strokes selected = inkoverlay.Selection;
		if (selected == null || selected.Count != 1) return;

		// Get objects for the targeted stroke(s).  Ensure only one selected.
		RigidBodyBase[] bodies = doc.GetBodiesFor(selected);
		if (bodies.Length != 1) return;

		RigidBodyBase body = bodies[0];

		// Repaint the area around the original body.
		Rectangle dirtybbox = body.BoundingBox;
		InvalidateInkSpaceRectangle(dirtybbox);

		// Straighten it.
		body.Straighten();

		// Repaint the area around the newbody.
		dirtybbox = body.BoundingBox;
		InvalidateInkSpaceRectangle(dirtybbox);
	}

	private void hover_EditPropertiesClicked(object sender, EventArgs e)
	{
		Strokes selected = inkoverlay.Selection;
		if (selected == null || selected.Count != 1) return;

		// Get objects for the targeted stroke(s).  Ensure that only one is selected.
		RigidBodyBase[] bodies = doc.GetBodiesFor(selected);
		if (bodies.Length != 1) return;

		RigidBodyBase body = bodies[0];

		using (BodyPropertiesForm bpf = new BodyPropertiesForm(body))
		{
			bpf.ShowDialog(this);
			Invalidate();
		}
	}

	private void hover_PenDrawClicked(object sender, EventArgs e)
	{
		SetEditingMode(InkOverlayEditingMode.Ink,true);
	}

	private void hover_PenEraseClicked(object sender, EventArgs e)
	{
		SetEditingMode(InkOverlayEditingMode.Delete,true);
	}

	private void hover_PenLassoClicked(object sender, EventArgs e)
	{
		SetEditingMode(InkOverlayEditingMode.Select,true);
	}

	private void SetEditingMode(InkOverlayEditingMode em, bool @explicit)
	{
		if (inkoverlay.EditingMode == em) return;

		if (em == InkOverlayEditingMode.Delete) 
			inkoverlay.Selection = EmptyStrokes;

		inkoverlay.EditingMode = em;
		if (@explicit) declaredmode = em;
	}

	private Strokes EmptyStrokes
	{
		get { return doc.Ink.CreateStrokes(); }
	}

	private Strokes MakeSingleStrokeCollection(int id)
	{
		int[] ids = new int[] { id };
		Strokes strokes = doc.Ink.CreateStrokes(ids);
		if (strokes.Count != 1) throw new ApplicationException("Bogus stroke id");
		return strokes;
	}
	private Strokes MakeSingleStrokeCollection(Stroke s)
	{
		return MakeSingleStrokeCollection(s.Id);
	}

	private void hover_AnimateClicked(object sender, EventArgs e)
	{
		dbg.WriteLine("----- hover_AnimateClicked -----");

		PhysicsIllustrator.SmartTag.SmartTag tag = sender as PhysicsIllustrator.SmartTag.SmartTag;

		// Running or stopping?
		if (inkoverlay.Enabled)
		{
			// Lock down all editing operations.
			DisableInkOverlay();
			if (bodytag.Visible) bodytag.Hide();

			// Change tag to red x.
			hover.Enabled = false;
			tag.Image = Global.LoadImage("Resources.StopAnimation.ico");
			menuttip.SetToolTip(tag,"Stop!");
			tag.Show();

			// Fork the document for animation.
			MagicDocument animedoc = doc.Clone();

			// Run the animation!
			engine = new AnimationEngine();
			engine.Start(animedoc,this);
		}
		else // stopping
		{
			engine.Stop();

			inkoverlay.Enabled = true;

			tag.Image = Global.LoadImage("Resources.Animate.ico");
			menuttip.SetToolTip(tag,"Animate!");
			hover.Enabled = true;
			hover.DisplayInitial();
			Invalidate();
		}
	}

	private void hover_MinimizeClicked(object sender, EventArgs e)
	{
		dbg.WriteLine("----- hover_MinimizeClicked -----");

		PhysicsIllustrator.SmartTag.SmartTag tag = sender as PhysicsIllustrator.SmartTag.SmartTag;

		this.WindowState = FormWindowState.Minimized;
	}
}