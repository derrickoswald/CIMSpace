define
(
    ["model/base", "model/Core"],
    /**
     * System Integrity Protection Schemes (SIPS) (IEC terminology).
     *
     * Other names used are: Remedial Action Schemes (RAS) or System Protection Schemes (SPS)
     *
     */
    function (base, Core)
    {

        /**
         * Categories of analog to digital (or logical result) comparison.
         *
         */
        var AnalogToDigitalLogicKind =
        {
            ne: "ne",
            eq: "eq",
            le: "le",
            lt: "lt",
            ge: "ge",
            gt: "gt"
        };
        Object.freeze (AnalogToDigitalLogicKind);

        /**
         * Categorisation of different protective action adjustments that can be performed on equipment.
         *
         */
        var ProtectiveActionAdjustmentKind =
        {
            byPercentage: "byPercentage",
            byValue: "byValue",
            setValue: "setValue",
            measurement: "measurement"
        };
        Object.freeze (ProtectiveActionAdjustmentKind);

        /**
         * Categorisation of type of compare done on a branch group.
         *
         */
        var PinBranchGroupKind =
        {
            activePower: "activePower",
            reactivePower: "reactivePower"
        };
        Object.freeze (PinBranchGroupKind);

        /**
         * Categorisation of type of compare done on Terminal.
         *
         */
        var PinTerminalKind =
        {
            activePower: "activePower",
            apparentPower: "apparentPower",
            reactivePower: "reactivePower",
            voltage: "voltage"
        };
        Object.freeze (PinTerminalKind);

        /**
         * Classification of Remedial Action Scheme.
         *
         */
        var RemedialActionSchemeKind =
        {
            rAS: "rAS",
            rAP: "rAP"
        };
        Object.freeze (RemedialActionSchemeKind);

        /**
         * Define the different logical operations.
         *
         */
        var GateLogicKind =
        {
            and: "and",
            or: "or",
            nor: "nor",
            nand: "nand",
            not: "not",
            xnor: "xnor",
            xor: "xor"
        };
        Object.freeze (GateLogicKind);

        /**
         * Categorisation of calculation operation that can be done to Measurement.
         *
         */
        var CalculationKind =
        {
            sum: "sum",
            mul: "mul",
            div: "div",
            sqrt: "sqrt"
        };
        Object.freeze (CalculationKind);

        /**
         * Categorisation of type of compare done on Equipment.
         *
         */
        var PinEquipmentKind =
        {
            inService: "inService",
            ratedCurrent: "ratedCurrent",
            voltageLimit: "voltageLimit",
            currentLimit: "currentLimit",
            activePowerLimit: "activePowerLimit",
            apparentPowerLimit: "apparentPowerLimit",
            connected: "connected"
        };
        Object.freeze (PinEquipmentKind);

        /**
         * Input pin for a logical gate.
         *
         * The condition described in the input pin will give a logical true or false. Result from measurement and calculation are converted to a true or false.
         *
         */
        class GateInputPin extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GateInputPin;
                if (null == bucket)
                   cim_data.GateInputPin = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GateInputPin[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "GateInputPin";
                base.parse_element (/<cim:GateInputPin.absoluteValue>([\s\S]*?)<\/cim:GateInputPin.absoluteValue>/g, obj, "absoluteValue", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:GateInputPin.aDLogicKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "aDLogicKind", sub, context);
                base.parse_element (/<cim:GateInputPin.duration>([\s\S]*?)<\/cim:GateInputPin.duration>/g, obj, "duration", base.to_string, sub, context);
                base.parse_element (/<cim:GateInputPin.negate>([\s\S]*?)<\/cim:GateInputPin.negate>/g, obj, "negate", base.to_boolean, sub, context);
                base.parse_element (/<cim:GateInputPin.thresholdPercentage>([\s\S]*?)<\/cim:GateInputPin.thresholdPercentage>/g, obj, "thresholdPercentage", base.to_string, sub, context);
                base.parse_element (/<cim:GateInputPin.thresholdValue>([\s\S]*?)<\/cim:GateInputPin.thresholdValue>/g, obj, "thresholdValue", base.to_float, sub, context);
                base.parse_attribute (/<cim:GateInputPin.Gate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Gate", sub, context);
                var bucket = context.parsed.GateInputPin;
                if (null == bucket)
                   context.parsed.GateInputPin = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "GateInputPin", "absoluteValue", "absoluteValue",  base.from_boolean, fields);
                base.export_attribute (obj, "GateInputPin", "aDLogicKind", "aDLogicKind", fields);
                base.export_element (obj, "GateInputPin", "duration", "duration",  base.from_string, fields);
                base.export_element (obj, "GateInputPin", "negate", "negate",  base.from_boolean, fields);
                base.export_element (obj, "GateInputPin", "thresholdPercentage", "thresholdPercentage",  base.from_string, fields);
                base.export_element (obj, "GateInputPin", "thresholdValue", "thresholdValue",  base.from_float, fields);
                base.export_attribute (obj, "GateInputPin", "Gate", "Gate", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GateInputPin_collapse" aria-expanded="true" aria-controls="GateInputPin_collapse" style="margin-left: 10px;">GateInputPin</a></legend>
                    <div id="GateInputPin_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#absoluteValue}}<div><b>absoluteValue</b>: {{absoluteValue}}</div>{{/absoluteValue}}
                    {{#aDLogicKind}}<div><b>aDLogicKind</b>: {{aDLogicKind}}</div>{{/aDLogicKind}}
                    {{#duration}}<div><b>duration</b>: {{duration}}</div>{{/duration}}
                    {{#negate}}<div><b>negate</b>: {{negate}}</div>{{/negate}}
                    {{#thresholdPercentage}}<div><b>thresholdPercentage</b>: {{thresholdPercentage}}</div>{{/thresholdPercentage}}
                    {{#thresholdValue}}<div><b>thresholdValue</b>: {{thresholdValue}}</div>{{/thresholdValue}}
                    {{#Gate}}<div><b>Gate</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Gate}}&quot;);})'>{{Gate}}</a></div>{{/Gate}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.AnalogToDigitalLogicKind = []; if (!obj.aDLogicKind) obj.AnalogToDigitalLogicKind.push ({ id: '', selected: true}); for (var property in AnalogToDigitalLogicKind) obj.AnalogToDigitalLogicKind.push ({ id: property, selected: obj.aDLogicKind && obj.aDLogicKind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.AnalogToDigitalLogicKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GateInputPin_collapse" aria-expanded="true" aria-controls="GateInputPin_collapse" style="margin-left: 10px;">GateInputPin</a></legend>
                    <div id="GateInputPin_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='absoluteValue'>absoluteValue: </label><div class='col-sm-8'><input id='absoluteValue' class='form-check-input' type='checkbox'{{#absoluteValue}} checked{{/absoluteValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='aDLogicKind'>aDLogicKind: </label><div class='col-sm-8'><select id='aDLogicKind' class='form-control'>{{#AnalogToDigitalLogicKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/AnalogToDigitalLogicKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='duration'>duration: </label><div class='col-sm-8'><input id='duration' class='form-control' type='text'{{#duration}} value='{{duration}}'{{/duration}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='negate'>negate: </label><div class='col-sm-8'><input id='negate' class='form-check-input' type='checkbox'{{#negate}} checked{{/negate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='thresholdPercentage'>thresholdPercentage: </label><div class='col-sm-8'><input id='thresholdPercentage' class='form-control' type='text'{{#thresholdPercentage}} value='{{thresholdPercentage}}'{{/thresholdPercentage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='thresholdValue'>thresholdValue: </label><div class='col-sm-8'><input id='thresholdValue' class='form-control' type='text'{{#thresholdValue}} value='{{thresholdValue}}'{{/thresholdValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Gate'>Gate: </label><div class='col-sm-8'><input id='Gate' class='form-control' type='text'{{#Gate}} value='{{Gate}}'{{/Gate}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "GateInputPin" };
                super.submit (obj);
                temp = document.getElementById ("absoluteValue").checked; if (temp) obj.absoluteValue = true;
                temp = document.getElementById ("aDLogicKind").value; if ("" != temp) { temp = AnalogToDigitalLogicKind[temp]; if ("undefined" != typeof (temp)) obj.aDLogicKind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#AnalogToDigitalLogicKind." + temp; }
                temp = document.getElementById ("duration").value; if ("" != temp) obj.duration = temp;
                temp = document.getElementById ("negate").checked; if (temp) obj.negate = true;
                temp = document.getElementById ("thresholdPercentage").value; if ("" != temp) obj.thresholdPercentage = temp;
                temp = document.getElementById ("thresholdValue").value; if ("" != temp) obj.thresholdValue = temp;
                temp = document.getElementById ("Gate").value; if ("" != temp) obj.Gate = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Gate", "Gate", "1", "1..*"]
                    ]
                );
            }
        }

        /**
         * Remedial Action Scheme (RAS), Special Protection Schemes (SPS), System Protection Schemes (SPS) or System Integrity Protection Schemes (SIPS).
         *
         */
        class RemedialActionScheme extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.RemedialActionScheme;
                if (null == bucket)
                   cim_data.RemedialActionScheme = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RemedialActionScheme[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "RemedialActionScheme";
                base.parse_element (/<cim:RemedialActionScheme.armed>([\s\S]*?)<\/cim:RemedialActionScheme.armed>/g, obj, "armed", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:RemedialActionScheme.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:RemedialActionScheme.normalArmed>([\s\S]*?)<\/cim:RemedialActionScheme.normalArmed>/g, obj, "normalArmed", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:RemedialActionScheme.TriggerCondition\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TriggerCondition", sub, context);
                base.parse_attributes (/<cim:RemedialActionScheme.Stage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Stage", sub, context);
                base.parse_attribute (/<cim:RemedialActionScheme.GateArmed\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GateArmed", sub, context);
                var bucket = context.parsed.RemedialActionScheme;
                if (null == bucket)
                   context.parsed.RemedialActionScheme = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "RemedialActionScheme", "armed", "armed",  base.from_boolean, fields);
                base.export_attribute (obj, "RemedialActionScheme", "kind", "kind", fields);
                base.export_element (obj, "RemedialActionScheme", "normalArmed", "normalArmed",  base.from_boolean, fields);
                base.export_attributes (obj, "RemedialActionScheme", "TriggerCondition", "TriggerCondition", fields);
                base.export_attributes (obj, "RemedialActionScheme", "Stage", "Stage", fields);
                base.export_attribute (obj, "RemedialActionScheme", "GateArmed", "GateArmed", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RemedialActionScheme_collapse" aria-expanded="true" aria-controls="RemedialActionScheme_collapse" style="margin-left: 10px;">RemedialActionScheme</a></legend>
                    <div id="RemedialActionScheme_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#armed}}<div><b>armed</b>: {{armed}}</div>{{/armed}}
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#normalArmed}}<div><b>normalArmed</b>: {{normalArmed}}</div>{{/normalArmed}}
                    {{#TriggerCondition}}<div><b>TriggerCondition</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/TriggerCondition}}
                    {{#Stage}}<div><b>Stage</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Stage}}
                    {{#GateArmed}}<div><b>GateArmed</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GateArmed}}&quot;);})'>{{GateArmed}}</a></div>{{/GateArmed}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.RemedialActionSchemeKind = []; if (!obj.kind) obj.RemedialActionSchemeKind.push ({ id: '', selected: true}); for (var property in RemedialActionSchemeKind) obj.RemedialActionSchemeKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
                if (obj.TriggerCondition) obj.TriggerCondition_string = obj.TriggerCondition.join ();
                if (obj.Stage) obj.Stage_string = obj.Stage.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.RemedialActionSchemeKind;
                delete obj.TriggerCondition_string;
                delete obj.Stage_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RemedialActionScheme_collapse" aria-expanded="true" aria-controls="RemedialActionScheme_collapse" style="margin-left: 10px;">RemedialActionScheme</a></legend>
                    <div id="RemedialActionScheme_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='armed'>armed: </label><div class='col-sm-8'><input id='armed' class='form-check-input' type='checkbox'{{#armed}} checked{{/armed}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#RemedialActionSchemeKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/RemedialActionSchemeKind}}</select></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='normalArmed'>normalArmed: </label><div class='col-sm-8'><input id='normalArmed' class='form-check-input' type='checkbox'{{#normalArmed}} checked{{/normalArmed}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='GateArmed'>GateArmed: </label><div class='col-sm-8'><input id='GateArmed' class='form-control' type='text'{{#GateArmed}} value='{{GateArmed}}'{{/GateArmed}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "RemedialActionScheme" };
                super.submit (obj);
                temp = document.getElementById ("armed").checked; if (temp) obj.armed = true;
                temp = document.getElementById ("kind").value; if ("" != temp) { temp = RemedialActionSchemeKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#RemedialActionSchemeKind." + temp; }
                temp = document.getElementById ("normalArmed").checked; if (temp) obj.normalArmed = true;
                temp = document.getElementById ("GateArmed").value; if ("" != temp) obj.GateArmed = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["TriggerCondition", "TriggerCondition", "0..*", "1"],
                        ["Stage", "Stage", "1..*", "1"],
                        ["GateArmed", "Gate", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Condition that is triggered either by TriggerCondition of by gate condition within a stage and has remedial action-s.
         *
         */
        class StageTrigger extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.StageTrigger;
                if (null == bucket)
                   cim_data.StageTrigger = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.StageTrigger[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "StageTrigger";
                base.parse_element (/<cim:StageTrigger.armed>([\s\S]*?)<\/cim:StageTrigger.armed>/g, obj, "armed", base.to_boolean, sub, context);
                base.parse_element (/<cim:StageTrigger.normalArmed>([\s\S]*?)<\/cim:StageTrigger.normalArmed>/g, obj, "normalArmed", base.to_boolean, sub, context);
                base.parse_element (/<cim:StageTrigger.priority>([\s\S]*?)<\/cim:StageTrigger.priority>/g, obj, "priority", base.to_string, sub, context);
                base.parse_attribute (/<cim:StageTrigger.Stage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Stage", sub, context);
                base.parse_attribute (/<cim:StageTrigger.GateTrigger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GateTrigger", sub, context);
                base.parse_attribute (/<cim:StageTrigger.GateArmed\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GateArmed", sub, context);
                base.parse_attribute (/<cim:StageTrigger.ProtectiveActionCollection\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProtectiveActionCollection", sub, context);
                base.parse_attribute (/<cim:StageTrigger.GateComCondition\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GateComCondition", sub, context);
                var bucket = context.parsed.StageTrigger;
                if (null == bucket)
                   context.parsed.StageTrigger = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "StageTrigger", "armed", "armed",  base.from_boolean, fields);
                base.export_element (obj, "StageTrigger", "normalArmed", "normalArmed",  base.from_boolean, fields);
                base.export_element (obj, "StageTrigger", "priority", "priority",  base.from_string, fields);
                base.export_attribute (obj, "StageTrigger", "Stage", "Stage", fields);
                base.export_attribute (obj, "StageTrigger", "GateTrigger", "GateTrigger", fields);
                base.export_attribute (obj, "StageTrigger", "GateArmed", "GateArmed", fields);
                base.export_attribute (obj, "StageTrigger", "ProtectiveActionCollection", "ProtectiveActionCollection", fields);
                base.export_attribute (obj, "StageTrigger", "GateComCondition", "GateComCondition", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#StageTrigger_collapse" aria-expanded="true" aria-controls="StageTrigger_collapse" style="margin-left: 10px;">StageTrigger</a></legend>
                    <div id="StageTrigger_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#armed}}<div><b>armed</b>: {{armed}}</div>{{/armed}}
                    {{#normalArmed}}<div><b>normalArmed</b>: {{normalArmed}}</div>{{/normalArmed}}
                    {{#priority}}<div><b>priority</b>: {{priority}}</div>{{/priority}}
                    {{#Stage}}<div><b>Stage</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Stage}}&quot;);})'>{{Stage}}</a></div>{{/Stage}}
                    {{#GateTrigger}}<div><b>GateTrigger</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GateTrigger}}&quot;);})'>{{GateTrigger}}</a></div>{{/GateTrigger}}
                    {{#GateArmed}}<div><b>GateArmed</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GateArmed}}&quot;);})'>{{GateArmed}}</a></div>{{/GateArmed}}
                    {{#ProtectiveActionCollection}}<div><b>ProtectiveActionCollection</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ProtectiveActionCollection}}&quot;);})'>{{ProtectiveActionCollection}}</a></div>{{/ProtectiveActionCollection}}
                    {{#GateComCondition}}<div><b>GateComCondition</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GateComCondition}}&quot;);})'>{{GateComCondition}}</a></div>{{/GateComCondition}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#StageTrigger_collapse" aria-expanded="true" aria-controls="StageTrigger_collapse" style="margin-left: 10px;">StageTrigger</a></legend>
                    <div id="StageTrigger_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='armed'>armed: </label><div class='col-sm-8'><input id='armed' class='form-check-input' type='checkbox'{{#armed}} checked{{/armed}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='normalArmed'>normalArmed: </label><div class='col-sm-8'><input id='normalArmed' class='form-check-input' type='checkbox'{{#normalArmed}} checked{{/normalArmed}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='priority'>priority: </label><div class='col-sm-8'><input id='priority' class='form-control' type='text'{{#priority}} value='{{priority}}'{{/priority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Stage'>Stage: </label><div class='col-sm-8'><input id='Stage' class='form-control' type='text'{{#Stage}} value='{{Stage}}'{{/Stage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='GateTrigger'>GateTrigger: </label><div class='col-sm-8'><input id='GateTrigger' class='form-control' type='text'{{#GateTrigger}} value='{{GateTrigger}}'{{/GateTrigger}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='GateArmed'>GateArmed: </label><div class='col-sm-8'><input id='GateArmed' class='form-control' type='text'{{#GateArmed}} value='{{GateArmed}}'{{/GateArmed}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ProtectiveActionCollection'>ProtectiveActionCollection: </label><div class='col-sm-8'><input id='ProtectiveActionCollection' class='form-control' type='text'{{#ProtectiveActionCollection}} value='{{ProtectiveActionCollection}}'{{/ProtectiveActionCollection}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='GateComCondition'>GateComCondition: </label><div class='col-sm-8'><input id='GateComCondition' class='form-control' type='text'{{#GateComCondition}} value='{{GateComCondition}}'{{/GateComCondition}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "StageTrigger" };
                super.submit (obj);
                temp = document.getElementById ("armed").checked; if (temp) obj.armed = true;
                temp = document.getElementById ("normalArmed").checked; if (temp) obj.normalArmed = true;
                temp = document.getElementById ("priority").value; if ("" != temp) obj.priority = temp;
                temp = document.getElementById ("Stage").value; if ("" != temp) obj.Stage = temp;
                temp = document.getElementById ("GateTrigger").value; if ("" != temp) obj.GateTrigger = temp;
                temp = document.getElementById ("GateArmed").value; if ("" != temp) obj.GateArmed = temp;
                temp = document.getElementById ("ProtectiveActionCollection").value; if ("" != temp) obj.ProtectiveActionCollection = temp;
                temp = document.getElementById ("GateComCondition").value; if ("" != temp) obj.GateComCondition = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Stage", "Stage", "1", "1..*"],
                        ["GateTrigger", "Gate", "0..1", "0..*"],
                        ["GateArmed", "Gate", "0..1", "0..*"],
                        ["ProtectiveActionCollection", "ProtectiveActionCollection", "1", "0..*"],
                        ["GateComCondition", "Gate", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * A protective action for supporting the integrity of the power system.
         *
         */
        class ProtectiveAction extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ProtectiveAction;
                if (null == bucket)
                   cim_data.ProtectiveAction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ProtectiveAction[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ProtectiveAction";
                base.parse_element (/<cim:ProtectiveAction.enabled>([\s\S]*?)<\/cim:ProtectiveAction.enabled>/g, obj, "enabled", base.to_boolean, sub, context);
                base.parse_element (/<cim:ProtectiveAction.normalEnabled>([\s\S]*?)<\/cim:ProtectiveAction.normalEnabled>/g, obj, "normalEnabled", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:ProtectiveAction.ProtectionEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProtectionEquipment", sub, context);
                base.parse_attribute (/<cim:ProtectiveAction.GateComCondition\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GateComCondition", sub, context);
                base.parse_attribute (/<cim:ProtectiveAction.ProtectiveActionCollection\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProtectiveActionCollection", sub, context);
                base.parse_attribute (/<cim:ProtectiveAction.GateEnabledCondition\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GateEnabledCondition", sub, context);
                var bucket = context.parsed.ProtectiveAction;
                if (null == bucket)
                   context.parsed.ProtectiveAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ProtectiveAction", "enabled", "enabled",  base.from_boolean, fields);
                base.export_element (obj, "ProtectiveAction", "normalEnabled", "normalEnabled",  base.from_boolean, fields);
                base.export_attribute (obj, "ProtectiveAction", "ProtectionEquipment", "ProtectionEquipment", fields);
                base.export_attribute (obj, "ProtectiveAction", "GateComCondition", "GateComCondition", fields);
                base.export_attribute (obj, "ProtectiveAction", "ProtectiveActionCollection", "ProtectiveActionCollection", fields);
                base.export_attribute (obj, "ProtectiveAction", "GateEnabledCondition", "GateEnabledCondition", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ProtectiveAction_collapse" aria-expanded="true" aria-controls="ProtectiveAction_collapse" style="margin-left: 10px;">ProtectiveAction</a></legend>
                    <div id="ProtectiveAction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#enabled}}<div><b>enabled</b>: {{enabled}}</div>{{/enabled}}
                    {{#normalEnabled}}<div><b>normalEnabled</b>: {{normalEnabled}}</div>{{/normalEnabled}}
                    {{#ProtectionEquipment}}<div><b>ProtectionEquipment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ProtectionEquipment}}&quot;);})'>{{ProtectionEquipment}}</a></div>{{/ProtectionEquipment}}
                    {{#GateComCondition}}<div><b>GateComCondition</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GateComCondition}}&quot;);})'>{{GateComCondition}}</a></div>{{/GateComCondition}}
                    {{#ProtectiveActionCollection}}<div><b>ProtectiveActionCollection</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ProtectiveActionCollection}}&quot;);})'>{{ProtectiveActionCollection}}</a></div>{{/ProtectiveActionCollection}}
                    {{#GateEnabledCondition}}<div><b>GateEnabledCondition</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GateEnabledCondition}}&quot;);})'>{{GateEnabledCondition}}</a></div>{{/GateEnabledCondition}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ProtectiveAction_collapse" aria-expanded="true" aria-controls="ProtectiveAction_collapse" style="margin-left: 10px;">ProtectiveAction</a></legend>
                    <div id="ProtectiveAction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='enabled'>enabled: </label><div class='col-sm-8'><input id='enabled' class='form-check-input' type='checkbox'{{#enabled}} checked{{/enabled}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='normalEnabled'>normalEnabled: </label><div class='col-sm-8'><input id='normalEnabled' class='form-check-input' type='checkbox'{{#normalEnabled}} checked{{/normalEnabled}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ProtectionEquipment'>ProtectionEquipment: </label><div class='col-sm-8'><input id='ProtectionEquipment' class='form-control' type='text'{{#ProtectionEquipment}} value='{{ProtectionEquipment}}'{{/ProtectionEquipment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='GateComCondition'>GateComCondition: </label><div class='col-sm-8'><input id='GateComCondition' class='form-control' type='text'{{#GateComCondition}} value='{{GateComCondition}}'{{/GateComCondition}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ProtectiveActionCollection'>ProtectiveActionCollection: </label><div class='col-sm-8'><input id='ProtectiveActionCollection' class='form-control' type='text'{{#ProtectiveActionCollection}} value='{{ProtectiveActionCollection}}'{{/ProtectiveActionCollection}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='GateEnabledCondition'>GateEnabledCondition: </label><div class='col-sm-8'><input id='GateEnabledCondition' class='form-control' type='text'{{#GateEnabledCondition}} value='{{GateEnabledCondition}}'{{/GateEnabledCondition}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ProtectiveAction" };
                super.submit (obj);
                temp = document.getElementById ("enabled").checked; if (temp) obj.enabled = true;
                temp = document.getElementById ("normalEnabled").checked; if (temp) obj.normalEnabled = true;
                temp = document.getElementById ("ProtectionEquipment").value; if ("" != temp) obj.ProtectionEquipment = temp;
                temp = document.getElementById ("GateComCondition").value; if ("" != temp) obj.GateComCondition = temp;
                temp = document.getElementById ("ProtectiveActionCollection").value; if ("" != temp) obj.ProtectiveActionCollection = temp;
                temp = document.getElementById ("GateEnabledCondition").value; if ("" != temp) obj.GateEnabledCondition = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ProtectionEquipment", "ProtectionEquipment", "0..1", "0..*"],
                        ["GateComCondition", "Gate", "0..1", "0..*"],
                        ["ProtectiveActionCollection", "ProtectiveActionCollection", "1", "1..*"],
                        ["GateEnabledCondition", "Gate", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Input to measurement calculation.
         *
         * Support Analog, Discrete and Accumulator.
         *
         */
        class MeasurementCalculatorInput extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.MeasurementCalculatorInput;
                if (null == bucket)
                   cim_data.MeasurementCalculatorInput = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MeasurementCalculatorInput[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MeasurementCalculatorInput";
                base.parse_element (/<cim:MeasurementCalculatorInput.absoluteValue>([\s\S]*?)<\/cim:MeasurementCalculatorInput.absoluteValue>/g, obj, "absoluteValue", base.to_boolean, sub, context);
                base.parse_element (/<cim:MeasurementCalculatorInput.order>([\s\S]*?)<\/cim:MeasurementCalculatorInput.order>/g, obj, "order", base.to_string, sub, context);
                base.parse_attribute (/<cim:MeasurementCalculatorInput.MeasurementCalculator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MeasurementCalculator", sub, context);
                base.parse_attribute (/<cim:MeasurementCalculatorInput.Measurement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Measurement", sub, context);
                var bucket = context.parsed.MeasurementCalculatorInput;
                if (null == bucket)
                   context.parsed.MeasurementCalculatorInput = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "MeasurementCalculatorInput", "absoluteValue", "absoluteValue",  base.from_boolean, fields);
                base.export_element (obj, "MeasurementCalculatorInput", "order", "order",  base.from_string, fields);
                base.export_attribute (obj, "MeasurementCalculatorInput", "MeasurementCalculator", "MeasurementCalculator", fields);
                base.export_attribute (obj, "MeasurementCalculatorInput", "Measurement", "Measurement", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MeasurementCalculatorInput_collapse" aria-expanded="true" aria-controls="MeasurementCalculatorInput_collapse" style="margin-left: 10px;">MeasurementCalculatorInput</a></legend>
                    <div id="MeasurementCalculatorInput_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#absoluteValue}}<div><b>absoluteValue</b>: {{absoluteValue}}</div>{{/absoluteValue}}
                    {{#order}}<div><b>order</b>: {{order}}</div>{{/order}}
                    {{#MeasurementCalculator}}<div><b>MeasurementCalculator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MeasurementCalculator}}&quot;);})'>{{MeasurementCalculator}}</a></div>{{/MeasurementCalculator}}
                    {{#Measurement}}<div><b>Measurement</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Measurement}}&quot;);})'>{{Measurement}}</a></div>{{/Measurement}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MeasurementCalculatorInput_collapse" aria-expanded="true" aria-controls="MeasurementCalculatorInput_collapse" style="margin-left: 10px;">MeasurementCalculatorInput</a></legend>
                    <div id="MeasurementCalculatorInput_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='absoluteValue'>absoluteValue: </label><div class='col-sm-8'><input id='absoluteValue' class='form-check-input' type='checkbox'{{#absoluteValue}} checked{{/absoluteValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='order'>order: </label><div class='col-sm-8'><input id='order' class='form-control' type='text'{{#order}} value='{{order}}'{{/order}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MeasurementCalculator'>MeasurementCalculator: </label><div class='col-sm-8'><input id='MeasurementCalculator' class='form-control' type='text'{{#MeasurementCalculator}} value='{{MeasurementCalculator}}'{{/MeasurementCalculator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Measurement'>Measurement: </label><div class='col-sm-8'><input id='Measurement' class='form-control' type='text'{{#Measurement}} value='{{Measurement}}'{{/Measurement}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "MeasurementCalculatorInput" };
                super.submit (obj);
                temp = document.getElementById ("absoluteValue").checked; if (temp) obj.absoluteValue = true;
                temp = document.getElementById ("order").value; if ("" != temp) obj.order = temp;
                temp = document.getElementById ("MeasurementCalculator").value; if ("" != temp) obj.MeasurementCalculator = temp;
                temp = document.getElementById ("Measurement").value; if ("" != temp) obj.Measurement = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["MeasurementCalculator", "MeasurementCalculator", "1", "1..*"],
                        ["Measurement", "Measurement", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Logical gate than support logical operation based on the input.
         *
         */
        class Gate extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Gate;
                if (null == bucket)
                   cim_data.Gate = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Gate[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Gate";
                base.parse_attribute (/<cim:Gate.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attributes (/<cim:Gate.GateInputPin\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GateInputPin", sub, context);
                base.parse_attributes (/<cim:Gate.RemedialActionScheme\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemedialActionScheme", sub, context);
                base.parse_attributes (/<cim:Gate.ProtectiveActionCom\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProtectiveActionCom", sub, context);
                base.parse_attributes (/<cim:Gate.PinGate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PinGate", sub, context);
                base.parse_attributes (/<cim:Gate.StageTrigger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StageTrigger", sub, context);
                base.parse_attributes (/<cim:Gate.StageTriggerArmed\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StageTriggerArmed", sub, context);
                base.parse_attributes (/<cim:Gate.ProtectiveActionEnabled\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProtectiveActionEnabled", sub, context);
                base.parse_attributes (/<cim:Gate.TriggerCondition\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TriggerCondition", sub, context);
                base.parse_attributes (/<cim:Gate.StageTriggerCom\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StageTriggerCom", sub, context);
                var bucket = context.parsed.Gate;
                if (null == bucket)
                   context.parsed.Gate = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Gate", "kind", "kind", fields);
                base.export_attributes (obj, "Gate", "GateInputPin", "GateInputPin", fields);
                base.export_attributes (obj, "Gate", "RemedialActionScheme", "RemedialActionScheme", fields);
                base.export_attributes (obj, "Gate", "ProtectiveActionCom", "ProtectiveActionCom", fields);
                base.export_attributes (obj, "Gate", "PinGate", "PinGate", fields);
                base.export_attributes (obj, "Gate", "StageTrigger", "StageTrigger", fields);
                base.export_attributes (obj, "Gate", "StageTriggerArmed", "StageTriggerArmed", fields);
                base.export_attributes (obj, "Gate", "ProtectiveActionEnabled", "ProtectiveActionEnabled", fields);
                base.export_attributes (obj, "Gate", "TriggerCondition", "TriggerCondition", fields);
                base.export_attributes (obj, "Gate", "StageTriggerCom", "StageTriggerCom", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Gate_collapse" aria-expanded="true" aria-controls="Gate_collapse" style="margin-left: 10px;">Gate</a></legend>
                    <div id="Gate_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#GateInputPin}}<div><b>GateInputPin</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/GateInputPin}}
                    {{#RemedialActionScheme}}<div><b>RemedialActionScheme</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/RemedialActionScheme}}
                    {{#ProtectiveActionCom}}<div><b>ProtectiveActionCom</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ProtectiveActionCom}}
                    {{#PinGate}}<div><b>PinGate</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/PinGate}}
                    {{#StageTrigger}}<div><b>StageTrigger</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/StageTrigger}}
                    {{#StageTriggerArmed}}<div><b>StageTriggerArmed</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/StageTriggerArmed}}
                    {{#ProtectiveActionEnabled}}<div><b>ProtectiveActionEnabled</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ProtectiveActionEnabled}}
                    {{#TriggerCondition}}<div><b>TriggerCondition</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/TriggerCondition}}
                    {{#StageTriggerCom}}<div><b>StageTriggerCom</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/StageTriggerCom}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.GateLogicKind = []; if (!obj.kind) obj.GateLogicKind.push ({ id: '', selected: true}); for (var property in GateLogicKind) obj.GateLogicKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
                if (obj.GateInputPin) obj.GateInputPin_string = obj.GateInputPin.join ();
                if (obj.RemedialActionScheme) obj.RemedialActionScheme_string = obj.RemedialActionScheme.join ();
                if (obj.ProtectiveActionCom) obj.ProtectiveActionCom_string = obj.ProtectiveActionCom.join ();
                if (obj.PinGate) obj.PinGate_string = obj.PinGate.join ();
                if (obj.StageTrigger) obj.StageTrigger_string = obj.StageTrigger.join ();
                if (obj.StageTriggerArmed) obj.StageTriggerArmed_string = obj.StageTriggerArmed.join ();
                if (obj.ProtectiveActionEnabled) obj.ProtectiveActionEnabled_string = obj.ProtectiveActionEnabled.join ();
                if (obj.TriggerCondition) obj.TriggerCondition_string = obj.TriggerCondition.join ();
                if (obj.StageTriggerCom) obj.StageTriggerCom_string = obj.StageTriggerCom.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.GateLogicKind;
                delete obj.GateInputPin_string;
                delete obj.RemedialActionScheme_string;
                delete obj.ProtectiveActionCom_string;
                delete obj.PinGate_string;
                delete obj.StageTrigger_string;
                delete obj.StageTriggerArmed_string;
                delete obj.ProtectiveActionEnabled_string;
                delete obj.TriggerCondition_string;
                delete obj.StageTriggerCom_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Gate_collapse" aria-expanded="true" aria-controls="Gate_collapse" style="margin-left: 10px;">Gate</a></legend>
                    <div id="Gate_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#GateLogicKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/GateLogicKind}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Gate" };
                super.submit (obj);
                temp = document.getElementById ("kind").value; if ("" != temp) { temp = GateLogicKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#GateLogicKind." + temp; }

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["GateInputPin", "GateInputPin", "1..*", "1"],
                        ["RemedialActionScheme", "RemedialActionScheme", "0..*", "0..1"],
                        ["ProtectiveActionCom", "ProtectiveAction", "0..*", "0..1"],
                        ["PinGate", "PinGate", "0..*", "1"],
                        ["StageTrigger", "StageTrigger", "0..*", "0..1"],
                        ["StageTriggerArmed", "StageTrigger", "0..*", "0..1"],
                        ["ProtectiveActionEnabled", "ProtectiveAction", "0..*", "0..1"],
                        ["TriggerCondition", "TriggerCondition", "0..*", "1"],
                        ["StageTriggerCom", "StageTrigger", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Stage of a remedial action scheme.
         *
         */
        class Stage extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Stage;
                if (null == bucket)
                   cim_data.Stage = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Stage[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Stage";
                base.parse_element (/<cim:Stage.priority>([\s\S]*?)<\/cim:Stage.priority>/g, obj, "priority", base.to_string, sub, context);
                base.parse_attributes (/<cim:Stage.StageTrigger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StageTrigger", sub, context);
                base.parse_attribute (/<cim:Stage.RemedialActionScheme\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemedialActionScheme", sub, context);
                var bucket = context.parsed.Stage;
                if (null == bucket)
                   context.parsed.Stage = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Stage", "priority", "priority",  base.from_string, fields);
                base.export_attributes (obj, "Stage", "StageTrigger", "StageTrigger", fields);
                base.export_attribute (obj, "Stage", "RemedialActionScheme", "RemedialActionScheme", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Stage_collapse" aria-expanded="true" aria-controls="Stage_collapse" style="margin-left: 10px;">Stage</a></legend>
                    <div id="Stage_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#priority}}<div><b>priority</b>: {{priority}}</div>{{/priority}}
                    {{#StageTrigger}}<div><b>StageTrigger</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/StageTrigger}}
                    {{#RemedialActionScheme}}<div><b>RemedialActionScheme</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RemedialActionScheme}}&quot;);})'>{{RemedialActionScheme}}</a></div>{{/RemedialActionScheme}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.StageTrigger) obj.StageTrigger_string = obj.StageTrigger.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.StageTrigger_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Stage_collapse" aria-expanded="true" aria-controls="Stage_collapse" style="margin-left: 10px;">Stage</a></legend>
                    <div id="Stage_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='priority'>priority: </label><div class='col-sm-8'><input id='priority' class='form-control' type='text'{{#priority}} value='{{priority}}'{{/priority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RemedialActionScheme'>RemedialActionScheme: </label><div class='col-sm-8'><input id='RemedialActionScheme' class='form-control' type='text'{{#RemedialActionScheme}} value='{{RemedialActionScheme}}'{{/RemedialActionScheme}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Stage" };
                super.submit (obj);
                temp = document.getElementById ("priority").value; if ("" != temp) obj.priority = temp;
                temp = document.getElementById ("RemedialActionScheme").value; if ("" != temp) obj.RemedialActionScheme = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["StageTrigger", "StageTrigger", "1..*", "1"],
                        ["RemedialActionScheme", "RemedialActionScheme", "1", "1..*"]
                    ]
                );
            }
        }

        /**
         * Result of a calculation of one or more measurement.
         *
         */
        class MeasurementCalculator extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.MeasurementCalculator;
                if (null == bucket)
                   cim_data.MeasurementCalculator = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MeasurementCalculator[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MeasurementCalculator";
                base.parse_attribute (/<cim:MeasurementCalculator.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attributes (/<cim:MeasurementCalculator.MeasurementCalculatorInput\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MeasurementCalculatorInput", sub, context);
                base.parse_attributes (/<cim:MeasurementCalculator.PinMeasurement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PinMeasurement", sub, context);
                var bucket = context.parsed.MeasurementCalculator;
                if (null == bucket)
                   context.parsed.MeasurementCalculator = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MeasurementCalculator", "kind", "kind", fields);
                base.export_attributes (obj, "MeasurementCalculator", "MeasurementCalculatorInput", "MeasurementCalculatorInput", fields);
                base.export_attributes (obj, "MeasurementCalculator", "PinMeasurement", "PinMeasurement", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MeasurementCalculator_collapse" aria-expanded="true" aria-controls="MeasurementCalculator_collapse" style="margin-left: 10px;">MeasurementCalculator</a></legend>
                    <div id="MeasurementCalculator_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#MeasurementCalculatorInput}}<div><b>MeasurementCalculatorInput</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MeasurementCalculatorInput}}
                    {{#PinMeasurement}}<div><b>PinMeasurement</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/PinMeasurement}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.CalculationKind = []; if (!obj.kind) obj.CalculationKind.push ({ id: '', selected: true}); for (var property in CalculationKind) obj.CalculationKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
                if (obj.MeasurementCalculatorInput) obj.MeasurementCalculatorInput_string = obj.MeasurementCalculatorInput.join ();
                if (obj.PinMeasurement) obj.PinMeasurement_string = obj.PinMeasurement.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.CalculationKind;
                delete obj.MeasurementCalculatorInput_string;
                delete obj.PinMeasurement_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MeasurementCalculator_collapse" aria-expanded="true" aria-controls="MeasurementCalculator_collapse" style="margin-left: 10px;">MeasurementCalculator</a></legend>
                    <div id="MeasurementCalculator_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#CalculationKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/CalculationKind}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "MeasurementCalculator" };
                super.submit (obj);
                temp = document.getElementById ("kind").value; if ("" != temp) { temp = CalculationKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#CalculationKind." + temp; }

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["MeasurementCalculatorInput", "MeasurementCalculatorInput", "1..*", "1"],
                        ["PinMeasurement", "PinMeasurement", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * A conditions that can trigger remedial actions.
         *
         */
        class TriggerCondition extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.TriggerCondition;
                if (null == bucket)
                   cim_data.TriggerCondition = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TriggerCondition[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TriggerCondition";
                base.parse_attribute (/<cim:TriggerCondition.RemedialActionScheme\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemedialActionScheme", sub, context);
                base.parse_attribute (/<cim:TriggerCondition.GateTrigger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GateTrigger", sub, context);
                var bucket = context.parsed.TriggerCondition;
                if (null == bucket)
                   context.parsed.TriggerCondition = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "TriggerCondition", "RemedialActionScheme", "RemedialActionScheme", fields);
                base.export_attribute (obj, "TriggerCondition", "GateTrigger", "GateTrigger", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TriggerCondition_collapse" aria-expanded="true" aria-controls="TriggerCondition_collapse" style="margin-left: 10px;">TriggerCondition</a></legend>
                    <div id="TriggerCondition_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#RemedialActionScheme}}<div><b>RemedialActionScheme</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RemedialActionScheme}}&quot;);})'>{{RemedialActionScheme}}</a></div>{{/RemedialActionScheme}}
                    {{#GateTrigger}}<div><b>GateTrigger</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GateTrigger}}&quot;);})'>{{GateTrigger}}</a></div>{{/GateTrigger}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TriggerCondition_collapse" aria-expanded="true" aria-controls="TriggerCondition_collapse" style="margin-left: 10px;">TriggerCondition</a></legend>
                    <div id="TriggerCondition_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RemedialActionScheme'>RemedialActionScheme: </label><div class='col-sm-8'><input id='RemedialActionScheme' class='form-control' type='text'{{#RemedialActionScheme}} value='{{RemedialActionScheme}}'{{/RemedialActionScheme}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='GateTrigger'>GateTrigger: </label><div class='col-sm-8'><input id='GateTrigger' class='form-control' type='text'{{#GateTrigger}} value='{{GateTrigger}}'{{/GateTrigger}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "TriggerCondition" };
                super.submit (obj);
                temp = document.getElementById ("RemedialActionScheme").value; if ("" != temp) obj.RemedialActionScheme = temp;
                temp = document.getElementById ("GateTrigger").value; if ("" != temp) obj.GateTrigger = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["RemedialActionScheme", "RemedialActionScheme", "1", "0..*"],
                        ["GateTrigger", "Gate", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * A collection of protective actions to protect the integrity of the power system.
         *
         */
        class ProtectiveActionCollection extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ProtectiveActionCollection;
                if (null == bucket)
                   cim_data.ProtectiveActionCollection = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ProtectiveActionCollection[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ProtectiveActionCollection";
                base.parse_attributes (/<cim:ProtectiveActionCollection.ProtectiveAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProtectiveAction", sub, context);
                base.parse_attributes (/<cim:ProtectiveActionCollection.StageTrigger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StageTrigger", sub, context);
                var bucket = context.parsed.ProtectiveActionCollection;
                if (null == bucket)
                   context.parsed.ProtectiveActionCollection = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ProtectiveActionCollection", "ProtectiveAction", "ProtectiveAction", fields);
                base.export_attributes (obj, "ProtectiveActionCollection", "StageTrigger", "StageTrigger", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ProtectiveActionCollection_collapse" aria-expanded="true" aria-controls="ProtectiveActionCollection_collapse" style="margin-left: 10px;">ProtectiveActionCollection</a></legend>
                    <div id="ProtectiveActionCollection_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#ProtectiveAction}}<div><b>ProtectiveAction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ProtectiveAction}}
                    {{#StageTrigger}}<div><b>StageTrigger</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/StageTrigger}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ProtectiveAction) obj.ProtectiveAction_string = obj.ProtectiveAction.join ();
                if (obj.StageTrigger) obj.StageTrigger_string = obj.StageTrigger.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ProtectiveAction_string;
                delete obj.StageTrigger_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ProtectiveActionCollection_collapse" aria-expanded="true" aria-controls="ProtectiveActionCollection_collapse" style="margin-left: 10px;">ProtectiveActionCollection</a></legend>
                    <div id="ProtectiveActionCollection_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var obj = obj || { cls: "ProtectiveActionCollection" };
                super.submit (obj);

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ProtectiveAction", "ProtectiveAction", "1..*", "1"],
                        ["StageTrigger", "StageTrigger", "0..*", "1"]
                    ]
                );
            }
        }

        /**
         * Value associated with Equipment is used as compare.
         *
         */
        class PinEquipment extends GateInputPin
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PinEquipment;
                if (null == bucket)
                   cim_data.PinEquipment = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PinEquipment[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = GateInputPin.prototype.parse.call (this, context, sub);
                obj.cls = "PinEquipment";
                base.parse_attribute (/<cim:PinEquipment.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:PinEquipment.Equipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Equipment", sub, context);
                var bucket = context.parsed.PinEquipment;
                if (null == bucket)
                   context.parsed.PinEquipment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = GateInputPin.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "PinEquipment", "kind", "kind", fields);
                base.export_attribute (obj, "PinEquipment", "Equipment", "Equipment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PinEquipment_collapse" aria-expanded="true" aria-controls="PinEquipment_collapse" style="margin-left: 10px;">PinEquipment</a></legend>
                    <div id="PinEquipment_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + GateInputPin.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#Equipment}}<div><b>Equipment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Equipment}}&quot;);})'>{{Equipment}}</a></div>{{/Equipment}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.PinEquipmentKind = []; if (!obj.kind) obj.PinEquipmentKind.push ({ id: '', selected: true}); for (var property in PinEquipmentKind) obj.PinEquipmentKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.PinEquipmentKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PinEquipment_collapse" aria-expanded="true" aria-controls="PinEquipment_collapse" style="margin-left: 10px;">PinEquipment</a></legend>
                    <div id="PinEquipment_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + GateInputPin.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#PinEquipmentKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/PinEquipmentKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Equipment'>Equipment: </label><div class='col-sm-8'><input id='Equipment' class='form-control' type='text'{{#Equipment}} value='{{Equipment}}'{{/Equipment}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "PinEquipment" };
                super.submit (obj);
                temp = document.getElementById ("kind").value; if ("" != temp) { temp = PinEquipmentKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#PinEquipmentKind." + temp; }
                temp = document.getElementById ("Equipment").value; if ("" != temp) obj.Equipment = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Equipment", "Equipment", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * An output from one gate represent an input to another gate.
         *
         */
        class PinGate extends GateInputPin
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PinGate;
                if (null == bucket)
                   cim_data.PinGate = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PinGate[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = GateInputPin.prototype.parse.call (this, context, sub);
                obj.cls = "PinGate";
                base.parse_attribute (/<cim:PinGate.GateOutput\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GateOutput", sub, context);
                var bucket = context.parsed.PinGate;
                if (null == bucket)
                   context.parsed.PinGate = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = GateInputPin.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "PinGate", "GateOutput", "GateOutput", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PinGate_collapse" aria-expanded="true" aria-controls="PinGate_collapse" style="margin-left: 10px;">PinGate</a></legend>
                    <div id="PinGate_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + GateInputPin.prototype.template.call (this) +
                    `
                    {{#GateOutput}}<div><b>GateOutput</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GateOutput}}&quot;);})'>{{GateOutput}}</a></div>{{/GateOutput}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PinGate_collapse" aria-expanded="true" aria-controls="PinGate_collapse" style="margin-left: 10px;">PinGate</a></legend>
                    <div id="PinGate_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + GateInputPin.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='GateOutput'>GateOutput: </label><div class='col-sm-8'><input id='GateOutput' class='form-control' type='text'{{#GateOutput}} value='{{GateOutput}}'{{/GateOutput}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "PinGate" };
                super.submit (obj);
                temp = document.getElementById ("GateOutput").value; if ("" != temp) obj.GateOutput = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["GateOutput", "Gate", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Value associated with Terminal is used as compare.
         *
         */
        class PinTerminal extends GateInputPin
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PinTerminal;
                if (null == bucket)
                   cim_data.PinTerminal = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PinTerminal[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = GateInputPin.prototype.parse.call (this, context, sub);
                obj.cls = "PinTerminal";
                base.parse_attribute (/<cim:PinTerminal.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:PinTerminal.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context);
                var bucket = context.parsed.PinTerminal;
                if (null == bucket)
                   context.parsed.PinTerminal = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = GateInputPin.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "PinTerminal", "kind", "kind", fields);
                base.export_attribute (obj, "PinTerminal", "Terminal", "Terminal", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PinTerminal_collapse" aria-expanded="true" aria-controls="PinTerminal_collapse" style="margin-left: 10px;">PinTerminal</a></legend>
                    <div id="PinTerminal_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + GateInputPin.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#Terminal}}<div><b>Terminal</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Terminal}}&quot;);})'>{{Terminal}}</a></div>{{/Terminal}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.PinTerminalKind = []; if (!obj.kind) obj.PinTerminalKind.push ({ id: '', selected: true}); for (var property in PinTerminalKind) obj.PinTerminalKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.PinTerminalKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PinTerminal_collapse" aria-expanded="true" aria-controls="PinTerminal_collapse" style="margin-left: 10px;">PinTerminal</a></legend>
                    <div id="PinTerminal_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + GateInputPin.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#PinTerminalKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/PinTerminalKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Terminal'>Terminal: </label><div class='col-sm-8'><input id='Terminal' class='form-control' type='text'{{#Terminal}} value='{{Terminal}}'{{/Terminal}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "PinTerminal" };
                super.submit (obj);
                temp = document.getElementById ("kind").value; if ("" != temp) { temp = PinTerminalKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#PinTerminalKind." + temp; }
                temp = document.getElementById ("Terminal").value; if ("" != temp) obj.Terminal = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Terminal", "Terminal", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Value associated with branch group is used as compare.
         *
         */
        class PinBranchGroup extends GateInputPin
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PinBranchGroup;
                if (null == bucket)
                   cim_data.PinBranchGroup = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PinBranchGroup[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = GateInputPin.prototype.parse.call (this, context, sub);
                obj.cls = "PinBranchGroup";
                base.parse_attribute (/<cim:PinBranchGroup.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:PinBranchGroup.BranchGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BranchGroup", sub, context);
                var bucket = context.parsed.PinBranchGroup;
                if (null == bucket)
                   context.parsed.PinBranchGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = GateInputPin.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "PinBranchGroup", "kind", "kind", fields);
                base.export_attribute (obj, "PinBranchGroup", "BranchGroup", "BranchGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PinBranchGroup_collapse" aria-expanded="true" aria-controls="PinBranchGroup_collapse" style="margin-left: 10px;">PinBranchGroup</a></legend>
                    <div id="PinBranchGroup_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + GateInputPin.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#BranchGroup}}<div><b>BranchGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{BranchGroup}}&quot;);})'>{{BranchGroup}}</a></div>{{/BranchGroup}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.PinBranchGroupKind = []; if (!obj.kind) obj.PinBranchGroupKind.push ({ id: '', selected: true}); for (var property in PinBranchGroupKind) obj.PinBranchGroupKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.PinBranchGroupKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PinBranchGroup_collapse" aria-expanded="true" aria-controls="PinBranchGroup_collapse" style="margin-left: 10px;">PinBranchGroup</a></legend>
                    <div id="PinBranchGroup_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + GateInputPin.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#PinBranchGroupKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/PinBranchGroupKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='BranchGroup'>BranchGroup: </label><div class='col-sm-8'><input id='BranchGroup' class='form-control' type='text'{{#BranchGroup}} value='{{BranchGroup}}'{{/BranchGroup}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "PinBranchGroup" };
                super.submit (obj);
                temp = document.getElementById ("kind").value; if ("" != temp) { temp = PinBranchGroupKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#PinBranchGroupKind." + temp; }
                temp = document.getElementById ("BranchGroup").value; if ("" != temp) obj.BranchGroup = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["BranchGroup", "BranchGroup", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Gate input pin that is associated with a Measurement or a calculation of Measurement.
         *
         */
        class PinMeasurement extends GateInputPin
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PinMeasurement;
                if (null == bucket)
                   cim_data.PinMeasurement = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PinMeasurement[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = GateInputPin.prototype.parse.call (this, context, sub);
                obj.cls = "PinMeasurement";
                base.parse_attribute (/<cim:PinMeasurement.Measurement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Measurement", sub, context);
                base.parse_attribute (/<cim:PinMeasurement.MeasurementCalculator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MeasurementCalculator", sub, context);
                var bucket = context.parsed.PinMeasurement;
                if (null == bucket)
                   context.parsed.PinMeasurement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = GateInputPin.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "PinMeasurement", "Measurement", "Measurement", fields);
                base.export_attribute (obj, "PinMeasurement", "MeasurementCalculator", "MeasurementCalculator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PinMeasurement_collapse" aria-expanded="true" aria-controls="PinMeasurement_collapse" style="margin-left: 10px;">PinMeasurement</a></legend>
                    <div id="PinMeasurement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + GateInputPin.prototype.template.call (this) +
                    `
                    {{#Measurement}}<div><b>Measurement</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Measurement}}&quot;);})'>{{Measurement}}</a></div>{{/Measurement}}
                    {{#MeasurementCalculator}}<div><b>MeasurementCalculator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MeasurementCalculator}}&quot;);})'>{{MeasurementCalculator}}</a></div>{{/MeasurementCalculator}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PinMeasurement_collapse" aria-expanded="true" aria-controls="PinMeasurement_collapse" style="margin-left: 10px;">PinMeasurement</a></legend>
                    <div id="PinMeasurement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + GateInputPin.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Measurement'>Measurement: </label><div class='col-sm-8'><input id='Measurement' class='form-control' type='text'{{#Measurement}} value='{{Measurement}}'{{/Measurement}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MeasurementCalculator'>MeasurementCalculator: </label><div class='col-sm-8'><input id='MeasurementCalculator' class='form-control' type='text'{{#MeasurementCalculator}} value='{{MeasurementCalculator}}'{{/MeasurementCalculator}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "PinMeasurement" };
                super.submit (obj);
                temp = document.getElementById ("Measurement").value; if ("" != temp) obj.Measurement = temp;
                temp = document.getElementById ("MeasurementCalculator").value; if ("" != temp) obj.MeasurementCalculator = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Measurement", "Measurement", "0..1", "0..*"],
                        ["MeasurementCalculator", "MeasurementCalculator", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Protective action to change regulation to Equipment.
         *
         */
        class ProtectiveActionRegulation extends ProtectiveAction
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ProtectiveActionRegulation;
                if (null == bucket)
                   cim_data.ProtectiveActionRegulation = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ProtectiveActionRegulation[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ProtectiveAction.prototype.parse.call (this, context, sub);
                obj.cls = "ProtectiveActionRegulation";
                base.parse_element (/<cim:ProtectiveActionRegulation.isRegulating>([\s\S]*?)<\/cim:ProtectiveActionRegulation.isRegulating>/g, obj, "isRegulating", base.to_boolean, sub, context);
                base.parse_element (/<cim:ProtectiveActionRegulation.targetValue>([\s\S]*?)<\/cim:ProtectiveActionRegulation.targetValue>/g, obj, "targetValue", base.to_float, sub, context);
                base.parse_attribute (/<cim:ProtectiveActionRegulation.RegulatingControl\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegulatingControl", sub, context);
                var bucket = context.parsed.ProtectiveActionRegulation;
                if (null == bucket)
                   context.parsed.ProtectiveActionRegulation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ProtectiveAction.prototype.export.call (this, obj, false);

                base.export_element (obj, "ProtectiveActionRegulation", "isRegulating", "isRegulating",  base.from_boolean, fields);
                base.export_element (obj, "ProtectiveActionRegulation", "targetValue", "targetValue",  base.from_float, fields);
                base.export_attribute (obj, "ProtectiveActionRegulation", "RegulatingControl", "RegulatingControl", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ProtectiveActionRegulation_collapse" aria-expanded="true" aria-controls="ProtectiveActionRegulation_collapse" style="margin-left: 10px;">ProtectiveActionRegulation</a></legend>
                    <div id="ProtectiveActionRegulation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ProtectiveAction.prototype.template.call (this) +
                    `
                    {{#isRegulating}}<div><b>isRegulating</b>: {{isRegulating}}</div>{{/isRegulating}}
                    {{#targetValue}}<div><b>targetValue</b>: {{targetValue}}</div>{{/targetValue}}
                    {{#RegulatingControl}}<div><b>RegulatingControl</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegulatingControl}}&quot;);})'>{{RegulatingControl}}</a></div>{{/RegulatingControl}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ProtectiveActionRegulation_collapse" aria-expanded="true" aria-controls="ProtectiveActionRegulation_collapse" style="margin-left: 10px;">ProtectiveActionRegulation</a></legend>
                    <div id="ProtectiveActionRegulation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ProtectiveAction.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isRegulating'>isRegulating: </label><div class='col-sm-8'><input id='isRegulating' class='form-check-input' type='checkbox'{{#isRegulating}} checked{{/isRegulating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='targetValue'>targetValue: </label><div class='col-sm-8'><input id='targetValue' class='form-control' type='text'{{#targetValue}} value='{{targetValue}}'{{/targetValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegulatingControl'>RegulatingControl: </label><div class='col-sm-8'><input id='RegulatingControl' class='form-control' type='text'{{#RegulatingControl}} value='{{RegulatingControl}}'{{/RegulatingControl}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ProtectiveActionRegulation" };
                super.submit (obj);
                temp = document.getElementById ("isRegulating").checked; if (temp) obj.isRegulating = true;
                temp = document.getElementById ("targetValue").value; if ("" != temp) obj.targetValue = temp;
                temp = document.getElementById ("RegulatingControl").value; if ("" != temp) obj.RegulatingControl = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["RegulatingControl", "RegulatingControl", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Protective actions on non-switching equipment.
         *
         * The operating condition is adjusted.
         *
         */
        class ProtectiveActionAdjustment extends ProtectiveAction
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ProtectiveActionAdjustment;
                if (null == bucket)
                   cim_data.ProtectiveActionAdjustment = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ProtectiveActionAdjustment[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ProtectiveAction.prototype.parse.call (this, context, sub);
                obj.cls = "ProtectiveActionAdjustment";
                base.parse_element (/<cim:ProtectiveActionAdjustment.byPercentage>([\s\S]*?)<\/cim:ProtectiveActionAdjustment.byPercentage>/g, obj, "byPercentage", base.to_string, sub, context);
                base.parse_element (/<cim:ProtectiveActionAdjustment.byValue>([\s\S]*?)<\/cim:ProtectiveActionAdjustment.byValue>/g, obj, "byValue", base.to_float, sub, context);
                base.parse_attribute (/<cim:ProtectiveActionAdjustment.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:ProtectiveActionAdjustment.reduce>([\s\S]*?)<\/cim:ProtectiveActionAdjustment.reduce>/g, obj, "reduce", base.to_boolean, sub, context);
                base.parse_element (/<cim:ProtectiveActionAdjustment.setValue>([\s\S]*?)<\/cim:ProtectiveActionAdjustment.setValue>/g, obj, "setValue", base.to_float, sub, context);
                base.parse_attribute (/<cim:ProtectiveActionAdjustment.Measurement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Measurement", sub, context);
                base.parse_attribute (/<cim:ProtectiveActionAdjustment.ConductingEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConductingEquipment", sub, context);
                base.parse_attribute (/<cim:ProtectiveActionAdjustment.DCConductingEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DCConductingEquipment", sub, context);
                var bucket = context.parsed.ProtectiveActionAdjustment;
                if (null == bucket)
                   context.parsed.ProtectiveActionAdjustment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ProtectiveAction.prototype.export.call (this, obj, false);

                base.export_element (obj, "ProtectiveActionAdjustment", "byPercentage", "byPercentage",  base.from_string, fields);
                base.export_element (obj, "ProtectiveActionAdjustment", "byValue", "byValue",  base.from_float, fields);
                base.export_attribute (obj, "ProtectiveActionAdjustment", "kind", "kind", fields);
                base.export_element (obj, "ProtectiveActionAdjustment", "reduce", "reduce",  base.from_boolean, fields);
                base.export_element (obj, "ProtectiveActionAdjustment", "setValue", "setValue",  base.from_float, fields);
                base.export_attribute (obj, "ProtectiveActionAdjustment", "Measurement", "Measurement", fields);
                base.export_attribute (obj, "ProtectiveActionAdjustment", "ConductingEquipment", "ConductingEquipment", fields);
                base.export_attribute (obj, "ProtectiveActionAdjustment", "DCConductingEquipment", "DCConductingEquipment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ProtectiveActionAdjustment_collapse" aria-expanded="true" aria-controls="ProtectiveActionAdjustment_collapse" style="margin-left: 10px;">ProtectiveActionAdjustment</a></legend>
                    <div id="ProtectiveActionAdjustment_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ProtectiveAction.prototype.template.call (this) +
                    `
                    {{#byPercentage}}<div><b>byPercentage</b>: {{byPercentage}}</div>{{/byPercentage}}
                    {{#byValue}}<div><b>byValue</b>: {{byValue}}</div>{{/byValue}}
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#reduce}}<div><b>reduce</b>: {{reduce}}</div>{{/reduce}}
                    {{#setValue}}<div><b>setValue</b>: {{setValue}}</div>{{/setValue}}
                    {{#Measurement}}<div><b>Measurement</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Measurement}}&quot;);})'>{{Measurement}}</a></div>{{/Measurement}}
                    {{#ConductingEquipment}}<div><b>ConductingEquipment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ConductingEquipment}}&quot;);})'>{{ConductingEquipment}}</a></div>{{/ConductingEquipment}}
                    {{#DCConductingEquipment}}<div><b>DCConductingEquipment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DCConductingEquipment}}&quot;);})'>{{DCConductingEquipment}}</a></div>{{/DCConductingEquipment}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ProtectiveActionAdjustmentKind = []; if (!obj.kind) obj.ProtectiveActionAdjustmentKind.push ({ id: '', selected: true}); for (var property in ProtectiveActionAdjustmentKind) obj.ProtectiveActionAdjustmentKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ProtectiveActionAdjustmentKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ProtectiveActionAdjustment_collapse" aria-expanded="true" aria-controls="ProtectiveActionAdjustment_collapse" style="margin-left: 10px;">ProtectiveActionAdjustment</a></legend>
                    <div id="ProtectiveActionAdjustment_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ProtectiveAction.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='byPercentage'>byPercentage: </label><div class='col-sm-8'><input id='byPercentage' class='form-control' type='text'{{#byPercentage}} value='{{byPercentage}}'{{/byPercentage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='byValue'>byValue: </label><div class='col-sm-8'><input id='byValue' class='form-control' type='text'{{#byValue}} value='{{byValue}}'{{/byValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#ProtectiveActionAdjustmentKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ProtectiveActionAdjustmentKind}}</select></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='reduce'>reduce: </label><div class='col-sm-8'><input id='reduce' class='form-check-input' type='checkbox'{{#reduce}} checked{{/reduce}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='setValue'>setValue: </label><div class='col-sm-8'><input id='setValue' class='form-control' type='text'{{#setValue}} value='{{setValue}}'{{/setValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Measurement'>Measurement: </label><div class='col-sm-8'><input id='Measurement' class='form-control' type='text'{{#Measurement}} value='{{Measurement}}'{{/Measurement}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ConductingEquipment'>ConductingEquipment: </label><div class='col-sm-8'><input id='ConductingEquipment' class='form-control' type='text'{{#ConductingEquipment}} value='{{ConductingEquipment}}'{{/ConductingEquipment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='DCConductingEquipment'>DCConductingEquipment: </label><div class='col-sm-8'><input id='DCConductingEquipment' class='form-control' type='text'{{#DCConductingEquipment}} value='{{DCConductingEquipment}}'{{/DCConductingEquipment}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ProtectiveActionAdjustment" };
                super.submit (obj);
                temp = document.getElementById ("byPercentage").value; if ("" != temp) obj.byPercentage = temp;
                temp = document.getElementById ("byValue").value; if ("" != temp) obj.byValue = temp;
                temp = document.getElementById ("kind").value; if ("" != temp) { temp = ProtectiveActionAdjustmentKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#ProtectiveActionAdjustmentKind." + temp; }
                temp = document.getElementById ("reduce").checked; if (temp) obj.reduce = true;
                temp = document.getElementById ("setValue").value; if ("" != temp) obj.setValue = temp;
                temp = document.getElementById ("Measurement").value; if ("" != temp) obj.Measurement = temp;
                temp = document.getElementById ("ConductingEquipment").value; if ("" != temp) obj.ConductingEquipment = temp;
                temp = document.getElementById ("DCConductingEquipment").value; if ("" != temp) obj.DCConductingEquipment = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Measurement", "Measurement", "0..1", "0..*"],
                        ["ConductingEquipment", "ConductingEquipment", "1", "0..*"],
                        ["DCConductingEquipment", "DCConductingEquipment", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Protective action to put an Equipment in-service/out-of-service.
         *
         */
        class ProtectiveActionEquipment extends ProtectiveAction
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ProtectiveActionEquipment;
                if (null == bucket)
                   cim_data.ProtectiveActionEquipment = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ProtectiveActionEquipment[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ProtectiveAction.prototype.parse.call (this, context, sub);
                obj.cls = "ProtectiveActionEquipment";
                base.parse_element (/<cim:ProtectiveActionEquipment.inService>([\s\S]*?)<\/cim:ProtectiveActionEquipment.inService>/g, obj, "inService", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:ProtectiveActionEquipment.Equipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Equipment", sub, context);
                var bucket = context.parsed.ProtectiveActionEquipment;
                if (null == bucket)
                   context.parsed.ProtectiveActionEquipment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ProtectiveAction.prototype.export.call (this, obj, false);

                base.export_element (obj, "ProtectiveActionEquipment", "inService", "inService",  base.from_boolean, fields);
                base.export_attribute (obj, "ProtectiveActionEquipment", "Equipment", "Equipment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ProtectiveActionEquipment_collapse" aria-expanded="true" aria-controls="ProtectiveActionEquipment_collapse" style="margin-left: 10px;">ProtectiveActionEquipment</a></legend>
                    <div id="ProtectiveActionEquipment_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ProtectiveAction.prototype.template.call (this) +
                    `
                    {{#inService}}<div><b>inService</b>: {{inService}}</div>{{/inService}}
                    {{#Equipment}}<div><b>Equipment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Equipment}}&quot;);})'>{{Equipment}}</a></div>{{/Equipment}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ProtectiveActionEquipment_collapse" aria-expanded="true" aria-controls="ProtectiveActionEquipment_collapse" style="margin-left: 10px;">ProtectiveActionEquipment</a></legend>
                    <div id="ProtectiveActionEquipment_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ProtectiveAction.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='inService'>inService: </label><div class='col-sm-8'><input id='inService' class='form-check-input' type='checkbox'{{#inService}} checked{{/inService}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Equipment'>Equipment: </label><div class='col-sm-8'><input id='Equipment' class='form-control' type='text'{{#Equipment}} value='{{Equipment}}'{{/Equipment}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ProtectiveActionEquipment" };
                super.submit (obj);
                temp = document.getElementById ("inService").checked; if (temp) obj.inService = true;
                temp = document.getElementById ("Equipment").value; if ("" != temp) obj.Equipment = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Equipment", "Equipment", "1", "0..*"]
                    ]
                );
            }
        }

        return (
            {
                PinMeasurement: PinMeasurement,
                Stage: Stage,
                PinBranchGroup: PinBranchGroup,
                ProtectiveActionRegulation: ProtectiveActionRegulation,
                TriggerCondition: TriggerCondition,
                ProtectiveActionCollection: ProtectiveActionCollection,
                ProtectiveActionAdjustment: ProtectiveActionAdjustment,
                PinEquipment: PinEquipment,
                Gate: Gate,
                GateInputPin: GateInputPin,
                MeasurementCalculator: MeasurementCalculator,
                PinTerminal: PinTerminal,
                StageTrigger: StageTrigger,
                PinGate: PinGate,
                MeasurementCalculatorInput: MeasurementCalculatorInput,
                ProtectiveAction: ProtectiveAction,
                ProtectiveActionEquipment: ProtectiveActionEquipment,
                RemedialActionScheme: RemedialActionScheme
            }
        );
    }
);