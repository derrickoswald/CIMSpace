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
                base.parse_attribute (/<cim:Receipt.VendorShift\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "VendorShift", sub, context);
                base.parse_attribute (/<cim:Receipt.CashierShift\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CashierShift", sub, context);

                var bucket = context.parsed.Receipt;
                if (null == bucket)
                   context.parsed.Receipt = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Receipt", "isBankable", base.from_boolean, fields);
                base.export_element (obj, "Receipt", "line", base.from_string, fields);
                base.export_attribute (obj, "Receipt", "VendorShift", fields);
                base.export_attribute (obj, "Receipt", "CashierShift", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Receipt_collapse" aria-expanded="true" aria-controls="Receipt_collapse">Receipt</a>
<div id="Receipt_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#isBankable}}<div><b>isBankable</b>: {{isBankable}}</div>{{/isBankable}}
{{#line}}<div><b>line</b>: {{line}}</div>{{/line}}
{{#VendorShift}}<div><b>VendorShift</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{VendorShift}}&quot;);})'>{{VendorShift}}</a></div>{{/VendorShift}}
{{#CashierShift}}<div><b>CashierShift</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CashierShift}}&quot;);})'>{{CashierShift}}</a></div>{{/CashierShift}}
</div>
`
                );
           }        }

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

                base.export_element (obj, "Card", "accountHolderName", base.from_string, fields);
                base.export_element (obj, "Card", "cvNumber", base.from_string, fields);
                base.export_element (obj, "Card", "expiryDate", base.from_string, fields);
                base.export_element (obj, "Card", "pan", base.from_string, fields);
                base.export_attribute (obj, "Card", "Tender", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Card_collapse" aria-expanded="true" aria-controls="Card_collapse">Card</a>
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
`
                );
           }        }

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

                base.export_element (obj, "Due", "arrears", base.from_string, fields);
                base.export_element (obj, "Due", "charges", base.from_string, fields);
                base.export_element (obj, "Due", "current", base.from_string, fields);
                base.export_element (obj, "Due", "interest", base.from_string, fields);
                base.export_element (obj, "Due", "principle", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Due_collapse" aria-expanded="true" aria-controls="Due_collapse">Due</a>
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
`
                );
           }        }

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
                base.parse_element (/<cim:Charge.kind>([\s\S]*?)<\/cim:Charge.kind>/g, obj, "kind", base.to_string, sub, context);
                base.parse_element (/<cim:Charge.variablePortion>([\s\S]*?)<\/cim:Charge.variablePortion>/g, obj, "variablePortion", base.to_string, sub, context);
                base.parse_attribute (/<cim:Charge.ParentCharge\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ParentCharge", sub, context);

                var bucket = context.parsed.Charge;
                if (null == bucket)
                   context.parsed.Charge = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Charge", "fixedPortion", base.from_string, fields);
                base.export_element (obj, "Charge", "kind", base.from_string, fields);
                base.export_element (obj, "Charge", "variablePortion", base.from_string, fields);
                base.export_attribute (obj, "Charge", "ParentCharge", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Charge_collapse" aria-expanded="true" aria-controls="Charge_collapse">Charge</a>
<div id="Charge_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#fixedPortion}}<div><b>fixedPortion</b>: {{fixedPortion}}</div>{{/fixedPortion}}
{{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
{{#variablePortion}}<div><b>variablePortion</b>: {{variablePortion}}</div>{{/variablePortion}}
{{#ParentCharge}}<div><b>ParentCharge</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ParentCharge}}&quot;);})'>{{ParentCharge}}</a></div>{{/ParentCharge}}
</div>
`
                );
           }        }

        /**
         * Kind of cheque.
         *
         */
        class ChequeKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ChequeKind;
                if (null == bucket)
                   cim_data.ChequeKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ChequeKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ChequeKind";
                base.parse_element (/<cim:ChequeKind.postalOrder>([\s\S]*?)<\/cim:ChequeKind.postalOrder>/g, obj, "postalOrder", base.to_string, sub, context);
                base.parse_element (/<cim:ChequeKind.bankOrder>([\s\S]*?)<\/cim:ChequeKind.bankOrder>/g, obj, "bankOrder", base.to_string, sub, context);
                base.parse_element (/<cim:ChequeKind.other>([\s\S]*?)<\/cim:ChequeKind.other>/g, obj, "other", base.to_string, sub, context);

                var bucket = context.parsed.ChequeKind;
                if (null == bucket)
                   context.parsed.ChequeKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ChequeKind", "postalOrder", base.from_string, fields);
                base.export_element (obj, "ChequeKind", "bankOrder", base.from_string, fields);
                base.export_element (obj, "ChequeKind", "other", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ChequeKind_collapse" aria-expanded="true" aria-controls="ChequeKind_collapse">ChequeKind</a>
<div id="ChequeKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#postalOrder}}<div><b>postalOrder</b>: {{postalOrder}}</div>{{/postalOrder}}
{{#bankOrder}}<div><b>bankOrder</b>: {{bankOrder}}</div>{{/bankOrder}}
{{#other}}<div><b>other</b>: {{other}}</div>{{/other}}
</div>
`
                );
           }        }

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

                var bucket = context.parsed.TariffProfile;
                if (null == bucket)
                   context.parsed.TariffProfile = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "TariffProfile", "tariffCycle", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TariffProfile_collapse" aria-expanded="true" aria-controls="TariffProfile_collapse">TariffProfile</a>
<div id="TariffProfile_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.Document.prototype.template.call (this) +
`
{{#tariffCycle}}<div><b>tariffCycle</b>: {{tariffCycle}}</div>{{/tariffCycle}}
</div>
`
                );
           }        }

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

                base.export_element (obj, "AccountMovement", "amount", base.from_string, fields);
                base.export_element (obj, "AccountMovement", "dateTime", base.from_datetime, fields);
                base.export_element (obj, "AccountMovement", "reason", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#AccountMovement_collapse" aria-expanded="true" aria-controls="AccountMovement_collapse">AccountMovement</a>
<div id="AccountMovement_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#amount}}<div><b>amount</b>: {{amount}}</div>{{/amount}}
{{#dateTime}}<div><b>dateTime</b>: {{dateTime}}</div>{{/dateTime}}
{{#reason}}<div><b>reason</b>: {{reason}}</div>{{/reason}}
</div>
`
                );
           }        }

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

                var bucket = context.parsed.ConsumptionTariffInterval;
                if (null == bucket)
                   context.parsed.ConsumptionTariffInterval = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ConsumptionTariffInterval", "sequenceNumber", base.from_string, fields);
                base.export_element (obj, "ConsumptionTariffInterval", "startValue", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ConsumptionTariffInterval_collapse" aria-expanded="true" aria-controls="ConsumptionTariffInterval_collapse">ConsumptionTariffInterval</a>
<div id="ConsumptionTariffInterval_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
{{#startValue}}<div><b>startValue</b>: {{startValue}}</div>{{/startValue}}
</div>
`
                );
           }        }

        /**
         * Kind of tender.
         *
         */
        class TenderKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TenderKind;
                if (null == bucket)
                   cim_data.TenderKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TenderKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TenderKind";
                base.parse_element (/<cim:TenderKind.cheque>([\s\S]*?)<\/cim:TenderKind.cheque>/g, obj, "cheque", base.to_string, sub, context);
                base.parse_element (/<cim:TenderKind.card>([\s\S]*?)<\/cim:TenderKind.card>/g, obj, "card", base.to_string, sub, context);
                base.parse_element (/<cim:TenderKind.cash>([\s\S]*?)<\/cim:TenderKind.cash>/g, obj, "cash", base.to_string, sub, context);
                base.parse_element (/<cim:TenderKind.unspecified>([\s\S]*?)<\/cim:TenderKind.unspecified>/g, obj, "unspecified", base.to_string, sub, context);
                base.parse_element (/<cim:TenderKind.other>([\s\S]*?)<\/cim:TenderKind.other>/g, obj, "other", base.to_string, sub, context);

                var bucket = context.parsed.TenderKind;
                if (null == bucket)
                   context.parsed.TenderKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TenderKind", "cheque", base.from_string, fields);
                base.export_element (obj, "TenderKind", "card", base.from_string, fields);
                base.export_element (obj, "TenderKind", "cash", base.from_string, fields);
                base.export_element (obj, "TenderKind", "unspecified", base.from_string, fields);
                base.export_element (obj, "TenderKind", "other", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TenderKind_collapse" aria-expanded="true" aria-controls="TenderKind_collapse">TenderKind</a>
<div id="TenderKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#cheque}}<div><b>cheque</b>: {{cheque}}</div>{{/cheque}}
{{#card}}<div><b>card</b>: {{card}}</div>{{/card}}
{{#cash}}<div><b>cash</b>: {{cash}}</div>{{/cash}}
{{#unspecified}}<div><b>unspecified</b>: {{unspecified}}</div>{{/unspecified}}
{{#other}}<div><b>other</b>: {{other}}</div>{{/other}}
</div>
`
                );
           }        }

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

                var bucket = context.parsed.TimeTariffInterval;
                if (null == bucket)
                   context.parsed.TimeTariffInterval = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TimeTariffInterval", "sequenceNumber", base.from_string, fields);
                base.export_element (obj, "TimeTariffInterval", "startTime", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TimeTariffInterval_collapse" aria-expanded="true" aria-controls="TimeTariffInterval_collapse">TimeTariffInterval</a>
<div id="TimeTariffInterval_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
{{#startTime}}<div><b>startTime</b>: {{startTime}}</div>{{/startTime}}
</div>
`
                );
           }        }

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

                var bucket = context.parsed.AuxiliaryAgreement;
                if (null == bucket)
                   context.parsed.AuxiliaryAgreement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Agreement.prototype.export.call (this, obj, false);

                base.export_element (obj, "AuxiliaryAgreement", "arrearsInterest", base.from_string, fields);
                base.export_element (obj, "AuxiliaryAgreement", "auxCycle", base.from_string, fields);
                base.export_element (obj, "AuxiliaryAgreement", "auxPriorityCode", base.from_string, fields);
                base.export_element (obj, "AuxiliaryAgreement", "fixedAmount", base.from_string, fields);
                base.export_element (obj, "AuxiliaryAgreement", "minAmount", base.from_string, fields);
                base.export_element (obj, "AuxiliaryAgreement", "payCycle", base.from_string, fields);
                base.export_element (obj, "AuxiliaryAgreement", "subType", base.from_string, fields);
                base.export_element (obj, "AuxiliaryAgreement", "vendPortion", base.from_string, fields);
                base.export_element (obj, "AuxiliaryAgreement", "vendPortionArrear", base.from_string, fields);
                base.export_attribute (obj, "AuxiliaryAgreement", "CustomerAgreement", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#AuxiliaryAgreement_collapse" aria-expanded="true" aria-controls="AuxiliaryAgreement_collapse">AuxiliaryAgreement</a>
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
</div>
`
                );
           }        }

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

                var bucket = context.parsed.Vendor;
                if (null == bucket)
                   context.parsed.Vendor = bucket = {};
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


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Vendor_collapse" aria-expanded="true" aria-controls="Vendor_collapse">Vendor</a>
<div id="Vendor_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
</div>
`
                );
           }        }

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

                base.export_element (obj, "BankAccountDetail", "accountNumber", base.from_string, fields);
                base.export_element (obj, "BankAccountDetail", "bankName", base.from_string, fields);
                base.export_element (obj, "BankAccountDetail", "branchCode", base.from_string, fields);
                base.export_element (obj, "BankAccountDetail", "holderID", base.from_string, fields);
                base.export_element (obj, "BankAccountDetail", "holderName", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#BankAccountDetail_collapse" aria-expanded="true" aria-controls="BankAccountDetail_collapse">BankAccountDetail</a>
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
`
                );
           }        }

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

                var bucket = context.parsed.PointOfSale;
                if (null == bucket)
                   context.parsed.PointOfSale = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "PointOfSale", "location", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#PointOfSale_collapse" aria-expanded="true" aria-controls="PointOfSale_collapse">PointOfSale</a>
<div id="PointOfSale_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#location}}<div><b>location</b>: {{location}}</div>{{/location}}
</div>
`
                );
           }        }

        /**
         * Kind of charge.
         *
         */
        class ChargeKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ChargeKind;
                if (null == bucket)
                   cim_data.ChargeKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ChargeKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ChargeKind";
                base.parse_element (/<cim:ChargeKind.consumptionCharge>([\s\S]*?)<\/cim:ChargeKind.consumptionCharge>/g, obj, "consumptionCharge", base.to_string, sub, context);
                base.parse_element (/<cim:ChargeKind.demandCharge>([\s\S]*?)<\/cim:ChargeKind.demandCharge>/g, obj, "demandCharge", base.to_string, sub, context);
                base.parse_element (/<cim:ChargeKind.auxiliaryCharge>([\s\S]*?)<\/cim:ChargeKind.auxiliaryCharge>/g, obj, "auxiliaryCharge", base.to_string, sub, context);
                base.parse_element (/<cim:ChargeKind.taxCharge>([\s\S]*?)<\/cim:ChargeKind.taxCharge>/g, obj, "taxCharge", base.to_string, sub, context);
                base.parse_element (/<cim:ChargeKind.other>([\s\S]*?)<\/cim:ChargeKind.other>/g, obj, "other", base.to_string, sub, context);

                var bucket = context.parsed.ChargeKind;
                if (null == bucket)
                   context.parsed.ChargeKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ChargeKind", "consumptionCharge", base.from_string, fields);
                base.export_element (obj, "ChargeKind", "demandCharge", base.from_string, fields);
                base.export_element (obj, "ChargeKind", "auxiliaryCharge", base.from_string, fields);
                base.export_element (obj, "ChargeKind", "taxCharge", base.from_string, fields);
                base.export_element (obj, "ChargeKind", "other", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ChargeKind_collapse" aria-expanded="true" aria-controls="ChargeKind_collapse">ChargeKind</a>
<div id="ChargeKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#consumptionCharge}}<div><b>consumptionCharge</b>: {{consumptionCharge}}</div>{{/consumptionCharge}}
{{#demandCharge}}<div><b>demandCharge</b>: {{demandCharge}}</div>{{/demandCharge}}
{{#auxiliaryCharge}}<div><b>auxiliaryCharge</b>: {{auxiliaryCharge}}</div>{{/auxiliaryCharge}}
{{#taxCharge}}<div><b>taxCharge</b>: {{taxCharge}}</div>{{/taxCharge}}
{{#other}}<div><b>other</b>: {{other}}</div>{{/other}}
</div>
`
                );
           }        }

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

                base.export_element (obj, "Shift", "activityInterval", base.from_string, fields);
                base.export_element (obj, "Shift", "receiptsGrandTotalBankable", base.from_string, fields);
                base.export_element (obj, "Shift", "receiptsGrandTotalNonBankable", base.from_string, fields);
                base.export_element (obj, "Shift", "receiptsGrandTotalRounding", base.from_string, fields);
                base.export_element (obj, "Shift", "transactionsGrandTotal", base.from_string, fields);
                base.export_element (obj, "Shift", "transactionsGrandTotalRounding", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Shift_collapse" aria-expanded="true" aria-controls="Shift_collapse">Shift</a>
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
`
                );
           }        }

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

                base.export_element (obj, "LineDetail", "amount", base.from_string, fields);
                base.export_element (obj, "LineDetail", "dateTime", base.from_datetime, fields);
                base.export_element (obj, "LineDetail", "note", base.from_string, fields);
                base.export_element (obj, "LineDetail", "rounding", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#LineDetail_collapse" aria-expanded="true" aria-controls="LineDetail_collapse">LineDetail</a>
<div id="LineDetail_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#amount}}<div><b>amount</b>: {{amount}}</div>{{/amount}}
{{#dateTime}}<div><b>dateTime</b>: {{dateTime}}</div>{{/dateTime}}
{{#note}}<div><b>note</b>: {{note}}</div>{{/note}}
{{#rounding}}<div><b>rounding</b>: {{rounding}}</div>{{/rounding}}
</div>
`
                );
           }        }

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

                var bucket = context.parsed.Cashier;
                if (null == bucket)
                   context.parsed.Cashier = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Cashier", "electronicAddress", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Cashier_collapse" aria-expanded="true" aria-controls="Cashier_collapse">Cashier</a>
