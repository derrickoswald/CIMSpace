define
(
    ["model/base", "model/Common", "model/Meas"],
    function (base, Common, Meas)
    {

        /**
         * A type of limit that indicates if it is enforced and, through association, the organisation responsible for setting the limit.
         *
         */
        function parse_ViolationLimit (context, sub)
        {
            var obj;
            var bucket;

            obj = Meas.parse_Limit (context, sub);
            obj.cls = "ViolationLimit";
            base.parse_element (/<cim:ViolationLimit.enforced>([\s\S]*?)<\/cim:ViolationLimit.enforced>/g, obj, "enforced", base.to_boolean, sub, context);
            base.parse_attribute (/<cim:ViolationLimit.MktMeasurement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktMeasurement", sub, context);
            base.parse_attribute (/<cim:ViolationLimit.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
            bucket = context.parsed.ViolationLimit;
            if (null == bucket)
                context.parsed.ViolationLimit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ViolationLimit (obj, exporters, full)
        {
            var fields = exporters["Limit"](obj, exporters, false);

            base.export_element (obj, "ViolationLimit", "enforced", base.from_boolean, fields);
            base.export_attribute (obj, "ViolationLimit", "MktMeasurement", fields);
            base.export_attribute (obj, "ViolationLimit", "Flowgate", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Financial Transmission Rights (FTR) regarding transmission capacity at a flowgate.
         *
         */
        function parse_FTR (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Agreement (context, sub);
            obj.cls = "FTR";
            base.parse_element (/<cim:FTR.optimized>([\s\S]*?)<\/cim:FTR.optimized>/g, obj, "optimized", base.to_string, sub, context);
            base.parse_element (/<cim:FTR.action>([\s\S]*?)<\/cim:FTR.action>/g, obj, "action", base.to_string, sub, context);
            base.parse_element (/<cim:FTR.baseEnergy>([\s\S]*?)<\/cim:FTR.baseEnergy>/g, obj, "baseEnergy", base.to_string, sub, context);
            base.parse_element (/<cim:FTR.ftrType>([\s\S]*?)<\/cim:FTR.ftrType>/g, obj, "ftrType", base.to_string, sub, context);
            base.parse_element (/<cim:FTR.class>([\s\S]*?)<\/cim:FTR.class>/g, obj, "class", base.to_string, sub, context);
            base.parse_attribute (/<cim:FTR.EnergyPriceCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyPriceCurve", sub, context);
            base.parse_attribute (/<cim:FTR.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
            bucket = context.parsed.FTR;
            if (null == bucket)
                context.parsed.FTR = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_FTR (obj, exporters, full)
        {
            var fields = exporters["Agreement"](obj, exporters, false);

            base.export_element (obj, "FTR", "optimized", base.from_string, fields);
            base.export_element (obj, "FTR", "action", base.from_string, fields);
            base.export_element (obj, "FTR", "baseEnergy", base.from_string, fields);
            base.export_element (obj, "FTR", "ftrType", base.from_string, fields);
            base.export_element (obj, "FTR", "class", base.from_string, fields);
            base.export_attribute (obj, "FTR", "EnergyPriceCurve", fields);
            base.export_attribute (obj, "FTR", "Flowgate", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                export_ViolationLimit: export_ViolationLimit,
                parse_FTR: parse_FTR,
                export_FTR: export_FTR,
                parse_ViolationLimit: parse_ViolationLimit
            }
        );
    }
);