define
(
    ["model/base", "model/Assets", "model/Core"],
    function (base, Assets, Core)
    {

        /**
         * Catalogue of generic types of assets (TypeAsset) that may be used for design purposes.
         *
         * It is not associated with a particular manufacturer.
         *
         */
        class TypeAssetCatalogue extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.TypeAssetCatalogue;
                if (null == bucket)
                   cim_data.TypeAssetCatalogue = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TypeAssetCatalogue[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TypeAssetCatalogue";
                base.parse_attribute (/<cim:TypeAssetCatalogue.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attributes (/<cim:TypeAssetCatalogue.TypeAssets\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TypeAssets", sub, context);
                let bucket = context.parsed.TypeAssetCatalogue;
                if (null == bucket)
                   context.parsed.TypeAssetCatalogue = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "TypeAssetCatalogue", "status", "status", fields);
                base.export_attributes (obj, "TypeAssetCatalogue", "TypeAssets", "TypeAssets", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TypeAssetCatalogue_collapse" aria-expanded="true" aria-controls="TypeAssetCatalogue_collapse" style="margin-left: 10px;">TypeAssetCatalogue</a></legend>
                    <div id="TypeAssetCatalogue_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}
                    {{#TypeAssets}}<div><b>TypeAssets</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/TypeAssets}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["TypeAssets"]) obj["TypeAssets_string"] = obj["TypeAssets"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["TypeAssets_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TypeAssetCatalogue_collapse" aria-expanded="true" aria-controls="{{id}}_TypeAssetCatalogue_collapse" style="margin-left: 10px;">TypeAssetCatalogue</a></legend>
                    <div id="{{id}}_TypeAssetCatalogue_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
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

                obj = obj || { id: id, cls: "TypeAssetCatalogue" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TypeAssets", "0..*", "0..1", "CatalogAssetType", "TypeAssetCatalogue"]
                        ]
                    )
                );
            }
        }

        /**
         * Generic generation equipment that may be used for various purposes such as work planning.
         *
         * It defines both the Real and Reactive power properties (modelled at the PSR level as a GeneratingUnit + SynchronousMachine).
         *
         */
        class GeneratorTypeAsset extends Assets.CatalogAssetType
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.GeneratorTypeAsset;
                if (null == bucket)
                   cim_data.GeneratorTypeAsset = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GeneratorTypeAsset[obj.id];
            }

            parse (context, sub)
            {
                let obj = Assets.CatalogAssetType.prototype.parse.call (this, context, sub);
                obj.cls = "GeneratorTypeAsset";
                base.parse_element (/<cim:GeneratorTypeAsset.maxQ>([\s\S]*?)<\/cim:GeneratorTypeAsset.maxQ>/g, obj, "maxQ", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratorTypeAsset.maxP>([\s\S]*?)<\/cim:GeneratorTypeAsset.maxP>/g, obj, "maxP", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratorTypeAsset.minQ>([\s\S]*?)<\/cim:GeneratorTypeAsset.minQ>/g, obj, "minQ", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratorTypeAsset.minP>([\s\S]*?)<\/cim:GeneratorTypeAsset.minP>/g, obj, "minP", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratorTypeAsset.rDirectSubtrans>([\s\S]*?)<\/cim:GeneratorTypeAsset.rDirectSubtrans>/g, obj, "rDirectSubtrans", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratorTypeAsset.rDirectSync>([\s\S]*?)<\/cim:GeneratorTypeAsset.rDirectSync>/g, obj, "rDirectSync", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratorTypeAsset.rDirectTrans>([\s\S]*?)<\/cim:GeneratorTypeAsset.rDirectTrans>/g, obj, "rDirectTrans", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratorTypeAsset.rQuadSubtrans>([\s\S]*?)<\/cim:GeneratorTypeAsset.rQuadSubtrans>/g, obj, "rQuadSubtrans", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratorTypeAsset.rQuadSync>([\s\S]*?)<\/cim:GeneratorTypeAsset.rQuadSync>/g, obj, "rQuadSync", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratorTypeAsset.rQuadTrans>([\s\S]*?)<\/cim:GeneratorTypeAsset.rQuadTrans>/g, obj, "rQuadTrans", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratorTypeAsset.xDirectSubtrans>([\s\S]*?)<\/cim:GeneratorTypeAsset.xDirectSubtrans>/g, obj, "xDirectSubtrans", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratorTypeAsset.xDirectSync>([\s\S]*?)<\/cim:GeneratorTypeAsset.xDirectSync>/g, obj, "xDirectSync", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratorTypeAsset.xDirectTrans>([\s\S]*?)<\/cim:GeneratorTypeAsset.xDirectTrans>/g, obj, "xDirectTrans", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratorTypeAsset.xQuadSubtrans>([\s\S]*?)<\/cim:GeneratorTypeAsset.xQuadSubtrans>/g, obj, "xQuadSubtrans", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratorTypeAsset.xQuadSync>([\s\S]*?)<\/cim:GeneratorTypeAsset.xQuadSync>/g, obj, "xQuadSync", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratorTypeAsset.xQuadTrans>([\s\S]*?)<\/cim:GeneratorTypeAsset.xQuadTrans>/g, obj, "xQuadTrans", base.to_string, sub, context);
                let bucket = context.parsed.GeneratorTypeAsset;
                if (null == bucket)
                   context.parsed.GeneratorTypeAsset = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Assets.CatalogAssetType.prototype.export.call (this, obj, false);

                base.export_element (obj, "GeneratorTypeAsset", "maxQ", "maxQ",  base.from_string, fields);
                base.export_element (obj, "GeneratorTypeAsset", "maxP", "maxP",  base.from_string, fields);
                base.export_element (obj, "GeneratorTypeAsset", "minQ", "minQ",  base.from_string, fields);
                base.export_element (obj, "GeneratorTypeAsset", "minP", "minP",  base.from_string, fields);
                base.export_element (obj, "GeneratorTypeAsset", "rDirectSubtrans", "rDirectSubtrans",  base.from_string, fields);
                base.export_element (obj, "GeneratorTypeAsset", "rDirectSync", "rDirectSync",  base.from_string, fields);
                base.export_element (obj, "GeneratorTypeAsset", "rDirectTrans", "rDirectTrans",  base.from_string, fields);
                base.export_element (obj, "GeneratorTypeAsset", "rQuadSubtrans", "rQuadSubtrans",  base.from_string, fields);
                base.export_element (obj, "GeneratorTypeAsset", "rQuadSync", "rQuadSync",  base.from_string, fields);
                base.export_element (obj, "GeneratorTypeAsset", "rQuadTrans", "rQuadTrans",  base.from_string, fields);
                base.export_element (obj, "GeneratorTypeAsset", "xDirectSubtrans", "xDirectSubtrans",  base.from_string, fields);
                base.export_element (obj, "GeneratorTypeAsset", "xDirectSync", "xDirectSync",  base.from_string, fields);
                base.export_element (obj, "GeneratorTypeAsset", "xDirectTrans", "xDirectTrans",  base.from_string, fields);
                base.export_element (obj, "GeneratorTypeAsset", "xQuadSubtrans", "xQuadSubtrans",  base.from_string, fields);
                base.export_element (obj, "GeneratorTypeAsset", "xQuadSync", "xQuadSync",  base.from_string, fields);
                base.export_element (obj, "GeneratorTypeAsset", "xQuadTrans", "xQuadTrans",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#GeneratorTypeAsset_collapse" aria-expanded="true" aria-controls="GeneratorTypeAsset_collapse" style="margin-left: 10px;">GeneratorTypeAsset</a></legend>
                    <div id="GeneratorTypeAsset_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.CatalogAssetType.prototype.template.call (this) +
                    `
                    {{#maxQ}}<div><b>maxQ</b>: {{maxQ}}</div>{{/maxQ}}
                    {{#maxP}}<div><b>maxP</b>: {{maxP}}</div>{{/maxP}}
                    {{#minQ}}<div><b>minQ</b>: {{minQ}}</div>{{/minQ}}
                    {{#minP}}<div><b>minP</b>: {{minP}}</div>{{/minP}}
                    {{#rDirectSubtrans}}<div><b>rDirectSubtrans</b>: {{rDirectSubtrans}}</div>{{/rDirectSubtrans}}
                    {{#rDirectSync}}<div><b>rDirectSync</b>: {{rDirectSync}}</div>{{/rDirectSync}}
                    {{#rDirectTrans}}<div><b>rDirectTrans</b>: {{rDirectTrans}}</div>{{/rDirectTrans}}
                    {{#rQuadSubtrans}}<div><b>rQuadSubtrans</b>: {{rQuadSubtrans}}</div>{{/rQuadSubtrans}}
                    {{#rQuadSync}}<div><b>rQuadSync</b>: {{rQuadSync}}</div>{{/rQuadSync}}
                    {{#rQuadTrans}}<div><b>rQuadTrans</b>: {{rQuadTrans}}</div>{{/rQuadTrans}}
                    {{#xDirectSubtrans}}<div><b>xDirectSubtrans</b>: {{xDirectSubtrans}}</div>{{/xDirectSubtrans}}
                    {{#xDirectSync}}<div><b>xDirectSync</b>: {{xDirectSync}}</div>{{/xDirectSync}}
                    {{#xDirectTrans}}<div><b>xDirectTrans</b>: {{xDirectTrans}}</div>{{/xDirectTrans}}
                    {{#xQuadSubtrans}}<div><b>xQuadSubtrans</b>: {{xQuadSubtrans}}</div>{{/xQuadSubtrans}}
                    {{#xQuadSync}}<div><b>xQuadSync</b>: {{xQuadSync}}</div>{{/xQuadSync}}
                    {{#xQuadTrans}}<div><b>xQuadTrans</b>: {{xQuadTrans}}</div>{{/xQuadTrans}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_GeneratorTypeAsset_collapse" aria-expanded="true" aria-controls="{{id}}_GeneratorTypeAsset_collapse" style="margin-left: 10px;">GeneratorTypeAsset</a></legend>
                    <div id="{{id}}_GeneratorTypeAsset_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.CatalogAssetType.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxQ'>maxQ: </label><div class='col-sm-8'><input id='{{id}}_maxQ' class='form-control' type='text'{{#maxQ}} value='{{maxQ}}'{{/maxQ}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxP'>maxP: </label><div class='col-sm-8'><input id='{{id}}_maxP' class='form-control' type='text'{{#maxP}} value='{{maxP}}'{{/maxP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minQ'>minQ: </label><div class='col-sm-8'><input id='{{id}}_minQ' class='form-control' type='text'{{#minQ}} value='{{minQ}}'{{/minQ}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minP'>minP: </label><div class='col-sm-8'><input id='{{id}}_minP' class='form-control' type='text'{{#minP}} value='{{minP}}'{{/minP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rDirectSubtrans'>rDirectSubtrans: </label><div class='col-sm-8'><input id='{{id}}_rDirectSubtrans' class='form-control' type='text'{{#rDirectSubtrans}} value='{{rDirectSubtrans}}'{{/rDirectSubtrans}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rDirectSync'>rDirectSync: </label><div class='col-sm-8'><input id='{{id}}_rDirectSync' class='form-control' type='text'{{#rDirectSync}} value='{{rDirectSync}}'{{/rDirectSync}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rDirectTrans'>rDirectTrans: </label><div class='col-sm-8'><input id='{{id}}_rDirectTrans' class='form-control' type='text'{{#rDirectTrans}} value='{{rDirectTrans}}'{{/rDirectTrans}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rQuadSubtrans'>rQuadSubtrans: </label><div class='col-sm-8'><input id='{{id}}_rQuadSubtrans' class='form-control' type='text'{{#rQuadSubtrans}} value='{{rQuadSubtrans}}'{{/rQuadSubtrans}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rQuadSync'>rQuadSync: </label><div class='col-sm-8'><input id='{{id}}_rQuadSync' class='form-control' type='text'{{#rQuadSync}} value='{{rQuadSync}}'{{/rQuadSync}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rQuadTrans'>rQuadTrans: </label><div class='col-sm-8'><input id='{{id}}_rQuadTrans' class='form-control' type='text'{{#rQuadTrans}} value='{{rQuadTrans}}'{{/rQuadTrans}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xDirectSubtrans'>xDirectSubtrans: </label><div class='col-sm-8'><input id='{{id}}_xDirectSubtrans' class='form-control' type='text'{{#xDirectSubtrans}} value='{{xDirectSubtrans}}'{{/xDirectSubtrans}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xDirectSync'>xDirectSync: </label><div class='col-sm-8'><input id='{{id}}_xDirectSync' class='form-control' type='text'{{#xDirectSync}} value='{{xDirectSync}}'{{/xDirectSync}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xDirectTrans'>xDirectTrans: </label><div class='col-sm-8'><input id='{{id}}_xDirectTrans' class='form-control' type='text'{{#xDirectTrans}} value='{{xDirectTrans}}'{{/xDirectTrans}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xQuadSubtrans'>xQuadSubtrans: </label><div class='col-sm-8'><input id='{{id}}_xQuadSubtrans' class='form-control' type='text'{{#xQuadSubtrans}} value='{{xQuadSubtrans}}'{{/xQuadSubtrans}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xQuadSync'>xQuadSync: </label><div class='col-sm-8'><input id='{{id}}_xQuadSync' class='form-control' type='text'{{#xQuadSync}} value='{{xQuadSync}}'{{/xQuadSync}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xQuadTrans'>xQuadTrans: </label><div class='col-sm-8'><input id='{{id}}_xQuadTrans' class='form-control' type='text'{{#xQuadTrans}} value='{{xQuadTrans}}'{{/xQuadTrans}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "GeneratorTypeAsset" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_maxQ").value; if ("" !== temp) obj["maxQ"] = temp;
                temp = document.getElementById (id + "_maxP").value; if ("" !== temp) obj["maxP"] = temp;
                temp = document.getElementById (id + "_minQ").value; if ("" !== temp) obj["minQ"] = temp;
                temp = document.getElementById (id + "_minP").value; if ("" !== temp) obj["minP"] = temp;
                temp = document.getElementById (id + "_rDirectSubtrans").value; if ("" !== temp) obj["rDirectSubtrans"] = temp;
                temp = document.getElementById (id + "_rDirectSync").value; if ("" !== temp) obj["rDirectSync"] = temp;
                temp = document.getElementById (id + "_rDirectTrans").value; if ("" !== temp) obj["rDirectTrans"] = temp;
                temp = document.getElementById (id + "_rQuadSubtrans").value; if ("" !== temp) obj["rQuadSubtrans"] = temp;
                temp = document.getElementById (id + "_rQuadSync").value; if ("" !== temp) obj["rQuadSync"] = temp;
                temp = document.getElementById (id + "_rQuadTrans").value; if ("" !== temp) obj["rQuadTrans"] = temp;
                temp = document.getElementById (id + "_xDirectSubtrans").value; if ("" !== temp) obj["xDirectSubtrans"] = temp;
                temp = document.getElementById (id + "_xDirectSync").value; if ("" !== temp) obj["xDirectSync"] = temp;
                temp = document.getElementById (id + "_xDirectTrans").value; if ("" !== temp) obj["xDirectTrans"] = temp;
                temp = document.getElementById (id + "_xQuadSubtrans").value; if ("" !== temp) obj["xQuadSubtrans"] = temp;
                temp = document.getElementById (id + "_xQuadSync").value; if ("" !== temp) obj["xQuadSync"] = temp;
                temp = document.getElementById (id + "_xQuadTrans").value; if ("" !== temp) obj["xQuadTrans"] = temp;

                return (obj);
            }
        }

        return (
            {
                GeneratorTypeAsset: GeneratorTypeAsset,
                TypeAssetCatalogue: TypeAssetCatalogue
            }
        );
    }
);