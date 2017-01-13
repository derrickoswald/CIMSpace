/**
 * Test javascript file for build testing.
 * Run from CIMSpace root directory with the command:
 *     java -jar test/js.jar test/r.js test/Test.js
 */
"use strict";
require.config ({baseUrl: "js"});
requirejs
(
    ["cim"],
    function (cim)
    {
        print ("starting XML read");
        var start = new Date ().getTime ();
//        var xml = '' +
//            '<rdf:RDF xmlns:cim="http://iec.ch/TC57/2013/CIM-schema-cim16#" xmlns:md="http://iec.ch/TC57/61970-552/ModelDescription/1#" xmlns:dm="http://iec.ch/2002/schema/CIM_difference_model#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">' +
//            '       <cim:PSRType rdf:ID="PSRType_Substation">' +
//            '            <cim:IdentifiedObject.name>Substation</cim:IdentifiedObject.name>' +
//            '        </cim:PSRType>' +
//            '       <cim:PSRType rdf:ID="PSRType_Fake">' +
//            '            <cim:IdentifiedObject.name>Fake</cim:IdentifiedObject.name>' +
//            '        </cim:PSRType>' +
//            '</rdf:RDF> ';
//        print ("xml = \n" + xml);
//        print ("length = " + xml.length);

        var xml = readFile ("../CIMScala/data/NIS_CIM_Export_NS_INITIAL_FILL_Oberiberg.rdf");
        var begin = new Date ().getTime ();
        print ("finished XML read (" + (Math.round (begin - start) / 1000) + " seconds) " + xml.length + " characters");

        print ("starting XML parse");
        var result = cim.read_full_xml (xml, 0);
        var end = new Date ().getTime ();
        CIM_Data = result.parsed;
        print ("finished XML parse (" + (Math.round (end - begin) / 1000) + " seconds)");
//        print (JSON.stringify (CIM_Data, null, 4));
        for (var key in CIM_Data)
        {
            var object = CIM_Data[key];
            var count = 0;
            for (var i in object)
                count++;
            print (key + " " + count)
        }
    }
);
