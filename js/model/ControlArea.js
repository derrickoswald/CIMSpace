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
                this._id = template.id;
                var bucket = cim_data.TieFlow;
                if (null == bucket)
                   cim_data.TieFlow = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TieFlow[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TieFlow";
                base.parse_element (/<cim:TieFlow.positiveFlowIn>([\s\S]*?)<\/cim:TieFlow.positiveFlowIn>/g, obj, "positiveFlowIn", base.to_boolean, sub, context);
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

                base.export_element (obj, "TieFlow", "positiveFlowIn", base.from_boolean, fields);
                base.export_attribute (obj, "TieFlow", "Terminal", fields);
                base.export_attribute (obj, "TieFlow", "ControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TieFlow_collapse" aria-expanded="true" aria-controls="TieFlow_collapse" style="margin-left: 10px;">TieFlow</a></legend>
                    <div id="TieFlow_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#positiveFlowIn}}<div><b>positiveFlowIn</b>: {{positiveFlowIn}}</div>{{/positiveFlowIn}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TieFlow_collapse" aria-expanded="true" aria-controls="TieFlow_collapse" style="margin-left: 10px;">TieFlow</a></legend>
                    <div id="TieFlow_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='positiveFlowIn'>positiveFlowIn: </label><div class='col-sm-8'><input id='positiveFlowIn' class='form-check-input' type='checkbox'{{#positiveFlowIn}} checked{{/positiveFlowIn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Terminal'>Terminal: </label><div class='col-sm-8'><input id='Terminal' class='form-control' type='text'{{#Terminal}} value='{{Terminal}}'{{/Terminal}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ControlArea'>ControlArea: </label><div class='col-sm-8'><input id='ControlArea' class='form-control' type='text'{{#ControlArea}} value='{{ControlArea}}'{{/ControlArea}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.ControlAreaGeneratingUnit;
                if (null == bucket)
                   cim_data.ControlAreaGeneratingUnit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ControlAreaGeneratingUnit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ControlAreaGeneratingUnit";
                base.parse_attribute (/<cim:ControlAreaGeneratingUnit.ControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ControlArea", sub, context);
                base.parse_attribute (/<cim:ControlAreaGeneratingUnit.GeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingUnit", sub, context);

                var bucket = context.parsed.ControlAreaGeneratingUnit;
                if (null == bucket)
                   context.parsed.ControlAreaGeneratingUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ControlAreaGeneratingUnit", "ControlArea", fields);
                base.export_attribute (obj, "ControlAreaGeneratingUnit", "GeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ControlAreaGeneratingUnit_collapse" aria-expanded="true" aria-controls="ControlAreaGeneratingUnit_collapse" style="margin-left: 10px;">ControlAreaGeneratingUnit</a></legend>
                    <div id="ControlAreaGeneratingUnit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#ControlArea}}<div><b>ControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ControlArea}}&quot;);})'>{{ControlArea}}</a></div>{{/ControlArea}}
                    {{#GeneratingUnit}}<div><b>GeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GeneratingUnit}}&quot;);})'>{{GeneratingUnit}}</a></div>{{/GeneratingUnit}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ControlAreaGeneratingUnit_collapse" aria-expanded="true" aria-controls="ControlAreaGeneratingUnit_collapse" style="margin-left: 10px;">ControlAreaGeneratingUnit</a></legend>
                    <div id="ControlAreaGeneratingUnit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ControlArea'>ControlArea: </label><div class='col-sm-8'><input id='ControlArea' class='form-control' type='text'{{#ControlArea}} value='{{ControlArea}}'{{/ControlArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='GeneratingUnit'>GeneratingUnit: </label><div class='col-sm-8'><input id='GeneratingUnit' class='form-control' type='text'{{#GeneratingUnit}} value='{{GeneratingUnit}}'{{/GeneratingUnit}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.AltTieMeas;
                if (null == bucket)
                   cim_data.AltTieMeas = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AltTieMeas[this._id];
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

                base.export_element (obj, "AltTieMeas", "priority", base.from_string, fields);
                base.export_attribute (obj, "AltTieMeas", "TieFlow", fields);
                base.export_attribute (obj, "AltTieMeas", "AnalogValue", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AltTieMeas_collapse" aria-expanded="true" aria-controls="AltTieMeas_collapse" style="margin-left: 10px;">AltTieMeas</a></legend>
                    <div id="AltTieMeas_collapse" class="collapse in" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AltTieMeas_collapse" aria-expanded="true" aria-controls="AltTieMeas_collapse" style="margin-left: 10px;">AltTieMeas</a></legend>
                    <div id="AltTieMeas_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='priority'>priority: </label><div class='col-sm-8'><input id='priority' class='form-control' type='text'{{#priority}} value='{{priority}}'{{/priority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TieFlow'>TieFlow: </label><div class='col-sm-8'><input id='TieFlow' class='form-control' type='text'{{#TieFlow}} value='{{TieFlow}}'{{/TieFlow}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AnalogValue'>AnalogValue: </label><div class='col-sm-8'><input id='AnalogValue' class='form-control' type='text'{{#AnalogValue}} value='{{AnalogValue}}'{{/AnalogValue}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.AltGeneratingUnitMeas;
                if (null == bucket)
                   cim_data.AltGeneratingUnitMeas = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AltGeneratingUnitMeas[this._id];
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

                base.export_element (obj, "AltGeneratingUnitMeas", "priority", base.from_string, fields);
                base.export_attribute (obj, "AltGeneratingUnitMeas", "AnalogValue", fields);
                base.export_attribute (obj, "AltGeneratingUnitMeas", "ControlAreaGeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AltGeneratingUnitMeas_collapse" aria-expanded="true" aria-controls="AltGeneratingUnitMeas_collapse" style="margin-left: 10px;">AltGeneratingUnitMeas</a></legend>
                    <div id="AltGeneratingUnitMeas_collapse" class="collapse in" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AltGeneratingUnitMeas_collapse" aria-expanded="true" aria-controls="AltGeneratingUnitMeas_collapse" style="margin-left: 10px;">AltGeneratingUnitMeas</a></legend>
                    <div id="AltGeneratingUnitMeas_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='priority'>priority: </label><div class='col-sm-8'><input id='priority' class='form-control' type='text'{{#priority}} value='{{priority}}'{{/priority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AnalogValue'>AnalogValue: </label><div class='col-sm-8'><input id='AnalogValue' class='form-control' type='text'{{#AnalogValue}} value='{{AnalogValue}}'{{/AnalogValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ControlAreaGeneratingUnit'>ControlAreaGeneratingUnit: </label><div class='col-sm-8'><input id='ControlAreaGeneratingUnit' class='form-control' type='text'{{#ControlAreaGeneratingUnit}} value='{{ControlAreaGeneratingUnit}}'{{/ControlAreaGeneratingUnit}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.ControlArea;
                if (null == bucket)
                   cim_data.ControlArea = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ControlArea[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "ControlArea";
                base.parse_element (/<cim:ControlArea.netInterchange>([\s\S]*?)<\/cim:ControlArea.netInterchange>/g, obj, "netInterchange", base.to_string, sub, context);
                base.parse_element (/<cim:ControlArea.pTolerance>([\s\S]*?)<\/cim:ControlArea.pTolerance>/g, obj, "pTolerance", base.to_string, sub, context);
                base.parse_attribute (/<cim:ControlArea.type\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "type", sub, context);
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

                base.export_element (obj, "ControlArea", "netInterchange", base.from_string, fields);
                base.export_element (obj, "ControlArea", "pTolerance", base.from_string, fields);
                base.export_element (obj, "ControlArea", "type", base.from_string, fields);
                base.export_attribute (obj, "ControlArea", "EnergyArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ControlArea_collapse" aria-expanded="true" aria-controls="ControlArea_collapse" style="margin-left: 10px;">ControlArea</a></legend>
                    <div id="ControlArea_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#netInterchange}}<div><b>netInterchange</b>: {{netInterchange}}</div>{{/netInterchange}}
                    {{#pTolerance}}<div><b>pTolerance</b>: {{pTolerance}}</div>{{/pTolerance}}
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
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
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ControlAreaTypeKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ControlArea_collapse" aria-expanded="true" aria-controls="ControlArea_collapse" style="margin-left: 10px;">ControlArea</a></legend>
                    <div id="ControlArea_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='netInterchange'>netInterchange: </label><div class='col-sm-8'><input id='netInterchange' class='form-control' type='text'{{#netInterchange}} value='{{netInterchange}}'{{/netInterchange}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pTolerance'>pTolerance: </label><div class='col-sm-8'><input id='pTolerance' class='form-control' type='text'{{#pTolerance}} value='{{pTolerance}}'{{/pTolerance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='type'>type: </label><div class='col-sm-8'><select id='type' class='form-control'>{{#ControlAreaTypeKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ControlAreaTypeKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='EnergyArea'>EnergyArea: </label><div class='col-sm-8'><input id='EnergyArea' class='form-control' type='text'{{#EnergyArea}} value='{{EnergyArea}}'{{/EnergyArea}}></div></div>
                    </div>
                    <fieldset>
                    `
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