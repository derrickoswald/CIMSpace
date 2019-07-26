define
(
    ["model/base", "model/Common", "model/Core", "model/MktDomain"],
    /**
     * Congestion rent is a major, highly volatile charge currently faced by many participants in the LMP-based electrical energy markets.
     *
     * For this reason, the ISOs offer congestion revenue rights (CRR), also known as financial transmission rights or transmission congestion contracts. These are financial instruments that allow market participants to hedge against congestion charges when they schedule their generation, load and bilateral energy transactions.
     *
     */
    function (base, Common, Core, MktDomain)
    {

        /**
         * Identifies a way in which an organisation may participate with a defined Congestion Revenue Right (CRR).
         *
         */
        class CRROrgRole extends Common.OrganisationRole
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.CRROrgRole;
                if (null == bucket)
                   cim_data.CRROrgRole = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CRROrgRole[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.OrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "CRROrgRole";
                base.parse_attribute (/<cim:CRROrgRole.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:CRROrgRole.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attribute (/<cim:CRROrgRole.CongestionRevenueRight\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CongestionRevenueRight", sub, context);
                let bucket = context.parsed.CRROrgRole;
                if (null == bucket)
                   context.parsed.CRROrgRole = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.OrganisationRole.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "CRROrgRole", "kind", "kind", fields);
                base.export_attribute (obj, "CRROrgRole", "status", "status", fields);
                base.export_attribute (obj, "CRROrgRole", "CongestionRevenueRight", "CongestionRevenueRight", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CRROrgRole_collapse" aria-expanded="true" aria-controls="CRROrgRole_collapse" style="margin-left: 10px;">CRROrgRole</a></legend>
                    <div id="CRROrgRole_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}\n                    {{#CongestionRevenueRight}}<div><b>CongestionRevenueRight</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CongestionRevenueRight}}&quot;);}); return false;'>{{CongestionRevenueRight}}</a></div>{{/CongestionRevenueRight}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindCRRRoleType"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in MktDomain.CRRRoleType) obj["kindCRRRoleType"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindCRRRoleType"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CRROrgRole_collapse" aria-expanded="true" aria-controls="{{id}}_CRROrgRole_collapse" style="margin-left: 10px;">CRROrgRole</a></legend>
                    <div id="{{id}}_CRROrgRole_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindCRRRoleType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindCRRRoleType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CongestionRevenueRight'>CongestionRevenueRight: </label><div class='col-sm-8'><input id='{{id}}_CongestionRevenueRight' class='form-control' type='text'{{#CongestionRevenueRight}} value='{{CongestionRevenueRight}}'{{/CongestionRevenueRight}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CRROrgRole" };
                super.submit (id, obj);
                temp = MktDomain.CRRRoleType[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#CRRRoleType." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_CongestionRevenueRight").value; if ("" !== temp) obj["CongestionRevenueRight"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CongestionRevenueRight", "1", "1..*", "CongestionRevenueRight", "CRROrgRole"]
                        ]
                    )
                );
            }
        }

        /**
         * Congestion Revenue Rights (CRR) class that is inherited from a Document class.
         *
         * A CRR is a financial concept that is used to hedge congestion charges.
         * 
         * The CRR is usually settled based on the Locational Marginal Prices (LMPs) that are calculated in the day-ahead market. These LMPs are determined by the Day-ahead resource schedules/bids. CRRs will not hedge against marginal losses. If the congestion component of LMP at the sink is greater than at the source, then the CRR owner is entitled to receive a portion of congestion revenues. If the congestion component at the sink is less than at the source, then an obligation-type CRR owner will be charged, but an option-type CRR owner will not.
         *
         */
        class CongestionRevenueRight extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.CongestionRevenueRight;
                if (null == bucket)
                   cim_data.CongestionRevenueRight = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CongestionRevenueRight[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "CongestionRevenueRight";
                base.parse_attribute (/<cim:CongestionRevenueRight.cRRcategory\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "cRRcategory", sub, context);
                base.parse_attribute (/<cim:CongestionRevenueRight.cRRtype\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "cRRtype", sub, context);
                base.parse_attribute (/<cim:CongestionRevenueRight.hedgeType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "hedgeType", sub, context);
                base.parse_attribute (/<cim:CongestionRevenueRight.timeOfUse\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "timeOfUse", sub, context);
                base.parse_element (/<cim:CongestionRevenueRight.tradeSliceID>([\s\S]*?)<\/cim:CongestionRevenueRight.tradeSliceID>/g, obj, "tradeSliceID", base.to_string, sub, context);
                base.parse_attributes (/<cim:CongestionRevenueRight.CRROrgRole\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CRROrgRole", sub, context);
                base.parse_attribute (/<cim:CongestionRevenueRight.Flowgate\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
                base.parse_attribute (/<cim:CongestionRevenueRight.CRRMarket\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CRRMarket", sub, context);
                base.parse_attributes (/<cim:CongestionRevenueRight.CRRSegment\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CRRSegment", sub, context);
                let bucket = context.parsed.CongestionRevenueRight;
                if (null == bucket)
                   context.parsed.CongestionRevenueRight = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "CongestionRevenueRight", "cRRcategory", "cRRcategory", fields);
                base.export_attribute (obj, "CongestionRevenueRight", "cRRtype", "cRRtype", fields);
                base.export_attribute (obj, "CongestionRevenueRight", "hedgeType", "hedgeType", fields);
                base.export_attribute (obj, "CongestionRevenueRight", "timeOfUse", "timeOfUse", fields);
                base.export_element (obj, "CongestionRevenueRight", "tradeSliceID", "tradeSliceID",  base.from_string, fields);
                base.export_attributes (obj, "CongestionRevenueRight", "CRROrgRole", "CRROrgRole", fields);
                base.export_attribute (obj, "CongestionRevenueRight", "Flowgate", "Flowgate", fields);
                base.export_attribute (obj, "CongestionRevenueRight", "CRRMarket", "CRRMarket", fields);
                base.export_attributes (obj, "CongestionRevenueRight", "CRRSegment", "CRRSegment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CongestionRevenueRight_collapse" aria-expanded="true" aria-controls="CongestionRevenueRight_collapse" style="margin-left: 10px;">CongestionRevenueRight</a></legend>
                    <div id="CongestionRevenueRight_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#cRRcategory}}<div><b>cRRcategory</b>: {{cRRcategory}}</div>{{/cRRcategory}}
                    {{#cRRtype}}<div><b>cRRtype</b>: {{cRRtype}}</div>{{/cRRtype}}
                    {{#hedgeType}}<div><b>hedgeType</b>: {{hedgeType}}</div>{{/hedgeType}}
                    {{#timeOfUse}}<div><b>timeOfUse</b>: {{timeOfUse}}</div>{{/timeOfUse}}
                    {{#tradeSliceID}}<div><b>tradeSliceID</b>: {{tradeSliceID}}</div>{{/tradeSliceID}}
                    {{#CRROrgRole}}<div><b>CRROrgRole</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/CRROrgRole}}
                    {{#Flowgate}}<div><b>Flowgate</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Flowgate}}&quot;);}); return false;'>{{Flowgate}}</a></div>{{/Flowgate}}
                    {{#CRRMarket}}<div><b>CRRMarket</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CRRMarket}}&quot;);}); return false;'>{{CRRMarket}}</a></div>{{/CRRMarket}}
                    {{#CRRSegment}}<div><b>CRRSegment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/CRRSegment}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["cRRcategoryCRRCategoryType"] = [{ id: '', selected: (!obj["cRRcategory"])}]; for (let property in MktDomain.CRRCategoryType) obj["cRRcategoryCRRCategoryType"].push ({ id: property, selected: obj["cRRcategory"] && obj["cRRcategory"].endsWith ('.' + property)});
                obj["cRRtypeCRRSegmentType"] = [{ id: '', selected: (!obj["cRRtype"])}]; for (let property in MktDomain.CRRSegmentType) obj["cRRtypeCRRSegmentType"].push ({ id: property, selected: obj["cRRtype"] && obj["cRRtype"].endsWith ('.' + property)});
                obj["hedgeTypeCRRHedgeType"] = [{ id: '', selected: (!obj["hedgeType"])}]; for (let property in MktDomain.CRRHedgeType) obj["hedgeTypeCRRHedgeType"].push ({ id: property, selected: obj["hedgeType"] && obj["hedgeType"].endsWith ('.' + property)});
                obj["timeOfUseTimeOfUse"] = [{ id: '', selected: (!obj["timeOfUse"])}]; for (let property in MktDomain.TimeOfUse) obj["timeOfUseTimeOfUse"].push ({ id: property, selected: obj["timeOfUse"] && obj["timeOfUse"].endsWith ('.' + property)});
                if (obj["CRROrgRole"]) obj["CRROrgRole_string"] = obj["CRROrgRole"].join ();
                if (obj["CRRSegment"]) obj["CRRSegment_string"] = obj["CRRSegment"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["cRRcategoryCRRCategoryType"];
                delete obj["cRRtypeCRRSegmentType"];
                delete obj["hedgeTypeCRRHedgeType"];
                delete obj["timeOfUseTimeOfUse"];
                delete obj["CRROrgRole_string"];
                delete obj["CRRSegment_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CongestionRevenueRight_collapse" aria-expanded="true" aria-controls="{{id}}_CongestionRevenueRight_collapse" style="margin-left: 10px;">CongestionRevenueRight</a></legend>
                    <div id="{{id}}_CongestionRevenueRight_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cRRcategory'>cRRcategory: </label><div class='col-sm-8'><select id='{{id}}_cRRcategory' class='form-control custom-select'>{{#cRRcategoryCRRCategoryType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/cRRcategoryCRRCategoryType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cRRtype'>cRRtype: </label><div class='col-sm-8'><select id='{{id}}_cRRtype' class='form-control custom-select'>{{#cRRtypeCRRSegmentType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/cRRtypeCRRSegmentType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_hedgeType'>hedgeType: </label><div class='col-sm-8'><select id='{{id}}_hedgeType' class='form-control custom-select'>{{#hedgeTypeCRRHedgeType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/hedgeTypeCRRHedgeType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_timeOfUse'>timeOfUse: </label><div class='col-sm-8'><select id='{{id}}_timeOfUse' class='form-control custom-select'>{{#timeOfUseTimeOfUse}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/timeOfUseTimeOfUse}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tradeSliceID'>tradeSliceID: </label><div class='col-sm-8'><input id='{{id}}_tradeSliceID' class='form-control' type='text'{{#tradeSliceID}} value='{{tradeSliceID}}'{{/tradeSliceID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Flowgate'>Flowgate: </label><div class='col-sm-8'><input id='{{id}}_Flowgate' class='form-control' type='text'{{#Flowgate}} value='{{Flowgate}}'{{/Flowgate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CRRMarket'>CRRMarket: </label><div class='col-sm-8'><input id='{{id}}_CRRMarket' class='form-control' type='text'{{#CRRMarket}} value='{{CRRMarket}}'{{/CRRMarket}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CongestionRevenueRight" };
                super.submit (id, obj);
                temp = MktDomain.CRRCategoryType[document.getElementById (id + "_cRRcategory").value]; if (temp) obj["cRRcategory"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#CRRCategoryType." + temp; else delete obj["cRRcategory"];
                temp = MktDomain.CRRSegmentType[document.getElementById (id + "_cRRtype").value]; if (temp) obj["cRRtype"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#CRRSegmentType." + temp; else delete obj["cRRtype"];
                temp = MktDomain.CRRHedgeType[document.getElementById (id + "_hedgeType").value]; if (temp) obj["hedgeType"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#CRRHedgeType." + temp; else delete obj["hedgeType"];
                temp = MktDomain.TimeOfUse[document.getElementById (id + "_timeOfUse").value]; if (temp) obj["timeOfUse"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#TimeOfUse." + temp; else delete obj["timeOfUse"];
                temp = document.getElementById (id + "_tradeSliceID").value; if ("" !== temp) obj["tradeSliceID"] = temp;
                temp = document.getElementById (id + "_Flowgate").value; if ("" !== temp) obj["Flowgate"] = temp;
                temp = document.getElementById (id + "_CRRMarket").value; if ("" !== temp) obj["CRRMarket"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CRROrgRole", "1..*", "1", "CRROrgRole", "CongestionRevenueRight"],
                            ["Flowgate", "0..1", "0..1", "Flowgate", "CongestionRevenueRight"],
                            ["CRRMarket", "1", "1..*", "CRRMarket", "CongestionRevenueRight"],
                            ["CRRSegment", "1..*", "1", "CRRSegment", "CongestionRevenueRight"]
                        ]
                    )
                );
            }
        }

        /**
         * CRRSegment represents a segment of a CRR in a particular time frame.
         *
         * The segment class contains amount, clearing price, start date and time, end date and time.
         *
         */
        class CRRSegment extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.CRRSegment;
                if (null == bucket)
                   cim_data.CRRSegment = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CRRSegment[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CRRSegment";
                base.parse_element (/<cim:CRRSegment.amount>([\s\S]*?)<\/cim:CRRSegment.amount>/g, obj, "amount", base.to_string, sub, context);
                base.parse_element (/<cim:CRRSegment.clearingPrice>([\s\S]*?)<\/cim:CRRSegment.clearingPrice>/g, obj, "clearingPrice", base.to_string, sub, context);
                base.parse_element (/<cim:CRRSegment.endDateTime>([\s\S]*?)<\/cim:CRRSegment.endDateTime>/g, obj, "endDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:CRRSegment.quantity>([\s\S]*?)<\/cim:CRRSegment.quantity>/g, obj, "quantity", base.to_float, sub, context);
                base.parse_element (/<cim:CRRSegment.startDateTime>([\s\S]*?)<\/cim:CRRSegment.startDateTime>/g, obj, "startDateTime", base.to_datetime, sub, context);
                base.parse_attributes (/<cim:CRRSegment.Sink\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Sink", sub, context);
                base.parse_attributes (/<cim:CRRSegment.Source\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Source", sub, context);
                base.parse_attribute (/<cim:CRRSegment.CongestionRevenueRight\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CongestionRevenueRight", sub, context);
                let bucket = context.parsed.CRRSegment;
                if (null == bucket)
                   context.parsed.CRRSegment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "CRRSegment", "amount", "amount",  base.from_string, fields);
                base.export_element (obj, "CRRSegment", "clearingPrice", "clearingPrice",  base.from_string, fields);
                base.export_element (obj, "CRRSegment", "endDateTime", "endDateTime",  base.from_datetime, fields);
                base.export_element (obj, "CRRSegment", "quantity", "quantity",  base.from_float, fields);
                base.export_element (obj, "CRRSegment", "startDateTime", "startDateTime",  base.from_datetime, fields);
                base.export_attributes (obj, "CRRSegment", "Sink", "Sink", fields);
                base.export_attributes (obj, "CRRSegment", "Source", "Source", fields);
                base.export_attribute (obj, "CRRSegment", "CongestionRevenueRight", "CongestionRevenueRight", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CRRSegment_collapse" aria-expanded="true" aria-controls="CRRSegment_collapse" style="margin-left: 10px;">CRRSegment</a></legend>
                    <div id="CRRSegment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#amount}}<div><b>amount</b>: {{amount}}</div>{{/amount}}
                    {{#clearingPrice}}<div><b>clearingPrice</b>: {{clearingPrice}}</div>{{/clearingPrice}}
                    {{#endDateTime}}<div><b>endDateTime</b>: {{endDateTime}}</div>{{/endDateTime}}
                    {{#quantity}}<div><b>quantity</b>: {{quantity}}</div>{{/quantity}}
                    {{#startDateTime}}<div><b>startDateTime</b>: {{startDateTime}}</div>{{/startDateTime}}
                    {{#Sink}}<div><b>Sink</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Sink}}
                    {{#Source}}<div><b>Source</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Source}}
                    {{#CongestionRevenueRight}}<div><b>CongestionRevenueRight</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CongestionRevenueRight}}&quot;);}); return false;'>{{CongestionRevenueRight}}</a></div>{{/CongestionRevenueRight}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Sink"]) obj["Sink_string"] = obj["Sink"].join ();
                if (obj["Source"]) obj["Source_string"] = obj["Source"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Sink_string"];
                delete obj["Source_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CRRSegment_collapse" aria-expanded="true" aria-controls="{{id}}_CRRSegment_collapse" style="margin-left: 10px;">CRRSegment</a></legend>
                    <div id="{{id}}_CRRSegment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_amount'>amount: </label><div class='col-sm-8'><input id='{{id}}_amount' class='form-control' type='text'{{#amount}} value='{{amount}}'{{/amount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_clearingPrice'>clearingPrice: </label><div class='col-sm-8'><input id='{{id}}_clearingPrice' class='form-control' type='text'{{#clearingPrice}} value='{{clearingPrice}}'{{/clearingPrice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_endDateTime'>endDateTime: </label><div class='col-sm-8'><input id='{{id}}_endDateTime' class='form-control' type='text'{{#endDateTime}} value='{{endDateTime}}'{{/endDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_quantity'>quantity: </label><div class='col-sm-8'><input id='{{id}}_quantity' class='form-control' type='text'{{#quantity}} value='{{quantity}}'{{/quantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_startDateTime'>startDateTime: </label><div class='col-sm-8'><input id='{{id}}_startDateTime' class='form-control' type='text'{{#startDateTime}} value='{{startDateTime}}'{{/startDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Sink'>Sink: </label><div class='col-sm-8'><input id='{{id}}_Sink' class='form-control' type='text'{{#Sink}} value='{{Sink_string}}'{{/Sink}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Source'>Source: </label><div class='col-sm-8'><input id='{{id}}_Source' class='form-control' type='text'{{#Source}} value='{{Source_string}}'{{/Source}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CongestionRevenueRight'>CongestionRevenueRight: </label><div class='col-sm-8'><input id='{{id}}_CongestionRevenueRight' class='form-control' type='text'{{#CongestionRevenueRight}} value='{{CongestionRevenueRight}}'{{/CongestionRevenueRight}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CRRSegment" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_amount").value; if ("" !== temp) obj["amount"] = temp;
                temp = document.getElementById (id + "_clearingPrice").value; if ("" !== temp) obj["clearingPrice"] = temp;
                temp = document.getElementById (id + "_endDateTime").value; if ("" !== temp) obj["endDateTime"] = temp;
                temp = document.getElementById (id + "_quantity").value; if ("" !== temp) obj["quantity"] = temp;
                temp = document.getElementById (id + "_startDateTime").value; if ("" !== temp) obj["startDateTime"] = temp;
                temp = document.getElementById (id + "_Sink").value; if ("" !== temp) obj["Sink"] = temp.split (",");
                temp = document.getElementById (id + "_Source").value; if ("" !== temp) obj["Source"] = temp.split (",");
                temp = document.getElementById (id + "_CongestionRevenueRight").value; if ("" !== temp) obj["CongestionRevenueRight"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Sink", "0..*", "0..*", "Pnode", "SinkCRRSegment"],
                            ["Source", "0..*", "0..*", "Pnode", "SourceCRRSegment"],
                            ["CongestionRevenueRight", "1", "1..*", "CongestionRevenueRight", "CRRSegment"]
                        ]
                    )
                );
            }
        }

        return (
            {
                CongestionRevenueRight: CongestionRevenueRight,
                CRROrgRole: CRROrgRole,
                CRRSegment: CRRSegment
            }
        );
    }
);