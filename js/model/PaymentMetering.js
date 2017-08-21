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
            obj["isBankable"] = base.to_boolean (base.parse_element (/<cim:Receipt.isBankable>([\s\S]*?)<\/cim:Receipt.isBankable>/g, sub, context, true));
            /**
             * Receipted amount with rounding, date and note.
             *
             */
            obj["line"] = base.parse_element (/<cim:Receipt.line>([\s\S]*?)<\/cim:Receipt.line>/g, sub, context, true);
            /**
             * Vendor shift during which this receipt was recorded.
             *
             */
            obj["VendorShift"] = base.parse_attribute (/<cim:Receipt.VendorShift\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Cashier shift during which this receipt was recorded.
             *
             */
            obj["CashierShift"] = base.parse_attribute (/<cim:Receipt.CashierShift\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["accountHolderName"] = base.parse_element (/<cim:Card.accountHolderName>([\s\S]*?)<\/cim:Card.accountHolderName>/g, sub, context, true);
            /**
             * The card verification number.
             *
             */
            obj["cvNumber"] = base.parse_element (/<cim:Card.cvNumber>([\s\S]*?)<\/cim:Card.cvNumber>/g, sub, context, true);
            /**
             * The date when this card expires.
             *
             */
            obj["expiryDate"] = base.parse_element (/<cim:Card.expiryDate>([\s\S]*?)<\/cim:Card.expiryDate>/g, sub, context, true);
            /**
             * The primary account number.
             *
             */
            obj["pan"] = base.parse_element (/<cim:Card.pan>([\s\S]*?)<\/cim:Card.pan>/g, sub, context, true);
            /**
             * Payment tender this card is being used for.
             *
             */
            obj["Tender"] = base.parse_attribute (/<cim:Card.Tender\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["arrears"] = base.parse_element (/<cim:Due.arrears>([\s\S]*?)<\/cim:Due.arrears>/g, sub, context, true);
            /**
             * Part of 'current' that constitutes the charge portion: 'charges' = 'Charge.fixedPortion' + 'Charge.variablePortion'.
             *
             */
            obj["charges"] = base.parse_element (/<cim:Due.charges>([\s\S]*?)<\/cim:Due.charges>/g, sub, context, true);
            /**
             * Current total amount now due: current = principle + arrears + interest + charges.
             *
             * Typically the rule for settlement priority is: interest dues, then arrears dues, then current dues, then charge dues.
             *
             */
            obj["current"] = base.parse_element (/<cim:Due.current>([\s\S]*?)<\/cim:Due.current>/g, sub, context, true);
            /**
             * Part of 'current' that constitutes the interest portion.
             *
             */
            obj["interest"] = base.parse_element (/<cim:Due.interest>([\s\S]*?)<\/cim:Due.interest>/g, sub, context, true);
            /**
             * Part of 'current' that constitutes the portion of the principle amount currently due.
             *
             */
            obj["principle"] = base.parse_element (/<cim:Due.principle>([\s\S]*?)<\/cim:Due.principle>/g, sub, context, true);
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
            obj["merchantDebitAmount"] = base.parse_element (/<cim:VendorShift.merchantDebitAmount>([\s\S]*?)<\/cim:VendorShift.merchantDebitAmount>/g, sub, context, true);
            /**
             * If true, merchantDebitAmount has been debited from MerchantAccount; typically happens at the end of VendorShift when it closes.
             *
             */
            obj["posted"] = base.to_boolean (base.parse_element (/<cim:VendorShift.posted>([\s\S]*?)<\/cim:VendorShift.posted>/g, sub, context, true));
            /**
             * Vendor that opens and owns this vendor shift.
             *
             */
            obj["Vendor"] = base.parse_attribute (/<cim:VendorShift.Vendor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Merchant account this vendor shift periodically debits (based on aggregated transactions).
             *
             */
            obj["MerchantAccount"] = base.parse_attribute (/<cim:VendorShift.MerchantAccount\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["fixedPortion"] = base.parse_element (/<cim:Charge.fixedPortion>([\s\S]*?)<\/cim:Charge.fixedPortion>/g, sub, context, true);
            /**
             * The kind of charge to be applied.
             *
             */
            obj["kind"] = base.parse_element (/<cim:Charge.kind>([\s\S]*?)<\/cim:Charge.kind>/g, sub, context, true);
            /**
             * The variable portion of this charge element, calculated as a percentage of the total amount of a parent charge.
             *
             */
            obj["variablePortion"] = base.parse_element (/<cim:Charge.variablePortion>([\s\S]*?)<\/cim:Charge.variablePortion>/g, sub, context, true);
            /**
             * Parent of this charge sub-component.
             *
             */
            obj["ParentCharge"] = base.parse_attribute (/<cim:Charge.ParentCharge\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["postalOrder"] = base.parse_element (/<cim:ChequeKind.postalOrder>([\s\S]*?)<\/cim:ChequeKind.postalOrder>/g, sub, context, true);
            /**
             * Payment order used by a bank.
             *
             */
            obj["bankOrder"] = base.parse_element (/<cim:ChequeKind.bankOrder>([\s\S]*?)<\/cim:ChequeKind.bankOrder>/g, sub, context, true);
            /**
             * Other kind of cheque.
             *
             */
            obj["other"] = base.parse_element (/<cim:ChequeKind.other>([\s\S]*?)<\/cim:ChequeKind.other>/g, sub, context, true);
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
            obj["tariffCycle"] = base.parse_element (/<cim:TariffProfile.tariffCycle>([\s\S]*?)<\/cim:TariffProfile.tariffCycle>/g, sub, context, true);
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
            obj["amount"] = base.parse_element (/<cim:AccountMovement.amount>([\s\S]*?)<\/cim:AccountMovement.amount>/g, sub, context, true);
            /**
             * Date and time when the credit/debit transaction was performed.
             *
             */
            obj["dateTime"] = base.to_datetime (base.parse_element (/<cim:AccountMovement.dateTime>([\s\S]*?)<\/cim:AccountMovement.dateTime>/g, sub, context, true));
            /**
             * Reason for credit/debit transaction on an account.
             *
             * Example: payment received/arrears interest levied.
             *
             */
            obj["reason"] = base.parse_element (/<cim:AccountMovement.reason>([\s\S]*?)<\/cim:AccountMovement.reason>/g, sub, context, true);
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
            obj["sequenceNumber"] = base.parse_element (/<cim:ConsumptionTariffInterval.sequenceNumber>([\s\S]*?)<\/cim:ConsumptionTariffInterval.sequenceNumber>/g, sub, context, true);
            /**
             * The lowest level of consumption that defines the starting point of this interval.
             *
             * The interval extends to the start of the next interval or until it is reset to the start of the first interval by TariffProfile.tariffCycle.
             *
             */
            obj["startValue"] = base.parse_element (/<cim:ConsumptionTariffInterval.startValue>([\s\S]*?)<\/cim:ConsumptionTariffInterval.startValue>/g, sub, context, true);
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
            obj["cheque"] = base.parse_element (/<cim:TenderKind.cheque>([\s\S]*?)<\/cim:TenderKind.cheque>/g, sub, context, true);
            /**
             * Payment method by means of a credit or debit card.
             *
             */
            obj["card"] = base.parse_element (/<cim:TenderKind.card>([\s\S]*?)<\/cim:TenderKind.card>/g, sub, context, true);
            /**
             * Payment method by means of cash.
             *
             */
            obj["cash"] = base.parse_element (/<cim:TenderKind.cash>([\s\S]*?)<\/cim:TenderKind.cash>/g, sub, context, true);
            /**
             * Payment method is not known.
             *
             */
            obj["unspecified"] = base.parse_element (/<cim:TenderKind.unspecified>([\s\S]*?)<\/cim:TenderKind.unspecified>/g, sub, context, true);
            /**
             * Other payment method such as electronic finds transfer.
             *
             */
            obj["other"] = base.parse_element (/<cim:TenderKind.other>([\s\S]*?)<\/cim:TenderKind.other>/g, sub, context, true);
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
            obj["sequenceNumber"] = base.parse_element (/<cim:TimeTariffInterval.sequenceNumber>([\s\S]*?)<\/cim:TimeTariffInterval.sequenceNumber>/g, sub, context, true);
            /**
             * A real time marker that defines the starting time (typically it is the time of day) for this interval.
             *
             * The interval extends to the start of the next interval or until it is reset to the start of the first interval by TariffProfile.tariffCycle.
             *
             */
            obj["startTime"] = base.parse_element (/<cim:TimeTariffInterval.startTime>([\s\S]*?)<\/cim:TimeTariffInterval.startTime>/g, sub, context, true);
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
            obj["arrearsInterest"] = base.parse_element (/<cim:AuxiliaryAgreement.arrearsInterest>([\s\S]*?)<\/cim:AuxiliaryAgreement.arrearsInterest>/g, sub, context, true);
            /**
             * The frequency for automatically recurring auxiliary charges, where 'AuxiliaryAccount.initialCharge' is recursively added to 'AuxiliaryAccount.dueCurrent' at the start of each 'auxCycle'.
             *
             * For example: on a specified date and time; hourly; daily; weekly; monthly; 3-monthly; 6-monthly; 12-monthly; etc.
             *
             */
            obj["auxCycle"] = base.parse_element (/<cim:AuxiliaryAgreement.auxCycle>([\s\S]*?)<\/cim:AuxiliaryAgreement.auxCycle>/g, sub, context, true);
            /**
             * The coded priority indicating the priority that this auxiliary agreement has above other auxiliary agreements (associated with the same customer agreement) when it comes to competing for settlement from a payment transaction or token purchase.
             *
             */
            obj["auxPriorityCode"] = base.parse_element (/<cim:AuxiliaryAgreement.auxPriorityCode>([\s\S]*?)<\/cim:AuxiliaryAgreement.auxPriorityCode>/g, sub, context, true);
            /**
             * The fixed amount that has to be collected from each vending transaction towards settlement of this auxiliary agreement.
             *
             * Note that there may be multiple tokens vended per vending transaction, but this is not relevant.
             *
             */
            obj["fixedAmount"] = base.parse_element (/<cim:AuxiliaryAgreement.fixedAmount>([\s\S]*?)<\/cim:AuxiliaryAgreement.fixedAmount>/g, sub, context, true);
            /**
             * The minimum amount that has to be paid at any transaction towards settling this auxiliary agreement or reducing the balance.
             *
             */
            obj["minAmount"] = base.parse_element (/<cim:AuxiliaryAgreement.minAmount>([\s\S]*?)<\/cim:AuxiliaryAgreement.minAmount>/g, sub, context, true);
            /**
             * The contractually expected payment frequency (by the customer).
             *
             * Examples are: ad-hoc; on specified date; hourly, daily, weekly, monthly. etc.
             *
             */
            obj["payCycle"] = base.parse_element (/<cim:AuxiliaryAgreement.payCycle>([\s\S]*?)<\/cim:AuxiliaryAgreement.payCycle>/g, sub, context, true);
            /**
             * Sub-classification of the inherited 'type' for this AuxiliaryAgreement.
             *
             */
            obj["subType"] = base.parse_element (/<cim:AuxiliaryAgreement.subType>([\s\S]*?)<\/cim:AuxiliaryAgreement.subType>/g, sub, context, true);
            /**
             * The percentage of the transaction amount that has to be collected from each vending transaction towards settlement of this auxiliary agreement when payments are not in arrears.
             *
             * Note that there may be multiple tokens vended per vending transaction, but this is not relevant.
             *
             */
            obj["vendPortion"] = base.parse_element (/<cim:AuxiliaryAgreement.vendPortion>([\s\S]*?)<\/cim:AuxiliaryAgreement.vendPortion>/g, sub, context, true);
            /**
             * The percentage of the transaction amount that has to be collected from each vending transaction towards settlement of this auxiliary agreement when payments are in arrears.
             *
             * Note that there may be multiple tokens vended per vending transaction, but this is not relevant.
             *
             */
            obj["vendPortionArrear"] = base.parse_element (/<cim:AuxiliaryAgreement.vendPortionArrear>([\s\S]*?)<\/cim:AuxiliaryAgreement.vendPortionArrear>/g, sub, context, true);
            /**
             * Customer agreement this (non-service related) auxiliary agreement refers to.
             *
             */
            obj["CustomerAgreement"] = base.parse_attribute (/<cim:AuxiliaryAgreement.CustomerAgreement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["accountNumber"] = base.parse_element (/<cim:BankAccountDetail.accountNumber>([\s\S]*?)<\/cim:BankAccountDetail.accountNumber>/g, sub, context, true);
            /**
             * Name of bank where account is held.
             *
             */
            obj["bankName"] = base.parse_element (/<cim:BankAccountDetail.bankName>([\s\S]*?)<\/cim:BankAccountDetail.bankName>/g, sub, context, true);
            /**
             * Branch of bank where account is held.
             *
             */
            obj["branchCode"] = base.parse_element (/<cim:BankAccountDetail.branchCode>([\s\S]*?)<\/cim:BankAccountDetail.branchCode>/g, sub, context, true);
            /**
             * National identity number (or equivalent) of account holder.
             *
             */
            obj["holderID"] = base.parse_element (/<cim:BankAccountDetail.holderID>([\s\S]*?)<\/cim:BankAccountDetail.holderID>/g, sub, context, true);
            /**
             * Name of account holder.
             *
             */
            obj["holderName"] = base.parse_element (/<cim:BankAccountDetail.holderName>([\s\S]*?)<\/cim:BankAccountDetail.holderName>/g, sub, context, true);
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
            obj["location"] = base.parse_element (/<cim:PointOfSale.location>([\s\S]*?)<\/cim:PointOfSale.location>/g, sub, context, true);
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
            obj["consumptionCharge"] = base.parse_element (/<cim:ChargeKind.consumptionCharge>([\s\S]*?)<\/cim:ChargeKind.consumptionCharge>/g, sub, context, true);
            /**
             * The charge related to the usage within a defined time interval, normally expressed in terms of a tariff.
             *
             * For example: a maximum-demand tariff will levy an additional charge on top of the consumption charge if the usage exceeds a defined limit per hour.
             *
             */
            obj["demandCharge"] = base.parse_element (/<cim:ChargeKind.demandCharge>([\s\S]*?)<\/cim:ChargeKind.demandCharge>/g, sub, context, true);
            /**
             * Any other charge which is not a consumptionCharge or demandCharge.
             *
             * For example: debt recovery, arrears, standing charge or charge for another service such as street lighting.
             *
             */
            obj["auxiliaryCharge"] = base.parse_element (/<cim:ChargeKind.auxiliaryCharge>([\s\S]*?)<\/cim:ChargeKind.auxiliaryCharge>/g, sub, context, true);
            /**
             * Any charge that is classified as a tax of a kind.
             *
             * For example: VAT, GST, TV tax, etc.
             *
             */
            obj["taxCharge"] = base.parse_element (/<cim:ChargeKind.taxCharge>([\s\S]*?)<\/cim:ChargeKind.taxCharge>/g, sub, context, true);
            /**
             * Other kind of charge.
             *
             */
            obj["other"] = base.parse_element (/<cim:ChargeKind.other>([\s\S]*?)<\/cim:ChargeKind.other>/g, sub, context, true);
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
            obj["activityInterval"] = base.parse_element (/<cim:Shift.activityInterval>([\s\S]*?)<\/cim:Shift.activityInterval>/g, sub, context, true);
            /**
             * Total of amounts receipted during this shift that can be manually banked (cash and cheques for example).
             *
             * Values are obtained from Receipt attributes:
             *
             */
            obj["receiptsGrandTotalBankable"] = base.parse_element (/<cim:Shift.receiptsGrandTotalBankable>([\s\S]*?)<\/cim:Shift.receiptsGrandTotalBankable>/g, sub, context, true);
            /**
             * Total of amounts receipted during this shift that cannot be manually banked (card payments for example).
             *
             * Values are obtained from Receipt attributes:
             *
             */
            obj["receiptsGrandTotalNonBankable"] = base.parse_element (/<cim:Shift.receiptsGrandTotalNonBankable>([\s\S]*?)<\/cim:Shift.receiptsGrandTotalNonBankable>/g, sub, context, true);
            /**
             * Cumulative amount in error due to process rounding not reflected in receiptsGrandTotal.
             *
             * Values are obtained from Receipt attributes:
             *
             */
            obj["receiptsGrandTotalRounding"] = base.parse_element (/<cim:Shift.receiptsGrandTotalRounding>([\s\S]*?)<\/cim:Shift.receiptsGrandTotalRounding>/g, sub, context, true);
            /**
             * Cumulative total of transacted amounts during this shift.
             *
             * Values are obtained from transaction:
             *
             */
            obj["transactionsGrandTotal"] = base.parse_element (/<cim:Shift.transactionsGrandTotal>([\s\S]*?)<\/cim:Shift.transactionsGrandTotal>/g, sub, context, true);
            /**
             * Cumulative amount in error due to process rounding not reflected in transactionsGandTotal.
             *
             * Values are obtained from Transaction attributes:
             *
             */
            obj["transactionsGrandTotalRounding"] = base.parse_element (/<cim:Shift.transactionsGrandTotalRounding>([\s\S]*?)<\/cim:Shift.transactionsGrandTotalRounding>/g, sub, context, true);
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
            obj["cashFloat"] = base.parse_element (/<cim:CashierShift.cashFloat>([\s\S]*?)<\/cim:CashierShift.cashFloat>/g, sub, context, true);
            /**
             * Cashier operating this shift.
             *
             */
            obj["Cashier"] = base.parse_attribute (/<cim:CashierShift.Cashier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Point of sale that is in operation during this shift.
             *
             */
            obj["PointOfSale"] = base.parse_attribute (/<cim:CashierShift.PointOfSale\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["amount"] = base.parse_element (/<cim:LineDetail.amount>([\s\S]*?)<\/cim:LineDetail.amount>/g, sub, context, true);
            /**
             * Date and time when this line was created in the application process.
             *
             */
            obj["dateTime"] = base.to_datetime (base.parse_element (/<cim:LineDetail.dateTime>([\s\S]*?)<\/cim:LineDetail.dateTime>/g, sub, context, true));
            /**
             * Free format note relevant to this line.
             *
             */
            obj["note"] = base.parse_element (/<cim:LineDetail.note>([\s\S]*?)<\/cim:LineDetail.note>/g, sub, context, true);
            /**
             * Totalised monetary value of all errors due to process rounding or truncating that is not reflected in 'amount'.
             *
             */
            obj["rounding"] = base.parse_element (/<cim:LineDetail.rounding>([\s\S]*?)<\/cim:LineDetail.rounding>/g, sub, context, true);
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
            obj["electronicAddress"] = base.parse_element (/<cim:Cashier.electronicAddress>([\s\S]*?)<\/cim:Cashier.electronicAddress>/g, sub, context, true);
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
            obj["issuerIdentificationNumber"] = base.parse_element (/<cim:ServiceSupplier.issuerIdentificationNumber>([\s\S]*?)<\/cim:ServiceSupplier.issuerIdentificationNumber>/g, sub, context, true);
            /**
             * Kind of supplier.
             *
             */
            obj["kind"] = base.parse_element (/<cim:ServiceSupplier.kind>([\s\S]*?)<\/cim:ServiceSupplier.kind>/g, sub, context, true);
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
            obj["bankAccountDetail"] = base.parse_element (/<cim:Cheque.bankAccountDetail>([\s\S]*?)<\/cim:Cheque.bankAccountDetail>/g, sub, context, true);
            /**
             * Cheque reference number as printed on the cheque.
             *
             */
            obj["chequeNumber"] = base.parse_element (/<cim:Cheque.chequeNumber>([\s\S]*?)<\/cim:Cheque.chequeNumber>/g, sub, context, true);
            /**
             * Date when cheque becomes valid.
             *
             */
            obj["date"] = base.parse_element (/<cim:Cheque.date>([\s\S]*?)<\/cim:Cheque.date>/g, sub, context, true);
            /**
             * Kind of cheque.
             *
             */
            obj["kind"] = base.parse_element (/<cim:Cheque.kind>([\s\S]*?)<\/cim:Cheque.kind>/g, sub, context, true);
            /**
             * The magnetic ink character recognition number printed on the cheque.
             *
             */
            obj["micrNumber"] = base.parse_element (/<cim:Cheque.micrNumber>([\s\S]*?)<\/cim:Cheque.micrNumber>/g, sub, context, true);
            /**
             * Payment tender the cheque is being used for.
             *
             */
            obj["Tender"] = base.parse_attribute (/<cim:Cheque.Tender\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["utility"] = base.parse_element (/<cim:SupplierKind.utility>([\s\S]*?)<\/cim:SupplierKind.utility>/g, sub, context, true);
            /**
             * Entity that sells the service, but does not deliver to the customer; applies to the deregulated markets.
             *
             */
            obj["retailer"] = base.parse_element (/<cim:SupplierKind.retailer>([\s\S]*?)<\/cim:SupplierKind.retailer>/g, sub, context, true);
            /**
             * Other kind of supplier.
             *
             */
            obj["other"] = base.parse_element (/<cim:SupplierKind.other>([\s\S]*?)<\/cim:SupplierKind.other>/g, sub, context, true);
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
            obj["amount"] = base.parse_element (/<cim:Tender.amount>([\s\S]*?)<\/cim:Tender.amount>/g, sub, context, true);
            /**
             * Difference between amount tendered by customer and the amount charged by point of sale.
             *
             */
            obj["change"] = base.parse_element (/<cim:Tender.change>([\s\S]*?)<\/cim:Tender.change>/g, sub, context, true);
            /**
             * Kind of tender from customer.
             *
             */
            obj["kind"] = base.parse_element (/<cim:Tender.kind>([\s\S]*?)<\/cim:Tender.kind>/g, sub, context, true);
            /**
             * Cheque used to tender payment.
             *
             */
            obj["Cheque"] = base.parse_attribute (/<cim:Tender.Cheque\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Card used to tender payment.
             *
             */
            obj["Card"] = base.parse_attribute (/<cim:Tender.Card\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Receipt that recorded this receiving of a payment in the form of tenders.
             *
             */
            obj["Receipt"] = base.parse_attribute (/<cim:Tender.Receipt\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["balance"] = base.parse_element (/<cim:AuxiliaryAccount.balance>([\s\S]*?)<\/cim:AuxiliaryAccount.balance>/g, sub, context, true);
            /**
             * Current amounts now due for payment on this account.
             *
             */
            obj["due"] = base.parse_element (/<cim:AuxiliaryAccount.due>([\s\S]*?)<\/cim:AuxiliaryAccount.due>/g, sub, context, true);
            /**
             * Details of the last credit transaction performed on this account.
             *
             */
            obj["lastCredit"] = base.parse_element (/<cim:AuxiliaryAccount.lastCredit>([\s\S]*?)<\/cim:AuxiliaryAccount.lastCredit>/g, sub, context, true);
            /**
             * Details of the last debit transaction performed on this account.
             *
             */
            obj["lastDebit"] = base.parse_element (/<cim:AuxiliaryAccount.lastDebit>([\s\S]*?)<\/cim:AuxiliaryAccount.lastDebit>/g, sub, context, true);
            /**
             * The initial principle amount, with which this account was instantiated.
             *
             */
            obj["principleAmount"] = base.parse_element (/<cim:AuxiliaryAccount.principleAmount>([\s\S]*?)<\/cim:AuxiliaryAccount.principleAmount>/g, sub, context, true);
            /**
             * Auxiliary agreement regulating this account.
             *
             */
            obj["AuxiliaryAgreement"] = base.parse_attribute (/<cim:AuxiliaryAccount.AuxiliaryAgreement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["energyUnit"] = base.parse_element (/<cim:AccountingUnit.energyUnit>([\s\S]*?)<\/cim:AccountingUnit.energyUnit>/g, sub, context, true);
            /**
             * Unit of currency.
             *
             */
            obj["monetaryUnit"] = base.parse_element (/<cim:AccountingUnit.monetaryUnit>([\s\S]*?)<\/cim:AccountingUnit.monetaryUnit>/g, sub, context, true);
            /**
             * Multiplier for the 'energyUnit' or 'monetaryUnit'.
             *
             */
            obj["multiplier"] = base.parse_element (/<cim:AccountingUnit.multiplier>([\s\S]*?)<\/cim:AccountingUnit.multiplier>/g, sub, context, true);
            /**
             * Value expressed in applicable units.
             *
             */
            obj["value"] = base.to_float (base.parse_element (/<cim:AccountingUnit.value>([\s\S]*?)<\/cim:AccountingUnit.value>/g, sub, context, true));
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
            obj["serviceChargePayment"] = base.parse_element (/<cim:TransactionKind.serviceChargePayment>([\s\S]*?)<\/cim:TransactionKind.serviceChargePayment>/g, sub, context, true);
            /**
             * Payment for a tax.
             *
             */
            obj["taxChargePayment"] = base.parse_element (/<cim:TransactionKind.taxChargePayment>([\s\S]*?)<\/cim:TransactionKind.taxChargePayment>/g, sub, context, true);
            /**
             * Payment against a specified auxiliary account.
             *
             */
            obj["auxiliaryChargePayment"] = base.parse_element (/<cim:TransactionKind.auxiliaryChargePayment>([\s\S]*?)<\/cim:TransactionKind.auxiliaryChargePayment>/g, sub, context, true);
            /**
             * Payment against a specified account.
             *
             */
            obj["accountPayment"] = base.parse_element (/<cim:TransactionKind.accountPayment>([\s\S]*?)<\/cim:TransactionKind.accountPayment>/g, sub, context, true);
            /**
             * Payment against an item other than an account.
             *
             */
            obj["diversePayment"] = base.parse_element (/<cim:TransactionKind.diversePayment>([\s\S]*?)<\/cim:TransactionKind.diversePayment>/g, sub, context, true);
            /**
             * Reversal of a previous transaction.
             *
             */
            obj["transactionReversal"] = base.parse_element (/<cim:TransactionKind.transactionReversal>([\s\S]*?)<\/cim:TransactionKind.transactionReversal>/g, sub, context, true);
            /**
             * Payment for a credit token sale to a customer.
             *
             */
            obj["tokenSalePayment"] = base.parse_element (/<cim:TransactionKind.tokenSalePayment>([\s\S]*?)<\/cim:TransactionKind.tokenSalePayment>/g, sub, context, true);
            /**
             * Issue of a free credit token where the donor is the supplier.
             *
             */
            obj["tokenFreeIssue"] = base.parse_element (/<cim:TransactionKind.tokenFreeIssue>([\s\S]*?)<\/cim:TransactionKind.tokenFreeIssue>/g, sub, context, true);
            /**
             * Issue of a free credit token where the donor is a 3<sup>rd</sup> party.
             *
             */
            obj["tokenGrant"] = base.parse_element (/<cim:TransactionKind.tokenGrant>([\s\S]*?)<\/cim:TransactionKind.tokenGrant>/g, sub, context, true);
            /**
             * Exchange of a previously issued token for a new token.
             *
             */
            obj["tokenExchange"] = base.parse_element (/<cim:TransactionKind.tokenExchange>([\s\S]*?)<\/cim:TransactionKind.tokenExchange>/g, sub, context, true);
            /**
             * Cancellation of a previously issued token.
             *
             */
            obj["tokenCancellation"] = base.parse_element (/<cim:TransactionKind.tokenCancellation>([\s\S]*?)<\/cim:TransactionKind.tokenCancellation>/g, sub, context, true);
            /**
             * Issue of token that will alter the meter configuration.
             *
             */
            obj["meterConfigurationToken"] = base.parse_element (/<cim:TransactionKind.meterConfigurationToken>([\s\S]*?)<\/cim:TransactionKind.meterConfigurationToken>/g, sub, context, true);
            /**
             * Other kind of transaction.
             *
             */
            obj["other"] = base.parse_element (/<cim:TransactionKind.other>([\s\S]*?)<\/cim:TransactionKind.other>/g, sub, context, true);
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
            obj["diverseReference"] = base.parse_element (/<cim:Transaction.diverseReference>([\s\S]*?)<\/cim:Transaction.diverseReference>/g, sub, context, true);
            /**
             * Reference to the entity that is the source of 'amount' (for example: customer for token purchase; or supplier for free issue token).
             *
             */
            obj["donorReference"] = base.parse_element (/<cim:Transaction.donorReference>([\s\S]*?)<\/cim:Transaction.donorReference>/g, sub, context, true);
            /**
             * Kind of transaction.
             *
             */
            obj["kind"] = base.parse_element (/<cim:Transaction.kind>([\s\S]*?)<\/cim:Transaction.kind>/g, sub, context, true);
            /**
             * Transaction amount, rounding, date and note for this transaction line.
             *
             */
            obj["line"] = base.parse_element (/<cim:Transaction.line>([\s\S]*?)<\/cim:Transaction.line>/g, sub, context, true);
            /**
             * Reference to the entity that is the recipient of 'amount' (for example, supplier for service charge payment; or tax receiver for VAT).
             *
             */
            obj["receiverReference"] = base.parse_element (/<cim:Transaction.receiverReference>([\s\S]*?)<\/cim:Transaction.receiverReference>/g, sub, context, true);
            /**
             * (if 'kind' is transactionReversal) Reference to the original transaction that is being reversed by this transaction.
             *
             */
            obj["reversedId"] = base.parse_element (/<cim:Transaction.reversedId>([\s\S]*?)<\/cim:Transaction.reversedId>/g, sub, context, true);
            /**
             * Actual amount of service units that is being paid for.
             *
             */
            obj["serviceUnitsEnergy"] = base.parse_element (/<cim:Transaction.serviceUnitsEnergy>([\s\S]*?)<\/cim:Transaction.serviceUnitsEnergy>/g, sub, context, true);
            /**
             * Number of service units not reflected in 'serviceUnitsEnergy' due to process rounding or truncating errors.
             *
             */
            obj["serviceUnitsError"] = base.parse_element (/<cim:Transaction.serviceUnitsError>([\s\S]*?)<\/cim:Transaction.serviceUnitsError>/g, sub, context, true);
            /**
             * Pricing structure applicable for this transaction.
             *
             */
            obj["PricingStructure"] = base.parse_attribute (/<cim:Transaction.PricingStructure\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Auxiliary account for this payment transaction.
             *
             */
            obj["AuxiliaryAccount"] = base.parse_attribute (/<cim:Transaction.AuxiliaryAccount\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The receipted payment for which this transaction has been recorded.
             *
             */
            obj["Receipt"] = base.parse_attribute (/<cim:Transaction.Receipt\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Vendor shift during which this transaction was recorded.
             *
             */
            obj["VendorShift"] = base.parse_attribute (/<cim:Transaction.VendorShift\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Cashier shift during which this transaction was recorded.
             *
             */
            obj["CashierShift"] = base.parse_attribute (/<cim:Transaction.CashierShift\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Meter for this vending transaction.
             *
             */
            obj["Meter"] = base.parse_attribute (/<cim:Transaction.Meter\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Customer account for this payment transaction.
             *
             */
            obj["CustomerAccount"] = base.parse_attribute (/<cim:Transaction.CustomerAccount\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["currentBalance"] = base.parse_element (/<cim:MerchantAccount.currentBalance>([\s\S]*?)<\/cim:MerchantAccount.currentBalance>/g, sub, context, true);
            /**
             * The balance of this account after taking into account any pending debits from VendorShift.merchantDebitAmount and pending credits from BankStatement.merchantCreditAmount or credits (see also BankStatement attributes and VendorShift attributes).
             *
             */
            obj["provisionalBalance"] = base.parse_element (/<cim:MerchantAccount.provisionalBalance>([\s\S]*?)<\/cim:MerchantAccount.provisionalBalance>/g, sub, context, true);
            /**
             * Merchant agreement that instantiated this merchant account.
             *
             */
            obj["MerchantAgreement"] = base.parse_attribute (/<cim:MerchantAccount.MerchantAgreement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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