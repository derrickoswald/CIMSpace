define
(
    ["model/base", "model/Core", "model/InfAssets"],
    function (base, Core, InfAssets)
    {

        /**
         * Generic generation equipment that may be used for various purposes such as work planning.
         *
         * It defines both the Real and Reactive power properties (modelled at the PSR level as a GeneratingUnit + SynchronousMachine).
         *
         */
        class GeneratorTypeAsset extends InfAssets.GenericAssetModelOrMaterial
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GeneratorTypeAsset;
                if (null == bucket)
                   cim_data.GeneratorTypeAsset = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GeneratorTypeAsset[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = InfAssets.GenericAssetModelOrMaterial.prototype.parse.call (this, context, sub);
                obj.cls = "GeneratorTypeAsset";
                base.parse_element (/<cim:GeneratorTypeAsset.maxP>([\s\S]*?)<\/cim:GeneratorTypeAsset.maxP>/g, obj, "maxP", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratorTypeAsset.maxQ>([\s\S]*?)<\/cim:GeneratorTypeAsset.maxQ>/g, obj, "maxQ", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratorTypeAsset.minP>([\s\S]*?)<\/cim:GeneratorTypeAsset.minP>/g, obj, "minP", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratorTypeAsset.minQ>([\s\S]*?)<\/cim:GeneratorTypeAsset.minQ>/g, obj, "minQ", base.to_string, sub, context);
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

                var bucket = context.parsed.GeneratorTypeAsset;
                if (null == bucket)
                   context.parsed.GeneratorTypeAsset = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = InfAssets.GenericAssetModelOrMaterial.prototype.export.call (this, obj, false);

                base.export_element (obj, "GeneratorTypeAsset", "maxP", base.from_string, fields);
                base.export_element (obj, "GeneratorTypeAsset", "maxQ", base.from_string, fields);
                base.export_element (obj, "GeneratorTypeAsset", "minP", base.from_string, fields);
                base.export_element (obj, "GeneratorTypeAsset", "minQ", base.from_string, fields);
                base.export_element (obj, "GeneratorTypeAsset", "rDirectSubtrans", base.from_string, fields);
                base.export_element (obj, "GeneratorTypeAsset", "rDirectSync", base.from_string, fields);
                base.export_element (obj, "GeneratorTypeAsset", "rDirectTrans", base.from_string, fields);
                base.export_element (obj, "GeneratorTypeAsset", "rQuadSubtrans", base.from_string, fields);
                base.export_element (obj, "GeneratorTypeAsset", "rQuadSync", base.from_string, fields);
                base.export_element (obj, "GeneratorTypeAsset", "rQuadTrans", base.from_string, fields);
                base.export_element (obj, "GeneratorTypeAsset", "xDirectSubtrans", base.from_string, fields);
                base.export_element (obj, "GeneratorTypeAsset", "xDirectSync", base.from_string, fields);
                base.export_element (obj, "GeneratorTypeAsset", "xDirectTrans", base.from_string, fields);
                base.export_element (obj, "GeneratorTypeAsset", "xQuadSubtrans", base.from_string, fields);
                base.export_element (obj, "GeneratorTypeAsset", "xQuadSync", base.from_string, fields);
                base.export_element (obj, "GeneratorTypeAsset", "xQuadTrans", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GeneratorTypeAsset_collapse" aria-expanded="true" aria-controls="GeneratorTypeAsset_collapse" style="margin-left: 10px;">GeneratorTypeAsset</a></legend>
                    <div id="GeneratorTypeAsset_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + InfAssets.GenericAssetModelOrMaterial.prototype.template.call (this) +
                    `
                    {{#maxP}}<div><b>maxP</b>: {{maxP}}</div>{{/maxP}}
                    {{#maxQ}}<div><b>maxQ</b>: {{maxQ}}</div>{{/maxQ}}
                    {{#minP}}<div><b>minP</b>: {{minP}}</div>{{/minP}}
                    {{#minQ}}<div><b>minQ</b>: {{minQ}}</div>{{/minQ}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GeneratorTypeAsset_collapse" aria-expanded="true" aria-controls="GeneratorTypeAsset_collapse" style="margin-left: 10px;">GeneratorTypeAsset</a></legend>
                    <div id="GeneratorTypeAsset_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + InfAssets.GenericAssetModelOrMaterial.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxP'>maxP: </label><div class='col-sm-8'><input id='maxP' class='form-control' type='text'{{#maxP}} value='{{maxP}}'{{/maxP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxQ'>maxQ: </label><div class='col-sm-8'><input id='maxQ' class='form-control' type='text'{{#maxQ}} value='{{maxQ}}'{{/maxQ}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minP'>minP: </label><div class='col-sm-8'><input id='minP' class='form-control' type='text'{{#minP}} value='{{minP}}'{{/minP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minQ'>minQ: </label><div class='col-sm-8'><input id='minQ' class='form-control' type='text'{{#minQ}} value='{{minQ}}'{{/minQ}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rDirectSubtrans'>rDirectSubtrans: </label><div class='col-sm-8'><input id='rDirectSubtrans' class='form-control' type='text'{{#rDirectSubtrans}} value='{{rDirectSubtrans}}'{{/rDirectSubtrans}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rDirectSync'>rDirectSync: </label><div class='col-sm-8'><input id='rDirectSync' class='form-control' type='text'{{#rDirectSync}} value='{{rDirectSync}}'{{/rDirectSync}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rDirectTrans'>rDirectTrans: </label><div class='col-sm-8'><input id='rDirectTrans' class='form-control' type='text'{{#rDirectTrans}} value='{{rDirectTrans}}'{{/rDirectTrans}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rQuadSubtrans'>rQuadSubtrans: </label><div class='col-sm-8'><input id='rQuadSubtrans' class='form-control' type='text'{{#rQuadSubtrans}} value='{{rQuadSubtrans}}'{{/rQuadSubtrans}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rQuadSync'>rQuadSync: </label><div class='col-sm-8'><input id='rQuadSync' class='form-control' type='text'{{#rQuadSync}} value='{{rQuadSync}}'{{/rQuadSync}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rQuadTrans'>rQuadTrans: </label><div class='col-sm-8'><input id='rQuadTrans' class='form-control' type='text'{{#rQuadTrans}} value='{{rQuadTrans}}'{{/rQuadTrans}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='xDirectSubtrans'>xDirectSubtrans: </label><div class='col-sm-8'><input id='xDirectSubtrans' class='form-control' type='text'{{#xDirectSubtrans}} value='{{xDirectSubtrans}}'{{/xDirectSubtrans}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='xDirectSync'>xDirectSync: </label><div class='col-sm-8'><input id='xDirectSync' class='form-control' type='text'{{#xDirectSync}} value='{{xDirectSync}}'{{/xDirectSync}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='xDirectTrans'>xDirectTrans: </label><div class='col-sm-8'><input id='xDirectTrans' class='form-control' type='text'{{#xDirectTrans}} value='{{xDirectTrans}}'{{/xDirectTrans}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='xQuadSubtrans'>xQuadSubtrans: </label><div class='col-sm-8'><input id='xQuadSubtrans' class='form-control' type='text'{{#xQuadSubtrans}} value='{{xQuadSubtrans}}'{{/xQuadSubtrans}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='xQuadSync'>xQuadSync: </label><div class='col-sm-8'><input id='xQuadSync' class='form-control' type='text'{{#xQuadSync}} value='{{xQuadSync}}'{{/xQuadSync}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='xQuadTrans'>xQuadTrans: </label><div class='col-sm-8'><input id='xQuadTrans' class='form-control' type='text'{{#xQuadTrans}} value='{{xQuadTrans}}'{{/xQuadTrans}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

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
                this._id = template.id;
                var bucket = cim_data.TypeAssetCatalogue;
                if (null == bucket)
                   cim_data.TypeAssetCatalogue = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TypeAssetCatalogue[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TypeAssetCatalogue";
                base.parse_element (/<cim:TypeAssetCatalogue.status>([\s\S]*?)<\/cim:TypeAssetCatalogue.status>/g, obj, "status", base.to_string, sub, context);

                var bucket = context.parsed.TypeAssetCatalogue;
                if (null == bucket)
                   context.parsed.TypeAssetCatalogue = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "TypeAssetCatalogue", "status", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TypeAssetCatalogue_collapse" aria-expanded="true" aria-controls="TypeAssetCatalogue_collapse" style="margin-left: 10px;">TypeAssetCatalogue</a></legend>
                    <div id="TypeAssetCatalogue_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TypeAssetCatalogue_collapse" aria-expanded="true" aria-controls="TypeAssetCatalogue_collapse" style="margin-left: 10px;">TypeAssetCatalogue</a></legend>
                    <div id="TypeAssetCatalogue_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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