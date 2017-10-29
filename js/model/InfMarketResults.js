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
            base.parse_element (/<cim:SecurityConstraintsClearing.mwLimit>([\s\S]*?)<\/cim:SecurityConstraintsClearing.mwLimit>/g, obj, "mwLimit", base.to_string, sub, context);
            base.parse_element (/<cim:SecurityConstraintsClearing.mwFlow>([\s\S]*?)<\/cim:SecurityConstraintsClearing.mwFlow>/g, obj, "mwFlow", base.to_string, sub, context);
            base.parse_element (/<cim:SecurityConstraintsClearing.shadowPrice>([\s\S]*?)<\/cim:SecurityConstraintsClearing.shadowPrice>/g, obj, "shadowPrice", base.to_string, sub, context);
            bucket = context.parsed.SecurityConstraintsClearing;
            if (null == bucket)
                context.parsed.SecurityConstraintsClearing = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SecurityConstraintsClearing (obj, exporters, full)
        {
            var fields = exporters["MarketFactors"](obj, exporters, false);

            base.export_element (obj, "SecurityConstraintsClearing", "mwLimit", base.from_string, fields);
            base.export_element (obj, "SecurityConstraintsClearing", "mwFlow", base.from_string, fields);
            base.export_element (obj, "SecurityConstraintsClearing", "shadowPrice", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:MarketCaseClearing.caseType>([\s\S]*?)<\/cim:MarketCaseClearing.caseType>/g, obj, "caseType", base.to_string, sub, context);
            base.parse_element (/<cim:MarketCaseClearing.postedDate>([\s\S]*?)<\/cim:MarketCaseClearing.postedDate>/g, obj, "postedDate", base.to_datetime, sub, context);
            base.parse_element (/<cim:MarketCaseClearing.modifiedDate>([\s\S]*?)<\/cim:MarketCaseClearing.modifiedDate>/g, obj, "modifiedDate", base.to_datetime, sub, context);
            bucket = context.parsed.MarketCaseClearing;
            if (null == bucket)
                context.parsed.MarketCaseClearing = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MarketCaseClearing (obj, exporters, full)
        {
            var fields = exporters["MarketFactors"](obj, exporters, false);

            base.export_element (obj, "MarketCaseClearing", "caseType", base.from_string, fields);
            base.export_element (obj, "MarketCaseClearing", "postedDate", base.from_datetime, fields);
            base.export_element (obj, "MarketCaseClearing", "modifiedDate", base.from_datetime, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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

        function export_InterTieClearing (obj, exporters, full)
        {
            var fields = exporters["MarketFactors"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:InterTieResults.clearedValue>([\s\S]*?)<\/cim:InterTieResults.clearedValue>/g, obj, "clearedValue", base.to_float, sub, context);
            base.parse_element (/<cim:InterTieResults.baseMW>([\s\S]*?)<\/cim:InterTieResults.baseMW>/g, obj, "baseMW", base.to_float, sub, context);
            base.parse_attribute (/<cim:InterTieResults.InterTieClearing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InterTieClearing", sub, context);
            base.parse_attribute (/<cim:InterTieResults.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
            bucket = context.parsed.InterTieResults;
            if (null == bucket)
                context.parsed.InterTieResults = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_InterTieResults (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "InterTieResults", "clearedValue", base.from_float, fields);
            base.export_element (obj, "InterTieResults", "baseMW", base.from_float, fields);
            base.export_attribute (obj, "InterTieResults", "InterTieClearing", fields);
            base.export_attribute (obj, "InterTieResults", "Flowgate", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                export_SecurityConstraintsClearing: export_SecurityConstraintsClearing,
                export_InterTieClearing: export_InterTieClearing,
                export_InterTieResults: export_InterTieResults,
                parse_SecurityConstraintsClearing: parse_SecurityConstraintsClearing,
                parse_MarketCaseClearing: parse_MarketCaseClearing,
                parse_InterTieClearing: parse_InterTieClearing,
                parse_InterTieResults: parse_InterTieResults,
                export_MarketCaseClearing: export_MarketCaseClearing
            }
        );
    }
);