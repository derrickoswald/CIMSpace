define
(
    ["model/base", "model/Wires"],
    function (base, Wires)
    {

        /**
         * SVC asset allows the capacitive and inductive ratings for each phase to be specified individually if required.
         *
         */
        function parse_SVC (context, sub)
        {
            var obj;
            var bucket;

            obj = Wires.parse_ShuntCompensator (context, sub);
            obj.cls = "SVC";
            /**
             * Maximum capacitive reactive power.
             *
             */
            base.parse_element (/<cim:SVC.capacitiveRating>([\s\S]*?)<\/cim:SVC.capacitiveRating>/g, obj, "capacitiveRating", base.to_string, sub, context);

            /**
             * Maximum inductive reactive power.
             *
             */
            base.parse_element (/<cim:SVC.inductiveRating>([\s\S]*?)<\/cim:SVC.inductiveRating>/g, obj, "inductiveRating", base.to_string, sub, context);

            bucket = context.parsed.SVC;
            if (null == bucket)
                context.parsed.SVC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Distribution capacitor bank control settings.
         *
         */
        function parse_ShuntCompensatorControl (context, sub)
        {
            var obj;
            var bucket;

            obj = Wires.parse_RegulatingControl (context, sub);
            obj.cls = "ShuntCompensatorControl";
            /**
             * For VAR, amp, or power factor locally controlled shunt impedances, the flow direction: in, out.
             *
             */
            base.parse_element (/<cim:ShuntCompensatorControl.branchDirect>([\s\S]*?)<\/cim:ShuntCompensatorControl.branchDirect>/g, obj, "branchDirect", base.to_string, sub, context);

            /**
             * The size of the individual units that make up the bank.
             *
             */
            base.parse_element (/<cim:ShuntCompensatorControl.cellSize>([\s\S]*?)<\/cim:ShuntCompensatorControl.cellSize>/g, obj, "cellSize", base.to_string, sub, context);

            /**
             * Kind of control (if any).
             *
             */
            base.parse_element (/<cim:ShuntCompensatorControl.controlKind>([\s\S]*?)<\/cim:ShuntCompensatorControl.controlKind>/g, obj, "controlKind", base.to_string, sub, context);

            /**
             * For locally controlled shunt impedances which have a voltage override feature, the high voltage override value.
             *
             * If the voltage is above this value, the shunt impedance will be turned off regardless of the other local controller settings.
             *
             */
            base.parse_element (/<cim:ShuntCompensatorControl.highVoltageOverride>([\s\S]*?)<\/cim:ShuntCompensatorControl.highVoltageOverride>/g, obj, "highVoltageOverride", base.to_string, sub, context);

            /**
             * Kind of local controller.
             *
             */
            base.parse_element (/<cim:ShuntCompensatorControl.localControlKind>([\s\S]*?)<\/cim:ShuntCompensatorControl.localControlKind>/g, obj, "localControlKind", base.to_string, sub, context);

            /**
             * Upper control setting.
             *
             */
            base.parse_element (/<cim:ShuntCompensatorControl.localOffLevel>([\s\S]*?)<\/cim:ShuntCompensatorControl.localOffLevel>/g, obj, "localOffLevel", base.to_string, sub, context);

            /**
             * Lower control setting.
             *
             */
            base.parse_element (/<cim:ShuntCompensatorControl.localOnLevel>([\s\S]*?)<\/cim:ShuntCompensatorControl.localOnLevel>/g, obj, "localOnLevel", base.to_string, sub, context);

            /**
             * True if the locally controlled capacitor has voltage override capability.
             *
             */
            base.parse_element (/<cim:ShuntCompensatorControl.localOverride>([\s\S]*?)<\/cim:ShuntCompensatorControl.localOverride>/g, obj, "localOverride", base.to_boolean, sub, context);

            /**
             * For locally controlled shunt impedances which have a voltage override feature, the low voltage override value.
             *
             * If the voltage is below this value, the shunt impedance will be turned on regardless of the other local controller settings.
             *
             */
            base.parse_element (/<cim:ShuntCompensatorControl.lowVoltageOverride>([\s\S]*?)<\/cim:ShuntCompensatorControl.lowVoltageOverride>/g, obj, "lowVoltageOverride", base.to_string, sub, context);

            /**
             * IdmsShuntImpedanceData.maxNumSwitchOps.
             *
             */
            base.parse_element (/<cim:ShuntCompensatorControl.maxSwitchOperationCount>([\s\S]*?)<\/cim:ShuntCompensatorControl.maxSwitchOperationCount>/g, obj, "maxSwitchOperationCount", base.to_string, sub, context);

            /**
             * True if open is normal status for a fixed capacitor bank, otherwise normal status is closed.
             *
             */
            base.parse_element (/<cim:ShuntCompensatorControl.normalOpen>([\s\S]*?)<\/cim:ShuntCompensatorControl.normalOpen>/g, obj, "normalOpen", base.to_boolean, sub, context);

            /**
             * For VAR, amp, or power factor locally controlled shunt impedances, the index of the regulation branch.
             *
             */
            base.parse_element (/<cim:ShuntCompensatorControl.regBranch>([\s\S]*?)<\/cim:ShuntCompensatorControl.regBranch>/g, obj, "regBranch", base.to_string, sub, context);

            /**
             * For VAR, amp, or power factor locally controlled shunt impedances, the end of the branch that is regulated.
             *
             * The field has the following values: from side, to side, and tertiary (only if the branch is a transformer).
             *
             */
            base.parse_element (/<cim:ShuntCompensatorControl.regBranchEnd>([\s\S]*?)<\/cim:ShuntCompensatorControl.regBranchEnd>/g, obj, "regBranchEnd", base.to_string, sub, context);

            /**
             * (For VAR, amp, or power factor locally controlled shunt impedances) Kind of regulation branch.
             *
             */
            base.parse_element (/<cim:ShuntCompensatorControl.regBranchKind>([\s\S]*?)<\/cim:ShuntCompensatorControl.regBranchKind>/g, obj, "regBranchKind", base.to_string, sub, context);

            /**
             * Phases that are measured for controlling the device.
             *
             */
            base.parse_element (/<cim:ShuntCompensatorControl.sensingPhaseCode>([\s\S]*?)<\/cim:ShuntCompensatorControl.sensingPhaseCode>/g, obj, "sensingPhaseCode", base.to_string, sub, context);

            /**
             * Time interval between consecutive switching operations.
             *
             */
            base.parse_element (/<cim:ShuntCompensatorControl.switchOperationCycle>([\s\S]*?)<\/cim:ShuntCompensatorControl.switchOperationCycle>/g, obj, "switchOperationCycle", base.to_string, sub, context);

            /**
             * True if regulated voltages are measured line to line, otherwise they are measured line to ground.
             *
             */
            base.parse_element (/<cim:ShuntCompensatorControl.vRegLineLine>([\s\S]*?)<\/cim:ShuntCompensatorControl.vRegLineLine>/g, obj, "vRegLineLine", base.to_boolean, sub, context);

            base.parse_attribute (/<cim:ShuntCompensatorControl.ShuntCompensatorInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ShuntCompensatorInfo", sub, context, true);

            bucket = context.parsed.ShuntCompensatorControl;
            if (null == bucket)
                context.parsed.ShuntCompensatorControl = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_ShuntCompensatorControl: parse_ShuntCompensatorControl,
                parse_SVC: parse_SVC
            }
        );
    }
);