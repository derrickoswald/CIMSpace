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
            base.parse_attribute (/<cim:TurbineLoadControllerDynamics.TurbineGovernorDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TurbineGovernorDynamics", sub, context);
            bucket = context.parsed.TurbineLoadControllerDynamics;
            if (null == bucket)
                context.parsed.TurbineLoadControllerDynamics = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TurbineLoadControllerDynamics (obj, exporters, full)
        {
            var fields = exporters["DynamicsFunctionBlock"](obj, exporters, false);

            base.export_attribute (obj, "TurbineLoadControllerDynamics", "TurbineGovernorDynamics", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:TurbLCFB1.db>([\s\S]*?)<\/cim:TurbLCFB1.db>/g, obj, "db", base.to_string, sub, context);
            base.parse_element (/<cim:TurbLCFB1.emax>([\s\S]*?)<\/cim:TurbLCFB1.emax>/g, obj, "emax", base.to_string, sub, context);
            base.parse_element (/<cim:TurbLCFB1.fb>([\s\S]*?)<\/cim:TurbLCFB1.fb>/g, obj, "fb", base.to_string, sub, context);
            base.parse_element (/<cim:TurbLCFB1.fbf>([\s\S]*?)<\/cim:TurbLCFB1.fbf>/g, obj, "fbf", base.to_boolean, sub, context);
            base.parse_element (/<cim:TurbLCFB1.irmax>([\s\S]*?)<\/cim:TurbLCFB1.irmax>/g, obj, "irmax", base.to_string, sub, context);
            base.parse_element (/<cim:TurbLCFB1.ki>([\s\S]*?)<\/cim:TurbLCFB1.ki>/g, obj, "ki", base.to_string, sub, context);
            base.parse_element (/<cim:TurbLCFB1.kp>([\s\S]*?)<\/cim:TurbLCFB1.kp>/g, obj, "kp", base.to_string, sub, context);
            base.parse_element (/<cim:TurbLCFB1.mwbase>([\s\S]*?)<\/cim:TurbLCFB1.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
            base.parse_element (/<cim:TurbLCFB1.pbf>([\s\S]*?)<\/cim:TurbLCFB1.pbf>/g, obj, "pbf", base.to_boolean, sub, context);
            base.parse_element (/<cim:TurbLCFB1.pmwset>([\s\S]*?)<\/cim:TurbLCFB1.pmwset>/g, obj, "pmwset", base.to_string, sub, context);
            base.parse_element (/<cim:TurbLCFB1.speedReferenceGovernor>([\s\S]*?)<\/cim:TurbLCFB1.speedReferenceGovernor>/g, obj, "speedReferenceGovernor", base.to_boolean, sub, context);
            base.parse_element (/<cim:TurbLCFB1.tpelec>([\s\S]*?)<\/cim:TurbLCFB1.tpelec>/g, obj, "tpelec", base.to_string, sub, context);
            bucket = context.parsed.TurbLCFB1;
            if (null == bucket)
                context.parsed.TurbLCFB1 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TurbLCFB1 (obj, exporters, full)
        {
            var fields = exporters["TurbineLoadControllerDynamics"](obj, exporters, false);

            base.export_element (obj, "TurbLCFB1", "db", base.from_string, fields);
            base.export_element (obj, "TurbLCFB1", "emax", base.from_string, fields);
            base.export_element (obj, "TurbLCFB1", "fb", base.from_string, fields);
            base.export_element (obj, "TurbLCFB1", "fbf", base.from_boolean, fields);
            base.export_element (obj, "TurbLCFB1", "irmax", base.from_string, fields);
            base.export_element (obj, "TurbLCFB1", "ki", base.from_string, fields);
            base.export_element (obj, "TurbLCFB1", "kp", base.from_string, fields);
            base.export_element (obj, "TurbLCFB1", "mwbase", base.from_string, fields);
            base.export_element (obj, "TurbLCFB1", "pbf", base.from_boolean, fields);
            base.export_element (obj, "TurbLCFB1", "pmwset", base.from_string, fields);
            base.export_element (obj, "TurbLCFB1", "speedReferenceGovernor", base.from_boolean, fields);
            base.export_element (obj, "TurbLCFB1", "tpelec", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                export_TurbLCFB1: export_TurbLCFB1,
                export_TurbineLoadControllerDynamics: export_TurbineLoadControllerDynamics,
                parse_TurbineLoadControllerDynamics: parse_TurbineLoadControllerDynamics,
                parse_TurbLCFB1: parse_TurbLCFB1
            }
        );
    }
);