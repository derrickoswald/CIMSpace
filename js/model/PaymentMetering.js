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
         * Kind of cheque.
         *
         */
        var ChequeKind =
        {
            postalOrder: "postalOrder",
            bankOrder: "bankOrder",
            other: "other"
        };
        Object.freeze (ChequeKind);

        /**
         * Kind of tender.
         *
         */
        var TenderKind =
        {
            cheque: "cheque",
            card: "card",
            cash: "cash",
            unspecified: "unspecified",
            other: "other"
        };
        Object.freeze (TenderKind);

        /**
         * Kind of charge.
         *
         */
        var ChargeKind =
        {
            consumptionCharge: "consumptionCharge",
            demandCharge: "demandCharge",
            auxiliaryCharge: "auxiliaryCharge",
            taxCharge: "taxCharge",
            other: "other"
        };
        Object.freeze (ChargeKind);

        /**
         * Kind of supplier.
         *
         */
        var SupplierKind =
        {
            utility: "utility",
            retailer: "retailer",
            other: "other"
        };
        Object.freeze (SupplierKind);

        /**
         * Kind of transaction.
         *
         */
        var TransactionKind =
        {
            serviceChargePayment: "serviceChargePayment",
            taxChargePayment: "taxChargePayment",
            auxiliaryChargePayment: "auxiliaryChargePayment",
            accountPayment: "accountPayment",
            diversePayment: "diversePayment",
            transactionReversal: "transactionReversal",
            tokenSalePayment: "tokenSalePayment",
            tokenFreeIssue: "tokenFreeIssue",
            tokenGrant: "tokenGrant",
            tokenExchange: "tokenExchange",
            tokenCancellation: "tokenCancellation",
            meterConfigurationToken: "meterConfigurationToken",
            other: "other"
        };
        Object.freeze (TransactionKind);

        /**
         * Record of total receipted payment from customer.
         *
         */
        class Receipt extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Receipt;
                if (null == bucket)
                   cim_data.Receipt = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Receipt[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Receipt";
                base.parse_element (/<cim:Receipt.isBankable>([\s\S]*?)<\/cim:Receipt.isBankable>/g, obj, "isBankable", base.to_boolean, sub, context);
                base.parse_element (/<cim:Receipt.line>([\s\S]*?)<\/cim:Receipt.line>/g, obj, "line", base.to_string, sub, context);
                base.parse_attributes (/<cim:Receipt.Transactions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Transactions", sub, context);
                base.parse_attribute (/<cim:Receipt.VendorShift\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "VendorShift", sub, context);
                base.parse_attribute (/<cim:Receipt.CashierShift\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CashierShift", sub, context);
                base.parse_attributes (/<cim:Receipt.Tenders\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Tenders", sub, context);
                var bucket = context.parsed.Receipt;
                if (null == bucket)
                   context.parsed.Receipt = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Receipt", "isBankable", "isBankable",  base.from_boolean, fields);
                base.export_element (obj, "Receipt", "line", "line",  base.from_string, fields);
                base.export_attributes (obj, "Receipt", "Transactions", "Transactions", fields);
                base.export_attribute (obj, "Receipt", "VendorShift", "VendorShift", fields);
                base.export_attribute (obj, "Receipt", "CashierShift", "CashierShift", fields);
                base.export_attributes (obj, "Receipt", "Tenders", "Tenders", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Receipt_collapse" aria-expanded="true" aria-controls="Receipt_collapse" style="margin-left: 10px;">Receipt</a></legend>
                    <div id="Receipt_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#isBankable}}<div><b>isBankable</b>: {{isBankable}}</div>{{/isBankable}}
                    {{#line}}<div><b>line</b>: {{line}}</div>{{/line}}
                    {{#Transactions}}<div><b>Transactions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Transactions}}
                    {{#VendorShift}}<div><b>VendorShift</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{VendorShift}}&quot;);})'>{{VendorShift}}</a></div>{{/VendorShift}}
                    {{#CashierShift}}<div><b>CashierShift</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CashierShift}}&quot;);})'>{{CashierShift}}</a></div>{{/CashierShift}}
                    {{#Tenders}}<div><b>Tenders</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Tenders}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Transactions) obj.Transactions_string = obj.Transactions.join ();
                if (obj.Tenders) obj.Tenders_string = obj.Tenders.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Transactions_string;
                delete obj.Tenders_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Receipt_collapse" aria-expanded="true" aria-controls="Receipt_collapse" style="margin-left: 10px;">Receipt</a></legend>
                    <div id="Receipt_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isBankable'>isBankable: </label><div class='col-sm-8'><input id='isBankable' class='form-check-input' type='checkbox'{{#isBankable}} checked{{/isBankable}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='line'>line: </label><div class='col-sm-8'><input id='line' class='form-control' type='text'{{#line}} value='{{line}}'{{/line}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='VendorShift'>VendorShift: </label><div class='col-sm-8'><input id='VendorShift' class='form-control' type='text'{{#VendorShift}} value='{{VendorShift}}'{{/VendorShift}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CashierShift'>CashierShift: </label><div class='col-sm-8'><input id='CashierShift' class='form-control' type='text'{{#CashierShift}} value='{{CashierShift}}'{{/CashierShift}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Receipt" };
                super.submit (obj);
                temp = document.getElementById ("isBankable").checked; if (temp) obj.isBankable = true;
                temp = document.getElementById ("line").value; if ("" != temp) obj.line = temp;
                temp = document.getElementById ("VendorShift").value; if ("" != temp) obj.VendorShift = temp;
                temp = document.getElementById ("CashierShift").value; if ("" != temp) obj.CashierShift = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Transactions", "Transaction", "1..*", "0..1"],
                        ["VendorShift", "VendorShift", "0..1", "0..*"],
                        ["CashierShift", "CashierShift", "0..1", "0..*"],
                        ["Tenders", "Tender", "1..*", "1"]
                    ]
                );
            }
        }

        /**
         * Documentation of the tender when it is a type of card (credit, debit, etc).
         *
         */
        class Card extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Card;
                if (null == bucket)
                   cim_data.Card = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Card[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Card";
                base.parse_element (/<cim:Card.accountHolderName>([\s\S]*?)<\/cim:Card.accountHolderName>/g, obj, "accountHolderName", base.to_string, sub, context);
                base.parse_element (/<cim:Card.cvNumber>([\s\S]*?)<\/cim:Card.cvNumber>/g, obj, "cvNumber", base.to_string, sub, context);
                base.parse_element (/<cim:Card.expiryDate>([\s\S]*?)<\/cim:Card.expiryDate>/g, obj, "expiryDate", base.to_string, sub, context);
                base.parse_element (/<cim:Card.pan>([\s\S]*?)<\/cim:Card.pan>/g, obj, "pan", base.to_string, sub, context);
                base.parse_attribute (/<cim:Card.Tender\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Tender", sub, context);
                var bucket = context.parsed.Card;
                if (null == bucket)
                   context.parsed.Card = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Card", "accountHolderName", "accountHolderName",  base.from_string, fields);
                base.export_element (obj, "Card", "cvNumber", "cvNumber",  base.from_string, fields);
                base.export_element (obj, "Card", "expiryDate", "expiryDate",  base.from_string, fields);
                base.export_element (obj, "Card", "pan", "pan",  base.from_string, fields);
                base.export_attribute (obj, "Card", "Tender", "Tender", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Card_collapse" aria-expanded="true" aria-controls="Card_collapse" style="margin-left: 10px;">Card</a></legend>
                    <div id="Card_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#accountHolderName}}<div><b>accountHolderName</b>: {{accountHolderName}}</div>{{/accountHolderName}}
                    {{#cvNumber}}<div><b>cvNumber</b>: {{cvNumber}}</div>{{/cvNumber}}
                    {{#expiryDate}}<div><b>expiryDate</b>: {{expiryDate}}</div>{{/expiryDate}}
                    {{#pan}}<div><b>pan</b>: {{pan}}</div>{{/pan}}
                    {{#Tender}}<div><b>Tender</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Tender}}&quot;);})'>{{Tender}}</a></div>{{/Tender}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Card_collapse" aria-expanded="true" aria-controls="Card_collapse" style="margin-left: 10px;">Card</a></legend>
                    <div id="Card_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='accountHolderName'>accountHolderName: </label><div class='col-sm-8'><input id='accountHolderName' class='form-control' type='text'{{#accountHolderName}} value='{{accountHolderName}}'{{/accountHolderName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='cvNumber'>cvNumber: </label><div class='col-sm-8'><input id='cvNumber' class='form-control' type='text'{{#cvNumber}} value='{{cvNumber}}'{{/cvNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='expiryDate'>expiryDate: </label><div class='col-sm-8'><input id='expiryDate' class='form-control' type='text'{{#expiryDate}} value='{{expiryDate}}'{{/expiryDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pan'>pan: </label><div class='col-sm-8'><input id='pan' class='form-control' type='text'{{#pan}} value='{{pan}}'{{/pan}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Tender'>Tender: </label><div class='col-sm-8'><input id='Tender' class='form-control' type='text'{{#Tender}} value='{{Tender}}'{{/Tender}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Card" };
                super.submit (obj);
                temp = document.getElementById ("accountHolderName").value; if ("" != temp) obj.accountHolderName = temp;
                temp = document.getElementById ("cvNumber").value; if ("" != temp) obj.cvNumber = temp;
                temp = document.getElementById ("expiryDate").value; if ("" != temp) obj.expiryDate = temp;
                temp = document.getElementById ("pan").value; if ("" != temp) obj.pan = temp;
                temp = document.getElementById ("Tender").value; if ("" != temp) obj.Tender = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Tender", "Tender", "1", "0..1"]
                    ]
                );
            }
        }

        /**
         * Details on amounts due for an account.
         *
         */
        class Due extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Due;
                if (null == bucket)
                   cim_data.Due = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Due[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Due";
                base.parse_element (/<cim:Due.arrears>([\s\S]*?)<\/cim:Due.arrears>/g, obj, "arrears", base.to_string, sub, context);
                base.parse_element (/<cim:Due.charges>([\s\S]*?)<\/cim:Due.charges>/g, obj, "charges", base.to_string, sub, context);
                base.parse_element (/<cim:Due.current>([\s\S]*?)<\/cim:Due.current>/g, obj, "current", base.to_string, sub, context);
                base.parse_element (/<cim:Due.interest>([\s\S]*?)<\/cim:Due.interest>/g, obj, "interest", base.to_string, sub, context);
                base.parse_element (/<cim:Due.principle>([\s\S]*?)<\/cim:Due.principle>/g, obj, "principle", base.to_string, sub, context);
                var bucket = context.parsed.Due;
                if (null == bucket)
                   context.parsed.Due = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Due", "arrears", "arrears",  base.from_string, fields);
                base.export_element (obj, "Due", "charges", "charges",  base.from_string, fields);
                base.export_element (obj, "Due", "current", "current",  base.from_string, fields);
                base.export_element (obj, "Due", "interest", "interest",  base.from_string, fields);
                base.export_element (obj, "Due", "principle", "principle",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Due_collapse" aria-expanded="true" aria-controls="Due_collapse" style="margin-left: 10px;">Due</a></legend>
                    <div id="Due_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#arrears}}<div><b>arrears</b>: {{arrears}}</div>{{/arrears}}
                    {{#charges}}<div><b>charges</b>: {{charges}}</div>{{/charges}}
                    {{#current}}<div><b>current</b>: {{current}}</div>{{/current}}
                    {{#interest}}<div><b>interest</b>: {{interest}}</div>{{/interest}}
                    {{#principle}}<div><b>principle</b>: {{principle}}</div>{{/principle}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Due_collapse" aria-expanded="true" aria-controls="Due_collapse" style="margin-left: 10px;">Due</a></legend>
                    <div id="Due_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='arrears'>arrears: </label><div class='col-sm-8'><input id='arrears' class='form-control' type='text'{{#arrears}} value='{{arrears}}'{{/arrears}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='charges'>charges: </label><div class='col-sm-8'><input id='charges' class='form-control' type='text'{{#charges}} value='{{charges}}'{{/charges}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='current'>current: </label><div class='col-sm-8'><input id='current' class='form-control' type='text'{{#current}} value='{{current}}'{{/current}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='interest'>interest: </label><div class='col-sm-8'><input id='interest' class='form-control' type='text'{{#interest}} value='{{interest}}'{{/interest}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='principle'>principle: </label><div class='col-sm-8'><input id='principle' class='form-control' type='text'{{#principle}} value='{{principle}}'{{/principle}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Due" };
                super.submit (obj);
                temp = document.getElementById ("arrears").value; if ("" != temp) obj.arrears = temp;
                temp = document.getElementById ("charges").value; if ("" != temp) obj.charges = temp;
                temp = document.getElementById ("current").value; if ("" != temp) obj.current = temp;
                temp = document.getElementById ("interest").value; if ("" != temp) obj.interest = temp;
                temp = document.getElementById ("principle").value; if ("" != temp) obj.principle = temp;

                return (obj);
            }
        }

        /**
         * A charge element associated with other entities such as tariff structures, auxiliary agreements or other charge elements.
         *
         * The total charge amount applicable to this instance of charge is the sum of fixed and variable portion.
         *
         */
        class Charge extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Charge;
                if (null == bucket)
                   cim_data.Charge = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Charge[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Charge";
                base.parse_element (/<cim:Charge.fixedPortion>([\s\S]*?)<\/cim:Charge.fixedPortion>/g, obj, "fixedPortion", base.to_string, sub, context);
                base.parse_attribute (/<cim:Charge.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:Charge.variablePortion>([\s\S]*?)<\/cim:Charge.variablePortion>/g, obj, "variablePortion", base.to_string, sub, context);
                base.parse_attributes (/<cim:Charge.AuxiliaryAccounts\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AuxiliaryAccounts", sub, context);
                base.parse_attributes (/<cim:Charge.ConsumptionTariffIntervals\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConsumptionTariffIntervals", sub, context);
                base.parse_attributes (/<cim:Charge.ChildCharges\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChildCharges", sub, context);
                base.parse_attribute (/<cim:Charge.ParentCharge\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ParentCharge", sub, context);
                base.parse_attributes (/<cim:Charge.TimeTariffIntervals\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TimeTariffIntervals", sub, context);
                var bucket = context.parsed.Charge;
                if (null == bucket)
                   context.parsed.Charge = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Charge", "fixedPortion", "fixedPortion",  base.from_string, fields);
                base.export_element (obj, "Charge", "kind", "kind",  base.from_string, fields);
                base.export_element (obj, "Charge", "variablePortion", "variablePortion",  base.from_string, fields);
                base.export_attributes (obj, "Charge", "AuxiliaryAccounts", "AuxiliaryAccounts", fields);
                base.export_attributes (obj, "Charge", "ConsumptionTariffIntervals", "ConsumptionTariffIntervals", fields);
                base.export_attributes (obj, "Charge", "ChildCharges", "ChildCharges", fields);
                base.export_attribute (obj, "Charge", "ParentCharge", "ParentCharge", fields);
                base.export_attributes (obj, "Charge", "TimeTariffIntervals", "TimeTariffIntervals", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Charge_collapse" aria-expanded="true" aria-controls="Charge_collapse" style="margin-left: 10px;">Charge</a></legend>
                    <div id="Charge_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#fixedPortion}}<div><b>fixedPortion</b>: {{fixedPortion}}</div>{{/fixedPortion}}
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#variablePortion}}<div><b>variablePortion</b>: {{variablePortion}}</div>{{/variablePortion}}
                    {{#AuxiliaryAccounts}}<div><b>AuxiliaryAccounts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/AuxiliaryAccounts}}
                    {{#ConsumptionTariffIntervals}}<div><b>ConsumptionTariffIntervals</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ConsumptionTariffIntervals}}
                    {{#ChildCharges}}<div><b>ChildCharges</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ChildCharges}}
                    {{#ParentCharge}}<div><b>ParentCharge</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ParentCharge}}&quot;);})'>{{ParentCharge}}</a></div>{{/ParentCharge}}
                    {{#TimeTariffIntervals}}<div><b>TimeTariffIntervals</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/TimeTariffIntervals}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ChargeKind = []; if (!obj.kind) obj.ChargeKind.push ({ id: '', selected: true}); for (var property in ChargeKind) obj.ChargeKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
                if (obj.AuxiliaryAccounts) obj.AuxiliaryAccounts_string = obj.AuxiliaryAccounts.join ();
                if (obj.ConsumptionTariffIntervals) obj.ConsumptionTariffIntervals_string = obj.ConsumptionTariffIntervals.join ();
                if (obj.ChildCharges) obj.ChildCharges_string = obj.ChildCharges.join ();
                if (obj.TimeTariffIntervals) obj.TimeTariffIntervals_string = obj.TimeTariffIntervals.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ChargeKind;
                delete obj.AuxiliaryAccounts_string;
                delete obj.ConsumptionTariffIntervals_string;
                delete obj.ChildCharges_string;
                delete obj.TimeTariffIntervals_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Charge_collapse" aria-expanded="true" aria-controls="Charge_collapse" style="margin-left: 10px;">Charge</a></legend>
                    <div id="Charge_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='fixedPortion'>fixedPortion: </label><div class='col-sm-8'><input id='fixedPortion' class='form-control' type='text'{{#fixedPortion}} value='{{fixedPortion}}'{{/fixedPortion}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#ChargeKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ChargeKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='variablePortion'>variablePortion: </label><div class='col-sm-8'><input id='variablePortion' class='form-control' type='text'{{#variablePortion}} value='{{variablePortion}}'{{/variablePortion}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AuxiliaryAccounts'>AuxiliaryAccounts: </label><div class='col-sm-8'><input id='AuxiliaryAccounts' class='form-control' type='text'{{#AuxiliaryAccounts}} value='{{AuxiliaryAccounts}}_string'{{/AuxiliaryAccounts}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ConsumptionTariffIntervals'>ConsumptionTariffIntervals: </label><div class='col-sm-8'><input id='ConsumptionTariffIntervals' class='form-control' type='text'{{#ConsumptionTariffIntervals}} value='{{ConsumptionTariffIntervals}}_string'{{/ConsumptionTariffIntervals}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ParentCharge'>ParentCharge: </label><div class='col-sm-8'><input id='ParentCharge' class='form-control' type='text'{{#ParentCharge}} value='{{ParentCharge}}'{{/ParentCharge}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TimeTariffIntervals'>TimeTariffIntervals: </label><div class='col-sm-8'><input id='TimeTariffIntervals' class='form-control' type='text'{{#TimeTariffIntervals}} value='{{TimeTariffIntervals}}_string'{{/TimeTariffIntervals}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Charge" };
                super.submit (obj);
                temp = document.getElementById ("fixedPortion").value; if ("" != temp) obj.fixedPortion = temp;
                temp = document.getElementById ("kind").value; if ("" != temp) { temp = ChargeKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#ChargeKind." + temp; }
                temp = document.getElementById ("variablePortion").value; if ("" != temp) obj.variablePortion = temp;
                temp = document.getElementById ("AuxiliaryAccounts").value; if ("" != temp) obj.AuxiliaryAccounts = temp.split (",");
                temp = document.getElementById ("ConsumptionTariffIntervals").value; if ("" != temp) obj.ConsumptionTariffIntervals = temp.split (",");
                temp = document.getElementById ("ParentCharge").value; if ("" != temp) obj.ParentCharge = temp;
                temp = document.getElementById ("TimeTariffIntervals").value; if ("" != temp) obj.TimeTariffIntervals = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["AuxiliaryAccounts", "AuxiliaryAccount", "0..*", "0..*"],
                        ["ConsumptionTariffIntervals", "ConsumptionTariffInterval", "0..*", "0..*"],
                        ["ChildCharges", "Charge", "0..*", "0..1"],
                        ["ParentCharge", "Charge", "0..1", "0..*"],
                        ["TimeTariffIntervals", "TimeTariffInterval", "0..*", "0..*"]
                    ]
                );
            }
        }

        /**
         * A schedule of charges; structure associated with Tariff that allows the definition of complex tarif structures such as step and time of use when used in conjunction with TimeTariffInterval and Charge.
         *
         * Inherited 'status.value' is defined in the context of the utility's business rules, for example: active, inactive, etc.
         *
         */
        class TariffProfile extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TariffProfile;
                if (null == bucket)
                   cim_data.TariffProfile = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TariffProfile[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "TariffProfile";
                base.parse_element (/<cim:TariffProfile.tariffCycle>([\s\S]*?)<\/cim:TariffProfile.tariffCycle>/g, obj, "tariffCycle", base.to_string, sub, context);
                base.parse_attributes (/<cim:TariffProfile.TimeTariffIntervals\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TimeTariffIntervals", sub, context);
                base.parse_attributes (/<cim:TariffProfile.Tariffs\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Tariffs", sub, context);
                base.parse_attributes (/<cim:TariffProfile.ConsumptionTariffIntervals\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConsumptionTariffIntervals", sub, context);
                var bucket = context.parsed.TariffProfile;
                if (null == bucket)
                   context.parsed.TariffProfile = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "TariffProfile", "tariffCycle", "tariffCycle",  base.from_string, fields);
                base.export_attributes (obj, "TariffProfile", "TimeTariffIntervals", "TimeTariffIntervals", fields);
                base.export_attributes (obj, "TariffProfile", "Tariffs", "Tariffs", fields);
                base.export_attributes (obj, "TariffProfile", "ConsumptionTariffIntervals", "ConsumptionTariffIntervals", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TariffProfile_collapse" aria-expanded="true" aria-controls="TariffProfile_collapse" style="margin-left: 10px;">TariffProfile</a></legend>
                    <div id="TariffProfile_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#tariffCycle}}<div><b>tariffCycle</b>: {{tariffCycle}}</div>{{/tariffCycle}}
                    {{#TimeTariffIntervals}}<div><b>TimeTariffIntervals</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/TimeTariffIntervals}}
                    {{#Tariffs}}<div><b>Tariffs</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Tariffs}}
                    {{#ConsumptionTariffIntervals}}<div><b>ConsumptionTariffIntervals</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ConsumptionTariffIntervals}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.TimeTariffIntervals) obj.TimeTariffIntervals_string = obj.TimeTariffIntervals.join ();
                if (obj.Tariffs) obj.Tariffs_string = obj.Tariffs.join ();
                if (obj.ConsumptionTariffIntervals) obj.ConsumptionTariffIntervals_string = obj.ConsumptionTariffIntervals.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TimeTariffIntervals_string;
                delete obj.Tariffs_string;
                delete obj.ConsumptionTariffIntervals_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TariffProfile_collapse" aria-expanded="true" aria-controls="TariffProfile_collapse" style="margin-left: 10px;">TariffProfile</a></legend>
                    <div id="TariffProfile_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tariffCycle'>tariffCycle: </label><div class='col-sm-8'><input id='tariffCycle' class='form-control' type='text'{{#tariffCycle}} value='{{tariffCycle}}'{{/tariffCycle}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TimeTariffIntervals'>TimeTariffIntervals: </label><div class='col-sm-8'><input id='TimeTariffIntervals' class='form-control' type='text'{{#TimeTariffIntervals}} value='{{TimeTariffIntervals}}_string'{{/TimeTariffIntervals}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Tariffs'>Tariffs: </label><div class='col-sm-8'><input id='Tariffs' class='form-control' type='text'{{#Tariffs}} value='{{Tariffs}}_string'{{/Tariffs}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ConsumptionTariffIntervals'>ConsumptionTariffIntervals: </label><div class='col-sm-8'><input id='ConsumptionTariffIntervals' class='form-control' type='text'{{#ConsumptionTariffIntervals}} value='{{ConsumptionTariffIntervals}}_string'{{/ConsumptionTariffIntervals}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "TariffProfile" };
                super.submit (obj);
                temp = document.getElementById ("tariffCycle").value; if ("" != temp) obj.tariffCycle = temp;
                temp = document.getElementById ("TimeTariffIntervals").value; if ("" != temp) obj.TimeTariffIntervals = temp.split (",");
                temp = document.getElementById ("Tariffs").value; if ("" != temp) obj.Tariffs = temp.split (",");
                temp = document.getElementById ("ConsumptionTariffIntervals").value; if ("" != temp) obj.ConsumptionTariffIntervals = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["TimeTariffIntervals", "TimeTariffInterval", "0..*", "0..*"],
                        ["Tariffs", "Tariff", "0..*", "0..*"],
                        ["ConsumptionTariffIntervals", "ConsumptionTariffInterval", "0..*", "0..*"]
                    ]
                );
            }
        }

        /**
         * Credit/debit movements for an account.
         *
         */
        class AccountMovement extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AccountMovement;
                if (null == bucket)
                   cim_data.AccountMovement = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AccountMovement[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AccountMovement";
                base.parse_element (/<cim:AccountMovement.amount>([\s\S]*?)<\/cim:AccountMovement.amount>/g, obj, "amount", base.to_string, sub, context);
                base.parse_element (/<cim:AccountMovement.dateTime>([\s\S]*?)<\/cim:AccountMovement.dateTime>/g, obj, "dateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:AccountMovement.reason>([\s\S]*?)<\/cim:AccountMovement.reason>/g, obj, "reason", base.to_string, sub, context);
                var bucket = context.parsed.AccountMovement;
                if (null == bucket)
                   context.parsed.AccountMovement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "AccountMovement", "amount", "amount",  base.from_string, fields);
                base.export_element (obj, "AccountMovement", "dateTime", "dateTime",  base.from_datetime, fields);
                base.export_element (obj, "AccountMovement", "reason", "reason",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AccountMovement_collapse" aria-expanded="true" aria-controls="AccountMovement_collapse" style="margin-left: 10px;">AccountMovement</a></legend>
                    <div id="AccountMovement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#amount}}<div><b>amount</b>: {{amount}}</div>{{/amount}}
                    {{#dateTime}}<div><b>dateTime</b>: {{dateTime}}</div>{{/dateTime}}
                    {{#reason}}<div><b>reason</b>: {{reason}}</div>{{/reason}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AccountMovement_collapse" aria-expanded="true" aria-controls="AccountMovement_collapse" style="margin-left: 10px;">AccountMovement</a></legend>
                    <div id="AccountMovement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='amount'>amount: </label><div class='col-sm-8'><input id='amount' class='form-control' type='text'{{#amount}} value='{{amount}}'{{/amount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dateTime'>dateTime: </label><div class='col-sm-8'><input id='dateTime' class='form-control' type='text'{{#dateTime}} value='{{dateTime}}'{{/dateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='reason'>reason: </label><div class='col-sm-8'><input id='reason' class='form-control' type='text'{{#reason}} value='{{reason}}'{{/reason}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "AccountMovement" };
                super.submit (obj);
                temp = document.getElementById ("amount").value; if ("" != temp) obj.amount = temp;
                temp = document.getElementById ("dateTime").value; if ("" != temp) obj.dateTime = temp;
                temp = document.getElementById ("reason").value; if ("" != temp) obj.reason = temp;

                return (obj);
            }
        }

        /**
         * One of a sequence of intervals defined in terms of consumption quantity of a service such as electricity, water, gas, etc.
         *
         * It is typically used in association with TariffProfile to define the steps or blocks in a step tariff structure, where startValue simultaneously defines the entry value of this step and the closing value of the previous step. Where consumption is &gt;= startValue it falls within this interval and where consumption is &lt; startValue it falls within the previous interval.
         *
         */
        class ConsumptionTariffInterval extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ConsumptionTariffInterval;
                if (null == bucket)
                   cim_data.ConsumptionTariffInterval = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ConsumptionTariffInterval[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ConsumptionTariffInterval";
                base.parse_element (/<cim:ConsumptionTariffInterval.sequenceNumber>([\s\S]*?)<\/cim:ConsumptionTariffInterval.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
                base.parse_element (/<cim:ConsumptionTariffInterval.startValue>([\s\S]*?)<\/cim:ConsumptionTariffInterval.startValue>/g, obj, "startValue", base.to_string, sub, context);
                base.parse_attributes (/<cim:ConsumptionTariffInterval.Charges\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Charges", sub, context);
                base.parse_attributes (/<cim:ConsumptionTariffInterval.TouTariffIntervals\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TouTariffIntervals", sub, context);
                base.parse_attributes (/<cim:ConsumptionTariffInterval.TariffProfiles\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TariffProfiles", sub, context);
                var bucket = context.parsed.ConsumptionTariffInterval;
                if (null == bucket)
                   context.parsed.ConsumptionTariffInterval = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ConsumptionTariffInterval", "sequenceNumber", "sequenceNumber",  base.from_string, fields);
                base.export_element (obj, "ConsumptionTariffInterval", "startValue", "startValue",  base.from_string, fields);
                base.export_attributes (obj, "ConsumptionTariffInterval", "Charges", "Charges", fields);
                base.export_attributes (obj, "ConsumptionTariffInterval", "TouTariffIntervals", "TouTariffIntervals", fields);
                base.export_attributes (obj, "ConsumptionTariffInterval", "TariffProfiles", "TariffProfiles", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ConsumptionTariffInterval_collapse" aria-expanded="true" aria-controls="ConsumptionTariffInterval_collapse" style="margin-left: 10px;">ConsumptionTariffInterval</a></legend>
                    <div id="ConsumptionTariffInterval_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
                    {{#startValue}}<div><b>startValue</b>: {{startValue}}</div>{{/startValue}}
                    {{#Charges}}<div><b>Charges</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Charges}}
                    {{#TouTariffIntervals}}<div><b>TouTariffIntervals</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/TouTariffIntervals}}
                    {{#TariffProfiles}}<div><b>TariffProfiles</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/TariffProfiles}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Charges) obj.Charges_string = obj.Charges.join ();
                if (obj.TouTariffIntervals) obj.TouTariffIntervals_string = obj.TouTariffIntervals.join ();
                if (obj.TariffProfiles) obj.TariffProfiles_string = obj.TariffProfiles.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Charges_string;
                delete obj.TouTariffIntervals_string;
                delete obj.TariffProfiles_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ConsumptionTariffInterval_collapse" aria-expanded="true" aria-controls="ConsumptionTariffInterval_collapse" style="margin-left: 10px;">ConsumptionTariffInterval</a></legend>
                    <div id="ConsumptionTariffInterval_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='sequenceNumber'>sequenceNumber: </label><div class='col-sm-8'><input id='sequenceNumber' class='form-control' type='text'{{#sequenceNumber}} value='{{sequenceNumber}}'{{/sequenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startValue'>startValue: </label><div class='col-sm-8'><input id='startValue' class='form-control' type='text'{{#startValue}} value='{{startValue}}'{{/startValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Charges'>Charges: </label><div class='col-sm-8'><input id='Charges' class='form-control' type='text'{{#Charges}} value='{{Charges}}_string'{{/Charges}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TouTariffIntervals'>TouTariffIntervals: </label><div class='col-sm-8'><input id='TouTariffIntervals' class='form-control' type='text'{{#TouTariffIntervals}} value='{{TouTariffIntervals}}_string'{{/TouTariffIntervals}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TariffProfiles'>TariffProfiles: </label><div class='col-sm-8'><input id='TariffProfiles' class='form-control' type='text'{{#TariffProfiles}} value='{{TariffProfiles}}_string'{{/TariffProfiles}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ConsumptionTariffInterval" };
                super.submit (obj);
                temp = document.getElementById ("sequenceNumber").value; if ("" != temp) obj.sequenceNumber = temp;
                temp = document.getElementById ("startValue").value; if ("" != temp) obj.startValue = temp;
                temp = document.getElementById ("Charges").value; if ("" != temp) obj.Charges = temp.split (",");
                temp = document.getElementById ("TouTariffIntervals").value; if ("" != temp) obj.TouTariffIntervals = temp.split (",");
                temp = document.getElementById ("TariffProfiles").value; if ("" != temp) obj.TariffProfiles = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Charges", "Charge", "0..*", "0..*"],
                        ["TouTariffIntervals", "TimeTariffInterval", "0..*", "0..*"],
                        ["TariffProfiles", "TariffProfile", "0..*", "0..*"]
                    ]
                );
            }
        }

        /**
         * One of a sequence of time intervals defined in terms of real time.
         *
         * It is typically used in association with TariffProfile to define the intervals in a time of use tariff structure, where startDateTime simultaneously determines the starting point of this interval and the ending point of the previous interval.
         *
         */
        class TimeTariffInterval extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TimeTariffInterval;
                if (null == bucket)
                   cim_data.TimeTariffInterval = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TimeTariffInterval[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TimeTariffInterval";
                base.parse_element (/<cim:TimeTariffInterval.sequenceNumber>([\s\S]*?)<\/cim:TimeTariffInterval.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
                base.parse_element (/<cim:TimeTariffInterval.startTime>([\s\S]*?)<\/cim:TimeTariffInterval.startTime>/g, obj, "startTime", base.to_string, sub, context);
                base.parse_attributes (/<cim:TimeTariffInterval.TariffProfiles\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TariffProfiles", sub, context);
                base.parse_attributes (/<cim:TimeTariffInterval.ConsumptionTariffIntervals\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConsumptionTariffIntervals", sub, context);
                base.parse_attributes (/<cim:TimeTariffInterval.Charges\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Charges", sub, context);
                var bucket = context.parsed.TimeTariffInterval;
                if (null == bucket)
                   context.parsed.TimeTariffInterval = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TimeTariffInterval", "sequenceNumber", "sequenceNumber",  base.from_string, fields);
                base.export_element (obj, "TimeTariffInterval", "startTime", "startTime",  base.from_string, fields);
                base.export_attributes (obj, "TimeTariffInterval", "TariffProfiles", "TariffProfiles", fields);
                base.export_attributes (obj, "TimeTariffInterval", "ConsumptionTariffIntervals", "ConsumptionTariffIntervals", fields);
                base.export_attributes (obj, "TimeTariffInterval", "Charges", "Charges", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TimeTariffInterval_collapse" aria-expanded="true" aria-controls="TimeTariffInterval_collapse" style="margin-left: 10px;">TimeTariffInterval</a></legend>
                    <div id="TimeTariffInterval_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
                    {{#startTime}}<div><b>startTime</b>: {{startTime}}</div>{{/startTime}}
                    {{#TariffProfiles}}<div><b>TariffProfiles</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/TariffProfiles}}
                    {{#ConsumptionTariffIntervals}}<div><b>ConsumptionTariffIntervals</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ConsumptionTariffIntervals}}
                    {{#Charges}}<div><b>Charges</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Charges}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.TariffProfiles) obj.TariffProfiles_string = obj.TariffProfiles.join ();
                if (obj.ConsumptionTariffIntervals) obj.ConsumptionTariffIntervals_string = obj.ConsumptionTariffIntervals.join ();
                if (obj.Charges) obj.Charges_string = obj.Charges.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TariffProfiles_string;
                delete obj.ConsumptionTariffIntervals_string;
                delete obj.Charges_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TimeTariffInterval_collapse" aria-expanded="true" aria-controls="TimeTariffInterval_collapse" style="margin-left: 10px;">TimeTariffInterval</a></legend>
                    <div id="TimeTariffInterval_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='sequenceNumber'>sequenceNumber: </label><div class='col-sm-8'><input id='sequenceNumber' class='form-control' type='text'{{#sequenceNumber}} value='{{sequenceNumber}}'{{/sequenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startTime'>startTime: </label><div class='col-sm-8'><input id='startTime' class='form-control' type='text'{{#startTime}} value='{{startTime}}'{{/startTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TariffProfiles'>TariffProfiles: </label><div class='col-sm-8'><input id='TariffProfiles' class='form-control' type='text'{{#TariffProfiles}} value='{{TariffProfiles}}_string'{{/TariffProfiles}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ConsumptionTariffIntervals'>ConsumptionTariffIntervals: </label><div class='col-sm-8'><input id='ConsumptionTariffIntervals' class='form-control' type='text'{{#ConsumptionTariffIntervals}} value='{{ConsumptionTariffIntervals}}_string'{{/ConsumptionTariffIntervals}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Charges'>Charges: </label><div class='col-sm-8'><input id='Charges' class='form-control' type='text'{{#Charges}} value='{{Charges}}_string'{{/Charges}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "TimeTariffInterval" };
                super.submit (obj);
                temp = document.getElementById ("sequenceNumber").value; if ("" != temp) obj.sequenceNumber = temp;
                temp = document.getElementById ("startTime").value; if ("" != temp) obj.startTime = temp;
                temp = document.getElementById ("TariffProfiles").value; if ("" != temp) obj.TariffProfiles = temp.split (",");
                temp = document.getElementById ("ConsumptionTariffIntervals").value; if ("" != temp) obj.ConsumptionTariffIntervals = temp.split (",");
                temp = document.getElementById ("Charges").value; if ("" != temp) obj.Charges = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["TariffProfiles", "TariffProfile", "0..*", "0..*"],
                        ["ConsumptionTariffIntervals", "ConsumptionTariffInterval", "0..*", "0..*"],
                        ["Charges", "Charge", "0..*", "0..*"]
                    ]
                );
            }
        }

        /**
         * An ad-hoc auxiliary account agreement associated with a customer agreement, not part of the customer's account, but typically subject to formal agreement between customer and supplier (utility).
         *
         * Typically this is used to collect revenue owed by the customer for other services or arrears accrued with the utility for other services. It is typically linked to a prepaid token purchase transaction, thus forcing the customer to make a payment towards settlement of the auxiliary account balance whenever the customer needs to purchase a prepaid token for electricity.
         *
         */
        class AuxiliaryAgreement extends Common.Agreement
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AuxiliaryAgreement;
                if (null == bucket)
                   cim_data.AuxiliaryAgreement = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AuxiliaryAgreement[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Agreement.prototype.parse.call (this, context, sub);
                obj.cls = "AuxiliaryAgreement";
                base.parse_element (/<cim:AuxiliaryAgreement.arrearsInterest>([\s\S]*?)<\/cim:AuxiliaryAgreement.arrearsInterest>/g, obj, "arrearsInterest", base.to_string, sub, context);
                base.parse_element (/<cim:AuxiliaryAgreement.auxCycle>([\s\S]*?)<\/cim:AuxiliaryAgreement.auxCycle>/g, obj, "auxCycle", base.to_string, sub, context);
                base.parse_element (/<cim:AuxiliaryAgreement.auxPriorityCode>([\s\S]*?)<\/cim:AuxiliaryAgreement.auxPriorityCode>/g, obj, "auxPriorityCode", base.to_string, sub, context);
                base.parse_element (/<cim:AuxiliaryAgreement.fixedAmount>([\s\S]*?)<\/cim:AuxiliaryAgreement.fixedAmount>/g, obj, "fixedAmount", base.to_string, sub, context);
                base.parse_element (/<cim:AuxiliaryAgreement.minAmount>([\s\S]*?)<\/cim:AuxiliaryAgreement.minAmount>/g, obj, "minAmount", base.to_string, sub, context);
                base.parse_element (/<cim:AuxiliaryAgreement.payCycle>([\s\S]*?)<\/cim:AuxiliaryAgreement.payCycle>/g, obj, "payCycle", base.to_string, sub, context);
                base.parse_element (/<cim:AuxiliaryAgreement.subType>([\s\S]*?)<\/cim:AuxiliaryAgreement.subType>/g, obj, "subType", base.to_string, sub, context);
                base.parse_element (/<cim:AuxiliaryAgreement.vendPortion>([\s\S]*?)<\/cim:AuxiliaryAgreement.vendPortion>/g, obj, "vendPortion", base.to_string, sub, context);
                base.parse_element (/<cim:AuxiliaryAgreement.vendPortionArrear>([\s\S]*?)<\/cim:AuxiliaryAgreement.vendPortionArrear>/g, obj, "vendPortionArrear", base.to_string, sub, context);
                base.parse_attribute (/<cim:AuxiliaryAgreement.CustomerAgreement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAgreement", sub, context);
                base.parse_attributes (/<cim:AuxiliaryAgreement.AuxiliaryAccounts\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AuxiliaryAccounts", sub, context);
                var bucket = context.parsed.AuxiliaryAgreement;
                if (null == bucket)
                   context.parsed.AuxiliaryAgreement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Agreement.prototype.export.call (this, obj, false);

                base.export_element (obj, "AuxiliaryAgreement", "arrearsInterest", "arrearsInterest",  base.from_string, fields);
                base.export_element (obj, "AuxiliaryAgreement", "auxCycle", "auxCycle",  base.from_string, fields);
                base.export_element (obj, "AuxiliaryAgreement", "auxPriorityCode", "auxPriorityCode",  base.from_string, fields);
                base.export_element (obj, "AuxiliaryAgreement", "fixedAmount", "fixedAmount",  base.from_string, fields);
                base.export_element (obj, "AuxiliaryAgreement", "minAmount", "minAmount",  base.from_string, fields);
                base.export_element (obj, "AuxiliaryAgreement", "payCycle", "payCycle",  base.from_string, fields);
                base.export_element (obj, "AuxiliaryAgreement", "subType", "subType",  base.from_string, fields);
                base.export_element (obj, "AuxiliaryAgreement", "vendPortion", "vendPortion",  base.from_string, fields);
                base.export_element (obj, "AuxiliaryAgreement", "vendPortionArrear", "vendPortionArrear",  base.from_string, fields);
                base.export_attribute (obj, "AuxiliaryAgreement", "CustomerAgreement", "CustomerAgreement", fields);
                base.export_attributes (obj, "AuxiliaryAgreement", "AuxiliaryAccounts", "AuxiliaryAccounts", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AuxiliaryAgreement_collapse" aria-expanded="true" aria-controls="AuxiliaryAgreement_collapse" style="margin-left: 10px;">AuxiliaryAgreement</a></legend>
                    <div id="AuxiliaryAgreement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.template.call (this) +
                    `
                    {{#arrearsInterest}}<div><b>arrearsInterest</b>: {{arrearsInterest}}</div>{{/arrearsInterest}}
                    {{#auxCycle}}<div><b>auxCycle</b>: {{auxCycle}}</div>{{/auxCycle}}
                    {{#auxPriorityCode}}<div><b>auxPriorityCode</b>: {{auxPriorityCode}}</div>{{/auxPriorityCode}}
                    {{#fixedAmount}}<div><b>fixedAmount</b>: {{fixedAmount}}</div>{{/fixedAmount}}
                    {{#minAmount}}<div><b>minAmount</b>: {{minAmount}}</div>{{/minAmount}}
                    {{#payCycle}}<div><b>payCycle</b>: {{payCycle}}</div>{{/payCycle}}
                    {{#subType}}<div><b>subType</b>: {{subType}}</div>{{/subType}}
                    {{#vendPortion}}<div><b>vendPortion</b>: {{vendPortion}}</div>{{/vendPortion}}
                    {{#vendPortionArrear}}<div><b>vendPortionArrear</b>: {{vendPortionArrear}}</div>{{/vendPortionArrear}}
                    {{#CustomerAgreement}}<div><b>CustomerAgreement</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CustomerAgreement}}&quot;);})'>{{CustomerAgreement}}</a></div>{{/CustomerAgreement}}
                    {{#AuxiliaryAccounts}}<div><b>AuxiliaryAccounts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/AuxiliaryAccounts}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.AuxiliaryAccounts) obj.AuxiliaryAccounts_string = obj.AuxiliaryAccounts.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.AuxiliaryAccounts_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AuxiliaryAgreement_collapse" aria-expanded="true" aria-controls="AuxiliaryAgreement_collapse" style="margin-left: 10px;">AuxiliaryAgreement</a></legend>
                    <div id="AuxiliaryAgreement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='arrearsInterest'>arrearsInterest: </label><div class='col-sm-8'><input id='arrearsInterest' class='form-control' type='text'{{#arrearsInterest}} value='{{arrearsInterest}}'{{/arrearsInterest}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='auxCycle'>auxCycle: </label><div class='col-sm-8'><input id='auxCycle' class='form-control' type='text'{{#auxCycle}} value='{{auxCycle}}'{{/auxCycle}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='auxPriorityCode'>auxPriorityCode: </label><div class='col-sm-8'><input id='auxPriorityCode' class='form-control' type='text'{{#auxPriorityCode}} value='{{auxPriorityCode}}'{{/auxPriorityCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='fixedAmount'>fixedAmount: </label><div class='col-sm-8'><input id='fixedAmount' class='form-control' type='text'{{#fixedAmount}} value='{{fixedAmount}}'{{/fixedAmount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minAmount'>minAmount: </label><div class='col-sm-8'><input id='minAmount' class='form-control' type='text'{{#minAmount}} value='{{minAmount}}'{{/minAmount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='payCycle'>payCycle: </label><div class='col-sm-8'><input id='payCycle' class='form-control' type='text'{{#payCycle}} value='{{payCycle}}'{{/payCycle}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='subType'>subType: </label><div class='col-sm-8'><input id='subType' class='form-control' type='text'{{#subType}} value='{{subType}}'{{/subType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vendPortion'>vendPortion: </label><div class='col-sm-8'><input id='vendPortion' class='form-control' type='text'{{#vendPortion}} value='{{vendPortion}}'{{/vendPortion}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vendPortionArrear'>vendPortionArrear: </label><div class='col-sm-8'><input id='vendPortionArrear' class='form-control' type='text'{{#vendPortionArrear}} value='{{vendPortionArrear}}'{{/vendPortionArrear}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CustomerAgreement'>CustomerAgreement: </label><div class='col-sm-8'><input id='CustomerAgreement' class='form-control' type='text'{{#CustomerAgreement}} value='{{CustomerAgreement}}'{{/CustomerAgreement}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "AuxiliaryAgreement" };
                super.submit (obj);
                temp = document.getElementById ("arrearsInterest").value; if ("" != temp) obj.arrearsInterest = temp;
                temp = document.getElementById ("auxCycle").value; if ("" != temp) obj.auxCycle = temp;
                temp = document.getElementById ("auxPriorityCode").value; if ("" != temp) obj.auxPriorityCode = temp;
                temp = document.getElementById ("fixedAmount").value; if ("" != temp) obj.fixedAmount = temp;
                temp = document.getElementById ("minAmount").value; if ("" != temp) obj.minAmount = temp;
                temp = document.getElementById ("payCycle").value; if ("" != temp) obj.payCycle = temp;
                temp = document.getElementById ("subType").value; if ("" != temp) obj.subType = temp;
                temp = document.getElementById ("vendPortion").value; if ("" != temp) obj.vendPortion = temp;
                temp = document.getElementById ("vendPortionArrear").value; if ("" != temp) obj.vendPortionArrear = temp;
                temp = document.getElementById ("CustomerAgreement").value; if ("" != temp) obj.CustomerAgreement = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["CustomerAgreement", "CustomerAgreement", "0..1", "0..*"],
                        ["AuxiliaryAccounts", "AuxiliaryAccount", "1..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * The entity that owns the point of sale and contracts with the cashier to receipt payments and vend tokens using the payment system.
         *
         * The vendor has a private contract with and is managed by the merchant which is a type of organisation. The vendor is accountable to the merchant for revenue collected, and the merchant is in turn accountable to the supplier.
         *
         */
        class Vendor extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Vendor;
                if (null == bucket)
                   cim_data.Vendor = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Vendor[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Vendor";
                base.parse_attributes (/<cim:Vendor.VendorShifts\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "VendorShifts", sub, context);
                var bucket = context.parsed.Vendor;
                if (null == bucket)
                   context.parsed.Vendor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "Vendor", "VendorShifts", "VendorShifts", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Vendor_collapse" aria-expanded="true" aria-controls="Vendor_collapse" style="margin-left: 10px;">Vendor</a></legend>
                    <div id="Vendor_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#VendorShifts}}<div><b>VendorShifts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/VendorShifts}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.VendorShifts) obj.VendorShifts_string = obj.VendorShifts.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.VendorShifts_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Vendor_collapse" aria-expanded="true" aria-controls="Vendor_collapse" style="margin-left: 10px;">Vendor</a></legend>
                    <div id="Vendor_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var obj = obj || { cls: "Vendor" };
                super.submit (obj);

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["VendorShifts", "VendorShift", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Details of a bank account.
         *
         */
        class BankAccountDetail extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BankAccountDetail;
                if (null == bucket)
                   cim_data.BankAccountDetail = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BankAccountDetail[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "BankAccountDetail";
                base.parse_element (/<cim:BankAccountDetail.accountNumber>([\s\S]*?)<\/cim:BankAccountDetail.accountNumber>/g, obj, "accountNumber", base.to_string, sub, context);
                base.parse_element (/<cim:BankAccountDetail.bankName>([\s\S]*?)<\/cim:BankAccountDetail.bankName>/g, obj, "bankName", base.to_string, sub, context);
                base.parse_element (/<cim:BankAccountDetail.branchCode>([\s\S]*?)<\/cim:BankAccountDetail.branchCode>/g, obj, "branchCode", base.to_string, sub, context);
                base.parse_element (/<cim:BankAccountDetail.holderID>([\s\S]*?)<\/cim:BankAccountDetail.holderID>/g, obj, "holderID", base.to_string, sub, context);
                base.parse_element (/<cim:BankAccountDetail.holderName>([\s\S]*?)<\/cim:BankAccountDetail.holderName>/g, obj, "holderName", base.to_string, sub, context);
                var bucket = context.parsed.BankAccountDetail;
                if (null == bucket)
                   context.parsed.BankAccountDetail = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "BankAccountDetail", "accountNumber", "accountNumber",  base.from_string, fields);
                base.export_element (obj, "BankAccountDetail", "bankName", "bankName",  base.from_string, fields);
                base.export_element (obj, "BankAccountDetail", "branchCode", "branchCode",  base.from_string, fields);
                base.export_element (obj, "BankAccountDetail", "holderID", "holderID",  base.from_string, fields);
                base.export_element (obj, "BankAccountDetail", "holderName", "holderName",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BankAccountDetail_collapse" aria-expanded="true" aria-controls="BankAccountDetail_collapse" style="margin-left: 10px;">BankAccountDetail</a></legend>
                    <div id="BankAccountDetail_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#accountNumber}}<div><b>accountNumber</b>: {{accountNumber}}</div>{{/accountNumber}}
                    {{#bankName}}<div><b>bankName</b>: {{bankName}}</div>{{/bankName}}
                    {{#branchCode}}<div><b>branchCode</b>: {{branchCode}}</div>{{/branchCode}}
                    {{#holderID}}<div><b>holderID</b>: {{holderID}}</div>{{/holderID}}
                    {{#holderName}}<div><b>holderName</b>: {{holderName}}</div>{{/holderName}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BankAccountDetail_collapse" aria-expanded="true" aria-controls="BankAccountDetail_collapse" style="margin-left: 10px;">BankAccountDetail</a></legend>
                    <div id="BankAccountDetail_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='accountNumber'>accountNumber: </label><div class='col-sm-8'><input id='accountNumber' class='form-control' type='text'{{#accountNumber}} value='{{accountNumber}}'{{/accountNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='bankName'>bankName: </label><div class='col-sm-8'><input id='bankName' class='form-control' type='text'{{#bankName}} value='{{bankName}}'{{/bankName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='branchCode'>branchCode: </label><div class='col-sm-8'><input id='branchCode' class='form-control' type='text'{{#branchCode}} value='{{branchCode}}'{{/branchCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='holderID'>holderID: </label><div class='col-sm-8'><input id='holderID' class='form-control' type='text'{{#holderID}} value='{{holderID}}'{{/holderID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='holderName'>holderName: </label><div class='col-sm-8'><input id='holderName' class='form-control' type='text'{{#holderName}} value='{{holderName}}'{{/holderName}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "BankAccountDetail" };
                super.submit (obj);
                temp = document.getElementById ("accountNumber").value; if ("" != temp) obj.accountNumber = temp;
                temp = document.getElementById ("bankName").value; if ("" != temp) obj.bankName = temp;
                temp = document.getElementById ("branchCode").value; if ("" != temp) obj.branchCode = temp;
                temp = document.getElementById ("holderID").value; if ("" != temp) obj.holderID = temp;
                temp = document.getElementById ("holderName").value; if ("" != temp) obj.holderName = temp;

                return (obj);
            }
        }

        /**
         * Logical point where transactions take place with operational interaction between cashier and the payment system; in certain cases the point of sale interacts directly with the end customer, in which case the cashier might not be a real person: for example a self-service kiosk or over the internet.
         *
         */
        class PointOfSale extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PointOfSale;
                if (null == bucket)
                   cim_data.PointOfSale = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PointOfSale[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "PointOfSale";
                base.parse_element (/<cim:PointOfSale.location>([\s\S]*?)<\/cim:PointOfSale.location>/g, obj, "location", base.to_string, sub, context);
                base.parse_attributes (/<cim:PointOfSale.CashierShifts\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CashierShifts", sub, context);
                var bucket = context.parsed.PointOfSale;
                if (null == bucket)
                   context.parsed.PointOfSale = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "PointOfSale", "location", "location",  base.from_string, fields);
                base.export_attributes (obj, "PointOfSale", "CashierShifts", "CashierShifts", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PointOfSale_collapse" aria-expanded="true" aria-controls="PointOfSale_collapse" style="margin-left: 10px;">PointOfSale</a></legend>
                    <div id="PointOfSale_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#location}}<div><b>location</b>: {{location}}</div>{{/location}}
                    {{#CashierShifts}}<div><b>CashierShifts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CashierShifts}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.CashierShifts) obj.CashierShifts_string = obj.CashierShifts.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.CashierShifts_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PointOfSale_collapse" aria-expanded="true" aria-controls="PointOfSale_collapse" style="margin-left: 10px;">PointOfSale</a></legend>
                    <div id="PointOfSale_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='location'>location: </label><div class='col-sm-8'><input id='location' class='form-control' type='text'{{#location}} value='{{location}}'{{/location}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "PointOfSale" };
                super.submit (obj);
                temp = document.getElementById ("location").value; if ("" != temp) obj.location = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["CashierShifts", "CashierShift", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Generally referring to a period of operation or work performed.
         *
         * Whether the shift is open/closed can be derived from attributes 'activityInterval.start' and 'activityInterval.end'.
         *
         */
        class Shift extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Shift;
                if (null == bucket)
                   cim_data.Shift = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Shift[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Shift";
                base.parse_element (/<cim:Shift.activityInterval>([\s\S]*?)<\/cim:Shift.activityInterval>/g, obj, "activityInterval", base.to_string, sub, context);
                base.parse_element (/<cim:Shift.receiptsGrandTotalBankable>([\s\S]*?)<\/cim:Shift.receiptsGrandTotalBankable>/g, obj, "receiptsGrandTotalBankable", base.to_string, sub, context);
                base.parse_element (/<cim:Shift.receiptsGrandTotalNonBankable>([\s\S]*?)<\/cim:Shift.receiptsGrandTotalNonBankable>/g, obj, "receiptsGrandTotalNonBankable", base.to_string, sub, context);
                base.parse_element (/<cim:Shift.receiptsGrandTotalRounding>([\s\S]*?)<\/cim:Shift.receiptsGrandTotalRounding>/g, obj, "receiptsGrandTotalRounding", base.to_string, sub, context);
                base.parse_element (/<cim:Shift.transactionsGrandTotal>([\s\S]*?)<\/cim:Shift.transactionsGrandTotal>/g, obj, "transactionsGrandTotal", base.to_string, sub, context);
                base.parse_element (/<cim:Shift.transactionsGrandTotalRounding>([\s\S]*?)<\/cim:Shift.transactionsGrandTotalRounding>/g, obj, "transactionsGrandTotalRounding", base.to_string, sub, context);
                var bucket = context.parsed.Shift;
                if (null == bucket)
                   context.parsed.Shift = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Shift", "activityInterval", "activityInterval",  base.from_string, fields);
                base.export_element (obj, "Shift", "receiptsGrandTotalBankable", "receiptsGrandTotalBankable",  base.from_string, fields);
                base.export_element (obj, "Shift", "receiptsGrandTotalNonBankable", "receiptsGrandTotalNonBankable",  base.from_string, fields);
                base.export_element (obj, "Shift", "receiptsGrandTotalRounding", "receiptsGrandTotalRounding",  base.from_string, fields);
                base.export_element (obj, "Shift", "transactionsGrandTotal", "transactionsGrandTotal",  base.from_string, fields);
                base.export_element (obj, "Shift", "transactionsGrandTotalRounding", "transactionsGrandTotalRounding",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Shift_collapse" aria-expanded="true" aria-controls="Shift_collapse" style="margin-left: 10px;">Shift</a></legend>
                    <div id="Shift_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#activityInterval}}<div><b>activityInterval</b>: {{activityInterval}}</div>{{/activityInterval}}
                    {{#receiptsGrandTotalBankable}}<div><b>receiptsGrandTotalBankable</b>: {{receiptsGrandTotalBankable}}</div>{{/receiptsGrandTotalBankable}}
                    {{#receiptsGrandTotalNonBankable}}<div><b>receiptsGrandTotalNonBankable</b>: {{receiptsGrandTotalNonBankable}}</div>{{/receiptsGrandTotalNonBankable}}
                    {{#receiptsGrandTotalRounding}}<div><b>receiptsGrandTotalRounding</b>: {{receiptsGrandTotalRounding}}</div>{{/receiptsGrandTotalRounding}}
                    {{#transactionsGrandTotal}}<div><b>transactionsGrandTotal</b>: {{transactionsGrandTotal}}</div>{{/transactionsGrandTotal}}
                    {{#transactionsGrandTotalRounding}}<div><b>transactionsGrandTotalRounding</b>: {{transactionsGrandTotalRounding}}</div>{{/transactionsGrandTotalRounding}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Shift_collapse" aria-expanded="true" aria-controls="Shift_collapse" style="margin-left: 10px;">Shift</a></legend>
                    <div id="Shift_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='activityInterval'>activityInterval: </label><div class='col-sm-8'><input id='activityInterval' class='form-control' type='text'{{#activityInterval}} value='{{activityInterval}}'{{/activityInterval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='receiptsGrandTotalBankable'>receiptsGrandTotalBankable: </label><div class='col-sm-8'><input id='receiptsGrandTotalBankable' class='form-control' type='text'{{#receiptsGrandTotalBankable}} value='{{receiptsGrandTotalBankable}}'{{/receiptsGrandTotalBankable}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='receiptsGrandTotalNonBankable'>receiptsGrandTotalNonBankable: </label><div class='col-sm-8'><input id='receiptsGrandTotalNonBankable' class='form-control' type='text'{{#receiptsGrandTotalNonBankable}} value='{{receiptsGrandTotalNonBankable}}'{{/receiptsGrandTotalNonBankable}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='receiptsGrandTotalRounding'>receiptsGrandTotalRounding: </label><div class='col-sm-8'><input id='receiptsGrandTotalRounding' class='form-control' type='text'{{#receiptsGrandTotalRounding}} value='{{receiptsGrandTotalRounding}}'{{/receiptsGrandTotalRounding}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='transactionsGrandTotal'>transactionsGrandTotal: </label><div class='col-sm-8'><input id='transactionsGrandTotal' class='form-control' type='text'{{#transactionsGrandTotal}} value='{{transactionsGrandTotal}}'{{/transactionsGrandTotal}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='transactionsGrandTotalRounding'>transactionsGrandTotalRounding: </label><div class='col-sm-8'><input id='transactionsGrandTotalRounding' class='form-control' type='text'{{#transactionsGrandTotalRounding}} value='{{transactionsGrandTotalRounding}}'{{/transactionsGrandTotalRounding}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Shift" };
                super.submit (obj);
                temp = document.getElementById ("activityInterval").value; if ("" != temp) obj.activityInterval = temp;
                temp = document.getElementById ("receiptsGrandTotalBankable").value; if ("" != temp) obj.receiptsGrandTotalBankable = temp;
                temp = document.getElementById ("receiptsGrandTotalNonBankable").value; if ("" != temp) obj.receiptsGrandTotalNonBankable = temp;
                temp = document.getElementById ("receiptsGrandTotalRounding").value; if ("" != temp) obj.receiptsGrandTotalRounding = temp;
                temp = document.getElementById ("transactionsGrandTotal").value; if ("" != temp) obj.transactionsGrandTotal = temp;
                temp = document.getElementById ("transactionsGrandTotalRounding").value; if ("" != temp) obj.transactionsGrandTotalRounding = temp;

                return (obj);
            }
        }

        /**
         * Details on an amount line, with rounding, date and note.
         *
         */
        class LineDetail extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LineDetail;
                if (null == bucket)
                   cim_data.LineDetail = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LineDetail[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "LineDetail";
                base.parse_element (/<cim:LineDetail.amount>([\s\S]*?)<\/cim:LineDetail.amount>/g, obj, "amount", base.to_string, sub, context);
                base.parse_element (/<cim:LineDetail.dateTime>([\s\S]*?)<\/cim:LineDetail.dateTime>/g, obj, "dateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:LineDetail.note>([\s\S]*?)<\/cim:LineDetail.note>/g, obj, "note", base.to_string, sub, context);
                base.parse_element (/<cim:LineDetail.rounding>([\s\S]*?)<\/cim:LineDetail.rounding>/g, obj, "rounding", base.to_string, sub, context);
                var bucket = context.parsed.LineDetail;
                if (null == bucket)
                   context.parsed.LineDetail = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "LineDetail", "amount", "amount",  base.from_string, fields);
                base.export_element (obj, "LineDetail", "dateTime", "dateTime",  base.from_datetime, fields);
                base.export_element (obj, "LineDetail", "note", "note",  base.from_string, fields);
                base.export_element (obj, "LineDetail", "rounding", "rounding",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LineDetail_collapse" aria-expanded="true" aria-controls="LineDetail_collapse" style="margin-left: 10px;">LineDetail</a></legend>
                    <div id="LineDetail_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#amount}}<div><b>amount</b>: {{amount}}</div>{{/amount}}
                    {{#dateTime}}<div><b>dateTime</b>: {{dateTime}}</div>{{/dateTime}}
                    {{#note}}<div><b>note</b>: {{note}}</div>{{/note}}
                    {{#rounding}}<div><b>rounding</b>: {{rounding}}</div>{{/rounding}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LineDetail_collapse" aria-expanded="true" aria-controls="LineDetail_collapse" style="margin-left: 10px;">LineDetail</a></legend>
                    <div id="LineDetail_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='amount'>amount: </label><div class='col-sm-8'><input id='amount' class='form-control' type='text'{{#amount}} value='{{amount}}'{{/amount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dateTime'>dateTime: </label><div class='col-sm-8'><input id='dateTime' class='form-control' type='text'{{#dateTime}} value='{{dateTime}}'{{/dateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='note'>note: </label><div class='col-sm-8'><input id='note' class='form-control' type='text'{{#note}} value='{{note}}'{{/note}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rounding'>rounding: </label><div class='col-sm-8'><input id='rounding' class='form-control' type='text'{{#rounding}} value='{{rounding}}'{{/rounding}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "LineDetail" };
                super.submit (obj);
                temp = document.getElementById ("amount").value; if ("" != temp) obj.amount = temp;
                temp = document.getElementById ("dateTime").value; if ("" != temp) obj.dateTime = temp;
                temp = document.getElementById ("note").value; if ("" != temp) obj.note = temp;
                temp = document.getElementById ("rounding").value; if ("" != temp) obj.rounding = temp;

                return (obj);
            }
        }

        /**
         * The operator of the point of sale for the duration of CashierShift.
         *
         * Cashier is under the exclusive management control of Vendor.
         *
         */
        class Cashier extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Cashier;
                if (null == bucket)
                   cim_data.Cashier = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Cashier[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Cashier";
                base.parse_element (/<cim:Cashier.electronicAddress>([\s\S]*?)<\/cim:Cashier.electronicAddress>/g, obj, "electronicAddress", base.to_string, sub, context);
                base.parse_attributes (/<cim:Cashier.CashierShifts\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CashierShifts", sub, context);
                var bucket = context.parsed.Cashier;
                if (null == bucket)
                   context.parsed.Cashier = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Cashier", "electronicAddress", "electronicAddress",  base.from_string, fields);
                base.export_attributes (obj, "Cashier", "CashierShifts", "CashierShifts", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Cashier_collapse" aria-expanded="true" aria-controls="Cashier_collapse" style="margin-left: 10px;">Cashier</a></legend>
                    <div id="Cashier_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#electronicAddress}}<div><b>electronicAddress</b>: {{electronicAddress}}</div>{{/electronicAddress}}
                    {{#CashierShifts}}<div><b>CashierShifts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CashierShifts}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.CashierShifts) obj.CashierShifts_string = obj.CashierShifts.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.CashierShifts_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Cashier_collapse" aria-expanded="true" aria-controls="Cashier_collapse" style="margin-left: 10px;">Cashier</a></legend>
                    <div id="Cashier_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='electronicAddress'>electronicAddress: </label><div class='col-sm-8'><input id='electronicAddress' class='form-control' type='text'{{#electronicAddress}} value='{{electronicAddress}}'{{/electronicAddress}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Cashier" };
                super.submit (obj);
                temp = document.getElementById ("electronicAddress").value; if ("" != temp) obj.electronicAddress = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["CashierShifts", "CashierShift", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Organisation that provides services to customers.
         *
         */
        class ServiceSupplier extends Common.OrganisationRole
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ServiceSupplier;
                if (null == bucket)
                   cim_data.ServiceSupplier = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ServiceSupplier[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.OrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "ServiceSupplier";
                base.parse_element (/<cim:ServiceSupplier.issuerIdentificationNumber>([\s\S]*?)<\/cim:ServiceSupplier.issuerIdentificationNumber>/g, obj, "issuerIdentificationNumber", base.to_string, sub, context);
                base.parse_attribute (/<cim:ServiceSupplier.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attributes (/<cim:ServiceSupplier.CustomerAgreements\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAgreements", sub, context);
                base.parse_attributes (/<cim:ServiceSupplier.BankAccounts\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BankAccounts", sub, context);
                base.parse_attributes (/<cim:ServiceSupplier.UsagePoints\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UsagePoints", sub, context);
                var bucket = context.parsed.ServiceSupplier;
                if (null == bucket)
                   context.parsed.ServiceSupplier = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.OrganisationRole.prototype.export.call (this, obj, false);

                base.export_element (obj, "ServiceSupplier", "issuerIdentificationNumber", "issuerIdentificationNumber",  base.from_string, fields);
                base.export_element (obj, "ServiceSupplier", "kind", "kind",  base.from_string, fields);
                base.export_attributes (obj, "ServiceSupplier", "CustomerAgreements", "CustomerAgreements", fields);
                base.export_attributes (obj, "ServiceSupplier", "BankAccounts", "BankAccounts", fields);
                base.export_attributes (obj, "ServiceSupplier", "UsagePoints", "UsagePoints", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ServiceSupplier_collapse" aria-expanded="true" aria-controls="ServiceSupplier_collapse" style="margin-left: 10px;">ServiceSupplier</a></legend>
                    <div id="ServiceSupplier_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.template.call (this) +
                    `
                    {{#issuerIdentificationNumber}}<div><b>issuerIdentificationNumber</b>: {{issuerIdentificationNumber}}</div>{{/issuerIdentificationNumber}}
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#CustomerAgreements}}<div><b>CustomerAgreements</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CustomerAgreements}}
                    {{#BankAccounts}}<div><b>BankAccounts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/BankAccounts}}
                    {{#UsagePoints}}<div><b>UsagePoints</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/UsagePoints}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.SupplierKind = []; if (!obj.kind) obj.SupplierKind.push ({ id: '', selected: true}); for (var property in SupplierKind) obj.SupplierKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
                if (obj.CustomerAgreements) obj.CustomerAgreements_string = obj.CustomerAgreements.join ();
                if (obj.BankAccounts) obj.BankAccounts_string = obj.BankAccounts.join ();
                if (obj.UsagePoints) obj.UsagePoints_string = obj.UsagePoints.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.SupplierKind;
                delete obj.CustomerAgreements_string;
                delete obj.BankAccounts_string;
                delete obj.UsagePoints_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ServiceSupplier_collapse" aria-expanded="true" aria-controls="ServiceSupplier_collapse" style="margin-left: 10px;">ServiceSupplier</a></legend>
                    <div id="ServiceSupplier_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='issuerIdentificationNumber'>issuerIdentificationNumber: </label><div class='col-sm-8'><input id='issuerIdentificationNumber' class='form-control' type='text'{{#issuerIdentificationNumber}} value='{{issuerIdentificationNumber}}'{{/issuerIdentificationNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#SupplierKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/SupplierKind}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ServiceSupplier" };
                super.submit (obj);
                temp = document.getElementById ("issuerIdentificationNumber").value; if ("" != temp) obj.issuerIdentificationNumber = temp;
                temp = document.getElementById ("kind").value; if ("" != temp) { temp = SupplierKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#SupplierKind." + temp; }

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["CustomerAgreements", "CustomerAgreement", "0..*", "1"],
                        ["BankAccounts", "BankAccount", "0..*", "0..1"],
                        ["UsagePoints", "UsagePoint", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * The actual tender when it is a type of cheque.
         *
         */
        class Cheque extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Cheque;
                if (null == bucket)
                   cim_data.Cheque = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Cheque[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Cheque";
                base.parse_element (/<cim:Cheque.bankAccountDetail>([\s\S]*?)<\/cim:Cheque.bankAccountDetail>/g, obj, "bankAccountDetail", base.to_string, sub, context);
                base.parse_element (/<cim:Cheque.chequeNumber>([\s\S]*?)<\/cim:Cheque.chequeNumber>/g, obj, "chequeNumber", base.to_string, sub, context);
                base.parse_element (/<cim:Cheque.date>([\s\S]*?)<\/cim:Cheque.date>/g, obj, "date", base.to_string, sub, context);
                base.parse_attribute (/<cim:Cheque.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:Cheque.micrNumber>([\s\S]*?)<\/cim:Cheque.micrNumber>/g, obj, "micrNumber", base.to_string, sub, context);
                base.parse_attribute (/<cim:Cheque.Tender\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Tender", sub, context);
                var bucket = context.parsed.Cheque;
                if (null == bucket)
                   context.parsed.Cheque = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Cheque", "bankAccountDetail", "bankAccountDetail",  base.from_string, fields);
                base.export_element (obj, "Cheque", "chequeNumber", "chequeNumber",  base.from_string, fields);
                base.export_element (obj, "Cheque", "date", "date",  base.from_string, fields);
                base.export_element (obj, "Cheque", "kind", "kind",  base.from_string, fields);
                base.export_element (obj, "Cheque", "micrNumber", "micrNumber",  base.from_string, fields);
                base.export_attribute (obj, "Cheque", "Tender", "Tender", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Cheque_collapse" aria-expanded="true" aria-controls="Cheque_collapse" style="margin-left: 10px;">Cheque</a></legend>
                    <div id="Cheque_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#bankAccountDetail}}<div><b>bankAccountDetail</b>: {{bankAccountDetail}}</div>{{/bankAccountDetail}}
                    {{#chequeNumber}}<div><b>chequeNumber</b>: {{chequeNumber}}</div>{{/chequeNumber}}
                    {{#date}}<div><b>date</b>: {{date}}</div>{{/date}}
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#micrNumber}}<div><b>micrNumber</b>: {{micrNumber}}</div>{{/micrNumber}}
                    {{#Tender}}<div><b>Tender</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Tender}}&quot;);})'>{{Tender}}</a></div>{{/Tender}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ChequeKind = []; if (!obj.kind) obj.ChequeKind.push ({ id: '', selected: true}); for (var property in ChequeKind) obj.ChequeKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ChequeKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Cheque_collapse" aria-expanded="true" aria-controls="Cheque_collapse" style="margin-left: 10px;">Cheque</a></legend>
                    <div id="Cheque_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='bankAccountDetail'>bankAccountDetail: </label><div class='col-sm-8'><input id='bankAccountDetail' class='form-control' type='text'{{#bankAccountDetail}} value='{{bankAccountDetail}}'{{/bankAccountDetail}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='chequeNumber'>chequeNumber: </label><div class='col-sm-8'><input id='chequeNumber' class='form-control' type='text'{{#chequeNumber}} value='{{chequeNumber}}'{{/chequeNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='date'>date: </label><div class='col-sm-8'><input id='date' class='form-control' type='text'{{#date}} value='{{date}}'{{/date}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#ChequeKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ChequeKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='micrNumber'>micrNumber: </label><div class='col-sm-8'><input id='micrNumber' class='form-control' type='text'{{#micrNumber}} value='{{micrNumber}}'{{/micrNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Tender'>Tender: </label><div class='col-sm-8'><input id='Tender' class='form-control' type='text'{{#Tender}} value='{{Tender}}'{{/Tender}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Cheque" };
                super.submit (obj);
                temp = document.getElementById ("bankAccountDetail").value; if ("" != temp) obj.bankAccountDetail = temp;
                temp = document.getElementById ("chequeNumber").value; if ("" != temp) obj.chequeNumber = temp;
                temp = document.getElementById ("date").value; if ("" != temp) obj.date = temp;
                temp = document.getElementById ("kind").value; if ("" != temp) { temp = ChequeKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#ChequeKind." + temp; }
                temp = document.getElementById ("micrNumber").value; if ("" != temp) obj.micrNumber = temp;
                temp = document.getElementById ("Tender").value; if ("" != temp) obj.Tender = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Tender", "Tender", "1", "0..1"]
                    ]
                );
            }
        }

        /**
         * Tender is what is "offered" by the customer towards making a payment and is often more than the required payment (hence the need for 'change').
         *
         * The payment is thus that part of the Tender that goes towards settlement of a particular transaction.
         *
         */
        class Tender extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Tender;
                if (null == bucket)
                   cim_data.Tender = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Tender[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Tender";
                base.parse_element (/<cim:Tender.amount>([\s\S]*?)<\/cim:Tender.amount>/g, obj, "amount", base.to_string, sub, context);
                base.parse_element (/<cim:Tender.change>([\s\S]*?)<\/cim:Tender.change>/g, obj, "change", base.to_string, sub, context);
                base.parse_attribute (/<cim:Tender.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:Tender.Cheque\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Cheque", sub, context);
                base.parse_attribute (/<cim:Tender.Card\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Card", sub, context);
                base.parse_attribute (/<cim:Tender.Receipt\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Receipt", sub, context);
                var bucket = context.parsed.Tender;
                if (null == bucket)
                   context.parsed.Tender = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Tender", "amount", "amount",  base.from_string, fields);
                base.export_element (obj, "Tender", "change", "change",  base.from_string, fields);
                base.export_element (obj, "Tender", "kind", "kind",  base.from_string, fields);
                base.export_attribute (obj, "Tender", "Cheque", "Cheque", fields);
                base.export_attribute (obj, "Tender", "Card", "Card", fields);
                base.export_attribute (obj, "Tender", "Receipt", "Receipt", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Tender_collapse" aria-expanded="true" aria-controls="Tender_collapse" style="margin-left: 10px;">Tender</a></legend>
                    <div id="Tender_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#amount}}<div><b>amount</b>: {{amount}}</div>{{/amount}}
                    {{#change}}<div><b>change</b>: {{change}}</div>{{/change}}
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#Cheque}}<div><b>Cheque</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Cheque}}&quot;);})'>{{Cheque}}</a></div>{{/Cheque}}
                    {{#Card}}<div><b>Card</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Card}}&quot;);})'>{{Card}}</a></div>{{/Card}}
                    {{#Receipt}}<div><b>Receipt</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Receipt}}&quot;);})'>{{Receipt}}</a></div>{{/Receipt}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.TenderKind = []; if (!obj.kind) obj.TenderKind.push ({ id: '', selected: true}); for (var property in TenderKind) obj.TenderKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TenderKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Tender_collapse" aria-expanded="true" aria-controls="Tender_collapse" style="margin-left: 10px;">Tender</a></legend>
                    <div id="Tender_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='amount'>amount: </label><div class='col-sm-8'><input id='amount' class='form-control' type='text'{{#amount}} value='{{amount}}'{{/amount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='change'>change: </label><div class='col-sm-8'><input id='change' class='form-control' type='text'{{#change}} value='{{change}}'{{/change}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#TenderKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/TenderKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Cheque'>Cheque: </label><div class='col-sm-8'><input id='Cheque' class='form-control' type='text'{{#Cheque}} value='{{Cheque}}'{{/Cheque}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Card'>Card: </label><div class='col-sm-8'><input id='Card' class='form-control' type='text'{{#Card}} value='{{Card}}'{{/Card}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Receipt'>Receipt: </label><div class='col-sm-8'><input id='Receipt' class='form-control' type='text'{{#Receipt}} value='{{Receipt}}'{{/Receipt}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Tender" };
                super.submit (obj);
                temp = document.getElementById ("amount").value; if ("" != temp) obj.amount = temp;
                temp = document.getElementById ("change").value; if ("" != temp) obj.change = temp;
                temp = document.getElementById ("kind").value; if ("" != temp) { temp = TenderKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#TenderKind." + temp; }
                temp = document.getElementById ("Cheque").value; if ("" != temp) obj.Cheque = temp;
                temp = document.getElementById ("Card").value; if ("" != temp) obj.Card = temp;
                temp = document.getElementById ("Receipt").value; if ("" != temp) obj.Receipt = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Cheque", "Cheque", "0..1", "1"],
                        ["Card", "Card", "0..1", "1"],
                        ["Receipt", "Receipt", "1", "1..*"]
                    ]
                );
            }
        }

        /**
         * The entity that ultimately executes the transaction and which is in control of the process; typically this is embodied in secure software running on a server that may employ secure hardware encryption devices for secure transaction processing.
         *
         */
        class Transactor extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Transactor;
                if (null == bucket)
                   cim_data.Transactor = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Transactor[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Transactor";
                base.parse_attributes (/<cim:Transactor.MerchantAccounts\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MerchantAccounts", sub, context);
                var bucket = context.parsed.Transactor;
                if (null == bucket)
                   context.parsed.Transactor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "Transactor", "MerchantAccounts", "MerchantAccounts", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Transactor_collapse" aria-expanded="true" aria-controls="Transactor_collapse" style="margin-left: 10px;">Transactor</a></legend>
                    <div id="Transactor_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#MerchantAccounts}}<div><b>MerchantAccounts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MerchantAccounts}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.MerchantAccounts) obj.MerchantAccounts_string = obj.MerchantAccounts.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.MerchantAccounts_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Transactor_collapse" aria-expanded="true" aria-controls="Transactor_collapse" style="margin-left: 10px;">Transactor</a></legend>
                    <div id="Transactor_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MerchantAccounts'>MerchantAccounts: </label><div class='col-sm-8'><input id='MerchantAccounts' class='form-control' type='text'{{#MerchantAccounts}} value='{{MerchantAccounts}}_string'{{/MerchantAccounts}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Transactor" };
                super.submit (obj);
                temp = document.getElementById ("MerchantAccounts").value; if ("" != temp) obj.MerchantAccounts = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["MerchantAccounts", "MerchantAccount", "0..*", "0..*"]
                    ]
                );
            }
        }

        /**
         * Variable and dynamic part of auxiliary agreement, generally representing the current state of the account related to the outstanding balance defined in auxiliary agreement.
         *
         */
        class AuxiliaryAccount extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AuxiliaryAccount;
                if (null == bucket)
                   cim_data.AuxiliaryAccount = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AuxiliaryAccount[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "AuxiliaryAccount";
                base.parse_element (/<cim:AuxiliaryAccount.balance>([\s\S]*?)<\/cim:AuxiliaryAccount.balance>/g, obj, "balance", base.to_string, sub, context);
                base.parse_element (/<cim:AuxiliaryAccount.due>([\s\S]*?)<\/cim:AuxiliaryAccount.due>/g, obj, "due", base.to_string, sub, context);
                base.parse_element (/<cim:AuxiliaryAccount.lastCredit>([\s\S]*?)<\/cim:AuxiliaryAccount.lastCredit>/g, obj, "lastCredit", base.to_string, sub, context);
                base.parse_element (/<cim:AuxiliaryAccount.lastDebit>([\s\S]*?)<\/cim:AuxiliaryAccount.lastDebit>/g, obj, "lastDebit", base.to_string, sub, context);
                base.parse_element (/<cim:AuxiliaryAccount.principleAmount>([\s\S]*?)<\/cim:AuxiliaryAccount.principleAmount>/g, obj, "principleAmount", base.to_string, sub, context);
                base.parse_attributes (/<cim:AuxiliaryAccount.PaymentTransactions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PaymentTransactions", sub, context);
                base.parse_attributes (/<cim:AuxiliaryAccount.Charges\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Charges", sub, context);
                base.parse_attribute (/<cim:AuxiliaryAccount.AuxiliaryAgreement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AuxiliaryAgreement", sub, context);
                var bucket = context.parsed.AuxiliaryAccount;
                if (null == bucket)
                   context.parsed.AuxiliaryAccount = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "AuxiliaryAccount", "balance", "balance",  base.from_string, fields);
                base.export_element (obj, "AuxiliaryAccount", "due", "due",  base.from_string, fields);
                base.export_element (obj, "AuxiliaryAccount", "lastCredit", "lastCredit",  base.from_string, fields);
                base.export_element (obj, "AuxiliaryAccount", "lastDebit", "lastDebit",  base.from_string, fields);
                base.export_element (obj, "AuxiliaryAccount", "principleAmount", "principleAmount",  base.from_string, fields);
                base.export_attributes (obj, "AuxiliaryAccount", "PaymentTransactions", "PaymentTransactions", fields);
                base.export_attributes (obj, "AuxiliaryAccount", "Charges", "Charges", fields);
                base.export_attribute (obj, "AuxiliaryAccount", "AuxiliaryAgreement", "AuxiliaryAgreement", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AuxiliaryAccount_collapse" aria-expanded="true" aria-controls="AuxiliaryAccount_collapse" style="margin-left: 10px;">AuxiliaryAccount</a></legend>
                    <div id="AuxiliaryAccount_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#balance}}<div><b>balance</b>: {{balance}}</div>{{/balance}}
                    {{#due}}<div><b>due</b>: {{due}}</div>{{/due}}
                    {{#lastCredit}}<div><b>lastCredit</b>: {{lastCredit}}</div>{{/lastCredit}}
                    {{#lastDebit}}<div><b>lastDebit</b>: {{lastDebit}}</div>{{/lastDebit}}
                    {{#principleAmount}}<div><b>principleAmount</b>: {{principleAmount}}</div>{{/principleAmount}}
                    {{#PaymentTransactions}}<div><b>PaymentTransactions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/PaymentTransactions}}
                    {{#Charges}}<div><b>Charges</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Charges}}
                    {{#AuxiliaryAgreement}}<div><b>AuxiliaryAgreement</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AuxiliaryAgreement}}&quot;);})'>{{AuxiliaryAgreement}}</a></div>{{/AuxiliaryAgreement}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.PaymentTransactions) obj.PaymentTransactions_string = obj.PaymentTransactions.join ();
                if (obj.Charges) obj.Charges_string = obj.Charges.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.PaymentTransactions_string;
                delete obj.Charges_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AuxiliaryAccount_collapse" aria-expanded="true" aria-controls="AuxiliaryAccount_collapse" style="margin-left: 10px;">AuxiliaryAccount</a></legend>
                    <div id="AuxiliaryAccount_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='balance'>balance: </label><div class='col-sm-8'><input id='balance' class='form-control' type='text'{{#balance}} value='{{balance}}'{{/balance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='due'>due: </label><div class='col-sm-8'><input id='due' class='form-control' type='text'{{#due}} value='{{due}}'{{/due}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lastCredit'>lastCredit: </label><div class='col-sm-8'><input id='lastCredit' class='form-control' type='text'{{#lastCredit}} value='{{lastCredit}}'{{/lastCredit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lastDebit'>lastDebit: </label><div class='col-sm-8'><input id='lastDebit' class='form-control' type='text'{{#lastDebit}} value='{{lastDebit}}'{{/lastDebit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='principleAmount'>principleAmount: </label><div class='col-sm-8'><input id='principleAmount' class='form-control' type='text'{{#principleAmount}} value='{{principleAmount}}'{{/principleAmount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Charges'>Charges: </label><div class='col-sm-8'><input id='Charges' class='form-control' type='text'{{#Charges}} value='{{Charges}}_string'{{/Charges}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AuxiliaryAgreement'>AuxiliaryAgreement: </label><div class='col-sm-8'><input id='AuxiliaryAgreement' class='form-control' type='text'{{#AuxiliaryAgreement}} value='{{AuxiliaryAgreement}}'{{/AuxiliaryAgreement}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "AuxiliaryAccount" };
                super.submit (obj);
                temp = document.getElementById ("balance").value; if ("" != temp) obj.balance = temp;
                temp = document.getElementById ("due").value; if ("" != temp) obj.due = temp;
                temp = document.getElementById ("lastCredit").value; if ("" != temp) obj.lastCredit = temp;
                temp = document.getElementById ("lastDebit").value; if ("" != temp) obj.lastDebit = temp;
                temp = document.getElementById ("principleAmount").value; if ("" != temp) obj.principleAmount = temp;
                temp = document.getElementById ("Charges").value; if ("" != temp) obj.Charges = temp.split (",");
                temp = document.getElementById ("AuxiliaryAgreement").value; if ("" != temp) obj.AuxiliaryAgreement = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["PaymentTransactions", "Transaction", "0..*", "0..1"],
                        ["Charges", "Charge", "0..*", "0..*"],
                        ["AuxiliaryAgreement", "AuxiliaryAgreement", "0..1", "1..*"]
                    ]
                );
            }
        }

        /**
         * Unit for accounting; use either 'energyUnit' or 'currencyUnit' to specify the unit for 'value'.
         *
         */
        class AccountingUnit extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AccountingUnit;
                if (null == bucket)
                   cim_data.AccountingUnit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AccountingUnit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AccountingUnit";
                base.parse_element (/<cim:AccountingUnit.energyUnit>([\s\S]*?)<\/cim:AccountingUnit.energyUnit>/g, obj, "energyUnit", base.to_string, sub, context);
                base.parse_element (/<cim:AccountingUnit.monetaryUnit>([\s\S]*?)<\/cim:AccountingUnit.monetaryUnit>/g, obj, "monetaryUnit", base.to_string, sub, context);
                base.parse_element (/<cim:AccountingUnit.multiplier>([\s\S]*?)<\/cim:AccountingUnit.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:AccountingUnit.value>([\s\S]*?)<\/cim:AccountingUnit.value>/g, obj, "value", base.to_float, sub, context);
                var bucket = context.parsed.AccountingUnit;
                if (null == bucket)
                   context.parsed.AccountingUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "AccountingUnit", "energyUnit", "energyUnit",  base.from_string, fields);
                base.export_element (obj, "AccountingUnit", "monetaryUnit", "monetaryUnit",  base.from_string, fields);
                base.export_element (obj, "AccountingUnit", "multiplier", "multiplier",  base.from_string, fields);
                base.export_element (obj, "AccountingUnit", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AccountingUnit_collapse" aria-expanded="true" aria-controls="AccountingUnit_collapse" style="margin-left: 10px;">AccountingUnit</a></legend>
                    <div id="AccountingUnit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#energyUnit}}<div><b>energyUnit</b>: {{energyUnit}}</div>{{/energyUnit}}
                    {{#monetaryUnit}}<div><b>monetaryUnit</b>: {{monetaryUnit}}</div>{{/monetaryUnit}}
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AccountingUnit_collapse" aria-expanded="true" aria-controls="AccountingUnit_collapse" style="margin-left: 10px;">AccountingUnit</a></legend>
                    <div id="AccountingUnit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='energyUnit'>energyUnit: </label><div class='col-sm-8'><input id='energyUnit' class='form-control' type='text'{{#energyUnit}} value='{{energyUnit}}'{{/energyUnit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='monetaryUnit'>monetaryUnit: </label><div class='col-sm-8'><input id='monetaryUnit' class='form-control' type='text'{{#monetaryUnit}} value='{{monetaryUnit}}'{{/monetaryUnit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='multiplier'>multiplier: </label><div class='col-sm-8'><input id='multiplier' class='form-control' type='text'{{#multiplier}} value='{{multiplier}}'{{/multiplier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value'>value: </label><div class='col-sm-8'><input id='value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "AccountingUnit" };
                super.submit (obj);
                temp = document.getElementById ("energyUnit").value; if ("" != temp) obj.energyUnit = temp;
                temp = document.getElementById ("monetaryUnit").value; if ("" != temp) obj.monetaryUnit = temp;
                temp = document.getElementById ("multiplier").value; if ("" != temp) obj.multiplier = temp;
                temp = document.getElementById ("value").value; if ("" != temp) obj.value = temp;

                return (obj);
            }
        }

        /**
         * A formal controlling contractual agreement between supplier and merchant, in terms of which the merchant is authorised to vend tokens and receipt payments on behalf of the supplier.
         *
         * The merchant is accountable to the supplier for revenue collected at point of sale.
         *
         */
        class MerchantAgreement extends Common.Agreement
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MerchantAgreement;
                if (null == bucket)
                   cim_data.MerchantAgreement = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MerchantAgreement[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Agreement.prototype.parse.call (this, context, sub);
                obj.cls = "MerchantAgreement";
                base.parse_attributes (/<cim:MerchantAgreement.MerchantAccounts\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MerchantAccounts", sub, context);
                var bucket = context.parsed.MerchantAgreement;
                if (null == bucket)
                   context.parsed.MerchantAgreement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Agreement.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "MerchantAgreement", "MerchantAccounts", "MerchantAccounts", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MerchantAgreement_collapse" aria-expanded="true" aria-controls="MerchantAgreement_collapse" style="margin-left: 10px;">MerchantAgreement</a></legend>
                    <div id="MerchantAgreement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.template.call (this) +
                    `
                    {{#MerchantAccounts}}<div><b>MerchantAccounts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MerchantAccounts}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.MerchantAccounts) obj.MerchantAccounts_string = obj.MerchantAccounts.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.MerchantAccounts_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MerchantAgreement_collapse" aria-expanded="true" aria-controls="MerchantAgreement_collapse" style="margin-left: 10px;">MerchantAgreement</a></legend>
                    <div id="MerchantAgreement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var obj = obj || { cls: "MerchantAgreement" };
                super.submit (obj);

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["MerchantAccounts", "MerchantAccount", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * The record of details of payment for service or token sale.
         *
         */
        class Transaction extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Transaction;
                if (null == bucket)
                   cim_data.Transaction = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Transaction[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Transaction";
                base.parse_element (/<cim:Transaction.diverseReference>([\s\S]*?)<\/cim:Transaction.diverseReference>/g, obj, "diverseReference", base.to_string, sub, context);
                base.parse_element (/<cim:Transaction.donorReference>([\s\S]*?)<\/cim:Transaction.donorReference>/g, obj, "donorReference", base.to_string, sub, context);
                base.parse_attribute (/<cim:Transaction.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:Transaction.line>([\s\S]*?)<\/cim:Transaction.line>/g, obj, "line", base.to_string, sub, context);
                base.parse_element (/<cim:Transaction.receiverReference>([\s\S]*?)<\/cim:Transaction.receiverReference>/g, obj, "receiverReference", base.to_string, sub, context);
                base.parse_element (/<cim:Transaction.reversedId>([\s\S]*?)<\/cim:Transaction.reversedId>/g, obj, "reversedId", base.to_string, sub, context);
                base.parse_element (/<cim:Transaction.serviceUnitsEnergy>([\s\S]*?)<\/cim:Transaction.serviceUnitsEnergy>/g, obj, "serviceUnitsEnergy", base.to_string, sub, context);
                base.parse_element (/<cim:Transaction.serviceUnitsError>([\s\S]*?)<\/cim:Transaction.serviceUnitsError>/g, obj, "serviceUnitsError", base.to_string, sub, context);
                base.parse_attributes (/<cim:Transaction.UserAttributes\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UserAttributes", sub, context);
                base.parse_attribute (/<cim:Transaction.PricingStructure\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PricingStructure", sub, context);
                base.parse_attribute (/<cim:Transaction.AuxiliaryAccount\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AuxiliaryAccount", sub, context);
                base.parse_attribute (/<cim:Transaction.Receipt\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Receipt", sub, context);
                base.parse_attribute (/<cim:Transaction.VendorShift\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "VendorShift", sub, context);
                base.parse_attribute (/<cim:Transaction.CashierShift\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CashierShift", sub, context);
                base.parse_attribute (/<cim:Transaction.Meter\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Meter", sub, context);
                base.parse_attribute (/<cim:Transaction.CustomerAccount\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAccount", sub, context);
                var bucket = context.parsed.Transaction;
                if (null == bucket)
                   context.parsed.Transaction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Transaction", "diverseReference", "diverseReference",  base.from_string, fields);
                base.export_element (obj, "Transaction", "donorReference", "donorReference",  base.from_string, fields);
                base.export_element (obj, "Transaction", "kind", "kind",  base.from_string, fields);
                base.export_element (obj, "Transaction", "line", "line",  base.from_string, fields);
                base.export_element (obj, "Transaction", "receiverReference", "receiverReference",  base.from_string, fields);
                base.export_element (obj, "Transaction", "reversedId", "reversedId",  base.from_string, fields);
                base.export_element (obj, "Transaction", "serviceUnitsEnergy", "serviceUnitsEnergy",  base.from_string, fields);
                base.export_element (obj, "Transaction", "serviceUnitsError", "serviceUnitsError",  base.from_string, fields);
                base.export_attributes (obj, "Transaction", "UserAttributes", "UserAttributes", fields);
                base.export_attribute (obj, "Transaction", "PricingStructure", "PricingStructure", fields);
                base.export_attribute (obj, "Transaction", "AuxiliaryAccount", "AuxiliaryAccount", fields);
                base.export_attribute (obj, "Transaction", "Receipt", "Receipt", fields);
                base.export_attribute (obj, "Transaction", "VendorShift", "VendorShift", fields);
                base.export_attribute (obj, "Transaction", "CashierShift", "CashierShift", fields);
                base.export_attribute (obj, "Transaction", "Meter", "Meter", fields);
                base.export_attribute (obj, "Transaction", "CustomerAccount", "CustomerAccount", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Transaction_collapse" aria-expanded="true" aria-controls="Transaction_collapse" style="margin-left: 10px;">Transaction</a></legend>
                    <div id="Transaction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#diverseReference}}<div><b>diverseReference</b>: {{diverseReference}}</div>{{/diverseReference}}
                    {{#donorReference}}<div><b>donorReference</b>: {{donorReference}}</div>{{/donorReference}}
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#line}}<div><b>line</b>: {{line}}</div>{{/line}}
                    {{#receiverReference}}<div><b>receiverReference</b>: {{receiverReference}}</div>{{/receiverReference}}
                    {{#reversedId}}<div><b>reversedId</b>: {{reversedId}}</div>{{/reversedId}}
                    {{#serviceUnitsEnergy}}<div><b>serviceUnitsEnergy</b>: {{serviceUnitsEnergy}}</div>{{/serviceUnitsEnergy}}
                    {{#serviceUnitsError}}<div><b>serviceUnitsError</b>: {{serviceUnitsError}}</div>{{/serviceUnitsError}}
                    {{#UserAttributes}}<div><b>UserAttributes</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/UserAttributes}}
                    {{#PricingStructure}}<div><b>PricingStructure</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PricingStructure}}&quot;);})'>{{PricingStructure}}</a></div>{{/PricingStructure}}
                    {{#AuxiliaryAccount}}<div><b>AuxiliaryAccount</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AuxiliaryAccount}}&quot;);})'>{{AuxiliaryAccount}}</a></div>{{/AuxiliaryAccount}}
                    {{#Receipt}}<div><b>Receipt</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Receipt}}&quot;);})'>{{Receipt}}</a></div>{{/Receipt}}
                    {{#VendorShift}}<div><b>VendorShift</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{VendorShift}}&quot;);})'>{{VendorShift}}</a></div>{{/VendorShift}}
                    {{#CashierShift}}<div><b>CashierShift</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CashierShift}}&quot;);})'>{{CashierShift}}</a></div>{{/CashierShift}}
                    {{#Meter}}<div><b>Meter</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Meter}}&quot;);})'>{{Meter}}</a></div>{{/Meter}}
                    {{#CustomerAccount}}<div><b>CustomerAccount</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CustomerAccount}}&quot;);})'>{{CustomerAccount}}</a></div>{{/CustomerAccount}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.TransactionKind = []; if (!obj.kind) obj.TransactionKind.push ({ id: '', selected: true}); for (var property in TransactionKind) obj.TransactionKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
                if (obj.UserAttributes) obj.UserAttributes_string = obj.UserAttributes.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TransactionKind;
                delete obj.UserAttributes_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Transaction_collapse" aria-expanded="true" aria-controls="Transaction_collapse" style="margin-left: 10px;">Transaction</a></legend>
                    <div id="Transaction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='diverseReference'>diverseReference: </label><div class='col-sm-8'><input id='diverseReference' class='form-control' type='text'{{#diverseReference}} value='{{diverseReference}}'{{/diverseReference}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='donorReference'>donorReference: </label><div class='col-sm-8'><input id='donorReference' class='form-control' type='text'{{#donorReference}} value='{{donorReference}}'{{/donorReference}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#TransactionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/TransactionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='line'>line: </label><div class='col-sm-8'><input id='line' class='form-control' type='text'{{#line}} value='{{line}}'{{/line}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='receiverReference'>receiverReference: </label><div class='col-sm-8'><input id='receiverReference' class='form-control' type='text'{{#receiverReference}} value='{{receiverReference}}'{{/receiverReference}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='reversedId'>reversedId: </label><div class='col-sm-8'><input id='reversedId' class='form-control' type='text'{{#reversedId}} value='{{reversedId}}'{{/reversedId}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='serviceUnitsEnergy'>serviceUnitsEnergy: </label><div class='col-sm-8'><input id='serviceUnitsEnergy' class='form-control' type='text'{{#serviceUnitsEnergy}} value='{{serviceUnitsEnergy}}'{{/serviceUnitsEnergy}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='serviceUnitsError'>serviceUnitsError: </label><div class='col-sm-8'><input id='serviceUnitsError' class='form-control' type='text'{{#serviceUnitsError}} value='{{serviceUnitsError}}'{{/serviceUnitsError}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='PricingStructure'>PricingStructure: </label><div class='col-sm-8'><input id='PricingStructure' class='form-control' type='text'{{#PricingStructure}} value='{{PricingStructure}}'{{/PricingStructure}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AuxiliaryAccount'>AuxiliaryAccount: </label><div class='col-sm-8'><input id='AuxiliaryAccount' class='form-control' type='text'{{#AuxiliaryAccount}} value='{{AuxiliaryAccount}}'{{/AuxiliaryAccount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Receipt'>Receipt: </label><div class='col-sm-8'><input id='Receipt' class='form-control' type='text'{{#Receipt}} value='{{Receipt}}'{{/Receipt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='VendorShift'>VendorShift: </label><div class='col-sm-8'><input id='VendorShift' class='form-control' type='text'{{#VendorShift}} value='{{VendorShift}}'{{/VendorShift}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CashierShift'>CashierShift: </label><div class='col-sm-8'><input id='CashierShift' class='form-control' type='text'{{#CashierShift}} value='{{CashierShift}}'{{/CashierShift}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Meter'>Meter: </label><div class='col-sm-8'><input id='Meter' class='form-control' type='text'{{#Meter}} value='{{Meter}}'{{/Meter}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CustomerAccount'>CustomerAccount: </label><div class='col-sm-8'><input id='CustomerAccount' class='form-control' type='text'{{#CustomerAccount}} value='{{CustomerAccount}}'{{/CustomerAccount}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Transaction" };
                super.submit (obj);
                temp = document.getElementById ("diverseReference").value; if ("" != temp) obj.diverseReference = temp;
                temp = document.getElementById ("donorReference").value; if ("" != temp) obj.donorReference = temp;
                temp = document.getElementById ("kind").value; if ("" != temp) { temp = TransactionKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#TransactionKind." + temp; }
                temp = document.getElementById ("line").value; if ("" != temp) obj.line = temp;
                temp = document.getElementById ("receiverReference").value; if ("" != temp) obj.receiverReference = temp;
                temp = document.getElementById ("reversedId").value; if ("" != temp) obj.reversedId = temp;
                temp = document.getElementById ("serviceUnitsEnergy").value; if ("" != temp) obj.serviceUnitsEnergy = temp;
                temp = document.getElementById ("serviceUnitsError").value; if ("" != temp) obj.serviceUnitsError = temp;
                temp = document.getElementById ("PricingStructure").value; if ("" != temp) obj.PricingStructure = temp;
                temp = document.getElementById ("AuxiliaryAccount").value; if ("" != temp) obj.AuxiliaryAccount = temp;
                temp = document.getElementById ("Receipt").value; if ("" != temp) obj.Receipt = temp;
                temp = document.getElementById ("VendorShift").value; if ("" != temp) obj.VendorShift = temp;
                temp = document.getElementById ("CashierShift").value; if ("" != temp) obj.CashierShift = temp;
                temp = document.getElementById ("Meter").value; if ("" != temp) obj.Meter = temp;
                temp = document.getElementById ("CustomerAccount").value; if ("" != temp) obj.CustomerAccount = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["UserAttributes", "UserAttribute", "0..*", "0..1"],
                        ["PricingStructure", "PricingStructure", "0..1", "0..*"],
                        ["AuxiliaryAccount", "AuxiliaryAccount", "0..1", "0..*"],
                        ["Receipt", "Receipt", "0..1", "1..*"],
                        ["VendorShift", "VendorShift", "0..1", "0..*"],
                        ["CashierShift", "CashierShift", "0..1", "0..*"],
                        ["Meter", "Meter", "0..1", "0..*"],
                        ["CustomerAccount", "CustomerAccount", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * The operating account controlled by merchant agreement, against which the vendor may vend tokens or receipt payments.
         *
         * Transactions via vendor shift debit the account and bank deposits via bank statement credit the account.
         *
         */
        class MerchantAccount extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MerchantAccount;
                if (null == bucket)
                   cim_data.MerchantAccount = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MerchantAccount[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "MerchantAccount";
                base.parse_element (/<cim:MerchantAccount.currentBalance>([\s\S]*?)<\/cim:MerchantAccount.currentBalance>/g, obj, "currentBalance", base.to_string, sub, context);
                base.parse_element (/<cim:MerchantAccount.provisionalBalance>([\s\S]*?)<\/cim:MerchantAccount.provisionalBalance>/g, obj, "provisionalBalance", base.to_string, sub, context);
                base.parse_attributes (/<cim:MerchantAccount.Transactors\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Transactors", sub, context);
                base.parse_attributes (/<cim:MerchantAccount.VendorShifts\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "VendorShifts", sub, context);
                base.parse_attribute (/<cim:MerchantAccount.MerchantAgreement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MerchantAgreement", sub, context);
                var bucket = context.parsed.MerchantAccount;
                if (null == bucket)
                   context.parsed.MerchantAccount = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "MerchantAccount", "currentBalance", "currentBalance",  base.from_string, fields);
                base.export_element (obj, "MerchantAccount", "provisionalBalance", "provisionalBalance",  base.from_string, fields);
                base.export_attributes (obj, "MerchantAccount", "Transactors", "Transactors", fields);
                base.export_attributes (obj, "MerchantAccount", "VendorShifts", "VendorShifts", fields);
                base.export_attribute (obj, "MerchantAccount", "MerchantAgreement", "MerchantAgreement", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MerchantAccount_collapse" aria-expanded="true" aria-controls="MerchantAccount_collapse" style="margin-left: 10px;">MerchantAccount</a></legend>
                    <div id="MerchantAccount_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#currentBalance}}<div><b>currentBalance</b>: {{currentBalance}}</div>{{/currentBalance}}
                    {{#provisionalBalance}}<div><b>provisionalBalance</b>: {{provisionalBalance}}</div>{{/provisionalBalance}}
                    {{#Transactors}}<div><b>Transactors</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Transactors}}
                    {{#VendorShifts}}<div><b>VendorShifts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/VendorShifts}}
                    {{#MerchantAgreement}}<div><b>MerchantAgreement</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MerchantAgreement}}&quot;);})'>{{MerchantAgreement}}</a></div>{{/MerchantAgreement}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Transactors) obj.Transactors_string = obj.Transactors.join ();
                if (obj.VendorShifts) obj.VendorShifts_string = obj.VendorShifts.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Transactors_string;
                delete obj.VendorShifts_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MerchantAccount_collapse" aria-expanded="true" aria-controls="MerchantAccount_collapse" style="margin-left: 10px;">MerchantAccount</a></legend>
                    <div id="MerchantAccount_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='currentBalance'>currentBalance: </label><div class='col-sm-8'><input id='currentBalance' class='form-control' type='text'{{#currentBalance}} value='{{currentBalance}}'{{/currentBalance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='provisionalBalance'>provisionalBalance: </label><div class='col-sm-8'><input id='provisionalBalance' class='form-control' type='text'{{#provisionalBalance}} value='{{provisionalBalance}}'{{/provisionalBalance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Transactors'>Transactors: </label><div class='col-sm-8'><input id='Transactors' class='form-control' type='text'{{#Transactors}} value='{{Transactors}}_string'{{/Transactors}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MerchantAgreement'>MerchantAgreement: </label><div class='col-sm-8'><input id='MerchantAgreement' class='form-control' type='text'{{#MerchantAgreement}} value='{{MerchantAgreement}}'{{/MerchantAgreement}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "MerchantAccount" };
                super.submit (obj);
                temp = document.getElementById ("currentBalance").value; if ("" != temp) obj.currentBalance = temp;
                temp = document.getElementById ("provisionalBalance").value; if ("" != temp) obj.provisionalBalance = temp;
                temp = document.getElementById ("Transactors").value; if ("" != temp) obj.Transactors = temp.split (",");
                temp = document.getElementById ("MerchantAgreement").value; if ("" != temp) obj.MerchantAgreement = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Transactors", "Transactor", "0..*", "0..*"],
                        ["VendorShifts", "VendorShift", "0..*", "0..1"],
                        ["MerchantAgreement", "MerchantAgreement", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * The operating shift for a cashier, during which the cashier may transact against the cashier shift, subject to vendor shift being open.
         *
         */
        class CashierShift extends Shift
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CashierShift;
                if (null == bucket)
                   cim_data.CashierShift = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CashierShift[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Shift.prototype.parse.call (this, context, sub);
                obj.cls = "CashierShift";
                base.parse_element (/<cim:CashierShift.cashFloat>([\s\S]*?)<\/cim:CashierShift.cashFloat>/g, obj, "cashFloat", base.to_string, sub, context);
                base.parse_attribute (/<cim:CashierShift.Cashier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Cashier", sub, context);
                base.parse_attribute (/<cim:CashierShift.PointOfSale\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PointOfSale", sub, context);
                base.parse_attributes (/<cim:CashierShift.Receipts\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Receipts", sub, context);
                base.parse_attributes (/<cim:CashierShift.Transactions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Transactions", sub, context);
                var bucket = context.parsed.CashierShift;
                if (null == bucket)
                   context.parsed.CashierShift = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Shift.prototype.export.call (this, obj, false);

                base.export_element (obj, "CashierShift", "cashFloat", "cashFloat",  base.from_string, fields);
                base.export_attribute (obj, "CashierShift", "Cashier", "Cashier", fields);
                base.export_attribute (obj, "CashierShift", "PointOfSale", "PointOfSale", fields);
                base.export_attributes (obj, "CashierShift", "Receipts", "Receipts", fields);
                base.export_attributes (obj, "CashierShift", "Transactions", "Transactions", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CashierShift_collapse" aria-expanded="true" aria-controls="CashierShift_collapse" style="margin-left: 10px;">CashierShift</a></legend>
                    <div id="CashierShift_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Shift.prototype.template.call (this) +
                    `
                    {{#cashFloat}}<div><b>cashFloat</b>: {{cashFloat}}</div>{{/cashFloat}}
                    {{#Cashier}}<div><b>Cashier</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Cashier}}&quot;);})'>{{Cashier}}</a></div>{{/Cashier}}
                    {{#PointOfSale}}<div><b>PointOfSale</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PointOfSale}}&quot;);})'>{{PointOfSale}}</a></div>{{/PointOfSale}}
                    {{#Receipts}}<div><b>Receipts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Receipts}}
                    {{#Transactions}}<div><b>Transactions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Transactions}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Receipts) obj.Receipts_string = obj.Receipts.join ();
                if (obj.Transactions) obj.Transactions_string = obj.Transactions.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Receipts_string;
                delete obj.Transactions_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CashierShift_collapse" aria-expanded="true" aria-controls="CashierShift_collapse" style="margin-left: 10px;">CashierShift</a></legend>
                    <div id="CashierShift_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Shift.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='cashFloat'>cashFloat: </label><div class='col-sm-8'><input id='cashFloat' class='form-control' type='text'{{#cashFloat}} value='{{cashFloat}}'{{/cashFloat}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Cashier'>Cashier: </label><div class='col-sm-8'><input id='Cashier' class='form-control' type='text'{{#Cashier}} value='{{Cashier}}'{{/Cashier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='PointOfSale'>PointOfSale: </label><div class='col-sm-8'><input id='PointOfSale' class='form-control' type='text'{{#PointOfSale}} value='{{PointOfSale}}'{{/PointOfSale}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "CashierShift" };
                super.submit (obj);
                temp = document.getElementById ("cashFloat").value; if ("" != temp) obj.cashFloat = temp;
                temp = document.getElementById ("Cashier").value; if ("" != temp) obj.Cashier = temp;
                temp = document.getElementById ("PointOfSale").value; if ("" != temp) obj.PointOfSale = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Cashier", "Cashier", "0..1", "0..*"],
                        ["PointOfSale", "PointOfSale", "0..1", "0..*"],
                        ["Receipts", "Receipt", "0..*", "0..1"],
                        ["Transactions", "Transaction", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * The operating shift for a vendor during which the vendor may transact against the merchant's account.
         *
         * It aggregates transactions and receipts during the shift and periodically debits a merchant account. The totals in vendor shift should always be the sum of totals aggregated in all cashier shifts that were open under the particular vendor shift.
         *
         */
        class VendorShift extends Shift
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.VendorShift;
                if (null == bucket)
                   cim_data.VendorShift = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.VendorShift[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Shift.prototype.parse.call (this, context, sub);
                obj.cls = "VendorShift";
                base.parse_element (/<cim:VendorShift.merchantDebitAmount>([\s\S]*?)<\/cim:VendorShift.merchantDebitAmount>/g, obj, "merchantDebitAmount", base.to_string, sub, context);
                base.parse_element (/<cim:VendorShift.posted>([\s\S]*?)<\/cim:VendorShift.posted>/g, obj, "posted", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:VendorShift.Receipts\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Receipts", sub, context);
                base.parse_attributes (/<cim:VendorShift.Transactions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Transactions", sub, context);
                base.parse_attribute (/<cim:VendorShift.Vendor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Vendor", sub, context);
                base.parse_attribute (/<cim:VendorShift.MerchantAccount\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MerchantAccount", sub, context);
                var bucket = context.parsed.VendorShift;
                if (null == bucket)
                   context.parsed.VendorShift = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Shift.prototype.export.call (this, obj, false);

                base.export_element (obj, "VendorShift", "merchantDebitAmount", "merchantDebitAmount",  base.from_string, fields);
                base.export_element (obj, "VendorShift", "posted", "posted",  base.from_boolean, fields);
                base.export_attributes (obj, "VendorShift", "Receipts", "Receipts", fields);
                base.export_attributes (obj, "VendorShift", "Transactions", "Transactions", fields);
                base.export_attribute (obj, "VendorShift", "Vendor", "Vendor", fields);
                base.export_attribute (obj, "VendorShift", "MerchantAccount", "MerchantAccount", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#VendorShift_collapse" aria-expanded="true" aria-controls="VendorShift_collapse" style="margin-left: 10px;">VendorShift</a></legend>
                    <div id="VendorShift_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Shift.prototype.template.call (this) +
                    `
                    {{#merchantDebitAmount}}<div><b>merchantDebitAmount</b>: {{merchantDebitAmount}}</div>{{/merchantDebitAmount}}
                    {{#posted}}<div><b>posted</b>: {{posted}}</div>{{/posted}}
                    {{#Receipts}}<div><b>Receipts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Receipts}}
                    {{#Transactions}}<div><b>Transactions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Transactions}}
                    {{#Vendor}}<div><b>Vendor</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Vendor}}&quot;);})'>{{Vendor}}</a></div>{{/Vendor}}
                    {{#MerchantAccount}}<div><b>MerchantAccount</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MerchantAccount}}&quot;);})'>{{MerchantAccount}}</a></div>{{/MerchantAccount}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Receipts) obj.Receipts_string = obj.Receipts.join ();
                if (obj.Transactions) obj.Transactions_string = obj.Transactions.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Receipts_string;
                delete obj.Transactions_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#VendorShift_collapse" aria-expanded="true" aria-controls="VendorShift_collapse" style="margin-left: 10px;">VendorShift</a></legend>
                    <div id="VendorShift_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Shift.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='merchantDebitAmount'>merchantDebitAmount: </label><div class='col-sm-8'><input id='merchantDebitAmount' class='form-control' type='text'{{#merchantDebitAmount}} value='{{merchantDebitAmount}}'{{/merchantDebitAmount}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='posted'>posted: </label><div class='col-sm-8'><input id='posted' class='form-check-input' type='checkbox'{{#posted}} checked{{/posted}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Vendor'>Vendor: </label><div class='col-sm-8'><input id='Vendor' class='form-control' type='text'{{#Vendor}} value='{{Vendor}}'{{/Vendor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MerchantAccount'>MerchantAccount: </label><div class='col-sm-8'><input id='MerchantAccount' class='form-control' type='text'{{#MerchantAccount}} value='{{MerchantAccount}}'{{/MerchantAccount}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "VendorShift" };
                super.submit (obj);
                temp = document.getElementById ("merchantDebitAmount").value; if ("" != temp) obj.merchantDebitAmount = temp;
                temp = document.getElementById ("posted").checked; if (temp) obj.posted = true;
                temp = document.getElementById ("Vendor").value; if ("" != temp) obj.Vendor = temp;
                temp = document.getElementById ("MerchantAccount").value; if ("" != temp) obj.MerchantAccount = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Receipts", "Receipt", "0..*", "0..1"],
                        ["Transactions", "Transaction", "0..*", "0..1"],
                        ["Vendor", "Vendor", "0..1", "0..*"],
                        ["MerchantAccount", "MerchantAccount", "0..1", "0..*"]
                    ]
                );
            }
        }

        return (
            {
                Shift: Shift,
                MerchantAccount: MerchantAccount,
                Receipt: Receipt,
                VendorShift: VendorShift,
                Cashier: Cashier,
                AccountingUnit: AccountingUnit,
                Cheque: Cheque,
                LineDetail: LineDetail,
                BankAccountDetail: BankAccountDetail,
                ServiceSupplier: ServiceSupplier,
                TariffProfile: TariffProfile,
                AuxiliaryAccount: AuxiliaryAccount,
                Charge: Charge,
                AccountMovement: AccountMovement,
                AuxiliaryAgreement: AuxiliaryAgreement,
                MerchantAgreement: MerchantAgreement,
                Tender: Tender,
                Transaction: Transaction,
                ConsumptionTariffInterval: ConsumptionTariffInterval,
                Vendor: Vendor,
                CashierShift: CashierShift,
                TimeTariffInterval: TimeTariffInterval,
                Card: Card,
                PointOfSale: PointOfSale,
                Due: Due,
                Transactor: Transactor
            }
        );
    }
);