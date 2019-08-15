define
(
    ["model/base", "model/Core"],
    /**
     * System Integrity Protection Schemes (SIPS) (IEC terminology).
     *
     * Other names used are: Remedial Action Schemes (RAS) or System Protection Schemes (SPS).
     *
     */
    function (base, Core)
    {

        /**
         * Categorisation of type of compare done on Equipment.
         *
         */
        let PinEquipmentKind =
        {
            "inService": "inService",
            "ratedCurrent": "ratedCurrent",
            "voltageLimit": "voltageLimit",
            "currentLimit": "currentLimit",
            "activePowerLimit": "activePowerLimit",
            "apparentPowerLimit": "apparentPowerLimit",
            "connected": "connected"
        };
        Object.freeze (PinEquipmentKind);

        /**
         * Categories of analog to digital (or logical result) comparison.
         *
         */
        let AnalogToDigitalLogicKind =
        {
            "ne": "ne",
            "eq": "eq",
            "le": "le",
            "lt": "lt",
            "ge": "ge",
            "gt": "gt"
        };
        Object.freeze (AnalogToDigitalLogicKind);

        /**
         * Categorisation of different protective action adjustments that can be performed on equipment.
         *
         */
        let ProtectiveActionAdjustmentKind =
        {
            "byPercentage": "byPercentage",
            "byValue": "byValue",
            "setValue": "setValue",
            "measurement": "measurement"
        };
        Object.freeze (ProtectiveActionAdjustmentKind);

        /**
         * Define the different logical operations.
         *
         */
        let GateLogicKind =
        {
            "and": "and",
            "or": "or",
            "nor": "nor",
            "nand": "nand",
            "not": "not",
            "xnor": "xnor",
            "xor": "xor"
        };
        Object.freeze (GateLogicKind);

        /**
         * Categorisation of calculation operation that can be done to Measurement.
         *
         */
        let CalculationKind =
        {
            "sum": "sum",
            "mul": "mul",
            "div": "div",
            "sqrt": "sqrt"
        };
        Object.freeze (CalculationKind);

        /**
         * Categorisation of type of compare done on a branch group.
         *
         */
        let PinBranchGroupKind =
        {
            "activePower": "activePower",
            "reactivePower": "reactivePower"
        };
        Object.freeze (PinBranchGroupKind);

        /**
         * Classification of Remedial Action Scheme.
         *
         */
        let RemedialActionSchemeKind =
        {
            "rAS": "rAS",
            "rAP": "rAP"
        };
        Object.freeze (RemedialActionSchemeKind);

        /**
         * Categorisation of type of compare done on Terminal.
         *
         */
        let PinTerminalKind =
        {
            "activePower": "activePower",
            "apparentPower": "apparentPower",
            "reactivePower": "reactivePower",
            "voltage": "voltage"
        };
        Object.freeze (PinTerminalKind);

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
                let bucket = cim_data.GateInputPin;
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
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "GateInputPin";
                base.parse_element (/<cim:GateInputPin.absoluteValue>([\s\S]*?)<\/cim:GateInputPin.absoluteValue>/g, obj, "absoluteValue", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:GateInputPin.aDLogicKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "aDLogicKind", sub, context);
                base.parse_element (/<cim:GateInputPin.duration>([\s\S]*?)<\/cim:GateInputPin.duration>/g, obj, "duration", base.to_string, sub, context);
                base.parse_element (/<cim:GateInputPin.negate>([\s\S]*?)<\/cim:GateInputPin.negate>/g, obj, "negate", base.to_boolean, sub, context);
                base.parse_element (/<cim:GateInputPin.thresholdPercentage>([\s\S]*?)<\/cim:GateInputPin.thresholdPercentage>/g, obj, "thresholdPercentage", base.to_string, sub, context);
                base.parse_element (/<cim:GateInputPin.thresholdValue>([\s\S]*?)<\/cim:GateInputPin.thresholdValue>/g, obj, "thresholdValue", base.to_float, sub, context);
                base.parse_attribute (/<cim:GateInputPin.Gate\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Gate", sub, context);
                let bucket = context.parsed.GateInputPin;
                if (null == bucket)
                   context.parsed.GateInputPin = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "GateInputPin", "absoluteValue", "absoluteValue",  base.from_boolean, fields);
                base.export_attribute (obj, "GateInputPin", "aDLogicKind", "aDLogicKind", fields);
                base.export_element (obj, "GateInputPin", "duration", "duration",  base.from_string, fields);
                base.export_element (obj, "GateInputPin", "negate", "negate",  base.from_boolean, fields);
                base.export_element (obj, "GateInputPin", "thresholdPercentage", "thresholdPercentage",  base.from_string, fields);
                base.export_element (obj, "GateInputPin", "thresholdValue", "thresholdValue",  base.from_float, fields);
                base.export_attribute (obj, "GateInputPin", "Gate", "Gate", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#GateInputPin_collapse" aria-expanded="true" aria-controls="GateInputPin_collapse" style="margin-left: 10px;">GateInputPin</a></legend>
                    <div id="GateInputPin_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#absoluteValue}}<div><b>absoluteValue</b>: {{absoluteValue}}</div>{{/absoluteValue}}
                    {{#aDLogicKind}}<div><b>aDLogicKind</b>: {{aDLogicKind}}</div>{{/aDLogicKind}}
                    {{#duration}}<div><b>duration</b>: {{duration}}</div>{{/duration}}
                    {{#negate}}<div><b>negate</b>: {{negate}}</div>{{/negate}}
                    {{#thresholdPercentage}}<div><b>thresholdPercentage</b>: {{thresholdPercentage}}</div>{{/thresholdPercentage}}
                    {{#thresholdValue}}<div><b>thresholdValue</b>: {{thresholdValue}}</div>{{/thresholdValue}}
                    {{#Gate}}<div><b>Gate</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Gate}}");}); return false;'>{{Gate}}</a></div>{{/Gate}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["aDLogicKindAnalogToDigitalLogicKind"] = [{ id: '', selected: (!obj["aDLogicKind"])}]; for (let property in AnalogToDigitalLogicKind) obj["aDLogicKindAnalogToDigitalLogicKind"].push ({ id: property, selected: obj["aDLogicKind"] && obj["aDLogicKind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["aDLogicKindAnalogToDigitalLogicKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_GateInputPin_collapse" aria-expanded="true" aria-controls="{{id}}_GateInputPin_collapse" style="margin-left: 10px;">GateInputPin</a></legend>
                    <div id="{{id}}_GateInputPin_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_absoluteValue'>absoluteValue: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_absoluteValue' class='form-check-input' type='checkbox'{{#absoluteValue}} checked{{/absoluteValue}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_aDLogicKind'>aDLogicKind: </label><div class='col-sm-8'><select id='{{id}}_aDLogicKind' class='form-control custom-select'>{{#aDLogicKindAnalogToDigitalLogicKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/aDLogicKindAnalogToDigitalLogicKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_duration'>duration: </label><div class='col-sm-8'><input id='{{id}}_duration' class='form-control' type='text'{{#duration}} value='{{duration}}'{{/duration}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_negate'>negate: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_negate' class='form-check-input' type='checkbox'{{#negate}} checked{{/negate}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_thresholdPercentage'>thresholdPercentage: </label><div class='col-sm-8'><input id='{{id}}_thresholdPercentage' class='form-control' type='text'{{#thresholdPercentage}} value='{{thresholdPercentage}}'{{/thresholdPercentage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_thresholdValue'>thresholdValue: </label><div class='col-sm-8'><input id='{{id}}_thresholdValue' class='form-control' type='text'{{#thresholdValue}} value='{{thresholdValue}}'{{/thresholdValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Gate'>Gate: </label><div class='col-sm-8'><input id='{{id}}_Gate' class='form-control' type='text'{{#Gate}} value='{{Gate}}'{{/Gate}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "GateInputPin" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_absoluteValue").checked; if (temp) obj["absoluteValue"] = true;
                temp = AnalogToDigitalLogicKind[document.getElementById (id + "_aDLogicKind").value]; if (temp) obj["aDLogicKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#AnalogToDigitalLogicKind." + temp; else delete obj["aDLogicKind"];
                temp = document.getElementById (id + "_duration").value; if ("" !== temp) obj["duration"] = temp;
                temp = document.getElementById (id + "_negate").checked; if (temp) obj["negate"] = true;
                temp = document.getElementById (id + "_thresholdPercentage").value; if ("" !== temp) obj["thresholdPercentage"] = temp;
                temp = document.getElementById (id + "_thresholdValue").value; if ("" !== temp) obj["thresholdValue"] = temp;
                temp = document.getElementById (id + "_Gate").value; if ("" !== temp) obj["Gate"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Gate", "1", "1..*", "Gate", "GateInputPin"]
                        ]
                    )
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
                let bucket = cim_data.MeasurementCalculatorInput;
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
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MeasurementCalculatorInput";
                base.parse_element (/<cim:MeasurementCalculatorInput.absoluteValue>([\s\S]*?)<\/cim:MeasurementCalculatorInput.absoluteValue>/g, obj, "absoluteValue", base.to_boolean, sub, context);
                base.parse_element (/<cim:MeasurementCalculatorInput.order>([\s\S]*?)<\/cim:MeasurementCalculatorInput.order>/g, obj, "order", base.to_string, sub, context);
                base.parse_attribute (/<cim:MeasurementCalculatorInput.MeasurementCalculator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MeasurementCalculator", sub, context);
                base.parse_attribute (/<cim:MeasurementCalculatorInput.Measurement\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Measurement", sub, context);
                let bucket = context.parsed.MeasurementCalculatorInput;
                if (null == bucket)
                   context.parsed.MeasurementCalculatorInput = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "MeasurementCalculatorInput", "absoluteValue", "absoluteValue",  base.from_boolean, fields);
                base.export_element (obj, "MeasurementCalculatorInput", "order", "order",  base.from_string, fields);
                base.export_attribute (obj, "MeasurementCalculatorInput", "MeasurementCalculator", "MeasurementCalculator", fields);
                base.export_attribute (obj, "MeasurementCalculatorInput", "Measurement", "Measurement", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MeasurementCalculatorInput_collapse" aria-expanded="true" aria-controls="MeasurementCalculatorInput_collapse" style="margin-left: 10px;">MeasurementCalculatorInput</a></legend>
                    <div id="MeasurementCalculatorInput_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#absoluteValue}}<div><b>absoluteValue</b>: {{absoluteValue}}</div>{{/absoluteValue}}
                    {{#order}}<div><b>order</b>: {{order}}</div>{{/order}}
                    {{#MeasurementCalculator}}<div><b>MeasurementCalculator</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{MeasurementCalculator}}");}); return false;'>{{MeasurementCalculator}}</a></div>{{/MeasurementCalculator}}
                    {{#Measurement}}<div><b>Measurement</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Measurement}}");}); return false;'>{{Measurement}}</a></div>{{/Measurement}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MeasurementCalculatorInput_collapse" aria-expanded="true" aria-controls="{{id}}_MeasurementCalculatorInput_collapse" style="margin-left: 10px;">MeasurementCalculatorInput</a></legend>
                    <div id="{{id}}_MeasurementCalculatorInput_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_absoluteValue'>absoluteValue: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_absoluteValue' class='form-check-input' type='checkbox'{{#absoluteValue}} checked{{/absoluteValue}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_order'>order: </label><div class='col-sm-8'><input id='{{id}}_order' class='form-control' type='text'{{#order}} value='{{order}}'{{/order}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MeasurementCalculator'>MeasurementCalculator: </label><div class='col-sm-8'><input id='{{id}}_MeasurementCalculator' class='form-control' type='text'{{#MeasurementCalculator}} value='{{MeasurementCalculator}}'{{/MeasurementCalculator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Measurement'>Measurement: </label><div class='col-sm-8'><input id='{{id}}_Measurement' class='form-control' type='text'{{#Measurement}} value='{{Measurement}}'{{/Measurement}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MeasurementCalculatorInput" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_absoluteValue").checked; if (temp) obj["absoluteValue"] = true;
                temp = document.getElementById (id + "_order").value; if ("" !== temp) obj["order"] = temp;
                temp = document.getElementById (id + "_MeasurementCalculator").value; if ("" !== temp) obj["MeasurementCalculator"] = temp;
                temp = document.getElementById (id + "_Measurement").value; if ("" !== temp) obj["Measurement"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MeasurementCalculator", "1", "1..*", "MeasurementCalculator", "MeasurementCalculatorInput"],
                            ["Measurement", "1", "0..*", "Measurement", "MeasurementCalculatorInput"]
                        ]
                    )
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
                let bucket = cim_data.RemedialActionScheme;
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
                let obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "RemedialActionScheme";
                base.parse_element (/<cim:RemedialActionScheme.armed>([\s\S]*?)<\/cim:RemedialActionScheme.armed>/g, obj, "armed", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:RemedialActionScheme.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:RemedialActionScheme.normalArmed>([\s\S]*?)<\/cim:RemedialActionScheme.normalArmed>/g, obj, "normalArmed", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:RemedialActionScheme.TriggerCondition\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TriggerCondition", sub, context);
                base.parse_attribute (/<cim:RemedialActionScheme.GateArmed\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GateArmed", sub, context);
                base.parse_attributes (/<cim:RemedialActionScheme.Stage\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Stage", sub, context);
                let bucket = context.parsed.RemedialActionScheme;
                if (null == bucket)
                   context.parsed.RemedialActionScheme = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "RemedialActionScheme", "armed", "armed",  base.from_boolean, fields);
                base.export_attribute (obj, "RemedialActionScheme", "kind", "kind", fields);
                base.export_element (obj, "RemedialActionScheme", "normalArmed", "normalArmed",  base.from_boolean, fields);
                base.export_attributes (obj, "RemedialActionScheme", "TriggerCondition", "TriggerCondition", fields);
                base.export_attribute (obj, "RemedialActionScheme", "GateArmed", "GateArmed", fields);
                base.export_attributes (obj, "RemedialActionScheme", "Stage", "Stage", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RemedialActionScheme_collapse" aria-expanded="true" aria-controls="RemedialActionScheme_collapse" style="margin-left: 10px;">RemedialActionScheme</a></legend>
                    <div id="RemedialActionScheme_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#armed}}<div><b>armed</b>: {{armed}}</div>{{/armed}}
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#normalArmed}}<div><b>normalArmed</b>: {{normalArmed}}</div>{{/normalArmed}}
                    {{#TriggerCondition}}<div><b>TriggerCondition</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TriggerCondition}}
                    {{#GateArmed}}<div><b>GateArmed</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{GateArmed}}");}); return false;'>{{GateArmed}}</a></div>{{/GateArmed}}
                    {{#Stage}}<div><b>Stage</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Stage}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindRemedialActionSchemeKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in RemedialActionSchemeKind) obj["kindRemedialActionSchemeKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
                if (obj["TriggerCondition"]) obj["TriggerCondition_string"] = obj["TriggerCondition"].join ();
                if (obj["Stage"]) obj["Stage_string"] = obj["Stage"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindRemedialActionSchemeKind"];
                delete obj["TriggerCondition_string"];
                delete obj["Stage_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RemedialActionScheme_collapse" aria-expanded="true" aria-controls="{{id}}_RemedialActionScheme_collapse" style="margin-left: 10px;">RemedialActionScheme</a></legend>
                    <div id="{{id}}_RemedialActionScheme_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_armed'>armed: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_armed' class='form-check-input' type='checkbox'{{#armed}} checked{{/armed}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindRemedialActionSchemeKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindRemedialActionSchemeKind}}</select></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_normalArmed'>normalArmed: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_normalArmed' class='form-check-input' type='checkbox'{{#normalArmed}} checked{{/normalArmed}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GateArmed'>GateArmed: </label><div class='col-sm-8'><input id='{{id}}_GateArmed' class='form-control' type='text'{{#GateArmed}} value='{{GateArmed}}'{{/GateArmed}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "RemedialActionScheme" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_armed").checked; if (temp) obj["armed"] = true;
                temp = RemedialActionSchemeKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#RemedialActionSchemeKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_normalArmed").checked; if (temp) obj["normalArmed"] = true;
                temp = document.getElementById (id + "_GateArmed").value; if ("" !== temp) obj["GateArmed"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TriggerCondition", "0..*", "1", "TriggerCondition", "RemedialActionScheme"],
                            ["GateArmed", "0..1", "0..*", "Gate", "RemedialActionScheme"],
                            ["Stage", "1..*", "1", "Stage", "RemedialActionScheme"]
                        ]
                    )
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
                let bucket = cim_data.TriggerCondition;
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
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TriggerCondition";
                base.parse_attribute (/<cim:TriggerCondition.RemedialActionScheme\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RemedialActionScheme", sub, context);
                base.parse_attribute (/<cim:TriggerCondition.GateTrigger\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GateTrigger", sub, context);
                let bucket = context.parsed.TriggerCondition;
                if (null == bucket)
                   context.parsed.TriggerCondition = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "TriggerCondition", "RemedialActionScheme", "RemedialActionScheme", fields);
                base.export_attribute (obj, "TriggerCondition", "GateTrigger", "GateTrigger", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TriggerCondition_collapse" aria-expanded="true" aria-controls="TriggerCondition_collapse" style="margin-left: 10px;">TriggerCondition</a></legend>
                    <div id="TriggerCondition_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#RemedialActionScheme}}<div><b>RemedialActionScheme</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RemedialActionScheme}}");}); return false;'>{{RemedialActionScheme}}</a></div>{{/RemedialActionScheme}}
                    {{#GateTrigger}}<div><b>GateTrigger</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{GateTrigger}}");}); return false;'>{{GateTrigger}}</a></div>{{/GateTrigger}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TriggerCondition_collapse" aria-expanded="true" aria-controls="{{id}}_TriggerCondition_collapse" style="margin-left: 10px;">TriggerCondition</a></legend>
                    <div id="{{id}}_TriggerCondition_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RemedialActionScheme'>RemedialActionScheme: </label><div class='col-sm-8'><input id='{{id}}_RemedialActionScheme' class='form-control' type='text'{{#RemedialActionScheme}} value='{{RemedialActionScheme}}'{{/RemedialActionScheme}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GateTrigger'>GateTrigger: </label><div class='col-sm-8'><input id='{{id}}_GateTrigger' class='form-control' type='text'{{#GateTrigger}} value='{{GateTrigger}}'{{/GateTrigger}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "TriggerCondition" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_RemedialActionScheme").value; if ("" !== temp) obj["RemedialActionScheme"] = temp;
                temp = document.getElementById (id + "_GateTrigger").value; if ("" !== temp) obj["GateTrigger"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RemedialActionScheme", "1", "0..*", "RemedialActionScheme", "TriggerCondition"],
                            ["GateTrigger", "1", "0..*", "Gate", "TriggerCondition"]
                        ]
                    )
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
                let bucket = cim_data.ProtectiveAction;
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
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ProtectiveAction";
                base.parse_element (/<cim:ProtectiveAction.enabled>([\s\S]*?)<\/cim:ProtectiveAction.enabled>/g, obj, "enabled", base.to_boolean, sub, context);
                base.parse_element (/<cim:ProtectiveAction.normalEnabled>([\s\S]*?)<\/cim:ProtectiveAction.normalEnabled>/g, obj, "normalEnabled", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:ProtectiveAction.ProtectiveActionCollection\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ProtectiveActionCollection", sub, context);
                base.parse_attribute (/<cim:ProtectiveAction.ProtectionEquipment\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ProtectionEquipment", sub, context);
                base.parse_attribute (/<cim:ProtectiveAction.GateEnabledCondition\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GateEnabledCondition", sub, context);
                base.parse_attribute (/<cim:ProtectiveAction.GateComCondition\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GateComCondition", sub, context);
                let bucket = context.parsed.ProtectiveAction;
                if (null == bucket)
                   context.parsed.ProtectiveAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ProtectiveAction", "enabled", "enabled",  base.from_boolean, fields);
                base.export_element (obj, "ProtectiveAction", "normalEnabled", "normalEnabled",  base.from_boolean, fields);
                base.export_attribute (obj, "ProtectiveAction", "ProtectiveActionCollection", "ProtectiveActionCollection", fields);
                base.export_attribute (obj, "ProtectiveAction", "ProtectionEquipment", "ProtectionEquipment", fields);
                base.export_attribute (obj, "ProtectiveAction", "GateEnabledCondition", "GateEnabledCondition", fields);
                base.export_attribute (obj, "ProtectiveAction", "GateComCondition", "GateComCondition", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ProtectiveAction_collapse" aria-expanded="true" aria-controls="ProtectiveAction_collapse" style="margin-left: 10px;">ProtectiveAction</a></legend>
                    <div id="ProtectiveAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#enabled}}<div><b>enabled</b>: {{enabled}}</div>{{/enabled}}
                    {{#normalEnabled}}<div><b>normalEnabled</b>: {{normalEnabled}}</div>{{/normalEnabled}}
                    {{#ProtectiveActionCollection}}<div><b>ProtectiveActionCollection</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ProtectiveActionCollection}}");}); return false;'>{{ProtectiveActionCollection}}</a></div>{{/ProtectiveActionCollection}}
                    {{#ProtectionEquipment}}<div><b>ProtectionEquipment</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ProtectionEquipment}}");}); return false;'>{{ProtectionEquipment}}</a></div>{{/ProtectionEquipment}}
                    {{#GateEnabledCondition}}<div><b>GateEnabledCondition</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{GateEnabledCondition}}");}); return false;'>{{GateEnabledCondition}}</a></div>{{/GateEnabledCondition}}
                    {{#GateComCondition}}<div><b>GateComCondition</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{GateComCondition}}");}); return false;'>{{GateComCondition}}</a></div>{{/GateComCondition}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ProtectiveAction_collapse" aria-expanded="true" aria-controls="{{id}}_ProtectiveAction_collapse" style="margin-left: 10px;">ProtectiveAction</a></legend>
                    <div id="{{id}}_ProtectiveAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_enabled'>enabled: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_enabled' class='form-check-input' type='checkbox'{{#enabled}} checked{{/enabled}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_normalEnabled'>normalEnabled: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_normalEnabled' class='form-check-input' type='checkbox'{{#normalEnabled}} checked{{/normalEnabled}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ProtectiveActionCollection'>ProtectiveActionCollection: </label><div class='col-sm-8'><input id='{{id}}_ProtectiveActionCollection' class='form-control' type='text'{{#ProtectiveActionCollection}} value='{{ProtectiveActionCollection}}'{{/ProtectiveActionCollection}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ProtectionEquipment'>ProtectionEquipment: </label><div class='col-sm-8'><input id='{{id}}_ProtectionEquipment' class='form-control' type='text'{{#ProtectionEquipment}} value='{{ProtectionEquipment}}'{{/ProtectionEquipment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GateEnabledCondition'>GateEnabledCondition: </label><div class='col-sm-8'><input id='{{id}}_GateEnabledCondition' class='form-control' type='text'{{#GateEnabledCondition}} value='{{GateEnabledCondition}}'{{/GateEnabledCondition}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GateComCondition'>GateComCondition: </label><div class='col-sm-8'><input id='{{id}}_GateComCondition' class='form-control' type='text'{{#GateComCondition}} value='{{GateComCondition}}'{{/GateComCondition}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ProtectiveAction" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_enabled").checked; if (temp) obj["enabled"] = true;
                temp = document.getElementById (id + "_normalEnabled").checked; if (temp) obj["normalEnabled"] = true;
                temp = document.getElementById (id + "_ProtectiveActionCollection").value; if ("" !== temp) obj["ProtectiveActionCollection"] = temp;
                temp = document.getElementById (id + "_ProtectionEquipment").value; if ("" !== temp) obj["ProtectionEquipment"] = temp;
                temp = document.getElementById (id + "_GateEnabledCondition").value; if ("" !== temp) obj["GateEnabledCondition"] = temp;
                temp = document.getElementById (id + "_GateComCondition").value; if ("" !== temp) obj["GateComCondition"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ProtectiveActionCollection", "1", "1..*", "ProtectiveActionCollection", "ProtectiveAction"],
                            ["ProtectionEquipment", "0..1", "0..*", "ProtectionEquipment", "ProtectiveAction"],
                            ["GateEnabledCondition", "0..1", "0..*", "Gate", "ProtectiveActionEnabled"],
                            ["GateComCondition", "0..1", "0..*", "Gate", "ProtectiveActionCom"]
                        ]
                    )
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
                let bucket = cim_data.ProtectiveActionCollection;
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
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ProtectiveActionCollection";
                base.parse_attributes (/<cim:ProtectiveActionCollection.ProtectiveAction\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ProtectiveAction", sub, context);
                base.parse_attributes (/<cim:ProtectiveActionCollection.StageTrigger\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "StageTrigger", sub, context);
                let bucket = context.parsed.ProtectiveActionCollection;
                if (null == bucket)
                   context.parsed.ProtectiveActionCollection = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ProtectiveActionCollection", "ProtectiveAction", "ProtectiveAction", fields);
                base.export_attributes (obj, "ProtectiveActionCollection", "StageTrigger", "StageTrigger", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ProtectiveActionCollection_collapse" aria-expanded="true" aria-controls="ProtectiveActionCollection_collapse" style="margin-left: 10px;">ProtectiveActionCollection</a></legend>
                    <div id="ProtectiveActionCollection_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#ProtectiveAction}}<div><b>ProtectiveAction</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ProtectiveAction}}
                    {{#StageTrigger}}<div><b>StageTrigger</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/StageTrigger}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ProtectiveAction"]) obj["ProtectiveAction_string"] = obj["ProtectiveAction"].join ();
                if (obj["StageTrigger"]) obj["StageTrigger_string"] = obj["StageTrigger"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ProtectiveAction_string"];
                delete obj["StageTrigger_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ProtectiveActionCollection_collapse" aria-expanded="true" aria-controls="{{id}}_ProtectiveActionCollection_collapse" style="margin-left: 10px;">ProtectiveActionCollection</a></legend>
                    <div id="{{id}}_ProtectiveActionCollection_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "ProtectiveActionCollection" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ProtectiveAction", "1..*", "1", "ProtectiveAction", "ProtectiveActionCollection"],
                            ["StageTrigger", "0..*", "1", "StageTrigger", "ProtectiveActionCollection"]
                        ]
                    )
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
                let bucket = cim_data.MeasurementCalculator;
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
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MeasurementCalculator";
                base.parse_attribute (/<cim:MeasurementCalculator.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attributes (/<cim:MeasurementCalculator.MeasurementCalculatorInput\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MeasurementCalculatorInput", sub, context);
                base.parse_attributes (/<cim:MeasurementCalculator.PinMeasurement\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PinMeasurement", sub, context);
                let bucket = context.parsed.MeasurementCalculator;
                if (null == bucket)
                   context.parsed.MeasurementCalculator = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MeasurementCalculator", "kind", "kind", fields);
                base.export_attributes (obj, "MeasurementCalculator", "MeasurementCalculatorInput", "MeasurementCalculatorInput", fields);
                base.export_attributes (obj, "MeasurementCalculator", "PinMeasurement", "PinMeasurement", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MeasurementCalculator_collapse" aria-expanded="true" aria-controls="MeasurementCalculator_collapse" style="margin-left: 10px;">MeasurementCalculator</a></legend>
                    <div id="MeasurementCalculator_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#MeasurementCalculatorInput}}<div><b>MeasurementCalculatorInput</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MeasurementCalculatorInput}}
                    {{#PinMeasurement}}<div><b>PinMeasurement</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/PinMeasurement}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindCalculationKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in CalculationKind) obj["kindCalculationKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
                if (obj["MeasurementCalculatorInput"]) obj["MeasurementCalculatorInput_string"] = obj["MeasurementCalculatorInput"].join ();
                if (obj["PinMeasurement"]) obj["PinMeasurement_string"] = obj["PinMeasurement"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindCalculationKind"];
                delete obj["MeasurementCalculatorInput_string"];
                delete obj["PinMeasurement_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MeasurementCalculator_collapse" aria-expanded="true" aria-controls="{{id}}_MeasurementCalculator_collapse" style="margin-left: 10px;">MeasurementCalculator</a></legend>
                    <div id="{{id}}_MeasurementCalculator_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindCalculationKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindCalculationKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MeasurementCalculator" };
                super.submit (id, obj);
                temp = CalculationKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#CalculationKind." + temp; else delete obj["kind"];

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MeasurementCalculatorInput", "1..*", "1", "MeasurementCalculatorInput", "MeasurementCalculator"],
                            ["PinMeasurement", "0..*", "0..1", "PinMeasurement", "MeasurementCalculator"]
                        ]
                    )
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
                let bucket = cim_data.StageTrigger;
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
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "StageTrigger";
                base.parse_element (/<cim:StageTrigger.armed>([\s\S]*?)<\/cim:StageTrigger.armed>/g, obj, "armed", base.to_boolean, sub, context);
                base.parse_element (/<cim:StageTrigger.normalArmed>([\s\S]*?)<\/cim:StageTrigger.normalArmed>/g, obj, "normalArmed", base.to_boolean, sub, context);
                base.parse_element (/<cim:StageTrigger.priority>([\s\S]*?)<\/cim:StageTrigger.priority>/g, obj, "priority", base.to_string, sub, context);
                base.parse_attribute (/<cim:StageTrigger.GateTrigger\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GateTrigger", sub, context);
                base.parse_attribute (/<cim:StageTrigger.ProtectiveActionCollection\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ProtectiveActionCollection", sub, context);
                base.parse_attribute (/<cim:StageTrigger.Stage\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Stage", sub, context);
                base.parse_attribute (/<cim:StageTrigger.GateArmed\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GateArmed", sub, context);
                base.parse_attribute (/<cim:StageTrigger.GateComCondition\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GateComCondition", sub, context);
                let bucket = context.parsed.StageTrigger;
                if (null == bucket)
                   context.parsed.StageTrigger = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "StageTrigger", "armed", "armed",  base.from_boolean, fields);
                base.export_element (obj, "StageTrigger", "normalArmed", "normalArmed",  base.from_boolean, fields);
                base.export_element (obj, "StageTrigger", "priority", "priority",  base.from_string, fields);
                base.export_attribute (obj, "StageTrigger", "GateTrigger", "GateTrigger", fields);
                base.export_attribute (obj, "StageTrigger", "ProtectiveActionCollection", "ProtectiveActionCollection", fields);
                base.export_attribute (obj, "StageTrigger", "Stage", "Stage", fields);
                base.export_attribute (obj, "StageTrigger", "GateArmed", "GateArmed", fields);
                base.export_attribute (obj, "StageTrigger", "GateComCondition", "GateComCondition", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#StageTrigger_collapse" aria-expanded="true" aria-controls="StageTrigger_collapse" style="margin-left: 10px;">StageTrigger</a></legend>
                    <div id="StageTrigger_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#armed}}<div><b>armed</b>: {{armed}}</div>{{/armed}}
                    {{#normalArmed}}<div><b>normalArmed</b>: {{normalArmed}}</div>{{/normalArmed}}
                    {{#priority}}<div><b>priority</b>: {{priority}}</div>{{/priority}}
                    {{#GateTrigger}}<div><b>GateTrigger</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{GateTrigger}}");}); return false;'>{{GateTrigger}}</a></div>{{/GateTrigger}}
                    {{#ProtectiveActionCollection}}<div><b>ProtectiveActionCollection</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ProtectiveActionCollection}}");}); return false;'>{{ProtectiveActionCollection}}</a></div>{{/ProtectiveActionCollection}}
                    {{#Stage}}<div><b>Stage</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Stage}}");}); return false;'>{{Stage}}</a></div>{{/Stage}}
                    {{#GateArmed}}<div><b>GateArmed</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{GateArmed}}");}); return false;'>{{GateArmed}}</a></div>{{/GateArmed}}
                    {{#GateComCondition}}<div><b>GateComCondition</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{GateComCondition}}");}); return false;'>{{GateComCondition}}</a></div>{{/GateComCondition}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_StageTrigger_collapse" aria-expanded="true" aria-controls="{{id}}_StageTrigger_collapse" style="margin-left: 10px;">StageTrigger</a></legend>
                    <div id="{{id}}_StageTrigger_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_armed'>armed: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_armed' class='form-check-input' type='checkbox'{{#armed}} checked{{/armed}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_normalArmed'>normalArmed: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_normalArmed' class='form-check-input' type='checkbox'{{#normalArmed}} checked{{/normalArmed}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_priority'>priority: </label><div class='col-sm-8'><input id='{{id}}_priority' class='form-control' type='text'{{#priority}} value='{{priority}}'{{/priority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GateTrigger'>GateTrigger: </label><div class='col-sm-8'><input id='{{id}}_GateTrigger' class='form-control' type='text'{{#GateTrigger}} value='{{GateTrigger}}'{{/GateTrigger}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ProtectiveActionCollection'>ProtectiveActionCollection: </label><div class='col-sm-8'><input id='{{id}}_ProtectiveActionCollection' class='form-control' type='text'{{#ProtectiveActionCollection}} value='{{ProtectiveActionCollection}}'{{/ProtectiveActionCollection}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Stage'>Stage: </label><div class='col-sm-8'><input id='{{id}}_Stage' class='form-control' type='text'{{#Stage}} value='{{Stage}}'{{/Stage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GateArmed'>GateArmed: </label><div class='col-sm-8'><input id='{{id}}_GateArmed' class='form-control' type='text'{{#GateArmed}} value='{{GateArmed}}'{{/GateArmed}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GateComCondition'>GateComCondition: </label><div class='col-sm-8'><input id='{{id}}_GateComCondition' class='form-control' type='text'{{#GateComCondition}} value='{{GateComCondition}}'{{/GateComCondition}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "StageTrigger" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_armed").checked; if (temp) obj["armed"] = true;
                temp = document.getElementById (id + "_normalArmed").checked; if (temp) obj["normalArmed"] = true;
                temp = document.getElementById (id + "_priority").value; if ("" !== temp) obj["priority"] = temp;
                temp = document.getElementById (id + "_GateTrigger").value; if ("" !== temp) obj["GateTrigger"] = temp;
                temp = document.getElementById (id + "_ProtectiveActionCollection").value; if ("" !== temp) obj["ProtectiveActionCollection"] = temp;
                temp = document.getElementById (id + "_Stage").value; if ("" !== temp) obj["Stage"] = temp;
                temp = document.getElementById (id + "_GateArmed").value; if ("" !== temp) obj["GateArmed"] = temp;
                temp = document.getElementById (id + "_GateComCondition").value; if ("" !== temp) obj["GateComCondition"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["GateTrigger", "0..1", "0..*", "Gate", "StageTrigger"],
                            ["ProtectiveActionCollection", "1", "0..*", "ProtectiveActionCollection", "StageTrigger"],
                            ["Stage", "1", "1..*", "Stage", "StageTrigger"],
                            ["GateArmed", "0..1", "0..*", "Gate", "StageTriggerArmed"],
                            ["GateComCondition", "0..1", "0..*", "Gate", "StageTriggerCom"]
                        ]
                    )
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
                let bucket = cim_data.Gate;
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
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Gate";
                base.parse_attribute (/<cim:Gate.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attributes (/<cim:Gate.RemedialActionScheme\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RemedialActionScheme", sub, context);
                base.parse_attributes (/<cim:Gate.TriggerCondition\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TriggerCondition", sub, context);
                base.parse_attributes (/<cim:Gate.GateInputPin\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GateInputPin", sub, context);
                base.parse_attributes (/<cim:Gate.ProtectiveActionEnabled\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ProtectiveActionEnabled", sub, context);
                base.parse_attributes (/<cim:Gate.StageTrigger\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "StageTrigger", sub, context);
                base.parse_attributes (/<cim:Gate.ProtectiveActionCom\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ProtectiveActionCom", sub, context);
                base.parse_attributes (/<cim:Gate.PinGate\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PinGate", sub, context);
                base.parse_attributes (/<cim:Gate.StageTriggerArmed\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "StageTriggerArmed", sub, context);
                base.parse_attributes (/<cim:Gate.StageTriggerCom\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "StageTriggerCom", sub, context);
                let bucket = context.parsed.Gate;
                if (null == bucket)
                   context.parsed.Gate = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Gate", "kind", "kind", fields);
                base.export_attributes (obj, "Gate", "RemedialActionScheme", "RemedialActionScheme", fields);
                base.export_attributes (obj, "Gate", "TriggerCondition", "TriggerCondition", fields);
                base.export_attributes (obj, "Gate", "GateInputPin", "GateInputPin", fields);
                base.export_attributes (obj, "Gate", "ProtectiveActionEnabled", "ProtectiveActionEnabled", fields);
                base.export_attributes (obj, "Gate", "StageTrigger", "StageTrigger", fields);
                base.export_attributes (obj, "Gate", "ProtectiveActionCom", "ProtectiveActionCom", fields);
                base.export_attributes (obj, "Gate", "PinGate", "PinGate", fields);
                base.export_attributes (obj, "Gate", "StageTriggerArmed", "StageTriggerArmed", fields);
                base.export_attributes (obj, "Gate", "StageTriggerCom", "StageTriggerCom", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Gate_collapse" aria-expanded="true" aria-controls="Gate_collapse" style="margin-left: 10px;">Gate</a></legend>
                    <div id="Gate_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#RemedialActionScheme}}<div><b>RemedialActionScheme</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RemedialActionScheme}}
                    {{#TriggerCondition}}<div><b>TriggerCondition</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TriggerCondition}}
                    {{#GateInputPin}}<div><b>GateInputPin</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/GateInputPin}}
                    {{#ProtectiveActionEnabled}}<div><b>ProtectiveActionEnabled</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ProtectiveActionEnabled}}
                    {{#StageTrigger}}<div><b>StageTrigger</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/StageTrigger}}
                    {{#ProtectiveActionCom}}<div><b>ProtectiveActionCom</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ProtectiveActionCom}}
                    {{#PinGate}}<div><b>PinGate</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/PinGate}}
                    {{#StageTriggerArmed}}<div><b>StageTriggerArmed</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/StageTriggerArmed}}
                    {{#StageTriggerCom}}<div><b>StageTriggerCom</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/StageTriggerCom}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindGateLogicKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in GateLogicKind) obj["kindGateLogicKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
                if (obj["RemedialActionScheme"]) obj["RemedialActionScheme_string"] = obj["RemedialActionScheme"].join ();
                if (obj["TriggerCondition"]) obj["TriggerCondition_string"] = obj["TriggerCondition"].join ();
                if (obj["GateInputPin"]) obj["GateInputPin_string"] = obj["GateInputPin"].join ();
                if (obj["ProtectiveActionEnabled"]) obj["ProtectiveActionEnabled_string"] = obj["ProtectiveActionEnabled"].join ();
                if (obj["StageTrigger"]) obj["StageTrigger_string"] = obj["StageTrigger"].join ();
                if (obj["ProtectiveActionCom"]) obj["ProtectiveActionCom_string"] = obj["ProtectiveActionCom"].join ();
                if (obj["PinGate"]) obj["PinGate_string"] = obj["PinGate"].join ();
                if (obj["StageTriggerArmed"]) obj["StageTriggerArmed_string"] = obj["StageTriggerArmed"].join ();
                if (obj["StageTriggerCom"]) obj["StageTriggerCom_string"] = obj["StageTriggerCom"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindGateLogicKind"];
                delete obj["RemedialActionScheme_string"];
                delete obj["TriggerCondition_string"];
                delete obj["GateInputPin_string"];
                delete obj["ProtectiveActionEnabled_string"];
                delete obj["StageTrigger_string"];
                delete obj["ProtectiveActionCom_string"];
                delete obj["PinGate_string"];
                delete obj["StageTriggerArmed_string"];
                delete obj["StageTriggerCom_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Gate_collapse" aria-expanded="true" aria-controls="{{id}}_Gate_collapse" style="margin-left: 10px;">Gate</a></legend>
                    <div id="{{id}}_Gate_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindGateLogicKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindGateLogicKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Gate" };
                super.submit (id, obj);
                temp = GateLogicKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#GateLogicKind." + temp; else delete obj["kind"];

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RemedialActionScheme", "0..*", "0..1", "RemedialActionScheme", "GateArmed"],
                            ["TriggerCondition", "0..*", "1", "TriggerCondition", "GateTrigger"],
                            ["GateInputPin", "1..*", "1", "GateInputPin", "Gate"],
                            ["ProtectiveActionEnabled", "0..*", "0..1", "ProtectiveAction", "GateEnabledCondition"],
                            ["StageTrigger", "0..*", "0..1", "StageTrigger", "GateTrigger"],
                            ["ProtectiveActionCom", "0..*", "0..1", "ProtectiveAction", "GateComCondition"],
                            ["PinGate", "0..*", "1", "PinGate", "GateOutput"],
                            ["StageTriggerArmed", "0..*", "0..1", "StageTrigger", "GateArmed"],
                            ["StageTriggerCom", "0..*", "0..1", "StageTrigger", "GateComCondition"]
                        ]
                    )
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
                let bucket = cim_data.Stage;
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
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Stage";
                base.parse_element (/<cim:Stage.priority>([\s\S]*?)<\/cim:Stage.priority>/g, obj, "priority", base.to_string, sub, context);
                base.parse_attribute (/<cim:Stage.RemedialActionScheme\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RemedialActionScheme", sub, context);
                base.parse_attributes (/<cim:Stage.StageTrigger\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "StageTrigger", sub, context);
                let bucket = context.parsed.Stage;
                if (null == bucket)
                   context.parsed.Stage = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Stage", "priority", "priority",  base.from_string, fields);
                base.export_attribute (obj, "Stage", "RemedialActionScheme", "RemedialActionScheme", fields);
                base.export_attributes (obj, "Stage", "StageTrigger", "StageTrigger", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Stage_collapse" aria-expanded="true" aria-controls="Stage_collapse" style="margin-left: 10px;">Stage</a></legend>
                    <div id="Stage_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#priority}}<div><b>priority</b>: {{priority}}</div>{{/priority}}
                    {{#RemedialActionScheme}}<div><b>RemedialActionScheme</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RemedialActionScheme}}");}); return false;'>{{RemedialActionScheme}}</a></div>{{/RemedialActionScheme}}
                    {{#StageTrigger}}<div><b>StageTrigger</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/StageTrigger}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["StageTrigger"]) obj["StageTrigger_string"] = obj["StageTrigger"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["StageTrigger_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Stage_collapse" aria-expanded="true" aria-controls="{{id}}_Stage_collapse" style="margin-left: 10px;">Stage</a></legend>
                    <div id="{{id}}_Stage_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_priority'>priority: </label><div class='col-sm-8'><input id='{{id}}_priority' class='form-control' type='text'{{#priority}} value='{{priority}}'{{/priority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RemedialActionScheme'>RemedialActionScheme: </label><div class='col-sm-8'><input id='{{id}}_RemedialActionScheme' class='form-control' type='text'{{#RemedialActionScheme}} value='{{RemedialActionScheme}}'{{/RemedialActionScheme}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Stage" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_priority").value; if ("" !== temp) obj["priority"] = temp;
                temp = document.getElementById (id + "_RemedialActionScheme").value; if ("" !== temp) obj["RemedialActionScheme"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RemedialActionScheme", "1", "1..*", "RemedialActionScheme", "Stage"],
                            ["StageTrigger", "1..*", "1", "StageTrigger", "Stage"]
                        ]
                    )
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
                let bucket = cim_data.PinBranchGroup;
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
                let obj = GateInputPin.prototype.parse.call (this, context, sub);
                obj.cls = "PinBranchGroup";
                base.parse_attribute (/<cim:PinBranchGroup.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:PinBranchGroup.BranchGroup\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BranchGroup", sub, context);
                let bucket = context.parsed.PinBranchGroup;
                if (null == bucket)
                   context.parsed.PinBranchGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = GateInputPin.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "PinBranchGroup", "kind", "kind", fields);
                base.export_attribute (obj, "PinBranchGroup", "BranchGroup", "BranchGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PinBranchGroup_collapse" aria-expanded="true" aria-controls="PinBranchGroup_collapse" style="margin-left: 10px;">PinBranchGroup</a></legend>
                    <div id="PinBranchGroup_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + GateInputPin.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#BranchGroup}}<div><b>BranchGroup</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{BranchGroup}}");}); return false;'>{{BranchGroup}}</a></div>{{/BranchGroup}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindPinBranchGroupKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in PinBranchGroupKind) obj["kindPinBranchGroupKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindPinBranchGroupKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PinBranchGroup_collapse" aria-expanded="true" aria-controls="{{id}}_PinBranchGroup_collapse" style="margin-left: 10px;">PinBranchGroup</a></legend>
                    <div id="{{id}}_PinBranchGroup_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + GateInputPin.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindPinBranchGroupKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindPinBranchGroupKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BranchGroup'>BranchGroup: </label><div class='col-sm-8'><input id='{{id}}_BranchGroup' class='form-control' type='text'{{#BranchGroup}} value='{{BranchGroup}}'{{/BranchGroup}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PinBranchGroup" };
                super.submit (id, obj);
                temp = PinBranchGroupKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#PinBranchGroupKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_BranchGroup").value; if ("" !== temp) obj["BranchGroup"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["BranchGroup", "1", "0..*", "BranchGroup", "PinBranchGroup"]
                        ]
                    )
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
                let bucket = cim_data.PinEquipment;
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
                let obj = GateInputPin.prototype.parse.call (this, context, sub);
                obj.cls = "PinEquipment";
                base.parse_attribute (/<cim:PinEquipment.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:PinEquipment.Equipment\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Equipment", sub, context);
                let bucket = context.parsed.PinEquipment;
                if (null == bucket)
                   context.parsed.PinEquipment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = GateInputPin.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "PinEquipment", "kind", "kind", fields);
                base.export_attribute (obj, "PinEquipment", "Equipment", "Equipment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PinEquipment_collapse" aria-expanded="true" aria-controls="PinEquipment_collapse" style="margin-left: 10px;">PinEquipment</a></legend>
                    <div id="PinEquipment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + GateInputPin.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#Equipment}}<div><b>Equipment</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Equipment}}");}); return false;'>{{Equipment}}</a></div>{{/Equipment}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindPinEquipmentKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in PinEquipmentKind) obj["kindPinEquipmentKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindPinEquipmentKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PinEquipment_collapse" aria-expanded="true" aria-controls="{{id}}_PinEquipment_collapse" style="margin-left: 10px;">PinEquipment</a></legend>
                    <div id="{{id}}_PinEquipment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + GateInputPin.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindPinEquipmentKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindPinEquipmentKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Equipment'>Equipment: </label><div class='col-sm-8'><input id='{{id}}_Equipment' class='form-control' type='text'{{#Equipment}} value='{{Equipment}}'{{/Equipment}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PinEquipment" };
                super.submit (id, obj);
                temp = PinEquipmentKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#PinEquipmentKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_Equipment").value; if ("" !== temp) obj["Equipment"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Equipment", "1", "0..*", "Equipment", "PinEquipment"]
                        ]
                    )
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
                let bucket = cim_data.PinTerminal;
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
                let obj = GateInputPin.prototype.parse.call (this, context, sub);
                obj.cls = "PinTerminal";
                base.parse_attribute (/<cim:PinTerminal.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:PinTerminal.Terminal\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context);
                let bucket = context.parsed.PinTerminal;
                if (null == bucket)
                   context.parsed.PinTerminal = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = GateInputPin.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "PinTerminal", "kind", "kind", fields);
                base.export_attribute (obj, "PinTerminal", "Terminal", "Terminal", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PinTerminal_collapse" aria-expanded="true" aria-controls="PinTerminal_collapse" style="margin-left: 10px;">PinTerminal</a></legend>
                    <div id="PinTerminal_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + GateInputPin.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#Terminal}}<div><b>Terminal</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Terminal}}");}); return false;'>{{Terminal}}</a></div>{{/Terminal}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindPinTerminalKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in PinTerminalKind) obj["kindPinTerminalKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindPinTerminalKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PinTerminal_collapse" aria-expanded="true" aria-controls="{{id}}_PinTerminal_collapse" style="margin-left: 10px;">PinTerminal</a></legend>
                    <div id="{{id}}_PinTerminal_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + GateInputPin.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindPinTerminalKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindPinTerminalKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Terminal'>Terminal: </label><div class='col-sm-8'><input id='{{id}}_Terminal' class='form-control' type='text'{{#Terminal}} value='{{Terminal}}'{{/Terminal}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PinTerminal" };
                super.submit (id, obj);
                temp = PinTerminalKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#PinTerminalKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_Terminal").value; if ("" !== temp) obj["Terminal"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Terminal", "1", "0..*", "Terminal", "PinTerminal"]
                        ]
                    )
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
                let bucket = cim_data.PinMeasurement;
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
                let obj = GateInputPin.prototype.parse.call (this, context, sub);
                obj.cls = "PinMeasurement";
                base.parse_attribute (/<cim:PinMeasurement.Measurement\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Measurement", sub, context);
                base.parse_attribute (/<cim:PinMeasurement.MeasurementCalculator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MeasurementCalculator", sub, context);
                let bucket = context.parsed.PinMeasurement;
                if (null == bucket)
                   context.parsed.PinMeasurement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = GateInputPin.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "PinMeasurement", "Measurement", "Measurement", fields);
                base.export_attribute (obj, "PinMeasurement", "MeasurementCalculator", "MeasurementCalculator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PinMeasurement_collapse" aria-expanded="true" aria-controls="PinMeasurement_collapse" style="margin-left: 10px;">PinMeasurement</a></legend>
                    <div id="PinMeasurement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + GateInputPin.prototype.template.call (this) +
                    `
                    {{#Measurement}}<div><b>Measurement</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Measurement}}");}); return false;'>{{Measurement}}</a></div>{{/Measurement}}
                    {{#MeasurementCalculator}}<div><b>MeasurementCalculator</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{MeasurementCalculator}}");}); return false;'>{{MeasurementCalculator}}</a></div>{{/MeasurementCalculator}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PinMeasurement_collapse" aria-expanded="true" aria-controls="{{id}}_PinMeasurement_collapse" style="margin-left: 10px;">PinMeasurement</a></legend>
                    <div id="{{id}}_PinMeasurement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + GateInputPin.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Measurement'>Measurement: </label><div class='col-sm-8'><input id='{{id}}_Measurement' class='form-control' type='text'{{#Measurement}} value='{{Measurement}}'{{/Measurement}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MeasurementCalculator'>MeasurementCalculator: </label><div class='col-sm-8'><input id='{{id}}_MeasurementCalculator' class='form-control' type='text'{{#MeasurementCalculator}} value='{{MeasurementCalculator}}'{{/MeasurementCalculator}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PinMeasurement" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Measurement").value; if ("" !== temp) obj["Measurement"] = temp;
                temp = document.getElementById (id + "_MeasurementCalculator").value; if ("" !== temp) obj["MeasurementCalculator"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Measurement", "0..1", "0..*", "Measurement", "PinMeasurement"],
                            ["MeasurementCalculator", "0..1", "0..*", "MeasurementCalculator", "PinMeasurement"]
                        ]
                    )
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
                let bucket = cim_data.PinGate;
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
                let obj = GateInputPin.prototype.parse.call (this, context, sub);
                obj.cls = "PinGate";
                base.parse_attribute (/<cim:PinGate.GateOutput\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GateOutput", sub, context);
                let bucket = context.parsed.PinGate;
                if (null == bucket)
                   context.parsed.PinGate = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = GateInputPin.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "PinGate", "GateOutput", "GateOutput", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PinGate_collapse" aria-expanded="true" aria-controls="PinGate_collapse" style="margin-left: 10px;">PinGate</a></legend>
                    <div id="PinGate_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + GateInputPin.prototype.template.call (this) +
                    `
                    {{#GateOutput}}<div><b>GateOutput</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{GateOutput}}");}); return false;'>{{GateOutput}}</a></div>{{/GateOutput}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PinGate_collapse" aria-expanded="true" aria-controls="{{id}}_PinGate_collapse" style="margin-left: 10px;">PinGate</a></legend>
                    <div id="{{id}}_PinGate_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + GateInputPin.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GateOutput'>GateOutput: </label><div class='col-sm-8'><input id='{{id}}_GateOutput' class='form-control' type='text'{{#GateOutput}} value='{{GateOutput}}'{{/GateOutput}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PinGate" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_GateOutput").value; if ("" !== temp) obj["GateOutput"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["GateOutput", "1", "0..*", "Gate", "PinGate"]
                        ]
                    )
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
                let bucket = cim_data.ProtectiveActionEquipment;
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
                let obj = ProtectiveAction.prototype.parse.call (this, context, sub);
                obj.cls = "ProtectiveActionEquipment";
                base.parse_element (/<cim:ProtectiveActionEquipment.inService>([\s\S]*?)<\/cim:ProtectiveActionEquipment.inService>/g, obj, "inService", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:ProtectiveActionEquipment.Equipment\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Equipment", sub, context);
                let bucket = context.parsed.ProtectiveActionEquipment;
                if (null == bucket)
                   context.parsed.ProtectiveActionEquipment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ProtectiveAction.prototype.export.call (this, obj, false);

                base.export_element (obj, "ProtectiveActionEquipment", "inService", "inService",  base.from_boolean, fields);
                base.export_attribute (obj, "ProtectiveActionEquipment", "Equipment", "Equipment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ProtectiveActionEquipment_collapse" aria-expanded="true" aria-controls="ProtectiveActionEquipment_collapse" style="margin-left: 10px;">ProtectiveActionEquipment</a></legend>
                    <div id="ProtectiveActionEquipment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ProtectiveAction.prototype.template.call (this) +
                    `
                    {{#inService}}<div><b>inService</b>: {{inService}}</div>{{/inService}}
                    {{#Equipment}}<div><b>Equipment</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Equipment}}");}); return false;'>{{Equipment}}</a></div>{{/Equipment}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ProtectiveActionEquipment_collapse" aria-expanded="true" aria-controls="{{id}}_ProtectiveActionEquipment_collapse" style="margin-left: 10px;">ProtectiveActionEquipment</a></legend>
                    <div id="{{id}}_ProtectiveActionEquipment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ProtectiveAction.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_inService'>inService: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_inService' class='form-check-input' type='checkbox'{{#inService}} checked{{/inService}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Equipment'>Equipment: </label><div class='col-sm-8'><input id='{{id}}_Equipment' class='form-control' type='text'{{#Equipment}} value='{{Equipment}}'{{/Equipment}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ProtectiveActionEquipment" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_inService").checked; if (temp) obj["inService"] = true;
                temp = document.getElementById (id + "_Equipment").value; if ("" !== temp) obj["Equipment"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Equipment", "1", "0..*", "Equipment", "ProtectiveActionEquipment"]
                        ]
                    )
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
                let bucket = cim_data.ProtectiveActionRegulation;
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
                let obj = ProtectiveAction.prototype.parse.call (this, context, sub);
                obj.cls = "ProtectiveActionRegulation";
                base.parse_element (/<cim:ProtectiveActionRegulation.isRegulating>([\s\S]*?)<\/cim:ProtectiveActionRegulation.isRegulating>/g, obj, "isRegulating", base.to_boolean, sub, context);
                base.parse_element (/<cim:ProtectiveActionRegulation.targetValue>([\s\S]*?)<\/cim:ProtectiveActionRegulation.targetValue>/g, obj, "targetValue", base.to_float, sub, context);
                base.parse_attribute (/<cim:ProtectiveActionRegulation.RegulatingControl\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegulatingControl", sub, context);
                let bucket = context.parsed.ProtectiveActionRegulation;
                if (null == bucket)
                   context.parsed.ProtectiveActionRegulation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ProtectiveAction.prototype.export.call (this, obj, false);

                base.export_element (obj, "ProtectiveActionRegulation", "isRegulating", "isRegulating",  base.from_boolean, fields);
                base.export_element (obj, "ProtectiveActionRegulation", "targetValue", "targetValue",  base.from_float, fields);
                base.export_attribute (obj, "ProtectiveActionRegulation", "RegulatingControl", "RegulatingControl", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ProtectiveActionRegulation_collapse" aria-expanded="true" aria-controls="ProtectiveActionRegulation_collapse" style="margin-left: 10px;">ProtectiveActionRegulation</a></legend>
                    <div id="ProtectiveActionRegulation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ProtectiveAction.prototype.template.call (this) +
                    `
                    {{#isRegulating}}<div><b>isRegulating</b>: {{isRegulating}}</div>{{/isRegulating}}
                    {{#targetValue}}<div><b>targetValue</b>: {{targetValue}}</div>{{/targetValue}}
                    {{#RegulatingControl}}<div><b>RegulatingControl</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RegulatingControl}}");}); return false;'>{{RegulatingControl}}</a></div>{{/RegulatingControl}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ProtectiveActionRegulation_collapse" aria-expanded="true" aria-controls="{{id}}_ProtectiveActionRegulation_collapse" style="margin-left: 10px;">ProtectiveActionRegulation</a></legend>
                    <div id="{{id}}_ProtectiveActionRegulation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ProtectiveAction.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isRegulating'>isRegulating: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isRegulating' class='form-check-input' type='checkbox'{{#isRegulating}} checked{{/isRegulating}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_targetValue'>targetValue: </label><div class='col-sm-8'><input id='{{id}}_targetValue' class='form-control' type='text'{{#targetValue}} value='{{targetValue}}'{{/targetValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegulatingControl'>RegulatingControl: </label><div class='col-sm-8'><input id='{{id}}_RegulatingControl' class='form-control' type='text'{{#RegulatingControl}} value='{{RegulatingControl}}'{{/RegulatingControl}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ProtectiveActionRegulation" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_isRegulating").checked; if (temp) obj["isRegulating"] = true;
                temp = document.getElementById (id + "_targetValue").value; if ("" !== temp) obj["targetValue"] = temp;
                temp = document.getElementById (id + "_RegulatingControl").value; if ("" !== temp) obj["RegulatingControl"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegulatingControl", "1", "0..*", "RegulatingControl", "ProtectiveActionRegulation"]
                        ]
                    )
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
                let bucket = cim_data.ProtectiveActionAdjustment;
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
                let obj = ProtectiveAction.prototype.parse.call (this, context, sub);
                obj.cls = "ProtectiveActionAdjustment";
                base.parse_element (/<cim:ProtectiveActionAdjustment.byPercentage>([\s\S]*?)<\/cim:ProtectiveActionAdjustment.byPercentage>/g, obj, "byPercentage", base.to_string, sub, context);
                base.parse_element (/<cim:ProtectiveActionAdjustment.byValue>([\s\S]*?)<\/cim:ProtectiveActionAdjustment.byValue>/g, obj, "byValue", base.to_float, sub, context);
                base.parse_attribute (/<cim:ProtectiveActionAdjustment.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:ProtectiveActionAdjustment.reduce>([\s\S]*?)<\/cim:ProtectiveActionAdjustment.reduce>/g, obj, "reduce", base.to_boolean, sub, context);
                base.parse_element (/<cim:ProtectiveActionAdjustment.setValue>([\s\S]*?)<\/cim:ProtectiveActionAdjustment.setValue>/g, obj, "setValue", base.to_float, sub, context);
                base.parse_attribute (/<cim:ProtectiveActionAdjustment.DCConductingEquipment\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DCConductingEquipment", sub, context);
                base.parse_attribute (/<cim:ProtectiveActionAdjustment.Measurement\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Measurement", sub, context);
                base.parse_attribute (/<cim:ProtectiveActionAdjustment.ConductingEquipment\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ConductingEquipment", sub, context);
                let bucket = context.parsed.ProtectiveActionAdjustment;
                if (null == bucket)
                   context.parsed.ProtectiveActionAdjustment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ProtectiveAction.prototype.export.call (this, obj, false);

                base.export_element (obj, "ProtectiveActionAdjustment", "byPercentage", "byPercentage",  base.from_string, fields);
                base.export_element (obj, "ProtectiveActionAdjustment", "byValue", "byValue",  base.from_float, fields);
                base.export_attribute (obj, "ProtectiveActionAdjustment", "kind", "kind", fields);
                base.export_element (obj, "ProtectiveActionAdjustment", "reduce", "reduce",  base.from_boolean, fields);
                base.export_element (obj, "ProtectiveActionAdjustment", "setValue", "setValue",  base.from_float, fields);
                base.export_attribute (obj, "ProtectiveActionAdjustment", "DCConductingEquipment", "DCConductingEquipment", fields);
                base.export_attribute (obj, "ProtectiveActionAdjustment", "Measurement", "Measurement", fields);
                base.export_attribute (obj, "ProtectiveActionAdjustment", "ConductingEquipment", "ConductingEquipment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ProtectiveActionAdjustment_collapse" aria-expanded="true" aria-controls="ProtectiveActionAdjustment_collapse" style="margin-left: 10px;">ProtectiveActionAdjustment</a></legend>
                    <div id="ProtectiveActionAdjustment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ProtectiveAction.prototype.template.call (this) +
                    `
                    {{#byPercentage}}<div><b>byPercentage</b>: {{byPercentage}}</div>{{/byPercentage}}
                    {{#byValue}}<div><b>byValue</b>: {{byValue}}</div>{{/byValue}}
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#reduce}}<div><b>reduce</b>: {{reduce}}</div>{{/reduce}}
                    {{#setValue}}<div><b>setValue</b>: {{setValue}}</div>{{/setValue}}
                    {{#DCConductingEquipment}}<div><b>DCConductingEquipment</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{DCConductingEquipment}}");}); return false;'>{{DCConductingEquipment}}</a></div>{{/DCConductingEquipment}}
                    {{#Measurement}}<div><b>Measurement</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Measurement}}");}); return false;'>{{Measurement}}</a></div>{{/Measurement}}
                    {{#ConductingEquipment}}<div><b>ConductingEquipment</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ConductingEquipment}}");}); return false;'>{{ConductingEquipment}}</a></div>{{/ConductingEquipment}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindProtectiveActionAdjustmentKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in ProtectiveActionAdjustmentKind) obj["kindProtectiveActionAdjustmentKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindProtectiveActionAdjustmentKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ProtectiveActionAdjustment_collapse" aria-expanded="true" aria-controls="{{id}}_ProtectiveActionAdjustment_collapse" style="margin-left: 10px;">ProtectiveActionAdjustment</a></legend>
                    <div id="{{id}}_ProtectiveActionAdjustment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ProtectiveAction.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_byPercentage'>byPercentage: </label><div class='col-sm-8'><input id='{{id}}_byPercentage' class='form-control' type='text'{{#byPercentage}} value='{{byPercentage}}'{{/byPercentage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_byValue'>byValue: </label><div class='col-sm-8'><input id='{{id}}_byValue' class='form-control' type='text'{{#byValue}} value='{{byValue}}'{{/byValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindProtectiveActionAdjustmentKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindProtectiveActionAdjustmentKind}}</select></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_reduce'>reduce: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_reduce' class='form-check-input' type='checkbox'{{#reduce}} checked{{/reduce}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_setValue'>setValue: </label><div class='col-sm-8'><input id='{{id}}_setValue' class='form-control' type='text'{{#setValue}} value='{{setValue}}'{{/setValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DCConductingEquipment'>DCConductingEquipment: </label><div class='col-sm-8'><input id='{{id}}_DCConductingEquipment' class='form-control' type='text'{{#DCConductingEquipment}} value='{{DCConductingEquipment}}'{{/DCConductingEquipment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Measurement'>Measurement: </label><div class='col-sm-8'><input id='{{id}}_Measurement' class='form-control' type='text'{{#Measurement}} value='{{Measurement}}'{{/Measurement}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ConductingEquipment'>ConductingEquipment: </label><div class='col-sm-8'><input id='{{id}}_ConductingEquipment' class='form-control' type='text'{{#ConductingEquipment}} value='{{ConductingEquipment}}'{{/ConductingEquipment}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ProtectiveActionAdjustment" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_byPercentage").value; if ("" !== temp) obj["byPercentage"] = temp;
                temp = document.getElementById (id + "_byValue").value; if ("" !== temp) obj["byValue"] = temp;
                temp = ProtectiveActionAdjustmentKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#ProtectiveActionAdjustmentKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_reduce").checked; if (temp) obj["reduce"] = true;
                temp = document.getElementById (id + "_setValue").value; if ("" !== temp) obj["setValue"] = temp;
                temp = document.getElementById (id + "_DCConductingEquipment").value; if ("" !== temp) obj["DCConductingEquipment"] = temp;
                temp = document.getElementById (id + "_Measurement").value; if ("" !== temp) obj["Measurement"] = temp;
                temp = document.getElementById (id + "_ConductingEquipment").value; if ("" !== temp) obj["ConductingEquipment"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["DCConductingEquipment", "1", "0..*", "DCConductingEquipment", "ProtectiveActionAdjustment"],
                            ["Measurement", "0..1", "0..*", "Measurement", "ProtectiveActionAdjustment"],
                            ["ConductingEquipment", "1", "0..*", "ConductingEquipment", "ProtectiveActionAdjustment"]
                        ]
                    )
                );
            }
        }

        return (
            {
                CalculationKind: CalculationKind,
                PinMeasurement: PinMeasurement,
                Stage: Stage,
                PinBranchGroup: PinBranchGroup,
                AnalogToDigitalLogicKind: AnalogToDigitalLogicKind,
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