//-------------------------------------------------------------------------
//
//  Copyright (C) 2004 Microsoft Corporation
//  All rights reserved.
//
//  File: SerializationTest.cs
//  
//  Description: Unit tests for document de/serialization.
//--------------------------------------------------------------------------

using System;
using System.Xml;
using System.Xml.Serialization;
using System.Collections;
using System.Drawing;

#if TEST
namespace UnitTests
{
	internal class SerializationTest
	{
		//[UnitTest]
		static bool TestBasicReadingWritingAndRithmetic()
		{
			System.Text.StringBuilder buffer = new System.Text.StringBuilder();
			System.IO.StringWriter writer = new System.IO.StringWriter(buffer);

			MagicDocument fixture = CreateDocumentFixture();
			fixture.WriteDocument(writer);

			//Console.WriteLine(buffer.ToString());

			System.IO.StringReader reader = new System.IO.StringReader(buffer.ToString());
			MagicDocument result = MagicDocument.LoadDocument(reader);

			return CompareDocuments(fixture,result);
		}

		//[UnitTest]
		static bool TestCloneability()
		{
			MagicDocument fixture = CreateDocumentFixture();
			MagicDocument result = fixture.Clone();
			
			if (Object.ReferenceEquals(fixture,result))
				Console.Error.WriteLine("dude, come on...");

			return CompareDocuments(fixture,result);
		}

		static bool CompareDocuments(MagicDocument a, MagicDocument b)
		{
			if (a.version != b.version) return false;
			if (a.Bodies.Count != b.Bodies.Count) return false;
			if (a.Mechanisms.Count != b.Mechanisms.Count) return false;
			if (a.xml_Ink != b.xml_Ink) return false;

			for (int i=0; i < a.Bodies.Count; ++i)
			{
				RigidBodyBase a1 = ((RigidBodyBase)a.Bodies[i]);
				RigidBodyBase b1 = ((RigidBodyBase)b.Bodies[i]);
				if (a1.GetType() != b1.GetType()) return false;
				if (a1.strokeid != b1.strokeid) return false;
				if (a1.anchored != b1.anchored) return false;
				if (a1.cfriction != b1.cfriction) return false;
				if (a1.density != b1.density) return false;
			}

			for (int i=0; i < a.Mechanisms.Count; ++i)
			{
				MechanismBase a1 = ((MechanismBase)a.Mechanisms[i]);
				MechanismBase b1 = ((MechanismBase)b.Mechanisms[i]);
				if (a1.GetType() != b1.GetType()) return false;
				if (a1 is ForceMechanismBase)
				{
					ForceMechanismBase a2 = (ForceMechanismBase)a1;
					ForceMechanismBase b2 = (ForceMechanismBase)b1;
					if (a2.Body.strokeref != b2.Body.strokeref) return false;
					if (a2.Body.attachloc != b2.Body.attachloc ) return false;
					if (a2.vector != b2.vector) return false;
				}
			}

			return true;
		}

		static MagicDocument CreateDocumentFixture()
		{
			MagicDocument doc = new MagicDocument();

			RigidBodyBase body;

			body = new EllipticalBody();
			body.strokeid = 1;
			doc.Bodies.Add(body);

			body = new EllipticalBody();
			body.strokeid = 2;
			doc.Bodies.Add(body);

			body = new PolygonalBody();
			body.strokeid = 3;
			doc.Bodies.Add(body);
			((PolygonalBody)body).Vertices = new Point[] {
															 new Point(120,340),
															 new Point(560,340),
															 new Point(560,780),
															 new Point(120,780)
														 };

			BindingMechanismBase mech;

			mech = new RodMech();
			mech.EndpointA = BodyRef.For((RigidBodyBase)doc.Bodies[0],Point.Empty);
			mech.EndpointB = BodyRef.For((RigidBodyBase)doc.Bodies[1],Point.Empty);
			doc.Mechanisms.Add(mech);

			mech = new RopeMech();
			mech.EndpointA = BodyRef.For((RigidBodyBase)doc.Bodies[1],Point.Empty);
			mech.EndpointB = BodyRef.For((RigidBodyBase)doc.Bodies[2],Point.Empty);
			doc.Mechanisms.Add(mech);

			mech = new SpringMech();
			mech.EndpointA = BodyRef.For((RigidBodyBase)doc.Bodies[2],Point.Empty);
			mech.EndpointB = BodyRef.For((RigidBodyBase)doc.Bodies[0],Point.Empty);
			doc.Mechanisms.Add(mech);

			return doc;
		}
	}

}
#endif
