define
(
    ["model/base", "model/Common", "model/Core", "model/InfCommon"],
    /**
     * The package contains portions of the model defined byEnterprise Resource Planning (ERP) standards like those proposed by the Open Applications Group (OAG).
     *
     * It is provided to facilitate integration among electric utility applications (CIM) and enterprise resource planning (ERP) applications (as defined by OAG). Rather than inventing new CIM classes that accomplish similar functionality as in existing ERP models, the preferred approach is to use and extend ERP classes as appropriate in other packages.
     * If a model other that the OAG standard is used as a basis for ERP integration, the utility classes labeld "Erp..." should be associated with the appropriate classes of that standard. In fact, definitions of "Erp..." classes are based on OAG Nouns to facilitate this process.
     * 
     * TODO: The following has been copied from a very old version of draft Part 11, so the references are wrong, but we store the knowledge here to reuse later:
     * "The Enterprise Resource Planning (ERP) Support Package contains portions of the model defined by ERP standards like those proposed by the Open Applications Group (OAG). This package is provided to facilitate integration among electric utility applications (CIM) and enterprise resource planning (ERP) applications (OAG). Rather than inventing new CIM classes that accomplish similar functionality as in existing ERP models, the preferred approach is to use and extend ERP classes as appropriate in other packages.
     * If a model other that the OAG standard is used as a basis for ERP integration, the utility classes labeled "Erp..." should be associated with the appropriate classes of that standard".
     *
     */
    function (base, Common, Core, InfCommon)
    {

        /**
         * Kind of ERP invoice.
         *
         */
        let ErpInvoiceKind =
        {
            "sale": "sale",
            "purchase": "purchase"
        };
        Object.freeze (ErpInvoiceKind);

        /**
         * Kind of invoice line item.
         *
         */
        let ErpInvoiceLineItemKind =
        {
            "initial": "initial",
            "recalculation": "recalculation",
            "other": "other"
        };
        Object.freeze (ErpInvoiceLineItemKind);

        /**
         * Kind of bill media.
         *
         */
        let BillMediaKind =
        {
            "paper": "paper",
            "electronic": "electronic",
            "other": "other"
        };
        Object.freeze (BillMediaKind);

        /**
         * Kind of ERP account.
         *
         */
        let ErpAccountKind =
        {
            "normal": "normal",
            "reversal": "reversal",
            "statistical": "statistical",
            "estimate": "estimate"
        };
        Object.freeze (ErpAccountKind);

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
                let bucket = cim_data.ErpIdentifiedObject;
                if (null == bucket)
                   cim_data.ErpIdentifiedObject = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpIdentifiedObject[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpIdentifiedObject";
                let bucket = context.parsed.ErpIdentifiedObject;
                if (null == bucket)
                   context.parsed.ErpIdentifiedObject = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpIdentifiedObject_collapse" aria-expanded="true" aria-controls="ErpIdentifiedObject_collapse" style="margin-left: 10px;">ErpIdentifiedObject</a></legend>
                    <div id="ErpIdentifiedObject_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpIdentifiedObject_collapse" aria-expanded="true" aria-controls="{{id}}_ErpIdentifiedObject_collapse" style="margin-left: 10px;">ErpIdentifiedObject</a></legend>
                    <div id="{{id}}_ErpIdentifiedObject_collapse" class="collapse in show" style="margin-left: 10px;">
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
                obj = obj || { id: id, cls: "ErpIdentifiedObject" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * Relationship under a particular name, usually evidenced by a deposit against which withdrawals can be made.
         *
         * Types of bank accounts include: demand, time, custodial, joint, trustee, corporate, special, and regular accounts.
         * A statement of transactions during a fiscal period and the resulting balance is maintained on each account.
         * For Payment metering, the account is associated with Bank and Supplier, reflecting details of the bank account used for depositing revenue collected by TokenVendor. The name of the account holder should be specified in 'name' attribute.
         *
         */
        class ErpBankAccount extends InfCommon.BankAccount
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ErpBankAccount;
                if (null == bucket)
                   cim_data.ErpBankAccount = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpBankAccount[obj.id];
            }

            parse (context, sub)
            {
                let obj = InfCommon.BankAccount.prototype.parse.call (this, context, sub);
                obj.cls = "ErpBankAccount";
                base.parse_element (/<cim:ErpBankAccount.bankABA>([\s\S]*?)<\/cim:ErpBankAccount.bankABA>/g, obj, "bankABA", base.to_string, sub, context);
                let bucket = context.parsed.ErpBankAccount;
                if (null == bucket)
                   context.parsed.ErpBankAccount = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = InfCommon.BankAccount.prototype.export.call (this, obj, false);

                base.export_element (obj, "ErpBankAccount", "bankABA", "bankABA",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpBankAccount_collapse" aria-expanded="true" aria-controls="ErpBankAccount_collapse" style="margin-left: 10px;">ErpBankAccount</a></legend>
                    <div id="ErpBankAccount_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + InfCommon.BankAccount.prototype.template.call (this) +
                    `
                    {{#bankABA}}<div><b>bankABA</b>: {{bankABA}}</div>{{/bankABA}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpBankAccount_collapse" aria-expanded="true" aria-controls="{{id}}_ErpBankAccount_collapse" style="margin-left: 10px;">ErpBankAccount</a></legend>
                    <div id="{{id}}_ErpBankAccount_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + InfCommon.BankAccount.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bankABA'>bankABA: </label><div class='col-sm-8'><input id='{{id}}_bankABA' class='form-control' type='text'{{#bankABA}} value='{{bankABA}}'{{/bankABA}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ErpBankAccount" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_bankABA").value; if ("" !== temp) obj["bankABA"] = temp;

                return (obj);
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
                let bucket = cim_data.ErpDocument;
                if (null == bucket)
                   cim_data.ErpDocument = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpDocument[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "ErpDocument";
                let bucket = context.parsed.ErpDocument;
                if (null == bucket)
                   context.parsed.ErpDocument = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpDocument_collapse" aria-expanded="true" aria-controls="ErpDocument_collapse" style="margin-left: 10px;">ErpDocument</a></legend>
                    <div id="ErpDocument_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpDocument_collapse" aria-expanded="true" aria-controls="{{id}}_ErpDocument_collapse" style="margin-left: 10px;">ErpDocument</a></legend>
                    <div id="{{id}}_ErpDocument_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "ErpDocument" };
                super.submit (id, obj);

                return (obj);
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
                let bucket = cim_data.ErpReqLineItem;
                if (null == bucket)
                   cim_data.ErpReqLineItem = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpReqLineItem[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpReqLineItem";
                base.parse_element (/<cim:ErpReqLineItem.code>([\s\S]*?)<\/cim:ErpReqLineItem.code>/g, obj, "code", base.to_string, sub, context);
                base.parse_element (/<cim:ErpReqLineItem.quantity>([\s\S]*?)<\/cim:ErpReqLineItem.quantity>/g, obj, "quantity", base.to_string, sub, context);
                base.parse_element (/<cim:ErpReqLineItem.deliveryDate>([\s\S]*?)<\/cim:ErpReqLineItem.deliveryDate>/g, obj, "deliveryDate", base.to_string, sub, context);
                base.parse_element (/<cim:ErpReqLineItem.cost>([\s\S]*?)<\/cim:ErpReqLineItem.cost>/g, obj, "cost", base.to_string, sub, context);
                base.parse_attribute (/<cim:ErpReqLineItem.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attribute (/<cim:ErpReqLineItem.TypeMaterial\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TypeMaterial", sub, context);
                base.parse_attribute (/<cim:ErpReqLineItem.ErpQuoteLineItem\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpQuoteLineItem", sub, context);
                base.parse_attribute (/<cim:ErpReqLineItem.ErpPOLineItem\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpPOLineItem", sub, context);
                base.parse_attribute (/<cim:ErpReqLineItem.TypeAsset\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TypeAsset", sub, context);
                base.parse_attribute (/<cim:ErpReqLineItem.ErpRequisition\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpRequisition", sub, context);
                let bucket = context.parsed.ErpReqLineItem;
                if (null == bucket)
                   context.parsed.ErpReqLineItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ErpReqLineItem", "code", "code",  base.from_string, fields);
                base.export_element (obj, "ErpReqLineItem", "quantity", "quantity",  base.from_string, fields);
                base.export_element (obj, "ErpReqLineItem", "deliveryDate", "deliveryDate",  base.from_string, fields);
                base.export_element (obj, "ErpReqLineItem", "cost", "cost",  base.from_string, fields);
                base.export_attribute (obj, "ErpReqLineItem", "status", "status", fields);
                base.export_attribute (obj, "ErpReqLineItem", "TypeMaterial", "TypeMaterial", fields);
                base.export_attribute (obj, "ErpReqLineItem", "ErpQuoteLineItem", "ErpQuoteLineItem", fields);
                base.export_attribute (obj, "ErpReqLineItem", "ErpPOLineItem", "ErpPOLineItem", fields);
                base.export_attribute (obj, "ErpReqLineItem", "TypeAsset", "TypeAsset", fields);
                base.export_attribute (obj, "ErpReqLineItem", "ErpRequisition", "ErpRequisition", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpReqLineItem_collapse" aria-expanded="true" aria-controls="ErpReqLineItem_collapse" style="margin-left: 10px;">ErpReqLineItem</a></legend>
                    <div id="ErpReqLineItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#code}}<div><b>code</b>: {{code}}</div>{{/code}}
                    {{#quantity}}<div><b>quantity</b>: {{quantity}}</div>{{/quantity}}
                    {{#deliveryDate}}<div><b>deliveryDate</b>: {{deliveryDate}}</div>{{/deliveryDate}}
                    {{#cost}}<div><b>cost</b>: {{cost}}</div>{{/cost}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}\n                    {{#TypeMaterial}}<div><b>TypeMaterial</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TypeMaterial}}&quot;);}); return false;'>{{TypeMaterial}}</a></div>{{/TypeMaterial}}
                    {{#ErpQuoteLineItem}}<div><b>ErpQuoteLineItem</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpQuoteLineItem}}&quot;);}); return false;'>{{ErpQuoteLineItem}}</a></div>{{/ErpQuoteLineItem}}
                    {{#ErpPOLineItem}}<div><b>ErpPOLineItem</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpPOLineItem}}&quot;);}); return false;'>{{ErpPOLineItem}}</a></div>{{/ErpPOLineItem}}
                    {{#TypeAsset}}<div><b>TypeAsset</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TypeAsset}}&quot;);}); return false;'>{{TypeAsset}}</a></div>{{/TypeAsset}}
                    {{#ErpRequisition}}<div><b>ErpRequisition</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpRequisition}}&quot;);}); return false;'>{{ErpRequisition}}</a></div>{{/ErpRequisition}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpReqLineItem_collapse" aria-expanded="true" aria-controls="{{id}}_ErpReqLineItem_collapse" style="margin-left: 10px;">ErpReqLineItem</a></legend>
                    <div id="{{id}}_ErpReqLineItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_code'>code: </label><div class='col-sm-8'><input id='{{id}}_code' class='form-control' type='text'{{#code}} value='{{code}}'{{/code}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_quantity'>quantity: </label><div class='col-sm-8'><input id='{{id}}_quantity' class='form-control' type='text'{{#quantity}} value='{{quantity}}'{{/quantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_deliveryDate'>deliveryDate: </label><div class='col-sm-8'><input id='{{id}}_deliveryDate' class='form-control' type='text'{{#deliveryDate}} value='{{deliveryDate}}'{{/deliveryDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cost'>cost: </label><div class='col-sm-8'><input id='{{id}}_cost' class='form-control' type='text'{{#cost}} value='{{cost}}'{{/cost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TypeMaterial'>TypeMaterial: </label><div class='col-sm-8'><input id='{{id}}_TypeMaterial' class='form-control' type='text'{{#TypeMaterial}} value='{{TypeMaterial}}'{{/TypeMaterial}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpQuoteLineItem'>ErpQuoteLineItem: </label><div class='col-sm-8'><input id='{{id}}_ErpQuoteLineItem' class='form-control' type='text'{{#ErpQuoteLineItem}} value='{{ErpQuoteLineItem}}'{{/ErpQuoteLineItem}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpPOLineItem'>ErpPOLineItem: </label><div class='col-sm-8'><input id='{{id}}_ErpPOLineItem' class='form-control' type='text'{{#ErpPOLineItem}} value='{{ErpPOLineItem}}'{{/ErpPOLineItem}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TypeAsset'>TypeAsset: </label><div class='col-sm-8'><input id='{{id}}_TypeAsset' class='form-control' type='text'{{#TypeAsset}} value='{{TypeAsset}}'{{/TypeAsset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpRequisition'>ErpRequisition: </label><div class='col-sm-8'><input id='{{id}}_ErpRequisition' class='form-control' type='text'{{#ErpRequisition}} value='{{ErpRequisition}}'{{/ErpRequisition}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ErpReqLineItem" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_code").value; if ("" !== temp) obj["code"] = temp;
                temp = document.getElementById (id + "_quantity").value; if ("" !== temp) obj["quantity"] = temp;
                temp = document.getElementById (id + "_deliveryDate").value; if ("" !== temp) obj["deliveryDate"] = temp;
                temp = document.getElementById (id + "_cost").value; if ("" !== temp) obj["cost"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_TypeMaterial").value; if ("" !== temp) obj["TypeMaterial"] = temp;
                temp = document.getElementById (id + "_ErpQuoteLineItem").value; if ("" !== temp) obj["ErpQuoteLineItem"] = temp;
                temp = document.getElementById (id + "_ErpPOLineItem").value; if ("" !== temp) obj["ErpPOLineItem"] = temp;
                temp = document.getElementById (id + "_TypeAsset").value; if ("" !== temp) obj["TypeAsset"] = temp;
                temp = document.getElementById (id + "_ErpRequisition").value; if ("" !== temp) obj["ErpRequisition"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TypeMaterial", "0..1", "0..*", "TypeMaterial", "ErpReqLineItems"],
                            ["ErpQuoteLineItem", "0..1", "0..1", "ErpQuoteLineItem", "ErpReqLineItem"],
                            ["ErpPOLineItem", "0..1", "0..1", "ErpPOLineItem", "ErpReqLineItem"],
                            ["TypeAsset", "0..1", "0..*", "CatalogAssetType", "ErpReqLineItems"],
                            ["ErpRequisition", "1", "0..*", "ErpRequisition", "ErpReqLineItems"]
                        ]
                    )
                );
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
                let bucket = cim_data.ErpPayableLineItem;
                if (null == bucket)
                   cim_data.ErpPayableLineItem = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpPayableLineItem[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpPayableLineItem";
                base.parse_attribute (/<cim:ErpPayableLineItem.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attributes (/<cim:ErpPayableLineItem.ErpPayments\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpPayments", sub, context);
                base.parse_attribute (/<cim:ErpPayableLineItem.ErpPayable\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpPayable", sub, context);
                base.parse_attributes (/<cim:ErpPayableLineItem.ErpJournalEntries\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpJournalEntries", sub, context);
                base.parse_attribute (/<cim:ErpPayableLineItem.ErpInvoiceLineItem\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpInvoiceLineItem", sub, context);
                let bucket = context.parsed.ErpPayableLineItem;
                if (null == bucket)
                   context.parsed.ErpPayableLineItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ErpPayableLineItem", "status", "status", fields);
                base.export_attributes (obj, "ErpPayableLineItem", "ErpPayments", "ErpPayments", fields);
                base.export_attribute (obj, "ErpPayableLineItem", "ErpPayable", "ErpPayable", fields);
                base.export_attributes (obj, "ErpPayableLineItem", "ErpJournalEntries", "ErpJournalEntries", fields);
                base.export_attribute (obj, "ErpPayableLineItem", "ErpInvoiceLineItem", "ErpInvoiceLineItem", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpPayableLineItem_collapse" aria-expanded="true" aria-controls="ErpPayableLineItem_collapse" style="margin-left: 10px;">ErpPayableLineItem</a></legend>
                    <div id="ErpPayableLineItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}\n                    {{#ErpPayments}}<div><b>ErpPayments</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpPayments}}
                    {{#ErpPayable}}<div><b>ErpPayable</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpPayable}}&quot;);}); return false;'>{{ErpPayable}}</a></div>{{/ErpPayable}}
                    {{#ErpJournalEntries}}<div><b>ErpJournalEntries</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpJournalEntries}}
                    {{#ErpInvoiceLineItem}}<div><b>ErpInvoiceLineItem</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpInvoiceLineItem}}&quot;);}); return false;'>{{ErpInvoiceLineItem}}</a></div>{{/ErpInvoiceLineItem}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ErpPayments"]) obj["ErpPayments_string"] = obj["ErpPayments"].join ();
                if (obj["ErpJournalEntries"]) obj["ErpJournalEntries_string"] = obj["ErpJournalEntries"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ErpPayments_string"];
                delete obj["ErpJournalEntries_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpPayableLineItem_collapse" aria-expanded="true" aria-controls="{{id}}_ErpPayableLineItem_collapse" style="margin-left: 10px;">ErpPayableLineItem</a></legend>
                    <div id="{{id}}_ErpPayableLineItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpPayments'>ErpPayments: </label><div class='col-sm-8'><input id='{{id}}_ErpPayments' class='form-control' type='text'{{#ErpPayments}} value='{{ErpPayments_string}}'{{/ErpPayments}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpPayable'>ErpPayable: </label><div class='col-sm-8'><input id='{{id}}_ErpPayable' class='form-control' type='text'{{#ErpPayable}} value='{{ErpPayable}}'{{/ErpPayable}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpJournalEntries'>ErpJournalEntries: </label><div class='col-sm-8'><input id='{{id}}_ErpJournalEntries' class='form-control' type='text'{{#ErpJournalEntries}} value='{{ErpJournalEntries_string}}'{{/ErpJournalEntries}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpInvoiceLineItem'>ErpInvoiceLineItem: </label><div class='col-sm-8'><input id='{{id}}_ErpInvoiceLineItem' class='form-control' type='text'{{#ErpInvoiceLineItem}} value='{{ErpInvoiceLineItem}}'{{/ErpInvoiceLineItem}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ErpPayableLineItem" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_ErpPayments").value; if ("" !== temp) obj["ErpPayments"] = temp.split (",");
                temp = document.getElementById (id + "_ErpPayable").value; if ("" !== temp) obj["ErpPayable"] = temp;
                temp = document.getElementById (id + "_ErpJournalEntries").value; if ("" !== temp) obj["ErpJournalEntries"] = temp.split (",");
                temp = document.getElementById (id + "_ErpInvoiceLineItem").value; if ("" !== temp) obj["ErpInvoiceLineItem"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ErpPayments", "0..*", "0..*", "ErpPayment", "ErpPayableLineItems"],
                            ["ErpPayable", "1", "0..*", "ErpPayable", "ErpPayableLineItems"],
                            ["ErpJournalEntries", "0..*", "0..*", "ErpJournalEntry", "ErpPayableLineItems"],
                            ["ErpInvoiceLineItem", "0..1", "0..1", "ErpInvoiceLineItem", "ErpPayableLineItem"]
                        ]
                    )
                );
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
                let bucket = cim_data.ErpItemMaster;
                if (null == bucket)
                   cim_data.ErpItemMaster = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpItemMaster[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpItemMaster";
                base.parse_attribute (/<cim:ErpItemMaster.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attribute (/<cim:ErpItemMaster.Asset\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context);
                let bucket = context.parsed.ErpItemMaster;
                if (null == bucket)
                   context.parsed.ErpItemMaster = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ErpItemMaster", "status", "status", fields);
                base.export_attribute (obj, "ErpItemMaster", "Asset", "Asset", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpItemMaster_collapse" aria-expanded="true" aria-controls="ErpItemMaster_collapse" style="margin-left: 10px;">ErpItemMaster</a></legend>
                    <div id="ErpItemMaster_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}\n                    {{#Asset}}<div><b>Asset</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Asset}}&quot;);}); return false;'>{{Asset}}</a></div>{{/Asset}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpItemMaster_collapse" aria-expanded="true" aria-controls="{{id}}_ErpItemMaster_collapse" style="margin-left: 10px;">ErpItemMaster</a></legend>
                    <div id="{{id}}_ErpItemMaster_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Asset'>Asset: </label><div class='col-sm-8'><input id='{{id}}_Asset' class='form-control' type='text'{{#Asset}} value='{{Asset}}'{{/Asset}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ErpItemMaster" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_Asset").value; if ("" !== temp) obj["Asset"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Asset", "0..1", "0..1", "Asset", "ErpItemMaster"]
                        ]
                    )
                );
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
                let bucket = cim_data.ErpRecLineItem;
                if (null == bucket)
                   cim_data.ErpRecLineItem = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpRecLineItem[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpRecLineItem";
                base.parse_attribute (/<cim:ErpRecLineItem.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attribute (/<cim:ErpRecLineItem.ErpInvoiceLineItem\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpInvoiceLineItem", sub, context);
                base.parse_attributes (/<cim:ErpRecLineItem.ErpPayments\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpPayments", sub, context);
                base.parse_attribute (/<cim:ErpRecLineItem.ErpReceivable\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpReceivable", sub, context);
                base.parse_attributes (/<cim:ErpRecLineItem.ErpJournalEntries\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpJournalEntries", sub, context);
                let bucket = context.parsed.ErpRecLineItem;
                if (null == bucket)
                   context.parsed.ErpRecLineItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ErpRecLineItem", "status", "status", fields);
                base.export_attribute (obj, "ErpRecLineItem", "ErpInvoiceLineItem", "ErpInvoiceLineItem", fields);
                base.export_attributes (obj, "ErpRecLineItem", "ErpPayments", "ErpPayments", fields);
                base.export_attribute (obj, "ErpRecLineItem", "ErpReceivable", "ErpReceivable", fields);
                base.export_attributes (obj, "ErpRecLineItem", "ErpJournalEntries", "ErpJournalEntries", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpRecLineItem_collapse" aria-expanded="true" aria-controls="ErpRecLineItem_collapse" style="margin-left: 10px;">ErpRecLineItem</a></legend>
                    <div id="ErpRecLineItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}\n                    {{#ErpInvoiceLineItem}}<div><b>ErpInvoiceLineItem</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpInvoiceLineItem}}&quot;);}); return false;'>{{ErpInvoiceLineItem}}</a></div>{{/ErpInvoiceLineItem}}
                    {{#ErpPayments}}<div><b>ErpPayments</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpPayments}}
                    {{#ErpReceivable}}<div><b>ErpReceivable</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpReceivable}}&quot;);}); return false;'>{{ErpReceivable}}</a></div>{{/ErpReceivable}}
                    {{#ErpJournalEntries}}<div><b>ErpJournalEntries</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpJournalEntries}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ErpPayments"]) obj["ErpPayments_string"] = obj["ErpPayments"].join ();
                if (obj["ErpJournalEntries"]) obj["ErpJournalEntries_string"] = obj["ErpJournalEntries"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ErpPayments_string"];
                delete obj["ErpJournalEntries_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpRecLineItem_collapse" aria-expanded="true" aria-controls="{{id}}_ErpRecLineItem_collapse" style="margin-left: 10px;">ErpRecLineItem</a></legend>
                    <div id="{{id}}_ErpRecLineItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpInvoiceLineItem'>ErpInvoiceLineItem: </label><div class='col-sm-8'><input id='{{id}}_ErpInvoiceLineItem' class='form-control' type='text'{{#ErpInvoiceLineItem}} value='{{ErpInvoiceLineItem}}'{{/ErpInvoiceLineItem}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpPayments'>ErpPayments: </label><div class='col-sm-8'><input id='{{id}}_ErpPayments' class='form-control' type='text'{{#ErpPayments}} value='{{ErpPayments_string}}'{{/ErpPayments}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpReceivable'>ErpReceivable: </label><div class='col-sm-8'><input id='{{id}}_ErpReceivable' class='form-control' type='text'{{#ErpReceivable}} value='{{ErpReceivable}}'{{/ErpReceivable}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpJournalEntries'>ErpJournalEntries: </label><div class='col-sm-8'><input id='{{id}}_ErpJournalEntries' class='form-control' type='text'{{#ErpJournalEntries}} value='{{ErpJournalEntries_string}}'{{/ErpJournalEntries}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ErpRecLineItem" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_ErpInvoiceLineItem").value; if ("" !== temp) obj["ErpInvoiceLineItem"] = temp;
                temp = document.getElementById (id + "_ErpPayments").value; if ("" !== temp) obj["ErpPayments"] = temp.split (",");
                temp = document.getElementById (id + "_ErpReceivable").value; if ("" !== temp) obj["ErpReceivable"] = temp;
                temp = document.getElementById (id + "_ErpJournalEntries").value; if ("" !== temp) obj["ErpJournalEntries"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ErpInvoiceLineItem", "0..1", "0..1", "ErpInvoiceLineItem", "ErpRecLineItem"],
                            ["ErpPayments", "0..*", "0..*", "ErpPayment", "ErpRecLineItems"],
                            ["ErpReceivable", "1", "0..*", "ErpReceivable", "ErpRecLineItems"],
                            ["ErpJournalEntries", "0..*", "0..*", "ErpJournalEntry", "ErpRecLineItems"]
                        ]
                    )
                );
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
                let bucket = cim_data.ErpLedgerEntry;
                if (null == bucket)
                   cim_data.ErpLedgerEntry = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpLedgerEntry[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpLedgerEntry";
                base.parse_element (/<cim:ErpLedgerEntry.accountID>([\s\S]*?)<\/cim:ErpLedgerEntry.accountID>/g, obj, "accountID", base.to_string, sub, context);
                base.parse_attribute (/<cim:ErpLedgerEntry.accountKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "accountKind", sub, context);
                base.parse_element (/<cim:ErpLedgerEntry.amount>([\s\S]*?)<\/cim:ErpLedgerEntry.amount>/g, obj, "amount", base.to_string, sub, context);
                base.parse_element (/<cim:ErpLedgerEntry.postedDateTime>([\s\S]*?)<\/cim:ErpLedgerEntry.postedDateTime>/g, obj, "postedDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:ErpLedgerEntry.transactionDateTime>([\s\S]*?)<\/cim:ErpLedgerEntry.transactionDateTime>/g, obj, "transactionDateTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:ErpLedgerEntry.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attribute (/<cim:ErpLedgerEntry.ErpLedgerEntry\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpLedgerEntry", sub, context);
                base.parse_attributes (/<cim:ErpLedgerEntry.UserAttributes\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "UserAttributes", sub, context);
                base.parse_attribute (/<cim:ErpLedgerEntry.ErpJounalEntry\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpJounalEntry", sub, context);
                base.parse_attribute (/<cim:ErpLedgerEntry.ErpLedger\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpLedger", sub, context);
                let bucket = context.parsed.ErpLedgerEntry;
                if (null == bucket)
                   context.parsed.ErpLedgerEntry = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ErpLedgerEntry", "accountID", "accountID",  base.from_string, fields);
                base.export_attribute (obj, "ErpLedgerEntry", "accountKind", "accountKind", fields);
                base.export_element (obj, "ErpLedgerEntry", "amount", "amount",  base.from_string, fields);
                base.export_element (obj, "ErpLedgerEntry", "postedDateTime", "postedDateTime",  base.from_datetime, fields);
                base.export_element (obj, "ErpLedgerEntry", "transactionDateTime", "transactionDateTime",  base.from_datetime, fields);
                base.export_attribute (obj, "ErpLedgerEntry", "status", "status", fields);
                base.export_attribute (obj, "ErpLedgerEntry", "ErpLedgerEntry", "ErpLedgerEntry", fields);
                base.export_attributes (obj, "ErpLedgerEntry", "UserAttributes", "UserAttributes", fields);
                base.export_attribute (obj, "ErpLedgerEntry", "ErpJounalEntry", "ErpJounalEntry", fields);
                base.export_attribute (obj, "ErpLedgerEntry", "ErpLedger", "ErpLedger", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpLedgerEntry_collapse" aria-expanded="true" aria-controls="ErpLedgerEntry_collapse" style="margin-left: 10px;">ErpLedgerEntry</a></legend>
                    <div id="ErpLedgerEntry_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#accountID}}<div><b>accountID</b>: {{accountID}}</div>{{/accountID}}
                    {{#accountKind}}<div><b>accountKind</b>: {{accountKind}}</div>{{/accountKind}}
                    {{#amount}}<div><b>amount</b>: {{amount}}</div>{{/amount}}
                    {{#postedDateTime}}<div><b>postedDateTime</b>: {{postedDateTime}}</div>{{/postedDateTime}}
                    {{#transactionDateTime}}<div><b>transactionDateTime</b>: {{transactionDateTime}}</div>{{/transactionDateTime}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}\n                    {{#ErpLedgerEntry}}<div><b>ErpLedgerEntry</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpLedgerEntry}}&quot;);}); return false;'>{{ErpLedgerEntry}}</a></div>{{/ErpLedgerEntry}}
                    {{#UserAttributes}}<div><b>UserAttributes</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/UserAttributes}}
                    {{#ErpJounalEntry}}<div><b>ErpJounalEntry</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpJounalEntry}}&quot;);}); return false;'>{{ErpJounalEntry}}</a></div>{{/ErpJounalEntry}}
                    {{#ErpLedger}}<div><b>ErpLedger</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpLedger}}&quot;);}); return false;'>{{ErpLedger}}</a></div>{{/ErpLedger}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["accountKindErpAccountKind"] = [{ id: '', selected: (!obj["accountKind"])}]; for (let property in ErpAccountKind) obj["accountKindErpAccountKind"].push ({ id: property, selected: obj["accountKind"] && obj["accountKind"].endsWith ('.' + property)});
                if (obj["UserAttributes"]) obj["UserAttributes_string"] = obj["UserAttributes"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["accountKindErpAccountKind"];
                delete obj["UserAttributes_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpLedgerEntry_collapse" aria-expanded="true" aria-controls="{{id}}_ErpLedgerEntry_collapse" style="margin-left: 10px;">ErpLedgerEntry</a></legend>
                    <div id="{{id}}_ErpLedgerEntry_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_accountID'>accountID: </label><div class='col-sm-8'><input id='{{id}}_accountID' class='form-control' type='text'{{#accountID}} value='{{accountID}}'{{/accountID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_accountKind'>accountKind: </label><div class='col-sm-8'><select id='{{id}}_accountKind' class='form-control custom-select'>{{#accountKindErpAccountKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/accountKindErpAccountKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_amount'>amount: </label><div class='col-sm-8'><input id='{{id}}_amount' class='form-control' type='text'{{#amount}} value='{{amount}}'{{/amount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_postedDateTime'>postedDateTime: </label><div class='col-sm-8'><input id='{{id}}_postedDateTime' class='form-control' type='text'{{#postedDateTime}} value='{{postedDateTime}}'{{/postedDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_transactionDateTime'>transactionDateTime: </label><div class='col-sm-8'><input id='{{id}}_transactionDateTime' class='form-control' type='text'{{#transactionDateTime}} value='{{transactionDateTime}}'{{/transactionDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpLedgerEntry'>ErpLedgerEntry: </label><div class='col-sm-8'><input id='{{id}}_ErpLedgerEntry' class='form-control' type='text'{{#ErpLedgerEntry}} value='{{ErpLedgerEntry}}'{{/ErpLedgerEntry}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_UserAttributes'>UserAttributes: </label><div class='col-sm-8'><input id='{{id}}_UserAttributes' class='form-control' type='text'{{#UserAttributes}} value='{{UserAttributes_string}}'{{/UserAttributes}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpJounalEntry'>ErpJounalEntry: </label><div class='col-sm-8'><input id='{{id}}_ErpJounalEntry' class='form-control' type='text'{{#ErpJounalEntry}} value='{{ErpJounalEntry}}'{{/ErpJounalEntry}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpLedger'>ErpLedger: </label><div class='col-sm-8'><input id='{{id}}_ErpLedger' class='form-control' type='text'{{#ErpLedger}} value='{{ErpLedger}}'{{/ErpLedger}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ErpLedgerEntry" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_accountID").value; if ("" !== temp) obj["accountID"] = temp;
                temp = ErpAccountKind[document.getElementById (id + "_accountKind").value]; if (temp) obj["accountKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#ErpAccountKind." + temp; else delete obj["accountKind"];
                temp = document.getElementById (id + "_amount").value; if ("" !== temp) obj["amount"] = temp;
                temp = document.getElementById (id + "_postedDateTime").value; if ("" !== temp) obj["postedDateTime"] = temp;
                temp = document.getElementById (id + "_transactionDateTime").value; if ("" !== temp) obj["transactionDateTime"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_ErpLedgerEntry").value; if ("" !== temp) obj["ErpLedgerEntry"] = temp;
                temp = document.getElementById (id + "_UserAttributes").value; if ("" !== temp) obj["UserAttributes"] = temp.split (",");
                temp = document.getElementById (id + "_ErpJounalEntry").value; if ("" !== temp) obj["ErpJounalEntry"] = temp;
                temp = document.getElementById (id + "_ErpLedger").value; if ("" !== temp) obj["ErpLedger"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ErpLedgerEntry", "0..1", "0..1", "ErpLedBudLineItem", "ErpLedBudLineItem"],
                            ["UserAttributes", "0..*", "0..*", "UserAttribute", "ErpLedgerEntries"],
                            ["ErpJounalEntry", "0..1", "0..1", "ErpJournalEntry", "ErpLedgerEntry"],
                            ["ErpLedger", "1", "0..*", "ErpLedger", "ErpLedgerEntries"]
                        ]
                    )
                );
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
                let bucket = cim_data.ErpSiteLevelData;
                if (null == bucket)
                   cim_data.ErpSiteLevelData = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpSiteLevelData[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpSiteLevelData";
                base.parse_attribute (/<cim:ErpSiteLevelData.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attribute (/<cim:ErpSiteLevelData.LandProperty\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LandProperty", sub, context);
                let bucket = context.parsed.ErpSiteLevelData;
                if (null == bucket)
                   context.parsed.ErpSiteLevelData = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ErpSiteLevelData", "status", "status", fields);
                base.export_attribute (obj, "ErpSiteLevelData", "LandProperty", "LandProperty", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpSiteLevelData_collapse" aria-expanded="true" aria-controls="ErpSiteLevelData_collapse" style="margin-left: 10px;">ErpSiteLevelData</a></legend>
                    <div id="ErpSiteLevelData_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}\n                    {{#LandProperty}}<div><b>LandProperty</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{LandProperty}}&quot;);}); return false;'>{{LandProperty}}</a></div>{{/LandProperty}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpSiteLevelData_collapse" aria-expanded="true" aria-controls="{{id}}_ErpSiteLevelData_collapse" style="margin-left: 10px;">ErpSiteLevelData</a></legend>
                    <div id="{{id}}_ErpSiteLevelData_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LandProperty'>LandProperty: </label><div class='col-sm-8'><input id='{{id}}_LandProperty' class='form-control' type='text'{{#LandProperty}} value='{{LandProperty}}'{{/LandProperty}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ErpSiteLevelData" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_LandProperty").value; if ("" !== temp) obj["LandProperty"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["LandProperty", "0..1", "0..*", "LandProperty", "ErpSiteLevelDatas"]
                        ]
                    )
                );
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
                let bucket = cim_data.ErpPersonnel;
                if (null == bucket)
                   cim_data.ErpPersonnel = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpPersonnel[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpPersonnel";
                base.parse_attribute (/<cim:ErpPersonnel.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attributes (/<cim:ErpPersonnel.ErpPersons\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpPersons", sub, context);
                let bucket = context.parsed.ErpPersonnel;
                if (null == bucket)
                   context.parsed.ErpPersonnel = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ErpPersonnel", "status", "status", fields);
                base.export_attributes (obj, "ErpPersonnel", "ErpPersons", "ErpPersons", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpPersonnel_collapse" aria-expanded="true" aria-controls="ErpPersonnel_collapse" style="margin-left: 10px;">ErpPersonnel</a></legend>
                    <div id="ErpPersonnel_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}\n                    {{#ErpPersons}}<div><b>ErpPersons</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpPersons}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ErpPersons"]) obj["ErpPersons_string"] = obj["ErpPersons"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ErpPersons_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpPersonnel_collapse" aria-expanded="true" aria-controls="{{id}}_ErpPersonnel_collapse" style="margin-left: 10px;">ErpPersonnel</a></legend>
                    <div id="{{id}}_ErpPersonnel_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ErpPersonnel" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ErpPersons", "0..*", "0..1", "OldPerson", "ErpPersonnel"]
                        ]
                    )
                );
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
                let bucket = cim_data.ErpQuoteLineItem;
                if (null == bucket)
                   cim_data.ErpQuoteLineItem = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpQuoteLineItem[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpQuoteLineItem";
                base.parse_attribute (/<cim:ErpQuoteLineItem.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attribute (/<cim:ErpQuoteLineItem.Design\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Design", sub, context);
                base.parse_attribute (/<cim:ErpQuoteLineItem.ErpReqLineItem\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpReqLineItem", sub, context);
                base.parse_attribute (/<cim:ErpQuoteLineItem.AssetModelCatalogueItem\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AssetModelCatalogueItem", sub, context);
                base.parse_attribute (/<cim:ErpQuoteLineItem.ErpInvoiceLineItem\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpInvoiceLineItem", sub, context);
                base.parse_attribute (/<cim:ErpQuoteLineItem.ErpQuote\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpQuote", sub, context);
                let bucket = context.parsed.ErpQuoteLineItem;
                if (null == bucket)
                   context.parsed.ErpQuoteLineItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ErpQuoteLineItem", "status", "status", fields);
                base.export_attribute (obj, "ErpQuoteLineItem", "Design", "Design", fields);
                base.export_attribute (obj, "ErpQuoteLineItem", "ErpReqLineItem", "ErpReqLineItem", fields);
                base.export_attribute (obj, "ErpQuoteLineItem", "AssetModelCatalogueItem", "AssetModelCatalogueItem", fields);
                base.export_attribute (obj, "ErpQuoteLineItem", "ErpInvoiceLineItem", "ErpInvoiceLineItem", fields);
                base.export_attribute (obj, "ErpQuoteLineItem", "ErpQuote", "ErpQuote", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpQuoteLineItem_collapse" aria-expanded="true" aria-controls="ErpQuoteLineItem_collapse" style="margin-left: 10px;">ErpQuoteLineItem</a></legend>
                    <div id="ErpQuoteLineItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}\n                    {{#Design}}<div><b>Design</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Design}}&quot;);}); return false;'>{{Design}}</a></div>{{/Design}}
                    {{#ErpReqLineItem}}<div><b>ErpReqLineItem</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpReqLineItem}}&quot;);}); return false;'>{{ErpReqLineItem}}</a></div>{{/ErpReqLineItem}}
                    {{#AssetModelCatalogueItem}}<div><b>AssetModelCatalogueItem</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AssetModelCatalogueItem}}&quot;);}); return false;'>{{AssetModelCatalogueItem}}</a></div>{{/AssetModelCatalogueItem}}
                    {{#ErpInvoiceLineItem}}<div><b>ErpInvoiceLineItem</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpInvoiceLineItem}}&quot;);}); return false;'>{{ErpInvoiceLineItem}}</a></div>{{/ErpInvoiceLineItem}}
                    {{#ErpQuote}}<div><b>ErpQuote</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpQuote}}&quot;);}); return false;'>{{ErpQuote}}</a></div>{{/ErpQuote}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpQuoteLineItem_collapse" aria-expanded="true" aria-controls="{{id}}_ErpQuoteLineItem_collapse" style="margin-left: 10px;">ErpQuoteLineItem</a></legend>
                    <div id="{{id}}_ErpQuoteLineItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Design'>Design: </label><div class='col-sm-8'><input id='{{id}}_Design' class='form-control' type='text'{{#Design}} value='{{Design}}'{{/Design}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpReqLineItem'>ErpReqLineItem: </label><div class='col-sm-8'><input id='{{id}}_ErpReqLineItem' class='form-control' type='text'{{#ErpReqLineItem}} value='{{ErpReqLineItem}}'{{/ErpReqLineItem}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AssetModelCatalogueItem'>AssetModelCatalogueItem: </label><div class='col-sm-8'><input id='{{id}}_AssetModelCatalogueItem' class='form-control' type='text'{{#AssetModelCatalogueItem}} value='{{AssetModelCatalogueItem}}'{{/AssetModelCatalogueItem}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpInvoiceLineItem'>ErpInvoiceLineItem: </label><div class='col-sm-8'><input id='{{id}}_ErpInvoiceLineItem' class='form-control' type='text'{{#ErpInvoiceLineItem}} value='{{ErpInvoiceLineItem}}'{{/ErpInvoiceLineItem}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpQuote'>ErpQuote: </label><div class='col-sm-8'><input id='{{id}}_ErpQuote' class='form-control' type='text'{{#ErpQuote}} value='{{ErpQuote}}'{{/ErpQuote}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ErpQuoteLineItem" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_Design").value; if ("" !== temp) obj["Design"] = temp;
                temp = document.getElementById (id + "_ErpReqLineItem").value; if ("" !== temp) obj["ErpReqLineItem"] = temp;
                temp = document.getElementById (id + "_AssetModelCatalogueItem").value; if ("" !== temp) obj["AssetModelCatalogueItem"] = temp;
                temp = document.getElementById (id + "_ErpInvoiceLineItem").value; if ("" !== temp) obj["ErpInvoiceLineItem"] = temp;
                temp = document.getElementById (id + "_ErpQuote").value; if ("" !== temp) obj["ErpQuote"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Design", "0..1", "0..1", "Design", "ErpQuoteLineItem"],
                            ["ErpReqLineItem", "0..1", "0..1", "ErpReqLineItem", "ErpQuoteLineItem"],
                            ["AssetModelCatalogueItem", "0..1", "0..*", "AssetModelCatalogueItem", "ErpQuoteLineItems"],
                            ["ErpInvoiceLineItem", "0..1", "0..1", "ErpInvoiceLineItem", "ErpQuoteLineItem"],
                            ["ErpQuote", "1", "0..*", "ErpQuote", "ErpQuoteLineItems"]
                        ]
                    )
                );
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
                let bucket = cim_data.ErpJournalEntry;
                if (null == bucket)
                   cim_data.ErpJournalEntry = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpJournalEntry[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpJournalEntry";
                base.parse_element (/<cim:ErpJournalEntry.accountID>([\s\S]*?)<\/cim:ErpJournalEntry.accountID>/g, obj, "accountID", base.to_string, sub, context);
                base.parse_element (/<cim:ErpJournalEntry.amount>([\s\S]*?)<\/cim:ErpJournalEntry.amount>/g, obj, "amount", base.to_string, sub, context);
                base.parse_element (/<cim:ErpJournalEntry.postingDateTime>([\s\S]*?)<\/cim:ErpJournalEntry.postingDateTime>/g, obj, "postingDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:ErpJournalEntry.transactionDateTime>([\s\S]*?)<\/cim:ErpJournalEntry.transactionDateTime>/g, obj, "transactionDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:ErpJournalEntry.sourceID>([\s\S]*?)<\/cim:ErpJournalEntry.sourceID>/g, obj, "sourceID", base.to_string, sub, context);
                base.parse_attribute (/<cim:ErpJournalEntry.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attribute (/<cim:ErpJournalEntry.ErpJournal\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpJournal", sub, context);
                base.parse_attribute (/<cim:ErpJournalEntry.ErpInvoiceLineItem\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpInvoiceLineItem", sub, context);
                base.parse_attribute (/<cim:ErpJournalEntry.ErpLedgerEntry\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpLedgerEntry", sub, context);
                base.parse_attributes (/<cim:ErpJournalEntry.CostTypes\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CostTypes", sub, context);
                base.parse_attributes (/<cim:ErpJournalEntry.ErpPayableLineItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpPayableLineItems", sub, context);
                base.parse_attributes (/<cim:ErpJournalEntry.ErpRecLineItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpRecLineItems", sub, context);
                let bucket = context.parsed.ErpJournalEntry;
                if (null == bucket)
                   context.parsed.ErpJournalEntry = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ErpJournalEntry", "accountID", "accountID",  base.from_string, fields);
                base.export_element (obj, "ErpJournalEntry", "amount", "amount",  base.from_string, fields);
                base.export_element (obj, "ErpJournalEntry", "postingDateTime", "postingDateTime",  base.from_datetime, fields);
                base.export_element (obj, "ErpJournalEntry", "transactionDateTime", "transactionDateTime",  base.from_datetime, fields);
                base.export_element (obj, "ErpJournalEntry", "sourceID", "sourceID",  base.from_string, fields);
                base.export_attribute (obj, "ErpJournalEntry", "status", "status", fields);
                base.export_attribute (obj, "ErpJournalEntry", "ErpJournal", "ErpJournal", fields);
                base.export_attribute (obj, "ErpJournalEntry", "ErpInvoiceLineItem", "ErpInvoiceLineItem", fields);
                base.export_attribute (obj, "ErpJournalEntry", "ErpLedgerEntry", "ErpLedgerEntry", fields);
                base.export_attributes (obj, "ErpJournalEntry", "CostTypes", "CostTypes", fields);
                base.export_attributes (obj, "ErpJournalEntry", "ErpPayableLineItems", "ErpPayableLineItems", fields);
                base.export_attributes (obj, "ErpJournalEntry", "ErpRecLineItems", "ErpRecLineItems", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpJournalEntry_collapse" aria-expanded="true" aria-controls="ErpJournalEntry_collapse" style="margin-left: 10px;">ErpJournalEntry</a></legend>
                    <div id="ErpJournalEntry_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#accountID}}<div><b>accountID</b>: {{accountID}}</div>{{/accountID}}
                    {{#amount}}<div><b>amount</b>: {{amount}}</div>{{/amount}}
                    {{#postingDateTime}}<div><b>postingDateTime</b>: {{postingDateTime}}</div>{{/postingDateTime}}
                    {{#transactionDateTime}}<div><b>transactionDateTime</b>: {{transactionDateTime}}</div>{{/transactionDateTime}}
                    {{#sourceID}}<div><b>sourceID</b>: {{sourceID}}</div>{{/sourceID}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}\n                    {{#ErpJournal}}<div><b>ErpJournal</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpJournal}}&quot;);}); return false;'>{{ErpJournal}}</a></div>{{/ErpJournal}}
                    {{#ErpInvoiceLineItem}}<div><b>ErpInvoiceLineItem</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpInvoiceLineItem}}&quot;);}); return false;'>{{ErpInvoiceLineItem}}</a></div>{{/ErpInvoiceLineItem}}
                    {{#ErpLedgerEntry}}<div><b>ErpLedgerEntry</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpLedgerEntry}}&quot;);}); return false;'>{{ErpLedgerEntry}}</a></div>{{/ErpLedgerEntry}}
                    {{#CostTypes}}<div><b>CostTypes</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/CostTypes}}
                    {{#ErpPayableLineItems}}<div><b>ErpPayableLineItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpPayableLineItems}}
                    {{#ErpRecLineItems}}<div><b>ErpRecLineItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpRecLineItems}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["CostTypes"]) obj["CostTypes_string"] = obj["CostTypes"].join ();
                if (obj["ErpPayableLineItems"]) obj["ErpPayableLineItems_string"] = obj["ErpPayableLineItems"].join ();
                if (obj["ErpRecLineItems"]) obj["ErpRecLineItems_string"] = obj["ErpRecLineItems"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["CostTypes_string"];
                delete obj["ErpPayableLineItems_string"];
                delete obj["ErpRecLineItems_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpJournalEntry_collapse" aria-expanded="true" aria-controls="{{id}}_ErpJournalEntry_collapse" style="margin-left: 10px;">ErpJournalEntry</a></legend>
                    <div id="{{id}}_ErpJournalEntry_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_accountID'>accountID: </label><div class='col-sm-8'><input id='{{id}}_accountID' class='form-control' type='text'{{#accountID}} value='{{accountID}}'{{/accountID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_amount'>amount: </label><div class='col-sm-8'><input id='{{id}}_amount' class='form-control' type='text'{{#amount}} value='{{amount}}'{{/amount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_postingDateTime'>postingDateTime: </label><div class='col-sm-8'><input id='{{id}}_postingDateTime' class='form-control' type='text'{{#postingDateTime}} value='{{postingDateTime}}'{{/postingDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_transactionDateTime'>transactionDateTime: </label><div class='col-sm-8'><input id='{{id}}_transactionDateTime' class='form-control' type='text'{{#transactionDateTime}} value='{{transactionDateTime}}'{{/transactionDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sourceID'>sourceID: </label><div class='col-sm-8'><input id='{{id}}_sourceID' class='form-control' type='text'{{#sourceID}} value='{{sourceID}}'{{/sourceID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpJournal'>ErpJournal: </label><div class='col-sm-8'><input id='{{id}}_ErpJournal' class='form-control' type='text'{{#ErpJournal}} value='{{ErpJournal}}'{{/ErpJournal}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpInvoiceLineItem'>ErpInvoiceLineItem: </label><div class='col-sm-8'><input id='{{id}}_ErpInvoiceLineItem' class='form-control' type='text'{{#ErpInvoiceLineItem}} value='{{ErpInvoiceLineItem}}'{{/ErpInvoiceLineItem}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpLedgerEntry'>ErpLedgerEntry: </label><div class='col-sm-8'><input id='{{id}}_ErpLedgerEntry' class='form-control' type='text'{{#ErpLedgerEntry}} value='{{ErpLedgerEntry}}'{{/ErpLedgerEntry}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CostTypes'>CostTypes: </label><div class='col-sm-8'><input id='{{id}}_CostTypes' class='form-control' type='text'{{#CostTypes}} value='{{CostTypes_string}}'{{/CostTypes}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpPayableLineItems'>ErpPayableLineItems: </label><div class='col-sm-8'><input id='{{id}}_ErpPayableLineItems' class='form-control' type='text'{{#ErpPayableLineItems}} value='{{ErpPayableLineItems_string}}'{{/ErpPayableLineItems}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpRecLineItems'>ErpRecLineItems: </label><div class='col-sm-8'><input id='{{id}}_ErpRecLineItems' class='form-control' type='text'{{#ErpRecLineItems}} value='{{ErpRecLineItems_string}}'{{/ErpRecLineItems}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ErpJournalEntry" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_accountID").value; if ("" !== temp) obj["accountID"] = temp;
                temp = document.getElementById (id + "_amount").value; if ("" !== temp) obj["amount"] = temp;
                temp = document.getElementById (id + "_postingDateTime").value; if ("" !== temp) obj["postingDateTime"] = temp;
                temp = document.getElementById (id + "_transactionDateTime").value; if ("" !== temp) obj["transactionDateTime"] = temp;
                temp = document.getElementById (id + "_sourceID").value; if ("" !== temp) obj["sourceID"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_ErpJournal").value; if ("" !== temp) obj["ErpJournal"] = temp;
                temp = document.getElementById (id + "_ErpInvoiceLineItem").value; if ("" !== temp) obj["ErpInvoiceLineItem"] = temp;
                temp = document.getElementById (id + "_ErpLedgerEntry").value; if ("" !== temp) obj["ErpLedgerEntry"] = temp;
                temp = document.getElementById (id + "_CostTypes").value; if ("" !== temp) obj["CostTypes"] = temp.split (",");
                temp = document.getElementById (id + "_ErpPayableLineItems").value; if ("" !== temp) obj["ErpPayableLineItems"] = temp.split (",");
                temp = document.getElementById (id + "_ErpRecLineItems").value; if ("" !== temp) obj["ErpRecLineItems"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ErpJournal", "1", "0..*", "ErpJournal", "ErpJournalEntries"],
                            ["ErpInvoiceLineItem", "0..1", "0..*", "ErpInvoiceLineItem", "ErpJournalEntries"],
                            ["ErpLedgerEntry", "0..1", "0..1", "ErpLedgerEntry", "ErpJounalEntry"],
                            ["CostTypes", "0..*", "0..*", "CostType", "ErpJournalEntries"],
                            ["ErpPayableLineItems", "0..*", "0..*", "ErpPayableLineItem", "ErpJournalEntries"],
                            ["ErpRecLineItems", "0..*", "0..*", "ErpRecLineItem", "ErpJournalEntries"]
                        ]
                    )
                );
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
                let bucket = cim_data.ErpBomItemData;
                if (null == bucket)
                   cim_data.ErpBomItemData = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpBomItemData[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpBomItemData";
                base.parse_attribute (/<cim:ErpBomItemData.TypeAsset\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TypeAsset", sub, context);
                base.parse_attribute (/<cim:ErpBomItemData.ErpBOM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpBOM", sub, context);
                base.parse_attribute (/<cim:ErpBomItemData.DesignLocation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DesignLocation", sub, context);
                let bucket = context.parsed.ErpBomItemData;
                if (null == bucket)
                   context.parsed.ErpBomItemData = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ErpBomItemData", "TypeAsset", "TypeAsset", fields);
                base.export_attribute (obj, "ErpBomItemData", "ErpBOM", "ErpBOM", fields);
                base.export_attribute (obj, "ErpBomItemData", "DesignLocation", "DesignLocation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpBomItemData_collapse" aria-expanded="true" aria-controls="ErpBomItemData_collapse" style="margin-left: 10px;">ErpBomItemData</a></legend>
                    <div id="ErpBomItemData_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#TypeAsset}}<div><b>TypeAsset</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TypeAsset}}&quot;);}); return false;'>{{TypeAsset}}</a></div>{{/TypeAsset}}
                    {{#ErpBOM}}<div><b>ErpBOM</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpBOM}}&quot;);}); return false;'>{{ErpBOM}}</a></div>{{/ErpBOM}}
                    {{#DesignLocation}}<div><b>DesignLocation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DesignLocation}}&quot;);}); return false;'>{{DesignLocation}}</a></div>{{/DesignLocation}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpBomItemData_collapse" aria-expanded="true" aria-controls="{{id}}_ErpBomItemData_collapse" style="margin-left: 10px;">ErpBomItemData</a></legend>
                    <div id="{{id}}_ErpBomItemData_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TypeAsset'>TypeAsset: </label><div class='col-sm-8'><input id='{{id}}_TypeAsset' class='form-control' type='text'{{#TypeAsset}} value='{{TypeAsset}}'{{/TypeAsset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpBOM'>ErpBOM: </label><div class='col-sm-8'><input id='{{id}}_ErpBOM' class='form-control' type='text'{{#ErpBOM}} value='{{ErpBOM}}'{{/ErpBOM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DesignLocation'>DesignLocation: </label><div class='col-sm-8'><input id='{{id}}_DesignLocation' class='form-control' type='text'{{#DesignLocation}} value='{{DesignLocation}}'{{/DesignLocation}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ErpBomItemData" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_TypeAsset").value; if ("" !== temp) obj["TypeAsset"] = temp;
                temp = document.getElementById (id + "_ErpBOM").value; if ("" !== temp) obj["ErpBOM"] = temp;
                temp = document.getElementById (id + "_DesignLocation").value; if ("" !== temp) obj["DesignLocation"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TypeAsset", "0..1", "0..*", "CatalogAssetType", "ErpBomItemDatas"],
                            ["ErpBOM", "1", "0..*", "ErpBOM", "ErpBomItemDatas"],
                            ["DesignLocation", "0..1", "0..*", "DesignLocation", "ErpBomItemDatas"]
                        ]
                    )
                );
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
                let bucket = cim_data.ErpInventory;
                if (null == bucket)
                   cim_data.ErpInventory = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpInventory[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpInventory";
                base.parse_attribute (/<cim:ErpInventory.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attribute (/<cim:ErpInventory.Asset\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context);
                let bucket = context.parsed.ErpInventory;
                if (null == bucket)
                   context.parsed.ErpInventory = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ErpInventory", "status", "status", fields);
                base.export_attribute (obj, "ErpInventory", "Asset", "Asset", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpInventory_collapse" aria-expanded="true" aria-controls="ErpInventory_collapse" style="margin-left: 10px;">ErpInventory</a></legend>
                    <div id="ErpInventory_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}\n                    {{#Asset}}<div><b>Asset</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Asset}}&quot;);}); return false;'>{{Asset}}</a></div>{{/Asset}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpInventory_collapse" aria-expanded="true" aria-controls="{{id}}_ErpInventory_collapse" style="margin-left: 10px;">ErpInventory</a></legend>
                    <div id="{{id}}_ErpInventory_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Asset'>Asset: </label><div class='col-sm-8'><input id='{{id}}_Asset' class='form-control' type='text'{{#Asset}} value='{{Asset}}'{{/Asset}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ErpInventory" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_Asset").value; if ("" !== temp) obj["Asset"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Asset", "0..1", "0..1", "Asset", "ErpInventory"]
                        ]
                    )
                );
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
                let bucket = cim_data.ErpIssueInventory;
                if (null == bucket)
                   cim_data.ErpIssueInventory = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpIssueInventory[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpIssueInventory";
                base.parse_attribute (/<cim:ErpIssueInventory.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attribute (/<cim:ErpIssueInventory.TypeMaterial\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TypeMaterial", sub, context);
                base.parse_attribute (/<cim:ErpIssueInventory.TypeAsset\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TypeAsset", sub, context);
                let bucket = context.parsed.ErpIssueInventory;
                if (null == bucket)
                   context.parsed.ErpIssueInventory = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ErpIssueInventory", "status", "status", fields);
                base.export_attribute (obj, "ErpIssueInventory", "TypeMaterial", "TypeMaterial", fields);
                base.export_attribute (obj, "ErpIssueInventory", "TypeAsset", "TypeAsset", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpIssueInventory_collapse" aria-expanded="true" aria-controls="ErpIssueInventory_collapse" style="margin-left: 10px;">ErpIssueInventory</a></legend>
                    <div id="ErpIssueInventory_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}\n                    {{#TypeMaterial}}<div><b>TypeMaterial</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TypeMaterial}}&quot;);}); return false;'>{{TypeMaterial}}</a></div>{{/TypeMaterial}}
                    {{#TypeAsset}}<div><b>TypeAsset</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TypeAsset}}&quot;);}); return false;'>{{TypeAsset}}</a></div>{{/TypeAsset}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpIssueInventory_collapse" aria-expanded="true" aria-controls="{{id}}_ErpIssueInventory_collapse" style="margin-left: 10px;">ErpIssueInventory</a></legend>
                    <div id="{{id}}_ErpIssueInventory_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TypeMaterial'>TypeMaterial: </label><div class='col-sm-8'><input id='{{id}}_TypeMaterial' class='form-control' type='text'{{#TypeMaterial}} value='{{TypeMaterial}}'{{/TypeMaterial}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TypeAsset'>TypeAsset: </label><div class='col-sm-8'><input id='{{id}}_TypeAsset' class='form-control' type='text'{{#TypeAsset}} value='{{TypeAsset}}'{{/TypeAsset}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ErpIssueInventory" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_TypeMaterial").value; if ("" !== temp) obj["TypeMaterial"] = temp;
                temp = document.getElementById (id + "_TypeAsset").value; if ("" !== temp) obj["TypeAsset"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TypeMaterial", "0..1", "0..*", "TypeMaterial", "ErpIssueInventories"],
                            ["TypeAsset", "0..1", "0..*", "CatalogAssetType", "ErpInventoryIssues"]
                        ]
                    )
                );
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
                let bucket = cim_data.ErpCompetency;
                if (null == bucket)
                   cim_data.ErpCompetency = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpCompetency[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpCompetency";
                base.parse_attributes (/<cim:ErpCompetency.ErpPersons\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpPersons", sub, context);
                let bucket = context.parsed.ErpCompetency;
                if (null == bucket)
                   context.parsed.ErpCompetency = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ErpCompetency", "ErpPersons", "ErpPersons", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpCompetency_collapse" aria-expanded="true" aria-controls="ErpCompetency_collapse" style="margin-left: 10px;">ErpCompetency</a></legend>
                    <div id="ErpCompetency_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#ErpPersons}}<div><b>ErpPersons</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpPersons}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ErpPersons"]) obj["ErpPersons_string"] = obj["ErpPersons"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ErpPersons_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpCompetency_collapse" aria-expanded="true" aria-controls="{{id}}_ErpCompetency_collapse" style="margin-left: 10px;">ErpCompetency</a></legend>
                    <div id="{{id}}_ErpCompetency_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "ErpCompetency" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ErpPersons", "0..*", "0..1", "OldPerson", "ErpCompetency"]
                        ]
                    )
                );
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
                let bucket = cim_data.ErpLedBudLineItem;
                if (null == bucket)
                   cim_data.ErpLedBudLineItem = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpLedBudLineItem[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpLedBudLineItem";
                base.parse_attribute (/<cim:ErpLedBudLineItem.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attribute (/<cim:ErpLedBudLineItem.ErpLedgerBudget\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpLedgerBudget", sub, context);
                base.parse_attribute (/<cim:ErpLedBudLineItem.ErpLedBudLineItem\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpLedBudLineItem", sub, context);
                let bucket = context.parsed.ErpLedBudLineItem;
                if (null == bucket)
                   context.parsed.ErpLedBudLineItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ErpLedBudLineItem", "status", "status", fields);
                base.export_attribute (obj, "ErpLedBudLineItem", "ErpLedgerBudget", "ErpLedgerBudget", fields);
                base.export_attribute (obj, "ErpLedBudLineItem", "ErpLedBudLineItem", "ErpLedBudLineItem", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpLedBudLineItem_collapse" aria-expanded="true" aria-controls="ErpLedBudLineItem_collapse" style="margin-left: 10px;">ErpLedBudLineItem</a></legend>
                    <div id="ErpLedBudLineItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}\n                    {{#ErpLedgerBudget}}<div><b>ErpLedgerBudget</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpLedgerBudget}}&quot;);}); return false;'>{{ErpLedgerBudget}}</a></div>{{/ErpLedgerBudget}}
                    {{#ErpLedBudLineItem}}<div><b>ErpLedBudLineItem</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpLedBudLineItem}}&quot;);}); return false;'>{{ErpLedBudLineItem}}</a></div>{{/ErpLedBudLineItem}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpLedBudLineItem_collapse" aria-expanded="true" aria-controls="{{id}}_ErpLedBudLineItem_collapse" style="margin-left: 10px;">ErpLedBudLineItem</a></legend>
                    <div id="{{id}}_ErpLedBudLineItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpLedgerBudget'>ErpLedgerBudget: </label><div class='col-sm-8'><input id='{{id}}_ErpLedgerBudget' class='form-control' type='text'{{#ErpLedgerBudget}} value='{{ErpLedgerBudget}}'{{/ErpLedgerBudget}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpLedBudLineItem'>ErpLedBudLineItem: </label><div class='col-sm-8'><input id='{{id}}_ErpLedBudLineItem' class='form-control' type='text'{{#ErpLedBudLineItem}} value='{{ErpLedBudLineItem}}'{{/ErpLedBudLineItem}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ErpLedBudLineItem" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_ErpLedgerBudget").value; if ("" !== temp) obj["ErpLedgerBudget"] = temp;
                temp = document.getElementById (id + "_ErpLedBudLineItem").value; if ("" !== temp) obj["ErpLedBudLineItem"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ErpLedgerBudget", "1", "0..*", "ErpLedgerBudget", "ErpLedBudLineItems"],
                            ["ErpLedBudLineItem", "0..1", "0..1", "ErpLedgerEntry", "ErpLedgerEntry"]
                        ]
                    )
                );
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
                let bucket = cim_data.ErpRecDelvLineItem;
                if (null == bucket)
                   cim_data.ErpRecDelvLineItem = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpRecDelvLineItem[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpRecDelvLineItem";
                base.parse_attribute (/<cim:ErpRecDelvLineItem.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attribute (/<cim:ErpRecDelvLineItem.ErpReceiveDelivery\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpReceiveDelivery", sub, context);
                base.parse_attributes (/<cim:ErpRecDelvLineItem.Assets\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Assets", sub, context);
                base.parse_attribute (/<cim:ErpRecDelvLineItem.ErpPOLineItem\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpPOLineItem", sub, context);
                base.parse_attribute (/<cim:ErpRecDelvLineItem.ErpInvoiceLineItem\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpInvoiceLineItem", sub, context);
                let bucket = context.parsed.ErpRecDelvLineItem;
                if (null == bucket)
                   context.parsed.ErpRecDelvLineItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ErpRecDelvLineItem", "status", "status", fields);
                base.export_attribute (obj, "ErpRecDelvLineItem", "ErpReceiveDelivery", "ErpReceiveDelivery", fields);
                base.export_attributes (obj, "ErpRecDelvLineItem", "Assets", "Assets", fields);
                base.export_attribute (obj, "ErpRecDelvLineItem", "ErpPOLineItem", "ErpPOLineItem", fields);
                base.export_attribute (obj, "ErpRecDelvLineItem", "ErpInvoiceLineItem", "ErpInvoiceLineItem", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpRecDelvLineItem_collapse" aria-expanded="true" aria-controls="ErpRecDelvLineItem_collapse" style="margin-left: 10px;">ErpRecDelvLineItem</a></legend>
                    <div id="ErpRecDelvLineItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}\n                    {{#ErpReceiveDelivery}}<div><b>ErpReceiveDelivery</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpReceiveDelivery}}&quot;);}); return false;'>{{ErpReceiveDelivery}}</a></div>{{/ErpReceiveDelivery}}
                    {{#Assets}}<div><b>Assets</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Assets}}
                    {{#ErpPOLineItem}}<div><b>ErpPOLineItem</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpPOLineItem}}&quot;);}); return false;'>{{ErpPOLineItem}}</a></div>{{/ErpPOLineItem}}
                    {{#ErpInvoiceLineItem}}<div><b>ErpInvoiceLineItem</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpInvoiceLineItem}}&quot;);}); return false;'>{{ErpInvoiceLineItem}}</a></div>{{/ErpInvoiceLineItem}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Assets"]) obj["Assets_string"] = obj["Assets"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Assets_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpRecDelvLineItem_collapse" aria-expanded="true" aria-controls="{{id}}_ErpRecDelvLineItem_collapse" style="margin-left: 10px;">ErpRecDelvLineItem</a></legend>
                    <div id="{{id}}_ErpRecDelvLineItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpReceiveDelivery'>ErpReceiveDelivery: </label><div class='col-sm-8'><input id='{{id}}_ErpReceiveDelivery' class='form-control' type='text'{{#ErpReceiveDelivery}} value='{{ErpReceiveDelivery}}'{{/ErpReceiveDelivery}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Assets'>Assets: </label><div class='col-sm-8'><input id='{{id}}_Assets' class='form-control' type='text'{{#Assets}} value='{{Assets_string}}'{{/Assets}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpPOLineItem'>ErpPOLineItem: </label><div class='col-sm-8'><input id='{{id}}_ErpPOLineItem' class='form-control' type='text'{{#ErpPOLineItem}} value='{{ErpPOLineItem}}'{{/ErpPOLineItem}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpInvoiceLineItem'>ErpInvoiceLineItem: </label><div class='col-sm-8'><input id='{{id}}_ErpInvoiceLineItem' class='form-control' type='text'{{#ErpInvoiceLineItem}} value='{{ErpInvoiceLineItem}}'{{/ErpInvoiceLineItem}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ErpRecDelvLineItem" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_ErpReceiveDelivery").value; if ("" !== temp) obj["ErpReceiveDelivery"] = temp;
                temp = document.getElementById (id + "_Assets").value; if ("" !== temp) obj["Assets"] = temp.split (",");
                temp = document.getElementById (id + "_ErpPOLineItem").value; if ("" !== temp) obj["ErpPOLineItem"] = temp;
                temp = document.getElementById (id + "_ErpInvoiceLineItem").value; if ("" !== temp) obj["ErpInvoiceLineItem"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ErpReceiveDelivery", "1", "0..*", "ErpReceiveDelivery", "ErpRecDelvLineItems"],
                            ["Assets", "0..*", "0..*", "Asset", "ErpRecDeliveryItems"],
                            ["ErpPOLineItem", "0..1", "0..1", "ErpPOLineItem", "ErpRecDelLineItem"],
                            ["ErpInvoiceLineItem", "0..1", "0..1", "ErpInvoiceLineItem", "ErpRecDelvLineItem"]
                        ]
                    )
                );
            }
        }

        /**
         * This is related to Inventory physical counts organized by AssetModel.
         *
         * Note that a count of a type of asset can be accomplished by the association inherited by AssetModel (from Document) to Asset.
         * It enables ERP applications to transfer an inventory count between ERP and the actual physical inventory location. This count may be a cycle count or a physical count.
         *
         */
        class ErpInventoryCount extends ErpIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ErpInventoryCount;
                if (null == bucket)
                   cim_data.ErpInventoryCount = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpInventoryCount[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpInventoryCount";
                base.parse_attribute (/<cim:ErpInventoryCount.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                let bucket = context.parsed.ErpInventoryCount;
                if (null == bucket)
                   context.parsed.ErpInventoryCount = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ErpInventoryCount", "status", "status", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpInventoryCount_collapse" aria-expanded="true" aria-controls="ErpInventoryCount_collapse" style="margin-left: 10px;">ErpInventoryCount</a></legend>
                    <div id="ErpInventoryCount_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}\n                    </div>
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpInventoryCount_collapse" aria-expanded="true" aria-controls="{{id}}_ErpInventoryCount_collapse" style="margin-left: 10px;">ErpInventoryCount</a></legend>
                    <div id="{{id}}_ErpInventoryCount_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ErpInventoryCount" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;

                return (obj);
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
                let bucket = cim_data.ErpTimeEntry;
                if (null == bucket)
                   cim_data.ErpTimeEntry = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpTimeEntry[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ErpTimeEntry";
                base.parse_attribute (/<cim:ErpTimeEntry.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attribute (/<cim:ErpTimeEntry.ErpTimeSheet\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpTimeSheet", sub, context);
                base.parse_attribute (/<cim:ErpTimeEntry.ErpProjectAccounting\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpProjectAccounting", sub, context);
                let bucket = context.parsed.ErpTimeEntry;
                if (null == bucket)
                   context.parsed.ErpTimeEntry = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ErpTimeEntry", "status", "status", fields);
                base.export_attribute (obj, "ErpTimeEntry", "ErpTimeSheet", "ErpTimeSheet", fields);
                base.export_attribute (obj, "ErpTimeEntry", "ErpProjectAccounting", "ErpProjectAccounting", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpTimeEntry_collapse" aria-expanded="true" aria-controls="ErpTimeEntry_collapse" style="margin-left: 10px;">ErpTimeEntry</a></legend>
                    <div id="ErpTimeEntry_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}\n                    {{#ErpTimeSheet}}<div><b>ErpTimeSheet</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpTimeSheet}}&quot;);}); return false;'>{{ErpTimeSheet}}</a></div>{{/ErpTimeSheet}}
                    {{#ErpProjectAccounting}}<div><b>ErpProjectAccounting</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpProjectAccounting}}&quot;);}); return false;'>{{ErpProjectAccounting}}</a></div>{{/ErpProjectAccounting}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpTimeEntry_collapse" aria-expanded="true" aria-controls="{{id}}_ErpTimeEntry_collapse" style="margin-left: 10px;">ErpTimeEntry</a></legend>
                    <div id="{{id}}_ErpTimeEntry_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpTimeSheet'>ErpTimeSheet: </label><div class='col-sm-8'><input id='{{id}}_ErpTimeSheet' class='form-control' type='text'{{#ErpTimeSheet}} value='{{ErpTimeSheet}}'{{/ErpTimeSheet}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpProjectAccounting'>ErpProjectAccounting: </label><div class='col-sm-8'><input id='{{id}}_ErpProjectAccounting' class='form-control' type='text'{{#ErpProjectAccounting}} value='{{ErpProjectAccounting}}'{{/ErpProjectAccounting}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ErpTimeEntry" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_ErpTimeSheet").value; if ("" !== temp) obj["ErpTimeSheet"] = temp;
                temp = document.getElementById (id + "_ErpProjectAccounting").value; if ("" !== temp) obj["ErpProjectAccounting"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ErpTimeSheet", "1", "0..*", "ErpTimeSheet", "ErpTimeEntries"],
                            ["ErpProjectAccounting", "0..1", "0..*", "ErpProjectAccounting", "ErpTimeEntries"]
                        ]
                    )
                );
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
                let bucket = cim_data.ErpSalesOrder;
                if (null == bucket)
                   cim_data.ErpSalesOrder = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpSalesOrder[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpSalesOrder";
                let bucket = context.parsed.ErpSalesOrder;
                if (null == bucket)
                   context.parsed.ErpSalesOrder = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpDocument.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpSalesOrder_collapse" aria-expanded="true" aria-controls="ErpSalesOrder_collapse" style="margin-left: 10px;">ErpSalesOrder</a></legend>
                    <div id="ErpSalesOrder_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpSalesOrder_collapse" aria-expanded="true" aria-controls="{{id}}_ErpSalesOrder_collapse" style="margin-left: 10px;">ErpSalesOrder</a></legend>
                    <div id="{{id}}_ErpSalesOrder_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "ErpSalesOrder" };
                super.submit (id, obj);

                return (obj);
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
                let bucket = cim_data.ErpPayable;
                if (null == bucket)
                   cim_data.ErpPayable = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpPayable[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpPayable";
                base.parse_attributes (/<cim:ErpPayable.ContractorItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ContractorItems", sub, context);
                base.parse_attributes (/<cim:ErpPayable.ErpPayableLineItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpPayableLineItems", sub, context);
                let bucket = context.parsed.ErpPayable;
                if (null == bucket)
                   context.parsed.ErpPayable = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpDocument.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ErpPayable", "ContractorItems", "ContractorItems", fields);
                base.export_attributes (obj, "ErpPayable", "ErpPayableLineItems", "ErpPayableLineItems", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpPayable_collapse" aria-expanded="true" aria-controls="ErpPayable_collapse" style="margin-left: 10px;">ErpPayable</a></legend>
                    <div id="ErpPayable_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.template.call (this) +
                    `
                    {{#ContractorItems}}<div><b>ContractorItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ContractorItems}}
                    {{#ErpPayableLineItems}}<div><b>ErpPayableLineItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpPayableLineItems}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ContractorItems"]) obj["ContractorItems_string"] = obj["ContractorItems"].join ();
                if (obj["ErpPayableLineItems"]) obj["ErpPayableLineItems_string"] = obj["ErpPayableLineItems"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ContractorItems_string"];
                delete obj["ErpPayableLineItems_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpPayable_collapse" aria-expanded="true" aria-controls="{{id}}_ErpPayable_collapse" style="margin-left: 10px;">ErpPayable</a></legend>
                    <div id="{{id}}_ErpPayable_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ContractorItems'>ContractorItems: </label><div class='col-sm-8'><input id='{{id}}_ContractorItems' class='form-control' type='text'{{#ContractorItems}} value='{{ContractorItems_string}}'{{/ContractorItems}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ErpPayable" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ContractorItems").value; if ("" !== temp) obj["ContractorItems"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ContractorItems", "0..*", "0..*", "ContractorItem", "ErpPayables"],
                            ["ErpPayableLineItems", "0..*", "1", "ErpPayableLineItem", "ErpPayable"]
                        ]
                    )
                );
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
                let bucket = cim_data.ErpLedger;
                if (null == bucket)
                   cim_data.ErpLedger = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpLedger[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpLedger";
                base.parse_attributes (/<cim:ErpLedger.ErpLedgerEntries\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpLedgerEntries", sub, context);
                let bucket = context.parsed.ErpLedger;
                if (null == bucket)
                   context.parsed.ErpLedger = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpDocument.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ErpLedger", "ErpLedgerEntries", "ErpLedgerEntries", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpLedger_collapse" aria-expanded="true" aria-controls="ErpLedger_collapse" style="margin-left: 10px;">ErpLedger</a></legend>
                    <div id="ErpLedger_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.template.call (this) +
                    `
                    {{#ErpLedgerEntries}}<div><b>ErpLedgerEntries</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpLedgerEntries}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ErpLedgerEntries"]) obj["ErpLedgerEntries_string"] = obj["ErpLedgerEntries"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ErpLedgerEntries_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpLedger_collapse" aria-expanded="true" aria-controls="{{id}}_ErpLedger_collapse" style="margin-left: 10px;">ErpLedger</a></legend>
                    <div id="{{id}}_ErpLedger_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "ErpLedger" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ErpLedgerEntries", "0..*", "1", "ErpLedgerEntry", "ErpLedger"]
                        ]
                    )
                );
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
                let bucket = cim_data.ErpTimeSheet;
                if (null == bucket)
                   cim_data.ErpTimeSheet = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpTimeSheet[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpTimeSheet";
                base.parse_attributes (/<cim:ErpTimeSheet.ErpTimeEntries\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpTimeEntries", sub, context);
                let bucket = context.parsed.ErpTimeSheet;
                if (null == bucket)
                   context.parsed.ErpTimeSheet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpDocument.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ErpTimeSheet", "ErpTimeEntries", "ErpTimeEntries", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpTimeSheet_collapse" aria-expanded="true" aria-controls="ErpTimeSheet_collapse" style="margin-left: 10px;">ErpTimeSheet</a></legend>
                    <div id="ErpTimeSheet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.template.call (this) +
                    `
                    {{#ErpTimeEntries}}<div><b>ErpTimeEntries</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpTimeEntries}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ErpTimeEntries"]) obj["ErpTimeEntries_string"] = obj["ErpTimeEntries"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ErpTimeEntries_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpTimeSheet_collapse" aria-expanded="true" aria-controls="{{id}}_ErpTimeSheet_collapse" style="margin-left: 10px;">ErpTimeSheet</a></legend>
                    <div id="{{id}}_ErpTimeSheet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "ErpTimeSheet" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ErpTimeEntries", "0..*", "1", "ErpTimeEntry", "ErpTimeSheet"]
                        ]
                    )
                );
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
                let bucket = cim_data.ErpRequisition;
                if (null == bucket)
                   cim_data.ErpRequisition = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpRequisition[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpRequisition";
                base.parse_attributes (/<cim:ErpRequisition.ErpReqLineItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpReqLineItems", sub, context);
                let bucket = context.parsed.ErpRequisition;
                if (null == bucket)
                   context.parsed.ErpRequisition = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpDocument.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ErpRequisition", "ErpReqLineItems", "ErpReqLineItems", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpRequisition_collapse" aria-expanded="true" aria-controls="ErpRequisition_collapse" style="margin-left: 10px;">ErpRequisition</a></legend>
                    <div id="ErpRequisition_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.template.call (this) +
                    `
                    {{#ErpReqLineItems}}<div><b>ErpReqLineItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpReqLineItems}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ErpReqLineItems"]) obj["ErpReqLineItems_string"] = obj["ErpReqLineItems"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ErpReqLineItems_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpRequisition_collapse" aria-expanded="true" aria-controls="{{id}}_ErpRequisition_collapse" style="margin-left: 10px;">ErpRequisition</a></legend>
                    <div id="{{id}}_ErpRequisition_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "ErpRequisition" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ErpReqLineItems", "0..*", "1", "ErpReqLineItem", "ErpRequisition"]
                        ]
                    )
                );
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
                let bucket = cim_data.ErpPurchaseOrder;
                if (null == bucket)
                   cim_data.ErpPurchaseOrder = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpPurchaseOrder[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpPurchaseOrder";
                base.parse_attributes (/<cim:ErpPurchaseOrder.ErpPOLineItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpPOLineItems", sub, context);
                let bucket = context.parsed.ErpPurchaseOrder;
                if (null == bucket)
                   context.parsed.ErpPurchaseOrder = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpDocument.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ErpPurchaseOrder", "ErpPOLineItems", "ErpPOLineItems", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpPurchaseOrder_collapse" aria-expanded="true" aria-controls="ErpPurchaseOrder_collapse" style="margin-left: 10px;">ErpPurchaseOrder</a></legend>
                    <div id="ErpPurchaseOrder_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.template.call (this) +
                    `
                    {{#ErpPOLineItems}}<div><b>ErpPOLineItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpPOLineItems}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ErpPOLineItems"]) obj["ErpPOLineItems_string"] = obj["ErpPOLineItems"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ErpPOLineItems_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpPurchaseOrder_collapse" aria-expanded="true" aria-controls="{{id}}_ErpPurchaseOrder_collapse" style="margin-left: 10px;">ErpPurchaseOrder</a></legend>
                    <div id="{{id}}_ErpPurchaseOrder_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "ErpPurchaseOrder" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ErpPOLineItems", "0..*", "1", "ErpPOLineItem", "ErpPurchaseOrder"]
                        ]
                    )
                );
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
                let bucket = cim_data.ErpBOM;
                if (null == bucket)
                   cim_data.ErpBOM = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpBOM[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpBOM";
                base.parse_attribute (/<cim:ErpBOM.Design\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Design", sub, context);
                base.parse_attributes (/<cim:ErpBOM.ErpBomItemDatas\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpBomItemDatas", sub, context);
                let bucket = context.parsed.ErpBOM;
                if (null == bucket)
                   context.parsed.ErpBOM = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpDocument.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ErpBOM", "Design", "Design", fields);
                base.export_attributes (obj, "ErpBOM", "ErpBomItemDatas", "ErpBomItemDatas", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpBOM_collapse" aria-expanded="true" aria-controls="ErpBOM_collapse" style="margin-left: 10px;">ErpBOM</a></legend>
                    <div id="ErpBOM_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.template.call (this) +
                    `
                    {{#Design}}<div><b>Design</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Design}}&quot;);}); return false;'>{{Design}}</a></div>{{/Design}}
                    {{#ErpBomItemDatas}}<div><b>ErpBomItemDatas</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpBomItemDatas}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ErpBomItemDatas"]) obj["ErpBomItemDatas_string"] = obj["ErpBomItemDatas"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ErpBomItemDatas_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpBOM_collapse" aria-expanded="true" aria-controls="{{id}}_ErpBOM_collapse" style="margin-left: 10px;">ErpBOM</a></legend>
                    <div id="{{id}}_ErpBOM_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Design'>Design: </label><div class='col-sm-8'><input id='{{id}}_Design' class='form-control' type='text'{{#Design}} value='{{Design}}'{{/Design}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ErpBOM" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Design").value; if ("" !== temp) obj["Design"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Design", "0..1", "0..*", "Design", "ErpBOMs"],
                            ["ErpBomItemDatas", "0..*", "1", "ErpBomItemData", "ErpBOM"]
                        ]
                    )
                );
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
                let bucket = cim_data.ErpChartOfAccounts;
                if (null == bucket)
                   cim_data.ErpChartOfAccounts = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpChartOfAccounts[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpChartOfAccounts";
                let bucket = context.parsed.ErpChartOfAccounts;
                if (null == bucket)
                   context.parsed.ErpChartOfAccounts = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpDocument.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpChartOfAccounts_collapse" aria-expanded="true" aria-controls="ErpChartOfAccounts_collapse" style="margin-left: 10px;">ErpChartOfAccounts</a></legend>
                    <div id="ErpChartOfAccounts_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpChartOfAccounts_collapse" aria-expanded="true" aria-controls="{{id}}_ErpChartOfAccounts_collapse" style="margin-left: 10px;">ErpChartOfAccounts</a></legend>
                    <div id="{{id}}_ErpChartOfAccounts_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "ErpChartOfAccounts" };
                super.submit (id, obj);

                return (obj);
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
                let bucket = cim_data.ErpPOLineItem;
                if (null == bucket)
                   cim_data.ErpPOLineItem = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpPOLineItem[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpPOLineItem";
                base.parse_attribute (/<cim:ErpPOLineItem.AssetModelCatalogueItem\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AssetModelCatalogueItem", sub, context);
                base.parse_attribute (/<cim:ErpPOLineItem.ErpReqLineItem\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpReqLineItem", sub, context);
                base.parse_attribute (/<cim:ErpPOLineItem.ErpRecDelLineItem\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpRecDelLineItem", sub, context);
                base.parse_attribute (/<cim:ErpPOLineItem.ErpPurchaseOrder\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpPurchaseOrder", sub, context);
                let bucket = context.parsed.ErpPOLineItem;
                if (null == bucket)
                   context.parsed.ErpPOLineItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpDocument.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ErpPOLineItem", "AssetModelCatalogueItem", "AssetModelCatalogueItem", fields);
                base.export_attribute (obj, "ErpPOLineItem", "ErpReqLineItem", "ErpReqLineItem", fields);
                base.export_attribute (obj, "ErpPOLineItem", "ErpRecDelLineItem", "ErpRecDelLineItem", fields);
                base.export_attribute (obj, "ErpPOLineItem", "ErpPurchaseOrder", "ErpPurchaseOrder", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpPOLineItem_collapse" aria-expanded="true" aria-controls="ErpPOLineItem_collapse" style="margin-left: 10px;">ErpPOLineItem</a></legend>
                    <div id="ErpPOLineItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.template.call (this) +
                    `
                    {{#AssetModelCatalogueItem}}<div><b>AssetModelCatalogueItem</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AssetModelCatalogueItem}}&quot;);}); return false;'>{{AssetModelCatalogueItem}}</a></div>{{/AssetModelCatalogueItem}}
                    {{#ErpReqLineItem}}<div><b>ErpReqLineItem</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpReqLineItem}}&quot;);}); return false;'>{{ErpReqLineItem}}</a></div>{{/ErpReqLineItem}}
                    {{#ErpRecDelLineItem}}<div><b>ErpRecDelLineItem</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpRecDelLineItem}}&quot;);}); return false;'>{{ErpRecDelLineItem}}</a></div>{{/ErpRecDelLineItem}}
                    {{#ErpPurchaseOrder}}<div><b>ErpPurchaseOrder</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpPurchaseOrder}}&quot;);}); return false;'>{{ErpPurchaseOrder}}</a></div>{{/ErpPurchaseOrder}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpPOLineItem_collapse" aria-expanded="true" aria-controls="{{id}}_ErpPOLineItem_collapse" style="margin-left: 10px;">ErpPOLineItem</a></legend>
                    <div id="{{id}}_ErpPOLineItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AssetModelCatalogueItem'>AssetModelCatalogueItem: </label><div class='col-sm-8'><input id='{{id}}_AssetModelCatalogueItem' class='form-control' type='text'{{#AssetModelCatalogueItem}} value='{{AssetModelCatalogueItem}}'{{/AssetModelCatalogueItem}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpReqLineItem'>ErpReqLineItem: </label><div class='col-sm-8'><input id='{{id}}_ErpReqLineItem' class='form-control' type='text'{{#ErpReqLineItem}} value='{{ErpReqLineItem}}'{{/ErpReqLineItem}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpRecDelLineItem'>ErpRecDelLineItem: </label><div class='col-sm-8'><input id='{{id}}_ErpRecDelLineItem' class='form-control' type='text'{{#ErpRecDelLineItem}} value='{{ErpRecDelLineItem}}'{{/ErpRecDelLineItem}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpPurchaseOrder'>ErpPurchaseOrder: </label><div class='col-sm-8'><input id='{{id}}_ErpPurchaseOrder' class='form-control' type='text'{{#ErpPurchaseOrder}} value='{{ErpPurchaseOrder}}'{{/ErpPurchaseOrder}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ErpPOLineItem" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_AssetModelCatalogueItem").value; if ("" !== temp) obj["AssetModelCatalogueItem"] = temp;
                temp = document.getElementById (id + "_ErpReqLineItem").value; if ("" !== temp) obj["ErpReqLineItem"] = temp;
                temp = document.getElementById (id + "_ErpRecDelLineItem").value; if ("" !== temp) obj["ErpRecDelLineItem"] = temp;
                temp = document.getElementById (id + "_ErpPurchaseOrder").value; if ("" !== temp) obj["ErpPurchaseOrder"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AssetModelCatalogueItem", "0..1", "0..*", "AssetModelCatalogueItem", "ErpPOLineItems"],
                            ["ErpReqLineItem", "0..1", "0..1", "ErpReqLineItem", "ErpPOLineItem"],
                            ["ErpRecDelLineItem", "0..1", "0..1", "ErpRecDelvLineItem", "ErpPOLineItem"],
                            ["ErpPurchaseOrder", "1", "0..*", "ErpPurchaseOrder", "ErpPOLineItems"]
                        ]
                    )
                );
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
                let bucket = cim_data.ErpPayment;
                if (null == bucket)
                   cim_data.ErpPayment = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpPayment[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpPayment";
                base.parse_element (/<cim:ErpPayment.termsPayment>([\s\S]*?)<\/cim:ErpPayment.termsPayment>/g, obj, "termsPayment", base.to_string, sub, context);
                base.parse_attributes (/<cim:ErpPayment.ErpPayableLineItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpPayableLineItems", sub, context);
                base.parse_attributes (/<cim:ErpPayment.ErpInvoiceLineItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpInvoiceLineItems", sub, context);
                base.parse_attributes (/<cim:ErpPayment.ErpRecLineItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpRecLineItems", sub, context);
                let bucket = context.parsed.ErpPayment;
                if (null == bucket)
                   context.parsed.ErpPayment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpDocument.prototype.export.call (this, obj, false);

                base.export_element (obj, "ErpPayment", "termsPayment", "termsPayment",  base.from_string, fields);
                base.export_attributes (obj, "ErpPayment", "ErpPayableLineItems", "ErpPayableLineItems", fields);
                base.export_attributes (obj, "ErpPayment", "ErpInvoiceLineItems", "ErpInvoiceLineItems", fields);
                base.export_attributes (obj, "ErpPayment", "ErpRecLineItems", "ErpRecLineItems", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpPayment_collapse" aria-expanded="true" aria-controls="ErpPayment_collapse" style="margin-left: 10px;">ErpPayment</a></legend>
                    <div id="ErpPayment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.template.call (this) +
                    `
                    {{#termsPayment}}<div><b>termsPayment</b>: {{termsPayment}}</div>{{/termsPayment}}
                    {{#ErpPayableLineItems}}<div><b>ErpPayableLineItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpPayableLineItems}}
                    {{#ErpInvoiceLineItems}}<div><b>ErpInvoiceLineItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpInvoiceLineItems}}
                    {{#ErpRecLineItems}}<div><b>ErpRecLineItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpRecLineItems}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ErpPayableLineItems"]) obj["ErpPayableLineItems_string"] = obj["ErpPayableLineItems"].join ();
                if (obj["ErpInvoiceLineItems"]) obj["ErpInvoiceLineItems_string"] = obj["ErpInvoiceLineItems"].join ();
                if (obj["ErpRecLineItems"]) obj["ErpRecLineItems_string"] = obj["ErpRecLineItems"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ErpPayableLineItems_string"];
                delete obj["ErpInvoiceLineItems_string"];
                delete obj["ErpRecLineItems_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpPayment_collapse" aria-expanded="true" aria-controls="{{id}}_ErpPayment_collapse" style="margin-left: 10px;">ErpPayment</a></legend>
                    <div id="{{id}}_ErpPayment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_termsPayment'>termsPayment: </label><div class='col-sm-8'><input id='{{id}}_termsPayment' class='form-control' type='text'{{#termsPayment}} value='{{termsPayment}}'{{/termsPayment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpPayableLineItems'>ErpPayableLineItems: </label><div class='col-sm-8'><input id='{{id}}_ErpPayableLineItems' class='form-control' type='text'{{#ErpPayableLineItems}} value='{{ErpPayableLineItems_string}}'{{/ErpPayableLineItems}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpInvoiceLineItems'>ErpInvoiceLineItems: </label><div class='col-sm-8'><input id='{{id}}_ErpInvoiceLineItems' class='form-control' type='text'{{#ErpInvoiceLineItems}} value='{{ErpInvoiceLineItems_string}}'{{/ErpInvoiceLineItems}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpRecLineItems'>ErpRecLineItems: </label><div class='col-sm-8'><input id='{{id}}_ErpRecLineItems' class='form-control' type='text'{{#ErpRecLineItems}} value='{{ErpRecLineItems_string}}'{{/ErpRecLineItems}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ErpPayment" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_termsPayment").value; if ("" !== temp) obj["termsPayment"] = temp;
                temp = document.getElementById (id + "_ErpPayableLineItems").value; if ("" !== temp) obj["ErpPayableLineItems"] = temp.split (",");
                temp = document.getElementById (id + "_ErpInvoiceLineItems").value; if ("" !== temp) obj["ErpInvoiceLineItems"] = temp.split (",");
                temp = document.getElementById (id + "_ErpRecLineItems").value; if ("" !== temp) obj["ErpRecLineItems"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ErpPayableLineItems", "0..*", "0..*", "ErpPayableLineItem", "ErpPayments"],
                            ["ErpInvoiceLineItems", "0..*", "0..*", "ErpInvoiceLineItem", "ErpPayments"],
                            ["ErpRecLineItems", "0..*", "0..*", "ErpRecLineItem", "ErpPayments"]
                        ]
                    )
                );
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
                let bucket = cim_data.ErpProjectAccounting;
                if (null == bucket)
                   cim_data.ErpProjectAccounting = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpProjectAccounting[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpProjectAccounting";
                base.parse_attributes (/<cim:ErpProjectAccounting.Works\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Works", sub, context);
                base.parse_attributes (/<cim:ErpProjectAccounting.WorkCostDetails\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkCostDetails", sub, context);
                base.parse_attributes (/<cim:ErpProjectAccounting.ErpTimeEntries\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpTimeEntries", sub, context);
                base.parse_attributes (/<cim:ErpProjectAccounting.Projects\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Projects", sub, context);
                let bucket = context.parsed.ErpProjectAccounting;
                if (null == bucket)
                   context.parsed.ErpProjectAccounting = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpDocument.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ErpProjectAccounting", "Works", "Works", fields);
                base.export_attributes (obj, "ErpProjectAccounting", "WorkCostDetails", "WorkCostDetails", fields);
                base.export_attributes (obj, "ErpProjectAccounting", "ErpTimeEntries", "ErpTimeEntries", fields);
                base.export_attributes (obj, "ErpProjectAccounting", "Projects", "Projects", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpProjectAccounting_collapse" aria-expanded="true" aria-controls="ErpProjectAccounting_collapse" style="margin-left: 10px;">ErpProjectAccounting</a></legend>
                    <div id="ErpProjectAccounting_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.template.call (this) +
                    `
                    {{#Works}}<div><b>Works</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Works}}
                    {{#WorkCostDetails}}<div><b>WorkCostDetails</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/WorkCostDetails}}
                    {{#ErpTimeEntries}}<div><b>ErpTimeEntries</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpTimeEntries}}
                    {{#Projects}}<div><b>Projects</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Projects}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Works"]) obj["Works_string"] = obj["Works"].join ();
                if (obj["WorkCostDetails"]) obj["WorkCostDetails_string"] = obj["WorkCostDetails"].join ();
                if (obj["ErpTimeEntries"]) obj["ErpTimeEntries_string"] = obj["ErpTimeEntries"].join ();
                if (obj["Projects"]) obj["Projects_string"] = obj["Projects"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Works_string"];
                delete obj["WorkCostDetails_string"];
                delete obj["ErpTimeEntries_string"];
                delete obj["Projects_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpProjectAccounting_collapse" aria-expanded="true" aria-controls="{{id}}_ErpProjectAccounting_collapse" style="margin-left: 10px;">ErpProjectAccounting</a></legend>
                    <div id="{{id}}_ErpProjectAccounting_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "ErpProjectAccounting" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Works", "0..*", "0..1", "Work", "ErpProjectAccounting"],
                            ["WorkCostDetails", "0..*", "1", "WorkCostDetail", "ErpProjectAccounting"],
                            ["ErpTimeEntries", "0..*", "0..1", "ErpTimeEntry", "ErpProjectAccounting"],
                            ["Projects", "0..*", "1", "Project", "ErpProjectAccounting"]
                        ]
                    )
                );
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
                let bucket = cim_data.ErpQuote;
                if (null == bucket)
                   cim_data.ErpQuote = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpQuote[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpQuote";
                base.parse_attributes (/<cim:ErpQuote.ErpQuoteLineItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpQuoteLineItems", sub, context);
                let bucket = context.parsed.ErpQuote;
                if (null == bucket)
                   context.parsed.ErpQuote = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpDocument.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ErpQuote", "ErpQuoteLineItems", "ErpQuoteLineItems", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpQuote_collapse" aria-expanded="true" aria-controls="ErpQuote_collapse" style="margin-left: 10px;">ErpQuote</a></legend>
                    <div id="ErpQuote_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.template.call (this) +
                    `
                    {{#ErpQuoteLineItems}}<div><b>ErpQuoteLineItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpQuoteLineItems}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ErpQuoteLineItems"]) obj["ErpQuoteLineItems_string"] = obj["ErpQuoteLineItems"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ErpQuoteLineItems_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpQuote_collapse" aria-expanded="true" aria-controls="{{id}}_ErpQuote_collapse" style="margin-left: 10px;">ErpQuote</a></legend>
                    <div id="{{id}}_ErpQuote_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "ErpQuote" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ErpQuoteLineItems", "0..*", "1", "ErpQuoteLineItem", "ErpQuote"]
                        ]
                    )
                );
            }
        }

        /**
         * Book for recording accounting transactions as they occur.
         *
         * Transactions and adjustments are first recorded in a journal, which is like a diary of instructions, advising which account to be charged and by how much.
         * A journal represents a change in the balances of a business's financial accounts. Many tasks or transactions throughout an enterprise will result in the creation of a journal. Some examples are creating a customer invoice, paying a vendor, transferring inventory, or paying employees.
         *
         */
        class ErpJournal extends ErpDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ErpJournal;
                if (null == bucket)
                   cim_data.ErpJournal = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpJournal[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpJournal";
                base.parse_attributes (/<cim:ErpJournal.ErpJournalEntries\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpJournalEntries", sub, context);
                let bucket = context.parsed.ErpJournal;
                if (null == bucket)
                   context.parsed.ErpJournal = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpDocument.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ErpJournal", "ErpJournalEntries", "ErpJournalEntries", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpJournal_collapse" aria-expanded="true" aria-controls="ErpJournal_collapse" style="margin-left: 10px;">ErpJournal</a></legend>
                    <div id="ErpJournal_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.template.call (this) +
                    `
                    {{#ErpJournalEntries}}<div><b>ErpJournalEntries</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpJournalEntries}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ErpJournalEntries"]) obj["ErpJournalEntries_string"] = obj["ErpJournalEntries"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ErpJournalEntries_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpJournal_collapse" aria-expanded="true" aria-controls="{{id}}_ErpJournal_collapse" style="margin-left: 10px;">ErpJournal</a></legend>
                    <div id="{{id}}_ErpJournal_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "ErpJournal" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ErpJournalEntries", "0..*", "1", "ErpJournalEntry", "ErpJournal"]
                        ]
                    )
                );
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
                let bucket = cim_data.ErpInvoice;
                if (null == bucket)
                   cim_data.ErpInvoice = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpInvoice[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpInvoice";
                base.parse_attribute (/<cim:ErpInvoice.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:ErpInvoice.billMediaKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "billMediaKind", sub, context);
                base.parse_element (/<cim:ErpInvoice.referenceNumber>([\s\S]*?)<\/cim:ErpInvoice.referenceNumber>/g, obj, "referenceNumber", base.to_string, sub, context);
                base.parse_element (/<cim:ErpInvoice.amount>([\s\S]*?)<\/cim:ErpInvoice.amount>/g, obj, "amount", base.to_string, sub, context);
                base.parse_element (/<cim:ErpInvoice.dueDate>([\s\S]*?)<\/cim:ErpInvoice.dueDate>/g, obj, "dueDate", base.to_string, sub, context);
                base.parse_element (/<cim:ErpInvoice.mailedDate>([\s\S]*?)<\/cim:ErpInvoice.mailedDate>/g, obj, "mailedDate", base.to_string, sub, context);
                base.parse_element (/<cim:ErpInvoice.transferType>([\s\S]*?)<\/cim:ErpInvoice.transferType>/g, obj, "transferType", base.to_string, sub, context);
                base.parse_element (/<cim:ErpInvoice.transactionDateTime>([\s\S]*?)<\/cim:ErpInvoice.transactionDateTime>/g, obj, "transactionDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:ErpInvoice.proForma>([\s\S]*?)<\/cim:ErpInvoice.proForma>/g, obj, "proForma", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:ErpInvoice.ErpInvoiceLineItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpInvoiceLineItems", sub, context);
                base.parse_attribute (/<cim:ErpInvoice.CustomerAccount\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAccount", sub, context);
                let bucket = context.parsed.ErpInvoice;
                if (null == bucket)
                   context.parsed.ErpInvoice = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpDocument.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ErpInvoice", "kind", "kind", fields);
                base.export_attribute (obj, "ErpInvoice", "billMediaKind", "billMediaKind", fields);
                base.export_element (obj, "ErpInvoice", "referenceNumber", "referenceNumber",  base.from_string, fields);
                base.export_element (obj, "ErpInvoice", "amount", "amount",  base.from_string, fields);
                base.export_element (obj, "ErpInvoice", "dueDate", "dueDate",  base.from_string, fields);
                base.export_element (obj, "ErpInvoice", "mailedDate", "mailedDate",  base.from_string, fields);
                base.export_element (obj, "ErpInvoice", "transferType", "transferType",  base.from_string, fields);
                base.export_element (obj, "ErpInvoice", "transactionDateTime", "transactionDateTime",  base.from_datetime, fields);
                base.export_element (obj, "ErpInvoice", "proForma", "proForma",  base.from_boolean, fields);
                base.export_attributes (obj, "ErpInvoice", "ErpInvoiceLineItems", "ErpInvoiceLineItems", fields);
                base.export_attribute (obj, "ErpInvoice", "CustomerAccount", "CustomerAccount", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpInvoice_collapse" aria-expanded="true" aria-controls="ErpInvoice_collapse" style="margin-left: 10px;">ErpInvoice</a></legend>
                    <div id="ErpInvoice_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#billMediaKind}}<div><b>billMediaKind</b>: {{billMediaKind}}</div>{{/billMediaKind}}
                    {{#referenceNumber}}<div><b>referenceNumber</b>: {{referenceNumber}}</div>{{/referenceNumber}}
                    {{#amount}}<div><b>amount</b>: {{amount}}</div>{{/amount}}
                    {{#dueDate}}<div><b>dueDate</b>: {{dueDate}}</div>{{/dueDate}}
                    {{#mailedDate}}<div><b>mailedDate</b>: {{mailedDate}}</div>{{/mailedDate}}
                    {{#transferType}}<div><b>transferType</b>: {{transferType}}</div>{{/transferType}}
                    {{#transactionDateTime}}<div><b>transactionDateTime</b>: {{transactionDateTime}}</div>{{/transactionDateTime}}
                    {{#proForma}}<div><b>proForma</b>: {{proForma}}</div>{{/proForma}}
                    {{#ErpInvoiceLineItems}}<div><b>ErpInvoiceLineItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpInvoiceLineItems}}
                    {{#CustomerAccount}}<div><b>CustomerAccount</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CustomerAccount}}&quot;);}); return false;'>{{CustomerAccount}}</a></div>{{/CustomerAccount}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindErpInvoiceKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in ErpInvoiceKind) obj["kindErpInvoiceKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
                obj["billMediaKindBillMediaKind"] = [{ id: '', selected: (!obj["billMediaKind"])}]; for (let property in BillMediaKind) obj["billMediaKindBillMediaKind"].push ({ id: property, selected: obj["billMediaKind"] && obj["billMediaKind"].endsWith ('.' + property)});
                if (obj["ErpInvoiceLineItems"]) obj["ErpInvoiceLineItems_string"] = obj["ErpInvoiceLineItems"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindErpInvoiceKind"];
                delete obj["billMediaKindBillMediaKind"];
                delete obj["ErpInvoiceLineItems_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpInvoice_collapse" aria-expanded="true" aria-controls="{{id}}_ErpInvoice_collapse" style="margin-left: 10px;">ErpInvoice</a></legend>
                    <div id="{{id}}_ErpInvoice_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindErpInvoiceKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindErpInvoiceKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_billMediaKind'>billMediaKind: </label><div class='col-sm-8'><select id='{{id}}_billMediaKind' class='form-control custom-select'>{{#billMediaKindBillMediaKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/billMediaKindBillMediaKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_referenceNumber'>referenceNumber: </label><div class='col-sm-8'><input id='{{id}}_referenceNumber' class='form-control' type='text'{{#referenceNumber}} value='{{referenceNumber}}'{{/referenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_amount'>amount: </label><div class='col-sm-8'><input id='{{id}}_amount' class='form-control' type='text'{{#amount}} value='{{amount}}'{{/amount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dueDate'>dueDate: </label><div class='col-sm-8'><input id='{{id}}_dueDate' class='form-control' type='text'{{#dueDate}} value='{{dueDate}}'{{/dueDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mailedDate'>mailedDate: </label><div class='col-sm-8'><input id='{{id}}_mailedDate' class='form-control' type='text'{{#mailedDate}} value='{{mailedDate}}'{{/mailedDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_transferType'>transferType: </label><div class='col-sm-8'><input id='{{id}}_transferType' class='form-control' type='text'{{#transferType}} value='{{transferType}}'{{/transferType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_transactionDateTime'>transactionDateTime: </label><div class='col-sm-8'><input id='{{id}}_transactionDateTime' class='form-control' type='text'{{#transactionDateTime}} value='{{transactionDateTime}}'{{/transactionDateTime}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_proForma'>proForma: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_proForma' class='form-check-input' type='checkbox'{{#proForma}} checked{{/proForma}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CustomerAccount'>CustomerAccount: </label><div class='col-sm-8'><input id='{{id}}_CustomerAccount' class='form-control' type='text'{{#CustomerAccount}} value='{{CustomerAccount}}'{{/CustomerAccount}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ErpInvoice" };
                super.submit (id, obj);
                temp = ErpInvoiceKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#ErpInvoiceKind." + temp; else delete obj["kind"];
                temp = BillMediaKind[document.getElementById (id + "_billMediaKind").value]; if (temp) obj["billMediaKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#BillMediaKind." + temp; else delete obj["billMediaKind"];
                temp = document.getElementById (id + "_referenceNumber").value; if ("" !== temp) obj["referenceNumber"] = temp;
                temp = document.getElementById (id + "_amount").value; if ("" !== temp) obj["amount"] = temp;
                temp = document.getElementById (id + "_dueDate").value; if ("" !== temp) obj["dueDate"] = temp;
                temp = document.getElementById (id + "_mailedDate").value; if ("" !== temp) obj["mailedDate"] = temp;
                temp = document.getElementById (id + "_transferType").value; if ("" !== temp) obj["transferType"] = temp;
                temp = document.getElementById (id + "_transactionDateTime").value; if ("" !== temp) obj["transactionDateTime"] = temp;
                temp = document.getElementById (id + "_proForma").checked; if (temp) obj["proForma"] = true;
                temp = document.getElementById (id + "_CustomerAccount").value; if ("" !== temp) obj["CustomerAccount"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ErpInvoiceLineItems", "0..*", "1", "ErpInvoiceLineItem", "ErpInvoice"],
                            ["CustomerAccount", "0..1", "0..*", "CustomerAccount", "ErpInvoicees"]
                        ]
                    )
                );
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
                let bucket = cim_data.ErpReceivable;
                if (null == bucket)
                   cim_data.ErpReceivable = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpReceivable[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpReceivable";
                base.parse_attributes (/<cim:ErpReceivable.ErpRecLineItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpRecLineItems", sub, context);
                let bucket = context.parsed.ErpReceivable;
                if (null == bucket)
                   context.parsed.ErpReceivable = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpDocument.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ErpReceivable", "ErpRecLineItems", "ErpRecLineItems", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpReceivable_collapse" aria-expanded="true" aria-controls="ErpReceivable_collapse" style="margin-left: 10px;">ErpReceivable</a></legend>
                    <div id="ErpReceivable_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.template.call (this) +
                    `
                    {{#ErpRecLineItems}}<div><b>ErpRecLineItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpRecLineItems}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ErpRecLineItems"]) obj["ErpRecLineItems_string"] = obj["ErpRecLineItems"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ErpRecLineItems_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpReceivable_collapse" aria-expanded="true" aria-controls="{{id}}_ErpReceivable_collapse" style="margin-left: 10px;">ErpReceivable</a></legend>
                    <div id="{{id}}_ErpReceivable_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "ErpReceivable" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ErpRecLineItems", "0..*", "1", "ErpRecLineItem", "ErpReceivable"]
                        ]
                    )
                );
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
                let bucket = cim_data.ErpInvoiceLineItem;
                if (null == bucket)
                   cim_data.ErpInvoiceLineItem = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpInvoiceLineItem[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpInvoiceLineItem";
                base.parse_attribute (/<cim:ErpInvoiceLineItem.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:ErpInvoiceLineItem.lineNumber>([\s\S]*?)<\/cim:ErpInvoiceLineItem.lineNumber>/g, obj, "lineNumber", base.to_string, sub, context);
                base.parse_element (/<cim:ErpInvoiceLineItem.lineAmount>([\s\S]*?)<\/cim:ErpInvoiceLineItem.lineAmount>/g, obj, "lineAmount", base.to_float, sub, context);
                base.parse_element (/<cim:ErpInvoiceLineItem.glAccount>([\s\S]*?)<\/cim:ErpInvoiceLineItem.glAccount>/g, obj, "glAccount", base.to_string, sub, context);
                base.parse_element (/<cim:ErpInvoiceLineItem.glDateTime>([\s\S]*?)<\/cim:ErpInvoiceLineItem.glDateTime>/g, obj, "glDateTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:ErpInvoiceLineItem.billPeriod\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "billPeriod", sub, context);
                base.parse_element (/<cim:ErpInvoiceLineItem.lineVersion>([\s\S]*?)<\/cim:ErpInvoiceLineItem.lineVersion>/g, obj, "lineVersion", base.to_string, sub, context);
                base.parse_element (/<cim:ErpInvoiceLineItem.previousAmount>([\s\S]*?)<\/cim:ErpInvoiceLineItem.previousAmount>/g, obj, "previousAmount", base.to_float, sub, context);
                base.parse_element (/<cim:ErpInvoiceLineItem.netAmount>([\s\S]*?)<\/cim:ErpInvoiceLineItem.netAmount>/g, obj, "netAmount", base.to_float, sub, context);
                base.parse_attributes (/<cim:ErpInvoiceLineItem.UserAttributes\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "UserAttributes", sub, context);
                base.parse_attributes (/<cim:ErpInvoiceLineItem.ErpPayments\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpPayments", sub, context);
                base.parse_attribute (/<cim:ErpInvoiceLineItem.ErpRecLineItem\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpRecLineItem", sub, context);
                base.parse_attribute (/<cim:ErpInvoiceLineItem.ErpInvoice\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpInvoice", sub, context);
                base.parse_attributes (/<cim:ErpInvoiceLineItem.CustomerBillingInfos\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CustomerBillingInfos", sub, context);
                base.parse_attribute (/<cim:ErpInvoiceLineItem.ErpQuoteLineItem\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpQuoteLineItem", sub, context);
                base.parse_attributes (/<cim:ErpInvoiceLineItem.WorkBillingInfos\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkBillingInfos", sub, context);
                base.parse_attributes (/<cim:ErpInvoiceLineItem.ComponentErpInvoiceLineItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ComponentErpInvoiceLineItems", sub, context);
                base.parse_attribute (/<cim:ErpInvoiceLineItem.ContainerErpInvoiceLineItem\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ContainerErpInvoiceLineItem", sub, context);
                base.parse_attributes (/<cim:ErpInvoiceLineItem.ErpJournalEntries\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpJournalEntries", sub, context);
                base.parse_attribute (/<cim:ErpInvoiceLineItem.ErpRecDelvLineItem\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpRecDelvLineItem", sub, context);
                base.parse_attribute (/<cim:ErpInvoiceLineItem.ErpPayableLineItem\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpPayableLineItem", sub, context);
                let bucket = context.parsed.ErpInvoiceLineItem;
                if (null == bucket)
                   context.parsed.ErpInvoiceLineItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpDocument.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ErpInvoiceLineItem", "kind", "kind", fields);
                base.export_element (obj, "ErpInvoiceLineItem", "lineNumber", "lineNumber",  base.from_string, fields);
                base.export_element (obj, "ErpInvoiceLineItem", "lineAmount", "lineAmount",  base.from_float, fields);
                base.export_element (obj, "ErpInvoiceLineItem", "glAccount", "glAccount",  base.from_string, fields);
                base.export_element (obj, "ErpInvoiceLineItem", "glDateTime", "glDateTime",  base.from_datetime, fields);
                base.export_attribute (obj, "ErpInvoiceLineItem", "billPeriod", "billPeriod", fields);
                base.export_element (obj, "ErpInvoiceLineItem", "lineVersion", "lineVersion",  base.from_string, fields);
                base.export_element (obj, "ErpInvoiceLineItem", "previousAmount", "previousAmount",  base.from_float, fields);
                base.export_element (obj, "ErpInvoiceLineItem", "netAmount", "netAmount",  base.from_float, fields);
                base.export_attributes (obj, "ErpInvoiceLineItem", "UserAttributes", "UserAttributes", fields);
                base.export_attributes (obj, "ErpInvoiceLineItem", "ErpPayments", "ErpPayments", fields);
                base.export_attribute (obj, "ErpInvoiceLineItem", "ErpRecLineItem", "ErpRecLineItem", fields);
                base.export_attribute (obj, "ErpInvoiceLineItem", "ErpInvoice", "ErpInvoice", fields);
                base.export_attributes (obj, "ErpInvoiceLineItem", "CustomerBillingInfos", "CustomerBillingInfos", fields);
                base.export_attribute (obj, "ErpInvoiceLineItem", "ErpQuoteLineItem", "ErpQuoteLineItem", fields);
                base.export_attributes (obj, "ErpInvoiceLineItem", "WorkBillingInfos", "WorkBillingInfos", fields);
                base.export_attributes (obj, "ErpInvoiceLineItem", "ComponentErpInvoiceLineItems", "ComponentErpInvoiceLineItems", fields);
                base.export_attribute (obj, "ErpInvoiceLineItem", "ContainerErpInvoiceLineItem", "ContainerErpInvoiceLineItem", fields);
                base.export_attributes (obj, "ErpInvoiceLineItem", "ErpJournalEntries", "ErpJournalEntries", fields);
                base.export_attribute (obj, "ErpInvoiceLineItem", "ErpRecDelvLineItem", "ErpRecDelvLineItem", fields);
                base.export_attribute (obj, "ErpInvoiceLineItem", "ErpPayableLineItem", "ErpPayableLineItem", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpInvoiceLineItem_collapse" aria-expanded="true" aria-controls="ErpInvoiceLineItem_collapse" style="margin-left: 10px;">ErpInvoiceLineItem</a></legend>
                    <div id="ErpInvoiceLineItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#lineNumber}}<div><b>lineNumber</b>: {{lineNumber}}</div>{{/lineNumber}}
                    {{#lineAmount}}<div><b>lineAmount</b>: {{lineAmount}}</div>{{/lineAmount}}
                    {{#glAccount}}<div><b>glAccount</b>: {{glAccount}}</div>{{/glAccount}}
                    {{#glDateTime}}<div><b>glDateTime</b>: {{glDateTime}}</div>{{/glDateTime}}
                    {{#billPeriod}}<div><b>billPeriod</b>: {{billPeriod}}</div>{{/billPeriod}}
                    {{#lineVersion}}<div><b>lineVersion</b>: {{lineVersion}}</div>{{/lineVersion}}
                    {{#previousAmount}}<div><b>previousAmount</b>: {{previousAmount}}</div>{{/previousAmount}}
                    {{#netAmount}}<div><b>netAmount</b>: {{netAmount}}</div>{{/netAmount}}
                    {{#UserAttributes}}<div><b>UserAttributes</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/UserAttributes}}
                    {{#ErpPayments}}<div><b>ErpPayments</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpPayments}}
                    {{#ErpRecLineItem}}<div><b>ErpRecLineItem</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpRecLineItem}}&quot;);}); return false;'>{{ErpRecLineItem}}</a></div>{{/ErpRecLineItem}}
                    {{#ErpInvoice}}<div><b>ErpInvoice</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpInvoice}}&quot;);}); return false;'>{{ErpInvoice}}</a></div>{{/ErpInvoice}}
                    {{#CustomerBillingInfos}}<div><b>CustomerBillingInfos</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/CustomerBillingInfos}}
                    {{#ErpQuoteLineItem}}<div><b>ErpQuoteLineItem</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpQuoteLineItem}}&quot;);}); return false;'>{{ErpQuoteLineItem}}</a></div>{{/ErpQuoteLineItem}}
                    {{#WorkBillingInfos}}<div><b>WorkBillingInfos</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/WorkBillingInfos}}
                    {{#ComponentErpInvoiceLineItems}}<div><b>ComponentErpInvoiceLineItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ComponentErpInvoiceLineItems}}
                    {{#ContainerErpInvoiceLineItem}}<div><b>ContainerErpInvoiceLineItem</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ContainerErpInvoiceLineItem}}&quot;);}); return false;'>{{ContainerErpInvoiceLineItem}}</a></div>{{/ContainerErpInvoiceLineItem}}
                    {{#ErpJournalEntries}}<div><b>ErpJournalEntries</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpJournalEntries}}
                    {{#ErpRecDelvLineItem}}<div><b>ErpRecDelvLineItem</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpRecDelvLineItem}}&quot;);}); return false;'>{{ErpRecDelvLineItem}}</a></div>{{/ErpRecDelvLineItem}}
                    {{#ErpPayableLineItem}}<div><b>ErpPayableLineItem</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpPayableLineItem}}&quot;);}); return false;'>{{ErpPayableLineItem}}</a></div>{{/ErpPayableLineItem}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindErpInvoiceLineItemKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in ErpInvoiceLineItemKind) obj["kindErpInvoiceLineItemKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
                if (obj["UserAttributes"]) obj["UserAttributes_string"] = obj["UserAttributes"].join ();
                if (obj["ErpPayments"]) obj["ErpPayments_string"] = obj["ErpPayments"].join ();
                if (obj["CustomerBillingInfos"]) obj["CustomerBillingInfos_string"] = obj["CustomerBillingInfos"].join ();
                if (obj["WorkBillingInfos"]) obj["WorkBillingInfos_string"] = obj["WorkBillingInfos"].join ();
                if (obj["ComponentErpInvoiceLineItems"]) obj["ComponentErpInvoiceLineItems_string"] = obj["ComponentErpInvoiceLineItems"].join ();
                if (obj["ErpJournalEntries"]) obj["ErpJournalEntries_string"] = obj["ErpJournalEntries"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindErpInvoiceLineItemKind"];
                delete obj["UserAttributes_string"];
                delete obj["ErpPayments_string"];
                delete obj["CustomerBillingInfos_string"];
                delete obj["WorkBillingInfos_string"];
                delete obj["ComponentErpInvoiceLineItems_string"];
                delete obj["ErpJournalEntries_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpInvoiceLineItem_collapse" aria-expanded="true" aria-controls="{{id}}_ErpInvoiceLineItem_collapse" style="margin-left: 10px;">ErpInvoiceLineItem</a></legend>
                    <div id="{{id}}_ErpInvoiceLineItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindErpInvoiceLineItemKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindErpInvoiceLineItemKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lineNumber'>lineNumber: </label><div class='col-sm-8'><input id='{{id}}_lineNumber' class='form-control' type='text'{{#lineNumber}} value='{{lineNumber}}'{{/lineNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lineAmount'>lineAmount: </label><div class='col-sm-8'><input id='{{id}}_lineAmount' class='form-control' type='text'{{#lineAmount}} value='{{lineAmount}}'{{/lineAmount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_glAccount'>glAccount: </label><div class='col-sm-8'><input id='{{id}}_glAccount' class='form-control' type='text'{{#glAccount}} value='{{glAccount}}'{{/glAccount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_glDateTime'>glDateTime: </label><div class='col-sm-8'><input id='{{id}}_glDateTime' class='form-control' type='text'{{#glDateTime}} value='{{glDateTime}}'{{/glDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_billPeriod'>billPeriod: </label><div class='col-sm-8'><input id='{{id}}_billPeriod' class='form-control' type='text'{{#billPeriod}} value='{{billPeriod}}'{{/billPeriod}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lineVersion'>lineVersion: </label><div class='col-sm-8'><input id='{{id}}_lineVersion' class='form-control' type='text'{{#lineVersion}} value='{{lineVersion}}'{{/lineVersion}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_previousAmount'>previousAmount: </label><div class='col-sm-8'><input id='{{id}}_previousAmount' class='form-control' type='text'{{#previousAmount}} value='{{previousAmount}}'{{/previousAmount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_netAmount'>netAmount: </label><div class='col-sm-8'><input id='{{id}}_netAmount' class='form-control' type='text'{{#netAmount}} value='{{netAmount}}'{{/netAmount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_UserAttributes'>UserAttributes: </label><div class='col-sm-8'><input id='{{id}}_UserAttributes' class='form-control' type='text'{{#UserAttributes}} value='{{UserAttributes_string}}'{{/UserAttributes}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpPayments'>ErpPayments: </label><div class='col-sm-8'><input id='{{id}}_ErpPayments' class='form-control' type='text'{{#ErpPayments}} value='{{ErpPayments_string}}'{{/ErpPayments}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpRecLineItem'>ErpRecLineItem: </label><div class='col-sm-8'><input id='{{id}}_ErpRecLineItem' class='form-control' type='text'{{#ErpRecLineItem}} value='{{ErpRecLineItem}}'{{/ErpRecLineItem}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpInvoice'>ErpInvoice: </label><div class='col-sm-8'><input id='{{id}}_ErpInvoice' class='form-control' type='text'{{#ErpInvoice}} value='{{ErpInvoice}}'{{/ErpInvoice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CustomerBillingInfos'>CustomerBillingInfos: </label><div class='col-sm-8'><input id='{{id}}_CustomerBillingInfos' class='form-control' type='text'{{#CustomerBillingInfos}} value='{{CustomerBillingInfos_string}}'{{/CustomerBillingInfos}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpQuoteLineItem'>ErpQuoteLineItem: </label><div class='col-sm-8'><input id='{{id}}_ErpQuoteLineItem' class='form-control' type='text'{{#ErpQuoteLineItem}} value='{{ErpQuoteLineItem}}'{{/ErpQuoteLineItem}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WorkBillingInfos'>WorkBillingInfos: </label><div class='col-sm-8'><input id='{{id}}_WorkBillingInfos' class='form-control' type='text'{{#WorkBillingInfos}} value='{{WorkBillingInfos_string}}'{{/WorkBillingInfos}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ContainerErpInvoiceLineItem'>ContainerErpInvoiceLineItem: </label><div class='col-sm-8'><input id='{{id}}_ContainerErpInvoiceLineItem' class='form-control' type='text'{{#ContainerErpInvoiceLineItem}} value='{{ContainerErpInvoiceLineItem}}'{{/ContainerErpInvoiceLineItem}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpRecDelvLineItem'>ErpRecDelvLineItem: </label><div class='col-sm-8'><input id='{{id}}_ErpRecDelvLineItem' class='form-control' type='text'{{#ErpRecDelvLineItem}} value='{{ErpRecDelvLineItem}}'{{/ErpRecDelvLineItem}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpPayableLineItem'>ErpPayableLineItem: </label><div class='col-sm-8'><input id='{{id}}_ErpPayableLineItem' class='form-control' type='text'{{#ErpPayableLineItem}} value='{{ErpPayableLineItem}}'{{/ErpPayableLineItem}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ErpInvoiceLineItem" };
                super.submit (id, obj);
                temp = ErpInvoiceLineItemKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#ErpInvoiceLineItemKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_lineNumber").value; if ("" !== temp) obj["lineNumber"] = temp;
                temp = document.getElementById (id + "_lineAmount").value; if ("" !== temp) obj["lineAmount"] = temp;
                temp = document.getElementById (id + "_glAccount").value; if ("" !== temp) obj["glAccount"] = temp;
                temp = document.getElementById (id + "_glDateTime").value; if ("" !== temp) obj["glDateTime"] = temp;
                temp = document.getElementById (id + "_billPeriod").value; if ("" !== temp) obj["billPeriod"] = temp;
                temp = document.getElementById (id + "_lineVersion").value; if ("" !== temp) obj["lineVersion"] = temp;
                temp = document.getElementById (id + "_previousAmount").value; if ("" !== temp) obj["previousAmount"] = temp;
                temp = document.getElementById (id + "_netAmount").value; if ("" !== temp) obj["netAmount"] = temp;
                temp = document.getElementById (id + "_UserAttributes").value; if ("" !== temp) obj["UserAttributes"] = temp.split (",");
                temp = document.getElementById (id + "_ErpPayments").value; if ("" !== temp) obj["ErpPayments"] = temp.split (",");
                temp = document.getElementById (id + "_ErpRecLineItem").value; if ("" !== temp) obj["ErpRecLineItem"] = temp;
                temp = document.getElementById (id + "_ErpInvoice").value; if ("" !== temp) obj["ErpInvoice"] = temp;
                temp = document.getElementById (id + "_CustomerBillingInfos").value; if ("" !== temp) obj["CustomerBillingInfos"] = temp.split (",");
                temp = document.getElementById (id + "_ErpQuoteLineItem").value; if ("" !== temp) obj["ErpQuoteLineItem"] = temp;
                temp = document.getElementById (id + "_WorkBillingInfos").value; if ("" !== temp) obj["WorkBillingInfos"] = temp.split (",");
                temp = document.getElementById (id + "_ContainerErpInvoiceLineItem").value; if ("" !== temp) obj["ContainerErpInvoiceLineItem"] = temp;
                temp = document.getElementById (id + "_ErpRecDelvLineItem").value; if ("" !== temp) obj["ErpRecDelvLineItem"] = temp;
                temp = document.getElementById (id + "_ErpPayableLineItem").value; if ("" !== temp) obj["ErpPayableLineItem"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["UserAttributes", "0..*", "0..*", "UserAttribute", "ErpInvoiceLineItems"],
                            ["ErpPayments", "0..*", "0..*", "ErpPayment", "ErpInvoiceLineItems"],
                            ["ErpRecLineItem", "0..1", "0..1", "ErpRecLineItem", "ErpInvoiceLineItem"],
                            ["ErpInvoice", "1", "0..*", "ErpInvoice", "ErpInvoiceLineItems"],
                            ["CustomerBillingInfos", "0..*", "0..*", "CustomerBillingInfo", "ErpInvoiceLineItems"],
                            ["ErpQuoteLineItem", "0..1", "0..1", "ErpQuoteLineItem", "ErpInvoiceLineItem"],
                            ["WorkBillingInfos", "0..*", "0..*", "WorkBillingInfo", "ErpLineItems"],
                            ["ComponentErpInvoiceLineItems", "0..*", "0..1", "ErpInvoiceLineItem", "ContainerErpInvoiceLineItem"],
                            ["ContainerErpInvoiceLineItem", "0..1", "0..*", "ErpInvoiceLineItem", "ComponentErpInvoiceLineItems"],
                            ["ErpJournalEntries", "0..*", "0..1", "ErpJournalEntry", "ErpInvoiceLineItem"],
                            ["ErpRecDelvLineItem", "0..1", "0..1", "ErpRecDelvLineItem", "ErpInvoiceLineItem"],
                            ["ErpPayableLineItem", "0..1", "0..1", "ErpPayableLineItem", "ErpInvoiceLineItem"]
                        ]
                    )
                );
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
                let bucket = cim_data.ErpEngChangeOrder;
                if (null == bucket)
                   cim_data.ErpEngChangeOrder = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpEngChangeOrder[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpEngChangeOrder";
                let bucket = context.parsed.ErpEngChangeOrder;
                if (null == bucket)
                   context.parsed.ErpEngChangeOrder = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpDocument.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpEngChangeOrder_collapse" aria-expanded="true" aria-controls="ErpEngChangeOrder_collapse" style="margin-left: 10px;">ErpEngChangeOrder</a></legend>
                    <div id="ErpEngChangeOrder_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpEngChangeOrder_collapse" aria-expanded="true" aria-controls="{{id}}_ErpEngChangeOrder_collapse" style="margin-left: 10px;">ErpEngChangeOrder</a></legend>
                    <div id="{{id}}_ErpEngChangeOrder_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "ErpEngChangeOrder" };
                super.submit (id, obj);

                return (obj);
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
                let bucket = cim_data.ErpLedgerBudget;
                if (null == bucket)
                   cim_data.ErpLedgerBudget = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpLedgerBudget[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpLedgerBudget";
                base.parse_attributes (/<cim:ErpLedgerBudget.ErpLedBudLineItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpLedBudLineItems", sub, context);
                let bucket = context.parsed.ErpLedgerBudget;
                if (null == bucket)
                   context.parsed.ErpLedgerBudget = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpDocument.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ErpLedgerBudget", "ErpLedBudLineItems", "ErpLedBudLineItems", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpLedgerBudget_collapse" aria-expanded="true" aria-controls="ErpLedgerBudget_collapse" style="margin-left: 10px;">ErpLedgerBudget</a></legend>
                    <div id="ErpLedgerBudget_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.template.call (this) +
                    `
                    {{#ErpLedBudLineItems}}<div><b>ErpLedBudLineItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpLedBudLineItems}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ErpLedBudLineItems"]) obj["ErpLedBudLineItems_string"] = obj["ErpLedBudLineItems"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ErpLedBudLineItems_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpLedgerBudget_collapse" aria-expanded="true" aria-controls="{{id}}_ErpLedgerBudget_collapse" style="margin-left: 10px;">ErpLedgerBudget</a></legend>
                    <div id="{{id}}_ErpLedgerBudget_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "ErpLedgerBudget" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ErpLedBudLineItems", "0..*", "1", "ErpLedBudLineItem", "ErpLedgerBudget"]
                        ]
                    )
                );
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
                let bucket = cim_data.ErpReceiveDelivery;
                if (null == bucket)
                   cim_data.ErpReceiveDelivery = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ErpReceiveDelivery[obj.id];
            }

            parse (context, sub)
            {
                let obj = ErpDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ErpReceiveDelivery";
                base.parse_attributes (/<cim:ErpReceiveDelivery.ErpRecDelvLineItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpRecDelvLineItems", sub, context);
                let bucket = context.parsed.ErpReceiveDelivery;
                if (null == bucket)
                   context.parsed.ErpReceiveDelivery = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ErpDocument.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ErpReceiveDelivery", "ErpRecDelvLineItems", "ErpRecDelvLineItems", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ErpReceiveDelivery_collapse" aria-expanded="true" aria-controls="ErpReceiveDelivery_collapse" style="margin-left: 10px;">ErpReceiveDelivery</a></legend>
                    <div id="ErpReceiveDelivery_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.template.call (this) +
                    `
                    {{#ErpRecDelvLineItems}}<div><b>ErpRecDelvLineItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpRecDelvLineItems}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ErpRecDelvLineItems"]) obj["ErpRecDelvLineItems_string"] = obj["ErpRecDelvLineItems"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ErpRecDelvLineItems_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ErpReceiveDelivery_collapse" aria-expanded="true" aria-controls="{{id}}_ErpReceiveDelivery_collapse" style="margin-left: 10px;">ErpReceiveDelivery</a></legend>
                    <div id="{{id}}_ErpReceiveDelivery_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ErpDocument.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "ErpReceiveDelivery" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ErpRecDelvLineItems", "0..*", "1", "ErpRecDelvLineItem", "ErpReceiveDelivery"]
                        ]
                    )
                );
            }
        }

        return (
            {
                ErpPOLineItem: ErpPOLineItem,
                ErpRecLineItem: ErpRecLineItem,
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
                ErpInvoice: ErpInvoice,
                ErpInventory: ErpInventory,
                ErpDocument: ErpDocument,
                ErpInvoiceKind: ErpInvoiceKind,
                ErpLedger: ErpLedger,
                ErpLedgerEntry: ErpLedgerEntry,
                ErpIssueInventory: ErpIssueInventory,
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