define
(
    ["model/base", "model/Domain"],
    /**
     * Contains the core PowerSystemResource and ConductingEquipment entities shared by all applications plus common collections of those entities.
     *
     * Not all applications require all the Core entities.  This package does not depend on any other package except the Domain package, but most of the other packages have associations and generalizations that depend on it.
     *
     */
    function (base, Domain)
    {

        /**
         * Switching arrangement for bay.
         *
         */
        let BreakerConfiguration =
        {
            "singleBreaker": "singleBreaker",
            "breakerAndAHalf": "breakerAndAHalf",
            "doubleBreaker": "doubleBreaker",
            "noBreaker": "noBreaker"
        };
        Object.freeze (BreakerConfiguration);

        /**
         * Busbar layout for bay.
         *
         */
        let BusbarConfiguration =
        {
            "singleBus": "singleBus",
            "doubleBus": "doubleBus",
            "mainWithTransfer": "mainWithTransfer",
            "ringBus": "ringBus"
        };
        Object.freeze (BusbarConfiguration);

        /**
         * Style or shape of curve.
         *
         */
        let CurveStyle =
        {
            "constantYValue": "constantYValue",
            "straightLineYValues": "straightLineYValues"
        };
        Object.freeze (CurveStyle);

        /**
         * An unordered enumeration of phase identifiers.
         *
         * Allows designation of phases for both transmission and distribution equipment, circuits and loads.   The enumeration, by itself, does not describe how the phases are connected together or connected to ground.  Ground is not explicitly denoted as a phase.
         * Residential and small commercial loads are often served from single-phase, or split-phase, secondary circuits. For the example of s12N, phases 1 and 2 refer to hot wires that are 180 degrees out of phase, while N refers to the neutral wire. Through single-phase transformer connections, these secondary circuits may be served from one or two of the primary phases A, B, and C. For three-phase loads, use the A, B, C phase codes instead of s12N.
         *
         */
        let PhaseCode =
        {
            "ABCN": "ABCN",
            "ABC": "ABC",
            "ABN": "ABN",
            "ACN": "ACN",
            "BCN": "BCN",
            "AB": "AB",
            "AC": "AC",
            "BC": "BC",
            "AN": "AN",
            "BN": "BN",
            "CN": "CN",
            "A": "A",
            "B": "B",
            "C": "C",
            "N": "N",
            "s1N": "s1N",
            "s2N": "s2N",
            "s12N": "s12N",
            "s1": "s1",
            "s2": "s2",
            "s12": "s12",
            "none": "none",
            "X": "X",
            "XY": "XY",
            "XN": "XN",
            "XYN": "XYN"
        };
        Object.freeze (PhaseCode);

        /**
         * Specifies the operations contract relationship between a power system resource and a contract participant.
         *
         */
        class OperatingShare extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OperatingShare;
                if (null == bucket)
                   cim_data.OperatingShare = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OperatingShare[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "OperatingShare";
                base.parse_element (/<cim:OperatingShare.percentage>([\s\S]*?)<\/cim:OperatingShare.percentage>/g, obj, "percentage", base.to_string, sub, context);
                base.parse_attribute (/<cim:OperatingShare.OperatingParticipant\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OperatingParticipant", sub, context);
                base.parse_attribute (/<cim:OperatingShare.PowerSystemResource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemResource", sub, context);
                let bucket = context.parsed.OperatingShare;
                if (null == bucket)
                   context.parsed.OperatingShare = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "OperatingShare", "percentage", "percentage",  base.from_string, fields);
                base.export_attribute (obj, "OperatingShare", "OperatingParticipant", "OperatingParticipant", fields);
                base.export_attribute (obj, "OperatingShare", "PowerSystemResource", "PowerSystemResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OperatingShare_collapse" aria-expanded="true" aria-controls="OperatingShare_collapse" style="margin-left: 10px;">OperatingShare</a></legend>
                    <div id="OperatingShare_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#percentage}}<div><b>percentage</b>: {{percentage}}</div>{{/percentage}}
                    {{#OperatingParticipant}}<div><b>OperatingParticipant</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{OperatingParticipant}}");}); return false;'>{{OperatingParticipant}}</a></div>{{/OperatingParticipant}}
                    {{#PowerSystemResource}}<div><b>PowerSystemResource</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{PowerSystemResource}}");}); return false;'>{{PowerSystemResource}}</a></div>{{/PowerSystemResource}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OperatingShare_collapse" aria-expanded="true" aria-controls="{{id}}_OperatingShare_collapse" style="margin-left: 10px;">OperatingShare</a></legend>
                    <div id="{{id}}_OperatingShare_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_percentage'>percentage: </label><div class='col-sm-8'><input id='{{id}}_percentage' class='form-control' type='text'{{#percentage}} value='{{percentage}}'{{/percentage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OperatingParticipant'>OperatingParticipant: </label><div class='col-sm-8'><input id='{{id}}_OperatingParticipant' class='form-control' type='text'{{#OperatingParticipant}} value='{{OperatingParticipant}}'{{/OperatingParticipant}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PowerSystemResource'>PowerSystemResource: </label><div class='col-sm-8'><input id='{{id}}_PowerSystemResource' class='form-control' type='text'{{#PowerSystemResource}} value='{{PowerSystemResource}}'{{/PowerSystemResource}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OperatingShare" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_percentage").value; if ("" !== temp) obj["percentage"] = temp;
                temp = document.getElementById (id + "_OperatingParticipant").value; if ("" !== temp) obj["OperatingParticipant"] = temp;
                temp = document.getElementById (id + "_PowerSystemResource").value; if ("" !== temp) obj["PowerSystemResource"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["OperatingParticipant", "1", "0..*", "OperatingParticipant", "OperatingShare"],
                            ["PowerSystemResource", "1", "0..*", "PowerSystemResource", "OperatingShare"]
                        ]
                    )
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
                let bucket = cim_data.RegularTimePoint;
                if (null == bucket)
                   cim_data.RegularTimePoint = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RegularTimePoint[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "RegularTimePoint";
                base.parse_element (/<cim:RegularTimePoint.sequenceNumber>([\s\S]*?)<\/cim:RegularTimePoint.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
                base.parse_element (/<cim:RegularTimePoint.value1>([\s\S]*?)<\/cim:RegularTimePoint.value1>/g, obj, "value1", base.to_float, sub, context);
                base.parse_element (/<cim:RegularTimePoint.value2>([\s\S]*?)<\/cim:RegularTimePoint.value2>/g, obj, "value2", base.to_float, sub, context);
                base.parse_attribute (/<cim:RegularTimePoint.IntervalSchedule\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "IntervalSchedule", sub, context);
                let bucket = context.parsed.RegularTimePoint;
                if (null == bucket)
                   context.parsed.RegularTimePoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "RegularTimePoint", "sequenceNumber", "sequenceNumber",  base.from_string, fields);
                base.export_element (obj, "RegularTimePoint", "value1", "value1",  base.from_float, fields);
                base.export_element (obj, "RegularTimePoint", "value2", "value2",  base.from_float, fields);
                base.export_attribute (obj, "RegularTimePoint", "IntervalSchedule", "IntervalSchedule", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RegularTimePoint_collapse" aria-expanded="true" aria-controls="RegularTimePoint_collapse" style="margin-left: 10px;">RegularTimePoint</a></legend>
                    <div id="RegularTimePoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
                    {{#value1}}<div><b>value1</b>: {{value1}}</div>{{/value1}}
                    {{#value2}}<div><b>value2</b>: {{value2}}</div>{{/value2}}
                    {{#IntervalSchedule}}<div><b>IntervalSchedule</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{IntervalSchedule}}");}); return false;'>{{IntervalSchedule}}</a></div>{{/IntervalSchedule}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RegularTimePoint_collapse" aria-expanded="true" aria-controls="{{id}}_RegularTimePoint_collapse" style="margin-left: 10px;">RegularTimePoint</a></legend>
                    <div id="{{id}}_RegularTimePoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sequenceNumber'>sequenceNumber: </label><div class='col-sm-8'><input id='{{id}}_sequenceNumber' class='form-control' type='text'{{#sequenceNumber}} value='{{sequenceNumber}}'{{/sequenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value1'>value1: </label><div class='col-sm-8'><input id='{{id}}_value1' class='form-control' type='text'{{#value1}} value='{{value1}}'{{/value1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value2'>value2: </label><div class='col-sm-8'><input id='{{id}}_value2' class='form-control' type='text'{{#value2}} value='{{value2}}'{{/value2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_IntervalSchedule'>IntervalSchedule: </label><div class='col-sm-8'><input id='{{id}}_IntervalSchedule' class='form-control' type='text'{{#IntervalSchedule}} value='{{IntervalSchedule}}'{{/IntervalSchedule}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "RegularTimePoint" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_sequenceNumber").value; if ("" !== temp) obj["sequenceNumber"] = temp;
                temp = document.getElementById (id + "_value1").value; if ("" !== temp) obj["value1"] = temp;
                temp = document.getElementById (id + "_value2").value; if ("" !== temp) obj["value2"] = temp;
                temp = document.getElementById (id + "_IntervalSchedule").value; if ("" !== temp) obj["IntervalSchedule"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["IntervalSchedule", "1", "1..*", "RegularIntervalSchedule", "TimePoints"]
                        ]
                    )
                );
            }
        }

        /**
         * Multi-purpose data points for defining a curve.
         *
         * The use of this generic class is discouraged if a more specific class can be used to specify the X and Y axis values along with their specific data types.
         *
         */
        class CurveData extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.CurveData;
                if (null == bucket)
                   cim_data.CurveData = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CurveData[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CurveData";
                base.parse_element (/<cim:CurveData.xvalue>([\s\S]*?)<\/cim:CurveData.xvalue>/g, obj, "xvalue", base.to_float, sub, context);
                base.parse_element (/<cim:CurveData.y1value>([\s\S]*?)<\/cim:CurveData.y1value>/g, obj, "y1value", base.to_float, sub, context);
                base.parse_element (/<cim:CurveData.y2value>([\s\S]*?)<\/cim:CurveData.y2value>/g, obj, "y2value", base.to_float, sub, context);
                base.parse_element (/<cim:CurveData.y3value>([\s\S]*?)<\/cim:CurveData.y3value>/g, obj, "y3value", base.to_float, sub, context);
                base.parse_attribute (/<cim:CurveData.Curve\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Curve", sub, context);
                let bucket = context.parsed.CurveData;
                if (null == bucket)
                   context.parsed.CurveData = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "CurveData", "xvalue", "xvalue",  base.from_float, fields);
                base.export_element (obj, "CurveData", "y1value", "y1value",  base.from_float, fields);
                base.export_element (obj, "CurveData", "y2value", "y2value",  base.from_float, fields);
                base.export_element (obj, "CurveData", "y3value", "y3value",  base.from_float, fields);
                base.export_attribute (obj, "CurveData", "Curve", "Curve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CurveData_collapse" aria-expanded="true" aria-controls="CurveData_collapse" style="margin-left: 10px;">CurveData</a></legend>
                    <div id="CurveData_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#xvalue}}<div><b>xvalue</b>: {{xvalue}}</div>{{/xvalue}}
                    {{#y1value}}<div><b>y1value</b>: {{y1value}}</div>{{/y1value}}
                    {{#y2value}}<div><b>y2value</b>: {{y2value}}</div>{{/y2value}}
                    {{#y3value}}<div><b>y3value</b>: {{y3value}}</div>{{/y3value}}
                    {{#Curve}}<div><b>Curve</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Curve}}");}); return false;'>{{Curve}}</a></div>{{/Curve}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CurveData_collapse" aria-expanded="true" aria-controls="{{id}}_CurveData_collapse" style="margin-left: 10px;">CurveData</a></legend>
                    <div id="{{id}}_CurveData_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xvalue'>xvalue: </label><div class='col-sm-8'><input id='{{id}}_xvalue' class='form-control' type='text'{{#xvalue}} value='{{xvalue}}'{{/xvalue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_y1value'>y1value: </label><div class='col-sm-8'><input id='{{id}}_y1value' class='form-control' type='text'{{#y1value}} value='{{y1value}}'{{/y1value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_y2value'>y2value: </label><div class='col-sm-8'><input id='{{id}}_y2value' class='form-control' type='text'{{#y2value}} value='{{y2value}}'{{/y2value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_y3value'>y3value: </label><div class='col-sm-8'><input id='{{id}}_y3value' class='form-control' type='text'{{#y3value}} value='{{y3value}}'{{/y3value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Curve'>Curve: </label><div class='col-sm-8'><input id='{{id}}_Curve' class='form-control' type='text'{{#Curve}} value='{{Curve}}'{{/Curve}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CurveData" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_xvalue").value; if ("" !== temp) obj["xvalue"] = temp;
                temp = document.getElementById (id + "_y1value").value; if ("" !== temp) obj["y1value"] = temp;
                temp = document.getElementById (id + "_y2value").value; if ("" !== temp) obj["y2value"] = temp;
                temp = document.getElementById (id + "_y3value").value; if ("" !== temp) obj["y3value"] = temp;
                temp = document.getElementById (id + "_Curve").value; if ("" !== temp) obj["Curve"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Curve", "1", "0..*", "Curve", "CurveDatas"]
                        ]
                    )
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
                let bucket = cim_data.NameTypeAuthority;
                if (null == bucket)
                   cim_data.NameTypeAuthority = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.NameTypeAuthority[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "NameTypeAuthority";
                base.parse_element (/<cim:NameTypeAuthority.description>([\s\S]*?)<\/cim:NameTypeAuthority.description>/g, obj, "description", base.to_string, sub, context);
                base.parse_element (/<cim:NameTypeAuthority.name>([\s\S]*?)<\/cim:NameTypeAuthority.name>/g, obj, "name", base.to_string, sub, context);
                base.parse_attributes (/<cim:NameTypeAuthority.NameTypes\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "NameTypes", sub, context);
                let bucket = context.parsed.NameTypeAuthority;
                if (null == bucket)
                   context.parsed.NameTypeAuthority = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "NameTypeAuthority", "description", "description",  base.from_string, fields);
                base.export_element (obj, "NameTypeAuthority", "name", "name",  base.from_string, fields);
                base.export_attributes (obj, "NameTypeAuthority", "NameTypes", "NameTypes", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#NameTypeAuthority_collapse" aria-expanded="true" aria-controls="NameTypeAuthority_collapse" style="margin-left: 10px;">NameTypeAuthority</a></legend>
                    <div id="NameTypeAuthority_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#description}}<div><b>description</b>: {{description}}</div>{{/description}}
                    {{#name}}<div><b>name</b>: {{name}}</div>{{/name}}
                    {{#NameTypes}}<div><b>NameTypes</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/NameTypes}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["NameTypes"]) obj["NameTypes_string"] = obj["NameTypes"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["NameTypes_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_NameTypeAuthority_collapse" aria-expanded="true" aria-controls="{{id}}_NameTypeAuthority_collapse" style="margin-left: 10px;">NameTypeAuthority</a></legend>
                    <div id="{{id}}_NameTypeAuthority_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_description'>description: </label><div class='col-sm-8'><input id='{{id}}_description' class='form-control' type='text'{{#description}} value='{{description}}'{{/description}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_name'>name: </label><div class='col-sm-8'><input id='{{id}}_name' class='form-control' type='text'{{#name}} value='{{name}}'{{/name}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "NameTypeAuthority" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_description").value; if ("" !== temp) obj["description"] = temp;
                temp = document.getElementById (id + "_name").value; if ("" !== temp) obj["name"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["NameTypes", "0..*", "0..1", "NameType", "NameTypeAuthority"]
                        ]
                    )
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
                let bucket = cim_data.IrregularTimePoint;
                if (null == bucket)
                   cim_data.IrregularTimePoint = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.IrregularTimePoint[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "IrregularTimePoint";
                base.parse_element (/<cim:IrregularTimePoint.time>([\s\S]*?)<\/cim:IrregularTimePoint.time>/g, obj, "time", base.to_string, sub, context);
                base.parse_element (/<cim:IrregularTimePoint.value1>([\s\S]*?)<\/cim:IrregularTimePoint.value1>/g, obj, "value1", base.to_float, sub, context);
                base.parse_element (/<cim:IrregularTimePoint.value2>([\s\S]*?)<\/cim:IrregularTimePoint.value2>/g, obj, "value2", base.to_float, sub, context);
                base.parse_attribute (/<cim:IrregularTimePoint.IntervalSchedule\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "IntervalSchedule", sub, context);
                let bucket = context.parsed.IrregularTimePoint;
                if (null == bucket)
                   context.parsed.IrregularTimePoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "IrregularTimePoint", "time", "time",  base.from_string, fields);
                base.export_element (obj, "IrregularTimePoint", "value1", "value1",  base.from_float, fields);
                base.export_element (obj, "IrregularTimePoint", "value2", "value2",  base.from_float, fields);
                base.export_attribute (obj, "IrregularTimePoint", "IntervalSchedule", "IntervalSchedule", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#IrregularTimePoint_collapse" aria-expanded="true" aria-controls="IrregularTimePoint_collapse" style="margin-left: 10px;">IrregularTimePoint</a></legend>
                    <div id="IrregularTimePoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#time}}<div><b>time</b>: {{time}}</div>{{/time}}
                    {{#value1}}<div><b>value1</b>: {{value1}}</div>{{/value1}}
                    {{#value2}}<div><b>value2</b>: {{value2}}</div>{{/value2}}
                    {{#IntervalSchedule}}<div><b>IntervalSchedule</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{IntervalSchedule}}");}); return false;'>{{IntervalSchedule}}</a></div>{{/IntervalSchedule}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_IrregularTimePoint_collapse" aria-expanded="true" aria-controls="{{id}}_IrregularTimePoint_collapse" style="margin-left: 10px;">IrregularTimePoint</a></legend>
                    <div id="{{id}}_IrregularTimePoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_time'>time: </label><div class='col-sm-8'><input id='{{id}}_time' class='form-control' type='text'{{#time}} value='{{time}}'{{/time}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value1'>value1: </label><div class='col-sm-8'><input id='{{id}}_value1' class='form-control' type='text'{{#value1}} value='{{value1}}'{{/value1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value2'>value2: </label><div class='col-sm-8'><input id='{{id}}_value2' class='form-control' type='text'{{#value2}} value='{{value2}}'{{/value2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_IntervalSchedule'>IntervalSchedule: </label><div class='col-sm-8'><input id='{{id}}_IntervalSchedule' class='form-control' type='text'{{#IntervalSchedule}} value='{{IntervalSchedule}}'{{/IntervalSchedule}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "IrregularTimePoint" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_time").value; if ("" !== temp) obj["time"] = temp;
                temp = document.getElementById (id + "_value1").value; if ("" !== temp) obj["value1"] = temp;
                temp = document.getElementById (id + "_value2").value; if ("" !== temp) obj["value2"] = temp;
                temp = document.getElementById (id + "_IntervalSchedule").value; if ("" !== temp) obj["IntervalSchedule"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["IntervalSchedule", "1", "1..*", "IrregularIntervalSchedule", "TimePoints"]
                        ]
                    )
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
                let bucket = cim_data.IdentifiedObject;
                if (null == bucket)
                   cim_data.IdentifiedObject = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.IdentifiedObject[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "IdentifiedObject";
                base.parse_element (/<cim:IdentifiedObject.aliasName>([\s\S]*?)<\/cim:IdentifiedObject.aliasName>/g, obj, "aliasName", base.to_string, sub, context);
                base.parse_element (/<cim:IdentifiedObject.mRID>([\s\S]*?)<\/cim:IdentifiedObject.mRID>/g, obj, "mRID", base.to_string, sub, context);
                base.parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, obj, "name", base.to_string, sub, context);
                base.parse_element (/<cim:IdentifiedObject.description>([\s\S]*?)<\/cim:IdentifiedObject.description>/g, obj, "description", base.to_string, sub, context);
                base.parse_attributes (/<cim:IdentifiedObject.DiagramObjects\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DiagramObjects", sub, context);
                base.parse_attributes (/<cim:IdentifiedObject.Names\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Names", sub, context);
                base.parse_attribute (/<cim:IdentifiedObject.PropertiesCIMDataObject\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PropertiesCIMDataObject", sub, context);
                base.parse_attribute (/<cim:IdentifiedObject.InstanceSet\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "InstanceSet", sub, context);
                base.parse_attributes (/<cim:IdentifiedObject.TargetingCIMDataObject\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TargetingCIMDataObject", sub, context);


                if (null == obj.mRID)
                    obj.mRID = obj.id;
                if ((null != obj.mRID) && (obj.id !== obj.mRID))
                {
                    if ("undefined" !== typeof (console))
                        console.log ("***Warning*** rdf:ID !== mRID [" + obj.id + " !== " + obj.mRID + "]");
                    else
                        print ("***Warning*** rdf:ID !== mRID [" + obj.id + " !== " + obj.mRID + "]");
                    obj.id = obj.mRID;
                }
                let bucket = context.parsed.IdentifiedObject;
                if (null == bucket)
                   context.parsed.IdentifiedObject = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "IdentifiedObject", "aliasName", "aliasName",  base.from_string, fields);
                base.export_element (obj, "IdentifiedObject", "name", "name",  base.from_string, fields);
                base.export_element (obj, "IdentifiedObject", "description", "description",  base.from_string, fields);
                base.export_attributes (obj, "IdentifiedObject", "DiagramObjects", "DiagramObjects", fields);
                base.export_attributes (obj, "IdentifiedObject", "Names", "Names", fields);
                base.export_attribute (obj, "IdentifiedObject", "PropertiesCIMDataObject", "PropertiesCIMDataObject", fields);
                base.export_attribute (obj, "IdentifiedObject", "InstanceSet", "InstanceSet", fields);
                base.export_attributes (obj, "IdentifiedObject", "TargetingCIMDataObject", "TargetingCIMDataObject", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#IdentifiedObject_collapse" aria-expanded="true" aria-controls="IdentifiedObject_collapse" style="margin-left: 10px;">IdentifiedObject</a></legend>
                    <div id="IdentifiedObject_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#aliasName}}<div><b>aliasName</b>: {{aliasName}}</div>{{/aliasName}}
                    {{#mRID}}<div><b>mRID</b>: {{mRID}}</div>{{/mRID}}
                    {{#name}}<div><b>name</b>: {{name}}</div>{{/name}}
                    {{#description}}<div><b>description</b>: {{description}}</div>{{/description}}
                    {{#DiagramObjects}}<div><b>DiagramObjects</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/DiagramObjects}}
                    {{#Names}}<div><b>Names</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Names}}
                    {{#PropertiesCIMDataObject}}<div><b>PropertiesCIMDataObject</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{PropertiesCIMDataObject}}");}); return false;'>{{PropertiesCIMDataObject}}</a></div>{{/PropertiesCIMDataObject}}
                    {{#InstanceSet}}<div><b>InstanceSet</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{InstanceSet}}");}); return false;'>{{InstanceSet}}</a></div>{{/InstanceSet}}
                    {{#TargetingCIMDataObject}}<div><b>TargetingCIMDataObject</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TargetingCIMDataObject}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["DiagramObjects"]) obj["DiagramObjects_string"] = obj["DiagramObjects"].join ();
                if (obj["Names"]) obj["Names_string"] = obj["Names"].join ();
                if (obj["TargetingCIMDataObject"]) obj["TargetingCIMDataObject_string"] = obj["TargetingCIMDataObject"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["DiagramObjects_string"];
                delete obj["Names_string"];
                delete obj["TargetingCIMDataObject_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_IdentifiedObject_collapse" aria-expanded="true" aria-controls="{{id}}_IdentifiedObject_collapse" style="margin-left: 10px;">IdentifiedObject</a></legend>
                    <div id="{{id}}_IdentifiedObject_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_aliasName'>aliasName: </label><div class='col-sm-8'><input id='{{id}}_aliasName' class='form-control' type='text'{{#aliasName}} value='{{aliasName}}'{{/aliasName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mRID'>mRID: </label><div class='col-sm-8'><input id='{{id}}_mRID' class='form-control' type='text'{{#mRID}} value='{{mRID}}'{{/mRID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_name'>name: </label><div class='col-sm-8'><input id='{{id}}_name' class='form-control' type='text'{{#name}} value='{{name}}'{{/name}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_description'>description: </label><div class='col-sm-8'><input id='{{id}}_description' class='form-control' type='text'{{#description}} value='{{description}}'{{/description}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PropertiesCIMDataObject'>PropertiesCIMDataObject: </label><div class='col-sm-8'><input id='{{id}}_PropertiesCIMDataObject' class='form-control' type='text'{{#PropertiesCIMDataObject}} value='{{PropertiesCIMDataObject}}'{{/PropertiesCIMDataObject}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_InstanceSet'>InstanceSet: </label><div class='col-sm-8'><input id='{{id}}_InstanceSet' class='form-control' type='text'{{#InstanceSet}} value='{{InstanceSet}}'{{/InstanceSet}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "IdentifiedObject" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_aliasName").value; if ("" !== temp) obj["aliasName"] = temp;
                temp = document.getElementById (id + "_mRID").value; if ("" !== temp) obj["mRID"] = temp;
                temp = document.getElementById (id + "_name").value; if ("" !== temp) obj["name"] = temp;
                temp = document.getElementById (id + "_description").value; if ("" !== temp) obj["description"] = temp;
                temp = document.getElementById (id + "_PropertiesCIMDataObject").value; if ("" !== temp) obj["PropertiesCIMDataObject"] = temp;
                temp = document.getElementById (id + "_InstanceSet").value; if ("" !== temp) obj["InstanceSet"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["DiagramObjects", "0..*", "0..1", "DiagramObject", "IdentifiedObject"],
                            ["Names", "0..*", "1", "Name", "IdentifiedObject"],
                            ["PropertiesCIMDataObject", "0..1", "0..1", "ChangeSetMember", "PropertiesObject"],
                            ["InstanceSet", "1", "0..*", "InstanceSet", "InstanceSetMember"],
                            ["TargetingCIMDataObject", "0..*", "1", "ChangeSetMember", "TargetObject"]
                        ]
                    )
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
                let bucket = cim_data.Name;
                if (null == bucket)
                   cim_data.Name = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Name[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Name";
                base.parse_element (/<cim:Name.name>([\s\S]*?)<\/cim:Name.name>/g, obj, "name", base.to_string, sub, context);
                base.parse_attribute (/<cim:Name.IdentifiedObject\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "IdentifiedObject", sub, context);
                base.parse_attribute (/<cim:Name.NameType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "NameType", sub, context);
                let bucket = context.parsed.Name;
                if (null == bucket)
                   context.parsed.Name = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "Name", "name", "name",  base.from_string, fields);
                base.export_attribute (obj, "Name", "IdentifiedObject", "IdentifiedObject", fields);
                base.export_attribute (obj, "Name", "NameType", "NameType", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Name_collapse" aria-expanded="true" aria-controls="Name_collapse" style="margin-left: 10px;">Name</a></legend>
                    <div id="Name_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#name}}<div><b>name</b>: {{name}}</div>{{/name}}
                    {{#IdentifiedObject}}<div><b>IdentifiedObject</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{IdentifiedObject}}");}); return false;'>{{IdentifiedObject}}</a></div>{{/IdentifiedObject}}
                    {{#NameType}}<div><b>NameType</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{NameType}}");}); return false;'>{{NameType}}</a></div>{{/NameType}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Name_collapse" aria-expanded="true" aria-controls="{{id}}_Name_collapse" style="margin-left: 10px;">Name</a></legend>
                    <div id="{{id}}_Name_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_name'>name: </label><div class='col-sm-8'><input id='{{id}}_name' class='form-control' type='text'{{#name}} value='{{name}}'{{/name}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_IdentifiedObject'>IdentifiedObject: </label><div class='col-sm-8'><input id='{{id}}_IdentifiedObject' class='form-control' type='text'{{#IdentifiedObject}} value='{{IdentifiedObject}}'{{/IdentifiedObject}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_NameType'>NameType: </label><div class='col-sm-8'><input id='{{id}}_NameType' class='form-control' type='text'{{#NameType}} value='{{NameType}}'{{/NameType}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Name" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_name").value; if ("" !== temp) obj["name"] = temp;
                temp = document.getElementById (id + "_IdentifiedObject").value; if ("" !== temp) obj["IdentifiedObject"] = temp;
                temp = document.getElementById (id + "_NameType").value; if ("" !== temp) obj["NameType"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["IdentifiedObject", "1", "0..*", "IdentifiedObject", "Names"],
                            ["NameType", "1", "0..*", "NameType", "Names"]
                        ]
                    )
                );
            }
        }

        /**
         * Type of name.
         *
         * Possible values for attribute 'name' are implementation dependent but standard profiles may specify types. An enterprise may have multiple IT systems each having its own local name for the same object, e.g. a planning system may have different names from an EMS. An object may also have different names within the same IT system, e.g. localName as defined in CIM version 14. The definition from CIM14 is:
         * The localName is a human readable name of the object. It is a free text name local to a node in a naming hierarchy similar to a file directory structure. A power system related naming hierarchy may be: Substation, VoltageLevel, Equipment etc. Children of the same parent in such a hierarchy have names that typically are unique among them.
         *
         */
        class NameType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.NameType;
                if (null == bucket)
                   cim_data.NameType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.NameType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "NameType";
                base.parse_element (/<cim:NameType.description>([\s\S]*?)<\/cim:NameType.description>/g, obj, "description", base.to_string, sub, context);
                base.parse_element (/<cim:NameType.name>([\s\S]*?)<\/cim:NameType.name>/g, obj, "name", base.to_string, sub, context);
                base.parse_attribute (/<cim:NameType.NameTypeAuthority\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "NameTypeAuthority", sub, context);
                base.parse_attributes (/<cim:NameType.Names\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Names", sub, context);
                let bucket = context.parsed.NameType;
                if (null == bucket)
                   context.parsed.NameType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "NameType", "description", "description",  base.from_string, fields);
                base.export_element (obj, "NameType", "name", "name",  base.from_string, fields);
                base.export_attribute (obj, "NameType", "NameTypeAuthority", "NameTypeAuthority", fields);
                base.export_attributes (obj, "NameType", "Names", "Names", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#NameType_collapse" aria-expanded="true" aria-controls="NameType_collapse" style="margin-left: 10px;">NameType</a></legend>
                    <div id="NameType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#description}}<div><b>description</b>: {{description}}</div>{{/description}}
                    {{#name}}<div><b>name</b>: {{name}}</div>{{/name}}
                    {{#NameTypeAuthority}}<div><b>NameTypeAuthority</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{NameTypeAuthority}}");}); return false;'>{{NameTypeAuthority}}</a></div>{{/NameTypeAuthority}}
                    {{#Names}}<div><b>Names</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Names}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Names"]) obj["Names_string"] = obj["Names"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Names_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_NameType_collapse" aria-expanded="true" aria-controls="{{id}}_NameType_collapse" style="margin-left: 10px;">NameType</a></legend>
                    <div id="{{id}}_NameType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_description'>description: </label><div class='col-sm-8'><input id='{{id}}_description' class='form-control' type='text'{{#description}} value='{{description}}'{{/description}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_name'>name: </label><div class='col-sm-8'><input id='{{id}}_name' class='form-control' type='text'{{#name}} value='{{name}}'{{/name}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_NameTypeAuthority'>NameTypeAuthority: </label><div class='col-sm-8'><input id='{{id}}_NameTypeAuthority' class='form-control' type='text'{{#NameTypeAuthority}} value='{{NameTypeAuthority}}'{{/NameTypeAuthority}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "NameType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_description").value; if ("" !== temp) obj["description"] = temp;
                temp = document.getElementById (id + "_name").value; if ("" !== temp) obj["name"] = temp;
                temp = document.getElementById (id + "_NameTypeAuthority").value; if ("" !== temp) obj["NameTypeAuthority"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["NameTypeAuthority", "0..1", "0..*", "NameTypeAuthority", "NameTypes"],
                            ["Names", "0..*", "1", "Name", "NameType"]
                        ]
                    )
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
                let bucket = cim_data.BaseVoltage;
                if (null == bucket)
                   cim_data.BaseVoltage = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BaseVoltage[obj.id];
            }

            parse (context, sub)
            {
                let obj = IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "BaseVoltage";
                base.parse_element (/<cim:BaseVoltage.nominalVoltage>([\s\S]*?)<\/cim:BaseVoltage.nominalVoltage>/g, obj, "nominalVoltage", base.to_string, sub, context);
                base.parse_attributes (/<cim:BaseVoltage.ConductingEquipment\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ConductingEquipment", sub, context);
                base.parse_attributes (/<cim:BaseVoltage.TopologicalNode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TopologicalNode", sub, context);
                base.parse_attributes (/<cim:BaseVoltage.VoltageLevel\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "VoltageLevel", sub, context);
                base.parse_attributes (/<cim:BaseVoltage.NetworkAssetDeployment\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "NetworkAssetDeployment", sub, context);
                base.parse_attributes (/<cim:BaseVoltage.TransformerEnds\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TransformerEnds", sub, context);
                let bucket = context.parsed.BaseVoltage;
                if (null == bucket)
                   context.parsed.BaseVoltage = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "BaseVoltage", "nominalVoltage", "nominalVoltage",  base.from_string, fields);
                base.export_attributes (obj, "BaseVoltage", "ConductingEquipment", "ConductingEquipment", fields);
                base.export_attributes (obj, "BaseVoltage", "TopologicalNode", "TopologicalNode", fields);
                base.export_attributes (obj, "BaseVoltage", "VoltageLevel", "VoltageLevel", fields);
                base.export_attributes (obj, "BaseVoltage", "NetworkAssetDeployment", "NetworkAssetDeployment", fields);
                base.export_attributes (obj, "BaseVoltage", "TransformerEnds", "TransformerEnds", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#BaseVoltage_collapse" aria-expanded="true" aria-controls="BaseVoltage_collapse" style="margin-left: 10px;">BaseVoltage</a></legend>
                    <div id="BaseVoltage_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#nominalVoltage}}<div><b>nominalVoltage</b>: {{nominalVoltage}}</div>{{/nominalVoltage}}
                    {{#ConductingEquipment}}<div><b>ConductingEquipment</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ConductingEquipment}}
                    {{#TopologicalNode}}<div><b>TopologicalNode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TopologicalNode}}
                    {{#VoltageLevel}}<div><b>VoltageLevel</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/VoltageLevel}}
                    {{#NetworkAssetDeployment}}<div><b>NetworkAssetDeployment</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/NetworkAssetDeployment}}
                    {{#TransformerEnds}}<div><b>TransformerEnds</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TransformerEnds}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ConductingEquipment"]) obj["ConductingEquipment_string"] = obj["ConductingEquipment"].join ();
                if (obj["TopologicalNode"]) obj["TopologicalNode_string"] = obj["TopologicalNode"].join ();
                if (obj["VoltageLevel"]) obj["VoltageLevel_string"] = obj["VoltageLevel"].join ();
                if (obj["NetworkAssetDeployment"]) obj["NetworkAssetDeployment_string"] = obj["NetworkAssetDeployment"].join ();
                if (obj["TransformerEnds"]) obj["TransformerEnds_string"] = obj["TransformerEnds"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ConductingEquipment_string"];
                delete obj["TopologicalNode_string"];
                delete obj["VoltageLevel_string"];
                delete obj["NetworkAssetDeployment_string"];
                delete obj["TransformerEnds_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_BaseVoltage_collapse" aria-expanded="true" aria-controls="{{id}}_BaseVoltage_collapse" style="margin-left: 10px;">BaseVoltage</a></legend>
                    <div id="{{id}}_BaseVoltage_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_nominalVoltage'>nominalVoltage: </label><div class='col-sm-8'><input id='{{id}}_nominalVoltage' class='form-control' type='text'{{#nominalVoltage}} value='{{nominalVoltage}}'{{/nominalVoltage}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "BaseVoltage" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_nominalVoltage").value; if ("" !== temp) obj["nominalVoltage"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ConductingEquipment", "0..*", "0..1", "ConductingEquipment", "BaseVoltage"],
                            ["TopologicalNode", "0..*", "0..1", "TopologicalNode", "BaseVoltage"],
                            ["VoltageLevel", "0..*", "1", "VoltageLevel", "BaseVoltage"],
                            ["NetworkAssetDeployment", "0..*", "1", "AssetDeployment", "BaseVoltage"],
                            ["TransformerEnds", "0..*", "0..1", "TransformerEnd", "BaseVoltage"]
                        ]
                    )
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
                let bucket = cim_data.BasicIntervalSchedule;
                if (null == bucket)
                   cim_data.BasicIntervalSchedule = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BasicIntervalSchedule[obj.id];
            }

            parse (context, sub)
            {
                let obj = IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "BasicIntervalSchedule";
                base.parse_element (/<cim:BasicIntervalSchedule.startTime>([\s\S]*?)<\/cim:BasicIntervalSchedule.startTime>/g, obj, "startTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:BasicIntervalSchedule.value1Multiplier\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "value1Multiplier", sub, context);
                base.parse_attribute (/<cim:BasicIntervalSchedule.value1Unit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "value1Unit", sub, context);
                base.parse_attribute (/<cim:BasicIntervalSchedule.value2Multiplier\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "value2Multiplier", sub, context);
                base.parse_attribute (/<cim:BasicIntervalSchedule.value2Unit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "value2Unit", sub, context);
                let bucket = context.parsed.BasicIntervalSchedule;
                if (null == bucket)
                   context.parsed.BasicIntervalSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "BasicIntervalSchedule", "startTime", "startTime",  base.from_datetime, fields);
                base.export_attribute (obj, "BasicIntervalSchedule", "value1Multiplier", "value1Multiplier", fields);
                base.export_attribute (obj, "BasicIntervalSchedule", "value1Unit", "value1Unit", fields);
                base.export_attribute (obj, "BasicIntervalSchedule", "value2Multiplier", "value2Multiplier", fields);
                base.export_attribute (obj, "BasicIntervalSchedule", "value2Unit", "value2Unit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#BasicIntervalSchedule_collapse" aria-expanded="true" aria-controls="BasicIntervalSchedule_collapse" style="margin-left: 10px;">BasicIntervalSchedule</a></legend>
                    <div id="BasicIntervalSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#startTime}}<div><b>startTime</b>: {{startTime}}</div>{{/startTime}}
                    {{#value1Multiplier}}<div><b>value1Multiplier</b>: {{value1Multiplier}}</div>{{/value1Multiplier}}
                    {{#value1Unit}}<div><b>value1Unit</b>: {{value1Unit}}</div>{{/value1Unit}}
                    {{#value2Multiplier}}<div><b>value2Multiplier</b>: {{value2Multiplier}}</div>{{/value2Multiplier}}
                    {{#value2Unit}}<div><b>value2Unit</b>: {{value2Unit}}</div>{{/value2Unit}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["value1MultiplierUnitMultiplier"] = [{ id: '', selected: (!obj["value1Multiplier"])}]; for (let property in Domain.UnitMultiplier) obj["value1MultiplierUnitMultiplier"].push ({ id: property, selected: obj["value1Multiplier"] && obj["value1Multiplier"].endsWith ('.' + property)});
                obj["value1UnitUnitSymbol"] = [{ id: '', selected: (!obj["value1Unit"])}]; for (let property in Domain.UnitSymbol) obj["value1UnitUnitSymbol"].push ({ id: property, selected: obj["value1Unit"] && obj["value1Unit"].endsWith ('.' + property)});
                obj["value2MultiplierUnitMultiplier"] = [{ id: '', selected: (!obj["value2Multiplier"])}]; for (let property in Domain.UnitMultiplier) obj["value2MultiplierUnitMultiplier"].push ({ id: property, selected: obj["value2Multiplier"] && obj["value2Multiplier"].endsWith ('.' + property)});
                obj["value2UnitUnitSymbol"] = [{ id: '', selected: (!obj["value2Unit"])}]; for (let property in Domain.UnitSymbol) obj["value2UnitUnitSymbol"].push ({ id: property, selected: obj["value2Unit"] && obj["value2Unit"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["value1MultiplierUnitMultiplier"];
                delete obj["value1UnitUnitSymbol"];
                delete obj["value2MultiplierUnitMultiplier"];
                delete obj["value2UnitUnitSymbol"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_BasicIntervalSchedule_collapse" aria-expanded="true" aria-controls="{{id}}_BasicIntervalSchedule_collapse" style="margin-left: 10px;">BasicIntervalSchedule</a></legend>
                    <div id="{{id}}_BasicIntervalSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_startTime'>startTime: </label><div class='col-sm-8'><input id='{{id}}_startTime' class='form-control' type='text'{{#startTime}} value='{{startTime}}'{{/startTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value1Multiplier'>value1Multiplier: </label><div class='col-sm-8'><select id='{{id}}_value1Multiplier' class='form-control custom-select'>{{#value1MultiplierUnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/value1MultiplierUnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value1Unit'>value1Unit: </label><div class='col-sm-8'><select id='{{id}}_value1Unit' class='form-control custom-select'>{{#value1UnitUnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/value1UnitUnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value2Multiplier'>value2Multiplier: </label><div class='col-sm-8'><select id='{{id}}_value2Multiplier' class='form-control custom-select'>{{#value2MultiplierUnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/value2MultiplierUnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value2Unit'>value2Unit: </label><div class='col-sm-8'><select id='{{id}}_value2Unit' class='form-control custom-select'>{{#value2UnitUnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/value2UnitUnitSymbol}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "BasicIntervalSchedule" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_startTime").value; if ("" !== temp) obj["startTime"] = temp;
                temp = Domain.UnitMultiplier[document.getElementById (id + "_value1Multiplier").value]; if (temp) obj["value1Multiplier"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; else delete obj["value1Multiplier"];
                temp = Domain.UnitSymbol[document.getElementById (id + "_value1Unit").value]; if (temp) obj["value1Unit"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; else delete obj["value1Unit"];
                temp = Domain.UnitMultiplier[document.getElementById (id + "_value2Multiplier").value]; if (temp) obj["value2Multiplier"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; else delete obj["value2Multiplier"];
                temp = Domain.UnitSymbol[document.getElementById (id + "_value2Unit").value]; if (temp) obj["value2Unit"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; else delete obj["value2Unit"];

                return (obj);
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
                let bucket = cim_data.ReportingSuperGroup;
                if (null == bucket)
                   cim_data.ReportingSuperGroup = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ReportingSuperGroup[obj.id];
            }

            parse (context, sub)
            {
                let obj = IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ReportingSuperGroup";
                base.parse_attributes (/<cim:ReportingSuperGroup.ReportingGroup\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ReportingGroup", sub, context);
                let bucket = context.parsed.ReportingSuperGroup;
                if (null == bucket)
                   context.parsed.ReportingSuperGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ReportingSuperGroup", "ReportingGroup", "ReportingGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ReportingSuperGroup_collapse" aria-expanded="true" aria-controls="ReportingSuperGroup_collapse" style="margin-left: 10px;">ReportingSuperGroup</a></legend>
                    <div id="ReportingSuperGroup_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#ReportingGroup}}<div><b>ReportingGroup</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ReportingGroup}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ReportingGroup"]) obj["ReportingGroup_string"] = obj["ReportingGroup"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ReportingGroup_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ReportingSuperGroup_collapse" aria-expanded="true" aria-controls="{{id}}_ReportingSuperGroup_collapse" style="margin-left: 10px;">ReportingSuperGroup</a></legend>
                    <div id="{{id}}_ReportingSuperGroup_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "ReportingSuperGroup" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ReportingGroup", "0..*", "0..1", "ReportingGroup", "ReportingSuperGroup"]
                        ]
                    )
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
                let bucket = cim_data.ConnectivityNode;
                if (null == bucket)
                   cim_data.ConnectivityNode = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ConnectivityNode[obj.id];
            }

            parse (context, sub)
            {
                let obj = IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ConnectivityNode";
                base.parse_attribute (/<cim:ConnectivityNode.TopologicalNode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TopologicalNode", sub, context);
                base.parse_attributes (/<cim:ConnectivityNode.Terminals\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Terminals", sub, context);
                base.parse_attribute (/<cim:ConnectivityNode.ConnectivityNodeContainer\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ConnectivityNodeContainer", sub, context);
                let bucket = context.parsed.ConnectivityNode;
                if (null == bucket)
                   context.parsed.ConnectivityNode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ConnectivityNode", "TopologicalNode", "TopologicalNode", fields);
                base.export_attributes (obj, "ConnectivityNode", "Terminals", "Terminals", fields);
                base.export_attribute (obj, "ConnectivityNode", "ConnectivityNodeContainer", "ConnectivityNodeContainer", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ConnectivityNode_collapse" aria-expanded="true" aria-controls="ConnectivityNode_collapse" style="margin-left: 10px;">ConnectivityNode</a></legend>
                    <div id="ConnectivityNode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#TopologicalNode}}<div><b>TopologicalNode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{TopologicalNode}}");}); return false;'>{{TopologicalNode}}</a></div>{{/TopologicalNode}}
                    {{#Terminals}}<div><b>Terminals</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Terminals}}
                    {{#ConnectivityNodeContainer}}<div><b>ConnectivityNodeContainer</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ConnectivityNodeContainer}}");}); return false;'>{{ConnectivityNodeContainer}}</a></div>{{/ConnectivityNodeContainer}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Terminals"]) obj["Terminals_string"] = obj["Terminals"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Terminals_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ConnectivityNode_collapse" aria-expanded="true" aria-controls="{{id}}_ConnectivityNode_collapse" style="margin-left: 10px;">ConnectivityNode</a></legend>
                    <div id="{{id}}_ConnectivityNode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TopologicalNode'>TopologicalNode: </label><div class='col-sm-8'><input id='{{id}}_TopologicalNode' class='form-control' type='text'{{#TopologicalNode}} value='{{TopologicalNode}}'{{/TopologicalNode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ConnectivityNodeContainer'>ConnectivityNodeContainer: </label><div class='col-sm-8'><input id='{{id}}_ConnectivityNodeContainer' class='form-control' type='text'{{#ConnectivityNodeContainer}} value='{{ConnectivityNodeContainer}}'{{/ConnectivityNodeContainer}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ConnectivityNode" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_TopologicalNode").value; if ("" !== temp) obj["TopologicalNode"] = temp;
                temp = document.getElementById (id + "_ConnectivityNodeContainer").value; if ("" !== temp) obj["ConnectivityNodeContainer"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TopologicalNode", "0..1", "0..*", "TopologicalNode", "ConnectivityNodes"],
                            ["Terminals", "0..*", "0..1", "Terminal", "ConnectivityNode"],
                            ["ConnectivityNodeContainer", "1", "0..*", "ConnectivityNodeContainer", "ConnectivityNodes"]
                        ]
                    )
                );
            }
        }

        /**
         * A power system resource (PSR) can be an item of equipment such as a switch, an equipment container containing many individual items of equipment such as a substation, or an organisational entity such as sub-control area.
         *
         * Power system resources can have measurements associated.
         *
         */
        class PowerSystemResource extends IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PowerSystemResource;
                if (null == bucket)
                   cim_data.PowerSystemResource = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PowerSystemResource[obj.id];
            }

            parse (context, sub)
            {
                let obj = IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "PowerSystemResource";
                base.parse_attributes (/<cim:PowerSystemResource.PSREvents\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PSREvents", sub, context);
                base.parse_attribute (/<cim:PowerSystemResource.PSRType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PSRType", sub, context);
                base.parse_attributes (/<cim:PowerSystemResource.ReportingGroup\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ReportingGroup", sub, context);
                base.parse_attributes (/<cim:PowerSystemResource.Controls\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Controls", sub, context);
                base.parse_attributes (/<cim:PowerSystemResource.Assets\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Assets", sub, context);
                base.parse_attribute (/<cim:PowerSystemResource.AssetDatasheet\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AssetDatasheet", sub, context);
                base.parse_attributes (/<cim:PowerSystemResource.Measurements\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Measurements", sub, context);
                base.parse_attributes (/<cim:PowerSystemResource.Clearances\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Clearances", sub, context);
                base.parse_attributes (/<cim:PowerSystemResource.VerificationAction\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "VerificationAction", sub, context);
                base.parse_attributes (/<cim:PowerSystemResource.OperationalTags\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OperationalTags", sub, context);
                base.parse_attributes (/<cim:PowerSystemResource.OperatingShare\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OperatingShare", sub, context);
                base.parse_attributes (/<cim:PowerSystemResource.ConfigurationEvent\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ConfigurationEvent", sub, context);
                base.parse_attributes (/<cim:PowerSystemResource.GenericAction\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GenericAction", sub, context);
                base.parse_attribute (/<cim:PowerSystemResource.Location\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Location", sub, context);
                let bucket = context.parsed.PowerSystemResource;
                if (null == bucket)
                   context.parsed.PowerSystemResource = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "PowerSystemResource", "PSREvents", "PSREvents", fields);
                base.export_attribute (obj, "PowerSystemResource", "PSRType", "PSRType", fields);
                base.export_attributes (obj, "PowerSystemResource", "ReportingGroup", "ReportingGroup", fields);
                base.export_attributes (obj, "PowerSystemResource", "Controls", "Controls", fields);
                base.export_attributes (obj, "PowerSystemResource", "Assets", "Assets", fields);
                base.export_attribute (obj, "PowerSystemResource", "AssetDatasheet", "AssetDatasheet", fields);
                base.export_attributes (obj, "PowerSystemResource", "Measurements", "Measurements", fields);
                base.export_attributes (obj, "PowerSystemResource", "Clearances", "Clearances", fields);
                base.export_attributes (obj, "PowerSystemResource", "VerificationAction", "VerificationAction", fields);
                base.export_attributes (obj, "PowerSystemResource", "OperationalTags", "OperationalTags", fields);
                base.export_attributes (obj, "PowerSystemResource", "OperatingShare", "OperatingShare", fields);
                base.export_attributes (obj, "PowerSystemResource", "ConfigurationEvent", "ConfigurationEvent", fields);
                base.export_attributes (obj, "PowerSystemResource", "GenericAction", "GenericAction", fields);
                base.export_attribute (obj, "PowerSystemResource", "Location", "Location", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PowerSystemResource_collapse" aria-expanded="true" aria-controls="PowerSystemResource_collapse" style="margin-left: 10px;">PowerSystemResource</a></legend>
                    <div id="PowerSystemResource_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#PSREvents}}<div><b>PSREvents</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/PSREvents}}
                    {{#PSRType}}<div><b>PSRType</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{PSRType}}");}); return false;'>{{PSRType}}</a></div>{{/PSRType}}
                    {{#ReportingGroup}}<div><b>ReportingGroup</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ReportingGroup}}
                    {{#Controls}}<div><b>Controls</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Controls}}
                    {{#Assets}}<div><b>Assets</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Assets}}
                    {{#AssetDatasheet}}<div><b>AssetDatasheet</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{AssetDatasheet}}");}); return false;'>{{AssetDatasheet}}</a></div>{{/AssetDatasheet}}
                    {{#Measurements}}<div><b>Measurements</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Measurements}}
                    {{#Clearances}}<div><b>Clearances</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Clearances}}
                    {{#VerificationAction}}<div><b>VerificationAction</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/VerificationAction}}
                    {{#OperationalTags}}<div><b>OperationalTags</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/OperationalTags}}
                    {{#OperatingShare}}<div><b>OperatingShare</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/OperatingShare}}
                    {{#ConfigurationEvent}}<div><b>ConfigurationEvent</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ConfigurationEvent}}
                    {{#GenericAction}}<div><b>GenericAction</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/GenericAction}}
                    {{#Location}}<div><b>Location</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Location}}");}); return false;'>{{Location}}</a></div>{{/Location}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["PSREvents"]) obj["PSREvents_string"] = obj["PSREvents"].join ();
                if (obj["ReportingGroup"]) obj["ReportingGroup_string"] = obj["ReportingGroup"].join ();
                if (obj["Controls"]) obj["Controls_string"] = obj["Controls"].join ();
                if (obj["Assets"]) obj["Assets_string"] = obj["Assets"].join ();
                if (obj["Measurements"]) obj["Measurements_string"] = obj["Measurements"].join ();
                if (obj["Clearances"]) obj["Clearances_string"] = obj["Clearances"].join ();
                if (obj["VerificationAction"]) obj["VerificationAction_string"] = obj["VerificationAction"].join ();
                if (obj["OperationalTags"]) obj["OperationalTags_string"] = obj["OperationalTags"].join ();
                if (obj["OperatingShare"]) obj["OperatingShare_string"] = obj["OperatingShare"].join ();
                if (obj["ConfigurationEvent"]) obj["ConfigurationEvent_string"] = obj["ConfigurationEvent"].join ();
                if (obj["GenericAction"]) obj["GenericAction_string"] = obj["GenericAction"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["PSREvents_string"];
                delete obj["ReportingGroup_string"];
                delete obj["Controls_string"];
                delete obj["Assets_string"];
                delete obj["Measurements_string"];
                delete obj["Clearances_string"];
                delete obj["VerificationAction_string"];
                delete obj["OperationalTags_string"];
                delete obj["OperatingShare_string"];
                delete obj["ConfigurationEvent_string"];
                delete obj["GenericAction_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PowerSystemResource_collapse" aria-expanded="true" aria-controls="{{id}}_PowerSystemResource_collapse" style="margin-left: 10px;">PowerSystemResource</a></legend>
                    <div id="{{id}}_PowerSystemResource_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PSRType'>PSRType: </label><div class='col-sm-8'><input id='{{id}}_PSRType' class='form-control' type='text'{{#PSRType}} value='{{PSRType}}'{{/PSRType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ReportingGroup'>ReportingGroup: </label><div class='col-sm-8'><input id='{{id}}_ReportingGroup' class='form-control' type='text'{{#ReportingGroup}} value='{{ReportingGroup_string}}'{{/ReportingGroup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Assets'>Assets: </label><div class='col-sm-8'><input id='{{id}}_Assets' class='form-control' type='text'{{#Assets}} value='{{Assets_string}}'{{/Assets}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AssetDatasheet'>AssetDatasheet: </label><div class='col-sm-8'><input id='{{id}}_AssetDatasheet' class='form-control' type='text'{{#AssetDatasheet}} value='{{AssetDatasheet}}'{{/AssetDatasheet}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Clearances'>Clearances: </label><div class='col-sm-8'><input id='{{id}}_Clearances' class='form-control' type='text'{{#Clearances}} value='{{Clearances_string}}'{{/Clearances}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Location'>Location: </label><div class='col-sm-8'><input id='{{id}}_Location' class='form-control' type='text'{{#Location}} value='{{Location}}'{{/Location}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PowerSystemResource" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_PSRType").value; if ("" !== temp) obj["PSRType"] = temp;
                temp = document.getElementById (id + "_ReportingGroup").value; if ("" !== temp) obj["ReportingGroup"] = temp.split (",");
                temp = document.getElementById (id + "_Assets").value; if ("" !== temp) obj["Assets"] = temp.split (",");
                temp = document.getElementById (id + "_AssetDatasheet").value; if ("" !== temp) obj["AssetDatasheet"] = temp;
                temp = document.getElementById (id + "_Clearances").value; if ("" !== temp) obj["Clearances"] = temp.split (",");
                temp = document.getElementById (id + "_Location").value; if ("" !== temp) obj["Location"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PSREvents", "0..*", "0..1", "PSREvent", "PowerSystemResource"],
                            ["PSRType", "0..1", "0..*", "PSRType", "PowerSystemResources"],
                            ["ReportingGroup", "0..*", "0..*", "ReportingGroup", "PowerSystemResource"],
                            ["Controls", "0..*", "0..1", "Control", "PowerSystemResource"],
                            ["Assets", "0..*", "0..*", "Asset", "PowerSystemResources"],
                            ["AssetDatasheet", "0..1", "0..*", "AssetInfo", "PowerSystemResources"],
                            ["Measurements", "0..*", "0..1", "Measurement", "PowerSystemResource"],
                            ["Clearances", "0..*", "0..*", "ClearanceDocument", "TaggedPSRs"],
                            ["VerificationAction", "0..*", "0..1", "VerificationAction", "PowerSystemResource"],
                            ["OperationalTags", "0..*", "0..1", "OperationalTag", "PowerSystemResource"],
                            ["OperatingShare", "0..*", "1", "OperatingShare", "PowerSystemResource"],
                            ["ConfigurationEvent", "0..*", "0..1", "ConfigurationEvent", "PowerSystemResource"],
                            ["GenericAction", "0..*", "0..1", "GenericAction", "PowerSystemResource"],
                            ["Location", "0..1", "0..*", "Location", "PowerSystemResources"]
                        ]
                    )
                );
            }
        }

        /**
         * The BaseFrequency class describes a base frequency for a power system network.
         *
         * In case of multiple power networks with different frequencies, e.g. 50 Hz or 60 Hz each network will have its own base frequency class. Hence it is assumed that power system objects having different base frequencies appear in separate documents where each document has a single base frequency instance.
         *
         */
        class BaseFrequency extends IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.BaseFrequency;
                if (null == bucket)
                   cim_data.BaseFrequency = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BaseFrequency[obj.id];
            }

            parse (context, sub)
            {
                let obj = IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "BaseFrequency";
                base.parse_element (/<cim:BaseFrequency.frequency>([\s\S]*?)<\/cim:BaseFrequency.frequency>/g, obj, "frequency", base.to_string, sub, context);
                let bucket = context.parsed.BaseFrequency;
                if (null == bucket)
                   context.parsed.BaseFrequency = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "BaseFrequency", "frequency", "frequency",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#BaseFrequency_collapse" aria-expanded="true" aria-controls="BaseFrequency_collapse" style="margin-left: 10px;">BaseFrequency</a></legend>
                    <div id="BaseFrequency_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#frequency}}<div><b>frequency</b>: {{frequency}}</div>{{/frequency}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_BaseFrequency_collapse" aria-expanded="true" aria-controls="{{id}}_BaseFrequency_collapse" style="margin-left: 10px;">BaseFrequency</a></legend>
                    <div id="{{id}}_BaseFrequency_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_frequency'>frequency: </label><div class='col-sm-8'><input id='{{id}}_frequency' class='form-control' type='text'{{#frequency}} value='{{frequency}}'{{/frequency}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "BaseFrequency" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_frequency").value; if ("" !== temp) obj["frequency"] = temp;

                return (obj);
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
                let bucket = cim_data.Curve;
                if (null == bucket)
                   cim_data.Curve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Curve[obj.id];
            }

            parse (context, sub)
            {
                let obj = IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Curve";
                base.parse_attribute (/<cim:Curve.curveStyle\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "curveStyle", sub, context);
                base.parse_attribute (/<cim:Curve.xMultiplier\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "xMultiplier", sub, context);
                base.parse_attribute (/<cim:Curve.xUnit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "xUnit", sub, context);
                base.parse_attribute (/<cim:Curve.y1Multiplier\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "y1Multiplier", sub, context);
                base.parse_attribute (/<cim:Curve.y1Unit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "y1Unit", sub, context);
                base.parse_attribute (/<cim:Curve.y2Multiplier\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "y2Multiplier", sub, context);
                base.parse_attribute (/<cim:Curve.y2Unit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "y2Unit", sub, context);
                base.parse_attribute (/<cim:Curve.y3Multiplier\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "y3Multiplier", sub, context);
                base.parse_attribute (/<cim:Curve.y3Unit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "y3Unit", sub, context);
                base.parse_attributes (/<cim:Curve.CurveDatas\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CurveDatas", sub, context);
                let bucket = context.parsed.Curve;
                if (null == bucket)
                   context.parsed.Curve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Curve", "curveStyle", "curveStyle", fields);
                base.export_attribute (obj, "Curve", "xMultiplier", "xMultiplier", fields);
                base.export_attribute (obj, "Curve", "xUnit", "xUnit", fields);
                base.export_attribute (obj, "Curve", "y1Multiplier", "y1Multiplier", fields);
                base.export_attribute (obj, "Curve", "y1Unit", "y1Unit", fields);
                base.export_attribute (obj, "Curve", "y2Multiplier", "y2Multiplier", fields);
                base.export_attribute (obj, "Curve", "y2Unit", "y2Unit", fields);
                base.export_attribute (obj, "Curve", "y3Multiplier", "y3Multiplier", fields);
                base.export_attribute (obj, "Curve", "y3Unit", "y3Unit", fields);
                base.export_attributes (obj, "Curve", "CurveDatas", "CurveDatas", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Curve_collapse" aria-expanded="true" aria-controls="Curve_collapse" style="margin-left: 10px;">Curve</a></legend>
                    <div id="Curve_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    {{#CurveDatas}}<div><b>CurveDatas</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CurveDatas}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["curveStyleCurveStyle"] = [{ id: '', selected: (!obj["curveStyle"])}]; for (let property in CurveStyle) obj["curveStyleCurveStyle"].push ({ id: property, selected: obj["curveStyle"] && obj["curveStyle"].endsWith ('.' + property)});
                obj["xMultiplierUnitMultiplier"] = [{ id: '', selected: (!obj["xMultiplier"])}]; for (let property in Domain.UnitMultiplier) obj["xMultiplierUnitMultiplier"].push ({ id: property, selected: obj["xMultiplier"] && obj["xMultiplier"].endsWith ('.' + property)});
                obj["xUnitUnitSymbol"] = [{ id: '', selected: (!obj["xUnit"])}]; for (let property in Domain.UnitSymbol) obj["xUnitUnitSymbol"].push ({ id: property, selected: obj["xUnit"] && obj["xUnit"].endsWith ('.' + property)});
                obj["y1MultiplierUnitMultiplier"] = [{ id: '', selected: (!obj["y1Multiplier"])}]; for (let property in Domain.UnitMultiplier) obj["y1MultiplierUnitMultiplier"].push ({ id: property, selected: obj["y1Multiplier"] && obj["y1Multiplier"].endsWith ('.' + property)});
                obj["y1UnitUnitSymbol"] = [{ id: '', selected: (!obj["y1Unit"])}]; for (let property in Domain.UnitSymbol) obj["y1UnitUnitSymbol"].push ({ id: property, selected: obj["y1Unit"] && obj["y1Unit"].endsWith ('.' + property)});
                obj["y2MultiplierUnitMultiplier"] = [{ id: '', selected: (!obj["y2Multiplier"])}]; for (let property in Domain.UnitMultiplier) obj["y2MultiplierUnitMultiplier"].push ({ id: property, selected: obj["y2Multiplier"] && obj["y2Multiplier"].endsWith ('.' + property)});
                obj["y2UnitUnitSymbol"] = [{ id: '', selected: (!obj["y2Unit"])}]; for (let property in Domain.UnitSymbol) obj["y2UnitUnitSymbol"].push ({ id: property, selected: obj["y2Unit"] && obj["y2Unit"].endsWith ('.' + property)});
                obj["y3MultiplierUnitMultiplier"] = [{ id: '', selected: (!obj["y3Multiplier"])}]; for (let property in Domain.UnitMultiplier) obj["y3MultiplierUnitMultiplier"].push ({ id: property, selected: obj["y3Multiplier"] && obj["y3Multiplier"].endsWith ('.' + property)});
                obj["y3UnitUnitSymbol"] = [{ id: '', selected: (!obj["y3Unit"])}]; for (let property in Domain.UnitSymbol) obj["y3UnitUnitSymbol"].push ({ id: property, selected: obj["y3Unit"] && obj["y3Unit"].endsWith ('.' + property)});
                if (obj["CurveDatas"]) obj["CurveDatas_string"] = obj["CurveDatas"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["curveStyleCurveStyle"];
                delete obj["xMultiplierUnitMultiplier"];
                delete obj["xUnitUnitSymbol"];
                delete obj["y1MultiplierUnitMultiplier"];
                delete obj["y1UnitUnitSymbol"];
                delete obj["y2MultiplierUnitMultiplier"];
                delete obj["y2UnitUnitSymbol"];
                delete obj["y3MultiplierUnitMultiplier"];
                delete obj["y3UnitUnitSymbol"];
                delete obj["CurveDatas_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Curve_collapse" aria-expanded="true" aria-controls="{{id}}_Curve_collapse" style="margin-left: 10px;">Curve</a></legend>
                    <div id="{{id}}_Curve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_curveStyle'>curveStyle: </label><div class='col-sm-8'><select id='{{id}}_curveStyle' class='form-control custom-select'>{{#curveStyleCurveStyle}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/curveStyleCurveStyle}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xMultiplier'>xMultiplier: </label><div class='col-sm-8'><select id='{{id}}_xMultiplier' class='form-control custom-select'>{{#xMultiplierUnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/xMultiplierUnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xUnit'>xUnit: </label><div class='col-sm-8'><select id='{{id}}_xUnit' class='form-control custom-select'>{{#xUnitUnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/xUnitUnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_y1Multiplier'>y1Multiplier: </label><div class='col-sm-8'><select id='{{id}}_y1Multiplier' class='form-control custom-select'>{{#y1MultiplierUnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/y1MultiplierUnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_y1Unit'>y1Unit: </label><div class='col-sm-8'><select id='{{id}}_y1Unit' class='form-control custom-select'>{{#y1UnitUnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/y1UnitUnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_y2Multiplier'>y2Multiplier: </label><div class='col-sm-8'><select id='{{id}}_y2Multiplier' class='form-control custom-select'>{{#y2MultiplierUnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/y2MultiplierUnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_y2Unit'>y2Unit: </label><div class='col-sm-8'><select id='{{id}}_y2Unit' class='form-control custom-select'>{{#y2UnitUnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/y2UnitUnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_y3Multiplier'>y3Multiplier: </label><div class='col-sm-8'><select id='{{id}}_y3Multiplier' class='form-control custom-select'>{{#y3MultiplierUnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/y3MultiplierUnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_y3Unit'>y3Unit: </label><div class='col-sm-8'><select id='{{id}}_y3Unit' class='form-control custom-select'>{{#y3UnitUnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/y3UnitUnitSymbol}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Curve" };
                super.submit (id, obj);
                temp = CurveStyle[document.getElementById (id + "_curveStyle").value]; if (temp) obj["curveStyle"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#CurveStyle." + temp; else delete obj["curveStyle"];
                temp = Domain.UnitMultiplier[document.getElementById (id + "_xMultiplier").value]; if (temp) obj["xMultiplier"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; else delete obj["xMultiplier"];
                temp = Domain.UnitSymbol[document.getElementById (id + "_xUnit").value]; if (temp) obj["xUnit"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; else delete obj["xUnit"];
                temp = Domain.UnitMultiplier[document.getElementById (id + "_y1Multiplier").value]; if (temp) obj["y1Multiplier"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; else delete obj["y1Multiplier"];
                temp = Domain.UnitSymbol[document.getElementById (id + "_y1Unit").value]; if (temp) obj["y1Unit"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; else delete obj["y1Unit"];
                temp = Domain.UnitMultiplier[document.getElementById (id + "_y2Multiplier").value]; if (temp) obj["y2Multiplier"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; else delete obj["y2Multiplier"];
                temp = Domain.UnitSymbol[document.getElementById (id + "_y2Unit").value]; if (temp) obj["y2Unit"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; else delete obj["y2Unit"];
                temp = Domain.UnitMultiplier[document.getElementById (id + "_y3Multiplier").value]; if (temp) obj["y3Multiplier"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; else delete obj["y3Multiplier"];
                temp = Domain.UnitSymbol[document.getElementById (id + "_y3Unit").value]; if (temp) obj["y3Unit"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; else delete obj["y3Unit"];

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CurveDatas", "0..*", "1", "CurveData", "Curve"]
                        ]
                    )
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
                let bucket = cim_data.SubGeographicalRegion;
                if (null == bucket)
                   cim_data.SubGeographicalRegion = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SubGeographicalRegion[obj.id];
            }

            parse (context, sub)
            {
                let obj = IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "SubGeographicalRegion";
                base.parse_attribute (/<cim:SubGeographicalRegion.Region\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Region", sub, context);
                base.parse_attributes (/<cim:SubGeographicalRegion.DCLines\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DCLines", sub, context);
                base.parse_attributes (/<cim:SubGeographicalRegion.Lines\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Lines", sub, context);
                base.parse_attributes (/<cim:SubGeographicalRegion.Substations\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Substations", sub, context);
                let bucket = context.parsed.SubGeographicalRegion;
                if (null == bucket)
                   context.parsed.SubGeographicalRegion = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "SubGeographicalRegion", "Region", "Region", fields);
                base.export_attributes (obj, "SubGeographicalRegion", "DCLines", "DCLines", fields);
                base.export_attributes (obj, "SubGeographicalRegion", "Lines", "Lines", fields);
                base.export_attributes (obj, "SubGeographicalRegion", "Substations", "Substations", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SubGeographicalRegion_collapse" aria-expanded="true" aria-controls="SubGeographicalRegion_collapse" style="margin-left: 10px;">SubGeographicalRegion</a></legend>
                    <div id="SubGeographicalRegion_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#Region}}<div><b>Region</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Region}}");}); return false;'>{{Region}}</a></div>{{/Region}}
                    {{#DCLines}}<div><b>DCLines</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/DCLines}}
                    {{#Lines}}<div><b>Lines</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Lines}}
                    {{#Substations}}<div><b>Substations</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Substations}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["DCLines"]) obj["DCLines_string"] = obj["DCLines"].join ();
                if (obj["Lines"]) obj["Lines_string"] = obj["Lines"].join ();
                if (obj["Substations"]) obj["Substations_string"] = obj["Substations"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["DCLines_string"];
                delete obj["Lines_string"];
                delete obj["Substations_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SubGeographicalRegion_collapse" aria-expanded="true" aria-controls="{{id}}_SubGeographicalRegion_collapse" style="margin-left: 10px;">SubGeographicalRegion</a></legend>
                    <div id="{{id}}_SubGeographicalRegion_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Region'>Region: </label><div class='col-sm-8'><input id='{{id}}_Region' class='form-control' type='text'{{#Region}} value='{{Region}}'{{/Region}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SubGeographicalRegion" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Region").value; if ("" !== temp) obj["Region"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Region", "0..1", "0..*", "GeographicalRegion", "Regions"],
                            ["DCLines", "0..*", "0..1", "DCLine", "Region"],
                            ["Lines", "0..*", "0..1", "Line", "Region"],
                            ["Substations", "0..*", "0..1", "Substation", "Region"]
                        ]
                    )
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
                let bucket = cim_data.BasePower;
                if (null == bucket)
                   cim_data.BasePower = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BasePower[obj.id];
            }

            parse (context, sub)
            {
                let obj = IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "BasePower";
                base.parse_element (/<cim:BasePower.basePower>([\s\S]*?)<\/cim:BasePower.basePower>/g, obj, "basePower", base.to_string, sub, context);
                let bucket = context.parsed.BasePower;
                if (null == bucket)
                   context.parsed.BasePower = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "BasePower", "basePower", "basePower",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#BasePower_collapse" aria-expanded="true" aria-controls="BasePower_collapse" style="margin-left: 10px;">BasePower</a></legend>
                    <div id="BasePower_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#basePower}}<div><b>basePower</b>: {{basePower}}</div>{{/basePower}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_BasePower_collapse" aria-expanded="true" aria-controls="{{id}}_BasePower_collapse" style="margin-left: 10px;">BasePower</a></legend>
                    <div id="{{id}}_BasePower_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_basePower'>basePower: </label><div class='col-sm-8'><input id='{{id}}_basePower' class='form-control' type='text'{{#basePower}} value='{{basePower}}'{{/basePower}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "BasePower" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_basePower").value; if ("" !== temp) obj["basePower"] = temp;

                return (obj);
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
                let bucket = cim_data.ReportingGroup;
                if (null == bucket)
                   cim_data.ReportingGroup = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ReportingGroup[obj.id];
            }

            parse (context, sub)
            {
                let obj = IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ReportingGroup";
                base.parse_attributes (/<cim:ReportingGroup.PowerSystemResource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemResource", sub, context);
                base.parse_attributes (/<cim:ReportingGroup.BusNameMarker\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BusNameMarker", sub, context);
                base.parse_attributes (/<cim:ReportingGroup.TopologicalNode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TopologicalNode", sub, context);
                base.parse_attribute (/<cim:ReportingGroup.ReportingSuperGroup\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ReportingSuperGroup", sub, context);
                let bucket = context.parsed.ReportingGroup;
                if (null == bucket)
                   context.parsed.ReportingGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ReportingGroup", "PowerSystemResource", "PowerSystemResource", fields);
                base.export_attributes (obj, "ReportingGroup", "BusNameMarker", "BusNameMarker", fields);
                base.export_attributes (obj, "ReportingGroup", "TopologicalNode", "TopologicalNode", fields);
                base.export_attribute (obj, "ReportingGroup", "ReportingSuperGroup", "ReportingSuperGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ReportingGroup_collapse" aria-expanded="true" aria-controls="ReportingGroup_collapse" style="margin-left: 10px;">ReportingGroup</a></legend>
                    <div id="ReportingGroup_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#PowerSystemResource}}<div><b>PowerSystemResource</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/PowerSystemResource}}
                    {{#BusNameMarker}}<div><b>BusNameMarker</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/BusNameMarker}}
                    {{#TopologicalNode}}<div><b>TopologicalNode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TopologicalNode}}
                    {{#ReportingSuperGroup}}<div><b>ReportingSuperGroup</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ReportingSuperGroup}}");}); return false;'>{{ReportingSuperGroup}}</a></div>{{/ReportingSuperGroup}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["PowerSystemResource"]) obj["PowerSystemResource_string"] = obj["PowerSystemResource"].join ();
                if (obj["BusNameMarker"]) obj["BusNameMarker_string"] = obj["BusNameMarker"].join ();
                if (obj["TopologicalNode"]) obj["TopologicalNode_string"] = obj["TopologicalNode"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["PowerSystemResource_string"];
                delete obj["BusNameMarker_string"];
                delete obj["TopologicalNode_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ReportingGroup_collapse" aria-expanded="true" aria-controls="{{id}}_ReportingGroup_collapse" style="margin-left: 10px;">ReportingGroup</a></legend>
                    <div id="{{id}}_ReportingGroup_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PowerSystemResource'>PowerSystemResource: </label><div class='col-sm-8'><input id='{{id}}_PowerSystemResource' class='form-control' type='text'{{#PowerSystemResource}} value='{{PowerSystemResource_string}}'{{/PowerSystemResource}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ReportingSuperGroup'>ReportingSuperGroup: </label><div class='col-sm-8'><input id='{{id}}_ReportingSuperGroup' class='form-control' type='text'{{#ReportingSuperGroup}} value='{{ReportingSuperGroup}}'{{/ReportingSuperGroup}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ReportingGroup" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_PowerSystemResource").value; if ("" !== temp) obj["PowerSystemResource"] = temp.split (",");
                temp = document.getElementById (id + "_ReportingSuperGroup").value; if ("" !== temp) obj["ReportingSuperGroup"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PowerSystemResource", "0..*", "0..*", "PowerSystemResource", "ReportingGroup"],
                            ["BusNameMarker", "0..*", "0..1", "BusNameMarker", "ReportingGroup"],
                            ["TopologicalNode", "0..*", "0..1", "TopologicalNode", "ReportingGroup"],
                            ["ReportingSuperGroup", "0..1", "0..*", "ReportingSuperGroup", "ReportingGroup"]
                        ]
                    )
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
                let bucket = cim_data.RegularIntervalSchedule;
                if (null == bucket)
                   cim_data.RegularIntervalSchedule = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RegularIntervalSchedule[obj.id];
            }

            parse (context, sub)
            {
                let obj = BasicIntervalSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "RegularIntervalSchedule";
                base.parse_element (/<cim:RegularIntervalSchedule.endTime>([\s\S]*?)<\/cim:RegularIntervalSchedule.endTime>/g, obj, "endTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:RegularIntervalSchedule.timeStep>([\s\S]*?)<\/cim:RegularIntervalSchedule.timeStep>/g, obj, "timeStep", base.to_string, sub, context);
                base.parse_attributes (/<cim:RegularIntervalSchedule.TimePoints\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TimePoints", sub, context);
                let bucket = context.parsed.RegularIntervalSchedule;
                if (null == bucket)
                   context.parsed.RegularIntervalSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = BasicIntervalSchedule.prototype.export.call (this, obj, false);

                base.export_element (obj, "RegularIntervalSchedule", "endTime", "endTime",  base.from_datetime, fields);
                base.export_element (obj, "RegularIntervalSchedule", "timeStep", "timeStep",  base.from_string, fields);
                base.export_attributes (obj, "RegularIntervalSchedule", "TimePoints", "TimePoints", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RegularIntervalSchedule_collapse" aria-expanded="true" aria-controls="RegularIntervalSchedule_collapse" style="margin-left: 10px;">RegularIntervalSchedule</a></legend>
                    <div id="RegularIntervalSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + BasicIntervalSchedule.prototype.template.call (this) +
                    `
                    {{#endTime}}<div><b>endTime</b>: {{endTime}}</div>{{/endTime}}
                    {{#timeStep}}<div><b>timeStep</b>: {{timeStep}}</div>{{/timeStep}}
                    {{#TimePoints}}<div><b>TimePoints</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TimePoints}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["TimePoints"]) obj["TimePoints_string"] = obj["TimePoints"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["TimePoints_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RegularIntervalSchedule_collapse" aria-expanded="true" aria-controls="{{id}}_RegularIntervalSchedule_collapse" style="margin-left: 10px;">RegularIntervalSchedule</a></legend>
                    <div id="{{id}}_RegularIntervalSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + BasicIntervalSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_endTime'>endTime: </label><div class='col-sm-8'><input id='{{id}}_endTime' class='form-control' type='text'{{#endTime}} value='{{endTime}}'{{/endTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_timeStep'>timeStep: </label><div class='col-sm-8'><input id='{{id}}_timeStep' class='form-control' type='text'{{#timeStep}} value='{{timeStep}}'{{/timeStep}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "RegularIntervalSchedule" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_endTime").value; if ("" !== temp) obj["endTime"] = temp;
                temp = document.getElementById (id + "_timeStep").value; if ("" !== temp) obj["timeStep"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TimePoints", "1..*", "1", "RegularTimePoint", "IntervalSchedule"]
                        ]
                    )
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
                let bucket = cim_data.Equipment;
                if (null == bucket)
                   cim_data.Equipment = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Equipment[obj.id];
            }

            parse (context, sub)
            {
                let obj = PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "Equipment";
                base.parse_element (/<cim:Equipment.normallyInService>([\s\S]*?)<\/cim:Equipment.normallyInService>/g, obj, "normallyInService", base.to_boolean, sub, context);
                base.parse_element (/<cim:Equipment.aggregate>([\s\S]*?)<\/cim:Equipment.aggregate>/g, obj, "aggregate", base.to_boolean, sub, context);
                base.parse_element (/<cim:Equipment.inService>([\s\S]*?)<\/cim:Equipment.inService>/g, obj, "inService", base.to_boolean, sub, context);
                base.parse_element (/<cim:Equipment.networkAnalysisEnabled>([\s\S]*?)<\/cim:Equipment.networkAnalysisEnabled>/g, obj, "networkAnalysisEnabled", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:Equipment.LimitDependencyModel\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LimitDependencyModel", sub, context);
                base.parse_attributes (/<cim:Equipment.WeatherStation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WeatherStation", sub, context);
                base.parse_attribute (/<cim:Equipment.EquipmentContainer\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EquipmentContainer", sub, context);
                base.parse_attributes (/<cim:Equipment.AdditionalEquipmentContainer\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AdditionalEquipmentContainer", sub, context);
                base.parse_attributes (/<cim:Equipment.OperationalRestrictions\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OperationalRestrictions", sub, context);
                base.parse_attributes (/<cim:Equipment.ProtectiveActionEquipment\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ProtectiveActionEquipment", sub, context);
                base.parse_attributes (/<cim:Equipment.ContingencyEquipment\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ContingencyEquipment", sub, context);
                base.parse_attributes (/<cim:Equipment.OperationalLimitSet\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OperationalLimitSet", sub, context);
                base.parse_attributes (/<cim:Equipment.UsagePoints\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "UsagePoints", sub, context);
                base.parse_attributes (/<cim:Equipment.Outages\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Outages", sub, context);
                base.parse_attributes (/<cim:Equipment.PinEquipment\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PinEquipment", sub, context);
                base.parse_attributes (/<cim:Equipment.EqiupmentLimitSeriesComponent\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EqiupmentLimitSeriesComponent", sub, context);
                base.parse_attributes (/<cim:Equipment.Faults\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Faults", sub, context);
                let bucket = context.parsed.Equipment;
                if (null == bucket)
                   context.parsed.Equipment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "Equipment", "normallyInService", "normallyInService",  base.from_boolean, fields);
                base.export_element (obj, "Equipment", "aggregate", "aggregate",  base.from_boolean, fields);
                base.export_element (obj, "Equipment", "inService", "inService",  base.from_boolean, fields);
                base.export_element (obj, "Equipment", "networkAnalysisEnabled", "networkAnalysisEnabled",  base.from_boolean, fields);
                base.export_attributes (obj, "Equipment", "LimitDependencyModel", "LimitDependencyModel", fields);
                base.export_attributes (obj, "Equipment", "WeatherStation", "WeatherStation", fields);
                base.export_attribute (obj, "Equipment", "EquipmentContainer", "EquipmentContainer", fields);
                base.export_attributes (obj, "Equipment", "AdditionalEquipmentContainer", "AdditionalEquipmentContainer", fields);
                base.export_attributes (obj, "Equipment", "OperationalRestrictions", "OperationalRestrictions", fields);
                base.export_attributes (obj, "Equipment", "ProtectiveActionEquipment", "ProtectiveActionEquipment", fields);
                base.export_attributes (obj, "Equipment", "ContingencyEquipment", "ContingencyEquipment", fields);
                base.export_attributes (obj, "Equipment", "OperationalLimitSet", "OperationalLimitSet", fields);
                base.export_attributes (obj, "Equipment", "UsagePoints", "UsagePoints", fields);
                base.export_attributes (obj, "Equipment", "Outages", "Outages", fields);
                base.export_attributes (obj, "Equipment", "PinEquipment", "PinEquipment", fields);
                base.export_attributes (obj, "Equipment", "EqiupmentLimitSeriesComponent", "EqiupmentLimitSeriesComponent", fields);
                base.export_attributes (obj, "Equipment", "Faults", "Faults", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Equipment_collapse" aria-expanded="true" aria-controls="Equipment_collapse" style="margin-left: 10px;">Equipment</a></legend>
                    <div id="Equipment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#normallyInService}}<div><b>normallyInService</b>: {{normallyInService}}</div>{{/normallyInService}}
                    {{#aggregate}}<div><b>aggregate</b>: {{aggregate}}</div>{{/aggregate}}
                    {{#inService}}<div><b>inService</b>: {{inService}}</div>{{/inService}}
                    {{#networkAnalysisEnabled}}<div><b>networkAnalysisEnabled</b>: {{networkAnalysisEnabled}}</div>{{/networkAnalysisEnabled}}
                    {{#LimitDependencyModel}}<div><b>LimitDependencyModel</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/LimitDependencyModel}}
                    {{#WeatherStation}}<div><b>WeatherStation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/WeatherStation}}
                    {{#EquipmentContainer}}<div><b>EquipmentContainer</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{EquipmentContainer}}");}); return false;'>{{EquipmentContainer}}</a></div>{{/EquipmentContainer}}
                    {{#AdditionalEquipmentContainer}}<div><b>AdditionalEquipmentContainer</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AdditionalEquipmentContainer}}
                    {{#OperationalRestrictions}}<div><b>OperationalRestrictions</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/OperationalRestrictions}}
                    {{#ProtectiveActionEquipment}}<div><b>ProtectiveActionEquipment</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ProtectiveActionEquipment}}
                    {{#ContingencyEquipment}}<div><b>ContingencyEquipment</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ContingencyEquipment}}
                    {{#OperationalLimitSet}}<div><b>OperationalLimitSet</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/OperationalLimitSet}}
                    {{#UsagePoints}}<div><b>UsagePoints</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/UsagePoints}}
                    {{#Outages}}<div><b>Outages</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Outages}}
                    {{#PinEquipment}}<div><b>PinEquipment</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/PinEquipment}}
                    {{#EqiupmentLimitSeriesComponent}}<div><b>EqiupmentLimitSeriesComponent</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EqiupmentLimitSeriesComponent}}
                    {{#Faults}}<div><b>Faults</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Faults}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["LimitDependencyModel"]) obj["LimitDependencyModel_string"] = obj["LimitDependencyModel"].join ();
                if (obj["WeatherStation"]) obj["WeatherStation_string"] = obj["WeatherStation"].join ();
                if (obj["AdditionalEquipmentContainer"]) obj["AdditionalEquipmentContainer_string"] = obj["AdditionalEquipmentContainer"].join ();
                if (obj["OperationalRestrictions"]) obj["OperationalRestrictions_string"] = obj["OperationalRestrictions"].join ();
                if (obj["ProtectiveActionEquipment"]) obj["ProtectiveActionEquipment_string"] = obj["ProtectiveActionEquipment"].join ();
                if (obj["ContingencyEquipment"]) obj["ContingencyEquipment_string"] = obj["ContingencyEquipment"].join ();
                if (obj["OperationalLimitSet"]) obj["OperationalLimitSet_string"] = obj["OperationalLimitSet"].join ();
                if (obj["UsagePoints"]) obj["UsagePoints_string"] = obj["UsagePoints"].join ();
                if (obj["Outages"]) obj["Outages_string"] = obj["Outages"].join ();
                if (obj["PinEquipment"]) obj["PinEquipment_string"] = obj["PinEquipment"].join ();
                if (obj["EqiupmentLimitSeriesComponent"]) obj["EqiupmentLimitSeriesComponent_string"] = obj["EqiupmentLimitSeriesComponent"].join ();
                if (obj["Faults"]) obj["Faults_string"] = obj["Faults"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["LimitDependencyModel_string"];
                delete obj["WeatherStation_string"];
                delete obj["AdditionalEquipmentContainer_string"];
                delete obj["OperationalRestrictions_string"];
                delete obj["ProtectiveActionEquipment_string"];
                delete obj["ContingencyEquipment_string"];
                delete obj["OperationalLimitSet_string"];
                delete obj["UsagePoints_string"];
                delete obj["Outages_string"];
                delete obj["PinEquipment_string"];
                delete obj["EqiupmentLimitSeriesComponent_string"];
                delete obj["Faults_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Equipment_collapse" aria-expanded="true" aria-controls="{{id}}_Equipment_collapse" style="margin-left: 10px;">Equipment</a></legend>
                    <div id="{{id}}_Equipment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_normallyInService'>normallyInService: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_normallyInService' class='form-check-input' type='checkbox'{{#normallyInService}} checked{{/normallyInService}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_aggregate'>aggregate: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_aggregate' class='form-check-input' type='checkbox'{{#aggregate}} checked{{/aggregate}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_inService'>inService: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_inService' class='form-check-input' type='checkbox'{{#inService}} checked{{/inService}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_networkAnalysisEnabled'>networkAnalysisEnabled: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_networkAnalysisEnabled' class='form-check-input' type='checkbox'{{#networkAnalysisEnabled}} checked{{/networkAnalysisEnabled}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WeatherStation'>WeatherStation: </label><div class='col-sm-8'><input id='{{id}}_WeatherStation' class='form-control' type='text'{{#WeatherStation}} value='{{WeatherStation_string}}'{{/WeatherStation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EquipmentContainer'>EquipmentContainer: </label><div class='col-sm-8'><input id='{{id}}_EquipmentContainer' class='form-control' type='text'{{#EquipmentContainer}} value='{{EquipmentContainer}}'{{/EquipmentContainer}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AdditionalEquipmentContainer'>AdditionalEquipmentContainer: </label><div class='col-sm-8'><input id='{{id}}_AdditionalEquipmentContainer' class='form-control' type='text'{{#AdditionalEquipmentContainer}} value='{{AdditionalEquipmentContainer_string}}'{{/AdditionalEquipmentContainer}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OperationalRestrictions'>OperationalRestrictions: </label><div class='col-sm-8'><input id='{{id}}_OperationalRestrictions' class='form-control' type='text'{{#OperationalRestrictions}} value='{{OperationalRestrictions_string}}'{{/OperationalRestrictions}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_UsagePoints'>UsagePoints: </label><div class='col-sm-8'><input id='{{id}}_UsagePoints' class='form-control' type='text'{{#UsagePoints}} value='{{UsagePoints_string}}'{{/UsagePoints}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Outages'>Outages: </label><div class='col-sm-8'><input id='{{id}}_Outages' class='form-control' type='text'{{#Outages}} value='{{Outages_string}}'{{/Outages}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Equipment" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_normallyInService").checked; if (temp) obj["normallyInService"] = true;
                temp = document.getElementById (id + "_aggregate").checked; if (temp) obj["aggregate"] = true;
                temp = document.getElementById (id + "_inService").checked; if (temp) obj["inService"] = true;
                temp = document.getElementById (id + "_networkAnalysisEnabled").checked; if (temp) obj["networkAnalysisEnabled"] = true;
                temp = document.getElementById (id + "_WeatherStation").value; if ("" !== temp) obj["WeatherStation"] = temp.split (",");
                temp = document.getElementById (id + "_EquipmentContainer").value; if ("" !== temp) obj["EquipmentContainer"] = temp;
                temp = document.getElementById (id + "_AdditionalEquipmentContainer").value; if ("" !== temp) obj["AdditionalEquipmentContainer"] = temp.split (",");
                temp = document.getElementById (id + "_OperationalRestrictions").value; if ("" !== temp) obj["OperationalRestrictions"] = temp.split (",");
                temp = document.getElementById (id + "_UsagePoints").value; if ("" !== temp) obj["UsagePoints"] = temp.split (",");
                temp = document.getElementById (id + "_Outages").value; if ("" !== temp) obj["Outages"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["LimitDependencyModel", "0..*", "0..1", "LimitDependency", "Equipment"],
                            ["WeatherStation", "0..*", "0..*", "WeatherStation", "Equipment"],
                            ["EquipmentContainer", "0..1", "0..*", "EquipmentContainer", "Equipments"],
                            ["AdditionalEquipmentContainer", "0..*", "0..*", "EquipmentContainer", "AdditionalGroupedEquipment"],
                            ["OperationalRestrictions", "0..*", "0..*", "OperationalRestriction", "Equipments"],
                            ["ProtectiveActionEquipment", "0..*", "1", "ProtectiveActionEquipment", "Equipment"],
                            ["ContingencyEquipment", "0..*", "1", "ContingencyEquipment", "Equipment"],
                            ["OperationalLimitSet", "0..*", "0..1", "OperationalLimitSet", "Equipment"],
                            ["UsagePoints", "0..*", "0..*", "UsagePoint", "Equipments"],
                            ["Outages", "0..*", "0..*", "Outage", "Equipments"],
                            ["PinEquipment", "0..*", "1", "PinEquipment", "Equipment"],
                            ["EqiupmentLimitSeriesComponent", "0..*", "1", "EquipmentLimitSeriesComponent", "Equipment"],
                            ["Faults", "0..*", "0..1", "Fault", "FaultyEquipment"]
                        ]
                    )
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
                let bucket = cim_data.ACDCTerminal;
                if (null == bucket)
                   cim_data.ACDCTerminal = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ACDCTerminal[obj.id];
            }

            parse (context, sub)
            {
                let obj = IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ACDCTerminal";
                base.parse_element (/<cim:ACDCTerminal.connected>([\s\S]*?)<\/cim:ACDCTerminal.connected>/g, obj, "connected", base.to_boolean, sub, context);
                base.parse_element (/<cim:ACDCTerminal.sequenceNumber>([\s\S]*?)<\/cim:ACDCTerminal.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
                base.parse_attributes (/<cim:ACDCTerminal.OperationalLimitSet\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OperationalLimitSet", sub, context);
                base.parse_attributes (/<cim:ACDCTerminal.Measurements\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Measurements", sub, context);
                base.parse_attribute (/<cim:ACDCTerminal.BusNameMarker\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BusNameMarker", sub, context);
                let bucket = context.parsed.ACDCTerminal;
                if (null == bucket)
                   context.parsed.ACDCTerminal = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ACDCTerminal", "connected", "connected",  base.from_boolean, fields);
                base.export_element (obj, "ACDCTerminal", "sequenceNumber", "sequenceNumber",  base.from_string, fields);
                base.export_attributes (obj, "ACDCTerminal", "OperationalLimitSet", "OperationalLimitSet", fields);
                base.export_attributes (obj, "ACDCTerminal", "Measurements", "Measurements", fields);
                base.export_attribute (obj, "ACDCTerminal", "BusNameMarker", "BusNameMarker", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ACDCTerminal_collapse" aria-expanded="true" aria-controls="ACDCTerminal_collapse" style="margin-left: 10px;">ACDCTerminal</a></legend>
                    <div id="ACDCTerminal_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#connected}}<div><b>connected</b>: {{connected}}</div>{{/connected}}
                    {{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
                    {{#OperationalLimitSet}}<div><b>OperationalLimitSet</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/OperationalLimitSet}}
                    {{#Measurements}}<div><b>Measurements</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Measurements}}
                    {{#BusNameMarker}}<div><b>BusNameMarker</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{BusNameMarker}}");}); return false;'>{{BusNameMarker}}</a></div>{{/BusNameMarker}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["OperationalLimitSet"]) obj["OperationalLimitSet_string"] = obj["OperationalLimitSet"].join ();
                if (obj["Measurements"]) obj["Measurements_string"] = obj["Measurements"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["OperationalLimitSet_string"];
                delete obj["Measurements_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ACDCTerminal_collapse" aria-expanded="true" aria-controls="{{id}}_ACDCTerminal_collapse" style="margin-left: 10px;">ACDCTerminal</a></legend>
                    <div id="{{id}}_ACDCTerminal_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_connected'>connected: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_connected' class='form-check-input' type='checkbox'{{#connected}} checked{{/connected}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sequenceNumber'>sequenceNumber: </label><div class='col-sm-8'><input id='{{id}}_sequenceNumber' class='form-control' type='text'{{#sequenceNumber}} value='{{sequenceNumber}}'{{/sequenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BusNameMarker'>BusNameMarker: </label><div class='col-sm-8'><input id='{{id}}_BusNameMarker' class='form-control' type='text'{{#BusNameMarker}} value='{{BusNameMarker}}'{{/BusNameMarker}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ACDCTerminal" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_connected").checked; if (temp) obj["connected"] = true;
                temp = document.getElementById (id + "_sequenceNumber").value; if ("" !== temp) obj["sequenceNumber"] = temp;
                temp = document.getElementById (id + "_BusNameMarker").value; if ("" !== temp) obj["BusNameMarker"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["OperationalLimitSet", "0..*", "0..1", "OperationalLimitSet", "Terminal"],
                            ["Measurements", "0..*", "0..1", "Measurement", "Terminal"],
                            ["BusNameMarker", "0..1", "1..*", "BusNameMarker", "Terminal"]
                        ]
                    )
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
                let bucket = cim_data.OperatingParticipant;
                if (null == bucket)
                   cim_data.OperatingParticipant = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OperatingParticipant[obj.id];
            }

            parse (context, sub)
            {
                let obj = IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "OperatingParticipant";
                base.parse_attributes (/<cim:OperatingParticipant.OperatingShare\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OperatingShare", sub, context);
                let bucket = context.parsed.OperatingParticipant;
                if (null == bucket)
                   context.parsed.OperatingParticipant = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "OperatingParticipant", "OperatingShare", "OperatingShare", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OperatingParticipant_collapse" aria-expanded="true" aria-controls="OperatingParticipant_collapse" style="margin-left: 10px;">OperatingParticipant</a></legend>
                    <div id="OperatingParticipant_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#OperatingShare}}<div><b>OperatingShare</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/OperatingShare}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["OperatingShare"]) obj["OperatingShare_string"] = obj["OperatingShare"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["OperatingShare_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OperatingParticipant_collapse" aria-expanded="true" aria-controls="{{id}}_OperatingParticipant_collapse" style="margin-left: 10px;">OperatingParticipant</a></legend>
                    <div id="{{id}}_OperatingParticipant_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "OperatingParticipant" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["OperatingShare", "0..*", "1", "OperatingShare", "OperatingParticipant"]
                        ]
                    )
                );
            }
        }

        /**
         * Classifying instances of the same class, e.g. overhead and underground ACLineSegments.
         *
         * This classification mechanism is intended to provide flexibility outside the scope of this document, i.e. provide customisation that is non standard.
         *
         */
        class PSRType extends IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PSRType;
                if (null == bucket)
                   cim_data.PSRType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PSRType[obj.id];
            }

            parse (context, sub)
            {
                let obj = IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "PSRType";
                base.parse_attributes (/<cim:PSRType.PowerSystemResources\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemResources", sub, context);
                let bucket = context.parsed.PSRType;
                if (null == bucket)
                   context.parsed.PSRType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "PSRType", "PowerSystemResources", "PowerSystemResources", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PSRType_collapse" aria-expanded="true" aria-controls="PSRType_collapse" style="margin-left: 10px;">PSRType</a></legend>
                    <div id="PSRType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#PowerSystemResources}}<div><b>PowerSystemResources</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/PowerSystemResources}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["PowerSystemResources"]) obj["PowerSystemResources_string"] = obj["PowerSystemResources"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["PowerSystemResources_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PSRType_collapse" aria-expanded="true" aria-controls="{{id}}_PSRType_collapse" style="margin-left: 10px;">PSRType</a></legend>
                    <div id="{{id}}_PSRType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "PSRType" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PowerSystemResources", "0..*", "0..1", "PowerSystemResource", "PSRType"]
                        ]
                    )
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
                let bucket = cim_data.GeographicalRegion;
                if (null == bucket)
                   cim_data.GeographicalRegion = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GeographicalRegion[obj.id];
            }

            parse (context, sub)
            {
                let obj = IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "GeographicalRegion";
                base.parse_attributes (/<cim:GeographicalRegion.Regions\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Regions", sub, context);
                let bucket = context.parsed.GeographicalRegion;
                if (null == bucket)
                   context.parsed.GeographicalRegion = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "GeographicalRegion", "Regions", "Regions", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#GeographicalRegion_collapse" aria-expanded="true" aria-controls="GeographicalRegion_collapse" style="margin-left: 10px;">GeographicalRegion</a></legend>
                    <div id="GeographicalRegion_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#Regions}}<div><b>Regions</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Regions}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Regions"]) obj["Regions_string"] = obj["Regions"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Regions_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_GeographicalRegion_collapse" aria-expanded="true" aria-controls="{{id}}_GeographicalRegion_collapse" style="margin-left: 10px;">GeographicalRegion</a></legend>
                    <div id="{{id}}_GeographicalRegion_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "GeographicalRegion" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Regions", "0..*", "0..1", "SubGeographicalRegion", "Region"]
                        ]
                    )
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
                let bucket = cim_data.ConductingEquipment;
                if (null == bucket)
                   cim_data.ConductingEquipment = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ConductingEquipment[obj.id];
            }

            parse (context, sub)
            {
                let obj = Equipment.prototype.parse.call (this, context, sub);
                obj.cls = "ConductingEquipment";
                base.parse_attributes (/<cim:ConductingEquipment.SvStatus\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SvStatus", sub, context);
                base.parse_attributes (/<cim:ConductingEquipment.ProtectionEquipments\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ProtectionEquipments", sub, context);
                base.parse_attribute (/<cim:ConductingEquipment.GroundingAction\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GroundingAction", sub, context);
                base.parse_attribute (/<cim:ConductingEquipment.BaseVoltage\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BaseVoltage", sub, context);
                base.parse_attribute (/<cim:ConductingEquipment.JumpingAction\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "JumpingAction", sub, context);
                base.parse_attributes (/<cim:ConductingEquipment.Terminals\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Terminals", sub, context);
                base.parse_attributes (/<cim:ConductingEquipment.ProtectiveActionAdjustment\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ProtectiveActionAdjustment", sub, context);
                let bucket = context.parsed.ConductingEquipment;
                if (null == bucket)
                   context.parsed.ConductingEquipment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Equipment.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ConductingEquipment", "SvStatus", "SvStatus", fields);
                base.export_attributes (obj, "ConductingEquipment", "ProtectionEquipments", "ProtectionEquipments", fields);
                base.export_attribute (obj, "ConductingEquipment", "GroundingAction", "GroundingAction", fields);
                base.export_attribute (obj, "ConductingEquipment", "BaseVoltage", "BaseVoltage", fields);
                base.export_attribute (obj, "ConductingEquipment", "JumpingAction", "JumpingAction", fields);
                base.export_attributes (obj, "ConductingEquipment", "Terminals", "Terminals", fields);
                base.export_attributes (obj, "ConductingEquipment", "ProtectiveActionAdjustment", "ProtectiveActionAdjustment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ConductingEquipment_collapse" aria-expanded="true" aria-controls="ConductingEquipment_collapse" style="margin-left: 10px;">ConductingEquipment</a></legend>
                    <div id="ConductingEquipment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Equipment.prototype.template.call (this) +
                    `
                    {{#SvStatus}}<div><b>SvStatus</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/SvStatus}}
                    {{#ProtectionEquipments}}<div><b>ProtectionEquipments</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ProtectionEquipments}}
                    {{#GroundingAction}}<div><b>GroundingAction</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{GroundingAction}}");}); return false;'>{{GroundingAction}}</a></div>{{/GroundingAction}}
                    {{#BaseVoltage}}<div><b>BaseVoltage</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{BaseVoltage}}");}); return false;'>{{BaseVoltage}}</a></div>{{/BaseVoltage}}
                    {{#JumpingAction}}<div><b>JumpingAction</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{JumpingAction}}");}); return false;'>{{JumpingAction}}</a></div>{{/JumpingAction}}
                    {{#Terminals}}<div><b>Terminals</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Terminals}}
                    {{#ProtectiveActionAdjustment}}<div><b>ProtectiveActionAdjustment</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ProtectiveActionAdjustment}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["SvStatus"]) obj["SvStatus_string"] = obj["SvStatus"].join ();
                if (obj["ProtectionEquipments"]) obj["ProtectionEquipments_string"] = obj["ProtectionEquipments"].join ();
                if (obj["Terminals"]) obj["Terminals_string"] = obj["Terminals"].join ();
                if (obj["ProtectiveActionAdjustment"]) obj["ProtectiveActionAdjustment_string"] = obj["ProtectiveActionAdjustment"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["SvStatus_string"];
                delete obj["ProtectionEquipments_string"];
                delete obj["Terminals_string"];
                delete obj["ProtectiveActionAdjustment_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ConductingEquipment_collapse" aria-expanded="true" aria-controls="{{id}}_ConductingEquipment_collapse" style="margin-left: 10px;">ConductingEquipment</a></legend>
                    <div id="{{id}}_ConductingEquipment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Equipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ProtectionEquipments'>ProtectionEquipments: </label><div class='col-sm-8'><input id='{{id}}_ProtectionEquipments' class='form-control' type='text'{{#ProtectionEquipments}} value='{{ProtectionEquipments_string}}'{{/ProtectionEquipments}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GroundingAction'>GroundingAction: </label><div class='col-sm-8'><input id='{{id}}_GroundingAction' class='form-control' type='text'{{#GroundingAction}} value='{{GroundingAction}}'{{/GroundingAction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BaseVoltage'>BaseVoltage: </label><div class='col-sm-8'><input id='{{id}}_BaseVoltage' class='form-control' type='text'{{#BaseVoltage}} value='{{BaseVoltage}}'{{/BaseVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_JumpingAction'>JumpingAction: </label><div class='col-sm-8'><input id='{{id}}_JumpingAction' class='form-control' type='text'{{#JumpingAction}} value='{{JumpingAction}}'{{/JumpingAction}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ConductingEquipment" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ProtectionEquipments").value; if ("" !== temp) obj["ProtectionEquipments"] = temp.split (",");
                temp = document.getElementById (id + "_GroundingAction").value; if ("" !== temp) obj["GroundingAction"] = temp;
                temp = document.getElementById (id + "_BaseVoltage").value; if ("" !== temp) obj["BaseVoltage"] = temp;
                temp = document.getElementById (id + "_JumpingAction").value; if ("" !== temp) obj["JumpingAction"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["SvStatus", "0..*", "1", "SvStatus", "ConductingEquipment"],
                            ["ProtectionEquipments", "0..*", "0..*", "ProtectionEquipment", "ConductingEquipments"],
                            ["GroundingAction", "0..1", "0..1", "GroundAction", "GroundedEquipment"],
                            ["BaseVoltage", "0..1", "0..*", "BaseVoltage", "ConductingEquipment"],
                            ["JumpingAction", "0..1", "0..*", "JumperAction", "JumpedEquipments"],
                            ["Terminals", "0..*", "1", "Terminal", "ConductingEquipment"],
                            ["ProtectiveActionAdjustment", "0..*", "1", "ProtectiveActionAdjustment", "ConductingEquipment"]
                        ]
                    )
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
                let bucket = cim_data.IrregularIntervalSchedule;
                if (null == bucket)
                   cim_data.IrregularIntervalSchedule = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.IrregularIntervalSchedule[obj.id];
            }

            parse (context, sub)
            {
                let obj = BasicIntervalSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "IrregularIntervalSchedule";
                base.parse_attributes (/<cim:IrregularIntervalSchedule.TimePoints\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TimePoints", sub, context);
                let bucket = context.parsed.IrregularIntervalSchedule;
                if (null == bucket)
                   context.parsed.IrregularIntervalSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = BasicIntervalSchedule.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "IrregularIntervalSchedule", "TimePoints", "TimePoints", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#IrregularIntervalSchedule_collapse" aria-expanded="true" aria-controls="IrregularIntervalSchedule_collapse" style="margin-left: 10px;">IrregularIntervalSchedule</a></legend>
                    <div id="IrregularIntervalSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + BasicIntervalSchedule.prototype.template.call (this) +
                    `
                    {{#TimePoints}}<div><b>TimePoints</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TimePoints}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["TimePoints"]) obj["TimePoints_string"] = obj["TimePoints"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["TimePoints_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_IrregularIntervalSchedule_collapse" aria-expanded="true" aria-controls="{{id}}_IrregularIntervalSchedule_collapse" style="margin-left: 10px;">IrregularIntervalSchedule</a></legend>
                    <div id="{{id}}_IrregularIntervalSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + BasicIntervalSchedule.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "IrregularIntervalSchedule" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TimePoints", "1..*", "1", "IrregularTimePoint", "IntervalSchedule"]
                        ]
                    )
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
                let bucket = cim_data.ConnectivityNodeContainer;
                if (null == bucket)
                   cim_data.ConnectivityNodeContainer = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ConnectivityNodeContainer[obj.id];
            }

            parse (context, sub)
            {
                let obj = PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "ConnectivityNodeContainer";
                base.parse_attributes (/<cim:ConnectivityNodeContainer.TopologicalNode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TopologicalNode", sub, context);
                base.parse_attributes (/<cim:ConnectivityNodeContainer.ConnectivityNodes\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ConnectivityNodes", sub, context);
                let bucket = context.parsed.ConnectivityNodeContainer;
                if (null == bucket)
                   context.parsed.ConnectivityNodeContainer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ConnectivityNodeContainer", "TopologicalNode", "TopologicalNode", fields);
                base.export_attributes (obj, "ConnectivityNodeContainer", "ConnectivityNodes", "ConnectivityNodes", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ConnectivityNodeContainer_collapse" aria-expanded="true" aria-controls="ConnectivityNodeContainer_collapse" style="margin-left: 10px;">ConnectivityNodeContainer</a></legend>
                    <div id="ConnectivityNodeContainer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#TopologicalNode}}<div><b>TopologicalNode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TopologicalNode}}
                    {{#ConnectivityNodes}}<div><b>ConnectivityNodes</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ConnectivityNodes}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["TopologicalNode"]) obj["TopologicalNode_string"] = obj["TopologicalNode"].join ();
                if (obj["ConnectivityNodes"]) obj["ConnectivityNodes_string"] = obj["ConnectivityNodes"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["TopologicalNode_string"];
                delete obj["ConnectivityNodes_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ConnectivityNodeContainer_collapse" aria-expanded="true" aria-controls="{{id}}_ConnectivityNodeContainer_collapse" style="margin-left: 10px;">ConnectivityNodeContainer</a></legend>
                    <div id="{{id}}_ConnectivityNodeContainer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "ConnectivityNodeContainer" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TopologicalNode", "0..*", "0..1", "TopologicalNode", "ConnectivityNodeContainer"],
                            ["ConnectivityNodes", "0..*", "1", "ConnectivityNode", "ConnectivityNodeContainer"]
                        ]
                    )
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
                let bucket = cim_data.Terminal;
                if (null == bucket)
                   cim_data.Terminal = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Terminal[obj.id];
            }

            parse (context, sub)
            {
                let obj = ACDCTerminal.prototype.parse.call (this, context, sub);
                obj.cls = "Terminal";
                base.parse_attribute (/<cim:Terminal.phases\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "phases", sub, context);
                base.parse_attributes (/<cim:Terminal.RemoteInputSignal\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RemoteInputSignal", sub, context);
                base.parse_attributes (/<cim:Terminal.SvPowerFlow\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SvPowerFlow", sub, context);
                base.parse_attribute (/<cim:Terminal.NormalHeadFeeder\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "NormalHeadFeeder", sub, context);
                base.parse_attributes (/<cim:Terminal.TieFlow\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TieFlow", sub, context);
                base.parse_attributes (/<cim:Terminal.HasFirstMutualCoupling\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "HasFirstMutualCoupling", sub, context);
                base.parse_attribute (/<cim:Terminal.TopologicalNode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TopologicalNode", sub, context);
                base.parse_attributes (/<cim:Terminal.EquipmentFaults\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EquipmentFaults", sub, context);
                base.parse_attributes (/<cim:Terminal.PinTerminal\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PinTerminal", sub, context);
                base.parse_attribute (/<cim:Terminal.Bushing\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Bushing", sub, context);
                base.parse_attribute (/<cim:Terminal.ConnectivityNode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ConnectivityNode", sub, context);
                base.parse_attributes (/<cim:Terminal.ConverterDCSides\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ConverterDCSides", sub, context);
                base.parse_attributes (/<cim:Terminal.HasSecondMutualCoupling\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "HasSecondMutualCoupling", sub, context);
                base.parse_attributes (/<cim:Terminal.TransformerEnd\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TransformerEnd", sub, context);
                base.parse_attributes (/<cim:Terminal.BranchGroupTerminal\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BranchGroupTerminal", sub, context);
                base.parse_attribute (/<cim:Terminal.ConductingEquipment\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ConductingEquipment", sub, context);
                base.parse_attributes (/<cim:Terminal.RegulatingControl\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegulatingControl", sub, context);
                base.parse_attribute (/<cim:Terminal.Circuit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Circuit", sub, context);
                base.parse_attributes (/<cim:Terminal.AuxiliaryEquipment\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AuxiliaryEquipment", sub, context);
                let bucket = context.parsed.Terminal;
                if (null == bucket)
                   context.parsed.Terminal = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ACDCTerminal.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Terminal", "phases", "phases", fields);
                base.export_attributes (obj, "Terminal", "RemoteInputSignal", "RemoteInputSignal", fields);
                base.export_attributes (obj, "Terminal", "SvPowerFlow", "SvPowerFlow", fields);
                base.export_attribute (obj, "Terminal", "NormalHeadFeeder", "NormalHeadFeeder", fields);
                base.export_attributes (obj, "Terminal", "TieFlow", "TieFlow", fields);
                base.export_attributes (obj, "Terminal", "HasFirstMutualCoupling", "HasFirstMutualCoupling", fields);
                base.export_attribute (obj, "Terminal", "TopologicalNode", "TopologicalNode", fields);
                base.export_attributes (obj, "Terminal", "EquipmentFaults", "EquipmentFaults", fields);
                base.export_attributes (obj, "Terminal", "PinTerminal", "PinTerminal", fields);
                base.export_attribute (obj, "Terminal", "Bushing", "Bushing", fields);
                base.export_attribute (obj, "Terminal", "ConnectivityNode", "ConnectivityNode", fields);
                base.export_attributes (obj, "Terminal", "ConverterDCSides", "ConverterDCSides", fields);
                base.export_attributes (obj, "Terminal", "HasSecondMutualCoupling", "HasSecondMutualCoupling", fields);
                base.export_attributes (obj, "Terminal", "TransformerEnd", "TransformerEnd", fields);
                base.export_attributes (obj, "Terminal", "BranchGroupTerminal", "BranchGroupTerminal", fields);
                base.export_attribute (obj, "Terminal", "ConductingEquipment", "ConductingEquipment", fields);
                base.export_attributes (obj, "Terminal", "RegulatingControl", "RegulatingControl", fields);
                base.export_attribute (obj, "Terminal", "Circuit", "Circuit", fields);
                base.export_attributes (obj, "Terminal", "AuxiliaryEquipment", "AuxiliaryEquipment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Terminal_collapse" aria-expanded="true" aria-controls="Terminal_collapse" style="margin-left: 10px;">Terminal</a></legend>
                    <div id="Terminal_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ACDCTerminal.prototype.template.call (this) +
                    `
                    {{#phases}}<div><b>phases</b>: {{phases}}</div>{{/phases}}
                    {{#RemoteInputSignal}}<div><b>RemoteInputSignal</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RemoteInputSignal}}
                    {{#SvPowerFlow}}<div><b>SvPowerFlow</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/SvPowerFlow}}
                    {{#NormalHeadFeeder}}<div><b>NormalHeadFeeder</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{NormalHeadFeeder}}");}); return false;'>{{NormalHeadFeeder}}</a></div>{{/NormalHeadFeeder}}
                    {{#TieFlow}}<div><b>TieFlow</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TieFlow}}
                    {{#HasFirstMutualCoupling}}<div><b>HasFirstMutualCoupling</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/HasFirstMutualCoupling}}
                    {{#TopologicalNode}}<div><b>TopologicalNode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{TopologicalNode}}");}); return false;'>{{TopologicalNode}}</a></div>{{/TopologicalNode}}
                    {{#EquipmentFaults}}<div><b>EquipmentFaults</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EquipmentFaults}}
                    {{#PinTerminal}}<div><b>PinTerminal</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/PinTerminal}}
                    {{#Bushing}}<div><b>Bushing</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Bushing}}");}); return false;'>{{Bushing}}</a></div>{{/Bushing}}
                    {{#ConnectivityNode}}<div><b>ConnectivityNode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ConnectivityNode}}");}); return false;'>{{ConnectivityNode}}</a></div>{{/ConnectivityNode}}
                    {{#ConverterDCSides}}<div><b>ConverterDCSides</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ConverterDCSides}}
                    {{#HasSecondMutualCoupling}}<div><b>HasSecondMutualCoupling</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/HasSecondMutualCoupling}}
                    {{#TransformerEnd}}<div><b>TransformerEnd</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TransformerEnd}}
                    {{#BranchGroupTerminal}}<div><b>BranchGroupTerminal</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/BranchGroupTerminal}}
                    {{#ConductingEquipment}}<div><b>ConductingEquipment</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ConductingEquipment}}");}); return false;'>{{ConductingEquipment}}</a></div>{{/ConductingEquipment}}
                    {{#RegulatingControl}}<div><b>RegulatingControl</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RegulatingControl}}
                    {{#Circuit}}<div><b>Circuit</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Circuit}}");}); return false;'>{{Circuit}}</a></div>{{/Circuit}}
                    {{#AuxiliaryEquipment}}<div><b>AuxiliaryEquipment</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AuxiliaryEquipment}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["phasesPhaseCode"] = [{ id: '', selected: (!obj["phases"])}]; for (let property in PhaseCode) obj["phasesPhaseCode"].push ({ id: property, selected: obj["phases"] && obj["phases"].endsWith ('.' + property)});
                if (obj["RemoteInputSignal"]) obj["RemoteInputSignal_string"] = obj["RemoteInputSignal"].join ();
                if (obj["SvPowerFlow"]) obj["SvPowerFlow_string"] = obj["SvPowerFlow"].join ();
                if (obj["TieFlow"]) obj["TieFlow_string"] = obj["TieFlow"].join ();
                if (obj["HasFirstMutualCoupling"]) obj["HasFirstMutualCoupling_string"] = obj["HasFirstMutualCoupling"].join ();
                if (obj["EquipmentFaults"]) obj["EquipmentFaults_string"] = obj["EquipmentFaults"].join ();
                if (obj["PinTerminal"]) obj["PinTerminal_string"] = obj["PinTerminal"].join ();
                if (obj["ConverterDCSides"]) obj["ConverterDCSides_string"] = obj["ConverterDCSides"].join ();
                if (obj["HasSecondMutualCoupling"]) obj["HasSecondMutualCoupling_string"] = obj["HasSecondMutualCoupling"].join ();
                if (obj["TransformerEnd"]) obj["TransformerEnd_string"] = obj["TransformerEnd"].join ();
                if (obj["BranchGroupTerminal"]) obj["BranchGroupTerminal_string"] = obj["BranchGroupTerminal"].join ();
                if (obj["RegulatingControl"]) obj["RegulatingControl_string"] = obj["RegulatingControl"].join ();
                if (obj["AuxiliaryEquipment"]) obj["AuxiliaryEquipment_string"] = obj["AuxiliaryEquipment"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["phasesPhaseCode"];
                delete obj["RemoteInputSignal_string"];
                delete obj["SvPowerFlow_string"];
                delete obj["TieFlow_string"];
                delete obj["HasFirstMutualCoupling_string"];
                delete obj["EquipmentFaults_string"];
                delete obj["PinTerminal_string"];
                delete obj["ConverterDCSides_string"];
                delete obj["HasSecondMutualCoupling_string"];
                delete obj["TransformerEnd_string"];
                delete obj["BranchGroupTerminal_string"];
                delete obj["RegulatingControl_string"];
                delete obj["AuxiliaryEquipment_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Terminal_collapse" aria-expanded="true" aria-controls="{{id}}_Terminal_collapse" style="margin-left: 10px;">Terminal</a></legend>
                    <div id="{{id}}_Terminal_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ACDCTerminal.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_phases'>phases: </label><div class='col-sm-8'><select id='{{id}}_phases' class='form-control custom-select'>{{#phasesPhaseCode}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/phasesPhaseCode}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_NormalHeadFeeder'>NormalHeadFeeder: </label><div class='col-sm-8'><input id='{{id}}_NormalHeadFeeder' class='form-control' type='text'{{#NormalHeadFeeder}} value='{{NormalHeadFeeder}}'{{/NormalHeadFeeder}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TopologicalNode'>TopologicalNode: </label><div class='col-sm-8'><input id='{{id}}_TopologicalNode' class='form-control' type='text'{{#TopologicalNode}} value='{{TopologicalNode}}'{{/TopologicalNode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Bushing'>Bushing: </label><div class='col-sm-8'><input id='{{id}}_Bushing' class='form-control' type='text'{{#Bushing}} value='{{Bushing}}'{{/Bushing}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ConnectivityNode'>ConnectivityNode: </label><div class='col-sm-8'><input id='{{id}}_ConnectivityNode' class='form-control' type='text'{{#ConnectivityNode}} value='{{ConnectivityNode}}'{{/ConnectivityNode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ConductingEquipment'>ConductingEquipment: </label><div class='col-sm-8'><input id='{{id}}_ConductingEquipment' class='form-control' type='text'{{#ConductingEquipment}} value='{{ConductingEquipment}}'{{/ConductingEquipment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Circuit'>Circuit: </label><div class='col-sm-8'><input id='{{id}}_Circuit' class='form-control' type='text'{{#Circuit}} value='{{Circuit}}'{{/Circuit}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Terminal" };
                super.submit (id, obj);
                temp = PhaseCode[document.getElementById (id + "_phases").value]; if (temp) obj["phases"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseCode." + temp; else delete obj["phases"];
                temp = document.getElementById (id + "_NormalHeadFeeder").value; if ("" !== temp) obj["NormalHeadFeeder"] = temp;
                temp = document.getElementById (id + "_TopologicalNode").value; if ("" !== temp) obj["TopologicalNode"] = temp;
                temp = document.getElementById (id + "_Bushing").value; if ("" !== temp) obj["Bushing"] = temp;
                temp = document.getElementById (id + "_ConnectivityNode").value; if ("" !== temp) obj["ConnectivityNode"] = temp;
                temp = document.getElementById (id + "_ConductingEquipment").value; if ("" !== temp) obj["ConductingEquipment"] = temp;
                temp = document.getElementById (id + "_Circuit").value; if ("" !== temp) obj["Circuit"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RemoteInputSignal", "0..*", "1", "RemoteInputSignal", "Terminal"],
                            ["SvPowerFlow", "0..*", "1", "SvPowerFlow", "Terminal"],
                            ["NormalHeadFeeder", "0..1", "1..*", "Feeder", "NormalHeadTerminal"],
                            ["TieFlow", "0..2", "1", "TieFlow", "Terminal"],
                            ["HasFirstMutualCoupling", "0..*", "1", "MutualCoupling", "First_Terminal"],
                            ["TopologicalNode", "0..1", "0..*", "TopologicalNode", "Terminal"],
                            ["EquipmentFaults", "0..*", "0..1", "EquipmentFault", "Terminal"],
                            ["PinTerminal", "0..*", "1", "PinTerminal", "Terminal"],
                            ["Bushing", "0..1", "0..1", "Bushing", "Terminal"],
                            ["ConnectivityNode", "0..1", "0..*", "ConnectivityNode", "Terminals"],
                            ["ConverterDCSides", "0..*", "0..1", "ACDCConverter", "PccTerminal"],
                            ["HasSecondMutualCoupling", "0..*", "1", "MutualCoupling", "Second_Terminal"],
                            ["TransformerEnd", "0..*", "0..1", "TransformerEnd", "Terminal"],
                            ["BranchGroupTerminal", "0..*", "1", "BranchGroupTerminal", "Terminal"],
                            ["ConductingEquipment", "1", "0..*", "ConductingEquipment", "Terminals"],
                            ["RegulatingControl", "0..*", "0..1", "RegulatingControl", "Terminal"],
                            ["Circuit", "0..1", "0..*", "Circuit", "EndTerminal"],
                            ["AuxiliaryEquipment", "0..*", "1", "AuxiliaryEquipment", "Terminal"]
                        ]
                    )
                );
            }
        }

        /**
         * A modelling construct to provide a root class for containing equipment.
         *
         */
        class EquipmentContainer extends ConnectivityNodeContainer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.EquipmentContainer;
                if (null == bucket)
                   cim_data.EquipmentContainer = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EquipmentContainer[obj.id];
            }

            parse (context, sub)
            {
                let obj = ConnectivityNodeContainer.prototype.parse.call (this, context, sub);
                obj.cls = "EquipmentContainer";
                base.parse_attributes (/<cim:EquipmentContainer.Equipments\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Equipments", sub, context);
                base.parse_attributes (/<cim:EquipmentContainer.AdditionalGroupedEquipment\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AdditionalGroupedEquipment", sub, context);
                let bucket = context.parsed.EquipmentContainer;
                if (null == bucket)
                   context.parsed.EquipmentContainer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ConnectivityNodeContainer.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "EquipmentContainer", "Equipments", "Equipments", fields);
                base.export_attributes (obj, "EquipmentContainer", "AdditionalGroupedEquipment", "AdditionalGroupedEquipment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EquipmentContainer_collapse" aria-expanded="true" aria-controls="EquipmentContainer_collapse" style="margin-left: 10px;">EquipmentContainer</a></legend>
                    <div id="EquipmentContainer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ConnectivityNodeContainer.prototype.template.call (this) +
                    `
                    {{#Equipments}}<div><b>Equipments</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Equipments}}
                    {{#AdditionalGroupedEquipment}}<div><b>AdditionalGroupedEquipment</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AdditionalGroupedEquipment}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Equipments"]) obj["Equipments_string"] = obj["Equipments"].join ();
                if (obj["AdditionalGroupedEquipment"]) obj["AdditionalGroupedEquipment_string"] = obj["AdditionalGroupedEquipment"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Equipments_string"];
                delete obj["AdditionalGroupedEquipment_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EquipmentContainer_collapse" aria-expanded="true" aria-controls="{{id}}_EquipmentContainer_collapse" style="margin-left: 10px;">EquipmentContainer</a></legend>
                    <div id="{{id}}_EquipmentContainer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ConnectivityNodeContainer.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AdditionalGroupedEquipment'>AdditionalGroupedEquipment: </label><div class='col-sm-8'><input id='{{id}}_AdditionalGroupedEquipment' class='form-control' type='text'{{#AdditionalGroupedEquipment}} value='{{AdditionalGroupedEquipment_string}}'{{/AdditionalGroupedEquipment}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "EquipmentContainer" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_AdditionalGroupedEquipment").value; if ("" !== temp) obj["AdditionalGroupedEquipment"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Equipments", "0..*", "0..1", "Equipment", "EquipmentContainer"],
                            ["AdditionalGroupedEquipment", "0..*", "0..*", "Equipment", "AdditionalEquipmentContainer"]
                        ]
                    )
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
                let bucket = cim_data.Substation;
                if (null == bucket)
                   cim_data.Substation = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Substation[obj.id];
            }

            parse (context, sub)
            {
                let obj = EquipmentContainer.prototype.parse.call (this, context, sub);
                obj.cls = "Substation";
                base.parse_attributes (/<cim:Substation.NormalEnergizingFeeder\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "NormalEnergizingFeeder", sub, context);
                base.parse_attribute (/<cim:Substation.NamingFeeder\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "NamingFeeder", sub, context);
                base.parse_attributes (/<cim:Substation.DCConverterUnit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DCConverterUnit", sub, context);
                base.parse_attributes (/<cim:Substation.VoltageLevels\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "VoltageLevels", sub, context);
                base.parse_attributes (/<cim:Substation.NormalEnergizedFeeder\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "NormalEnergizedFeeder", sub, context);
                base.parse_attributes (/<cim:Substation.Bays\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Bays", sub, context);
                base.parse_attribute (/<cim:Substation.Region\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Region", sub, context);
                let bucket = context.parsed.Substation;
                if (null == bucket)
                   context.parsed.Substation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = EquipmentContainer.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "Substation", "NormalEnergizingFeeder", "NormalEnergizingFeeder", fields);
                base.export_attribute (obj, "Substation", "NamingFeeder", "NamingFeeder", fields);
                base.export_attributes (obj, "Substation", "DCConverterUnit", "DCConverterUnit", fields);
                base.export_attributes (obj, "Substation", "VoltageLevels", "VoltageLevels", fields);
                base.export_attributes (obj, "Substation", "NormalEnergizedFeeder", "NormalEnergizedFeeder", fields);
                base.export_attributes (obj, "Substation", "Bays", "Bays", fields);
                base.export_attribute (obj, "Substation", "Region", "Region", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Substation_collapse" aria-expanded="true" aria-controls="Substation_collapse" style="margin-left: 10px;">Substation</a></legend>
                    <div id="Substation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EquipmentContainer.prototype.template.call (this) +
                    `
                    {{#NormalEnergizingFeeder}}<div><b>NormalEnergizingFeeder</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/NormalEnergizingFeeder}}
                    {{#NamingFeeder}}<div><b>NamingFeeder</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{NamingFeeder}}");}); return false;'>{{NamingFeeder}}</a></div>{{/NamingFeeder}}
                    {{#DCConverterUnit}}<div><b>DCConverterUnit</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/DCConverterUnit}}
                    {{#VoltageLevels}}<div><b>VoltageLevels</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/VoltageLevels}}
                    {{#NormalEnergizedFeeder}}<div><b>NormalEnergizedFeeder</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/NormalEnergizedFeeder}}
                    {{#Bays}}<div><b>Bays</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Bays}}
                    {{#Region}}<div><b>Region</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Region}}");}); return false;'>{{Region}}</a></div>{{/Region}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["NormalEnergizingFeeder"]) obj["NormalEnergizingFeeder_string"] = obj["NormalEnergizingFeeder"].join ();
                if (obj["DCConverterUnit"]) obj["DCConverterUnit_string"] = obj["DCConverterUnit"].join ();
                if (obj["VoltageLevels"]) obj["VoltageLevels_string"] = obj["VoltageLevels"].join ();
                if (obj["NormalEnergizedFeeder"]) obj["NormalEnergizedFeeder_string"] = obj["NormalEnergizedFeeder"].join ();
                if (obj["Bays"]) obj["Bays_string"] = obj["Bays"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["NormalEnergizingFeeder_string"];
                delete obj["DCConverterUnit_string"];
                delete obj["VoltageLevels_string"];
                delete obj["NormalEnergizedFeeder_string"];
                delete obj["Bays_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Substation_collapse" aria-expanded="true" aria-controls="{{id}}_Substation_collapse" style="margin-left: 10px;">Substation</a></legend>
                    <div id="{{id}}_Substation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EquipmentContainer.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_NormalEnergizingFeeder'>NormalEnergizingFeeder: </label><div class='col-sm-8'><input id='{{id}}_NormalEnergizingFeeder' class='form-control' type='text'{{#NormalEnergizingFeeder}} value='{{NormalEnergizingFeeder_string}}'{{/NormalEnergizingFeeder}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_NamingFeeder'>NamingFeeder: </label><div class='col-sm-8'><input id='{{id}}_NamingFeeder' class='form-control' type='text'{{#NamingFeeder}} value='{{NamingFeeder}}'{{/NamingFeeder}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Region'>Region: </label><div class='col-sm-8'><input id='{{id}}_Region' class='form-control' type='text'{{#Region}} value='{{Region}}'{{/Region}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Substation" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_NormalEnergizingFeeder").value; if ("" !== temp) obj["NormalEnergizingFeeder"] = temp.split (",");
                temp = document.getElementById (id + "_NamingFeeder").value; if ("" !== temp) obj["NamingFeeder"] = temp;
                temp = document.getElementById (id + "_Region").value; if ("" !== temp) obj["Region"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["NormalEnergizingFeeder", "0..*", "0..*", "Feeder", "NormalEnergizedSubstation"],
                            ["NamingFeeder", "0..1", "0..*", "Feeder", "NamingSecondarySubstation"],
                            ["DCConverterUnit", "0..*", "0..1", "DCConverterUnit", "Substation"],
                            ["VoltageLevels", "0..*", "1", "VoltageLevel", "Substation"],
                            ["NormalEnergizedFeeder", "0..*", "0..1", "Feeder", "NormalEnergizingSubstation"],
                            ["Bays", "0..*", "0..1", "Bay", "Substation"],
                            ["Region", "0..1", "0..*", "SubGeographicalRegion", "Substations"]
                        ]
                    )
                );
            }
        }

        /**
         * A collection of equipment for organizational purposes, used for grouping distribution resources.
         *
         * The organization a feeder does not necessarily reflect connectivity or current operation state.
         *
         */
        class Feeder extends EquipmentContainer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Feeder;
                if (null == bucket)
                   cim_data.Feeder = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Feeder[obj.id];
            }

            parse (context, sub)
            {
                let obj = EquipmentContainer.prototype.parse.call (this, context, sub);
                obj.cls = "Feeder";
                base.parse_attributes (/<cim:Feeder.NormalHeadTerminal\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "NormalHeadTerminal", sub, context);
                base.parse_attributes (/<cim:Feeder.NormalEnergizedSubstation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "NormalEnergizedSubstation", sub, context);
                base.parse_attributes (/<cim:Feeder.NamingSecondarySubstation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "NamingSecondarySubstation", sub, context);
                base.parse_attribute (/<cim:Feeder.NormalEnergizingSubstation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "NormalEnergizingSubstation", sub, context);
                let bucket = context.parsed.Feeder;
                if (null == bucket)
                   context.parsed.Feeder = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = EquipmentContainer.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "Feeder", "NormalHeadTerminal", "NormalHeadTerminal", fields);
                base.export_attributes (obj, "Feeder", "NormalEnergizedSubstation", "NormalEnergizedSubstation", fields);
                base.export_attributes (obj, "Feeder", "NamingSecondarySubstation", "NamingSecondarySubstation", fields);
                base.export_attribute (obj, "Feeder", "NormalEnergizingSubstation", "NormalEnergizingSubstation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Feeder_collapse" aria-expanded="true" aria-controls="Feeder_collapse" style="margin-left: 10px;">Feeder</a></legend>
                    <div id="Feeder_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EquipmentContainer.prototype.template.call (this) +
                    `
                    {{#NormalHeadTerminal}}<div><b>NormalHeadTerminal</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/NormalHeadTerminal}}
                    {{#NormalEnergizedSubstation}}<div><b>NormalEnergizedSubstation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/NormalEnergizedSubstation}}
                    {{#NamingSecondarySubstation}}<div><b>NamingSecondarySubstation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/NamingSecondarySubstation}}
                    {{#NormalEnergizingSubstation}}<div><b>NormalEnergizingSubstation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{NormalEnergizingSubstation}}");}); return false;'>{{NormalEnergizingSubstation}}</a></div>{{/NormalEnergizingSubstation}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["NormalHeadTerminal"]) obj["NormalHeadTerminal_string"] = obj["NormalHeadTerminal"].join ();
                if (obj["NormalEnergizedSubstation"]) obj["NormalEnergizedSubstation_string"] = obj["NormalEnergizedSubstation"].join ();
                if (obj["NamingSecondarySubstation"]) obj["NamingSecondarySubstation_string"] = obj["NamingSecondarySubstation"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["NormalHeadTerminal_string"];
                delete obj["NormalEnergizedSubstation_string"];
                delete obj["NamingSecondarySubstation_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Feeder_collapse" aria-expanded="true" aria-controls="{{id}}_Feeder_collapse" style="margin-left: 10px;">Feeder</a></legend>
                    <div id="{{id}}_Feeder_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EquipmentContainer.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_NormalEnergizedSubstation'>NormalEnergizedSubstation: </label><div class='col-sm-8'><input id='{{id}}_NormalEnergizedSubstation' class='form-control' type='text'{{#NormalEnergizedSubstation}} value='{{NormalEnergizedSubstation_string}}'{{/NormalEnergizedSubstation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_NormalEnergizingSubstation'>NormalEnergizingSubstation: </label><div class='col-sm-8'><input id='{{id}}_NormalEnergizingSubstation' class='form-control' type='text'{{#NormalEnergizingSubstation}} value='{{NormalEnergizingSubstation}}'{{/NormalEnergizingSubstation}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Feeder" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_NormalEnergizedSubstation").value; if ("" !== temp) obj["NormalEnergizedSubstation"] = temp.split (",");
                temp = document.getElementById (id + "_NormalEnergizingSubstation").value; if ("" !== temp) obj["NormalEnergizingSubstation"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["NormalHeadTerminal", "1..*", "0..1", "Terminal", "NormalHeadFeeder"],
                            ["NormalEnergizedSubstation", "0..*", "0..*", "Substation", "NormalEnergizingFeeder"],
                            ["NamingSecondarySubstation", "0..*", "0..1", "Substation", "NamingFeeder"],
                            ["NormalEnergizingSubstation", "0..1", "0..*", "Substation", "NormalEnergizedFeeder"]
                        ]
                    )
                );
            }
        }

        /**
         * A collection of equipment at one common system voltage forming a switchgear.
         *
         * The equipment typically consists of breakers, busbars, instrumentation, control, regulation and protection devices as well as assemblies of all these.
         *
         */
        class VoltageLevel extends EquipmentContainer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.VoltageLevel;
                if (null == bucket)
                   cim_data.VoltageLevel = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.VoltageLevel[obj.id];
            }

            parse (context, sub)
            {
                let obj = EquipmentContainer.prototype.parse.call (this, context, sub);
                obj.cls = "VoltageLevel";
                base.parse_element (/<cim:VoltageLevel.highVoltageLimit>([\s\S]*?)<\/cim:VoltageLevel.highVoltageLimit>/g, obj, "highVoltageLimit", base.to_string, sub, context);
                base.parse_element (/<cim:VoltageLevel.lowVoltageLimit>([\s\S]*?)<\/cim:VoltageLevel.lowVoltageLimit>/g, obj, "lowVoltageLimit", base.to_string, sub, context);
                base.parse_attributes (/<cim:VoltageLevel.Bays\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Bays", sub, context);
                base.parse_attribute (/<cim:VoltageLevel.Substation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Substation", sub, context);
                base.parse_attribute (/<cim:VoltageLevel.BaseVoltage\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BaseVoltage", sub, context);
                let bucket = context.parsed.VoltageLevel;
                if (null == bucket)
                   context.parsed.VoltageLevel = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = EquipmentContainer.prototype.export.call (this, obj, false);

                base.export_element (obj, "VoltageLevel", "highVoltageLimit", "highVoltageLimit",  base.from_string, fields);
                base.export_element (obj, "VoltageLevel", "lowVoltageLimit", "lowVoltageLimit",  base.from_string, fields);
                base.export_attributes (obj, "VoltageLevel", "Bays", "Bays", fields);
                base.export_attribute (obj, "VoltageLevel", "Substation", "Substation", fields);
                base.export_attribute (obj, "VoltageLevel", "BaseVoltage", "BaseVoltage", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#VoltageLevel_collapse" aria-expanded="true" aria-controls="VoltageLevel_collapse" style="margin-left: 10px;">VoltageLevel</a></legend>
                    <div id="VoltageLevel_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EquipmentContainer.prototype.template.call (this) +
                    `
                    {{#highVoltageLimit}}<div><b>highVoltageLimit</b>: {{highVoltageLimit}}</div>{{/highVoltageLimit}}
                    {{#lowVoltageLimit}}<div><b>lowVoltageLimit</b>: {{lowVoltageLimit}}</div>{{/lowVoltageLimit}}
                    {{#Bays}}<div><b>Bays</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Bays}}
                    {{#Substation}}<div><b>Substation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Substation}}");}); return false;'>{{Substation}}</a></div>{{/Substation}}
                    {{#BaseVoltage}}<div><b>BaseVoltage</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{BaseVoltage}}");}); return false;'>{{BaseVoltage}}</a></div>{{/BaseVoltage}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Bays"]) obj["Bays_string"] = obj["Bays"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Bays_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_VoltageLevel_collapse" aria-expanded="true" aria-controls="{{id}}_VoltageLevel_collapse" style="margin-left: 10px;">VoltageLevel</a></legend>
                    <div id="{{id}}_VoltageLevel_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EquipmentContainer.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_highVoltageLimit'>highVoltageLimit: </label><div class='col-sm-8'><input id='{{id}}_highVoltageLimit' class='form-control' type='text'{{#highVoltageLimit}} value='{{highVoltageLimit}}'{{/highVoltageLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lowVoltageLimit'>lowVoltageLimit: </label><div class='col-sm-8'><input id='{{id}}_lowVoltageLimit' class='form-control' type='text'{{#lowVoltageLimit}} value='{{lowVoltageLimit}}'{{/lowVoltageLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Substation'>Substation: </label><div class='col-sm-8'><input id='{{id}}_Substation' class='form-control' type='text'{{#Substation}} value='{{Substation}}'{{/Substation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BaseVoltage'>BaseVoltage: </label><div class='col-sm-8'><input id='{{id}}_BaseVoltage' class='form-control' type='text'{{#BaseVoltage}} value='{{BaseVoltage}}'{{/BaseVoltage}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "VoltageLevel" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_highVoltageLimit").value; if ("" !== temp) obj["highVoltageLimit"] = temp;
                temp = document.getElementById (id + "_lowVoltageLimit").value; if ("" !== temp) obj["lowVoltageLimit"] = temp;
                temp = document.getElementById (id + "_Substation").value; if ("" !== temp) obj["Substation"] = temp;
                temp = document.getElementById (id + "_BaseVoltage").value; if ("" !== temp) obj["BaseVoltage"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Bays", "0..*", "0..1", "Bay", "VoltageLevel"],
                            ["Substation", "1", "0..*", "Substation", "VoltageLevels"],
                            ["BaseVoltage", "1", "0..*", "BaseVoltage", "VoltageLevel"]
                        ]
                    )
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
                let bucket = cim_data.Bay;
                if (null == bucket)
                   cim_data.Bay = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Bay[obj.id];
            }

            parse (context, sub)
            {
                let obj = EquipmentContainer.prototype.parse.call (this, context, sub);
                obj.cls = "Bay";
                base.parse_element (/<cim:Bay.bayEnergyMeasFlag>([\s\S]*?)<\/cim:Bay.bayEnergyMeasFlag>/g, obj, "bayEnergyMeasFlag", base.to_boolean, sub, context);
                base.parse_element (/<cim:Bay.bayPowerMeasFlag>([\s\S]*?)<\/cim:Bay.bayPowerMeasFlag>/g, obj, "bayPowerMeasFlag", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:Bay.breakerConfiguration\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "breakerConfiguration", sub, context);
                base.parse_attribute (/<cim:Bay.busBarConfiguration\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "busBarConfiguration", sub, context);
                base.parse_attribute (/<cim:Bay.VoltageLevel\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "VoltageLevel", sub, context);
                base.parse_attribute (/<cim:Bay.Circuit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Circuit", sub, context);
                base.parse_attribute (/<cim:Bay.Substation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Substation", sub, context);
                let bucket = context.parsed.Bay;
                if (null == bucket)
                   context.parsed.Bay = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = EquipmentContainer.prototype.export.call (this, obj, false);

                base.export_element (obj, "Bay", "bayEnergyMeasFlag", "bayEnergyMeasFlag",  base.from_boolean, fields);
                base.export_element (obj, "Bay", "bayPowerMeasFlag", "bayPowerMeasFlag",  base.from_boolean, fields);
                base.export_attribute (obj, "Bay", "breakerConfiguration", "breakerConfiguration", fields);
                base.export_attribute (obj, "Bay", "busBarConfiguration", "busBarConfiguration", fields);
                base.export_attribute (obj, "Bay", "VoltageLevel", "VoltageLevel", fields);
                base.export_attribute (obj, "Bay", "Circuit", "Circuit", fields);
                base.export_attribute (obj, "Bay", "Substation", "Substation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Bay_collapse" aria-expanded="true" aria-controls="Bay_collapse" style="margin-left: 10px;">Bay</a></legend>
                    <div id="Bay_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EquipmentContainer.prototype.template.call (this) +
                    `
                    {{#bayEnergyMeasFlag}}<div><b>bayEnergyMeasFlag</b>: {{bayEnergyMeasFlag}}</div>{{/bayEnergyMeasFlag}}
                    {{#bayPowerMeasFlag}}<div><b>bayPowerMeasFlag</b>: {{bayPowerMeasFlag}}</div>{{/bayPowerMeasFlag}}
                    {{#breakerConfiguration}}<div><b>breakerConfiguration</b>: {{breakerConfiguration}}</div>{{/breakerConfiguration}}
                    {{#busBarConfiguration}}<div><b>busBarConfiguration</b>: {{busBarConfiguration}}</div>{{/busBarConfiguration}}
                    {{#VoltageLevel}}<div><b>VoltageLevel</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{VoltageLevel}}");}); return false;'>{{VoltageLevel}}</a></div>{{/VoltageLevel}}
                    {{#Circuit}}<div><b>Circuit</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Circuit}}");}); return false;'>{{Circuit}}</a></div>{{/Circuit}}
                    {{#Substation}}<div><b>Substation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Substation}}");}); return false;'>{{Substation}}</a></div>{{/Substation}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["breakerConfigurationBreakerConfiguration"] = [{ id: '', selected: (!obj["breakerConfiguration"])}]; for (let property in BreakerConfiguration) obj["breakerConfigurationBreakerConfiguration"].push ({ id: property, selected: obj["breakerConfiguration"] && obj["breakerConfiguration"].endsWith ('.' + property)});
                obj["busBarConfigurationBusbarConfiguration"] = [{ id: '', selected: (!obj["busBarConfiguration"])}]; for (let property in BusbarConfiguration) obj["busBarConfigurationBusbarConfiguration"].push ({ id: property, selected: obj["busBarConfiguration"] && obj["busBarConfiguration"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["breakerConfigurationBreakerConfiguration"];
                delete obj["busBarConfigurationBusbarConfiguration"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Bay_collapse" aria-expanded="true" aria-controls="{{id}}_Bay_collapse" style="margin-left: 10px;">Bay</a></legend>
                    <div id="{{id}}_Bay_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EquipmentContainer.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_bayEnergyMeasFlag'>bayEnergyMeasFlag: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_bayEnergyMeasFlag' class='form-check-input' type='checkbox'{{#bayEnergyMeasFlag}} checked{{/bayEnergyMeasFlag}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_bayPowerMeasFlag'>bayPowerMeasFlag: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_bayPowerMeasFlag' class='form-check-input' type='checkbox'{{#bayPowerMeasFlag}} checked{{/bayPowerMeasFlag}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_breakerConfiguration'>breakerConfiguration: </label><div class='col-sm-8'><select id='{{id}}_breakerConfiguration' class='form-control custom-select'>{{#breakerConfigurationBreakerConfiguration}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/breakerConfigurationBreakerConfiguration}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_busBarConfiguration'>busBarConfiguration: </label><div class='col-sm-8'><select id='{{id}}_busBarConfiguration' class='form-control custom-select'>{{#busBarConfigurationBusbarConfiguration}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/busBarConfigurationBusbarConfiguration}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_VoltageLevel'>VoltageLevel: </label><div class='col-sm-8'><input id='{{id}}_VoltageLevel' class='form-control' type='text'{{#VoltageLevel}} value='{{VoltageLevel}}'{{/VoltageLevel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Circuit'>Circuit: </label><div class='col-sm-8'><input id='{{id}}_Circuit' class='form-control' type='text'{{#Circuit}} value='{{Circuit}}'{{/Circuit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Substation'>Substation: </label><div class='col-sm-8'><input id='{{id}}_Substation' class='form-control' type='text'{{#Substation}} value='{{Substation}}'{{/Substation}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Bay" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_bayEnergyMeasFlag").checked; if (temp) obj["bayEnergyMeasFlag"] = true;
                temp = document.getElementById (id + "_bayPowerMeasFlag").checked; if (temp) obj["bayPowerMeasFlag"] = true;
                temp = BreakerConfiguration[document.getElementById (id + "_breakerConfiguration").value]; if (temp) obj["breakerConfiguration"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#BreakerConfiguration." + temp; else delete obj["breakerConfiguration"];
                temp = BusbarConfiguration[document.getElementById (id + "_busBarConfiguration").value]; if (temp) obj["busBarConfiguration"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#BusbarConfiguration." + temp; else delete obj["busBarConfiguration"];
                temp = document.getElementById (id + "_VoltageLevel").value; if ("" !== temp) obj["VoltageLevel"] = temp;
                temp = document.getElementById (id + "_Circuit").value; if ("" !== temp) obj["Circuit"] = temp;
                temp = document.getElementById (id + "_Substation").value; if ("" !== temp) obj["Substation"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["VoltageLevel", "0..1", "0..*", "VoltageLevel", "Bays"],
                            ["Circuit", "0..1", "0..*", "Circuit", "EndBay"],
                            ["Substation", "0..1", "0..*", "Substation", "Bays"]
                        ]
                    )
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
                Substation: Substation,
                ConductingEquipment: ConductingEquipment,
                CurveStyle: CurveStyle,
                RegularIntervalSchedule: RegularIntervalSchedule,
                PSRType: PSRType,
                BaseVoltage: BaseVoltage,
                BusbarConfiguration: BusbarConfiguration,
                ACDCTerminal: ACDCTerminal,
                Curve: Curve,
                OperatingShare: OperatingShare,
                IrregularIntervalSchedule: IrregularIntervalSchedule,
                Feeder: Feeder,
                BasicIntervalSchedule: BasicIntervalSchedule,
                BasePower: BasePower,
                ConnectivityNodeContainer: ConnectivityNodeContainer,
                ConnectivityNode: ConnectivityNode,
                PhaseCode: PhaseCode,
                BreakerConfiguration: BreakerConfiguration,
                NameType: NameType,
                PowerSystemResource: PowerSystemResource,
                NameTypeAuthority: NameTypeAuthority,
                ReportingSuperGroup: ReportingSuperGroup,
                Bay: Bay,
                VoltageLevel: VoltageLevel,
                IrregularTimePoint: IrregularTimePoint,
                RegularTimePoint: RegularTimePoint,
                IdentifiedObject: IdentifiedObject,
                CurveData: CurveData,
                SubGeographicalRegion: SubGeographicalRegion,
                Name: Name
            }
        );
    }
);