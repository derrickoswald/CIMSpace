define
(
    ["model/base", "model/StandardModels"],
    /**
     * A turbine load controller acts to maintain turbine power at a set value by continuous adjustment of the turbine governor speed-load reference.
     *
     */
    function (base, StandardModels)
    {

        /**
         * Turbine load controller function block whose behavior is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         *
         */
        function parse_TurbineLoadControllerDynamics (context, sub)
        {
            var obj;
            var bucket;

            obj = StandardModels.parse_DynamicsFunctionBlock (context, sub);
            obj.cls = "TurbineLoadControllerDynamics";
            /**
             * Turbine-governor controlled by this turbine load controller.
             *
             */
            base.parse_attribute (/<cim:TurbineLoadControllerDynamics.TurbineGovernorDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TurbineGovernorDynamics", sub, context, true);

            bucket = context.parsed.TurbineLoadControllerDynamics;
            if (null == bucket)
                context.parsed.TurbineLoadControllerDynamics = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Turbine Load Controller model developed in the WECC.
         *
         * This model represents a supervisory turbine load controller that acts to maintain turbine power at a set value by continuous adjustment of the turbine governor speed-load reference. This model is intended to represent slow reset 'outer loop' controllers managing the action of the turbine governor.
         *
         */
        function parse_TurbLCFB1 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineLoadControllerDynamics (context, sub);
            obj.cls = "TurbLCFB1";
            /**
             * Controller dead band (db).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:TurbLCFB1.db>([\s\S]*?)<\/cim:TurbLCFB1.db>/g, obj, "db", base.to_string, sub, context);

            /**
             * Maximum control error (Emax) (note 4).
             *
             * Typical Value = 0.02.
             *
             */
            base.parse_element (/<cim:TurbLCFB1.emax>([\s\S]*?)<\/cim:TurbLCFB1.emax>/g, obj, "emax", base.to_string, sub, context);

            /**
             * Frequency bias gain (Fb).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:TurbLCFB1.fb>([\s\S]*?)<\/cim:TurbLCFB1.fb>/g, obj, "fb", base.to_string, sub, context);

            /**
             * Frequency bias flag (Fbf).
             * true = enable frequency bias
             * false = disable frequency bias.
             *
             * Typical Value = false.
             *
             */
            base.parse_element (/<cim:TurbLCFB1.fbf>([\s\S]*?)<\/cim:TurbLCFB1.fbf>/g, obj, "fbf", base.to_boolean, sub, context);

            /**
             * Maximum turbine speed/load reference bias (Irmax) (note 3).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:TurbLCFB1.irmax>([\s\S]*?)<\/cim:TurbLCFB1.irmax>/g, obj, "irmax", base.to_string, sub, context);

            /**
             * Integral gain (Ki).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:TurbLCFB1.ki>([\s\S]*?)<\/cim:TurbLCFB1.ki>/g, obj, "ki", base.to_string, sub, context);

            /**
             * Proportional gain (Kp).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:TurbLCFB1.kp>([\s\S]*?)<\/cim:TurbLCFB1.kp>/g, obj, "kp", base.to_string, sub, context);

            /**
             * Base for power values (MWbase) (&gt;0).
             *
             * Unit = MW.
             *
             */
            base.parse_element (/<cim:TurbLCFB1.mwbase>([\s\S]*?)<\/cim:TurbLCFB1.mwbase>/g, obj, "mwbase", base.to_string, sub, context);

            /**
             * Power controller flag (Pbf).
             * true = enable load controller
             * false = disable load controller.
             *
             * Typical Value = false.
             *
             */
            base.parse_element (/<cim:TurbLCFB1.pbf>([\s\S]*?)<\/cim:TurbLCFB1.pbf>/g, obj, "pbf", base.to_boolean, sub, context);

            /**
             * Power controller setpoint (Pmwset) (note 1).
             *
             * Unit = MW. Typical Value = 0.
             *
             */
            base.parse_element (/<cim:TurbLCFB1.pmwset>([\s\S]*?)<\/cim:TurbLCFB1.pmwset>/g, obj, "pmwset", base.to_string, sub, context);

            /**
             * Type of turbine governor reference (Type).
             * true = speed reference governor
             * false = load reference governor.
             *
             * Typical Value = true.
             *
             */
            base.parse_element (/<cim:TurbLCFB1.speedReferenceGovernor>([\s\S]*?)<\/cim:TurbLCFB1.speedReferenceGovernor>/g, obj, "speedReferenceGovernor", base.to_boolean, sub, context);

            /**
             * Power transducer time constant (Tpelec).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:TurbLCFB1.tpelec>([\s\S]*?)<\/cim:TurbLCFB1.tpelec>/g, obj, "tpelec", base.to_string, sub, context);

            bucket = context.parsed.TurbLCFB1;
            if (null == bucket)
                context.parsed.TurbLCFB1 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_TurbineLoadControllerDynamics: parse_TurbineLoadControllerDynamics,
                parse_TurbLCFB1: parse_TurbLCFB1
            }
        );
    }
);