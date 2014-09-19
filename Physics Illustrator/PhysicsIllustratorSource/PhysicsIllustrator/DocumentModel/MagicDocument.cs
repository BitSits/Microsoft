//-------------------------------------------------------------------------
//
//  Copyright (C) 2004 Microsoft Corporation
//  All rights reserved.
//
//  File: MagicDocument.cs
//  
//  Description: XML serialization mapping for .physi document.
//--------------------------------------------------------------------------

using System;
using System.Xml;
using System.Xml.Serialization;
using System.Collections;
using System.Drawing;
using Microsoft.Ink;

using CultureInfo=System.Globalization.CultureInfo;

[XmlRoot]
public class MagicDocument : ICloneable
{
	[XmlAttribute] 
	public string version = "3.0";

	[XmlElement]
	public GravitationalForceMech Gravity;

	// Sequence of RigidBodyBase-derived items.
	[XmlArray]
	[
	XmlArrayItem("EllipticalBody",typeof(EllipticalBody)), 
	XmlArrayItem("PolygonalBody",typeof(PolygonalBody))
	]
	public ArrayList Bodies = new ArrayList();

	// Sequence of MechanismBase-derived items.
	[XmlArray]
	[
	XmlArrayItem("Rod",typeof(RodMech)), 
	XmlArrayItem("Spring",typeof(SpringMech)), 
	XmlArrayItem("Rope",typeof(RopeMech)), 
	XmlArrayItem("PinJoint",typeof(JointMech)), 
	XmlArrayItem("ExternalForce",typeof(ExternalForceMech)), 
	XmlArrayItem("PropulsiveForce",typeof(PropulsiveForceMech))
	]
	public ArrayList Mechanisms = new ArrayList();

	//future: Groups of non-colliding sets.
	//[XmlArray] [XmlArrayItem("NonCollidingSet",typeof(NonCollidingSet))]
	//public ArrayList NonCollidingSets = new ArrayList();

	// The user-drawn ink strokes
	[XmlIgnore] public Ink Ink = new Ink();
	[XmlElement("Ink")] public string xml_Ink
	{
		get
		{ return Convert.ToString(Ink); }
		set
		{ Ink = Convert.ToInk(value); }
	}

	//
	// Serialization support for complex types

	public sealed class Convert
	{
		public static Ink ToInk(string b64)
		{
			if (b64 == null) return null;
			Ink ink = new Ink();
			if (b64.Length > 0)
			{
				byte[] bits = System.Convert.FromBase64String(b64);
				ink.Load(bits);
			}
			return ink;
		}

		public static string ToString(Ink ink)
		{
			if (ink == null) return null;
			byte[] bits = ink.Save(PersistenceFormat.InkSerializedFormat,CompressionMode.Maximum);
			return System.Convert.ToBase64String(bits);
		}

		public static Point ToPoint(string val)
		{
			int x,y; ParseXY(val, out x, out y);
			return new Point(x,y);
		}

		public static Point[] ToPointArray(string[] vals)
		{
			if (vals == null) return null;

			int n = vals.Length;
			Point[] points = new Point[n];
			for (int i=0; i < n; ++i)
				points[i] = ToPoint(vals[i]);
			return points;
		}

		public static Vector ToVector(string val)
		{
			int dx,dy; ParseXY(val, out dx, out dy);
			return new Vector(dx,dy);
		}

		public static string ToString(Point point)
		{ return String.Format("{0},{1}",point.X,point.Y); }

		public static string ToString(Vector vector)
		{ return String.Format("{0},{1}",vector.DX,vector.DY); }

		public static string[] ToStringArray(Point[] points)
		{
			if (points == null) return null;

			int n = points.Length;
			string[] vals = new string[n];
			for (int i=0; i < n; ++i)
				vals[i] = ToString(points[i]);
			return vals;
		}

