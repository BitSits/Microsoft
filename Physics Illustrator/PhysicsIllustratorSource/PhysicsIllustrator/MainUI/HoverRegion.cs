//-------------------------------------------------------------------------
//
//  Copyright (C) 2004 Microsoft Corporation
//  All rights reserved.
//
//  File: HoverRegion.cs
//  
//  Description: Implementation of the hover-region control bar buttons.
//--------------------------------------------------------------------------

using System;
using System.Drawing;
using System.Windows.Forms;
using System.Collections;

internal sealed class HoverRegion : HoverRegionBase
{
	//
	// Initialization

	public HoverRegion(Control parent, bool pinned) : base(parent,pinned)
	{ }

	//
	// Interface

	public void InitializeControls(ToolTip tooltip)
	{
		// Create and initialize the smart tag "menu" controls.
		fileTag = new PhysicsIllustrator.SmartTag.SmartTag();
		editTag = new PhysicsIllustrator.SmartTag.SmartTag();
		drawTag = new PhysicsIllustrator.SmartTag.SmartTag();
		eraseTag = new PhysicsIllustrator.SmartTag.SmartTag();
		lassoTag = new PhysicsIllustrator.SmartTag.SmartTag();
		animateTag = new PhysicsIllustrator.SmartTag.SmartTag();
		minimizeTag = new PhysicsIllustrator.SmartTag.SmartTag();

		fileTag.Location = new Point(1*42, 20);
		editTag.Location = new Point(2*42, 20);
		drawTag.Location = new Point(3*42, 20);
		eraseTag.Location = new Point(4*42, 20);
		lassoTag.Location = new Point(5*42, 20);
		animateTag.Location = new Point(6*42, 20);
		minimizeTag.Location = new Point(Parent.Width-1*42, 20);

		fileTag.Image = Global.LoadImage("Resources.FileMenu.ico");
		editTag.Image = Global.LoadImage("Resources.EditMenu.ico");
		drawTag.Image = Global.LoadImage("Resources.Pen.ico");
		eraseTag.Image = Global.LoadImage("Resources.Eraser.ico");
		lassoTag.Image = Global.LoadImage("Resources.Lasso.ico");
		animateTag.Image = Global.LoadImage("Resources.Animate.ico");
		minimizeTag.Image = Global.LoadImage("Resources.Minimize.ico");

		tooltip.SetToolTip(fileTag,"Main Menu");
		tooltip.SetToolTip(editTag,"Edit Menu");
		tooltip.SetToolTip(drawTag,"Pen");
		tooltip.SetToolTip(eraseTag,"Eraser");
		tooltip.SetToolTip(lassoTag,"Selection Lasso");
		tooltip.SetToolTip(animateTag,"Animate!");
		tooltip.SetToolTip(minimizeTag,"Minimize");

		fileTag.ContextMenu = new ContextMenu();
		fileTag.ContextMenu.MenuItems.Add("New", new EventHandler(fileTag_New));
		fileTag.ContextMenu.MenuItems.Add("Open...", new EventHandler(fileTag_Open));
		fileTag.ContextMenu.MenuItems.Add("Save", new EventHandler(fileTag_Save));
		fileTag.ContextMenu.MenuItems.Add("Save As...", new EventHandler(fileTag_SaveAs));
		fileTag.ContextMenu.MenuItems.Add("-");
		fileTag.ContextMenu.MenuItems.Add("Help", new EventHandler(fileTag_Help));
		fileTag.ContextMenu.MenuItems.Add("About...", new EventHandler(fileTag_About));
		fileTag.ContextMenu.MenuItems.Add("-");
		fileTag.ContextMenu.MenuItems.Add("Exit", new EventHandler(fileTag_Exit));

		fileTag.FindMenuItem("Open...").Shortcut = Shortcut.CtrlO;

		editTag.ContextMenu = new ContextMenu();
		editTag.ContextMenu.MenuItems.Add("Clone", new EventHandler(editTag_Clone));
		editTag.ContextMenu.MenuItems.Add("Delete", new EventHandler(editTag_Delete));
		editTag.ContextMenu.MenuItems.Add("-");
		editTag.ContextMenu.MenuItems.Add("Straighten", new EventHandler(editTag_Straighten));
		editTag.ContextMenu.MenuItems.Add("Properties...", new EventHandler(editTag_Properties));

		drawTag.ContextMenu = null;
		drawTag.Click += new EventHandler(drawTag_Click);

		eraseTag.ContextMenu = null;
		eraseTag.Click += new EventHandler(eraseTag_Click);

		lassoTag.ContextMenu = null;
		lassoTag.Click += new EventHandler(lassoTag_Click);

		animateTag.ContextMenu = null;
		animateTag.Click += new EventHandler(animateTag_Click);

		minimizeTag.ContextMenu = null;
		minimizeTag.Click += new EventHandler(minimizeTag_Click);

		base.AddControl(fileTag);
		base.AddControl(editTag);
		base.AddControl(drawTag);
		base.AddControl(eraseTag);
		base.AddControl(lassoTag);
		base.AddControl(animateTag);
		base.AddControl(minimizeTag,true); // right-hand side
	}

