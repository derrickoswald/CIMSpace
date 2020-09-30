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
         * Kind of trouble reporting.
         *
         */
        let TroubleReportingKind =
        {
            "call": "call",
            "email": "email",
            "letter": "letter",
            "other": "other",
            "ivr": "ivr"
        };
        Object.freeze (TroubleReportingKind);

        /**
         * Kind of service.
         *
         */
        let ServiceKind =
        {
            "electricity": "electricity",
            "gas": "gas",
            "water": "water",
            "time": "time",
            "heat": "heat",
            "refuse": "refuse",
            "sewerage": "sewerage",
            "rates": "rates",
            "tvLicence": "tvLicence",
            "internet": "internet",
            "other": "other",
            "air": "air",
            "naturalGas": "naturalGas",
            "propane": "propane",
            "steam": "steam",
            "heatingFluid": "heatingFluid"
        };
        Object.freeze (ServiceKind);

        /**
         * Kind of trigger to notify customer.
         *
         */
        let NotificationTriggerKind =
        {
            "initialEtr": "initialEtr",
            "etrChange": "etrChange",
            "powerRestored": "powerRestored",
            "powerOut": "powerOut",
            "informDispatched": "informDispatched"
        };
        Object.freeze (NotificationTriggerKind);

        /**
         * Accounting classification of the type of revenue collected for the customer agreement, typically used to break down accounts for revenue accounting.
         *
         */
        let RevenueKind =
        {
            "residential": "residential",
            "nonResidential": "nonResidential",
            "commercial": "commercial",
            "industrial": "industrial",
            "irrigation": "irrigation",
            "streetLight": "streetLight",
            "other": "other"
        };
        Object.freeze (RevenueKind);

        /**
         * Kind of customer.
         *
         */
        let CustomerKind =
        {
            "residential": "residential",
            "residentialAndCommercial": "residentialAndCommercial",
            "residentialAndStreetlight": "residentialAndStreetlight",
            "residentialStreetlightOthers": "residentialStreetlightOthers",
            "residentialFarmService": "residentialFarmService",
            "commercialIndustrial": "commercialIndustrial",
            "pumpingLoad": "pumpingLoad",
            "windMachine": "windMachine",
            "energyServiceSupplier": "energyServiceSupplier",
            "energyServiceScheduler": "energyServiceScheduler",
            "internalUse": "internalUse",
            "enterprise": "enterprise",
            "regionalOperator": "regionalOperator",
            "subsidiary": "subsidiary",
            "other": "other"
        };
        Object.freeze (CustomerKind);

        /**
         * Describes the type of Trouble, based on customer input.
         *
         */
        let TroubleCallKind =
        {
            "powerOut": "powerOut",
            "lineDown": "lineDown"
        };
        Object.freeze (TroubleCallKind);

        /**
         * Notifications for move-in, move-out, delinquencies, etc.
         *
         */
        class AccountNotification extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AccountNotification;
                if (null == bucket)
                   cim_data.AccountNotification = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AccountNotification[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AccountNotification";
                base.parse_element (/<cim:AccountNotification.customerNotificationType>([\s\S]*?)<\/cim:AccountNotification.customerNotificationType>/g, obj, "customerNotificationType", base.to_string, sub, context);
                base.parse_element (/<cim:AccountNotification.methodType>([\s\S]*?)<\/cim:AccountNotification.methodType>/g, obj, "methodType", base.to_string, sub, context);
                base.parse_element (/<cim:AccountNotification.note>([\s\S]*?)<\/cim:AccountNotification.note>/g, obj, "note", base.to_string, sub, context);
                base.parse_element (/<cim:AccountNotification.time>([\s\S]*?)<\/cim:AccountNotification.time>/g, obj, "time", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:AccountNotification.CustomerAccount\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAccount", sub, context);
                let bucket = context.parsed.AccountNotification;
                if (null == bucket)
                   context.parsed.AccountNotification = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "AccountNotification", "customerNotificationType", "customerNotificationType",  base.from_string, fields);
                base.export_element (obj, "AccountNotification", "methodType", "methodType",  base.from_string, fields);
                base.export_element (obj, "AccountNotification", "note", "note",  base.from_string, fields);
                base.export_element (obj, "AccountNotification", "time", "time",  base.from_datetime, fields);
                base.export_attribute (obj, "AccountNotification", "CustomerAccount", "CustomerAccount", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AccountNotification_collapse" aria-expanded="true" aria-controls="AccountNotification_collapse" style="margin-left: 10px;">AccountNotification</a></legend>
                    <div id="AccountNotification_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#customerNotificationType}}<div><b>customerNotificationType</b>: {{customerNotificationType}}</div>{{/customerNotificationType}}
                    {{#methodType}}<div><b>methodType</b>: {{methodType}}</div>{{/methodType}}
                    {{#note}}<div><b>note</b>: {{note}}</div>{{/note}}
                    {{#time}}<div><b>time</b>: {{time}}</div>{{/time}}
                    {{#CustomerAccount}}<div><b>CustomerAccount</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{CustomerAccount}}");}); return false;'>{{CustomerAccount}}</a></div>{{/CustomerAccount}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AccountNotification_collapse" aria-expanded="true" aria-controls="{{id}}_AccountNotification_collapse" style="margin-left: 10px;">AccountNotification</a></legend>
                    <div id="{{id}}_AccountNotification_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_customerNotificationType'>customerNotificationType: </label><div class='col-sm-8'><input id='{{id}}_customerNotificationType' class='form-control' type='text'{{#customerNotificationType}} value='{{customerNotificationType}}'{{/customerNotificationType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_methodType'>methodType: </label><div class='col-sm-8'><input id='{{id}}_methodType' class='form-control' type='text'{{#methodType}} value='{{methodType}}'{{/methodType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_note'>note: </label><div class='col-sm-8'><input id='{{id}}_note' class='form-control' type='text'{{#note}} value='{{note}}'{{/note}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_time'>time: </label><div class='col-sm-8'><input id='{{id}}_time' class='form-control' type='text'{{#time}} value='{{time}}'{{/time}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CustomerAccount'>CustomerAccount: </label><div class='col-sm-8'><input id='{{id}}_CustomerAccount' class='form-control' type='text'{{#CustomerAccount}} value='{{CustomerAccount}}'{{/CustomerAccount}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AccountNotification" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_customerNotificationType").value; if ("" !== temp) obj["customerNotificationType"] = temp;
                temp = document.getElementById (id + "_methodType").value; if ("" !== temp) obj["methodType"] = temp;
                temp = document.getElementById (id + "_note").value; if ("" !== temp) obj["note"] = temp;
                temp = document.getElementById (id + "_time").value; if ("" !== temp) obj["time"] = temp;
                temp = document.getElementById (id + "_CustomerAccount").value; if ("" !== temp) obj["CustomerAccount"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CustomerAccount", "1", "0..*", "CustomerAccount", "AccountNotification"]
                        ]
                    )
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
                let bucket = cim_data.CustomerAgreement;
                if (null == bucket)
                   cim_data.CustomerAgreement = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CustomerAgreement[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Agreement.prototype.parse.call (this, context, sub);
                obj.cls = "CustomerAgreement";
                base.parse_element (/<cim:CustomerAgreement.isPrePay>([\s\S]*?)<\/cim:CustomerAgreement.isPrePay>/g, obj, "isPrePay", base.to_boolean, sub, context);
                base.parse_element (/<cim:CustomerAgreement.loadMgmt>([\s\S]*?)<\/cim:CustomerAgreement.loadMgmt>/g, obj, "loadMgmt", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerAgreement.shutOffDateTime>([\s\S]*?)<\/cim:CustomerAgreement.shutOffDateTime>/g, obj, "shutOffDateTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:CustomerAgreement.ServiceSupplier\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ServiceSupplier", sub, context);
                base.parse_attribute (/<cim:CustomerAgreement.StandardIndustryCode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "StandardIndustryCode", sub, context);
                base.parse_attribute (/<cim:CustomerAgreement.Customer\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Customer", sub, context);
                base.parse_attribute (/<cim:CustomerAgreement.CustomerAccount\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAccount", sub, context);
                base.parse_attributes (/<cim:CustomerAgreement.ServiceLocations\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ServiceLocations", sub, context);
                base.parse_attribute (/<cim:CustomerAgreement.ServiceCategory\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ServiceCategory", sub, context);
                base.parse_attributes (/<cim:CustomerAgreement.DemandResponsePrograms\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DemandResponsePrograms", sub, context);
                base.parse_attributes (/<cim:CustomerAgreement.UsagePoints\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "UsagePoints", sub, context);
                base.parse_attributes (/<cim:CustomerAgreement.MeterReadings\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MeterReadings", sub, context);
                base.parse_attributes (/<cim:CustomerAgreement.AuxiliaryAgreements\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AuxiliaryAgreements", sub, context);
                base.parse_attributes (/<cim:CustomerAgreement.PricingStructures\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PricingStructures", sub, context);
                let bucket = context.parsed.CustomerAgreement;
                if (null == bucket)
                   context.parsed.CustomerAgreement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Agreement.prototype.export.call (this, obj, false);

                base.export_element (obj, "CustomerAgreement", "isPrePay", "isPrePay",  base.from_boolean, fields);
                base.export_element (obj, "CustomerAgreement", "loadMgmt", "loadMgmt",  base.from_string, fields);
                base.export_element (obj, "CustomerAgreement", "shutOffDateTime", "shutOffDateTime",  base.from_datetime, fields);
                base.export_attribute (obj, "CustomerAgreement", "ServiceSupplier", "ServiceSupplier", fields);
                base.export_attribute (obj, "CustomerAgreement", "StandardIndustryCode", "StandardIndustryCode", fields);
                base.export_attribute (obj, "CustomerAgreement", "Customer", "Customer", fields);
                base.export_attribute (obj, "CustomerAgreement", "CustomerAccount", "CustomerAccount", fields);
                base.export_attributes (obj, "CustomerAgreement", "ServiceLocations", "ServiceLocations", fields);
                base.export_attribute (obj, "CustomerAgreement", "ServiceCategory", "ServiceCategory", fields);
                base.export_attributes (obj, "CustomerAgreement", "DemandResponsePrograms", "DemandResponsePrograms", fields);
                base.export_attributes (obj, "CustomerAgreement", "UsagePoints", "UsagePoints", fields);
                base.export_attributes (obj, "CustomerAgreement", "MeterReadings", "MeterReadings", fields);
                base.export_attributes (obj, "CustomerAgreement", "AuxiliaryAgreements", "AuxiliaryAgreements", fields);
                base.export_attributes (obj, "CustomerAgreement", "PricingStructures", "PricingStructures", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CustomerAgreement_collapse" aria-expanded="true" aria-controls="CustomerAgreement_collapse" style="margin-left: 10px;">CustomerAgreement</a></legend>
                    <div id="CustomerAgreement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.template.call (this) +
                    `
                    {{#isPrePay}}<div><b>isPrePay</b>: {{isPrePay}}</div>{{/isPrePay}}
                    {{#loadMgmt}}<div><b>loadMgmt</b>: {{loadMgmt}}</div>{{/loadMgmt}}
                    {{#shutOffDateTime}}<div><b>shutOffDateTime</b>: {{shutOffDateTime}}</div>{{/shutOffDateTime}}
                    {{#ServiceSupplier}}<div><b>ServiceSupplier</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ServiceSupplier}}");}); return false;'>{{ServiceSupplier}}</a></div>{{/ServiceSupplier}}
                    {{#StandardIndustryCode}}<div><b>StandardIndustryCode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{StandardIndustryCode}}");}); return false;'>{{StandardIndustryCode}}</a></div>{{/StandardIndustryCode}}
                    {{#Customer}}<div><b>Customer</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Customer}}");}); return false;'>{{Customer}}</a></div>{{/Customer}}
                    {{#CustomerAccount}}<div><b>CustomerAccount</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{CustomerAccount}}");}); return false;'>{{CustomerAccount}}</a></div>{{/CustomerAccount}}
                    {{#ServiceLocations}}<div><b>ServiceLocations</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ServiceLocations}}
                    {{#ServiceCategory}}<div><b>ServiceCategory</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ServiceCategory}}");}); return false;'>{{ServiceCategory}}</a></div>{{/ServiceCategory}}
                    {{#DemandResponsePrograms}}<div><b>DemandResponsePrograms</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/DemandResponsePrograms}}
                    {{#UsagePoints}}<div><b>UsagePoints</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/UsagePoints}}
                    {{#MeterReadings}}<div><b>MeterReadings</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MeterReadings}}
                    {{#AuxiliaryAgreements}}<div><b>AuxiliaryAgreements</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AuxiliaryAgreements}}
                    {{#PricingStructures}}<div><b>PricingStructures</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/PricingStructures}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ServiceLocations"]) obj["ServiceLocations_string"] = obj["ServiceLocations"].join ();
                if (obj["DemandResponsePrograms"]) obj["DemandResponsePrograms_string"] = obj["DemandResponsePrograms"].join ();
                if (obj["UsagePoints"]) obj["UsagePoints_string"] = obj["UsagePoints"].join ();
                if (obj["MeterReadings"]) obj["MeterReadings_string"] = obj["MeterReadings"].join ();
                if (obj["AuxiliaryAgreements"]) obj["AuxiliaryAgreements_string"] = obj["AuxiliaryAgreements"].join ();
                if (obj["PricingStructures"]) obj["PricingStructures_string"] = obj["PricingStructures"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ServiceLocations_string"];
                delete obj["DemandResponsePrograms_string"];
                delete obj["UsagePoints_string"];
                delete obj["MeterReadings_string"];
                delete obj["AuxiliaryAgreements_string"];
                delete obj["PricingStructures_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CustomerAgreement_collapse" aria-expanded="true" aria-controls="{{id}}_CustomerAgreement_collapse" style="margin-left: 10px;">CustomerAgreement</a></legend>
                    <div id="{{id}}_CustomerAgreement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isPrePay'>isPrePay: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isPrePay' class='form-check-input' type='checkbox'{{#isPrePay}} checked{{/isPrePay}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_loadMgmt'>loadMgmt: </label><div class='col-sm-8'><input id='{{id}}_loadMgmt' class='form-control' type='text'{{#loadMgmt}} value='{{loadMgmt}}'{{/loadMgmt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_shutOffDateTime'>shutOffDateTime: </label><div class='col-sm-8'><input id='{{id}}_shutOffDateTime' class='form-control' type='text'{{#shutOffDateTime}} value='{{shutOffDateTime}}'{{/shutOffDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ServiceSupplier'>ServiceSupplier: </label><div class='col-sm-8'><input id='{{id}}_ServiceSupplier' class='form-control' type='text'{{#ServiceSupplier}} value='{{ServiceSupplier}}'{{/ServiceSupplier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_StandardIndustryCode'>StandardIndustryCode: </label><div class='col-sm-8'><input id='{{id}}_StandardIndustryCode' class='form-control' type='text'{{#StandardIndustryCode}} value='{{StandardIndustryCode}}'{{/StandardIndustryCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Customer'>Customer: </label><div class='col-sm-8'><input id='{{id}}_Customer' class='form-control' type='text'{{#Customer}} value='{{Customer}}'{{/Customer}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CustomerAccount'>CustomerAccount: </label><div class='col-sm-8'><input id='{{id}}_CustomerAccount' class='form-control' type='text'{{#CustomerAccount}} value='{{CustomerAccount}}'{{/CustomerAccount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ServiceLocations'>ServiceLocations: </label><div class='col-sm-8'><input id='{{id}}_ServiceLocations' class='form-control' type='text'{{#ServiceLocations}} value='{{ServiceLocations_string}}'{{/ServiceLocations}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ServiceCategory'>ServiceCategory: </label><div class='col-sm-8'><input id='{{id}}_ServiceCategory' class='form-control' type='text'{{#ServiceCategory}} value='{{ServiceCategory}}'{{/ServiceCategory}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DemandResponsePrograms'>DemandResponsePrograms: </label><div class='col-sm-8'><input id='{{id}}_DemandResponsePrograms' class='form-control' type='text'{{#DemandResponsePrograms}} value='{{DemandResponsePrograms_string}}'{{/DemandResponsePrograms}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PricingStructures'>PricingStructures: </label><div class='col-sm-8'><input id='{{id}}_PricingStructures' class='form-control' type='text'{{#PricingStructures}} value='{{PricingStructures_string}}'{{/PricingStructures}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CustomerAgreement" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_isPrePay").checked; if (temp) obj["isPrePay"] = true;
                temp = document.getElementById (id + "_loadMgmt").value; if ("" !== temp) obj["loadMgmt"] = temp;
                temp = document.getElementById (id + "_shutOffDateTime").value; if ("" !== temp) obj["shutOffDateTime"] = temp;
                temp = document.getElementById (id + "_ServiceSupplier").value; if ("" !== temp) obj["ServiceSupplier"] = temp;
                temp = document.getElementById (id + "_StandardIndustryCode").value; if ("" !== temp) obj["StandardIndustryCode"] = temp;
                temp = document.getElementById (id + "_Customer").value; if ("" !== temp) obj["Customer"] = temp;
                temp = document.getElementById (id + "_CustomerAccount").value; if ("" !== temp) obj["CustomerAccount"] = temp;
                temp = document.getElementById (id + "_ServiceLocations").value; if ("" !== temp) obj["ServiceLocations"] = temp.split (",");
                temp = document.getElementById (id + "_ServiceCategory").value; if ("" !== temp) obj["ServiceCategory"] = temp;
                temp = document.getElementById (id + "_DemandResponsePrograms").value; if ("" !== temp) obj["DemandResponsePrograms"] = temp.split (",");
                temp = document.getElementById (id + "_PricingStructures").value; if ("" !== temp) obj["PricingStructures"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ServiceSupplier", "1", "0..*", "ServiceSupplier", "CustomerAgreements"],
                            ["StandardIndustryCode", "0..1", "0..*", "StandardIndustryCode", "CustomerAgreements"],
                            ["Customer", "1", "0..*", "Customer", "CustomerAgreements"],
                            ["CustomerAccount", "1", "0..*", "CustomerAccount", "CustomerAgreements"],
                            ["ServiceLocations", "0..*", "0..*", "ServiceLocation", "CustomerAgreements"],
                            ["ServiceCategory", "0..1", "0..*", "ServiceCategory", "CustomerAgreements"],
                            ["DemandResponsePrograms", "0..*", "0..*", "DemandResponseProgram", "CustomerAgreements"],
                            ["UsagePoints", "0..*", "0..1", "UsagePoint", "CustomerAgreement"],
                            ["MeterReadings", "0..*", "0..1", "MeterReading", "CustomerAgreement"],
                            ["AuxiliaryAgreements", "0..*", "0..1", "AuxiliaryAgreement", "CustomerAgreement"],
                            ["PricingStructures", "0..*", "0..*", "PricingStructure", "CustomerAgreements"]
                        ]
                    )
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
                let bucket = cim_data.IncidentHazard;
                if (null == bucket)
                   cim_data.IncidentHazard = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.IncidentHazard[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Hazard.prototype.parse.call (this, context, sub);
                obj.cls = "IncidentHazard";
                base.parse_attribute (/<cim:IncidentHazard.TroubleTicket\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TroubleTicket", sub, context);
                base.parse_attribute (/<cim:IncidentHazard.Incident\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Incident", sub, context);
                let bucket = context.parsed.IncidentHazard;
                if (null == bucket)
                   context.parsed.IncidentHazard = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Hazard.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "IncidentHazard", "TroubleTicket", "TroubleTicket", fields);
                base.export_attribute (obj, "IncidentHazard", "Incident", "Incident", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#IncidentHazard_collapse" aria-expanded="true" aria-controls="IncidentHazard_collapse" style="margin-left: 10px;">IncidentHazard</a></legend>
                    <div id="IncidentHazard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Hazard.prototype.template.call (this) +
                    `
                    {{#TroubleTicket}}<div><b>TroubleTicket</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{TroubleTicket}}");}); return false;'>{{TroubleTicket}}</a></div>{{/TroubleTicket}}
                    {{#Incident}}<div><b>Incident</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Incident}}");}); return false;'>{{Incident}}</a></div>{{/Incident}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_IncidentHazard_collapse" aria-expanded="true" aria-controls="{{id}}_IncidentHazard_collapse" style="margin-left: 10px;">IncidentHazard</a></legend>
                    <div id="{{id}}_IncidentHazard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Hazard.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TroubleTicket'>TroubleTicket: </label><div class='col-sm-8'><input id='{{id}}_TroubleTicket' class='form-control' type='text'{{#TroubleTicket}} value='{{TroubleTicket}}'{{/TroubleTicket}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Incident'>Incident: </label><div class='col-sm-8'><input id='{{id}}_Incident' class='form-control' type='text'{{#Incident}} value='{{Incident}}'{{/Incident}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "IncidentHazard" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_TroubleTicket").value; if ("" !== temp) obj["TroubleTicket"] = temp;
                temp = document.getElementById (id + "_Incident").value; if ("" !== temp) obj["Incident"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TroubleTicket", "0..1", "0..*", "TroubleTicket", "IncidentHazard"],
                            ["Incident", "0..1", "0..*", "Incident", "IncidentHazard"]
                        ]
                    )
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
                let bucket = cim_data.CustomerAccount;
                if (null == bucket)
                   cim_data.CustomerAccount = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CustomerAccount[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "CustomerAccount";
                base.parse_element (/<cim:CustomerAccount.billingCycle>([\s\S]*?)<\/cim:CustomerAccount.billingCycle>/g, obj, "billingCycle", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerAccount.budgetBill>([\s\S]*?)<\/cim:CustomerAccount.budgetBill>/g, obj, "budgetBill", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerAccount.lastBillAmount>([\s\S]*?)<\/cim:CustomerAccount.lastBillAmount>/g, obj, "lastBillAmount", base.to_string, sub, context);
                base.parse_attributes (/<cim:CustomerAccount.WorkBillingInfos\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkBillingInfos", sub, context);
                base.parse_attributes (/<cim:CustomerAccount.PaymentTransactions\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PaymentTransactions", sub, context);
                base.parse_attribute (/<cim:CustomerAccount.Customer\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Customer", sub, context);
                base.parse_attributes (/<cim:CustomerAccount.CustomerAgreements\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAgreements", sub, context);
                base.parse_attributes (/<cim:CustomerAccount.ErpInvoicees\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpInvoicees", sub, context);
                base.parse_attributes (/<cim:CustomerAccount.CustomerBillingInfos\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CustomerBillingInfos", sub, context);
                base.parse_attributes (/<cim:CustomerAccount.AccountNotification\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AccountNotification", sub, context);
                let bucket = context.parsed.CustomerAccount;
                if (null == bucket)
                   context.parsed.CustomerAccount = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "CustomerAccount", "billingCycle", "billingCycle",  base.from_string, fields);
                base.export_element (obj, "CustomerAccount", "budgetBill", "budgetBill",  base.from_string, fields);
                base.export_element (obj, "CustomerAccount", "lastBillAmount", "lastBillAmount",  base.from_string, fields);
                base.export_attributes (obj, "CustomerAccount", "WorkBillingInfos", "WorkBillingInfos", fields);
                base.export_attributes (obj, "CustomerAccount", "PaymentTransactions", "PaymentTransactions", fields);
                base.export_attribute (obj, "CustomerAccount", "Customer", "Customer", fields);
                base.export_attributes (obj, "CustomerAccount", "CustomerAgreements", "CustomerAgreements", fields);
                base.export_attributes (obj, "CustomerAccount", "ErpInvoicees", "ErpInvoicees", fields);
                base.export_attributes (obj, "CustomerAccount", "CustomerBillingInfos", "CustomerBillingInfos", fields);
                base.export_attributes (obj, "CustomerAccount", "AccountNotification", "AccountNotification", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CustomerAccount_collapse" aria-expanded="true" aria-controls="CustomerAccount_collapse" style="margin-left: 10px;">CustomerAccount</a></legend>
                    <div id="CustomerAccount_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#billingCycle}}<div><b>billingCycle</b>: {{billingCycle}}</div>{{/billingCycle}}
                    {{#budgetBill}}<div><b>budgetBill</b>: {{budgetBill}}</div>{{/budgetBill}}
                    {{#lastBillAmount}}<div><b>lastBillAmount</b>: {{lastBillAmount}}</div>{{/lastBillAmount}}
                    {{#WorkBillingInfos}}<div><b>WorkBillingInfos</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/WorkBillingInfos}}
                    {{#PaymentTransactions}}<div><b>PaymentTransactions</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/PaymentTransactions}}
                    {{#Customer}}<div><b>Customer</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Customer}}");}); return false;'>{{Customer}}</a></div>{{/Customer}}
                    {{#CustomerAgreements}}<div><b>CustomerAgreements</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CustomerAgreements}}
                    {{#ErpInvoicees}}<div><b>ErpInvoicees</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ErpInvoicees}}
                    {{#CustomerBillingInfos}}<div><b>CustomerBillingInfos</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CustomerBillingInfos}}
                    {{#AccountNotification}}<div><b>AccountNotification</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AccountNotification}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["WorkBillingInfos"]) obj["WorkBillingInfos_string"] = obj["WorkBillingInfos"].join ();
                if (obj["PaymentTransactions"]) obj["PaymentTransactions_string"] = obj["PaymentTransactions"].join ();
                if (obj["CustomerAgreements"]) obj["CustomerAgreements_string"] = obj["CustomerAgreements"].join ();
                if (obj["ErpInvoicees"]) obj["ErpInvoicees_string"] = obj["ErpInvoicees"].join ();
                if (obj["CustomerBillingInfos"]) obj["CustomerBillingInfos_string"] = obj["CustomerBillingInfos"].join ();
                if (obj["AccountNotification"]) obj["AccountNotification_string"] = obj["AccountNotification"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["WorkBillingInfos_string"];
                delete obj["PaymentTransactions_string"];
                delete obj["CustomerAgreements_string"];
                delete obj["ErpInvoicees_string"];
                delete obj["CustomerBillingInfos_string"];
                delete obj["AccountNotification_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CustomerAccount_collapse" aria-expanded="true" aria-controls="{{id}}_CustomerAccount_collapse" style="margin-left: 10px;">CustomerAccount</a></legend>
                    <div id="{{id}}_CustomerAccount_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_billingCycle'>billingCycle: </label><div class='col-sm-8'><input id='{{id}}_billingCycle' class='form-control' type='text'{{#billingCycle}} value='{{billingCycle}}'{{/billingCycle}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_budgetBill'>budgetBill: </label><div class='col-sm-8'><input id='{{id}}_budgetBill' class='form-control' type='text'{{#budgetBill}} value='{{budgetBill}}'{{/budgetBill}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lastBillAmount'>lastBillAmount: </label><div class='col-sm-8'><input id='{{id}}_lastBillAmount' class='form-control' type='text'{{#lastBillAmount}} value='{{lastBillAmount}}'{{/lastBillAmount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Customer'>Customer: </label><div class='col-sm-8'><input id='{{id}}_Customer' class='form-control' type='text'{{#Customer}} value='{{Customer}}'{{/Customer}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CustomerAccount" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_billingCycle").value; if ("" !== temp) obj["billingCycle"] = temp;
                temp = document.getElementById (id + "_budgetBill").value; if ("" !== temp) obj["budgetBill"] = temp;
                temp = document.getElementById (id + "_lastBillAmount").value; if ("" !== temp) obj["lastBillAmount"] = temp;
                temp = document.getElementById (id + "_Customer").value; if ("" !== temp) obj["Customer"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WorkBillingInfos", "0..*", "0..1", "WorkBillingInfo", "CustomerAccount"],
                            ["PaymentTransactions", "0..*", "0..1", "Transaction", "CustomerAccount"],
                            ["Customer", "1", "0..*", "Customer", "CustomerAccounts"],
                            ["CustomerAgreements", "0..*", "1", "CustomerAgreement", "CustomerAccount"],
                            ["ErpInvoicees", "0..*", "0..1", "ErpInvoice", "CustomerAccount"],
                            ["CustomerBillingInfos", "0..*", "0..1", "CustomerBillingInfo", "CustomerAccount"],
                            ["AccountNotification", "0..*", "1", "AccountNotification", "CustomerAccount"]
                        ]
                    )
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
                let bucket = cim_data.PricingStructure;
                if (null == bucket)
                   cim_data.PricingStructure = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PricingStructure[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "PricingStructure";
                base.parse_element (/<cim:PricingStructure.code>([\s\S]*?)<\/cim:PricingStructure.code>/g, obj, "code", base.to_string, sub, context);
                base.parse_element (/<cim:PricingStructure.dailyCeilingUsage>([\s\S]*?)<\/cim:PricingStructure.dailyCeilingUsage>/g, obj, "dailyCeilingUsage", base.to_string, sub, context);
                base.parse_element (/<cim:PricingStructure.dailyEstimatedUsage>([\s\S]*?)<\/cim:PricingStructure.dailyEstimatedUsage>/g, obj, "dailyEstimatedUsage", base.to_string, sub, context);
                base.parse_element (/<cim:PricingStructure.dailyFloorUsage>([\s\S]*?)<\/cim:PricingStructure.dailyFloorUsage>/g, obj, "dailyFloorUsage", base.to_string, sub, context);
                base.parse_attribute (/<cim:PricingStructure.revenueKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "revenueKind", sub, context);
                base.parse_element (/<cim:PricingStructure.taxExemption>([\s\S]*?)<\/cim:PricingStructure.taxExemption>/g, obj, "taxExemption", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:PricingStructure.Transactions\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Transactions", sub, context);
                base.parse_attribute (/<cim:PricingStructure.ServiceCategory\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ServiceCategory", sub, context);
                base.parse_attributes (/<cim:PricingStructure.Tariffs\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Tariffs", sub, context);
                base.parse_attributes (/<cim:PricingStructure.CustomerAgreements\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAgreements", sub, context);
                base.parse_attributes (/<cim:PricingStructure.UsagePoints\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "UsagePoints", sub, context);
                let bucket = context.parsed.PricingStructure;
                if (null == bucket)
                   context.parsed.PricingStructure = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "PricingStructure", "code", "code",  base.from_string, fields);
                base.export_element (obj, "PricingStructure", "dailyCeilingUsage", "dailyCeilingUsage",  base.from_string, fields);
                base.export_element (obj, "PricingStructure", "dailyEstimatedUsage", "dailyEstimatedUsage",  base.from_string, fields);
                base.export_element (obj, "PricingStructure", "dailyFloorUsage", "dailyFloorUsage",  base.from_string, fields);
                base.export_attribute (obj, "PricingStructure", "revenueKind", "revenueKind", fields);
                base.export_element (obj, "PricingStructure", "taxExemption", "taxExemption",  base.from_boolean, fields);
                base.export_attributes (obj, "PricingStructure", "Transactions", "Transactions", fields);
                base.export_attribute (obj, "PricingStructure", "ServiceCategory", "ServiceCategory", fields);
                base.export_attributes (obj, "PricingStructure", "Tariffs", "Tariffs", fields);
                base.export_attributes (obj, "PricingStructure", "CustomerAgreements", "CustomerAgreements", fields);
                base.export_attributes (obj, "PricingStructure", "UsagePoints", "UsagePoints", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PricingStructure_collapse" aria-expanded="true" aria-controls="PricingStructure_collapse" style="margin-left: 10px;">PricingStructure</a></legend>
                    <div id="PricingStructure_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#code}}<div><b>code</b>: {{code}}</div>{{/code}}
                    {{#dailyCeilingUsage}}<div><b>dailyCeilingUsage</b>: {{dailyCeilingUsage}}</div>{{/dailyCeilingUsage}}
                    {{#dailyEstimatedUsage}}<div><b>dailyEstimatedUsage</b>: {{dailyEstimatedUsage}}</div>{{/dailyEstimatedUsage}}
                    {{#dailyFloorUsage}}<div><b>dailyFloorUsage</b>: {{dailyFloorUsage}}</div>{{/dailyFloorUsage}}
                    {{#revenueKind}}<div><b>revenueKind</b>: {{revenueKind}}</div>{{/revenueKind}}
                    {{#taxExemption}}<div><b>taxExemption</b>: {{taxExemption}}</div>{{/taxExemption}}
                    {{#Transactions}}<div><b>Transactions</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Transactions}}
                    {{#ServiceCategory}}<div><b>ServiceCategory</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ServiceCategory}}");}); return false;'>{{ServiceCategory}}</a></div>{{/ServiceCategory}}
                    {{#Tariffs}}<div><b>Tariffs</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Tariffs}}
                    {{#CustomerAgreements}}<div><b>CustomerAgreements</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CustomerAgreements}}
                    {{#UsagePoints}}<div><b>UsagePoints</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/UsagePoints}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["revenueKindRevenueKind"] = [{ id: '', selected: (!obj["revenueKind"])}]; for (let property in RevenueKind) obj["revenueKindRevenueKind"].push ({ id: property, selected: obj["revenueKind"] && obj["revenueKind"].endsWith ('.' + property)});
                if (obj["Transactions"]) obj["Transactions_string"] = obj["Transactions"].join ();
                if (obj["Tariffs"]) obj["Tariffs_string"] = obj["Tariffs"].join ();
                if (obj["CustomerAgreements"]) obj["CustomerAgreements_string"] = obj["CustomerAgreements"].join ();
                if (obj["UsagePoints"]) obj["UsagePoints_string"] = obj["UsagePoints"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["revenueKindRevenueKind"];
                delete obj["Transactions_string"];
                delete obj["Tariffs_string"];
                delete obj["CustomerAgreements_string"];
                delete obj["UsagePoints_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PricingStructure_collapse" aria-expanded="true" aria-controls="{{id}}_PricingStructure_collapse" style="margin-left: 10px;">PricingStructure</a></legend>
                    <div id="{{id}}_PricingStructure_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_code'>code: </label><div class='col-sm-8'><input id='{{id}}_code' class='form-control' type='text'{{#code}} value='{{code}}'{{/code}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dailyCeilingUsage'>dailyCeilingUsage: </label><div class='col-sm-8'><input id='{{id}}_dailyCeilingUsage' class='form-control' type='text'{{#dailyCeilingUsage}} value='{{dailyCeilingUsage}}'{{/dailyCeilingUsage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dailyEstimatedUsage'>dailyEstimatedUsage: </label><div class='col-sm-8'><input id='{{id}}_dailyEstimatedUsage' class='form-control' type='text'{{#dailyEstimatedUsage}} value='{{dailyEstimatedUsage}}'{{/dailyEstimatedUsage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dailyFloorUsage'>dailyFloorUsage: </label><div class='col-sm-8'><input id='{{id}}_dailyFloorUsage' class='form-control' type='text'{{#dailyFloorUsage}} value='{{dailyFloorUsage}}'{{/dailyFloorUsage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_revenueKind'>revenueKind: </label><div class='col-sm-8'><select id='{{id}}_revenueKind' class='form-control custom-select'>{{#revenueKindRevenueKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/revenueKindRevenueKind}}</select></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_taxExemption'>taxExemption: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_taxExemption' class='form-check-input' type='checkbox'{{#taxExemption}} checked{{/taxExemption}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ServiceCategory'>ServiceCategory: </label><div class='col-sm-8'><input id='{{id}}_ServiceCategory' class='form-control' type='text'{{#ServiceCategory}} value='{{ServiceCategory}}'{{/ServiceCategory}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Tariffs'>Tariffs: </label><div class='col-sm-8'><input id='{{id}}_Tariffs' class='form-control' type='text'{{#Tariffs}} value='{{Tariffs_string}}'{{/Tariffs}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CustomerAgreements'>CustomerAgreements: </label><div class='col-sm-8'><input id='{{id}}_CustomerAgreements' class='form-control' type='text'{{#CustomerAgreements}} value='{{CustomerAgreements_string}}'{{/CustomerAgreements}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_UsagePoints'>UsagePoints: </label><div class='col-sm-8'><input id='{{id}}_UsagePoints' class='form-control' type='text'{{#UsagePoints}} value='{{UsagePoints_string}}'{{/UsagePoints}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PricingStructure" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_code").value; if ("" !== temp) obj["code"] = temp;
                temp = document.getElementById (id + "_dailyCeilingUsage").value; if ("" !== temp) obj["dailyCeilingUsage"] = temp;
                temp = document.getElementById (id + "_dailyEstimatedUsage").value; if ("" !== temp) obj["dailyEstimatedUsage"] = temp;
                temp = document.getElementById (id + "_dailyFloorUsage").value; if ("" !== temp) obj["dailyFloorUsage"] = temp;
                temp = RevenueKind[document.getElementById (id + "_revenueKind").value]; if (temp) obj["revenueKind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#RevenueKind." + temp; else delete obj["revenueKind"];
                temp = document.getElementById (id + "_taxExemption").checked; if (temp) obj["taxExemption"] = true;
                temp = document.getElementById (id + "_ServiceCategory").value; if ("" !== temp) obj["ServiceCategory"] = temp;
                temp = document.getElementById (id + "_Tariffs").value; if ("" !== temp) obj["Tariffs"] = temp.split (",");
                temp = document.getElementById (id + "_CustomerAgreements").value; if ("" !== temp) obj["CustomerAgreements"] = temp.split (",");
                temp = document.getElementById (id + "_UsagePoints").value; if ("" !== temp) obj["UsagePoints"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Transactions", "0..*", "0..1", "Transaction", "PricingStructure"],
                            ["ServiceCategory", "1", "0..*", "ServiceCategory", "PricingStructures"],
                            ["Tariffs", "0..*", "0..*", "Tariff", "PricingStructures"],
                            ["CustomerAgreements", "0..*", "0..*", "CustomerAgreement", "PricingStructures"],
                            ["UsagePoints", "0..*", "0..*", "UsagePoint", "PricingStructures"]
                        ]
                    )
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
                let bucket = cim_data.Tariff;
                if (null == bucket)
                   cim_data.Tariff = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Tariff[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "Tariff";
                base.parse_element (/<cim:Tariff.endDate>([\s\S]*?)<\/cim:Tariff.endDate>/g, obj, "endDate", base.to_string, sub, context);
                base.parse_element (/<cim:Tariff.startDate>([\s\S]*?)<\/cim:Tariff.startDate>/g, obj, "startDate", base.to_string, sub, context);
                base.parse_attributes (/<cim:Tariff.TariffProfiles\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TariffProfiles", sub, context);
                base.parse_attributes (/<cim:Tariff.PricingStructures\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PricingStructures", sub, context);
                let bucket = context.parsed.Tariff;
                if (null == bucket)
                   context.parsed.Tariff = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "Tariff", "endDate", "endDate",  base.from_string, fields);
                base.export_element (obj, "Tariff", "startDate", "startDate",  base.from_string, fields);
                base.export_attributes (obj, "Tariff", "TariffProfiles", "TariffProfiles", fields);
                base.export_attributes (obj, "Tariff", "PricingStructures", "PricingStructures", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Tariff_collapse" aria-expanded="true" aria-controls="Tariff_collapse" style="margin-left: 10px;">Tariff</a></legend>
                    <div id="Tariff_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#endDate}}<div><b>endDate</b>: {{endDate}}</div>{{/endDate}}
                    {{#startDate}}<div><b>startDate</b>: {{startDate}}</div>{{/startDate}}
                    {{#TariffProfiles}}<div><b>TariffProfiles</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TariffProfiles}}
                    {{#PricingStructures}}<div><b>PricingStructures</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/PricingStructures}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["TariffProfiles"]) obj["TariffProfiles_string"] = obj["TariffProfiles"].join ();
                if (obj["PricingStructures"]) obj["PricingStructures_string"] = obj["PricingStructures"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["TariffProfiles_string"];
                delete obj["PricingStructures_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Tariff_collapse" aria-expanded="true" aria-controls="{{id}}_Tariff_collapse" style="margin-left: 10px;">Tariff</a></legend>
                    <div id="{{id}}_Tariff_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_endDate'>endDate: </label><div class='col-sm-8'><input id='{{id}}_endDate' class='form-control' type='text'{{#endDate}} value='{{endDate}}'{{/endDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_startDate'>startDate: </label><div class='col-sm-8'><input id='{{id}}_startDate' class='form-control' type='text'{{#startDate}} value='{{startDate}}'{{/startDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TariffProfiles'>TariffProfiles: </label><div class='col-sm-8'><input id='{{id}}_TariffProfiles' class='form-control' type='text'{{#TariffProfiles}} value='{{TariffProfiles_string}}'{{/TariffProfiles}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PricingStructures'>PricingStructures: </label><div class='col-sm-8'><input id='{{id}}_PricingStructures' class='form-control' type='text'{{#PricingStructures}} value='{{PricingStructures_string}}'{{/PricingStructures}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Tariff" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_endDate").value; if ("" !== temp) obj["endDate"] = temp;
                temp = document.getElementById (id + "_startDate").value; if ("" !== temp) obj["startDate"] = temp;
                temp = document.getElementById (id + "_TariffProfiles").value; if ("" !== temp) obj["TariffProfiles"] = temp.split (",");
                temp = document.getElementById (id + "_PricingStructures").value; if ("" !== temp) obj["PricingStructures"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TariffProfiles", "0..*", "0..*", "TariffProfile", "Tariffs"],
                            ["PricingStructures", "0..*", "0..*", "PricingStructure", "Tariffs"]
                        ]
                    )
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
                let bucket = cim_data.ServiceLocation;
                if (null == bucket)
                   cim_data.ServiceLocation = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ServiceLocation[obj.id];
            }

            parse (context, sub)
            {
                let obj = Work.WorkLocation.prototype.parse.call (this, context, sub);
                obj.cls = "ServiceLocation";
                base.parse_element (/<cim:ServiceLocation.accessMethod>([\s\S]*?)<\/cim:ServiceLocation.accessMethod>/g, obj, "accessMethod", base.to_string, sub, context);
                base.parse_element (/<cim:ServiceLocation.needsInspection>([\s\S]*?)<\/cim:ServiceLocation.needsInspection>/g, obj, "needsInspection", base.to_boolean, sub, context);
                base.parse_element (/<cim:ServiceLocation.siteAccessProblem>([\s\S]*?)<\/cim:ServiceLocation.siteAccessProblem>/g, obj, "siteAccessProblem", base.to_string, sub, context);
                base.parse_attributes (/<cim:ServiceLocation.TroubleTicket\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TroubleTicket", sub, context);
                base.parse_attributes (/<cim:ServiceLocation.EndDevices\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EndDevices", sub, context);
                base.parse_attributes (/<cim:ServiceLocation.CustomerAgreements\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAgreements", sub, context);
                base.parse_attributes (/<cim:ServiceLocation.UsagePoints\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "UsagePoints", sub, context);
                let bucket = context.parsed.ServiceLocation;
                if (null == bucket)
                   context.parsed.ServiceLocation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Work.WorkLocation.prototype.export.call (this, obj, false);

                base.export_element (obj, "ServiceLocation", "accessMethod", "accessMethod",  base.from_string, fields);
                base.export_element (obj, "ServiceLocation", "needsInspection", "needsInspection",  base.from_boolean, fields);
                base.export_element (obj, "ServiceLocation", "siteAccessProblem", "siteAccessProblem",  base.from_string, fields);
                base.export_attributes (obj, "ServiceLocation", "TroubleTicket", "TroubleTicket", fields);
                base.export_attributes (obj, "ServiceLocation", "EndDevices", "EndDevices", fields);
                base.export_attributes (obj, "ServiceLocation", "CustomerAgreements", "CustomerAgreements", fields);
                base.export_attributes (obj, "ServiceLocation", "UsagePoints", "UsagePoints", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ServiceLocation_collapse" aria-expanded="true" aria-controls="ServiceLocation_collapse" style="margin-left: 10px;">ServiceLocation</a></legend>
                    <div id="ServiceLocation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Work.WorkLocation.prototype.template.call (this) +
                    `
                    {{#accessMethod}}<div><b>accessMethod</b>: {{accessMethod}}</div>{{/accessMethod}}
                    {{#needsInspection}}<div><b>needsInspection</b>: {{needsInspection}}</div>{{/needsInspection}}
                    {{#siteAccessProblem}}<div><b>siteAccessProblem</b>: {{siteAccessProblem}}</div>{{/siteAccessProblem}}
                    {{#TroubleTicket}}<div><b>TroubleTicket</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TroubleTicket}}
                    {{#EndDevices}}<div><b>EndDevices</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EndDevices}}
                    {{#CustomerAgreements}}<div><b>CustomerAgreements</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CustomerAgreements}}
                    {{#UsagePoints}}<div><b>UsagePoints</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/UsagePoints}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["TroubleTicket"]) obj["TroubleTicket_string"] = obj["TroubleTicket"].join ();
                if (obj["EndDevices"]) obj["EndDevices_string"] = obj["EndDevices"].join ();
                if (obj["CustomerAgreements"]) obj["CustomerAgreements_string"] = obj["CustomerAgreements"].join ();
                if (obj["UsagePoints"]) obj["UsagePoints_string"] = obj["UsagePoints"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["TroubleTicket_string"];
                delete obj["EndDevices_string"];
                delete obj["CustomerAgreements_string"];
                delete obj["UsagePoints_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ServiceLocation_collapse" aria-expanded="true" aria-controls="{{id}}_ServiceLocation_collapse" style="margin-left: 10px;">ServiceLocation</a></legend>
                    <div id="{{id}}_ServiceLocation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Work.WorkLocation.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_accessMethod'>accessMethod: </label><div class='col-sm-8'><input id='{{id}}_accessMethod' class='form-control' type='text'{{#accessMethod}} value='{{accessMethod}}'{{/accessMethod}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_needsInspection'>needsInspection: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_needsInspection' class='form-check-input' type='checkbox'{{#needsInspection}} checked{{/needsInspection}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_siteAccessProblem'>siteAccessProblem: </label><div class='col-sm-8'><input id='{{id}}_siteAccessProblem' class='form-control' type='text'{{#siteAccessProblem}} value='{{siteAccessProblem}}'{{/siteAccessProblem}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CustomerAgreements'>CustomerAgreements: </label><div class='col-sm-8'><input id='{{id}}_CustomerAgreements' class='form-control' type='text'{{#CustomerAgreements}} value='{{CustomerAgreements_string}}'{{/CustomerAgreements}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ServiceLocation" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_accessMethod").value; if ("" !== temp) obj["accessMethod"] = temp;
                temp = document.getElementById (id + "_needsInspection").checked; if (temp) obj["needsInspection"] = true;
                temp = document.getElementById (id + "_siteAccessProblem").value; if ("" !== temp) obj["siteAccessProblem"] = temp;
                temp = document.getElementById (id + "_CustomerAgreements").value; if ("" !== temp) obj["CustomerAgreements"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TroubleTicket", "0..*", "1", "TroubleTicket", "ServiceLocation"],
                            ["EndDevices", "0..*", "0..1", "EndDevice", "ServiceLocation"],
                            ["CustomerAgreements", "0..*", "0..*", "CustomerAgreement", "ServiceLocations"],
                            ["UsagePoints", "0..*", "0..1", "UsagePoint", "ServiceLocation"]
                        ]
                    )
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
                let bucket = cim_data.Customer;
                if (null == bucket)
                   cim_data.Customer = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Customer[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.OrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "Customer";
                base.parse_attribute (/<cim:Customer.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:Customer.locale>([\s\S]*?)<\/cim:Customer.locale>/g, obj, "locale", base.to_string, sub, context);
                base.parse_attribute (/<cim:Customer.priority\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "priority", sub, context);
                base.parse_element (/<cim:Customer.pucNumber>([\s\S]*?)<\/cim:Customer.pucNumber>/g, obj, "pucNumber", base.to_string, sub, context);
                base.parse_element (/<cim:Customer.specialNeed>([\s\S]*?)<\/cim:Customer.specialNeed>/g, obj, "specialNeed", base.to_string, sub, context);
                base.parse_attribute (/<cim:Customer.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_element (/<cim:Customer.vip>([\s\S]*?)<\/cim:Customer.vip>/g, obj, "vip", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:Customer.Works\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Works", sub, context);
                base.parse_attribute (/<cim:Customer.OutagePlan\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OutagePlan", sub, context);
                base.parse_attributes (/<cim:Customer.CustomerAccounts\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAccounts", sub, context);
                base.parse_attributes (/<cim:Customer.CustomerAgreements\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAgreements", sub, context);
                base.parse_attributes (/<cim:Customer.CustomerNotifications\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CustomerNotifications", sub, context);
                base.parse_attributes (/<cim:Customer.ErpPersons\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpPersons", sub, context);
                base.parse_attributes (/<cim:Customer.PlannedOutageNotification\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PlannedOutageNotification", sub, context);
                base.parse_attributes (/<cim:Customer.Customer\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Customer", sub, context);
                base.parse_attributes (/<cim:Customer.Customer\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Customer", sub, context);
                base.parse_attributes (/<cim:Customer.TroubleTickets\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TroubleTickets", sub, context);
                base.parse_attributes (/<cim:Customer.EndDevices\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EndDevices", sub, context);
                let bucket = context.parsed.Customer;
                if (null == bucket)
                   context.parsed.Customer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.OrganisationRole.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Customer", "kind", "kind", fields);
                base.export_element (obj, "Customer", "locale", "locale",  base.from_string, fields);
                base.export_attribute (obj, "Customer", "priority", "priority", fields);
                base.export_element (obj, "Customer", "pucNumber", "pucNumber",  base.from_string, fields);
                base.export_element (obj, "Customer", "specialNeed", "specialNeed",  base.from_string, fields);
                base.export_attribute (obj, "Customer", "status", "status", fields);
                base.export_element (obj, "Customer", "vip", "vip",  base.from_boolean, fields);
                base.export_attributes (obj, "Customer", "Works", "Works", fields);
                base.export_attribute (obj, "Customer", "OutagePlan", "OutagePlan", fields);
                base.export_attributes (obj, "Customer", "CustomerAccounts", "CustomerAccounts", fields);
                base.export_attributes (obj, "Customer", "CustomerAgreements", "CustomerAgreements", fields);
                base.export_attributes (obj, "Customer", "CustomerNotifications", "CustomerNotifications", fields);
                base.export_attributes (obj, "Customer", "ErpPersons", "ErpPersons", fields);
                base.export_attributes (obj, "Customer", "PlannedOutageNotification", "PlannedOutageNotification", fields);
                base.export_attributes (obj, "Customer", "Customer", "Customer", fields);
                base.export_attributes (obj, "Customer", "Customer", "Customer", fields);
                base.export_attributes (obj, "Customer", "TroubleTickets", "TroubleTickets", fields);
                base.export_attributes (obj, "Customer", "EndDevices", "EndDevices", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Customer_collapse" aria-expanded="true" aria-controls="Customer_collapse" style="margin-left: 10px;">Customer</a></legend>
                    <div id="Customer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#locale}}<div><b>locale</b>: {{locale}}</div>{{/locale}}
                    {{#priority}}<div><b>priority</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{priority}}");}); return false;'>{{priority}}</a></div>{{/priority}}
                    {{#pucNumber}}<div><b>pucNumber</b>: {{pucNumber}}</div>{{/pucNumber}}
                    {{#specialNeed}}<div><b>specialNeed</b>: {{specialNeed}}</div>{{/specialNeed}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{status}}");}); return false;'>{{status}}</a></div>{{/status}}
                    {{#vip}}<div><b>vip</b>: {{vip}}</div>{{/vip}}
                    {{#Works}}<div><b>Works</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Works}}
                    {{#OutagePlan}}<div><b>OutagePlan</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{OutagePlan}}");}); return false;'>{{OutagePlan}}</a></div>{{/OutagePlan}}
                    {{#CustomerAccounts}}<div><b>CustomerAccounts</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CustomerAccounts}}
                    {{#CustomerAgreements}}<div><b>CustomerAgreements</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CustomerAgreements}}
                    {{#CustomerNotifications}}<div><b>CustomerNotifications</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CustomerNotifications}}
                    {{#ErpPersons}}<div><b>ErpPersons</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ErpPersons}}
                    {{#PlannedOutageNotification}}<div><b>PlannedOutageNotification</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/PlannedOutageNotification}}
                    {{#Customer}}<div><b>Customer</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Customer}}
                    {{#Customer}}<div><b>Customer</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Customer}}
                    {{#TroubleTickets}}<div><b>TroubleTickets</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TroubleTickets}}
                    {{#EndDevices}}<div><b>EndDevices</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EndDevices}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindCustomerKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in CustomerKind) obj["kindCustomerKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
                if (obj["Works"]) obj["Works_string"] = obj["Works"].join ();
                if (obj["CustomerAccounts"]) obj["CustomerAccounts_string"] = obj["CustomerAccounts"].join ();
                if (obj["CustomerAgreements"]) obj["CustomerAgreements_string"] = obj["CustomerAgreements"].join ();
                if (obj["CustomerNotifications"]) obj["CustomerNotifications_string"] = obj["CustomerNotifications"].join ();
                if (obj["ErpPersons"]) obj["ErpPersons_string"] = obj["ErpPersons"].join ();
                if (obj["PlannedOutageNotification"]) obj["PlannedOutageNotification_string"] = obj["PlannedOutageNotification"].join ();
                if (obj["Customer"]) obj["Customer_string"] = obj["Customer"].join ();
                if (obj["Customer"]) obj["Customer_string"] = obj["Customer"].join ();
                if (obj["TroubleTickets"]) obj["TroubleTickets_string"] = obj["TroubleTickets"].join ();
                if (obj["EndDevices"]) obj["EndDevices_string"] = obj["EndDevices"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindCustomerKind"];
                delete obj["Works_string"];
                delete obj["CustomerAccounts_string"];
                delete obj["CustomerAgreements_string"];
                delete obj["CustomerNotifications_string"];
                delete obj["ErpPersons_string"];
                delete obj["PlannedOutageNotification_string"];
                delete obj["Customer_string"];
                delete obj["Customer_string"];
                delete obj["TroubleTickets_string"];
                delete obj["EndDevices_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Customer_collapse" aria-expanded="true" aria-controls="{{id}}_Customer_collapse" style="margin-left: 10px;">Customer</a></legend>
                    <div id="{{id}}_Customer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindCustomerKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindCustomerKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_locale'>locale: </label><div class='col-sm-8'><input id='{{id}}_locale' class='form-control' type='text'{{#locale}} value='{{locale}}'{{/locale}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_priority'>priority: </label><div class='col-sm-8'><input id='{{id}}_priority' class='form-control' type='text'{{#priority}} value='{{priority}}'{{/priority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pucNumber'>pucNumber: </label><div class='col-sm-8'><input id='{{id}}_pucNumber' class='form-control' type='text'{{#pucNumber}} value='{{pucNumber}}'{{/pucNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_specialNeed'>specialNeed: </label><div class='col-sm-8'><input id='{{id}}_specialNeed' class='form-control' type='text'{{#specialNeed}} value='{{specialNeed}}'{{/specialNeed}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_vip'>vip: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_vip' class='form-check-input' type='checkbox'{{#vip}} checked{{/vip}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Works'>Works: </label><div class='col-sm-8'><input id='{{id}}_Works' class='form-control' type='text'{{#Works}} value='{{Works_string}}'{{/Works}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OutagePlan'>OutagePlan: </label><div class='col-sm-8'><input id='{{id}}_OutagePlan' class='form-control' type='text'{{#OutagePlan}} value='{{OutagePlan}}'{{/OutagePlan}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PlannedOutageNotification'>PlannedOutageNotification: </label><div class='col-sm-8'><input id='{{id}}_PlannedOutageNotification' class='form-control' type='text'{{#PlannedOutageNotification}} value='{{PlannedOutageNotification_string}}'{{/PlannedOutageNotification}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Customer" };
                super.submit (id, obj);
                temp = CustomerKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#CustomerKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_locale").value; if ("" !== temp) obj["locale"] = temp;
                temp = document.getElementById (id + "_priority").value; if ("" !== temp) obj["priority"] = temp;
                temp = document.getElementById (id + "_pucNumber").value; if ("" !== temp) obj["pucNumber"] = temp;
                temp = document.getElementById (id + "_specialNeed").value; if ("" !== temp) obj["specialNeed"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_vip").checked; if (temp) obj["vip"] = true;
                temp = document.getElementById (id + "_Works").value; if ("" !== temp) obj["Works"] = temp.split (",");
                temp = document.getElementById (id + "_OutagePlan").value; if ("" !== temp) obj["OutagePlan"] = temp;
                temp = document.getElementById (id + "_PlannedOutageNotification").value; if ("" !== temp) obj["PlannedOutageNotification"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Works", "0..*", "0..*", "Work", "Customers"],
                            ["OutagePlan", "0..1", "0..*", "OutagePlan", "Customer"],
                            ["CustomerAccounts", "0..*", "1", "CustomerAccount", "Customer"],
                            ["CustomerAgreements", "0..*", "1", "CustomerAgreement", "Customer"],
                            ["CustomerNotifications", "0..*", "0..1", "CustomerNotification", "Customer"],
                            ["ErpPersons", "0..*", "0..1", "OldPerson", "CustomerData"],
                            ["PlannedOutageNotification", "0..*", "0..*", "PlannedOutageNotification", "Customer"],
                            ["Customer", "0..*", "", "Customer", "Customer"],
                            ["Customer", "", "0..*", "Customer", "Customer"],
                            ["TroubleTickets", "0..*", "0..1", "TroubleTicket", "Customer"],
                            ["EndDevices", "0..*", "0..1", "EndDevice", "Customer"]
                        ]
                    )
                );
            }
        }

        /**
         * Conditions for notifying the customer about the changes in the status of their service (e.g., outage restore, estimated restoration time, tariff or service level change, etc.)
         *
         */
        class CustomerNotification extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.CustomerNotification;
                if (null == bucket)
                   cim_data.CustomerNotification = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CustomerNotification[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CustomerNotification";
                base.parse_element (/<cim:CustomerNotification.contactType>([\s\S]*?)<\/cim:CustomerNotification.contactType>/g, obj, "contactType", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerNotification.contactValue>([\s\S]*?)<\/cim:CustomerNotification.contactValue>/g, obj, "contactValue", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerNotification.earliestDateTimeToCall>([\s\S]*?)<\/cim:CustomerNotification.earliestDateTimeToCall>/g, obj, "earliestDateTimeToCall", base.to_datetime, sub, context);
                base.parse_element (/<cim:CustomerNotification.latestDateTimeToCall>([\s\S]*?)<\/cim:CustomerNotification.latestDateTimeToCall>/g, obj, "latestDateTimeToCall", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:CustomerNotification.trigger\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "trigger", sub, context);
                base.parse_attributes (/<cim:CustomerNotification.TroubleTickets\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TroubleTickets", sub, context);
                base.parse_attribute (/<cim:CustomerNotification.Customer\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Customer", sub, context);
                base.parse_attribute (/<cim:CustomerNotification.Incident\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Incident", sub, context);
                let bucket = context.parsed.CustomerNotification;
                if (null == bucket)
                   context.parsed.CustomerNotification = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "CustomerNotification", "contactType", "contactType",  base.from_string, fields);
                base.export_element (obj, "CustomerNotification", "contactValue", "contactValue",  base.from_string, fields);
                base.export_element (obj, "CustomerNotification", "earliestDateTimeToCall", "earliestDateTimeToCall",  base.from_datetime, fields);
                base.export_element (obj, "CustomerNotification", "latestDateTimeToCall", "latestDateTimeToCall",  base.from_datetime, fields);
                base.export_attribute (obj, "CustomerNotification", "trigger", "trigger", fields);
                base.export_attributes (obj, "CustomerNotification", "TroubleTickets", "TroubleTickets", fields);
                base.export_attribute (obj, "CustomerNotification", "Customer", "Customer", fields);
                base.export_attribute (obj, "CustomerNotification", "Incident", "Incident", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CustomerNotification_collapse" aria-expanded="true" aria-controls="CustomerNotification_collapse" style="margin-left: 10px;">CustomerNotification</a></legend>
                    <div id="CustomerNotification_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#contactType}}<div><b>contactType</b>: {{contactType}}</div>{{/contactType}}
                    {{#contactValue}}<div><b>contactValue</b>: {{contactValue}}</div>{{/contactValue}}
                    {{#earliestDateTimeToCall}}<div><b>earliestDateTimeToCall</b>: {{earliestDateTimeToCall}}</div>{{/earliestDateTimeToCall}}
                    {{#latestDateTimeToCall}}<div><b>latestDateTimeToCall</b>: {{latestDateTimeToCall}}</div>{{/latestDateTimeToCall}}
                    {{#trigger}}<div><b>trigger</b>: {{trigger}}</div>{{/trigger}}
                    {{#TroubleTickets}}<div><b>TroubleTickets</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TroubleTickets}}
                    {{#Customer}}<div><b>Customer</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Customer}}");}); return false;'>{{Customer}}</a></div>{{/Customer}}
                    {{#Incident}}<div><b>Incident</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Incident}}");}); return false;'>{{Incident}}</a></div>{{/Incident}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["triggerNotificationTriggerKind"] = [{ id: '', selected: (!obj["trigger"])}]; for (let property in NotificationTriggerKind) obj["triggerNotificationTriggerKind"].push ({ id: property, selected: obj["trigger"] && obj["trigger"].endsWith ('.' + property)});
                if (obj["TroubleTickets"]) obj["TroubleTickets_string"] = obj["TroubleTickets"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["triggerNotificationTriggerKind"];
                delete obj["TroubleTickets_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CustomerNotification_collapse" aria-expanded="true" aria-controls="{{id}}_CustomerNotification_collapse" style="margin-left: 10px;">CustomerNotification</a></legend>
                    <div id="{{id}}_CustomerNotification_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_contactType'>contactType: </label><div class='col-sm-8'><input id='{{id}}_contactType' class='form-control' type='text'{{#contactType}} value='{{contactType}}'{{/contactType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_contactValue'>contactValue: </label><div class='col-sm-8'><input id='{{id}}_contactValue' class='form-control' type='text'{{#contactValue}} value='{{contactValue}}'{{/contactValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_earliestDateTimeToCall'>earliestDateTimeToCall: </label><div class='col-sm-8'><input id='{{id}}_earliestDateTimeToCall' class='form-control' type='text'{{#earliestDateTimeToCall}} value='{{earliestDateTimeToCall}}'{{/earliestDateTimeToCall}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_latestDateTimeToCall'>latestDateTimeToCall: </label><div class='col-sm-8'><input id='{{id}}_latestDateTimeToCall' class='form-control' type='text'{{#latestDateTimeToCall}} value='{{latestDateTimeToCall}}'{{/latestDateTimeToCall}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_trigger'>trigger: </label><div class='col-sm-8'><select id='{{id}}_trigger' class='form-control custom-select'>{{#triggerNotificationTriggerKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/triggerNotificationTriggerKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TroubleTickets'>TroubleTickets: </label><div class='col-sm-8'><input id='{{id}}_TroubleTickets' class='form-control' type='text'{{#TroubleTickets}} value='{{TroubleTickets_string}}'{{/TroubleTickets}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Customer'>Customer: </label><div class='col-sm-8'><input id='{{id}}_Customer' class='form-control' type='text'{{#Customer}} value='{{Customer}}'{{/Customer}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Incident'>Incident: </label><div class='col-sm-8'><input id='{{id}}_Incident' class='form-control' type='text'{{#Incident}} value='{{Incident}}'{{/Incident}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CustomerNotification" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_contactType").value; if ("" !== temp) obj["contactType"] = temp;
                temp = document.getElementById (id + "_contactValue").value; if ("" !== temp) obj["contactValue"] = temp;
                temp = document.getElementById (id + "_earliestDateTimeToCall").value; if ("" !== temp) obj["earliestDateTimeToCall"] = temp;
                temp = document.getElementById (id + "_latestDateTimeToCall").value; if ("" !== temp) obj["latestDateTimeToCall"] = temp;
                temp = NotificationTriggerKind[document.getElementById (id + "_trigger").value]; if (temp) obj["trigger"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#NotificationTriggerKind." + temp; else delete obj["trigger"];
                temp = document.getElementById (id + "_TroubleTickets").value; if ("" !== temp) obj["TroubleTickets"] = temp.split (",");
                temp = document.getElementById (id + "_Customer").value; if ("" !== temp) obj["Customer"] = temp;
                temp = document.getElementById (id + "_Incident").value; if ("" !== temp) obj["Incident"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TroubleTickets", "0..*", "0..*", "TroubleTicket", "Notification"],
                            ["Customer", "0..1", "0..*", "Customer", "CustomerNotifications"],
                            ["Incident", "0..1", "0..*", "Incident", "CustomerNotifications"]
                        ]
                    )
                );
            }
        }

        class TroubleTicket extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.TroubleTicket;
                if (null == bucket)
                   cim_data.TroubleTicket = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TroubleTicket[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "TroubleTicket";
                base.parse_element (/<cim:TroubleTicket.comment>([\s\S]*?)<\/cim:TroubleTicket.comment>/g, obj, "comment", base.to_string, sub, context);
                base.parse_element (/<cim:TroubleTicket.dateTimeOfReport>([\s\S]*?)<\/cim:TroubleTicket.dateTimeOfReport>/g, obj, "dateTimeOfReport", base.to_datetime, sub, context);
                base.parse_element (/<cim:TroubleTicket.firstResponderStatus>([\s\S]*?)<\/cim:TroubleTicket.firstResponderStatus>/g, obj, "firstResponderStatus", base.to_string, sub, context);
                base.parse_element (/<cim:TroubleTicket.multiplePremises>([\s\S]*?)<\/cim:TroubleTicket.multiplePremises>/g, obj, "multiplePremises", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:TroubleTicket.reportingKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "reportingKind", sub, context);
                base.parse_element (/<cim:TroubleTicket.resolvedDateTime>([\s\S]*?)<\/cim:TroubleTicket.resolvedDateTime>/g, obj, "resolvedDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:TroubleTicket.troubleCode>([\s\S]*?)<\/cim:TroubleTicket.troubleCode>/g, obj, "troubleCode", base.to_string, sub, context);
                base.parse_attributes (/<cim:TroubleTicket.Notification\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Notification", sub, context);
                base.parse_attribute (/<cim:TroubleTicket.UnplannedOutage\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "UnplannedOutage", sub, context);
                base.parse_attribute (/<cim:TroubleTicket.ServiceLocation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ServiceLocation", sub, context);
                base.parse_attributes (/<cim:TroubleTicket.IncidentHazard\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "IncidentHazard", sub, context);
                base.parse_attribute (/<cim:TroubleTicket.Incident\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Incident", sub, context);
                base.parse_attribute (/<cim:TroubleTicket.TroubleOrder\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TroubleOrder", sub, context);
                base.parse_attribute (/<cim:TroubleTicket.Customer\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Customer", sub, context);
                let bucket = context.parsed.TroubleTicket;
                if (null == bucket)
                   context.parsed.TroubleTicket = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "TroubleTicket", "comment", "comment",  base.from_string, fields);
                base.export_element (obj, "TroubleTicket", "dateTimeOfReport", "dateTimeOfReport",  base.from_datetime, fields);
                base.export_element (obj, "TroubleTicket", "firstResponderStatus", "firstResponderStatus",  base.from_string, fields);
                base.export_element (obj, "TroubleTicket", "multiplePremises", "multiplePremises",  base.from_boolean, fields);
                base.export_attribute (obj, "TroubleTicket", "reportingKind", "reportingKind", fields);
                base.export_element (obj, "TroubleTicket", "resolvedDateTime", "resolvedDateTime",  base.from_datetime, fields);
                base.export_element (obj, "TroubleTicket", "troubleCode", "troubleCode",  base.from_string, fields);
                base.export_attributes (obj, "TroubleTicket", "Notification", "Notification", fields);
                base.export_attribute (obj, "TroubleTicket", "UnplannedOutage", "UnplannedOutage", fields);
                base.export_attribute (obj, "TroubleTicket", "ServiceLocation", "ServiceLocation", fields);
                base.export_attributes (obj, "TroubleTicket", "IncidentHazard", "IncidentHazard", fields);
                base.export_attribute (obj, "TroubleTicket", "Incident", "Incident", fields);
                base.export_attribute (obj, "TroubleTicket", "TroubleOrder", "TroubleOrder", fields);
                base.export_attribute (obj, "TroubleTicket", "Customer", "Customer", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TroubleTicket_collapse" aria-expanded="true" aria-controls="TroubleTicket_collapse" style="margin-left: 10px;">TroubleTicket</a></legend>
                    <div id="TroubleTicket_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#comment}}<div><b>comment</b>: {{comment}}</div>{{/comment}}
                    {{#dateTimeOfReport}}<div><b>dateTimeOfReport</b>: {{dateTimeOfReport}}</div>{{/dateTimeOfReport}}
                    {{#firstResponderStatus}}<div><b>firstResponderStatus</b>: {{firstResponderStatus}}</div>{{/firstResponderStatus}}
                    {{#multiplePremises}}<div><b>multiplePremises</b>: {{multiplePremises}}</div>{{/multiplePremises}}
                    {{#reportingKind}}<div><b>reportingKind</b>: {{reportingKind}}</div>{{/reportingKind}}
                    {{#resolvedDateTime}}<div><b>resolvedDateTime</b>: {{resolvedDateTime}}</div>{{/resolvedDateTime}}
                    {{#troubleCode}}<div><b>troubleCode</b>: {{troubleCode}}</div>{{/troubleCode}}
                    {{#Notification}}<div><b>Notification</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Notification}}
                    {{#UnplannedOutage}}<div><b>UnplannedOutage</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{UnplannedOutage}}");}); return false;'>{{UnplannedOutage}}</a></div>{{/UnplannedOutage}}
                    {{#ServiceLocation}}<div><b>ServiceLocation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ServiceLocation}}");}); return false;'>{{ServiceLocation}}</a></div>{{/ServiceLocation}}
                    {{#IncidentHazard}}<div><b>IncidentHazard</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/IncidentHazard}}
                    {{#Incident}}<div><b>Incident</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Incident}}");}); return false;'>{{Incident}}</a></div>{{/Incident}}
                    {{#TroubleOrder}}<div><b>TroubleOrder</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{TroubleOrder}}");}); return false;'>{{TroubleOrder}}</a></div>{{/TroubleOrder}}
                    {{#Customer}}<div><b>Customer</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Customer}}");}); return false;'>{{Customer}}</a></div>{{/Customer}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["reportingKindTroubleReportingKind"] = [{ id: '', selected: (!obj["reportingKind"])}]; for (let property in TroubleReportingKind) obj["reportingKindTroubleReportingKind"].push ({ id: property, selected: obj["reportingKind"] && obj["reportingKind"].endsWith ('.' + property)});
                if (obj["Notification"]) obj["Notification_string"] = obj["Notification"].join ();
                if (obj["IncidentHazard"]) obj["IncidentHazard_string"] = obj["IncidentHazard"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["reportingKindTroubleReportingKind"];
                delete obj["Notification_string"];
                delete obj["IncidentHazard_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TroubleTicket_collapse" aria-expanded="true" aria-controls="{{id}}_TroubleTicket_collapse" style="margin-left: 10px;">TroubleTicket</a></legend>
                    <div id="{{id}}_TroubleTicket_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_comment'>comment: </label><div class='col-sm-8'><input id='{{id}}_comment' class='form-control' type='text'{{#comment}} value='{{comment}}'{{/comment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dateTimeOfReport'>dateTimeOfReport: </label><div class='col-sm-8'><input id='{{id}}_dateTimeOfReport' class='form-control' type='text'{{#dateTimeOfReport}} value='{{dateTimeOfReport}}'{{/dateTimeOfReport}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_firstResponderStatus'>firstResponderStatus: </label><div class='col-sm-8'><input id='{{id}}_firstResponderStatus' class='form-control' type='text'{{#firstResponderStatus}} value='{{firstResponderStatus}}'{{/firstResponderStatus}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_multiplePremises'>multiplePremises: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_multiplePremises' class='form-check-input' type='checkbox'{{#multiplePremises}} checked{{/multiplePremises}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_reportingKind'>reportingKind: </label><div class='col-sm-8'><select id='{{id}}_reportingKind' class='form-control custom-select'>{{#reportingKindTroubleReportingKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/reportingKindTroubleReportingKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_resolvedDateTime'>resolvedDateTime: </label><div class='col-sm-8'><input id='{{id}}_resolvedDateTime' class='form-control' type='text'{{#resolvedDateTime}} value='{{resolvedDateTime}}'{{/resolvedDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_troubleCode'>troubleCode: </label><div class='col-sm-8'><input id='{{id}}_troubleCode' class='form-control' type='text'{{#troubleCode}} value='{{troubleCode}}'{{/troubleCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Notification'>Notification: </label><div class='col-sm-8'><input id='{{id}}_Notification' class='form-control' type='text'{{#Notification}} value='{{Notification_string}}'{{/Notification}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_UnplannedOutage'>UnplannedOutage: </label><div class='col-sm-8'><input id='{{id}}_UnplannedOutage' class='form-control' type='text'{{#UnplannedOutage}} value='{{UnplannedOutage}}'{{/UnplannedOutage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ServiceLocation'>ServiceLocation: </label><div class='col-sm-8'><input id='{{id}}_ServiceLocation' class='form-control' type='text'{{#ServiceLocation}} value='{{ServiceLocation}}'{{/ServiceLocation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Incident'>Incident: </label><div class='col-sm-8'><input id='{{id}}_Incident' class='form-control' type='text'{{#Incident}} value='{{Incident}}'{{/Incident}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TroubleOrder'>TroubleOrder: </label><div class='col-sm-8'><input id='{{id}}_TroubleOrder' class='form-control' type='text'{{#TroubleOrder}} value='{{TroubleOrder}}'{{/TroubleOrder}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Customer'>Customer: </label><div class='col-sm-8'><input id='{{id}}_Customer' class='form-control' type='text'{{#Customer}} value='{{Customer}}'{{/Customer}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "TroubleTicket" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_comment").value; if ("" !== temp) obj["comment"] = temp;
                temp = document.getElementById (id + "_dateTimeOfReport").value; if ("" !== temp) obj["dateTimeOfReport"] = temp;
                temp = document.getElementById (id + "_firstResponderStatus").value; if ("" !== temp) obj["firstResponderStatus"] = temp;
                temp = document.getElementById (id + "_multiplePremises").checked; if (temp) obj["multiplePremises"] = true;
                temp = TroubleReportingKind[document.getElementById (id + "_reportingKind").value]; if (temp) obj["reportingKind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#TroubleReportingKind." + temp; else delete obj["reportingKind"];
                temp = document.getElementById (id + "_resolvedDateTime").value; if ("" !== temp) obj["resolvedDateTime"] = temp;
                temp = document.getElementById (id + "_troubleCode").value; if ("" !== temp) obj["troubleCode"] = temp;
                temp = document.getElementById (id + "_Notification").value; if ("" !== temp) obj["Notification"] = temp.split (",");
                temp = document.getElementById (id + "_UnplannedOutage").value; if ("" !== temp) obj["UnplannedOutage"] = temp;
                temp = document.getElementById (id + "_ServiceLocation").value; if ("" !== temp) obj["ServiceLocation"] = temp;
                temp = document.getElementById (id + "_Incident").value; if ("" !== temp) obj["Incident"] = temp;
                temp = document.getElementById (id + "_TroubleOrder").value; if ("" !== temp) obj["TroubleOrder"] = temp;
                temp = document.getElementById (id + "_Customer").value; if ("" !== temp) obj["Customer"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Notification", "0..*", "0..*", "CustomerNotification", "TroubleTickets"],
                            ["UnplannedOutage", "0..1", "0..*", "UnplannedOutage", "TroubleTicket"],
                            ["ServiceLocation", "1", "0..*", "ServiceLocation", "TroubleTicket"],
                            ["IncidentHazard", "0..*", "0..1", "IncidentHazard", "TroubleTicket"],
                            ["Incident", "0..1", "0..*", "Incident", "TroubleTickets"],
                            ["TroubleOrder", "0..1", "0..*", "TroubleOrder", "TroubleTicket"],
                            ["Customer", "0..1", "0..*", "Customer", "TroubleTickets"]
                        ]
                    )
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
                let bucket = cim_data.ServiceCategory;
                if (null == bucket)
                   cim_data.ServiceCategory = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ServiceCategory[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ServiceCategory";
                base.parse_attribute (/<cim:ServiceCategory.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attributes (/<cim:ServiceCategory.UsagePoints\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "UsagePoints", sub, context);
                base.parse_attributes (/<cim:ServiceCategory.ConfigurationEvents\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ConfigurationEvents", sub, context);
                base.parse_attributes (/<cim:ServiceCategory.CustomerAgreements\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAgreements", sub, context);
                base.parse_attributes (/<cim:ServiceCategory.PricingStructures\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PricingStructures", sub, context);
                let bucket = context.parsed.ServiceCategory;
                if (null == bucket)
                   context.parsed.ServiceCategory = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ServiceCategory", "kind", "kind", fields);
                base.export_attributes (obj, "ServiceCategory", "UsagePoints", "UsagePoints", fields);
                base.export_attributes (obj, "ServiceCategory", "ConfigurationEvents", "ConfigurationEvents", fields);
                base.export_attributes (obj, "ServiceCategory", "CustomerAgreements", "CustomerAgreements", fields);
                base.export_attributes (obj, "ServiceCategory", "PricingStructures", "PricingStructures", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ServiceCategory_collapse" aria-expanded="true" aria-controls="ServiceCategory_collapse" style="margin-left: 10px;">ServiceCategory</a></legend>
                    <div id="ServiceCategory_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#UsagePoints}}<div><b>UsagePoints</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/UsagePoints}}
                    {{#ConfigurationEvents}}<div><b>ConfigurationEvents</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ConfigurationEvents}}
                    {{#CustomerAgreements}}<div><b>CustomerAgreements</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CustomerAgreements}}
                    {{#PricingStructures}}<div><b>PricingStructures</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/PricingStructures}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindServiceKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in ServiceKind) obj["kindServiceKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
                if (obj["UsagePoints"]) obj["UsagePoints_string"] = obj["UsagePoints"].join ();
                if (obj["ConfigurationEvents"]) obj["ConfigurationEvents_string"] = obj["ConfigurationEvents"].join ();
                if (obj["CustomerAgreements"]) obj["CustomerAgreements_string"] = obj["CustomerAgreements"].join ();
                if (obj["PricingStructures"]) obj["PricingStructures_string"] = obj["PricingStructures"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindServiceKind"];
                delete obj["UsagePoints_string"];
                delete obj["ConfigurationEvents_string"];
                delete obj["CustomerAgreements_string"];
                delete obj["PricingStructures_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ServiceCategory_collapse" aria-expanded="true" aria-controls="{{id}}_ServiceCategory_collapse" style="margin-left: 10px;">ServiceCategory</a></legend>
                    <div id="{{id}}_ServiceCategory_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindServiceKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindServiceKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ServiceCategory" };
                super.submit (id, obj);
                temp = ServiceKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#ServiceKind." + temp; else delete obj["kind"];

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["UsagePoints", "0..*", "0..1", "UsagePoint", "ServiceCategory"],
                            ["ConfigurationEvents", "0..*", "0..1", "ConfigurationEvent", "ChangedServiceCategory"],
                            ["CustomerAgreements", "0..*", "0..1", "CustomerAgreement", "ServiceCategory"],
                            ["PricingStructures", "0..*", "1", "PricingStructure", "ServiceCategory"]
                        ]
                    )
                );
            }
        }

        return (
            {
                RevenueKind: RevenueKind,
                CustomerKind: CustomerKind,
                CustomerAccount: CustomerAccount,
                PricingStructure: PricingStructure,
                TroubleTicket: TroubleTicket,
                TroubleCallKind: TroubleCallKind,
                CustomerNotification: CustomerNotification,
                ServiceKind: ServiceKind,
                Customer: Customer,
                TroubleReportingKind: TroubleReportingKind,
                IncidentHazard: IncidentHazard,
                Tariff: Tariff,
                ServiceCategory: ServiceCategory,
                AccountNotification: AccountNotification,
                ServiceLocation: ServiceLocation,
                NotificationTriggerKind: NotificationTriggerKind,
                CustomerAgreement: CustomerAgreement
            }
        );
    }
);