		private static void ParseXY(string xy, out int x, out int y)
		{
			// Parse string in x,y form.
			string[] parts = xy.Split(',');
			if (parts.Length != 2)
				throw new FormatException();

			x = Int32.Parse(parts[0],CultureInfo.InvariantCulture);
			y = Int32.Parse(parts[1],CultureInfo.InvariantCulture);
		}
	}

	//
	// Object-graph support

	internal RigidBodyBase[] HitTestBodies(Point p)
	{
		ArrayList list = new ArrayList();
		foreach (RigidBodyBase body in Bodies)
		{
			if (body.HitTest(p))
				list.Add(body);
		}
		list.Reverse(); // Return in top-to-bottom order (more intuitive for UI).
		return list.ToArray(typeof(RigidBodyBase)) as RigidBodyBase[];
	}

	internal RigidBodyBase LookupBody(int strokeid)
	{
		foreach (RigidBodyBase body in Bodies)
			if (body.strokeid == strokeid)
				return body;
		return null;
	}

	internal RigidBodyBase[] GetBodiesFor(Strokes strokes)
	{
		ArrayList list = new ArrayList();
		foreach (Stroke s in strokes)
		{
			foreach (RigidBodyBase body in Bodies)
			{
				if (body.strokeid == s.Id)
					list.Add(body);
			}
		}
		return list.ToArray(typeof(RigidBodyBase)) as RigidBodyBase[];
	}

	internal MechanismBase[] GetMechanismsFor(Strokes strokes)
	{
		ArrayList list = new ArrayList();
		foreach (Stroke s in strokes)
		{
			foreach (MechanismBase mech in Mechanisms)
			{
				if (mech.strokeid == s.Id)
					list.Add(mech);
			}
		}
		return list.ToArray(typeof(MechanismBase)) as MechanismBase[];
	}

	internal MechanismBase[] GetMechanismsForBody(RigidBodyBase body)
	{
		ArrayList list = new ArrayList();
		foreach (MechanismBase mech in Mechanisms)
		{
			BindingMechanismBase bmech = mech as BindingMechanismBase;
			ForceMechanismBase fmech = mech as ForceMechanismBase;

			if (bmech != null)
			{
				if (bmech.EndpointA.strokeref == body.strokeid ||
					bmech.EndpointB.strokeref == body.strokeid)
					list.Add(bmech);
			}
			else if (fmech != null)
			{
				if (fmech.Body.strokeref == body.strokeid)
					list.Add(fmech);
			}
		}
		return list.ToArray(typeof(MechanismBase)) as MechanismBase[];
	}

	//
	// ICloneable implementation

	object ICloneable.Clone()
	{
		bool wasdirty = Ink.Dirty;
		try // to remember to restore dirty flag
		{
			System.Text.StringBuilder buffer = new System.Text.StringBuilder();
			using (System.IO.StringWriter writer = new System.IO.StringWriter(buffer))
			{
				this.WriteDocument(writer);
				using (System.IO.StringReader reader = new System.IO.StringReader(buffer.ToString()))
				{
					return MagicDocument.LoadDocument(reader);
				}
			}
		}
		finally
		{
			// Cloning != saving; don't lose the dirty bit.
			Ink.Dirty = wasdirty;
		}
	}

	public MagicDocument Clone()
	{
		return ((ICloneable)this).Clone() as MagicDocument;
	}

	//
	// XmlSerializer is expensive to instantiate (it's a compiler!) -- it should only 
	// be done once per each root document type.

	[XmlIgnore]
	private static XmlSerializer xmlSerializer = new XmlSerializer(typeof(MagicDocument));

	public void WriteDocument(System.IO.TextWriter writer)
	{
		xmlSerializer.Serialize(writer,this);
	}

	public static MagicDocument LoadDocument(System.IO.TextReader reader)
	{
		MagicDocument newdoc = xmlSerializer.Deserialize(reader) as MagicDocument;

		foreach (MechanismBase mech in newdoc.Mechanisms)
			mech.CompleteDeserialization(newdoc);

		return newdoc;
	}
}