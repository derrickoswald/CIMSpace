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
                this._id = template.id;
                var bucket = cim_data.GateInputPin;
                if (null == bucket)
                   cim_data.GateInputPin = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GateInputPin[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "GateInputPin";
                base.parse_element (/<cim:GateInputPin.absoluteValue>([\s\S]*?)<\/cim:GateInputPin.absoluteValue>/g, obj, "absoluteValue", base.to_boolean, sub, context);
                base.parse_element (/<cim:GateInputPin.aDLogicKind>([\s\S]*?)<\/cim:GateInputPin.aDLogicKind>/g, obj, "aDLogicKind", base.to_string, sub, context);
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

                base.export_element (obj, "GateInputPin", "absoluteValue", base.from_boolean, fields);
                base.export_element (obj, "GateInputPin", "aDLogicKind", base.from_string, fields);
                base.export_element (obj, "GateInputPin", "duration", base.from_string, fields);
                base.export_element (obj, "GateInputPin", "negate", base.from_boolean, fields);
                base.export_element (obj, "GateInputPin", "thresholdPercentage", base.from_string, fields);
                base.export_element (obj, "GateInputPin", "thresholdValue", base.from_float, fields);
                base.export_attribute (obj, "GateInputPin", "Gate", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GateInputPin_collapse" aria-expanded="true" aria-controls="GateInputPin_collapse">GateInputPin</a>
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
`
                );
           }        }

        /**
         * Remedial Action Scheme (RAS), Special Protection Schemes (SPS), System Protection Schemes (SPS) or System Integrity Protection Schemes (SIPS).
         *
         */
        class RemedialActionScheme extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RemedialActionScheme;
                if (null == bucket)
                   cim_data.RemedialActionScheme = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RemedialActionScheme[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "RemedialActionScheme";
                base.parse_element (/<cim:RemedialActionScheme.armed>([\s\S]*?)<\/cim:RemedialActionScheme.armed>/g, obj, "armed", base.to_boolean, sub, context);
                base.parse_element (/<cim:RemedialActionScheme.kind>([\s\S]*?)<\/cim:RemedialActionScheme.kind>/g, obj, "kind", base.to_string, sub, context);
                base.parse_element (/<cim:RemedialActionScheme.normalArmed>([\s\S]*?)<\/cim:RemedialActionScheme.normalArmed>/g, obj, "normalArmed", base.to_boolean, sub, context);
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

                base.export_element (obj, "RemedialActionScheme", "armed", base.from_boolean, fields);
                base.export_element (obj, "RemedialActionScheme", "kind", base.from_string, fields);
                base.export_element (obj, "RemedialActionScheme", "normalArmed", base.from_boolean, fields);
                base.export_attribute (obj, "RemedialActionScheme", "GateArmed", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#RemedialActionScheme_collapse" aria-expanded="true" aria-controls="RemedialActionScheme_collapse">RemedialActionScheme</a>
<div id="RemedialActionScheme_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.PowerSystemResource.prototype.template.call (this) +
`
{{#armed}}<div><b>armed</b>: {{armed}}</div>{{/armed}}
{{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
{{#normalArmed}}<div><b>normalArmed</b>: {{normalArmed}}</div>{{/normalArmed}}
{{#GateArmed}}<div><b>GateArmed</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GateArmed}}&quot;);})'>{{GateArmed}}</a></div>{{/GateArmed}}
</div>
`
                );
           }        }

        /**
         * Condition that is triggered either by TriggerCondition of by gate condition within a stage and has remedial action-s.
         *
         */
        class StageTrigger extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.StageTrigger;
                if (null == bucket)
                   cim_data.StageTrigger = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.StageTrigger[this._id];
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

                base.export_element (obj, "StageTrigger", "armed", base.from_boolean, fields);
                base.export_element (obj, "StageTrigger", "normalArmed", base.from_boolean, fields);
                base.export_element (obj, "StageTrigger", "priority", base.from_string, fields);
                base.export_attribute (obj, "StageTrigger", "Stage", fields);
                base.export_attribute (obj, "StageTrigger", "GateTrigger", fields);
                base.export_attribute (obj, "StageTrigger", "GateArmed", fields);
                base.export_attribute (obj, "StageTrigger", "ProtectiveActionCollection", fields);
                base.export_attribute (obj, "StageTrigger", "GateComCondition", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#StageTrigger_collapse" aria-expanded="true" aria-controls="StageTrigger_collapse">StageTrigger</a>
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
`
                );
           }        }

        /**
         * A protective action for supporting the integrity of the power system.
         *
         */
        class ProtectiveAction extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ProtectiveAction;
                if (null == bucket)
                   cim_data.ProtectiveAction = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ProtectiveAction[this._id];
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

                base.export_element (obj, "ProtectiveAction", "enabled", base.from_boolean, fields);
                base.export_element (obj, "ProtectiveAction", "normalEnabled", base.from_boolean, fields);
                base.export_attribute (obj, "ProtectiveAction", "ProtectionEquipment", fields);
                base.export_attribute (obj, "ProtectiveAction", "GateComCondition", fields);
                base.export_attribute (obj, "ProtectiveAction", "ProtectiveActionCollection", fields);
                base.export_attribute (obj, "ProtectiveAction", "GateEnabledCondition", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ProtectiveAction_collapse" aria-expanded="true" aria-controls="ProtectiveAction_collapse">ProtectiveAction</a>
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
`
                );
           }        }

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
                this._id = template.id;
                var bucket = cim_data.MeasurementCalculatorInput;
                if (null == bucket)
                   cim_data.MeasurementCalculatorInput = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MeasurementCalculatorInput[this._id];
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

                base.export_element (obj, "MeasurementCalculatorInput", "absoluteValue", base.from_boolean, fields);
                base.export_element (obj, "MeasurementCalculatorInput", "order", base.from_string, fields);
                base.export_attribute (obj, "MeasurementCalculatorInput", "MeasurementCalculator", fields);
                base.export_attribute (obj, "MeasurementCalculatorInput", "Measurement", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MeasurementCalculatorInput_collapse" aria-expanded="true" aria-controls="MeasurementCalculatorInput_collapse">MeasurementCalculatorInput</a>
<div id="MeasurementCalculatorInput_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#absoluteValue}}<div><b>absoluteValue</b>: {{absoluteValue}}</div>{{/absoluteValue}}
{{#order}}<div><b>order</b>: {{order}}</div>{{/order}}
{{#MeasurementCalculator}}<div><b>MeasurementCalculator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MeasurementCalculator}}&quot;);})'>{{MeasurementCalculator}}</a></div>{{/MeasurementCalculator}}
{{#Measurement}}<div><b>Measurement</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Measurement}}&quot;);})'>{{Measurement}}</a></div>{{/Measurement}}
</div>
`
                );
           }        }

        /**
         * Categories of analog to digital (or logical result) comparison.
         *
         */
        class AnalogToDigitalLogicKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AnalogToDigitalLogicKind;
                if (null == bucket)
                   cim_data.AnalogToDigitalLogicKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AnalogToDigitalLogicKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AnalogToDigitalLogicKind";
                base.parse_element (/<cim:AnalogToDigitalLogicKind.ne>([\s\S]*?)<\/cim:AnalogToDigitalLogicKind.ne>/g, obj, "ne", base.to_string, sub, context);
                base.parse_element (/<cim:AnalogToDigitalLogicKind.eq>([\s\S]*?)<\/cim:AnalogToDigitalLogicKind.eq>/g, obj, "eq", base.to_string, sub, context);
                base.parse_element (/<cim:AnalogToDigitalLogicKind.le>([\s\S]*?)<\/cim:AnalogToDigitalLogicKind.le>/g, obj, "le", base.to_string, sub, context);
                base.parse_element (/<cim:AnalogToDigitalLogicKind.lt>([\s\S]*?)<\/cim:AnalogToDigitalLogicKind.lt>/g, obj, "lt", base.to_string, sub, context);
                base.parse_element (/<cim:AnalogToDigitalLogicKind.ge>([\s\S]*?)<\/cim:AnalogToDigitalLogicKind.ge>/g, obj, "ge", base.to_string, sub, context);
                base.parse_element (/<cim:AnalogToDigitalLogicKind.gt>([\s\S]*?)<\/cim:AnalogToDigitalLogicKind.gt>/g, obj, "gt", base.to_string, sub, context);

                var bucket = context.parsed.AnalogToDigitalLogicKind;
                if (null == bucket)
                   context.parsed.AnalogToDigitalLogicKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "AnalogToDigitalLogicKind", "ne", base.from_string, fields);
                base.export_element (obj, "AnalogToDigitalLogicKind", "eq", base.from_string, fields);
                base.export_element (obj, "AnalogToDigitalLogicKind", "le", base.from_string, fields);
                base.export_element (obj, "AnalogToDigitalLogicKind", "lt", base.from_string, fields);
                base.export_element (obj, "AnalogToDigitalLogicKind", "ge", base.from_string, fields);
                base.export_element (obj, "AnalogToDigitalLogicKind", "gt", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#AnalogToDigitalLogicKind_collapse" aria-expanded="true" aria-controls="AnalogToDigitalLogicKind_collapse">AnalogToDigitalLogicKind</a>
<div id="AnalogToDigitalLogicKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#ne}}<div><b>ne</b>: {{ne}}</div>{{/ne}}
{{#eq}}<div><b>eq</b>: {{eq}}</div>{{/eq}}
{{#le}}<div><b>le</b>: {{le}}</div>{{/le}}
{{#lt}}<div><b>lt</b>: {{lt}}</div>{{/lt}}
{{#ge}}<div><b>ge</b>: {{ge}}</div>{{/ge}}
{{#gt}}<div><b>gt</b>: {{gt}}</div>{{/gt}}
</div>
`
                );
           }        }

        /**
         * Categorisation of different protective action adjustments that can be performed on equipment.
         *
         */
        class ProtectiveActionAdjustmentKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ProtectiveActionAdjustmentKind;
                if (null == bucket)
                   cim_data.ProtectiveActionAdjustmentKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ProtectiveActionAdjustmentKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ProtectiveActionAdjustmentKind";
                base.parse_element (/<cim:ProtectiveActionAdjustmentKind.byPercentage>([\s\S]*?)<\/cim:ProtectiveActionAdjustmentKind.byPercentage>/g, obj, "byPercentage", base.to_string, sub, context);
                base.parse_element (/<cim:ProtectiveActionAdjustmentKind.byValue>([\s\S]*?)<\/cim:ProtectiveActionAdjustmentKind.byValue>/g, obj, "byValue", base.to_string, sub, context);
                base.parse_element (/<cim:ProtectiveActionAdjustmentKind.setValue>([\s\S]*?)<\/cim:ProtectiveActionAdjustmentKind.setValue>/g, obj, "setValue", base.to_string, sub, context);
                base.parse_element (/<cim:ProtectiveActionAdjustmentKind.measurement>([\s\S]*?)<\/cim:ProtectiveActionAdjustmentKind.measurement>/g, obj, "measurement", base.to_string, sub, context);

                var bucket = context.parsed.ProtectiveActionAdjustmentKind;
                if (null == bucket)
                   context.parsed.ProtectiveActionAdjustmentKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ProtectiveActionAdjustmentKind", "byPercentage", base.from_string, fields);
                base.export_element (obj, "ProtectiveActionAdjustmentKind", "byValue", base.from_string, fields);
                base.export_element (obj, "ProtectiveActionAdjustmentKind", "setValue", base.from_string, fields);
                base.export_element (obj, "ProtectiveActionAdjustmentKind", "measurement", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ProtectiveActionAdjustmentKind_collapse" aria-expanded="true" aria-controls="ProtectiveActionAdjustmentKind_collapse">ProtectiveActionAdjustmentKind</a>
<div id="ProtectiveActionAdjustmentKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#byPercentage}}<div><b>byPercentage</b>: {{byPercentage}}</div>{{/byPercentage}}
{{#byValue}}<div><b>byValue</b>: {{byValue}}</div>{{/byValue}}
{{#setValue}}<div><b>setValue</b>: {{setValue}}</div>{{/setValue}}
{{#measurement}}<div><b>measurement</b>: {{measurement}}</div>{{/measurement}}
</div>
`
                );
           }        }

        /**
         * Categorisation of type of compare done on a branch group.
         *
         */
        class PinBranchGroupKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PinBranchGroupKind;
                if (null == bucket)
                   cim_data.PinBranchGroupKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PinBranchGroupKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "PinBranchGroupKind";
                base.parse_element (/<cim:PinBranchGroupKind.activePower>([\s\S]*?)<\/cim:PinBranchGroupKind.activePower>/g, obj, "activePower", base.to_string, sub, context);
                base.parse_element (/<cim:PinBranchGroupKind.reactivePower>([\s\S]*?)<\/cim:PinBranchGroupKind.reactivePower>/g, obj, "reactivePower", base.to_string, sub, context);

                var bucket = context.parsed.PinBranchGroupKind;
                if (null == bucket)
                   context.parsed.PinBranchGroupKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "PinBranchGroupKind", "activePower", base.from_string, fields);
                base.export_element (obj, "PinBranchGroupKind", "reactivePower", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#PinBranchGroupKind_collapse" aria-expanded="true" aria-controls="PinBranchGroupKind_collapse">PinBranchGroupKind</a>
<div id="PinBranchGroupKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#activePower}}<div><b>activePower</b>: {{activePower}}</div>{{/activePower}}
{{#reactivePower}}<div><b>reactivePower</b>: {{reactivePower}}</div>{{/reactivePower}}
</div>
`
                );
           }        }

        /**
         * Logical gate than support logical operation based on the input.
         *
         */
        class Gate extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Gate;
                if (null == bucket)
                   cim_data.Gate = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Gate[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Gate";
                base.parse_element (/<cim:Gate.kind>([\s\S]*?)<\/cim:Gate.kind>/g, obj, "kind", base.to_string, sub, context);

                var bucket = context.parsed.Gate;
                if (null == bucket)
                   context.parsed.Gate = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Gate", "kind", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Gate_collapse" aria-expanded="true" aria-controls="Gate_collapse">Gate</a>
<div id="Gate_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
</div>
`
                );
           }        }

        /**
         * Categorisation of type of compare done on Terminal.
         *
         */
        class PinTerminalKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PinTerminalKind;
                if (null == bucket)
                   cim_data.PinTerminalKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PinTerminalKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "PinTerminalKind";
                base.parse_element (/<cim:PinTerminalKind.activePower>([\s\S]*?)<\/cim:PinTerminalKind.activePower>/g, obj, "activePower", base.to_string, sub, context);
                base.parse_element (/<cim:PinTerminalKind.apparentPower>([\s\S]*?)<\/cim:PinTerminalKind.apparentPower>/g, obj, "apparentPower", base.to_string, sub, context);
                base.parse_element (/<cim:PinTerminalKind.reactivePower>([\s\S]*?)<\/cim:PinTerminalKind.reactivePower>/g, obj, "reactivePower", base.to_string, sub, context);
                base.parse_element (/<cim:PinTerminalKind.voltage>([\s\S]*?)<\/cim:PinTerminalKind.voltage>/g, obj, "voltage", base.to_string, sub, context);

                var bucket = context.parsed.PinTerminalKind;
                if (null == bucket)
                   context.parsed.PinTerminalKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "PinTerminalKind", "activePower", base.from_string, fields);
                base.export_element (obj, "PinTerminalKind", "apparentPower", base.from_string, fields);
                base.export_element (obj, "PinTerminalKind", "reactivePower", base.from_string, fields);
                base.export_element (obj, "PinTerminalKind", "voltage", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#PinTerminalKind_collapse" aria-expanded="true" aria-controls="PinTerminalKind_collapse">PinTerminalKind</a>
<div id="PinTerminalKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#activePower}}<div><b>activePower</b>: {{activePower}}</div>{{/activePower}}
{{#apparentPower}}<div><b>apparentPower</b>: {{apparentPower}}</div>{{/apparentPower}}
{{#reactivePower}}<div><b>reactivePower</b>: {{reactivePower}}</div>{{/reactivePower}}
{{#voltage}}<div><b>voltage</b>: {{voltage}}</div>{{/voltage}}
</div>
`
                );
           }        }

        /**
         * Stage of a remedial action scheme.
         *
         */
        class Stage extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Stage;
                if (null == bucket)
                   cim_data.Stage = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Stage[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Stage";
                base.parse_element (/<cim:Stage.priority>([\s\S]*?)<\/cim:Stage.priority>/g, obj, "priority", base.to_string, sub, context);
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

                base.export_element (obj, "Stage", "priority", base.from_string, fields);
                base.export_attribute (obj, "Stage", "RemedialActionScheme", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Stage_collapse" aria-expanded="true" aria-controls="Stage_collapse">Stage</a>
<div id="Stage_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#priority}}<div><b>priority</b>: {{priority}}</div>{{/priority}}
{{#RemedialActionScheme}}<div><b>RemedialActionScheme</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RemedialActionScheme}}&quot;);})'>{{RemedialActionScheme}}</a></div>{{/RemedialActionScheme}}
</div>
`
                );
           }        }

        /**
         * Result of a calculation of one or more measurement.
         *
         */
        class MeasurementCalculator extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MeasurementCalculator;
                if (null == bucket)
                   cim_data.MeasurementCalculator = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MeasurementCalculator[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MeasurementCalculator";
                base.parse_element (/<cim:MeasurementCalculator.kind>([\s\S]*?)<\/cim:MeasurementCalculator.kind>/g, obj, "kind", base.to_string, sub, context);

                var bucket = context.parsed.MeasurementCalculator;
                if (null == bucket)
                   context.parsed.MeasurementCalculator = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "MeasurementCalculator", "kind", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MeasurementCalculator_collapse" aria-expanded="true" aria-controls="MeasurementCalculator_collapse">MeasurementCalculator</a>
<div id="MeasurementCalculator_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
</div>
`
                );
           }        }

        /**
         * Classification of Remedial Action Scheme.
         *
         */
        class RemedialActionSchemeKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RemedialActionSchemeKind;
                if (null == bucket)
                   cim_data.RemedialActionSchemeKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RemedialActionSchemeKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "RemedialActionSchemeKind";
                base.parse_element (/<cim:RemedialActionSchemeKind.rAS>([\s\S]*?)<\/cim:RemedialActionSchemeKind.rAS>/g, obj, "rAS", base.to_string, sub, context);
                base.parse_element (/<cim:RemedialActionSchemeKind.rAP>([\s\S]*?)<\/cim:RemedialActionSchemeKind.rAP>/g, obj, "rAP", base.to_string, sub, context);

                var bucket = context.parsed.RemedialActionSchemeKind;
                if (null == bucket)
                   context.parsed.RemedialActionSchemeKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "RemedialActionSchemeKind", "rAS", base.from_string, fields);
                base.export_element (obj, "RemedialActionSchemeKind", "rAP", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#RemedialActionSchemeKind_collapse" aria-expanded="true" aria-controls="RemedialActionSchemeKind_collapse">RemedialActionSchemeKind</a>
<div id="RemedialActionSchemeKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#rAS}}<div><b>rAS</b>: {{rAS}}</div>{{/rAS}}
{{#rAP}}<div><b>rAP</b>: {{rAP}}</div>{{/rAP}}
</div>
`
                );
           }        }

        /**
         * Define the different logical operations.
         *
         */
        class GateLogicKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GateLogicKind;
                if (null == bucket)
                   cim_data.GateLogicKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GateLogicKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "GateLogicKind";
                base.parse_element (/<cim:GateLogicKind.and>([\s\S]*?)<\/cim:GateLogicKind.and>/g, obj, "and", base.to_string, sub, context);
                base.parse_element (/<cim:GateLogicKind.or>([\s\S]*?)<\/cim:GateLogicKind.or>/g, obj, "or", base.to_string, sub, context);
                base.parse_element (/<cim:GateLogicKind.nor>([\s\S]*?)<\/cim:GateLogicKind.nor>/g, obj, "nor", base.to_string, sub, context);
                base.parse_element (/<cim:GateLogicKind.nand>([\s\S]*?)<\/cim:GateLogicKind.nand>/g, obj, "nand", base.to_string, sub, context);
                base.parse_element (/<cim:GateLogicKind.not>([\s\S]*?)<\/cim:GateLogicKind.not>/g, obj, "not", base.to_string, sub, context);
                base.parse_element (/<cim:GateLogicKind.xnor>([\s\S]*?)<\/cim:GateLogicKind.xnor>/g, obj, "xnor", base.to_string, sub, context);
                base.parse_element (/<cim:GateLogicKind.xor>([\s\S]*?)<\/cim:GateLogicKind.xor>/g, obj, "xor", base.to_string, sub, context);

                var bucket = context.parsed.GateLogicKind;
                if (null == bucket)
                   context.parsed.GateLogicKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "GateLogicKind", "and", base.from_string, fields);
                base.export_element (obj, "GateLogicKind", "or", base.from_string, fields);
                base.export_element (obj, "GateLogicKind", "nor", base.from_string, fields);
                base.export_element (obj, "GateLogicKind", "nand", base.from_string, fields);
                base.export_element (obj, "GateLogicKind", "not", base.from_string, fields);
                base.export_element (obj, "GateLogicKind", "xnor", base.from_string, fields);
                base.export_element (obj, "GateLogicKind", "xor", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GateLogicKind_collapse" aria-expanded="true" aria-controls="GateLogicKind_collapse">GateLogicKind</a>
<div id="GateLogicKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#and}}<div><b>and</b>: {{and}}</div>{{/and}}
{{#or}}<div><b>or</b>: {{or}}</div>{{/or}}
{{#nor}}<div><b>nor</b>: {{nor}}</div>{{/nor}}
{{#nand}}<div><b>nand</b>: {{nand}}</div>{{/nand}}
{{#not}}<div><b>not</b>: {{not}}</div>{{/not}}
{{#xnor}}<div><b>xnor</b>: {{xnor}}</div>{{/xnor}}
{{#xor}}<div><b>xor</b>: {{xor}}</div>{{/xor}}
</div>
`
                );
           }        }

        /**
         * A conditions that can trigger remedial actions.
         *
         */
        class TriggerCondition extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TriggerCondition;
                if (null == bucket)
                   cim_data.TriggerCondition = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TriggerCondition[this._id];
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

                base.export_attribute (obj, "TriggerCondition", "RemedialActionScheme", fields);
                base.export_attribute (obj, "TriggerCondition", "GateTrigger", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TriggerCondition_collapse" aria-expanded="true" aria-controls="TriggerCondition_collapse">TriggerCondition</a>
<div id="TriggerCondition_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#RemedialActionScheme}}<div><b>RemedialActionScheme</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RemedialActionScheme}}&quot;);})'>{{RemedialActionScheme}}</a></div>{{/RemedialActionScheme}}
{{#GateTrigger}}<div><b>GateTrigger</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GateTrigger}}&quot;);})'>{{GateTrigger}}</a></div>{{/GateTrigger}}
</div>
`
                );
           }        }

        /**
         * Categorisation of calculation operation that can be done to Measurement.
         *
         */
        class CalculationKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CalculationKind;
                if (null == bucket)
                   cim_data.CalculationKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CalculationKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CalculationKind";
                base.parse_element (/<cim:CalculationKind.sum>([\s\S]*?)<\/cim:CalculationKind.sum>/g, obj, "sum", base.to_string, sub, context);
                base.parse_element (/<cim:CalculationKind.mul>([\s\S]*?)<\/cim:CalculationKind.mul>/g, obj, "mul", base.to_string, sub, context);
                base.parse_element (/<cim:CalculationKind.div>([\s\S]*?)<\/cim:CalculationKind.div>/g, obj, "div", base.to_string, sub, context);
                base.parse_element (/<cim:CalculationKind.sqrt>([\s\S]*?)<\/cim:CalculationKind.sqrt>/g, obj, "sqrt", base.to_string, sub, context);

                var bucket = context.parsed.CalculationKind;
                if (null == bucket)
                   context.parsed.CalculationKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "CalculationKind", "sum", base.from_string, fields);
                base.export_element (obj, "CalculationKind", "mul", base.from_string, fields);
                base.export_element (obj, "CalculationKind", "div", base.from_string, fields);
                base.export_element (obj, "CalculationKind", "sqrt", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#CalculationKind_collapse" aria-expanded="true" aria-controls="CalculationKind_collapse">CalculationKind</a>
<div id="CalculationKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#sum}}<div><b>sum</b>: {{sum}}</div>{{/sum}}
{{#mul}}<div><b>mul</b>: {{mul}}</div>{{/mul}}
{{#div}}<div><b>div</b>: {{div}}</div>{{/div}}
{{#sqrt}}<div><b>sqrt</b>: {{sqrt}}</div>{{/sqrt}}
</div>
`
                );
           }        }

        /**
         * Categorisation of type of compare done on Equipment.
         *
         */
        class PinEquipmentKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PinEquipmentKind;
                if (null == bucket)
                   cim_data.PinEquipmentKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PinEquipmentKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "PinEquipmentKind";
                base.parse_element (/<cim:PinEquipmentKind.inService>([\s\S]*?)<\/cim:PinEquipmentKind.inService>/g, obj, "inService", base.to_string, sub, context);
                base.parse_element (/<cim:PinEquipmentKind.ratedCurrent>([\s\S]*?)<\/cim:PinEquipmentKind.ratedCurrent>/g, obj, "ratedCurrent", base.to_string, sub, context);
                base.parse_element (/<cim:PinEquipmentKind.voltageLimit>([\s\S]*?)<\/cim:PinEquipmentKind.voltageLimit>/g, obj, "voltageLimit", base.to_string, sub, context);
                base.parse_element (/<cim:PinEquipmentKind.currentLimit>([\s\S]*?)<\/cim:PinEquipmentKind.currentLimit>/g, obj, "currentLimit", base.to_string, sub, context);
                base.parse_element (/<cim:PinEquipmentKind.activePowerLimit>([\s\S]*?)<\/cim:PinEquipmentKind.activePowerLimit>/g, obj, "activePowerLimit", base.to_string, sub, context);
                base.parse_element (/<cim:PinEquipmentKind.apparentPowerLimit>([\s\S]*?)<\/cim:PinEquipmentKind.apparentPowerLimit>/g, obj, "apparentPowerLimit", base.to_string, sub, context);
                base.parse_element (/<cim:PinEquipmentKind.connected>([\s\S]*?)<\/cim:PinEquipmentKind.connected>/g, obj, "connected", base.to_string, sub, context);

                var bucket = context.parsed.PinEquipmentKind;
                if (null == bucket)
                   context.parsed.PinEquipmentKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "PinEquipmentKind", "inService", base.from_string, fields);
                base.export_element (obj, "PinEquipmentKind", "ratedCurrent", base.from_string, fields);
                base.export_element (obj, "PinEquipmentKind", "voltageLimit", base.from_string, fields);
                base.export_element (obj, "PinEquipmentKind", "currentLimit", base.from_string, fields);
                base.export_element (obj, "PinEquipmentKind", "activePowerLimit", base.from_string, fields);
                base.export_element (obj, "PinEquipmentKind", "apparentPowerLimit", base.from_string, fields);
                base.export_element (obj, "PinEquipmentKind", "connected", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#PinEquipmentKind_collapse" aria-expanded="true" aria-controls="PinEquipmentKind_collapse">PinEquipmentKind</a>
<div id="PinEquipmentKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#inService}}<div><b>inService</b>: {{inService}}</div>{{/inService}}
{{#ratedCurrent}}<div><b>ratedCurrent</b>: {{ratedCurrent}}</div>{{/ratedCurrent}}
{{#voltageLimit}}<div><b>voltageLimit</b>: {{voltageLimit}}</div>{{/voltageLimit}}
{{#currentLimit}}<div><b>currentLimit</b>: {{currentLimit}}</div>{{/currentLimit}}
{{#activePowerLimit}}<div><b>activePowerLimit</b>: {{activePowerLimit}}</div>{{/activePowerLimit}}
{{#apparentPowerLimit}}<div><b>apparentPowerLimit</b>: {{apparentPowerLimit}}</div>{{/apparentPowerLimit}}
{{#connected}}<div><b>connected</b>: {{connected}}</div>{{/connected}}
</div>
`
                );
           }        }

        /**
         * A collection of protective actions to protect the integrity of the power system.
         *
         */
        class ProtectiveActionCollection extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ProtectiveActionCollection;
                if (null == bucket)
                   cim_data.ProtectiveActionCollection = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ProtectiveActionCollection[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ProtectiveActionCollection";

                var bucket = context.parsed.ProtectiveActionCollection;
                if (null == bucket)
                   context.parsed.ProtectiveActionCollection = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ProtectiveActionCollection_collapse" aria-expanded="true" aria-controls="ProtectiveActionCollection_collapse">ProtectiveActionCollection</a>
<div id="ProtectiveActionCollection_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
</div>
`
                );
           }        }

        /**
         * Value associated with Equipment is used as compare.
         *
         */
        class PinEquipment extends GateInputPin
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PinEquipment;
                if (null == bucket)
                   cim_data.PinEquipment = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PinEquipment[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = GateInputPin.prototype.parse.call (this, context, sub);
                obj.cls = "PinEquipment";
                base.parse_element (/<cim:PinEquipment.kind>([\s\S]*?)<\/cim:PinEquipment.kind>/g, obj, "kind", base.to_string, sub, context);
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

                base.export_element (obj, "PinEquipment", "kind", base.from_string, fields);
                base.export_attribute (obj, "PinEquipment", "Equipment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#PinEquipment_collapse" aria-expanded="true" aria-controls="PinEquipment_collapse">PinEquipment</a>
<div id="PinEquipment_collapse" class="collapse in" style="margin-left: 10px;">
`
      + GateInputPin.prototype.template.call (this) +
`
{{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
{{#Equipment}}<div><b>Equipment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Equipment}}&quot;);})'>{{Equipment}}</a></div>{{/Equipment}}
</div>
`
                );
           }        }

        /**
         * An output from one gate represent an input to another gate.
         *
         */
        class PinGate extends GateInputPin
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PinGate;
                if (null == bucket)
                   cim_data.PinGate = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PinGate[this._id];
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

                base.export_attribute (obj, "PinGate", "GateOutput", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#PinGate_collapse" aria-expanded="true" aria-controls="PinGate_collapse">PinGate</a>
<div id="PinGate_collapse" class="collapse in" style="margin-left: 10px;">
`
      + GateInputPin.prototype.template.call (this) +
`
{{#GateOutput}}<div><b>GateOutput</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GateOutput}}&quot;);})'>{{GateOutput}}</a></div>{{/GateOutput}}
</div>
`
                );
           }        }

        /**
         * Value associated with Terminal is used as compare.
         *
         */
        class PinTerminal extends GateInputPin
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PinTerminal;
                if (null == bucket)
                   cim_data.PinTerminal = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PinTerminal[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = GateInputPin.prototype.parse.call (this, context, sub);
                obj.cls = "PinTerminal";
                base.parse_element (/<cim:PinTerminal.kind>([\s\S]*?)<\/cim:PinTerminal.kind>/g, obj, "kind", base.to_string, sub, context);
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

                base.export_element (obj, "PinTerminal", "kind", base.from_string, fields);
                base.export_attribute (obj, "PinTerminal", "Terminal", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#PinTerminal_collapse" aria-expanded="true" aria-controls="PinTerminal_collapse">PinTerminal</a>
<div id="PinTerminal_collapse" class="collapse in" style="margin-left: 10px;">
`
      + GateInputPin.prototype.template.call (this) +
`
{{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
{{#Terminal}}<div><b>Terminal</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Terminal}}&quot;);})'>{{Terminal}}</a></div>{{/Terminal}}
</div>
`
                );
           }        }

        /**
         * Value associated with branch group is used as compare.
         *
         */
        class PinBranchGroup extends GateInputPin
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PinBranchGroup;
                if (null == bucket)
                   cim_data.PinBranchGroup = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PinBranchGroup[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = GateInputPin.prototype.parse.call (this, context, sub);
                obj.cls = "PinBranchGroup";
                base.parse_element (/<cim:PinBranchGroup.kind>([\s\S]*?)<\/cim:PinBranchGroup.kind>/g, obj, "kind", base.to_string, sub, context);
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

                base.export_element (obj, "PinBranchGroup", "kind", base.from_string, fields);
                base.export_attribute (obj, "PinBranchGroup", "BranchGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#PinBranchGroup_collapse" aria-expanded="true" aria-controls="PinBranchGroup_collapse">PinBranchGroup</a>
<div id="PinBranchGroup_collapse" class="collapse in" style="margin-left: 10px;">
`
      + GateInputPin.prototype.template.call (this) +
`
{{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
{{#BranchGroup}}<div><b>BranchGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{BranchGroup}}&quot;);})'>{{BranchGroup}}</a></div>{{/BranchGroup}}
</div>
`
                );
           }        }

        /**
         * Gate input pin that is associated with a Measurement or a calculation of Measurement.
         *
         */
        class PinMeasurement extends GateInputPin
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PinMeasurement;
                if (null == bucket)
                   cim_data.PinMeasurement = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PinMeasurement[this._id];
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

                base.export_attribute (obj, "PinMeasurement", "Measurement", fields);
                base.export_attribute (obj, "PinMeasurement", "MeasurementCalculator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#PinMeasurement_collapse" aria-expanded="true" aria-controls="PinMeasurement_collapse">PinMeasurement</a>
<div id="PinMeasurement_collapse" class="collapse in" style="margin-left: 10px;">
`
      + GateInputPin.prototype.template.call (this) +
`
{{#Measurement}}<div><b>Measurement</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Measurement}}&quot;);})'>{{Measurement}}</a></div>{{/Measurement}}
{{#MeasurementCalculator}}<div><b>MeasurementCalculator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MeasurementCalculator}}&quot;);})'>{{MeasurementCalculator}}</a></div>{{/MeasurementCalculator}}
</div>
`
                );
           }        }

        /**
         * Protective action to change regulation to Equipment.
         *
         */
        class ProtectiveActionRegulation extends ProtectiveAction
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ProtectiveActionRegulation;
                if (null == bucket)
                   cim_data.ProtectiveActionRegulation = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ProtectiveActionRegulation[this._id];
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

                base.export_element (obj, "ProtectiveActionRegulation", "isRegulating", base.from_boolean, fields);
                base.export_element (obj, "ProtectiveActionRegulation", "targetValue", base.from_float, fields);
                base.export_attribute (obj, "ProtectiveActionRegulation", "RegulatingControl", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ProtectiveActionRegulation_collapse" aria-expanded="true" aria-controls="ProtectiveActionRegulation_collapse">ProtectiveActionRegulation</a>
<div id="ProtectiveActionRegulation_collapse" class="collapse in" style="margin-left: 10px;">
`
      + ProtectiveAction.prototype.template.call (this) +
`
{{#isRegulating}}<div><b>isRegulating</b>: {{isRegulating}}</div>{{/isRegulating}}
{{#targetValue}}<div><b>targetValue</b>: {{targetValue}}</div>{{/targetValue}}
{{#RegulatingControl}}<div><b>RegulatingControl</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegulatingControl}}&quot;);})'>{{RegulatingControl}}</a></div>{{/RegulatingControl}}
</div>
`
                );
           }        }

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
                this._id = template.id;
                var bucket = cim_data.ProtectiveActionAdjustment;
                if (null == bucket)
                   cim_data.ProtectiveActionAdjustment = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ProtectiveActionAdjustment[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ProtectiveAction.prototype.parse.call (this, context, sub);
                obj.cls = "ProtectiveActionAdjustment";
                base.parse_element (/<cim:ProtectiveActionAdjustment.byPercentage>([\s\S]*?)<\/cim:ProtectiveActionAdjustment.byPercentage>/g, obj, "byPercentage", base.to_string, sub, context);
                base.parse_element (/<cim:ProtectiveActionAdjustment.byValue>([\s\S]*?)<\/cim:ProtectiveActionAdjustment.byValue>/g, obj, "byValue", base.to_float, sub, context);
                base.parse_element (/<cim:ProtectiveActionAdjustment.kind>([\s\S]*?)<\/cim:ProtectiveActionAdjustment.kind>/g, obj, "kind", base.to_string, sub, context);
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

                base.export_element (obj, "ProtectiveActionAdjustment", "byPercentage", base.from_string, fields);
                base.export_element (obj, "ProtectiveActionAdjustment", "byValue", base.from_float, fields);
                base.export_element (obj, "ProtectiveActionAdjustment", "kind", base.from_string, fields);
                base.export_element (obj, "ProtectiveActionAdjustment", "reduce", base.from_boolean, fields);
                base.export_element (obj, "ProtectiveActionAdjustment", "setValue", base.from_float, fields);
                base.export_attribute (obj, "ProtectiveActionAdjustment", "Measurement", fields);
                base.export_attribute (obj, "ProtectiveActionAdjustment", "ConductingEquipment", fields);
                base.export_attribute (obj, "ProtectiveActionAdjustment", "DCConductingEquipment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ProtectiveActionAdjustment_collapse" aria-expanded="true" aria-controls="ProtectiveActionAdjustment_collapse">ProtectiveActionAdjustment</a>
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
`
                );
           }        }

        /**
         * Protective action to put an Equipment in-service/out-of-service.
         *
         */
        class ProtectiveActionEquipment extends ProtectiveAction
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ProtectiveActionEquipment;
                if (null == bucket)
                   cim_data.ProtectiveActionEquipment = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ProtectiveActionEquipment[this._id];
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

                base.export_element (obj, "ProtectiveActionEquipment", "inService", base.from_boolean, fields);
                base.export_attribute (obj, "ProtectiveActionEquipment", "Equipment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ProtectiveActionEquipment_collapse" aria-expanded="true" aria-controls="ProtectiveActionEquipment_collapse">ProtectiveActionEquipment</a>
<div id="ProtectiveActionEquipment_collapse" class="collapse in" style="margin-left: 10px;">
`
      + ProtectiveAction.prototype.template.call (this) +
`
{{#inService}}<div><b>inService</b>: {{inService}}</div>{{/inService}}
{{#Equipment}}<div><b>Equipment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Equipment}}&quot;);})'>{{Equipment}}</a></div>{{/Equipment}}
</div>
`
                );
           }        }

        return (
            {
                CalculationKind: CalculationKind,
                PinMeasurement: PinMeasurement,
                Stage: Stage,
                AnalogToDigitalLogicKind: AnalogToDigitalLogicKind,
                PinBranchGroup: PinBranchGroup,
                ProtectiveActionRegulation: ProtectiveActionRegulation,
                TriggerCondition: TriggerCondition,
                GateLogicKind: GateLogicKind,
                ProtectiveActionCollection: ProtectiveActionCollection,
                PinBranchGroupKind: PinBranchGroupKind,
                ProtectiveActionAdjustment: ProtectiveActionAdjustment,
                PinEquipment: PinEquipment,
                Gate: Gate,
                GateInputPin: GateInputPin,
                PinEquipmentKind: PinEquipmentKind,
                MeasurementCalculator: MeasurementCalculator,
                StageTrigger: StageTrigger,
                PinTerminal: PinTerminal,
                PinGate: PinGate,
                RemedialActionSchemeKind: RemedialActionSchemeKind,
                ProtectiveActionAdjustmentKind: ProtectiveActionAdjustmentKind,
                MeasurementCalculatorInput: MeasurementCalculatorInput,
                ProtectiveAction: ProtectiveAction,
                ProtectiveActionEquipment: ProtectiveActionEquipment,
                RemedialActionScheme: RemedialActionScheme,
                PinTerminalKind: PinTerminalKind
            }
        );
    }
);