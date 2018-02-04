define
(
    ["model/base", "model/Core"],
    /**
     * The ControlArea package models area specifications which can be used for a variety of purposes.
     *
     * The package as a whole models potentially overlapping control area specifications for the purpose of actual generation control, load forecast area load capture, or powerflow based analysis.
     *
     */
    function (base, Core)
    {

        /**
         * The type of control area.
         *
         */
        var ControlAreaTypeKind =
        {
            AGC: "AGC",
            Forecast: "Forecast",
            Interchange: "Interchange"
        };
        Object.freeze (ControlAreaTypeKind);

        /**
         * A flow specification in terms of location and direction for a control area.
         *
         */
        class TieFlow extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.TieFlow;
                if (null == bucket)
                   cim_data.TieFlow = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TieFlow[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TieFlow";
                base.parse_element (/<cim:TieFlow.positiveFlowIn>([\s\S]*?)<\/cim:TieFlow.positiveFlowIn>/g, obj, "positiveFlowIn", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:TieFlow.AltTieMeas\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AltTieMeas", sub, context);
                base.parse_attribute (/<cim:TieFlow.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context);
                base.parse_attribute (/<cim:TieFlow.ControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ControlArea", sub, context);
                var bucket = context.parsed.TieFlow;
                if (null == bucket)
                   context.parsed.TieFlow = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TieFlow", "positiveFlowIn", "positiveFlowIn",  base.from_boolean, fields);
                base.export_attributes (obj, "TieFlow", "AltTieMeas", "AltTieMeas", fields);
                base.export_attribute (obj, "TieFlow", "Terminal", "Terminal", fields);
                base.export_attribute (obj, "TieFlow", "ControlArea", "ControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TieFlow_collapse" aria-expanded="true" aria-controls="TieFlow_collapse" style="margin-left: 10px;">TieFlow</a></legend>
                    <div id="TieFlow_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#positiveFlowIn}}<div><b>positiveFlowIn</b>: {{positiveFlowIn}}</div>{{/positiveFlowIn}}
                    {{#AltTieMeas}}<div><b>AltTieMeas</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/AltTieMeas}}
                    {{#Terminal}}<div><b>Terminal</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Terminal}}&quot;);})'>{{Terminal}}</a></div>{{/Terminal}}
                    {{#ControlArea}}<div><b>ControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ControlArea}}&quot;);})'>{{ControlArea}}</a></div>{{/ControlArea}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.AltTieMeas) obj.AltTieMeas_string = obj.AltTieMeas.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.AltTieMeas_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TieFlow_collapse" aria-expanded="true" aria-controls="{{id}}_TieFlow_collapse" style="margin-left: 10px;">TieFlow</a></legend>
                    <div id="{{id}}_TieFlow_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_positiveFlowIn'>positiveFlowIn: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_positiveFlowIn' class='form-check-input' type='checkbox'{{#positiveFlowIn}} checked{{/positiveFlowIn}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Terminal'>Terminal: </label><div class='col-sm-8'><input id='{{id}}_Terminal' class='form-control' type='text'{{#Terminal}} value='{{Terminal}}'{{/Terminal}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ControlArea'>ControlArea: </label><div class='col-sm-8'><input id='{{id}}_ControlArea' class='form-control' type='text'{{#ControlArea}} value='{{ControlArea}}'{{/ControlArea}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TieFlow" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_positiveFlowIn").checked; if (temp) obj.positiveFlowIn = true;
                temp = document.getElementById (id + "_Terminal").value; if ("" != temp) obj.Terminal = temp;
                temp = document.getElementById (id + "_ControlArea").value; if ("" != temp) obj.ControlArea = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AltTieMeas", "0..*", "1", "AltTieMeas", "TieFlow"],
                            ["Terminal", "1", "0..2", "Terminal", "TieFlow"],
                            ["ControlArea", "1", "0..*", "ControlArea", "TieFlow"]
                        ]
                    )
                );
            }
        }

        /**
         * A control area generating unit.
         *
         * This class is needed so that alternate control area definitions may include the same generating unit.   Note only one instance within a control area should reference a specific generating unit.
         *
         */
        class ControlAreaGeneratingUnit extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ControlAreaGeneratingUnit;
                if (null == bucket)
                   cim_data.ControlAreaGeneratingUnit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ControlAreaGeneratingUnit[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ControlAreaGeneratingUnit";
                base.parse_attribute (/<cim:ControlAreaGeneratingUnit.ControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ControlArea", sub, context);
                base.parse_attribute (/<cim:ControlAreaGeneratingUnit.GeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingUnit", sub, context);
                base.parse_attributes (/<cim:ControlAreaGeneratingUnit.AltGeneratingUnitMeas\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AltGeneratingUnitMeas", sub, context);
                var bucket = context.parsed.ControlAreaGeneratingUnit;
                if (null == bucket)
                   context.parsed.ControlAreaGeneratingUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ControlAreaGeneratingUnit", "ControlArea", "ControlArea", fields);
                base.export_attribute (obj, "ControlAreaGeneratingUnit", "GeneratingUnit", "GeneratingUnit", fields);
                base.export_attributes (obj, "ControlAreaGeneratingUnit", "AltGeneratingUnitMeas", "AltGeneratingUnitMeas", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ControlAreaGeneratingUnit_collapse" aria-expanded="true" aria-controls="ControlAreaGeneratingUnit_collapse" style="margin-left: 10px;">ControlAreaGeneratingUnit</a></legend>
                    <div id="ControlAreaGeneratingUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#ControlArea}}<div><b>ControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ControlArea}}&quot;);})'>{{ControlArea}}</a></div>{{/ControlArea}}
                    {{#GeneratingUnit}}<div><b>GeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GeneratingUnit}}&quot;);})'>{{GeneratingUnit}}</a></div>{{/GeneratingUnit}}
                    {{#AltGeneratingUnitMeas}}<div><b>AltGeneratingUnitMeas</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/AltGeneratingUnitMeas}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.AltGeneratingUnitMeas) obj.AltGeneratingUnitMeas_string = obj.AltGeneratingUnitMeas.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.AltGeneratingUnitMeas_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ControlAreaGeneratingUnit_collapse" aria-expanded="true" aria-controls="{{id}}_ControlAreaGeneratingUnit_collapse" style="margin-left: 10px;">ControlAreaGeneratingUnit</a></legend>
                    <div id="{{id}}_ControlAreaGeneratingUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ControlArea'>ControlArea: </label><div class='col-sm-8'><input id='{{id}}_ControlArea' class='form-control' type='text'{{#ControlArea}} value='{{ControlArea}}'{{/ControlArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GeneratingUnit'>GeneratingUnit: </label><div class='col-sm-8'><input id='{{id}}_GeneratingUnit' class='form-control' type='text'{{#GeneratingUnit}} value='{{GeneratingUnit}}'{{/GeneratingUnit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ControlAreaGeneratingUnit" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ControlArea").value; if ("" != temp) obj.ControlArea = temp;
                temp = document.getElementById (id + "_GeneratingUnit").value; if ("" != temp) obj.GeneratingUnit = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ControlArea", "1", "0..*", "ControlArea", "ControlAreaGeneratingUnit"],
                            ["GeneratingUnit", "1", "0..*", "GeneratingUnit", "ControlAreaGeneratingUnit"],
                            ["AltGeneratingUnitMeas", "0..*", "1", "AltGeneratingUnitMeas", "ControlAreaGeneratingUnit"]
                        ]
                    )
                );
            }
        }

        /**
         * A prioritized measurement to be used for the tie flow as part of the control area specification.
         *
         */
        class AltTieMeas extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.AltTieMeas;
                if (null == bucket)
                   cim_data.AltTieMeas = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AltTieMeas[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AltTieMeas";
                base.parse_element (/<cim:AltTieMeas.priority>([\s\S]*?)<\/cim:AltTieMeas.priority>/g, obj, "priority", base.to_string, sub, context);
                base.parse_attribute (/<cim:AltTieMeas.TieFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TieFlow", sub, context);
                base.parse_attribute (/<cim:AltTieMeas.AnalogValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AnalogValue", sub, context);
                var bucket = context.parsed.AltTieMeas;
                if (null == bucket)
                   context.parsed.AltTieMeas = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "AltTieMeas", "priority", "priority",  base.from_string, fields);
                base.export_attribute (obj, "AltTieMeas", "TieFlow", "TieFlow", fields);
                base.export_attribute (obj, "AltTieMeas", "AnalogValue", "AnalogValue", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AltTieMeas_collapse" aria-expanded="true" aria-controls="AltTieMeas_collapse" style="margin-left: 10px;">AltTieMeas</a></legend>
                    <div id="AltTieMeas_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#priority}}<div><b>priority</b>: {{priority}}</div>{{/priority}}
                    {{#TieFlow}}<div><b>TieFlow</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TieFlow}}&quot;);})'>{{TieFlow}}</a></div>{{/TieFlow}}
                    {{#AnalogValue}}<div><b>AnalogValue</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AnalogValue}}&quot;);})'>{{AnalogValue}}</a></div>{{/AnalogValue}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AltTieMeas_collapse" aria-expanded="true" aria-controls="{{id}}_AltTieMeas_collapse" style="margin-left: 10px;">AltTieMeas</a></legend>
                    <div id="{{id}}_AltTieMeas_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_priority'>priority: </label><div class='col-sm-8'><input id='{{id}}_priority' class='form-control' type='text'{{#priority}} value='{{priority}}'{{/priority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TieFlow'>TieFlow: </label><div class='col-sm-8'><input id='{{id}}_TieFlow' class='form-control' type='text'{{#TieFlow}} value='{{TieFlow}}'{{/TieFlow}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AnalogValue'>AnalogValue: </label><div class='col-sm-8'><input id='{{id}}_AnalogValue' class='form-control' type='text'{{#AnalogValue}} value='{{AnalogValue}}'{{/AnalogValue}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "AltTieMeas" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_priority").value; if ("" != temp) obj.priority = temp;
                temp = document.getElementById (id + "_TieFlow").value; if ("" != temp) obj.TieFlow = temp;
                temp = document.getElementById (id + "_AnalogValue").value; if ("" != temp) obj.AnalogValue = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TieFlow", "1", "0..*", "TieFlow", "AltTieMeas"],
                            ["AnalogValue", "1", "0..*", "AnalogValue", "AltTieMeas"]
                        ]
                    )
                );
            }
        }

        /**
         * A prioritized measurement to be used for the generating unit in the control area specificaiton.
         *
         */
        class AltGeneratingUnitMeas extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.AltGeneratingUnitMeas;
                if (null == bucket)
                   cim_data.AltGeneratingUnitMeas = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AltGeneratingUnitMeas[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AltGeneratingUnitMeas";
                base.parse_element (/<cim:AltGeneratingUnitMeas.priority>([\s\S]*?)<\/cim:AltGeneratingUnitMeas.priority>/g, obj, "priority", base.to_string, sub, context);
                base.parse_attribute (/<cim:AltGeneratingUnitMeas.AnalogValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AnalogValue", sub, context);
                base.parse_attribute (/<cim:AltGeneratingUnitMeas.ControlAreaGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ControlAreaGeneratingUnit", sub, context);
                var bucket = context.parsed.AltGeneratingUnitMeas;
                if (null == bucket)
                   context.parsed.AltGeneratingUnitMeas = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "AltGeneratingUnitMeas", "priority", "priority",  base.from_string, fields);
                base.export_attribute (obj, "AltGeneratingUnitMeas", "AnalogValue", "AnalogValue", fields);
                base.export_attribute (obj, "AltGeneratingUnitMeas", "ControlAreaGeneratingUnit", "ControlAreaGeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AltGeneratingUnitMeas_collapse" aria-expanded="true" aria-controls="AltGeneratingUnitMeas_collapse" style="margin-left: 10px;">AltGeneratingUnitMeas</a></legend>
                    <div id="AltGeneratingUnitMeas_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#priority}}<div><b>priority</b>: {{priority}}</div>{{/priority}}
                    {{#AnalogValue}}<div><b>AnalogValue</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AnalogValue}}&quot;);})'>{{AnalogValue}}</a></div>{{/AnalogValue}}
                    {{#ControlAreaGeneratingUnit}}<div><b>ControlAreaGeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ControlAreaGeneratingUnit}}&quot;);})'>{{ControlAreaGeneratingUnit}}</a></div>{{/ControlAreaGeneratingUnit}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AltGeneratingUnitMeas_collapse" aria-expanded="true" aria-controls="{{id}}_AltGeneratingUnitMeas_collapse" style="margin-left: 10px;">AltGeneratingUnitMeas</a></legend>
                    <div id="{{id}}_AltGeneratingUnitMeas_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_priority'>priority: </label><div class='col-sm-8'><input id='{{id}}_priority' class='form-control' type='text'{{#priority}} value='{{priority}}'{{/priority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AnalogValue'>AnalogValue: </label><div class='col-sm-8'><input id='{{id}}_AnalogValue' class='form-control' type='text'{{#AnalogValue}} value='{{AnalogValue}}'{{/AnalogValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ControlAreaGeneratingUnit'>ControlAreaGeneratingUnit: </label><div class='col-sm-8'><input id='{{id}}_ControlAreaGeneratingUnit' class='form-control' type='text'{{#ControlAreaGeneratingUnit}} value='{{ControlAreaGeneratingUnit}}'{{/ControlAreaGeneratingUnit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "AltGeneratingUnitMeas" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_priority").value; if ("" != temp) obj.priority = temp;
                temp = document.getElementById (id + "_AnalogValue").value; if ("" != temp) obj.AnalogValue = temp;
                temp = document.getElementById (id + "_ControlAreaGeneratingUnit").value; if ("" != temp) obj.ControlAreaGeneratingUnit = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AnalogValue", "1", "0..*", "AnalogValue", "AltGeneratingUnit"],
                            ["ControlAreaGeneratingUnit", "1", "0..*", "ControlAreaGeneratingUnit", "AltGeneratingUnitMeas"]
                        ]
                    )
                );
            }
        }

        /**
         * A control area<b> </b>is a grouping of generating units and/or loads and a cutset of tie lines (as terminals) which may be used for a variety of purposes including automatic generation control, powerflow solution area interchange control specification, and input to load forecasting.
         *
         * Note that any number of overlapping control area specifications can be superimposed on the physical model.
         *
         */
        class ControlArea extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ControlArea;
                if (null == bucket)
                   cim_data.ControlArea = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ControlArea[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "ControlArea";
                base.parse_element (/<cim:ControlArea.netInterchange>([\s\S]*?)<\/cim:ControlArea.netInterchange>/g, obj, "netInterchange", base.to_string, sub, context);
                base.parse_element (/<cim:ControlArea.pTolerance>([\s\S]*?)<\/cim:ControlArea.pTolerance>/g, obj, "pTolerance", base.to_string, sub, context);
                base.parse_attribute (/<cim:ControlArea.type\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "type", sub, context);
                base.parse_attributes (/<cim:ControlArea.ControlAreaGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ControlAreaGeneratingUnit", sub, context);
                base.parse_attributes (/<cim:ControlArea.TieFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TieFlow", sub, context);
                base.parse_attribute (/<cim:ControlArea.EnergyArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyArea", sub, context);
                var bucket = context.parsed.ControlArea;
                if (null == bucket)
                   context.parsed.ControlArea = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "ControlArea", "netInterchange", "netInterchange",  base.from_string, fields);
                base.export_element (obj, "ControlArea", "pTolerance", "pTolerance",  base.from_string, fields);
                base.export_attribute (obj, "ControlArea", "type", "type", fields);
                base.export_attributes (obj, "ControlArea", "ControlAreaGeneratingUnit", "ControlAreaGeneratingUnit", fields);
                base.export_attributes (obj, "ControlArea", "TieFlow", "TieFlow", fields);
                base.export_attribute (obj, "ControlArea", "EnergyArea", "EnergyArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ControlArea_collapse" aria-expanded="true" aria-controls="ControlArea_collapse" style="margin-left: 10px;">ControlArea</a></legend>
                    <div id="ControlArea_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#netInterchange}}<div><b>netInterchange</b>: {{netInterchange}}</div>{{/netInterchange}}
                    {{#pTolerance}}<div><b>pTolerance</b>: {{pTolerance}}</div>{{/pTolerance}}
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#ControlAreaGeneratingUnit}}<div><b>ControlAreaGeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ControlAreaGeneratingUnit}}
                    {{#TieFlow}}<div><b>TieFlow</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/TieFlow}}
                    {{#EnergyArea}}<div><b>EnergyArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EnergyArea}}&quot;);})'>{{EnergyArea}}</a></div>{{/EnergyArea}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ControlAreaTypeKind = []; if (!obj.type) obj.ControlAreaTypeKind.push ({ id: '', selected: true}); for (var property in ControlAreaTypeKind) obj.ControlAreaTypeKind.push ({ id: property, selected: obj.type && obj.type.endsWith ('.' + property)});
                if (obj.ControlAreaGeneratingUnit) obj.ControlAreaGeneratingUnit_string = obj.ControlAreaGeneratingUnit.join ();
                if (obj.TieFlow) obj.TieFlow_string = obj.TieFlow.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ControlAreaTypeKind;
                delete obj.ControlAreaGeneratingUnit_string;
                delete obj.TieFlow_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ControlArea_collapse" aria-expanded="true" aria-controls="{{id}}_ControlArea_collapse" style="margin-left: 10px;">ControlArea</a></legend>
                    <div id="{{id}}_ControlArea_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_netInterchange'>netInterchange: </label><div class='col-sm-8'><input id='{{id}}_netInterchange' class='form-control' type='text'{{#netInterchange}} value='{{netInterchange}}'{{/netInterchange}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pTolerance'>pTolerance: </label><div class='col-sm-8'><input id='{{id}}_pTolerance' class='form-control' type='text'{{#pTolerance}} value='{{pTolerance}}'{{/pTolerance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><select id='{{id}}_type' class='form-control'>{{#ControlAreaTypeKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ControlAreaTypeKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnergyArea'>EnergyArea: </label><div class='col-sm-8'><input id='{{id}}_EnergyArea' class='form-control' type='text'{{#EnergyArea}} value='{{EnergyArea}}'{{/EnergyArea}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ControlArea" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_netInterchange").value; if ("" != temp) obj.netInterchange = temp;
                temp = document.getElementById (id + "_pTolerance").value; if ("" != temp) obj.pTolerance = temp;
                temp = document.getElementById (id + "_type").value; if ("" != temp) { temp = ControlAreaTypeKind[temp]; if ("undefined" != typeof (temp)) obj.type = "http://iec.ch/TC57/2013/CIM-schema-cim16#ControlAreaTypeKind." + temp; }
                temp = document.getElementById (id + "_EnergyArea").value; if ("" != temp) obj.EnergyArea = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ControlAreaGeneratingUnit", "0..*", "1", "ControlAreaGeneratingUnit", "ControlArea"],
                            ["TieFlow", "0..*", "1", "TieFlow", "ControlArea"],
                            ["EnergyArea", "0..1", "0..1", "EnergyArea", "ControlArea"]
                        ]
                    )
                );
            }
        }

        return (
            {
                ControlAreaGeneratingUnit: ControlAreaGeneratingUnit,
                ControlArea: ControlArea,
                AltGeneratingUnitMeas: AltGeneratingUnitMeas,
                TieFlow: TieFlow,
                AltTieMeas: AltTieMeas
            }
        );
    }
);