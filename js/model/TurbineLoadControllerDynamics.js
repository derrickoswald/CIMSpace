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
            obj["TurbineGovernorDynamics"] = base.parse_attribute (/<cim:TurbineLoadControllerDynamics.TurbineGovernorDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["db"] = base.parse_element (/<cim:TurbLCFB1.db>([\s\S]*?)<\/cim:TurbLCFB1.db>/g, sub, context, true);
            /**
             * Maximum control error (Emax) (note 4).
             *
             * Typical Value = 0.02.
             *
             */
            obj["emax"] = base.parse_element (/<cim:TurbLCFB1.emax>([\s\S]*?)<\/cim:TurbLCFB1.emax>/g, sub, context, true);
            /**
             * Frequency bias gain (Fb).
             *
             * Typical Value = 0.
             *
             */
            obj["fb"] = base.parse_element (/<cim:TurbLCFB1.fb>([\s\S]*?)<\/cim:TurbLCFB1.fb>/g, sub, context, true);
            /**
             * Frequency bias flag (Fbf).
             * true = enable frequency bias
             * false = disable frequency bias.
             *
             * Typical Value = false.
             *
             */
            obj["fbf"] = base.to_boolean (base.parse_element (/<cim:TurbLCFB1.fbf>([\s\S]*?)<\/cim:TurbLCFB1.fbf>/g, sub, context, true));
            /**
             * Maximum turbine speed/load reference bias (Irmax) (note 3).
             *
             * Typical Value = 0.
             *
             */
            obj["irmax"] = base.parse_element (/<cim:TurbLCFB1.irmax>([\s\S]*?)<\/cim:TurbLCFB1.irmax>/g, sub, context, true);
            /**
             * Integral gain (Ki).
             *
             * Typical Value = 0.
             *
             */
            obj["ki"] = base.parse_element (/<cim:TurbLCFB1.ki>([\s\S]*?)<\/cim:TurbLCFB1.ki>/g, sub, context, true);
            /**
             * Proportional gain (Kp).
             *
             * Typical Value = 0.
             *
             */
            obj["kp"] = base.parse_element (/<cim:TurbLCFB1.kp>([\s\S]*?)<\/cim:TurbLCFB1.kp>/g, sub, context, true);
            /**
             * Base for power values (MWbase) (&gt;0).
             *
             * Unit = MW.
             *
             */
            obj["mwbase"] = base.parse_element (/<cim:TurbLCFB1.mwbase>([\s\S]*?)<\/cim:TurbLCFB1.mwbase>/g, sub, context, true);
            /**
             * Power controller flag (Pbf).
             * true = enable load controller
             * false = disable load controller.
             *
             * Typical Value = false.
             *
             */
            obj["pbf"] = base.to_boolean (base.parse_element (/<cim:TurbLCFB1.pbf>([\s\S]*?)<\/cim:TurbLCFB1.pbf>/g, sub, context, true));
            /**
             * Power controller setpoint (Pmwset) (note 1).
             *
             * Unit = MW. Typical Value = 0.
             *
             */
            obj["pmwset"] = base.parse_element (/<cim:TurbLCFB1.pmwset>([\s\S]*?)<\/cim:TurbLCFB1.pmwset>/g, sub, context, true);
            /**
             * Type of turbine governor reference (Type).
             * true = speed reference governor
             * false = load reference governor.
             *
             * Typical Value = true.
             *
             */
            obj["speedReferenceGovernor"] = base.to_boolean (base.parse_element (/<cim:TurbLCFB1.speedReferenceGovernor>([\s\S]*?)<\/cim:TurbLCFB1.speedReferenceGovernor>/g, sub, context, true));
            /**
             * Power transducer time constant (Tpelec).
             *
             * Typical Value = 0.
             *
             */
            obj["tpelec"] = base.parse_element (/<cim:TurbLCFB1.tpelec>([\s\S]*?)<\/cim:TurbLCFB1.tpelec>/g, sub, context, true);
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