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
        function parse_CustomerNotification (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CustomerNotification";
            base.parse_element (/<cim:CustomerNotification.trigger>([\s\S]*?)<\/cim:CustomerNotification.trigger>/g, obj, "trigger", base.to_string, sub, context);
            base.parse_element (/<cim:CustomerNotification.earliestDateTimeToCall>([\s\S]*?)<\/cim:CustomerNotification.earliestDateTimeToCall>/g, obj, "earliestDateTimeToCall", base.to_datetime, sub, context);
            base.parse_element (/<cim:CustomerNotification.latestDateTimeToCall>([\s\S]*?)<\/cim:CustomerNotification.latestDateTimeToCall>/g, obj, "latestDateTimeToCall", base.to_datetime, sub, context);
            base.parse_element (/<cim:CustomerNotification.contactType>([\s\S]*?)<\/cim:CustomerNotification.contactType>/g, obj, "contactType", base.to_string, sub, context);
            base.parse_element (/<cim:CustomerNotification.contactValue>([\s\S]*?)<\/cim:CustomerNotification.contactValue>/g, obj, "contactValue", base.to_string, sub, context);
            base.parse_attribute (/<cim:CustomerNotification.Customer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Customer", sub, context);
            base.parse_attribute (/<cim:CustomerNotification.Incident\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Incident", sub, context);
            bucket = context.parsed.CustomerNotification;
            if (null == bucket)
                context.parsed.CustomerNotification = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CustomerNotification (obj, exporters, full)
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
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Grouping of pricing components and prices used in the creation of customer charges and the eligibility criteria under which these terms may be offered to a customer.
         *
         * The reasons for grouping include state, customer classification, site characteristics, classification (i.e. fee price structure, deposit price structure, electric service price structure, etc.) and accounting requirements.
         *
         */
        function parse_PricingStructure (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "PricingStructure";
            base.parse_element (/<cim:PricingStructure.code>([\s\S]*?)<\/cim:PricingStructure.code>/g, obj, "code", base.to_string, sub, context);
            base.parse_element (/<cim:PricingStructure.dailyCeilingUsage>([\s\S]*?)<\/cim:PricingStructure.dailyCeilingUsage>/g, obj, "dailyCeilingUsage", base.to_string, sub, context);
            base.parse_element (/<cim:PricingStructure.dailyEstimatedUsage>([\s\S]*?)<\/cim:PricingStructure.dailyEstimatedUsage>/g, obj, "dailyEstimatedUsage", base.to_string, sub, context);
            base.parse_element (/<cim:PricingStructure.dailyFloorUsage>([\s\S]*?)<\/cim:PricingStructure.dailyFloorUsage>/g, obj, "dailyFloorUsage", base.to_string, sub, context);
            base.parse_element (/<cim:PricingStructure.revenueKind>([\s\S]*?)<\/cim:PricingStructure.revenueKind>/g, obj, "revenueKind", base.to_string, sub, context);
            base.parse_element (/<cim:PricingStructure.taxExemption>([\s\S]*?)<\/cim:PricingStructure.taxExemption>/g, obj, "taxExemption", base.to_boolean, sub, context);
            base.parse_attribute (/<cim:PricingStructure.ServiceCategory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ServiceCategory", sub, context);
            bucket = context.parsed.PricingStructure;
            if (null == bucket)
                context.parsed.PricingStructure = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PricingStructure (obj, exporters, full)
        {
            var fields = exporters["Document"](obj, exporters, false);

            base.export_element (obj, "PricingStructure", "code", base.from_string, fields);
            base.export_element (obj, "PricingStructure", "dailyCeilingUsage", base.from_string, fields);
            base.export_element (obj, "PricingStructure", "dailyEstimatedUsage", base.from_string, fields);
            base.export_element (obj, "PricingStructure", "dailyFloorUsage", base.from_string, fields);
            base.export_element (obj, "PricingStructure", "revenueKind", base.from_string, fields);
            base.export_element (obj, "PricingStructure", "taxExemption", base.from_boolean, fields);
            base.export_attribute (obj, "PricingStructure", "ServiceCategory", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Kind of customer.
         *
         */
        function parse_CustomerKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
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
            bucket = context.parsed.CustomerKind;
            if (null == bucket)
                context.parsed.CustomerKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CustomerKind (obj, exporters, full)
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
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Document, approved by the responsible regulatory agency, listing the terms and conditions, including a schedule of prices, under which utility services will be provided.
         *
         * It has a unique number within the state or province. For rate schedules it is frequently allocated by the affiliated Public utilities commission (PUC).
         *
         */
        function parse_Tariff (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "Tariff";
            base.parse_element (/<cim:Tariff.endDate>([\s\S]*?)<\/cim:Tariff.endDate>/g, obj, "endDate", base.to_string, sub, context);
            base.parse_element (/<cim:Tariff.startDate>([\s\S]*?)<\/cim:Tariff.startDate>/g, obj, "startDate", base.to_string, sub, context);
            bucket = context.parsed.Tariff;
            if (null == bucket)
                context.parsed.Tariff = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Tariff (obj, exporters, full)
        {
            var fields = exporters["Document"](obj, exporters, false);

            base.export_element (obj, "Tariff", "endDate", base.from_string, fields);
            base.export_element (obj, "Tariff", "startDate", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Organisation receiving services from service supplier.
         *
         */
        function parse_Customer (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_OrganisationRole (context, sub);
            obj.cls = "Customer";
            base.parse_element (/<cim:Customer.kind>([\s\S]*?)<\/cim:Customer.kind>/g, obj, "kind", base.to_string, sub, context);
            base.parse_element (/<cim:Customer.pucNumber>([\s\S]*?)<\/cim:Customer.pucNumber>/g, obj, "pucNumber", base.to_string, sub, context);
            base.parse_element (/<cim:Customer.specialNeed>([\s\S]*?)<\/cim:Customer.specialNeed>/g, obj, "specialNeed", base.to_string, sub, context);
            base.parse_element (/<cim:Customer.status>([\s\S]*?)<\/cim:Customer.status>/g, obj, "status", base.to_string, sub, context);
            base.parse_element (/<cim:Customer.vip>([\s\S]*?)<\/cim:Customer.vip>/g, obj, "vip", base.to_boolean, sub, context);
            base.parse_element (/<cim:Customer.priority>([\s\S]*?)<\/cim:Customer.priority>/g, obj, "priority", base.to_string, sub, context);
            base.parse_element (/<cim:Customer.locale>([\s\S]*?)<\/cim:Customer.locale>/g, obj, "locale", base.to_string, sub, context);
            bucket = context.parsed.Customer;
            if (null == bucket)
                context.parsed.Customer = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Customer (obj, exporters, full)
        {
            var fields = exporters["OrganisationRole"](obj, exporters, false);

            base.export_element (obj, "Customer", "kind", base.from_string, fields);
            base.export_element (obj, "Customer", "pucNumber", base.from_string, fields);
            base.export_element (obj, "Customer", "specialNeed", base.from_string, fields);
            base.export_element (obj, "Customer", "status", base.from_string, fields);
            base.export_element (obj, "Customer", "vip", base.from_boolean, fields);
            base.export_element (obj, "Customer", "priority", base.from_string, fields);
            base.export_element (obj, "Customer", "locale", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Kind of trouble reporting.
         *
         */
        function parse_TroubleReportingKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TroubleReportingKind";
            base.parse_element (/<cim:TroubleReportingKind.call>([\s\S]*?)<\/cim:TroubleReportingKind.call>/g, obj, "call", base.to_string, sub, context);
            base.parse_element (/<cim:TroubleReportingKind.email>([\s\S]*?)<\/cim:TroubleReportingKind.email>/g, obj, "email", base.to_string, sub, context);
            base.parse_element (/<cim:TroubleReportingKind.letter>([\s\S]*?)<\/cim:TroubleReportingKind.letter>/g, obj, "letter", base.to_string, sub, context);
            base.parse_element (/<cim:TroubleReportingKind.other>([\s\S]*?)<\/cim:TroubleReportingKind.other>/g, obj, "other", base.to_string, sub, context);
            base.parse_element (/<cim:TroubleReportingKind.ivr>([\s\S]*?)<\/cim:TroubleReportingKind.ivr>/g, obj, "ivr", base.to_string, sub, context);
            bucket = context.parsed.TroubleReportingKind;
            if (null == bucket)
                context.parsed.TroubleReportingKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TroubleReportingKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "TroubleReportingKind", "call", base.from_string, fields);
            base.export_element (obj, "TroubleReportingKind", "email", base.from_string, fields);
            base.export_element (obj, "TroubleReportingKind", "letter", base.from_string, fields);
            base.export_element (obj, "TroubleReportingKind", "other", base.from_string, fields);
            base.export_element (obj, "TroubleReportingKind", "ivr", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Kind of service.
         *
         */
        function parse_ServiceKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
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
            bucket = context.parsed.ServiceKind;
            if (null == bucket)
                context.parsed.ServiceKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ServiceKind (obj, exporters, full)
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
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Hazardous situation associated with an incident.
         *
         * Examples are line down, gas leak, fire, etc.
         *
         */
        function parse_IncidentHazard (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Hazard (context, sub);
            obj.cls = "IncidentHazard";
            base.parse_attribute (/<cim:IncidentHazard.Incident\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Incident", sub, context);
            base.parse_attribute (/<cim:IncidentHazard.TroubleTicket\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TroubleTicket", sub, context);
            bucket = context.parsed.IncidentHazard;
            if (null == bucket)
                context.parsed.IncidentHazard = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_IncidentHazard (obj, exporters, full)
        {
            var fields = exporters["Hazard"](obj, exporters, false);

            base.export_attribute (obj, "IncidentHazard", "Incident", fields);
            base.export_attribute (obj, "IncidentHazard", "TroubleTicket", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Kind of trigger to notify customer.
         *
         */
        function parse_NotificationTriggerKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "NotificationTriggerKind";
            base.parse_element (/<cim:NotificationTriggerKind.initialEtr>([\s\S]*?)<\/cim:NotificationTriggerKind.initialEtr>/g, obj, "initialEtr", base.to_string, sub, context);
            base.parse_element (/<cim:NotificationTriggerKind.etrChange>([\s\S]*?)<\/cim:NotificationTriggerKind.etrChange>/g, obj, "etrChange", base.to_string, sub, context);
            base.parse_element (/<cim:NotificationTriggerKind.powerRestored>([\s\S]*?)<\/cim:NotificationTriggerKind.powerRestored>/g, obj, "powerRestored", base.to_string, sub, context);
            base.parse_element (/<cim:NotificationTriggerKind.powerOut>([\s\S]*?)<\/cim:NotificationTriggerKind.powerOut>/g, obj, "powerOut", base.to_string, sub, context);
            base.parse_element (/<cim:NotificationTriggerKind.informDispatched>([\s\S]*?)<\/cim:NotificationTriggerKind.informDispatched>/g, obj, "informDispatched", base.to_string, sub, context);
            bucket = context.parsed.NotificationTriggerKind;
            if (null == bucket)
                context.parsed.NotificationTriggerKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_NotificationTriggerKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "NotificationTriggerKind", "initialEtr", base.from_string, fields);
            base.export_element (obj, "NotificationTriggerKind", "etrChange", base.from_string, fields);
            base.export_element (obj, "NotificationTriggerKind", "powerRestored", base.from_string, fields);
            base.export_element (obj, "NotificationTriggerKind", "powerOut", base.from_string, fields);
            base.export_element (obj, "NotificationTriggerKind", "informDispatched", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Agreement between the customer and the service supplier to pay for service at a specific service location.
         *
         * It records certain billing information about the type of service provided at the service location and is used during charge creation to determine the type of service.
         *
         */
        function parse_CustomerAgreement (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Agreement (context, sub);
            obj.cls = "CustomerAgreement";
            base.parse_element (/<cim:CustomerAgreement.loadMgmt>([\s\S]*?)<\/cim:CustomerAgreement.loadMgmt>/g, obj, "loadMgmt", base.to_string, sub, context);
            base.parse_attribute (/<cim:CustomerAgreement.ServiceCategory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ServiceCategory", sub, context);
            base.parse_attribute (/<cim:CustomerAgreement.ServiceSupplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ServiceSupplier", sub, context);
            base.parse_attribute (/<cim:CustomerAgreement.Customer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Customer", sub, context);
            base.parse_attribute (/<cim:CustomerAgreement.CustomerAccount\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAccount", sub, context);
            base.parse_attribute (/<cim:CustomerAgreement.StandardIndustryCode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StandardIndustryCode", sub, context);
            bucket = context.parsed.CustomerAgreement;
            if (null == bucket)
                context.parsed.CustomerAgreement = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CustomerAgreement (obj, exporters, full)
        {
            var fields = exporters["Agreement"](obj, exporters, false);

            base.export_element (obj, "CustomerAgreement", "loadMgmt", base.from_string, fields);
            base.export_attribute (obj, "CustomerAgreement", "ServiceCategory", fields);
            base.export_attribute (obj, "CustomerAgreement", "ServiceSupplier", fields);
            base.export_attribute (obj, "CustomerAgreement", "Customer", fields);
            base.export_attribute (obj, "CustomerAgreement", "CustomerAccount", fields);
            base.export_attribute (obj, "CustomerAgreement", "StandardIndustryCode", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A real estate location, commonly referred to as premises.
         *
         */
        function parse_ServiceLocation (context, sub)
        {
            var obj;
            var bucket;

            obj = Work.parse_WorkLocation (context, sub);
            obj.cls = "ServiceLocation";
            base.parse_element (/<cim:ServiceLocation.accessMethod>([\s\S]*?)<\/cim:ServiceLocation.accessMethod>/g, obj, "accessMethod", base.to_string, sub, context);
            base.parse_element (/<cim:ServiceLocation.needsInspection>([\s\S]*?)<\/cim:ServiceLocation.needsInspection>/g, obj, "needsInspection", base.to_boolean, sub, context);
            base.parse_element (/<cim:ServiceLocation.siteAccessProblem>([\s\S]*?)<\/cim:ServiceLocation.siteAccessProblem>/g, obj, "siteAccessProblem", base.to_string, sub, context);
            bucket = context.parsed.ServiceLocation;
            if (null == bucket)
                context.parsed.ServiceLocation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ServiceLocation (obj, exporters, full)
        {
            var fields = exporters["WorkLocation"](obj, exporters, false);

            base.export_element (obj, "ServiceLocation", "accessMethod", base.from_string, fields);
            base.export_element (obj, "ServiceLocation", "needsInspection", base.from_boolean, fields);
            base.export_element (obj, "ServiceLocation", "siteAccessProblem", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Category of service provided to the customer.
         *
         */
        function parse_ServiceCategory (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ServiceCategory";
            base.parse_element (/<cim:ServiceCategory.kind>([\s\S]*?)<\/cim:ServiceCategory.kind>/g, obj, "kind", base.to_string, sub, context);
            bucket = context.parsed.ServiceCategory;
            if (null == bucket)
                context.parsed.ServiceCategory = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ServiceCategory (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "ServiceCategory", "kind", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Accounting classification of the type of revenue collected for the customer agreement, typically used to break down accounts for revenue accounting.
         *
         */
        function parse_RevenueKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "RevenueKind";
            base.parse_element (/<cim:RevenueKind.residential>([\s\S]*?)<\/cim:RevenueKind.residential>/g, obj, "residential", base.to_string, sub, context);
            base.parse_element (/<cim:RevenueKind.nonResidential>([\s\S]*?)<\/cim:RevenueKind.nonResidential>/g, obj, "nonResidential", base.to_string, sub, context);
            base.parse_element (/<cim:RevenueKind.commercial>([\s\S]*?)<\/cim:RevenueKind.commercial>/g, obj, "commercial", base.to_string, sub, context);
            base.parse_element (/<cim:RevenueKind.industrial>([\s\S]*?)<\/cim:RevenueKind.industrial>/g, obj, "industrial", base.to_string, sub, context);
            base.parse_element (/<cim:RevenueKind.irrigation>([\s\S]*?)<\/cim:RevenueKind.irrigation>/g, obj, "irrigation", base.to_string, sub, context);
            base.parse_element (/<cim:RevenueKind.streetLight>([\s\S]*?)<\/cim:RevenueKind.streetLight>/g, obj, "streetLight", base.to_string, sub, context);
            base.parse_element (/<cim:RevenueKind.other>([\s\S]*?)<\/cim:RevenueKind.other>/g, obj, "other", base.to_string, sub, context);
            bucket = context.parsed.RevenueKind;
            if (null == bucket)
                context.parsed.RevenueKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_RevenueKind (obj, exporters, full)
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
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_TroubleTicket (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "TroubleTicket";
            base.parse_element (/<cim:TroubleTicket.dateTimeOfReport>([\s\S]*?)<\/cim:TroubleTicket.dateTimeOfReport>/g, obj, "dateTimeOfReport", base.to_datetime, sub, context);
            base.parse_element (/<cim:TroubleTicket.troubleCode>([\s\S]*?)<\/cim:TroubleTicket.troubleCode>/g, obj, "troubleCode", base.to_string, sub, context);
            base.parse_element (/<cim:TroubleTicket.reportingKind>([\s\S]*?)<\/cim:TroubleTicket.reportingKind>/g, obj, "reportingKind", base.to_string, sub, context);
            base.parse_element (/<cim:TroubleTicket.resolvedDateTime>([\s\S]*?)<\/cim:TroubleTicket.resolvedDateTime>/g, obj, "resolvedDateTime", base.to_datetime, sub, context);
            base.parse_element (/<cim:TroubleTicket.firstResponder>([\s\S]*?)<\/cim:TroubleTicket.firstResponder>/g, obj, "firstResponder", base.to_string, sub, context);
            base.parse_attribute (/<cim:TroubleTicket.Notification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Notification", sub, context);
            base.parse_attribute (/<cim:TroubleTicket.Incident\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Incident", sub, context);
            base.parse_attribute (/<cim:TroubleTicket.Customer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Customer", sub, context);
            bucket = context.parsed.TroubleTicket;
            if (null == bucket)
                context.parsed.TroubleTicket = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TroubleTicket (obj, exporters, full)
        {
            var fields = exporters["Document"](obj, exporters, false);

            base.export_element (obj, "TroubleTicket", "dateTimeOfReport", base.from_datetime, fields);
            base.export_element (obj, "TroubleTicket", "troubleCode", base.from_string, fields);
            base.export_element (obj, "TroubleTicket", "reportingKind", base.from_string, fields);
            base.export_element (obj, "TroubleTicket", "resolvedDateTime", base.from_datetime, fields);
            base.export_element (obj, "TroubleTicket", "firstResponder", base.from_string, fields);
            base.export_attribute (obj, "TroubleTicket", "Notification", fields);
            base.export_attribute (obj, "TroubleTicket", "Incident", fields);
            base.export_attribute (obj, "TroubleTicket", "Customer", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Assignment of a group of products and services purchased by the customer through a customer agreement, used as a mechanism for customer billing and payment.
         *
         * It contains common information from the various types of customer agreements to create billings (invoices) for a customer and receive payment.
         *
         */
        function parse_CustomerAccount (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "CustomerAccount";
            base.parse_element (/<cim:CustomerAccount.billingCycle>([\s\S]*?)<\/cim:CustomerAccount.billingCycle>/g, obj, "billingCycle", base.to_string, sub, context);
            base.parse_element (/<cim:CustomerAccount.budgetBill>([\s\S]*?)<\/cim:CustomerAccount.budgetBill>/g, obj, "budgetBill", base.to_string, sub, context);
            base.parse_attribute (/<cim:CustomerAccount.Customer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Customer", sub, context);
            bucket = context.parsed.CustomerAccount;
            if (null == bucket)
                context.parsed.CustomerAccount = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CustomerAccount (obj, exporters, full)
        {
            var fields = exporters["Document"](obj, exporters, false);

            base.export_element (obj, "CustomerAccount", "billingCycle", base.from_string, fields);
            base.export_element (obj, "CustomerAccount", "budgetBill", base.from_string, fields);
            base.export_attribute (obj, "CustomerAccount", "Customer", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                parse_TroubleReportingKind: parse_TroubleReportingKind,
                export_ServiceKind: export_ServiceKind,
                export_TroubleTicket: export_TroubleTicket,
                export_IncidentHazard: export_IncidentHazard,
                export_Customer: export_Customer,
                parse_RevenueKind: parse_RevenueKind,
                parse_ServiceLocation: parse_ServiceLocation,
                parse_IncidentHazard: parse_IncidentHazard,
                export_ServiceCategory: export_ServiceCategory,
                parse_CustomerAgreement: parse_CustomerAgreement,
                export_CustomerAgreement: export_CustomerAgreement,
                parse_ServiceCategory: parse_ServiceCategory,
                export_NotificationTriggerKind: export_NotificationTriggerKind,
                parse_CustomerAccount: parse_CustomerAccount,
                parse_Customer: parse_Customer,
                export_RevenueKind: export_RevenueKind,
                parse_CustomerNotification: parse_CustomerNotification,
                parse_Tariff: parse_Tariff,
                export_TroubleReportingKind: export_TroubleReportingKind,
                export_CustomerNotification: export_CustomerNotification,
                parse_TroubleTicket: parse_TroubleTicket,
                export_ServiceLocation: export_ServiceLocation,
                export_PricingStructure: export_PricingStructure,
                parse_NotificationTriggerKind: parse_NotificationTriggerKind,
                parse_PricingStructure: parse_PricingStructure,
                parse_ServiceKind: parse_ServiceKind,
                parse_CustomerKind: parse_CustomerKind,
                export_Tariff: export_Tariff,
                export_CustomerKind: export_CustomerKind,
                export_CustomerAccount: export_CustomerAccount
            }
        );
    }
);