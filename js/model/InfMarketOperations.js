define
(
    ["model/base", "model/Core"],
    function (base, Core)
    {

        /**
         * Bilateral transaction
         *
         */
        class BilateralTransaction extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.BilateralTransaction;
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
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "BilateralTransaction";
                base.parse_element (/<cim:BilateralTransaction.scope>([\s\S]*?)<\/cim:BilateralTransaction.scope>/g, obj, "scope", base.to_string, sub, context);
                base.parse_element (/<cim:BilateralTransaction.transactionType>([\s\S]*?)<\/cim:BilateralTransaction.transactionType>/g, obj, "transactionType", base.to_string, sub, context);
                base.parse_element (/<cim:BilateralTransaction.marketType>([\s\S]*?)<\/cim:BilateralTransaction.marketType>/g, obj, "marketType", base.to_string, sub, context);
                base.parse_element (/<cim:BilateralTransaction.purchaseTimeMin>([\s\S]*?)<\/cim:BilateralTransaction.purchaseTimeMin>/g, obj, "purchaseTimeMin", base.to_string, sub, context);
                base.parse_element (/<cim:BilateralTransaction.purchaseTimeMax>([\s\S]*?)<\/cim:BilateralTransaction.purchaseTimeMax>/g, obj, "purchaseTimeMax", base.to_string, sub, context);
                base.parse_element (/<cim:BilateralTransaction.curtailTimeMin>([\s\S]*?)<\/cim:BilateralTransaction.curtailTimeMin>/g, obj, "curtailTimeMin", base.to_string, sub, context);
                base.parse_element (/<cim:BilateralTransaction.curtailTimeMax>([\s\S]*?)<\/cim:BilateralTransaction.curtailTimeMax>/g, obj, "curtailTimeMax", base.to_string, sub, context);
                base.parse_element (/<cim:BilateralTransaction.totalTranChargeMax>([\s\S]*?)<\/cim:BilateralTransaction.totalTranChargeMax>/g, obj, "totalTranChargeMax", base.to_string, sub, context);
                var bucket = context.parsed.BilateralTransaction;
                if (null == bucket)
                   context.parsed.BilateralTransaction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "BilateralTransaction", "scope", "scope",  base.from_string, fields);
                base.export_element (obj, "BilateralTransaction", "transactionType", "transactionType",  base.from_string, fields);
                base.export_element (obj, "BilateralTransaction", "marketType", "marketType",  base.from_string, fields);
                base.export_element (obj, "BilateralTransaction", "purchaseTimeMin", "purchaseTimeMin",  base.from_string, fields);
                base.export_element (obj, "BilateralTransaction", "purchaseTimeMax", "purchaseTimeMax",  base.from_string, fields);
                base.export_element (obj, "BilateralTransaction", "curtailTimeMin", "curtailTimeMin",  base.from_string, fields);
                base.export_element (obj, "BilateralTransaction", "curtailTimeMax", "curtailTimeMax",  base.from_string, fields);
                base.export_element (obj, "BilateralTransaction", "totalTranChargeMax", "totalTranChargeMax",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BilateralTransaction_collapse" aria-expanded="true" aria-controls="BilateralTransaction_collapse" style="margin-left: 10px;">BilateralTransaction</a></legend>
                    <div id="BilateralTransaction_collapse" class="collapse in" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_BilateralTransaction_collapse" aria-expanded="true" aria-controls="{{id}}_BilateralTransaction_collapse" style="margin-left: 10px;">BilateralTransaction</a></legend>
                    <div id="{{id}}_BilateralTransaction_collapse" class="collapse in" style="margin-left: 10px;">
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
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "BilateralTransaction" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_scope").value; if ("" != temp) obj.scope = temp;
                temp = document.getElementById (id + "_transactionType").value; if ("" != temp) obj.transactionType = temp;
                temp = document.getElementById (id + "_marketType").value; if ("" != temp) obj.marketType = temp;
                temp = document.getElementById (id + "_purchaseTimeMin").value; if ("" != temp) obj.purchaseTimeMin = temp;
                temp = document.getElementById (id + "_purchaseTimeMax").value; if ("" != temp) obj.purchaseTimeMax = temp;
                temp = document.getElementById (id + "_curtailTimeMin").value; if ("" != temp) obj.curtailTimeMin = temp;
                temp = document.getElementById (id + "_curtailTimeMax").value; if ("" != temp) obj.curtailTimeMax = temp;
                temp = document.getElementById (id + "_totalTranChargeMax").value; if ("" != temp) obj.totalTranChargeMax = temp;

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
                var bucket = cim_data.Participation;
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
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Participation";
                base.parse_element (/<cim:Participation.factor>([\s\S]*?)<\/cim:Participation.factor>/g, obj, "factor", base.to_float, sub, context);
                var bucket = context.parsed.Participation;
                if (null == bucket)
                   context.parsed.Participation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Participation", "factor", "factor",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Participation_collapse" aria-expanded="true" aria-controls="Participation_collapse" style="margin-left: 10px;">Participation</a></legend>
                    <div id="Participation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#factor}}<div><b>factor</b>: {{factor}}</div>{{/factor}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Participation_collapse" aria-expanded="true" aria-controls="{{id}}_Participation_collapse" style="margin-left: 10px;">Participation</a></legend>
                    <div id="{{id}}_Participation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_factor'>factor: </label><div class='col-sm-8'><input id='{{id}}_factor' class='form-control' type='text'{{#factor}} value='{{factor}}'{{/factor}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Participation" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_factor").value; if ("" != temp) obj.factor = temp;

                return (obj);
            }
        }

        /**
         * This class represent the resource certification for a specific product type.
         *
         * For example, a resource is certified for Non-Spinning reserve for RTM.
         *
         */
        class ResourceCertification extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ResourceCertification;
                if (null == bucket)
                   cim_data.ResourceCertification = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ResourceCertification[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ResourceCertification";
                base.parse_element (/<cim:ResourceCertification.certifiedDAM>([\s\S]*?)<\/cim:ResourceCertification.certifiedDAM>/g, obj, "certifiedDAM", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceCertification.certifiedNonspinDAM>([\s\S]*?)<\/cim:ResourceCertification.certifiedNonspinDAM>/g, obj, "certifiedNonspinDAM", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceCertification.certifiedNonspinDAMMw>([\s\S]*?)<\/cim:ResourceCertification.certifiedNonspinDAMMw>/g, obj, "certifiedNonspinDAMMw", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceCertification.certifiedNonspinRTM>([\s\S]*?)<\/cim:ResourceCertification.certifiedNonspinRTM>/g, obj, "certifiedNonspinRTM", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceCertification.certifiedNonspinRTMMw>([\s\S]*?)<\/cim:ResourceCertification.certifiedNonspinRTMMw>/g, obj, "certifiedNonspinRTMMw", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceCertification.certifiedPIRP>([\s\S]*?)<\/cim:ResourceCertification.certifiedPIRP>/g, obj, "certifiedPIRP", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceCertification.certifiedRegulation>([\s\S]*?)<\/cim:ResourceCertification.certifiedRegulation>/g, obj, "certifiedRegulation", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceCertification.certifiedRegulationMw>([\s\S]*?)<\/cim:ResourceCertification.certifiedRegulationMw>/g, obj, "certifiedRegulationMw", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceCertification.certifiedReplaceAS>([\s\S]*?)<\/cim:ResourceCertification.certifiedReplaceAS>/g, obj, "certifiedReplaceAS", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceCertification.certifiedSpin>([\s\S]*?)<\/cim:ResourceCertification.certifiedSpin>/g, obj, "certifiedSpin", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceCertification.certifiedSpinMw>([\s\S]*?)<\/cim:ResourceCertification.certifiedSpinMw>/g, obj, "certifiedSpinMw", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceCertification.certifiedRTM>([\s\S]*?)<\/cim:ResourceCertification.certifiedRTM>/g, obj, "certifiedRTM", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceCertification.certifiedRUC>([\s\S]*?)<\/cim:ResourceCertification.certifiedRUC>/g, obj, "certifiedRUC", base.to_string, sub, context);
                base.parse_attributes (/<cim:ResourceCertification.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                var bucket = context.parsed.ResourceCertification;
                if (null == bucket)
                   context.parsed.ResourceCertification = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ResourceCertification", "certifiedDAM", "certifiedDAM",  base.from_string, fields);
                base.export_element (obj, "ResourceCertification", "certifiedNonspinDAM", "certifiedNonspinDAM",  base.from_string, fields);
                base.export_element (obj, "ResourceCertification", "certifiedNonspinDAMMw", "certifiedNonspinDAMMw",  base.from_float, fields);
                base.export_element (obj, "ResourceCertification", "certifiedNonspinRTM", "certifiedNonspinRTM",  base.from_string, fields);
                base.export_element (obj, "ResourceCertification", "certifiedNonspinRTMMw", "certifiedNonspinRTMMw",  base.from_float, fields);
                base.export_element (obj, "ResourceCertification", "certifiedPIRP", "certifiedPIRP",  base.from_string, fields);
                base.export_element (obj, "ResourceCertification", "certifiedRegulation", "certifiedRegulation",  base.from_string, fields);
                base.export_element (obj, "ResourceCertification", "certifiedRegulationMw", "certifiedRegulationMw",  base.from_float, fields);
                base.export_element (obj, "ResourceCertification", "certifiedReplaceAS", "certifiedReplaceAS",  base.from_string, fields);
                base.export_element (obj, "ResourceCertification", "certifiedSpin", "certifiedSpin",  base.from_string, fields);
                base.export_element (obj, "ResourceCertification", "certifiedSpinMw", "certifiedSpinMw",  base.from_float, fields);
                base.export_element (obj, "ResourceCertification", "certifiedRTM", "certifiedRTM",  base.from_string, fields);
                base.export_element (obj, "ResourceCertification", "certifiedRUC", "certifiedRUC",  base.from_string, fields);
                base.export_attributes (obj, "ResourceCertification", "RegisteredResource", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ResourceCertification_collapse" aria-expanded="true" aria-controls="ResourceCertification_collapse" style="margin-left: 10px;">ResourceCertification</a></legend>
                    <div id="ResourceCertification_collapse" class="collapse in" style="margin-left: 10px;">
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
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/RegisteredResource}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.RegisteredResource) obj.RegisteredResource_string = obj.RegisteredResource.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.RegisteredResource_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_ResourceCertification_collapse" aria-expanded="true" aria-controls="{{id}}_ResourceCertification_collapse" style="margin-left: 10px;">ResourceCertification</a></legend>
                    <div id="{{id}}_ResourceCertification_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_certifiedDAM'>certifiedDAM: </label><div class='col-sm-8'><input id='{{id}}_certifiedDAM' class='form-control' type='text'{{#certifiedDAM}} value='{{certifiedDAM}}'{{/certifiedDAM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_certifiedNonspinDAM'>certifiedNonspinDAM: </label><div class='col-sm-8'><input id='{{id}}_certifiedNonspinDAM' class='form-control' type='text'{{#certifiedNonspinDAM}} value='{{certifiedNonspinDAM}}'{{/certifiedNonspinDAM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_certifiedNonspinDAMMw'>certifiedNonspinDAMMw: </label><div class='col-sm-8'><input id='{{id}}_certifiedNonspinDAMMw' class='form-control' type='text'{{#certifiedNonspinDAMMw}} value='{{certifiedNonspinDAMMw}}'{{/certifiedNonspinDAMMw}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_certifiedNonspinRTM'>certifiedNonspinRTM: </label><div class='col-sm-8'><input id='{{id}}_certifiedNonspinRTM' class='form-control' type='text'{{#certifiedNonspinRTM}} value='{{certifiedNonspinRTM}}'{{/certifiedNonspinRTM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_certifiedNonspinRTMMw'>certifiedNonspinRTMMw: </label><div class='col-sm-8'><input id='{{id}}_certifiedNonspinRTMMw' class='form-control' type='text'{{#certifiedNonspinRTMMw}} value='{{certifiedNonspinRTMMw}}'{{/certifiedNonspinRTMMw}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_certifiedPIRP'>certifiedPIRP: </label><div class='col-sm-8'><input id='{{id}}_certifiedPIRP' class='form-control' type='text'{{#certifiedPIRP}} value='{{certifiedPIRP}}'{{/certifiedPIRP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_certifiedRegulation'>certifiedRegulation: </label><div class='col-sm-8'><input id='{{id}}_certifiedRegulation' class='form-control' type='text'{{#certifiedRegulation}} value='{{certifiedRegulation}}'{{/certifiedRegulation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_certifiedRegulationMw'>certifiedRegulationMw: </label><div class='col-sm-8'><input id='{{id}}_certifiedRegulationMw' class='form-control' type='text'{{#certifiedRegulationMw}} value='{{certifiedRegulationMw}}'{{/certifiedRegulationMw}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_certifiedReplaceAS'>certifiedReplaceAS: </label><div class='col-sm-8'><input id='{{id}}_certifiedReplaceAS' class='form-control' type='text'{{#certifiedReplaceAS}} value='{{certifiedReplaceAS}}'{{/certifiedReplaceAS}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_certifiedSpin'>certifiedSpin: </label><div class='col-sm-8'><input id='{{id}}_certifiedSpin' class='form-control' type='text'{{#certifiedSpin}} value='{{certifiedSpin}}'{{/certifiedSpin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_certifiedSpinMw'>certifiedSpinMw: </label><div class='col-sm-8'><input id='{{id}}_certifiedSpinMw' class='form-control' type='text'{{#certifiedSpinMw}} value='{{certifiedSpinMw}}'{{/certifiedSpinMw}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_certifiedRTM'>certifiedRTM: </label><div class='col-sm-8'><input id='{{id}}_certifiedRTM' class='form-control' type='text'{{#certifiedRTM}} value='{{certifiedRTM}}'{{/certifiedRTM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_certifiedRUC'>certifiedRUC: </label><div class='col-sm-8'><input id='{{id}}_certifiedRUC' class='form-control' type='text'{{#certifiedRUC}} value='{{certifiedRUC}}'{{/certifiedRUC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='{{id}}_RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}_string'{{/RegisteredResource}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ResourceCertification" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_certifiedDAM").value; if ("" != temp) obj.certifiedDAM = temp;
                temp = document.getElementById (id + "_certifiedNonspinDAM").value; if ("" != temp) obj.certifiedNonspinDAM = temp;
                temp = document.getElementById (id + "_certifiedNonspinDAMMw").value; if ("" != temp) obj.certifiedNonspinDAMMw = temp;
                temp = document.getElementById (id + "_certifiedNonspinRTM").value; if ("" != temp) obj.certifiedNonspinRTM = temp;
                temp = document.getElementById (id + "_certifiedNonspinRTMMw").value; if ("" != temp) obj.certifiedNonspinRTMMw = temp;
                temp = document.getElementById (id + "_certifiedPIRP").value; if ("" != temp) obj.certifiedPIRP = temp;
                temp = document.getElementById (id + "_certifiedRegulation").value; if ("" != temp) obj.certifiedRegulation = temp;
                temp = document.getElementById (id + "_certifiedRegulationMw").value; if ("" != temp) obj.certifiedRegulationMw = temp;
                temp = document.getElementById (id + "_certifiedReplaceAS").value; if ("" != temp) obj.certifiedReplaceAS = temp;
                temp = document.getElementById (id + "_certifiedSpin").value; if ("" != temp) obj.certifiedSpin = temp;
                temp = document.getElementById (id + "_certifiedSpinMw").value; if ("" != temp) obj.certifiedSpinMw = temp;
                temp = document.getElementById (id + "_certifiedRTM").value; if ("" != temp) obj.certifiedRTM = temp;
                temp = document.getElementById (id + "_certifiedRUC").value; if ("" != temp) obj.certifiedRUC = temp;
                temp = document.getElementById (id + "_RegisteredResource").value; if ("" != temp) obj.RegisteredResource = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["RegisteredResource", "RegisteredResource", "0..*", "0..*"]
                    ]
                );
            }
        }

        return (
            {
                ResourceCertification: ResourceCertification,
                Participation: Participation,
                BilateralTransaction: BilateralTransaction
            }
        );
    }
);