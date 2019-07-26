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
        let AnodeType =
        {
            "SYS": "SYS",
            "RUC": "RUC",
            "LFZ": "LFZ",
            "REG": "REG",
            "AGR": "AGR",
            "POD": "POD",
            "ALR": "ALR",
            "LTAC": "LTAC",
            "ACA": "ACA",
            "ASR": "ASR",
            "ECA": "ECA",
            "DER": "DER"
        };
        Object.freeze (AnodeType);

        /**
         * ON
         *
         * OFF
         *
         */
        let OnOff =
        {
            "ON": "ON",
            "OFF": "OFF"
        };
        Object.freeze (OnOff);

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
        let FuelSource =
        {
            "NG": "NG",
            "NNG": "NNG",
            "BGAS": "BGAS",
            "BIOM": "BIOM",
            "COAL": "COAL",
            "DIST": "DIST",
            "GAS": "GAS",
            "GEOT": "GEOT",
            "HRCV": "HRCV",
            "NONE": "NONE",
            "NUCL": "NUCL",
            "OIL": "OIL",
            "OTHR": "OTHR",
            "SOLR": "SOLR",
            "WAST": "WAST",
            "WATR": "WATR",
            "WIND": "WIND"
        };
        Object.freeze (FuelSource);

        /**
         * Indicates whether the unit is RMR and it's condition type, for example:
         * N' - not an RMR unit
         * '1' - RMR Condition 1 unit
         *
         * '2' - RMR Condition 2 unit
         *
         */
        let FlagTypeRMR =
        {
            "N": "N",
            "_1": "1",
            "_2": "2"
        };
        Object.freeze (FlagTypeRMR);

        /**
         * Kind of bill media.
         *
         */
        let MktBillMediaKind =
        {
            "paper": "paper",
            "electronic": "electronic",
            "other": "other"
        };
        Object.freeze (MktBillMediaKind);

        /**
         * Resource capacity type.
         *
         */
        let ResourceCapacityType =
        {
            "RU": "RU",
            "RD": "RD",
            "SR": "SR",
            "NR": "NR",
            "MO": "MO",
            "FO": "FO",
            "RA": "RA",
            "RMR": "RMR"
        };
        Object.freeze (ResourceCapacityType);

        /**
         * Ramp rate curve type.
         *
         */
        let RampRateType =
        {
            "OP": "OP",
            "REG": "REG",
            "OP_RES": "OP_RES",
            "LD_DROP": "LD_DROP",
            "LD_PICKUP": "LD_PICKUP",
            "INTERTIE": "INTERTIE"
        };
        Object.freeze (RampRateType);

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
        let UnitType =
        {
            "CCYC": "CCYC",
            "GTUR": "GTUR",
            "HYDR": "HYDR",
            "OTHR": "OTHR",
            "PHOT": "PHOT",
            "PTUR": "PTUR",
            "RECP": "RECP",
            "STUR": "STUR",
            "SYNC": "SYNC",
            "WIND": "WIND"
        };
        Object.freeze (UnitType);

        /**
         * The basis used to calculate the bid price curve for an energy default bid.
         *
         */
        let BidCalculationBasis =
        {
            "LMP_BASED": "LMP_BASED",
            "COST_BASED": "COST_BASED",
            "NEGOTIATED": "NEGOTIATED"
        };
        Object.freeze (BidCalculationBasis);

        /**
         * For example:
         * SELF - Self commitment
         * ISO - New commitment for this market period
         *
         * UC - Existing commitment that was a hold over from a previous market
         *
         */
        let CommitmentType =
        {
            "SELF": "SELF",
            "ISO": "ISO",
            "UC": "UC"
        };
        Object.freeze (CommitmentType);

        /**
         * Constraint Ramp type.
         *
         */
        let ConstraintRampType =
        {
            "SLOW": "SLOW",
            "FAST": "FAST"
        };
        Object.freeze (ConstraintRampType);

        /**
         * Market power mitigation test method type.
         *
         * Tests with the normal (default) thresholds or tests with the alternate thresholds.
         *
         */
        let MPMTestMethodType =
        {
            "NORMAL": "NORMAL",
            "ALTERNATE": "ALTERNATE"
        };
        Object.freeze (MPMTestMethodType);

        /**
         * Transmission Contract Right type -for example:
         *
         * individual or chain of contract rights
         *
         */
        let TRType =
        {
            "CHAIN": "CHAIN",
            "INDIVIDUAL": "INDIVIDUAL"
        };
        Object.freeze (TRType);

        /**
         * MPM Purpose Flag, for example:
         * 
         * Nature of threshold data:
         * 'M' - Mitigation threshold
         *
         * 'R' - Reporting threshold
         *
         */
        let PurposeFlagType =
        {
            "M": "M",
            "R": "R"
        };
        Object.freeze (PurposeFlagType);

        /**
         * Energy product type.
         *
         */
        let EnergyProductType =
        {
            "FIRM": "FIRM",
            "NFRM": "NFRM",
            "DYN": "DYN",
            "WHL": "WHL"
        };
        Object.freeze (EnergyProductType);

        /**
         * Market product self schedule bid types.
         *
         */
        let MarketProductSelfSchedType =
        {
            "ETC": "ETC",
            "TOR": "TOR",
            "RMR": "RMR",
            "RGMR": "RGMR",
            "RMT": "RMT",
            "PT": "PT",
            "LPT": "LPT",
            "SP": "SP",
            "RA": "RA"
        };
        Object.freeze (MarketProductSelfSchedType);

        /**
         * Specifies the direction of energy flow in the flowgate.
         *
         */
        let FlowDirectionType =
        {
            "Forward": "Forward",
            "Reverse": "Reverse"
        };
        Object.freeze (FlowDirectionType);

        /**
         * Direction of an intertie.
         *
         */
        let InterTieDirection =
        {
            "E": "E",
            "I": "I"
        };
        Object.freeze (InterTieDirection);

        /**
         * Role types an organisation can play with respect to a congestion revenue right.
         *
         */
        let CRRRoleType =
        {
            "SELLER": "SELLER",
            "BUYER": "BUYER",
            "OWNER": "OWNER"
        };
        Object.freeze (CRRRoleType);

        /**
         * Types used for resource certification.
         *
         */
        let ResourceCertificationKind =
        {
            "RegulationUp": "RegulationUp",
            "RegulationDown": "RegulationDown",
            "SpinningReserve": "SpinningReserve",
            "NonSpinningReserve": "NonSpinningReserve",
            "ReliabilityMustRun": "ReliabilityMustRun",
            "BLACKSTART": "BLACKSTART",
            "DemandSideResponse": "DemandSideResponse",
            "SynchronousCondenser": "SynchronousCondenser",
            "IntermittentResource": "IntermittentResource",
            "ReliabilityUnitCommitment": "ReliabilityUnitCommitment",
            "Energy": "Energy",
            "Capacity": "Capacity"
        };
        Object.freeze (ResourceCertificationKind);

        /**
         * Execution types of Market Runs.
         *
         */
        let ExecutionType =
        {
            "DA": "DA",
            "HASP": "HASP",
            "RTPD": "RTPD",
            "RTD": "RTD"
        };
        Object.freeze (ExecutionType);

        /**
         * For example:
         * Passed
         * Failed
         * Disabled
         *
         * Skipped
         *
         */
        let MPMTestOutcome =
        {
            "P": "P",
            "F": "F",
            "D": "D",
            "S": "S"
        };
        Object.freeze (MPMTestOutcome);

        /**
         * Kind of Market account.
         *
         */
        let MktAccountKind =
        {
            "normal": "normal",
            "reversal": "reversal",
            "statistical": "statistical",
            "estimate": "estimate"
        };
        Object.freeze (MktAccountKind);

        /**
         * For example:
         * 'Y' - Participates in both LMPM and SMPM
         * 'N' - Not included in LMP price measures
         * 'S' - Participates in SMPM price measures
         *
         * 'L' - Participates in LMPM price measures
         *
         */
        let ParticipationCategoryMPM =
        {
            "Y": "Y",
            "N": "N",
            "S": "S",
            "L": "L"
        };
        Object.freeze (ParticipationCategoryMPM);

        /**
         * For example:
         * DEFAULT_ENERGY_BID
         * DEFAULT_STARTUP_BID
         *
         * DEFAULT_MINIMUM_LOAD_BID
         *
         */
        let BidType =
        {
            "DEFAULT_ENERGY_BID": "DEFAULT_ENERGY_BID",
            "DEFAULT_STARTUP_BID": "DEFAULT_STARTUP_BID",
            "DEFAULT_MINIMUM_LOAD_BID": "DEFAULT_MINIMUM_LOAD_BID"
        };
        Object.freeze (BidType);

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
        let ApnodeType =
        {
            "AG": "AG",
            "CPZ": "CPZ",
            "DPZ": "DPZ",
            "TH": "TH",
            "SYS": "SYS",
            "CA": "CA",
            "DCA": "DCA",
            "GA": "GA",
            "GH": "GH",
            "EHV": "EHV",
            "ZN": "ZN",
            "INT": "INT",
            "BUS": "BUS"
        };
        Object.freeze (ApnodeType);

        /**
         * Ramp rate condition.
         *
         */
        let RampRateCondition =
        {
            "WORST": "WORST",
            "BEST": "BEST",
            "NORMAL": "NORMAL",
            "NA": "NA"
        };
        Object.freeze (RampRateCondition);

        /**
         * Market event status types.
         *
         */
        let MarketEventStatusKind =
        {
            "active": "active",
            "cancelled": "cancelled",
            "completed": "completed",
            "planned": "planned"
        };
        Object.freeze (MarketEventStatusKind);

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
         * CVR - Converted contract
         *
         */
        let ContractType =
        {
            "ETC": "ETC",
            "TOR": "TOR",
            "RMR": "RMR",
            "RMT": "RMT",
            "O": "O",
            "TE": "TE",
            "TI": "TI",
            "CVR": "CVR"
        };
        Object.freeze (ContractType);

        /**
         * Circuit Breaker Status (closed or open) of the circuit breaker.
         *
         */
        let SwitchStatusType =
        {
            "Closed": "Closed",
            "Open": "Open"
        };
        Object.freeze (SwitchStatusType);

        /**
         * Automatic Dispatch mode.
         *
         */
        let AutomaticDispatchMode =
        {
            "INTERVAL": "INTERVAL",
            "CONTINGENCY": "CONTINGENCY",
            "MANUAL": "MANUAL"
        };
        Object.freeze (AutomaticDispatchMode);

        /**
         * Indication of which type of self schedule is being referenced.
         *
         */
        let SelfSchedReferenceType =
        {
            "ETC": "ETC",
            "TOR": "TOR"
        };
        Object.freeze (SelfSchedReferenceType);

        /**
         * Congestion Revenue Right hedge type.
         *
         */
        let CRRHedgeType =
        {
            "OBLIGATION": "OBLIGATION",
            "OPTION": "OPTION"
        };
        Object.freeze (CRRHedgeType);

        /**
         * Unit regulation kind.
         *
         */
        let UnitRegulationKind =
        {
            "_0": "0",
            "_1": "1",
            "_2": "2"
        };
        Object.freeze (UnitRegulationKind);

        /**
         * For example:
         * WHOLESALE
         * RETAIL
         *
         * BOTH
         *
         */
        let EnergyPriceIndexType =
        {
            "WHOLESALE": "WHOLESALE",
            "RETAIL": "RETAIL",
            "BOTH": "BOTH"
        };
        Object.freeze (EnergyPriceIndexType);

        /**
         * Bid self schedule type has two types as the required output of requirements and qualified pre-dispatch.
         *
         */
        let BidTypeRMR =
        {
            "REQUIREMENTS": "REQUIREMENTS",
            "QUALIFIED_PREDISPATCH": "QUALIFIED_PREDISPATCH"
        };
        Object.freeze (BidTypeRMR);

        /**
         * Market type.
         *
         */
        let MarketType =
        {
            "DAM": "DAM",
            "RTM": "RTM",
            "HAM": "HAM",
            "RUC": "RUC"
        };
        Object.freeze (MarketType);

        /**
         * For example:
         * Initial
         *
         * Final
         *
         */
        let BidMitigationType =
        {
            "I": "I",
            "F": "F"
        };
        Object.freeze (BidMitigationType);

        /**
         * Trade type.
         *
         */
        let TradeType =
        {
            "IST": "IST",
            "AST": "AST",
            "UCT": "UCT"
        };
        Object.freeze (TradeType);

        /**
         * Defines the individual passes that produce results per execution type/market type.
         *
         */
        let PassIndicatorType =
        {
            "MPM_1": "MPM-1",
            "MPM_2": "MPM-2",
            "MPM_3": "MPM-3",
            "MPM_4": "MPM-4",
            "RUC": "RUC",
            "RTPD": "RTPD",
            "RTED": "RTED",
            "HA_SCUC": "HA-SCUC",
            "DA": "DA"
        };
        Object.freeze (PassIndicatorType);

        /**
         * Defines the state of a transaction.
         *
         */
        let EnergyTransactionType =
        {
            "approve": "approve",
            "deny": "deny",
            "study": "study"
        };
        Object.freeze (EnergyTransactionType);

        /**
         * Commitment instruction types.
         *
         */
        let AutomaticDispInstTypeCommitment =
        {
            "START_UP": "START_UP",
            "SHUT_DOWN": "SHUT_DOWN",
            "DR_DEPLOY": "DR_DEPLOY",
            "DR_RELEASE": "DR_RELEASE",
            "DR_ADJUSTMENT": "DR_ADJUSTMENT"
        };
        Object.freeze (AutomaticDispInstTypeCommitment);

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
        let ResourceRegistrationStatus =
        {
            "Active": "Active",
            "Planned": "Planned",
            "Mothballed": "Mothballed",
            "Decommissioned": "Decommissioned"
        };
        Object.freeze (ResourceRegistrationStatus);

        /**
         * Valid values, for example:
         * INS - Instruction from RTM
         *
         * ACT - Actual instruction after the fact
         *
         */
        let MQSInstructionSource =
        {
            "INS": "INS",
            "ACT": "ACT"
        };
        Object.freeze (MQSInstructionSource);

        /**
         * Type of the CRR, from the possible type definitions in the CRR System (e.g. 'LSE', 'ETC').
         *
         */
        let CRRSegmentType =
        {
            "AUC": "AUC",
            "CAP": "CAP",
            "CF": "CF",
            "CVR": "CVR",
            "ETC": "ETC",
            "LSE": "LSE",
            "MT": "MT",
            "TOR": "TOR"
        };
        Object.freeze (CRRSegmentType);

        /**
         * Action type associated with an ActionRequest against a ParticipantInterfaces::Trade.
         *
         */
        let ActionType =
        {
            "CANCEL": "CANCEL"
        };
        Object.freeze (ActionType);

        /**
         * For example:
         *
         * Operating Reserve, Regulation, Contingency
         *
         */
        let ReserveRequirementType =
        {
            "OPRSV": "OPRSV",
            "CONT": "CONT",
            "REG": "REG"
        };
        Object.freeze (ReserveRequirementType);

        /**
         * Load forecast zone types.
         *
         */
        let LoadForecastType =
        {
            "LFZ": "LFZ",
            "LZMS": "LZMS"
        };
        Object.freeze (LoadForecastType);

        /**
         * For example:
         * NON_RESPONSE
         * ACCEPT
         * DECLINE
         *
         * PARTIAL
         *
         */
        let DispatchResponseType =
        {
            "NON_RESPONSE": "NON_RESPONSE",
            "ACCEPT": "ACCEPT",
            "DECLINE": "DECLINE",
            "PARTIAL": "PARTIAL"
        };
        Object.freeze (DispatchResponseType);

        /**
         * Area's present control mode.
         *
         */
        let AreaControlMode =
        {
            "CF": "CF",
            "CTL": "CTL",
            "TLB": "TLB",
            "OFF": "OFF"
        };
        Object.freeze (AreaControlMode);

        /**
         * Locational AS Flags indicating whether the Upper or Lower Bound limit of the AS regional procurement is binding.
         *
         */
        let ResourceLimitIndicator =
        {
            "UPPER": "UPPER",
            "LOWER": "LOWER"
        };
        Object.freeze (ResourceLimitIndicator);

        /**
         * For example:
         * ADD - add
         *
         * CHG - change
         *
         */
        let MQSCHGType =
        {
            "ADD": "ADD",
            "CHG": "CHG"
        };
        Object.freeze (MQSCHGType);

        /**
         * For example:
         * 0 - Fixed ramp rate independent of rate function unit MW output
         * 1 - Static ramp rates as a function of unit MW output only
         *
         * 2 - Dynamic ramp rates as a function of unit MW output and ramping time
         *
         */
        let RampCurveType =
        {
            "_2": "2",
            "_0": "0",
            "_1": "1"
        };
        Object.freeze (RampCurveType);

        /**
         * Self schedule breakdown type.
         *
         */
        let SelfScheduleBreakdownType =
        {
            "ETC": "ETC",
            "TOR": "TOR",
            "LPT": "LPT"
        };
        Object.freeze (SelfScheduleBreakdownType);

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
        let ResourceAssnType =
        {
            "CSNK": "CSNK",
            "CSRC": "CSRC",
            "RMR": "RMR",
            "SC": "SC",
            "LSE": "LSE"
        };
        Object.freeze (ResourceAssnType);

        /**
         * Status of equipment.
         *
         */
        let EquipmentStatusType =
        {
            "In": "In",
            "Out": "Out"
        };
        Object.freeze (EquipmentStatusType);

        /**
         * Market results binding constraint types.
         *
         */
        let ResultsConstraintType =
        {
            "FG_act": "FG_act",
            "Contingency": "Contingency",
            "Interface": "Interface",
            "Actual": "Actual"
        };
        Object.freeze (ResultsConstraintType);

        /**
         * Kind of invoice line item.
         *
         */
        let MktInvoiceLineItemKind =
        {
            "initial": "initial",
            "recalculation": "recalculation",
            "other": "other"
        };
        Object.freeze (MktInvoiceLineItemKind);

        /**
         * Congestion Revenue Rights category types.
         *
         */
        let CRRCategoryType =
        {
            "NSR": "NSR",
            "PTP": "PTP"
        };
        Object.freeze (CRRCategoryType);

        /**
         * To indicate a check out type such as adjusted capacity or dispatch capacity.
         *
         */
        let CheckOutType =
        {
            "PRE_HOUR": "PRE_HOUR",
            "PRE_SCHEDULE": "PRE_SCHEDULE",
            "AFTER_THE_FACT": "AFTER_THE_FACT"
        };
        Object.freeze (CheckOutType);

        /**
         * Value of this enumeration for different prices include "total" for the complete/full/all-in price, "congestion" for the congestion cost associated with the total price, the "loss" for the loss price associated with the total price, "capacity" for prices related to installed or reserved capacity, "mileage" for use-based accounting, "system" for system-wide/copper-plate prices, and "delivery" for distribution-based prices.
         *
         */
        let PriceTypeKind =
        {
            "capacity": "capacity",
            "congestion": "congestion",
            "delivery": "delivery",
            "loss": "loss",
            "mileage": "mileage",
            "system": "system",
            "total": "total"
        };
        Object.freeze (PriceTypeKind);

        /**
         * For example:
         * Bid Cost
         * Proxy Cost
         *
         * Registered Cost
         *
         */
        let CostBasis =
        {
            "BIDC": "BIDC",
            "PRXC": "PRXC",
            "REGC": "REGC"
        };
        Object.freeze (CostBasis);

        /**
         * Used as a flag set to Yes or No.
         *
         */
        let YesNo =
        {
            "YES": "YES",
            "NO": "NO"
        };
        Object.freeze (YesNo);

        /**
         * Limit type specified for AnalogLimits.
         *
         */
        let AnalogLimitType =
        {
            "BranchMediumTerm": "BranchMediumTerm",
            "BranchLongTerm": "BranchLongTerm",
            "BranchShortTerm": "BranchShortTerm",
            "VoltageHigh": "VoltageHigh",
            "VoltageLow": "VoltageLow"
        };
        Object.freeze (AnalogLimitType);

        /**
         * Market power mitigation test identifier type, for example:
         * 
         * 1 - Global Price Test
         * 2 - Global Conduct Test
         * 3 - Global Impact Test
         * 4 - Local Price Test
         * 5 - Local Conduct Test
         *
         * 6 - Local Impact Test
         *
         */
        let MPMTestIdentifierType =
        {
            "_1": "1",
            "_2": "2",
            "_3": "3",
            "_4": "4",
            "_5": "5",
            "_6": "6"
        };
        Object.freeze (MPMTestIdentifierType);

        /**
         * Binding constraint results limit type, For example:
         * MAXIMUM
         *
         * MINIMUM
         *
         */
        let ConstraintLimitType =
        {
            "MAXIMUM": "MAXIMUM",
            "MINIMUM": "MINIMUM"
        };
        Object.freeze (ConstraintLimitType);

        /**
         * Time of Use used by a CRR definition for specifying the time the CRR spans.
         *
         * ON - CRR spans the on peak hours of the day, OFF - CRR spans the off peak hours of the day, 24HR - CRR spans the entire day.
         *
         */
        let TimeOfUse =
        {
            "ON": "ON",
            "OFF": "OFF",
            "_24HR": "24HR"
        };
        Object.freeze (TimeOfUse);

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
        let BidMitigationStatus =
        {
            "S": "S",
            "L": "L",
            "R": "R",
            "M": "M",
            "B": "B",
            "O": "O"
        };
        Object.freeze (BidMitigationStatus);

        /**
         * For example:
         *
         * Energy, Reg Up, Reg Down, Spin Reserve, Nonspin Reserve, RUC, Load Folloing Up, and Load Following Down.
         *
         */
        let MarketProductType =
        {
            "EN": "EN",
            "RU": "RU",
            "RD": "RD",
            "SR": "SR",
            "NR": "NR",
            "RC": "RC",
            "LFU": "LFU",
            "LFD": "LFD",
            "REG": "REG"
        };
        Object.freeze (MarketProductType);

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
                PriceTypeKind: PriceTypeKind,
                PurposeFlagType: PurposeFlagType,
                CRRCategoryType: CRRCategoryType,
                MQSInstructionSource: MQSInstructionSource,
                ApnodeType: ApnodeType,
                CRRSegmentType: CRRSegmentType,
                InterTieDirection: InterTieDirection,
                RampRateType: RampRateType,
                ResourceLimitIndicator: ResourceLimitIndicator,
                MPMTestOutcome: MPMTestOutcome,
                BidType: BidType,
                UnitRegulationKind: UnitRegulationKind,
                FlowDirectionType: FlowDirectionType,
                CommitmentType: CommitmentType,
                CRRHedgeType: CRRHedgeType,
                ResultsConstraintType: ResultsConstraintType,
                ResourceRegistrationStatus: ResourceRegistrationStatus,
                FuelSource: FuelSource,
                ActionType: ActionType,
                SelfScheduleBreakdownType: SelfScheduleBreakdownType,
                CRRRoleType: CRRRoleType,
                MarketEventStatusKind: MarketEventStatusKind,
                PassIndicatorType: PassIndicatorType,
                MarketType: MarketType,
                EnergyProductType: EnergyProductType,
                ExecutionType: ExecutionType,
                ParticipationCategoryMPM: ParticipationCategoryMPM,
                ResourceCertificationKind: ResourceCertificationKind,
                ResourceCapacityType: ResourceCapacityType,
                AreaControlMode: AreaControlMode,
                OnOff: OnOff,
                MktBillMediaKind: MktBillMediaKind,
                TradeType: TradeType
            }
        );
    }
);