define
(
    ["model/base"],
    /**
     * State variables for analysis solutions such as powerflow.
     *
     */
    function (base)
    {

        /**
         * An abstract class for state variables.
         *
         */
        class StateVariable extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.StateVariable;
                if (null == bucket)
                   cim_data.StateVariable = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.StateVariable[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "StateVariable";

                var bucket = context.parsed.StateVariable;
                if (null == bucket)
                   context.parsed.StateVariable = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The SvInjection is reporting the calculated bus injection minus the sum of the terminal flows.
         *
         * The terminal flow is positive out from the bus (load sign convention) and bus injection has positive flow into the bus. SvInjection may have the remainder after state estimation or slack after power flow calculation.
         *
         */
        class SvInjection extends StateVariable
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SvInjection;
                if (null == bucket)
                   cim_data.SvInjection = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SvInjection[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = StateVariable.prototype.parse.call (this, context, sub);
                obj.cls = "SvInjection";
                base.parse_element (/<cim:SvInjection.pInjection>([\s\S]*?)<\/cim:SvInjection.pInjection>/g, obj, "pInjection", base.to_string, sub, context);
                base.parse_element (/<cim:SvInjection.qInjection>([\s\S]*?)<\/cim:SvInjection.qInjection>/g, obj, "qInjection", base.to_string, sub, context);
                base.parse_attribute (/<cim:SvInjection.TopologicalNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TopologicalNode", sub, context);

                var bucket = context.parsed.SvInjection;
                if (null == bucket)
                   context.parsed.SvInjection = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = StateVariable.prototype.export.call (this, obj, false);

                base.export_element (obj, "SvInjection", "pInjection", base.from_string, fields);
                base.export_element (obj, "SvInjection", "qInjection", base.from_string, fields);
                base.export_attribute (obj, "SvInjection", "TopologicalNode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * State variable for status.
         *
         */
        class SvStatus extends StateVariable
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SvStatus;
                if (null == bucket)
                   cim_data.SvStatus = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SvStatus[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = StateVariable.prototype.parse.call (this, context, sub);
                obj.cls = "SvStatus";
                base.parse_element (/<cim:SvStatus.inService>([\s\S]*?)<\/cim:SvStatus.inService>/g, obj, "inService", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:SvStatus.ConductingEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConductingEquipment", sub, context);

                var bucket = context.parsed.SvStatus;
                if (null == bucket)
                   context.parsed.SvStatus = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = StateVariable.prototype.export.call (this, obj, false);

                base.export_element (obj, "SvStatus", "inService", base.from_boolean, fields);
                base.export_attribute (obj, "SvStatus", "ConductingEquipment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * State variable for transformer tap step.
         *
         * This class is to be used for taps of LTC (load tap changing) transformers, not fixed tap transformers.
         *
         */
        class SvTapStep extends StateVariable
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SvTapStep;
                if (null == bucket)
                   cim_data.SvTapStep = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SvTapStep[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = StateVariable.prototype.parse.call (this, context, sub);
                obj.cls = "SvTapStep";
                base.parse_element (/<cim:SvTapStep.position>([\s\S]*?)<\/cim:SvTapStep.position>/g, obj, "position", base.to_float, sub, context);
                base.parse_attribute (/<cim:SvTapStep.TapChanger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TapChanger", sub, context);

                var bucket = context.parsed.SvTapStep;
                if (null == bucket)
                   context.parsed.SvTapStep = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = StateVariable.prototype.export.call (this, obj, false);

                base.export_element (obj, "SvTapStep", "position", base.from_float, fields);
                base.export_attribute (obj, "SvTapStep", "TapChanger", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * State variable for the number of sections in service for a shunt compensator.
         *
         */
        class SvShuntCompensatorSections extends StateVariable
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SvShuntCompensatorSections;
                if (null == bucket)
                   cim_data.SvShuntCompensatorSections = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SvShuntCompensatorSections[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = StateVariable.prototype.parse.call (this, context, sub);
                obj.cls = "SvShuntCompensatorSections";
                base.parse_element (/<cim:SvShuntCompensatorSections.sections>([\s\S]*?)<\/cim:SvShuntCompensatorSections.sections>/g, obj, "sections", base.to_float, sub, context);
                base.parse_attribute (/<cim:SvShuntCompensatorSections.ShuntCompensator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ShuntCompensator", sub, context);

                var bucket = context.parsed.SvShuntCompensatorSections;
                if (null == bucket)
                   context.parsed.SvShuntCompensatorSections = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = StateVariable.prototype.export.call (this, obj, false);

                base.export_element (obj, "SvShuntCompensatorSections", "sections", base.from_float, fields);
                base.export_attribute (obj, "SvShuntCompensatorSections", "ShuntCompensator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * State variable for power flow.
         *
         * Load convention is used for flow direction. This means flow out from the TopologicalNode into the equipment is positive.
         *
         */
        class SvPowerFlow extends StateVariable
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SvPowerFlow;
                if (null == bucket)
                   cim_data.SvPowerFlow = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SvPowerFlow[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = StateVariable.prototype.parse.call (this, context, sub);
                obj.cls = "SvPowerFlow";
                base.parse_element (/<cim:SvPowerFlow.p>([\s\S]*?)<\/cim:SvPowerFlow.p>/g, obj, "p", base.to_string, sub, context);
                base.parse_element (/<cim:SvPowerFlow.q>([\s\S]*?)<\/cim:SvPowerFlow.q>/g, obj, "q", base.to_string, sub, context);
                base.parse_attribute (/<cim:SvPowerFlow.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context);

                var bucket = context.parsed.SvPowerFlow;
                if (null == bucket)
                   context.parsed.SvPowerFlow = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = StateVariable.prototype.export.call (this, obj, false);

                base.export_element (obj, "SvPowerFlow", "p", base.from_string, fields);
                base.export_element (obj, "SvPowerFlow", "q", base.from_string, fields);
                base.export_attribute (obj, "SvPowerFlow", "Terminal", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * State variable for voltage.
         *
         */
        class SvVoltage extends StateVariable
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SvVoltage;
                if (null == bucket)
                   cim_data.SvVoltage = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SvVoltage[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = StateVariable.prototype.parse.call (this, context, sub);
                obj.cls = "SvVoltage";
                base.parse_element (/<cim:SvVoltage.angle>([\s\S]*?)<\/cim:SvVoltage.angle>/g, obj, "angle", base.to_string, sub, context);
                base.parse_element (/<cim:SvVoltage.v>([\s\S]*?)<\/cim:SvVoltage.v>/g, obj, "v", base.to_string, sub, context);
                base.parse_attribute (/<cim:SvVoltage.TopologicalNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TopologicalNode", sub, context);

                var bucket = context.parsed.SvVoltage;
                if (null == bucket)
                   context.parsed.SvVoltage = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = StateVariable.prototype.export.call (this, obj, false);

                base.export_element (obj, "SvVoltage", "angle", base.from_string, fields);
                base.export_element (obj, "SvVoltage", "v", base.from_string, fields);
                base.export_attribute (obj, "SvVoltage", "TopologicalNode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                StateVariable: StateVariable,
                SvInjection: SvInjection,
                SvTapStep: SvTapStep,
                SvPowerFlow: SvPowerFlow,
                SvShuntCompensatorSections: SvShuntCompensatorSections,
                SvStatus: SvStatus,
                SvVoltage: SvVoltage
            }
        );
    }
);