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
         * Kind of ERP account.
         *
         */
        class ErpAccountKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpAccountKind;
                if (null == bucket)
                   cim_data.ErpAccountKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpAccountKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ErpAccountKind";
                base.parse_element (/<cim:ErpAccountKind.normal>([\s\S]*?)<\/cim:ErpAccountKind.normal>/g, obj, "normal", base.to_string, sub, context);
                base.parse_element (/<cim:ErpAccountKind.reversal>([\s\S]*?)<\/cim:ErpAccountKind.reversal>/g, obj, "reversal", base.to_string, sub, context);
                base.parse_element (/<cim:ErpAccountKind.statistical>([\s\S]*?)<\/cim:ErpAccountKind.statistical>/g, obj, "statistical", base.to_string, sub, context);
                base.parse_element (/<cim:ErpAccountKind.estimate>([\s\S]*?)<\/cim:ErpAccountKind.estimate>/g, obj, "estimate", base.to_string, sub, context);

                var bucket = context.parsed.ErpAccountKind;
                if (null == bucket)
                   context.parsed.ErpAccountKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ErpAccountKind", "normal", base.from_string, fields);
                base.export_element (obj, "ErpAccountKind", "reversal", base.from_string, fields);
                base.export_element (obj, "ErpAccountKind", "statistical", base.from_string, fields);
                base.export_element (obj, "ErpAccountKind", "estimate", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Kind of ERP invoice.
         *
         */
        class ErpInvoiceKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpInvoiceKind;
                if (null == bucket)
                   cim_data.ErpInvoiceKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpInvoiceKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ErpInvoiceKind";
                base.parse_element (/<cim:ErpInvoiceKind.sale>([\s\S]*?)<\/cim:ErpInvoiceKind.sale>/g, obj, "sale", base.to_string, sub, context);
                base.parse_element (/<cim:ErpInvoiceKind.purchase>([\s\S]*?)<\/cim:ErpInvoiceKind.purchase>/g, obj, "purchase", base.to_string, sub, context);

                var bucket = context.parsed.ErpInvoiceKind;
                if (null == bucket)
                   context.parsed.ErpInvoiceKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ErpInvoiceKind", "sale", base.from_string, fields);
                base.export_element (obj, "ErpInvoiceKind", "purchase", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Shadow class for Document, to isolate subclassing from this package.
         *
         * If any subclass gets normative and needs inheritance, it will inherit directly from Document.
         *
         */
        class ErpDocument extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpDocument;
                if (null == bucket)
                   cim_data.ErpDocument = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpDocument[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "ErpDocument";

                var bucket = context.parsed.ErpDocument;
                if (null == bucket)
                   context.parsed.ErpDocument = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Kind of invoice line item.
         *
         */
        class ErpInvoiceLineItemKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpInvoiceLineItemKind;
                if (null == bucket)
                   cim_data.ErpInvoiceLineItemKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpInvoiceLineItemKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ErpInvoiceLineItemKind";
                base.parse_element (/<cim:ErpInvoiceLineItemKind.initial>([\s\S]*?)<\/cim:ErpInvoiceLineItemKind.initial>/g, obj, "initial", base.to_string, sub, context);
                base.parse_element (/<cim:ErpInvoiceLineItemKind.recalculation>([\s\S]*?)<\/cim:ErpInvoiceLineItemKind.recalculation>/g, obj, "recalculation", base.to_string, sub, context);
                base.parse_element (/<cim:ErpInvoiceLineItemKind.other>([\s\S]*?)<\/cim:ErpInvoiceLineItemKind.other>/g, obj, "other", base.to_string, sub, context);

                var bucket = context.parsed.ErpInvoiceLineItemKind;
                if (null == bucket)
                   context.parsed.ErpInvoiceLineItemKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ErpInvoiceLineItemKind", "initial", base.from_string, fields);
                base.export_element (obj, "ErpInvoiceLineItemKind", "recalculation", base.from_string, fields);
                base.export_element (obj, "ErpInvoiceLineItemKind", "other", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Shadow class for IdentifiedObject, to isolate subclassing from this package.
         *
         * If any subclass gets normative and needs inheritance, it will inherit directly from IdentifiedObject.
         *
         */
        class ErpIdentifiedObject extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpIdentifiedObject;
                if (null == bucket)
                   cim_data.ErpIdentifiedObject = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpIdentifiedObject[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpIdentifiedObject";

                var bucket = context.parsed.ErpIdentifiedObject;
                if (null == bucket)
                   context.parsed.ErpIdentifiedObject = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Kind of bill media.
         *
         */
        class BillMediaKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BillMediaKind;
                if (null == bucket)
                   cim_data.BillMediaKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BillMediaKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "BillMediaKind";
                base.parse_element (/<cim:BillMediaKind.paper>([\s\S]*?)<\/cim:BillMediaKind.paper>/g, obj, "paper", base.to_string, sub, context);
                base.parse_element (/<cim:BillMediaKind.electronic>([\s\S]*?)<\/cim:BillMediaKind.electronic>/g, obj, "electronic", base.to_string, sub, context);
                base.parse_element (/<cim:BillMediaKind.other>([\s\S]*?)<\/cim:BillMediaKind.other>/g, obj, "other", base.to_string, sub, context);

                var bucket = context.parsed.BillMediaKind;
                if (null == bucket)
                   context.parsed.BillMediaKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "BillMediaKind", "paper", base.from_string, fields);
                base.export_element (obj, "BillMediaKind", "electronic", base.from_string, fields);
                base.export_element (obj, "BillMediaKind", "other", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Relationship under a particular name, usually evidenced by a deposit against which withdrawals can be made.
         *
         * Types of bank accounts include: demand, time, custodial, joint, trustee, corporate, special, and regular accounts.
         *
         */
        class ErpBankAccount extends InfCommon.BankAccount
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpBankAccount;
                if (null == bucket)
                   cim_data.ErpBankAccount = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpBankAccount[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = InfCommon.BankAccount.prototype.parse.call (this, context, sub);
                obj.cls = "ErpBankAccount";
                base.parse_element (/<cim:ErpBankAccount.bankABA>([\s\S]*?)<\/cim:ErpBankAccount.bankABA>/g, obj, "bankABA", base.to_string, sub, context);

                var bucket = context.parsed.ErpBankAccount;
                if (null == bucket)
                   context.parsed.ErpBankAccount = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = InfCommon.BankAccount.prototype.export.call (this, obj, false);

                base.export_element (obj, "ErpBankAccount", "bankABA", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * General purpose Sales Order is used for utility service orders, etc.
         *
         * As used by the OAG, the SalesOrder is a step beyond a PurchaseOrder in that the receiving entity of the order also communicates SalesInformoration about the Order along with the Order itself.
         *
         */
        class ErpSalesOrder extends ErpDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpSalesOrder;
                if (null == bucket)
                   cim_data.ErpSalesOrder = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpSalesOrder[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpSalesOrder";

                var bucket = context.parsed.ErpSalesOrder;
                if (null == bucket)
                   context.parsed.ErpSalesOrder = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpDocument.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Time sheet for employees and contractors.
         *
         * Note that ErpTimeSheet inherits the relationship to ErpPerson from Document.
         *
         */
        class ErpTimeSheet extends ErpDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpTimeSheet;
                if (null == bucket)
                   cim_data.ErpTimeSheet = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpTimeSheet[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpTimeSheet";

                var bucket = context.parsed.ErpTimeSheet;
                if (null == bucket)
                   context.parsed.ErpTimeSheet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpDocument.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Of an ErpPurchaseOrder, this is an individually ordered item or product along with the quantity, price and other descriptive information.
         *
         */
        class ErpPOLineItem extends ErpDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpPOLineItem;
                if (null == bucket)
                   cim_data.ErpPOLineItem = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpPOLineItem[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpPOLineItem";
                base.parse_attribute (/<cim:ErpPOLineItem.ErpRecDelLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpRecDelLineItem", sub, context);
                base.parse_attribute (/<cim:ErpPOLineItem.ErpReqLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpReqLineItem", sub, context);
                base.parse_attribute (/<cim:ErpPOLineItem.AssetModelCatalogueItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetModelCatalogueItem", sub, context);
                base.parse_attribute (/<cim:ErpPOLineItem.ErpPurchaseOrder\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpPurchaseOrder", sub, context);

                var bucket = context.parsed.ErpPOLineItem;
                if (null == bucket)
                   context.parsed.ErpPOLineItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpDocument.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ErpPOLineItem", "ErpRecDelLineItem", fields);
                base.export_attribute (obj, "ErpPOLineItem", "ErpReqLineItem", fields);
                base.export_attribute (obj, "ErpPOLineItem", "AssetModelCatalogueItem", fields);
                base.export_attribute (obj, "ErpPOLineItem", "ErpPurchaseOrder", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Transaction for an Organisation receiving goods or services that may be used to indicate receipt of goods in conjunction with a purchase order.
         *
         * A receivable is an open (unpaid) item in the Accounts Receivable ledger.
         *
         */
        class ErpReceiveDelivery extends ErpDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpReceiveDelivery;
                if (null == bucket)
                   cim_data.ErpReceiveDelivery = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpReceiveDelivery[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpReceiveDelivery";

                var bucket = context.parsed.ErpReceiveDelivery;
                if (null == bucket)
                   context.parsed.ErpReceiveDelivery = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpDocument.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Payment infromation and status for any individual line item of an ErpInvoice (e.g., when payment is from a customer).
         *
         * ErpPayable is also updated when payment is to a supplier and ErpReceivable is updated when payment is from a customer. Multiple payments can be made against a single line item and an individual payment can apply to more that one line item.
         *
         */
        class ErpPayment extends ErpDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpPayment;
                if (null == bucket)
                   cim_data.ErpPayment = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpPayment[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpPayment";
                base.parse_element (/<cim:ErpPayment.termsPayment>([\s\S]*?)<\/cim:ErpPayment.termsPayment>/g, obj, "termsPayment", base.to_string, sub, context);

                var bucket = context.parsed.ErpPayment;
                if (null == bucket)
                   context.parsed.ErpPayment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpDocument.prototype.export.call (this, obj, false);

                base.export_element (obj, "ErpPayment", "termsPayment", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Book for recording accounting transactions as they occur.
         *
         * Transactions and adjustments are first recorded in a journal, which is like a diary of instructions, advising which account to be charged and by how much.
         *
         */
        class ErpJournal extends ErpDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpJournal;
                if (null == bucket)
                   cim_data.ErpJournal = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpJournal[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpJournal";

                var bucket = context.parsed.ErpJournal;
                if (null == bucket)
                   context.parsed.ErpJournal = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpDocument.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A roll up of invoice line items.
         *
         * The whole invoice has a due date and amount to be paid, with information such as customer, banks etc. being obtained through associations. The invoice roll up is based on individual line items that each contain amounts and descriptions for specific services or products.
         *
         */
        class ErpInvoice extends ErpDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpInvoice;
                if (null == bucket)
                   cim_data.ErpInvoice = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpInvoice[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpInvoice";
                base.parse_element (/<cim:ErpInvoice.amount>([\s\S]*?)<\/cim:ErpInvoice.amount>/g, obj, "amount", base.to_string, sub, context);
                base.parse_element (/<cim:ErpInvoice.billMediaKind>([\s\S]*?)<\/cim:ErpInvoice.billMediaKind>/g, obj, "billMediaKind", base.to_string, sub, context);
                base.parse_element (/<cim:ErpInvoice.dueDate>([\s\S]*?)<\/cim:ErpInvoice.dueDate>/g, obj, "dueDate", base.to_string, sub, context);
                base.parse_element (/<cim:ErpInvoice.kind>([\s\S]*?)<\/cim:ErpInvoice.kind>/g, obj, "kind", base.to_string, sub, context);
                base.parse_element (/<cim:ErpInvoice.mailedDate>([\s\S]*?)<\/cim:ErpInvoice.mailedDate>/g, obj, "mailedDate", base.to_string, sub, context);
                base.parse_element (/<cim:ErpInvoice.proForma>([\s\S]*?)<\/cim:ErpInvoice.proForma>/g, obj, "proForma", base.to_boolean, sub, context);
                base.parse_element (/<cim:ErpInvoice.referenceNumber>([\s\S]*?)<\/cim:ErpInvoice.referenceNumber>/g, obj, "referenceNumber", base.to_string, sub, context);
                base.parse_element (/<cim:ErpInvoice.transactionDateTime>([\s\S]*?)<\/cim:ErpInvoice.transactionDateTime>/g, obj, "transactionDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:ErpInvoice.transferType>([\s\S]*?)<\/cim:ErpInvoice.transferType>/g, obj, "transferType", base.to_string, sub, context);
                base.parse_attribute (/<cim:ErpInvoice.CustomerAccount\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAccount", sub, context);

                var bucket = context.parsed.ErpInvoice;
                if (null == bucket)
                   context.parsed.ErpInvoice = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpDocument.prototype.export.call (this, obj, false);

                base.export_element (obj, "ErpInvoice", "amount", base.from_string, fields);
                base.export_element (obj, "ErpInvoice", "billMediaKind", base.from_string, fields);
                base.export_element (obj, "ErpInvoice", "dueDate", base.from_string, fields);
                base.export_element (obj, "ErpInvoice", "kind", base.from_string, fields);
                base.export_element (obj, "ErpInvoice", "mailedDate", base.from_string, fields);
                base.export_element (obj, "ErpInvoice", "proForma", base.from_boolean, fields);
                base.export_element (obj, "ErpInvoice", "referenceNumber", base.from_string, fields);
                base.export_element (obj, "ErpInvoice", "transactionDateTime", base.from_datetime, fields);
                base.export_element (obj, "ErpInvoice", "transferType", base.from_string, fields);
                base.export_attribute (obj, "ErpInvoice", "CustomerAccount", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A document that communicates an order to purchase goods from a buyer to a supplier.
         *
         * The PurchaseOrder carries information to and from the buyer and supplier. It is a legally binding document once both Parties agree to the contents and the specified terms and conditions of the order.
         *
         */
        class ErpPurchaseOrder extends ErpDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpPurchaseOrder;
                if (null == bucket)
                   cim_data.ErpPurchaseOrder = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpPurchaseOrder[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpPurchaseOrder";

                var bucket = context.parsed.ErpPurchaseOrder;
                if (null == bucket)
                   context.parsed.ErpPurchaseOrder = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpDocument.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * In accounting transactions, a ledger is a book containing accounts to which debits and credits are posted from journals, where transactions are initially recorded.
         *
         * Journal entries are periodically posted to the ledger. Ledger Actual represents actual amounts by account within ledger within company or business area. Actual amounts may be generated in a source application and then loaded to a specific ledger within the enterprise general ledger or budget application.
         *
         */
        class ErpLedger extends ErpDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpLedger;
                if (null == bucket)
                   cim_data.ErpLedger = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpLedger[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpLedger";

                var bucket = context.parsed.ErpLedger;
                if (null == bucket)
                   context.parsed.ErpLedger = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpDocument.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * General information that applies to a utility requisition that is a request for the purchase of goods or services.
         *
         * Typically, a requisition leads to the creation of a purchase order to a specific supplier.
         *
         */
        class ErpRequisition extends ErpDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpRequisition;
                if (null == bucket)
                   cim_data.ErpRequisition = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpRequisition[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpRequisition";

                var bucket = context.parsed.ErpRequisition;
                if (null == bucket)
                   context.parsed.ErpRequisition = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpDocument.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Information that generally describes the Bill of Material Structure and its contents for a utility.
         *
         * This is used by ERP systems to transfer Bill of Material information between two business applications.
         *
         */
        class ErpBOM extends ErpDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpBOM;
                if (null == bucket)
                   cim_data.ErpBOM = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpBOM[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpBOM";
                base.parse_attribute (/<cim:ErpBOM.Design\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Design", sub, context);

                var bucket = context.parsed.ErpBOM;
                if (null == bucket)
                   context.parsed.ErpBOM = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpDocument.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ErpBOM", "Design", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Utility Project Accounting information, used by ERP applications to enable all relevant sub-systems that submit single sided transactions to transfer information with a Project Accounting Application.
         *
         * This would include, but not necessarily be limited to: Accounts Payable, Accounts Receivable, Budget, Order Management, Purchasing, Time and Labor, Travel and Expense.
         *
         */
        class ErpProjectAccounting extends ErpDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpProjectAccounting;
                if (null == bucket)
                   cim_data.ErpProjectAccounting = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpProjectAccounting[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpProjectAccounting";

                var bucket = context.parsed.ErpProjectAccounting;
                if (null == bucket)
                   context.parsed.ErpProjectAccounting = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpDocument.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * An individual line item on an invoice.
         *
         */
        class ErpInvoiceLineItem extends ErpDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpInvoiceLineItem;
                if (null == bucket)
                   cim_data.ErpInvoiceLineItem = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpInvoiceLineItem[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpInvoiceLineItem";
                base.parse_element (/<cim:ErpInvoiceLineItem.billPeriod>([\s\S]*?)<\/cim:ErpInvoiceLineItem.billPeriod>/g, obj, "billPeriod", base.to_string, sub, context);
                base.parse_element (/<cim:ErpInvoiceLineItem.glAccount>([\s\S]*?)<\/cim:ErpInvoiceLineItem.glAccount>/g, obj, "glAccount", base.to_string, sub, context);
                base.parse_element (/<cim:ErpInvoiceLineItem.glDateTime>([\s\S]*?)<\/cim:ErpInvoiceLineItem.glDateTime>/g, obj, "glDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:ErpInvoiceLineItem.kind>([\s\S]*?)<\/cim:ErpInvoiceLineItem.kind>/g, obj, "kind", base.to_string, sub, context);
                base.parse_element (/<cim:ErpInvoiceLineItem.lineAmount>([\s\S]*?)<\/cim:ErpInvoiceLineItem.lineAmount>/g, obj, "lineAmount", base.to_float, sub, context);
                base.parse_element (/<cim:ErpInvoiceLineItem.lineNumber>([\s\S]*?)<\/cim:ErpInvoiceLineItem.lineNumber>/g, obj, "lineNumber", base.to_string, sub, context);
                base.parse_element (/<cim:ErpInvoiceLineItem.lineVersion>([\s\S]*?)<\/cim:ErpInvoiceLineItem.lineVersion>/g, obj, "lineVersion", base.to_string, sub, context);
                base.parse_element (/<cim:ErpInvoiceLineItem.netAmount>([\s\S]*?)<\/cim:ErpInvoiceLineItem.netAmount>/g, obj, "netAmount", base.to_float, sub, context);
                base.parse_element (/<cim:ErpInvoiceLineItem.previousAmount>([\s\S]*?)<\/cim:ErpInvoiceLineItem.previousAmount>/g, obj, "previousAmount", base.to_float, sub, context);
                base.parse_attribute (/<cim:ErpInvoiceLineItem.ContainerErpInvoiceLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ContainerErpInvoiceLineItem", sub, context);
                base.parse_attribute (/<cim:ErpInvoiceLineItem.ErpPayableLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpPayableLineItem", sub, context);
                base.parse_attribute (/<cim:ErpInvoiceLineItem.ErpInvoice\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpInvoice", sub, context);
                base.parse_attribute (/<cim:ErpInvoiceLineItem.ErpRecLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpRecLineItem", sub, context);
                base.parse_attribute (/<cim:ErpInvoiceLineItem.ErpRecDelvLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpRecDelvLineItem", sub, context);
                base.parse_attribute (/<cim:ErpInvoiceLineItem.ErpQuoteLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpQuoteLineItem", sub, context);

                var bucket = context.parsed.ErpInvoiceLineItem;
                if (null == bucket)
                   context.parsed.ErpInvoiceLineItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpDocument.prototype.export.call (this, obj, false);

                base.export_element (obj, "ErpInvoiceLineItem", "billPeriod", base.from_string, fields);
                base.export_element (obj, "ErpInvoiceLineItem", "glAccount", base.from_string, fields);
                base.export_element (obj, "ErpInvoiceLineItem", "glDateTime", base.from_datetime, fields);
                base.export_element (obj, "ErpInvoiceLineItem", "kind", base.from_string, fields);
                base.export_element (obj, "ErpInvoiceLineItem", "lineAmount", base.from_float, fields);
                base.export_element (obj, "ErpInvoiceLineItem", "lineNumber", base.from_string, fields);
                base.export_element (obj, "ErpInvoiceLineItem", "lineVersion", base.from_string, fields);
                base.export_element (obj, "ErpInvoiceLineItem", "netAmount", base.from_float, fields);
                base.export_element (obj, "ErpInvoiceLineItem", "previousAmount", base.from_float, fields);
                base.export_attribute (obj, "ErpInvoiceLineItem", "ContainerErpInvoiceLineItem", fields);
                base.export_attribute (obj, "ErpInvoiceLineItem", "ErpPayableLineItem", fields);
                base.export_attribute (obj, "ErpInvoiceLineItem", "ErpInvoice", fields);
                base.export_attribute (obj, "ErpInvoiceLineItem", "ErpRecLineItem", fields);
                base.export_attribute (obj, "ErpInvoiceLineItem", "ErpRecDelvLineItem", fields);
                base.export_attribute (obj, "ErpInvoiceLineItem", "ErpQuoteLineItem", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Accounting structure of a business.
         *
         * Each account represents a financial aspect of a business, such as its Accounts Payable, or the value of its inventory, or its office supply expenses.
         *
         */
        class ErpChartOfAccounts extends ErpDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpChartOfAccounts;
                if (null == bucket)
                   cim_data.ErpChartOfAccounts = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpChartOfAccounts[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpChartOfAccounts";

                var bucket = context.parsed.ErpChartOfAccounts;
                if (null == bucket)
                   context.parsed.ErpChartOfAccounts = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpDocument.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Transaction representing an invoice, credit memo or debit memo to a customer.
         *
         * It is an open (unpaid) item in the Accounts Receivable ledger.
         *
         */
        class ErpReceivable extends ErpDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpReceivable;
                if (null == bucket)
                   cim_data.ErpReceivable = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpReceivable[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpReceivable";

                var bucket = context.parsed.ErpReceivable;
                if (null == bucket)
                   context.parsed.ErpReceivable = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpDocument.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * General Utility Engineering Change Order information.
         *
         */
        class ErpEngChangeOrder extends ErpDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpEngChangeOrder;
                if (null == bucket)
                   cim_data.ErpEngChangeOrder = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpEngChangeOrder[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpEngChangeOrder";

                var bucket = context.parsed.ErpEngChangeOrder;
                if (null == bucket)
                   context.parsed.ErpEngChangeOrder = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpDocument.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A transaction that represents an invoice from a supplier.
         *
         * A payable (or voucher) is an open item, approved and ready for payment, in the Accounts Payable ledger.
         *
         */
        class ErpPayable extends ErpDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpPayable;
                if (null == bucket)
                   cim_data.ErpPayable = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpPayable[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpPayable";

                var bucket = context.parsed.ErpPayable;
                if (null == bucket)
                   context.parsed.ErpPayable = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpDocument.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Information for utility Ledger Budgets.
         *
         * They support the transfer budget amounts between all possible source applications throughout an enterprise and a general ledger or budget application.
         *
         */
        class ErpLedgerBudget extends ErpDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpLedgerBudget;
                if (null == bucket)
                   cim_data.ErpLedgerBudget = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpLedgerBudget[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpLedgerBudget";

                var bucket = context.parsed.ErpLedgerBudget;
                if (null == bucket)
                   context.parsed.ErpLedgerBudget = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpDocument.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Document describing the prices of goods or services provided by a supplier.
         *
         * It includes the terms of the purchase, delivery proposals, identification of goods or services ordered, as well as their quantities.
         *
         */
        class ErpQuote extends ErpDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpQuote;
                if (null == bucket)
                   cim_data.ErpQuote = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpQuote[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpQuote";

                var bucket = context.parsed.ErpQuote;
                if (null == bucket)
                   context.parsed.ErpQuote = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpDocument.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Individual entry of a given Ledger Budget, typically containing information such as amount, accounting date, accounting period, and is associated with the applicable general ledger account.
         *
         */
        class ErpLedBudLineItem extends ErpIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpLedBudLineItem;
                if (null == bucket)
                   cim_data.ErpLedBudLineItem = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpLedBudLineItem[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpLedBudLineItem";
                base.parse_element (/<cim:ErpLedBudLineItem.status>([\s\S]*?)<\/cim:ErpLedBudLineItem.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attribute (/<cim:ErpLedBudLineItem.ErpLedgerBudget\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpLedgerBudget", sub, context);
                base.parse_attribute (/<cim:ErpLedBudLineItem.ErpLedBudLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpLedBudLineItem", sub, context);

                var bucket = context.parsed.ErpLedBudLineItem;
                if (null == bucket)
                   context.parsed.ErpLedBudLineItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ErpLedBudLineItem", "status", base.from_string, fields);
                base.export_attribute (obj, "ErpLedBudLineItem", "ErpLedgerBudget", fields);
                base.export_attribute (obj, "ErpLedBudLineItem", "ErpLedBudLineItem", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * This is related to Inventory physical counts organized by AssetModel.
         *
         * Note that a count of a type of asset can be accomplished by the association inherited by AssetModel (from Document) to Asset.
         *
         */
        class ErpInventoryCount extends ErpIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpInventoryCount;
                if (null == bucket)
                   cim_data.ErpInventoryCount = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpInventoryCount[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpInventoryCount";
                base.parse_element (/<cim:ErpInventoryCount.status>([\s\S]*?)<\/cim:ErpInventoryCount.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attribute (/<cim:ErpInventoryCount.AssetModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetModel", sub, context);

                var bucket = context.parsed.ErpInventoryCount;
                if (null == bucket)
                   context.parsed.ErpInventoryCount = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ErpInventoryCount", "status", base.from_string, fields);
                base.export_attribute (obj, "ErpInventoryCount", "AssetModel", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * An individual entry on an ErpTimeSheet.
         *
         */
        class ErpTimeEntry extends ErpIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpTimeEntry;
                if (null == bucket)
                   cim_data.ErpTimeEntry = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpTimeEntry[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpTimeEntry";
                base.parse_element (/<cim:ErpTimeEntry.status>([\s\S]*?)<\/cim:ErpTimeEntry.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attribute (/<cim:ErpTimeEntry.ErpTimeSheet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpTimeSheet", sub, context);
                base.parse_attribute (/<cim:ErpTimeEntry.ErpProjectAccounting\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpProjectAccounting", sub, context);

                var bucket = context.parsed.ErpTimeEntry;
                if (null == bucket)
                   context.parsed.ErpTimeEntry = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ErpTimeEntry", "status", base.from_string, fields);
                base.export_attribute (obj, "ErpTimeEntry", "ErpTimeSheet", fields);
                base.export_attribute (obj, "ErpTimeEntry", "ErpProjectAccounting", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Of an ErpQuote, the item or product quoted along with quantity, price and other descriptive information.
         *
         */
        class ErpQuoteLineItem extends ErpIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpQuoteLineItem;
                if (null == bucket)
                   cim_data.ErpQuoteLineItem = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpQuoteLineItem[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpQuoteLineItem";
                base.parse_element (/<cim:ErpQuoteLineItem.status>([\s\S]*?)<\/cim:ErpQuoteLineItem.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attribute (/<cim:ErpQuoteLineItem.Design\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Design", sub, context);
                base.parse_attribute (/<cim:ErpQuoteLineItem.ErpQuote\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpQuote", sub, context);
                base.parse_attribute (/<cim:ErpQuoteLineItem.ErpInvoiceLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpInvoiceLineItem", sub, context);
                base.parse_attribute (/<cim:ErpQuoteLineItem.ErpReqLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpReqLineItem", sub, context);
                base.parse_attribute (/<cim:ErpQuoteLineItem.AssetModelCatalogueItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetModelCatalogueItem", sub, context);

                var bucket = context.parsed.ErpQuoteLineItem;
                if (null == bucket)
                   context.parsed.ErpQuoteLineItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ErpQuoteLineItem", "status", base.from_string, fields);
                base.export_attribute (obj, "ErpQuoteLineItem", "Design", fields);
                base.export_attribute (obj, "ErpQuoteLineItem", "ErpQuote", fields);
                base.export_attribute (obj, "ErpQuoteLineItem", "ErpInvoiceLineItem", fields);
                base.export_attribute (obj, "ErpQuoteLineItem", "ErpReqLineItem", fields);
                base.export_attribute (obj, "ErpQuoteLineItem", "AssetModelCatalogueItem", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Details of an individual entry in a ledger, which was posted from a journal on the posted date.
         *
         */
        class ErpLedgerEntry extends ErpIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpLedgerEntry;
                if (null == bucket)
                   cim_data.ErpLedgerEntry = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpLedgerEntry[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpLedgerEntry";
                base.parse_element (/<cim:ErpLedgerEntry.accountID>([\s\S]*?)<\/cim:ErpLedgerEntry.accountID>/g, obj, "accountID", base.to_string, sub, context);
                base.parse_element (/<cim:ErpLedgerEntry.accountKind>([\s\S]*?)<\/cim:ErpLedgerEntry.accountKind>/g, obj, "accountKind", base.to_string, sub, context);
                base.parse_element (/<cim:ErpLedgerEntry.amount>([\s\S]*?)<\/cim:ErpLedgerEntry.amount>/g, obj, "amount", base.to_string, sub, context);
                base.parse_element (/<cim:ErpLedgerEntry.postedDateTime>([\s\S]*?)<\/cim:ErpLedgerEntry.postedDateTime>/g, obj, "postedDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:ErpLedgerEntry.status>([\s\S]*?)<\/cim:ErpLedgerEntry.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:ErpLedgerEntry.transactionDateTime>([\s\S]*?)<\/cim:ErpLedgerEntry.transactionDateTime>/g, obj, "transactionDateTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:ErpLedgerEntry.ErpJounalEntry\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpJounalEntry", sub, context);
                base.parse_attribute (/<cim:ErpLedgerEntry.ErpLedgerEntry\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpLedgerEntry", sub, context);
                base.parse_attribute (/<cim:ErpLedgerEntry.ErpLedger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpLedger", sub, context);

                var bucket = context.parsed.ErpLedgerEntry;
                if (null == bucket)
                   context.parsed.ErpLedgerEntry = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ErpLedgerEntry", "accountID", base.from_string, fields);
                base.export_element (obj, "ErpLedgerEntry", "accountKind", base.from_string, fields);
                base.export_element (obj, "ErpLedgerEntry", "amount", base.from_string, fields);
                base.export_element (obj, "ErpLedgerEntry", "postedDateTime", base.from_datetime, fields);
                base.export_element (obj, "ErpLedgerEntry", "status", base.from_string, fields);
                base.export_element (obj, "ErpLedgerEntry", "transactionDateTime", base.from_datetime, fields);
                base.export_attribute (obj, "ErpLedgerEntry", "ErpJounalEntry", fields);
                base.export_attribute (obj, "ErpLedgerEntry", "ErpLedgerEntry", fields);
                base.export_attribute (obj, "ErpLedgerEntry", "ErpLedger", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Any unique purchased part for manufactured product tracked by ERP systems for a utility.
         *
         * Item, as used by the OAG, refers to the basic information about an item, including its attributes, cost, and locations. It does not include item quantities. Compare to the Inventory, which includes all quantities and other location-specific information.
         *
         */
        class ErpItemMaster extends ErpIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpItemMaster;
                if (null == bucket)
                   cim_data.ErpItemMaster = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpItemMaster[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpItemMaster";
                base.parse_element (/<cim:ErpItemMaster.status>([\s\S]*?)<\/cim:ErpItemMaster.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attribute (/<cim:ErpItemMaster.Asset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context);

                var bucket = context.parsed.ErpItemMaster;
                if (null == bucket)
                   context.parsed.ErpItemMaster = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ErpItemMaster", "status", base.from_string, fields);
                base.export_attribute (obj, "ErpItemMaster", "Asset", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Of an ErpPayable, a line item references an ErpInvoiceLineitem or other source such as credit memos.
         *
         */
        class ErpPayableLineItem extends ErpIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpPayableLineItem;
                if (null == bucket)
                   cim_data.ErpPayableLineItem = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpPayableLineItem[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpPayableLineItem";
                base.parse_element (/<cim:ErpPayableLineItem.status>([\s\S]*?)<\/cim:ErpPayableLineItem.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attribute (/<cim:ErpPayableLineItem.ErpPayable\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpPayable", sub, context);
                base.parse_attribute (/<cim:ErpPayableLineItem.ErpInvoiceLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpInvoiceLineItem", sub, context);

                var bucket = context.parsed.ErpPayableLineItem;
                if (null == bucket)
                   context.parsed.ErpPayableLineItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ErpPayableLineItem", "status", base.from_string, fields);
                base.export_attribute (obj, "ErpPayableLineItem", "ErpPayable", fields);
                base.export_attribute (obj, "ErpPayableLineItem", "ErpInvoiceLineItem", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Individual entry of an ErpReceivable, it is a particular transaction representing an invoice, credit memo or debit memo to a customer.
         *
         */
        class ErpRecLineItem extends ErpIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpRecLineItem;
                if (null == bucket)
                   cim_data.ErpRecLineItem = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpRecLineItem[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpRecLineItem";
                base.parse_element (/<cim:ErpRecLineItem.status>([\s\S]*?)<\/cim:ErpRecLineItem.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attribute (/<cim:ErpRecLineItem.ErpInvoiceLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpInvoiceLineItem", sub, context);
                base.parse_attribute (/<cim:ErpRecLineItem.ErpReceivable\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpReceivable", sub, context);

                var bucket = context.parsed.ErpRecLineItem;
                if (null == bucket)
                   context.parsed.ErpRecLineItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ErpRecLineItem", "status", base.from_string, fields);
                base.export_attribute (obj, "ErpRecLineItem", "ErpInvoiceLineItem", fields);
                base.export_attribute (obj, "ErpRecLineItem", "ErpReceivable", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Can be used to request an application to process an issue or request information about an issue.
         *
         */
        class ErpIssueInventory extends ErpIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpIssueInventory;
                if (null == bucket)
                   cim_data.ErpIssueInventory = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpIssueInventory[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpIssueInventory";
                base.parse_element (/<cim:ErpIssueInventory.status>([\s\S]*?)<\/cim:ErpIssueInventory.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attribute (/<cim:ErpIssueInventory.TypeMaterial\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TypeMaterial", sub, context);
                base.parse_attribute (/<cim:ErpIssueInventory.TypeAsset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TypeAsset", sub, context);

                var bucket = context.parsed.ErpIssueInventory;
                if (null == bucket)
                   context.parsed.ErpIssueInventory = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ErpIssueInventory", "status", base.from_string, fields);
                base.export_attribute (obj, "ErpIssueInventory", "TypeMaterial", fields);
                base.export_attribute (obj, "ErpIssueInventory", "TypeAsset", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Utility inventory-related information about an item or part (and not for description of the item and its attributes).
         *
         * It is used by ERP applications to enable the synchronization of Inventory data that exists on separate Item Master databases. This data is not the master data that describes the attributes of the item such as dimensions, weight, or unit of measure - it describes the item as it exists at a specific location.
         *
         */
        class ErpInventory extends ErpIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpInventory;
                if (null == bucket)
                   cim_data.ErpInventory = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpInventory[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpInventory";
                base.parse_element (/<cim:ErpInventory.status>([\s\S]*?)<\/cim:ErpInventory.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attribute (/<cim:ErpInventory.Asset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context);

                var bucket = context.parsed.ErpInventory;
                if (null == bucket)
                   context.parsed.ErpInventory = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ErpInventory", "status", base.from_string, fields);
                base.export_attribute (obj, "ErpInventory", "Asset", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Information that describes a requested item and its attributes.
         *
         */
        class ErpReqLineItem extends ErpIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpReqLineItem;
                if (null == bucket)
                   cim_data.ErpReqLineItem = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpReqLineItem[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpReqLineItem";
                base.parse_element (/<cim:ErpReqLineItem.code>([\s\S]*?)<\/cim:ErpReqLineItem.code>/g, obj, "code", base.to_string, sub, context);
                base.parse_element (/<cim:ErpReqLineItem.cost>([\s\S]*?)<\/cim:ErpReqLineItem.cost>/g, obj, "cost", base.to_string, sub, context);
                base.parse_element (/<cim:ErpReqLineItem.deliveryDate>([\s\S]*?)<\/cim:ErpReqLineItem.deliveryDate>/g, obj, "deliveryDate", base.to_string, sub, context);
                base.parse_element (/<cim:ErpReqLineItem.quantity>([\s\S]*?)<\/cim:ErpReqLineItem.quantity>/g, obj, "quantity", base.to_string, sub, context);
                base.parse_element (/<cim:ErpReqLineItem.status>([\s\S]*?)<\/cim:ErpReqLineItem.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attribute (/<cim:ErpReqLineItem.ErpPOLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpPOLineItem", sub, context);
                base.parse_attribute (/<cim:ErpReqLineItem.TypeMaterial\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TypeMaterial", sub, context);
                base.parse_attribute (/<cim:ErpReqLineItem.ErpRequisition\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpRequisition", sub, context);
                base.parse_attribute (/<cim:ErpReqLineItem.TypeAsset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TypeAsset", sub, context);
                base.parse_attribute (/<cim:ErpReqLineItem.ErpQuoteLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpQuoteLineItem", sub, context);

                var bucket = context.parsed.ErpReqLineItem;
                if (null == bucket)
                   context.parsed.ErpReqLineItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ErpReqLineItem", "code", base.from_string, fields);
                base.export_element (obj, "ErpReqLineItem", "cost", base.from_string, fields);
                base.export_element (obj, "ErpReqLineItem", "deliveryDate", base.from_string, fields);
                base.export_element (obj, "ErpReqLineItem", "quantity", base.from_string, fields);
                base.export_element (obj, "ErpReqLineItem", "status", base.from_string, fields);
                base.export_attribute (obj, "ErpReqLineItem", "ErpPOLineItem", fields);
                base.export_attribute (obj, "ErpReqLineItem", "TypeMaterial", fields);
                base.export_attribute (obj, "ErpReqLineItem", "ErpRequisition", fields);
                base.export_attribute (obj, "ErpReqLineItem", "TypeAsset", fields);
                base.export_attribute (obj, "ErpReqLineItem", "ErpQuoteLineItem", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Information that applies to the basic data about a utility person, used by ERP applications to transfer Personnel data for a worker.
         *
         */
        class ErpPersonnel extends ErpIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpPersonnel;
                if (null == bucket)
                   cim_data.ErpPersonnel = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpPersonnel[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpPersonnel";
                base.parse_element (/<cim:ErpPersonnel.status>([\s\S]*?)<\/cim:ErpPersonnel.status>/g, obj, "status", base.to_string, sub, context);

                var bucket = context.parsed.ErpPersonnel;
                if (null == bucket)
                   context.parsed.ErpPersonnel = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ErpPersonnel", "status", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Details of an individual entry in a journal, which is to be posted to a ledger on the posting date.
         *
         */
        class ErpJournalEntry extends ErpIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpJournalEntry;
                if (null == bucket)
                   cim_data.ErpJournalEntry = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpJournalEntry[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpJournalEntry";
                base.parse_element (/<cim:ErpJournalEntry.accountID>([\s\S]*?)<\/cim:ErpJournalEntry.accountID>/g, obj, "accountID", base.to_string, sub, context);
                base.parse_element (/<cim:ErpJournalEntry.amount>([\s\S]*?)<\/cim:ErpJournalEntry.amount>/g, obj, "amount", base.to_string, sub, context);
                base.parse_element (/<cim:ErpJournalEntry.postingDateTime>([\s\S]*?)<\/cim:ErpJournalEntry.postingDateTime>/g, obj, "postingDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:ErpJournalEntry.sourceID>([\s\S]*?)<\/cim:ErpJournalEntry.sourceID>/g, obj, "sourceID", base.to_string, sub, context);
                base.parse_element (/<cim:ErpJournalEntry.status>([\s\S]*?)<\/cim:ErpJournalEntry.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:ErpJournalEntry.transactionDateTime>([\s\S]*?)<\/cim:ErpJournalEntry.transactionDateTime>/g, obj, "transactionDateTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:ErpJournalEntry.ErpLedgerEntry\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpLedgerEntry", sub, context);
                base.parse_attribute (/<cim:ErpJournalEntry.ErpJournal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpJournal", sub, context);
                base.parse_attribute (/<cim:ErpJournalEntry.ErpInvoiceLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpInvoiceLineItem", sub, context);

                var bucket = context.parsed.ErpJournalEntry;
                if (null == bucket)
                   context.parsed.ErpJournalEntry = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ErpJournalEntry", "accountID", base.from_string, fields);
                base.export_element (obj, "ErpJournalEntry", "amount", base.from_string, fields);
                base.export_element (obj, "ErpJournalEntry", "postingDateTime", base.from_datetime, fields);
                base.export_element (obj, "ErpJournalEntry", "sourceID", base.from_string, fields);
                base.export_element (obj, "ErpJournalEntry", "status", base.from_string, fields);
                base.export_element (obj, "ErpJournalEntry", "transactionDateTime", base.from_datetime, fields);
                base.export_attribute (obj, "ErpJournalEntry", "ErpLedgerEntry", fields);
                base.export_attribute (obj, "ErpJournalEntry", "ErpJournal", fields);
                base.export_attribute (obj, "ErpJournalEntry", "ErpInvoiceLineItem", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * An individual item on a bill of materials.
         *
         */
        class ErpBomItemData extends ErpIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpBomItemData;
                if (null == bucket)
                   cim_data.ErpBomItemData = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpBomItemData[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpBomItemData";
                base.parse_attribute (/<cim:ErpBomItemData.TypeAsset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TypeAsset", sub, context);
                base.parse_attribute (/<cim:ErpBomItemData.DesignLocation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DesignLocation", sub, context);
                base.parse_attribute (/<cim:ErpBomItemData.ErpBOM\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpBOM", sub, context);

                var bucket = context.parsed.ErpBomItemData;
                if (null == bucket)
                   context.parsed.ErpBomItemData = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ErpBomItemData", "TypeAsset", fields);
                base.export_attribute (obj, "ErpBomItemData", "DesignLocation", fields);
                base.export_attribute (obj, "ErpBomItemData", "ErpBOM", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * For a utility, general information that describes physical locations of organizations or the location codes and their meanings.
         *
         * This enables ERP applications to ensure that the physical location identifiers are synchronized between the business applications.
         *
         */
        class ErpSiteLevelData extends ErpIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpSiteLevelData;
                if (null == bucket)
                   cim_data.ErpSiteLevelData = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpSiteLevelData[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpSiteLevelData";
                base.parse_element (/<cim:ErpSiteLevelData.status>([\s\S]*?)<\/cim:ErpSiteLevelData.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attribute (/<cim:ErpSiteLevelData.LandProperty\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LandProperty", sub, context);

                var bucket = context.parsed.ErpSiteLevelData;
                if (null == bucket)
                   context.parsed.ErpSiteLevelData = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ErpSiteLevelData", "status", base.from_string, fields);
                base.export_attribute (obj, "ErpSiteLevelData", "LandProperty", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Of an ErpReceiveDelivery, this is an individually received good or service by the Organisation receiving goods or services.
         *
         * It may be used to indicate receipt of goods in conjunction with a purchase order line item.
         *
         */
        class ErpRecDelvLineItem extends ErpIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpRecDelvLineItem;
                if (null == bucket)
                   cim_data.ErpRecDelvLineItem = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpRecDelvLineItem[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpRecDelvLineItem";
                base.parse_element (/<cim:ErpRecDelvLineItem.status>([\s\S]*?)<\/cim:ErpRecDelvLineItem.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attribute (/<cim:ErpRecDelvLineItem.ErpPOLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpPOLineItem", sub, context);
                base.parse_attribute (/<cim:ErpRecDelvLineItem.ErpInvoiceLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpInvoiceLineItem", sub, context);
                base.parse_attribute (/<cim:ErpRecDelvLineItem.ErpReceiveDelivery\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpReceiveDelivery", sub, context);

                var bucket = context.parsed.ErpRecDelvLineItem;
                if (null == bucket)
                   context.parsed.ErpRecDelvLineItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ErpRecDelvLineItem", "status", base.from_string, fields);
                base.export_attribute (obj, "ErpRecDelvLineItem", "ErpPOLineItem", fields);
                base.export_attribute (obj, "ErpRecDelvLineItem", "ErpInvoiceLineItem", fields);
                base.export_attribute (obj, "ErpRecDelvLineItem", "ErpReceiveDelivery", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Information that describes aptitudes of a utility employee.
         *
         * Unlike Skills that an ErpPerson must be certified to perform before undertaking certain type of assignments (to be able to perfrom a Craft), ErpCompetency has more to do with typical Human Resource (HR) matters such as schooling, training, etc.
         *
         */
        class ErpCompetency extends ErpIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ErpCompetency;
                if (null == bucket)
                   cim_data.ErpCompetency = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ErpCompetency[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpCompetency";

                var bucket = context.parsed.ErpCompetency;
                if (null == bucket)
                   context.parsed.ErpCompetency = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                ErpRecLineItem: ErpRecLineItem,
                ErpPOLineItem: ErpPOLineItem,
                ErpPayable: ErpPayable,
                ErpBOM: ErpBOM,
                ErpBankAccount: ErpBankAccount,
                ErpAccountKind: ErpAccountKind,
                ErpSiteLevelData: ErpSiteLevelData,
                ErpQuote: ErpQuote,
                ErpPurchaseOrder: ErpPurchaseOrder,
                ErpTimeEntry: ErpTimeEntry,
                ErpJournal: ErpJournal,
                ErpProjectAccounting: ErpProjectAccounting,
                ErpRecDelvLineItem: ErpRecDelvLineItem,
                ErpEngChangeOrder: ErpEngChangeOrder,
                ErpReceiveDelivery: ErpReceiveDelivery,
                ErpQuoteLineItem: ErpQuoteLineItem,
                ErpPersonnel: ErpPersonnel,
                ErpRequisition: ErpRequisition,
                ErpPayableLineItem: ErpPayableLineItem,
                ErpIdentifiedObject: ErpIdentifiedObject,
                ErpBomItemData: ErpBomItemData,
                BillMediaKind: BillMediaKind,
                ErpReqLineItem: ErpReqLineItem,
                ErpItemMaster: ErpItemMaster,
                ErpSalesOrder: ErpSalesOrder,
                ErpInvoiceKind: ErpInvoiceKind,
                ErpIssueInventory: ErpIssueInventory,
                ErpDocument: ErpDocument,
                ErpLedger: ErpLedger,
                ErpLedgerEntry: ErpLedgerEntry,
                ErpInvoice: ErpInvoice,
                ErpInventory: ErpInventory,
                ErpCompetency: ErpCompetency,
                ErpInvoiceLineItemKind: ErpInvoiceLineItemKind,
                ErpPayment: ErpPayment,
                ErpInvoiceLineItem: ErpInvoiceLineItem,
                ErpLedBudLineItem: ErpLedBudLineItem,
                ErpTimeSheet: ErpTimeSheet,
                ErpChartOfAccounts: ErpChartOfAccounts,
                ErpReceivable: ErpReceivable,
                ErpInventoryCount: ErpInventoryCount,
                ErpJournalEntry: ErpJournalEntry,
                ErpLedgerBudget: ErpLedgerBudget
            }
        );
    }
);