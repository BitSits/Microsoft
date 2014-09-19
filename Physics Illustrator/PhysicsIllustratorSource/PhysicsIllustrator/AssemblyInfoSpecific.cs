//-------------------------------------------------------------------------
//
//  Copyright (C) 2004 Microsoft Corporation
//  All rights reserved.
//
//
//  File: AssemblyInfoSpecific.cs
//  
//  Description: Assembly-level attributes specific to this project. (See also
//	AssemblyInfoCommon.cs in the solution's folder.)
//
//--------------------------------------------------------------------------


using System;
using System.Reflection;
using System.Runtime.InteropServices;

// Define title, description, and build-settings per assembly.
[assembly: AssemblyTitle("Physics Illustrator for Tablet PC")]
[assembly: AssemblyDescription("A 2D physics simulator for the Tablet PC.")]

// Top-level application -- no need for CLS- or COM-compliance.
[assembly: CLSCompliant(false)]
[assembly: ComVisible(false)]
