define
(
    ["model/base", "model/Common", "model/Core", "model/Meas", "model/MktDomain", "model/Wires"],
    /**
     * This package contains the common objects shared by MarketOperations packages.
     *
     */
    function (base, Common, Core, Meas, MktDomain, Wires)
    {

        /**
         * Subclass of IEC61970:Topology:ConnectivityNode.
         *
         */
        class MktConnectivityNode extends Core.ConnectivityNode
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MktConnectivityNode;
                if (null == bucket)
                   cim_data.MktConnectivityNode = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MktConnectivityNode[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.ConnectivityNode.prototype.parse.call (this, context, sub);
                obj.cls = "MktConnectivityNode";
                base.parse_attributes (/<cim:MktConnectivityNode.RegisteredResource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                base.parse_attribute (/<cim:MktConnectivityNode.IndividualPnode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "IndividualPnode", sub, context);
                base.parse_attribute (/<cim:MktConnectivityNode.RTO\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);
                base.parse_attributes (/<cim:MktConnectivityNode.NodeConstraintTerm\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "NodeConstraintTerm", sub, context);
                base.parse_attribute (/<cim:MktConnectivityNode.SysLoadDistribuFactor\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SysLoadDistribuFactor", sub, context);
                base.parse_attributes (/<cim:MktConnectivityNode.LossPenaltyFactor\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LossPenaltyFactor", sub, context);
                base.parse_attributes (/<cim:MktConnectivityNode.CnodeDistributionFactor\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CnodeDistributionFactor", sub, context);
                let bucket = context.parsed.MktConnectivityNode;
                if (null == bucket)
                   context.parsed.MktConnectivityNode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.ConnectivityNode.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "MktConnectivityNode", "RegisteredResource", "RegisteredResource", fields);
                base.export_attribute (obj, "MktConnectivityNode", "IndividualPnode", "IndividualPnode", fields);
                base.export_attribute (obj, "MktConnectivityNode", "RTO", "RTO", fields);
                base.export_attributes (obj, "MktConnectivityNode", "NodeConstraintTerm", "NodeConstraintTerm", fields);
                base.export_attribute (obj, "MktConnectivityNode", "SysLoadDistribuFactor", "SysLoadDistribuFactor", fields);
                base.export_attributes (obj, "MktConnectivityNode", "LossPenaltyFactor", "LossPenaltyFactor", fields);
                base.export_attributes (obj, "MktConnectivityNode", "CnodeDistributionFactor", "CnodeDistributionFactor", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MktConnectivityNode_collapse" aria-expanded="true" aria-controls="MktConnectivityNode_collapse" style="margin-left: 10px;">MktConnectivityNode</a></legend>
                    <div id="MktConnectivityNode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConnectivityNode.prototype.template.call (this) +
                    `
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RegisteredResource}}
                    {{#IndividualPnode}}<div><b>IndividualPnode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{IndividualPnode}}");}); return false;'>{{IndividualPnode}}</a></div>{{/IndividualPnode}}
                    {{#RTO}}<div><b>RTO</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RTO}}");}); return false;'>{{RTO}}</a></div>{{/RTO}}
                    {{#NodeConstraintTerm}}<div><b>NodeConstraintTerm</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/NodeConstraintTerm}}
                    {{#SysLoadDistribuFactor}}<div><b>SysLoadDistribuFactor</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{SysLoadDistribuFactor}}");}); return false;'>{{SysLoadDistribuFactor}}</a></div>{{/SysLoadDistribuFactor}}
                    {{#LossPenaltyFactor}}<div><b>LossPenaltyFactor</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/LossPenaltyFactor}}
                    {{#CnodeDistributionFactor}}<div><b>CnodeDistributionFactor</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CnodeDistributionFactor}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["RegisteredResource"]) obj["RegisteredResource_string"] = obj["RegisteredResource"].join ();
                if (obj["NodeConstraintTerm"]) obj["NodeConstraintTerm_string"] = obj["NodeConstraintTerm"].join ();
                if (obj["LossPenaltyFactor"]) obj["LossPenaltyFactor_string"] = obj["LossPenaltyFactor"].join ();
                if (obj["CnodeDistributionFactor"]) obj["CnodeDistributionFactor_string"] = obj["CnodeDistributionFactor"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["RegisteredResource_string"];
                delete obj["NodeConstraintTerm_string"];
                delete obj["LossPenaltyFactor_string"];
                delete obj["CnodeDistributionFactor_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MktConnectivityNode_collapse" aria-expanded="true" aria-controls="{{id}}_MktConnectivityNode_collapse" style="margin-left: 10px;">MktConnectivityNode</a></legend>
                    <div id="{{id}}_MktConnectivityNode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConnectivityNode.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_IndividualPnode'>IndividualPnode: </label><div class='col-sm-8'><input id='{{id}}_IndividualPnode' class='form-control' type='text'{{#IndividualPnode}} value='{{IndividualPnode}}'{{/IndividualPnode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RTO'>RTO: </label><div class='col-sm-8'><input id='{{id}}_RTO' class='form-control' type='text'{{#RTO}} value='{{RTO}}'{{/RTO}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SysLoadDistribuFactor'>SysLoadDistribuFactor: </label><div class='col-sm-8'><input id='{{id}}_SysLoadDistribuFactor' class='form-control' type='text'{{#SysLoadDistribuFactor}} value='{{SysLoadDistribuFactor}}'{{/SysLoadDistribuFactor}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MktConnectivityNode" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_IndividualPnode").value; if ("" !== temp) obj["IndividualPnode"] = temp;
                temp = document.getElementById (id + "_RTO").value; if ("" !== temp) obj["RTO"] = temp;
                temp = document.getElementById (id + "_SysLoadDistribuFactor").value; if ("" !== temp) obj["SysLoadDistribuFactor"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegisteredResource", "0..*", "0..1", "RegisteredResource", "MktConnectivityNode"],
                            ["IndividualPnode", "0..1", "1", "IndividualPnode", "MktConnectivityNode"],
                            ["RTO", "1", "0..*", "RTO", "MktConnectivityNode"],
                            ["NodeConstraintTerm", "0..*", "1", "NodeConstraintTerm", "MktConnectivityNode"],
                            ["SysLoadDistribuFactor", "0..1", "1", "SysLoadDistributionFactor", "MktConnectivityNode"],
                            ["LossPenaltyFactor", "0..*", "1", "LossSensitivity", "MktConnectivityNode"],
                            ["CnodeDistributionFactor", "0..*", "1", "CnodeDistributionFactor", "MktConnectivityNode"]
                        ]
                    )
                );
            }
        }

        /**
         * Subclass of IEC61968:Domain2:UserAttribute.
         *
         */
        class MktUserAttribute extends Common.UserAttribute
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MktUserAttribute;
                if (null == bucket)
                   cim_data.MktUserAttribute = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MktUserAttribute[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.UserAttribute.prototype.parse.call (this, context, sub);
                obj.cls = "MktUserAttribute";
                base.parse_attributes (/<cim:MktUserAttribute.MarketStatementLineItem\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketStatementLineItem", sub, context);
                base.parse_attributes (/<cim:MktUserAttribute.ChargeGroup\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ChargeGroup", sub, context);
                base.parse_attributes (/<cim:MktUserAttribute.BillDeterminant\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BillDeterminant", sub, context);
                base.parse_attributes (/<cim:MktUserAttribute.PassThroughBill\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PassThroughBill", sub, context);
                base.parse_attributes (/<cim:MktUserAttribute.AttributeProperty\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AttributeProperty", sub, context);
                base.parse_attributes (/<cim:MktUserAttribute.ChargeType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ChargeType", sub, context);
                let bucket = context.parsed.MktUserAttribute;
                if (null == bucket)
                   context.parsed.MktUserAttribute = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.UserAttribute.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "MktUserAttribute", "MarketStatementLineItem", "MarketStatementLineItem", fields);
                base.export_attributes (obj, "MktUserAttribute", "ChargeGroup", "ChargeGroup", fields);
                base.export_attributes (obj, "MktUserAttribute", "BillDeterminant", "BillDeterminant", fields);
                base.export_attributes (obj, "MktUserAttribute", "PassThroughBill", "PassThroughBill", fields);
                base.export_attributes (obj, "MktUserAttribute", "AttributeProperty", "AttributeProperty", fields);
                base.export_attributes (obj, "MktUserAttribute", "ChargeType", "ChargeType", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MktUserAttribute_collapse" aria-expanded="true" aria-controls="MktUserAttribute_collapse" style="margin-left: 10px;">MktUserAttribute</a></legend>
                    <div id="MktUserAttribute_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.UserAttribute.prototype.template.call (this) +
                    `
                    {{#MarketStatementLineItem}}<div><b>MarketStatementLineItem</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketStatementLineItem}}
                    {{#ChargeGroup}}<div><b>ChargeGroup</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ChargeGroup}}
                    {{#BillDeterminant}}<div><b>BillDeterminant</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/BillDeterminant}}
                    {{#PassThroughBill}}<div><b>PassThroughBill</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/PassThroughBill}}
                    {{#AttributeProperty}}<div><b>AttributeProperty</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AttributeProperty}}
                    {{#ChargeType}}<div><b>ChargeType</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ChargeType}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["MarketStatementLineItem"]) obj["MarketStatementLineItem_string"] = obj["MarketStatementLineItem"].join ();
                if (obj["ChargeGroup"]) obj["ChargeGroup_string"] = obj["ChargeGroup"].join ();
                if (obj["BillDeterminant"]) obj["BillDeterminant_string"] = obj["BillDeterminant"].join ();
                if (obj["PassThroughBill"]) obj["PassThroughBill_string"] = obj["PassThroughBill"].join ();
                if (obj["AttributeProperty"]) obj["AttributeProperty_string"] = obj["AttributeProperty"].join ();
                if (obj["ChargeType"]) obj["ChargeType_string"] = obj["ChargeType"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["MarketStatementLineItem_string"];
                delete obj["ChargeGroup_string"];
                delete obj["BillDeterminant_string"];
                delete obj["PassThroughBill_string"];
                delete obj["AttributeProperty_string"];
                delete obj["ChargeType_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MktUserAttribute_collapse" aria-expanded="true" aria-controls="{{id}}_MktUserAttribute_collapse" style="margin-left: 10px;">MktUserAttribute</a></legend>
                    <div id="{{id}}_MktUserAttribute_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.UserAttribute.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketStatementLineItem'>MarketStatementLineItem: </label><div class='col-sm-8'><input id='{{id}}_MarketStatementLineItem' class='form-control' type='text'{{#MarketStatementLineItem}} value='{{MarketStatementLineItem_string}}'{{/MarketStatementLineItem}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ChargeGroup'>ChargeGroup: </label><div class='col-sm-8'><input id='{{id}}_ChargeGroup' class='form-control' type='text'{{#ChargeGroup}} value='{{ChargeGroup_string}}'{{/ChargeGroup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BillDeterminant'>BillDeterminant: </label><div class='col-sm-8'><input id='{{id}}_BillDeterminant' class='form-control' type='text'{{#BillDeterminant}} value='{{BillDeterminant_string}}'{{/BillDeterminant}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PassThroughBill'>PassThroughBill: </label><div class='col-sm-8'><input id='{{id}}_PassThroughBill' class='form-control' type='text'{{#PassThroughBill}} value='{{PassThroughBill_string}}'{{/PassThroughBill}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ChargeType'>ChargeType: </label><div class='col-sm-8'><input id='{{id}}_ChargeType' class='form-control' type='text'{{#ChargeType}} value='{{ChargeType_string}}'{{/ChargeType}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MktUserAttribute" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_MarketStatementLineItem").value; if ("" !== temp) obj["MarketStatementLineItem"] = temp.split (",");
                temp = document.getElementById (id + "_ChargeGroup").value; if ("" !== temp) obj["ChargeGroup"] = temp.split (",");
                temp = document.getElementById (id + "_BillDeterminant").value; if ("" !== temp) obj["BillDeterminant"] = temp.split (",");
                temp = document.getElementById (id + "_PassThroughBill").value; if ("" !== temp) obj["PassThroughBill"] = temp.split (",");
                temp = document.getElementById (id + "_ChargeType").value; if ("" !== temp) obj["ChargeType"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MarketStatementLineItem", "0..*", "0..*", "MarketStatementLineItem", "MktUserAttribute"],
                            ["ChargeGroup", "0..*", "0..*", "ChargeGroup", "MktUserAttribute"],
                            ["BillDeterminant", "0..*", "0..*", "BillDeterminant", "MktUserAttribute"],
                            ["PassThroughBill", "0..*", "0..*", "PassThroughBill", "MktUserAttribute"],
                            ["AttributeProperty", "0..*", "1", "AttributeProperty", "MktUserAttribute"],
                            ["ChargeType", "0..*", "0..*", "ChargeType", "MktUserAttribute"]
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
        class MarketInvoice extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MarketInvoice;
                if (null == bucket)
                   cim_data.MarketInvoice = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketInvoice[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MarketInvoice";
                base.parse_element (/<cim:MarketInvoice.amount>([\s\S]*?)<\/cim:MarketInvoice.amount>/g, obj, "amount", base.to_string, sub, context);
                base.parse_attribute (/<cim:MarketInvoice.billMediaKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "billMediaKind", sub, context);
                base.parse_element (/<cim:MarketInvoice.dueDate>([\s\S]*?)<\/cim:MarketInvoice.dueDate>/g, obj, "dueDate", base.to_string, sub, context);
                base.parse_attribute (/<cim:MarketInvoice.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:MarketInvoice.mailedDate>([\s\S]*?)<\/cim:MarketInvoice.mailedDate>/g, obj, "mailedDate", base.to_string, sub, context);
                base.parse_element (/<cim:MarketInvoice.proForma>([\s\S]*?)<\/cim:MarketInvoice.proForma>/g, obj, "proForma", base.to_boolean, sub, context);
                base.parse_element (/<cim:MarketInvoice.referenceNumber>([\s\S]*?)<\/cim:MarketInvoice.referenceNumber>/g, obj, "referenceNumber", base.to_string, sub, context);
                base.parse_element (/<cim:MarketInvoice.transactionDateTime>([\s\S]*?)<\/cim:MarketInvoice.transactionDateTime>/g, obj, "transactionDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:MarketInvoice.transferType>([\s\S]*?)<\/cim:MarketInvoice.transferType>/g, obj, "transferType", base.to_string, sub, context);
                base.parse_attributes (/<cim:MarketInvoice.MarketInvoiceLineItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketInvoiceLineItems", sub, context);
                base.parse_attributes (/<cim:MarketInvoice.MajorChargeGroup\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MajorChargeGroup", sub, context);
                let bucket = context.parsed.MarketInvoice;
                if (null == bucket)
                   context.parsed.MarketInvoice = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "MarketInvoice", "amount", "amount",  base.from_string, fields);
                base.export_attribute (obj, "MarketInvoice", "billMediaKind", "billMediaKind", fields);
                base.export_element (obj, "MarketInvoice", "dueDate", "dueDate",  base.from_string, fields);
                base.export_attribute (obj, "MarketInvoice", "kind", "kind", fields);
                base.export_element (obj, "MarketInvoice", "mailedDate", "mailedDate",  base.from_string, fields);
                base.export_element (obj, "MarketInvoice", "proForma", "proForma",  base.from_boolean, fields);
                base.export_element (obj, "MarketInvoice", "referenceNumber", "referenceNumber",  base.from_string, fields);
                base.export_element (obj, "MarketInvoice", "transactionDateTime", "transactionDateTime",  base.from_datetime, fields);
                base.export_element (obj, "MarketInvoice", "transferType", "transferType",  base.from_string, fields);
                base.export_attributes (obj, "MarketInvoice", "MarketInvoiceLineItems", "MarketInvoiceLineItems", fields);
                base.export_attributes (obj, "MarketInvoice", "MajorChargeGroup", "MajorChargeGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MarketInvoice_collapse" aria-expanded="true" aria-controls="MarketInvoice_collapse" style="margin-left: 10px;">MarketInvoice</a></legend>
                    <div id="MarketInvoice_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    {{#MarketInvoiceLineItems}}<div><b>MarketInvoiceLineItems</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketInvoiceLineItems}}
                    {{#MajorChargeGroup}}<div><b>MajorChargeGroup</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MajorChargeGroup}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["billMediaKindMktBillMediaKind"] = [{ id: '', selected: (!obj["billMediaKind"])}]; for (let property in MktDomain.MktBillMediaKind) obj["billMediaKindMktBillMediaKind"].push ({ id: property, selected: obj["billMediaKind"] && obj["billMediaKind"].endsWith ('.' + property)});
                obj["kindMktAccountKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in MktDomain.MktAccountKind) obj["kindMktAccountKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
                if (obj["MarketInvoiceLineItems"]) obj["MarketInvoiceLineItems_string"] = obj["MarketInvoiceLineItems"].join ();
                if (obj["MajorChargeGroup"]) obj["MajorChargeGroup_string"] = obj["MajorChargeGroup"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["billMediaKindMktBillMediaKind"];
                delete obj["kindMktAccountKind"];
                delete obj["MarketInvoiceLineItems_string"];
                delete obj["MajorChargeGroup_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MarketInvoice_collapse" aria-expanded="true" aria-controls="{{id}}_MarketInvoice_collapse" style="margin-left: 10px;">MarketInvoice</a></legend>
                    <div id="{{id}}_MarketInvoice_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_amount'>amount: </label><div class='col-sm-8'><input id='{{id}}_amount' class='form-control' type='text'{{#amount}} value='{{amount}}'{{/amount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_billMediaKind'>billMediaKind: </label><div class='col-sm-8'><select id='{{id}}_billMediaKind' class='form-control custom-select'>{{#billMediaKindMktBillMediaKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/billMediaKindMktBillMediaKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dueDate'>dueDate: </label><div class='col-sm-8'><input id='{{id}}_dueDate' class='form-control' type='text'{{#dueDate}} value='{{dueDate}}'{{/dueDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindMktAccountKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindMktAccountKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mailedDate'>mailedDate: </label><div class='col-sm-8'><input id='{{id}}_mailedDate' class='form-control' type='text'{{#mailedDate}} value='{{mailedDate}}'{{/mailedDate}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_proForma'>proForma: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_proForma' class='form-check-input' type='checkbox'{{#proForma}} checked{{/proForma}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_referenceNumber'>referenceNumber: </label><div class='col-sm-8'><input id='{{id}}_referenceNumber' class='form-control' type='text'{{#referenceNumber}} value='{{referenceNumber}}'{{/referenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_transactionDateTime'>transactionDateTime: </label><div class='col-sm-8'><input id='{{id}}_transactionDateTime' class='form-control' type='text'{{#transactionDateTime}} value='{{transactionDateTime}}'{{/transactionDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_transferType'>transferType: </label><div class='col-sm-8'><input id='{{id}}_transferType' class='form-control' type='text'{{#transferType}} value='{{transferType}}'{{/transferType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MajorChargeGroup'>MajorChargeGroup: </label><div class='col-sm-8'><input id='{{id}}_MajorChargeGroup' class='form-control' type='text'{{#MajorChargeGroup}} value='{{MajorChargeGroup_string}}'{{/MajorChargeGroup}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MarketInvoice" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_amount").value; if ("" !== temp) obj["amount"] = temp;
                temp = MktDomain.MktBillMediaKind[document.getElementById (id + "_billMediaKind").value]; if (temp) obj["billMediaKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#MktBillMediaKind." + temp; else delete obj["billMediaKind"];
                temp = document.getElementById (id + "_dueDate").value; if ("" !== temp) obj["dueDate"] = temp;
                temp = MktDomain.MktAccountKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#MktAccountKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_mailedDate").value; if ("" !== temp) obj["mailedDate"] = temp;
                temp = document.getElementById (id + "_proForma").checked; if (temp) obj["proForma"] = true;
                temp = document.getElementById (id + "_referenceNumber").value; if ("" !== temp) obj["referenceNumber"] = temp;
                temp = document.getElementById (id + "_transactionDateTime").value; if ("" !== temp) obj["transactionDateTime"] = temp;
                temp = document.getElementById (id + "_transferType").value; if ("" !== temp) obj["transferType"] = temp;
                temp = document.getElementById (id + "_MajorChargeGroup").value; if ("" !== temp) obj["MajorChargeGroup"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MarketInvoiceLineItems", "0..*", "1", "MarketInvoiceLineItem", "MarketInvoice"],
                            ["MajorChargeGroup", "1..*", "0..*", "MajorChargeGroup", "MarketInvoice"]
                        ]
                    )
                );
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
                let bucket = cim_data.MarketLedgerEntry;
                if (null == bucket)
                   cim_data.MarketLedgerEntry = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketLedgerEntry[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MarketLedgerEntry";
                base.parse_element (/<cim:MarketLedgerEntry.accountID>([\s\S]*?)<\/cim:MarketLedgerEntry.accountID>/g, obj, "accountID", base.to_string, sub, context);
                base.parse_attribute (/<cim:MarketLedgerEntry.accountKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "accountKind", sub, context);
                base.parse_element (/<cim:MarketLedgerEntry.amount>([\s\S]*?)<\/cim:MarketLedgerEntry.amount>/g, obj, "amount", base.to_string, sub, context);
                base.parse_element (/<cim:MarketLedgerEntry.postedDateTime>([\s\S]*?)<\/cim:MarketLedgerEntry.postedDateTime>/g, obj, "postedDateTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:MarketLedgerEntry.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_element (/<cim:MarketLedgerEntry.transactionDateTime>([\s\S]*?)<\/cim:MarketLedgerEntry.transactionDateTime>/g, obj, "transactionDateTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:MarketLedgerEntry.MarketLedger\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketLedger", sub, context);
                base.parse_attributes (/<cim:MarketLedgerEntry.Settlement\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Settlement", sub, context);
                let bucket = context.parsed.MarketLedgerEntry;
                if (null == bucket)
                   context.parsed.MarketLedgerEntry = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "MarketLedgerEntry", "accountID", "accountID",  base.from_string, fields);
                base.export_attribute (obj, "MarketLedgerEntry", "accountKind", "accountKind", fields);
                base.export_element (obj, "MarketLedgerEntry", "amount", "amount",  base.from_string, fields);
                base.export_element (obj, "MarketLedgerEntry", "postedDateTime", "postedDateTime",  base.from_datetime, fields);
                base.export_attribute (obj, "MarketLedgerEntry", "status", "status", fields);
                base.export_element (obj, "MarketLedgerEntry", "transactionDateTime", "transactionDateTime",  base.from_datetime, fields);
                base.export_attribute (obj, "MarketLedgerEntry", "MarketLedger", "MarketLedger", fields);
                base.export_attributes (obj, "MarketLedgerEntry", "Settlement", "Settlement", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MarketLedgerEntry_collapse" aria-expanded="true" aria-controls="MarketLedgerEntry_collapse" style="margin-left: 10px;">MarketLedgerEntry</a></legend>
                    <div id="MarketLedgerEntry_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#accountID}}<div><b>accountID</b>: {{accountID}}</div>{{/accountID}}
                    {{#accountKind}}<div><b>accountKind</b>: {{accountKind}}</div>{{/accountKind}}
                    {{#amount}}<div><b>amount</b>: {{amount}}</div>{{/amount}}
                    {{#postedDateTime}}<div><b>postedDateTime</b>: {{postedDateTime}}</div>{{/postedDateTime}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{status}}");}); return false;'>{{status}}</a></div>{{/status}}
                    {{#transactionDateTime}}<div><b>transactionDateTime</b>: {{transactionDateTime}}</div>{{/transactionDateTime}}
                    {{#MarketLedger}}<div><b>MarketLedger</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{MarketLedger}}");}); return false;'>{{MarketLedger}}</a></div>{{/MarketLedger}}
                    {{#Settlement}}<div><b>Settlement</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Settlement}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["accountKindMktAccountKind"] = [{ id: '', selected: (!obj["accountKind"])}]; for (let property in MktDomain.MktAccountKind) obj["accountKindMktAccountKind"].push ({ id: property, selected: obj["accountKind"] && obj["accountKind"].endsWith ('.' + property)});
                if (obj["Settlement"]) obj["Settlement_string"] = obj["Settlement"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["accountKindMktAccountKind"];
                delete obj["Settlement_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MarketLedgerEntry_collapse" aria-expanded="true" aria-controls="{{id}}_MarketLedgerEntry_collapse" style="margin-left: 10px;">MarketLedgerEntry</a></legend>
                    <div id="{{id}}_MarketLedgerEntry_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_accountID'>accountID: </label><div class='col-sm-8'><input id='{{id}}_accountID' class='form-control' type='text'{{#accountID}} value='{{accountID}}'{{/accountID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_accountKind'>accountKind: </label><div class='col-sm-8'><select id='{{id}}_accountKind' class='form-control custom-select'>{{#accountKindMktAccountKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/accountKindMktAccountKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_amount'>amount: </label><div class='col-sm-8'><input id='{{id}}_amount' class='form-control' type='text'{{#amount}} value='{{amount}}'{{/amount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_postedDateTime'>postedDateTime: </label><div class='col-sm-8'><input id='{{id}}_postedDateTime' class='form-control' type='text'{{#postedDateTime}} value='{{postedDateTime}}'{{/postedDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_transactionDateTime'>transactionDateTime: </label><div class='col-sm-8'><input id='{{id}}_transactionDateTime' class='form-control' type='text'{{#transactionDateTime}} value='{{transactionDateTime}}'{{/transactionDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketLedger'>MarketLedger: </label><div class='col-sm-8'><input id='{{id}}_MarketLedger' class='form-control' type='text'{{#MarketLedger}} value='{{MarketLedger}}'{{/MarketLedger}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Settlement'>Settlement: </label><div class='col-sm-8'><input id='{{id}}_Settlement' class='form-control' type='text'{{#Settlement}} value='{{Settlement_string}}'{{/Settlement}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MarketLedgerEntry" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_accountID").value; if ("" !== temp) obj["accountID"] = temp;
                temp = MktDomain.MktAccountKind[document.getElementById (id + "_accountKind").value]; if (temp) obj["accountKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#MktAccountKind." + temp; else delete obj["accountKind"];
                temp = document.getElementById (id + "_amount").value; if ("" !== temp) obj["amount"] = temp;
                temp = document.getElementById (id + "_postedDateTime").value; if ("" !== temp) obj["postedDateTime"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_transactionDateTime").value; if ("" !== temp) obj["transactionDateTime"] = temp;
                temp = document.getElementById (id + "_MarketLedger").value; if ("" !== temp) obj["MarketLedger"] = temp;
                temp = document.getElementById (id + "_Settlement").value; if ("" !== temp) obj["Settlement"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MarketLedger", "1", "0..*", "MarketLedger", "MarketLedgerEntries"],
                            ["Settlement", "0..*", "0..*", "Settlement", "MarketLedgerEntry"]
                        ]
                    )
                );
            }
        }

        /**
         * Subclass for IEC61970:Wires:Line.
         *
         */
        class MktLine extends Wires.Line
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MktLine;
                if (null == bucket)
                   cim_data.MktLine = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MktLine[obj.id];
            }

            parse (context, sub)
            {
                let obj = Wires.Line.prototype.parse.call (this, context, sub);
                obj.cls = "MktLine";
                base.parse_attribute (/<cim:MktLine.TransmissionRightOfWay\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionRightOfWay", sub, context);
                base.parse_attributes (/<cim:MktLine.Flowgate\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
                let bucket = context.parsed.MktLine;
                if (null == bucket)
                   context.parsed.MktLine = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Wires.Line.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MktLine", "TransmissionRightOfWay", "TransmissionRightOfWay", fields);
                base.export_attributes (obj, "MktLine", "Flowgate", "Flowgate", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MktLine_collapse" aria-expanded="true" aria-controls="MktLine_collapse" style="margin-left: 10px;">MktLine</a></legend>
                    <div id="MktLine_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Wires.Line.prototype.template.call (this) +
                    `
                    {{#TransmissionRightOfWay}}<div><b>TransmissionRightOfWay</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{TransmissionRightOfWay}}");}); return false;'>{{TransmissionRightOfWay}}</a></div>{{/TransmissionRightOfWay}}
                    {{#Flowgate}}<div><b>Flowgate</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Flowgate}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Flowgate"]) obj["Flowgate_string"] = obj["Flowgate"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Flowgate_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MktLine_collapse" aria-expanded="true" aria-controls="{{id}}_MktLine_collapse" style="margin-left: 10px;">MktLine</a></legend>
                    <div id="{{id}}_MktLine_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Wires.Line.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TransmissionRightOfWay'>TransmissionRightOfWay: </label><div class='col-sm-8'><input id='{{id}}_TransmissionRightOfWay' class='form-control' type='text'{{#TransmissionRightOfWay}} value='{{TransmissionRightOfWay}}'{{/TransmissionRightOfWay}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Flowgate'>Flowgate: </label><div class='col-sm-8'><input id='{{id}}_Flowgate' class='form-control' type='text'{{#Flowgate}} value='{{Flowgate_string}}'{{/Flowgate}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MktLine" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_TransmissionRightOfWay").value; if ("" !== temp) obj["TransmissionRightOfWay"] = temp;
                temp = document.getElementById (id + "_Flowgate").value; if ("" !== temp) obj["Flowgate"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TransmissionRightOfWay", "0..1", "0..*", "TransmissionRightOfWay", "MktLine"],
                            ["Flowgate", "0..*", "0..*", "Flowgate", "MktLine"]
                        ]
                    )
                );
            }
        }

        /**
         * Subclass of IEC61970:Meas:Measurement.
         *
         */
        class MktMeasurement extends Meas.Measurement
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MktMeasurement;
                if (null == bucket)
                   cim_data.MktMeasurement = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MktMeasurement[obj.id];
            }

            parse (context, sub)
            {
                let obj = Meas.Measurement.prototype.parse.call (this, context, sub);
                obj.cls = "MktMeasurement";
                base.parse_attribute (/<cim:MktMeasurement.ByTiePoint\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ByTiePoint", sub, context);
                base.parse_attributes (/<cim:MktMeasurement.ViolationLimit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ViolationLimit", sub, context);
                base.parse_attributes (/<cim:MktMeasurement.DynamicSchedule\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DynamicSchedule", sub, context);
                base.parse_attribute (/<cim:MktMeasurement.ForTiePoint\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ForTiePoint", sub, context);
                base.parse_attribute (/<cim:MktMeasurement.Pnode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Pnode", sub, context);
                let bucket = context.parsed.MktMeasurement;
                if (null == bucket)
                   context.parsed.MktMeasurement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Meas.Measurement.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MktMeasurement", "ByTiePoint", "ByTiePoint", fields);
                base.export_attributes (obj, "MktMeasurement", "ViolationLimit", "ViolationLimit", fields);
                base.export_attributes (obj, "MktMeasurement", "DynamicSchedule", "DynamicSchedule", fields);
                base.export_attribute (obj, "MktMeasurement", "ForTiePoint", "ForTiePoint", fields);
                base.export_attribute (obj, "MktMeasurement", "Pnode", "Pnode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MktMeasurement_collapse" aria-expanded="true" aria-controls="MktMeasurement_collapse" style="margin-left: 10px;">MktMeasurement</a></legend>
                    <div id="MktMeasurement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Meas.Measurement.prototype.template.call (this) +
                    `
                    {{#ByTiePoint}}<div><b>ByTiePoint</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ByTiePoint}}");}); return false;'>{{ByTiePoint}}</a></div>{{/ByTiePoint}}
                    {{#ViolationLimit}}<div><b>ViolationLimit</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ViolationLimit}}
                    {{#DynamicSchedule}}<div><b>DynamicSchedule</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/DynamicSchedule}}
                    {{#ForTiePoint}}<div><b>ForTiePoint</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ForTiePoint}}");}); return false;'>{{ForTiePoint}}</a></div>{{/ForTiePoint}}
                    {{#Pnode}}<div><b>Pnode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Pnode}}");}); return false;'>{{Pnode}}</a></div>{{/Pnode}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ViolationLimit"]) obj["ViolationLimit_string"] = obj["ViolationLimit"].join ();
                if (obj["DynamicSchedule"]) obj["DynamicSchedule_string"] = obj["DynamicSchedule"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ViolationLimit_string"];
                delete obj["DynamicSchedule_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MktMeasurement_collapse" aria-expanded="true" aria-controls="{{id}}_MktMeasurement_collapse" style="margin-left: 10px;">MktMeasurement</a></legend>
                    <div id="{{id}}_MktMeasurement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Meas.Measurement.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ByTiePoint'>ByTiePoint: </label><div class='col-sm-8'><input id='{{id}}_ByTiePoint' class='form-control' type='text'{{#ByTiePoint}} value='{{ByTiePoint}}'{{/ByTiePoint}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ForTiePoint'>ForTiePoint: </label><div class='col-sm-8'><input id='{{id}}_ForTiePoint' class='form-control' type='text'{{#ForTiePoint}} value='{{ForTiePoint}}'{{/ForTiePoint}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Pnode'>Pnode: </label><div class='col-sm-8'><input id='{{id}}_Pnode' class='form-control' type='text'{{#Pnode}} value='{{Pnode}}'{{/Pnode}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MktMeasurement" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ByTiePoint").value; if ("" !== temp) obj["ByTiePoint"] = temp;
                temp = document.getElementById (id + "_ForTiePoint").value; if ("" !== temp) obj["ForTiePoint"] = temp;
                temp = document.getElementById (id + "_Pnode").value; if ("" !== temp) obj["Pnode"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ByTiePoint", "1", "1..*", "TiePoint", "ByMktMeasurement"],
                            ["ViolationLimit", "0..*", "0..1", "ViolationLimit", "MktMeasurement"],
                            ["DynamicSchedule", "0..*", "1", "DynamicSchedule", "MktMeasurement"],
                            ["ForTiePoint", "1", "1..*", "TiePoint", "ForMktMeasurement"],
                            ["Pnode", "0..1", "0..*", "Pnode", "MktMeasurement"]
                        ]
                    )
                );
            }
        }

        /**
         * In accounting transactions, a ledger is a book containing accounts to which debits and credits are posted from journals, where transactions are initially recorded.
         *
         * Journal entries are periodically posted to the ledger. Ledger actual represents actual amounts by account within ledger within company or within business area. Actual amounts may be generated in a source application and then loaded to a specific ledger within the enterprise general ledger or budget application.
         *
         */
        class MarketLedger extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MarketLedger;
                if (null == bucket)
                   cim_data.MarketLedger = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketLedger[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MarketLedger";
                base.parse_attributes (/<cim:MarketLedger.MarketLedgerEntries\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketLedgerEntries", sub, context);
                let bucket = context.parsed.MarketLedger;
                if (null == bucket)
                   context.parsed.MarketLedger = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attributes (obj, "MarketLedger", "MarketLedgerEntries", "MarketLedgerEntries", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MarketLedger_collapse" aria-expanded="true" aria-controls="MarketLedger_collapse" style="margin-left: 10px;">MarketLedger</a></legend>
                    <div id="MarketLedger_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#MarketLedgerEntries}}<div><b>MarketLedgerEntries</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketLedgerEntries}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["MarketLedgerEntries"]) obj["MarketLedgerEntries_string"] = obj["MarketLedgerEntries"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["MarketLedgerEntries_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MarketLedger_collapse" aria-expanded="true" aria-controls="{{id}}_MarketLedger_collapse" style="margin-left: 10px;">MarketLedger</a></legend>
                    <div id="{{id}}_MarketLedger_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "MarketLedger" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MarketLedgerEntries", "0..*", "1", "MarketLedgerEntry", "MarketLedger"]
                        ]
                    )
                );
            }
        }

        /**
         * Subclass of IEC61968: Common:ActivityRecord.
         *
         */
        class MktActivityRecord extends Common.ActivityRecord
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MktActivityRecord;
                if (null == bucket)
                   cim_data.MktActivityRecord = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MktActivityRecord[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.ActivityRecord.prototype.parse.call (this, context, sub);
                obj.cls = "MktActivityRecord";
                base.parse_attributes (/<cim:MktActivityRecord.MarketFactors\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketFactors", sub, context);
                let bucket = context.parsed.MktActivityRecord;
                if (null == bucket)
                   context.parsed.MktActivityRecord = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.ActivityRecord.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "MktActivityRecord", "MarketFactors", "MarketFactors", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MktActivityRecord_collapse" aria-expanded="true" aria-controls="MktActivityRecord_collapse" style="margin-left: 10px;">MktActivityRecord</a></legend>
                    <div id="MktActivityRecord_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.ActivityRecord.prototype.template.call (this) +
                    `
                    {{#MarketFactors}}<div><b>MarketFactors</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketFactors}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["MarketFactors"]) obj["MarketFactors_string"] = obj["MarketFactors"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["MarketFactors_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MktActivityRecord_collapse" aria-expanded="true" aria-controls="{{id}}_MktActivityRecord_collapse" style="margin-left: 10px;">MktActivityRecord</a></legend>
                    <div id="{{id}}_MktActivityRecord_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.ActivityRecord.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketFactors'>MarketFactors: </label><div class='col-sm-8'><input id='{{id}}_MarketFactors' class='form-control' type='text'{{#MarketFactors}} value='{{MarketFactors_string}}'{{/MarketFactors}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MktActivityRecord" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_MarketFactors").value; if ("" !== temp) obj["MarketFactors"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MarketFactors", "0..*", "0..*", "MarketFactors", "MktActivityRecord"]
                        ]
                    )
                );
            }
        }

        /**
         * Subclass of IEC61970:Core:Terminal.
         *
         */
        class MktTerminal extends Core.Terminal
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MktTerminal;
                if (null == bucket)
                   cim_data.MktTerminal = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MktTerminal[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Terminal.prototype.parse.call (this, context, sub);
                obj.cls = "MktTerminal";
                base.parse_attribute (/<cim:MktTerminal.Flowgate\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
                base.parse_attributes (/<cim:MktTerminal.TerminalConstraintTerm\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TerminalConstraintTerm", sub, context);
                let bucket = context.parsed.MktTerminal;
                if (null == bucket)
                   context.parsed.MktTerminal = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Terminal.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MktTerminal", "Flowgate", "Flowgate", fields);
                base.export_attributes (obj, "MktTerminal", "TerminalConstraintTerm", "TerminalConstraintTerm", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MktTerminal_collapse" aria-expanded="true" aria-controls="MktTerminal_collapse" style="margin-left: 10px;">MktTerminal</a></legend>
                    <div id="MktTerminal_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Terminal.prototype.template.call (this) +
                    `
                    {{#Flowgate}}<div><b>Flowgate</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Flowgate}}");}); return false;'>{{Flowgate}}</a></div>{{/Flowgate}}
                    {{#TerminalConstraintTerm}}<div><b>TerminalConstraintTerm</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TerminalConstraintTerm}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["TerminalConstraintTerm"]) obj["TerminalConstraintTerm_string"] = obj["TerminalConstraintTerm"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["TerminalConstraintTerm_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MktTerminal_collapse" aria-expanded="true" aria-controls="{{id}}_MktTerminal_collapse" style="margin-left: 10px;">MktTerminal</a></legend>
                    <div id="{{id}}_MktTerminal_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Terminal.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Flowgate'>Flowgate: </label><div class='col-sm-8'><input id='{{id}}_Flowgate' class='form-control' type='text'{{#Flowgate}} value='{{Flowgate}}'{{/Flowgate}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MktTerminal" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Flowgate").value; if ("" !== temp) obj["Flowgate"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Flowgate", "0..1", "0..*", "Flowgate", "MktTerminal"],
                            ["TerminalConstraintTerm", "0..*", "1", "TerminalConstraintTerm", "MktTerminal"]
                        ]
                    )
                );
            }
        }

        /**
         * Subclass of IEC61970:Wires:PowerTransformer.
         *
         */
        class MktPowerTransformer extends Wires.PowerTransformer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MktPowerTransformer;
                if (null == bucket)
                   cim_data.MktPowerTransformer = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MktPowerTransformer[obj.id];
            }

            parse (context, sub)
            {
                let obj = Wires.PowerTransformer.prototype.parse.call (this, context, sub);
                obj.cls = "MktPowerTransformer";
                base.parse_attribute (/<cim:MktPowerTransformer.EndBFlow\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EndBFlow", sub, context);
                base.parse_attributes (/<cim:MktPowerTransformer.Flowgate\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
                base.parse_attribute (/<cim:MktPowerTransformer.EndAFlow\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EndAFlow", sub, context);
                let bucket = context.parsed.MktPowerTransformer;
                if (null == bucket)
                   context.parsed.MktPowerTransformer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Wires.PowerTransformer.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MktPowerTransformer", "EndBFlow", "EndBFlow", fields);
                base.export_attributes (obj, "MktPowerTransformer", "Flowgate", "Flowgate", fields);
                base.export_attribute (obj, "MktPowerTransformer", "EndAFlow", "EndAFlow", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MktPowerTransformer_collapse" aria-expanded="true" aria-controls="MktPowerTransformer_collapse" style="margin-left: 10px;">MktPowerTransformer</a></legend>
                    <div id="MktPowerTransformer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Wires.PowerTransformer.prototype.template.call (this) +
                    `
                    {{#EndBFlow}}<div><b>EndBFlow</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{EndBFlow}}");}); return false;'>{{EndBFlow}}</a></div>{{/EndBFlow}}
                    {{#Flowgate}}<div><b>Flowgate</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Flowgate}}
                    {{#EndAFlow}}<div><b>EndAFlow</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{EndAFlow}}");}); return false;'>{{EndAFlow}}</a></div>{{/EndAFlow}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Flowgate"]) obj["Flowgate_string"] = obj["Flowgate"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Flowgate_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MktPowerTransformer_collapse" aria-expanded="true" aria-controls="{{id}}_MktPowerTransformer_collapse" style="margin-left: 10px;">MktPowerTransformer</a></legend>
                    <div id="{{id}}_MktPowerTransformer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Wires.PowerTransformer.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EndBFlow'>EndBFlow: </label><div class='col-sm-8'><input id='{{id}}_EndBFlow' class='form-control' type='text'{{#EndBFlow}} value='{{EndBFlow}}'{{/EndBFlow}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Flowgate'>Flowgate: </label><div class='col-sm-8'><input id='{{id}}_Flowgate' class='form-control' type='text'{{#Flowgate}} value='{{Flowgate_string}}'{{/Flowgate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EndAFlow'>EndAFlow: </label><div class='col-sm-8'><input id='{{id}}_EndAFlow' class='form-control' type='text'{{#EndAFlow}} value='{{EndAFlow}}'{{/EndAFlow}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MktPowerTransformer" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_EndBFlow").value; if ("" !== temp) obj["EndBFlow"] = temp;
                temp = document.getElementById (id + "_Flowgate").value; if ("" !== temp) obj["Flowgate"] = temp.split (",");
                temp = document.getElementById (id + "_EndAFlow").value; if ("" !== temp) obj["EndAFlow"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EndBFlow", "0..1", "0..*", "BranchEndFlow", "MktPowerTransformerEndBFlow"],
                            ["Flowgate", "0..*", "0..*", "Flowgate", "MktPowerTransformer"],
                            ["EndAFlow", "0..1", "0..*", "BranchEndFlow", "MktPowerTransformerEndAFlow"]
                        ]
                    )
                );
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
                let bucket = cim_data.MarketInvoiceLineItem;
                if (null == bucket)
                   cim_data.MarketInvoiceLineItem = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketInvoiceLineItem[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MarketInvoiceLineItem";
                base.parse_attribute (/<cim:MarketInvoiceLineItem.billPeriod\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "billPeriod", sub, context);
                base.parse_element (/<cim:MarketInvoiceLineItem.glAccount>([\s\S]*?)<\/cim:MarketInvoiceLineItem.glAccount>/g, obj, "glAccount", base.to_string, sub, context);
                base.parse_element (/<cim:MarketInvoiceLineItem.glDateTime>([\s\S]*?)<\/cim:MarketInvoiceLineItem.glDateTime>/g, obj, "glDateTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:MarketInvoiceLineItem.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:MarketInvoiceLineItem.lineAmount>([\s\S]*?)<\/cim:MarketInvoiceLineItem.lineAmount>/g, obj, "lineAmount", base.to_float, sub, context);
                base.parse_element (/<cim:MarketInvoiceLineItem.lineNumber>([\s\S]*?)<\/cim:MarketInvoiceLineItem.lineNumber>/g, obj, "lineNumber", base.to_string, sub, context);
                base.parse_element (/<cim:MarketInvoiceLineItem.lineVersion>([\s\S]*?)<\/cim:MarketInvoiceLineItem.lineVersion>/g, obj, "lineVersion", base.to_string, sub, context);
                base.parse_element (/<cim:MarketInvoiceLineItem.netAmount>([\s\S]*?)<\/cim:MarketInvoiceLineItem.netAmount>/g, obj, "netAmount", base.to_float, sub, context);
                base.parse_element (/<cim:MarketInvoiceLineItem.previousAmount>([\s\S]*?)<\/cim:MarketInvoiceLineItem.previousAmount>/g, obj, "previousAmount", base.to_float, sub, context);
                base.parse_attribute (/<cim:MarketInvoiceLineItem.MarketInvoice\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketInvoice", sub, context);
                base.parse_attributes (/<cim:MarketInvoiceLineItem.ComponentMarketInvoiceLineItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ComponentMarketInvoiceLineItems", sub, context);
                base.parse_attribute (/<cim:MarketInvoiceLineItem.ContainerMarketInvoiceLineItem\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ContainerMarketInvoiceLineItem", sub, context);
                base.parse_attributes (/<cim:MarketInvoiceLineItem.Settlement\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Settlement", sub, context);
                let bucket = context.parsed.MarketInvoiceLineItem;
                if (null == bucket)
                   context.parsed.MarketInvoiceLineItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "MarketInvoiceLineItem", "billPeriod", "billPeriod", fields);
                base.export_element (obj, "MarketInvoiceLineItem", "glAccount", "glAccount",  base.from_string, fields);
                base.export_element (obj, "MarketInvoiceLineItem", "glDateTime", "glDateTime",  base.from_datetime, fields);
                base.export_attribute (obj, "MarketInvoiceLineItem", "kind", "kind", fields);
                base.export_element (obj, "MarketInvoiceLineItem", "lineAmount", "lineAmount",  base.from_float, fields);
                base.export_element (obj, "MarketInvoiceLineItem", "lineNumber", "lineNumber",  base.from_string, fields);
                base.export_element (obj, "MarketInvoiceLineItem", "lineVersion", "lineVersion",  base.from_string, fields);
                base.export_element (obj, "MarketInvoiceLineItem", "netAmount", "netAmount",  base.from_float, fields);
                base.export_element (obj, "MarketInvoiceLineItem", "previousAmount", "previousAmount",  base.from_float, fields);
                base.export_attribute (obj, "MarketInvoiceLineItem", "MarketInvoice", "MarketInvoice", fields);
                base.export_attributes (obj, "MarketInvoiceLineItem", "ComponentMarketInvoiceLineItems", "ComponentMarketInvoiceLineItems", fields);
                base.export_attribute (obj, "MarketInvoiceLineItem", "ContainerMarketInvoiceLineItem", "ContainerMarketInvoiceLineItem", fields);
                base.export_attributes (obj, "MarketInvoiceLineItem", "Settlement", "Settlement", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MarketInvoiceLineItem_collapse" aria-expanded="true" aria-controls="MarketInvoiceLineItem_collapse" style="margin-left: 10px;">MarketInvoiceLineItem</a></legend>
                    <div id="MarketInvoiceLineItem_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    {{#MarketInvoice}}<div><b>MarketInvoice</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{MarketInvoice}}");}); return false;'>{{MarketInvoice}}</a></div>{{/MarketInvoice}}
                    {{#ComponentMarketInvoiceLineItems}}<div><b>ComponentMarketInvoiceLineItems</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ComponentMarketInvoiceLineItems}}
                    {{#ContainerMarketInvoiceLineItem}}<div><b>ContainerMarketInvoiceLineItem</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ContainerMarketInvoiceLineItem}}");}); return false;'>{{ContainerMarketInvoiceLineItem}}</a></div>{{/ContainerMarketInvoiceLineItem}}
                    {{#Settlement}}<div><b>Settlement</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Settlement}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindMktInvoiceLineItemKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in MktDomain.MktInvoiceLineItemKind) obj["kindMktInvoiceLineItemKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
                if (obj["ComponentMarketInvoiceLineItems"]) obj["ComponentMarketInvoiceLineItems_string"] = obj["ComponentMarketInvoiceLineItems"].join ();
                if (obj["Settlement"]) obj["Settlement_string"] = obj["Settlement"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindMktInvoiceLineItemKind"];
                delete obj["ComponentMarketInvoiceLineItems_string"];
                delete obj["Settlement_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MarketInvoiceLineItem_collapse" aria-expanded="true" aria-controls="{{id}}_MarketInvoiceLineItem_collapse" style="margin-left: 10px;">MarketInvoiceLineItem</a></legend>
                    <div id="{{id}}_MarketInvoiceLineItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_billPeriod'>billPeriod: </label><div class='col-sm-8'><input id='{{id}}_billPeriod' class='form-control' type='text'{{#billPeriod}} value='{{billPeriod}}'{{/billPeriod}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_glAccount'>glAccount: </label><div class='col-sm-8'><input id='{{id}}_glAccount' class='form-control' type='text'{{#glAccount}} value='{{glAccount}}'{{/glAccount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_glDateTime'>glDateTime: </label><div class='col-sm-8'><input id='{{id}}_glDateTime' class='form-control' type='text'{{#glDateTime}} value='{{glDateTime}}'{{/glDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindMktInvoiceLineItemKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindMktInvoiceLineItemKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lineAmount'>lineAmount: </label><div class='col-sm-8'><input id='{{id}}_lineAmount' class='form-control' type='text'{{#lineAmount}} value='{{lineAmount}}'{{/lineAmount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lineNumber'>lineNumber: </label><div class='col-sm-8'><input id='{{id}}_lineNumber' class='form-control' type='text'{{#lineNumber}} value='{{lineNumber}}'{{/lineNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lineVersion'>lineVersion: </label><div class='col-sm-8'><input id='{{id}}_lineVersion' class='form-control' type='text'{{#lineVersion}} value='{{lineVersion}}'{{/lineVersion}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_netAmount'>netAmount: </label><div class='col-sm-8'><input id='{{id}}_netAmount' class='form-control' type='text'{{#netAmount}} value='{{netAmount}}'{{/netAmount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_previousAmount'>previousAmount: </label><div class='col-sm-8'><input id='{{id}}_previousAmount' class='form-control' type='text'{{#previousAmount}} value='{{previousAmount}}'{{/previousAmount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketInvoice'>MarketInvoice: </label><div class='col-sm-8'><input id='{{id}}_MarketInvoice' class='form-control' type='text'{{#MarketInvoice}} value='{{MarketInvoice}}'{{/MarketInvoice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ContainerMarketInvoiceLineItem'>ContainerMarketInvoiceLineItem: </label><div class='col-sm-8'><input id='{{id}}_ContainerMarketInvoiceLineItem' class='form-control' type='text'{{#ContainerMarketInvoiceLineItem}} value='{{ContainerMarketInvoiceLineItem}}'{{/ContainerMarketInvoiceLineItem}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Settlement'>Settlement: </label><div class='col-sm-8'><input id='{{id}}_Settlement' class='form-control' type='text'{{#Settlement}} value='{{Settlement_string}}'{{/Settlement}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MarketInvoiceLineItem" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_billPeriod").value; if ("" !== temp) obj["billPeriod"] = temp;
                temp = document.getElementById (id + "_glAccount").value; if ("" !== temp) obj["glAccount"] = temp;
                temp = document.getElementById (id + "_glDateTime").value; if ("" !== temp) obj["glDateTime"] = temp;
                temp = MktDomain.MktInvoiceLineItemKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#MktInvoiceLineItemKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_lineAmount").value; if ("" !== temp) obj["lineAmount"] = temp;
                temp = document.getElementById (id + "_lineNumber").value; if ("" !== temp) obj["lineNumber"] = temp;
                temp = document.getElementById (id + "_lineVersion").value; if ("" !== temp) obj["lineVersion"] = temp;
                temp = document.getElementById (id + "_netAmount").value; if ("" !== temp) obj["netAmount"] = temp;
                temp = document.getElementById (id + "_previousAmount").value; if ("" !== temp) obj["previousAmount"] = temp;
                temp = document.getElementById (id + "_MarketInvoice").value; if ("" !== temp) obj["MarketInvoice"] = temp;
                temp = document.getElementById (id + "_ContainerMarketInvoiceLineItem").value; if ("" !== temp) obj["ContainerMarketInvoiceLineItem"] = temp;
                temp = document.getElementById (id + "_Settlement").value; if ("" !== temp) obj["Settlement"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MarketInvoice", "1", "0..*", "MarketInvoice", "MarketInvoiceLineItems"],
                            ["ComponentMarketInvoiceLineItems", "0..*", "0..1", "MarketInvoiceLineItem", "ContainerMarketInvoiceLineItem"],
                            ["ContainerMarketInvoiceLineItem", "0..1", "0..*", "MarketInvoiceLineItem", "ComponentMarketInvoiceLineItems"],
                            ["Settlement", "0..*", "0..*", "Settlement", "MarketInvoiceLineItem"]
                        ]
                    )
                );
            }
        }

        return (
            {
                MarketInvoiceLineItem: MarketInvoiceLineItem,
                MarketInvoice: MarketInvoice,
                MktPowerTransformer: MktPowerTransformer,
                MktLine: MktLine,
                MarketLedger: MarketLedger,
                MktConnectivityNode: MktConnectivityNode,
                MarketLedgerEntry: MarketLedgerEntry,
                MktMeasurement: MktMeasurement,
                MktUserAttribute: MktUserAttribute,
                MktTerminal: MktTerminal,
                MktActivityRecord: MktActivityRecord
            }
        );
    }
);