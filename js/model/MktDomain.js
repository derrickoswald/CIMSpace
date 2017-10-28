define
(
    ["model/base"],
    /**
     * The MktDomain package is a data dictionary of quantities and units that define datatypes for attributes (properties) that may be used by any class in any other package within MarketOperations.
     *
     */
    function (base)
    {

        /**
         * Energy product type
         *
         */
        function parse_EnergyProductType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "EnergyProductType";
            /**
             * Firm
             *
             */
            base.parse_element (/<cim:EnergyProductType.FIRM>([\s\S]*?)<\/cim:EnergyProductType.FIRM>/g, obj, "FIRM", base.to_string, sub, context);

            /**
             * Non Firm
             *
             */
            base.parse_element (/<cim:EnergyProductType.NFRM>([\s\S]*?)<\/cim:EnergyProductType.NFRM>/g, obj, "NFRM", base.to_string, sub, context);

            /**
             * Dynamic
             *
             */
            base.parse_element (/<cim:EnergyProductType.DYN>([\s\S]*?)<\/cim:EnergyProductType.DYN>/g, obj, "DYN", base.to_string, sub, context);

            /**
             * Wheeling
             *
             */
            base.parse_element (/<cim:EnergyProductType.WHL>([\s\S]*?)<\/cim:EnergyProductType.WHL>/g, obj, "WHL", base.to_string, sub, context);

            bucket = context.parsed.EnergyProductType;
            if (null == bucket)
                context.parsed.EnergyProductType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Indicates whether the unit is RMR and it's condition type, for example:
         * N' - not an RMR unit
         * '1' - RMR Condition 1 unit
         *
         * '2' - RMR Condition 2 unit
         *
         */
        function parse_FlagTypeRMR (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "FlagTypeRMR";
            /**
             * 'N' - not an RMR unit
             *
             */
            base.parse_element (/<cim:FlagTypeRMR.N>([\s\S]*?)<\/cim:FlagTypeRMR.N>/g, obj, "N", base.to_string, sub, context);

            /**
             * '1' - RMR Condition 1 unit
             *
             */
            base.parse_element (/<cim:FlagTypeRMR.1>([\s\S]*?)<\/cim:FlagTypeRMR.1>/g, obj, "1", base.to_string, sub, context);

            /**
             * '2' - RMR Condition 2 unit
             *
             */
            base.parse_element (/<cim:FlagTypeRMR.2>([\s\S]*?)<\/cim:FlagTypeRMR.2>/g, obj, "2", base.to_string, sub, context);

            bucket = context.parsed.FlagTypeRMR;
            if (null == bucket)
                context.parsed.FlagTypeRMR = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Maket type.
         *
         */
        function parse_MarketType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketType";
            /**
             * Day ahead market.
             *
             */
            base.parse_element (/<cim:MarketType.DAM>([\s\S]*?)<\/cim:MarketType.DAM>/g, obj, "DAM", base.to_string, sub, context);

            /**
             * Real time market.
             *
             */
            base.parse_element (/<cim:MarketType.RTM>([\s\S]*?)<\/cim:MarketType.RTM>/g, obj, "RTM", base.to_string, sub, context);

            /**
             * Hour Ahead Market.
             *
             */
            base.parse_element (/<cim:MarketType.HAM>([\s\S]*?)<\/cim:MarketType.HAM>/g, obj, "HAM", base.to_string, sub, context);

            /**
             * Residual Unit Commitment.
             *
             */
            base.parse_element (/<cim:MarketType.RUC>([\s\S]*?)<\/cim:MarketType.RUC>/g, obj, "RUC", base.to_string, sub, context);

            bucket = context.parsed.MarketType;
            if (null == bucket)
                context.parsed.MarketType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Ramp rate condition
         *
         */
        function parse_RampRateCondition (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "RampRateCondition";
            base.parse_element (/<cim:RampRateCondition.WORST>([\s\S]*?)<\/cim:RampRateCondition.WORST>/g, obj, "WORST", base.to_string, sub, context);

            base.parse_element (/<cim:RampRateCondition.BEST>([\s\S]*?)<\/cim:RampRateCondition.BEST>/g, obj, "BEST", base.to_string, sub, context);

            base.parse_element (/<cim:RampRateCondition.NORMAL>([\s\S]*?)<\/cim:RampRateCondition.NORMAL>/g, obj, "NORMAL", base.to_string, sub, context);

            /**
             * not applicable
             *
             */
            base.parse_element (/<cim:RampRateCondition.NA>([\s\S]*?)<\/cim:RampRateCondition.NA>/g, obj, "NA", base.to_string, sub, context);

            bucket = context.parsed.RampRateCondition;
            if (null == bucket)
                context.parsed.RampRateCondition = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The basis used to calculate the bid price curve for an energy default bid.
         *
         */
        function parse_BidCalculationBasis (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "BidCalculationBasis";
            /**
             * Based on prices paid at particular pricing location.
             *
             */
            base.parse_element (/<cim:BidCalculationBasis.LMP_BASED>([\s\S]*?)<\/cim:BidCalculationBasis.LMP_BASED>/g, obj, "LMP_BASED", base.to_string, sub, context);

            /**
             * Based on unit generation characteristics and a cost of fuel.
             *
             */
            base.parse_element (/<cim:BidCalculationBasis.COST_BASED>([\s\S]*?)<\/cim:BidCalculationBasis.COST_BASED>/g, obj, "COST_BASED", base.to_string, sub, context);

            /**
             * An amount negotiated with the designated Independent Entity.
             *
             */
            base.parse_element (/<cim:BidCalculationBasis.NEGOTIATED>([\s\S]*?)<\/cim:BidCalculationBasis.NEGOTIATED>/g, obj, "NEGOTIATED", base.to_string, sub, context);

            bucket = context.parsed.BidCalculationBasis;
            if (null == bucket)
                context.parsed.BidCalculationBasis = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Defines the state of a transaction.
         *
         */
        function parse_EnergyTransactionType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "EnergyTransactionType";
            /**
             * Approve
             *
             */
            base.parse_element (/<cim:EnergyTransactionType.approve>([\s\S]*?)<\/cim:EnergyTransactionType.approve>/g, obj, "approve", base.to_string, sub, context);

            /**
             * Deny
             *
             */
            base.parse_element (/<cim:EnergyTransactionType.deny>([\s\S]*?)<\/cim:EnergyTransactionType.deny>/g, obj, "deny", base.to_string, sub, context);

            /**
             * Study
             *
             */
            base.parse_element (/<cim:EnergyTransactionType.study>([\s\S]*?)<\/cim:EnergyTransactionType.study>/g, obj, "study", base.to_string, sub, context);

            bucket = context.parsed.EnergyTransactionType;
            if (null == bucket)
                context.parsed.EnergyTransactionType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Transmission Contract Type, For example:
         * O - Other
         * TE - Transmission Export
         * TI - Transmission Import
         * ETC - Existing Transmission Contract
         * RMT - RMT Contract
         * TOR - Transmission Ownership Right
         * RMR - Reliability Must Run Contract
         *
         * CVR - Converted contract.
         *
         */
        function parse_ContractType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ContractType";
            /**
             * ETC - Existing Transmission Contract
             *
             */
            base.parse_element (/<cim:ContractType.ETC>([\s\S]*?)<\/cim:ContractType.ETC>/g, obj, "ETC", base.to_string, sub, context);

            /**
             * TOR - Transmission Ownership Right
             *
             */
            base.parse_element (/<cim:ContractType.TOR>([\s\S]*?)<\/cim:ContractType.TOR>/g, obj, "TOR", base.to_string, sub, context);

            /**
             * RMR - Reliability Must Run Contract
             *
             */
            base.parse_element (/<cim:ContractType.RMR>([\s\S]*?)<\/cim:ContractType.RMR>/g, obj, "RMR", base.to_string, sub, context);

            /**
             * RMT - RMT Contract
             *
             */
            base.parse_element (/<cim:ContractType.RMT>([\s\S]*?)<\/cim:ContractType.RMT>/g, obj, "RMT", base.to_string, sub, context);

            /**
             * O - Other
             *
             */
            base.parse_element (/<cim:ContractType.O>([\s\S]*?)<\/cim:ContractType.O>/g, obj, "O", base.to_string, sub, context);

            /**
             * TE - Transmission Export
             *
             */
            base.parse_element (/<cim:ContractType.TE>([\s\S]*?)<\/cim:ContractType.TE>/g, obj, "TE", base.to_string, sub, context);

            /**
             * TI - Transmission Import
             *
             */
            base.parse_element (/<cim:ContractType.TI>([\s\S]*?)<\/cim:ContractType.TI>/g, obj, "TI", base.to_string, sub, context);

            /**
             * CVR - Converted contract.
             *
             */
            base.parse_element (/<cim:ContractType.CVR>([\s\S]*?)<\/cim:ContractType.CVR>/g, obj, "CVR", base.to_string, sub, context);

            bucket = context.parsed.ContractType;
            if (null == bucket)
                context.parsed.ContractType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
         * DEFAULT_ENERGY_BID
         * DEFAULT_STARTUP_BID
         *
         * DEFAULT_MINIMUM_LOAD_BID
         *
         */
        function parse_BidType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "BidType";
            base.parse_element (/<cim:BidType.DEFAULT_ENERGY_BID>([\s\S]*?)<\/cim:BidType.DEFAULT_ENERGY_BID>/g, obj, "DEFAULT_ENERGY_BID", base.to_string, sub, context);

            base.parse_element (/<cim:BidType.DEFAULT_STARTUP_BID>([\s\S]*?)<\/cim:BidType.DEFAULT_STARTUP_BID>/g, obj, "DEFAULT_STARTUP_BID", base.to_string, sub, context);

            base.parse_element (/<cim:BidType.DEFAULT_MINIMUM_LOAD_BID>([\s\S]*?)<\/cim:BidType.DEFAULT_MINIMUM_LOAD_BID>/g, obj, "DEFAULT_MINIMUM_LOAD_BID", base.to_string, sub, context);

            bucket = context.parsed.BidType;
            if (null == bucket)
                context.parsed.BidType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Status of equipment
         *
         */
        function parse_EquipmentStatusType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "EquipmentStatusType";
            /**
             * Equipment is in.
             *
             */
            base.parse_element (/<cim:EquipmentStatusType.In>([\s\S]*?)<\/cim:EquipmentStatusType.In>/g, obj, "In", base.to_string, sub, context);

            /**
             * Equipment is out.
             *
             */
            base.parse_element (/<cim:EquipmentStatusType.Out>([\s\S]*?)<\/cim:EquipmentStatusType.Out>/g, obj, "Out", base.to_string, sub, context);

            bucket = context.parsed.EquipmentStatusType;
            if (null == bucket)
                context.parsed.EquipmentStatusType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Market product self schedule bid types.
         *
         */
        function parse_MarketProductSelfSchedType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketProductSelfSchedType";
            /**
             * Existing Transmission Contract.
             *
             */
            base.parse_element (/<cim:MarketProductSelfSchedType.ETC>([\s\S]*?)<\/cim:MarketProductSelfSchedType.ETC>/g, obj, "ETC", base.to_string, sub, context);

            /**
             * Transmission Ownership Right.
             *
             */
            base.parse_element (/<cim:MarketProductSelfSchedType.TOR>([\s\S]*?)<\/cim:MarketProductSelfSchedType.TOR>/g, obj, "TOR", base.to_string, sub, context);

            /**
             * Reliability Must Run.
             *
             */
            base.parse_element (/<cim:MarketProductSelfSchedType.RMR>([\s\S]*?)<\/cim:MarketProductSelfSchedType.RMR>/g, obj, "RMR", base.to_string, sub, context);

            /**
             * Regulatory must run.
             *
             */
            base.parse_element (/<cim:MarketProductSelfSchedType.RGMR>([\s\S]*?)<\/cim:MarketProductSelfSchedType.RGMR>/g, obj, "RGMR", base.to_string, sub, context);

            /**
             * Reliability must take.
             *
             */
            base.parse_element (/<cim:MarketProductSelfSchedType.RMT>([\s\S]*?)<\/cim:MarketProductSelfSchedType.RMT>/g, obj, "RMT", base.to_string, sub, context);

            /**
             * Price taker.
             *
             */
            base.parse_element (/<cim:MarketProductSelfSchedType.PT>([\s\S]*?)<\/cim:MarketProductSelfSchedType.PT>/g, obj, "PT", base.to_string, sub, context);

            /**
             * Low price taker.
             *
             */
            base.parse_element (/<cim:MarketProductSelfSchedType.LPT>([\s\S]*?)<\/cim:MarketProductSelfSchedType.LPT>/g, obj, "LPT", base.to_string, sub, context);

            /**
             * Self provision.
             *
             */
            base.parse_element (/<cim:MarketProductSelfSchedType.SP>([\s\S]*?)<\/cim:MarketProductSelfSchedType.SP>/g, obj, "SP", base.to_string, sub, context);

            /**
             * Resource adequacy.
             *
             */
            base.parse_element (/<cim:MarketProductSelfSchedType.RA>([\s\S]*?)<\/cim:MarketProductSelfSchedType.RA>/g, obj, "RA", base.to_string, sub, context);

            bucket = context.parsed.MarketProductSelfSchedType;
            if (null == bucket)
                context.parsed.MarketProductSelfSchedType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
         * ADD - add
         *
         * CHG - change
         *
         */
        function parse_MQSCHGType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MQSCHGType";
            base.parse_element (/<cim:MQSCHGType.ADD>([\s\S]*?)<\/cim:MQSCHGType.ADD>/g, obj, "ADD", base.to_string, sub, context);

            base.parse_element (/<cim:MQSCHGType.CHG>([\s\S]*?)<\/cim:MQSCHGType.CHG>/g, obj, "CHG", base.to_string, sub, context);

            bucket = context.parsed.MQSCHGType;
            if (null == bucket)
                context.parsed.MQSCHGType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Direction of an intertie.
         *
         */
        function parse_InterTieDirection (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "InterTieDirection";
            /**
             * Export.
             *
             */
            base.parse_element (/<cim:InterTieDirection.E>([\s\S]*?)<\/cim:InterTieDirection.E>/g, obj, "E", base.to_string, sub, context);

            /**
             * Import.
             *
             */
            base.parse_element (/<cim:InterTieDirection.I>([\s\S]*?)<\/cim:InterTieDirection.I>/g, obj, "I", base.to_string, sub, context);

            bucket = context.parsed.InterTieDirection;
            if (null == bucket)
                context.parsed.InterTieDirection = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Automatic Dispatch mode
         *
         */
        function parse_AutomaticDispatchMode (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AutomaticDispatchMode";
            base.parse_element (/<cim:AutomaticDispatchMode.INTERVAL>([\s\S]*?)<\/cim:AutomaticDispatchMode.INTERVAL>/g, obj, "INTERVAL", base.to_string, sub, context);

            /**
             * Contingnency occurance, redispatch of contingency reserves
             *
             */
            base.parse_element (/<cim:AutomaticDispatchMode.CONTINGENCY>([\s\S]*?)<\/cim:AutomaticDispatchMode.CONTINGENCY>/g, obj, "CONTINGENCY", base.to_string, sub, context);

            /**
             * Operator override
             *
             */
            base.parse_element (/<cim:AutomaticDispatchMode.MANUAL>([\s\S]*?)<\/cim:AutomaticDispatchMode.MANUAL>/g, obj, "MANUAL", base.to_string, sub, context);

            bucket = context.parsed.AutomaticDispatchMode;
            if (null == bucket)
                context.parsed.AutomaticDispatchMode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
         * SELF - Self commitment
         * ISO - New commitment for this market period
         *
         * UC - Existing commitment that was a hold over from a previous market.
         *
         */
        function parse_CommitmentType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CommitmentType";
            base.parse_element (/<cim:CommitmentType.SELF>([\s\S]*?)<\/cim:CommitmentType.SELF>/g, obj, "SELF", base.to_string, sub, context);

            base.parse_element (/<cim:CommitmentType.ISO>([\s\S]*?)<\/cim:CommitmentType.ISO>/g, obj, "ISO", base.to_string, sub, context);

            base.parse_element (/<cim:CommitmentType.UC>([\s\S]*?)<\/cim:CommitmentType.UC>/g, obj, "UC", base.to_string, sub, context);

            bucket = context.parsed.CommitmentType;
            if (null == bucket)
                context.parsed.CommitmentType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Used as a flag set to Yes or No.
         *
         */
        function parse_YesNo (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "YesNo";
            base.parse_element (/<cim:YesNo.YES>([\s\S]*?)<\/cim:YesNo.YES>/g, obj, "YES", base.to_string, sub, context);

            base.parse_element (/<cim:YesNo.NO>([\s\S]*?)<\/cim:YesNo.NO>/g, obj, "NO", base.to_string, sub, context);

            bucket = context.parsed.YesNo;
            if (null == bucket)
                context.parsed.YesNo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
         * Asset Owner Sink designator for use by CRR
         * Asset Owner Source designator for use by CRR
         * Reliability Must Run
         * Scheduling Coordinator
         *
         * Load Serving Entity
         *
         */
        function parse_ResourceAssnType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ResourceAssnType";
            base.parse_element (/<cim:ResourceAssnType.CSNK>([\s\S]*?)<\/cim:ResourceAssnType.CSNK>/g, obj, "CSNK", base.to_string, sub, context);

            base.parse_element (/<cim:ResourceAssnType.CSRC>([\s\S]*?)<\/cim:ResourceAssnType.CSRC>/g, obj, "CSRC", base.to_string, sub, context);

            base.parse_element (/<cim:ResourceAssnType.RMR>([\s\S]*?)<\/cim:ResourceAssnType.RMR>/g, obj, "RMR", base.to_string, sub, context);

            base.parse_element (/<cim:ResourceAssnType.SC>([\s\S]*?)<\/cim:ResourceAssnType.SC>/g, obj, "SC", base.to_string, sub, context);

            base.parse_element (/<cim:ResourceAssnType.LSE>([\s\S]*?)<\/cim:ResourceAssnType.LSE>/g, obj, "LSE", base.to_string, sub, context);

            bucket = context.parsed.ResourceAssnType;
            if (null == bucket)
                context.parsed.ResourceAssnType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Limit type specified for AnalogLimits.
         *
         */
        function parse_AnalogLimitType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AnalogLimitType";
            /**
             * Branch Medium Term Limit
             *
             */
            base.parse_element (/<cim:AnalogLimitType.BranchMediumTerm>([\s\S]*?)<\/cim:AnalogLimitType.BranchMediumTerm>/g, obj, "BranchMediumTerm", base.to_string, sub, context);

            /**
             * Branch Long Term Limit
             *
             */
            base.parse_element (/<cim:AnalogLimitType.BranchLongTerm>([\s\S]*?)<\/cim:AnalogLimitType.BranchLongTerm>/g, obj, "BranchLongTerm", base.to_string, sub, context);

            /**
             * Branch Short Term Limit
             *
             */
            base.parse_element (/<cim:AnalogLimitType.BranchShortTerm>([\s\S]*?)<\/cim:AnalogLimitType.BranchShortTerm>/g, obj, "BranchShortTerm", base.to_string, sub, context);

            /**
             * Voltage High Limit
             *
             */
            base.parse_element (/<cim:AnalogLimitType.VoltageHigh>([\s\S]*?)<\/cim:AnalogLimitType.VoltageHigh>/g, obj, "VoltageHigh", base.to_string, sub, context);

            /**
             * Voltage Low Limit
             *
             */
            base.parse_element (/<cim:AnalogLimitType.VoltageLow>([\s\S]*?)<\/cim:AnalogLimitType.VoltageLow>/g, obj, "VoltageLow", base.to_string, sub, context);

            bucket = context.parsed.AnalogLimitType;
            if (null == bucket)
                context.parsed.AnalogLimitType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Market power mitigation test method type.
         *
         * Tests with the normal (default) thresholds or tests with the alternate thresholds.
         *
         */
        function parse_MPMTestMethodType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MPMTestMethodType";
            /**
             * Normal.
             *
             */
            base.parse_element (/<cim:MPMTestMethodType.NORMAL>([\s\S]*?)<\/cim:MPMTestMethodType.NORMAL>/g, obj, "NORMAL", base.to_string, sub, context);

            /**
             * Alternate.
             *
             */
            base.parse_element (/<cim:MPMTestMethodType.ALTERNATE>([\s\S]*?)<\/cim:MPMTestMethodType.ALTERNATE>/g, obj, "ALTERNATE", base.to_string, sub, context);

            bucket = context.parsed.MPMTestMethodType;
            if (null == bucket)
                context.parsed.MPMTestMethodType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Commitment instruction types.
         *
         */
        function parse_AutomaticDispInstTypeCommitment (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AutomaticDispInstTypeCommitment";
            /**
             * Start up instruction type
             *
             */
            base.parse_element (/<cim:AutomaticDispInstTypeCommitment.START_UP>([\s\S]*?)<\/cim:AutomaticDispInstTypeCommitment.START_UP>/g, obj, "START_UP", base.to_string, sub, context);

            /**
             * Shut down instruction type
             *
             */
            base.parse_element (/<cim:AutomaticDispInstTypeCommitment.SHUT_DOWN>([\s\S]*?)<\/cim:AutomaticDispInstTypeCommitment.SHUT_DOWN>/g, obj, "SHUT_DOWN", base.to_string, sub, context);

            bucket = context.parsed.AutomaticDispInstTypeCommitment;
            if (null == bucket)
                context.parsed.AutomaticDispInstTypeCommitment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Defines the individual passes that produce results per execution type/market type
         *
         */
        function parse_PassIndicatorType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PassIndicatorType";
            /**
             * Market Power Mitigation Pass 1
             *
             */
            base.parse_element (/<cim:PassIndicatorType.MPM-1>([\s\S]*?)<\/cim:PassIndicatorType.MPM-1>/g, obj, "MPM-1", base.to_string, sub, context);

            /**
             * Market Power Mitigation Pass 2
             *
             */
            base.parse_element (/<cim:PassIndicatorType.MPM-2>([\s\S]*?)<\/cim:PassIndicatorType.MPM-2>/g, obj, "MPM-2", base.to_string, sub, context);

            /**
             * Market Power Mitigation Pass 3
             *
             */
            base.parse_element (/<cim:PassIndicatorType.MPM-3>([\s\S]*?)<\/cim:PassIndicatorType.MPM-3>/g, obj, "MPM-3", base.to_string, sub, context);

            /**
             * Market Power Mitigation Pass 4
             *
             */
            base.parse_element (/<cim:PassIndicatorType.MPM-4>([\s\S]*?)<\/cim:PassIndicatorType.MPM-4>/g, obj, "MPM-4", base.to_string, sub, context);

            /**
             * Residual Unit Commitment
             *
             */
            base.parse_element (/<cim:PassIndicatorType.RUC>([\s\S]*?)<\/cim:PassIndicatorType.RUC>/g, obj, "RUC", base.to_string, sub, context);

            /**
             * Real Time Pre Dispatch
             *
             */
            base.parse_element (/<cim:PassIndicatorType.RTPD>([\s\S]*?)<\/cim:PassIndicatorType.RTPD>/g, obj, "RTPD", base.to_string, sub, context);

            /**
             * Real Time Economic Dispatch
             *
             */
            base.parse_element (/<cim:PassIndicatorType.RTED>([\s\S]*?)<\/cim:PassIndicatorType.RTED>/g, obj, "RTED", base.to_string, sub, context);

            /**
             * Hour Ahead Security Constrained Unit Commitment
             *
             */
            base.parse_element (/<cim:PassIndicatorType.HA-SCUC>([\s\S]*?)<\/cim:PassIndicatorType.HA-SCUC>/g, obj, "HA-SCUC", base.to_string, sub, context);

            /**
             * Day Ahead
             *
             */
            base.parse_element (/<cim:PassIndicatorType.DA>([\s\S]*?)<\/cim:PassIndicatorType.DA>/g, obj, "DA", base.to_string, sub, context);

            bucket = context.parsed.PassIndicatorType;
            if (null == bucket)
                context.parsed.PassIndicatorType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Action type associated with an ActionRequest against a ParticipantInterfaces::Trade.
         *
         */
        function parse_ActionType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ActionType";
            /**
             * Cancel a trade.
             *
             */
            base.parse_element (/<cim:ActionType.CANCEL>([\s\S]*?)<\/cim:ActionType.CANCEL>/g, obj, "CANCEL", base.to_string, sub, context);

            bucket = context.parsed.ActionType;
            if (null == bucket)
                context.parsed.ActionType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Market results binding constraint types.
         *
         */
        function parse_ResultsConstraintType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ResultsConstraintType";
            /**
             * Flowgate actual base case
             *
             */
            base.parse_element (/<cim:ResultsConstraintType.FG_act>([\s\S]*?)<\/cim:ResultsConstraintType.FG_act>/g, obj, "FG_act", base.to_string, sub, context);

            /**
             * Contingency.
             *
             */
            base.parse_element (/<cim:ResultsConstraintType.Contingency>([\s\S]*?)<\/cim:ResultsConstraintType.Contingency>/g, obj, "Contingency", base.to_string, sub, context);

            /**
             * Interface.
             *
             */
            base.parse_element (/<cim:ResultsConstraintType.Interface>([\s\S]*?)<\/cim:ResultsConstraintType.Interface>/g, obj, "Interface", base.to_string, sub, context);

            /**
             * Actual.
             *
             */
            base.parse_element (/<cim:ResultsConstraintType.Actual>([\s\S]*?)<\/cim:ResultsConstraintType.Actual>/g, obj, "Actual", base.to_string, sub, context);

            bucket = context.parsed.ResultsConstraintType;
            if (null == bucket)
                context.parsed.ResultsConstraintType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Specifies the direction of energy flow in the flowgate.
         *
         */
        function parse_FlowDirectionType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "FlowDirectionType";
            /**
             * Forward direction.
             *
             */
            base.parse_element (/<cim:FlowDirectionType.Forward>([\s\S]*?)<\/cim:FlowDirectionType.Forward>/g, obj, "Forward", base.to_string, sub, context);

            /**
             * Reverse direction.
             *
             */
            base.parse_element (/<cim:FlowDirectionType.Reverse>([\s\S]*?)<\/cim:FlowDirectionType.Reverse>/g, obj, "Reverse", base.to_string, sub, context);

            bucket = context.parsed.FlowDirectionType;
            if (null == bucket)
                context.parsed.FlowDirectionType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
         * Bio Gas (Landfill, Sewage, Digester, etc.)
         * Biomass
         * Coal
         * DIST
         * Natural Gas
         * Geothermal
         * HRCV
         * None
         * Nuclear
         * Oil
         * Other
         * Solar
         * Waste to Energy
         * Water
         *
         * Wind
         *
         */
        function parse_FuelSource (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "FuelSource";
            /**
             * Natural Gas
             *
             */
            base.parse_element (/<cim:FuelSource.NG>([\s\S]*?)<\/cim:FuelSource.NG>/g, obj, "NG", base.to_string, sub, context);

            /**
             * Non-Natural Gas
             *
             */
            base.parse_element (/<cim:FuelSource.NNG>([\s\S]*?)<\/cim:FuelSource.NNG>/g, obj, "NNG", base.to_string, sub, context);

            /**
             * Bio Gas (Landfill, Sewage, Digester, etc.)
             *
             */
            base.parse_element (/<cim:FuelSource.BGAS>([\s\S]*?)<\/cim:FuelSource.BGAS>/g, obj, "BGAS", base.to_string, sub, context);

            /**
             * Biomass
             *
             */
            base.parse_element (/<cim:FuelSource.BIOM>([\s\S]*?)<\/cim:FuelSource.BIOM>/g, obj, "BIOM", base.to_string, sub, context);

            /**
             * Coal
             *
             */
            base.parse_element (/<cim:FuelSource.COAL>([\s\S]*?)<\/cim:FuelSource.COAL>/g, obj, "COAL", base.to_string, sub, context);

            base.parse_element (/<cim:FuelSource.DIST>([\s\S]*?)<\/cim:FuelSource.DIST>/g, obj, "DIST", base.to_string, sub, context);

            base.parse_element (/<cim:FuelSource.GAS>([\s\S]*?)<\/cim:FuelSource.GAS>/g, obj, "GAS", base.to_string, sub, context);

            /**
             * GeoThermal
             *
             */
            base.parse_element (/<cim:FuelSource.GEOT>([\s\S]*?)<\/cim:FuelSource.GEOT>/g, obj, "GEOT", base.to_string, sub, context);

            base.parse_element (/<cim:FuelSource.HRCV>([\s\S]*?)<\/cim:FuelSource.HRCV>/g, obj, "HRCV", base.to_string, sub, context);

            base.parse_element (/<cim:FuelSource.NONE>([\s\S]*?)<\/cim:FuelSource.NONE>/g, obj, "NONE", base.to_string, sub, context);

            /**
             * Nuclear
             *
             */
            base.parse_element (/<cim:FuelSource.NUCL>([\s\S]*?)<\/cim:FuelSource.NUCL>/g, obj, "NUCL", base.to_string, sub, context);

            base.parse_element (/<cim:FuelSource.OIL>([\s\S]*?)<\/cim:FuelSource.OIL>/g, obj, "OIL", base.to_string, sub, context);

            /**
             * Other
             *
             */
            base.parse_element (/<cim:FuelSource.OTHR>([\s\S]*?)<\/cim:FuelSource.OTHR>/g, obj, "OTHR", base.to_string, sub, context);

            /**
             * Solar
             *
             */
            base.parse_element (/<cim:FuelSource.SOLR>([\s\S]*?)<\/cim:FuelSource.SOLR>/g, obj, "SOLR", base.to_string, sub, context);

            /**
             * Waste to Energy
             *
             */
            base.parse_element (/<cim:FuelSource.WAST>([\s\S]*?)<\/cim:FuelSource.WAST>/g, obj, "WAST", base.to_string, sub, context);

            /**
             * Water
             *
             */
            base.parse_element (/<cim:FuelSource.WATR>([\s\S]*?)<\/cim:FuelSource.WATR>/g, obj, "WATR", base.to_string, sub, context);

            /**
             * Wind
             *
             */
            base.parse_element (/<cim:FuelSource.WIND>([\s\S]*?)<\/cim:FuelSource.WIND>/g, obj, "WIND", base.to_string, sub, context);

            bucket = context.parsed.FuelSource;
            if (null == bucket)
                context.parsed.FuelSource = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Time of Use used by a CRR definition for specifying the time the CRR spans.
         *
         * ON - CRR spans the on peak hours of the day, OFF - CRR spans the off peak hours of the day, 24HR - CRR spans the entire day.
         *
         */
        function parse_TimeOfUse (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TimeOfUse";
            /**
             * Time of use spans only the on peak hours of the day.
             *
             */
            base.parse_element (/<cim:TimeOfUse.ON>([\s\S]*?)<\/cim:TimeOfUse.ON>/g, obj, "ON", base.to_string, sub, context);

            /**
             * Time of use spans only the off peak hours of the day.
             *
             */
            base.parse_element (/<cim:TimeOfUse.OFF>([\s\S]*?)<\/cim:TimeOfUse.OFF>/g, obj, "OFF", base.to_string, sub, context);

            /**
             * Time of use spans the entire day, 24 hours.
             *
             */
            base.parse_element (/<cim:TimeOfUse.24HR>([\s\S]*?)<\/cim:TimeOfUse.24HR>/g, obj, "24HR", base.to_string, sub, context);

            bucket = context.parsed.TimeOfUse;
            if (null == bucket)
                context.parsed.TimeOfUse = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
         * Passed
         * Failed
         * Disabled
         *
         * Skipped
         *
         */
        function parse_MPMTestOutcome (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MPMTestOutcome";
            /**
             * Passed
             *
             */
            base.parse_element (/<cim:MPMTestOutcome.P>([\s\S]*?)<\/cim:MPMTestOutcome.P>/g, obj, "P", base.to_string, sub, context);

            /**
             * Failed
             *
             */
            base.parse_element (/<cim:MPMTestOutcome.F>([\s\S]*?)<\/cim:MPMTestOutcome.F>/g, obj, "F", base.to_string, sub, context);

            /**
             * Disabled
             *
             */
            base.parse_element (/<cim:MPMTestOutcome.D>([\s\S]*?)<\/cim:MPMTestOutcome.D>/g, obj, "D", base.to_string, sub, context);

            /**
             * Skipped
             *
             */
            base.parse_element (/<cim:MPMTestOutcome.S>([\s\S]*?)<\/cim:MPMTestOutcome.S>/g, obj, "S", base.to_string, sub, context);

            bucket = context.parsed.MPMTestOutcome;
            if (null == bucket)
                context.parsed.MPMTestOutcome = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
         * 0: ignore ramping limits,
         * 1: 20-minute ramping rule,
         *
         * 2: 60-minute ramping rule
         *
         */
        function parse_RampModeType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "RampModeType";
            /**
             * Ignore ramping limits
             *
             */
            base.parse_element (/<cim:RampModeType.0>([\s\S]*?)<\/cim:RampModeType.0>/g, obj, "0", base.to_string, sub, context);

            /**
             * 20-minute ramping rule,
             *
             */
            base.parse_element (/<cim:RampModeType.1>([\s\S]*?)<\/cim:RampModeType.1>/g, obj, "1", base.to_string, sub, context);

            /**
             * 60-minute ramping rule
             *
             */
            base.parse_element (/<cim:RampModeType.2>([\s\S]*?)<\/cim:RampModeType.2>/g, obj, "2", base.to_string, sub, context);

            bucket = context.parsed.RampModeType;
            if (null == bucket)
                context.parsed.RampModeType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
         *
         * Energy, Reg Up, Reg Down, Spin Reserve, Nonspin Reserve, RUC, Load Folloing Up, and Load Following Down.
         *
         */
        function parse_MarketProductType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketProductType";
            /**
             * energy type
             *
             */
            base.parse_element (/<cim:MarketProductType.EN>([\s\S]*?)<\/cim:MarketProductType.EN>/g, obj, "EN", base.to_string, sub, context);

            /**
             * regulation up
             *
             */
            base.parse_element (/<cim:MarketProductType.RU>([\s\S]*?)<\/cim:MarketProductType.RU>/g, obj, "RU", base.to_string, sub, context);

            /**
             * regulation down
             *
             */
            base.parse_element (/<cim:MarketProductType.RD>([\s\S]*?)<\/cim:MarketProductType.RD>/g, obj, "RD", base.to_string, sub, context);

            /**
             * spinning reserve
             *
             */
            base.parse_element (/<cim:MarketProductType.SR>([\s\S]*?)<\/cim:MarketProductType.SR>/g, obj, "SR", base.to_string, sub, context);

            /**
             * non spinning reserve
             *
             */
            base.parse_element (/<cim:MarketProductType.NR>([\s\S]*?)<\/cim:MarketProductType.NR>/g, obj, "NR", base.to_string, sub, context);

            /**
             * Residual Unit Commitment
             *
             */
            base.parse_element (/<cim:MarketProductType.RC>([\s\S]*?)<\/cim:MarketProductType.RC>/g, obj, "RC", base.to_string, sub, context);

            /**
             * Load following up
             *
             */
            base.parse_element (/<cim:MarketProductType.LFU>([\s\S]*?)<\/cim:MarketProductType.LFU>/g, obj, "LFU", base.to_string, sub, context);

            /**
             * Load following down
             *
             */
            base.parse_element (/<cim:MarketProductType.LFD>([\s\S]*?)<\/cim:MarketProductType.LFD>/g, obj, "LFD", base.to_string, sub, context);

            /**
             * Regulation
             *
             */
            base.parse_element (/<cim:MarketProductType.REG>([\s\S]*?)<\/cim:MarketProductType.REG>/g, obj, "REG", base.to_string, sub, context);

            bucket = context.parsed.MarketProductType;
            if (null == bucket)
                context.parsed.MarketProductType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Market power mitigation test identifier type, for example:
         * 
         * 1 ? Global Price Test
         * 2 ? Global Conduct Test
         * 3 ? Global Impact Test
         * 4 ? Local Price Test
         * 5 ? Local Conduct Test
         *
         * 6 ? Local Impact Test
         *
         */
        function parse_MPMTestIdentifierType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MPMTestIdentifierType";
            /**
             * 1 - Global Price Test.
             *
             */
            base.parse_element (/<cim:MPMTestIdentifierType.1>([\s\S]*?)<\/cim:MPMTestIdentifierType.1>/g, obj, "1", base.to_string, sub, context);

            /**
             * 2 - Global Conduct Test.
             *
             */
            base.parse_element (/<cim:MPMTestIdentifierType.2>([\s\S]*?)<\/cim:MPMTestIdentifierType.2>/g, obj, "2", base.to_string, sub, context);

            /**
             * 3 - Global Impact Test.
             *
             */
            base.parse_element (/<cim:MPMTestIdentifierType.3>([\s\S]*?)<\/cim:MPMTestIdentifierType.3>/g, obj, "3", base.to_string, sub, context);

            /**
             * 4 - Local Price Test.
             *
             */
            base.parse_element (/<cim:MPMTestIdentifierType.4>([\s\S]*?)<\/cim:MPMTestIdentifierType.4>/g, obj, "4", base.to_string, sub, context);

            /**
             * 5 - Local Conduct Test.
             *
             */
            base.parse_element (/<cim:MPMTestIdentifierType.5>([\s\S]*?)<\/cim:MPMTestIdentifierType.5>/g, obj, "5", base.to_string, sub, context);

            /**
             * 6 - Local Impact Test.
             *
             */
            base.parse_element (/<cim:MPMTestIdentifierType.6>([\s\S]*?)<\/cim:MPMTestIdentifierType.6>/g, obj, "6", base.to_string, sub, context);

            bucket = context.parsed.MPMTestIdentifierType;
            if (null == bucket)
                context.parsed.MPMTestIdentifierType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Indication of which type of self schedule is being referenced.
         *
         */
        function parse_SelfSchedReferenceType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SelfSchedReferenceType";
            /**
             * Existing transmission contract.
             *
             */
            base.parse_element (/<cim:SelfSchedReferenceType.ETC>([\s\S]*?)<\/cim:SelfSchedReferenceType.ETC>/g, obj, "ETC", base.to_string, sub, context);

            /**
             * Transmission ownership right.
             *
             */
            base.parse_element (/<cim:SelfSchedReferenceType.TOR>([\s\S]*?)<\/cim:SelfSchedReferenceType.TOR>/g, obj, "TOR", base.to_string, sub, context);

            bucket = context.parsed.SelfSchedReferenceType;
            if (null == bucket)
                context.parsed.SelfSchedReferenceType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Load forecast zone types.
         *
         */
        function parse_LoadForecastType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "LoadForecastType";
            /**
             * Load forecast zone.
             *
             */
            base.parse_element (/<cim:LoadForecastType.LFZ>([\s\S]*?)<\/cim:LoadForecastType.LFZ>/g, obj, "LFZ", base.to_string, sub, context);

            /**
             * Metered sub system zone.
             *
             */
            base.parse_element (/<cim:LoadForecastType.LZMS>([\s\S]*?)<\/cim:LoadForecastType.LZMS>/g, obj, "LZMS", base.to_string, sub, context);

            bucket = context.parsed.LoadForecastType;
            if (null == bucket)
                context.parsed.LoadForecastType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Trade type.
         *
         */
        function parse_TradeType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TradeType";
            /**
             * InterSC Trade.
             *
             */
            base.parse_element (/<cim:TradeType.IST>([\s\S]*?)<\/cim:TradeType.IST>/g, obj, "IST", base.to_string, sub, context);

            /**
             * Ancillary Services Trade.
             *
             */
            base.parse_element (/<cim:TradeType.AST>([\s\S]*?)<\/cim:TradeType.AST>/g, obj, "AST", base.to_string, sub, context);

            /**
             * Unit Commitment Trade.
             *
             */
            base.parse_element (/<cim:TradeType.UCT>([\s\S]*?)<\/cim:TradeType.UCT>/g, obj, "UCT", base.to_string, sub, context);

            bucket = context.parsed.TradeType;
            if (null == bucket)
                context.parsed.TradeType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Execution types of Market Runs
         *
         */
        function parse_ExecutionType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ExecutionType";
            /**
             * Day Ahead
             *
             */
            base.parse_element (/<cim:ExecutionType.DA>([\s\S]*?)<\/cim:ExecutionType.DA>/g, obj, "DA", base.to_string, sub, context);

            /**
             * Real TIme Hour Ahead Execution
             *
             */
            base.parse_element (/<cim:ExecutionType.HASP>([\s\S]*?)<\/cim:ExecutionType.HASP>/g, obj, "HASP", base.to_string, sub, context);

            /**
             * Real Time Pre-dispatch
             *
             */
            base.parse_element (/<cim:ExecutionType.RTPD>([\s\S]*?)<\/cim:ExecutionType.RTPD>/g, obj, "RTPD", base.to_string, sub, context);

            /**
             * Real Time Dispatch
             *
             */
            base.parse_element (/<cim:ExecutionType.RTD>([\s\S]*?)<\/cim:ExecutionType.RTD>/g, obj, "RTD", base.to_string, sub, context);

            bucket = context.parsed.ExecutionType;
            if (null == bucket)
                context.parsed.ExecutionType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Locational AS Flags indicating whether the Upper or Lower Bound limit of the AS regional procurment is binding
         *
         */
        function parse_ResourceLimitIndicator (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ResourceLimitIndicator";
            base.parse_element (/<cim:ResourceLimitIndicator.UPPER>([\s\S]*?)<\/cim:ResourceLimitIndicator.UPPER>/g, obj, "UPPER", base.to_string, sub, context);

            base.parse_element (/<cim:ResourceLimitIndicator.LOWER>([\s\S]*?)<\/cim:ResourceLimitIndicator.LOWER>/g, obj, "LOWER", base.to_string, sub, context);

            bucket = context.parsed.ResourceLimitIndicator;
            if (null == bucket)
                context.parsed.ResourceLimitIndicator = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
         * 'Y' - Participates in both LMPM and SMPM
         * 'N' - Not included in LMP price measures
         * 'S' - Participates in SMPM price measures
         *
         * 'L' - Participates in LMPM price measures
         *
         */
        function parse_ParticipationCategoryMPM (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ParticipationCategoryMPM";
            base.parse_element (/<cim:ParticipationCategoryMPM.Y>([\s\S]*?)<\/cim:ParticipationCategoryMPM.Y>/g, obj, "Y", base.to_string, sub, context);

            base.parse_element (/<cim:ParticipationCategoryMPM.N>([\s\S]*?)<\/cim:ParticipationCategoryMPM.N>/g, obj, "N", base.to_string, sub, context);

            base.parse_element (/<cim:ParticipationCategoryMPM.S>([\s\S]*?)<\/cim:ParticipationCategoryMPM.S>/g, obj, "S", base.to_string, sub, context);

            base.parse_element (/<cim:ParticipationCategoryMPM.L>([\s\S]*?)<\/cim:ParticipationCategoryMPM.L>/g, obj, "L", base.to_string, sub, context);

            bucket = context.parsed.ParticipationCategoryMPM;
            if (null == bucket)
                context.parsed.ParticipationCategoryMPM = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of bill media.
         *
         */
        function parse_MktBillMediaKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MktBillMediaKind";
            base.parse_element (/<cim:MktBillMediaKind.paper>([\s\S]*?)<\/cim:MktBillMediaKind.paper>/g, obj, "paper", base.to_string, sub, context);

            base.parse_element (/<cim:MktBillMediaKind.electronic>([\s\S]*?)<\/cim:MktBillMediaKind.electronic>/g, obj, "electronic", base.to_string, sub, context);

            base.parse_element (/<cim:MktBillMediaKind.other>([\s\S]*?)<\/cim:MktBillMediaKind.other>/g, obj, "other", base.to_string, sub, context);

            bucket = context.parsed.MktBillMediaKind;
            if (null == bucket)
                context.parsed.MktBillMediaKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
         * 'S' - Mitigated by SMPM because of "misconduct"
         * 'L; - Mitigated by LMPM because of "misconduct"
         * 'R' - Modified by LMPM because of RMR rules
         * 'M' - Mitigated because of "misconduct" both by SMPM and LMPM
         * 'B' - Mitigated because of "misconduct" both by SMPM and modified by LMLM because of RMR rules
         *
         * 'O' - original
         *
         */
        function parse_BidMitigationStatus (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "BidMitigationStatus";
            base.parse_element (/<cim:BidMitigationStatus.S>([\s\S]*?)<\/cim:BidMitigationStatus.S>/g, obj, "S", base.to_string, sub, context);

            base.parse_element (/<cim:BidMitigationStatus.L>([\s\S]*?)<\/cim:BidMitigationStatus.L>/g, obj, "L", base.to_string, sub, context);

            base.parse_element (/<cim:BidMitigationStatus.R>([\s\S]*?)<\/cim:BidMitigationStatus.R>/g, obj, "R", base.to_string, sub, context);

            base.parse_element (/<cim:BidMitigationStatus.M>([\s\S]*?)<\/cim:BidMitigationStatus.M>/g, obj, "M", base.to_string, sub, context);

            base.parse_element (/<cim:BidMitigationStatus.B>([\s\S]*?)<\/cim:BidMitigationStatus.B>/g, obj, "B", base.to_string, sub, context);

            base.parse_element (/<cim:BidMitigationStatus.O>([\s\S]*?)<\/cim:BidMitigationStatus.O>/g, obj, "O", base.to_string, sub, context);

            bucket = context.parsed.BidMitigationStatus;
            if (null == bucket)
                context.parsed.BidMitigationStatus = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Self schedule breakdown type.
         *
         */
        function parse_SelfScheduleBreakdownType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SelfScheduleBreakdownType";
            /**
             * Existing transmission contract.
             *
             */
            base.parse_element (/<cim:SelfScheduleBreakdownType.ETC>([\s\S]*?)<\/cim:SelfScheduleBreakdownType.ETC>/g, obj, "ETC", base.to_string, sub, context);

            /**
             * Transmission ownership right.
             *
             */
            base.parse_element (/<cim:SelfScheduleBreakdownType.TOR>([\s\S]*?)<\/cim:SelfScheduleBreakdownType.TOR>/g, obj, "TOR", base.to_string, sub, context);

            /**
             * Low price taker.
             *
             */
            base.parse_element (/<cim:SelfScheduleBreakdownType.LPT>([\s\S]*?)<\/cim:SelfScheduleBreakdownType.LPT>/g, obj, "LPT", base.to_string, sub, context);

            bucket = context.parsed.SelfScheduleBreakdownType;
            if (null == bucket)
                context.parsed.SelfScheduleBreakdownType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of Market account.
         *
         */
        function parse_MktAccountKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MktAccountKind";
            base.parse_element (/<cim:MktAccountKind.normal>([\s\S]*?)<\/cim:MktAccountKind.normal>/g, obj, "normal", base.to_string, sub, context);

            base.parse_element (/<cim:MktAccountKind.reversal>([\s\S]*?)<\/cim:MktAccountKind.reversal>/g, obj, "reversal", base.to_string, sub, context);

            base.parse_element (/<cim:MktAccountKind.statistical>([\s\S]*?)<\/cim:MktAccountKind.statistical>/g, obj, "statistical", base.to_string, sub, context);

            base.parse_element (/<cim:MktAccountKind.estimate>([\s\S]*?)<\/cim:MktAccountKind.estimate>/g, obj, "estimate", base.to_string, sub, context);

            bucket = context.parsed.MktAccountKind;
            if (null == bucket)
                context.parsed.MktAccountKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Congestion Revenue Rights category types
         *
         */
        function parse_CRRCategoryType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CRRCategoryType";
            /**
             * Network Service
             *
             */
            base.parse_element (/<cim:CRRCategoryType.NSR>([\s\S]*?)<\/cim:CRRCategoryType.NSR>/g, obj, "NSR", base.to_string, sub, context);

            /**
             * Point to Point
             *
             */
            base.parse_element (/<cim:CRRCategoryType.PTP>([\s\S]*?)<\/cim:CRRCategoryType.PTP>/g, obj, "PTP", base.to_string, sub, context);

            bucket = context.parsed.CRRCategoryType;
            if (null == bucket)
                context.parsed.CRRCategoryType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Types of resource registration status, for example:
         * 
         * Active
         * Mothballed
         * Planned
         *
         * Decommissioned
         *
         */
        function parse_ResourceRegistrationStatus (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ResourceRegistrationStatus";
            /**
             * Resource registration is active
             *
             */
            base.parse_element (/<cim:ResourceRegistrationStatus.Active>([\s\S]*?)<\/cim:ResourceRegistrationStatus.Active>/g, obj, "Active", base.to_string, sub, context);

            /**
             * Registration status is in the planning stage
             *
             */
            base.parse_element (/<cim:ResourceRegistrationStatus.Planned>([\s\S]*?)<\/cim:ResourceRegistrationStatus.Planned>/g, obj, "Planned", base.to_string, sub, context);

            /**
             * Resource registration has been suspended
             *
             */
            base.parse_element (/<cim:ResourceRegistrationStatus.Mothballed>([\s\S]*?)<\/cim:ResourceRegistrationStatus.Mothballed>/g, obj, "Mothballed", base.to_string, sub, context);

            /**
             * Resource registration status is decommissioned
             *
             */
            base.parse_element (/<cim:ResourceRegistrationStatus.Decommissioned>([\s\S]*?)<\/cim:ResourceRegistrationStatus.Decommissioned>/g, obj, "Decommissioned", base.to_string, sub, context);

            bucket = context.parsed.ResourceRegistrationStatus;
            if (null == bucket)
                context.parsed.ResourceRegistrationStatus = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * ON
         *
         * OFF
         *
         */
        function parse_OnOff (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OnOff";
            base.parse_element (/<cim:OnOff.ON>([\s\S]*?)<\/cim:OnOff.ON>/g, obj, "ON", base.to_string, sub, context);

            base.parse_element (/<cim:OnOff.OFF>([\s\S]*?)<\/cim:OnOff.OFF>/g, obj, "OFF", base.to_string, sub, context);

            bucket = context.parsed.OnOff;
            if (null == bucket)
                context.parsed.OnOff = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Role types an organisation can play with respect to a congestion revenue right.
         *
         */
        function parse_CRRRoleType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CRRRoleType";
            base.parse_element (/<cim:CRRRoleType.SELLER>([\s\S]*?)<\/cim:CRRRoleType.SELLER>/g, obj, "SELLER", base.to_string, sub, context);

            base.parse_element (/<cim:CRRRoleType.BUYER>([\s\S]*?)<\/cim:CRRRoleType.BUYER>/g, obj, "BUYER", base.to_string, sub, context);

            base.parse_element (/<cim:CRRRoleType.OWNER>([\s\S]*?)<\/cim:CRRRoleType.OWNER>/g, obj, "OWNER", base.to_string, sub, context);

            bucket = context.parsed.CRRRoleType;
            if (null == bucket)
                context.parsed.CRRRoleType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Aggregated Nodes Types for example:
         * <ul>
         * <li>SYS - System Zone/Region; </li>
         * </ul>
         * <ul>
         * <li>RUC - RUC Zone; </li>
         * </ul>
         * <ul>
         * <li>LFZ - Load Forecast Zone; </li>
         * </ul>
         * <ul>
         * <li>REG - Market Energy/Ancillary Service Region; </li>
         * </ul>
         * <ul>
         * <li>AGR - Aggregate Generation Resource; </li>
         * </ul>
         * <ul>
         * <li>POD - Point of Delivery; </li>
         * </ul>
         * <ul>
         * <li>ALR - Aggregate Load Resource; </li>
         * </ul>
         * <ul>
         * <li>LTAC - Load TransmissionAccessCharge (TAC) Group;</li>
         * </ul>
         * <ul>
         * <li>ACA - Adjacent Control Area</li>
         * </ul>
         * <ul>
         * <li>ASR - Aggregated System Resource</li>
         * </ul>
         * <ul>
         * <li>ECA - Embedded Control Area</li>
         *
         * </ul>
         *
         */
        function parse_AnodeType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AnodeType";
            /**
             * System Zone/Region;
             *
             */
            base.parse_element (/<cim:AnodeType.SYS>([\s\S]*?)<\/cim:AnodeType.SYS>/g, obj, "SYS", base.to_string, sub, context);

            /**
             * RUC Zone
             *
             */
            base.parse_element (/<cim:AnodeType.RUC>([\s\S]*?)<\/cim:AnodeType.RUC>/g, obj, "RUC", base.to_string, sub, context);

            /**
             * Load Forecast Zone
             *
             */
            base.parse_element (/<cim:AnodeType.LFZ>([\s\S]*?)<\/cim:AnodeType.LFZ>/g, obj, "LFZ", base.to_string, sub, context);

            /**
             * Market Energy/Ancillary Service Region;
             *
             */
            base.parse_element (/<cim:AnodeType.REG>([\s\S]*?)<\/cim:AnodeType.REG>/g, obj, "REG", base.to_string, sub, context);

            /**
             * Aggregate Generation Resource;
             *
             */
            base.parse_element (/<cim:AnodeType.AGR>([\s\S]*?)<\/cim:AnodeType.AGR>/g, obj, "AGR", base.to_string, sub, context);

            /**
             * Point of Delivery;
             *
             */
            base.parse_element (/<cim:AnodeType.POD>([\s\S]*?)<\/cim:AnodeType.POD>/g, obj, "POD", base.to_string, sub, context);

            /**
             * Aggregate Load Resource;
             *
             */
            base.parse_element (/<cim:AnodeType.ALR>([\s\S]*?)<\/cim:AnodeType.ALR>/g, obj, "ALR", base.to_string, sub, context);

            /**
             * Load TransmissionAccessCharge (TAC) Group;
             *
             */
            base.parse_element (/<cim:AnodeType.LTAC>([\s\S]*?)<\/cim:AnodeType.LTAC>/g, obj, "LTAC", base.to_string, sub, context);

            /**
             * Adjacent Control Area
             *
             */
            base.parse_element (/<cim:AnodeType.ACA>([\s\S]*?)<\/cim:AnodeType.ACA>/g, obj, "ACA", base.to_string, sub, context);

            /**
             * Aggregated System Resource
             *
             */
            base.parse_element (/<cim:AnodeType.ASR>([\s\S]*?)<\/cim:AnodeType.ASR>/g, obj, "ASR", base.to_string, sub, context);

            /**
             * Embedded Control Area
             *
             */
            base.parse_element (/<cim:AnodeType.ECA>([\s\S]*?)<\/cim:AnodeType.ECA>/g, obj, "ECA", base.to_string, sub, context);

            bucket = context.parsed.AnodeType;
            if (null == bucket)
                context.parsed.AnodeType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Ramp rate curve type.
         *
         */
        function parse_RampRateType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "RampRateType";
            /**
             * Operational ramp rate.
             *
             */
            base.parse_element (/<cim:RampRateType.OP>([\s\S]*?)<\/cim:RampRateType.OP>/g, obj, "OP", base.to_string, sub, context);

            /**
             * Regulating ramp rate.
             *
             */
            base.parse_element (/<cim:RampRateType.REG>([\s\S]*?)<\/cim:RampRateType.REG>/g, obj, "REG", base.to_string, sub, context);

            /**
             * Operating reserve ramp rate.
             *
             */
            base.parse_element (/<cim:RampRateType.OP_RES>([\s\S]*?)<\/cim:RampRateType.OP_RES>/g, obj, "OP_RES", base.to_string, sub, context);

            /**
             * Load drop ramp rate.
             *
             */
            base.parse_element (/<cim:RampRateType.LD_DROP>([\s\S]*?)<\/cim:RampRateType.LD_DROP>/g, obj, "LD_DROP", base.to_string, sub, context);

            /**
             * Load pick up rate.
             *
             */
            base.parse_element (/<cim:RampRateType.LD_PICKUP>([\s\S]*?)<\/cim:RampRateType.LD_PICKUP>/g, obj, "LD_PICKUP", base.to_string, sub, context);

            /**
             * Intertie ramp rate.
             *
             */
            base.parse_element (/<cim:RampRateType.INTERTIE>([\s\S]*?)<\/cim:RampRateType.INTERTIE>/g, obj, "INTERTIE", base.to_string, sub, context);

            bucket = context.parsed.RampRateType;
            if (null == bucket)
                context.parsed.RampRateType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
         * WHOLESALE
         * RETAIL
         *
         * BOTH
         *
         */
        function parse_EnergyPriceIndexType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "EnergyPriceIndexType";
            base.parse_element (/<cim:EnergyPriceIndexType.WHOLESALE>([\s\S]*?)<\/cim:EnergyPriceIndexType.WHOLESALE>/g, obj, "WHOLESALE", base.to_string, sub, context);

            base.parse_element (/<cim:EnergyPriceIndexType.RETAIL>([\s\S]*?)<\/cim:EnergyPriceIndexType.RETAIL>/g, obj, "RETAIL", base.to_string, sub, context);

            base.parse_element (/<cim:EnergyPriceIndexType.BOTH>([\s\S]*?)<\/cim:EnergyPriceIndexType.BOTH>/g, obj, "BOTH", base.to_string, sub, context);

            bucket = context.parsed.EnergyPriceIndexType;
            if (null == bucket)
                context.parsed.EnergyPriceIndexType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Aggregate Node Types for example:
         * AG -  Aggregated Generation
         * CPZ -  Custom Price Zone
         * DPZ -  Default Price Zone
         * LAP - Load Aggregation Point
         * TH -  Trading  Hub
         * SYS - System Zone
         * CA - Control Area
         * 
         * GA - generic aggregation
         * EHV - 500 kV
         * GH - generic hub
         * ZN - zone
         * INT - Interface
         *
         * BUS - Bus
         *
         */
        function parse_ApnodeType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ApnodeType";
            /**
             * Aggregated Generation
             *
             */
            base.parse_element (/<cim:ApnodeType.AG>([\s\S]*?)<\/cim:ApnodeType.AG>/g, obj, "AG", base.to_string, sub, context);

            /**
             * Custom Price Zone
             *
             */
            base.parse_element (/<cim:ApnodeType.CPZ>([\s\S]*?)<\/cim:ApnodeType.CPZ>/g, obj, "CPZ", base.to_string, sub, context);

            /**
             * Default Price Zone
             *
             */
            base.parse_element (/<cim:ApnodeType.DPZ>([\s\S]*?)<\/cim:ApnodeType.DPZ>/g, obj, "DPZ", base.to_string, sub, context);

            /**
             * Trading  Hub
             *
             */
            base.parse_element (/<cim:ApnodeType.TH>([\s\S]*?)<\/cim:ApnodeType.TH>/g, obj, "TH", base.to_string, sub, context);

            /**
             * System Zone
             *
             */
            base.parse_element (/<cim:ApnodeType.SYS>([\s\S]*?)<\/cim:ApnodeType.SYS>/g, obj, "SYS", base.to_string, sub, context);

            /**
             * Control Area
             *
             */
            base.parse_element (/<cim:ApnodeType.CA>([\s\S]*?)<\/cim:ApnodeType.CA>/g, obj, "CA", base.to_string, sub, context);

            /**
             * Designated Congestion Area
             *
             */
            base.parse_element (/<cim:ApnodeType.DCA>([\s\S]*?)<\/cim:ApnodeType.DCA>/g, obj, "DCA", base.to_string, sub, context);

            /**
             * generic aggregation
             *
             */
            base.parse_element (/<cim:ApnodeType.GA>([\s\S]*?)<\/cim:ApnodeType.GA>/g, obj, "GA", base.to_string, sub, context);

            /**
             * generic hub
             *
             */
            base.parse_element (/<cim:ApnodeType.GH>([\s\S]*?)<\/cim:ApnodeType.GH>/g, obj, "GH", base.to_string, sub, context);

            /**
             * 500 kV - Extra High Voltage aggregate price nodes
             *
             */
            base.parse_element (/<cim:ApnodeType.EHV>([\s\S]*?)<\/cim:ApnodeType.EHV>/g, obj, "EHV", base.to_string, sub, context);

            /**
             * Zone
             *
             */
            base.parse_element (/<cim:ApnodeType.ZN>([\s\S]*?)<\/cim:ApnodeType.ZN>/g, obj, "ZN", base.to_string, sub, context);

            /**
             * Interface
             *
             */
            base.parse_element (/<cim:ApnodeType.INT>([\s\S]*?)<\/cim:ApnodeType.INT>/g, obj, "INT", base.to_string, sub, context);

            /**
             * Bus
             *
             */
            base.parse_element (/<cim:ApnodeType.BUS>([\s\S]*?)<\/cim:ApnodeType.BUS>/g, obj, "BUS", base.to_string, sub, context);

            bucket = context.parsed.ApnodeType;
            if (null == bucket)
                context.parsed.ApnodeType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
         * 0 - Fixed ramp rate independent of rate function unit MW output
         * 1 - Static ramp rates as a function of unit MW output only
         *
         * 2 - Dynamic ramp rates as a function of unit MW output and ramping time
         *
         */
        function parse_RampCurveType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "RampCurveType";
            /**
             * Fixed ramp rate independent of rate function unit MW output
             *
             */
            base.parse_element (/<cim:RampCurveType.0>([\s\S]*?)<\/cim:RampCurveType.0>/g, obj, "0", base.to_string, sub, context);

            /**
             * Static ramp rates as a function of unit MW output only
             *
             */
            base.parse_element (/<cim:RampCurveType.1>([\s\S]*?)<\/cim:RampCurveType.1>/g, obj, "1", base.to_string, sub, context);

            /**
             * Dynamic ramp rates as a function of unit MW output and ramping time
             *
             */
            base.parse_element (/<cim:RampCurveType.2>([\s\S]*?)<\/cim:RampCurveType.2>/g, obj, "2", base.to_string, sub, context);

            bucket = context.parsed.RampCurveType;
            if (null == bucket)
                context.parsed.RampCurveType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Bid self schedule type has two types as the required output of requirements and qualified pre-dispatch.
         *
         */
        function parse_BidTypeRMR (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "BidTypeRMR";
            /**
             * Qualified pre-dispatch bid self schedule type.
             *
             */
            base.parse_element (/<cim:BidTypeRMR.REQUIREMENTS>([\s\S]*?)<\/cim:BidTypeRMR.REQUIREMENTS>/g, obj, "REQUIREMENTS", base.to_string, sub, context);

            /**
             * Output of requirements bid self schedule type.
             *
             */
            base.parse_element (/<cim:BidTypeRMR.QUALIFIED_PREDISPATCH>([\s\S]*?)<\/cim:BidTypeRMR.QUALIFIED_PREDISPATCH>/g, obj, "QUALIFIED_PREDISPATCH", base.to_string, sub, context);

            bucket = context.parsed.BidTypeRMR;
            if (null == bucket)
                context.parsed.BidTypeRMR = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
         * NON_RESPONSE
         * ACCEPT
         * DECLINE
         *
         * PARTIAL.
         *
         */
        function parse_DispatchResponseType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "DispatchResponseType";
            base.parse_element (/<cim:DispatchResponseType.NON_RESPONSE>([\s\S]*?)<\/cim:DispatchResponseType.NON_RESPONSE>/g, obj, "NON_RESPONSE", base.to_string, sub, context);

            base.parse_element (/<cim:DispatchResponseType.ACCEPT>([\s\S]*?)<\/cim:DispatchResponseType.ACCEPT>/g, obj, "ACCEPT", base.to_string, sub, context);

            base.parse_element (/<cim:DispatchResponseType.DECLINE>([\s\S]*?)<\/cim:DispatchResponseType.DECLINE>/g, obj, "DECLINE", base.to_string, sub, context);

            base.parse_element (/<cim:DispatchResponseType.PARTIAL>([\s\S]*?)<\/cim:DispatchResponseType.PARTIAL>/g, obj, "PARTIAL", base.to_string, sub, context);

            bucket = context.parsed.DispatchResponseType;
            if (null == bucket)
                context.parsed.DispatchResponseType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of invoice line item.
         *
         */
        function parse_MktInvoiceLineItemKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MktInvoiceLineItemKind";
            base.parse_element (/<cim:MktInvoiceLineItemKind.initial>([\s\S]*?)<\/cim:MktInvoiceLineItemKind.initial>/g, obj, "initial", base.to_string, sub, context);

            base.parse_element (/<cim:MktInvoiceLineItemKind.recalculation>([\s\S]*?)<\/cim:MktInvoiceLineItemKind.recalculation>/g, obj, "recalculation", base.to_string, sub, context);

            base.parse_element (/<cim:MktInvoiceLineItemKind.other>([\s\S]*?)<\/cim:MktInvoiceLineItemKind.other>/g, obj, "other", base.to_string, sub, context);

            bucket = context.parsed.MktInvoiceLineItemKind;
            if (null == bucket)
                context.parsed.MktInvoiceLineItemKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Binding constraint results limit type, For example:
         * MAXIMUM
         *
         * MINIMUM
         *
         */
        function parse_ConstraintLimitType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ConstraintLimitType";
            base.parse_element (/<cim:ConstraintLimitType.MAXIMUM>([\s\S]*?)<\/cim:ConstraintLimitType.MAXIMUM>/g, obj, "MAXIMUM", base.to_string, sub, context);

            base.parse_element (/<cim:ConstraintLimitType.MINIMUM>([\s\S]*?)<\/cim:ConstraintLimitType.MINIMUM>/g, obj, "MINIMUM", base.to_string, sub, context);

            bucket = context.parsed.ConstraintLimitType;
            if (null == bucket)
                context.parsed.ConstraintLimitType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Resource capacity type.
         *
         */
        function parse_ResourceCapacityType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ResourceCapacityType";
            /**
             * Regulation Up.
             *
             */
            base.parse_element (/<cim:ResourceCapacityType.RU>([\s\S]*?)<\/cim:ResourceCapacityType.RU>/g, obj, "RU", base.to_string, sub, context);

            /**
             * Regulation Down.
             *
             */
            base.parse_element (/<cim:ResourceCapacityType.RD>([\s\S]*?)<\/cim:ResourceCapacityType.RD>/g, obj, "RD", base.to_string, sub, context);

            /**
             * Spinning reserve.
             *
             */
            base.parse_element (/<cim:ResourceCapacityType.SR>([\s\S]*?)<\/cim:ResourceCapacityType.SR>/g, obj, "SR", base.to_string, sub, context);

            /**
             * Non spinning reserve.
             *
             */
            base.parse_element (/<cim:ResourceCapacityType.NR>([\s\S]*?)<\/cim:ResourceCapacityType.NR>/g, obj, "NR", base.to_string, sub, context);

            /**
             * Must Offer.
             *
             */
            base.parse_element (/<cim:ResourceCapacityType.MO>([\s\S]*?)<\/cim:ResourceCapacityType.MO>/g, obj, "MO", base.to_string, sub, context);

            /**
             * Flexible Offer.
             *
             */
            base.parse_element (/<cim:ResourceCapacityType.FO>([\s\S]*?)<\/cim:ResourceCapacityType.FO>/g, obj, "FO", base.to_string, sub, context);

            /**
             * Resource Adequacy.
             *
             */
            base.parse_element (/<cim:ResourceCapacityType.RA>([\s\S]*?)<\/cim:ResourceCapacityType.RA>/g, obj, "RA", base.to_string, sub, context);

            /**
             * Reliability Must Run.
             *
             */
            base.parse_element (/<cim:ResourceCapacityType.RMR>([\s\S]*?)<\/cim:ResourceCapacityType.RMR>/g, obj, "RMR", base.to_string, sub, context);

            bucket = context.parsed.ResourceCapacityType;
            if (null == bucket)
                context.parsed.ResourceCapacityType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Circuit Breaker Status (closed or open) of the circuit breaker.
         *
         */
        function parse_SwitchStatusType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SwitchStatusType";
            /**
             * Closed status.
             *
             */
            base.parse_element (/<cim:SwitchStatusType.Closed>([\s\S]*?)<\/cim:SwitchStatusType.Closed>/g, obj, "Closed", base.to_string, sub, context);

            /**
             * Open status.
             *
             */
            base.parse_element (/<cim:SwitchStatusType.Open>([\s\S]*?)<\/cim:SwitchStatusType.Open>/g, obj, "Open", base.to_string, sub, context);

            bucket = context.parsed.SwitchStatusType;
            if (null == bucket)
                context.parsed.SwitchStatusType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Transmission Contract Right type -for example:
         *
         * individual or chain of contract rights
         *
         */
        function parse_TRType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TRType";
            /**
             * TR chain
             *
             */
            base.parse_element (/<cim:TRType.CHAIN>([\s\S]*?)<\/cim:TRType.CHAIN>/g, obj, "CHAIN", base.to_string, sub, context);

            /**
             * Individual TR
             *
             */
            base.parse_element (/<cim:TRType.INDIVIDUAL>([\s\S]*?)<\/cim:TRType.INDIVIDUAL>/g, obj, "INDIVIDUAL", base.to_string, sub, context);

            bucket = context.parsed.TRType;
            if (null == bucket)
                context.parsed.TRType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Congestion Revenue Right hedge type
         *
         */
        function parse_CRRHedgeType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CRRHedgeType";
            base.parse_element (/<cim:CRRHedgeType.OBLIGATION>([\s\S]*?)<\/cim:CRRHedgeType.OBLIGATION>/g, obj, "OBLIGATION", base.to_string, sub, context);

            base.parse_element (/<cim:CRRHedgeType.OPTION>([\s\S]*?)<\/cim:CRRHedgeType.OPTION>/g, obj, "OPTION", base.to_string, sub, context);

            bucket = context.parsed.CRRHedgeType;
            if (null == bucket)
                context.parsed.CRRHedgeType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * MPM Purpose Flag, for example:
         * 
         * Nature of threshold data:
         * 'M' - Mitigation threshold
         *
         * 'R' - Reporting threshold
         *
         */
        function parse_PurposeFlagType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PurposeFlagType";
            base.parse_element (/<cim:PurposeFlagType.M>([\s\S]*?)<\/cim:PurposeFlagType.M>/g, obj, "M", base.to_string, sub, context);

            base.parse_element (/<cim:PurposeFlagType.R>([\s\S]*?)<\/cim:PurposeFlagType.R>/g, obj, "R", base.to_string, sub, context);

            bucket = context.parsed.PurposeFlagType;
            if (null == bucket)
                context.parsed.PurposeFlagType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Constraint Ramp type
         *
         */
        function parse_ConstraintRampType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ConstraintRampType";
            base.parse_element (/<cim:ConstraintRampType.FAST>([\s\S]*?)<\/cim:ConstraintRampType.FAST>/g, obj, "FAST", base.to_string, sub, context);

            base.parse_element (/<cim:ConstraintRampType.SLOW>([\s\S]*?)<\/cim:ConstraintRampType.SLOW>/g, obj, "SLOW", base.to_string, sub, context);

            bucket = context.parsed.ConstraintRampType;
            if (null == bucket)
                context.parsed.ConstraintRampType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Type of the CRR, from the possible type definitions in the CRR System (e.g. 'LSE', 'ETC').
         *
         */
        function parse_CRRSegmentType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CRRSegmentType";
            base.parse_element (/<cim:CRRSegmentType.AUC>([\s\S]*?)<\/cim:CRRSegmentType.AUC>/g, obj, "AUC", base.to_string, sub, context);

            base.parse_element (/<cim:CRRSegmentType.CAP>([\s\S]*?)<\/cim:CRRSegmentType.CAP>/g, obj, "CAP", base.to_string, sub, context);

            base.parse_element (/<cim:CRRSegmentType.CF>([\s\S]*?)<\/cim:CRRSegmentType.CF>/g, obj, "CF", base.to_string, sub, context);

            /**
             * Converted rights.
             *
             */
            base.parse_element (/<cim:CRRSegmentType.CVR>([\s\S]*?)<\/cim:CRRSegmentType.CVR>/g, obj, "CVR", base.to_string, sub, context);

            /**
             * Existing Transmission Contract.
             *
             */
            base.parse_element (/<cim:CRRSegmentType.ETC>([\s\S]*?)<\/cim:CRRSegmentType.ETC>/g, obj, "ETC", base.to_string, sub, context);

            /**
             * Load Serving Entity.
             *
             */
            base.parse_element (/<cim:CRRSegmentType.LSE>([\s\S]*?)<\/cim:CRRSegmentType.LSE>/g, obj, "LSE", base.to_string, sub, context);

            /**
             * Merchant transmission.
             *
             */
            base.parse_element (/<cim:CRRSegmentType.MT>([\s\S]*?)<\/cim:CRRSegmentType.MT>/g, obj, "MT", base.to_string, sub, context);

            /**
             * Transmission Ownership Rights.
             *
             */
            base.parse_element (/<cim:CRRSegmentType.TOR>([\s\S]*?)<\/cim:CRRSegmentType.TOR>/g, obj, "TOR", base.to_string, sub, context);

            bucket = context.parsed.CRRSegmentType;
            if (null == bucket)
                context.parsed.CRRSegmentType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Types used for resource AS qualifications
         *
         */
        function parse_ResourceAncillaryServiceType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ResourceAncillaryServiceType";
            /**
             * Regulation Up
             *
             */
            base.parse_element (/<cim:ResourceAncillaryServiceType.REGUP>([\s\S]*?)<\/cim:ResourceAncillaryServiceType.REGUP>/g, obj, "REGUP", base.to_string, sub, context);

            /**
             * Regulation Down
             *
             */
            base.parse_element (/<cim:ResourceAncillaryServiceType.REGDN>([\s\S]*?)<\/cim:ResourceAncillaryServiceType.REGDN>/g, obj, "REGDN", base.to_string, sub, context);

            /**
             * Spinning Reserve
             *
             */
            base.parse_element (/<cim:ResourceAncillaryServiceType.RRSPIN>([\s\S]*?)<\/cim:ResourceAncillaryServiceType.RRSPIN>/g, obj, "RRSPIN", base.to_string, sub, context);

            /**
             * Non Spinning Reserve
             *
             */
            base.parse_element (/<cim:ResourceAncillaryServiceType.NONSPIN>([\s\S]*?)<\/cim:ResourceAncillaryServiceType.NONSPIN>/g, obj, "NONSPIN", base.to_string, sub, context);

            /**
             * Reliability Must Run
             *
             */
            base.parse_element (/<cim:ResourceAncillaryServiceType.RMR>([\s\S]*?)<\/cim:ResourceAncillaryServiceType.RMR>/g, obj, "RMR", base.to_string, sub, context);

            /**
             * Black start
             *
             */
            base.parse_element (/<cim:ResourceAncillaryServiceType.BLACKSTART>([\s\S]*?)<\/cim:ResourceAncillaryServiceType.BLACKSTART>/g, obj, "BLACKSTART", base.to_string, sub, context);

            /**
             * Demand Side Reponse
             *
             */
            base.parse_element (/<cim:ResourceAncillaryServiceType.DSR>([\s\S]*?)<\/cim:ResourceAncillaryServiceType.DSR>/g, obj, "DSR", base.to_string, sub, context);

            base.parse_element (/<cim:ResourceAncillaryServiceType.SYNCCOND>([\s\S]*?)<\/cim:ResourceAncillaryServiceType.SYNCCOND>/g, obj, "SYNCCOND", base.to_string, sub, context);

            /**
             * Intermittant resource
             *
             */
            base.parse_element (/<cim:ResourceAncillaryServiceType.PIRP>([\s\S]*?)<\/cim:ResourceAncillaryServiceType.PIRP>/g, obj, "PIRP", base.to_string, sub, context);

            /**
             * Reliability unit commitment
             *
             */
            base.parse_element (/<cim:ResourceAncillaryServiceType.RUC>([\s\S]*?)<\/cim:ResourceAncillaryServiceType.RUC>/g, obj, "RUC", base.to_string, sub, context);

            bucket = context.parsed.ResourceAncillaryServiceType;
            if (null == bucket)
                context.parsed.ResourceAncillaryServiceType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
         * Initial
         *
         * Final
         *
         */
        function parse_BidMitigationType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "BidMitigationType";
            base.parse_element (/<cim:BidMitigationType.I>([\s\S]*?)<\/cim:BidMitigationType.I>/g, obj, "I", base.to_string, sub, context);

            base.parse_element (/<cim:BidMitigationType.F>([\s\S]*?)<\/cim:BidMitigationType.F>/g, obj, "F", base.to_string, sub, context);

            bucket = context.parsed.BidMitigationType;
            if (null == bucket)
                context.parsed.BidMitigationType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
         *
         * Operating Reserve, Regulation, Contingency
         *
         */
        function parse_ReserveRequirementType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ReserveRequirementType";
            /**
             * Operating Reserve
             *
             */
            base.parse_element (/<cim:ReserveRequirementType.OPRSV>([\s\S]*?)<\/cim:ReserveRequirementType.OPRSV>/g, obj, "OPRSV", base.to_string, sub, context);

            /**
             * Contingency
             *
             */
            base.parse_element (/<cim:ReserveRequirementType.CONT>([\s\S]*?)<\/cim:ReserveRequirementType.CONT>/g, obj, "CONT", base.to_string, sub, context);

            /**
             * Regulation
             *
             */
            base.parse_element (/<cim:ReserveRequirementType.REG>([\s\S]*?)<\/cim:ReserveRequirementType.REG>/g, obj, "REG", base.to_string, sub, context);

            bucket = context.parsed.ReserveRequirementType;
            if (null == bucket)
                context.parsed.ReserveRequirementType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Valid values, for example:
         * INS - Instruction from RTM
         *
         * ACT - Actual instruction after the fact
         *
         */
        function parse_MQSInstructionSource (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MQSInstructionSource";
            base.parse_element (/<cim:MQSInstructionSource.INS>([\s\S]*?)<\/cim:MQSInstructionSource.INS>/g, obj, "INS", base.to_string, sub, context);

            base.parse_element (/<cim:MQSInstructionSource.ACT>([\s\S]*?)<\/cim:MQSInstructionSource.ACT>/g, obj, "ACT", base.to_string, sub, context);

            bucket = context.parsed.MQSInstructionSource;
            if (null == bucket)
                context.parsed.MQSInstructionSource = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Area's present control mode
         *
         */
        function parse_AreaControlMode (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AreaControlMode";
            /**
             * CF = Constant Frequency
             *
             */
            base.parse_element (/<cim:AreaControlMode.CF>([\s\S]*?)<\/cim:AreaControlMode.CF>/g, obj, "CF", base.to_string, sub, context);

            /**
             * Constant Tie-Line
             *
             */
            base.parse_element (/<cim:AreaControlMode.CTL>([\s\S]*?)<\/cim:AreaControlMode.CTL>/g, obj, "CTL", base.to_string, sub, context);

            /**
             * Tie-Line Bias
             *
             */
            base.parse_element (/<cim:AreaControlMode.TLB>([\s\S]*?)<\/cim:AreaControlMode.TLB>/g, obj, "TLB", base.to_string, sub, context);

            /**
             * Off control
             *
             */
            base.parse_element (/<cim:AreaControlMode.OFF>([\s\S]*?)<\/cim:AreaControlMode.OFF>/g, obj, "OFF", base.to_string, sub, context);

            bucket = context.parsed.AreaControlMode;
            if (null == bucket)
                context.parsed.AreaControlMode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * To indicate a check out type such as adjusted capacity or dispatch capacity
         *
         */
        function parse_CheckOutType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CheckOutType";
            base.parse_element (/<cim:CheckOutType.PRE_HOUR>([\s\S]*?)<\/cim:CheckOutType.PRE_HOUR>/g, obj, "PRE_HOUR", base.to_string, sub, context);

            base.parse_element (/<cim:CheckOutType.PRE_SCHEDULE>([\s\S]*?)<\/cim:CheckOutType.PRE_SCHEDULE>/g, obj, "PRE_SCHEDULE", base.to_string, sub, context);

            base.parse_element (/<cim:CheckOutType.AFTER_THE_FACT>([\s\S]*?)<\/cim:CheckOutType.AFTER_THE_FACT>/g, obj, "AFTER_THE_FACT", base.to_string, sub, context);

            bucket = context.parsed.CheckOutType;
            if (null == bucket)
                context.parsed.CheckOutType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Combined Cycle
         * Gas Turbine
         * Hydro Turbine
         * Other
         * Photovoltaic
         * Hydro Pump-Turbine
         * Reciprocating Engine
         * Steam Turbine
         * Synchronous Condenser
         *
         * Wind Turbine
         *
         */
        function parse_UnitType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "UnitType";
            /**
             * Combined Cycle
             *
             */
            base.parse_element (/<cim:UnitType.CCYC>([\s\S]*?)<\/cim:UnitType.CCYC>/g, obj, "CCYC", base.to_string, sub, context);

            /**
             * Gas Turbine
             *
             */
            base.parse_element (/<cim:UnitType.GTUR>([\s\S]*?)<\/cim:UnitType.GTUR>/g, obj, "GTUR", base.to_string, sub, context);

            /**
             * Hydro Turbine
             *
             */
            base.parse_element (/<cim:UnitType.HYDR>([\s\S]*?)<\/cim:UnitType.HYDR>/g, obj, "HYDR", base.to_string, sub, context);

            /**
             * Other
             *
             */
            base.parse_element (/<cim:UnitType.OTHR>([\s\S]*?)<\/cim:UnitType.OTHR>/g, obj, "OTHR", base.to_string, sub, context);

            /**
             * Photovoltaic
             *
             */
            base.parse_element (/<cim:UnitType.PHOT>([\s\S]*?)<\/cim:UnitType.PHOT>/g, obj, "PHOT", base.to_string, sub, context);

            /**
             * Hydro Pump-Turbine
             *
             */
            base.parse_element (/<cim:UnitType.PTUR>([\s\S]*?)<\/cim:UnitType.PTUR>/g, obj, "PTUR", base.to_string, sub, context);

            /**
             * Reciprocating Engine
             *
             */
            base.parse_element (/<cim:UnitType.RECP>([\s\S]*?)<\/cim:UnitType.RECP>/g, obj, "RECP", base.to_string, sub, context);

            /**
             * Steam Turbine
             *
             */
            base.parse_element (/<cim:UnitType.STUR>([\s\S]*?)<\/cim:UnitType.STUR>/g, obj, "STUR", base.to_string, sub, context);

            /**
             * Synchronous Condenser
             *
             */
            base.parse_element (/<cim:UnitType.SYNC>([\s\S]*?)<\/cim:UnitType.SYNC>/g, obj, "SYNC", base.to_string, sub, context);

            /**
             * Wind Turbine
             *
             */
            base.parse_element (/<cim:UnitType.WIND>([\s\S]*?)<\/cim:UnitType.WIND>/g, obj, "WIND", base.to_string, sub, context);

            bucket = context.parsed.UnitType;
            if (null == bucket)
                context.parsed.UnitType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
         * Bid Cost
         * Proxy Cost
         *
         * Registered Cost
         *
         */
        function parse_CostBasis (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CostBasis";
            base.parse_element (/<cim:CostBasis.BIDC>([\s\S]*?)<\/cim:CostBasis.BIDC>/g, obj, "BIDC", base.to_string, sub, context);

            base.parse_element (/<cim:CostBasis.PRXC>([\s\S]*?)<\/cim:CostBasis.PRXC>/g, obj, "PRXC", base.to_string, sub, context);

            base.parse_element (/<cim:CostBasis.REGC>([\s\S]*?)<\/cim:CostBasis.REGC>/g, obj, "REGC", base.to_string, sub, context);

            bucket = context.parsed.CostBasis;
            if (null == bucket)
                context.parsed.CostBasis = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_SelfSchedReferenceType: parse_SelfSchedReferenceType,
                parse_LoadForecastType: parse_LoadForecastType,
                parse_MPMTestOutcome: parse_MPMTestOutcome,
                parse_BidTypeRMR: parse_BidTypeRMR,
                parse_RampRateType: parse_RampRateType,
                parse_ContractType: parse_ContractType,
                parse_BidType: parse_BidType,
                parse_ResourceAncillaryServiceType: parse_ResourceAncillaryServiceType,
                parse_EnergyProductType: parse_EnergyProductType,
                parse_ActionType: parse_ActionType,
                parse_ResourceCapacityType: parse_ResourceCapacityType,
                parse_CommitmentType: parse_CommitmentType,
                parse_YesNo: parse_YesNo,
                parse_ResourceAssnType: parse_ResourceAssnType,
                parse_RampModeType: parse_RampModeType,
                parse_RampRateCondition: parse_RampRateCondition,
                parse_CRRSegmentType: parse_CRRSegmentType,
                parse_ExecutionType: parse_ExecutionType,
                parse_TRType: parse_TRType,
                parse_EquipmentStatusType: parse_EquipmentStatusType,
                parse_FlagTypeRMR: parse_FlagTypeRMR,
                parse_MQSInstructionSource: parse_MQSInstructionSource,
                parse_MktAccountKind: parse_MktAccountKind,
                parse_EnergyTransactionType: parse_EnergyTransactionType,
                parse_FuelSource: parse_FuelSource,
                parse_MPMTestIdentifierType: parse_MPMTestIdentifierType,
                parse_MarketType: parse_MarketType,
                parse_CheckOutType: parse_CheckOutType,
                parse_MarketProductSelfSchedType: parse_MarketProductSelfSchedType,
                parse_BidMitigationStatus: parse_BidMitigationStatus,
                parse_CRRHedgeType: parse_CRRHedgeType,
                parse_ResourceLimitIndicator: parse_ResourceLimitIndicator,
                parse_ApnodeType: parse_ApnodeType,
                parse_SwitchStatusType: parse_SwitchStatusType,
                parse_MktInvoiceLineItemKind: parse_MktInvoiceLineItemKind,
                parse_CRRRoleType: parse_CRRRoleType,
                parse_DispatchResponseType: parse_DispatchResponseType,
                parse_TimeOfUse: parse_TimeOfUse,
                parse_BidCalculationBasis: parse_BidCalculationBasis,
                parse_AreaControlMode: parse_AreaControlMode,
                parse_PassIndicatorType: parse_PassIndicatorType,
                parse_MPMTestMethodType: parse_MPMTestMethodType,
                parse_SelfScheduleBreakdownType: parse_SelfScheduleBreakdownType,
                parse_PurposeFlagType: parse_PurposeFlagType,
                parse_MktBillMediaKind: parse_MktBillMediaKind,
                parse_FlowDirectionType: parse_FlowDirectionType,
                parse_EnergyPriceIndexType: parse_EnergyPriceIndexType,
                parse_OnOff: parse_OnOff,
                parse_AutomaticDispatchMode: parse_AutomaticDispatchMode,
                parse_MarketProductType: parse_MarketProductType,
                parse_AutomaticDispInstTypeCommitment: parse_AutomaticDispInstTypeCommitment,
                parse_ParticipationCategoryMPM: parse_ParticipationCategoryMPM,
                parse_InterTieDirection: parse_InterTieDirection,
                parse_ResourceRegistrationStatus: parse_ResourceRegistrationStatus,
                parse_ConstraintRampType: parse_ConstraintRampType,
                parse_MQSCHGType: parse_MQSCHGType,
                parse_ReserveRequirementType: parse_ReserveRequirementType,
                parse_AnodeType: parse_AnodeType,
                parse_TradeType: parse_TradeType,
                parse_AnalogLimitType: parse_AnalogLimitType,
                parse_CRRCategoryType: parse_CRRCategoryType,
                parse_RampCurveType: parse_RampCurveType,
                parse_UnitType: parse_UnitType,
                parse_CostBasis: parse_CostBasis,
                parse_BidMitigationType: parse_BidMitigationType,
                parse_ResultsConstraintType: parse_ResultsConstraintType,
                parse_ConstraintLimitType: parse_ConstraintLimitType
            }
        );
    }
);