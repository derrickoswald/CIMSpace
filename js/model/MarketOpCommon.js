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

            export (obj, full)
            {
                var fields = Core.ConnectivityNode.prototype.export.call (this, obj, false);

                base.export_element (obj, "MktConnectivityNode", "endEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "MktConnectivityNode", "startEffectiveDate", base.from_datetime, fields);
                base.export_attribute (obj, "MktConnectivityNode", "RTO", fields);
                base.export_attribute (obj, "MktConnectivityNode", "IndividualPnode", fields);
                base.export_attribute (obj, "MktConnectivityNode", "SysLoadDistribuFactor", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MktConnectivityNode_collapse" aria-expanded="true" aria-controls="MktConnectivityNode_collapse">MktConnectivityNode</a>
<div id="MktConnectivityNode_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.ConnectivityNode.prototype.template.call (this) +
`
{{#endEffectiveDate}}<div><b>endEffectiveDate</b>: {{endEffectiveDate}}</div>{{/endEffectiveDate}}
{{#startEffectiveDate}}<div><b>startEffectiveDate</b>: {{startEffectiveDate}}</div>{{/startEffectiveDate}}
{{#RTO}}<div><b>RTO</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RTO}}&quot;);})'>{{RTO}}</a></div>{{/RTO}}
{{#IndividualPnode}}<div><b>IndividualPnode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{IndividualPnode}}&quot;);})'>{{IndividualPnode}}</a></div>{{/IndividualPnode}}
{{#SysLoadDistribuFactor}}<div><b>SysLoadDistribuFactor</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SysLoadDistribuFactor}}&quot;);})'>{{SysLoadDistribuFactor}}</a></div>{{/SysLoadDistribuFactor}}
</div>
`
                );
           }        }

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

            export (obj, full)
            {
                var fields = Common.UserAttribute.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MktUserAttribute_collapse" aria-expanded="true" aria-controls="MktUserAttribute_collapse">MktUserAttribute</a>
<div id="MktUserAttribute_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.UserAttribute.prototype.template.call (this) +
`
</div>
`
                );
           }        }

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

            export (obj, full)
            {
                var fields = Production.GeneratingUnit.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MktGeneratingUnit", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MktGeneratingUnit_collapse" aria-expanded="true" aria-controls="MktGeneratingUnit_collapse">MktGeneratingUnit</a>
<div id="MktGeneratingUnit_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Production.GeneratingUnit.prototype.template.call (this) +
`
{{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredGenerator}}&quot;);})'>{{RegisteredGenerator}}</a></div>{{/RegisteredGenerator}}
</div>
`
                );
           }        }

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

            export (obj, full)
            {
                var fields = Common.ActivityRecord.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MktActivityRecord_collapse" aria-expanded="true" aria-controls="MktActivityRecord_collapse">MktActivityRecord</a>
<div id="MktActivityRecord_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.ActivityRecord.prototype.template.call (this) +
`
</div>
`
                );
           }        }

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

            export (obj, full)
            {
                var fields = LoadModel.LoadArea.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MktLoadArea_collapse" aria-expanded="true" aria-controls="MktLoadArea_collapse">MktLoadArea</a>
<div id="MktLoadArea_collapse" class="collapse in" style="margin-left: 10px;">
`
      + LoadModel.LoadArea.prototype.template.call (this) +
`
</div>
`
                );
           }        }

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

            export (obj, full)
            {
                var fields = Wires.Line.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MktLine", "TransmissionRightOfWay", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MktLine_collapse" aria-expanded="true" aria-controls="MktLine_collapse">MktLine</a>
<div id="MktLine_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Wires.Line.prototype.template.call (this) +
`
{{#TransmissionRightOfWay}}<div><b>TransmissionRightOfWay</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TransmissionRightOfWay}}&quot;);})'>{{TransmissionRightOfWay}}</a></div>{{/TransmissionRightOfWay}}
</div>
`
                );
           }        }

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

            export (obj, full)
            {
                var fields = [];

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MarketLedger_collapse" aria-expanded="true" aria-controls="MarketLedger_collapse">MarketLedger</a>
<div id="MarketLedger_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
</div>
`
                );
           }        }

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

            export (obj, full)
            {
                var fields = Wires.PowerTransformer.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MktPowerTransformer", "EndBFlow", fields);
                base.export_attribute (obj, "MktPowerTransformer", "EndAFlow", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MktPowerTransformer_collapse" aria-expanded="true" aria-controls="MktPowerTransformer_collapse">MktPowerTransformer</a>
<div id="MktPowerTransformer_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Wires.PowerTransformer.prototype.template.call (this) +
`
{{#EndBFlow}}<div><b>EndBFlow</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EndBFlow}}&quot;);})'>{{EndBFlow}}</a></div>{{/EndBFlow}}
{{#EndAFlow}}<div><b>EndAFlow</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EndAFlow}}&quot;);})'>{{EndAFlow}}</a></div>{{/EndAFlow}}
</div>
`
                );
           }        }

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

            export (obj, full)
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


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MarketInvoice_collapse" aria-expanded="true" aria-controls="MarketInvoice_collapse">MarketInvoice</a>
<div id="MarketInvoice_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#amount}}<div><b>amount</b>: {{amount}}</div>{{/amount}}
{{#billMediaKind}}<div><b>billMediaKind</b>: {{billMediaKind}}</div>{{/billMediaKind}}
{{#dueDate}}<div><b>dueDate</b>: {{dueDate}}</div>{{/dueDate}}
{{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
{{#mailedDate}}<div><b>mailedDate</b>: {{mailedDate}}</div>{{/mailedDate}}
{{#proForma}}<div><b>proForma</b>: {{proForma}}</div>{{/proForma}}
{{#referenceNumber}}<div><b>referenceNumber</b>: {{referenceNumber}}</div>{{/referenceNumber}}
{{#transactionDateTime}}<div><b>transactionDateTime</b>: {{transactionDateTime}}</div>{{/transactionDateTime}}
{{#transferType}}<div><b>transferType</b>: {{transferType}}</div>{{/transferType}}
</div>
`
                );
           }        }

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

            export (obj, full)
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


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MarketLedgerEntry_collapse" aria-expanded="true" aria-controls="MarketLedgerEntry_collapse">MarketLedgerEntry</a>
<div id="MarketLedgerEntry_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#accountID}}<div><b>accountID</b>: {{accountID}}</div>{{/accountID}}
{{#accountKind}}<div><b>accountKind</b>: {{accountKind}}</div>{{/accountKind}}
{{#amount}}<div><b>amount</b>: {{amount}}</div>{{/amount}}
{{#postedDateTime}}<div><b>postedDateTime</b>: {{postedDateTime}}</div>{{/postedDateTime}}
{{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
{{#transactionDateTime}}<div><b>transactionDateTime</b>: {{transactionDateTime}}</div>{{/transactionDateTime}}
{{#MarketLedger}}<div><b>MarketLedger</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MarketLedger}}&quot;);})'>{{MarketLedger}}</a></div>{{/MarketLedger}}
</div>
`
                );
           }        }

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

            export (obj, full)
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


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MarketInvoiceLineItem_collapse" aria-expanded="true" aria-controls="MarketInvoiceLineItem_collapse">MarketInvoiceLineItem</a>
<div id="MarketInvoiceLineItem_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#billPeriod}}<div><b>billPeriod</b>: {{billPeriod}}</div>{{/billPeriod}}
{{#glAccount}}<div><b>glAccount</b>: {{glAccount}}</div>{{/glAccount}}
{{#glDateTime}}<div><b>glDateTime</b>: {{glDateTime}}</div>{{/glDateTime}}
{{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
{{#lineAmount}}<div><b>lineAmount</b>: {{lineAmount}}</div>{{/lineAmount}}
{{#lineNumber}}<div><b>lineNumber</b>: {{lineNumber}}</div>{{/lineNumber}}
{{#lineVersion}}<div><b>lineVersion</b>: {{lineVersion}}</div>{{/lineVersion}}
{{#netAmount}}<div><b>netAmount</b>: {{netAmount}}</div>{{/netAmount}}
{{#previousAmount}}<div><b>previousAmount</b>: {{previousAmount}}</div>{{/previousAmount}}
{{#MarketInvoice}}<div><b>MarketInvoice</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MarketInvoice}}&quot;);})'>{{MarketInvoice}}</a></div>{{/MarketInvoice}}
{{#ContainerMarketInvoiceLineItem}}<div><b>ContainerMarketInvoiceLineItem</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ContainerMarketInvoiceLineItem}}&quot;);})'>{{ContainerMarketInvoiceLineItem}}</a></div>{{/ContainerMarketInvoiceLineItem}}
</div>
`
                );
           }        }

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

            export (obj, full)
            {
                var fields = Core.Terminal.prototype.export.call (this, obj, false);

                base.export_element (obj, "MktTerminal", "startEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "MktTerminal", "endEffectiveDate", base.from_datetime, fields);
                base.export_attribute (obj, "MktTerminal", "Flowgate", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MktTerminal_collapse" aria-expanded="true" aria-controls="MktTerminal_collapse">MktTerminal</a>
<div id="MktTerminal_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.Terminal.prototype.template.call (this) +
`
{{#startEffectiveDate}}<div><b>startEffectiveDate</b>: {{startEffectiveDate}}</div>{{/startEffectiveDate}}
{{#endEffectiveDate}}<div><b>endEffectiveDate</b>: {{endEffectiveDate}}</div>{{/endEffectiveDate}}
{{#Flowgate}}<div><b>Flowgate</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Flowgate}}&quot;);})'>{{Flowgate}}</a></div>{{/Flowgate}}
</div>
`
                );
           }        }

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

            export (obj, full)
            {
                var fields = Common.Organisation.prototype.export.call (this, obj, false);

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


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MktOrganisation_collapse" aria-expanded="true" aria-controls="MktOrganisation_collapse">MktOrganisation</a>
<div id="MktOrganisation_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.Organisation.prototype.template.call (this) +
`
{{#creditFlag}}<div><b>creditFlag</b>: {{creditFlag}}</div>{{/creditFlag}}
{{#creditStartEffectiveDate}}<div><b>creditStartEffectiveDate</b>: {{creditStartEffectiveDate}}</div>{{/creditStartEffectiveDate}}
{{#endEffectiveDate}}<div><b>endEffectiveDate</b>: {{endEffectiveDate}}</div>{{/endEffectiveDate}}
{{#lastModified}}<div><b>lastModified</b>: {{lastModified}}</div>{{/lastModified}}
{{#organisationID}}<div><b>organisationID</b>: {{organisationID}}</div>{{/organisationID}}
{{#qualificationStatus}}<div><b>qualificationStatus</b>: {{qualificationStatus}}</div>{{/qualificationStatus}}
{{#startEffectiveDate}}<div><b>startEffectiveDate</b>: {{startEffectiveDate}}</div>{{/startEffectiveDate}}
</div>
`
                );
           }        }

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

            export (obj, full)
            {
                var fields = Wires.EnergyConsumer.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MktEnergyConsumer", "RegisteredLoad", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MktEnergyConsumer_collapse" aria-expanded="true" aria-controls="MktEnergyConsumer_collapse">MktEnergyConsumer</a>
<div id="MktEnergyConsumer_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Wires.EnergyConsumer.prototype.template.call (this) +
`
{{#RegisteredLoad}}<div><b>RegisteredLoad</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredLoad}}&quot;);})'>{{RegisteredLoad}}</a></div>{{/RegisteredLoad}}
</div>
`
                );
           }        }

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

            export (obj, full)
            {
                var fields = Meas.Measurement.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MktMeasurement", "Pnode", fields);
                base.export_attribute (obj, "MktMeasurement", "ForTiePoint", fields);
                base.export_attribute (obj, "MktMeasurement", "ByTiePoint", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MktMeasurement_collapse" aria-expanded="true" aria-controls="MktMeasurement_collapse">MktMeasurement</a>
<div id="MktMeasurement_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Meas.Measurement.prototype.template.call (this) +
`
{{#Pnode}}<div><b>Pnode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Pnode}}&quot;);})'>{{Pnode}}</a></div>{{/Pnode}}
{{#ForTiePoint}}<div><b>ForTiePoint</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ForTiePoint}}&quot;);})'>{{ForTiePoint}}</a></div>{{/ForTiePoint}}
{{#ByTiePoint}}<div><b>ByTiePoint</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ByTiePoint}}&quot;);})'>{{ByTiePoint}}</a></div>{{/ByTiePoint}}
</div>
`
                );
           }        }

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