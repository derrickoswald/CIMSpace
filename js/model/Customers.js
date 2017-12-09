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
                base.parse_attributes (/<cim:CustomerNotification.TroubleTickets\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TroubleTickets", sub, context);
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

                base.export_element (obj, "CustomerNotification", "trigger", "trigger",  base.from_string, fields);
                base.export_element (obj, "CustomerNotification", "earliestDateTimeToCall", "earliestDateTimeToCall",  base.from_datetime, fields);
                base.export_element (obj, "CustomerNotification", "latestDateTimeToCall", "latestDateTimeToCall",  base.from_datetime, fields);
                base.export_element (obj, "CustomerNotification", "contactType", "contactType",  base.from_string, fields);
                base.export_element (obj, "CustomerNotification", "contactValue", "contactValue",  base.from_string, fields);
                base.export_attributes (obj, "CustomerNotification", "TroubleTickets", "TroubleTickets", fields);
                base.export_attribute (obj, "CustomerNotification", "Customer", "Customer", fields);
                base.export_attribute (obj, "CustomerNotification", "Incident", "Incident", fields);
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
                    {{#TroubleTickets}}<div><b>TroubleTickets</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/TroubleTickets}}
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
                if (obj.TroubleTickets) obj.TroubleTickets_string = obj.TroubleTickets.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.NotificationTriggerKind;
                delete obj.TroubleTickets_string;
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

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "CustomerNotification" };
                super.submit (obj);
                temp = document.getElementById ("trigger").value; if ("" != temp) { temp = NotificationTriggerKind[temp]; if ("undefined" != typeof (temp)) obj.trigger = "#http://iec.ch/TC57/2013/CIM-schema-cim16#NotificationTriggerKind." + temp; }
                temp = document.getElementById ("earliestDateTimeToCall").value; if ("" != temp) obj.earliestDateTimeToCall = temp;
                temp = document.getElementById ("latestDateTimeToCall").value; if ("" != temp) obj.latestDateTimeToCall = temp;
                temp = document.getElementById ("contactType").value; if ("" != temp) obj.contactType = temp;
                temp = document.getElementById ("contactValue").value; if ("" != temp) obj.contactValue = temp;
                temp = document.getElementById ("Customer").value; if ("" != temp) obj.Customer = temp;
                temp = document.getElementById ("Incident").value; if ("" != temp) obj.Incident = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["TroubleTickets", "TroubleTicket", "0..*", "0..1"],
                        ["Customer", "Customer", "0..1", "0..*"],
                        ["Incident", "Incident", "0..1", "0..*"]
                    ]
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
                base.parse_attributes (/<cim:PricingStructure.Tariffs\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Tariffs", sub, context);
                base.parse_attributes (/<cim:PricingStructure.Transactions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Transactions", sub, context);
                base.parse_attribute (/<cim:PricingStructure.ServiceCategory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ServiceCategory", sub, context);
                base.parse_attributes (/<cim:PricingStructure.UsagePoints\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UsagePoints", sub, context);
                base.parse_attributes (/<cim:PricingStructure.CustomerAgreements\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAgreements", sub, context);
                var bucket = context.parsed.PricingStructure;
                if (null == bucket)
                   context.parsed.PricingStructure = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "PricingStructure", "code", "code",  base.from_string, fields);
                base.export_element (obj, "PricingStructure", "dailyCeilingUsage", "dailyCeilingUsage",  base.from_string, fields);
                base.export_element (obj, "PricingStructure", "dailyEstimatedUsage", "dailyEstimatedUsage",  base.from_string, fields);
                base.export_element (obj, "PricingStructure", "dailyFloorUsage", "dailyFloorUsage",  base.from_string, fields);
                base.export_element (obj, "PricingStructure", "revenueKind", "revenueKind",  base.from_string, fields);
                base.export_element (obj, "PricingStructure", "taxExemption", "taxExemption",  base.from_boolean, fields);
                base.export_attributes (obj, "PricingStructure", "Tariffs", "Tariffs", fields);
                base.export_attributes (obj, "PricingStructure", "Transactions", "Transactions", fields);
                base.export_attribute (obj, "PricingStructure", "ServiceCategory", "ServiceCategory", fields);
                base.export_attributes (obj, "PricingStructure", "UsagePoints", "UsagePoints", fields);
                base.export_attributes (obj, "PricingStructure", "CustomerAgreements", "CustomerAgreements", fields);
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
                    {{#Tariffs}}<div><b>Tariffs</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Tariffs}}
                    {{#Transactions}}<div><b>Transactions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Transactions}}
                    {{#ServiceCategory}}<div><b>ServiceCategory</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ServiceCategory}}&quot;);})'>{{ServiceCategory}}</a></div>{{/ServiceCategory}}
                    {{#UsagePoints}}<div><b>UsagePoints</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/UsagePoints}}
                    {{#CustomerAgreements}}<div><b>CustomerAgreements</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CustomerAgreements}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.RevenueKind = []; if (!obj.revenueKind) obj.RevenueKind.push ({ id: '', selected: true}); for (var property in RevenueKind) obj.RevenueKind.push ({ id: property, selected: obj.revenueKind && obj.revenueKind.endsWith ('.' + property)});
                if (obj.Tariffs) obj.Tariffs_string = obj.Tariffs.join ();
                if (obj.Transactions) obj.Transactions_string = obj.Transactions.join ();
                if (obj.UsagePoints) obj.UsagePoints_string = obj.UsagePoints.join ();
                if (obj.CustomerAgreements) obj.CustomerAgreements_string = obj.CustomerAgreements.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.RevenueKind;
                delete obj.Tariffs_string;
                delete obj.Transactions_string;
                delete obj.UsagePoints_string;
                delete obj.CustomerAgreements_string;
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
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Tariffs'>Tariffs: </label><div class='col-sm-8'><input id='Tariffs' class='form-control' type='text'{{#Tariffs}} value='{{Tariffs}}_string'{{/Tariffs}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ServiceCategory'>ServiceCategory: </label><div class='col-sm-8'><input id='ServiceCategory' class='form-control' type='text'{{#ServiceCategory}} value='{{ServiceCategory}}'{{/ServiceCategory}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='UsagePoints'>UsagePoints: </label><div class='col-sm-8'><input id='UsagePoints' class='form-control' type='text'{{#UsagePoints}} value='{{UsagePoints}}_string'{{/UsagePoints}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CustomerAgreements'>CustomerAgreements: </label><div class='col-sm-8'><input id='CustomerAgreements' class='form-control' type='text'{{#CustomerAgreements}} value='{{CustomerAgreements}}_string'{{/CustomerAgreements}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "PricingStructure" };
                super.submit (obj);
                temp = document.getElementById ("code").value; if ("" != temp) obj.code = temp;
                temp = document.getElementById ("dailyCeilingUsage").value; if ("" != temp) obj.dailyCeilingUsage = temp;
                temp = document.getElementById ("dailyEstimatedUsage").value; if ("" != temp) obj.dailyEstimatedUsage = temp;
                temp = document.getElementById ("dailyFloorUsage").value; if ("" != temp) obj.dailyFloorUsage = temp;
                temp = document.getElementById ("revenueKind").value; if ("" != temp) { temp = RevenueKind[temp]; if ("undefined" != typeof (temp)) obj.revenueKind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#RevenueKind." + temp; }
                temp = document.getElementById ("taxExemption").checked; if (temp) obj.taxExemption = true;
                temp = document.getElementById ("Tariffs").value; if ("" != temp) obj.Tariffs = temp.split (",");
                temp = document.getElementById ("ServiceCategory").value; if ("" != temp) obj.ServiceCategory = temp;
                temp = document.getElementById ("UsagePoints").value; if ("" != temp) obj.UsagePoints = temp.split (",");
                temp = document.getElementById ("CustomerAgreements").value; if ("" != temp) obj.CustomerAgreements = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Tariffs", "Tariff", "0..*", "0..*"],
                        ["Transactions", "Transaction", "0..*", "0..1"],
                        ["ServiceCategory", "ServiceCategory", "1", "0..*"],
                        ["UsagePoints", "UsagePoint", "0..*", "0..*"],
                        ["CustomerAgreements", "CustomerAgreement", "0..*", "0..*"]
                    ]
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
                base.parse_attributes (/<cim:Tariff.PricingStructures\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PricingStructures", sub, context);
                base.parse_attributes (/<cim:Tariff.TariffProfiles\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TariffProfiles", sub, context);
                var bucket = context.parsed.Tariff;
                if (null == bucket)
                   context.parsed.Tariff = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "Tariff", "endDate", "endDate",  base.from_string, fields);
                base.export_element (obj, "Tariff", "startDate", "startDate",  base.from_string, fields);
                base.export_attributes (obj, "Tariff", "PricingStructures", "PricingStructures", fields);
                base.export_attributes (obj, "Tariff", "TariffProfiles", "TariffProfiles", fields);
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
                    {{#PricingStructures}}<div><b>PricingStructures</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/PricingStructures}}
                    {{#TariffProfiles}}<div><b>TariffProfiles</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/TariffProfiles}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.PricingStructures) obj.PricingStructures_string = obj.PricingStructures.join ();
                if (obj.TariffProfiles) obj.TariffProfiles_string = obj.TariffProfiles.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.PricingStructures_string;
                delete obj.TariffProfiles_string;
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
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='PricingStructures'>PricingStructures: </label><div class='col-sm-8'><input id='PricingStructures' class='form-control' type='text'{{#PricingStructures}} value='{{PricingStructures}}_string'{{/PricingStructures}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TariffProfiles'>TariffProfiles: </label><div class='col-sm-8'><input id='TariffProfiles' class='form-control' type='text'{{#TariffProfiles}} value='{{TariffProfiles}}_string'{{/TariffProfiles}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Tariff" };
                super.submit (obj);
                temp = document.getElementById ("endDate").value; if ("" != temp) obj.endDate = temp;
                temp = document.getElementById ("startDate").value; if ("" != temp) obj.startDate = temp;
                temp = document.getElementById ("PricingStructures").value; if ("" != temp) obj.PricingStructures = temp.split (",");
                temp = document.getElementById ("TariffProfiles").value; if ("" != temp) obj.TariffProfiles = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["PricingStructures", "PricingStructure", "0..*", "0..*"],
                        ["TariffProfiles", "TariffProfile", "0..*", "0..*"]
                    ]
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
                base.parse_attributes (/<cim:Customer.Works\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Works", sub, context);
                base.parse_attributes (/<cim:Customer.ErpPersons\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpPersons", sub, context);
                base.parse_attributes (/<cim:Customer.Notifications\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Notifications", sub, context);
                base.parse_attributes (/<cim:Customer.EndDevices\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDevices", sub, context);
                base.parse_attributes (/<cim:Customer.CustomerAgreements\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAgreements", sub, context);
                base.parse_attributes (/<cim:Customer.CustomerAccounts\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAccounts", sub, context);
                base.parse_attributes (/<cim:Customer.TroubleTickets\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TroubleTickets", sub, context);
                var bucket = context.parsed.Customer;
                if (null == bucket)
                   context.parsed.Customer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.OrganisationRole.prototype.export.call (this, obj, false);

                base.export_element (obj, "Customer", "kind", "kind",  base.from_string, fields);
                base.export_element (obj, "Customer", "pucNumber", "pucNumber",  base.from_string, fields);
                base.export_element (obj, "Customer", "specialNeed", "specialNeed",  base.from_string, fields);
                base.export_element (obj, "Customer", "status", "status",  base.from_string, fields);
                base.export_element (obj, "Customer", "vip", "vip",  base.from_boolean, fields);
                base.export_element (obj, "Customer", "priority", "priority",  base.from_string, fields);
                base.export_element (obj, "Customer", "locale", "locale",  base.from_string, fields);
                base.export_attributes (obj, "Customer", "Works", "Works", fields);
                base.export_attributes (obj, "Customer", "ErpPersons", "ErpPersons", fields);
                base.export_attributes (obj, "Customer", "Notifications", "Notifications", fields);
                base.export_attributes (obj, "Customer", "EndDevices", "EndDevices", fields);
                base.export_attributes (obj, "Customer", "CustomerAgreements", "CustomerAgreements", fields);
                base.export_attributes (obj, "Customer", "CustomerAccounts", "CustomerAccounts", fields);
                base.export_attributes (obj, "Customer", "TroubleTickets", "TroubleTickets", fields);
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
                    {{#Works}}<div><b>Works</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Works}}
                    {{#ErpPersons}}<div><b>ErpPersons</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ErpPersons}}
                    {{#Notifications}}<div><b>Notifications</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Notifications}}
                    {{#EndDevices}}<div><b>EndDevices</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EndDevices}}
                    {{#CustomerAgreements}}<div><b>CustomerAgreements</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CustomerAgreements}}
                    {{#CustomerAccounts}}<div><b>CustomerAccounts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CustomerAccounts}}
                    {{#TroubleTickets}}<div><b>TroubleTickets</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/TroubleTickets}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.CustomerKind = []; if (!obj.kind) obj.CustomerKind.push ({ id: '', selected: true}); for (var property in CustomerKind) obj.CustomerKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
                if (obj.Works) obj.Works_string = obj.Works.join ();
                if (obj.ErpPersons) obj.ErpPersons_string = obj.ErpPersons.join ();
                if (obj.Notifications) obj.Notifications_string = obj.Notifications.join ();
                if (obj.EndDevices) obj.EndDevices_string = obj.EndDevices.join ();
                if (obj.CustomerAgreements) obj.CustomerAgreements_string = obj.CustomerAgreements.join ();
                if (obj.CustomerAccounts) obj.CustomerAccounts_string = obj.CustomerAccounts.join ();
                if (obj.TroubleTickets) obj.TroubleTickets_string = obj.TroubleTickets.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.CustomerKind;
                delete obj.Works_string;
                delete obj.ErpPersons_string;
                delete obj.Notifications_string;
                delete obj.EndDevices_string;
                delete obj.CustomerAgreements_string;
                delete obj.CustomerAccounts_string;
                delete obj.TroubleTickets_string;
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
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Works'>Works: </label><div class='col-sm-8'><input id='Works' class='form-control' type='text'{{#Works}} value='{{Works}}_string'{{/Works}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Customer" };
                super.submit (obj);
                temp = document.getElementById ("kind").value; if ("" != temp) { temp = CustomerKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#CustomerKind." + temp; }
                temp = document.getElementById ("pucNumber").value; if ("" != temp) obj.pucNumber = temp;
                temp = document.getElementById ("specialNeed").value; if ("" != temp) obj.specialNeed = temp;
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById ("vip").checked; if (temp) obj.vip = true;
                temp = document.getElementById ("priority").value; if ("" != temp) obj.priority = temp;
                temp = document.getElementById ("locale").value; if ("" != temp) obj.locale = temp;
                temp = document.getElementById ("Works").value; if ("" != temp) obj.Works = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Works", "Work", "0..*", "0..*"],
                        ["ErpPersons", "OldPerson", "0..*", "0..1"],
                        ["Notifications", "CustomerNotification", "0..*", "0..1"],
                        ["EndDevices", "EndDevice", "0..*", "0..1"],
                        ["CustomerAgreements", "CustomerAgreement", "0..*", "1"],
                        ["CustomerAccounts", "CustomerAccount", "0..*", "1"],
                        ["TroubleTickets", "TroubleTicket", "0..*", "0..1"]
                    ]
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

                base.export_attribute (obj, "IncidentHazard", "Incident", "Incident", fields);
                base.export_attribute (obj, "IncidentHazard", "TroubleTicket", "TroubleTicket", fields);
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

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "IncidentHazard" };
                super.submit (obj);
                temp = document.getElementById ("Incident").value; if ("" != temp) obj.Incident = temp;
                temp = document.getElementById ("TroubleTicket").value; if ("" != temp) obj.TroubleTicket = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Incident", "Incident", "0..1", "0..*"],
                        ["TroubleTicket", "TroubleTicket", "0..1", "0..*"]
                    ]
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
                base.parse_attributes (/<cim:CustomerAgreement.AuxiliaryAgreements\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AuxiliaryAgreements", sub, context);
                base.parse_attributes (/<cim:CustomerAgreement.DemandResponsePrograms\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DemandResponsePrograms", sub, context);
                base.parse_attributes (/<cim:CustomerAgreement.UsagePoints\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UsagePoints", sub, context);
                base.parse_attribute (/<cim:CustomerAgreement.Customer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Customer", sub, context);
                base.parse_attribute (/<cim:CustomerAgreement.CustomerAccount\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAccount", sub, context);
                base.parse_attribute (/<cim:CustomerAgreement.StandardIndustryCode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StandardIndustryCode", sub, context);
                base.parse_attributes (/<cim:CustomerAgreement.PricingStructures\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PricingStructures", sub, context);
                base.parse_attributes (/<cim:CustomerAgreement.MeterReadings\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MeterReadings", sub, context);
                base.parse_attributes (/<cim:CustomerAgreement.ServiceLocations\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ServiceLocations", sub, context);
                var bucket = context.parsed.CustomerAgreement;
                if (null == bucket)
                   context.parsed.CustomerAgreement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Agreement.prototype.export.call (this, obj, false);

                base.export_element (obj, "CustomerAgreement", "loadMgmt", "loadMgmt",  base.from_string, fields);
                base.export_attribute (obj, "CustomerAgreement", "ServiceCategory", "ServiceCategory", fields);
                base.export_attribute (obj, "CustomerAgreement", "ServiceSupplier", "ServiceSupplier", fields);
                base.export_attributes (obj, "CustomerAgreement", "AuxiliaryAgreements", "AuxiliaryAgreements", fields);
                base.export_attributes (obj, "CustomerAgreement", "DemandResponsePrograms", "DemandResponsePrograms", fields);
                base.export_attributes (obj, "CustomerAgreement", "UsagePoints", "UsagePoints", fields);
                base.export_attribute (obj, "CustomerAgreement", "Customer", "Customer", fields);
                base.export_attribute (obj, "CustomerAgreement", "CustomerAccount", "CustomerAccount", fields);
                base.export_attribute (obj, "CustomerAgreement", "StandardIndustryCode", "StandardIndustryCode", fields);
                base.export_attributes (obj, "CustomerAgreement", "PricingStructures", "PricingStructures", fields);
                base.export_attributes (obj, "CustomerAgreement", "MeterReadings", "MeterReadings", fields);
                base.export_attributes (obj, "CustomerAgreement", "ServiceLocations", "ServiceLocations", fields);
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
                    {{#AuxiliaryAgreements}}<div><b>AuxiliaryAgreements</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/AuxiliaryAgreements}}
                    {{#DemandResponsePrograms}}<div><b>DemandResponsePrograms</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/DemandResponsePrograms}}
                    {{#UsagePoints}}<div><b>UsagePoints</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/UsagePoints}}
                    {{#Customer}}<div><b>Customer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Customer}}&quot;);})'>{{Customer}}</a></div>{{/Customer}}
                    {{#CustomerAccount}}<div><b>CustomerAccount</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CustomerAccount}}&quot;);})'>{{CustomerAccount}}</a></div>{{/CustomerAccount}}
                    {{#StandardIndustryCode}}<div><b>StandardIndustryCode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{StandardIndustryCode}}&quot;);})'>{{StandardIndustryCode}}</a></div>{{/StandardIndustryCode}}
                    {{#PricingStructures}}<div><b>PricingStructures</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/PricingStructures}}
                    {{#MeterReadings}}<div><b>MeterReadings</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MeterReadings}}
                    {{#ServiceLocations}}<div><b>ServiceLocations</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ServiceLocations}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.AuxiliaryAgreements) obj.AuxiliaryAgreements_string = obj.AuxiliaryAgreements.join ();
                if (obj.DemandResponsePrograms) obj.DemandResponsePrograms_string = obj.DemandResponsePrograms.join ();
                if (obj.UsagePoints) obj.UsagePoints_string = obj.UsagePoints.join ();
                if (obj.PricingStructures) obj.PricingStructures_string = obj.PricingStructures.join ();
                if (obj.MeterReadings) obj.MeterReadings_string = obj.MeterReadings.join ();
                if (obj.ServiceLocations) obj.ServiceLocations_string = obj.ServiceLocations.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.AuxiliaryAgreements_string;
                delete obj.DemandResponsePrograms_string;
                delete obj.UsagePoints_string;
                delete obj.PricingStructures_string;
                delete obj.MeterReadings_string;
                delete obj.ServiceLocations_string;
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
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='DemandResponsePrograms'>DemandResponsePrograms: </label><div class='col-sm-8'><input id='DemandResponsePrograms' class='form-control' type='text'{{#DemandResponsePrograms}} value='{{DemandResponsePrograms}}_string'{{/DemandResponsePrograms}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Customer'>Customer: </label><div class='col-sm-8'><input id='Customer' class='form-control' type='text'{{#Customer}} value='{{Customer}}'{{/Customer}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CustomerAccount'>CustomerAccount: </label><div class='col-sm-8'><input id='CustomerAccount' class='form-control' type='text'{{#CustomerAccount}} value='{{CustomerAccount}}'{{/CustomerAccount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='StandardIndustryCode'>StandardIndustryCode: </label><div class='col-sm-8'><input id='StandardIndustryCode' class='form-control' type='text'{{#StandardIndustryCode}} value='{{StandardIndustryCode}}'{{/StandardIndustryCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='PricingStructures'>PricingStructures: </label><div class='col-sm-8'><input id='PricingStructures' class='form-control' type='text'{{#PricingStructures}} value='{{PricingStructures}}_string'{{/PricingStructures}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ServiceLocations'>ServiceLocations: </label><div class='col-sm-8'><input id='ServiceLocations' class='form-control' type='text'{{#ServiceLocations}} value='{{ServiceLocations}}_string'{{/ServiceLocations}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "CustomerAgreement" };
                super.submit (obj);
                temp = document.getElementById ("loadMgmt").value; if ("" != temp) obj.loadMgmt = temp;
                temp = document.getElementById ("ServiceCategory").value; if ("" != temp) obj.ServiceCategory = temp;
                temp = document.getElementById ("ServiceSupplier").value; if ("" != temp) obj.ServiceSupplier = temp;
                temp = document.getElementById ("DemandResponsePrograms").value; if ("" != temp) obj.DemandResponsePrograms = temp.split (",");
                temp = document.getElementById ("Customer").value; if ("" != temp) obj.Customer = temp;
                temp = document.getElementById ("CustomerAccount").value; if ("" != temp) obj.CustomerAccount = temp;
                temp = document.getElementById ("StandardIndustryCode").value; if ("" != temp) obj.StandardIndustryCode = temp;
                temp = document.getElementById ("PricingStructures").value; if ("" != temp) obj.PricingStructures = temp.split (",");
                temp = document.getElementById ("ServiceLocations").value; if ("" != temp) obj.ServiceLocations = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ServiceCategory", "ServiceCategory", "0..1", "0..*"],
                        ["ServiceSupplier", "ServiceSupplier", "1", "0..*"],
                        ["AuxiliaryAgreements", "AuxiliaryAgreement", "0..*", "0..1"],
                        ["DemandResponsePrograms", "DemandResponseProgram", "0..*", "0..*"],
                        ["UsagePoints", "UsagePoint", "0..*", "0..1"],
                        ["Customer", "Customer", "1", "0..*"],
                        ["CustomerAccount", "CustomerAccount", "1", "0..*"],
                        ["StandardIndustryCode", "StandardIndustryCode", "0..1", "0..*"],
                        ["PricingStructures", "PricingStructure", "0..*", "0..*"],
                        ["MeterReadings", "MeterReading", "0..*", "0..1"],
                        ["ServiceLocations", "ServiceLocation", "0..*", "0..*"]
                    ]
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
                base.parse_attributes (/<cim:ServiceLocation.EndDevices\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDevices", sub, context);
                base.parse_attributes (/<cim:ServiceLocation.UsagePoints\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UsagePoints", sub, context);
                base.parse_attributes (/<cim:ServiceLocation.CustomerAgreements\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAgreements", sub, context);
                var bucket = context.parsed.ServiceLocation;
                if (null == bucket)
                   context.parsed.ServiceLocation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Work.WorkLocation.prototype.export.call (this, obj, false);

                base.export_element (obj, "ServiceLocation", "accessMethod", "accessMethod",  base.from_string, fields);
                base.export_element (obj, "ServiceLocation", "needsInspection", "needsInspection",  base.from_boolean, fields);
                base.export_element (obj, "ServiceLocation", "siteAccessProblem", "siteAccessProblem",  base.from_string, fields);
                base.export_attributes (obj, "ServiceLocation", "EndDevices", "EndDevices", fields);
                base.export_attributes (obj, "ServiceLocation", "UsagePoints", "UsagePoints", fields);
                base.export_attributes (obj, "ServiceLocation", "CustomerAgreements", "CustomerAgreements", fields);
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
                    {{#EndDevices}}<div><b>EndDevices</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EndDevices}}
                    {{#UsagePoints}}<div><b>UsagePoints</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/UsagePoints}}
                    {{#CustomerAgreements}}<div><b>CustomerAgreements</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CustomerAgreements}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.EndDevices) obj.EndDevices_string = obj.EndDevices.join ();
                if (obj.UsagePoints) obj.UsagePoints_string = obj.UsagePoints.join ();
                if (obj.CustomerAgreements) obj.CustomerAgreements_string = obj.CustomerAgreements.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.EndDevices_string;
                delete obj.UsagePoints_string;
                delete obj.CustomerAgreements_string;
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
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CustomerAgreements'>CustomerAgreements: </label><div class='col-sm-8'><input id='CustomerAgreements' class='form-control' type='text'{{#CustomerAgreements}} value='{{CustomerAgreements}}_string'{{/CustomerAgreements}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ServiceLocation" };
                super.submit (obj);
                temp = document.getElementById ("accessMethod").value; if ("" != temp) obj.accessMethod = temp;
                temp = document.getElementById ("needsInspection").checked; if (temp) obj.needsInspection = true;
                temp = document.getElementById ("siteAccessProblem").value; if ("" != temp) obj.siteAccessProblem = temp;
                temp = document.getElementById ("CustomerAgreements").value; if ("" != temp) obj.CustomerAgreements = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["EndDevices", "EndDevice", "0..*", "0..1"],
                        ["UsagePoints", "UsagePoint", "0..*", "0..1"],
                        ["CustomerAgreements", "CustomerAgreement", "0..*", "0..*"]
                    ]
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
                base.parse_attributes (/<cim:ServiceCategory.CustomerAgreements\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAgreements", sub, context);
                base.parse_attributes (/<cim:ServiceCategory.PricingStructures\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PricingStructures", sub, context);
                base.parse_attributes (/<cim:ServiceCategory.ConfigurationEvents\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConfigurationEvents", sub, context);
                base.parse_attributes (/<cim:ServiceCategory.UsagePoints\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UsagePoints", sub, context);
                var bucket = context.parsed.ServiceCategory;
                if (null == bucket)
                   context.parsed.ServiceCategory = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ServiceCategory", "kind", "kind",  base.from_string, fields);
                base.export_attributes (obj, "ServiceCategory", "CustomerAgreements", "CustomerAgreements", fields);
                base.export_attributes (obj, "ServiceCategory", "PricingStructures", "PricingStructures", fields);
                base.export_attributes (obj, "ServiceCategory", "ConfigurationEvents", "ConfigurationEvents", fields);
                base.export_attributes (obj, "ServiceCategory", "UsagePoints", "UsagePoints", fields);
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
                    {{#CustomerAgreements}}<div><b>CustomerAgreements</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CustomerAgreements}}
                    {{#PricingStructures}}<div><b>PricingStructures</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/PricingStructures}}
                    {{#ConfigurationEvents}}<div><b>ConfigurationEvents</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ConfigurationEvents}}
                    {{#UsagePoints}}<div><b>UsagePoints</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/UsagePoints}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ServiceKind = []; if (!obj.kind) obj.ServiceKind.push ({ id: '', selected: true}); for (var property in ServiceKind) obj.ServiceKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
                if (obj.CustomerAgreements) obj.CustomerAgreements_string = obj.CustomerAgreements.join ();
                if (obj.PricingStructures) obj.PricingStructures_string = obj.PricingStructures.join ();
                if (obj.ConfigurationEvents) obj.ConfigurationEvents_string = obj.ConfigurationEvents.join ();
                if (obj.UsagePoints) obj.UsagePoints_string = obj.UsagePoints.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ServiceKind;
                delete obj.CustomerAgreements_string;
                delete obj.PricingStructures_string;
                delete obj.ConfigurationEvents_string;
                delete obj.UsagePoints_string;
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

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ServiceCategory" };
                super.submit (obj);
                temp = document.getElementById ("kind").value; if ("" != temp) { temp = ServiceKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#ServiceKind." + temp; }

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["CustomerAgreements", "CustomerAgreement", "0..*", "0..1"],
                        ["PricingStructures", "PricingStructure", "0..*", "1"],
                        ["ConfigurationEvents", "ConfigurationEvent", "0..*", "0..1"],
                        ["UsagePoints", "UsagePoint", "0..*", "0..1"]
                    ]
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
                base.parse_attributes (/<cim:TroubleTicket.Hazards\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Hazards", sub, context);
                var bucket = context.parsed.TroubleTicket;
                if (null == bucket)
                   context.parsed.TroubleTicket = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "TroubleTicket", "dateTimeOfReport", "dateTimeOfReport",  base.from_datetime, fields);
                base.export_element (obj, "TroubleTicket", "troubleCode", "troubleCode",  base.from_string, fields);
                base.export_element (obj, "TroubleTicket", "reportingKind", "reportingKind",  base.from_string, fields);
                base.export_element (obj, "TroubleTicket", "resolvedDateTime", "resolvedDateTime",  base.from_datetime, fields);
                base.export_element (obj, "TroubleTicket", "firstResponder", "firstResponder",  base.from_string, fields);
                base.export_attribute (obj, "TroubleTicket", "Notification", "Notification", fields);
                base.export_attribute (obj, "TroubleTicket", "Incident", "Incident", fields);
                base.export_attribute (obj, "TroubleTicket", "Customer", "Customer", fields);
                base.export_attributes (obj, "TroubleTicket", "Hazards", "Hazards", fields);
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
                    {{#Hazards}}<div><b>Hazards</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Hazards}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.TroubleReportingKind = []; if (!obj.reportingKind) obj.TroubleReportingKind.push ({ id: '', selected: true}); for (var property in TroubleReportingKind) obj.TroubleReportingKind.push ({ id: property, selected: obj.reportingKind && obj.reportingKind.endsWith ('.' + property)});
                if (obj.Hazards) obj.Hazards_string = obj.Hazards.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TroubleReportingKind;
                delete obj.Hazards_string;
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

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "TroubleTicket" };
                super.submit (obj);
                temp = document.getElementById ("dateTimeOfReport").value; if ("" != temp) obj.dateTimeOfReport = temp;
                temp = document.getElementById ("troubleCode").value; if ("" != temp) obj.troubleCode = temp;
                temp = document.getElementById ("reportingKind").value; if ("" != temp) { temp = TroubleReportingKind[temp]; if ("undefined" != typeof (temp)) obj.reportingKind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#TroubleReportingKind." + temp; }
                temp = document.getElementById ("resolvedDateTime").value; if ("" != temp) obj.resolvedDateTime = temp;
                temp = document.getElementById ("firstResponder").value; if ("" != temp) obj.firstResponder = temp;
                temp = document.getElementById ("Notification").value; if ("" != temp) obj.Notification = temp;
                temp = document.getElementById ("Incident").value; if ("" != temp) obj.Incident = temp;
                temp = document.getElementById ("Customer").value; if ("" != temp) obj.Customer = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Notification", "CustomerNotification", "0..1", "0..*"],
                        ["Incident", "Incident", "0..1", "0..*"],
                        ["Customer", "Customer", "0..1", "0..*"],
                        ["Hazards", "IncidentHazard", "0..*", "0..1"]
                    ]
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
                base.parse_attributes (/<cim:CustomerAccount.CustomerAgreements\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAgreements", sub, context);
                base.parse_attribute (/<cim:CustomerAccount.Customer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Customer", sub, context);
                base.parse_attributes (/<cim:CustomerAccount.WorkBillingInfos\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkBillingInfos", sub, context);
                base.parse_attributes (/<cim:CustomerAccount.ErpInvoicees\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpInvoicees", sub, context);
                base.parse_attributes (/<cim:CustomerAccount.CustomerBillingInfos\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerBillingInfos", sub, context);
                base.parse_attributes (/<cim:CustomerAccount.PaymentTransactions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PaymentTransactions", sub, context);
                var bucket = context.parsed.CustomerAccount;
                if (null == bucket)
                   context.parsed.CustomerAccount = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "CustomerAccount", "billingCycle", "billingCycle",  base.from_string, fields);
                base.export_element (obj, "CustomerAccount", "budgetBill", "budgetBill",  base.from_string, fields);
                base.export_attributes (obj, "CustomerAccount", "CustomerAgreements", "CustomerAgreements", fields);
                base.export_attribute (obj, "CustomerAccount", "Customer", "Customer", fields);
                base.export_attributes (obj, "CustomerAccount", "WorkBillingInfos", "WorkBillingInfos", fields);
                base.export_attributes (obj, "CustomerAccount", "ErpInvoicees", "ErpInvoicees", fields);
                base.export_attributes (obj, "CustomerAccount", "CustomerBillingInfos", "CustomerBillingInfos", fields);
                base.export_attributes (obj, "CustomerAccount", "PaymentTransactions", "PaymentTransactions", fields);
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
                    {{#CustomerAgreements}}<div><b>CustomerAgreements</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CustomerAgreements}}
                    {{#Customer}}<div><b>Customer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Customer}}&quot;);})'>{{Customer}}</a></div>{{/Customer}}
                    {{#WorkBillingInfos}}<div><b>WorkBillingInfos</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/WorkBillingInfos}}
                    {{#ErpInvoicees}}<div><b>ErpInvoicees</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ErpInvoicees}}
                    {{#CustomerBillingInfos}}<div><b>CustomerBillingInfos</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CustomerBillingInfos}}
                    {{#PaymentTransactions}}<div><b>PaymentTransactions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/PaymentTransactions}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.CustomerAgreements) obj.CustomerAgreements_string = obj.CustomerAgreements.join ();
                if (obj.WorkBillingInfos) obj.WorkBillingInfos_string = obj.WorkBillingInfos.join ();
                if (obj.ErpInvoicees) obj.ErpInvoicees_string = obj.ErpInvoicees.join ();
                if (obj.CustomerBillingInfos) obj.CustomerBillingInfos_string = obj.CustomerBillingInfos.join ();
                if (obj.PaymentTransactions) obj.PaymentTransactions_string = obj.PaymentTransactions.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.CustomerAgreements_string;
                delete obj.WorkBillingInfos_string;
                delete obj.ErpInvoicees_string;
                delete obj.CustomerBillingInfos_string;
                delete obj.PaymentTransactions_string;
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

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "CustomerAccount" };
                super.submit (obj);
                temp = document.getElementById ("billingCycle").value; if ("" != temp) obj.billingCycle = temp;
                temp = document.getElementById ("budgetBill").value; if ("" != temp) obj.budgetBill = temp;
                temp = document.getElementById ("Customer").value; if ("" != temp) obj.Customer = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["CustomerAgreements", "CustomerAgreement", "0..*", "1"],
                        ["Customer", "Customer", "1", "0..*"],
                        ["WorkBillingInfos", "WorkBillingInfo", "0..*", "0..1"],
                        ["ErpInvoicees", "ErpInvoice", "0..*", "0..1"],
                        ["CustomerBillingInfos", "CustomerBillingInfo", "0..*", "0..1"],
                        ["PaymentTransactions", "Transaction", "0..*", "0..1"]
                    ]
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