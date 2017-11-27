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
        }

        return (
            {
                GeneratorTypeAsset: GeneratorTypeAsset,
                TypeAssetCatalogue: TypeAssetCatalogue
            }
        );
    }
);