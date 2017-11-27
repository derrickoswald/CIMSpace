define
(
    ["model/base", "model/Wires"],
    function (base, Wires)
    {

        /**
         * SVC asset allows the capacitive and inductive ratings for each phase to be specified individually if required.
         *
         */
        class SVC extends Wires.ShuntCompensator
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SVC;
                if (null == bucket)
                   cim_data.SVC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SVC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Wires.ShuntCompensator.prototype.parse.call (this, context, sub);
                obj.cls = "SVC";
                base.parse_element (/<cim:SVC.capacitiveRating>([\s\S]*?)<\/cim:SVC.capacitiveRating>/g, obj, "capacitiveRating", base.to_string, sub, context);
                base.parse_element (/<cim:SVC.inductiveRating>([\s\S]*?)<\/cim:SVC.inductiveRating>/g, obj, "inductiveRating", base.to_string, sub, context);

                var bucket = context.parsed.SVC;
                if (null == bucket)
                   context.parsed.SVC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Wires.ShuntCompensator.prototype.export.call (this, obj, false);

                base.export_element (obj, "SVC", "capacitiveRating", base.from_string, fields);
                base.export_element (obj, "SVC", "inductiveRating", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Distribution capacitor bank control settings.
         *
         */
        class ShuntCompensatorControl extends Wires.RegulatingControl
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ShuntCompensatorControl;
                if (null == bucket)
                   cim_data.ShuntCompensatorControl = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ShuntCompensatorControl[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Wires.RegulatingControl.prototype.parse.call (this, context, sub);
                obj.cls = "ShuntCompensatorControl";
                base.parse_element (/<cim:ShuntCompensatorControl.branchDirect>([\s\S]*?)<\/cim:ShuntCompensatorControl.branchDirect>/g, obj, "branchDirect", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.cellSize>([\s\S]*?)<\/cim:ShuntCompensatorControl.cellSize>/g, obj, "cellSize", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.controlKind>([\s\S]*?)<\/cim:ShuntCompensatorControl.controlKind>/g, obj, "controlKind", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.highVoltageOverride>([\s\S]*?)<\/cim:ShuntCompensatorControl.highVoltageOverride>/g, obj, "highVoltageOverride", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.localControlKind>([\s\S]*?)<\/cim:ShuntCompensatorControl.localControlKind>/g, obj, "localControlKind", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.localOffLevel>([\s\S]*?)<\/cim:ShuntCompensatorControl.localOffLevel>/g, obj, "localOffLevel", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.localOnLevel>([\s\S]*?)<\/cim:ShuntCompensatorControl.localOnLevel>/g, obj, "localOnLevel", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.localOverride>([\s\S]*?)<\/cim:ShuntCompensatorControl.localOverride>/g, obj, "localOverride", base.to_boolean, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.lowVoltageOverride>([\s\S]*?)<\/cim:ShuntCompensatorControl.lowVoltageOverride>/g, obj, "lowVoltageOverride", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.maxSwitchOperationCount>([\s\S]*?)<\/cim:ShuntCompensatorControl.maxSwitchOperationCount>/g, obj, "maxSwitchOperationCount", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.normalOpen>([\s\S]*?)<\/cim:ShuntCompensatorControl.normalOpen>/g, obj, "normalOpen", base.to_boolean, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.regBranch>([\s\S]*?)<\/cim:ShuntCompensatorControl.regBranch>/g, obj, "regBranch", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.regBranchEnd>([\s\S]*?)<\/cim:ShuntCompensatorControl.regBranchEnd>/g, obj, "regBranchEnd", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.regBranchKind>([\s\S]*?)<\/cim:ShuntCompensatorControl.regBranchKind>/g, obj, "regBranchKind", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.sensingPhaseCode>([\s\S]*?)<\/cim:ShuntCompensatorControl.sensingPhaseCode>/g, obj, "sensingPhaseCode", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.switchOperationCycle>([\s\S]*?)<\/cim:ShuntCompensatorControl.switchOperationCycle>/g, obj, "switchOperationCycle", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.vRegLineLine>([\s\S]*?)<\/cim:ShuntCompensatorControl.vRegLineLine>/g, obj, "vRegLineLine", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:ShuntCompensatorControl.ShuntCompensatorInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ShuntCompensatorInfo", sub, context);

                var bucket = context.parsed.ShuntCompensatorControl;
                if (null == bucket)
                   context.parsed.ShuntCompensatorControl = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Wires.RegulatingControl.prototype.export.call (this, obj, false);

                base.export_element (obj, "ShuntCompensatorControl", "branchDirect", base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "cellSize", base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "controlKind", base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "highVoltageOverride", base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "localControlKind", base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "localOffLevel", base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "localOnLevel", base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "localOverride", base.from_boolean, fields);
                base.export_element (obj, "ShuntCompensatorControl", "lowVoltageOverride", base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "maxSwitchOperationCount", base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "normalOpen", base.from_boolean, fields);
                base.export_element (obj, "ShuntCompensatorControl", "regBranch", base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "regBranchEnd", base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "regBranchKind", base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "sensingPhaseCode", base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "switchOperationCycle", base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "vRegLineLine", base.from_boolean, fields);
                base.export_attribute (obj, "ShuntCompensatorControl", "ShuntCompensatorInfo", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                SVC: SVC,
                ShuntCompensatorControl: ShuntCompensatorControl
            }
        );
    }
);