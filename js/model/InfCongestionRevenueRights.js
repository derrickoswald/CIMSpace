define
(
    ["model/base", "model/Common", "model/Meas"],
    function (base, Common, Meas)
    {

        /**
         * A type of limit that indicates if it is enforced and, through association, the organisation responsible for setting the limit.
         */
        function parse_ViolationLimit (context, sub)
        {
            var obj;
            var bucket;

            obj = Meas.parse_Limit (context, sub);
            obj.cls = "ViolationLimit";
            /**
             * True if limit is enforced.
             */
            obj["enforced"] = base.to_boolean (base.parse_element (/<cim:ViolationLimit.enforced>([\s\S]*?)<\/cim:ViolationLimit.enforced>/g, sub, context, true));
            obj["MktMeasurement"] = base.parse_attribute (/<cim:ViolationLimit.MktMeasurement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["Flowgate"] = base.parse_attribute (/<cim:ViolationLimit.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ViolationLimit;
            if (null == bucket)
                context.parsed.ViolationLimit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Financial Transmission Rights (FTR) regarding transmission capacity at a flowgate.
         */
        function parse_FTR (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Agreement (context, sub);
            obj.cls = "FTR";
            /**
             * Fixed (covers re-configuration, grandfathering) or Optimized (up for sale/purchase
             */
            obj["optimized"] = base.parse_element (/<cim:FTR.optimized>([\s\S]*?)<\/cim:FTR.optimized>/g, sub, context, true);
            /**
             * Buy, Sell
             */
            obj["action"] = base.parse_element (/<cim:FTR.action>([\s\S]*?)<\/cim:FTR.action>/g, sub, context, true);
            /**
             * Quantity, typically MWs - Seller owns all rights being offered, MWs over time on same Point of Receipt, Point of Delivery, or Resource.
             */
            obj["baseEnergy"] = base.parse_element (/<cim:FTR.baseEnergy>([\s\S]*?)<\/cim:FTR.baseEnergy>/g, sub, context, true);
            /**
             * Type of rights being offered (product) allowed to be auctioned (option, obligation).
             */
            obj["ftrType"] = base.parse_element (/<cim:FTR.ftrType>([\s\S]*?)<\/cim:FTR.ftrType>/g, sub, context, true);
            /**
             * Peak, Off-peak, 24-hour
             */
            obj["class"] = base.parse_element (/<cim:FTR.class>([\s\S]*?)<\/cim:FTR.class>/g, sub, context, true);
            obj["EnergyPriceCurve"] = base.parse_attribute (/<cim:FTR.EnergyPriceCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["Flowgate"] = base.parse_attribute (/<cim:FTR.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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