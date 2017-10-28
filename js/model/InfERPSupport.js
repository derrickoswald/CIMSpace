define
(
    ["model/base", "model/Common", "model/Core", "model/InfCommon"],
    /**
     * The package contains portions of the model defined byEnterprise Resource Planning (ERP) standards like those proposed by the Open Applications Group (OAG).
     *
     * It is provided to facilitate integration among electric utility applications (CIM) and enterprise resource planning (ERP) applications (as defined by OAG). Rather than inventing new CIM classes that accomplish similar functionality as in existing ERP models, the preferred approach is to use and extend ERP classes as appropriate in other packages.
     *
     */
    function (base, Common, Core, InfCommon)
    {

        /**
         * Any unique purchased part for manufactured product tracked by ERP systems for a utility.
         *
         * Item, as used by the OAG, refers to the basic information about an item, including its attributes, cost, and locations. It does not include item quantities. Compare to the Inventory, which includes all quantities and other location-specific information.
         *
         */
        function parse_ErpItemMaster (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpIdentifiedObject (context, sub);
            obj.cls = "ErpItemMaster";
            base.parse_element (/<cim:ErpItemMaster.status>([\s\S]*?)<\/cim:ErpItemMaster.status>/g, obj, "status", base.to_string, sub, context);

            base.parse_attribute (/<cim:ErpItemMaster.Asset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context, true);

            bucket = context.parsed.ErpItemMaster;
            if (null == bucket)
                context.parsed.ErpItemMaster = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Transaction representing an invoice, credit memo or debit memo to a customer.
         *
         * It is an open (unpaid) item in the Accounts Receivable ledger.
         *
         */
        function parse_ErpReceivable (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpDocument (context, sub);
            obj.cls = "ErpReceivable";
            bucket = context.parsed.ErpReceivable;
            if (null == bucket)
                context.parsed.ErpReceivable = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Of an ErpPayable, a line item references an ErpInvoiceLineitem or other source such as credit memos.
         *
         */
        function parse_ErpPayableLineItem (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpIdentifiedObject (context, sub);
            obj.cls = "ErpPayableLineItem";
            base.parse_element (/<cim:ErpPayableLineItem.status>([\s\S]*?)<\/cim:ErpPayableLineItem.status>/g, obj, "status", base.to_string, sub, context);

            base.parse_attribute (/<cim:ErpPayableLineItem.ErpPayable\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpPayable", sub, context, true);

            base.parse_attribute (/<cim:ErpPayableLineItem.ErpInvoiceLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpInvoiceLineItem", sub, context, true);

            bucket = context.parsed.ErpPayableLineItem;
            if (null == bucket)
                context.parsed.ErpPayableLineItem = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * General Utility Engineering Change Order information.
         *
         */
        function parse_ErpEngChangeOrder (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpDocument (context, sub);
            obj.cls = "ErpEngChangeOrder";
            bucket = context.parsed.ErpEngChangeOrder;
            if (null == bucket)
                context.parsed.ErpEngChangeOrder = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Individual entry of an ErpReceivable, it is a particular transaction representing an invoice, credit memo or debit memo to a customer.
         *
         */
        function parse_ErpRecLineItem (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpIdentifiedObject (context, sub);
            obj.cls = "ErpRecLineItem";
            base.parse_element (/<cim:ErpRecLineItem.status>([\s\S]*?)<\/cim:ErpRecLineItem.status>/g, obj, "status", base.to_string, sub, context);

            base.parse_attribute (/<cim:ErpRecLineItem.ErpInvoiceLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpInvoiceLineItem", sub, context, true);

            base.parse_attribute (/<cim:ErpRecLineItem.ErpReceivable\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpReceivable", sub, context, true);

            bucket = context.parsed.ErpRecLineItem;
            if (null == bucket)
                context.parsed.ErpRecLineItem = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A transaction that represents an invoice from a supplier.
         *
         * A payable (or voucher) is an open item, approved and ready for payment, in the Accounts Payable ledger.
         *
         */
        function parse_ErpPayable (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpDocument (context, sub);
            obj.cls = "ErpPayable";
            bucket = context.parsed.ErpPayable;
            if (null == bucket)
                context.parsed.ErpPayable = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Can be used to request an application to process an issue or request information about an issue.
         *
         */
        function parse_ErpIssueInventory (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpIdentifiedObject (context, sub);
            obj.cls = "ErpIssueInventory";
            base.parse_element (/<cim:ErpIssueInventory.status>([\s\S]*?)<\/cim:ErpIssueInventory.status>/g, obj, "status", base.to_string, sub, context);

            base.parse_attribute (/<cim:ErpIssueInventory.TypeMaterial\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TypeMaterial", sub, context, true);

            base.parse_attribute (/<cim:ErpIssueInventory.TypeAsset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TypeAsset", sub, context, true);

            bucket = context.parsed.ErpIssueInventory;
            if (null == bucket)
                context.parsed.ErpIssueInventory = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of ERP account.
         *
         */
        function parse_ErpAccountKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ErpAccountKind";
            base.parse_element (/<cim:ErpAccountKind.normal>([\s\S]*?)<\/cim:ErpAccountKind.normal>/g, obj, "normal", base.to_string, sub, context);

            base.parse_element (/<cim:ErpAccountKind.reversal>([\s\S]*?)<\/cim:ErpAccountKind.reversal>/g, obj, "reversal", base.to_string, sub, context);

            base.parse_element (/<cim:ErpAccountKind.statistical>([\s\S]*?)<\/cim:ErpAccountKind.statistical>/g, obj, "statistical", base.to_string, sub, context);

            base.parse_element (/<cim:ErpAccountKind.estimate>([\s\S]*?)<\/cim:ErpAccountKind.estimate>/g, obj, "estimate", base.to_string, sub, context);

            bucket = context.parsed.ErpAccountKind;
            if (null == bucket)
                context.parsed.ErpAccountKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Utility inventory-related information about an item or part (and not for description of the item and its attributes).
         *
         * It is used by ERP applications to enable the synchronization of Inventory data that exists on separate Item Master databases. This data is not the master data that describes the attributes of the item such as dimensions, weight, or unit of measure - it describes the item as it exists at a specific location.
         *
         */
        function parse_ErpInventory (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpIdentifiedObject (context, sub);
            obj.cls = "ErpInventory";
            base.parse_element (/<cim:ErpInventory.status>([\s\S]*?)<\/cim:ErpInventory.status>/g, obj, "status", base.to_string, sub, context);

            base.parse_attribute (/<cim:ErpInventory.Asset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context, true);

            bucket = context.parsed.ErpInventory;
            if (null == bucket)
                context.parsed.ErpInventory = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Information that describes a requested item and its attributes.
         *
         */
        function parse_ErpReqLineItem (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpIdentifiedObject (context, sub);
            obj.cls = "ErpReqLineItem";
            base.parse_element (/<cim:ErpReqLineItem.code>([\s\S]*?)<\/cim:ErpReqLineItem.code>/g, obj, "code", base.to_string, sub, context);

            /**
             * Cost of material.
             *
             */
            base.parse_element (/<cim:ErpReqLineItem.cost>([\s\S]*?)<\/cim:ErpReqLineItem.cost>/g, obj, "cost", base.to_string, sub, context);

            base.parse_element (/<cim:ErpReqLineItem.deliveryDate>([\s\S]*?)<\/cim:ErpReqLineItem.deliveryDate>/g, obj, "deliveryDate", base.to_string, sub, context);

            /**
             * Quantity of item requisitioned.
             *
             */
            base.parse_element (/<cim:ErpReqLineItem.quantity>([\s\S]*?)<\/cim:ErpReqLineItem.quantity>/g, obj, "quantity", base.to_string, sub, context);

            base.parse_element (/<cim:ErpReqLineItem.status>([\s\S]*?)<\/cim:ErpReqLineItem.status>/g, obj, "status", base.to_string, sub, context);

            base.parse_attribute (/<cim:ErpReqLineItem.ErpPOLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpPOLineItem", sub, context, true);

            base.parse_attribute (/<cim:ErpReqLineItem.TypeMaterial\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TypeMaterial", sub, context, true);

            base.parse_attribute (/<cim:ErpReqLineItem.ErpRequisition\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpRequisition", sub, context, true);

            base.parse_attribute (/<cim:ErpReqLineItem.TypeAsset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TypeAsset", sub, context, true);

            base.parse_attribute (/<cim:ErpReqLineItem.ErpQuoteLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpQuoteLineItem", sub, context, true);

            bucket = context.parsed.ErpReqLineItem;
            if (null == bucket)
                context.parsed.ErpReqLineItem = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Information that applies to the basic data about a utility person, used by ERP applications to transfer Personnel data for a worker.
         *
         */
        function parse_ErpPersonnel (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpIdentifiedObject (context, sub);
            obj.cls = "ErpPersonnel";
            base.parse_element (/<cim:ErpPersonnel.status>([\s\S]*?)<\/cim:ErpPersonnel.status>/g, obj, "status", base.to_string, sub, context);

            bucket = context.parsed.ErpPersonnel;
            if (null == bucket)
                context.parsed.ErpPersonnel = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Details of an individual entry in a journal, which is to be posted to a ledger on the posting date.
         *
         */
        function parse_ErpJournalEntry (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpIdentifiedObject (context, sub);
            obj.cls = "ErpJournalEntry";
            /**
             * Account identifier for this entry.
             *
             */
            base.parse_element (/<cim:ErpJournalEntry.accountID>([\s\S]*?)<\/cim:ErpJournalEntry.accountID>/g, obj, "accountID", base.to_string, sub, context);

            /**
             * The amount of the debit or credit for this account.
             *
             */
            base.parse_element (/<cim:ErpJournalEntry.amount>([\s\S]*?)<\/cim:ErpJournalEntry.amount>/g, obj, "amount", base.to_string, sub, context);

            /**
             * Date and time this entry is to be posted to the ledger.
             *
             */
            base.parse_element (/<cim:ErpJournalEntry.postingDateTime>([\s\S]*?)<\/cim:ErpJournalEntry.postingDateTime>/g, obj, "postingDateTime", base.to_datetime, sub, context);

            /**
             * The identifer of the source for this entry.
             *
             */
            base.parse_element (/<cim:ErpJournalEntry.sourceID>([\s\S]*?)<\/cim:ErpJournalEntry.sourceID>/g, obj, "sourceID", base.to_string, sub, context);

            base.parse_element (/<cim:ErpJournalEntry.status>([\s\S]*?)<\/cim:ErpJournalEntry.status>/g, obj, "status", base.to_string, sub, context);

            /**
             * Date and time journal entry was recorded.
             *
             */
            base.parse_element (/<cim:ErpJournalEntry.transactionDateTime>([\s\S]*?)<\/cim:ErpJournalEntry.transactionDateTime>/g, obj, "transactionDateTime", base.to_datetime, sub, context);

            base.parse_attribute (/<cim:ErpJournalEntry.ErpLedgerEntry\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpLedgerEntry", sub, context, true);

            base.parse_attribute (/<cim:ErpJournalEntry.ErpJournal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpJournal", sub, context, true);

            base.parse_attribute (/<cim:ErpJournalEntry.ErpInvoiceLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpInvoiceLineItem", sub, context, true);

            bucket = context.parsed.ErpJournalEntry;
            if (null == bucket)
                context.parsed.ErpJournalEntry = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Information for utility Ledger Budgets.
         *
         * They support the transfer budget amounts between all possible source applications throughout an enterprise and a general ledger or budget application.
         *
         */
        function parse_ErpLedgerBudget (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpDocument (context, sub);
            obj.cls = "ErpLedgerBudget";
            bucket = context.parsed.ErpLedgerBudget;
            if (null == bucket)
                context.parsed.ErpLedgerBudget = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An individual item on a bill of materials.
         *
         */
        function parse_ErpBomItemData (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpIdentifiedObject (context, sub);
            obj.cls = "ErpBomItemData";
            base.parse_attribute (/<cim:ErpBomItemData.TypeAsset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TypeAsset", sub, context, true);

            base.parse_attribute (/<cim:ErpBomItemData.DesignLocation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DesignLocation", sub, context, true);

            base.parse_attribute (/<cim:ErpBomItemData.ErpBOM\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpBOM", sub, context, true);

            bucket = context.parsed.ErpBomItemData;
            if (null == bucket)
                context.parsed.ErpBomItemData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Document describing the prices of goods or services provided by a supplier.
         *
         * It includes the terms of the purchase, delivery proposals, identification of goods or services ordered, as well as their quantities.
         *
         */
        function parse_ErpQuote (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpDocument (context, sub);
            obj.cls = "ErpQuote";
            bucket = context.parsed.ErpQuote;
            if (null == bucket)
                context.parsed.ErpQuote = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For a utility, general information that describes physical locations of organizations or the location codes and their meanings.
         *
         * This enables ERP applications to ensure that the physical location identifiers are synchronized between the business applications.
         *
         */
        function parse_ErpSiteLevelData (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpIdentifiedObject (context, sub);
            obj.cls = "ErpSiteLevelData";
            base.parse_element (/<cim:ErpSiteLevelData.status>([\s\S]*?)<\/cim:ErpSiteLevelData.status>/g, obj, "status", base.to_string, sub, context);

            base.parse_attribute (/<cim:ErpSiteLevelData.LandProperty\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LandProperty", sub, context, true);

            bucket = context.parsed.ErpSiteLevelData;
            if (null == bucket)
                context.parsed.ErpSiteLevelData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of ERP invoice.
         *
         */
        function parse_ErpInvoiceKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ErpInvoiceKind";
            base.parse_element (/<cim:ErpInvoiceKind.sale>([\s\S]*?)<\/cim:ErpInvoiceKind.sale>/g, obj, "sale", base.to_string, sub, context);

            base.parse_element (/<cim:ErpInvoiceKind.purchase>([\s\S]*?)<\/cim:ErpInvoiceKind.purchase>/g, obj, "purchase", base.to_string, sub, context);

            bucket = context.parsed.ErpInvoiceKind;
            if (null == bucket)
                context.parsed.ErpInvoiceKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Shadow class for Document, to isolate subclassing from this package.
         *
         * If any subclass gets normative and needs inheritance, it will inherit directly from Document.
         *
         */
        function parse_ErpDocument (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "ErpDocument";
            bucket = context.parsed.ErpDocument;
            if (null == bucket)
                context.parsed.ErpDocument = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * General purpose Sales Order is used for utility service orders, etc.
         *
         * As used by the OAG, the SalesOrder is a step beyond a PurchaseOrder in that the receiving entity of the order also communicates SalesInformoration about the Order along with the Order itself.
         *
         */
        function parse_ErpSalesOrder (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpDocument (context, sub);
            obj.cls = "ErpSalesOrder";
            bucket = context.parsed.ErpSalesOrder;
            if (null == bucket)
                context.parsed.ErpSalesOrder = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Time sheet for employees and contractors.
         *
         * Note that ErpTimeSheet inherits the relationship to ErpPerson from Document.
         *
         */
        function parse_ErpTimeSheet (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpDocument (context, sub);
            obj.cls = "ErpTimeSheet";
            bucket = context.parsed.ErpTimeSheet;
            if (null == bucket)
                context.parsed.ErpTimeSheet = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Of an ErpPurchaseOrder, this is an individually ordered item or product along with the quantity, price and other descriptive information.
         *
         */
        function parse_ErpPOLineItem (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpDocument (context, sub);
            obj.cls = "ErpPOLineItem";
            base.parse_attribute (/<cim:ErpPOLineItem.ErpRecDelLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpRecDelLineItem", sub, context, true);

            base.parse_attribute (/<cim:ErpPOLineItem.ErpReqLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpReqLineItem", sub, context, true);

            base.parse_attribute (/<cim:ErpPOLineItem.AssetModelCatalogueItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetModelCatalogueItem", sub, context, true);

            base.parse_attribute (/<cim:ErpPOLineItem.ErpPurchaseOrder\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpPurchaseOrder", sub, context, true);

            bucket = context.parsed.ErpPOLineItem;
            if (null == bucket)
                context.parsed.ErpPOLineItem = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Of an ErpReceiveDelivery, this is an individually received good or service by the Organisation receiving goods or services.
         *
         * It may be used to indicate receipt of goods in conjunction with a purchase order line item.
         *
         */
        function parse_ErpRecDelvLineItem (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpIdentifiedObject (context, sub);
            obj.cls = "ErpRecDelvLineItem";
            base.parse_element (/<cim:ErpRecDelvLineItem.status>([\s\S]*?)<\/cim:ErpRecDelvLineItem.status>/g, obj, "status", base.to_string, sub, context);

            base.parse_attribute (/<cim:ErpRecDelvLineItem.ErpPOLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpPOLineItem", sub, context, true);

            base.parse_attribute (/<cim:ErpRecDelvLineItem.ErpInvoiceLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpInvoiceLineItem", sub, context, true);

            base.parse_attribute (/<cim:ErpRecDelvLineItem.ErpReceiveDelivery\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpReceiveDelivery", sub, context, true);

            bucket = context.parsed.ErpRecDelvLineItem;
            if (null == bucket)
                context.parsed.ErpRecDelvLineItem = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Information that describes aptitudes of a utility employee.
         *
         * Unlike Skills that an ErpPerson must be certified to perform before undertaking certain type of assignments (to be able to perfrom a Craft), ErpCompetency has more to do with typical Human Resource (HR) matters such as schooling, training, etc.
         *
         */
        function parse_ErpCompetency (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpIdentifiedObject (context, sub);
            obj.cls = "ErpCompetency";
            bucket = context.parsed.ErpCompetency;
            if (null == bucket)
                context.parsed.ErpCompetency = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of invoice line item.
         *
         */
        function parse_ErpInvoiceLineItemKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ErpInvoiceLineItemKind";
            base.parse_element (/<cim:ErpInvoiceLineItemKind.initial>([\s\S]*?)<\/cim:ErpInvoiceLineItemKind.initial>/g, obj, "initial", base.to_string, sub, context);

            base.parse_element (/<cim:ErpInvoiceLineItemKind.recalculation>([\s\S]*?)<\/cim:ErpInvoiceLineItemKind.recalculation>/g, obj, "recalculation", base.to_string, sub, context);

            base.parse_element (/<cim:ErpInvoiceLineItemKind.other>([\s\S]*?)<\/cim:ErpInvoiceLineItemKind.other>/g, obj, "other", base.to_string, sub, context);

            bucket = context.parsed.ErpInvoiceLineItemKind;
            if (null == bucket)
                context.parsed.ErpInvoiceLineItemKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Shadow class for IdentifiedObject, to isolate subclassing from this package.
         *
         * If any subclass gets normative and needs inheritance, it will inherit directly from IdentifiedObject.
         *
         */
        function parse_ErpIdentifiedObject (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ErpIdentifiedObject";
            bucket = context.parsed.ErpIdentifiedObject;
            if (null == bucket)
                context.parsed.ErpIdentifiedObject = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Transaction for an Organisation receiving goods or services that may be used to indicate receipt of goods in conjunction with a purchase order.
         *
         * A receivable is an open (unpaid) item in the Accounts Receivable ledger.
         *
         */
        function parse_ErpReceiveDelivery (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpDocument (context, sub);
            obj.cls = "ErpReceiveDelivery";
            bucket = context.parsed.ErpReceiveDelivery;
            if (null == bucket)
                context.parsed.ErpReceiveDelivery = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of bill media.
         *
         */
        function parse_BillMediaKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "BillMediaKind";
            base.parse_element (/<cim:BillMediaKind.paper>([\s\S]*?)<\/cim:BillMediaKind.paper>/g, obj, "paper", base.to_string, sub, context);

            base.parse_element (/<cim:BillMediaKind.electronic>([\s\S]*?)<\/cim:BillMediaKind.electronic>/g, obj, "electronic", base.to_string, sub, context);

            base.parse_element (/<cim:BillMediaKind.other>([\s\S]*?)<\/cim:BillMediaKind.other>/g, obj, "other", base.to_string, sub, context);

            bucket = context.parsed.BillMediaKind;
            if (null == bucket)
                context.parsed.BillMediaKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Payment infromation and status for any individual line item of an ErpInvoice (e.g., when payment is from a customer).
         *
         * ErpPayable is also updated when payment is to a supplier and ErpReceivable is updated when payment is from a customer. Multiple payments can be made against a single line item and an individual payment can apply to more that one line item.
         *
         */
        function parse_ErpPayment (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpDocument (context, sub);
            obj.cls = "ErpPayment";
            /**
             * Payment terms (e.g., net 30).
             *
             */
            base.parse_element (/<cim:ErpPayment.termsPayment>([\s\S]*?)<\/cim:ErpPayment.termsPayment>/g, obj, "termsPayment", base.to_string, sub, context);

            bucket = context.parsed.ErpPayment;
            if (null == bucket)
                context.parsed.ErpPayment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Book for recording accounting transactions as they occur.
         *
         * Transactions and adjustments are first recorded in a journal, which is like a diary of instructions, advising which account to be charged and by how much.
         *
         */
        function parse_ErpJournal (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpDocument (context, sub);
            obj.cls = "ErpJournal";
            bucket = context.parsed.ErpJournal;
            if (null == bucket)
                context.parsed.ErpJournal = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A roll up of invoice line items.
         *
         * The whole invoice has a due date and amount to be paid, with information such as customer, banks etc. being obtained through associations. The invoice roll up is based on individual line items that each contain amounts and descriptions for specific services or products.
         *
         */
        function parse_ErpInvoice (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpDocument (context, sub);
            obj.cls = "ErpInvoice";
            /**
             * Total amount due on this invoice based on line items and applicable adjustments.
             *
             */
            base.parse_element (/<cim:ErpInvoice.amount>([\s\S]*?)<\/cim:ErpInvoice.amount>/g, obj, "amount", base.to_string, sub, context);

            /**
             * Kind of media by which the CustomerBillingInfo was delivered.
             *
             */
            base.parse_element (/<cim:ErpInvoice.billMediaKind>([\s\S]*?)<\/cim:ErpInvoice.billMediaKind>/g, obj, "billMediaKind", base.to_string, sub, context);

            /**
             * Calculated date upon which the Invoice amount is due.
             *
             */
            base.parse_element (/<cim:ErpInvoice.dueDate>([\s\S]*?)<\/cim:ErpInvoice.dueDate>/g, obj, "dueDate", base.to_string, sub, context);

            /**
             * Kind of invoice (default is 'sales').
             *
             */
            base.parse_element (/<cim:ErpInvoice.kind>([\s\S]*?)<\/cim:ErpInvoice.kind>/g, obj, "kind", base.to_string, sub, context);

            /**
             * Date on which the customer billing statement/invoice was printed/mailed.
             *
             */
            base.parse_element (/<cim:ErpInvoice.mailedDate>([\s\S]*?)<\/cim:ErpInvoice.mailedDate>/g, obj, "mailedDate", base.to_string, sub, context);

            /**
             * True if payment is to be paid by a Customer to accept a particular ErpQuote (with associated Design) and have work initiated, at which time an associated ErpInvoice should automatically be generated.
             *
             * EprPayment.subjectStatus satisfies terms specificed in the ErpQuote.
             *
             */
            base.parse_element (/<cim:ErpInvoice.proForma>([\s\S]*?)<\/cim:ErpInvoice.proForma>/g, obj, "proForma", base.to_boolean, sub, context);

            /**
             * Number of an invoice to be reference by this invoice.
             *
             */
            base.parse_element (/<cim:ErpInvoice.referenceNumber>([\s\S]*?)<\/cim:ErpInvoice.referenceNumber>/g, obj, "referenceNumber", base.to_string, sub, context);

            /**
             * Date and time when the invoice is issued.
             *
             */
            base.parse_element (/<cim:ErpInvoice.transactionDateTime>([\s\S]*?)<\/cim:ErpInvoice.transactionDateTime>/g, obj, "transactionDateTime", base.to_datetime, sub, context);

            /**
             * Type of invoice transfer.
             *
             */
            base.parse_element (/<cim:ErpInvoice.transferType>([\s\S]*?)<\/cim:ErpInvoice.transferType>/g, obj, "transferType", base.to_string, sub, context);

            base.parse_attribute (/<cim:ErpInvoice.CustomerAccount\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAccount", sub, context, true);

            bucket = context.parsed.ErpInvoice;
            if (null == bucket)
                context.parsed.ErpInvoice = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Relationship under a particular name, usually evidenced by a deposit against which withdrawals can be made.
         *
         * Types of bank accounts include: demand, time, custodial, joint, trustee, corporate, special, and regular accounts.
         *
         */
        function parse_ErpBankAccount (context, sub)
        {
            var obj;
            var bucket;

            obj = InfCommon.parse_BankAccount (context, sub);
            obj.cls = "ErpBankAccount";
            /**
             * Bank ABA.
             *
             */
            base.parse_element (/<cim:ErpBankAccount.bankABA>([\s\S]*?)<\/cim:ErpBankAccount.bankABA>/g, obj, "bankABA", base.to_string, sub, context);

            bucket = context.parsed.ErpBankAccount;
            if (null == bucket)
                context.parsed.ErpBankAccount = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A document that communicates an order to purchase goods from a buyer to a supplier.
         *
         * The PurchaseOrder carries information to and from the buyer and supplier. It is a legally binding document once both Parties agree to the contents and the specified terms and conditions of the order.
         *
         */
        function parse_ErpPurchaseOrder (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpDocument (context, sub);
            obj.cls = "ErpPurchaseOrder";
            bucket = context.parsed.ErpPurchaseOrder;
            if (null == bucket)
                context.parsed.ErpPurchaseOrder = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * In accounting transactions, a ledger is a book containing accounts to which debits and credits are posted from journals, where transactions are initially recorded.
         *
         * Journal entries are periodically posted to the ledger. Ledger Actual represents actual amounts by account within ledger within company or business area. Actual amounts may be generated in a source application and then loaded to a specific ledger within the enterprise general ledger or budget application.
         *
         */
        function parse_ErpLedger (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpDocument (context, sub);
            obj.cls = "ErpLedger";
            bucket = context.parsed.ErpLedger;
            if (null == bucket)
                context.parsed.ErpLedger = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * General information that applies to a utility requisition that is a request for the purchase of goods or services.
         *
         * Typically, a requisition leads to the creation of a purchase order to a specific supplier.
         *
         */
        function parse_ErpRequisition (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpDocument (context, sub);
            obj.cls = "ErpRequisition";
            bucket = context.parsed.ErpRequisition;
            if (null == bucket)
                context.parsed.ErpRequisition = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Information that generally describes the Bill of Material Structure and its contents for a utility.
         *
         * This is used by ERP systems to transfer Bill of Material information between two business applications.
         *
         */
        function parse_ErpBOM (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpDocument (context, sub);
            obj.cls = "ErpBOM";
            base.parse_attribute (/<cim:ErpBOM.Design\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Design", sub, context, true);

            bucket = context.parsed.ErpBOM;
            if (null == bucket)
                context.parsed.ErpBOM = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Individual entry of a given Ledger Budget, typically containing information such as amount, accounting date, accounting period, and is associated with the applicable general ledger account.
         *
         */
        function parse_ErpLedBudLineItem (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpIdentifiedObject (context, sub);
            obj.cls = "ErpLedBudLineItem";
            base.parse_element (/<cim:ErpLedBudLineItem.status>([\s\S]*?)<\/cim:ErpLedBudLineItem.status>/g, obj, "status", base.to_string, sub, context);

            base.parse_attribute (/<cim:ErpLedBudLineItem.ErpLedgerBudget\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpLedgerBudget", sub, context, true);

            base.parse_attribute (/<cim:ErpLedBudLineItem.ErpLedBudLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpLedBudLineItem", sub, context, true);

            bucket = context.parsed.ErpLedBudLineItem;
            if (null == bucket)
                context.parsed.ErpLedBudLineItem = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This is related to Inventory physical counts organized by AssetModel.
         *
         * Note that a count of a type of asset can be accomplished by the association inherited by AssetModel (from Document) to Asset.
         *
         */
        function parse_ErpInventoryCount (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpIdentifiedObject (context, sub);
            obj.cls = "ErpInventoryCount";
            base.parse_element (/<cim:ErpInventoryCount.status>([\s\S]*?)<\/cim:ErpInventoryCount.status>/g, obj, "status", base.to_string, sub, context);

            base.parse_attribute (/<cim:ErpInventoryCount.AssetModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetModel", sub, context, true);

            bucket = context.parsed.ErpInventoryCount;
            if (null == bucket)
                context.parsed.ErpInventoryCount = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Utility Project Accounting information, used by ERP applications to enable all relevant sub-systems that submit single sided transactions to transfer information with a Project Accounting Application.
         *
         * This would include, but not necessarily be limited to: Accounts Payable, Accounts Receivable, Budget, Order Management, Purchasing, Time and Labor, Travel and Expense.
         *
         */
        function parse_ErpProjectAccounting (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpDocument (context, sub);
            obj.cls = "ErpProjectAccounting";
            bucket = context.parsed.ErpProjectAccounting;
            if (null == bucket)
                context.parsed.ErpProjectAccounting = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An individual line item on an invoice.
         *
         */
        function parse_ErpInvoiceLineItem (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpDocument (context, sub);
            obj.cls = "ErpInvoiceLineItem";
            /**
             * Bill period for the line item.
             *
             */
            base.parse_element (/<cim:ErpInvoiceLineItem.billPeriod>([\s\S]*?)<\/cim:ErpInvoiceLineItem.billPeriod>/g, obj, "billPeriod", base.to_string, sub, context);

            /**
             * General Ledger account code, must be a valid combination.
             *
             */
            base.parse_element (/<cim:ErpInvoiceLineItem.glAccount>([\s\S]*?)<\/cim:ErpInvoiceLineItem.glAccount>/g, obj, "glAccount", base.to_string, sub, context);

            /**
             * Date and time line item will be posted to the General Ledger.
             *
             */
            base.parse_element (/<cim:ErpInvoiceLineItem.glDateTime>([\s\S]*?)<\/cim:ErpInvoiceLineItem.glDateTime>/g, obj, "glDateTime", base.to_datetime, sub, context);

            /**
             * Kind of line item.
             *
             */
            base.parse_element (/<cim:ErpInvoiceLineItem.kind>([\s\S]*?)<\/cim:ErpInvoiceLineItem.kind>/g, obj, "kind", base.to_string, sub, context);

            /**
             * Amount due for this line item.
             *
             */
            base.parse_element (/<cim:ErpInvoiceLineItem.lineAmount>([\s\S]*?)<\/cim:ErpInvoiceLineItem.lineAmount>/g, obj, "lineAmount", base.to_float, sub, context);

            /**
             * Line item number on invoice statement.
             *
             */
            base.parse_element (/<cim:ErpInvoiceLineItem.lineNumber>([\s\S]*?)<\/cim:ErpInvoiceLineItem.lineNumber>/g, obj, "lineNumber", base.to_string, sub, context);

            /**
             * Version number of the bill run.
             *
             */
            base.parse_element (/<cim:ErpInvoiceLineItem.lineVersion>([\s\S]*?)<\/cim:ErpInvoiceLineItem.lineVersion>/g, obj, "lineVersion", base.to_string, sub, context);

            /**
             * Net line item charge amount.
             *
             */
            base.parse_element (/<cim:ErpInvoiceLineItem.netAmount>([\s\S]*?)<\/cim:ErpInvoiceLineItem.netAmount>/g, obj, "netAmount", base.to_float, sub, context);

            /**
             * Previous line item charge amount.
             *
             */
            base.parse_element (/<cim:ErpInvoiceLineItem.previousAmount>([\s\S]*?)<\/cim:ErpInvoiceLineItem.previousAmount>/g, obj, "previousAmount", base.to_float, sub, context);

            base.parse_attribute (/<cim:ErpInvoiceLineItem.ContainerErpInvoiceLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ContainerErpInvoiceLineItem", sub, context, true);

            base.parse_attribute (/<cim:ErpInvoiceLineItem.ErpPayableLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpPayableLineItem", sub, context, true);

            base.parse_attribute (/<cim:ErpInvoiceLineItem.ErpInvoice\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpInvoice", sub, context, true);

            base.parse_attribute (/<cim:ErpInvoiceLineItem.ErpRecLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpRecLineItem", sub, context, true);

            base.parse_attribute (/<cim:ErpInvoiceLineItem.ErpRecDelvLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpRecDelvLineItem", sub, context, true);

            base.parse_attribute (/<cim:ErpInvoiceLineItem.ErpQuoteLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpQuoteLineItem", sub, context, true);

            bucket = context.parsed.ErpInvoiceLineItem;
            if (null == bucket)
                context.parsed.ErpInvoiceLineItem = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An individual entry on an ErpTimeSheet.
         *
         */
        function parse_ErpTimeEntry (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpIdentifiedObject (context, sub);
            obj.cls = "ErpTimeEntry";
            base.parse_element (/<cim:ErpTimeEntry.status>([\s\S]*?)<\/cim:ErpTimeEntry.status>/g, obj, "status", base.to_string, sub, context);

            base.parse_attribute (/<cim:ErpTimeEntry.ErpTimeSheet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpTimeSheet", sub, context, true);

            base.parse_attribute (/<cim:ErpTimeEntry.ErpProjectAccounting\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpProjectAccounting", sub, context, true);

            bucket = context.parsed.ErpTimeEntry;
            if (null == bucket)
                context.parsed.ErpTimeEntry = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Accounting structure of a business.
         *
         * Each account represents a financial aspect of a business, such as its Accounts Payable, or the value of its inventory, or its office supply expenses.
         *
         */
        function parse_ErpChartOfAccounts (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpDocument (context, sub);
            obj.cls = "ErpChartOfAccounts";
            bucket = context.parsed.ErpChartOfAccounts;
            if (null == bucket)
                context.parsed.ErpChartOfAccounts = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Of an ErpQuote, the item or product quoted along with quantity, price and other descriptive information.
         *
         */
        function parse_ErpQuoteLineItem (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpIdentifiedObject (context, sub);
            obj.cls = "ErpQuoteLineItem";
            base.parse_element (/<cim:ErpQuoteLineItem.status>([\s\S]*?)<\/cim:ErpQuoteLineItem.status>/g, obj, "status", base.to_string, sub, context);

            base.parse_attribute (/<cim:ErpQuoteLineItem.Design\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Design", sub, context, true);

            base.parse_attribute (/<cim:ErpQuoteLineItem.ErpQuote\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpQuote", sub, context, true);

            /**
             * Some utilities provide quotes to customer for services, where the customer accepts the quote by making a payment.
             *
             * An invoice is required for this to occur.
             *
             */
            base.parse_attribute (/<cim:ErpQuoteLineItem.ErpInvoiceLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpInvoiceLineItem", sub, context, true);

            base.parse_attribute (/<cim:ErpQuoteLineItem.ErpReqLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpReqLineItem", sub, context, true);

            base.parse_attribute (/<cim:ErpQuoteLineItem.AssetModelCatalogueItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetModelCatalogueItem", sub, context, true);

            bucket = context.parsed.ErpQuoteLineItem;
            if (null == bucket)
                context.parsed.ErpQuoteLineItem = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Details of an individual entry in a ledger, which was posted from a journal on the posted date.
         *
         */
        function parse_ErpLedgerEntry (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ErpIdentifiedObject (context, sub);
            obj.cls = "ErpLedgerEntry";
            /**
             * Account identifier for this entry.
             *
             */
            base.parse_element (/<cim:ErpLedgerEntry.accountID>([\s\S]*?)<\/cim:ErpLedgerEntry.accountID>/g, obj, "accountID", base.to_string, sub, context);

            /**
             * Kind of account for this entry.
             *
             */
            base.parse_element (/<cim:ErpLedgerEntry.accountKind>([\s\S]*?)<\/cim:ErpLedgerEntry.accountKind>/g, obj, "accountKind", base.to_string, sub, context);

            /**
             * The amount of the debit or credit for this account.
             *
             */
            base.parse_element (/<cim:ErpLedgerEntry.amount>([\s\S]*?)<\/cim:ErpLedgerEntry.amount>/g, obj, "amount", base.to_string, sub, context);

            /**
             * Date and time this entry was posted to the ledger.
             *
             */
            base.parse_element (/<cim:ErpLedgerEntry.postedDateTime>([\s\S]*?)<\/cim:ErpLedgerEntry.postedDateTime>/g, obj, "postedDateTime", base.to_datetime, sub, context);

            base.parse_element (/<cim:ErpLedgerEntry.status>([\s\S]*?)<\/cim:ErpLedgerEntry.status>/g, obj, "status", base.to_string, sub, context);

            /**
             * Date and time journal entry was recorded.
             *
             */
            base.parse_element (/<cim:ErpLedgerEntry.transactionDateTime>([\s\S]*?)<\/cim:ErpLedgerEntry.transactionDateTime>/g, obj, "transactionDateTime", base.to_datetime, sub, context);

            base.parse_attribute (/<cim:ErpLedgerEntry.ErpJounalEntry\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpJounalEntry", sub, context, true);

            base.parse_attribute (/<cim:ErpLedgerEntry.ErpLedgerEntry\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpLedgerEntry", sub, context, true);

            base.parse_attribute (/<cim:ErpLedgerEntry.ErpLedger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpLedger", sub, context, true);

            bucket = context.parsed.ErpLedgerEntry;
            if (null == bucket)
                context.parsed.ErpLedgerEntry = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_BillMediaKind: parse_BillMediaKind,
                parse_ErpPersonnel: parse_ErpPersonnel,
                parse_ErpQuoteLineItem: parse_ErpQuoteLineItem,
                parse_ErpPurchaseOrder: parse_ErpPurchaseOrder,
                parse_ErpEngChangeOrder: parse_ErpEngChangeOrder,
                parse_ErpPOLineItem: parse_ErpPOLineItem,
                parse_ErpReceivable: parse_ErpReceivable,
                parse_ErpInventory: parse_ErpInventory,
                parse_ErpPayment: parse_ErpPayment,
                parse_ErpLedgerBudget: parse_ErpLedgerBudget,
                parse_ErpInvoiceKind: parse_ErpInvoiceKind,
                parse_ErpReqLineItem: parse_ErpReqLineItem,
                parse_ErpSiteLevelData: parse_ErpSiteLevelData,
                parse_ErpBankAccount: parse_ErpBankAccount,
                parse_ErpBOM: parse_ErpBOM,
                parse_ErpJournalEntry: parse_ErpJournalEntry,
                parse_ErpInvoiceLineItem: parse_ErpInvoiceLineItem,
                parse_ErpJournal: parse_ErpJournal,
                parse_ErpCompetency: parse_ErpCompetency,
                parse_ErpItemMaster: parse_ErpItemMaster,
                parse_ErpLedgerEntry: parse_ErpLedgerEntry,
                parse_ErpTimeSheet: parse_ErpTimeSheet,
                parse_ErpReceiveDelivery: parse_ErpReceiveDelivery,
                parse_ErpChartOfAccounts: parse_ErpChartOfAccounts,
                parse_ErpIdentifiedObject: parse_ErpIdentifiedObject,
                parse_ErpInventoryCount: parse_ErpInventoryCount,
                parse_ErpInvoiceLineItemKind: parse_ErpInvoiceLineItemKind,
                parse_ErpQuote: parse_ErpQuote,
                parse_ErpPayable: parse_ErpPayable,
                parse_ErpDocument: parse_ErpDocument,
                parse_ErpProjectAccounting: parse_ErpProjectAccounting,
                parse_ErpIssueInventory: parse_ErpIssueInventory,
                parse_ErpLedBudLineItem: parse_ErpLedBudLineItem,
                parse_ErpInvoice: parse_ErpInvoice,
                parse_ErpSalesOrder: parse_ErpSalesOrder,
                parse_ErpRecLineItem: parse_ErpRecLineItem,
                parse_ErpPayableLineItem: parse_ErpPayableLineItem,
                parse_ErpRequisition: parse_ErpRequisition,
                parse_ErpTimeEntry: parse_ErpTimeEntry,
                parse_ErpBomItemData: parse_ErpBomItemData,
                parse_ErpLedger: parse_ErpLedger,
                parse_ErpAccountKind: parse_ErpAccountKind,
                parse_ErpRecDelvLineItem: parse_ErpRecDelvLineItem
            }
        );
    }
);