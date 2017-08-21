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
            /**
             * A ControlAreaCompany controls a ControlArea.
             *
             */
            obj["ControlledBy"] = base.parse_attribute (/<cim:ControlAreaOperator.ControlledBy\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ControlAreaOperator;
            if (null == bucket)
                context.parsed.ControlAreaOperator = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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

        function parse_TransmissionProduct (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TransmissionProduct";
            /**
             * Type of the transmission product.
             *
             * This could be a transmission service class (firm, total transmission capability, or non-firm), transmission service period (on-peak, full-period, off-peak), transmission service increments (yearly extended, hourly fixed, monthly sliding, etc.), transmission service type (network, available transmission capability, or point-to-point, or a transmission service window (fixed hourly, sliding weekly, extended monthly, etc.).
             *
             */
            obj["transmissionProductType"] = base.parse_element (/<cim:TransmissionProduct.transmissionProductType>([\s\S]*?)<\/cim:TransmissionProduct.transmissionProductType>/g, sub, context, true);
            /**
             * A TransmissionProvider offers a TransmissionProduct.
             *
             */
            obj["TransmissionProvider"] = base.parse_attribute (/<cim:TransmissionProduct.TransmissionProvider\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.TransmissionProduct;
            if (null == bucket)
                context.parsed.TransmissionProduct = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The default method by which interchange schedules are to be integrated to obtain hourly MWh schedules for accounting.
             *
             * Method #1 is to integrate the instantaneous schedule between the hourly boundaries. Method #2 compensates for any up/down ramping that occurs across the hourly boundary (this is called block accounting).
             *
             */
            obj["defaultIntegrationMethod"] = base.parse_element (/<cim:IntSchedAgreement.defaultIntegrationMethod>([\s\S]*?)<\/cim:IntSchedAgreement.defaultIntegrationMethod>/g, sub, context, true);
            bucket = context.parsed.IntSchedAgreement;
            if (null == bucket)
                context.parsed.IntSchedAgreement = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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

        return (
            {
                parse_GenerationProvider: parse_GenerationProvider,
                parse_IntSchedAgreement: parse_IntSchedAgreement,
                parse_TransmissionProvider: parse_TransmissionProvider,
                parse_Marketer: parse_Marketer,
                parse_TransmissionProduct: parse_TransmissionProduct,
                parse_OpenAccessProduct: parse_OpenAccessProduct,
                parse_ControlAreaOperator: parse_ControlAreaOperator,
                parse_CustomerConsumer: parse_CustomerConsumer
            }
        );
    }
);