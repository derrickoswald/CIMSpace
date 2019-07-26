define
(
    ["model/base", "model/Core", "model/MktDomain"],
    function (base, Core, MktDomain)
    {

        /**
         * This class represent the resource certification for a specific product type.
         *
         * For example, a resource is certified for Non-Spinning reserve for RTM.
         *
         */
        class ResourceCertification2 extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ResourceCertification2;
                if (null == bucket)
                   cim_data.ResourceCertification2 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ResourceCertification2[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ResourceCertification2";
                base.parse_attribute (/<cim:ResourceCertification2.certifiedDAM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "certifiedDAM", sub, context);
                base.parse_attribute (/<cim:ResourceCertification2.certifiedNonspinDAM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "certifiedNonspinDAM", sub, context);
                base.parse_element (/<cim:ResourceCertification2.certifiedNonspinDAMMw>([\s\S]*?)<\/cim:ResourceCertification2.certifiedNonspinDAMMw>/g, obj, "certifiedNonspinDAMMw", base.to_float, sub, context);
                base.parse_attribute (/<cim:ResourceCertification2.certifiedNonspinRTM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "certifiedNonspinRTM", sub, context);
                base.parse_element (/<cim:ResourceCertification2.certifiedNonspinRTMMw>([\s\S]*?)<\/cim:ResourceCertification2.certifiedNonspinRTMMw>/g, obj, "certifiedNonspinRTMMw", base.to_float, sub, context);
                base.parse_attribute (/<cim:ResourceCertification2.certifiedPIRP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "certifiedPIRP", sub, context);
                base.parse_attribute (/<cim:ResourceCertification2.certifiedRegulation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "certifiedRegulation", sub, context);
                base.parse_element (/<cim:ResourceCertification2.certifiedRegulationMw>([\s\S]*?)<\/cim:ResourceCertification2.certifiedRegulationMw>/g, obj, "certifiedRegulationMw", base.to_float, sub, context);
                base.parse_attribute (/<cim:ResourceCertification2.certifiedReplaceAS\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "certifiedReplaceAS", sub, context);
                base.parse_attribute (/<cim:ResourceCertification2.certifiedSpin\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "certifiedSpin", sub, context);
                base.parse_element (/<cim:ResourceCertification2.certifiedSpinMw>([\s\S]*?)<\/cim:ResourceCertification2.certifiedSpinMw>/g, obj, "certifiedSpinMw", base.to_float, sub, context);
                base.parse_attribute (/<cim:ResourceCertification2.certifiedRTM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "certifiedRTM", sub, context);
                base.parse_attribute (/<cim:ResourceCertification2.certifiedRUC\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "certifiedRUC", sub, context);
                base.parse_attributes (/<cim:ResourceCertification2.RegisteredResource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                let bucket = context.parsed.ResourceCertification2;
                if (null == bucket)
                   context.parsed.ResourceCertification2 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "ResourceCertification2", "certifiedDAM", "certifiedDAM", fields);
                base.export_attribute (obj, "ResourceCertification2", "certifiedNonspinDAM", "certifiedNonspinDAM", fields);
                base.export_element (obj, "ResourceCertification2", "certifiedNonspinDAMMw", "certifiedNonspinDAMMw",  base.from_float, fields);
                base.export_attribute (obj, "ResourceCertification2", "certifiedNonspinRTM", "certifiedNonspinRTM", fields);
                base.export_element (obj, "ResourceCertification2", "certifiedNonspinRTMMw", "certifiedNonspinRTMMw",  base.from_float, fields);
                base.export_attribute (obj, "ResourceCertification2", "certifiedPIRP", "certifiedPIRP", fields);
                base.export_attribute (obj, "ResourceCertification2", "certifiedRegulation", "certifiedRegulation", fields);
                base.export_element (obj, "ResourceCertification2", "certifiedRegulationMw", "certifiedRegulationMw",  base.from_float, fields);
                base.export_attribute (obj, "ResourceCertification2", "certifiedReplaceAS", "certifiedReplaceAS", fields);
                base.export_attribute (obj, "ResourceCertification2", "certifiedSpin", "certifiedSpin", fields);
                base.export_element (obj, "ResourceCertification2", "certifiedSpinMw", "certifiedSpinMw",  base.from_float, fields);
                base.export_attribute (obj, "ResourceCertification2", "certifiedRTM", "certifiedRTM", fields);
                base.export_attribute (obj, "ResourceCertification2", "certifiedRUC", "certifiedRUC", fields);
                base.export_attributes (obj, "ResourceCertification2", "RegisteredResource", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ResourceCertification2_collapse" aria-expanded="true" aria-controls="ResourceCertification2_collapse" style="margin-left: 10px;">ResourceCertification2</a></legend>
                    <div id="ResourceCertification2_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#certifiedDAM}}<div><b>certifiedDAM</b>: {{certifiedDAM}}</div>{{/certifiedDAM}}
                    {{#certifiedNonspinDAM}}<div><b>certifiedNonspinDAM</b>: {{certifiedNonspinDAM}}</div>{{/certifiedNonspinDAM}}
                    {{#certifiedNonspinDAMMw}}<div><b>certifiedNonspinDAMMw</b>: {{certifiedNonspinDAMMw}}</div>{{/certifiedNonspinDAMMw}}
                    {{#certifiedNonspinRTM}}<div><b>certifiedNonspinRTM</b>: {{certifiedNonspinRTM}}</div>{{/certifiedNonspinRTM}}
                    {{#certifiedNonspinRTMMw}}<div><b>certifiedNonspinRTMMw</b>: {{certifiedNonspinRTMMw}}</div>{{/certifiedNonspinRTMMw}}
                    {{#certifiedPIRP}}<div><b>certifiedPIRP</b>: {{certifiedPIRP}}</div>{{/certifiedPIRP}}
                    {{#certifiedRegulation}}<div><b>certifiedRegulation</b>: {{certifiedRegulation}}</div>{{/certifiedRegulation}}
                    {{#certifiedRegulationMw}}<div><b>certifiedRegulationMw</b>: {{certifiedRegulationMw}}</div>{{/certifiedRegulationMw}}
                    {{#certifiedReplaceAS}}<div><b>certifiedReplaceAS</b>: {{certifiedReplaceAS}}</div>{{/certifiedReplaceAS}}
                    {{#certifiedSpin}}<div><b>certifiedSpin</b>: {{certifiedSpin}}</div>{{/certifiedSpin}}
                    {{#certifiedSpinMw}}<div><b>certifiedSpinMw</b>: {{certifiedSpinMw}}</div>{{/certifiedSpinMw}}
                    {{#certifiedRTM}}<div><b>certifiedRTM</b>: {{certifiedRTM}}</div>{{/certifiedRTM}}
                    {{#certifiedRUC}}<div><b>certifiedRUC</b>: {{certifiedRUC}}</div>{{/certifiedRUC}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/RegisteredResource}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["certifiedDAMYesNo"] = [{ id: '', selected: (!obj["certifiedDAM"])}]; for (let property in MktDomain.YesNo) obj["certifiedDAMYesNo"].push ({ id: property, selected: obj["certifiedDAM"] && obj["certifiedDAM"].endsWith ('.' + property)});
                obj["certifiedNonspinDAMYesNo"] = [{ id: '', selected: (!obj["certifiedNonspinDAM"])}]; for (let property in MktDomain.YesNo) obj["certifiedNonspinDAMYesNo"].push ({ id: property, selected: obj["certifiedNonspinDAM"] && obj["certifiedNonspinDAM"].endsWith ('.' + property)});
                obj["certifiedNonspinRTMYesNo"] = [{ id: '', selected: (!obj["certifiedNonspinRTM"])}]; for (let property in MktDomain.YesNo) obj["certifiedNonspinRTMYesNo"].push ({ id: property, selected: obj["certifiedNonspinRTM"] && obj["certifiedNonspinRTM"].endsWith ('.' + property)});
                obj["certifiedPIRPYesNo"] = [{ id: '', selected: (!obj["certifiedPIRP"])}]; for (let property in MktDomain.YesNo) obj["certifiedPIRPYesNo"].push ({ id: property, selected: obj["certifiedPIRP"] && obj["certifiedPIRP"].endsWith ('.' + property)});
                obj["certifiedRegulationYesNo"] = [{ id: '', selected: (!obj["certifiedRegulation"])}]; for (let property in MktDomain.YesNo) obj["certifiedRegulationYesNo"].push ({ id: property, selected: obj["certifiedRegulation"] && obj["certifiedRegulation"].endsWith ('.' + property)});
                obj["certifiedReplaceASYesNo"] = [{ id: '', selected: (!obj["certifiedReplaceAS"])}]; for (let property in MktDomain.YesNo) obj["certifiedReplaceASYesNo"].push ({ id: property, selected: obj["certifiedReplaceAS"] && obj["certifiedReplaceAS"].endsWith ('.' + property)});
                obj["certifiedSpinYesNo"] = [{ id: '', selected: (!obj["certifiedSpin"])}]; for (let property in MktDomain.YesNo) obj["certifiedSpinYesNo"].push ({ id: property, selected: obj["certifiedSpin"] && obj["certifiedSpin"].endsWith ('.' + property)});
                obj["certifiedRTMYesNo"] = [{ id: '', selected: (!obj["certifiedRTM"])}]; for (let property in MktDomain.YesNo) obj["certifiedRTMYesNo"].push ({ id: property, selected: obj["certifiedRTM"] && obj["certifiedRTM"].endsWith ('.' + property)});
                obj["certifiedRUCYesNo"] = [{ id: '', selected: (!obj["certifiedRUC"])}]; for (let property in MktDomain.YesNo) obj["certifiedRUCYesNo"].push ({ id: property, selected: obj["certifiedRUC"] && obj["certifiedRUC"].endsWith ('.' + property)});
                if (obj["RegisteredResource"]) obj["RegisteredResource_string"] = obj["RegisteredResource"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["certifiedDAMYesNo"];
                delete obj["certifiedNonspinDAMYesNo"];
                delete obj["certifiedNonspinRTMYesNo"];
                delete obj["certifiedPIRPYesNo"];
                delete obj["certifiedRegulationYesNo"];
                delete obj["certifiedReplaceASYesNo"];
                delete obj["certifiedSpinYesNo"];
                delete obj["certifiedRTMYesNo"];
                delete obj["certifiedRUCYesNo"];
                delete obj["RegisteredResource_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ResourceCertification2_collapse" aria-expanded="true" aria-controls="{{id}}_ResourceCertification2_collapse" style="margin-left: 10px;">ResourceCertification2</a></legend>
                    <div id="{{id}}_ResourceCertification2_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_certifiedDAM'>certifiedDAM: </label><div class='col-sm-8'><select id='{{id}}_certifiedDAM' class='form-control custom-select'>{{#certifiedDAMYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/certifiedDAMYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_certifiedNonspinDAM'>certifiedNonspinDAM: </label><div class='col-sm-8'><select id='{{id}}_certifiedNonspinDAM' class='form-control custom-select'>{{#certifiedNonspinDAMYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/certifiedNonspinDAMYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_certifiedNonspinDAMMw'>certifiedNonspinDAMMw: </label><div class='col-sm-8'><input id='{{id}}_certifiedNonspinDAMMw' class='form-control' type='text'{{#certifiedNonspinDAMMw}} value='{{certifiedNonspinDAMMw}}'{{/certifiedNonspinDAMMw}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_certifiedNonspinRTM'>certifiedNonspinRTM: </label><div class='col-sm-8'><select id='{{id}}_certifiedNonspinRTM' class='form-control custom-select'>{{#certifiedNonspinRTMYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/certifiedNonspinRTMYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_certifiedNonspinRTMMw'>certifiedNonspinRTMMw: </label><div class='col-sm-8'><input id='{{id}}_certifiedNonspinRTMMw' class='form-control' type='text'{{#certifiedNonspinRTMMw}} value='{{certifiedNonspinRTMMw}}'{{/certifiedNonspinRTMMw}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_certifiedPIRP'>certifiedPIRP: </label><div class='col-sm-8'><select id='{{id}}_certifiedPIRP' class='form-control custom-select'>{{#certifiedPIRPYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/certifiedPIRPYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_certifiedRegulation'>certifiedRegulation: </label><div class='col-sm-8'><select id='{{id}}_certifiedRegulation' class='form-control custom-select'>{{#certifiedRegulationYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/certifiedRegulationYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_certifiedRegulationMw'>certifiedRegulationMw: </label><div class='col-sm-8'><input id='{{id}}_certifiedRegulationMw' class='form-control' type='text'{{#certifiedRegulationMw}} value='{{certifiedRegulationMw}}'{{/certifiedRegulationMw}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_certifiedReplaceAS'>certifiedReplaceAS: </label><div class='col-sm-8'><select id='{{id}}_certifiedReplaceAS' class='form-control custom-select'>{{#certifiedReplaceASYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/certifiedReplaceASYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_certifiedSpin'>certifiedSpin: </label><div class='col-sm-8'><select id='{{id}}_certifiedSpin' class='form-control custom-select'>{{#certifiedSpinYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/certifiedSpinYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_certifiedSpinMw'>certifiedSpinMw: </label><div class='col-sm-8'><input id='{{id}}_certifiedSpinMw' class='form-control' type='text'{{#certifiedSpinMw}} value='{{certifiedSpinMw}}'{{/certifiedSpinMw}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_certifiedRTM'>certifiedRTM: </label><div class='col-sm-8'><select id='{{id}}_certifiedRTM' class='form-control custom-select'>{{#certifiedRTMYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/certifiedRTMYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_certifiedRUC'>certifiedRUC: </label><div class='col-sm-8'><select id='{{id}}_certifiedRUC' class='form-control custom-select'>{{#certifiedRUCYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/certifiedRUCYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='{{id}}_RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource_string}}'{{/RegisteredResource}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ResourceCertification2" };
                super.submit (id, obj);
                temp = MktDomain.YesNo[document.getElementById (id + "_certifiedDAM").value]; if (temp) obj["certifiedDAM"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#YesNo." + temp; else delete obj["certifiedDAM"];
                temp = MktDomain.YesNo[document.getElementById (id + "_certifiedNonspinDAM").value]; if (temp) obj["certifiedNonspinDAM"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#YesNo." + temp; else delete obj["certifiedNonspinDAM"];
                temp = document.getElementById (id + "_certifiedNonspinDAMMw").value; if ("" !== temp) obj["certifiedNonspinDAMMw"] = temp;
                temp = MktDomain.YesNo[document.getElementById (id + "_certifiedNonspinRTM").value]; if (temp) obj["certifiedNonspinRTM"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#YesNo." + temp; else delete obj["certifiedNonspinRTM"];
                temp = document.getElementById (id + "_certifiedNonspinRTMMw").value; if ("" !== temp) obj["certifiedNonspinRTMMw"] = temp;
                temp = MktDomain.YesNo[document.getElementById (id + "_certifiedPIRP").value]; if (temp) obj["certifiedPIRP"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#YesNo." + temp; else delete obj["certifiedPIRP"];
                temp = MktDomain.YesNo[document.getElementById (id + "_certifiedRegulation").value]; if (temp) obj["certifiedRegulation"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#YesNo." + temp; else delete obj["certifiedRegulation"];
                temp = document.getElementById (id + "_certifiedRegulationMw").value; if ("" !== temp) obj["certifiedRegulationMw"] = temp;
                temp = MktDomain.YesNo[document.getElementById (id + "_certifiedReplaceAS").value]; if (temp) obj["certifiedReplaceAS"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#YesNo." + temp; else delete obj["certifiedReplaceAS"];
                temp = MktDomain.YesNo[document.getElementById (id + "_certifiedSpin").value]; if (temp) obj["certifiedSpin"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#YesNo." + temp; else delete obj["certifiedSpin"];
                temp = document.getElementById (id + "_certifiedSpinMw").value; if ("" !== temp) obj["certifiedSpinMw"] = temp;
                temp = MktDomain.YesNo[document.getElementById (id + "_certifiedRTM").value]; if (temp) obj["certifiedRTM"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#YesNo." + temp; else delete obj["certifiedRTM"];
                temp = MktDomain.YesNo[document.getElementById (id + "_certifiedRUC").value]; if (temp) obj["certifiedRUC"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#YesNo." + temp; else delete obj["certifiedRUC"];
                temp = document.getElementById (id + "_RegisteredResource").value; if ("" !== temp) obj["RegisteredResource"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegisteredResource", "0..*", "0..*", "RegisteredResource", "ResourceCertification"]
                        ]
                    )
                );
            }
        }

        /**
         * Bilateral transaction
         *
         */
        class BilateralTransaction extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.BilateralTransaction;
                if (null == bucket)
                   cim_data.BilateralTransaction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BilateralTransaction[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "BilateralTransaction";
                base.parse_element (/<cim:BilateralTransaction.scope>([\s\S]*?)<\/cim:BilateralTransaction.scope>/g, obj, "scope", base.to_string, sub, context);
                base.parse_element (/<cim:BilateralTransaction.transactionType>([\s\S]*?)<\/cim:BilateralTransaction.transactionType>/g, obj, "transactionType", base.to_string, sub, context);
                base.parse_element (/<cim:BilateralTransaction.marketType>([\s\S]*?)<\/cim:BilateralTransaction.marketType>/g, obj, "marketType", base.to_string, sub, context);
                base.parse_element (/<cim:BilateralTransaction.purchaseTimeMin>([\s\S]*?)<\/cim:BilateralTransaction.purchaseTimeMin>/g, obj, "purchaseTimeMin", base.to_string, sub, context);
                base.parse_element (/<cim:BilateralTransaction.purchaseTimeMax>([\s\S]*?)<\/cim:BilateralTransaction.purchaseTimeMax>/g, obj, "purchaseTimeMax", base.to_string, sub, context);
                base.parse_element (/<cim:BilateralTransaction.curtailTimeMin>([\s\S]*?)<\/cim:BilateralTransaction.curtailTimeMin>/g, obj, "curtailTimeMin", base.to_string, sub, context);
                base.parse_element (/<cim:BilateralTransaction.curtailTimeMax>([\s\S]*?)<\/cim:BilateralTransaction.curtailTimeMax>/g, obj, "curtailTimeMax", base.to_string, sub, context);
                base.parse_element (/<cim:BilateralTransaction.totalTranChargeMax>([\s\S]*?)<\/cim:BilateralTransaction.totalTranChargeMax>/g, obj, "totalTranChargeMax", base.to_string, sub, context);
                let bucket = context.parsed.BilateralTransaction;
                if (null == bucket)
                   context.parsed.BilateralTransaction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "BilateralTransaction", "scope", "scope",  base.from_string, fields);
                base.export_element (obj, "BilateralTransaction", "transactionType", "transactionType",  base.from_string, fields);
                base.export_element (obj, "BilateralTransaction", "marketType", "marketType",  base.from_string, fields);
                base.export_element (obj, "BilateralTransaction", "purchaseTimeMin", "purchaseTimeMin",  base.from_string, fields);
                base.export_element (obj, "BilateralTransaction", "purchaseTimeMax", "purchaseTimeMax",  base.from_string, fields);
                base.export_element (obj, "BilateralTransaction", "curtailTimeMin", "curtailTimeMin",  base.from_string, fields);
                base.export_element (obj, "BilateralTransaction", "curtailTimeMax", "curtailTimeMax",  base.from_string, fields);
                base.export_element (obj, "BilateralTransaction", "totalTranChargeMax", "totalTranChargeMax",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#BilateralTransaction_collapse" aria-expanded="true" aria-controls="BilateralTransaction_collapse" style="margin-left: 10px;">BilateralTransaction</a></legend>
                    <div id="BilateralTransaction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#scope}}<div><b>scope</b>: {{scope}}</div>{{/scope}}
                    {{#transactionType}}<div><b>transactionType</b>: {{transactionType}}</div>{{/transactionType}}
                    {{#marketType}}<div><b>marketType</b>: {{marketType}}</div>{{/marketType}}
                    {{#purchaseTimeMin}}<div><b>purchaseTimeMin</b>: {{purchaseTimeMin}}</div>{{/purchaseTimeMin}}
                    {{#purchaseTimeMax}}<div><b>purchaseTimeMax</b>: {{purchaseTimeMax}}</div>{{/purchaseTimeMax}}
                    {{#curtailTimeMin}}<div><b>curtailTimeMin</b>: {{curtailTimeMin}}</div>{{/curtailTimeMin}}
                    {{#curtailTimeMax}}<div><b>curtailTimeMax</b>: {{curtailTimeMax}}</div>{{/curtailTimeMax}}
                    {{#totalTranChargeMax}}<div><b>totalTranChargeMax</b>: {{totalTranChargeMax}}</div>{{/totalTranChargeMax}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_BilateralTransaction_collapse" aria-expanded="true" aria-controls="{{id}}_BilateralTransaction_collapse" style="margin-left: 10px;">BilateralTransaction</a></legend>
                    <div id="{{id}}_BilateralTransaction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_scope'>scope: </label><div class='col-sm-8'><input id='{{id}}_scope' class='form-control' type='text'{{#scope}} value='{{scope}}'{{/scope}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_transactionType'>transactionType: </label><div class='col-sm-8'><input id='{{id}}_transactionType' class='form-control' type='text'{{#transactionType}} value='{{transactionType}}'{{/transactionType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_marketType'>marketType: </label><div class='col-sm-8'><input id='{{id}}_marketType' class='form-control' type='text'{{#marketType}} value='{{marketType}}'{{/marketType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_purchaseTimeMin'>purchaseTimeMin: </label><div class='col-sm-8'><input id='{{id}}_purchaseTimeMin' class='form-control' type='text'{{#purchaseTimeMin}} value='{{purchaseTimeMin}}'{{/purchaseTimeMin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_purchaseTimeMax'>purchaseTimeMax: </label><div class='col-sm-8'><input id='{{id}}_purchaseTimeMax' class='form-control' type='text'{{#purchaseTimeMax}} value='{{purchaseTimeMax}}'{{/purchaseTimeMax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_curtailTimeMin'>curtailTimeMin: </label><div class='col-sm-8'><input id='{{id}}_curtailTimeMin' class='form-control' type='text'{{#curtailTimeMin}} value='{{curtailTimeMin}}'{{/curtailTimeMin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_curtailTimeMax'>curtailTimeMax: </label><div class='col-sm-8'><input id='{{id}}_curtailTimeMax' class='form-control' type='text'{{#curtailTimeMax}} value='{{curtailTimeMax}}'{{/curtailTimeMax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_totalTranChargeMax'>totalTranChargeMax: </label><div class='col-sm-8'><input id='{{id}}_totalTranChargeMax' class='form-control' type='text'{{#totalTranChargeMax}} value='{{totalTranChargeMax}}'{{/totalTranChargeMax}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "BilateralTransaction" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_scope").value; if ("" !== temp) obj["scope"] = temp;
                temp = document.getElementById (id + "_transactionType").value; if ("" !== temp) obj["transactionType"] = temp;
                temp = document.getElementById (id + "_marketType").value; if ("" !== temp) obj["marketType"] = temp;
                temp = document.getElementById (id + "_purchaseTimeMin").value; if ("" !== temp) obj["purchaseTimeMin"] = temp;
                temp = document.getElementById (id + "_purchaseTimeMax").value; if ("" !== temp) obj["purchaseTimeMax"] = temp;
                temp = document.getElementById (id + "_curtailTimeMin").value; if ("" !== temp) obj["curtailTimeMin"] = temp;
                temp = document.getElementById (id + "_curtailTimeMax").value; if ("" !== temp) obj["curtailTimeMax"] = temp;
                temp = document.getElementById (id + "_totalTranChargeMax").value; if ("" !== temp) obj["totalTranChargeMax"] = temp;

                return (obj);
            }
        }

        /**
         * Participation level of a given Pnode in a given AggregatePnode.
         *
         */
        class Participation extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Participation;
                if (null == bucket)
                   cim_data.Participation = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Participation[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Participation";
                base.parse_element (/<cim:Participation.factor>([\s\S]*?)<\/cim:Participation.factor>/g, obj, "factor", base.to_float, sub, context);
                let bucket = context.parsed.Participation;
                if (null == bucket)
                   context.parsed.Participation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Participation", "factor", "factor",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Participation_collapse" aria-expanded="true" aria-controls="Participation_collapse" style="margin-left: 10px;">Participation</a></legend>
                    <div id="Participation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#factor}}<div><b>factor</b>: {{factor}}</div>{{/factor}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Participation_collapse" aria-expanded="true" aria-controls="{{id}}_Participation_collapse" style="margin-left: 10px;">Participation</a></legend>
                    <div id="{{id}}_Participation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_factor'>factor: </label><div class='col-sm-8'><input id='{{id}}_factor' class='form-control' type='text'{{#factor}} value='{{factor}}'{{/factor}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Participation" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_factor").value; if ("" !== temp) obj["factor"] = temp;

                return (obj);
            }
        }

        return (
            {
                ResourceCertification2: ResourceCertification2,
                Participation: Participation,
                BilateralTransaction: BilateralTransaction
            }
        );
    }
);