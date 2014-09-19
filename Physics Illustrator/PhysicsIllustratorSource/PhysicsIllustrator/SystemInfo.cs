//-------------------------------------------------------------------------
//
//  Copyright (C) 2004 Microsoft Corporation
//  All rights reserved.
//
//  File: SystemInfo.cs
//  
//  Description: Misc system information, such as OS, desktop orientaton, 
//	and other attributes.
//-------------------------------------------------------------------------- 

using System;
using System.Drawing;
using System.Windows.Forms;

internal class SystemInfo
{
	public static bool HasRecognizers
	{
		get
		{
			// Look to see if recognizers are installed.
			Microsoft.Ink.Recognizers recos = new Microsoft.Ink.Recognizers();
			return (recos.Count > 0);
		}
	}

	// Static detection of portrait (as opposed to landscape) screen orientation;
	// typically called in response to Microsoft.Win32.SystemEvents.DisplaySettingsChanged 
	// and at application startup, to position form UI elements.
	public static bool PortraitMode
	{
		get
		{
			int h = Screen.PrimaryScreen.Bounds.Height;
			int w = Screen.PrimaryScreen.Bounds.Width;
			return (h > w);
		}
	}
}

