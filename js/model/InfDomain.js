define
(
    ["model/base"],
    function (base)
    {

        function parse_OASISStatusType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OASISStatusType";
            obj["Data_Transfer_Procedure_Initiated"] = base.parse_element (/<cim:OASISStatusType.Data_Transfer_Procedure_Initiated>([\s\S]*?)<\/cim:OASISStatusType.Data_Transfer_Procedure_Initiated>/g, sub, context, true);
            obj["Valid"] = base.parse_element (/<cim:OASISStatusType.Valid>([\s\S]*?)<\/cim:OASISStatusType.Valid>/g, sub, context, true);
            obj["Obsolete"] = base.parse_element (/<cim:OASISStatusType.Obsolete>([\s\S]*?)<\/cim:OASISStatusType.Obsolete>/g, sub, context, true);
            obj["Data_Transfer_Succesful"] = base.parse_element (/<cim:OASISStatusType.Data_Transfer_Succesful>([\s\S]*?)<\/cim:OASISStatusType.Data_Transfer_Succesful>/g, sub, context, true);
            obj["Push_Failed"] = base.parse_element (/<cim:OASISStatusType.Push_Failed>([\s\S]*?)<\/cim:OASISStatusType.Push_Failed>/g, sub, context, true);
            obj["Forced_Termination"] = base.parse_element (/<cim:OASISStatusType.Forced_Termination>([\s\S]*?)<\/cim:OASISStatusType.Forced_Termination>/g, sub, context, true);
            bucket = context.parsed.OASISStatusType;
            if (null == bucket)
                context.parsed.OASISStatusType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_OASISDataItems (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OASISDataItems";
            obj["AS_CLEAR_ASMP_IFM"] = base.parse_element (/<cim:OASISDataItems.AS_CLEAR_ASMP_IFM>([\s\S]*?)<\/cim:OASISDataItems.AS_CLEAR_ASMP_IFM>/g, sub, context, true);
            obj["AS_CLEAR_ASMP_RTM"] = base.parse_element (/<cim:OASISDataItems.AS_CLEAR_ASMP_RTM>([\s\S]*?)<\/cim:OASISDataItems.AS_CLEAR_ASMP_RTM>/g, sub, context, true);
            obj["AS_CLEAR_COST_IFM"] = base.parse_element (/<cim:OASISDataItems.AS_CLEAR_COST_IFM>([\s\S]*?)<\/cim:OASISDataItems.AS_CLEAR_COST_IFM>/g, sub, context, true);
            obj["AS_CLEAR_COST_RTM"] = base.parse_element (/<cim:OASISDataItems.AS_CLEAR_COST_RTM>([\s\S]*?)<\/cim:OASISDataItems.AS_CLEAR_COST_RTM>/g, sub, context, true);
            obj["AS_CLEAR_MW_IFM"] = base.parse_element (/<cim:OASISDataItems.AS_CLEAR_MW_IFM>([\s\S]*?)<\/cim:OASISDataItems.AS_CLEAR_MW_IFM>/g, sub, context, true);
            obj["AS_CLEAR_MW_RTM"] = base.parse_element (/<cim:OASISDataItems.AS_CLEAR_MW_RTM>([\s\S]*?)<\/cim:OASISDataItems.AS_CLEAR_MW_RTM>/g, sub, context, true);
            obj["AS_GEN_TOTAL_MW_IFM"] = base.parse_element (/<cim:OASISDataItems.AS_GEN_TOTAL_MW_IFM>([\s\S]*?)<\/cim:OASISDataItems.AS_GEN_TOTAL_MW_IFM>/g, sub, context, true);
            obj["AS_GEN_TOTAL_MW_RTM"] = base.parse_element (/<cim:OASISDataItems.AS_GEN_TOTAL_MW_RTM>([\s\S]*?)<\/cim:OASISDataItems.AS_GEN_TOTAL_MW_RTM>/g, sub, context, true);
            obj["AS_IMP_TOTAL_MW_IFM"] = base.parse_element (/<cim:OASISDataItems.AS_IMP_TOTAL_MW_IFM>([\s\S]*?)<\/cim:OASISDataItems.AS_IMP_TOTAL_MW_IFM>/g, sub, context, true);
            obj["AS_IMP_TOTAL_MW_RTM"] = base.parse_element (/<cim:OASISDataItems.AS_IMP_TOTAL_MW_RTM>([\s\S]*?)<\/cim:OASISDataItems.AS_IMP_TOTAL_MW_RTM>/g, sub, context, true);
            obj["AS_LOAD_TOTAL_MW_IFM"] = base.parse_element (/<cim:OASISDataItems.AS_LOAD_TOTAL_MW_IFM>([\s\S]*?)<\/cim:OASISDataItems.AS_LOAD_TOTAL_MW_IFM>/g, sub, context, true);
            obj["AS_LOAD_TOTAL_MW_RTM"] = base.parse_element (/<cim:OASISDataItems.AS_LOAD_TOTAL_MW_RTM>([\s\S]*?)<\/cim:OASISDataItems.AS_LOAD_TOTAL_MW_RTM>/g, sub, context, true);
            obj["AS_REGION_value"] = base.parse_element (/<cim:OASISDataItems.AS_REGION_value>([\s\S]*?)<\/cim:OASISDataItems.AS_REGION_value>/g, sub, context, true);
            obj["AS_REGION_REQ_MAX"] = base.parse_element (/<cim:OASISDataItems.AS_REGION_REQ_MAX>([\s\S]*?)<\/cim:OASISDataItems.AS_REGION_REQ_MAX>/g, sub, context, true);
            obj["AS_REGION_REQ_MIN"] = base.parse_element (/<cim:OASISDataItems.AS_REGION_REQ_MIN>([\s\S]*?)<\/cim:OASISDataItems.AS_REGION_REQ_MIN>/g, sub, context, true);
            obj["AS_SELF_MW_IFM"] = base.parse_element (/<cim:OASISDataItems.AS_SELF_MW_IFM>([\s\S]*?)<\/cim:OASISDataItems.AS_SELF_MW_IFM>/g, sub, context, true);
            obj["AS_SELF_MW_RTM"] = base.parse_element (/<cim:OASISDataItems.AS_SELF_MW_RTM>([\s\S]*?)<\/cim:OASISDataItems.AS_SELF_MW_RTM>/g, sub, context, true);
            obj["AS_TOTAL_MW"] = base.parse_element (/<cim:OASISDataItems.AS_TOTAL_MW>([\s\S]*?)<\/cim:OASISDataItems.AS_TOTAL_MW>/g, sub, context, true);
            obj["AS_TOTAL_MW_IFM"] = base.parse_element (/<cim:OASISDataItems.AS_TOTAL_MW_IFM>([\s\S]*?)<\/cim:OASISDataItems.AS_TOTAL_MW_IFM>/g, sub, context, true);
            obj["AS_TOTAL_MW_RTM"] = base.parse_element (/<cim:OASISDataItems.AS_TOTAL_MW_RTM>([\s\S]*?)<\/cim:OASISDataItems.AS_TOTAL_MW_RTM>/g, sub, context, true);
            obj["AS_TYPE"] = base.parse_element (/<cim:OASISDataItems.AS_TYPE>([\s\S]*?)<\/cim:OASISDataItems.AS_TYPE>/g, sub, context, true);
            obj["AS_USER_RATE"] = base.parse_element (/<cim:OASISDataItems.AS_USER_RATE>([\s\S]*?)<\/cim:OASISDataItems.AS_USER_RATE>/g, sub, context, true);
            obj["CA_value"] = base.parse_element (/<cim:OASISDataItems.CA_value>([\s\S]*?)<\/cim:OASISDataItems.CA_value>/g, sub, context, true);
            obj["CMMT_MINLOAD_MLC"] = base.parse_element (/<cim:OASISDataItems.CMMT_MINLOAD_MLC>([\s\S]*?)<\/cim:OASISDataItems.CMMT_MINLOAD_MLC>/g, sub, context, true);
            obj["CMMT_MINLOAD_MW"] = base.parse_element (/<cim:OASISDataItems.CMMT_MINLOAD_MW>([\s\S]*?)<\/cim:OASISDataItems.CMMT_MINLOAD_MW>/g, sub, context, true);
            obj["CMMT_RA_MLC"] = base.parse_element (/<cim:OASISDataItems.CMMT_RA_MLC>([\s\S]*?)<\/cim:OASISDataItems.CMMT_RA_MLC>/g, sub, context, true);
            obj["CMMT_RA_MW"] = base.parse_element (/<cim:OASISDataItems.CMMT_RA_MW>([\s\S]*?)<\/cim:OASISDataItems.CMMT_RA_MW>/g, sub, context, true);
            obj["CMMT_RA_START_COST"] = base.parse_element (/<cim:OASISDataItems.CMMT_RA_START_COST>([\s\S]*?)<\/cim:OASISDataItems.CMMT_RA_START_COST>/g, sub, context, true);
            obj["CMMT_RA_UNITS"] = base.parse_element (/<cim:OASISDataItems.CMMT_RA_UNITS>([\s\S]*?)<\/cim:OASISDataItems.CMMT_RA_UNITS>/g, sub, context, true);
            obj["CMMT_TOTAL_START_COST"] = base.parse_element (/<cim:OASISDataItems.CMMT_TOTAL_START_COST>([\s\S]*?)<\/cim:OASISDataItems.CMMT_TOTAL_START_COST>/g, sub, context, true);
            obj["CMMT_TOTAL_MW"] = base.parse_element (/<cim:OASISDataItems.CMMT_TOTAL_MW>([\s\S]*?)<\/cim:OASISDataItems.CMMT_TOTAL_MW>/g, sub, context, true);
            obj["CMMT_TOTAL_UNITS"] = base.parse_element (/<cim:OASISDataItems.CMMT_TOTAL_UNITS>([\s\S]*?)<\/cim:OASISDataItems.CMMT_TOTAL_UNITS>/g, sub, context, true);
            obj["CRR_CAT"] = base.parse_element (/<cim:OASISDataItems.CRR_CAT>([\s\S]*?)<\/cim:OASISDataItems.CRR_CAT>/g, sub, context, true);
            obj["CRR_MARKET_value"] = base.parse_element (/<cim:OASISDataItems.CRR_MARKET_value>([\s\S]*?)<\/cim:OASISDataItems.CRR_MARKET_value>/g, sub, context, true);
            obj["CRR_MW"] = base.parse_element (/<cim:OASISDataItems.CRR_MW>([\s\S]*?)<\/cim:OASISDataItems.CRR_MW>/g, sub, context, true);
            obj["CRR_NSR"] = base.parse_element (/<cim:OASISDataItems.CRR_NSR>([\s\S]*?)<\/cim:OASISDataItems.CRR_NSR>/g, sub, context, true);
            obj["CRR_OPTION"] = base.parse_element (/<cim:OASISDataItems.CRR_OPTION>([\s\S]*?)<\/cim:OASISDataItems.CRR_OPTION>/g, sub, context, true);
            obj["CRR_OWNER"] = base.parse_element (/<cim:OASISDataItems.CRR_OWNER>([\s\S]*?)<\/cim:OASISDataItems.CRR_OWNER>/g, sub, context, true);
            obj["CRR_SEGMENT"] = base.parse_element (/<cim:OASISDataItems.CRR_SEGMENT>([\s\S]*?)<\/cim:OASISDataItems.CRR_SEGMENT>/g, sub, context, true);
            obj["CRR_TERM"] = base.parse_element (/<cim:OASISDataItems.CRR_TERM>([\s\S]*?)<\/cim:OASISDataItems.CRR_TERM>/g, sub, context, true);
            obj["CRR_TOU"] = base.parse_element (/<cim:OASISDataItems.CRR_TOU>([\s\S]*?)<\/cim:OASISDataItems.CRR_TOU>/g, sub, context, true);
            obj["CRR_TYPE"] = base.parse_element (/<cim:OASISDataItems.CRR_TYPE>([\s\S]*?)<\/cim:OASISDataItems.CRR_TYPE>/g, sub, context, true);
            obj["ENE_EA_DA"] = base.parse_element (/<cim:OASISDataItems.ENE_EA_DA>([\s\S]*?)<\/cim:OASISDataItems.ENE_EA_DA>/g, sub, context, true);
            obj["ENE_EA_EXCEPT"] = base.parse_element (/<cim:OASISDataItems.ENE_EA_EXCEPT>([\s\S]*?)<\/cim:OASISDataItems.ENE_EA_EXCEPT>/g, sub, context, true);
            obj["ENE_EA_HASP"] = base.parse_element (/<cim:OASISDataItems.ENE_EA_HASP>([\s\S]*?)<\/cim:OASISDataItems.ENE_EA_HASP>/g, sub, context, true);
            obj["ENE_EA_MLE"] = base.parse_element (/<cim:OASISDataItems.ENE_EA_MLE>([\s\S]*?)<\/cim:OASISDataItems.ENE_EA_MLE>/g, sub, context, true);
            obj["ENE_EA_MSSLF"] = base.parse_element (/<cim:OASISDataItems.ENE_EA_MSSLF>([\s\S]*?)<\/cim:OASISDataItems.ENE_EA_MSSLF>/g, sub, context, true);
            obj["ENE_EA_OPTIMAL"] = base.parse_element (/<cim:OASISDataItems.ENE_EA_OPTIMAL>([\s\S]*?)<\/cim:OASISDataItems.ENE_EA_OPTIMAL>/g, sub, context, true);
            obj["ENE_EA_RAMP_DEV"] = base.parse_element (/<cim:OASISDataItems.ENE_EA_RAMP_DEV>([\s\S]*?)<\/cim:OASISDataItems.ENE_EA_RAMP_DEV>/g, sub, context, true);
            obj["ENE_EA_RAMP_STD"] = base.parse_element (/<cim:OASISDataItems.ENE_EA_RAMP_STD>([\s\S]*?)<\/cim:OASISDataItems.ENE_EA_RAMP_STD>/g, sub, context, true);
            obj["ENE_EA_RESIDUAL"] = base.parse_element (/<cim:OASISDataItems.ENE_EA_RESIDUAL>([\s\S]*?)<\/cim:OASISDataItems.ENE_EA_RESIDUAL>/g, sub, context, true);
            obj["ENE_EA_RMR"] = base.parse_element (/<cim:OASISDataItems.ENE_EA_RMR>([\s\S]*?)<\/cim:OASISDataItems.ENE_EA_RMR>/g, sub, context, true);
            obj["ENE_EA_SELF"] = base.parse_element (/<cim:OASISDataItems.ENE_EA_SELF>([\s\S]*?)<\/cim:OASISDataItems.ENE_EA_SELF>/g, sub, context, true);
            obj["ENE_EA_SLIC"] = base.parse_element (/<cim:OASISDataItems.ENE_EA_SLIC>([\s\S]*?)<\/cim:OASISDataItems.ENE_EA_SLIC>/g, sub, context, true);
            obj["ENE_EXP_CLEAR_HASP"] = base.parse_element (/<cim:OASISDataItems.ENE_EXP_CLEAR_HASP>([\s\S]*?)<\/cim:OASISDataItems.ENE_EXP_CLEAR_HASP>/g, sub, context, true);
            obj["ENE_EXP_CLEAR_IFM"] = base.parse_element (/<cim:OASISDataItems.ENE_EXP_CLEAR_IFM>([\s\S]*?)<\/cim:OASISDataItems.ENE_EXP_CLEAR_IFM>/g, sub, context, true);
            obj["ENE_EXP_CLEAR_RTM"] = base.parse_element (/<cim:OASISDataItems.ENE_EXP_CLEAR_RTM>([\s\S]*?)<\/cim:OASISDataItems.ENE_EXP_CLEAR_RTM>/g, sub, context, true);
            obj["ENE_GEN_CLEAR_HASP"] = base.parse_element (/<cim:OASISDataItems.ENE_GEN_CLEAR_HASP>([\s\S]*?)<\/cim:OASISDataItems.ENE_GEN_CLEAR_HASP>/g, sub, context, true);
            obj["ENE_GEN_CLEAR_IFM"] = base.parse_element (/<cim:OASISDataItems.ENE_GEN_CLEAR_IFM>([\s\S]*?)<\/cim:OASISDataItems.ENE_GEN_CLEAR_IFM>/g, sub, context, true);
            obj["ENE_GEN_CLEAR_RTM"] = base.parse_element (/<cim:OASISDataItems.ENE_GEN_CLEAR_RTM>([\s\S]*?)<\/cim:OASISDataItems.ENE_GEN_CLEAR_RTM>/g, sub, context, true);
            obj["ENE_IMP_CLEAR_HASP"] = base.parse_element (/<cim:OASISDataItems.ENE_IMP_CLEAR_HASP>([\s\S]*?)<\/cim:OASISDataItems.ENE_IMP_CLEAR_HASP>/g, sub, context, true);
            obj["ENE_IMP_CLEAR_IFM"] = base.parse_element (/<cim:OASISDataItems.ENE_IMP_CLEAR_IFM>([\s\S]*?)<\/cim:OASISDataItems.ENE_IMP_CLEAR_IFM>/g, sub, context, true);
            obj["ENE_IMP_CLEAR_RTM"] = base.parse_element (/<cim:OASISDataItems.ENE_IMP_CLEAR_RTM>([\s\S]*?)<\/cim:OASISDataItems.ENE_IMP_CLEAR_RTM>/g, sub, context, true);
            obj["ENE_LOAD_ACTUAL"] = base.parse_element (/<cim:OASISDataItems.ENE_LOAD_ACTUAL>([\s\S]*?)<\/cim:OASISDataItems.ENE_LOAD_ACTUAL>/g, sub, context, true);
            obj["ENE_LOAD_CLEAR_HASP"] = base.parse_element (/<cim:OASISDataItems.ENE_LOAD_CLEAR_HASP>([\s\S]*?)<\/cim:OASISDataItems.ENE_LOAD_CLEAR_HASP>/g, sub, context, true);
            obj["ENE_LOAD_CLEAR_IFM"] = base.parse_element (/<cim:OASISDataItems.ENE_LOAD_CLEAR_IFM>([\s\S]*?)<\/cim:OASISDataItems.ENE_LOAD_CLEAR_IFM>/g, sub, context, true);
            obj["ENE_LOAD_CLEAR_RTM"] = base.parse_element (/<cim:OASISDataItems.ENE_LOAD_CLEAR_RTM>([\s\S]*?)<\/cim:OASISDataItems.ENE_LOAD_CLEAR_RTM>/g, sub, context, true);
            obj["ENE_LOAD_FCST"] = base.parse_element (/<cim:OASISDataItems.ENE_LOAD_FCST>([\s\S]*?)<\/cim:OASISDataItems.ENE_LOAD_FCST>/g, sub, context, true);
            obj["ENE_PEAK_HOUR"] = base.parse_element (/<cim:OASISDataItems.ENE_PEAK_HOUR>([\s\S]*?)<\/cim:OASISDataItems.ENE_PEAK_HOUR>/g, sub, context, true);
            obj["ENE_PEAK_LOAD"] = base.parse_element (/<cim:OASISDataItems.ENE_PEAK_LOAD>([\s\S]*?)<\/cim:OASISDataItems.ENE_PEAK_LOAD>/g, sub, context, true);
            obj["FUEL_REGION_value"] = base.parse_element (/<cim:OASISDataItems.FUEL_REGION_value>([\s\S]*?)<\/cim:OASISDataItems.FUEL_REGION_value>/g, sub, context, true);
            obj["INVT_DATETIME"] = base.parse_element (/<cim:OASISDataItems.INVT_DATETIME>([\s\S]*?)<\/cim:OASISDataItems.INVT_DATETIME>/g, sub, context, true);
            obj["LOAD_ACTUAL"] = base.parse_element (/<cim:OASISDataItems.LOAD_ACTUAL>([\s\S]*?)<\/cim:OASISDataItems.LOAD_ACTUAL>/g, sub, context, true);
            obj["LOAD_CLEAR_RTM"] = base.parse_element (/<cim:OASISDataItems.LOAD_CLEAR_RTM>([\s\S]*?)<\/cim:OASISDataItems.LOAD_CLEAR_RTM>/g, sub, context, true);
            obj["LOSS_TOTAL_COST_HASP"] = base.parse_element (/<cim:OASISDataItems.LOSS_TOTAL_COST_HASP>([\s\S]*?)<\/cim:OASISDataItems.LOSS_TOTAL_COST_HASP>/g, sub, context, true);
            obj["LOSS_TOTAL_COST_RTM"] = base.parse_element (/<cim:OASISDataItems.LOSS_TOTAL_COST_RTM>([\s\S]*?)<\/cim:OASISDataItems.LOSS_TOTAL_COST_RTM>/g, sub, context, true);
            obj["LOSS_TOTAL_MW_HASP"] = base.parse_element (/<cim:OASISDataItems.LOSS_TOTAL_MW_HASP>([\s\S]*?)<\/cim:OASISDataItems.LOSS_TOTAL_MW_HASP>/g, sub, context, true);
            obj["LOSS_TOTAL_MW_RTM"] = base.parse_element (/<cim:OASISDataItems.LOSS_TOTAL_MW_RTM>([\s\S]*?)<\/cim:OASISDataItems.LOSS_TOTAL_MW_RTM>/g, sub, context, true);
            obj["MPM_FLAG"] = base.parse_element (/<cim:OASISDataItems.MPM_FLAG>([\s\S]*?)<\/cim:OASISDataItems.MPM_FLAG>/g, sub, context, true);
            obj["OP_RSRV_TOTAL"] = base.parse_element (/<cim:OASISDataItems.OP_RSRV_TOTAL>([\s\S]*?)<\/cim:OASISDataItems.OP_RSRV_TOTAL>/g, sub, context, true);
            obj["PRC_NG"] = base.parse_element (/<cim:OASISDataItems.PRC_NG>([\s\S]*?)<\/cim:OASISDataItems.PRC_NG>/g, sub, context, true);
            obj["PRC_SHADOW"] = base.parse_element (/<cim:OASISDataItems.PRC_SHADOW>([\s\S]*?)<\/cim:OASISDataItems.PRC_SHADOW>/g, sub, context, true);
            obj["RATING_ATC"] = base.parse_element (/<cim:OASISDataItems.RATING_ATC>([\s\S]*?)<\/cim:OASISDataItems.RATING_ATC>/g, sub, context, true);
            obj["RMR_DETER_DAM"] = base.parse_element (/<cim:OASISDataItems.RMR_DETER_DAM>([\s\S]*?)<\/cim:OASISDataItems.RMR_DETER_DAM>/g, sub, context, true);
            obj["RMR_DETER_HASP"] = base.parse_element (/<cim:OASISDataItems.RMR_DETER_HASP>([\s\S]*?)<\/cim:OASISDataItems.RMR_DETER_HASP>/g, sub, context, true);
            obj["RMR_DISPATCH_DAM"] = base.parse_element (/<cim:OASISDataItems.RMR_DISPATCH_DAM>([\s\S]*?)<\/cim:OASISDataItems.RMR_DISPATCH_DAM>/g, sub, context, true);
            obj["RMR_DISPATCH_HASP"] = base.parse_element (/<cim:OASISDataItems.RMR_DISPATCH_HASP>([\s\S]*?)<\/cim:OASISDataItems.RMR_DISPATCH_HASP>/g, sub, context, true);
            obj["RMR_TOTAL"] = base.parse_element (/<cim:OASISDataItems.RMR_TOTAL>([\s\S]*?)<\/cim:OASISDataItems.RMR_TOTAL>/g, sub, context, true);
            obj["RMR_TOTAL_AVAIL"] = base.parse_element (/<cim:OASISDataItems.RMR_TOTAL_AVAIL>([\s\S]*?)<\/cim:OASISDataItems.RMR_TOTAL_AVAIL>/g, sub, context, true);
            obj["RUC_GEN_CLEAR_RUC"] = base.parse_element (/<cim:OASISDataItems.RUC_GEN_CLEAR_RUC>([\s\S]*?)<\/cim:OASISDataItems.RUC_GEN_CLEAR_RUC>/g, sub, context, true);
            obj["RUC_IMP_CLEAR_RUC"] = base.parse_element (/<cim:OASISDataItems.RUC_IMP_CLEAR_RUC>([\s\S]*?)<\/cim:OASISDataItems.RUC_IMP_CLEAR_RUC>/g, sub, context, true);
            obj["RUC_LOAD_CLEAR_RUC"] = base.parse_element (/<cim:OASISDataItems.RUC_LOAD_CLEAR_RUC>([\s\S]*?)<\/cim:OASISDataItems.RUC_LOAD_CLEAR_RUC>/g, sub, context, true);
            obj["RUC_ZONE_value"] = base.parse_element (/<cim:OASISDataItems.RUC_ZONE_value>([\s\S]*?)<\/cim:OASISDataItems.RUC_ZONE_value>/g, sub, context, true);
            obj["TAC_AREA_value"] = base.parse_element (/<cim:OASISDataItems.TAC_AREA_value>([\s\S]*?)<\/cim:OASISDataItems.TAC_AREA_value>/g, sub, context, true);
            obj["TINTRFCE_value"] = base.parse_element (/<cim:OASISDataItems.TINTRFCE_value>([\s\S]*?)<\/cim:OASISDataItems.TINTRFCE_value>/g, sub, context, true);
            obj["TRNS_AS_IMPORT"] = base.parse_element (/<cim:OASISDataItems.TRNS_AS_IMPORT>([\s\S]*?)<\/cim:OASISDataItems.TRNS_AS_IMPORT>/g, sub, context, true);
            obj["TRNS_ENE_IMPORT"] = base.parse_element (/<cim:OASISDataItems.TRNS_ENE_IMPORT>([\s\S]*?)<\/cim:OASISDataItems.TRNS_ENE_IMPORT>/g, sub, context, true);
            obj["TRNS_EQUIP_value"] = base.parse_element (/<cim:OASISDataItems.TRNS_EQUIP_value>([\s\S]*?)<\/cim:OASISDataItems.TRNS_EQUIP_value>/g, sub, context, true);
            obj["TRNS_RATING_CBM"] = base.parse_element (/<cim:OASISDataItems.TRNS_RATING_CBM>([\s\S]*?)<\/cim:OASISDataItems.TRNS_RATING_CBM>/g, sub, context, true);
            obj["TRNS_RATING_DIRECTION"] = base.parse_element (/<cim:OASISDataItems.TRNS_RATING_DIRECTION>([\s\S]*?)<\/cim:OASISDataItems.TRNS_RATING_DIRECTION>/g, sub, context, true);
            obj["TRNS_RATING_OTC"] = base.parse_element (/<cim:OASISDataItems.TRNS_RATING_OTC>([\s\S]*?)<\/cim:OASISDataItems.TRNS_RATING_OTC>/g, sub, context, true);
            obj["TRNS_RATING_OTC_DERATE"] = base.parse_element (/<cim:OASISDataItems.TRNS_RATING_OTC_DERATE>([\s\S]*?)<\/cim:OASISDataItems.TRNS_RATING_OTC_DERATE>/g, sub, context, true);
            obj["TRNS_RATING_TTC"] = base.parse_element (/<cim:OASISDataItems.TRNS_RATING_TTC>([\s\S]*?)<\/cim:OASISDataItems.TRNS_RATING_TTC>/g, sub, context, true);
            obj["TRNS_TI_value"] = base.parse_element (/<cim:OASISDataItems.TRNS_TI_value>([\s\S]*?)<\/cim:OASISDataItems.TRNS_TI_value>/g, sub, context, true);
            obj["TRNS_TR_ENTMTS"] = base.parse_element (/<cim:OASISDataItems.TRNS_TR_ENTMTS>([\s\S]*?)<\/cim:OASISDataItems.TRNS_TR_ENTMTS>/g, sub, context, true);
            obj["TRNS_TR_USEAGE"] = base.parse_element (/<cim:OASISDataItems.TRNS_TR_USEAGE>([\s\S]*?)<\/cim:OASISDataItems.TRNS_TR_USEAGE>/g, sub, context, true);
            bucket = context.parsed.OASISDataItems;
            if (null == bucket)
                context.parsed.OASISDataItems = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_JobFlagType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "JobFlagType";
            obj["CREATED"] = base.parse_element (/<cim:JobFlagType.CREATED>([\s\S]*?)<\/cim:JobFlagType.CREATED>/g, sub, context, true);
            obj["MODIFIED"] = base.parse_element (/<cim:JobFlagType.MODIFIED>([\s\S]*?)<\/cim:JobFlagType.MODIFIED>/g, sub, context, true);
            obj["DELETED"] = base.parse_element (/<cim:JobFlagType.DELETED>([\s\S]*?)<\/cim:JobFlagType.DELETED>/g, sub, context, true);
            bucket = context.parsed.JobFlagType;
            if (null == bucket)
                context.parsed.JobFlagType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * S - Scheduling
         *
         * P - Pricing
         *
         */
        function parse_runTypeCAISO (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "runTypeCAISO";
            obj["S"] = base.parse_element (/<cim:runTypeCAISO.S>([\s\S]*?)<\/cim:runTypeCAISO.S>/g, sub, context, true);
            obj["P"] = base.parse_element (/<cim:runTypeCAISO.P>([\s\S]*?)<\/cim:runTypeCAISO.P>/g, sub, context, true);
            bucket = context.parsed.runTypeCAISO;
            if (null == bucket)
                context.parsed.runTypeCAISO = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * BASELI NE
         *
         * NEGOTIATED
         *
         */
        function parse_AdderType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AdderType";
            obj["BASELINE"] = base.parse_element (/<cim:AdderType.BASELINE>([\s\S]*?)<\/cim:AdderType.BASELINE>/g, sub, context, true);
            obj["NEGOTIATED"] = base.parse_element (/<cim:AdderType.NEGOTIATED>([\s\S]*?)<\/cim:AdderType.NEGOTIATED>/g, sub, context, true);
            bucket = context.parsed.AdderType;
            if (null == bucket)
                context.parsed.AdderType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Description of market statement
         *
         */
        function parse_MarketStatementDescription (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketStatementDescription";
            obj["DAILY_INITIAL_CREDIT"] = base.parse_element (/<cim:MarketStatementDescription.DAILY_INITIAL_CREDIT>([\s\S]*?)<\/cim:MarketStatementDescription.DAILY_INITIAL_CREDIT>/g, sub, context, true);
            obj["DAILY_INITIAL_MARKET"] = base.parse_element (/<cim:MarketStatementDescription.DAILY_INITIAL_MARKET>([\s\S]*?)<\/cim:MarketStatementDescription.DAILY_INITIAL_MARKET>/g, sub, context, true);
            obj["MONTHLY_INITIAL_MARKET"] = base.parse_element (/<cim:MarketStatementDescription.MONTHLY_INITIAL_MARKET>([\s\S]*?)<\/cim:MarketStatementDescription.MONTHLY_INITIAL_MARKET>/g, sub, context, true);
            obj["DAILY_RECALC_MARKET"] = base.parse_element (/<cim:MarketStatementDescription.DAILY_RECALC_MARKET>([\s\S]*?)<\/cim:MarketStatementDescription.DAILY_RECALC_MARKET>/g, sub, context, true);
            obj["MONTHLY_RECALC_MARKET"] = base.parse_element (/<cim:MarketStatementDescription.MONTHLY_RECALC_MARKET>([\s\S]*?)<\/cim:MarketStatementDescription.MONTHLY_RECALC_MARKET>/g, sub, context, true);
            bucket = context.parsed.MarketStatementDescription;
            if (null == bucket)
                context.parsed.MarketStatementDescription = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * ADD - add
         * DEL - delete
         *
         * CHG - change
         *
         */
        function parse_MQSDELType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MQSDELType";
            obj["ADD"] = base.parse_element (/<cim:MQSDELType.ADD>([\s\S]*?)<\/cim:MQSDELType.ADD>/g, sub, context, true);
            obj["DEL"] = base.parse_element (/<cim:MQSDELType.DEL>([\s\S]*?)<\/cim:MQSDELType.DEL>/g, sub, context, true);
            obj["CHG"] = base.parse_element (/<cim:MQSDELType.CHG>([\s\S]*?)<\/cim:MQSDELType.CHG>/g, sub, context, true);
            bucket = context.parsed.MQSDELType;
            if (null == bucket)
                context.parsed.MQSDELType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_TimeZoneType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TimeZoneType";
            obj["PPT"] = base.parse_element (/<cim:TimeZoneType.PPT>([\s\S]*?)<\/cim:TimeZoneType.PPT>/g, sub, context, true);
            bucket = context.parsed.TimeZoneType;
            if (null == bucket)
                context.parsed.TimeZoneType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_SchedClassType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SchedClassType";
            obj["P"] = base.parse_element (/<cim:SchedClassType.P>([\s\S]*?)<\/cim:SchedClassType.P>/g, sub, context, true);
            obj["R"] = base.parse_element (/<cim:SchedClassType.R>([\s\S]*?)<\/cim:SchedClassType.R>/g, sub, context, true);
            obj["F"] = base.parse_element (/<cim:SchedClassType.F>([\s\S]*?)<\/cim:SchedClassType.F>/g, sub, context, true);
            bucket = context.parsed.SchedClassType;
            if (null == bucket)
                context.parsed.SchedClassType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_OASISMarketType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OASISMarketType";
            obj["IFM"] = base.parse_element (/<cim:OASISMarketType.IFM>([\s\S]*?)<\/cim:OASISMarketType.IFM>/g, sub, context, true);
            obj["RUC"] = base.parse_element (/<cim:OASISMarketType.RUC>([\s\S]*?)<\/cim:OASISMarketType.RUC>/g, sub, context, true);
            obj["HASP"] = base.parse_element (/<cim:OASISMarketType.HASP>([\s\S]*?)<\/cim:OASISMarketType.HASP>/g, sub, context, true);
            obj["RTM"] = base.parse_element (/<cim:OASISMarketType.RTM>([\s\S]*?)<\/cim:OASISMarketType.RTM>/g, sub, context, true);
            obj["N/A"] = base.parse_element (/<cim:OASISMarketType.N\/A>([\s\S]*?)<\/cim:OASISMarketType.N\/A>/g, sub, context, true);
            obj["All"] = base.parse_element (/<cim:OASISMarketType.All>([\s\S]*?)<\/cim:OASISMarketType.All>/g, sub, context, true);
            bucket = context.parsed.OASISMarketType;
            if (null == bucket)
                context.parsed.OASISMarketType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_AllocationEnergyTypeCode (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AllocationEnergyTypeCode";
            obj["DASE"] = base.parse_element (/<cim:AllocationEnergyTypeCode.DASE>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.DASE>/g, sub, context, true);
            obj["OE"] = base.parse_element (/<cim:AllocationEnergyTypeCode.OE>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.OE>/g, sub, context, true);
            obj["HASE"] = base.parse_element (/<cim:AllocationEnergyTypeCode.HASE>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.HASE>/g, sub, context, true);
            obj["SRE"] = base.parse_element (/<cim:AllocationEnergyTypeCode.SRE>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.SRE>/g, sub, context, true);
            obj["RED"] = base.parse_element (/<cim:AllocationEnergyTypeCode.RED>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.RED>/g, sub, context, true);
            obj["MSSLFE"] = base.parse_element (/<cim:AllocationEnergyTypeCode.MSSLFE>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.MSSLFE>/g, sub, context, true);
            obj["RE"] = base.parse_element (/<cim:AllocationEnergyTypeCode.RE>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.RE>/g, sub, context, true);
            obj["MLE"] = base.parse_element (/<cim:AllocationEnergyTypeCode.MLE>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.MLE>/g, sub, context, true);
            obj["SE"] = base.parse_element (/<cim:AllocationEnergyTypeCode.SE>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.SE>/g, sub, context, true);
            obj["RTSSE"] = base.parse_element (/<cim:AllocationEnergyTypeCode.RTSSE>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.RTSSE>/g, sub, context, true);
            obj["PE"] = base.parse_element (/<cim:AllocationEnergyTypeCode.PE>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.PE>/g, sub, context, true);
            obj["DAPE"] = base.parse_element (/<cim:AllocationEnergyTypeCode.DAPE>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.DAPE>/g, sub, context, true);
            obj["ESRT"] = base.parse_element (/<cim:AllocationEnergyTypeCode.ESRT>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.ESRT>/g, sub, context, true);
            obj["ESYS"] = base.parse_element (/<cim:AllocationEnergyTypeCode.ESYS>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.ESYS>/g, sub, context, true);
            obj["RMRD"] = base.parse_element (/<cim:AllocationEnergyTypeCode.RMRD>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.RMRD>/g, sub, context, true);
            obj["RMRR"] = base.parse_element (/<cim:AllocationEnergyTypeCode.RMRR>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.RMRR>/g, sub, context, true);
            obj["RMRS"] = base.parse_element (/<cim:AllocationEnergyTypeCode.RMRS>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.RMRS>/g, sub, context, true);
            obj["RMRT"] = base.parse_element (/<cim:AllocationEnergyTypeCode.RMRT>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.RMRT>/g, sub, context, true);
            obj["STRT"] = base.parse_element (/<cim:AllocationEnergyTypeCode.STRT>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.STRT>/g, sub, context, true);
            obj["SDWN"] = base.parse_element (/<cim:AllocationEnergyTypeCode.SDWN>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.SDWN>/g, sub, context, true);
            obj["TEST"] = base.parse_element (/<cim:AllocationEnergyTypeCode.TEST>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.TEST>/g, sub, context, true);
            obj["OVGN"] = base.parse_element (/<cim:AllocationEnergyTypeCode.OVGN>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.OVGN>/g, sub, context, true);
            obj["VS"] = base.parse_element (/<cim:AllocationEnergyTypeCode.VS>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.VS>/g, sub, context, true);
            obj["ETC"] = base.parse_element (/<cim:AllocationEnergyTypeCode.ETC>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.ETC>/g, sub, context, true);
            obj["TOR"] = base.parse_element (/<cim:AllocationEnergyTypeCode.TOR>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.TOR>/g, sub, context, true);
            obj["RSYS"] = base.parse_element (/<cim:AllocationEnergyTypeCode.RSYS>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.RSYS>/g, sub, context, true);
            obj["RCNG"] = base.parse_element (/<cim:AllocationEnergyTypeCode.RCNG>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.RCNG>/g, sub, context, true);
            obj["ACNG"] = base.parse_element (/<cim:AllocationEnergyTypeCode.ACNG>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.ACNG>/g, sub, context, true);
            obj["TCNG"] = base.parse_element (/<cim:AllocationEnergyTypeCode.TCNG>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.TCNG>/g, sub, context, true);
            obj["LMPM"] = base.parse_element (/<cim:AllocationEnergyTypeCode.LMPM>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.LMPM>/g, sub, context, true);
            obj["BS"] = base.parse_element (/<cim:AllocationEnergyTypeCode.BS>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.BS>/g, sub, context, true);
            obj["MINL"] = base.parse_element (/<cim:AllocationEnergyTypeCode.MINL>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.MINL>/g, sub, context, true);
            obj["SUMR"] = base.parse_element (/<cim:AllocationEnergyTypeCode.SUMR>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.SUMR>/g, sub, context, true);
            obj["RMRH"] = base.parse_element (/<cim:AllocationEnergyTypeCode.RMRH>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.RMRH>/g, sub, context, true);
            obj["SLIC"] = base.parse_element (/<cim:AllocationEnergyTypeCode.SLIC>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.SLIC>/g, sub, context, true);
            obj["OTHER"] = base.parse_element (/<cim:AllocationEnergyTypeCode.OTHER>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.OTHER>/g, sub, context, true);
            bucket = context.parsed.AllocationEnergyTypeCode;
            if (null == bucket)
                context.parsed.AllocationEnergyTypeCode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

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
        function parse_BidStatusType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "BidStatusType";
            /**
             * Clean
             *
             */
            obj["CL"] = base.parse_element (/<cim:BidStatusType.CL>([\s\S]*?)<\/cim:BidStatusType.CL>/g, sub, context, true);
            /**
             * Replicated
             *
             */
            obj["RP"] = base.parse_element (/<cim:BidStatusType.RP>([\s\S]*?)<\/cim:BidStatusType.RP>/g, sub, context, true);
            obj["RJ"] = base.parse_element (/<cim:BidStatusType.RJ>([\s\S]*?)<\/cim:BidStatusType.RJ>/g, sub, context, true);
            obj["I"] = base.parse_element (/<cim:BidStatusType.I>([\s\S]*?)<\/cim:BidStatusType.I>/g, sub, context, true);
            obj["CV"] = base.parse_element (/<cim:BidStatusType.CV>([\s\S]*?)<\/cim:BidStatusType.CV>/g, sub, context, true);
            obj["CM"] = base.parse_element (/<cim:BidStatusType.CM>([\s\S]*?)<\/cim:BidStatusType.CM>/g, sub, context, true);
            obj["V"] = base.parse_element (/<cim:BidStatusType.V>([\s\S]*?)<\/cim:BidStatusType.V>/g, sub, context, true);
            obj["M"] = base.parse_element (/<cim:BidStatusType.M>([\s\S]*?)<\/cim:BidStatusType.M>/g, sub, context, true);
            obj["CX"] = base.parse_element (/<cim:BidStatusType.CX>([\s\S]*?)<\/cim:BidStatusType.CX>/g, sub, context, true);
            obj["O"] = base.parse_element (/<cim:BidStatusType.O>([\s\S]*?)<\/cim:BidStatusType.O>/g, sub, context, true);
            bucket = context.parsed.BidStatusType;
            if (null == bucket)
                context.parsed.BidStatusType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_OASISBidReportType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OASISBidReportType";
            obj["BIDS_PUBLIC"] = base.parse_element (/<cim:OASISBidReportType.BIDS_PUBLIC>([\s\S]*?)<\/cim:OASISBidReportType.BIDS_PUBLIC>/g, sub, context, true);
            bucket = context.parsed.OASISBidReportType;
            if (null == bucket)
                context.parsed.OASISBidReportType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_SegmentCurveType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SegmentCurveType";
            obj["COST"] = base.parse_element (/<cim:SegmentCurveType.COST>([\s\S]*?)<\/cim:SegmentCurveType.COST>/g, sub, context, true);
            obj["CONSULTATIVE"] = base.parse_element (/<cim:SegmentCurveType.CONSULTATIVE>([\s\S]*?)<\/cim:SegmentCurveType.CONSULTATIVE>/g, sub, context, true);
            bucket = context.parsed.SegmentCurveType;
            if (null == bucket)
                context.parsed.SegmentCurveType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_JobStartEndType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "JobStartEndType";
            obj["NA"] = base.parse_element (/<cim:JobStartEndType.NA>([\s\S]*?)<\/cim:JobStartEndType.NA>/g, sub, context, true);
            obj["START"] = base.parse_element (/<cim:JobStartEndType.START>([\s\S]*?)<\/cim:JobStartEndType.START>/g, sub, context, true);
            obj["END"] = base.parse_element (/<cim:JobStartEndType.END>([\s\S]*?)<\/cim:JobStartEndType.END>/g, sub, context, true);
            bucket = context.parsed.JobStartEndType;
            if (null == bucket)
                context.parsed.JobStartEndType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_LoadFollowingCapacityType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "LoadFollowingCapacityType";
            obj["UP"] = base.parse_element (/<cim:LoadFollowingCapacityType.UP>([\s\S]*?)<\/cim:LoadFollowingCapacityType.UP>/g, sub, context, true);
            obj["DOWN"] = base.parse_element (/<cim:LoadFollowingCapacityType.DOWN>([\s\S]*?)<\/cim:LoadFollowingCapacityType.DOWN>/g, sub, context, true);
            bucket = context.parsed.LoadFollowingCapacityType;
            if (null == bucket)
                context.parsed.LoadFollowingCapacityType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_DAMMarketType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "DAMMarketType";
            obj["DAM"] = base.parse_element (/<cim:DAMMarketType.DAM>([\s\S]*?)<\/cim:DAMMarketType.DAM>/g, sub, context, true);
            bucket = context.parsed.DAMMarketType;
            if (null == bucket)
                context.parsed.DAMMarketType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * market statement document status
         *
         */
        function parse_MarketStatementDocStatus (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketStatementDocStatus";
            obj["APPROVED"] = base.parse_element (/<cim:MarketStatementDocStatus.APPROVED>([\s\S]*?)<\/cim:MarketStatementDocStatus.APPROVED>/g, sub, context, true);
            obj["CANCELLED"] = base.parse_element (/<cim:MarketStatementDocStatus.CANCELLED>([\s\S]*?)<\/cim:MarketStatementDocStatus.CANCELLED>/g, sub, context, true);
            bucket = context.parsed.MarketStatementDocStatus;
            if (null == bucket)
                context.parsed.MarketStatementDocStatus = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * MP
         *
         * ISO
         *
         */
        function parse_RequestorRmrTest (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "RequestorRmrTest";
            obj["MP"] = base.parse_element (/<cim:RequestorRmrTest.MP>([\s\S]*?)<\/cim:RequestorRmrTest.MP>/g, sub, context, true);
            obj["ISO"] = base.parse_element (/<cim:RequestorRmrTest.ISO>([\s\S]*?)<\/cim:RequestorRmrTest.ISO>/g, sub, context, true);
            bucket = context.parsed.RequestorRmrTest;
            if (null == bucket)
                context.parsed.RequestorRmrTest = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * market statement line item alias name
         *
         */
        function parse_MarketStatementLineItemAliasName (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketStatementLineItemAliasName";
            obj["TRADE_DATE"] = base.parse_element (/<cim:MarketStatementLineItemAliasName.TRADE_DATE>([\s\S]*?)<\/cim:MarketStatementLineItemAliasName.TRADE_DATE>/g, sub, context, true);
            obj["PARENT_CHARGE_GROUP"] = base.parse_element (/<cim:MarketStatementLineItemAliasName.PARENT_CHARGE_GROUP>([\s\S]*?)<\/cim:MarketStatementLineItemAliasName.PARENT_CHARGE_GROUP>/g, sub, context, true);
            obj["CHARGE_GROUP"] = base.parse_element (/<cim:MarketStatementLineItemAliasName.CHARGE_GROUP>([\s\S]*?)<\/cim:MarketStatementLineItemAliasName.CHARGE_GROUP>/g, sub, context, true);
            obj["CHARGE_CODE_SUMMARY"] = base.parse_element (/<cim:MarketStatementLineItemAliasName.CHARGE_CODE_SUMMARY>([\s\S]*?)<\/cim:MarketStatementLineItemAliasName.CHARGE_CODE_SUMMARY>/g, sub, context, true);
            obj["CHARGE_CODE_INTERVAL_TOTAL"] = base.parse_element (/<cim:MarketStatementLineItemAliasName.CHARGE_CODE_INTERVAL_TOTAL>([\s\S]*?)<\/cim:MarketStatementLineItemAliasName.CHARGE_CODE_INTERVAL_TOTAL>/g, sub, context, true);
            obj["CHARGE_CODE_INTERVAL_DETAIL"] = base.parse_element (/<cim:MarketStatementLineItemAliasName.CHARGE_CODE_INTERVAL_DETAIL>([\s\S]*?)<\/cim:MarketStatementLineItemAliasName.CHARGE_CODE_INTERVAL_DETAIL>/g, sub, context, true);
            bucket = context.parsed.MarketStatementLineItemAliasName;
            if (null == bucket)
                context.parsed.MarketStatementLineItemAliasName = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_CleanTradeProductType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CleanTradeProductType";
            /**
             * Physical Energy Tra
             *
             */
            obj["PHY"] = base.parse_element (/<cim:CleanTradeProductType.PHY>([\s\S]*?)<\/cim:CleanTradeProductType.PHY>/g, sub, context, true);
            /**
             * Energy Trades at Aggregated Pricing Nodes
             *
             */
            obj["APN"] = base.parse_element (/<cim:CleanTradeProductType.APN>([\s\S]*?)<\/cim:CleanTradeProductType.APN>/g, sub, context, true);
            /**
             * Converted Physical Energy Trade
             *
             */
            obj["CPT"] = base.parse_element (/<cim:CleanTradeProductType.CPT>([\s\S]*?)<\/cim:CleanTradeProductType.CPT>/g, sub, context, true);
            /**
             * Regulation Up Trade
             *
             */
            obj["RUT"] = base.parse_element (/<cim:CleanTradeProductType.RUT>([\s\S]*?)<\/cim:CleanTradeProductType.RUT>/g, sub, context, true);
            /**
             * Regulation Down Trade
             *
             */
            obj["RDT"] = base.parse_element (/<cim:CleanTradeProductType.RDT>([\s\S]*?)<\/cim:CleanTradeProductType.RDT>/g, sub, context, true);
            /**
             * Spinning Reserve Trade
             *
             */
            obj["SRT"] = base.parse_element (/<cim:CleanTradeProductType.SRT>([\s\S]*?)<\/cim:CleanTradeProductType.SRT>/g, sub, context, true);
            /**
             * Non-Spinning Reserve Trade
             *
             */
            obj["NRT"] = base.parse_element (/<cim:CleanTradeProductType.NRT>([\s\S]*?)<\/cim:CleanTradeProductType.NRT>/g, sub, context, true);
            bucket = context.parsed.CleanTradeProductType;
            if (null == bucket)
                context.parsed.CleanTradeProductType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_OASISIntervalType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OASISIntervalType";
            obj["BEGINNING"] = base.parse_element (/<cim:OASISIntervalType.BEGINNING>([\s\S]*?)<\/cim:OASISIntervalType.BEGINNING>/g, sub, context, true);
            obj["ENDING"] = base.parse_element (/<cim:OASISIntervalType.ENDING>([\s\S]*?)<\/cim:OASISIntervalType.ENDING>/g, sub, context, true);
            bucket = context.parsed.OASISIntervalType;
            if (null == bucket)
                context.parsed.OASISIntervalType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * market statement document type
         *
         */
        function parse_MarketStatementDocType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketStatementDocType";
            obj["CREDIT"] = base.parse_element (/<cim:MarketStatementDocType.CREDIT>([\s\S]*?)<\/cim:MarketStatementDocType.CREDIT>/g, sub, context, true);
            obj["MARKET_INITIAL"] = base.parse_element (/<cim:MarketStatementDocType.MARKET_INITIAL>([\s\S]*?)<\/cim:MarketStatementDocType.MARKET_INITIAL>/g, sub, context, true);
            obj["MARKET_RECALC"] = base.parse_element (/<cim:MarketStatementDocType.MARKET_RECALC>([\s\S]*?)<\/cim:MarketStatementDocType.MARKET_RECALC>/g, sub, context, true);
            bucket = context.parsed.MarketStatementDocType;
            if (null == bucket)
                context.parsed.MarketStatementDocType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

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
        function parse_MeasurementTypeEMS (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MeasurementTypeEMS";
            obj["PF"] = base.parse_element (/<cim:MeasurementTypeEMS.PF>([\s\S]*?)<\/cim:MeasurementTypeEMS.PF>/g, sub, context, true);
            obj["PIL"] = base.parse_element (/<cim:MeasurementTypeEMS.PIL>([\s\S]*?)<\/cim:MeasurementTypeEMS.PIL>/g, sub, context, true);
            obj["PIAL"] = base.parse_element (/<cim:MeasurementTypeEMS.PIAL>([\s\S]*?)<\/cim:MeasurementTypeEMS.PIAL>/g, sub, context, true);
            obj["PIML"] = base.parse_element (/<cim:MeasurementTypeEMS.PIML>([\s\S]*?)<\/cim:MeasurementTypeEMS.PIML>/g, sub, context, true);
            obj["POL"] = base.parse_element (/<cim:MeasurementTypeEMS.POL>([\s\S]*?)<\/cim:MeasurementTypeEMS.POL>/g, sub, context, true);
            obj["POAL"] = base.parse_element (/<cim:MeasurementTypeEMS.POAL>([\s\S]*?)<\/cim:MeasurementTypeEMS.POAL>/g, sub, context, true);
            obj["OARL"] = base.parse_element (/<cim:MeasurementTypeEMS.OARL>([\s\S]*?)<\/cim:MeasurementTypeEMS.OARL>/g, sub, context, true);
            obj["GO"] = base.parse_element (/<cim:MeasurementTypeEMS.GO>([\s\S]*?)<\/cim:MeasurementTypeEMS.GO>/g, sub, context, true);
            obj["GMOL"] = base.parse_element (/<cim:MeasurementTypeEMS.GMOL>([\s\S]*?)<\/cim:MeasurementTypeEMS.GMOL>/g, sub, context, true);
            obj["GNOL"] = base.parse_element (/<cim:MeasurementTypeEMS.GNOL>([\s\S]*?)<\/cim:MeasurementTypeEMS.GNOL>/g, sub, context, true);
            obj["GR"] = base.parse_element (/<cim:MeasurementTypeEMS.GR>([\s\S]*?)<\/cim:MeasurementTypeEMS.GR>/g, sub, context, true);
            obj["GS"] = base.parse_element (/<cim:MeasurementTypeEMS.GS>([\s\S]*?)<\/cim:MeasurementTypeEMS.GS>/g, sub, context, true);
            obj["PP"] = base.parse_element (/<cim:MeasurementTypeEMS.PP>([\s\S]*?)<\/cim:MeasurementTypeEMS.PP>/g, sub, context, true);
            obj["SL"] = base.parse_element (/<cim:MeasurementTypeEMS.SL>([\s\S]*?)<\/cim:MeasurementTypeEMS.SL>/g, sub, context, true);
            obj["ACE"] = base.parse_element (/<cim:MeasurementTypeEMS.ACE>([\s\S]*?)<\/cim:MeasurementTypeEMS.ACE>/g, sub, context, true);
            obj["INADV"] = base.parse_element (/<cim:MeasurementTypeEMS.INADV>([\s\S]*?)<\/cim:MeasurementTypeEMS.INADV>/g, sub, context, true);
            bucket = context.parsed.MeasurementTypeEMS;
            if (null == bucket)
                context.parsed.MeasurementTypeEMS = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_ResourceCertificationType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ResourceCertificationType";
            /**
             * Generic Type
             *
             */
            obj["GT"] = base.parse_element (/<cim:ResourceCertificationType.GT>([\s\S]*?)<\/cim:ResourceCertificationType.GT>/g, sub, context, true);
            /**
             * Regulating
             *
             */
            obj["RG"] = base.parse_element (/<cim:ResourceCertificationType.RG>([\s\S]*?)<\/cim:ResourceCertificationType.RG>/g, sub, context, true);
            /**
             * Spinning Reserve
             *
             */
            obj["SR"] = base.parse_element (/<cim:ResourceCertificationType.SR>([\s\S]*?)<\/cim:ResourceCertificationType.SR>/g, sub, context, true);
            /**
             * Generic
             * Regulation
             * Spinning
             * Non-spinning
             *
             * Intermittent Resource
             *
             */
            obj["NR"] = base.parse_element (/<cim:ResourceCertificationType.NR>([\s\S]*?)<\/cim:ResourceCertificationType.NR>/g, sub, context, true);
            /**
             * Intermittent Resource
             *
             */
            obj["IR"] = base.parse_element (/<cim:ResourceCertificationType.IR>([\s\S]*?)<\/cim:ResourceCertificationType.IR>/g, sub, context, true);
            bucket = context.parsed.ResourceCertificationType;
            if (null == bucket)
                context.parsed.ResourceCertificationType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_SelfSchedTypeRawBid (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SelfSchedTypeRawBid";
            obj["PT"] = base.parse_element (/<cim:SelfSchedTypeRawBid.PT>([\s\S]*?)<\/cim:SelfSchedTypeRawBid.PT>/g, sub, context, true);
            obj["ETC"] = base.parse_element (/<cim:SelfSchedTypeRawBid.ETC>([\s\S]*?)<\/cim:SelfSchedTypeRawBid.ETC>/g, sub, context, true);
            obj["TOR"] = base.parse_element (/<cim:SelfSchedTypeRawBid.TOR>([\s\S]*?)<\/cim:SelfSchedTypeRawBid.TOR>/g, sub, context, true);
            obj["RMT"] = base.parse_element (/<cim:SelfSchedTypeRawBid.RMT>([\s\S]*?)<\/cim:SelfSchedTypeRawBid.RMT>/g, sub, context, true);
            /**
             * Self-Provision
             *
             */
            obj["SP"] = base.parse_element (/<cim:SelfSchedTypeRawBid.SP>([\s\S]*?)<\/cim:SelfSchedTypeRawBid.SP>/g, sub, context, true);
            /**
             * RA Obligations
             *
             */
            obj["RA"] = base.parse_element (/<cim:SelfSchedTypeRawBid.RA>([\s\S]*?)<\/cim:SelfSchedTypeRawBid.RA>/g, sub, context, true);
            obj["BAS"] = base.parse_element (/<cim:SelfSchedTypeRawBid.BAS>([\s\S]*?)<\/cim:SelfSchedTypeRawBid.BAS>/g, sub, context, true);
            obj["LOF"] = base.parse_element (/<cim:SelfSchedTypeRawBid.LOF>([\s\S]*?)<\/cim:SelfSchedTypeRawBid.LOF>/g, sub, context, true);
            obj["WHL"] = base.parse_element (/<cim:SelfSchedTypeRawBid.WHL>([\s\S]*?)<\/cim:SelfSchedTypeRawBid.WHL>/g, sub, context, true);
            obj["LPT"] = base.parse_element (/<cim:SelfSchedTypeRawBid.LPT>([\s\S]*?)<\/cim:SelfSchedTypeRawBid.LPT>/g, sub, context, true);
            bucket = context.parsed.SelfSchedTypeRawBid;
            if (null == bucket)
                context.parsed.SelfSchedTypeRawBid = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_DispatchTransactionType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "DispatchTransactionType";
            obj["Purchase"] = base.parse_element (/<cim:DispatchTransactionType.Purchase>([\s\S]*?)<\/cim:DispatchTransactionType.Purchase>/g, sub, context, true);
            obj["Sale"] = base.parse_element (/<cim:DispatchTransactionType.Sale>([\s\S]*?)<\/cim:DispatchTransactionType.Sale>/g, sub, context, true);
            bucket = context.parsed.DispatchTransactionType;
            if (null == bucket)
                context.parsed.DispatchTransactionType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Self Schedule Types applicable to Mitigated Bid
         *
         */
        function parse_SelfScheduleTypeMB (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SelfScheduleTypeMB";
            obj["RMR"] = base.parse_element (/<cim:SelfScheduleTypeMB.RMR>([\s\S]*?)<\/cim:SelfScheduleTypeMB.RMR>/g, sub, context, true);
            bucket = context.parsed.SelfScheduleTypeMB;
            if (null == bucket)
                context.parsed.SelfScheduleTypeMB = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Y - indicates a resource is capable of setting the Markte Clearing Price
         * S - indicates the resource must submit bids for energy at \$ 0
         *
         * N - indicates the resource does not have to submit bids for energy at \$ 0
         *
         */
        function parse_PriceSetFlag (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PriceSetFlag";
            obj["Y"] = base.parse_element (/<cim:PriceSetFlag.Y>([\s\S]*?)<\/cim:PriceSetFlag.Y>/g, sub, context, true);
            obj["S"] = base.parse_element (/<cim:PriceSetFlag.S>([\s\S]*?)<\/cim:PriceSetFlag.S>/g, sub, context, true);
            obj["N"] = base.parse_element (/<cim:PriceSetFlag.N>([\s\S]*?)<\/cim:PriceSetFlag.N>/g, sub, context, true);
            bucket = context.parsed.PriceSetFlag;
            if (null == bucket)
                context.parsed.PriceSetFlag = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_LFCResourceType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "LFCResourceType";
            obj["GEN"] = base.parse_element (/<cim:LFCResourceType.GEN>([\s\S]*?)<\/cim:LFCResourceType.GEN>/g, sub, context, true);
            obj["PUMP"] = base.parse_element (/<cim:LFCResourceType.PUMP>([\s\S]*?)<\/cim:LFCResourceType.PUMP>/g, sub, context, true);
            bucket = context.parsed.LFCResourceType;
            if (null == bucket)
                context.parsed.LFCResourceType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_UOMType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "UOMType";
            obj["MW"] = base.parse_element (/<cim:UOMType.MW>([\s\S]*?)<\/cim:UOMType.MW>/g, sub, context, true);
            obj["MWh"] = base.parse_element (/<cim:UOMType.MWh>([\s\S]*?)<\/cim:UOMType.MWh>/g, sub, context, true);
            obj["US$"] = base.parse_element (/<cim:UOMType.US$>([\s\S]*?)<\/cim:UOMType.US$>/g, sub, context, true);
            obj["%"] = base.parse_element (/<cim:UOMType.%>([\s\S]*?)<\/cim:UOMType.%>/g, sub, context, true);
            obj["INTEGER"] = base.parse_element (/<cim:UOMType.INTEGER>([\s\S]*?)<\/cim:UOMType.INTEGER>/g, sub, context, true);
            obj["FLAG"] = base.parse_element (/<cim:UOMType.FLAG>([\s\S]*?)<\/cim:UOMType.FLAG>/g, sub, context, true);
            obj["$/mmBTU"] = base.parse_element (/<cim:UOMType.$\/mmBTU>([\s\S]*?)<\/cim:UOMType.$\/mmBTU>/g, sub, context, true);
            obj["$/lb"] = base.parse_element (/<cim:UOMType.$\/lb>([\s\S]*?)<\/cim:UOMType.$\/lb>/g, sub, context, true);
            obj["US$/MW"] = base.parse_element (/<cim:UOMType.US$\/MW>([\s\S]*?)<\/cim:UOMType.US$\/MW>/g, sub, context, true);
            obj["US$/MWh"] = base.parse_element (/<cim:UOMType.US$\/MWh>([\s\S]*?)<\/cim:UOMType.US$\/MWh>/g, sub, context, true);
            obj["FACTOR"] = base.parse_element (/<cim:UOMType.FACTOR>([\s\S]*?)<\/cim:UOMType.FACTOR>/g, sub, context, true);
            bucket = context.parsed.UOMType;
            if (null == bucket)
                context.parsed.UOMType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * zone type
         *
         */
        function parse_ZoneType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ZoneType";
            /**
             * load zone
             *
             */
            obj["LOADZONE"] = base.parse_element (/<cim:ZoneType.LOADZONE>([\s\S]*?)<\/cim:ZoneType.LOADZONE>/g, sub, context, true);
            /**
             * trading hub
             *
             */
            obj["TRADINGHUB"] = base.parse_element (/<cim:ZoneType.TRADINGHUB>([\s\S]*?)<\/cim:ZoneType.TRADINGHUB>/g, sub, context, true);
            /**
             * RUC zone
             *
             */
            obj["RUCZONE"] = base.parse_element (/<cim:ZoneType.RUCZONE>([\s\S]*?)<\/cim:ZoneType.RUCZONE>/g, sub, context, true);
            /**
             * ancillary service region
             *
             */
            obj["ASREGION"] = base.parse_element (/<cim:ZoneType.ASREGION>([\s\S]*?)<\/cim:ZoneType.ASREGION>/g, sub, context, true);
            /**
             * designated congestion area
             *
             */
            obj["DCA"] = base.parse_element (/<cim:ZoneType.DCA>([\s\S]*?)<\/cim:ZoneType.DCA>/g, sub, context, true);
            bucket = context.parsed.ZoneType;
            if (null == bucket)
                context.parsed.ZoneType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_JobScheduleType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "JobScheduleType";
            obj["CRITICAL"] = base.parse_element (/<cim:JobScheduleType.CRITICAL>([\s\S]*?)<\/cim:JobScheduleType.CRITICAL>/g, sub, context, true);
            obj["NONCRITICAL"] = base.parse_element (/<cim:JobScheduleType.NONCRITICAL>([\s\S]*?)<\/cim:JobScheduleType.NONCRITICAL>/g, sub, context, true);
            bucket = context.parsed.JobScheduleType;
            if (null == bucket)
                context.parsed.JobScheduleType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_DispatchAcceptStatus (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "DispatchAcceptStatus";
            obj["NON_RESPONSE"] = base.parse_element (/<cim:DispatchAcceptStatus.NON_RESPONSE>([\s\S]*?)<\/cim:DispatchAcceptStatus.NON_RESPONSE>/g, sub, context, true);
            obj["OK"] = base.parse_element (/<cim:DispatchAcceptStatus.OK>([\s\S]*?)<\/cim:DispatchAcceptStatus.OK>/g, sub, context, true);
            obj["CANNOT"] = base.parse_element (/<cim:DispatchAcceptStatus.CANNOT>([\s\S]*?)<\/cim:DispatchAcceptStatus.CANNOT>/g, sub, context, true);
            obj["ACCEPT"] = base.parse_element (/<cim:DispatchAcceptStatus.ACCEPT>([\s\S]*?)<\/cim:DispatchAcceptStatus.ACCEPT>/g, sub, context, true);
            obj["DECLINE"] = base.parse_element (/<cim:DispatchAcceptStatus.DECLINE>([\s\S]*?)<\/cim:DispatchAcceptStatus.DECLINE>/g, sub, context, true);
            obj["PARTIAL"] = base.parse_element (/<cim:DispatchAcceptStatus.PARTIAL>([\s\S]*?)<\/cim:DispatchAcceptStatus.PARTIAL>/g, sub, context, true);
            bucket = context.parsed.DispatchAcceptStatus;
            if (null == bucket)
                context.parsed.DispatchAcceptStatus = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_MktSubClassType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MktSubClassType";
            obj["Forecasted_UDC_Direct_Access_Load"] = base.parse_element (/<cim:MktSubClassType.Forecasted_UDC_Direct_Access_Load>([\s\S]*?)<\/cim:MktSubClassType.Forecasted_UDC_Direct_Access_Load>/g, sub, context, true);
            obj["Day_Ahead_RMR"] = base.parse_element (/<cim:MktSubClassType.Day_Ahead_RMR>([\s\S]*?)<\/cim:MktSubClassType.Day_Ahead_RMR>/g, sub, context, true);
            obj["Ten_Min_Expost_Market_Info"] = base.parse_element (/<cim:MktSubClassType.Ten_Min_Expost_Market_Info>([\s\S]*?)<\/cim:MktSubClassType.Ten_Min_Expost_Market_Info>/g, sub, context, true);
            obj["Day_Ahead_Interim_Market_Info"] = base.parse_element (/<cim:MktSubClassType.Day_Ahead_Interim_Market_Info>([\s\S]*?)<\/cim:MktSubClassType.Day_Ahead_Interim_Market_Info>/g, sub, context, true);
            obj["Day_Ahead_Final_Market_Info"] = base.parse_element (/<cim:MktSubClassType.Day_Ahead_Final_Market_Info>([\s\S]*?)<\/cim:MktSubClassType.Day_Ahead_Final_Market_Info>/g, sub, context, true);
            obj["TTC/ATC_Forecast_Information"] = base.parse_element (/<cim:MktSubClassType.TTC\/ATC_Forecast_Information>([\s\S]*?)<\/cim:MktSubClassType.TTC\/ATC_Forecast_Information>/g, sub, context, true);
            obj["TTC/ATC_Hourly_Forecast"] = base.parse_element (/<cim:MktSubClassType.TTC\/ATC_Hourly_Forecast>([\s\S]*?)<\/cim:MktSubClassType.TTC\/ATC_Hourly_Forecast>/g, sub, context, true);
            obj["Branch_Group_Derates"] = base.parse_element (/<cim:MktSubClassType.Branch_Group_Derates>([\s\S]*?)<\/cim:MktSubClassType.Branch_Group_Derates>/g, sub, context, true);
            obj["Hour_Ahead_Market_Info"] = base.parse_element (/<cim:MktSubClassType.Hour_Ahead_Market_Info>([\s\S]*?)<\/cim:MktSubClassType.Hour_Ahead_Market_Info>/g, sub, context, true);
            obj["Hourly_Expost_Market_Info"] = base.parse_element (/<cim:MktSubClassType.Hourly_Expost_Market_Info>([\s\S]*?)<\/cim:MktSubClassType.Hourly_Expost_Market_Info>/g, sub, context, true);
            obj["Public_Bid_Data"] = base.parse_element (/<cim:MktSubClassType.Public_Bid_Data>([\s\S]*?)<\/cim:MktSubClassType.Public_Bid_Data>/g, sub, context, true);
            obj["Day_Ahead_Forecast_Information"] = base.parse_element (/<cim:MktSubClassType.Day_Ahead_Forecast_Information>([\s\S]*?)<\/cim:MktSubClassType.Day_Ahead_Forecast_Information>/g, sub, context, true);
            bucket = context.parsed.MktSubClassType;
            if (null == bucket)
                context.parsed.MktSubClassType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_SpinningEventType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SpinningEventType";
            obj["RZ"] = base.parse_element (/<cim:SpinningEventType.RZ>([\s\S]*?)<\/cim:SpinningEventType.RZ>/g, sub, context, true);
            obj["AA"] = base.parse_element (/<cim:SpinningEventType.AA>([\s\S]*?)<\/cim:SpinningEventType.AA>/g, sub, context, true);
            obj["CA"] = base.parse_element (/<cim:SpinningEventType.CA>([\s\S]*?)<\/cim:SpinningEventType.CA>/g, sub, context, true);
            bucket = context.parsed.SpinningEventType;
            if (null == bucket)
                context.parsed.SpinningEventType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_BidPriceCapType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "BidPriceCapType";
            obj["ENERGY"] = base.parse_element (/<cim:BidPriceCapType.ENERGY>([\s\S]*?)<\/cim:BidPriceCapType.ENERGY>/g, sub, context, true);
            obj["AS"] = base.parse_element (/<cim:BidPriceCapType.AS>([\s\S]*?)<\/cim:BidPriceCapType.AS>/g, sub, context, true);
            obj["RUC"] = base.parse_element (/<cim:BidPriceCapType.RUC>([\s\S]*?)<\/cim:BidPriceCapType.RUC>/g, sub, context, true);
            bucket = context.parsed.BidPriceCapType;
            if (null == bucket)
                context.parsed.BidPriceCapType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * MIN_CONSTRAINT
         * MAX_CONSTRAINT
         *
         * FIXED_CONSTRAINT
         *
         */
        function parse_ADSInstructionTypeOOS (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ADSInstructionTypeOOS";
            obj["MIN_CONSTRAINT"] = base.parse_element (/<cim:ADSInstructionTypeOOS.MIN_CONSTRAINT>([\s\S]*?)<\/cim:ADSInstructionTypeOOS.MIN_CONSTRAINT>/g, sub, context, true);
            obj["MAX_CONSTRAINT"] = base.parse_element (/<cim:ADSInstructionTypeOOS.MAX_CONSTRAINT>([\s\S]*?)<\/cim:ADSInstructionTypeOOS.MAX_CONSTRAINT>/g, sub, context, true);
            obj["FIXED_CONSTRAINT"] = base.parse_element (/<cim:ADSInstructionTypeOOS.FIXED_CONSTRAINT>([\s\S]*?)<\/cim:ADSInstructionTypeOOS.FIXED_CONSTRAINT>/g, sub, context, true);
            bucket = context.parsed.ADSInstructionTypeOOS;
            if (null == bucket)
                context.parsed.ADSInstructionTypeOOS = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_AlarmDisplayType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AlarmDisplayType";
            obj["Disappear"] = base.parse_element (/<cim:AlarmDisplayType.Disappear>([\s\S]*?)<\/cim:AlarmDisplayType.Disappear>/g, sub, context, true);
            obj["Appear"] = base.parse_element (/<cim:AlarmDisplayType.Appear>([\s\S]*?)<\/cim:AlarmDisplayType.Appear>/g, sub, context, true);
            obj["Fleeting"] = base.parse_element (/<cim:AlarmDisplayType.Fleeting>([\s\S]*?)<\/cim:AlarmDisplayType.Fleeting>/g, sub, context, true);
            bucket = context.parsed.AlarmDisplayType;
            if (null == bucket)
                context.parsed.AlarmDisplayType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_OASISMeasType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OASISMeasType";
            obj["MW"] = base.parse_element (/<cim:OASISMeasType.MW>([\s\S]*?)<\/cim:OASISMeasType.MW>/g, sub, context, true);
            obj["MWh"] = base.parse_element (/<cim:OASISMeasType.MWh>([\s\S]*?)<\/cim:OASISMeasType.MWh>/g, sub, context, true);
            obj["US$"] = base.parse_element (/<cim:OASISMeasType.US$>([\s\S]*?)<\/cim:OASISMeasType.US$>/g, sub, context, true);
            obj["%"] = base.parse_element (/<cim:OASISMeasType.%>([\s\S]*?)<\/cim:OASISMeasType.%>/g, sub, context, true);
            obj["INTEGER"] = base.parse_element (/<cim:OASISMeasType.INTEGER>([\s\S]*?)<\/cim:OASISMeasType.INTEGER>/g, sub, context, true);
            obj["FLAG"] = base.parse_element (/<cim:OASISMeasType.FLAG>([\s\S]*?)<\/cim:OASISMeasType.FLAG>/g, sub, context, true);
            obj["US$/MW"] = base.parse_element (/<cim:OASISMeasType.US$\/MW>([\s\S]*?)<\/cim:OASISMeasType.US$\/MW>/g, sub, context, true);
            obj["US$/MWh"] = base.parse_element (/<cim:OASISMeasType.US$\/MWh>([\s\S]*?)<\/cim:OASISMeasType.US$\/MWh>/g, sub, context, true);
            obj["FACTOR"] = base.parse_element (/<cim:OASISMeasType.FACTOR>([\s\S]*?)<\/cim:OASISMeasType.FACTOR>/g, sub, context, true);
            bucket = context.parsed.OASISMeasType;
            if (null == bucket)
                context.parsed.OASISMeasType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_ADSInstructionTypeCommitment (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ADSInstructionTypeCommitment";
            obj["START_UP"] = base.parse_element (/<cim:ADSInstructionTypeCommitment.START_UP>([\s\S]*?)<\/cim:ADSInstructionTypeCommitment.START_UP>/g, sub, context, true);
            obj["SHUT_DOWN"] = base.parse_element (/<cim:ADSInstructionTypeCommitment.SHUT_DOWN>([\s\S]*?)<\/cim:ADSInstructionTypeCommitment.SHUT_DOWN>/g, sub, context, true);
            bucket = context.parsed.ADSInstructionTypeCommitment;
            if (null == bucket)
                context.parsed.ADSInstructionTypeCommitment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_OASISReportType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OASISReportType";
            obj["AS_DA_RESULT"] = base.parse_element (/<cim:OASISReportType.AS_DA_RESULT>([\s\S]*?)<\/cim:OASISReportType.AS_DA_RESULT>/g, sub, context, true);
            obj["AS_OP_RSRV"] = base.parse_element (/<cim:OASISReportType.AS_OP_RSRV>([\s\S]*?)<\/cim:OASISReportType.AS_OP_RSRV>/g, sub, context, true);
            obj["AS_REQ"] = base.parse_element (/<cim:OASISReportType.AS_REQ>([\s\S]*?)<\/cim:OASISReportType.AS_REQ>/g, sub, context, true);
            obj["AS_RTM_RESULT"] = base.parse_element (/<cim:OASISReportType.AS_RTM_RESULT>([\s\S]*?)<\/cim:OASISReportType.AS_RTM_RESULT>/g, sub, context, true);
            obj["BIDS_PUBLIC"] = base.parse_element (/<cim:OASISReportType.BIDS_PUBLIC>([\s\S]*?)<\/cim:OASISReportType.BIDS_PUBLIC>/g, sub, context, true);
            obj["CMMT_RA_MLC"] = base.parse_element (/<cim:OASISReportType.CMMT_RA_MLC>([\s\S]*?)<\/cim:OASISReportType.CMMT_RA_MLC>/g, sub, context, true);
            obj["CMMT_RMR"] = base.parse_element (/<cim:OASISReportType.CMMT_RMR>([\s\S]*?)<\/cim:OASISReportType.CMMT_RMR>/g, sub, context, true);
            obj["CRR_CLEARING"] = base.parse_element (/<cim:OASISReportType.CRR_CLEARING>([\s\S]*?)<\/cim:OASISReportType.CRR_CLEARING>/g, sub, context, true);
            obj["CRR_INVENTORY"] = base.parse_element (/<cim:OASISReportType.CRR_INVENTORY>([\s\S]*?)<\/cim:OASISReportType.CRR_INVENTORY>/g, sub, context, true);
            obj["ENE_EA"] = base.parse_element (/<cim:OASISReportType.ENE_EA>([\s\S]*?)<\/cim:OASISReportType.ENE_EA>/g, sub, context, true);
            obj["ENE_HASP"] = base.parse_element (/<cim:OASISReportType.ENE_HASP>([\s\S]*?)<\/cim:OASISReportType.ENE_HASP>/g, sub, context, true);
            obj["ENE_IFM"] = base.parse_element (/<cim:OASISReportType.ENE_IFM>([\s\S]*?)<\/cim:OASISReportType.ENE_IFM>/g, sub, context, true);
            obj["ENE_MPM"] = base.parse_element (/<cim:OASISReportType.ENE_MPM>([\s\S]*?)<\/cim:OASISReportType.ENE_MPM>/g, sub, context, true);
            obj["ENE_RTM"] = base.parse_element (/<cim:OASISReportType.ENE_RTM>([\s\S]*?)<\/cim:OASISReportType.ENE_RTM>/g, sub, context, true);
            obj["ENE_RUC"] = base.parse_element (/<cim:OASISReportType.ENE_RUC>([\s\S]*?)<\/cim:OASISReportType.ENE_RUC>/g, sub, context, true);
            obj["LOSS_DA_HASP"] = base.parse_element (/<cim:OASISReportType.LOSS_DA_HASP>([\s\S]*?)<\/cim:OASISReportType.LOSS_DA_HASP>/g, sub, context, true);
            obj["LOSS_RTM"] = base.parse_element (/<cim:OASISReportType.LOSS_RTM>([\s\S]*?)<\/cim:OASISReportType.LOSS_RTM>/g, sub, context, true);
            obj["PRC_AS"] = base.parse_element (/<cim:OASISReportType.PRC_AS>([\s\S]*?)<\/cim:OASISReportType.PRC_AS>/g, sub, context, true);
            obj["PRC_FUEL"] = base.parse_element (/<cim:OASISReportType.PRC_FUEL>([\s\S]*?)<\/cim:OASISReportType.PRC_FUEL>/g, sub, context, true);
            obj["PRC_HRLY_LMP"] = base.parse_element (/<cim:OASISReportType.PRC_HRLY_LMP>([\s\S]*?)<\/cim:OASISReportType.PRC_HRLY_LMP>/g, sub, context, true);
            obj["PRC_INTVL_LMP"] = base.parse_element (/<cim:OASISReportType.PRC_INTVL_LMP>([\s\S]*?)<\/cim:OASISReportType.PRC_INTVL_LMP>/g, sub, context, true);
            obj["PRC_CNSTR"] = base.parse_element (/<cim:OASISReportType.PRC_CNSTR>([\s\S]*?)<\/cim:OASISReportType.PRC_CNSTR>/g, sub, context, true);
            obj["SLD_FCST"] = base.parse_element (/<cim:OASISReportType.SLD_FCST>([\s\S]*?)<\/cim:OASISReportType.SLD_FCST>/g, sub, context, true);
            obj["SLD_FCST_PEAK"] = base.parse_element (/<cim:OASISReportType.SLD_FCST_PEAK>([\s\S]*?)<\/cim:OASISReportType.SLD_FCST_PEAK>/g, sub, context, true);
            obj["SLD_MKTS"] = base.parse_element (/<cim:OASISReportType.SLD_MKTS>([\s\S]*?)<\/cim:OASISReportType.SLD_MKTS>/g, sub, context, true);
            obj["TRNS_ATC"] = base.parse_element (/<cim:OASISReportType.TRNS_ATC>([\s\S]*?)<\/cim:OASISReportType.TRNS_ATC>/g, sub, context, true);
            obj["TRNS_OUTAGE"] = base.parse_element (/<cim:OASISReportType.TRNS_OUTAGE>([\s\S]*?)<\/cim:OASISReportType.TRNS_OUTAGE>/g, sub, context, true);
            obj["TRNS_USAGE"] = base.parse_element (/<cim:OASISReportType.TRNS_USAGE>([\s\S]*?)<\/cim:OASISReportType.TRNS_USAGE>/g, sub, context, true);
            bucket = context.parsed.OASISReportType;
            if (null == bucket)
                context.parsed.OASISReportType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_SourceSinkFlag (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SourceSinkFlag";
            obj["CSNK"] = base.parse_element (/<cim:SourceSinkFlag.CSNK>([\s\S]*?)<\/cim:SourceSinkFlag.CSNK>/g, sub, context, true);
            obj["CSRC"] = base.parse_element (/<cim:SourceSinkFlag.CSRC>([\s\S]*?)<\/cim:SourceSinkFlag.CSRC>/g, sub, context, true);
            bucket = context.parsed.SourceSinkFlag;
            if (null == bucket)
                context.parsed.SourceSinkFlag = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * MW
         *
         * FLAG
         *
         */
        function parse_UnitTypeEMS (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "UnitTypeEMS";
            obj["MW"] = base.parse_element (/<cim:UnitTypeEMS.MW>([\s\S]*?)<\/cim:UnitTypeEMS.MW>/g, sub, context, true);
            obj["FLAG"] = base.parse_element (/<cim:UnitTypeEMS.FLAG>([\s\S]*?)<\/cim:UnitTypeEMS.FLAG>/g, sub, context, true);
            bucket = context.parsed.UnitTypeEMS;
            if (null == bucket)
                context.parsed.UnitTypeEMS = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * RU - Regulation Up
         * RD - Regulation Down
         * SR - Spin Reserve
         * NR - Nonspin Reserve
         *
         * AS - Upward Ancillary Service
         *
         */
        function parse_MarketProductTypeAsReq (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketProductTypeAsReq";
            /**
             * regulation up
             *
             */
            obj["RU"] = base.parse_element (/<cim:MarketProductTypeAsReq.RU>([\s\S]*?)<\/cim:MarketProductTypeAsReq.RU>/g, sub, context, true);
            /**
             * regulation down
             *
             */
            obj["RD"] = base.parse_element (/<cim:MarketProductTypeAsReq.RD>([\s\S]*?)<\/cim:MarketProductTypeAsReq.RD>/g, sub, context, true);
            /**
             * spinning reserve
             *
             */
            obj["SR"] = base.parse_element (/<cim:MarketProductTypeAsReq.SR>([\s\S]*?)<\/cim:MarketProductTypeAsReq.SR>/g, sub, context, true);
            /**
             * non spinning reserve
             *
             */
            obj["NR"] = base.parse_element (/<cim:MarketProductTypeAsReq.NR>([\s\S]*?)<\/cim:MarketProductTypeAsReq.NR>/g, sub, context, true);
            obj["AS"] = base.parse_element (/<cim:MarketProductTypeAsReq.AS>([\s\S]*?)<\/cim:MarketProductTypeAsReq.AS>/g, sub, context, true);
            bucket = context.parsed.MarketProductTypeAsReq;
            if (null == bucket)
                context.parsed.MarketProductTypeAsReq = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * ancillary serivce types
         *
         */
        function parse_AncillaryCommodityType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AncillaryCommodityType";
            /**
             * regulation up
             *
             */
            obj["REGUP"] = base.parse_element (/<cim:AncillaryCommodityType.REGUP>([\s\S]*?)<\/cim:AncillaryCommodityType.REGUP>/g, sub, context, true);
            /**
             * regulation down
             *
             */
            obj["REGDN"] = base.parse_element (/<cim:AncillaryCommodityType.REGDN>([\s\S]*?)<\/cim:AncillaryCommodityType.REGDN>/g, sub, context, true);
            /**
             * spinning reserve
             *
             */
            obj["SPIN"] = base.parse_element (/<cim:AncillaryCommodityType.SPIN>([\s\S]*?)<\/cim:AncillaryCommodityType.SPIN>/g, sub, context, true);
            /**
             * non spinning reserve
             *
             */
            obj["NONSPIN"] = base.parse_element (/<cim:AncillaryCommodityType.NONSPIN>([\s\S]*?)<\/cim:AncillaryCommodityType.NONSPIN>/g, sub, context, true);
            bucket = context.parsed.AncillaryCommodityType;
            if (null == bucket)
                context.parsed.AncillaryCommodityType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_OASISErrDescription (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OASISErrDescription";
            obj["No data returned for the specified selection"] = base.parse_element (/<cim:OASISErrDescription.No data returned for the specified selection>([\s\S]*?)<\/cim:OASISErrDescription.No data returned for the specified selection>/g, sub, context, true);
            obj["Invalid date format, please use valid date format"] = base.parse_element (/<cim:OASISErrDescription.Invalid date format, please use valid date format>([\s\S]*?)<\/cim:OASISErrDescription.Invalid date format, please use valid date format>/g, sub, context, true);
            obj["Timed out waiting for query response"] = base.parse_element (/<cim:OASISErrDescription.Timed out waiting for query response>([\s\S]*?)<\/cim:OASISErrDescription.Timed out waiting for query response>/g, sub, context, true);
            obj["Data can be requested for period of 31 days only"] = base.parse_element (/<cim:OASISErrDescription.Data can be requested for period of 31 days only>([\s\S]*?)<\/cim:OASISErrDescription.Data can be requested for period of 31 days only>/g, sub, context, true);
            obj["Report name does not exit, please use valid report name"] = base.parse_element (/<cim:OASISErrDescription.Report name does not exit, please use valid report name>([\s\S]*?)<\/cim:OASISErrDescription.Report name does not exit, please use valid report name>/g, sub, context, true);
            obj["Validation exception during transformation of XML"] = base.parse_element (/<cim:OASISErrDescription.Validation exception during transformation of XML>([\s\S]*?)<\/cim:OASISErrDescription.Validation exception during transformation of XML>/g, sub, context, true);
            obj["Required file does not exist"] = base.parse_element (/<cim:OASISErrDescription.Required file does not exist>([\s\S]*?)<\/cim:OASISErrDescription.Required file does not exist>/g, sub, context, true);
            obj["Out of memory exception"] = base.parse_element (/<cim:OASISErrDescription.Out of memory exception>([\s\S]*?)<\/cim:OASISErrDescription.Out of memory exception>/g, sub, context, true);
            obj["Exceptions in reading and writing of XML files"] = base.parse_element (/<cim:OASISErrDescription.Exceptions in reading and writing of XML files>([\s\S]*?)<\/cim:OASISErrDescription.Exceptions in reading and writing of XML files>/g, sub, context, true);
            obj["System Error"] = base.parse_element (/<cim:OASISErrDescription.System Error>([\s\S]*?)<\/cim:OASISErrDescription.System Error>/g, sub, context, true);
            bucket = context.parsed.OASISErrDescription;
            if (null == bucket)
                context.parsed.OASISErrDescription = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_SpinningEventNameType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SpinningEventNameType";
            obj["EASTERN"] = base.parse_element (/<cim:SpinningEventNameType.EASTERN>([\s\S]*?)<\/cim:SpinningEventNameType.EASTERN>/g, sub, context, true);
            obj["RFC-SR"] = base.parse_element (/<cim:SpinningEventNameType.RFC-SR>([\s\S]*?)<\/cim:SpinningEventNameType.RFC-SR>/g, sub, context, true);
            obj["SOUTH-S"] = base.parse_element (/<cim:SpinningEventNameType.SOUTH-S>([\s\S]*?)<\/cim:SpinningEventNameType.SOUTH-S>/g, sub, context, true);
            obj["PJM"] = base.parse_element (/<cim:SpinningEventNameType.PJM>([\s\S]*?)<\/cim:SpinningEventNameType.PJM>/g, sub, context, true);
            bucket = context.parsed.SpinningEventNameType;
            if (null == bucket)
                context.parsed.SpinningEventNameType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_OASISMasterType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OASISMasterType";
            obj["ATL_PNODE"] = base.parse_element (/<cim:OASISMasterType.ATL_PNODE>([\s\S]*?)<\/cim:OASISMasterType.ATL_PNODE>/g, sub, context, true);
            obj["ATL_APNODE"] = base.parse_element (/<cim:OASISMasterType.ATL_APNODE>([\s\S]*?)<\/cim:OASISMasterType.ATL_APNODE>/g, sub, context, true);
            obj["ATL_LDF"] = base.parse_element (/<cim:OASISMasterType.ATL_LDF>([\s\S]*?)<\/cim:OASISMasterType.ATL_LDF>/g, sub, context, true);
            obj["ATL_LAP"] = base.parse_element (/<cim:OASISMasterType.ATL_LAP>([\s\S]*?)<\/cim:OASISMasterType.ATL_LAP>/g, sub, context, true);
            obj["ATL_RESOURCE"] = base.parse_element (/<cim:OASISMasterType.ATL_RESOURCE>([\s\S]*?)<\/cim:OASISMasterType.ATL_RESOURCE>/g, sub, context, true);
            obj["ATL_HUB"] = base.parse_element (/<cim:OASISMasterType.ATL_HUB>([\s\S]*?)<\/cim:OASISMasterType.ATL_HUB>/g, sub, context, true);
            obj["ATL_PNODE_MAP"] = base.parse_element (/<cim:OASISMasterType.ATL_PNODE_MAP>([\s\S]*?)<\/cim:OASISMasterType.ATL_PNODE_MAP>/g, sub, context, true);
            obj["ATL_AS_REGION"] = base.parse_element (/<cim:OASISMasterType.ATL_AS_REGION>([\s\S]*?)<\/cim:OASISMasterType.ATL_AS_REGION>/g, sub, context, true);
            obj["ATL_AS_REGION_MAP"] = base.parse_element (/<cim:OASISMasterType.ATL_AS_REGION_MAP>([\s\S]*?)<\/cim:OASISMasterType.ATL_AS_REGION_MAP>/g, sub, context, true);
            obj["ATL_RUC_ZONE"] = base.parse_element (/<cim:OASISMasterType.ATL_RUC_ZONE>([\s\S]*?)<\/cim:OASISMasterType.ATL_RUC_ZONE>/g, sub, context, true);
            obj["ATL_RUC_ZONE_MAP"] = base.parse_element (/<cim:OASISMasterType.ATL_RUC_ZONE_MAP>([\s\S]*?)<\/cim:OASISMasterType.ATL_RUC_ZONE_MAP>/g, sub, context, true);
            obj["ATL_TAC_AREA"] = base.parse_element (/<cim:OASISMasterType.ATL_TAC_AREA>([\s\S]*?)<\/cim:OASISMasterType.ATL_TAC_AREA>/g, sub, context, true);
            obj["ATL_TAC_AREA_MAP"] = base.parse_element (/<cim:OASISMasterType.ATL_TAC_AREA_MAP>([\s\S]*?)<\/cim:OASISMasterType.ATL_TAC_AREA_MAP>/g, sub, context, true);
            obj["ATL_TIEPOINT"] = base.parse_element (/<cim:OASISMasterType.ATL_TIEPOINT>([\s\S]*?)<\/cim:OASISMasterType.ATL_TIEPOINT>/g, sub, context, true);
            obj["ATL_TI"] = base.parse_element (/<cim:OASISMasterType.ATL_TI>([\s\S]*?)<\/cim:OASISMasterType.ATL_TI>/g, sub, context, true);
            obj["ATL_PUB"] = base.parse_element (/<cim:OASISMasterType.ATL_PUB>([\s\S]*?)<\/cim:OASISMasterType.ATL_PUB>/g, sub, context, true);
            obj["ATL_STAT"] = base.parse_element (/<cim:OASISMasterType.ATL_STAT>([\s\S]*?)<\/cim:OASISMasterType.ATL_STAT>/g, sub, context, true);
            obj["ATL_PUB_SCHED"] = base.parse_element (/<cim:OASISMasterType.ATL_PUB_SCHED>([\s\S]*?)<\/cim:OASISMasterType.ATL_PUB_SCHED>/g, sub, context, true);
            obj["ATL_XREF"] = base.parse_element (/<cim:OASISMasterType.ATL_XREF>([\s\S]*?)<\/cim:OASISMasterType.ATL_XREF>/g, sub, context, true);
            bucket = context.parsed.OASISMasterType;
            if (null == bucket)
                context.parsed.OASISMasterType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_OASISErrCode (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OASISErrCode";
            obj["1000"] = base.parse_element (/<cim:OASISErrCode.1000>([\s\S]*?)<\/cim:OASISErrCode.1000>/g, sub, context, true);
            obj["1001"] = base.parse_element (/<cim:OASISErrCode.1001>([\s\S]*?)<\/cim:OASISErrCode.1001>/g, sub, context, true);
            obj["1002"] = base.parse_element (/<cim:OASISErrCode.1002>([\s\S]*?)<\/cim:OASISErrCode.1002>/g, sub, context, true);
            obj["1003"] = base.parse_element (/<cim:OASISErrCode.1003>([\s\S]*?)<\/cim:OASISErrCode.1003>/g, sub, context, true);
            obj["1004"] = base.parse_element (/<cim:OASISErrCode.1004>([\s\S]*?)<\/cim:OASISErrCode.1004>/g, sub, context, true);
            obj["1005"] = base.parse_element (/<cim:OASISErrCode.1005>([\s\S]*?)<\/cim:OASISErrCode.1005>/g, sub, context, true);
            obj["1006"] = base.parse_element (/<cim:OASISErrCode.1006>([\s\S]*?)<\/cim:OASISErrCode.1006>/g, sub, context, true);
            obj["1007"] = base.parse_element (/<cim:OASISErrCode.1007>([\s\S]*?)<\/cim:OASISErrCode.1007>/g, sub, context, true);
            obj["1008"] = base.parse_element (/<cim:OASISErrCode.1008>([\s\S]*?)<\/cim:OASISErrCode.1008>/g, sub, context, true);
            obj["1009"] = base.parse_element (/<cim:OASISErrCode.1009>([\s\S]*?)<\/cim:OASISErrCode.1009>/g, sub, context, true);
            obj["1010"] = base.parse_element (/<cim:OASISErrCode.1010>([\s\S]*?)<\/cim:OASISErrCode.1010>/g, sub, context, true);
            bucket = context.parsed.OASISErrCode;
            if (null == bucket)
                context.parsed.OASISErrCode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * organization type
         *
         */
        function parse_OrganisationType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OrganisationType";
            obj["CUSTOMER"] = base.parse_element (/<cim:OrganisationType.CUSTOMER>([\s\S]*?)<\/cim:OrganisationType.CUSTOMER>/g, sub, context, true);
            obj["RTO"] = base.parse_element (/<cim:OrganisationType.RTO>([\s\S]*?)<\/cim:OrganisationType.RTO>/g, sub, context, true);
            bucket = context.parsed.OrganisationType;
            if (null == bucket)
                context.parsed.OrganisationType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

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
        function parse_SelfScheduleType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SelfScheduleType";
            obj["PT"] = base.parse_element (/<cim:SelfScheduleType.PT>([\s\S]*?)<\/cim:SelfScheduleType.PT>/g, sub, context, true);
            obj["ETC"] = base.parse_element (/<cim:SelfScheduleType.ETC>([\s\S]*?)<\/cim:SelfScheduleType.ETC>/g, sub, context, true);
            obj["TOR"] = base.parse_element (/<cim:SelfScheduleType.TOR>([\s\S]*?)<\/cim:SelfScheduleType.TOR>/g, sub, context, true);
            obj["RMR"] = base.parse_element (/<cim:SelfScheduleType.RMR>([\s\S]*?)<\/cim:SelfScheduleType.RMR>/g, sub, context, true);
            obj["RMT"] = base.parse_element (/<cim:SelfScheduleType.RMT>([\s\S]*?)<\/cim:SelfScheduleType.RMT>/g, sub, context, true);
            obj["RGMR"] = base.parse_element (/<cim:SelfScheduleType.RGMR>([\s\S]*?)<\/cim:SelfScheduleType.RGMR>/g, sub, context, true);
            obj["ORFC"] = base.parse_element (/<cim:SelfScheduleType.ORFC>([\s\S]*?)<\/cim:SelfScheduleType.ORFC>/g, sub, context, true);
            /**
             * Self-Provision
             *
             */
            obj["SP"] = base.parse_element (/<cim:SelfScheduleType.SP>([\s\S]*?)<\/cim:SelfScheduleType.SP>/g, sub, context, true);
            obj["IFM"] = base.parse_element (/<cim:SelfScheduleType.IFM>([\s\S]*?)<\/cim:SelfScheduleType.IFM>/g, sub, context, true);
            obj["RUC"] = base.parse_element (/<cim:SelfScheduleType.RUC>([\s\S]*?)<\/cim:SelfScheduleType.RUC>/g, sub, context, true);
            /**
             * RA Obligations
             *
             */
            obj["RA"] = base.parse_element (/<cim:SelfScheduleType.RA>([\s\S]*?)<\/cim:SelfScheduleType.RA>/g, sub, context, true);
            obj["PUMP_ETC"] = base.parse_element (/<cim:SelfScheduleType.PUMP_ETC>([\s\S]*?)<\/cim:SelfScheduleType.PUMP_ETC>/g, sub, context, true);
            obj["PUMP_TOR"] = base.parse_element (/<cim:SelfScheduleType.PUMP_TOR>([\s\S]*?)<\/cim:SelfScheduleType.PUMP_TOR>/g, sub, context, true);
            /**
             * Base Schedule
             *
             */
            obj["BAS"] = base.parse_element (/<cim:SelfScheduleType.BAS>([\s\S]*?)<\/cim:SelfScheduleType.BAS>/g, sub, context, true);
            /**
             * Lay-off schedule
             *
             */
            obj["LOF"] = base.parse_element (/<cim:SelfScheduleType.LOF>([\s\S]*?)<\/cim:SelfScheduleType.LOF>/g, sub, context, true);
            obj["WHL"] = base.parse_element (/<cim:SelfScheduleType.WHL>([\s\S]*?)<\/cim:SelfScheduleType.WHL>/g, sub, context, true);
            bucket = context.parsed.SelfScheduleType;
            if (null == bucket)
                context.parsed.SelfScheduleType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_SourceSinkType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SourceSinkType";
            obj["Source"] = base.parse_element (/<cim:SourceSinkType.Source>([\s\S]*?)<\/cim:SourceSinkType.Source>/g, sub, context, true);
            obj["Sink"] = base.parse_element (/<cim:SourceSinkType.Sink>([\s\S]*?)<\/cim:SourceSinkType.Sink>/g, sub, context, true);
            obj["Neither"] = base.parse_element (/<cim:SourceSinkType.Neither>([\s\S]*?)<\/cim:SourceSinkType.Neither>/g, sub, context, true);
            bucket = context.parsed.SourceSinkType;
            if (null == bucket)
                context.parsed.SourceSinkType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_SelfSchedTypeCleanBid (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SelfSchedTypeCleanBid";
            obj["PT"] = base.parse_element (/<cim:SelfSchedTypeCleanBid.PT>([\s\S]*?)<\/cim:SelfSchedTypeCleanBid.PT>/g, sub, context, true);
            obj["ETC"] = base.parse_element (/<cim:SelfSchedTypeCleanBid.ETC>([\s\S]*?)<\/cim:SelfSchedTypeCleanBid.ETC>/g, sub, context, true);
            obj["TOR"] = base.parse_element (/<cim:SelfSchedTypeCleanBid.TOR>([\s\S]*?)<\/cim:SelfSchedTypeCleanBid.TOR>/g, sub, context, true);
            obj["RMT"] = base.parse_element (/<cim:SelfSchedTypeCleanBid.RMT>([\s\S]*?)<\/cim:SelfSchedTypeCleanBid.RMT>/g, sub, context, true);
            /**
             * Self-Provision
             *
             */
            obj["SP"] = base.parse_element (/<cim:SelfSchedTypeCleanBid.SP>([\s\S]*?)<\/cim:SelfSchedTypeCleanBid.SP>/g, sub, context, true);
            /**
             * RA Obligations
             *
             */
            obj["RA"] = base.parse_element (/<cim:SelfSchedTypeCleanBid.RA>([\s\S]*?)<\/cim:SelfSchedTypeCleanBid.RA>/g, sub, context, true);
            obj["IFM"] = base.parse_element (/<cim:SelfSchedTypeCleanBid.IFM>([\s\S]*?)<\/cim:SelfSchedTypeCleanBid.IFM>/g, sub, context, true);
            obj["BAS"] = base.parse_element (/<cim:SelfSchedTypeCleanBid.BAS>([\s\S]*?)<\/cim:SelfSchedTypeCleanBid.BAS>/g, sub, context, true);
            obj["LOF"] = base.parse_element (/<cim:SelfSchedTypeCleanBid.LOF>([\s\S]*?)<\/cim:SelfSchedTypeCleanBid.LOF>/g, sub, context, true);
            obj["WHL"] = base.parse_element (/<cim:SelfSchedTypeCleanBid.WHL>([\s\S]*?)<\/cim:SelfSchedTypeCleanBid.WHL>/g, sub, context, true);
            obj["LPT"] = base.parse_element (/<cim:SelfSchedTypeCleanBid.LPT>([\s\S]*?)<\/cim:SelfSchedTypeCleanBid.LPT>/g, sub, context, true);
            bucket = context.parsed.SelfSchedTypeCleanBid;
            if (null == bucket)
                context.parsed.SelfSchedTypeCleanBid = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_TradeProductType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TradeProductType";
            /**
             * Physical Energy Tra
             *
             */
            obj["PHY"] = base.parse_element (/<cim:TradeProductType.PHY>([\s\S]*?)<\/cim:TradeProductType.PHY>/g, sub, context, true);
            /**
             * Energy Trades at Aggregated Pricing Nodes
             *
             */
            obj["APN"] = base.parse_element (/<cim:TradeProductType.APN>([\s\S]*?)<\/cim:TradeProductType.APN>/g, sub, context, true);
            /**
             * Regulation Up Trade
             *
             */
            obj["RUT"] = base.parse_element (/<cim:TradeProductType.RUT>([\s\S]*?)<\/cim:TradeProductType.RUT>/g, sub, context, true);
            /**
             * Regulation Down Trade
             *
             */
            obj["RDT"] = base.parse_element (/<cim:TradeProductType.RDT>([\s\S]*?)<\/cim:TradeProductType.RDT>/g, sub, context, true);
            /**
             * Spinning Reserve Trade
             *
             */
            obj["SRT"] = base.parse_element (/<cim:TradeProductType.SRT>([\s\S]*?)<\/cim:TradeProductType.SRT>/g, sub, context, true);
            /**
             * Non-Spinning Reserve Trade
             *
             */
            obj["NRT"] = base.parse_element (/<cim:TradeProductType.NRT>([\s\S]*?)<\/cim:TradeProductType.NRT>/g, sub, context, true);
            /**
             * Capacity type trade
             *
             */
            obj["CAP"] = base.parse_element (/<cim:TradeProductType.CAP>([\s\S]*?)<\/cim:TradeProductType.CAP>/g, sub, context, true);
            bucket = context.parsed.TradeProductType;
            if (null == bucket)
                context.parsed.TradeProductType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_MarketScheduleServices (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketScheduleServices";
            obj["retrieveDefaultBidCurves"] = base.parse_element (/<cim:MarketScheduleServices.retrieveDefaultBidCurves>([\s\S]*?)<\/cim:MarketScheduleServices.retrieveDefaultBidCurves>/g, sub, context, true);
            obj["retrieveMarketAwards"] = base.parse_element (/<cim:MarketScheduleServices.retrieveMarketAwards>([\s\S]*?)<\/cim:MarketScheduleServices.retrieveMarketAwards>/g, sub, context, true);
            obj["retrieveMPMResults"] = base.parse_element (/<cim:MarketScheduleServices.retrieveMPMResults>([\s\S]*?)<\/cim:MarketScheduleServices.retrieveMPMResults>/g, sub, context, true);
            obj["retrieveSchedulePrices"] = base.parse_element (/<cim:MarketScheduleServices.retrieveSchedulePrices>([\s\S]*?)<\/cim:MarketScheduleServices.retrieveSchedulePrices>/g, sub, context, true);
            obj["retrieveStartUpShutDownInstructions"] = base.parse_element (/<cim:MarketScheduleServices.retrieveStartUpShutDownInstructions>([\s\S]*?)<\/cim:MarketScheduleServices.retrieveStartUpShutDownInstructions>/g, sub, context, true);
            bucket = context.parsed.MarketScheduleServices;
            if (null == bucket)
                context.parsed.MarketScheduleServices = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_SystemType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SystemType";
            obj["OASIS"] = base.parse_element (/<cim:SystemType.OASIS>([\s\S]*?)<\/cim:SystemType.OASIS>/g, sub, context, true);
            bucket = context.parsed.SystemType;
            if (null == bucket)
                context.parsed.SystemType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

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
        function parse_EnergyTypeCode (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "EnergyTypeCode";
            obj["DASE"] = base.parse_element (/<cim:EnergyTypeCode.DASE>([\s\S]*?)<\/cim:EnergyTypeCode.DASE>/g, sub, context, true);
            obj["DSSE"] = base.parse_element (/<cim:EnergyTypeCode.DSSE>([\s\S]*?)<\/cim:EnergyTypeCode.DSSE>/g, sub, context, true);
            obj["DABE"] = base.parse_element (/<cim:EnergyTypeCode.DABE>([\s\S]*?)<\/cim:EnergyTypeCode.DABE>/g, sub, context, true);
            obj["OE"] = base.parse_element (/<cim:EnergyTypeCode.OE>([\s\S]*?)<\/cim:EnergyTypeCode.OE>/g, sub, context, true);
            obj["HASE"] = base.parse_element (/<cim:EnergyTypeCode.HASE>([\s\S]*?)<\/cim:EnergyTypeCode.HASE>/g, sub, context, true);
            obj["SRE"] = base.parse_element (/<cim:EnergyTypeCode.SRE>([\s\S]*?)<\/cim:EnergyTypeCode.SRE>/g, sub, context, true);
            obj["RED"] = base.parse_element (/<cim:EnergyTypeCode.RED>([\s\S]*?)<\/cim:EnergyTypeCode.RED>/g, sub, context, true);
            obj["EDE"] = base.parse_element (/<cim:EnergyTypeCode.EDE>([\s\S]*?)<\/cim:EnergyTypeCode.EDE>/g, sub, context, true);
            obj["RMRE"] = base.parse_element (/<cim:EnergyTypeCode.RMRE>([\s\S]*?)<\/cim:EnergyTypeCode.RMRE>/g, sub, context, true);
            obj["MSSLFE"] = base.parse_element (/<cim:EnergyTypeCode.MSSLFE>([\s\S]*?)<\/cim:EnergyTypeCode.MSSLFE>/g, sub, context, true);
            obj["RE"] = base.parse_element (/<cim:EnergyTypeCode.RE>([\s\S]*?)<\/cim:EnergyTypeCode.RE>/g, sub, context, true);
            obj["MLE"] = base.parse_element (/<cim:EnergyTypeCode.MLE>([\s\S]*?)<\/cim:EnergyTypeCode.MLE>/g, sub, context, true);
            obj["SE"] = base.parse_element (/<cim:EnergyTypeCode.SE>([\s\S]*?)<\/cim:EnergyTypeCode.SE>/g, sub, context, true);
            obj["RTSSE"] = base.parse_element (/<cim:EnergyTypeCode.RTSSE>([\s\S]*?)<\/cim:EnergyTypeCode.RTSSE>/g, sub, context, true);
            obj["DMLE"] = base.parse_element (/<cim:EnergyTypeCode.DMLE>([\s\S]*?)<\/cim:EnergyTypeCode.DMLE>/g, sub, context, true);
            obj["PE"] = base.parse_element (/<cim:EnergyTypeCode.PE>([\s\S]*?)<\/cim:EnergyTypeCode.PE>/g, sub, context, true);
            obj["TEE"] = base.parse_element (/<cim:EnergyTypeCode.TEE>([\s\S]*?)<\/cim:EnergyTypeCode.TEE>/g, sub, context, true);
            obj["DAPE"] = base.parse_element (/<cim:EnergyTypeCode.DAPE>([\s\S]*?)<\/cim:EnergyTypeCode.DAPE>/g, sub, context, true);
            bucket = context.parsed.EnergyTypeCode;
            if (null == bucket)
                context.parsed.EnergyTypeCode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * ACTIVE
         *
         * INACTIVE
         *
         */
        function parse_CurrentStatusSC (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CurrentStatusSC";
            obj["ACTIVE"] = base.parse_element (/<cim:CurrentStatusSC.ACTIVE>([\s\S]*?)<\/cim:CurrentStatusSC.ACTIVE>/g, sub, context, true);
            obj["INACTIVE"] = base.parse_element (/<cim:CurrentStatusSC.INACTIVE>([\s\S]*?)<\/cim:CurrentStatusSC.INACTIVE>/g, sub, context, true);
            bucket = context.parsed.CurrentStatusSC;
            if (null == bucket)
                context.parsed.CurrentStatusSC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

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
        function parse_TradeStatusType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TradeStatusType";
            obj["RJ"] = base.parse_element (/<cim:TradeStatusType.RJ>([\s\S]*?)<\/cim:TradeStatusType.RJ>/g, sub, context, true);
            obj["I"] = base.parse_element (/<cim:TradeStatusType.I>([\s\S]*?)<\/cim:TradeStatusType.I>/g, sub, context, true);
            obj["V"] = base.parse_element (/<cim:TradeStatusType.V>([\s\S]*?)<\/cim:TradeStatusType.V>/g, sub, context, true);
            obj["M"] = base.parse_element (/<cim:TradeStatusType.M>([\s\S]*?)<\/cim:TradeStatusType.M>/g, sub, context, true);
            obj["CV"] = base.parse_element (/<cim:TradeStatusType.CV>([\s\S]*?)<\/cim:TradeStatusType.CV>/g, sub, context, true);
            obj["CM"] = base.parse_element (/<cim:TradeStatusType.CM>([\s\S]*?)<\/cim:TradeStatusType.CM>/g, sub, context, true);
            obj["CI"] = base.parse_element (/<cim:TradeStatusType.CI>([\s\S]*?)<\/cim:TradeStatusType.CI>/g, sub, context, true);
            obj["CX"] = base.parse_element (/<cim:TradeStatusType.CX>([\s\S]*?)<\/cim:TradeStatusType.CX>/g, sub, context, true);
            obj["O"] = base.parse_element (/<cim:TradeStatusType.O>([\s\S]*?)<\/cim:TradeStatusType.O>/g, sub, context, true);
            obj["MT"] = base.parse_element (/<cim:TradeStatusType.MT>([\s\S]*?)<\/cim:TradeStatusType.MT>/g, sub, context, true);
            obj["U"] = base.parse_element (/<cim:TradeStatusType.U>([\s\S]*?)<\/cim:TradeStatusType.U>/g, sub, context, true);
            bucket = context.parsed.TradeStatusType;
            if (null == bucket)
                context.parsed.TradeStatusType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_ResourceCertificationCategory (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ResourceCertificationCategory";
            obj["DAM"] = base.parse_element (/<cim:ResourceCertificationCategory.DAM>([\s\S]*?)<\/cim:ResourceCertificationCategory.DAM>/g, sub, context, true);
            obj["RTM"] = base.parse_element (/<cim:ResourceCertificationCategory.RTM>([\s\S]*?)<\/cim:ResourceCertificationCategory.RTM>/g, sub, context, true);
            obj["RC"] = base.parse_element (/<cim:ResourceCertificationCategory.RC>([\s\S]*?)<\/cim:ResourceCertificationCategory.RC>/g, sub, context, true);
            /**
             * Generic
             *
             */
            obj["GT"] = base.parse_element (/<cim:ResourceCertificationCategory.GT>([\s\S]*?)<\/cim:ResourceCertificationCategory.GT>/g, sub, context, true);
            bucket = context.parsed.ResourceCertificationCategory;
            if (null == bucket)
                context.parsed.ResourceCertificationCategory = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * organization code
         *
         */
        function parse_OrganisationCode (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OrganisationCode";
            obj["BILL_TO"] = base.parse_element (/<cim:OrganisationCode.BILL_TO>([\s\S]*?)<\/cim:OrganisationCode.BILL_TO>/g, sub, context, true);
            obj["PAY_TO"] = base.parse_element (/<cim:OrganisationCode.PAY_TO>([\s\S]*?)<\/cim:OrganisationCode.PAY_TO>/g, sub, context, true);
            obj["SOLD_TO"] = base.parse_element (/<cim:OrganisationCode.SOLD_TO>([\s\S]*?)<\/cim:OrganisationCode.SOLD_TO>/g, sub, context, true);
            obj["PROVIDED_BY"] = base.parse_element (/<cim:OrganisationCode.PROVIDED_BY>([\s\S]*?)<\/cim:OrganisationCode.PROVIDED_BY>/g, sub, context, true);
            bucket = context.parsed.OrganisationCode;
            if (null == bucket)
                context.parsed.OrganisationCode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_DispatchTransactionType: parse_DispatchTransactionType,
                parse_EnergyTypeCode: parse_EnergyTypeCode,
                parse_SegmentCurveType: parse_SegmentCurveType,
                parse_UnitTypeEMS: parse_UnitTypeEMS,
                parse_AllocationEnergyTypeCode: parse_AllocationEnergyTypeCode,
                parse_MktSubClassType: parse_MktSubClassType,
                parse_MarketStatementDocType: parse_MarketStatementDocType,
                parse_OASISIntervalType: parse_OASISIntervalType,
                parse_SchedClassType: parse_SchedClassType,
                parse_OASISStatusType: parse_OASISStatusType,
                parse_OASISMasterType: parse_OASISMasterType,
                parse_SelfScheduleType: parse_SelfScheduleType,
                parse_OASISErrCode: parse_OASISErrCode,
                parse_SelfSchedTypeCleanBid: parse_SelfSchedTypeCleanBid,
                parse_MarketStatementLineItemAliasName: parse_MarketStatementLineItemAliasName,
                parse_MeasurementTypeEMS: parse_MeasurementTypeEMS,
                parse_TradeProductType: parse_TradeProductType,
                parse_UOMType: parse_UOMType,
                parse_AlarmDisplayType: parse_AlarmDisplayType,
                parse_SpinningEventNameType: parse_SpinningEventNameType,
                parse_SpinningEventType: parse_SpinningEventType,
                parse_OASISErrDescription: parse_OASISErrDescription,
                parse_OrganisationType: parse_OrganisationType,
                parse_runTypeCAISO: parse_runTypeCAISO,
                parse_SelfSchedTypeRawBid: parse_SelfSchedTypeRawBid,
                parse_OrganisationCode: parse_OrganisationCode,
                parse_MarketStatementDescription: parse_MarketStatementDescription,
                parse_ADSInstructionTypeCommitment: parse_ADSInstructionTypeCommitment,
                parse_JobStartEndType: parse_JobStartEndType,
                parse_RequestorRmrTest: parse_RequestorRmrTest,
                parse_JobFlagType: parse_JobFlagType,
                parse_TradeStatusType: parse_TradeStatusType,
                parse_AdderType: parse_AdderType,
                parse_OASISDataItems: parse_OASISDataItems,
                parse_LoadFollowingCapacityType: parse_LoadFollowingCapacityType,
                parse_DAMMarketType: parse_DAMMarketType,
                parse_SelfScheduleTypeMB: parse_SelfScheduleTypeMB,
                parse_OASISBidReportType: parse_OASISBidReportType,
                parse_SystemType: parse_SystemType,
                parse_ResourceCertificationType: parse_ResourceCertificationType,
                parse_ResourceCertificationCategory: parse_ResourceCertificationCategory,
                parse_AncillaryCommodityType: parse_AncillaryCommodityType,
                parse_TimeZoneType: parse_TimeZoneType,
                parse_SourceSinkFlag: parse_SourceSinkFlag,
                parse_OASISReportType: parse_OASISReportType,
                parse_OASISMarketType: parse_OASISMarketType,
                parse_MQSDELType: parse_MQSDELType,
                parse_PriceSetFlag: parse_PriceSetFlag,
                parse_MarketScheduleServices: parse_MarketScheduleServices,
                parse_LFCResourceType: parse_LFCResourceType,
                parse_MarketProductTypeAsReq: parse_MarketProductTypeAsReq,
                parse_SourceSinkType: parse_SourceSinkType,
                parse_BidStatusType: parse_BidStatusType,
                parse_ZoneType: parse_ZoneType,
                parse_OASISMeasType: parse_OASISMeasType,
                parse_DispatchAcceptStatus: parse_DispatchAcceptStatus,
                parse_BidPriceCapType: parse_BidPriceCapType,
                parse_ADSInstructionTypeOOS: parse_ADSInstructionTypeOOS,
                parse_CleanTradeProductType: parse_CleanTradeProductType,
                parse_CurrentStatusSC: parse_CurrentStatusSC,
                parse_JobScheduleType: parse_JobScheduleType,
                parse_MarketStatementDocStatus: parse_MarketStatementDocStatus
            }
        );
    }
);