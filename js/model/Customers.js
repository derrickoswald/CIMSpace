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
         * Kind of customer.
         *
         */
        var CustomerKind =
        {
            residential: "residential",
            residentialAndCommercial: "residentialAndCommercial",
            residentialAndStreetlight: "residentialAndStreetlight",
            residentialStreetlightOthers: "residentialStreetlightOthers",
            residentialFarmService: "residentialFarmService",
            commercialIndustrial: "commercialIndustrial",
            pumpingLoad: "pumpingLoad",
            windMachine: "windMachine",
            energyServiceSupplier: "energyServiceSupplier",
            energyServiceScheduler: "energyServiceScheduler",
            internalUse: "internalUse",
            other: "other"
        };
        Object.freeze (CustomerKind);

        /**
         * Kind of trouble reporting.
         *
         */
        var TroubleReportingKind =
        {
            call: "call",
            email: "email",
            letter: "letter",
            other: "other",
            ivr: "ivr"
        };
        Object.freeze (TroubleReportingKind);

        /**
         * Kind of service.
         *
         */
        var ServiceKind =
        {
            electricity: "electricity",
            gas: "gas",
            water: "water",
            time: "time",
            heat: "heat",
            refuse: "refuse",
            sewerage: "sewerage",
            rates: "rates",
            tvLicence: "tvLicence",
            internet: "internet",
            other: "other"
        };
        Object.freeze (ServiceKind);

        /**
         * Kind of trigger to notify customer.
         *
         */
        var NotificationTriggerKind =
        {
            initialEtr: "initialEtr",
            etrChange: "etrChange",
            powerRestored: "powerRestored",
            powerOut: "powerOut",
            informDispatched: "informDispatched"
        };
        Object.freeze (NotificationTriggerKind);

        /**
         * Accounting classification of the type of revenue collected for the customer agreement, typically used to break down accounts for revenue accounting.
         *
         */
        var RevenueKind =
        {
            residential: "residential",
            nonResidential: "nonResidential",
            commercial: "commercial",
            industrial: "industrial",
            irrigation: "irrigation",
            streetLight: "streetLight",
            other: "other"
        };
        Object.freeze (RevenueKind);

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
                base.parse_attribute (/<cim:CustomerNotification.trigger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "trigger", sub, context);
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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CustomerNotification_collapse" aria-expanded="true" aria-controls="CustomerNotification_collapse" style="margin-left: 10px;">CustomerNotification</a></legend>
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
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.NotificationTriggerKind = []; if (!obj.trigger) obj.NotificationTriggerKind.push ({ id: '', selected: true}); for (var property in NotificationTriggerKind) obj.NotificationTriggerKind.push ({ id: property, selected: obj.trigger && obj.trigger.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.NotificationTriggerKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CustomerNotification_collapse" aria-expanded="true" aria-controls="CustomerNotification_collapse" style="margin-left: 10px;">CustomerNotification</a></legend>
                    <div id="CustomerNotification_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='trigger'>trigger: </label><div class='col-sm-8'><select id='trigger' class='form-control'>{{#NotificationTriggerKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/NotificationTriggerKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='earliestDateTimeToCall'>earliestDateTimeToCall: </label><div class='col-sm-8'><input id='earliestDateTimeToCall' class='form-control' type='text'{{#earliestDateTimeToCall}} value='{{earliestDateTimeToCall}}'{{/earliestDateTimeToCall}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='latestDateTimeToCall'>latestDateTimeToCall: </label><div class='col-sm-8'><input id='latestDateTimeToCall' class='form-control' type='text'{{#latestDateTimeToCall}} value='{{latestDateTimeToCall}}'{{/latestDateTimeToCall}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='contactType'>contactType: </label><div class='col-sm-8'><input id='contactType' class='form-control' type='text'{{#contactType}} value='{{contactType}}'{{/contactType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='contactValue'>contactValue: </label><div class='col-sm-8'><input id='contactValue' class='form-control' type='text'{{#contactValue}} value='{{contactValue}}'{{/contactValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Customer'>Customer: </label><div class='col-sm-8'><input id='Customer' class='form-control' type='text'{{#Customer}} value='{{Customer}}'{{/Customer}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Incident'>Incident: </label><div class='col-sm-8'><input id='Incident' class='form-control' type='text'{{#Incident}} value='{{Incident}}'{{/Incident}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                base.parse_attribute (/<cim:PricingStructure.revenueKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "revenueKind", sub, context);
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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PricingStructure_collapse" aria-expanded="true" aria-controls="PricingStructure_collapse" style="margin-left: 10px;">PricingStructure</a></legend>
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
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.RevenueKind = []; if (!obj.revenueKind) obj.RevenueKind.push ({ id: '', selected: true}); for (var property in RevenueKind) obj.RevenueKind.push ({ id: property, selected: obj.revenueKind && obj.revenueKind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.RevenueKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PricingStructure_collapse" aria-expanded="true" aria-controls="PricingStructure_collapse" style="margin-left: 10px;">PricingStructure</a></legend>
                    <div id="PricingStructure_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='code'>code: </label><div class='col-sm-8'><input id='code' class='form-control' type='text'{{#code}} value='{{code}}'{{/code}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dailyCeilingUsage'>dailyCeilingUsage: </label><div class='col-sm-8'><input id='dailyCeilingUsage' class='form-control' type='text'{{#dailyCeilingUsage}} value='{{dailyCeilingUsage}}'{{/dailyCeilingUsage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dailyEstimatedUsage'>dailyEstimatedUsage: </label><div class='col-sm-8'><input id='dailyEstimatedUsage' class='form-control' type='text'{{#dailyEstimatedUsage}} value='{{dailyEstimatedUsage}}'{{/dailyEstimatedUsage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dailyFloorUsage'>dailyFloorUsage: </label><div class='col-sm-8'><input id='dailyFloorUsage' class='form-control' type='text'{{#dailyFloorUsage}} value='{{dailyFloorUsage}}'{{/dailyFloorUsage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='revenueKind'>revenueKind: </label><div class='col-sm-8'><select id='revenueKind' class='form-control'>{{#RevenueKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/RevenueKind}}</select></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='taxExemption'>taxExemption: </label><div class='col-sm-8'><input id='taxExemption' class='form-check-input' type='checkbox'{{#taxExemption}} checked{{/taxExemption}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ServiceCategory'>ServiceCategory: </label><div class='col-sm-8'><input id='ServiceCategory' class='form-control' type='text'{{#ServiceCategory}} value='{{ServiceCategory}}'{{/ServiceCategory}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Tariff_collapse" aria-expanded="true" aria-controls="Tariff_collapse" style="margin-left: 10px;">Tariff</a></legend>
                    <div id="Tariff_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#endDate}}<div><b>endDate</b>: {{endDate}}</div>{{/endDate}}
                    {{#startDate}}<div><b>startDate</b>: {{startDate}}</div>{{/startDate}}
                    </div>
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Tariff_collapse" aria-expanded="true" aria-controls="Tariff_collapse" style="margin-left: 10px;">Tariff</a></legend>
                    <div id="Tariff_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='endDate'>endDate: </label><div class='col-sm-8'><input id='endDate' class='form-control' type='text'{{#endDate}} value='{{endDate}}'{{/endDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startDate'>startDate: </label><div class='col-sm-8'><input id='startDate' class='form-control' type='text'{{#startDate}} value='{{startDate}}'{{/startDate}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                base.parse_attribute (/<cim:Customer.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Customer_collapse" aria-expanded="true" aria-controls="Customer_collapse" style="margin-left: 10px;">Customer</a></legend>
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
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.CustomerKind = []; if (!obj.kind) obj.CustomerKind.push ({ id: '', selected: true}); for (var property in CustomerKind) obj.CustomerKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.CustomerKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Customer_collapse" aria-expanded="true" aria-controls="Customer_collapse" style="margin-left: 10px;">Customer</a></legend>
                    <div id="Customer_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#CustomerKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/CustomerKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pucNumber'>pucNumber: </label><div class='col-sm-8'><input id='pucNumber' class='form-control' type='text'{{#pucNumber}} value='{{pucNumber}}'{{/pucNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='specialNeed'>specialNeed: </label><div class='col-sm-8'><input id='specialNeed' class='form-control' type='text'{{#specialNeed}} value='{{specialNeed}}'{{/specialNeed}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='vip'>vip: </label><div class='col-sm-8'><input id='vip' class='form-check-input' type='checkbox'{{#vip}} checked{{/vip}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='priority'>priority: </label><div class='col-sm-8'><input id='priority' class='form-control' type='text'{{#priority}} value='{{priority}}'{{/priority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='locale'>locale: </label><div class='col-sm-8'><input id='locale' class='form-control' type='text'{{#locale}} value='{{locale}}'{{/locale}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#IncidentHazard_collapse" aria-expanded="true" aria-controls="IncidentHazard_collapse" style="margin-left: 10px;">IncidentHazard</a></legend>
                    <div id="IncidentHazard_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Hazard.prototype.template.call (this) +
                    `
                    {{#Incident}}<div><b>Incident</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Incident}}&quot;);})'>{{Incident}}</a></div>{{/Incident}}
                    {{#TroubleTicket}}<div><b>TroubleTicket</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TroubleTicket}}&quot;);})'>{{TroubleTicket}}</a></div>{{/TroubleTicket}}
                    </div>
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#IncidentHazard_collapse" aria-expanded="true" aria-controls="IncidentHazard_collapse" style="margin-left: 10px;">IncidentHazard</a></legend>
                    <div id="IncidentHazard_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Hazard.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Incident'>Incident: </label><div class='col-sm-8'><input id='Incident' class='form-control' type='text'{{#Incident}} value='{{Incident}}'{{/Incident}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TroubleTicket'>TroubleTicket: </label><div class='col-sm-8'><input id='TroubleTicket' class='form-control' type='text'{{#TroubleTicket}} value='{{TroubleTicket}}'{{/TroubleTicket}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CustomerAgreement_collapse" aria-expanded="true" aria-controls="CustomerAgreement_collapse" style="margin-left: 10px;">CustomerAgreement</a></legend>
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
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CustomerAgreement_collapse" aria-expanded="true" aria-controls="CustomerAgreement_collapse" style="margin-left: 10px;">CustomerAgreement</a></legend>
                    <div id="CustomerAgreement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='loadMgmt'>loadMgmt: </label><div class='col-sm-8'><input id='loadMgmt' class='form-control' type='text'{{#loadMgmt}} value='{{loadMgmt}}'{{/loadMgmt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ServiceCategory'>ServiceCategory: </label><div class='col-sm-8'><input id='ServiceCategory' class='form-control' type='text'{{#ServiceCategory}} value='{{ServiceCategory}}'{{/ServiceCategory}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ServiceSupplier'>ServiceSupplier: </label><div class='col-sm-8'><input id='ServiceSupplier' class='form-control' type='text'{{#ServiceSupplier}} value='{{ServiceSupplier}}'{{/ServiceSupplier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Customer'>Customer: </label><div class='col-sm-8'><input id='Customer' class='form-control' type='text'{{#Customer}} value='{{Customer}}'{{/Customer}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CustomerAccount'>CustomerAccount: </label><div class='col-sm-8'><input id='CustomerAccount' class='form-control' type='text'{{#CustomerAccount}} value='{{CustomerAccount}}'{{/CustomerAccount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='StandardIndustryCode'>StandardIndustryCode: </label><div class='col-sm-8'><input id='StandardIndustryCode' class='form-control' type='text'{{#StandardIndustryCode}} value='{{StandardIndustryCode}}'{{/StandardIndustryCode}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ServiceLocation_collapse" aria-expanded="true" aria-controls="ServiceLocation_collapse" style="margin-left: 10px;">ServiceLocation</a></legend>
                    <div id="ServiceLocation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Work.WorkLocation.prototype.template.call (this) +
                    `
                    {{#accessMethod}}<div><b>accessMethod</b>: {{accessMethod}}</div>{{/accessMethod}}
                    {{#needsInspection}}<div><b>needsInspection</b>: {{needsInspection}}</div>{{/needsInspection}}
                    {{#siteAccessProblem}}<div><b>siteAccessProblem</b>: {{siteAccessProblem}}</div>{{/siteAccessProblem}}
                    </div>
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ServiceLocation_collapse" aria-expanded="true" aria-controls="ServiceLocation_collapse" style="margin-left: 10px;">ServiceLocation</a></legend>
                    <div id="ServiceLocation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Work.WorkLocation.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='accessMethod'>accessMethod: </label><div class='col-sm-8'><input id='accessMethod' class='form-control' type='text'{{#accessMethod}} value='{{accessMethod}}'{{/accessMethod}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='needsInspection'>needsInspection: </label><div class='col-sm-8'><input id='needsInspection' class='form-check-input' type='checkbox'{{#needsInspection}} checked{{/needsInspection}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='siteAccessProblem'>siteAccessProblem: </label><div class='col-sm-8'><input id='siteAccessProblem' class='form-control' type='text'{{#siteAccessProblem}} value='{{siteAccessProblem}}'{{/siteAccessProblem}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                base.parse_attribute (/<cim:ServiceCategory.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ServiceCategory_collapse" aria-expanded="true" aria-controls="ServiceCategory_collapse" style="margin-left: 10px;">ServiceCategory</a></legend>
                    <div id="ServiceCategory_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ServiceKind = []; if (!obj.kind) obj.ServiceKind.push ({ id: '', selected: true}); for (var property in ServiceKind) obj.ServiceKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ServiceKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ServiceCategory_collapse" aria-expanded="true" aria-controls="ServiceCategory_collapse" style="margin-left: 10px;">ServiceCategory</a></legend>
                    <div id="ServiceCategory_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#ServiceKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ServiceKind}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                base.parse_attribute (/<cim:TroubleTicket.reportingKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "reportingKind", sub, context);
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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TroubleTicket_collapse" aria-expanded="true" aria-controls="TroubleTicket_collapse" style="margin-left: 10px;">TroubleTicket</a></legend>
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
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.TroubleReportingKind = []; if (!obj.reportingKind) obj.TroubleReportingKind.push ({ id: '', selected: true}); for (var property in TroubleReportingKind) obj.TroubleReportingKind.push ({ id: property, selected: obj.reportingKind && obj.reportingKind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TroubleReportingKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TroubleTicket_collapse" aria-expanded="true" aria-controls="TroubleTicket_collapse" style="margin-left: 10px;">TroubleTicket</a></legend>
                    <div id="TroubleTicket_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dateTimeOfReport'>dateTimeOfReport: </label><div class='col-sm-8'><input id='dateTimeOfReport' class='form-control' type='text'{{#dateTimeOfReport}} value='{{dateTimeOfReport}}'{{/dateTimeOfReport}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='troubleCode'>troubleCode: </label><div class='col-sm-8'><input id='troubleCode' class='form-control' type='text'{{#troubleCode}} value='{{troubleCode}}'{{/troubleCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='reportingKind'>reportingKind: </label><div class='col-sm-8'><select id='reportingKind' class='form-control'>{{#TroubleReportingKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/TroubleReportingKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='resolvedDateTime'>resolvedDateTime: </label><div class='col-sm-8'><input id='resolvedDateTime' class='form-control' type='text'{{#resolvedDateTime}} value='{{resolvedDateTime}}'{{/resolvedDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='firstResponder'>firstResponder: </label><div class='col-sm-8'><input id='firstResponder' class='form-control' type='text'{{#firstResponder}} value='{{firstResponder}}'{{/firstResponder}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Notification'>Notification: </label><div class='col-sm-8'><input id='Notification' class='form-control' type='text'{{#Notification}} value='{{Notification}}'{{/Notification}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Incident'>Incident: </label><div class='col-sm-8'><input id='Incident' class='form-control' type='text'{{#Incident}} value='{{Incident}}'{{/Incident}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Customer'>Customer: </label><div class='col-sm-8'><input id='Customer' class='form-control' type='text'{{#Customer}} value='{{Customer}}'{{/Customer}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CustomerAccount_collapse" aria-expanded="true" aria-controls="CustomerAccount_collapse" style="margin-left: 10px;">CustomerAccount</a></legend>
                    <div id="CustomerAccount_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#billingCycle}}<div><b>billingCycle</b>: {{billingCycle}}</div>{{/billingCycle}}
                    {{#budgetBill}}<div><b>budgetBill</b>: {{budgetBill}}</div>{{/budgetBill}}
                    {{#Customer}}<div><b>Customer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Customer}}&quot;);})'>{{Customer}}</a></div>{{/Customer}}
                    </div>
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CustomerAccount_collapse" aria-expanded="true" aria-controls="CustomerAccount_collapse" style="margin-left: 10px;">CustomerAccount</a></legend>
                    <div id="CustomerAccount_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='billingCycle'>billingCycle: </label><div class='col-sm-8'><input id='billingCycle' class='form-control' type='text'{{#billingCycle}} value='{{billingCycle}}'{{/billingCycle}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='budgetBill'>budgetBill: </label><div class='col-sm-8'><input id='budgetBill' class='form-control' type='text'{{#budgetBill}} value='{{budgetBill}}'{{/budgetBill}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Customer'>Customer: </label><div class='col-sm-8'><input id='Customer' class='form-control' type='text'{{#Customer}} value='{{Customer}}'{{/Customer}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        return (
            {
                Customer: Customer,
                Tariff: Tariff,
                IncidentHazard: IncidentHazard,
                ServiceCategory: ServiceCategory,
                CustomerAccount: CustomerAccount,
                ServiceLocation: ServiceLocation,
                PricingStructure: PricingStructure,
                TroubleTicket: TroubleTicket,
                CustomerAgreement: CustomerAgreement,
                CustomerNotification: CustomerNotification
            }
        );
    }
);