	public void EnablePerItemEditCommands(bool enable)
	{
		foreach (MenuItem item in editTag.ContextMenu.MenuItems)
			item.Enabled = enable;
	}

	public event EventHandler FileNewClicked;
	public event EventHandler FileOpenClicked;
	public event EventHandler FileSaveClicked;
	public event EventHandler FileSaveAsClicked;
	public event EventHandler FileHelpClicked;
	public event EventHandler FileAboutClicked;
	public event EventHandler FileExitClicked;

	public event EventHandler EditCloneClicked;
	public event EventHandler EditDeleteClicked;
	public event EventHandler EditStraightenClicked;
	public event EventHandler EditPropertiesClicked;

	public event EventHandler PenDrawClicked;
	public event EventHandler PenEraseClicked;
	public event EventHandler PenLassoClicked;

	public event EventHandler AnimateClicked;
	public event EventHandler MinimizeClicked;

	//
	// Implementation

	PhysicsIllustrator.SmartTag.SmartTag fileTag;
	PhysicsIllustrator.SmartTag.SmartTag editTag;
	PhysicsIllustrator.SmartTag.SmartTag drawTag;
	PhysicsIllustrator.SmartTag.SmartTag eraseTag;
	PhysicsIllustrator.SmartTag.SmartTag lassoTag;
	PhysicsIllustrator.SmartTag.SmartTag animateTag;
	PhysicsIllustrator.SmartTag.SmartTag minimizeTag;

	// File menu events

	private void fileTag_New(object sender, EventArgs e)
	{
		if (FileNewClicked != null) FileNewClicked(sender,e);
	}

	private void fileTag_Open(object sender, EventArgs e)
	{
		if (FileOpenClicked != null) FileOpenClicked(sender,e);
	}

	private void fileTag_Save(object sender, EventArgs e)
	{
		if (FileSaveClicked != null) FileSaveClicked(sender,e);
	}

	private void fileTag_SaveAs(object sender, EventArgs e)
	{
		if (FileSaveAsClicked != null) FileSaveAsClicked(sender,e);
	}

	private void fileTag_Help(object sender, EventArgs e)
	{
		if (FileHelpClicked != null) FileHelpClicked(sender,e);
	}

	private void fileTag_About(object sender, EventArgs e)
	{
		if (FileAboutClicked != null) FileAboutClicked(sender,e);
	}

	private void fileTag_Exit(object sender, EventArgs e)
	{
		if (FileExitClicked != null) FileExitClicked(sender,e);
	}

	// Edit menu events

	private void editTag_Clone(object sender, EventArgs e)
	{
		if (EditCloneClicked != null) EditCloneClicked(sender,e);
	}

	private void editTag_Delete(object sender, EventArgs e)
	{
		if (EditDeleteClicked != null) EditDeleteClicked(sender,e);
	}

	private void editTag_Straighten(object sender, EventArgs e)
	{
		if (EditStraightenClicked != null) EditStraightenClicked(sender,e);
	}

	private void editTag_Properties(object sender, EventArgs e)
	{
		if (EditPropertiesClicked != null) EditPropertiesClicked(sender,e);
	}

	// Pen menu events

	private void drawTag_Click(object sender, EventArgs e)
	{
		if (PenDrawClicked != null) PenDrawClicked(sender,e);
	}

	private void eraseTag_Click(object sender, EventArgs e)
	{
		if (PenEraseClicked != null) PenEraseClicked(sender,e);
	}

	private void lassoTag_Click(object sender, EventArgs e)
	{
		if (PenLassoClicked != null) PenLassoClicked(sender,e);
	}

	// Animate button event

	private void animateTag_Click(object sender, EventArgs e)
	{
		if (AnimateClicked != null) AnimateClicked(sender,e);
	}

	private void minimizeTag_Click(object sender, EventArgs e)
	{
		if (MinimizeClicked != null) MinimizeClicked(sender,e);
	}
}
