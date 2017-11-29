define
(
    ["model/base"],
    function (base)
    {

        class OASISStatusType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OASISStatusType;
                if (null == bucket)
                   cim_data.OASISStatusType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OASISStatusType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "OASISStatusType";
                base.parse_element (/<cim:OASISStatusType.Data_Transfer_Procedure_Initiated>([\s\S]*?)<\/cim:OASISStatusType.Data_Transfer_Procedure_Initiated>/g, obj, "Data_Transfer_Procedure_Initiated", base.to_string, sub, context);
                base.parse_element (/<cim:OASISStatusType.Valid>([\s\S]*?)<\/cim:OASISStatusType.Valid>/g, obj, "Valid", base.to_string, sub, context);
                base.parse_element (/<cim:OASISStatusType.Obsolete>([\s\S]*?)<\/cim:OASISStatusType.Obsolete>/g, obj, "Obsolete", base.to_string, sub, context);
                base.parse_element (/<cim:OASISStatusType.Data_Transfer_Succesful>([\s\S]*?)<\/cim:OASISStatusType.Data_Transfer_Succesful>/g, obj, "Data_Transfer_Succesful", base.to_string, sub, context);
                base.parse_element (/<cim:OASISStatusType.Push_Failed>([\s\S]*?)<\/cim:OASISStatusType.Push_Failed>/g, obj, "Push_Failed", base.to_string, sub, context);
                base.parse_element (/<cim:OASISStatusType.Forced_Termination>([\s\S]*?)<\/cim:OASISStatusType.Forced_Termination>/g, obj, "Forced_Termination", base.to_string, sub, context);

                var bucket = context.parsed.OASISStatusType;
                if (null == bucket)
                   context.parsed.OASISStatusType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "OASISStatusType", "Data_Transfer_Procedure_Initiated", base.from_string, fields);
                base.export_element (obj, "OASISStatusType", "Valid", base.from_string, fields);
                base.export_element (obj, "OASISStatusType", "Obsolete", base.from_string, fields);
                base.export_element (obj, "OASISStatusType", "Data_Transfer_Succesful", base.from_string, fields);
                base.export_element (obj, "OASISStatusType", "Push_Failed", base.from_string, fields);
                base.export_element (obj, "OASISStatusType", "Forced_Termination", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#OASISStatusType_collapse" aria-expanded="true" aria-controls="OASISStatusType_collapse">OASISStatusType</a>
<div id="OASISStatusType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#Data_Transfer_Procedure_Initiated}}<div><b>Data_Transfer_Procedure_Initiated</b>: {{Data_Transfer_Procedure_Initiated}}</div>{{/Data_Transfer_Procedure_Initiated}}
{{#Valid}}<div><b>Valid</b>: {{Valid}}</div>{{/Valid}}
{{#Obsolete}}<div><b>Obsolete</b>: {{Obsolete}}</div>{{/Obsolete}}
{{#Data_Transfer_Succesful}}<div><b>Data_Transfer_Succesful</b>: {{Data_Transfer_Succesful}}</div>{{/Data_Transfer_Succesful}}
{{#Push_Failed}}<div><b>Push_Failed</b>: {{Push_Failed}}</div>{{/Push_Failed}}
{{#Forced_Termination}}<div><b>Forced_Termination</b>: {{Forced_Termination}}</div>{{/Forced_Termination}}
</div>
`
                );
           }        }

        class OASISDataItems extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OASISDataItems;
                if (null == bucket)
                   cim_data.OASISDataItems = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OASISDataItems[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
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

                var bucket = context.parsed.OASISDataItems;
                if (null == bucket)
                   context.parsed.OASISDataItems = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#OASISDataItems_collapse" aria-expanded="true" aria-controls="OASISDataItems_collapse">OASISDataItems</a>
<div id="OASISDataItems_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#AS_CLEAR_ASMP_IFM}}<div><b>AS_CLEAR_ASMP_IFM</b>: {{AS_CLEAR_ASMP_IFM}}</div>{{/AS_CLEAR_ASMP_IFM}}
{{#AS_CLEAR_ASMP_RTM}}<div><b>AS_CLEAR_ASMP_RTM</b>: {{AS_CLEAR_ASMP_RTM}}</div>{{/AS_CLEAR_ASMP_RTM}}
{{#AS_CLEAR_COST_IFM}}<div><b>AS_CLEAR_COST_IFM</b>: {{AS_CLEAR_COST_IFM}}</div>{{/AS_CLEAR_COST_IFM}}
{{#AS_CLEAR_COST_RTM}}<div><b>AS_CLEAR_COST_RTM</b>: {{AS_CLEAR_COST_RTM}}</div>{{/AS_CLEAR_COST_RTM}}
{{#AS_CLEAR_MW_IFM}}<div><b>AS_CLEAR_MW_IFM</b>: {{AS_CLEAR_MW_IFM}}</div>{{/AS_CLEAR_MW_IFM}}
{{#AS_CLEAR_MW_RTM}}<div><b>AS_CLEAR_MW_RTM</b>: {{AS_CLEAR_MW_RTM}}</div>{{/AS_CLEAR_MW_RTM}}
{{#AS_GEN_TOTAL_MW_IFM}}<div><b>AS_GEN_TOTAL_MW_IFM</b>: {{AS_GEN_TOTAL_MW_IFM}}</div>{{/AS_GEN_TOTAL_MW_IFM}}
{{#AS_GEN_TOTAL_MW_RTM}}<div><b>AS_GEN_TOTAL_MW_RTM</b>: {{AS_GEN_TOTAL_MW_RTM}}</div>{{/AS_GEN_TOTAL_MW_RTM}}
{{#AS_IMP_TOTAL_MW_IFM}}<div><b>AS_IMP_TOTAL_MW_IFM</b>: {{AS_IMP_TOTAL_MW_IFM}}</div>{{/AS_IMP_TOTAL_MW_IFM}}
{{#AS_IMP_TOTAL_MW_RTM}}<div><b>AS_IMP_TOTAL_MW_RTM</b>: {{AS_IMP_TOTAL_MW_RTM}}</div>{{/AS_IMP_TOTAL_MW_RTM}}
{{#AS_LOAD_TOTAL_MW_IFM}}<div><b>AS_LOAD_TOTAL_MW_IFM</b>: {{AS_LOAD_TOTAL_MW_IFM}}</div>{{/AS_LOAD_TOTAL_MW_IFM}}
{{#AS_LOAD_TOTAL_MW_RTM}}<div><b>AS_LOAD_TOTAL_MW_RTM</b>: {{AS_LOAD_TOTAL_MW_RTM}}</div>{{/AS_LOAD_TOTAL_MW_RTM}}
{{#AS_REGION_value}}<div><b>AS_REGION_value</b>: {{AS_REGION_value}}</div>{{/AS_REGION_value}}
{{#AS_REGION_REQ_MAX}}<div><b>AS_REGION_REQ_MAX</b>: {{AS_REGION_REQ_MAX}}</div>{{/AS_REGION_REQ_MAX}}
{{#AS_REGION_REQ_MIN}}<div><b>AS_REGION_REQ_MIN</b>: {{AS_REGION_REQ_MIN}}</div>{{/AS_REGION_REQ_MIN}}
{{#AS_SELF_MW_IFM}}<div><b>AS_SELF_MW_IFM</b>: {{AS_SELF_MW_IFM}}</div>{{/AS_SELF_MW_IFM}}
{{#AS_SELF_MW_RTM}}<div><b>AS_SELF_MW_RTM</b>: {{AS_SELF_MW_RTM}}</div>{{/AS_SELF_MW_RTM}}
{{#AS_TOTAL_MW}}<div><b>AS_TOTAL_MW</b>: {{AS_TOTAL_MW}}</div>{{/AS_TOTAL_MW}}
{{#AS_TOTAL_MW_IFM}}<div><b>AS_TOTAL_MW_IFM</b>: {{AS_TOTAL_MW_IFM}}</div>{{/AS_TOTAL_MW_IFM}}
{{#AS_TOTAL_MW_RTM}}<div><b>AS_TOTAL_MW_RTM</b>: {{AS_TOTAL_MW_RTM}}</div>{{/AS_TOTAL_MW_RTM}}
{{#AS_TYPE}}<div><b>AS_TYPE</b>: {{AS_TYPE}}</div>{{/AS_TYPE}}
{{#AS_USER_RATE}}<div><b>AS_USER_RATE</b>: {{AS_USER_RATE}}</div>{{/AS_USER_RATE}}
{{#CA_value}}<div><b>CA_value</b>: {{CA_value}}</div>{{/CA_value}}
{{#CMMT_MINLOAD_MLC}}<div><b>CMMT_MINLOAD_MLC</b>: {{CMMT_MINLOAD_MLC}}</div>{{/CMMT_MINLOAD_MLC}}
{{#CMMT_MINLOAD_MW}}<div><b>CMMT_MINLOAD_MW</b>: {{CMMT_MINLOAD_MW}}</div>{{/CMMT_MINLOAD_MW}}
{{#CMMT_RA_MLC}}<div><b>CMMT_RA_MLC</b>: {{CMMT_RA_MLC}}</div>{{/CMMT_RA_MLC}}
{{#CMMT_RA_MW}}<div><b>CMMT_RA_MW</b>: {{CMMT_RA_MW}}</div>{{/CMMT_RA_MW}}
{{#CMMT_RA_START_COST}}<div><b>CMMT_RA_START_COST</b>: {{CMMT_RA_START_COST}}</div>{{/CMMT_RA_START_COST}}
{{#CMMT_RA_UNITS}}<div><b>CMMT_RA_UNITS</b>: {{CMMT_RA_UNITS}}</div>{{/CMMT_RA_UNITS}}
{{#CMMT_TOTAL_START_COST}}<div><b>CMMT_TOTAL_START_COST</b>: {{CMMT_TOTAL_START_COST}}</div>{{/CMMT_TOTAL_START_COST}}
{{#CMMT_TOTAL_MW}}<div><b>CMMT_TOTAL_MW</b>: {{CMMT_TOTAL_MW}}</div>{{/CMMT_TOTAL_MW}}
{{#CMMT_TOTAL_UNITS}}<div><b>CMMT_TOTAL_UNITS</b>: {{CMMT_TOTAL_UNITS}}</div>{{/CMMT_TOTAL_UNITS}}
{{#CRR_CAT}}<div><b>CRR_CAT</b>: {{CRR_CAT}}</div>{{/CRR_CAT}}
{{#CRR_MARKET_value}}<div><b>CRR_MARKET_value</b>: {{CRR_MARKET_value}}</div>{{/CRR_MARKET_value}}
{{#CRR_MW}}<div><b>CRR_MW</b>: {{CRR_MW}}</div>{{/CRR_MW}}
{{#CRR_NSR}}<div><b>CRR_NSR</b>: {{CRR_NSR}}</div>{{/CRR_NSR}}
{{#CRR_OPTION}}<div><b>CRR_OPTION</b>: {{CRR_OPTION}}</div>{{/CRR_OPTION}}
{{#CRR_OWNER}}<div><b>CRR_OWNER</b>: {{CRR_OWNER}}</div>{{/CRR_OWNER}}
{{#CRR_SEGMENT}}<div><b>CRR_SEGMENT</b>: {{CRR_SEGMENT}}</div>{{/CRR_SEGMENT}}
{{#CRR_TERM}}<div><b>CRR_TERM</b>: {{CRR_TERM}}</div>{{/CRR_TERM}}
{{#CRR_TOU}}<div><b>CRR_TOU</b>: {{CRR_TOU}}</div>{{/CRR_TOU}}
{{#CRR_TYPE}}<div><b>CRR_TYPE</b>: {{CRR_TYPE}}</div>{{/CRR_TYPE}}
{{#ENE_EA_DA}}<div><b>ENE_EA_DA</b>: {{ENE_EA_DA}}</div>{{/ENE_EA_DA}}
{{#ENE_EA_EXCEPT}}<div><b>ENE_EA_EXCEPT</b>: {{ENE_EA_EXCEPT}}</div>{{/ENE_EA_EXCEPT}}
{{#ENE_EA_HASP}}<div><b>ENE_EA_HASP</b>: {{ENE_EA_HASP}}</div>{{/ENE_EA_HASP}}
{{#ENE_EA_MLE}}<div><b>ENE_EA_MLE</b>: {{ENE_EA_MLE}}</div>{{/ENE_EA_MLE}}
{{#ENE_EA_MSSLF}}<div><b>ENE_EA_MSSLF</b>: {{ENE_EA_MSSLF}}</div>{{/ENE_EA_MSSLF}}
{{#ENE_EA_OPTIMAL}}<div><b>ENE_EA_OPTIMAL</b>: {{ENE_EA_OPTIMAL}}</div>{{/ENE_EA_OPTIMAL}}
{{#ENE_EA_RAMP_DEV}}<div><b>ENE_EA_RAMP_DEV</b>: {{ENE_EA_RAMP_DEV}}</div>{{/ENE_EA_RAMP_DEV}}
{{#ENE_EA_RAMP_STD}}<div><b>ENE_EA_RAMP_STD</b>: {{ENE_EA_RAMP_STD}}</div>{{/ENE_EA_RAMP_STD}}
{{#ENE_EA_RESIDUAL}}<div><b>ENE_EA_RESIDUAL</b>: {{ENE_EA_RESIDUAL}}</div>{{/ENE_EA_RESIDUAL}}
{{#ENE_EA_RMR}}<div><b>ENE_EA_RMR</b>: {{ENE_EA_RMR}}</div>{{/ENE_EA_RMR}}
{{#ENE_EA_SELF}}<div><b>ENE_EA_SELF</b>: {{ENE_EA_SELF}}</div>{{/ENE_EA_SELF}}
{{#ENE_EA_SLIC}}<div><b>ENE_EA_SLIC</b>: {{ENE_EA_SLIC}}</div>{{/ENE_EA_SLIC}}
{{#ENE_EXP_CLEAR_HASP}}<div><b>ENE_EXP_CLEAR_HASP</b>: {{ENE_EXP_CLEAR_HASP}}</div>{{/ENE_EXP_CLEAR_HASP}}
{{#ENE_EXP_CLEAR_IFM}}<div><b>ENE_EXP_CLEAR_IFM</b>: {{ENE_EXP_CLEAR_IFM}}</div>{{/ENE_EXP_CLEAR_IFM}}
{{#ENE_EXP_CLEAR_RTM}}<div><b>ENE_EXP_CLEAR_RTM</b>: {{ENE_EXP_CLEAR_RTM}}</div>{{/ENE_EXP_CLEAR_RTM}}
{{#ENE_GEN_CLEAR_HASP}}<div><b>ENE_GEN_CLEAR_HASP</b>: {{ENE_GEN_CLEAR_HASP}}</div>{{/ENE_GEN_CLEAR_HASP}}
{{#ENE_GEN_CLEAR_IFM}}<div><b>ENE_GEN_CLEAR_IFM</b>: {{ENE_GEN_CLEAR_IFM}}</div>{{/ENE_GEN_CLEAR_IFM}}
{{#ENE_GEN_CLEAR_RTM}}<div><b>ENE_GEN_CLEAR_RTM</b>: {{ENE_GEN_CLEAR_RTM}}</div>{{/ENE_GEN_CLEAR_RTM}}
{{#ENE_IMP_CLEAR_HASP}}<div><b>ENE_IMP_CLEAR_HASP</b>: {{ENE_IMP_CLEAR_HASP}}</div>{{/ENE_IMP_CLEAR_HASP}}
{{#ENE_IMP_CLEAR_IFM}}<div><b>ENE_IMP_CLEAR_IFM</b>: {{ENE_IMP_CLEAR_IFM}}</div>{{/ENE_IMP_CLEAR_IFM}}
{{#ENE_IMP_CLEAR_RTM}}<div><b>ENE_IMP_CLEAR_RTM</b>: {{ENE_IMP_CLEAR_RTM}}</div>{{/ENE_IMP_CLEAR_RTM}}
{{#ENE_LOAD_ACTUAL}}<div><b>ENE_LOAD_ACTUAL</b>: {{ENE_LOAD_ACTUAL}}</div>{{/ENE_LOAD_ACTUAL}}
{{#ENE_LOAD_CLEAR_HASP}}<div><b>ENE_LOAD_CLEAR_HASP</b>: {{ENE_LOAD_CLEAR_HASP}}</div>{{/ENE_LOAD_CLEAR_HASP}}
{{#ENE_LOAD_CLEAR_IFM}}<div><b>ENE_LOAD_CLEAR_IFM</b>: {{ENE_LOAD_CLEAR_IFM}}</div>{{/ENE_LOAD_CLEAR_IFM}}
{{#ENE_LOAD_CLEAR_RTM}}<div><b>ENE_LOAD_CLEAR_RTM</b>: {{ENE_LOAD_CLEAR_RTM}}</div>{{/ENE_LOAD_CLEAR_RTM}}
{{#ENE_LOAD_FCST}}<div><b>ENE_LOAD_FCST</b>: {{ENE_LOAD_FCST}}</div>{{/ENE_LOAD_FCST}}
{{#ENE_PEAK_HOUR}}<div><b>ENE_PEAK_HOUR</b>: {{ENE_PEAK_HOUR}}</div>{{/ENE_PEAK_HOUR}}
{{#ENE_PEAK_LOAD}}<div><b>ENE_PEAK_LOAD</b>: {{ENE_PEAK_LOAD}}</div>{{/ENE_PEAK_LOAD}}
{{#FUEL_REGION_value}}<div><b>FUEL_REGION_value</b>: {{FUEL_REGION_value}}</div>{{/FUEL_REGION_value}}
{{#INVT_DATETIME}}<div><b>INVT_DATETIME</b>: {{INVT_DATETIME}}</div>{{/INVT_DATETIME}}
{{#LOAD_ACTUAL}}<div><b>LOAD_ACTUAL</b>: {{LOAD_ACTUAL}}</div>{{/LOAD_ACTUAL}}
{{#LOAD_CLEAR_RTM}}<div><b>LOAD_CLEAR_RTM</b>: {{LOAD_CLEAR_RTM}}</div>{{/LOAD_CLEAR_RTM}}
{{#LOSS_TOTAL_COST_HASP}}<div><b>LOSS_TOTAL_COST_HASP</b>: {{LOSS_TOTAL_COST_HASP}}</div>{{/LOSS_TOTAL_COST_HASP}}
{{#LOSS_TOTAL_COST_RTM}}<div><b>LOSS_TOTAL_COST_RTM</b>: {{LOSS_TOTAL_COST_RTM}}</div>{{/LOSS_TOTAL_COST_RTM}}
{{#LOSS_TOTAL_MW_HASP}}<div><b>LOSS_TOTAL_MW_HASP</b>: {{LOSS_TOTAL_MW_HASP}}</div>{{/LOSS_TOTAL_MW_HASP}}
{{#LOSS_TOTAL_MW_RTM}}<div><b>LOSS_TOTAL_MW_RTM</b>: {{LOSS_TOTAL_MW_RTM}}</div>{{/LOSS_TOTAL_MW_RTM}}
{{#MPM_FLAG}}<div><b>MPM_FLAG</b>: {{MPM_FLAG}}</div>{{/MPM_FLAG}}
{{#OP_RSRV_TOTAL}}<div><b>OP_RSRV_TOTAL</b>: {{OP_RSRV_TOTAL}}</div>{{/OP_RSRV_TOTAL}}
{{#PRC_NG}}<div><b>PRC_NG</b>: {{PRC_NG}}</div>{{/PRC_NG}}
{{#PRC_SHADOW}}<div><b>PRC_SHADOW</b>: {{PRC_SHADOW}}</div>{{/PRC_SHADOW}}
{{#RATING_ATC}}<div><b>RATING_ATC</b>: {{RATING_ATC}}</div>{{/RATING_ATC}}
{{#RMR_DETER_DAM}}<div><b>RMR_DETER_DAM</b>: {{RMR_DETER_DAM}}</div>{{/RMR_DETER_DAM}}
{{#RMR_DETER_HASP}}<div><b>RMR_DETER_HASP</b>: {{RMR_DETER_HASP}}</div>{{/RMR_DETER_HASP}}
{{#RMR_DISPATCH_DAM}}<div><b>RMR_DISPATCH_DAM</b>: {{RMR_DISPATCH_DAM}}</div>{{/RMR_DISPATCH_DAM}}
{{#RMR_DISPATCH_HASP}}<div><b>RMR_DISPATCH_HASP</b>: {{RMR_DISPATCH_HASP}}</div>{{/RMR_DISPATCH_HASP}}
{{#RMR_TOTAL}}<div><b>RMR_TOTAL</b>: {{RMR_TOTAL}}</div>{{/RMR_TOTAL}}
{{#RMR_TOTAL_AVAIL}}<div><b>RMR_TOTAL_AVAIL</b>: {{RMR_TOTAL_AVAIL}}</div>{{/RMR_TOTAL_AVAIL}}
{{#RUC_GEN_CLEAR_RUC}}<div><b>RUC_GEN_CLEAR_RUC</b>: {{RUC_GEN_CLEAR_RUC}}</div>{{/RUC_GEN_CLEAR_RUC}}
{{#RUC_IMP_CLEAR_RUC}}<div><b>RUC_IMP_CLEAR_RUC</b>: {{RUC_IMP_CLEAR_RUC}}</div>{{/RUC_IMP_CLEAR_RUC}}
{{#RUC_LOAD_CLEAR_RUC}}<div><b>RUC_LOAD_CLEAR_RUC</b>: {{RUC_LOAD_CLEAR_RUC}}</div>{{/RUC_LOAD_CLEAR_RUC}}
{{#RUC_ZONE_value}}<div><b>RUC_ZONE_value</b>: {{RUC_ZONE_value}}</div>{{/RUC_ZONE_value}}
{{#TAC_AREA_value}}<div><b>TAC_AREA_value</b>: {{TAC_AREA_value}}</div>{{/TAC_AREA_value}}
{{#TINTRFCE_value}}<div><b>TINTRFCE_value</b>: {{TINTRFCE_value}}</div>{{/TINTRFCE_value}}
{{#TRNS_AS_IMPORT}}<div><b>TRNS_AS_IMPORT</b>: {{TRNS_AS_IMPORT}}</div>{{/TRNS_AS_IMPORT}}
{{#TRNS_ENE_IMPORT}}<div><b>TRNS_ENE_IMPORT</b>: {{TRNS_ENE_IMPORT}}</div>{{/TRNS_ENE_IMPORT}}
{{#TRNS_EQUIP_value}}<div><b>TRNS_EQUIP_value</b>: {{TRNS_EQUIP_value}}</div>{{/TRNS_EQUIP_value}}
{{#TRNS_RATING_CBM}}<div><b>TRNS_RATING_CBM</b>: {{TRNS_RATING_CBM}}</div>{{/TRNS_RATING_CBM}}
{{#TRNS_RATING_DIRECTION}}<div><b>TRNS_RATING_DIRECTION</b>: {{TRNS_RATING_DIRECTION}}</div>{{/TRNS_RATING_DIRECTION}}
{{#TRNS_RATING_OTC}}<div><b>TRNS_RATING_OTC</b>: {{TRNS_RATING_OTC}}</div>{{/TRNS_RATING_OTC}}
{{#TRNS_RATING_OTC_DERATE}}<div><b>TRNS_RATING_OTC_DERATE</b>: {{TRNS_RATING_OTC_DERATE}}</div>{{/TRNS_RATING_OTC_DERATE}}
{{#TRNS_RATING_TTC}}<div><b>TRNS_RATING_TTC</b>: {{TRNS_RATING_TTC}}</div>{{/TRNS_RATING_TTC}}
{{#TRNS_TI_value}}<div><b>TRNS_TI_value</b>: {{TRNS_TI_value}}</div>{{/TRNS_TI_value}}
{{#TRNS_TR_ENTMTS}}<div><b>TRNS_TR_ENTMTS</b>: {{TRNS_TR_ENTMTS}}</div>{{/TRNS_TR_ENTMTS}}
{{#TRNS_TR_USEAGE}}<div><b>TRNS_TR_USEAGE</b>: {{TRNS_TR_USEAGE}}</div>{{/TRNS_TR_USEAGE}}
</div>
`
                );
           }        }

        class JobFlagType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.JobFlagType;
                if (null == bucket)
                   cim_data.JobFlagType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.JobFlagType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "JobFlagType";
                base.parse_element (/<cim:JobFlagType.CREATED>([\s\S]*?)<\/cim:JobFlagType.CREATED>/g, obj, "CREATED", base.to_string, sub, context);
                base.parse_element (/<cim:JobFlagType.MODIFIED>([\s\S]*?)<\/cim:JobFlagType.MODIFIED>/g, obj, "MODIFIED", base.to_string, sub, context);
                base.parse_element (/<cim:JobFlagType.DELETED>([\s\S]*?)<\/cim:JobFlagType.DELETED>/g, obj, "DELETED", base.to_string, sub, context);

                var bucket = context.parsed.JobFlagType;
                if (null == bucket)
                   context.parsed.JobFlagType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "JobFlagType", "CREATED", base.from_string, fields);
                base.export_element (obj, "JobFlagType", "MODIFIED", base.from_string, fields);
                base.export_element (obj, "JobFlagType", "DELETED", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#JobFlagType_collapse" aria-expanded="true" aria-controls="JobFlagType_collapse">JobFlagType</a>
<div id="JobFlagType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#CREATED}}<div><b>CREATED</b>: {{CREATED}}</div>{{/CREATED}}
{{#MODIFIED}}<div><b>MODIFIED</b>: {{MODIFIED}}</div>{{/MODIFIED}}
{{#DELETED}}<div><b>DELETED</b>: {{DELETED}}</div>{{/DELETED}}
</div>
`
                );
           }        }

        /**
         * S - Scheduling
         *
         * P - Pricing
         *
         */
        class runTypeCAISO extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.runTypeCAISO;
                if (null == bucket)
                   cim_data.runTypeCAISO = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.runTypeCAISO[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "runTypeCAISO";
                base.parse_element (/<cim:runTypeCAISO.S>([\s\S]*?)<\/cim:runTypeCAISO.S>/g, obj, "S", base.to_string, sub, context);
                base.parse_element (/<cim:runTypeCAISO.P>([\s\S]*?)<\/cim:runTypeCAISO.P>/g, obj, "P", base.to_string, sub, context);

                var bucket = context.parsed.runTypeCAISO;
                if (null == bucket)
                   context.parsed.runTypeCAISO = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "runTypeCAISO", "S", base.from_string, fields);
                base.export_element (obj, "runTypeCAISO", "P", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#runTypeCAISO_collapse" aria-expanded="true" aria-controls="runTypeCAISO_collapse">runTypeCAISO</a>
<div id="runTypeCAISO_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#S}}<div><b>S</b>: {{S}}</div>{{/S}}
{{#P}}<div><b>P</b>: {{P}}</div>{{/P}}
</div>
`
                );
           }        }

        /**
         * BASELI NE
         *
         * NEGOTIATED
         *
         */
        class AdderType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AdderType;
                if (null == bucket)
                   cim_data.AdderType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AdderType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AdderType";
                base.parse_element (/<cim:AdderType.BASELINE>([\s\S]*?)<\/cim:AdderType.BASELINE>/g, obj, "BASELINE", base.to_string, sub, context);
                base.parse_element (/<cim:AdderType.NEGOTIATED>([\s\S]*?)<\/cim:AdderType.NEGOTIATED>/g, obj, "NEGOTIATED", base.to_string, sub, context);

                var bucket = context.parsed.AdderType;
                if (null == bucket)
                   context.parsed.AdderType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "AdderType", "BASELINE", base.from_string, fields);
                base.export_element (obj, "AdderType", "NEGOTIATED", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#AdderType_collapse" aria-expanded="true" aria-controls="AdderType_collapse">AdderType</a>
<div id="AdderType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#BASELINE}}<div><b>BASELINE</b>: {{BASELINE}}</div>{{/BASELINE}}
{{#NEGOTIATED}}<div><b>NEGOTIATED</b>: {{NEGOTIATED}}</div>{{/NEGOTIATED}}
</div>
`
                );
           }        }

        /**
         * Description of market statement
         *
         */
        class MarketStatementDescription extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MarketStatementDescription;
                if (null == bucket)
                   cim_data.MarketStatementDescription = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketStatementDescription[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MarketStatementDescription";
                base.parse_element (/<cim:MarketStatementDescription.DAILY_INITIAL_CREDIT>([\s\S]*?)<\/cim:MarketStatementDescription.DAILY_INITIAL_CREDIT>/g, obj, "DAILY_INITIAL_CREDIT", base.to_string, sub, context);
                base.parse_element (/<cim:MarketStatementDescription.DAILY_INITIAL_MARKET>([\s\S]*?)<\/cim:MarketStatementDescription.DAILY_INITIAL_MARKET>/g, obj, "DAILY_INITIAL_MARKET", base.to_string, sub, context);
                base.parse_element (/<cim:MarketStatementDescription.MONTHLY_INITIAL_MARKET>([\s\S]*?)<\/cim:MarketStatementDescription.MONTHLY_INITIAL_MARKET>/g, obj, "MONTHLY_INITIAL_MARKET", base.to_string, sub, context);
                base.parse_element (/<cim:MarketStatementDescription.DAILY_RECALC_MARKET>([\s\S]*?)<\/cim:MarketStatementDescription.DAILY_RECALC_MARKET>/g, obj, "DAILY_RECALC_MARKET", base.to_string, sub, context);
                base.parse_element (/<cim:MarketStatementDescription.MONTHLY_RECALC_MARKET>([\s\S]*?)<\/cim:MarketStatementDescription.MONTHLY_RECALC_MARKET>/g, obj, "MONTHLY_RECALC_MARKET", base.to_string, sub, context);

                var bucket = context.parsed.MarketStatementDescription;
                if (null == bucket)
                   context.parsed.MarketStatementDescription = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "MarketStatementDescription", "DAILY_INITIAL_CREDIT", base.from_string, fields);
                base.export_element (obj, "MarketStatementDescription", "DAILY_INITIAL_MARKET", base.from_string, fields);
                base.export_element (obj, "MarketStatementDescription", "MONTHLY_INITIAL_MARKET", base.from_string, fields);
                base.export_element (obj, "MarketStatementDescription", "DAILY_RECALC_MARKET", base.from_string, fields);
                base.export_element (obj, "MarketStatementDescription", "MONTHLY_RECALC_MARKET", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MarketStatementDescription_collapse" aria-expanded="true" aria-controls="MarketStatementDescription_collapse">MarketStatementDescription</a>
<div id="MarketStatementDescription_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#DAILY_INITIAL_CREDIT}}<div><b>DAILY_INITIAL_CREDIT</b>: {{DAILY_INITIAL_CREDIT}}</div>{{/DAILY_INITIAL_CREDIT}}
{{#DAILY_INITIAL_MARKET}}<div><b>DAILY_INITIAL_MARKET</b>: {{DAILY_INITIAL_MARKET}}</div>{{/DAILY_INITIAL_MARKET}}
{{#MONTHLY_INITIAL_MARKET}}<div><b>MONTHLY_INITIAL_MARKET</b>: {{MONTHLY_INITIAL_MARKET}}</div>{{/MONTHLY_INITIAL_MARKET}}
{{#DAILY_RECALC_MARKET}}<div><b>DAILY_RECALC_MARKET</b>: {{DAILY_RECALC_MARKET}}</div>{{/DAILY_RECALC_MARKET}}
{{#MONTHLY_RECALC_MARKET}}<div><b>MONTHLY_RECALC_MARKET</b>: {{MONTHLY_RECALC_MARKET}}</div>{{/MONTHLY_RECALC_MARKET}}
</div>
`
                );
           }        }

        /**
         * ADD - add
         * DEL - delete
         *
         * CHG - change
         *
         */
        class MQSDELType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MQSDELType;
                if (null == bucket)
                   cim_data.MQSDELType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MQSDELType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MQSDELType";
                base.parse_element (/<cim:MQSDELType.ADD>([\s\S]*?)<\/cim:MQSDELType.ADD>/g, obj, "ADD", base.to_string, sub, context);
                base.parse_element (/<cim:MQSDELType.DEL>([\s\S]*?)<\/cim:MQSDELType.DEL>/g, obj, "DEL", base.to_string, sub, context);
                base.parse_element (/<cim:MQSDELType.CHG>([\s\S]*?)<\/cim:MQSDELType.CHG>/g, obj, "CHG", base.to_string, sub, context);

                var bucket = context.parsed.MQSDELType;
                if (null == bucket)
                   context.parsed.MQSDELType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "MQSDELType", "ADD", base.from_string, fields);
                base.export_element (obj, "MQSDELType", "DEL", base.from_string, fields);
                base.export_element (obj, "MQSDELType", "CHG", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MQSDELType_collapse" aria-expanded="true" aria-controls="MQSDELType_collapse">MQSDELType</a>
<div id="MQSDELType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#ADD}}<div><b>ADD</b>: {{ADD}}</div>{{/ADD}}
{{#DEL}}<div><b>DEL</b>: {{DEL}}</div>{{/DEL}}
{{#CHG}}<div><b>CHG</b>: {{CHG}}</div>{{/CHG}}
</div>
`
                );
           }        }

        class TimeZoneType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TimeZoneType;
                if (null == bucket)
                   cim_data.TimeZoneType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TimeZoneType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TimeZoneType";
                base.parse_element (/<cim:TimeZoneType.PPT>([\s\S]*?)<\/cim:TimeZoneType.PPT>/g, obj, "PPT", base.to_string, sub, context);

                var bucket = context.parsed.TimeZoneType;
                if (null == bucket)
                   context.parsed.TimeZoneType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TimeZoneType", "PPT", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TimeZoneType_collapse" aria-expanded="true" aria-controls="TimeZoneType_collapse">TimeZoneType</a>
<div id="TimeZoneType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#PPT}}<div><b>PPT</b>: {{PPT}}</div>{{/PPT}}
</div>
`
                );
           }        }

        class SchedClassType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SchedClassType;
                if (null == bucket)
                   cim_data.SchedClassType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SchedClassType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SchedClassType";
                base.parse_element (/<cim:SchedClassType.P>([\s\S]*?)<\/cim:SchedClassType.P>/g, obj, "P", base.to_string, sub, context);
                base.parse_element (/<cim:SchedClassType.R>([\s\S]*?)<\/cim:SchedClassType.R>/g, obj, "R", base.to_string, sub, context);
                base.parse_element (/<cim:SchedClassType.F>([\s\S]*?)<\/cim:SchedClassType.F>/g, obj, "F", base.to_string, sub, context);

                var bucket = context.parsed.SchedClassType;
                if (null == bucket)
                   context.parsed.SchedClassType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "SchedClassType", "P", base.from_string, fields);
                base.export_element (obj, "SchedClassType", "R", base.from_string, fields);
                base.export_element (obj, "SchedClassType", "F", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#SchedClassType_collapse" aria-expanded="true" aria-controls="SchedClassType_collapse">SchedClassType</a>
<div id="SchedClassType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#P}}<div><b>P</b>: {{P}}</div>{{/P}}
{{#R}}<div><b>R</b>: {{R}}</div>{{/R}}
{{#F}}<div><b>F</b>: {{F}}</div>{{/F}}
</div>
`
                );
           }        }

        class OASISMarketType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OASISMarketType;
                if (null == bucket)
                   cim_data.OASISMarketType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OASISMarketType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "OASISMarketType";
                base.parse_element (/<cim:OASISMarketType.IFM>([\s\S]*?)<\/cim:OASISMarketType.IFM>/g, obj, "IFM", base.to_string, sub, context);
                base.parse_element (/<cim:OASISMarketType.RUC>([\s\S]*?)<\/cim:OASISMarketType.RUC>/g, obj, "RUC", base.to_string, sub, context);
                base.parse_element (/<cim:OASISMarketType.HASP>([\s\S]*?)<\/cim:OASISMarketType.HASP>/g, obj, "HASP", base.to_string, sub, context);
                base.parse_element (/<cim:OASISMarketType.RTM>([\s\S]*?)<\/cim:OASISMarketType.RTM>/g, obj, "RTM", base.to_string, sub, context);
                base.parse_element (/<cim:OASISMarketType.N\/A>([\s\S]*?)<\/cim:OASISMarketType.N\/A>/g, obj, "N/A", base.to_string, sub, context);
                base.parse_element (/<cim:OASISMarketType.All>([\s\S]*?)<\/cim:OASISMarketType.All>/g, obj, "All", base.to_string, sub, context);

                var bucket = context.parsed.OASISMarketType;
                if (null == bucket)
                   context.parsed.OASISMarketType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "OASISMarketType", "IFM", base.from_string, fields);
                base.export_element (obj, "OASISMarketType", "RUC", base.from_string, fields);
                base.export_element (obj, "OASISMarketType", "HASP", base.from_string, fields);
                base.export_element (obj, "OASISMarketType", "RTM", base.from_string, fields);
                base.export_element (obj, "OASISMarketType", "N\/A", base.from_string, fields);
                base.export_element (obj, "OASISMarketType", "All", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#OASISMarketType_collapse" aria-expanded="true" aria-controls="OASISMarketType_collapse">OASISMarketType</a>
<div id="OASISMarketType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#IFM}}<div><b>IFM</b>: {{IFM}}</div>{{/IFM}}
{{#RUC}}<div><b>RUC</b>: {{RUC}}</div>{{/RUC}}
{{#HASP}}<div><b>HASP</b>: {{HASP}}</div>{{/HASP}}
{{#RTM}}<div><b>RTM</b>: {{RTM}}</div>{{/RTM}}
{{#N/A}}<div><b>N/A</b>: {{N/A}}</div>{{/N/A}}
{{#All}}<div><b>All</b>: {{All}}</div>{{/All}}
</div>
`
                );
           }        }

        class AllocationEnergyTypeCode extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AllocationEnergyTypeCode;
                if (null == bucket)
                   cim_data.AllocationEnergyTypeCode = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AllocationEnergyTypeCode[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
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

                var bucket = context.parsed.AllocationEnergyTypeCode;
                if (null == bucket)
                   context.parsed.AllocationEnergyTypeCode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#AllocationEnergyTypeCode_collapse" aria-expanded="true" aria-controls="AllocationEnergyTypeCode_collapse">AllocationEnergyTypeCode</a>
<div id="AllocationEnergyTypeCode_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#DASE}}<div><b>DASE</b>: {{DASE}}</div>{{/DASE}}
{{#OE}}<div><b>OE</b>: {{OE}}</div>{{/OE}}
{{#HASE}}<div><b>HASE</b>: {{HASE}}</div>{{/HASE}}
{{#SRE}}<div><b>SRE</b>: {{SRE}}</div>{{/SRE}}
{{#RED}}<div><b>RED</b>: {{RED}}</div>{{/RED}}
{{#MSSLFE}}<div><b>MSSLFE</b>: {{MSSLFE}}</div>{{/MSSLFE}}
{{#RE}}<div><b>RE</b>: {{RE}}</div>{{/RE}}
{{#MLE}}<div><b>MLE</b>: {{MLE}}</div>{{/MLE}}
{{#SE}}<div><b>SE</b>: {{SE}}</div>{{/SE}}
{{#RTSSE}}<div><b>RTSSE</b>: {{RTSSE}}</div>{{/RTSSE}}
{{#PE}}<div><b>PE</b>: {{PE}}</div>{{/PE}}
{{#DAPE}}<div><b>DAPE</b>: {{DAPE}}</div>{{/DAPE}}
{{#ESRT}}<div><b>ESRT</b>: {{ESRT}}</div>{{/ESRT}}
{{#ESYS}}<div><b>ESYS</b>: {{ESYS}}</div>{{/ESYS}}
{{#RMRD}}<div><b>RMRD</b>: {{RMRD}}</div>{{/RMRD}}
{{#RMRR}}<div><b>RMRR</b>: {{RMRR}}</div>{{/RMRR}}
{{#RMRS}}<div><b>RMRS</b>: {{RMRS}}</div>{{/RMRS}}
{{#RMRT}}<div><b>RMRT</b>: {{RMRT}}</div>{{/RMRT}}
{{#STRT}}<div><b>STRT</b>: {{STRT}}</div>{{/STRT}}
{{#SDWN}}<div><b>SDWN</b>: {{SDWN}}</div>{{/SDWN}}
{{#TEST}}<div><b>TEST</b>: {{TEST}}</div>{{/TEST}}
{{#OVGN}}<div><b>OVGN</b>: {{OVGN}}</div>{{/OVGN}}
{{#VS}}<div><b>VS</b>: {{VS}}</div>{{/VS}}
{{#ETC}}<div><b>ETC</b>: {{ETC}}</div>{{/ETC}}
{{#TOR}}<div><b>TOR</b>: {{TOR}}</div>{{/TOR}}
{{#RSYS}}<div><b>RSYS</b>: {{RSYS}}</div>{{/RSYS}}
{{#RCNG}}<div><b>RCNG</b>: {{RCNG}}</div>{{/RCNG}}
{{#ACNG}}<div><b>ACNG</b>: {{ACNG}}</div>{{/ACNG}}
{{#TCNG}}<div><b>TCNG</b>: {{TCNG}}</div>{{/TCNG}}
{{#LMPM}}<div><b>LMPM</b>: {{LMPM}}</div>{{/LMPM}}
{{#BS}}<div><b>BS</b>: {{BS}}</div>{{/BS}}
{{#MINL}}<div><b>MINL</b>: {{MINL}}</div>{{/MINL}}
{{#SUMR}}<div><b>SUMR</b>: {{SUMR}}</div>{{/SUMR}}
{{#RMRH}}<div><b>RMRH</b>: {{RMRH}}</div>{{/RMRH}}
{{#SLIC}}<div><b>SLIC</b>: {{SLIC}}</div>{{/SLIC}}
{{#OTHER}}<div><b>OTHER</b>: {{OTHER}}</div>{{/OTHER}}
</div>
`
                );
           }        }

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
        class BidStatusType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BidStatusType;
                if (null == bucket)
                   cim_data.BidStatusType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BidStatusType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
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

                var bucket = context.parsed.BidStatusType;
                if (null == bucket)
                   context.parsed.BidStatusType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#BidStatusType_collapse" aria-expanded="true" aria-controls="BidStatusType_collapse">BidStatusType</a>
<div id="BidStatusType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#CL}}<div><b>CL</b>: {{CL}}</div>{{/CL}}
{{#RP}}<div><b>RP</b>: {{RP}}</div>{{/RP}}
{{#RJ}}<div><b>RJ</b>: {{RJ}}</div>{{/RJ}}
{{#I}}<div><b>I</b>: {{I}}</div>{{/I}}
{{#CV}}<div><b>CV</b>: {{CV}}</div>{{/CV}}
{{#CM}}<div><b>CM</b>: {{CM}}</div>{{/CM}}
{{#V}}<div><b>V</b>: {{V}}</div>{{/V}}
{{#M}}<div><b>M</b>: {{M}}</div>{{/M}}
{{#CX}}<div><b>CX</b>: {{CX}}</div>{{/CX}}
{{#O}}<div><b>O</b>: {{O}}</div>{{/O}}
</div>
`
                );
           }        }

        class OASISBidReportType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OASISBidReportType;
                if (null == bucket)
                   cim_data.OASISBidReportType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OASISBidReportType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "OASISBidReportType";
                base.parse_element (/<cim:OASISBidReportType.BIDS_PUBLIC>([\s\S]*?)<\/cim:OASISBidReportType.BIDS_PUBLIC>/g, obj, "BIDS_PUBLIC", base.to_string, sub, context);

                var bucket = context.parsed.OASISBidReportType;
                if (null == bucket)
                   context.parsed.OASISBidReportType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "OASISBidReportType", "BIDS_PUBLIC", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#OASISBidReportType_collapse" aria-expanded="true" aria-controls="OASISBidReportType_collapse">OASISBidReportType</a>
<div id="OASISBidReportType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#BIDS_PUBLIC}}<div><b>BIDS_PUBLIC</b>: {{BIDS_PUBLIC}}</div>{{/BIDS_PUBLIC}}
</div>
`
                );
           }        }

        class SegmentCurveType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SegmentCurveType;
                if (null == bucket)
                   cim_data.SegmentCurveType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SegmentCurveType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SegmentCurveType";
                base.parse_element (/<cim:SegmentCurveType.COST>([\s\S]*?)<\/cim:SegmentCurveType.COST>/g, obj, "COST", base.to_string, sub, context);
                base.parse_element (/<cim:SegmentCurveType.CONSULTATIVE>([\s\S]*?)<\/cim:SegmentCurveType.CONSULTATIVE>/g, obj, "CONSULTATIVE", base.to_string, sub, context);

                var bucket = context.parsed.SegmentCurveType;
                if (null == bucket)
                   context.parsed.SegmentCurveType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "SegmentCurveType", "COST", base.from_string, fields);
                base.export_element (obj, "SegmentCurveType", "CONSULTATIVE", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#SegmentCurveType_collapse" aria-expanded="true" aria-controls="SegmentCurveType_collapse">SegmentCurveType</a>
<div id="SegmentCurveType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#COST}}<div><b>COST</b>: {{COST}}</div>{{/COST}}
{{#CONSULTATIVE}}<div><b>CONSULTATIVE</b>: {{CONSULTATIVE}}</div>{{/CONSULTATIVE}}
</div>
`
                );
           }        }

        class JobStartEndType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.JobStartEndType;
                if (null == bucket)
                   cim_data.JobStartEndType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.JobStartEndType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "JobStartEndType";
                base.parse_element (/<cim:JobStartEndType.NA>([\s\S]*?)<\/cim:JobStartEndType.NA>/g, obj, "NA", base.to_string, sub, context);
                base.parse_element (/<cim:JobStartEndType.START>([\s\S]*?)<\/cim:JobStartEndType.START>/g, obj, "START", base.to_string, sub, context);
                base.parse_element (/<cim:JobStartEndType.END>([\s\S]*?)<\/cim:JobStartEndType.END>/g, obj, "END", base.to_string, sub, context);

                var bucket = context.parsed.JobStartEndType;
                if (null == bucket)
                   context.parsed.JobStartEndType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "JobStartEndType", "NA", base.from_string, fields);
                base.export_element (obj, "JobStartEndType", "START", base.from_string, fields);
                base.export_element (obj, "JobStartEndType", "END", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#JobStartEndType_collapse" aria-expanded="true" aria-controls="JobStartEndType_collapse">JobStartEndType</a>
<div id="JobStartEndType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#NA}}<div><b>NA</b>: {{NA}}</div>{{/NA}}
{{#START}}<div><b>START</b>: {{START}}</div>{{/START}}
{{#END}}<div><b>END</b>: {{END}}</div>{{/END}}
</div>
`
                );
           }        }

        class LoadFollowingCapacityType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LoadFollowingCapacityType;
                if (null == bucket)
                   cim_data.LoadFollowingCapacityType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LoadFollowingCapacityType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "LoadFollowingCapacityType";
                base.parse_element (/<cim:LoadFollowingCapacityType.UP>([\s\S]*?)<\/cim:LoadFollowingCapacityType.UP>/g, obj, "UP", base.to_string, sub, context);
                base.parse_element (/<cim:LoadFollowingCapacityType.DOWN>([\s\S]*?)<\/cim:LoadFollowingCapacityType.DOWN>/g, obj, "DOWN", base.to_string, sub, context);

                var bucket = context.parsed.LoadFollowingCapacityType;
                if (null == bucket)
                   context.parsed.LoadFollowingCapacityType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "LoadFollowingCapacityType", "UP", base.from_string, fields);
                base.export_element (obj, "LoadFollowingCapacityType", "DOWN", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#LoadFollowingCapacityType_collapse" aria-expanded="true" aria-controls="LoadFollowingCapacityType_collapse">LoadFollowingCapacityType</a>
<div id="LoadFollowingCapacityType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#UP}}<div><b>UP</b>: {{UP}}</div>{{/UP}}
{{#DOWN}}<div><b>DOWN</b>: {{DOWN}}</div>{{/DOWN}}
</div>
`
                );
           }        }

        class DAMMarketType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DAMMarketType;
                if (null == bucket)
                   cim_data.DAMMarketType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DAMMarketType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DAMMarketType";
                base.parse_element (/<cim:DAMMarketType.DAM>([\s\S]*?)<\/cim:DAMMarketType.DAM>/g, obj, "DAM", base.to_string, sub, context);

                var bucket = context.parsed.DAMMarketType;
                if (null == bucket)
                   context.parsed.DAMMarketType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "DAMMarketType", "DAM", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#DAMMarketType_collapse" aria-expanded="true" aria-controls="DAMMarketType_collapse">DAMMarketType</a>
<div id="DAMMarketType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#DAM}}<div><b>DAM</b>: {{DAM}}</div>{{/DAM}}
</div>
`
                );
           }        }

        /**
         * market statement document status
         *
         */
        class MarketStatementDocStatus extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MarketStatementDocStatus;
                if (null == bucket)
                   cim_data.MarketStatementDocStatus = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketStatementDocStatus[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MarketStatementDocStatus";
                base.parse_element (/<cim:MarketStatementDocStatus.APPROVED>([\s\S]*?)<\/cim:MarketStatementDocStatus.APPROVED>/g, obj, "APPROVED", base.to_string, sub, context);
                base.parse_element (/<cim:MarketStatementDocStatus.CANCELLED>([\s\S]*?)<\/cim:MarketStatementDocStatus.CANCELLED>/g, obj, "CANCELLED", base.to_string, sub, context);

                var bucket = context.parsed.MarketStatementDocStatus;
                if (null == bucket)
                   context.parsed.MarketStatementDocStatus = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "MarketStatementDocStatus", "APPROVED", base.from_string, fields);
                base.export_element (obj, "MarketStatementDocStatus", "CANCELLED", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MarketStatementDocStatus_collapse" aria-expanded="true" aria-controls="MarketStatementDocStatus_collapse">MarketStatementDocStatus</a>
<div id="MarketStatementDocStatus_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#APPROVED}}<div><b>APPROVED</b>: {{APPROVED}}</div>{{/APPROVED}}
{{#CANCELLED}}<div><b>CANCELLED</b>: {{CANCELLED}}</div>{{/CANCELLED}}
</div>
`
                );
           }        }

        /**
         * MP
         *
         * ISO
         *
         */
        class RequestorRmrTest extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RequestorRmrTest;
                if (null == bucket)
                   cim_data.RequestorRmrTest = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RequestorRmrTest[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "RequestorRmrTest";
                base.parse_element (/<cim:RequestorRmrTest.MP>([\s\S]*?)<\/cim:RequestorRmrTest.MP>/g, obj, "MP", base.to_string, sub, context);
                base.parse_element (/<cim:RequestorRmrTest.ISO>([\s\S]*?)<\/cim:RequestorRmrTest.ISO>/g, obj, "ISO", base.to_string, sub, context);

                var bucket = context.parsed.RequestorRmrTest;
                if (null == bucket)
                   context.parsed.RequestorRmrTest = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "RequestorRmrTest", "MP", base.from_string, fields);
                base.export_element (obj, "RequestorRmrTest", "ISO", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#RequestorRmrTest_collapse" aria-expanded="true" aria-controls="RequestorRmrTest_collapse">RequestorRmrTest</a>
<div id="RequestorRmrTest_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#MP}}<div><b>MP</b>: {{MP}}</div>{{/MP}}
{{#ISO}}<div><b>ISO</b>: {{ISO}}</div>{{/ISO}}
</div>
`
                );
           }        }

        /**
         * market statement line item alias name
         *
         */
        class MarketStatementLineItemAliasName extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MarketStatementLineItemAliasName;
                if (null == bucket)
                   cim_data.MarketStatementLineItemAliasName = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketStatementLineItemAliasName[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MarketStatementLineItemAliasName";
                base.parse_element (/<cim:MarketStatementLineItemAliasName.TRADE_DATE>([\s\S]*?)<\/cim:MarketStatementLineItemAliasName.TRADE_DATE>/g, obj, "TRADE_DATE", base.to_string, sub, context);
                base.parse_element (/<cim:MarketStatementLineItemAliasName.PARENT_CHARGE_GROUP>([\s\S]*?)<\/cim:MarketStatementLineItemAliasName.PARENT_CHARGE_GROUP>/g, obj, "PARENT_CHARGE_GROUP", base.to_string, sub, context);
                base.parse_element (/<cim:MarketStatementLineItemAliasName.CHARGE_GROUP>([\s\S]*?)<\/cim:MarketStatementLineItemAliasName.CHARGE_GROUP>/g, obj, "CHARGE_GROUP", base.to_string, sub, context);
                base.parse_element (/<cim:MarketStatementLineItemAliasName.CHARGE_CODE_SUMMARY>([\s\S]*?)<\/cim:MarketStatementLineItemAliasName.CHARGE_CODE_SUMMARY>/g, obj, "CHARGE_CODE_SUMMARY", base.to_string, sub, context);
                base.parse_element (/<cim:MarketStatementLineItemAliasName.CHARGE_CODE_INTERVAL_TOTAL>([\s\S]*?)<\/cim:MarketStatementLineItemAliasName.CHARGE_CODE_INTERVAL_TOTAL>/g, obj, "CHARGE_CODE_INTERVAL_TOTAL", base.to_string, sub, context);
                base.parse_element (/<cim:MarketStatementLineItemAliasName.CHARGE_CODE_INTERVAL_DETAIL>([\s\S]*?)<\/cim:MarketStatementLineItemAliasName.CHARGE_CODE_INTERVAL_DETAIL>/g, obj, "CHARGE_CODE_INTERVAL_DETAIL", base.to_string, sub, context);

                var bucket = context.parsed.MarketStatementLineItemAliasName;
                if (null == bucket)
                   context.parsed.MarketStatementLineItemAliasName = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "MarketStatementLineItemAliasName", "TRADE_DATE", base.from_string, fields);
                base.export_element (obj, "MarketStatementLineItemAliasName", "PARENT_CHARGE_GROUP", base.from_string, fields);
                base.export_element (obj, "MarketStatementLineItemAliasName", "CHARGE_GROUP", base.from_string, fields);
                base.export_element (obj, "MarketStatementLineItemAliasName", "CHARGE_CODE_SUMMARY", base.from_string, fields);
                base.export_element (obj, "MarketStatementLineItemAliasName", "CHARGE_CODE_INTERVAL_TOTAL", base.from_string, fields);
                base.export_element (obj, "MarketStatementLineItemAliasName", "CHARGE_CODE_INTERVAL_DETAIL", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MarketStatementLineItemAliasName_collapse" aria-expanded="true" aria-controls="MarketStatementLineItemAliasName_collapse">MarketStatementLineItemAliasName</a>
<div id="MarketStatementLineItemAliasName_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#TRADE_DATE}}<div><b>TRADE_DATE</b>: {{TRADE_DATE}}</div>{{/TRADE_DATE}}
{{#PARENT_CHARGE_GROUP}}<div><b>PARENT_CHARGE_GROUP</b>: {{PARENT_CHARGE_GROUP}}</div>{{/PARENT_CHARGE_GROUP}}
{{#CHARGE_GROUP}}<div><b>CHARGE_GROUP</b>: {{CHARGE_GROUP}}</div>{{/CHARGE_GROUP}}
{{#CHARGE_CODE_SUMMARY}}<div><b>CHARGE_CODE_SUMMARY</b>: {{CHARGE_CODE_SUMMARY}}</div>{{/CHARGE_CODE_SUMMARY}}
{{#CHARGE_CODE_INTERVAL_TOTAL}}<div><b>CHARGE_CODE_INTERVAL_TOTAL</b>: {{CHARGE_CODE_INTERVAL_TOTAL}}</div>{{/CHARGE_CODE_INTERVAL_TOTAL}}
{{#CHARGE_CODE_INTERVAL_DETAIL}}<div><b>CHARGE_CODE_INTERVAL_DETAIL</b>: {{CHARGE_CODE_INTERVAL_DETAIL}}</div>{{/CHARGE_CODE_INTERVAL_DETAIL}}
</div>
`
                );
           }        }

        class CleanTradeProductType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CleanTradeProductType;
                if (null == bucket)
                   cim_data.CleanTradeProductType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CleanTradeProductType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CleanTradeProductType";
                base.parse_element (/<cim:CleanTradeProductType.PHY>([\s\S]*?)<\/cim:CleanTradeProductType.PHY>/g, obj, "PHY", base.to_string, sub, context);
                base.parse_element (/<cim:CleanTradeProductType.APN>([\s\S]*?)<\/cim:CleanTradeProductType.APN>/g, obj, "APN", base.to_string, sub, context);
                base.parse_element (/<cim:CleanTradeProductType.CPT>([\s\S]*?)<\/cim:CleanTradeProductType.CPT>/g, obj, "CPT", base.to_string, sub, context);
                base.parse_element (/<cim:CleanTradeProductType.RUT>([\s\S]*?)<\/cim:CleanTradeProductType.RUT>/g, obj, "RUT", base.to_string, sub, context);
                base.parse_element (/<cim:CleanTradeProductType.RDT>([\s\S]*?)<\/cim:CleanTradeProductType.RDT>/g, obj, "RDT", base.to_string, sub, context);
                base.parse_element (/<cim:CleanTradeProductType.SRT>([\s\S]*?)<\/cim:CleanTradeProductType.SRT>/g, obj, "SRT", base.to_string, sub, context);
                base.parse_element (/<cim:CleanTradeProductType.NRT>([\s\S]*?)<\/cim:CleanTradeProductType.NRT>/g, obj, "NRT", base.to_string, sub, context);

                var bucket = context.parsed.CleanTradeProductType;
                if (null == bucket)
                   context.parsed.CleanTradeProductType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#CleanTradeProductType_collapse" aria-expanded="true" aria-controls="CleanTradeProductType_collapse">CleanTradeProductType</a>
<div id="CleanTradeProductType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#PHY}}<div><b>PHY</b>: {{PHY}}</div>{{/PHY}}
{{#APN}}<div><b>APN</b>: {{APN}}</div>{{/APN}}
{{#CPT}}<div><b>CPT</b>: {{CPT}}</div>{{/CPT}}
{{#RUT}}<div><b>RUT</b>: {{RUT}}</div>{{/RUT}}
{{#RDT}}<div><b>RDT</b>: {{RDT}}</div>{{/RDT}}
{{#SRT}}<div><b>SRT</b>: {{SRT}}</div>{{/SRT}}
{{#NRT}}<div><b>NRT</b>: {{NRT}}</div>{{/NRT}}
</div>
`
                );
           }        }

        class OASISIntervalType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OASISIntervalType;
                if (null == bucket)
                   cim_data.OASISIntervalType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OASISIntervalType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "OASISIntervalType";
                base.parse_element (/<cim:OASISIntervalType.BEGINNING>([\s\S]*?)<\/cim:OASISIntervalType.BEGINNING>/g, obj, "BEGINNING", base.to_string, sub, context);
                base.parse_element (/<cim:OASISIntervalType.ENDING>([\s\S]*?)<\/cim:OASISIntervalType.ENDING>/g, obj, "ENDING", base.to_string, sub, context);

                var bucket = context.parsed.OASISIntervalType;
                if (null == bucket)
                   context.parsed.OASISIntervalType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "OASISIntervalType", "BEGINNING", base.from_string, fields);
                base.export_element (obj, "OASISIntervalType", "ENDING", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#OASISIntervalType_collapse" aria-expanded="true" aria-controls="OASISIntervalType_collapse">OASISIntervalType</a>
<div id="OASISIntervalType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#BEGINNING}}<div><b>BEGINNING</b>: {{BEGINNING}}</div>{{/BEGINNING}}
{{#ENDING}}<div><b>ENDING</b>: {{ENDING}}</div>{{/ENDING}}
</div>
`
                );
           }        }

        /**
         * market statement document type
         *
         */
        class MarketStatementDocType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MarketStatementDocType;
                if (null == bucket)
                   cim_data.MarketStatementDocType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketStatementDocType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MarketStatementDocType";
                base.parse_element (/<cim:MarketStatementDocType.CREDIT>([\s\S]*?)<\/cim:MarketStatementDocType.CREDIT>/g, obj, "CREDIT", base.to_string, sub, context);
                base.parse_element (/<cim:MarketStatementDocType.MARKET_INITIAL>([\s\S]*?)<\/cim:MarketStatementDocType.MARKET_INITIAL>/g, obj, "MARKET_INITIAL", base.to_string, sub, context);
                base.parse_element (/<cim:MarketStatementDocType.MARKET_RECALC>([\s\S]*?)<\/cim:MarketStatementDocType.MARKET_RECALC>/g, obj, "MARKET_RECALC", base.to_string, sub, context);

                var bucket = context.parsed.MarketStatementDocType;
                if (null == bucket)
                   context.parsed.MarketStatementDocType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "MarketStatementDocType", "CREDIT", base.from_string, fields);
                base.export_element (obj, "MarketStatementDocType", "MARKET_INITIAL", base.from_string, fields);
                base.export_element (obj, "MarketStatementDocType", "MARKET_RECALC", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MarketStatementDocType_collapse" aria-expanded="true" aria-controls="MarketStatementDocType_collapse">MarketStatementDocType</a>
<div id="MarketStatementDocType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#CREDIT}}<div><b>CREDIT</b>: {{CREDIT}}</div>{{/CREDIT}}
{{#MARKET_INITIAL}}<div><b>MARKET_INITIAL</b>: {{MARKET_INITIAL}}</div>{{/MARKET_INITIAL}}
{{#MARKET_RECALC}}<div><b>MARKET_RECALC</b>: {{MARKET_RECALC}}</div>{{/MARKET_RECALC}}
</div>
`
                );
           }        }

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
        class MeasurementTypeEMS extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MeasurementTypeEMS;
                if (null == bucket)
                   cim_data.MeasurementTypeEMS = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MeasurementTypeEMS[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
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

                var bucket = context.parsed.MeasurementTypeEMS;
                if (null == bucket)
                   context.parsed.MeasurementTypeEMS = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MeasurementTypeEMS_collapse" aria-expanded="true" aria-controls="MeasurementTypeEMS_collapse">MeasurementTypeEMS</a>
<div id="MeasurementTypeEMS_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#PF}}<div><b>PF</b>: {{PF}}</div>{{/PF}}
{{#PIL}}<div><b>PIL</b>: {{PIL}}</div>{{/PIL}}
{{#PIAL}}<div><b>PIAL</b>: {{PIAL}}</div>{{/PIAL}}
{{#PIML}}<div><b>PIML</b>: {{PIML}}</div>{{/PIML}}
{{#POL}}<div><b>POL</b>: {{POL}}</div>{{/POL}}
{{#POAL}}<div><b>POAL</b>: {{POAL}}</div>{{/POAL}}
{{#OARL}}<div><b>OARL</b>: {{OARL}}</div>{{/OARL}}
{{#GO}}<div><b>GO</b>: {{GO}}</div>{{/GO}}
{{#GMOL}}<div><b>GMOL</b>: {{GMOL}}</div>{{/GMOL}}
{{#GNOL}}<div><b>GNOL</b>: {{GNOL}}</div>{{/GNOL}}
{{#GR}}<div><b>GR</b>: {{GR}}</div>{{/GR}}
{{#GS}}<div><b>GS</b>: {{GS}}</div>{{/GS}}
{{#PP}}<div><b>PP</b>: {{PP}}</div>{{/PP}}
{{#SL}}<div><b>SL</b>: {{SL}}</div>{{/SL}}
{{#ACE}}<div><b>ACE</b>: {{ACE}}</div>{{/ACE}}
{{#INADV}}<div><b>INADV</b>: {{INADV}}</div>{{/INADV}}
</div>
`
                );
           }        }

        class ResourceCertificationType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ResourceCertificationType;
                if (null == bucket)
                   cim_data.ResourceCertificationType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ResourceCertificationType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ResourceCertificationType";
                base.parse_element (/<cim:ResourceCertificationType.GT>([\s\S]*?)<\/cim:ResourceCertificationType.GT>/g, obj, "GT", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceCertificationType.RG>([\s\S]*?)<\/cim:ResourceCertificationType.RG>/g, obj, "RG", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceCertificationType.SR>([\s\S]*?)<\/cim:ResourceCertificationType.SR>/g, obj, "SR", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceCertificationType.NR>([\s\S]*?)<\/cim:ResourceCertificationType.NR>/g, obj, "NR", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceCertificationType.IR>([\s\S]*?)<\/cim:ResourceCertificationType.IR>/g, obj, "IR", base.to_string, sub, context);

                var bucket = context.parsed.ResourceCertificationType;
                if (null == bucket)
                   context.parsed.ResourceCertificationType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ResourceCertificationType", "GT", base.from_string, fields);
                base.export_element (obj, "ResourceCertificationType", "RG", base.from_string, fields);
                base.export_element (obj, "ResourceCertificationType", "SR", base.from_string, fields);
                base.export_element (obj, "ResourceCertificationType", "NR", base.from_string, fields);
                base.export_element (obj, "ResourceCertificationType", "IR", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ResourceCertificationType_collapse" aria-expanded="true" aria-controls="ResourceCertificationType_collapse">ResourceCertificationType</a>
<div id="ResourceCertificationType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#GT}}<div><b>GT</b>: {{GT}}</div>{{/GT}}
{{#RG}}<div><b>RG</b>: {{RG}}</div>{{/RG}}
{{#SR}}<div><b>SR</b>: {{SR}}</div>{{/SR}}
{{#NR}}<div><b>NR</b>: {{NR}}</div>{{/NR}}
{{#IR}}<div><b>IR</b>: {{IR}}</div>{{/IR}}
</div>
`
                );
           }        }

        class SelfSchedTypeRawBid extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SelfSchedTypeRawBid;
                if (null == bucket)
                   cim_data.SelfSchedTypeRawBid = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SelfSchedTypeRawBid[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
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

                var bucket = context.parsed.SelfSchedTypeRawBid;
                if (null == bucket)
                   context.parsed.SelfSchedTypeRawBid = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#SelfSchedTypeRawBid_collapse" aria-expanded="true" aria-controls="SelfSchedTypeRawBid_collapse">SelfSchedTypeRawBid</a>
<div id="SelfSchedTypeRawBid_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#PT}}<div><b>PT</b>: {{PT}}</div>{{/PT}}
{{#ETC}}<div><b>ETC</b>: {{ETC}}</div>{{/ETC}}
{{#TOR}}<div><b>TOR</b>: {{TOR}}</div>{{/TOR}}
{{#RMT}}<div><b>RMT</b>: {{RMT}}</div>{{/RMT}}
{{#SP}}<div><b>SP</b>: {{SP}}</div>{{/SP}}
{{#RA}}<div><b>RA</b>: {{RA}}</div>{{/RA}}
{{#BAS}}<div><b>BAS</b>: {{BAS}}</div>{{/BAS}}
{{#LOF}}<div><b>LOF</b>: {{LOF}}</div>{{/LOF}}
{{#WHL}}<div><b>WHL</b>: {{WHL}}</div>{{/WHL}}
{{#LPT}}<div><b>LPT</b>: {{LPT}}</div>{{/LPT}}
</div>
`
                );
           }        }

        class DispatchTransactionType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DispatchTransactionType;
                if (null == bucket)
                   cim_data.DispatchTransactionType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DispatchTransactionType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DispatchTransactionType";
                base.parse_element (/<cim:DispatchTransactionType.Purchase>([\s\S]*?)<\/cim:DispatchTransactionType.Purchase>/g, obj, "Purchase", base.to_string, sub, context);
                base.parse_element (/<cim:DispatchTransactionType.Sale>([\s\S]*?)<\/cim:DispatchTransactionType.Sale>/g, obj, "Sale", base.to_string, sub, context);

                var bucket = context.parsed.DispatchTransactionType;
                if (null == bucket)
                   context.parsed.DispatchTransactionType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "DispatchTransactionType", "Purchase", base.from_string, fields);
                base.export_element (obj, "DispatchTransactionType", "Sale", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#DispatchTransactionType_collapse" aria-expanded="true" aria-controls="DispatchTransactionType_collapse">DispatchTransactionType</a>
<div id="DispatchTransactionType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#Purchase}}<div><b>Purchase</b>: {{Purchase}}</div>{{/Purchase}}
{{#Sale}}<div><b>Sale</b>: {{Sale}}</div>{{/Sale}}
</div>
`
                );
           }        }

        /**
         * Self Schedule Types applicable to Mitigated Bid
         *
         */
        class SelfScheduleTypeMB extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SelfScheduleTypeMB;
                if (null == bucket)
                   cim_data.SelfScheduleTypeMB = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SelfScheduleTypeMB[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SelfScheduleTypeMB";
                base.parse_element (/<cim:SelfScheduleTypeMB.RMR>([\s\S]*?)<\/cim:SelfScheduleTypeMB.RMR>/g, obj, "RMR", base.to_string, sub, context);

                var bucket = context.parsed.SelfScheduleTypeMB;
                if (null == bucket)
                   context.parsed.SelfScheduleTypeMB = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "SelfScheduleTypeMB", "RMR", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#SelfScheduleTypeMB_collapse" aria-expanded="true" aria-controls="SelfScheduleTypeMB_collapse">SelfScheduleTypeMB</a>
<div id="SelfScheduleTypeMB_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#RMR}}<div><b>RMR</b>: {{RMR}}</div>{{/RMR}}
</div>
`
                );
           }        }

        /**
         * Y - indicates a resource is capable of setting the Markte Clearing Price
         * S - indicates the resource must submit bids for energy at \$ 0
         *
         * N - indicates the resource does not have to submit bids for energy at \$ 0
         *
         */
        class PriceSetFlag extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PriceSetFlag;
                if (null == bucket)
                   cim_data.PriceSetFlag = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PriceSetFlag[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "PriceSetFlag";
                base.parse_element (/<cim:PriceSetFlag.Y>([\s\S]*?)<\/cim:PriceSetFlag.Y>/g, obj, "Y", base.to_string, sub, context);
                base.parse_element (/<cim:PriceSetFlag.S>([\s\S]*?)<\/cim:PriceSetFlag.S>/g, obj, "S", base.to_string, sub, context);
                base.parse_element (/<cim:PriceSetFlag.N>([\s\S]*?)<\/cim:PriceSetFlag.N>/g, obj, "N", base.to_string, sub, context);

                var bucket = context.parsed.PriceSetFlag;
                if (null == bucket)
                   context.parsed.PriceSetFlag = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "PriceSetFlag", "Y", base.from_string, fields);
                base.export_element (obj, "PriceSetFlag", "S", base.from_string, fields);
                base.export_element (obj, "PriceSetFlag", "N", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#PriceSetFlag_collapse" aria-expanded="true" aria-controls="PriceSetFlag_collapse">PriceSetFlag</a>
<div id="PriceSetFlag_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#Y}}<div><b>Y</b>: {{Y}}</div>{{/Y}}
{{#S}}<div><b>S</b>: {{S}}</div>{{/S}}
{{#N}}<div><b>N</b>: {{N}}</div>{{/N}}
</div>
`
                );
           }        }

        class LFCResourceType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LFCResourceType;
                if (null == bucket)
                   cim_data.LFCResourceType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LFCResourceType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "LFCResourceType";
                base.parse_element (/<cim:LFCResourceType.GEN>([\s\S]*?)<\/cim:LFCResourceType.GEN>/g, obj, "GEN", base.to_string, sub, context);
                base.parse_element (/<cim:LFCResourceType.PUMP>([\s\S]*?)<\/cim:LFCResourceType.PUMP>/g, obj, "PUMP", base.to_string, sub, context);

                var bucket = context.parsed.LFCResourceType;
                if (null == bucket)
                   context.parsed.LFCResourceType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "LFCResourceType", "GEN", base.from_string, fields);
                base.export_element (obj, "LFCResourceType", "PUMP", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#LFCResourceType_collapse" aria-expanded="true" aria-controls="LFCResourceType_collapse">LFCResourceType</a>
<div id="LFCResourceType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#GEN}}<div><b>GEN</b>: {{GEN}}</div>{{/GEN}}
{{#PUMP}}<div><b>PUMP</b>: {{PUMP}}</div>{{/PUMP}}
</div>
`
                );
           }        }

        class UOMType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.UOMType;
                if (null == bucket)
                   cim_data.UOMType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.UOMType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
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

                var bucket = context.parsed.UOMType;
                if (null == bucket)
                   context.parsed.UOMType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#UOMType_collapse" aria-expanded="true" aria-controls="UOMType_collapse">UOMType</a>
<div id="UOMType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#MW}}<div><b>MW</b>: {{MW}}</div>{{/MW}}
{{#MWh}}<div><b>MWh</b>: {{MWh}}</div>{{/MWh}}
{{#US$}}<div><b>US$</b>: {{US$}}</div>{{/US$}}
{{#%}}<div><b>%</b>: {{%}}</div>{{/%}}
{{#INTEGER}}<div><b>INTEGER</b>: {{INTEGER}}</div>{{/INTEGER}}
{{#FLAG}}<div><b>FLAG</b>: {{FLAG}}</div>{{/FLAG}}
{{#$/mmBTU}}<div><b>$/mmBTU</b>: {{$/mmBTU}}</div>{{/$/mmBTU}}
{{#$/lb}}<div><b>$/lb</b>: {{$/lb}}</div>{{/$/lb}}
{{#US$/MW}}<div><b>US$/MW</b>: {{US$/MW}}</div>{{/US$/MW}}
{{#US$/MWh}}<div><b>US$/MWh</b>: {{US$/MWh}}</div>{{/US$/MWh}}
{{#FACTOR}}<div><b>FACTOR</b>: {{FACTOR}}</div>{{/FACTOR}}
</div>
`
                );
           }        }

        /**
         * zone type
         *
         */
        class ZoneType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ZoneType;
                if (null == bucket)
                   cim_data.ZoneType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ZoneType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ZoneType";
                base.parse_element (/<cim:ZoneType.LOADZONE>([\s\S]*?)<\/cim:ZoneType.LOADZONE>/g, obj, "LOADZONE", base.to_string, sub, context);
                base.parse_element (/<cim:ZoneType.TRADINGHUB>([\s\S]*?)<\/cim:ZoneType.TRADINGHUB>/g, obj, "TRADINGHUB", base.to_string, sub, context);
                base.parse_element (/<cim:ZoneType.RUCZONE>([\s\S]*?)<\/cim:ZoneType.RUCZONE>/g, obj, "RUCZONE", base.to_string, sub, context);
                base.parse_element (/<cim:ZoneType.ASREGION>([\s\S]*?)<\/cim:ZoneType.ASREGION>/g, obj, "ASREGION", base.to_string, sub, context);
                base.parse_element (/<cim:ZoneType.DCA>([\s\S]*?)<\/cim:ZoneType.DCA>/g, obj, "DCA", base.to_string, sub, context);

                var bucket = context.parsed.ZoneType;
                if (null == bucket)
                   context.parsed.ZoneType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ZoneType", "LOADZONE", base.from_string, fields);
                base.export_element (obj, "ZoneType", "TRADINGHUB", base.from_string, fields);
                base.export_element (obj, "ZoneType", "RUCZONE", base.from_string, fields);
                base.export_element (obj, "ZoneType", "ASREGION", base.from_string, fields);
                base.export_element (obj, "ZoneType", "DCA", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ZoneType_collapse" aria-expanded="true" aria-controls="ZoneType_collapse">ZoneType</a>
<div id="ZoneType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#LOADZONE}}<div><b>LOADZONE</b>: {{LOADZONE}}</div>{{/LOADZONE}}
{{#TRADINGHUB}}<div><b>TRADINGHUB</b>: {{TRADINGHUB}}</div>{{/TRADINGHUB}}
{{#RUCZONE}}<div><b>RUCZONE</b>: {{RUCZONE}}</div>{{/RUCZONE}}
{{#ASREGION}}<div><b>ASREGION</b>: {{ASREGION}}</div>{{/ASREGION}}
{{#DCA}}<div><b>DCA</b>: {{DCA}}</div>{{/DCA}}
</div>
`
                );
           }        }

        class JobScheduleType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.JobScheduleType;
                if (null == bucket)
                   cim_data.JobScheduleType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.JobScheduleType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "JobScheduleType";
                base.parse_element (/<cim:JobScheduleType.CRITICAL>([\s\S]*?)<\/cim:JobScheduleType.CRITICAL>/g, obj, "CRITICAL", base.to_string, sub, context);
                base.parse_element (/<cim:JobScheduleType.NONCRITICAL>([\s\S]*?)<\/cim:JobScheduleType.NONCRITICAL>/g, obj, "NONCRITICAL", base.to_string, sub, context);

                var bucket = context.parsed.JobScheduleType;
                if (null == bucket)
                   context.parsed.JobScheduleType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "JobScheduleType", "CRITICAL", base.from_string, fields);
                base.export_element (obj, "JobScheduleType", "NONCRITICAL", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#JobScheduleType_collapse" aria-expanded="true" aria-controls="JobScheduleType_collapse">JobScheduleType</a>
<div id="JobScheduleType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#CRITICAL}}<div><b>CRITICAL</b>: {{CRITICAL}}</div>{{/CRITICAL}}
{{#NONCRITICAL}}<div><b>NONCRITICAL</b>: {{NONCRITICAL}}</div>{{/NONCRITICAL}}
</div>
`
                );
           }        }

        class DispatchAcceptStatus extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DispatchAcceptStatus;
                if (null == bucket)
                   cim_data.DispatchAcceptStatus = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DispatchAcceptStatus[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DispatchAcceptStatus";
                base.parse_element (/<cim:DispatchAcceptStatus.NON_RESPONSE>([\s\S]*?)<\/cim:DispatchAcceptStatus.NON_RESPONSE>/g, obj, "NON_RESPONSE", base.to_string, sub, context);
                base.parse_element (/<cim:DispatchAcceptStatus.OK>([\s\S]*?)<\/cim:DispatchAcceptStatus.OK>/g, obj, "OK", base.to_string, sub, context);
                base.parse_element (/<cim:DispatchAcceptStatus.CANNOT>([\s\S]*?)<\/cim:DispatchAcceptStatus.CANNOT>/g, obj, "CANNOT", base.to_string, sub, context);
                base.parse_element (/<cim:DispatchAcceptStatus.ACCEPT>([\s\S]*?)<\/cim:DispatchAcceptStatus.ACCEPT>/g, obj, "ACCEPT", base.to_string, sub, context);
                base.parse_element (/<cim:DispatchAcceptStatus.DECLINE>([\s\S]*?)<\/cim:DispatchAcceptStatus.DECLINE>/g, obj, "DECLINE", base.to_string, sub, context);
                base.parse_element (/<cim:DispatchAcceptStatus.PARTIAL>([\s\S]*?)<\/cim:DispatchAcceptStatus.PARTIAL>/g, obj, "PARTIAL", base.to_string, sub, context);

                var bucket = context.parsed.DispatchAcceptStatus;
                if (null == bucket)
                   context.parsed.DispatchAcceptStatus = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "DispatchAcceptStatus", "NON_RESPONSE", base.from_string, fields);
                base.export_element (obj, "DispatchAcceptStatus", "OK", base.from_string, fields);
                base.export_element (obj, "DispatchAcceptStatus", "CANNOT", base.from_string, fields);
                base.export_element (obj, "DispatchAcceptStatus", "ACCEPT", base.from_string, fields);
                base.export_element (obj, "DispatchAcceptStatus", "DECLINE", base.from_string, fields);
                base.export_element (obj, "DispatchAcceptStatus", "PARTIAL", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#DispatchAcceptStatus_collapse" aria-expanded="true" aria-controls="DispatchAcceptStatus_collapse">DispatchAcceptStatus</a>
<div id="DispatchAcceptStatus_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#NON_RESPONSE}}<div><b>NON_RESPONSE</b>: {{NON_RESPONSE}}</div>{{/NON_RESPONSE}}
{{#OK}}<div><b>OK</b>: {{OK}}</div>{{/OK}}
{{#CANNOT}}<div><b>CANNOT</b>: {{CANNOT}}</div>{{/CANNOT}}
{{#ACCEPT}}<div><b>ACCEPT</b>: {{ACCEPT}}</div>{{/ACCEPT}}
{{#DECLINE}}<div><b>DECLINE</b>: {{DECLINE}}</div>{{/DECLINE}}
{{#PARTIAL}}<div><b>PARTIAL</b>: {{PARTIAL}}</div>{{/PARTIAL}}
</div>
`
                );
           }        }

        class MktSubClassType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktSubClassType;
                if (null == bucket)
                   cim_data.MktSubClassType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktSubClassType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
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

                var bucket = context.parsed.MktSubClassType;
                if (null == bucket)
                   context.parsed.MktSubClassType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MktSubClassType_collapse" aria-expanded="true" aria-controls="MktSubClassType_collapse">MktSubClassType</a>
<div id="MktSubClassType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#Forecasted_UDC_Direct_Access_Load}}<div><b>Forecasted_UDC_Direct_Access_Load</b>: {{Forecasted_UDC_Direct_Access_Load}}</div>{{/Forecasted_UDC_Direct_Access_Load}}
{{#Day_Ahead_RMR}}<div><b>Day_Ahead_RMR</b>: {{Day_Ahead_RMR}}</div>{{/Day_Ahead_RMR}}
{{#Ten_Min_Expost_Market_Info}}<div><b>Ten_Min_Expost_Market_Info</b>: {{Ten_Min_Expost_Market_Info}}</div>{{/Ten_Min_Expost_Market_Info}}
{{#Day_Ahead_Interim_Market_Info}}<div><b>Day_Ahead_Interim_Market_Info</b>: {{Day_Ahead_Interim_Market_Info}}</div>{{/Day_Ahead_Interim_Market_Info}}
{{#Day_Ahead_Final_Market_Info}}<div><b>Day_Ahead_Final_Market_Info</b>: {{Day_Ahead_Final_Market_Info}}</div>{{/Day_Ahead_Final_Market_Info}}
{{#TTC/ATC_Forecast_Information}}<div><b>TTC/ATC_Forecast_Information</b>: {{TTC/ATC_Forecast_Information}}</div>{{/TTC/ATC_Forecast_Information}}
{{#TTC/ATC_Hourly_Forecast}}<div><b>TTC/ATC_Hourly_Forecast</b>: {{TTC/ATC_Hourly_Forecast}}</div>{{/TTC/ATC_Hourly_Forecast}}
{{#Branch_Group_Derates}}<div><b>Branch_Group_Derates</b>: {{Branch_Group_Derates}}</div>{{/Branch_Group_Derates}}
{{#Hour_Ahead_Market_Info}}<div><b>Hour_Ahead_Market_Info</b>: {{Hour_Ahead_Market_Info}}</div>{{/Hour_Ahead_Market_Info}}
{{#Hourly_Expost_Market_Info}}<div><b>Hourly_Expost_Market_Info</b>: {{Hourly_Expost_Market_Info}}</div>{{/Hourly_Expost_Market_Info}}
{{#Public_Bid_Data}}<div><b>Public_Bid_Data</b>: {{Public_Bid_Data}}</div>{{/Public_Bid_Data}}
{{#Day_Ahead_Forecast_Information}}<div><b>Day_Ahead_Forecast_Information</b>: {{Day_Ahead_Forecast_Information}}</div>{{/Day_Ahead_Forecast_Information}}
</div>
`
                );
           }        }

        class SpinningEventType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SpinningEventType;
                if (null == bucket)
                   cim_data.SpinningEventType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SpinningEventType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SpinningEventType";
                base.parse_element (/<cim:SpinningEventType.RZ>([\s\S]*?)<\/cim:SpinningEventType.RZ>/g, obj, "RZ", base.to_string, sub, context);
                base.parse_element (/<cim:SpinningEventType.AA>([\s\S]*?)<\/cim:SpinningEventType.AA>/g, obj, "AA", base.to_string, sub, context);
                base.parse_element (/<cim:SpinningEventType.CA>([\s\S]*?)<\/cim:SpinningEventType.CA>/g, obj, "CA", base.to_string, sub, context);

                var bucket = context.parsed.SpinningEventType;
                if (null == bucket)
                   context.parsed.SpinningEventType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "SpinningEventType", "RZ", base.from_string, fields);
                base.export_element (obj, "SpinningEventType", "AA", base.from_string, fields);
                base.export_element (obj, "SpinningEventType", "CA", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#SpinningEventType_collapse" aria-expanded="true" aria-controls="SpinningEventType_collapse">SpinningEventType</a>
<div id="SpinningEventType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#RZ}}<div><b>RZ</b>: {{RZ}}</div>{{/RZ}}
{{#AA}}<div><b>AA</b>: {{AA}}</div>{{/AA}}
{{#CA}}<div><b>CA</b>: {{CA}}</div>{{/CA}}
</div>
`
                );
           }        }

        class BidPriceCapType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BidPriceCapType;
                if (null == bucket)
                   cim_data.BidPriceCapType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BidPriceCapType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "BidPriceCapType";
                base.parse_element (/<cim:BidPriceCapType.ENERGY>([\s\S]*?)<\/cim:BidPriceCapType.ENERGY>/g, obj, "ENERGY", base.to_string, sub, context);
                base.parse_element (/<cim:BidPriceCapType.AS>([\s\S]*?)<\/cim:BidPriceCapType.AS>/g, obj, "AS", base.to_string, sub, context);
                base.parse_element (/<cim:BidPriceCapType.RUC>([\s\S]*?)<\/cim:BidPriceCapType.RUC>/g, obj, "RUC", base.to_string, sub, context);

                var bucket = context.parsed.BidPriceCapType;
                if (null == bucket)
                   context.parsed.BidPriceCapType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "BidPriceCapType", "ENERGY", base.from_string, fields);
                base.export_element (obj, "BidPriceCapType", "AS", base.from_string, fields);
                base.export_element (obj, "BidPriceCapType", "RUC", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#BidPriceCapType_collapse" aria-expanded="true" aria-controls="BidPriceCapType_collapse">BidPriceCapType</a>
<div id="BidPriceCapType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#ENERGY}}<div><b>ENERGY</b>: {{ENERGY}}</div>{{/ENERGY}}
{{#AS}}<div><b>AS</b>: {{AS}}</div>{{/AS}}
{{#RUC}}<div><b>RUC</b>: {{RUC}}</div>{{/RUC}}
</div>
`
                );
           }        }

        /**
         * MIN_CONSTRAINT
         * MAX_CONSTRAINT
         *
         * FIXED_CONSTRAINT
         *
         */
        class ADSInstructionTypeOOS extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ADSInstructionTypeOOS;
                if (null == bucket)
                   cim_data.ADSInstructionTypeOOS = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ADSInstructionTypeOOS[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ADSInstructionTypeOOS";
                base.parse_element (/<cim:ADSInstructionTypeOOS.MIN_CONSTRAINT>([\s\S]*?)<\/cim:ADSInstructionTypeOOS.MIN_CONSTRAINT>/g, obj, "MIN_CONSTRAINT", base.to_string, sub, context);
                base.parse_element (/<cim:ADSInstructionTypeOOS.MAX_CONSTRAINT>([\s\S]*?)<\/cim:ADSInstructionTypeOOS.MAX_CONSTRAINT>/g, obj, "MAX_CONSTRAINT", base.to_string, sub, context);
                base.parse_element (/<cim:ADSInstructionTypeOOS.FIXED_CONSTRAINT>([\s\S]*?)<\/cim:ADSInstructionTypeOOS.FIXED_CONSTRAINT>/g, obj, "FIXED_CONSTRAINT", base.to_string, sub, context);

                var bucket = context.parsed.ADSInstructionTypeOOS;
                if (null == bucket)
                   context.parsed.ADSInstructionTypeOOS = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ADSInstructionTypeOOS", "MIN_CONSTRAINT", base.from_string, fields);
                base.export_element (obj, "ADSInstructionTypeOOS", "MAX_CONSTRAINT", base.from_string, fields);
                base.export_element (obj, "ADSInstructionTypeOOS", "FIXED_CONSTRAINT", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ADSInstructionTypeOOS_collapse" aria-expanded="true" aria-controls="ADSInstructionTypeOOS_collapse">ADSInstructionTypeOOS</a>
<div id="ADSInstructionTypeOOS_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#MIN_CONSTRAINT}}<div><b>MIN_CONSTRAINT</b>: {{MIN_CONSTRAINT}}</div>{{/MIN_CONSTRAINT}}
{{#MAX_CONSTRAINT}}<div><b>MAX_CONSTRAINT</b>: {{MAX_CONSTRAINT}}</div>{{/MAX_CONSTRAINT}}
{{#FIXED_CONSTRAINT}}<div><b>FIXED_CONSTRAINT</b>: {{FIXED_CONSTRAINT}}</div>{{/FIXED_CONSTRAINT}}
</div>
`
                );
           }        }

        class AlarmDisplayType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AlarmDisplayType;
                if (null == bucket)
                   cim_data.AlarmDisplayType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AlarmDisplayType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AlarmDisplayType";
                base.parse_element (/<cim:AlarmDisplayType.Disappear>([\s\S]*?)<\/cim:AlarmDisplayType.Disappear>/g, obj, "Disappear", base.to_string, sub, context);
                base.parse_element (/<cim:AlarmDisplayType.Appear>([\s\S]*?)<\/cim:AlarmDisplayType.Appear>/g, obj, "Appear", base.to_string, sub, context);
                base.parse_element (/<cim:AlarmDisplayType.Fleeting>([\s\S]*?)<\/cim:AlarmDisplayType.Fleeting>/g, obj, "Fleeting", base.to_string, sub, context);

                var bucket = context.parsed.AlarmDisplayType;
                if (null == bucket)
                   context.parsed.AlarmDisplayType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "AlarmDisplayType", "Disappear", base.from_string, fields);
                base.export_element (obj, "AlarmDisplayType", "Appear", base.from_string, fields);
                base.export_element (obj, "AlarmDisplayType", "Fleeting", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#AlarmDisplayType_collapse" aria-expanded="true" aria-controls="AlarmDisplayType_collapse">AlarmDisplayType</a>
<div id="AlarmDisplayType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#Disappear}}<div><b>Disappear</b>: {{Disappear}}</div>{{/Disappear}}
{{#Appear}}<div><b>Appear</b>: {{Appear}}</div>{{/Appear}}
{{#Fleeting}}<div><b>Fleeting</b>: {{Fleeting}}</div>{{/Fleeting}}
</div>
`
                );
           }        }

        class OASISMeasType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OASISMeasType;
                if (null == bucket)
                   cim_data.OASISMeasType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OASISMeasType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
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

                var bucket = context.parsed.OASISMeasType;
                if (null == bucket)
                   context.parsed.OASISMeasType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#OASISMeasType_collapse" aria-expanded="true" aria-controls="OASISMeasType_collapse">OASISMeasType</a>
<div id="OASISMeasType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#MW}}<div><b>MW</b>: {{MW}}</div>{{/MW}}
{{#MWh}}<div><b>MWh</b>: {{MWh}}</div>{{/MWh}}
{{#US$}}<div><b>US$</b>: {{US$}}</div>{{/US$}}
{{#%}}<div><b>%</b>: {{%}}</div>{{/%}}
{{#INTEGER}}<div><b>INTEGER</b>: {{INTEGER}}</div>{{/INTEGER}}
{{#FLAG}}<div><b>FLAG</b>: {{FLAG}}</div>{{/FLAG}}
{{#US$/MW}}<div><b>US$/MW</b>: {{US$/MW}}</div>{{/US$/MW}}
{{#US$/MWh}}<div><b>US$/MWh</b>: {{US$/MWh}}</div>{{/US$/MWh}}
{{#FACTOR}}<div><b>FACTOR</b>: {{FACTOR}}</div>{{/FACTOR}}
</div>
`
                );
           }        }

        class ADSInstructionTypeCommitment extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ADSInstructionTypeCommitment;
                if (null == bucket)
                   cim_data.ADSInstructionTypeCommitment = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ADSInstructionTypeCommitment[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ADSInstructionTypeCommitment";
                base.parse_element (/<cim:ADSInstructionTypeCommitment.START_UP>([\s\S]*?)<\/cim:ADSInstructionTypeCommitment.START_UP>/g, obj, "START_UP", base.to_string, sub, context);
                base.parse_element (/<cim:ADSInstructionTypeCommitment.SHUT_DOWN>([\s\S]*?)<\/cim:ADSInstructionTypeCommitment.SHUT_DOWN>/g, obj, "SHUT_DOWN", base.to_string, sub, context);

                var bucket = context.parsed.ADSInstructionTypeCommitment;
                if (null == bucket)
                   context.parsed.ADSInstructionTypeCommitment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ADSInstructionTypeCommitment", "START_UP", base.from_string, fields);
                base.export_element (obj, "ADSInstructionTypeCommitment", "SHUT_DOWN", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ADSInstructionTypeCommitment_collapse" aria-expanded="true" aria-controls="ADSInstructionTypeCommitment_collapse">ADSInstructionTypeCommitment</a>
<div id="ADSInstructionTypeCommitment_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#START_UP}}<div><b>START_UP</b>: {{START_UP}}</div>{{/START_UP}}
{{#SHUT_DOWN}}<div><b>SHUT_DOWN</b>: {{SHUT_DOWN}}</div>{{/SHUT_DOWN}}
</div>
`
                );
           }        }

        class OASISReportType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OASISReportType;
                if (null == bucket)
                   cim_data.OASISReportType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OASISReportType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
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

                var bucket = context.parsed.OASISReportType;
                if (null == bucket)
                   context.parsed.OASISReportType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#OASISReportType_collapse" aria-expanded="true" aria-controls="OASISReportType_collapse">OASISReportType</a>
<div id="OASISReportType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#AS_DA_RESULT}}<div><b>AS_DA_RESULT</b>: {{AS_DA_RESULT}}</div>{{/AS_DA_RESULT}}
{{#AS_OP_RSRV}}<div><b>AS_OP_RSRV</b>: {{AS_OP_RSRV}}</div>{{/AS_OP_RSRV}}
{{#AS_REQ}}<div><b>AS_REQ</b>: {{AS_REQ}}</div>{{/AS_REQ}}
{{#AS_RTM_RESULT}}<div><b>AS_RTM_RESULT</b>: {{AS_RTM_RESULT}}</div>{{/AS_RTM_RESULT}}
{{#BIDS_PUBLIC}}<div><b>BIDS_PUBLIC</b>: {{BIDS_PUBLIC}}</div>{{/BIDS_PUBLIC}}
{{#CMMT_RA_MLC}}<div><b>CMMT_RA_MLC</b>: {{CMMT_RA_MLC}}</div>{{/CMMT_RA_MLC}}
{{#CMMT_RMR}}<div><b>CMMT_RMR</b>: {{CMMT_RMR}}</div>{{/CMMT_RMR}}
{{#CRR_CLEARING}}<div><b>CRR_CLEARING</b>: {{CRR_CLEARING}}</div>{{/CRR_CLEARING}}
{{#CRR_INVENTORY}}<div><b>CRR_INVENTORY</b>: {{CRR_INVENTORY}}</div>{{/CRR_INVENTORY}}
{{#ENE_EA}}<div><b>ENE_EA</b>: {{ENE_EA}}</div>{{/ENE_EA}}
{{#ENE_HASP}}<div><b>ENE_HASP</b>: {{ENE_HASP}}</div>{{/ENE_HASP}}
{{#ENE_IFM}}<div><b>ENE_IFM</b>: {{ENE_IFM}}</div>{{/ENE_IFM}}
{{#ENE_MPM}}<div><b>ENE_MPM</b>: {{ENE_MPM}}</div>{{/ENE_MPM}}
{{#ENE_RTM}}<div><b>ENE_RTM</b>: {{ENE_RTM}}</div>{{/ENE_RTM}}
{{#ENE_RUC}}<div><b>ENE_RUC</b>: {{ENE_RUC}}</div>{{/ENE_RUC}}
{{#LOSS_DA_HASP}}<div><b>LOSS_DA_HASP</b>: {{LOSS_DA_HASP}}</div>{{/LOSS_DA_HASP}}
{{#LOSS_RTM}}<div><b>LOSS_RTM</b>: {{LOSS_RTM}}</div>{{/LOSS_RTM}}
{{#PRC_AS}}<div><b>PRC_AS</b>: {{PRC_AS}}</div>{{/PRC_AS}}
{{#PRC_FUEL}}<div><b>PRC_FUEL</b>: {{PRC_FUEL}}</div>{{/PRC_FUEL}}
{{#PRC_HRLY_LMP}}<div><b>PRC_HRLY_LMP</b>: {{PRC_HRLY_LMP}}</div>{{/PRC_HRLY_LMP}}
{{#PRC_INTVL_LMP}}<div><b>PRC_INTVL_LMP</b>: {{PRC_INTVL_LMP}}</div>{{/PRC_INTVL_LMP}}
{{#PRC_CNSTR}}<div><b>PRC_CNSTR</b>: {{PRC_CNSTR}}</div>{{/PRC_CNSTR}}
{{#SLD_FCST}}<div><b>SLD_FCST</b>: {{SLD_FCST}}</div>{{/SLD_FCST}}
{{#SLD_FCST_PEAK}}<div><b>SLD_FCST_PEAK</b>: {{SLD_FCST_PEAK}}</div>{{/SLD_FCST_PEAK}}
{{#SLD_MKTS}}<div><b>SLD_MKTS</b>: {{SLD_MKTS}}</div>{{/SLD_MKTS}}
{{#TRNS_ATC}}<div><b>TRNS_ATC</b>: {{TRNS_ATC}}</div>{{/TRNS_ATC}}
{{#TRNS_OUTAGE}}<div><b>TRNS_OUTAGE</b>: {{TRNS_OUTAGE}}</div>{{/TRNS_OUTAGE}}
{{#TRNS_USAGE}}<div><b>TRNS_USAGE</b>: {{TRNS_USAGE}}</div>{{/TRNS_USAGE}}
</div>
`
                );
           }        }

        class SourceSinkFlag extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SourceSinkFlag;
                if (null == bucket)
                   cim_data.SourceSinkFlag = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SourceSinkFlag[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SourceSinkFlag";
                base.parse_element (/<cim:SourceSinkFlag.CSNK>([\s\S]*?)<\/cim:SourceSinkFlag.CSNK>/g, obj, "CSNK", base.to_string, sub, context);
                base.parse_element (/<cim:SourceSinkFlag.CSRC>([\s\S]*?)<\/cim:SourceSinkFlag.CSRC>/g, obj, "CSRC", base.to_string, sub, context);

                var bucket = context.parsed.SourceSinkFlag;
                if (null == bucket)
                   context.parsed.SourceSinkFlag = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "SourceSinkFlag", "CSNK", base.from_string, fields);
                base.export_element (obj, "SourceSinkFlag", "CSRC", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#SourceSinkFlag_collapse" aria-expanded="true" aria-controls="SourceSinkFlag_collapse">SourceSinkFlag</a>
<div id="SourceSinkFlag_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#CSNK}}<div><b>CSNK</b>: {{CSNK}}</div>{{/CSNK}}
{{#CSRC}}<div><b>CSRC</b>: {{CSRC}}</div>{{/CSRC}}
</div>
`
                );
           }        }

        /**
         * MW
         *
         * FLAG
         *
         */
        class UnitTypeEMS extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.UnitTypeEMS;
                if (null == bucket)
                   cim_data.UnitTypeEMS = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.UnitTypeEMS[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "UnitTypeEMS";
                base.parse_element (/<cim:UnitTypeEMS.MW>([\s\S]*?)<\/cim:UnitTypeEMS.MW>/g, obj, "MW", base.to_string, sub, context);
                base.parse_element (/<cim:UnitTypeEMS.FLAG>([\s\S]*?)<\/cim:UnitTypeEMS.FLAG>/g, obj, "FLAG", base.to_string, sub, context);

                var bucket = context.parsed.UnitTypeEMS;
                if (null == bucket)
                   context.parsed.UnitTypeEMS = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "UnitTypeEMS", "MW", base.from_string, fields);
                base.export_element (obj, "UnitTypeEMS", "FLAG", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#UnitTypeEMS_collapse" aria-expanded="true" aria-controls="UnitTypeEMS_collapse">UnitTypeEMS</a>
<div id="UnitTypeEMS_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#MW}}<div><b>MW</b>: {{MW}}</div>{{/MW}}
{{#FLAG}}<div><b>FLAG</b>: {{FLAG}}</div>{{/FLAG}}
</div>
`
                );
           }        }

        /**
         * RU - Regulation Up
         * RD - Regulation Down
         * SR - Spin Reserve
         * NR - Nonspin Reserve
         *
         * AS - Upward Ancillary Service
         *
         */
        class MarketProductTypeAsReq extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MarketProductTypeAsReq;
                if (null == bucket)
                   cim_data.MarketProductTypeAsReq = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketProductTypeAsReq[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MarketProductTypeAsReq";
                base.parse_element (/<cim:MarketProductTypeAsReq.RU>([\s\S]*?)<\/cim:MarketProductTypeAsReq.RU>/g, obj, "RU", base.to_string, sub, context);
                base.parse_element (/<cim:MarketProductTypeAsReq.RD>([\s\S]*?)<\/cim:MarketProductTypeAsReq.RD>/g, obj, "RD", base.to_string, sub, context);
                base.parse_element (/<cim:MarketProductTypeAsReq.SR>([\s\S]*?)<\/cim:MarketProductTypeAsReq.SR>/g, obj, "SR", base.to_string, sub, context);
                base.parse_element (/<cim:MarketProductTypeAsReq.NR>([\s\S]*?)<\/cim:MarketProductTypeAsReq.NR>/g, obj, "NR", base.to_string, sub, context);
                base.parse_element (/<cim:MarketProductTypeAsReq.AS>([\s\S]*?)<\/cim:MarketProductTypeAsReq.AS>/g, obj, "AS", base.to_string, sub, context);

                var bucket = context.parsed.MarketProductTypeAsReq;
                if (null == bucket)
                   context.parsed.MarketProductTypeAsReq = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "MarketProductTypeAsReq", "RU", base.from_string, fields);
                base.export_element (obj, "MarketProductTypeAsReq", "RD", base.from_string, fields);
                base.export_element (obj, "MarketProductTypeAsReq", "SR", base.from_string, fields);
                base.export_element (obj, "MarketProductTypeAsReq", "NR", base.from_string, fields);
                base.export_element (obj, "MarketProductTypeAsReq", "AS", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MarketProductTypeAsReq_collapse" aria-expanded="true" aria-controls="MarketProductTypeAsReq_collapse">MarketProductTypeAsReq</a>
<div id="MarketProductTypeAsReq_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#RU}}<div><b>RU</b>: {{RU}}</div>{{/RU}}
{{#RD}}<div><b>RD</b>: {{RD}}</div>{{/RD}}
{{#SR}}<div><b>SR</b>: {{SR}}</div>{{/SR}}
{{#NR}}<div><b>NR</b>: {{NR}}</div>{{/NR}}
{{#AS}}<div><b>AS</b>: {{AS}}</div>{{/AS}}
</div>
`
                );
           }        }

        /**
         * ancillary serivce types
         *
         */
        class AncillaryCommodityType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AncillaryCommodityType;
                if (null == bucket)
                   cim_data.AncillaryCommodityType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AncillaryCommodityType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AncillaryCommodityType";
                base.parse_element (/<cim:AncillaryCommodityType.REGUP>([\s\S]*?)<\/cim:AncillaryCommodityType.REGUP>/g, obj, "REGUP", base.to_string, sub, context);
                base.parse_element (/<cim:AncillaryCommodityType.REGDN>([\s\S]*?)<\/cim:AncillaryCommodityType.REGDN>/g, obj, "REGDN", base.to_string, sub, context);
                base.parse_element (/<cim:AncillaryCommodityType.SPIN>([\s\S]*?)<\/cim:AncillaryCommodityType.SPIN>/g, obj, "SPIN", base.to_string, sub, context);
                base.parse_element (/<cim:AncillaryCommodityType.NONSPIN>([\s\S]*?)<\/cim:AncillaryCommodityType.NONSPIN>/g, obj, "NONSPIN", base.to_string, sub, context);

                var bucket = context.parsed.AncillaryCommodityType;
                if (null == bucket)
                   context.parsed.AncillaryCommodityType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "AncillaryCommodityType", "REGUP", base.from_string, fields);
                base.export_element (obj, "AncillaryCommodityType", "REGDN", base.from_string, fields);
                base.export_element (obj, "AncillaryCommodityType", "SPIN", base.from_string, fields);
                base.export_element (obj, "AncillaryCommodityType", "NONSPIN", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#AncillaryCommodityType_collapse" aria-expanded="true" aria-controls="AncillaryCommodityType_collapse">AncillaryCommodityType</a>
<div id="AncillaryCommodityType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#REGUP}}<div><b>REGUP</b>: {{REGUP}}</div>{{/REGUP}}
{{#REGDN}}<div><b>REGDN</b>: {{REGDN}}</div>{{/REGDN}}
{{#SPIN}}<div><b>SPIN</b>: {{SPIN}}</div>{{/SPIN}}
{{#NONSPIN}}<div><b>NONSPIN</b>: {{NONSPIN}}</div>{{/NONSPIN}}
</div>
`
                );
           }        }

        class OASISErrDescription extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OASISErrDescription;
                if (null == bucket)
                   cim_data.OASISErrDescription = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OASISErrDescription[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
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

                var bucket = context.parsed.OASISErrDescription;
                if (null == bucket)
                   context.parsed.OASISErrDescription = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#OASISErrDescription_collapse" aria-expanded="true" aria-controls="OASISErrDescription_collapse">OASISErrDescription</a>
<div id="OASISErrDescription_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#No data returned for the specified selection}}<div><b>No data returned for the specified selection</b>: {{No data returned for the specified selection}}</div>{{/No data returned for the specified selection}}
{{#Invalid date format, please use valid date format}}<div><b>Invalid date format, please use valid date format</b>: {{Invalid date format, please use valid date format}}</div>{{/Invalid date format, please use valid date format}}
{{#Timed out waiting for query response}}<div><b>Timed out waiting for query response</b>: {{Timed out waiting for query response}}</div>{{/Timed out waiting for query response}}
{{#Data can be requested for period of 31 days only}}<div><b>Data can be requested for period of 31 days only</b>: {{Data can be requested for period of 31 days only}}</div>{{/Data can be requested for period of 31 days only}}
{{#Report name does not exit, please use valid report name}}<div><b>Report name does not exit, please use valid report name</b>: {{Report name does not exit, please use valid report name}}</div>{{/Report name does not exit, please use valid report name}}
{{#Validation exception during transformation of XML}}<div><b>Validation exception during transformation of XML</b>: {{Validation exception during transformation of XML}}</div>{{/Validation exception during transformation of XML}}
{{#Required file does not exist}}<div><b>Required file does not exist</b>: {{Required file does not exist}}</div>{{/Required file does not exist}}
{{#Out of memory exception}}<div><b>Out of memory exception</b>: {{Out of memory exception}}</div>{{/Out of memory exception}}
{{#Exceptions in reading and writing of XML files}}<div><b>Exceptions in reading and writing of XML files</b>: {{Exceptions in reading and writing of XML files}}</div>{{/Exceptions in reading and writing of XML files}}
{{#System Error}}<div><b>System Error</b>: {{System Error}}</div>{{/System Error}}
</div>
`
                );
           }        }

        class SpinningEventNameType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SpinningEventNameType;
                if (null == bucket)
                   cim_data.SpinningEventNameType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SpinningEventNameType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SpinningEventNameType";
                base.parse_element (/<cim:SpinningEventNameType.EASTERN>([\s\S]*?)<\/cim:SpinningEventNameType.EASTERN>/g, obj, "EASTERN", base.to_string, sub, context);
                base.parse_element (/<cim:SpinningEventNameType.RFC-SR>([\s\S]*?)<\/cim:SpinningEventNameType.RFC-SR>/g, obj, "RFC-SR", base.to_string, sub, context);
                base.parse_element (/<cim:SpinningEventNameType.SOUTH-S>([\s\S]*?)<\/cim:SpinningEventNameType.SOUTH-S>/g, obj, "SOUTH-S", base.to_string, sub, context);
                base.parse_element (/<cim:SpinningEventNameType.PJM>([\s\S]*?)<\/cim:SpinningEventNameType.PJM>/g, obj, "PJM", base.to_string, sub, context);

                var bucket = context.parsed.SpinningEventNameType;
                if (null == bucket)
                   context.parsed.SpinningEventNameType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "SpinningEventNameType", "EASTERN", base.from_string, fields);
                base.export_element (obj, "SpinningEventNameType", "RFC-SR", base.from_string, fields);
                base.export_element (obj, "SpinningEventNameType", "SOUTH-S", base.from_string, fields);
                base.export_element (obj, "SpinningEventNameType", "PJM", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#SpinningEventNameType_collapse" aria-expanded="true" aria-controls="SpinningEventNameType_collapse">SpinningEventNameType</a>
<div id="SpinningEventNameType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#EASTERN}}<div><b>EASTERN</b>: {{EASTERN}}</div>{{/EASTERN}}
{{#RFC-SR}}<div><b>RFC-SR</b>: {{RFC-SR}}</div>{{/RFC-SR}}
{{#SOUTH-S}}<div><b>SOUTH-S</b>: {{SOUTH-S}}</div>{{/SOUTH-S}}
{{#PJM}}<div><b>PJM</b>: {{PJM}}</div>{{/PJM}}
</div>
`
                );
           }        }

        class OASISMasterType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OASISMasterType;
                if (null == bucket)
                   cim_data.OASISMasterType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OASISMasterType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
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

                var bucket = context.parsed.OASISMasterType;
                if (null == bucket)
                   context.parsed.OASISMasterType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#OASISMasterType_collapse" aria-expanded="true" aria-controls="OASISMasterType_collapse">OASISMasterType</a>
<div id="OASISMasterType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#ATL_PNODE}}<div><b>ATL_PNODE</b>: {{ATL_PNODE}}</div>{{/ATL_PNODE}}
{{#ATL_APNODE}}<div><b>ATL_APNODE</b>: {{ATL_APNODE}}</div>{{/ATL_APNODE}}
{{#ATL_LDF}}<div><b>ATL_LDF</b>: {{ATL_LDF}}</div>{{/ATL_LDF}}
{{#ATL_LAP}}<div><b>ATL_LAP</b>: {{ATL_LAP}}</div>{{/ATL_LAP}}
{{#ATL_RESOURCE}}<div><b>ATL_RESOURCE</b>: {{ATL_RESOURCE}}</div>{{/ATL_RESOURCE}}
{{#ATL_HUB}}<div><b>ATL_HUB</b>: {{ATL_HUB}}</div>{{/ATL_HUB}}
{{#ATL_PNODE_MAP}}<div><b>ATL_PNODE_MAP</b>: {{ATL_PNODE_MAP}}</div>{{/ATL_PNODE_MAP}}
{{#ATL_AS_REGION}}<div><b>ATL_AS_REGION</b>: {{ATL_AS_REGION}}</div>{{/ATL_AS_REGION}}
{{#ATL_AS_REGION_MAP}}<div><b>ATL_AS_REGION_MAP</b>: {{ATL_AS_REGION_MAP}}</div>{{/ATL_AS_REGION_MAP}}
{{#ATL_RUC_ZONE}}<div><b>ATL_RUC_ZONE</b>: {{ATL_RUC_ZONE}}</div>{{/ATL_RUC_ZONE}}
{{#ATL_RUC_ZONE_MAP}}<div><b>ATL_RUC_ZONE_MAP</b>: {{ATL_RUC_ZONE_MAP}}</div>{{/ATL_RUC_ZONE_MAP}}
{{#ATL_TAC_AREA}}<div><b>ATL_TAC_AREA</b>: {{ATL_TAC_AREA}}</div>{{/ATL_TAC_AREA}}
{{#ATL_TAC_AREA_MAP}}<div><b>ATL_TAC_AREA_MAP</b>: {{ATL_TAC_AREA_MAP}}</div>{{/ATL_TAC_AREA_MAP}}
{{#ATL_TIEPOINT}}<div><b>ATL_TIEPOINT</b>: {{ATL_TIEPOINT}}</div>{{/ATL_TIEPOINT}}
{{#ATL_TI}}<div><b>ATL_TI</b>: {{ATL_TI}}</div>{{/ATL_TI}}
{{#ATL_PUB}}<div><b>ATL_PUB</b>: {{ATL_PUB}}</div>{{/ATL_PUB}}
{{#ATL_STAT}}<div><b>ATL_STAT</b>: {{ATL_STAT}}</div>{{/ATL_STAT}}
{{#ATL_PUB_SCHED}}<div><b>ATL_PUB_SCHED</b>: {{ATL_PUB_SCHED}}</div>{{/ATL_PUB_SCHED}}
{{#ATL_XREF}}<div><b>ATL_XREF</b>: {{ATL_XREF}}</div>{{/ATL_XREF}}
</div>
`
                );
           }        }

        class OASISErrCode extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OASISErrCode;
                if (null == bucket)
                   cim_data.OASISErrCode = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OASISErrCode[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
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

                var bucket = context.parsed.OASISErrCode;
                if (null == bucket)
                   context.parsed.OASISErrCode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#OASISErrCode_collapse" aria-expanded="true" aria-controls="OASISErrCode_collapse">OASISErrCode</a>
<div id="OASISErrCode_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#1000}}<div><b>1000</b>: {{1000}}</div>{{/1000}}
{{#1001}}<div><b>1001</b>: {{1001}}</div>{{/1001}}
{{#1002}}<div><b>1002</b>: {{1002}}</div>{{/1002}}
{{#1003}}<div><b>1003</b>: {{1003}}</div>{{/1003}}
{{#1004}}<div><b>1004</b>: {{1004}}</div>{{/1004}}
{{#1005}}<div><b>1005</b>: {{1005}}</div>{{/1005}}
{{#1006}}<div><b>1006</b>: {{1006}}</div>{{/1006}}
{{#1007}}<div><b>1007</b>: {{1007}}</div>{{/1007}}
{{#1008}}<div><b>1008</b>: {{1008}}</div>{{/1008}}
{{#1009}}<div><b>1009</b>: {{1009}}</div>{{/1009}}
{{#1010}}<div><b>1010</b>: {{1010}}</div>{{/1010}}
</div>
`
                );
           }        }

        /**
         * organization type
         *
         */
        class OrganisationType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OrganisationType;
                if (null == bucket)
                   cim_data.OrganisationType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OrganisationType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "OrganisationType";
                base.parse_element (/<cim:OrganisationType.CUSTOMER>([\s\S]*?)<\/cim:OrganisationType.CUSTOMER>/g, obj, "CUSTOMER", base.to_string, sub, context);
                base.parse_element (/<cim:OrganisationType.RTO>([\s\S]*?)<\/cim:OrganisationType.RTO>/g, obj, "RTO", base.to_string, sub, context);

                var bucket = context.parsed.OrganisationType;
                if (null == bucket)
                   context.parsed.OrganisationType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "OrganisationType", "CUSTOMER", base.from_string, fields);
                base.export_element (obj, "OrganisationType", "RTO", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#OrganisationType_collapse" aria-expanded="true" aria-controls="OrganisationType_collapse">OrganisationType</a>
<div id="OrganisationType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#CUSTOMER}}<div><b>CUSTOMER</b>: {{CUSTOMER}}</div>{{/CUSTOMER}}
{{#RTO}}<div><b>RTO</b>: {{RTO}}</div>{{/RTO}}
</div>
`
                );
           }        }

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
        class SelfScheduleType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SelfScheduleType;
                if (null == bucket)
                   cim_data.SelfScheduleType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SelfScheduleType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
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

                var bucket = context.parsed.SelfScheduleType;
                if (null == bucket)
                   context.parsed.SelfScheduleType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#SelfScheduleType_collapse" aria-expanded="true" aria-controls="SelfScheduleType_collapse">SelfScheduleType</a>
<div id="SelfScheduleType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#PT}}<div><b>PT</b>: {{PT}}</div>{{/PT}}
{{#ETC}}<div><b>ETC</b>: {{ETC}}</div>{{/ETC}}
{{#TOR}}<div><b>TOR</b>: {{TOR}}</div>{{/TOR}}
{{#RMR}}<div><b>RMR</b>: {{RMR}}</div>{{/RMR}}
{{#RMT}}<div><b>RMT</b>: {{RMT}}</div>{{/RMT}}
{{#RGMR}}<div><b>RGMR</b>: {{RGMR}}</div>{{/RGMR}}
{{#ORFC}}<div><b>ORFC</b>: {{ORFC}}</div>{{/ORFC}}
{{#SP}}<div><b>SP</b>: {{SP}}</div>{{/SP}}
{{#IFM}}<div><b>IFM</b>: {{IFM}}</div>{{/IFM}}
{{#RUC}}<div><b>RUC</b>: {{RUC}}</div>{{/RUC}}
{{#RA}}<div><b>RA</b>: {{RA}}</div>{{/RA}}
{{#PUMP_ETC}}<div><b>PUMP_ETC</b>: {{PUMP_ETC}}</div>{{/PUMP_ETC}}
{{#PUMP_TOR}}<div><b>PUMP_TOR</b>: {{PUMP_TOR}}</div>{{/PUMP_TOR}}
{{#BAS}}<div><b>BAS</b>: {{BAS}}</div>{{/BAS}}
{{#LOF}}<div><b>LOF</b>: {{LOF}}</div>{{/LOF}}
{{#WHL}}<div><b>WHL</b>: {{WHL}}</div>{{/WHL}}
</div>
`
                );
           }        }

        class SourceSinkType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SourceSinkType;
                if (null == bucket)
                   cim_data.SourceSinkType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SourceSinkType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SourceSinkType";
                base.parse_element (/<cim:SourceSinkType.Source>([\s\S]*?)<\/cim:SourceSinkType.Source>/g, obj, "Source", base.to_string, sub, context);
                base.parse_element (/<cim:SourceSinkType.Sink>([\s\S]*?)<\/cim:SourceSinkType.Sink>/g, obj, "Sink", base.to_string, sub, context);
                base.parse_element (/<cim:SourceSinkType.Neither>([\s\S]*?)<\/cim:SourceSinkType.Neither>/g, obj, "Neither", base.to_string, sub, context);

                var bucket = context.parsed.SourceSinkType;
                if (null == bucket)
                   context.parsed.SourceSinkType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "SourceSinkType", "Source", base.from_string, fields);
                base.export_element (obj, "SourceSinkType", "Sink", base.from_string, fields);
                base.export_element (obj, "SourceSinkType", "Neither", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#SourceSinkType_collapse" aria-expanded="true" aria-controls="SourceSinkType_collapse">SourceSinkType</a>
<div id="SourceSinkType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#Source}}<div><b>Source</b>: {{Source}}</div>{{/Source}}
{{#Sink}}<div><b>Sink</b>: {{Sink}}</div>{{/Sink}}
{{#Neither}}<div><b>Neither</b>: {{Neither}}</div>{{/Neither}}
</div>
`
                );
           }        }

        class SelfSchedTypeCleanBid extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SelfSchedTypeCleanBid;
                if (null == bucket)
                   cim_data.SelfSchedTypeCleanBid = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SelfSchedTypeCleanBid[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
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

                var bucket = context.parsed.SelfSchedTypeCleanBid;
                if (null == bucket)
                   context.parsed.SelfSchedTypeCleanBid = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#SelfSchedTypeCleanBid_collapse" aria-expanded="true" aria-controls="SelfSchedTypeCleanBid_collapse">SelfSchedTypeCleanBid</a>
<div id="SelfSchedTypeCleanBid_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#PT}}<div><b>PT</b>: {{PT}}</div>{{/PT}}
{{#ETC}}<div><b>ETC</b>: {{ETC}}</div>{{/ETC}}
{{#TOR}}<div><b>TOR</b>: {{TOR}}</div>{{/TOR}}
{{#RMT}}<div><b>RMT</b>: {{RMT}}</div>{{/RMT}}
{{#SP}}<div><b>SP</b>: {{SP}}</div>{{/SP}}
{{#RA}}<div><b>RA</b>: {{RA}}</div>{{/RA}}
{{#IFM}}<div><b>IFM</b>: {{IFM}}</div>{{/IFM}}
{{#BAS}}<div><b>BAS</b>: {{BAS}}</div>{{/BAS}}
{{#LOF}}<div><b>LOF</b>: {{LOF}}</div>{{/LOF}}
{{#WHL}}<div><b>WHL</b>: {{WHL}}</div>{{/WHL}}
{{#LPT}}<div><b>LPT</b>: {{LPT}}</div>{{/LPT}}
</div>
`
                );
           }        }

        class TradeProductType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TradeProductType;
                if (null == bucket)
                   cim_data.TradeProductType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TradeProductType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TradeProductType";
                base.parse_element (/<cim:TradeProductType.PHY>([\s\S]*?)<\/cim:TradeProductType.PHY>/g, obj, "PHY", base.to_string, sub, context);
                base.parse_element (/<cim:TradeProductType.APN>([\s\S]*?)<\/cim:TradeProductType.APN>/g, obj, "APN", base.to_string, sub, context);
                base.parse_element (/<cim:TradeProductType.RUT>([\s\S]*?)<\/cim:TradeProductType.RUT>/g, obj, "RUT", base.to_string, sub, context);
                base.parse_element (/<cim:TradeProductType.RDT>([\s\S]*?)<\/cim:TradeProductType.RDT>/g, obj, "RDT", base.to_string, sub, context);
                base.parse_element (/<cim:TradeProductType.SRT>([\s\S]*?)<\/cim:TradeProductType.SRT>/g, obj, "SRT", base.to_string, sub, context);
                base.parse_element (/<cim:TradeProductType.NRT>([\s\S]*?)<\/cim:TradeProductType.NRT>/g, obj, "NRT", base.to_string, sub, context);
                base.parse_element (/<cim:TradeProductType.CAP>([\s\S]*?)<\/cim:TradeProductType.CAP>/g, obj, "CAP", base.to_string, sub, context);

                var bucket = context.parsed.TradeProductType;
                if (null == bucket)
                   context.parsed.TradeProductType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TradeProductType_collapse" aria-expanded="true" aria-controls="TradeProductType_collapse">TradeProductType</a>
<div id="TradeProductType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#PHY}}<div><b>PHY</b>: {{PHY}}</div>{{/PHY}}
{{#APN}}<div><b>APN</b>: {{APN}}</div>{{/APN}}
{{#RUT}}<div><b>RUT</b>: {{RUT}}</div>{{/RUT}}
{{#RDT}}<div><b>RDT</b>: {{RDT}}</div>{{/RDT}}
{{#SRT}}<div><b>SRT</b>: {{SRT}}</div>{{/SRT}}
{{#NRT}}<div><b>NRT</b>: {{NRT}}</div>{{/NRT}}
{{#CAP}}<div><b>CAP</b>: {{CAP}}</div>{{/CAP}}
</div>
`
                );
           }        }

        class MarketScheduleServices extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MarketScheduleServices;
                if (null == bucket)
                   cim_data.MarketScheduleServices = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketScheduleServices[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MarketScheduleServices";
                base.parse_element (/<cim:MarketScheduleServices.retrieveDefaultBidCurves>([\s\S]*?)<\/cim:MarketScheduleServices.retrieveDefaultBidCurves>/g, obj, "retrieveDefaultBidCurves", base.to_string, sub, context);
                base.parse_element (/<cim:MarketScheduleServices.retrieveMarketAwards>([\s\S]*?)<\/cim:MarketScheduleServices.retrieveMarketAwards>/g, obj, "retrieveMarketAwards", base.to_string, sub, context);
                base.parse_element (/<cim:MarketScheduleServices.retrieveMPMResults>([\s\S]*?)<\/cim:MarketScheduleServices.retrieveMPMResults>/g, obj, "retrieveMPMResults", base.to_string, sub, context);
                base.parse_element (/<cim:MarketScheduleServices.retrieveSchedulePrices>([\s\S]*?)<\/cim:MarketScheduleServices.retrieveSchedulePrices>/g, obj, "retrieveSchedulePrices", base.to_string, sub, context);
                base.parse_element (/<cim:MarketScheduleServices.retrieveStartUpShutDownInstructions>([\s\S]*?)<\/cim:MarketScheduleServices.retrieveStartUpShutDownInstructions>/g, obj, "retrieveStartUpShutDownInstructions", base.to_string, sub, context);

                var bucket = context.parsed.MarketScheduleServices;
                if (null == bucket)
                   context.parsed.MarketScheduleServices = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "MarketScheduleServices", "retrieveDefaultBidCurves", base.from_string, fields);
                base.export_element (obj, "MarketScheduleServices", "retrieveMarketAwards", base.from_string, fields);
                base.export_element (obj, "MarketScheduleServices", "retrieveMPMResults", base.from_string, fields);
                base.export_element (obj, "MarketScheduleServices", "retrieveSchedulePrices", base.from_string, fields);
                base.export_element (obj, "MarketScheduleServices", "retrieveStartUpShutDownInstructions", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MarketScheduleServices_collapse" aria-expanded="true" aria-controls="MarketScheduleServices_collapse">MarketScheduleServices</a>
<div id="MarketScheduleServices_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#retrieveDefaultBidCurves}}<div><b>retrieveDefaultBidCurves</b>: {{retrieveDefaultBidCurves}}</div>{{/retrieveDefaultBidCurves}}
{{#retrieveMarketAwards}}<div><b>retrieveMarketAwards</b>: {{retrieveMarketAwards}}</div>{{/retrieveMarketAwards}}
{{#retrieveMPMResults}}<div><b>retrieveMPMResults</b>: {{retrieveMPMResults}}</div>{{/retrieveMPMResults}}
{{#retrieveSchedulePrices}}<div><b>retrieveSchedulePrices</b>: {{retrieveSchedulePrices}}</div>{{/retrieveSchedulePrices}}
{{#retrieveStartUpShutDownInstructions}}<div><b>retrieveStartUpShutDownInstructions</b>: {{retrieveStartUpShutDownInstructions}}</div>{{/retrieveStartUpShutDownInstructions}}
</div>
`
                );
           }        }

        class SystemType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SystemType;
                if (null == bucket)
                   cim_data.SystemType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SystemType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SystemType";
                base.parse_element (/<cim:SystemType.OASIS>([\s\S]*?)<\/cim:SystemType.OASIS>/g, obj, "OASIS", base.to_string, sub, context);

                var bucket = context.parsed.SystemType;
                if (null == bucket)
                   context.parsed.SystemType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "SystemType", "OASIS", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#SystemType_collapse" aria-expanded="true" aria-controls="SystemType_collapse">SystemType</a>
<div id="SystemType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#OASIS}}<div><b>OASIS</b>: {{OASIS}}</div>{{/OASIS}}
</div>
`
                );
           }        }

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
        class EnergyTypeCode extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EnergyTypeCode;
                if (null == bucket)
                   cim_data.EnergyTypeCode = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EnergyTypeCode[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
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

                var bucket = context.parsed.EnergyTypeCode;
                if (null == bucket)
                   context.parsed.EnergyTypeCode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#EnergyTypeCode_collapse" aria-expanded="true" aria-controls="EnergyTypeCode_collapse">EnergyTypeCode</a>
<div id="EnergyTypeCode_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#DASE}}<div><b>DASE</b>: {{DASE}}</div>{{/DASE}}
{{#DSSE}}<div><b>DSSE</b>: {{DSSE}}</div>{{/DSSE}}
{{#DABE}}<div><b>DABE</b>: {{DABE}}</div>{{/DABE}}
{{#OE}}<div><b>OE</b>: {{OE}}</div>{{/OE}}
{{#HASE}}<div><b>HASE</b>: {{HASE}}</div>{{/HASE}}
{{#SRE}}<div><b>SRE</b>: {{SRE}}</div>{{/SRE}}
{{#RED}}<div><b>RED</b>: {{RED}}</div>{{/RED}}
{{#EDE}}<div><b>EDE</b>: {{EDE}}</div>{{/EDE}}
{{#RMRE}}<div><b>RMRE</b>: {{RMRE}}</div>{{/RMRE}}
{{#MSSLFE}}<div><b>MSSLFE</b>: {{MSSLFE}}</div>{{/MSSLFE}}
{{#RE}}<div><b>RE</b>: {{RE}}</div>{{/RE}}
{{#MLE}}<div><b>MLE</b>: {{MLE}}</div>{{/MLE}}
{{#SE}}<div><b>SE</b>: {{SE}}</div>{{/SE}}
{{#RTSSE}}<div><b>RTSSE</b>: {{RTSSE}}</div>{{/RTSSE}}
{{#DMLE}}<div><b>DMLE</b>: {{DMLE}}</div>{{/DMLE}}
{{#PE}}<div><b>PE</b>: {{PE}}</div>{{/PE}}
{{#TEE}}<div><b>TEE</b>: {{TEE}}</div>{{/TEE}}
{{#DAPE}}<div><b>DAPE</b>: {{DAPE}}</div>{{/DAPE}}
</div>
`
                );
           }        }

        /**
         * ACTIVE
         *
         * INACTIVE
         *
         */
        class CurrentStatusSC extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CurrentStatusSC;
                if (null == bucket)
                   cim_data.CurrentStatusSC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CurrentStatusSC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CurrentStatusSC";
                base.parse_element (/<cim:CurrentStatusSC.ACTIVE>([\s\S]*?)<\/cim:CurrentStatusSC.ACTIVE>/g, obj, "ACTIVE", base.to_string, sub, context);
                base.parse_element (/<cim:CurrentStatusSC.INACTIVE>([\s\S]*?)<\/cim:CurrentStatusSC.INACTIVE>/g, obj, "INACTIVE", base.to_string, sub, context);

                var bucket = context.parsed.CurrentStatusSC;
                if (null == bucket)
                   context.parsed.CurrentStatusSC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "CurrentStatusSC", "ACTIVE", base.from_string, fields);
                base.export_element (obj, "CurrentStatusSC", "INACTIVE", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#CurrentStatusSC_collapse" aria-expanded="true" aria-controls="CurrentStatusSC_collapse">CurrentStatusSC</a>
<div id="CurrentStatusSC_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#ACTIVE}}<div><b>ACTIVE</b>: {{ACTIVE}}</div>{{/ACTIVE}}
{{#INACTIVE}}<div><b>INACTIVE</b>: {{INACTIVE}}</div>{{/INACTIVE}}
</div>
`
                );
           }        }

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
        class TradeStatusType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TradeStatusType;
                if (null == bucket)
                   cim_data.TradeStatusType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TradeStatusType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
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

                var bucket = context.parsed.TradeStatusType;
                if (null == bucket)
                   context.parsed.TradeStatusType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TradeStatusType_collapse" aria-expanded="true" aria-controls="TradeStatusType_collapse">TradeStatusType</a>
<div id="TradeStatusType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#RJ}}<div><b>RJ</b>: {{RJ}}</div>{{/RJ}}
{{#I}}<div><b>I</b>: {{I}}</div>{{/I}}
{{#V}}<div><b>V</b>: {{V}}</div>{{/V}}
{{#M}}<div><b>M</b>: {{M}}</div>{{/M}}
{{#CV}}<div><b>CV</b>: {{CV}}</div>{{/CV}}
{{#CM}}<div><b>CM</b>: {{CM}}</div>{{/CM}}
{{#CI}}<div><b>CI</b>: {{CI}}</div>{{/CI}}
{{#CX}}<div><b>CX</b>: {{CX}}</div>{{/CX}}
{{#O}}<div><b>O</b>: {{O}}</div>{{/O}}
{{#MT}}<div><b>MT</b>: {{MT}}</div>{{/MT}}
{{#U}}<div><b>U</b>: {{U}}</div>{{/U}}
</div>
`
                );
           }        }

        class ResourceCertificationCategory extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ResourceCertificationCategory;
                if (null == bucket)
                   cim_data.ResourceCertificationCategory = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ResourceCertificationCategory[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ResourceCertificationCategory";
                base.parse_element (/<cim:ResourceCertificationCategory.DAM>([\s\S]*?)<\/cim:ResourceCertificationCategory.DAM>/g, obj, "DAM", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceCertificationCategory.RTM>([\s\S]*?)<\/cim:ResourceCertificationCategory.RTM>/g, obj, "RTM", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceCertificationCategory.RC>([\s\S]*?)<\/cim:ResourceCertificationCategory.RC>/g, obj, "RC", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceCertificationCategory.GT>([\s\S]*?)<\/cim:ResourceCertificationCategory.GT>/g, obj, "GT", base.to_string, sub, context);

                var bucket = context.parsed.ResourceCertificationCategory;
                if (null == bucket)
                   context.parsed.ResourceCertificationCategory = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ResourceCertificationCategory", "DAM", base.from_string, fields);
                base.export_element (obj, "ResourceCertificationCategory", "RTM", base.from_string, fields);
                base.export_element (obj, "ResourceCertificationCategory", "RC", base.from_string, fields);
                base.export_element (obj, "ResourceCertificationCategory", "GT", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ResourceCertificationCategory_collapse" aria-expanded="true" aria-controls="ResourceCertificationCategory_collapse">ResourceCertificationCategory</a>
<div id="ResourceCertificationCategory_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#DAM}}<div><b>DAM</b>: {{DAM}}</div>{{/DAM}}
{{#RTM}}<div><b>RTM</b>: {{RTM}}</div>{{/RTM}}
{{#RC}}<div><b>RC</b>: {{RC}}</div>{{/RC}}
{{#GT}}<div><b>GT</b>: {{GT}}</div>{{/GT}}
</div>
`
                );
           }        }

        /**
         * organization code
         *
         */
        class OrganisationCode extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OrganisationCode;
                if (null == bucket)
                   cim_data.OrganisationCode = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OrganisationCode[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "OrganisationCode";
                base.parse_element (/<cim:OrganisationCode.BILL_TO>([\s\S]*?)<\/cim:OrganisationCode.BILL_TO>/g, obj, "BILL_TO", base.to_string, sub, context);
                base.parse_element (/<cim:OrganisationCode.PAY_TO>([\s\S]*?)<\/cim:OrganisationCode.PAY_TO>/g, obj, "PAY_TO", base.to_string, sub, context);
                base.parse_element (/<cim:OrganisationCode.SOLD_TO>([\s\S]*?)<\/cim:OrganisationCode.SOLD_TO>/g, obj, "SOLD_TO", base.to_string, sub, context);
                base.parse_element (/<cim:OrganisationCode.PROVIDED_BY>([\s\S]*?)<\/cim:OrganisationCode.PROVIDED_BY>/g, obj, "PROVIDED_BY", base.to_string, sub, context);

                var bucket = context.parsed.OrganisationCode;
                if (null == bucket)
                   context.parsed.OrganisationCode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "OrganisationCode", "BILL_TO", base.from_string, fields);
                base.export_element (obj, "OrganisationCode", "PAY_TO", base.from_string, fields);
                base.export_element (obj, "OrganisationCode", "SOLD_TO", base.from_string, fields);
                base.export_element (obj, "OrganisationCode", "PROVIDED_BY", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#OrganisationCode_collapse" aria-expanded="true" aria-controls="OrganisationCode_collapse">OrganisationCode</a>
<div id="OrganisationCode_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#BILL_TO}}<div><b>BILL_TO</b>: {{BILL_TO}}</div>{{/BILL_TO}}
{{#PAY_TO}}<div><b>PAY_TO</b>: {{PAY_TO}}</div>{{/PAY_TO}}
{{#SOLD_TO}}<div><b>SOLD_TO</b>: {{SOLD_TO}}</div>{{/SOLD_TO}}
{{#PROVIDED_BY}}<div><b>PROVIDED_BY</b>: {{PROVIDED_BY}}</div>{{/PROVIDED_BY}}
</div>
`
                );
           }        }

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
                MarketStatementDocStatus: MarketStatementDocStatus,
                SelfScheduleType: SelfScheduleType,
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
                ADSInstructionTypeCommitment: ADSInstructionTypeCommitment,
                AlarmDisplayType: AlarmDisplayType,
                OASISIntervalType: OASISIntervalType,
                ADSInstructionTypeOOS: ADSInstructionTypeOOS,
                SourceSinkType: SourceSinkType,
                JobStartEndType: JobStartEndType,
                TimeZoneType: TimeZoneType,
                ResourceCertificationType: ResourceCertificationType,
                SpinningEventNameType: SpinningEventNameType,
                EnergyTypeCode: EnergyTypeCode,
                OASISBidReportType: OASISBidReportType,
                AncillaryCommodityType: AncillaryCommodityType,
                SelfSchedTypeRawBid: SelfSchedTypeRawBid,
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
                SystemType: SystemType,
                SpinningEventType: SpinningEventType,
                DAMMarketType: DAMMarketType,
                OASISMasterType: OASISMasterType,
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