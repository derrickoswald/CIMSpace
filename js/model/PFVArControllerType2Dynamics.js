define
(
    ["model/base", "model/StandardModels"],
    /**
     * <font color="#0f0f0f">A var/pf regulator is defined as �A synchronous machine regulator that functions to maintain the power factor or reactive component of power at a predetermined value.�  </font>
     * <font color="#0f0f0f">
     * </font><font color="#0f0f0f">For additional information please refer to IEEE Standard 421.5-2005, Section 11.</font>
     * <font color="#0f0f0f">
     *
     * </font>
     *
     */
    function (base, StandardModels)
    {

        /**
         * The class represents IEEE PF Controller Type 2 which is a summing point type controller and makes up the outside loop of a two-loop system.
         *
         * This controller is implemented as a slow PI type controller. The voltage regulator forms the inner loop and is implemented as a fast controller.
         *
         */
        function parse_PFVArType2IEEEPFController (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PFVArControllerType2Dynamics (context, sub);
            obj.cls = "PFVArType2IEEEPFController";
            base.parse_element (/<cim:PFVArType2IEEEPFController.exlon>([\s\S]*?)<\/cim:PFVArType2IEEEPFController.exlon>/g, obj, "exlon", base.to_boolean, sub, context);
            base.parse_element (/<cim:PFVArType2IEEEPFController.ki>([\s\S]*?)<\/cim:PFVArType2IEEEPFController.ki>/g, obj, "ki", base.to_string, sub, context);
            base.parse_element (/<cim:PFVArType2IEEEPFController.kp>([\s\S]*?)<\/cim:PFVArType2IEEEPFController.kp>/g, obj, "kp", base.to_string, sub, context);
            base.parse_element (/<cim:PFVArType2IEEEPFController.pfref>([\s\S]*?)<\/cim:PFVArType2IEEEPFController.pfref>/g, obj, "pfref", base.to_string, sub, context);
            base.parse_element (/<cim:PFVArType2IEEEPFController.vclmt>([\s\S]*?)<\/cim:PFVArType2IEEEPFController.vclmt>/g, obj, "vclmt", base.to_string, sub, context);
            base.parse_element (/<cim:PFVArType2IEEEPFController.vref>([\s\S]*?)<\/cim:PFVArType2IEEEPFController.vref>/g, obj, "vref", base.to_string, sub, context);
            base.parse_element (/<cim:PFVArType2IEEEPFController.vs>([\s\S]*?)<\/cim:PFVArType2IEEEPFController.vs>/g, obj, "vs", base.to_float, sub, context);
            bucket = context.parsed.PFVArType2IEEEPFController;
            if (null == bucket)
                context.parsed.PFVArType2IEEEPFController = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PFVArType2IEEEPFController (obj, exporters, full)
        {
            var fields = exporters["PFVArControllerType2Dynamics"](obj, exporters, false);

            base.export_element (obj, "PFVArType2IEEEPFController", "exlon", base.from_boolean, fields);
            base.export_element (obj, "PFVArType2IEEEPFController", "ki", base.from_string, fields);
            base.export_element (obj, "PFVArType2IEEEPFController", "kp", base.from_string, fields);
            base.export_element (obj, "PFVArType2IEEEPFController", "pfref", base.from_string, fields);
            base.export_element (obj, "PFVArType2IEEEPFController", "vclmt", base.from_string, fields);
            base.export_element (obj, "PFVArType2IEEEPFController", "vref", base.from_string, fields);
            base.export_element (obj, "PFVArType2IEEEPFController", "vs", base.from_float, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Power Factor or VAr controller Type II function block whose behaviour is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         *
         */
        function parse_PFVArControllerType2Dynamics (context, sub)
        {
            var obj;
            var bucket;

            obj = StandardModels.parse_DynamicsFunctionBlock (context, sub);
            obj.cls = "PFVArControllerType2Dynamics";
            base.parse_attribute (/<cim:PFVArControllerType2Dynamics.ExcitationSystemDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExcitationSystemDynamics", sub, context);
            bucket = context.parsed.PFVArControllerType2Dynamics;
            if (null == bucket)
                context.parsed.PFVArControllerType2Dynamics = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PFVArControllerType2Dynamics (obj, exporters, full)
        {
            var fields = exporters["DynamicsFunctionBlock"](obj, exporters, false);

            base.export_attribute (obj, "PFVArControllerType2Dynamics", "ExcitationSystemDynamics", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Power factor / Reactive power regulator.
         *
         * This model represents the power factor or reactive power controller such as the Basler SCP-250. The controller measures power factor or reactive power (PU on generator rated power) and compares it with the operator's set point.
         *
         */
        function parse_PFVArType2Common1 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PFVArControllerType2Dynamics (context, sub);
            obj.cls = "PFVArType2Common1";
            base.parse_element (/<cim:PFVArType2Common1.j>([\s\S]*?)<\/cim:PFVArType2Common1.j>/g, obj, "j", base.to_boolean, sub, context);
            base.parse_element (/<cim:PFVArType2Common1.ki>([\s\S]*?)<\/cim:PFVArType2Common1.ki>/g, obj, "ki", base.to_string, sub, context);
            base.parse_element (/<cim:PFVArType2Common1.kp>([\s\S]*?)<\/cim:PFVArType2Common1.kp>/g, obj, "kp", base.to_string, sub, context);
            base.parse_element (/<cim:PFVArType2Common1.max>([\s\S]*?)<\/cim:PFVArType2Common1.max>/g, obj, "max", base.to_string, sub, context);
            base.parse_element (/<cim:PFVArType2Common1.ref>([\s\S]*?)<\/cim:PFVArType2Common1.ref>/g, obj, "ref", base.to_string, sub, context);
            bucket = context.parsed.PFVArType2Common1;
            if (null == bucket)
                context.parsed.PFVArType2Common1 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PFVArType2Common1 (obj, exporters, full)
        {
            var fields = exporters["PFVArControllerType2Dynamics"](obj, exporters, false);

            base.export_element (obj, "PFVArType2Common1", "j", base.from_boolean, fields);
            base.export_element (obj, "PFVArType2Common1", "ki", base.from_string, fields);
            base.export_element (obj, "PFVArType2Common1", "kp", base.from_string, fields);
            base.export_element (obj, "PFVArType2Common1", "max", base.from_string, fields);
            base.export_element (obj, "PFVArType2Common1", "ref", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The class represents IEEE VAR Controller Type 2 which is a summing point type controller.
         *
         * It makes up the outside loop of a two-loop system. This controller is implemented as a slow PI type controller, and the voltage regulator forms the inner loop and is implemented as a fast controller.
         *
         */
        function parse_PFVArType2IEEEVArController (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PFVArControllerType2Dynamics (context, sub);
            obj.cls = "PFVArType2IEEEVArController";
            base.parse_element (/<cim:PFVArType2IEEEVArController.exlon>([\s\S]*?)<\/cim:PFVArType2IEEEVArController.exlon>/g, obj, "exlon", base.to_boolean, sub, context);
            base.parse_element (/<cim:PFVArType2IEEEVArController.ki>([\s\S]*?)<\/cim:PFVArType2IEEEVArController.ki>/g, obj, "ki", base.to_string, sub, context);
            base.parse_element (/<cim:PFVArType2IEEEVArController.kp>([\s\S]*?)<\/cim:PFVArType2IEEEVArController.kp>/g, obj, "kp", base.to_string, sub, context);
            base.parse_element (/<cim:PFVArType2IEEEVArController.qref>([\s\S]*?)<\/cim:PFVArType2IEEEVArController.qref>/g, obj, "qref", base.to_string, sub, context);
            base.parse_element (/<cim:PFVArType2IEEEVArController.vclmt>([\s\S]*?)<\/cim:PFVArType2IEEEVArController.vclmt>/g, obj, "vclmt", base.to_string, sub, context);
            base.parse_element (/<cim:PFVArType2IEEEVArController.vref>([\s\S]*?)<\/cim:PFVArType2IEEEVArController.vref>/g, obj, "vref", base.to_string, sub, context);
            base.parse_element (/<cim:PFVArType2IEEEVArController.vs>([\s\S]*?)<\/cim:PFVArType2IEEEVArController.vs>/g, obj, "vs", base.to_float, sub, context);
            bucket = context.parsed.PFVArType2IEEEVArController;
            if (null == bucket)
                context.parsed.PFVArType2IEEEVArController = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PFVArType2IEEEVArController (obj, exporters, full)
        {
            var fields = exporters["PFVArControllerType2Dynamics"](obj, exporters, false);

            base.export_element (obj, "PFVArType2IEEEVArController", "exlon", base.from_boolean, fields);
            base.export_element (obj, "PFVArType2IEEEVArController", "ki", base.from_string, fields);
            base.export_element (obj, "PFVArType2IEEEVArController", "kp", base.from_string, fields);
            base.export_element (obj, "PFVArType2IEEEVArController", "qref", base.from_string, fields);
            base.export_element (obj, "PFVArType2IEEEVArController", "vclmt", base.from_string, fields);
            base.export_element (obj, "PFVArType2IEEEVArController", "vref", base.from_string, fields);
            base.export_element (obj, "PFVArType2IEEEVArController", "vs", base.from_float, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                parse_PFVArType2IEEEPFController: parse_PFVArType2IEEEPFController,
                export_PFVArType2IEEEPFController: export_PFVArType2IEEEPFController,
                parse_PFVArType2IEEEVArController: parse_PFVArType2IEEEVArController,
                export_PFVArControllerType2Dynamics: export_PFVArControllerType2Dynamics,
                parse_PFVArControllerType2Dynamics: parse_PFVArControllerType2Dynamics,
                export_PFVArType2IEEEVArController: export_PFVArType2IEEEVArController,
                parse_PFVArType2Common1: parse_PFVArType2Common1,
                export_PFVArType2Common1: export_PFVArType2Common1
            }
        );
    }
);