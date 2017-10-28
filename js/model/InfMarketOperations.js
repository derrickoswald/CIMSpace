define
(
    ["model/base", "model/Core"],
    function (base, Core)
    {

        /**
         * Bilateral transaction
         *
         */
        function parse_BilateralTransaction (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "BilateralTransaction";
            /**
             * Transaction scope:
             * 'Internal' (default)
             *
             * 'External'
             *
             */
            base.parse_element (/<cim:BilateralTransaction.scope>([\s\S]*?)<\/cim:BilateralTransaction.scope>/g, obj, "scope", base.to_string, sub, context);

            /**
             * Transaction type (default 1)
             * 1 - Fixed
             * 2 - Dispatchable continuous
             *
             * 3 - Dispatchable block-loading
             *
             */
            base.parse_element (/<cim:BilateralTransaction.transactionType>([\s\S]*?)<\/cim:BilateralTransaction.transactionType>/g, obj, "transactionType", base.to_string, sub, context);

            /**
             * Market type (default=DA)
             * DA - Day Ahead
             * RT - Real Time
             *
             * HA - Hour Ahead
             *
             */
            base.parse_element (/<cim:BilateralTransaction.marketType>([\s\S]*?)<\/cim:BilateralTransaction.marketType>/g, obj, "marketType", base.to_string, sub, context);

            /**
             * Minimum purchase time in number of trading intervals
             *
             */
            base.parse_element (/<cim:BilateralTransaction.purchaseTimeMin>([\s\S]*?)<\/cim:BilateralTransaction.purchaseTimeMin>/g, obj, "purchaseTimeMin", base.to_string, sub, context);

            /**
             * Maximum purchase time in number of trading intervals
             *
             */
            base.parse_element (/<cim:BilateralTransaction.purchaseTimeMax>([\s\S]*?)<\/cim:BilateralTransaction.purchaseTimeMax>/g, obj, "purchaseTimeMax", base.to_string, sub, context);

            /**
             * Minimum curtailment time in number of trading intervals
             *
             */
            base.parse_element (/<cim:BilateralTransaction.curtailTimeMin>([\s\S]*?)<\/cim:BilateralTransaction.curtailTimeMin>/g, obj, "curtailTimeMin", base.to_string, sub, context);

            /**
             * Maximum curtailment time in number of trading intervals
             *
             */
            base.parse_element (/<cim:BilateralTransaction.curtailTimeMax>([\s\S]*?)<\/cim:BilateralTransaction.curtailTimeMax>/g, obj, "curtailTimeMax", base.to_string, sub, context);

            /**
             * Maximum total transmission (congestion) charges in monetary units
             *
             */
            base.parse_element (/<cim:BilateralTransaction.totalTranChargeMax>([\s\S]*?)<\/cim:BilateralTransaction.totalTranChargeMax>/g, obj, "totalTranChargeMax", base.to_string, sub, context);

            bucket = context.parsed.BilateralTransaction;
            if (null == bucket)
                context.parsed.BilateralTransaction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Participation level of a given Pnode in a given AggregatePnode.
         *
         */
        function parse_Participation (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Participation";
            /**
             * Used to calculate "participation" of Pnode in an AggregatePnode.
             *
             * For example, for regulation region this factor is 1 and total sum of all factors for a specific regulation region does not have to be 1. For pricing zone the total sum of all factors has to be 1.
             *
             */
            base.parse_element (/<cim:Participation.factor>([\s\S]*?)<\/cim:Participation.factor>/g, obj, "factor", base.to_float, sub, context);

            bucket = context.parsed.Participation;
            if (null == bucket)
                context.parsed.Participation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This class represent the resource certification for a specific product type.
         *
         * For example, a resource is certified for Non-Spinning reserve for RTM.
         *
         */
        function parse_ResourceCertification (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ResourceCertification";
            base.parse_element (/<cim:ResourceCertification.certifiedDAM>([\s\S]*?)<\/cim:ResourceCertification.certifiedDAM>/g, obj, "certifiedDAM", base.to_string, sub, context);

            base.parse_element (/<cim:ResourceCertification.certifiedNonspinDAM>([\s\S]*?)<\/cim:ResourceCertification.certifiedNonspinDAM>/g, obj, "certifiedNonspinDAM", base.to_string, sub, context);

            base.parse_element (/<cim:ResourceCertification.certifiedNonspinDAMMw>([\s\S]*?)<\/cim:ResourceCertification.certifiedNonspinDAMMw>/g, obj, "certifiedNonspinDAMMw", base.to_float, sub, context);

            base.parse_element (/<cim:ResourceCertification.certifiedNonspinRTM>([\s\S]*?)<\/cim:ResourceCertification.certifiedNonspinRTM>/g, obj, "certifiedNonspinRTM", base.to_string, sub, context);

            base.parse_element (/<cim:ResourceCertification.certifiedNonspinRTMMw>([\s\S]*?)<\/cim:ResourceCertification.certifiedNonspinRTMMw>/g, obj, "certifiedNonspinRTMMw", base.to_float, sub, context);

            base.parse_element (/<cim:ResourceCertification.certifiedPIRP>([\s\S]*?)<\/cim:ResourceCertification.certifiedPIRP>/g, obj, "certifiedPIRP", base.to_string, sub, context);

            base.parse_element (/<cim:ResourceCertification.certifiedRegulation>([\s\S]*?)<\/cim:ResourceCertification.certifiedRegulation>/g, obj, "certifiedRegulation", base.to_string, sub, context);

            base.parse_element (/<cim:ResourceCertification.certifiedRegulationMw>([\s\S]*?)<\/cim:ResourceCertification.certifiedRegulationMw>/g, obj, "certifiedRegulationMw", base.to_float, sub, context);

            base.parse_element (/<cim:ResourceCertification.certifiedReplaceAS>([\s\S]*?)<\/cim:ResourceCertification.certifiedReplaceAS>/g, obj, "certifiedReplaceAS", base.to_string, sub, context);

            base.parse_element (/<cim:ResourceCertification.certifiedSpin>([\s\S]*?)<\/cim:ResourceCertification.certifiedSpin>/g, obj, "certifiedSpin", base.to_string, sub, context);

            base.parse_element (/<cim:ResourceCertification.certifiedSpinMw>([\s\S]*?)<\/cim:ResourceCertification.certifiedSpinMw>/g, obj, "certifiedSpinMw", base.to_float, sub, context);

            base.parse_element (/<cim:ResourceCertification.certifiedRTM>([\s\S]*?)<\/cim:ResourceCertification.certifiedRTM>/g, obj, "certifiedRTM", base.to_string, sub, context);

            base.parse_element (/<cim:ResourceCertification.certifiedRUC>([\s\S]*?)<\/cim:ResourceCertification.certifiedRUC>/g, obj, "certifiedRUC", base.to_string, sub, context);

            bucket = context.parsed.ResourceCertification;
            if (null == bucket)
                context.parsed.ResourceCertification = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_BilateralTransaction: parse_BilateralTransaction,
                parse_ResourceCertification: parse_ResourceCertification,
                parse_Participation: parse_Participation
            }
        );
    }
);