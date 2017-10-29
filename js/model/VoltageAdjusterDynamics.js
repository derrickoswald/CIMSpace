define
(
    ["model/base", "model/StandardModels"],
    /**
     * <font color="#0f0f0f">A voltage adjuster is a reference adjuster that uses inputs from a reactive power or power factor controller to modify the voltage regulator set point to maintain the synchronous machine steady-state power factor or reactive power at a predetermined value. </font>
     *
     * <font color="#0f0f0f">For additional information please refer to IEEE Standard 421.5-2005, Section 11.</font>
     *
     */
    function (base, StandardModels)
    {

        /**
         * The class represents IEEE Voltage Adjuster which is used to represent the voltage adjuster in either a power factor or var control system.
         *
         * Reference: IEEE Standard 421.5-2005 Section 11.1.
         *
         */
        function parse_VAdjIEEE (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_VoltageAdjusterDynamics (context, sub);
            obj.cls = "VAdjIEEE";
            base.parse_element (/<cim:VAdjIEEE.adjslew>([\s\S]*?)<\/cim:VAdjIEEE.adjslew>/g, obj, "adjslew", base.to_float, sub, context);
            base.parse_element (/<cim:VAdjIEEE.taoff>([\s\S]*?)<\/cim:VAdjIEEE.taoff>/g, obj, "taoff", base.to_string, sub, context);
            base.parse_element (/<cim:VAdjIEEE.taon>([\s\S]*?)<\/cim:VAdjIEEE.taon>/g, obj, "taon", base.to_string, sub, context);
            base.parse_element (/<cim:VAdjIEEE.vadjf>([\s\S]*?)<\/cim:VAdjIEEE.vadjf>/g, obj, "vadjf", base.to_float, sub, context);
            base.parse_element (/<cim:VAdjIEEE.vadjmax>([\s\S]*?)<\/cim:VAdjIEEE.vadjmax>/g, obj, "vadjmax", base.to_string, sub, context);
            base.parse_element (/<cim:VAdjIEEE.vadjmin>([\s\S]*?)<\/cim:VAdjIEEE.vadjmin>/g, obj, "vadjmin", base.to_string, sub, context);
            bucket = context.parsed.VAdjIEEE;
            if (null == bucket)
                context.parsed.VAdjIEEE = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_VAdjIEEE (obj, exporters, full)
        {
            var fields = exporters["VoltageAdjusterDynamics"](obj, exporters, false);

            base.export_element (obj, "VAdjIEEE", "adjslew", base.from_float, fields);
            base.export_element (obj, "VAdjIEEE", "taoff", base.from_string, fields);
            base.export_element (obj, "VAdjIEEE", "taon", base.from_string, fields);
            base.export_element (obj, "VAdjIEEE", "vadjf", base.from_float, fields);
            base.export_element (obj, "VAdjIEEE", "vadjmax", base.from_string, fields);
            base.export_element (obj, "VAdjIEEE", "vadjmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Voltage adjuster function block whose behaviour is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         *
         */
        function parse_VoltageAdjusterDynamics (context, sub)
        {
            var obj;
            var bucket;

            obj = StandardModels.parse_DynamicsFunctionBlock (context, sub);
            obj.cls = "VoltageAdjusterDynamics";
            base.parse_attribute (/<cim:VoltageAdjusterDynamics.PFVArControllerType1Dynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PFVArControllerType1Dynamics", sub, context);
            bucket = context.parsed.VoltageAdjusterDynamics;
            if (null == bucket)
                context.parsed.VoltageAdjusterDynamics = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_VoltageAdjusterDynamics (obj, exporters, full)
        {
            var fields = exporters["DynamicsFunctionBlock"](obj, exporters, false);

            base.export_attribute (obj, "VoltageAdjusterDynamics", "PFVArControllerType1Dynamics", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                parse_VAdjIEEE: parse_VAdjIEEE,
                parse_VoltageAdjusterDynamics: parse_VoltageAdjusterDynamics,
                export_VoltageAdjusterDynamics: export_VoltageAdjusterDynamics,
                export_VAdjIEEE: export_VAdjIEEE
            }
        );
    }
);