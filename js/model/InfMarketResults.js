define
(
    ["model/base", "model/MarketPlan"],
    function (base, MarketPlan)
    {

        /**
         * Binding security constrained clearing results posted for a given settlement period.
         */
        function parse_SecurityConstraintsClearing (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketPlan.parse_MarketFactors (context, sub);
            obj.cls = "SecurityConstraintsClearing";
            /**
             * Binding MW limit.
             */
            obj["mwLimit"] = base.parse_element (/<cim:SecurityConstraintsClearing.mwLimit>([\s\S]*?)<\/cim:SecurityConstraintsClearing.mwLimit>/g, sub, context, true);
            /**
             * Optimal MW flow
             */
            obj["mwFlow"] = base.parse_element (/<cim:SecurityConstraintsClearing.mwFlow>([\s\S]*?)<\/cim:SecurityConstraintsClearing.mwFlow>/g, sub, context, true);
            /**
             * Security constraint shadow price.
             */
            obj["shadowPrice"] = base.parse_element (/<cim:SecurityConstraintsClearing.shadowPrice>([\s\S]*?)<\/cim:SecurityConstraintsClearing.shadowPrice>/g, sub, context, true);
            bucket = context.parsed.SecurityConstraintsClearing;
            if (null == bucket)
                context.parsed.SecurityConstraintsClearing = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Market case clearing results are posted for a given settlement period.
         */
        function parse_MarketCaseClearing (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketPlan.parse_MarketFactors (context, sub);
            obj.cls = "MarketCaseClearing";
            /**
             * Settlement period:
            'DA - Bid-in'
            'DA - Reliability'
            'DA - Amp1'
            'DA - Amp2'
            'RT - Ex-Ante'
            'RT - Ex-Post'
            'RT - Amp1'
             * 'RT - Amp2'
             */
            obj["caseType"] = base.parse_element (/<cim:MarketCaseClearing.caseType>([\s\S]*?)<\/cim:MarketCaseClearing.caseType>/g, sub, context, true);
            /**
             * Bid clearing results posted time and date.
             */
            obj["postedDate"] = base.to_datetime (base.parse_element (/<cim:MarketCaseClearing.postedDate>([\s\S]*?)<\/cim:MarketCaseClearing.postedDate>/g, sub, context, true));
            /**
             * Last time and date clearing results were manually modified.
             */
            obj["modifiedDate"] = base.to_datetime (base.parse_element (/<cim:MarketCaseClearing.modifiedDate>([\s\S]*?)<\/cim:MarketCaseClearing.modifiedDate>/g, sub, context, true));
            bucket = context.parsed.MarketCaseClearing;
            if (null == bucket)
                context.parsed.MarketCaseClearing = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model of market clearing related to results at the inter-ties.
         * Identifies interval
         */
        function parse_InterTieClearing (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketPlan.parse_MarketFactors (context, sub);
            obj.cls = "InterTieClearing";
            bucket = context.parsed.InterTieClearing;
            if (null == bucket)
                context.parsed.InterTieClearing = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Provides the tie point specific output from the market applications.
         * Currently, this is defined as the loop flow compensation MW value.
         */
        function parse_InterTieResults (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "InterTieResults";
            /**
             * Net Dispatched MW
             */
            obj["clearedValue"] = base.to_float (base.parse_element (/<cim:InterTieResults.clearedValue>([\s\S]*?)<\/cim:InterTieResults.clearedValue>/g, sub, context, true));
            /**
             * Net Actual MW Flow
             */
            obj["baseMW"] = base.to_float (base.parse_element (/<cim:InterTieResults.baseMW>([\s\S]*?)<\/cim:InterTieResults.baseMW>/g, sub, context, true));
            obj["InterTieClearing"] = base.parse_attribute (/<cim:InterTieResults.InterTieClearing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["Flowgate"] = base.parse_attribute (/<cim:InterTieResults.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.InterTieResults;
            if (null == bucket)
                context.parsed.InterTieResults = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_SecurityConstraintsClearing: parse_SecurityConstraintsClearing,
                parse_MarketCaseClearing: parse_MarketCaseClearing,
                parse_InterTieClearing: parse_InterTieClearing,
                parse_InterTieResults: parse_InterTieResults
            }
        );
    }
);