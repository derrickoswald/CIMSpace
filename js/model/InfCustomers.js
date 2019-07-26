define
(
    ["model/base", "model/Common", "model/Core"],
    /**
     * The package is used to define detailed customer models.
     *
     */
    function (base, Common, Core)
    {

        /**
         * Kind of customer billing.
         *
         */
        let CustomerBillingKind =
        {
            "consolidatedEss": "consolidatedEss",
            "consolidatedUdc": "consolidatedUdc",
            "separateEssUdc": "separateEssUdc",
            "other": "other"
        };
        Object.freeze (CustomerBillingKind);

        /**
         * A type of customer agreement involving an external agency.
         *
         * For example, a customer may form a contracts with an Energy Service Supplier if Direct Access is permitted.
         *
         */
        class ExternalCustomerAgreement extends Common.Agreement
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ExternalCustomerAgreement;
                if (null == bucket)
                   cim_data.ExternalCustomerAgreement = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExternalCustomerAgreement[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Agreement.prototype.parse.call (this, context, sub);
                obj.cls = "ExternalCustomerAgreement";
                let bucket = context.parsed.ExternalCustomerAgreement;
                if (null == bucket)
                   context.parsed.ExternalCustomerAgreement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Agreement.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExternalCustomerAgreement_collapse" aria-expanded="true" aria-controls="ExternalCustomerAgreement_collapse" style="margin-left: 10px;">ExternalCustomerAgreement</a></legend>
                    <div id="ExternalCustomerAgreement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExternalCustomerAgreement_collapse" aria-expanded="true" aria-controls="{{id}}_ExternalCustomerAgreement_collapse" style="margin-left: 10px;">ExternalCustomerAgreement</a></legend>
                    <div id="{{id}}_ExternalCustomerAgreement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "ExternalCustomerAgreement" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * Billing information for work performed for the customer.
         *
         * The history of Work Billing Info, Invoices, and Payments is to be maintained in associated ActivityRecords.
         *
         */
        class WorkBillingInfo extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.WorkBillingInfo;
                if (null == bucket)
                   cim_data.WorkBillingInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WorkBillingInfo[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "WorkBillingInfo";
                base.parse_element (/<cim:WorkBillingInfo.issueDateTime>([\s\S]*?)<\/cim:WorkBillingInfo.issueDateTime>/g, obj, "issueDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:WorkBillingInfo.dueDateTime>([\s\S]*?)<\/cim:WorkBillingInfo.dueDateTime>/g, obj, "dueDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:WorkBillingInfo.receivedDateTime>([\s\S]*?)<\/cim:WorkBillingInfo.receivedDateTime>/g, obj, "receivedDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:WorkBillingInfo.workPrice>([\s\S]*?)<\/cim:WorkBillingInfo.workPrice>/g, obj, "workPrice", base.to_string, sub, context);
                base.parse_element (/<cim:WorkBillingInfo.costEstimate>([\s\S]*?)<\/cim:WorkBillingInfo.costEstimate>/g, obj, "costEstimate", base.to_string, sub, context);
                base.parse_element (/<cim:WorkBillingInfo.deposit>([\s\S]*?)<\/cim:WorkBillingInfo.deposit>/g, obj, "deposit", base.to_string, sub, context);
                base.parse_element (/<cim:WorkBillingInfo.discount>([\s\S]*?)<\/cim:WorkBillingInfo.discount>/g, obj, "discount", base.to_float, sub, context);
                base.parse_attribute (/<cim:WorkBillingInfo.CustomerAccount\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAccount", sub, context);
                base.parse_attributes (/<cim:WorkBillingInfo.ErpLineItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpLineItems", sub, context);
                base.parse_attributes (/<cim:WorkBillingInfo.Works\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Works", sub, context);
                let bucket = context.parsed.WorkBillingInfo;
                if (null == bucket)
                   context.parsed.WorkBillingInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "WorkBillingInfo", "issueDateTime", "issueDateTime",  base.from_datetime, fields);
                base.export_element (obj, "WorkBillingInfo", "dueDateTime", "dueDateTime",  base.from_datetime, fields);
                base.export_element (obj, "WorkBillingInfo", "receivedDateTime", "receivedDateTime",  base.from_datetime, fields);
                base.export_element (obj, "WorkBillingInfo", "workPrice", "workPrice",  base.from_string, fields);
                base.export_element (obj, "WorkBillingInfo", "costEstimate", "costEstimate",  base.from_string, fields);
                base.export_element (obj, "WorkBillingInfo", "deposit", "deposit",  base.from_string, fields);
                base.export_element (obj, "WorkBillingInfo", "discount", "discount",  base.from_float, fields);
                base.export_attribute (obj, "WorkBillingInfo", "CustomerAccount", "CustomerAccount", fields);
                base.export_attributes (obj, "WorkBillingInfo", "ErpLineItems", "ErpLineItems", fields);
                base.export_attributes (obj, "WorkBillingInfo", "Works", "Works", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#WorkBillingInfo_collapse" aria-expanded="true" aria-controls="WorkBillingInfo_collapse" style="margin-left: 10px;">WorkBillingInfo</a></legend>
                    <div id="WorkBillingInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#issueDateTime}}<div><b>issueDateTime</b>: {{issueDateTime}}</div>{{/issueDateTime}}
                    {{#dueDateTime}}<div><b>dueDateTime</b>: {{dueDateTime}}</div>{{/dueDateTime}}
                    {{#receivedDateTime}}<div><b>receivedDateTime</b>: {{receivedDateTime}}</div>{{/receivedDateTime}}
                    {{#workPrice}}<div><b>workPrice</b>: {{workPrice}}</div>{{/workPrice}}
                    {{#costEstimate}}<div><b>costEstimate</b>: {{costEstimate}}</div>{{/costEstimate}}
                    {{#deposit}}<div><b>deposit</b>: {{deposit}}</div>{{/deposit}}
                    {{#discount}}<div><b>discount</b>: {{discount}}</div>{{/discount}}
                    {{#CustomerAccount}}<div><b>CustomerAccount</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CustomerAccount}}&quot;);}); return false;'>{{CustomerAccount}}</a></div>{{/CustomerAccount}}
                    {{#ErpLineItems}}<div><b>ErpLineItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpLineItems}}
                    {{#Works}}<div><b>Works</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Works}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ErpLineItems"]) obj["ErpLineItems_string"] = obj["ErpLineItems"].join ();
                if (obj["Works"]) obj["Works_string"] = obj["Works"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ErpLineItems_string"];
                delete obj["Works_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_WorkBillingInfo_collapse" aria-expanded="true" aria-controls="{{id}}_WorkBillingInfo_collapse" style="margin-left: 10px;">WorkBillingInfo</a></legend>
                    <div id="{{id}}_WorkBillingInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_issueDateTime'>issueDateTime: </label><div class='col-sm-8'><input id='{{id}}_issueDateTime' class='form-control' type='text'{{#issueDateTime}} value='{{issueDateTime}}'{{/issueDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dueDateTime'>dueDateTime: </label><div class='col-sm-8'><input id='{{id}}_dueDateTime' class='form-control' type='text'{{#dueDateTime}} value='{{dueDateTime}}'{{/dueDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_receivedDateTime'>receivedDateTime: </label><div class='col-sm-8'><input id='{{id}}_receivedDateTime' class='form-control' type='text'{{#receivedDateTime}} value='{{receivedDateTime}}'{{/receivedDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_workPrice'>workPrice: </label><div class='col-sm-8'><input id='{{id}}_workPrice' class='form-control' type='text'{{#workPrice}} value='{{workPrice}}'{{/workPrice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_costEstimate'>costEstimate: </label><div class='col-sm-8'><input id='{{id}}_costEstimate' class='form-control' type='text'{{#costEstimate}} value='{{costEstimate}}'{{/costEstimate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_deposit'>deposit: </label><div class='col-sm-8'><input id='{{id}}_deposit' class='form-control' type='text'{{#deposit}} value='{{deposit}}'{{/deposit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_discount'>discount: </label><div class='col-sm-8'><input id='{{id}}_discount' class='form-control' type='text'{{#discount}} value='{{discount}}'{{/discount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CustomerAccount'>CustomerAccount: </label><div class='col-sm-8'><input id='{{id}}_CustomerAccount' class='form-control' type='text'{{#CustomerAccount}} value='{{CustomerAccount}}'{{/CustomerAccount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpLineItems'>ErpLineItems: </label><div class='col-sm-8'><input id='{{id}}_ErpLineItems' class='form-control' type='text'{{#ErpLineItems}} value='{{ErpLineItems_string}}'{{/ErpLineItems}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "WorkBillingInfo" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_issueDateTime").value; if ("" !== temp) obj["issueDateTime"] = temp;
                temp = document.getElementById (id + "_dueDateTime").value; if ("" !== temp) obj["dueDateTime"] = temp;
                temp = document.getElementById (id + "_receivedDateTime").value; if ("" !== temp) obj["receivedDateTime"] = temp;
                temp = document.getElementById (id + "_workPrice").value; if ("" !== temp) obj["workPrice"] = temp;
                temp = document.getElementById (id + "_costEstimate").value; if ("" !== temp) obj["costEstimate"] = temp;
                temp = document.getElementById (id + "_deposit").value; if ("" !== temp) obj["deposit"] = temp;
                temp = document.getElementById (id + "_discount").value; if ("" !== temp) obj["discount"] = temp;
                temp = document.getElementById (id + "_CustomerAccount").value; if ("" !== temp) obj["CustomerAccount"] = temp;
                temp = document.getElementById (id + "_ErpLineItems").value; if ("" !== temp) obj["ErpLineItems"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CustomerAccount", "0..1", "0..*", "CustomerAccount", "WorkBillingInfos"],
                            ["ErpLineItems", "0..*", "0..*", "ErpInvoiceLineItem", "WorkBillingInfos"],
                            ["Works", "0..*", "0..1", "Work", "WorkBillingInfo"]
                        ]
                    )
                );
            }
        }

        /**
         * The Standard Industrial Classification (SIC) are the codes that identify the type of products/service an industry is involved in, and used for statutory reporting purposes.
         *
         * For example, in the USA these codes are located by the federal government, and then published in a book entitled "The Standard Industrial Classification Manual". The codes are arranged in a hierarchical structure.
         * Note that Residential Service Agreements are not classified according to the SIC codes.
         *
         */
        class StandardIndustryCode extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.StandardIndustryCode;
                if (null == bucket)
                   cim_data.StandardIndustryCode = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.StandardIndustryCode[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "StandardIndustryCode";
                base.parse_element (/<cim:StandardIndustryCode.code>([\s\S]*?)<\/cim:StandardIndustryCode.code>/g, obj, "code", base.to_string, sub, context);
                base.parse_attributes (/<cim:StandardIndustryCode.CustomerAgreements\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAgreements", sub, context);
                let bucket = context.parsed.StandardIndustryCode;
                if (null == bucket)
                   context.parsed.StandardIndustryCode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "StandardIndustryCode", "code", "code",  base.from_string, fields);
                base.export_attributes (obj, "StandardIndustryCode", "CustomerAgreements", "CustomerAgreements", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#StandardIndustryCode_collapse" aria-expanded="true" aria-controls="StandardIndustryCode_collapse" style="margin-left: 10px;">StandardIndustryCode</a></legend>
                    <div id="StandardIndustryCode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#code}}<div><b>code</b>: {{code}}</div>{{/code}}
                    {{#CustomerAgreements}}<div><b>CustomerAgreements</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/CustomerAgreements}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["CustomerAgreements"]) obj["CustomerAgreements_string"] = obj["CustomerAgreements"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["CustomerAgreements_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_StandardIndustryCode_collapse" aria-expanded="true" aria-controls="{{id}}_StandardIndustryCode_collapse" style="margin-left: 10px;">StandardIndustryCode</a></legend>
                    <div id="{{id}}_StandardIndustryCode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_code'>code: </label><div class='col-sm-8'><input id='{{id}}_code' class='form-control' type='text'{{#code}} value='{{code}}'{{/code}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "StandardIndustryCode" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_code").value; if ("" !== temp) obj["code"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CustomerAgreements", "0..*", "0..1", "CustomerAgreement", "StandardIndustryCode"]
                        ]
                    )
                );
            }
        }

        /**
         * A service guarantee, often imposed by a regulator, defines conditions that, if not satisfied, will result in the utility making a monetary payment to the customer.
         *
         * Note that guarantee's identifier is in the 'name' attribute and the status of the guarantee is in the 'Status.status' attribute.
         * Example service requirements include:
         * 1) If power is not restored within 24 hours, customers can claim \$50 for residential customers or \$100 for commercial and industrial customers. In addition for each extra period of 12 hours the customer's supply has not been activated, the customer can claim \$25.
         * 2) If a customer has a question about their electricity bill, the utility will investigate and respond to the inquiry within 15 working days. If utility fails to meet its guarantee, utility will automatically pay the customer \$50.
         *
         */
        class ServiceGuarantee extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ServiceGuarantee;
                if (null == bucket)
                   cim_data.ServiceGuarantee = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ServiceGuarantee[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "ServiceGuarantee";
                base.parse_element (/<cim:ServiceGuarantee.serviceRequirement>([\s\S]*?)<\/cim:ServiceGuarantee.serviceRequirement>/g, obj, "serviceRequirement", base.to_string, sub, context);
                base.parse_element (/<cim:ServiceGuarantee.payAmount>([\s\S]*?)<\/cim:ServiceGuarantee.payAmount>/g, obj, "payAmount", base.to_string, sub, context);
                base.parse_element (/<cim:ServiceGuarantee.automaticPay>([\s\S]*?)<\/cim:ServiceGuarantee.automaticPay>/g, obj, "automaticPay", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:ServiceGuarantee.applicationPeriod\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "applicationPeriod", sub, context);
                let bucket = context.parsed.ServiceGuarantee;
                if (null == bucket)
                   context.parsed.ServiceGuarantee = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "ServiceGuarantee", "serviceRequirement", "serviceRequirement",  base.from_string, fields);
                base.export_element (obj, "ServiceGuarantee", "payAmount", "payAmount",  base.from_string, fields);
                base.export_element (obj, "ServiceGuarantee", "automaticPay", "automaticPay",  base.from_boolean, fields);
                base.export_attribute (obj, "ServiceGuarantee", "applicationPeriod", "applicationPeriod", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ServiceGuarantee_collapse" aria-expanded="true" aria-controls="ServiceGuarantee_collapse" style="margin-left: 10px;">ServiceGuarantee</a></legend>
                    <div id="ServiceGuarantee_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#serviceRequirement}}<div><b>serviceRequirement</b>: {{serviceRequirement}}</div>{{/serviceRequirement}}
                    {{#payAmount}}<div><b>payAmount</b>: {{payAmount}}</div>{{/payAmount}}
                    {{#automaticPay}}<div><b>automaticPay</b>: {{automaticPay}}</div>{{/automaticPay}}
                    {{#applicationPeriod}}<div><b>applicationPeriod</b>: {{applicationPeriod}}</div>{{/applicationPeriod}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ServiceGuarantee_collapse" aria-expanded="true" aria-controls="{{id}}_ServiceGuarantee_collapse" style="margin-left: 10px;">ServiceGuarantee</a></legend>
                    <div id="{{id}}_ServiceGuarantee_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_serviceRequirement'>serviceRequirement: </label><div class='col-sm-8'><input id='{{id}}_serviceRequirement' class='form-control' type='text'{{#serviceRequirement}} value='{{serviceRequirement}}'{{/serviceRequirement}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_payAmount'>payAmount: </label><div class='col-sm-8'><input id='{{id}}_payAmount' class='form-control' type='text'{{#payAmount}} value='{{payAmount}}'{{/payAmount}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_automaticPay'>automaticPay: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_automaticPay' class='form-check-input' type='checkbox'{{#automaticPay}} checked{{/automaticPay}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_applicationPeriod'>applicationPeriod: </label><div class='col-sm-8'><input id='{{id}}_applicationPeriod' class='form-control' type='text'{{#applicationPeriod}} value='{{applicationPeriod}}'{{/applicationPeriod}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ServiceGuarantee" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_serviceRequirement").value; if ("" !== temp) obj["serviceRequirement"] = temp;
                temp = document.getElementById (id + "_payAmount").value; if ("" !== temp) obj["payAmount"] = temp;
                temp = document.getElementById (id + "_automaticPay").checked; if (temp) obj["automaticPay"] = true;
                temp = document.getElementById (id + "_applicationPeriod").value; if ("" !== temp) obj["applicationPeriod"] = temp;

                return (obj);
            }
        }

        /**
         * Price curve for specifying the cost of energy (X) at points in time (y1) according to a prcing structure, which is based on a tariff.
         *
         */
        class SubscribePowerCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SubscribePowerCurve;
                if (null == bucket)
                   cim_data.SubscribePowerCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SubscribePowerCurve[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "SubscribePowerCurve";
                let bucket = context.parsed.SubscribePowerCurve;
                if (null == bucket)
                   context.parsed.SubscribePowerCurve = bucket = {};
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SubscribePowerCurve_collapse" aria-expanded="true" aria-controls="SubscribePowerCurve_collapse" style="margin-left: 10px;">SubscribePowerCurve</a></legend>
                    <div id="SubscribePowerCurve_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SubscribePowerCurve_collapse" aria-expanded="true" aria-controls="{{id}}_SubscribePowerCurve_collapse" style="margin-left: 10px;">SubscribePowerCurve</a></legend>
                    <div id="{{id}}_SubscribePowerCurve_collapse" class="collapse in show" style="margin-left: 10px;">
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
                obj = obj || { id: id, cls: "SubscribePowerCurve" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * The creation of the monthly customer billing statements is the method employed to notify Customers of charges, adjustments and credits applied to their account for Services and Products.
         *
         * The actuall billing occurs through an ErpInvoice. The CustomerBillingInfo includes information from the payment, collection, meter reading, installed meter, service, site, customer, customer account, customer agreement, services and pricing subject areas. Each component price shows up as a separate line item on the ErpInvoice.
         * The Customer Billing Statement may include collection and account messages, marketing/civic event messages and bill inserts.
         * One Customer Billing Statement is produced for all Agreements under a CustomerAccount per billing cycle date defined in 'CustomerAccount.billingCycle'.
         * The history of CustomerBillingInfo, Invoices and Payments is to be maintained in associated ActivityRecords.
         *
         */
        class CustomerBillingInfo extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.CustomerBillingInfo;
                if (null == bucket)
                   cim_data.CustomerBillingInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CustomerBillingInfo[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "CustomerBillingInfo";
                base.parse_attribute (/<cim:CustomerBillingInfo.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:CustomerBillingInfo.billingDate>([\s\S]*?)<\/cim:CustomerBillingInfo.billingDate>/g, obj, "billingDate", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerBillingInfo.dueDate>([\s\S]*?)<\/cim:CustomerBillingInfo.dueDate>/g, obj, "dueDate", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerBillingInfo.outBalance>([\s\S]*?)<\/cim:CustomerBillingInfo.outBalance>/g, obj, "outBalance", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerBillingInfo.pymtPlanAmt>([\s\S]*?)<\/cim:CustomerBillingInfo.pymtPlanAmt>/g, obj, "pymtPlanAmt", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerBillingInfo.pymtPlanType>([\s\S]*?)<\/cim:CustomerBillingInfo.pymtPlanType>/g, obj, "pymtPlanType", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerBillingInfo.lastPaymentDate>([\s\S]*?)<\/cim:CustomerBillingInfo.lastPaymentDate>/g, obj, "lastPaymentDate", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerBillingInfo.lastPaymentAmt>([\s\S]*?)<\/cim:CustomerBillingInfo.lastPaymentAmt>/g, obj, "lastPaymentAmt", base.to_string, sub, context);
                base.parse_attributes (/<cim:CustomerBillingInfo.ErpInvoiceLineItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpInvoiceLineItems", sub, context);
                base.parse_attribute (/<cim:CustomerBillingInfo.CustomerAccount\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAccount", sub, context);
                let bucket = context.parsed.CustomerBillingInfo;
                if (null == bucket)
                   context.parsed.CustomerBillingInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "CustomerBillingInfo", "kind", "kind", fields);
                base.export_element (obj, "CustomerBillingInfo", "billingDate", "billingDate",  base.from_string, fields);
                base.export_element (obj, "CustomerBillingInfo", "dueDate", "dueDate",  base.from_string, fields);
                base.export_element (obj, "CustomerBillingInfo", "outBalance", "outBalance",  base.from_string, fields);
                base.export_element (obj, "CustomerBillingInfo", "pymtPlanAmt", "pymtPlanAmt",  base.from_string, fields);
                base.export_element (obj, "CustomerBillingInfo", "pymtPlanType", "pymtPlanType",  base.from_string, fields);
                base.export_element (obj, "CustomerBillingInfo", "lastPaymentDate", "lastPaymentDate",  base.from_string, fields);
                base.export_element (obj, "CustomerBillingInfo", "lastPaymentAmt", "lastPaymentAmt",  base.from_string, fields);
                base.export_attributes (obj, "CustomerBillingInfo", "ErpInvoiceLineItems", "ErpInvoiceLineItems", fields);
                base.export_attribute (obj, "CustomerBillingInfo", "CustomerAccount", "CustomerAccount", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CustomerBillingInfo_collapse" aria-expanded="true" aria-controls="CustomerBillingInfo_collapse" style="margin-left: 10px;">CustomerBillingInfo</a></legend>
                    <div id="CustomerBillingInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#billingDate}}<div><b>billingDate</b>: {{billingDate}}</div>{{/billingDate}}
                    {{#dueDate}}<div><b>dueDate</b>: {{dueDate}}</div>{{/dueDate}}
                    {{#outBalance}}<div><b>outBalance</b>: {{outBalance}}</div>{{/outBalance}}
                    {{#pymtPlanAmt}}<div><b>pymtPlanAmt</b>: {{pymtPlanAmt}}</div>{{/pymtPlanAmt}}
                    {{#pymtPlanType}}<div><b>pymtPlanType</b>: {{pymtPlanType}}</div>{{/pymtPlanType}}
                    {{#lastPaymentDate}}<div><b>lastPaymentDate</b>: {{lastPaymentDate}}</div>{{/lastPaymentDate}}
                    {{#lastPaymentAmt}}<div><b>lastPaymentAmt</b>: {{lastPaymentAmt}}</div>{{/lastPaymentAmt}}
                    {{#ErpInvoiceLineItems}}<div><b>ErpInvoiceLineItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpInvoiceLineItems}}
                    {{#CustomerAccount}}<div><b>CustomerAccount</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CustomerAccount}}&quot;);}); return false;'>{{CustomerAccount}}</a></div>{{/CustomerAccount}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindCustomerBillingKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in CustomerBillingKind) obj["kindCustomerBillingKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
                if (obj["ErpInvoiceLineItems"]) obj["ErpInvoiceLineItems_string"] = obj["ErpInvoiceLineItems"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindCustomerBillingKind"];
                delete obj["ErpInvoiceLineItems_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CustomerBillingInfo_collapse" aria-expanded="true" aria-controls="{{id}}_CustomerBillingInfo_collapse" style="margin-left: 10px;">CustomerBillingInfo</a></legend>
                    <div id="{{id}}_CustomerBillingInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindCustomerBillingKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindCustomerBillingKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_billingDate'>billingDate: </label><div class='col-sm-8'><input id='{{id}}_billingDate' class='form-control' type='text'{{#billingDate}} value='{{billingDate}}'{{/billingDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dueDate'>dueDate: </label><div class='col-sm-8'><input id='{{id}}_dueDate' class='form-control' type='text'{{#dueDate}} value='{{dueDate}}'{{/dueDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_outBalance'>outBalance: </label><div class='col-sm-8'><input id='{{id}}_outBalance' class='form-control' type='text'{{#outBalance}} value='{{outBalance}}'{{/outBalance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pymtPlanAmt'>pymtPlanAmt: </label><div class='col-sm-8'><input id='{{id}}_pymtPlanAmt' class='form-control' type='text'{{#pymtPlanAmt}} value='{{pymtPlanAmt}}'{{/pymtPlanAmt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pymtPlanType'>pymtPlanType: </label><div class='col-sm-8'><input id='{{id}}_pymtPlanType' class='form-control' type='text'{{#pymtPlanType}} value='{{pymtPlanType}}'{{/pymtPlanType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lastPaymentDate'>lastPaymentDate: </label><div class='col-sm-8'><input id='{{id}}_lastPaymentDate' class='form-control' type='text'{{#lastPaymentDate}} value='{{lastPaymentDate}}'{{/lastPaymentDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lastPaymentAmt'>lastPaymentAmt: </label><div class='col-sm-8'><input id='{{id}}_lastPaymentAmt' class='form-control' type='text'{{#lastPaymentAmt}} value='{{lastPaymentAmt}}'{{/lastPaymentAmt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpInvoiceLineItems'>ErpInvoiceLineItems: </label><div class='col-sm-8'><input id='{{id}}_ErpInvoiceLineItems' class='form-control' type='text'{{#ErpInvoiceLineItems}} value='{{ErpInvoiceLineItems_string}}'{{/ErpInvoiceLineItems}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CustomerAccount'>CustomerAccount: </label><div class='col-sm-8'><input id='{{id}}_CustomerAccount' class='form-control' type='text'{{#CustomerAccount}} value='{{CustomerAccount}}'{{/CustomerAccount}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CustomerBillingInfo" };
                super.submit (id, obj);
                temp = CustomerBillingKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#CustomerBillingKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_billingDate").value; if ("" !== temp) obj["billingDate"] = temp;
                temp = document.getElementById (id + "_dueDate").value; if ("" !== temp) obj["dueDate"] = temp;
                temp = document.getElementById (id + "_outBalance").value; if ("" !== temp) obj["outBalance"] = temp;
                temp = document.getElementById (id + "_pymtPlanAmt").value; if ("" !== temp) obj["pymtPlanAmt"] = temp;
                temp = document.getElementById (id + "_pymtPlanType").value; if ("" !== temp) obj["pymtPlanType"] = temp;
                temp = document.getElementById (id + "_lastPaymentDate").value; if ("" !== temp) obj["lastPaymentDate"] = temp;
                temp = document.getElementById (id + "_lastPaymentAmt").value; if ("" !== temp) obj["lastPaymentAmt"] = temp;
                temp = document.getElementById (id + "_ErpInvoiceLineItems").value; if ("" !== temp) obj["ErpInvoiceLineItems"] = temp.split (",");
                temp = document.getElementById (id + "_CustomerAccount").value; if ("" !== temp) obj["CustomerAccount"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ErpInvoiceLineItems", "0..*", "0..*", "ErpInvoiceLineItem", "CustomerBillingInfos"],
                            ["CustomerAccount", "0..1", "0..*", "CustomerAccount", "CustomerBillingInfos"]
                        ]
                    )
                );
            }
        }

        /**
         * Compliance events are used for reporting regulatory or contract compliance issues and/or variances.
         *
         * These might be created as a consequence of local business processes and associated rules. It is anticipated that this class will be customised extensively to meet local implementation needs.
         * Use inherited 'type' to indicate that, for example, expected performance will not be met or reported as mandated.
         *
         */
        class ComplianceEvent extends Common.ActivityRecord
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ComplianceEvent;
                if (null == bucket)
                   cim_data.ComplianceEvent = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ComplianceEvent[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.ActivityRecord.prototype.parse.call (this, context, sub);
                obj.cls = "ComplianceEvent";
                base.parse_element (/<cim:ComplianceEvent.deadline>([\s\S]*?)<\/cim:ComplianceEvent.deadline>/g, obj, "deadline", base.to_datetime, sub, context);
                let bucket = context.parsed.ComplianceEvent;
                if (null == bucket)
                   context.parsed.ComplianceEvent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.ActivityRecord.prototype.export.call (this, obj, false);

                base.export_element (obj, "ComplianceEvent", "deadline", "deadline",  base.from_datetime, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ComplianceEvent_collapse" aria-expanded="true" aria-controls="ComplianceEvent_collapse" style="margin-left: 10px;">ComplianceEvent</a></legend>
                    <div id="ComplianceEvent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.ActivityRecord.prototype.template.call (this) +
                    `
                    {{#deadline}}<div><b>deadline</b>: {{deadline}}</div>{{/deadline}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ComplianceEvent_collapse" aria-expanded="true" aria-controls="{{id}}_ComplianceEvent_collapse" style="margin-left: 10px;">ComplianceEvent</a></legend>
                    <div id="{{id}}_ComplianceEvent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.ActivityRecord.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_deadline'>deadline: </label><div class='col-sm-8'><input id='{{id}}_deadline' class='form-control' type='text'{{#deadline}} value='{{deadline}}'{{/deadline}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ComplianceEvent" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_deadline").value; if ("" !== temp) obj["deadline"] = temp;

                return (obj);
            }
        }

        /**
         * Pricing can be based on power quality.
         *
         */
        class PowerQualityPricing extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PowerQualityPricing;
                if (null == bucket)
                   cim_data.PowerQualityPricing = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PowerQualityPricing[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "PowerQualityPricing";
                base.parse_element (/<cim:PowerQualityPricing.emergencyHighVoltLimit>([\s\S]*?)<\/cim:PowerQualityPricing.emergencyHighVoltLimit>/g, obj, "emergencyHighVoltLimit", base.to_string, sub, context);
                base.parse_element (/<cim:PowerQualityPricing.emergencyLowVoltLimit>([\s\S]*?)<\/cim:PowerQualityPricing.emergencyLowVoltLimit>/g, obj, "emergencyLowVoltLimit", base.to_string, sub, context);
                base.parse_element (/<cim:PowerQualityPricing.normalHighVoltLimit>([\s\S]*?)<\/cim:PowerQualityPricing.normalHighVoltLimit>/g, obj, "normalHighVoltLimit", base.to_string, sub, context);
                base.parse_element (/<cim:PowerQualityPricing.normalLowVoltLimit>([\s\S]*?)<\/cim:PowerQualityPricing.normalLowVoltLimit>/g, obj, "normalLowVoltLimit", base.to_string, sub, context);
                base.parse_element (/<cim:PowerQualityPricing.powerFactorMin>([\s\S]*?)<\/cim:PowerQualityPricing.powerFactorMin>/g, obj, "powerFactorMin", base.to_float, sub, context);
                base.parse_element (/<cim:PowerQualityPricing.valueUninterruptedServiceEnergy>([\s\S]*?)<\/cim:PowerQualityPricing.valueUninterruptedServiceEnergy>/g, obj, "valueUninterruptedServiceEnergy", base.to_string, sub, context);
                base.parse_element (/<cim:PowerQualityPricing.valueUninterruptedServiceP>([\s\S]*?)<\/cim:PowerQualityPricing.valueUninterruptedServiceP>/g, obj, "valueUninterruptedServiceP", base.to_float, sub, context);
                base.parse_element (/<cim:PowerQualityPricing.voltImbalanceViolCost>([\s\S]*?)<\/cim:PowerQualityPricing.voltImbalanceViolCost>/g, obj, "voltImbalanceViolCost", base.to_float, sub, context);
                base.parse_element (/<cim:PowerQualityPricing.voltLimitViolCost>([\s\S]*?)<\/cim:PowerQualityPricing.voltLimitViolCost>/g, obj, "voltLimitViolCost", base.to_float, sub, context);
                let bucket = context.parsed.PowerQualityPricing;
                if (null == bucket)
                   context.parsed.PowerQualityPricing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "PowerQualityPricing", "emergencyHighVoltLimit", "emergencyHighVoltLimit",  base.from_string, fields);
                base.export_element (obj, "PowerQualityPricing", "emergencyLowVoltLimit", "emergencyLowVoltLimit",  base.from_string, fields);
                base.export_element (obj, "PowerQualityPricing", "normalHighVoltLimit", "normalHighVoltLimit",  base.from_string, fields);
                base.export_element (obj, "PowerQualityPricing", "normalLowVoltLimit", "normalLowVoltLimit",  base.from_string, fields);
                base.export_element (obj, "PowerQualityPricing", "powerFactorMin", "powerFactorMin",  base.from_float, fields);
                base.export_element (obj, "PowerQualityPricing", "valueUninterruptedServiceEnergy", "valueUninterruptedServiceEnergy",  base.from_string, fields);
                base.export_element (obj, "PowerQualityPricing", "valueUninterruptedServiceP", "valueUninterruptedServiceP",  base.from_float, fields);
                base.export_element (obj, "PowerQualityPricing", "voltImbalanceViolCost", "voltImbalanceViolCost",  base.from_float, fields);
                base.export_element (obj, "PowerQualityPricing", "voltLimitViolCost", "voltLimitViolCost",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PowerQualityPricing_collapse" aria-expanded="true" aria-controls="PowerQualityPricing_collapse" style="margin-left: 10px;">PowerQualityPricing</a></legend>
                    <div id="PowerQualityPricing_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#emergencyHighVoltLimit}}<div><b>emergencyHighVoltLimit</b>: {{emergencyHighVoltLimit}}</div>{{/emergencyHighVoltLimit}}
                    {{#emergencyLowVoltLimit}}<div><b>emergencyLowVoltLimit</b>: {{emergencyLowVoltLimit}}</div>{{/emergencyLowVoltLimit}}
                    {{#normalHighVoltLimit}}<div><b>normalHighVoltLimit</b>: {{normalHighVoltLimit}}</div>{{/normalHighVoltLimit}}
                    {{#normalLowVoltLimit}}<div><b>normalLowVoltLimit</b>: {{normalLowVoltLimit}}</div>{{/normalLowVoltLimit}}
                    {{#powerFactorMin}}<div><b>powerFactorMin</b>: {{powerFactorMin}}</div>{{/powerFactorMin}}
                    {{#valueUninterruptedServiceEnergy}}<div><b>valueUninterruptedServiceEnergy</b>: {{valueUninterruptedServiceEnergy}}</div>{{/valueUninterruptedServiceEnergy}}
                    {{#valueUninterruptedServiceP}}<div><b>valueUninterruptedServiceP</b>: {{valueUninterruptedServiceP}}</div>{{/valueUninterruptedServiceP}}
                    {{#voltImbalanceViolCost}}<div><b>voltImbalanceViolCost</b>: {{voltImbalanceViolCost}}</div>{{/voltImbalanceViolCost}}
                    {{#voltLimitViolCost}}<div><b>voltLimitViolCost</b>: {{voltLimitViolCost}}</div>{{/voltLimitViolCost}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PowerQualityPricing_collapse" aria-expanded="true" aria-controls="{{id}}_PowerQualityPricing_collapse" style="margin-left: 10px;">PowerQualityPricing</a></legend>
                    <div id="{{id}}_PowerQualityPricing_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_emergencyHighVoltLimit'>emergencyHighVoltLimit: </label><div class='col-sm-8'><input id='{{id}}_emergencyHighVoltLimit' class='form-control' type='text'{{#emergencyHighVoltLimit}} value='{{emergencyHighVoltLimit}}'{{/emergencyHighVoltLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_emergencyLowVoltLimit'>emergencyLowVoltLimit: </label><div class='col-sm-8'><input id='{{id}}_emergencyLowVoltLimit' class='form-control' type='text'{{#emergencyLowVoltLimit}} value='{{emergencyLowVoltLimit}}'{{/emergencyLowVoltLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_normalHighVoltLimit'>normalHighVoltLimit: </label><div class='col-sm-8'><input id='{{id}}_normalHighVoltLimit' class='form-control' type='text'{{#normalHighVoltLimit}} value='{{normalHighVoltLimit}}'{{/normalHighVoltLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_normalLowVoltLimit'>normalLowVoltLimit: </label><div class='col-sm-8'><input id='{{id}}_normalLowVoltLimit' class='form-control' type='text'{{#normalLowVoltLimit}} value='{{normalLowVoltLimit}}'{{/normalLowVoltLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_powerFactorMin'>powerFactorMin: </label><div class='col-sm-8'><input id='{{id}}_powerFactorMin' class='form-control' type='text'{{#powerFactorMin}} value='{{powerFactorMin}}'{{/powerFactorMin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_valueUninterruptedServiceEnergy'>valueUninterruptedServiceEnergy: </label><div class='col-sm-8'><input id='{{id}}_valueUninterruptedServiceEnergy' class='form-control' type='text'{{#valueUninterruptedServiceEnergy}} value='{{valueUninterruptedServiceEnergy}}'{{/valueUninterruptedServiceEnergy}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_valueUninterruptedServiceP'>valueUninterruptedServiceP: </label><div class='col-sm-8'><input id='{{id}}_valueUninterruptedServiceP' class='form-control' type='text'{{#valueUninterruptedServiceP}} value='{{valueUninterruptedServiceP}}'{{/valueUninterruptedServiceP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_voltImbalanceViolCost'>voltImbalanceViolCost: </label><div class='col-sm-8'><input id='{{id}}_voltImbalanceViolCost' class='form-control' type='text'{{#voltImbalanceViolCost}} value='{{voltImbalanceViolCost}}'{{/voltImbalanceViolCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_voltLimitViolCost'>voltLimitViolCost: </label><div class='col-sm-8'><input id='{{id}}_voltLimitViolCost' class='form-control' type='text'{{#voltLimitViolCost}} value='{{voltLimitViolCost}}'{{/voltLimitViolCost}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PowerQualityPricing" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_emergencyHighVoltLimit").value; if ("" !== temp) obj["emergencyHighVoltLimit"] = temp;
                temp = document.getElementById (id + "_emergencyLowVoltLimit").value; if ("" !== temp) obj["emergencyLowVoltLimit"] = temp;
                temp = document.getElementById (id + "_normalHighVoltLimit").value; if ("" !== temp) obj["normalHighVoltLimit"] = temp;
                temp = document.getElementById (id + "_normalLowVoltLimit").value; if ("" !== temp) obj["normalLowVoltLimit"] = temp;
                temp = document.getElementById (id + "_powerFactorMin").value; if ("" !== temp) obj["powerFactorMin"] = temp;
                temp = document.getElementById (id + "_valueUninterruptedServiceEnergy").value; if ("" !== temp) obj["valueUninterruptedServiceEnergy"] = temp;
                temp = document.getElementById (id + "_valueUninterruptedServiceP").value; if ("" !== temp) obj["valueUninterruptedServiceP"] = temp;
                temp = document.getElementById (id + "_voltImbalanceViolCost").value; if ("" !== temp) obj["voltImbalanceViolCost"] = temp;
                temp = document.getElementById (id + "_voltLimitViolCost").value; if ("" !== temp) obj["voltLimitViolCost"] = temp;

                return (obj);
            }
        }

        return (
            {
                ExternalCustomerAgreement: ExternalCustomerAgreement,
                SubscribePowerCurve: SubscribePowerCurve,
                ComplianceEvent: ComplianceEvent,
                CustomerBillingKind: CustomerBillingKind,
                PowerQualityPricing: PowerQualityPricing,
                StandardIndustryCode: StandardIndustryCode,
                WorkBillingInfo: WorkBillingInfo,
                CustomerBillingInfo: CustomerBillingInfo,
                ServiceGuarantee: ServiceGuarantee
            }
        );
    }
);