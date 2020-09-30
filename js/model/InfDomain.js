define
(
    ["model/base"],
    function (base)
    {
        let UOMType =
        {
            "MW": "MW",
            "MWh": "MWh",
            "US$": "US$",
            "_": "%",
            "INTEGER": "INTEGER",
            "FLAG": "FLAG",
            "$_mmBTU": "$/mmBTU",
            "$_lb": "$/lb",
            "US$_MW": "US$/MW",
            "US$_MWh": "US$/MWh",
            "FACTOR": "FACTOR"
        };
        Object.freeze (UOMType);

        let OASISIntervalType =
        {
            "BEGINNING": "BEGINNING",
            "ENDING": "ENDING"
        };
        Object.freeze (OASISIntervalType);

        let SelfSchedTypeRawBid =
        {
            "PT": "PT",
            "ETC": "ETC",
            "TOR": "TOR",
            "RMT": "RMT",
            "SP": "SP",
            "RA": "RA",
            "BAS": "BAS",
            "LOF": "LOF",
            "WHL": "WHL",
            "LPT": "LPT"
        };
        Object.freeze (SelfSchedTypeRawBid);

        /**
         * MW
         *
         * FLAG
         *
         */
        let UnitTypeEMS =
        {
            "MW": "MW",
            "FLAG": "FLAG"
        };
        Object.freeze (UnitTypeEMS);

        let JobScheduleType =
        {
            "CRITICAL": "CRITICAL",
            "NONCRITICAL": "NONCRITICAL"
        };
        Object.freeze (JobScheduleType);

        let ADSInstructionTypeCommitment =
        {
            "START_UP": "START_UP",
            "SHUT_DOWN": "SHUT_DOWN"
        };
        Object.freeze (ADSInstructionTypeCommitment);

        let SchedClassType =
        {
            "P": "P",
            "R": "R",
            "F": "F"
        };
        Object.freeze (SchedClassType);

        let DispatchTransactionType =
        {
            "Purchase": "Purchase",
            "Sale": "Sale"
        };
        Object.freeze (DispatchTransactionType);

        let MktSubClassType =
        {
            "Forecasted_UDC_Direct_Access_Load": "Forecasted_UDC_Direct_Access_Load",
            "Day_Ahead_RMR": "Day_Ahead_RMR",
            "Ten_Min_Expost_Market_Info": "Ten_Min_Expost_Market_Info",
            "Day_Ahead_Interim_Market_Info": "Day_Ahead_Interim_Market_Info",
            "Day_Ahead_Final_Market_Info": "Day_Ahead_Final_Market_Info",
            "TTC_ATC_Forecast_Information": "TTC/ATC_Forecast_Information",
            "TTC_ATC_Hourly_Forecast": "TTC/ATC_Hourly_Forecast",
            "Branch_Group_Derates": "Branch_Group_Derates",
            "Hour_Ahead_Market_Info": "Hour_Ahead_Market_Info",
            "Hourly_Expost_Market_Info": "Hourly_Expost_Market_Info",
            "Public_Bid_Data": "Public_Bid_Data",
            "Day_Ahead_Forecast_Information": "Day_Ahead_Forecast_Information"
        };
        Object.freeze (MktSubClassType);

        /**
         * Y - indicates a resource is capable of setting the Markte Clearing Price
         * S - indicates the resource must submit bids for energy at \$ 0
         *
         * N - indicates the resource does not have to submit bids for energy at \$ 0
         *
         */
        let PriceSetFlag =
        {
            "Y": "Y",
            "S": "S",
            "N": "N"
        };
        Object.freeze (PriceSetFlag);

        /**
         * market statement document status
         *
         */
        let MarketStatementDocStatus =
        {
            "APPROVED": "APPROVED",
            "CANCELLED": "CANCELLED"
        };
        Object.freeze (MarketStatementDocStatus);

        let CleanTradeProductType =
        {
            "PHY": "PHY",
            "APN": "APN",
            "CPT": "CPT",
            "RUT": "RUT",
            "RDT": "RDT",
            "SRT": "SRT",
            "NRT": "NRT"
        };
        Object.freeze (CleanTradeProductType);

        let SourceSinkType =
        {
            "Source": "Source",
            "Sink": "Sink",
            "Neither": "Neither"
        };
        Object.freeze (SourceSinkType);

        let OASISReportType =
        {
            "AS_DA_RESULT": "AS_DA_RESULT",
            "AS_OP_RSRV": "AS_OP_RSRV",
            "AS_REQ": "AS_REQ",
            "AS_RTM_RESULT": "AS_RTM_RESULT",
            "BIDS_PUBLIC": "BIDS_PUBLIC",
            "CMMT_RA_MLC": "CMMT_RA_MLC",
            "CMMT_RMR": "CMMT_RMR",
            "CRR_CLEARING": "CRR_CLEARING",
            "CRR_INVENTORY": "CRR_INVENTORY",
            "ENE_EA": "ENE_EA",
            "ENE_HASP": "ENE_HASP",
            "ENE_IFM": "ENE_IFM",
            "ENE_MPM": "ENE_MPM",
            "ENE_RTM": "ENE_RTM",
            "ENE_RUC": "ENE_RUC",
            "LOSS_DA_HASP": "LOSS_DA_HASP",
            "LOSS_RTM": "LOSS_RTM",
            "PRC_AS": "PRC_AS",
            "PRC_FUEL": "PRC_FUEL",
            "PRC_HRLY_LMP": "PRC_HRLY_LMP",
            "PRC_INTVL_LMP": "PRC_INTVL_LMP",
            "PRC_CNSTR": "PRC_CNSTR",
            "SLD_FCST": "SLD_FCST",
            "SLD_FCST_PEAK": "SLD_FCST_PEAK",
            "SLD_MKTS": "SLD_MKTS",
            "TRNS_ATC": "TRNS_ATC",
            "TRNS_OUTAGE": "TRNS_OUTAGE",
            "TRNS_USAGE": "TRNS_USAGE"
        };
        Object.freeze (OASISReportType);

        /**
         * ADD - add
         * DEL - delete
         *
         * CHG - change
         *
         */
        let MQSDELType =
        {
            "ADD": "ADD",
            "DEL": "DEL",
            "CHG": "CHG"
        };
        Object.freeze (MQSDELType);

        let AllocationEnergyTypeCode =
        {
            "DASE": "DASE",
            "OE": "OE",
            "HASE": "HASE",
            "SRE": "SRE",
            "RED": "RED",
            "MSSLFE": "MSSLFE",
            "RE": "RE",
            "MLE": "MLE",
            "SE": "SE",
            "RTSSE": "RTSSE",
            "PE": "PE",
            "DAPE": "DAPE",
            "ESRT": "ESRT",
            "ESYS": "ESYS",
            "RMRD": "RMRD",
            "RMRR": "RMRR",
            "RMRS": "RMRS",
            "RMRT": "RMRT",
            "STRT": "STRT",
            "SDWN": "SDWN",
            "TEST": "TEST",
            "OVGN": "OVGN",
            "VS": "VS",
            "ETC": "ETC",
            "TOR": "TOR",
            "RSYS": "RSYS",
            "RCNG": "RCNG",
            "ACNG": "ACNG",
            "TCNG": "TCNG",
            "LMPM": "LMPM",
            "BS": "BS",
            "MINL": "MINL",
            "SUMR": "SUMR",
            "RMRH": "RMRH",
            "SLIC": "SLIC",
            "OTHER": "OTHER"
        };
        Object.freeze (AllocationEnergyTypeCode);

        /**
         * market statement line item alias name
         *
         */
        let MarketStatementLineItemAliasName =
        {
            "TRADE_DATE": "TRADE_DATE",
            "PARENT_CHARGE_GROUP": "PARENT_CHARGE_GROUP",
            "CHARGE_GROUP": "CHARGE_GROUP",
            "CHARGE_CODE_SUMMARY": "CHARGE_CODE_SUMMARY",
            "CHARGE_CODE_INTERVAL_TOTAL": "CHARGE_CODE_INTERVAL_TOTAL",
            "CHARGE_CODE_INTERVAL_DETAIL": "CHARGE_CODE_INTERVAL_DETAIL"
        };
        Object.freeze (MarketStatementLineItemAliasName);

        let ResourceCertificationCategory =
        {
            "DAM": "DAM",
            "RTM": "RTM",
            "RC": "RC",
            "GT": "GT"
        };
        Object.freeze (ResourceCertificationCategory);

        /**
         * self schedule types
         *
         * PT
         * ETC
         * TOR
         * RMR
         * RMT
         * RGMR
         * ORFC
         *
         * SP
         *
         */
        let SelfScheduleType =
        {
            "PT": "PT",
            "ETC": "ETC",
            "TOR": "TOR",
            "RMR": "RMR",
            "RMT": "RMT",
            "RGMR": "RGMR",
            "ORFC": "ORFC",
            "SP": "SP",
            "IFM": "IFM",
            "RUC": "RUC",
            "RA": "RA",
            "PUMP_ETC": "PUMP_ETC",
            "PUMP_TOR": "PUMP_TOR",
            "BAS": "BAS",
            "LOF": "LOF",
            "WHL": "WHL"
        };
        Object.freeze (SelfScheduleType);

        /**
         * RJ - Rejected Trade
         * I - Invalid Trade
         * V - Valid Trade
         * M - Modified Trade
         * CV - Conditionally Valid Trade
         * CM - Conditionally Modified Trade
         * CI - Conditionally Invalid Trade
         * CX - Cancelled Trade
         * O - Obsolete Trade
         * MT - Matched Trade
         *
         * U - Unmatched Trade
         *
         */
        let TradeStatusType =
        {
            "RJ": "RJ",
            "I": "I",
            "V": "V",
            "M": "M",
            "CV": "CV",
            "CM": "CM",
            "CI": "CI",
            "CX": "CX",
            "O": "O",
            "MT": "MT",
            "U": "U"
        };
        Object.freeze (TradeStatusType);

        let JobStartEndType =
        {
            "NA": "NA",
            "START": "START",
            "END": "END"
        };
        Object.freeze (JobStartEndType);

        let ResourceCertificationType =
        {
            "GT": "GT",
            "RG": "RG",
            "SR": "SR",
            "NR": "NR",
            "IR": "IR"
        };
        Object.freeze (ResourceCertificationType);

        let DispatchAcceptStatus =
        {
            "NON_RESPONSE": "NON_RESPONSE",
            "OK": "OK",
            "CANNOT": "CANNOT",
            "ACCEPT": "ACCEPT",
            "DECLINE": "DECLINE",
            "PARTIAL": "PARTIAL"
        };
        Object.freeze (DispatchAcceptStatus);

        /**
         * MIN_CONSTRAINT
         * MAX_CONSTRAINT
         *
         * FIXED_CONSTRAINT
         *
         */
        let ADSInstructionTypeOOS =
        {
            "MIN_CONSTRAINT": "MIN_CONSTRAINT",
            "MAX_CONSTRAINT": "MAX_CONSTRAINT",
            "FIXED_CONSTRAINT": "FIXED_CONSTRAINT"
        };
        Object.freeze (ADSInstructionTypeOOS);

        let OASISErrCode =
        {
            "_1000": "1000",
            "_1001": "1001",
            "_1002": "1002",
            "_1003": "1003",
            "_1004": "1004",
            "_1005": "1005",
            "_1006": "1006",
            "_1007": "1007",
            "_1008": "1008",
            "_1009": "1009",
            "_1010": "1010"
        };
        Object.freeze (OASISErrCode);

        /**
         * organization type
         *
         */
        let OrganisationType =
        {
            "CUSTOMER": "CUSTOMER",
            "RTO": "RTO"
        };
        Object.freeze (OrganisationType);

        let OASISMarketType =
        {
            "IFM": "IFM",
            "RUC": "RUC",
            "HASP": "HASP",
            "RTM": "RTM",
            "N_A": "N/A",
            "All": "All"
        };
        Object.freeze (OASISMarketType);

        /**
         * ancillary serivce types
         *
         */
        let AncillaryCommodityType =
        {
            "REGUP": "REGUP",
            "REGDN": "REGDN",
            "SPIN": "SPIN",
            "NONSPIN": "NONSPIN"
        };
        Object.freeze (AncillaryCommodityType);

        /**
         * Status indication for bids
         *
         * CV - Conditionally Valid Bid
         * CM - Conditionally Modified Bid
         * V - Valid Bid
         * M - Modified Bid
         * RJ - Rejected Bid
         * I - Invalid Bid
         * CX - Cancelled Bid
         * O - Obsolete Bid
         * CL - Clean Bid
         *
         * RP - Replicated Bid
         *
         */
        let BidStatusType =
        {
            "RP": "RP",
            "RJ": "RJ",
            "I": "I",
            "CV": "CV",
            "CM": "CM",
            "V": "V",
            "M": "M",
            "CX": "CX",
            "O": "O",
            "CL": "CL"
        };
        Object.freeze (BidStatusType);

        /**
         * Path Flow - PF
         * Path Inflow Limit - PIL
         * Path Inflow Available Limit - PIAL
         * Path Inflow Armed Limit - PIML
         * Path Outflow Limit - POL
         * Path Outflow Available Limit - POAL
         * Path Outflow Armed Limit - OARL
         * Generation Output - GO
         * Generation Max Operating Limit - GMOL
         * Generation Min Operating Limit - GNOL
         * Generation Regulation - GR
         * Generation Status - GS
         * Pump Production - PP
         * System Load - SL
         * System ACE - ACE
         *
         * System INADV - INADV
         *
         */
        let MeasurementTypeEMS =
        {
            "PF": "PF",
            "PIL": "PIL",
            "PIAL": "PIAL",
            "PIML": "PIML",
            "POL": "POL",
            "POAL": "POAL",
            "OARL": "OARL",
            "GO": "GO",
            "GMOL": "GMOL",
            "GNOL": "GNOL",
            "GR": "GR",
            "GS": "GS",
            "PP": "PP",
            "SL": "SL",
            "ACE": "ACE",
            "INADV": "INADV"
        };
        Object.freeze (MeasurementTypeEMS);

        let SpinningEventNameType =
        {
            "EASTERN": "EASTERN",
            "RFC_SR": "RFC-SR",
            "SOUTH_S": "SOUTH-S",
            "PJM": "PJM"
        };
        Object.freeze (SpinningEventNameType);

        let OASISStatusType =
        {
            "Data_Transfer_Procedure_Initiated": "Data_Transfer_Procedure_Initiated",
            "Valid": "Valid",
            "Obsolete": "Obsolete",
            "Data_Transfer_Succesful": "Data_Transfer_Succesful",
            "Push_Failed": "Push_Failed",
            "Forced_Termination": "Forced_Termination"
        };
        Object.freeze (OASISStatusType);

        /**
         * RU - Regulation Up
         * RD - Regulation Down
         * SR - Spin Reserve
         * NR - Nonspin Reserve
         *
         * AS - Upward Ancillary Service
         *
         */
        let MarketProductTypeAsReq =
        {
            "RU": "RU",
            "RD": "RD",
            "SR": "SR",
            "NR": "NR",
            "AS": "AS"
        };
        Object.freeze (MarketProductTypeAsReq);

        /**
         * ACTIVE
         *
         * INACTIVE
         *
         */
        let CurrentStatusSC =
        {
            "ACTIVE": "ACTIVE",
            "INACTIVE": "INACTIVE"
        };
        Object.freeze (CurrentStatusSC);

        let JobFlagType =
        {
            "CREATED": "CREATED",
            "MODIFIED": "MODIFIED",
            "DELETED": "DELETED"
        };
        Object.freeze (JobFlagType);

        /**
         * MP
         *
         * ISO
         *
         */
        let RequestorRmrTest =
        {
            "MP": "MP",
            "ISO": "ISO"
        };
        Object.freeze (RequestorRmrTest);

        /**
         * S - Scheduling
         *
         * P - Pricing
         *
         */
        let runTypeCAISO =
        {
            "S": "S",
            "P": "P"
        };
        Object.freeze (runTypeCAISO);

        let OASISDataItems =
        {
            "AS_CLEAR_ASMP_IFM": "AS_CLEAR_ASMP_IFM",
            "AS_CLEAR_ASMP_RTM": "AS_CLEAR_ASMP_RTM",
            "AS_CLEAR_COST_IFM": "AS_CLEAR_COST_IFM",
            "AS_CLEAR_COST_RTM": "AS_CLEAR_COST_RTM",
            "AS_CLEAR_MW_IFM": "AS_CLEAR_MW_IFM",
            "AS_CLEAR_MW_RTM": "AS_CLEAR_MW_RTM",
            "AS_GEN_TOTAL_MW_IFM": "AS_GEN_TOTAL_MW_IFM",
            "AS_GEN_TOTAL_MW_RTM": "AS_GEN_TOTAL_MW_RTM",
            "AS_IMP_TOTAL_MW_IFM": "AS_IMP_TOTAL_MW_IFM",
            "AS_IMP_TOTAL_MW_RTM": "AS_IMP_TOTAL_MW_RTM",
            "AS_LOAD_TOTAL_MW_IFM": "AS_LOAD_TOTAL_MW_IFM",
            "AS_LOAD_TOTAL_MW_RTM": "AS_LOAD_TOTAL_MW_RTM",
            "AS_REGION_value": "AS_REGION_value",
            "AS_REGION_REQ_MAX": "AS_REGION_REQ_MAX",
            "AS_REGION_REQ_MIN": "AS_REGION_REQ_MIN",
            "AS_SELF_MW_IFM": "AS_SELF_MW_IFM",
            "AS_SELF_MW_RTM": "AS_SELF_MW_RTM",
            "AS_TOTAL_MW": "AS_TOTAL_MW",
            "AS_TOTAL_MW_IFM": "AS_TOTAL_MW_IFM",
            "AS_TOTAL_MW_RTM": "AS_TOTAL_MW_RTM",
            "AS_TYPE": "AS_TYPE",
            "AS_USER_RATE": "AS_USER_RATE",
            "CA_value": "CA_value",
            "CMMT_MINLOAD_MLC": "CMMT_MINLOAD_MLC",
            "CMMT_MINLOAD_MW": "CMMT_MINLOAD_MW",
            "CMMT_RA_MLC": "CMMT_RA_MLC",
            "CMMT_RA_MW": "CMMT_RA_MW",
            "CMMT_RA_START_COST": "CMMT_RA_START_COST",
            "CMMT_RA_UNITS": "CMMT_RA_UNITS",
            "CMMT_TOTAL_START_COST": "CMMT_TOTAL_START_COST",
            "CMMT_TOTAL_MW": "CMMT_TOTAL_MW",
            "CMMT_TOTAL_UNITS": "CMMT_TOTAL_UNITS",
            "CRR_CAT": "CRR_CAT",
            "CRR_MARKET_value": "CRR_MARKET_value",
            "CRR_MW": "CRR_MW",
            "CRR_NSR": "CRR_NSR",
            "CRR_OPTION": "CRR_OPTION",
            "CRR_OWNER": "CRR_OWNER",
            "CRR_SEGMENT": "CRR_SEGMENT",
            "CRR_TERM": "CRR_TERM",
            "CRR_TOU": "CRR_TOU",
            "CRR_TYPE": "CRR_TYPE",
            "ENE_EA_DA": "ENE_EA_DA",
            "ENE_EA_EXCEPT": "ENE_EA_EXCEPT",
            "ENE_EA_HASP": "ENE_EA_HASP",
            "ENE_EA_MLE": "ENE_EA_MLE",
            "ENE_EA_MSSLF": "ENE_EA_MSSLF",
            "ENE_EA_OPTIMAL": "ENE_EA_OPTIMAL",
            "ENE_EA_RAMP_DEV": "ENE_EA_RAMP_DEV",
            "ENE_EA_RAMP_STD": "ENE_EA_RAMP_STD",
            "ENE_EA_RESIDUAL": "ENE_EA_RESIDUAL",
            "ENE_EA_RMR": "ENE_EA_RMR",
            "ENE_EA_SELF": "ENE_EA_SELF",
            "ENE_EA_SLIC": "ENE_EA_SLIC",
            "ENE_EXP_CLEAR_HASP": "ENE_EXP_CLEAR_HASP",
            "ENE_EXP_CLEAR_IFM": "ENE_EXP_CLEAR_IFM",
            "ENE_EXP_CLEAR_RTM": "ENE_EXP_CLEAR_RTM",
            "ENE_GEN_CLEAR_HASP": "ENE_GEN_CLEAR_HASP",
            "ENE_GEN_CLEAR_IFM": "ENE_GEN_CLEAR_IFM",
            "ENE_GEN_CLEAR_RTM": "ENE_GEN_CLEAR_RTM",
            "ENE_IMP_CLEAR_HASP": "ENE_IMP_CLEAR_HASP",
            "ENE_IMP_CLEAR_IFM": "ENE_IMP_CLEAR_IFM",
            "ENE_IMP_CLEAR_RTM": "ENE_IMP_CLEAR_RTM",
            "ENE_LOAD_ACTUAL": "ENE_LOAD_ACTUAL",
            "ENE_LOAD_CLEAR_HASP": "ENE_LOAD_CLEAR_HASP",
            "ENE_LOAD_CLEAR_IFM": "ENE_LOAD_CLEAR_IFM",
            "ENE_LOAD_CLEAR_RTM": "ENE_LOAD_CLEAR_RTM",
            "ENE_LOAD_FCST": "ENE_LOAD_FCST",
            "ENE_PEAK_HOUR": "ENE_PEAK_HOUR",
            "ENE_PEAK_LOAD": "ENE_PEAK_LOAD",
            "FUEL_REGION_value": "FUEL_REGION_value",
            "INVT_DATETIME": "INVT_DATETIME",
            "LOAD_ACTUAL": "LOAD_ACTUAL",
            "LOAD_CLEAR_RTM": "LOAD_CLEAR_RTM",
            "LOSS_TOTAL_COST_HASP": "LOSS_TOTAL_COST_HASP",
            "LOSS_TOTAL_COST_RTM": "LOSS_TOTAL_COST_RTM",
            "LOSS_TOTAL_MW_HASP": "LOSS_TOTAL_MW_HASP",
            "LOSS_TOTAL_MW_RTM": "LOSS_TOTAL_MW_RTM",
            "MPM_FLAG": "MPM_FLAG",
            "OP_RSRV_TOTAL": "OP_RSRV_TOTAL",
            "PRC_NG": "PRC_NG",
            "PRC_SHADOW": "PRC_SHADOW",
            "RATING_ATC": "RATING_ATC",
            "RMR_DETER_DAM": "RMR_DETER_DAM",
            "RMR_DETER_HASP": "RMR_DETER_HASP",
            "RMR_DISPATCH_DAM": "RMR_DISPATCH_DAM",
            "RMR_DISPATCH_HASP": "RMR_DISPATCH_HASP",
            "RMR_TOTAL": "RMR_TOTAL",
            "RMR_TOTAL_AVAIL": "RMR_TOTAL_AVAIL",
            "RUC_GEN_CLEAR_RUC": "RUC_GEN_CLEAR_RUC",
            "RUC_IMP_CLEAR_RUC": "RUC_IMP_CLEAR_RUC",
            "RUC_LOAD_CLEAR_RUC": "RUC_LOAD_CLEAR_RUC",
            "RUC_ZONE_value": "RUC_ZONE_value",
            "TAC_AREA_value": "TAC_AREA_value",
            "TINTRFCE_value": "TINTRFCE_value",
            "TRNS_AS_IMPORT": "TRNS_AS_IMPORT",
            "TRNS_ENE_IMPORT": "TRNS_ENE_IMPORT",
            "TRNS_EQUIP_value": "TRNS_EQUIP_value",
            "TRNS_RATING_CBM": "TRNS_RATING_CBM",
            "TRNS_RATING_DIRECTION": "TRNS_RATING_DIRECTION",
            "TRNS_RATING_OTC": "TRNS_RATING_OTC",
            "TRNS_RATING_OTC_DERATE": "TRNS_RATING_OTC_DERATE",
            "TRNS_RATING_TTC": "TRNS_RATING_TTC",
            "TRNS_TI_value": "TRNS_TI_value",
            "TRNS_TR_ENTMTS": "TRNS_TR_ENTMTS",
            "TRNS_TR_USEAGE": "TRNS_TR_USEAGE"
        };
        Object.freeze (OASISDataItems);

        let SelfSchedTypeCleanBid =
        {
            "PT": "PT",
            "ETC": "ETC",
            "TOR": "TOR",
            "RMT": "RMT",
            "SP": "SP",
            "RA": "RA",
            "IFM": "IFM",
            "BAS": "BAS",
            "LOF": "LOF",
            "WHL": "WHL",
            "LPT": "LPT"
        };
        Object.freeze (SelfSchedTypeCleanBid);

        /**
         * BASELI NE
         *
         * NEGOTIATED
         *
         */
        let AdderType =
        {
            "BASELINE": "BASELINE",
            "NEGOTIATED": "NEGOTIATED"
        };
        Object.freeze (AdderType);

        let OASISMasterType =
        {
            "ATL_PNODE": "ATL_PNODE",
            "ATL_APNODE": "ATL_APNODE",
            "ATL_LDF": "ATL_LDF",
            "ATL_LAP": "ATL_LAP",
            "ATL_RESOURCE": "ATL_RESOURCE",
            "ATL_HUB": "ATL_HUB",
            "ATL_PNODE_MAP": "ATL_PNODE_MAP",
            "ATL_AS_REGION": "ATL_AS_REGION",
            "ATL_AS_REGION_MAP": "ATL_AS_REGION_MAP",
            "ATL_RUC_ZONE": "ATL_RUC_ZONE",
            "ATL_RUC_ZONE_MAP": "ATL_RUC_ZONE_MAP",
            "ATL_TAC_AREA": "ATL_TAC_AREA",
            "ATL_TAC_AREA_MAP": "ATL_TAC_AREA_MAP",
            "ATL_TIEPOINT": "ATL_TIEPOINT",
            "ATL_TI": "ATL_TI",
            "ATL_PUB": "ATL_PUB",
            "ATL_STAT": "ATL_STAT",
            "ATL_PUB_SCHED": "ATL_PUB_SCHED",
            "ATL_XREF": "ATL_XREF"
        };
        Object.freeze (OASISMasterType);

        let LFCResourceType =
        {
            "GEN": "GEN",
            "PUMP": "PUMP"
        };
        Object.freeze (LFCResourceType);

        let BidPriceCapType =
        {
            "ENERGY": "ENERGY",
            "AS": "AS",
            "RUC": "RUC"
        };
        Object.freeze (BidPriceCapType);

        /**
         * organization code
         *
         */
        let OrganisationCode =
        {
            "BILL_TO": "BILL_TO",
            "PAY_TO": "PAY_TO",
            "SOLD_TO": "SOLD_TO",
            "PROVIDED_BY": "PROVIDED_BY"
        };
        Object.freeze (OrganisationCode);

        /**
         * Self Schedule Types applicable to Mitigated Bid
         *
         */
        let SelfScheduleTypeMB =
        {
            "RMR": "RMR"
        };
        Object.freeze (SelfScheduleTypeMB);

        let DAMMarketType =
        {
            "DAM": "DAM"
        };
        Object.freeze (DAMMarketType);

        let MarketScheduleServices =
        {
            "retrieveDefaultBidCurves": "retrieveDefaultBidCurves",
            "retrieveMarketAwards": "retrieveMarketAwards",
            "retrieveMPMResults": "retrieveMPMResults",
            "retrieveSchedulePrices": "retrieveSchedulePrices",
            "retrieveStartUpShutDownInstructions": "retrieveStartUpShutDownInstructions"
        };
        Object.freeze (MarketScheduleServices);

        let SpinningEventType =
        {
            "RZ": "RZ",
            "AA": "AA",
            "CA": "CA"
        };
        Object.freeze (SpinningEventType);

        let OASISErrDescription =
        {
            "No_data_returned_for_the_specified_selection": "No data returned for the specified selection",
            "Invalid_date_format__please_use_valid_date_format": "Invalid date format, please use valid date format",
            "Timed_out_waiting_for_query_response": "Timed out waiting for query response",
            "Data_can_be_requested_for_period_of_31_days_only": "Data can be requested for period of 31 days only",
            "Report_name_does_not_exit__please_use_valid_report_name": "Report name does not exit, please use valid report name",
            "Validation_exception_during_transformation_of_XML": "Validation exception during transformation of XML",
            "Required_file_does_not_exist": "Required file does not exist",
            "Out_of_memory_exception": "Out of memory exception",
            "Exceptions_in_reading_and_writing_of_XML_files": "Exceptions in reading and writing of XML files",
            "System_Error": "System Error"
        };
        Object.freeze (OASISErrDescription);

        /**
         * Valid Enumerations:
         * 1) DASE Day Ahead Scheduled Energy;
         * 2) DSSE Day Ahead Incremental Self Schedule Energy;
         * 3) DABE Day Ahead Incremental Energy Bid Awarded Energy;
         * 4) OE Optimal Energy;
         * 5) HASE Hour ahead pre-dispatched schedule energy;
         * 6) SRE Standard Ramping Energy;
         * 7) RED Ramping Energy Deviation;
         * 8) EDE Exceptional Dispatch energy;
         * 9) RMRE RMR Energy;
         * 10) MSSLFE MSSLF Energy;
         * 11) RE Residual Energy;
         * 12) MLE Minimum Load Energy;
         * 13) SE SLIC Energy;
         * 14) RTSSE Real time self scheduled energy;
         * 15) DMLE Day ahead minimum load energy;
         * 16) PE Pumping Energy;
         * 17) TEE Total Expected Energy;
         *
         * 18) DAPE - Day-Ahead Pumping Energy;
         *
         */
        let EnergyTypeCode =
        {
            "DASE": "DASE",
            "DSSE": "DSSE",
            "DABE": "DABE",
            "OE": "OE",
            "HASE": "HASE",
            "SRE": "SRE",
            "RED": "RED",
            "EDE": "EDE",
            "RMRE": "RMRE",
            "MSSLFE": "MSSLFE",
            "RE": "RE",
            "MLE": "MLE",
            "SE": "SE",
            "RTSSE": "RTSSE",
            "DMLE": "DMLE",
            "PE": "PE",
            "TEE": "TEE",
            "DAPE": "DAPE"
        };
        Object.freeze (EnergyTypeCode);

        let OASISBidReportType =
        {
            "BIDS_PUBLIC": "BIDS_PUBLIC"
        };
        Object.freeze (OASISBidReportType);

        let LoadFollowingCapacityType =
        {
            "UP": "UP",
            "DOWN": "DOWN"
        };
        Object.freeze (LoadFollowingCapacityType);

        let TimeZoneType =
        {
            "PPT": "PPT"
        };
        Object.freeze (TimeZoneType);

        /**
         * zone type
         *
         */
        let ZoneType =
        {
            "LOADZONE": "LOADZONE",
            "TRADINGHUB": "TRADINGHUB",
            "RUCZONE": "RUCZONE",
            "ASREGION": "ASREGION",
            "DCA": "DCA"
        };
        Object.freeze (ZoneType);

        let SegmentCurveType =
        {
            "COST": "COST",
            "CONSULTATIVE": "CONSULTATIVE"
        };
        Object.freeze (SegmentCurveType);

        let SourceSinkFlag =
        {
            "CSNK": "CSNK",
            "CSRC": "CSRC"
        };
        Object.freeze (SourceSinkFlag);

        /**
         * Description of market statement
         *
         */
        let MarketStatementDescription =
        {
            "DAILY_INITIAL_CREDIT": "DAILY_INITIAL_CREDIT",
            "DAILY_INITIAL_MARKET": "DAILY_INITIAL_MARKET",
            "MONTHLY_INITIAL_MARKET": "MONTHLY_INITIAL_MARKET",
            "DAILY_RECALC_MARKET": "DAILY_RECALC_MARKET",
            "MONTHLY_RECALC_MARKET": "MONTHLY_RECALC_MARKET"
        };
        Object.freeze (MarketStatementDescription);

        let TradeProductType =
        {
            "PHY": "PHY",
            "APN": "APN",
            "RUT": "RUT",
            "RDT": "RDT",
            "SRT": "SRT",
            "NRT": "NRT",
            "CAP": "CAP"
        };
        Object.freeze (TradeProductType);

        /**
         * market statement document type
         *
         */
        let MarketStatementDocType =
        {
            "CREDIT": "CREDIT",
            "MARKET_INITIAL": "MARKET_INITIAL",
            "MARKET_RECALC": "MARKET_RECALC"
        };
        Object.freeze (MarketStatementDocType);

        let SystemType =
        {
            "OASIS": "OASIS"
        };
        Object.freeze (SystemType);

        let OASISMeasType =
        {
            "MW": "MW",
            "MWh": "MWh",
            "US$": "US$",
            "_": "%",
            "INTEGER": "INTEGER",
            "FLAG": "FLAG",
            "US$_MW": "US$/MW",
            "US$_MWh": "US$/MWh",
            "FACTOR": "FACTOR"
        };
        Object.freeze (OASISMeasType);

        let AlarmDisplayType =
        {
            "Disappear": "Disappear",
            "Appear": "Appear",
            "Fleeting": "Fleeting"
        };
        Object.freeze (AlarmDisplayType);

        return (
            {
                SegmentCurveType: SegmentCurveType,
                SchedClassType: SchedClassType,
                DispatchTransactionType: DispatchTransactionType,
                LoadFollowingCapacityType: LoadFollowingCapacityType,
                OASISErrCode: OASISErrCode,
                OASISMarketType: OASISMarketType,
                OASISDataItems: OASISDataItems,
                OrganisationCode: OrganisationCode,
                LFCResourceType: LFCResourceType,
                MarketStatementLineItemAliasName: MarketStatementLineItemAliasName,
                ZoneType: ZoneType,
                TradeProductType: TradeProductType,
                SelfScheduleType: SelfScheduleType,
                MarketStatementDocStatus: MarketStatementDocStatus,
                runTypeCAISO: runTypeCAISO,
                MarketStatementDescription: MarketStatementDescription,
                UOMType: UOMType,
                MktSubClassType: MktSubClassType,
                MarketStatementDocType: MarketStatementDocType,
                MQSDELType: MQSDELType,
                OrganisationType: OrganisationType,
                SelfSchedTypeCleanBid: SelfSchedTypeCleanBid,
                OASISReportType: OASISReportType,
                OASISStatusType: OASISStatusType,
                OASISIntervalType: OASISIntervalType,
                AlarmDisplayType: AlarmDisplayType,
                ADSInstructionTypeCommitment: ADSInstructionTypeCommitment,
                ADSInstructionTypeOOS: ADSInstructionTypeOOS,
                JobStartEndType: JobStartEndType,
                SourceSinkType: SourceSinkType,
                TimeZoneType: TimeZoneType,
                ResourceCertificationType: ResourceCertificationType,
                SpinningEventNameType: SpinningEventNameType,
                EnergyTypeCode: EnergyTypeCode,
                OASISBidReportType: OASISBidReportType,
                SelfSchedTypeRawBid: SelfSchedTypeRawBid,
                AncillaryCommodityType: AncillaryCommodityType,
                MarketProductTypeAsReq: MarketProductTypeAsReq,
                DispatchAcceptStatus: DispatchAcceptStatus,
                UnitTypeEMS: UnitTypeEMS,
                MeasurementTypeEMS: MeasurementTypeEMS,
                SourceSinkFlag: SourceSinkFlag,
                TradeStatusType: TradeStatusType,
                BidStatusType: BidStatusType,
                RequestorRmrTest: RequestorRmrTest,
                SelfScheduleTypeMB: SelfScheduleTypeMB,
                OASISMeasType: OASISMeasType,
                CleanTradeProductType: CleanTradeProductType,
                PriceSetFlag: PriceSetFlag,
                OASISMasterType: OASISMasterType,
                SystemType: SystemType,
                SpinningEventType: SpinningEventType,
                DAMMarketType: DAMMarketType,
                JobScheduleType: JobScheduleType,
                AllocationEnergyTypeCode: AllocationEnergyTypeCode,
                AdderType: AdderType,
                BidPriceCapType: BidPriceCapType,
                JobFlagType: JobFlagType,
                MarketScheduleServices: MarketScheduleServices,
                ResourceCertificationCategory: ResourceCertificationCategory,
                CurrentStatusSC: CurrentStatusSC,
                OASISErrDescription: OASISErrDescription
            }
        );
    }
);