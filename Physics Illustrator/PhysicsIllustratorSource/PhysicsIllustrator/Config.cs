//-------------------------------------------------------------------------
//
//  Copyright (C) 2004 Microsoft Corporation
//  All rights reserved.
//
//  This source code is only intended as a supplement to the
//  Microsoft Tablet PC Platform SDK Reference and related electronic 
//  documentation provided with the Software Development Kit.
//  See these sources for more detailed information. 
//
//  File: Config.cs
//  
//  Description: Wrapper for app.config settings -- providing defaults for optional 
//  settings, wherever absent.
//--------------------------------------------------------------------------

using System;
using System.IO;
using System.Configuration;

internal class Config
{
	// Determines whether or not the hover-panel is always visible (default: false).
	public static bool PinHoverPanel
	{
		get
		{
			string val = ConfigurationSettings.AppSettings["PinHoverPanel"];
			if (val != null) return Boolean.Parse(val);

			return true;
		}
	}
}
