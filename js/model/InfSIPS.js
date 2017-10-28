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
            base.parse_attribute (/<cim:PinMeasurement.Measurement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Measurement", sub, context, true);

            base.parse_attribute (/<cim:PinMeasurement.MeasurementCalculator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MeasurementCalculator", sub, context, true);

            bucket = context.parsed.PinMeasurement;
            if (null == bucket)
                context.parsed.PinMeasurement = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * If true, use the absolute value for compare..
             *
             */
            base.parse_element (/<cim:GateInputPin.absoluteValue>([\s\S]*?)<\/cim:GateInputPin.absoluteValue>/g, obj, "absoluteValue", base.to_boolean, sub, context);

            /**
             * The compare operation.
             *
             */
            base.parse_element (/<cim:GateInputPin.aDLogicKind>([\s\S]*?)<\/cim:GateInputPin.aDLogicKind>/g, obj, "aDLogicKind", base.to_string, sub, context);

            /**
             * The duration the compare condition need to be present before given a true.
             *
             * Default is 0 seconds.
             *
             */
            base.parse_element (/<cim:GateInputPin.duration>([\s\S]*?)<\/cim:GateInputPin.duration>/g, obj, "duration", base.to_string, sub, context);

            /**
             * Invert/negate the result of the compare.
             *
             */
            base.parse_element (/<cim:GateInputPin.negate>([\s\S]*?)<\/cim:GateInputPin.negate>/g, obj, "negate", base.to_boolean, sub, context);

            /**
             * The threshold percentage that should be used for compare with the percentage change between input value and threshold value.
             *
             */
            base.parse_element (/<cim:GateInputPin.thresholdPercentage>([\s\S]*?)<\/cim:GateInputPin.thresholdPercentage>/g, obj, "thresholdPercentage", base.to_string, sub, context);

            /**
             * The threshold value that should be used for compare with the input value.
             *
             */
            base.parse_element (/<cim:GateInputPin.thresholdValue>([\s\S]*?)<\/cim:GateInputPin.thresholdValue>/g, obj, "thresholdValue", base.to_float, sub, context);

            base.parse_attribute (/<cim:GateInputPin.Gate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Gate", sub, context, true);

            bucket = context.parsed.GateInputPin;
            if (null == bucket)
                context.parsed.GateInputPin = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The status of the class set by operation or by signal.
             *
             * Optional field that will override other status fields.
             *
             */
            base.parse_element (/<cim:RemedialActionScheme.armed>([\s\S]*?)<\/cim:RemedialActionScheme.armed>/g, obj, "armed", base.to_boolean, sub, context);

            /**
             * Kind of Remedial Action Scheme (RAS)
             *
             */
            base.parse_element (/<cim:RemedialActionScheme.kind>([\s\S]*?)<\/cim:RemedialActionScheme.kind>/g, obj, "kind", base.to_string, sub, context);

            /**
             * The default/normal value used when other active signal/values are missing.
             *
             */
            base.parse_element (/<cim:RemedialActionScheme.normalArmed>([\s\S]*?)<\/cim:RemedialActionScheme.normalArmed>/g, obj, "normalArmed", base.to_boolean, sub, context);

            base.parse_attribute (/<cim:RemedialActionScheme.GateArmed\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GateArmed", sub, context, true);

            bucket = context.parsed.RemedialActionScheme;
            if (null == bucket)
                context.parsed.RemedialActionScheme = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The status of the class set by operation or by signal.
             *
             * Optional field that will override other status fields.
             *
             */
            base.parse_element (/<cim:StageTrigger.armed>([\s\S]*?)<\/cim:StageTrigger.armed>/g, obj, "armed", base.to_boolean, sub, context);

            /**
             * The default/normal value used when other active signal/values are missing.
             *
             */
            base.parse_element (/<cim:StageTrigger.normalArmed>([\s\S]*?)<\/cim:StageTrigger.normalArmed>/g, obj, "normalArmed", base.to_boolean, sub, context);

            /**
             * Priority of trigger. 0 = don t care (default) 1 = highest priority. 2 is less than 1 and so on.
             *
             * A trigger with the highest priority will trigger first.
             *
             */
            base.parse_element (/<cim:StageTrigger.priority>([\s\S]*?)<\/cim:StageTrigger.priority>/g, obj, "priority", base.to_string, sub, context);

            base.parse_attribute (/<cim:StageTrigger.Stage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Stage", sub, context, true);

            base.parse_attribute (/<cim:StageTrigger.GateTrigger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GateTrigger", sub, context, true);

            base.parse_attribute (/<cim:StageTrigger.GateArmed\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GateArmed", sub, context, true);

            base.parse_attribute (/<cim:StageTrigger.ProtectiveActionCollection\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProtectiveActionCollection", sub, context, true);

            base.parse_attribute (/<cim:StageTrigger.GateComCondition\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GateComCondition", sub, context, true);

            bucket = context.parsed.StageTrigger;
            if (null == bucket)
                context.parsed.StageTrigger = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The status of the class set by operation or by signal.
             *
             * Optional field that will override other status fields.
             *
             */
            base.parse_element (/<cim:ProtectiveAction.enabled>([\s\S]*?)<\/cim:ProtectiveAction.enabled>/g, obj, "enabled", base.to_boolean, sub, context);

            /**
             * The default/normal value used when other active signal/values are missing.
             *
             */
            base.parse_element (/<cim:ProtectiveAction.normalEnabled>([\s\S]*?)<\/cim:ProtectiveAction.normalEnabled>/g, obj, "normalEnabled", base.to_boolean, sub, context);

            base.parse_attribute (/<cim:ProtectiveAction.ProtectionEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProtectionEquipment", sub, context, true);

            base.parse_attribute (/<cim:ProtectiveAction.GateComCondition\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GateComCondition", sub, context, true);

            base.parse_attribute (/<cim:ProtectiveAction.ProtectiveActionCollection\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProtectiveActionCollection", sub, context, true);

            base.parse_attribute (/<cim:ProtectiveAction.GateEnabledCondition\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GateEnabledCondition", sub, context, true);

            bucket = context.parsed.ProtectiveAction;
            if (null == bucket)
                context.parsed.ProtectiveAction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * If true, use the absolute value for the calculation.
             *
             */
            base.parse_element (/<cim:MeasurementCalculatorInput.absoluteValue>([\s\S]*?)<\/cim:MeasurementCalculatorInput.absoluteValue>/g, obj, "absoluteValue", base.to_boolean, sub, context);

            /**
             * Positive number that defines the order of the operant in the calculation. 0 = default.
             *
             * The order is not relevant (e.g. summation).
             *
             */
            base.parse_element (/<cim:MeasurementCalculatorInput.order>([\s\S]*?)<\/cim:MeasurementCalculatorInput.order>/g, obj, "order", base.to_string, sub, context);

            base.parse_attribute (/<cim:MeasurementCalculatorInput.MeasurementCalculator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MeasurementCalculator", sub, context, true);

            base.parse_attribute (/<cim:MeasurementCalculatorInput.Measurement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Measurement", sub, context, true);

            bucket = context.parsed.MeasurementCalculatorInput;
            if (null == bucket)
                context.parsed.MeasurementCalculatorInput = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The compare operation done on the equipment.
             *
             */
            base.parse_element (/<cim:PinEquipment.kind>([\s\S]*?)<\/cim:PinEquipment.kind>/g, obj, "kind", base.to_string, sub, context);

            base.parse_attribute (/<cim:PinEquipment.Equipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Equipment", sub, context, true);

            bucket = context.parsed.PinEquipment;
            if (null == bucket)
                context.parsed.PinEquipment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Not equal (unlike) comparison operation.
             *
             */
            base.parse_element (/<cim:AnalogToDigitalLogicKind.ne>([\s\S]*?)<\/cim:AnalogToDigitalLogicKind.ne>/g, obj, "ne", base.to_string, sub, context);

            /**
             * Equal (like) comparison operation.
             *
             */
            base.parse_element (/<cim:AnalogToDigitalLogicKind.eq>([\s\S]*?)<\/cim:AnalogToDigitalLogicKind.eq>/g, obj, "eq", base.to_string, sub, context);

            /**
             * Less or equal comparison operation.
             *
             */
            base.parse_element (/<cim:AnalogToDigitalLogicKind.le>([\s\S]*?)<\/cim:AnalogToDigitalLogicKind.le>/g, obj, "le", base.to_string, sub, context);

            /**
             * Less than comparison operation.
             *
             */
            base.parse_element (/<cim:AnalogToDigitalLogicKind.lt>([\s\S]*?)<\/cim:AnalogToDigitalLogicKind.lt>/g, obj, "lt", base.to_string, sub, context);

            /**
             * Greater or equal comparison operation.
             *
             */
            base.parse_element (/<cim:AnalogToDigitalLogicKind.ge>([\s\S]*?)<\/cim:AnalogToDigitalLogicKind.ge>/g, obj, "ge", base.to_string, sub, context);

            /**
             * Greater than comparison operation.
             *
             */
            base.parse_element (/<cim:AnalogToDigitalLogicKind.gt>([\s\S]*?)<\/cim:AnalogToDigitalLogicKind.gt>/g, obj, "gt", base.to_string, sub, context);

            bucket = context.parsed.AnalogToDigitalLogicKind;
            if (null == bucket)
                context.parsed.AnalogToDigitalLogicKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The adjustment is in percentage of the active value.
             *
             */
            base.parse_element (/<cim:ProtectiveActionAdjustmentKind.byPercentage>([\s\S]*?)<\/cim:ProtectiveActionAdjustmentKind.byPercentage>/g, obj, "byPercentage", base.to_string, sub, context);

            /**
             * The adjustment is in given by a value that defined the changes that will be done to the active value.
             *
             */
            base.parse_element (/<cim:ProtectiveActionAdjustmentKind.byValue>([\s\S]*?)<\/cim:ProtectiveActionAdjustmentKind.byValue>/g, obj, "byValue", base.to_string, sub, context);

            /**
             * The equipment will operate on the new value.
             *
             */
            base.parse_element (/<cim:ProtectiveActionAdjustmentKind.setValue>([\s\S]*?)<\/cim:ProtectiveActionAdjustmentKind.setValue>/g, obj, "setValue", base.to_string, sub, context);

            /**
             * The equipment will operating on a value given by a measurement.
             *
             */
            base.parse_element (/<cim:ProtectiveActionAdjustmentKind.measurement>([\s\S]*?)<\/cim:ProtectiveActionAdjustmentKind.measurement>/g, obj, "measurement", base.to_string, sub, context);

            bucket = context.parsed.ProtectiveActionAdjustmentKind;
            if (null == bucket)
                context.parsed.ProtectiveActionAdjustmentKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Active power in the branch group.
             *
             */
            base.parse_element (/<cim:PinBranchGroupKind.activePower>([\s\S]*?)<\/cim:PinBranchGroupKind.activePower>/g, obj, "activePower", base.to_string, sub, context);

            /**
             * reactive power in the branch group.
             *
             */
            base.parse_element (/<cim:PinBranchGroupKind.reactivePower>([\s\S]*?)<\/cim:PinBranchGroupKind.reactivePower>/g, obj, "reactivePower", base.to_string, sub, context);

            bucket = context.parsed.PinBranchGroupKind;
            if (null == bucket)
                context.parsed.PinBranchGroupKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * If true the regulator is put in-service, otherwise out-of-service (no regulation).
             *
             */
            base.parse_element (/<cim:ProtectiveActionRegulation.isRegulating>([\s\S]*?)<\/cim:ProtectiveActionRegulation.isRegulating>/g, obj, "isRegulating", base.to_boolean, sub, context);

            /**
             * The target value specified the new case input for the regulator.
             *
             * The value has the units appropriate to the mode attribute. The protective action does not change the mode attribute.
             *
             */
            base.parse_element (/<cim:ProtectiveActionRegulation.targetValue>([\s\S]*?)<\/cim:ProtectiveActionRegulation.targetValue>/g, obj, "targetValue", base.to_float, sub, context);

            base.parse_attribute (/<cim:ProtectiveActionRegulation.RegulatingControl\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegulatingControl", sub, context, true);

            bucket = context.parsed.ProtectiveActionRegulation;
            if (null == bucket)
                context.parsed.ProtectiveActionRegulation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            base.parse_attribute (/<cim:PinGate.GateOutput\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GateOutput", sub, context, true);

            bucket = context.parsed.PinGate;
            if (null == bucket)
                context.parsed.PinGate = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The logical operation of the gate.
             *
             */
            base.parse_element (/<cim:Gate.kind>([\s\S]*?)<\/cim:Gate.kind>/g, obj, "kind", base.to_string, sub, context);

            bucket = context.parsed.Gate;
            if (null == bucket)
                context.parsed.Gate = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Active Power on the Terminal.
             *
             */
            base.parse_element (/<cim:PinTerminalKind.activePower>([\s\S]*?)<\/cim:PinTerminalKind.activePower>/g, obj, "activePower", base.to_string, sub, context);

            /**
             * Apparent Power on the Terminal.
             *
             */
            base.parse_element (/<cim:PinTerminalKind.apparentPower>([\s\S]*?)<\/cim:PinTerminalKind.apparentPower>/g, obj, "apparentPower", base.to_string, sub, context);

            /**
             * Reactive Power on the Terminal.
             *
             */
            base.parse_element (/<cim:PinTerminalKind.reactivePower>([\s\S]*?)<\/cim:PinTerminalKind.reactivePower>/g, obj, "reactivePower", base.to_string, sub, context);

            /**
             * Voltage on the Terminal.
             *
             */
            base.parse_element (/<cim:PinTerminalKind.voltage>([\s\S]*?)<\/cim:PinTerminalKind.voltage>/g, obj, "voltage", base.to_string, sub, context);

            bucket = context.parsed.PinTerminalKind;
            if (null == bucket)
                context.parsed.PinTerminalKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The priority of the stage.   0 = don t care (default) 1 = highest priority. 2 is less than 1 and so on.
             *
             * A stage with higher priority needs be activated before a lower stage can be activated.
             *
             */
            base.parse_element (/<cim:Stage.priority>([\s\S]*?)<\/cim:Stage.priority>/g, obj, "priority", base.to_string, sub, context);

            base.parse_attribute (/<cim:Stage.RemedialActionScheme\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemedialActionScheme", sub, context, true);

            bucket = context.parsed.Stage;
            if (null == bucket)
                context.parsed.Stage = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Calculation operation executed on the operants.
             *
             */
            base.parse_element (/<cim:MeasurementCalculator.kind>([\s\S]*?)<\/cim:MeasurementCalculator.kind>/g, obj, "kind", base.to_string, sub, context);

            bucket = context.parsed.MeasurementCalculator;
            if (null == bucket)
                context.parsed.MeasurementCalculator = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Remedial Action Scheme (RAS).
             *
             */
            base.parse_element (/<cim:RemedialActionSchemeKind.rAS>([\s\S]*?)<\/cim:RemedialActionSchemeKind.rAS>/g, obj, "rAS", base.to_string, sub, context);

            /**
             * Remedial Action Plan (RAP)
             *
             */
            base.parse_element (/<cim:RemedialActionSchemeKind.rAP>([\s\S]*?)<\/cim:RemedialActionSchemeKind.rAP>/g, obj, "rAP", base.to_string, sub, context);

            bucket = context.parsed.RemedialActionSchemeKind;
            if (null == bucket)
                context.parsed.RemedialActionSchemeKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * A logical AND operation.
             *
             * True when all input are true.
             *
             */
            base.parse_element (/<cim:GateLogicKind.and>([\s\S]*?)<\/cim:GateLogicKind.and>/g, obj, "and", base.to_string, sub, context);

            /**
             * A logical OR operation.
             *
             * True when one or more input are true.
             *
             */
            base.parse_element (/<cim:GateLogicKind.or>([\s\S]*?)<\/cim:GateLogicKind.or>/g, obj, "or", base.to_string, sub, context);

            /**
             * A logical NOR operation.
             *
             * False when one or more input are true.
             *
             */
            base.parse_element (/<cim:GateLogicKind.nor>([\s\S]*?)<\/cim:GateLogicKind.nor>/g, obj, "nor", base.to_string, sub, context);

            /**
             * A logical NAND operation.
             *
             * False when all input are true.
             *
             */
            base.parse_element (/<cim:GateLogicKind.nand>([\s\S]*?)<\/cim:GateLogicKind.nand>/g, obj, "nand", base.to_string, sub, context);

            /**
             * A logical NOT operation.
             *
             * Only one input and true input will give false out and false in will give true out. An inverter.
             *
             */
            base.parse_element (/<cim:GateLogicKind.not>([\s\S]*?)<\/cim:GateLogicKind.not>/g, obj, "not", base.to_string, sub, context);

            /**
             * A logical XNOR operation.
             *
             * The function is the inverse of the exclusive OR (XOR) gate. All input false or true will give true. Otherwise false.
             *
             */
            base.parse_element (/<cim:GateLogicKind.xnor>([\s\S]*?)<\/cim:GateLogicKind.xnor>/g, obj, "xnor", base.to_string, sub, context);

            /**
             * A logical XOR operation.
             *
             * All input false or true will give false. Otherwise true.
             *
             */
            base.parse_element (/<cim:GateLogicKind.xor>([\s\S]*?)<\/cim:GateLogicKind.xor>/g, obj, "xor", base.to_string, sub, context);

            bucket = context.parsed.GateLogicKind;
            if (null == bucket)
                context.parsed.GateLogicKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The compare operation done on the terminal.
             *
             */
            base.parse_element (/<cim:PinTerminal.kind>([\s\S]*?)<\/cim:PinTerminal.kind>/g, obj, "kind", base.to_string, sub, context);

            base.parse_attribute (/<cim:PinTerminal.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context, true);

            bucket = context.parsed.PinTerminal;
            if (null == bucket)
                context.parsed.PinTerminal = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The compare operation done on the branch group.
             *
             */
            base.parse_element (/<cim:PinBranchGroup.kind>([\s\S]*?)<\/cim:PinBranchGroup.kind>/g, obj, "kind", base.to_string, sub, context);

            base.parse_attribute (/<cim:PinBranchGroup.BranchGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BranchGroup", sub, context, true);

            bucket = context.parsed.PinBranchGroup;
            if (null == bucket)
                context.parsed.PinBranchGroup = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The adjustment is given in percent of the active value.
             *
             */
            base.parse_element (/<cim:ProtectiveActionAdjustment.byPercentage>([\s\S]*?)<\/cim:ProtectiveActionAdjustment.byPercentage>/g, obj, "byPercentage", base.to_string, sub, context);

            /**
             * The adjustment is given in value of the active value.
             *
             */
            base.parse_element (/<cim:ProtectiveActionAdjustment.byValue>([\s\S]*?)<\/cim:ProtectiveActionAdjustment.byValue>/g, obj, "byValue", base.to_float, sub, context);

            /**
             * Defines the kind of adjustment that should be done.
             *
             * With this value the correct attribute containing the value needs to be used.
             *
             */
            base.parse_element (/<cim:ProtectiveActionAdjustment.kind>([\s\S]*?)<\/cim:ProtectiveActionAdjustment.kind>/g, obj, "kind", base.to_string, sub, context);

            /**
             * If true, the adjusted value is an reduction.
             *
             * Other wise it is an increase in the value.
             *
             */
            base.parse_element (/<cim:ProtectiveActionAdjustment.reduce>([\s\S]*?)<\/cim:ProtectiveActionAdjustment.reduce>/g, obj, "reduce", base.to_boolean, sub, context);

            /**
             * The adjustment is given by a new active value.
             *
             */
            base.parse_element (/<cim:ProtectiveActionAdjustment.setValue>([\s\S]*?)<\/cim:ProtectiveActionAdjustment.setValue>/g, obj, "setValue", base.to_float, sub, context);

            base.parse_attribute (/<cim:ProtectiveActionAdjustment.Measurement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Measurement", sub, context, true);

            base.parse_attribute (/<cim:ProtectiveActionAdjustment.ConductingEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConductingEquipment", sub, context, true);

            base.parse_attribute (/<cim:ProtectiveActionAdjustment.DCConductingEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DCConductingEquipment", sub, context, true);

            bucket = context.parsed.ProtectiveActionAdjustment;
            if (null == bucket)
                context.parsed.ProtectiveActionAdjustment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            base.parse_attribute (/<cim:TriggerCondition.RemedialActionScheme\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemedialActionScheme", sub, context, true);

            base.parse_attribute (/<cim:TriggerCondition.GateTrigger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GateTrigger", sub, context, true);

            bucket = context.parsed.TriggerCondition;
            if (null == bucket)
                context.parsed.TriggerCondition = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * If true the equipment is put in-service, otherwise out-of-service.
             *
             */
            base.parse_element (/<cim:ProtectiveActionEquipment.inService>([\s\S]*?)<\/cim:ProtectiveActionEquipment.inService>/g, obj, "inService", base.to_boolean, sub, context);

            base.parse_attribute (/<cim:ProtectiveActionEquipment.Equipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Equipment", sub, context, true);

            bucket = context.parsed.ProtectiveActionEquipment;
            if (null == bucket)
                context.parsed.ProtectiveActionEquipment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Summation operation over the input values (operands).
             *
             */
            base.parse_element (/<cim:CalculationKind.sum>([\s\S]*?)<\/cim:CalculationKind.sum>/g, obj, "sum", base.to_string, sub, context);

            /**
             * Multiplication operation the input values (operands).
             *
             */
            base.parse_element (/<cim:CalculationKind.mul>([\s\S]*?)<\/cim:CalculationKind.mul>/g, obj, "mul", base.to_string, sub, context);

            /**
             * Division operation the input values (operands).
             *
             */
            base.parse_element (/<cim:CalculationKind.div>([\s\S]*?)<\/cim:CalculationKind.div>/g, obj, "div", base.to_string, sub, context);

            /**
             * Square root operator - only one input value (operands).
             *
             */
            base.parse_element (/<cim:CalculationKind.sqrt>([\s\S]*?)<\/cim:CalculationKind.sqrt>/g, obj, "sqrt", base.to_string, sub, context);

            bucket = context.parsed.CalculationKind;
            if (null == bucket)
                context.parsed.CalculationKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Check if equipment is in service, True if in service otherwise false.
             *
             */
            base.parse_element (/<cim:PinEquipmentKind.inService>([\s\S]*?)<\/cim:PinEquipmentKind.inService>/g, obj, "inService", base.to_string, sub, context);

            /**
             * Compare load flow result against rated current on the equipment (switch).
             *
             */
            base.parse_element (/<cim:PinEquipmentKind.ratedCurrent>([\s\S]*?)<\/cim:PinEquipmentKind.ratedCurrent>/g, obj, "ratedCurrent", base.to_string, sub, context);

            /**
             * Compare load flow result against the active voltage limit for the equipment.
             *
             */
            base.parse_element (/<cim:PinEquipmentKind.voltageLimit>([\s\S]*?)<\/cim:PinEquipmentKind.voltageLimit>/g, obj, "voltageLimit", base.to_string, sub, context);

            /**
             * Compare load flow result against the active current limit for the equipment.
             *
             */
            base.parse_element (/<cim:PinEquipmentKind.currentLimit>([\s\S]*?)<\/cim:PinEquipmentKind.currentLimit>/g, obj, "currentLimit", base.to_string, sub, context);

            /**
             * Compare load flow result against the active limit for active power for the given equipment.
             *
             */
            base.parse_element (/<cim:PinEquipmentKind.activePowerLimit>([\s\S]*?)<\/cim:PinEquipmentKind.activePowerLimit>/g, obj, "activePowerLimit", base.to_string, sub, context);

            /**
             * Compare load flow result against the active limit for apparent power for the given equipment.
             *
             */
            base.parse_element (/<cim:PinEquipmentKind.apparentPowerLimit>([\s\S]*?)<\/cim:PinEquipmentKind.apparentPowerLimit>/g, obj, "apparentPowerLimit", base.to_string, sub, context);

            /**
             * Check if all terminal on the equipment is connected.
             *
             */
            base.parse_element (/<cim:PinEquipmentKind.connected>([\s\S]*?)<\/cim:PinEquipmentKind.connected>/g, obj, "connected", base.to_string, sub, context);

            bucket = context.parsed.PinEquipmentKind;
            if (null == bucket)
                context.parsed.PinEquipmentKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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

        return (
            {
                parse_RemedialActionScheme: parse_RemedialActionScheme,
                parse_ProtectiveActionAdjustmentKind: parse_ProtectiveActionAdjustmentKind,
                parse_ProtectiveActionRegulation: parse_ProtectiveActionRegulation,
                parse_ProtectiveActionAdjustment: parse_ProtectiveActionAdjustment,
                parse_GateLogicKind: parse_GateLogicKind,
                parse_AnalogToDigitalLogicKind: parse_AnalogToDigitalLogicKind,
                parse_CalculationKind: parse_CalculationKind,
                parse_PinEquipment: parse_PinEquipment,
                parse_PinTerminal: parse_PinTerminal,
                parse_StageTrigger: parse_StageTrigger,
                parse_ProtectiveActionEquipment: parse_ProtectiveActionEquipment,
                parse_RemedialActionSchemeKind: parse_RemedialActionSchemeKind,
                parse_TriggerCondition: parse_TriggerCondition,
                parse_MeasurementCalculator: parse_MeasurementCalculator,
                parse_MeasurementCalculatorInput: parse_MeasurementCalculatorInput,
                parse_PinMeasurement: parse_PinMeasurement,
                parse_PinTerminalKind: parse_PinTerminalKind,
                parse_Stage: parse_Stage,
                parse_ProtectiveActionCollection: parse_ProtectiveActionCollection,
                parse_GateInputPin: parse_GateInputPin,
                parse_PinBranchGroup: parse_PinBranchGroup,
                parse_PinGate: parse_PinGate,
                parse_Gate: parse_Gate,
                parse_ProtectiveAction: parse_ProtectiveAction,
                parse_PinBranchGroupKind: parse_PinBranchGroupKind,
                parse_PinEquipmentKind: parse_PinEquipmentKind
            }
        );
    }
);