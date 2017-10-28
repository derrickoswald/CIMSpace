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
            /**
             * Trigger for this notification.
             *
             */
            base.parse_element (/<cim:CustomerNotification.trigger>([\s\S]*?)<\/cim:CustomerNotification.trigger>/g, obj, "trigger", base.to_string, sub, context);

            /**
             * Earliest date time to call the customer.
             *
             */
            base.parse_element (/<cim:CustomerNotification.earliestDateTimeToCall>([\s\S]*?)<\/cim:CustomerNotification.earliestDateTimeToCall>/g, obj, "earliestDateTimeToCall", base.to_datetime, sub, context);

            /**
             * Latest date time to call the customer.
             *
             */
            base.parse_element (/<cim:CustomerNotification.latestDateTimeToCall>([\s\S]*?)<\/cim:CustomerNotification.latestDateTimeToCall>/g, obj, "latestDateTimeToCall", base.to_datetime, sub, context);

            /**
             * Type of contact (e.g., phone, email, etc.).
             *
             */
            base.parse_element (/<cim:CustomerNotification.contactType>([\s\S]*?)<\/cim:CustomerNotification.contactType>/g, obj, "contactType", base.to_string, sub, context);

            /**
             * Value of contact type (e.g., phone number, email address, etc.).
             *
             */
            base.parse_element (/<cim:CustomerNotification.contactValue>([\s\S]*?)<\/cim:CustomerNotification.contactValue>/g, obj, "contactValue", base.to_string, sub, context);

            /**
             * Customer requiring this notification.
             *
             */
            base.parse_attribute (/<cim:CustomerNotification.Customer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Customer", sub, context, true);

            /**
             * Incident as a subject of this customer notification.
             *
             */
            base.parse_attribute (/<cim:CustomerNotification.Incident\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Incident", sub, context, true);

            bucket = context.parsed.CustomerNotification;
            if (null == bucket)
                context.parsed.CustomerNotification = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Unique user-allocated key for this pricing structure, used by company representatives to identify the correct price structure for allocating to a customer.
             *
             * For rate schedules it is often prefixed by a state code.
             *
             */
            base.parse_element (/<cim:PricingStructure.code>([\s\S]*?)<\/cim:PricingStructure.code>/g, obj, "code", base.to_string, sub, context);

            /**
             * Absolute maximum valid non-demand usage quantity used in validating a customer's billed non-demand usage.
             *
             */
            base.parse_element (/<cim:PricingStructure.dailyCeilingUsage>([\s\S]*?)<\/cim:PricingStructure.dailyCeilingUsage>/g, obj, "dailyCeilingUsage", base.to_string, sub, context);

            /**
             * Used in place of actual computed estimated average when history of usage is not available, and typically manually entered by customer accounting.
             *
             */
            base.parse_element (/<cim:PricingStructure.dailyEstimatedUsage>([\s\S]*?)<\/cim:PricingStructure.dailyEstimatedUsage>/g, obj, "dailyEstimatedUsage", base.to_string, sub, context);

            /**
             * Absolute minimum valid non-demand usage quantity used in validating a customer's billed non-demand usage.
             *
             */
            base.parse_element (/<cim:PricingStructure.dailyFloorUsage>([\s\S]*?)<\/cim:PricingStructure.dailyFloorUsage>/g, obj, "dailyFloorUsage", base.to_string, sub, context);

            /**
             * (accounting) Kind of revenue, often used to determine the grace period allowed, before collection actions are taken on a customer (grace periods vary between revenue classes).
             *
             */
            base.parse_element (/<cim:PricingStructure.revenueKind>([\s\S]*?)<\/cim:PricingStructure.revenueKind>/g, obj, "revenueKind", base.to_string, sub, context);

            /**
             * True if this pricing structure is not taxable.
             *
             */
            base.parse_element (/<cim:PricingStructure.taxExemption>([\s\S]*?)<\/cim:PricingStructure.taxExemption>/g, obj, "taxExemption", base.to_boolean, sub, context);

            /**
             * Service category to which this pricing structure applies.
             *
             */
            base.parse_attribute (/<cim:PricingStructure.ServiceCategory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ServiceCategory", sub, context, true);

            bucket = context.parsed.PricingStructure;
            if (null == bucket)
                context.parsed.PricingStructure = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Residential customer.
             *
             */
            base.parse_element (/<cim:CustomerKind.residential>([\s\S]*?)<\/cim:CustomerKind.residential>/g, obj, "residential", base.to_string, sub, context);

            /**
             * Residential and commercial customer.
             *
             */
            base.parse_element (/<cim:CustomerKind.residentialAndCommercial>([\s\S]*?)<\/cim:CustomerKind.residentialAndCommercial>/g, obj, "residentialAndCommercial", base.to_string, sub, context);

            /**
             * Residential and streetlight customer.
             *
             */
            base.parse_element (/<cim:CustomerKind.residentialAndStreetlight>([\s\S]*?)<\/cim:CustomerKind.residentialAndStreetlight>/g, obj, "residentialAndStreetlight", base.to_string, sub, context);

            /**
             * Residential streetlight or other related customer.
             *
             */
            base.parse_element (/<cim:CustomerKind.residentialStreetlightOthers>([\s\S]*?)<\/cim:CustomerKind.residentialStreetlightOthers>/g, obj, "residentialStreetlightOthers", base.to_string, sub, context);

            /**
             * Residential farm service customer.
             *
             */
            base.parse_element (/<cim:CustomerKind.residentialFarmService>([\s\S]*?)<\/cim:CustomerKind.residentialFarmService>/g, obj, "residentialFarmService", base.to_string, sub, context);

            /**
             * Commercial industrial customer.
             *
             */
            base.parse_element (/<cim:CustomerKind.commercialIndustrial>([\s\S]*?)<\/cim:CustomerKind.commercialIndustrial>/g, obj, "commercialIndustrial", base.to_string, sub, context);

            /**
             * Pumping load customer.
             *
             */
            base.parse_element (/<cim:CustomerKind.pumpingLoad>([\s\S]*?)<\/cim:CustomerKind.pumpingLoad>/g, obj, "pumpingLoad", base.to_string, sub, context);

            /**
             * Wind machine customer.
             *
             */
            base.parse_element (/<cim:CustomerKind.windMachine>([\s\S]*?)<\/cim:CustomerKind.windMachine>/g, obj, "windMachine", base.to_string, sub, context);

            /**
             * Customer as energy service supplier.
             *
             */
            base.parse_element (/<cim:CustomerKind.energyServiceSupplier>([\s\S]*?)<\/cim:CustomerKind.energyServiceSupplier>/g, obj, "energyServiceSupplier", base.to_string, sub, context);

            /**
             * Customer as energy service scheduler.
             *
             */
            base.parse_element (/<cim:CustomerKind.energyServiceScheduler>([\s\S]*?)<\/cim:CustomerKind.energyServiceScheduler>/g, obj, "energyServiceScheduler", base.to_string, sub, context);

            /**
             * Internal use customer.
             *
             */
            base.parse_element (/<cim:CustomerKind.internalUse>([\s\S]*?)<\/cim:CustomerKind.internalUse>/g, obj, "internalUse", base.to_string, sub, context);

            /**
             * Other kind of customer.
             *
             */
            base.parse_element (/<cim:CustomerKind.other>([\s\S]*?)<\/cim:CustomerKind.other>/g, obj, "other", base.to_string, sub, context);

            bucket = context.parsed.CustomerKind;
            if (null == bucket)
                context.parsed.CustomerKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * (if tariff became inactive) Date tariff was terminated.
             *
             */
            base.parse_element (/<cim:Tariff.endDate>([\s\S]*?)<\/cim:Tariff.endDate>/g, obj, "endDate", base.to_string, sub, context);

            /**
             * Date tariff was activated.
             *
             */
            base.parse_element (/<cim:Tariff.startDate>([\s\S]*?)<\/cim:Tariff.startDate>/g, obj, "startDate", base.to_string, sub, context);

            bucket = context.parsed.Tariff;
            if (null == bucket)
                context.parsed.Tariff = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Kind of customer.
             *
             */
            base.parse_element (/<cim:Customer.kind>([\s\S]*?)<\/cim:Customer.kind>/g, obj, "kind", base.to_string, sub, context);

            /**
             * (if applicable) Public utilities commission (PUC) identification number.
             *
             */
            base.parse_element (/<cim:Customer.pucNumber>([\s\S]*?)<\/cim:Customer.pucNumber>/g, obj, "pucNumber", base.to_string, sub, context);

            /**
             * True if customer organisation has special service needs such as life support, hospitals, etc.
             *
             */
            base.parse_element (/<cim:Customer.specialNeed>([\s\S]*?)<\/cim:Customer.specialNeed>/g, obj, "specialNeed", base.to_string, sub, context);

            /**
             * Status of this customer.
             *
             */
            base.parse_element (/<cim:Customer.status>([\s\S]*?)<\/cim:Customer.status>/g, obj, "status", base.to_string, sub, context);

            /**
             * (use 'priority' instead) True if this is an important customer.
             *
             * Importance is for matters different than those in 'specialNeed' attribute.
             *
             */
            base.parse_element (/<cim:Customer.vip>([\s\S]*?)<\/cim:Customer.vip>/g, obj, "vip", base.to_boolean, sub, context);

            /**
             * Priority of the customer.
             *
             */
            base.parse_element (/<cim:Customer.priority>([\s\S]*?)<\/cim:Customer.priority>/g, obj, "priority", base.to_string, sub, context);

            /**
             * Locale designating language to use in communications with this customer.
             *
             */
            base.parse_element (/<cim:Customer.locale>([\s\S]*?)<\/cim:Customer.locale>/g, obj, "locale", base.to_string, sub, context);

            bucket = context.parsed.Customer;
            if (null == bucket)
                context.parsed.Customer = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Trouble call received by customer service representative.
             *
             */
            base.parse_element (/<cim:TroubleReportingKind.call>([\s\S]*?)<\/cim:TroubleReportingKind.call>/g, obj, "call", base.to_string, sub, context);

            /**
             * Trouble reported by email.
             *
             */
            base.parse_element (/<cim:TroubleReportingKind.email>([\s\S]*?)<\/cim:TroubleReportingKind.email>/g, obj, "email", base.to_string, sub, context);

            /**
             * Trouble reported by letter.
             *
             */
            base.parse_element (/<cim:TroubleReportingKind.letter>([\s\S]*?)<\/cim:TroubleReportingKind.letter>/g, obj, "letter", base.to_string, sub, context);

            /**
             * Trouble reported by other means.
             *
             */
            base.parse_element (/<cim:TroubleReportingKind.other>([\s\S]*?)<\/cim:TroubleReportingKind.other>/g, obj, "other", base.to_string, sub, context);

            /**
             * Trouble reported through interactive voice response system.
             *
             */
            base.parse_element (/<cim:TroubleReportingKind.ivr>([\s\S]*?)<\/cim:TroubleReportingKind.ivr>/g, obj, "ivr", base.to_string, sub, context);

            bucket = context.parsed.TroubleReportingKind;
            if (null == bucket)
                context.parsed.TroubleReportingKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Electricity service.
             *
             */
            base.parse_element (/<cim:ServiceKind.electricity>([\s\S]*?)<\/cim:ServiceKind.electricity>/g, obj, "electricity", base.to_string, sub, context);

            /**
             * Gas service.
             *
             */
            base.parse_element (/<cim:ServiceKind.gas>([\s\S]*?)<\/cim:ServiceKind.gas>/g, obj, "gas", base.to_string, sub, context);

            /**
             * Water service.
             *
             */
            base.parse_element (/<cim:ServiceKind.water>([\s\S]*?)<\/cim:ServiceKind.water>/g, obj, "water", base.to_string, sub, context);

            /**
             * Time service.
             *
             */
            base.parse_element (/<cim:ServiceKind.time>([\s\S]*?)<\/cim:ServiceKind.time>/g, obj, "time", base.to_string, sub, context);

            /**
             * Heat service.
             *
             */
            base.parse_element (/<cim:ServiceKind.heat>([\s\S]*?)<\/cim:ServiceKind.heat>/g, obj, "heat", base.to_string, sub, context);

            /**
             * Refuse (waster) service.
             *
             */
            base.parse_element (/<cim:ServiceKind.refuse>([\s\S]*?)<\/cim:ServiceKind.refuse>/g, obj, "refuse", base.to_string, sub, context);

            /**
             * Sewerage service.
             *
             */
            base.parse_element (/<cim:ServiceKind.sewerage>([\s\S]*?)<\/cim:ServiceKind.sewerage>/g, obj, "sewerage", base.to_string, sub, context);

            /**
             * Rates (e.g. tax, charge, toll, duty, tariff, etc.) service.
             *
             */
            base.parse_element (/<cim:ServiceKind.rates>([\s\S]*?)<\/cim:ServiceKind.rates>/g, obj, "rates", base.to_string, sub, context);

            /**
             * TV license service.
             *
             */
            base.parse_element (/<cim:ServiceKind.tvLicence>([\s\S]*?)<\/cim:ServiceKind.tvLicence>/g, obj, "tvLicence", base.to_string, sub, context);

            /**
             * Internet service.
             *
             */
            base.parse_element (/<cim:ServiceKind.internet>([\s\S]*?)<\/cim:ServiceKind.internet>/g, obj, "internet", base.to_string, sub, context);

            /**
             * Other kind of service.
             *
             */
            base.parse_element (/<cim:ServiceKind.other>([\s\S]*?)<\/cim:ServiceKind.other>/g, obj, "other", base.to_string, sub, context);

            bucket = context.parsed.ServiceKind;
            if (null == bucket)
                context.parsed.ServiceKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Incident associated with this hazard.
             *
             */
            base.parse_attribute (/<cim:IncidentHazard.Incident\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Incident", sub, context, true);

            /**
             * Trouble ticket associated with this hazard.
             *
             */
            base.parse_attribute (/<cim:IncidentHazard.TroubleTicket\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TroubleTicket", sub, context, true);

            bucket = context.parsed.IncidentHazard;
            if (null == bucket)
                context.parsed.IncidentHazard = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Notify customer for the first time that estimated restoration time is available.
             *
             */
            base.parse_element (/<cim:NotificationTriggerKind.initialEtr>([\s\S]*?)<\/cim:NotificationTriggerKind.initialEtr>/g, obj, "initialEtr", base.to_string, sub, context);

            /**
             * Notify customer if estimated restoration time changes.
             *
             */
            base.parse_element (/<cim:NotificationTriggerKind.etrChange>([\s\S]*?)<\/cim:NotificationTriggerKind.etrChange>/g, obj, "etrChange", base.to_string, sub, context);

            /**
             * Notify customer when power has been restored.
             *
             */
            base.parse_element (/<cim:NotificationTriggerKind.powerRestored>([\s\S]*?)<\/cim:NotificationTriggerKind.powerRestored>/g, obj, "powerRestored", base.to_string, sub, context);

            /**
             * Notify customer of planned outage.
             *
             */
            base.parse_element (/<cim:NotificationTriggerKind.powerOut>([\s\S]*?)<\/cim:NotificationTriggerKind.powerOut>/g, obj, "powerOut", base.to_string, sub, context);

            /**
             * Notify customer that a crew has been dispatched to investigate the problem.
             *
             */
            base.parse_element (/<cim:NotificationTriggerKind.informDispatched>([\s\S]*?)<\/cim:NotificationTriggerKind.informDispatched>/g, obj, "informDispatched", base.to_string, sub, context);

            bucket = context.parsed.NotificationTriggerKind;
            if (null == bucket)
                context.parsed.NotificationTriggerKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Load management code.
             *
             */
            base.parse_element (/<cim:CustomerAgreement.loadMgmt>([\s\S]*?)<\/cim:CustomerAgreement.loadMgmt>/g, obj, "loadMgmt", base.to_string, sub, context);

            /**
             * Service category for this agreement.
             *
             */
            base.parse_attribute (/<cim:CustomerAgreement.ServiceCategory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ServiceCategory", sub, context, true);

            /**
             * Service supplier for this customer agreement.
             *
             */
            base.parse_attribute (/<cim:CustomerAgreement.ServiceSupplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ServiceSupplier", sub, context, true);

            /**
             * Customer for this agreement.
             *
             */
            base.parse_attribute (/<cim:CustomerAgreement.Customer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Customer", sub, context, true);

            /**
             * Customer account owning this agreement.
             *
             */
            base.parse_attribute (/<cim:CustomerAgreement.CustomerAccount\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAccount", sub, context, true);

            base.parse_attribute (/<cim:CustomerAgreement.StandardIndustryCode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StandardIndustryCode", sub, context, true);

            bucket = context.parsed.CustomerAgreement;
            if (null == bucket)
                context.parsed.CustomerAgreement = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Method for the service person to access this service location.
             *
             * For example, a description of where to obtain a key if the facility is unmanned and secured.
             *
             */
            base.parse_element (/<cim:ServiceLocation.accessMethod>([\s\S]*?)<\/cim:ServiceLocation.accessMethod>/g, obj, "accessMethod", base.to_string, sub, context);

            /**
             * True if inspection is needed of facilities at this service location.
             *
             * This could be requested by a customer, due to suspected tampering, environmental concerns (e.g., a fire in the vicinity), or to correct incompatible data.
             *
             */
            base.parse_element (/<cim:ServiceLocation.needsInspection>([\s\S]*?)<\/cim:ServiceLocation.needsInspection>/g, obj, "needsInspection", base.to_boolean, sub, context);

            /**
             * Problems previously encountered when visiting or performing work on this location.
             *
             * Examples include: bad dog, violent customer, verbally abusive occupant, obstructions, safety hazards, etc.
             *
             */
            base.parse_element (/<cim:ServiceLocation.siteAccessProblem>([\s\S]*?)<\/cim:ServiceLocation.siteAccessProblem>/g, obj, "siteAccessProblem", base.to_string, sub, context);

            bucket = context.parsed.ServiceLocation;
            if (null == bucket)
                context.parsed.ServiceLocation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Kind of service.
             *
             */
            base.parse_element (/<cim:ServiceCategory.kind>([\s\S]*?)<\/cim:ServiceCategory.kind>/g, obj, "kind", base.to_string, sub, context);

            bucket = context.parsed.ServiceCategory;
            if (null == bucket)
                context.parsed.ServiceCategory = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Residential revenue.
             *
             */
            base.parse_element (/<cim:RevenueKind.residential>([\s\S]*?)<\/cim:RevenueKind.residential>/g, obj, "residential", base.to_string, sub, context);

            /**
             * Non-residential revenue.
             *
             */
            base.parse_element (/<cim:RevenueKind.nonResidential>([\s\S]*?)<\/cim:RevenueKind.nonResidential>/g, obj, "nonResidential", base.to_string, sub, context);

            /**
             * Commercial revenue.
             *
             */
            base.parse_element (/<cim:RevenueKind.commercial>([\s\S]*?)<\/cim:RevenueKind.commercial>/g, obj, "commercial", base.to_string, sub, context);

            /**
             * Industrial revenue.
             *
             */
            base.parse_element (/<cim:RevenueKind.industrial>([\s\S]*?)<\/cim:RevenueKind.industrial>/g, obj, "industrial", base.to_string, sub, context);

            /**
             * Irrigation revenue.
             *
             */
            base.parse_element (/<cim:RevenueKind.irrigation>([\s\S]*?)<\/cim:RevenueKind.irrigation>/g, obj, "irrigation", base.to_string, sub, context);

            /**
             * Streetlight revenue.
             *
             */
            base.parse_element (/<cim:RevenueKind.streetLight>([\s\S]*?)<\/cim:RevenueKind.streetLight>/g, obj, "streetLight", base.to_string, sub, context);

            /**
             * Other revenue kind.
             *
             */
            base.parse_element (/<cim:RevenueKind.other>([\s\S]*?)<\/cim:RevenueKind.other>/g, obj, "other", base.to_string, sub, context);

            bucket = context.parsed.RevenueKind;
            if (null == bucket)
                context.parsed.RevenueKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_TroubleTicket (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "TroubleTicket";
            /**
             * Date and time the trouble has been reported.
             *
             */
            base.parse_element (/<cim:TroubleTicket.dateTimeOfReport>([\s\S]*?)<\/cim:TroubleTicket.dateTimeOfReport>/g, obj, "dateTimeOfReport", base.to_datetime, sub, context);

            /**
             * Trouble code (e.g., power down, flickering lights, partial power, etc).
             *
             */
            base.parse_element (/<cim:TroubleTicket.troubleCode>([\s\S]*?)<\/cim:TroubleTicket.troubleCode>/g, obj, "troubleCode", base.to_string, sub, context);

            /**
             * Indicates how the customer reported trouble.
             *
             */
            base.parse_element (/<cim:TroubleTicket.reportingKind>([\s\S]*?)<\/cim:TroubleTicket.reportingKind>/g, obj, "reportingKind", base.to_string, sub, context);

            /**
             * Date and time this trouble ticket has been resolved.
             *
             */
            base.parse_element (/<cim:TroubleTicket.resolvedDateTime>([\s\S]*?)<\/cim:TroubleTicket.resolvedDateTime>/g, obj, "resolvedDateTime", base.to_datetime, sub, context);

            /**
             * A first responder on site such as police, fire department etc.
             *
             */
            base.parse_element (/<cim:TroubleTicket.firstResponder>([\s\S]*?)<\/cim:TroubleTicket.firstResponder>/g, obj, "firstResponder", base.to_string, sub, context);

            /**
             * Notification for this trouble ticket.
             *
             */
            base.parse_attribute (/<cim:TroubleTicket.Notification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Notification", sub, context, true);

            /**
             * Incident reported in this trouble ticket
             *
             */
            base.parse_attribute (/<cim:TroubleTicket.Incident\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Incident", sub, context, true);

            /**
             * Customer for whom this trouble ticket is relevant.
             *
             */
            base.parse_attribute (/<cim:TroubleTicket.Customer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Customer", sub, context, true);

            bucket = context.parsed.TroubleTicket;
            if (null == bucket)
                context.parsed.TroubleTicket = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Cycle day on which the associated customer account will normally be billed, used to determine when to produce the billing.
             *
             */
            base.parse_element (/<cim:CustomerAccount.billingCycle>([\s\S]*?)<\/cim:CustomerAccount.billingCycle>/g, obj, "billingCycle", base.to_string, sub, context);

            /**
             * Budget bill code.
             *
             */
            base.parse_element (/<cim:CustomerAccount.budgetBill>([\s\S]*?)<\/cim:CustomerAccount.budgetBill>/g, obj, "budgetBill", base.to_string, sub, context);

            /**
             * Customer owning this account.
             *
             */
            base.parse_attribute (/<cim:CustomerAccount.Customer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Customer", sub, context, true);

            bucket = context.parsed.CustomerAccount;
            if (null == bucket)
                context.parsed.CustomerAccount = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_TroubleReportingKind: parse_TroubleReportingKind,
                parse_TroubleTicket: parse_TroubleTicket,
                parse_RevenueKind: parse_RevenueKind,
                parse_NotificationTriggerKind: parse_NotificationTriggerKind,
                parse_PricingStructure: parse_PricingStructure,
                parse_ServiceKind: parse_ServiceKind,
                parse_ServiceLocation: parse_ServiceLocation,
                parse_IncidentHazard: parse_IncidentHazard,
                parse_CustomerKind: parse_CustomerKind,
                parse_CustomerAgreement: parse_CustomerAgreement,
                parse_ServiceCategory: parse_ServiceCategory,
                parse_CustomerAccount: parse_CustomerAccount,
                parse_Customer: parse_Customer,
                parse_CustomerNotification: parse_CustomerNotification,
                parse_Tariff: parse_Tariff
            }
        );
    }
);