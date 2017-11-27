define
(
    ["model/base", "model/StandardModels"],
    /**
     * <font color="#0f0f0f">Excitation systems for synchronous machines are sometimes supplied with an optional means of automatically adjusting generator output reactive power (VAr) or power factor (PF) to a user-specified value This can be accomplished with either a reactive power or power factor controller or regulator.
     *
     * A reactive power or power factor controller is defined as a PF/VAr controller in IEEE Std 421.1 as �A control function that acts through the reference adjuster to modify the voltage regulator set point to maintain the synchronous machine steady-state power factor or reactive power at a predetermined value.� </font>
     *
     */
    function (base, StandardModels)
    {

        /**
         * Power Factor or VAr controller Type I function block whose behaviour is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         *
         */
        class PFVArControllerType1Dynamics extends StandardModels.DynamicsFunctionBlock
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PFVArControllerType1Dynamics;
                if (null == bucket)
                   cim_data.PFVArControllerType1Dynamics = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PFVArControllerType1Dynamics[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = StandardModels.DynamicsFunctionBlock.prototype.parse.call (this, context, sub);
                obj.cls = "PFVArControllerType1Dynamics";
                base.parse_attribute (/<cim:PFVArControllerType1Dynamics.VoltageAdjusterDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "VoltageAdjusterDynamics", sub, context);
                base.parse_attribute (/<cim:PFVArControllerType1Dynamics.ExcitationSystemDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExcitationSystemDynamics", sub, context);
                base.parse_attribute (/<cim:PFVArControllerType1Dynamics.RemoteInputSignal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemoteInputSignal", sub, context);

                var bucket = context.parsed.PFVArControllerType1Dynamics;
                if (null == bucket)
                   context.parsed.PFVArControllerType1Dynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = StandardModels.DynamicsFunctionBlock.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "PFVArControllerType1Dynamics", "VoltageAdjusterDynamics", fields);
                base.export_attribute (obj, "PFVArControllerType1Dynamics", "ExcitationSystemDynamics", fields);
                base.export_attribute (obj, "PFVArControllerType1Dynamics", "RemoteInputSignal", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The class represents IEEE VAR Controller Type 1 which operates by moving the voltage reference directly.
         *
         * Reference: IEEE Standard 421.5-2005 Section 11.3.
         *
         */
        class PFVArType1IEEEVArController extends PFVArControllerType1Dynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PFVArType1IEEEVArController;
                if (null == bucket)
                   cim_data.PFVArType1IEEEVArController = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PFVArType1IEEEVArController[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = PFVArControllerType1Dynamics.prototype.parse.call (this, context, sub);
                obj.cls = "PFVArType1IEEEVArController";
                base.parse_element (/<cim:PFVArType1IEEEVArController.tvarc>([\s\S]*?)<\/cim:PFVArType1IEEEVArController.tvarc>/g, obj, "tvarc", base.to_string, sub, context);
                base.parse_element (/<cim:PFVArType1IEEEVArController.vvar>([\s\S]*?)<\/cim:PFVArType1IEEEVArController.vvar>/g, obj, "vvar", base.to_string, sub, context);
                base.parse_element (/<cim:PFVArType1IEEEVArController.vvarcbw>([\s\S]*?)<\/cim:PFVArType1IEEEVArController.vvarcbw>/g, obj, "vvarcbw", base.to_float, sub, context);
                base.parse_element (/<cim:PFVArType1IEEEVArController.vvarref>([\s\S]*?)<\/cim:PFVArType1IEEEVArController.vvarref>/g, obj, "vvarref", base.to_string, sub, context);
                base.parse_element (/<cim:PFVArType1IEEEVArController.vvtmax>([\s\S]*?)<\/cim:PFVArType1IEEEVArController.vvtmax>/g, obj, "vvtmax", base.to_string, sub, context);
                base.parse_element (/<cim:PFVArType1IEEEVArController.vvtmin>([\s\S]*?)<\/cim:PFVArType1IEEEVArController.vvtmin>/g, obj, "vvtmin", base.to_string, sub, context);

                var bucket = context.parsed.PFVArType1IEEEVArController;
                if (null == bucket)
                   context.parsed.PFVArType1IEEEVArController = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = PFVArControllerType1Dynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "PFVArType1IEEEVArController", "tvarc", base.from_string, fields);
                base.export_element (obj, "PFVArType1IEEEVArController", "vvar", base.from_string, fields);
                base.export_element (obj, "PFVArType1IEEEVArController", "vvarcbw", base.from_float, fields);
                base.export_element (obj, "PFVArType1IEEEVArController", "vvarref", base.from_string, fields);
                base.export_element (obj, "PFVArType1IEEEVArController", "vvtmax", base.from_string, fields);
                base.export_element (obj, "PFVArType1IEEEVArController", "vvtmin", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The class represents IEEE PF Controller Type 1 which operates by moving the voltage reference directly.
         *
         * Reference: IEEE Standard 421.5-2005 Section 11.2.
         *
         */
        class PFVArType1IEEEPFController extends PFVArControllerType1Dynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PFVArType1IEEEPFController;
                if (null == bucket)
                   cim_data.PFVArType1IEEEPFController = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PFVArType1IEEEPFController[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = PFVArControllerType1Dynamics.prototype.parse.call (this, context, sub);
                obj.cls = "PFVArType1IEEEPFController";
                base.parse_element (/<cim:PFVArType1IEEEPFController.ovex>([\s\S]*?)<\/cim:PFVArType1IEEEPFController.ovex>/g, obj, "ovex", base.to_boolean, sub, context);
                base.parse_element (/<cim:PFVArType1IEEEPFController.tpfc>([\s\S]*?)<\/cim:PFVArType1IEEEPFController.tpfc>/g, obj, "tpfc", base.to_string, sub, context);
                base.parse_element (/<cim:PFVArType1IEEEPFController.vitmin>([\s\S]*?)<\/cim:PFVArType1IEEEPFController.vitmin>/g, obj, "vitmin", base.to_string, sub, context);
                base.parse_element (/<cim:PFVArType1IEEEPFController.vpf>([\s\S]*?)<\/cim:PFVArType1IEEEPFController.vpf>/g, obj, "vpf", base.to_string, sub, context);
                base.parse_element (/<cim:PFVArType1IEEEPFController.vpfcbw>([\s\S]*?)<\/cim:PFVArType1IEEEPFController.vpfcbw>/g, obj, "vpfcbw", base.to_float, sub, context);
                base.parse_element (/<cim:PFVArType1IEEEPFController.vpfref>([\s\S]*?)<\/cim:PFVArType1IEEEPFController.vpfref>/g, obj, "vpfref", base.to_string, sub, context);
                base.parse_element (/<cim:PFVArType1IEEEPFController.vvtmax>([\s\S]*?)<\/cim:PFVArType1IEEEPFController.vvtmax>/g, obj, "vvtmax", base.to_string, sub, context);
                base.parse_element (/<cim:PFVArType1IEEEPFController.vvtmin>([\s\S]*?)<\/cim:PFVArType1IEEEPFController.vvtmin>/g, obj, "vvtmin", base.to_string, sub, context);

                var bucket = context.parsed.PFVArType1IEEEPFController;
                if (null == bucket)
                   context.parsed.PFVArType1IEEEPFController = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = PFVArControllerType1Dynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "PFVArType1IEEEPFController", "ovex", base.from_boolean, fields);
                base.export_element (obj, "PFVArType1IEEEPFController", "tpfc", base.from_string, fields);
                base.export_element (obj, "PFVArType1IEEEPFController", "vitmin", base.from_string, fields);
                base.export_element (obj, "PFVArType1IEEEPFController", "vpf", base.from_string, fields);
                base.export_element (obj, "PFVArType1IEEEPFController", "vpfcbw", base.from_float, fields);
                base.export_element (obj, "PFVArType1IEEEPFController", "vpfref", base.from_string, fields);
                base.export_element (obj, "PFVArType1IEEEPFController", "vvtmax", base.from_string, fields);
                base.export_element (obj, "PFVArType1IEEEPFController", "vvtmin", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                PFVArType1IEEEVArController: PFVArType1IEEEVArController,
                PFVArType1IEEEPFController: PFVArType1IEEEPFController,
                PFVArControllerType1Dynamics: PFVArControllerType1Dynamics
            }
        );
    }
);