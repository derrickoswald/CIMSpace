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
            base.parse_element (/<cim:BilateralTransaction.scope>([\s\S]*?)<\/cim:BilateralTransaction.scope>/g, obj, "scope", base.to_string, sub, context);
            base.parse_element (/<cim:BilateralTransaction.transactionType>([\s\S]*?)<\/cim:BilateralTransaction.transactionType>/g, obj, "transactionType", base.to_string, sub, context);
            base.parse_element (/<cim:BilateralTransaction.marketType>([\s\S]*?)<\/cim:BilateralTransaction.marketType>/g, obj, "marketType", base.to_string, sub, context);
            base.parse_element (/<cim:BilateralTransaction.purchaseTimeMin>([\s\S]*?)<\/cim:BilateralTransaction.purchaseTimeMin>/g, obj, "purchaseTimeMin", base.to_string, sub, context);
            base.parse_element (/<cim:BilateralTransaction.purchaseTimeMax>([\s\S]*?)<\/cim:BilateralTransaction.purchaseTimeMax>/g, obj, "purchaseTimeMax", base.to_string, sub, context);
            base.parse_element (/<cim:BilateralTransaction.curtailTimeMin>([\s\S]*?)<\/cim:BilateralTransaction.curtailTimeMin>/g, obj, "curtailTimeMin", base.to_string, sub, context);
            base.parse_element (/<cim:BilateralTransaction.curtailTimeMax>([\s\S]*?)<\/cim:BilateralTransaction.curtailTimeMax>/g, obj, "curtailTimeMax", base.to_string, sub, context);
            base.parse_element (/<cim:BilateralTransaction.totalTranChargeMax>([\s\S]*?)<\/cim:BilateralTransaction.totalTranChargeMax>/g, obj, "totalTranChargeMax", base.to_string, sub, context);
            bucket = context.parsed.BilateralTransaction;
            if (null == bucket)
                context.parsed.BilateralTransaction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_BilateralTransaction (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "BilateralTransaction", "scope", base.from_string, fields);
            base.export_element (obj, "BilateralTransaction", "transactionType", base.from_string, fields);
            base.export_element (obj, "BilateralTransaction", "marketType", base.from_string, fields);
            base.export_element (obj, "BilateralTransaction", "purchaseTimeMin", base.from_string, fields);
            base.export_element (obj, "BilateralTransaction", "purchaseTimeMax", base.from_string, fields);
            base.export_element (obj, "BilateralTransaction", "curtailTimeMin", base.from_string, fields);
            base.export_element (obj, "BilateralTransaction", "curtailTimeMax", base.from_string, fields);
            base.export_element (obj, "BilateralTransaction", "totalTranChargeMax", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:Participation.factor>([\s\S]*?)<\/cim:Participation.factor>/g, obj, "factor", base.to_float, sub, context);
            bucket = context.parsed.Participation;
            if (null == bucket)
                context.parsed.Participation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Participation (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "Participation", "factor", base.from_float, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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

        function export_ResourceCertification (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ResourceCertification", "certifiedDAM", base.from_string, fields);
            base.export_element (obj, "ResourceCertification", "certifiedNonspinDAM", base.from_string, fields);
            base.export_element (obj, "ResourceCertification", "certifiedNonspinDAMMw", base.from_float, fields);
            base.export_element (obj, "ResourceCertification", "certifiedNonspinRTM", base.from_string, fields);
            base.export_element (obj, "ResourceCertification", "certifiedNonspinRTMMw", base.from_float, fields);
            base.export_element (obj, "ResourceCertification", "certifiedPIRP", base.from_string, fields);
            base.export_element (obj, "ResourceCertification", "certifiedRegulation", base.from_string, fields);
            base.export_element (obj, "ResourceCertification", "certifiedRegulationMw", base.from_float, fields);
            base.export_element (obj, "ResourceCertification", "certifiedReplaceAS", base.from_string, fields);
            base.export_element (obj, "ResourceCertification", "certifiedSpin", base.from_string, fields);
            base.export_element (obj, "ResourceCertification", "certifiedSpinMw", base.from_float, fields);
            base.export_element (obj, "ResourceCertification", "certifiedRTM", base.from_string, fields);
            base.export_element (obj, "ResourceCertification", "certifiedRUC", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                export_Participation: export_Participation,
                parse_BilateralTransaction: parse_BilateralTransaction,
                parse_ResourceCertification: parse_ResourceCertification,
                export_ResourceCertification: export_ResourceCertification,
                export_BilateralTransaction: export_BilateralTransaction,
                parse_Participation: parse_Participation
            }
        );
    }
);