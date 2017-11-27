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
        class MktConnectivityNode extends Core.ConnectivityNode
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktConnectivityNode;
                if (null == bucket)
                   cim_data.MktConnectivityNode = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktConnectivityNode[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.ConnectivityNode.prototype.parse.call (this, context, sub);
                obj.cls = "MktConnectivityNode";
                base.parse_element (/<cim:MktConnectivityNode.endEffectiveDate>([\s\S]*?)<\/cim:MktConnectivityNode.endEffectiveDate>/g, obj, "endEffectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:MktConnectivityNode.startEffectiveDate>([\s\S]*?)<\/cim:MktConnectivityNode.startEffectiveDate>/g, obj, "startEffectiveDate", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:MktConnectivityNode.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);
                base.parse_attribute (/<cim:MktConnectivityNode.IndividualPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "IndividualPnode", sub, context);
                base.parse_attribute (/<cim:MktConnectivityNode.SysLoadDistribuFactor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SysLoadDistribuFactor", sub, context);

                var bucket = context.parsed.MktConnectivityNode;
                if (null == bucket)
                   context.parsed.MktConnectivityNode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["ConnectivityNode"](obj, exporters, false);

                base.export_element (obj, "MktConnectivityNode", "endEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "MktConnectivityNode", "startEffectiveDate", base.from_datetime, fields);
                base.export_attribute (obj, "MktConnectivityNode", "RTO", fields);
                base.export_attribute (obj, "MktConnectivityNode", "IndividualPnode", fields);
                base.export_attribute (obj, "MktConnectivityNode", "SysLoadDistribuFactor", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Subclass of IEC61968:Domain2:UserAttribute
         *
         */
        class MktUserAttribute extends Common.UserAttribute
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktUserAttribute;
                if (null == bucket)
                   cim_data.MktUserAttribute = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktUserAttribute[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.UserAttribute.prototype.parse.call (this, context, sub);
                obj.cls = "MktUserAttribute";

                var bucket = context.parsed.MktUserAttribute;
                if (null == bucket)
                   context.parsed.MktUserAttribute = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["UserAttribute"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Subclass of IEC61970:Production:GeneratingUnit
         *
         */
        class MktGeneratingUnit extends Production.GeneratingUnit
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktGeneratingUnit;
                if (null == bucket)
                   cim_data.MktGeneratingUnit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktGeneratingUnit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Production.GeneratingUnit.prototype.parse.call (this, context, sub);
                obj.cls = "MktGeneratingUnit";
                base.parse_attribute (/<cim:MktGeneratingUnit.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);

                var bucket = context.parsed.MktGeneratingUnit;
                if (null == bucket)
                   context.parsed.MktGeneratingUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["GeneratingUnit"](obj, exporters, false);

                base.export_attribute (obj, "MktGeneratingUnit", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Subclass of IEC61968: Common:ActivityRecord
         *
         */
        class MktActivityRecord extends Common.ActivityRecord
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktActivityRecord;
                if (null == bucket)
                   cim_data.MktActivityRecord = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktActivityRecord[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.ActivityRecord.prototype.parse.call (this, context, sub);
                obj.cls = "MktActivityRecord";

                var bucket = context.parsed.MktActivityRecord;
                if (null == bucket)
                   context.parsed.MktActivityRecord = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["ActivityRecord"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Subclass of IEC61970:LoadModel: LoadArea
         *
         */
        class MktLoadArea extends LoadModel.LoadArea
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktLoadArea;
                if (null == bucket)
                   cim_data.MktLoadArea = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktLoadArea[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = LoadModel.LoadArea.prototype.parse.call (this, context, sub);
                obj.cls = "MktLoadArea";

                var bucket = context.parsed.MktLoadArea;
                if (null == bucket)
                   context.parsed.MktLoadArea = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["LoadArea"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Subclass for IEC61970:Wires:Line
         *
         */
        class MktLine extends Wires.Line
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktLine;
                if (null == bucket)
                   cim_data.MktLine = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktLine[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Wires.Line.prototype.parse.call (this, context, sub);
                obj.cls = "MktLine";
                base.parse_attribute (/<cim:MktLine.TransmissionRightOfWay\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionRightOfWay", sub, context);

                var bucket = context.parsed.MktLine;
                if (null == bucket)
                   context.parsed.MktLine = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Line"](obj, exporters, false);

                base.export_attribute (obj, "MktLine", "TransmissionRightOfWay", fields);
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
        class MarketLedger extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MarketLedger;
                if (null == bucket)
                   cim_data.MarketLedger = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketLedger[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MarketLedger";

                var bucket = context.parsed.MarketLedger;
                if (null == bucket)
                   context.parsed.MarketLedger = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Subclass of IEC61970:Wires:PowerTransformer
         *
         */
        class MktPowerTransformer extends Wires.PowerTransformer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktPowerTransformer;
                if (null == bucket)
                   cim_data.MktPowerTransformer = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktPowerTransformer[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Wires.PowerTransformer.prototype.parse.call (this, context, sub);
                obj.cls = "MktPowerTransformer";
                base.parse_attribute (/<cim:MktPowerTransformer.EndBFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndBFlow", sub, context);
                base.parse_attribute (/<cim:MktPowerTransformer.EndAFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndAFlow", sub, context);

                var bucket = context.parsed.MktPowerTransformer;
                if (null == bucket)
                   context.parsed.MktPowerTransformer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["PowerTransformer"](obj, exporters, false);

                base.export_attribute (obj, "MktPowerTransformer", "EndBFlow", fields);
                base.export_attribute (obj, "MktPowerTransformer", "EndAFlow", fields);
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
        class MarketInvoice extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MarketInvoice;
                if (null == bucket)
                   cim_data.MarketInvoice = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketInvoice[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MarketInvoice";
                base.parse_element (/<cim:MarketInvoice.amount>([\s\S]*?)<\/cim:MarketInvoice.amount>/g, obj, "amount", base.to_string, sub, context);
                base.parse_element (/<cim:MarketInvoice.billMediaKind>([\s\S]*?)<\/cim:MarketInvoice.billMediaKind>/g, obj, "billMediaKind", base.to_string, sub, context);
                base.parse_element (/<cim:MarketInvoice.dueDate>([\s\S]*?)<\/cim:MarketInvoice.dueDate>/g, obj, "dueDate", base.to_string, sub, context);
                base.parse_element (/<cim:MarketInvoice.kind>([\s\S]*?)<\/cim:MarketInvoice.kind>/g, obj, "kind", base.to_string, sub, context);
                base.parse_element (/<cim:MarketInvoice.mailedDate>([\s\S]*?)<\/cim:MarketInvoice.mailedDate>/g, obj, "mailedDate", base.to_string, sub, context);
                base.parse_element (/<cim:MarketInvoice.proForma>([\s\S]*?)<\/cim:MarketInvoice.proForma>/g, obj, "proForma", base.to_boolean, sub, context);
                base.parse_element (/<cim:MarketInvoice.referenceNumber>([\s\S]*?)<\/cim:MarketInvoice.referenceNumber>/g, obj, "referenceNumber", base.to_string, sub, context);
                base.parse_element (/<cim:MarketInvoice.transactionDateTime>([\s\S]*?)<\/cim:MarketInvoice.transactionDateTime>/g, obj, "transactionDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:MarketInvoice.transferType>([\s\S]*?)<\/cim:MarketInvoice.transferType>/g, obj, "transferType", base.to_string, sub, context);

                var bucket = context.parsed.MarketInvoice;
                if (null == bucket)
                   context.parsed.MarketInvoice = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "MarketInvoice", "amount", base.from_string, fields);
                base.export_element (obj, "MarketInvoice", "billMediaKind", base.from_string, fields);
                base.export_element (obj, "MarketInvoice", "dueDate", base.from_string, fields);
                base.export_element (obj, "MarketInvoice", "kind", base.from_string, fields);
                base.export_element (obj, "MarketInvoice", "mailedDate", base.from_string, fields);
                base.export_element (obj, "MarketInvoice", "proForma", base.from_boolean, fields);
                base.export_element (obj, "MarketInvoice", "referenceNumber", base.from_string, fields);
                base.export_element (obj, "MarketInvoice", "transactionDateTime", base.from_datetime, fields);
                base.export_element (obj, "MarketInvoice", "transferType", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Details of an individual entry in a ledger, which was posted from a journal on the posted date.
         *
         */
        class MarketLedgerEntry extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MarketLedgerEntry;
                if (null == bucket)
                   cim_data.MarketLedgerEntry = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketLedgerEntry[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MarketLedgerEntry";
                base.parse_element (/<cim:MarketLedgerEntry.accountID>([\s\S]*?)<\/cim:MarketLedgerEntry.accountID>/g, obj, "accountID", base.to_string, sub, context);
                base.parse_element (/<cim:MarketLedgerEntry.accountKind>([\s\S]*?)<\/cim:MarketLedgerEntry.accountKind>/g, obj, "accountKind", base.to_string, sub, context);
                base.parse_element (/<cim:MarketLedgerEntry.amount>([\s\S]*?)<\/cim:MarketLedgerEntry.amount>/g, obj, "amount", base.to_string, sub, context);
                base.parse_element (/<cim:MarketLedgerEntry.postedDateTime>([\s\S]*?)<\/cim:MarketLedgerEntry.postedDateTime>/g, obj, "postedDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:MarketLedgerEntry.status>([\s\S]*?)<\/cim:MarketLedgerEntry.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:MarketLedgerEntry.transactionDateTime>([\s\S]*?)<\/cim:MarketLedgerEntry.transactionDateTime>/g, obj, "transactionDateTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:MarketLedgerEntry.MarketLedger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketLedger", sub, context);

                var bucket = context.parsed.MarketLedgerEntry;
                if (null == bucket)
                   context.parsed.MarketLedgerEntry = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "MarketLedgerEntry", "accountID", base.from_string, fields);
                base.export_element (obj, "MarketLedgerEntry", "accountKind", base.from_string, fields);
                base.export_element (obj, "MarketLedgerEntry", "amount", base.from_string, fields);
                base.export_element (obj, "MarketLedgerEntry", "postedDateTime", base.from_datetime, fields);
                base.export_element (obj, "MarketLedgerEntry", "status", base.from_string, fields);
                base.export_element (obj, "MarketLedgerEntry", "transactionDateTime", base.from_datetime, fields);
                base.export_attribute (obj, "MarketLedgerEntry", "MarketLedger", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * An individual line item on an invoice.
         *
         */
        class MarketInvoiceLineItem extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MarketInvoiceLineItem;
                if (null == bucket)
                   cim_data.MarketInvoiceLineItem = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketInvoiceLineItem[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MarketInvoiceLineItem";
                base.parse_element (/<cim:MarketInvoiceLineItem.billPeriod>([\s\S]*?)<\/cim:MarketInvoiceLineItem.billPeriod>/g, obj, "billPeriod", base.to_string, sub, context);
                base.parse_element (/<cim:MarketInvoiceLineItem.glAccount>([\s\S]*?)<\/cim:MarketInvoiceLineItem.glAccount>/g, obj, "glAccount", base.to_string, sub, context);
                base.parse_element (/<cim:MarketInvoiceLineItem.glDateTime>([\s\S]*?)<\/cim:MarketInvoiceLineItem.glDateTime>/g, obj, "glDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:MarketInvoiceLineItem.kind>([\s\S]*?)<\/cim:MarketInvoiceLineItem.kind>/g, obj, "kind", base.to_string, sub, context);
                base.parse_element (/<cim:MarketInvoiceLineItem.lineAmount>([\s\S]*?)<\/cim:MarketInvoiceLineItem.lineAmount>/g, obj, "lineAmount", base.to_float, sub, context);
                base.parse_element (/<cim:MarketInvoiceLineItem.lineNumber>([\s\S]*?)<\/cim:MarketInvoiceLineItem.lineNumber>/g, obj, "lineNumber", base.to_string, sub, context);
                base.parse_element (/<cim:MarketInvoiceLineItem.lineVersion>([\s\S]*?)<\/cim:MarketInvoiceLineItem.lineVersion>/g, obj, "lineVersion", base.to_string, sub, context);
                base.parse_element (/<cim:MarketInvoiceLineItem.netAmount>([\s\S]*?)<\/cim:MarketInvoiceLineItem.netAmount>/g, obj, "netAmount", base.to_float, sub, context);
                base.parse_element (/<cim:MarketInvoiceLineItem.previousAmount>([\s\S]*?)<\/cim:MarketInvoiceLineItem.previousAmount>/g, obj, "previousAmount", base.to_float, sub, context);
                base.parse_attribute (/<cim:MarketInvoiceLineItem.MarketInvoice\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketInvoice", sub, context);
                base.parse_attribute (/<cim:MarketInvoiceLineItem.ContainerMarketInvoiceLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ContainerMarketInvoiceLineItem", sub, context);

                var bucket = context.parsed.MarketInvoiceLineItem;
                if (null == bucket)
                   context.parsed.MarketInvoiceLineItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "MarketInvoiceLineItem", "billPeriod", base.from_string, fields);
                base.export_element (obj, "MarketInvoiceLineItem", "glAccount", base.from_string, fields);
                base.export_element (obj, "MarketInvoiceLineItem", "glDateTime", base.from_datetime, fields);
                base.export_element (obj, "MarketInvoiceLineItem", "kind", base.from_string, fields);
                base.export_element (obj, "MarketInvoiceLineItem", "lineAmount", base.from_float, fields);
                base.export_element (obj, "MarketInvoiceLineItem", "lineNumber", base.from_string, fields);
                base.export_element (obj, "MarketInvoiceLineItem", "lineVersion", base.from_string, fields);
                base.export_element (obj, "MarketInvoiceLineItem", "netAmount", base.from_float, fields);
                base.export_element (obj, "MarketInvoiceLineItem", "previousAmount", base.from_float, fields);
                base.export_attribute (obj, "MarketInvoiceLineItem", "MarketInvoice", fields);
                base.export_attribute (obj, "MarketInvoiceLineItem", "ContainerMarketInvoiceLineItem", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Subclass of IEC61970:Core:Terminal
         *
         */
        class MktTerminal extends Core.Terminal
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktTerminal;
                if (null == bucket)
                   cim_data.MktTerminal = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktTerminal[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Terminal.prototype.parse.call (this, context, sub);
                obj.cls = "MktTerminal";
                base.parse_element (/<cim:MktTerminal.startEffectiveDate>([\s\S]*?)<\/cim:MktTerminal.startEffectiveDate>/g, obj, "startEffectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:MktTerminal.endEffectiveDate>([\s\S]*?)<\/cim:MktTerminal.endEffectiveDate>/g, obj, "endEffectiveDate", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:MktTerminal.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);

                var bucket = context.parsed.MktTerminal;
                if (null == bucket)
                   context.parsed.MktTerminal = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Terminal"](obj, exporters, false);

                base.export_element (obj, "MktTerminal", "startEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "MktTerminal", "endEffectiveDate", base.from_datetime, fields);
                base.export_attribute (obj, "MktTerminal", "Flowgate", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Subclass of IEC61968:Core2:TopLevel:Organisation
         *
         */
        class MktOrganisation extends Common.Organisation
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktOrganisation;
                if (null == bucket)
                   cim_data.MktOrganisation = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktOrganisation[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Organisation.prototype.parse.call (this, context, sub);
                obj.cls = "MktOrganisation";
                base.parse_element (/<cim:MktOrganisation.creditFlag>([\s\S]*?)<\/cim:MktOrganisation.creditFlag>/g, obj, "creditFlag", base.to_string, sub, context);
                base.parse_element (/<cim:MktOrganisation.creditStartEffectiveDate>([\s\S]*?)<\/cim:MktOrganisation.creditStartEffectiveDate>/g, obj, "creditStartEffectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:MktOrganisation.endEffectiveDate>([\s\S]*?)<\/cim:MktOrganisation.endEffectiveDate>/g, obj, "endEffectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:MktOrganisation.lastModified>([\s\S]*?)<\/cim:MktOrganisation.lastModified>/g, obj, "lastModified", base.to_datetime, sub, context);
                base.parse_element (/<cim:MktOrganisation.organisationID>([\s\S]*?)<\/cim:MktOrganisation.organisationID>/g, obj, "organisationID", base.to_string, sub, context);
                base.parse_element (/<cim:MktOrganisation.qualificationStatus>([\s\S]*?)<\/cim:MktOrganisation.qualificationStatus>/g, obj, "qualificationStatus", base.to_string, sub, context);
                base.parse_element (/<cim:MktOrganisation.startEffectiveDate>([\s\S]*?)<\/cim:MktOrganisation.startEffectiveDate>/g, obj, "startEffectiveDate", base.to_datetime, sub, context);

                var bucket = context.parsed.MktOrganisation;
                if (null == bucket)
                   context.parsed.MktOrganisation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Organisation"](obj, exporters, false);

                base.export_element (obj, "MktOrganisation", "creditFlag", base.from_string, fields);
                base.export_element (obj, "MktOrganisation", "creditStartEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "MktOrganisation", "endEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "MktOrganisation", "lastModified", base.from_datetime, fields);
                base.export_element (obj, "MktOrganisation", "organisationID", base.from_string, fields);
                base.export_element (obj, "MktOrganisation", "qualificationStatus", base.from_string, fields);
                base.export_element (obj, "MktOrganisation", "startEffectiveDate", base.from_datetime, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Subclass of IEC61970:Wires:EnergyConsumer
         *
         */
        class MktEnergyConsumer extends Wires.EnergyConsumer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktEnergyConsumer;
                if (null == bucket)
                   cim_data.MktEnergyConsumer = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktEnergyConsumer[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Wires.EnergyConsumer.prototype.parse.call (this, context, sub);
                obj.cls = "MktEnergyConsumer";
                base.parse_attribute (/<cim:MktEnergyConsumer.RegisteredLoad\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredLoad", sub, context);

                var bucket = context.parsed.MktEnergyConsumer;
                if (null == bucket)
                   context.parsed.MktEnergyConsumer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["EnergyConsumer"](obj, exporters, false);

                base.export_attribute (obj, "MktEnergyConsumer", "RegisteredLoad", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Subclass of IEC61970:Meas:Measurement
         *
         */
        class MktMeasurement extends Meas.Measurement
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktMeasurement;
                if (null == bucket)
                   cim_data.MktMeasurement = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktMeasurement[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Meas.Measurement.prototype.parse.call (this, context, sub);
                obj.cls = "MktMeasurement";
                base.parse_attribute (/<cim:MktMeasurement.Pnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Pnode", sub, context);
                base.parse_attribute (/<cim:MktMeasurement.ForTiePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ForTiePoint", sub, context);
                base.parse_attribute (/<cim:MktMeasurement.ByTiePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ByTiePoint", sub, context);

                var bucket = context.parsed.MktMeasurement;
                if (null == bucket)
                   context.parsed.MktMeasurement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Measurement"](obj, exporters, false);

                base.export_attribute (obj, "MktMeasurement", "Pnode", fields);
                base.export_attribute (obj, "MktMeasurement", "ForTiePoint", fields);
                base.export_attribute (obj, "MktMeasurement", "ByTiePoint", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                MarketInvoiceLineItem: MarketInvoiceLineItem,
                MarketInvoice: MarketInvoice,
                MarketLedger: MarketLedger,
                MarketLedgerEntry: MarketLedgerEntry,
                MktMeasurement: MktMeasurement,
                MktGeneratingUnit: MktGeneratingUnit,
                MktEnergyConsumer: MktEnergyConsumer,
                MktLoadArea: MktLoadArea,
                MktTerminal: MktTerminal,
                MktPowerTransformer: MktPowerTransformer,
                MktLine: MktLine,
                MktConnectivityNode: MktConnectivityNode,
                MktUserAttribute: MktUserAttribute,
                MktOrganisation: MktOrganisation,
                MktActivityRecord: MktActivityRecord
            }
        );
    }
);