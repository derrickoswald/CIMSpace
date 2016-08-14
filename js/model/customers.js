/**
 * @fileOverview Package Customers CIM model.
 * @name model/customers
 * @author Derrick Oswald
 * @version 1.0
 */
define
(
    ["model/base", "model/core", "model/common", "model/work"],
    /**
     * @summary Package Customers CIM model.
     * @description
     * @name model/customers
     * @exports model/customers
     * @version 1.0
     */
    function (base, core, common, work)
    {
        /*
         * Package Customers
         */

        /**
         * Parse a Customer.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Customer - the list of Customer elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/customers
         */
        function parse_Customer (context, sub)
        {
            var obj;
            var customers;

            obj = common.parse_OrganisationRole (context, sub);
            obj.cls = "Customer";
            obj.kind = base.parse_attribute (/<cim:Customer.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.locale = base.parse_element (/<cim:Customer.locale>([\s\S]*?)<\/cim:Customer.locale>/g, sub, context, true);
            obj.pucNumber = base.parse_element (/<cim:Customer.pucNumber>([\s\S]*?)<\/cim:Customer.pucNumber>/g, sub, context, true);
            obj.specialNeed = base.parse_element (/<cim:Customer.specialNeed>([\s\S]*?)<\/cim:Customer.specialNeed>/g, sub, context, true);
            obj.vip = base.parse_element (/<cim:Customer.vip>([\s\S]*?)<\/cim:Customer.vip>/g, sub, context, true);
            obj.priority = base.parse_attribute (/<cim:Customer.priority\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.status = base.parse_attribute (/<cim:Customer.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            customers = context.parsed.Customer;
            if (null == customers)
                context.parsed.Customer = customers = {};
            customers[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a CustomerAccount.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.CustomerAccount - the list of CustomerAccount elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/customers
         */
        function parse_CustomerAccount (context, sub)
        {
            var obj;
            var accounts;

            obj = common.parse_Document (context, sub);
            obj.cls = "CustomerAccount";
            obj.billingCycle = base.parse_element (/<cim:CustomerAccount.billingCycle>([\s\S]*?)<\/cim:CustomerAccount.billingCycle>/g, sub, context, true);
            obj.budgetBill = base.parse_element (/<cim:CustomerAccount.budgetBill>([\s\S]*?)<\/cim:CustomerAccount.budgetBill>/g, sub, context, true);
            obj.Customer = base.parse_attribute (/<cim:CustomerAccount.Customer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            accounts = context.parsed.CustomerAccount;
            if (null == accounts)
                context.parsed.CustomerAccount = accounts = {};
            accounts[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a CustomerAgreement.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.CustomerAgreement - the list of CustomerAgreement elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/customers
         */
        function parse_CustomerAgreement (context, sub)
        {
            var obj;
            var agreements;

            obj = common.parse_Agreement (context, sub);
            obj.cls = "CustomerAgreement";
            obj.loadMgmt = base.parse_element (/<cim:CustomerAgreement.loadMgmt>([\s\S]*?)<\/cim:CustomerAgreement.loadMgmt>/g, sub, context, true);
            obj.Customer = base.parse_attribute (/<cim:CustomerAgreement.Customer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.CustomerAccount = base.parse_attribute (/<cim:CustomerAgreement.CustomerAccount\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ServiceCategory = base.parse_attribute (/<cim:CustomerAgreement.ServiceCategory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ServiceSupplier = base.parse_attribute (/<cim:CustomerAgreement.ServiceSupplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.StandardIndustryCode = base.parse_attribute (/<cim:CustomerAgreement.StandardIndustryCode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            agreements = context.parsed.CustomerAgreement;
            if (null == agreements)
                context.parsed.CustomerAgreement = agreements = {};
            agreements[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a CustomerNotification.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.CustomerNotification - the list of CustomerNotification elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/customers
         */
        function parse_CustomerNotification (context, sub)
        {
            var obj;
            var notifications;

            obj = base.parse_Element (context, sub);
            obj.cls = "CustomerNotification";
            obj.ContactType = base.parse_element (/<cim:CustomerNotification.ContactType>([\s\S]*?)<\/cim:CustomerNotification.ContactType>/g, sub, context, true);
            obj.ContactValue = base.parse_element (/<cim:CustomerNotification.ContactValue>([\s\S]*?)<\/cim:CustomerNotification.ContactValue>/g, sub, context, true);
            obj.earliestDateTimeToCall = base.parse_element (/<cim:CustomerNotification.earliestDateTimeToCall>([\s\S]*?)<\/cim:CustomerNotification.earliestDateTimeToCall>/g, sub, context, true);
            obj.latestDateTimeToCall = base.parse_element (/<cim:CustomerNotification.latestDateTimeToCall>([\s\S]*?)<\/cim:CustomerNotification.latestDateTimeToCall>/g, sub, context, true);
            obj.trigger = base.parse_attribute (/<cim:CustomerNotification.trigger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.Customer = base.parse_attribute (/<cim:CustomerNotification.Customer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.Incident = base.parse_attribute (/<cim:CustomerNotification.Incident\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            notifications = context.parsed.CustomerNotification;
            if (null == notifications)
                context.parsed.CustomerNotification = notifications = {};
            notifications[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a IncidentHazard.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.IncidentHazard - the list of IncidentHazard elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/customers
         */
        function parse_IncidentHazard (context, sub)
        {
            var obj;
            var hazards;

            obj = common.parse_Hazard (context, sub);
            obj.cls = "IncidentHazard";
            obj.Incident = base.parse_attribute (/<cim:IncidentHazard.Incident\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.TroubleTicket = base.parse_attribute (/<cim:IncidentHazard.TroubleTicket\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            hazards = context.parsed.IncidentHazard;
            if (null == hazards)
                context.parsed.IncidentHazard = hazards = {};
            hazards[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a PricingStructure.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.PricingStructure - the list of PricingStructure elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/customers
         */
        function parse_PricingStructure (context, sub)
        {
            var obj;
            var structures;

            obj = common.parse_Document (context, sub);
            obj.cls = "PricingStructure";
            obj.code = base.parse_element (/<cim:PricingStructure.code>([\s\S]*?)<\/cim:PricingStructure.code>/g, sub, context, true);
            obj.dailyCeilingUsage = base.parse_element (/<cim:PricingStructure.dailyCeilingUsage>([\s\S]*?)<\/cim:PricingStructure.dailyCeilingUsage>/g, sub, context, true);
            obj.dailyEstimatedUsage = base.parse_element (/<cim:PricingStructure.dailyEstimatedUsage>([\s\S]*?)<\/cim:PricingStructure.dailyEstimatedUsage>/g, sub, context, true);
            obj.dailyFloorUsage = base.parse_element (/<cim:PricingStructure.dailyFloorUsage>([\s\S]*?)<\/cim:PricingStructure.dailyFloorUsage>/g, sub, context, true);
            obj.revenueKind = base.parse_attribute (/<cim:PricingStructure.revenueKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.taxExemption = base.parse_element (/<cim:PricingStructure.taxExemption>([\s\S]*?)<\/cim:PricingStructure.taxExemption>/g, sub, context, true);
            obj.ServiceCategory = base.parse_attribute (/<cim:PricingStructure.ServiceCategory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            structures = context.parsed.PricingStructure;
            if (null == structures)
                context.parsed.PricingStructure = structures = {};
            structures[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a ServiceCategory.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ServiceCategory - the list of ServiceCategory elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/customers
         */
        function parse_ServiceCategory (context, sub)
        {
            var obj;
            var categories;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "ServiceCategory";
            obj.kind = base.parse_attribute (/<cim:ServiceCategory.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            categories = context.parsed.ServiceCategory;
            if (null == categories)
                context.parsed.ServiceCategory = categories = {};
            categories[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a ServiceLocation.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ServiceLocation - the list of ServiceLocation elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/customers
         */
        function parse_ServiceLocation (context, sub)
        {
            var obj;
            var locations;

            obj = work.parse_WorkLocation (context, sub);
            obj.cls = "ServiceLocation";
            obj.accessMethod = base.parse_element (/<cim:ServiceLocation.accessMethod>([\s\S]*?)<\/cim:ServiceLocation.accessMethod>/g, sub, context, true);
            obj.needsInspection = base.parse_element (/<cim:ServiceLocation.needsInspection>([\s\S]*?)<\/cim:ServiceLocation.needsInspection>/g, sub, context, true);
            obj.siteAccessProblem = base.parse_element (/<cim:ServiceLocation.siteAccessProblem>([\s\S]*?)<\/cim:ServiceLocation.siteAccessProblem>/g, sub, context, true);
            locations = context.parsed.ServiceLocation;
            if (null == locations)
                context.parsed.ServiceLocation = locations = {};
            locations[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Tariff.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Tariff - the list of Tariff elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/customers
         */
        function parse_Tariff (context, sub)
        {
            var obj;
            var tariffs;

            obj = common.parse_Document (context, sub);
            obj.cls = "Tariff";
            obj.endDate = base.parse_element (/<cim:Tariff.endDate>([\s\S]*?)<\/cim:Tariff.endDate>/g, sub, context, true);
            obj.startDate = base.parse_element (/<cim:Tariff.startDate>([\s\S]*?)<\/cim:Tariff.startDate>/g, sub, context, true);
            tariffs = context.parsed.Tariff;
            if (null == tariffs)
                context.parsed.Tariff = tariffs = {};
            tariffs[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a TroubleTicket.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.TroubleTicket - the list of TroubleTicket elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/customers
         */
        function parse_TroubleTicket (context, sub)
        {
            var obj;
            var tickets;

            obj = common.parse_Document (context, sub);
            obj.cls = "TroubleTicket";
            obj.dateTimeOfReport = base.parse_element (/<cim:TroubleTicket.dateTimeOfReport>([\s\S]*?)<\/cim:TroubleTicket.dateTimeOfReport>/g, sub, context, true);
            obj.firstResponder = base.parse_element (/<cim:TroubleTicket.firstResponder>([\s\S]*?)<\/cim:TroubleTicket.firstResponder>/g, sub, context, true);
            obj.reportingKind = base.parse_attribute (/<cim:TroubleTicket.reportingKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.resolvedDateTime = base.parse_element (/<cim:TroubleTicket.resolvedDateTime>([\s\S]*?)<\/cim:TroubleTicket.resolvedDateTime>/g, sub, context, true);
            obj.troubleCode = base.parse_element (/<cim:TroubleTicket.troubleCode>([\s\S]*?)<\/cim:TroubleTicket.troubleCode>/g, sub, context, true);
            obj.Customer = base.parse_attribute (/<cim:TroubleTicket.Customer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.Incident = base.parse_attribute (/<cim:TroubleTicket.Incident\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.Notification = base.parse_attribute (/<cim:TroubleTicket.Notification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            tickets = context.parsed.TroubleTicket;
            if (null == tickets)
                context.parsed.TroubleTicket = tickets = {};
            tickets[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_Customer: parse_Customer,
                parse_CustomerAccount: parse_CustomerAccount,
                parse_CustomerAgreement: parse_CustomerAgreement,
                parse_CustomerNotification: parse_CustomerNotification,
                parse_IncidentHazard: parse_IncidentHazard,
                parse_PricingStructure: parse_PricingStructure,
                parse_ServiceCategory: parse_ServiceCategory,
                parse_ServiceLocation: parse_ServiceLocation,
                parse_Tariff: parse_Tariff,
                parse_TroubleTicket: parse_TroubleTicket
            }
        );
    }
);
