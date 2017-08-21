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
            obj["scope"] = base.parse_element (/<cim:BilateralTransaction.scope>([\s\S]*?)<\/cim:BilateralTransaction.scope>/g, sub, context, true);
            /**
             * Transaction type (default 1)
             * 1 - Fixed
             * 2 - Dispatchable continuous
             *
             * 3 - Dispatchable block-loading
             *
             */
            obj["transactionType"] = base.parse_element (/<cim:BilateralTransaction.transactionType>([\s\S]*?)<\/cim:BilateralTransaction.transactionType>/g, sub, context, true);
            /**
             * Market type (default=DA)
             * DA - Day Ahead
             * RT - Real Time
             *
             * HA - Hour Ahead
             *
             */
            obj["marketType"] = base.parse_element (/<cim:BilateralTransaction.marketType>([\s\S]*?)<\/cim:BilateralTransaction.marketType>/g, sub, context, true);
            /**
             * Minimum purchase time in number of trading intervals
             *
             */
            obj["purchaseTimeMin"] = base.parse_element (/<cim:BilateralTransaction.purchaseTimeMin>([\s\S]*?)<\/cim:BilateralTransaction.purchaseTimeMin>/g, sub, context, true);
            /**
             * Maximum purchase time in number of trading intervals
             *
             */
            obj["purchaseTimeMax"] = base.parse_element (/<cim:BilateralTransaction.purchaseTimeMax>([\s\S]*?)<\/cim:BilateralTransaction.purchaseTimeMax>/g, sub, context, true);
            /**
             * Minimum curtailment time in number of trading intervals
             *
             */
            obj["curtailTimeMin"] = base.parse_element (/<cim:BilateralTransaction.curtailTimeMin>([\s\S]*?)<\/cim:BilateralTransaction.curtailTimeMin>/g, sub, context, true);
            /**
             * Maximum curtailment time in number of trading intervals
             *
             */
            obj["curtailTimeMax"] = base.parse_element (/<cim:BilateralTransaction.curtailTimeMax>([\s\S]*?)<\/cim:BilateralTransaction.curtailTimeMax>/g, sub, context, true);
            /**
             * Maximum total transmission (congestion) charges in monetary units
             *
             */
            obj["totalTranChargeMax"] = base.parse_element (/<cim:BilateralTransaction.totalTranChargeMax>([\s\S]*?)<\/cim:BilateralTransaction.totalTranChargeMax>/g, sub, context, true);
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
            obj["factor"] = base.to_float (base.parse_element (/<cim:Participation.factor>([\s\S]*?)<\/cim:Participation.factor>/g, sub, context, true));
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
            obj["certifiedDAM"] = base.parse_element (/<cim:ResourceCertification.certifiedDAM>([\s\S]*?)<\/cim:ResourceCertification.certifiedDAM>/g, sub, context, true);
            obj["certifiedNonspinDAM"] = base.parse_element (/<cim:ResourceCertification.certifiedNonspinDAM>([\s\S]*?)<\/cim:ResourceCertification.certifiedNonspinDAM>/g, sub, context, true);
            obj["certifiedNonspinDAMMw"] = base.to_float (base.parse_element (/<cim:ResourceCertification.certifiedNonspinDAMMw>([\s\S]*?)<\/cim:ResourceCertification.certifiedNonspinDAMMw>/g, sub, context, true));
            obj["certifiedNonspinRTM"] = base.parse_element (/<cim:ResourceCertification.certifiedNonspinRTM>([\s\S]*?)<\/cim:ResourceCertification.certifiedNonspinRTM>/g, sub, context, true);
            obj["certifiedNonspinRTMMw"] = base.to_float (base.parse_element (/<cim:ResourceCertification.certifiedNonspinRTMMw>([\s\S]*?)<\/cim:ResourceCertification.certifiedNonspinRTMMw>/g, sub, context, true));
            obj["certifiedPIRP"] = base.parse_element (/<cim:ResourceCertification.certifiedPIRP>([\s\S]*?)<\/cim:ResourceCertification.certifiedPIRP>/g, sub, context, true);
            obj["certifiedRegulation"] = base.parse_element (/<cim:ResourceCertification.certifiedRegulation>([\s\S]*?)<\/cim:ResourceCertification.certifiedRegulation>/g, sub, context, true);
            obj["certifiedRegulationMw"] = base.to_float (base.parse_element (/<cim:ResourceCertification.certifiedRegulationMw>([\s\S]*?)<\/cim:ResourceCertification.certifiedRegulationMw>/g, sub, context, true));
            obj["certifiedReplaceAS"] = base.parse_element (/<cim:ResourceCertification.certifiedReplaceAS>([\s\S]*?)<\/cim:ResourceCertification.certifiedReplaceAS>/g, sub, context, true);
            obj["certifiedSpin"] = base.parse_element (/<cim:ResourceCertification.certifiedSpin>([\s\S]*?)<\/cim:ResourceCertification.certifiedSpin>/g, sub, context, true);
            obj["certifiedSpinMw"] = base.to_float (base.parse_element (/<cim:ResourceCertification.certifiedSpinMw>([\s\S]*?)<\/cim:ResourceCertification.certifiedSpinMw>/g, sub, context, true));
            obj["certifiedRTM"] = base.parse_element (/<cim:ResourceCertification.certifiedRTM>([\s\S]*?)<\/cim:ResourceCertification.certifiedRTM>/g, sub, context, true);
            obj["certifiedRUC"] = base.parse_element (/<cim:ResourceCertification.certifiedRUC>([\s\S]*?)<\/cim:ResourceCertification.certifiedRUC>/g, sub, context, true);
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