<div id="Cashier_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#electronicAddress}}<div><b>electronicAddress</b>: {{electronicAddress}}</div>{{/electronicAddress}}
</div>
`
                );
           }        }

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
                base.parse_element (/<cim:ServiceSupplier.kind>([\s\S]*?)<\/cim:ServiceSupplier.kind>/g, obj, "kind", base.to_string, sub, context);

                var bucket = context.parsed.ServiceSupplier;
                if (null == bucket)
                   context.parsed.ServiceSupplier = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.OrganisationRole.prototype.export.call (this, obj, false);

                base.export_element (obj, "ServiceSupplier", "issuerIdentificationNumber", base.from_string, fields);
                base.export_element (obj, "ServiceSupplier", "kind", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ServiceSupplier_collapse" aria-expanded="true" aria-controls="ServiceSupplier_collapse">ServiceSupplier</a>
<div id="ServiceSupplier_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.OrganisationRole.prototype.template.call (this) +
`
{{#issuerIdentificationNumber}}<div><b>issuerIdentificationNumber</b>: {{issuerIdentificationNumber}}</div>{{/issuerIdentificationNumber}}
{{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
</div>
`
                );
           }        }

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
                base.parse_element (/<cim:Cheque.kind>([\s\S]*?)<\/cim:Cheque.kind>/g, obj, "kind", base.to_string, sub, context);
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

                base.export_element (obj, "Cheque", "bankAccountDetail", base.from_string, fields);
                base.export_element (obj, "Cheque", "chequeNumber", base.from_string, fields);
                base.export_element (obj, "Cheque", "date", base.from_string, fields);
                base.export_element (obj, "Cheque", "kind", base.from_string, fields);
                base.export_element (obj, "Cheque", "micrNumber", base.from_string, fields);
                base.export_attribute (obj, "Cheque", "Tender", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Cheque_collapse" aria-expanded="true" aria-controls="Cheque_collapse">Cheque</a>
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
`
                );
           }        }

        /**
         * Kind of supplier.
         *
         */
        class SupplierKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SupplierKind;
                if (null == bucket)
                   cim_data.SupplierKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SupplierKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SupplierKind";
                base.parse_element (/<cim:SupplierKind.utility>([\s\S]*?)<\/cim:SupplierKind.utility>/g, obj, "utility", base.to_string, sub, context);
                base.parse_element (/<cim:SupplierKind.retailer>([\s\S]*?)<\/cim:SupplierKind.retailer>/g, obj, "retailer", base.to_string, sub, context);
                base.parse_element (/<cim:SupplierKind.other>([\s\S]*?)<\/cim:SupplierKind.other>/g, obj, "other", base.to_string, sub, context);

                var bucket = context.parsed.SupplierKind;
                if (null == bucket)
                   context.parsed.SupplierKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "SupplierKind", "utility", base.from_string, fields);
                base.export_element (obj, "SupplierKind", "retailer", base.from_string, fields);
                base.export_element (obj, "SupplierKind", "other", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#SupplierKind_collapse" aria-expanded="true" aria-controls="SupplierKind_collapse">SupplierKind</a>
<div id="SupplierKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#utility}}<div><b>utility</b>: {{utility}}</div>{{/utility}}
{{#retailer}}<div><b>retailer</b>: {{retailer}}</div>{{/retailer}}
{{#other}}<div><b>other</b>: {{other}}</div>{{/other}}
</div>
`
                );
           }        }

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
                base.parse_element (/<cim:Tender.kind>([\s\S]*?)<\/cim:Tender.kind>/g, obj, "kind", base.to_string, sub, context);
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

                base.export_element (obj, "Tender", "amount", base.from_string, fields);
                base.export_element (obj, "Tender", "change", base.from_string, fields);
                base.export_element (obj, "Tender", "kind", base.from_string, fields);
                base.export_attribute (obj, "Tender", "Cheque", fields);
                base.export_attribute (obj, "Tender", "Card", fields);
                base.export_attribute (obj, "Tender", "Receipt", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Tender_collapse" aria-expanded="true" aria-controls="Tender_collapse">Tender</a>
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
`
                );
           }        }

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

                var bucket = context.parsed.Transactor;
                if (null == bucket)
                   context.parsed.Transactor = bucket = {};
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


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Transactor_collapse" aria-expanded="true" aria-controls="Transactor_collapse">Transactor</a>
<div id="Transactor_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
</div>
`
                );
           }        }

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

                base.export_element (obj, "AuxiliaryAccount", "balance", base.from_string, fields);
                base.export_element (obj, "AuxiliaryAccount", "due", base.from_string, fields);
                base.export_element (obj, "AuxiliaryAccount", "lastCredit", base.from_string, fields);
                base.export_element (obj, "AuxiliaryAccount", "lastDebit", base.from_string, fields);
                base.export_element (obj, "AuxiliaryAccount", "principleAmount", base.from_string, fields);
                base.export_attribute (obj, "AuxiliaryAccount", "AuxiliaryAgreement", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#AuxiliaryAccount_collapse" aria-expanded="true" aria-controls="AuxiliaryAccount_collapse">AuxiliaryAccount</a>
<div id="AuxiliaryAccount_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.Document.prototype.template.call (this) +
`
{{#balance}}<div><b>balance</b>: {{balance}}</div>{{/balance}}
{{#due}}<div><b>due</b>: {{due}}</div>{{/due}}
{{#lastCredit}}<div><b>lastCredit</b>: {{lastCredit}}</div>{{/lastCredit}}
{{#lastDebit}}<div><b>lastDebit</b>: {{lastDebit}}</div>{{/lastDebit}}
{{#principleAmount}}<div><b>principleAmount</b>: {{principleAmount}}</div>{{/principleAmount}}
{{#AuxiliaryAgreement}}<div><b>AuxiliaryAgreement</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AuxiliaryAgreement}}&quot;);})'>{{AuxiliaryAgreement}}</a></div>{{/AuxiliaryAgreement}}
</div>
`
                );
           }        }

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

                base.export_element (obj, "AccountingUnit", "energyUnit", base.from_string, fields);
                base.export_element (obj, "AccountingUnit", "monetaryUnit", base.from_string, fields);
                base.export_element (obj, "AccountingUnit", "multiplier", base.from_string, fields);
                base.export_element (obj, "AccountingUnit", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#AccountingUnit_collapse" aria-expanded="true" aria-controls="AccountingUnit_collapse">AccountingUnit</a>
<div id="AccountingUnit_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#energyUnit}}<div><b>energyUnit</b>: {{energyUnit}}</div>{{/energyUnit}}
{{#monetaryUnit}}<div><b>monetaryUnit</b>: {{monetaryUnit}}</div>{{/monetaryUnit}}
{{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
{{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
</div>
`
                );
           }        }

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

                var bucket = context.parsed.MerchantAgreement;
                if (null == bucket)
                   context.parsed.MerchantAgreement = bucket = {};
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


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MerchantAgreement_collapse" aria-expanded="true" aria-controls="MerchantAgreement_collapse">MerchantAgreement</a>
<div id="MerchantAgreement_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.Agreement.prototype.template.call (this) +
`
</div>
`
                );
           }        }

        /**
         * Kind of transaction.
         *
         */
        class TransactionKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TransactionKind;
                if (null == bucket)
                   cim_data.TransactionKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TransactionKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TransactionKind";
                base.parse_element (/<cim:TransactionKind.serviceChargePayment>([\s\S]*?)<\/cim:TransactionKind.serviceChargePayment>/g, obj, "serviceChargePayment", base.to_string, sub, context);
                base.parse_element (/<cim:TransactionKind.taxChargePayment>([\s\S]*?)<\/cim:TransactionKind.taxChargePayment>/g, obj, "taxChargePayment", base.to_string, sub, context);
                base.parse_element (/<cim:TransactionKind.auxiliaryChargePayment>([\s\S]*?)<\/cim:TransactionKind.auxiliaryChargePayment>/g, obj, "auxiliaryChargePayment", base.to_string, sub, context);
                base.parse_element (/<cim:TransactionKind.accountPayment>([\s\S]*?)<\/cim:TransactionKind.accountPayment>/g, obj, "accountPayment", base.to_string, sub, context);
                base.parse_element (/<cim:TransactionKind.diversePayment>([\s\S]*?)<\/cim:TransactionKind.diversePayment>/g, obj, "diversePayment", base.to_string, sub, context);
                base.parse_element (/<cim:TransactionKind.transactionReversal>([\s\S]*?)<\/cim:TransactionKind.transactionReversal>/g, obj, "transactionReversal", base.to_string, sub, context);
                base.parse_element (/<cim:TransactionKind.tokenSalePayment>([\s\S]*?)<\/cim:TransactionKind.tokenSalePayment>/g, obj, "tokenSalePayment", base.to_string, sub, context);
                base.parse_element (/<cim:TransactionKind.tokenFreeIssue>([\s\S]*?)<\/cim:TransactionKind.tokenFreeIssue>/g, obj, "tokenFreeIssue", base.to_string, sub, context);
                base.parse_element (/<cim:TransactionKind.tokenGrant>([\s\S]*?)<\/cim:TransactionKind.tokenGrant>/g, obj, "tokenGrant", base.to_string, sub, context);
                base.parse_element (/<cim:TransactionKind.tokenExchange>([\s\S]*?)<\/cim:TransactionKind.tokenExchange>/g, obj, "tokenExchange", base.to_string, sub, context);
                base.parse_element (/<cim:TransactionKind.tokenCancellation>([\s\S]*?)<\/cim:TransactionKind.tokenCancellation>/g, obj, "tokenCancellation", base.to_string, sub, context);
                base.parse_element (/<cim:TransactionKind.meterConfigurationToken>([\s\S]*?)<\/cim:TransactionKind.meterConfigurationToken>/g, obj, "meterConfigurationToken", base.to_string, sub, context);
                base.parse_element (/<cim:TransactionKind.other>([\s\S]*?)<\/cim:TransactionKind.other>/g, obj, "other", base.to_string, sub, context);

                var bucket = context.parsed.TransactionKind;
                if (null == bucket)
                   context.parsed.TransactionKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TransactionKind", "serviceChargePayment", base.from_string, fields);
                base.export_element (obj, "TransactionKind", "taxChargePayment", base.from_string, fields);
                base.export_element (obj, "TransactionKind", "auxiliaryChargePayment", base.from_string, fields);
                base.export_element (obj, "TransactionKind", "accountPayment", base.from_string, fields);
                base.export_element (obj, "TransactionKind", "diversePayment", base.from_string, fields);
                base.export_element (obj, "TransactionKind", "transactionReversal", base.from_string, fields);
                base.export_element (obj, "TransactionKind", "tokenSalePayment", base.from_string, fields);
                base.export_element (obj, "TransactionKind", "tokenFreeIssue", base.from_string, fields);
                base.export_element (obj, "TransactionKind", "tokenGrant", base.from_string, fields);
                base.export_element (obj, "TransactionKind", "tokenExchange", base.from_string, fields);
                base.export_element (obj, "TransactionKind", "tokenCancellation", base.from_string, fields);
                base.export_element (obj, "TransactionKind", "meterConfigurationToken", base.from_string, fields);
                base.export_element (obj, "TransactionKind", "other", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TransactionKind_collapse" aria-expanded="true" aria-controls="TransactionKind_collapse">TransactionKind</a>
<div id="TransactionKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#serviceChargePayment}}<div><b>serviceChargePayment</b>: {{serviceChargePayment}}</div>{{/serviceChargePayment}}
{{#taxChargePayment}}<div><b>taxChargePayment</b>: {{taxChargePayment}}</div>{{/taxChargePayment}}
{{#auxiliaryChargePayment}}<div><b>auxiliaryChargePayment</b>: {{auxiliaryChargePayment}}</div>{{/auxiliaryChargePayment}}
{{#accountPayment}}<div><b>accountPayment</b>: {{accountPayment}}</div>{{/accountPayment}}
{{#diversePayment}}<div><b>diversePayment</b>: {{diversePayment}}</div>{{/diversePayment}}
{{#transactionReversal}}<div><b>transactionReversal</b>: {{transactionReversal}}</div>{{/transactionReversal}}
{{#tokenSalePayment}}<div><b>tokenSalePayment</b>: {{tokenSalePayment}}</div>{{/tokenSalePayment}}
{{#tokenFreeIssue}}<div><b>tokenFreeIssue</b>: {{tokenFreeIssue}}</div>{{/tokenFreeIssue}}
{{#tokenGrant}}<div><b>tokenGrant</b>: {{tokenGrant}}</div>{{/tokenGrant}}
{{#tokenExchange}}<div><b>tokenExchange</b>: {{tokenExchange}}</div>{{/tokenExchange}}
{{#tokenCancellation}}<div><b>tokenCancellation</b>: {{tokenCancellation}}</div>{{/tokenCancellation}}
{{#meterConfigurationToken}}<div><b>meterConfigurationToken</b>: {{meterConfigurationToken}}</div>{{/meterConfigurationToken}}
{{#other}}<div><b>other</b>: {{other}}</div>{{/other}}
</div>
`
                );
           }        }

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
                base.parse_element (/<cim:Transaction.kind>([\s\S]*?)<\/cim:Transaction.kind>/g, obj, "kind", base.to_string, sub, context);
                base.parse_element (/<cim:Transaction.line>([\s\S]*?)<\/cim:Transaction.line>/g, obj, "line", base.to_string, sub, context);
                base.parse_element (/<cim:Transaction.receiverReference>([\s\S]*?)<\/cim:Transaction.receiverReference>/g, obj, "receiverReference", base.to_string, sub, context);
                base.parse_element (/<cim:Transaction.reversedId>([\s\S]*?)<\/cim:Transaction.reversedId>/g, obj, "reversedId", base.to_string, sub, context);
                base.parse_element (/<cim:Transaction.serviceUnitsEnergy>([\s\S]*?)<\/cim:Transaction.serviceUnitsEnergy>/g, obj, "serviceUnitsEnergy", base.to_string, sub, context);
                base.parse_element (/<cim:Transaction.serviceUnitsError>([\s\S]*?)<\/cim:Transaction.serviceUnitsError>/g, obj, "serviceUnitsError", base.to_string, sub, context);
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

                base.export_element (obj, "Transaction", "diverseReference", base.from_string, fields);
                base.export_element (obj, "Transaction", "donorReference", base.from_string, fields);
                base.export_element (obj, "Transaction", "kind", base.from_string, fields);
                base.export_element (obj, "Transaction", "line", base.from_string, fields);
                base.export_element (obj, "Transaction", "receiverReference", base.from_string, fields);
                base.export_element (obj, "Transaction", "reversedId", base.from_string, fields);
                base.export_element (obj, "Transaction", "serviceUnitsEnergy", base.from_string, fields);
                base.export_element (obj, "Transaction", "serviceUnitsError", base.from_string, fields);
                base.export_attribute (obj, "Transaction", "PricingStructure", fields);
                base.export_attribute (obj, "Transaction", "AuxiliaryAccount", fields);
                base.export_attribute (obj, "Transaction", "Receipt", fields);
                base.export_attribute (obj, "Transaction", "VendorShift", fields);
                base.export_attribute (obj, "Transaction", "CashierShift", fields);
                base.export_attribute (obj, "Transaction", "Meter", fields);
                base.export_attribute (obj, "Transaction", "CustomerAccount", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Transaction_collapse" aria-expanded="true" aria-controls="Transaction_collapse">Transaction</a>
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
{{#PricingStructure}}<div><b>PricingStructure</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PricingStructure}}&quot;);})'>{{PricingStructure}}</a></div>{{/PricingStructure}}
{{#AuxiliaryAccount}}<div><b>AuxiliaryAccount</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AuxiliaryAccount}}&quot;);})'>{{AuxiliaryAccount}}</a></div>{{/AuxiliaryAccount}}
{{#Receipt}}<div><b>Receipt</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Receipt}}&quot;);})'>{{Receipt}}</a></div>{{/Receipt}}
{{#VendorShift}}<div><b>VendorShift</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{VendorShift}}&quot;);})'>{{VendorShift}}</a></div>{{/VendorShift}}
{{#CashierShift}}<div><b>CashierShift</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CashierShift}}&quot;);})'>{{CashierShift}}</a></div>{{/CashierShift}}
{{#Meter}}<div><b>Meter</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Meter}}&quot;);})'>{{Meter}}</a></div>{{/Meter}}
{{#CustomerAccount}}<div><b>CustomerAccount</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CustomerAccount}}&quot;);})'>{{CustomerAccount}}</a></div>{{/CustomerAccount}}
</div>
`
                );
           }        }

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

                base.export_element (obj, "MerchantAccount", "currentBalance", base.from_string, fields);
                base.export_element (obj, "MerchantAccount", "provisionalBalance", base.from_string, fields);
                base.export_attribute (obj, "MerchantAccount", "MerchantAgreement", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MerchantAccount_collapse" aria-expanded="true" aria-controls="MerchantAccount_collapse">MerchantAccount</a>
<div id="MerchantAccount_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.Document.prototype.template.call (this) +
`
{{#currentBalance}}<div><b>currentBalance</b>: {{currentBalance}}</div>{{/currentBalance}}
{{#provisionalBalance}}<div><b>provisionalBalance</b>: {{provisionalBalance}}</div>{{/provisionalBalance}}
{{#MerchantAgreement}}<div><b>MerchantAgreement</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MerchantAgreement}}&quot;);})'>{{MerchantAgreement}}</a></div>{{/MerchantAgreement}}
</div>
`
                );
           }        }

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

                var bucket = context.parsed.CashierShift;
                if (null == bucket)
                   context.parsed.CashierShift = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Shift.prototype.export.call (this, obj, false);

                base.export_element (obj, "CashierShift", "cashFloat", base.from_string, fields);
                base.export_attribute (obj, "CashierShift", "Cashier", fields);
                base.export_attribute (obj, "CashierShift", "PointOfSale", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#CashierShift_collapse" aria-expanded="true" aria-controls="CashierShift_collapse">CashierShift</a>
<div id="CashierShift_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Shift.prototype.template.call (this) +
`
{{#cashFloat}}<div><b>cashFloat</b>: {{cashFloat}}</div>{{/cashFloat}}
{{#Cashier}}<div><b>Cashier</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Cashier}}&quot;);})'>{{Cashier}}</a></div>{{/Cashier}}
{{#PointOfSale}}<div><b>PointOfSale</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PointOfSale}}&quot;);})'>{{PointOfSale}}</a></div>{{/PointOfSale}}
</div>
`
                );
           }        }

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

                base.export_element (obj, "VendorShift", "merchantDebitAmount", base.from_string, fields);
                base.export_element (obj, "VendorShift", "posted", base.from_boolean, fields);
                base.export_attribute (obj, "VendorShift", "Vendor", fields);
                base.export_attribute (obj, "VendorShift", "MerchantAccount", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#VendorShift_collapse" aria-expanded="true" aria-controls="VendorShift_collapse">VendorShift</a>
<div id="VendorShift_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Shift.prototype.template.call (this) +
`
{{#merchantDebitAmount}}<div><b>merchantDebitAmount</b>: {{merchantDebitAmount}}</div>{{/merchantDebitAmount}}
{{#posted}}<div><b>posted</b>: {{posted}}</div>{{/posted}}
{{#Vendor}}<div><b>Vendor</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Vendor}}&quot;);})'>{{Vendor}}</a></div>{{/Vendor}}
{{#MerchantAccount}}<div><b>MerchantAccount</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MerchantAccount}}&quot;);})'>{{MerchantAccount}}</a></div>{{/MerchantAccount}}
</div>
`
                );
           }        }

        return (
            {
                MerchantAccount: MerchantAccount,
                Cashier: Cashier,
                TenderKind: TenderKind,
                AccountingUnit: AccountingUnit,
                BankAccountDetail: BankAccountDetail,
                ServiceSupplier: ServiceSupplier,
                MerchantAgreement: MerchantAgreement,
                ChargeKind: ChargeKind,
                PointOfSale: PointOfSale,
                Due: Due,
                ChequeKind: ChequeKind,
                Receipt: Receipt,
                VendorShift: VendorShift,
                SupplierKind: SupplierKind,
                Cheque: Cheque,
                LineDetail: LineDetail,
                TariffProfile: TariffProfile,
                AuxiliaryAccount: AuxiliaryAccount,
                Charge: Charge,
                AccountMovement: AccountMovement,
                AuxiliaryAgreement: AuxiliaryAgreement,
                ConsumptionTariffInterval: ConsumptionTariffInterval,
                Tender: Tender,
                Transaction: Transaction,
                Vendor: Vendor,
                CashierShift: CashierShift,
                TimeTariffInterval: TimeTariffInterval,
                Card: Card,
                Transactor: Transactor,
                TransactionKind: TransactionKind,
                Shift: Shift
            }
        );
    }
);