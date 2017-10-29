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
            base.parse_element (/<cim:MechLoad1.a>([\s\S]*?)<\/cim:MechLoad1.a>/g, obj, "a", base.to_float, sub, context);
            base.parse_element (/<cim:MechLoad1.b>([\s\S]*?)<\/cim:MechLoad1.b>/g, obj, "b", base.to_float, sub, context);
            base.parse_element (/<cim:MechLoad1.d>([\s\S]*?)<\/cim:MechLoad1.d>/g, obj, "d", base.to_float, sub, context);
            base.parse_element (/<cim:MechLoad1.e>([\s\S]*?)<\/cim:MechLoad1.e>/g, obj, "e", base.to_float, sub, context);
            bucket = context.parsed.MechLoad1;
            if (null == bucket)
                context.parsed.MechLoad1 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MechLoad1 (obj, exporters, full)
        {
            var fields = exporters["MechanicalLoadDynamics"](obj, exporters, false);

            base.export_element (obj, "MechLoad1", "a", base.from_float, fields);
            base.export_element (obj, "MechLoad1", "b", base.from_float, fields);
            base.export_element (obj, "MechLoad1", "d", base.from_float, fields);
            base.export_element (obj, "MechLoad1", "e", base.from_float, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_attribute (/<cim:MechanicalLoadDynamics.SynchronousMachineDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SynchronousMachineDynamics", sub, context);
            base.parse_attribute (/<cim:MechanicalLoadDynamics.AsynchronousMachineDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AsynchronousMachineDynamics", sub, context);
            bucket = context.parsed.MechanicalLoadDynamics;
            if (null == bucket)
                context.parsed.MechanicalLoadDynamics = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MechanicalLoadDynamics (obj, exporters, full)
        {
            var fields = exporters["DynamicsFunctionBlock"](obj, exporters, false);

            base.export_attribute (obj, "MechanicalLoadDynamics", "SynchronousMachineDynamics", fields);
            base.export_attribute (obj, "MechanicalLoadDynamics", "AsynchronousMachineDynamics", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                export_MechLoad1: export_MechLoad1,
                parse_MechanicalLoadDynamics: parse_MechanicalLoadDynamics,
                export_MechanicalLoadDynamics: export_MechanicalLoadDynamics,
                parse_MechLoad1: parse_MechLoad1
            }
        );
    }
);