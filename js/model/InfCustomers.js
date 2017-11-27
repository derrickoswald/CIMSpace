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
        class StandardIndustryCode extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.StandardIndustryCode;
                if (null == bucket)
                   cim_data.StandardIndustryCode = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.StandardIndustryCode[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "StandardIndustryCode";
                base.parse_element (/<cim:StandardIndustryCode.code>([\s\S]*?)<\/cim:StandardIndustryCode.code>/g, obj, "code", base.to_string, sub, context);

                var bucket = context.parsed.StandardIndustryCode;
                if (null == bucket)
                   context.parsed.StandardIndustryCode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "StandardIndustryCode", "code", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A service guarantee, often imposed by a regulator, defines conditions that, if not satisfied, will result in the utility making a monetary payment to the customer.
         *
         * Note that guarantee's identifier is in the 'name' attribute and the status of the guarantee is in the 'Status.status' attribute.
         *
         */
        class ServiceGuarantee extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ServiceGuarantee;
                if (null == bucket)
                   cim_data.ServiceGuarantee = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ServiceGuarantee[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "ServiceGuarantee";
                base.parse_element (/<cim:ServiceGuarantee.applicationPeriod>([\s\S]*?)<\/cim:ServiceGuarantee.applicationPeriod>/g, obj, "applicationPeriod", base.to_string, sub, context);
                base.parse_element (/<cim:ServiceGuarantee.automaticPay>([\s\S]*?)<\/cim:ServiceGuarantee.automaticPay>/g, obj, "automaticPay", base.to_boolean, sub, context);
                base.parse_element (/<cim:ServiceGuarantee.payAmount>([\s\S]*?)<\/cim:ServiceGuarantee.payAmount>/g, obj, "payAmount", base.to_string, sub, context);
                base.parse_element (/<cim:ServiceGuarantee.serviceRequirement>([\s\S]*?)<\/cim:ServiceGuarantee.serviceRequirement>/g, obj, "serviceRequirement", base.to_string, sub, context);

                var bucket = context.parsed.ServiceGuarantee;
                if (null == bucket)
                   context.parsed.ServiceGuarantee = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "ServiceGuarantee", "applicationPeriod", base.from_string, fields);
                base.export_element (obj, "ServiceGuarantee", "automaticPay", base.from_boolean, fields);
                base.export_element (obj, "ServiceGuarantee", "payAmount", base.from_string, fields);
                base.export_element (obj, "ServiceGuarantee", "serviceRequirement", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Compliance events are used for reporting regulatory or contract compliance issues and/or variances.
         *
         * These might be created as a consequence of local business processes and associated rules. It is anticipated that this class will be customised extensively to meet local implementation needs.
         *
         */
        class ComplianceEvent extends Common.ActivityRecord
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ComplianceEvent;
                if (null == bucket)
                   cim_data.ComplianceEvent = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ComplianceEvent[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.ActivityRecord.prototype.parse.call (this, context, sub);
                obj.cls = "ComplianceEvent";
                base.parse_element (/<cim:ComplianceEvent.deadline>([\s\S]*?)<\/cim:ComplianceEvent.deadline>/g, obj, "deadline", base.to_datetime, sub, context);

                var bucket = context.parsed.ComplianceEvent;
                if (null == bucket)
                   context.parsed.ComplianceEvent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.ActivityRecord.prototype.export.call (this, obj, false);

                base.export_element (obj, "ComplianceEvent", "deadline", base.from_datetime, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.WorkBillingInfo;
                if (null == bucket)
                   cim_data.WorkBillingInfo = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WorkBillingInfo[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "WorkBillingInfo";
                base.parse_element (/<cim:WorkBillingInfo.costEstimate>([\s\S]*?)<\/cim:WorkBillingInfo.costEstimate>/g, obj, "costEstimate", base.to_string, sub, context);
                base.parse_element (/<cim:WorkBillingInfo.deposit>([\s\S]*?)<\/cim:WorkBillingInfo.deposit>/g, obj, "deposit", base.to_string, sub, context);
                base.parse_element (/<cim:WorkBillingInfo.discount>([\s\S]*?)<\/cim:WorkBillingInfo.discount>/g, obj, "discount", base.to_float, sub, context);
                base.parse_element (/<cim:WorkBillingInfo.dueDateTime>([\s\S]*?)<\/cim:WorkBillingInfo.dueDateTime>/g, obj, "dueDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:WorkBillingInfo.issueDateTime>([\s\S]*?)<\/cim:WorkBillingInfo.issueDateTime>/g, obj, "issueDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:WorkBillingInfo.receivedDateTime>([\s\S]*?)<\/cim:WorkBillingInfo.receivedDateTime>/g, obj, "receivedDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:WorkBillingInfo.workPrice>([\s\S]*?)<\/cim:WorkBillingInfo.workPrice>/g, obj, "workPrice", base.to_string, sub, context);
                base.parse_attribute (/<cim:WorkBillingInfo.CustomerAccount\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAccount", sub, context);

                var bucket = context.parsed.WorkBillingInfo;
                if (null == bucket)
                   context.parsed.WorkBillingInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "WorkBillingInfo", "costEstimate", base.from_string, fields);
                base.export_element (obj, "WorkBillingInfo", "deposit", base.from_string, fields);
                base.export_element (obj, "WorkBillingInfo", "discount", base.from_float, fields);
                base.export_element (obj, "WorkBillingInfo", "dueDateTime", base.from_datetime, fields);
                base.export_element (obj, "WorkBillingInfo", "issueDateTime", base.from_datetime, fields);
                base.export_element (obj, "WorkBillingInfo", "receivedDateTime", base.from_datetime, fields);
                base.export_element (obj, "WorkBillingInfo", "workPrice", base.from_string, fields);
                base.export_attribute (obj, "WorkBillingInfo", "CustomerAccount", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

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
                this._id = template.id;
                var bucket = cim_data.ExternalCustomerAgreement;
                if (null == bucket)
                   cim_data.ExternalCustomerAgreement = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ExternalCustomerAgreement[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Agreement.prototype.parse.call (this, context, sub);
                obj.cls = "ExternalCustomerAgreement";

                var bucket = context.parsed.ExternalCustomerAgreement;
                if (null == bucket)
                   context.parsed.ExternalCustomerAgreement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Agreement.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.PowerQualityPricing;
                if (null == bucket)
                   cim_data.PowerQualityPricing = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PowerQualityPricing[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
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

                var bucket = context.parsed.PowerQualityPricing;
                if (null == bucket)
                   context.parsed.PowerQualityPricing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "PowerQualityPricing", "emergencyHighVoltLimit", base.from_string, fields);
                base.export_element (obj, "PowerQualityPricing", "emergencyLowVoltLimit", base.from_string, fields);
                base.export_element (obj, "PowerQualityPricing", "normalHighVoltLimit", base.from_string, fields);
                base.export_element (obj, "PowerQualityPricing", "normalLowVoltLimit", base.from_string, fields);
                base.export_element (obj, "PowerQualityPricing", "powerFactorMin", base.from_float, fields);
                base.export_element (obj, "PowerQualityPricing", "valueUninterruptedServiceEnergy", base.from_string, fields);
                base.export_element (obj, "PowerQualityPricing", "valueUninterruptedServiceP", base.from_float, fields);
                base.export_element (obj, "PowerQualityPricing", "voltImbalanceViolCost", base.from_float, fields);
                base.export_element (obj, "PowerQualityPricing", "voltLimitViolCost", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.SubscribePowerCurve;
                if (null == bucket)
                   cim_data.SubscribePowerCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SubscribePowerCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "SubscribePowerCurve";

                var bucket = context.parsed.SubscribePowerCurve;
                if (null == bucket)
                   context.parsed.SubscribePowerCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Kind of customer billing.
         *
         */
        class CustomerBillingKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CustomerBillingKind;
                if (null == bucket)
                   cim_data.CustomerBillingKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CustomerBillingKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CustomerBillingKind";
                base.parse_element (/<cim:CustomerBillingKind.consolidatedEss>([\s\S]*?)<\/cim:CustomerBillingKind.consolidatedEss>/g, obj, "consolidatedEss", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerBillingKind.consolidatedUdc>([\s\S]*?)<\/cim:CustomerBillingKind.consolidatedUdc>/g, obj, "consolidatedUdc", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerBillingKind.separateEssUdc>([\s\S]*?)<\/cim:CustomerBillingKind.separateEssUdc>/g, obj, "separateEssUdc", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerBillingKind.other>([\s\S]*?)<\/cim:CustomerBillingKind.other>/g, obj, "other", base.to_string, sub, context);

                var bucket = context.parsed.CustomerBillingKind;
                if (null == bucket)
                   context.parsed.CustomerBillingKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "CustomerBillingKind", "consolidatedEss", base.from_string, fields);
                base.export_element (obj, "CustomerBillingKind", "consolidatedUdc", base.from_string, fields);
                base.export_element (obj, "CustomerBillingKind", "separateEssUdc", base.from_string, fields);
                base.export_element (obj, "CustomerBillingKind", "other", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The creation of the monthly customer billing statements is the method employed to notify Customers of charges, adjustments and credits applied to their account for Services and Products.
         *
         * The actuall billing occurs through an ErpInvoice. The CustomerBillingInfo includes information from the payment, collection, meter reading, installed meter, service, site, customer, customer account, customer agreement, services and pricing subject areas. Each component price shows up as a separate line item on the ErpInvoice.
         *
         */
        class CustomerBillingInfo extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CustomerBillingInfo;
                if (null == bucket)
                   cim_data.CustomerBillingInfo = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CustomerBillingInfo[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "CustomerBillingInfo";
                base.parse_element (/<cim:CustomerBillingInfo.billingDate>([\s\S]*?)<\/cim:CustomerBillingInfo.billingDate>/g, obj, "billingDate", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerBillingInfo.dueDate>([\s\S]*?)<\/cim:CustomerBillingInfo.dueDate>/g, obj, "dueDate", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerBillingInfo.kind>([\s\S]*?)<\/cim:CustomerBillingInfo.kind>/g, obj, "kind", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerBillingInfo.lastPaymentAmt>([\s\S]*?)<\/cim:CustomerBillingInfo.lastPaymentAmt>/g, obj, "lastPaymentAmt", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerBillingInfo.lastPaymentDate>([\s\S]*?)<\/cim:CustomerBillingInfo.lastPaymentDate>/g, obj, "lastPaymentDate", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerBillingInfo.outBalance>([\s\S]*?)<\/cim:CustomerBillingInfo.outBalance>/g, obj, "outBalance", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerBillingInfo.pymtPlanAmt>([\s\S]*?)<\/cim:CustomerBillingInfo.pymtPlanAmt>/g, obj, "pymtPlanAmt", base.to_string, sub, context);
                base.parse_element (/<cim:CustomerBillingInfo.pymtPlanType>([\s\S]*?)<\/cim:CustomerBillingInfo.pymtPlanType>/g, obj, "pymtPlanType", base.to_string, sub, context);
                base.parse_attribute (/<cim:CustomerBillingInfo.CustomerAccount\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAccount", sub, context);

                var bucket = context.parsed.CustomerBillingInfo;
                if (null == bucket)
                   context.parsed.CustomerBillingInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "CustomerBillingInfo", "billingDate", base.from_string, fields);
                base.export_element (obj, "CustomerBillingInfo", "dueDate", base.from_string, fields);
                base.export_element (obj, "CustomerBillingInfo", "kind", base.from_string, fields);
                base.export_element (obj, "CustomerBillingInfo", "lastPaymentAmt", base.from_string, fields);
                base.export_element (obj, "CustomerBillingInfo", "lastPaymentDate", base.from_string, fields);
                base.export_element (obj, "CustomerBillingInfo", "outBalance", base.from_string, fields);
                base.export_element (obj, "CustomerBillingInfo", "pymtPlanAmt", base.from_string, fields);
                base.export_element (obj, "CustomerBillingInfo", "pymtPlanType", base.from_string, fields);
                base.export_attribute (obj, "CustomerBillingInfo", "CustomerAccount", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                ExternalCustomerAgreement: ExternalCustomerAgreement,
                SubscribePowerCurve: SubscribePowerCurve,
                ComplianceEvent: ComplianceEvent,
                CustomerBillingKind: CustomerBillingKind,
                StandardIndustryCode: StandardIndustryCode,
                PowerQualityPricing: PowerQualityPricing,
                WorkBillingInfo: WorkBillingInfo,
                CustomerBillingInfo: CustomerBillingInfo,
                ServiceGuarantee: ServiceGuarantee
            }
        );
    }
);