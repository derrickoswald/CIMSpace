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
         * The Standard Industrial Classification (SIC) are the codes that identify the type of products/service an industry is involved in, and used for statutory reporting purposes.
         *
         * For example, in the USA these codes are located by the federal government, and then published in a book entitled "The Standard Industrial Classification Manual". The codes are arranged in a hierarchical structure.
         *
         */
        function parse_StandardIndustryCode (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "StandardIndustryCode";
            /**
             * Standard alphanumeric code assigned to a particular product/service within an industry.
             *
             */
            obj["code"] = base.parse_element (/<cim:StandardIndustryCode.code>([\s\S]*?)<\/cim:StandardIndustryCode.code>/g, sub, context, true);
            bucket = context.parsed.StandardIndustryCode;
            if (null == bucket)
                context.parsed.StandardIndustryCode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A service guarantee, often imposed by a regulator, defines conditions that, if not satisfied, will result in the utility making a monetary payment to the customer.
         *
         * Note that guarantee's identifier is in the 'name' attribute and the status of the guarantee is in the 'Status.status' attribute.
         *
         */
        function parse_ServiceGuarantee (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "ServiceGuarantee";
            /**
             * Period in which this service guantee applies.
             *
             */
            obj["applicationPeriod"] = base.parse_element (/<cim:ServiceGuarantee.applicationPeriod>([\s\S]*?)<\/cim:ServiceGuarantee.applicationPeriod>/g, sub, context, true);
            /**
             * True if utility must autmatically pay the specified amount whenever the condition is not satisified, otherwise customer must make a claim to receive payment.
             *
             */
            obj["automaticPay"] = base.to_boolean (base.parse_element (/<cim:ServiceGuarantee.automaticPay>([\s\S]*?)<\/cim:ServiceGuarantee.automaticPay>/g, sub, context, true));
            /**
             * Amount to be paid by the service provider to the customer for each violation of the 'serviceRequirement'.
             *
             */
            obj["payAmount"] = base.parse_element (/<cim:ServiceGuarantee.payAmount>([\s\S]*?)<\/cim:ServiceGuarantee.payAmount>/g, sub, context, true);
            /**
             * Explanation of the requirement and conditions for satisfying it.
             *
             */
            obj["serviceRequirement"] = base.parse_element (/<cim:ServiceGuarantee.serviceRequirement>([\s\S]*?)<\/cim:ServiceGuarantee.serviceRequirement>/g, sub, context, true);
            bucket = context.parsed.ServiceGuarantee;
            if (null == bucket)
                context.parsed.ServiceGuarantee = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Compliance events are used for reporting regulatory or contract compliance issues and/or variances.
         *
         * These might be created as a consequence of local business processes and associated rules. It is anticipated that this class will be customised extensively to meet local implementation needs.
         *
         */
        function parse_ComplianceEvent (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_ActivityRecord (context, sub);
            obj.cls = "ComplianceEvent";
            /**
             * The deadline for compliance.
             *
             */
            obj["deadline"] = base.to_datetime (base.parse_element (/<cim:ComplianceEvent.deadline>([\s\S]*?)<\/cim:ComplianceEvent.deadline>/g, sub, context, true));
            bucket = context.parsed.ComplianceEvent;
            if (null == bucket)
                context.parsed.ComplianceEvent = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Billing information for work performed for the customer.
         *
         * The history of Work Billing Info, Invoices, and Payments is to be maintained in associated ActivityRecords.
         *
         */
        function parse_WorkBillingInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "WorkBillingInfo";
            /**
             * Estimated cost for work.
             *
             */
            obj["costEstimate"] = base.parse_element (/<cim:WorkBillingInfo.costEstimate>([\s\S]*?)<\/cim:WorkBillingInfo.costEstimate>/g, sub, context, true);
            /**
             * Amount of price on deposit.
             *
             */
            obj["deposit"] = base.parse_element (/<cim:WorkBillingInfo.deposit>([\s\S]*?)<\/cim:WorkBillingInfo.deposit>/g, sub, context, true);
            /**
             * Discount from standard price.
             *
             */
            obj["discount"] = base.to_float (base.parse_element (/<cim:WorkBillingInfo.discount>([\s\S]*?)<\/cim:WorkBillingInfo.discount>/g, sub, context, true));
            /**
             * Date and time by which payment for bill is expected from client.
             *
             */
            obj["dueDateTime"] = base.to_datetime (base.parse_element (/<cim:WorkBillingInfo.dueDateTime>([\s\S]*?)<\/cim:WorkBillingInfo.dueDateTime>/g, sub, context, true));
            /**
             * Date and time bill was issued to client.
             *
             */
            obj["issueDateTime"] = base.to_datetime (base.parse_element (/<cim:WorkBillingInfo.issueDateTime>([\s\S]*?)<\/cim:WorkBillingInfo.issueDateTime>/g, sub, context, true));
            /**
             * Date payment was received from client.
             *
             */
            obj["receivedDateTime"] = base.to_datetime (base.parse_element (/<cim:WorkBillingInfo.receivedDateTime>([\s\S]*?)<\/cim:WorkBillingInfo.receivedDateTime>/g, sub, context, true));
            /**
             * Amount of bill.
             *
             */
            obj["workPrice"] = base.parse_element (/<cim:WorkBillingInfo.workPrice>([\s\S]*?)<\/cim:WorkBillingInfo.workPrice>/g, sub, context, true);
            obj["CustomerAccount"] = base.parse_attribute (/<cim:WorkBillingInfo.CustomerAccount\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WorkBillingInfo;
            if (null == bucket)
                context.parsed.WorkBillingInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A type of customer agreement involving an external agency.
         *
         * For example, a customer may form a contracts with an Energy Service Supplier if Direct Access is permitted.
         *
         */
        function parse_ExternalCustomerAgreement (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Agreement (context, sub);
            obj.cls = "ExternalCustomerAgreement";
            bucket = context.parsed.ExternalCustomerAgreement;
            if (null == bucket)
                context.parsed.ExternalCustomerAgreement = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Pricing can be based on power quality.
         *
         */
        function parse_PowerQualityPricing (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "PowerQualityPricing";
            /**
             * Emergency high voltage limit.
             *
             */
            obj["emergencyHighVoltLimit"] = base.parse_element (/<cim:PowerQualityPricing.emergencyHighVoltLimit>([\s\S]*?)<\/cim:PowerQualityPricing.emergencyHighVoltLimit>/g, sub, context, true);
            /**
             * Emergency low voltage limit.
             *
             */
            obj["emergencyLowVoltLimit"] = base.parse_element (/<cim:PowerQualityPricing.emergencyLowVoltLimit>([\s\S]*?)<\/cim:PowerQualityPricing.emergencyLowVoltLimit>/g, sub, context, true);
            /**
             * Normal high voltage limit.
             *
             */
            obj["normalHighVoltLimit"] = base.parse_element (/<cim:PowerQualityPricing.normalHighVoltLimit>([\s\S]*?)<\/cim:PowerQualityPricing.normalHighVoltLimit>/g, sub, context, true);
            /**
             * Normal low voltage limit.
             *
             */
            obj["normalLowVoltLimit"] = base.parse_element (/<cim:PowerQualityPricing.normalLowVoltLimit>([\s\S]*?)<\/cim:PowerQualityPricing.normalLowVoltLimit>/g, sub, context, true);
            /**
             * Threshold minimum power factor for this PricingStructure, specified in instances where a special charge is levied if the actual power factor for a Service falls below the value specified here.
             *
             */
            obj["powerFactorMin"] = base.to_float (base.parse_element (/<cim:PowerQualityPricing.powerFactorMin>([\s\S]*?)<\/cim:PowerQualityPricing.powerFactorMin>/g, sub, context, true));
            /**
             * Value of uninterrupted service (Cost per energy).
             *
             */
            obj["valueUninterruptedServiceEnergy"] = base.parse_element (/<cim:PowerQualityPricing.valueUninterruptedServiceEnergy>([\s\S]*?)<\/cim:PowerQualityPricing.valueUninterruptedServiceEnergy>/g, sub, context, true);
            /**
             * Value of uninterrupted service (Cost per active power).
             *
             */
            obj["valueUninterruptedServiceP"] = base.to_float (base.parse_element (/<cim:PowerQualityPricing.valueUninterruptedServiceP>([\s\S]*?)<\/cim:PowerQualityPricing.valueUninterruptedServiceP>/g, sub, context, true));
            /**
             * Voltage imbalance violation cost (Cost per unit Voltage).
             *
             */
            obj["voltImbalanceViolCost"] = base.to_float (base.parse_element (/<cim:PowerQualityPricing.voltImbalanceViolCost>([\s\S]*?)<\/cim:PowerQualityPricing.voltImbalanceViolCost>/g, sub, context, true));
            /**
             * Voltage limit violation cost (Cost per unit Voltage).
             *
             */
            obj["voltLimitViolCost"] = base.to_float (base.parse_element (/<cim:PowerQualityPricing.voltLimitViolCost>([\s\S]*?)<\/cim:PowerQualityPricing.voltLimitViolCost>/g, sub, context, true));
            bucket = context.parsed.PowerQualityPricing;
            if (null == bucket)
                context.parsed.PowerQualityPricing = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Price curve for specifying the cost of energy (X) at points in time (y1) according to a prcing structure, which is based on a tariff.
         *
         */
        function parse_SubscribePowerCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "SubscribePowerCurve";
            bucket = context.parsed.SubscribePowerCurve;
            if (null == bucket)
                context.parsed.SubscribePowerCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of customer billing.
         *
         */
        function parse_CustomerBillingKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CustomerBillingKind";
            /**
             * Consolidated bill from energy service supplier (ESS).
             *
             */
            obj["consolidatedEss"] = base.parse_element (/<cim:CustomerBillingKind.consolidatedEss>([\s\S]*?)<\/cim:CustomerBillingKind.consolidatedEss>/g, sub, context, true);
            /**
             * Consolidated bill from utility distribution company (UDC).
             *
             */
            obj["consolidatedUdc"] = base.parse_element (/<cim:CustomerBillingKind.consolidatedUdc>([\s\S]*?)<\/cim:CustomerBillingKind.consolidatedUdc>/g, sub, context, true);
            /**
             * Separate bills from ESS and UDC.
             *
             */
            obj["separateEssUdc"] = base.parse_element (/<cim:CustomerBillingKind.separateEssUdc>([\s\S]*?)<\/cim:CustomerBillingKind.separateEssUdc>/g, sub, context, true);
            obj["other"] = base.parse_element (/<cim:CustomerBillingKind.other>([\s\S]*?)<\/cim:CustomerBillingKind.other>/g, sub, context, true);
            bucket = context.parsed.CustomerBillingKind;
            if (null == bucket)
                context.parsed.CustomerBillingKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The creation of the monthly customer billing statements is the method employed to notify Customers of charges, adjustments and credits applied to their account for Services and Products.
         *
         * The actuall billing occurs through an ErpInvoice. The CustomerBillingInfo includes information from the payment, collection, meter reading, installed meter, service, site, customer, customer account, customer agreement, services and pricing subject areas. Each component price shows up as a separate line item on the ErpInvoice.
         *
         */
        function parse_CustomerBillingInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "CustomerBillingInfo";
            /**
             * Business date designated for the billing run which produced this CustomerBillingInfo.
             *
             */
            obj["billingDate"] = base.parse_element (/<cim:CustomerBillingInfo.billingDate>([\s\S]*?)<\/cim:CustomerBillingInfo.billingDate>/g, sub, context, true);
            /**
             * Calculated date upon which a customer billing amount is due, used in the invoicing process to determine when a Customer's Payment is delinquent.
             *
             * It takes into consideration the regulatory criteria and the Customer's requested due date. In the absence of a Customer requested due date, the due date is typically calculated from the regulated number of days and the 'billingDate'.
             *
             */
            obj["dueDate"] = base.parse_element (/<cim:CustomerBillingInfo.dueDate>([\s\S]*?)<\/cim:CustomerBillingInfo.dueDate>/g, sub, context, true);
            /**
             * Kind of bill customer receives.
             *
             */
            obj["kind"] = base.parse_element (/<cim:CustomerBillingInfo.kind>([\s\S]*?)<\/cim:CustomerBillingInfo.kind>/g, sub, context, true);
            /**
             * Amount of the last payment received from the customer.
             *
             * It is retained in the Customer Billing system, although the details of each payment are tracked in the ERP system.
             *
             */
            obj["lastPaymentAmt"] = base.parse_element (/<cim:CustomerBillingInfo.lastPaymentAmt>([\s\S]*?)<\/cim:CustomerBillingInfo.lastPaymentAmt>/g, sub, context, true);
            /**
             * Date of the last payment received from the customer.
             *
             * It is retained in the Customer Billing system, although the details of each payment are tracked in the ERP system.
             *
             */
            obj["lastPaymentDate"] = base.parse_element (/<cim:CustomerBillingInfo.lastPaymentDate>([\s\S]*?)<\/cim:CustomerBillingInfo.lastPaymentDate>/g, sub, context, true);
            /**
             * Outstanding balance on the CustomerAccount as of the statement date.
             *
             */
            obj["outBalance"] = base.parse_element (/<cim:CustomerBillingInfo.outBalance>([\s\S]*?)<\/cim:CustomerBillingInfo.outBalance>/g, sub, context, true);
            /**
             * Monthly amortized amount due during each billing cycle for the CustomerAccount balance for which the Payment Plan is set-up.
             *
             */
            obj["pymtPlanAmt"] = base.parse_element (/<cim:CustomerBillingInfo.pymtPlanAmt>([\s\S]*?)<\/cim:CustomerBillingInfo.pymtPlanAmt>/g, sub, context, true);
            /**
             * Type of payment plan.
             *
             */
            obj["pymtPlanType"] = base.parse_element (/<cim:CustomerBillingInfo.pymtPlanType>([\s\S]*?)<\/cim:CustomerBillingInfo.pymtPlanType>/g, sub, context, true);
            obj["CustomerAccount"] = base.parse_attribute (/<cim:CustomerBillingInfo.CustomerAccount\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.CustomerBillingInfo;
            if (null == bucket)
                context.parsed.CustomerBillingInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_PowerQualityPricing: parse_PowerQualityPricing,
                parse_WorkBillingInfo: parse_WorkBillingInfo,
                parse_ExternalCustomerAgreement: parse_ExternalCustomerAgreement,
                parse_CustomerBillingInfo: parse_CustomerBillingInfo,
                parse_ServiceGuarantee: parse_ServiceGuarantee,
                parse_ComplianceEvent: parse_ComplianceEvent,
                parse_SubscribePowerCurve: parse_SubscribePowerCurve,
                parse_StandardIndustryCode: parse_StandardIndustryCode,
                parse_CustomerBillingKind: parse_CustomerBillingKind
            }
        );
    }
);