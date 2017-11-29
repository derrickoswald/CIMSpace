define
(
    ["model/base", "model/Common", "model/Core", "model/Work"],
    /**
     * This package contains the core information classes that support customer billing applications.
     *
     */
    function (base, Common, Core, Work)
    {

        /**
         * Conditions for notifying the customer about the changes in the status of their service (e.g., outage restore, estimated restoration time, tariff or service level change, etc.)
         *
         */
        class CustomerNotification extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CustomerNotification;
                if (null == bucket)
                   cim_data.CustomerNotification = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CustomerNotification[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CustomerNotification";
                base.parse_element (/<cim:CustomerNotification.trigger>([\s\S]*?)<\/cim:CustomerNotification.trigger>/g, obj, "trigger", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerNotification.earliestDateTimeToCall>([\s\S]*?)<\/cim:CustomerNotification.earliestDateTimeToCall>/g, obj, "earliestDateTimeToCall", base.to_datetime, sub, context);
                base.parse_element (/<cim:CustomerNotification.latestDateTimeToCall>([\s\S]*?)<\/cim:CustomerNotification.latestDateTimeToCall>/g, obj, "latestDateTimeToCall", base.to_datetime, sub, context);
                base.parse_element (/<cim:CustomerNotification.contactType>([\s\S]*?)<\/cim:CustomerNotification.contactType>/g, obj, "contactType", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerNotification.contactValue>([\s\S]*?)<\/cim:CustomerNotification.contactValue>/g, obj, "contactValue", base.to_string, sub, context);
                base.parse_attribute (/<cim:CustomerNotification.Customer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Customer", sub, context);
                base.parse_attribute (/<cim:CustomerNotification.Incident\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Incident", sub, context);

                var bucket = context.parsed.CustomerNotification;
                if (null == bucket)
                   context.parsed.CustomerNotification = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "CustomerNotification", "trigger", base.from_string, fields);
                base.export_element (obj, "CustomerNotification", "earliestDateTimeToCall", base.from_datetime, fields);
                base.export_element (obj, "CustomerNotification", "latestDateTimeToCall", base.from_datetime, fields);
                base.export_element (obj, "CustomerNotification", "contactType", base.from_string, fields);
                base.export_element (obj, "CustomerNotification", "contactValue", base.from_string, fields);
                base.export_attribute (obj, "CustomerNotification", "Customer", fields);
                base.export_attribute (obj, "CustomerNotification", "Incident", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#CustomerNotification_collapse" aria-expanded="true" aria-controls="CustomerNotification_collapse">CustomerNotification</a>
<div id="CustomerNotification_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#trigger}}<div><b>trigger</b>: {{trigger}}</div>{{/trigger}}
{{#earliestDateTimeToCall}}<div><b>earliestDateTimeToCall</b>: {{earliestDateTimeToCall}}</div>{{/earliestDateTimeToCall}}
{{#latestDateTimeToCall}}<div><b>latestDateTimeToCall</b>: {{latestDateTimeToCall}}</div>{{/latestDateTimeToCall}}
{{#contactType}}<div><b>contactType</b>: {{contactType}}</div>{{/contactType}}
{{#contactValue}}<div><b>contactValue</b>: {{contactValue}}</div>{{/contactValue}}
{{#Customer}}<div><b>Customer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Customer}}&quot;);})'>{{Customer}}</a></div>{{/Customer}}
{{#Incident}}<div><b>Incident</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Incident}}&quot;);})'>{{Incident}}</a></div>{{/Incident}}
</div>
`
                );
           }        }

        /**
         * Grouping of pricing components and prices used in the creation of customer charges and the eligibility criteria under which these terms may be offered to a customer.
         *
         * The reasons for grouping include state, customer classification, site characteristics, classification (i.e. fee price structure, deposit price structure, electric service price structure, etc.) and accounting requirements.
         *
         */
        class PricingStructure extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PricingStructure;
                if (null == bucket)
                   cim_data.PricingStructure = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PricingStructure[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "PricingStructure";
                base.parse_element (/<cim:PricingStructure.code>([\s\S]*?)<\/cim:PricingStructure.code>/g, obj, "code", base.to_string, sub, context);
                base.parse_element (/<cim:PricingStructure.dailyCeilingUsage>([\s\S]*?)<\/cim:PricingStructure.dailyCeilingUsage>/g, obj, "dailyCeilingUsage", base.to_string, sub, context);
                base.parse_element (/<cim:PricingStructure.dailyEstimatedUsage>([\s\S]*?)<\/cim:PricingStructure.dailyEstimatedUsage>/g, obj, "dailyEstimatedUsage", base.to_string, sub, context);
                base.parse_element (/<cim:PricingStructure.dailyFloorUsage>([\s\S]*?)<\/cim:PricingStructure.dailyFloorUsage>/g, obj, "dailyFloorUsage", base.to_string, sub, context);
                base.parse_element (/<cim:PricingStructure.revenueKind>([\s\S]*?)<\/cim:PricingStructure.revenueKind>/g, obj, "revenueKind", base.to_string, sub, context);
                base.parse_element (/<cim:PricingStructure.taxExemption>([\s\S]*?)<\/cim:PricingStructure.taxExemption>/g, obj, "taxExemption", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:PricingStructure.ServiceCategory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ServiceCategory", sub, context);

                var bucket = context.parsed.PricingStructure;
                if (null == bucket)
                   context.parsed.PricingStructure = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "PricingStructure", "code", base.from_string, fields);
                base.export_element (obj, "PricingStructure", "dailyCeilingUsage", base.from_string, fields);
                base.export_element (obj, "PricingStructure", "dailyEstimatedUsage", base.from_string, fields);
                base.export_element (obj, "PricingStructure", "dailyFloorUsage", base.from_string, fields);
                base.export_element (obj, "PricingStructure", "revenueKind", base.from_string, fields);
                base.export_element (obj, "PricingStructure", "taxExemption", base.from_boolean, fields);
                base.export_attribute (obj, "PricingStructure", "ServiceCategory", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#PricingStructure_collapse" aria-expanded="true" aria-controls="PricingStructure_collapse">PricingStructure</a>
<div id="PricingStructure_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.Document.prototype.template.call (this) +
`
{{#code}}<div><b>code</b>: {{code}}</div>{{/code}}
{{#dailyCeilingUsage}}<div><b>dailyCeilingUsage</b>: {{dailyCeilingUsage}}</div>{{/dailyCeilingUsage}}
{{#dailyEstimatedUsage}}<div><b>dailyEstimatedUsage</b>: {{dailyEstimatedUsage}}</div>{{/dailyEstimatedUsage}}
{{#dailyFloorUsage}}<div><b>dailyFloorUsage</b>: {{dailyFloorUsage}}</div>{{/dailyFloorUsage}}
{{#revenueKind}}<div><b>revenueKind</b>: {{revenueKind}}</div>{{/revenueKind}}
{{#taxExemption}}<div><b>taxExemption</b>: {{taxExemption}}</div>{{/taxExemption}}
{{#ServiceCategory}}<div><b>ServiceCategory</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ServiceCategory}}&quot;);})'>{{ServiceCategory}}</a></div>{{/ServiceCategory}}
</div>
`
                );
           }        }

        /**
         * Kind of customer.
         *
         */
        class CustomerKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CustomerKind;
                if (null == bucket)
                   cim_data.CustomerKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CustomerKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CustomerKind";
                base.parse_element (/<cim:CustomerKind.residential>([\s\S]*?)<\/cim:CustomerKind.residential>/g, obj, "residential", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerKind.residentialAndCommercial>([\s\S]*?)<\/cim:CustomerKind.residentialAndCommercial>/g, obj, "residentialAndCommercial", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerKind.residentialAndStreetlight>([\s\S]*?)<\/cim:CustomerKind.residentialAndStreetlight>/g, obj, "residentialAndStreetlight", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerKind.residentialStreetlightOthers>([\s\S]*?)<\/cim:CustomerKind.residentialStreetlightOthers>/g, obj, "residentialStreetlightOthers", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerKind.residentialFarmService>([\s\S]*?)<\/cim:CustomerKind.residentialFarmService>/g, obj, "residentialFarmService", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerKind.commercialIndustrial>([\s\S]*?)<\/cim:CustomerKind.commercialIndustrial>/g, obj, "commercialIndustrial", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerKind.pumpingLoad>([\s\S]*?)<\/cim:CustomerKind.pumpingLoad>/g, obj, "pumpingLoad", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerKind.windMachine>([\s\S]*?)<\/cim:CustomerKind.windMachine>/g, obj, "windMachine", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerKind.energyServiceSupplier>([\s\S]*?)<\/cim:CustomerKind.energyServiceSupplier>/g, obj, "energyServiceSupplier", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerKind.energyServiceScheduler>([\s\S]*?)<\/cim:CustomerKind.energyServiceScheduler>/g, obj, "energyServiceScheduler", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerKind.internalUse>([\s\S]*?)<\/cim:CustomerKind.internalUse>/g, obj, "internalUse", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerKind.other>([\s\S]*?)<\/cim:CustomerKind.other>/g, obj, "other", base.to_string, sub, context);

                var bucket = context.parsed.CustomerKind;
                if (null == bucket)
                   context.parsed.CustomerKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "CustomerKind", "residential", base.from_string, fields);
                base.export_element (obj, "CustomerKind", "residentialAndCommercial", base.from_string, fields);
                base.export_element (obj, "CustomerKind", "residentialAndStreetlight", base.from_string, fields);
                base.export_element (obj, "CustomerKind", "residentialStreetlightOthers", base.from_string, fields);
                base.export_element (obj, "CustomerKind", "residentialFarmService", base.from_string, fields);
                base.export_element (obj, "CustomerKind", "commercialIndustrial", base.from_string, fields);
                base.export_element (obj, "CustomerKind", "pumpingLoad", base.from_string, fields);
                base.export_element (obj, "CustomerKind", "windMachine", base.from_string, fields);
                base.export_element (obj, "CustomerKind", "energyServiceSupplier", base.from_string, fields);
                base.export_element (obj, "CustomerKind", "energyServiceScheduler", base.from_string, fields);
                base.export_element (obj, "CustomerKind", "internalUse", base.from_string, fields);
                base.export_element (obj, "CustomerKind", "other", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#CustomerKind_collapse" aria-expanded="true" aria-controls="CustomerKind_collapse">CustomerKind</a>
<div id="CustomerKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#residential}}<div><b>residential</b>: {{residential}}</div>{{/residential}}
{{#residentialAndCommercial}}<div><b>residentialAndCommercial</b>: {{residentialAndCommercial}}</div>{{/residentialAndCommercial}}
{{#residentialAndStreetlight}}<div><b>residentialAndStreetlight</b>: {{residentialAndStreetlight}}</div>{{/residentialAndStreetlight}}
{{#residentialStreetlightOthers}}<div><b>residentialStreetlightOthers</b>: {{residentialStreetlightOthers}}</div>{{/residentialStreetlightOthers}}
{{#residentialFarmService}}<div><b>residentialFarmService</b>: {{residentialFarmService}}</div>{{/residentialFarmService}}
{{#commercialIndustrial}}<div><b>commercialIndustrial</b>: {{commercialIndustrial}}</div>{{/commercialIndustrial}}
{{#pumpingLoad}}<div><b>pumpingLoad</b>: {{pumpingLoad}}</div>{{/pumpingLoad}}
{{#windMachine}}<div><b>windMachine</b>: {{windMachine}}</div>{{/windMachine}}
{{#energyServiceSupplier}}<div><b>energyServiceSupplier</b>: {{energyServiceSupplier}}</div>{{/energyServiceSupplier}}
{{#energyServiceScheduler}}<div><b>energyServiceScheduler</b>: {{energyServiceScheduler}}</div>{{/energyServiceScheduler}}
{{#internalUse}}<div><b>internalUse</b>: {{internalUse}}</div>{{/internalUse}}
{{#other}}<div><b>other</b>: {{other}}</div>{{/other}}
</div>
`
                );
           }        }

        /**
         * Document, approved by the responsible regulatory agency, listing the terms and conditions, including a schedule of prices, under which utility services will be provided.
         *
         * It has a unique number within the state or province. For rate schedules it is frequently allocated by the affiliated Public utilities commission (PUC).
         *
         */
        class Tariff extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Tariff;
                if (null == bucket)
                   cim_data.Tariff = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Tariff[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "Tariff";
                base.parse_element (/<cim:Tariff.endDate>([\s\S]*?)<\/cim:Tariff.endDate>/g, obj, "endDate", base.to_string, sub, context);
                base.parse_element (/<cim:Tariff.startDate>([\s\S]*?)<\/cim:Tariff.startDate>/g, obj, "startDate", base.to_string, sub, context);

                var bucket = context.parsed.Tariff;
                if (null == bucket)
                   context.parsed.Tariff = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "Tariff", "endDate", base.from_string, fields);
                base.export_element (obj, "Tariff", "startDate", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Tariff_collapse" aria-expanded="true" aria-controls="Tariff_collapse">Tariff</a>
<div id="Tariff_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.Document.prototype.template.call (this) +
`
{{#endDate}}<div><b>endDate</b>: {{endDate}}</div>{{/endDate}}
{{#startDate}}<div><b>startDate</b>: {{startDate}}</div>{{/startDate}}
</div>
`
                );
           }        }

        /**
         * Organisation receiving services from service supplier.
         *
         */
        class Customer extends Common.OrganisationRole
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Customer;
                if (null == bucket)
                   cim_data.Customer = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Customer[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.OrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "Customer";
                base.parse_element (/<cim:Customer.kind>([\s\S]*?)<\/cim:Customer.kind>/g, obj, "kind", base.to_string, sub, context);
                base.parse_element (/<cim:Customer.pucNumber>([\s\S]*?)<\/cim:Customer.pucNumber>/g, obj, "pucNumber", base.to_string, sub, context);
                base.parse_element (/<cim:Customer.specialNeed>([\s\S]*?)<\/cim:Customer.specialNeed>/g, obj, "specialNeed", base.to_string, sub, context);
                base.parse_element (/<cim:Customer.status>([\s\S]*?)<\/cim:Customer.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:Customer.vip>([\s\S]*?)<\/cim:Customer.vip>/g, obj, "vip", base.to_boolean, sub, context);
                base.parse_element (/<cim:Customer.priority>([\s\S]*?)<\/cim:Customer.priority>/g, obj, "priority", base.to_string, sub, context);
                base.parse_element (/<cim:Customer.locale>([\s\S]*?)<\/cim:Customer.locale>/g, obj, "locale", base.to_string, sub, context);

                var bucket = context.parsed.Customer;
                if (null == bucket)
                   context.parsed.Customer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.OrganisationRole.prototype.export.call (this, obj, false);

                base.export_element (obj, "Customer", "kind", base.from_string, fields);
                base.export_element (obj, "Customer", "pucNumber", base.from_string, fields);
                base.export_element (obj, "Customer", "specialNeed", base.from_string, fields);
                base.export_element (obj, "Customer", "status", base.from_string, fields);
                base.export_element (obj, "Customer", "vip", base.from_boolean, fields);
                base.export_element (obj, "Customer", "priority", base.from_string, fields);
                base.export_element (obj, "Customer", "locale", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Customer_collapse" aria-expanded="true" aria-controls="Customer_collapse">Customer</a>
<div id="Customer_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.OrganisationRole.prototype.template.call (this) +
`
{{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
{{#pucNumber}}<div><b>pucNumber</b>: {{pucNumber}}</div>{{/pucNumber}}
{{#specialNeed}}<div><b>specialNeed</b>: {{specialNeed}}</div>{{/specialNeed}}
{{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
{{#vip}}<div><b>vip</b>: {{vip}}</div>{{/vip}}
{{#priority}}<div><b>priority</b>: {{priority}}</div>{{/priority}}
{{#locale}}<div><b>locale</b>: {{locale}}</div>{{/locale}}
</div>
`
                );
           }        }

        /**
         * Kind of trouble reporting.
         *
         */
        class TroubleReportingKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TroubleReportingKind;
                if (null == bucket)
                   cim_data.TroubleReportingKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TroubleReportingKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TroubleReportingKind";
                base.parse_element (/<cim:TroubleReportingKind.call>([\s\S]*?)<\/cim:TroubleReportingKind.call>/g, obj, "call", base.to_string, sub, context);
                base.parse_element (/<cim:TroubleReportingKind.email>([\s\S]*?)<\/cim:TroubleReportingKind.email>/g, obj, "email", base.to_string, sub, context);
                base.parse_element (/<cim:TroubleReportingKind.letter>([\s\S]*?)<\/cim:TroubleReportingKind.letter>/g, obj, "letter", base.to_string, sub, context);
                base.parse_element (/<cim:TroubleReportingKind.other>([\s\S]*?)<\/cim:TroubleReportingKind.other>/g, obj, "other", base.to_string, sub, context);
                base.parse_element (/<cim:TroubleReportingKind.ivr>([\s\S]*?)<\/cim:TroubleReportingKind.ivr>/g, obj, "ivr", base.to_string, sub, context);

                var bucket = context.parsed.TroubleReportingKind;
                if (null == bucket)
                   context.parsed.TroubleReportingKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TroubleReportingKind", "call", base.from_string, fields);
                base.export_element (obj, "TroubleReportingKind", "email", base.from_string, fields);
                base.export_element (obj, "TroubleReportingKind", "letter", base.from_string, fields);
                base.export_element (obj, "TroubleReportingKind", "other", base.from_string, fields);
                base.export_element (obj, "TroubleReportingKind", "ivr", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TroubleReportingKind_collapse" aria-expanded="true" aria-controls="TroubleReportingKind_collapse">TroubleReportingKind</a>
<div id="TroubleReportingKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#call}}<div><b>call</b>: {{call}}</div>{{/call}}
{{#email}}<div><b>email</b>: {{email}}</div>{{/email}}
{{#letter}}<div><b>letter</b>: {{letter}}</div>{{/letter}}
{{#other}}<div><b>other</b>: {{other}}</div>{{/other}}
{{#ivr}}<div><b>ivr</b>: {{ivr}}</div>{{/ivr}}
</div>
`
                );
           }        }

        /**
         * Kind of service.
         *
         */
        class ServiceKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ServiceKind;
                if (null == bucket)
                   cim_data.ServiceKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ServiceKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ServiceKind";
                base.parse_element (/<cim:ServiceKind.electricity>([\s\S]*?)<\/cim:ServiceKind.electricity>/g, obj, "electricity", base.to_string, sub, context);
                base.parse_element (/<cim:ServiceKind.gas>([\s\S]*?)<\/cim:ServiceKind.gas>/g, obj, "gas", base.to_string, sub, context);
                base.parse_element (/<cim:ServiceKind.water>([\s\S]*?)<\/cim:ServiceKind.water>/g, obj, "water", base.to_string, sub, context);
                base.parse_element (/<cim:ServiceKind.time>([\s\S]*?)<\/cim:ServiceKind.time>/g, obj, "time", base.to_string, sub, context);
                base.parse_element (/<cim:ServiceKind.heat>([\s\S]*?)<\/cim:ServiceKind.heat>/g, obj, "heat", base.to_string, sub, context);
                base.parse_element (/<cim:ServiceKind.refuse>([\s\S]*?)<\/cim:ServiceKind.refuse>/g, obj, "refuse", base.to_string, sub, context);
                base.parse_element (/<cim:ServiceKind.sewerage>([\s\S]*?)<\/cim:ServiceKind.sewerage>/g, obj, "sewerage", base.to_string, sub, context);
                base.parse_element (/<cim:ServiceKind.rates>([\s\S]*?)<\/cim:ServiceKind.rates>/g, obj, "rates", base.to_string, sub, context);
                base.parse_element (/<cim:ServiceKind.tvLicence>([\s\S]*?)<\/cim:ServiceKind.tvLicence>/g, obj, "tvLicence", base.to_string, sub, context);
                base.parse_element (/<cim:ServiceKind.internet>([\s\S]*?)<\/cim:ServiceKind.internet>/g, obj, "internet", base.to_string, sub, context);
                base.parse_element (/<cim:ServiceKind.other>([\s\S]*?)<\/cim:ServiceKind.other>/g, obj, "other", base.to_string, sub, context);

                var bucket = context.parsed.ServiceKind;
                if (null == bucket)
                   context.parsed.ServiceKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ServiceKind", "electricity", base.from_string, fields);
                base.export_element (obj, "ServiceKind", "gas", base.from_string, fields);
                base.export_element (obj, "ServiceKind", "water", base.from_string, fields);
                base.export_element (obj, "ServiceKind", "time", base.from_string, fields);
                base.export_element (obj, "ServiceKind", "heat", base.from_string, fields);
                base.export_element (obj, "ServiceKind", "refuse", base.from_string, fields);
                base.export_element (obj, "ServiceKind", "sewerage", base.from_string, fields);
                base.export_element (obj, "ServiceKind", "rates", base.from_string, fields);
                base.export_element (obj, "ServiceKind", "tvLicence", base.from_string, fields);
                base.export_element (obj, "ServiceKind", "internet", base.from_string, fields);
                base.export_element (obj, "ServiceKind", "other", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ServiceKind_collapse" aria-expanded="true" aria-controls="ServiceKind_collapse">ServiceKind</a>
<div id="ServiceKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#electricity}}<div><b>electricity</b>: {{electricity}}</div>{{/electricity}}
{{#gas}}<div><b>gas</b>: {{gas}}</div>{{/gas}}
{{#water}}<div><b>water</b>: {{water}}</div>{{/water}}
{{#time}}<div><b>time</b>: {{time}}</div>{{/time}}
{{#heat}}<div><b>heat</b>: {{heat}}</div>{{/heat}}
{{#refuse}}<div><b>refuse</b>: {{refuse}}</div>{{/refuse}}
{{#sewerage}}<div><b>sewerage</b>: {{sewerage}}</div>{{/sewerage}}
{{#rates}}<div><b>rates</b>: {{rates}}</div>{{/rates}}
{{#tvLicence}}<div><b>tvLicence</b>: {{tvLicence}}</div>{{/tvLicence}}
{{#internet}}<div><b>internet</b>: {{internet}}</div>{{/internet}}
{{#other}}<div><b>other</b>: {{other}}</div>{{/other}}
</div>
`
                );
           }        }

        /**
         * Hazardous situation associated with an incident.
         *
         * Examples are line down, gas leak, fire, etc.
         *
         */
        class IncidentHazard extends Common.Hazard
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.IncidentHazard;
                if (null == bucket)
                   cim_data.IncidentHazard = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.IncidentHazard[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Hazard.prototype.parse.call (this, context, sub);
                obj.cls = "IncidentHazard";
                base.parse_attribute (/<cim:IncidentHazard.Incident\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Incident", sub, context);
                base.parse_attribute (/<cim:IncidentHazard.TroubleTicket\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TroubleTicket", sub, context);

                var bucket = context.parsed.IncidentHazard;
                if (null == bucket)
                   context.parsed.IncidentHazard = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Hazard.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "IncidentHazard", "Incident", fields);
                base.export_attribute (obj, "IncidentHazard", "TroubleTicket", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#IncidentHazard_collapse" aria-expanded="true" aria-controls="IncidentHazard_collapse">IncidentHazard</a>
<div id="IncidentHazard_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.Hazard.prototype.template.call (this) +
`
{{#Incident}}<div><b>Incident</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Incident}}&quot;);})'>{{Incident}}</a></div>{{/Incident}}
{{#TroubleTicket}}<div><b>TroubleTicket</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TroubleTicket}}&quot;);})'>{{TroubleTicket}}</a></div>{{/TroubleTicket}}
</div>
`
                );
           }        }

        /**
         * Kind of trigger to notify customer.
         *
         */
        class NotificationTriggerKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.NotificationTriggerKind;
                if (null == bucket)
                   cim_data.NotificationTriggerKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.NotificationTriggerKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "NotificationTriggerKind";
                base.parse_element (/<cim:NotificationTriggerKind.initialEtr>([\s\S]*?)<\/cim:NotificationTriggerKind.initialEtr>/g, obj, "initialEtr", base.to_string, sub, context);
                base.parse_element (/<cim:NotificationTriggerKind.etrChange>([\s\S]*?)<\/cim:NotificationTriggerKind.etrChange>/g, obj, "etrChange", base.to_string, sub, context);
                base.parse_element (/<cim:NotificationTriggerKind.powerRestored>([\s\S]*?)<\/cim:NotificationTriggerKind.powerRestored>/g, obj, "powerRestored", base.to_string, sub, context);
                base.parse_element (/<cim:NotificationTriggerKind.powerOut>([\s\S]*?)<\/cim:NotificationTriggerKind.powerOut>/g, obj, "powerOut", base.to_string, sub, context);
                base.parse_element (/<cim:NotificationTriggerKind.informDispatched>([\s\S]*?)<\/cim:NotificationTriggerKind.informDispatched>/g, obj, "informDispatched", base.to_string, sub, context);

                var bucket = context.parsed.NotificationTriggerKind;
                if (null == bucket)
                   context.parsed.NotificationTriggerKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "NotificationTriggerKind", "initialEtr", base.from_string, fields);
                base.export_element (obj, "NotificationTriggerKind", "etrChange", base.from_string, fields);
                base.export_element (obj, "NotificationTriggerKind", "powerRestored", base.from_string, fields);
                base.export_element (obj, "NotificationTriggerKind", "powerOut", base.from_string, fields);
                base.export_element (obj, "NotificationTriggerKind", "informDispatched", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#NotificationTriggerKind_collapse" aria-expanded="true" aria-controls="NotificationTriggerKind_collapse">NotificationTriggerKind</a>
<div id="NotificationTriggerKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#initialEtr}}<div><b>initialEtr</b>: {{initialEtr}}</div>{{/initialEtr}}
{{#etrChange}}<div><b>etrChange</b>: {{etrChange}}</div>{{/etrChange}}
{{#powerRestored}}<div><b>powerRestored</b>: {{powerRestored}}</div>{{/powerRestored}}
{{#powerOut}}<div><b>powerOut</b>: {{powerOut}}</div>{{/powerOut}}
{{#informDispatched}}<div><b>informDispatched</b>: {{informDispatched}}</div>{{/informDispatched}}
</div>
`
                );
           }        }

        /**
         * Agreement between the customer and the service supplier to pay for service at a specific service location.
         *
         * It records certain billing information about the type of service provided at the service location and is used during charge creation to determine the type of service.
         *
         */
        class CustomerAgreement extends Common.Agreement
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CustomerAgreement;
                if (null == bucket)
                   cim_data.CustomerAgreement = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CustomerAgreement[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Agreement.prototype.parse.call (this, context, sub);
                obj.cls = "CustomerAgreement";
                base.parse_element (/<cim:CustomerAgreement.loadMgmt>([\s\S]*?)<\/cim:CustomerAgreement.loadMgmt>/g, obj, "loadMgmt", base.to_string, sub, context);
                base.parse_attribute (/<cim:CustomerAgreement.ServiceCategory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ServiceCategory", sub, context);
                base.parse_attribute (/<cim:CustomerAgreement.ServiceSupplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ServiceSupplier", sub, context);
                base.parse_attribute (/<cim:CustomerAgreement.Customer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Customer", sub, context);
                base.parse_attribute (/<cim:CustomerAgreement.CustomerAccount\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAccount", sub, context);
                base.parse_attribute (/<cim:CustomerAgreement.StandardIndustryCode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StandardIndustryCode", sub, context);

                var bucket = context.parsed.CustomerAgreement;
                if (null == bucket)
                   context.parsed.CustomerAgreement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Agreement.prototype.export.call (this, obj, false);

                base.export_element (obj, "CustomerAgreement", "loadMgmt", base.from_string, fields);
                base.export_attribute (obj, "CustomerAgreement", "ServiceCategory", fields);
                base.export_attribute (obj, "CustomerAgreement", "ServiceSupplier", fields);
                base.export_attribute (obj, "CustomerAgreement", "Customer", fields);
                base.export_attribute (obj, "CustomerAgreement", "CustomerAccount", fields);
                base.export_attribute (obj, "CustomerAgreement", "StandardIndustryCode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#CustomerAgreement_collapse" aria-expanded="true" aria-controls="CustomerAgreement_collapse">CustomerAgreement</a>
<div id="CustomerAgreement_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.Agreement.prototype.template.call (this) +
`
{{#loadMgmt}}<div><b>loadMgmt</b>: {{loadMgmt}}</div>{{/loadMgmt}}
{{#ServiceCategory}}<div><b>ServiceCategory</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ServiceCategory}}&quot;);})'>{{ServiceCategory}}</a></div>{{/ServiceCategory}}
{{#ServiceSupplier}}<div><b>ServiceSupplier</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ServiceSupplier}}&quot;);})'>{{ServiceSupplier}}</a></div>{{/ServiceSupplier}}
{{#Customer}}<div><b>Customer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Customer}}&quot;);})'>{{Customer}}</a></div>{{/Customer}}
{{#CustomerAccount}}<div><b>CustomerAccount</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CustomerAccount}}&quot;);})'>{{CustomerAccount}}</a></div>{{/CustomerAccount}}
{{#StandardIndustryCode}}<div><b>StandardIndustryCode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{StandardIndustryCode}}&quot;);})'>{{StandardIndustryCode}}</a></div>{{/StandardIndustryCode}}
</div>
`
                );
           }        }

        /**
         * A real estate location, commonly referred to as premises.
         *
         */
        class ServiceLocation extends Work.WorkLocation
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ServiceLocation;
                if (null == bucket)
                   cim_data.ServiceLocation = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ServiceLocation[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Work.WorkLocation.prototype.parse.call (this, context, sub);
                obj.cls = "ServiceLocation";
                base.parse_element (/<cim:ServiceLocation.accessMethod>([\s\S]*?)<\/cim:ServiceLocation.accessMethod>/g, obj, "accessMethod", base.to_string, sub, context);
                base.parse_element (/<cim:ServiceLocation.needsInspection>([\s\S]*?)<\/cim:ServiceLocation.needsInspection>/g, obj, "needsInspection", base.to_boolean, sub, context);
                base.parse_element (/<cim:ServiceLocation.siteAccessProblem>([\s\S]*?)<\/cim:ServiceLocation.siteAccessProblem>/g, obj, "siteAccessProblem", base.to_string, sub, context);

                var bucket = context.parsed.ServiceLocation;
                if (null == bucket)
                   context.parsed.ServiceLocation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Work.WorkLocation.prototype.export.call (this, obj, false);

                base.export_element (obj, "ServiceLocation", "accessMethod", base.from_string, fields);
                base.export_element (obj, "ServiceLocation", "needsInspection", base.from_boolean, fields);
                base.export_element (obj, "ServiceLocation", "siteAccessProblem", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ServiceLocation_collapse" aria-expanded="true" aria-controls="ServiceLocation_collapse">ServiceLocation</a>
<div id="ServiceLocation_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Work.WorkLocation.prototype.template.call (this) +
`
{{#accessMethod}}<div><b>accessMethod</b>: {{accessMethod}}</div>{{/accessMethod}}
{{#needsInspection}}<div><b>needsInspection</b>: {{needsInspection}}</div>{{/needsInspection}}
{{#siteAccessProblem}}<div><b>siteAccessProblem</b>: {{siteAccessProblem}}</div>{{/siteAccessProblem}}
</div>
`
                );
           }        }

        /**
         * Category of service provided to the customer.
         *
         */
        class ServiceCategory extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ServiceCategory;
                if (null == bucket)
                   cim_data.ServiceCategory = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ServiceCategory[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ServiceCategory";
                base.parse_element (/<cim:ServiceCategory.kind>([\s\S]*?)<\/cim:ServiceCategory.kind>/g, obj, "kind", base.to_string, sub, context);

                var bucket = context.parsed.ServiceCategory;
                if (null == bucket)
                   context.parsed.ServiceCategory = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ServiceCategory", "kind", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ServiceCategory_collapse" aria-expanded="true" aria-controls="ServiceCategory_collapse">ServiceCategory</a>
<div id="ServiceCategory_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
</div>
`
                );
           }        }

        /**
         * Accounting classification of the type of revenue collected for the customer agreement, typically used to break down accounts for revenue accounting.
         *
         */
        class RevenueKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RevenueKind;
                if (null == bucket)
                   cim_data.RevenueKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RevenueKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "RevenueKind";
                base.parse_element (/<cim:RevenueKind.residential>([\s\S]*?)<\/cim:RevenueKind.residential>/g, obj, "residential", base.to_string, sub, context);
                base.parse_element (/<cim:RevenueKind.nonResidential>([\s\S]*?)<\/cim:RevenueKind.nonResidential>/g, obj, "nonResidential", base.to_string, sub, context);
                base.parse_element (/<cim:RevenueKind.commercial>([\s\S]*?)<\/cim:RevenueKind.commercial>/g, obj, "commercial", base.to_string, sub, context);
                base.parse_element (/<cim:RevenueKind.industrial>([\s\S]*?)<\/cim:RevenueKind.industrial>/g, obj, "industrial", base.to_string, sub, context);
                base.parse_element (/<cim:RevenueKind.irrigation>([\s\S]*?)<\/cim:RevenueKind.irrigation>/g, obj, "irrigation", base.to_string, sub, context);
                base.parse_element (/<cim:RevenueKind.streetLight>([\s\S]*?)<\/cim:RevenueKind.streetLight>/g, obj, "streetLight", base.to_string, sub, context);
                base.parse_element (/<cim:RevenueKind.other>([\s\S]*?)<\/cim:RevenueKind.other>/g, obj, "other", base.to_string, sub, context);

                var bucket = context.parsed.RevenueKind;
                if (null == bucket)
                   context.parsed.RevenueKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "RevenueKind", "residential", base.from_string, fields);
                base.export_element (obj, "RevenueKind", "nonResidential", base.from_string, fields);
                base.export_element (obj, "RevenueKind", "commercial", base.from_string, fields);
                base.export_element (obj, "RevenueKind", "industrial", base.from_string, fields);
                base.export_element (obj, "RevenueKind", "irrigation", base.from_string, fields);
                base.export_element (obj, "RevenueKind", "streetLight", base.from_string, fields);
                base.export_element (obj, "RevenueKind", "other", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#RevenueKind_collapse" aria-expanded="true" aria-controls="RevenueKind_collapse">RevenueKind</a>
<div id="RevenueKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#residential}}<div><b>residential</b>: {{residential}}</div>{{/residential}}
{{#nonResidential}}<div><b>nonResidential</b>: {{nonResidential}}</div>{{/nonResidential}}
{{#commercial}}<div><b>commercial</b>: {{commercial}}</div>{{/commercial}}
{{#industrial}}<div><b>industrial</b>: {{industrial}}</div>{{/industrial}}
{{#irrigation}}<div><b>irrigation</b>: {{irrigation}}</div>{{/irrigation}}
{{#streetLight}}<div><b>streetLight</b>: {{streetLight}}</div>{{/streetLight}}
{{#other}}<div><b>other</b>: {{other}}</div>{{/other}}
</div>
`
                );
           }        }

        class TroubleTicket extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TroubleTicket;
                if (null == bucket)
                   cim_data.TroubleTicket = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TroubleTicket[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "TroubleTicket";
                base.parse_element (/<cim:TroubleTicket.dateTimeOfReport>([\s\S]*?)<\/cim:TroubleTicket.dateTimeOfReport>/g, obj, "dateTimeOfReport", base.to_datetime, sub, context);
                base.parse_element (/<cim:TroubleTicket.troubleCode>([\s\S]*?)<\/cim:TroubleTicket.troubleCode>/g, obj, "troubleCode", base.to_string, sub, context);
                base.parse_element (/<cim:TroubleTicket.reportingKind>([\s\S]*?)<\/cim:TroubleTicket.reportingKind>/g, obj, "reportingKind", base.to_string, sub, context);
                base.parse_element (/<cim:TroubleTicket.resolvedDateTime>([\s\S]*?)<\/cim:TroubleTicket.resolvedDateTime>/g, obj, "resolvedDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:TroubleTicket.firstResponder>([\s\S]*?)<\/cim:TroubleTicket.firstResponder>/g, obj, "firstResponder", base.to_string, sub, context);
                base.parse_attribute (/<cim:TroubleTicket.Notification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Notification", sub, context);
                base.parse_attribute (/<cim:TroubleTicket.Incident\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Incident", sub, context);
                base.parse_attribute (/<cim:TroubleTicket.Customer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Customer", sub, context);

                var bucket = context.parsed.TroubleTicket;
                if (null == bucket)
                   context.parsed.TroubleTicket = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "TroubleTicket", "dateTimeOfReport", base.from_datetime, fields);
                base.export_element (obj, "TroubleTicket", "troubleCode", base.from_string, fields);
                base.export_element (obj, "TroubleTicket", "reportingKind", base.from_string, fields);
                base.export_element (obj, "TroubleTicket", "resolvedDateTime", base.from_datetime, fields);
                base.export_element (obj, "TroubleTicket", "firstResponder", base.from_string, fields);
                base.export_attribute (obj, "TroubleTicket", "Notification", fields);
                base.export_attribute (obj, "TroubleTicket", "Incident", fields);
                base.export_attribute (obj, "TroubleTicket", "Customer", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TroubleTicket_collapse" aria-expanded="true" aria-controls="TroubleTicket_collapse">TroubleTicket</a>
<div id="TroubleTicket_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.Document.prototype.template.call (this) +
`
{{#dateTimeOfReport}}<div><b>dateTimeOfReport</b>: {{dateTimeOfReport}}</div>{{/dateTimeOfReport}}
{{#troubleCode}}<div><b>troubleCode</b>: {{troubleCode}}</div>{{/troubleCode}}
{{#reportingKind}}<div><b>reportingKind</b>: {{reportingKind}}</div>{{/reportingKind}}
{{#resolvedDateTime}}<div><b>resolvedDateTime</b>: {{resolvedDateTime}}</div>{{/resolvedDateTime}}
{{#firstResponder}}<div><b>firstResponder</b>: {{firstResponder}}</div>{{/firstResponder}}
{{#Notification}}<div><b>Notification</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Notification}}&quot;);})'>{{Notification}}</a></div>{{/Notification}}
{{#Incident}}<div><b>Incident</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Incident}}&quot;);})'>{{Incident}}</a></div>{{/Incident}}
{{#Customer}}<div><b>Customer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Customer}}&quot;);})'>{{Customer}}</a></div>{{/Customer}}
</div>
`
                );
           }        }

        /**
         * Assignment of a group of products and services purchased by the customer through a customer agreement, used as a mechanism for customer billing and payment.
         *
         * It contains common information from the various types of customer agreements to create billings (invoices) for a customer and receive payment.
         *
         */
        class CustomerAccount extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CustomerAccount;
                if (null == bucket)
                   cim_data.CustomerAccount = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CustomerAccount[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "CustomerAccount";
                base.parse_element (/<cim:CustomerAccount.billingCycle>([\s\S]*?)<\/cim:CustomerAccount.billingCycle>/g, obj, "billingCycle", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerAccount.budgetBill>([\s\S]*?)<\/cim:CustomerAccount.budgetBill>/g, obj, "budgetBill", base.to_string, sub, context);
                base.parse_attribute (/<cim:CustomerAccount.Customer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Customer", sub, context);

                var bucket = context.parsed.CustomerAccount;
                if (null == bucket)
                   context.parsed.CustomerAccount = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "CustomerAccount", "billingCycle", base.from_string, fields);
                base.export_element (obj, "CustomerAccount", "budgetBill", base.from_string, fields);
                base.export_attribute (obj, "CustomerAccount", "Customer", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#CustomerAccount_collapse" aria-expanded="true" aria-controls="CustomerAccount_collapse">CustomerAccount</a>
<div id="CustomerAccount_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.Document.prototype.template.call (this) +
`
{{#billingCycle}}<div><b>billingCycle</b>: {{billingCycle}}</div>{{/billingCycle}}
{{#budgetBill}}<div><b>budgetBill</b>: {{budgetBill}}</div>{{/budgetBill}}
{{#Customer}}<div><b>Customer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Customer}}&quot;);})'>{{Customer}}</a></div>{{/Customer}}
</div>
`
                );
           }        }

        return (
            {
                RevenueKind: RevenueKind,
                CustomerAccount: CustomerAccount,
                CustomerKind: CustomerKind,
                PricingStructure: PricingStructure,
                TroubleTicket: TroubleTicket,
                CustomerNotification: CustomerNotification,
                Customer: Customer,
                Tariff: Tariff,
                TroubleReportingKind: TroubleReportingKind,
                ServiceKind: ServiceKind,
                IncidentHazard: IncidentHazard,
                ServiceCategory: ServiceCategory,
                ServiceLocation: ServiceLocation,
                NotificationTriggerKind: NotificationTriggerKind,
                CustomerAgreement: CustomerAgreement
            }
        );
    }
);