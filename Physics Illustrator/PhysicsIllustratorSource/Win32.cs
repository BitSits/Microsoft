//-------------------------------------------------------------------------
//
//  Copyright (C) 2004 Microsoft Corporation
//  All rights reserved.
//
//  File: Win32.cs
//  
//  Description: Error-safe managed wrappers for Win32 API functions.
//--------------------------------------------------------------------------
using System;
using System.ComponentModel;
using System.Runtime.InteropServices;

internal sealed class Win32
{
	private Win32() {}

	//
	// Interface

	public static bool GetMenuDropAlignment()
	{
		bool b = false;
		if (!User32.SystemParametersInfo(0x001B, 0, ref b, 0))
			throw new Win32Exception();

		return b;
	}

	public static bool IsTabletPC()
	{
		return (User32.GetSystemMetrics(86) != 0);
	}

	//
	// Implementation

	[System.Security.SuppressUnmanagedCodeSecurity]
		private sealed class User32
	{
		private User32() {}

		[DllImport("User32.dll", SetLastError=true)]
		public static extern bool SystemParametersInfo(uint action, uint param, ref bool paramx, uint wininiflags);

		[DllImport("User32.dll", SetLastError=false)]
		public static extern int GetSystemMetrics(int index);
	}
}