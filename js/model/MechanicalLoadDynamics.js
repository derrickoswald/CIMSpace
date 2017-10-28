define
(
    ["model/base", "model/StandardModels"],
    /**
     * A mechanical load represents the variation in a motor's shaft torque or power as a function of shaft speed.
     *
     */
    function (base, StandardModels)
    {

        /**
         * Mechanical load model type 1.
         *
         */
        function parse_MechLoad1 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_MechanicalLoadDynamics (context, sub);
            obj.cls = "MechLoad1";
            /**
             * Speed squared coefficient (a).
             *
             */
            base.parse_element (/<cim:MechLoad1.a>([\s\S]*?)<\/cim:MechLoad1.a>/g, obj, "a", base.to_float, sub, context);

            /**
             * Speed coefficient (b).
             *
             */
            base.parse_element (/<cim:MechLoad1.b>([\s\S]*?)<\/cim:MechLoad1.b>/g, obj, "b", base.to_float, sub, context);

            /**
             * Speed to the exponent coefficient (d).
             *
             */
            base.parse_element (/<cim:MechLoad1.d>([\s\S]*?)<\/cim:MechLoad1.d>/g, obj, "d", base.to_float, sub, context);

            /**
             * Exponent (e).
             *
             */
            base.parse_element (/<cim:MechLoad1.e>([\s\S]*?)<\/cim:MechLoad1.e>/g, obj, "e", base.to_float, sub, context);

            bucket = context.parsed.MechLoad1;
            if (null == bucket)
                context.parsed.MechLoad1 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Mechanical load function block whose behavior is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         *
         */
        function parse_MechanicalLoadDynamics (context, sub)
        {
            var obj;
            var bucket;

            obj = StandardModels.parse_DynamicsFunctionBlock (context, sub);
            obj.cls = "MechanicalLoadDynamics";
            /**
             * Synchronous machine model with which this mechanical load model is associated.
             *
             */
            base.parse_attribute (/<cim:MechanicalLoadDynamics.SynchronousMachineDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SynchronousMachineDynamics", sub, context, true);

            /**
             * Asynchronous machine model with which this mechanical load model is associated.
             *
             */
            base.parse_attribute (/<cim:MechanicalLoadDynamics.AsynchronousMachineDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AsynchronousMachineDynamics", sub, context, true);

            bucket = context.parsed.MechanicalLoadDynamics;
            if (null == bucket)
                context.parsed.MechanicalLoadDynamics = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_MechanicalLoadDynamics: parse_MechanicalLoadDynamics,
                parse_MechLoad1: parse_MechLoad1
            }
        );
    }
);