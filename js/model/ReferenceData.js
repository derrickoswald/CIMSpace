define
(
    ["model/base", "model/Common", "model/Contingency", "model/Core", "model/MarketCommon", "model/MktDomain", "model/Production"],
    /**
     * Market static reference data.
     *
     */
    function (base, Common, Contingency, Core, MarketCommon, MktDomain, Production)
    {
        /**
         * Model to support processing of reliability must run units.
         *
         */
        class RMRStartUpFuelCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.RMRStartUpFuelCurve;
                if (null == bucket)
                   cim_data.RMRStartUpFuelCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RMRStartUpFuelCurve[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "RMRStartUpFuelCurve";
                base.parse_attribute (/<cim:RMRStartUpFuelCurve.RegisteredGenerator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);
                let bucket = context.parsed.RMRStartUpFuelCurve;
                if (null == bucket)
                   context.parsed.RMRStartUpFuelCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "RMRStartUpFuelCurve", "RegisteredGenerator", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RMRStartUpFuelCurve_collapse" aria-expanded="true" aria-controls="RMRStartUpFuelCurve_collapse" style="margin-left: 10px;">RMRStartUpFuelCurve</a></legend>
                    <div id="RMRStartUpFuelCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RegisteredGenerator}}");}); return false;'>{{RegisteredGenerator}}</a></div>{{/RegisteredGenerator}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RMRStartUpFuelCurve_collapse" aria-expanded="true" aria-controls="{{id}}_RMRStartUpFuelCurve_collapse" style="margin-left: 10px;">RMRStartUpFuelCurve</a></legend>
                    <div id="{{id}}_RMRStartUpFuelCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredGenerator'>RegisteredGenerator: </label><div class='col-sm-8'><input id='{{id}}_RegisteredGenerator' class='form-control' type='text'{{#RegisteredGenerator}} value='{{RegisteredGenerator}}'{{/RegisteredGenerator}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "RMRStartUpFuelCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_RegisteredGenerator").value; if ("" !== temp) obj["RegisteredGenerator"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegisteredGenerator", "0..1", "0..1", "RegisteredGenerator", "RMRStartUpFuelCurve"]
                        ]
                    )
                );
            }
        }

        /**
         * Certain skills are required and shall be certified in order for a person (typically a member of a crew) to be qualified to work on types of equipment.
         *
         */
        class MarketQualificationRequirement extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MarketQualificationRequirement;
                if (null == bucket)
                   cim_data.MarketQualificationRequirement = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketQualificationRequirement[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MarketQualificationRequirement";
                base.parse_element (/<cim:MarketQualificationRequirement.effectiveDate>([\s\S]*?)<\/cim:MarketQualificationRequirement.effectiveDate>/g, obj, "effectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:MarketQualificationRequirement.expirationDate>([\s\S]*?)<\/cim:MarketQualificationRequirement.expirationDate>/g, obj, "expirationDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:MarketQualificationRequirement.qualificationID>([\s\S]*?)<\/cim:MarketQualificationRequirement.qualificationID>/g, obj, "qualificationID", base.to_string, sub, context);
                base.parse_element (/<cim:MarketQualificationRequirement.status>([\s\S]*?)<\/cim:MarketQualificationRequirement.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:MarketQualificationRequirement.statusType>([\s\S]*?)<\/cim:MarketQualificationRequirement.statusType>/g, obj, "statusType", base.to_string, sub, context);
                base.parse_attributes (/<cim:MarketQualificationRequirement.MarketSkills\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketSkills", sub, context);
                let bucket = context.parsed.MarketQualificationRequirement;
                if (null == bucket)
                   context.parsed.MarketQualificationRequirement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "MarketQualificationRequirement", "effectiveDate", "effectiveDate",  base.from_datetime, fields);
                base.export_element (obj, "MarketQualificationRequirement", "expirationDate", "expirationDate",  base.from_datetime, fields);
                base.export_element (obj, "MarketQualificationRequirement", "qualificationID", "qualificationID",  base.from_string, fields);
                base.export_element (obj, "MarketQualificationRequirement", "status", "status",  base.from_string, fields);
                base.export_element (obj, "MarketQualificationRequirement", "statusType", "statusType",  base.from_string, fields);
                base.export_attributes (obj, "MarketQualificationRequirement", "MarketSkills", "MarketSkills", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MarketQualificationRequirement_collapse" aria-expanded="true" aria-controls="MarketQualificationRequirement_collapse" style="margin-left: 10px;">MarketQualificationRequirement</a></legend>
                    <div id="MarketQualificationRequirement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#effectiveDate}}<div><b>effectiveDate</b>: {{effectiveDate}}</div>{{/effectiveDate}}
                    {{#expirationDate}}<div><b>expirationDate</b>: {{expirationDate}}</div>{{/expirationDate}}
                    {{#qualificationID}}<div><b>qualificationID</b>: {{qualificationID}}</div>{{/qualificationID}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#statusType}}<div><b>statusType</b>: {{statusType}}</div>{{/statusType}}
                    {{#MarketSkills}}<div><b>MarketSkills</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketSkills}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["MarketSkills"]) obj["MarketSkills_string"] = obj["MarketSkills"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["MarketSkills_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MarketQualificationRequirement_collapse" aria-expanded="true" aria-controls="{{id}}_MarketQualificationRequirement_collapse" style="margin-left: 10px;">MarketQualificationRequirement</a></legend>
                    <div id="{{id}}_MarketQualificationRequirement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_effectiveDate'>effectiveDate: </label><div class='col-sm-8'><input id='{{id}}_effectiveDate' class='form-control' type='text'{{#effectiveDate}} value='{{effectiveDate}}'{{/effectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_expirationDate'>expirationDate: </label><div class='col-sm-8'><input id='{{id}}_expirationDate' class='form-control' type='text'{{#expirationDate}} value='{{expirationDate}}'{{/expirationDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_qualificationID'>qualificationID: </label><div class='col-sm-8'><input id='{{id}}_qualificationID' class='form-control' type='text'{{#qualificationID}} value='{{qualificationID}}'{{/qualificationID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_statusType'>statusType: </label><div class='col-sm-8'><input id='{{id}}_statusType' class='form-control' type='text'{{#statusType}} value='{{statusType}}'{{/statusType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketSkills'>MarketSkills: </label><div class='col-sm-8'><input id='{{id}}_MarketSkills' class='form-control' type='text'{{#MarketSkills}} value='{{MarketSkills_string}}'{{/MarketSkills}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MarketQualificationRequirement" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_effectiveDate").value; if ("" !== temp) obj["effectiveDate"] = temp;
                temp = document.getElementById (id + "_expirationDate").value; if ("" !== temp) obj["expirationDate"] = temp;
                temp = document.getElementById (id + "_qualificationID").value; if ("" !== temp) obj["qualificationID"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_statusType").value; if ("" !== temp) obj["statusType"] = temp;
                temp = document.getElementById (id + "_MarketSkills").value; if ("" !== temp) obj["MarketSkills"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MarketSkills", "0..*", "0..*", "MarketSkill", "MarketQualificationRequirements"]
                        ]
                    )
                );
            }
        }

        /**
         * An area defined for the purpose of tracking interchange with surrounding areas via tie points; may or may not serve as a control area.
         *
         */
        class SubControlArea extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SubControlArea;
                if (null == bucket)
                   cim_data.SubControlArea = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SubControlArea[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "SubControlArea";
                base.parse_element (/<cim:SubControlArea.areaShortName>([\s\S]*?)<\/cim:SubControlArea.areaShortName>/g, obj, "areaShortName", base.to_string, sub, context);
                base.parse_element (/<cim:SubControlArea.constantCoefficient>([\s\S]*?)<\/cim:SubControlArea.constantCoefficient>/g, obj, "constantCoefficient", base.to_float, sub, context);
                base.parse_attribute (/<cim:SubControlArea.embeddedControlArea\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "embeddedControlArea", sub, context);
                base.parse_attribute (/<cim:SubControlArea.internalCA\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "internalCA", sub, context);
                base.parse_element (/<cim:SubControlArea.linearCoefficient>([\s\S]*?)<\/cim:SubControlArea.linearCoefficient>/g, obj, "linearCoefficient", base.to_float, sub, context);
                base.parse_attribute (/<cim:SubControlArea.localCA\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "localCA", sub, context);
                base.parse_element (/<cim:SubControlArea.maxSelfSchedMW>([\s\S]*?)<\/cim:SubControlArea.maxSelfSchedMW>/g, obj, "maxSelfSchedMW", base.to_float, sub, context);
                base.parse_element (/<cim:SubControlArea.minSelfSchedMW>([\s\S]*?)<\/cim:SubControlArea.minSelfSchedMW>/g, obj, "minSelfSchedMW", base.to_float, sub, context);
                base.parse_element (/<cim:SubControlArea.quadraticCoefficient>([\s\S]*?)<\/cim:SubControlArea.quadraticCoefficient>/g, obj, "quadraticCoefficient", base.to_float, sub, context);
                base.parse_attributes (/<cim:SubControlArea.Import_EnergyTransactions\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Import_EnergyTransactions", sub, context);
                base.parse_attributes (/<cim:SubControlArea.RegisteredResource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                base.parse_attributes (/<cim:SubControlArea.BidSelfSched\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BidSelfSched", sub, context);
                base.parse_attributes (/<cim:SubControlArea.SideB_TieLines\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SideB_TieLines", sub, context);
                base.parse_attributes (/<cim:SubControlArea.GeneralClearingResults\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GeneralClearingResults", sub, context);
                base.parse_attributes (/<cim:SubControlArea.Export_EnergyTransactions\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Export_EnergyTransactions", sub, context);
                base.parse_attribute (/<cim:SubControlArea.RTO\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);
                base.parse_attributes (/<cim:SubControlArea.LossClearingResults\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LossClearingResults", sub, context);
                base.parse_attributes (/<cim:SubControlArea.To_Flowgate\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "To_Flowgate", sub, context);
                base.parse_attributes (/<cim:SubControlArea.ExPostLossResults\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ExPostLossResults", sub, context);
                base.parse_attributes (/<cim:SubControlArea.ControlAreaDesignation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ControlAreaDesignation", sub, context);
                base.parse_attributes (/<cim:SubControlArea.Send_DynamicSchedules\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Send_DynamicSchedules", sub, context);
                base.parse_attributes (/<cim:SubControlArea.Receive_DynamicSchedules\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Receive_DynamicSchedules", sub, context);
                base.parse_attribute (/<cim:SubControlArea.AreaReserveSpecification\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AreaReserveSpecification", sub, context);
                base.parse_attribute (/<cim:SubControlArea.HostControlArea\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "HostControlArea", sub, context);
                base.parse_attributes (/<cim:SubControlArea.SideA_TieLines\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SideA_TieLines", sub, context);
                base.parse_attributes (/<cim:SubControlArea.AggregateNode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AggregateNode", sub, context);
                base.parse_attribute (/<cim:SubControlArea.AdjacentCASet\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AdjacentCASet", sub, context);
                base.parse_attributes (/<cim:SubControlArea.CnodeDistributionFactor\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CnodeDistributionFactor", sub, context);
                base.parse_attributes (/<cim:SubControlArea.Pnode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Pnode", sub, context);
                base.parse_attributes (/<cim:SubControlArea.From_Flowgate\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "From_Flowgate", sub, context);
                base.parse_attributes (/<cim:SubControlArea.InadvertentAccount\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "InadvertentAccount", sub, context);
                let bucket = context.parsed.SubControlArea;
                if (null == bucket)
                   context.parsed.SubControlArea = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "SubControlArea", "areaShortName", "areaShortName",  base.from_string, fields);
                base.export_element (obj, "SubControlArea", "constantCoefficient", "constantCoefficient",  base.from_float, fields);
                base.export_attribute (obj, "SubControlArea", "embeddedControlArea", "embeddedControlArea", fields);
                base.export_attribute (obj, "SubControlArea", "internalCA", "internalCA", fields);
                base.export_element (obj, "SubControlArea", "linearCoefficient", "linearCoefficient",  base.from_float, fields);
                base.export_attribute (obj, "SubControlArea", "localCA", "localCA", fields);
                base.export_element (obj, "SubControlArea", "maxSelfSchedMW", "maxSelfSchedMW",  base.from_float, fields);
                base.export_element (obj, "SubControlArea", "minSelfSchedMW", "minSelfSchedMW",  base.from_float, fields);
                base.export_element (obj, "SubControlArea", "quadraticCoefficient", "quadraticCoefficient",  base.from_float, fields);
                base.export_attributes (obj, "SubControlArea", "Import_EnergyTransactions", "Import_EnergyTransactions", fields);
                base.export_attributes (obj, "SubControlArea", "RegisteredResource", "RegisteredResource", fields);
                base.export_attributes (obj, "SubControlArea", "BidSelfSched", "BidSelfSched", fields);
                base.export_attributes (obj, "SubControlArea", "SideB_TieLines", "SideB_TieLines", fields);
                base.export_attributes (obj, "SubControlArea", "GeneralClearingResults", "GeneralClearingResults", fields);
                base.export_attributes (obj, "SubControlArea", "Export_EnergyTransactions", "Export_EnergyTransactions", fields);
                base.export_attribute (obj, "SubControlArea", "RTO", "RTO", fields);
                base.export_attributes (obj, "SubControlArea", "LossClearingResults", "LossClearingResults", fields);
                base.export_attributes (obj, "SubControlArea", "To_Flowgate", "To_Flowgate", fields);
                base.export_attributes (obj, "SubControlArea", "ExPostLossResults", "ExPostLossResults", fields);
                base.export_attributes (obj, "SubControlArea", "ControlAreaDesignation", "ControlAreaDesignation", fields);
                base.export_attributes (obj, "SubControlArea", "Send_DynamicSchedules", "Send_DynamicSchedules", fields);
                base.export_attributes (obj, "SubControlArea", "Receive_DynamicSchedules", "Receive_DynamicSchedules", fields);
                base.export_attribute (obj, "SubControlArea", "AreaReserveSpecification", "AreaReserveSpecification", fields);
                base.export_attribute (obj, "SubControlArea", "HostControlArea", "HostControlArea", fields);
                base.export_attributes (obj, "SubControlArea", "SideA_TieLines", "SideA_TieLines", fields);
                base.export_attributes (obj, "SubControlArea", "AggregateNode", "AggregateNode", fields);
                base.export_attribute (obj, "SubControlArea", "AdjacentCASet", "AdjacentCASet", fields);
                base.export_attributes (obj, "SubControlArea", "CnodeDistributionFactor", "CnodeDistributionFactor", fields);
                base.export_attributes (obj, "SubControlArea", "Pnode", "Pnode", fields);
                base.export_attributes (obj, "SubControlArea", "From_Flowgate", "From_Flowgate", fields);
                base.export_attributes (obj, "SubControlArea", "InadvertentAccount", "InadvertentAccount", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SubControlArea_collapse" aria-expanded="true" aria-controls="SubControlArea_collapse" style="margin-left: 10px;">SubControlArea</a></legend>
                    <div id="SubControlArea_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#areaShortName}}<div><b>areaShortName</b>: {{areaShortName}}</div>{{/areaShortName}}
                    {{#constantCoefficient}}<div><b>constantCoefficient</b>: {{constantCoefficient}}</div>{{/constantCoefficient}}
                    {{#embeddedControlArea}}<div><b>embeddedControlArea</b>: {{embeddedControlArea}}</div>{{/embeddedControlArea}}
                    {{#internalCA}}<div><b>internalCA</b>: {{internalCA}}</div>{{/internalCA}}
                    {{#linearCoefficient}}<div><b>linearCoefficient</b>: {{linearCoefficient}}</div>{{/linearCoefficient}}
                    {{#localCA}}<div><b>localCA</b>: {{localCA}}</div>{{/localCA}}
                    {{#maxSelfSchedMW}}<div><b>maxSelfSchedMW</b>: {{maxSelfSchedMW}}</div>{{/maxSelfSchedMW}}
                    {{#minSelfSchedMW}}<div><b>minSelfSchedMW</b>: {{minSelfSchedMW}}</div>{{/minSelfSchedMW}}
                    {{#quadraticCoefficient}}<div><b>quadraticCoefficient</b>: {{quadraticCoefficient}}</div>{{/quadraticCoefficient}}
                    {{#Import_EnergyTransactions}}<div><b>Import_EnergyTransactions</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Import_EnergyTransactions}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RegisteredResource}}
                    {{#BidSelfSched}}<div><b>BidSelfSched</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/BidSelfSched}}
                    {{#SideB_TieLines}}<div><b>SideB_TieLines</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/SideB_TieLines}}
                    {{#GeneralClearingResults}}<div><b>GeneralClearingResults</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/GeneralClearingResults}}
                    {{#Export_EnergyTransactions}}<div><b>Export_EnergyTransactions</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Export_EnergyTransactions}}
                    {{#RTO}}<div><b>RTO</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RTO}}");}); return false;'>{{RTO}}</a></div>{{/RTO}}
                    {{#LossClearingResults}}<div><b>LossClearingResults</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/LossClearingResults}}
                    {{#To_Flowgate}}<div><b>To_Flowgate</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/To_Flowgate}}
                    {{#ExPostLossResults}}<div><b>ExPostLossResults</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ExPostLossResults}}
                    {{#ControlAreaDesignation}}<div><b>ControlAreaDesignation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ControlAreaDesignation}}
                    {{#Send_DynamicSchedules}}<div><b>Send_DynamicSchedules</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Send_DynamicSchedules}}
                    {{#Receive_DynamicSchedules}}<div><b>Receive_DynamicSchedules</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Receive_DynamicSchedules}}
                    {{#AreaReserveSpecification}}<div><b>AreaReserveSpecification</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{AreaReserveSpecification}}");}); return false;'>{{AreaReserveSpecification}}</a></div>{{/AreaReserveSpecification}}
                    {{#HostControlArea}}<div><b>HostControlArea</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{HostControlArea}}");}); return false;'>{{HostControlArea}}</a></div>{{/HostControlArea}}
                    {{#SideA_TieLines}}<div><b>SideA_TieLines</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/SideA_TieLines}}
                    {{#AggregateNode}}<div><b>AggregateNode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AggregateNode}}
                    {{#AdjacentCASet}}<div><b>AdjacentCASet</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{AdjacentCASet}}");}); return false;'>{{AdjacentCASet}}</a></div>{{/AdjacentCASet}}
                    {{#CnodeDistributionFactor}}<div><b>CnodeDistributionFactor</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CnodeDistributionFactor}}
                    {{#Pnode}}<div><b>Pnode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Pnode}}
                    {{#From_Flowgate}}<div><b>From_Flowgate</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/From_Flowgate}}
                    {{#InadvertentAccount}}<div><b>InadvertentAccount</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/InadvertentAccount}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["embeddedControlAreaYesNo"] = [{ id: '', selected: (!obj["embeddedControlArea"])}]; for (let property in MktDomain.YesNo) obj["embeddedControlAreaYesNo"].push ({ id: property, selected: obj["embeddedControlArea"] && obj["embeddedControlArea"].endsWith ('.' + property)});
                obj["internalCAYesNo"] = [{ id: '', selected: (!obj["internalCA"])}]; for (let property in MktDomain.YesNo) obj["internalCAYesNo"].push ({ id: property, selected: obj["internalCA"] && obj["internalCA"].endsWith ('.' + property)});
                obj["localCAYesNo"] = [{ id: '', selected: (!obj["localCA"])}]; for (let property in MktDomain.YesNo) obj["localCAYesNo"].push ({ id: property, selected: obj["localCA"] && obj["localCA"].endsWith ('.' + property)});
                if (obj["Import_EnergyTransactions"]) obj["Import_EnergyTransactions_string"] = obj["Import_EnergyTransactions"].join ();
                if (obj["RegisteredResource"]) obj["RegisteredResource_string"] = obj["RegisteredResource"].join ();
                if (obj["BidSelfSched"]) obj["BidSelfSched_string"] = obj["BidSelfSched"].join ();
                if (obj["SideB_TieLines"]) obj["SideB_TieLines_string"] = obj["SideB_TieLines"].join ();
                if (obj["GeneralClearingResults"]) obj["GeneralClearingResults_string"] = obj["GeneralClearingResults"].join ();
                if (obj["Export_EnergyTransactions"]) obj["Export_EnergyTransactions_string"] = obj["Export_EnergyTransactions"].join ();
                if (obj["LossClearingResults"]) obj["LossClearingResults_string"] = obj["LossClearingResults"].join ();
                if (obj["To_Flowgate"]) obj["To_Flowgate_string"] = obj["To_Flowgate"].join ();
                if (obj["ExPostLossResults"]) obj["ExPostLossResults_string"] = obj["ExPostLossResults"].join ();
                if (obj["ControlAreaDesignation"]) obj["ControlAreaDesignation_string"] = obj["ControlAreaDesignation"].join ();
                if (obj["Send_DynamicSchedules"]) obj["Send_DynamicSchedules_string"] = obj["Send_DynamicSchedules"].join ();
                if (obj["Receive_DynamicSchedules"]) obj["Receive_DynamicSchedules_string"] = obj["Receive_DynamicSchedules"].join ();
                if (obj["SideA_TieLines"]) obj["SideA_TieLines_string"] = obj["SideA_TieLines"].join ();
                if (obj["AggregateNode"]) obj["AggregateNode_string"] = obj["AggregateNode"].join ();
                if (obj["CnodeDistributionFactor"]) obj["CnodeDistributionFactor_string"] = obj["CnodeDistributionFactor"].join ();
                if (obj["Pnode"]) obj["Pnode_string"] = obj["Pnode"].join ();
                if (obj["From_Flowgate"]) obj["From_Flowgate_string"] = obj["From_Flowgate"].join ();
                if (obj["InadvertentAccount"]) obj["InadvertentAccount_string"] = obj["InadvertentAccount"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["embeddedControlAreaYesNo"];
                delete obj["internalCAYesNo"];
                delete obj["localCAYesNo"];
                delete obj["Import_EnergyTransactions_string"];
                delete obj["RegisteredResource_string"];
                delete obj["BidSelfSched_string"];
                delete obj["SideB_TieLines_string"];
                delete obj["GeneralClearingResults_string"];
                delete obj["Export_EnergyTransactions_string"];
                delete obj["LossClearingResults_string"];
                delete obj["To_Flowgate_string"];
                delete obj["ExPostLossResults_string"];
                delete obj["ControlAreaDesignation_string"];
                delete obj["Send_DynamicSchedules_string"];
                delete obj["Receive_DynamicSchedules_string"];
                delete obj["SideA_TieLines_string"];
                delete obj["AggregateNode_string"];
                delete obj["CnodeDistributionFactor_string"];
                delete obj["Pnode_string"];
                delete obj["From_Flowgate_string"];
                delete obj["InadvertentAccount_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SubControlArea_collapse" aria-expanded="true" aria-controls="{{id}}_SubControlArea_collapse" style="margin-left: 10px;">SubControlArea</a></legend>
                    <div id="{{id}}_SubControlArea_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_areaShortName'>areaShortName: </label><div class='col-sm-8'><input id='{{id}}_areaShortName' class='form-control' type='text'{{#areaShortName}} value='{{areaShortName}}'{{/areaShortName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_constantCoefficient'>constantCoefficient: </label><div class='col-sm-8'><input id='{{id}}_constantCoefficient' class='form-control' type='text'{{#constantCoefficient}} value='{{constantCoefficient}}'{{/constantCoefficient}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_embeddedControlArea'>embeddedControlArea: </label><div class='col-sm-8'><select id='{{id}}_embeddedControlArea' class='form-control custom-select'>{{#embeddedControlAreaYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/embeddedControlAreaYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_internalCA'>internalCA: </label><div class='col-sm-8'><select id='{{id}}_internalCA' class='form-control custom-select'>{{#internalCAYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/internalCAYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_linearCoefficient'>linearCoefficient: </label><div class='col-sm-8'><input id='{{id}}_linearCoefficient' class='form-control' type='text'{{#linearCoefficient}} value='{{linearCoefficient}}'{{/linearCoefficient}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_localCA'>localCA: </label><div class='col-sm-8'><select id='{{id}}_localCA' class='form-control custom-select'>{{#localCAYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/localCAYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxSelfSchedMW'>maxSelfSchedMW: </label><div class='col-sm-8'><input id='{{id}}_maxSelfSchedMW' class='form-control' type='text'{{#maxSelfSchedMW}} value='{{maxSelfSchedMW}}'{{/maxSelfSchedMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minSelfSchedMW'>minSelfSchedMW: </label><div class='col-sm-8'><input id='{{id}}_minSelfSchedMW' class='form-control' type='text'{{#minSelfSchedMW}} value='{{minSelfSchedMW}}'{{/minSelfSchedMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_quadraticCoefficient'>quadraticCoefficient: </label><div class='col-sm-8'><input id='{{id}}_quadraticCoefficient' class='form-control' type='text'{{#quadraticCoefficient}} value='{{quadraticCoefficient}}'{{/quadraticCoefficient}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='{{id}}_RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource_string}}'{{/RegisteredResource}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RTO'>RTO: </label><div class='col-sm-8'><input id='{{id}}_RTO' class='form-control' type='text'{{#RTO}} value='{{RTO}}'{{/RTO}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ControlAreaDesignation'>ControlAreaDesignation: </label><div class='col-sm-8'><input id='{{id}}_ControlAreaDesignation' class='form-control' type='text'{{#ControlAreaDesignation}} value='{{ControlAreaDesignation_string}}'{{/ControlAreaDesignation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AreaReserveSpecification'>AreaReserveSpecification: </label><div class='col-sm-8'><input id='{{id}}_AreaReserveSpecification' class='form-control' type='text'{{#AreaReserveSpecification}} value='{{AreaReserveSpecification}}'{{/AreaReserveSpecification}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_HostControlArea'>HostControlArea: </label><div class='col-sm-8'><input id='{{id}}_HostControlArea' class='form-control' type='text'{{#HostControlArea}} value='{{HostControlArea}}'{{/HostControlArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AggregateNode'>AggregateNode: </label><div class='col-sm-8'><input id='{{id}}_AggregateNode' class='form-control' type='text'{{#AggregateNode}} value='{{AggregateNode_string}}'{{/AggregateNode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AdjacentCASet'>AdjacentCASet: </label><div class='col-sm-8'><input id='{{id}}_AdjacentCASet' class='form-control' type='text'{{#AdjacentCASet}} value='{{AdjacentCASet}}'{{/AdjacentCASet}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SubControlArea" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_areaShortName").value; if ("" !== temp) obj["areaShortName"] = temp;
                temp = document.getElementById (id + "_constantCoefficient").value; if ("" !== temp) obj["constantCoefficient"] = temp;
                temp = MktDomain.YesNo[document.getElementById (id + "_embeddedControlArea").value]; if (temp) obj["embeddedControlArea"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["embeddedControlArea"];
                temp = MktDomain.YesNo[document.getElementById (id + "_internalCA").value]; if (temp) obj["internalCA"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["internalCA"];
                temp = document.getElementById (id + "_linearCoefficient").value; if ("" !== temp) obj["linearCoefficient"] = temp;
                temp = MktDomain.YesNo[document.getElementById (id + "_localCA").value]; if (temp) obj["localCA"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["localCA"];
                temp = document.getElementById (id + "_maxSelfSchedMW").value; if ("" !== temp) obj["maxSelfSchedMW"] = temp;
                temp = document.getElementById (id + "_minSelfSchedMW").value; if ("" !== temp) obj["minSelfSchedMW"] = temp;
                temp = document.getElementById (id + "_quadraticCoefficient").value; if ("" !== temp) obj["quadraticCoefficient"] = temp;
                temp = document.getElementById (id + "_RegisteredResource").value; if ("" !== temp) obj["RegisteredResource"] = temp.split (",");
                temp = document.getElementById (id + "_RTO").value; if ("" !== temp) obj["RTO"] = temp;
                temp = document.getElementById (id + "_ControlAreaDesignation").value; if ("" !== temp) obj["ControlAreaDesignation"] = temp.split (",");
                temp = document.getElementById (id + "_AreaReserveSpecification").value; if ("" !== temp) obj["AreaReserveSpecification"] = temp;
                temp = document.getElementById (id + "_HostControlArea").value; if ("" !== temp) obj["HostControlArea"] = temp;
                temp = document.getElementById (id + "_AggregateNode").value; if ("" !== temp) obj["AggregateNode"] = temp.split (",");
                temp = document.getElementById (id + "_AdjacentCASet").value; if ("" !== temp) obj["AdjacentCASet"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Import_EnergyTransactions", "0..*", "1", "EnergyTransaction", "Import_SubControlArea"],
                            ["RegisteredResource", "0..*", "0..*", "RegisteredResource", "SubControlArea"],
                            ["BidSelfSched", "0..*", "0..1", "BidSelfSched", "SubControlArea"],
                            ["SideB_TieLines", "0..*", "1", "TieLine", "SideB_SubControlArea"],
                            ["GeneralClearingResults", "0..*", "0..1", "GeneralClearingResults", "SubControlArea"],
                            ["Export_EnergyTransactions", "0..*", "1", "EnergyTransaction", "Export_SubControlArea"],
                            ["RTO", "1", "0..*", "RTO", "SubControlArea"],
                            ["LossClearingResults", "1..*", "0..1", "LossClearingResults", "SubControlArea"],
                            ["To_Flowgate", "0..*", "0..1", "Flowgate", "To_SubControlArea"],
                            ["ExPostLossResults", "0..*", "0..1", "ExPostLossResults", "SubControlArea"],
                            ["ControlAreaDesignation", "0..*", "0..*", "ControlAreaDesignation", "SubControlArea"],
                            ["Send_DynamicSchedules", "0..*", "1", "DynamicSchedule", "Send_SubControlArea"],
                            ["Receive_DynamicSchedules", "0..*", "1", "DynamicSchedule", "Receive_SubControlArea"],
                            ["AreaReserveSpecification", "1", "0..*", "AreaReserveSpec", "SubControlArea"],
                            ["HostControlArea", "1", "0..*", "HostControlArea", "SubControlAreas"],
                            ["SideA_TieLines", "0..*", "1", "TieLine", "SideA_SubControlArea"],
                            ["AggregateNode", "0..*", "0..*", "AggregateNode", "SubControlArea"],
                            ["AdjacentCASet", "0..1", "0..*", "AdjacentCASet", "SubControlArea"],
                            ["CnodeDistributionFactor", "0..*", "0..1", "CnodeDistributionFactor", "SubControlArea"],
                            ["Pnode", "0..*", "0..1", "Pnode", "SubControlArea"],
                            ["From_Flowgate", "0..*", "0..1", "Flowgate", "From_SubControlArea"],
                            ["InadvertentAccount", "0..*", "1", "InadvertentAccount", "SubControlArea"]
                        ]
                    )
                );
            }
        }

        /**
         * IDC (Interchange Distribution Calulator) sends data for a TLR (Transmission Loading Relief).
         *
         */
        class FlowgateRelief extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.FlowgateRelief;
                if (null == bucket)
                   cim_data.FlowgateRelief = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.FlowgateRelief[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "FlowgateRelief";
                base.parse_element (/<cim:FlowgateRelief.effectiveDate>([\s\S]*?)<\/cim:FlowgateRelief.effectiveDate>/g, obj, "effectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:FlowgateRelief.idcTargetMktFlow>([\s\S]*?)<\/cim:FlowgateRelief.idcTargetMktFlow>/g, obj, "idcTargetMktFlow", base.to_string, sub, context);
                base.parse_element (/<cim:FlowgateRelief.terminateDate>([\s\S]*?)<\/cim:FlowgateRelief.terminateDate>/g, obj, "terminateDate", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:FlowgateRelief.Flowgate\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
                let bucket = context.parsed.FlowgateRelief;
                if (null == bucket)
                   context.parsed.FlowgateRelief = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "FlowgateRelief", "effectiveDate", "effectiveDate",  base.from_datetime, fields);
                base.export_element (obj, "FlowgateRelief", "idcTargetMktFlow", "idcTargetMktFlow",  base.from_string, fields);
                base.export_element (obj, "FlowgateRelief", "terminateDate", "terminateDate",  base.from_datetime, fields);
                base.export_attribute (obj, "FlowgateRelief", "Flowgate", "Flowgate", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#FlowgateRelief_collapse" aria-expanded="true" aria-controls="FlowgateRelief_collapse" style="margin-left: 10px;">FlowgateRelief</a></legend>
                    <div id="FlowgateRelief_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#effectiveDate}}<div><b>effectiveDate</b>: {{effectiveDate}}</div>{{/effectiveDate}}
                    {{#idcTargetMktFlow}}<div><b>idcTargetMktFlow</b>: {{idcTargetMktFlow}}</div>{{/idcTargetMktFlow}}
                    {{#terminateDate}}<div><b>terminateDate</b>: {{terminateDate}}</div>{{/terminateDate}}
                    {{#Flowgate}}<div><b>Flowgate</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Flowgate}}");}); return false;'>{{Flowgate}}</a></div>{{/Flowgate}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_FlowgateRelief_collapse" aria-expanded="true" aria-controls="{{id}}_FlowgateRelief_collapse" style="margin-left: 10px;">FlowgateRelief</a></legend>
                    <div id="{{id}}_FlowgateRelief_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_effectiveDate'>effectiveDate: </label><div class='col-sm-8'><input id='{{id}}_effectiveDate' class='form-control' type='text'{{#effectiveDate}} value='{{effectiveDate}}'{{/effectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_idcTargetMktFlow'>idcTargetMktFlow: </label><div class='col-sm-8'><input id='{{id}}_idcTargetMktFlow' class='form-control' type='text'{{#idcTargetMktFlow}} value='{{idcTargetMktFlow}}'{{/idcTargetMktFlow}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_terminateDate'>terminateDate: </label><div class='col-sm-8'><input id='{{id}}_terminateDate' class='form-control' type='text'{{#terminateDate}} value='{{terminateDate}}'{{/terminateDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Flowgate'>Flowgate: </label><div class='col-sm-8'><input id='{{id}}_Flowgate' class='form-control' type='text'{{#Flowgate}} value='{{Flowgate}}'{{/Flowgate}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "FlowgateRelief" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_effectiveDate").value; if ("" !== temp) obj["effectiveDate"] = temp;
                temp = document.getElementById (id + "_idcTargetMktFlow").value; if ("" !== temp) obj["idcTargetMktFlow"] = temp;
                temp = document.getElementById (id + "_terminateDate").value; if ("" !== temp) obj["terminateDate"] = temp;
                temp = document.getElementById (id + "_Flowgate").value; if ("" !== temp) obj["Flowgate"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Flowgate", "1", "0..*", "Flowgate", "FlowgateRelief"]
                        ]
                    )
                );
            }
        }

        /**
         * A registered resource that represents a distributed energy resource, such as a micro-generator, fuel cell, photo-voltaic energy source, etc.
         *
         */
        class RegisteredDistributedResource extends MarketCommon.RegisteredResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.RegisteredDistributedResource;
                if (null == bucket)
                   cim_data.RegisteredDistributedResource = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RegisteredDistributedResource[obj.id];
            }

            parse (context, sub)
            {
                let obj = MarketCommon.RegisteredResource.prototype.parse.call (this, context, sub);
                obj.cls = "RegisteredDistributedResource";
                base.parse_element (/<cim:RegisteredDistributedResource.distributedResourceType>([\s\S]*?)<\/cim:RegisteredDistributedResource.distributedResourceType>/g, obj, "distributedResourceType", base.to_string, sub, context);
                base.parse_attributes (/<cim:RegisteredDistributedResource.ResponseMethods\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ResponseMethods", sub, context);
                base.parse_attributes (/<cim:RegisteredDistributedResource.ResourcePerformanceRatings\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ResourcePerformanceRatings", sub, context);
                let bucket = context.parsed.RegisteredDistributedResource;
                if (null == bucket)
                   context.parsed.RegisteredDistributedResource = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = MarketCommon.RegisteredResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "RegisteredDistributedResource", "distributedResourceType", "distributedResourceType",  base.from_string, fields);
                base.export_attributes (obj, "RegisteredDistributedResource", "ResponseMethods", "ResponseMethods", fields);
                base.export_attributes (obj, "RegisteredDistributedResource", "ResourcePerformanceRatings", "ResourcePerformanceRatings", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RegisteredDistributedResource_collapse" aria-expanded="true" aria-controls="RegisteredDistributedResource_collapse" style="margin-left: 10px;">RegisteredDistributedResource</a></legend>
                    <div id="RegisteredDistributedResource_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + MarketCommon.RegisteredResource.prototype.template.call (this) +
                    `
                    {{#distributedResourceType}}<div><b>distributedResourceType</b>: {{distributedResourceType}}</div>{{/distributedResourceType}}
                    {{#ResponseMethods}}<div><b>ResponseMethods</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ResponseMethods}}
                    {{#ResourcePerformanceRatings}}<div><b>ResourcePerformanceRatings</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ResourcePerformanceRatings}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ResponseMethods"]) obj["ResponseMethods_string"] = obj["ResponseMethods"].join ();
                if (obj["ResourcePerformanceRatings"]) obj["ResourcePerformanceRatings_string"] = obj["ResourcePerformanceRatings"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ResponseMethods_string"];
                delete obj["ResourcePerformanceRatings_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RegisteredDistributedResource_collapse" aria-expanded="true" aria-controls="{{id}}_RegisteredDistributedResource_collapse" style="margin-left: 10px;">RegisteredDistributedResource</a></legend>
                    <div id="{{id}}_RegisteredDistributedResource_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + MarketCommon.RegisteredResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_distributedResourceType'>distributedResourceType: </label><div class='col-sm-8'><input id='{{id}}_distributedResourceType' class='form-control' type='text'{{#distributedResourceType}} value='{{distributedResourceType}}'{{/distributedResourceType}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "RegisteredDistributedResource" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_distributedResourceType").value; if ("" !== temp) obj["distributedResourceType"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ResponseMethods", "0..*", "1", "ResponseMethod", "RegisteredResource"],
                            ["ResourcePerformanceRatings", "0..*", "1", "ResourcePerformanceRating", "RegisteredResource"]
                        ]
                    )
                );
            }
        }

        /**
         * Groups Adjacent Control Areas.
         *
         */
        class AdjacentCASet extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AdjacentCASet;
                if (null == bucket)
                   cim_data.AdjacentCASet = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AdjacentCASet[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "AdjacentCASet";
                base.parse_element (/<cim:AdjacentCASet.lossPercentage >([\s\S]*?)<\/cim:AdjacentCASet.lossPercentage >/g, obj, "lossPercentage ", base.to_float, sub, context);
                base.parse_attribute (/<cim:AdjacentCASet.RTO\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);
                base.parse_attribute (/<cim:AdjacentCASet.HostControlArea\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "HostControlArea", sub, context);
                base.parse_attributes (/<cim:AdjacentCASet.RegisteredResource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                base.parse_attributes (/<cim:AdjacentCASet.BidSelfSched\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BidSelfSched", sub, context);
                base.parse_attributes (/<cim:AdjacentCASet.SubControlArea\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SubControlArea", sub, context);
                let bucket = context.parsed.AdjacentCASet;
                if (null == bucket)
                   context.parsed.AdjacentCASet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "AdjacentCASet", "lossPercentage ", "lossPercentage ",  base.from_float, fields);
                base.export_attribute (obj, "AdjacentCASet", "RTO", "RTO", fields);
                base.export_attribute (obj, "AdjacentCASet", "HostControlArea", "HostControlArea", fields);
                base.export_attributes (obj, "AdjacentCASet", "RegisteredResource", "RegisteredResource", fields);
                base.export_attributes (obj, "AdjacentCASet", "BidSelfSched", "BidSelfSched", fields);
                base.export_attributes (obj, "AdjacentCASet", "SubControlArea", "SubControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AdjacentCASet_collapse" aria-expanded="true" aria-controls="AdjacentCASet_collapse" style="margin-left: 10px;">AdjacentCASet</a></legend>
                    <div id="AdjacentCASet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#lossPercentage }}<div><b>lossPercentage </b>: {{lossPercentage }}</div>{{/lossPercentage }}
                    {{#RTO}}<div><b>RTO</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RTO}}");}); return false;'>{{RTO}}</a></div>{{/RTO}}
                    {{#HostControlArea}}<div><b>HostControlArea</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{HostControlArea}}");}); return false;'>{{HostControlArea}}</a></div>{{/HostControlArea}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RegisteredResource}}
                    {{#BidSelfSched}}<div><b>BidSelfSched</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/BidSelfSched}}
                    {{#SubControlArea}}<div><b>SubControlArea</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/SubControlArea}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["RegisteredResource"]) obj["RegisteredResource_string"] = obj["RegisteredResource"].join ();
                if (obj["BidSelfSched"]) obj["BidSelfSched_string"] = obj["BidSelfSched"].join ();
                if (obj["SubControlArea"]) obj["SubControlArea_string"] = obj["SubControlArea"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["RegisteredResource_string"];
                delete obj["BidSelfSched_string"];
                delete obj["SubControlArea_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AdjacentCASet_collapse" aria-expanded="true" aria-controls="{{id}}_AdjacentCASet_collapse" style="margin-left: 10px;">AdjacentCASet</a></legend>
                    <div id="{{id}}_AdjacentCASet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lossPercentage '>lossPercentage : </label><div class='col-sm-8'><input id='{{id}}_lossPercentage ' class='form-control' type='text'{{#lossPercentage }} value='{{lossPercentage }}'{{/lossPercentage }}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RTO'>RTO: </label><div class='col-sm-8'><input id='{{id}}_RTO' class='form-control' type='text'{{#RTO}} value='{{RTO}}'{{/RTO}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_HostControlArea'>HostControlArea: </label><div class='col-sm-8'><input id='{{id}}_HostControlArea' class='form-control' type='text'{{#HostControlArea}} value='{{HostControlArea}}'{{/HostControlArea}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AdjacentCASet" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_lossPercentage ").value; if ("" !== temp) obj["lossPercentage "] = temp;
                temp = document.getElementById (id + "_RTO").value; if ("" !== temp) obj["RTO"] = temp;
                temp = document.getElementById (id + "_HostControlArea").value; if ("" !== temp) obj["HostControlArea"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RTO", "1", "0..*", "RTO", "AdjacentCASet"],
                            ["HostControlArea", "0..1", "0..1", "HostControlArea", "AdjacentCASet"],
                            ["RegisteredResource", "0..*", "0..1", "RegisteredResource", "AdjacentCASet"],
                            ["BidSelfSched", "0..*", "0..1", "BidSelfSched", "AdjacentCASet"],
                            ["SubControlArea", "0..*", "0..1", "SubControlArea", "AdjacentCASet"]
                        ]
                    )
                );
            }
        }

        /**
         * Market Power Mitigation (MPM) test thresholds for resource as well as designated congestion areas (DCAs).
         *
         */
        class MPMTestThreshold extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MPMTestThreshold;
                if (null == bucket)
                   cim_data.MPMTestThreshold = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MPMTestThreshold[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MPMTestThreshold";
                base.parse_attribute (/<cim:MPMTestThreshold.marketType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "marketType", sub, context);
                base.parse_element (/<cim:MPMTestThreshold.percent>([\s\S]*?)<\/cim:MPMTestThreshold.percent>/g, obj, "percent", base.to_string, sub, context);
                base.parse_element (/<cim:MPMTestThreshold.price>([\s\S]*?)<\/cim:MPMTestThreshold.price>/g, obj, "price", base.to_string, sub, context);
                base.parse_attributes (/<cim:MPMTestThreshold.AggregatedPnode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AggregatedPnode", sub, context);
                base.parse_attribute (/<cim:MPMTestThreshold.MPMTestCategory\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MPMTestCategory", sub, context);
                base.parse_attributes (/<cim:MPMTestThreshold.RegisteredResource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                let bucket = context.parsed.MPMTestThreshold;
                if (null == bucket)
                   context.parsed.MPMTestThreshold = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "MPMTestThreshold", "marketType", "marketType", fields);
                base.export_element (obj, "MPMTestThreshold", "percent", "percent",  base.from_string, fields);
                base.export_element (obj, "MPMTestThreshold", "price", "price",  base.from_string, fields);
                base.export_attributes (obj, "MPMTestThreshold", "AggregatedPnode", "AggregatedPnode", fields);
                base.export_attribute (obj, "MPMTestThreshold", "MPMTestCategory", "MPMTestCategory", fields);
                base.export_attributes (obj, "MPMTestThreshold", "RegisteredResource", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MPMTestThreshold_collapse" aria-expanded="true" aria-controls="MPMTestThreshold_collapse" style="margin-left: 10px;">MPMTestThreshold</a></legend>
                    <div id="MPMTestThreshold_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#marketType}}<div><b>marketType</b>: {{marketType}}</div>{{/marketType}}
                    {{#percent}}<div><b>percent</b>: {{percent}}</div>{{/percent}}
                    {{#price}}<div><b>price</b>: {{price}}</div>{{/price}}
                    {{#AggregatedPnode}}<div><b>AggregatedPnode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AggregatedPnode}}
                    {{#MPMTestCategory}}<div><b>MPMTestCategory</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{MPMTestCategory}}");}); return false;'>{{MPMTestCategory}}</a></div>{{/MPMTestCategory}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RegisteredResource}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["marketTypeMarketType"] = [{ id: '', selected: (!obj["marketType"])}]; for (let property in MktDomain.MarketType) obj["marketTypeMarketType"].push ({ id: property, selected: obj["marketType"] && obj["marketType"].endsWith ('.' + property)});
                if (obj["AggregatedPnode"]) obj["AggregatedPnode_string"] = obj["AggregatedPnode"].join ();
                if (obj["RegisteredResource"]) obj["RegisteredResource_string"] = obj["RegisteredResource"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["marketTypeMarketType"];
                delete obj["AggregatedPnode_string"];
                delete obj["RegisteredResource_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MPMTestThreshold_collapse" aria-expanded="true" aria-controls="{{id}}_MPMTestThreshold_collapse" style="margin-left: 10px;">MPMTestThreshold</a></legend>
                    <div id="{{id}}_MPMTestThreshold_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_marketType'>marketType: </label><div class='col-sm-8'><select id='{{id}}_marketType' class='form-control custom-select'>{{#marketTypeMarketType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/marketTypeMarketType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_percent'>percent: </label><div class='col-sm-8'><input id='{{id}}_percent' class='form-control' type='text'{{#percent}} value='{{percent}}'{{/percent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_price'>price: </label><div class='col-sm-8'><input id='{{id}}_price' class='form-control' type='text'{{#price}} value='{{price}}'{{/price}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AggregatedPnode'>AggregatedPnode: </label><div class='col-sm-8'><input id='{{id}}_AggregatedPnode' class='form-control' type='text'{{#AggregatedPnode}} value='{{AggregatedPnode_string}}'{{/AggregatedPnode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MPMTestCategory'>MPMTestCategory: </label><div class='col-sm-8'><input id='{{id}}_MPMTestCategory' class='form-control' type='text'{{#MPMTestCategory}} value='{{MPMTestCategory}}'{{/MPMTestCategory}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='{{id}}_RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource_string}}'{{/RegisteredResource}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MPMTestThreshold" };
                super.submit (id, obj);
                temp = MktDomain.MarketType[document.getElementById (id + "_marketType").value]; if (temp) obj["marketType"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#MarketType." + temp; else delete obj["marketType"];
                temp = document.getElementById (id + "_percent").value; if ("" !== temp) obj["percent"] = temp;
                temp = document.getElementById (id + "_price").value; if ("" !== temp) obj["price"] = temp;
                temp = document.getElementById (id + "_AggregatedPnode").value; if ("" !== temp) obj["AggregatedPnode"] = temp.split (",");
                temp = document.getElementById (id + "_MPMTestCategory").value; if ("" !== temp) obj["MPMTestCategory"] = temp;
                temp = document.getElementById (id + "_RegisteredResource").value; if ("" !== temp) obj["RegisteredResource"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AggregatedPnode", "0..*", "1..*", "AggregatedPnode", "MPMTestThreshold"],
                            ["MPMTestCategory", "1", "0..*", "MPMTestCategory", "MPMTestThreshold"],
                            ["RegisteredResource", "0..*", "0..*", "RegisteredResource", "MPMTestThreshold"]
                        ]
                    )
                );
            }
        }

        /**
         * Configuration Member of CCP Configuration.
         *
         */
        class CombinedCycleConfigurationMember extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.CombinedCycleConfigurationMember;
                if (null == bucket)
                   cim_data.CombinedCycleConfigurationMember = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CombinedCycleConfigurationMember[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CombinedCycleConfigurationMember";
                base.parse_element (/<cim:CombinedCycleConfigurationMember.primary>([\s\S]*?)<\/cim:CombinedCycleConfigurationMember.primary>/g, obj, "primary", base.to_boolean, sub, context);
                base.parse_element (/<cim:CombinedCycleConfigurationMember.steam>([\s\S]*?)<\/cim:CombinedCycleConfigurationMember.steam>/g, obj, "steam", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:CombinedCycleConfigurationMember.CombinedCycleConfiguration\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CombinedCycleConfiguration", sub, context);
                base.parse_attribute (/<cim:CombinedCycleConfigurationMember.MktThermalGeneratingUnit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MktThermalGeneratingUnit", sub, context);
                let bucket = context.parsed.CombinedCycleConfigurationMember;
                if (null == bucket)
                   context.parsed.CombinedCycleConfigurationMember = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "CombinedCycleConfigurationMember", "primary", "primary",  base.from_boolean, fields);
                base.export_element (obj, "CombinedCycleConfigurationMember", "steam", "steam",  base.from_boolean, fields);
                base.export_attribute (obj, "CombinedCycleConfigurationMember", "CombinedCycleConfiguration", "CombinedCycleConfiguration", fields);
                base.export_attribute (obj, "CombinedCycleConfigurationMember", "MktThermalGeneratingUnit", "MktThermalGeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CombinedCycleConfigurationMember_collapse" aria-expanded="true" aria-controls="CombinedCycleConfigurationMember_collapse" style="margin-left: 10px;">CombinedCycleConfigurationMember</a></legend>
                    <div id="CombinedCycleConfigurationMember_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#primary}}<div><b>primary</b>: {{primary}}</div>{{/primary}}
                    {{#steam}}<div><b>steam</b>: {{steam}}</div>{{/steam}}
                    {{#CombinedCycleConfiguration}}<div><b>CombinedCycleConfiguration</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{CombinedCycleConfiguration}}");}); return false;'>{{CombinedCycleConfiguration}}</a></div>{{/CombinedCycleConfiguration}}
                    {{#MktThermalGeneratingUnit}}<div><b>MktThermalGeneratingUnit</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{MktThermalGeneratingUnit}}");}); return false;'>{{MktThermalGeneratingUnit}}</a></div>{{/MktThermalGeneratingUnit}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CombinedCycleConfigurationMember_collapse" aria-expanded="true" aria-controls="{{id}}_CombinedCycleConfigurationMember_collapse" style="margin-left: 10px;">CombinedCycleConfigurationMember</a></legend>
                    <div id="{{id}}_CombinedCycleConfigurationMember_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_primary'>primary: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_primary' class='form-check-input' type='checkbox'{{#primary}} checked{{/primary}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_steam'>steam: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_steam' class='form-check-input' type='checkbox'{{#steam}} checked{{/steam}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CombinedCycleConfiguration'>CombinedCycleConfiguration: </label><div class='col-sm-8'><input id='{{id}}_CombinedCycleConfiguration' class='form-control' type='text'{{#CombinedCycleConfiguration}} value='{{CombinedCycleConfiguration}}'{{/CombinedCycleConfiguration}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MktThermalGeneratingUnit'>MktThermalGeneratingUnit: </label><div class='col-sm-8'><input id='{{id}}_MktThermalGeneratingUnit' class='form-control' type='text'{{#MktThermalGeneratingUnit}} value='{{MktThermalGeneratingUnit}}'{{/MktThermalGeneratingUnit}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CombinedCycleConfigurationMember" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_primary").checked; if (temp) obj["primary"] = true;
                temp = document.getElementById (id + "_steam").checked; if (temp) obj["steam"] = true;
                temp = document.getElementById (id + "_CombinedCycleConfiguration").value; if ("" !== temp) obj["CombinedCycleConfiguration"] = temp;
                temp = document.getElementById (id + "_MktThermalGeneratingUnit").value; if ("" !== temp) obj["MktThermalGeneratingUnit"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CombinedCycleConfiguration", "1", "0..*", "CombinedCycleConfiguration", "CombinedCycleConfigurationMember"],
                            ["MktThermalGeneratingUnit", "1", "0..*", "MktThermalGeneratingUnit", "CombinedCycleConfigurationMember"]
                        ]
                    )
                );
            }
        }

        /**
         * A metered subsystem.
         *
         */
        class MeteredSubSystem extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MeteredSubSystem;
                if (null == bucket)
                   cim_data.MeteredSubSystem = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MeteredSubSystem[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MeteredSubSystem";
                base.parse_attributes (/<cim:MeteredSubSystem.MSSZone\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MSSZone", sub, context);
                base.parse_attribute (/<cim:MeteredSubSystem.MSSAggregation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MSSAggregation", sub, context);
                let bucket = context.parsed.MeteredSubSystem;
                if (null == bucket)
                   context.parsed.MeteredSubSystem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "MeteredSubSystem", "MSSZone", "MSSZone", fields);
                base.export_attribute (obj, "MeteredSubSystem", "MSSAggregation", "MSSAggregation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MeteredSubSystem_collapse" aria-expanded="true" aria-controls="MeteredSubSystem_collapse" style="margin-left: 10px;">MeteredSubSystem</a></legend>
                    <div id="MeteredSubSystem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#MSSZone}}<div><b>MSSZone</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MSSZone}}
                    {{#MSSAggregation}}<div><b>MSSAggregation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{MSSAggregation}}");}); return false;'>{{MSSAggregation}}</a></div>{{/MSSAggregation}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["MSSZone"]) obj["MSSZone_string"] = obj["MSSZone"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["MSSZone_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MeteredSubSystem_collapse" aria-expanded="true" aria-controls="{{id}}_MeteredSubSystem_collapse" style="margin-left: 10px;">MeteredSubSystem</a></legend>
                    <div id="{{id}}_MeteredSubSystem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MSSAggregation'>MSSAggregation: </label><div class='col-sm-8'><input id='{{id}}_MSSAggregation' class='form-control' type='text'{{#MSSAggregation}} value='{{MSSAggregation}}'{{/MSSAggregation}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MeteredSubSystem" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_MSSAggregation").value; if ("" !== temp) obj["MSSAggregation"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MSSZone", "0..*", "0..1", "MSSZone", "MeteredSubSystem"],
                            ["MSSAggregation", "0..1", "1..*", "MSSAggregation", "MeteredSubSystem"]
                        ]
                    )
                );
            }
        }

        /**
         * Provides definition of Transmission Ownership Right and Existing Transmission Contract identifiers for use by SCUC.
         *
         * RMR contract hosting: Startup lead time, Contract Service Limits, Max Service Hours, Max MWhs, Max Start-ups, Ramp Rate, Max Net Dependable Capacity, Min Capacity and Unit Substitution for DAM/RTM to retrieve.
         *
         */
        class ContractRight extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ContractRight;
                if (null == bucket)
                   cim_data.ContractRight = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ContractRight[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ContractRight";
                base.parse_element (/<cim:ContractRight.chainOrder>([\s\S]*?)<\/cim:ContractRight.chainOrder>/g, obj, "chainOrder", base.to_string, sub, context);
                base.parse_element (/<cim:ContractRight.contractMW>([\s\S]*?)<\/cim:ContractRight.contractMW>/g, obj, "contractMW", base.to_float, sub, context);
                base.parse_element (/<cim:ContractRight.contractPrice>([\s\S]*?)<\/cim:ContractRight.contractPrice>/g, obj, "contractPrice", base.to_string, sub, context);
                base.parse_element (/<cim:ContractRight.contractPriority>([\s\S]*?)<\/cim:ContractRight.contractPriority>/g, obj, "contractPriority", base.to_string, sub, context);
                base.parse_element (/<cim:ContractRight.contractStatus>([\s\S]*?)<\/cim:ContractRight.contractStatus>/g, obj, "contractStatus", base.to_string, sub, context);
                base.parse_attribute (/<cim:ContractRight.contractType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "contractType", sub, context);
                base.parse_attribute (/<cim:ContractRight.financialLocation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "financialLocation", sub, context);
                base.parse_attribute (/<cim:ContractRight.financialRightsDAM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "financialRightsDAM", sub, context);
                base.parse_attribute (/<cim:ContractRight.financialRightsRTM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "financialRightsRTM", sub, context);
                base.parse_element (/<cim:ContractRight.fuelAdder>([\s\S]*?)<\/cim:ContractRight.fuelAdder>/g, obj, "fuelAdder", base.to_float, sub, context);
                base.parse_element (/<cim:ContractRight.latestSchedMinutes>([\s\S]*?)<\/cim:ContractRight.latestSchedMinutes>/g, obj, "latestSchedMinutes", base.to_string, sub, context);
                base.parse_attribute (/<cim:ContractRight.latestSchedMktType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "latestSchedMktType", sub, context);
                base.parse_element (/<cim:ContractRight.maximumScheduleQuantity>([\s\S]*?)<\/cim:ContractRight.maximumScheduleQuantity>/g, obj, "maximumScheduleQuantity", base.to_float, sub, context);
                base.parse_element (/<cim:ContractRight.maximumServiceHours>([\s\S]*?)<\/cim:ContractRight.maximumServiceHours>/g, obj, "maximumServiceHours", base.to_string, sub, context);
                base.parse_element (/<cim:ContractRight.maximumStartups>([\s\S]*?)<\/cim:ContractRight.maximumStartups>/g, obj, "maximumStartups", base.to_string, sub, context);
                base.parse_element (/<cim:ContractRight.maxNetDependableCapacity>([\s\S]*?)<\/cim:ContractRight.maxNetDependableCapacity>/g, obj, "maxNetDependableCapacity", base.to_float, sub, context);
                base.parse_element (/<cim:ContractRight.minimumLoad>([\s\S]*?)<\/cim:ContractRight.minimumLoad>/g, obj, "minimumLoad", base.to_float, sub, context);
                base.parse_element (/<cim:ContractRight.minimumScheduleQuantity>([\s\S]*?)<\/cim:ContractRight.minimumScheduleQuantity>/g, obj, "minimumScheduleQuantity", base.to_float, sub, context);
                base.parse_attribute (/<cim:ContractRight.physicalRightsDAM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "physicalRightsDAM", sub, context);
                base.parse_attribute (/<cim:ContractRight.physicalRightsRTM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "physicalRightsRTM", sub, context);
                base.parse_element (/<cim:ContractRight.startupLeadTime>([\s\S]*?)<\/cim:ContractRight.startupLeadTime>/g, obj, "startupLeadTime", base.to_string, sub, context);
                base.parse_attribute (/<cim:ContractRight.TRType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TRType", sub, context);
                base.parse_attribute (/<cim:ContractRight.SchedulingCoordinator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SchedulingCoordinator", sub, context);
                base.parse_attributes (/<cim:ContractRight.ContractDistributionFactor\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ContractDistributionFactor", sub, context);
                base.parse_attributes (/<cim:ContractRight.BidSelfSched\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BidSelfSched", sub, context);
                base.parse_attribute (/<cim:ContractRight.Ind_TransmissionRightChain\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Ind_TransmissionRightChain", sub, context);
                base.parse_attributes (/<cim:ContractRight.TREntitlement\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TREntitlement", sub, context);
                base.parse_attributes (/<cim:ContractRight.TransmissionInterfaceEntitlement\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionInterfaceEntitlement", sub, context);
                base.parse_attribute (/<cim:ContractRight.Chain_TransmissionRightChain\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Chain_TransmissionRightChain", sub, context);
                base.parse_attributes (/<cim:ContractRight.SubstitutionResourceList\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SubstitutionResourceList", sub, context);
                base.parse_attribute (/<cim:ContractRight.RTO\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);
                let bucket = context.parsed.ContractRight;
                if (null == bucket)
                   context.parsed.ContractRight = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ContractRight", "chainOrder", "chainOrder",  base.from_string, fields);
                base.export_element (obj, "ContractRight", "contractMW", "contractMW",  base.from_float, fields);
                base.export_element (obj, "ContractRight", "contractPrice", "contractPrice",  base.from_string, fields);
                base.export_element (obj, "ContractRight", "contractPriority", "contractPriority",  base.from_string, fields);
                base.export_element (obj, "ContractRight", "contractStatus", "contractStatus",  base.from_string, fields);
                base.export_attribute (obj, "ContractRight", "contractType", "contractType", fields);
                base.export_attribute (obj, "ContractRight", "financialLocation", "financialLocation", fields);
                base.export_attribute (obj, "ContractRight", "financialRightsDAM", "financialRightsDAM", fields);
                base.export_attribute (obj, "ContractRight", "financialRightsRTM", "financialRightsRTM", fields);
                base.export_element (obj, "ContractRight", "fuelAdder", "fuelAdder",  base.from_float, fields);
                base.export_element (obj, "ContractRight", "latestSchedMinutes", "latestSchedMinutes",  base.from_string, fields);
                base.export_attribute (obj, "ContractRight", "latestSchedMktType", "latestSchedMktType", fields);
                base.export_element (obj, "ContractRight", "maximumScheduleQuantity", "maximumScheduleQuantity",  base.from_float, fields);
                base.export_element (obj, "ContractRight", "maximumServiceHours", "maximumServiceHours",  base.from_string, fields);
                base.export_element (obj, "ContractRight", "maximumStartups", "maximumStartups",  base.from_string, fields);
                base.export_element (obj, "ContractRight", "maxNetDependableCapacity", "maxNetDependableCapacity",  base.from_float, fields);
                base.export_element (obj, "ContractRight", "minimumLoad", "minimumLoad",  base.from_float, fields);
                base.export_element (obj, "ContractRight", "minimumScheduleQuantity", "minimumScheduleQuantity",  base.from_float, fields);
                base.export_attribute (obj, "ContractRight", "physicalRightsDAM", "physicalRightsDAM", fields);
                base.export_attribute (obj, "ContractRight", "physicalRightsRTM", "physicalRightsRTM", fields);
                base.export_element (obj, "ContractRight", "startupLeadTime", "startupLeadTime",  base.from_string, fields);
                base.export_attribute (obj, "ContractRight", "TRType", "TRType", fields);
                base.export_attribute (obj, "ContractRight", "SchedulingCoordinator", "SchedulingCoordinator", fields);
                base.export_attributes (obj, "ContractRight", "ContractDistributionFactor", "ContractDistributionFactor", fields);
                base.export_attributes (obj, "ContractRight", "BidSelfSched", "BidSelfSched", fields);
                base.export_attribute (obj, "ContractRight", "Ind_TransmissionRightChain", "Ind_TransmissionRightChain", fields);
                base.export_attributes (obj, "ContractRight", "TREntitlement", "TREntitlement", fields);
                base.export_attributes (obj, "ContractRight", "TransmissionInterfaceEntitlement", "TransmissionInterfaceEntitlement", fields);
                base.export_attribute (obj, "ContractRight", "Chain_TransmissionRightChain", "Chain_TransmissionRightChain", fields);
                base.export_attributes (obj, "ContractRight", "SubstitutionResourceList", "SubstitutionResourceList", fields);
                base.export_attribute (obj, "ContractRight", "RTO", "RTO", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ContractRight_collapse" aria-expanded="true" aria-controls="ContractRight_collapse" style="margin-left: 10px;">ContractRight</a></legend>
                    <div id="ContractRight_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#chainOrder}}<div><b>chainOrder</b>: {{chainOrder}}</div>{{/chainOrder}}
                    {{#contractMW}}<div><b>contractMW</b>: {{contractMW}}</div>{{/contractMW}}
                    {{#contractPrice}}<div><b>contractPrice</b>: {{contractPrice}}</div>{{/contractPrice}}
                    {{#contractPriority}}<div><b>contractPriority</b>: {{contractPriority}}</div>{{/contractPriority}}
                    {{#contractStatus}}<div><b>contractStatus</b>: {{contractStatus}}</div>{{/contractStatus}}
                    {{#contractType}}<div><b>contractType</b>: {{contractType}}</div>{{/contractType}}
                    {{#financialLocation}}<div><b>financialLocation</b>: {{financialLocation}}</div>{{/financialLocation}}
                    {{#financialRightsDAM}}<div><b>financialRightsDAM</b>: {{financialRightsDAM}}</div>{{/financialRightsDAM}}
                    {{#financialRightsRTM}}<div><b>financialRightsRTM</b>: {{financialRightsRTM}}</div>{{/financialRightsRTM}}
                    {{#fuelAdder}}<div><b>fuelAdder</b>: {{fuelAdder}}</div>{{/fuelAdder}}
                    {{#latestSchedMinutes}}<div><b>latestSchedMinutes</b>: {{latestSchedMinutes}}</div>{{/latestSchedMinutes}}
                    {{#latestSchedMktType}}<div><b>latestSchedMktType</b>: {{latestSchedMktType}}</div>{{/latestSchedMktType}}
                    {{#maximumScheduleQuantity}}<div><b>maximumScheduleQuantity</b>: {{maximumScheduleQuantity}}</div>{{/maximumScheduleQuantity}}
                    {{#maximumServiceHours}}<div><b>maximumServiceHours</b>: {{maximumServiceHours}}</div>{{/maximumServiceHours}}
                    {{#maximumStartups}}<div><b>maximumStartups</b>: {{maximumStartups}}</div>{{/maximumStartups}}
                    {{#maxNetDependableCapacity}}<div><b>maxNetDependableCapacity</b>: {{maxNetDependableCapacity}}</div>{{/maxNetDependableCapacity}}
                    {{#minimumLoad}}<div><b>minimumLoad</b>: {{minimumLoad}}</div>{{/minimumLoad}}
                    {{#minimumScheduleQuantity}}<div><b>minimumScheduleQuantity</b>: {{minimumScheduleQuantity}}</div>{{/minimumScheduleQuantity}}
                    {{#physicalRightsDAM}}<div><b>physicalRightsDAM</b>: {{physicalRightsDAM}}</div>{{/physicalRightsDAM}}
                    {{#physicalRightsRTM}}<div><b>physicalRightsRTM</b>: {{physicalRightsRTM}}</div>{{/physicalRightsRTM}}
                    {{#startupLeadTime}}<div><b>startupLeadTime</b>: {{startupLeadTime}}</div>{{/startupLeadTime}}
                    {{#TRType}}<div><b>TRType</b>: {{TRType}}</div>{{/TRType}}
                    {{#SchedulingCoordinator}}<div><b>SchedulingCoordinator</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{SchedulingCoordinator}}");}); return false;'>{{SchedulingCoordinator}}</a></div>{{/SchedulingCoordinator}}
                    {{#ContractDistributionFactor}}<div><b>ContractDistributionFactor</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ContractDistributionFactor}}
                    {{#BidSelfSched}}<div><b>BidSelfSched</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/BidSelfSched}}
                    {{#Ind_TransmissionRightChain}}<div><b>Ind_TransmissionRightChain</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Ind_TransmissionRightChain}}");}); return false;'>{{Ind_TransmissionRightChain}}</a></div>{{/Ind_TransmissionRightChain}}
                    {{#TREntitlement}}<div><b>TREntitlement</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TREntitlement}}
                    {{#TransmissionInterfaceEntitlement}}<div><b>TransmissionInterfaceEntitlement</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TransmissionInterfaceEntitlement}}
                    {{#Chain_TransmissionRightChain}}<div><b>Chain_TransmissionRightChain</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Chain_TransmissionRightChain}}");}); return false;'>{{Chain_TransmissionRightChain}}</a></div>{{/Chain_TransmissionRightChain}}
                    {{#SubstitutionResourceList}}<div><b>SubstitutionResourceList</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/SubstitutionResourceList}}
                    {{#RTO}}<div><b>RTO</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RTO}}");}); return false;'>{{RTO}}</a></div>{{/RTO}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["contractTypeContractType"] = [{ id: '', selected: (!obj["contractType"])}]; for (let property in MktDomain.ContractType) obj["contractTypeContractType"].push ({ id: property, selected: obj["contractType"] && obj["contractType"].endsWith ('.' + property)});
                obj["financialLocationYesNo"] = [{ id: '', selected: (!obj["financialLocation"])}]; for (let property in MktDomain.YesNo) obj["financialLocationYesNo"].push ({ id: property, selected: obj["financialLocation"] && obj["financialLocation"].endsWith ('.' + property)});
                obj["financialRightsDAMYesNo"] = [{ id: '', selected: (!obj["financialRightsDAM"])}]; for (let property in MktDomain.YesNo) obj["financialRightsDAMYesNo"].push ({ id: property, selected: obj["financialRightsDAM"] && obj["financialRightsDAM"].endsWith ('.' + property)});
                obj["financialRightsRTMYesNo"] = [{ id: '', selected: (!obj["financialRightsRTM"])}]; for (let property in MktDomain.YesNo) obj["financialRightsRTMYesNo"].push ({ id: property, selected: obj["financialRightsRTM"] && obj["financialRightsRTM"].endsWith ('.' + property)});
                obj["latestSchedMktTypeMarketType"] = [{ id: '', selected: (!obj["latestSchedMktType"])}]; for (let property in MktDomain.MarketType) obj["latestSchedMktTypeMarketType"].push ({ id: property, selected: obj["latestSchedMktType"] && obj["latestSchedMktType"].endsWith ('.' + property)});
                obj["physicalRightsDAMYesNo"] = [{ id: '', selected: (!obj["physicalRightsDAM"])}]; for (let property in MktDomain.YesNo) obj["physicalRightsDAMYesNo"].push ({ id: property, selected: obj["physicalRightsDAM"] && obj["physicalRightsDAM"].endsWith ('.' + property)});
                obj["physicalRightsRTMYesNo"] = [{ id: '', selected: (!obj["physicalRightsRTM"])}]; for (let property in MktDomain.YesNo) obj["physicalRightsRTMYesNo"].push ({ id: property, selected: obj["physicalRightsRTM"] && obj["physicalRightsRTM"].endsWith ('.' + property)});
                obj["TRTypeTRType"] = [{ id: '', selected: (!obj["TRType"])}]; for (let property in MktDomain.TRType) obj["TRTypeTRType"].push ({ id: property, selected: obj["TRType"] && obj["TRType"].endsWith ('.' + property)});
                if (obj["ContractDistributionFactor"]) obj["ContractDistributionFactor_string"] = obj["ContractDistributionFactor"].join ();
                if (obj["BidSelfSched"]) obj["BidSelfSched_string"] = obj["BidSelfSched"].join ();
                if (obj["TREntitlement"]) obj["TREntitlement_string"] = obj["TREntitlement"].join ();
                if (obj["TransmissionInterfaceEntitlement"]) obj["TransmissionInterfaceEntitlement_string"] = obj["TransmissionInterfaceEntitlement"].join ();
                if (obj["SubstitutionResourceList"]) obj["SubstitutionResourceList_string"] = obj["SubstitutionResourceList"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["contractTypeContractType"];
                delete obj["financialLocationYesNo"];
                delete obj["financialRightsDAMYesNo"];
                delete obj["financialRightsRTMYesNo"];
                delete obj["latestSchedMktTypeMarketType"];
                delete obj["physicalRightsDAMYesNo"];
                delete obj["physicalRightsRTMYesNo"];
                delete obj["TRTypeTRType"];
                delete obj["ContractDistributionFactor_string"];
                delete obj["BidSelfSched_string"];
                delete obj["TREntitlement_string"];
                delete obj["TransmissionInterfaceEntitlement_string"];
                delete obj["SubstitutionResourceList_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ContractRight_collapse" aria-expanded="true" aria-controls="{{id}}_ContractRight_collapse" style="margin-left: 10px;">ContractRight</a></legend>
                    <div id="{{id}}_ContractRight_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_chainOrder'>chainOrder: </label><div class='col-sm-8'><input id='{{id}}_chainOrder' class='form-control' type='text'{{#chainOrder}} value='{{chainOrder}}'{{/chainOrder}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_contractMW'>contractMW: </label><div class='col-sm-8'><input id='{{id}}_contractMW' class='form-control' type='text'{{#contractMW}} value='{{contractMW}}'{{/contractMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_contractPrice'>contractPrice: </label><div class='col-sm-8'><input id='{{id}}_contractPrice' class='form-control' type='text'{{#contractPrice}} value='{{contractPrice}}'{{/contractPrice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_contractPriority'>contractPriority: </label><div class='col-sm-8'><input id='{{id}}_contractPriority' class='form-control' type='text'{{#contractPriority}} value='{{contractPriority}}'{{/contractPriority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_contractStatus'>contractStatus: </label><div class='col-sm-8'><input id='{{id}}_contractStatus' class='form-control' type='text'{{#contractStatus}} value='{{contractStatus}}'{{/contractStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_contractType'>contractType: </label><div class='col-sm-8'><select id='{{id}}_contractType' class='form-control custom-select'>{{#contractTypeContractType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/contractTypeContractType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_financialLocation'>financialLocation: </label><div class='col-sm-8'><select id='{{id}}_financialLocation' class='form-control custom-select'>{{#financialLocationYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/financialLocationYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_financialRightsDAM'>financialRightsDAM: </label><div class='col-sm-8'><select id='{{id}}_financialRightsDAM' class='form-control custom-select'>{{#financialRightsDAMYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/financialRightsDAMYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_financialRightsRTM'>financialRightsRTM: </label><div class='col-sm-8'><select id='{{id}}_financialRightsRTM' class='form-control custom-select'>{{#financialRightsRTMYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/financialRightsRTMYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fuelAdder'>fuelAdder: </label><div class='col-sm-8'><input id='{{id}}_fuelAdder' class='form-control' type='text'{{#fuelAdder}} value='{{fuelAdder}}'{{/fuelAdder}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_latestSchedMinutes'>latestSchedMinutes: </label><div class='col-sm-8'><input id='{{id}}_latestSchedMinutes' class='form-control' type='text'{{#latestSchedMinutes}} value='{{latestSchedMinutes}}'{{/latestSchedMinutes}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_latestSchedMktType'>latestSchedMktType: </label><div class='col-sm-8'><select id='{{id}}_latestSchedMktType' class='form-control custom-select'>{{#latestSchedMktTypeMarketType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/latestSchedMktTypeMarketType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maximumScheduleQuantity'>maximumScheduleQuantity: </label><div class='col-sm-8'><input id='{{id}}_maximumScheduleQuantity' class='form-control' type='text'{{#maximumScheduleQuantity}} value='{{maximumScheduleQuantity}}'{{/maximumScheduleQuantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maximumServiceHours'>maximumServiceHours: </label><div class='col-sm-8'><input id='{{id}}_maximumServiceHours' class='form-control' type='text'{{#maximumServiceHours}} value='{{maximumServiceHours}}'{{/maximumServiceHours}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maximumStartups'>maximumStartups: </label><div class='col-sm-8'><input id='{{id}}_maximumStartups' class='form-control' type='text'{{#maximumStartups}} value='{{maximumStartups}}'{{/maximumStartups}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxNetDependableCapacity'>maxNetDependableCapacity: </label><div class='col-sm-8'><input id='{{id}}_maxNetDependableCapacity' class='form-control' type='text'{{#maxNetDependableCapacity}} value='{{maxNetDependableCapacity}}'{{/maxNetDependableCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minimumLoad'>minimumLoad: </label><div class='col-sm-8'><input id='{{id}}_minimumLoad' class='form-control' type='text'{{#minimumLoad}} value='{{minimumLoad}}'{{/minimumLoad}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minimumScheduleQuantity'>minimumScheduleQuantity: </label><div class='col-sm-8'><input id='{{id}}_minimumScheduleQuantity' class='form-control' type='text'{{#minimumScheduleQuantity}} value='{{minimumScheduleQuantity}}'{{/minimumScheduleQuantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_physicalRightsDAM'>physicalRightsDAM: </label><div class='col-sm-8'><select id='{{id}}_physicalRightsDAM' class='form-control custom-select'>{{#physicalRightsDAMYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/physicalRightsDAMYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_physicalRightsRTM'>physicalRightsRTM: </label><div class='col-sm-8'><select id='{{id}}_physicalRightsRTM' class='form-control custom-select'>{{#physicalRightsRTMYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/physicalRightsRTMYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_startupLeadTime'>startupLeadTime: </label><div class='col-sm-8'><input id='{{id}}_startupLeadTime' class='form-control' type='text'{{#startupLeadTime}} value='{{startupLeadTime}}'{{/startupLeadTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TRType'>TRType: </label><div class='col-sm-8'><select id='{{id}}_TRType' class='form-control custom-select'>{{#TRTypeTRType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/TRTypeTRType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SchedulingCoordinator'>SchedulingCoordinator: </label><div class='col-sm-8'><input id='{{id}}_SchedulingCoordinator' class='form-control' type='text'{{#SchedulingCoordinator}} value='{{SchedulingCoordinator}}'{{/SchedulingCoordinator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Ind_TransmissionRightChain'>Ind_TransmissionRightChain: </label><div class='col-sm-8'><input id='{{id}}_Ind_TransmissionRightChain' class='form-control' type='text'{{#Ind_TransmissionRightChain}} value='{{Ind_TransmissionRightChain}}'{{/Ind_TransmissionRightChain}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Chain_TransmissionRightChain'>Chain_TransmissionRightChain: </label><div class='col-sm-8'><input id='{{id}}_Chain_TransmissionRightChain' class='form-control' type='text'{{#Chain_TransmissionRightChain}} value='{{Chain_TransmissionRightChain}}'{{/Chain_TransmissionRightChain}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RTO'>RTO: </label><div class='col-sm-8'><input id='{{id}}_RTO' class='form-control' type='text'{{#RTO}} value='{{RTO}}'{{/RTO}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ContractRight" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_chainOrder").value; if ("" !== temp) obj["chainOrder"] = temp;
                temp = document.getElementById (id + "_contractMW").value; if ("" !== temp) obj["contractMW"] = temp;
                temp = document.getElementById (id + "_contractPrice").value; if ("" !== temp) obj["contractPrice"] = temp;
                temp = document.getElementById (id + "_contractPriority").value; if ("" !== temp) obj["contractPriority"] = temp;
                temp = document.getElementById (id + "_contractStatus").value; if ("" !== temp) obj["contractStatus"] = temp;
                temp = MktDomain.ContractType[document.getElementById (id + "_contractType").value]; if (temp) obj["contractType"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#ContractType." + temp; else delete obj["contractType"];
                temp = MktDomain.YesNo[document.getElementById (id + "_financialLocation").value]; if (temp) obj["financialLocation"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["financialLocation"];
                temp = MktDomain.YesNo[document.getElementById (id + "_financialRightsDAM").value]; if (temp) obj["financialRightsDAM"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["financialRightsDAM"];
                temp = MktDomain.YesNo[document.getElementById (id + "_financialRightsRTM").value]; if (temp) obj["financialRightsRTM"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["financialRightsRTM"];
                temp = document.getElementById (id + "_fuelAdder").value; if ("" !== temp) obj["fuelAdder"] = temp;
                temp = document.getElementById (id + "_latestSchedMinutes").value; if ("" !== temp) obj["latestSchedMinutes"] = temp;
                temp = MktDomain.MarketType[document.getElementById (id + "_latestSchedMktType").value]; if (temp) obj["latestSchedMktType"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#MarketType." + temp; else delete obj["latestSchedMktType"];
                temp = document.getElementById (id + "_maximumScheduleQuantity").value; if ("" !== temp) obj["maximumScheduleQuantity"] = temp;
                temp = document.getElementById (id + "_maximumServiceHours").value; if ("" !== temp) obj["maximumServiceHours"] = temp;
                temp = document.getElementById (id + "_maximumStartups").value; if ("" !== temp) obj["maximumStartups"] = temp;
                temp = document.getElementById (id + "_maxNetDependableCapacity").value; if ("" !== temp) obj["maxNetDependableCapacity"] = temp;
                temp = document.getElementById (id + "_minimumLoad").value; if ("" !== temp) obj["minimumLoad"] = temp;
                temp = document.getElementById (id + "_minimumScheduleQuantity").value; if ("" !== temp) obj["minimumScheduleQuantity"] = temp;
                temp = MktDomain.YesNo[document.getElementById (id + "_physicalRightsDAM").value]; if (temp) obj["physicalRightsDAM"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["physicalRightsDAM"];
                temp = MktDomain.YesNo[document.getElementById (id + "_physicalRightsRTM").value]; if (temp) obj["physicalRightsRTM"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["physicalRightsRTM"];
                temp = document.getElementById (id + "_startupLeadTime").value; if ("" !== temp) obj["startupLeadTime"] = temp;
                temp = MktDomain.TRType[document.getElementById (id + "_TRType").value]; if (temp) obj["TRType"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#TRType." + temp; else delete obj["TRType"];
                temp = document.getElementById (id + "_SchedulingCoordinator").value; if ("" !== temp) obj["SchedulingCoordinator"] = temp;
                temp = document.getElementById (id + "_Ind_TransmissionRightChain").value; if ("" !== temp) obj["Ind_TransmissionRightChain"] = temp;
                temp = document.getElementById (id + "_Chain_TransmissionRightChain").value; if ("" !== temp) obj["Chain_TransmissionRightChain"] = temp;
                temp = document.getElementById (id + "_RTO").value; if ("" !== temp) obj["RTO"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["SchedulingCoordinator", "1", "0..*", "SchedulingCoordinator", "TransmissionContractRight"],
                            ["ContractDistributionFactor", "0..*", "0..1", "ContractDistributionFactor", "TransmissionContractRight"],
                            ["BidSelfSched", "0..*", "0..1", "BidSelfSched", "TransmissionContractRight"],
                            ["Ind_TransmissionRightChain", "0..1", "1..*", "TransmissionRightChain", "Ind_ContractRight"],
                            ["TREntitlement", "0..*", "1", "TREntitlement", "TransmissionContractRight"],
                            ["TransmissionInterfaceEntitlement", "0..*", "1", "TransmissionInterfaceRightEntitlement", "ContractRight"],
                            ["Chain_TransmissionRightChain", "0..1", "1", "TransmissionRightChain", "Chain_ContractRight"],
                            ["SubstitutionResourceList", "0..*", "0..1", "SubstitutionResourceList", "TransmissionContractRight"],
                            ["RTO", "1", "0..*", "RTO", "TransmissionContractRight"]
                        ]
                    )
                );
            }
        }

        /**
         * Subclass of ThermalGeneratingUnit from Production Package in IEC 61970.
         *
         */
        class MktThermalGeneratingUnit extends Production.ThermalGeneratingUnit
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MktThermalGeneratingUnit;
                if (null == bucket)
                   cim_data.MktThermalGeneratingUnit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MktThermalGeneratingUnit[obj.id];
            }

            parse (context, sub)
            {
                let obj = Production.ThermalGeneratingUnit.prototype.parse.call (this, context, sub);
                obj.cls = "MktThermalGeneratingUnit";
                base.parse_attributes (/<cim:MktThermalGeneratingUnit.CombinedCycleConfigurationMember\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CombinedCycleConfigurationMember", sub, context);
                let bucket = context.parsed.MktThermalGeneratingUnit;
                if (null == bucket)
                   context.parsed.MktThermalGeneratingUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Production.ThermalGeneratingUnit.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "MktThermalGeneratingUnit", "CombinedCycleConfigurationMember", "CombinedCycleConfigurationMember", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MktThermalGeneratingUnit_collapse" aria-expanded="true" aria-controls="MktThermalGeneratingUnit_collapse" style="margin-left: 10px;">MktThermalGeneratingUnit</a></legend>
                    <div id="MktThermalGeneratingUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Production.ThermalGeneratingUnit.prototype.template.call (this) +
                    `
                    {{#CombinedCycleConfigurationMember}}<div><b>CombinedCycleConfigurationMember</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CombinedCycleConfigurationMember}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["CombinedCycleConfigurationMember"]) obj["CombinedCycleConfigurationMember_string"] = obj["CombinedCycleConfigurationMember"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["CombinedCycleConfigurationMember_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MktThermalGeneratingUnit_collapse" aria-expanded="true" aria-controls="{{id}}_MktThermalGeneratingUnit_collapse" style="margin-left: 10px;">MktThermalGeneratingUnit</a></legend>
                    <div id="{{id}}_MktThermalGeneratingUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Production.ThermalGeneratingUnit.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "MktThermalGeneratingUnit" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CombinedCycleConfigurationMember", "0..*", "1", "CombinedCycleConfigurationMember", "MktThermalGeneratingUnit"]
                        ]
                    )
                );
            }
        }

        /**
         * Specifies certification for a resource to participate in a specific markets.
         *
         */
        class ResourceCertification extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ResourceCertification;
                if (null == bucket)
                   cim_data.ResourceCertification = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ResourceCertification[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ResourceCertification";
                base.parse_attribute (/<cim:ResourceCertification.market\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "market", sub, context);
                base.parse_attribute (/<cim:ResourceCertification.qualificationFlag\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "qualificationFlag", sub, context);
                base.parse_attribute (/<cim:ResourceCertification.type\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "type", sub, context);
                base.parse_attribute (/<cim:ResourceCertification.RegisteredResource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                let bucket = context.parsed.ResourceCertification;
                if (null == bucket)
                   context.parsed.ResourceCertification = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "ResourceCertification", "market", "market", fields);
                base.export_attribute (obj, "ResourceCertification", "qualificationFlag", "qualificationFlag", fields);
                base.export_attribute (obj, "ResourceCertification", "type", "type", fields);
                base.export_attribute (obj, "ResourceCertification", "RegisteredResource", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ResourceCertification_collapse" aria-expanded="true" aria-controls="ResourceCertification_collapse" style="margin-left: 10px;">ResourceCertification</a></legend>
                    <div id="ResourceCertification_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#market}}<div><b>market</b>: {{market}}</div>{{/market}}
                    {{#qualificationFlag}}<div><b>qualificationFlag</b>: {{qualificationFlag}}</div>{{/qualificationFlag}}
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RegisteredResource}}");}); return false;'>{{RegisteredResource}}</a></div>{{/RegisteredResource}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["marketMarketType"] = [{ id: '', selected: (!obj["market"])}]; for (let property in MktDomain.MarketType) obj["marketMarketType"].push ({ id: property, selected: obj["market"] && obj["market"].endsWith ('.' + property)});
                obj["qualificationFlagYesNo"] = [{ id: '', selected: (!obj["qualificationFlag"])}]; for (let property in MktDomain.YesNo) obj["qualificationFlagYesNo"].push ({ id: property, selected: obj["qualificationFlag"] && obj["qualificationFlag"].endsWith ('.' + property)});
                obj["typeResourceCertificationKind"] = [{ id: '', selected: (!obj["type"])}]; for (let property in MktDomain.ResourceCertificationKind) obj["typeResourceCertificationKind"].push ({ id: property, selected: obj["type"] && obj["type"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["marketMarketType"];
                delete obj["qualificationFlagYesNo"];
                delete obj["typeResourceCertificationKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ResourceCertification_collapse" aria-expanded="true" aria-controls="{{id}}_ResourceCertification_collapse" style="margin-left: 10px;">ResourceCertification</a></legend>
                    <div id="{{id}}_ResourceCertification_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_market'>market: </label><div class='col-sm-8'><select id='{{id}}_market' class='form-control custom-select'>{{#marketMarketType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/marketMarketType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_qualificationFlag'>qualificationFlag: </label><div class='col-sm-8'><select id='{{id}}_qualificationFlag' class='form-control custom-select'>{{#qualificationFlagYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/qualificationFlagYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><select id='{{id}}_type' class='form-control custom-select'>{{#typeResourceCertificationKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/typeResourceCertificationKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='{{id}}_RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ResourceCertification" };
                super.submit (id, obj);
                temp = MktDomain.MarketType[document.getElementById (id + "_market").value]; if (temp) obj["market"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#MarketType." + temp; else delete obj["market"];
                temp = MktDomain.YesNo[document.getElementById (id + "_qualificationFlag").value]; if (temp) obj["qualificationFlag"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["qualificationFlag"];
                temp = MktDomain.ResourceCertificationKind[document.getElementById (id + "_type").value]; if (temp) obj["type"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#ResourceCertificationKind." + temp; else delete obj["type"];
                temp = document.getElementById (id + "_RegisteredResource").value; if ("" !== temp) obj["RegisteredResource"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegisteredResource", "1", "0..*", "RegisteredResource", "ResourceAncillaryServiceQualification"]
                        ]
                    )
                );
            }
        }

        /**
         * Used to indicate former references to the same piece of equipment.
         *
         * The ID, name, and effectivity dates are utilized.
         *
         */
        class FormerReference extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.FormerReference;
                if (null == bucket)
                   cim_data.FormerReference = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.FormerReference[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "FormerReference";
                base.parse_attribute (/<cim:FormerReference.RegisteredResource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                let bucket = context.parsed.FormerReference;
                if (null == bucket)
                   context.parsed.FormerReference = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "FormerReference", "RegisteredResource", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#FormerReference_collapse" aria-expanded="true" aria-controls="FormerReference_collapse" style="margin-left: 10px;">FormerReference</a></legend>
                    <div id="FormerReference_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RegisteredResource}}");}); return false;'>{{RegisteredResource}}</a></div>{{/RegisteredResource}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_FormerReference_collapse" aria-expanded="true" aria-controls="{{id}}_FormerReference_collapse" style="margin-left: 10px;">FormerReference</a></legend>
                    <div id="{{id}}_FormerReference_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='{{id}}_RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "FormerReference" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_RegisteredResource").value; if ("" !== temp) obj["RegisteredResource"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegisteredResource", "1", "0..*", "RegisteredResource", "FormerReference"]
                        ]
                    )
                );
            }
        }

        /**
         * Model to support processing of reliability must run units.
         *
         */
        class RMRHeatRateCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.RMRHeatRateCurve;
                if (null == bucket)
                   cim_data.RMRHeatRateCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RMRHeatRateCurve[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "RMRHeatRateCurve";
                base.parse_attribute (/<cim:RMRHeatRateCurve.RegisteredGenerator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);
                let bucket = context.parsed.RMRHeatRateCurve;
                if (null == bucket)
                   context.parsed.RMRHeatRateCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "RMRHeatRateCurve", "RegisteredGenerator", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RMRHeatRateCurve_collapse" aria-expanded="true" aria-controls="RMRHeatRateCurve_collapse" style="margin-left: 10px;">RMRHeatRateCurve</a></legend>
                    <div id="RMRHeatRateCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RegisteredGenerator}}");}); return false;'>{{RegisteredGenerator}}</a></div>{{/RegisteredGenerator}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RMRHeatRateCurve_collapse" aria-expanded="true" aria-controls="{{id}}_RMRHeatRateCurve_collapse" style="margin-left: 10px;">RMRHeatRateCurve</a></legend>
                    <div id="{{id}}_RMRHeatRateCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredGenerator'>RegisteredGenerator: </label><div class='col-sm-8'><input id='{{id}}_RegisteredGenerator' class='form-control' type='text'{{#RegisteredGenerator}} value='{{RegisteredGenerator}}'{{/RegisteredGenerator}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "RMRHeatRateCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_RegisteredGenerator").value; if ("" !== temp) obj["RegisteredGenerator"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegisteredGenerator", "0..1", "0..1", "RegisteredGenerator", "RMRHeatRateCurve"]
                        ]
                    )
                );
            }
        }

        /**
         * Counter party in a wheeling transaction.
         *
         */
        class WheelingCounterParty extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.WheelingCounterParty;
                if (null == bucket)
                   cim_data.WheelingCounterParty = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WheelingCounterParty[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WheelingCounterParty";
                base.parse_attributes (/<cim:WheelingCounterParty.RegisteredInterTie\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredInterTie", sub, context);
                let bucket = context.parsed.WheelingCounterParty;
                if (null == bucket)
                   context.parsed.WheelingCounterParty = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "WheelingCounterParty", "RegisteredInterTie", "RegisteredInterTie", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#WheelingCounterParty_collapse" aria-expanded="true" aria-controls="WheelingCounterParty_collapse" style="margin-left: 10px;">WheelingCounterParty</a></legend>
                    <div id="WheelingCounterParty_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#RegisteredInterTie}}<div><b>RegisteredInterTie</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RegisteredInterTie}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["RegisteredInterTie"]) obj["RegisteredInterTie_string"] = obj["RegisteredInterTie"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["RegisteredInterTie_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_WheelingCounterParty_collapse" aria-expanded="true" aria-controls="{{id}}_WheelingCounterParty_collapse" style="margin-left: 10px;">WheelingCounterParty</a></legend>
                    <div id="{{id}}_WheelingCounterParty_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredInterTie'>RegisteredInterTie: </label><div class='col-sm-8'><input id='{{id}}_RegisteredInterTie' class='form-control' type='text'{{#RegisteredInterTie}} value='{{RegisteredInterTie_string}}'{{/RegisteredInterTie}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "WheelingCounterParty" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_RegisteredInterTie").value; if ("" !== temp) obj["RegisteredInterTie"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegisteredInterTie", "0..*", "0..*", "RegisteredInterTie", "WheelingCounterParty"]
                        ]
                    )
                );
            }
        }

        /**
         * The fuel consumption of a Generating Resource to complete a Start-Up.(x=cooling time) Form Startup Fuel Curve. xAxisData -&gt; cooling time, y1AxisData -&gt; MBtu.
         *
         */
        class StartUpFuelCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.StartUpFuelCurve;
                if (null == bucket)
                   cim_data.StartUpFuelCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.StartUpFuelCurve[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "StartUpFuelCurve";
                base.parse_attribute (/<cim:StartUpFuelCurve.RegisteredGenerator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);
                let bucket = context.parsed.StartUpFuelCurve;
                if (null == bucket)
                   context.parsed.StartUpFuelCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "StartUpFuelCurve", "RegisteredGenerator", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#StartUpFuelCurve_collapse" aria-expanded="true" aria-controls="StartUpFuelCurve_collapse" style="margin-left: 10px;">StartUpFuelCurve</a></legend>
                    <div id="StartUpFuelCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RegisteredGenerator}}");}); return false;'>{{RegisteredGenerator}}</a></div>{{/RegisteredGenerator}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_StartUpFuelCurve_collapse" aria-expanded="true" aria-controls="{{id}}_StartUpFuelCurve_collapse" style="margin-left: 10px;">StartUpFuelCurve</a></legend>
                    <div id="{{id}}_StartUpFuelCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredGenerator'>RegisteredGenerator: </label><div class='col-sm-8'><input id='{{id}}_RegisteredGenerator' class='form-control' type='text'{{#RegisteredGenerator}} value='{{RegisteredGenerator}}'{{/RegisteredGenerator}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "StartUpFuelCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_RegisteredGenerator").value; if ("" !== temp) obj["RegisteredGenerator"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegisteredGenerator", "0..1", "0..1", "RegisteredGenerator", "StartUpFuelCurve"]
                        ]
                    )
                );
            }
        }

        /**
         * Model of a load that is registered to participate in the market.
         *
         * RegisteredLoad is used to model any load that is served by the wholesale market directly. RegisteredLoads may be dispatchable or non-dispatchable and may or may not have bid curves. Examples of RegisteredLoads would include: distribution company load, energy retailer load, large bulk power system connected facility load.
         *
         * Loads that are served indirectly, for example - through an energy retailer or a vertical utility, should be modeled as RegisteredDistributedResources. Examples of RegisteredDistributedResources would include: distribution level storage, distribution level generation and distribution level demand response.
         *
         */
        class RegisteredLoad extends MarketCommon.RegisteredResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.RegisteredLoad;
                if (null == bucket)
                   cim_data.RegisteredLoad = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RegisteredLoad[obj.id];
            }

            parse (context, sub)
            {
                let obj = MarketCommon.RegisteredResource.prototype.parse.call (this, context, sub);
                obj.cls = "RegisteredLoad";
                base.parse_element (/<cim:RegisteredLoad.blockLoadTransfer>([\s\S]*?)<\/cim:RegisteredLoad.blockLoadTransfer>/g, obj, "blockLoadTransfer", base.to_boolean, sub, context);
                base.parse_element (/<cim:RegisteredLoad.dynamicallyScheduledLoadResource>([\s\S]*?)<\/cim:RegisteredLoad.dynamicallyScheduledLoadResource>/g, obj, "dynamicallyScheduledLoadResource", base.to_boolean, sub, context);
                base.parse_element (/<cim:RegisteredLoad.dynamicallyScheduledQualification>([\s\S]*?)<\/cim:RegisteredLoad.dynamicallyScheduledQualification>/g, obj, "dynamicallyScheduledQualification", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:RegisteredLoad.LoadBids\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LoadBids", sub, context);
                base.parse_attributes (/<cim:RegisteredLoad.AuxillaryObject\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AuxillaryObject", sub, context);
                let bucket = context.parsed.RegisteredLoad;
                if (null == bucket)
                   context.parsed.RegisteredLoad = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = MarketCommon.RegisteredResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "RegisteredLoad", "blockLoadTransfer", "blockLoadTransfer",  base.from_boolean, fields);
                base.export_element (obj, "RegisteredLoad", "dynamicallyScheduledLoadResource", "dynamicallyScheduledLoadResource",  base.from_boolean, fields);
                base.export_element (obj, "RegisteredLoad", "dynamicallyScheduledQualification", "dynamicallyScheduledQualification",  base.from_boolean, fields);
                base.export_attributes (obj, "RegisteredLoad", "LoadBids", "LoadBids", fields);
                base.export_attributes (obj, "RegisteredLoad", "AuxillaryObject", "AuxillaryObject", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RegisteredLoad_collapse" aria-expanded="true" aria-controls="RegisteredLoad_collapse" style="margin-left: 10px;">RegisteredLoad</a></legend>
                    <div id="RegisteredLoad_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + MarketCommon.RegisteredResource.prototype.template.call (this) +
                    `
                    {{#blockLoadTransfer}}<div><b>blockLoadTransfer</b>: {{blockLoadTransfer}}</div>{{/blockLoadTransfer}}
                    {{#dynamicallyScheduledLoadResource}}<div><b>dynamicallyScheduledLoadResource</b>: {{dynamicallyScheduledLoadResource}}</div>{{/dynamicallyScheduledLoadResource}}
                    {{#dynamicallyScheduledQualification}}<div><b>dynamicallyScheduledQualification</b>: {{dynamicallyScheduledQualification}}</div>{{/dynamicallyScheduledQualification}}
                    {{#LoadBids}}<div><b>LoadBids</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/LoadBids}}
                    {{#AuxillaryObject}}<div><b>AuxillaryObject</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AuxillaryObject}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["LoadBids"]) obj["LoadBids_string"] = obj["LoadBids"].join ();
                if (obj["AuxillaryObject"]) obj["AuxillaryObject_string"] = obj["AuxillaryObject"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["LoadBids_string"];
                delete obj["AuxillaryObject_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RegisteredLoad_collapse" aria-expanded="true" aria-controls="{{id}}_RegisteredLoad_collapse" style="margin-left: 10px;">RegisteredLoad</a></legend>
                    <div id="{{id}}_RegisteredLoad_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + MarketCommon.RegisteredResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_blockLoadTransfer'>blockLoadTransfer: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_blockLoadTransfer' class='form-check-input' type='checkbox'{{#blockLoadTransfer}} checked{{/blockLoadTransfer}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_dynamicallyScheduledLoadResource'>dynamicallyScheduledLoadResource: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_dynamicallyScheduledLoadResource' class='form-check-input' type='checkbox'{{#dynamicallyScheduledLoadResource}} checked{{/dynamicallyScheduledLoadResource}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_dynamicallyScheduledQualification'>dynamicallyScheduledQualification: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_dynamicallyScheduledQualification' class='form-check-input' type='checkbox'{{#dynamicallyScheduledQualification}} checked{{/dynamicallyScheduledQualification}}></div></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "RegisteredLoad" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_blockLoadTransfer").checked; if (temp) obj["blockLoadTransfer"] = true;
                temp = document.getElementById (id + "_dynamicallyScheduledLoadResource").checked; if (temp) obj["dynamicallyScheduledLoadResource"] = true;
                temp = document.getElementById (id + "_dynamicallyScheduledQualification").checked; if (temp) obj["dynamicallyScheduledQualification"] = true;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["LoadBids", "0..*", "0..1", "LoadBid", "RegisteredLoad"],
                            ["AuxillaryObject", "0..*", "0..1", "AuxiliaryObject", "RegisteredLoad"]
                        ]
                    )
                );
            }
        }

        /**
         * Indicates Control Area associated with self-schedule.
         *
         */
        class ControlAreaDesignation extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ControlAreaDesignation;
                if (null == bucket)
                   cim_data.ControlAreaDesignation = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ControlAreaDesignation[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ControlAreaDesignation";
                base.parse_attribute (/<cim:ControlAreaDesignation.attained\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "attained", sub, context);
                base.parse_attribute (/<cim:ControlAreaDesignation.native\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "native", sub, context);
                base.parse_attributes (/<cim:ControlAreaDesignation.RegisteredResource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                base.parse_attributes (/<cim:ControlAreaDesignation.SubControlArea\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SubControlArea", sub, context);
                let bucket = context.parsed.ControlAreaDesignation;
                if (null == bucket)
                   context.parsed.ControlAreaDesignation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "ControlAreaDesignation", "attained", "attained", fields);
                base.export_attribute (obj, "ControlAreaDesignation", "native", "native", fields);
                base.export_attributes (obj, "ControlAreaDesignation", "RegisteredResource", "RegisteredResource", fields);
                base.export_attributes (obj, "ControlAreaDesignation", "SubControlArea", "SubControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ControlAreaDesignation_collapse" aria-expanded="true" aria-controls="ControlAreaDesignation_collapse" style="margin-left: 10px;">ControlAreaDesignation</a></legend>
                    <div id="ControlAreaDesignation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#attained}}<div><b>attained</b>: {{attained}}</div>{{/attained}}
                    {{#native}}<div><b>native</b>: {{native}}</div>{{/native}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RegisteredResource}}
                    {{#SubControlArea}}<div><b>SubControlArea</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/SubControlArea}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["attainedYesNo"] = [{ id: '', selected: (!obj["attained"])}]; for (let property in MktDomain.YesNo) obj["attainedYesNo"].push ({ id: property, selected: obj["attained"] && obj["attained"].endsWith ('.' + property)});
                obj["nativeYesNo"] = [{ id: '', selected: (!obj["native"])}]; for (let property in MktDomain.YesNo) obj["nativeYesNo"].push ({ id: property, selected: obj["native"] && obj["native"].endsWith ('.' + property)});
                if (obj["RegisteredResource"]) obj["RegisteredResource_string"] = obj["RegisteredResource"].join ();
                if (obj["SubControlArea"]) obj["SubControlArea_string"] = obj["SubControlArea"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["attainedYesNo"];
                delete obj["nativeYesNo"];
                delete obj["RegisteredResource_string"];
                delete obj["SubControlArea_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ControlAreaDesignation_collapse" aria-expanded="true" aria-controls="{{id}}_ControlAreaDesignation_collapse" style="margin-left: 10px;">ControlAreaDesignation</a></legend>
                    <div id="{{id}}_ControlAreaDesignation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_attained'>attained: </label><div class='col-sm-8'><select id='{{id}}_attained' class='form-control custom-select'>{{#attainedYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/attainedYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_native'>native: </label><div class='col-sm-8'><select id='{{id}}_native' class='form-control custom-select'>{{#nativeYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/nativeYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='{{id}}_RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource_string}}'{{/RegisteredResource}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SubControlArea'>SubControlArea: </label><div class='col-sm-8'><input id='{{id}}_SubControlArea' class='form-control' type='text'{{#SubControlArea}} value='{{SubControlArea_string}}'{{/SubControlArea}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ControlAreaDesignation" };
                super.submit (id, obj);
                temp = MktDomain.YesNo[document.getElementById (id + "_attained").value]; if (temp) obj["attained"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["attained"];
                temp = MktDomain.YesNo[document.getElementById (id + "_native").value]; if (temp) obj["native"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["native"];
                temp = document.getElementById (id + "_RegisteredResource").value; if ("" !== temp) obj["RegisteredResource"] = temp.split (",");
                temp = document.getElementById (id + "_SubControlArea").value; if ("" !== temp) obj["SubControlArea"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegisteredResource", "0..*", "0..*", "RegisteredResource", "ControlAreaDesignation"],
                            ["SubControlArea", "0..*", "0..*", "SubControlArea", "ControlAreaDesignation"]
                        ]
                    )
                );
            }
        }

        /**
         * Provides a reference to the Market Power Mitigation test identifiers and methods for the results of the DA or RT markets.
         *
         * Specific data is the test identifier (Price, Conduct, or Impact) and the test method (System MPM, Local MPM, Alternate System MPM, or Alternate Local MPM).
         *
         */
        class MPMTestCategory extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MPMTestCategory;
                if (null == bucket)
                   cim_data.MPMTestCategory = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MPMTestCategory[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MPMTestCategory";
                base.parse_attribute (/<cim:MPMTestCategory.purposeFlag\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "purposeFlag", sub, context);
                base.parse_attribute (/<cim:MPMTestCategory.testIdentifier\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "testIdentifier", sub, context);
                base.parse_attribute (/<cim:MPMTestCategory.testMethod\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "testMethod", sub, context);
                base.parse_attributes (/<cim:MPMTestCategory.MPMTestThreshold\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MPMTestThreshold", sub, context);
                base.parse_attributes (/<cim:MPMTestCategory.MPMResourceStatus\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MPMResourceStatus", sub, context);
                base.parse_attributes (/<cim:MPMTestCategory.MPMTestResults\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MPMTestResults", sub, context);
                let bucket = context.parsed.MPMTestCategory;
                if (null == bucket)
                   context.parsed.MPMTestCategory = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MPMTestCategory", "purposeFlag", "purposeFlag", fields);
                base.export_attribute (obj, "MPMTestCategory", "testIdentifier", "testIdentifier", fields);
                base.export_attribute (obj, "MPMTestCategory", "testMethod", "testMethod", fields);
                base.export_attributes (obj, "MPMTestCategory", "MPMTestThreshold", "MPMTestThreshold", fields);
                base.export_attributes (obj, "MPMTestCategory", "MPMResourceStatus", "MPMResourceStatus", fields);
                base.export_attributes (obj, "MPMTestCategory", "MPMTestResults", "MPMTestResults", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MPMTestCategory_collapse" aria-expanded="true" aria-controls="MPMTestCategory_collapse" style="margin-left: 10px;">MPMTestCategory</a></legend>
                    <div id="MPMTestCategory_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#purposeFlag}}<div><b>purposeFlag</b>: {{purposeFlag}}</div>{{/purposeFlag}}
                    {{#testIdentifier}}<div><b>testIdentifier</b>: {{testIdentifier}}</div>{{/testIdentifier}}
                    {{#testMethod}}<div><b>testMethod</b>: {{testMethod}}</div>{{/testMethod}}
                    {{#MPMTestThreshold}}<div><b>MPMTestThreshold</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MPMTestThreshold}}
                    {{#MPMResourceStatus}}<div><b>MPMResourceStatus</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MPMResourceStatus}}
                    {{#MPMTestResults}}<div><b>MPMTestResults</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MPMTestResults}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["purposeFlagPurposeFlagType"] = [{ id: '', selected: (!obj["purposeFlag"])}]; for (let property in MktDomain.PurposeFlagType) obj["purposeFlagPurposeFlagType"].push ({ id: property, selected: obj["purposeFlag"] && obj["purposeFlag"].endsWith ('.' + property)});
                obj["testIdentifierMPMTestIdentifierType"] = [{ id: '', selected: (!obj["testIdentifier"])}]; for (let property in MktDomain.MPMTestIdentifierType) obj["testIdentifierMPMTestIdentifierType"].push ({ id: property, selected: obj["testIdentifier"] && obj["testIdentifier"].endsWith ('.' + property)});
                obj["testMethodMPMTestMethodType"] = [{ id: '', selected: (!obj["testMethod"])}]; for (let property in MktDomain.MPMTestMethodType) obj["testMethodMPMTestMethodType"].push ({ id: property, selected: obj["testMethod"] && obj["testMethod"].endsWith ('.' + property)});
                if (obj["MPMTestThreshold"]) obj["MPMTestThreshold_string"] = obj["MPMTestThreshold"].join ();
                if (obj["MPMResourceStatus"]) obj["MPMResourceStatus_string"] = obj["MPMResourceStatus"].join ();
                if (obj["MPMTestResults"]) obj["MPMTestResults_string"] = obj["MPMTestResults"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["purposeFlagPurposeFlagType"];
                delete obj["testIdentifierMPMTestIdentifierType"];
                delete obj["testMethodMPMTestMethodType"];
                delete obj["MPMTestThreshold_string"];
                delete obj["MPMResourceStatus_string"];
                delete obj["MPMTestResults_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MPMTestCategory_collapse" aria-expanded="true" aria-controls="{{id}}_MPMTestCategory_collapse" style="margin-left: 10px;">MPMTestCategory</a></legend>
                    <div id="{{id}}_MPMTestCategory_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_purposeFlag'>purposeFlag: </label><div class='col-sm-8'><select id='{{id}}_purposeFlag' class='form-control custom-select'>{{#purposeFlagPurposeFlagType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/purposeFlagPurposeFlagType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_testIdentifier'>testIdentifier: </label><div class='col-sm-8'><select id='{{id}}_testIdentifier' class='form-control custom-select'>{{#testIdentifierMPMTestIdentifierType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/testIdentifierMPMTestIdentifierType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_testMethod'>testMethod: </label><div class='col-sm-8'><select id='{{id}}_testMethod' class='form-control custom-select'>{{#testMethodMPMTestMethodType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/testMethodMPMTestMethodType}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MPMTestCategory" };
                super.submit (id, obj);
                temp = MktDomain.PurposeFlagType[document.getElementById (id + "_purposeFlag").value]; if (temp) obj["purposeFlag"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#PurposeFlagType." + temp; else delete obj["purposeFlag"];
                temp = MktDomain.MPMTestIdentifierType[document.getElementById (id + "_testIdentifier").value]; if (temp) obj["testIdentifier"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#MPMTestIdentifierType." + temp; else delete obj["testIdentifier"];
                temp = MktDomain.MPMTestMethodType[document.getElementById (id + "_testMethod").value]; if (temp) obj["testMethod"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#MPMTestMethodType." + temp; else delete obj["testMethod"];

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MPMTestThreshold", "0..*", "1", "MPMTestThreshold", "MPMTestCategory"],
                            ["MPMResourceStatus", "0..*", "1", "MPMResourceStatus", "MPMTestCategory"],
                            ["MPMTestResults", "0..*", "1", "MPMTestResults", "MPMTestCategory"]
                        ]
                    )
                );
            }
        }

        /**
         * Market participants could be represented by Scheduling Coordinators (SCs) that are registered with the RTO/ISO.
         *
         * One participant could register multiple SCs with the RTO/ISO. Many market participants can do business with the RTO/ISO using a single SC. One SC could schedule multiple generators. A load scheduling point could be used by multiple SCs. Each SC could schedule load at multiple scheduling points. An inter-tie scheduling point can be used by multiple SCs. Each SC can schedule interchange at multiple inter-tie scheduling points.
         *
         */
        class SchedulingCoordinator extends MarketCommon.MarketParticipant
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SchedulingCoordinator;
                if (null == bucket)
                   cim_data.SchedulingCoordinator = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SchedulingCoordinator[obj.id];
            }

            parse (context, sub)
            {
                let obj = MarketCommon.MarketParticipant.prototype.parse.call (this, context, sub);
                obj.cls = "SchedulingCoordinator";
                base.parse_attribute (/<cim:SchedulingCoordinator.creditFlag\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "creditFlag", sub, context);
                base.parse_element (/<cim:SchedulingCoordinator.creditStartEffectiveDate>([\s\S]*?)<\/cim:SchedulingCoordinator.creditStartEffectiveDate>/g, obj, "creditStartEffectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:SchedulingCoordinator.lastModified>([\s\S]*?)<\/cim:SchedulingCoordinator.lastModified>/g, obj, "lastModified", base.to_datetime, sub, context);
                base.parse_element (/<cim:SchedulingCoordinator.qualificationStatus>([\s\S]*?)<\/cim:SchedulingCoordinator.qualificationStatus>/g, obj, "qualificationStatus", base.to_string, sub, context);
                base.parse_element (/<cim:SchedulingCoordinator.scid>([\s\S]*?)<\/cim:SchedulingCoordinator.scid>/g, obj, "scid", base.to_string, sub, context);
                base.parse_attribute (/<cim:SchedulingCoordinator.MarketParticipant\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketParticipant", sub, context);
                base.parse_attributes (/<cim:SchedulingCoordinator.TransmissionContractRight\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionContractRight", sub, context);
                base.parse_attributes (/<cim:SchedulingCoordinator.SubmitFromSCTrade\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SubmitFromSCTrade", sub, context);
                base.parse_attributes (/<cim:SchedulingCoordinator.ToSCTrade\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ToSCTrade", sub, context);
                base.parse_attribute (/<cim:SchedulingCoordinator.LoadRatio\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LoadRatio", sub, context);
                base.parse_attributes (/<cim:SchedulingCoordinator.FromSCTrade\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FromSCTrade", sub, context);
                base.parse_attributes (/<cim:SchedulingCoordinator.SubmitToSCTrade\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SubmitToSCTrade", sub, context);
                let bucket = context.parsed.SchedulingCoordinator;
                if (null == bucket)
                   context.parsed.SchedulingCoordinator = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = MarketCommon.MarketParticipant.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "SchedulingCoordinator", "creditFlag", "creditFlag", fields);
                base.export_element (obj, "SchedulingCoordinator", "creditStartEffectiveDate", "creditStartEffectiveDate",  base.from_datetime, fields);
                base.export_element (obj, "SchedulingCoordinator", "lastModified", "lastModified",  base.from_datetime, fields);
                base.export_element (obj, "SchedulingCoordinator", "qualificationStatus", "qualificationStatus",  base.from_string, fields);
                base.export_element (obj, "SchedulingCoordinator", "scid", "scid",  base.from_string, fields);
                base.export_attribute (obj, "SchedulingCoordinator", "MarketParticipant", "MarketParticipant", fields);
                base.export_attributes (obj, "SchedulingCoordinator", "TransmissionContractRight", "TransmissionContractRight", fields);
                base.export_attributes (obj, "SchedulingCoordinator", "SubmitFromSCTrade", "SubmitFromSCTrade", fields);
                base.export_attributes (obj, "SchedulingCoordinator", "ToSCTrade", "ToSCTrade", fields);
                base.export_attribute (obj, "SchedulingCoordinator", "LoadRatio", "LoadRatio", fields);
                base.export_attributes (obj, "SchedulingCoordinator", "FromSCTrade", "FromSCTrade", fields);
                base.export_attributes (obj, "SchedulingCoordinator", "SubmitToSCTrade", "SubmitToSCTrade", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SchedulingCoordinator_collapse" aria-expanded="true" aria-controls="SchedulingCoordinator_collapse" style="margin-left: 10px;">SchedulingCoordinator</a></legend>
                    <div id="SchedulingCoordinator_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + MarketCommon.MarketParticipant.prototype.template.call (this) +
                    `
                    {{#creditFlag}}<div><b>creditFlag</b>: {{creditFlag}}</div>{{/creditFlag}}
                    {{#creditStartEffectiveDate}}<div><b>creditStartEffectiveDate</b>: {{creditStartEffectiveDate}}</div>{{/creditStartEffectiveDate}}
                    {{#lastModified}}<div><b>lastModified</b>: {{lastModified}}</div>{{/lastModified}}
                    {{#qualificationStatus}}<div><b>qualificationStatus</b>: {{qualificationStatus}}</div>{{/qualificationStatus}}
                    {{#scid}}<div><b>scid</b>: {{scid}}</div>{{/scid}}
                    {{#MarketParticipant}}<div><b>MarketParticipant</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{MarketParticipant}}");}); return false;'>{{MarketParticipant}}</a></div>{{/MarketParticipant}}
                    {{#TransmissionContractRight}}<div><b>TransmissionContractRight</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TransmissionContractRight}}
                    {{#SubmitFromSCTrade}}<div><b>SubmitFromSCTrade</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/SubmitFromSCTrade}}
                    {{#ToSCTrade}}<div><b>ToSCTrade</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ToSCTrade}}
                    {{#LoadRatio}}<div><b>LoadRatio</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{LoadRatio}}");}); return false;'>{{LoadRatio}}</a></div>{{/LoadRatio}}
                    {{#FromSCTrade}}<div><b>FromSCTrade</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/FromSCTrade}}
                    {{#SubmitToSCTrade}}<div><b>SubmitToSCTrade</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/SubmitToSCTrade}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["creditFlagYesNo"] = [{ id: '', selected: (!obj["creditFlag"])}]; for (let property in MktDomain.YesNo) obj["creditFlagYesNo"].push ({ id: property, selected: obj["creditFlag"] && obj["creditFlag"].endsWith ('.' + property)});
                if (obj["TransmissionContractRight"]) obj["TransmissionContractRight_string"] = obj["TransmissionContractRight"].join ();
                if (obj["SubmitFromSCTrade"]) obj["SubmitFromSCTrade_string"] = obj["SubmitFromSCTrade"].join ();
                if (obj["ToSCTrade"]) obj["ToSCTrade_string"] = obj["ToSCTrade"].join ();
                if (obj["FromSCTrade"]) obj["FromSCTrade_string"] = obj["FromSCTrade"].join ();
                if (obj["SubmitToSCTrade"]) obj["SubmitToSCTrade_string"] = obj["SubmitToSCTrade"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["creditFlagYesNo"];
                delete obj["TransmissionContractRight_string"];
                delete obj["SubmitFromSCTrade_string"];
                delete obj["ToSCTrade_string"];
                delete obj["FromSCTrade_string"];
                delete obj["SubmitToSCTrade_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SchedulingCoordinator_collapse" aria-expanded="true" aria-controls="{{id}}_SchedulingCoordinator_collapse" style="margin-left: 10px;">SchedulingCoordinator</a></legend>
                    <div id="{{id}}_SchedulingCoordinator_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + MarketCommon.MarketParticipant.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_creditFlag'>creditFlag: </label><div class='col-sm-8'><select id='{{id}}_creditFlag' class='form-control custom-select'>{{#creditFlagYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/creditFlagYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_creditStartEffectiveDate'>creditStartEffectiveDate: </label><div class='col-sm-8'><input id='{{id}}_creditStartEffectiveDate' class='form-control' type='text'{{#creditStartEffectiveDate}} value='{{creditStartEffectiveDate}}'{{/creditStartEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lastModified'>lastModified: </label><div class='col-sm-8'><input id='{{id}}_lastModified' class='form-control' type='text'{{#lastModified}} value='{{lastModified}}'{{/lastModified}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_qualificationStatus'>qualificationStatus: </label><div class='col-sm-8'><input id='{{id}}_qualificationStatus' class='form-control' type='text'{{#qualificationStatus}} value='{{qualificationStatus}}'{{/qualificationStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_scid'>scid: </label><div class='col-sm-8'><input id='{{id}}_scid' class='form-control' type='text'{{#scid}} value='{{scid}}'{{/scid}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketParticipant'>MarketParticipant: </label><div class='col-sm-8'><input id='{{id}}_MarketParticipant' class='form-control' type='text'{{#MarketParticipant}} value='{{MarketParticipant}}'{{/MarketParticipant}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LoadRatio'>LoadRatio: </label><div class='col-sm-8'><input id='{{id}}_LoadRatio' class='form-control' type='text'{{#LoadRatio}} value='{{LoadRatio}}'{{/LoadRatio}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SchedulingCoordinator" };
                super.submit (id, obj);
                temp = MktDomain.YesNo[document.getElementById (id + "_creditFlag").value]; if (temp) obj["creditFlag"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["creditFlag"];
                temp = document.getElementById (id + "_creditStartEffectiveDate").value; if ("" !== temp) obj["creditStartEffectiveDate"] = temp;
                temp = document.getElementById (id + "_lastModified").value; if ("" !== temp) obj["lastModified"] = temp;
                temp = document.getElementById (id + "_qualificationStatus").value; if ("" !== temp) obj["qualificationStatus"] = temp;
                temp = document.getElementById (id + "_scid").value; if ("" !== temp) obj["scid"] = temp;
                temp = document.getElementById (id + "_MarketParticipant").value; if ("" !== temp) obj["MarketParticipant"] = temp;
                temp = document.getElementById (id + "_LoadRatio").value; if ("" !== temp) obj["LoadRatio"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MarketParticipant", "0..1", "0..*", "MarketParticipant", "SchedulingCoordinator"],
                            ["TransmissionContractRight", "0..*", "1", "ContractRight", "SchedulingCoordinator"],
                            ["SubmitFromSCTrade", "0..*", "0..1", "Trade", "submitFromSchedulingCoordinator"],
                            ["ToSCTrade", "0..*", "1", "Trade", "To_SC"],
                            ["LoadRatio", "1", "0..1", "LoadRatio", "SchedulingCoordinator"],
                            ["FromSCTrade", "0..*", "1", "Trade", "From_SC"],
                            ["SubmitToSCTrade", "0..*", "0..1", "Trade", "submitToSchedulingCoordinator"]
                        ]
                    )
                );
            }
        }

        /**
         * Day Ahead,  Network Native Load, Economic Dispatch, values used for calculation of Network Native Load (NNL) Determinator process.
         *
         */
        class FlowgateValue extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.FlowgateValue;
                if (null == bucket)
                   cim_data.FlowgateValue = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.FlowgateValue[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "FlowgateValue";
                base.parse_element (/<cim:FlowgateValue.economicDispatchLimit>([\s\S]*?)<\/cim:FlowgateValue.economicDispatchLimit>/g, obj, "economicDispatchLimit", base.to_string, sub, context);
                base.parse_element (/<cim:FlowgateValue.effectiveDate>([\s\S]*?)<\/cim:FlowgateValue.effectiveDate>/g, obj, "effectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:FlowgateValue.firmNetworkLimit>([\s\S]*?)<\/cim:FlowgateValue.firmNetworkLimit>/g, obj, "firmNetworkLimit", base.to_string, sub, context);
                base.parse_attribute (/<cim:FlowgateValue.flowDirectionFlag\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "flowDirectionFlag", sub, context);
                base.parse_element (/<cim:FlowgateValue.mktFlow>([\s\S]*?)<\/cim:FlowgateValue.mktFlow>/g, obj, "mktFlow", base.to_string, sub, context);
                base.parse_element (/<cim:FlowgateValue.netFirmNetworkLimit>([\s\S]*?)<\/cim:FlowgateValue.netFirmNetworkLimit>/g, obj, "netFirmNetworkLimit", base.to_string, sub, context);
                base.parse_attribute (/<cim:FlowgateValue.FlowgatePartner\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FlowgatePartner", sub, context);
                base.parse_attribute (/<cim:FlowgateValue.Flowgate\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
                let bucket = context.parsed.FlowgateValue;
                if (null == bucket)
                   context.parsed.FlowgateValue = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "FlowgateValue", "economicDispatchLimit", "economicDispatchLimit",  base.from_string, fields);
                base.export_element (obj, "FlowgateValue", "effectiveDate", "effectiveDate",  base.from_datetime, fields);
                base.export_element (obj, "FlowgateValue", "firmNetworkLimit", "firmNetworkLimit",  base.from_string, fields);
                base.export_attribute (obj, "FlowgateValue", "flowDirectionFlag", "flowDirectionFlag", fields);
                base.export_element (obj, "FlowgateValue", "mktFlow", "mktFlow",  base.from_string, fields);
                base.export_element (obj, "FlowgateValue", "netFirmNetworkLimit", "netFirmNetworkLimit",  base.from_string, fields);
                base.export_attribute (obj, "FlowgateValue", "FlowgatePartner", "FlowgatePartner", fields);
                base.export_attribute (obj, "FlowgateValue", "Flowgate", "Flowgate", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#FlowgateValue_collapse" aria-expanded="true" aria-controls="FlowgateValue_collapse" style="margin-left: 10px;">FlowgateValue</a></legend>
                    <div id="FlowgateValue_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#economicDispatchLimit}}<div><b>economicDispatchLimit</b>: {{economicDispatchLimit}}</div>{{/economicDispatchLimit}}
                    {{#effectiveDate}}<div><b>effectiveDate</b>: {{effectiveDate}}</div>{{/effectiveDate}}
                    {{#firmNetworkLimit}}<div><b>firmNetworkLimit</b>: {{firmNetworkLimit}}</div>{{/firmNetworkLimit}}
                    {{#flowDirectionFlag}}<div><b>flowDirectionFlag</b>: {{flowDirectionFlag}}</div>{{/flowDirectionFlag}}
                    {{#mktFlow}}<div><b>mktFlow</b>: {{mktFlow}}</div>{{/mktFlow}}
                    {{#netFirmNetworkLimit}}<div><b>netFirmNetworkLimit</b>: {{netFirmNetworkLimit}}</div>{{/netFirmNetworkLimit}}
                    {{#FlowgatePartner}}<div><b>FlowgatePartner</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{FlowgatePartner}}");}); return false;'>{{FlowgatePartner}}</a></div>{{/FlowgatePartner}}
                    {{#Flowgate}}<div><b>Flowgate</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Flowgate}}");}); return false;'>{{Flowgate}}</a></div>{{/Flowgate}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["flowDirectionFlagFlowDirectionType"] = [{ id: '', selected: (!obj["flowDirectionFlag"])}]; for (let property in MktDomain.FlowDirectionType) obj["flowDirectionFlagFlowDirectionType"].push ({ id: property, selected: obj["flowDirectionFlag"] && obj["flowDirectionFlag"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["flowDirectionFlagFlowDirectionType"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_FlowgateValue_collapse" aria-expanded="true" aria-controls="{{id}}_FlowgateValue_collapse" style="margin-left: 10px;">FlowgateValue</a></legend>
                    <div id="{{id}}_FlowgateValue_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_economicDispatchLimit'>economicDispatchLimit: </label><div class='col-sm-8'><input id='{{id}}_economicDispatchLimit' class='form-control' type='text'{{#economicDispatchLimit}} value='{{economicDispatchLimit}}'{{/economicDispatchLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_effectiveDate'>effectiveDate: </label><div class='col-sm-8'><input id='{{id}}_effectiveDate' class='form-control' type='text'{{#effectiveDate}} value='{{effectiveDate}}'{{/effectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_firmNetworkLimit'>firmNetworkLimit: </label><div class='col-sm-8'><input id='{{id}}_firmNetworkLimit' class='form-control' type='text'{{#firmNetworkLimit}} value='{{firmNetworkLimit}}'{{/firmNetworkLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_flowDirectionFlag'>flowDirectionFlag: </label><div class='col-sm-8'><select id='{{id}}_flowDirectionFlag' class='form-control custom-select'>{{#flowDirectionFlagFlowDirectionType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/flowDirectionFlagFlowDirectionType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mktFlow'>mktFlow: </label><div class='col-sm-8'><input id='{{id}}_mktFlow' class='form-control' type='text'{{#mktFlow}} value='{{mktFlow}}'{{/mktFlow}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_netFirmNetworkLimit'>netFirmNetworkLimit: </label><div class='col-sm-8'><input id='{{id}}_netFirmNetworkLimit' class='form-control' type='text'{{#netFirmNetworkLimit}} value='{{netFirmNetworkLimit}}'{{/netFirmNetworkLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_FlowgatePartner'>FlowgatePartner: </label><div class='col-sm-8'><input id='{{id}}_FlowgatePartner' class='form-control' type='text'{{#FlowgatePartner}} value='{{FlowgatePartner}}'{{/FlowgatePartner}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Flowgate'>Flowgate: </label><div class='col-sm-8'><input id='{{id}}_Flowgate' class='form-control' type='text'{{#Flowgate}} value='{{Flowgate}}'{{/Flowgate}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "FlowgateValue" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_economicDispatchLimit").value; if ("" !== temp) obj["economicDispatchLimit"] = temp;
                temp = document.getElementById (id + "_effectiveDate").value; if ("" !== temp) obj["effectiveDate"] = temp;
                temp = document.getElementById (id + "_firmNetworkLimit").value; if ("" !== temp) obj["firmNetworkLimit"] = temp;
                temp = MktDomain.FlowDirectionType[document.getElementById (id + "_flowDirectionFlag").value]; if (temp) obj["flowDirectionFlag"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#FlowDirectionType." + temp; else delete obj["flowDirectionFlag"];
                temp = document.getElementById (id + "_mktFlow").value; if ("" !== temp) obj["mktFlow"] = temp;
                temp = document.getElementById (id + "_netFirmNetworkLimit").value; if ("" !== temp) obj["netFirmNetworkLimit"] = temp;
                temp = document.getElementById (id + "_FlowgatePartner").value; if ("" !== temp) obj["FlowgatePartner"] = temp;
                temp = document.getElementById (id + "_Flowgate").value; if ("" !== temp) obj["Flowgate"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["FlowgatePartner", "0..1", "0..1", "FlowgatePartner", "FlowgateValue"],
                            ["Flowgate", "1", "0..*", "Flowgate", "FlowgateValue"]
                        ]
                    )
                );
            }
        }

        /**
         * An aggregated node can define a typed grouping further defined by the AnodeType enumeratuion.
         *
         * Types range from System Zone/Regions to Market Energy Regions to Aggregated Loads and Aggregated Generators.
         *
         */
        class AggregateNode extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AggregateNode;
                if (null == bucket)
                   cim_data.AggregateNode = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AggregateNode[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "AggregateNode";
                base.parse_attribute (/<cim:AggregateNode.anodeType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "anodeType", sub, context);
                base.parse_element (/<cim:AggregateNode.qualifASOrder>([\s\S]*?)<\/cim:AggregateNode.qualifASOrder>/g, obj, "qualifASOrder", base.to_string, sub, context);
                base.parse_attributes (/<cim:AggregateNode.Instruction\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Instruction", sub, context);
                base.parse_attributes (/<cim:AggregateNode.AreaLoadCurve\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AreaLoadCurve", sub, context);
                base.parse_attributes (/<cim:AggregateNode.RegisteredResource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                base.parse_attribute (/<cim:AggregateNode.RTO\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);
                base.parse_attributes (/<cim:AggregateNode.Pnode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Pnode", sub, context);
                base.parse_attributes (/<cim:AggregateNode.CnodeDistributionFactor\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CnodeDistributionFactor", sub, context);
                base.parse_attributes (/<cim:AggregateNode.SubControlArea\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SubControlArea", sub, context);
                let bucket = context.parsed.AggregateNode;
                if (null == bucket)
                   context.parsed.AggregateNode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "AggregateNode", "anodeType", "anodeType", fields);
                base.export_element (obj, "AggregateNode", "qualifASOrder", "qualifASOrder",  base.from_string, fields);
                base.export_attributes (obj, "AggregateNode", "Instruction", "Instruction", fields);
                base.export_attributes (obj, "AggregateNode", "AreaLoadCurve", "AreaLoadCurve", fields);
                base.export_attributes (obj, "AggregateNode", "RegisteredResource", "RegisteredResource", fields);
                base.export_attribute (obj, "AggregateNode", "RTO", "RTO", fields);
                base.export_attributes (obj, "AggregateNode", "Pnode", "Pnode", fields);
                base.export_attributes (obj, "AggregateNode", "CnodeDistributionFactor", "CnodeDistributionFactor", fields);
                base.export_attributes (obj, "AggregateNode", "SubControlArea", "SubControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AggregateNode_collapse" aria-expanded="true" aria-controls="AggregateNode_collapse" style="margin-left: 10px;">AggregateNode</a></legend>
                    <div id="AggregateNode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#anodeType}}<div><b>anodeType</b>: {{anodeType}}</div>{{/anodeType}}
                    {{#qualifASOrder}}<div><b>qualifASOrder</b>: {{qualifASOrder}}</div>{{/qualifASOrder}}
                    {{#Instruction}}<div><b>Instruction</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Instruction}}
                    {{#AreaLoadCurve}}<div><b>AreaLoadCurve</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AreaLoadCurve}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RegisteredResource}}
                    {{#RTO}}<div><b>RTO</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RTO}}");}); return false;'>{{RTO}}</a></div>{{/RTO}}
                    {{#Pnode}}<div><b>Pnode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Pnode}}
                    {{#CnodeDistributionFactor}}<div><b>CnodeDistributionFactor</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CnodeDistributionFactor}}
                    {{#SubControlArea}}<div><b>SubControlArea</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/SubControlArea}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["anodeTypeAnodeType"] = [{ id: '', selected: (!obj["anodeType"])}]; for (let property in MktDomain.AnodeType) obj["anodeTypeAnodeType"].push ({ id: property, selected: obj["anodeType"] && obj["anodeType"].endsWith ('.' + property)});
                if (obj["Instruction"]) obj["Instruction_string"] = obj["Instruction"].join ();
                if (obj["AreaLoadCurve"]) obj["AreaLoadCurve_string"] = obj["AreaLoadCurve"].join ();
                if (obj["RegisteredResource"]) obj["RegisteredResource_string"] = obj["RegisteredResource"].join ();
                if (obj["Pnode"]) obj["Pnode_string"] = obj["Pnode"].join ();
                if (obj["CnodeDistributionFactor"]) obj["CnodeDistributionFactor_string"] = obj["CnodeDistributionFactor"].join ();
                if (obj["SubControlArea"]) obj["SubControlArea_string"] = obj["SubControlArea"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["anodeTypeAnodeType"];
                delete obj["Instruction_string"];
                delete obj["AreaLoadCurve_string"];
                delete obj["RegisteredResource_string"];
                delete obj["Pnode_string"];
                delete obj["CnodeDistributionFactor_string"];
                delete obj["SubControlArea_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AggregateNode_collapse" aria-expanded="true" aria-controls="{{id}}_AggregateNode_collapse" style="margin-left: 10px;">AggregateNode</a></legend>
                    <div id="{{id}}_AggregateNode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_anodeType'>anodeType: </label><div class='col-sm-8'><select id='{{id}}_anodeType' class='form-control custom-select'>{{#anodeTypeAnodeType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/anodeTypeAnodeType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_qualifASOrder'>qualifASOrder: </label><div class='col-sm-8'><input id='{{id}}_qualifASOrder' class='form-control' type='text'{{#qualifASOrder}} value='{{qualifASOrder}}'{{/qualifASOrder}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RTO'>RTO: </label><div class='col-sm-8'><input id='{{id}}_RTO' class='form-control' type='text'{{#RTO}} value='{{RTO}}'{{/RTO}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Pnode'>Pnode: </label><div class='col-sm-8'><input id='{{id}}_Pnode' class='form-control' type='text'{{#Pnode}} value='{{Pnode_string}}'{{/Pnode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SubControlArea'>SubControlArea: </label><div class='col-sm-8'><input id='{{id}}_SubControlArea' class='form-control' type='text'{{#SubControlArea}} value='{{SubControlArea_string}}'{{/SubControlArea}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AggregateNode" };
                super.submit (id, obj);
                temp = MktDomain.AnodeType[document.getElementById (id + "_anodeType").value]; if (temp) obj["anodeType"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#AnodeType." + temp; else delete obj["anodeType"];
                temp = document.getElementById (id + "_qualifASOrder").value; if ("" !== temp) obj["qualifASOrder"] = temp;
                temp = document.getElementById (id + "_RTO").value; if ("" !== temp) obj["RTO"] = temp;
                temp = document.getElementById (id + "_Pnode").value; if ("" !== temp) obj["Pnode"] = temp.split (",");
                temp = document.getElementById (id + "_SubControlArea").value; if ("" !== temp) obj["SubControlArea"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Instruction", "0..*", "0..1", "Instructions", "AggregateNode"],
                            ["AreaLoadCurve", "0..*", "0..1", "AreaLoadCurve", "AggregateNode"],
                            ["RegisteredResource", "0..*", "0..1", "RegisteredResource", "AggregateNode"],
                            ["RTO", "1", "0..*", "RTO", "AggregateNode"],
                            ["Pnode", "0..*", "0..*", "Pnode", "AggregateNode"],
                            ["CnodeDistributionFactor", "0..*", "0..1", "CnodeDistributionFactor", "AggregateNode"],
                            ["SubControlArea", "0..*", "0..*", "SubControlArea", "AggregateNode"]
                        ]
                    )
                );
            }
        }

        /**
         * Describing users of a Scheduling Coordinator.
         *
         */
        class SchedulingCoordinatorUser extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SchedulingCoordinatorUser;
                if (null == bucket)
                   cim_data.SchedulingCoordinatorUser = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SchedulingCoordinatorUser[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SchedulingCoordinatorUser";
                base.parse_element (/<cim:SchedulingCoordinatorUser.loginID>([\s\S]*?)<\/cim:SchedulingCoordinatorUser.loginID>/g, obj, "loginID", base.to_string, sub, context);
                base.parse_element (/<cim:SchedulingCoordinatorUser.loginRole>([\s\S]*?)<\/cim:SchedulingCoordinatorUser.loginRole>/g, obj, "loginRole", base.to_string, sub, context);
                let bucket = context.parsed.SchedulingCoordinatorUser;
                if (null == bucket)
                   context.parsed.SchedulingCoordinatorUser = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "SchedulingCoordinatorUser", "loginID", "loginID",  base.from_string, fields);
                base.export_element (obj, "SchedulingCoordinatorUser", "loginRole", "loginRole",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SchedulingCoordinatorUser_collapse" aria-expanded="true" aria-controls="SchedulingCoordinatorUser_collapse" style="margin-left: 10px;">SchedulingCoordinatorUser</a></legend>
                    <div id="SchedulingCoordinatorUser_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#loginID}}<div><b>loginID</b>: {{loginID}}</div>{{/loginID}}
                    {{#loginRole}}<div><b>loginRole</b>: {{loginRole}}</div>{{/loginRole}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SchedulingCoordinatorUser_collapse" aria-expanded="true" aria-controls="{{id}}_SchedulingCoordinatorUser_collapse" style="margin-left: 10px;">SchedulingCoordinatorUser</a></legend>
                    <div id="{{id}}_SchedulingCoordinatorUser_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_loginID'>loginID: </label><div class='col-sm-8'><input id='{{id}}_loginID' class='form-control' type='text'{{#loginID}} value='{{loginID}}'{{/loginID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_loginRole'>loginRole: </label><div class='col-sm-8'><input id='{{id}}_loginRole' class='form-control' type='text'{{#loginRole}} value='{{loginRole}}'{{/loginRole}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SchedulingCoordinatorUser" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_loginID").value; if ("" !== temp) obj["loginID"] = temp;
                temp = document.getElementById (id + "_loginRole").value; if ("" !== temp) obj["loginRole"] = temp;

                return (obj);
            }
        }

        /**
         * To model the Operation and Maintenance (O and M) costs of a generation resource.
         *
         */
        class ResourceOperationMaintenanceCost extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ResourceOperationMaintenanceCost;
                if (null == bucket)
                   cim_data.ResourceOperationMaintenanceCost = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ResourceOperationMaintenanceCost[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "ResourceOperationMaintenanceCost";
                base.parse_element (/<cim:ResourceOperationMaintenanceCost.gasPercentAboveLowSustainedLimit>([\s\S]*?)<\/cim:ResourceOperationMaintenanceCost.gasPercentAboveLowSustainedLimit>/g, obj, "gasPercentAboveLowSustainedLimit", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceOperationMaintenanceCost.oilPercentAboveLowSustainedLimit>([\s\S]*?)<\/cim:ResourceOperationMaintenanceCost.oilPercentAboveLowSustainedLimit>/g, obj, "oilPercentAboveLowSustainedLimit", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceOperationMaintenanceCost.omCostColdStartup>([\s\S]*?)<\/cim:ResourceOperationMaintenanceCost.omCostColdStartup>/g, obj, "omCostColdStartup", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceOperationMaintenanceCost.omCostHotStartup>([\s\S]*?)<\/cim:ResourceOperationMaintenanceCost.omCostHotStartup>/g, obj, "omCostHotStartup", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceOperationMaintenanceCost.omCostIntermediateStartup>([\s\S]*?)<\/cim:ResourceOperationMaintenanceCost.omCostIntermediateStartup>/g, obj, "omCostIntermediateStartup", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceOperationMaintenanceCost.omCostLowSustainedLimit>([\s\S]*?)<\/cim:ResourceOperationMaintenanceCost.omCostLowSustainedLimit>/g, obj, "omCostLowSustainedLimit", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceOperationMaintenanceCost.solidfuelPercentAboveLowSustainedLimit>([\s\S]*?)<\/cim:ResourceOperationMaintenanceCost.solidfuelPercentAboveLowSustainedLimit>/g, obj, "solidfuelPercentAboveLowSustainedLimit", base.to_string, sub, context);
                base.parse_attribute (/<cim:ResourceOperationMaintenanceCost.ResourceVerifiableCosts\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ResourceVerifiableCosts", sub, context);
                let bucket = context.parsed.ResourceOperationMaintenanceCost;
                if (null == bucket)
                   context.parsed.ResourceOperationMaintenanceCost = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "ResourceOperationMaintenanceCost", "gasPercentAboveLowSustainedLimit", "gasPercentAboveLowSustainedLimit",  base.from_string, fields);
                base.export_element (obj, "ResourceOperationMaintenanceCost", "oilPercentAboveLowSustainedLimit", "oilPercentAboveLowSustainedLimit",  base.from_string, fields);
                base.export_element (obj, "ResourceOperationMaintenanceCost", "omCostColdStartup", "omCostColdStartup",  base.from_float, fields);
                base.export_element (obj, "ResourceOperationMaintenanceCost", "omCostHotStartup", "omCostHotStartup",  base.from_float, fields);
                base.export_element (obj, "ResourceOperationMaintenanceCost", "omCostIntermediateStartup", "omCostIntermediateStartup",  base.from_float, fields);
                base.export_element (obj, "ResourceOperationMaintenanceCost", "omCostLowSustainedLimit", "omCostLowSustainedLimit",  base.from_float, fields);
                base.export_element (obj, "ResourceOperationMaintenanceCost", "solidfuelPercentAboveLowSustainedLimit", "solidfuelPercentAboveLowSustainedLimit",  base.from_string, fields);
                base.export_attribute (obj, "ResourceOperationMaintenanceCost", "ResourceVerifiableCosts", "ResourceVerifiableCosts", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ResourceOperationMaintenanceCost_collapse" aria-expanded="true" aria-controls="ResourceOperationMaintenanceCost_collapse" style="margin-left: 10px;">ResourceOperationMaintenanceCost</a></legend>
                    <div id="ResourceOperationMaintenanceCost_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#gasPercentAboveLowSustainedLimit}}<div><b>gasPercentAboveLowSustainedLimit</b>: {{gasPercentAboveLowSustainedLimit}}</div>{{/gasPercentAboveLowSustainedLimit}}
                    {{#oilPercentAboveLowSustainedLimit}}<div><b>oilPercentAboveLowSustainedLimit</b>: {{oilPercentAboveLowSustainedLimit}}</div>{{/oilPercentAboveLowSustainedLimit}}
                    {{#omCostColdStartup}}<div><b>omCostColdStartup</b>: {{omCostColdStartup}}</div>{{/omCostColdStartup}}
                    {{#omCostHotStartup}}<div><b>omCostHotStartup</b>: {{omCostHotStartup}}</div>{{/omCostHotStartup}}
                    {{#omCostIntermediateStartup}}<div><b>omCostIntermediateStartup</b>: {{omCostIntermediateStartup}}</div>{{/omCostIntermediateStartup}}
                    {{#omCostLowSustainedLimit}}<div><b>omCostLowSustainedLimit</b>: {{omCostLowSustainedLimit}}</div>{{/omCostLowSustainedLimit}}
                    {{#solidfuelPercentAboveLowSustainedLimit}}<div><b>solidfuelPercentAboveLowSustainedLimit</b>: {{solidfuelPercentAboveLowSustainedLimit}}</div>{{/solidfuelPercentAboveLowSustainedLimit}}
                    {{#ResourceVerifiableCosts}}<div><b>ResourceVerifiableCosts</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ResourceVerifiableCosts}}");}); return false;'>{{ResourceVerifiableCosts}}</a></div>{{/ResourceVerifiableCosts}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ResourceOperationMaintenanceCost_collapse" aria-expanded="true" aria-controls="{{id}}_ResourceOperationMaintenanceCost_collapse" style="margin-left: 10px;">ResourceOperationMaintenanceCost</a></legend>
                    <div id="{{id}}_ResourceOperationMaintenanceCost_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gasPercentAboveLowSustainedLimit'>gasPercentAboveLowSustainedLimit: </label><div class='col-sm-8'><input id='{{id}}_gasPercentAboveLowSustainedLimit' class='form-control' type='text'{{#gasPercentAboveLowSustainedLimit}} value='{{gasPercentAboveLowSustainedLimit}}'{{/gasPercentAboveLowSustainedLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_oilPercentAboveLowSustainedLimit'>oilPercentAboveLowSustainedLimit: </label><div class='col-sm-8'><input id='{{id}}_oilPercentAboveLowSustainedLimit' class='form-control' type='text'{{#oilPercentAboveLowSustainedLimit}} value='{{oilPercentAboveLowSustainedLimit}}'{{/oilPercentAboveLowSustainedLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_omCostColdStartup'>omCostColdStartup: </label><div class='col-sm-8'><input id='{{id}}_omCostColdStartup' class='form-control' type='text'{{#omCostColdStartup}} value='{{omCostColdStartup}}'{{/omCostColdStartup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_omCostHotStartup'>omCostHotStartup: </label><div class='col-sm-8'><input id='{{id}}_omCostHotStartup' class='form-control' type='text'{{#omCostHotStartup}} value='{{omCostHotStartup}}'{{/omCostHotStartup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_omCostIntermediateStartup'>omCostIntermediateStartup: </label><div class='col-sm-8'><input id='{{id}}_omCostIntermediateStartup' class='form-control' type='text'{{#omCostIntermediateStartup}} value='{{omCostIntermediateStartup}}'{{/omCostIntermediateStartup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_omCostLowSustainedLimit'>omCostLowSustainedLimit: </label><div class='col-sm-8'><input id='{{id}}_omCostLowSustainedLimit' class='form-control' type='text'{{#omCostLowSustainedLimit}} value='{{omCostLowSustainedLimit}}'{{/omCostLowSustainedLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_solidfuelPercentAboveLowSustainedLimit'>solidfuelPercentAboveLowSustainedLimit: </label><div class='col-sm-8'><input id='{{id}}_solidfuelPercentAboveLowSustainedLimit' class='form-control' type='text'{{#solidfuelPercentAboveLowSustainedLimit}} value='{{solidfuelPercentAboveLowSustainedLimit}}'{{/solidfuelPercentAboveLowSustainedLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ResourceVerifiableCosts'>ResourceVerifiableCosts: </label><div class='col-sm-8'><input id='{{id}}_ResourceVerifiableCosts' class='form-control' type='text'{{#ResourceVerifiableCosts}} value='{{ResourceVerifiableCosts}}'{{/ResourceVerifiableCosts}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ResourceOperationMaintenanceCost" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_gasPercentAboveLowSustainedLimit").value; if ("" !== temp) obj["gasPercentAboveLowSustainedLimit"] = temp;
                temp = document.getElementById (id + "_oilPercentAboveLowSustainedLimit").value; if ("" !== temp) obj["oilPercentAboveLowSustainedLimit"] = temp;
                temp = document.getElementById (id + "_omCostColdStartup").value; if ("" !== temp) obj["omCostColdStartup"] = temp;
                temp = document.getElementById (id + "_omCostHotStartup").value; if ("" !== temp) obj["omCostHotStartup"] = temp;
                temp = document.getElementById (id + "_omCostIntermediateStartup").value; if ("" !== temp) obj["omCostIntermediateStartup"] = temp;
                temp = document.getElementById (id + "_omCostLowSustainedLimit").value; if ("" !== temp) obj["omCostLowSustainedLimit"] = temp;
                temp = document.getElementById (id + "_solidfuelPercentAboveLowSustainedLimit").value; if ("" !== temp) obj["solidfuelPercentAboveLowSustainedLimit"] = temp;
                temp = document.getElementById (id + "_ResourceVerifiableCosts").value; if ("" !== temp) obj["ResourceVerifiableCosts"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ResourceVerifiableCosts", "0..1", "1", "ResourceVerifiableCosts", "ResourceOperationMaintenanceCost"]
                        ]
                    )
                );
            }
        }

        /**
         * Proficiency level of a craft, which is required to operate or maintain a particular type of asset and/or perform certain types of work.
         *
         */
        class MarketSkill extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MarketSkill;
                if (null == bucket)
                   cim_data.MarketSkill = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketSkill[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "MarketSkill";
                base.parse_attribute (/<cim:MarketSkill.certificationPeriod\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "certificationPeriod", sub, context);
                base.parse_element (/<cim:MarketSkill.effectiveDateTime>([\s\S]*?)<\/cim:MarketSkill.effectiveDateTime>/g, obj, "effectiveDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:MarketSkill.level>([\s\S]*?)<\/cim:MarketSkill.level>/g, obj, "level", base.to_string, sub, context);
                base.parse_attribute (/<cim:MarketSkill.MarketPerson\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketPerson", sub, context);
                base.parse_attributes (/<cim:MarketSkill.MarketQualificationRequirements\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketQualificationRequirements", sub, context);
                let bucket = context.parsed.MarketSkill;
                if (null == bucket)
                   context.parsed.MarketSkill = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MarketSkill", "certificationPeriod", "certificationPeriod", fields);
                base.export_element (obj, "MarketSkill", "effectiveDateTime", "effectiveDateTime",  base.from_datetime, fields);
                base.export_element (obj, "MarketSkill", "level", "level",  base.from_string, fields);
                base.export_attribute (obj, "MarketSkill", "MarketPerson", "MarketPerson", fields);
                base.export_attributes (obj, "MarketSkill", "MarketQualificationRequirements", "MarketQualificationRequirements", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MarketSkill_collapse" aria-expanded="true" aria-controls="MarketSkill_collapse" style="margin-left: 10px;">MarketSkill</a></legend>
                    <div id="MarketSkill_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#certificationPeriod}}<div><b>certificationPeriod</b>: {{certificationPeriod}}</div>{{/certificationPeriod}}
                    {{#effectiveDateTime}}<div><b>effectiveDateTime</b>: {{effectiveDateTime}}</div>{{/effectiveDateTime}}
                    {{#level}}<div><b>level</b>: {{level}}</div>{{/level}}
                    {{#MarketPerson}}<div><b>MarketPerson</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{MarketPerson}}");}); return false;'>{{MarketPerson}}</a></div>{{/MarketPerson}}
                    {{#MarketQualificationRequirements}}<div><b>MarketQualificationRequirements</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketQualificationRequirements}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["MarketQualificationRequirements"]) obj["MarketQualificationRequirements_string"] = obj["MarketQualificationRequirements"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["MarketQualificationRequirements_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MarketSkill_collapse" aria-expanded="true" aria-controls="{{id}}_MarketSkill_collapse" style="margin-left: 10px;">MarketSkill</a></legend>
                    <div id="{{id}}_MarketSkill_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_certificationPeriod'>certificationPeriod: </label><div class='col-sm-8'><input id='{{id}}_certificationPeriod' class='form-control' type='text'{{#certificationPeriod}} value='{{certificationPeriod}}'{{/certificationPeriod}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_effectiveDateTime'>effectiveDateTime: </label><div class='col-sm-8'><input id='{{id}}_effectiveDateTime' class='form-control' type='text'{{#effectiveDateTime}} value='{{effectiveDateTime}}'{{/effectiveDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_level'>level: </label><div class='col-sm-8'><input id='{{id}}_level' class='form-control' type='text'{{#level}} value='{{level}}'{{/level}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketPerson'>MarketPerson: </label><div class='col-sm-8'><input id='{{id}}_MarketPerson' class='form-control' type='text'{{#MarketPerson}} value='{{MarketPerson}}'{{/MarketPerson}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketQualificationRequirements'>MarketQualificationRequirements: </label><div class='col-sm-8'><input id='{{id}}_MarketQualificationRequirements' class='form-control' type='text'{{#MarketQualificationRequirements}} value='{{MarketQualificationRequirements_string}}'{{/MarketQualificationRequirements}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MarketSkill" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_certificationPeriod").value; if ("" !== temp) obj["certificationPeriod"] = temp;
                temp = document.getElementById (id + "_effectiveDateTime").value; if ("" !== temp) obj["effectiveDateTime"] = temp;
                temp = document.getElementById (id + "_level").value; if ("" !== temp) obj["level"] = temp;
                temp = document.getElementById (id + "_MarketPerson").value; if ("" !== temp) obj["MarketPerson"] = temp;
                temp = document.getElementById (id + "_MarketQualificationRequirements").value; if ("" !== temp) obj["MarketQualificationRequirements"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MarketPerson", "0..1", "0..*", "MarketPerson", "MarketSkills"],
                            ["MarketQualificationRequirements", "0..*", "0..*", "MarketQualificationRequirement", "MarketSkills"]
                        ]
                    )
                );
            }
        }

        /**
         * Participation factors per Cnode.
         *
         * Used to calculate "participation" of Cnode in an AggregateNode. Each Cnode associated to an AggregateNode would be assigned a participation factor for its participation within the AggregateNode.
         *
         */
        class CnodeDistributionFactor extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.CnodeDistributionFactor;
                if (null == bucket)
                   cim_data.CnodeDistributionFactor = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CnodeDistributionFactor[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CnodeDistributionFactor";
                base.parse_element (/<cim:CnodeDistributionFactor.factor>([\s\S]*?)<\/cim:CnodeDistributionFactor.factor>/g, obj, "factor", base.to_float, sub, context);
                base.parse_element (/<cim:CnodeDistributionFactor.podLossFactor>([\s\S]*?)<\/cim:CnodeDistributionFactor.podLossFactor>/g, obj, "podLossFactor", base.to_float, sub, context);
                base.parse_attribute (/<cim:CnodeDistributionFactor.AggregateNode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AggregateNode", sub, context);
                base.parse_attribute (/<cim:CnodeDistributionFactor.MktConnectivityNode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MktConnectivityNode", sub, context);
                base.parse_attribute (/<cim:CnodeDistributionFactor.SubControlArea\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SubControlArea", sub, context);
                base.parse_attribute (/<cim:CnodeDistributionFactor.HostControlArea\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "HostControlArea", sub, context);
                let bucket = context.parsed.CnodeDistributionFactor;
                if (null == bucket)
                   context.parsed.CnodeDistributionFactor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "CnodeDistributionFactor", "factor", "factor",  base.from_float, fields);
                base.export_element (obj, "CnodeDistributionFactor", "podLossFactor", "podLossFactor",  base.from_float, fields);
                base.export_attribute (obj, "CnodeDistributionFactor", "AggregateNode", "AggregateNode", fields);
                base.export_attribute (obj, "CnodeDistributionFactor", "MktConnectivityNode", "MktConnectivityNode", fields);
                base.export_attribute (obj, "CnodeDistributionFactor", "SubControlArea", "SubControlArea", fields);
                base.export_attribute (obj, "CnodeDistributionFactor", "HostControlArea", "HostControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CnodeDistributionFactor_collapse" aria-expanded="true" aria-controls="CnodeDistributionFactor_collapse" style="margin-left: 10px;">CnodeDistributionFactor</a></legend>
                    <div id="CnodeDistributionFactor_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#factor}}<div><b>factor</b>: {{factor}}</div>{{/factor}}
                    {{#podLossFactor}}<div><b>podLossFactor</b>: {{podLossFactor}}</div>{{/podLossFactor}}
                    {{#AggregateNode}}<div><b>AggregateNode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{AggregateNode}}");}); return false;'>{{AggregateNode}}</a></div>{{/AggregateNode}}
                    {{#MktConnectivityNode}}<div><b>MktConnectivityNode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{MktConnectivityNode}}");}); return false;'>{{MktConnectivityNode}}</a></div>{{/MktConnectivityNode}}
                    {{#SubControlArea}}<div><b>SubControlArea</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{SubControlArea}}");}); return false;'>{{SubControlArea}}</a></div>{{/SubControlArea}}
                    {{#HostControlArea}}<div><b>HostControlArea</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{HostControlArea}}");}); return false;'>{{HostControlArea}}</a></div>{{/HostControlArea}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CnodeDistributionFactor_collapse" aria-expanded="true" aria-controls="{{id}}_CnodeDistributionFactor_collapse" style="margin-left: 10px;">CnodeDistributionFactor</a></legend>
                    <div id="{{id}}_CnodeDistributionFactor_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_factor'>factor: </label><div class='col-sm-8'><input id='{{id}}_factor' class='form-control' type='text'{{#factor}} value='{{factor}}'{{/factor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_podLossFactor'>podLossFactor: </label><div class='col-sm-8'><input id='{{id}}_podLossFactor' class='form-control' type='text'{{#podLossFactor}} value='{{podLossFactor}}'{{/podLossFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AggregateNode'>AggregateNode: </label><div class='col-sm-8'><input id='{{id}}_AggregateNode' class='form-control' type='text'{{#AggregateNode}} value='{{AggregateNode}}'{{/AggregateNode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MktConnectivityNode'>MktConnectivityNode: </label><div class='col-sm-8'><input id='{{id}}_MktConnectivityNode' class='form-control' type='text'{{#MktConnectivityNode}} value='{{MktConnectivityNode}}'{{/MktConnectivityNode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SubControlArea'>SubControlArea: </label><div class='col-sm-8'><input id='{{id}}_SubControlArea' class='form-control' type='text'{{#SubControlArea}} value='{{SubControlArea}}'{{/SubControlArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_HostControlArea'>HostControlArea: </label><div class='col-sm-8'><input id='{{id}}_HostControlArea' class='form-control' type='text'{{#HostControlArea}} value='{{HostControlArea}}'{{/HostControlArea}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CnodeDistributionFactor" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_factor").value; if ("" !== temp) obj["factor"] = temp;
                temp = document.getElementById (id + "_podLossFactor").value; if ("" !== temp) obj["podLossFactor"] = temp;
                temp = document.getElementById (id + "_AggregateNode").value; if ("" !== temp) obj["AggregateNode"] = temp;
                temp = document.getElementById (id + "_MktConnectivityNode").value; if ("" !== temp) obj["MktConnectivityNode"] = temp;
                temp = document.getElementById (id + "_SubControlArea").value; if ("" !== temp) obj["SubControlArea"] = temp;
                temp = document.getElementById (id + "_HostControlArea").value; if ("" !== temp) obj["HostControlArea"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AggregateNode", "0..1", "0..*", "AggregateNode", "CnodeDistributionFactor"],
                            ["MktConnectivityNode", "1", "0..*", "MktConnectivityNode", "CnodeDistributionFactor"],
                            ["SubControlArea", "0..1", "0..*", "SubControlArea", "CnodeDistributionFactor"],
                            ["HostControlArea", "0..1", "0..*", "HostControlArea", "CnodeDistributionFactor"]
                        ]
                    )
                );
            }
        }

        /**
         * Price of oil in monetary units.
         *
         */
        class OilPrice extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OilPrice;
                if (null == bucket)
                   cim_data.OilPrice = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OilPrice[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "OilPrice";
                base.parse_element (/<cim:OilPrice.oilPriceIndex>([\s\S]*?)<\/cim:OilPrice.oilPriceIndex>/g, obj, "oilPriceIndex", base.to_float, sub, context);
                base.parse_attribute (/<cim:OilPrice.FuelRegion\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FuelRegion", sub, context);
                let bucket = context.parsed.OilPrice;
                if (null == bucket)
                   context.parsed.OilPrice = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "OilPrice", "oilPriceIndex", "oilPriceIndex",  base.from_float, fields);
                base.export_attribute (obj, "OilPrice", "FuelRegion", "FuelRegion", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OilPrice_collapse" aria-expanded="true" aria-controls="OilPrice_collapse" style="margin-left: 10px;">OilPrice</a></legend>
                    <div id="OilPrice_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#oilPriceIndex}}<div><b>oilPriceIndex</b>: {{oilPriceIndex}}</div>{{/oilPriceIndex}}
                    {{#FuelRegion}}<div><b>FuelRegion</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{FuelRegion}}");}); return false;'>{{FuelRegion}}</a></div>{{/FuelRegion}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OilPrice_collapse" aria-expanded="true" aria-controls="{{id}}_OilPrice_collapse" style="margin-left: 10px;">OilPrice</a></legend>
                    <div id="{{id}}_OilPrice_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_oilPriceIndex'>oilPriceIndex: </label><div class='col-sm-8'><input id='{{id}}_oilPriceIndex' class='form-control' type='text'{{#oilPriceIndex}} value='{{oilPriceIndex}}'{{/oilPriceIndex}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_FuelRegion'>FuelRegion: </label><div class='col-sm-8'><input id='{{id}}_FuelRegion' class='form-control' type='text'{{#FuelRegion}} value='{{FuelRegion}}'{{/FuelRegion}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OilPrice" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_oilPriceIndex").value; if ("" !== temp) obj["oilPriceIndex"] = temp;
                temp = document.getElementById (id + "_FuelRegion").value; if ("" !== temp) obj["FuelRegion"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["FuelRegion", "1", "1", "FuelRegion", "OilPrice"]
                        ]
                    )
                );
            }
        }

        /**
         * Allows chaining of TransmissionContractRights.
         *
         * Many individual contract rights can be included in the definition of a TransmissionRightChain. A TransmissionRightChain is also defined as a TransmissionContractRight itself.
         *
         */
        class TransmissionRightChain extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.TransmissionRightChain;
                if (null == bucket)
                   cim_data.TransmissionRightChain = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TransmissionRightChain[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TransmissionRightChain";
                base.parse_attribute (/<cim:TransmissionRightChain.RTO\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);
                base.parse_attributes (/<cim:TransmissionRightChain.Ind_ContractRight\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Ind_ContractRight", sub, context);
                base.parse_attribute (/<cim:TransmissionRightChain.Chain_ContractRight\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Chain_ContractRight", sub, context);
                let bucket = context.parsed.TransmissionRightChain;
                if (null == bucket)
                   context.parsed.TransmissionRightChain = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "TransmissionRightChain", "RTO", "RTO", fields);
                base.export_attributes (obj, "TransmissionRightChain", "Ind_ContractRight", "Ind_ContractRight", fields);
                base.export_attribute (obj, "TransmissionRightChain", "Chain_ContractRight", "Chain_ContractRight", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TransmissionRightChain_collapse" aria-expanded="true" aria-controls="TransmissionRightChain_collapse" style="margin-left: 10px;">TransmissionRightChain</a></legend>
                    <div id="TransmissionRightChain_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#RTO}}<div><b>RTO</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RTO}}");}); return false;'>{{RTO}}</a></div>{{/RTO}}
                    {{#Ind_ContractRight}}<div><b>Ind_ContractRight</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Ind_ContractRight}}
                    {{#Chain_ContractRight}}<div><b>Chain_ContractRight</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Chain_ContractRight}}");}); return false;'>{{Chain_ContractRight}}</a></div>{{/Chain_ContractRight}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Ind_ContractRight"]) obj["Ind_ContractRight_string"] = obj["Ind_ContractRight"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Ind_ContractRight_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TransmissionRightChain_collapse" aria-expanded="true" aria-controls="{{id}}_TransmissionRightChain_collapse" style="margin-left: 10px;">TransmissionRightChain</a></legend>
                    <div id="{{id}}_TransmissionRightChain_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RTO'>RTO: </label><div class='col-sm-8'><input id='{{id}}_RTO' class='form-control' type='text'{{#RTO}} value='{{RTO}}'{{/RTO}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Chain_ContractRight'>Chain_ContractRight: </label><div class='col-sm-8'><input id='{{id}}_Chain_ContractRight' class='form-control' type='text'{{#Chain_ContractRight}} value='{{Chain_ContractRight}}'{{/Chain_ContractRight}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "TransmissionRightChain" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_RTO").value; if ("" !== temp) obj["RTO"] = temp;
                temp = document.getElementById (id + "_Chain_ContractRight").value; if ("" !== temp) obj["Chain_ContractRight"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RTO", "1", "0..*", "RTO", "TransmissionRightChain"],
                            ["Ind_ContractRight", "1..*", "0..1", "ContractRight", "Ind_TransmissionRightChain"],
                            ["Chain_ContractRight", "1", "0..1", "ContractRight", "Chain_TransmissionRightChain"]
                        ]
                    )
                );
            }
        }

        /**
         * Subclass of Production: CombinedCyclePlant from IEC 61970 package.
         *
         * A set of combustion turbines and steam turbines where the exhaust heat from the combustion turbines is recovered to make steam for the steam turbines, resulting in greater overall plant efficiency.
         *
         */
        class MktCombinedCyclePlant extends Production.CombinedCyclePlant
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MktCombinedCyclePlant;
                if (null == bucket)
                   cim_data.MktCombinedCyclePlant = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MktCombinedCyclePlant[obj.id];
            }

            parse (context, sub)
            {
                let obj = Production.CombinedCyclePlant.prototype.parse.call (this, context, sub);
                obj.cls = "MktCombinedCyclePlant";
                base.parse_attribute (/<cim:MktCombinedCyclePlant.AggregatedPnode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AggregatedPnode", sub, context);
                base.parse_attributes (/<cim:MktCombinedCyclePlant.CombinedCycleLogicalConfiguration\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CombinedCycleLogicalConfiguration", sub, context);
                let bucket = context.parsed.MktCombinedCyclePlant;
                if (null == bucket)
                   context.parsed.MktCombinedCyclePlant = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Production.CombinedCyclePlant.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MktCombinedCyclePlant", "AggregatedPnode", "AggregatedPnode", fields);
                base.export_attributes (obj, "MktCombinedCyclePlant", "CombinedCycleLogicalConfiguration", "CombinedCycleLogicalConfiguration", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MktCombinedCyclePlant_collapse" aria-expanded="true" aria-controls="MktCombinedCyclePlant_collapse" style="margin-left: 10px;">MktCombinedCyclePlant</a></legend>
                    <div id="MktCombinedCyclePlant_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Production.CombinedCyclePlant.prototype.template.call (this) +
                    `
                    {{#AggregatedPnode}}<div><b>AggregatedPnode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{AggregatedPnode}}");}); return false;'>{{AggregatedPnode}}</a></div>{{/AggregatedPnode}}
                    {{#CombinedCycleLogicalConfiguration}}<div><b>CombinedCycleLogicalConfiguration</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CombinedCycleLogicalConfiguration}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["CombinedCycleLogicalConfiguration"]) obj["CombinedCycleLogicalConfiguration_string"] = obj["CombinedCycleLogicalConfiguration"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["CombinedCycleLogicalConfiguration_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MktCombinedCyclePlant_collapse" aria-expanded="true" aria-controls="{{id}}_MktCombinedCyclePlant_collapse" style="margin-left: 10px;">MktCombinedCyclePlant</a></legend>
                    <div id="{{id}}_MktCombinedCyclePlant_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Production.CombinedCyclePlant.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AggregatedPnode'>AggregatedPnode: </label><div class='col-sm-8'><input id='{{id}}_AggregatedPnode' class='form-control' type='text'{{#AggregatedPnode}} value='{{AggregatedPnode}}'{{/AggregatedPnode}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MktCombinedCyclePlant" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_AggregatedPnode").value; if ("" !== temp) obj["AggregatedPnode"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AggregatedPnode", "0..1", "0..*", "AggregatedPnode", "MktCombinedCyclePlant"],
                            ["CombinedCycleLogicalConfiguration", "1..*", "0..1", "CombinedCycleLogicalConfiguration", "MktCombinedCyclePlant"]
                        ]
                    )
                );
            }
        }

        /**
         * General purpose information for name and other information to contact people.
         *
         */
        class MarketPerson extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MarketPerson;
                if (null == bucket)
                   cim_data.MarketPerson = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketPerson[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MarketPerson";
                base.parse_element (/<cim:MarketPerson.category>([\s\S]*?)<\/cim:MarketPerson.category>/g, obj, "category", base.to_string, sub, context);
                base.parse_attribute (/<cim:MarketPerson.electronicAddressAlternate\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "electronicAddressAlternate", sub, context);
                base.parse_attribute (/<cim:MarketPerson.electronicAddressPrimary\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "electronicAddressPrimary", sub, context);
                base.parse_element (/<cim:MarketPerson.firstName>([\s\S]*?)<\/cim:MarketPerson.firstName>/g, obj, "firstName", base.to_string, sub, context);
                base.parse_element (/<cim:MarketPerson.governmentID>([\s\S]*?)<\/cim:MarketPerson.governmentID>/g, obj, "governmentID", base.to_string, sub, context);
                base.parse_attribute (/<cim:MarketPerson.landlinePhone\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "landlinePhone", sub, context);
                base.parse_element (/<cim:MarketPerson.lastName>([\s\S]*?)<\/cim:MarketPerson.lastName>/g, obj, "lastName", base.to_string, sub, context);
                base.parse_element (/<cim:MarketPerson.mName>([\s\S]*?)<\/cim:MarketPerson.mName>/g, obj, "mName", base.to_string, sub, context);
                base.parse_attribute (/<cim:MarketPerson.mobilePhone\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "mobilePhone", sub, context);
                base.parse_element (/<cim:MarketPerson.prefix>([\s\S]*?)<\/cim:MarketPerson.prefix>/g, obj, "prefix", base.to_string, sub, context);
                base.parse_element (/<cim:MarketPerson.specialNeed>([\s\S]*?)<\/cim:MarketPerson.specialNeed>/g, obj, "specialNeed", base.to_string, sub, context);
                base.parse_attribute (/<cim:MarketPerson.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_element (/<cim:MarketPerson.suffix>([\s\S]*?)<\/cim:MarketPerson.suffix>/g, obj, "suffix", base.to_string, sub, context);
                base.parse_element (/<cim:MarketPerson.userID>([\s\S]*?)<\/cim:MarketPerson.userID>/g, obj, "userID", base.to_string, sub, context);
                base.parse_attributes (/<cim:MarketPerson.MarketSkills\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketSkills", sub, context);
                base.parse_attributes (/<cim:MarketPerson.MarketParticipant\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketParticipant", sub, context);
                let bucket = context.parsed.MarketPerson;
                if (null == bucket)
                   context.parsed.MarketPerson = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "MarketPerson", "category", "category",  base.from_string, fields);
                base.export_attribute (obj, "MarketPerson", "electronicAddressAlternate", "electronicAddressAlternate", fields);
                base.export_attribute (obj, "MarketPerson", "electronicAddressPrimary", "electronicAddressPrimary", fields);
                base.export_element (obj, "MarketPerson", "firstName", "firstName",  base.from_string, fields);
                base.export_element (obj, "MarketPerson", "governmentID", "governmentID",  base.from_string, fields);
                base.export_attribute (obj, "MarketPerson", "landlinePhone", "landlinePhone", fields);
                base.export_element (obj, "MarketPerson", "lastName", "lastName",  base.from_string, fields);
                base.export_element (obj, "MarketPerson", "mName", "mName",  base.from_string, fields);
                base.export_attribute (obj, "MarketPerson", "mobilePhone", "mobilePhone", fields);
                base.export_element (obj, "MarketPerson", "prefix", "prefix",  base.from_string, fields);
                base.export_element (obj, "MarketPerson", "specialNeed", "specialNeed",  base.from_string, fields);
                base.export_attribute (obj, "MarketPerson", "status", "status", fields);
                base.export_element (obj, "MarketPerson", "suffix", "suffix",  base.from_string, fields);
                base.export_element (obj, "MarketPerson", "userID", "userID",  base.from_string, fields);
                base.export_attributes (obj, "MarketPerson", "MarketSkills", "MarketSkills", fields);
                base.export_attributes (obj, "MarketPerson", "MarketParticipant", "MarketParticipant", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MarketPerson_collapse" aria-expanded="true" aria-controls="MarketPerson_collapse" style="margin-left: 10px;">MarketPerson</a></legend>
                    <div id="MarketPerson_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#category}}<div><b>category</b>: {{category}}</div>{{/category}}
                    {{#electronicAddressAlternate}}<div><b>electronicAddressAlternate</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{electronicAddressAlternate}}");}); return false;'>{{electronicAddressAlternate}}</a></div>{{/electronicAddressAlternate}}
                    {{#electronicAddressPrimary}}<div><b>electronicAddressPrimary</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{electronicAddressPrimary}}");}); return false;'>{{electronicAddressPrimary}}</a></div>{{/electronicAddressPrimary}}
                    {{#firstName}}<div><b>firstName</b>: {{firstName}}</div>{{/firstName}}
                    {{#governmentID}}<div><b>governmentID</b>: {{governmentID}}</div>{{/governmentID}}
                    {{#landlinePhone}}<div><b>landlinePhone</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{landlinePhone}}");}); return false;'>{{landlinePhone}}</a></div>{{/landlinePhone}}
                    {{#lastName}}<div><b>lastName</b>: {{lastName}}</div>{{/lastName}}
                    {{#mName}}<div><b>mName</b>: {{mName}}</div>{{/mName}}
                    {{#mobilePhone}}<div><b>mobilePhone</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{mobilePhone}}");}); return false;'>{{mobilePhone}}</a></div>{{/mobilePhone}}
                    {{#prefix}}<div><b>prefix</b>: {{prefix}}</div>{{/prefix}}
                    {{#specialNeed}}<div><b>specialNeed</b>: {{specialNeed}}</div>{{/specialNeed}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{status}}");}); return false;'>{{status}}</a></div>{{/status}}
                    {{#suffix}}<div><b>suffix</b>: {{suffix}}</div>{{/suffix}}
                    {{#userID}}<div><b>userID</b>: {{userID}}</div>{{/userID}}
                    {{#MarketSkills}}<div><b>MarketSkills</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketSkills}}
                    {{#MarketParticipant}}<div><b>MarketParticipant</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketParticipant}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["MarketSkills"]) obj["MarketSkills_string"] = obj["MarketSkills"].join ();
                if (obj["MarketParticipant"]) obj["MarketParticipant_string"] = obj["MarketParticipant"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["MarketSkills_string"];
                delete obj["MarketParticipant_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MarketPerson_collapse" aria-expanded="true" aria-controls="{{id}}_MarketPerson_collapse" style="margin-left: 10px;">MarketPerson</a></legend>
                    <div id="{{id}}_MarketPerson_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_category'>category: </label><div class='col-sm-8'><input id='{{id}}_category' class='form-control' type='text'{{#category}} value='{{category}}'{{/category}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_electronicAddressAlternate'>electronicAddressAlternate: </label><div class='col-sm-8'><input id='{{id}}_electronicAddressAlternate' class='form-control' type='text'{{#electronicAddressAlternate}} value='{{electronicAddressAlternate}}'{{/electronicAddressAlternate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_electronicAddressPrimary'>electronicAddressPrimary: </label><div class='col-sm-8'><input id='{{id}}_electronicAddressPrimary' class='form-control' type='text'{{#electronicAddressPrimary}} value='{{electronicAddressPrimary}}'{{/electronicAddressPrimary}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_firstName'>firstName: </label><div class='col-sm-8'><input id='{{id}}_firstName' class='form-control' type='text'{{#firstName}} value='{{firstName}}'{{/firstName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_governmentID'>governmentID: </label><div class='col-sm-8'><input id='{{id}}_governmentID' class='form-control' type='text'{{#governmentID}} value='{{governmentID}}'{{/governmentID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_landlinePhone'>landlinePhone: </label><div class='col-sm-8'><input id='{{id}}_landlinePhone' class='form-control' type='text'{{#landlinePhone}} value='{{landlinePhone}}'{{/landlinePhone}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lastName'>lastName: </label><div class='col-sm-8'><input id='{{id}}_lastName' class='form-control' type='text'{{#lastName}} value='{{lastName}}'{{/lastName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mName'>mName: </label><div class='col-sm-8'><input id='{{id}}_mName' class='form-control' type='text'{{#mName}} value='{{mName}}'{{/mName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mobilePhone'>mobilePhone: </label><div class='col-sm-8'><input id='{{id}}_mobilePhone' class='form-control' type='text'{{#mobilePhone}} value='{{mobilePhone}}'{{/mobilePhone}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_prefix'>prefix: </label><div class='col-sm-8'><input id='{{id}}_prefix' class='form-control' type='text'{{#prefix}} value='{{prefix}}'{{/prefix}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_specialNeed'>specialNeed: </label><div class='col-sm-8'><input id='{{id}}_specialNeed' class='form-control' type='text'{{#specialNeed}} value='{{specialNeed}}'{{/specialNeed}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_suffix'>suffix: </label><div class='col-sm-8'><input id='{{id}}_suffix' class='form-control' type='text'{{#suffix}} value='{{suffix}}'{{/suffix}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_userID'>userID: </label><div class='col-sm-8'><input id='{{id}}_userID' class='form-control' type='text'{{#userID}} value='{{userID}}'{{/userID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketParticipant'>MarketParticipant: </label><div class='col-sm-8'><input id='{{id}}_MarketParticipant' class='form-control' type='text'{{#MarketParticipant}} value='{{MarketParticipant_string}}'{{/MarketParticipant}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MarketPerson" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_category").value; if ("" !== temp) obj["category"] = temp;
                temp = document.getElementById (id + "_electronicAddressAlternate").value; if ("" !== temp) obj["electronicAddressAlternate"] = temp;
                temp = document.getElementById (id + "_electronicAddressPrimary").value; if ("" !== temp) obj["electronicAddressPrimary"] = temp;
                temp = document.getElementById (id + "_firstName").value; if ("" !== temp) obj["firstName"] = temp;
                temp = document.getElementById (id + "_governmentID").value; if ("" !== temp) obj["governmentID"] = temp;
                temp = document.getElementById (id + "_landlinePhone").value; if ("" !== temp) obj["landlinePhone"] = temp;
                temp = document.getElementById (id + "_lastName").value; if ("" !== temp) obj["lastName"] = temp;
                temp = document.getElementById (id + "_mName").value; if ("" !== temp) obj["mName"] = temp;
                temp = document.getElementById (id + "_mobilePhone").value; if ("" !== temp) obj["mobilePhone"] = temp;
                temp = document.getElementById (id + "_prefix").value; if ("" !== temp) obj["prefix"] = temp;
                temp = document.getElementById (id + "_specialNeed").value; if ("" !== temp) obj["specialNeed"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_suffix").value; if ("" !== temp) obj["suffix"] = temp;
                temp = document.getElementById (id + "_userID").value; if ("" !== temp) obj["userID"] = temp;
                temp = document.getElementById (id + "_MarketParticipant").value; if ("" !== temp) obj["MarketParticipant"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MarketSkills", "0..*", "0..1", "MarketSkill", "MarketPerson"],
                            ["MarketParticipant", "0..*", "0..*", "MarketParticipant", "MarketPerson"]
                        ]
                    )
                );
            }
        }

        /**
         * Price of gas in monetary units.
         *
         */
        class GasPrice extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.GasPrice;
                if (null == bucket)
                   cim_data.GasPrice = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GasPrice[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "GasPrice";
                base.parse_element (/<cim:GasPrice.gasPriceIndex>([\s\S]*?)<\/cim:GasPrice.gasPriceIndex>/g, obj, "gasPriceIndex", base.to_float, sub, context);
                base.parse_attribute (/<cim:GasPrice.FuelRegion\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FuelRegion", sub, context);
                let bucket = context.parsed.GasPrice;
                if (null == bucket)
                   context.parsed.GasPrice = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "GasPrice", "gasPriceIndex", "gasPriceIndex",  base.from_float, fields);
                base.export_attribute (obj, "GasPrice", "FuelRegion", "FuelRegion", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#GasPrice_collapse" aria-expanded="true" aria-controls="GasPrice_collapse" style="margin-left: 10px;">GasPrice</a></legend>
                    <div id="GasPrice_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#gasPriceIndex}}<div><b>gasPriceIndex</b>: {{gasPriceIndex}}</div>{{/gasPriceIndex}}
                    {{#FuelRegion}}<div><b>FuelRegion</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{FuelRegion}}");}); return false;'>{{FuelRegion}}</a></div>{{/FuelRegion}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_GasPrice_collapse" aria-expanded="true" aria-controls="{{id}}_GasPrice_collapse" style="margin-left: 10px;">GasPrice</a></legend>
                    <div id="{{id}}_GasPrice_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gasPriceIndex'>gasPriceIndex: </label><div class='col-sm-8'><input id='{{id}}_gasPriceIndex' class='form-control' type='text'{{#gasPriceIndex}} value='{{gasPriceIndex}}'{{/gasPriceIndex}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_FuelRegion'>FuelRegion: </label><div class='col-sm-8'><input id='{{id}}_FuelRegion' class='form-control' type='text'{{#FuelRegion}} value='{{FuelRegion}}'{{/FuelRegion}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "GasPrice" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_gasPriceIndex").value; if ("" !== temp) obj["gasPriceIndex"] = temp;
                temp = document.getElementById (id + "_FuelRegion").value; if ("" !== temp) obj["FuelRegion"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["FuelRegion", "1", "1", "FuelRegion", "GasPrice"]
                        ]
                    )
                );
            }
        }

        /**
         * A HostControlArea has a set of tie points and a set of generator controls (i.e., AGC).
         *
         * It also has a total load, including transmission and distribution losses.
         *
         */
        class HostControlArea extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.HostControlArea;
                if (null == bucket)
                   cim_data.HostControlArea = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.HostControlArea[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "HostControlArea";
                base.parse_attribute (/<cim:HostControlArea.areaControlMode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "areaControlMode", sub, context);
                base.parse_element (/<cim:HostControlArea.freqSetPoint>([\s\S]*?)<\/cim:HostControlArea.freqSetPoint>/g, obj, "freqSetPoint", base.to_string, sub, context);
                base.parse_element (/<cim:HostControlArea.frequencyBiasFactor>([\s\S]*?)<\/cim:HostControlArea.frequencyBiasFactor>/g, obj, "frequencyBiasFactor", base.to_float, sub, context);
                base.parse_attributes (/<cim:HostControlArea.TransferInterface\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TransferInterface", sub, context);
                base.parse_attributes (/<cim:HostControlArea.Flowgate\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
                base.parse_attribute (/<cim:HostControlArea.RTO\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);
                base.parse_attributes (/<cim:HostControlArea.LossClearingResults\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LossClearingResults", sub, context);
                base.parse_attribute (/<cim:HostControlArea.AdjacentCASet\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AdjacentCASet", sub, context);
                base.parse_attribute (/<cim:HostControlArea.Controls\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Controls", sub, context);
                base.parse_attributes (/<cim:HostControlArea.SysLoadDistribuFactor\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SysLoadDistribuFactor", sub, context);
                base.parse_attributes (/<cim:HostControlArea.SubControlAreas\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SubControlAreas", sub, context);
                base.parse_attributes (/<cim:HostControlArea.BidSelfSched\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BidSelfSched", sub, context);
                base.parse_attributes (/<cim:HostControlArea.RegisteredResource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                base.parse_attributes (/<cim:HostControlArea.CnodeDistributionFactor\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CnodeDistributionFactor", sub, context);
                let bucket = context.parsed.HostControlArea;
                if (null == bucket)
                   context.parsed.HostControlArea = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "HostControlArea", "areaControlMode", "areaControlMode", fields);
                base.export_element (obj, "HostControlArea", "freqSetPoint", "freqSetPoint",  base.from_string, fields);
                base.export_element (obj, "HostControlArea", "frequencyBiasFactor", "frequencyBiasFactor",  base.from_float, fields);
                base.export_attributes (obj, "HostControlArea", "TransferInterface", "TransferInterface", fields);
                base.export_attributes (obj, "HostControlArea", "Flowgate", "Flowgate", fields);
                base.export_attribute (obj, "HostControlArea", "RTO", "RTO", fields);
                base.export_attributes (obj, "HostControlArea", "LossClearingResults", "LossClearingResults", fields);
                base.export_attribute (obj, "HostControlArea", "AdjacentCASet", "AdjacentCASet", fields);
                base.export_attribute (obj, "HostControlArea", "Controls", "Controls", fields);
                base.export_attributes (obj, "HostControlArea", "SysLoadDistribuFactor", "SysLoadDistribuFactor", fields);
                base.export_attributes (obj, "HostControlArea", "SubControlAreas", "SubControlAreas", fields);
                base.export_attributes (obj, "HostControlArea", "BidSelfSched", "BidSelfSched", fields);
                base.export_attributes (obj, "HostControlArea", "RegisteredResource", "RegisteredResource", fields);
                base.export_attributes (obj, "HostControlArea", "CnodeDistributionFactor", "CnodeDistributionFactor", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#HostControlArea_collapse" aria-expanded="true" aria-controls="HostControlArea_collapse" style="margin-left: 10px;">HostControlArea</a></legend>
                    <div id="HostControlArea_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#areaControlMode}}<div><b>areaControlMode</b>: {{areaControlMode}}</div>{{/areaControlMode}}
                    {{#freqSetPoint}}<div><b>freqSetPoint</b>: {{freqSetPoint}}</div>{{/freqSetPoint}}
                    {{#frequencyBiasFactor}}<div><b>frequencyBiasFactor</b>: {{frequencyBiasFactor}}</div>{{/frequencyBiasFactor}}
                    {{#TransferInterface}}<div><b>TransferInterface</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TransferInterface}}
                    {{#Flowgate}}<div><b>Flowgate</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Flowgate}}
                    {{#RTO}}<div><b>RTO</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RTO}}");}); return false;'>{{RTO}}</a></div>{{/RTO}}
                    {{#LossClearingResults}}<div><b>LossClearingResults</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/LossClearingResults}}
                    {{#AdjacentCASet}}<div><b>AdjacentCASet</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{AdjacentCASet}}");}); return false;'>{{AdjacentCASet}}</a></div>{{/AdjacentCASet}}
                    {{#Controls}}<div><b>Controls</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Controls}}");}); return false;'>{{Controls}}</a></div>{{/Controls}}
                    {{#SysLoadDistribuFactor}}<div><b>SysLoadDistribuFactor</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/SysLoadDistribuFactor}}
                    {{#SubControlAreas}}<div><b>SubControlAreas</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/SubControlAreas}}
                    {{#BidSelfSched}}<div><b>BidSelfSched</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/BidSelfSched}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RegisteredResource}}
                    {{#CnodeDistributionFactor}}<div><b>CnodeDistributionFactor</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CnodeDistributionFactor}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["areaControlModeAreaControlMode"] = [{ id: '', selected: (!obj["areaControlMode"])}]; for (let property in MktDomain.AreaControlMode) obj["areaControlModeAreaControlMode"].push ({ id: property, selected: obj["areaControlMode"] && obj["areaControlMode"].endsWith ('.' + property)});
                if (obj["TransferInterface"]) obj["TransferInterface_string"] = obj["TransferInterface"].join ();
                if (obj["Flowgate"]) obj["Flowgate_string"] = obj["Flowgate"].join ();
                if (obj["LossClearingResults"]) obj["LossClearingResults_string"] = obj["LossClearingResults"].join ();
                if (obj["SysLoadDistribuFactor"]) obj["SysLoadDistribuFactor_string"] = obj["SysLoadDistribuFactor"].join ();
                if (obj["SubControlAreas"]) obj["SubControlAreas_string"] = obj["SubControlAreas"].join ();
                if (obj["BidSelfSched"]) obj["BidSelfSched_string"] = obj["BidSelfSched"].join ();
                if (obj["RegisteredResource"]) obj["RegisteredResource_string"] = obj["RegisteredResource"].join ();
                if (obj["CnodeDistributionFactor"]) obj["CnodeDistributionFactor_string"] = obj["CnodeDistributionFactor"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["areaControlModeAreaControlMode"];
                delete obj["TransferInterface_string"];
                delete obj["Flowgate_string"];
                delete obj["LossClearingResults_string"];
                delete obj["SysLoadDistribuFactor_string"];
                delete obj["SubControlAreas_string"];
                delete obj["BidSelfSched_string"];
                delete obj["RegisteredResource_string"];
                delete obj["CnodeDistributionFactor_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_HostControlArea_collapse" aria-expanded="true" aria-controls="{{id}}_HostControlArea_collapse" style="margin-left: 10px;">HostControlArea</a></legend>
                    <div id="{{id}}_HostControlArea_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_areaControlMode'>areaControlMode: </label><div class='col-sm-8'><select id='{{id}}_areaControlMode' class='form-control custom-select'>{{#areaControlModeAreaControlMode}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/areaControlModeAreaControlMode}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_freqSetPoint'>freqSetPoint: </label><div class='col-sm-8'><input id='{{id}}_freqSetPoint' class='form-control' type='text'{{#freqSetPoint}} value='{{freqSetPoint}}'{{/freqSetPoint}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_frequencyBiasFactor'>frequencyBiasFactor: </label><div class='col-sm-8'><input id='{{id}}_frequencyBiasFactor' class='form-control' type='text'{{#frequencyBiasFactor}} value='{{frequencyBiasFactor}}'{{/frequencyBiasFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RTO'>RTO: </label><div class='col-sm-8'><input id='{{id}}_RTO' class='form-control' type='text'{{#RTO}} value='{{RTO}}'{{/RTO}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AdjacentCASet'>AdjacentCASet: </label><div class='col-sm-8'><input id='{{id}}_AdjacentCASet' class='form-control' type='text'{{#AdjacentCASet}} value='{{AdjacentCASet}}'{{/AdjacentCASet}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Controls'>Controls: </label><div class='col-sm-8'><input id='{{id}}_Controls' class='form-control' type='text'{{#Controls}} value='{{Controls}}'{{/Controls}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "HostControlArea" };
                super.submit (id, obj);
                temp = MktDomain.AreaControlMode[document.getElementById (id + "_areaControlMode").value]; if (temp) obj["areaControlMode"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#AreaControlMode." + temp; else delete obj["areaControlMode"];
                temp = document.getElementById (id + "_freqSetPoint").value; if ("" !== temp) obj["freqSetPoint"] = temp;
                temp = document.getElementById (id + "_frequencyBiasFactor").value; if ("" !== temp) obj["frequencyBiasFactor"] = temp;
                temp = document.getElementById (id + "_RTO").value; if ("" !== temp) obj["RTO"] = temp;
                temp = document.getElementById (id + "_AdjacentCASet").value; if ("" !== temp) obj["AdjacentCASet"] = temp;
                temp = document.getElementById (id + "_Controls").value; if ("" !== temp) obj["Controls"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TransferInterface", "0..*", "0..1", "TransferInterface", "HostControlArea"],
                            ["Flowgate", "0..*", "0..1", "Flowgate", "HostControlArea"],
                            ["RTO", "1", "0..*", "RTO", "HostControlArea"],
                            ["LossClearingResults", "0..*", "0..1", "LossClearingResults", "HostControlArea"],
                            ["AdjacentCASet", "0..1", "0..1", "AdjacentCASet", "HostControlArea"],
                            ["Controls", "1", "1", "ControlAreaOperator", "ControlledBy"],
                            ["SysLoadDistribuFactor", "0..*", "1", "SysLoadDistributionFactor", "HostControlArea"],
                            ["SubControlAreas", "0..*", "1", "SubControlArea", "HostControlArea"],
                            ["BidSelfSched", "0..*", "0..1", "BidSelfSched", "HostControlArea"],
                            ["RegisteredResource", "0..*", "0..1", "RegisteredResource", "HostControlArea"],
                            ["CnodeDistributionFactor", "0..*", "0..1", "CnodeDistributionFactor", "HostControlArea"]
                        ]
                    )
                );
            }
        }

        /**
         * Regional transmission operator.
         *
         */
        class RTO extends MarketCommon.MarketParticipant
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.RTO;
                if (null == bucket)
                   cim_data.RTO = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RTO[obj.id];
            }

            parse (context, sub)
            {
                let obj = MarketCommon.MarketParticipant.prototype.parse.call (this, context, sub);
                obj.cls = "RTO";
                base.parse_attributes (/<cim:RTO.Pnodes\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Pnodes", sub, context);
                base.parse_attributes (/<cim:RTO.EnergyMarkets\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnergyMarkets", sub, context);
                base.parse_attributes (/<cim:RTO.FuelRegion\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FuelRegion", sub, context);
                base.parse_attributes (/<cim:RTO.ResourceGroupReqs\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ResourceGroupReqs", sub, context);
                base.parse_attributes (/<cim:RTO.AdjacentCASet\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AdjacentCASet", sub, context);
                base.parse_attributes (/<cim:RTO.SecurityConstraintsLinear\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SecurityConstraintsLinear", sub, context);
                base.parse_attributes (/<cim:RTO.HostControlArea\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "HostControlArea", sub, context);
                base.parse_attributes (/<cim:RTO.SubControlArea\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SubControlArea", sub, context);
                base.parse_attributes (/<cim:RTO.TransmissionRightChain\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionRightChain", sub, context);
                base.parse_attributes (/<cim:RTO.SecurityConstraints\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SecurityConstraints", sub, context);
                base.parse_attributes (/<cim:RTO.AggregateNode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AggregateNode", sub, context);
                base.parse_attributes (/<cim:RTO.MktConnectivityNode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MktConnectivityNode", sub, context);
                base.parse_attributes (/<cim:RTO.LocalReliabilityArea\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LocalReliabilityArea", sub, context);
                base.parse_attributes (/<cim:RTO.MSSAggregation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MSSAggregation", sub, context);
                base.parse_attributes (/<cim:RTO.TransmissionContractRight\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionContractRight", sub, context);
                base.parse_attributes (/<cim:RTO.CommodityDefinition\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CommodityDefinition", sub, context);
                let bucket = context.parsed.RTO;
                if (null == bucket)
                   context.parsed.RTO = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = MarketCommon.MarketParticipant.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "RTO", "Pnodes", "Pnodes", fields);
                base.export_attributes (obj, "RTO", "EnergyMarkets", "EnergyMarkets", fields);
                base.export_attributes (obj, "RTO", "FuelRegion", "FuelRegion", fields);
                base.export_attributes (obj, "RTO", "ResourceGroupReqs", "ResourceGroupReqs", fields);
                base.export_attributes (obj, "RTO", "AdjacentCASet", "AdjacentCASet", fields);
                base.export_attributes (obj, "RTO", "SecurityConstraintsLinear", "SecurityConstraintsLinear", fields);
                base.export_attributes (obj, "RTO", "HostControlArea", "HostControlArea", fields);
                base.export_attributes (obj, "RTO", "SubControlArea", "SubControlArea", fields);
                base.export_attributes (obj, "RTO", "TransmissionRightChain", "TransmissionRightChain", fields);
                base.export_attributes (obj, "RTO", "SecurityConstraints", "SecurityConstraints", fields);
                base.export_attributes (obj, "RTO", "AggregateNode", "AggregateNode", fields);
                base.export_attributes (obj, "RTO", "MktConnectivityNode", "MktConnectivityNode", fields);
                base.export_attributes (obj, "RTO", "LocalReliabilityArea", "LocalReliabilityArea", fields);
                base.export_attributes (obj, "RTO", "MSSAggregation", "MSSAggregation", fields);
                base.export_attributes (obj, "RTO", "TransmissionContractRight", "TransmissionContractRight", fields);
                base.export_attributes (obj, "RTO", "CommodityDefinition", "CommodityDefinition", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RTO_collapse" aria-expanded="true" aria-controls="RTO_collapse" style="margin-left: 10px;">RTO</a></legend>
                    <div id="RTO_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + MarketCommon.MarketParticipant.prototype.template.call (this) +
                    `
                    {{#Pnodes}}<div><b>Pnodes</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Pnodes}}
                    {{#EnergyMarkets}}<div><b>EnergyMarkets</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EnergyMarkets}}
                    {{#FuelRegion}}<div><b>FuelRegion</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/FuelRegion}}
                    {{#ResourceGroupReqs}}<div><b>ResourceGroupReqs</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ResourceGroupReqs}}
                    {{#AdjacentCASet}}<div><b>AdjacentCASet</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AdjacentCASet}}
                    {{#SecurityConstraintsLinear}}<div><b>SecurityConstraintsLinear</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/SecurityConstraintsLinear}}
                    {{#HostControlArea}}<div><b>HostControlArea</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/HostControlArea}}
                    {{#SubControlArea}}<div><b>SubControlArea</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/SubControlArea}}
                    {{#TransmissionRightChain}}<div><b>TransmissionRightChain</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TransmissionRightChain}}
                    {{#SecurityConstraints}}<div><b>SecurityConstraints</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/SecurityConstraints}}
                    {{#AggregateNode}}<div><b>AggregateNode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AggregateNode}}
                    {{#MktConnectivityNode}}<div><b>MktConnectivityNode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MktConnectivityNode}}
                    {{#LocalReliabilityArea}}<div><b>LocalReliabilityArea</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/LocalReliabilityArea}}
                    {{#MSSAggregation}}<div><b>MSSAggregation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MSSAggregation}}
                    {{#TransmissionContractRight}}<div><b>TransmissionContractRight</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TransmissionContractRight}}
                    {{#CommodityDefinition}}<div><b>CommodityDefinition</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CommodityDefinition}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Pnodes"]) obj["Pnodes_string"] = obj["Pnodes"].join ();
                if (obj["EnergyMarkets"]) obj["EnergyMarkets_string"] = obj["EnergyMarkets"].join ();
                if (obj["FuelRegion"]) obj["FuelRegion_string"] = obj["FuelRegion"].join ();
                if (obj["ResourceGroupReqs"]) obj["ResourceGroupReqs_string"] = obj["ResourceGroupReqs"].join ();
                if (obj["AdjacentCASet"]) obj["AdjacentCASet_string"] = obj["AdjacentCASet"].join ();
                if (obj["SecurityConstraintsLinear"]) obj["SecurityConstraintsLinear_string"] = obj["SecurityConstraintsLinear"].join ();
                if (obj["HostControlArea"]) obj["HostControlArea_string"] = obj["HostControlArea"].join ();
                if (obj["SubControlArea"]) obj["SubControlArea_string"] = obj["SubControlArea"].join ();
                if (obj["TransmissionRightChain"]) obj["TransmissionRightChain_string"] = obj["TransmissionRightChain"].join ();
                if (obj["SecurityConstraints"]) obj["SecurityConstraints_string"] = obj["SecurityConstraints"].join ();
                if (obj["AggregateNode"]) obj["AggregateNode_string"] = obj["AggregateNode"].join ();
                if (obj["MktConnectivityNode"]) obj["MktConnectivityNode_string"] = obj["MktConnectivityNode"].join ();
                if (obj["LocalReliabilityArea"]) obj["LocalReliabilityArea_string"] = obj["LocalReliabilityArea"].join ();
                if (obj["MSSAggregation"]) obj["MSSAggregation_string"] = obj["MSSAggregation"].join ();
                if (obj["TransmissionContractRight"]) obj["TransmissionContractRight_string"] = obj["TransmissionContractRight"].join ();
                if (obj["CommodityDefinition"]) obj["CommodityDefinition_string"] = obj["CommodityDefinition"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Pnodes_string"];
                delete obj["EnergyMarkets_string"];
                delete obj["FuelRegion_string"];
                delete obj["ResourceGroupReqs_string"];
                delete obj["AdjacentCASet_string"];
                delete obj["SecurityConstraintsLinear_string"];
                delete obj["HostControlArea_string"];
                delete obj["SubControlArea_string"];
                delete obj["TransmissionRightChain_string"];
                delete obj["SecurityConstraints_string"];
                delete obj["AggregateNode_string"];
                delete obj["MktConnectivityNode_string"];
                delete obj["LocalReliabilityArea_string"];
                delete obj["MSSAggregation_string"];
                delete obj["TransmissionContractRight_string"];
                delete obj["CommodityDefinition_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RTO_collapse" aria-expanded="true" aria-controls="{{id}}_RTO_collapse" style="margin-left: 10px;">RTO</a></legend>
                    <div id="{{id}}_RTO_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + MarketCommon.MarketParticipant.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ResourceGroupReqs'>ResourceGroupReqs: </label><div class='col-sm-8'><input id='{{id}}_ResourceGroupReqs' class='form-control' type='text'{{#ResourceGroupReqs}} value='{{ResourceGroupReqs_string}}'{{/ResourceGroupReqs}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "RTO" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ResourceGroupReqs").value; if ("" !== temp) obj["ResourceGroupReqs"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Pnodes", "0..*", "0..1", "Pnode", "RTO"],
                            ["EnergyMarkets", "0..*", "0..1", "EnergyMarket", "RTO"],
                            ["FuelRegion", "0..*", "1", "FuelRegion", "RTO"],
                            ["ResourceGroupReqs", "0..*", "0..*", "ResourceGroupReq", "RTOs"],
                            ["AdjacentCASet", "0..*", "1", "AdjacentCASet", "RTO"],
                            ["SecurityConstraintsLinear", "0..*", "0..1", "SecurityConstraintSum", "RTO"],
                            ["HostControlArea", "0..*", "1", "HostControlArea", "RTO"],
                            ["SubControlArea", "0..*", "1", "SubControlArea", "RTO"],
                            ["TransmissionRightChain", "0..*", "1", "TransmissionRightChain", "RTO"],
                            ["SecurityConstraints", "0..*", "0..1", "SecurityConstraints", "RTO"],
                            ["AggregateNode", "0..*", "1", "AggregateNode", "RTO"],
                            ["MktConnectivityNode", "0..*", "1", "MktConnectivityNode", "RTO"],
                            ["LocalReliabilityArea", "0..*", "1", "LocalReliabilityArea", "RTO"],
                            ["MSSAggregation", "0..*", "1", "MSSAggregation", "RTO"],
                            ["TransmissionContractRight", "0..*", "1", "ContractRight", "RTO"],
                            ["CommodityDefinition", "0..*", "1", "CommodityDefinition", "RTO"]
                        ]
                    )
                );
            }
        }

        /**
         * This class model the ownership percent and type of ownership between resource and organisation.
         *
         */
        class OrgResOwnership extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OrgResOwnership;
                if (null == bucket)
                   cim_data.OrgResOwnership = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OrgResOwnership[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "OrgResOwnership";
                base.parse_attribute (/<cim:OrgResOwnership.asscType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "asscType", sub, context);
                base.parse_attribute (/<cim:OrgResOwnership.masterSchedulingCoordinatorFlag\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "masterSchedulingCoordinatorFlag", sub, context);
                base.parse_element (/<cim:OrgResOwnership.ownershipPercent>([\s\S]*?)<\/cim:OrgResOwnership.ownershipPercent>/g, obj, "ownershipPercent", base.to_string, sub, context);
                base.parse_attribute (/<cim:OrgResOwnership.RegisteredResource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                let bucket = context.parsed.OrgResOwnership;
                if (null == bucket)
                   context.parsed.OrgResOwnership = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "OrgResOwnership", "asscType", "asscType", fields);
                base.export_attribute (obj, "OrgResOwnership", "masterSchedulingCoordinatorFlag", "masterSchedulingCoordinatorFlag", fields);
                base.export_element (obj, "OrgResOwnership", "ownershipPercent", "ownershipPercent",  base.from_string, fields);
                base.export_attribute (obj, "OrgResOwnership", "RegisteredResource", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OrgResOwnership_collapse" aria-expanded="true" aria-controls="OrgResOwnership_collapse" style="margin-left: 10px;">OrgResOwnership</a></legend>
                    <div id="OrgResOwnership_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#asscType}}<div><b>asscType</b>: {{asscType}}</div>{{/asscType}}
                    {{#masterSchedulingCoordinatorFlag}}<div><b>masterSchedulingCoordinatorFlag</b>: {{masterSchedulingCoordinatorFlag}}</div>{{/masterSchedulingCoordinatorFlag}}
                    {{#ownershipPercent}}<div><b>ownershipPercent</b>: {{ownershipPercent}}</div>{{/ownershipPercent}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RegisteredResource}}");}); return false;'>{{RegisteredResource}}</a></div>{{/RegisteredResource}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["asscTypeResourceAssnType"] = [{ id: '', selected: (!obj["asscType"])}]; for (let property in MktDomain.ResourceAssnType) obj["asscTypeResourceAssnType"].push ({ id: property, selected: obj["asscType"] && obj["asscType"].endsWith ('.' + property)});
                obj["masterSchedulingCoordinatorFlagYesNo"] = [{ id: '', selected: (!obj["masterSchedulingCoordinatorFlag"])}]; for (let property in MktDomain.YesNo) obj["masterSchedulingCoordinatorFlagYesNo"].push ({ id: property, selected: obj["masterSchedulingCoordinatorFlag"] && obj["masterSchedulingCoordinatorFlag"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["asscTypeResourceAssnType"];
                delete obj["masterSchedulingCoordinatorFlagYesNo"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OrgResOwnership_collapse" aria-expanded="true" aria-controls="{{id}}_OrgResOwnership_collapse" style="margin-left: 10px;">OrgResOwnership</a></legend>
                    <div id="{{id}}_OrgResOwnership_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_asscType'>asscType: </label><div class='col-sm-8'><select id='{{id}}_asscType' class='form-control custom-select'>{{#asscTypeResourceAssnType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/asscTypeResourceAssnType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_masterSchedulingCoordinatorFlag'>masterSchedulingCoordinatorFlag: </label><div class='col-sm-8'><select id='{{id}}_masterSchedulingCoordinatorFlag' class='form-control custom-select'>{{#masterSchedulingCoordinatorFlagYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/masterSchedulingCoordinatorFlagYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ownershipPercent'>ownershipPercent: </label><div class='col-sm-8'><input id='{{id}}_ownershipPercent' class='form-control' type='text'{{#ownershipPercent}} value='{{ownershipPercent}}'{{/ownershipPercent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='{{id}}_RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OrgResOwnership" };
                super.submit (id, obj);
                temp = MktDomain.ResourceAssnType[document.getElementById (id + "_asscType").value]; if (temp) obj["asscType"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#ResourceAssnType." + temp; else delete obj["asscType"];
                temp = MktDomain.YesNo[document.getElementById (id + "_masterSchedulingCoordinatorFlag").value]; if (temp) obj["masterSchedulingCoordinatorFlag"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["masterSchedulingCoordinatorFlag"];
                temp = document.getElementById (id + "_ownershipPercent").value; if ("" !== temp) obj["ownershipPercent"] = temp;
                temp = document.getElementById (id + "_RegisteredResource").value; if ("" !== temp) obj["RegisteredResource"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegisteredResource", "1", "0..*", "RegisteredResource", "OrgResOwnership"]
                        ]
                    )
                );
            }
        }

        /**
         * The energy consumption of a generating resource to complete a start-up from the StartUpEnergyCurve.
         *
         * Definition of the StartUpEnergyCurve includes, xvalue as the cooling time and y1value as the MW value.
         *
         */
        class StartUpEnergyCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.StartUpEnergyCurve;
                if (null == bucket)
                   cim_data.StartUpEnergyCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.StartUpEnergyCurve[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "StartUpEnergyCurve";
                base.parse_attribute (/<cim:StartUpEnergyCurve.RegisteredGenerator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);
                let bucket = context.parsed.StartUpEnergyCurve;
                if (null == bucket)
                   context.parsed.StartUpEnergyCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "StartUpEnergyCurve", "RegisteredGenerator", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#StartUpEnergyCurve_collapse" aria-expanded="true" aria-controls="StartUpEnergyCurve_collapse" style="margin-left: 10px;">StartUpEnergyCurve</a></legend>
                    <div id="StartUpEnergyCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RegisteredGenerator}}");}); return false;'>{{RegisteredGenerator}}</a></div>{{/RegisteredGenerator}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_StartUpEnergyCurve_collapse" aria-expanded="true" aria-controls="{{id}}_StartUpEnergyCurve_collapse" style="margin-left: 10px;">StartUpEnergyCurve</a></legend>
                    <div id="{{id}}_StartUpEnergyCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredGenerator'>RegisteredGenerator: </label><div class='col-sm-8'><input id='{{id}}_RegisteredGenerator' class='form-control' type='text'{{#RegisteredGenerator}} value='{{RegisteredGenerator}}'{{/RegisteredGenerator}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "StartUpEnergyCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_RegisteredGenerator").value; if ("" !== temp) obj["RegisteredGenerator"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegisteredGenerator", "0..1", "0..1", "RegisteredGenerator", "StartUpEnergyCurve"]
                        ]
                    )
                );
            }
        }

        /**
         * A flowgate, is single or group of transmission elements intended to model MW flow impact relating to transmission limitations and transmission service usage.
         *
         */
        class Flowgate extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Flowgate;
                if (null == bucket)
                   cim_data.Flowgate = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Flowgate[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "Flowgate";
                base.parse_attribute (/<cim:Flowgate.direction\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "direction", sub, context);
                base.parse_element (/<cim:Flowgate.exportMWRating>([\s\S]*?)<\/cim:Flowgate.exportMWRating>/g, obj, "exportMWRating", base.to_string, sub, context);
                base.parse_element (/<cim:Flowgate.importMWRating>([\s\S]*?)<\/cim:Flowgate.importMWRating>/g, obj, "importMWRating", base.to_string, sub, context);
                base.parse_attributes (/<cim:Flowgate.ViolationLimits\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ViolationLimits", sub, context);
                base.parse_attributes (/<cim:Flowgate.TranmissionRightEntitlement\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TranmissionRightEntitlement", sub, context);
                base.parse_attribute (/<cim:Flowgate.HostControlArea\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "HostControlArea", sub, context);
                base.parse_attributes (/<cim:Flowgate.GeneratingUnitDynamicValues\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingUnitDynamicValues", sub, context);
                base.parse_attributes (/<cim:Flowgate.FlowgateRelief\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FlowgateRelief", sub, context);
                base.parse_attributes (/<cim:Flowgate.TransmissionCapacity\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionCapacity", sub, context);
                base.parse_attributes (/<cim:Flowgate.MktPowerTransformer\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MktPowerTransformer", sub, context);
                base.parse_attributes (/<cim:Flowgate.MktLine\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MktLine", sub, context);
                base.parse_attributes (/<cim:Flowgate.ContractDistributionFactor\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ContractDistributionFactor", sub, context);
                base.parse_attribute (/<cim:Flowgate.To_SubControlArea\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "To_SubControlArea", sub, context);
                base.parse_attribute (/<cim:Flowgate.CongestionRevenueRight\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CongestionRevenueRight", sub, context);
                base.parse_attributes (/<cim:Flowgate.InterTie\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "InterTie", sub, context);
                base.parse_attributes (/<cim:Flowgate.FTRs\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FTRs", sub, context);
                base.parse_attributes (/<cim:Flowgate.InterTieResults\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "InterTieResults", sub, context);
                base.parse_attributes (/<cim:Flowgate.RegisteredInterTie\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredInterTie", sub, context);
                base.parse_attribute (/<cim:Flowgate.SecurityConstraints\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SecurityConstraints", sub, context);
                base.parse_attributes (/<cim:Flowgate.FlowgateValue\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FlowgateValue", sub, context);
                base.parse_attributes (/<cim:Flowgate.ConstraintResults\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ConstraintResults", sub, context);
                base.parse_attributes (/<cim:Flowgate.MktTerminal\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MktTerminal", sub, context);
                base.parse_attribute (/<cim:Flowgate.From_SubControlArea\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "From_SubControlArea", sub, context);
                base.parse_attribute (/<cim:Flowgate.GenericConstraints\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GenericConstraints", sub, context);
                let bucket = context.parsed.Flowgate;
                if (null == bucket)
                   context.parsed.Flowgate = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Flowgate", "direction", "direction", fields);
                base.export_element (obj, "Flowgate", "exportMWRating", "exportMWRating",  base.from_string, fields);
                base.export_element (obj, "Flowgate", "importMWRating", "importMWRating",  base.from_string, fields);
                base.export_attributes (obj, "Flowgate", "ViolationLimits", "ViolationLimits", fields);
                base.export_attributes (obj, "Flowgate", "TranmissionRightEntitlement", "TranmissionRightEntitlement", fields);
                base.export_attribute (obj, "Flowgate", "HostControlArea", "HostControlArea", fields);
                base.export_attributes (obj, "Flowgate", "GeneratingUnitDynamicValues", "GeneratingUnitDynamicValues", fields);
                base.export_attributes (obj, "Flowgate", "FlowgateRelief", "FlowgateRelief", fields);
                base.export_attributes (obj, "Flowgate", "TransmissionCapacity", "TransmissionCapacity", fields);
                base.export_attributes (obj, "Flowgate", "MktPowerTransformer", "MktPowerTransformer", fields);
                base.export_attributes (obj, "Flowgate", "MktLine", "MktLine", fields);
                base.export_attributes (obj, "Flowgate", "ContractDistributionFactor", "ContractDistributionFactor", fields);
                base.export_attribute (obj, "Flowgate", "To_SubControlArea", "To_SubControlArea", fields);
                base.export_attribute (obj, "Flowgate", "CongestionRevenueRight", "CongestionRevenueRight", fields);
                base.export_attributes (obj, "Flowgate", "InterTie", "InterTie", fields);
                base.export_attributes (obj, "Flowgate", "FTRs", "FTRs", fields);
                base.export_attributes (obj, "Flowgate", "InterTieResults", "InterTieResults", fields);
                base.export_attributes (obj, "Flowgate", "RegisteredInterTie", "RegisteredInterTie", fields);
                base.export_attribute (obj, "Flowgate", "SecurityConstraints", "SecurityConstraints", fields);
                base.export_attributes (obj, "Flowgate", "FlowgateValue", "FlowgateValue", fields);
                base.export_attributes (obj, "Flowgate", "ConstraintResults", "ConstraintResults", fields);
                base.export_attributes (obj, "Flowgate", "MktTerminal", "MktTerminal", fields);
                base.export_attribute (obj, "Flowgate", "From_SubControlArea", "From_SubControlArea", fields);
                base.export_attribute (obj, "Flowgate", "GenericConstraints", "GenericConstraints", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Flowgate_collapse" aria-expanded="true" aria-controls="Flowgate_collapse" style="margin-left: 10px;">Flowgate</a></legend>
                    <div id="Flowgate_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#direction}}<div><b>direction</b>: {{direction}}</div>{{/direction}}
                    {{#exportMWRating}}<div><b>exportMWRating</b>: {{exportMWRating}}</div>{{/exportMWRating}}
                    {{#importMWRating}}<div><b>importMWRating</b>: {{importMWRating}}</div>{{/importMWRating}}
                    {{#ViolationLimits}}<div><b>ViolationLimits</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ViolationLimits}}
                    {{#TranmissionRightEntitlement}}<div><b>TranmissionRightEntitlement</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TranmissionRightEntitlement}}
                    {{#HostControlArea}}<div><b>HostControlArea</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{HostControlArea}}");}); return false;'>{{HostControlArea}}</a></div>{{/HostControlArea}}
                    {{#GeneratingUnitDynamicValues}}<div><b>GeneratingUnitDynamicValues</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/GeneratingUnitDynamicValues}}
                    {{#FlowgateRelief}}<div><b>FlowgateRelief</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/FlowgateRelief}}
                    {{#TransmissionCapacity}}<div><b>TransmissionCapacity</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TransmissionCapacity}}
                    {{#MktPowerTransformer}}<div><b>MktPowerTransformer</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MktPowerTransformer}}
                    {{#MktLine}}<div><b>MktLine</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MktLine}}
                    {{#ContractDistributionFactor}}<div><b>ContractDistributionFactor</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ContractDistributionFactor}}
                    {{#To_SubControlArea}}<div><b>To_SubControlArea</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{To_SubControlArea}}");}); return false;'>{{To_SubControlArea}}</a></div>{{/To_SubControlArea}}
                    {{#CongestionRevenueRight}}<div><b>CongestionRevenueRight</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{CongestionRevenueRight}}");}); return false;'>{{CongestionRevenueRight}}</a></div>{{/CongestionRevenueRight}}
                    {{#InterTie}}<div><b>InterTie</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/InterTie}}
                    {{#FTRs}}<div><b>FTRs</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/FTRs}}
                    {{#InterTieResults}}<div><b>InterTieResults</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/InterTieResults}}
                    {{#RegisteredInterTie}}<div><b>RegisteredInterTie</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RegisteredInterTie}}
                    {{#SecurityConstraints}}<div><b>SecurityConstraints</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{SecurityConstraints}}");}); return false;'>{{SecurityConstraints}}</a></div>{{/SecurityConstraints}}
                    {{#FlowgateValue}}<div><b>FlowgateValue</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/FlowgateValue}}
                    {{#ConstraintResults}}<div><b>ConstraintResults</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ConstraintResults}}
                    {{#MktTerminal}}<div><b>MktTerminal</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MktTerminal}}
                    {{#From_SubControlArea}}<div><b>From_SubControlArea</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{From_SubControlArea}}");}); return false;'>{{From_SubControlArea}}</a></div>{{/From_SubControlArea}}
                    {{#GenericConstraints}}<div><b>GenericConstraints</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{GenericConstraints}}");}); return false;'>{{GenericConstraints}}</a></div>{{/GenericConstraints}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["directionInterTieDirection"] = [{ id: '', selected: (!obj["direction"])}]; for (let property in MktDomain.InterTieDirection) obj["directionInterTieDirection"].push ({ id: property, selected: obj["direction"] && obj["direction"].endsWith ('.' + property)});
                if (obj["ViolationLimits"]) obj["ViolationLimits_string"] = obj["ViolationLimits"].join ();
                if (obj["TranmissionRightEntitlement"]) obj["TranmissionRightEntitlement_string"] = obj["TranmissionRightEntitlement"].join ();
                if (obj["GeneratingUnitDynamicValues"]) obj["GeneratingUnitDynamicValues_string"] = obj["GeneratingUnitDynamicValues"].join ();
                if (obj["FlowgateRelief"]) obj["FlowgateRelief_string"] = obj["FlowgateRelief"].join ();
                if (obj["TransmissionCapacity"]) obj["TransmissionCapacity_string"] = obj["TransmissionCapacity"].join ();
                if (obj["MktPowerTransformer"]) obj["MktPowerTransformer_string"] = obj["MktPowerTransformer"].join ();
                if (obj["MktLine"]) obj["MktLine_string"] = obj["MktLine"].join ();
                if (obj["ContractDistributionFactor"]) obj["ContractDistributionFactor_string"] = obj["ContractDistributionFactor"].join ();
                if (obj["InterTie"]) obj["InterTie_string"] = obj["InterTie"].join ();
                if (obj["FTRs"]) obj["FTRs_string"] = obj["FTRs"].join ();
                if (obj["InterTieResults"]) obj["InterTieResults_string"] = obj["InterTieResults"].join ();
                if (obj["RegisteredInterTie"]) obj["RegisteredInterTie_string"] = obj["RegisteredInterTie"].join ();
                if (obj["FlowgateValue"]) obj["FlowgateValue_string"] = obj["FlowgateValue"].join ();
                if (obj["ConstraintResults"]) obj["ConstraintResults_string"] = obj["ConstraintResults"].join ();
                if (obj["MktTerminal"]) obj["MktTerminal_string"] = obj["MktTerminal"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["directionInterTieDirection"];
                delete obj["ViolationLimits_string"];
                delete obj["TranmissionRightEntitlement_string"];
                delete obj["GeneratingUnitDynamicValues_string"];
                delete obj["FlowgateRelief_string"];
                delete obj["TransmissionCapacity_string"];
                delete obj["MktPowerTransformer_string"];
                delete obj["MktLine_string"];
                delete obj["ContractDistributionFactor_string"];
                delete obj["InterTie_string"];
                delete obj["FTRs_string"];
                delete obj["InterTieResults_string"];
                delete obj["RegisteredInterTie_string"];
                delete obj["FlowgateValue_string"];
                delete obj["ConstraintResults_string"];
                delete obj["MktTerminal_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Flowgate_collapse" aria-expanded="true" aria-controls="{{id}}_Flowgate_collapse" style="margin-left: 10px;">Flowgate</a></legend>
                    <div id="{{id}}_Flowgate_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_direction'>direction: </label><div class='col-sm-8'><select id='{{id}}_direction' class='form-control custom-select'>{{#directionInterTieDirection}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/directionInterTieDirection}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_exportMWRating'>exportMWRating: </label><div class='col-sm-8'><input id='{{id}}_exportMWRating' class='form-control' type='text'{{#exportMWRating}} value='{{exportMWRating}}'{{/exportMWRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_importMWRating'>importMWRating: </label><div class='col-sm-8'><input id='{{id}}_importMWRating' class='form-control' type='text'{{#importMWRating}} value='{{importMWRating}}'{{/importMWRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_HostControlArea'>HostControlArea: </label><div class='col-sm-8'><input id='{{id}}_HostControlArea' class='form-control' type='text'{{#HostControlArea}} value='{{HostControlArea}}'{{/HostControlArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MktPowerTransformer'>MktPowerTransformer: </label><div class='col-sm-8'><input id='{{id}}_MktPowerTransformer' class='form-control' type='text'{{#MktPowerTransformer}} value='{{MktPowerTransformer_string}}'{{/MktPowerTransformer}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MktLine'>MktLine: </label><div class='col-sm-8'><input id='{{id}}_MktLine' class='form-control' type='text'{{#MktLine}} value='{{MktLine_string}}'{{/MktLine}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_To_SubControlArea'>To_SubControlArea: </label><div class='col-sm-8'><input id='{{id}}_To_SubControlArea' class='form-control' type='text'{{#To_SubControlArea}} value='{{To_SubControlArea}}'{{/To_SubControlArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CongestionRevenueRight'>CongestionRevenueRight: </label><div class='col-sm-8'><input id='{{id}}_CongestionRevenueRight' class='form-control' type='text'{{#CongestionRevenueRight}} value='{{CongestionRevenueRight}}'{{/CongestionRevenueRight}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SecurityConstraints'>SecurityConstraints: </label><div class='col-sm-8'><input id='{{id}}_SecurityConstraints' class='form-control' type='text'{{#SecurityConstraints}} value='{{SecurityConstraints}}'{{/SecurityConstraints}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_From_SubControlArea'>From_SubControlArea: </label><div class='col-sm-8'><input id='{{id}}_From_SubControlArea' class='form-control' type='text'{{#From_SubControlArea}} value='{{From_SubControlArea}}'{{/From_SubControlArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GenericConstraints'>GenericConstraints: </label><div class='col-sm-8'><input id='{{id}}_GenericConstraints' class='form-control' type='text'{{#GenericConstraints}} value='{{GenericConstraints}}'{{/GenericConstraints}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Flowgate" };
                super.submit (id, obj);
                temp = MktDomain.InterTieDirection[document.getElementById (id + "_direction").value]; if (temp) obj["direction"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#InterTieDirection." + temp; else delete obj["direction"];
                temp = document.getElementById (id + "_exportMWRating").value; if ("" !== temp) obj["exportMWRating"] = temp;
                temp = document.getElementById (id + "_importMWRating").value; if ("" !== temp) obj["importMWRating"] = temp;
                temp = document.getElementById (id + "_HostControlArea").value; if ("" !== temp) obj["HostControlArea"] = temp;
                temp = document.getElementById (id + "_MktPowerTransformer").value; if ("" !== temp) obj["MktPowerTransformer"] = temp.split (",");
                temp = document.getElementById (id + "_MktLine").value; if ("" !== temp) obj["MktLine"] = temp.split (",");
                temp = document.getElementById (id + "_To_SubControlArea").value; if ("" !== temp) obj["To_SubControlArea"] = temp;
                temp = document.getElementById (id + "_CongestionRevenueRight").value; if ("" !== temp) obj["CongestionRevenueRight"] = temp;
                temp = document.getElementById (id + "_SecurityConstraints").value; if ("" !== temp) obj["SecurityConstraints"] = temp;
                temp = document.getElementById (id + "_From_SubControlArea").value; if ("" !== temp) obj["From_SubControlArea"] = temp;
                temp = document.getElementById (id + "_GenericConstraints").value; if ("" !== temp) obj["GenericConstraints"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ViolationLimits", "0..*", "0..1", "ViolationLimit", "Flowgate"],
                            ["TranmissionRightEntitlement", "0..*", "0..1", "TransmissionInterfaceRightEntitlement", "Flowgate"],
                            ["HostControlArea", "0..1", "0..*", "HostControlArea", "Flowgate"],
                            ["GeneratingUnitDynamicValues", "0..*", "0..1", "GeneratingUnitDynamicValues", "Flowgate"],
                            ["FlowgateRelief", "0..*", "1", "FlowgateRelief", "Flowgate"],
                            ["TransmissionCapacity", "0..*", "0..1", "TransmissionCapacity", "Flowgate"],
                            ["MktPowerTransformer", "0..*", "0..*", "MktPowerTransformer", "Flowgate"],
                            ["MktLine", "0..*", "0..*", "MktLine", "Flowgate"],
                            ["ContractDistributionFactor", "0..*", "0..1", "ContractDistributionFactor", "Flowgate"],
                            ["To_SubControlArea", "0..1", "0..*", "SubControlArea", "To_Flowgate"],
                            ["CongestionRevenueRight", "0..1", "0..1", "CongestionRevenueRight", "Flowgate"],
                            ["InterTie", "0..*", "0..1", "SchedulingPoint", "Flowgate"],
                            ["FTRs", "0..*", "0..1", "FTR", "Flowgate"],
                            ["InterTieResults", "1..*", "1", "InterTieResults", "Flowgate"],
                            ["RegisteredInterTie", "0..*", "1", "RegisteredInterTie", "Flowgate"],
                            ["SecurityConstraints", "0..1", "0..1", "SecurityConstraints", "Flowgate"],
                            ["FlowgateValue", "0..*", "1", "FlowgateValue", "Flowgate"],
                            ["ConstraintResults", "1..*", "1", "ConstraintResults", "Flowgate"],
                            ["MktTerminal", "0..*", "0..1", "MktTerminal", "Flowgate"],
                            ["From_SubControlArea", "0..1", "0..*", "SubControlArea", "From_Flowgate"],
                            ["GenericConstraints", "0..1", "0..*", "GenericConstraints", "Flowgate"]
                        ]
                    )
                );
            }
        }

        /**
         * Transmission Access Charge Area.
         *
         * Charges assessed, on behalf of the Participating Transmission Owner, to parties who require access to the controlled grid.
         *
         */
        class TACArea extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.TACArea;
                if (null == bucket)
                   cim_data.TACArea = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TACArea[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TACArea";
                base.parse_attributes (/<cim:TACArea.AreaLoadCurve\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AreaLoadCurve", sub, context);
                base.parse_attributes (/<cim:TACArea.AggregatedPnode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AggregatedPnode", sub, context);
                let bucket = context.parsed.TACArea;
                if (null == bucket)
                   context.parsed.TACArea = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "TACArea", "AreaLoadCurve", "AreaLoadCurve", fields);
                base.export_attributes (obj, "TACArea", "AggregatedPnode", "AggregatedPnode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TACArea_collapse" aria-expanded="true" aria-controls="TACArea_collapse" style="margin-left: 10px;">TACArea</a></legend>
                    <div id="TACArea_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#AreaLoadCurve}}<div><b>AreaLoadCurve</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AreaLoadCurve}}
                    {{#AggregatedPnode}}<div><b>AggregatedPnode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AggregatedPnode}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["AreaLoadCurve"]) obj["AreaLoadCurve_string"] = obj["AreaLoadCurve"].join ();
                if (obj["AggregatedPnode"]) obj["AggregatedPnode_string"] = obj["AggregatedPnode"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["AreaLoadCurve_string"];
                delete obj["AggregatedPnode_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TACArea_collapse" aria-expanded="true" aria-controls="{{id}}_TACArea_collapse" style="margin-left: 10px;">TACArea</a></legend>
                    <div id="{{id}}_TACArea_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AggregatedPnode'>AggregatedPnode: </label><div class='col-sm-8'><input id='{{id}}_AggregatedPnode' class='form-control' type='text'{{#AggregatedPnode}} value='{{AggregatedPnode_string}}'{{/AggregatedPnode}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "TACArea" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_AggregatedPnode").value; if ("" !== temp) obj["AggregatedPnode"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AreaLoadCurve", "0..*", "0..1", "AreaLoadCurve", "TACArea"],
                            ["AggregatedPnode", "0..*", "0..*", "AggregatedPnode", "TACArea"]
                        ]
                    )
                );
            }
        }

        /**
         * Model to support processing of reliability must run units.
         *
         */
        class RMRStartUpCostCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.RMRStartUpCostCurve;
                if (null == bucket)
                   cim_data.RMRStartUpCostCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RMRStartUpCostCurve[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "RMRStartUpCostCurve";
                base.parse_attribute (/<cim:RMRStartUpCostCurve.RegisteredGenerator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);
                let bucket = context.parsed.RMRStartUpCostCurve;
                if (null == bucket)
                   context.parsed.RMRStartUpCostCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "RMRStartUpCostCurve", "RegisteredGenerator", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RMRStartUpCostCurve_collapse" aria-expanded="true" aria-controls="RMRStartUpCostCurve_collapse" style="margin-left: 10px;">RMRStartUpCostCurve</a></legend>
                    <div id="RMRStartUpCostCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RegisteredGenerator}}");}); return false;'>{{RegisteredGenerator}}</a></div>{{/RegisteredGenerator}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RMRStartUpCostCurve_collapse" aria-expanded="true" aria-controls="{{id}}_RMRStartUpCostCurve_collapse" style="margin-left: 10px;">RMRStartUpCostCurve</a></legend>
                    <div id="{{id}}_RMRStartUpCostCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredGenerator'>RegisteredGenerator: </label><div class='col-sm-8'><input id='{{id}}_RegisteredGenerator' class='form-control' type='text'{{#RegisteredGenerator}} value='{{RegisteredGenerator}}'{{/RegisteredGenerator}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "RMRStartUpCostCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_RegisteredGenerator").value; if ("" !== temp) obj["RegisteredGenerator"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegisteredGenerator", "0..1", "0..1", "RegisteredGenerator", "RMRStartUpCostCurve"]
                        ]
                    )
                );
            }
        }

        /**
         * Forbbiden region is operating ranges where the units are unable to maintain steady operation without causing equipment damage.
         *
         * The four attributes that define a forbidden region are the low MW, the High MW, the crossing time, and the crossing cost.
         *
         */
        class ForbiddenRegion extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ForbiddenRegion;
                if (null == bucket)
                   cim_data.ForbiddenRegion = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ForbiddenRegion[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ForbiddenRegion";
                base.parse_element (/<cim:ForbiddenRegion.crossingCost>([\s\S]*?)<\/cim:ForbiddenRegion.crossingCost>/g, obj, "crossingCost", base.to_float, sub, context);
                base.parse_element (/<cim:ForbiddenRegion.crossTime>([\s\S]*?)<\/cim:ForbiddenRegion.crossTime>/g, obj, "crossTime", base.to_string, sub, context);
                base.parse_element (/<cim:ForbiddenRegion.highMW>([\s\S]*?)<\/cim:ForbiddenRegion.highMW>/g, obj, "highMW", base.to_float, sub, context);
                base.parse_element (/<cim:ForbiddenRegion.lowMW>([\s\S]*?)<\/cim:ForbiddenRegion.lowMW>/g, obj, "lowMW", base.to_float, sub, context);
                base.parse_attributes (/<cim:ForbiddenRegion.RegisteredResource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                let bucket = context.parsed.ForbiddenRegion;
                if (null == bucket)
                   context.parsed.ForbiddenRegion = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ForbiddenRegion", "crossingCost", "crossingCost",  base.from_float, fields);
                base.export_element (obj, "ForbiddenRegion", "crossTime", "crossTime",  base.from_string, fields);
                base.export_element (obj, "ForbiddenRegion", "highMW", "highMW",  base.from_float, fields);
                base.export_element (obj, "ForbiddenRegion", "lowMW", "lowMW",  base.from_float, fields);
                base.export_attributes (obj, "ForbiddenRegion", "RegisteredResource", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ForbiddenRegion_collapse" aria-expanded="true" aria-controls="ForbiddenRegion_collapse" style="margin-left: 10px;">ForbiddenRegion</a></legend>
                    <div id="ForbiddenRegion_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#crossingCost}}<div><b>crossingCost</b>: {{crossingCost}}</div>{{/crossingCost}}
                    {{#crossTime}}<div><b>crossTime</b>: {{crossTime}}</div>{{/crossTime}}
                    {{#highMW}}<div><b>highMW</b>: {{highMW}}</div>{{/highMW}}
                    {{#lowMW}}<div><b>lowMW</b>: {{lowMW}}</div>{{/lowMW}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RegisteredResource}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["RegisteredResource"]) obj["RegisteredResource_string"] = obj["RegisteredResource"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["RegisteredResource_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ForbiddenRegion_collapse" aria-expanded="true" aria-controls="{{id}}_ForbiddenRegion_collapse" style="margin-left: 10px;">ForbiddenRegion</a></legend>
                    <div id="{{id}}_ForbiddenRegion_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_crossingCost'>crossingCost: </label><div class='col-sm-8'><input id='{{id}}_crossingCost' class='form-control' type='text'{{#crossingCost}} value='{{crossingCost}}'{{/crossingCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_crossTime'>crossTime: </label><div class='col-sm-8'><input id='{{id}}_crossTime' class='form-control' type='text'{{#crossTime}} value='{{crossTime}}'{{/crossTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_highMW'>highMW: </label><div class='col-sm-8'><input id='{{id}}_highMW' class='form-control' type='text'{{#highMW}} value='{{highMW}}'{{/highMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lowMW'>lowMW: </label><div class='col-sm-8'><input id='{{id}}_lowMW' class='form-control' type='text'{{#lowMW}} value='{{lowMW}}'{{/lowMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='{{id}}_RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource_string}}'{{/RegisteredResource}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ForbiddenRegion" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_crossingCost").value; if ("" !== temp) obj["crossingCost"] = temp;
                temp = document.getElementById (id + "_crossTime").value; if ("" !== temp) obj["crossTime"] = temp;
                temp = document.getElementById (id + "_highMW").value; if ("" !== temp) obj["highMW"] = temp;
                temp = document.getElementById (id + "_lowMW").value; if ("" !== temp) obj["lowMW"] = temp;
                temp = document.getElementById (id + "_RegisteredResource").value; if ("" !== temp) obj["RegisteredResource"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegisteredResource", "0..*", "0..*", "RegisteredResource", "ForbiddenRegion"]
                        ]
                    )
                );
            }
        }

        /**
         * To model the startup costs of a generation resource.
         *
         */
        class ResourceStartupCost extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ResourceStartupCost;
                if (null == bucket)
                   cim_data.ResourceStartupCost = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ResourceStartupCost[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ResourceStartupCost";
                base.parse_element (/<cim:ResourceStartupCost.fuelColdStartup>([\s\S]*?)<\/cim:ResourceStartupCost.fuelColdStartup>/g, obj, "fuelColdStartup", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceStartupCost.fuelHotStartup>([\s\S]*?)<\/cim:ResourceStartupCost.fuelHotStartup>/g, obj, "fuelHotStartup", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceStartupCost.fuelIntermediateStartup>([\s\S]*?)<\/cim:ResourceStartupCost.fuelIntermediateStartup>/g, obj, "fuelIntermediateStartup", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceStartupCost.fuelLowSustainedLimit>([\s\S]*?)<\/cim:ResourceStartupCost.fuelLowSustainedLimit>/g, obj, "fuelLowSustainedLimit", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceStartupCost.gasPercentColdStartup>([\s\S]*?)<\/cim:ResourceStartupCost.gasPercentColdStartup>/g, obj, "gasPercentColdStartup", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceStartupCost.gasPercentHotStartup>([\s\S]*?)<\/cim:ResourceStartupCost.gasPercentHotStartup>/g, obj, "gasPercentHotStartup", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceStartupCost.gasPercentIntermediateStartup>([\s\S]*?)<\/cim:ResourceStartupCost.gasPercentIntermediateStartup>/g, obj, "gasPercentIntermediateStartup", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceStartupCost.gasPercentLowSustainedLimit>([\s\S]*?)<\/cim:ResourceStartupCost.gasPercentLowSustainedLimit>/g, obj, "gasPercentLowSustainedLimit", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceStartupCost.oilPercentColdStartup>([\s\S]*?)<\/cim:ResourceStartupCost.oilPercentColdStartup>/g, obj, "oilPercentColdStartup", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceStartupCost.oilPercentHotStartup>([\s\S]*?)<\/cim:ResourceStartupCost.oilPercentHotStartup>/g, obj, "oilPercentHotStartup", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceStartupCost.oilPercentIntermediateStartup>([\s\S]*?)<\/cim:ResourceStartupCost.oilPercentIntermediateStartup>/g, obj, "oilPercentIntermediateStartup", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceStartupCost.oilPercentLowSustainedLimit>([\s\S]*?)<\/cim:ResourceStartupCost.oilPercentLowSustainedLimit>/g, obj, "oilPercentLowSustainedLimit", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceStartupCost.solidfuelPercentColdStartup>([\s\S]*?)<\/cim:ResourceStartupCost.solidfuelPercentColdStartup>/g, obj, "solidfuelPercentColdStartup", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceStartupCost.solidfuelPercentHotStartup>([\s\S]*?)<\/cim:ResourceStartupCost.solidfuelPercentHotStartup>/g, obj, "solidfuelPercentHotStartup", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceStartupCost.solidfuelPercentIntermediateStartup>([\s\S]*?)<\/cim:ResourceStartupCost.solidfuelPercentIntermediateStartup>/g, obj, "solidfuelPercentIntermediateStartup", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceStartupCost.solidfuelPercentLowSustainedLimit>([\s\S]*?)<\/cim:ResourceStartupCost.solidfuelPercentLowSustainedLimit>/g, obj, "solidfuelPercentLowSustainedLimit", base.to_string, sub, context);
                base.parse_attribute (/<cim:ResourceStartupCost.ResourceVerifiableCosts\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ResourceVerifiableCosts", sub, context);
                let bucket = context.parsed.ResourceStartupCost;
                if (null == bucket)
                   context.parsed.ResourceStartupCost = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "ResourceStartupCost", "fuelColdStartup", "fuelColdStartup",  base.from_float, fields);
                base.export_element (obj, "ResourceStartupCost", "fuelHotStartup", "fuelHotStartup",  base.from_float, fields);
                base.export_element (obj, "ResourceStartupCost", "fuelIntermediateStartup", "fuelIntermediateStartup",  base.from_float, fields);
                base.export_element (obj, "ResourceStartupCost", "fuelLowSustainedLimit", "fuelLowSustainedLimit",  base.from_float, fields);
                base.export_element (obj, "ResourceStartupCost", "gasPercentColdStartup", "gasPercentColdStartup",  base.from_string, fields);
                base.export_element (obj, "ResourceStartupCost", "gasPercentHotStartup", "gasPercentHotStartup",  base.from_string, fields);
                base.export_element (obj, "ResourceStartupCost", "gasPercentIntermediateStartup", "gasPercentIntermediateStartup",  base.from_string, fields);
                base.export_element (obj, "ResourceStartupCost", "gasPercentLowSustainedLimit", "gasPercentLowSustainedLimit",  base.from_string, fields);
                base.export_element (obj, "ResourceStartupCost", "oilPercentColdStartup", "oilPercentColdStartup",  base.from_string, fields);
                base.export_element (obj, "ResourceStartupCost", "oilPercentHotStartup", "oilPercentHotStartup",  base.from_string, fields);
                base.export_element (obj, "ResourceStartupCost", "oilPercentIntermediateStartup", "oilPercentIntermediateStartup",  base.from_string, fields);
                base.export_element (obj, "ResourceStartupCost", "oilPercentLowSustainedLimit", "oilPercentLowSustainedLimit",  base.from_string, fields);
                base.export_element (obj, "ResourceStartupCost", "solidfuelPercentColdStartup", "solidfuelPercentColdStartup",  base.from_string, fields);
                base.export_element (obj, "ResourceStartupCost", "solidfuelPercentHotStartup", "solidfuelPercentHotStartup",  base.from_string, fields);
                base.export_element (obj, "ResourceStartupCost", "solidfuelPercentIntermediateStartup", "solidfuelPercentIntermediateStartup",  base.from_string, fields);
                base.export_element (obj, "ResourceStartupCost", "solidfuelPercentLowSustainedLimit", "solidfuelPercentLowSustainedLimit",  base.from_string, fields);
                base.export_attribute (obj, "ResourceStartupCost", "ResourceVerifiableCosts", "ResourceVerifiableCosts", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ResourceStartupCost_collapse" aria-expanded="true" aria-controls="ResourceStartupCost_collapse" style="margin-left: 10px;">ResourceStartupCost</a></legend>
                    <div id="ResourceStartupCost_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#fuelColdStartup}}<div><b>fuelColdStartup</b>: {{fuelColdStartup}}</div>{{/fuelColdStartup}}
                    {{#fuelHotStartup}}<div><b>fuelHotStartup</b>: {{fuelHotStartup}}</div>{{/fuelHotStartup}}
                    {{#fuelIntermediateStartup}}<div><b>fuelIntermediateStartup</b>: {{fuelIntermediateStartup}}</div>{{/fuelIntermediateStartup}}
                    {{#fuelLowSustainedLimit}}<div><b>fuelLowSustainedLimit</b>: {{fuelLowSustainedLimit}}</div>{{/fuelLowSustainedLimit}}
                    {{#gasPercentColdStartup}}<div><b>gasPercentColdStartup</b>: {{gasPercentColdStartup}}</div>{{/gasPercentColdStartup}}
                    {{#gasPercentHotStartup}}<div><b>gasPercentHotStartup</b>: {{gasPercentHotStartup}}</div>{{/gasPercentHotStartup}}
                    {{#gasPercentIntermediateStartup}}<div><b>gasPercentIntermediateStartup</b>: {{gasPercentIntermediateStartup}}</div>{{/gasPercentIntermediateStartup}}
                    {{#gasPercentLowSustainedLimit}}<div><b>gasPercentLowSustainedLimit</b>: {{gasPercentLowSustainedLimit}}</div>{{/gasPercentLowSustainedLimit}}
                    {{#oilPercentColdStartup}}<div><b>oilPercentColdStartup</b>: {{oilPercentColdStartup}}</div>{{/oilPercentColdStartup}}
                    {{#oilPercentHotStartup}}<div><b>oilPercentHotStartup</b>: {{oilPercentHotStartup}}</div>{{/oilPercentHotStartup}}
                    {{#oilPercentIntermediateStartup}}<div><b>oilPercentIntermediateStartup</b>: {{oilPercentIntermediateStartup}}</div>{{/oilPercentIntermediateStartup}}
                    {{#oilPercentLowSustainedLimit}}<div><b>oilPercentLowSustainedLimit</b>: {{oilPercentLowSustainedLimit}}</div>{{/oilPercentLowSustainedLimit}}
                    {{#solidfuelPercentColdStartup}}<div><b>solidfuelPercentColdStartup</b>: {{solidfuelPercentColdStartup}}</div>{{/solidfuelPercentColdStartup}}
                    {{#solidfuelPercentHotStartup}}<div><b>solidfuelPercentHotStartup</b>: {{solidfuelPercentHotStartup}}</div>{{/solidfuelPercentHotStartup}}
                    {{#solidfuelPercentIntermediateStartup}}<div><b>solidfuelPercentIntermediateStartup</b>: {{solidfuelPercentIntermediateStartup}}</div>{{/solidfuelPercentIntermediateStartup}}
                    {{#solidfuelPercentLowSustainedLimit}}<div><b>solidfuelPercentLowSustainedLimit</b>: {{solidfuelPercentLowSustainedLimit}}</div>{{/solidfuelPercentLowSustainedLimit}}
                    {{#ResourceVerifiableCosts}}<div><b>ResourceVerifiableCosts</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ResourceVerifiableCosts}}");}); return false;'>{{ResourceVerifiableCosts}}</a></div>{{/ResourceVerifiableCosts}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ResourceStartupCost_collapse" aria-expanded="true" aria-controls="{{id}}_ResourceStartupCost_collapse" style="margin-left: 10px;">ResourceStartupCost</a></legend>
                    <div id="{{id}}_ResourceStartupCost_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fuelColdStartup'>fuelColdStartup: </label><div class='col-sm-8'><input id='{{id}}_fuelColdStartup' class='form-control' type='text'{{#fuelColdStartup}} value='{{fuelColdStartup}}'{{/fuelColdStartup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fuelHotStartup'>fuelHotStartup: </label><div class='col-sm-8'><input id='{{id}}_fuelHotStartup' class='form-control' type='text'{{#fuelHotStartup}} value='{{fuelHotStartup}}'{{/fuelHotStartup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fuelIntermediateStartup'>fuelIntermediateStartup: </label><div class='col-sm-8'><input id='{{id}}_fuelIntermediateStartup' class='form-control' type='text'{{#fuelIntermediateStartup}} value='{{fuelIntermediateStartup}}'{{/fuelIntermediateStartup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fuelLowSustainedLimit'>fuelLowSustainedLimit: </label><div class='col-sm-8'><input id='{{id}}_fuelLowSustainedLimit' class='form-control' type='text'{{#fuelLowSustainedLimit}} value='{{fuelLowSustainedLimit}}'{{/fuelLowSustainedLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gasPercentColdStartup'>gasPercentColdStartup: </label><div class='col-sm-8'><input id='{{id}}_gasPercentColdStartup' class='form-control' type='text'{{#gasPercentColdStartup}} value='{{gasPercentColdStartup}}'{{/gasPercentColdStartup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gasPercentHotStartup'>gasPercentHotStartup: </label><div class='col-sm-8'><input id='{{id}}_gasPercentHotStartup' class='form-control' type='text'{{#gasPercentHotStartup}} value='{{gasPercentHotStartup}}'{{/gasPercentHotStartup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gasPercentIntermediateStartup'>gasPercentIntermediateStartup: </label><div class='col-sm-8'><input id='{{id}}_gasPercentIntermediateStartup' class='form-control' type='text'{{#gasPercentIntermediateStartup}} value='{{gasPercentIntermediateStartup}}'{{/gasPercentIntermediateStartup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gasPercentLowSustainedLimit'>gasPercentLowSustainedLimit: </label><div class='col-sm-8'><input id='{{id}}_gasPercentLowSustainedLimit' class='form-control' type='text'{{#gasPercentLowSustainedLimit}} value='{{gasPercentLowSustainedLimit}}'{{/gasPercentLowSustainedLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_oilPercentColdStartup'>oilPercentColdStartup: </label><div class='col-sm-8'><input id='{{id}}_oilPercentColdStartup' class='form-control' type='text'{{#oilPercentColdStartup}} value='{{oilPercentColdStartup}}'{{/oilPercentColdStartup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_oilPercentHotStartup'>oilPercentHotStartup: </label><div class='col-sm-8'><input id='{{id}}_oilPercentHotStartup' class='form-control' type='text'{{#oilPercentHotStartup}} value='{{oilPercentHotStartup}}'{{/oilPercentHotStartup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_oilPercentIntermediateStartup'>oilPercentIntermediateStartup: </label><div class='col-sm-8'><input id='{{id}}_oilPercentIntermediateStartup' class='form-control' type='text'{{#oilPercentIntermediateStartup}} value='{{oilPercentIntermediateStartup}}'{{/oilPercentIntermediateStartup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_oilPercentLowSustainedLimit'>oilPercentLowSustainedLimit: </label><div class='col-sm-8'><input id='{{id}}_oilPercentLowSustainedLimit' class='form-control' type='text'{{#oilPercentLowSustainedLimit}} value='{{oilPercentLowSustainedLimit}}'{{/oilPercentLowSustainedLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_solidfuelPercentColdStartup'>solidfuelPercentColdStartup: </label><div class='col-sm-8'><input id='{{id}}_solidfuelPercentColdStartup' class='form-control' type='text'{{#solidfuelPercentColdStartup}} value='{{solidfuelPercentColdStartup}}'{{/solidfuelPercentColdStartup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_solidfuelPercentHotStartup'>solidfuelPercentHotStartup: </label><div class='col-sm-8'><input id='{{id}}_solidfuelPercentHotStartup' class='form-control' type='text'{{#solidfuelPercentHotStartup}} value='{{solidfuelPercentHotStartup}}'{{/solidfuelPercentHotStartup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_solidfuelPercentIntermediateStartup'>solidfuelPercentIntermediateStartup: </label><div class='col-sm-8'><input id='{{id}}_solidfuelPercentIntermediateStartup' class='form-control' type='text'{{#solidfuelPercentIntermediateStartup}} value='{{solidfuelPercentIntermediateStartup}}'{{/solidfuelPercentIntermediateStartup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_solidfuelPercentLowSustainedLimit'>solidfuelPercentLowSustainedLimit: </label><div class='col-sm-8'><input id='{{id}}_solidfuelPercentLowSustainedLimit' class='form-control' type='text'{{#solidfuelPercentLowSustainedLimit}} value='{{solidfuelPercentLowSustainedLimit}}'{{/solidfuelPercentLowSustainedLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ResourceVerifiableCosts'>ResourceVerifiableCosts: </label><div class='col-sm-8'><input id='{{id}}_ResourceVerifiableCosts' class='form-control' type='text'{{#ResourceVerifiableCosts}} value='{{ResourceVerifiableCosts}}'{{/ResourceVerifiableCosts}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ResourceStartupCost" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_fuelColdStartup").value; if ("" !== temp) obj["fuelColdStartup"] = temp;
                temp = document.getElementById (id + "_fuelHotStartup").value; if ("" !== temp) obj["fuelHotStartup"] = temp;
                temp = document.getElementById (id + "_fuelIntermediateStartup").value; if ("" !== temp) obj["fuelIntermediateStartup"] = temp;
                temp = document.getElementById (id + "_fuelLowSustainedLimit").value; if ("" !== temp) obj["fuelLowSustainedLimit"] = temp;
                temp = document.getElementById (id + "_gasPercentColdStartup").value; if ("" !== temp) obj["gasPercentColdStartup"] = temp;
                temp = document.getElementById (id + "_gasPercentHotStartup").value; if ("" !== temp) obj["gasPercentHotStartup"] = temp;
                temp = document.getElementById (id + "_gasPercentIntermediateStartup").value; if ("" !== temp) obj["gasPercentIntermediateStartup"] = temp;
                temp = document.getElementById (id + "_gasPercentLowSustainedLimit").value; if ("" !== temp) obj["gasPercentLowSustainedLimit"] = temp;
                temp = document.getElementById (id + "_oilPercentColdStartup").value; if ("" !== temp) obj["oilPercentColdStartup"] = temp;
                temp = document.getElementById (id + "_oilPercentHotStartup").value; if ("" !== temp) obj["oilPercentHotStartup"] = temp;
                temp = document.getElementById (id + "_oilPercentIntermediateStartup").value; if ("" !== temp) obj["oilPercentIntermediateStartup"] = temp;
                temp = document.getElementById (id + "_oilPercentLowSustainedLimit").value; if ("" !== temp) obj["oilPercentLowSustainedLimit"] = temp;
                temp = document.getElementById (id + "_solidfuelPercentColdStartup").value; if ("" !== temp) obj["solidfuelPercentColdStartup"] = temp;
                temp = document.getElementById (id + "_solidfuelPercentHotStartup").value; if ("" !== temp) obj["solidfuelPercentHotStartup"] = temp;
                temp = document.getElementById (id + "_solidfuelPercentIntermediateStartup").value; if ("" !== temp) obj["solidfuelPercentIntermediateStartup"] = temp;
                temp = document.getElementById (id + "_solidfuelPercentLowSustainedLimit").value; if ("" !== temp) obj["solidfuelPercentLowSustainedLimit"] = temp;
                temp = document.getElementById (id + "_ResourceVerifiableCosts").value; if ("" !== temp) obj["ResourceVerifiableCosts"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ResourceVerifiableCosts", "1", "0..*", "ResourceVerifiableCosts", "ResourceStartupCost"]
                        ]
                    )
                );
            }
        }

        /**
         * Representing the ratio of the load share for the associated SC.
         *
         */
        class LoadRatio extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.LoadRatio;
                if (null == bucket)
                   cim_data.LoadRatio = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LoadRatio[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "LoadRatio";
                base.parse_element (/<cim:LoadRatio.intervalEndTime>([\s\S]*?)<\/cim:LoadRatio.intervalEndTime>/g, obj, "intervalEndTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:LoadRatio.intervalStartTime>([\s\S]*?)<\/cim:LoadRatio.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:LoadRatio.share>([\s\S]*?)<\/cim:LoadRatio.share>/g, obj, "share", base.to_string, sub, context);
                base.parse_attribute (/<cim:LoadRatio.SchedulingCoordinator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SchedulingCoordinator", sub, context);
                let bucket = context.parsed.LoadRatio;
                if (null == bucket)
                   context.parsed.LoadRatio = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "LoadRatio", "intervalEndTime", "intervalEndTime",  base.from_datetime, fields);
                base.export_element (obj, "LoadRatio", "intervalStartTime", "intervalStartTime",  base.from_datetime, fields);
                base.export_element (obj, "LoadRatio", "share", "share",  base.from_string, fields);
                base.export_attribute (obj, "LoadRatio", "SchedulingCoordinator", "SchedulingCoordinator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#LoadRatio_collapse" aria-expanded="true" aria-controls="LoadRatio_collapse" style="margin-left: 10px;">LoadRatio</a></legend>
                    <div id="LoadRatio_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#intervalEndTime}}<div><b>intervalEndTime</b>: {{intervalEndTime}}</div>{{/intervalEndTime}}
                    {{#intervalStartTime}}<div><b>intervalStartTime</b>: {{intervalStartTime}}</div>{{/intervalStartTime}}
                    {{#share}}<div><b>share</b>: {{share}}</div>{{/share}}
                    {{#SchedulingCoordinator}}<div><b>SchedulingCoordinator</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{SchedulingCoordinator}}");}); return false;'>{{SchedulingCoordinator}}</a></div>{{/SchedulingCoordinator}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_LoadRatio_collapse" aria-expanded="true" aria-controls="{{id}}_LoadRatio_collapse" style="margin-left: 10px;">LoadRatio</a></legend>
                    <div id="{{id}}_LoadRatio_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_intervalEndTime'>intervalEndTime: </label><div class='col-sm-8'><input id='{{id}}_intervalEndTime' class='form-control' type='text'{{#intervalEndTime}} value='{{intervalEndTime}}'{{/intervalEndTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_intervalStartTime'>intervalStartTime: </label><div class='col-sm-8'><input id='{{id}}_intervalStartTime' class='form-control' type='text'{{#intervalStartTime}} value='{{intervalStartTime}}'{{/intervalStartTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_share'>share: </label><div class='col-sm-8'><input id='{{id}}_share' class='form-control' type='text'{{#share}} value='{{share}}'{{/share}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SchedulingCoordinator'>SchedulingCoordinator: </label><div class='col-sm-8'><input id='{{id}}_SchedulingCoordinator' class='form-control' type='text'{{#SchedulingCoordinator}} value='{{SchedulingCoordinator}}'{{/SchedulingCoordinator}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "LoadRatio" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_intervalEndTime").value; if ("" !== temp) obj["intervalEndTime"] = temp;
                temp = document.getElementById (id + "_intervalStartTime").value; if ("" !== temp) obj["intervalStartTime"] = temp;
                temp = document.getElementById (id + "_share").value; if ("" !== temp) obj["share"] = temp;
                temp = document.getElementById (id + "_SchedulingCoordinator").value; if ("" !== temp) obj["SchedulingCoordinator"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["SchedulingCoordinator", "0..1", "1", "SchedulingCoordinator", "LoadRatio"]
                        ]
                    )
                );
            }
        }

        /**
         * The maximum Startup costs and time as a function of down time.
         *
         * Relationship between unit startup cost (Y1-axis) vs. unit elapsed down time (X-axis). This is used to validate the information provided in the Bid.
         *
         */
        class MaxStartUpCostCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MaxStartUpCostCurve;
                if (null == bucket)
                   cim_data.MaxStartUpCostCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MaxStartUpCostCurve[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "MaxStartUpCostCurve";
                let bucket = context.parsed.MaxStartUpCostCurve;
                if (null == bucket)
                   context.parsed.MaxStartUpCostCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MaxStartUpCostCurve_collapse" aria-expanded="true" aria-controls="MaxStartUpCostCurve_collapse" style="margin-left: 10px;">MaxStartUpCostCurve</a></legend>
                    <div id="MaxStartUpCostCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MaxStartUpCostCurve_collapse" aria-expanded="true" aria-controls="{{id}}_MaxStartUpCostCurve_collapse" style="margin-left: 10px;">MaxStartUpCostCurve</a></legend>
                    <div id="{{id}}_MaxStartUpCostCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "MaxStartUpCostCurve" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * Model to support processing of reliability must run units.
         *
         */
        class RMRStartUpEnergyCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.RMRStartUpEnergyCurve;
                if (null == bucket)
                   cim_data.RMRStartUpEnergyCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RMRStartUpEnergyCurve[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "RMRStartUpEnergyCurve";
                base.parse_attribute (/<cim:RMRStartUpEnergyCurve.RegisteredGenerator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);
                let bucket = context.parsed.RMRStartUpEnergyCurve;
                if (null == bucket)
                   context.parsed.RMRStartUpEnergyCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "RMRStartUpEnergyCurve", "RegisteredGenerator", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RMRStartUpEnergyCurve_collapse" aria-expanded="true" aria-controls="RMRStartUpEnergyCurve_collapse" style="margin-left: 10px;">RMRStartUpEnergyCurve</a></legend>
                    <div id="RMRStartUpEnergyCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RegisteredGenerator}}");}); return false;'>{{RegisteredGenerator}}</a></div>{{/RegisteredGenerator}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RMRStartUpEnergyCurve_collapse" aria-expanded="true" aria-controls="{{id}}_RMRStartUpEnergyCurve_collapse" style="margin-left: 10px;">RMRStartUpEnergyCurve</a></legend>
                    <div id="{{id}}_RMRStartUpEnergyCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredGenerator'>RegisteredGenerator: </label><div class='col-sm-8'><input id='{{id}}_RegisteredGenerator' class='form-control' type='text'{{#RegisteredGenerator}} value='{{RegisteredGenerator}}'{{/RegisteredGenerator}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "RMRStartUpEnergyCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_RegisteredGenerator").value; if ("" !== temp) obj["RegisteredGenerator"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegisteredGenerator", "0..1", "0..1", "RegisteredGenerator", "RMRStartUpEnergyCurve"]
                        ]
                    )
                );
            }
        }

        /**
         * This class represents the inter tie resource.
         *
         */
        class RegisteredInterTie extends MarketCommon.RegisteredResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.RegisteredInterTie;
                if (null == bucket)
                   cim_data.RegisteredInterTie = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RegisteredInterTie[obj.id];
            }

            parse (context, sub)
            {
                let obj = MarketCommon.RegisteredResource.prototype.parse.call (this, context, sub);
                obj.cls = "RegisteredInterTie";
                base.parse_attribute (/<cim:RegisteredInterTie.direction\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "direction", sub, context);
                base.parse_attribute (/<cim:RegisteredInterTie.energyProductType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "energyProductType", sub, context);
                base.parse_attribute (/<cim:RegisteredInterTie.isDCTie\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "isDCTie", sub, context);
                base.parse_attribute (/<cim:RegisteredInterTie.isDynamicInterchange\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "isDynamicInterchange", sub, context);
                base.parse_element (/<cim:RegisteredInterTie.minHourlyBlockLimit>([\s\S]*?)<\/cim:RegisteredInterTie.minHourlyBlockLimit>/g, obj, "minHourlyBlockLimit", base.to_string, sub, context);
                base.parse_attributes (/<cim:RegisteredInterTie.WheelingCounterParty\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WheelingCounterParty", sub, context);
                base.parse_attribute (/<cim:RegisteredInterTie.Flowgate\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
                base.parse_attributes (/<cim:RegisteredInterTie.InterTieDispatchResponse\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "InterTieDispatchResponse", sub, context);
                base.parse_attributes (/<cim:RegisteredInterTie.InterchangeSchedule\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "InterchangeSchedule", sub, context);
                base.parse_attribute (/<cim:RegisteredInterTie.InterTieBid\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "InterTieBid", sub, context);
                let bucket = context.parsed.RegisteredInterTie;
                if (null == bucket)
                   context.parsed.RegisteredInterTie = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = MarketCommon.RegisteredResource.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "RegisteredInterTie", "direction", "direction", fields);
                base.export_attribute (obj, "RegisteredInterTie", "energyProductType", "energyProductType", fields);
                base.export_attribute (obj, "RegisteredInterTie", "isDCTie", "isDCTie", fields);
                base.export_attribute (obj, "RegisteredInterTie", "isDynamicInterchange", "isDynamicInterchange", fields);
                base.export_element (obj, "RegisteredInterTie", "minHourlyBlockLimit", "minHourlyBlockLimit",  base.from_string, fields);
                base.export_attributes (obj, "RegisteredInterTie", "WheelingCounterParty", "WheelingCounterParty", fields);
                base.export_attribute (obj, "RegisteredInterTie", "Flowgate", "Flowgate", fields);
                base.export_attributes (obj, "RegisteredInterTie", "InterTieDispatchResponse", "InterTieDispatchResponse", fields);
                base.export_attributes (obj, "RegisteredInterTie", "InterchangeSchedule", "InterchangeSchedule", fields);
                base.export_attribute (obj, "RegisteredInterTie", "InterTieBid", "InterTieBid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RegisteredInterTie_collapse" aria-expanded="true" aria-controls="RegisteredInterTie_collapse" style="margin-left: 10px;">RegisteredInterTie</a></legend>
                    <div id="RegisteredInterTie_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + MarketCommon.RegisteredResource.prototype.template.call (this) +
                    `
                    {{#direction}}<div><b>direction</b>: {{direction}}</div>{{/direction}}
                    {{#energyProductType}}<div><b>energyProductType</b>: {{energyProductType}}</div>{{/energyProductType}}
                    {{#isDCTie}}<div><b>isDCTie</b>: {{isDCTie}}</div>{{/isDCTie}}
                    {{#isDynamicInterchange}}<div><b>isDynamicInterchange</b>: {{isDynamicInterchange}}</div>{{/isDynamicInterchange}}
                    {{#minHourlyBlockLimit}}<div><b>minHourlyBlockLimit</b>: {{minHourlyBlockLimit}}</div>{{/minHourlyBlockLimit}}
                    {{#WheelingCounterParty}}<div><b>WheelingCounterParty</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/WheelingCounterParty}}
                    {{#Flowgate}}<div><b>Flowgate</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Flowgate}}");}); return false;'>{{Flowgate}}</a></div>{{/Flowgate}}
                    {{#InterTieDispatchResponse}}<div><b>InterTieDispatchResponse</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/InterTieDispatchResponse}}
                    {{#InterchangeSchedule}}<div><b>InterchangeSchedule</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/InterchangeSchedule}}
                    {{#InterTieBid}}<div><b>InterTieBid</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{InterTieBid}}");}); return false;'>{{InterTieBid}}</a></div>{{/InterTieBid}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["directionInterTieDirection"] = [{ id: '', selected: (!obj["direction"])}]; for (let property in MktDomain.InterTieDirection) obj["directionInterTieDirection"].push ({ id: property, selected: obj["direction"] && obj["direction"].endsWith ('.' + property)});
                obj["energyProductTypeEnergyProductType"] = [{ id: '', selected: (!obj["energyProductType"])}]; for (let property in MktDomain.EnergyProductType) obj["energyProductTypeEnergyProductType"].push ({ id: property, selected: obj["energyProductType"] && obj["energyProductType"].endsWith ('.' + property)});
                obj["isDCTieYesNo"] = [{ id: '', selected: (!obj["isDCTie"])}]; for (let property in MktDomain.YesNo) obj["isDCTieYesNo"].push ({ id: property, selected: obj["isDCTie"] && obj["isDCTie"].endsWith ('.' + property)});
                obj["isDynamicInterchangeYesNo"] = [{ id: '', selected: (!obj["isDynamicInterchange"])}]; for (let property in MktDomain.YesNo) obj["isDynamicInterchangeYesNo"].push ({ id: property, selected: obj["isDynamicInterchange"] && obj["isDynamicInterchange"].endsWith ('.' + property)});
                if (obj["WheelingCounterParty"]) obj["WheelingCounterParty_string"] = obj["WheelingCounterParty"].join ();
                if (obj["InterTieDispatchResponse"]) obj["InterTieDispatchResponse_string"] = obj["InterTieDispatchResponse"].join ();
                if (obj["InterchangeSchedule"]) obj["InterchangeSchedule_string"] = obj["InterchangeSchedule"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["directionInterTieDirection"];
                delete obj["energyProductTypeEnergyProductType"];
                delete obj["isDCTieYesNo"];
                delete obj["isDynamicInterchangeYesNo"];
                delete obj["WheelingCounterParty_string"];
                delete obj["InterTieDispatchResponse_string"];
                delete obj["InterchangeSchedule_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RegisteredInterTie_collapse" aria-expanded="true" aria-controls="{{id}}_RegisteredInterTie_collapse" style="margin-left: 10px;">RegisteredInterTie</a></legend>
                    <div id="{{id}}_RegisteredInterTie_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + MarketCommon.RegisteredResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_direction'>direction: </label><div class='col-sm-8'><select id='{{id}}_direction' class='form-control custom-select'>{{#directionInterTieDirection}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/directionInterTieDirection}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_energyProductType'>energyProductType: </label><div class='col-sm-8'><select id='{{id}}_energyProductType' class='form-control custom-select'>{{#energyProductTypeEnergyProductType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/energyProductTypeEnergyProductType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_isDCTie'>isDCTie: </label><div class='col-sm-8'><select id='{{id}}_isDCTie' class='form-control custom-select'>{{#isDCTieYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/isDCTieYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_isDynamicInterchange'>isDynamicInterchange: </label><div class='col-sm-8'><select id='{{id}}_isDynamicInterchange' class='form-control custom-select'>{{#isDynamicInterchangeYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/isDynamicInterchangeYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minHourlyBlockLimit'>minHourlyBlockLimit: </label><div class='col-sm-8'><input id='{{id}}_minHourlyBlockLimit' class='form-control' type='text'{{#minHourlyBlockLimit}} value='{{minHourlyBlockLimit}}'{{/minHourlyBlockLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WheelingCounterParty'>WheelingCounterParty: </label><div class='col-sm-8'><input id='{{id}}_WheelingCounterParty' class='form-control' type='text'{{#WheelingCounterParty}} value='{{WheelingCounterParty_string}}'{{/WheelingCounterParty}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Flowgate'>Flowgate: </label><div class='col-sm-8'><input id='{{id}}_Flowgate' class='form-control' type='text'{{#Flowgate}} value='{{Flowgate}}'{{/Flowgate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_InterTieBid'>InterTieBid: </label><div class='col-sm-8'><input id='{{id}}_InterTieBid' class='form-control' type='text'{{#InterTieBid}} value='{{InterTieBid}}'{{/InterTieBid}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "RegisteredInterTie" };
                super.submit (id, obj);
                temp = MktDomain.InterTieDirection[document.getElementById (id + "_direction").value]; if (temp) obj["direction"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#InterTieDirection." + temp; else delete obj["direction"];
                temp = MktDomain.EnergyProductType[document.getElementById (id + "_energyProductType").value]; if (temp) obj["energyProductType"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#EnergyProductType." + temp; else delete obj["energyProductType"];
                temp = MktDomain.YesNo[document.getElementById (id + "_isDCTie").value]; if (temp) obj["isDCTie"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["isDCTie"];
                temp = MktDomain.YesNo[document.getElementById (id + "_isDynamicInterchange").value]; if (temp) obj["isDynamicInterchange"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["isDynamicInterchange"];
                temp = document.getElementById (id + "_minHourlyBlockLimit").value; if ("" !== temp) obj["minHourlyBlockLimit"] = temp;
                temp = document.getElementById (id + "_WheelingCounterParty").value; if ("" !== temp) obj["WheelingCounterParty"] = temp.split (",");
                temp = document.getElementById (id + "_Flowgate").value; if ("" !== temp) obj["Flowgate"] = temp;
                temp = document.getElementById (id + "_InterTieBid").value; if ("" !== temp) obj["InterTieBid"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WheelingCounterParty", "0..*", "0..*", "WheelingCounterParty", "RegisteredInterTie"],
                            ["Flowgate", "1", "0..*", "Flowgate", "RegisteredInterTie"],
                            ["InterTieDispatchResponse", "0..*", "1", "InterTieDispatchResponse", "RegisteredInterTie"],
                            ["InterchangeSchedule", "0..*", "0..1", "InterchangeSchedule", "RegisteredInterTie"],
                            ["InterTieBid", "0..1", "0..1", "InterTieBid", "RegisteredInterTie"]
                        ]
                    )
                );
            }
        }

        /**
         * Indication of region for fuel inventory purposes.
         *
         */
        class FuelRegion extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.FuelRegion;
                if (null == bucket)
                   cim_data.FuelRegion = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.FuelRegion[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "FuelRegion";
                base.parse_element (/<cim:FuelRegion.fuelRegionType>([\s\S]*?)<\/cim:FuelRegion.fuelRegionType>/g, obj, "fuelRegionType", base.to_string, sub, context);
                base.parse_element (/<cim:FuelRegion.lastModified>([\s\S]*?)<\/cim:FuelRegion.lastModified>/g, obj, "lastModified", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:FuelRegion.RTO\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);
                base.parse_attribute (/<cim:FuelRegion.GasPrice\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GasPrice", sub, context);
                base.parse_attribute (/<cim:FuelRegion.OilPrice\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OilPrice", sub, context);
                base.parse_attributes (/<cim:FuelRegion.RegisteredGenerator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);
                let bucket = context.parsed.FuelRegion;
                if (null == bucket)
                   context.parsed.FuelRegion = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "FuelRegion", "fuelRegionType", "fuelRegionType",  base.from_string, fields);
                base.export_element (obj, "FuelRegion", "lastModified", "lastModified",  base.from_datetime, fields);
                base.export_attribute (obj, "FuelRegion", "RTO", "RTO", fields);
                base.export_attribute (obj, "FuelRegion", "GasPrice", "GasPrice", fields);
                base.export_attribute (obj, "FuelRegion", "OilPrice", "OilPrice", fields);
                base.export_attributes (obj, "FuelRegion", "RegisteredGenerator", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#FuelRegion_collapse" aria-expanded="true" aria-controls="FuelRegion_collapse" style="margin-left: 10px;">FuelRegion</a></legend>
                    <div id="FuelRegion_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#fuelRegionType}}<div><b>fuelRegionType</b>: {{fuelRegionType}}</div>{{/fuelRegionType}}
                    {{#lastModified}}<div><b>lastModified</b>: {{lastModified}}</div>{{/lastModified}}
                    {{#RTO}}<div><b>RTO</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RTO}}");}); return false;'>{{RTO}}</a></div>{{/RTO}}
                    {{#GasPrice}}<div><b>GasPrice</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{GasPrice}}");}); return false;'>{{GasPrice}}</a></div>{{/GasPrice}}
                    {{#OilPrice}}<div><b>OilPrice</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{OilPrice}}");}); return false;'>{{OilPrice}}</a></div>{{/OilPrice}}
                    {{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RegisteredGenerator}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["RegisteredGenerator"]) obj["RegisteredGenerator_string"] = obj["RegisteredGenerator"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["RegisteredGenerator_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_FuelRegion_collapse" aria-expanded="true" aria-controls="{{id}}_FuelRegion_collapse" style="margin-left: 10px;">FuelRegion</a></legend>
                    <div id="{{id}}_FuelRegion_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fuelRegionType'>fuelRegionType: </label><div class='col-sm-8'><input id='{{id}}_fuelRegionType' class='form-control' type='text'{{#fuelRegionType}} value='{{fuelRegionType}}'{{/fuelRegionType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lastModified'>lastModified: </label><div class='col-sm-8'><input id='{{id}}_lastModified' class='form-control' type='text'{{#lastModified}} value='{{lastModified}}'{{/lastModified}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RTO'>RTO: </label><div class='col-sm-8'><input id='{{id}}_RTO' class='form-control' type='text'{{#RTO}} value='{{RTO}}'{{/RTO}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GasPrice'>GasPrice: </label><div class='col-sm-8'><input id='{{id}}_GasPrice' class='form-control' type='text'{{#GasPrice}} value='{{GasPrice}}'{{/GasPrice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OilPrice'>OilPrice: </label><div class='col-sm-8'><input id='{{id}}_OilPrice' class='form-control' type='text'{{#OilPrice}} value='{{OilPrice}}'{{/OilPrice}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "FuelRegion" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_fuelRegionType").value; if ("" !== temp) obj["fuelRegionType"] = temp;
                temp = document.getElementById (id + "_lastModified").value; if ("" !== temp) obj["lastModified"] = temp;
                temp = document.getElementById (id + "_RTO").value; if ("" !== temp) obj["RTO"] = temp;
                temp = document.getElementById (id + "_GasPrice").value; if ("" !== temp) obj["GasPrice"] = temp;
                temp = document.getElementById (id + "_OilPrice").value; if ("" !== temp) obj["OilPrice"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RTO", "1", "0..*", "RTO", "FuelRegion"],
                            ["GasPrice", "1", "1", "GasPrice", "FuelRegion"],
                            ["OilPrice", "1", "1", "OilPrice", "FuelRegion"],
                            ["RegisteredGenerator", "0..*", "0..1", "RegisteredGenerator", "FuelRegion"]
                        ]
                    )
                );
            }
        }

        /**
         * Subclass of IEC 61970:Core:ConductingEquipment.
         *
         */
        class MktConductingEquipment extends Core.ConductingEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MktConductingEquipment;
                if (null == bucket)
                   cim_data.MktConductingEquipment = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MktConductingEquipment[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.ConductingEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "MktConductingEquipment";
                let bucket = context.parsed.MktConductingEquipment;
                if (null == bucket)
                   context.parsed.MktConductingEquipment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.ConductingEquipment.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MktConductingEquipment_collapse" aria-expanded="true" aria-controls="MktConductingEquipment_collapse" style="margin-left: 10px;">MktConductingEquipment</a></legend>
                    <div id="MktConductingEquipment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConductingEquipment.prototype.template.call (this) +
                    `
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MktConductingEquipment_collapse" aria-expanded="true" aria-controls="{{id}}_MktConductingEquipment_collapse" style="margin-left: 10px;">MktConductingEquipment</a></legend>
                    <div id="{{id}}_MktConductingEquipment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConductingEquipment.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "MktConductingEquipment" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * Defines the available from and to Transition States for the Combine Cycle Configurations.
         *
         */
        class CombinedCycleTransitionState extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.CombinedCycleTransitionState;
                if (null == bucket)
                   cim_data.CombinedCycleTransitionState = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CombinedCycleTransitionState[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CombinedCycleTransitionState";
                base.parse_element (/<cim:CombinedCycleTransitionState.upTransition>([\s\S]*?)<\/cim:CombinedCycleTransitionState.upTransition>/g, obj, "upTransition", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:CombinedCycleTransitionState.FromConfiguration\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FromConfiguration", sub, context);
                base.parse_attribute (/<cim:CombinedCycleTransitionState.ToConfiguration\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ToConfiguration", sub, context);
                let bucket = context.parsed.CombinedCycleTransitionState;
                if (null == bucket)
                   context.parsed.CombinedCycleTransitionState = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "CombinedCycleTransitionState", "upTransition", "upTransition",  base.from_boolean, fields);
                base.export_attribute (obj, "CombinedCycleTransitionState", "FromConfiguration", "FromConfiguration", fields);
                base.export_attribute (obj, "CombinedCycleTransitionState", "ToConfiguration", "ToConfiguration", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CombinedCycleTransitionState_collapse" aria-expanded="true" aria-controls="CombinedCycleTransitionState_collapse" style="margin-left: 10px;">CombinedCycleTransitionState</a></legend>
                    <div id="CombinedCycleTransitionState_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#upTransition}}<div><b>upTransition</b>: {{upTransition}}</div>{{/upTransition}}
                    {{#FromConfiguration}}<div><b>FromConfiguration</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{FromConfiguration}}");}); return false;'>{{FromConfiguration}}</a></div>{{/FromConfiguration}}
                    {{#ToConfiguration}}<div><b>ToConfiguration</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ToConfiguration}}");}); return false;'>{{ToConfiguration}}</a></div>{{/ToConfiguration}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CombinedCycleTransitionState_collapse" aria-expanded="true" aria-controls="{{id}}_CombinedCycleTransitionState_collapse" style="margin-left: 10px;">CombinedCycleTransitionState</a></legend>
                    <div id="{{id}}_CombinedCycleTransitionState_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_upTransition'>upTransition: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_upTransition' class='form-check-input' type='checkbox'{{#upTransition}} checked{{/upTransition}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_FromConfiguration'>FromConfiguration: </label><div class='col-sm-8'><input id='{{id}}_FromConfiguration' class='form-control' type='text'{{#FromConfiguration}} value='{{FromConfiguration}}'{{/FromConfiguration}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ToConfiguration'>ToConfiguration: </label><div class='col-sm-8'><input id='{{id}}_ToConfiguration' class='form-control' type='text'{{#ToConfiguration}} value='{{ToConfiguration}}'{{/ToConfiguration}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CombinedCycleTransitionState" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_upTransition").checked; if (temp) obj["upTransition"] = true;
                temp = document.getElementById (id + "_FromConfiguration").value; if ("" !== temp) obj["FromConfiguration"] = temp;
                temp = document.getElementById (id + "_ToConfiguration").value; if ("" !== temp) obj["ToConfiguration"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["FromConfiguration", "1", "0..*", "CombinedCycleConfiguration", "FromTransitionState"],
                            ["ToConfiguration", "1", "0..*", "CombinedCycleConfiguration", "ToTransitionState"]
                        ]
                    )
                );
            }
        }

        /**
         * This class is defined to describe the verifiable costs associated with a generation resource.
         *
         */
        class ResourceVerifiableCosts extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ResourceVerifiableCosts;
                if (null == bucket)
                   cim_data.ResourceVerifiableCosts = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ResourceVerifiableCosts[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ResourceVerifiableCosts";
                base.parse_attributes (/<cim:ResourceVerifiableCosts.ResourceStartupCost\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ResourceStartupCost", sub, context);
                base.parse_attribute (/<cim:ResourceVerifiableCosts.RegisteredResource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                base.parse_attribute (/<cim:ResourceVerifiableCosts.ResourceOperationMaintenanceCost\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ResourceOperationMaintenanceCost", sub, context);
                base.parse_attribute (/<cim:ResourceVerifiableCosts.MktHeatRateCurve\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MktHeatRateCurve", sub, context);
                let bucket = context.parsed.ResourceVerifiableCosts;
                if (null == bucket)
                   context.parsed.ResourceVerifiableCosts = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attributes (obj, "ResourceVerifiableCosts", "ResourceStartupCost", "ResourceStartupCost", fields);
                base.export_attribute (obj, "ResourceVerifiableCosts", "RegisteredResource", "RegisteredResource", fields);
                base.export_attribute (obj, "ResourceVerifiableCosts", "ResourceOperationMaintenanceCost", "ResourceOperationMaintenanceCost", fields);
                base.export_attribute (obj, "ResourceVerifiableCosts", "MktHeatRateCurve", "MktHeatRateCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ResourceVerifiableCosts_collapse" aria-expanded="true" aria-controls="ResourceVerifiableCosts_collapse" style="margin-left: 10px;">ResourceVerifiableCosts</a></legend>
                    <div id="ResourceVerifiableCosts_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#ResourceStartupCost}}<div><b>ResourceStartupCost</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ResourceStartupCost}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RegisteredResource}}");}); return false;'>{{RegisteredResource}}</a></div>{{/RegisteredResource}}
                    {{#ResourceOperationMaintenanceCost}}<div><b>ResourceOperationMaintenanceCost</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ResourceOperationMaintenanceCost}}");}); return false;'>{{ResourceOperationMaintenanceCost}}</a></div>{{/ResourceOperationMaintenanceCost}}
                    {{#MktHeatRateCurve}}<div><b>MktHeatRateCurve</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{MktHeatRateCurve}}");}); return false;'>{{MktHeatRateCurve}}</a></div>{{/MktHeatRateCurve}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ResourceStartupCost"]) obj["ResourceStartupCost_string"] = obj["ResourceStartupCost"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ResourceStartupCost_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ResourceVerifiableCosts_collapse" aria-expanded="true" aria-controls="{{id}}_ResourceVerifiableCosts_collapse" style="margin-left: 10px;">ResourceVerifiableCosts</a></legend>
                    <div id="{{id}}_ResourceVerifiableCosts_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='{{id}}_RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ResourceOperationMaintenanceCost'>ResourceOperationMaintenanceCost: </label><div class='col-sm-8'><input id='{{id}}_ResourceOperationMaintenanceCost' class='form-control' type='text'{{#ResourceOperationMaintenanceCost}} value='{{ResourceOperationMaintenanceCost}}'{{/ResourceOperationMaintenanceCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MktHeatRateCurve'>MktHeatRateCurve: </label><div class='col-sm-8'><input id='{{id}}_MktHeatRateCurve' class='form-control' type='text'{{#MktHeatRateCurve}} value='{{MktHeatRateCurve}}'{{/MktHeatRateCurve}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ResourceVerifiableCosts" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_RegisteredResource").value; if ("" !== temp) obj["RegisteredResource"] = temp;
                temp = document.getElementById (id + "_ResourceOperationMaintenanceCost").value; if ("" !== temp) obj["ResourceOperationMaintenanceCost"] = temp;
                temp = document.getElementById (id + "_MktHeatRateCurve").value; if ("" !== temp) obj["MktHeatRateCurve"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ResourceStartupCost", "0..*", "1", "ResourceStartupCost", "ResourceVerifiableCosts"],
                            ["RegisteredResource", "1", "0..1", "RegisteredResource", "ResourceVerifiableCosts"],
                            ["ResourceOperationMaintenanceCost", "1", "0..1", "ResourceOperationMaintenanceCost", "ResourceVerifiableCosts"],
                            ["MktHeatRateCurve", "1", "0..1", "MktHeatRateCurve", "ResourceVerifiableCosts"]
                        ]
                    )
                );
            }
        }

        /**
         * Subclass of IEC 61970:Contingency.
         *
         */
        class MktContingency extends Contingency.Contingency
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MktContingency;
                if (null == bucket)
                   cim_data.MktContingency = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MktContingency[obj.id];
            }

            parse (context, sub)
            {
                let obj = Contingency.Contingency.prototype.parse.call (this, context, sub);
                obj.cls = "MktContingency";
                base.parse_element (/<cim:MktContingency.loadRolloverFlag>([\s\S]*?)<\/cim:MktContingency.loadRolloverFlag>/g, obj, "loadRolloverFlag", base.to_boolean, sub, context);
                base.parse_element (/<cim:MktContingency.ltcControlFlag>([\s\S]*?)<\/cim:MktContingency.ltcControlFlag>/g, obj, "ltcControlFlag", base.to_boolean, sub, context);
                base.parse_element (/<cim:MktContingency.participationFactorSet>([\s\S]*?)<\/cim:MktContingency.participationFactorSet>/g, obj, "participationFactorSet", base.to_string, sub, context);
                base.parse_element (/<cim:MktContingency.screeningFlag>([\s\S]*?)<\/cim:MktContingency.screeningFlag>/g, obj, "screeningFlag", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:MktContingency.TransferInterfaceSolutionA\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TransferInterfaceSolutionA", sub, context);
                base.parse_attributes (/<cim:MktContingency.ConstraintResults\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ConstraintResults", sub, context);
                base.parse_attributes (/<cim:MktContingency.ContingencyConstraintLimit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ContingencyConstraintLimit", sub, context);
                base.parse_attribute (/<cim:MktContingency.TransferInterfaceSolutionB\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TransferInterfaceSolutionB", sub, context);
                let bucket = context.parsed.MktContingency;
                if (null == bucket)
                   context.parsed.MktContingency = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Contingency.Contingency.prototype.export.call (this, obj, false);

                base.export_element (obj, "MktContingency", "loadRolloverFlag", "loadRolloverFlag",  base.from_boolean, fields);
                base.export_element (obj, "MktContingency", "ltcControlFlag", "ltcControlFlag",  base.from_boolean, fields);
                base.export_element (obj, "MktContingency", "participationFactorSet", "participationFactorSet",  base.from_string, fields);
                base.export_element (obj, "MktContingency", "screeningFlag", "screeningFlag",  base.from_boolean, fields);
                base.export_attribute (obj, "MktContingency", "TransferInterfaceSolutionA", "TransferInterfaceSolutionA", fields);
                base.export_attributes (obj, "MktContingency", "ConstraintResults", "ConstraintResults", fields);
                base.export_attributes (obj, "MktContingency", "ContingencyConstraintLimit", "ContingencyConstraintLimit", fields);
                base.export_attribute (obj, "MktContingency", "TransferInterfaceSolutionB", "TransferInterfaceSolutionB", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MktContingency_collapse" aria-expanded="true" aria-controls="MktContingency_collapse" style="margin-left: 10px;">MktContingency</a></legend>
                    <div id="MktContingency_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Contingency.Contingency.prototype.template.call (this) +
                    `
                    {{#loadRolloverFlag}}<div><b>loadRolloverFlag</b>: {{loadRolloverFlag}}</div>{{/loadRolloverFlag}}
                    {{#ltcControlFlag}}<div><b>ltcControlFlag</b>: {{ltcControlFlag}}</div>{{/ltcControlFlag}}
                    {{#participationFactorSet}}<div><b>participationFactorSet</b>: {{participationFactorSet}}</div>{{/participationFactorSet}}
                    {{#screeningFlag}}<div><b>screeningFlag</b>: {{screeningFlag}}</div>{{/screeningFlag}}
                    {{#TransferInterfaceSolutionA}}<div><b>TransferInterfaceSolutionA</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{TransferInterfaceSolutionA}}");}); return false;'>{{TransferInterfaceSolutionA}}</a></div>{{/TransferInterfaceSolutionA}}
                    {{#ConstraintResults}}<div><b>ConstraintResults</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ConstraintResults}}
                    {{#ContingencyConstraintLimit}}<div><b>ContingencyConstraintLimit</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ContingencyConstraintLimit}}
                    {{#TransferInterfaceSolutionB}}<div><b>TransferInterfaceSolutionB</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{TransferInterfaceSolutionB}}");}); return false;'>{{TransferInterfaceSolutionB}}</a></div>{{/TransferInterfaceSolutionB}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ConstraintResults"]) obj["ConstraintResults_string"] = obj["ConstraintResults"].join ();
                if (obj["ContingencyConstraintLimit"]) obj["ContingencyConstraintLimit_string"] = obj["ContingencyConstraintLimit"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ConstraintResults_string"];
                delete obj["ContingencyConstraintLimit_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MktContingency_collapse" aria-expanded="true" aria-controls="{{id}}_MktContingency_collapse" style="margin-left: 10px;">MktContingency</a></legend>
                    <div id="{{id}}_MktContingency_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Contingency.Contingency.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_loadRolloverFlag'>loadRolloverFlag: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_loadRolloverFlag' class='form-check-input' type='checkbox'{{#loadRolloverFlag}} checked{{/loadRolloverFlag}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_ltcControlFlag'>ltcControlFlag: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_ltcControlFlag' class='form-check-input' type='checkbox'{{#ltcControlFlag}} checked{{/ltcControlFlag}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_participationFactorSet'>participationFactorSet: </label><div class='col-sm-8'><input id='{{id}}_participationFactorSet' class='form-control' type='text'{{#participationFactorSet}} value='{{participationFactorSet}}'{{/participationFactorSet}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_screeningFlag'>screeningFlag: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_screeningFlag' class='form-check-input' type='checkbox'{{#screeningFlag}} checked{{/screeningFlag}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TransferInterfaceSolutionA'>TransferInterfaceSolutionA: </label><div class='col-sm-8'><input id='{{id}}_TransferInterfaceSolutionA' class='form-control' type='text'{{#TransferInterfaceSolutionA}} value='{{TransferInterfaceSolutionA}}'{{/TransferInterfaceSolutionA}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TransferInterfaceSolutionB'>TransferInterfaceSolutionB: </label><div class='col-sm-8'><input id='{{id}}_TransferInterfaceSolutionB' class='form-control' type='text'{{#TransferInterfaceSolutionB}} value='{{TransferInterfaceSolutionB}}'{{/TransferInterfaceSolutionB}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MktContingency" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_loadRolloverFlag").checked; if (temp) obj["loadRolloverFlag"] = true;
                temp = document.getElementById (id + "_ltcControlFlag").checked; if (temp) obj["ltcControlFlag"] = true;
                temp = document.getElementById (id + "_participationFactorSet").value; if ("" !== temp) obj["participationFactorSet"] = temp;
                temp = document.getElementById (id + "_screeningFlag").checked; if (temp) obj["screeningFlag"] = true;
                temp = document.getElementById (id + "_TransferInterfaceSolutionA").value; if ("" !== temp) obj["TransferInterfaceSolutionA"] = temp;
                temp = document.getElementById (id + "_TransferInterfaceSolutionB").value; if ("" !== temp) obj["TransferInterfaceSolutionB"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TransferInterfaceSolutionA", "0..1", "0..1", "TransferInterfaceSolution", " MktContingencyA"],
                            ["ConstraintResults", "0..*", "1", "ConstraintResults", "MktContingency"],
                            ["ContingencyConstraintLimit", "0..*", "1", "ContingencyConstraintLimit", "MktContingency"],
                            ["TransferInterfaceSolutionB", "0..1", "0..1", "TransferInterfaceSolution", "MktContingencyB"]
                        ]
                    )
                );
            }
        }

        /**
         * This class models the allocation between asset owners and pricing nodes.
         *
         */
        class OrgPnodeAllocation extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OrgPnodeAllocation;
                if (null == bucket)
                   cim_data.OrgPnodeAllocation = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OrgPnodeAllocation[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "OrgPnodeAllocation";
                base.parse_element (/<cim:OrgPnodeAllocation.maxMWAllocation>([\s\S]*?)<\/cim:OrgPnodeAllocation.maxMWAllocation>/g, obj, "maxMWAllocation", base.to_string, sub, context);
                base.parse_attribute (/<cim:OrgPnodeAllocation.Pnode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Pnode", sub, context);
                let bucket = context.parsed.OrgPnodeAllocation;
                if (null == bucket)
                   context.parsed.OrgPnodeAllocation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "OrgPnodeAllocation", "maxMWAllocation", "maxMWAllocation",  base.from_string, fields);
                base.export_attribute (obj, "OrgPnodeAllocation", "Pnode", "Pnode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OrgPnodeAllocation_collapse" aria-expanded="true" aria-controls="OrgPnodeAllocation_collapse" style="margin-left: 10px;">OrgPnodeAllocation</a></legend>
                    <div id="OrgPnodeAllocation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#maxMWAllocation}}<div><b>maxMWAllocation</b>: {{maxMWAllocation}}</div>{{/maxMWAllocation}}
                    {{#Pnode}}<div><b>Pnode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Pnode}}");}); return false;'>{{Pnode}}</a></div>{{/Pnode}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OrgPnodeAllocation_collapse" aria-expanded="true" aria-controls="{{id}}_OrgPnodeAllocation_collapse" style="margin-left: 10px;">OrgPnodeAllocation</a></legend>
                    <div id="{{id}}_OrgPnodeAllocation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxMWAllocation'>maxMWAllocation: </label><div class='col-sm-8'><input id='{{id}}_maxMWAllocation' class='form-control' type='text'{{#maxMWAllocation}} value='{{maxMWAllocation}}'{{/maxMWAllocation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Pnode'>Pnode: </label><div class='col-sm-8'><input id='{{id}}_Pnode' class='form-control' type='text'{{#Pnode}} value='{{Pnode}}'{{/Pnode}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OrgPnodeAllocation" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_maxMWAllocation").value; if ("" !== temp) obj["maxMWAllocation"] = temp;
                temp = document.getElementById (id + "_Pnode").value; if ("" !== temp) obj["Pnode"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Pnode", "1", "0..*", "Pnode", "OrgPnodeAllocation"]
                        ]
                    )
                );
            }
        }

        /**
         * Flowgate defined partner.
         *
         */
        class FlowgatePartner extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.FlowgatePartner;
                if (null == bucket)
                   cim_data.FlowgatePartner = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.FlowgatePartner[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "FlowgatePartner";
                base.parse_attribute (/<cim:FlowgatePartner.FlowgateValue\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FlowgateValue", sub, context);
                let bucket = context.parsed.FlowgatePartner;
                if (null == bucket)
                   context.parsed.FlowgatePartner = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "FlowgatePartner", "FlowgateValue", "FlowgateValue", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#FlowgatePartner_collapse" aria-expanded="true" aria-controls="FlowgatePartner_collapse" style="margin-left: 10px;">FlowgatePartner</a></legend>
                    <div id="FlowgatePartner_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#FlowgateValue}}<div><b>FlowgateValue</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{FlowgateValue}}");}); return false;'>{{FlowgateValue}}</a></div>{{/FlowgateValue}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_FlowgatePartner_collapse" aria-expanded="true" aria-controls="{{id}}_FlowgatePartner_collapse" style="margin-left: 10px;">FlowgatePartner</a></legend>
                    <div id="{{id}}_FlowgatePartner_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_FlowgateValue'>FlowgateValue: </label><div class='col-sm-8'><input id='{{id}}_FlowgateValue' class='form-control' type='text'{{#FlowgateValue}} value='{{FlowgateValue}}'{{/FlowgateValue}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "FlowgatePartner" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_FlowgateValue").value; if ("" !== temp) obj["FlowgateValue"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["FlowgateValue", "0..1", "0..1", "FlowgateValue", "FlowgatePartner"]
                        ]
                    )
                );
            }
        }

        /**
         * This class represent the bid price cap.
         *
         */
        class BidPriceCap extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.BidPriceCap;
                if (null == bucket)
                   cim_data.BidPriceCap = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BidPriceCap[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "BidPriceCap";
                base.parse_element (/<cim:BidPriceCap.bidCeiling>([\s\S]*?)<\/cim:BidPriceCap.bidCeiling>/g, obj, "bidCeiling", base.to_string, sub, context);
                base.parse_element (/<cim:BidPriceCap.bidCeilingAS>([\s\S]*?)<\/cim:BidPriceCap.bidCeilingAS>/g, obj, "bidCeilingAS", base.to_string, sub, context);
                base.parse_element (/<cim:BidPriceCap.bidFloor>([\s\S]*?)<\/cim:BidPriceCap.bidFloor>/g, obj, "bidFloor", base.to_string, sub, context);
                base.parse_element (/<cim:BidPriceCap.bidFloorAS>([\s\S]*?)<\/cim:BidPriceCap.bidFloorAS>/g, obj, "bidFloorAS", base.to_string, sub, context);
                base.parse_element (/<cim:BidPriceCap.defaultPrice>([\s\S]*?)<\/cim:BidPriceCap.defaultPrice>/g, obj, "defaultPrice", base.to_string, sub, context);
                base.parse_attribute (/<cim:BidPriceCap.marketType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "marketType", sub, context);
                base.parse_attribute (/<cim:BidPriceCap.MarketProduct\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketProduct", sub, context);
                let bucket = context.parsed.BidPriceCap;
                if (null == bucket)
                   context.parsed.BidPriceCap = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "BidPriceCap", "bidCeiling", "bidCeiling",  base.from_string, fields);
                base.export_element (obj, "BidPriceCap", "bidCeilingAS", "bidCeilingAS",  base.from_string, fields);
                base.export_element (obj, "BidPriceCap", "bidFloor", "bidFloor",  base.from_string, fields);
                base.export_element (obj, "BidPriceCap", "bidFloorAS", "bidFloorAS",  base.from_string, fields);
                base.export_element (obj, "BidPriceCap", "defaultPrice", "defaultPrice",  base.from_string, fields);
                base.export_attribute (obj, "BidPriceCap", "marketType", "marketType", fields);
                base.export_attribute (obj, "BidPriceCap", "MarketProduct", "MarketProduct", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#BidPriceCap_collapse" aria-expanded="true" aria-controls="BidPriceCap_collapse" style="margin-left: 10px;">BidPriceCap</a></legend>
                    <div id="BidPriceCap_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#bidCeiling}}<div><b>bidCeiling</b>: {{bidCeiling}}</div>{{/bidCeiling}}
                    {{#bidCeilingAS}}<div><b>bidCeilingAS</b>: {{bidCeilingAS}}</div>{{/bidCeilingAS}}
                    {{#bidFloor}}<div><b>bidFloor</b>: {{bidFloor}}</div>{{/bidFloor}}
                    {{#bidFloorAS}}<div><b>bidFloorAS</b>: {{bidFloorAS}}</div>{{/bidFloorAS}}
                    {{#defaultPrice}}<div><b>defaultPrice</b>: {{defaultPrice}}</div>{{/defaultPrice}}
                    {{#marketType}}<div><b>marketType</b>: {{marketType}}</div>{{/marketType}}
                    {{#MarketProduct}}<div><b>MarketProduct</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{MarketProduct}}");}); return false;'>{{MarketProduct}}</a></div>{{/MarketProduct}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["marketTypeMarketType"] = [{ id: '', selected: (!obj["marketType"])}]; for (let property in MktDomain.MarketType) obj["marketTypeMarketType"].push ({ id: property, selected: obj["marketType"] && obj["marketType"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["marketTypeMarketType"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_BidPriceCap_collapse" aria-expanded="true" aria-controls="{{id}}_BidPriceCap_collapse" style="margin-left: 10px;">BidPriceCap</a></legend>
                    <div id="{{id}}_BidPriceCap_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bidCeiling'>bidCeiling: </label><div class='col-sm-8'><input id='{{id}}_bidCeiling' class='form-control' type='text'{{#bidCeiling}} value='{{bidCeiling}}'{{/bidCeiling}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bidCeilingAS'>bidCeilingAS: </label><div class='col-sm-8'><input id='{{id}}_bidCeilingAS' class='form-control' type='text'{{#bidCeilingAS}} value='{{bidCeilingAS}}'{{/bidCeilingAS}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bidFloor'>bidFloor: </label><div class='col-sm-8'><input id='{{id}}_bidFloor' class='form-control' type='text'{{#bidFloor}} value='{{bidFloor}}'{{/bidFloor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bidFloorAS'>bidFloorAS: </label><div class='col-sm-8'><input id='{{id}}_bidFloorAS' class='form-control' type='text'{{#bidFloorAS}} value='{{bidFloorAS}}'{{/bidFloorAS}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_defaultPrice'>defaultPrice: </label><div class='col-sm-8'><input id='{{id}}_defaultPrice' class='form-control' type='text'{{#defaultPrice}} value='{{defaultPrice}}'{{/defaultPrice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_marketType'>marketType: </label><div class='col-sm-8'><select id='{{id}}_marketType' class='form-control custom-select'>{{#marketTypeMarketType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/marketTypeMarketType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketProduct'>MarketProduct: </label><div class='col-sm-8'><input id='{{id}}_MarketProduct' class='form-control' type='text'{{#MarketProduct}} value='{{MarketProduct}}'{{/MarketProduct}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "BidPriceCap" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_bidCeiling").value; if ("" !== temp) obj["bidCeiling"] = temp;
                temp = document.getElementById (id + "_bidCeilingAS").value; if ("" !== temp) obj["bidCeilingAS"] = temp;
                temp = document.getElementById (id + "_bidFloor").value; if ("" !== temp) obj["bidFloor"] = temp;
                temp = document.getElementById (id + "_bidFloorAS").value; if ("" !== temp) obj["bidFloorAS"] = temp;
                temp = document.getElementById (id + "_defaultPrice").value; if ("" !== temp) obj["defaultPrice"] = temp;
                temp = MktDomain.MarketType[document.getElementById (id + "_marketType").value]; if (temp) obj["marketType"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#MarketType." + temp; else delete obj["marketType"];
                temp = document.getElementById (id + "_MarketProduct").value; if ("" !== temp) obj["MarketProduct"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MarketProduct", "0..1", "0..*", "MarketProduct", "BidPriceCap"]
                        ]
                    )
                );
            }
        }

        /**
         * Connection to other organizations at the boundary of the ISO/RTO.
         *
         */
        class SchedulingPoint extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SchedulingPoint;
                if (null == bucket)
                   cim_data.SchedulingPoint = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SchedulingPoint[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "SchedulingPoint";
                base.parse_attribute (/<cim:SchedulingPoint.Flowgate\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
                base.parse_attributes (/<cim:SchedulingPoint.InterchangeSchedule\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "InterchangeSchedule", sub, context);
                base.parse_attributes (/<cim:SchedulingPoint.RegisteredResource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                let bucket = context.parsed.SchedulingPoint;
                if (null == bucket)
                   context.parsed.SchedulingPoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "SchedulingPoint", "Flowgate", "Flowgate", fields);
                base.export_attributes (obj, "SchedulingPoint", "InterchangeSchedule", "InterchangeSchedule", fields);
                base.export_attributes (obj, "SchedulingPoint", "RegisteredResource", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SchedulingPoint_collapse" aria-expanded="true" aria-controls="SchedulingPoint_collapse" style="margin-left: 10px;">SchedulingPoint</a></legend>
                    <div id="SchedulingPoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#Flowgate}}<div><b>Flowgate</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Flowgate}}");}); return false;'>{{Flowgate}}</a></div>{{/Flowgate}}
                    {{#InterchangeSchedule}}<div><b>InterchangeSchedule</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/InterchangeSchedule}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RegisteredResource}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["InterchangeSchedule"]) obj["InterchangeSchedule_string"] = obj["InterchangeSchedule"].join ();
                if (obj["RegisteredResource"]) obj["RegisteredResource_string"] = obj["RegisteredResource"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["InterchangeSchedule_string"];
                delete obj["RegisteredResource_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SchedulingPoint_collapse" aria-expanded="true" aria-controls="{{id}}_SchedulingPoint_collapse" style="margin-left: 10px;">SchedulingPoint</a></legend>
                    <div id="{{id}}_SchedulingPoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Flowgate'>Flowgate: </label><div class='col-sm-8'><input id='{{id}}_Flowgate' class='form-control' type='text'{{#Flowgate}} value='{{Flowgate}}'{{/Flowgate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='{{id}}_RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource_string}}'{{/RegisteredResource}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SchedulingPoint" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Flowgate").value; if ("" !== temp) obj["Flowgate"] = temp;
                temp = document.getElementById (id + "_RegisteredResource").value; if ("" !== temp) obj["RegisteredResource"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Flowgate", "0..1", "0..*", "Flowgate", "InterTie"],
                            ["InterchangeSchedule", "0..*", "0..1", "InterchangeSchedule", "InterTie"],
                            ["RegisteredResource", "0..*", "0..*", "RegisteredResource", "InterTie"]
                        ]
                    )
                );
            }
        }

        /**
         * Model to support processing of reliability must run units.
         *
         */
        class RMRStartUpTimeCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.RMRStartUpTimeCurve;
                if (null == bucket)
                   cim_data.RMRStartUpTimeCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RMRStartUpTimeCurve[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "RMRStartUpTimeCurve";
                base.parse_attribute (/<cim:RMRStartUpTimeCurve.RegisteredGenerator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);
                let bucket = context.parsed.RMRStartUpTimeCurve;
                if (null == bucket)
                   context.parsed.RMRStartUpTimeCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "RMRStartUpTimeCurve", "RegisteredGenerator", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RMRStartUpTimeCurve_collapse" aria-expanded="true" aria-controls="RMRStartUpTimeCurve_collapse" style="margin-left: 10px;">RMRStartUpTimeCurve</a></legend>
                    <div id="RMRStartUpTimeCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RegisteredGenerator}}");}); return false;'>{{RegisteredGenerator}}</a></div>{{/RegisteredGenerator}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RMRStartUpTimeCurve_collapse" aria-expanded="true" aria-controls="{{id}}_RMRStartUpTimeCurve_collapse" style="margin-left: 10px;">RMRStartUpTimeCurve</a></legend>
                    <div id="{{id}}_RMRStartUpTimeCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredGenerator'>RegisteredGenerator: </label><div class='col-sm-8'><input id='{{id}}_RegisteredGenerator' class='form-control' type='text'{{#RegisteredGenerator}} value='{{RegisteredGenerator}}'{{/RegisteredGenerator}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "RMRStartUpTimeCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_RegisteredGenerator").value; if ("" !== temp) obj["RegisteredGenerator"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegisteredGenerator", "0..1", "0..1", "RegisteredGenerator", "RMRStartUpTimeCurve"]
                        ]
                    )
                );
            }
        }

        /**
         * Distribution among resources at the sink point or source point.
         *
         */
        class ContractDistributionFactor extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ContractDistributionFactor;
                if (null == bucket)
                   cim_data.ContractDistributionFactor = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ContractDistributionFactor[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ContractDistributionFactor";
                base.parse_element (/<cim:ContractDistributionFactor.factor>([\s\S]*?)<\/cim:ContractDistributionFactor.factor>/g, obj, "factor", base.to_float, sub, context);
                base.parse_attribute (/<cim:ContractDistributionFactor.sinkFlag\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "sinkFlag", sub, context);
                base.parse_attribute (/<cim:ContractDistributionFactor.sourceFlag\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "sourceFlag", sub, context);
                base.parse_attribute (/<cim:ContractDistributionFactor.RegisteredResource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                base.parse_attribute (/<cim:ContractDistributionFactor.TransmissionContractRight\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionContractRight", sub, context);
                base.parse_attribute (/<cim:ContractDistributionFactor.Flowgate\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
                let bucket = context.parsed.ContractDistributionFactor;
                if (null == bucket)
                   context.parsed.ContractDistributionFactor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "ContractDistributionFactor", "factor", "factor",  base.from_float, fields);
                base.export_attribute (obj, "ContractDistributionFactor", "sinkFlag", "sinkFlag", fields);
                base.export_attribute (obj, "ContractDistributionFactor", "sourceFlag", "sourceFlag", fields);
                base.export_attribute (obj, "ContractDistributionFactor", "RegisteredResource", "RegisteredResource", fields);
                base.export_attribute (obj, "ContractDistributionFactor", "TransmissionContractRight", "TransmissionContractRight", fields);
                base.export_attribute (obj, "ContractDistributionFactor", "Flowgate", "Flowgate", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ContractDistributionFactor_collapse" aria-expanded="true" aria-controls="ContractDistributionFactor_collapse" style="margin-left: 10px;">ContractDistributionFactor</a></legend>
                    <div id="ContractDistributionFactor_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#factor}}<div><b>factor</b>: {{factor}}</div>{{/factor}}
                    {{#sinkFlag}}<div><b>sinkFlag</b>: {{sinkFlag}}</div>{{/sinkFlag}}
                    {{#sourceFlag}}<div><b>sourceFlag</b>: {{sourceFlag}}</div>{{/sourceFlag}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RegisteredResource}}");}); return false;'>{{RegisteredResource}}</a></div>{{/RegisteredResource}}
                    {{#TransmissionContractRight}}<div><b>TransmissionContractRight</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{TransmissionContractRight}}");}); return false;'>{{TransmissionContractRight}}</a></div>{{/TransmissionContractRight}}
                    {{#Flowgate}}<div><b>Flowgate</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Flowgate}}");}); return false;'>{{Flowgate}}</a></div>{{/Flowgate}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["sinkFlagYesNo"] = [{ id: '', selected: (!obj["sinkFlag"])}]; for (let property in MktDomain.YesNo) obj["sinkFlagYesNo"].push ({ id: property, selected: obj["sinkFlag"] && obj["sinkFlag"].endsWith ('.' + property)});
                obj["sourceFlagYesNo"] = [{ id: '', selected: (!obj["sourceFlag"])}]; for (let property in MktDomain.YesNo) obj["sourceFlagYesNo"].push ({ id: property, selected: obj["sourceFlag"] && obj["sourceFlag"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["sinkFlagYesNo"];
                delete obj["sourceFlagYesNo"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ContractDistributionFactor_collapse" aria-expanded="true" aria-controls="{{id}}_ContractDistributionFactor_collapse" style="margin-left: 10px;">ContractDistributionFactor</a></legend>
                    <div id="{{id}}_ContractDistributionFactor_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_factor'>factor: </label><div class='col-sm-8'><input id='{{id}}_factor' class='form-control' type='text'{{#factor}} value='{{factor}}'{{/factor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sinkFlag'>sinkFlag: </label><div class='col-sm-8'><select id='{{id}}_sinkFlag' class='form-control custom-select'>{{#sinkFlagYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/sinkFlagYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sourceFlag'>sourceFlag: </label><div class='col-sm-8'><select id='{{id}}_sourceFlag' class='form-control custom-select'>{{#sourceFlagYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/sourceFlagYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='{{id}}_RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TransmissionContractRight'>TransmissionContractRight: </label><div class='col-sm-8'><input id='{{id}}_TransmissionContractRight' class='form-control' type='text'{{#TransmissionContractRight}} value='{{TransmissionContractRight}}'{{/TransmissionContractRight}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Flowgate'>Flowgate: </label><div class='col-sm-8'><input id='{{id}}_Flowgate' class='form-control' type='text'{{#Flowgate}} value='{{Flowgate}}'{{/Flowgate}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ContractDistributionFactor" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_factor").value; if ("" !== temp) obj["factor"] = temp;
                temp = MktDomain.YesNo[document.getElementById (id + "_sinkFlag").value]; if (temp) obj["sinkFlag"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["sinkFlag"];
                temp = MktDomain.YesNo[document.getElementById (id + "_sourceFlag").value]; if (temp) obj["sourceFlag"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["sourceFlag"];
                temp = document.getElementById (id + "_RegisteredResource").value; if ("" !== temp) obj["RegisteredResource"] = temp;
                temp = document.getElementById (id + "_TransmissionContractRight").value; if ("" !== temp) obj["TransmissionContractRight"] = temp;
                temp = document.getElementById (id + "_Flowgate").value; if ("" !== temp) obj["Flowgate"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegisteredResource", "0..1", "0..*", "RegisteredResource", "ContractDistributionFactor"],
                            ["TransmissionContractRight", "0..1", "0..*", "ContractRight", "ContractDistributionFactor"],
                            ["Flowgate", "0..1", "0..*", "Flowgate", "ContractDistributionFactor"]
                        ]
                    )
                );
            }
        }

        /**
         * Metered Sub-System aggregation of MSS Zones.
         *
         */
        class MSSAggregation extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MSSAggregation;
                if (null == bucket)
                   cim_data.MSSAggregation = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MSSAggregation[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MSSAggregation";
                base.parse_attribute (/<cim:MSSAggregation.costRecovery\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "costRecovery", sub, context);
                base.parse_attribute (/<cim:MSSAggregation.grossSettlement\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "grossSettlement", sub, context);
                base.parse_attribute (/<cim:MSSAggregation.ignoreLosses\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ignoreLosses", sub, context);
                base.parse_attribute (/<cim:MSSAggregation.ignoreMarginalLosses\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ignoreMarginalLosses", sub, context);
                base.parse_attribute (/<cim:MSSAggregation.loadFollowing\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "loadFollowing", sub, context);
                base.parse_attribute (/<cim:MSSAggregation.rucProcurement\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "rucProcurement", sub, context);
                base.parse_attributes (/<cim:MSSAggregation.MeteredSubSystem\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MeteredSubSystem", sub, context);
                base.parse_attribute (/<cim:MSSAggregation.RTO\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);
                let bucket = context.parsed.MSSAggregation;
                if (null == bucket)
                   context.parsed.MSSAggregation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MSSAggregation", "costRecovery", "costRecovery", fields);
                base.export_attribute (obj, "MSSAggregation", "grossSettlement", "grossSettlement", fields);
                base.export_attribute (obj, "MSSAggregation", "ignoreLosses", "ignoreLosses", fields);
                base.export_attribute (obj, "MSSAggregation", "ignoreMarginalLosses", "ignoreMarginalLosses", fields);
                base.export_attribute (obj, "MSSAggregation", "loadFollowing", "loadFollowing", fields);
                base.export_attribute (obj, "MSSAggregation", "rucProcurement", "rucProcurement", fields);
                base.export_attributes (obj, "MSSAggregation", "MeteredSubSystem", "MeteredSubSystem", fields);
                base.export_attribute (obj, "MSSAggregation", "RTO", "RTO", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MSSAggregation_collapse" aria-expanded="true" aria-controls="MSSAggregation_collapse" style="margin-left: 10px;">MSSAggregation</a></legend>
                    <div id="MSSAggregation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#costRecovery}}<div><b>costRecovery</b>: {{costRecovery}}</div>{{/costRecovery}}
                    {{#grossSettlement}}<div><b>grossSettlement</b>: {{grossSettlement}}</div>{{/grossSettlement}}
                    {{#ignoreLosses}}<div><b>ignoreLosses</b>: {{ignoreLosses}}</div>{{/ignoreLosses}}
                    {{#ignoreMarginalLosses}}<div><b>ignoreMarginalLosses</b>: {{ignoreMarginalLosses}}</div>{{/ignoreMarginalLosses}}
                    {{#loadFollowing}}<div><b>loadFollowing</b>: {{loadFollowing}}</div>{{/loadFollowing}}
                    {{#rucProcurement}}<div><b>rucProcurement</b>: {{rucProcurement}}</div>{{/rucProcurement}}
                    {{#MeteredSubSystem}}<div><b>MeteredSubSystem</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MeteredSubSystem}}
                    {{#RTO}}<div><b>RTO</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RTO}}");}); return false;'>{{RTO}}</a></div>{{/RTO}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["costRecoveryYesNo"] = [{ id: '', selected: (!obj["costRecovery"])}]; for (let property in MktDomain.YesNo) obj["costRecoveryYesNo"].push ({ id: property, selected: obj["costRecovery"] && obj["costRecovery"].endsWith ('.' + property)});
                obj["grossSettlementYesNo"] = [{ id: '', selected: (!obj["grossSettlement"])}]; for (let property in MktDomain.YesNo) obj["grossSettlementYesNo"].push ({ id: property, selected: obj["grossSettlement"] && obj["grossSettlement"].endsWith ('.' + property)});
                obj["ignoreLossesYesNo"] = [{ id: '', selected: (!obj["ignoreLosses"])}]; for (let property in MktDomain.YesNo) obj["ignoreLossesYesNo"].push ({ id: property, selected: obj["ignoreLosses"] && obj["ignoreLosses"].endsWith ('.' + property)});
                obj["ignoreMarginalLossesYesNo"] = [{ id: '', selected: (!obj["ignoreMarginalLosses"])}]; for (let property in MktDomain.YesNo) obj["ignoreMarginalLossesYesNo"].push ({ id: property, selected: obj["ignoreMarginalLosses"] && obj["ignoreMarginalLosses"].endsWith ('.' + property)});
                obj["loadFollowingYesNo"] = [{ id: '', selected: (!obj["loadFollowing"])}]; for (let property in MktDomain.YesNo) obj["loadFollowingYesNo"].push ({ id: property, selected: obj["loadFollowing"] && obj["loadFollowing"].endsWith ('.' + property)});
                obj["rucProcurementYesNo"] = [{ id: '', selected: (!obj["rucProcurement"])}]; for (let property in MktDomain.YesNo) obj["rucProcurementYesNo"].push ({ id: property, selected: obj["rucProcurement"] && obj["rucProcurement"].endsWith ('.' + property)});
                if (obj["MeteredSubSystem"]) obj["MeteredSubSystem_string"] = obj["MeteredSubSystem"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["costRecoveryYesNo"];
                delete obj["grossSettlementYesNo"];
                delete obj["ignoreLossesYesNo"];
                delete obj["ignoreMarginalLossesYesNo"];
                delete obj["loadFollowingYesNo"];
                delete obj["rucProcurementYesNo"];
                delete obj["MeteredSubSystem_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MSSAggregation_collapse" aria-expanded="true" aria-controls="{{id}}_MSSAggregation_collapse" style="margin-left: 10px;">MSSAggregation</a></legend>
                    <div id="{{id}}_MSSAggregation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_costRecovery'>costRecovery: </label><div class='col-sm-8'><select id='{{id}}_costRecovery' class='form-control custom-select'>{{#costRecoveryYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/costRecoveryYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_grossSettlement'>grossSettlement: </label><div class='col-sm-8'><select id='{{id}}_grossSettlement' class='form-control custom-select'>{{#grossSettlementYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/grossSettlementYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ignoreLosses'>ignoreLosses: </label><div class='col-sm-8'><select id='{{id}}_ignoreLosses' class='form-control custom-select'>{{#ignoreLossesYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ignoreLossesYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ignoreMarginalLosses'>ignoreMarginalLosses: </label><div class='col-sm-8'><select id='{{id}}_ignoreMarginalLosses' class='form-control custom-select'>{{#ignoreMarginalLossesYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ignoreMarginalLossesYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_loadFollowing'>loadFollowing: </label><div class='col-sm-8'><select id='{{id}}_loadFollowing' class='form-control custom-select'>{{#loadFollowingYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/loadFollowingYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rucProcurement'>rucProcurement: </label><div class='col-sm-8'><select id='{{id}}_rucProcurement' class='form-control custom-select'>{{#rucProcurementYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/rucProcurementYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RTO'>RTO: </label><div class='col-sm-8'><input id='{{id}}_RTO' class='form-control' type='text'{{#RTO}} value='{{RTO}}'{{/RTO}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MSSAggregation" };
                super.submit (id, obj);
                temp = MktDomain.YesNo[document.getElementById (id + "_costRecovery").value]; if (temp) obj["costRecovery"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["costRecovery"];
                temp = MktDomain.YesNo[document.getElementById (id + "_grossSettlement").value]; if (temp) obj["grossSettlement"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["grossSettlement"];
                temp = MktDomain.YesNo[document.getElementById (id + "_ignoreLosses").value]; if (temp) obj["ignoreLosses"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["ignoreLosses"];
                temp = MktDomain.YesNo[document.getElementById (id + "_ignoreMarginalLosses").value]; if (temp) obj["ignoreMarginalLosses"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["ignoreMarginalLosses"];
                temp = MktDomain.YesNo[document.getElementById (id + "_loadFollowing").value]; if (temp) obj["loadFollowing"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["loadFollowing"];
                temp = MktDomain.YesNo[document.getElementById (id + "_rucProcurement").value]; if (temp) obj["rucProcurement"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["rucProcurement"];
                temp = document.getElementById (id + "_RTO").value; if ("" !== temp) obj["RTO"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MeteredSubSystem", "1..*", "0..1", "MeteredSubSystem", "MSSAggregation"],
                            ["RTO", "1", "0..*", "RTO", "MSSAggregation"]
                        ]
                    )
                );
            }
        }

        /**
         * List of resources that can be substituted for within the bounds of a Contract definition.
         *
         * This class has a precedence and a resource.
         *
         */
        class SubstitutionResourceList extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SubstitutionResourceList;
                if (null == bucket)
                   cim_data.SubstitutionResourceList = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SubstitutionResourceList[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SubstitutionResourceList";
                base.parse_element (/<cim:SubstitutionResourceList.precedence>([\s\S]*?)<\/cim:SubstitutionResourceList.precedence>/g, obj, "precedence", base.to_string, sub, context);
                base.parse_attribute (/<cim:SubstitutionResourceList.RegisteredResource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                base.parse_attribute (/<cim:SubstitutionResourceList.TransmissionContractRight\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionContractRight", sub, context);
                let bucket = context.parsed.SubstitutionResourceList;
                if (null == bucket)
                   context.parsed.SubstitutionResourceList = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "SubstitutionResourceList", "precedence", "precedence",  base.from_string, fields);
                base.export_attribute (obj, "SubstitutionResourceList", "RegisteredResource", "RegisteredResource", fields);
                base.export_attribute (obj, "SubstitutionResourceList", "TransmissionContractRight", "TransmissionContractRight", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SubstitutionResourceList_collapse" aria-expanded="true" aria-controls="SubstitutionResourceList_collapse" style="margin-left: 10px;">SubstitutionResourceList</a></legend>
                    <div id="SubstitutionResourceList_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#precedence}}<div><b>precedence</b>: {{precedence}}</div>{{/precedence}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RegisteredResource}}");}); return false;'>{{RegisteredResource}}</a></div>{{/RegisteredResource}}
                    {{#TransmissionContractRight}}<div><b>TransmissionContractRight</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{TransmissionContractRight}}");}); return false;'>{{TransmissionContractRight}}</a></div>{{/TransmissionContractRight}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SubstitutionResourceList_collapse" aria-expanded="true" aria-controls="{{id}}_SubstitutionResourceList_collapse" style="margin-left: 10px;">SubstitutionResourceList</a></legend>
                    <div id="{{id}}_SubstitutionResourceList_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_precedence'>precedence: </label><div class='col-sm-8'><input id='{{id}}_precedence' class='form-control' type='text'{{#precedence}} value='{{precedence}}'{{/precedence}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='{{id}}_RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TransmissionContractRight'>TransmissionContractRight: </label><div class='col-sm-8'><input id='{{id}}_TransmissionContractRight' class='form-control' type='text'{{#TransmissionContractRight}} value='{{TransmissionContractRight}}'{{/TransmissionContractRight}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SubstitutionResourceList" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_precedence").value; if ("" !== temp) obj["precedence"] = temp;
                temp = document.getElementById (id + "_RegisteredResource").value; if ("" !== temp) obj["RegisteredResource"] = temp;
                temp = document.getElementById (id + "_TransmissionContractRight").value; if ("" !== temp) obj["TransmissionContractRight"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegisteredResource", "0..1", "0..*", "RegisteredResource", "SubstitutionResourceList"],
                            ["TransmissionContractRight", "0..1", "0..*", "ContractRight", "SubstitutionResourceList"]
                        ]
                    )
                );
            }
        }

        /**
         * Model of a generator  that is registered to participate in the market.
         *
         */
        class RegisteredGenerator extends MarketCommon.RegisteredResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.RegisteredGenerator;
                if (null == bucket)
                   cim_data.RegisteredGenerator = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RegisteredGenerator[obj.id];
            }

            parse (context, sub)
            {
                let obj = MarketCommon.RegisteredResource.prototype.parse.call (this, context, sub);
                obj.cls = "RegisteredGenerator";
                base.parse_element (/<cim:RegisteredGenerator.capacityFactor>([\s\S]*?)<\/cim:RegisteredGenerator.capacityFactor>/g, obj, "capacityFactor", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.coldStartTime>([\s\S]*?)<\/cim:RegisteredGenerator.coldStartTime>/g, obj, "coldStartTime", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.combinedCycleOperatingMode>([\s\S]*?)<\/cim:RegisteredGenerator.combinedCycleOperatingMode>/g, obj, "combinedCycleOperatingMode", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.commericialOperationDate>([\s\S]*?)<\/cim:RegisteredGenerator.commericialOperationDate>/g, obj, "commericialOperationDate", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.constrainedOutputFlag\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "constrainedOutputFlag", sub, context);
                base.parse_element (/<cim:RegisteredGenerator.energyDownRampRate>([\s\S]*?)<\/cim:RegisteredGenerator.energyDownRampRate>/g, obj, "energyDownRampRate", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.energyUpRampRate>([\s\S]*?)<\/cim:RegisteredGenerator.energyUpRampRate>/g, obj, "energyUpRampRate", base.to_string, sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.extremeLongStart\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "extremeLongStart", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.fuelSource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "fuelSource", sub, context);
                base.parse_element (/<cim:RegisteredGenerator.highControlLimit>([\s\S]*?)<\/cim:RegisteredGenerator.highControlLimit>/g, obj, "highControlLimit", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.hotIntTime>([\s\S]*?)<\/cim:RegisteredGenerator.hotIntTime>/g, obj, "hotIntTime", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.hotStartTime>([\s\S]*?)<\/cim:RegisteredGenerator.hotStartTime>/g, obj, "hotStartTime", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.intColdTime>([\s\S]*?)<\/cim:RegisteredGenerator.intColdTime>/g, obj, "intColdTime", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.intStartTime>([\s\S]*?)<\/cim:RegisteredGenerator.intStartTime>/g, obj, "intStartTime", base.to_float, sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.loadFollowingDownMSS\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "loadFollowingDownMSS", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.loadFollowingUpMSS\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "loadFollowingUpMSS", sub, context);
                base.parse_element (/<cim:RegisteredGenerator.lowControlLImit>([\s\S]*?)<\/cim:RegisteredGenerator.lowControlLImit>/g, obj, "lowControlLImit", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.maxDependableCap>([\s\S]*?)<\/cim:RegisteredGenerator.maxDependableCap>/g, obj, "maxDependableCap", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.maximumAllowableSpinningReserve>([\s\S]*?)<\/cim:RegisteredGenerator.maximumAllowableSpinningReserve>/g, obj, "maximumAllowableSpinningReserve", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.maximumOperatingLimit>([\s\S]*?)<\/cim:RegisteredGenerator.maximumOperatingLimit>/g, obj, "maximumOperatingLimit", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.maxMinLoadCost>([\s\S]*?)<\/cim:RegisteredGenerator.maxMinLoadCost>/g, obj, "maxMinLoadCost", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.maxPumpingLevel>([\s\S]*?)<\/cim:RegisteredGenerator.maxPumpingLevel>/g, obj, "maxPumpingLevel", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.maxShutdownTime>([\s\S]*?)<\/cim:RegisteredGenerator.maxShutdownTime>/g, obj, "maxShutdownTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.maxStartUpsPerDay>([\s\S]*?)<\/cim:RegisteredGenerator.maxStartUpsPerDay>/g, obj, "maxStartUpsPerDay", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.maxWeeklyEnergy>([\s\S]*?)<\/cim:RegisteredGenerator.maxWeeklyEnergy>/g, obj, "maxWeeklyEnergy", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.maxWeeklyStarts>([\s\S]*?)<\/cim:RegisteredGenerator.maxWeeklyStarts>/g, obj, "maxWeeklyStarts", base.to_string, sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.minimumLoadCostBasis\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "minimumLoadCostBasis", sub, context);
                base.parse_element (/<cim:RegisteredGenerator.minimumLoadFuelCost>([\s\S]*?)<\/cim:RegisteredGenerator.minimumLoadFuelCost>/g, obj, "minimumLoadFuelCost", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.minimumOperatingLimit>([\s\S]*?)<\/cim:RegisteredGenerator.minimumOperatingLimit>/g, obj, "minimumOperatingLimit", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.minLoadCost>([\s\S]*?)<\/cim:RegisteredGenerator.minLoadCost>/g, obj, "minLoadCost", base.to_string, sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.mustOfferRA\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "mustOfferRA", sub, context);
                base.parse_element (/<cim:RegisteredGenerator.nameplateCapacity>([\s\S]*?)<\/cim:RegisteredGenerator.nameplateCapacity>/g, obj, "nameplateCapacity", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.operatingMaintenanceCost>([\s\S]*?)<\/cim:RegisteredGenerator.operatingMaintenanceCost>/g, obj, "operatingMaintenanceCost", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.pumpingCost>([\s\S]*?)<\/cim:RegisteredGenerator.pumpingCost>/g, obj, "pumpingCost", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.pumpingFactor>([\s\S]*?)<\/cim:RegisteredGenerator.pumpingFactor>/g, obj, "pumpingFactor", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.pumpMinDownTime>([\s\S]*?)<\/cim:RegisteredGenerator.pumpMinDownTime>/g, obj, "pumpMinDownTime", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.pumpMinUpTime>([\s\S]*?)<\/cim:RegisteredGenerator.pumpMinUpTime>/g, obj, "pumpMinUpTime", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.pumpShutdownCost>([\s\S]*?)<\/cim:RegisteredGenerator.pumpShutdownCost>/g, obj, "pumpShutdownCost", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.pumpShutdownTime>([\s\S]*?)<\/cim:RegisteredGenerator.pumpShutdownTime>/g, obj, "pumpShutdownTime", base.to_string, sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.quickStartFlag\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "quickStartFlag", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.rampCurveType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "rampCurveType", sub, context);
                base.parse_element (/<cim:RegisteredGenerator.regulationDownRampRate>([\s\S]*?)<\/cim:RegisteredGenerator.regulationDownRampRate>/g, obj, "regulationDownRampRate", base.to_string, sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.regulationFlag\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "regulationFlag", sub, context);
                base.parse_element (/<cim:RegisteredGenerator.regulationUpRampRate>([\s\S]*?)<\/cim:RegisteredGenerator.regulationUpRampRate>/g, obj, "regulationUpRampRate", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.resourceSubType>([\s\S]*?)<\/cim:RegisteredGenerator.resourceSubType>/g, obj, "resourceSubType", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.riverSystem>([\s\S]*?)<\/cim:RegisteredGenerator.riverSystem>/g, obj, "riverSystem", base.to_string, sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.RMNRFlag\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RMNRFlag", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.RMRFlag\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RMRFlag", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.RMRManualIndicator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RMRManualIndicator", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.RMTFlag\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RMTFlag", sub, context);
                base.parse_element (/<cim:RegisteredGenerator.spinRampRate>([\s\S]*?)<\/cim:RegisteredGenerator.spinRampRate>/g, obj, "spinRampRate", base.to_string, sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.startUpCostBasis\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "startUpCostBasis", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.syncCondCapable\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "syncCondCapable", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.unitType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "unitType", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.useLimitFlag\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "useLimitFlag", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.variableEnergyResource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "variableEnergyResource", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.MktHeatRateCurve\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MktHeatRateCurve", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.StartUpTimeCurve\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "StartUpTimeCurve", sub, context);
                base.parse_attributes (/<cim:RegisteredGenerator.UnitInitialConditions\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "UnitInitialConditions", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.StartUpFuelCurve\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "StartUpFuelCurve", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.RMRStartUpFuelCurve\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RMRStartUpFuelCurve", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.StartUpEnergyCurve\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "StartUpEnergyCurve", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.RMRStartUpCostCurve\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RMRStartUpCostCurve", sub, context);
                base.parse_attributes (/<cim:RegisteredGenerator.AuxillaryObject\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AuxillaryObject", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.LocalReliabilityArea\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LocalReliabilityArea", sub, context);
                base.parse_attributes (/<cim:RegisteredGenerator.Trade\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Trade", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.RegulatingLimit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegulatingLimit", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.FuelRegion\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FuelRegion", sub, context);
                base.parse_attributes (/<cim:RegisteredGenerator.StartUpCostCurves\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "StartUpCostCurves", sub, context);
                base.parse_attributes (/<cim:RegisteredGenerator.GeneratingBids\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingBids", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.EnergyPriceIndex\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnergyPriceIndex", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.RMRStartUpEnergyCurve\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RMRStartUpEnergyCurve", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.FuelCostCurve\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FuelCostCurve", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.RMRStartUpTimeCurve\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RMRStartUpTimeCurve", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.RMRHeatRateCurve\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RMRHeatRateCurve", sub, context);
                let bucket = context.parsed.RegisteredGenerator;
                if (null == bucket)
                   context.parsed.RegisteredGenerator = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = MarketCommon.RegisteredResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "RegisteredGenerator", "capacityFactor", "capacityFactor",  base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "coldStartTime", "coldStartTime",  base.from_float, fields);
                base.export_element (obj, "RegisteredGenerator", "combinedCycleOperatingMode", "combinedCycleOperatingMode",  base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "commericialOperationDate", "commericialOperationDate",  base.from_datetime, fields);
                base.export_attribute (obj, "RegisteredGenerator", "constrainedOutputFlag", "constrainedOutputFlag", fields);
                base.export_element (obj, "RegisteredGenerator", "energyDownRampRate", "energyDownRampRate",  base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "energyUpRampRate", "energyUpRampRate",  base.from_string, fields);
                base.export_attribute (obj, "RegisteredGenerator", "extremeLongStart", "extremeLongStart", fields);
                base.export_attribute (obj, "RegisteredGenerator", "fuelSource", "fuelSource", fields);
                base.export_element (obj, "RegisteredGenerator", "highControlLimit", "highControlLimit",  base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "hotIntTime", "hotIntTime",  base.from_float, fields);
                base.export_element (obj, "RegisteredGenerator", "hotStartTime", "hotStartTime",  base.from_float, fields);
                base.export_element (obj, "RegisteredGenerator", "intColdTime", "intColdTime",  base.from_float, fields);
                base.export_element (obj, "RegisteredGenerator", "intStartTime", "intStartTime",  base.from_float, fields);
                base.export_attribute (obj, "RegisteredGenerator", "loadFollowingDownMSS", "loadFollowingDownMSS", fields);
                base.export_attribute (obj, "RegisteredGenerator", "loadFollowingUpMSS", "loadFollowingUpMSS", fields);
                base.export_element (obj, "RegisteredGenerator", "lowControlLImit", "lowControlLImit",  base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "maxDependableCap", "maxDependableCap",  base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "maximumAllowableSpinningReserve", "maximumAllowableSpinningReserve",  base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "maximumOperatingLimit", "maximumOperatingLimit",  base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "maxMinLoadCost", "maxMinLoadCost",  base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "maxPumpingLevel", "maxPumpingLevel",  base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "maxShutdownTime", "maxShutdownTime",  base.from_datetime, fields);
                base.export_element (obj, "RegisteredGenerator", "maxStartUpsPerDay", "maxStartUpsPerDay",  base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "maxWeeklyEnergy", "maxWeeklyEnergy",  base.from_float, fields);
                base.export_element (obj, "RegisteredGenerator", "maxWeeklyStarts", "maxWeeklyStarts",  base.from_string, fields);
                base.export_attribute (obj, "RegisteredGenerator", "minimumLoadCostBasis", "minimumLoadCostBasis", fields);
                base.export_element (obj, "RegisteredGenerator", "minimumLoadFuelCost", "minimumLoadFuelCost",  base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "minimumOperatingLimit", "minimumOperatingLimit",  base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "minLoadCost", "minLoadCost",  base.from_string, fields);
                base.export_attribute (obj, "RegisteredGenerator", "mustOfferRA", "mustOfferRA", fields);
                base.export_element (obj, "RegisteredGenerator", "nameplateCapacity", "nameplateCapacity",  base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "operatingMaintenanceCost", "operatingMaintenanceCost",  base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "pumpingCost", "pumpingCost",  base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "pumpingFactor", "pumpingFactor",  base.from_float, fields);
                base.export_element (obj, "RegisteredGenerator", "pumpMinDownTime", "pumpMinDownTime",  base.from_float, fields);
                base.export_element (obj, "RegisteredGenerator", "pumpMinUpTime", "pumpMinUpTime",  base.from_float, fields);
                base.export_element (obj, "RegisteredGenerator", "pumpShutdownCost", "pumpShutdownCost",  base.from_float, fields);
                base.export_element (obj, "RegisteredGenerator", "pumpShutdownTime", "pumpShutdownTime",  base.from_string, fields);
                base.export_attribute (obj, "RegisteredGenerator", "quickStartFlag", "quickStartFlag", fields);
                base.export_attribute (obj, "RegisteredGenerator", "rampCurveType", "rampCurveType", fields);
                base.export_element (obj, "RegisteredGenerator", "regulationDownRampRate", "regulationDownRampRate",  base.from_string, fields);
                base.export_attribute (obj, "RegisteredGenerator", "regulationFlag", "regulationFlag", fields);
                base.export_element (obj, "RegisteredGenerator", "regulationUpRampRate", "regulationUpRampRate",  base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "resourceSubType", "resourceSubType",  base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "riverSystem", "riverSystem",  base.from_string, fields);
                base.export_attribute (obj, "RegisteredGenerator", "RMNRFlag", "RMNRFlag", fields);
                base.export_attribute (obj, "RegisteredGenerator", "RMRFlag", "RMRFlag", fields);
                base.export_attribute (obj, "RegisteredGenerator", "RMRManualIndicator", "RMRManualIndicator", fields);
                base.export_attribute (obj, "RegisteredGenerator", "RMTFlag", "RMTFlag", fields);
                base.export_element (obj, "RegisteredGenerator", "spinRampRate", "spinRampRate",  base.from_string, fields);
                base.export_attribute (obj, "RegisteredGenerator", "startUpCostBasis", "startUpCostBasis", fields);
                base.export_attribute (obj, "RegisteredGenerator", "syncCondCapable", "syncCondCapable", fields);
                base.export_attribute (obj, "RegisteredGenerator", "unitType", "unitType", fields);
                base.export_attribute (obj, "RegisteredGenerator", "useLimitFlag", "useLimitFlag", fields);
                base.export_attribute (obj, "RegisteredGenerator", "variableEnergyResource", "variableEnergyResource", fields);
                base.export_attribute (obj, "RegisteredGenerator", "MktHeatRateCurve", "MktHeatRateCurve", fields);
                base.export_attribute (obj, "RegisteredGenerator", "StartUpTimeCurve", "StartUpTimeCurve", fields);
                base.export_attributes (obj, "RegisteredGenerator", "UnitInitialConditions", "UnitInitialConditions", fields);
                base.export_attribute (obj, "RegisteredGenerator", "StartUpFuelCurve", "StartUpFuelCurve", fields);
                base.export_attribute (obj, "RegisteredGenerator", "RMRStartUpFuelCurve", "RMRStartUpFuelCurve", fields);
                base.export_attribute (obj, "RegisteredGenerator", "StartUpEnergyCurve", "StartUpEnergyCurve", fields);
                base.export_attribute (obj, "RegisteredGenerator", "RMRStartUpCostCurve", "RMRStartUpCostCurve", fields);
                base.export_attributes (obj, "RegisteredGenerator", "AuxillaryObject", "AuxillaryObject", fields);
                base.export_attribute (obj, "RegisteredGenerator", "LocalReliabilityArea", "LocalReliabilityArea", fields);
                base.export_attributes (obj, "RegisteredGenerator", "Trade", "Trade", fields);
                base.export_attribute (obj, "RegisteredGenerator", "RegulatingLimit", "RegulatingLimit", fields);
                base.export_attribute (obj, "RegisteredGenerator", "FuelRegion", "FuelRegion", fields);
                base.export_attributes (obj, "RegisteredGenerator", "StartUpCostCurves", "StartUpCostCurves", fields);
                base.export_attributes (obj, "RegisteredGenerator", "GeneratingBids", "GeneratingBids", fields);
                base.export_attribute (obj, "RegisteredGenerator", "EnergyPriceIndex", "EnergyPriceIndex", fields);
                base.export_attribute (obj, "RegisteredGenerator", "RMRStartUpEnergyCurve", "RMRStartUpEnergyCurve", fields);
                base.export_attribute (obj, "RegisteredGenerator", "FuelCostCurve", "FuelCostCurve", fields);
                base.export_attribute (obj, "RegisteredGenerator", "RMRStartUpTimeCurve", "RMRStartUpTimeCurve", fields);
                base.export_attribute (obj, "RegisteredGenerator", "RMRHeatRateCurve", "RMRHeatRateCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RegisteredGenerator_collapse" aria-expanded="true" aria-controls="RegisteredGenerator_collapse" style="margin-left: 10px;">RegisteredGenerator</a></legend>
                    <div id="RegisteredGenerator_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + MarketCommon.RegisteredResource.prototype.template.call (this) +
                    `
                    {{#capacityFactor}}<div><b>capacityFactor</b>: {{capacityFactor}}</div>{{/capacityFactor}}
                    {{#coldStartTime}}<div><b>coldStartTime</b>: {{coldStartTime}}</div>{{/coldStartTime}}
                    {{#combinedCycleOperatingMode}}<div><b>combinedCycleOperatingMode</b>: {{combinedCycleOperatingMode}}</div>{{/combinedCycleOperatingMode}}
                    {{#commericialOperationDate}}<div><b>commericialOperationDate</b>: {{commericialOperationDate}}</div>{{/commericialOperationDate}}
                    {{#constrainedOutputFlag}}<div><b>constrainedOutputFlag</b>: {{constrainedOutputFlag}}</div>{{/constrainedOutputFlag}}
                    {{#energyDownRampRate}}<div><b>energyDownRampRate</b>: {{energyDownRampRate}}</div>{{/energyDownRampRate}}
                    {{#energyUpRampRate}}<div><b>energyUpRampRate</b>: {{energyUpRampRate}}</div>{{/energyUpRampRate}}
                    {{#extremeLongStart}}<div><b>extremeLongStart</b>: {{extremeLongStart}}</div>{{/extremeLongStart}}
                    {{#fuelSource}}<div><b>fuelSource</b>: {{fuelSource}}</div>{{/fuelSource}}
                    {{#highControlLimit}}<div><b>highControlLimit</b>: {{highControlLimit}}</div>{{/highControlLimit}}
                    {{#hotIntTime}}<div><b>hotIntTime</b>: {{hotIntTime}}</div>{{/hotIntTime}}
                    {{#hotStartTime}}<div><b>hotStartTime</b>: {{hotStartTime}}</div>{{/hotStartTime}}
                    {{#intColdTime}}<div><b>intColdTime</b>: {{intColdTime}}</div>{{/intColdTime}}
                    {{#intStartTime}}<div><b>intStartTime</b>: {{intStartTime}}</div>{{/intStartTime}}
                    {{#loadFollowingDownMSS}}<div><b>loadFollowingDownMSS</b>: {{loadFollowingDownMSS}}</div>{{/loadFollowingDownMSS}}
                    {{#loadFollowingUpMSS}}<div><b>loadFollowingUpMSS</b>: {{loadFollowingUpMSS}}</div>{{/loadFollowingUpMSS}}
                    {{#lowControlLImit}}<div><b>lowControlLImit</b>: {{lowControlLImit}}</div>{{/lowControlLImit}}
                    {{#maxDependableCap}}<div><b>maxDependableCap</b>: {{maxDependableCap}}</div>{{/maxDependableCap}}
                    {{#maximumAllowableSpinningReserve}}<div><b>maximumAllowableSpinningReserve</b>: {{maximumAllowableSpinningReserve}}</div>{{/maximumAllowableSpinningReserve}}
                    {{#maximumOperatingLimit}}<div><b>maximumOperatingLimit</b>: {{maximumOperatingLimit}}</div>{{/maximumOperatingLimit}}
                    {{#maxMinLoadCost}}<div><b>maxMinLoadCost</b>: {{maxMinLoadCost}}</div>{{/maxMinLoadCost}}
                    {{#maxPumpingLevel}}<div><b>maxPumpingLevel</b>: {{maxPumpingLevel}}</div>{{/maxPumpingLevel}}
                    {{#maxShutdownTime}}<div><b>maxShutdownTime</b>: {{maxShutdownTime}}</div>{{/maxShutdownTime}}
                    {{#maxStartUpsPerDay}}<div><b>maxStartUpsPerDay</b>: {{maxStartUpsPerDay}}</div>{{/maxStartUpsPerDay}}
                    {{#maxWeeklyEnergy}}<div><b>maxWeeklyEnergy</b>: {{maxWeeklyEnergy}}</div>{{/maxWeeklyEnergy}}
                    {{#maxWeeklyStarts}}<div><b>maxWeeklyStarts</b>: {{maxWeeklyStarts}}</div>{{/maxWeeklyStarts}}
                    {{#minimumLoadCostBasis}}<div><b>minimumLoadCostBasis</b>: {{minimumLoadCostBasis}}</div>{{/minimumLoadCostBasis}}
                    {{#minimumLoadFuelCost}}<div><b>minimumLoadFuelCost</b>: {{minimumLoadFuelCost}}</div>{{/minimumLoadFuelCost}}
                    {{#minimumOperatingLimit}}<div><b>minimumOperatingLimit</b>: {{minimumOperatingLimit}}</div>{{/minimumOperatingLimit}}
                    {{#minLoadCost}}<div><b>minLoadCost</b>: {{minLoadCost}}</div>{{/minLoadCost}}
                    {{#mustOfferRA}}<div><b>mustOfferRA</b>: {{mustOfferRA}}</div>{{/mustOfferRA}}
                    {{#nameplateCapacity}}<div><b>nameplateCapacity</b>: {{nameplateCapacity}}</div>{{/nameplateCapacity}}
                    {{#operatingMaintenanceCost}}<div><b>operatingMaintenanceCost</b>: {{operatingMaintenanceCost}}</div>{{/operatingMaintenanceCost}}
                    {{#pumpingCost}}<div><b>pumpingCost</b>: {{pumpingCost}}</div>{{/pumpingCost}}
                    {{#pumpingFactor}}<div><b>pumpingFactor</b>: {{pumpingFactor}}</div>{{/pumpingFactor}}
                    {{#pumpMinDownTime}}<div><b>pumpMinDownTime</b>: {{pumpMinDownTime}}</div>{{/pumpMinDownTime}}
                    {{#pumpMinUpTime}}<div><b>pumpMinUpTime</b>: {{pumpMinUpTime}}</div>{{/pumpMinUpTime}}
                    {{#pumpShutdownCost}}<div><b>pumpShutdownCost</b>: {{pumpShutdownCost}}</div>{{/pumpShutdownCost}}
                    {{#pumpShutdownTime}}<div><b>pumpShutdownTime</b>: {{pumpShutdownTime}}</div>{{/pumpShutdownTime}}
                    {{#quickStartFlag}}<div><b>quickStartFlag</b>: {{quickStartFlag}}</div>{{/quickStartFlag}}
                    {{#rampCurveType}}<div><b>rampCurveType</b>: {{rampCurveType}}</div>{{/rampCurveType}}
                    {{#regulationDownRampRate}}<div><b>regulationDownRampRate</b>: {{regulationDownRampRate}}</div>{{/regulationDownRampRate}}
                    {{#regulationFlag}}<div><b>regulationFlag</b>: {{regulationFlag}}</div>{{/regulationFlag}}
                    {{#regulationUpRampRate}}<div><b>regulationUpRampRate</b>: {{regulationUpRampRate}}</div>{{/regulationUpRampRate}}
                    {{#resourceSubType}}<div><b>resourceSubType</b>: {{resourceSubType}}</div>{{/resourceSubType}}
                    {{#riverSystem}}<div><b>riverSystem</b>: {{riverSystem}}</div>{{/riverSystem}}
                    {{#RMNRFlag}}<div><b>RMNRFlag</b>: {{RMNRFlag}}</div>{{/RMNRFlag}}
                    {{#RMRFlag}}<div><b>RMRFlag</b>: {{RMRFlag}}</div>{{/RMRFlag}}
                    {{#RMRManualIndicator}}<div><b>RMRManualIndicator</b>: {{RMRManualIndicator}}</div>{{/RMRManualIndicator}}
                    {{#RMTFlag}}<div><b>RMTFlag</b>: {{RMTFlag}}</div>{{/RMTFlag}}
                    {{#spinRampRate}}<div><b>spinRampRate</b>: {{spinRampRate}}</div>{{/spinRampRate}}
                    {{#startUpCostBasis}}<div><b>startUpCostBasis</b>: {{startUpCostBasis}}</div>{{/startUpCostBasis}}
                    {{#syncCondCapable}}<div><b>syncCondCapable</b>: {{syncCondCapable}}</div>{{/syncCondCapable}}
                    {{#unitType}}<div><b>unitType</b>: {{unitType}}</div>{{/unitType}}
                    {{#useLimitFlag}}<div><b>useLimitFlag</b>: {{useLimitFlag}}</div>{{/useLimitFlag}}
                    {{#variableEnergyResource}}<div><b>variableEnergyResource</b>: {{variableEnergyResource}}</div>{{/variableEnergyResource}}
                    {{#MktHeatRateCurve}}<div><b>MktHeatRateCurve</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{MktHeatRateCurve}}");}); return false;'>{{MktHeatRateCurve}}</a></div>{{/MktHeatRateCurve}}
                    {{#StartUpTimeCurve}}<div><b>StartUpTimeCurve</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{StartUpTimeCurve}}");}); return false;'>{{StartUpTimeCurve}}</a></div>{{/StartUpTimeCurve}}
                    {{#UnitInitialConditions}}<div><b>UnitInitialConditions</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/UnitInitialConditions}}
                    {{#StartUpFuelCurve}}<div><b>StartUpFuelCurve</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{StartUpFuelCurve}}");}); return false;'>{{StartUpFuelCurve}}</a></div>{{/StartUpFuelCurve}}
                    {{#RMRStartUpFuelCurve}}<div><b>RMRStartUpFuelCurve</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RMRStartUpFuelCurve}}");}); return false;'>{{RMRStartUpFuelCurve}}</a></div>{{/RMRStartUpFuelCurve}}
                    {{#StartUpEnergyCurve}}<div><b>StartUpEnergyCurve</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{StartUpEnergyCurve}}");}); return false;'>{{StartUpEnergyCurve}}</a></div>{{/StartUpEnergyCurve}}
                    {{#RMRStartUpCostCurve}}<div><b>RMRStartUpCostCurve</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RMRStartUpCostCurve}}");}); return false;'>{{RMRStartUpCostCurve}}</a></div>{{/RMRStartUpCostCurve}}
                    {{#AuxillaryObject}}<div><b>AuxillaryObject</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AuxillaryObject}}
                    {{#LocalReliabilityArea}}<div><b>LocalReliabilityArea</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{LocalReliabilityArea}}");}); return false;'>{{LocalReliabilityArea}}</a></div>{{/LocalReliabilityArea}}
                    {{#Trade}}<div><b>Trade</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Trade}}
                    {{#RegulatingLimit}}<div><b>RegulatingLimit</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RegulatingLimit}}");}); return false;'>{{RegulatingLimit}}</a></div>{{/RegulatingLimit}}
                    {{#FuelRegion}}<div><b>FuelRegion</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{FuelRegion}}");}); return false;'>{{FuelRegion}}</a></div>{{/FuelRegion}}
                    {{#StartUpCostCurves}}<div><b>StartUpCostCurves</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/StartUpCostCurves}}
                    {{#GeneratingBids}}<div><b>GeneratingBids</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/GeneratingBids}}
                    {{#EnergyPriceIndex}}<div><b>EnergyPriceIndex</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{EnergyPriceIndex}}");}); return false;'>{{EnergyPriceIndex}}</a></div>{{/EnergyPriceIndex}}
                    {{#RMRStartUpEnergyCurve}}<div><b>RMRStartUpEnergyCurve</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RMRStartUpEnergyCurve}}");}); return false;'>{{RMRStartUpEnergyCurve}}</a></div>{{/RMRStartUpEnergyCurve}}
                    {{#FuelCostCurve}}<div><b>FuelCostCurve</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{FuelCostCurve}}");}); return false;'>{{FuelCostCurve}}</a></div>{{/FuelCostCurve}}
                    {{#RMRStartUpTimeCurve}}<div><b>RMRStartUpTimeCurve</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RMRStartUpTimeCurve}}");}); return false;'>{{RMRStartUpTimeCurve}}</a></div>{{/RMRStartUpTimeCurve}}
                    {{#RMRHeatRateCurve}}<div><b>RMRHeatRateCurve</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RMRHeatRateCurve}}");}); return false;'>{{RMRHeatRateCurve}}</a></div>{{/RMRHeatRateCurve}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["constrainedOutputFlagYesNo"] = [{ id: '', selected: (!obj["constrainedOutputFlag"])}]; for (let property in MktDomain.YesNo) obj["constrainedOutputFlagYesNo"].push ({ id: property, selected: obj["constrainedOutputFlag"] && obj["constrainedOutputFlag"].endsWith ('.' + property)});
                obj["extremeLongStartYesNo"] = [{ id: '', selected: (!obj["extremeLongStart"])}]; for (let property in MktDomain.YesNo) obj["extremeLongStartYesNo"].push ({ id: property, selected: obj["extremeLongStart"] && obj["extremeLongStart"].endsWith ('.' + property)});
                obj["fuelSourceFuelSource"] = [{ id: '', selected: (!obj["fuelSource"])}]; for (let property in MktDomain.FuelSource) obj["fuelSourceFuelSource"].push ({ id: property, selected: obj["fuelSource"] && obj["fuelSource"].endsWith ('.' + property)});
                obj["loadFollowingDownMSSYesNo"] = [{ id: '', selected: (!obj["loadFollowingDownMSS"])}]; for (let property in MktDomain.YesNo) obj["loadFollowingDownMSSYesNo"].push ({ id: property, selected: obj["loadFollowingDownMSS"] && obj["loadFollowingDownMSS"].endsWith ('.' + property)});
                obj["loadFollowingUpMSSYesNo"] = [{ id: '', selected: (!obj["loadFollowingUpMSS"])}]; for (let property in MktDomain.YesNo) obj["loadFollowingUpMSSYesNo"].push ({ id: property, selected: obj["loadFollowingUpMSS"] && obj["loadFollowingUpMSS"].endsWith ('.' + property)});
                obj["minimumLoadCostBasisCostBasis"] = [{ id: '', selected: (!obj["minimumLoadCostBasis"])}]; for (let property in MktDomain.CostBasis) obj["minimumLoadCostBasisCostBasis"].push ({ id: property, selected: obj["minimumLoadCostBasis"] && obj["minimumLoadCostBasis"].endsWith ('.' + property)});
                obj["mustOfferRAYesNo"] = [{ id: '', selected: (!obj["mustOfferRA"])}]; for (let property in MktDomain.YesNo) obj["mustOfferRAYesNo"].push ({ id: property, selected: obj["mustOfferRA"] && obj["mustOfferRA"].endsWith ('.' + property)});
                obj["quickStartFlagYesNo"] = [{ id: '', selected: (!obj["quickStartFlag"])}]; for (let property in MktDomain.YesNo) obj["quickStartFlagYesNo"].push ({ id: property, selected: obj["quickStartFlag"] && obj["quickStartFlag"].endsWith ('.' + property)});
                obj["rampCurveTypeRampCurveType"] = [{ id: '', selected: (!obj["rampCurveType"])}]; for (let property in MktDomain.RampCurveType) obj["rampCurveTypeRampCurveType"].push ({ id: property, selected: obj["rampCurveType"] && obj["rampCurveType"].endsWith ('.' + property)});
                obj["regulationFlagUnitRegulationKind"] = [{ id: '', selected: (!obj["regulationFlag"])}]; for (let property in MktDomain.UnitRegulationKind) obj["regulationFlagUnitRegulationKind"].push ({ id: property, selected: obj["regulationFlag"] && obj["regulationFlag"].endsWith ('.' + property)});
                obj["RMNRFlagYesNo"] = [{ id: '', selected: (!obj["RMNRFlag"])}]; for (let property in MktDomain.YesNo) obj["RMNRFlagYesNo"].push ({ id: property, selected: obj["RMNRFlag"] && obj["RMNRFlag"].endsWith ('.' + property)});
                obj["RMRFlagFlagTypeRMR"] = [{ id: '', selected: (!obj["RMRFlag"])}]; for (let property in MktDomain.FlagTypeRMR) obj["RMRFlagFlagTypeRMR"].push ({ id: property, selected: obj["RMRFlag"] && obj["RMRFlag"].endsWith ('.' + property)});
                obj["RMRManualIndicatorYesNo"] = [{ id: '', selected: (!obj["RMRManualIndicator"])}]; for (let property in MktDomain.YesNo) obj["RMRManualIndicatorYesNo"].push ({ id: property, selected: obj["RMRManualIndicator"] && obj["RMRManualIndicator"].endsWith ('.' + property)});
                obj["RMTFlagYesNo"] = [{ id: '', selected: (!obj["RMTFlag"])}]; for (let property in MktDomain.YesNo) obj["RMTFlagYesNo"].push ({ id: property, selected: obj["RMTFlag"] && obj["RMTFlag"].endsWith ('.' + property)});
                obj["startUpCostBasisCostBasis"] = [{ id: '', selected: (!obj["startUpCostBasis"])}]; for (let property in MktDomain.CostBasis) obj["startUpCostBasisCostBasis"].push ({ id: property, selected: obj["startUpCostBasis"] && obj["startUpCostBasis"].endsWith ('.' + property)});
                obj["syncCondCapableYesNo"] = [{ id: '', selected: (!obj["syncCondCapable"])}]; for (let property in MktDomain.YesNo) obj["syncCondCapableYesNo"].push ({ id: property, selected: obj["syncCondCapable"] && obj["syncCondCapable"].endsWith ('.' + property)});
                obj["unitTypeUnitType"] = [{ id: '', selected: (!obj["unitType"])}]; for (let property in MktDomain.UnitType) obj["unitTypeUnitType"].push ({ id: property, selected: obj["unitType"] && obj["unitType"].endsWith ('.' + property)});
                obj["useLimitFlagYesNo"] = [{ id: '', selected: (!obj["useLimitFlag"])}]; for (let property in MktDomain.YesNo) obj["useLimitFlagYesNo"].push ({ id: property, selected: obj["useLimitFlag"] && obj["useLimitFlag"].endsWith ('.' + property)});
                obj["variableEnergyResourceYesNo"] = [{ id: '', selected: (!obj["variableEnergyResource"])}]; for (let property in MktDomain.YesNo) obj["variableEnergyResourceYesNo"].push ({ id: property, selected: obj["variableEnergyResource"] && obj["variableEnergyResource"].endsWith ('.' + property)});
                if (obj["UnitInitialConditions"]) obj["UnitInitialConditions_string"] = obj["UnitInitialConditions"].join ();
                if (obj["AuxillaryObject"]) obj["AuxillaryObject_string"] = obj["AuxillaryObject"].join ();
                if (obj["Trade"]) obj["Trade_string"] = obj["Trade"].join ();
                if (obj["StartUpCostCurves"]) obj["StartUpCostCurves_string"] = obj["StartUpCostCurves"].join ();
                if (obj["GeneratingBids"]) obj["GeneratingBids_string"] = obj["GeneratingBids"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["constrainedOutputFlagYesNo"];
                delete obj["extremeLongStartYesNo"];
                delete obj["fuelSourceFuelSource"];
                delete obj["loadFollowingDownMSSYesNo"];
                delete obj["loadFollowingUpMSSYesNo"];
                delete obj["minimumLoadCostBasisCostBasis"];
                delete obj["mustOfferRAYesNo"];
                delete obj["quickStartFlagYesNo"];
                delete obj["rampCurveTypeRampCurveType"];
                delete obj["regulationFlagUnitRegulationKind"];
                delete obj["RMNRFlagYesNo"];
                delete obj["RMRFlagFlagTypeRMR"];
                delete obj["RMRManualIndicatorYesNo"];
                delete obj["RMTFlagYesNo"];
                delete obj["startUpCostBasisCostBasis"];
                delete obj["syncCondCapableYesNo"];
                delete obj["unitTypeUnitType"];
                delete obj["useLimitFlagYesNo"];
                delete obj["variableEnergyResourceYesNo"];
                delete obj["UnitInitialConditions_string"];
                delete obj["AuxillaryObject_string"];
                delete obj["Trade_string"];
                delete obj["StartUpCostCurves_string"];
                delete obj["GeneratingBids_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RegisteredGenerator_collapse" aria-expanded="true" aria-controls="{{id}}_RegisteredGenerator_collapse" style="margin-left: 10px;">RegisteredGenerator</a></legend>
                    <div id="{{id}}_RegisteredGenerator_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + MarketCommon.RegisteredResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_capacityFactor'>capacityFactor: </label><div class='col-sm-8'><input id='{{id}}_capacityFactor' class='form-control' type='text'{{#capacityFactor}} value='{{capacityFactor}}'{{/capacityFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_coldStartTime'>coldStartTime: </label><div class='col-sm-8'><input id='{{id}}_coldStartTime' class='form-control' type='text'{{#coldStartTime}} value='{{coldStartTime}}'{{/coldStartTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_combinedCycleOperatingMode'>combinedCycleOperatingMode: </label><div class='col-sm-8'><input id='{{id}}_combinedCycleOperatingMode' class='form-control' type='text'{{#combinedCycleOperatingMode}} value='{{combinedCycleOperatingMode}}'{{/combinedCycleOperatingMode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_commericialOperationDate'>commericialOperationDate: </label><div class='col-sm-8'><input id='{{id}}_commericialOperationDate' class='form-control' type='text'{{#commericialOperationDate}} value='{{commericialOperationDate}}'{{/commericialOperationDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_constrainedOutputFlag'>constrainedOutputFlag: </label><div class='col-sm-8'><select id='{{id}}_constrainedOutputFlag' class='form-control custom-select'>{{#constrainedOutputFlagYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/constrainedOutputFlagYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_energyDownRampRate'>energyDownRampRate: </label><div class='col-sm-8'><input id='{{id}}_energyDownRampRate' class='form-control' type='text'{{#energyDownRampRate}} value='{{energyDownRampRate}}'{{/energyDownRampRate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_energyUpRampRate'>energyUpRampRate: </label><div class='col-sm-8'><input id='{{id}}_energyUpRampRate' class='form-control' type='text'{{#energyUpRampRate}} value='{{energyUpRampRate}}'{{/energyUpRampRate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_extremeLongStart'>extremeLongStart: </label><div class='col-sm-8'><select id='{{id}}_extremeLongStart' class='form-control custom-select'>{{#extremeLongStartYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/extremeLongStartYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fuelSource'>fuelSource: </label><div class='col-sm-8'><select id='{{id}}_fuelSource' class='form-control custom-select'>{{#fuelSourceFuelSource}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/fuelSourceFuelSource}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_highControlLimit'>highControlLimit: </label><div class='col-sm-8'><input id='{{id}}_highControlLimit' class='form-control' type='text'{{#highControlLimit}} value='{{highControlLimit}}'{{/highControlLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_hotIntTime'>hotIntTime: </label><div class='col-sm-8'><input id='{{id}}_hotIntTime' class='form-control' type='text'{{#hotIntTime}} value='{{hotIntTime}}'{{/hotIntTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_hotStartTime'>hotStartTime: </label><div class='col-sm-8'><input id='{{id}}_hotStartTime' class='form-control' type='text'{{#hotStartTime}} value='{{hotStartTime}}'{{/hotStartTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_intColdTime'>intColdTime: </label><div class='col-sm-8'><input id='{{id}}_intColdTime' class='form-control' type='text'{{#intColdTime}} value='{{intColdTime}}'{{/intColdTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_intStartTime'>intStartTime: </label><div class='col-sm-8'><input id='{{id}}_intStartTime' class='form-control' type='text'{{#intStartTime}} value='{{intStartTime}}'{{/intStartTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_loadFollowingDownMSS'>loadFollowingDownMSS: </label><div class='col-sm-8'><select id='{{id}}_loadFollowingDownMSS' class='form-control custom-select'>{{#loadFollowingDownMSSYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/loadFollowingDownMSSYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_loadFollowingUpMSS'>loadFollowingUpMSS: </label><div class='col-sm-8'><select id='{{id}}_loadFollowingUpMSS' class='form-control custom-select'>{{#loadFollowingUpMSSYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/loadFollowingUpMSSYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lowControlLImit'>lowControlLImit: </label><div class='col-sm-8'><input id='{{id}}_lowControlLImit' class='form-control' type='text'{{#lowControlLImit}} value='{{lowControlLImit}}'{{/lowControlLImit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxDependableCap'>maxDependableCap: </label><div class='col-sm-8'><input id='{{id}}_maxDependableCap' class='form-control' type='text'{{#maxDependableCap}} value='{{maxDependableCap}}'{{/maxDependableCap}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maximumAllowableSpinningReserve'>maximumAllowableSpinningReserve: </label><div class='col-sm-8'><input id='{{id}}_maximumAllowableSpinningReserve' class='form-control' type='text'{{#maximumAllowableSpinningReserve}} value='{{maximumAllowableSpinningReserve}}'{{/maximumAllowableSpinningReserve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maximumOperatingLimit'>maximumOperatingLimit: </label><div class='col-sm-8'><input id='{{id}}_maximumOperatingLimit' class='form-control' type='text'{{#maximumOperatingLimit}} value='{{maximumOperatingLimit}}'{{/maximumOperatingLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxMinLoadCost'>maxMinLoadCost: </label><div class='col-sm-8'><input id='{{id}}_maxMinLoadCost' class='form-control' type='text'{{#maxMinLoadCost}} value='{{maxMinLoadCost}}'{{/maxMinLoadCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxPumpingLevel'>maxPumpingLevel: </label><div class='col-sm-8'><input id='{{id}}_maxPumpingLevel' class='form-control' type='text'{{#maxPumpingLevel}} value='{{maxPumpingLevel}}'{{/maxPumpingLevel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxShutdownTime'>maxShutdownTime: </label><div class='col-sm-8'><input id='{{id}}_maxShutdownTime' class='form-control' type='text'{{#maxShutdownTime}} value='{{maxShutdownTime}}'{{/maxShutdownTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxStartUpsPerDay'>maxStartUpsPerDay: </label><div class='col-sm-8'><input id='{{id}}_maxStartUpsPerDay' class='form-control' type='text'{{#maxStartUpsPerDay}} value='{{maxStartUpsPerDay}}'{{/maxStartUpsPerDay}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxWeeklyEnergy'>maxWeeklyEnergy: </label><div class='col-sm-8'><input id='{{id}}_maxWeeklyEnergy' class='form-control' type='text'{{#maxWeeklyEnergy}} value='{{maxWeeklyEnergy}}'{{/maxWeeklyEnergy}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxWeeklyStarts'>maxWeeklyStarts: </label><div class='col-sm-8'><input id='{{id}}_maxWeeklyStarts' class='form-control' type='text'{{#maxWeeklyStarts}} value='{{maxWeeklyStarts}}'{{/maxWeeklyStarts}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minimumLoadCostBasis'>minimumLoadCostBasis: </label><div class='col-sm-8'><select id='{{id}}_minimumLoadCostBasis' class='form-control custom-select'>{{#minimumLoadCostBasisCostBasis}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/minimumLoadCostBasisCostBasis}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minimumLoadFuelCost'>minimumLoadFuelCost: </label><div class='col-sm-8'><input id='{{id}}_minimumLoadFuelCost' class='form-control' type='text'{{#minimumLoadFuelCost}} value='{{minimumLoadFuelCost}}'{{/minimumLoadFuelCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minimumOperatingLimit'>minimumOperatingLimit: </label><div class='col-sm-8'><input id='{{id}}_minimumOperatingLimit' class='form-control' type='text'{{#minimumOperatingLimit}} value='{{minimumOperatingLimit}}'{{/minimumOperatingLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minLoadCost'>minLoadCost: </label><div class='col-sm-8'><input id='{{id}}_minLoadCost' class='form-control' type='text'{{#minLoadCost}} value='{{minLoadCost}}'{{/minLoadCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mustOfferRA'>mustOfferRA: </label><div class='col-sm-8'><select id='{{id}}_mustOfferRA' class='form-control custom-select'>{{#mustOfferRAYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/mustOfferRAYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_nameplateCapacity'>nameplateCapacity: </label><div class='col-sm-8'><input id='{{id}}_nameplateCapacity' class='form-control' type='text'{{#nameplateCapacity}} value='{{nameplateCapacity}}'{{/nameplateCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_operatingMaintenanceCost'>operatingMaintenanceCost: </label><div class='col-sm-8'><input id='{{id}}_operatingMaintenanceCost' class='form-control' type='text'{{#operatingMaintenanceCost}} value='{{operatingMaintenanceCost}}'{{/operatingMaintenanceCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pumpingCost'>pumpingCost: </label><div class='col-sm-8'><input id='{{id}}_pumpingCost' class='form-control' type='text'{{#pumpingCost}} value='{{pumpingCost}}'{{/pumpingCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pumpingFactor'>pumpingFactor: </label><div class='col-sm-8'><input id='{{id}}_pumpingFactor' class='form-control' type='text'{{#pumpingFactor}} value='{{pumpingFactor}}'{{/pumpingFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pumpMinDownTime'>pumpMinDownTime: </label><div class='col-sm-8'><input id='{{id}}_pumpMinDownTime' class='form-control' type='text'{{#pumpMinDownTime}} value='{{pumpMinDownTime}}'{{/pumpMinDownTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pumpMinUpTime'>pumpMinUpTime: </label><div class='col-sm-8'><input id='{{id}}_pumpMinUpTime' class='form-control' type='text'{{#pumpMinUpTime}} value='{{pumpMinUpTime}}'{{/pumpMinUpTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pumpShutdownCost'>pumpShutdownCost: </label><div class='col-sm-8'><input id='{{id}}_pumpShutdownCost' class='form-control' type='text'{{#pumpShutdownCost}} value='{{pumpShutdownCost}}'{{/pumpShutdownCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pumpShutdownTime'>pumpShutdownTime: </label><div class='col-sm-8'><input id='{{id}}_pumpShutdownTime' class='form-control' type='text'{{#pumpShutdownTime}} value='{{pumpShutdownTime}}'{{/pumpShutdownTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_quickStartFlag'>quickStartFlag: </label><div class='col-sm-8'><select id='{{id}}_quickStartFlag' class='form-control custom-select'>{{#quickStartFlagYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/quickStartFlagYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rampCurveType'>rampCurveType: </label><div class='col-sm-8'><select id='{{id}}_rampCurveType' class='form-control custom-select'>{{#rampCurveTypeRampCurveType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/rampCurveTypeRampCurveType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_regulationDownRampRate'>regulationDownRampRate: </label><div class='col-sm-8'><input id='{{id}}_regulationDownRampRate' class='form-control' type='text'{{#regulationDownRampRate}} value='{{regulationDownRampRate}}'{{/regulationDownRampRate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_regulationFlag'>regulationFlag: </label><div class='col-sm-8'><select id='{{id}}_regulationFlag' class='form-control custom-select'>{{#regulationFlagUnitRegulationKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/regulationFlagUnitRegulationKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_regulationUpRampRate'>regulationUpRampRate: </label><div class='col-sm-8'><input id='{{id}}_regulationUpRampRate' class='form-control' type='text'{{#regulationUpRampRate}} value='{{regulationUpRampRate}}'{{/regulationUpRampRate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_resourceSubType'>resourceSubType: </label><div class='col-sm-8'><input id='{{id}}_resourceSubType' class='form-control' type='text'{{#resourceSubType}} value='{{resourceSubType}}'{{/resourceSubType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_riverSystem'>riverSystem: </label><div class='col-sm-8'><input id='{{id}}_riverSystem' class='form-control' type='text'{{#riverSystem}} value='{{riverSystem}}'{{/riverSystem}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RMNRFlag'>RMNRFlag: </label><div class='col-sm-8'><select id='{{id}}_RMNRFlag' class='form-control custom-select'>{{#RMNRFlagYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/RMNRFlagYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RMRFlag'>RMRFlag: </label><div class='col-sm-8'><select id='{{id}}_RMRFlag' class='form-control custom-select'>{{#RMRFlagFlagTypeRMR}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/RMRFlagFlagTypeRMR}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RMRManualIndicator'>RMRManualIndicator: </label><div class='col-sm-8'><select id='{{id}}_RMRManualIndicator' class='form-control custom-select'>{{#RMRManualIndicatorYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/RMRManualIndicatorYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RMTFlag'>RMTFlag: </label><div class='col-sm-8'><select id='{{id}}_RMTFlag' class='form-control custom-select'>{{#RMTFlagYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/RMTFlagYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_spinRampRate'>spinRampRate: </label><div class='col-sm-8'><input id='{{id}}_spinRampRate' class='form-control' type='text'{{#spinRampRate}} value='{{spinRampRate}}'{{/spinRampRate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_startUpCostBasis'>startUpCostBasis: </label><div class='col-sm-8'><select id='{{id}}_startUpCostBasis' class='form-control custom-select'>{{#startUpCostBasisCostBasis}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/startUpCostBasisCostBasis}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_syncCondCapable'>syncCondCapable: </label><div class='col-sm-8'><select id='{{id}}_syncCondCapable' class='form-control custom-select'>{{#syncCondCapableYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/syncCondCapableYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unitType'>unitType: </label><div class='col-sm-8'><select id='{{id}}_unitType' class='form-control custom-select'>{{#unitTypeUnitType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/unitTypeUnitType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_useLimitFlag'>useLimitFlag: </label><div class='col-sm-8'><select id='{{id}}_useLimitFlag' class='form-control custom-select'>{{#useLimitFlagYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/useLimitFlagYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_variableEnergyResource'>variableEnergyResource: </label><div class='col-sm-8'><select id='{{id}}_variableEnergyResource' class='form-control custom-select'>{{#variableEnergyResourceYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/variableEnergyResourceYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MktHeatRateCurve'>MktHeatRateCurve: </label><div class='col-sm-8'><input id='{{id}}_MktHeatRateCurve' class='form-control' type='text'{{#MktHeatRateCurve}} value='{{MktHeatRateCurve}}'{{/MktHeatRateCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_StartUpTimeCurve'>StartUpTimeCurve: </label><div class='col-sm-8'><input id='{{id}}_StartUpTimeCurve' class='form-control' type='text'{{#StartUpTimeCurve}} value='{{StartUpTimeCurve}}'{{/StartUpTimeCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_StartUpFuelCurve'>StartUpFuelCurve: </label><div class='col-sm-8'><input id='{{id}}_StartUpFuelCurve' class='form-control' type='text'{{#StartUpFuelCurve}} value='{{StartUpFuelCurve}}'{{/StartUpFuelCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RMRStartUpFuelCurve'>RMRStartUpFuelCurve: </label><div class='col-sm-8'><input id='{{id}}_RMRStartUpFuelCurve' class='form-control' type='text'{{#RMRStartUpFuelCurve}} value='{{RMRStartUpFuelCurve}}'{{/RMRStartUpFuelCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_StartUpEnergyCurve'>StartUpEnergyCurve: </label><div class='col-sm-8'><input id='{{id}}_StartUpEnergyCurve' class='form-control' type='text'{{#StartUpEnergyCurve}} value='{{StartUpEnergyCurve}}'{{/StartUpEnergyCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RMRStartUpCostCurve'>RMRStartUpCostCurve: </label><div class='col-sm-8'><input id='{{id}}_RMRStartUpCostCurve' class='form-control' type='text'{{#RMRStartUpCostCurve}} value='{{RMRStartUpCostCurve}}'{{/RMRStartUpCostCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LocalReliabilityArea'>LocalReliabilityArea: </label><div class='col-sm-8'><input id='{{id}}_LocalReliabilityArea' class='form-control' type='text'{{#LocalReliabilityArea}} value='{{LocalReliabilityArea}}'{{/LocalReliabilityArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegulatingLimit'>RegulatingLimit: </label><div class='col-sm-8'><input id='{{id}}_RegulatingLimit' class='form-control' type='text'{{#RegulatingLimit}} value='{{RegulatingLimit}}'{{/RegulatingLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_FuelRegion'>FuelRegion: </label><div class='col-sm-8'><input id='{{id}}_FuelRegion' class='form-control' type='text'{{#FuelRegion}} value='{{FuelRegion}}'{{/FuelRegion}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_StartUpCostCurves'>StartUpCostCurves: </label><div class='col-sm-8'><input id='{{id}}_StartUpCostCurves' class='form-control' type='text'{{#StartUpCostCurves}} value='{{StartUpCostCurves_string}}'{{/StartUpCostCurves}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnergyPriceIndex'>EnergyPriceIndex: </label><div class='col-sm-8'><input id='{{id}}_EnergyPriceIndex' class='form-control' type='text'{{#EnergyPriceIndex}} value='{{EnergyPriceIndex}}'{{/EnergyPriceIndex}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RMRStartUpEnergyCurve'>RMRStartUpEnergyCurve: </label><div class='col-sm-8'><input id='{{id}}_RMRStartUpEnergyCurve' class='form-control' type='text'{{#RMRStartUpEnergyCurve}} value='{{RMRStartUpEnergyCurve}}'{{/RMRStartUpEnergyCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_FuelCostCurve'>FuelCostCurve: </label><div class='col-sm-8'><input id='{{id}}_FuelCostCurve' class='form-control' type='text'{{#FuelCostCurve}} value='{{FuelCostCurve}}'{{/FuelCostCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RMRStartUpTimeCurve'>RMRStartUpTimeCurve: </label><div class='col-sm-8'><input id='{{id}}_RMRStartUpTimeCurve' class='form-control' type='text'{{#RMRStartUpTimeCurve}} value='{{RMRStartUpTimeCurve}}'{{/RMRStartUpTimeCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RMRHeatRateCurve'>RMRHeatRateCurve: </label><div class='col-sm-8'><input id='{{id}}_RMRHeatRateCurve' class='form-control' type='text'{{#RMRHeatRateCurve}} value='{{RMRHeatRateCurve}}'{{/RMRHeatRateCurve}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "RegisteredGenerator" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_capacityFactor").value; if ("" !== temp) obj["capacityFactor"] = temp;
                temp = document.getElementById (id + "_coldStartTime").value; if ("" !== temp) obj["coldStartTime"] = temp;
                temp = document.getElementById (id + "_combinedCycleOperatingMode").value; if ("" !== temp) obj["combinedCycleOperatingMode"] = temp;
                temp = document.getElementById (id + "_commericialOperationDate").value; if ("" !== temp) obj["commericialOperationDate"] = temp;
                temp = MktDomain.YesNo[document.getElementById (id + "_constrainedOutputFlag").value]; if (temp) obj["constrainedOutputFlag"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["constrainedOutputFlag"];
                temp = document.getElementById (id + "_energyDownRampRate").value; if ("" !== temp) obj["energyDownRampRate"] = temp;
                temp = document.getElementById (id + "_energyUpRampRate").value; if ("" !== temp) obj["energyUpRampRate"] = temp;
                temp = MktDomain.YesNo[document.getElementById (id + "_extremeLongStart").value]; if (temp) obj["extremeLongStart"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["extremeLongStart"];
                temp = MktDomain.FuelSource[document.getElementById (id + "_fuelSource").value]; if (temp) obj["fuelSource"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#FuelSource." + temp; else delete obj["fuelSource"];
                temp = document.getElementById (id + "_highControlLimit").value; if ("" !== temp) obj["highControlLimit"] = temp;
                temp = document.getElementById (id + "_hotIntTime").value; if ("" !== temp) obj["hotIntTime"] = temp;
                temp = document.getElementById (id + "_hotStartTime").value; if ("" !== temp) obj["hotStartTime"] = temp;
                temp = document.getElementById (id + "_intColdTime").value; if ("" !== temp) obj["intColdTime"] = temp;
                temp = document.getElementById (id + "_intStartTime").value; if ("" !== temp) obj["intStartTime"] = temp;
                temp = MktDomain.YesNo[document.getElementById (id + "_loadFollowingDownMSS").value]; if (temp) obj["loadFollowingDownMSS"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["loadFollowingDownMSS"];
                temp = MktDomain.YesNo[document.getElementById (id + "_loadFollowingUpMSS").value]; if (temp) obj["loadFollowingUpMSS"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["loadFollowingUpMSS"];
                temp = document.getElementById (id + "_lowControlLImit").value; if ("" !== temp) obj["lowControlLImit"] = temp;
                temp = document.getElementById (id + "_maxDependableCap").value; if ("" !== temp) obj["maxDependableCap"] = temp;
                temp = document.getElementById (id + "_maximumAllowableSpinningReserve").value; if ("" !== temp) obj["maximumAllowableSpinningReserve"] = temp;
                temp = document.getElementById (id + "_maximumOperatingLimit").value; if ("" !== temp) obj["maximumOperatingLimit"] = temp;
                temp = document.getElementById (id + "_maxMinLoadCost").value; if ("" !== temp) obj["maxMinLoadCost"] = temp;
                temp = document.getElementById (id + "_maxPumpingLevel").value; if ("" !== temp) obj["maxPumpingLevel"] = temp;
                temp = document.getElementById (id + "_maxShutdownTime").value; if ("" !== temp) obj["maxShutdownTime"] = temp;
                temp = document.getElementById (id + "_maxStartUpsPerDay").value; if ("" !== temp) obj["maxStartUpsPerDay"] = temp;
                temp = document.getElementById (id + "_maxWeeklyEnergy").value; if ("" !== temp) obj["maxWeeklyEnergy"] = temp;
                temp = document.getElementById (id + "_maxWeeklyStarts").value; if ("" !== temp) obj["maxWeeklyStarts"] = temp;
                temp = MktDomain.CostBasis[document.getElementById (id + "_minimumLoadCostBasis").value]; if (temp) obj["minimumLoadCostBasis"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#CostBasis." + temp; else delete obj["minimumLoadCostBasis"];
                temp = document.getElementById (id + "_minimumLoadFuelCost").value; if ("" !== temp) obj["minimumLoadFuelCost"] = temp;
                temp = document.getElementById (id + "_minimumOperatingLimit").value; if ("" !== temp) obj["minimumOperatingLimit"] = temp;
                temp = document.getElementById (id + "_minLoadCost").value; if ("" !== temp) obj["minLoadCost"] = temp;
                temp = MktDomain.YesNo[document.getElementById (id + "_mustOfferRA").value]; if (temp) obj["mustOfferRA"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["mustOfferRA"];
                temp = document.getElementById (id + "_nameplateCapacity").value; if ("" !== temp) obj["nameplateCapacity"] = temp;
                temp = document.getElementById (id + "_operatingMaintenanceCost").value; if ("" !== temp) obj["operatingMaintenanceCost"] = temp;
                temp = document.getElementById (id + "_pumpingCost").value; if ("" !== temp) obj["pumpingCost"] = temp;
                temp = document.getElementById (id + "_pumpingFactor").value; if ("" !== temp) obj["pumpingFactor"] = temp;
                temp = document.getElementById (id + "_pumpMinDownTime").value; if ("" !== temp) obj["pumpMinDownTime"] = temp;
                temp = document.getElementById (id + "_pumpMinUpTime").value; if ("" !== temp) obj["pumpMinUpTime"] = temp;
                temp = document.getElementById (id + "_pumpShutdownCost").value; if ("" !== temp) obj["pumpShutdownCost"] = temp;
                temp = document.getElementById (id + "_pumpShutdownTime").value; if ("" !== temp) obj["pumpShutdownTime"] = temp;
                temp = MktDomain.YesNo[document.getElementById (id + "_quickStartFlag").value]; if (temp) obj["quickStartFlag"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["quickStartFlag"];
                temp = MktDomain.RampCurveType[document.getElementById (id + "_rampCurveType").value]; if (temp) obj["rampCurveType"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#RampCurveType." + temp; else delete obj["rampCurveType"];
                temp = document.getElementById (id + "_regulationDownRampRate").value; if ("" !== temp) obj["regulationDownRampRate"] = temp;
                temp = MktDomain.UnitRegulationKind[document.getElementById (id + "_regulationFlag").value]; if (temp) obj["regulationFlag"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#UnitRegulationKind." + temp; else delete obj["regulationFlag"];
                temp = document.getElementById (id + "_regulationUpRampRate").value; if ("" !== temp) obj["regulationUpRampRate"] = temp;
                temp = document.getElementById (id + "_resourceSubType").value; if ("" !== temp) obj["resourceSubType"] = temp;
                temp = document.getElementById (id + "_riverSystem").value; if ("" !== temp) obj["riverSystem"] = temp;
                temp = MktDomain.YesNo[document.getElementById (id + "_RMNRFlag").value]; if (temp) obj["RMNRFlag"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["RMNRFlag"];
                temp = MktDomain.FlagTypeRMR[document.getElementById (id + "_RMRFlag").value]; if (temp) obj["RMRFlag"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#FlagTypeRMR." + temp; else delete obj["RMRFlag"];
                temp = MktDomain.YesNo[document.getElementById (id + "_RMRManualIndicator").value]; if (temp) obj["RMRManualIndicator"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["RMRManualIndicator"];
                temp = MktDomain.YesNo[document.getElementById (id + "_RMTFlag").value]; if (temp) obj["RMTFlag"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["RMTFlag"];
                temp = document.getElementById (id + "_spinRampRate").value; if ("" !== temp) obj["spinRampRate"] = temp;
                temp = MktDomain.CostBasis[document.getElementById (id + "_startUpCostBasis").value]; if (temp) obj["startUpCostBasis"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#CostBasis." + temp; else delete obj["startUpCostBasis"];
                temp = MktDomain.YesNo[document.getElementById (id + "_syncCondCapable").value]; if (temp) obj["syncCondCapable"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["syncCondCapable"];
                temp = MktDomain.UnitType[document.getElementById (id + "_unitType").value]; if (temp) obj["unitType"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#UnitType." + temp; else delete obj["unitType"];
                temp = MktDomain.YesNo[document.getElementById (id + "_useLimitFlag").value]; if (temp) obj["useLimitFlag"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["useLimitFlag"];
                temp = MktDomain.YesNo[document.getElementById (id + "_variableEnergyResource").value]; if (temp) obj["variableEnergyResource"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["variableEnergyResource"];
                temp = document.getElementById (id + "_MktHeatRateCurve").value; if ("" !== temp) obj["MktHeatRateCurve"] = temp;
                temp = document.getElementById (id + "_StartUpTimeCurve").value; if ("" !== temp) obj["StartUpTimeCurve"] = temp;
                temp = document.getElementById (id + "_StartUpFuelCurve").value; if ("" !== temp) obj["StartUpFuelCurve"] = temp;
                temp = document.getElementById (id + "_RMRStartUpFuelCurve").value; if ("" !== temp) obj["RMRStartUpFuelCurve"] = temp;
                temp = document.getElementById (id + "_StartUpEnergyCurve").value; if ("" !== temp) obj["StartUpEnergyCurve"] = temp;
                temp = document.getElementById (id + "_RMRStartUpCostCurve").value; if ("" !== temp) obj["RMRStartUpCostCurve"] = temp;
                temp = document.getElementById (id + "_LocalReliabilityArea").value; if ("" !== temp) obj["LocalReliabilityArea"] = temp;
                temp = document.getElementById (id + "_RegulatingLimit").value; if ("" !== temp) obj["RegulatingLimit"] = temp;
                temp = document.getElementById (id + "_FuelRegion").value; if ("" !== temp) obj["FuelRegion"] = temp;
                temp = document.getElementById (id + "_StartUpCostCurves").value; if ("" !== temp) obj["StartUpCostCurves"] = temp.split (",");
                temp = document.getElementById (id + "_EnergyPriceIndex").value; if ("" !== temp) obj["EnergyPriceIndex"] = temp;
                temp = document.getElementById (id + "_RMRStartUpEnergyCurve").value; if ("" !== temp) obj["RMRStartUpEnergyCurve"] = temp;
                temp = document.getElementById (id + "_FuelCostCurve").value; if ("" !== temp) obj["FuelCostCurve"] = temp;
                temp = document.getElementById (id + "_RMRStartUpTimeCurve").value; if ("" !== temp) obj["RMRStartUpTimeCurve"] = temp;
                temp = document.getElementById (id + "_RMRHeatRateCurve").value; if ("" !== temp) obj["RMRHeatRateCurve"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MktHeatRateCurve", "0..1", "0..1", "MktHeatRateCurve", "RegisteredGenerator"],
                            ["StartUpTimeCurve", "0..1", "0..1", "StartUpTimeCurve", "RegisteredGenerator"],
                            ["UnitInitialConditions", "0..*", "0..1", "UnitInitialConditions", "GeneratingUnit"],
                            ["StartUpFuelCurve", "0..1", "0..1", "StartUpFuelCurve", "RegisteredGenerator"],
                            ["RMRStartUpFuelCurve", "0..1", "0..1", "RMRStartUpFuelCurve", "RegisteredGenerator"],
                            ["StartUpEnergyCurve", "0..1", "0..1", "StartUpEnergyCurve", "RegisteredGenerator"],
                            ["RMRStartUpCostCurve", "0..1", "0..1", "RMRStartUpCostCurve", "RegisteredGenerator"],
                            ["AuxillaryObject", "0..*", "0..1", "AuxiliaryObject", "RegisteredGenerator"],
                            ["LocalReliabilityArea", "0..1", "0..*", "LocalReliabilityArea", "RegisteredGenerator"],
                            ["Trade", "0..*", "0..1", "Trade", "RegisteredGenerator"],
                            ["RegulatingLimit", "0..1", "0..1", "RegulatingLimit", "RegisteredGenerator"],
                            ["FuelRegion", "0..1", "0..*", "FuelRegion", "RegisteredGenerator"],
                            ["StartUpCostCurves", "0..*", "0..*", "StartUpCostCurve", "RegisteredGenerators"],
                            ["GeneratingBids", "0..*", "0..1", "GeneratingBid", "RegisteredGenerator"],
                            ["EnergyPriceIndex", "1", "1", "EnergyPriceIndex", "RegisteredGenerator"],
                            ["RMRStartUpEnergyCurve", "0..1", "0..1", "RMRStartUpEnergyCurve", "RegisteredGenerator"],
                            ["FuelCostCurve", "0..1", "0..1", "FuelCostCurve", "RegisteredGenerator"],
                            ["RMRStartUpTimeCurve", "0..1", "0..1", "RMRStartUpTimeCurve", "RegisteredGenerator"],
                            ["RMRHeatRateCurve", "0..1", "0..1", "RMRHeatRateCurve", "RegisteredGenerator"]
                        ]
                    )
                );
            }
        }

        /**
         * Relationship between unit fuel cost in \$/kWh(Y-axis) and  unit output in MW (X-axis).
         *
         */
        class FuelCostCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.FuelCostCurve;
                if (null == bucket)
                   cim_data.FuelCostCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.FuelCostCurve[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "FuelCostCurve";
                base.parse_attribute (/<cim:FuelCostCurve.RegisteredGenerator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);
                let bucket = context.parsed.FuelCostCurve;
                if (null == bucket)
                   context.parsed.FuelCostCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "FuelCostCurve", "RegisteredGenerator", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#FuelCostCurve_collapse" aria-expanded="true" aria-controls="FuelCostCurve_collapse" style="margin-left: 10px;">FuelCostCurve</a></legend>
                    <div id="FuelCostCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RegisteredGenerator}}");}); return false;'>{{RegisteredGenerator}}</a></div>{{/RegisteredGenerator}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_FuelCostCurve_collapse" aria-expanded="true" aria-controls="{{id}}_FuelCostCurve_collapse" style="margin-left: 10px;">FuelCostCurve</a></legend>
                    <div id="{{id}}_FuelCostCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredGenerator'>RegisteredGenerator: </label><div class='col-sm-8'><input id='{{id}}_RegisteredGenerator' class='form-control' type='text'{{#RegisteredGenerator}} value='{{RegisteredGenerator}}'{{/RegisteredGenerator}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "FuelCostCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_RegisteredGenerator").value; if ("" !== temp) obj["RegisteredGenerator"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegisteredGenerator", "0..1", "0..1", "RegisteredGenerator", "FuelCostCurve"]
                        ]
                    )
                );
            }
        }

        /**
         * This class represents the physical characteristic of a generator regarding the regulating limit.
         *
         */
        class RegulatingLimit extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.RegulatingLimit;
                if (null == bucket)
                   cim_data.RegulatingLimit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RegulatingLimit[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "RegulatingLimit";
                base.parse_element (/<cim:RegulatingLimit.highLimit>([\s\S]*?)<\/cim:RegulatingLimit.highLimit>/g, obj, "highLimit", base.to_string, sub, context);
                base.parse_element (/<cim:RegulatingLimit.lowLimit>([\s\S]*?)<\/cim:RegulatingLimit.lowLimit>/g, obj, "lowLimit", base.to_string, sub, context);
                base.parse_attribute (/<cim:RegulatingLimit.RegisteredGenerator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);
                let bucket = context.parsed.RegulatingLimit;
                if (null == bucket)
                   context.parsed.RegulatingLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "RegulatingLimit", "highLimit", "highLimit",  base.from_string, fields);
                base.export_element (obj, "RegulatingLimit", "lowLimit", "lowLimit",  base.from_string, fields);
                base.export_attribute (obj, "RegulatingLimit", "RegisteredGenerator", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RegulatingLimit_collapse" aria-expanded="true" aria-controls="RegulatingLimit_collapse" style="margin-left: 10px;">RegulatingLimit</a></legend>
                    <div id="RegulatingLimit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#highLimit}}<div><b>highLimit</b>: {{highLimit}}</div>{{/highLimit}}
                    {{#lowLimit}}<div><b>lowLimit</b>: {{lowLimit}}</div>{{/lowLimit}}
                    {{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RegisteredGenerator}}");}); return false;'>{{RegisteredGenerator}}</a></div>{{/RegisteredGenerator}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RegulatingLimit_collapse" aria-expanded="true" aria-controls="{{id}}_RegulatingLimit_collapse" style="margin-left: 10px;">RegulatingLimit</a></legend>
                    <div id="{{id}}_RegulatingLimit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_highLimit'>highLimit: </label><div class='col-sm-8'><input id='{{id}}_highLimit' class='form-control' type='text'{{#highLimit}} value='{{highLimit}}'{{/highLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lowLimit'>lowLimit: </label><div class='col-sm-8'><input id='{{id}}_lowLimit' class='form-control' type='text'{{#lowLimit}} value='{{lowLimit}}'{{/lowLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredGenerator'>RegisteredGenerator: </label><div class='col-sm-8'><input id='{{id}}_RegisteredGenerator' class='form-control' type='text'{{#RegisteredGenerator}} value='{{RegisteredGenerator}}'{{/RegisteredGenerator}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "RegulatingLimit" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_highLimit").value; if ("" !== temp) obj["highLimit"] = temp;
                temp = document.getElementById (id + "_lowLimit").value; if ("" !== temp) obj["lowLimit"] = temp;
                temp = document.getElementById (id + "_RegisteredGenerator").value; if ("" !== temp) obj["RegisteredGenerator"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegisteredGenerator", "0..1", "0..1", "RegisteredGenerator", "RegulatingLimit"]
                        ]
                    )
                );
            }
        }

        /**
         * Allows definition of reliability areas (e.g.. load pockets) within the ISO/RTO.
         *
         */
        class LocalReliabilityArea extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.LocalReliabilityArea;
                if (null == bucket)
                   cim_data.LocalReliabilityArea = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LocalReliabilityArea[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "LocalReliabilityArea";
                base.parse_attributes (/<cim:LocalReliabilityArea.RegisteredGenerator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);
                base.parse_attribute (/<cim:LocalReliabilityArea.RTO\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);
                let bucket = context.parsed.LocalReliabilityArea;
                if (null == bucket)
                   context.parsed.LocalReliabilityArea = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "LocalReliabilityArea", "RegisteredGenerator", "RegisteredGenerator", fields);
                base.export_attribute (obj, "LocalReliabilityArea", "RTO", "RTO", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#LocalReliabilityArea_collapse" aria-expanded="true" aria-controls="LocalReliabilityArea_collapse" style="margin-left: 10px;">LocalReliabilityArea</a></legend>
                    <div id="LocalReliabilityArea_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RegisteredGenerator}}
                    {{#RTO}}<div><b>RTO</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RTO}}");}); return false;'>{{RTO}}</a></div>{{/RTO}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["RegisteredGenerator"]) obj["RegisteredGenerator_string"] = obj["RegisteredGenerator"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["RegisteredGenerator_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_LocalReliabilityArea_collapse" aria-expanded="true" aria-controls="{{id}}_LocalReliabilityArea_collapse" style="margin-left: 10px;">LocalReliabilityArea</a></legend>
                    <div id="{{id}}_LocalReliabilityArea_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RTO'>RTO: </label><div class='col-sm-8'><input id='{{id}}_RTO' class='form-control' type='text'{{#RTO}} value='{{RTO}}'{{/RTO}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "LocalReliabilityArea" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_RTO").value; if ("" !== temp) obj["RTO"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegisteredGenerator", "0..*", "0..1", "RegisteredGenerator", "LocalReliabilityArea"],
                            ["RTO", "1", "0..*", "RTO", "LocalReliabilityArea"]
                        ]
                    )
                );
            }
        }

        /**
         * This class allows SC to input different distribution factors for pricing node.
         *
         */
        class PnodeDistributionFactor extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PnodeDistributionFactor;
                if (null == bucket)
                   cim_data.PnodeDistributionFactor = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PnodeDistributionFactor[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "PnodeDistributionFactor";
                base.parse_element (/<cim:PnodeDistributionFactor.factor>([\s\S]*?)<\/cim:PnodeDistributionFactor.factor>/g, obj, "factor", base.to_float, sub, context);
                base.parse_attribute (/<cim:PnodeDistributionFactor.offPeak\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "offPeak", sub, context);
                base.parse_attribute (/<cim:PnodeDistributionFactor.onPeak\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "onPeak", sub, context);
                base.parse_element (/<cim:PnodeDistributionFactor.podLossFactor>([\s\S]*?)<\/cim:PnodeDistributionFactor.podLossFactor>/g, obj, "podLossFactor", base.to_float, sub, context);
                base.parse_attribute (/<cim:PnodeDistributionFactor.AggregatedPnode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AggregatedPnode", sub, context);
                base.parse_attribute (/<cim:PnodeDistributionFactor.IndividualPnode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "IndividualPnode", sub, context);
                base.parse_attribute (/<cim:PnodeDistributionFactor.BidDistributionFactor\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BidDistributionFactor", sub, context);
                let bucket = context.parsed.PnodeDistributionFactor;
                if (null == bucket)
                   context.parsed.PnodeDistributionFactor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "PnodeDistributionFactor", "factor", "factor",  base.from_float, fields);
                base.export_attribute (obj, "PnodeDistributionFactor", "offPeak", "offPeak", fields);
                base.export_attribute (obj, "PnodeDistributionFactor", "onPeak", "onPeak", fields);
                base.export_element (obj, "PnodeDistributionFactor", "podLossFactor", "podLossFactor",  base.from_float, fields);
                base.export_attribute (obj, "PnodeDistributionFactor", "AggregatedPnode", "AggregatedPnode", fields);
                base.export_attribute (obj, "PnodeDistributionFactor", "IndividualPnode", "IndividualPnode", fields);
                base.export_attribute (obj, "PnodeDistributionFactor", "BidDistributionFactor", "BidDistributionFactor", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PnodeDistributionFactor_collapse" aria-expanded="true" aria-controls="PnodeDistributionFactor_collapse" style="margin-left: 10px;">PnodeDistributionFactor</a></legend>
                    <div id="PnodeDistributionFactor_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#factor}}<div><b>factor</b>: {{factor}}</div>{{/factor}}
                    {{#offPeak}}<div><b>offPeak</b>: {{offPeak}}</div>{{/offPeak}}
                    {{#onPeak}}<div><b>onPeak</b>: {{onPeak}}</div>{{/onPeak}}
                    {{#podLossFactor}}<div><b>podLossFactor</b>: {{podLossFactor}}</div>{{/podLossFactor}}
                    {{#AggregatedPnode}}<div><b>AggregatedPnode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{AggregatedPnode}}");}); return false;'>{{AggregatedPnode}}</a></div>{{/AggregatedPnode}}
                    {{#IndividualPnode}}<div><b>IndividualPnode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{IndividualPnode}}");}); return false;'>{{IndividualPnode}}</a></div>{{/IndividualPnode}}
                    {{#BidDistributionFactor}}<div><b>BidDistributionFactor</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{BidDistributionFactor}}");}); return false;'>{{BidDistributionFactor}}</a></div>{{/BidDistributionFactor}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["offPeakYesNo"] = [{ id: '', selected: (!obj["offPeak"])}]; for (let property in MktDomain.YesNo) obj["offPeakYesNo"].push ({ id: property, selected: obj["offPeak"] && obj["offPeak"].endsWith ('.' + property)});
                obj["onPeakYesNo"] = [{ id: '', selected: (!obj["onPeak"])}]; for (let property in MktDomain.YesNo) obj["onPeakYesNo"].push ({ id: property, selected: obj["onPeak"] && obj["onPeak"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["offPeakYesNo"];
                delete obj["onPeakYesNo"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PnodeDistributionFactor_collapse" aria-expanded="true" aria-controls="{{id}}_PnodeDistributionFactor_collapse" style="margin-left: 10px;">PnodeDistributionFactor</a></legend>
                    <div id="{{id}}_PnodeDistributionFactor_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_factor'>factor: </label><div class='col-sm-8'><input id='{{id}}_factor' class='form-control' type='text'{{#factor}} value='{{factor}}'{{/factor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_offPeak'>offPeak: </label><div class='col-sm-8'><select id='{{id}}_offPeak' class='form-control custom-select'>{{#offPeakYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/offPeakYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_onPeak'>onPeak: </label><div class='col-sm-8'><select id='{{id}}_onPeak' class='form-control custom-select'>{{#onPeakYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/onPeakYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_podLossFactor'>podLossFactor: </label><div class='col-sm-8'><input id='{{id}}_podLossFactor' class='form-control' type='text'{{#podLossFactor}} value='{{podLossFactor}}'{{/podLossFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AggregatedPnode'>AggregatedPnode: </label><div class='col-sm-8'><input id='{{id}}_AggregatedPnode' class='form-control' type='text'{{#AggregatedPnode}} value='{{AggregatedPnode}}'{{/AggregatedPnode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_IndividualPnode'>IndividualPnode: </label><div class='col-sm-8'><input id='{{id}}_IndividualPnode' class='form-control' type='text'{{#IndividualPnode}} value='{{IndividualPnode}}'{{/IndividualPnode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BidDistributionFactor'>BidDistributionFactor: </label><div class='col-sm-8'><input id='{{id}}_BidDistributionFactor' class='form-control' type='text'{{#BidDistributionFactor}} value='{{BidDistributionFactor}}'{{/BidDistributionFactor}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PnodeDistributionFactor" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_factor").value; if ("" !== temp) obj["factor"] = temp;
                temp = MktDomain.YesNo[document.getElementById (id + "_offPeak").value]; if (temp) obj["offPeak"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["offPeak"];
                temp = MktDomain.YesNo[document.getElementById (id + "_onPeak").value]; if (temp) obj["onPeak"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["onPeak"];
                temp = document.getElementById (id + "_podLossFactor").value; if ("" !== temp) obj["podLossFactor"] = temp;
                temp = document.getElementById (id + "_AggregatedPnode").value; if ("" !== temp) obj["AggregatedPnode"] = temp;
                temp = document.getElementById (id + "_IndividualPnode").value; if ("" !== temp) obj["IndividualPnode"] = temp;
                temp = document.getElementById (id + "_BidDistributionFactor").value; if ("" !== temp) obj["BidDistributionFactor"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AggregatedPnode", "1", "1..*", "AggregatedPnode", "PnodeDistributionFactor"],
                            ["IndividualPnode", "1", "0..*", "IndividualPnode", "PnodeDistributionFactor"],
                            ["BidDistributionFactor", "0..1", "0..*", "BidDistributionFactor", "PnodeDistributionFactor"]
                        ]
                    )
                );
            }
        }

        /**
         * Subclass of IEC 61970: Generation: Production:HeatRateCurve.
         *
         */
        class MktHeatRateCurve extends Production.HeatRateCurve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MktHeatRateCurve;
                if (null == bucket)
                   cim_data.MktHeatRateCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MktHeatRateCurve[obj.id];
            }

            parse (context, sub)
            {
                let obj = Production.HeatRateCurve.prototype.parse.call (this, context, sub);
                obj.cls = "MktHeatRateCurve";
                base.parse_attribute (/<cim:MktHeatRateCurve.RegisteredGenerator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);
                base.parse_attribute (/<cim:MktHeatRateCurve.ResourceVerifiableCosts\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ResourceVerifiableCosts", sub, context);
                let bucket = context.parsed.MktHeatRateCurve;
                if (null == bucket)
                   context.parsed.MktHeatRateCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Production.HeatRateCurve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MktHeatRateCurve", "RegisteredGenerator", "RegisteredGenerator", fields);
                base.export_attribute (obj, "MktHeatRateCurve", "ResourceVerifiableCosts", "ResourceVerifiableCosts", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MktHeatRateCurve_collapse" aria-expanded="true" aria-controls="MktHeatRateCurve_collapse" style="margin-left: 10px;">MktHeatRateCurve</a></legend>
                    <div id="MktHeatRateCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Production.HeatRateCurve.prototype.template.call (this) +
                    `
                    {{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RegisteredGenerator}}");}); return false;'>{{RegisteredGenerator}}</a></div>{{/RegisteredGenerator}}
                    {{#ResourceVerifiableCosts}}<div><b>ResourceVerifiableCosts</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ResourceVerifiableCosts}}");}); return false;'>{{ResourceVerifiableCosts}}</a></div>{{/ResourceVerifiableCosts}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MktHeatRateCurve_collapse" aria-expanded="true" aria-controls="{{id}}_MktHeatRateCurve_collapse" style="margin-left: 10px;">MktHeatRateCurve</a></legend>
                    <div id="{{id}}_MktHeatRateCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Production.HeatRateCurve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredGenerator'>RegisteredGenerator: </label><div class='col-sm-8'><input id='{{id}}_RegisteredGenerator' class='form-control' type='text'{{#RegisteredGenerator}} value='{{RegisteredGenerator}}'{{/RegisteredGenerator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ResourceVerifiableCosts'>ResourceVerifiableCosts: </label><div class='col-sm-8'><input id='{{id}}_ResourceVerifiableCosts' class='form-control' type='text'{{#ResourceVerifiableCosts}} value='{{ResourceVerifiableCosts}}'{{/ResourceVerifiableCosts}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MktHeatRateCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_RegisteredGenerator").value; if ("" !== temp) obj["RegisteredGenerator"] = temp;
                temp = document.getElementById (id + "_ResourceVerifiableCosts").value; if ("" !== temp) obj["ResourceVerifiableCosts"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegisteredGenerator", "0..1", "0..1", "RegisteredGenerator", "MktHeatRateCurve"],
                            ["ResourceVerifiableCosts", "0..1", "1", "ResourceVerifiableCosts", "MktHeatRateCurve"]
                        ]
                    )
                );
            }
        }

        /**
         * Logical Configuration of a Combined Cycle plant.
         *
         * Operating Combined Cycle Plant (CCP) configurations are represented as Logical CCP Resources. Logical representation shall be used for Market applications to optimize and control Market Operations. Logical representation is also necessary for controlling the number of CCP configurations and to temper performance issues that may otherwise occur.
         *
         * For example,(2CT configuration),(1CT + 1ST configuration) are examples of logical configuration, without specifying the specific CT and ST participating in the configuration.
         *
         */
        class CombinedCycleLogicalConfiguration extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.CombinedCycleLogicalConfiguration;
                if (null == bucket)
                   cim_data.CombinedCycleLogicalConfiguration = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CombinedCycleLogicalConfiguration[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CombinedCycleLogicalConfiguration";
                base.parse_attribute (/<cim:CombinedCycleLogicalConfiguration.MktCombinedCyclePlant\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MktCombinedCyclePlant", sub, context);
                base.parse_attributes (/<cim:CombinedCycleLogicalConfiguration.CombinedCycleConfiguration\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CombinedCycleConfiguration", sub, context);
                let bucket = context.parsed.CombinedCycleLogicalConfiguration;
                if (null == bucket)
                   context.parsed.CombinedCycleLogicalConfiguration = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "CombinedCycleLogicalConfiguration", "MktCombinedCyclePlant", "MktCombinedCyclePlant", fields);
                base.export_attributes (obj, "CombinedCycleLogicalConfiguration", "CombinedCycleConfiguration", "CombinedCycleConfiguration", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CombinedCycleLogicalConfiguration_collapse" aria-expanded="true" aria-controls="CombinedCycleLogicalConfiguration_collapse" style="margin-left: 10px;">CombinedCycleLogicalConfiguration</a></legend>
                    <div id="CombinedCycleLogicalConfiguration_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#MktCombinedCyclePlant}}<div><b>MktCombinedCyclePlant</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{MktCombinedCyclePlant}}");}); return false;'>{{MktCombinedCyclePlant}}</a></div>{{/MktCombinedCyclePlant}}
                    {{#CombinedCycleConfiguration}}<div><b>CombinedCycleConfiguration</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CombinedCycleConfiguration}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["CombinedCycleConfiguration"]) obj["CombinedCycleConfiguration_string"] = obj["CombinedCycleConfiguration"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["CombinedCycleConfiguration_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CombinedCycleLogicalConfiguration_collapse" aria-expanded="true" aria-controls="{{id}}_CombinedCycleLogicalConfiguration_collapse" style="margin-left: 10px;">CombinedCycleLogicalConfiguration</a></legend>
                    <div id="{{id}}_CombinedCycleLogicalConfiguration_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MktCombinedCyclePlant'>MktCombinedCyclePlant: </label><div class='col-sm-8'><input id='{{id}}_MktCombinedCyclePlant' class='form-control' type='text'{{#MktCombinedCyclePlant}} value='{{MktCombinedCyclePlant}}'{{/MktCombinedCyclePlant}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CombinedCycleLogicalConfiguration" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_MktCombinedCyclePlant").value; if ("" !== temp) obj["MktCombinedCyclePlant"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MktCombinedCyclePlant", "0..1", "1..*", "MktCombinedCyclePlant", "CombinedCycleLogicalConfiguration"],
                            ["CombinedCycleConfiguration", "1..*", "0..1", "CombinedCycleConfiguration", "CombinedCycleLogicalConfiguration"]
                        ]
                    )
                );
            }
        }

        /**
         * Specifies a category of energy usage that the demand response applies for; e.g. energy from lighting, HVAC, other.
         *
         */
        class ResponseMethod extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ResponseMethod;
                if (null == bucket)
                   cim_data.ResponseMethod = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ResponseMethod[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ResponseMethod";
                base.parse_element (/<cim:ResponseMethod.activePower>([\s\S]*?)<\/cim:ResponseMethod.activePower>/g, obj, "activePower", base.to_float, sub, context);
                base.parse_element (/<cim:ResponseMethod.activePowerUOM>([\s\S]*?)<\/cim:ResponseMethod.activePowerUOM>/g, obj, "activePowerUOM", base.to_string, sub, context);
                base.parse_element (/<cim:ResponseMethod.method>([\s\S]*?)<\/cim:ResponseMethod.method>/g, obj, "method", base.to_string, sub, context);
                base.parse_element (/<cim:ResponseMethod.siteMultiplier>([\s\S]*?)<\/cim:ResponseMethod.siteMultiplier>/g, obj, "siteMultiplier", base.to_string, sub, context);
                base.parse_attribute (/<cim:ResponseMethod.RegisteredResource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                let bucket = context.parsed.ResponseMethod;
                if (null == bucket)
                   context.parsed.ResponseMethod = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ResponseMethod", "activePower", "activePower",  base.from_float, fields);
                base.export_element (obj, "ResponseMethod", "activePowerUOM", "activePowerUOM",  base.from_string, fields);
                base.export_element (obj, "ResponseMethod", "method", "method",  base.from_string, fields);
                base.export_element (obj, "ResponseMethod", "siteMultiplier", "siteMultiplier",  base.from_string, fields);
                base.export_attribute (obj, "ResponseMethod", "RegisteredResource", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ResponseMethod_collapse" aria-expanded="true" aria-controls="ResponseMethod_collapse" style="margin-left: 10px;">ResponseMethod</a></legend>
                    <div id="ResponseMethod_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#activePower}}<div><b>activePower</b>: {{activePower}}</div>{{/activePower}}
                    {{#activePowerUOM}}<div><b>activePowerUOM</b>: {{activePowerUOM}}</div>{{/activePowerUOM}}
                    {{#method}}<div><b>method</b>: {{method}}</div>{{/method}}
                    {{#siteMultiplier}}<div><b>siteMultiplier</b>: {{siteMultiplier}}</div>{{/siteMultiplier}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RegisteredResource}}");}); return false;'>{{RegisteredResource}}</a></div>{{/RegisteredResource}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ResponseMethod_collapse" aria-expanded="true" aria-controls="{{id}}_ResponseMethod_collapse" style="margin-left: 10px;">ResponseMethod</a></legend>
                    <div id="{{id}}_ResponseMethod_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_activePower'>activePower: </label><div class='col-sm-8'><input id='{{id}}_activePower' class='form-control' type='text'{{#activePower}} value='{{activePower}}'{{/activePower}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_activePowerUOM'>activePowerUOM: </label><div class='col-sm-8'><input id='{{id}}_activePowerUOM' class='form-control' type='text'{{#activePowerUOM}} value='{{activePowerUOM}}'{{/activePowerUOM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_method'>method: </label><div class='col-sm-8'><input id='{{id}}_method' class='form-control' type='text'{{#method}} value='{{method}}'{{/method}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_siteMultiplier'>siteMultiplier: </label><div class='col-sm-8'><input id='{{id}}_siteMultiplier' class='form-control' type='text'{{#siteMultiplier}} value='{{siteMultiplier}}'{{/siteMultiplier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='{{id}}_RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ResponseMethod" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_activePower").value; if ("" !== temp) obj["activePower"] = temp;
                temp = document.getElementById (id + "_activePowerUOM").value; if ("" !== temp) obj["activePowerUOM"] = temp;
                temp = document.getElementById (id + "_method").value; if ("" !== temp) obj["method"] = temp;
                temp = document.getElementById (id + "_siteMultiplier").value; if ("" !== temp) obj["siteMultiplier"] = temp;
                temp = document.getElementById (id + "_RegisteredResource").value; if ("" !== temp) obj["RegisteredResource"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegisteredResource", "1", "0..*", "RegisteredDistributedResource", "ResponseMethods"]
                        ]
                    )
                );
            }
        }

        /**
         * A pricing node is directly associated with a connectivity node.
         *
         * It is a pricing location for which market participants submit their bids, offers, buy/sell CRRs, and settle.
         *
         */
        class Pnode extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Pnode;
                if (null == bucket)
                   cim_data.Pnode = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Pnode[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Pnode";
                base.parse_element (/<cim:Pnode.isPublic>([\s\S]*?)<\/cim:Pnode.isPublic>/g, obj, "isPublic", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:Pnode.RTO\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);
                base.parse_attributes (/<cim:Pnode.RegisteredResources\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResources", sub, context);
                base.parse_attributes (/<cim:Pnode.SinkCRRSegment\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SinkCRRSegment", sub, context);
                base.parse_attributes (/<cim:Pnode.SourceCRRSegment\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SourceCRRSegment", sub, context);
                base.parse_attributes (/<cim:Pnode.DeliveryTransactionBids\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DeliveryTransactionBids", sub, context);
                base.parse_attributes (/<cim:Pnode.AggregateNode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AggregateNode", sub, context);
                base.parse_attributes (/<cim:Pnode.Trade\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Trade", sub, context);
                base.parse_attributes (/<cim:Pnode.ReceiptTransactionBids\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ReceiptTransactionBids", sub, context);
                base.parse_attributes (/<cim:Pnode.PnodeResults\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PnodeResults", sub, context);
                base.parse_attributes (/<cim:Pnode.FTRs\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FTRs", sub, context);
                base.parse_attributes (/<cim:Pnode.ExPostResults\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ExPostResults", sub, context);
                base.parse_attributes (/<cim:Pnode.CommodityDefinition\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CommodityDefinition", sub, context);
                base.parse_attributes (/<cim:Pnode.OrgPnodeAllocation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OrgPnodeAllocation", sub, context);
                base.parse_attributes (/<cim:Pnode.MktMeasurement\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MktMeasurement", sub, context);
                base.parse_attribute (/<cim:Pnode.SubControlArea\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SubControlArea", sub, context);
                let bucket = context.parsed.Pnode;
                if (null == bucket)
                   context.parsed.Pnode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Pnode", "isPublic", "isPublic",  base.from_boolean, fields);
                base.export_attribute (obj, "Pnode", "RTO", "RTO", fields);
                base.export_attributes (obj, "Pnode", "RegisteredResources", "RegisteredResources", fields);
                base.export_attributes (obj, "Pnode", "SinkCRRSegment", "SinkCRRSegment", fields);
                base.export_attributes (obj, "Pnode", "SourceCRRSegment", "SourceCRRSegment", fields);
                base.export_attributes (obj, "Pnode", "DeliveryTransactionBids", "DeliveryTransactionBids", fields);
                base.export_attributes (obj, "Pnode", "AggregateNode", "AggregateNode", fields);
                base.export_attributes (obj, "Pnode", "Trade", "Trade", fields);
                base.export_attributes (obj, "Pnode", "ReceiptTransactionBids", "ReceiptTransactionBids", fields);
                base.export_attributes (obj, "Pnode", "PnodeResults", "PnodeResults", fields);
                base.export_attributes (obj, "Pnode", "FTRs", "FTRs", fields);
                base.export_attributes (obj, "Pnode", "ExPostResults", "ExPostResults", fields);
                base.export_attributes (obj, "Pnode", "CommodityDefinition", "CommodityDefinition", fields);
                base.export_attributes (obj, "Pnode", "OrgPnodeAllocation", "OrgPnodeAllocation", fields);
                base.export_attributes (obj, "Pnode", "MktMeasurement", "MktMeasurement", fields);
                base.export_attribute (obj, "Pnode", "SubControlArea", "SubControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Pnode_collapse" aria-expanded="true" aria-controls="Pnode_collapse" style="margin-left: 10px;">Pnode</a></legend>
                    <div id="Pnode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#isPublic}}<div><b>isPublic</b>: {{isPublic}}</div>{{/isPublic}}
                    {{#RTO}}<div><b>RTO</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RTO}}");}); return false;'>{{RTO}}</a></div>{{/RTO}}
                    {{#RegisteredResources}}<div><b>RegisteredResources</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RegisteredResources}}
                    {{#SinkCRRSegment}}<div><b>SinkCRRSegment</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/SinkCRRSegment}}
                    {{#SourceCRRSegment}}<div><b>SourceCRRSegment</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/SourceCRRSegment}}
                    {{#DeliveryTransactionBids}}<div><b>DeliveryTransactionBids</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/DeliveryTransactionBids}}
                    {{#AggregateNode}}<div><b>AggregateNode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AggregateNode}}
                    {{#Trade}}<div><b>Trade</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Trade}}
                    {{#ReceiptTransactionBids}}<div><b>ReceiptTransactionBids</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ReceiptTransactionBids}}
                    {{#PnodeResults}}<div><b>PnodeResults</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/PnodeResults}}
                    {{#FTRs}}<div><b>FTRs</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/FTRs}}
                    {{#ExPostResults}}<div><b>ExPostResults</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ExPostResults}}
                    {{#CommodityDefinition}}<div><b>CommodityDefinition</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CommodityDefinition}}
                    {{#OrgPnodeAllocation}}<div><b>OrgPnodeAllocation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/OrgPnodeAllocation}}
                    {{#MktMeasurement}}<div><b>MktMeasurement</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MktMeasurement}}
                    {{#SubControlArea}}<div><b>SubControlArea</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{SubControlArea}}");}); return false;'>{{SubControlArea}}</a></div>{{/SubControlArea}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["RegisteredResources"]) obj["RegisteredResources_string"] = obj["RegisteredResources"].join ();
                if (obj["SinkCRRSegment"]) obj["SinkCRRSegment_string"] = obj["SinkCRRSegment"].join ();
                if (obj["SourceCRRSegment"]) obj["SourceCRRSegment_string"] = obj["SourceCRRSegment"].join ();
                if (obj["DeliveryTransactionBids"]) obj["DeliveryTransactionBids_string"] = obj["DeliveryTransactionBids"].join ();
                if (obj["AggregateNode"]) obj["AggregateNode_string"] = obj["AggregateNode"].join ();
                if (obj["Trade"]) obj["Trade_string"] = obj["Trade"].join ();
                if (obj["ReceiptTransactionBids"]) obj["ReceiptTransactionBids_string"] = obj["ReceiptTransactionBids"].join ();
                if (obj["PnodeResults"]) obj["PnodeResults_string"] = obj["PnodeResults"].join ();
                if (obj["FTRs"]) obj["FTRs_string"] = obj["FTRs"].join ();
                if (obj["ExPostResults"]) obj["ExPostResults_string"] = obj["ExPostResults"].join ();
                if (obj["CommodityDefinition"]) obj["CommodityDefinition_string"] = obj["CommodityDefinition"].join ();
                if (obj["OrgPnodeAllocation"]) obj["OrgPnodeAllocation_string"] = obj["OrgPnodeAllocation"].join ();
                if (obj["MktMeasurement"]) obj["MktMeasurement_string"] = obj["MktMeasurement"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["RegisteredResources_string"];
                delete obj["SinkCRRSegment_string"];
                delete obj["SourceCRRSegment_string"];
                delete obj["DeliveryTransactionBids_string"];
                delete obj["AggregateNode_string"];
                delete obj["Trade_string"];
                delete obj["ReceiptTransactionBids_string"];
                delete obj["PnodeResults_string"];
                delete obj["FTRs_string"];
                delete obj["ExPostResults_string"];
                delete obj["CommodityDefinition_string"];
                delete obj["OrgPnodeAllocation_string"];
                delete obj["MktMeasurement_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Pnode_collapse" aria-expanded="true" aria-controls="{{id}}_Pnode_collapse" style="margin-left: 10px;">Pnode</a></legend>
                    <div id="{{id}}_Pnode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isPublic'>isPublic: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isPublic' class='form-check-input' type='checkbox'{{#isPublic}} checked{{/isPublic}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RTO'>RTO: </label><div class='col-sm-8'><input id='{{id}}_RTO' class='form-control' type='text'{{#RTO}} value='{{RTO}}'{{/RTO}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SinkCRRSegment'>SinkCRRSegment: </label><div class='col-sm-8'><input id='{{id}}_SinkCRRSegment' class='form-control' type='text'{{#SinkCRRSegment}} value='{{SinkCRRSegment_string}}'{{/SinkCRRSegment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SourceCRRSegment'>SourceCRRSegment: </label><div class='col-sm-8'><input id='{{id}}_SourceCRRSegment' class='form-control' type='text'{{#SourceCRRSegment}} value='{{SourceCRRSegment_string}}'{{/SourceCRRSegment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AggregateNode'>AggregateNode: </label><div class='col-sm-8'><input id='{{id}}_AggregateNode' class='form-control' type='text'{{#AggregateNode}} value='{{AggregateNode_string}}'{{/AggregateNode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_FTRs'>FTRs: </label><div class='col-sm-8'><input id='{{id}}_FTRs' class='form-control' type='text'{{#FTRs}} value='{{FTRs_string}}'{{/FTRs}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SubControlArea'>SubControlArea: </label><div class='col-sm-8'><input id='{{id}}_SubControlArea' class='form-control' type='text'{{#SubControlArea}} value='{{SubControlArea}}'{{/SubControlArea}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Pnode" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_isPublic").checked; if (temp) obj["isPublic"] = true;
                temp = document.getElementById (id + "_RTO").value; if ("" !== temp) obj["RTO"] = temp;
                temp = document.getElementById (id + "_SinkCRRSegment").value; if ("" !== temp) obj["SinkCRRSegment"] = temp.split (",");
                temp = document.getElementById (id + "_SourceCRRSegment").value; if ("" !== temp) obj["SourceCRRSegment"] = temp.split (",");
                temp = document.getElementById (id + "_AggregateNode").value; if ("" !== temp) obj["AggregateNode"] = temp.split (",");
                temp = document.getElementById (id + "_FTRs").value; if ("" !== temp) obj["FTRs"] = temp.split (",");
                temp = document.getElementById (id + "_SubControlArea").value; if ("" !== temp) obj["SubControlArea"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RTO", "0..1", "0..*", "RTO", "Pnodes"],
                            ["RegisteredResources", "0..*", "0..1", "RegisteredResource", "Pnode"],
                            ["SinkCRRSegment", "0..*", "0..*", "CRRSegment", "Sink"],
                            ["SourceCRRSegment", "0..*", "0..*", "CRRSegment", "Source"],
                            ["DeliveryTransactionBids", "0..*", "0..1", "TransactionBid", "Delivery_Pnode"],
                            ["AggregateNode", "0..*", "0..*", "AggregateNode", "Pnode"],
                            ["Trade", "0..*", "0..1", "Trade", "Pnode"],
                            ["ReceiptTransactionBids", "0..*", "0..1", "TransactionBid", "Receipt_Pnode"],
                            ["PnodeResults", "1..*", "0..1", "PnodeResults", "Pnode"],
                            ["FTRs", "0..*", "0..*", "FTR", "Pnodes"],
                            ["ExPostResults", "0..*", "1", "ExPostPricingResults", "Pnode"],
                            ["CommodityDefinition", "0..*", "1", "CommodityDefinition", "Pnode"],
                            ["OrgPnodeAllocation", "0..*", "1", "OrgPnodeAllocation", "Pnode"],
                            ["MktMeasurement", "0..*", "0..1", "MktMeasurement", "Pnode"],
                            ["SubControlArea", "0..1", "0..*", "SubControlArea", "Pnode"]
                        ]
                    )
                );
            }
        }

        /**
         * Model to define a zone within a Metered Sub System.
         *
         */
        class MSSZone extends AggregateNode
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MSSZone;
                if (null == bucket)
                   cim_data.MSSZone = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MSSZone[obj.id];
            }

            parse (context, sub)
            {
                let obj = AggregateNode.prototype.parse.call (this, context, sub);
                obj.cls = "MSSZone";
                base.parse_attribute (/<cim:MSSZone.ignoreLosses\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ignoreLosses", sub, context);
                base.parse_element (/<cim:MSSZone.lossFactor>([\s\S]*?)<\/cim:MSSZone.lossFactor>/g, obj, "lossFactor", base.to_float, sub, context);
                base.parse_attribute (/<cim:MSSZone.rucGrossSettlement\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "rucGrossSettlement", sub, context);
                base.parse_attribute (/<cim:MSSZone.MeteredSubSystem\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MeteredSubSystem", sub, context);
                let bucket = context.parsed.MSSZone;
                if (null == bucket)
                   context.parsed.MSSZone = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AggregateNode.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MSSZone", "ignoreLosses", "ignoreLosses", fields);
                base.export_element (obj, "MSSZone", "lossFactor", "lossFactor",  base.from_float, fields);
                base.export_attribute (obj, "MSSZone", "rucGrossSettlement", "rucGrossSettlement", fields);
                base.export_attribute (obj, "MSSZone", "MeteredSubSystem", "MeteredSubSystem", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MSSZone_collapse" aria-expanded="true" aria-controls="MSSZone_collapse" style="margin-left: 10px;">MSSZone</a></legend>
                    <div id="MSSZone_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AggregateNode.prototype.template.call (this) +
                    `
                    {{#ignoreLosses}}<div><b>ignoreLosses</b>: {{ignoreLosses}}</div>{{/ignoreLosses}}
                    {{#lossFactor}}<div><b>lossFactor</b>: {{lossFactor}}</div>{{/lossFactor}}
                    {{#rucGrossSettlement}}<div><b>rucGrossSettlement</b>: {{rucGrossSettlement}}</div>{{/rucGrossSettlement}}
                    {{#MeteredSubSystem}}<div><b>MeteredSubSystem</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{MeteredSubSystem}}");}); return false;'>{{MeteredSubSystem}}</a></div>{{/MeteredSubSystem}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["ignoreLossesYesNo"] = [{ id: '', selected: (!obj["ignoreLosses"])}]; for (let property in MktDomain.YesNo) obj["ignoreLossesYesNo"].push ({ id: property, selected: obj["ignoreLosses"] && obj["ignoreLosses"].endsWith ('.' + property)});
                obj["rucGrossSettlementYesNo"] = [{ id: '', selected: (!obj["rucGrossSettlement"])}]; for (let property in MktDomain.YesNo) obj["rucGrossSettlementYesNo"].push ({ id: property, selected: obj["rucGrossSettlement"] && obj["rucGrossSettlement"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ignoreLossesYesNo"];
                delete obj["rucGrossSettlementYesNo"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MSSZone_collapse" aria-expanded="true" aria-controls="{{id}}_MSSZone_collapse" style="margin-left: 10px;">MSSZone</a></legend>
                    <div id="{{id}}_MSSZone_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AggregateNode.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ignoreLosses'>ignoreLosses: </label><div class='col-sm-8'><select id='{{id}}_ignoreLosses' class='form-control custom-select'>{{#ignoreLossesYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ignoreLossesYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lossFactor'>lossFactor: </label><div class='col-sm-8'><input id='{{id}}_lossFactor' class='form-control' type='text'{{#lossFactor}} value='{{lossFactor}}'{{/lossFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rucGrossSettlement'>rucGrossSettlement: </label><div class='col-sm-8'><select id='{{id}}_rucGrossSettlement' class='form-control custom-select'>{{#rucGrossSettlementYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/rucGrossSettlementYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MeteredSubSystem'>MeteredSubSystem: </label><div class='col-sm-8'><input id='{{id}}_MeteredSubSystem' class='form-control' type='text'{{#MeteredSubSystem}} value='{{MeteredSubSystem}}'{{/MeteredSubSystem}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MSSZone" };
                super.submit (id, obj);
                temp = MktDomain.YesNo[document.getElementById (id + "_ignoreLosses").value]; if (temp) obj["ignoreLosses"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["ignoreLosses"];
                temp = document.getElementById (id + "_lossFactor").value; if ("" !== temp) obj["lossFactor"] = temp;
                temp = MktDomain.YesNo[document.getElementById (id + "_rucGrossSettlement").value]; if (temp) obj["rucGrossSettlement"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["rucGrossSettlement"];
                temp = document.getElementById (id + "_MeteredSubSystem").value; if ("" !== temp) obj["MeteredSubSystem"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MeteredSubSystem", "0..1", "0..*", "MeteredSubSystem", "MSSZone"]
                        ]
                    )
                );
            }
        }

        /**
         * A specialized class of type AggregatedNode type.
         *
         * Defines Load Aggregation Points.
         *
         */
        class LoadAggregationPoint extends AggregateNode
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.LoadAggregationPoint;
                if (null == bucket)
                   cim_data.LoadAggregationPoint = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LoadAggregationPoint[obj.id];
            }

            parse (context, sub)
            {
                let obj = AggregateNode.prototype.parse.call (this, context, sub);
                obj.cls = "LoadAggregationPoint";
                let bucket = context.parsed.LoadAggregationPoint;
                if (null == bucket)
                   context.parsed.LoadAggregationPoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AggregateNode.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#LoadAggregationPoint_collapse" aria-expanded="true" aria-controls="LoadAggregationPoint_collapse" style="margin-left: 10px;">LoadAggregationPoint</a></legend>
                    <div id="LoadAggregationPoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AggregateNode.prototype.template.call (this) +
                    `
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_LoadAggregationPoint_collapse" aria-expanded="true" aria-controls="{{id}}_LoadAggregationPoint_collapse" style="margin-left: 10px;">LoadAggregationPoint</a></legend>
                    <div id="{{id}}_LoadAggregationPoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AggregateNode.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "LoadAggregationPoint" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * A specialized class of AggregatedNode type.
         *
         * Defines the MarketRegions. Regions could be system Market Regions, Energy Regions or Ancillary Service Regions.
         *
         */
        class MarketRegion extends AggregateNode
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MarketRegion;
                if (null == bucket)
                   cim_data.MarketRegion = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketRegion[obj.id];
            }

            parse (context, sub)
            {
                let obj = AggregateNode.prototype.parse.call (this, context, sub);
                obj.cls = "MarketRegion";
                base.parse_attributes (/<cim:MarketRegion.MarketRegionResults\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketRegionResults", sub, context);
                base.parse_attributes (/<cim:MarketRegion.ExPostMarketRegionResults\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ExPostMarketRegionResults", sub, context);
                base.parse_attributes (/<cim:MarketRegion.ReserveDemandCurve\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ReserveDemandCurve", sub, context);
                let bucket = context.parsed.MarketRegion;
                if (null == bucket)
                   context.parsed.MarketRegion = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AggregateNode.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "MarketRegion", "MarketRegionResults", "MarketRegionResults", fields);
                base.export_attributes (obj, "MarketRegion", "ExPostMarketRegionResults", "ExPostMarketRegionResults", fields);
                base.export_attributes (obj, "MarketRegion", "ReserveDemandCurve", "ReserveDemandCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MarketRegion_collapse" aria-expanded="true" aria-controls="MarketRegion_collapse" style="margin-left: 10px;">MarketRegion</a></legend>
                    <div id="MarketRegion_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AggregateNode.prototype.template.call (this) +
                    `
                    {{#MarketRegionResults}}<div><b>MarketRegionResults</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketRegionResults}}
                    {{#ExPostMarketRegionResults}}<div><b>ExPostMarketRegionResults</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ExPostMarketRegionResults}}
                    {{#ReserveDemandCurve}}<div><b>ReserveDemandCurve</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ReserveDemandCurve}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["MarketRegionResults"]) obj["MarketRegionResults_string"] = obj["MarketRegionResults"].join ();
                if (obj["ExPostMarketRegionResults"]) obj["ExPostMarketRegionResults_string"] = obj["ExPostMarketRegionResults"].join ();
                if (obj["ReserveDemandCurve"]) obj["ReserveDemandCurve_string"] = obj["ReserveDemandCurve"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["MarketRegionResults_string"];
                delete obj["ExPostMarketRegionResults_string"];
                delete obj["ReserveDemandCurve_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MarketRegion_collapse" aria-expanded="true" aria-controls="{{id}}_MarketRegion_collapse" style="margin-left: 10px;">MarketRegion</a></legend>
                    <div id="{{id}}_MarketRegion_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AggregateNode.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "MarketRegion" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MarketRegionResults", "1..*", "1", "MarketRegionResults", "MarketRegion"],
                            ["ExPostMarketRegionResults", "0..*", "1", "ExPostMarketRegionResults", "MarketRegion"],
                            ["ReserveDemandCurve", "0..*", "1", "ReserveDemandCurve", "MarketRegion"]
                        ]
                    )
                );
            }
        }

        /**
         * A specialized class of type AggregatedNode type.
         *
         * Defines RUC Zones. A forecast region represents a collection of Nodes for which the Market operator has developed sufficient historical demand and relevant weather data to perform a demand forecast for such area. The Market Operator may further adjust this forecast to ensure that the Reliability Unit Commitment produces adequate local capacity procurement.
         *
         */
        class RUCZone extends AggregateNode
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.RUCZone;
                if (null == bucket)
                   cim_data.RUCZone = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RUCZone[obj.id];
            }

            parse (context, sub)
            {
                let obj = AggregateNode.prototype.parse.call (this, context, sub);
                obj.cls = "RUCZone";
                base.parse_attributes (/<cim:RUCZone.LossClearingResults\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LossClearingResults", sub, context);
                let bucket = context.parsed.RUCZone;
                if (null == bucket)
                   context.parsed.RUCZone = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AggregateNode.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "RUCZone", "LossClearingResults", "LossClearingResults", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RUCZone_collapse" aria-expanded="true" aria-controls="RUCZone_collapse" style="margin-left: 10px;">RUCZone</a></legend>
                    <div id="RUCZone_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AggregateNode.prototype.template.call (this) +
                    `
                    {{#LossClearingResults}}<div><b>LossClearingResults</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/LossClearingResults}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["LossClearingResults"]) obj["LossClearingResults_string"] = obj["LossClearingResults"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["LossClearingResults_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RUCZone_collapse" aria-expanded="true" aria-controls="{{id}}_RUCZone_collapse" style="margin-left: 10px;">RUCZone</a></legend>
                    <div id="{{id}}_RUCZone_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AggregateNode.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "RUCZone" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["LossClearingResults", "0..*", "0..1", "LossClearingResults", "RUCZone"]
                        ]
                    )
                );
            }
        }

        /**
         * Configuration options for combined cycle units.
         *
         * For example, a Combined Cycle with (CT1, CT2, ST1) will have (CT1, ST1) and (CT2, ST1) configurations as part of(1CT + 1STlogicalconfiguration).
         *
         */
        class CombinedCycleConfiguration extends RegisteredGenerator
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.CombinedCycleConfiguration;
                if (null == bucket)
                   cim_data.CombinedCycleConfiguration = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CombinedCycleConfiguration[obj.id];
            }

            parse (context, sub)
            {
                let obj = RegisteredGenerator.prototype.parse.call (this, context, sub);
                obj.cls = "CombinedCycleConfiguration";
                base.parse_element (/<cim:CombinedCycleConfiguration.primaryConfiguration>([\s\S]*?)<\/cim:CombinedCycleConfiguration.primaryConfiguration>/g, obj, "primaryConfiguration", base.to_boolean, sub, context);
                base.parse_element (/<cim:CombinedCycleConfiguration.ShutdownFlag>([\s\S]*?)<\/cim:CombinedCycleConfiguration.ShutdownFlag>/g, obj, "ShutdownFlag", base.to_boolean, sub, context);
                base.parse_element (/<cim:CombinedCycleConfiguration.StartupFlag>([\s\S]*?)<\/cim:CombinedCycleConfiguration.StartupFlag>/g, obj, "StartupFlag", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:CombinedCycleConfiguration.FromTransitionState\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FromTransitionState", sub, context);
                base.parse_attributes (/<cim:CombinedCycleConfiguration.ToTransitionState\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ToTransitionState", sub, context);
                base.parse_attributes (/<cim:CombinedCycleConfiguration.CombinedCycleConfigurationMember\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CombinedCycleConfigurationMember", sub, context);
                base.parse_attribute (/<cim:CombinedCycleConfiguration.CombinedCycleLogicalConfiguration\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CombinedCycleLogicalConfiguration", sub, context);
                let bucket = context.parsed.CombinedCycleConfiguration;
                if (null == bucket)
                   context.parsed.CombinedCycleConfiguration = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = RegisteredGenerator.prototype.export.call (this, obj, false);

                base.export_element (obj, "CombinedCycleConfiguration", "primaryConfiguration", "primaryConfiguration",  base.from_boolean, fields);
                base.export_element (obj, "CombinedCycleConfiguration", "ShutdownFlag", "ShutdownFlag",  base.from_boolean, fields);
                base.export_element (obj, "CombinedCycleConfiguration", "StartupFlag", "StartupFlag",  base.from_boolean, fields);
                base.export_attributes (obj, "CombinedCycleConfiguration", "FromTransitionState", "FromTransitionState", fields);
                base.export_attributes (obj, "CombinedCycleConfiguration", "ToTransitionState", "ToTransitionState", fields);
                base.export_attributes (obj, "CombinedCycleConfiguration", "CombinedCycleConfigurationMember", "CombinedCycleConfigurationMember", fields);
                base.export_attribute (obj, "CombinedCycleConfiguration", "CombinedCycleLogicalConfiguration", "CombinedCycleLogicalConfiguration", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CombinedCycleConfiguration_collapse" aria-expanded="true" aria-controls="CombinedCycleConfiguration_collapse" style="margin-left: 10px;">CombinedCycleConfiguration</a></legend>
                    <div id="CombinedCycleConfiguration_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + RegisteredGenerator.prototype.template.call (this) +
                    `
                    {{#primaryConfiguration}}<div><b>primaryConfiguration</b>: {{primaryConfiguration}}</div>{{/primaryConfiguration}}
                    {{#ShutdownFlag}}<div><b>ShutdownFlag</b>: {{ShutdownFlag}}</div>{{/ShutdownFlag}}
                    {{#StartupFlag}}<div><b>StartupFlag</b>: {{StartupFlag}}</div>{{/StartupFlag}}
                    {{#FromTransitionState}}<div><b>FromTransitionState</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/FromTransitionState}}
                    {{#ToTransitionState}}<div><b>ToTransitionState</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ToTransitionState}}
                    {{#CombinedCycleConfigurationMember}}<div><b>CombinedCycleConfigurationMember</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CombinedCycleConfigurationMember}}
                    {{#CombinedCycleLogicalConfiguration}}<div><b>CombinedCycleLogicalConfiguration</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{CombinedCycleLogicalConfiguration}}");}); return false;'>{{CombinedCycleLogicalConfiguration}}</a></div>{{/CombinedCycleLogicalConfiguration}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["FromTransitionState"]) obj["FromTransitionState_string"] = obj["FromTransitionState"].join ();
                if (obj["ToTransitionState"]) obj["ToTransitionState_string"] = obj["ToTransitionState"].join ();
                if (obj["CombinedCycleConfigurationMember"]) obj["CombinedCycleConfigurationMember_string"] = obj["CombinedCycleConfigurationMember"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["FromTransitionState_string"];
                delete obj["ToTransitionState_string"];
                delete obj["CombinedCycleConfigurationMember_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CombinedCycleConfiguration_collapse" aria-expanded="true" aria-controls="{{id}}_CombinedCycleConfiguration_collapse" style="margin-left: 10px;">CombinedCycleConfiguration</a></legend>
                    <div id="{{id}}_CombinedCycleConfiguration_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + RegisteredGenerator.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_primaryConfiguration'>primaryConfiguration: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_primaryConfiguration' class='form-check-input' type='checkbox'{{#primaryConfiguration}} checked{{/primaryConfiguration}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_ShutdownFlag'>ShutdownFlag: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_ShutdownFlag' class='form-check-input' type='checkbox'{{#ShutdownFlag}} checked{{/ShutdownFlag}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_StartupFlag'>StartupFlag: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_StartupFlag' class='form-check-input' type='checkbox'{{#StartupFlag}} checked{{/StartupFlag}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CombinedCycleLogicalConfiguration'>CombinedCycleLogicalConfiguration: </label><div class='col-sm-8'><input id='{{id}}_CombinedCycleLogicalConfiguration' class='form-control' type='text'{{#CombinedCycleLogicalConfiguration}} value='{{CombinedCycleLogicalConfiguration}}'{{/CombinedCycleLogicalConfiguration}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CombinedCycleConfiguration" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_primaryConfiguration").checked; if (temp) obj["primaryConfiguration"] = true;
                temp = document.getElementById (id + "_ShutdownFlag").checked; if (temp) obj["ShutdownFlag"] = true;
                temp = document.getElementById (id + "_StartupFlag").checked; if (temp) obj["StartupFlag"] = true;
                temp = document.getElementById (id + "_CombinedCycleLogicalConfiguration").value; if ("" !== temp) obj["CombinedCycleLogicalConfiguration"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["FromTransitionState", "0..*", "1", "CombinedCycleTransitionState", "FromConfiguration"],
                            ["ToTransitionState", "0..*", "1", "CombinedCycleTransitionState", "ToConfiguration"],
                            ["CombinedCycleConfigurationMember", "0..*", "1", "CombinedCycleConfigurationMember", "CombinedCycleConfiguration"],
                            ["CombinedCycleLogicalConfiguration", "0..1", "1..*", "CombinedCycleLogicalConfiguration", "CombinedCycleConfiguration"]
                        ]
                    )
                );
            }
        }

        /**
         * Individual pricing node based on Pnode.
         *
         */
        class IndividualPnode extends Pnode
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.IndividualPnode;
                if (null == bucket)
                   cim_data.IndividualPnode = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.IndividualPnode[obj.id];
            }

            parse (context, sub)
            {
                let obj = Pnode.prototype.parse.call (this, context, sub);
                obj.cls = "IndividualPnode";
                base.parse_attributes (/<cim:IndividualPnode.PnodeDistributionFactor\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PnodeDistributionFactor", sub, context);
                base.parse_attribute (/<cim:IndividualPnode.LoadDistributionFactor\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LoadDistributionFactor", sub, context);
                base.parse_attribute (/<cim:IndividualPnode.MktConnectivityNode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MktConnectivityNode", sub, context);
                base.parse_attributes (/<cim:IndividualPnode.CongestionArea\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CongestionArea", sub, context);
                base.parse_attribute (/<cim:IndividualPnode.GenDistributionFactor\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GenDistributionFactor", sub, context);
                let bucket = context.parsed.IndividualPnode;
                if (null == bucket)
                   context.parsed.IndividualPnode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Pnode.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "IndividualPnode", "PnodeDistributionFactor", "PnodeDistributionFactor", fields);
                base.export_attribute (obj, "IndividualPnode", "LoadDistributionFactor", "LoadDistributionFactor", fields);
                base.export_attribute (obj, "IndividualPnode", "MktConnectivityNode", "MktConnectivityNode", fields);
                base.export_attributes (obj, "IndividualPnode", "CongestionArea", "CongestionArea", fields);
                base.export_attribute (obj, "IndividualPnode", "GenDistributionFactor", "GenDistributionFactor", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#IndividualPnode_collapse" aria-expanded="true" aria-controls="IndividualPnode_collapse" style="margin-left: 10px;">IndividualPnode</a></legend>
                    <div id="IndividualPnode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Pnode.prototype.template.call (this) +
                    `
                    {{#PnodeDistributionFactor}}<div><b>PnodeDistributionFactor</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/PnodeDistributionFactor}}
                    {{#LoadDistributionFactor}}<div><b>LoadDistributionFactor</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{LoadDistributionFactor}}");}); return false;'>{{LoadDistributionFactor}}</a></div>{{/LoadDistributionFactor}}
                    {{#MktConnectivityNode}}<div><b>MktConnectivityNode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{MktConnectivityNode}}");}); return false;'>{{MktConnectivityNode}}</a></div>{{/MktConnectivityNode}}
                    {{#CongestionArea}}<div><b>CongestionArea</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CongestionArea}}
                    {{#GenDistributionFactor}}<div><b>GenDistributionFactor</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{GenDistributionFactor}}");}); return false;'>{{GenDistributionFactor}}</a></div>{{/GenDistributionFactor}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["PnodeDistributionFactor"]) obj["PnodeDistributionFactor_string"] = obj["PnodeDistributionFactor"].join ();
                if (obj["CongestionArea"]) obj["CongestionArea_string"] = obj["CongestionArea"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["PnodeDistributionFactor_string"];
                delete obj["CongestionArea_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_IndividualPnode_collapse" aria-expanded="true" aria-controls="{{id}}_IndividualPnode_collapse" style="margin-left: 10px;">IndividualPnode</a></legend>
                    <div id="{{id}}_IndividualPnode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Pnode.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LoadDistributionFactor'>LoadDistributionFactor: </label><div class='col-sm-8'><input id='{{id}}_LoadDistributionFactor' class='form-control' type='text'{{#LoadDistributionFactor}} value='{{LoadDistributionFactor}}'{{/LoadDistributionFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MktConnectivityNode'>MktConnectivityNode: </label><div class='col-sm-8'><input id='{{id}}_MktConnectivityNode' class='form-control' type='text'{{#MktConnectivityNode}} value='{{MktConnectivityNode}}'{{/MktConnectivityNode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CongestionArea'>CongestionArea: </label><div class='col-sm-8'><input id='{{id}}_CongestionArea' class='form-control' type='text'{{#CongestionArea}} value='{{CongestionArea_string}}'{{/CongestionArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GenDistributionFactor'>GenDistributionFactor: </label><div class='col-sm-8'><input id='{{id}}_GenDistributionFactor' class='form-control' type='text'{{#GenDistributionFactor}} value='{{GenDistributionFactor}}'{{/GenDistributionFactor}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "IndividualPnode" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_LoadDistributionFactor").value; if ("" !== temp) obj["LoadDistributionFactor"] = temp;
                temp = document.getElementById (id + "_MktConnectivityNode").value; if ("" !== temp) obj["MktConnectivityNode"] = temp;
                temp = document.getElementById (id + "_CongestionArea").value; if ("" !== temp) obj["CongestionArea"] = temp.split (",");
                temp = document.getElementById (id + "_GenDistributionFactor").value; if ("" !== temp) obj["GenDistributionFactor"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PnodeDistributionFactor", "0..*", "1", "PnodeDistributionFactor", "IndividualPnode"],
                            ["LoadDistributionFactor", "0..1", "0..1", "LoadDistributionFactor", "IndividualPnode"],
                            ["MktConnectivityNode", "1", "0..1", "MktConnectivityNode", "IndividualPnode"],
                            ["CongestionArea", "0..*", "0..*", "CongestionArea", "IndividualPnode"],
                            ["GenDistributionFactor", "0..1", "0..1", "GenDistributionFactor", "IndividualPnode"]
                        ]
                    )
                );
            }
        }

        /**
         * An aggregated pricing node is a specialized type of pricing node used to model items such as System Zone, Default Price Zone, Custom Price Zone, Control Area, Aggregated Generation, Aggregated Particpating Load, Aggregated Non-Participating Load, Trading Hub, Designated Control Area(DCA) Zone.
         *
         */
        class AggregatedPnode extends Pnode
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AggregatedPnode;
                if (null == bucket)
                   cim_data.AggregatedPnode = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AggregatedPnode[obj.id];
            }

            parse (context, sub)
            {
                let obj = Pnode.prototype.parse.call (this, context, sub);
                obj.cls = "AggregatedPnode";
                base.parse_attribute (/<cim:AggregatedPnode.apnodeType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "apnodeType", sub, context);
                base.parse_attribute (/<cim:AggregatedPnode.participationCategory\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "participationCategory", sub, context);
                base.parse_attributes (/<cim:AggregatedPnode.PnodeDistributionFactor\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PnodeDistributionFactor", sub, context);
                base.parse_attributes (/<cim:AggregatedPnode.MPMTestThreshold\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MPMTestThreshold", sub, context);
                base.parse_attributes (/<cim:AggregatedPnode.MPMTestResults\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MPMTestResults", sub, context);
                base.parse_attributes (/<cim:AggregatedPnode.GenDistributionFactor\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GenDistributionFactor", sub, context);
                base.parse_attributes (/<cim:AggregatedPnode.MktCombinedCyclePlant\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MktCombinedCyclePlant", sub, context);
                base.parse_attributes (/<cim:AggregatedPnode.TACArea\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TACArea", sub, context);
                base.parse_attributes (/<cim:AggregatedPnode.LoadDistributionFactor\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LoadDistributionFactor", sub, context);
                base.parse_attributes (/<cim:AggregatedPnode.TradingHubValues\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TradingHubValues", sub, context);
                let bucket = context.parsed.AggregatedPnode;
                if (null == bucket)
                   context.parsed.AggregatedPnode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Pnode.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "AggregatedPnode", "apnodeType", "apnodeType", fields);
                base.export_attribute (obj, "AggregatedPnode", "participationCategory", "participationCategory", fields);
                base.export_attributes (obj, "AggregatedPnode", "PnodeDistributionFactor", "PnodeDistributionFactor", fields);
                base.export_attributes (obj, "AggregatedPnode", "MPMTestThreshold", "MPMTestThreshold", fields);
                base.export_attributes (obj, "AggregatedPnode", "MPMTestResults", "MPMTestResults", fields);
                base.export_attributes (obj, "AggregatedPnode", "GenDistributionFactor", "GenDistributionFactor", fields);
                base.export_attributes (obj, "AggregatedPnode", "MktCombinedCyclePlant", "MktCombinedCyclePlant", fields);
                base.export_attributes (obj, "AggregatedPnode", "TACArea", "TACArea", fields);
                base.export_attributes (obj, "AggregatedPnode", "LoadDistributionFactor", "LoadDistributionFactor", fields);
                base.export_attributes (obj, "AggregatedPnode", "TradingHubValues", "TradingHubValues", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AggregatedPnode_collapse" aria-expanded="true" aria-controls="AggregatedPnode_collapse" style="margin-left: 10px;">AggregatedPnode</a></legend>
                    <div id="AggregatedPnode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Pnode.prototype.template.call (this) +
                    `
                    {{#apnodeType}}<div><b>apnodeType</b>: {{apnodeType}}</div>{{/apnodeType}}
                    {{#participationCategory}}<div><b>participationCategory</b>: {{participationCategory}}</div>{{/participationCategory}}
                    {{#PnodeDistributionFactor}}<div><b>PnodeDistributionFactor</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/PnodeDistributionFactor}}
                    {{#MPMTestThreshold}}<div><b>MPMTestThreshold</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MPMTestThreshold}}
                    {{#MPMTestResults}}<div><b>MPMTestResults</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MPMTestResults}}
                    {{#GenDistributionFactor}}<div><b>GenDistributionFactor</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/GenDistributionFactor}}
                    {{#MktCombinedCyclePlant}}<div><b>MktCombinedCyclePlant</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MktCombinedCyclePlant}}
                    {{#TACArea}}<div><b>TACArea</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TACArea}}
                    {{#LoadDistributionFactor}}<div><b>LoadDistributionFactor</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/LoadDistributionFactor}}
                    {{#TradingHubValues}}<div><b>TradingHubValues</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TradingHubValues}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["apnodeTypeApnodeType"] = [{ id: '', selected: (!obj["apnodeType"])}]; for (let property in MktDomain.ApnodeType) obj["apnodeTypeApnodeType"].push ({ id: property, selected: obj["apnodeType"] && obj["apnodeType"].endsWith ('.' + property)});
                obj["participationCategoryParticipationCategoryMPM"] = [{ id: '', selected: (!obj["participationCategory"])}]; for (let property in MktDomain.ParticipationCategoryMPM) obj["participationCategoryParticipationCategoryMPM"].push ({ id: property, selected: obj["participationCategory"] && obj["participationCategory"].endsWith ('.' + property)});
                if (obj["PnodeDistributionFactor"]) obj["PnodeDistributionFactor_string"] = obj["PnodeDistributionFactor"].join ();
                if (obj["MPMTestThreshold"]) obj["MPMTestThreshold_string"] = obj["MPMTestThreshold"].join ();
                if (obj["MPMTestResults"]) obj["MPMTestResults_string"] = obj["MPMTestResults"].join ();
                if (obj["GenDistributionFactor"]) obj["GenDistributionFactor_string"] = obj["GenDistributionFactor"].join ();
                if (obj["MktCombinedCyclePlant"]) obj["MktCombinedCyclePlant_string"] = obj["MktCombinedCyclePlant"].join ();
                if (obj["TACArea"]) obj["TACArea_string"] = obj["TACArea"].join ();
                if (obj["LoadDistributionFactor"]) obj["LoadDistributionFactor_string"] = obj["LoadDistributionFactor"].join ();
                if (obj["TradingHubValues"]) obj["TradingHubValues_string"] = obj["TradingHubValues"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["apnodeTypeApnodeType"];
                delete obj["participationCategoryParticipationCategoryMPM"];
                delete obj["PnodeDistributionFactor_string"];
                delete obj["MPMTestThreshold_string"];
                delete obj["MPMTestResults_string"];
                delete obj["GenDistributionFactor_string"];
                delete obj["MktCombinedCyclePlant_string"];
                delete obj["TACArea_string"];
                delete obj["LoadDistributionFactor_string"];
                delete obj["TradingHubValues_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AggregatedPnode_collapse" aria-expanded="true" aria-controls="{{id}}_AggregatedPnode_collapse" style="margin-left: 10px;">AggregatedPnode</a></legend>
                    <div id="{{id}}_AggregatedPnode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Pnode.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_apnodeType'>apnodeType: </label><div class='col-sm-8'><select id='{{id}}_apnodeType' class='form-control custom-select'>{{#apnodeTypeApnodeType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/apnodeTypeApnodeType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_participationCategory'>participationCategory: </label><div class='col-sm-8'><select id='{{id}}_participationCategory' class='form-control custom-select'>{{#participationCategoryParticipationCategoryMPM}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/participationCategoryParticipationCategoryMPM}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MPMTestThreshold'>MPMTestThreshold: </label><div class='col-sm-8'><input id='{{id}}_MPMTestThreshold' class='form-control' type='text'{{#MPMTestThreshold}} value='{{MPMTestThreshold_string}}'{{/MPMTestThreshold}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TACArea'>TACArea: </label><div class='col-sm-8'><input id='{{id}}_TACArea' class='form-control' type='text'{{#TACArea}} value='{{TACArea_string}}'{{/TACArea}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AggregatedPnode" };
                super.submit (id, obj);
                temp = MktDomain.ApnodeType[document.getElementById (id + "_apnodeType").value]; if (temp) obj["apnodeType"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#ApnodeType." + temp; else delete obj["apnodeType"];
                temp = MktDomain.ParticipationCategoryMPM[document.getElementById (id + "_participationCategory").value]; if (temp) obj["participationCategory"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#ParticipationCategoryMPM." + temp; else delete obj["participationCategory"];
                temp = document.getElementById (id + "_MPMTestThreshold").value; if ("" !== temp) obj["MPMTestThreshold"] = temp.split (",");
                temp = document.getElementById (id + "_TACArea").value; if ("" !== temp) obj["TACArea"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PnodeDistributionFactor", "1..*", "1", "PnodeDistributionFactor", "AggregatedPnode"],
                            ["MPMTestThreshold", "1..*", "0..*", "MPMTestThreshold", "AggregatedPnode"],
                            ["MPMTestResults", "1..*", "1", "MPMTestResults", "AggregatedPnode"],
                            ["GenDistributionFactor", "1..*", "0..1", "GenDistributionFactor", "AggregatedPnode"],
                            ["MktCombinedCyclePlant", "0..*", "0..1", "MktCombinedCyclePlant", "AggregatedPnode"],
                            ["TACArea", "0..*", "0..*", "TACArea", "AggregatedPnode"],
                            ["LoadDistributionFactor", "1..*", "0..1", "LoadDistributionFactor", "AggregatedPnode"],
                            ["TradingHubValues", "0..*", "1", "TradingHubValues", "AggregatedPnode"]
                        ]
                    )
                );
            }
        }

        /**
         * Designated Congestion Area Definition (DCA).
         *
         */
        class CongestionArea extends AggregatedPnode
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.CongestionArea;
                if (null == bucket)
                   cim_data.CongestionArea = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CongestionArea[obj.id];
            }

            parse (context, sub)
            {
                let obj = AggregatedPnode.prototype.parse.call (this, context, sub);
                obj.cls = "CongestionArea";
                base.parse_attributes (/<cim:CongestionArea.IndividualPnode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "IndividualPnode", sub, context);
                let bucket = context.parsed.CongestionArea;
                if (null == bucket)
                   context.parsed.CongestionArea = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AggregatedPnode.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "CongestionArea", "IndividualPnode", "IndividualPnode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CongestionArea_collapse" aria-expanded="true" aria-controls="CongestionArea_collapse" style="margin-left: 10px;">CongestionArea</a></legend>
                    <div id="CongestionArea_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AggregatedPnode.prototype.template.call (this) +
                    `
                    {{#IndividualPnode}}<div><b>IndividualPnode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/IndividualPnode}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["IndividualPnode"]) obj["IndividualPnode_string"] = obj["IndividualPnode"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["IndividualPnode_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CongestionArea_collapse" aria-expanded="true" aria-controls="{{id}}_CongestionArea_collapse" style="margin-left: 10px;">CongestionArea</a></legend>
                    <div id="{{id}}_CongestionArea_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AggregatedPnode.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_IndividualPnode'>IndividualPnode: </label><div class='col-sm-8'><input id='{{id}}_IndividualPnode' class='form-control' type='text'{{#IndividualPnode}} value='{{IndividualPnode_string}}'{{/IndividualPnode}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CongestionArea" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_IndividualPnode").value; if ("" !== temp) obj["IndividualPnode"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["IndividualPnode", "0..*", "0..*", "IndividualPnode", "CongestionArea"]
                        ]
                    )
                );
            }
        }

        return (
            {
                ResourceOperationMaintenanceCost: ResourceOperationMaintenanceCost,
                FlowgateValue: FlowgateValue,
                MarketRegion: MarketRegion,
                MaxStartUpCostCurve: MaxStartUpCostCurve,
                RMRStartUpFuelCurve: RMRStartUpFuelCurve,
                SubstitutionResourceList: SubstitutionResourceList,
                RegulatingLimit: RegulatingLimit,
                AggregateNode: AggregateNode,
                MktContingency: MktContingency,
                FlowgateRelief: FlowgateRelief,
                TACArea: TACArea,
                MktCombinedCyclePlant: MktCombinedCyclePlant,
                LoadAggregationPoint: LoadAggregationPoint,
                MPMTestThreshold: MPMTestThreshold,
                SchedulingPoint: SchedulingPoint,
                ContractDistributionFactor: ContractDistributionFactor,
                MktThermalGeneratingUnit: MktThermalGeneratingUnit,
                OilPrice: OilPrice,
                ResourceVerifiableCosts: ResourceVerifiableCosts,
                RMRStartUpEnergyCurve: RMRStartUpEnergyCurve,
                MarketPerson: MarketPerson,
                RegisteredDistributedResource: RegisteredDistributedResource,
                ResourceCertification: ResourceCertification,
                LoadRatio: LoadRatio,
                IndividualPnode: IndividualPnode,
                FormerReference: FormerReference,
                RUCZone: RUCZone,
                FuelRegion: FuelRegion,
                ControlAreaDesignation: ControlAreaDesignation,
                PnodeDistributionFactor: PnodeDistributionFactor,
                SchedulingCoordinatorUser: SchedulingCoordinatorUser,
                CongestionArea: CongestionArea,
                MktConductingEquipment: MktConductingEquipment,
                LocalReliabilityArea: LocalReliabilityArea,
                Flowgate: Flowgate,
                SchedulingCoordinator: SchedulingCoordinator,
                RMRHeatRateCurve: RMRHeatRateCurve,
                TransmissionRightChain: TransmissionRightChain,
                MktHeatRateCurve: MktHeatRateCurve,
                MarketQualificationRequirement: MarketQualificationRequirement,
                StartUpEnergyCurve: StartUpEnergyCurve,
                WheelingCounterParty: WheelingCounterParty,
                FuelCostCurve: FuelCostCurve,
                ContractRight: ContractRight,
                CombinedCycleLogicalConfiguration: CombinedCycleLogicalConfiguration,
                FlowgatePartner: FlowgatePartner,
                ResponseMethod: ResponseMethod,
                OrgPnodeAllocation: OrgPnodeAllocation,
                MarketSkill: MarketSkill,
                AggregatedPnode: AggregatedPnode,
                RegisteredInterTie: RegisteredInterTie,
                RTO: RTO,
                MPMTestCategory: MPMTestCategory,
                RegisteredGenerator: RegisteredGenerator,
                RMRStartUpCostCurve: RMRStartUpCostCurve,
                CombinedCycleConfigurationMember: CombinedCycleConfigurationMember,
                CombinedCycleConfiguration: CombinedCycleConfiguration,
                Pnode: Pnode,
                RegisteredLoad: RegisteredLoad,
                RMRStartUpTimeCurve: RMRStartUpTimeCurve,
                CombinedCycleTransitionState: CombinedCycleTransitionState,
                ResourceStartupCost: ResourceStartupCost,
                AdjacentCASet: AdjacentCASet,
                ForbiddenRegion: ForbiddenRegion,
                SubControlArea: SubControlArea,
                MeteredSubSystem: MeteredSubSystem,
                GasPrice: GasPrice,
                StartUpFuelCurve: StartUpFuelCurve,
                BidPriceCap: BidPriceCap,
                MSSZone: MSSZone,
                OrgResOwnership: OrgResOwnership,
                HostControlArea: HostControlArea,
                CnodeDistributionFactor: CnodeDistributionFactor,
                MSSAggregation: MSSAggregation
            }
        );
    }
);