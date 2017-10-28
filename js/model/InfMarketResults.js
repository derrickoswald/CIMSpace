define
(
    ["model/base", "model/MarketPlan"],
    function (base, MarketPlan)
    {

        /**
         * Binding security constrained clearing results posted for a given settlement period.
         *
         */
        function parse_SecurityConstraintsClearing (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketPlan.parse_MarketFactors (context, sub);
            obj.cls = "SecurityConstraintsClearing";
            /**
             * Binding MW limit.
             *
             */
            base.parse_element (/<cim:SecurityConstraintsClearing.mwLimit>([\s\S]*?)<\/cim:SecurityConstraintsClearing.mwLimit>/g, obj, "mwLimit", base.to_string, sub, context);

            /**
             * Optimal MW flow
             *
             */
            base.parse_element (/<cim:SecurityConstraintsClearing.mwFlow>([\s\S]*?)<\/cim:SecurityConstraintsClearing.mwFlow>/g, obj, "mwFlow", base.to_string, sub, context);

            /**
             * Security constraint shadow price.
             *
             */
            base.parse_element (/<cim:SecurityConstraintsClearing.shadowPrice>([\s\S]*?)<\/cim:SecurityConstraintsClearing.shadowPrice>/g, obj, "shadowPrice", base.to_string, sub, context);

            bucket = context.parsed.SecurityConstraintsClearing;
            if (null == bucket)
                context.parsed.SecurityConstraintsClearing = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Market case clearing results are posted for a given settlement period.
         *
         */
        function parse_MarketCaseClearing (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketPlan.parse_MarketFactors (context, sub);
            obj.cls = "MarketCaseClearing";
            /**
             * Settlement period:
             * 'DA - Bid-in'
             * 'DA - Reliability'
             * 'DA - Amp1'
             * 'DA - Amp2'
             * 'RT - Ex-Ante'
             * 'RT - Ex-Post'
             * 'RT - Amp1'
             *
             * 'RT - Amp2'
             *
             */
            base.parse_element (/<cim:MarketCaseClearing.caseType>([\s\S]*?)<\/cim:MarketCaseClearing.caseType>/g, obj, "caseType", base.to_string, sub, context);

            /**
             * Bid clearing results posted time and date.
             *
             */
            base.parse_element (/<cim:MarketCaseClearing.postedDate>([\s\S]*?)<\/cim:MarketCaseClearing.postedDate>/g, obj, "postedDate", base.to_datetime, sub, context);

            /**
             * Last time and date clearing results were manually modified.
             *
             */
            base.parse_element (/<cim:MarketCaseClearing.modifiedDate>([\s\S]*?)<\/cim:MarketCaseClearing.modifiedDate>/g, obj, "modifiedDate", base.to_datetime, sub, context);

            bucket = context.parsed.MarketCaseClearing;
            if (null == bucket)
                context.parsed.MarketCaseClearing = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model of market clearing related to results at the inter-ties.
         *
         * Identifies interval
         *
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
         *
         * Currently, this is defined as the loop flow compensation MW value.
         *
         */
        function parse_InterTieResults (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "InterTieResults";
            /**
             * Net Dispatched MW
             *
             */
            base.parse_element (/<cim:InterTieResults.clearedValue>([\s\S]*?)<\/cim:InterTieResults.clearedValue>/g, obj, "clearedValue", base.to_float, sub, context);

            /**
             * Net Actual MW Flow
             *
             */
            base.parse_element (/<cim:InterTieResults.baseMW>([\s\S]*?)<\/cim:InterTieResults.baseMW>/g, obj, "baseMW", base.to_float, sub, context);

            base.parse_attribute (/<cim:InterTieResults.InterTieClearing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InterTieClearing", sub, context, true);

            base.parse_attribute (/<cim:InterTieResults.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context, true);

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