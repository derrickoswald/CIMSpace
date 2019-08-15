define
(
    ["model/base", "model/Common", "model/Core", "model/Domain"],
    /**
     * This package is an extension of the Metering package and contains the information classes that support specialised applications such as prepayment metering.
     *
     * These classes are generally associated with the collection and control of revenue from the customer for a delivered service.
     *
     */
    function (base, Common, Core, Domain)
    {

        /**
         * Kind of tender.
         *
         */
        let TenderKind =
        {
            "cheque": "cheque",
            "card": "card",
            "cash": "cash",
            "unspecified": "unspecified",
            "other": "other"
        };
        Object.freeze (TenderKind);

        /**
         * Kind of cheque.
         *
         */
        let ChequeKind =
        {
            "postalOrder": "postalOrder",
            "bankOrder": "bankOrder",
            "other": "other"
        };
        Object.freeze (ChequeKind);

        /**
         * Kind of transaction.
         *
         */
        let TransactionKind =
        {
            "serviceChargePayment": "serviceChargePayment",
            "taxChargePayment": "taxChargePayment",
            "auxiliaryChargePayment": "auxiliaryChargePayment",
            "accountPayment": "accountPayment",
            "diversePayment": "diversePayment",
            "transactionReversal": "transactionReversal",
            "tokenSalePayment": "tokenSalePayment",
            "tokenFreeIssue": "tokenFreeIssue",
            "tokenGrant": "tokenGrant",
            "tokenExchange": "tokenExchange",
            "tokenCancellation": "tokenCancellation",
            "meterConfigurationToken": "meterConfigurationToken",
            "other": "other"
        };
        Object.freeze (TransactionKind);

        /**
         * Kind of charge.
         *
         */
        let ChargeKind =
        {
            "consumptionCharge": "consumptionCharge",
            "demandCharge": "demandCharge",
            "auxiliaryCharge": "auxiliaryCharge",
            "taxCharge": "taxCharge",
            "other": "other"
        };
        Object.freeze (ChargeKind);

        /**
         * Kind of supplier.
         *
         */
        let SupplierKind =
        {
            "utility": "utility",
            "retailer": "retailer",
            "lse": "lse",
            "mdma": "mdma",
            "msp": "msp",
            "other": "other"
        };
        Object.freeze (SupplierKind);

        /**
         * One of a sequence of intervals defined in terms of consumption quantity of a service such as electricity, water, gas, etc.
         *
         * It is typically used in association with TariffProfile to define the steps or blocks in a step tariff structure, where startValue simultaneously defines the entry value of this step and the closing value of the previous step. Where consumption is >= startValue it falls within this interval and where consumption is < startValue it falls within the previous interval.
         *
         */
        class ConsumptionTariffInterval extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ConsumptionTariffInterval;
                if (null == bucket)
                   cim_data.ConsumptionTariffInterval = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ConsumptionTariffInterval[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ConsumptionTariffInterval";
                base.parse_element (/<cim:ConsumptionTariffInterval.sequenceNumber>([\s\S]*?)<\/cim:ConsumptionTariffInterval.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
                base.parse_element (/<cim:ConsumptionTariffInterval.startValue>([\s\S]*?)<\/cim:ConsumptionTariffInterval.startValue>/g, obj, "startValue", base.to_float, sub, context);
                base.parse_attribute (/<cim:ConsumptionTariffInterval.ReadingType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ReadingType", sub, context);
                base.parse_attributes (/<cim:ConsumptionTariffInterval.Charges\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Charges", sub, context);
                base.parse_attributes (/<cim:ConsumptionTariffInterval.TouTariffIntervals\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TouTariffIntervals", sub, context);
                base.parse_attributes (/<cim:ConsumptionTariffInterval.TariffProfiles\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TariffProfiles", sub, context);
                let bucket = context.parsed.ConsumptionTariffInterval;
                if (null == bucket)
                   context.parsed.ConsumptionTariffInterval = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "ConsumptionTariffInterval", "sequenceNumber", "sequenceNumber",  base.from_string, fields);
                base.export_element (obj, "ConsumptionTariffInterval", "startValue", "startValue",  base.from_float, fields);
                base.export_attribute (obj, "ConsumptionTariffInterval", "ReadingType", "ReadingType", fields);
                base.export_attributes (obj, "ConsumptionTariffInterval", "Charges", "Charges", fields);
                base.export_attributes (obj, "ConsumptionTariffInterval", "TouTariffIntervals", "TouTariffIntervals", fields);
                base.export_attributes (obj, "ConsumptionTariffInterval", "TariffProfiles", "TariffProfiles", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ConsumptionTariffInterval_collapse" aria-expanded="true" aria-controls="ConsumptionTariffInterval_collapse" style="margin-left: 10px;">ConsumptionTariffInterval</a></legend>
                    <div id="ConsumptionTariffInterval_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
                    {{#startValue}}<div><b>startValue</b>: {{startValue}}</div>{{/startValue}}
                    {{#ReadingType}}<div><b>ReadingType</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ReadingType}}&quot;);}); return false;'>{{ReadingType}}</a></div>{{/ReadingType}}
                    {{#Charges}}<div><b>Charges</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Charges}}
                    {{#TouTariffIntervals}}<div><b>TouTariffIntervals</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/TouTariffIntervals}}
                    {{#TariffProfiles}}<div><b>TariffProfiles</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/TariffProfiles}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Charges"]) obj["Charges_string"] = obj["Charges"].join ();
                if (obj["TouTariffIntervals"]) obj["TouTariffIntervals_string"] = obj["TouTariffIntervals"].join ();
                if (obj["TariffProfiles"]) obj["TariffProfiles_string"] = obj["TariffProfiles"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Charges_string"];
                delete obj["TouTariffIntervals_string"];
                delete obj["TariffProfiles_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ConsumptionTariffInterval_collapse" aria-expanded="true" aria-controls="{{id}}_ConsumptionTariffInterval_collapse" style="margin-left: 10px;">ConsumptionTariffInterval</a></legend>
                    <div id="{{id}}_ConsumptionTariffInterval_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sequenceNumber'>sequenceNumber: </label><div class='col-sm-8'><input id='{{id}}_sequenceNumber' class='form-control' type='text'{{#sequenceNumber}} value='{{sequenceNumber}}'{{/sequenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_startValue'>startValue: </label><div class='col-sm-8'><input id='{{id}}_startValue' class='form-control' type='text'{{#startValue}} value='{{startValue}}'{{/startValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ReadingType'>ReadingType: </label><div class='col-sm-8'><input id='{{id}}_ReadingType' class='form-control' type='text'{{#ReadingType}} value='{{ReadingType}}'{{/ReadingType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Charges'>Charges: </label><div class='col-sm-8'><input id='{{id}}_Charges' class='form-control' type='text'{{#Charges}} value='{{Charges_string}}'{{/Charges}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TouTariffIntervals'>TouTariffIntervals: </label><div class='col-sm-8'><input id='{{id}}_TouTariffIntervals' class='form-control' type='text'{{#TouTariffIntervals}} value='{{TouTariffIntervals_string}}'{{/TouTariffIntervals}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TariffProfiles'>TariffProfiles: </label><div class='col-sm-8'><input id='{{id}}_TariffProfiles' class='form-control' type='text'{{#TariffProfiles}} value='{{TariffProfiles_string}}'{{/TariffProfiles}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ConsumptionTariffInterval" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_sequenceNumber").value; if ("" !== temp) obj["sequenceNumber"] = temp;
                temp = document.getElementById (id + "_startValue").value; if ("" !== temp) obj["startValue"] = temp;
                temp = document.getElementById (id + "_ReadingType").value; if ("" !== temp) obj["ReadingType"] = temp;
                temp = document.getElementById (id + "_Charges").value; if ("" !== temp) obj["Charges"] = temp.split (",");
                temp = document.getElementById (id + "_TouTariffIntervals").value; if ("" !== temp) obj["TouTariffIntervals"] = temp.split (",");
                temp = document.getElementById (id + "_TariffProfiles").value; if ("" !== temp) obj["TariffProfiles"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ReadingType", "0..1", "0..*", "ReadingType", "ConsumptionTariffIntervals"],
                            ["Charges", "0..*", "0..*", "Charge", "ConsumptionTariffIntervals"],
                            ["TouTariffIntervals", "0..*", "0..*", "TimeTariffInterval", "ConsumptionTariffIntervals"],
                            ["TariffProfiles", "0..*", "0..*", "TariffProfile", "ConsumptionTariffIntervals"]
                        ]
                    )
                );
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
                let bucket = cim_data.MerchantAgreement;
                if (null == bucket)
                   cim_data.MerchantAgreement = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MerchantAgreement[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Agreement.prototype.parse.call (this, context, sub);
                obj.cls = "MerchantAgreement";
                base.parse_attributes (/<cim:MerchantAgreement.MerchantAccounts\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MerchantAccounts", sub, context);
                let bucket = context.parsed.MerchantAgreement;
                if (null == bucket)
                   context.parsed.MerchantAgreement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Agreement.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "MerchantAgreement", "MerchantAccounts", "MerchantAccounts", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MerchantAgreement_collapse" aria-expanded="true" aria-controls="MerchantAgreement_collapse" style="margin-left: 10px;">MerchantAgreement</a></legend>
                    <div id="MerchantAgreement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.template.call (this) +
                    `
                    {{#MerchantAccounts}}<div><b>MerchantAccounts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/MerchantAccounts}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["MerchantAccounts"]) obj["MerchantAccounts_string"] = obj["MerchantAccounts"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["MerchantAccounts_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MerchantAgreement_collapse" aria-expanded="true" aria-controls="{{id}}_MerchantAgreement_collapse" style="margin-left: 10px;">MerchantAgreement</a></legend>
                    <div id="{{id}}_MerchantAgreement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "MerchantAgreement" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MerchantAccounts", "0..*", "0..1", "MerchantAccount", "MerchantAgreement"]
                        ]
                    )
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
                let bucket = cim_data.Transactor;
                if (null == bucket)
                   cim_data.Transactor = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Transactor[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Transactor";
                base.parse_attributes (/<cim:Transactor.MerchantAccounts\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MerchantAccounts", sub, context);
                let bucket = context.parsed.Transactor;
                if (null == bucket)
                   context.parsed.Transactor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "Transactor", "MerchantAccounts", "MerchantAccounts", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Transactor_collapse" aria-expanded="true" aria-controls="Transactor_collapse" style="margin-left: 10px;">Transactor</a></legend>
                    <div id="Transactor_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#MerchantAccounts}}<div><b>MerchantAccounts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/MerchantAccounts}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["MerchantAccounts"]) obj["MerchantAccounts_string"] = obj["MerchantAccounts"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["MerchantAccounts_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Transactor_collapse" aria-expanded="true" aria-controls="{{id}}_Transactor_collapse" style="margin-left: 10px;">Transactor</a></legend>
                    <div id="{{id}}_Transactor_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MerchantAccounts'>MerchantAccounts: </label><div class='col-sm-8'><input id='{{id}}_MerchantAccounts' class='form-control' type='text'{{#MerchantAccounts}} value='{{MerchantAccounts_string}}'{{/MerchantAccounts}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Transactor" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_MerchantAccounts").value; if ("" !== temp) obj["MerchantAccounts"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MerchantAccounts", "0..*", "0..*", "MerchantAccount", "Transactors"]
                        ]
                    )
                );
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
                let bucket = cim_data.Cashier;
                if (null == bucket)
                   cim_data.Cashier = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Cashier[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Cashier";
                base.parse_attribute (/<cim:Cashier.electronicAddress\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "electronicAddress", sub, context);
                base.parse_attributes (/<cim:Cashier.CashierShifts\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CashierShifts", sub, context);
                let bucket = context.parsed.Cashier;
                if (null == bucket)
                   context.parsed.Cashier = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Cashier", "electronicAddress", "electronicAddress", fields);
                base.export_attributes (obj, "Cashier", "CashierShifts", "CashierShifts", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Cashier_collapse" aria-expanded="true" aria-controls="Cashier_collapse" style="margin-left: 10px;">Cashier</a></legend>
                    <div id="Cashier_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#electronicAddress}}<div><b>electronicAddress</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{electronicAddress}}&quot;);}); return false;'>{{electronicAddress}}</a></div>{{/electronicAddress}}
                    {{#CashierShifts}}<div><b>CashierShifts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/CashierShifts}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["CashierShifts"]) obj["CashierShifts_string"] = obj["CashierShifts"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["CashierShifts_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Cashier_collapse" aria-expanded="true" aria-controls="{{id}}_Cashier_collapse" style="margin-left: 10px;">Cashier</a></legend>
                    <div id="{{id}}_Cashier_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_electronicAddress'>electronicAddress: </label><div class='col-sm-8'><input id='{{id}}_electronicAddress' class='form-control' type='text'{{#electronicAddress}} value='{{electronicAddress}}'{{/electronicAddress}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Cashier" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_electronicAddress").value; if ("" !== temp) obj["electronicAddress"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CashierShifts", "0..*", "0..1", "CashierShift", "Cashier"]
                        ]
                    )
                );
            }
        }

        /**
         * Generally referring to a period of operation or work performed.
         *
         * Whether the shift is open/closed can be derived from attributes 'activityInterval.start' and 'activityInterval.end'.
         * The grand total for receipts (i.e., cumulative total of all actual receipted amounts during this shift; bankable + non-bankable; excludes rounding error totals) can be derived from receipt:
         * &equals;sum('Receipt.receiptAmount'); includes bankable and non-bankable receipts.
         * It also has to be reconciled against:
         * &equals;sum('receiptsGrandTotalBankable' + 'receiptsGrandTotalNonBankable')
         * and against receipt summary:
         * &equals;sum('ReceiptSummary.receiptsTotal').
         * The attributes with "GrandTotal" defined in this class may need to be used when the source data is periodically flushed from the system and then these cannot be derived.
         *
         */
        class Shift extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Shift;
                if (null == bucket)
                   cim_data.Shift = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Shift[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Shift";
                base.parse_attribute (/<cim:Shift.activityInterval\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "activityInterval", sub, context);
                base.parse_element (/<cim:Shift.receiptsGrandTotalBankable>([\s\S]*?)<\/cim:Shift.receiptsGrandTotalBankable>/g, obj, "receiptsGrandTotalBankable", base.to_string, sub, context);
                base.parse_element (/<cim:Shift.receiptsGrandTotalNonBankable>([\s\S]*?)<\/cim:Shift.receiptsGrandTotalNonBankable>/g, obj, "receiptsGrandTotalNonBankable", base.to_string, sub, context);
                base.parse_element (/<cim:Shift.receiptsGrandTotalRounding>([\s\S]*?)<\/cim:Shift.receiptsGrandTotalRounding>/g, obj, "receiptsGrandTotalRounding", base.to_string, sub, context);
                base.parse_element (/<cim:Shift.transactionsGrandTotal>([\s\S]*?)<\/cim:Shift.transactionsGrandTotal>/g, obj, "transactionsGrandTotal", base.to_string, sub, context);
                base.parse_element (/<cim:Shift.transactionsGrandTotalRounding>([\s\S]*?)<\/cim:Shift.transactionsGrandTotalRounding>/g, obj, "transactionsGrandTotalRounding", base.to_string, sub, context);
                let bucket = context.parsed.Shift;
                if (null == bucket)
                   context.parsed.Shift = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Shift", "activityInterval", "activityInterval", fields);
                base.export_element (obj, "Shift", "receiptsGrandTotalBankable", "receiptsGrandTotalBankable",  base.from_string, fields);
                base.export_element (obj, "Shift", "receiptsGrandTotalNonBankable", "receiptsGrandTotalNonBankable",  base.from_string, fields);
                base.export_element (obj, "Shift", "receiptsGrandTotalRounding", "receiptsGrandTotalRounding",  base.from_string, fields);
                base.export_element (obj, "Shift", "transactionsGrandTotal", "transactionsGrandTotal",  base.from_string, fields);
                base.export_element (obj, "Shift", "transactionsGrandTotalRounding", "transactionsGrandTotalRounding",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Shift_collapse" aria-expanded="true" aria-controls="Shift_collapse" style="margin-left: 10px;">Shift</a></legend>
                    <div id="Shift_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Shift_collapse" aria-expanded="true" aria-controls="{{id}}_Shift_collapse" style="margin-left: 10px;">Shift</a></legend>
                    <div id="{{id}}_Shift_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_activityInterval'>activityInterval: </label><div class='col-sm-8'><input id='{{id}}_activityInterval' class='form-control' type='text'{{#activityInterval}} value='{{activityInterval}}'{{/activityInterval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_receiptsGrandTotalBankable'>receiptsGrandTotalBankable: </label><div class='col-sm-8'><input id='{{id}}_receiptsGrandTotalBankable' class='form-control' type='text'{{#receiptsGrandTotalBankable}} value='{{receiptsGrandTotalBankable}}'{{/receiptsGrandTotalBankable}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_receiptsGrandTotalNonBankable'>receiptsGrandTotalNonBankable: </label><div class='col-sm-8'><input id='{{id}}_receiptsGrandTotalNonBankable' class='form-control' type='text'{{#receiptsGrandTotalNonBankable}} value='{{receiptsGrandTotalNonBankable}}'{{/receiptsGrandTotalNonBankable}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_receiptsGrandTotalRounding'>receiptsGrandTotalRounding: </label><div class='col-sm-8'><input id='{{id}}_receiptsGrandTotalRounding' class='form-control' type='text'{{#receiptsGrandTotalRounding}} value='{{receiptsGrandTotalRounding}}'{{/receiptsGrandTotalRounding}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_transactionsGrandTotal'>transactionsGrandTotal: </label><div class='col-sm-8'><input id='{{id}}_transactionsGrandTotal' class='form-control' type='text'{{#transactionsGrandTotal}} value='{{transactionsGrandTotal}}'{{/transactionsGrandTotal}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_transactionsGrandTotalRounding'>transactionsGrandTotalRounding: </label><div class='col-sm-8'><input id='{{id}}_transactionsGrandTotalRounding' class='form-control' type='text'{{#transactionsGrandTotalRounding}} value='{{transactionsGrandTotalRounding}}'{{/transactionsGrandTotalRounding}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Shift" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_activityInterval").value; if ("" !== temp) obj["activityInterval"] = temp;
                temp = document.getElementById (id + "_receiptsGrandTotalBankable").value; if ("" !== temp) obj["receiptsGrandTotalBankable"] = temp;
                temp = document.getElementById (id + "_receiptsGrandTotalNonBankable").value; if ("" !== temp) obj["receiptsGrandTotalNonBankable"] = temp;
                temp = document.getElementById (id + "_receiptsGrandTotalRounding").value; if ("" !== temp) obj["receiptsGrandTotalRounding"] = temp;
                temp = document.getElementById (id + "_transactionsGrandTotal").value; if ("" !== temp) obj["transactionsGrandTotal"] = temp;
                temp = document.getElementById (id + "_transactionsGrandTotalRounding").value; if ("" !== temp) obj["transactionsGrandTotalRounding"] = temp;

                return (obj);
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
                let bucket = cim_data.Due;
                if (null == bucket)
                   cim_data.Due = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Due[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Due";
                base.parse_element (/<cim:Due.current>([\s\S]*?)<\/cim:Due.current>/g, obj, "current", base.to_string, sub, context);
                base.parse_element (/<cim:Due.principle>([\s\S]*?)<\/cim:Due.principle>/g, obj, "principle", base.to_string, sub, context);
                base.parse_element (/<cim:Due.arrears>([\s\S]*?)<\/cim:Due.arrears>/g, obj, "arrears", base.to_string, sub, context);
                base.parse_element (/<cim:Due.interest>([\s\S]*?)<\/cim:Due.interest>/g, obj, "interest", base.to_string, sub, context);
                base.parse_element (/<cim:Due.charges>([\s\S]*?)<\/cim:Due.charges>/g, obj, "charges", base.to_string, sub, context);
                let bucket = context.parsed.Due;
                if (null == bucket)
                   context.parsed.Due = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "Due", "current", "current",  base.from_string, fields);
                base.export_element (obj, "Due", "principle", "principle",  base.from_string, fields);
                base.export_element (obj, "Due", "arrears", "arrears",  base.from_string, fields);
                base.export_element (obj, "Due", "interest", "interest",  base.from_string, fields);
                base.export_element (obj, "Due", "charges", "charges",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Due_collapse" aria-expanded="true" aria-controls="Due_collapse" style="margin-left: 10px;">Due</a></legend>
                    <div id="Due_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#current}}<div><b>current</b>: {{current}}</div>{{/current}}
                    {{#principle}}<div><b>principle</b>: {{principle}}</div>{{/principle}}
                    {{#arrears}}<div><b>arrears</b>: {{arrears}}</div>{{/arrears}}
                    {{#interest}}<div><b>interest</b>: {{interest}}</div>{{/interest}}
                    {{#charges}}<div><b>charges</b>: {{charges}}</div>{{/charges}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Due_collapse" aria-expanded="true" aria-controls="{{id}}_Due_collapse" style="margin-left: 10px;">Due</a></legend>
                    <div id="{{id}}_Due_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_current'>current: </label><div class='col-sm-8'><input id='{{id}}_current' class='form-control' type='text'{{#current}} value='{{current}}'{{/current}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_principle'>principle: </label><div class='col-sm-8'><input id='{{id}}_principle' class='form-control' type='text'{{#principle}} value='{{principle}}'{{/principle}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_arrears'>arrears: </label><div class='col-sm-8'><input id='{{id}}_arrears' class='form-control' type='text'{{#arrears}} value='{{arrears}}'{{/arrears}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_interest'>interest: </label><div class='col-sm-8'><input id='{{id}}_interest' class='form-control' type='text'{{#interest}} value='{{interest}}'{{/interest}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_charges'>charges: </label><div class='col-sm-8'><input id='{{id}}_charges' class='form-control' type='text'{{#charges}} value='{{charges}}'{{/charges}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Due" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_current").value; if ("" !== temp) obj["current"] = temp;
                temp = document.getElementById (id + "_principle").value; if ("" !== temp) obj["principle"] = temp;
                temp = document.getElementById (id + "_arrears").value; if ("" !== temp) obj["arrears"] = temp;
                temp = document.getElementById (id + "_interest").value; if ("" !== temp) obj["interest"] = temp;
                temp = document.getElementById (id + "_charges").value; if ("" !== temp) obj["charges"] = temp;

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
                let bucket = cim_data.PointOfSale;
                if (null == bucket)
                   cim_data.PointOfSale = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PointOfSale[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "PointOfSale";
                base.parse_element (/<cim:PointOfSale.location>([\s\S]*?)<\/cim:PointOfSale.location>/g, obj, "location", base.to_string, sub, context);
                base.parse_attributes (/<cim:PointOfSale.CashierShifts\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CashierShifts", sub, context);
                let bucket = context.parsed.PointOfSale;
                if (null == bucket)
                   context.parsed.PointOfSale = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "PointOfSale", "location", "location",  base.from_string, fields);
                base.export_attributes (obj, "PointOfSale", "CashierShifts", "CashierShifts", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PointOfSale_collapse" aria-expanded="true" aria-controls="PointOfSale_collapse" style="margin-left: 10px;">PointOfSale</a></legend>
                    <div id="PointOfSale_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#location}}<div><b>location</b>: {{location}}</div>{{/location}}
                    {{#CashierShifts}}<div><b>CashierShifts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/CashierShifts}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["CashierShifts"]) obj["CashierShifts_string"] = obj["CashierShifts"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["CashierShifts_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PointOfSale_collapse" aria-expanded="true" aria-controls="{{id}}_PointOfSale_collapse" style="margin-left: 10px;">PointOfSale</a></legend>
                    <div id="{{id}}_PointOfSale_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_location'>location: </label><div class='col-sm-8'><input id='{{id}}_location' class='form-control' type='text'{{#location}} value='{{location}}'{{/location}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PointOfSale" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_location").value; if ("" !== temp) obj["location"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CashierShifts", "0..*", "0..1", "CashierShift", "PointOfSale"]
                        ]
                    )
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
                let bucket = cim_data.Cheque;
                if (null == bucket)
                   cim_data.Cheque = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Cheque[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Cheque";
                base.parse_attribute (/<cim:Cheque.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:Cheque.date>([\s\S]*?)<\/cim:Cheque.date>/g, obj, "date", base.to_string, sub, context);
                base.parse_element (/<cim:Cheque.micrNumber>([\s\S]*?)<\/cim:Cheque.micrNumber>/g, obj, "micrNumber", base.to_string, sub, context);
                base.parse_element (/<cim:Cheque.chequeNumber>([\s\S]*?)<\/cim:Cheque.chequeNumber>/g, obj, "chequeNumber", base.to_string, sub, context);
                base.parse_attribute (/<cim:Cheque.bankAccountDetail\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "bankAccountDetail", sub, context);
                base.parse_attribute (/<cim:Cheque.Tender\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Tender", sub, context);
                let bucket = context.parsed.Cheque;
                if (null == bucket)
                   context.parsed.Cheque = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "Cheque", "kind", "kind", fields);
                base.export_element (obj, "Cheque", "date", "date",  base.from_string, fields);
                base.export_element (obj, "Cheque", "micrNumber", "micrNumber",  base.from_string, fields);
                base.export_element (obj, "Cheque", "chequeNumber", "chequeNumber",  base.from_string, fields);
                base.export_attribute (obj, "Cheque", "bankAccountDetail", "bankAccountDetail", fields);
                base.export_attribute (obj, "Cheque", "Tender", "Tender", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Cheque_collapse" aria-expanded="true" aria-controls="Cheque_collapse" style="margin-left: 10px;">Cheque</a></legend>
                    <div id="Cheque_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#date}}<div><b>date</b>: {{date}}</div>{{/date}}
                    {{#micrNumber}}<div><b>micrNumber</b>: {{micrNumber}}</div>{{/micrNumber}}
                    {{#chequeNumber}}<div><b>chequeNumber</b>: {{chequeNumber}}</div>{{/chequeNumber}}
                    {{#bankAccountDetail}}<div><b>bankAccountDetail</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{bankAccountDetail}}&quot;);}); return false;'>{{bankAccountDetail}}</a></div>{{/bankAccountDetail}}
                    {{#Tender}}<div><b>Tender</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Tender}}&quot;);}); return false;'>{{Tender}}</a></div>{{/Tender}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindChequeKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in ChequeKind) obj["kindChequeKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindChequeKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Cheque_collapse" aria-expanded="true" aria-controls="{{id}}_Cheque_collapse" style="margin-left: 10px;">Cheque</a></legend>
                    <div id="{{id}}_Cheque_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindChequeKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindChequeKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_date'>date: </label><div class='col-sm-8'><input id='{{id}}_date' class='form-control' type='text'{{#date}} value='{{date}}'{{/date}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_micrNumber'>micrNumber: </label><div class='col-sm-8'><input id='{{id}}_micrNumber' class='form-control' type='text'{{#micrNumber}} value='{{micrNumber}}'{{/micrNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_chequeNumber'>chequeNumber: </label><div class='col-sm-8'><input id='{{id}}_chequeNumber' class='form-control' type='text'{{#chequeNumber}} value='{{chequeNumber}}'{{/chequeNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bankAccountDetail'>bankAccountDetail: </label><div class='col-sm-8'><input id='{{id}}_bankAccountDetail' class='form-control' type='text'{{#bankAccountDetail}} value='{{bankAccountDetail}}'{{/bankAccountDetail}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Tender'>Tender: </label><div class='col-sm-8'><input id='{{id}}_Tender' class='form-control' type='text'{{#Tender}} value='{{Tender}}'{{/Tender}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Cheque" };
                super.submit (id, obj);
                temp = ChequeKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#ChequeKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_date").value; if ("" !== temp) obj["date"] = temp;
                temp = document.getElementById (id + "_micrNumber").value; if ("" !== temp) obj["micrNumber"] = temp;
                temp = document.getElementById (id + "_chequeNumber").value; if ("" !== temp) obj["chequeNumber"] = temp;
                temp = document.getElementById (id + "_bankAccountDetail").value; if ("" !== temp) obj["bankAccountDetail"] = temp;
                temp = document.getElementById (id + "_Tender").value; if ("" !== temp) obj["Tender"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Tender", "1", "0..1", "Tender", "Cheque"]
                        ]
                    )
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
                let bucket = cim_data.Card;
                if (null == bucket)
                   cim_data.Card = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Card[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Card";
                base.parse_element (/<cim:Card.cvNumber>([\s\S]*?)<\/cim:Card.cvNumber>/g, obj, "cvNumber", base.to_string, sub, context);
                base.parse_element (/<cim:Card.expiryDate>([\s\S]*?)<\/cim:Card.expiryDate>/g, obj, "expiryDate", base.to_string, sub, context);
                base.parse_element (/<cim:Card.pan>([\s\S]*?)<\/cim:Card.pan>/g, obj, "pan", base.to_string, sub, context);
                base.parse_element (/<cim:Card.accountHolderName>([\s\S]*?)<\/cim:Card.accountHolderName>/g, obj, "accountHolderName", base.to_string, sub, context);
                base.parse_attribute (/<cim:Card.Tender\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Tender", sub, context);
                let bucket = context.parsed.Card;
                if (null == bucket)
                   context.parsed.Card = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "Card", "cvNumber", "cvNumber",  base.from_string, fields);
                base.export_element (obj, "Card", "expiryDate", "expiryDate",  base.from_string, fields);
                base.export_element (obj, "Card", "pan", "pan",  base.from_string, fields);
                base.export_element (obj, "Card", "accountHolderName", "accountHolderName",  base.from_string, fields);
                base.export_attribute (obj, "Card", "Tender", "Tender", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Card_collapse" aria-expanded="true" aria-controls="Card_collapse" style="margin-left: 10px;">Card</a></legend>
                    <div id="Card_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#cvNumber}}<div><b>cvNumber</b>: {{cvNumber}}</div>{{/cvNumber}}
                    {{#expiryDate}}<div><b>expiryDate</b>: {{expiryDate}}</div>{{/expiryDate}}
                    {{#pan}}<div><b>pan</b>: {{pan}}</div>{{/pan}}
                    {{#accountHolderName}}<div><b>accountHolderName</b>: {{accountHolderName}}</div>{{/accountHolderName}}
                    {{#Tender}}<div><b>Tender</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Tender}}&quot;);}); return false;'>{{Tender}}</a></div>{{/Tender}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Card_collapse" aria-expanded="true" aria-controls="{{id}}_Card_collapse" style="margin-left: 10px;">Card</a></legend>
                    <div id="{{id}}_Card_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cvNumber'>cvNumber: </label><div class='col-sm-8'><input id='{{id}}_cvNumber' class='form-control' type='text'{{#cvNumber}} value='{{cvNumber}}'{{/cvNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_expiryDate'>expiryDate: </label><div class='col-sm-8'><input id='{{id}}_expiryDate' class='form-control' type='text'{{#expiryDate}} value='{{expiryDate}}'{{/expiryDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pan'>pan: </label><div class='col-sm-8'><input id='{{id}}_pan' class='form-control' type='text'{{#pan}} value='{{pan}}'{{/pan}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_accountHolderName'>accountHolderName: </label><div class='col-sm-8'><input id='{{id}}_accountHolderName' class='form-control' type='text'{{#accountHolderName}} value='{{accountHolderName}}'{{/accountHolderName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Tender'>Tender: </label><div class='col-sm-8'><input id='{{id}}_Tender' class='form-control' type='text'{{#Tender}} value='{{Tender}}'{{/Tender}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Card" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_cvNumber").value; if ("" !== temp) obj["cvNumber"] = temp;
                temp = document.getElementById (id + "_expiryDate").value; if ("" !== temp) obj["expiryDate"] = temp;
                temp = document.getElementById (id + "_pan").value; if ("" !== temp) obj["pan"] = temp;
                temp = document.getElementById (id + "_accountHolderName").value; if ("" !== temp) obj["accountHolderName"] = temp;
                temp = document.getElementById (id + "_Tender").value; if ("" !== temp) obj["Tender"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Tender", "1", "0..1", "Tender", "Card"]
                        ]
                    )
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
                let bucket = cim_data.AccountMovement;
                if (null == bucket)
                   cim_data.AccountMovement = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AccountMovement[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AccountMovement";
                base.parse_element (/<cim:AccountMovement.amount>([\s\S]*?)<\/cim:AccountMovement.amount>/g, obj, "amount", base.to_string, sub, context);
                base.parse_element (/<cim:AccountMovement.reason>([\s\S]*?)<\/cim:AccountMovement.reason>/g, obj, "reason", base.to_string, sub, context);
                base.parse_element (/<cim:AccountMovement.dateTime>([\s\S]*?)<\/cim:AccountMovement.dateTime>/g, obj, "dateTime", base.to_datetime, sub, context);
                let bucket = context.parsed.AccountMovement;
                if (null == bucket)
                   context.parsed.AccountMovement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "AccountMovement", "amount", "amount",  base.from_string, fields);
                base.export_element (obj, "AccountMovement", "reason", "reason",  base.from_string, fields);
                base.export_element (obj, "AccountMovement", "dateTime", "dateTime",  base.from_datetime, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AccountMovement_collapse" aria-expanded="true" aria-controls="AccountMovement_collapse" style="margin-left: 10px;">AccountMovement</a></legend>
                    <div id="AccountMovement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#amount}}<div><b>amount</b>: {{amount}}</div>{{/amount}}
                    {{#reason}}<div><b>reason</b>: {{reason}}</div>{{/reason}}
                    {{#dateTime}}<div><b>dateTime</b>: {{dateTime}}</div>{{/dateTime}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AccountMovement_collapse" aria-expanded="true" aria-controls="{{id}}_AccountMovement_collapse" style="margin-left: 10px;">AccountMovement</a></legend>
                    <div id="{{id}}_AccountMovement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_amount'>amount: </label><div class='col-sm-8'><input id='{{id}}_amount' class='form-control' type='text'{{#amount}} value='{{amount}}'{{/amount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_reason'>reason: </label><div class='col-sm-8'><input id='{{id}}_reason' class='form-control' type='text'{{#reason}} value='{{reason}}'{{/reason}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dateTime'>dateTime: </label><div class='col-sm-8'><input id='{{id}}_dateTime' class='form-control' type='text'{{#dateTime}} value='{{dateTime}}'{{/dateTime}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AccountMovement" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_amount").value; if ("" !== temp) obj["amount"] = temp;
                temp = document.getElementById (id + "_reason").value; if ("" !== temp) obj["reason"] = temp;
                temp = document.getElementById (id + "_dateTime").value; if ("" !== temp) obj["dateTime"] = temp;

                return (obj);
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
                let bucket = cim_data.Transaction;
                if (null == bucket)
                   cim_data.Transaction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Transaction[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Transaction";
                base.parse_attribute (/<cim:Transaction.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:Transaction.receiverReference>([\s\S]*?)<\/cim:Transaction.receiverReference>/g, obj, "receiverReference", base.to_string, sub, context);
                base.parse_element (/<cim:Transaction.donorReference>([\s\S]*?)<\/cim:Transaction.donorReference>/g, obj, "donorReference", base.to_string, sub, context);
                base.parse_element (/<cim:Transaction.diverseReference>([\s\S]*?)<\/cim:Transaction.diverseReference>/g, obj, "diverseReference", base.to_string, sub, context);
                base.parse_element (/<cim:Transaction.reversedId>([\s\S]*?)<\/cim:Transaction.reversedId>/g, obj, "reversedId", base.to_string, sub, context);
                base.parse_element (/<cim:Transaction.serviceUnitsEnergy>([\s\S]*?)<\/cim:Transaction.serviceUnitsEnergy>/g, obj, "serviceUnitsEnergy", base.to_string, sub, context);
                base.parse_element (/<cim:Transaction.serviceUnitsError>([\s\S]*?)<\/cim:Transaction.serviceUnitsError>/g, obj, "serviceUnitsError", base.to_string, sub, context);
                base.parse_attribute (/<cim:Transaction.line\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "line", sub, context);
                base.parse_attribute (/<cim:Transaction.Receipt\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Receipt", sub, context);
                base.parse_attribute (/<cim:Transaction.VendorShift\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "VendorShift", sub, context);
                base.parse_attribute (/<cim:Transaction.CustomerAccount\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAccount", sub, context);
                base.parse_attributes (/<cim:Transaction.UserAttributes\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "UserAttributes", sub, context);
                base.parse_attribute (/<cim:Transaction.PricingStructure\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PricingStructure", sub, context);
                base.parse_attribute (/<cim:Transaction.CashierShift\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CashierShift", sub, context);
                base.parse_attribute (/<cim:Transaction.AuxiliaryAccount\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AuxiliaryAccount", sub, context);
                base.parse_attribute (/<cim:Transaction.Meter\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Meter", sub, context);
                let bucket = context.parsed.Transaction;
                if (null == bucket)
                   context.parsed.Transaction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Transaction", "kind", "kind", fields);
                base.export_element (obj, "Transaction", "receiverReference", "receiverReference",  base.from_string, fields);
                base.export_element (obj, "Transaction", "donorReference", "donorReference",  base.from_string, fields);
                base.export_element (obj, "Transaction", "diverseReference", "diverseReference",  base.from_string, fields);
                base.export_element (obj, "Transaction", "reversedId", "reversedId",  base.from_string, fields);
                base.export_element (obj, "Transaction", "serviceUnitsEnergy", "serviceUnitsEnergy",  base.from_string, fields);
                base.export_element (obj, "Transaction", "serviceUnitsError", "serviceUnitsError",  base.from_string, fields);
                base.export_attribute (obj, "Transaction", "line", "line", fields);
                base.export_attribute (obj, "Transaction", "Receipt", "Receipt", fields);
                base.export_attribute (obj, "Transaction", "VendorShift", "VendorShift", fields);
                base.export_attribute (obj, "Transaction", "CustomerAccount", "CustomerAccount", fields);
                base.export_attributes (obj, "Transaction", "UserAttributes", "UserAttributes", fields);
                base.export_attribute (obj, "Transaction", "PricingStructure", "PricingStructure", fields);
                base.export_attribute (obj, "Transaction", "CashierShift", "CashierShift", fields);
                base.export_attribute (obj, "Transaction", "AuxiliaryAccount", "AuxiliaryAccount", fields);
                base.export_attribute (obj, "Transaction", "Meter", "Meter", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Transaction_collapse" aria-expanded="true" aria-controls="Transaction_collapse" style="margin-left: 10px;">Transaction</a></legend>
                    <div id="Transaction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#receiverReference}}<div><b>receiverReference</b>: {{receiverReference}}</div>{{/receiverReference}}
                    {{#donorReference}}<div><b>donorReference</b>: {{donorReference}}</div>{{/donorReference}}
                    {{#diverseReference}}<div><b>diverseReference</b>: {{diverseReference}}</div>{{/diverseReference}}
                    {{#reversedId}}<div><b>reversedId</b>: {{reversedId}}</div>{{/reversedId}}
                    {{#serviceUnitsEnergy}}<div><b>serviceUnitsEnergy</b>: {{serviceUnitsEnergy}}</div>{{/serviceUnitsEnergy}}
                    {{#serviceUnitsError}}<div><b>serviceUnitsError</b>: {{serviceUnitsError}}</div>{{/serviceUnitsError}}
                    {{#line}}<div><b>line</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{line}}&quot;);}); return false;'>{{line}}</a></div>{{/line}}
                    {{#Receipt}}<div><b>Receipt</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Receipt}}&quot;);}); return false;'>{{Receipt}}</a></div>{{/Receipt}}
                    {{#VendorShift}}<div><b>VendorShift</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{VendorShift}}&quot;);}); return false;'>{{VendorShift}}</a></div>{{/VendorShift}}
                    {{#CustomerAccount}}<div><b>CustomerAccount</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CustomerAccount}}&quot;);}); return false;'>{{CustomerAccount}}</a></div>{{/CustomerAccount}}
                    {{#UserAttributes}}<div><b>UserAttributes</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/UserAttributes}}
                    {{#PricingStructure}}<div><b>PricingStructure</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PricingStructure}}&quot;);}); return false;'>{{PricingStructure}}</a></div>{{/PricingStructure}}
                    {{#CashierShift}}<div><b>CashierShift</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CashierShift}}&quot;);}); return false;'>{{CashierShift}}</a></div>{{/CashierShift}}
                    {{#AuxiliaryAccount}}<div><b>AuxiliaryAccount</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AuxiliaryAccount}}&quot;);}); return false;'>{{AuxiliaryAccount}}</a></div>{{/AuxiliaryAccount}}
                    {{#Meter}}<div><b>Meter</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Meter}}&quot;);}); return false;'>{{Meter}}</a></div>{{/Meter}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindTransactionKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in TransactionKind) obj["kindTransactionKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
                if (obj["UserAttributes"]) obj["UserAttributes_string"] = obj["UserAttributes"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindTransactionKind"];
                delete obj["UserAttributes_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Transaction_collapse" aria-expanded="true" aria-controls="{{id}}_Transaction_collapse" style="margin-left: 10px;">Transaction</a></legend>
                    <div id="{{id}}_Transaction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindTransactionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindTransactionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_receiverReference'>receiverReference: </label><div class='col-sm-8'><input id='{{id}}_receiverReference' class='form-control' type='text'{{#receiverReference}} value='{{receiverReference}}'{{/receiverReference}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_donorReference'>donorReference: </label><div class='col-sm-8'><input id='{{id}}_donorReference' class='form-control' type='text'{{#donorReference}} value='{{donorReference}}'{{/donorReference}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_diverseReference'>diverseReference: </label><div class='col-sm-8'><input id='{{id}}_diverseReference' class='form-control' type='text'{{#diverseReference}} value='{{diverseReference}}'{{/diverseReference}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_reversedId'>reversedId: </label><div class='col-sm-8'><input id='{{id}}_reversedId' class='form-control' type='text'{{#reversedId}} value='{{reversedId}}'{{/reversedId}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_serviceUnitsEnergy'>serviceUnitsEnergy: </label><div class='col-sm-8'><input id='{{id}}_serviceUnitsEnergy' class='form-control' type='text'{{#serviceUnitsEnergy}} value='{{serviceUnitsEnergy}}'{{/serviceUnitsEnergy}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_serviceUnitsError'>serviceUnitsError: </label><div class='col-sm-8'><input id='{{id}}_serviceUnitsError' class='form-control' type='text'{{#serviceUnitsError}} value='{{serviceUnitsError}}'{{/serviceUnitsError}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_line'>line: </label><div class='col-sm-8'><input id='{{id}}_line' class='form-control' type='text'{{#line}} value='{{line}}'{{/line}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Receipt'>Receipt: </label><div class='col-sm-8'><input id='{{id}}_Receipt' class='form-control' type='text'{{#Receipt}} value='{{Receipt}}'{{/Receipt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_VendorShift'>VendorShift: </label><div class='col-sm-8'><input id='{{id}}_VendorShift' class='form-control' type='text'{{#VendorShift}} value='{{VendorShift}}'{{/VendorShift}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CustomerAccount'>CustomerAccount: </label><div class='col-sm-8'><input id='{{id}}_CustomerAccount' class='form-control' type='text'{{#CustomerAccount}} value='{{CustomerAccount}}'{{/CustomerAccount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PricingStructure'>PricingStructure: </label><div class='col-sm-8'><input id='{{id}}_PricingStructure' class='form-control' type='text'{{#PricingStructure}} value='{{PricingStructure}}'{{/PricingStructure}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CashierShift'>CashierShift: </label><div class='col-sm-8'><input id='{{id}}_CashierShift' class='form-control' type='text'{{#CashierShift}} value='{{CashierShift}}'{{/CashierShift}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AuxiliaryAccount'>AuxiliaryAccount: </label><div class='col-sm-8'><input id='{{id}}_AuxiliaryAccount' class='form-control' type='text'{{#AuxiliaryAccount}} value='{{AuxiliaryAccount}}'{{/AuxiliaryAccount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Meter'>Meter: </label><div class='col-sm-8'><input id='{{id}}_Meter' class='form-control' type='text'{{#Meter}} value='{{Meter}}'{{/Meter}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Transaction" };
                super.submit (id, obj);
                temp = TransactionKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#TransactionKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_receiverReference").value; if ("" !== temp) obj["receiverReference"] = temp;
                temp = document.getElementById (id + "_donorReference").value; if ("" !== temp) obj["donorReference"] = temp;
                temp = document.getElementById (id + "_diverseReference").value; if ("" !== temp) obj["diverseReference"] = temp;
                temp = document.getElementById (id + "_reversedId").value; if ("" !== temp) obj["reversedId"] = temp;
                temp = document.getElementById (id + "_serviceUnitsEnergy").value; if ("" !== temp) obj["serviceUnitsEnergy"] = temp;
                temp = document.getElementById (id + "_serviceUnitsError").value; if ("" !== temp) obj["serviceUnitsError"] = temp;
                temp = document.getElementById (id + "_line").value; if ("" !== temp) obj["line"] = temp;
                temp = document.getElementById (id + "_Receipt").value; if ("" !== temp) obj["Receipt"] = temp;
                temp = document.getElementById (id + "_VendorShift").value; if ("" !== temp) obj["VendorShift"] = temp;
                temp = document.getElementById (id + "_CustomerAccount").value; if ("" !== temp) obj["CustomerAccount"] = temp;
                temp = document.getElementById (id + "_PricingStructure").value; if ("" !== temp) obj["PricingStructure"] = temp;
                temp = document.getElementById (id + "_CashierShift").value; if ("" !== temp) obj["CashierShift"] = temp;
                temp = document.getElementById (id + "_AuxiliaryAccount").value; if ("" !== temp) obj["AuxiliaryAccount"] = temp;
                temp = document.getElementById (id + "_Meter").value; if ("" !== temp) obj["Meter"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Receipt", "0..1", "1..*", "Receipt", "Transactions"],
                            ["VendorShift", "0..1", "0..*", "VendorShift", "Transactions"],
                            ["CustomerAccount", "0..1", "0..*", "CustomerAccount", "PaymentTransactions"],
                            ["UserAttributes", "0..*", "0..1", "UserAttribute", "Transaction"],
                            ["PricingStructure", "0..1", "0..*", "PricingStructure", "Transactions"],
                            ["CashierShift", "0..1", "0..*", "CashierShift", "Transactions"],
                            ["AuxiliaryAccount", "0..1", "0..*", "AuxiliaryAccount", "PaymentTransactions"],
                            ["Meter", "0..1", "0..*", "Meter", "VendingTransactions"]
                        ]
                    )
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
                let bucket = cim_data.TariffProfile;
                if (null == bucket)
                   cim_data.TariffProfile = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TariffProfile[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "TariffProfile";
                base.parse_element (/<cim:TariffProfile.tariffCycle>([\s\S]*?)<\/cim:TariffProfile.tariffCycle>/g, obj, "tariffCycle", base.to_string, sub, context);
                base.parse_attributes (/<cim:TariffProfile.Tariffs\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Tariffs", sub, context);
                base.parse_attributes (/<cim:TariffProfile.TimeTariffIntervals\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TimeTariffIntervals", sub, context);
                base.parse_attributes (/<cim:TariffProfile.ConsumptionTariffIntervals\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ConsumptionTariffIntervals", sub, context);
                let bucket = context.parsed.TariffProfile;
                if (null == bucket)
                   context.parsed.TariffProfile = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "TariffProfile", "tariffCycle", "tariffCycle",  base.from_string, fields);
                base.export_attributes (obj, "TariffProfile", "Tariffs", "Tariffs", fields);
                base.export_attributes (obj, "TariffProfile", "TimeTariffIntervals", "TimeTariffIntervals", fields);
                base.export_attributes (obj, "TariffProfile", "ConsumptionTariffIntervals", "ConsumptionTariffIntervals", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TariffProfile_collapse" aria-expanded="true" aria-controls="TariffProfile_collapse" style="margin-left: 10px;">TariffProfile</a></legend>
                    <div id="TariffProfile_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#tariffCycle}}<div><b>tariffCycle</b>: {{tariffCycle}}</div>{{/tariffCycle}}
                    {{#Tariffs}}<div><b>Tariffs</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Tariffs}}
                    {{#TimeTariffIntervals}}<div><b>TimeTariffIntervals</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/TimeTariffIntervals}}
                    {{#ConsumptionTariffIntervals}}<div><b>ConsumptionTariffIntervals</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ConsumptionTariffIntervals}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Tariffs"]) obj["Tariffs_string"] = obj["Tariffs"].join ();
                if (obj["TimeTariffIntervals"]) obj["TimeTariffIntervals_string"] = obj["TimeTariffIntervals"].join ();
                if (obj["ConsumptionTariffIntervals"]) obj["ConsumptionTariffIntervals_string"] = obj["ConsumptionTariffIntervals"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Tariffs_string"];
                delete obj["TimeTariffIntervals_string"];
                delete obj["ConsumptionTariffIntervals_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TariffProfile_collapse" aria-expanded="true" aria-controls="{{id}}_TariffProfile_collapse" style="margin-left: 10px;">TariffProfile</a></legend>
                    <div id="{{id}}_TariffProfile_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tariffCycle'>tariffCycle: </label><div class='col-sm-8'><input id='{{id}}_tariffCycle' class='form-control' type='text'{{#tariffCycle}} value='{{tariffCycle}}'{{/tariffCycle}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Tariffs'>Tariffs: </label><div class='col-sm-8'><input id='{{id}}_Tariffs' class='form-control' type='text'{{#Tariffs}} value='{{Tariffs_string}}'{{/Tariffs}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TimeTariffIntervals'>TimeTariffIntervals: </label><div class='col-sm-8'><input id='{{id}}_TimeTariffIntervals' class='form-control' type='text'{{#TimeTariffIntervals}} value='{{TimeTariffIntervals_string}}'{{/TimeTariffIntervals}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ConsumptionTariffIntervals'>ConsumptionTariffIntervals: </label><div class='col-sm-8'><input id='{{id}}_ConsumptionTariffIntervals' class='form-control' type='text'{{#ConsumptionTariffIntervals}} value='{{ConsumptionTariffIntervals_string}}'{{/ConsumptionTariffIntervals}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "TariffProfile" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_tariffCycle").value; if ("" !== temp) obj["tariffCycle"] = temp;
                temp = document.getElementById (id + "_Tariffs").value; if ("" !== temp) obj["Tariffs"] = temp.split (",");
                temp = document.getElementById (id + "_TimeTariffIntervals").value; if ("" !== temp) obj["TimeTariffIntervals"] = temp.split (",");
                temp = document.getElementById (id + "_ConsumptionTariffIntervals").value; if ("" !== temp) obj["ConsumptionTariffIntervals"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Tariffs", "0..*", "0..*", "Tariff", "TariffProfiles"],
                            ["TimeTariffIntervals", "0..*", "0..*", "TimeTariffInterval", "TariffProfiles"],
                            ["ConsumptionTariffIntervals", "0..*", "0..*", "ConsumptionTariffInterval", "TariffProfiles"]
                        ]
                    )
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
                let bucket = cim_data.BankAccountDetail;
                if (null == bucket)
                   cim_data.BankAccountDetail = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BankAccountDetail[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "BankAccountDetail";
                base.parse_element (/<cim:BankAccountDetail.accountNumber>([\s\S]*?)<\/cim:BankAccountDetail.accountNumber>/g, obj, "accountNumber", base.to_string, sub, context);
                base.parse_element (/<cim:BankAccountDetail.holderName>([\s\S]*?)<\/cim:BankAccountDetail.holderName>/g, obj, "holderName", base.to_string, sub, context);
                base.parse_element (/<cim:BankAccountDetail.holderID>([\s\S]*?)<\/cim:BankAccountDetail.holderID>/g, obj, "holderID", base.to_string, sub, context);
                base.parse_element (/<cim:BankAccountDetail.bankName>([\s\S]*?)<\/cim:BankAccountDetail.bankName>/g, obj, "bankName", base.to_string, sub, context);
                base.parse_element (/<cim:BankAccountDetail.branchCode>([\s\S]*?)<\/cim:BankAccountDetail.branchCode>/g, obj, "branchCode", base.to_string, sub, context);
                let bucket = context.parsed.BankAccountDetail;
                if (null == bucket)
                   context.parsed.BankAccountDetail = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "BankAccountDetail", "accountNumber", "accountNumber",  base.from_string, fields);
                base.export_element (obj, "BankAccountDetail", "holderName", "holderName",  base.from_string, fields);
                base.export_element (obj, "BankAccountDetail", "holderID", "holderID",  base.from_string, fields);
                base.export_element (obj, "BankAccountDetail", "bankName", "bankName",  base.from_string, fields);
                base.export_element (obj, "BankAccountDetail", "branchCode", "branchCode",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#BankAccountDetail_collapse" aria-expanded="true" aria-controls="BankAccountDetail_collapse" style="margin-left: 10px;">BankAccountDetail</a></legend>
                    <div id="BankAccountDetail_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#accountNumber}}<div><b>accountNumber</b>: {{accountNumber}}</div>{{/accountNumber}}
                    {{#holderName}}<div><b>holderName</b>: {{holderName}}</div>{{/holderName}}
                    {{#holderID}}<div><b>holderID</b>: {{holderID}}</div>{{/holderID}}
                    {{#bankName}}<div><b>bankName</b>: {{bankName}}</div>{{/bankName}}
                    {{#branchCode}}<div><b>branchCode</b>: {{branchCode}}</div>{{/branchCode}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_BankAccountDetail_collapse" aria-expanded="true" aria-controls="{{id}}_BankAccountDetail_collapse" style="margin-left: 10px;">BankAccountDetail</a></legend>
                    <div id="{{id}}_BankAccountDetail_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_accountNumber'>accountNumber: </label><div class='col-sm-8'><input id='{{id}}_accountNumber' class='form-control' type='text'{{#accountNumber}} value='{{accountNumber}}'{{/accountNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_holderName'>holderName: </label><div class='col-sm-8'><input id='{{id}}_holderName' class='form-control' type='text'{{#holderName}} value='{{holderName}}'{{/holderName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_holderID'>holderID: </label><div class='col-sm-8'><input id='{{id}}_holderID' class='form-control' type='text'{{#holderID}} value='{{holderID}}'{{/holderID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bankName'>bankName: </label><div class='col-sm-8'><input id='{{id}}_bankName' class='form-control' type='text'{{#bankName}} value='{{bankName}}'{{/bankName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_branchCode'>branchCode: </label><div class='col-sm-8'><input id='{{id}}_branchCode' class='form-control' type='text'{{#branchCode}} value='{{branchCode}}'{{/branchCode}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "BankAccountDetail" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_accountNumber").value; if ("" !== temp) obj["accountNumber"] = temp;
                temp = document.getElementById (id + "_holderName").value; if ("" !== temp) obj["holderName"] = temp;
                temp = document.getElementById (id + "_holderID").value; if ("" !== temp) obj["holderID"] = temp;
                temp = document.getElementById (id + "_bankName").value; if ("" !== temp) obj["bankName"] = temp;
                temp = document.getElementById (id + "_branchCode").value; if ("" !== temp) obj["branchCode"] = temp;

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
                let bucket = cim_data.LineDetail;
                if (null == bucket)
                   cim_data.LineDetail = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LineDetail[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "LineDetail";
                base.parse_element (/<cim:LineDetail.amount>([\s\S]*?)<\/cim:LineDetail.amount>/g, obj, "amount", base.to_string, sub, context);
                base.parse_element (/<cim:LineDetail.rounding>([\s\S]*?)<\/cim:LineDetail.rounding>/g, obj, "rounding", base.to_string, sub, context);
                base.parse_element (/<cim:LineDetail.dateTime>([\s\S]*?)<\/cim:LineDetail.dateTime>/g, obj, "dateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:LineDetail.note>([\s\S]*?)<\/cim:LineDetail.note>/g, obj, "note", base.to_string, sub, context);
                let bucket = context.parsed.LineDetail;
                if (null == bucket)
                   context.parsed.LineDetail = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "LineDetail", "amount", "amount",  base.from_string, fields);
                base.export_element (obj, "LineDetail", "rounding", "rounding",  base.from_string, fields);
                base.export_element (obj, "LineDetail", "dateTime", "dateTime",  base.from_datetime, fields);
                base.export_element (obj, "LineDetail", "note", "note",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#LineDetail_collapse" aria-expanded="true" aria-controls="LineDetail_collapse" style="margin-left: 10px;">LineDetail</a></legend>
                    <div id="LineDetail_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#amount}}<div><b>amount</b>: {{amount}}</div>{{/amount}}
                    {{#rounding}}<div><b>rounding</b>: {{rounding}}</div>{{/rounding}}
                    {{#dateTime}}<div><b>dateTime</b>: {{dateTime}}</div>{{/dateTime}}
                    {{#note}}<div><b>note</b>: {{note}}</div>{{/note}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_LineDetail_collapse" aria-expanded="true" aria-controls="{{id}}_LineDetail_collapse" style="margin-left: 10px;">LineDetail</a></legend>
                    <div id="{{id}}_LineDetail_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_amount'>amount: </label><div class='col-sm-8'><input id='{{id}}_amount' class='form-control' type='text'{{#amount}} value='{{amount}}'{{/amount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rounding'>rounding: </label><div class='col-sm-8'><input id='{{id}}_rounding' class='form-control' type='text'{{#rounding}} value='{{rounding}}'{{/rounding}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dateTime'>dateTime: </label><div class='col-sm-8'><input id='{{id}}_dateTime' class='form-control' type='text'{{#dateTime}} value='{{dateTime}}'{{/dateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_note'>note: </label><div class='col-sm-8'><input id='{{id}}_note' class='form-control' type='text'{{#note}} value='{{note}}'{{/note}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "LineDetail" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_amount").value; if ("" !== temp) obj["amount"] = temp;
                temp = document.getElementById (id + "_rounding").value; if ("" !== temp) obj["rounding"] = temp;
                temp = document.getElementById (id + "_dateTime").value; if ("" !== temp) obj["dateTime"] = temp;
                temp = document.getElementById (id + "_note").value; if ("" !== temp) obj["note"] = temp;

                return (obj);
            }
        }

        /**
         * Record of total receipted payment from customer.
         *
         */
        class Receipt extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Receipt;
                if (null == bucket)
                   cim_data.Receipt = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Receipt[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Receipt";
                base.parse_element (/<cim:Receipt.isBankable>([\s\S]*?)<\/cim:Receipt.isBankable>/g, obj, "isBankable", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:Receipt.line\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "line", sub, context);
                base.parse_attribute (/<cim:Receipt.VendorShift\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "VendorShift", sub, context);
                base.parse_attributes (/<cim:Receipt.Transactions\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Transactions", sub, context);
                base.parse_attributes (/<cim:Receipt.Tenders\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Tenders", sub, context);
                base.parse_attribute (/<cim:Receipt.CashierShift\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CashierShift", sub, context);
                let bucket = context.parsed.Receipt;
                if (null == bucket)
                   context.parsed.Receipt = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Receipt", "isBankable", "isBankable",  base.from_boolean, fields);
                base.export_attribute (obj, "Receipt", "line", "line", fields);
                base.export_attribute (obj, "Receipt", "VendorShift", "VendorShift", fields);
                base.export_attributes (obj, "Receipt", "Transactions", "Transactions", fields);
                base.export_attributes (obj, "Receipt", "Tenders", "Tenders", fields);
                base.export_attribute (obj, "Receipt", "CashierShift", "CashierShift", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Receipt_collapse" aria-expanded="true" aria-controls="Receipt_collapse" style="margin-left: 10px;">Receipt</a></legend>
                    <div id="Receipt_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#isBankable}}<div><b>isBankable</b>: {{isBankable}}</div>{{/isBankable}}
                    {{#line}}<div><b>line</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{line}}&quot;);}); return false;'>{{line}}</a></div>{{/line}}
                    {{#VendorShift}}<div><b>VendorShift</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{VendorShift}}&quot;);}); return false;'>{{VendorShift}}</a></div>{{/VendorShift}}
                    {{#Transactions}}<div><b>Transactions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Transactions}}
                    {{#Tenders}}<div><b>Tenders</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Tenders}}
                    {{#CashierShift}}<div><b>CashierShift</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CashierShift}}&quot;);}); return false;'>{{CashierShift}}</a></div>{{/CashierShift}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Transactions"]) obj["Transactions_string"] = obj["Transactions"].join ();
                if (obj["Tenders"]) obj["Tenders_string"] = obj["Tenders"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Transactions_string"];
                delete obj["Tenders_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Receipt_collapse" aria-expanded="true" aria-controls="{{id}}_Receipt_collapse" style="margin-left: 10px;">Receipt</a></legend>
                    <div id="{{id}}_Receipt_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isBankable'>isBankable: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isBankable' class='form-check-input' type='checkbox'{{#isBankable}} checked{{/isBankable}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_line'>line: </label><div class='col-sm-8'><input id='{{id}}_line' class='form-control' type='text'{{#line}} value='{{line}}'{{/line}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_VendorShift'>VendorShift: </label><div class='col-sm-8'><input id='{{id}}_VendorShift' class='form-control' type='text'{{#VendorShift}} value='{{VendorShift}}'{{/VendorShift}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CashierShift'>CashierShift: </label><div class='col-sm-8'><input id='{{id}}_CashierShift' class='form-control' type='text'{{#CashierShift}} value='{{CashierShift}}'{{/CashierShift}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Receipt" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_isBankable").checked; if (temp) obj["isBankable"] = true;
                temp = document.getElementById (id + "_line").value; if ("" !== temp) obj["line"] = temp;
                temp = document.getElementById (id + "_VendorShift").value; if ("" !== temp) obj["VendorShift"] = temp;
                temp = document.getElementById (id + "_CashierShift").value; if ("" !== temp) obj["CashierShift"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["VendorShift", "0..1", "0..*", "VendorShift", "Receipts"],
                            ["Transactions", "1..*", "0..1", "Transaction", "Receipt"],
                            ["Tenders", "1..*", "1", "Tender", "Receipt"],
                            ["CashierShift", "0..1", "0..*", "CashierShift", "Receipts"]
                        ]
                    )
                );
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
                let bucket = cim_data.Charge;
                if (null == bucket)
                   cim_data.Charge = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Charge[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Charge";
                base.parse_attribute (/<cim:Charge.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:Charge.fixedPortion\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "fixedPortion", sub, context);
                base.parse_element (/<cim:Charge.variablePortion>([\s\S]*?)<\/cim:Charge.variablePortion>/g, obj, "variablePortion", base.to_string, sub, context);
                base.parse_attributes (/<cim:Charge.TimeTariffIntervals\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TimeTariffIntervals", sub, context);
                base.parse_attributes (/<cim:Charge.ConsumptionTariffIntervals\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ConsumptionTariffIntervals", sub, context);
                base.parse_attribute (/<cim:Charge.ParentCharge\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ParentCharge", sub, context);
                base.parse_attributes (/<cim:Charge.ChildCharges\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ChildCharges", sub, context);
                base.parse_attributes (/<cim:Charge.AuxiliaryAccounts\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AuxiliaryAccounts", sub, context);
                let bucket = context.parsed.Charge;
                if (null == bucket)
                   context.parsed.Charge = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Charge", "kind", "kind", fields);
                base.export_attribute (obj, "Charge", "fixedPortion", "fixedPortion", fields);
                base.export_element (obj, "Charge", "variablePortion", "variablePortion",  base.from_string, fields);
                base.export_attributes (obj, "Charge", "TimeTariffIntervals", "TimeTariffIntervals", fields);
                base.export_attributes (obj, "Charge", "ConsumptionTariffIntervals", "ConsumptionTariffIntervals", fields);
                base.export_attribute (obj, "Charge", "ParentCharge", "ParentCharge", fields);
                base.export_attributes (obj, "Charge", "ChildCharges", "ChildCharges", fields);
                base.export_attributes (obj, "Charge", "AuxiliaryAccounts", "AuxiliaryAccounts", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Charge_collapse" aria-expanded="true" aria-controls="Charge_collapse" style="margin-left: 10px;">Charge</a></legend>
                    <div id="Charge_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#fixedPortion}}<div><b>fixedPortion</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{fixedPortion}}&quot;);}); return false;'>{{fixedPortion}}</a></div>{{/fixedPortion}}
                    {{#variablePortion}}<div><b>variablePortion</b>: {{variablePortion}}</div>{{/variablePortion}}
                    {{#TimeTariffIntervals}}<div><b>TimeTariffIntervals</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/TimeTariffIntervals}}
                    {{#ConsumptionTariffIntervals}}<div><b>ConsumptionTariffIntervals</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ConsumptionTariffIntervals}}
                    {{#ParentCharge}}<div><b>ParentCharge</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ParentCharge}}&quot;);}); return false;'>{{ParentCharge}}</a></div>{{/ParentCharge}}
                    {{#ChildCharges}}<div><b>ChildCharges</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ChildCharges}}
                    {{#AuxiliaryAccounts}}<div><b>AuxiliaryAccounts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/AuxiliaryAccounts}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindChargeKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in ChargeKind) obj["kindChargeKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
                if (obj["TimeTariffIntervals"]) obj["TimeTariffIntervals_string"] = obj["TimeTariffIntervals"].join ();
                if (obj["ConsumptionTariffIntervals"]) obj["ConsumptionTariffIntervals_string"] = obj["ConsumptionTariffIntervals"].join ();
                if (obj["ChildCharges"]) obj["ChildCharges_string"] = obj["ChildCharges"].join ();
                if (obj["AuxiliaryAccounts"]) obj["AuxiliaryAccounts_string"] = obj["AuxiliaryAccounts"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindChargeKind"];
                delete obj["TimeTariffIntervals_string"];
                delete obj["ConsumptionTariffIntervals_string"];
                delete obj["ChildCharges_string"];
                delete obj["AuxiliaryAccounts_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Charge_collapse" aria-expanded="true" aria-controls="{{id}}_Charge_collapse" style="margin-left: 10px;">Charge</a></legend>
                    <div id="{{id}}_Charge_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindChargeKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindChargeKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fixedPortion'>fixedPortion: </label><div class='col-sm-8'><input id='{{id}}_fixedPortion' class='form-control' type='text'{{#fixedPortion}} value='{{fixedPortion}}'{{/fixedPortion}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_variablePortion'>variablePortion: </label><div class='col-sm-8'><input id='{{id}}_variablePortion' class='form-control' type='text'{{#variablePortion}} value='{{variablePortion}}'{{/variablePortion}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TimeTariffIntervals'>TimeTariffIntervals: </label><div class='col-sm-8'><input id='{{id}}_TimeTariffIntervals' class='form-control' type='text'{{#TimeTariffIntervals}} value='{{TimeTariffIntervals_string}}'{{/TimeTariffIntervals}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ConsumptionTariffIntervals'>ConsumptionTariffIntervals: </label><div class='col-sm-8'><input id='{{id}}_ConsumptionTariffIntervals' class='form-control' type='text'{{#ConsumptionTariffIntervals}} value='{{ConsumptionTariffIntervals_string}}'{{/ConsumptionTariffIntervals}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ParentCharge'>ParentCharge: </label><div class='col-sm-8'><input id='{{id}}_ParentCharge' class='form-control' type='text'{{#ParentCharge}} value='{{ParentCharge}}'{{/ParentCharge}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AuxiliaryAccounts'>AuxiliaryAccounts: </label><div class='col-sm-8'><input id='{{id}}_AuxiliaryAccounts' class='form-control' type='text'{{#AuxiliaryAccounts}} value='{{AuxiliaryAccounts_string}}'{{/AuxiliaryAccounts}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Charge" };
                super.submit (id, obj);
                temp = ChargeKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#ChargeKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_fixedPortion").value; if ("" !== temp) obj["fixedPortion"] = temp;
                temp = document.getElementById (id + "_variablePortion").value; if ("" !== temp) obj["variablePortion"] = temp;
                temp = document.getElementById (id + "_TimeTariffIntervals").value; if ("" !== temp) obj["TimeTariffIntervals"] = temp.split (",");
                temp = document.getElementById (id + "_ConsumptionTariffIntervals").value; if ("" !== temp) obj["ConsumptionTariffIntervals"] = temp.split (",");
                temp = document.getElementById (id + "_ParentCharge").value; if ("" !== temp) obj["ParentCharge"] = temp;
                temp = document.getElementById (id + "_AuxiliaryAccounts").value; if ("" !== temp) obj["AuxiliaryAccounts"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TimeTariffIntervals", "0..*", "0..*", "TimeTariffInterval", "Charges"],
                            ["ConsumptionTariffIntervals", "0..*", "0..*", "ConsumptionTariffInterval", "Charges"],
                            ["ParentCharge", "0..1", "0..*", "Charge", "ChildCharges"],
                            ["ChildCharges", "0..*", "0..1", "Charge", "ParentCharge"],
                            ["AuxiliaryAccounts", "0..*", "0..*", "AuxiliaryAccount", "Charges"]
                        ]
                    )
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
                let bucket = cim_data.AuxiliaryAccount;
                if (null == bucket)
                   cim_data.AuxiliaryAccount = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AuxiliaryAccount[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "AuxiliaryAccount";
                base.parse_element (/<cim:AuxiliaryAccount.principleAmount>([\s\S]*?)<\/cim:AuxiliaryAccount.principleAmount>/g, obj, "principleAmount", base.to_string, sub, context);
                base.parse_element (/<cim:AuxiliaryAccount.balance>([\s\S]*?)<\/cim:AuxiliaryAccount.balance>/g, obj, "balance", base.to_string, sub, context);
                base.parse_attribute (/<cim:AuxiliaryAccount.due\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "due", sub, context);
                base.parse_attribute (/<cim:AuxiliaryAccount.lastCredit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "lastCredit", sub, context);
                base.parse_attribute (/<cim:AuxiliaryAccount.lastDebit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "lastDebit", sub, context);
                base.parse_attribute (/<cim:AuxiliaryAccount.AuxiliaryAgreement\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AuxiliaryAgreement", sub, context);
                base.parse_attributes (/<cim:AuxiliaryAccount.Charges\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Charges", sub, context);
                base.parse_attributes (/<cim:AuxiliaryAccount.PaymentTransactions\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PaymentTransactions", sub, context);
                let bucket = context.parsed.AuxiliaryAccount;
                if (null == bucket)
                   context.parsed.AuxiliaryAccount = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "AuxiliaryAccount", "principleAmount", "principleAmount",  base.from_string, fields);
                base.export_element (obj, "AuxiliaryAccount", "balance", "balance",  base.from_string, fields);
                base.export_attribute (obj, "AuxiliaryAccount", "due", "due", fields);
                base.export_attribute (obj, "AuxiliaryAccount", "lastCredit", "lastCredit", fields);
                base.export_attribute (obj, "AuxiliaryAccount", "lastDebit", "lastDebit", fields);
                base.export_attribute (obj, "AuxiliaryAccount", "AuxiliaryAgreement", "AuxiliaryAgreement", fields);
                base.export_attributes (obj, "AuxiliaryAccount", "Charges", "Charges", fields);
                base.export_attributes (obj, "AuxiliaryAccount", "PaymentTransactions", "PaymentTransactions", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AuxiliaryAccount_collapse" aria-expanded="true" aria-controls="AuxiliaryAccount_collapse" style="margin-left: 10px;">AuxiliaryAccount</a></legend>
                    <div id="AuxiliaryAccount_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#principleAmount}}<div><b>principleAmount</b>: {{principleAmount}}</div>{{/principleAmount}}
                    {{#balance}}<div><b>balance</b>: {{balance}}</div>{{/balance}}
                    {{#due}}<div><b>due</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{due}}&quot;);}); return false;'>{{due}}</a></div>{{/due}}
                    {{#lastCredit}}<div><b>lastCredit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{lastCredit}}&quot;);}); return false;'>{{lastCredit}}</a></div>{{/lastCredit}}
                    {{#lastDebit}}<div><b>lastDebit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{lastDebit}}&quot;);}); return false;'>{{lastDebit}}</a></div>{{/lastDebit}}
                    {{#AuxiliaryAgreement}}<div><b>AuxiliaryAgreement</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AuxiliaryAgreement}}&quot;);}); return false;'>{{AuxiliaryAgreement}}</a></div>{{/AuxiliaryAgreement}}
                    {{#Charges}}<div><b>Charges</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Charges}}
                    {{#PaymentTransactions}}<div><b>PaymentTransactions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/PaymentTransactions}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Charges"]) obj["Charges_string"] = obj["Charges"].join ();
                if (obj["PaymentTransactions"]) obj["PaymentTransactions_string"] = obj["PaymentTransactions"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Charges_string"];
                delete obj["PaymentTransactions_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AuxiliaryAccount_collapse" aria-expanded="true" aria-controls="{{id}}_AuxiliaryAccount_collapse" style="margin-left: 10px;">AuxiliaryAccount</a></legend>
                    <div id="{{id}}_AuxiliaryAccount_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_principleAmount'>principleAmount: </label><div class='col-sm-8'><input id='{{id}}_principleAmount' class='form-control' type='text'{{#principleAmount}} value='{{principleAmount}}'{{/principleAmount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_balance'>balance: </label><div class='col-sm-8'><input id='{{id}}_balance' class='form-control' type='text'{{#balance}} value='{{balance}}'{{/balance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_due'>due: </label><div class='col-sm-8'><input id='{{id}}_due' class='form-control' type='text'{{#due}} value='{{due}}'{{/due}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lastCredit'>lastCredit: </label><div class='col-sm-8'><input id='{{id}}_lastCredit' class='form-control' type='text'{{#lastCredit}} value='{{lastCredit}}'{{/lastCredit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lastDebit'>lastDebit: </label><div class='col-sm-8'><input id='{{id}}_lastDebit' class='form-control' type='text'{{#lastDebit}} value='{{lastDebit}}'{{/lastDebit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AuxiliaryAgreement'>AuxiliaryAgreement: </label><div class='col-sm-8'><input id='{{id}}_AuxiliaryAgreement' class='form-control' type='text'{{#AuxiliaryAgreement}} value='{{AuxiliaryAgreement}}'{{/AuxiliaryAgreement}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Charges'>Charges: </label><div class='col-sm-8'><input id='{{id}}_Charges' class='form-control' type='text'{{#Charges}} value='{{Charges_string}}'{{/Charges}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AuxiliaryAccount" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_principleAmount").value; if ("" !== temp) obj["principleAmount"] = temp;
                temp = document.getElementById (id + "_balance").value; if ("" !== temp) obj["balance"] = temp;
                temp = document.getElementById (id + "_due").value; if ("" !== temp) obj["due"] = temp;
                temp = document.getElementById (id + "_lastCredit").value; if ("" !== temp) obj["lastCredit"] = temp;
                temp = document.getElementById (id + "_lastDebit").value; if ("" !== temp) obj["lastDebit"] = temp;
                temp = document.getElementById (id + "_AuxiliaryAgreement").value; if ("" !== temp) obj["AuxiliaryAgreement"] = temp;
                temp = document.getElementById (id + "_Charges").value; if ("" !== temp) obj["Charges"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AuxiliaryAgreement", "0..1", "1..*", "AuxiliaryAgreement", "AuxiliaryAccounts"],
                            ["Charges", "0..*", "0..*", "Charge", "AuxiliaryAccounts"],
                            ["PaymentTransactions", "0..*", "0..1", "Transaction", "AuxiliaryAccount"]
                        ]
                    )
                );
            }
        }

        /**
         * Tender is what is "offered" by the customer towards making a payment and is often more than the required payment (hence the need for 'change').
         *
         * The payment is thus that part of the Tender that goes towards settlement of a particular transaction.
         * Tender is modelled as an aggregation of Cheque and Card. Both these tender types can exist in a single tender bid thus 'accountHolderName' has to exist separately in each of Cheque and Card as each could have a different account holder name.
         *
         */
        class Tender extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Tender;
                if (null == bucket)
                   cim_data.Tender = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Tender[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Tender";
                base.parse_attribute (/<cim:Tender.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:Tender.amount>([\s\S]*?)<\/cim:Tender.amount>/g, obj, "amount", base.to_string, sub, context);
                base.parse_element (/<cim:Tender.change>([\s\S]*?)<\/cim:Tender.change>/g, obj, "change", base.to_string, sub, context);
                base.parse_attribute (/<cim:Tender.Card\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Card", sub, context);
                base.parse_attribute (/<cim:Tender.Receipt\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Receipt", sub, context);
                base.parse_attribute (/<cim:Tender.Cheque\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Cheque", sub, context);
                let bucket = context.parsed.Tender;
                if (null == bucket)
                   context.parsed.Tender = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Tender", "kind", "kind", fields);
                base.export_element (obj, "Tender", "amount", "amount",  base.from_string, fields);
                base.export_element (obj, "Tender", "change", "change",  base.from_string, fields);
                base.export_attribute (obj, "Tender", "Card", "Card", fields);
                base.export_attribute (obj, "Tender", "Receipt", "Receipt", fields);
                base.export_attribute (obj, "Tender", "Cheque", "Cheque", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Tender_collapse" aria-expanded="true" aria-controls="Tender_collapse" style="margin-left: 10px;">Tender</a></legend>
                    <div id="Tender_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#amount}}<div><b>amount</b>: {{amount}}</div>{{/amount}}
                    {{#change}}<div><b>change</b>: {{change}}</div>{{/change}}
                    {{#Card}}<div><b>Card</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Card}}&quot;);}); return false;'>{{Card}}</a></div>{{/Card}}
                    {{#Receipt}}<div><b>Receipt</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Receipt}}&quot;);}); return false;'>{{Receipt}}</a></div>{{/Receipt}}
                    {{#Cheque}}<div><b>Cheque</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Cheque}}&quot;);}); return false;'>{{Cheque}}</a></div>{{/Cheque}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindTenderKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in TenderKind) obj["kindTenderKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindTenderKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Tender_collapse" aria-expanded="true" aria-controls="{{id}}_Tender_collapse" style="margin-left: 10px;">Tender</a></legend>
                    <div id="{{id}}_Tender_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindTenderKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindTenderKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_amount'>amount: </label><div class='col-sm-8'><input id='{{id}}_amount' class='form-control' type='text'{{#amount}} value='{{amount}}'{{/amount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_change'>change: </label><div class='col-sm-8'><input id='{{id}}_change' class='form-control' type='text'{{#change}} value='{{change}}'{{/change}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Card'>Card: </label><div class='col-sm-8'><input id='{{id}}_Card' class='form-control' type='text'{{#Card}} value='{{Card}}'{{/Card}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Receipt'>Receipt: </label><div class='col-sm-8'><input id='{{id}}_Receipt' class='form-control' type='text'{{#Receipt}} value='{{Receipt}}'{{/Receipt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Cheque'>Cheque: </label><div class='col-sm-8'><input id='{{id}}_Cheque' class='form-control' type='text'{{#Cheque}} value='{{Cheque}}'{{/Cheque}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Tender" };
                super.submit (id, obj);
                temp = TenderKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#TenderKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_amount").value; if ("" !== temp) obj["amount"] = temp;
                temp = document.getElementById (id + "_change").value; if ("" !== temp) obj["change"] = temp;
                temp = document.getElementById (id + "_Card").value; if ("" !== temp) obj["Card"] = temp;
                temp = document.getElementById (id + "_Receipt").value; if ("" !== temp) obj["Receipt"] = temp;
                temp = document.getElementById (id + "_Cheque").value; if ("" !== temp) obj["Cheque"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Card", "0..1", "1", "Card", "Tender"],
                            ["Receipt", "1", "1..*", "Receipt", "Tenders"],
                            ["Cheque", "0..1", "1", "Cheque", "Tender"]
                        ]
                    )
                );
            }
        }

        /**
         * An ad-hoc auxiliary account agreement associated with a customer agreement, not part of the customer's account, but typically subject to formal agreement between customer and supplier (utility).
         *
         * Typically this is used to collect revenue owed by the customer for other services or arrears accrued with the utility for other services. It is typically linked to a prepaid token purchase transaction, thus forcing the customer to make a payment towards settlement of the auxiliary account balance whenever the customer needs to purchase a prepaid token for electricity.
         * The present status of the auxiliary agreement can be defined in the context of the utility's business rules, for example: enabled, disabled, pending, over recovered, under recovered, written off, etc.
         *
         */
        class AuxiliaryAgreement extends Common.Agreement
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AuxiliaryAgreement;
                if (null == bucket)
                   cim_data.AuxiliaryAgreement = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AuxiliaryAgreement[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Agreement.prototype.parse.call (this, context, sub);
                obj.cls = "AuxiliaryAgreement";
                base.parse_element (/<cim:AuxiliaryAgreement.subType>([\s\S]*?)<\/cim:AuxiliaryAgreement.subType>/g, obj, "subType", base.to_string, sub, context);
                base.parse_element (/<cim:AuxiliaryAgreement.auxCycle>([\s\S]*?)<\/cim:AuxiliaryAgreement.auxCycle>/g, obj, "auxCycle", base.to_string, sub, context);
                base.parse_element (/<cim:AuxiliaryAgreement.auxPriorityCode>([\s\S]*?)<\/cim:AuxiliaryAgreement.auxPriorityCode>/g, obj, "auxPriorityCode", base.to_string, sub, context);
                base.parse_element (/<cim:AuxiliaryAgreement.arrearsInterest>([\s\S]*?)<\/cim:AuxiliaryAgreement.arrearsInterest>/g, obj, "arrearsInterest", base.to_string, sub, context);
                base.parse_element (/<cim:AuxiliaryAgreement.payCycle>([\s\S]*?)<\/cim:AuxiliaryAgreement.payCycle>/g, obj, "payCycle", base.to_string, sub, context);
                base.parse_element (/<cim:AuxiliaryAgreement.minAmount>([\s\S]*?)<\/cim:AuxiliaryAgreement.minAmount>/g, obj, "minAmount", base.to_string, sub, context);
                base.parse_element (/<cim:AuxiliaryAgreement.vendPortion>([\s\S]*?)<\/cim:AuxiliaryAgreement.vendPortion>/g, obj, "vendPortion", base.to_string, sub, context);
                base.parse_element (/<cim:AuxiliaryAgreement.vendPortionArrear>([\s\S]*?)<\/cim:AuxiliaryAgreement.vendPortionArrear>/g, obj, "vendPortionArrear", base.to_string, sub, context);
                base.parse_element (/<cim:AuxiliaryAgreement.fixedAmount>([\s\S]*?)<\/cim:AuxiliaryAgreement.fixedAmount>/g, obj, "fixedAmount", base.to_string, sub, context);
                base.parse_attributes (/<cim:AuxiliaryAgreement.AuxiliaryAccounts\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AuxiliaryAccounts", sub, context);
                base.parse_attribute (/<cim:AuxiliaryAgreement.CustomerAgreement\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAgreement", sub, context);
                let bucket = context.parsed.AuxiliaryAgreement;
                if (null == bucket)
                   context.parsed.AuxiliaryAgreement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Agreement.prototype.export.call (this, obj, false);

                base.export_element (obj, "AuxiliaryAgreement", "subType", "subType",  base.from_string, fields);
                base.export_element (obj, "AuxiliaryAgreement", "auxCycle", "auxCycle",  base.from_string, fields);
                base.export_element (obj, "AuxiliaryAgreement", "auxPriorityCode", "auxPriorityCode",  base.from_string, fields);
                base.export_element (obj, "AuxiliaryAgreement", "arrearsInterest", "arrearsInterest",  base.from_string, fields);
                base.export_element (obj, "AuxiliaryAgreement", "payCycle", "payCycle",  base.from_string, fields);
                base.export_element (obj, "AuxiliaryAgreement", "minAmount", "minAmount",  base.from_string, fields);
                base.export_element (obj, "AuxiliaryAgreement", "vendPortion", "vendPortion",  base.from_string, fields);
                base.export_element (obj, "AuxiliaryAgreement", "vendPortionArrear", "vendPortionArrear",  base.from_string, fields);
                base.export_element (obj, "AuxiliaryAgreement", "fixedAmount", "fixedAmount",  base.from_string, fields);
                base.export_attributes (obj, "AuxiliaryAgreement", "AuxiliaryAccounts", "AuxiliaryAccounts", fields);
                base.export_attribute (obj, "AuxiliaryAgreement", "CustomerAgreement", "CustomerAgreement", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AuxiliaryAgreement_collapse" aria-expanded="true" aria-controls="AuxiliaryAgreement_collapse" style="margin-left: 10px;">AuxiliaryAgreement</a></legend>
                    <div id="AuxiliaryAgreement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.template.call (this) +
                    `
                    {{#subType}}<div><b>subType</b>: {{subType}}</div>{{/subType}}
                    {{#auxCycle}}<div><b>auxCycle</b>: {{auxCycle}}</div>{{/auxCycle}}
                    {{#auxPriorityCode}}<div><b>auxPriorityCode</b>: {{auxPriorityCode}}</div>{{/auxPriorityCode}}
                    {{#arrearsInterest}}<div><b>arrearsInterest</b>: {{arrearsInterest}}</div>{{/arrearsInterest}}
                    {{#payCycle}}<div><b>payCycle</b>: {{payCycle}}</div>{{/payCycle}}
                    {{#minAmount}}<div><b>minAmount</b>: {{minAmount}}</div>{{/minAmount}}
                    {{#vendPortion}}<div><b>vendPortion</b>: {{vendPortion}}</div>{{/vendPortion}}
                    {{#vendPortionArrear}}<div><b>vendPortionArrear</b>: {{vendPortionArrear}}</div>{{/vendPortionArrear}}
                    {{#fixedAmount}}<div><b>fixedAmount</b>: {{fixedAmount}}</div>{{/fixedAmount}}
                    {{#AuxiliaryAccounts}}<div><b>AuxiliaryAccounts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/AuxiliaryAccounts}}
                    {{#CustomerAgreement}}<div><b>CustomerAgreement</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CustomerAgreement}}&quot;);}); return false;'>{{CustomerAgreement}}</a></div>{{/CustomerAgreement}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["AuxiliaryAccounts"]) obj["AuxiliaryAccounts_string"] = obj["AuxiliaryAccounts"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["AuxiliaryAccounts_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AuxiliaryAgreement_collapse" aria-expanded="true" aria-controls="{{id}}_AuxiliaryAgreement_collapse" style="margin-left: 10px;">AuxiliaryAgreement</a></legend>
                    <div id="{{id}}_AuxiliaryAgreement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_subType'>subType: </label><div class='col-sm-8'><input id='{{id}}_subType' class='form-control' type='text'{{#subType}} value='{{subType}}'{{/subType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_auxCycle'>auxCycle: </label><div class='col-sm-8'><input id='{{id}}_auxCycle' class='form-control' type='text'{{#auxCycle}} value='{{auxCycle}}'{{/auxCycle}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_auxPriorityCode'>auxPriorityCode: </label><div class='col-sm-8'><input id='{{id}}_auxPriorityCode' class='form-control' type='text'{{#auxPriorityCode}} value='{{auxPriorityCode}}'{{/auxPriorityCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_arrearsInterest'>arrearsInterest: </label><div class='col-sm-8'><input id='{{id}}_arrearsInterest' class='form-control' type='text'{{#arrearsInterest}} value='{{arrearsInterest}}'{{/arrearsInterest}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_payCycle'>payCycle: </label><div class='col-sm-8'><input id='{{id}}_payCycle' class='form-control' type='text'{{#payCycle}} value='{{payCycle}}'{{/payCycle}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minAmount'>minAmount: </label><div class='col-sm-8'><input id='{{id}}_minAmount' class='form-control' type='text'{{#minAmount}} value='{{minAmount}}'{{/minAmount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vendPortion'>vendPortion: </label><div class='col-sm-8'><input id='{{id}}_vendPortion' class='form-control' type='text'{{#vendPortion}} value='{{vendPortion}}'{{/vendPortion}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vendPortionArrear'>vendPortionArrear: </label><div class='col-sm-8'><input id='{{id}}_vendPortionArrear' class='form-control' type='text'{{#vendPortionArrear}} value='{{vendPortionArrear}}'{{/vendPortionArrear}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fixedAmount'>fixedAmount: </label><div class='col-sm-8'><input id='{{id}}_fixedAmount' class='form-control' type='text'{{#fixedAmount}} value='{{fixedAmount}}'{{/fixedAmount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CustomerAgreement'>CustomerAgreement: </label><div class='col-sm-8'><input id='{{id}}_CustomerAgreement' class='form-control' type='text'{{#CustomerAgreement}} value='{{CustomerAgreement}}'{{/CustomerAgreement}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AuxiliaryAgreement" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_subType").value; if ("" !== temp) obj["subType"] = temp;
                temp = document.getElementById (id + "_auxCycle").value; if ("" !== temp) obj["auxCycle"] = temp;
                temp = document.getElementById (id + "_auxPriorityCode").value; if ("" !== temp) obj["auxPriorityCode"] = temp;
                temp = document.getElementById (id + "_arrearsInterest").value; if ("" !== temp) obj["arrearsInterest"] = temp;
                temp = document.getElementById (id + "_payCycle").value; if ("" !== temp) obj["payCycle"] = temp;
                temp = document.getElementById (id + "_minAmount").value; if ("" !== temp) obj["minAmount"] = temp;
                temp = document.getElementById (id + "_vendPortion").value; if ("" !== temp) obj["vendPortion"] = temp;
                temp = document.getElementById (id + "_vendPortionArrear").value; if ("" !== temp) obj["vendPortionArrear"] = temp;
                temp = document.getElementById (id + "_fixedAmount").value; if ("" !== temp) obj["fixedAmount"] = temp;
                temp = document.getElementById (id + "_CustomerAgreement").value; if ("" !== temp) obj["CustomerAgreement"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AuxiliaryAccounts", "1..*", "0..1", "AuxiliaryAccount", "AuxiliaryAgreement"],
                            ["CustomerAgreement", "0..1", "0..*", "CustomerAgreement", "AuxiliaryAgreements"]
                        ]
                    )
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
                let bucket = cim_data.MerchantAccount;
                if (null == bucket)
                   cim_data.MerchantAccount = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MerchantAccount[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "MerchantAccount";
                base.parse_element (/<cim:MerchantAccount.currentBalance>([\s\S]*?)<\/cim:MerchantAccount.currentBalance>/g, obj, "currentBalance", base.to_string, sub, context);
                base.parse_element (/<cim:MerchantAccount.provisionalBalance>([\s\S]*?)<\/cim:MerchantAccount.provisionalBalance>/g, obj, "provisionalBalance", base.to_string, sub, context);
                base.parse_attribute (/<cim:MerchantAccount.MerchantAgreement\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MerchantAgreement", sub, context);
                base.parse_attributes (/<cim:MerchantAccount.Transactors\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Transactors", sub, context);
                base.parse_attributes (/<cim:MerchantAccount.VendorShifts\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "VendorShifts", sub, context);
                let bucket = context.parsed.MerchantAccount;
                if (null == bucket)
                   context.parsed.MerchantAccount = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "MerchantAccount", "currentBalance", "currentBalance",  base.from_string, fields);
                base.export_element (obj, "MerchantAccount", "provisionalBalance", "provisionalBalance",  base.from_string, fields);
                base.export_attribute (obj, "MerchantAccount", "MerchantAgreement", "MerchantAgreement", fields);
                base.export_attributes (obj, "MerchantAccount", "Transactors", "Transactors", fields);
                base.export_attributes (obj, "MerchantAccount", "VendorShifts", "VendorShifts", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MerchantAccount_collapse" aria-expanded="true" aria-controls="MerchantAccount_collapse" style="margin-left: 10px;">MerchantAccount</a></legend>
                    <div id="MerchantAccount_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#currentBalance}}<div><b>currentBalance</b>: {{currentBalance}}</div>{{/currentBalance}}
                    {{#provisionalBalance}}<div><b>provisionalBalance</b>: {{provisionalBalance}}</div>{{/provisionalBalance}}
                    {{#MerchantAgreement}}<div><b>MerchantAgreement</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MerchantAgreement}}&quot;);}); return false;'>{{MerchantAgreement}}</a></div>{{/MerchantAgreement}}
                    {{#Transactors}}<div><b>Transactors</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Transactors}}
                    {{#VendorShifts}}<div><b>VendorShifts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/VendorShifts}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Transactors"]) obj["Transactors_string"] = obj["Transactors"].join ();
                if (obj["VendorShifts"]) obj["VendorShifts_string"] = obj["VendorShifts"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Transactors_string"];
                delete obj["VendorShifts_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MerchantAccount_collapse" aria-expanded="true" aria-controls="{{id}}_MerchantAccount_collapse" style="margin-left: 10px;">MerchantAccount</a></legend>
                    <div id="{{id}}_MerchantAccount_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_currentBalance'>currentBalance: </label><div class='col-sm-8'><input id='{{id}}_currentBalance' class='form-control' type='text'{{#currentBalance}} value='{{currentBalance}}'{{/currentBalance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_provisionalBalance'>provisionalBalance: </label><div class='col-sm-8'><input id='{{id}}_provisionalBalance' class='form-control' type='text'{{#provisionalBalance}} value='{{provisionalBalance}}'{{/provisionalBalance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MerchantAgreement'>MerchantAgreement: </label><div class='col-sm-8'><input id='{{id}}_MerchantAgreement' class='form-control' type='text'{{#MerchantAgreement}} value='{{MerchantAgreement}}'{{/MerchantAgreement}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Transactors'>Transactors: </label><div class='col-sm-8'><input id='{{id}}_Transactors' class='form-control' type='text'{{#Transactors}} value='{{Transactors_string}}'{{/Transactors}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MerchantAccount" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_currentBalance").value; if ("" !== temp) obj["currentBalance"] = temp;
                temp = document.getElementById (id + "_provisionalBalance").value; if ("" !== temp) obj["provisionalBalance"] = temp;
                temp = document.getElementById (id + "_MerchantAgreement").value; if ("" !== temp) obj["MerchantAgreement"] = temp;
                temp = document.getElementById (id + "_Transactors").value; if ("" !== temp) obj["Transactors"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MerchantAgreement", "0..1", "0..*", "MerchantAgreement", "MerchantAccounts"],
                            ["Transactors", "0..*", "0..*", "Transactor", "MerchantAccounts"],
                            ["VendorShifts", "0..*", "0..1", "VendorShift", "MerchantAccount"]
                        ]
                    )
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
                let bucket = cim_data.AccountingUnit;
                if (null == bucket)
                   cim_data.AccountingUnit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AccountingUnit[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AccountingUnit";
                base.parse_element (/<cim:AccountingUnit.value>([\s\S]*?)<\/cim:AccountingUnit.value>/g, obj, "value", base.to_float, sub, context);
                base.parse_element (/<cim:AccountingUnit.energyUnit>([\s\S]*?)<\/cim:AccountingUnit.energyUnit>/g, obj, "energyUnit", base.to_string, sub, context);
                base.parse_attribute (/<cim:AccountingUnit.monetaryUnit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "monetaryUnit", sub, context);
                base.parse_attribute (/<cim:AccountingUnit.multiplier\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                let bucket = context.parsed.AccountingUnit;
                if (null == bucket)
                   context.parsed.AccountingUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "AccountingUnit", "value", "value",  base.from_float, fields);
                base.export_element (obj, "AccountingUnit", "energyUnit", "energyUnit",  base.from_string, fields);
                base.export_attribute (obj, "AccountingUnit", "monetaryUnit", "monetaryUnit", fields);
                base.export_attribute (obj, "AccountingUnit", "multiplier", "multiplier", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AccountingUnit_collapse" aria-expanded="true" aria-controls="AccountingUnit_collapse" style="margin-left: 10px;">AccountingUnit</a></legend>
                    <div id="AccountingUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    {{#energyUnit}}<div><b>energyUnit</b>: {{energyUnit}}</div>{{/energyUnit}}
                    {{#monetaryUnit}}<div><b>monetaryUnit</b>: {{monetaryUnit}}</div>{{/monetaryUnit}}
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["monetaryUnitCurrency"] = [{ id: '', selected: (!obj["monetaryUnit"])}]; for (let property in Domain.Currency) obj["monetaryUnitCurrency"].push ({ id: property, selected: obj["monetaryUnit"] && obj["monetaryUnit"].endsWith ('.' + property)});
                obj["multiplierUnitMultiplier"] = [{ id: '', selected: (!obj["multiplier"])}]; for (let property in Domain.UnitMultiplier) obj["multiplierUnitMultiplier"].push ({ id: property, selected: obj["multiplier"] && obj["multiplier"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["monetaryUnitCurrency"];
                delete obj["multiplierUnitMultiplier"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AccountingUnit_collapse" aria-expanded="true" aria-controls="{{id}}_AccountingUnit_collapse" style="margin-left: 10px;">AccountingUnit</a></legend>
                    <div id="{{id}}_AccountingUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_energyUnit'>energyUnit: </label><div class='col-sm-8'><input id='{{id}}_energyUnit' class='form-control' type='text'{{#energyUnit}} value='{{energyUnit}}'{{/energyUnit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_monetaryUnit'>monetaryUnit: </label><div class='col-sm-8'><select id='{{id}}_monetaryUnit' class='form-control custom-select'>{{#monetaryUnitCurrency}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/monetaryUnitCurrency}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control custom-select'>{{#multiplierUnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/multiplierUnitMultiplier}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AccountingUnit" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_value").value; if ("" !== temp) obj["value"] = temp;
                temp = document.getElementById (id + "_energyUnit").value; if ("" !== temp) obj["energyUnit"] = temp;
                temp = Domain.Currency[document.getElementById (id + "_monetaryUnit").value]; if (temp) obj["monetaryUnit"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#Currency." + temp; else delete obj["monetaryUnit"];
                temp = Domain.UnitMultiplier[document.getElementById (id + "_multiplier").value]; if (temp) obj["multiplier"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; else delete obj["multiplier"];

                return (obj);
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
                let bucket = cim_data.ServiceSupplier;
                if (null == bucket)
                   cim_data.ServiceSupplier = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ServiceSupplier[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.OrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "ServiceSupplier";
                base.parse_attribute (/<cim:ServiceSupplier.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:ServiceSupplier.issuerIdentificationNumber>([\s\S]*?)<\/cim:ServiceSupplier.issuerIdentificationNumber>/g, obj, "issuerIdentificationNumber", base.to_string, sub, context);
                base.parse_attributes (/<cim:ServiceSupplier.CustomerAgreements\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAgreements", sub, context);
                base.parse_attributes (/<cim:ServiceSupplier.UsagePoints\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "UsagePoints", sub, context);
                base.parse_attributes (/<cim:ServiceSupplier.BankAccounts\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BankAccounts", sub, context);
                let bucket = context.parsed.ServiceSupplier;
                if (null == bucket)
                   context.parsed.ServiceSupplier = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.OrganisationRole.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ServiceSupplier", "kind", "kind", fields);
                base.export_element (obj, "ServiceSupplier", "issuerIdentificationNumber", "issuerIdentificationNumber",  base.from_string, fields);
                base.export_attributes (obj, "ServiceSupplier", "CustomerAgreements", "CustomerAgreements", fields);
                base.export_attributes (obj, "ServiceSupplier", "UsagePoints", "UsagePoints", fields);
                base.export_attributes (obj, "ServiceSupplier", "BankAccounts", "BankAccounts", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ServiceSupplier_collapse" aria-expanded="true" aria-controls="ServiceSupplier_collapse" style="margin-left: 10px;">ServiceSupplier</a></legend>
                    <div id="ServiceSupplier_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#issuerIdentificationNumber}}<div><b>issuerIdentificationNumber</b>: {{issuerIdentificationNumber}}</div>{{/issuerIdentificationNumber}}
                    {{#CustomerAgreements}}<div><b>CustomerAgreements</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/CustomerAgreements}}
                    {{#UsagePoints}}<div><b>UsagePoints</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/UsagePoints}}
                    {{#BankAccounts}}<div><b>BankAccounts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/BankAccounts}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindSupplierKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in SupplierKind) obj["kindSupplierKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
                if (obj["CustomerAgreements"]) obj["CustomerAgreements_string"] = obj["CustomerAgreements"].join ();
                if (obj["UsagePoints"]) obj["UsagePoints_string"] = obj["UsagePoints"].join ();
                if (obj["BankAccounts"]) obj["BankAccounts_string"] = obj["BankAccounts"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindSupplierKind"];
                delete obj["CustomerAgreements_string"];
                delete obj["UsagePoints_string"];
                delete obj["BankAccounts_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ServiceSupplier_collapse" aria-expanded="true" aria-controls="{{id}}_ServiceSupplier_collapse" style="margin-left: 10px;">ServiceSupplier</a></legend>
                    <div id="{{id}}_ServiceSupplier_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindSupplierKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindSupplierKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_issuerIdentificationNumber'>issuerIdentificationNumber: </label><div class='col-sm-8'><input id='{{id}}_issuerIdentificationNumber' class='form-control' type='text'{{#issuerIdentificationNumber}} value='{{issuerIdentificationNumber}}'{{/issuerIdentificationNumber}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ServiceSupplier" };
                super.submit (id, obj);
                temp = SupplierKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#SupplierKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_issuerIdentificationNumber").value; if ("" !== temp) obj["issuerIdentificationNumber"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CustomerAgreements", "0..*", "1", "CustomerAgreement", "ServiceSupplier"],
                            ["UsagePoints", "0..*", "0..1", "UsagePoint", "ServiceSupplier"],
                            ["BankAccounts", "0..*", "0..1", "BankAccount", "ServiceSupplier"]
                        ]
                    )
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
                let bucket = cim_data.TimeTariffInterval;
                if (null == bucket)
                   cim_data.TimeTariffInterval = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TimeTariffInterval[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TimeTariffInterval";
                base.parse_element (/<cim:TimeTariffInterval.sequenceNumber>([\s\S]*?)<\/cim:TimeTariffInterval.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
                base.parse_element (/<cim:TimeTariffInterval.startTime>([\s\S]*?)<\/cim:TimeTariffInterval.startTime>/g, obj, "startTime", base.to_string, sub, context);
                base.parse_attributes (/<cim:TimeTariffInterval.Charges\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Charges", sub, context);
                base.parse_attributes (/<cim:TimeTariffInterval.ConsumptionTariffIntervals\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ConsumptionTariffIntervals", sub, context);
                base.parse_attributes (/<cim:TimeTariffInterval.TariffProfiles\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TariffProfiles", sub, context);
                let bucket = context.parsed.TimeTariffInterval;
                if (null == bucket)
                   context.parsed.TimeTariffInterval = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "TimeTariffInterval", "sequenceNumber", "sequenceNumber",  base.from_string, fields);
                base.export_element (obj, "TimeTariffInterval", "startTime", "startTime",  base.from_string, fields);
                base.export_attributes (obj, "TimeTariffInterval", "Charges", "Charges", fields);
                base.export_attributes (obj, "TimeTariffInterval", "ConsumptionTariffIntervals", "ConsumptionTariffIntervals", fields);
                base.export_attributes (obj, "TimeTariffInterval", "TariffProfiles", "TariffProfiles", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TimeTariffInterval_collapse" aria-expanded="true" aria-controls="TimeTariffInterval_collapse" style="margin-left: 10px;">TimeTariffInterval</a></legend>
                    <div id="TimeTariffInterval_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
                    {{#startTime}}<div><b>startTime</b>: {{startTime}}</div>{{/startTime}}
                    {{#Charges}}<div><b>Charges</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Charges}}
                    {{#ConsumptionTariffIntervals}}<div><b>ConsumptionTariffIntervals</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ConsumptionTariffIntervals}}
                    {{#TariffProfiles}}<div><b>TariffProfiles</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/TariffProfiles}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Charges"]) obj["Charges_string"] = obj["Charges"].join ();
                if (obj["ConsumptionTariffIntervals"]) obj["ConsumptionTariffIntervals_string"] = obj["ConsumptionTariffIntervals"].join ();
                if (obj["TariffProfiles"]) obj["TariffProfiles_string"] = obj["TariffProfiles"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Charges_string"];
                delete obj["ConsumptionTariffIntervals_string"];
                delete obj["TariffProfiles_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TimeTariffInterval_collapse" aria-expanded="true" aria-controls="{{id}}_TimeTariffInterval_collapse" style="margin-left: 10px;">TimeTariffInterval</a></legend>
                    <div id="{{id}}_TimeTariffInterval_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sequenceNumber'>sequenceNumber: </label><div class='col-sm-8'><input id='{{id}}_sequenceNumber' class='form-control' type='text'{{#sequenceNumber}} value='{{sequenceNumber}}'{{/sequenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_startTime'>startTime: </label><div class='col-sm-8'><input id='{{id}}_startTime' class='form-control' type='text'{{#startTime}} value='{{startTime}}'{{/startTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Charges'>Charges: </label><div class='col-sm-8'><input id='{{id}}_Charges' class='form-control' type='text'{{#Charges}} value='{{Charges_string}}'{{/Charges}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ConsumptionTariffIntervals'>ConsumptionTariffIntervals: </label><div class='col-sm-8'><input id='{{id}}_ConsumptionTariffIntervals' class='form-control' type='text'{{#ConsumptionTariffIntervals}} value='{{ConsumptionTariffIntervals_string}}'{{/ConsumptionTariffIntervals}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TariffProfiles'>TariffProfiles: </label><div class='col-sm-8'><input id='{{id}}_TariffProfiles' class='form-control' type='text'{{#TariffProfiles}} value='{{TariffProfiles_string}}'{{/TariffProfiles}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "TimeTariffInterval" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_sequenceNumber").value; if ("" !== temp) obj["sequenceNumber"] = temp;
                temp = document.getElementById (id + "_startTime").value; if ("" !== temp) obj["startTime"] = temp;
                temp = document.getElementById (id + "_Charges").value; if ("" !== temp) obj["Charges"] = temp.split (",");
                temp = document.getElementById (id + "_ConsumptionTariffIntervals").value; if ("" !== temp) obj["ConsumptionTariffIntervals"] = temp.split (",");
                temp = document.getElementById (id + "_TariffProfiles").value; if ("" !== temp) obj["TariffProfiles"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Charges", "0..*", "0..*", "Charge", "TimeTariffIntervals"],
                            ["ConsumptionTariffIntervals", "0..*", "0..*", "ConsumptionTariffInterval", "TouTariffIntervals"],
                            ["TariffProfiles", "0..*", "0..*", "TariffProfile", "TimeTariffIntervals"]
                        ]
                    )
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
                let bucket = cim_data.Vendor;
                if (null == bucket)
                   cim_data.Vendor = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Vendor[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Vendor";
                base.parse_attributes (/<cim:Vendor.VendorShifts\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "VendorShifts", sub, context);
                let bucket = context.parsed.Vendor;
                if (null == bucket)
                   context.parsed.Vendor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "Vendor", "VendorShifts", "VendorShifts", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Vendor_collapse" aria-expanded="true" aria-controls="Vendor_collapse" style="margin-left: 10px;">Vendor</a></legend>
                    <div id="Vendor_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#VendorShifts}}<div><b>VendorShifts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/VendorShifts}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["VendorShifts"]) obj["VendorShifts_string"] = obj["VendorShifts"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["VendorShifts_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Vendor_collapse" aria-expanded="true" aria-controls="{{id}}_Vendor_collapse" style="margin-left: 10px;">Vendor</a></legend>
                    <div id="{{id}}_Vendor_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "Vendor" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["VendorShifts", "0..*", "0..1", "VendorShift", "Vendor"]
                        ]
                    )
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
                let bucket = cim_data.VendorShift;
                if (null == bucket)
                   cim_data.VendorShift = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.VendorShift[obj.id];
            }

            parse (context, sub)
            {
                let obj = Shift.prototype.parse.call (this, context, sub);
                obj.cls = "VendorShift";
                base.parse_element (/<cim:VendorShift.merchantDebitAmount>([\s\S]*?)<\/cim:VendorShift.merchantDebitAmount>/g, obj, "merchantDebitAmount", base.to_string, sub, context);
                base.parse_element (/<cim:VendorShift.posted>([\s\S]*?)<\/cim:VendorShift.posted>/g, obj, "posted", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:VendorShift.Receipts\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Receipts", sub, context);
                base.parse_attributes (/<cim:VendorShift.Transactions\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Transactions", sub, context);
                base.parse_attribute (/<cim:VendorShift.Vendor\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Vendor", sub, context);
                base.parse_attribute (/<cim:VendorShift.MerchantAccount\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MerchantAccount", sub, context);
                let bucket = context.parsed.VendorShift;
                if (null == bucket)
                   context.parsed.VendorShift = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Shift.prototype.export.call (this, obj, false);

                base.export_element (obj, "VendorShift", "merchantDebitAmount", "merchantDebitAmount",  base.from_string, fields);
                base.export_element (obj, "VendorShift", "posted", "posted",  base.from_boolean, fields);
                base.export_attributes (obj, "VendorShift", "Receipts", "Receipts", fields);
                base.export_attributes (obj, "VendorShift", "Transactions", "Transactions", fields);
                base.export_attribute (obj, "VendorShift", "Vendor", "Vendor", fields);
                base.export_attribute (obj, "VendorShift", "MerchantAccount", "MerchantAccount", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#VendorShift_collapse" aria-expanded="true" aria-controls="VendorShift_collapse" style="margin-left: 10px;">VendorShift</a></legend>
                    <div id="VendorShift_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Shift.prototype.template.call (this) +
                    `
                    {{#merchantDebitAmount}}<div><b>merchantDebitAmount</b>: {{merchantDebitAmount}}</div>{{/merchantDebitAmount}}
                    {{#posted}}<div><b>posted</b>: {{posted}}</div>{{/posted}}
                    {{#Receipts}}<div><b>Receipts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Receipts}}
                    {{#Transactions}}<div><b>Transactions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Transactions}}
                    {{#Vendor}}<div><b>Vendor</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Vendor}}&quot;);}); return false;'>{{Vendor}}</a></div>{{/Vendor}}
                    {{#MerchantAccount}}<div><b>MerchantAccount</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MerchantAccount}}&quot;);}); return false;'>{{MerchantAccount}}</a></div>{{/MerchantAccount}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Receipts"]) obj["Receipts_string"] = obj["Receipts"].join ();
                if (obj["Transactions"]) obj["Transactions_string"] = obj["Transactions"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Receipts_string"];
                delete obj["Transactions_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_VendorShift_collapse" aria-expanded="true" aria-controls="{{id}}_VendorShift_collapse" style="margin-left: 10px;">VendorShift</a></legend>
                    <div id="{{id}}_VendorShift_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Shift.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_merchantDebitAmount'>merchantDebitAmount: </label><div class='col-sm-8'><input id='{{id}}_merchantDebitAmount' class='form-control' type='text'{{#merchantDebitAmount}} value='{{merchantDebitAmount}}'{{/merchantDebitAmount}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_posted'>posted: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_posted' class='form-check-input' type='checkbox'{{#posted}} checked{{/posted}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Vendor'>Vendor: </label><div class='col-sm-8'><input id='{{id}}_Vendor' class='form-control' type='text'{{#Vendor}} value='{{Vendor}}'{{/Vendor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MerchantAccount'>MerchantAccount: </label><div class='col-sm-8'><input id='{{id}}_MerchantAccount' class='form-control' type='text'{{#MerchantAccount}} value='{{MerchantAccount}}'{{/MerchantAccount}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "VendorShift" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_merchantDebitAmount").value; if ("" !== temp) obj["merchantDebitAmount"] = temp;
                temp = document.getElementById (id + "_posted").checked; if (temp) obj["posted"] = true;
                temp = document.getElementById (id + "_Vendor").value; if ("" !== temp) obj["Vendor"] = temp;
                temp = document.getElementById (id + "_MerchantAccount").value; if ("" !== temp) obj["MerchantAccount"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Receipts", "0..*", "0..1", "Receipt", "VendorShift"],
                            ["Transactions", "0..*", "0..1", "Transaction", "VendorShift"],
                            ["Vendor", "0..1", "0..*", "Vendor", "VendorShifts"],
                            ["MerchantAccount", "0..1", "0..*", "MerchantAccount", "VendorShifts"]
                        ]
                    )
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
                let bucket = cim_data.CashierShift;
                if (null == bucket)
                   cim_data.CashierShift = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CashierShift[obj.id];
            }

            parse (context, sub)
            {
                let obj = Shift.prototype.parse.call (this, context, sub);
                obj.cls = "CashierShift";
                base.parse_element (/<cim:CashierShift.cashFloat>([\s\S]*?)<\/cim:CashierShift.cashFloat>/g, obj, "cashFloat", base.to_string, sub, context);
                base.parse_attribute (/<cim:CashierShift.Cashier\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Cashier", sub, context);
                base.parse_attribute (/<cim:CashierShift.PointOfSale\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PointOfSale", sub, context);
                base.parse_attributes (/<cim:CashierShift.Transactions\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Transactions", sub, context);
                base.parse_attributes (/<cim:CashierShift.Receipts\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Receipts", sub, context);
                let bucket = context.parsed.CashierShift;
                if (null == bucket)
                   context.parsed.CashierShift = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Shift.prototype.export.call (this, obj, false);

                base.export_element (obj, "CashierShift", "cashFloat", "cashFloat",  base.from_string, fields);
                base.export_attribute (obj, "CashierShift", "Cashier", "Cashier", fields);
                base.export_attribute (obj, "CashierShift", "PointOfSale", "PointOfSale", fields);
                base.export_attributes (obj, "CashierShift", "Transactions", "Transactions", fields);
                base.export_attributes (obj, "CashierShift", "Receipts", "Receipts", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CashierShift_collapse" aria-expanded="true" aria-controls="CashierShift_collapse" style="margin-left: 10px;">CashierShift</a></legend>
                    <div id="CashierShift_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Shift.prototype.template.call (this) +
                    `
                    {{#cashFloat}}<div><b>cashFloat</b>: {{cashFloat}}</div>{{/cashFloat}}
                    {{#Cashier}}<div><b>Cashier</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Cashier}}&quot;);}); return false;'>{{Cashier}}</a></div>{{/Cashier}}
                    {{#PointOfSale}}<div><b>PointOfSale</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PointOfSale}}&quot;);}); return false;'>{{PointOfSale}}</a></div>{{/PointOfSale}}
                    {{#Transactions}}<div><b>Transactions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Transactions}}
                    {{#Receipts}}<div><b>Receipts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Receipts}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Transactions"]) obj["Transactions_string"] = obj["Transactions"].join ();
                if (obj["Receipts"]) obj["Receipts_string"] = obj["Receipts"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Transactions_string"];
                delete obj["Receipts_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CashierShift_collapse" aria-expanded="true" aria-controls="{{id}}_CashierShift_collapse" style="margin-left: 10px;">CashierShift</a></legend>
                    <div id="{{id}}_CashierShift_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Shift.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cashFloat'>cashFloat: </label><div class='col-sm-8'><input id='{{id}}_cashFloat' class='form-control' type='text'{{#cashFloat}} value='{{cashFloat}}'{{/cashFloat}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Cashier'>Cashier: </label><div class='col-sm-8'><input id='{{id}}_Cashier' class='form-control' type='text'{{#Cashier}} value='{{Cashier}}'{{/Cashier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PointOfSale'>PointOfSale: </label><div class='col-sm-8'><input id='{{id}}_PointOfSale' class='form-control' type='text'{{#PointOfSale}} value='{{PointOfSale}}'{{/PointOfSale}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CashierShift" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_cashFloat").value; if ("" !== temp) obj["cashFloat"] = temp;
                temp = document.getElementById (id + "_Cashier").value; if ("" !== temp) obj["Cashier"] = temp;
                temp = document.getElementById (id + "_PointOfSale").value; if ("" !== temp) obj["PointOfSale"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Cashier", "0..1", "0..*", "Cashier", "CashierShifts"],
                            ["PointOfSale", "0..1", "0..*", "PointOfSale", "CashierShifts"],
                            ["Transactions", "0..*", "0..1", "Transaction", "CashierShift"],
                            ["Receipts", "0..*", "0..1", "Receipt", "CashierShift"]
                        ]
                    )
                );
            }
        }

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
                ConsumptionTariffInterval: ConsumptionTariffInterval,
                AuxiliaryAgreement: AuxiliaryAgreement,
                Transaction: Transaction,
                Tender: Tender,
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