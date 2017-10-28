define
(
    ["model/base", "model/Common", "model/Core"],
    /**
     * This package is an extension of the Metering package and contains the information classes that support specialised applications such as prepayment metering.
     *
     * These classes are generally associated with the collection and control of revenue from the customer for a delivered service.
     *
     */
    function (base, Common, Core)
    {

        /**
         * Record of total receipted payment from customer.
         *
         */
        function parse_Receipt (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Receipt";
            /**
             * True if this receipted payment is manually bankable, otherwise it is an electronic funds transfer.
             *
             */
            base.parse_element (/<cim:Receipt.isBankable>([\s\S]*?)<\/cim:Receipt.isBankable>/g, obj, "isBankable", base.to_boolean, sub, context);

            /**
             * Receipted amount with rounding, date and note.
             *
             */
            base.parse_element (/<cim:Receipt.line>([\s\S]*?)<\/cim:Receipt.line>/g, obj, "line", base.to_string, sub, context);

            /**
             * Vendor shift during which this receipt was recorded.
             *
             */
            base.parse_attribute (/<cim:Receipt.VendorShift\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "VendorShift", sub, context, true);

            /**
             * Cashier shift during which this receipt was recorded.
             *
             */
            base.parse_attribute (/<cim:Receipt.CashierShift\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CashierShift", sub, context, true);

            bucket = context.parsed.Receipt;
            if (null == bucket)
                context.parsed.Receipt = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Documentation of the tender when it is a type of card (credit, debit, etc).
         *
         */
        function parse_Card (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "Card";
            /**
             * Name of account holder.
             *
             */
            base.parse_element (/<cim:Card.accountHolderName>([\s\S]*?)<\/cim:Card.accountHolderName>/g, obj, "accountHolderName", base.to_string, sub, context);

            /**
             * The card verification number.
             *
             */
            base.parse_element (/<cim:Card.cvNumber>([\s\S]*?)<\/cim:Card.cvNumber>/g, obj, "cvNumber", base.to_string, sub, context);

            /**
             * The date when this card expires.
             *
             */
            base.parse_element (/<cim:Card.expiryDate>([\s\S]*?)<\/cim:Card.expiryDate>/g, obj, "expiryDate", base.to_string, sub, context);

            /**
             * The primary account number.
             *
             */
            base.parse_element (/<cim:Card.pan>([\s\S]*?)<\/cim:Card.pan>/g, obj, "pan", base.to_string, sub, context);

            /**
             * Payment tender this card is being used for.
             *
             */
            base.parse_attribute (/<cim:Card.Tender\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Tender", sub, context, true);

            bucket = context.parsed.Card;
            if (null == bucket)
                context.parsed.Card = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Details on amounts due for an account.
         *
         */
        function parse_Due (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "Due";
            /**
             * Part of 'current' that constitutes the arrears portion.
             *
             */
            base.parse_element (/<cim:Due.arrears>([\s\S]*?)<\/cim:Due.arrears>/g, obj, "arrears", base.to_string, sub, context);

            /**
             * Part of 'current' that constitutes the charge portion: 'charges' = 'Charge.fixedPortion' + 'Charge.variablePortion'.
             *
             */
            base.parse_element (/<cim:Due.charges>([\s\S]*?)<\/cim:Due.charges>/g, obj, "charges", base.to_string, sub, context);

            /**
             * Current total amount now due: current = principle + arrears + interest + charges.
             *
             * Typically the rule for settlement priority is: interest dues, then arrears dues, then current dues, then charge dues.
             *
             */
            base.parse_element (/<cim:Due.current>([\s\S]*?)<\/cim:Due.current>/g, obj, "current", base.to_string, sub, context);

            /**
             * Part of 'current' that constitutes the interest portion.
             *
             */
            base.parse_element (/<cim:Due.interest>([\s\S]*?)<\/cim:Due.interest>/g, obj, "interest", base.to_string, sub, context);

            /**
             * Part of 'current' that constitutes the portion of the principle amount currently due.
             *
             */
            base.parse_element (/<cim:Due.principle>([\s\S]*?)<\/cim:Due.principle>/g, obj, "principle", base.to_string, sub, context);

            bucket = context.parsed.Due;
            if (null == bucket)
                context.parsed.Due = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The operating shift for a vendor during which the vendor may transact against the merchant's account.
         *
         * It aggregates transactions and receipts during the shift and periodically debits a merchant account. The totals in vendor shift should always be the sum of totals aggregated in all cashier shifts that were open under the particular vendor shift.
         *
         */
        function parse_VendorShift (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Shift (context, sub);
            obj.cls = "VendorShift";
            /**
             * The amount that is to be debited from the merchant account for this vendor shift.
             *
             * This amount reflects the sum(PaymentTransaction.transactionAmount).
             *
             */
            base.parse_element (/<cim:VendorShift.merchantDebitAmount>([\s\S]*?)<\/cim:VendorShift.merchantDebitAmount>/g, obj, "merchantDebitAmount", base.to_string, sub, context);

            /**
             * If true, merchantDebitAmount has been debited from MerchantAccount; typically happens at the end of VendorShift when it closes.
             *
             */
            base.parse_element (/<cim:VendorShift.posted>([\s\S]*?)<\/cim:VendorShift.posted>/g, obj, "posted", base.to_boolean, sub, context);

            /**
             * Vendor that opens and owns this vendor shift.
             *
             */
            base.parse_attribute (/<cim:VendorShift.Vendor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Vendor", sub, context, true);

            /**
             * Merchant account this vendor shift periodically debits (based on aggregated transactions).
             *
             */
            base.parse_attribute (/<cim:VendorShift.MerchantAccount\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MerchantAccount", sub, context, true);

            bucket = context.parsed.VendorShift;
            if (null == bucket)
                context.parsed.VendorShift = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A charge element associated with other entities such as tariff structures, auxiliary agreements or other charge elements.
         *
         * The total charge amount applicable to this instance of charge is the sum of fixed and variable portion.
         *
         */
        function parse_Charge (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Charge";
            /**
             * The fixed portion of this charge element.
             *
             */
            base.parse_element (/<cim:Charge.fixedPortion>([\s\S]*?)<\/cim:Charge.fixedPortion>/g, obj, "fixedPortion", base.to_string, sub, context);

            /**
             * The kind of charge to be applied.
             *
             */
            base.parse_element (/<cim:Charge.kind>([\s\S]*?)<\/cim:Charge.kind>/g, obj, "kind", base.to_string, sub, context);

            /**
             * The variable portion of this charge element, calculated as a percentage of the total amount of a parent charge.
             *
             */
            base.parse_element (/<cim:Charge.variablePortion>([\s\S]*?)<\/cim:Charge.variablePortion>/g, obj, "variablePortion", base.to_string, sub, context);

            /**
             * Parent of this charge sub-component.
             *
             */
            base.parse_attribute (/<cim:Charge.ParentCharge\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ParentCharge", sub, context, true);

            bucket = context.parsed.Charge;
            if (null == bucket)
                context.parsed.Charge = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of cheque.
         *
         */
        function parse_ChequeKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ChequeKind";
            /**
             * Payment order used by institutions other than banks.
             *
             */
            base.parse_element (/<cim:ChequeKind.postalOrder>([\s\S]*?)<\/cim:ChequeKind.postalOrder>/g, obj, "postalOrder", base.to_string, sub, context);

            /**
             * Payment order used by a bank.
             *
             */
            base.parse_element (/<cim:ChequeKind.bankOrder>([\s\S]*?)<\/cim:ChequeKind.bankOrder>/g, obj, "bankOrder", base.to_string, sub, context);

            /**
             * Other kind of cheque.
             *
             */
            base.parse_element (/<cim:ChequeKind.other>([\s\S]*?)<\/cim:ChequeKind.other>/g, obj, "other", base.to_string, sub, context);

            bucket = context.parsed.ChequeKind;
            if (null == bucket)
                context.parsed.ChequeKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A schedule of charges; structure associated with Tariff that allows the definition of complex tarif structures such as step and time of use when used in conjunction with TimeTariffInterval and Charge.
         *
         * Inherited 'status.value' is defined in the context of the utility's business rules, for example: active, inactive, etc.
         *
         */
        function parse_TariffProfile (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "TariffProfile";
            /**
             * The frequency at which the tariff charge schedule is repeated.
             *
             * Examples are: once off on a specified date and time; hourly; daily; weekly; monthly; 3-monthly; 6-monthly; 12-monthly; etc. At the end of each cycle, the business rules are reset to start from the beginning again.
             *
             */
            base.parse_element (/<cim:TariffProfile.tariffCycle>([\s\S]*?)<\/cim:TariffProfile.tariffCycle>/g, obj, "tariffCycle", base.to_string, sub, context);

            bucket = context.parsed.TariffProfile;
            if (null == bucket)
                context.parsed.TariffProfile = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Credit/debit movements for an account.
         *
         */
        function parse_AccountMovement (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AccountMovement";
            /**
             * Amount that was credited to/debited from an account.
             *
             * For example: payment received/interest charge on arrears.
             *
             */
            base.parse_element (/<cim:AccountMovement.amount>([\s\S]*?)<\/cim:AccountMovement.amount>/g, obj, "amount", base.to_string, sub, context);

            /**
             * Date and time when the credit/debit transaction was performed.
             *
             */
            base.parse_element (/<cim:AccountMovement.dateTime>([\s\S]*?)<\/cim:AccountMovement.dateTime>/g, obj, "dateTime", base.to_datetime, sub, context);

            /**
             * Reason for credit/debit transaction on an account.
             *
             * Example: payment received/arrears interest levied.
             *
             */
            base.parse_element (/<cim:AccountMovement.reason>([\s\S]*?)<\/cim:AccountMovement.reason>/g, obj, "reason", base.to_string, sub, context);

            bucket = context.parsed.AccountMovement;
            if (null == bucket)
                context.parsed.AccountMovement = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * One of a sequence of intervals defined in terms of consumption quantity of a service such as electricity, water, gas, etc.
         *
         * It is typically used in association with TariffProfile to define the steps or blocks in a step tariff structure, where startValue simultaneously defines the entry value of this step and the closing value of the previous step. Where consumption is &gt;= startValue it falls within this interval and where consumption is &lt; startValue it falls within the previous interval.
         *
         */
        function parse_ConsumptionTariffInterval (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ConsumptionTariffInterval";
            /**
             * A sequential reference that defines the identity of this interval and its relative position with respect to other intervals in a sequence of intervals.
             *
             */
            base.parse_element (/<cim:ConsumptionTariffInterval.sequenceNumber>([\s\S]*?)<\/cim:ConsumptionTariffInterval.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);

            /**
             * The lowest level of consumption that defines the starting point of this interval.
             *
             * The interval extends to the start of the next interval or until it is reset to the start of the first interval by TariffProfile.tariffCycle.
             *
             */
            base.parse_element (/<cim:ConsumptionTariffInterval.startValue>([\s\S]*?)<\/cim:ConsumptionTariffInterval.startValue>/g, obj, "startValue", base.to_string, sub, context);

            bucket = context.parsed.ConsumptionTariffInterval;
            if (null == bucket)
                context.parsed.ConsumptionTariffInterval = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of tender.
         *
         */
        function parse_TenderKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TenderKind";
            /**
             * Payment method by means of a cheque.
             *
             */
            base.parse_element (/<cim:TenderKind.cheque>([\s\S]*?)<\/cim:TenderKind.cheque>/g, obj, "cheque", base.to_string, sub, context);

            /**
             * Payment method by means of a credit or debit card.
             *
             */
            base.parse_element (/<cim:TenderKind.card>([\s\S]*?)<\/cim:TenderKind.card>/g, obj, "card", base.to_string, sub, context);

            /**
             * Payment method by means of cash.
             *
             */
            base.parse_element (/<cim:TenderKind.cash>([\s\S]*?)<\/cim:TenderKind.cash>/g, obj, "cash", base.to_string, sub, context);

            /**
             * Payment method is not known.
             *
             */
            base.parse_element (/<cim:TenderKind.unspecified>([\s\S]*?)<\/cim:TenderKind.unspecified>/g, obj, "unspecified", base.to_string, sub, context);

            /**
             * Other payment method such as electronic finds transfer.
             *
             */
            base.parse_element (/<cim:TenderKind.other>([\s\S]*?)<\/cim:TenderKind.other>/g, obj, "other", base.to_string, sub, context);

            bucket = context.parsed.TenderKind;
            if (null == bucket)
                context.parsed.TenderKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * One of a sequence of time intervals defined in terms of real time.
         *
         * It is typically used in association with TariffProfile to define the intervals in a time of use tariff structure, where startDateTime simultaneously determines the starting point of this interval and the ending point of the previous interval.
         *
         */
        function parse_TimeTariffInterval (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TimeTariffInterval";
            /**
             * A sequential reference that defines the identity of this interval and its relative position with respect to other intervals in a sequence of intervals.
             *
             */
            base.parse_element (/<cim:TimeTariffInterval.sequenceNumber>([\s\S]*?)<\/cim:TimeTariffInterval.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);

            /**
             * A real time marker that defines the starting time (typically it is the time of day) for this interval.
             *
             * The interval extends to the start of the next interval or until it is reset to the start of the first interval by TariffProfile.tariffCycle.
             *
             */
            base.parse_element (/<cim:TimeTariffInterval.startTime>([\s\S]*?)<\/cim:TimeTariffInterval.startTime>/g, obj, "startTime", base.to_string, sub, context);

            bucket = context.parsed.TimeTariffInterval;
            if (null == bucket)
                context.parsed.TimeTariffInterval = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An ad-hoc auxiliary account agreement associated with a customer agreement, not part of the customer's account, but typically subject to formal agreement between customer and supplier (utility).
         *
         * Typically this is used to collect revenue owed by the customer for other services or arrears accrued with the utility for other services. It is typically linked to a prepaid token purchase transaction, thus forcing the customer to make a payment towards settlement of the auxiliary account balance whenever the customer needs to purchase a prepaid token for electricity.
         *
         */
        function parse_AuxiliaryAgreement (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Agreement (context, sub);
            obj.cls = "AuxiliaryAgreement";
            /**
             * The interest per annum to be charged prorata on 'AuxiliaryAccount.dueArrears' at the end of each 'payCycle'.
             *
             */
            base.parse_element (/<cim:AuxiliaryAgreement.arrearsInterest>([\s\S]*?)<\/cim:AuxiliaryAgreement.arrearsInterest>/g, obj, "arrearsInterest", base.to_string, sub, context);

            /**
             * The frequency for automatically recurring auxiliary charges, where 'AuxiliaryAccount.initialCharge' is recursively added to 'AuxiliaryAccount.dueCurrent' at the start of each 'auxCycle'.
             *
             * For example: on a specified date and time; hourly; daily; weekly; monthly; 3-monthly; 6-monthly; 12-monthly; etc.
             *
             */
            base.parse_element (/<cim:AuxiliaryAgreement.auxCycle>([\s\S]*?)<\/cim:AuxiliaryAgreement.auxCycle>/g, obj, "auxCycle", base.to_string, sub, context);

            /**
             * The coded priority indicating the priority that this auxiliary agreement has above other auxiliary agreements (associated with the same customer agreement) when it comes to competing for settlement from a payment transaction or token purchase.
             *
             */
            base.parse_element (/<cim:AuxiliaryAgreement.auxPriorityCode>([\s\S]*?)<\/cim:AuxiliaryAgreement.auxPriorityCode>/g, obj, "auxPriorityCode", base.to_string, sub, context);

            /**
             * The fixed amount that has to be collected from each vending transaction towards settlement of this auxiliary agreement.
             *
             * Note that there may be multiple tokens vended per vending transaction, but this is not relevant.
             *
             */
            base.parse_element (/<cim:AuxiliaryAgreement.fixedAmount>([\s\S]*?)<\/cim:AuxiliaryAgreement.fixedAmount>/g, obj, "fixedAmount", base.to_string, sub, context);

            /**
             * The minimum amount that has to be paid at any transaction towards settling this auxiliary agreement or reducing the balance.
             *
             */
            base.parse_element (/<cim:AuxiliaryAgreement.minAmount>([\s\S]*?)<\/cim:AuxiliaryAgreement.minAmount>/g, obj, "minAmount", base.to_string, sub, context);

            /**
             * The contractually expected payment frequency (by the customer).
             *
             * Examples are: ad-hoc; on specified date; hourly, daily, weekly, monthly. etc.
             *
             */
            base.parse_element (/<cim:AuxiliaryAgreement.payCycle>([\s\S]*?)<\/cim:AuxiliaryAgreement.payCycle>/g, obj, "payCycle", base.to_string, sub, context);

            /**
             * Sub-classification of the inherited 'type' for this AuxiliaryAgreement.
             *
             */
            base.parse_element (/<cim:AuxiliaryAgreement.subType>([\s\S]*?)<\/cim:AuxiliaryAgreement.subType>/g, obj, "subType", base.to_string, sub, context);

            /**
             * The percentage of the transaction amount that has to be collected from each vending transaction towards settlement of this auxiliary agreement when payments are not in arrears.
             *
             * Note that there may be multiple tokens vended per vending transaction, but this is not relevant.
             *
             */
            base.parse_element (/<cim:AuxiliaryAgreement.vendPortion>([\s\S]*?)<\/cim:AuxiliaryAgreement.vendPortion>/g, obj, "vendPortion", base.to_string, sub, context);

            /**
             * The percentage of the transaction amount that has to be collected from each vending transaction towards settlement of this auxiliary agreement when payments are in arrears.
             *
             * Note that there may be multiple tokens vended per vending transaction, but this is not relevant.
             *
             */
            base.parse_element (/<cim:AuxiliaryAgreement.vendPortionArrear>([\s\S]*?)<\/cim:AuxiliaryAgreement.vendPortionArrear>/g, obj, "vendPortionArrear", base.to_string, sub, context);

            /**
             * Customer agreement this (non-service related) auxiliary agreement refers to.
             *
             */
            base.parse_attribute (/<cim:AuxiliaryAgreement.CustomerAgreement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAgreement", sub, context, true);

            bucket = context.parsed.AuxiliaryAgreement;
            if (null == bucket)
                context.parsed.AuxiliaryAgreement = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The entity that owns the point of sale and contracts with the cashier to receipt payments and vend tokens using the payment system.
         *
         * The vendor has a private contract with and is managed by the merchant which is a type of organisation. The vendor is accountable to the merchant for revenue collected, and the merchant is in turn accountable to the supplier.
         *
         */
        function parse_Vendor (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Vendor";
            bucket = context.parsed.Vendor;
            if (null == bucket)
                context.parsed.Vendor = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Details of a bank account.
         *
         */
        function parse_BankAccountDetail (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "BankAccountDetail";
            /**
             * Operational account reference number.
             *
             */
            base.parse_element (/<cim:BankAccountDetail.accountNumber>([\s\S]*?)<\/cim:BankAccountDetail.accountNumber>/g, obj, "accountNumber", base.to_string, sub, context);

            /**
             * Name of bank where account is held.
             *
             */
            base.parse_element (/<cim:BankAccountDetail.bankName>([\s\S]*?)<\/cim:BankAccountDetail.bankName>/g, obj, "bankName", base.to_string, sub, context);

            /**
             * Branch of bank where account is held.
             *
             */
            base.parse_element (/<cim:BankAccountDetail.branchCode>([\s\S]*?)<\/cim:BankAccountDetail.branchCode>/g, obj, "branchCode", base.to_string, sub, context);

            /**
             * National identity number (or equivalent) of account holder.
             *
             */
            base.parse_element (/<cim:BankAccountDetail.holderID>([\s\S]*?)<\/cim:BankAccountDetail.holderID>/g, obj, "holderID", base.to_string, sub, context);

            /**
             * Name of account holder.
             *
             */
            base.parse_element (/<cim:BankAccountDetail.holderName>([\s\S]*?)<\/cim:BankAccountDetail.holderName>/g, obj, "holderName", base.to_string, sub, context);

            bucket = context.parsed.BankAccountDetail;
            if (null == bucket)
                context.parsed.BankAccountDetail = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Logical point where transactions take place with operational interaction between cashier and the payment system; in certain cases the point of sale interacts directly with the end customer, in which case the cashier might not be a real person: for example a self-service kiosk or over the internet.
         *
         */
        function parse_PointOfSale (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "PointOfSale";
            /**
             * Local description for where this point of sale is physically located.
             *
             */
            base.parse_element (/<cim:PointOfSale.location>([\s\S]*?)<\/cim:PointOfSale.location>/g, obj, "location", base.to_string, sub, context);

            bucket = context.parsed.PointOfSale;
            if (null == bucket)
                context.parsed.PointOfSale = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of charge.
         *
         */
        function parse_ChargeKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ChargeKind";
            /**
             * The charge levied for the actual usage of the service, normally expressed in terms of a tariff.
             *
             * For example: usage x price per kWh = total charge for consumption.
             *
             */
            base.parse_element (/<cim:ChargeKind.consumptionCharge>([\s\S]*?)<\/cim:ChargeKind.consumptionCharge>/g, obj, "consumptionCharge", base.to_string, sub, context);

            /**
             * The charge related to the usage within a defined time interval, normally expressed in terms of a tariff.
             *
             * For example: a maximum-demand tariff will levy an additional charge on top of the consumption charge if the usage exceeds a defined limit per hour.
             *
             */
            base.parse_element (/<cim:ChargeKind.demandCharge>([\s\S]*?)<\/cim:ChargeKind.demandCharge>/g, obj, "demandCharge", base.to_string, sub, context);

            /**
             * Any other charge which is not a consumptionCharge or demandCharge.
             *
             * For example: debt recovery, arrears, standing charge or charge for another service such as street lighting.
             *
             */
            base.parse_element (/<cim:ChargeKind.auxiliaryCharge>([\s\S]*?)<\/cim:ChargeKind.auxiliaryCharge>/g, obj, "auxiliaryCharge", base.to_string, sub, context);

            /**
             * Any charge that is classified as a tax of a kind.
             *
             * For example: VAT, GST, TV tax, etc.
             *
             */
            base.parse_element (/<cim:ChargeKind.taxCharge>([\s\S]*?)<\/cim:ChargeKind.taxCharge>/g, obj, "taxCharge", base.to_string, sub, context);

            /**
             * Other kind of charge.
             *
             */
            base.parse_element (/<cim:ChargeKind.other>([\s\S]*?)<\/cim:ChargeKind.other>/g, obj, "other", base.to_string, sub, context);

            bucket = context.parsed.ChargeKind;
            if (null == bucket)
                context.parsed.ChargeKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Generally referring to a period of operation or work performed.
         *
         * Whether the shift is open/closed can be derived from attributes 'activityInterval.start' and 'activityInterval.end'.
         *
         */
        function parse_Shift (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Shift";
            /**
             * Interval for activity of this shift.
             *
             */
            base.parse_element (/<cim:Shift.activityInterval>([\s\S]*?)<\/cim:Shift.activityInterval>/g, obj, "activityInterval", base.to_string, sub, context);

            /**
             * Total of amounts receipted during this shift that can be manually banked (cash and cheques for example).
             *
             * Values are obtained from Receipt attributes:
             *
             */
            base.parse_element (/<cim:Shift.receiptsGrandTotalBankable>([\s\S]*?)<\/cim:Shift.receiptsGrandTotalBankable>/g, obj, "receiptsGrandTotalBankable", base.to_string, sub, context);

            /**
             * Total of amounts receipted during this shift that cannot be manually banked (card payments for example).
             *
             * Values are obtained from Receipt attributes:
             *
             */
            base.parse_element (/<cim:Shift.receiptsGrandTotalNonBankable>([\s\S]*?)<\/cim:Shift.receiptsGrandTotalNonBankable>/g, obj, "receiptsGrandTotalNonBankable", base.to_string, sub, context);

            /**
             * Cumulative amount in error due to process rounding not reflected in receiptsGrandTotal.
             *
             * Values are obtained from Receipt attributes:
             *
             */
            base.parse_element (/<cim:Shift.receiptsGrandTotalRounding>([\s\S]*?)<\/cim:Shift.receiptsGrandTotalRounding>/g, obj, "receiptsGrandTotalRounding", base.to_string, sub, context);

            /**
             * Cumulative total of transacted amounts during this shift.
             *
             * Values are obtained from transaction:
             *
             */
            base.parse_element (/<cim:Shift.transactionsGrandTotal>([\s\S]*?)<\/cim:Shift.transactionsGrandTotal>/g, obj, "transactionsGrandTotal", base.to_string, sub, context);

            /**
             * Cumulative amount in error due to process rounding not reflected in transactionsGandTotal.
             *
             * Values are obtained from Transaction attributes:
             *
             */
            base.parse_element (/<cim:Shift.transactionsGrandTotalRounding>([\s\S]*?)<\/cim:Shift.transactionsGrandTotalRounding>/g, obj, "transactionsGrandTotalRounding", base.to_string, sub, context);

            bucket = context.parsed.Shift;
            if (null == bucket)
                context.parsed.Shift = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The operating shift for a cashier, during which the cashier may transact against the cashier shift, subject to vendor shift being open.
         *
         */
        function parse_CashierShift (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Shift (context, sub);
            obj.cls = "CashierShift";
            /**
             * The amount of cash that the cashier brings to start the shift and that will be taken away at the end of the shift; i.e. the cash float does not get banked.
             *
             */
            base.parse_element (/<cim:CashierShift.cashFloat>([\s\S]*?)<\/cim:CashierShift.cashFloat>/g, obj, "cashFloat", base.to_string, sub, context);

            /**
             * Cashier operating this shift.
             *
             */
            base.parse_attribute (/<cim:CashierShift.Cashier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Cashier", sub, context, true);

            /**
             * Point of sale that is in operation during this shift.
             *
             */
            base.parse_attribute (/<cim:CashierShift.PointOfSale\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PointOfSale", sub, context, true);

            bucket = context.parsed.CashierShift;
            if (null == bucket)
                context.parsed.CashierShift = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Details on an amount line, with rounding, date and note.
         *
         */
        function parse_LineDetail (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "LineDetail";
            /**
             * Amount for this line item.
             *
             */
            base.parse_element (/<cim:LineDetail.amount>([\s\S]*?)<\/cim:LineDetail.amount>/g, obj, "amount", base.to_string, sub, context);

            /**
             * Date and time when this line was created in the application process.
             *
             */
            base.parse_element (/<cim:LineDetail.dateTime>([\s\S]*?)<\/cim:LineDetail.dateTime>/g, obj, "dateTime", base.to_datetime, sub, context);

            /**
             * Free format note relevant to this line.
             *
             */
            base.parse_element (/<cim:LineDetail.note>([\s\S]*?)<\/cim:LineDetail.note>/g, obj, "note", base.to_string, sub, context);

            /**
             * Totalised monetary value of all errors due to process rounding or truncating that is not reflected in 'amount'.
             *
             */
            base.parse_element (/<cim:LineDetail.rounding>([\s\S]*?)<\/cim:LineDetail.rounding>/g, obj, "rounding", base.to_string, sub, context);

            bucket = context.parsed.LineDetail;
            if (null == bucket)
                context.parsed.LineDetail = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The operator of the point of sale for the duration of CashierShift.
         *
         * Cashier is under the exclusive management control of Vendor.
         *
         */
        function parse_Cashier (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Cashier";
            /**
             * Electronic address.
             *
             */
            base.parse_element (/<cim:Cashier.electronicAddress>([\s\S]*?)<\/cim:Cashier.electronicAddress>/g, obj, "electronicAddress", base.to_string, sub, context);

            bucket = context.parsed.Cashier;
            if (null == bucket)
                context.parsed.Cashier = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Organisation that provides services to customers.
         *
         */
        function parse_ServiceSupplier (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_OrganisationRole (context, sub);
            obj.cls = "ServiceSupplier";
            /**
             * Unique transaction reference prefix number issued to an entity by the International Organization for Standardization for the purpose of tagging onto electronic financial transactions, as defined in ISO/IEC 7812-1 and ISO/IEC 7812-2.
             *
             */
            base.parse_element (/<cim:ServiceSupplier.issuerIdentificationNumber>([\s\S]*?)<\/cim:ServiceSupplier.issuerIdentificationNumber>/g, obj, "issuerIdentificationNumber", base.to_string, sub, context);

            /**
             * Kind of supplier.
             *
             */
            base.parse_element (/<cim:ServiceSupplier.kind>([\s\S]*?)<\/cim:ServiceSupplier.kind>/g, obj, "kind", base.to_string, sub, context);

            bucket = context.parsed.ServiceSupplier;
            if (null == bucket)
                context.parsed.ServiceSupplier = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The actual tender when it is a type of cheque.
         *
         */
        function parse_Cheque (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "Cheque";
            /**
             * Details of the account holder and bank.
             *
             */
            base.parse_element (/<cim:Cheque.bankAccountDetail>([\s\S]*?)<\/cim:Cheque.bankAccountDetail>/g, obj, "bankAccountDetail", base.to_string, sub, context);

            /**
             * Cheque reference number as printed on the cheque.
             *
             */
            base.parse_element (/<cim:Cheque.chequeNumber>([\s\S]*?)<\/cim:Cheque.chequeNumber>/g, obj, "chequeNumber", base.to_string, sub, context);

            /**
             * Date when cheque becomes valid.
             *
             */
            base.parse_element (/<cim:Cheque.date>([\s\S]*?)<\/cim:Cheque.date>/g, obj, "date", base.to_string, sub, context);

            /**
             * Kind of cheque.
             *
             */
            base.parse_element (/<cim:Cheque.kind>([\s\S]*?)<\/cim:Cheque.kind>/g, obj, "kind", base.to_string, sub, context);

            /**
             * The magnetic ink character recognition number printed on the cheque.
             *
             */
            base.parse_element (/<cim:Cheque.micrNumber>([\s\S]*?)<\/cim:Cheque.micrNumber>/g, obj, "micrNumber", base.to_string, sub, context);

            /**
             * Payment tender the cheque is being used for.
             *
             */
            base.parse_attribute (/<cim:Cheque.Tender\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Tender", sub, context, true);

            bucket = context.parsed.Cheque;
            if (null == bucket)
                context.parsed.Cheque = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of supplier.
         *
         */
        function parse_SupplierKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SupplierKind";
            /**
             * Entity that delivers the service to the customer.
             *
             */
            base.parse_element (/<cim:SupplierKind.utility>([\s\S]*?)<\/cim:SupplierKind.utility>/g, obj, "utility", base.to_string, sub, context);

            /**
             * Entity that sells the service, but does not deliver to the customer; applies to the deregulated markets.
             *
             */
            base.parse_element (/<cim:SupplierKind.retailer>([\s\S]*?)<\/cim:SupplierKind.retailer>/g, obj, "retailer", base.to_string, sub, context);

            /**
             * Other kind of supplier.
             *
             */
            base.parse_element (/<cim:SupplierKind.other>([\s\S]*?)<\/cim:SupplierKind.other>/g, obj, "other", base.to_string, sub, context);

            bucket = context.parsed.SupplierKind;
            if (null == bucket)
                context.parsed.SupplierKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Tender is what is "offered" by the customer towards making a payment and is often more than the required payment (hence the need for 'change').
         *
         * The payment is thus that part of the Tender that goes towards settlement of a particular transaction.
         *
         */
        function parse_Tender (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Tender";
            /**
             * Amount tendered by customer.
             *
             */
            base.parse_element (/<cim:Tender.amount>([\s\S]*?)<\/cim:Tender.amount>/g, obj, "amount", base.to_string, sub, context);

            /**
             * Difference between amount tendered by customer and the amount charged by point of sale.
             *
             */
            base.parse_element (/<cim:Tender.change>([\s\S]*?)<\/cim:Tender.change>/g, obj, "change", base.to_string, sub, context);

            /**
             * Kind of tender from customer.
             *
             */
            base.parse_element (/<cim:Tender.kind>([\s\S]*?)<\/cim:Tender.kind>/g, obj, "kind", base.to_string, sub, context);

            /**
             * Cheque used to tender payment.
             *
             */
            base.parse_attribute (/<cim:Tender.Cheque\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Cheque", sub, context, true);

            /**
             * Card used to tender payment.
             *
             */
            base.parse_attribute (/<cim:Tender.Card\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Card", sub, context, true);

            /**
             * Receipt that recorded this receiving of a payment in the form of tenders.
             *
             */
            base.parse_attribute (/<cim:Tender.Receipt\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Receipt", sub, context, true);

            bucket = context.parsed.Tender;
            if (null == bucket)
                context.parsed.Tender = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The entity that ultimately executes the transaction and which is in control of the process; typically this is embodied in secure software running on a server that may employ secure hardware encryption devices for secure transaction processing.
         *
         */
        function parse_Transactor (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Transactor";
            bucket = context.parsed.Transactor;
            if (null == bucket)
                context.parsed.Transactor = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Variable and dynamic part of auxiliary agreement, generally representing the current state of the account related to the outstanding balance defined in auxiliary agreement.
         *
         */
        function parse_AuxiliaryAccount (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "AuxiliaryAccount";
            /**
             * The total amount currently remaining on this account that is required to be paid in order to settle the account to zero.
             *
             * This excludes any due amounts not yet paid.
             *
             */
            base.parse_element (/<cim:AuxiliaryAccount.balance>([\s\S]*?)<\/cim:AuxiliaryAccount.balance>/g, obj, "balance", base.to_string, sub, context);

            /**
             * Current amounts now due for payment on this account.
             *
             */
            base.parse_element (/<cim:AuxiliaryAccount.due>([\s\S]*?)<\/cim:AuxiliaryAccount.due>/g, obj, "due", base.to_string, sub, context);

            /**
             * Details of the last credit transaction performed on this account.
             *
             */
            base.parse_element (/<cim:AuxiliaryAccount.lastCredit>([\s\S]*?)<\/cim:AuxiliaryAccount.lastCredit>/g, obj, "lastCredit", base.to_string, sub, context);

            /**
             * Details of the last debit transaction performed on this account.
             *
             */
            base.parse_element (/<cim:AuxiliaryAccount.lastDebit>([\s\S]*?)<\/cim:AuxiliaryAccount.lastDebit>/g, obj, "lastDebit", base.to_string, sub, context);

            /**
             * The initial principle amount, with which this account was instantiated.
             *
             */
            base.parse_element (/<cim:AuxiliaryAccount.principleAmount>([\s\S]*?)<\/cim:AuxiliaryAccount.principleAmount>/g, obj, "principleAmount", base.to_string, sub, context);

            /**
             * Auxiliary agreement regulating this account.
             *
             */
            base.parse_attribute (/<cim:AuxiliaryAccount.AuxiliaryAgreement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AuxiliaryAgreement", sub, context, true);

            bucket = context.parsed.AuxiliaryAccount;
            if (null == bucket)
                context.parsed.AuxiliaryAccount = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Unit for accounting; use either 'energyUnit' or 'currencyUnit' to specify the unit for 'value'.
         *
         */
        function parse_AccountingUnit (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AccountingUnit";
            /**
             * Unit of service.
             *
             */
            base.parse_element (/<cim:AccountingUnit.energyUnit>([\s\S]*?)<\/cim:AccountingUnit.energyUnit>/g, obj, "energyUnit", base.to_string, sub, context);

            /**
             * Unit of currency.
             *
             */
            base.parse_element (/<cim:AccountingUnit.monetaryUnit>([\s\S]*?)<\/cim:AccountingUnit.monetaryUnit>/g, obj, "monetaryUnit", base.to_string, sub, context);

            /**
             * Multiplier for the 'energyUnit' or 'monetaryUnit'.
             *
             */
            base.parse_element (/<cim:AccountingUnit.multiplier>([\s\S]*?)<\/cim:AccountingUnit.multiplier>/g, obj, "multiplier", base.to_string, sub, context);

            /**
             * Value expressed in applicable units.
             *
             */
            base.parse_element (/<cim:AccountingUnit.value>([\s\S]*?)<\/cim:AccountingUnit.value>/g, obj, "value", base.to_float, sub, context);

            bucket = context.parsed.AccountingUnit;
            if (null == bucket)
                context.parsed.AccountingUnit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A formal controlling contractual agreement between supplier and merchant, in terms of which the merchant is authorised to vend tokens and receipt payments on behalf of the supplier.
         *
         * The merchant is accountable to the supplier for revenue collected at point of sale.
         *
         */
        function parse_MerchantAgreement (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Agreement (context, sub);
            obj.cls = "MerchantAgreement";
            bucket = context.parsed.MerchantAgreement;
            if (null == bucket)
                context.parsed.MerchantAgreement = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of transaction.
         *
         */
        function parse_TransactionKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TransactionKind";
            /**
             * Payment for a service.
             *
             */
            base.parse_element (/<cim:TransactionKind.serviceChargePayment>([\s\S]*?)<\/cim:TransactionKind.serviceChargePayment>/g, obj, "serviceChargePayment", base.to_string, sub, context);

            /**
             * Payment for a tax.
             *
             */
            base.parse_element (/<cim:TransactionKind.taxChargePayment>([\s\S]*?)<\/cim:TransactionKind.taxChargePayment>/g, obj, "taxChargePayment", base.to_string, sub, context);

            /**
             * Payment against a specified auxiliary account.
             *
             */
            base.parse_element (/<cim:TransactionKind.auxiliaryChargePayment>([\s\S]*?)<\/cim:TransactionKind.auxiliaryChargePayment>/g, obj, "auxiliaryChargePayment", base.to_string, sub, context);

            /**
             * Payment against a specified account.
             *
             */
            base.parse_element (/<cim:TransactionKind.accountPayment>([\s\S]*?)<\/cim:TransactionKind.accountPayment>/g, obj, "accountPayment", base.to_string, sub, context);

            /**
             * Payment against an item other than an account.
             *
             */
            base.parse_element (/<cim:TransactionKind.diversePayment>([\s\S]*?)<\/cim:TransactionKind.diversePayment>/g, obj, "diversePayment", base.to_string, sub, context);

            /**
             * Reversal of a previous transaction.
             *
             */
            base.parse_element (/<cim:TransactionKind.transactionReversal>([\s\S]*?)<\/cim:TransactionKind.transactionReversal>/g, obj, "transactionReversal", base.to_string, sub, context);

            /**
             * Payment for a credit token sale to a customer.
             *
             */
            base.parse_element (/<cim:TransactionKind.tokenSalePayment>([\s\S]*?)<\/cim:TransactionKind.tokenSalePayment>/g, obj, "tokenSalePayment", base.to_string, sub, context);

            /**
             * Issue of a free credit token where the donor is the supplier.
             *
             */
            base.parse_element (/<cim:TransactionKind.tokenFreeIssue>([\s\S]*?)<\/cim:TransactionKind.tokenFreeIssue>/g, obj, "tokenFreeIssue", base.to_string, sub, context);

            /**
             * Issue of a free credit token where the donor is a 3<sup>rd</sup> party.
             *
             */
            base.parse_element (/<cim:TransactionKind.tokenGrant>([\s\S]*?)<\/cim:TransactionKind.tokenGrant>/g, obj, "tokenGrant", base.to_string, sub, context);

            /**
             * Exchange of a previously issued token for a new token.
             *
             */
            base.parse_element (/<cim:TransactionKind.tokenExchange>([\s\S]*?)<\/cim:TransactionKind.tokenExchange>/g, obj, "tokenExchange", base.to_string, sub, context);

            /**
             * Cancellation of a previously issued token.
             *
             */
            base.parse_element (/<cim:TransactionKind.tokenCancellation>([\s\S]*?)<\/cim:TransactionKind.tokenCancellation>/g, obj, "tokenCancellation", base.to_string, sub, context);

            /**
             * Issue of token that will alter the meter configuration.
             *
             */
            base.parse_element (/<cim:TransactionKind.meterConfigurationToken>([\s\S]*?)<\/cim:TransactionKind.meterConfigurationToken>/g, obj, "meterConfigurationToken", base.to_string, sub, context);

            /**
             * Other kind of transaction.
             *
             */
            base.parse_element (/<cim:TransactionKind.other>([\s\S]*?)<\/cim:TransactionKind.other>/g, obj, "other", base.to_string, sub, context);

            bucket = context.parsed.TransactionKind;
            if (null == bucket)
                context.parsed.TransactionKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The record of details of payment for service or token sale.
         *
         */
        function parse_Transaction (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Transaction";
            /**
             * Formal reference for use with diverse payment (traffic fine for example).
             *
             */
            base.parse_element (/<cim:Transaction.diverseReference>([\s\S]*?)<\/cim:Transaction.diverseReference>/g, obj, "diverseReference", base.to_string, sub, context);

            /**
             * Reference to the entity that is the source of 'amount' (for example: customer for token purchase; or supplier for free issue token).
             *
             */
            base.parse_element (/<cim:Transaction.donorReference>([\s\S]*?)<\/cim:Transaction.donorReference>/g, obj, "donorReference", base.to_string, sub, context);

            /**
             * Kind of transaction.
             *
             */
            base.parse_element (/<cim:Transaction.kind>([\s\S]*?)<\/cim:Transaction.kind>/g, obj, "kind", base.to_string, sub, context);

            /**
             * Transaction amount, rounding, date and note for this transaction line.
             *
             */
            base.parse_element (/<cim:Transaction.line>([\s\S]*?)<\/cim:Transaction.line>/g, obj, "line", base.to_string, sub, context);

            /**
             * Reference to the entity that is the recipient of 'amount' (for example, supplier for service charge payment; or tax receiver for VAT).
             *
             */
            base.parse_element (/<cim:Transaction.receiverReference>([\s\S]*?)<\/cim:Transaction.receiverReference>/g, obj, "receiverReference", base.to_string, sub, context);

            /**
             * (if 'kind' is transactionReversal) Reference to the original transaction that is being reversed by this transaction.
             *
             */
            base.parse_element (/<cim:Transaction.reversedId>([\s\S]*?)<\/cim:Transaction.reversedId>/g, obj, "reversedId", base.to_string, sub, context);

            /**
             * Actual amount of service units that is being paid for.
             *
             */
            base.parse_element (/<cim:Transaction.serviceUnitsEnergy>([\s\S]*?)<\/cim:Transaction.serviceUnitsEnergy>/g, obj, "serviceUnitsEnergy", base.to_string, sub, context);

            /**
             * Number of service units not reflected in 'serviceUnitsEnergy' due to process rounding or truncating errors.
             *
             */
            base.parse_element (/<cim:Transaction.serviceUnitsError>([\s\S]*?)<\/cim:Transaction.serviceUnitsError>/g, obj, "serviceUnitsError", base.to_string, sub, context);

            /**
             * Pricing structure applicable for this transaction.
             *
             */
            base.parse_attribute (/<cim:Transaction.PricingStructure\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PricingStructure", sub, context, true);

            /**
             * Auxiliary account for this payment transaction.
             *
             */
            base.parse_attribute (/<cim:Transaction.AuxiliaryAccount\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AuxiliaryAccount", sub, context, true);

            /**
             * The receipted payment for which this transaction has been recorded.
             *
             */
            base.parse_attribute (/<cim:Transaction.Receipt\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Receipt", sub, context, true);

            /**
             * Vendor shift during which this transaction was recorded.
             *
             */
            base.parse_attribute (/<cim:Transaction.VendorShift\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "VendorShift", sub, context, true);

            /**
             * Cashier shift during which this transaction was recorded.
             *
             */
            base.parse_attribute (/<cim:Transaction.CashierShift\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CashierShift", sub, context, true);

            /**
             * Meter for this vending transaction.
             *
             */
            base.parse_attribute (/<cim:Transaction.Meter\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Meter", sub, context, true);

            /**
             * Customer account for this payment transaction.
             *
             */
            base.parse_attribute (/<cim:Transaction.CustomerAccount\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAccount", sub, context, true);

            bucket = context.parsed.Transaction;
            if (null == bucket)
                context.parsed.Transaction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The operating account controlled by merchant agreement, against which the vendor may vend tokens or receipt payments.
         *
         * Transactions via vendor shift debit the account and bank deposits via bank statement credit the account.
         *
         */
        function parse_MerchantAccount (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "MerchantAccount";
            /**
             * The current operating balance of this account.
             *
             */
            base.parse_element (/<cim:MerchantAccount.currentBalance>([\s\S]*?)<\/cim:MerchantAccount.currentBalance>/g, obj, "currentBalance", base.to_string, sub, context);

            /**
             * The balance of this account after taking into account any pending debits from VendorShift.merchantDebitAmount and pending credits from BankStatement.merchantCreditAmount or credits (see also BankStatement attributes and VendorShift attributes).
             *
             */
            base.parse_element (/<cim:MerchantAccount.provisionalBalance>([\s\S]*?)<\/cim:MerchantAccount.provisionalBalance>/g, obj, "provisionalBalance", base.to_string, sub, context);

            /**
             * Merchant agreement that instantiated this merchant account.
             *
             */
            base.parse_attribute (/<cim:MerchantAccount.MerchantAgreement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MerchantAgreement", sub, context, true);

            bucket = context.parsed.MerchantAccount;
            if (null == bucket)
                context.parsed.MerchantAccount = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_Charge: parse_Charge,
                parse_MerchantAgreement: parse_MerchantAgreement,
                parse_Tender: parse_Tender,
                parse_TimeTariffInterval: parse_TimeTariffInterval,
                parse_Due: parse_Due,
                parse_ChequeKind: parse_ChequeKind,
                parse_Vendor: parse_Vendor,
                parse_AccountingUnit: parse_AccountingUnit,
                parse_CashierShift: parse_CashierShift,
                parse_TariffProfile: parse_TariffProfile,
                parse_ConsumptionTariffInterval: parse_ConsumptionTariffInterval,
                parse_MerchantAccount: parse_MerchantAccount,
                parse_PointOfSale: parse_PointOfSale,
                parse_SupplierKind: parse_SupplierKind,
                parse_Transactor: parse_Transactor,
                parse_LineDetail: parse_LineDetail,
                parse_AccountMovement: parse_AccountMovement,
                parse_ChargeKind: parse_ChargeKind,
                parse_Cashier: parse_Cashier,
                parse_Shift: parse_Shift,
                parse_TransactionKind: parse_TransactionKind,
                parse_Transaction: parse_Transaction,
                parse_AuxiliaryAgreement: parse_AuxiliaryAgreement,
                parse_VendorShift: parse_VendorShift,
                parse_AuxiliaryAccount: parse_AuxiliaryAccount,
                parse_TenderKind: parse_TenderKind,
                parse_BankAccountDetail: parse_BankAccountDetail,
                parse_Receipt: parse_Receipt,
                parse_Cheque: parse_Cheque,
                parse_Card: parse_Card,
                parse_ServiceSupplier: parse_ServiceSupplier
            }
        );
    }
);