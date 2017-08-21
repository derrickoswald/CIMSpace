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
         * The class represents IEEE PF Controller Type 1 which operates by moving the voltage reference directly.
         *
         * Reference: IEEE Standard 421.5-2005 Section 11.2.
         *
         */
        function parse_PFVArType1IEEEPFController (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PFVArControllerType1Dynamics (context, sub);
            obj.cls = "PFVArType1IEEEPFController";
            /**
             * Overexcitation Flag (<i>OVEX</i>)
             * true = overexcited
             *
             * false = underexcited.
             *
             */
            obj["ovex"] = base.to_boolean (base.parse_element (/<cim:PFVArType1IEEEPFController.ovex>([\s\S]*?)<\/cim:PFVArType1IEEEPFController.ovex>/g, sub, context, true));
            /**
             * PF controller time delay (<i>T</i><i><sub>PFC</sub></i>).
             *
             * Typical Value = 5.
             *
             */
            obj["tpfc"] = base.parse_element (/<cim:PFVArType1IEEEPFController.tpfc>([\s\S]*?)<\/cim:PFVArType1IEEEPFController.tpfc>/g, sub, context, true);
            /**
             * Minimum machine terminal current needed to enable pf/var controller (<i>V</i><i><sub>ITMIN</sub></i>).
             *
             */
            obj["vitmin"] = base.parse_element (/<cim:PFVArType1IEEEPFController.vitmin>([\s\S]*?)<\/cim:PFVArType1IEEEPFController.vitmin>/g, sub, context, true);
            /**
             * Synchronous machine power factor (<i>V</i><i><sub>PF</sub></i>).
             *
             */
            obj["vpf"] = base.parse_element (/<cim:PFVArType1IEEEPFController.vpf>([\s\S]*?)<\/cim:PFVArType1IEEEPFController.vpf>/g, sub, context, true);
            /**
             * PF controller dead band (<i>V</i><i><sub>PFC_BW</sub></i>).
             *
             * Typical Value = 0.05.
             *
             */
            obj["vpfcbw"] = base.to_float (base.parse_element (/<cim:PFVArType1IEEEPFController.vpfcbw>([\s\S]*?)<\/cim:PFVArType1IEEEPFController.vpfcbw>/g, sub, context, true));
            /**
             * PF controller reference (<i>V</i><i><sub>PFREF</sub></i>).
             *
             */
            obj["vpfref"] = base.parse_element (/<cim:PFVArType1IEEEPFController.vpfref>([\s\S]*?)<\/cim:PFVArType1IEEEPFController.vpfref>/g, sub, context, true);
            /**
             * Maximum machine terminal voltage needed for pf/var controller to be enabled (<i>V</i><i><sub>VTMAX</sub></i>).
             *
             */
            obj["vvtmax"] = base.parse_element (/<cim:PFVArType1IEEEPFController.vvtmax>([\s\S]*?)<\/cim:PFVArType1IEEEPFController.vvtmax>/g, sub, context, true);
            /**
             * Minimum machine terminal voltage needed to enable pf/var controller (<i>V</i><i><sub>VTMIN</sub></i>).
             *
             */
            obj["vvtmin"] = base.parse_element (/<cim:PFVArType1IEEEPFController.vvtmin>([\s\S]*?)<\/cim:PFVArType1IEEEPFController.vvtmin>/g, sub, context, true);
            bucket = context.parsed.PFVArType1IEEEPFController;
            if (null == bucket)
                context.parsed.PFVArType1IEEEPFController = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Power Factor or VAr controller Type I function block whose behaviour is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         *
         */
        function parse_PFVArControllerType1Dynamics (context, sub)
        {
            var obj;
            var bucket;

            obj = StandardModels.parse_DynamicsFunctionBlock (context, sub);
            obj.cls = "PFVArControllerType1Dynamics";
            /**
             * Voltage adjuster model associated with this Power Factor or VA controller Type I model.
             *
             */
            obj["VoltageAdjusterDynamics"] = base.parse_attribute (/<cim:PFVArControllerType1Dynamics.VoltageAdjusterDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Excitation system model with which this Power Factor or VAr controller Type I model is associated.
             *
             */
            obj["ExcitationSystemDynamics"] = base.parse_attribute (/<cim:PFVArControllerType1Dynamics.ExcitationSystemDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Remote input signal used by this Power Factor or VAr controller Type I model.
             *
             */
            obj["RemoteInputSignal"] = base.parse_attribute (/<cim:PFVArControllerType1Dynamics.RemoteInputSignal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.PFVArControllerType1Dynamics;
            if (null == bucket)
                context.parsed.PFVArControllerType1Dynamics = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class represents IEEE VAR Controller Type 1 which operates by moving the voltage reference directly.
         *
         * Reference: IEEE Standard 421.5-2005 Section 11.3.
         *
         */
        function parse_PFVArType1IEEEVArController (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PFVArControllerType1Dynamics (context, sub);
            obj.cls = "PFVArType1IEEEVArController";
            /**
             * Var controller time delay (<i>T</i><i><sub>VARC</sub></i>).
             *
             * Typical Value = 5.
             *
             */
            obj["tvarc"] = base.parse_element (/<cim:PFVArType1IEEEVArController.tvarc>([\s\S]*?)<\/cim:PFVArType1IEEEVArController.tvarc>/g, sub, context, true);
            /**
             * Synchronous machine power factor (<i>V</i><i><sub>VAR</sub></i>).
             *
             */
            obj["vvar"] = base.parse_element (/<cim:PFVArType1IEEEVArController.vvar>([\s\S]*?)<\/cim:PFVArType1IEEEVArController.vvar>/g, sub, context, true);
            /**
             * Var controller dead band (<i>V</i><i><sub>VARC_BW</sub></i>).
             *
             * Typical Value = 0.02.
             *
             */
            obj["vvarcbw"] = base.to_float (base.parse_element (/<cim:PFVArType1IEEEVArController.vvarcbw>([\s\S]*?)<\/cim:PFVArType1IEEEVArController.vvarcbw>/g, sub, context, true));
            /**
             * Var controller reference (<i>V</i><i><sub>VARREF</sub></i>).
             *
             */
            obj["vvarref"] = base.parse_element (/<cim:PFVArType1IEEEVArController.vvarref>([\s\S]*?)<\/cim:PFVArType1IEEEVArController.vvarref>/g, sub, context, true);
            /**
             * Maximum machine terminal voltage needed for pf/var controller to be enabled (<i>V</i><i><sub>VTMAX</sub></i>).
             *
             */
            obj["vvtmax"] = base.parse_element (/<cim:PFVArType1IEEEVArController.vvtmax>([\s\S]*?)<\/cim:PFVArType1IEEEVArController.vvtmax>/g, sub, context, true);
            /**
             * Minimum machine terminal voltage needed to enable pf/var controller (<i>V</i><i><sub>VTMIN</sub></i>).
             *
             */
            obj["vvtmin"] = base.parse_element (/<cim:PFVArType1IEEEVArController.vvtmin>([\s\S]*?)<\/cim:PFVArType1IEEEVArController.vvtmin>/g, sub, context, true);
            bucket = context.parsed.PFVArType1IEEEVArController;
            if (null == bucket)
                context.parsed.PFVArType1IEEEVArController = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_PFVArType1IEEEPFController: parse_PFVArType1IEEEPFController,
                parse_PFVArControllerType1Dynamics: parse_PFVArControllerType1Dynamics,
                parse_PFVArType1IEEEVArController: parse_PFVArType1IEEEVArController
            }
        );
    }
);