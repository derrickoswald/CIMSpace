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
            obj["trigger"] = base.parse_element (/<cim:CustomerNotification.trigger>([\s\S]*?)<\/cim:CustomerNotification.trigger>/g, sub, context, true);
            /**
             * Earliest date time to call the customer.
             *
             */
            obj["earliestDateTimeToCall"] = base.to_datetime (base.parse_element (/<cim:CustomerNotification.earliestDateTimeToCall>([\s\S]*?)<\/cim:CustomerNotification.earliestDateTimeToCall>/g, sub, context, true));
            /**
             * Latest date time to call the customer.
             *
             */
            obj["latestDateTimeToCall"] = base.to_datetime (base.parse_element (/<cim:CustomerNotification.latestDateTimeToCall>([\s\S]*?)<\/cim:CustomerNotification.latestDateTimeToCall>/g, sub, context, true));
            /**
             * Type of contact (e.g., phone, email, etc.).
             *
             */
            obj["contactType"] = base.parse_element (/<cim:CustomerNotification.contactType>([\s\S]*?)<\/cim:CustomerNotification.contactType>/g, sub, context, true);
            /**
             * Value of contact type (e.g., phone number, email address, etc.).
             *
             */
            obj["contactValue"] = base.parse_element (/<cim:CustomerNotification.contactValue>([\s\S]*?)<\/cim:CustomerNotification.contactValue>/g, sub, context, true);
            /**
             * Customer requiring this notification.
             *
             */
            obj["Customer"] = base.parse_attribute (/<cim:CustomerNotification.Customer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Incident as a subject of this customer notification.
             *
             */
            obj["Incident"] = base.parse_attribute (/<cim:CustomerNotification.Incident\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["code"] = base.parse_element (/<cim:PricingStructure.code>([\s\S]*?)<\/cim:PricingStructure.code>/g, sub, context, true);
            /**
             * Absolute maximum valid non-demand usage quantity used in validating a customer's billed non-demand usage.
             *
             */
            obj["dailyCeilingUsage"] = base.parse_element (/<cim:PricingStructure.dailyCeilingUsage>([\s\S]*?)<\/cim:PricingStructure.dailyCeilingUsage>/g, sub, context, true);
            /**
             * Used in place of actual computed estimated average when history of usage is not available, and typically manually entered by customer accounting.
             *
             */
            obj["dailyEstimatedUsage"] = base.parse_element (/<cim:PricingStructure.dailyEstimatedUsage>([\s\S]*?)<\/cim:PricingStructure.dailyEstimatedUsage>/g, sub, context, true);
            /**
             * Absolute minimum valid non-demand usage quantity used in validating a customer's billed non-demand usage.
             *
             */
            obj["dailyFloorUsage"] = base.parse_element (/<cim:PricingStructure.dailyFloorUsage>([\s\S]*?)<\/cim:PricingStructure.dailyFloorUsage>/g, sub, context, true);
            /**
             * (accounting) Kind of revenue, often used to determine the grace period allowed, before collection actions are taken on a customer (grace periods vary between revenue classes).
             *
             */
            obj["revenueKind"] = base.parse_element (/<cim:PricingStructure.revenueKind>([\s\S]*?)<\/cim:PricingStructure.revenueKind>/g, sub, context, true);
            /**
             * True if this pricing structure is not taxable.
             *
             */
            obj["taxExemption"] = base.to_boolean (base.parse_element (/<cim:PricingStructure.taxExemption>([\s\S]*?)<\/cim:PricingStructure.taxExemption>/g, sub, context, true));
            /**
             * Service category to which this pricing structure applies.
             *
             */
            obj["ServiceCategory"] = base.parse_attribute (/<cim:PricingStructure.ServiceCategory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["residential"] = base.parse_element (/<cim:CustomerKind.residential>([\s\S]*?)<\/cim:CustomerKind.residential>/g, sub, context, true);
            /**
             * Residential and commercial customer.
             *
             */
            obj["residentialAndCommercial"] = base.parse_element (/<cim:CustomerKind.residentialAndCommercial>([\s\S]*?)<\/cim:CustomerKind.residentialAndCommercial>/g, sub, context, true);
            /**
             * Residential and streetlight customer.
             *
             */
            obj["residentialAndStreetlight"] = base.parse_element (/<cim:CustomerKind.residentialAndStreetlight>([\s\S]*?)<\/cim:CustomerKind.residentialAndStreetlight>/g, sub, context, true);
            /**
             * Residential streetlight or other related customer.
             *
             */
            obj["residentialStreetlightOthers"] = base.parse_element (/<cim:CustomerKind.residentialStreetlightOthers>([\s\S]*?)<\/cim:CustomerKind.residentialStreetlightOthers>/g, sub, context, true);
            /**
             * Residential farm service customer.
             *
             */
            obj["residentialFarmService"] = base.parse_element (/<cim:CustomerKind.residentialFarmService>([\s\S]*?)<\/cim:CustomerKind.residentialFarmService>/g, sub, context, true);
            /**
             * Commercial industrial customer.
             *
             */
            obj["commercialIndustrial"] = base.parse_element (/<cim:CustomerKind.commercialIndustrial>([\s\S]*?)<\/cim:CustomerKind.commercialIndustrial>/g, sub, context, true);
            /**
             * Pumping load customer.
             *
             */
            obj["pumpingLoad"] = base.parse_element (/<cim:CustomerKind.pumpingLoad>([\s\S]*?)<\/cim:CustomerKind.pumpingLoad>/g, sub, context, true);
            /**
             * Wind machine customer.
             *
             */
            obj["windMachine"] = base.parse_element (/<cim:CustomerKind.windMachine>([\s\S]*?)<\/cim:CustomerKind.windMachine>/g, sub, context, true);
            /**
             * Customer as energy service supplier.
             *
             */
            obj["energyServiceSupplier"] = base.parse_element (/<cim:CustomerKind.energyServiceSupplier>([\s\S]*?)<\/cim:CustomerKind.energyServiceSupplier>/g, sub, context, true);
            /**
             * Customer as energy service scheduler.
             *
             */
            obj["energyServiceScheduler"] = base.parse_element (/<cim:CustomerKind.energyServiceScheduler>([\s\S]*?)<\/cim:CustomerKind.energyServiceScheduler>/g, sub, context, true);
            /**
             * Internal use customer.
             *
             */
            obj["internalUse"] = base.parse_element (/<cim:CustomerKind.internalUse>([\s\S]*?)<\/cim:CustomerKind.internalUse>/g, sub, context, true);
            /**
             * Other kind of customer.
             *
             */
            obj["other"] = base.parse_element (/<cim:CustomerKind.other>([\s\S]*?)<\/cim:CustomerKind.other>/g, sub, context, true);
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
            obj["endDate"] = base.parse_element (/<cim:Tariff.endDate>([\s\S]*?)<\/cim:Tariff.endDate>/g, sub, context, true);
            /**
             * Date tariff was activated.
             *
             */
            obj["startDate"] = base.parse_element (/<cim:Tariff.startDate>([\s\S]*?)<\/cim:Tariff.startDate>/g, sub, context, true);
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
            obj["kind"] = base.parse_element (/<cim:Customer.kind>([\s\S]*?)<\/cim:Customer.kind>/g, sub, context, true);
            /**
             * (if applicable) Public utilities commission (PUC) identification number.
             *
             */
            obj["pucNumber"] = base.parse_element (/<cim:Customer.pucNumber>([\s\S]*?)<\/cim:Customer.pucNumber>/g, sub, context, true);
            /**
             * True if customer organisation has special service needs such as life support, hospitals, etc.
             *
             */
            obj["specialNeed"] = base.parse_element (/<cim:Customer.specialNeed>([\s\S]*?)<\/cim:Customer.specialNeed>/g, sub, context, true);
            /**
             * Status of this customer.
             *
             */
            obj["status"] = base.parse_element (/<cim:Customer.status>([\s\S]*?)<\/cim:Customer.status>/g, sub, context, true);
            /**
             * (use 'priority' instead) True if this is an important customer.
             *
             * Importance is for matters different than those in 'specialNeed' attribute.
             *
             */
            obj["vip"] = base.to_boolean (base.parse_element (/<cim:Customer.vip>([\s\S]*?)<\/cim:Customer.vip>/g, sub, context, true));
            /**
             * Priority of the customer.
             *
             */
            obj["priority"] = base.parse_element (/<cim:Customer.priority>([\s\S]*?)<\/cim:Customer.priority>/g, sub, context, true);
            /**
             * Locale designating language to use in communications with this customer.
             *
             */
            obj["locale"] = base.parse_element (/<cim:Customer.locale>([\s\S]*?)<\/cim:Customer.locale>/g, sub, context, true);
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
            obj["call"] = base.parse_element (/<cim:TroubleReportingKind.call>([\s\S]*?)<\/cim:TroubleReportingKind.call>/g, sub, context, true);
            /**
             * Trouble reported by email.
             *
             */
            obj["email"] = base.parse_element (/<cim:TroubleReportingKind.email>([\s\S]*?)<\/cim:TroubleReportingKind.email>/g, sub, context, true);
            /**
             * Trouble reported by letter.
             *
             */
            obj["letter"] = base.parse_element (/<cim:TroubleReportingKind.letter>([\s\S]*?)<\/cim:TroubleReportingKind.letter>/g, sub, context, true);
            /**
             * Trouble reported by other means.
             *
             */
            obj["other"] = base.parse_element (/<cim:TroubleReportingKind.other>([\s\S]*?)<\/cim:TroubleReportingKind.other>/g, sub, context, true);
            /**
             * Trouble reported through interactive voice response system.
             *
             */
            obj["ivr"] = base.parse_element (/<cim:TroubleReportingKind.ivr>([\s\S]*?)<\/cim:TroubleReportingKind.ivr>/g, sub, context, true);
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
            obj["electricity"] = base.parse_element (/<cim:ServiceKind.electricity>([\s\S]*?)<\/cim:ServiceKind.electricity>/g, sub, context, true);
            /**
             * Gas service.
             *
             */
            obj["gas"] = base.parse_element (/<cim:ServiceKind.gas>([\s\S]*?)<\/cim:ServiceKind.gas>/g, sub, context, true);
            /**
             * Water service.
             *
             */
            obj["water"] = base.parse_element (/<cim:ServiceKind.water>([\s\S]*?)<\/cim:ServiceKind.water>/g, sub, context, true);
            /**
             * Time service.
             *
             */
            obj["time"] = base.parse_element (/<cim:ServiceKind.time>([\s\S]*?)<\/cim:ServiceKind.time>/g, sub, context, true);
            /**
             * Heat service.
             *
             */
            obj["heat"] = base.parse_element (/<cim:ServiceKind.heat>([\s\S]*?)<\/cim:ServiceKind.heat>/g, sub, context, true);
            /**
             * Refuse (waster) service.
             *
             */
            obj["refuse"] = base.parse_element (/<cim:ServiceKind.refuse>([\s\S]*?)<\/cim:ServiceKind.refuse>/g, sub, context, true);
            /**
             * Sewerage service.
             *
             */
            obj["sewerage"] = base.parse_element (/<cim:ServiceKind.sewerage>([\s\S]*?)<\/cim:ServiceKind.sewerage>/g, sub, context, true);
            /**
             * Rates (e.g. tax, charge, toll, duty, tariff, etc.) service.
             *
             */
            obj["rates"] = base.parse_element (/<cim:ServiceKind.rates>([\s\S]*?)<\/cim:ServiceKind.rates>/g, sub, context, true);
            /**
             * TV license service.
             *
             */
            obj["tvLicence"] = base.parse_element (/<cim:ServiceKind.tvLicence>([\s\S]*?)<\/cim:ServiceKind.tvLicence>/g, sub, context, true);
            /**
             * Internet service.
             *
             */
            obj["internet"] = base.parse_element (/<cim:ServiceKind.internet>([\s\S]*?)<\/cim:ServiceKind.internet>/g, sub, context, true);
            /**
             * Other kind of service.
             *
             */
            obj["other"] = base.parse_element (/<cim:ServiceKind.other>([\s\S]*?)<\/cim:ServiceKind.other>/g, sub, context, true);
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
            obj["Incident"] = base.parse_attribute (/<cim:IncidentHazard.Incident\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Trouble ticket associated with this hazard.
             *
             */
            obj["TroubleTicket"] = base.parse_attribute (/<cim:IncidentHazard.TroubleTicket\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["initialEtr"] = base.parse_element (/<cim:NotificationTriggerKind.initialEtr>([\s\S]*?)<\/cim:NotificationTriggerKind.initialEtr>/g, sub, context, true);
            /**
             * Notify customer if estimated restoration time changes.
             *
             */
            obj["etrChange"] = base.parse_element (/<cim:NotificationTriggerKind.etrChange>([\s\S]*?)<\/cim:NotificationTriggerKind.etrChange>/g, sub, context, true);
            /**
             * Notify customer when power has been restored.
             *
             */
            obj["powerRestored"] = base.parse_element (/<cim:NotificationTriggerKind.powerRestored>([\s\S]*?)<\/cim:NotificationTriggerKind.powerRestored>/g, sub, context, true);
            /**
             * Notify customer of planned outage.
             *
             */
            obj["powerOut"] = base.parse_element (/<cim:NotificationTriggerKind.powerOut>([\s\S]*?)<\/cim:NotificationTriggerKind.powerOut>/g, sub, context, true);
            /**
             * Notify customer that a crew has been dispatched to investigate the problem.
             *
             */
            obj["informDispatched"] = base.parse_element (/<cim:NotificationTriggerKind.informDispatched>([\s\S]*?)<\/cim:NotificationTriggerKind.informDispatched>/g, sub, context, true);
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
            obj["loadMgmt"] = base.parse_element (/<cim:CustomerAgreement.loadMgmt>([\s\S]*?)<\/cim:CustomerAgreement.loadMgmt>/g, sub, context, true);
            /**
             * Service category for this agreement.
             *
             */
            obj["ServiceCategory"] = base.parse_attribute (/<cim:CustomerAgreement.ServiceCategory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Service supplier for this customer agreement.
             *
             */
            obj["ServiceSupplier"] = base.parse_attribute (/<cim:CustomerAgreement.ServiceSupplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Customer for this agreement.
             *
             */
            obj["Customer"] = base.parse_attribute (/<cim:CustomerAgreement.Customer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Customer account owning this agreement.
             *
             */
            obj["CustomerAccount"] = base.parse_attribute (/<cim:CustomerAgreement.CustomerAccount\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["StandardIndustryCode"] = base.parse_attribute (/<cim:CustomerAgreement.StandardIndustryCode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["accessMethod"] = base.parse_element (/<cim:ServiceLocation.accessMethod>([\s\S]*?)<\/cim:ServiceLocation.accessMethod>/g, sub, context, true);
            /**
             * True if inspection is needed of facilities at this service location.
             *
             * This could be requested by a customer, due to suspected tampering, environmental concerns (e.g., a fire in the vicinity), or to correct incompatible data.
             *
             */
            obj["needsInspection"] = base.to_boolean (base.parse_element (/<cim:ServiceLocation.needsInspection>([\s\S]*?)<\/cim:ServiceLocation.needsInspection>/g, sub, context, true));
            /**
             * Problems previously encountered when visiting or performing work on this location.
             *
             * Examples include: bad dog, violent customer, verbally abusive occupant, obstructions, safety hazards, etc.
             *
             */
            obj["siteAccessProblem"] = base.parse_element (/<cim:ServiceLocation.siteAccessProblem>([\s\S]*?)<\/cim:ServiceLocation.siteAccessProblem>/g, sub, context, true);
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
            obj["kind"] = base.parse_element (/<cim:ServiceCategory.kind>([\s\S]*?)<\/cim:ServiceCategory.kind>/g, sub, context, true);
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
            obj["residential"] = base.parse_element (/<cim:RevenueKind.residential>([\s\S]*?)<\/cim:RevenueKind.residential>/g, sub, context, true);
            /**
             * Non-residential revenue.
             *
             */
            obj["nonResidential"] = base.parse_element (/<cim:RevenueKind.nonResidential>([\s\S]*?)<\/cim:RevenueKind.nonResidential>/g, sub, context, true);
            /**
             * Commercial revenue.
             *
             */
            obj["commercial"] = base.parse_element (/<cim:RevenueKind.commercial>([\s\S]*?)<\/cim:RevenueKind.commercial>/g, sub, context, true);
            /**
             * Industrial revenue.
             *
             */
            obj["industrial"] = base.parse_element (/<cim:RevenueKind.industrial>([\s\S]*?)<\/cim:RevenueKind.industrial>/g, sub, context, true);
            /**
             * Irrigation revenue.
             *
             */
            obj["irrigation"] = base.parse_element (/<cim:RevenueKind.irrigation>([\s\S]*?)<\/cim:RevenueKind.irrigation>/g, sub, context, true);
            /**
             * Streetlight revenue.
             *
             */
            obj["streetLight"] = base.parse_element (/<cim:RevenueKind.streetLight>([\s\S]*?)<\/cim:RevenueKind.streetLight>/g, sub, context, true);
            /**
             * Other revenue kind.
             *
             */
            obj["other"] = base.parse_element (/<cim:RevenueKind.other>([\s\S]*?)<\/cim:RevenueKind.other>/g, sub, context, true);
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
            obj["dateTimeOfReport"] = base.to_datetime (base.parse_element (/<cim:TroubleTicket.dateTimeOfReport>([\s\S]*?)<\/cim:TroubleTicket.dateTimeOfReport>/g, sub, context, true));
            /**
             * Trouble code (e.g., power down, flickering lights, partial power, etc).
             *
             */
            obj["troubleCode"] = base.parse_element (/<cim:TroubleTicket.troubleCode>([\s\S]*?)<\/cim:TroubleTicket.troubleCode>/g, sub, context, true);
            /**
             * Indicates how the customer reported trouble.
             *
             */
            obj["reportingKind"] = base.parse_element (/<cim:TroubleTicket.reportingKind>([\s\S]*?)<\/cim:TroubleTicket.reportingKind>/g, sub, context, true);
            /**
             * Date and time this trouble ticket has been resolved.
             *
             */
            obj["resolvedDateTime"] = base.to_datetime (base.parse_element (/<cim:TroubleTicket.resolvedDateTime>([\s\S]*?)<\/cim:TroubleTicket.resolvedDateTime>/g, sub, context, true));
            /**
             * A first responder on site such as police, fire department etc.
             *
             */
            obj["firstResponder"] = base.parse_element (/<cim:TroubleTicket.firstResponder>([\s\S]*?)<\/cim:TroubleTicket.firstResponder>/g, sub, context, true);
            /**
             * Notification for this trouble ticket.
             *
             */
            obj["Notification"] = base.parse_attribute (/<cim:TroubleTicket.Notification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Incident reported in this trouble ticket
             *
             */
            obj["Incident"] = base.parse_attribute (/<cim:TroubleTicket.Incident\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Customer for whom this trouble ticket is relevant.
             *
             */
            obj["Customer"] = base.parse_attribute (/<cim:TroubleTicket.Customer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["billingCycle"] = base.parse_element (/<cim:CustomerAccount.billingCycle>([\s\S]*?)<\/cim:CustomerAccount.billingCycle>/g, sub, context, true);
            /**
             * Budget bill code.
             *
             */
            obj["budgetBill"] = base.parse_element (/<cim:CustomerAccount.budgetBill>([\s\S]*?)<\/cim:CustomerAccount.budgetBill>/g, sub, context, true);
            /**
             * Customer owning this account.
             *
             */
            obj["Customer"] = base.parse_attribute (/<cim:CustomerAccount.Customer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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