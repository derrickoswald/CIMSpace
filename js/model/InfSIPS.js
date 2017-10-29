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
         * Gate input pin that is associated with a Measurement or a calculation of Measurement.
         *
         */
        function parse_PinMeasurement (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_GateInputPin (context, sub);
            obj.cls = "PinMeasurement";
            base.parse_attribute (/<cim:PinMeasurement.Measurement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Measurement", sub, context);
            base.parse_attribute (/<cim:PinMeasurement.MeasurementCalculator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MeasurementCalculator", sub, context);
            bucket = context.parsed.PinMeasurement;
            if (null == bucket)
                context.parsed.PinMeasurement = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PinMeasurement (obj, exporters, full)
        {
            var fields = exporters["GateInputPin"](obj, exporters, false);

            base.export_attribute (obj, "PinMeasurement", "Measurement", fields);
            base.export_attribute (obj, "PinMeasurement", "MeasurementCalculator", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Input pin for a logical gate.
         *
         * The condition described in the input pin will give a logical true or false. Result from measurement and calculation are converted to a true or false.
         *
         */
        function parse_GateInputPin (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "GateInputPin";
            base.parse_element (/<cim:GateInputPin.absoluteValue>([\s\S]*?)<\/cim:GateInputPin.absoluteValue>/g, obj, "absoluteValue", base.to_boolean, sub, context);
            base.parse_element (/<cim:GateInputPin.aDLogicKind>([\s\S]*?)<\/cim:GateInputPin.aDLogicKind>/g, obj, "aDLogicKind", base.to_string, sub, context);
            base.parse_element (/<cim:GateInputPin.duration>([\s\S]*?)<\/cim:GateInputPin.duration>/g, obj, "duration", base.to_string, sub, context);
            base.parse_element (/<cim:GateInputPin.negate>([\s\S]*?)<\/cim:GateInputPin.negate>/g, obj, "negate", base.to_boolean, sub, context);
            base.parse_element (/<cim:GateInputPin.thresholdPercentage>([\s\S]*?)<\/cim:GateInputPin.thresholdPercentage>/g, obj, "thresholdPercentage", base.to_string, sub, context);
            base.parse_element (/<cim:GateInputPin.thresholdValue>([\s\S]*?)<\/cim:GateInputPin.thresholdValue>/g, obj, "thresholdValue", base.to_float, sub, context);
            base.parse_attribute (/<cim:GateInputPin.Gate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Gate", sub, context);
            bucket = context.parsed.GateInputPin;
            if (null == bucket)
                context.parsed.GateInputPin = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GateInputPin (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "GateInputPin", "absoluteValue", base.from_boolean, fields);
            base.export_element (obj, "GateInputPin", "aDLogicKind", base.from_string, fields);
            base.export_element (obj, "GateInputPin", "duration", base.from_string, fields);
            base.export_element (obj, "GateInputPin", "negate", base.from_boolean, fields);
            base.export_element (obj, "GateInputPin", "thresholdPercentage", base.from_string, fields);
            base.export_element (obj, "GateInputPin", "thresholdValue", base.from_float, fields);
            base.export_attribute (obj, "GateInputPin", "Gate", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Remedial Action Scheme (RAS), Special Protection Schemes (SPS), System Protection Schemes (SPS) or System Integrity Protection Schemes (SIPS).
         *
         */
        function parse_RemedialActionScheme (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "RemedialActionScheme";
            base.parse_element (/<cim:RemedialActionScheme.armed>([\s\S]*?)<\/cim:RemedialActionScheme.armed>/g, obj, "armed", base.to_boolean, sub, context);
            base.parse_element (/<cim:RemedialActionScheme.kind>([\s\S]*?)<\/cim:RemedialActionScheme.kind>/g, obj, "kind", base.to_string, sub, context);
            base.parse_element (/<cim:RemedialActionScheme.normalArmed>([\s\S]*?)<\/cim:RemedialActionScheme.normalArmed>/g, obj, "normalArmed", base.to_boolean, sub, context);
            base.parse_attribute (/<cim:RemedialActionScheme.GateArmed\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GateArmed", sub, context);
            bucket = context.parsed.RemedialActionScheme;
            if (null == bucket)
                context.parsed.RemedialActionScheme = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_RemedialActionScheme (obj, exporters, full)
        {
            var fields = exporters["PowerSystemResource"](obj, exporters, false);

            base.export_element (obj, "RemedialActionScheme", "armed", base.from_boolean, fields);
            base.export_element (obj, "RemedialActionScheme", "kind", base.from_string, fields);
            base.export_element (obj, "RemedialActionScheme", "normalArmed", base.from_boolean, fields);
            base.export_attribute (obj, "RemedialActionScheme", "GateArmed", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Condition that is triggered either by TriggerCondition of by gate condition within a stage and has remedial action-s.
         *
         */
        function parse_StageTrigger (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "StageTrigger";
            base.parse_element (/<cim:StageTrigger.armed>([\s\S]*?)<\/cim:StageTrigger.armed>/g, obj, "armed", base.to_boolean, sub, context);
            base.parse_element (/<cim:StageTrigger.normalArmed>([\s\S]*?)<\/cim:StageTrigger.normalArmed>/g, obj, "normalArmed", base.to_boolean, sub, context);
            base.parse_element (/<cim:StageTrigger.priority>([\s\S]*?)<\/cim:StageTrigger.priority>/g, obj, "priority", base.to_string, sub, context);
            base.parse_attribute (/<cim:StageTrigger.Stage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Stage", sub, context);
            base.parse_attribute (/<cim:StageTrigger.GateTrigger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GateTrigger", sub, context);
            base.parse_attribute (/<cim:StageTrigger.GateArmed\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GateArmed", sub, context);
            base.parse_attribute (/<cim:StageTrigger.ProtectiveActionCollection\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProtectiveActionCollection", sub, context);
            base.parse_attribute (/<cim:StageTrigger.GateComCondition\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GateComCondition", sub, context);
            bucket = context.parsed.StageTrigger;
            if (null == bucket)
                context.parsed.StageTrigger = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_StageTrigger (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "StageTrigger", "armed", base.from_boolean, fields);
            base.export_element (obj, "StageTrigger", "normalArmed", base.from_boolean, fields);
            base.export_element (obj, "StageTrigger", "priority", base.from_string, fields);
            base.export_attribute (obj, "StageTrigger", "Stage", fields);
            base.export_attribute (obj, "StageTrigger", "GateTrigger", fields);
            base.export_attribute (obj, "StageTrigger", "GateArmed", fields);
            base.export_attribute (obj, "StageTrigger", "ProtectiveActionCollection", fields);
            base.export_attribute (obj, "StageTrigger", "GateComCondition", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A protective action for supporting the integrity of the power system.
         *
         */
        function parse_ProtectiveAction (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ProtectiveAction";
            base.parse_element (/<cim:ProtectiveAction.enabled>([\s\S]*?)<\/cim:ProtectiveAction.enabled>/g, obj, "enabled", base.to_boolean, sub, context);
            base.parse_element (/<cim:ProtectiveAction.normalEnabled>([\s\S]*?)<\/cim:ProtectiveAction.normalEnabled>/g, obj, "normalEnabled", base.to_boolean, sub, context);
            base.parse_attribute (/<cim:ProtectiveAction.ProtectionEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProtectionEquipment", sub, context);
            base.parse_attribute (/<cim:ProtectiveAction.GateComCondition\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GateComCondition", sub, context);
            base.parse_attribute (/<cim:ProtectiveAction.ProtectiveActionCollection\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProtectiveActionCollection", sub, context);
            base.parse_attribute (/<cim:ProtectiveAction.GateEnabledCondition\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GateEnabledCondition", sub, context);
            bucket = context.parsed.ProtectiveAction;
            if (null == bucket)
                context.parsed.ProtectiveAction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ProtectiveAction (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "ProtectiveAction", "enabled", base.from_boolean, fields);
            base.export_element (obj, "ProtectiveAction", "normalEnabled", base.from_boolean, fields);
            base.export_attribute (obj, "ProtectiveAction", "ProtectionEquipment", fields);
            base.export_attribute (obj, "ProtectiveAction", "GateComCondition", fields);
            base.export_attribute (obj, "ProtectiveAction", "ProtectiveActionCollection", fields);
            base.export_attribute (obj, "ProtectiveAction", "GateEnabledCondition", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Input to measurement calculation.
         *
         * Support Analog, Discrete and Accumulator.
         *
         */
        function parse_MeasurementCalculatorInput (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "MeasurementCalculatorInput";
            base.parse_element (/<cim:MeasurementCalculatorInput.absoluteValue>([\s\S]*?)<\/cim:MeasurementCalculatorInput.absoluteValue>/g, obj, "absoluteValue", base.to_boolean, sub, context);
            base.parse_element (/<cim:MeasurementCalculatorInput.order>([\s\S]*?)<\/cim:MeasurementCalculatorInput.order>/g, obj, "order", base.to_string, sub, context);
            base.parse_attribute (/<cim:MeasurementCalculatorInput.MeasurementCalculator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MeasurementCalculator", sub, context);
            base.parse_attribute (/<cim:MeasurementCalculatorInput.Measurement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Measurement", sub, context);
            bucket = context.parsed.MeasurementCalculatorInput;
            if (null == bucket)
                context.parsed.MeasurementCalculatorInput = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MeasurementCalculatorInput (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "MeasurementCalculatorInput", "absoluteValue", base.from_boolean, fields);
            base.export_element (obj, "MeasurementCalculatorInput", "order", base.from_string, fields);
            base.export_attribute (obj, "MeasurementCalculatorInput", "MeasurementCalculator", fields);
            base.export_attribute (obj, "MeasurementCalculatorInput", "Measurement", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Value associated with Equipment is used as compare.
         *
         */
        function parse_PinEquipment (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_GateInputPin (context, sub);
            obj.cls = "PinEquipment";
            base.parse_element (/<cim:PinEquipment.kind>([\s\S]*?)<\/cim:PinEquipment.kind>/g, obj, "kind", base.to_string, sub, context);
            base.parse_attribute (/<cim:PinEquipment.Equipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Equipment", sub, context);
            bucket = context.parsed.PinEquipment;
            if (null == bucket)
                context.parsed.PinEquipment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PinEquipment (obj, exporters, full)
        {
            var fields = exporters["GateInputPin"](obj, exporters, false);

            base.export_element (obj, "PinEquipment", "kind", base.from_string, fields);
            base.export_attribute (obj, "PinEquipment", "Equipment", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Categories of analog to digital (or logical result) comparison.
         *
         */
        function parse_AnalogToDigitalLogicKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AnalogToDigitalLogicKind";
            base.parse_element (/<cim:AnalogToDigitalLogicKind.ne>([\s\S]*?)<\/cim:AnalogToDigitalLogicKind.ne>/g, obj, "ne", base.to_string, sub, context);
            base.parse_element (/<cim:AnalogToDigitalLogicKind.eq>([\s\S]*?)<\/cim:AnalogToDigitalLogicKind.eq>/g, obj, "eq", base.to_string, sub, context);
            base.parse_element (/<cim:AnalogToDigitalLogicKind.le>([\s\S]*?)<\/cim:AnalogToDigitalLogicKind.le>/g, obj, "le", base.to_string, sub, context);
            base.parse_element (/<cim:AnalogToDigitalLogicKind.lt>([\s\S]*?)<\/cim:AnalogToDigitalLogicKind.lt>/g, obj, "lt", base.to_string, sub, context);
            base.parse_element (/<cim:AnalogToDigitalLogicKind.ge>([\s\S]*?)<\/cim:AnalogToDigitalLogicKind.ge>/g, obj, "ge", base.to_string, sub, context);
            base.parse_element (/<cim:AnalogToDigitalLogicKind.gt>([\s\S]*?)<\/cim:AnalogToDigitalLogicKind.gt>/g, obj, "gt", base.to_string, sub, context);
            bucket = context.parsed.AnalogToDigitalLogicKind;
            if (null == bucket)
                context.parsed.AnalogToDigitalLogicKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AnalogToDigitalLogicKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "AnalogToDigitalLogicKind", "ne", base.from_string, fields);
            base.export_element (obj, "AnalogToDigitalLogicKind", "eq", base.from_string, fields);
            base.export_element (obj, "AnalogToDigitalLogicKind", "le", base.from_string, fields);
            base.export_element (obj, "AnalogToDigitalLogicKind", "lt", base.from_string, fields);
            base.export_element (obj, "AnalogToDigitalLogicKind", "ge", base.from_string, fields);
            base.export_element (obj, "AnalogToDigitalLogicKind", "gt", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Categorisation of different protective action adjustments that can be performed on equipment.
         *
         */
        function parse_ProtectiveActionAdjustmentKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ProtectiveActionAdjustmentKind";
            base.parse_element (/<cim:ProtectiveActionAdjustmentKind.byPercentage>([\s\S]*?)<\/cim:ProtectiveActionAdjustmentKind.byPercentage>/g, obj, "byPercentage", base.to_string, sub, context);
            base.parse_element (/<cim:ProtectiveActionAdjustmentKind.byValue>([\s\S]*?)<\/cim:ProtectiveActionAdjustmentKind.byValue>/g, obj, "byValue", base.to_string, sub, context);
            base.parse_element (/<cim:ProtectiveActionAdjustmentKind.setValue>([\s\S]*?)<\/cim:ProtectiveActionAdjustmentKind.setValue>/g, obj, "setValue", base.to_string, sub, context);
            base.parse_element (/<cim:ProtectiveActionAdjustmentKind.measurement>([\s\S]*?)<\/cim:ProtectiveActionAdjustmentKind.measurement>/g, obj, "measurement", base.to_string, sub, context);
            bucket = context.parsed.ProtectiveActionAdjustmentKind;
            if (null == bucket)
                context.parsed.ProtectiveActionAdjustmentKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ProtectiveActionAdjustmentKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ProtectiveActionAdjustmentKind", "byPercentage", base.from_string, fields);
            base.export_element (obj, "ProtectiveActionAdjustmentKind", "byValue", base.from_string, fields);
            base.export_element (obj, "ProtectiveActionAdjustmentKind", "setValue", base.from_string, fields);
            base.export_element (obj, "ProtectiveActionAdjustmentKind", "measurement", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Categorisation of type of compare done on a branch group.
         *
         */
        function parse_PinBranchGroupKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PinBranchGroupKind";
            base.parse_element (/<cim:PinBranchGroupKind.activePower>([\s\S]*?)<\/cim:PinBranchGroupKind.activePower>/g, obj, "activePower", base.to_string, sub, context);
            base.parse_element (/<cim:PinBranchGroupKind.reactivePower>([\s\S]*?)<\/cim:PinBranchGroupKind.reactivePower>/g, obj, "reactivePower", base.to_string, sub, context);
            bucket = context.parsed.PinBranchGroupKind;
            if (null == bucket)
                context.parsed.PinBranchGroupKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PinBranchGroupKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "PinBranchGroupKind", "activePower", base.from_string, fields);
            base.export_element (obj, "PinBranchGroupKind", "reactivePower", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Protective action to change regulation to Equipment.
         *
         */
        function parse_ProtectiveActionRegulation (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ProtectiveAction (context, sub);
            obj.cls = "ProtectiveActionRegulation";
            base.parse_element (/<cim:ProtectiveActionRegulation.isRegulating>([\s\S]*?)<\/cim:ProtectiveActionRegulation.isRegulating>/g, obj, "isRegulating", base.to_boolean, sub, context);
            base.parse_element (/<cim:ProtectiveActionRegulation.targetValue>([\s\S]*?)<\/cim:ProtectiveActionRegulation.targetValue>/g, obj, "targetValue", base.to_float, sub, context);
            base.parse_attribute (/<cim:ProtectiveActionRegulation.RegulatingControl\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegulatingControl", sub, context);
            bucket = context.parsed.ProtectiveActionRegulation;
            if (null == bucket)
                context.parsed.ProtectiveActionRegulation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ProtectiveActionRegulation (obj, exporters, full)
        {
            var fields = exporters["ProtectiveAction"](obj, exporters, false);

            base.export_element (obj, "ProtectiveActionRegulation", "isRegulating", base.from_boolean, fields);
            base.export_element (obj, "ProtectiveActionRegulation", "targetValue", base.from_float, fields);
            base.export_attribute (obj, "ProtectiveActionRegulation", "RegulatingControl", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * An output from one gate represent an input to another gate.
         *
         */
        function parse_PinGate (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_GateInputPin (context, sub);
            obj.cls = "PinGate";
            base.parse_attribute (/<cim:PinGate.GateOutput\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GateOutput", sub, context);
            bucket = context.parsed.PinGate;
            if (null == bucket)
                context.parsed.PinGate = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PinGate (obj, exporters, full)
        {
            var fields = exporters["GateInputPin"](obj, exporters, false);

            base.export_attribute (obj, "PinGate", "GateOutput", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Logical gate than support logical operation based on the input.
         *
         */
        function parse_Gate (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Gate";
            base.parse_element (/<cim:Gate.kind>([\s\S]*?)<\/cim:Gate.kind>/g, obj, "kind", base.to_string, sub, context);
            bucket = context.parsed.Gate;
            if (null == bucket)
                context.parsed.Gate = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Gate (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "Gate", "kind", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Categorisation of type of compare done on Terminal.
         *
         */
        function parse_PinTerminalKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PinTerminalKind";
            base.parse_element (/<cim:PinTerminalKind.activePower>([\s\S]*?)<\/cim:PinTerminalKind.activePower>/g, obj, "activePower", base.to_string, sub, context);
            base.parse_element (/<cim:PinTerminalKind.apparentPower>([\s\S]*?)<\/cim:PinTerminalKind.apparentPower>/g, obj, "apparentPower", base.to_string, sub, context);
            base.parse_element (/<cim:PinTerminalKind.reactivePower>([\s\S]*?)<\/cim:PinTerminalKind.reactivePower>/g, obj, "reactivePower", base.to_string, sub, context);
            base.parse_element (/<cim:PinTerminalKind.voltage>([\s\S]*?)<\/cim:PinTerminalKind.voltage>/g, obj, "voltage", base.to_string, sub, context);
            bucket = context.parsed.PinTerminalKind;
            if (null == bucket)
                context.parsed.PinTerminalKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PinTerminalKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "PinTerminalKind", "activePower", base.from_string, fields);
            base.export_element (obj, "PinTerminalKind", "apparentPower", base.from_string, fields);
            base.export_element (obj, "PinTerminalKind", "reactivePower", base.from_string, fields);
            base.export_element (obj, "PinTerminalKind", "voltage", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Stage of a remedial action scheme.
         *
         */
        function parse_Stage (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Stage";
            base.parse_element (/<cim:Stage.priority>([\s\S]*?)<\/cim:Stage.priority>/g, obj, "priority", base.to_string, sub, context);
            base.parse_attribute (/<cim:Stage.RemedialActionScheme\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemedialActionScheme", sub, context);
            bucket = context.parsed.Stage;
            if (null == bucket)
                context.parsed.Stage = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Stage (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "Stage", "priority", base.from_string, fields);
            base.export_attribute (obj, "Stage", "RemedialActionScheme", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Result of a calculation of one or more measurement.
         *
         */
        function parse_MeasurementCalculator (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "MeasurementCalculator";
            base.parse_element (/<cim:MeasurementCalculator.kind>([\s\S]*?)<\/cim:MeasurementCalculator.kind>/g, obj, "kind", base.to_string, sub, context);
            bucket = context.parsed.MeasurementCalculator;
            if (null == bucket)
                context.parsed.MeasurementCalculator = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MeasurementCalculator (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "MeasurementCalculator", "kind", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Classification of Remedial Action Scheme.
         *
         */
        function parse_RemedialActionSchemeKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "RemedialActionSchemeKind";
            base.parse_element (/<cim:RemedialActionSchemeKind.rAS>([\s\S]*?)<\/cim:RemedialActionSchemeKind.rAS>/g, obj, "rAS", base.to_string, sub, context);
            base.parse_element (/<cim:RemedialActionSchemeKind.rAP>([\s\S]*?)<\/cim:RemedialActionSchemeKind.rAP>/g, obj, "rAP", base.to_string, sub, context);
            bucket = context.parsed.RemedialActionSchemeKind;
            if (null == bucket)
                context.parsed.RemedialActionSchemeKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_RemedialActionSchemeKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "RemedialActionSchemeKind", "rAS", base.from_string, fields);
            base.export_element (obj, "RemedialActionSchemeKind", "rAP", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Define the different logical operations.
         *
         */
        function parse_GateLogicKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "GateLogicKind";
            base.parse_element (/<cim:GateLogicKind.and>([\s\S]*?)<\/cim:GateLogicKind.and>/g, obj, "and", base.to_string, sub, context);
            base.parse_element (/<cim:GateLogicKind.or>([\s\S]*?)<\/cim:GateLogicKind.or>/g, obj, "or", base.to_string, sub, context);
            base.parse_element (/<cim:GateLogicKind.nor>([\s\S]*?)<\/cim:GateLogicKind.nor>/g, obj, "nor", base.to_string, sub, context);
            base.parse_element (/<cim:GateLogicKind.nand>([\s\S]*?)<\/cim:GateLogicKind.nand>/g, obj, "nand", base.to_string, sub, context);
            base.parse_element (/<cim:GateLogicKind.not>([\s\S]*?)<\/cim:GateLogicKind.not>/g, obj, "not", base.to_string, sub, context);
            base.parse_element (/<cim:GateLogicKind.xnor>([\s\S]*?)<\/cim:GateLogicKind.xnor>/g, obj, "xnor", base.to_string, sub, context);
            base.parse_element (/<cim:GateLogicKind.xor>([\s\S]*?)<\/cim:GateLogicKind.xor>/g, obj, "xor", base.to_string, sub, context);
            bucket = context.parsed.GateLogicKind;
            if (null == bucket)
                context.parsed.GateLogicKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GateLogicKind (obj, exporters, full)
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
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Value associated with Terminal is used as compare.
         *
         */
        function parse_PinTerminal (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_GateInputPin (context, sub);
            obj.cls = "PinTerminal";
            base.parse_element (/<cim:PinTerminal.kind>([\s\S]*?)<\/cim:PinTerminal.kind>/g, obj, "kind", base.to_string, sub, context);
            base.parse_attribute (/<cim:PinTerminal.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context);
            bucket = context.parsed.PinTerminal;
            if (null == bucket)
                context.parsed.PinTerminal = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PinTerminal (obj, exporters, full)
        {
            var fields = exporters["GateInputPin"](obj, exporters, false);

            base.export_element (obj, "PinTerminal", "kind", base.from_string, fields);
            base.export_attribute (obj, "PinTerminal", "Terminal", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Value associated with branch group is used as compare.
         *
         */
        function parse_PinBranchGroup (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_GateInputPin (context, sub);
            obj.cls = "PinBranchGroup";
            base.parse_element (/<cim:PinBranchGroup.kind>([\s\S]*?)<\/cim:PinBranchGroup.kind>/g, obj, "kind", base.to_string, sub, context);
            base.parse_attribute (/<cim:PinBranchGroup.BranchGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BranchGroup", sub, context);
            bucket = context.parsed.PinBranchGroup;
            if (null == bucket)
                context.parsed.PinBranchGroup = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PinBranchGroup (obj, exporters, full)
        {
            var fields = exporters["GateInputPin"](obj, exporters, false);

            base.export_element (obj, "PinBranchGroup", "kind", base.from_string, fields);
            base.export_attribute (obj, "PinBranchGroup", "BranchGroup", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Protective actions on non-switching equipment.
         *
         * The operating condition is adjusted.
         *
         */
        function parse_ProtectiveActionAdjustment (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ProtectiveAction (context, sub);
            obj.cls = "ProtectiveActionAdjustment";
            base.parse_element (/<cim:ProtectiveActionAdjustment.byPercentage>([\s\S]*?)<\/cim:ProtectiveActionAdjustment.byPercentage>/g, obj, "byPercentage", base.to_string, sub, context);
            base.parse_element (/<cim:ProtectiveActionAdjustment.byValue>([\s\S]*?)<\/cim:ProtectiveActionAdjustment.byValue>/g, obj, "byValue", base.to_float, sub, context);
            base.parse_element (/<cim:ProtectiveActionAdjustment.kind>([\s\S]*?)<\/cim:ProtectiveActionAdjustment.kind>/g, obj, "kind", base.to_string, sub, context);
            base.parse_element (/<cim:ProtectiveActionAdjustment.reduce>([\s\S]*?)<\/cim:ProtectiveActionAdjustment.reduce>/g, obj, "reduce", base.to_boolean, sub, context);
            base.parse_element (/<cim:ProtectiveActionAdjustment.setValue>([\s\S]*?)<\/cim:ProtectiveActionAdjustment.setValue>/g, obj, "setValue", base.to_float, sub, context);
            base.parse_attribute (/<cim:ProtectiveActionAdjustment.Measurement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Measurement", sub, context);
            base.parse_attribute (/<cim:ProtectiveActionAdjustment.ConductingEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConductingEquipment", sub, context);
            base.parse_attribute (/<cim:ProtectiveActionAdjustment.DCConductingEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DCConductingEquipment", sub, context);
            bucket = context.parsed.ProtectiveActionAdjustment;
            if (null == bucket)
                context.parsed.ProtectiveActionAdjustment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ProtectiveActionAdjustment (obj, exporters, full)
        {
            var fields = exporters["ProtectiveAction"](obj, exporters, false);

            base.export_element (obj, "ProtectiveActionAdjustment", "byPercentage", base.from_string, fields);
            base.export_element (obj, "ProtectiveActionAdjustment", "byValue", base.from_float, fields);
            base.export_element (obj, "ProtectiveActionAdjustment", "kind", base.from_string, fields);
            base.export_element (obj, "ProtectiveActionAdjustment", "reduce", base.from_boolean, fields);
            base.export_element (obj, "ProtectiveActionAdjustment", "setValue", base.from_float, fields);
            base.export_attribute (obj, "ProtectiveActionAdjustment", "Measurement", fields);
            base.export_attribute (obj, "ProtectiveActionAdjustment", "ConductingEquipment", fields);
            base.export_attribute (obj, "ProtectiveActionAdjustment", "DCConductingEquipment", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A conditions that can trigger remedial actions.
         *
         */
        function parse_TriggerCondition (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TriggerCondition";
            base.parse_attribute (/<cim:TriggerCondition.RemedialActionScheme\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemedialActionScheme", sub, context);
            base.parse_attribute (/<cim:TriggerCondition.GateTrigger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GateTrigger", sub, context);
            bucket = context.parsed.TriggerCondition;
            if (null == bucket)
                context.parsed.TriggerCondition = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TriggerCondition (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_attribute (obj, "TriggerCondition", "RemedialActionScheme", fields);
            base.export_attribute (obj, "TriggerCondition", "GateTrigger", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Protective action to put an Equipment in-service/out-of-service.
         *
         */
        function parse_ProtectiveActionEquipment (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ProtectiveAction (context, sub);
            obj.cls = "ProtectiveActionEquipment";
            base.parse_element (/<cim:ProtectiveActionEquipment.inService>([\s\S]*?)<\/cim:ProtectiveActionEquipment.inService>/g, obj, "inService", base.to_boolean, sub, context);
            base.parse_attribute (/<cim:ProtectiveActionEquipment.Equipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Equipment", sub, context);
            bucket = context.parsed.ProtectiveActionEquipment;
            if (null == bucket)
                context.parsed.ProtectiveActionEquipment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ProtectiveActionEquipment (obj, exporters, full)
        {
            var fields = exporters["ProtectiveAction"](obj, exporters, false);

            base.export_element (obj, "ProtectiveActionEquipment", "inService", base.from_boolean, fields);
            base.export_attribute (obj, "ProtectiveActionEquipment", "Equipment", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Categorisation of calculation operation that can be done to Measurement.
         *
         */
        function parse_CalculationKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CalculationKind";
            base.parse_element (/<cim:CalculationKind.sum>([\s\S]*?)<\/cim:CalculationKind.sum>/g, obj, "sum", base.to_string, sub, context);
            base.parse_element (/<cim:CalculationKind.mul>([\s\S]*?)<\/cim:CalculationKind.mul>/g, obj, "mul", base.to_string, sub, context);
            base.parse_element (/<cim:CalculationKind.div>([\s\S]*?)<\/cim:CalculationKind.div>/g, obj, "div", base.to_string, sub, context);
            base.parse_element (/<cim:CalculationKind.sqrt>([\s\S]*?)<\/cim:CalculationKind.sqrt>/g, obj, "sqrt", base.to_string, sub, context);
            bucket = context.parsed.CalculationKind;
            if (null == bucket)
                context.parsed.CalculationKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CalculationKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "CalculationKind", "sum", base.from_string, fields);
            base.export_element (obj, "CalculationKind", "mul", base.from_string, fields);
            base.export_element (obj, "CalculationKind", "div", base.from_string, fields);
            base.export_element (obj, "CalculationKind", "sqrt", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Categorisation of type of compare done on Equipment.
         *
         */
        function parse_PinEquipmentKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PinEquipmentKind";
            base.parse_element (/<cim:PinEquipmentKind.inService>([\s\S]*?)<\/cim:PinEquipmentKind.inService>/g, obj, "inService", base.to_string, sub, context);
            base.parse_element (/<cim:PinEquipmentKind.ratedCurrent>([\s\S]*?)<\/cim:PinEquipmentKind.ratedCurrent>/g, obj, "ratedCurrent", base.to_string, sub, context);
            base.parse_element (/<cim:PinEquipmentKind.voltageLimit>([\s\S]*?)<\/cim:PinEquipmentKind.voltageLimit>/g, obj, "voltageLimit", base.to_string, sub, context);
            base.parse_element (/<cim:PinEquipmentKind.currentLimit>([\s\S]*?)<\/cim:PinEquipmentKind.currentLimit>/g, obj, "currentLimit", base.to_string, sub, context);
            base.parse_element (/<cim:PinEquipmentKind.activePowerLimit>([\s\S]*?)<\/cim:PinEquipmentKind.activePowerLimit>/g, obj, "activePowerLimit", base.to_string, sub, context);
            base.parse_element (/<cim:PinEquipmentKind.apparentPowerLimit>([\s\S]*?)<\/cim:PinEquipmentKind.apparentPowerLimit>/g, obj, "apparentPowerLimit", base.to_string, sub, context);
            base.parse_element (/<cim:PinEquipmentKind.connected>([\s\S]*?)<\/cim:PinEquipmentKind.connected>/g, obj, "connected", base.to_string, sub, context);
            bucket = context.parsed.PinEquipmentKind;
            if (null == bucket)
                context.parsed.PinEquipmentKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PinEquipmentKind (obj, exporters, full)
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
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A collection of protective actions to protect the integrity of the power system.
         *
         */
        function parse_ProtectiveActionCollection (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ProtectiveActionCollection";
            bucket = context.parsed.ProtectiveActionCollection;
            if (null == bucket)
                context.parsed.ProtectiveActionCollection = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ProtectiveActionCollection (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                parse_ProtectiveActionAdjustment: parse_ProtectiveActionAdjustment,
                parse_AnalogToDigitalLogicKind: parse_AnalogToDigitalLogicKind,
                parse_CalculationKind: parse_CalculationKind,
                parse_StageTrigger: parse_StageTrigger,
                parse_ProtectiveActionEquipment: parse_ProtectiveActionEquipment,
                parse_RemedialActionSchemeKind: parse_RemedialActionSchemeKind,
                export_CalculationKind: export_CalculationKind,
                export_PinTerminalKind: export_PinTerminalKind,
                export_ProtectiveActionAdjustmentKind: export_ProtectiveActionAdjustmentKind,
                export_PinBranchGroupKind: export_PinBranchGroupKind,
                export_ProtectiveActionCollection: export_ProtectiveActionCollection,
                export_PinMeasurement: export_PinMeasurement,
                parse_MeasurementCalculatorInput: parse_MeasurementCalculatorInput,
                parse_PinTerminalKind: parse_PinTerminalKind,
                export_PinBranchGroup: export_PinBranchGroup,
                parse_Stage: parse_Stage,
                parse_GateInputPin: parse_GateInputPin,
                export_Gate: export_Gate,
                parse_PinGate: parse_PinGate,
                export_ProtectiveActionEquipment: export_ProtectiveActionEquipment,
                export_ProtectiveAction: export_ProtectiveAction,
                export_MeasurementCalculator: export_MeasurementCalculator,
                parse_ProtectiveAction: parse_ProtectiveAction,
                parse_PinBranchGroupKind: parse_PinBranchGroupKind,
                export_AnalogToDigitalLogicKind: export_AnalogToDigitalLogicKind,
                parse_RemedialActionScheme: parse_RemedialActionScheme,
                parse_ProtectiveActionAdjustmentKind: parse_ProtectiveActionAdjustmentKind,
                export_PinEquipment: export_PinEquipment,
                parse_ProtectiveActionRegulation: parse_ProtectiveActionRegulation,
                parse_GateLogicKind: parse_GateLogicKind,
                export_RemedialActionSchemeKind: export_RemedialActionSchemeKind,
                export_GateInputPin: export_GateInputPin,
                export_PinTerminal: export_PinTerminal,
                parse_PinTerminal: parse_PinTerminal,
                parse_PinEquipment: parse_PinEquipment,
                export_Stage: export_Stage,
                export_MeasurementCalculatorInput: export_MeasurementCalculatorInput,
                export_TriggerCondition: export_TriggerCondition,
                export_ProtectiveActionRegulation: export_ProtectiveActionRegulation,
                parse_TriggerCondition: parse_TriggerCondition,
                parse_MeasurementCalculator: parse_MeasurementCalculator,
                export_PinGate: export_PinGate,
                export_GateLogicKind: export_GateLogicKind,
                export_StageTrigger: export_StageTrigger,
                export_RemedialActionScheme: export_RemedialActionScheme,
                parse_PinMeasurement: parse_PinMeasurement,
                parse_ProtectiveActionCollection: parse_ProtectiveActionCollection,
                export_PinEquipmentKind: export_PinEquipmentKind,
                parse_PinBranchGroup: parse_PinBranchGroup,
                parse_Gate: parse_Gate,
                export_ProtectiveActionAdjustment: export_ProtectiveActionAdjustment,
                parse_PinEquipmentKind: parse_PinEquipmentKind
            }
        );
    }
);