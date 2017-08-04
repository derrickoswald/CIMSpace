define
(
    ["model/base", "model/Core"],
    function (base, Core)
    {

        /**
         * Ancillary service requirements for a market.
         */
        function parse_ResourceGroupReq (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ResourceGroupReq";
            obj["ResourceGroup"] = base.parse_attribute (/<cim:ResourceGroupReq.ResourceGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ResourceGroupReq;
            if (null == bucket)
                context.parsed.ResourceGroupReq = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Requirements for minimum amount of reserve and/or regulation to be supplied by a set of qualified resources.
         */
        function parse_ReserveReq (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ResourceGroupReq (context, sub);
            obj.cls = "ReserveReq";
            /**
             * Market product associated with reserve requirement must be a reserve or regulation product.
             */
            obj["MarketProduct"] = base.parse_attribute (/<cim:ReserveReq.MarketProduct\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["SensitivityPriceCurve"] = base.parse_attribute (/<cim:ReserveReq.SensitivityPriceCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["ReserveReqCurve"] = base.parse_attribute (/<cim:ReserveReq.ReserveReqCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ReserveReq;
            if (null == bucket)
                context.parsed.ReserveReq = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A curve relating  reserve requirement versus time, showing the values of a specific reserve requirement for each unit of the period covered.
         * The  curve can be based on "absolute" time or on "normalized' time.
         */
        function parse_ReserveReqCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "ReserveReqCurve";
            obj["ReserveReq"] = base.parse_attribute (/<cim:ReserveReqCurve.ReserveReq\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ReserveReqCurve;
            if (null == bucket)
                context.parsed.ReserveReqCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A logical grouping of resources that are used to model location of types of requirements for ancillary services such as spinning reserve zones, regulation zones, etc.
         */
        function parse_ResourceGroup (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ResourceGroup";
            /**
             * Type of this group.
             */
            obj["type"] = base.parse_element (/<cim:ResourceGroup.type>([\s\S]*?)<\/cim:ResourceGroup.type>/g, sub, context, true);
            /**
             * Status of this group.
             */
            obj["status"] = base.parse_element (/<cim:ResourceGroup.status>([\s\S]*?)<\/cim:ResourceGroup.status>/g, sub, context, true);
            bucket = context.parsed.ResourceGroup;
            if (null == bucket)
                context.parsed.ResourceGroup = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Optionally, this curve expresses elasticity of the associated requirement.
         * For example, used to reduce requirements when clearing price exceeds reasonable values when the supply quantity becomes scarce. For example, a single point value of $1000/MW for a spinning reserve will cause a reduction in the required spinning reserve.
         */
        function parse_SensitivityPriceCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "SensitivityPriceCurve";
            obj["ReserveReq"] = base.parse_attribute (/<cim:SensitivityPriceCurve.ReserveReq\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.SensitivityPriceCurve;
            if (null == bucket)
                context.parsed.SensitivityPriceCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_SensitivityPriceCurve: parse_SensitivityPriceCurve,
                parse_ReserveReq: parse_ReserveReq,
                parse_ResourceGroupReq: parse_ResourceGroupReq,
                parse_ResourceGroup: parse_ResourceGroup,
                parse_ReserveReqCurve: parse_ReserveReqCurve
            }
        );
    }
);