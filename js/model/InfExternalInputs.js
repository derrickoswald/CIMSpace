define
(
    ["model/base", "model/Core"],
    function (base, Core)
    {

        /**
         * Ancillary service requirements for a market.
         *
         */
        function parse_ResourceGroupReq (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ResourceGroupReq";
            base.parse_attribute (/<cim:ResourceGroupReq.ResourceGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ResourceGroup", sub, context);
            bucket = context.parsed.ResourceGroupReq;
            if (null == bucket)
                context.parsed.ResourceGroupReq = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ResourceGroupReq (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_attribute (obj, "ResourceGroupReq", "ResourceGroup", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Requirements for minimum amount of reserve and/or regulation to be supplied by a set of qualified resources.
         *
         */
        function parse_ReserveReq (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ResourceGroupReq (context, sub);
            obj.cls = "ReserveReq";
            base.parse_attribute (/<cim:ReserveReq.MarketProduct\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketProduct", sub, context);
            base.parse_attribute (/<cim:ReserveReq.SensitivityPriceCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SensitivityPriceCurve", sub, context);
            base.parse_attribute (/<cim:ReserveReq.ReserveReqCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReserveReqCurve", sub, context);
            bucket = context.parsed.ReserveReq;
            if (null == bucket)
                context.parsed.ReserveReq = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ReserveReq (obj, exporters, full)
        {
            var fields = exporters["ResourceGroupReq"](obj, exporters, false);

            base.export_attribute (obj, "ReserveReq", "MarketProduct", fields);
            base.export_attribute (obj, "ReserveReq", "SensitivityPriceCurve", fields);
            base.export_attribute (obj, "ReserveReq", "ReserveReqCurve", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A curve relating  reserve requirement versus time, showing the values of a specific reserve requirement for each unit of the period covered.
         *
         * The  curve can be based on "absolute" time or on "normalized' time.
         *
         */
        function parse_ReserveReqCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "ReserveReqCurve";
            base.parse_attribute (/<cim:ReserveReqCurve.ReserveReq\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReserveReq", sub, context);
            bucket = context.parsed.ReserveReqCurve;
            if (null == bucket)
                context.parsed.ReserveReqCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ReserveReqCurve (obj, exporters, full)
        {
            var fields = exporters["Curve"](obj, exporters, false);

            base.export_attribute (obj, "ReserveReqCurve", "ReserveReq", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A logical grouping of resources that are used to model location of types of requirements for ancillary services such as spinning reserve zones, regulation zones, etc.
         *
         */
        function parse_ResourceGroup (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ResourceGroup";
            base.parse_element (/<cim:ResourceGroup.type>([\s\S]*?)<\/cim:ResourceGroup.type>/g, obj, "type", base.to_string, sub, context);
            base.parse_element (/<cim:ResourceGroup.status>([\s\S]*?)<\/cim:ResourceGroup.status>/g, obj, "status", base.to_string, sub, context);
            bucket = context.parsed.ResourceGroup;
            if (null == bucket)
                context.parsed.ResourceGroup = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ResourceGroup (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "ResourceGroup", "type", base.from_string, fields);
            base.export_element (obj, "ResourceGroup", "status", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Optionally, this curve expresses elasticity of the associated requirement.
         *
         * For example, used to reduce requirements when clearing price exceeds reasonable values when the supply quantity becomes scarce. For example, a single point value of \$1000/MW for a spinning reserve will cause a reduction in the required spinning reserve.
         *
         */
        function parse_SensitivityPriceCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "SensitivityPriceCurve";
            base.parse_attribute (/<cim:SensitivityPriceCurve.ReserveReq\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReserveReq", sub, context);
            bucket = context.parsed.SensitivityPriceCurve;
            if (null == bucket)
                context.parsed.SensitivityPriceCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SensitivityPriceCurve (obj, exporters, full)
        {
            var fields = exporters["Curve"](obj, exporters, false);

            base.export_attribute (obj, "SensitivityPriceCurve", "ReserveReq", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                parse_SensitivityPriceCurve: parse_SensitivityPriceCurve,
                parse_ReserveReq: parse_ReserveReq,
                export_ResourceGroup: export_ResourceGroup,
                export_ReserveReqCurve: export_ReserveReqCurve,
                export_ResourceGroupReq: export_ResourceGroupReq,
                parse_ResourceGroupReq: parse_ResourceGroupReq,
                parse_ResourceGroup: parse_ResourceGroup,
                export_SensitivityPriceCurve: export_SensitivityPriceCurve,
                parse_ReserveReqCurve: parse_ReserveReqCurve,
                export_ReserveReq: export_ReserveReq
            }
        );
    }
);