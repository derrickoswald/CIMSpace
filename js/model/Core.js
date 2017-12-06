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
         * Enumeration of phase identifiers.
         *
         * Allows designation of phases for both transmission and distribution equipment, circuits and loads.
         *
         */
        var PhaseCode =
        {
            ABCN: "ABCN",
            ABC: "ABC",
            ABN: "ABN",
            ACN: "ACN",
            BCN: "BCN",
            AB: "AB",
            AC: "AC",
            BC: "BC",
            AN: "AN",
            BN: "BN",
            CN: "CN",
            A: "A",
            B: "B",
            C: "C",
            N: "N",
            s1N: "s1N",
            s2N: "s2N",
            s12N: "s12N",
            s1: "s1",
            s2: "s2",
            s12: "s12"
        };
        Object.freeze (PhaseCode);

        /**
         * Switching arrangement for bay.
         *
         */
        var BreakerConfiguration =
        {
            singleBreaker: "singleBreaker",
            breakerAndAHalf: "breakerAndAHalf",
            doubleBreaker: "doubleBreaker",
            noBreaker: "noBreaker"
        };
        Object.freeze (BreakerConfiguration);

        /**
         * Style or shape of curve.
         *
         */
        var CurveStyle =
        {
            constantYValue: "constantYValue",
            straightLineYValues: "straightLineYValues"
        };
        Object.freeze (CurveStyle);

        /**
         * Busbar layout for bay.
         *
         */
        var BusbarConfiguration =
        {
            singleBus: "singleBus",
            doubleBus: "doubleBus",
            mainWithTransfer: "mainWithTransfer",
            ringBus: "ringBus"
        };
        Object.freeze (BusbarConfiguration);

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#NameType_collapse" aria-expanded="true" aria-controls="NameType_collapse" style="margin-left: 10px;">NameType</a></legend>
                    <div id="NameType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#description}}<div><b>description</b>: {{description}}</div>{{/description}}
                    {{#name}}<div><b>name</b>: {{name}}</div>{{/name}}
                    {{#NameTypeAuthority}}<div><b>NameTypeAuthority</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{NameTypeAuthority}}&quot;);})'>{{NameTypeAuthority}}</a></div>{{/NameTypeAuthority}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#NameType_collapse" aria-expanded="true" aria-controls="NameType_collapse" style="margin-left: 10px;">NameType</a></legend>
                    <div id="NameType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='description'>description: </label><div class='col-sm-8'><input id='description' class='form-control' type='text'{{#description}} value='{{description}}'{{/description}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='name'>name: </label><div class='col-sm-8'><input id='name' class='form-control' type='text'{{#name}} value='{{name}}'{{/name}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='NameTypeAuthority'>NameTypeAuthority: </label><div class='col-sm-8'><input id='NameTypeAuthority' class='form-control' type='text'{{#NameTypeAuthority}} value='{{NameTypeAuthority}}'{{/NameTypeAuthority}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#IrregularTimePoint_collapse" aria-expanded="true" aria-controls="IrregularTimePoint_collapse" style="margin-left: 10px;">IrregularTimePoint</a></legend>
                    <div id="IrregularTimePoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#time}}<div><b>time</b>: {{time}}</div>{{/time}}
                    {{#value1}}<div><b>value1</b>: {{value1}}</div>{{/value1}}
                    {{#value2}}<div><b>value2</b>: {{value2}}</div>{{/value2}}
                    {{#IntervalSchedule}}<div><b>IntervalSchedule</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{IntervalSchedule}}&quot;);})'>{{IntervalSchedule}}</a></div>{{/IntervalSchedule}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#IrregularTimePoint_collapse" aria-expanded="true" aria-controls="IrregularTimePoint_collapse" style="margin-left: 10px;">IrregularTimePoint</a></legend>
                    <div id="IrregularTimePoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='time'>time: </label><div class='col-sm-8'><input id='time' class='form-control' type='text'{{#time}} value='{{time}}'{{/time}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value1'>value1: </label><div class='col-sm-8'><input id='value1' class='form-control' type='text'{{#value1}} value='{{value1}}'{{/value1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value2'>value2: </label><div class='col-sm-8'><input id='value2' class='form-control' type='text'{{#value2}} value='{{value2}}'{{/value2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='IntervalSchedule'>IntervalSchedule: </label><div class='col-sm-8'><input id='IntervalSchedule' class='form-control' type='text'{{#IntervalSchedule}} value='{{IntervalSchedule}}'{{/IntervalSchedule}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RegularTimePoint_collapse" aria-expanded="true" aria-controls="RegularTimePoint_collapse" style="margin-left: 10px;">RegularTimePoint</a></legend>
                    <div id="RegularTimePoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
                    {{#value1}}<div><b>value1</b>: {{value1}}</div>{{/value1}}
                    {{#value2}}<div><b>value2</b>: {{value2}}</div>{{/value2}}
                    {{#IntervalSchedule}}<div><b>IntervalSchedule</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{IntervalSchedule}}&quot;);})'>{{IntervalSchedule}}</a></div>{{/IntervalSchedule}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RegularTimePoint_collapse" aria-expanded="true" aria-controls="RegularTimePoint_collapse" style="margin-left: 10px;">RegularTimePoint</a></legend>
                    <div id="RegularTimePoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='sequenceNumber'>sequenceNumber: </label><div class='col-sm-8'><input id='sequenceNumber' class='form-control' type='text'{{#sequenceNumber}} value='{{sequenceNumber}}'{{/sequenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value1'>value1: </label><div class='col-sm-8'><input id='value1' class='form-control' type='text'{{#value1}} value='{{value1}}'{{/value1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value2'>value2: </label><div class='col-sm-8'><input id='value2' class='form-control' type='text'{{#value2}} value='{{value2}}'{{/value2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='IntervalSchedule'>IntervalSchedule: </label><div class='col-sm-8'><input id='IntervalSchedule' class='form-control' type='text'{{#IntervalSchedule}} value='{{IntervalSchedule}}'{{/IntervalSchedule}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Name_collapse" aria-expanded="true" aria-controls="Name_collapse" style="margin-left: 10px;">Name</a></legend>
                    <div id="Name_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#name}}<div><b>name</b>: {{name}}</div>{{/name}}
                    {{#NameType}}<div><b>NameType</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{NameType}}&quot;);})'>{{NameType}}</a></div>{{/NameType}}
                    {{#IdentifiedObject}}<div><b>IdentifiedObject</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{IdentifiedObject}}&quot;);})'>{{IdentifiedObject}}</a></div>{{/IdentifiedObject}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Name_collapse" aria-expanded="true" aria-controls="Name_collapse" style="margin-left: 10px;">Name</a></legend>
                    <div id="Name_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='name'>name: </label><div class='col-sm-8'><input id='name' class='form-control' type='text'{{#name}} value='{{name}}'{{/name}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='NameType'>NameType: </label><div class='col-sm-8'><input id='NameType' class='form-control' type='text'{{#NameType}} value='{{NameType}}'{{/NameType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='IdentifiedObject'>IdentifiedObject: </label><div class='col-sm-8'><input id='IdentifiedObject' class='form-control' type='text'{{#IdentifiedObject}} value='{{IdentifiedObject}}'{{/IdentifiedObject}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#IdentifiedObject_collapse" aria-expanded="true" aria-controls="IdentifiedObject_collapse" style="margin-left: 10px;">IdentifiedObject</a></legend>
                    <div id="IdentifiedObject_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#aliasName}}<div><b>aliasName</b>: {{aliasName}}</div>{{/aliasName}}
                    {{#mRID}}<div><b>mRID</b>: {{mRID}}</div>{{/mRID}}
                    {{#name}}<div><b>name</b>: {{name}}</div>{{/name}}
                    {{#description}}<div><b>description</b>: {{description}}</div>{{/description}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#IdentifiedObject_collapse" aria-expanded="true" aria-controls="IdentifiedObject_collapse" style="margin-left: 10px;">IdentifiedObject</a></legend>
                    <div id="IdentifiedObject_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='aliasName'>aliasName: </label><div class='col-sm-8'><input id='aliasName' class='form-control' type='text'{{#aliasName}} value='{{aliasName}}'{{/aliasName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='mRID'>mRID: </label><div class='col-sm-8'><input id='mRID' class='form-control' type='text'{{#mRID}} value='{{mRID}}'{{/mRID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='name'>name: </label><div class='col-sm-8'><input id='name' class='form-control' type='text'{{#name}} value='{{name}}'{{/name}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='description'>description: </label><div class='col-sm-8'><input id='description' class='form-control' type='text'{{#description}} value='{{description}}'{{/description}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CurveData_collapse" aria-expanded="true" aria-controls="CurveData_collapse" style="margin-left: 10px;">CurveData</a></legend>
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
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CurveData_collapse" aria-expanded="true" aria-controls="CurveData_collapse" style="margin-left: 10px;">CurveData</a></legend>
                    <div id="CurveData_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='xvalue'>xvalue: </label><div class='col-sm-8'><input id='xvalue' class='form-control' type='text'{{#xvalue}} value='{{xvalue}}'{{/xvalue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='y1value'>y1value: </label><div class='col-sm-8'><input id='y1value' class='form-control' type='text'{{#y1value}} value='{{y1value}}'{{/y1value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='y2value'>y2value: </label><div class='col-sm-8'><input id='y2value' class='form-control' type='text'{{#y2value}} value='{{y2value}}'{{/y2value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='y3value'>y3value: </label><div class='col-sm-8'><input id='y3value' class='form-control' type='text'{{#y3value}} value='{{y3value}}'{{/y3value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Curve'>Curve: </label><div class='col-sm-8'><input id='Curve' class='form-control' type='text'{{#Curve}} value='{{Curve}}'{{/Curve}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#NameTypeAuthority_collapse" aria-expanded="true" aria-controls="NameTypeAuthority_collapse" style="margin-left: 10px;">NameTypeAuthority</a></legend>
                    <div id="NameTypeAuthority_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#description}}<div><b>description</b>: {{description}}</div>{{/description}}
                    {{#name}}<div><b>name</b>: {{name}}</div>{{/name}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#NameTypeAuthority_collapse" aria-expanded="true" aria-controls="NameTypeAuthority_collapse" style="margin-left: 10px;">NameTypeAuthority</a></legend>
                    <div id="NameTypeAuthority_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='description'>description: </label><div class='col-sm-8'><input id='description' class='form-control' type='text'{{#description}} value='{{description}}'{{/description}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='name'>name: </label><div class='col-sm-8'><input id='name' class='form-control' type='text'{{#name}} value='{{name}}'{{/name}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OperatingShare_collapse" aria-expanded="true" aria-controls="OperatingShare_collapse" style="margin-left: 10px;">OperatingShare</a></legend>
                    <div id="OperatingShare_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#percentage}}<div><b>percentage</b>: {{percentage}}</div>{{/percentage}}
                    {{#OperatingParticipant}}<div><b>OperatingParticipant</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{OperatingParticipant}}&quot;);})'>{{OperatingParticipant}}</a></div>{{/OperatingParticipant}}
                    {{#PowerSystemResource}}<div><b>PowerSystemResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PowerSystemResource}}&quot;);})'>{{PowerSystemResource}}</a></div>{{/PowerSystemResource}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OperatingShare_collapse" aria-expanded="true" aria-controls="OperatingShare_collapse" style="margin-left: 10px;">OperatingShare</a></legend>
                    <div id="OperatingShare_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='percentage'>percentage: </label><div class='col-sm-8'><input id='percentage' class='form-control' type='text'{{#percentage}} value='{{percentage}}'{{/percentage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='OperatingParticipant'>OperatingParticipant: </label><div class='col-sm-8'><input id='OperatingParticipant' class='form-control' type='text'{{#OperatingParticipant}} value='{{OperatingParticipant}}'{{/OperatingParticipant}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='PowerSystemResource'>PowerSystemResource: </label><div class='col-sm-8'><input id='PowerSystemResource' class='form-control' type='text'{{#PowerSystemResource}} value='{{PowerSystemResource}}'{{/PowerSystemResource}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                base.parse_attribute (/<cim:Curve.curveStyle\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "curveStyle", sub, context);
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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Curve_collapse" aria-expanded="true" aria-controls="Curve_collapse" style="margin-left: 10px;">Curve</a></legend>
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
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.CurveStyle = []; if (!obj.curveStyle) obj.CurveStyle.push ({ id: '', selected: true}); for (var property in CurveStyle) obj.CurveStyle.push ({ id: property, selected: obj.curveStyle && obj.curveStyle.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.CurveStyle;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Curve_collapse" aria-expanded="true" aria-controls="Curve_collapse" style="margin-left: 10px;">Curve</a></legend>
                    <div id="Curve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='curveStyle'>curveStyle: </label><div class='col-sm-8'><select id='curveStyle' class='form-control'>{{#CurveStyle}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/CurveStyle}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='xMultiplier'>xMultiplier: </label><div class='col-sm-8'><input id='xMultiplier' class='form-control' type='text'{{#xMultiplier}} value='{{xMultiplier}}'{{/xMultiplier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='xUnit'>xUnit: </label><div class='col-sm-8'><input id='xUnit' class='form-control' type='text'{{#xUnit}} value='{{xUnit}}'{{/xUnit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='y1Multiplier'>y1Multiplier: </label><div class='col-sm-8'><input id='y1Multiplier' class='form-control' type='text'{{#y1Multiplier}} value='{{y1Multiplier}}'{{/y1Multiplier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='y1Unit'>y1Unit: </label><div class='col-sm-8'><input id='y1Unit' class='form-control' type='text'{{#y1Unit}} value='{{y1Unit}}'{{/y1Unit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='y2Multiplier'>y2Multiplier: </label><div class='col-sm-8'><input id='y2Multiplier' class='form-control' type='text'{{#y2Multiplier}} value='{{y2Multiplier}}'{{/y2Multiplier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='y2Unit'>y2Unit: </label><div class='col-sm-8'><input id='y2Unit' class='form-control' type='text'{{#y2Unit}} value='{{y2Unit}}'{{/y2Unit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='y3Multiplier'>y3Multiplier: </label><div class='col-sm-8'><input id='y3Multiplier' class='form-control' type='text'{{#y3Multiplier}} value='{{y3Multiplier}}'{{/y3Multiplier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='y3Unit'>y3Unit: </label><div class='col-sm-8'><input id='y3Unit' class='form-control' type='text'{{#y3Unit}} value='{{y3Unit}}'{{/y3Unit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PSRType_collapse" aria-expanded="true" aria-controls="PSRType_collapse" style="margin-left: 10px;">PSRType</a></legend>
                    <div id="PSRType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.template.call (this) +
                    `
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PSRType_collapse" aria-expanded="true" aria-controls="PSRType_collapse" style="margin-left: 10px;">PSRType</a></legend>
                    <div id="PSRType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BaseVoltage_collapse" aria-expanded="true" aria-controls="BaseVoltage_collapse" style="margin-left: 10px;">BaseVoltage</a></legend>
                    <div id="BaseVoltage_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#nominalVoltage}}<div><b>nominalVoltage</b>: {{nominalVoltage}}</div>{{/nominalVoltage}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BaseVoltage_collapse" aria-expanded="true" aria-controls="BaseVoltage_collapse" style="margin-left: 10px;">BaseVoltage</a></legend>
                    <div id="BaseVoltage_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='nominalVoltage'>nominalVoltage: </label><div class='col-sm-8'><input id='nominalVoltage' class='form-control' type='text'{{#nominalVoltage}} value='{{nominalVoltage}}'{{/nominalVoltage}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ConnectivityNode_collapse" aria-expanded="true" aria-controls="ConnectivityNode_collapse" style="margin-left: 10px;">ConnectivityNode</a></legend>
                    <div id="ConnectivityNode_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#ConnectivityNodeContainer}}<div><b>ConnectivityNodeContainer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ConnectivityNodeContainer}}&quot;);})'>{{ConnectivityNodeContainer}}</a></div>{{/ConnectivityNodeContainer}}
                    {{#TopologicalNode}}<div><b>TopologicalNode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TopologicalNode}}&quot;);})'>{{TopologicalNode}}</a></div>{{/TopologicalNode}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ConnectivityNode_collapse" aria-expanded="true" aria-controls="ConnectivityNode_collapse" style="margin-left: 10px;">ConnectivityNode</a></legend>
                    <div id="ConnectivityNode_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ConnectivityNodeContainer'>ConnectivityNodeContainer: </label><div class='col-sm-8'><input id='ConnectivityNodeContainer' class='form-control' type='text'{{#ConnectivityNodeContainer}} value='{{ConnectivityNodeContainer}}'{{/ConnectivityNodeContainer}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TopologicalNode'>TopologicalNode: </label><div class='col-sm-8'><input id='TopologicalNode' class='form-control' type='text'{{#TopologicalNode}} value='{{TopologicalNode}}'{{/TopologicalNode}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GeographicalRegion_collapse" aria-expanded="true" aria-controls="GeographicalRegion_collapse" style="margin-left: 10px;">GeographicalRegion</a></legend>
                    <div id="GeographicalRegion_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.template.call (this) +
                    `
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GeographicalRegion_collapse" aria-expanded="true" aria-controls="GeographicalRegion_collapse" style="margin-left: 10px;">GeographicalRegion</a></legend>
                    <div id="GeographicalRegion_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BasicIntervalSchedule_collapse" aria-expanded="true" aria-controls="BasicIntervalSchedule_collapse" style="margin-left: 10px;">BasicIntervalSchedule</a></legend>
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
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BasicIntervalSchedule_collapse" aria-expanded="true" aria-controls="BasicIntervalSchedule_collapse" style="margin-left: 10px;">BasicIntervalSchedule</a></legend>
                    <div id="BasicIntervalSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startTime'>startTime: </label><div class='col-sm-8'><input id='startTime' class='form-control' type='text'{{#startTime}} value='{{startTime}}'{{/startTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value1Multiplier'>value1Multiplier: </label><div class='col-sm-8'><input id='value1Multiplier' class='form-control' type='text'{{#value1Multiplier}} value='{{value1Multiplier}}'{{/value1Multiplier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value1Unit'>value1Unit: </label><div class='col-sm-8'><input id='value1Unit' class='form-control' type='text'{{#value1Unit}} value='{{value1Unit}}'{{/value1Unit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value2Multiplier'>value2Multiplier: </label><div class='col-sm-8'><input id='value2Multiplier' class='form-control' type='text'{{#value2Multiplier}} value='{{value2Multiplier}}'{{/value2Multiplier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value2Unit'>value2Unit: </label><div class='col-sm-8'><input id='value2Unit' class='form-control' type='text'{{#value2Unit}} value='{{value2Unit}}'{{/value2Unit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ACDCTerminal_collapse" aria-expanded="true" aria-controls="ACDCTerminal_collapse" style="margin-left: 10px;">ACDCTerminal</a></legend>
                    <div id="ACDCTerminal_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#connected}}<div><b>connected</b>: {{connected}}</div>{{/connected}}
                    {{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
                    {{#BusNameMarker}}<div><b>BusNameMarker</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{BusNameMarker}}&quot;);})'>{{BusNameMarker}}</a></div>{{/BusNameMarker}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ACDCTerminal_collapse" aria-expanded="true" aria-controls="ACDCTerminal_collapse" style="margin-left: 10px;">ACDCTerminal</a></legend>
                    <div id="ACDCTerminal_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='connected'>connected: </label><div class='col-sm-8'><input id='connected' class='form-check-input' type='checkbox'{{#connected}} checked{{/connected}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='sequenceNumber'>sequenceNumber: </label><div class='col-sm-8'><input id='sequenceNumber' class='form-control' type='text'{{#sequenceNumber}} value='{{sequenceNumber}}'{{/sequenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='BusNameMarker'>BusNameMarker: </label><div class='col-sm-8'><input id='BusNameMarker' class='form-control' type='text'{{#BusNameMarker}} value='{{BusNameMarker}}'{{/BusNameMarker}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OperatingParticipant_collapse" aria-expanded="true" aria-controls="OperatingParticipant_collapse" style="margin-left: 10px;">OperatingParticipant</a></legend>
                    <div id="OperatingParticipant_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.template.call (this) +
                    `
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OperatingParticipant_collapse" aria-expanded="true" aria-controls="OperatingParticipant_collapse" style="margin-left: 10px;">OperatingParticipant</a></legend>
                    <div id="OperatingParticipant_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BasePower_collapse" aria-expanded="true" aria-controls="BasePower_collapse" style="margin-left: 10px;">BasePower</a></legend>
                    <div id="BasePower_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#basePower}}<div><b>basePower</b>: {{basePower}}</div>{{/basePower}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BasePower_collapse" aria-expanded="true" aria-controls="BasePower_collapse" style="margin-left: 10px;">BasePower</a></legend>
                    <div id="BasePower_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='basePower'>basePower: </label><div class='col-sm-8'><input id='basePower' class='form-control' type='text'{{#basePower}} value='{{basePower}}'{{/basePower}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ReportingSuperGroup_collapse" aria-expanded="true" aria-controls="ReportingSuperGroup_collapse" style="margin-left: 10px;">ReportingSuperGroup</a></legend>
                    <div id="ReportingSuperGroup_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.template.call (this) +
                    `
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ReportingSuperGroup_collapse" aria-expanded="true" aria-controls="ReportingSuperGroup_collapse" style="margin-left: 10px;">ReportingSuperGroup</a></legend>
                    <div id="ReportingSuperGroup_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                base.parse_attribute (/<cim:Terminal.phases\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "phases", sub, context);
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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Terminal_collapse" aria-expanded="true" aria-controls="Terminal_collapse" style="margin-left: 10px;">Terminal</a></legend>
                    <div id="Terminal_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ACDCTerminal.prototype.template.call (this) +
                    `
                    {{#phases}}<div><b>phases</b>: {{phases}}</div>{{/phases}}
                    {{#TopologicalNode}}<div><b>TopologicalNode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TopologicalNode}}&quot;);})'>{{TopologicalNode}}</a></div>{{/TopologicalNode}}
                    {{#SvPowerFlow}}<div><b>SvPowerFlow</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SvPowerFlow}}&quot;);})'>{{SvPowerFlow}}</a></div>{{/SvPowerFlow}}
                    {{#Bushing}}<div><b>Bushing</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Bushing}}&quot;);})'>{{Bushing}}</a></div>{{/Bushing}}
                    {{#ConnectivityNode}}<div><b>ConnectivityNode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ConnectivityNode}}&quot;);})'>{{ConnectivityNode}}</a></div>{{/ConnectivityNode}}
                    {{#ConductingEquipment}}<div><b>ConductingEquipment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ConductingEquipment}}&quot;);})'>{{ConductingEquipment}}</a></div>{{/ConductingEquipment}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.PhaseCode = []; if (!obj.phases) obj.PhaseCode.push ({ id: '', selected: true}); for (var property in PhaseCode) obj.PhaseCode.push ({ id: property, selected: obj.phases && obj.phases.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.PhaseCode;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Terminal_collapse" aria-expanded="true" aria-controls="Terminal_collapse" style="margin-left: 10px;">Terminal</a></legend>
                    <div id="Terminal_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ACDCTerminal.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='phases'>phases: </label><div class='col-sm-8'><select id='phases' class='form-control'>{{#PhaseCode}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/PhaseCode}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TopologicalNode'>TopologicalNode: </label><div class='col-sm-8'><input id='TopologicalNode' class='form-control' type='text'{{#TopologicalNode}} value='{{TopologicalNode}}'{{/TopologicalNode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SvPowerFlow'>SvPowerFlow: </label><div class='col-sm-8'><input id='SvPowerFlow' class='form-control' type='text'{{#SvPowerFlow}} value='{{SvPowerFlow}}'{{/SvPowerFlow}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Bushing'>Bushing: </label><div class='col-sm-8'><input id='Bushing' class='form-control' type='text'{{#Bushing}} value='{{Bushing}}'{{/Bushing}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ConnectivityNode'>ConnectivityNode: </label><div class='col-sm-8'><input id='ConnectivityNode' class='form-control' type='text'{{#ConnectivityNode}} value='{{ConnectivityNode}}'{{/ConnectivityNode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ConductingEquipment'>ConductingEquipment: </label><div class='col-sm-8'><input id='ConductingEquipment' class='form-control' type='text'{{#ConductingEquipment}} value='{{ConductingEquipment}}'{{/ConductingEquipment}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SubGeographicalRegion_collapse" aria-expanded="true" aria-controls="SubGeographicalRegion_collapse" style="margin-left: 10px;">SubGeographicalRegion</a></legend>
                    <div id="SubGeographicalRegion_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#Region}}<div><b>Region</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Region}}&quot;);})'>{{Region}}</a></div>{{/Region}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SubGeographicalRegion_collapse" aria-expanded="true" aria-controls="SubGeographicalRegion_collapse" style="margin-left: 10px;">SubGeographicalRegion</a></legend>
                    <div id="SubGeographicalRegion_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Region'>Region: </label><div class='col-sm-8'><input id='Region' class='form-control' type='text'{{#Region}} value='{{Region}}'{{/Region}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PowerSystemResource_collapse" aria-expanded="true" aria-controls="PowerSystemResource_collapse" style="margin-left: 10px;">PowerSystemResource</a></legend>
                    <div id="PowerSystemResource_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#AssetDatasheet}}<div><b>AssetDatasheet</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AssetDatasheet}}&quot;);})'>{{AssetDatasheet}}</a></div>{{/AssetDatasheet}}
                    {{#Location}}<div><b>Location</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Location}}&quot;);})'>{{Location}}</a></div>{{/Location}}
                    {{#PSRType}}<div><b>PSRType</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PSRType}}&quot;);})'>{{PSRType}}</a></div>{{/PSRType}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PowerSystemResource_collapse" aria-expanded="true" aria-controls="PowerSystemResource_collapse" style="margin-left: 10px;">PowerSystemResource</a></legend>
                    <div id="PowerSystemResource_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AssetDatasheet'>AssetDatasheet: </label><div class='col-sm-8'><input id='AssetDatasheet' class='form-control' type='text'{{#AssetDatasheet}} value='{{AssetDatasheet}}'{{/AssetDatasheet}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Location'>Location: </label><div class='col-sm-8'><input id='Location' class='form-control' type='text'{{#Location}} value='{{Location}}'{{/Location}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='PSRType'>PSRType: </label><div class='col-sm-8'><input id='PSRType' class='form-control' type='text'{{#PSRType}} value='{{PSRType}}'{{/PSRType}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#IrregularIntervalSchedule_collapse" aria-expanded="true" aria-controls="IrregularIntervalSchedule_collapse" style="margin-left: 10px;">IrregularIntervalSchedule</a></legend>
                    <div id="IrregularIntervalSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + BasicIntervalSchedule.prototype.template.call (this) +
                    `
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#IrregularIntervalSchedule_collapse" aria-expanded="true" aria-controls="IrregularIntervalSchedule_collapse" style="margin-left: 10px;">IrregularIntervalSchedule</a></legend>
                    <div id="IrregularIntervalSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + BasicIntervalSchedule.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BaseFrequency_collapse" aria-expanded="true" aria-controls="BaseFrequency_collapse" style="margin-left: 10px;">BaseFrequency</a></legend>
                    <div id="BaseFrequency_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#frequency}}<div><b>frequency</b>: {{frequency}}</div>{{/frequency}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BaseFrequency_collapse" aria-expanded="true" aria-controls="BaseFrequency_collapse" style="margin-left: 10px;">BaseFrequency</a></legend>
                    <div id="BaseFrequency_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='frequency'>frequency: </label><div class='col-sm-8'><input id='frequency' class='form-control' type='text'{{#frequency}} value='{{frequency}}'{{/frequency}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ReportingGroup_collapse" aria-expanded="true" aria-controls="ReportingGroup_collapse" style="margin-left: 10px;">ReportingGroup</a></legend>
                    <div id="ReportingGroup_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#ReportingSuperGroup}}<div><b>ReportingSuperGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ReportingSuperGroup}}&quot;);})'>{{ReportingSuperGroup}}</a></div>{{/ReportingSuperGroup}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ReportingGroup_collapse" aria-expanded="true" aria-controls="ReportingGroup_collapse" style="margin-left: 10px;">ReportingGroup</a></legend>
                    <div id="ReportingGroup_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ReportingSuperGroup'>ReportingSuperGroup: </label><div class='col-sm-8'><input id='ReportingSuperGroup' class='form-control' type='text'{{#ReportingSuperGroup}} value='{{ReportingSuperGroup}}'{{/ReportingSuperGroup}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RegularIntervalSchedule_collapse" aria-expanded="true" aria-controls="RegularIntervalSchedule_collapse" style="margin-left: 10px;">RegularIntervalSchedule</a></legend>
                    <div id="RegularIntervalSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + BasicIntervalSchedule.prototype.template.call (this) +
                    `
                    {{#endTime}}<div><b>endTime</b>: {{endTime}}</div>{{/endTime}}
                    {{#timeStep}}<div><b>timeStep</b>: {{timeStep}}</div>{{/timeStep}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RegularIntervalSchedule_collapse" aria-expanded="true" aria-controls="RegularIntervalSchedule_collapse" style="margin-left: 10px;">RegularIntervalSchedule</a></legend>
                    <div id="RegularIntervalSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + BasicIntervalSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='endTime'>endTime: </label><div class='col-sm-8'><input id='endTime' class='form-control' type='text'{{#endTime}} value='{{endTime}}'{{/endTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='timeStep'>timeStep: </label><div class='col-sm-8'><input id='timeStep' class='form-control' type='text'{{#timeStep}} value='{{timeStep}}'{{/timeStep}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ConnectivityNodeContainer_collapse" aria-expanded="true" aria-controls="ConnectivityNodeContainer_collapse" style="margin-left: 10px;">ConnectivityNodeContainer</a></legend>
                    <div id="ConnectivityNodeContainer_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PowerSystemResource.prototype.template.call (this) +
                    `
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ConnectivityNodeContainer_collapse" aria-expanded="true" aria-controls="ConnectivityNodeContainer_collapse" style="margin-left: 10px;">ConnectivityNodeContainer</a></legend>
                    <div id="ConnectivityNodeContainer_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Equipment_collapse" aria-expanded="true" aria-controls="Equipment_collapse" style="margin-left: 10px;">Equipment</a></legend>
                    <div id="Equipment_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#normallyInService}}<div><b>normallyInService</b>: {{normallyInService}}</div>{{/normallyInService}}
                    {{#aggregate}}<div><b>aggregate</b>: {{aggregate}}</div>{{/aggregate}}
                    {{#EquipmentContainer}}<div><b>EquipmentContainer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EquipmentContainer}}&quot;);})'>{{EquipmentContainer}}</a></div>{{/EquipmentContainer}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Equipment_collapse" aria-expanded="true" aria-controls="Equipment_collapse" style="margin-left: 10px;">Equipment</a></legend>
                    <div id="Equipment_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='normallyInService'>normallyInService: </label><div class='col-sm-8'><input id='normallyInService' class='form-check-input' type='checkbox'{{#normallyInService}} checked{{/normallyInService}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='aggregate'>aggregate: </label><div class='col-sm-8'><input id='aggregate' class='form-check-input' type='checkbox'{{#aggregate}} checked{{/aggregate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='EquipmentContainer'>EquipmentContainer: </label><div class='col-sm-8'><input id='EquipmentContainer' class='form-control' type='text'{{#EquipmentContainer}} value='{{EquipmentContainer}}'{{/EquipmentContainer}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EquipmentContainer_collapse" aria-expanded="true" aria-controls="EquipmentContainer_collapse" style="margin-left: 10px;">EquipmentContainer</a></legend>
                    <div id="EquipmentContainer_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ConnectivityNodeContainer.prototype.template.call (this) +
                    `
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EquipmentContainer_collapse" aria-expanded="true" aria-controls="EquipmentContainer_collapse" style="margin-left: 10px;">EquipmentContainer</a></legend>
                    <div id="EquipmentContainer_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ConnectivityNodeContainer.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#VoltageLevel_collapse" aria-expanded="true" aria-controls="VoltageLevel_collapse" style="margin-left: 10px;">VoltageLevel</a></legend>
                    <div id="VoltageLevel_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EquipmentContainer.prototype.template.call (this) +
                    `
                    {{#highVoltageLimit}}<div><b>highVoltageLimit</b>: {{highVoltageLimit}}</div>{{/highVoltageLimit}}
                    {{#lowVoltageLimit}}<div><b>lowVoltageLimit</b>: {{lowVoltageLimit}}</div>{{/lowVoltageLimit}}
                    {{#BaseVoltage}}<div><b>BaseVoltage</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{BaseVoltage}}&quot;);})'>{{BaseVoltage}}</a></div>{{/BaseVoltage}}
                    {{#Substation}}<div><b>Substation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Substation}}&quot;);})'>{{Substation}}</a></div>{{/Substation}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#VoltageLevel_collapse" aria-expanded="true" aria-controls="VoltageLevel_collapse" style="margin-left: 10px;">VoltageLevel</a></legend>
                    <div id="VoltageLevel_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EquipmentContainer.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='highVoltageLimit'>highVoltageLimit: </label><div class='col-sm-8'><input id='highVoltageLimit' class='form-control' type='text'{{#highVoltageLimit}} value='{{highVoltageLimit}}'{{/highVoltageLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lowVoltageLimit'>lowVoltageLimit: </label><div class='col-sm-8'><input id='lowVoltageLimit' class='form-control' type='text'{{#lowVoltageLimit}} value='{{lowVoltageLimit}}'{{/lowVoltageLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='BaseVoltage'>BaseVoltage: </label><div class='col-sm-8'><input id='BaseVoltage' class='form-control' type='text'{{#BaseVoltage}} value='{{BaseVoltage}}'{{/BaseVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Substation'>Substation: </label><div class='col-sm-8'><input id='Substation' class='form-control' type='text'{{#Substation}} value='{{Substation}}'{{/Substation}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ConductingEquipment_collapse" aria-expanded="true" aria-controls="ConductingEquipment_collapse" style="margin-left: 10px;">ConductingEquipment</a></legend>
                    <div id="ConductingEquipment_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Equipment.prototype.template.call (this) +
                    `
                    {{#GroundingAction}}<div><b>GroundingAction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GroundingAction}}&quot;);})'>{{GroundingAction}}</a></div>{{/GroundingAction}}
                    {{#BaseVoltage}}<div><b>BaseVoltage</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{BaseVoltage}}&quot;);})'>{{BaseVoltage}}</a></div>{{/BaseVoltage}}
                    {{#SvStatus}}<div><b>SvStatus</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SvStatus}}&quot;);})'>{{SvStatus}}</a></div>{{/SvStatus}}
                    {{#JumpingAction}}<div><b>JumpingAction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{JumpingAction}}&quot;);})'>{{JumpingAction}}</a></div>{{/JumpingAction}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ConductingEquipment_collapse" aria-expanded="true" aria-controls="ConductingEquipment_collapse" style="margin-left: 10px;">ConductingEquipment</a></legend>
                    <div id="ConductingEquipment_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Equipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='GroundingAction'>GroundingAction: </label><div class='col-sm-8'><input id='GroundingAction' class='form-control' type='text'{{#GroundingAction}} value='{{GroundingAction}}'{{/GroundingAction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='BaseVoltage'>BaseVoltage: </label><div class='col-sm-8'><input id='BaseVoltage' class='form-control' type='text'{{#BaseVoltage}} value='{{BaseVoltage}}'{{/BaseVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SvStatus'>SvStatus: </label><div class='col-sm-8'><input id='SvStatus' class='form-control' type='text'{{#SvStatus}} value='{{SvStatus}}'{{/SvStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='JumpingAction'>JumpingAction: </label><div class='col-sm-8'><input id='JumpingAction' class='form-control' type='text'{{#JumpingAction}} value='{{JumpingAction}}'{{/JumpingAction}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Substation_collapse" aria-expanded="true" aria-controls="Substation_collapse" style="margin-left: 10px;">Substation</a></legend>
                    <div id="Substation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EquipmentContainer.prototype.template.call (this) +
                    `
                    {{#Region}}<div><b>Region</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Region}}&quot;);})'>{{Region}}</a></div>{{/Region}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Substation_collapse" aria-expanded="true" aria-controls="Substation_collapse" style="margin-left: 10px;">Substation</a></legend>
                    <div id="Substation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EquipmentContainer.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Region'>Region: </label><div class='col-sm-8'><input id='Region' class='form-control' type='text'{{#Region}} value='{{Region}}'{{/Region}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                base.parse_attribute (/<cim:Bay.breakerConfiguration\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "breakerConfiguration", sub, context);
                base.parse_attribute (/<cim:Bay.busBarConfiguration\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "busBarConfiguration", sub, context);
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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Bay_collapse" aria-expanded="true" aria-controls="Bay_collapse" style="margin-left: 10px;">Bay</a></legend>
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
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.BreakerConfiguration = []; if (!obj.breakerConfiguration) obj.BreakerConfiguration.push ({ id: '', selected: true}); for (var property in BreakerConfiguration) obj.BreakerConfiguration.push ({ id: property, selected: obj.breakerConfiguration && obj.breakerConfiguration.endsWith ('.' + property)});
                obj.BusbarConfiguration = []; if (!obj.busBarConfiguration) obj.BusbarConfiguration.push ({ id: '', selected: true}); for (var property in BusbarConfiguration) obj.BusbarConfiguration.push ({ id: property, selected: obj.busBarConfiguration && obj.busBarConfiguration.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.BreakerConfiguration;
                delete obj.BusbarConfiguration;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Bay_collapse" aria-expanded="true" aria-controls="Bay_collapse" style="margin-left: 10px;">Bay</a></legend>
                    <div id="Bay_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EquipmentContainer.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='bayEnergyMeasFlag'>bayEnergyMeasFlag: </label><div class='col-sm-8'><input id='bayEnergyMeasFlag' class='form-check-input' type='checkbox'{{#bayEnergyMeasFlag}} checked{{/bayEnergyMeasFlag}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='bayPowerMeasFlag'>bayPowerMeasFlag: </label><div class='col-sm-8'><input id='bayPowerMeasFlag' class='form-check-input' type='checkbox'{{#bayPowerMeasFlag}} checked{{/bayPowerMeasFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='breakerConfiguration'>breakerConfiguration: </label><div class='col-sm-8'><select id='breakerConfiguration' class='form-control'>{{#BreakerConfiguration}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/BreakerConfiguration}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='busBarConfiguration'>busBarConfiguration: </label><div class='col-sm-8'><select id='busBarConfiguration' class='form-control'>{{#BusbarConfiguration}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/BusbarConfiguration}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Substation'>Substation: </label><div class='col-sm-8'><input id='Substation' class='form-control' type='text'{{#Substation}} value='{{Substation}}'{{/Substation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='VoltageLevel'>VoltageLevel: </label><div class='col-sm-8'><input id='VoltageLevel' class='form-control' type='text'{{#VoltageLevel}} value='{{VoltageLevel}}'{{/VoltageLevel}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                RegularIntervalSchedule: RegularIntervalSchedule,
                PSRType: PSRType,
                BaseVoltage: BaseVoltage,
                ACDCTerminal: ACDCTerminal,
                Curve: Curve,
                OperatingShare: OperatingShare,
                IrregularIntervalSchedule: IrregularIntervalSchedule,
                BasicIntervalSchedule: BasicIntervalSchedule,
                BasePower: BasePower,
                ConnectivityNodeContainer: ConnectivityNodeContainer,
                ConnectivityNode: ConnectivityNode,
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