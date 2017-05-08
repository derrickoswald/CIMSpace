define
(
    ["model/base", "model/Common", "model/Core", "model/LoadModel", "model/Meas", "model/Production", "model/Wires"],
    /**
     * This package contains the common objects shared by MarketOperations packages.
     */
    function (base, Common, Core, LoadModel, Meas, Production, Wires)
    {

        /**
         * Subclass of IEC61970:Topology:ConnectivityNode
         */
        function parse_MktConnectivityNode (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_ConnectivityNode (context, sub);
            obj.cls = "MktConnectivityNode";
            /**
             * end effective date
             */
            obj["endEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:MktConnectivityNode.endEffectiveDate>([\s\S]*?)<\/cim:MktConnectivityNode.endEffectiveDate>/g, sub, context, true));
            /**
             * start effective date
             */
            obj["startEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:MktConnectivityNode.startEffectiveDate>([\s\S]*?)<\/cim:MktConnectivityNode.startEffectiveDate>/g, sub, context, true));
            /**
             * 
             */
            obj["RTO"] = base.parse_attribute (/<cim:MktConnectivityNode.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["IndividualPnode"] = base.parse_attribute (/<cim:MktConnectivityNode.IndividualPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["SysLoadDistribuFactor"] = base.parse_attribute (/<cim:MktConnectivityNode.SysLoadDistribuFactor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MktConnectivityNode;
            if (null == bucket)
                context.parsed.MktConnectivityNode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Subclass of IEC61968:Domain2:UserAttribute
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
         */
        function parse_MktGeneratingUnit (context, sub)
        {
            var obj;
            var bucket;

            obj = Production.parse_GeneratingUnit (context, sub);
            obj.cls = "MktGeneratingUnit";
            /**
             * 
             */
            obj["RegisteredGenerator"] = base.parse_attribute (/<cim:MktGeneratingUnit.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MktGeneratingUnit;
            if (null == bucket)
                context.parsed.MktGeneratingUnit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Subclass of IEC61968: Common:ActivityRecord
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
         */
        function parse_MktLine (context, sub)
        {
            var obj;
            var bucket;

            obj = Wires.parse_Line (context, sub);
            obj.cls = "MktLine";
            /**
             * 
             */
            obj["TransmissionRightOfWay"] = base.parse_attribute (/<cim:MktLine.TransmissionRightOfWay\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MktLine;
            if (null == bucket)
                context.parsed.MktLine = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * In accounting transactions, a ledger is a book containing accounts to which debits and credits are posted from journals, where transactions are initially recorded.
         * Journal entries are periodically posted to the ledger. Ledger Actual represents actual amounts by account within ledger within company or business area. Actual amounts may be generated in a source application and then loaded to a specific ledger within the enterprise general ledger or budget application.
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
         */
        function parse_MktPowerTransformer (context, sub)
        {
            var obj;
            var bucket;

            obj = Wires.parse_PowerTransformer (context, sub);
            obj.cls = "MktPowerTransformer";
            /**
             * 
             */
            obj["EndBFlow"] = base.parse_attribute (/<cim:MktPowerTransformer.EndBFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["EndAFlow"] = base.parse_attribute (/<cim:MktPowerTransformer.EndAFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MktPowerTransformer;
            if (null == bucket)
                context.parsed.MktPowerTransformer = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A roll up of invoice line items.
         * The whole invoice has a due date and amount to be paid, with information such as customer, banks etc. being obtained through associations. The invoice roll up is based on individual line items that each contain amounts and descriptions for specific services or products.
         */
        function parse_MarketInvoice (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketInvoice";
            /**
             * Total amount due on this invoice based on line items and applicable adjustments.
             */
            obj["amount"] = base.parse_element (/<cim:MarketInvoice.amount>([\s\S]*?)<\/cim:MarketInvoice.amount>/g, sub, context, true);
            /**
             * Kind of media by which the CustomerBillingInfo was delivered.
             */
            obj["billMediaKind"] = base.parse_element (/<cim:MarketInvoice.billMediaKind>([\s\S]*?)<\/cim:MarketInvoice.billMediaKind>/g, sub, context, true);
            /**
             * Calculated date upon which the Invoice amount is due.
             */
            obj["dueDate"] = base.parse_element (/<cim:MarketInvoice.dueDate>([\s\S]*?)<\/cim:MarketInvoice.dueDate>/g, sub, context, true);
            /**
             * Kind of invoice (default is 'sales').
             */
            obj["kind"] = base.parse_element (/<cim:MarketInvoice.kind>([\s\S]*?)<\/cim:MarketInvoice.kind>/g, sub, context, true);
            /**
             * Date on which the customer billing statement/invoice was printed/mailed.
             */
            obj["mailedDate"] = base.parse_element (/<cim:MarketInvoice.mailedDate>([\s\S]*?)<\/cim:MarketInvoice.mailedDate>/g, sub, context, true);
            /**
             * True if payment is to be paid by a Customer to accept a particular ErpQuote (with associated Design) and have work initiated, at which time an associated ErpInvoice should automatically be generated.
             * EprPayment.subjectStatus satisfies terms specificed in the ErpQuote.
             */
            obj["proForma"] = base.to_boolean (base.parse_element (/<cim:MarketInvoice.proForma>([\s\S]*?)<\/cim:MarketInvoice.proForma>/g, sub, context, true));
            /**
             * Number of an invoice to be reference by this invoice.
             */
            obj["referenceNumber"] = base.parse_element (/<cim:MarketInvoice.referenceNumber>([\s\S]*?)<\/cim:MarketInvoice.referenceNumber>/g, sub, context, true);
            /**
             * Date and time when the invoice is issued.
             */
            obj["transactionDateTime"] = base.to_datetime (base.parse_element (/<cim:MarketInvoice.transactionDateTime>([\s\S]*?)<\/cim:MarketInvoice.transactionDateTime>/g, sub, context, true));
            /**
             * Type of invoice transfer.
             */
            obj["transferType"] = base.parse_element (/<cim:MarketInvoice.transferType>([\s\S]*?)<\/cim:MarketInvoice.transferType>/g, sub, context, true);
            bucket = context.parsed.MarketInvoice;
            if (null == bucket)
                context.parsed.MarketInvoice = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Details of an individual entry in a ledger, which was posted from a journal on the posted date.
         */
        function parse_MarketLedgerEntry (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketLedgerEntry";
            /**
             * Account identifier for this entry.
             */
            obj["accountID"] = base.parse_element (/<cim:MarketLedgerEntry.accountID>([\s\S]*?)<\/cim:MarketLedgerEntry.accountID>/g, sub, context, true);
            /**
             * Kind of account for this entry.
             */
            obj["accountKind"] = base.parse_element (/<cim:MarketLedgerEntry.accountKind>([\s\S]*?)<\/cim:MarketLedgerEntry.accountKind>/g, sub, context, true);
            /**
             * The amount of the debit or credit for this account.
             */
            obj["amount"] = base.parse_element (/<cim:MarketLedgerEntry.amount>([\s\S]*?)<\/cim:MarketLedgerEntry.amount>/g, sub, context, true);
            /**
             * Date and time this entry was posted to the ledger.
             */
            obj["postedDateTime"] = base.to_datetime (base.parse_element (/<cim:MarketLedgerEntry.postedDateTime>([\s\S]*?)<\/cim:MarketLedgerEntry.postedDateTime>/g, sub, context, true));
            /**
             * Status of ledger entry.
             */
            obj["status"] = base.parse_element (/<cim:MarketLedgerEntry.status>([\s\S]*?)<\/cim:MarketLedgerEntry.status>/g, sub, context, true);
            /**
             * Date and time journal entry was recorded.
             */
            obj["transactionDateTime"] = base.to_datetime (base.parse_element (/<cim:MarketLedgerEntry.transactionDateTime>([\s\S]*?)<\/cim:MarketLedgerEntry.transactionDateTime>/g, sub, context, true));
            /**
             * 
             */
            obj["MarketLedger"] = base.parse_attribute (/<cim:MarketLedgerEntry.MarketLedger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MarketLedgerEntry;
            if (null == bucket)
                context.parsed.MarketLedgerEntry = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An individual line item on an invoice.
         */
        function parse_MarketInvoiceLineItem (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketInvoiceLineItem";
            /**
             * Bill period for the line item.
             */
            obj["billPeriod"] = base.parse_element (/<cim:MarketInvoiceLineItem.billPeriod>([\s\S]*?)<\/cim:MarketInvoiceLineItem.billPeriod>/g, sub, context, true);
            /**
             * General Ledger account code, shall be a valid combination.
             */
            obj["glAccount"] = base.parse_element (/<cim:MarketInvoiceLineItem.glAccount>([\s\S]*?)<\/cim:MarketInvoiceLineItem.glAccount>/g, sub, context, true);
            /**
             * Date and time line item will be posted to the General Ledger.
             */
            obj["glDateTime"] = base.to_datetime (base.parse_element (/<cim:MarketInvoiceLineItem.glDateTime>([\s\S]*?)<\/cim:MarketInvoiceLineItem.glDateTime>/g, sub, context, true));
            /**
             * Kind of line item.
             */
            obj["kind"] = base.parse_element (/<cim:MarketInvoiceLineItem.kind>([\s\S]*?)<\/cim:MarketInvoiceLineItem.kind>/g, sub, context, true);
            /**
             * Amount due for this line item.
             */
            obj["lineAmount"] = base.to_float (base.parse_element (/<cim:MarketInvoiceLineItem.lineAmount>([\s\S]*?)<\/cim:MarketInvoiceLineItem.lineAmount>/g, sub, context, true));
            /**
             * Line item number on invoice statement.
             */
            obj["lineNumber"] = base.parse_element (/<cim:MarketInvoiceLineItem.lineNumber>([\s\S]*?)<\/cim:MarketInvoiceLineItem.lineNumber>/g, sub, context, true);
            /**
             * Version number of the bill run.
             */
            obj["lineVersion"] = base.parse_element (/<cim:MarketInvoiceLineItem.lineVersion>([\s\S]*?)<\/cim:MarketInvoiceLineItem.lineVersion>/g, sub, context, true);
            /**
             * Net line item charge amount.
             */
            obj["netAmount"] = base.to_float (base.parse_element (/<cim:MarketInvoiceLineItem.netAmount>([\s\S]*?)<\/cim:MarketInvoiceLineItem.netAmount>/g, sub, context, true));
            /**
             * Previous line item charge amount.
             */
            obj["previousAmount"] = base.to_float (base.parse_element (/<cim:MarketInvoiceLineItem.previousAmount>([\s\S]*?)<\/cim:MarketInvoiceLineItem.previousAmount>/g, sub, context, true));
            /**
             * 
             */
            obj["MarketInvoice"] = base.parse_attribute (/<cim:MarketInvoiceLineItem.MarketInvoice\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["ContainerMarketInvoiceLineItem"] = base.parse_attribute (/<cim:MarketInvoiceLineItem.ContainerMarketInvoiceLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MarketInvoiceLineItem;
            if (null == bucket)
                context.parsed.MarketInvoiceLineItem = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Subclass of IEC61970:Core:Terminal
         */
        function parse_MktTerminal (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Terminal (context, sub);
            obj.cls = "MktTerminal";
            /**
             * This is the begin date/time of the element eligibility for the flowgate.
             */
            obj["startEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:MktTerminal.startEffectiveDate>([\s\S]*?)<\/cim:MktTerminal.startEffectiveDate>/g, sub, context, true));
            /**
             * This is the end date/time of the element eligibility for the flowgate.
             */
            obj["endEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:MktTerminal.endEffectiveDate>([\s\S]*?)<\/cim:MktTerminal.endEffectiveDate>/g, sub, context, true));
            /**
             * 
             */
            obj["Flowgate"] = base.parse_attribute (/<cim:MktTerminal.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MktTerminal;
            if (null == bucket)
                context.parsed.MktTerminal = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Subclass of IEC61968:Core2:TopLevel:Organisation
         */
        function parse_MktOrganisation (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Organisation (context, sub);
            obj.cls = "MktOrganisation";
            /**
             * Flag to indicate creditworthiness (Y, N)
             */
            obj["creditFlag"] = base.parse_element (/<cim:MktOrganisation.creditFlag>([\s\S]*?)<\/cim:MktOrganisation.creditFlag>/g, sub, context, true);
            /**
             * Date that the organisation becomes creditworthy.
             */
            obj["creditStartEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:MktOrganisation.creditStartEffectiveDate>([\s\S]*?)<\/cim:MktOrganisation.creditStartEffectiveDate>/g, sub, context, true));
            /**
             * end effective date
             */
            obj["endEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:MktOrganisation.endEffectiveDate>([\s\S]*?)<\/cim:MktOrganisation.endEffectiveDate>/g, sub, context, true));
            /**
             * Indication of the last time this Organization information was modified.
             */
            obj["lastModified"] = base.to_datetime (base.parse_element (/<cim:MktOrganisation.lastModified>([\s\S]*?)<\/cim:MktOrganisation.lastModified>/g, sub, context, true));
            /**
             * Organisation (internal) ID
             */
            obj["organisationID"] = base.parse_element (/<cim:MktOrganisation.organisationID>([\s\S]*?)<\/cim:MktOrganisation.organisationID>/g, sub, context, true);
            /**
             * Organisation qualification status, Qualified, Not Qualified, or Disqualified
             */
            obj["qualificationStatus"] = base.parse_element (/<cim:MktOrganisation.qualificationStatus>([\s\S]*?)<\/cim:MktOrganisation.qualificationStatus>/g, sub, context, true);
            /**
             * start effective date
             */
            obj["startEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:MktOrganisation.startEffectiveDate>([\s\S]*?)<\/cim:MktOrganisation.startEffectiveDate>/g, sub, context, true));
            bucket = context.parsed.MktOrganisation;
            if (null == bucket)
                context.parsed.MktOrganisation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Subclass of IEC61970:Wires:EnergyConsumer
         */
        function parse_MktEnergyConsumer (context, sub)
        {
            var obj;
            var bucket;

            obj = Wires.parse_EnergyConsumer (context, sub);
            obj.cls = "MktEnergyConsumer";
            /**
             * 
             */
            obj["RegisteredLoad"] = base.parse_attribute (/<cim:MktEnergyConsumer.RegisteredLoad\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MktEnergyConsumer;
            if (null == bucket)
                context.parsed.MktEnergyConsumer = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Subclass of IEC61970:Meas:Measurement
         */
        function parse_MktMeasurement (context, sub)
        {
            var obj;
            var bucket;

            obj = Meas.parse_Measurement (context, sub);
            obj.cls = "MktMeasurement";
            /**
             * 
             */
            obj["Pnode"] = base.parse_attribute (/<cim:MktMeasurement.Pnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * A measurement is made on the A side of a tie point
             */
            obj["ForTiePoint"] = base.parse_attribute (/<cim:MktMeasurement.ForTiePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * A measurement is made on the B side of a tie point
             */
            obj["ByTiePoint"] = base.parse_attribute (/<cim:MktMeasurement.ByTiePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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