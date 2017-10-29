define
(
    ["model/base", "model/Common", "model/Core"],
    /**
     * This package is responsible for Settlement and Billing.
     *
     * These classes represent the legal entities who participate in formal or informal agreements.
     *
     */
    function (base, Common, Core)
    {

        /**
         * Operates the Control Area.
         *
         * Approves and implements energy transactions. Verifies both Inter-Control Area and Intra-Control Area transactions for the power system  before granting approval (and implementing) the transactions.
         *
         */
        function parse_ControlAreaOperator (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Organisation (context, sub);
            obj.cls = "ControlAreaOperator";
            base.parse_attribute (/<cim:ControlAreaOperator.ControlledBy\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ControlledBy", sub, context);
            bucket = context.parsed.ControlAreaOperator;
            if (null == bucket)
                context.parsed.ControlAreaOperator = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ControlAreaOperator (obj, exporters, full)
        {
            var fields = exporters["Organisation"](obj, exporters, false);

            base.export_attribute (obj, "ControlAreaOperator", "ControlledBy", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Contracts for services offered commercially.
         *
         */
        function parse_OpenAccessProduct (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Agreement (context, sub);
            obj.cls = "OpenAccessProduct";
            bucket = context.parsed.OpenAccessProduct;
            if (null == bucket)
                context.parsed.OpenAccessProduct = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OpenAccessProduct (obj, exporters, full)
        {
            var fields = exporters["Agreement"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_TransmissionProduct (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TransmissionProduct";
            base.parse_element (/<cim:TransmissionProduct.transmissionProductType>([\s\S]*?)<\/cim:TransmissionProduct.transmissionProductType>/g, obj, "transmissionProductType", base.to_string, sub, context);
            base.parse_attribute (/<cim:TransmissionProduct.TransmissionProvider\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionProvider", sub, context);
            bucket = context.parsed.TransmissionProduct;
            if (null == bucket)
                context.parsed.TransmissionProduct = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TransmissionProduct (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "TransmissionProduct", "transmissionProductType", base.from_string, fields);
            base.export_attribute (obj, "TransmissionProduct", "TransmissionProvider", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A type of agreement that provides the default method by which interchange schedules are to be integrated to obtain hourly MWh schedules for accounting.
         *
         */
        function parse_IntSchedAgreement (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Agreement (context, sub);
            obj.cls = "IntSchedAgreement";
            base.parse_element (/<cim:IntSchedAgreement.defaultIntegrationMethod>([\s\S]*?)<\/cim:IntSchedAgreement.defaultIntegrationMethod>/g, obj, "defaultIntegrationMethod", base.to_string, sub, context);
            bucket = context.parsed.IntSchedAgreement;
            if (null == bucket)
                context.parsed.IntSchedAgreement = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_IntSchedAgreement (obj, exporters, full)
        {
            var fields = exporters["Agreement"](obj, exporters, false);

            base.export_element (obj, "IntSchedAgreement", "defaultIntegrationMethod", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The energy buyer in the energy marketplace.
         *
         */
        function parse_CustomerConsumer (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Organisation (context, sub);
            obj.cls = "CustomerConsumer";
            bucket = context.parsed.CustomerConsumer;
            if (null == bucket)
                context.parsed.CustomerConsumer = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CustomerConsumer (obj, exporters, full)
        {
            var fields = exporters["Organisation"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Provider of  the transmission capacity (interconnecting wires between Generation and Consumption) required  to fulfill and Energy Transaction's energy exchange.
         *
         * Posts information for transmission paths and AvailableTransmissionCapacities  on a reservation node.  Buys and sells its products and services on the same reservation node.
         *
         */
        function parse_TransmissionProvider (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Organisation (context, sub);
            obj.cls = "TransmissionProvider";
            bucket = context.parsed.TransmissionProvider;
            if (null == bucket)
                context.parsed.TransmissionProvider = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TransmissionProvider (obj, exporters, full)
        {
            var fields = exporters["Organisation"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Matches buyers and sellers, and secures transmission (and other ancillary services) needed to complete the energy transaction.
         *
         */
        function parse_Marketer (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Organisation (context, sub);
            obj.cls = "Marketer";
            bucket = context.parsed.Marketer;
            if (null == bucket)
                context.parsed.Marketer = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Marketer (obj, exporters, full)
        {
            var fields = exporters["Organisation"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The energy seller in the energy marketplace.
         *
         */
        function parse_GenerationProvider (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Organisation (context, sub);
            obj.cls = "GenerationProvider";
            bucket = context.parsed.GenerationProvider;
            if (null == bucket)
                context.parsed.GenerationProvider = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GenerationProvider (obj, exporters, full)
        {
            var fields = exporters["Organisation"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                export_GenerationProvider: export_GenerationProvider,
                parse_IntSchedAgreement: parse_IntSchedAgreement,
                parse_TransmissionProvider: parse_TransmissionProvider,
                export_IntSchedAgreement: export_IntSchedAgreement,
                parse_Marketer: parse_Marketer,
                parse_TransmissionProduct: parse_TransmissionProduct,
                parse_GenerationProvider: parse_GenerationProvider,
                export_CustomerConsumer: export_CustomerConsumer,
                export_OpenAccessProduct: export_OpenAccessProduct,
                export_ControlAreaOperator: export_ControlAreaOperator,
                export_TransmissionProvider: export_TransmissionProvider,
                export_TransmissionProduct: export_TransmissionProduct,
                parse_OpenAccessProduct: parse_OpenAccessProduct,
                export_Marketer: export_Marketer,
                parse_ControlAreaOperator: parse_ControlAreaOperator,
                parse_CustomerConsumer: parse_CustomerConsumer
            }
        );
    }
);