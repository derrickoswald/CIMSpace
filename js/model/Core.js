define
(
    ["model/base"],
    /**
     * Contains the core PowerSystemResource and ConductingEquipment entities shared by all applications plus common collections of those entities.
     *
     * Not all applications require all the Core entities.  This package does not depend on any other package except the Domain package, but most of the other packages have associations and generalizations that depend on it.
     *
     */
    function (base)
    {

        /**
         * Type of name.
         *
         * Possible values for attribute 'name' are implementation dependent but standard profiles may specify types. An enterprise may have multiple IT systems each having its own local name for the same object, e.g. a planning system may have different names from an EMS. An object may also have different names within the same IT system, e.g. localName as defined in CIM version 14. The definition from CIM14 is:
         *
         */
        class NameType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.NameType;
                if (null == bucket)
                   cim_data.NameType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.NameType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "NameType";
                base.parse_element (/<cim:NameType.description>([\s\S]*?)<\/cim:NameType.description>/g, obj, "description", base.to_string, sub, context);
                base.parse_element (/<cim:NameType.name>([\s\S]*?)<\/cim:NameType.name>/g, obj, "name", base.to_string, sub, context);
                base.parse_attribute (/<cim:NameType.NameTypeAuthority\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "NameTypeAuthority", sub, context);

                var bucket = context.parsed.NameType;
                if (null == bucket)
                   context.parsed.NameType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "NameType", "description", base.from_string, fields);
                base.export_element (obj, "NameType", "name", base.from_string, fields);
                base.export_attribute (obj, "NameType", "NameTypeAuthority", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#NameType_collapse" aria-expanded="true" aria-controls="NameType_collapse">NameType</a>
<div id="NameType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#description}}<div><b>description</b>: {{description}}</div>{{/description}}
{{#name}}<div><b>name</b>: {{name}}</div>{{/name}}
{{#NameTypeAuthority}}<div><b>NameTypeAuthority</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{NameTypeAuthority}}&quot;);})'>{{NameTypeAuthority}}</a></div>{{/NameTypeAuthority}}
</div>
`
                );
           }        }

        /**
         * TimePoints for a schedule where the time between the points varies.
         *
         */
        class IrregularTimePoint extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.IrregularTimePoint;
                if (null == bucket)
                   cim_data.IrregularTimePoint = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.IrregularTimePoint[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "IrregularTimePoint";
                base.parse_element (/<cim:IrregularTimePoint.time>([\s\S]*?)<\/cim:IrregularTimePoint.time>/g, obj, "time", base.to_string, sub, context);
                base.parse_element (/<cim:IrregularTimePoint.value1>([\s\S]*?)<\/cim:IrregularTimePoint.value1>/g, obj, "value1", base.to_float, sub, context);
                base.parse_element (/<cim:IrregularTimePoint.value2>([\s\S]*?)<\/cim:IrregularTimePoint.value2>/g, obj, "value2", base.to_float, sub, context);
                base.parse_attribute (/<cim:IrregularTimePoint.IntervalSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "IntervalSchedule", sub, context);

                var bucket = context.parsed.IrregularTimePoint;
                if (null == bucket)
                   context.parsed.IrregularTimePoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "IrregularTimePoint", "time", base.from_string, fields);
                base.export_element (obj, "IrregularTimePoint", "value1", base.from_float, fields);
                base.export_element (obj, "IrregularTimePoint", "value2", base.from_float, fields);
                base.export_attribute (obj, "IrregularTimePoint", "IntervalSchedule", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#IrregularTimePoint_collapse" aria-expanded="true" aria-controls="IrregularTimePoint_collapse">IrregularTimePoint</a>
<div id="IrregularTimePoint_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#time}}<div><b>time</b>: {{time}}</div>{{/time}}
{{#value1}}<div><b>value1</b>: {{value1}}</div>{{/value1}}
{{#value2}}<div><b>value2</b>: {{value2}}</div>{{/value2}}
{{#IntervalSchedule}}<div><b>IntervalSchedule</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{IntervalSchedule}}&quot;);})'>{{IntervalSchedule}}</a></div>{{/IntervalSchedule}}
</div>
`
                );
           }        }

        /**
         * Enumeration of phase identifiers.
         *
         * Allows designation of phases for both transmission and distribution equipment, circuits and loads.
         *
         */
        class PhaseCode extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PhaseCode;
                if (null == bucket)
                   cim_data.PhaseCode = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PhaseCode[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "PhaseCode";
                base.parse_element (/<cim:PhaseCode.ABCN>([\s\S]*?)<\/cim:PhaseCode.ABCN>/g, obj, "ABCN", base.to_string, sub, context);
                base.parse_element (/<cim:PhaseCode.ABC>([\s\S]*?)<\/cim:PhaseCode.ABC>/g, obj, "ABC", base.to_string, sub, context);
                base.parse_element (/<cim:PhaseCode.ABN>([\s\S]*?)<\/cim:PhaseCode.ABN>/g, obj, "ABN", base.to_string, sub, context);
                base.parse_element (/<cim:PhaseCode.ACN>([\s\S]*?)<\/cim:PhaseCode.ACN>/g, obj, "ACN", base.to_string, sub, context);
                base.parse_element (/<cim:PhaseCode.BCN>([\s\S]*?)<\/cim:PhaseCode.BCN>/g, obj, "BCN", base.to_string, sub, context);
                base.parse_element (/<cim:PhaseCode.AB>([\s\S]*?)<\/cim:PhaseCode.AB>/g, obj, "AB", base.to_string, sub, context);
                base.parse_element (/<cim:PhaseCode.AC>([\s\S]*?)<\/cim:PhaseCode.AC>/g, obj, "AC", base.to_string, sub, context);
                base.parse_element (/<cim:PhaseCode.BC>([\s\S]*?)<\/cim:PhaseCode.BC>/g, obj, "BC", base.to_string, sub, context);
                base.parse_element (/<cim:PhaseCode.AN>([\s\S]*?)<\/cim:PhaseCode.AN>/g, obj, "AN", base.to_string, sub, context);
                base.parse_element (/<cim:PhaseCode.BN>([\s\S]*?)<\/cim:PhaseCode.BN>/g, obj, "BN", base.to_string, sub, context);
                base.parse_element (/<cim:PhaseCode.CN>([\s\S]*?)<\/cim:PhaseCode.CN>/g, obj, "CN", base.to_string, sub, context);
                base.parse_element (/<cim:PhaseCode.A>([\s\S]*?)<\/cim:PhaseCode.A>/g, obj, "A", base.to_string, sub, context);
                base.parse_element (/<cim:PhaseCode.B>([\s\S]*?)<\/cim:PhaseCode.B>/g, obj, "B", base.to_string, sub, context);
                base.parse_element (/<cim:PhaseCode.C>([\s\S]*?)<\/cim:PhaseCode.C>/g, obj, "C", base.to_string, sub, context);
                base.parse_element (/<cim:PhaseCode.N>([\s\S]*?)<\/cim:PhaseCode.N>/g, obj, "N", base.to_string, sub, context);
                base.parse_element (/<cim:PhaseCode.s1N>([\s\S]*?)<\/cim:PhaseCode.s1N>/g, obj, "s1N", base.to_string, sub, context);
                base.parse_element (/<cim:PhaseCode.s2N>([\s\S]*?)<\/cim:PhaseCode.s2N>/g, obj, "s2N", base.to_string, sub, context);
                base.parse_element (/<cim:PhaseCode.s12N>([\s\S]*?)<\/cim:PhaseCode.s12N>/g, obj, "s12N", base.to_string, sub, context);
                base.parse_element (/<cim:PhaseCode.s1>([\s\S]*?)<\/cim:PhaseCode.s1>/g, obj, "s1", base.to_string, sub, context);
                base.parse_element (/<cim:PhaseCode.s2>([\s\S]*?)<\/cim:PhaseCode.s2>/g, obj, "s2", base.to_string, sub, context);
                base.parse_element (/<cim:PhaseCode.s12>([\s\S]*?)<\/cim:PhaseCode.s12>/g, obj, "s12", base.to_string, sub, context);

                var bucket = context.parsed.PhaseCode;
                if (null == bucket)
                   context.parsed.PhaseCode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "PhaseCode", "ABCN", base.from_string, fields);
                base.export_element (obj, "PhaseCode", "ABC", base.from_string, fields);
                base.export_element (obj, "PhaseCode", "ABN", base.from_string, fields);
                base.export_element (obj, "PhaseCode", "ACN", base.from_string, fields);
                base.export_element (obj, "PhaseCode", "BCN", base.from_string, fields);
                base.export_element (obj, "PhaseCode", "AB", base.from_string, fields);
                base.export_element (obj, "PhaseCode", "AC", base.from_string, fields);
                base.export_element (obj, "PhaseCode", "BC", base.from_string, fields);
                base.export_element (obj, "PhaseCode", "AN", base.from_string, fields);
                base.export_element (obj, "PhaseCode", "BN", base.from_string, fields);
                base.export_element (obj, "PhaseCode", "CN", base.from_string, fields);
                base.export_element (obj, "PhaseCode", "A", base.from_string, fields);
                base.export_element (obj, "PhaseCode", "B", base.from_string, fields);
                base.export_element (obj, "PhaseCode", "C", base.from_string, fields);
                base.export_element (obj, "PhaseCode", "N", base.from_string, fields);
                base.export_element (obj, "PhaseCode", "s1N", base.from_string, fields);
                base.export_element (obj, "PhaseCode", "s2N", base.from_string, fields);
                base.export_element (obj, "PhaseCode", "s12N", base.from_string, fields);
                base.export_element (obj, "PhaseCode", "s1", base.from_string, fields);
                base.export_element (obj, "PhaseCode", "s2", base.from_string, fields);
                base.export_element (obj, "PhaseCode", "s12", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#PhaseCode_collapse" aria-expanded="true" aria-controls="PhaseCode_collapse">PhaseCode</a>
<div id="PhaseCode_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#ABCN}}<div><b>ABCN</b>: {{ABCN}}</div>{{/ABCN}}
{{#ABC}}<div><b>ABC</b>: {{ABC}}</div>{{/ABC}}
{{#ABN}}<div><b>ABN</b>: {{ABN}}</div>{{/ABN}}
{{#ACN}}<div><b>ACN</b>: {{ACN}}</div>{{/ACN}}
{{#BCN}}<div><b>BCN</b>: {{BCN}}</div>{{/BCN}}
{{#AB}}<div><b>AB</b>: {{AB}}</div>{{/AB}}
{{#AC}}<div><b>AC</b>: {{AC}}</div>{{/AC}}
{{#BC}}<div><b>BC</b>: {{BC}}</div>{{/BC}}
{{#AN}}<div><b>AN</b>: {{AN}}</div>{{/AN}}
{{#BN}}<div><b>BN</b>: {{BN}}</div>{{/BN}}
{{#CN}}<div><b>CN</b>: {{CN}}</div>{{/CN}}
{{#A}}<div><b>A</b>: {{A}}</div>{{/A}}
{{#B}}<div><b>B</b>: {{B}}</div>{{/B}}
{{#C}}<div><b>C</b>: {{C}}</div>{{/C}}
{{#N}}<div><b>N</b>: {{N}}</div>{{/N}}
{{#s1N}}<div><b>s1N</b>: {{s1N}}</div>{{/s1N}}
{{#s2N}}<div><b>s2N</b>: {{s2N}}</div>{{/s2N}}
{{#s12N}}<div><b>s12N</b>: {{s12N}}</div>{{/s12N}}
{{#s1}}<div><b>s1</b>: {{s1}}</div>{{/s1}}
{{#s2}}<div><b>s2</b>: {{s2}}</div>{{/s2}}
{{#s12}}<div><b>s12</b>: {{s12}}</div>{{/s12}}
</div>
`
                );
           }        }

        /**
         * Time point for a schedule where the time between the consecutive points is constant.
         *
         */
        class RegularTimePoint extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RegularTimePoint;
                if (null == bucket)
                   cim_data.RegularTimePoint = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RegularTimePoint[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "RegularTimePoint";
                base.parse_element (/<cim:RegularTimePoint.sequenceNumber>([\s\S]*?)<\/cim:RegularTimePoint.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
                base.parse_element (/<cim:RegularTimePoint.value1>([\s\S]*?)<\/cim:RegularTimePoint.value1>/g, obj, "value1", base.to_float, sub, context);
                base.parse_element (/<cim:RegularTimePoint.value2>([\s\S]*?)<\/cim:RegularTimePoint.value2>/g, obj, "value2", base.to_float, sub, context);
                base.parse_attribute (/<cim:RegularTimePoint.IntervalSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "IntervalSchedule", sub, context);

                var bucket = context.parsed.RegularTimePoint;
                if (null == bucket)
                   context.parsed.RegularTimePoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "RegularTimePoint", "sequenceNumber", base.from_string, fields);
                base.export_element (obj, "RegularTimePoint", "value1", base.from_float, fields);
                base.export_element (obj, "RegularTimePoint", "value2", base.from_float, fields);
                base.export_attribute (obj, "RegularTimePoint", "IntervalSchedule", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#RegularTimePoint_collapse" aria-expanded="true" aria-controls="RegularTimePoint_collapse">RegularTimePoint</a>
<div id="RegularTimePoint_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
{{#value1}}<div><b>value1</b>: {{value1}}</div>{{/value1}}
{{#value2}}<div><b>value2</b>: {{value2}}</div>{{/value2}}
{{#IntervalSchedule}}<div><b>IntervalSchedule</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{IntervalSchedule}}&quot;);})'>{{IntervalSchedule}}</a></div>{{/IntervalSchedule}}
</div>
`
                );
           }        }

        /**
         * The Name class provides the means to define any number of human readable  names for an object.
         *
         * A name is <b>not</b> to be used for defining inter-object relationships. For inter-object relationships instead use the object identification 'mRID'.
         *
         */
        class Name extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Name;
                if (null == bucket)
                   cim_data.Name = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Name[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Name";
                base.parse_element (/<cim:Name.name>([\s\S]*?)<\/cim:Name.name>/g, obj, "name", base.to_string, sub, context);
                base.parse_attribute (/<cim:Name.NameType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "NameType", sub, context);
                base.parse_attribute (/<cim:Name.IdentifiedObject\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "IdentifiedObject", sub, context);

                var bucket = context.parsed.Name;
                if (null == bucket)
                   context.parsed.Name = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Name", "name", base.from_string, fields);
                base.export_attribute (obj, "Name", "NameType", fields);
                base.export_attribute (obj, "Name", "IdentifiedObject", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Name_collapse" aria-expanded="true" aria-controls="Name_collapse">Name</a>
<div id="Name_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#name}}<div><b>name</b>: {{name}}</div>{{/name}}
{{#NameType}}<div><b>NameType</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{NameType}}&quot;);})'>{{NameType}}</a></div>{{/NameType}}
{{#IdentifiedObject}}<div><b>IdentifiedObject</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{IdentifiedObject}}&quot;);})'>{{IdentifiedObject}}</a></div>{{/IdentifiedObject}}
</div>
`
                );
           }        }

        /**
         * This is a root class to provide common identification for all classes needing identification and naming attributes.
         *
         */
        class IdentifiedObject extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.IdentifiedObject;
                if (null == bucket)
                   cim_data.IdentifiedObject = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.IdentifiedObject[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "IdentifiedObject";
                base.parse_element (/<cim:IdentifiedObject.aliasName>([\s\S]*?)<\/cim:IdentifiedObject.aliasName>/g, obj, "aliasName", base.to_string, sub, context);
                base.parse_element (/<cim:IdentifiedObject.mRID>([\s\S]*?)<\/cim:IdentifiedObject.mRID>/g, obj, "mRID", base.to_string, sub, context);
                base.parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, obj, "name", base.to_string, sub, context);
                base.parse_element (/<cim:IdentifiedObject.description>([\s\S]*?)<\/cim:IdentifiedObject.description>/g, obj, "description", base.to_string, sub, context);
                if (null == obj.mRID)
                    obj.mRID = obj.id;
                if ((null != obj.mRID) && (obj.id != obj.mRID))
                {
                    if ("undefined" != typeof (console))
                        console.log ("***Warning*** rdf:ID != mRID [" + obj.id + " != " + obj.mRID + "]");
                    else
                        print ("***Warning*** rdf:ID != mRID [" + obj.id + " != " + obj.mRID + "]");
                    obj.id = obj.mRID;
                }

                var bucket = context.parsed.IdentifiedObject;
                if (null == bucket)
                   context.parsed.IdentifiedObject = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "IdentifiedObject", "aliasName", base.from_string, fields);
                base.export_element (obj, "IdentifiedObject", "name", base.from_string, fields);
                base.export_element (obj, "IdentifiedObject", "description", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#IdentifiedObject_collapse" aria-expanded="true" aria-controls="IdentifiedObject_collapse">IdentifiedObject</a>
<div id="IdentifiedObject_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#aliasName}}<div><b>aliasName</b>: {{aliasName}}</div>{{/aliasName}}
{{#mRID}}<div><b>mRID</b>: {{mRID}}</div>{{/mRID}}
{{#name}}<div><b>name</b>: {{name}}</div>{{/name}}
{{#description}}<div><b>description</b>: {{description}}</div>{{/description}}
</div>
`
                );
           }        }

        /**
         * Multi-purpose data points for defining a curve.
         *
         * The use of this generic class is discouraged if a more specific class  can be used to specify the x and y axis values along with their specific data types.
         *
         */
        class CurveData extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CurveData;
                if (null == bucket)
                   cim_data.CurveData = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CurveData[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CurveData";
                base.parse_element (/<cim:CurveData.xvalue>([\s\S]*?)<\/cim:CurveData.xvalue>/g, obj, "xvalue", base.to_float, sub, context);
                base.parse_element (/<cim:CurveData.y1value>([\s\S]*?)<\/cim:CurveData.y1value>/g, obj, "y1value", base.to_float, sub, context);
                base.parse_element (/<cim:CurveData.y2value>([\s\S]*?)<\/cim:CurveData.y2value>/g, obj, "y2value", base.to_float, sub, context);
                base.parse_element (/<cim:CurveData.y3value>([\s\S]*?)<\/cim:CurveData.y3value>/g, obj, "y3value", base.to_float, sub, context);
                base.parse_attribute (/<cim:CurveData.Curve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Curve", sub, context);

                var bucket = context.parsed.CurveData;
                if (null == bucket)
                   context.parsed.CurveData = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "CurveData", "xvalue", base.from_float, fields);
                base.export_element (obj, "CurveData", "y1value", base.from_float, fields);
                base.export_element (obj, "CurveData", "y2value", base.from_float, fields);
                base.export_element (obj, "CurveData", "y3value", base.from_float, fields);
                base.export_attribute (obj, "CurveData", "Curve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#CurveData_collapse" aria-expanded="true" aria-controls="CurveData_collapse">CurveData</a>
<div id="CurveData_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#xvalue}}<div><b>xvalue</b>: {{xvalue}}</div>{{/xvalue}}
{{#y1value}}<div><b>y1value</b>: {{y1value}}</div>{{/y1value}}
{{#y2value}}<div><b>y2value</b>: {{y2value}}</div>{{/y2value}}
{{#y3value}}<div><b>y3value</b>: {{y3value}}</div>{{/y3value}}
{{#Curve}}<div><b>Curve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Curve}}&quot;);})'>{{Curve}}</a></div>{{/Curve}}
</div>
`
                );
           }        }

        /**
         * Authority responsible for creation and management of names of a given type; typically an organization or an enterprise system.
         *
         */
        class NameTypeAuthority extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.NameTypeAuthority;
                if (null == bucket)
                   cim_data.NameTypeAuthority = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.NameTypeAuthority[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "NameTypeAuthority";
                base.parse_element (/<cim:NameTypeAuthority.description>([\s\S]*?)<\/cim:NameTypeAuthority.description>/g, obj, "description", base.to_string, sub, context);
                base.parse_element (/<cim:NameTypeAuthority.name>([\s\S]*?)<\/cim:NameTypeAuthority.name>/g, obj, "name", base.to_string, sub, context);

                var bucket = context.parsed.NameTypeAuthority;
                if (null == bucket)
                   context.parsed.NameTypeAuthority = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "NameTypeAuthority", "description", base.from_string, fields);
                base.export_element (obj, "NameTypeAuthority", "name", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#NameTypeAuthority_collapse" aria-expanded="true" aria-controls="NameTypeAuthority_collapse">NameTypeAuthority</a>
<div id="NameTypeAuthority_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#description}}<div><b>description</b>: {{description}}</div>{{/description}}
{{#name}}<div><b>name</b>: {{name}}</div>{{/name}}
</div>
`
                );
           }        }

        /**
         * Switching arrangement for bay.
         *
         */
        class BreakerConfiguration extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BreakerConfiguration;
                if (null == bucket)
                   cim_data.BreakerConfiguration = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BreakerConfiguration[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "BreakerConfiguration";
                base.parse_element (/<cim:BreakerConfiguration.singleBreaker>([\s\S]*?)<\/cim:BreakerConfiguration.singleBreaker>/g, obj, "singleBreaker", base.to_string, sub, context);
                base.parse_element (/<cim:BreakerConfiguration.breakerAndAHalf>([\s\S]*?)<\/cim:BreakerConfiguration.breakerAndAHalf>/g, obj, "breakerAndAHalf", base.to_string, sub, context);
                base.parse_element (/<cim:BreakerConfiguration.doubleBreaker>([\s\S]*?)<\/cim:BreakerConfiguration.doubleBreaker>/g, obj, "doubleBreaker", base.to_string, sub, context);
                base.parse_element (/<cim:BreakerConfiguration.noBreaker>([\s\S]*?)<\/cim:BreakerConfiguration.noBreaker>/g, obj, "noBreaker", base.to_string, sub, context);

                var bucket = context.parsed.BreakerConfiguration;
                if (null == bucket)
                   context.parsed.BreakerConfiguration = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "BreakerConfiguration", "singleBreaker", base.from_string, fields);
                base.export_element (obj, "BreakerConfiguration", "breakerAndAHalf", base.from_string, fields);
                base.export_element (obj, "BreakerConfiguration", "doubleBreaker", base.from_string, fields);
                base.export_element (obj, "BreakerConfiguration", "noBreaker", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#BreakerConfiguration_collapse" aria-expanded="true" aria-controls="BreakerConfiguration_collapse">BreakerConfiguration</a>
<div id="BreakerConfiguration_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#singleBreaker}}<div><b>singleBreaker</b>: {{singleBreaker}}</div>{{/singleBreaker}}
{{#breakerAndAHalf}}<div><b>breakerAndAHalf</b>: {{breakerAndAHalf}}</div>{{/breakerAndAHalf}}
{{#doubleBreaker}}<div><b>doubleBreaker</b>: {{doubleBreaker}}</div>{{/doubleBreaker}}
{{#noBreaker}}<div><b>noBreaker</b>: {{noBreaker}}</div>{{/noBreaker}}
</div>
`
                );
           }        }

        /**
         * Specifies the operations contract relationship between a power system resource and a contract participant.
         *
         */
        class OperatingShare extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OperatingShare;
                if (null == bucket)
                   cim_data.OperatingShare = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OperatingShare[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "OperatingShare";
                base.parse_element (/<cim:OperatingShare.percentage>([\s\S]*?)<\/cim:OperatingShare.percentage>/g, obj, "percentage", base.to_string, sub, context);
                base.parse_attribute (/<cim:OperatingShare.OperatingParticipant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OperatingParticipant", sub, context);
                base.parse_attribute (/<cim:OperatingShare.PowerSystemResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemResource", sub, context);

                var bucket = context.parsed.OperatingShare;
                if (null == bucket)
                   context.parsed.OperatingShare = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "OperatingShare", "percentage", base.from_string, fields);
                base.export_attribute (obj, "OperatingShare", "OperatingParticipant", fields);
                base.export_attribute (obj, "OperatingShare", "PowerSystemResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#OperatingShare_collapse" aria-expanded="true" aria-controls="OperatingShare_collapse">OperatingShare</a>
<div id="OperatingShare_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#percentage}}<div><b>percentage</b>: {{percentage}}</div>{{/percentage}}
{{#OperatingParticipant}}<div><b>OperatingParticipant</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{OperatingParticipant}}&quot;);})'>{{OperatingParticipant}}</a></div>{{/OperatingParticipant}}
{{#PowerSystemResource}}<div><b>PowerSystemResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PowerSystemResource}}&quot;);})'>{{PowerSystemResource}}</a></div>{{/PowerSystemResource}}
</div>
`
                );
           }        }

        /**
         * Style or shape of curve.
         *
         */
        class CurveStyle extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CurveStyle;
                if (null == bucket)
                   cim_data.CurveStyle = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CurveStyle[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CurveStyle";
                base.parse_element (/<cim:CurveStyle.constantYValue>([\s\S]*?)<\/cim:CurveStyle.constantYValue>/g, obj, "constantYValue", base.to_string, sub, context);
                base.parse_element (/<cim:CurveStyle.straightLineYValues>([\s\S]*?)<\/cim:CurveStyle.straightLineYValues>/g, obj, "straightLineYValues", base.to_string, sub, context);

                var bucket = context.parsed.CurveStyle;
                if (null == bucket)
                   context.parsed.CurveStyle = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "CurveStyle", "constantYValue", base.from_string, fields);
                base.export_element (obj, "CurveStyle", "straightLineYValues", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#CurveStyle_collapse" aria-expanded="true" aria-controls="CurveStyle_collapse">CurveStyle</a>
<div id="CurveStyle_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#constantYValue}}<div><b>constantYValue</b>: {{constantYValue}}</div>{{/constantYValue}}
{{#straightLineYValues}}<div><b>straightLineYValues</b>: {{straightLineYValues}}</div>{{/straightLineYValues}}
</div>
`
                );
           }        }

        /**
         * Busbar layout for bay.
         *
         */
        class BusbarConfiguration extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BusbarConfiguration;
                if (null == bucket)
                   cim_data.BusbarConfiguration = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BusbarConfiguration[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "BusbarConfiguration";
                base.parse_element (/<cim:BusbarConfiguration.singleBus>([\s\S]*?)<\/cim:BusbarConfiguration.singleBus>/g, obj, "singleBus", base.to_string, sub, context);
                base.parse_element (/<cim:BusbarConfiguration.doubleBus>([\s\S]*?)<\/cim:BusbarConfiguration.doubleBus>/g, obj, "doubleBus", base.to_string, sub, context);
                base.parse_element (/<cim:BusbarConfiguration.mainWithTransfer>([\s\S]*?)<\/cim:BusbarConfiguration.mainWithTransfer>/g, obj, "mainWithTransfer", base.to_string, sub, context);
                base.parse_element (/<cim:BusbarConfiguration.ringBus>([\s\S]*?)<\/cim:BusbarConfiguration.ringBus>/g, obj, "ringBus", base.to_string, sub, context);

                var bucket = context.parsed.BusbarConfiguration;
                if (null == bucket)
                   context.parsed.BusbarConfiguration = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "BusbarConfiguration", "singleBus", base.from_string, fields);
                base.export_element (obj, "BusbarConfiguration", "doubleBus", base.from_string, fields);
                base.export_element (obj, "BusbarConfiguration", "mainWithTransfer", base.from_string, fields);
                base.export_element (obj, "BusbarConfiguration", "ringBus", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#BusbarConfiguration_collapse" aria-expanded="true" aria-controls="BusbarConfiguration_collapse">BusbarConfiguration</a>
<div id="BusbarConfiguration_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#singleBus}}<div><b>singleBus</b>: {{singleBus}}</div>{{/singleBus}}
{{#doubleBus}}<div><b>doubleBus</b>: {{doubleBus}}</div>{{/doubleBus}}
{{#mainWithTransfer}}<div><b>mainWithTransfer</b>: {{mainWithTransfer}}</div>{{/mainWithTransfer}}
{{#ringBus}}<div><b>ringBus</b>: {{ringBus}}</div>{{/ringBus}}
</div>
`
                );
           }        }

        /**
         * A multi-purpose curve or functional relationship between an independent variable (X-axis) and dependent (Y-axis) variables.
         *
         */
        class Curve extends IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Curve;
                if (null == bucket)
                   cim_data.Curve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Curve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Curve";
                base.parse_element (/<cim:Curve.curveStyle>([\s\S]*?)<\/cim:Curve.curveStyle>/g, obj, "curveStyle", base.to_string, sub, context);
                base.parse_element (/<cim:Curve.xMultiplier>([\s\S]*?)<\/cim:Curve.xMultiplier>/g, obj, "xMultiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Curve.xUnit>([\s\S]*?)<\/cim:Curve.xUnit>/g, obj, "xUnit", base.to_string, sub, context);
                base.parse_element (/<cim:Curve.y1Multiplier>([\s\S]*?)<\/cim:Curve.y1Multiplier>/g, obj, "y1Multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Curve.y1Unit>([\s\S]*?)<\/cim:Curve.y1Unit>/g, obj, "y1Unit", base.to_string, sub, context);
                base.parse_element (/<cim:Curve.y2Multiplier>([\s\S]*?)<\/cim:Curve.y2Multiplier>/g, obj, "y2Multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Curve.y2Unit>([\s\S]*?)<\/cim:Curve.y2Unit>/g, obj, "y2Unit", base.to_string, sub, context);
                base.parse_element (/<cim:Curve.y3Multiplier>([\s\S]*?)<\/cim:Curve.y3Multiplier>/g, obj, "y3Multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Curve.y3Unit>([\s\S]*?)<\/cim:Curve.y3Unit>/g, obj, "y3Unit", base.to_string, sub, context);

                var bucket = context.parsed.Curve;
                if (null == bucket)
                   context.parsed.Curve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Curve", "curveStyle", base.from_string, fields);
                base.export_element (obj, "Curve", "xMultiplier", base.from_string, fields);
                base.export_element (obj, "Curve", "xUnit", base.from_string, fields);
                base.export_element (obj, "Curve", "y1Multiplier", base.from_string, fields);
                base.export_element (obj, "Curve", "y1Unit", base.from_string, fields);
                base.export_element (obj, "Curve", "y2Multiplier", base.from_string, fields);
                base.export_element (obj, "Curve", "y2Unit", base.from_string, fields);
                base.export_element (obj, "Curve", "y3Multiplier", base.from_string, fields);
                base.export_element (obj, "Curve", "y3Unit", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Curve_collapse" aria-expanded="true" aria-controls="Curve_collapse">Curve</a>
<div id="Curve_collapse" class="collapse in" style="margin-left: 10px;">
`
      + IdentifiedObject.prototype.template.call (this) +
`
{{#curveStyle}}<div><b>curveStyle</b>: {{curveStyle}}</div>{{/curveStyle}}
{{#xMultiplier}}<div><b>xMultiplier</b>: {{xMultiplier}}</div>{{/xMultiplier}}
{{#xUnit}}<div><b>xUnit</b>: {{xUnit}}</div>{{/xUnit}}
{{#y1Multiplier}}<div><b>y1Multiplier</b>: {{y1Multiplier}}</div>{{/y1Multiplier}}
{{#y1Unit}}<div><b>y1Unit</b>: {{y1Unit}}</div>{{/y1Unit}}
{{#y2Multiplier}}<div><b>y2Multiplier</b>: {{y2Multiplier}}</div>{{/y2Multiplier}}
{{#y2Unit}}<div><b>y2Unit</b>: {{y2Unit}}</div>{{/y2Unit}}
{{#y3Multiplier}}<div><b>y3Multiplier</b>: {{y3Multiplier}}</div>{{/y3Multiplier}}
{{#y3Unit}}<div><b>y3Unit</b>: {{y3Unit}}</div>{{/y3Unit}}
</div>
`
                );
           }        }

        /**
         * Classifying instances of the same class, e.g. overhead and underground ACLineSegments.
         *
         * This classification mechanism is intended to provide flexibility outside the scope of this standard, i.e. provide customisation that is non standard.
         *
         */
        class PSRType extends IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PSRType;
                if (null == bucket)
                   cim_data.PSRType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PSRType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "PSRType";

                var bucket = context.parsed.PSRType;
                if (null == bucket)
                   context.parsed.PSRType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = IdentifiedObject.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#PSRType_collapse" aria-expanded="true" aria-controls="PSRType_collapse">PSRType</a>
<div id="PSRType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + IdentifiedObject.prototype.template.call (this) +
`
</div>
`
                );
           }        }

        /**
         * Defines a system base voltage which is referenced.
         *
         */
        class BaseVoltage extends IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BaseVoltage;
                if (null == bucket)
                   cim_data.BaseVoltage = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BaseVoltage[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "BaseVoltage";
                base.parse_element (/<cim:BaseVoltage.nominalVoltage>([\s\S]*?)<\/cim:BaseVoltage.nominalVoltage>/g, obj, "nominalVoltage", base.to_string, sub, context);

                var bucket = context.parsed.BaseVoltage;
                if (null == bucket)
                   context.parsed.BaseVoltage = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "BaseVoltage", "nominalVoltage", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#BaseVoltage_collapse" aria-expanded="true" aria-controls="BaseVoltage_collapse">BaseVoltage</a>
<div id="BaseVoltage_collapse" class="collapse in" style="margin-left: 10px;">
`
      + IdentifiedObject.prototype.template.call (this) +
`
{{#nominalVoltage}}<div><b>nominalVoltage</b>: {{nominalVoltage}}</div>{{/nominalVoltage}}
</div>
`
                );
           }        }

        /**
         * Connectivity nodes are points where terminals of AC conducting equipment are connected together with zero impedance.
         *
         */
        class ConnectivityNode extends IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ConnectivityNode;
                if (null == bucket)
                   cim_data.ConnectivityNode = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ConnectivityNode[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ConnectivityNode";
                base.parse_attribute (/<cim:ConnectivityNode.ConnectivityNodeContainer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConnectivityNodeContainer", sub, context);
                base.parse_attribute (/<cim:ConnectivityNode.TopologicalNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TopologicalNode", sub, context);

                var bucket = context.parsed.ConnectivityNode;
                if (null == bucket)
                   context.parsed.ConnectivityNode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ConnectivityNode", "ConnectivityNodeContainer", fields);
                base.export_attribute (obj, "ConnectivityNode", "TopologicalNode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ConnectivityNode_collapse" aria-expanded="true" aria-controls="ConnectivityNode_collapse">ConnectivityNode</a>
<div id="ConnectivityNode_collapse" class="collapse in" style="margin-left: 10px;">
`
      + IdentifiedObject.prototype.template.call (this) +
`
{{#ConnectivityNodeContainer}}<div><b>ConnectivityNodeContainer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ConnectivityNodeContainer}}&quot;);})'>{{ConnectivityNodeContainer}}</a></div>{{/ConnectivityNodeContainer}}
{{#TopologicalNode}}<div><b>TopologicalNode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TopologicalNode}}&quot;);})'>{{TopologicalNode}}</a></div>{{/TopologicalNode}}
</div>
`
                );
           }        }

        /**
         * A geographical region of a power system network model.
         *
         */
        class GeographicalRegion extends IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GeographicalRegion;
                if (null == bucket)
                   cim_data.GeographicalRegion = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GeographicalRegion[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "GeographicalRegion";

                var bucket = context.parsed.GeographicalRegion;
                if (null == bucket)
                   context.parsed.GeographicalRegion = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = IdentifiedObject.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GeographicalRegion_collapse" aria-expanded="true" aria-controls="GeographicalRegion_collapse">GeographicalRegion</a>
<div id="GeographicalRegion_collapse" class="collapse in" style="margin-left: 10px;">
`
      + IdentifiedObject.prototype.template.call (this) +
`
</div>
`
                );
           }        }

        /**
         * Schedule of values at points in time.
         *
         */
        class BasicIntervalSchedule extends IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BasicIntervalSchedule;
                if (null == bucket)
                   cim_data.BasicIntervalSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BasicIntervalSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "BasicIntervalSchedule";
                base.parse_element (/<cim:BasicIntervalSchedule.startTime>([\s\S]*?)<\/cim:BasicIntervalSchedule.startTime>/g, obj, "startTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:BasicIntervalSchedule.value1Multiplier>([\s\S]*?)<\/cim:BasicIntervalSchedule.value1Multiplier>/g, obj, "value1Multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:BasicIntervalSchedule.value1Unit>([\s\S]*?)<\/cim:BasicIntervalSchedule.value1Unit>/g, obj, "value1Unit", base.to_string, sub, context);
                base.parse_element (/<cim:BasicIntervalSchedule.value2Multiplier>([\s\S]*?)<\/cim:BasicIntervalSchedule.value2Multiplier>/g, obj, "value2Multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:BasicIntervalSchedule.value2Unit>([\s\S]*?)<\/cim:BasicIntervalSchedule.value2Unit>/g, obj, "value2Unit", base.to_string, sub, context);

                var bucket = context.parsed.BasicIntervalSchedule;
                if (null == bucket)
                   context.parsed.BasicIntervalSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "BasicIntervalSchedule", "startTime", base.from_datetime, fields);
                base.export_element (obj, "BasicIntervalSchedule", "value1Multiplier", base.from_string, fields);
                base.export_element (obj, "BasicIntervalSchedule", "value1Unit", base.from_string, fields);
                base.export_element (obj, "BasicIntervalSchedule", "value2Multiplier", base.from_string, fields);
                base.export_element (obj, "BasicIntervalSchedule", "value2Unit", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#BasicIntervalSchedule_collapse" aria-expanded="true" aria-controls="BasicIntervalSchedule_collapse">BasicIntervalSchedule</a>
<div id="BasicIntervalSchedule_collapse" class="collapse in" style="margin-left: 10px;">
`
      + IdentifiedObject.prototype.template.call (this) +
`
{{#startTime}}<div><b>startTime</b>: {{startTime}}</div>{{/startTime}}
{{#value1Multiplier}}<div><b>value1Multiplier</b>: {{value1Multiplier}}</div>{{/value1Multiplier}}
{{#value1Unit}}<div><b>value1Unit</b>: {{value1Unit}}</div>{{/value1Unit}}
{{#value2Multiplier}}<div><b>value2Multiplier</b>: {{value2Multiplier}}</div>{{/value2Multiplier}}
{{#value2Unit}}<div><b>value2Unit</b>: {{value2Unit}}</div>{{/value2Unit}}
</div>
`
                );
           }        }

        /**
         * An electrical connection point (AC or DC) to a piece of conducting equipment.
         *
         * Terminals are connected at physical connection points called connectivity nodes.
         *
         */
        class ACDCTerminal extends IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ACDCTerminal;
                if (null == bucket)
                   cim_data.ACDCTerminal = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ACDCTerminal[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ACDCTerminal";
                base.parse_element (/<cim:ACDCTerminal.connected>([\s\S]*?)<\/cim:ACDCTerminal.connected>/g, obj, "connected", base.to_boolean, sub, context);
                base.parse_element (/<cim:ACDCTerminal.sequenceNumber>([\s\S]*?)<\/cim:ACDCTerminal.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
                base.parse_attribute (/<cim:ACDCTerminal.BusNameMarker\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BusNameMarker", sub, context);

                var bucket = context.parsed.ACDCTerminal;
                if (null == bucket)
                   context.parsed.ACDCTerminal = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ACDCTerminal", "connected", base.from_boolean, fields);
                base.export_element (obj, "ACDCTerminal", "sequenceNumber", base.from_string, fields);
                base.export_attribute (obj, "ACDCTerminal", "BusNameMarker", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ACDCTerminal_collapse" aria-expanded="true" aria-controls="ACDCTerminal_collapse">ACDCTerminal</a>
<div id="ACDCTerminal_collapse" class="collapse in" style="margin-left: 10px;">
`
      + IdentifiedObject.prototype.template.call (this) +
`
{{#connected}}<div><b>connected</b>: {{connected}}</div>{{/connected}}
{{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
{{#BusNameMarker}}<div><b>BusNameMarker</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{BusNameMarker}}&quot;);})'>{{BusNameMarker}}</a></div>{{/BusNameMarker}}
</div>
`
                );
           }        }

        /**
         * An operator of multiple power system resource objects.
         *
         * Note multple operating participants may operate the same power system resource object.   This can be used for modeling jointly owned units where each owner operates as a contractual share.
         *
         */
        class OperatingParticipant extends IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OperatingParticipant;
                if (null == bucket)
                   cim_data.OperatingParticipant = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OperatingParticipant[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "OperatingParticipant";

                var bucket = context.parsed.OperatingParticipant;
                if (null == bucket)
                   context.parsed.OperatingParticipant = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = IdentifiedObject.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#OperatingParticipant_collapse" aria-expanded="true" aria-controls="OperatingParticipant_collapse">OperatingParticipant</a>
<div id="OperatingParticipant_collapse" class="collapse in" style="margin-left: 10px;">
`
      + IdentifiedObject.prototype.template.call (this) +
`
</div>
`
                );
           }        }

        /**
         * The BasePower class defines the base power used in the per unit calculations.
         *
         */
        class BasePower extends IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BasePower;
                if (null == bucket)
                   cim_data.BasePower = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BasePower[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "BasePower";
                base.parse_element (/<cim:BasePower.basePower>([\s\S]*?)<\/cim:BasePower.basePower>/g, obj, "basePower", base.to_string, sub, context);

                var bucket = context.parsed.BasePower;
                if (null == bucket)
                   context.parsed.BasePower = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "BasePower", "basePower", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#BasePower_collapse" aria-expanded="true" aria-controls="BasePower_collapse">BasePower</a>
<div id="BasePower_collapse" class="collapse in" style="margin-left: 10px;">
`
      + IdentifiedObject.prototype.template.call (this) +
`
{{#basePower}}<div><b>basePower</b>: {{basePower}}</div>{{/basePower}}
</div>
`
                );
           }        }

        /**
         * A reporting super group, groups reporting groups for a higher level report.
         *
         */
        class ReportingSuperGroup extends IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ReportingSuperGroup;
                if (null == bucket)
                   cim_data.ReportingSuperGroup = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ReportingSuperGroup[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ReportingSuperGroup";

                var bucket = context.parsed.ReportingSuperGroup;
                if (null == bucket)
                   context.parsed.ReportingSuperGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = IdentifiedObject.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ReportingSuperGroup_collapse" aria-expanded="true" aria-controls="ReportingSuperGroup_collapse">ReportingSuperGroup</a>
<div id="ReportingSuperGroup_collapse" class="collapse in" style="margin-left: 10px;">
`
      + IdentifiedObject.prototype.template.call (this) +
`
</div>
`
                );
           }        }

        /**
         * An AC electrical connection point to a piece of conducting equipment.
         *
         * Terminals are connected at physical connection points called connectivity nodes.
         *
         */
        class Terminal extends ACDCTerminal
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Terminal;
                if (null == bucket)
                   cim_data.Terminal = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Terminal[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ACDCTerminal.prototype.parse.call (this, context, sub);
                obj.cls = "Terminal";
                base.parse_element (/<cim:Terminal.phases>([\s\S]*?)<\/cim:Terminal.phases>/g, obj, "phases", base.to_string, sub, context);
                base.parse_attribute (/<cim:Terminal.TopologicalNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TopologicalNode", sub, context);
                base.parse_attribute (/<cim:Terminal.ConductingEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConductingEquipment", sub, context);
                base.parse_attribute (/<cim:Terminal.SvPowerFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SvPowerFlow", sub, context);
                base.parse_attribute (/<cim:Terminal.Bushing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Bushing", sub, context);
                base.parse_attribute (/<cim:Terminal.ConnectivityNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConnectivityNode", sub, context);

                var bucket = context.parsed.Terminal;
                if (null == bucket)
                   context.parsed.Terminal = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ACDCTerminal.prototype.export.call (this, obj, false);

                base.export_element (obj, "Terminal", "phases", base.from_string, fields);
                base.export_attribute (obj, "Terminal", "TopologicalNode", fields);
                base.export_attribute (obj, "Terminal", "ConductingEquipment", fields);
                base.export_attribute (obj, "Terminal", "SvPowerFlow", fields);
                base.export_attribute (obj, "Terminal", "Bushing", fields);
                base.export_attribute (obj, "Terminal", "ConnectivityNode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Terminal_collapse" aria-expanded="true" aria-controls="Terminal_collapse">Terminal</a>
<div id="Terminal_collapse" class="collapse in" style="margin-left: 10px;">
`
      + ACDCTerminal.prototype.template.call (this) +
`
{{#phases}}<div><b>phases</b>: {{phases}}</div>{{/phases}}
{{#TopologicalNode}}<div><b>TopologicalNode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TopologicalNode}}&quot;);})'>{{TopologicalNode}}</a></div>{{/TopologicalNode}}
{{#ConductingEquipment}}<div><b>ConductingEquipment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ConductingEquipment}}&quot;);})'>{{ConductingEquipment}}</a></div>{{/ConductingEquipment}}
{{#SvPowerFlow}}<div><b>SvPowerFlow</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SvPowerFlow}}&quot;);})'>{{SvPowerFlow}}</a></div>{{/SvPowerFlow}}
{{#Bushing}}<div><b>Bushing</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Bushing}}&quot;);})'>{{Bushing}}</a></div>{{/Bushing}}
{{#ConnectivityNode}}<div><b>ConnectivityNode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ConnectivityNode}}&quot;);})'>{{ConnectivityNode}}</a></div>{{/ConnectivityNode}}
</div>
`
                );
           }        }

        /**
         * A subset of a geographical region of a power system network model.
         *
         */
        class SubGeographicalRegion extends IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SubGeographicalRegion;
                if (null == bucket)
                   cim_data.SubGeographicalRegion = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SubGeographicalRegion[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "SubGeographicalRegion";
                base.parse_attribute (/<cim:SubGeographicalRegion.Region\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Region", sub, context);

                var bucket = context.parsed.SubGeographicalRegion;
                if (null == bucket)
                   context.parsed.SubGeographicalRegion = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "SubGeographicalRegion", "Region", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#SubGeographicalRegion_collapse" aria-expanded="true" aria-controls="SubGeographicalRegion_collapse">SubGeographicalRegion</a>
<div id="SubGeographicalRegion_collapse" class="collapse in" style="margin-left: 10px;">
`
      + IdentifiedObject.prototype.template.call (this) +
`
{{#Region}}<div><b>Region</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Region}}&quot;);})'>{{Region}}</a></div>{{/Region}}
</div>
`
                );
           }        }

        /**
         * A power system resource can be an item of equipment such as a switch, an equipment container containing many individual items of equipment such as a substation, or an organisational entity such as sub-control area.
         *
         * Power system resources can have measurements associated.
         *
         */
        class PowerSystemResource extends IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PowerSystemResource;
                if (null == bucket)
                   cim_data.PowerSystemResource = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PowerSystemResource[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "PowerSystemResource";
                base.parse_attribute (/<cim:PowerSystemResource.AssetDatasheet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetDatasheet", sub, context);
                base.parse_attribute (/<cim:PowerSystemResource.Location\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Location", sub, context);
                base.parse_attribute (/<cim:PowerSystemResource.PSRType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PSRType", sub, context);

                var bucket = context.parsed.PowerSystemResource;
                if (null == bucket)
                   context.parsed.PowerSystemResource = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "PowerSystemResource", "AssetDatasheet", fields);
                base.export_attribute (obj, "PowerSystemResource", "Location", fields);
                base.export_attribute (obj, "PowerSystemResource", "PSRType", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#PowerSystemResource_collapse" aria-expanded="true" aria-controls="PowerSystemResource_collapse">PowerSystemResource</a>
<div id="PowerSystemResource_collapse" class="collapse in" style="margin-left: 10px;">
`
      + IdentifiedObject.prototype.template.call (this) +
`
{{#AssetDatasheet}}<div><b>AssetDatasheet</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AssetDatasheet}}&quot;);})'>{{AssetDatasheet}}</a></div>{{/AssetDatasheet}}
{{#Location}}<div><b>Location</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Location}}&quot;);})'>{{Location}}</a></div>{{/Location}}
{{#PSRType}}<div><b>PSRType</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PSRType}}&quot;);})'>{{PSRType}}</a></div>{{/PSRType}}
</div>
`
                );
           }        }

        /**
         * The schedule has time points where the time between them varies.
         *
         */
        class IrregularIntervalSchedule extends BasicIntervalSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.IrregularIntervalSchedule;
                if (null == bucket)
                   cim_data.IrregularIntervalSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.IrregularIntervalSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = BasicIntervalSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "IrregularIntervalSchedule";

                var bucket = context.parsed.IrregularIntervalSchedule;
                if (null == bucket)
                   context.parsed.IrregularIntervalSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = BasicIntervalSchedule.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#IrregularIntervalSchedule_collapse" aria-expanded="true" aria-controls="IrregularIntervalSchedule_collapse">IrregularIntervalSchedule</a>
<div id="IrregularIntervalSchedule_collapse" class="collapse in" style="margin-left: 10px;">
`
      + BasicIntervalSchedule.prototype.template.call (this) +
`
</div>
`
                );
           }        }

        /**
         * The class describe a base frequency for a power system network.
         *
         * In case of multiple power networks with different frequencies, e.g. 50 or 60 Hertz each network will have it's own base frequency class. Hence it is assumed that power system objects having different base frequencies appear in separate documents where each document has a single base frequency instance.
         *
         */
        class BaseFrequency extends IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BaseFrequency;
                if (null == bucket)
                   cim_data.BaseFrequency = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BaseFrequency[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "BaseFrequency";
                base.parse_element (/<cim:BaseFrequency.frequency>([\s\S]*?)<\/cim:BaseFrequency.frequency>/g, obj, "frequency", base.to_string, sub, context);

                var bucket = context.parsed.BaseFrequency;
                if (null == bucket)
                   context.parsed.BaseFrequency = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "BaseFrequency", "frequency", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#BaseFrequency_collapse" aria-expanded="true" aria-controls="BaseFrequency_collapse">BaseFrequency</a>
<div id="BaseFrequency_collapse" class="collapse in" style="margin-left: 10px;">
`
      + IdentifiedObject.prototype.template.call (this) +
`
{{#frequency}}<div><b>frequency</b>: {{frequency}}</div>{{/frequency}}
</div>
`
                );
           }        }

        /**
         * A reporting group is used for various ad-hoc groupings used for reporting.
         *
         */
        class ReportingGroup extends IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ReportingGroup;
                if (null == bucket)
                   cim_data.ReportingGroup = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ReportingGroup[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ReportingGroup";
                base.parse_attribute (/<cim:ReportingGroup.ReportingSuperGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReportingSuperGroup", sub, context);

                var bucket = context.parsed.ReportingGroup;
                if (null == bucket)
                   context.parsed.ReportingGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ReportingGroup", "ReportingSuperGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ReportingGroup_collapse" aria-expanded="true" aria-controls="ReportingGroup_collapse">ReportingGroup</a>
<div id="ReportingGroup_collapse" class="collapse in" style="margin-left: 10px;">
`
      + IdentifiedObject.prototype.template.call (this) +
`
{{#ReportingSuperGroup}}<div><b>ReportingSuperGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ReportingSuperGroup}}&quot;);})'>{{ReportingSuperGroup}}</a></div>{{/ReportingSuperGroup}}
</div>
`
                );
           }        }

        /**
         * The schedule has time points where the time between them is constant.
         *
         */
        class RegularIntervalSchedule extends BasicIntervalSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RegularIntervalSchedule;
                if (null == bucket)
                   cim_data.RegularIntervalSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RegularIntervalSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = BasicIntervalSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "RegularIntervalSchedule";
                base.parse_element (/<cim:RegularIntervalSchedule.endTime>([\s\S]*?)<\/cim:RegularIntervalSchedule.endTime>/g, obj, "endTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:RegularIntervalSchedule.timeStep>([\s\S]*?)<\/cim:RegularIntervalSchedule.timeStep>/g, obj, "timeStep", base.to_string, sub, context);

                var bucket = context.parsed.RegularIntervalSchedule;
                if (null == bucket)
                   context.parsed.RegularIntervalSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = BasicIntervalSchedule.prototype.export.call (this, obj, false);

                base.export_element (obj, "RegularIntervalSchedule", "endTime", base.from_datetime, fields);
                base.export_element (obj, "RegularIntervalSchedule", "timeStep", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#RegularIntervalSchedule_collapse" aria-expanded="true" aria-controls="RegularIntervalSchedule_collapse">RegularIntervalSchedule</a>
<div id="RegularIntervalSchedule_collapse" class="collapse in" style="margin-left: 10px;">
`
      + BasicIntervalSchedule.prototype.template.call (this) +
`
{{#endTime}}<div><b>endTime</b>: {{endTime}}</div>{{/endTime}}
{{#timeStep}}<div><b>timeStep</b>: {{timeStep}}</div>{{/timeStep}}
</div>
`
                );
           }        }

        /**
         * A base class for all objects that may contain connectivity nodes or topological nodes.
         *
         */
        class ConnectivityNodeContainer extends PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ConnectivityNodeContainer;
                if (null == bucket)
                   cim_data.ConnectivityNodeContainer = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ConnectivityNodeContainer[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "ConnectivityNodeContainer";

                var bucket = context.parsed.ConnectivityNodeContainer;
                if (null == bucket)
                   context.parsed.ConnectivityNodeContainer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = PowerSystemResource.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ConnectivityNodeContainer_collapse" aria-expanded="true" aria-controls="ConnectivityNodeContainer_collapse">ConnectivityNodeContainer</a>
<div id="ConnectivityNodeContainer_collapse" class="collapse in" style="margin-left: 10px;">
`
      + PowerSystemResource.prototype.template.call (this) +
`
</div>
`
                );
           }        }

        /**
         * The parts of a power system that are physical devices, electronic or mechanical.
         *
         */
        class Equipment extends PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Equipment;
                if (null == bucket)
                   cim_data.Equipment = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Equipment[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "Equipment";
                base.parse_element (/<cim:Equipment.normallyInService>([\s\S]*?)<\/cim:Equipment.normallyInService>/g, obj, "normallyInService", base.to_boolean, sub, context);
                base.parse_element (/<cim:Equipment.aggregate>([\s\S]*?)<\/cim:Equipment.aggregate>/g, obj, "aggregate", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:Equipment.EquipmentContainer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EquipmentContainer", sub, context);

                var bucket = context.parsed.Equipment;
                if (null == bucket)
                   context.parsed.Equipment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "Equipment", "normallyInService", base.from_boolean, fields);
                base.export_element (obj, "Equipment", "aggregate", base.from_boolean, fields);
                base.export_attribute (obj, "Equipment", "EquipmentContainer", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Equipment_collapse" aria-expanded="true" aria-controls="Equipment_collapse">Equipment</a>
<div id="Equipment_collapse" class="collapse in" style="margin-left: 10px;">
`
      + PowerSystemResource.prototype.template.call (this) +
`
{{#normallyInService}}<div><b>normallyInService</b>: {{normallyInService}}</div>{{/normallyInService}}
{{#aggregate}}<div><b>aggregate</b>: {{aggregate}}</div>{{/aggregate}}
{{#EquipmentContainer}}<div><b>EquipmentContainer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EquipmentContainer}}&quot;);})'>{{EquipmentContainer}}</a></div>{{/EquipmentContainer}}
</div>
`
                );
           }        }

        /**
         * A modeling construct to provide a root class for containing equipment.
         *
         */
        class EquipmentContainer extends ConnectivityNodeContainer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EquipmentContainer;
                if (null == bucket)
                   cim_data.EquipmentContainer = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EquipmentContainer[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ConnectivityNodeContainer.prototype.parse.call (this, context, sub);
                obj.cls = "EquipmentContainer";

                var bucket = context.parsed.EquipmentContainer;
                if (null == bucket)
                   context.parsed.EquipmentContainer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ConnectivityNodeContainer.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#EquipmentContainer_collapse" aria-expanded="true" aria-controls="EquipmentContainer_collapse">EquipmentContainer</a>
<div id="EquipmentContainer_collapse" class="collapse in" style="margin-left: 10px;">
`
      + ConnectivityNodeContainer.prototype.template.call (this) +
`
</div>
`
                );
           }        }

        /**
         * A collection of equipment at one common system voltage forming a switchgear.
         *
         * The equipment typically consist of breakers, busbars, instrumentation, control, regulation and protection devices as well as assemblies of all these.
         *
         */
        class VoltageLevel extends EquipmentContainer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.VoltageLevel;
                if (null == bucket)
                   cim_data.VoltageLevel = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.VoltageLevel[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = EquipmentContainer.prototype.parse.call (this, context, sub);
                obj.cls = "VoltageLevel";
                base.parse_element (/<cim:VoltageLevel.highVoltageLimit>([\s\S]*?)<\/cim:VoltageLevel.highVoltageLimit>/g, obj, "highVoltageLimit", base.to_string, sub, context);
                base.parse_element (/<cim:VoltageLevel.lowVoltageLimit>([\s\S]*?)<\/cim:VoltageLevel.lowVoltageLimit>/g, obj, "lowVoltageLimit", base.to_string, sub, context);
                base.parse_attribute (/<cim:VoltageLevel.BaseVoltage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BaseVoltage", sub, context);
                base.parse_attribute (/<cim:VoltageLevel.Substation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Substation", sub, context);

                var bucket = context.parsed.VoltageLevel;
                if (null == bucket)
                   context.parsed.VoltageLevel = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = EquipmentContainer.prototype.export.call (this, obj, false);

                base.export_element (obj, "VoltageLevel", "highVoltageLimit", base.from_string, fields);
                base.export_element (obj, "VoltageLevel", "lowVoltageLimit", base.from_string, fields);
                base.export_attribute (obj, "VoltageLevel", "BaseVoltage", fields);
                base.export_attribute (obj, "VoltageLevel", "Substation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#VoltageLevel_collapse" aria-expanded="true" aria-controls="VoltageLevel_collapse">VoltageLevel</a>
<div id="VoltageLevel_collapse" class="collapse in" style="margin-left: 10px;">
`
      + EquipmentContainer.prototype.template.call (this) +
`
{{#highVoltageLimit}}<div><b>highVoltageLimit</b>: {{highVoltageLimit}}</div>{{/highVoltageLimit}}
{{#lowVoltageLimit}}<div><b>lowVoltageLimit</b>: {{lowVoltageLimit}}</div>{{/lowVoltageLimit}}
{{#BaseVoltage}}<div><b>BaseVoltage</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{BaseVoltage}}&quot;);})'>{{BaseVoltage}}</a></div>{{/BaseVoltage}}
{{#Substation}}<div><b>Substation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Substation}}&quot;);})'>{{Substation}}</a></div>{{/Substation}}
</div>
`
                );
           }        }

        /**
         * The parts of the AC power system that are designed to carry current or that are conductively connected through terminals.
         *
         */
        class ConductingEquipment extends Equipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ConductingEquipment;
                if (null == bucket)
                   cim_data.ConductingEquipment = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ConductingEquipment[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Equipment.prototype.parse.call (this, context, sub);
                obj.cls = "ConductingEquipment";
                base.parse_attribute (/<cim:ConductingEquipment.GroundingAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GroundingAction", sub, context);
                base.parse_attribute (/<cim:ConductingEquipment.BaseVoltage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BaseVoltage", sub, context);
                base.parse_attribute (/<cim:ConductingEquipment.SvStatus\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SvStatus", sub, context);
                base.parse_attribute (/<cim:ConductingEquipment.JumpingAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "JumpingAction", sub, context);

                var bucket = context.parsed.ConductingEquipment;
                if (null == bucket)
                   context.parsed.ConductingEquipment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Equipment.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ConductingEquipment", "GroundingAction", fields);
                base.export_attribute (obj, "ConductingEquipment", "BaseVoltage", fields);
                base.export_attribute (obj, "ConductingEquipment", "SvStatus", fields);
                base.export_attribute (obj, "ConductingEquipment", "JumpingAction", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ConductingEquipment_collapse" aria-expanded="true" aria-controls="ConductingEquipment_collapse">ConductingEquipment</a>
<div id="ConductingEquipment_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Equipment.prototype.template.call (this) +
`
{{#GroundingAction}}<div><b>GroundingAction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GroundingAction}}&quot;);})'>{{GroundingAction}}</a></div>{{/GroundingAction}}
{{#BaseVoltage}}<div><b>BaseVoltage</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{BaseVoltage}}&quot;);})'>{{BaseVoltage}}</a></div>{{/BaseVoltage}}
{{#SvStatus}}<div><b>SvStatus</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SvStatus}}&quot;);})'>{{SvStatus}}</a></div>{{/SvStatus}}
{{#JumpingAction}}<div><b>JumpingAction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{JumpingAction}}&quot;);})'>{{JumpingAction}}</a></div>{{/JumpingAction}}
</div>
`
                );
           }        }

        /**
         * A collection of equipment for purposes other than generation or utilization, through which electric energy in bulk is passed for the purposes of switching or modifying its characteristics.
         *
         */
        class Substation extends EquipmentContainer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Substation;
                if (null == bucket)
                   cim_data.Substation = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Substation[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = EquipmentContainer.prototype.parse.call (this, context, sub);
                obj.cls = "Substation";
                base.parse_attribute (/<cim:Substation.Region\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Region", sub, context);

                var bucket = context.parsed.Substation;
                if (null == bucket)
                   context.parsed.Substation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = EquipmentContainer.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Substation", "Region", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Substation_collapse" aria-expanded="true" aria-controls="Substation_collapse">Substation</a>
<div id="Substation_collapse" class="collapse in" style="margin-left: 10px;">
`
      + EquipmentContainer.prototype.template.call (this) +
`
{{#Region}}<div><b>Region</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Region}}&quot;);})'>{{Region}}</a></div>{{/Region}}
</div>
`
                );
           }        }

        /**
         * A collection of power system resources (within a given substation) including conducting equipment, protection relays, measurements, and telemetry.
         *
         * A bay typically represents a physical grouping related to modularization of equipment.
         *
         */
        class Bay extends EquipmentContainer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Bay;
                if (null == bucket)
                   cim_data.Bay = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Bay[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = EquipmentContainer.prototype.parse.call (this, context, sub);
                obj.cls = "Bay";
                base.parse_element (/<cim:Bay.bayEnergyMeasFlag>([\s\S]*?)<\/cim:Bay.bayEnergyMeasFlag>/g, obj, "bayEnergyMeasFlag", base.to_boolean, sub, context);
                base.parse_element (/<cim:Bay.bayPowerMeasFlag>([\s\S]*?)<\/cim:Bay.bayPowerMeasFlag>/g, obj, "bayPowerMeasFlag", base.to_boolean, sub, context);
                base.parse_element (/<cim:Bay.breakerConfiguration>([\s\S]*?)<\/cim:Bay.breakerConfiguration>/g, obj, "breakerConfiguration", base.to_string, sub, context);
                base.parse_element (/<cim:Bay.busBarConfiguration>([\s\S]*?)<\/cim:Bay.busBarConfiguration>/g, obj, "busBarConfiguration", base.to_string, sub, context);
                base.parse_attribute (/<cim:Bay.Substation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Substation", sub, context);
                base.parse_attribute (/<cim:Bay.VoltageLevel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "VoltageLevel", sub, context);

                var bucket = context.parsed.Bay;
                if (null == bucket)
                   context.parsed.Bay = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = EquipmentContainer.prototype.export.call (this, obj, false);

                base.export_element (obj, "Bay", "bayEnergyMeasFlag", base.from_boolean, fields);
                base.export_element (obj, "Bay", "bayPowerMeasFlag", base.from_boolean, fields);
                base.export_element (obj, "Bay", "breakerConfiguration", base.from_string, fields);
                base.export_element (obj, "Bay", "busBarConfiguration", base.from_string, fields);
                base.export_attribute (obj, "Bay", "Substation", fields);
                base.export_attribute (obj, "Bay", "VoltageLevel", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Bay_collapse" aria-expanded="true" aria-controls="Bay_collapse">Bay</a>
<div id="Bay_collapse" class="collapse in" style="margin-left: 10px;">
`
      + EquipmentContainer.prototype.template.call (this) +
`
{{#bayEnergyMeasFlag}}<div><b>bayEnergyMeasFlag</b>: {{bayEnergyMeasFlag}}</div>{{/bayEnergyMeasFlag}}
{{#bayPowerMeasFlag}}<div><b>bayPowerMeasFlag</b>: {{bayPowerMeasFlag}}</div>{{/bayPowerMeasFlag}}
{{#breakerConfiguration}}<div><b>breakerConfiguration</b>: {{breakerConfiguration}}</div>{{/breakerConfiguration}}
{{#busBarConfiguration}}<div><b>busBarConfiguration</b>: {{busBarConfiguration}}</div>{{/busBarConfiguration}}
{{#Substation}}<div><b>Substation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Substation}}&quot;);})'>{{Substation}}</a></div>{{/Substation}}
{{#VoltageLevel}}<div><b>VoltageLevel</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{VoltageLevel}}&quot;);})'>{{VoltageLevel}}</a></div>{{/VoltageLevel}}
</div>
`
                );
           }        }

        return (
            {
                BaseFrequency: BaseFrequency,
                GeographicalRegion: GeographicalRegion,
                OperatingParticipant: OperatingParticipant,
                Equipment: Equipment,
                EquipmentContainer: EquipmentContainer,
                ReportingGroup: ReportingGroup,
                Terminal: Terminal,
                ConductingEquipment: ConductingEquipment,
                Substation: Substation,
                CurveStyle: CurveStyle,
                RegularIntervalSchedule: RegularIntervalSchedule,
                PSRType: PSRType,
                BaseVoltage: BaseVoltage,
                BusbarConfiguration: BusbarConfiguration,
                ACDCTerminal: ACDCTerminal,
                Curve: Curve,
                OperatingShare: OperatingShare,
                IrregularIntervalSchedule: IrregularIntervalSchedule,
                BasicIntervalSchedule: BasicIntervalSchedule,
                BasePower: BasePower,
                ConnectivityNodeContainer: ConnectivityNodeContainer,
                PhaseCode: PhaseCode,
                ConnectivityNode: ConnectivityNode,
                BreakerConfiguration: BreakerConfiguration,
                NameType: NameType,
                PowerSystemResource: PowerSystemResource,
                Bay: Bay,
                ReportingSuperGroup: ReportingSuperGroup,
                NameTypeAuthority: NameTypeAuthority,
                VoltageLevel: VoltageLevel,
                RegularTimePoint: RegularTimePoint,
                IrregularTimePoint: IrregularTimePoint,
                IdentifiedObject: IdentifiedObject,
                CurveData: CurveData,
                Name: Name,
                SubGeographicalRegion: SubGeographicalRegion
            }
        );
    }
);