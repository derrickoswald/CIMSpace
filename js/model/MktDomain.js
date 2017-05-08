define
(
    ["model/base"],
    /**
     * The MktDomain package is a data dictionary of quantities and units that define datatypes for attributes (properties) that may be used by any class in any other package within MarketOperations.
     */
    function (base)
    {

        /**
         * Energy product type
         */
        function parse_EnergyProductType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "EnergyProductType";
            /**
             * Firm
             */
            obj["FIRM"] = base.parse_element (/<cim:EnergyProductType.FIRM>([\s\S]*?)<\/cim:EnergyProductType.FIRM>/g, sub, context, true);
            /**
             * Non Firm
             */
            obj["NFRM"] = base.parse_element (/<cim:EnergyProductType.NFRM>([\s\S]*?)<\/cim:EnergyProductType.NFRM>/g, sub, context, true);
            /**
             * Dynamic
             */
            obj["DYN"] = base.parse_element (/<cim:EnergyProductType.DYN>([\s\S]*?)<\/cim:EnergyProductType.DYN>/g, sub, context, true);
            /**
             * Wheeling
             */
            obj["WHL"] = base.parse_element (/<cim:EnergyProductType.WHL>([\s\S]*?)<\/cim:EnergyProductType.WHL>/g, sub, context, true);
            bucket = context.parsed.EnergyProductType;
            if (null == bucket)
                context.parsed.EnergyProductType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Indicates whether the unit is RMR and it's condition type, for example:
        N' - not an RMR unit
        '1' - RMR Condition 1 unit
         * '2' - RMR Condition 2 unit
         */
        function parse_FlagTypeRMR (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "FlagTypeRMR";
            /**
             * 'N' - not an RMR unit
             */
            obj["N"] = base.parse_element (/<cim:FlagTypeRMR.N>([\s\S]*?)<\/cim:FlagTypeRMR.N>/g, sub, context, true);
            /**
             * '1' - RMR Condition 1 unit
             */
            obj["1"] = base.parse_element (/<cim:FlagTypeRMR.1>([\s\S]*?)<\/cim:FlagTypeRMR.1>/g, sub, context, true);
            /**
             * '2' - RMR Condition 2 unit
             */
            obj["2"] = base.parse_element (/<cim:FlagTypeRMR.2>([\s\S]*?)<\/cim:FlagTypeRMR.2>/g, sub, context, true);
            bucket = context.parsed.FlagTypeRMR;
            if (null == bucket)
                context.parsed.FlagTypeRMR = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Maket type.
         */
        function parse_MarketType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketType";
            /**
             * Day ahead market.
             */
            obj["DAM"] = base.parse_element (/<cim:MarketType.DAM>([\s\S]*?)<\/cim:MarketType.DAM>/g, sub, context, true);
            /**
             * Real time market.
             */
            obj["RTM"] = base.parse_element (/<cim:MarketType.RTM>([\s\S]*?)<\/cim:MarketType.RTM>/g, sub, context, true);
            /**
             * Hour Ahead Market.
             */
            obj["HAM"] = base.parse_element (/<cim:MarketType.HAM>([\s\S]*?)<\/cim:MarketType.HAM>/g, sub, context, true);
            /**
             * Residual Unit Commitment.
             */
            obj["RUC"] = base.parse_element (/<cim:MarketType.RUC>([\s\S]*?)<\/cim:MarketType.RUC>/g, sub, context, true);
            bucket = context.parsed.MarketType;
            if (null == bucket)
                context.parsed.MarketType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Ramp rate condition
         */
        function parse_RampRateCondition (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "RampRateCondition";
            obj["WORST"] = base.parse_element (/<cim:RampRateCondition.WORST>([\s\S]*?)<\/cim:RampRateCondition.WORST>/g, sub, context, true);
            obj["BEST"] = base.parse_element (/<cim:RampRateCondition.BEST>([\s\S]*?)<\/cim:RampRateCondition.BEST>/g, sub, context, true);
            obj["NORMAL"] = base.parse_element (/<cim:RampRateCondition.NORMAL>([\s\S]*?)<\/cim:RampRateCondition.NORMAL>/g, sub, context, true);
            /**
             * not applicable
             */
            obj["NA"] = base.parse_element (/<cim:RampRateCondition.NA>([\s\S]*?)<\/cim:RampRateCondition.NA>/g, sub, context, true);
            bucket = context.parsed.RampRateCondition;
            if (null == bucket)
                context.parsed.RampRateCondition = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The basis used to calculate the bid price curve for an energy default bid.
         */
        function parse_BidCalculationBasis (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "BidCalculationBasis";
            /**
             * Based on prices paid at particular pricing location.
             */
            obj["LMP_BASED"] = base.parse_element (/<cim:BidCalculationBasis.LMP_BASED>([\s\S]*?)<\/cim:BidCalculationBasis.LMP_BASED>/g, sub, context, true);
            /**
             * Based on unit generation characteristics and a cost of fuel.
             */
            obj["COST_BASED"] = base.parse_element (/<cim:BidCalculationBasis.COST_BASED>([\s\S]*?)<\/cim:BidCalculationBasis.COST_BASED>/g, sub, context, true);
            /**
             * An amount negotiated with the designated Independent Entity.
             */
            obj["NEGOTIATED"] = base.parse_element (/<cim:BidCalculationBasis.NEGOTIATED>([\s\S]*?)<\/cim:BidCalculationBasis.NEGOTIATED>/g, sub, context, true);
            bucket = context.parsed.BidCalculationBasis;
            if (null == bucket)
                context.parsed.BidCalculationBasis = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Defines the state of a transaction.
         */
        function parse_EnergyTransactionType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "EnergyTransactionType";
            /**
             * Approve
             */
            obj["approve"] = base.parse_element (/<cim:EnergyTransactionType.approve>([\s\S]*?)<\/cim:EnergyTransactionType.approve>/g, sub, context, true);
            /**
             * Deny
             */
            obj["deny"] = base.parse_element (/<cim:EnergyTransactionType.deny>([\s\S]*?)<\/cim:EnergyTransactionType.deny>/g, sub, context, true);
            /**
             * Study
             */
            obj["study"] = base.parse_element (/<cim:EnergyTransactionType.study>([\s\S]*?)<\/cim:EnergyTransactionType.study>/g, sub, context, true);
            bucket = context.parsed.EnergyTransactionType;
            if (null == bucket)
                context.parsed.EnergyTransactionType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Transmission Contract Type, For example:
        O - Other 
        TE - Transmission Export 
        TI - Transmission Import 
        ETC - Existing Transmission Contract 
        RMT - RMT Contract 
        TOR - Transmission Ownership Right  
        RMR - Reliability Must Run Contract
         * CVR - Converted contract.
         */
        function parse_ContractType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ContractType";
            /**
             * ETC - Existing Transmission Contract
             */
            obj["ETC"] = base.parse_element (/<cim:ContractType.ETC>([\s\S]*?)<\/cim:ContractType.ETC>/g, sub, context, true);
            /**
             * TOR - Transmission Ownership Right
             */
            obj["TOR"] = base.parse_element (/<cim:ContractType.TOR>([\s\S]*?)<\/cim:ContractType.TOR>/g, sub, context, true);
            /**
             * RMR - Reliability Must Run Contract
             */
            obj["RMR"] = base.parse_element (/<cim:ContractType.RMR>([\s\S]*?)<\/cim:ContractType.RMR>/g, sub, context, true);
            /**
             * RMT - RMT Contract
             */
            obj["RMT"] = base.parse_element (/<cim:ContractType.RMT>([\s\S]*?)<\/cim:ContractType.RMT>/g, sub, context, true);
            /**
             * O - Other
             */
            obj["O"] = base.parse_element (/<cim:ContractType.O>([\s\S]*?)<\/cim:ContractType.O>/g, sub, context, true);
            /**
             * TE - Transmission Export
             */
            obj["TE"] = base.parse_element (/<cim:ContractType.TE>([\s\S]*?)<\/cim:ContractType.TE>/g, sub, context, true);
            /**
             * TI - Transmission Import
             */
            obj["TI"] = base.parse_element (/<cim:ContractType.TI>([\s\S]*?)<\/cim:ContractType.TI>/g, sub, context, true);
            /**
             * CVR - Converted contract.
             */
            obj["CVR"] = base.parse_element (/<cim:ContractType.CVR>([\s\S]*?)<\/cim:ContractType.CVR>/g, sub, context, true);
            bucket = context.parsed.ContractType;
            if (null == bucket)
                context.parsed.ContractType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
        DEFAULT_ENERGY_BID
        DEFAULT_STARTUP_BID
         * DEFAULT_MINIMUM_LOAD_BID
         */
        function parse_BidType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "BidType";
            obj["DEFAULT_ENERGY_BID"] = base.parse_element (/<cim:BidType.DEFAULT_ENERGY_BID>([\s\S]*?)<\/cim:BidType.DEFAULT_ENERGY_BID>/g, sub, context, true);
            obj["DEFAULT_STARTUP_BID"] = base.parse_element (/<cim:BidType.DEFAULT_STARTUP_BID>([\s\S]*?)<\/cim:BidType.DEFAULT_STARTUP_BID>/g, sub, context, true);
            obj["DEFAULT_MINIMUM_LOAD_BID"] = base.parse_element (/<cim:BidType.DEFAULT_MINIMUM_LOAD_BID>([\s\S]*?)<\/cim:BidType.DEFAULT_MINIMUM_LOAD_BID>/g, sub, context, true);
            bucket = context.parsed.BidType;
            if (null == bucket)
                context.parsed.BidType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Status of equipment
         */
        function parse_EquipmentStatusType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "EquipmentStatusType";
            /**
             * Equipment is in.
             */
            obj["In"] = base.parse_element (/<cim:EquipmentStatusType.In>([\s\S]*?)<\/cim:EquipmentStatusType.In>/g, sub, context, true);
            /**
             * Equipment is out.
             */
            obj["Out"] = base.parse_element (/<cim:EquipmentStatusType.Out>([\s\S]*?)<\/cim:EquipmentStatusType.Out>/g, sub, context, true);
            bucket = context.parsed.EquipmentStatusType;
            if (null == bucket)
                context.parsed.EquipmentStatusType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Market product self schedule bid types.
         */
        function parse_MarketProductSelfSchedType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketProductSelfSchedType";
            /**
             * Existing Transmission Contract.
             */
            obj["ETC"] = base.parse_element (/<cim:MarketProductSelfSchedType.ETC>([\s\S]*?)<\/cim:MarketProductSelfSchedType.ETC>/g, sub, context, true);
            /**
             * Transmission Ownership Right.
             */
            obj["TOR"] = base.parse_element (/<cim:MarketProductSelfSchedType.TOR>([\s\S]*?)<\/cim:MarketProductSelfSchedType.TOR>/g, sub, context, true);
            /**
             * Reliability Must Run.
             */
            obj["RMR"] = base.parse_element (/<cim:MarketProductSelfSchedType.RMR>([\s\S]*?)<\/cim:MarketProductSelfSchedType.RMR>/g, sub, context, true);
            /**
             * Regulatory must run.
             */
            obj["RGMR"] = base.parse_element (/<cim:MarketProductSelfSchedType.RGMR>([\s\S]*?)<\/cim:MarketProductSelfSchedType.RGMR>/g, sub, context, true);
            /**
             * Reliability must take.
             */
            obj["RMT"] = base.parse_element (/<cim:MarketProductSelfSchedType.RMT>([\s\S]*?)<\/cim:MarketProductSelfSchedType.RMT>/g, sub, context, true);
            /**
             * Price taker.
             */
            obj["PT"] = base.parse_element (/<cim:MarketProductSelfSchedType.PT>([\s\S]*?)<\/cim:MarketProductSelfSchedType.PT>/g, sub, context, true);
            /**
             * Low price taker.
             */
            obj["LPT"] = base.parse_element (/<cim:MarketProductSelfSchedType.LPT>([\s\S]*?)<\/cim:MarketProductSelfSchedType.LPT>/g, sub, context, true);
            /**
             * Self provision.
             */
            obj["SP"] = base.parse_element (/<cim:MarketProductSelfSchedType.SP>([\s\S]*?)<\/cim:MarketProductSelfSchedType.SP>/g, sub, context, true);
            /**
             * Resource adequacy.
             */
            obj["RA"] = base.parse_element (/<cim:MarketProductSelfSchedType.RA>([\s\S]*?)<\/cim:MarketProductSelfSchedType.RA>/g, sub, context, true);
            bucket = context.parsed.MarketProductSelfSchedType;
            if (null == bucket)
                context.parsed.MarketProductSelfSchedType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
        ADD - add
         * CHG - change
         */
        function parse_MQSCHGType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MQSCHGType";
            obj["ADD"] = base.parse_element (/<cim:MQSCHGType.ADD>([\s\S]*?)<\/cim:MQSCHGType.ADD>/g, sub, context, true);
            obj["CHG"] = base.parse_element (/<cim:MQSCHGType.CHG>([\s\S]*?)<\/cim:MQSCHGType.CHG>/g, sub, context, true);
            bucket = context.parsed.MQSCHGType;
            if (null == bucket)
                context.parsed.MQSCHGType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Direction of an intertie.
         */
        function parse_InterTieDirection (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "InterTieDirection";
            /**
             * Export.
             */
            obj["E"] = base.parse_element (/<cim:InterTieDirection.E>([\s\S]*?)<\/cim:InterTieDirection.E>/g, sub, context, true);
            /**
             * Import.
             */
            obj["I"] = base.parse_element (/<cim:InterTieDirection.I>([\s\S]*?)<\/cim:InterTieDirection.I>/g, sub, context, true);
            bucket = context.parsed.InterTieDirection;
            if (null == bucket)
                context.parsed.InterTieDirection = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Automatic Dispatch mode
         */
        function parse_AutomaticDispatchMode (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AutomaticDispatchMode";
            obj["INTERVAL"] = base.parse_element (/<cim:AutomaticDispatchMode.INTERVAL>([\s\S]*?)<\/cim:AutomaticDispatchMode.INTERVAL>/g, sub, context, true);
            /**
             * Contingnency occurance, redispatch of contingency reserves
             */
            obj["CONTINGENCY"] = base.parse_element (/<cim:AutomaticDispatchMode.CONTINGENCY>([\s\S]*?)<\/cim:AutomaticDispatchMode.CONTINGENCY>/g, sub, context, true);
            /**
             * Operator override
             */
            obj["MANUAL"] = base.parse_element (/<cim:AutomaticDispatchMode.MANUAL>([\s\S]*?)<\/cim:AutomaticDispatchMode.MANUAL>/g, sub, context, true);
            bucket = context.parsed.AutomaticDispatchMode;
            if (null == bucket)
                context.parsed.AutomaticDispatchMode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
        SELF - Self commitment
        ISO - New commitment for this market period
         * UC - Existing commitment that was a hold over from a previous market.
         */
        function parse_CommitmentType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CommitmentType";
            obj["SELF"] = base.parse_element (/<cim:CommitmentType.SELF>([\s\S]*?)<\/cim:CommitmentType.SELF>/g, sub, context, true);
            obj["ISO"] = base.parse_element (/<cim:CommitmentType.ISO>([\s\S]*?)<\/cim:CommitmentType.ISO>/g, sub, context, true);
            obj["UC"] = base.parse_element (/<cim:CommitmentType.UC>([\s\S]*?)<\/cim:CommitmentType.UC>/g, sub, context, true);
            bucket = context.parsed.CommitmentType;
            if (null == bucket)
                context.parsed.CommitmentType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Used as a flag set to Yes or No.
         */
        function parse_YesNo (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "YesNo";
            obj["YES"] = base.parse_element (/<cim:YesNo.YES>([\s\S]*?)<\/cim:YesNo.YES>/g, sub, context, true);
            obj["NO"] = base.parse_element (/<cim:YesNo.NO>([\s\S]*?)<\/cim:YesNo.NO>/g, sub, context, true);
            bucket = context.parsed.YesNo;
            if (null == bucket)
                context.parsed.YesNo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
        Asset Owner Sink designator for use by CRR
        Asset Owner Source designator for use by CRR
        Reliability Must Run  
        Scheduling Coordinator
         * Load Serving Entity
         */
        function parse_ResourceAssnType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ResourceAssnType";
            obj["CSNK"] = base.parse_element (/<cim:ResourceAssnType.CSNK>([\s\S]*?)<\/cim:ResourceAssnType.CSNK>/g, sub, context, true);
            obj["CSRC"] = base.parse_element (/<cim:ResourceAssnType.CSRC>([\s\S]*?)<\/cim:ResourceAssnType.CSRC>/g, sub, context, true);
            obj["RMR"] = base.parse_element (/<cim:ResourceAssnType.RMR>([\s\S]*?)<\/cim:ResourceAssnType.RMR>/g, sub, context, true);
            obj["SC"] = base.parse_element (/<cim:ResourceAssnType.SC>([\s\S]*?)<\/cim:ResourceAssnType.SC>/g, sub, context, true);
            obj["LSE"] = base.parse_element (/<cim:ResourceAssnType.LSE>([\s\S]*?)<\/cim:ResourceAssnType.LSE>/g, sub, context, true);
            bucket = context.parsed.ResourceAssnType;
            if (null == bucket)
                context.parsed.ResourceAssnType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Limit type specified for AnalogLimits.
         */
        function parse_AnalogLimitType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AnalogLimitType";
            /**
             * Branch Medium Term Limit
             */
            obj["BranchMediumTerm"] = base.parse_element (/<cim:AnalogLimitType.BranchMediumTerm>([\s\S]*?)<\/cim:AnalogLimitType.BranchMediumTerm>/g, sub, context, true);
            /**
             * Branch Long Term Limit
             */
            obj["BranchLongTerm"] = base.parse_element (/<cim:AnalogLimitType.BranchLongTerm>([\s\S]*?)<\/cim:AnalogLimitType.BranchLongTerm>/g, sub, context, true);
            /**
             * Branch Short Term Limit
             */
            obj["BranchShortTerm"] = base.parse_element (/<cim:AnalogLimitType.BranchShortTerm>([\s\S]*?)<\/cim:AnalogLimitType.BranchShortTerm>/g, sub, context, true);
            /**
             * Voltage High Limit
             */
            obj["VoltageHigh"] = base.parse_element (/<cim:AnalogLimitType.VoltageHigh>([\s\S]*?)<\/cim:AnalogLimitType.VoltageHigh>/g, sub, context, true);
            /**
             * Voltage Low Limit
             */
            obj["VoltageLow"] = base.parse_element (/<cim:AnalogLimitType.VoltageLow>([\s\S]*?)<\/cim:AnalogLimitType.VoltageLow>/g, sub, context, true);
            bucket = context.parsed.AnalogLimitType;
            if (null == bucket)
                context.parsed.AnalogLimitType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Market power mitigation test method type.
         * Tests with the normal (default) thresholds or tests with the alternate thresholds.
         */
        function parse_MPMTestMethodType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MPMTestMethodType";
            /**
             * Normal.
             */
            obj["NORMAL"] = base.parse_element (/<cim:MPMTestMethodType.NORMAL>([\s\S]*?)<\/cim:MPMTestMethodType.NORMAL>/g, sub, context, true);
            /**
             * Alternate.
             */
            obj["ALTERNATE"] = base.parse_element (/<cim:MPMTestMethodType.ALTERNATE>([\s\S]*?)<\/cim:MPMTestMethodType.ALTERNATE>/g, sub, context, true);
            bucket = context.parsed.MPMTestMethodType;
            if (null == bucket)
                context.parsed.MPMTestMethodType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Commitment instruction types.
         */
        function parse_AutomaticDispInstTypeCommitment (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AutomaticDispInstTypeCommitment";
            /**
             * Start up instruction type
             */
            obj["START_UP"] = base.parse_element (/<cim:AutomaticDispInstTypeCommitment.START_UP>([\s\S]*?)<\/cim:AutomaticDispInstTypeCommitment.START_UP>/g, sub, context, true);
            /**
             * Shut down instruction type
             */
            obj["SHUT_DOWN"] = base.parse_element (/<cim:AutomaticDispInstTypeCommitment.SHUT_DOWN>([\s\S]*?)<\/cim:AutomaticDispInstTypeCommitment.SHUT_DOWN>/g, sub, context, true);
            bucket = context.parsed.AutomaticDispInstTypeCommitment;
            if (null == bucket)
                context.parsed.AutomaticDispInstTypeCommitment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Defines the individual passes that produce results per execution type/market type
         */
        function parse_PassIndicatorType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PassIndicatorType";
            /**
             * Market Power Mitigation Pass 1
             */
            obj["MPM-1"] = base.parse_element (/<cim:PassIndicatorType.MPM-1>([\s\S]*?)<\/cim:PassIndicatorType.MPM-1>/g, sub, context, true);
            /**
             * Market Power Mitigation Pass 2
             */
            obj["MPM-2"] = base.parse_element (/<cim:PassIndicatorType.MPM-2>([\s\S]*?)<\/cim:PassIndicatorType.MPM-2>/g, sub, context, true);
            /**
             * Market Power Mitigation Pass 3
             */
            obj["MPM-3"] = base.parse_element (/<cim:PassIndicatorType.MPM-3>([\s\S]*?)<\/cim:PassIndicatorType.MPM-3>/g, sub, context, true);
            /**
             * Market Power Mitigation Pass 4
             */
            obj["MPM-4"] = base.parse_element (/<cim:PassIndicatorType.MPM-4>([\s\S]*?)<\/cim:PassIndicatorType.MPM-4>/g, sub, context, true);
            /**
             * Residual Unit Commitment
             */
            obj["RUC"] = base.parse_element (/<cim:PassIndicatorType.RUC>([\s\S]*?)<\/cim:PassIndicatorType.RUC>/g, sub, context, true);
            /**
             * Real Time Pre Dispatch
             */
            obj["RTPD"] = base.parse_element (/<cim:PassIndicatorType.RTPD>([\s\S]*?)<\/cim:PassIndicatorType.RTPD>/g, sub, context, true);
            /**
             * Real Time Economic Dispatch
             */
            obj["RTED"] = base.parse_element (/<cim:PassIndicatorType.RTED>([\s\S]*?)<\/cim:PassIndicatorType.RTED>/g, sub, context, true);
            /**
             * Hour Ahead Security Constrained Unit Commitment
             */
            obj["HA-SCUC"] = base.parse_element (/<cim:PassIndicatorType.HA-SCUC>([\s\S]*?)<\/cim:PassIndicatorType.HA-SCUC>/g, sub, context, true);
            /**
             * Day Ahead
             */
            obj["DA"] = base.parse_element (/<cim:PassIndicatorType.DA>([\s\S]*?)<\/cim:PassIndicatorType.DA>/g, sub, context, true);
            bucket = context.parsed.PassIndicatorType;
            if (null == bucket)
                context.parsed.PassIndicatorType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Action type associated with an ActionRequest against a ParticipantInterfaces::Trade.
         */
        function parse_ActionType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ActionType";
            /**
             * Cancel a trade.
             */
            obj["CANCEL"] = base.parse_element (/<cim:ActionType.CANCEL>([\s\S]*?)<\/cim:ActionType.CANCEL>/g, sub, context, true);
            bucket = context.parsed.ActionType;
            if (null == bucket)
                context.parsed.ActionType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Market results binding constraint types.
         */
        function parse_ResultsConstraintType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ResultsConstraintType";
            /**
             * Flowgate actual base case
             */
            obj["FG_act"] = base.parse_element (/<cim:ResultsConstraintType.FG_act>([\s\S]*?)<\/cim:ResultsConstraintType.FG_act>/g, sub, context, true);
            /**
             * Contingency.
             */
            obj["Contingency"] = base.parse_element (/<cim:ResultsConstraintType.Contingency>([\s\S]*?)<\/cim:ResultsConstraintType.Contingency>/g, sub, context, true);
            /**
             * Interface.
             */
            obj["Interface"] = base.parse_element (/<cim:ResultsConstraintType.Interface>([\s\S]*?)<\/cim:ResultsConstraintType.Interface>/g, sub, context, true);
            /**
             * Actual.
             */
            obj["Actual"] = base.parse_element (/<cim:ResultsConstraintType.Actual>([\s\S]*?)<\/cim:ResultsConstraintType.Actual>/g, sub, context, true);
            bucket = context.parsed.ResultsConstraintType;
            if (null == bucket)
                context.parsed.ResultsConstraintType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Specifies the direction of energy flow in the flowgate.
         */
        function parse_FlowDirectionType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "FlowDirectionType";
            /**
             * Forward direction.
             */
            obj["Forward"] = base.parse_element (/<cim:FlowDirectionType.Forward>([\s\S]*?)<\/cim:FlowDirectionType.Forward>/g, sub, context, true);
            /**
             * Reverse direction.
             */
            obj["Reverse"] = base.parse_element (/<cim:FlowDirectionType.Reverse>([\s\S]*?)<\/cim:FlowDirectionType.Reverse>/g, sub, context, true);
            bucket = context.parsed.FlowDirectionType;
            if (null == bucket)
                context.parsed.FlowDirectionType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
        Bio Gas (Landfill, Sewage, Digester, etc.)
        Biomass
        Coal
        DIST
        Natural Gas
        Geothermal
        HRCV
        None
        Nuclear
        Oil
        Other
        Solar
        Waste to Energy
        Water
         * Wind
         */
        function parse_FuelSource (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "FuelSource";
            /**
             * Natural Gas
             */
            obj["NG"] = base.parse_element (/<cim:FuelSource.NG>([\s\S]*?)<\/cim:FuelSource.NG>/g, sub, context, true);
            /**
             * Non-Natural Gas
             */
            obj["NNG"] = base.parse_element (/<cim:FuelSource.NNG>([\s\S]*?)<\/cim:FuelSource.NNG>/g, sub, context, true);
            /**
             * Bio Gas (Landfill, Sewage, Digester, etc.)
             */
            obj["BGAS"] = base.parse_element (/<cim:FuelSource.BGAS>([\s\S]*?)<\/cim:FuelSource.BGAS>/g, sub, context, true);
            /**
             * Biomass
             */
            obj["BIOM"] = base.parse_element (/<cim:FuelSource.BIOM>([\s\S]*?)<\/cim:FuelSource.BIOM>/g, sub, context, true);
            /**
             * Coal
             */
            obj["COAL"] = base.parse_element (/<cim:FuelSource.COAL>([\s\S]*?)<\/cim:FuelSource.COAL>/g, sub, context, true);
            obj["DIST"] = base.parse_element (/<cim:FuelSource.DIST>([\s\S]*?)<\/cim:FuelSource.DIST>/g, sub, context, true);
            obj["GAS"] = base.parse_element (/<cim:FuelSource.GAS>([\s\S]*?)<\/cim:FuelSource.GAS>/g, sub, context, true);
            /**
             * GeoThermal
             */
            obj["GEOT"] = base.parse_element (/<cim:FuelSource.GEOT>([\s\S]*?)<\/cim:FuelSource.GEOT>/g, sub, context, true);
            obj["HRCV"] = base.parse_element (/<cim:FuelSource.HRCV>([\s\S]*?)<\/cim:FuelSource.HRCV>/g, sub, context, true);
            obj["NONE"] = base.parse_element (/<cim:FuelSource.NONE>([\s\S]*?)<\/cim:FuelSource.NONE>/g, sub, context, true);
            /**
             * Nuclear
             */
            obj["NUCL"] = base.parse_element (/<cim:FuelSource.NUCL>([\s\S]*?)<\/cim:FuelSource.NUCL>/g, sub, context, true);
            obj["OIL"] = base.parse_element (/<cim:FuelSource.OIL>([\s\S]*?)<\/cim:FuelSource.OIL>/g, sub, context, true);
            /**
             * Other
             */
            obj["OTHR"] = base.parse_element (/<cim:FuelSource.OTHR>([\s\S]*?)<\/cim:FuelSource.OTHR>/g, sub, context, true);
            /**
             * Solar
             */
            obj["SOLR"] = base.parse_element (/<cim:FuelSource.SOLR>([\s\S]*?)<\/cim:FuelSource.SOLR>/g, sub, context, true);
            /**
             * Waste to Energy
             */
            obj["WAST"] = base.parse_element (/<cim:FuelSource.WAST>([\s\S]*?)<\/cim:FuelSource.WAST>/g, sub, context, true);
            /**
             * Water
             */
            obj["WATR"] = base.parse_element (/<cim:FuelSource.WATR>([\s\S]*?)<\/cim:FuelSource.WATR>/g, sub, context, true);
            /**
             * Wind
             */
            obj["WIND"] = base.parse_element (/<cim:FuelSource.WIND>([\s\S]*?)<\/cim:FuelSource.WIND>/g, sub, context, true);
            bucket = context.parsed.FuelSource;
            if (null == bucket)
                context.parsed.FuelSource = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Time of Use used by a CRR definition for specifying the time the CRR spans.
         * ON - CRR spans the on peak hours of the day, OFF - CRR spans the off peak hours of the day, 24HR - CRR spans the entire day.
         */
        function parse_TimeOfUse (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TimeOfUse";
            /**
             * Time of use spans only the on peak hours of the day.
             */
            obj["ON"] = base.parse_element (/<cim:TimeOfUse.ON>([\s\S]*?)<\/cim:TimeOfUse.ON>/g, sub, context, true);
            /**
             * Time of use spans only the off peak hours of the day.
             */
            obj["OFF"] = base.parse_element (/<cim:TimeOfUse.OFF>([\s\S]*?)<\/cim:TimeOfUse.OFF>/g, sub, context, true);
            /**
             * Time of use spans the entire day, 24 hours.
             */
            obj["24HR"] = base.parse_element (/<cim:TimeOfUse.24HR>([\s\S]*?)<\/cim:TimeOfUse.24HR>/g, sub, context, true);
            bucket = context.parsed.TimeOfUse;
            if (null == bucket)
                context.parsed.TimeOfUse = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
        Passed
        Failed
        Disabled
         * Skipped
         */
        function parse_MPMTestOutcome (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MPMTestOutcome";
            /**
             * Passed
             */
            obj["P"] = base.parse_element (/<cim:MPMTestOutcome.P>([\s\S]*?)<\/cim:MPMTestOutcome.P>/g, sub, context, true);
            /**
             * Failed
             */
            obj["F"] = base.parse_element (/<cim:MPMTestOutcome.F>([\s\S]*?)<\/cim:MPMTestOutcome.F>/g, sub, context, true);
            /**
             * Disabled
             */
            obj["D"] = base.parse_element (/<cim:MPMTestOutcome.D>([\s\S]*?)<\/cim:MPMTestOutcome.D>/g, sub, context, true);
            /**
             * Skipped
             */
            obj["S"] = base.parse_element (/<cim:MPMTestOutcome.S>([\s\S]*?)<\/cim:MPMTestOutcome.S>/g, sub, context, true);
            bucket = context.parsed.MPMTestOutcome;
            if (null == bucket)
                context.parsed.MPMTestOutcome = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
        0: ignore ramping limits, 
        1: 20-minute ramping rule,
         * 2: 60-minute ramping rule
         */
        function parse_RampModeType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "RampModeType";
            /**
             * Ignore ramping limits
             */
            obj["0"] = base.parse_element (/<cim:RampModeType.0>([\s\S]*?)<\/cim:RampModeType.0>/g, sub, context, true);
            /**
             * 20-minute ramping rule,
             */
            obj["1"] = base.parse_element (/<cim:RampModeType.1>([\s\S]*?)<\/cim:RampModeType.1>/g, sub, context, true);
            /**
             * 60-minute ramping rule
             */
            obj["2"] = base.parse_element (/<cim:RampModeType.2>([\s\S]*?)<\/cim:RampModeType.2>/g, sub, context, true);
            bucket = context.parsed.RampModeType;
            if (null == bucket)
                context.parsed.RampModeType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
         * Energy, Reg Up, Reg Down, Spin Reserve, Nonspin Reserve, RUC, Load Folloing Up, and Load Following Down.
         */
        function parse_MarketProductType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketProductType";
            /**
             * energy type
             */
            obj["EN"] = base.parse_element (/<cim:MarketProductType.EN>([\s\S]*?)<\/cim:MarketProductType.EN>/g, sub, context, true);
            /**
             * regulation up
             */
            obj["RU"] = base.parse_element (/<cim:MarketProductType.RU>([\s\S]*?)<\/cim:MarketProductType.RU>/g, sub, context, true);
            /**
             * regulation down
             */
            obj["RD"] = base.parse_element (/<cim:MarketProductType.RD>([\s\S]*?)<\/cim:MarketProductType.RD>/g, sub, context, true);
            /**
             * spinning reserve
             */
            obj["SR"] = base.parse_element (/<cim:MarketProductType.SR>([\s\S]*?)<\/cim:MarketProductType.SR>/g, sub, context, true);
            /**
             * non spinning reserve
             */
            obj["NR"] = base.parse_element (/<cim:MarketProductType.NR>([\s\S]*?)<\/cim:MarketProductType.NR>/g, sub, context, true);
            /**
             * Residual Unit Commitment
             */
            obj["RC"] = base.parse_element (/<cim:MarketProductType.RC>([\s\S]*?)<\/cim:MarketProductType.RC>/g, sub, context, true);
            /**
             * Load following up
             */
            obj["LFU"] = base.parse_element (/<cim:MarketProductType.LFU>([\s\S]*?)<\/cim:MarketProductType.LFU>/g, sub, context, true);
            /**
             * Load following down
             */
            obj["LFD"] = base.parse_element (/<cim:MarketProductType.LFD>([\s\S]*?)<\/cim:MarketProductType.LFD>/g, sub, context, true);
            /**
             * Regulation
             */
            obj["REG"] = base.parse_element (/<cim:MarketProductType.REG>([\s\S]*?)<\/cim:MarketProductType.REG>/g, sub, context, true);
            bucket = context.parsed.MarketProductType;
            if (null == bucket)
                context.parsed.MarketProductType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Market power mitigation test identifier type, for example:
        
        1 ? Global Price Test
        2 ? Global Conduct Test
        3 ? Global Impact Test
        4 ? Local Price Test
        5 ? Local Conduct Test
         * 6 ? Local Impact Test
         */
        function parse_MPMTestIdentifierType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MPMTestIdentifierType";
            /**
             * 1 - Global Price Test.
             */
            obj["1"] = base.parse_element (/<cim:MPMTestIdentifierType.1>([\s\S]*?)<\/cim:MPMTestIdentifierType.1>/g, sub, context, true);
            /**
             * 2 - Global Conduct Test.
             */
            obj["2"] = base.parse_element (/<cim:MPMTestIdentifierType.2>([\s\S]*?)<\/cim:MPMTestIdentifierType.2>/g, sub, context, true);
            /**
             * 3 - Global Impact Test.
             */
            obj["3"] = base.parse_element (/<cim:MPMTestIdentifierType.3>([\s\S]*?)<\/cim:MPMTestIdentifierType.3>/g, sub, context, true);
            /**
             * 4 - Local Price Test.
             */
            obj["4"] = base.parse_element (/<cim:MPMTestIdentifierType.4>([\s\S]*?)<\/cim:MPMTestIdentifierType.4>/g, sub, context, true);
            /**
             * 5 - Local Conduct Test.
             */
            obj["5"] = base.parse_element (/<cim:MPMTestIdentifierType.5>([\s\S]*?)<\/cim:MPMTestIdentifierType.5>/g, sub, context, true);
            /**
             * 6 - Local Impact Test.
             */
            obj["6"] = base.parse_element (/<cim:MPMTestIdentifierType.6>([\s\S]*?)<\/cim:MPMTestIdentifierType.6>/g, sub, context, true);
            bucket = context.parsed.MPMTestIdentifierType;
            if (null == bucket)
                context.parsed.MPMTestIdentifierType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Indication of which type of self schedule is being referenced.
         */
        function parse_SelfSchedReferenceType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SelfSchedReferenceType";
            /**
             * Existing transmission contract.
             */
            obj["ETC"] = base.parse_element (/<cim:SelfSchedReferenceType.ETC>([\s\S]*?)<\/cim:SelfSchedReferenceType.ETC>/g, sub, context, true);
            /**
             * Transmission ownership right.
             */
            obj["TOR"] = base.parse_element (/<cim:SelfSchedReferenceType.TOR>([\s\S]*?)<\/cim:SelfSchedReferenceType.TOR>/g, sub, context, true);
            bucket = context.parsed.SelfSchedReferenceType;
            if (null == bucket)
                context.parsed.SelfSchedReferenceType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Load forecast zone types.
         */
        function parse_LoadForecastType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "LoadForecastType";
            /**
             * Load forecast zone.
             */
            obj["LFZ"] = base.parse_element (/<cim:LoadForecastType.LFZ>([\s\S]*?)<\/cim:LoadForecastType.LFZ>/g, sub, context, true);
            /**
             * Metered sub system zone.
             */
            obj["LZMS"] = base.parse_element (/<cim:LoadForecastType.LZMS>([\s\S]*?)<\/cim:LoadForecastType.LZMS>/g, sub, context, true);
            bucket = context.parsed.LoadForecastType;
            if (null == bucket)
                context.parsed.LoadForecastType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Trade type.
         */
        function parse_TradeType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TradeType";
            /**
             * InterSC Trade.
             */
            obj["IST"] = base.parse_element (/<cim:TradeType.IST>([\s\S]*?)<\/cim:TradeType.IST>/g, sub, context, true);
            /**
             * Ancillary Services Trade.
             */
            obj["AST"] = base.parse_element (/<cim:TradeType.AST>([\s\S]*?)<\/cim:TradeType.AST>/g, sub, context, true);
            /**
             * Unit Commitment Trade.
             */
            obj["UCT"] = base.parse_element (/<cim:TradeType.UCT>([\s\S]*?)<\/cim:TradeType.UCT>/g, sub, context, true);
            bucket = context.parsed.TradeType;
            if (null == bucket)
                context.parsed.TradeType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Execution types of Market Runs
         */
        function parse_ExecutionType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ExecutionType";
            /**
             * Day Ahead
             */
            obj["DA"] = base.parse_element (/<cim:ExecutionType.DA>([\s\S]*?)<\/cim:ExecutionType.DA>/g, sub, context, true);
            /**
             * Real TIme Hour Ahead Execution
             */
            obj["HASP"] = base.parse_element (/<cim:ExecutionType.HASP>([\s\S]*?)<\/cim:ExecutionType.HASP>/g, sub, context, true);
            /**
             * Real Time Pre-dispatch
             */
            obj["RTPD"] = base.parse_element (/<cim:ExecutionType.RTPD>([\s\S]*?)<\/cim:ExecutionType.RTPD>/g, sub, context, true);
            /**
             * Real Time Dispatch
             */
            obj["RTD"] = base.parse_element (/<cim:ExecutionType.RTD>([\s\S]*?)<\/cim:ExecutionType.RTD>/g, sub, context, true);
            bucket = context.parsed.ExecutionType;
            if (null == bucket)
                context.parsed.ExecutionType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Locational AS Flags indicating whether the Upper or Lower Bound limit of the AS regional procurment is binding
         */
        function parse_ResourceLimitIndicator (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ResourceLimitIndicator";
            obj["UPPER"] = base.parse_element (/<cim:ResourceLimitIndicator.UPPER>([\s\S]*?)<\/cim:ResourceLimitIndicator.UPPER>/g, sub, context, true);
            obj["LOWER"] = base.parse_element (/<cim:ResourceLimitIndicator.LOWER>([\s\S]*?)<\/cim:ResourceLimitIndicator.LOWER>/g, sub, context, true);
            bucket = context.parsed.ResourceLimitIndicator;
            if (null == bucket)
                context.parsed.ResourceLimitIndicator = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
        'Y' - Participates in both LMPM and SMPM
        'N' - Not included in LMP price measures
        'S' - Participates in SMPM price measures
         * 'L' - Participates in LMPM price measures
         */
        function parse_ParticipationCategoryMPM (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ParticipationCategoryMPM";
            obj["Y"] = base.parse_element (/<cim:ParticipationCategoryMPM.Y>([\s\S]*?)<\/cim:ParticipationCategoryMPM.Y>/g, sub, context, true);
            obj["N"] = base.parse_element (/<cim:ParticipationCategoryMPM.N>([\s\S]*?)<\/cim:ParticipationCategoryMPM.N>/g, sub, context, true);
            obj["S"] = base.parse_element (/<cim:ParticipationCategoryMPM.S>([\s\S]*?)<\/cim:ParticipationCategoryMPM.S>/g, sub, context, true);
            obj["L"] = base.parse_element (/<cim:ParticipationCategoryMPM.L>([\s\S]*?)<\/cim:ParticipationCategoryMPM.L>/g, sub, context, true);
            bucket = context.parsed.ParticipationCategoryMPM;
            if (null == bucket)
                context.parsed.ParticipationCategoryMPM = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of bill media.
         */
        function parse_MktBillMediaKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MktBillMediaKind";
            obj["paper"] = base.parse_element (/<cim:MktBillMediaKind.paper>([\s\S]*?)<\/cim:MktBillMediaKind.paper>/g, sub, context, true);
            obj["electronic"] = base.parse_element (/<cim:MktBillMediaKind.electronic>([\s\S]*?)<\/cim:MktBillMediaKind.electronic>/g, sub, context, true);
            obj["other"] = base.parse_element (/<cim:MktBillMediaKind.other>([\s\S]*?)<\/cim:MktBillMediaKind.other>/g, sub, context, true);
            bucket = context.parsed.MktBillMediaKind;
            if (null == bucket)
                context.parsed.MktBillMediaKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
        'S' - Mitigated by SMPM because of "misconduct"
        'L; - Mitigated by LMPM because of "misconduct"
        'R' - Modified by LMPM because of RMR rules
        'M' - Mitigated because of "misconduct" both by SMPM and LMPM
        'B' - Mitigated because of "misconduct" both by SMPM and modified by LMLM because of RMR rules
         * 'O' - original
         */
        function parse_BidMitigationStatus (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "BidMitigationStatus";
            obj["S"] = base.parse_element (/<cim:BidMitigationStatus.S>([\s\S]*?)<\/cim:BidMitigationStatus.S>/g, sub, context, true);
            obj["L"] = base.parse_element (/<cim:BidMitigationStatus.L>([\s\S]*?)<\/cim:BidMitigationStatus.L>/g, sub, context, true);
            obj["R"] = base.parse_element (/<cim:BidMitigationStatus.R>([\s\S]*?)<\/cim:BidMitigationStatus.R>/g, sub, context, true);
            obj["M"] = base.parse_element (/<cim:BidMitigationStatus.M>([\s\S]*?)<\/cim:BidMitigationStatus.M>/g, sub, context, true);
            obj["B"] = base.parse_element (/<cim:BidMitigationStatus.B>([\s\S]*?)<\/cim:BidMitigationStatus.B>/g, sub, context, true);
            obj["O"] = base.parse_element (/<cim:BidMitigationStatus.O>([\s\S]*?)<\/cim:BidMitigationStatus.O>/g, sub, context, true);
            bucket = context.parsed.BidMitigationStatus;
            if (null == bucket)
                context.parsed.BidMitigationStatus = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Self schedule breakdown type.
         */
        function parse_SelfScheduleBreakdownType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SelfScheduleBreakdownType";
            /**
             * Existing transmission contract.
             */
            obj["ETC"] = base.parse_element (/<cim:SelfScheduleBreakdownType.ETC>([\s\S]*?)<\/cim:SelfScheduleBreakdownType.ETC>/g, sub, context, true);
            /**
             * Transmission ownership right.
             */
            obj["TOR"] = base.parse_element (/<cim:SelfScheduleBreakdownType.TOR>([\s\S]*?)<\/cim:SelfScheduleBreakdownType.TOR>/g, sub, context, true);
            /**
             * Low price taker.
             */
            obj["LPT"] = base.parse_element (/<cim:SelfScheduleBreakdownType.LPT>([\s\S]*?)<\/cim:SelfScheduleBreakdownType.LPT>/g, sub, context, true);
            bucket = context.parsed.SelfScheduleBreakdownType;
            if (null == bucket)
                context.parsed.SelfScheduleBreakdownType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of Market account.
         */
        function parse_MktAccountKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MktAccountKind";
            obj["normal"] = base.parse_element (/<cim:MktAccountKind.normal>([\s\S]*?)<\/cim:MktAccountKind.normal>/g, sub, context, true);
            obj["reversal"] = base.parse_element (/<cim:MktAccountKind.reversal>([\s\S]*?)<\/cim:MktAccountKind.reversal>/g, sub, context, true);
            obj["statistical"] = base.parse_element (/<cim:MktAccountKind.statistical>([\s\S]*?)<\/cim:MktAccountKind.statistical>/g, sub, context, true);
            obj["estimate"] = base.parse_element (/<cim:MktAccountKind.estimate>([\s\S]*?)<\/cim:MktAccountKind.estimate>/g, sub, context, true);
            bucket = context.parsed.MktAccountKind;
            if (null == bucket)
                context.parsed.MktAccountKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Congestion Revenue Rights category types
         */
        function parse_CRRCategoryType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CRRCategoryType";
            /**
             * Network Service
             */
            obj["NSR"] = base.parse_element (/<cim:CRRCategoryType.NSR>([\s\S]*?)<\/cim:CRRCategoryType.NSR>/g, sub, context, true);
            /**
             * Point to Point
             */
            obj["PTP"] = base.parse_element (/<cim:CRRCategoryType.PTP>([\s\S]*?)<\/cim:CRRCategoryType.PTP>/g, sub, context, true);
            bucket = context.parsed.CRRCategoryType;
            if (null == bucket)
                context.parsed.CRRCategoryType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Types of resource registration status, for example:
        
        Active
        Mothballed
        Planned
         * Decommissioned
         */
        function parse_ResourceRegistrationStatus (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ResourceRegistrationStatus";
            /**
             * Resource registration is active
             */
            obj["Active"] = base.parse_element (/<cim:ResourceRegistrationStatus.Active>([\s\S]*?)<\/cim:ResourceRegistrationStatus.Active>/g, sub, context, true);
            /**
             * Registration status is in the planning stage
             */
            obj["Planned"] = base.parse_element (/<cim:ResourceRegistrationStatus.Planned>([\s\S]*?)<\/cim:ResourceRegistrationStatus.Planned>/g, sub, context, true);
            /**
             * Resource registration has been suspended
             */
            obj["Mothballed"] = base.parse_element (/<cim:ResourceRegistrationStatus.Mothballed>([\s\S]*?)<\/cim:ResourceRegistrationStatus.Mothballed>/g, sub, context, true);
            /**
             * Resource registration status is decommissioned
             */
            obj["Decommissioned"] = base.parse_element (/<cim:ResourceRegistrationStatus.Decommissioned>([\s\S]*?)<\/cim:ResourceRegistrationStatus.Decommissioned>/g, sub, context, true);
            bucket = context.parsed.ResourceRegistrationStatus;
            if (null == bucket)
                context.parsed.ResourceRegistrationStatus = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * ON
         * OFF
         */
        function parse_OnOff (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OnOff";
            obj["ON"] = base.parse_element (/<cim:OnOff.ON>([\s\S]*?)<\/cim:OnOff.ON>/g, sub, context, true);
            obj["OFF"] = base.parse_element (/<cim:OnOff.OFF>([\s\S]*?)<\/cim:OnOff.OFF>/g, sub, context, true);
            bucket = context.parsed.OnOff;
            if (null == bucket)
                context.parsed.OnOff = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Role types an organisation can play with respect to a congestion revenue right.
         */
        function parse_CRRRoleType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CRRRoleType";
            obj["SELLER"] = base.parse_element (/<cim:CRRRoleType.SELLER>([\s\S]*?)<\/cim:CRRRoleType.SELLER>/g, sub, context, true);
            obj["BUYER"] = base.parse_element (/<cim:CRRRoleType.BUYER>([\s\S]*?)<\/cim:CRRRoleType.BUYER>/g, sub, context, true);
            obj["OWNER"] = base.parse_element (/<cim:CRRRoleType.OWNER>([\s\S]*?)<\/cim:CRRRoleType.OWNER>/g, sub, context, true);
            bucket = context.parsed.CRRRoleType;
            if (null == bucket)
                context.parsed.CRRRoleType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Aggregated Nodes Types for example:
        <ul>
        	<li>SYS - System Zone/Region; </li>
        </ul>
        <ul>
        	<li>RUC - RUC Zone; </li>
        </ul>
        <ul>
        	<li>LFZ - Load Forecast Zone; </li>
        </ul>
        <ul>
        	<li>REG - Market Energy/Ancillary Service Region; </li>
        </ul>
        <ul>
        	<li>AGR - Aggregate Generation Resource; </li>
        </ul>
        <ul>
        	<li>POD - Point of Delivery; </li>
        </ul>
        <ul>
        	<li>ALR - Aggregate Load Resource; </li>
        </ul>
        <ul>
        	<li>LTAC - Load TransmissionAccessCharge (TAC) Group;</li>
        </ul>
        <ul>
        	<li>ACA - Adjacent Control Area</li>
        </ul>
        <ul>
        	<li>ASR - Aggregated System Resource</li>
        </ul>
        <ul>
        	<li>ECA - Embedded Control Area</li>
         * </ul>
         */
        function parse_AnodeType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AnodeType";
            /**
             * System Zone/Region;
             */
            obj["SYS"] = base.parse_element (/<cim:AnodeType.SYS>([\s\S]*?)<\/cim:AnodeType.SYS>/g, sub, context, true);
            /**
             * RUC Zone
             */
            obj["RUC"] = base.parse_element (/<cim:AnodeType.RUC>([\s\S]*?)<\/cim:AnodeType.RUC>/g, sub, context, true);
            /**
             * Load Forecast Zone
             */
            obj["LFZ"] = base.parse_element (/<cim:AnodeType.LFZ>([\s\S]*?)<\/cim:AnodeType.LFZ>/g, sub, context, true);
            /**
             * Market Energy/Ancillary Service Region;
             */
            obj["REG"] = base.parse_element (/<cim:AnodeType.REG>([\s\S]*?)<\/cim:AnodeType.REG>/g, sub, context, true);
            /**
             * Aggregate Generation Resource;
             */
            obj["AGR"] = base.parse_element (/<cim:AnodeType.AGR>([\s\S]*?)<\/cim:AnodeType.AGR>/g, sub, context, true);
            /**
             * Point of Delivery;
             */
            obj["POD"] = base.parse_element (/<cim:AnodeType.POD>([\s\S]*?)<\/cim:AnodeType.POD>/g, sub, context, true);
            /**
             * Aggregate Load Resource;
             */
            obj["ALR"] = base.parse_element (/<cim:AnodeType.ALR>([\s\S]*?)<\/cim:AnodeType.ALR>/g, sub, context, true);
            /**
             * Load TransmissionAccessCharge (TAC) Group;
             */
            obj["LTAC"] = base.parse_element (/<cim:AnodeType.LTAC>([\s\S]*?)<\/cim:AnodeType.LTAC>/g, sub, context, true);
            /**
             * Adjacent Control Area
             */
            obj["ACA"] = base.parse_element (/<cim:AnodeType.ACA>([\s\S]*?)<\/cim:AnodeType.ACA>/g, sub, context, true);
            /**
             * Aggregated System Resource
             */
            obj["ASR"] = base.parse_element (/<cim:AnodeType.ASR>([\s\S]*?)<\/cim:AnodeType.ASR>/g, sub, context, true);
            /**
             * Embedded Control Area
             */
            obj["ECA"] = base.parse_element (/<cim:AnodeType.ECA>([\s\S]*?)<\/cim:AnodeType.ECA>/g, sub, context, true);
            bucket = context.parsed.AnodeType;
            if (null == bucket)
                context.parsed.AnodeType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Ramp rate curve type.
         */
        function parse_RampRateType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "RampRateType";
            /**
             * Operational ramp rate.
             */
            obj["OP"] = base.parse_element (/<cim:RampRateType.OP>([\s\S]*?)<\/cim:RampRateType.OP>/g, sub, context, true);
            /**
             * Regulating ramp rate.
             */
            obj["REG"] = base.parse_element (/<cim:RampRateType.REG>([\s\S]*?)<\/cim:RampRateType.REG>/g, sub, context, true);
            /**
             * Operating reserve ramp rate.
             */
            obj["OP_RES"] = base.parse_element (/<cim:RampRateType.OP_RES>([\s\S]*?)<\/cim:RampRateType.OP_RES>/g, sub, context, true);
            /**
             * Load drop ramp rate.
             */
            obj["LD_DROP"] = base.parse_element (/<cim:RampRateType.LD_DROP>([\s\S]*?)<\/cim:RampRateType.LD_DROP>/g, sub, context, true);
            /**
             * Load pick up rate.
             */
            obj["LD_PICKUP"] = base.parse_element (/<cim:RampRateType.LD_PICKUP>([\s\S]*?)<\/cim:RampRateType.LD_PICKUP>/g, sub, context, true);
            /**
             * Intertie ramp rate.
             */
            obj["INTERTIE"] = base.parse_element (/<cim:RampRateType.INTERTIE>([\s\S]*?)<\/cim:RampRateType.INTERTIE>/g, sub, context, true);
            bucket = context.parsed.RampRateType;
            if (null == bucket)
                context.parsed.RampRateType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
        WHOLESALE
        RETAIL
         * BOTH
         */
        function parse_EnergyPriceIndexType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "EnergyPriceIndexType";
            obj["WHOLESALE"] = base.parse_element (/<cim:EnergyPriceIndexType.WHOLESALE>([\s\S]*?)<\/cim:EnergyPriceIndexType.WHOLESALE>/g, sub, context, true);
            obj["RETAIL"] = base.parse_element (/<cim:EnergyPriceIndexType.RETAIL>([\s\S]*?)<\/cim:EnergyPriceIndexType.RETAIL>/g, sub, context, true);
            obj["BOTH"] = base.parse_element (/<cim:EnergyPriceIndexType.BOTH>([\s\S]*?)<\/cim:EnergyPriceIndexType.BOTH>/g, sub, context, true);
            bucket = context.parsed.EnergyPriceIndexType;
            if (null == bucket)
                context.parsed.EnergyPriceIndexType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Aggregate Node Types for example:
        AG -  Aggregated Generation
        CPZ -  Custom Price Zone
        DPZ -  Default Price Zone
        LAP - Load Aggregation Point
        TH -  Trading  Hub
        SYS - System Zone
        CA - Control Area
        
        GA - generic aggregation
        EHV - 500 kV
        GH - generic hub
        ZN - zone
        INT - Interface
         * BUS - Bus
         */
        function parse_ApnodeType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ApnodeType";
            /**
             * Aggregated Generation
             */
            obj["AG"] = base.parse_element (/<cim:ApnodeType.AG>([\s\S]*?)<\/cim:ApnodeType.AG>/g, sub, context, true);
            /**
             * Custom Price Zone
             */
            obj["CPZ"] = base.parse_element (/<cim:ApnodeType.CPZ>([\s\S]*?)<\/cim:ApnodeType.CPZ>/g, sub, context, true);
            /**
             * Default Price Zone
             */
            obj["DPZ"] = base.parse_element (/<cim:ApnodeType.DPZ>([\s\S]*?)<\/cim:ApnodeType.DPZ>/g, sub, context, true);
            /**
             * Trading  Hub
             */
            obj["TH"] = base.parse_element (/<cim:ApnodeType.TH>([\s\S]*?)<\/cim:ApnodeType.TH>/g, sub, context, true);
            /**
             * System Zone
             */
            obj["SYS"] = base.parse_element (/<cim:ApnodeType.SYS>([\s\S]*?)<\/cim:ApnodeType.SYS>/g, sub, context, true);
            /**
             * Control Area
             */
            obj["CA"] = base.parse_element (/<cim:ApnodeType.CA>([\s\S]*?)<\/cim:ApnodeType.CA>/g, sub, context, true);
            /**
             * Designated Congestion Area
             */
            obj["DCA"] = base.parse_element (/<cim:ApnodeType.DCA>([\s\S]*?)<\/cim:ApnodeType.DCA>/g, sub, context, true);
            /**
             * generic aggregation
             */
            obj["GA"] = base.parse_element (/<cim:ApnodeType.GA>([\s\S]*?)<\/cim:ApnodeType.GA>/g, sub, context, true);
            /**
             * generic hub
             */
            obj["GH"] = base.parse_element (/<cim:ApnodeType.GH>([\s\S]*?)<\/cim:ApnodeType.GH>/g, sub, context, true);
            /**
             * 500 kV - Extra High Voltage aggregate price nodes
             */
            obj["EHV"] = base.parse_element (/<cim:ApnodeType.EHV>([\s\S]*?)<\/cim:ApnodeType.EHV>/g, sub, context, true);
            /**
             * Zone
             */
            obj["ZN"] = base.parse_element (/<cim:ApnodeType.ZN>([\s\S]*?)<\/cim:ApnodeType.ZN>/g, sub, context, true);
            /**
             * Interface
             */
            obj["INT"] = base.parse_element (/<cim:ApnodeType.INT>([\s\S]*?)<\/cim:ApnodeType.INT>/g, sub, context, true);
            /**
             * Bus
             */
            obj["BUS"] = base.parse_element (/<cim:ApnodeType.BUS>([\s\S]*?)<\/cim:ApnodeType.BUS>/g, sub, context, true);
            bucket = context.parsed.ApnodeType;
            if (null == bucket)
                context.parsed.ApnodeType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
        0 - Fixed ramp rate independent of rate function unit MW output
        1 - Static ramp rates as a function of unit MW output only
         * 2 - Dynamic ramp rates as a function of unit MW output and ramping time
         */
        function parse_RampCurveType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "RampCurveType";
            /**
             * Fixed ramp rate independent of rate function unit MW output
             */
            obj["0"] = base.parse_element (/<cim:RampCurveType.0>([\s\S]*?)<\/cim:RampCurveType.0>/g, sub, context, true);
            /**
             * Static ramp rates as a function of unit MW output only
             */
            obj["1"] = base.parse_element (/<cim:RampCurveType.1>([\s\S]*?)<\/cim:RampCurveType.1>/g, sub, context, true);
            /**
             * Dynamic ramp rates as a function of unit MW output and ramping time
             */
            obj["2"] = base.parse_element (/<cim:RampCurveType.2>([\s\S]*?)<\/cim:RampCurveType.2>/g, sub, context, true);
            bucket = context.parsed.RampCurveType;
            if (null == bucket)
                context.parsed.RampCurveType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Bid self schedule type has two types as the required output of requirements and qualified pre-dispatch.
         */
        function parse_BidTypeRMR (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "BidTypeRMR";
            /**
             * Qualified pre-dispatch bid self schedule type.
             */
            obj["REQUIREMENTS"] = base.parse_element (/<cim:BidTypeRMR.REQUIREMENTS>([\s\S]*?)<\/cim:BidTypeRMR.REQUIREMENTS>/g, sub, context, true);
            /**
             * Output of requirements bid self schedule type.
             */
            obj["QUALIFIED_PREDISPATCH"] = base.parse_element (/<cim:BidTypeRMR.QUALIFIED_PREDISPATCH>([\s\S]*?)<\/cim:BidTypeRMR.QUALIFIED_PREDISPATCH>/g, sub, context, true);
            bucket = context.parsed.BidTypeRMR;
            if (null == bucket)
                context.parsed.BidTypeRMR = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
        NON_RESPONSE
        ACCEPT
        DECLINE
         * PARTIAL.
         */
        function parse_DispatchResponseType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "DispatchResponseType";
            obj["NON_RESPONSE"] = base.parse_element (/<cim:DispatchResponseType.NON_RESPONSE>([\s\S]*?)<\/cim:DispatchResponseType.NON_RESPONSE>/g, sub, context, true);
            obj["ACCEPT"] = base.parse_element (/<cim:DispatchResponseType.ACCEPT>([\s\S]*?)<\/cim:DispatchResponseType.ACCEPT>/g, sub, context, true);
            obj["DECLINE"] = base.parse_element (/<cim:DispatchResponseType.DECLINE>([\s\S]*?)<\/cim:DispatchResponseType.DECLINE>/g, sub, context, true);
            obj["PARTIAL"] = base.parse_element (/<cim:DispatchResponseType.PARTIAL>([\s\S]*?)<\/cim:DispatchResponseType.PARTIAL>/g, sub, context, true);
            bucket = context.parsed.DispatchResponseType;
            if (null == bucket)
                context.parsed.DispatchResponseType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of invoice line item.
         */
        function parse_MktInvoiceLineItemKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MktInvoiceLineItemKind";
            obj["initial"] = base.parse_element (/<cim:MktInvoiceLineItemKind.initial>([\s\S]*?)<\/cim:MktInvoiceLineItemKind.initial>/g, sub, context, true);
            obj["recalculation"] = base.parse_element (/<cim:MktInvoiceLineItemKind.recalculation>([\s\S]*?)<\/cim:MktInvoiceLineItemKind.recalculation>/g, sub, context, true);
            obj["other"] = base.parse_element (/<cim:MktInvoiceLineItemKind.other>([\s\S]*?)<\/cim:MktInvoiceLineItemKind.other>/g, sub, context, true);
            bucket = context.parsed.MktInvoiceLineItemKind;
            if (null == bucket)
                context.parsed.MktInvoiceLineItemKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Binding constraint results limit type, For example:
        MAXIMUM
         * MINIMUM
         */
        function parse_ConstraintLimitType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ConstraintLimitType";
            obj["MAXIMUM"] = base.parse_element (/<cim:ConstraintLimitType.MAXIMUM>([\s\S]*?)<\/cim:ConstraintLimitType.MAXIMUM>/g, sub, context, true);
            obj["MINIMUM"] = base.parse_element (/<cim:ConstraintLimitType.MINIMUM>([\s\S]*?)<\/cim:ConstraintLimitType.MINIMUM>/g, sub, context, true);
            bucket = context.parsed.ConstraintLimitType;
            if (null == bucket)
                context.parsed.ConstraintLimitType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Resource capacity type.
         */
        function parse_ResourceCapacityType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ResourceCapacityType";
            /**
             * Regulation Up.
             */
            obj["RU"] = base.parse_element (/<cim:ResourceCapacityType.RU>([\s\S]*?)<\/cim:ResourceCapacityType.RU>/g, sub, context, true);
            /**
             * Regulation Down.
             */
            obj["RD"] = base.parse_element (/<cim:ResourceCapacityType.RD>([\s\S]*?)<\/cim:ResourceCapacityType.RD>/g, sub, context, true);
            /**
             * Spinning reserve.
             */
            obj["SR"] = base.parse_element (/<cim:ResourceCapacityType.SR>([\s\S]*?)<\/cim:ResourceCapacityType.SR>/g, sub, context, true);
            /**
             * Non spinning reserve.
             */
            obj["NR"] = base.parse_element (/<cim:ResourceCapacityType.NR>([\s\S]*?)<\/cim:ResourceCapacityType.NR>/g, sub, context, true);
            /**
             * Must Offer.
             */
            obj["MO"] = base.parse_element (/<cim:ResourceCapacityType.MO>([\s\S]*?)<\/cim:ResourceCapacityType.MO>/g, sub, context, true);
            /**
             * Flexible Offer.
             */
            obj["FO"] = base.parse_element (/<cim:ResourceCapacityType.FO>([\s\S]*?)<\/cim:ResourceCapacityType.FO>/g, sub, context, true);
            /**
             * Resource Adequacy.
             */
            obj["RA"] = base.parse_element (/<cim:ResourceCapacityType.RA>([\s\S]*?)<\/cim:ResourceCapacityType.RA>/g, sub, context, true);
            /**
             * Reliability Must Run.
             */
            obj["RMR"] = base.parse_element (/<cim:ResourceCapacityType.RMR>([\s\S]*?)<\/cim:ResourceCapacityType.RMR>/g, sub, context, true);
            bucket = context.parsed.ResourceCapacityType;
            if (null == bucket)
                context.parsed.ResourceCapacityType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Circuit Breaker Status (closed or open) of the circuit breaker.
         */
        function parse_SwitchStatusType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SwitchStatusType";
            /**
             * Closed status.
             */
            obj["Closed"] = base.parse_element (/<cim:SwitchStatusType.Closed>([\s\S]*?)<\/cim:SwitchStatusType.Closed>/g, sub, context, true);
            /**
             * Open status.
             */
            obj["Open"] = base.parse_element (/<cim:SwitchStatusType.Open>([\s\S]*?)<\/cim:SwitchStatusType.Open>/g, sub, context, true);
            bucket = context.parsed.SwitchStatusType;
            if (null == bucket)
                context.parsed.SwitchStatusType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Transmission Contract Right type -for example:
         * individual or chain of contract rights
         */
        function parse_TRType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TRType";
            /**
             * TR chain
             */
            obj["CHAIN"] = base.parse_element (/<cim:TRType.CHAIN>([\s\S]*?)<\/cim:TRType.CHAIN>/g, sub, context, true);
            /**
             * Individual TR
             */
            obj["INDIVIDUAL"] = base.parse_element (/<cim:TRType.INDIVIDUAL>([\s\S]*?)<\/cim:TRType.INDIVIDUAL>/g, sub, context, true);
            bucket = context.parsed.TRType;
            if (null == bucket)
                context.parsed.TRType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Congestion Revenue Right hedge type
         */
        function parse_CRRHedgeType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CRRHedgeType";
            obj["OBLIGATION"] = base.parse_element (/<cim:CRRHedgeType.OBLIGATION>([\s\S]*?)<\/cim:CRRHedgeType.OBLIGATION>/g, sub, context, true);
            obj["OPTION"] = base.parse_element (/<cim:CRRHedgeType.OPTION>([\s\S]*?)<\/cim:CRRHedgeType.OPTION>/g, sub, context, true);
            bucket = context.parsed.CRRHedgeType;
            if (null == bucket)
                context.parsed.CRRHedgeType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * MPM Purpose Flag, for example:
        
        Nature of threshold data:
        'M' - Mitigation threshold
         * 'R' - Reporting threshold
         */
        function parse_PurposeFlagType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PurposeFlagType";
            obj["M"] = base.parse_element (/<cim:PurposeFlagType.M>([\s\S]*?)<\/cim:PurposeFlagType.M>/g, sub, context, true);
            obj["R"] = base.parse_element (/<cim:PurposeFlagType.R>([\s\S]*?)<\/cim:PurposeFlagType.R>/g, sub, context, true);
            bucket = context.parsed.PurposeFlagType;
            if (null == bucket)
                context.parsed.PurposeFlagType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Constraint Ramp type
         */
        function parse_ConstraintRampType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ConstraintRampType";
            obj["FAST"] = base.parse_element (/<cim:ConstraintRampType.FAST>([\s\S]*?)<\/cim:ConstraintRampType.FAST>/g, sub, context, true);
            obj["SLOW"] = base.parse_element (/<cim:ConstraintRampType.SLOW>([\s\S]*?)<\/cim:ConstraintRampType.SLOW>/g, sub, context, true);
            bucket = context.parsed.ConstraintRampType;
            if (null == bucket)
                context.parsed.ConstraintRampType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Type of the CRR, from the possible type definitions in the CRR System (e.g. 'LSE', 'ETC').
         */
        function parse_CRRSegmentType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CRRSegmentType";
            obj["AUC"] = base.parse_element (/<cim:CRRSegmentType.AUC>([\s\S]*?)<\/cim:CRRSegmentType.AUC>/g, sub, context, true);
            obj["CAP"] = base.parse_element (/<cim:CRRSegmentType.CAP>([\s\S]*?)<\/cim:CRRSegmentType.CAP>/g, sub, context, true);
            obj["CF"] = base.parse_element (/<cim:CRRSegmentType.CF>([\s\S]*?)<\/cim:CRRSegmentType.CF>/g, sub, context, true);
            /**
             * Converted rights.
             */
            obj["CVR"] = base.parse_element (/<cim:CRRSegmentType.CVR>([\s\S]*?)<\/cim:CRRSegmentType.CVR>/g, sub, context, true);
            /**
             * Existing Transmission Contract.
             */
            obj["ETC"] = base.parse_element (/<cim:CRRSegmentType.ETC>([\s\S]*?)<\/cim:CRRSegmentType.ETC>/g, sub, context, true);
            /**
             * Load Serving Entity.
             */
            obj["LSE"] = base.parse_element (/<cim:CRRSegmentType.LSE>([\s\S]*?)<\/cim:CRRSegmentType.LSE>/g, sub, context, true);
            /**
             * Merchant transmission.
             */
            obj["MT"] = base.parse_element (/<cim:CRRSegmentType.MT>([\s\S]*?)<\/cim:CRRSegmentType.MT>/g, sub, context, true);
            /**
             * Transmission Ownership Rights.
             */
            obj["TOR"] = base.parse_element (/<cim:CRRSegmentType.TOR>([\s\S]*?)<\/cim:CRRSegmentType.TOR>/g, sub, context, true);
            bucket = context.parsed.CRRSegmentType;
            if (null == bucket)
                context.parsed.CRRSegmentType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Types used for resource AS qualifications
         */
        function parse_ResourceAncillaryServiceType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ResourceAncillaryServiceType";
            /**
             * Regulation Up
             */
            obj["REGUP"] = base.parse_element (/<cim:ResourceAncillaryServiceType.REGUP>([\s\S]*?)<\/cim:ResourceAncillaryServiceType.REGUP>/g, sub, context, true);
            /**
             * Regulation Down
             */
            obj["REGDN"] = base.parse_element (/<cim:ResourceAncillaryServiceType.REGDN>([\s\S]*?)<\/cim:ResourceAncillaryServiceType.REGDN>/g, sub, context, true);
            /**
             * Spinning Reserve
             */
            obj["RRSPIN"] = base.parse_element (/<cim:ResourceAncillaryServiceType.RRSPIN>([\s\S]*?)<\/cim:ResourceAncillaryServiceType.RRSPIN>/g, sub, context, true);
            /**
             * Non Spinning Reserve
             */
            obj["NONSPIN"] = base.parse_element (/<cim:ResourceAncillaryServiceType.NONSPIN>([\s\S]*?)<\/cim:ResourceAncillaryServiceType.NONSPIN>/g, sub, context, true);
            /**
             * Reliability Must Run
             */
            obj["RMR"] = base.parse_element (/<cim:ResourceAncillaryServiceType.RMR>([\s\S]*?)<\/cim:ResourceAncillaryServiceType.RMR>/g, sub, context, true);
            /**
             * Black start
             */
            obj["BLACKSTART"] = base.parse_element (/<cim:ResourceAncillaryServiceType.BLACKSTART>([\s\S]*?)<\/cim:ResourceAncillaryServiceType.BLACKSTART>/g, sub, context, true);
            /**
             * Demand Side Reponse
             */
            obj["DSR"] = base.parse_element (/<cim:ResourceAncillaryServiceType.DSR>([\s\S]*?)<\/cim:ResourceAncillaryServiceType.DSR>/g, sub, context, true);
            obj["SYNCCOND"] = base.parse_element (/<cim:ResourceAncillaryServiceType.SYNCCOND>([\s\S]*?)<\/cim:ResourceAncillaryServiceType.SYNCCOND>/g, sub, context, true);
            /**
             * Intermittant resource
             */
            obj["PIRP"] = base.parse_element (/<cim:ResourceAncillaryServiceType.PIRP>([\s\S]*?)<\/cim:ResourceAncillaryServiceType.PIRP>/g, sub, context, true);
            /**
             * Reliability unit commitment
             */
            obj["RUC"] = base.parse_element (/<cim:ResourceAncillaryServiceType.RUC>([\s\S]*?)<\/cim:ResourceAncillaryServiceType.RUC>/g, sub, context, true);
            bucket = context.parsed.ResourceAncillaryServiceType;
            if (null == bucket)
                context.parsed.ResourceAncillaryServiceType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
        Initial
         * Final
         */
        function parse_BidMitigationType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "BidMitigationType";
            obj["I"] = base.parse_element (/<cim:BidMitigationType.I>([\s\S]*?)<\/cim:BidMitigationType.I>/g, sub, context, true);
            obj["F"] = base.parse_element (/<cim:BidMitigationType.F>([\s\S]*?)<\/cim:BidMitigationType.F>/g, sub, context, true);
            bucket = context.parsed.BidMitigationType;
            if (null == bucket)
                context.parsed.BidMitigationType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
         * Operating Reserve, Regulation, Contingency
         */
        function parse_ReserveRequirementType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ReserveRequirementType";
            /**
             * Operating Reserve
             */
            obj["OPRSV"] = base.parse_element (/<cim:ReserveRequirementType.OPRSV>([\s\S]*?)<\/cim:ReserveRequirementType.OPRSV>/g, sub, context, true);
            /**
             * Contingency
             */
            obj["CONT"] = base.parse_element (/<cim:ReserveRequirementType.CONT>([\s\S]*?)<\/cim:ReserveRequirementType.CONT>/g, sub, context, true);
            /**
             * Regulation
             */
            obj["REG"] = base.parse_element (/<cim:ReserveRequirementType.REG>([\s\S]*?)<\/cim:ReserveRequirementType.REG>/g, sub, context, true);
            bucket = context.parsed.ReserveRequirementType;
            if (null == bucket)
                context.parsed.ReserveRequirementType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Valid values, for example: 
        INS - Instruction from RTM
         * ACT - Actual instruction after the fact
         */
        function parse_MQSInstructionSource (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MQSInstructionSource";
            obj["INS"] = base.parse_element (/<cim:MQSInstructionSource.INS>([\s\S]*?)<\/cim:MQSInstructionSource.INS>/g, sub, context, true);
            obj["ACT"] = base.parse_element (/<cim:MQSInstructionSource.ACT>([\s\S]*?)<\/cim:MQSInstructionSource.ACT>/g, sub, context, true);
            bucket = context.parsed.MQSInstructionSource;
            if (null == bucket)
                context.parsed.MQSInstructionSource = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Area's present control mode
         */
        function parse_AreaControlMode (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AreaControlMode";
            /**
             * CF = Constant Frequency
             */
            obj["CF"] = base.parse_element (/<cim:AreaControlMode.CF>([\s\S]*?)<\/cim:AreaControlMode.CF>/g, sub, context, true);
            /**
             * Constant Tie-Line
             */
            obj["CTL"] = base.parse_element (/<cim:AreaControlMode.CTL>([\s\S]*?)<\/cim:AreaControlMode.CTL>/g, sub, context, true);
            /**
             * Tie-Line Bias
             */
            obj["TLB"] = base.parse_element (/<cim:AreaControlMode.TLB>([\s\S]*?)<\/cim:AreaControlMode.TLB>/g, sub, context, true);
            /**
             * Off control
             */
            obj["OFF"] = base.parse_element (/<cim:AreaControlMode.OFF>([\s\S]*?)<\/cim:AreaControlMode.OFF>/g, sub, context, true);
            bucket = context.parsed.AreaControlMode;
            if (null == bucket)
                context.parsed.AreaControlMode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * To indicate a check out type such as adjusted capacity or dispatch capacity
         */
        function parse_CheckOutType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CheckOutType";
            obj["PRE_HOUR"] = base.parse_element (/<cim:CheckOutType.PRE_HOUR>([\s\S]*?)<\/cim:CheckOutType.PRE_HOUR>/g, sub, context, true);
            obj["PRE_SCHEDULE"] = base.parse_element (/<cim:CheckOutType.PRE_SCHEDULE>([\s\S]*?)<\/cim:CheckOutType.PRE_SCHEDULE>/g, sub, context, true);
            obj["AFTER_THE_FACT"] = base.parse_element (/<cim:CheckOutType.AFTER_THE_FACT>([\s\S]*?)<\/cim:CheckOutType.AFTER_THE_FACT>/g, sub, context, true);
            bucket = context.parsed.CheckOutType;
            if (null == bucket)
                context.parsed.CheckOutType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Combined Cycle
        Gas Turbine
        Hydro Turbine
        Other
        Photovoltaic
        Hydro Pump-Turbine
        Reciprocating Engine
        Steam Turbine
        Synchronous Condenser
         * Wind Turbine
         */
        function parse_UnitType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "UnitType";
            /**
             * Combined Cycle
             */
            obj["CCYC"] = base.parse_element (/<cim:UnitType.CCYC>([\s\S]*?)<\/cim:UnitType.CCYC>/g, sub, context, true);
            /**
             * Gas Turbine
             */
            obj["GTUR"] = base.parse_element (/<cim:UnitType.GTUR>([\s\S]*?)<\/cim:UnitType.GTUR>/g, sub, context, true);
            /**
             * Hydro Turbine
             */
            obj["HYDR"] = base.parse_element (/<cim:UnitType.HYDR>([\s\S]*?)<\/cim:UnitType.HYDR>/g, sub, context, true);
            /**
             * Other
             */
            obj["OTHR"] = base.parse_element (/<cim:UnitType.OTHR>([\s\S]*?)<\/cim:UnitType.OTHR>/g, sub, context, true);
            /**
             * Photovoltaic
             */
            obj["PHOT"] = base.parse_element (/<cim:UnitType.PHOT>([\s\S]*?)<\/cim:UnitType.PHOT>/g, sub, context, true);
            /**
             * Hydro Pump-Turbine
             */
            obj["PTUR"] = base.parse_element (/<cim:UnitType.PTUR>([\s\S]*?)<\/cim:UnitType.PTUR>/g, sub, context, true);
            /**
             * Reciprocating Engine
             */
            obj["RECP"] = base.parse_element (/<cim:UnitType.RECP>([\s\S]*?)<\/cim:UnitType.RECP>/g, sub, context, true);
            /**
             * Steam Turbine
             */
            obj["STUR"] = base.parse_element (/<cim:UnitType.STUR>([\s\S]*?)<\/cim:UnitType.STUR>/g, sub, context, true);
            /**
             * Synchronous Condenser
             */
            obj["SYNC"] = base.parse_element (/<cim:UnitType.SYNC>([\s\S]*?)<\/cim:UnitType.SYNC>/g, sub, context, true);
            /**
             * Wind Turbine
             */
            obj["WIND"] = base.parse_element (/<cim:UnitType.WIND>([\s\S]*?)<\/cim:UnitType.WIND>/g, sub, context, true);
            bucket = context.parsed.UnitType;
            if (null == bucket)
                context.parsed.UnitType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For example:
        Bid Cost
        Proxy Cost
         * Registered Cost
         */
        function parse_CostBasis (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CostBasis";
            obj["BIDC"] = base.parse_element (/<cim:CostBasis.BIDC>([\s\S]*?)<\/cim:CostBasis.BIDC>/g, sub, context, true);
            obj["PRXC"] = base.parse_element (/<cim:CostBasis.PRXC>([\s\S]*?)<\/cim:CostBasis.PRXC>/g, sub, context, true);
            obj["REGC"] = base.parse_element (/<cim:CostBasis.REGC>([\s\S]*?)<\/cim:CostBasis.REGC>/g, sub, context, true);
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