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
            base.parse_element (/<cim:OASISStatusType.Data_Transfer_Procedure_Initiated>([\s\S]*?)<\/cim:OASISStatusType.Data_Transfer_Procedure_Initiated>/g, obj, "Data_Transfer_Procedure_Initiated", base.to_string, sub, context);
            base.parse_element (/<cim:OASISStatusType.Valid>([\s\S]*?)<\/cim:OASISStatusType.Valid>/g, obj, "Valid", base.to_string, sub, context);
            base.parse_element (/<cim:OASISStatusType.Obsolete>([\s\S]*?)<\/cim:OASISStatusType.Obsolete>/g, obj, "Obsolete", base.to_string, sub, context);
            base.parse_element (/<cim:OASISStatusType.Data_Transfer_Succesful>([\s\S]*?)<\/cim:OASISStatusType.Data_Transfer_Succesful>/g, obj, "Data_Transfer_Succesful", base.to_string, sub, context);
            base.parse_element (/<cim:OASISStatusType.Push_Failed>([\s\S]*?)<\/cim:OASISStatusType.Push_Failed>/g, obj, "Push_Failed", base.to_string, sub, context);
            base.parse_element (/<cim:OASISStatusType.Forced_Termination>([\s\S]*?)<\/cim:OASISStatusType.Forced_Termination>/g, obj, "Forced_Termination", base.to_string, sub, context);
            bucket = context.parsed.OASISStatusType;
            if (null == bucket)
                context.parsed.OASISStatusType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OASISStatusType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "OASISStatusType", "Data_Transfer_Procedure_Initiated", base.from_string, fields);
            base.export_element (obj, "OASISStatusType", "Valid", base.from_string, fields);
            base.export_element (obj, "OASISStatusType", "Obsolete", base.from_string, fields);
            base.export_element (obj, "OASISStatusType", "Data_Transfer_Succesful", base.from_string, fields);
            base.export_element (obj, "OASISStatusType", "Push_Failed", base.from_string, fields);
            base.export_element (obj, "OASISStatusType", "Forced_Termination", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_OASISDataItems (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OASISDataItems";
            base.parse_element (/<cim:OASISDataItems.AS_CLEAR_ASMP_IFM>([\s\S]*?)<\/cim:OASISDataItems.AS_CLEAR_ASMP_IFM>/g, obj, "AS_CLEAR_ASMP_IFM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.AS_CLEAR_ASMP_RTM>([\s\S]*?)<\/cim:OASISDataItems.AS_CLEAR_ASMP_RTM>/g, obj, "AS_CLEAR_ASMP_RTM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.AS_CLEAR_COST_IFM>([\s\S]*?)<\/cim:OASISDataItems.AS_CLEAR_COST_IFM>/g, obj, "AS_CLEAR_COST_IFM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.AS_CLEAR_COST_RTM>([\s\S]*?)<\/cim:OASISDataItems.AS_CLEAR_COST_RTM>/g, obj, "AS_CLEAR_COST_RTM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.AS_CLEAR_MW_IFM>([\s\S]*?)<\/cim:OASISDataItems.AS_CLEAR_MW_IFM>/g, obj, "AS_CLEAR_MW_IFM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.AS_CLEAR_MW_RTM>([\s\S]*?)<\/cim:OASISDataItems.AS_CLEAR_MW_RTM>/g, obj, "AS_CLEAR_MW_RTM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.AS_GEN_TOTAL_MW_IFM>([\s\S]*?)<\/cim:OASISDataItems.AS_GEN_TOTAL_MW_IFM>/g, obj, "AS_GEN_TOTAL_MW_IFM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.AS_GEN_TOTAL_MW_RTM>([\s\S]*?)<\/cim:OASISDataItems.AS_GEN_TOTAL_MW_RTM>/g, obj, "AS_GEN_TOTAL_MW_RTM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.AS_IMP_TOTAL_MW_IFM>([\s\S]*?)<\/cim:OASISDataItems.AS_IMP_TOTAL_MW_IFM>/g, obj, "AS_IMP_TOTAL_MW_IFM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.AS_IMP_TOTAL_MW_RTM>([\s\S]*?)<\/cim:OASISDataItems.AS_IMP_TOTAL_MW_RTM>/g, obj, "AS_IMP_TOTAL_MW_RTM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.AS_LOAD_TOTAL_MW_IFM>([\s\S]*?)<\/cim:OASISDataItems.AS_LOAD_TOTAL_MW_IFM>/g, obj, "AS_LOAD_TOTAL_MW_IFM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.AS_LOAD_TOTAL_MW_RTM>([\s\S]*?)<\/cim:OASISDataItems.AS_LOAD_TOTAL_MW_RTM>/g, obj, "AS_LOAD_TOTAL_MW_RTM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.AS_REGION_value>([\s\S]*?)<\/cim:OASISDataItems.AS_REGION_value>/g, obj, "AS_REGION_value", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.AS_REGION_REQ_MAX>([\s\S]*?)<\/cim:OASISDataItems.AS_REGION_REQ_MAX>/g, obj, "AS_REGION_REQ_MAX", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.AS_REGION_REQ_MIN>([\s\S]*?)<\/cim:OASISDataItems.AS_REGION_REQ_MIN>/g, obj, "AS_REGION_REQ_MIN", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.AS_SELF_MW_IFM>([\s\S]*?)<\/cim:OASISDataItems.AS_SELF_MW_IFM>/g, obj, "AS_SELF_MW_IFM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.AS_SELF_MW_RTM>([\s\S]*?)<\/cim:OASISDataItems.AS_SELF_MW_RTM>/g, obj, "AS_SELF_MW_RTM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.AS_TOTAL_MW>([\s\S]*?)<\/cim:OASISDataItems.AS_TOTAL_MW>/g, obj, "AS_TOTAL_MW", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.AS_TOTAL_MW_IFM>([\s\S]*?)<\/cim:OASISDataItems.AS_TOTAL_MW_IFM>/g, obj, "AS_TOTAL_MW_IFM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.AS_TOTAL_MW_RTM>([\s\S]*?)<\/cim:OASISDataItems.AS_TOTAL_MW_RTM>/g, obj, "AS_TOTAL_MW_RTM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.AS_TYPE>([\s\S]*?)<\/cim:OASISDataItems.AS_TYPE>/g, obj, "AS_TYPE", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.AS_USER_RATE>([\s\S]*?)<\/cim:OASISDataItems.AS_USER_RATE>/g, obj, "AS_USER_RATE", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.CA_value>([\s\S]*?)<\/cim:OASISDataItems.CA_value>/g, obj, "CA_value", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.CMMT_MINLOAD_MLC>([\s\S]*?)<\/cim:OASISDataItems.CMMT_MINLOAD_MLC>/g, obj, "CMMT_MINLOAD_MLC", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.CMMT_MINLOAD_MW>([\s\S]*?)<\/cim:OASISDataItems.CMMT_MINLOAD_MW>/g, obj, "CMMT_MINLOAD_MW", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.CMMT_RA_MLC>([\s\S]*?)<\/cim:OASISDataItems.CMMT_RA_MLC>/g, obj, "CMMT_RA_MLC", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.CMMT_RA_MW>([\s\S]*?)<\/cim:OASISDataItems.CMMT_RA_MW>/g, obj, "CMMT_RA_MW", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.CMMT_RA_START_COST>([\s\S]*?)<\/cim:OASISDataItems.CMMT_RA_START_COST>/g, obj, "CMMT_RA_START_COST", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.CMMT_RA_UNITS>([\s\S]*?)<\/cim:OASISDataItems.CMMT_RA_UNITS>/g, obj, "CMMT_RA_UNITS", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.CMMT_TOTAL_START_COST>([\s\S]*?)<\/cim:OASISDataItems.CMMT_TOTAL_START_COST>/g, obj, "CMMT_TOTAL_START_COST", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.CMMT_TOTAL_MW>([\s\S]*?)<\/cim:OASISDataItems.CMMT_TOTAL_MW>/g, obj, "CMMT_TOTAL_MW", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.CMMT_TOTAL_UNITS>([\s\S]*?)<\/cim:OASISDataItems.CMMT_TOTAL_UNITS>/g, obj, "CMMT_TOTAL_UNITS", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.CRR_CAT>([\s\S]*?)<\/cim:OASISDataItems.CRR_CAT>/g, obj, "CRR_CAT", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.CRR_MARKET_value>([\s\S]*?)<\/cim:OASISDataItems.CRR_MARKET_value>/g, obj, "CRR_MARKET_value", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.CRR_MW>([\s\S]*?)<\/cim:OASISDataItems.CRR_MW>/g, obj, "CRR_MW", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.CRR_NSR>([\s\S]*?)<\/cim:OASISDataItems.CRR_NSR>/g, obj, "CRR_NSR", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.CRR_OPTION>([\s\S]*?)<\/cim:OASISDataItems.CRR_OPTION>/g, obj, "CRR_OPTION", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.CRR_OWNER>([\s\S]*?)<\/cim:OASISDataItems.CRR_OWNER>/g, obj, "CRR_OWNER", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.CRR_SEGMENT>([\s\S]*?)<\/cim:OASISDataItems.CRR_SEGMENT>/g, obj, "CRR_SEGMENT", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.CRR_TERM>([\s\S]*?)<\/cim:OASISDataItems.CRR_TERM>/g, obj, "CRR_TERM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.CRR_TOU>([\s\S]*?)<\/cim:OASISDataItems.CRR_TOU>/g, obj, "CRR_TOU", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.CRR_TYPE>([\s\S]*?)<\/cim:OASISDataItems.CRR_TYPE>/g, obj, "CRR_TYPE", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.ENE_EA_DA>([\s\S]*?)<\/cim:OASISDataItems.ENE_EA_DA>/g, obj, "ENE_EA_DA", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.ENE_EA_EXCEPT>([\s\S]*?)<\/cim:OASISDataItems.ENE_EA_EXCEPT>/g, obj, "ENE_EA_EXCEPT", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.ENE_EA_HASP>([\s\S]*?)<\/cim:OASISDataItems.ENE_EA_HASP>/g, obj, "ENE_EA_HASP", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.ENE_EA_MLE>([\s\S]*?)<\/cim:OASISDataItems.ENE_EA_MLE>/g, obj, "ENE_EA_MLE", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.ENE_EA_MSSLF>([\s\S]*?)<\/cim:OASISDataItems.ENE_EA_MSSLF>/g, obj, "ENE_EA_MSSLF", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.ENE_EA_OPTIMAL>([\s\S]*?)<\/cim:OASISDataItems.ENE_EA_OPTIMAL>/g, obj, "ENE_EA_OPTIMAL", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.ENE_EA_RAMP_DEV>([\s\S]*?)<\/cim:OASISDataItems.ENE_EA_RAMP_DEV>/g, obj, "ENE_EA_RAMP_DEV", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.ENE_EA_RAMP_STD>([\s\S]*?)<\/cim:OASISDataItems.ENE_EA_RAMP_STD>/g, obj, "ENE_EA_RAMP_STD", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.ENE_EA_RESIDUAL>([\s\S]*?)<\/cim:OASISDataItems.ENE_EA_RESIDUAL>/g, obj, "ENE_EA_RESIDUAL", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.ENE_EA_RMR>([\s\S]*?)<\/cim:OASISDataItems.ENE_EA_RMR>/g, obj, "ENE_EA_RMR", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.ENE_EA_SELF>([\s\S]*?)<\/cim:OASISDataItems.ENE_EA_SELF>/g, obj, "ENE_EA_SELF", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.ENE_EA_SLIC>([\s\S]*?)<\/cim:OASISDataItems.ENE_EA_SLIC>/g, obj, "ENE_EA_SLIC", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.ENE_EXP_CLEAR_HASP>([\s\S]*?)<\/cim:OASISDataItems.ENE_EXP_CLEAR_HASP>/g, obj, "ENE_EXP_CLEAR_HASP", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.ENE_EXP_CLEAR_IFM>([\s\S]*?)<\/cim:OASISDataItems.ENE_EXP_CLEAR_IFM>/g, obj, "ENE_EXP_CLEAR_IFM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.ENE_EXP_CLEAR_RTM>([\s\S]*?)<\/cim:OASISDataItems.ENE_EXP_CLEAR_RTM>/g, obj, "ENE_EXP_CLEAR_RTM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.ENE_GEN_CLEAR_HASP>([\s\S]*?)<\/cim:OASISDataItems.ENE_GEN_CLEAR_HASP>/g, obj, "ENE_GEN_CLEAR_HASP", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.ENE_GEN_CLEAR_IFM>([\s\S]*?)<\/cim:OASISDataItems.ENE_GEN_CLEAR_IFM>/g, obj, "ENE_GEN_CLEAR_IFM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.ENE_GEN_CLEAR_RTM>([\s\S]*?)<\/cim:OASISDataItems.ENE_GEN_CLEAR_RTM>/g, obj, "ENE_GEN_CLEAR_RTM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.ENE_IMP_CLEAR_HASP>([\s\S]*?)<\/cim:OASISDataItems.ENE_IMP_CLEAR_HASP>/g, obj, "ENE_IMP_CLEAR_HASP", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.ENE_IMP_CLEAR_IFM>([\s\S]*?)<\/cim:OASISDataItems.ENE_IMP_CLEAR_IFM>/g, obj, "ENE_IMP_CLEAR_IFM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.ENE_IMP_CLEAR_RTM>([\s\S]*?)<\/cim:OASISDataItems.ENE_IMP_CLEAR_RTM>/g, obj, "ENE_IMP_CLEAR_RTM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.ENE_LOAD_ACTUAL>([\s\S]*?)<\/cim:OASISDataItems.ENE_LOAD_ACTUAL>/g, obj, "ENE_LOAD_ACTUAL", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.ENE_LOAD_CLEAR_HASP>([\s\S]*?)<\/cim:OASISDataItems.ENE_LOAD_CLEAR_HASP>/g, obj, "ENE_LOAD_CLEAR_HASP", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.ENE_LOAD_CLEAR_IFM>([\s\S]*?)<\/cim:OASISDataItems.ENE_LOAD_CLEAR_IFM>/g, obj, "ENE_LOAD_CLEAR_IFM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.ENE_LOAD_CLEAR_RTM>([\s\S]*?)<\/cim:OASISDataItems.ENE_LOAD_CLEAR_RTM>/g, obj, "ENE_LOAD_CLEAR_RTM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.ENE_LOAD_FCST>([\s\S]*?)<\/cim:OASISDataItems.ENE_LOAD_FCST>/g, obj, "ENE_LOAD_FCST", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.ENE_PEAK_HOUR>([\s\S]*?)<\/cim:OASISDataItems.ENE_PEAK_HOUR>/g, obj, "ENE_PEAK_HOUR", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.ENE_PEAK_LOAD>([\s\S]*?)<\/cim:OASISDataItems.ENE_PEAK_LOAD>/g, obj, "ENE_PEAK_LOAD", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.FUEL_REGION_value>([\s\S]*?)<\/cim:OASISDataItems.FUEL_REGION_value>/g, obj, "FUEL_REGION_value", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.INVT_DATETIME>([\s\S]*?)<\/cim:OASISDataItems.INVT_DATETIME>/g, obj, "INVT_DATETIME", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.LOAD_ACTUAL>([\s\S]*?)<\/cim:OASISDataItems.LOAD_ACTUAL>/g, obj, "LOAD_ACTUAL", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.LOAD_CLEAR_RTM>([\s\S]*?)<\/cim:OASISDataItems.LOAD_CLEAR_RTM>/g, obj, "LOAD_CLEAR_RTM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.LOSS_TOTAL_COST_HASP>([\s\S]*?)<\/cim:OASISDataItems.LOSS_TOTAL_COST_HASP>/g, obj, "LOSS_TOTAL_COST_HASP", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.LOSS_TOTAL_COST_RTM>([\s\S]*?)<\/cim:OASISDataItems.LOSS_TOTAL_COST_RTM>/g, obj, "LOSS_TOTAL_COST_RTM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.LOSS_TOTAL_MW_HASP>([\s\S]*?)<\/cim:OASISDataItems.LOSS_TOTAL_MW_HASP>/g, obj, "LOSS_TOTAL_MW_HASP", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.LOSS_TOTAL_MW_RTM>([\s\S]*?)<\/cim:OASISDataItems.LOSS_TOTAL_MW_RTM>/g, obj, "LOSS_TOTAL_MW_RTM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.MPM_FLAG>([\s\S]*?)<\/cim:OASISDataItems.MPM_FLAG>/g, obj, "MPM_FLAG", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.OP_RSRV_TOTAL>([\s\S]*?)<\/cim:OASISDataItems.OP_RSRV_TOTAL>/g, obj, "OP_RSRV_TOTAL", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.PRC_NG>([\s\S]*?)<\/cim:OASISDataItems.PRC_NG>/g, obj, "PRC_NG", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.PRC_SHADOW>([\s\S]*?)<\/cim:OASISDataItems.PRC_SHADOW>/g, obj, "PRC_SHADOW", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.RATING_ATC>([\s\S]*?)<\/cim:OASISDataItems.RATING_ATC>/g, obj, "RATING_ATC", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.RMR_DETER_DAM>([\s\S]*?)<\/cim:OASISDataItems.RMR_DETER_DAM>/g, obj, "RMR_DETER_DAM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.RMR_DETER_HASP>([\s\S]*?)<\/cim:OASISDataItems.RMR_DETER_HASP>/g, obj, "RMR_DETER_HASP", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.RMR_DISPATCH_DAM>([\s\S]*?)<\/cim:OASISDataItems.RMR_DISPATCH_DAM>/g, obj, "RMR_DISPATCH_DAM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.RMR_DISPATCH_HASP>([\s\S]*?)<\/cim:OASISDataItems.RMR_DISPATCH_HASP>/g, obj, "RMR_DISPATCH_HASP", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.RMR_TOTAL>([\s\S]*?)<\/cim:OASISDataItems.RMR_TOTAL>/g, obj, "RMR_TOTAL", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.RMR_TOTAL_AVAIL>([\s\S]*?)<\/cim:OASISDataItems.RMR_TOTAL_AVAIL>/g, obj, "RMR_TOTAL_AVAIL", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.RUC_GEN_CLEAR_RUC>([\s\S]*?)<\/cim:OASISDataItems.RUC_GEN_CLEAR_RUC>/g, obj, "RUC_GEN_CLEAR_RUC", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.RUC_IMP_CLEAR_RUC>([\s\S]*?)<\/cim:OASISDataItems.RUC_IMP_CLEAR_RUC>/g, obj, "RUC_IMP_CLEAR_RUC", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.RUC_LOAD_CLEAR_RUC>([\s\S]*?)<\/cim:OASISDataItems.RUC_LOAD_CLEAR_RUC>/g, obj, "RUC_LOAD_CLEAR_RUC", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.RUC_ZONE_value>([\s\S]*?)<\/cim:OASISDataItems.RUC_ZONE_value>/g, obj, "RUC_ZONE_value", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.TAC_AREA_value>([\s\S]*?)<\/cim:OASISDataItems.TAC_AREA_value>/g, obj, "TAC_AREA_value", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.TINTRFCE_value>([\s\S]*?)<\/cim:OASISDataItems.TINTRFCE_value>/g, obj, "TINTRFCE_value", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.TRNS_AS_IMPORT>([\s\S]*?)<\/cim:OASISDataItems.TRNS_AS_IMPORT>/g, obj, "TRNS_AS_IMPORT", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.TRNS_ENE_IMPORT>([\s\S]*?)<\/cim:OASISDataItems.TRNS_ENE_IMPORT>/g, obj, "TRNS_ENE_IMPORT", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.TRNS_EQUIP_value>([\s\S]*?)<\/cim:OASISDataItems.TRNS_EQUIP_value>/g, obj, "TRNS_EQUIP_value", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.TRNS_RATING_CBM>([\s\S]*?)<\/cim:OASISDataItems.TRNS_RATING_CBM>/g, obj, "TRNS_RATING_CBM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.TRNS_RATING_DIRECTION>([\s\S]*?)<\/cim:OASISDataItems.TRNS_RATING_DIRECTION>/g, obj, "TRNS_RATING_DIRECTION", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.TRNS_RATING_OTC>([\s\S]*?)<\/cim:OASISDataItems.TRNS_RATING_OTC>/g, obj, "TRNS_RATING_OTC", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.TRNS_RATING_OTC_DERATE>([\s\S]*?)<\/cim:OASISDataItems.TRNS_RATING_OTC_DERATE>/g, obj, "TRNS_RATING_OTC_DERATE", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.TRNS_RATING_TTC>([\s\S]*?)<\/cim:OASISDataItems.TRNS_RATING_TTC>/g, obj, "TRNS_RATING_TTC", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.TRNS_TI_value>([\s\S]*?)<\/cim:OASISDataItems.TRNS_TI_value>/g, obj, "TRNS_TI_value", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.TRNS_TR_ENTMTS>([\s\S]*?)<\/cim:OASISDataItems.TRNS_TR_ENTMTS>/g, obj, "TRNS_TR_ENTMTS", base.to_string, sub, context);
            base.parse_element (/<cim:OASISDataItems.TRNS_TR_USEAGE>([\s\S]*?)<\/cim:OASISDataItems.TRNS_TR_USEAGE>/g, obj, "TRNS_TR_USEAGE", base.to_string, sub, context);
            bucket = context.parsed.OASISDataItems;
            if (null == bucket)
                context.parsed.OASISDataItems = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OASISDataItems (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "OASISDataItems", "AS_CLEAR_ASMP_IFM", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "AS_CLEAR_ASMP_RTM", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "AS_CLEAR_COST_IFM", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "AS_CLEAR_COST_RTM", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "AS_CLEAR_MW_IFM", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "AS_CLEAR_MW_RTM", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "AS_GEN_TOTAL_MW_IFM", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "AS_GEN_TOTAL_MW_RTM", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "AS_IMP_TOTAL_MW_IFM", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "AS_IMP_TOTAL_MW_RTM", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "AS_LOAD_TOTAL_MW_IFM", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "AS_LOAD_TOTAL_MW_RTM", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "AS_REGION_value", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "AS_REGION_REQ_MAX", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "AS_REGION_REQ_MIN", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "AS_SELF_MW_IFM", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "AS_SELF_MW_RTM", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "AS_TOTAL_MW", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "AS_TOTAL_MW_IFM", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "AS_TOTAL_MW_RTM", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "AS_TYPE", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "AS_USER_RATE", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "CA_value", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "CMMT_MINLOAD_MLC", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "CMMT_MINLOAD_MW", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "CMMT_RA_MLC", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "CMMT_RA_MW", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "CMMT_RA_START_COST", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "CMMT_RA_UNITS", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "CMMT_TOTAL_START_COST", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "CMMT_TOTAL_MW", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "CMMT_TOTAL_UNITS", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "CRR_CAT", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "CRR_MARKET_value", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "CRR_MW", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "CRR_NSR", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "CRR_OPTION", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "CRR_OWNER", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "CRR_SEGMENT", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "CRR_TERM", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "CRR_TOU", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "CRR_TYPE", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "ENE_EA_DA", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "ENE_EA_EXCEPT", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "ENE_EA_HASP", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "ENE_EA_MLE", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "ENE_EA_MSSLF", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "ENE_EA_OPTIMAL", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "ENE_EA_RAMP_DEV", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "ENE_EA_RAMP_STD", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "ENE_EA_RESIDUAL", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "ENE_EA_RMR", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "ENE_EA_SELF", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "ENE_EA_SLIC", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "ENE_EXP_CLEAR_HASP", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "ENE_EXP_CLEAR_IFM", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "ENE_EXP_CLEAR_RTM", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "ENE_GEN_CLEAR_HASP", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "ENE_GEN_CLEAR_IFM", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "ENE_GEN_CLEAR_RTM", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "ENE_IMP_CLEAR_HASP", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "ENE_IMP_CLEAR_IFM", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "ENE_IMP_CLEAR_RTM", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "ENE_LOAD_ACTUAL", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "ENE_LOAD_CLEAR_HASP", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "ENE_LOAD_CLEAR_IFM", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "ENE_LOAD_CLEAR_RTM", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "ENE_LOAD_FCST", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "ENE_PEAK_HOUR", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "ENE_PEAK_LOAD", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "FUEL_REGION_value", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "INVT_DATETIME", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "LOAD_ACTUAL", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "LOAD_CLEAR_RTM", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "LOSS_TOTAL_COST_HASP", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "LOSS_TOTAL_COST_RTM", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "LOSS_TOTAL_MW_HASP", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "LOSS_TOTAL_MW_RTM", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "MPM_FLAG", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "OP_RSRV_TOTAL", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "PRC_NG", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "PRC_SHADOW", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "RATING_ATC", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "RMR_DETER_DAM", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "RMR_DETER_HASP", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "RMR_DISPATCH_DAM", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "RMR_DISPATCH_HASP", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "RMR_TOTAL", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "RMR_TOTAL_AVAIL", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "RUC_GEN_CLEAR_RUC", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "RUC_IMP_CLEAR_RUC", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "RUC_LOAD_CLEAR_RUC", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "RUC_ZONE_value", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "TAC_AREA_value", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "TINTRFCE_value", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "TRNS_AS_IMPORT", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "TRNS_ENE_IMPORT", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "TRNS_EQUIP_value", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "TRNS_RATING_CBM", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "TRNS_RATING_DIRECTION", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "TRNS_RATING_OTC", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "TRNS_RATING_OTC_DERATE", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "TRNS_RATING_TTC", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "TRNS_TI_value", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "TRNS_TR_ENTMTS", base.from_string, fields);
            base.export_element (obj, "OASISDataItems", "TRNS_TR_USEAGE", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_JobFlagType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "JobFlagType";
            base.parse_element (/<cim:JobFlagType.CREATED>([\s\S]*?)<\/cim:JobFlagType.CREATED>/g, obj, "CREATED", base.to_string, sub, context);
            base.parse_element (/<cim:JobFlagType.MODIFIED>([\s\S]*?)<\/cim:JobFlagType.MODIFIED>/g, obj, "MODIFIED", base.to_string, sub, context);
            base.parse_element (/<cim:JobFlagType.DELETED>([\s\S]*?)<\/cim:JobFlagType.DELETED>/g, obj, "DELETED", base.to_string, sub, context);
            bucket = context.parsed.JobFlagType;
            if (null == bucket)
                context.parsed.JobFlagType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_JobFlagType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "JobFlagType", "CREATED", base.from_string, fields);
            base.export_element (obj, "JobFlagType", "MODIFIED", base.from_string, fields);
            base.export_element (obj, "JobFlagType", "DELETED", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:runTypeCAISO.S>([\s\S]*?)<\/cim:runTypeCAISO.S>/g, obj, "S", base.to_string, sub, context);
            base.parse_element (/<cim:runTypeCAISO.P>([\s\S]*?)<\/cim:runTypeCAISO.P>/g, obj, "P", base.to_string, sub, context);
            bucket = context.parsed.runTypeCAISO;
            if (null == bucket)
                context.parsed.runTypeCAISO = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_runTypeCAISO (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "runTypeCAISO", "S", base.from_string, fields);
            base.export_element (obj, "runTypeCAISO", "P", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:AdderType.BASELINE>([\s\S]*?)<\/cim:AdderType.BASELINE>/g, obj, "BASELINE", base.to_string, sub, context);
            base.parse_element (/<cim:AdderType.NEGOTIATED>([\s\S]*?)<\/cim:AdderType.NEGOTIATED>/g, obj, "NEGOTIATED", base.to_string, sub, context);
            bucket = context.parsed.AdderType;
            if (null == bucket)
                context.parsed.AdderType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AdderType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "AdderType", "BASELINE", base.from_string, fields);
            base.export_element (obj, "AdderType", "NEGOTIATED", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:MarketStatementDescription.DAILY_INITIAL_CREDIT>([\s\S]*?)<\/cim:MarketStatementDescription.DAILY_INITIAL_CREDIT>/g, obj, "DAILY_INITIAL_CREDIT", base.to_string, sub, context);
            base.parse_element (/<cim:MarketStatementDescription.DAILY_INITIAL_MARKET>([\s\S]*?)<\/cim:MarketStatementDescription.DAILY_INITIAL_MARKET>/g, obj, "DAILY_INITIAL_MARKET", base.to_string, sub, context);
            base.parse_element (/<cim:MarketStatementDescription.MONTHLY_INITIAL_MARKET>([\s\S]*?)<\/cim:MarketStatementDescription.MONTHLY_INITIAL_MARKET>/g, obj, "MONTHLY_INITIAL_MARKET", base.to_string, sub, context);
            base.parse_element (/<cim:MarketStatementDescription.DAILY_RECALC_MARKET>([\s\S]*?)<\/cim:MarketStatementDescription.DAILY_RECALC_MARKET>/g, obj, "DAILY_RECALC_MARKET", base.to_string, sub, context);
            base.parse_element (/<cim:MarketStatementDescription.MONTHLY_RECALC_MARKET>([\s\S]*?)<\/cim:MarketStatementDescription.MONTHLY_RECALC_MARKET>/g, obj, "MONTHLY_RECALC_MARKET", base.to_string, sub, context);
            bucket = context.parsed.MarketStatementDescription;
            if (null == bucket)
                context.parsed.MarketStatementDescription = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MarketStatementDescription (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "MarketStatementDescription", "DAILY_INITIAL_CREDIT", base.from_string, fields);
            base.export_element (obj, "MarketStatementDescription", "DAILY_INITIAL_MARKET", base.from_string, fields);
            base.export_element (obj, "MarketStatementDescription", "MONTHLY_INITIAL_MARKET", base.from_string, fields);
            base.export_element (obj, "MarketStatementDescription", "DAILY_RECALC_MARKET", base.from_string, fields);
            base.export_element (obj, "MarketStatementDescription", "MONTHLY_RECALC_MARKET", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:MQSDELType.ADD>([\s\S]*?)<\/cim:MQSDELType.ADD>/g, obj, "ADD", base.to_string, sub, context);
            base.parse_element (/<cim:MQSDELType.DEL>([\s\S]*?)<\/cim:MQSDELType.DEL>/g, obj, "DEL", base.to_string, sub, context);
            base.parse_element (/<cim:MQSDELType.CHG>([\s\S]*?)<\/cim:MQSDELType.CHG>/g, obj, "CHG", base.to_string, sub, context);
            bucket = context.parsed.MQSDELType;
            if (null == bucket)
                context.parsed.MQSDELType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MQSDELType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "MQSDELType", "ADD", base.from_string, fields);
            base.export_element (obj, "MQSDELType", "DEL", base.from_string, fields);
            base.export_element (obj, "MQSDELType", "CHG", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_TimeZoneType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TimeZoneType";
            base.parse_element (/<cim:TimeZoneType.PPT>([\s\S]*?)<\/cim:TimeZoneType.PPT>/g, obj, "PPT", base.to_string, sub, context);
            bucket = context.parsed.TimeZoneType;
            if (null == bucket)
                context.parsed.TimeZoneType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TimeZoneType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "TimeZoneType", "PPT", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_SchedClassType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SchedClassType";
            base.parse_element (/<cim:SchedClassType.P>([\s\S]*?)<\/cim:SchedClassType.P>/g, obj, "P", base.to_string, sub, context);
            base.parse_element (/<cim:SchedClassType.R>([\s\S]*?)<\/cim:SchedClassType.R>/g, obj, "R", base.to_string, sub, context);
            base.parse_element (/<cim:SchedClassType.F>([\s\S]*?)<\/cim:SchedClassType.F>/g, obj, "F", base.to_string, sub, context);
            bucket = context.parsed.SchedClassType;
            if (null == bucket)
                context.parsed.SchedClassType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SchedClassType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "SchedClassType", "P", base.from_string, fields);
            base.export_element (obj, "SchedClassType", "R", base.from_string, fields);
            base.export_element (obj, "SchedClassType", "F", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_OASISMarketType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OASISMarketType";
            base.parse_element (/<cim:OASISMarketType.IFM>([\s\S]*?)<\/cim:OASISMarketType.IFM>/g, obj, "IFM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISMarketType.RUC>([\s\S]*?)<\/cim:OASISMarketType.RUC>/g, obj, "RUC", base.to_string, sub, context);
            base.parse_element (/<cim:OASISMarketType.HASP>([\s\S]*?)<\/cim:OASISMarketType.HASP>/g, obj, "HASP", base.to_string, sub, context);
            base.parse_element (/<cim:OASISMarketType.RTM>([\s\S]*?)<\/cim:OASISMarketType.RTM>/g, obj, "RTM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISMarketType.N\/A>([\s\S]*?)<\/cim:OASISMarketType.N\/A>/g, obj, "N/A", base.to_string, sub, context);
            base.parse_element (/<cim:OASISMarketType.All>([\s\S]*?)<\/cim:OASISMarketType.All>/g, obj, "All", base.to_string, sub, context);
            bucket = context.parsed.OASISMarketType;
            if (null == bucket)
                context.parsed.OASISMarketType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OASISMarketType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "OASISMarketType", "IFM", base.from_string, fields);
            base.export_element (obj, "OASISMarketType", "RUC", base.from_string, fields);
            base.export_element (obj, "OASISMarketType", "HASP", base.from_string, fields);
            base.export_element (obj, "OASISMarketType", "RTM", base.from_string, fields);
            base.export_element (obj, "OASISMarketType", "N\/A", base.from_string, fields);
            base.export_element (obj, "OASISMarketType", "All", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_AllocationEnergyTypeCode (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AllocationEnergyTypeCode";
            base.parse_element (/<cim:AllocationEnergyTypeCode.DASE>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.DASE>/g, obj, "DASE", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.OE>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.OE>/g, obj, "OE", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.HASE>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.HASE>/g, obj, "HASE", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.SRE>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.SRE>/g, obj, "SRE", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.RED>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.RED>/g, obj, "RED", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.MSSLFE>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.MSSLFE>/g, obj, "MSSLFE", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.RE>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.RE>/g, obj, "RE", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.MLE>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.MLE>/g, obj, "MLE", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.SE>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.SE>/g, obj, "SE", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.RTSSE>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.RTSSE>/g, obj, "RTSSE", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.PE>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.PE>/g, obj, "PE", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.DAPE>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.DAPE>/g, obj, "DAPE", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.ESRT>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.ESRT>/g, obj, "ESRT", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.ESYS>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.ESYS>/g, obj, "ESYS", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.RMRD>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.RMRD>/g, obj, "RMRD", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.RMRR>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.RMRR>/g, obj, "RMRR", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.RMRS>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.RMRS>/g, obj, "RMRS", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.RMRT>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.RMRT>/g, obj, "RMRT", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.STRT>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.STRT>/g, obj, "STRT", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.SDWN>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.SDWN>/g, obj, "SDWN", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.TEST>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.TEST>/g, obj, "TEST", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.OVGN>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.OVGN>/g, obj, "OVGN", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.VS>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.VS>/g, obj, "VS", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.ETC>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.ETC>/g, obj, "ETC", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.TOR>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.TOR>/g, obj, "TOR", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.RSYS>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.RSYS>/g, obj, "RSYS", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.RCNG>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.RCNG>/g, obj, "RCNG", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.ACNG>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.ACNG>/g, obj, "ACNG", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.TCNG>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.TCNG>/g, obj, "TCNG", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.LMPM>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.LMPM>/g, obj, "LMPM", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.BS>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.BS>/g, obj, "BS", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.MINL>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.MINL>/g, obj, "MINL", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.SUMR>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.SUMR>/g, obj, "SUMR", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.RMRH>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.RMRH>/g, obj, "RMRH", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.SLIC>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.SLIC>/g, obj, "SLIC", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationEnergyTypeCode.OTHER>([\s\S]*?)<\/cim:AllocationEnergyTypeCode.OTHER>/g, obj, "OTHER", base.to_string, sub, context);
            bucket = context.parsed.AllocationEnergyTypeCode;
            if (null == bucket)
                context.parsed.AllocationEnergyTypeCode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AllocationEnergyTypeCode (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "AllocationEnergyTypeCode", "DASE", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "OE", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "HASE", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "SRE", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "RED", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "MSSLFE", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "RE", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "MLE", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "SE", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "RTSSE", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "PE", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "DAPE", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "ESRT", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "ESYS", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "RMRD", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "RMRR", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "RMRS", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "RMRT", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "STRT", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "SDWN", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "TEST", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "OVGN", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "VS", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "ETC", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "TOR", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "RSYS", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "RCNG", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "ACNG", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "TCNG", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "LMPM", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "BS", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "MINL", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "SUMR", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "RMRH", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "SLIC", base.from_string, fields);
            base.export_element (obj, "AllocationEnergyTypeCode", "OTHER", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:BidStatusType.CL>([\s\S]*?)<\/cim:BidStatusType.CL>/g, obj, "CL", base.to_string, sub, context);
            base.parse_element (/<cim:BidStatusType.RP>([\s\S]*?)<\/cim:BidStatusType.RP>/g, obj, "RP", base.to_string, sub, context);
            base.parse_element (/<cim:BidStatusType.RJ>([\s\S]*?)<\/cim:BidStatusType.RJ>/g, obj, "RJ", base.to_string, sub, context);
            base.parse_element (/<cim:BidStatusType.I>([\s\S]*?)<\/cim:BidStatusType.I>/g, obj, "I", base.to_string, sub, context);
            base.parse_element (/<cim:BidStatusType.CV>([\s\S]*?)<\/cim:BidStatusType.CV>/g, obj, "CV", base.to_string, sub, context);
            base.parse_element (/<cim:BidStatusType.CM>([\s\S]*?)<\/cim:BidStatusType.CM>/g, obj, "CM", base.to_string, sub, context);
            base.parse_element (/<cim:BidStatusType.V>([\s\S]*?)<\/cim:BidStatusType.V>/g, obj, "V", base.to_string, sub, context);
            base.parse_element (/<cim:BidStatusType.M>([\s\S]*?)<\/cim:BidStatusType.M>/g, obj, "M", base.to_string, sub, context);
            base.parse_element (/<cim:BidStatusType.CX>([\s\S]*?)<\/cim:BidStatusType.CX>/g, obj, "CX", base.to_string, sub, context);
            base.parse_element (/<cim:BidStatusType.O>([\s\S]*?)<\/cim:BidStatusType.O>/g, obj, "O", base.to_string, sub, context);
            bucket = context.parsed.BidStatusType;
            if (null == bucket)
                context.parsed.BidStatusType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_BidStatusType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "BidStatusType", "CL", base.from_string, fields);
            base.export_element (obj, "BidStatusType", "RP", base.from_string, fields);
            base.export_element (obj, "BidStatusType", "RJ", base.from_string, fields);
            base.export_element (obj, "BidStatusType", "I", base.from_string, fields);
            base.export_element (obj, "BidStatusType", "CV", base.from_string, fields);
            base.export_element (obj, "BidStatusType", "CM", base.from_string, fields);
            base.export_element (obj, "BidStatusType", "V", base.from_string, fields);
            base.export_element (obj, "BidStatusType", "M", base.from_string, fields);
            base.export_element (obj, "BidStatusType", "CX", base.from_string, fields);
            base.export_element (obj, "BidStatusType", "O", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_OASISBidReportType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OASISBidReportType";
            base.parse_element (/<cim:OASISBidReportType.BIDS_PUBLIC>([\s\S]*?)<\/cim:OASISBidReportType.BIDS_PUBLIC>/g, obj, "BIDS_PUBLIC", base.to_string, sub, context);
            bucket = context.parsed.OASISBidReportType;
            if (null == bucket)
                context.parsed.OASISBidReportType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OASISBidReportType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "OASISBidReportType", "BIDS_PUBLIC", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_SegmentCurveType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SegmentCurveType";
            base.parse_element (/<cim:SegmentCurveType.COST>([\s\S]*?)<\/cim:SegmentCurveType.COST>/g, obj, "COST", base.to_string, sub, context);
            base.parse_element (/<cim:SegmentCurveType.CONSULTATIVE>([\s\S]*?)<\/cim:SegmentCurveType.CONSULTATIVE>/g, obj, "CONSULTATIVE", base.to_string, sub, context);
            bucket = context.parsed.SegmentCurveType;
            if (null == bucket)
                context.parsed.SegmentCurveType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SegmentCurveType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "SegmentCurveType", "COST", base.from_string, fields);
            base.export_element (obj, "SegmentCurveType", "CONSULTATIVE", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_JobStartEndType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "JobStartEndType";
            base.parse_element (/<cim:JobStartEndType.NA>([\s\S]*?)<\/cim:JobStartEndType.NA>/g, obj, "NA", base.to_string, sub, context);
            base.parse_element (/<cim:JobStartEndType.START>([\s\S]*?)<\/cim:JobStartEndType.START>/g, obj, "START", base.to_string, sub, context);
            base.parse_element (/<cim:JobStartEndType.END>([\s\S]*?)<\/cim:JobStartEndType.END>/g, obj, "END", base.to_string, sub, context);
            bucket = context.parsed.JobStartEndType;
            if (null == bucket)
                context.parsed.JobStartEndType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_JobStartEndType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "JobStartEndType", "NA", base.from_string, fields);
            base.export_element (obj, "JobStartEndType", "START", base.from_string, fields);
            base.export_element (obj, "JobStartEndType", "END", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_LoadFollowingCapacityType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "LoadFollowingCapacityType";
            base.parse_element (/<cim:LoadFollowingCapacityType.UP>([\s\S]*?)<\/cim:LoadFollowingCapacityType.UP>/g, obj, "UP", base.to_string, sub, context);
            base.parse_element (/<cim:LoadFollowingCapacityType.DOWN>([\s\S]*?)<\/cim:LoadFollowingCapacityType.DOWN>/g, obj, "DOWN", base.to_string, sub, context);
            bucket = context.parsed.LoadFollowingCapacityType;
            if (null == bucket)
                context.parsed.LoadFollowingCapacityType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_LoadFollowingCapacityType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "LoadFollowingCapacityType", "UP", base.from_string, fields);
            base.export_element (obj, "LoadFollowingCapacityType", "DOWN", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_DAMMarketType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "DAMMarketType";
            base.parse_element (/<cim:DAMMarketType.DAM>([\s\S]*?)<\/cim:DAMMarketType.DAM>/g, obj, "DAM", base.to_string, sub, context);
            bucket = context.parsed.DAMMarketType;
            if (null == bucket)
                context.parsed.DAMMarketType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_DAMMarketType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "DAMMarketType", "DAM", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:MarketStatementDocStatus.APPROVED>([\s\S]*?)<\/cim:MarketStatementDocStatus.APPROVED>/g, obj, "APPROVED", base.to_string, sub, context);
            base.parse_element (/<cim:MarketStatementDocStatus.CANCELLED>([\s\S]*?)<\/cim:MarketStatementDocStatus.CANCELLED>/g, obj, "CANCELLED", base.to_string, sub, context);
            bucket = context.parsed.MarketStatementDocStatus;
            if (null == bucket)
                context.parsed.MarketStatementDocStatus = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MarketStatementDocStatus (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "MarketStatementDocStatus", "APPROVED", base.from_string, fields);
            base.export_element (obj, "MarketStatementDocStatus", "CANCELLED", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:RequestorRmrTest.MP>([\s\S]*?)<\/cim:RequestorRmrTest.MP>/g, obj, "MP", base.to_string, sub, context);
            base.parse_element (/<cim:RequestorRmrTest.ISO>([\s\S]*?)<\/cim:RequestorRmrTest.ISO>/g, obj, "ISO", base.to_string, sub, context);
            bucket = context.parsed.RequestorRmrTest;
            if (null == bucket)
                context.parsed.RequestorRmrTest = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_RequestorRmrTest (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "RequestorRmrTest", "MP", base.from_string, fields);
            base.export_element (obj, "RequestorRmrTest", "ISO", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:MarketStatementLineItemAliasName.TRADE_DATE>([\s\S]*?)<\/cim:MarketStatementLineItemAliasName.TRADE_DATE>/g, obj, "TRADE_DATE", base.to_string, sub, context);
            base.parse_element (/<cim:MarketStatementLineItemAliasName.PARENT_CHARGE_GROUP>([\s\S]*?)<\/cim:MarketStatementLineItemAliasName.PARENT_CHARGE_GROUP>/g, obj, "PARENT_CHARGE_GROUP", base.to_string, sub, context);
            base.parse_element (/<cim:MarketStatementLineItemAliasName.CHARGE_GROUP>([\s\S]*?)<\/cim:MarketStatementLineItemAliasName.CHARGE_GROUP>/g, obj, "CHARGE_GROUP", base.to_string, sub, context);
            base.parse_element (/<cim:MarketStatementLineItemAliasName.CHARGE_CODE_SUMMARY>([\s\S]*?)<\/cim:MarketStatementLineItemAliasName.CHARGE_CODE_SUMMARY>/g, obj, "CHARGE_CODE_SUMMARY", base.to_string, sub, context);
            base.parse_element (/<cim:MarketStatementLineItemAliasName.CHARGE_CODE_INTERVAL_TOTAL>([\s\S]*?)<\/cim:MarketStatementLineItemAliasName.CHARGE_CODE_INTERVAL_TOTAL>/g, obj, "CHARGE_CODE_INTERVAL_TOTAL", base.to_string, sub, context);
            base.parse_element (/<cim:MarketStatementLineItemAliasName.CHARGE_CODE_INTERVAL_DETAIL>([\s\S]*?)<\/cim:MarketStatementLineItemAliasName.CHARGE_CODE_INTERVAL_DETAIL>/g, obj, "CHARGE_CODE_INTERVAL_DETAIL", base.to_string, sub, context);
            bucket = context.parsed.MarketStatementLineItemAliasName;
            if (null == bucket)
                context.parsed.MarketStatementLineItemAliasName = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MarketStatementLineItemAliasName (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "MarketStatementLineItemAliasName", "TRADE_DATE", base.from_string, fields);
            base.export_element (obj, "MarketStatementLineItemAliasName", "PARENT_CHARGE_GROUP", base.from_string, fields);
            base.export_element (obj, "MarketStatementLineItemAliasName", "CHARGE_GROUP", base.from_string, fields);
            base.export_element (obj, "MarketStatementLineItemAliasName", "CHARGE_CODE_SUMMARY", base.from_string, fields);
            base.export_element (obj, "MarketStatementLineItemAliasName", "CHARGE_CODE_INTERVAL_TOTAL", base.from_string, fields);
            base.export_element (obj, "MarketStatementLineItemAliasName", "CHARGE_CODE_INTERVAL_DETAIL", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_CleanTradeProductType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CleanTradeProductType";
            base.parse_element (/<cim:CleanTradeProductType.PHY>([\s\S]*?)<\/cim:CleanTradeProductType.PHY>/g, obj, "PHY", base.to_string, sub, context);
            base.parse_element (/<cim:CleanTradeProductType.APN>([\s\S]*?)<\/cim:CleanTradeProductType.APN>/g, obj, "APN", base.to_string, sub, context);
            base.parse_element (/<cim:CleanTradeProductType.CPT>([\s\S]*?)<\/cim:CleanTradeProductType.CPT>/g, obj, "CPT", base.to_string, sub, context);
            base.parse_element (/<cim:CleanTradeProductType.RUT>([\s\S]*?)<\/cim:CleanTradeProductType.RUT>/g, obj, "RUT", base.to_string, sub, context);
            base.parse_element (/<cim:CleanTradeProductType.RDT>([\s\S]*?)<\/cim:CleanTradeProductType.RDT>/g, obj, "RDT", base.to_string, sub, context);
            base.parse_element (/<cim:CleanTradeProductType.SRT>([\s\S]*?)<\/cim:CleanTradeProductType.SRT>/g, obj, "SRT", base.to_string, sub, context);
            base.parse_element (/<cim:CleanTradeProductType.NRT>([\s\S]*?)<\/cim:CleanTradeProductType.NRT>/g, obj, "NRT", base.to_string, sub, context);
            bucket = context.parsed.CleanTradeProductType;
            if (null == bucket)
                context.parsed.CleanTradeProductType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CleanTradeProductType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "CleanTradeProductType", "PHY", base.from_string, fields);
            base.export_element (obj, "CleanTradeProductType", "APN", base.from_string, fields);
            base.export_element (obj, "CleanTradeProductType", "CPT", base.from_string, fields);
            base.export_element (obj, "CleanTradeProductType", "RUT", base.from_string, fields);
            base.export_element (obj, "CleanTradeProductType", "RDT", base.from_string, fields);
            base.export_element (obj, "CleanTradeProductType", "SRT", base.from_string, fields);
            base.export_element (obj, "CleanTradeProductType", "NRT", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_OASISIntervalType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OASISIntervalType";
            base.parse_element (/<cim:OASISIntervalType.BEGINNING>([\s\S]*?)<\/cim:OASISIntervalType.BEGINNING>/g, obj, "BEGINNING", base.to_string, sub, context);
            base.parse_element (/<cim:OASISIntervalType.ENDING>([\s\S]*?)<\/cim:OASISIntervalType.ENDING>/g, obj, "ENDING", base.to_string, sub, context);
            bucket = context.parsed.OASISIntervalType;
            if (null == bucket)
                context.parsed.OASISIntervalType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OASISIntervalType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "OASISIntervalType", "BEGINNING", base.from_string, fields);
            base.export_element (obj, "OASISIntervalType", "ENDING", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:MarketStatementDocType.CREDIT>([\s\S]*?)<\/cim:MarketStatementDocType.CREDIT>/g, obj, "CREDIT", base.to_string, sub, context);
            base.parse_element (/<cim:MarketStatementDocType.MARKET_INITIAL>([\s\S]*?)<\/cim:MarketStatementDocType.MARKET_INITIAL>/g, obj, "MARKET_INITIAL", base.to_string, sub, context);
            base.parse_element (/<cim:MarketStatementDocType.MARKET_RECALC>([\s\S]*?)<\/cim:MarketStatementDocType.MARKET_RECALC>/g, obj, "MARKET_RECALC", base.to_string, sub, context);
            bucket = context.parsed.MarketStatementDocType;
            if (null == bucket)
                context.parsed.MarketStatementDocType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MarketStatementDocType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "MarketStatementDocType", "CREDIT", base.from_string, fields);
            base.export_element (obj, "MarketStatementDocType", "MARKET_INITIAL", base.from_string, fields);
            base.export_element (obj, "MarketStatementDocType", "MARKET_RECALC", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:MeasurementTypeEMS.PF>([\s\S]*?)<\/cim:MeasurementTypeEMS.PF>/g, obj, "PF", base.to_string, sub, context);
            base.parse_element (/<cim:MeasurementTypeEMS.PIL>([\s\S]*?)<\/cim:MeasurementTypeEMS.PIL>/g, obj, "PIL", base.to_string, sub, context);
            base.parse_element (/<cim:MeasurementTypeEMS.PIAL>([\s\S]*?)<\/cim:MeasurementTypeEMS.PIAL>/g, obj, "PIAL", base.to_string, sub, context);
            base.parse_element (/<cim:MeasurementTypeEMS.PIML>([\s\S]*?)<\/cim:MeasurementTypeEMS.PIML>/g, obj, "PIML", base.to_string, sub, context);
            base.parse_element (/<cim:MeasurementTypeEMS.POL>([\s\S]*?)<\/cim:MeasurementTypeEMS.POL>/g, obj, "POL", base.to_string, sub, context);
            base.parse_element (/<cim:MeasurementTypeEMS.POAL>([\s\S]*?)<\/cim:MeasurementTypeEMS.POAL>/g, obj, "POAL", base.to_string, sub, context);
            base.parse_element (/<cim:MeasurementTypeEMS.OARL>([\s\S]*?)<\/cim:MeasurementTypeEMS.OARL>/g, obj, "OARL", base.to_string, sub, context);
            base.parse_element (/<cim:MeasurementTypeEMS.GO>([\s\S]*?)<\/cim:MeasurementTypeEMS.GO>/g, obj, "GO", base.to_string, sub, context);
            base.parse_element (/<cim:MeasurementTypeEMS.GMOL>([\s\S]*?)<\/cim:MeasurementTypeEMS.GMOL>/g, obj, "GMOL", base.to_string, sub, context);
            base.parse_element (/<cim:MeasurementTypeEMS.GNOL>([\s\S]*?)<\/cim:MeasurementTypeEMS.GNOL>/g, obj, "GNOL", base.to_string, sub, context);
            base.parse_element (/<cim:MeasurementTypeEMS.GR>([\s\S]*?)<\/cim:MeasurementTypeEMS.GR>/g, obj, "GR", base.to_string, sub, context);
            base.parse_element (/<cim:MeasurementTypeEMS.GS>([\s\S]*?)<\/cim:MeasurementTypeEMS.GS>/g, obj, "GS", base.to_string, sub, context);
            base.parse_element (/<cim:MeasurementTypeEMS.PP>([\s\S]*?)<\/cim:MeasurementTypeEMS.PP>/g, obj, "PP", base.to_string, sub, context);
            base.parse_element (/<cim:MeasurementTypeEMS.SL>([\s\S]*?)<\/cim:MeasurementTypeEMS.SL>/g, obj, "SL", base.to_string, sub, context);
            base.parse_element (/<cim:MeasurementTypeEMS.ACE>([\s\S]*?)<\/cim:MeasurementTypeEMS.ACE>/g, obj, "ACE", base.to_string, sub, context);
            base.parse_element (/<cim:MeasurementTypeEMS.INADV>([\s\S]*?)<\/cim:MeasurementTypeEMS.INADV>/g, obj, "INADV", base.to_string, sub, context);
            bucket = context.parsed.MeasurementTypeEMS;
            if (null == bucket)
                context.parsed.MeasurementTypeEMS = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MeasurementTypeEMS (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "MeasurementTypeEMS", "PF", base.from_string, fields);
            base.export_element (obj, "MeasurementTypeEMS", "PIL", base.from_string, fields);
            base.export_element (obj, "MeasurementTypeEMS", "PIAL", base.from_string, fields);
            base.export_element (obj, "MeasurementTypeEMS", "PIML", base.from_string, fields);
            base.export_element (obj, "MeasurementTypeEMS", "POL", base.from_string, fields);
            base.export_element (obj, "MeasurementTypeEMS", "POAL", base.from_string, fields);
            base.export_element (obj, "MeasurementTypeEMS", "OARL", base.from_string, fields);
            base.export_element (obj, "MeasurementTypeEMS", "GO", base.from_string, fields);
            base.export_element (obj, "MeasurementTypeEMS", "GMOL", base.from_string, fields);
            base.export_element (obj, "MeasurementTypeEMS", "GNOL", base.from_string, fields);
            base.export_element (obj, "MeasurementTypeEMS", "GR", base.from_string, fields);
            base.export_element (obj, "MeasurementTypeEMS", "GS", base.from_string, fields);
            base.export_element (obj, "MeasurementTypeEMS", "PP", base.from_string, fields);
            base.export_element (obj, "MeasurementTypeEMS", "SL", base.from_string, fields);
            base.export_element (obj, "MeasurementTypeEMS", "ACE", base.from_string, fields);
            base.export_element (obj, "MeasurementTypeEMS", "INADV", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_ResourceCertificationType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ResourceCertificationType";
            base.parse_element (/<cim:ResourceCertificationType.GT>([\s\S]*?)<\/cim:ResourceCertificationType.GT>/g, obj, "GT", base.to_string, sub, context);
            base.parse_element (/<cim:ResourceCertificationType.RG>([\s\S]*?)<\/cim:ResourceCertificationType.RG>/g, obj, "RG", base.to_string, sub, context);
            base.parse_element (/<cim:ResourceCertificationType.SR>([\s\S]*?)<\/cim:ResourceCertificationType.SR>/g, obj, "SR", base.to_string, sub, context);
            base.parse_element (/<cim:ResourceCertificationType.NR>([\s\S]*?)<\/cim:ResourceCertificationType.NR>/g, obj, "NR", base.to_string, sub, context);
            base.parse_element (/<cim:ResourceCertificationType.IR>([\s\S]*?)<\/cim:ResourceCertificationType.IR>/g, obj, "IR", base.to_string, sub, context);
            bucket = context.parsed.ResourceCertificationType;
            if (null == bucket)
                context.parsed.ResourceCertificationType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ResourceCertificationType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ResourceCertificationType", "GT", base.from_string, fields);
            base.export_element (obj, "ResourceCertificationType", "RG", base.from_string, fields);
            base.export_element (obj, "ResourceCertificationType", "SR", base.from_string, fields);
            base.export_element (obj, "ResourceCertificationType", "NR", base.from_string, fields);
            base.export_element (obj, "ResourceCertificationType", "IR", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_SelfSchedTypeRawBid (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SelfSchedTypeRawBid";
            base.parse_element (/<cim:SelfSchedTypeRawBid.PT>([\s\S]*?)<\/cim:SelfSchedTypeRawBid.PT>/g, obj, "PT", base.to_string, sub, context);
            base.parse_element (/<cim:SelfSchedTypeRawBid.ETC>([\s\S]*?)<\/cim:SelfSchedTypeRawBid.ETC>/g, obj, "ETC", base.to_string, sub, context);
            base.parse_element (/<cim:SelfSchedTypeRawBid.TOR>([\s\S]*?)<\/cim:SelfSchedTypeRawBid.TOR>/g, obj, "TOR", base.to_string, sub, context);
            base.parse_element (/<cim:SelfSchedTypeRawBid.RMT>([\s\S]*?)<\/cim:SelfSchedTypeRawBid.RMT>/g, obj, "RMT", base.to_string, sub, context);
            base.parse_element (/<cim:SelfSchedTypeRawBid.SP>([\s\S]*?)<\/cim:SelfSchedTypeRawBid.SP>/g, obj, "SP", base.to_string, sub, context);
            base.parse_element (/<cim:SelfSchedTypeRawBid.RA>([\s\S]*?)<\/cim:SelfSchedTypeRawBid.RA>/g, obj, "RA", base.to_string, sub, context);
            base.parse_element (/<cim:SelfSchedTypeRawBid.BAS>([\s\S]*?)<\/cim:SelfSchedTypeRawBid.BAS>/g, obj, "BAS", base.to_string, sub, context);
            base.parse_element (/<cim:SelfSchedTypeRawBid.LOF>([\s\S]*?)<\/cim:SelfSchedTypeRawBid.LOF>/g, obj, "LOF", base.to_string, sub, context);
            base.parse_element (/<cim:SelfSchedTypeRawBid.WHL>([\s\S]*?)<\/cim:SelfSchedTypeRawBid.WHL>/g, obj, "WHL", base.to_string, sub, context);
            base.parse_element (/<cim:SelfSchedTypeRawBid.LPT>([\s\S]*?)<\/cim:SelfSchedTypeRawBid.LPT>/g, obj, "LPT", base.to_string, sub, context);
            bucket = context.parsed.SelfSchedTypeRawBid;
            if (null == bucket)
                context.parsed.SelfSchedTypeRawBid = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SelfSchedTypeRawBid (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "SelfSchedTypeRawBid", "PT", base.from_string, fields);
            base.export_element (obj, "SelfSchedTypeRawBid", "ETC", base.from_string, fields);
            base.export_element (obj, "SelfSchedTypeRawBid", "TOR", base.from_string, fields);
            base.export_element (obj, "SelfSchedTypeRawBid", "RMT", base.from_string, fields);
            base.export_element (obj, "SelfSchedTypeRawBid", "SP", base.from_string, fields);
            base.export_element (obj, "SelfSchedTypeRawBid", "RA", base.from_string, fields);
            base.export_element (obj, "SelfSchedTypeRawBid", "BAS", base.from_string, fields);
            base.export_element (obj, "SelfSchedTypeRawBid", "LOF", base.from_string, fields);
            base.export_element (obj, "SelfSchedTypeRawBid", "WHL", base.from_string, fields);
            base.export_element (obj, "SelfSchedTypeRawBid", "LPT", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_DispatchTransactionType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "DispatchTransactionType";
            base.parse_element (/<cim:DispatchTransactionType.Purchase>([\s\S]*?)<\/cim:DispatchTransactionType.Purchase>/g, obj, "Purchase", base.to_string, sub, context);
            base.parse_element (/<cim:DispatchTransactionType.Sale>([\s\S]*?)<\/cim:DispatchTransactionType.Sale>/g, obj, "Sale", base.to_string, sub, context);
            bucket = context.parsed.DispatchTransactionType;
            if (null == bucket)
                context.parsed.DispatchTransactionType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_DispatchTransactionType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "DispatchTransactionType", "Purchase", base.from_string, fields);
            base.export_element (obj, "DispatchTransactionType", "Sale", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:SelfScheduleTypeMB.RMR>([\s\S]*?)<\/cim:SelfScheduleTypeMB.RMR>/g, obj, "RMR", base.to_string, sub, context);
            bucket = context.parsed.SelfScheduleTypeMB;
            if (null == bucket)
                context.parsed.SelfScheduleTypeMB = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SelfScheduleTypeMB (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "SelfScheduleTypeMB", "RMR", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:PriceSetFlag.Y>([\s\S]*?)<\/cim:PriceSetFlag.Y>/g, obj, "Y", base.to_string, sub, context);
            base.parse_element (/<cim:PriceSetFlag.S>([\s\S]*?)<\/cim:PriceSetFlag.S>/g, obj, "S", base.to_string, sub, context);
            base.parse_element (/<cim:PriceSetFlag.N>([\s\S]*?)<\/cim:PriceSetFlag.N>/g, obj, "N", base.to_string, sub, context);
            bucket = context.parsed.PriceSetFlag;
            if (null == bucket)
                context.parsed.PriceSetFlag = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PriceSetFlag (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "PriceSetFlag", "Y", base.from_string, fields);
            base.export_element (obj, "PriceSetFlag", "S", base.from_string, fields);
            base.export_element (obj, "PriceSetFlag", "N", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_LFCResourceType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "LFCResourceType";
            base.parse_element (/<cim:LFCResourceType.GEN>([\s\S]*?)<\/cim:LFCResourceType.GEN>/g, obj, "GEN", base.to_string, sub, context);
            base.parse_element (/<cim:LFCResourceType.PUMP>([\s\S]*?)<\/cim:LFCResourceType.PUMP>/g, obj, "PUMP", base.to_string, sub, context);
            bucket = context.parsed.LFCResourceType;
            if (null == bucket)
                context.parsed.LFCResourceType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_LFCResourceType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "LFCResourceType", "GEN", base.from_string, fields);
            base.export_element (obj, "LFCResourceType", "PUMP", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_UOMType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "UOMType";
            base.parse_element (/<cim:UOMType.MW>([\s\S]*?)<\/cim:UOMType.MW>/g, obj, "MW", base.to_string, sub, context);
            base.parse_element (/<cim:UOMType.MWh>([\s\S]*?)<\/cim:UOMType.MWh>/g, obj, "MWh", base.to_string, sub, context);
            base.parse_element (/<cim:UOMType.US$>([\s\S]*?)<\/cim:UOMType.US$>/g, obj, "US$", base.to_string, sub, context);
            base.parse_element (/<cim:UOMType.%>([\s\S]*?)<\/cim:UOMType.%>/g, obj, "%", base.to_string, sub, context);
            base.parse_element (/<cim:UOMType.INTEGER>([\s\S]*?)<\/cim:UOMType.INTEGER>/g, obj, "INTEGER", base.to_string, sub, context);
            base.parse_element (/<cim:UOMType.FLAG>([\s\S]*?)<\/cim:UOMType.FLAG>/g, obj, "FLAG", base.to_string, sub, context);
            base.parse_element (/<cim:UOMType.$\/mmBTU>([\s\S]*?)<\/cim:UOMType.$\/mmBTU>/g, obj, "$/mmBTU", base.to_string, sub, context);
            base.parse_element (/<cim:UOMType.$\/lb>([\s\S]*?)<\/cim:UOMType.$\/lb>/g, obj, "$/lb", base.to_string, sub, context);
            base.parse_element (/<cim:UOMType.US$\/MW>([\s\S]*?)<\/cim:UOMType.US$\/MW>/g, obj, "US$/MW", base.to_string, sub, context);
            base.parse_element (/<cim:UOMType.US$\/MWh>([\s\S]*?)<\/cim:UOMType.US$\/MWh>/g, obj, "US$/MWh", base.to_string, sub, context);
            base.parse_element (/<cim:UOMType.FACTOR>([\s\S]*?)<\/cim:UOMType.FACTOR>/g, obj, "FACTOR", base.to_string, sub, context);
            bucket = context.parsed.UOMType;
            if (null == bucket)
                context.parsed.UOMType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_UOMType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "UOMType", "MW", base.from_string, fields);
            base.export_element (obj, "UOMType", "MWh", base.from_string, fields);
            base.export_element (obj, "UOMType", "US$", base.from_string, fields);
            base.export_element (obj, "UOMType", "%", base.from_string, fields);
            base.export_element (obj, "UOMType", "INTEGER", base.from_string, fields);
            base.export_element (obj, "UOMType", "FLAG", base.from_string, fields);
            base.export_element (obj, "UOMType", "$\/mmBTU", base.from_string, fields);
            base.export_element (obj, "UOMType", "$\/lb", base.from_string, fields);
            base.export_element (obj, "UOMType", "US$\/MW", base.from_string, fields);
            base.export_element (obj, "UOMType", "US$\/MWh", base.from_string, fields);
            base.export_element (obj, "UOMType", "FACTOR", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:ZoneType.LOADZONE>([\s\S]*?)<\/cim:ZoneType.LOADZONE>/g, obj, "LOADZONE", base.to_string, sub, context);
            base.parse_element (/<cim:ZoneType.TRADINGHUB>([\s\S]*?)<\/cim:ZoneType.TRADINGHUB>/g, obj, "TRADINGHUB", base.to_string, sub, context);
            base.parse_element (/<cim:ZoneType.RUCZONE>([\s\S]*?)<\/cim:ZoneType.RUCZONE>/g, obj, "RUCZONE", base.to_string, sub, context);
            base.parse_element (/<cim:ZoneType.ASREGION>([\s\S]*?)<\/cim:ZoneType.ASREGION>/g, obj, "ASREGION", base.to_string, sub, context);
            base.parse_element (/<cim:ZoneType.DCA>([\s\S]*?)<\/cim:ZoneType.DCA>/g, obj, "DCA", base.to_string, sub, context);
            bucket = context.parsed.ZoneType;
            if (null == bucket)
                context.parsed.ZoneType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ZoneType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ZoneType", "LOADZONE", base.from_string, fields);
            base.export_element (obj, "ZoneType", "TRADINGHUB", base.from_string, fields);
            base.export_element (obj, "ZoneType", "RUCZONE", base.from_string, fields);
            base.export_element (obj, "ZoneType", "ASREGION", base.from_string, fields);
            base.export_element (obj, "ZoneType", "DCA", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_JobScheduleType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "JobScheduleType";
            base.parse_element (/<cim:JobScheduleType.CRITICAL>([\s\S]*?)<\/cim:JobScheduleType.CRITICAL>/g, obj, "CRITICAL", base.to_string, sub, context);
            base.parse_element (/<cim:JobScheduleType.NONCRITICAL>([\s\S]*?)<\/cim:JobScheduleType.NONCRITICAL>/g, obj, "NONCRITICAL", base.to_string, sub, context);
            bucket = context.parsed.JobScheduleType;
            if (null == bucket)
                context.parsed.JobScheduleType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_JobScheduleType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "JobScheduleType", "CRITICAL", base.from_string, fields);
            base.export_element (obj, "JobScheduleType", "NONCRITICAL", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_DispatchAcceptStatus (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "DispatchAcceptStatus";
            base.parse_element (/<cim:DispatchAcceptStatus.NON_RESPONSE>([\s\S]*?)<\/cim:DispatchAcceptStatus.NON_RESPONSE>/g, obj, "NON_RESPONSE", base.to_string, sub, context);
            base.parse_element (/<cim:DispatchAcceptStatus.OK>([\s\S]*?)<\/cim:DispatchAcceptStatus.OK>/g, obj, "OK", base.to_string, sub, context);
            base.parse_element (/<cim:DispatchAcceptStatus.CANNOT>([\s\S]*?)<\/cim:DispatchAcceptStatus.CANNOT>/g, obj, "CANNOT", base.to_string, sub, context);
            base.parse_element (/<cim:DispatchAcceptStatus.ACCEPT>([\s\S]*?)<\/cim:DispatchAcceptStatus.ACCEPT>/g, obj, "ACCEPT", base.to_string, sub, context);
            base.parse_element (/<cim:DispatchAcceptStatus.DECLINE>([\s\S]*?)<\/cim:DispatchAcceptStatus.DECLINE>/g, obj, "DECLINE", base.to_string, sub, context);
            base.parse_element (/<cim:DispatchAcceptStatus.PARTIAL>([\s\S]*?)<\/cim:DispatchAcceptStatus.PARTIAL>/g, obj, "PARTIAL", base.to_string, sub, context);
            bucket = context.parsed.DispatchAcceptStatus;
            if (null == bucket)
                context.parsed.DispatchAcceptStatus = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_DispatchAcceptStatus (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "DispatchAcceptStatus", "NON_RESPONSE", base.from_string, fields);
            base.export_element (obj, "DispatchAcceptStatus", "OK", base.from_string, fields);
            base.export_element (obj, "DispatchAcceptStatus", "CANNOT", base.from_string, fields);
            base.export_element (obj, "DispatchAcceptStatus", "ACCEPT", base.from_string, fields);
            base.export_element (obj, "DispatchAcceptStatus", "DECLINE", base.from_string, fields);
            base.export_element (obj, "DispatchAcceptStatus", "PARTIAL", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_MktSubClassType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MktSubClassType";
            base.parse_element (/<cim:MktSubClassType.Forecasted_UDC_Direct_Access_Load>([\s\S]*?)<\/cim:MktSubClassType.Forecasted_UDC_Direct_Access_Load>/g, obj, "Forecasted_UDC_Direct_Access_Load", base.to_string, sub, context);
            base.parse_element (/<cim:MktSubClassType.Day_Ahead_RMR>([\s\S]*?)<\/cim:MktSubClassType.Day_Ahead_RMR>/g, obj, "Day_Ahead_RMR", base.to_string, sub, context);
            base.parse_element (/<cim:MktSubClassType.Ten_Min_Expost_Market_Info>([\s\S]*?)<\/cim:MktSubClassType.Ten_Min_Expost_Market_Info>/g, obj, "Ten_Min_Expost_Market_Info", base.to_string, sub, context);
            base.parse_element (/<cim:MktSubClassType.Day_Ahead_Interim_Market_Info>([\s\S]*?)<\/cim:MktSubClassType.Day_Ahead_Interim_Market_Info>/g, obj, "Day_Ahead_Interim_Market_Info", base.to_string, sub, context);
            base.parse_element (/<cim:MktSubClassType.Day_Ahead_Final_Market_Info>([\s\S]*?)<\/cim:MktSubClassType.Day_Ahead_Final_Market_Info>/g, obj, "Day_Ahead_Final_Market_Info", base.to_string, sub, context);
            base.parse_element (/<cim:MktSubClassType.TTC\/ATC_Forecast_Information>([\s\S]*?)<\/cim:MktSubClassType.TTC\/ATC_Forecast_Information>/g, obj, "TTC/ATC_Forecast_Information", base.to_string, sub, context);
            base.parse_element (/<cim:MktSubClassType.TTC\/ATC_Hourly_Forecast>([\s\S]*?)<\/cim:MktSubClassType.TTC\/ATC_Hourly_Forecast>/g, obj, "TTC/ATC_Hourly_Forecast", base.to_string, sub, context);
            base.parse_element (/<cim:MktSubClassType.Branch_Group_Derates>([\s\S]*?)<\/cim:MktSubClassType.Branch_Group_Derates>/g, obj, "Branch_Group_Derates", base.to_string, sub, context);
            base.parse_element (/<cim:MktSubClassType.Hour_Ahead_Market_Info>([\s\S]*?)<\/cim:MktSubClassType.Hour_Ahead_Market_Info>/g, obj, "Hour_Ahead_Market_Info", base.to_string, sub, context);
            base.parse_element (/<cim:MktSubClassType.Hourly_Expost_Market_Info>([\s\S]*?)<\/cim:MktSubClassType.Hourly_Expost_Market_Info>/g, obj, "Hourly_Expost_Market_Info", base.to_string, sub, context);
            base.parse_element (/<cim:MktSubClassType.Public_Bid_Data>([\s\S]*?)<\/cim:MktSubClassType.Public_Bid_Data>/g, obj, "Public_Bid_Data", base.to_string, sub, context);
            base.parse_element (/<cim:MktSubClassType.Day_Ahead_Forecast_Information>([\s\S]*?)<\/cim:MktSubClassType.Day_Ahead_Forecast_Information>/g, obj, "Day_Ahead_Forecast_Information", base.to_string, sub, context);
            bucket = context.parsed.MktSubClassType;
            if (null == bucket)
                context.parsed.MktSubClassType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MktSubClassType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "MktSubClassType", "Forecasted_UDC_Direct_Access_Load", base.from_string, fields);
            base.export_element (obj, "MktSubClassType", "Day_Ahead_RMR", base.from_string, fields);
            base.export_element (obj, "MktSubClassType", "Ten_Min_Expost_Market_Info", base.from_string, fields);
            base.export_element (obj, "MktSubClassType", "Day_Ahead_Interim_Market_Info", base.from_string, fields);
            base.export_element (obj, "MktSubClassType", "Day_Ahead_Final_Market_Info", base.from_string, fields);
            base.export_element (obj, "MktSubClassType", "TTC\/ATC_Forecast_Information", base.from_string, fields);
            base.export_element (obj, "MktSubClassType", "TTC\/ATC_Hourly_Forecast", base.from_string, fields);
            base.export_element (obj, "MktSubClassType", "Branch_Group_Derates", base.from_string, fields);
            base.export_element (obj, "MktSubClassType", "Hour_Ahead_Market_Info", base.from_string, fields);
            base.export_element (obj, "MktSubClassType", "Hourly_Expost_Market_Info", base.from_string, fields);
            base.export_element (obj, "MktSubClassType", "Public_Bid_Data", base.from_string, fields);
            base.export_element (obj, "MktSubClassType", "Day_Ahead_Forecast_Information", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_SpinningEventType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SpinningEventType";
            base.parse_element (/<cim:SpinningEventType.RZ>([\s\S]*?)<\/cim:SpinningEventType.RZ>/g, obj, "RZ", base.to_string, sub, context);
            base.parse_element (/<cim:SpinningEventType.AA>([\s\S]*?)<\/cim:SpinningEventType.AA>/g, obj, "AA", base.to_string, sub, context);
            base.parse_element (/<cim:SpinningEventType.CA>([\s\S]*?)<\/cim:SpinningEventType.CA>/g, obj, "CA", base.to_string, sub, context);
            bucket = context.parsed.SpinningEventType;
            if (null == bucket)
                context.parsed.SpinningEventType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SpinningEventType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "SpinningEventType", "RZ", base.from_string, fields);
            base.export_element (obj, "SpinningEventType", "AA", base.from_string, fields);
            base.export_element (obj, "SpinningEventType", "CA", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_BidPriceCapType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "BidPriceCapType";
            base.parse_element (/<cim:BidPriceCapType.ENERGY>([\s\S]*?)<\/cim:BidPriceCapType.ENERGY>/g, obj, "ENERGY", base.to_string, sub, context);
            base.parse_element (/<cim:BidPriceCapType.AS>([\s\S]*?)<\/cim:BidPriceCapType.AS>/g, obj, "AS", base.to_string, sub, context);
            base.parse_element (/<cim:BidPriceCapType.RUC>([\s\S]*?)<\/cim:BidPriceCapType.RUC>/g, obj, "RUC", base.to_string, sub, context);
            bucket = context.parsed.BidPriceCapType;
            if (null == bucket)
                context.parsed.BidPriceCapType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_BidPriceCapType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "BidPriceCapType", "ENERGY", base.from_string, fields);
            base.export_element (obj, "BidPriceCapType", "AS", base.from_string, fields);
            base.export_element (obj, "BidPriceCapType", "RUC", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:ADSInstructionTypeOOS.MIN_CONSTRAINT>([\s\S]*?)<\/cim:ADSInstructionTypeOOS.MIN_CONSTRAINT>/g, obj, "MIN_CONSTRAINT", base.to_string, sub, context);
            base.parse_element (/<cim:ADSInstructionTypeOOS.MAX_CONSTRAINT>([\s\S]*?)<\/cim:ADSInstructionTypeOOS.MAX_CONSTRAINT>/g, obj, "MAX_CONSTRAINT", base.to_string, sub, context);
            base.parse_element (/<cim:ADSInstructionTypeOOS.FIXED_CONSTRAINT>([\s\S]*?)<\/cim:ADSInstructionTypeOOS.FIXED_CONSTRAINT>/g, obj, "FIXED_CONSTRAINT", base.to_string, sub, context);
            bucket = context.parsed.ADSInstructionTypeOOS;
            if (null == bucket)
                context.parsed.ADSInstructionTypeOOS = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ADSInstructionTypeOOS (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ADSInstructionTypeOOS", "MIN_CONSTRAINT", base.from_string, fields);
            base.export_element (obj, "ADSInstructionTypeOOS", "MAX_CONSTRAINT", base.from_string, fields);
            base.export_element (obj, "ADSInstructionTypeOOS", "FIXED_CONSTRAINT", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_AlarmDisplayType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AlarmDisplayType";
            base.parse_element (/<cim:AlarmDisplayType.Disappear>([\s\S]*?)<\/cim:AlarmDisplayType.Disappear>/g, obj, "Disappear", base.to_string, sub, context);
            base.parse_element (/<cim:AlarmDisplayType.Appear>([\s\S]*?)<\/cim:AlarmDisplayType.Appear>/g, obj, "Appear", base.to_string, sub, context);
            base.parse_element (/<cim:AlarmDisplayType.Fleeting>([\s\S]*?)<\/cim:AlarmDisplayType.Fleeting>/g, obj, "Fleeting", base.to_string, sub, context);
            bucket = context.parsed.AlarmDisplayType;
            if (null == bucket)
                context.parsed.AlarmDisplayType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AlarmDisplayType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "AlarmDisplayType", "Disappear", base.from_string, fields);
            base.export_element (obj, "AlarmDisplayType", "Appear", base.from_string, fields);
            base.export_element (obj, "AlarmDisplayType", "Fleeting", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_OASISMeasType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OASISMeasType";
            base.parse_element (/<cim:OASISMeasType.MW>([\s\S]*?)<\/cim:OASISMeasType.MW>/g, obj, "MW", base.to_string, sub, context);
            base.parse_element (/<cim:OASISMeasType.MWh>([\s\S]*?)<\/cim:OASISMeasType.MWh>/g, obj, "MWh", base.to_string, sub, context);
            base.parse_element (/<cim:OASISMeasType.US$>([\s\S]*?)<\/cim:OASISMeasType.US$>/g, obj, "US$", base.to_string, sub, context);
            base.parse_element (/<cim:OASISMeasType.%>([\s\S]*?)<\/cim:OASISMeasType.%>/g, obj, "%", base.to_string, sub, context);
            base.parse_element (/<cim:OASISMeasType.INTEGER>([\s\S]*?)<\/cim:OASISMeasType.INTEGER>/g, obj, "INTEGER", base.to_string, sub, context);
            base.parse_element (/<cim:OASISMeasType.FLAG>([\s\S]*?)<\/cim:OASISMeasType.FLAG>/g, obj, "FLAG", base.to_string, sub, context);
            base.parse_element (/<cim:OASISMeasType.US$\/MW>([\s\S]*?)<\/cim:OASISMeasType.US$\/MW>/g, obj, "US$/MW", base.to_string, sub, context);
            base.parse_element (/<cim:OASISMeasType.US$\/MWh>([\s\S]*?)<\/cim:OASISMeasType.US$\/MWh>/g, obj, "US$/MWh", base.to_string, sub, context);
            base.parse_element (/<cim:OASISMeasType.FACTOR>([\s\S]*?)<\/cim:OASISMeasType.FACTOR>/g, obj, "FACTOR", base.to_string, sub, context);
            bucket = context.parsed.OASISMeasType;
            if (null == bucket)
                context.parsed.OASISMeasType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OASISMeasType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "OASISMeasType", "MW", base.from_string, fields);
            base.export_element (obj, "OASISMeasType", "MWh", base.from_string, fields);
            base.export_element (obj, "OASISMeasType", "US$", base.from_string, fields);
            base.export_element (obj, "OASISMeasType", "%", base.from_string, fields);
            base.export_element (obj, "OASISMeasType", "INTEGER", base.from_string, fields);
            base.export_element (obj, "OASISMeasType", "FLAG", base.from_string, fields);
            base.export_element (obj, "OASISMeasType", "US$\/MW", base.from_string, fields);
            base.export_element (obj, "OASISMeasType", "US$\/MWh", base.from_string, fields);
            base.export_element (obj, "OASISMeasType", "FACTOR", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_ADSInstructionTypeCommitment (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ADSInstructionTypeCommitment";
            base.parse_element (/<cim:ADSInstructionTypeCommitment.START_UP>([\s\S]*?)<\/cim:ADSInstructionTypeCommitment.START_UP>/g, obj, "START_UP", base.to_string, sub, context);
            base.parse_element (/<cim:ADSInstructionTypeCommitment.SHUT_DOWN>([\s\S]*?)<\/cim:ADSInstructionTypeCommitment.SHUT_DOWN>/g, obj, "SHUT_DOWN", base.to_string, sub, context);
            bucket = context.parsed.ADSInstructionTypeCommitment;
            if (null == bucket)
                context.parsed.ADSInstructionTypeCommitment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ADSInstructionTypeCommitment (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ADSInstructionTypeCommitment", "START_UP", base.from_string, fields);
            base.export_element (obj, "ADSInstructionTypeCommitment", "SHUT_DOWN", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_OASISReportType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OASISReportType";
            base.parse_element (/<cim:OASISReportType.AS_DA_RESULT>([\s\S]*?)<\/cim:OASISReportType.AS_DA_RESULT>/g, obj, "AS_DA_RESULT", base.to_string, sub, context);
            base.parse_element (/<cim:OASISReportType.AS_OP_RSRV>([\s\S]*?)<\/cim:OASISReportType.AS_OP_RSRV>/g, obj, "AS_OP_RSRV", base.to_string, sub, context);
            base.parse_element (/<cim:OASISReportType.AS_REQ>([\s\S]*?)<\/cim:OASISReportType.AS_REQ>/g, obj, "AS_REQ", base.to_string, sub, context);
            base.parse_element (/<cim:OASISReportType.AS_RTM_RESULT>([\s\S]*?)<\/cim:OASISReportType.AS_RTM_RESULT>/g, obj, "AS_RTM_RESULT", base.to_string, sub, context);
            base.parse_element (/<cim:OASISReportType.BIDS_PUBLIC>([\s\S]*?)<\/cim:OASISReportType.BIDS_PUBLIC>/g, obj, "BIDS_PUBLIC", base.to_string, sub, context);
            base.parse_element (/<cim:OASISReportType.CMMT_RA_MLC>([\s\S]*?)<\/cim:OASISReportType.CMMT_RA_MLC>/g, obj, "CMMT_RA_MLC", base.to_string, sub, context);
            base.parse_element (/<cim:OASISReportType.CMMT_RMR>([\s\S]*?)<\/cim:OASISReportType.CMMT_RMR>/g, obj, "CMMT_RMR", base.to_string, sub, context);
            base.parse_element (/<cim:OASISReportType.CRR_CLEARING>([\s\S]*?)<\/cim:OASISReportType.CRR_CLEARING>/g, obj, "CRR_CLEARING", base.to_string, sub, context);
            base.parse_element (/<cim:OASISReportType.CRR_INVENTORY>([\s\S]*?)<\/cim:OASISReportType.CRR_INVENTORY>/g, obj, "CRR_INVENTORY", base.to_string, sub, context);
            base.parse_element (/<cim:OASISReportType.ENE_EA>([\s\S]*?)<\/cim:OASISReportType.ENE_EA>/g, obj, "ENE_EA", base.to_string, sub, context);
            base.parse_element (/<cim:OASISReportType.ENE_HASP>([\s\S]*?)<\/cim:OASISReportType.ENE_HASP>/g, obj, "ENE_HASP", base.to_string, sub, context);
            base.parse_element (/<cim:OASISReportType.ENE_IFM>([\s\S]*?)<\/cim:OASISReportType.ENE_IFM>/g, obj, "ENE_IFM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISReportType.ENE_MPM>([\s\S]*?)<\/cim:OASISReportType.ENE_MPM>/g, obj, "ENE_MPM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISReportType.ENE_RTM>([\s\S]*?)<\/cim:OASISReportType.ENE_RTM>/g, obj, "ENE_RTM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISReportType.ENE_RUC>([\s\S]*?)<\/cim:OASISReportType.ENE_RUC>/g, obj, "ENE_RUC", base.to_string, sub, context);
            base.parse_element (/<cim:OASISReportType.LOSS_DA_HASP>([\s\S]*?)<\/cim:OASISReportType.LOSS_DA_HASP>/g, obj, "LOSS_DA_HASP", base.to_string, sub, context);
            base.parse_element (/<cim:OASISReportType.LOSS_RTM>([\s\S]*?)<\/cim:OASISReportType.LOSS_RTM>/g, obj, "LOSS_RTM", base.to_string, sub, context);
            base.parse_element (/<cim:OASISReportType.PRC_AS>([\s\S]*?)<\/cim:OASISReportType.PRC_AS>/g, obj, "PRC_AS", base.to_string, sub, context);
            base.parse_element (/<cim:OASISReportType.PRC_FUEL>([\s\S]*?)<\/cim:OASISReportType.PRC_FUEL>/g, obj, "PRC_FUEL", base.to_string, sub, context);
            base.parse_element (/<cim:OASISReportType.PRC_HRLY_LMP>([\s\S]*?)<\/cim:OASISReportType.PRC_HRLY_LMP>/g, obj, "PRC_HRLY_LMP", base.to_string, sub, context);
            base.parse_element (/<cim:OASISReportType.PRC_INTVL_LMP>([\s\S]*?)<\/cim:OASISReportType.PRC_INTVL_LMP>/g, obj, "PRC_INTVL_LMP", base.to_string, sub, context);
            base.parse_element (/<cim:OASISReportType.PRC_CNSTR>([\s\S]*?)<\/cim:OASISReportType.PRC_CNSTR>/g, obj, "PRC_CNSTR", base.to_string, sub, context);
            base.parse_element (/<cim:OASISReportType.SLD_FCST>([\s\S]*?)<\/cim:OASISReportType.SLD_FCST>/g, obj, "SLD_FCST", base.to_string, sub, context);
            base.parse_element (/<cim:OASISReportType.SLD_FCST_PEAK>([\s\S]*?)<\/cim:OASISReportType.SLD_FCST_PEAK>/g, obj, "SLD_FCST_PEAK", base.to_string, sub, context);
            base.parse_element (/<cim:OASISReportType.SLD_MKTS>([\s\S]*?)<\/cim:OASISReportType.SLD_MKTS>/g, obj, "SLD_MKTS", base.to_string, sub, context);
            base.parse_element (/<cim:OASISReportType.TRNS_ATC>([\s\S]*?)<\/cim:OASISReportType.TRNS_ATC>/g, obj, "TRNS_ATC", base.to_string, sub, context);
            base.parse_element (/<cim:OASISReportType.TRNS_OUTAGE>([\s\S]*?)<\/cim:OASISReportType.TRNS_OUTAGE>/g, obj, "TRNS_OUTAGE", base.to_string, sub, context);
            base.parse_element (/<cim:OASISReportType.TRNS_USAGE>([\s\S]*?)<\/cim:OASISReportType.TRNS_USAGE>/g, obj, "TRNS_USAGE", base.to_string, sub, context);
            bucket = context.parsed.OASISReportType;
            if (null == bucket)
                context.parsed.OASISReportType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OASISReportType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "OASISReportType", "AS_DA_RESULT", base.from_string, fields);
            base.export_element (obj, "OASISReportType", "AS_OP_RSRV", base.from_string, fields);
            base.export_element (obj, "OASISReportType", "AS_REQ", base.from_string, fields);
            base.export_element (obj, "OASISReportType", "AS_RTM_RESULT", base.from_string, fields);
            base.export_element (obj, "OASISReportType", "BIDS_PUBLIC", base.from_string, fields);
            base.export_element (obj, "OASISReportType", "CMMT_RA_MLC", base.from_string, fields);
            base.export_element (obj, "OASISReportType", "CMMT_RMR", base.from_string, fields);
            base.export_element (obj, "OASISReportType", "CRR_CLEARING", base.from_string, fields);
            base.export_element (obj, "OASISReportType", "CRR_INVENTORY", base.from_string, fields);
            base.export_element (obj, "OASISReportType", "ENE_EA", base.from_string, fields);
            base.export_element (obj, "OASISReportType", "ENE_HASP", base.from_string, fields);
            base.export_element (obj, "OASISReportType", "ENE_IFM", base.from_string, fields);
            base.export_element (obj, "OASISReportType", "ENE_MPM", base.from_string, fields);
            base.export_element (obj, "OASISReportType", "ENE_RTM", base.from_string, fields);
            base.export_element (obj, "OASISReportType", "ENE_RUC", base.from_string, fields);
            base.export_element (obj, "OASISReportType", "LOSS_DA_HASP", base.from_string, fields);
            base.export_element (obj, "OASISReportType", "LOSS_RTM", base.from_string, fields);
            base.export_element (obj, "OASISReportType", "PRC_AS", base.from_string, fields);
            base.export_element (obj, "OASISReportType", "PRC_FUEL", base.from_string, fields);
            base.export_element (obj, "OASISReportType", "PRC_HRLY_LMP", base.from_string, fields);
            base.export_element (obj, "OASISReportType", "PRC_INTVL_LMP", base.from_string, fields);
            base.export_element (obj, "OASISReportType", "PRC_CNSTR", base.from_string, fields);
            base.export_element (obj, "OASISReportType", "SLD_FCST", base.from_string, fields);
            base.export_element (obj, "OASISReportType", "SLD_FCST_PEAK", base.from_string, fields);
            base.export_element (obj, "OASISReportType", "SLD_MKTS", base.from_string, fields);
            base.export_element (obj, "OASISReportType", "TRNS_ATC", base.from_string, fields);
            base.export_element (obj, "OASISReportType", "TRNS_OUTAGE", base.from_string, fields);
            base.export_element (obj, "OASISReportType", "TRNS_USAGE", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_SourceSinkFlag (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SourceSinkFlag";
            base.parse_element (/<cim:SourceSinkFlag.CSNK>([\s\S]*?)<\/cim:SourceSinkFlag.CSNK>/g, obj, "CSNK", base.to_string, sub, context);
            base.parse_element (/<cim:SourceSinkFlag.CSRC>([\s\S]*?)<\/cim:SourceSinkFlag.CSRC>/g, obj, "CSRC", base.to_string, sub, context);
            bucket = context.parsed.SourceSinkFlag;
            if (null == bucket)
                context.parsed.SourceSinkFlag = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SourceSinkFlag (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "SourceSinkFlag", "CSNK", base.from_string, fields);
            base.export_element (obj, "SourceSinkFlag", "CSRC", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:UnitTypeEMS.MW>([\s\S]*?)<\/cim:UnitTypeEMS.MW>/g, obj, "MW", base.to_string, sub, context);
            base.parse_element (/<cim:UnitTypeEMS.FLAG>([\s\S]*?)<\/cim:UnitTypeEMS.FLAG>/g, obj, "FLAG", base.to_string, sub, context);
            bucket = context.parsed.UnitTypeEMS;
            if (null == bucket)
                context.parsed.UnitTypeEMS = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_UnitTypeEMS (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "UnitTypeEMS", "MW", base.from_string, fields);
            base.export_element (obj, "UnitTypeEMS", "FLAG", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:MarketProductTypeAsReq.RU>([\s\S]*?)<\/cim:MarketProductTypeAsReq.RU>/g, obj, "RU", base.to_string, sub, context);
            base.parse_element (/<cim:MarketProductTypeAsReq.RD>([\s\S]*?)<\/cim:MarketProductTypeAsReq.RD>/g, obj, "RD", base.to_string, sub, context);
            base.parse_element (/<cim:MarketProductTypeAsReq.SR>([\s\S]*?)<\/cim:MarketProductTypeAsReq.SR>/g, obj, "SR", base.to_string, sub, context);
            base.parse_element (/<cim:MarketProductTypeAsReq.NR>([\s\S]*?)<\/cim:MarketProductTypeAsReq.NR>/g, obj, "NR", base.to_string, sub, context);
            base.parse_element (/<cim:MarketProductTypeAsReq.AS>([\s\S]*?)<\/cim:MarketProductTypeAsReq.AS>/g, obj, "AS", base.to_string, sub, context);
            bucket = context.parsed.MarketProductTypeAsReq;
            if (null == bucket)
                context.parsed.MarketProductTypeAsReq = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MarketProductTypeAsReq (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "MarketProductTypeAsReq", "RU", base.from_string, fields);
            base.export_element (obj, "MarketProductTypeAsReq", "RD", base.from_string, fields);
            base.export_element (obj, "MarketProductTypeAsReq", "SR", base.from_string, fields);
            base.export_element (obj, "MarketProductTypeAsReq", "NR", base.from_string, fields);
            base.export_element (obj, "MarketProductTypeAsReq", "AS", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:AncillaryCommodityType.REGUP>([\s\S]*?)<\/cim:AncillaryCommodityType.REGUP>/g, obj, "REGUP", base.to_string, sub, context);
            base.parse_element (/<cim:AncillaryCommodityType.REGDN>([\s\S]*?)<\/cim:AncillaryCommodityType.REGDN>/g, obj, "REGDN", base.to_string, sub, context);
            base.parse_element (/<cim:AncillaryCommodityType.SPIN>([\s\S]*?)<\/cim:AncillaryCommodityType.SPIN>/g, obj, "SPIN", base.to_string, sub, context);
            base.parse_element (/<cim:AncillaryCommodityType.NONSPIN>([\s\S]*?)<\/cim:AncillaryCommodityType.NONSPIN>/g, obj, "NONSPIN", base.to_string, sub, context);
            bucket = context.parsed.AncillaryCommodityType;
            if (null == bucket)
                context.parsed.AncillaryCommodityType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AncillaryCommodityType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "AncillaryCommodityType", "REGUP", base.from_string, fields);
            base.export_element (obj, "AncillaryCommodityType", "REGDN", base.from_string, fields);
            base.export_element (obj, "AncillaryCommodityType", "SPIN", base.from_string, fields);
            base.export_element (obj, "AncillaryCommodityType", "NONSPIN", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_OASISErrDescription (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OASISErrDescription";
            base.parse_element (/<cim:OASISErrDescription.No data returned for the specified selection>([\s\S]*?)<\/cim:OASISErrDescription.No data returned for the specified selection>/g, obj, "No data returned for the specified selection", base.to_string, sub, context);
            base.parse_element (/<cim:OASISErrDescription.Invalid date format, please use valid date format>([\s\S]*?)<\/cim:OASISErrDescription.Invalid date format, please use valid date format>/g, obj, "Invalid date format, please use valid date format", base.to_string, sub, context);
            base.parse_element (/<cim:OASISErrDescription.Timed out waiting for query response>([\s\S]*?)<\/cim:OASISErrDescription.Timed out waiting for query response>/g, obj, "Timed out waiting for query response", base.to_string, sub, context);
            base.parse_element (/<cim:OASISErrDescription.Data can be requested for period of 31 days only>([\s\S]*?)<\/cim:OASISErrDescription.Data can be requested for period of 31 days only>/g, obj, "Data can be requested for period of 31 days only", base.to_string, sub, context);
            base.parse_element (/<cim:OASISErrDescription.Report name does not exit, please use valid report name>([\s\S]*?)<\/cim:OASISErrDescription.Report name does not exit, please use valid report name>/g, obj, "Report name does not exit, please use valid report name", base.to_string, sub, context);
            base.parse_element (/<cim:OASISErrDescription.Validation exception during transformation of XML>([\s\S]*?)<\/cim:OASISErrDescription.Validation exception during transformation of XML>/g, obj, "Validation exception during transformation of XML", base.to_string, sub, context);
            base.parse_element (/<cim:OASISErrDescription.Required file does not exist>([\s\S]*?)<\/cim:OASISErrDescription.Required file does not exist>/g, obj, "Required file does not exist", base.to_string, sub, context);
            base.parse_element (/<cim:OASISErrDescription.Out of memory exception>([\s\S]*?)<\/cim:OASISErrDescription.Out of memory exception>/g, obj, "Out of memory exception", base.to_string, sub, context);
            base.parse_element (/<cim:OASISErrDescription.Exceptions in reading and writing of XML files>([\s\S]*?)<\/cim:OASISErrDescription.Exceptions in reading and writing of XML files>/g, obj, "Exceptions in reading and writing of XML files", base.to_string, sub, context);
            base.parse_element (/<cim:OASISErrDescription.System Error>([\s\S]*?)<\/cim:OASISErrDescription.System Error>/g, obj, "System Error", base.to_string, sub, context);
            bucket = context.parsed.OASISErrDescription;
            if (null == bucket)
                context.parsed.OASISErrDescription = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OASISErrDescription (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "OASISErrDescription", "No data returned for the specified selection", base.from_string, fields);
            base.export_element (obj, "OASISErrDescription", "Invalid date format, please use valid date format", base.from_string, fields);
            base.export_element (obj, "OASISErrDescription", "Timed out waiting for query response", base.from_string, fields);
            base.export_element (obj, "OASISErrDescription", "Data can be requested for period of 31 days only", base.from_string, fields);
            base.export_element (obj, "OASISErrDescription", "Report name does not exit, please use valid report name", base.from_string, fields);
            base.export_element (obj, "OASISErrDescription", "Validation exception during transformation of XML", base.from_string, fields);
            base.export_element (obj, "OASISErrDescription", "Required file does not exist", base.from_string, fields);
            base.export_element (obj, "OASISErrDescription", "Out of memory exception", base.from_string, fields);
            base.export_element (obj, "OASISErrDescription", "Exceptions in reading and writing of XML files", base.from_string, fields);
            base.export_element (obj, "OASISErrDescription", "System Error", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_SpinningEventNameType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SpinningEventNameType";
            base.parse_element (/<cim:SpinningEventNameType.EASTERN>([\s\S]*?)<\/cim:SpinningEventNameType.EASTERN>/g, obj, "EASTERN", base.to_string, sub, context);
            base.parse_element (/<cim:SpinningEventNameType.RFC-SR>([\s\S]*?)<\/cim:SpinningEventNameType.RFC-SR>/g, obj, "RFC-SR", base.to_string, sub, context);
            base.parse_element (/<cim:SpinningEventNameType.SOUTH-S>([\s\S]*?)<\/cim:SpinningEventNameType.SOUTH-S>/g, obj, "SOUTH-S", base.to_string, sub, context);
            base.parse_element (/<cim:SpinningEventNameType.PJM>([\s\S]*?)<\/cim:SpinningEventNameType.PJM>/g, obj, "PJM", base.to_string, sub, context);
            bucket = context.parsed.SpinningEventNameType;
            if (null == bucket)
                context.parsed.SpinningEventNameType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SpinningEventNameType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "SpinningEventNameType", "EASTERN", base.from_string, fields);
            base.export_element (obj, "SpinningEventNameType", "RFC-SR", base.from_string, fields);
            base.export_element (obj, "SpinningEventNameType", "SOUTH-S", base.from_string, fields);
            base.export_element (obj, "SpinningEventNameType", "PJM", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_OASISMasterType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OASISMasterType";
            base.parse_element (/<cim:OASISMasterType.ATL_PNODE>([\s\S]*?)<\/cim:OASISMasterType.ATL_PNODE>/g, obj, "ATL_PNODE", base.to_string, sub, context);
            base.parse_element (/<cim:OASISMasterType.ATL_APNODE>([\s\S]*?)<\/cim:OASISMasterType.ATL_APNODE>/g, obj, "ATL_APNODE", base.to_string, sub, context);
            base.parse_element (/<cim:OASISMasterType.ATL_LDF>([\s\S]*?)<\/cim:OASISMasterType.ATL_LDF>/g, obj, "ATL_LDF", base.to_string, sub, context);
            base.parse_element (/<cim:OASISMasterType.ATL_LAP>([\s\S]*?)<\/cim:OASISMasterType.ATL_LAP>/g, obj, "ATL_LAP", base.to_string, sub, context);
            base.parse_element (/<cim:OASISMasterType.ATL_RESOURCE>([\s\S]*?)<\/cim:OASISMasterType.ATL_RESOURCE>/g, obj, "ATL_RESOURCE", base.to_string, sub, context);
            base.parse_element (/<cim:OASISMasterType.ATL_HUB>([\s\S]*?)<\/cim:OASISMasterType.ATL_HUB>/g, obj, "ATL_HUB", base.to_string, sub, context);
            base.parse_element (/<cim:OASISMasterType.ATL_PNODE_MAP>([\s\S]*?)<\/cim:OASISMasterType.ATL_PNODE_MAP>/g, obj, "ATL_PNODE_MAP", base.to_string, sub, context);
            base.parse_element (/<cim:OASISMasterType.ATL_AS_REGION>([\s\S]*?)<\/cim:OASISMasterType.ATL_AS_REGION>/g, obj, "ATL_AS_REGION", base.to_string, sub, context);
            base.parse_element (/<cim:OASISMasterType.ATL_AS_REGION_MAP>([\s\S]*?)<\/cim:OASISMasterType.ATL_AS_REGION_MAP>/g, obj, "ATL_AS_REGION_MAP", base.to_string, sub, context);
            base.parse_element (/<cim:OASISMasterType.ATL_RUC_ZONE>([\s\S]*?)<\/cim:OASISMasterType.ATL_RUC_ZONE>/g, obj, "ATL_RUC_ZONE", base.to_string, sub, context);
            base.parse_element (/<cim:OASISMasterType.ATL_RUC_ZONE_MAP>([\s\S]*?)<\/cim:OASISMasterType.ATL_RUC_ZONE_MAP>/g, obj, "ATL_RUC_ZONE_MAP", base.to_string, sub, context);
            base.parse_element (/<cim:OASISMasterType.ATL_TAC_AREA>([\s\S]*?)<\/cim:OASISMasterType.ATL_TAC_AREA>/g, obj, "ATL_TAC_AREA", base.to_string, sub, context);
            base.parse_element (/<cim:OASISMasterType.ATL_TAC_AREA_MAP>([\s\S]*?)<\/cim:OASISMasterType.ATL_TAC_AREA_MAP>/g, obj, "ATL_TAC_AREA_MAP", base.to_string, sub, context);
            base.parse_element (/<cim:OASISMasterType.ATL_TIEPOINT>([\s\S]*?)<\/cim:OASISMasterType.ATL_TIEPOINT>/g, obj, "ATL_TIEPOINT", base.to_string, sub, context);
            base.parse_element (/<cim:OASISMasterType.ATL_TI>([\s\S]*?)<\/cim:OASISMasterType.ATL_TI>/g, obj, "ATL_TI", base.to_string, sub, context);
            base.parse_element (/<cim:OASISMasterType.ATL_PUB>([\s\S]*?)<\/cim:OASISMasterType.ATL_PUB>/g, obj, "ATL_PUB", base.to_string, sub, context);
            base.parse_element (/<cim:OASISMasterType.ATL_STAT>([\s\S]*?)<\/cim:OASISMasterType.ATL_STAT>/g, obj, "ATL_STAT", base.to_string, sub, context);
            base.parse_element (/<cim:OASISMasterType.ATL_PUB_SCHED>([\s\S]*?)<\/cim:OASISMasterType.ATL_PUB_SCHED>/g, obj, "ATL_PUB_SCHED", base.to_string, sub, context);
            base.parse_element (/<cim:OASISMasterType.ATL_XREF>([\s\S]*?)<\/cim:OASISMasterType.ATL_XREF>/g, obj, "ATL_XREF", base.to_string, sub, context);
            bucket = context.parsed.OASISMasterType;
            if (null == bucket)
                context.parsed.OASISMasterType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OASISMasterType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "OASISMasterType", "ATL_PNODE", base.from_string, fields);
            base.export_element (obj, "OASISMasterType", "ATL_APNODE", base.from_string, fields);
            base.export_element (obj, "OASISMasterType", "ATL_LDF", base.from_string, fields);
            base.export_element (obj, "OASISMasterType", "ATL_LAP", base.from_string, fields);
            base.export_element (obj, "OASISMasterType", "ATL_RESOURCE", base.from_string, fields);
            base.export_element (obj, "OASISMasterType", "ATL_HUB", base.from_string, fields);
            base.export_element (obj, "OASISMasterType", "ATL_PNODE_MAP", base.from_string, fields);
            base.export_element (obj, "OASISMasterType", "ATL_AS_REGION", base.from_string, fields);
            base.export_element (obj, "OASISMasterType", "ATL_AS_REGION_MAP", base.from_string, fields);
            base.export_element (obj, "OASISMasterType", "ATL_RUC_ZONE", base.from_string, fields);
            base.export_element (obj, "OASISMasterType", "ATL_RUC_ZONE_MAP", base.from_string, fields);
            base.export_element (obj, "OASISMasterType", "ATL_TAC_AREA", base.from_string, fields);
            base.export_element (obj, "OASISMasterType", "ATL_TAC_AREA_MAP", base.from_string, fields);
            base.export_element (obj, "OASISMasterType", "ATL_TIEPOINT", base.from_string, fields);
            base.export_element (obj, "OASISMasterType", "ATL_TI", base.from_string, fields);
            base.export_element (obj, "OASISMasterType", "ATL_PUB", base.from_string, fields);
            base.export_element (obj, "OASISMasterType", "ATL_STAT", base.from_string, fields);
            base.export_element (obj, "OASISMasterType", "ATL_PUB_SCHED", base.from_string, fields);
            base.export_element (obj, "OASISMasterType", "ATL_XREF", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_OASISErrCode (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OASISErrCode";
            base.parse_element (/<cim:OASISErrCode.1000>([\s\S]*?)<\/cim:OASISErrCode.1000>/g, obj, "1000", base.to_string, sub, context);
            base.parse_element (/<cim:OASISErrCode.1001>([\s\S]*?)<\/cim:OASISErrCode.1001>/g, obj, "1001", base.to_string, sub, context);
            base.parse_element (/<cim:OASISErrCode.1002>([\s\S]*?)<\/cim:OASISErrCode.1002>/g, obj, "1002", base.to_string, sub, context);
            base.parse_element (/<cim:OASISErrCode.1003>([\s\S]*?)<\/cim:OASISErrCode.1003>/g, obj, "1003", base.to_string, sub, context);
            base.parse_element (/<cim:OASISErrCode.1004>([\s\S]*?)<\/cim:OASISErrCode.1004>/g, obj, "1004", base.to_string, sub, context);
            base.parse_element (/<cim:OASISErrCode.1005>([\s\S]*?)<\/cim:OASISErrCode.1005>/g, obj, "1005", base.to_string, sub, context);
            base.parse_element (/<cim:OASISErrCode.1006>([\s\S]*?)<\/cim:OASISErrCode.1006>/g, obj, "1006", base.to_string, sub, context);
            base.parse_element (/<cim:OASISErrCode.1007>([\s\S]*?)<\/cim:OASISErrCode.1007>/g, obj, "1007", base.to_string, sub, context);
            base.parse_element (/<cim:OASISErrCode.1008>([\s\S]*?)<\/cim:OASISErrCode.1008>/g, obj, "1008", base.to_string, sub, context);
            base.parse_element (/<cim:OASISErrCode.1009>([\s\S]*?)<\/cim:OASISErrCode.1009>/g, obj, "1009", base.to_string, sub, context);
            base.parse_element (/<cim:OASISErrCode.1010>([\s\S]*?)<\/cim:OASISErrCode.1010>/g, obj, "1010", base.to_string, sub, context);
            bucket = context.parsed.OASISErrCode;
            if (null == bucket)
                context.parsed.OASISErrCode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OASISErrCode (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "OASISErrCode", "1000", base.from_string, fields);
            base.export_element (obj, "OASISErrCode", "1001", base.from_string, fields);
            base.export_element (obj, "OASISErrCode", "1002", base.from_string, fields);
            base.export_element (obj, "OASISErrCode", "1003", base.from_string, fields);
            base.export_element (obj, "OASISErrCode", "1004", base.from_string, fields);
            base.export_element (obj, "OASISErrCode", "1005", base.from_string, fields);
            base.export_element (obj, "OASISErrCode", "1006", base.from_string, fields);
            base.export_element (obj, "OASISErrCode", "1007", base.from_string, fields);
            base.export_element (obj, "OASISErrCode", "1008", base.from_string, fields);
            base.export_element (obj, "OASISErrCode", "1009", base.from_string, fields);
            base.export_element (obj, "OASISErrCode", "1010", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:OrganisationType.CUSTOMER>([\s\S]*?)<\/cim:OrganisationType.CUSTOMER>/g, obj, "CUSTOMER", base.to_string, sub, context);
            base.parse_element (/<cim:OrganisationType.RTO>([\s\S]*?)<\/cim:OrganisationType.RTO>/g, obj, "RTO", base.to_string, sub, context);
            bucket = context.parsed.OrganisationType;
            if (null == bucket)
                context.parsed.OrganisationType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OrganisationType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "OrganisationType", "CUSTOMER", base.from_string, fields);
            base.export_element (obj, "OrganisationType", "RTO", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:SelfScheduleType.PT>([\s\S]*?)<\/cim:SelfScheduleType.PT>/g, obj, "PT", base.to_string, sub, context);
            base.parse_element (/<cim:SelfScheduleType.ETC>([\s\S]*?)<\/cim:SelfScheduleType.ETC>/g, obj, "ETC", base.to_string, sub, context);
            base.parse_element (/<cim:SelfScheduleType.TOR>([\s\S]*?)<\/cim:SelfScheduleType.TOR>/g, obj, "TOR", base.to_string, sub, context);
            base.parse_element (/<cim:SelfScheduleType.RMR>([\s\S]*?)<\/cim:SelfScheduleType.RMR>/g, obj, "RMR", base.to_string, sub, context);
            base.parse_element (/<cim:SelfScheduleType.RMT>([\s\S]*?)<\/cim:SelfScheduleType.RMT>/g, obj, "RMT", base.to_string, sub, context);
            base.parse_element (/<cim:SelfScheduleType.RGMR>([\s\S]*?)<\/cim:SelfScheduleType.RGMR>/g, obj, "RGMR", base.to_string, sub, context);
            base.parse_element (/<cim:SelfScheduleType.ORFC>([\s\S]*?)<\/cim:SelfScheduleType.ORFC>/g, obj, "ORFC", base.to_string, sub, context);
            base.parse_element (/<cim:SelfScheduleType.SP>([\s\S]*?)<\/cim:SelfScheduleType.SP>/g, obj, "SP", base.to_string, sub, context);
            base.parse_element (/<cim:SelfScheduleType.IFM>([\s\S]*?)<\/cim:SelfScheduleType.IFM>/g, obj, "IFM", base.to_string, sub, context);
            base.parse_element (/<cim:SelfScheduleType.RUC>([\s\S]*?)<\/cim:SelfScheduleType.RUC>/g, obj, "RUC", base.to_string, sub, context);
            base.parse_element (/<cim:SelfScheduleType.RA>([\s\S]*?)<\/cim:SelfScheduleType.RA>/g, obj, "RA", base.to_string, sub, context);
            base.parse_element (/<cim:SelfScheduleType.PUMP_ETC>([\s\S]*?)<\/cim:SelfScheduleType.PUMP_ETC>/g, obj, "PUMP_ETC", base.to_string, sub, context);
            base.parse_element (/<cim:SelfScheduleType.PUMP_TOR>([\s\S]*?)<\/cim:SelfScheduleType.PUMP_TOR>/g, obj, "PUMP_TOR", base.to_string, sub, context);
            base.parse_element (/<cim:SelfScheduleType.BAS>([\s\S]*?)<\/cim:SelfScheduleType.BAS>/g, obj, "BAS", base.to_string, sub, context);
            base.parse_element (/<cim:SelfScheduleType.LOF>([\s\S]*?)<\/cim:SelfScheduleType.LOF>/g, obj, "LOF", base.to_string, sub, context);
            base.parse_element (/<cim:SelfScheduleType.WHL>([\s\S]*?)<\/cim:SelfScheduleType.WHL>/g, obj, "WHL", base.to_string, sub, context);
            bucket = context.parsed.SelfScheduleType;
            if (null == bucket)
                context.parsed.SelfScheduleType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SelfScheduleType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "SelfScheduleType", "PT", base.from_string, fields);
            base.export_element (obj, "SelfScheduleType", "ETC", base.from_string, fields);
            base.export_element (obj, "SelfScheduleType", "TOR", base.from_string, fields);
            base.export_element (obj, "SelfScheduleType", "RMR", base.from_string, fields);
            base.export_element (obj, "SelfScheduleType", "RMT", base.from_string, fields);
            base.export_element (obj, "SelfScheduleType", "RGMR", base.from_string, fields);
            base.export_element (obj, "SelfScheduleType", "ORFC", base.from_string, fields);
            base.export_element (obj, "SelfScheduleType", "SP", base.from_string, fields);
            base.export_element (obj, "SelfScheduleType", "IFM", base.from_string, fields);
            base.export_element (obj, "SelfScheduleType", "RUC", base.from_string, fields);
            base.export_element (obj, "SelfScheduleType", "RA", base.from_string, fields);
            base.export_element (obj, "SelfScheduleType", "PUMP_ETC", base.from_string, fields);
            base.export_element (obj, "SelfScheduleType", "PUMP_TOR", base.from_string, fields);
            base.export_element (obj, "SelfScheduleType", "BAS", base.from_string, fields);
            base.export_element (obj, "SelfScheduleType", "LOF", base.from_string, fields);
            base.export_element (obj, "SelfScheduleType", "WHL", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_SourceSinkType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SourceSinkType";
            base.parse_element (/<cim:SourceSinkType.Source>([\s\S]*?)<\/cim:SourceSinkType.Source>/g, obj, "Source", base.to_string, sub, context);
            base.parse_element (/<cim:SourceSinkType.Sink>([\s\S]*?)<\/cim:SourceSinkType.Sink>/g, obj, "Sink", base.to_string, sub, context);
            base.parse_element (/<cim:SourceSinkType.Neither>([\s\S]*?)<\/cim:SourceSinkType.Neither>/g, obj, "Neither", base.to_string, sub, context);
            bucket = context.parsed.SourceSinkType;
            if (null == bucket)
                context.parsed.SourceSinkType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SourceSinkType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "SourceSinkType", "Source", base.from_string, fields);
            base.export_element (obj, "SourceSinkType", "Sink", base.from_string, fields);
            base.export_element (obj, "SourceSinkType", "Neither", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_SelfSchedTypeCleanBid (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SelfSchedTypeCleanBid";
            base.parse_element (/<cim:SelfSchedTypeCleanBid.PT>([\s\S]*?)<\/cim:SelfSchedTypeCleanBid.PT>/g, obj, "PT", base.to_string, sub, context);
            base.parse_element (/<cim:SelfSchedTypeCleanBid.ETC>([\s\S]*?)<\/cim:SelfSchedTypeCleanBid.ETC>/g, obj, "ETC", base.to_string, sub, context);
            base.parse_element (/<cim:SelfSchedTypeCleanBid.TOR>([\s\S]*?)<\/cim:SelfSchedTypeCleanBid.TOR>/g, obj, "TOR", base.to_string, sub, context);
            base.parse_element (/<cim:SelfSchedTypeCleanBid.RMT>([\s\S]*?)<\/cim:SelfSchedTypeCleanBid.RMT>/g, obj, "RMT", base.to_string, sub, context);
            base.parse_element (/<cim:SelfSchedTypeCleanBid.SP>([\s\S]*?)<\/cim:SelfSchedTypeCleanBid.SP>/g, obj, "SP", base.to_string, sub, context);
            base.parse_element (/<cim:SelfSchedTypeCleanBid.RA>([\s\S]*?)<\/cim:SelfSchedTypeCleanBid.RA>/g, obj, "RA", base.to_string, sub, context);
            base.parse_element (/<cim:SelfSchedTypeCleanBid.IFM>([\s\S]*?)<\/cim:SelfSchedTypeCleanBid.IFM>/g, obj, "IFM", base.to_string, sub, context);
            base.parse_element (/<cim:SelfSchedTypeCleanBid.BAS>([\s\S]*?)<\/cim:SelfSchedTypeCleanBid.BAS>/g, obj, "BAS", base.to_string, sub, context);
            base.parse_element (/<cim:SelfSchedTypeCleanBid.LOF>([\s\S]*?)<\/cim:SelfSchedTypeCleanBid.LOF>/g, obj, "LOF", base.to_string, sub, context);
            base.parse_element (/<cim:SelfSchedTypeCleanBid.WHL>([\s\S]*?)<\/cim:SelfSchedTypeCleanBid.WHL>/g, obj, "WHL", base.to_string, sub, context);
            base.parse_element (/<cim:SelfSchedTypeCleanBid.LPT>([\s\S]*?)<\/cim:SelfSchedTypeCleanBid.LPT>/g, obj, "LPT", base.to_string, sub, context);
            bucket = context.parsed.SelfSchedTypeCleanBid;
            if (null == bucket)
                context.parsed.SelfSchedTypeCleanBid = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SelfSchedTypeCleanBid (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "SelfSchedTypeCleanBid", "PT", base.from_string, fields);
            base.export_element (obj, "SelfSchedTypeCleanBid", "ETC", base.from_string, fields);
            base.export_element (obj, "SelfSchedTypeCleanBid", "TOR", base.from_string, fields);
            base.export_element (obj, "SelfSchedTypeCleanBid", "RMT", base.from_string, fields);
            base.export_element (obj, "SelfSchedTypeCleanBid", "SP", base.from_string, fields);
            base.export_element (obj, "SelfSchedTypeCleanBid", "RA", base.from_string, fields);
            base.export_element (obj, "SelfSchedTypeCleanBid", "IFM", base.from_string, fields);
            base.export_element (obj, "SelfSchedTypeCleanBid", "BAS", base.from_string, fields);
            base.export_element (obj, "SelfSchedTypeCleanBid", "LOF", base.from_string, fields);
            base.export_element (obj, "SelfSchedTypeCleanBid", "WHL", base.from_string, fields);
            base.export_element (obj, "SelfSchedTypeCleanBid", "LPT", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_TradeProductType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TradeProductType";
            base.parse_element (/<cim:TradeProductType.PHY>([\s\S]*?)<\/cim:TradeProductType.PHY>/g, obj, "PHY", base.to_string, sub, context);
            base.parse_element (/<cim:TradeProductType.APN>([\s\S]*?)<\/cim:TradeProductType.APN>/g, obj, "APN", base.to_string, sub, context);
            base.parse_element (/<cim:TradeProductType.RUT>([\s\S]*?)<\/cim:TradeProductType.RUT>/g, obj, "RUT", base.to_string, sub, context);
            base.parse_element (/<cim:TradeProductType.RDT>([\s\S]*?)<\/cim:TradeProductType.RDT>/g, obj, "RDT", base.to_string, sub, context);
            base.parse_element (/<cim:TradeProductType.SRT>([\s\S]*?)<\/cim:TradeProductType.SRT>/g, obj, "SRT", base.to_string, sub, context);
            base.parse_element (/<cim:TradeProductType.NRT>([\s\S]*?)<\/cim:TradeProductType.NRT>/g, obj, "NRT", base.to_string, sub, context);
            base.parse_element (/<cim:TradeProductType.CAP>([\s\S]*?)<\/cim:TradeProductType.CAP>/g, obj, "CAP", base.to_string, sub, context);
            bucket = context.parsed.TradeProductType;
            if (null == bucket)
                context.parsed.TradeProductType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TradeProductType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "TradeProductType", "PHY", base.from_string, fields);
            base.export_element (obj, "TradeProductType", "APN", base.from_string, fields);
            base.export_element (obj, "TradeProductType", "RUT", base.from_string, fields);
            base.export_element (obj, "TradeProductType", "RDT", base.from_string, fields);
            base.export_element (obj, "TradeProductType", "SRT", base.from_string, fields);
            base.export_element (obj, "TradeProductType", "NRT", base.from_string, fields);
            base.export_element (obj, "TradeProductType", "CAP", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_MarketScheduleServices (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketScheduleServices";
            base.parse_element (/<cim:MarketScheduleServices.retrieveDefaultBidCurves>([\s\S]*?)<\/cim:MarketScheduleServices.retrieveDefaultBidCurves>/g, obj, "retrieveDefaultBidCurves", base.to_string, sub, context);
            base.parse_element (/<cim:MarketScheduleServices.retrieveMarketAwards>([\s\S]*?)<\/cim:MarketScheduleServices.retrieveMarketAwards>/g, obj, "retrieveMarketAwards", base.to_string, sub, context);
            base.parse_element (/<cim:MarketScheduleServices.retrieveMPMResults>([\s\S]*?)<\/cim:MarketScheduleServices.retrieveMPMResults>/g, obj, "retrieveMPMResults", base.to_string, sub, context);
            base.parse_element (/<cim:MarketScheduleServices.retrieveSchedulePrices>([\s\S]*?)<\/cim:MarketScheduleServices.retrieveSchedulePrices>/g, obj, "retrieveSchedulePrices", base.to_string, sub, context);
            base.parse_element (/<cim:MarketScheduleServices.retrieveStartUpShutDownInstructions>([\s\S]*?)<\/cim:MarketScheduleServices.retrieveStartUpShutDownInstructions>/g, obj, "retrieveStartUpShutDownInstructions", base.to_string, sub, context);
            bucket = context.parsed.MarketScheduleServices;
            if (null == bucket)
                context.parsed.MarketScheduleServices = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MarketScheduleServices (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "MarketScheduleServices", "retrieveDefaultBidCurves", base.from_string, fields);
            base.export_element (obj, "MarketScheduleServices", "retrieveMarketAwards", base.from_string, fields);
            base.export_element (obj, "MarketScheduleServices", "retrieveMPMResults", base.from_string, fields);
            base.export_element (obj, "MarketScheduleServices", "retrieveSchedulePrices", base.from_string, fields);
            base.export_element (obj, "MarketScheduleServices", "retrieveStartUpShutDownInstructions", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_SystemType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SystemType";
            base.parse_element (/<cim:SystemType.OASIS>([\s\S]*?)<\/cim:SystemType.OASIS>/g, obj, "OASIS", base.to_string, sub, context);
            bucket = context.parsed.SystemType;
            if (null == bucket)
                context.parsed.SystemType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SystemType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "SystemType", "OASIS", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:EnergyTypeCode.DASE>([\s\S]*?)<\/cim:EnergyTypeCode.DASE>/g, obj, "DASE", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyTypeCode.DSSE>([\s\S]*?)<\/cim:EnergyTypeCode.DSSE>/g, obj, "DSSE", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyTypeCode.DABE>([\s\S]*?)<\/cim:EnergyTypeCode.DABE>/g, obj, "DABE", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyTypeCode.OE>([\s\S]*?)<\/cim:EnergyTypeCode.OE>/g, obj, "OE", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyTypeCode.HASE>([\s\S]*?)<\/cim:EnergyTypeCode.HASE>/g, obj, "HASE", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyTypeCode.SRE>([\s\S]*?)<\/cim:EnergyTypeCode.SRE>/g, obj, "SRE", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyTypeCode.RED>([\s\S]*?)<\/cim:EnergyTypeCode.RED>/g, obj, "RED", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyTypeCode.EDE>([\s\S]*?)<\/cim:EnergyTypeCode.EDE>/g, obj, "EDE", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyTypeCode.RMRE>([\s\S]*?)<\/cim:EnergyTypeCode.RMRE>/g, obj, "RMRE", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyTypeCode.MSSLFE>([\s\S]*?)<\/cim:EnergyTypeCode.MSSLFE>/g, obj, "MSSLFE", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyTypeCode.RE>([\s\S]*?)<\/cim:EnergyTypeCode.RE>/g, obj, "RE", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyTypeCode.MLE>([\s\S]*?)<\/cim:EnergyTypeCode.MLE>/g, obj, "MLE", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyTypeCode.SE>([\s\S]*?)<\/cim:EnergyTypeCode.SE>/g, obj, "SE", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyTypeCode.RTSSE>([\s\S]*?)<\/cim:EnergyTypeCode.RTSSE>/g, obj, "RTSSE", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyTypeCode.DMLE>([\s\S]*?)<\/cim:EnergyTypeCode.DMLE>/g, obj, "DMLE", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyTypeCode.PE>([\s\S]*?)<\/cim:EnergyTypeCode.PE>/g, obj, "PE", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyTypeCode.TEE>([\s\S]*?)<\/cim:EnergyTypeCode.TEE>/g, obj, "TEE", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyTypeCode.DAPE>([\s\S]*?)<\/cim:EnergyTypeCode.DAPE>/g, obj, "DAPE", base.to_string, sub, context);
            bucket = context.parsed.EnergyTypeCode;
            if (null == bucket)
                context.parsed.EnergyTypeCode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_EnergyTypeCode (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "EnergyTypeCode", "DASE", base.from_string, fields);
            base.export_element (obj, "EnergyTypeCode", "DSSE", base.from_string, fields);
            base.export_element (obj, "EnergyTypeCode", "DABE", base.from_string, fields);
            base.export_element (obj, "EnergyTypeCode", "OE", base.from_string, fields);
            base.export_element (obj, "EnergyTypeCode", "HASE", base.from_string, fields);
            base.export_element (obj, "EnergyTypeCode", "SRE", base.from_string, fields);
            base.export_element (obj, "EnergyTypeCode", "RED", base.from_string, fields);
            base.export_element (obj, "EnergyTypeCode", "EDE", base.from_string, fields);
            base.export_element (obj, "EnergyTypeCode", "RMRE", base.from_string, fields);
            base.export_element (obj, "EnergyTypeCode", "MSSLFE", base.from_string, fields);
            base.export_element (obj, "EnergyTypeCode", "RE", base.from_string, fields);
            base.export_element (obj, "EnergyTypeCode", "MLE", base.from_string, fields);
            base.export_element (obj, "EnergyTypeCode", "SE", base.from_string, fields);
            base.export_element (obj, "EnergyTypeCode", "RTSSE", base.from_string, fields);
            base.export_element (obj, "EnergyTypeCode", "DMLE", base.from_string, fields);
            base.export_element (obj, "EnergyTypeCode", "PE", base.from_string, fields);
            base.export_element (obj, "EnergyTypeCode", "TEE", base.from_string, fields);
            base.export_element (obj, "EnergyTypeCode", "DAPE", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:CurrentStatusSC.ACTIVE>([\s\S]*?)<\/cim:CurrentStatusSC.ACTIVE>/g, obj, "ACTIVE", base.to_string, sub, context);
            base.parse_element (/<cim:CurrentStatusSC.INACTIVE>([\s\S]*?)<\/cim:CurrentStatusSC.INACTIVE>/g, obj, "INACTIVE", base.to_string, sub, context);
            bucket = context.parsed.CurrentStatusSC;
            if (null == bucket)
                context.parsed.CurrentStatusSC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CurrentStatusSC (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "CurrentStatusSC", "ACTIVE", base.from_string, fields);
            base.export_element (obj, "CurrentStatusSC", "INACTIVE", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:TradeStatusType.RJ>([\s\S]*?)<\/cim:TradeStatusType.RJ>/g, obj, "RJ", base.to_string, sub, context);
            base.parse_element (/<cim:TradeStatusType.I>([\s\S]*?)<\/cim:TradeStatusType.I>/g, obj, "I", base.to_string, sub, context);
            base.parse_element (/<cim:TradeStatusType.V>([\s\S]*?)<\/cim:TradeStatusType.V>/g, obj, "V", base.to_string, sub, context);
            base.parse_element (/<cim:TradeStatusType.M>([\s\S]*?)<\/cim:TradeStatusType.M>/g, obj, "M", base.to_string, sub, context);
            base.parse_element (/<cim:TradeStatusType.CV>([\s\S]*?)<\/cim:TradeStatusType.CV>/g, obj, "CV", base.to_string, sub, context);
            base.parse_element (/<cim:TradeStatusType.CM>([\s\S]*?)<\/cim:TradeStatusType.CM>/g, obj, "CM", base.to_string, sub, context);
            base.parse_element (/<cim:TradeStatusType.CI>([\s\S]*?)<\/cim:TradeStatusType.CI>/g, obj, "CI", base.to_string, sub, context);
            base.parse_element (/<cim:TradeStatusType.CX>([\s\S]*?)<\/cim:TradeStatusType.CX>/g, obj, "CX", base.to_string, sub, context);
            base.parse_element (/<cim:TradeStatusType.O>([\s\S]*?)<\/cim:TradeStatusType.O>/g, obj, "O", base.to_string, sub, context);
            base.parse_element (/<cim:TradeStatusType.MT>([\s\S]*?)<\/cim:TradeStatusType.MT>/g, obj, "MT", base.to_string, sub, context);
            base.parse_element (/<cim:TradeStatusType.U>([\s\S]*?)<\/cim:TradeStatusType.U>/g, obj, "U", base.to_string, sub, context);
            bucket = context.parsed.TradeStatusType;
            if (null == bucket)
                context.parsed.TradeStatusType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TradeStatusType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "TradeStatusType", "RJ", base.from_string, fields);
            base.export_element (obj, "TradeStatusType", "I", base.from_string, fields);
            base.export_element (obj, "TradeStatusType", "V", base.from_string, fields);
            base.export_element (obj, "TradeStatusType", "M", base.from_string, fields);
            base.export_element (obj, "TradeStatusType", "CV", base.from_string, fields);
            base.export_element (obj, "TradeStatusType", "CM", base.from_string, fields);
            base.export_element (obj, "TradeStatusType", "CI", base.from_string, fields);
            base.export_element (obj, "TradeStatusType", "CX", base.from_string, fields);
            base.export_element (obj, "TradeStatusType", "O", base.from_string, fields);
            base.export_element (obj, "TradeStatusType", "MT", base.from_string, fields);
            base.export_element (obj, "TradeStatusType", "U", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_ResourceCertificationCategory (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ResourceCertificationCategory";
            base.parse_element (/<cim:ResourceCertificationCategory.DAM>([\s\S]*?)<\/cim:ResourceCertificationCategory.DAM>/g, obj, "DAM", base.to_string, sub, context);
            base.parse_element (/<cim:ResourceCertificationCategory.RTM>([\s\S]*?)<\/cim:ResourceCertificationCategory.RTM>/g, obj, "RTM", base.to_string, sub, context);
            base.parse_element (/<cim:ResourceCertificationCategory.RC>([\s\S]*?)<\/cim:ResourceCertificationCategory.RC>/g, obj, "RC", base.to_string, sub, context);
            base.parse_element (/<cim:ResourceCertificationCategory.GT>([\s\S]*?)<\/cim:ResourceCertificationCategory.GT>/g, obj, "GT", base.to_string, sub, context);
            bucket = context.parsed.ResourceCertificationCategory;
            if (null == bucket)
                context.parsed.ResourceCertificationCategory = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ResourceCertificationCategory (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ResourceCertificationCategory", "DAM", base.from_string, fields);
            base.export_element (obj, "ResourceCertificationCategory", "RTM", base.from_string, fields);
            base.export_element (obj, "ResourceCertificationCategory", "RC", base.from_string, fields);
            base.export_element (obj, "ResourceCertificationCategory", "GT", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:OrganisationCode.BILL_TO>([\s\S]*?)<\/cim:OrganisationCode.BILL_TO>/g, obj, "BILL_TO", base.to_string, sub, context);
            base.parse_element (/<cim:OrganisationCode.PAY_TO>([\s\S]*?)<\/cim:OrganisationCode.PAY_TO>/g, obj, "PAY_TO", base.to_string, sub, context);
            base.parse_element (/<cim:OrganisationCode.SOLD_TO>([\s\S]*?)<\/cim:OrganisationCode.SOLD_TO>/g, obj, "SOLD_TO", base.to_string, sub, context);
            base.parse_element (/<cim:OrganisationCode.PROVIDED_BY>([\s\S]*?)<\/cim:OrganisationCode.PROVIDED_BY>/g, obj, "PROVIDED_BY", base.to_string, sub, context);
            bucket = context.parsed.OrganisationCode;
            if (null == bucket)
                context.parsed.OrganisationCode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OrganisationCode (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "OrganisationCode", "BILL_TO", base.from_string, fields);
            base.export_element (obj, "OrganisationCode", "PAY_TO", base.from_string, fields);
            base.export_element (obj, "OrganisationCode", "SOLD_TO", base.from_string, fields);
            base.export_element (obj, "OrganisationCode", "PROVIDED_BY", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                export_TradeProductType: export_TradeProductType,
                export_OASISDataItems: export_OASISDataItems,
                parse_MktSubClassType: parse_MktSubClassType,
                parse_AllocationEnergyTypeCode: parse_AllocationEnergyTypeCode,
                parse_MarketStatementDocType: parse_MarketStatementDocType,
                parse_SchedClassType: parse_SchedClassType,
                parse_OASISMasterType: parse_OASISMasterType,
                export_ResourceCertificationCategory: export_ResourceCertificationCategory,
                parse_MeasurementTypeEMS: parse_MeasurementTypeEMS,
                parse_TradeProductType: parse_TradeProductType,
                export_MktSubClassType: export_MktSubClassType,
                export_SelfSchedTypeCleanBid: export_SelfSchedTypeCleanBid,
                parse_AlarmDisplayType: parse_AlarmDisplayType,
                export_MQSDELType: export_MQSDELType,
                export_OASISErrCode: export_OASISErrCode,
                export_TradeStatusType: export_TradeStatusType,
                parse_OASISErrDescription: parse_OASISErrDescription,
                export_UOMType: export_UOMType,
                parse_runTypeCAISO: parse_runTypeCAISO,
                parse_SelfSchedTypeRawBid: parse_SelfSchedTypeRawBid,
                parse_JobStartEndType: parse_JobStartEndType,
                parse_RequestorRmrTest: parse_RequestorRmrTest,
                export_MeasurementTypeEMS: export_MeasurementTypeEMS,
                parse_TradeStatusType: parse_TradeStatusType,
                export_ADSInstructionTypeCommitment: export_ADSInstructionTypeCommitment,
                export_LFCResourceType: export_LFCResourceType,
                parse_AdderType: parse_AdderType,
                export_ADSInstructionTypeOOS: export_ADSInstructionTypeOOS,
                parse_LoadFollowingCapacityType: parse_LoadFollowingCapacityType,
                export_OASISMasterType: export_OASISMasterType,
                parse_SelfScheduleTypeMB: parse_SelfScheduleTypeMB,
                export_OASISReportType: export_OASISReportType,
                export_MarketStatementDocStatus: export_MarketStatementDocStatus,
                export_OASISIntervalType: export_OASISIntervalType,
                export_SpinningEventNameType: export_SpinningEventNameType,
                parse_ResourceCertificationCategory: parse_ResourceCertificationCategory,
                parse_AncillaryCommodityType: parse_AncillaryCommodityType,
                export_SelfSchedTypeRawBid: export_SelfSchedTypeRawBid,
                export_AdderType: export_AdderType,
                export_SchedClassType: export_SchedClassType,
                parse_OASISReportType: parse_OASISReportType,
                parse_MQSDELType: parse_MQSDELType,
                parse_PriceSetFlag: parse_PriceSetFlag,
                export_AlarmDisplayType: export_AlarmDisplayType,
                parse_MarketScheduleServices: parse_MarketScheduleServices,
                parse_MarketProductTypeAsReq: parse_MarketProductTypeAsReq,
                export_PriceSetFlag: export_PriceSetFlag,
                parse_BidStatusType: parse_BidStatusType,
                export_AncillaryCommodityType: export_AncillaryCommodityType,
                export_JobFlagType: export_JobFlagType,
                export_SelfScheduleTypeMB: export_SelfScheduleTypeMB,
                parse_OASISMeasType: parse_OASISMeasType,
                parse_ADSInstructionTypeOOS: parse_ADSInstructionTypeOOS,
                export_OrganisationCode: export_OrganisationCode,
                parse_CleanTradeProductType: parse_CleanTradeProductType,
                parse_MarketStatementDocStatus: parse_MarketStatementDocStatus,
                parse_JobScheduleType: parse_JobScheduleType,
                export_AllocationEnergyTypeCode: export_AllocationEnergyTypeCode,
                export_SpinningEventType: export_SpinningEventType,
                export_JobScheduleType: export_JobScheduleType,
                parse_EnergyTypeCode: parse_EnergyTypeCode,
                parse_DispatchTransactionType: parse_DispatchTransactionType,
                parse_SegmentCurveType: parse_SegmentCurveType,
                export_JobStartEndType: export_JobStartEndType,
                parse_UnitTypeEMS: parse_UnitTypeEMS,
                parse_OASISIntervalType: parse_OASISIntervalType,
                parse_OASISStatusType: parse_OASISStatusType,
                export_BidPriceCapType: export_BidPriceCapType,
                export_BidStatusType: export_BidStatusType,
                export_SourceSinkFlag: export_SourceSinkFlag,
                export_MarketScheduleServices: export_MarketScheduleServices,
                export_SelfScheduleType: export_SelfScheduleType,
                export_DispatchAcceptStatus: export_DispatchAcceptStatus,
                parse_SelfScheduleType: parse_SelfScheduleType,
                parse_OASISErrCode: parse_OASISErrCode,
                parse_SelfSchedTypeCleanBid: parse_SelfSchedTypeCleanBid,
                parse_MarketStatementLineItemAliasName: parse_MarketStatementLineItemAliasName,
                parse_UOMType: parse_UOMType,
                parse_SpinningEventNameType: parse_SpinningEventNameType,
                parse_SpinningEventType: parse_SpinningEventType,
                export_CleanTradeProductType: export_CleanTradeProductType,
                parse_OrganisationType: parse_OrganisationType,
                export_OASISStatusType: export_OASISStatusType,
                export_TimeZoneType: export_TimeZoneType,
                export_DispatchTransactionType: export_DispatchTransactionType,
                parse_OrganisationCode: parse_OrganisationCode,
                parse_MarketStatementDescription: parse_MarketStatementDescription,
                parse_ADSInstructionTypeCommitment: parse_ADSInstructionTypeCommitment,
                export_SourceSinkType: export_SourceSinkType,
                export_DAMMarketType: export_DAMMarketType,
                parse_JobFlagType: parse_JobFlagType,
                export_EnergyTypeCode: export_EnergyTypeCode,
                export_LoadFollowingCapacityType: export_LoadFollowingCapacityType,
                parse_OASISDataItems: parse_OASISDataItems,
                export_ZoneType: export_ZoneType,
                export_MarketStatementLineItemAliasName: export_MarketStatementLineItemAliasName,
                parse_DAMMarketType: parse_DAMMarketType,
                export_OASISErrDescription: export_OASISErrDescription,
                export_OrganisationType: export_OrganisationType,
                parse_OASISBidReportType: parse_OASISBidReportType,
                parse_SystemType: parse_SystemType,
                export_runTypeCAISO: export_runTypeCAISO,
                parse_ResourceCertificationType: parse_ResourceCertificationType,
                export_UnitTypeEMS: export_UnitTypeEMS,
                export_SegmentCurveType: export_SegmentCurveType,
                export_MarketStatementDocType: export_MarketStatementDocType,
                export_OASISMarketType: export_OASISMarketType,
                export_CurrentStatusSC: export_CurrentStatusSC,
                parse_TimeZoneType: parse_TimeZoneType,
                parse_SourceSinkFlag: parse_SourceSinkFlag,
                parse_OASISMarketType: parse_OASISMarketType,
                export_RequestorRmrTest: export_RequestorRmrTest,
                export_MarketProductTypeAsReq: export_MarketProductTypeAsReq,
                export_ResourceCertificationType: export_ResourceCertificationType,
                export_MarketStatementDescription: export_MarketStatementDescription,
                parse_LFCResourceType: parse_LFCResourceType,
                parse_SourceSinkType: parse_SourceSinkType,
                export_SystemType: export_SystemType,
                parse_ZoneType: parse_ZoneType,
                export_OASISBidReportType: export_OASISBidReportType,
                parse_DispatchAcceptStatus: parse_DispatchAcceptStatus,
                parse_BidPriceCapType: parse_BidPriceCapType,
                parse_CurrentStatusSC: parse_CurrentStatusSC,
                export_OASISMeasType: export_OASISMeasType
            }
        );
    }
);