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
            /**
             * True if limit is enforced.
             *
             */
            base.parse_element (/<cim:ViolationLimit.enforced>([\s\S]*?)<\/cim:ViolationLimit.enforced>/g, obj, "enforced", base.to_boolean, sub, context);

            base.parse_attribute (/<cim:ViolationLimit.MktMeasurement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktMeasurement", sub, context, true);

            base.parse_attribute (/<cim:ViolationLimit.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context, true);

            bucket = context.parsed.ViolationLimit;
            if (null == bucket)
                context.parsed.ViolationLimit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Fixed (covers re-configuration, grandfathering) or Optimized (up for sale/purchase
             *
             */
            base.parse_element (/<cim:FTR.optimized>([\s\S]*?)<\/cim:FTR.optimized>/g, obj, "optimized", base.to_string, sub, context);

            /**
             * Buy, Sell
             *
             */
            base.parse_element (/<cim:FTR.action>([\s\S]*?)<\/cim:FTR.action>/g, obj, "action", base.to_string, sub, context);

            /**
             * Quantity, typically MWs - Seller owns all rights being offered, MWs over time on same Point of Receipt, Point of Delivery, or Resource.
             *
             */
            base.parse_element (/<cim:FTR.baseEnergy>([\s\S]*?)<\/cim:FTR.baseEnergy>/g, obj, "baseEnergy", base.to_string, sub, context);

            /**
             * Type of rights being offered (product) allowed to be auctioned (option, obligation).
             *
             */
            base.parse_element (/<cim:FTR.ftrType>([\s\S]*?)<\/cim:FTR.ftrType>/g, obj, "ftrType", base.to_string, sub, context);

            /**
             * Peak, Off-peak, 24-hour
             *
             */
            base.parse_element (/<cim:FTR.class>([\s\S]*?)<\/cim:FTR.class>/g, obj, "class", base.to_string, sub, context);

            base.parse_attribute (/<cim:FTR.EnergyPriceCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyPriceCurve", sub, context, true);

            base.parse_attribute (/<cim:FTR.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context, true);

            bucket = context.parsed.FTR;
            if (null == bucket)
                context.parsed.FTR = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_FTR: parse_FTR,
                parse_ViolationLimit: parse_ViolationLimit
            }
        );
    }
);