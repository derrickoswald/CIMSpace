define
(
    ["model/base", "model/Common", "model/Core", "model/LoadModel", "model/Meas", "model/Production", "model/Wires"],
    /**
     * This package contains the common objects shared by MarketOperations packages.
     *
     */
    function (base, Common, Core, LoadModel, Meas, Production, Wires)
    {

        /**
         * Subclass of IEC61970:Topology:ConnectivityNode
         *
         */
        function parse_MktConnectivityNode (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_ConnectivityNode (context, sub);
            obj.cls = "MktConnectivityNode";
            /**
             * end effective date
             *
             */
            base.parse_element (/<cim:MktConnectivityNode.endEffectiveDate>([\s\S]*?)<\/cim:MktConnectivityNode.endEffectiveDate>/g, obj, "endEffectiveDate", base.to_datetime, sub, context);

            /**
             * start effective date
             *
             */
            base.parse_element (/<cim:MktConnectivityNode.startEffectiveDate>([\s\S]*?)<\/cim:MktConnectivityNode.startEffectiveDate>/g, obj, "startEffectiveDate", base.to_datetime, sub, context);

            base.parse_attribute (/<cim:MktConnectivityNode.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context, true);

            base.parse_attribute (/<cim:MktConnectivityNode.IndividualPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "IndividualPnode", sub, context, true);

            base.parse_attribute (/<cim:MktConnectivityNode.SysLoadDistribuFactor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SysLoadDistribuFactor", sub, context, true);

            bucket = context.parsed.MktConnectivityNode;
            if (null == bucket)
                context.parsed.MktConnectivityNode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Subclass of IEC61968:Domain2:UserAttribute
         *
         */
        function parse_MktUserAttribute (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_UserAttribute (context, sub);
            obj.cls = "MktUserAttribute";
            bucket = context.parsed.MktUserAttribute;
            if (null == bucket)
                context.parsed.MktUserAttribute = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Subclass of IEC61970:Production:GeneratingUnit
         *
         */
        function parse_MktGeneratingUnit (context, sub)
        {
            var obj;
            var bucket;

            obj = Production.parse_GeneratingUnit (context, sub);
            obj.cls = "MktGeneratingUnit";
            base.parse_attribute (/<cim:MktGeneratingUnit.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context, true);

            bucket = context.parsed.MktGeneratingUnit;
            if (null == bucket)
                context.parsed.MktGeneratingUnit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Subclass of IEC61968: Common:ActivityRecord
         *
         */
        function parse_MktActivityRecord (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_ActivityRecord (context, sub);
            obj.cls = "MktActivityRecord";
            bucket = context.parsed.MktActivityRecord;
            if (null == bucket)
                context.parsed.MktActivityRecord = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Subclass of IEC61970:LoadModel: LoadArea
         *
         */
        function parse_MktLoadArea (context, sub)
        {
            var obj;
            var bucket;

            obj = LoadModel.parse_LoadArea (context, sub);
            obj.cls = "MktLoadArea";
            bucket = context.parsed.MktLoadArea;
            if (null == bucket)
                context.parsed.MktLoadArea = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Subclass for IEC61970:Wires:Line
         *
         */
        function parse_MktLine (context, sub)
        {
            var obj;
            var bucket;

            obj = Wires.parse_Line (context, sub);
            obj.cls = "MktLine";
            base.parse_attribute (/<cim:MktLine.TransmissionRightOfWay\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionRightOfWay", sub, context, true);

            bucket = context.parsed.MktLine;
            if (null == bucket)
                context.parsed.MktLine = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * In accounting transactions, a ledger is a book containing accounts to which debits and credits are posted from journals, where transactions are initially recorded.
         *
         * Journal entries are periodically posted to the ledger. Ledger Actual represents actual amounts by account within ledger within company or business area. Actual amounts may be generated in a source application and then loaded to a specific ledger within the enterprise general ledger or budget application.
         *
         */
        function parse_MarketLedger (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketLedger";
            bucket = context.parsed.MarketLedger;
            if (null == bucket)
                context.parsed.MarketLedger = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Subclass of IEC61970:Wires:PowerTransformer
         *
         */
        function parse_MktPowerTransformer (context, sub)
        {
            var obj;
            var bucket;

            obj = Wires.parse_PowerTransformer (context, sub);
            obj.cls = "MktPowerTransformer";
            base.parse_attribute (/<cim:MktPowerTransformer.EndBFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndBFlow", sub, context, true);

            base.parse_attribute (/<cim:MktPowerTransformer.EndAFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndAFlow", sub, context, true);

            bucket = context.parsed.MktPowerTransformer;
            if (null == bucket)
                context.parsed.MktPowerTransformer = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A roll up of invoice line items.
         *
         * The whole invoice has a due date and amount to be paid, with information such as customer, banks etc. being obtained through associations. The invoice roll up is based on individual line items that each contain amounts and descriptions for specific services or products.
         *
         */
        function parse_MarketInvoice (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketInvoice";
            /**
             * Total amount due on this invoice based on line items and applicable adjustments.
             *
             */
            base.parse_element (/<cim:MarketInvoice.amount>([\s\S]*?)<\/cim:MarketInvoice.amount>/g, obj, "amount", base.to_string, sub, context);

            /**
             * Kind of media by which the CustomerBillingInfo was delivered.
             *
             */
            base.parse_element (/<cim:MarketInvoice.billMediaKind>([\s\S]*?)<\/cim:MarketInvoice.billMediaKind>/g, obj, "billMediaKind", base.to_string, sub, context);

            /**
             * Calculated date upon which the Invoice amount is due.
             *
             */
            base.parse_element (/<cim:MarketInvoice.dueDate>([\s\S]*?)<\/cim:MarketInvoice.dueDate>/g, obj, "dueDate", base.to_string, sub, context);

            /**
             * Kind of invoice (default is 'sales').
             *
             */
            base.parse_element (/<cim:MarketInvoice.kind>([\s\S]*?)<\/cim:MarketInvoice.kind>/g, obj, "kind", base.to_string, sub, context);

            /**
             * Date on which the customer billing statement/invoice was printed/mailed.
             *
             */
            base.parse_element (/<cim:MarketInvoice.mailedDate>([\s\S]*?)<\/cim:MarketInvoice.mailedDate>/g, obj, "mailedDate", base.to_string, sub, context);

            /**
             * True if payment is to be paid by a Customer to accept a particular ErpQuote (with associated Design) and have work initiated, at which time an associated ErpInvoice should automatically be generated.
             *
             * EprPayment.subjectStatus satisfies terms specificed in the ErpQuote.
             *
             */
            base.parse_element (/<cim:MarketInvoice.proForma>([\s\S]*?)<\/cim:MarketInvoice.proForma>/g, obj, "proForma", base.to_boolean, sub, context);

            /**
             * Number of an invoice to be reference by this invoice.
             *
             */
            base.parse_element (/<cim:MarketInvoice.referenceNumber>([\s\S]*?)<\/cim:MarketInvoice.referenceNumber>/g, obj, "referenceNumber", base.to_string, sub, context);

            /**
             * Date and time when the invoice is issued.
             *
             */
            base.parse_element (/<cim:MarketInvoice.transactionDateTime>([\s\S]*?)<\/cim:MarketInvoice.transactionDateTime>/g, obj, "transactionDateTime", base.to_datetime, sub, context);

            /**
             * Type of invoice transfer.
             *
             */
            base.parse_element (/<cim:MarketInvoice.transferType>([\s\S]*?)<\/cim:MarketInvoice.transferType>/g, obj, "transferType", base.to_string, sub, context);

            bucket = context.parsed.MarketInvoice;
            if (null == bucket)
                context.parsed.MarketInvoice = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Details of an individual entry in a ledger, which was posted from a journal on the posted date.
         *
         */
        function parse_MarketLedgerEntry (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketLedgerEntry";
            /**
             * Account identifier for this entry.
             *
             */
            base.parse_element (/<cim:MarketLedgerEntry.accountID>([\s\S]*?)<\/cim:MarketLedgerEntry.accountID>/g, obj, "accountID", base.to_string, sub, context);

            /**
             * Kind of account for this entry.
             *
             */
            base.parse_element (/<cim:MarketLedgerEntry.accountKind>([\s\S]*?)<\/cim:MarketLedgerEntry.accountKind>/g, obj, "accountKind", base.to_string, sub, context);

            /**
             * The amount of the debit or credit for this account.
             *
             */
            base.parse_element (/<cim:MarketLedgerEntry.amount>([\s\S]*?)<\/cim:MarketLedgerEntry.amount>/g, obj, "amount", base.to_string, sub, context);

            /**
             * Date and time this entry was posted to the ledger.
             *
             */
            base.parse_element (/<cim:MarketLedgerEntry.postedDateTime>([\s\S]*?)<\/cim:MarketLedgerEntry.postedDateTime>/g, obj, "postedDateTime", base.to_datetime, sub, context);

            /**
             * Status of ledger entry.
             *
             */
            base.parse_element (/<cim:MarketLedgerEntry.status>([\s\S]*?)<\/cim:MarketLedgerEntry.status>/g, obj, "status", base.to_string, sub, context);

            /**
             * Date and time journal entry was recorded.
             *
             */
            base.parse_element (/<cim:MarketLedgerEntry.transactionDateTime>([\s\S]*?)<\/cim:MarketLedgerEntry.transactionDateTime>/g, obj, "transactionDateTime", base.to_datetime, sub, context);

            base.parse_attribute (/<cim:MarketLedgerEntry.MarketLedger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketLedger", sub, context, true);

            bucket = context.parsed.MarketLedgerEntry;
            if (null == bucket)
                context.parsed.MarketLedgerEntry = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An individual line item on an invoice.
         *
         */
        function parse_MarketInvoiceLineItem (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketInvoiceLineItem";
            /**
             * Bill period for the line item.
             *
             */
            base.parse_element (/<cim:MarketInvoiceLineItem.billPeriod>([\s\S]*?)<\/cim:MarketInvoiceLineItem.billPeriod>/g, obj, "billPeriod", base.to_string, sub, context);

            /**
             * General Ledger account code, shall be a valid combination.
             *
             */
            base.parse_element (/<cim:MarketInvoiceLineItem.glAccount>([\s\S]*?)<\/cim:MarketInvoiceLineItem.glAccount>/g, obj, "glAccount", base.to_string, sub, context);

            /**
             * Date and time line item will be posted to the General Ledger.
             *
             */
            base.parse_element (/<cim:MarketInvoiceLineItem.glDateTime>([\s\S]*?)<\/cim:MarketInvoiceLineItem.glDateTime>/g, obj, "glDateTime", base.to_datetime, sub, context);

            /**
             * Kind of line item.
             *
             */
            base.parse_element (/<cim:MarketInvoiceLineItem.kind>([\s\S]*?)<\/cim:MarketInvoiceLineItem.kind>/g, obj, "kind", base.to_string, sub, context);

            /**
             * Amount due for this line item.
             *
             */
            base.parse_element (/<cim:MarketInvoiceLineItem.lineAmount>([\s\S]*?)<\/cim:MarketInvoiceLineItem.lineAmount>/g, obj, "lineAmount", base.to_float, sub, context);

            /**
             * Line item number on invoice statement.
             *
             */
            base.parse_element (/<cim:MarketInvoiceLineItem.lineNumber>([\s\S]*?)<\/cim:MarketInvoiceLineItem.lineNumber>/g, obj, "lineNumber", base.to_string, sub, context);

            /**
             * Version number of the bill run.
             *
             */
            base.parse_element (/<cim:MarketInvoiceLineItem.lineVersion>([\s\S]*?)<\/cim:MarketInvoiceLineItem.lineVersion>/g, obj, "lineVersion", base.to_string, sub, context);

            /**
             * Net line item charge amount.
             *
             */
            base.parse_element (/<cim:MarketInvoiceLineItem.netAmount>([\s\S]*?)<\/cim:MarketInvoiceLineItem.netAmount>/g, obj, "netAmount", base.to_float, sub, context);

            /**
             * Previous line item charge amount.
             *
             */
            base.parse_element (/<cim:MarketInvoiceLineItem.previousAmount>([\s\S]*?)<\/cim:MarketInvoiceLineItem.previousAmount>/g, obj, "previousAmount", base.to_float, sub, context);

            base.parse_attribute (/<cim:MarketInvoiceLineItem.MarketInvoice\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketInvoice", sub, context, true);

            base.parse_attribute (/<cim:MarketInvoiceLineItem.ContainerMarketInvoiceLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ContainerMarketInvoiceLineItem", sub, context, true);

            bucket = context.parsed.MarketInvoiceLineItem;
            if (null == bucket)
                context.parsed.MarketInvoiceLineItem = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Subclass of IEC61970:Core:Terminal
         *
         */
        function parse_MktTerminal (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Terminal (context, sub);
            obj.cls = "MktTerminal";
            /**
             * This is the begin date/time of the element eligibility for the flowgate.
             *
             */
            base.parse_element (/<cim:MktTerminal.startEffectiveDate>([\s\S]*?)<\/cim:MktTerminal.startEffectiveDate>/g, obj, "startEffectiveDate", base.to_datetime, sub, context);

            /**
             * This is the end date/time of the element eligibility for the flowgate.
             *
             */
            base.parse_element (/<cim:MktTerminal.endEffectiveDate>([\s\S]*?)<\/cim:MktTerminal.endEffectiveDate>/g, obj, "endEffectiveDate", base.to_datetime, sub, context);

            base.parse_attribute (/<cim:MktTerminal.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context, true);

            bucket = context.parsed.MktTerminal;
            if (null == bucket)
                context.parsed.MktTerminal = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Subclass of IEC61968:Core2:TopLevel:Organisation
         *
         */
        function parse_MktOrganisation (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Organisation (context, sub);
            obj.cls = "MktOrganisation";
            /**
             * Flag to indicate creditworthiness (Y, N)
             *
             */
            base.parse_element (/<cim:MktOrganisation.creditFlag>([\s\S]*?)<\/cim:MktOrganisation.creditFlag>/g, obj, "creditFlag", base.to_string, sub, context);

            /**
             * Date that the organisation becomes creditworthy.
             *
             */
            base.parse_element (/<cim:MktOrganisation.creditStartEffectiveDate>([\s\S]*?)<\/cim:MktOrganisation.creditStartEffectiveDate>/g, obj, "creditStartEffectiveDate", base.to_datetime, sub, context);

            /**
             * end effective date
             *
             */
            base.parse_element (/<cim:MktOrganisation.endEffectiveDate>([\s\S]*?)<\/cim:MktOrganisation.endEffectiveDate>/g, obj, "endEffectiveDate", base.to_datetime, sub, context);

            /**
             * Indication of the last time this Organization information was modified.
             *
             */
            base.parse_element (/<cim:MktOrganisation.lastModified>([\s\S]*?)<\/cim:MktOrganisation.lastModified>/g, obj, "lastModified", base.to_datetime, sub, context);

            /**
             * Organisation (internal) ID
             *
             */
            base.parse_element (/<cim:MktOrganisation.organisationID>([\s\S]*?)<\/cim:MktOrganisation.organisationID>/g, obj, "organisationID", base.to_string, sub, context);

            /**
             * Organisation qualification status, Qualified, Not Qualified, or Disqualified
             *
             */
            base.parse_element (/<cim:MktOrganisation.qualificationStatus>([\s\S]*?)<\/cim:MktOrganisation.qualificationStatus>/g, obj, "qualificationStatus", base.to_string, sub, context);

            /**
             * start effective date
             *
             */
            base.parse_element (/<cim:MktOrganisation.startEffectiveDate>([\s\S]*?)<\/cim:MktOrganisation.startEffectiveDate>/g, obj, "startEffectiveDate", base.to_datetime, sub, context);

            bucket = context.parsed.MktOrganisation;
            if (null == bucket)
                context.parsed.MktOrganisation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Subclass of IEC61970:Wires:EnergyConsumer
         *
         */
        function parse_MktEnergyConsumer (context, sub)
        {
            var obj;
            var bucket;

            obj = Wires.parse_EnergyConsumer (context, sub);
            obj.cls = "MktEnergyConsumer";
            base.parse_attribute (/<cim:MktEnergyConsumer.RegisteredLoad\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredLoad", sub, context, true);

            bucket = context.parsed.MktEnergyConsumer;
            if (null == bucket)
                context.parsed.MktEnergyConsumer = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Subclass of IEC61970:Meas:Measurement
         *
         */
        function parse_MktMeasurement (context, sub)
        {
            var obj;
            var bucket;

            obj = Meas.parse_Measurement (context, sub);
            obj.cls = "MktMeasurement";
            base.parse_attribute (/<cim:MktMeasurement.Pnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Pnode", sub, context, true);

            /**
             * A measurement is made on the A side of a tie point
             *
             */
            base.parse_attribute (/<cim:MktMeasurement.ForTiePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ForTiePoint", sub, context, true);

            /**
             * A measurement is made on the B side of a tie point
             *
             */
            base.parse_attribute (/<cim:MktMeasurement.ByTiePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ByTiePoint", sub, context, true);

            bucket = context.parsed.MktMeasurement;
            if (null == bucket)
                context.parsed.MktMeasurement = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_MarketLedgerEntry: parse_MarketLedgerEntry,
                parse_MarketInvoice: parse_MarketInvoice,
                parse_MktEnergyConsumer: parse_MktEnergyConsumer,
                parse_MktConnectivityNode: parse_MktConnectivityNode,
                parse_MktTerminal: parse_MktTerminal,
                parse_MktLine: parse_MktLine,
                parse_MktLoadArea: parse_MktLoadArea,
                parse_MarketInvoiceLineItem: parse_MarketInvoiceLineItem,
                parse_MktGeneratingUnit: parse_MktGeneratingUnit,
                parse_MarketLedger: parse_MarketLedger,
                parse_MktUserAttribute: parse_MktUserAttribute,
                parse_MktPowerTransformer: parse_MktPowerTransformer,
                parse_MktOrganisation: parse_MktOrganisation,
                parse_MktMeasurement: parse_MktMeasurement,
                parse_MktActivityRecord: parse_MktActivityRecord
            }
        );
    }
);