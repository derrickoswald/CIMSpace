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
        var EnergyProductType =
        {
            FIRM: "FIRM",
            NFRM: "NFRM",
            DYN: "DYN",
            WHL: "WHL"
        };
        Object.freeze (EnergyProductType);

        /**
         * Indicates whether the unit is RMR and it's condition type, for example:
         * N' - not an RMR unit
         * '1' - RMR Condition 1 unit
         *
         * '2' - RMR Condition 2 unit
         *
         */
        var FlagTypeRMR =
        {
            N: "N",
            _1: "1",
            _2: "2"
        };
        Object.freeze (FlagTypeRMR);

        /**
         * Maket type.
         *
         */
        var MarketType =
        {
            DAM: "DAM",
            RTM: "RTM",
            HAM: "HAM",
            RUC: "RUC"
        };
        Object.freeze (MarketType);

        /**
         * Ramp rate condition
         *
         */
        var RampRateCondition =
        {
            WORST: "WORST",
            BEST: "BEST",
            NORMAL: "NORMAL",
            NA: "NA"
        };
        Object.freeze (RampRateCondition);

        /**
         * The basis used to calculate the bid price curve for an energy default bid.
         *
         */
        var BidCalculationBasis =
        {
            LMP_BASED: "LMP_BASED",
            COST_BASED: "COST_BASED",
            NEGOTIATED: "NEGOTIATED"
        };
        Object.freeze (BidCalculationBasis);

        /**
         * Defines the state of a transaction.
         *
         */
        var EnergyTransactionType =
        {
            approve: "approve",
            deny: "deny",
            study: "study"
        };
        Object.freeze (EnergyTransactionType);

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
        var ContractType =
        {
            ETC: "ETC",
            TOR: "TOR",
            RMR: "RMR",
            RMT: "RMT",
            O: "O",
            TE: "TE",
            TI: "TI",
            CVR: "CVR"
        };
        Object.freeze (ContractType);

        /**
         * For example:
         * DEFAULT_ENERGY_BID
         * DEFAULT_STARTUP_BID
         *
         * DEFAULT_MINIMUM_LOAD_BID
         *
         */
        var BidType =
        {
            DEFAULT_ENERGY_BID: "DEFAULT_ENERGY_BID",
            DEFAULT_STARTUP_BID: "DEFAULT_STARTUP_BID",
            DEFAULT_MINIMUM_LOAD_BID: "DEFAULT_MINIMUM_LOAD_BID"
        };
        Object.freeze (BidType);

        /**
         * Status of equipment
         *
         */
        var EquipmentStatusType =
        {
            In: "In",
            Out: "Out"
        };
        Object.freeze (EquipmentStatusType);

        /**
         * Market product self schedule bid types.
         *
         */
        var MarketProductSelfSchedType =
        {
            ETC: "ETC",
            TOR: "TOR",
            RMR: "RMR",
            RGMR: "RGMR",
            RMT: "RMT",
            PT: "PT",
            LPT: "LPT",
            SP: "SP",
            RA: "RA"
        };
        Object.freeze (MarketProductSelfSchedType);

        /**
         * For example:
         * ADD - add
         *
         * CHG - change
         *
         */
        var MQSCHGType =
        {
            ADD: "ADD",
            CHG: "CHG"
        };
        Object.freeze (MQSCHGType);

        /**
         * Direction of an intertie.
         *
         */
        var InterTieDirection =
        {
            E: "E",
            I: "I"
        };
        Object.freeze (InterTieDirection);

        /**
         * Automatic Dispatch mode
         *
         */
        var AutomaticDispatchMode =
        {
            INTERVAL: "INTERVAL",
            CONTINGENCY: "CONTINGENCY",
            MANUAL: "MANUAL"
        };
        Object.freeze (AutomaticDispatchMode);

        /**
         * For example:
         * SELF - Self commitment
         * ISO - New commitment for this market period
         *
         * UC - Existing commitment that was a hold over from a previous market.
         *
         */
        var CommitmentType =
        {
            SELF: "SELF",
            ISO: "ISO",
            UC: "UC"
        };
        Object.freeze (CommitmentType);

        /**
         * Used as a flag set to Yes or No.
         *
         */
        var YesNo =
        {
            YES: "YES",
            NO: "NO"
        };
        Object.freeze (YesNo);

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
        var ResourceAssnType =
        {
            CSNK: "CSNK",
            CSRC: "CSRC",
            RMR: "RMR",
            SC: "SC",
            LSE: "LSE"
        };
        Object.freeze (ResourceAssnType);

        /**
         * Limit type specified for AnalogLimits.
         *
         */
        var AnalogLimitType =
        {
            BranchMediumTerm: "BranchMediumTerm",
            BranchLongTerm: "BranchLongTerm",
            BranchShortTerm: "BranchShortTerm",
            VoltageHigh: "VoltageHigh",
            VoltageLow: "VoltageLow"
        };
        Object.freeze (AnalogLimitType);

        /**
         * Market power mitigation test method type.
         *
         * Tests with the normal (default) thresholds or tests with the alternate thresholds.
         *
         */
        var MPMTestMethodType =
        {
            NORMAL: "NORMAL",
            ALTERNATE: "ALTERNATE"
        };
        Object.freeze (MPMTestMethodType);

        /**
         * Commitment instruction types.
         *
         */
        var AutomaticDispInstTypeCommitment =
        {
            START_UP: "START_UP",
            SHUT_DOWN: "SHUT_DOWN"
        };
        Object.freeze (AutomaticDispInstTypeCommitment);

        /**
         * Defines the individual passes that produce results per execution type/market type
         *
         */
        var PassIndicatorType =
        {
            MPM_1: "MPM-1",
            MPM_2: "MPM-2",
            MPM_3: "MPM-3",
            MPM_4: "MPM-4",
            RUC: "RUC",
            RTPD: "RTPD",
            RTED: "RTED",
            HA_SCUC: "HA-SCUC",
            DA: "DA"
        };
        Object.freeze (PassIndicatorType);

        /**
         * Action type associated with an ActionRequest against a ParticipantInterfaces::Trade.
         *
         */
        var ActionType =
        {
            CANCEL: "CANCEL"
        };
        Object.freeze (ActionType);

        /**
         * Market results binding constraint types.
         *
         */
        var ResultsConstraintType =
        {
            FG_act: "FG_act",
            Contingency: "Contingency",
            Interface: "Interface",
            Actual: "Actual"
        };
        Object.freeze (ResultsConstraintType);

        /**
         * Specifies the direction of energy flow in the flowgate.
         *
         */
        var FlowDirectionType =
        {
            Forward: "Forward",
            Reverse: "Reverse"
        };
        Object.freeze (FlowDirectionType);

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
        var FuelSource =
        {
            NG: "NG",
            NNG: "NNG",
            BGAS: "BGAS",
            BIOM: "BIOM",
            COAL: "COAL",
            DIST: "DIST",
            GAS: "GAS",
            GEOT: "GEOT",
            HRCV: "HRCV",
            NONE: "NONE",
            NUCL: "NUCL",
            OIL: "OIL",
            OTHR: "OTHR",
            SOLR: "SOLR",
            WAST: "WAST",
            WATR: "WATR",
            WIND: "WIND"
        };
        Object.freeze (FuelSource);

        /**
         * Time of Use used by a CRR definition for specifying the time the CRR spans.
         *
         * ON - CRR spans the on peak hours of the day, OFF - CRR spans the off peak hours of the day, 24HR - CRR spans the entire day.
         *
         */
        var TimeOfUse =
        {
            ON: "ON",
            OFF: "OFF",
            _24HR: "24HR"
        };
        Object.freeze (TimeOfUse);

        /**
         * For example:
         * Passed
         * Failed
         * Disabled
         *
         * Skipped
         *
         */
        var MPMTestOutcome =
        {
            P: "P",
            F: "F",
            D: "D",
            S: "S"
        };
        Object.freeze (MPMTestOutcome);

        /**
         * For example:
         * 0: ignore ramping limits,
         * 1: 20-minute ramping rule,
         *
         * 2: 60-minute ramping rule
         *
         */
        var RampModeType =
        {
            _0: "0",
            _1: "1",
            _2: "2"
        };
        Object.freeze (RampModeType);

        /**
         * For example:
         *
         * Energy, Reg Up, Reg Down, Spin Reserve, Nonspin Reserve, RUC, Load Folloing Up, and Load Following Down.
         *
         */
        var MarketProductType =
        {
            EN: "EN",
            RU: "RU",
            RD: "RD",
            SR: "SR",
            NR: "NR",
            RC: "RC",
            LFU: "LFU",
            LFD: "LFD",
            REG: "REG"
        };
        Object.freeze (MarketProductType);

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
        var MPMTestIdentifierType =
        {
            _1: "1",
            _2: "2",
            _3: "3",
            _4: "4",
            _5: "5",
            _6: "6"
        };
        Object.freeze (MPMTestIdentifierType);

        /**
         * Indication of which type of self schedule is being referenced.
         *
         */
        var SelfSchedReferenceType =
        {
            ETC: "ETC",
            TOR: "TOR"
        };
        Object.freeze (SelfSchedReferenceType);

        /**
         * Load forecast zone types.
         *
         */
        var LoadForecastType =
        {
            LFZ: "LFZ",
            LZMS: "LZMS"
        };
        Object.freeze (LoadForecastType);

        /**
         * Trade type.
         *
         */
        var TradeType =
        {
            IST: "IST",
            AST: "AST",
            UCT: "UCT"
        };
        Object.freeze (TradeType);

        /**
         * Execution types of Market Runs
         *
         */
        var ExecutionType =
        {
            DA: "DA",
            HASP: "HASP",
            RTPD: "RTPD",
            RTD: "RTD"
        };
        Object.freeze (ExecutionType);

        /**
         * Locational AS Flags indicating whether the Upper or Lower Bound limit of the AS regional procurment is binding
         *
         */
        var ResourceLimitIndicator =
        {
            UPPER: "UPPER",
            LOWER: "LOWER"
        };
        Object.freeze (ResourceLimitIndicator);

        /**
         * For example:
         * 'Y' - Participates in both LMPM and SMPM
         * 'N' - Not included in LMP price measures
         * 'S' - Participates in SMPM price measures
         *
         * 'L' - Participates in LMPM price measures
         *
         */
        var ParticipationCategoryMPM =
        {
            Y: "Y",
            N: "N",
            S: "S",
            L: "L"
        };
        Object.freeze (ParticipationCategoryMPM);

        /**
         * Kind of bill media.
         *
         */
        var MktBillMediaKind =
        {
            paper: "paper",
            electronic: "electronic",
            other: "other"
        };
        Object.freeze (MktBillMediaKind);

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
        var BidMitigationStatus =
        {
            S: "S",
            L: "L",
            R: "R",
            M: "M",
            B: "B",
            O: "O"
        };
        Object.freeze (BidMitigationStatus);

        /**
         * Self schedule breakdown type.
         *
         */
        var SelfScheduleBreakdownType =
        {
            ETC: "ETC",
            TOR: "TOR",
            LPT: "LPT"
        };
        Object.freeze (SelfScheduleBreakdownType);

        /**
         * Kind of Market account.
         *
         */
        var MktAccountKind =
        {
            normal: "normal",
            reversal: "reversal",
            statistical: "statistical",
            estimate: "estimate"
        };
        Object.freeze (MktAccountKind);

        /**
         * Congestion Revenue Rights category types
         *
         */
        var CRRCategoryType =
        {
            NSR: "NSR",
            PTP: "PTP"
        };
        Object.freeze (CRRCategoryType);

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
        var ResourceRegistrationStatus =
        {
            Active: "Active",
            Planned: "Planned",
            Mothballed: "Mothballed",
            Decommissioned: "Decommissioned"
        };
        Object.freeze (ResourceRegistrationStatus);

        /**
         * ON
         *
         * OFF
         *
         */
        var OnOff =
        {
            ON: "ON",
            OFF: "OFF"
        };
        Object.freeze (OnOff);

        /**
         * Role types an organisation can play with respect to a congestion revenue right.
         *
         */
        var CRRRoleType =
        {
            SELLER: "SELLER",
            BUYER: "BUYER",
            OWNER: "OWNER"
        };
        Object.freeze (CRRRoleType);

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
        var AnodeType =
        {
            SYS: "SYS",
            RUC: "RUC",
            LFZ: "LFZ",
            REG: "REG",
            AGR: "AGR",
            POD: "POD",
            ALR: "ALR",
            LTAC: "LTAC",
            ACA: "ACA",
            ASR: "ASR",
            ECA: "ECA"
        };
        Object.freeze (AnodeType);

        /**
         * Ramp rate curve type.
         *
         */
        var RampRateType =
        {
            OP: "OP",
            REG: "REG",
            OP_RES: "OP_RES",
            LD_DROP: "LD_DROP",
            LD_PICKUP: "LD_PICKUP",
            INTERTIE: "INTERTIE"
        };
        Object.freeze (RampRateType);

        /**
         * For example:
         * WHOLESALE
         * RETAIL
         *
         * BOTH
         *
         */
        var EnergyPriceIndexType =
        {
            WHOLESALE: "WHOLESALE",
            RETAIL: "RETAIL",
            BOTH: "BOTH"
        };
        Object.freeze (EnergyPriceIndexType);

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
        var ApnodeType =
        {
            AG: "AG",
            CPZ: "CPZ",
            DPZ: "DPZ",
            TH: "TH",
            SYS: "SYS",
            CA: "CA",
            DCA: "DCA",
            GA: "GA",
            GH: "GH",
            EHV: "EHV",
            ZN: "ZN",
            INT: "INT",
            BUS: "BUS"
        };
        Object.freeze (ApnodeType);

        /**
         * For example:
         * 0 - Fixed ramp rate independent of rate function unit MW output
         * 1 - Static ramp rates as a function of unit MW output only
         *
         * 2 - Dynamic ramp rates as a function of unit MW output and ramping time
         *
         */
        var RampCurveType =
        {
            _0: "0",
            _1: "1",
            _2: "2"
        };
        Object.freeze (RampCurveType);

        /**
         * Bid self schedule type has two types as the required output of requirements and qualified pre-dispatch.
         *
         */
        var BidTypeRMR =
        {
            REQUIREMENTS: "REQUIREMENTS",
            QUALIFIED_PREDISPATCH: "QUALIFIED_PREDISPATCH"
        };
        Object.freeze (BidTypeRMR);

        /**
         * For example:
         * NON_RESPONSE
         * ACCEPT
         * DECLINE
         *
         * PARTIAL.
         *
         */
        var DispatchResponseType =
        {
            NON_RESPONSE: "NON_RESPONSE",
            ACCEPT: "ACCEPT",
            DECLINE: "DECLINE",
            PARTIAL: "PARTIAL"
        };
        Object.freeze (DispatchResponseType);

        /**
         * Kind of invoice line item.
         *
         */
        var MktInvoiceLineItemKind =
        {
            initial: "initial",
            recalculation: "recalculation",
            other: "other"
        };
        Object.freeze (MktInvoiceLineItemKind);

        /**
         * Binding constraint results limit type, For example:
         * MAXIMUM
         *
         * MINIMUM
         *
         */
        var ConstraintLimitType =
        {
            MAXIMUM: "MAXIMUM",
            MINIMUM: "MINIMUM"
        };
        Object.freeze (ConstraintLimitType);

        /**
         * Resource capacity type.
         *
         */
        var ResourceCapacityType =
        {
            RU: "RU",
            RD: "RD",
            SR: "SR",
            NR: "NR",
            MO: "MO",
            FO: "FO",
            RA: "RA",
            RMR: "RMR"
        };
        Object.freeze (ResourceCapacityType);

        /**
         * Circuit Breaker Status (closed or open) of the circuit breaker.
         *
         */
        var SwitchStatusType =
        {
            Closed: "Closed",
            Open: "Open"
        };
        Object.freeze (SwitchStatusType);

        /**
         * Transmission Contract Right type -for example:
         *
         * individual or chain of contract rights
         *
         */
        var TRType =
        {
            CHAIN: "CHAIN",
            INDIVIDUAL: "INDIVIDUAL"
        };
        Object.freeze (TRType);

        /**
         * Congestion Revenue Right hedge type
         *
         */
        var CRRHedgeType =
        {
            OBLIGATION: "OBLIGATION",
            OPTION: "OPTION"
        };
        Object.freeze (CRRHedgeType);

        /**
         * MPM Purpose Flag, for example:
         * 
         * Nature of threshold data:
         * 'M' - Mitigation threshold
         *
         * 'R' - Reporting threshold
         *
         */
        var PurposeFlagType =
        {
            M: "M",
            R: "R"
        };
        Object.freeze (PurposeFlagType);

        /**
         * Constraint Ramp type
         *
         */
        var ConstraintRampType =
        {
            FAST: "FAST",
            SLOW: "SLOW"
        };
        Object.freeze (ConstraintRampType);

        /**
         * Type of the CRR, from the possible type definitions in the CRR System (e.g. 'LSE', 'ETC').
         *
         */
        var CRRSegmentType =
        {
            AUC: "AUC",
            CAP: "CAP",
            CF: "CF",
            CVR: "CVR",
            ETC: "ETC",
            LSE: "LSE",
            MT: "MT",
            TOR: "TOR"
        };
        Object.freeze (CRRSegmentType);

        /**
         * Types used for resource AS qualifications
         *
         */
        var ResourceAncillaryServiceType =
        {
            REGUP: "REGUP",
            REGDN: "REGDN",
            RRSPIN: "RRSPIN",
            NONSPIN: "NONSPIN",
            RMR: "RMR",
            BLACKSTART: "BLACKSTART",
            DSR: "DSR",
            SYNCCOND: "SYNCCOND",
            PIRP: "PIRP",
            RUC: "RUC"
        };
        Object.freeze (ResourceAncillaryServiceType);

        /**
         * For example:
         * Initial
         *
         * Final
         *
         */
        var BidMitigationType =
        {
            I: "I",
            F: "F"
        };
        Object.freeze (BidMitigationType);

        /**
         * For example:
         *
         * Operating Reserve, Regulation, Contingency
         *
         */
        var ReserveRequirementType =
        {
            OPRSV: "OPRSV",
            CONT: "CONT",
            REG: "REG"
        };
        Object.freeze (ReserveRequirementType);

        /**
         * Valid values, for example:
         * INS - Instruction from RTM
         *
         * ACT - Actual instruction after the fact
         *
         */
        var MQSInstructionSource =
        {
            INS: "INS",
            ACT: "ACT"
        };
        Object.freeze (MQSInstructionSource);

        /**
         * Area's present control mode
         *
         */
        var AreaControlMode =
        {
            CF: "CF",
            CTL: "CTL",
            TLB: "TLB",
            OFF: "OFF"
        };
        Object.freeze (AreaControlMode);

        /**
         * To indicate a check out type such as adjusted capacity or dispatch capacity
         *
         */
        var CheckOutType =
        {
            PRE_HOUR: "PRE_HOUR",
            PRE_SCHEDULE: "PRE_SCHEDULE",
            AFTER_THE_FACT: "AFTER_THE_FACT"
        };
        Object.freeze (CheckOutType);

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
        var UnitType =
        {
            CCYC: "CCYC",
            GTUR: "GTUR",
            HYDR: "HYDR",
            OTHR: "OTHR",
            PHOT: "PHOT",
            PTUR: "PTUR",
            RECP: "RECP",
            STUR: "STUR",
            SYNC: "SYNC",
            WIND: "WIND"
        };
        Object.freeze (UnitType);

        /**
         * For example:
         * Bid Cost
         * Proxy Cost
         *
         * Registered Cost
         *
         */
        var CostBasis =
        {
            BIDC: "BIDC",
            PRXC: "PRXC",
            REGC: "REGC"
        };
        Object.freeze (CostBasis);

        return (
            {
                SelfSchedReferenceType: SelfSchedReferenceType,
                RampRateCondition: RampRateCondition,
                MPMTestMethodType: MPMTestMethodType,
                MarketProductType: MarketProductType,
                BidMitigationType: BidMitigationType,
                TRType: TRType,
                AutomaticDispatchMode: AutomaticDispatchMode,
                CheckOutType: CheckOutType,
                ContractType: ContractType,
                MPMTestIdentifierType: MPMTestIdentifierType,
                BidCalculationBasis: BidCalculationBasis,
                UnitType: UnitType,
                FlagTypeRMR: FlagTypeRMR,
                ResourceAssnType: ResourceAssnType,
                MktAccountKind: MktAccountKind,
                BidTypeRMR: BidTypeRMR,
                EnergyTransactionType: EnergyTransactionType,
                RampCurveType: RampCurveType,
                ReserveRequirementType: ReserveRequirementType,
                SwitchStatusType: SwitchStatusType,
                AnalogLimitType: AnalogLimitType,
                DispatchResponseType: DispatchResponseType,
                YesNo: YesNo,
                MarketProductSelfSchedType: MarketProductSelfSchedType,
                AutomaticDispInstTypeCommitment: AutomaticDispInstTypeCommitment,
                MQSCHGType: MQSCHGType,
                TimeOfUse: TimeOfUse,
                ConstraintLimitType: ConstraintLimitType,
                BidMitigationStatus: BidMitigationStatus,
                EnergyPriceIndexType: EnergyPriceIndexType,
                CostBasis: CostBasis,
                EquipmentStatusType: EquipmentStatusType,
                LoadForecastType: LoadForecastType,
                MktInvoiceLineItemKind: MktInvoiceLineItemKind,
                AnodeType: AnodeType,
                ConstraintRampType: ConstraintRampType,
                ResourceAncillaryServiceType: ResourceAncillaryServiceType,
                PurposeFlagType: PurposeFlagType,
                CRRCategoryType: CRRCategoryType,
                MQSInstructionSource: MQSInstructionSource,
                ApnodeType: ApnodeType,
                CRRSegmentType: CRRSegmentType,
                RampModeType: RampModeType,
                InterTieDirection: InterTieDirection,
                RampRateType: RampRateType,
                ResourceLimitIndicator: ResourceLimitIndicator,
                MPMTestOutcome: MPMTestOutcome,
                BidType: BidType,
                FlowDirectionType: FlowDirectionType,
                CommitmentType: CommitmentType,
                CRRHedgeType: CRRHedgeType,
                ResultsConstraintType: ResultsConstraintType,
                ResourceRegistrationStatus: ResourceRegistrationStatus,
                FuelSource: FuelSource,
                ActionType: ActionType,
                SelfScheduleBreakdownType: SelfScheduleBreakdownType,
                CRRRoleType: CRRRoleType,
                PassIndicatorType: PassIndicatorType,
                MarketType: MarketType,
                EnergyProductType: EnergyProductType,
                ExecutionType: ExecutionType,
                ParticipationCategoryMPM: ParticipationCategoryMPM,
                ResourceCapacityType: ResourceCapacityType,
                AreaControlMode: AreaControlMode,
                OnOff: OnOff,
                MktBillMediaKind: MktBillMediaKind,
                TradeType: TradeType
            }
        );
    }
);