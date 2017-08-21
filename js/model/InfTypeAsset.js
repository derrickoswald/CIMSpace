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
        function parse_GeneratorTypeAsset (context, sub)
        {
            var obj;
            var bucket;

            obj = InfAssets.parse_GenericAssetModelOrMaterial (context, sub);
            obj.cls = "GeneratorTypeAsset";
            /**
             * Maximum real power limit.
             *
             */
            obj["maxP"] = base.parse_element (/<cim:GeneratorTypeAsset.maxP>([\s\S]*?)<\/cim:GeneratorTypeAsset.maxP>/g, sub, context, true);
            /**
             * Maximum reactive power limit.
             *
             */
            obj["maxQ"] = base.parse_element (/<cim:GeneratorTypeAsset.maxQ>([\s\S]*?)<\/cim:GeneratorTypeAsset.maxQ>/g, sub, context, true);
            /**
             * Minimum real power generated.
             *
             */
            obj["minP"] = base.parse_element (/<cim:GeneratorTypeAsset.minP>([\s\S]*?)<\/cim:GeneratorTypeAsset.minP>/g, sub, context, true);
            /**
             * Minimum reactive power generated.
             *
             */
            obj["minQ"] = base.parse_element (/<cim:GeneratorTypeAsset.minQ>([\s\S]*?)<\/cim:GeneratorTypeAsset.minQ>/g, sub, context, true);
            /**
             * Direct-axis subtransient resistance.
             *
             */
            obj["rDirectSubtrans"] = base.parse_element (/<cim:GeneratorTypeAsset.rDirectSubtrans>([\s\S]*?)<\/cim:GeneratorTypeAsset.rDirectSubtrans>/g, sub, context, true);
            /**
             * Direct-axis synchronous resistance.
             *
             */
            obj["rDirectSync"] = base.parse_element (/<cim:GeneratorTypeAsset.rDirectSync>([\s\S]*?)<\/cim:GeneratorTypeAsset.rDirectSync>/g, sub, context, true);
            /**
             * Direct-axis transient resistance.
             *
             */
            obj["rDirectTrans"] = base.parse_element (/<cim:GeneratorTypeAsset.rDirectTrans>([\s\S]*?)<\/cim:GeneratorTypeAsset.rDirectTrans>/g, sub, context, true);
            /**
             * Quadrature-axis subtransient resistance.
             *
             */
            obj["rQuadSubtrans"] = base.parse_element (/<cim:GeneratorTypeAsset.rQuadSubtrans>([\s\S]*?)<\/cim:GeneratorTypeAsset.rQuadSubtrans>/g, sub, context, true);
            /**
             * Quadrature-axis synchronous resistance.
             *
             */
            obj["rQuadSync"] = base.parse_element (/<cim:GeneratorTypeAsset.rQuadSync>([\s\S]*?)<\/cim:GeneratorTypeAsset.rQuadSync>/g, sub, context, true);
            /**
             * Quadrature-axis transient resistance.
             *
             */
            obj["rQuadTrans"] = base.parse_element (/<cim:GeneratorTypeAsset.rQuadTrans>([\s\S]*?)<\/cim:GeneratorTypeAsset.rQuadTrans>/g, sub, context, true);
            /**
             * Direct-axis subtransient reactance.
             *
             */
            obj["xDirectSubtrans"] = base.parse_element (/<cim:GeneratorTypeAsset.xDirectSubtrans>([\s\S]*?)<\/cim:GeneratorTypeAsset.xDirectSubtrans>/g, sub, context, true);
            /**
             * Direct-axis synchronous reactance.
             *
             */
            obj["xDirectSync"] = base.parse_element (/<cim:GeneratorTypeAsset.xDirectSync>([\s\S]*?)<\/cim:GeneratorTypeAsset.xDirectSync>/g, sub, context, true);
            /**
             * Direct-axis transient reactance.
             *
             */
            obj["xDirectTrans"] = base.parse_element (/<cim:GeneratorTypeAsset.xDirectTrans>([\s\S]*?)<\/cim:GeneratorTypeAsset.xDirectTrans>/g, sub, context, true);
            /**
             * Quadrature-axis subtransient reactance.
             *
             */
            obj["xQuadSubtrans"] = base.parse_element (/<cim:GeneratorTypeAsset.xQuadSubtrans>([\s\S]*?)<\/cim:GeneratorTypeAsset.xQuadSubtrans>/g, sub, context, true);
            /**
             * Quadrature-axis synchronous reactance.
             *
             */
            obj["xQuadSync"] = base.parse_element (/<cim:GeneratorTypeAsset.xQuadSync>([\s\S]*?)<\/cim:GeneratorTypeAsset.xQuadSync>/g, sub, context, true);
            /**
             * Quadrature-axis transient reactance.
             *
             */
            obj["xQuadTrans"] = base.parse_element (/<cim:GeneratorTypeAsset.xQuadTrans>([\s\S]*?)<\/cim:GeneratorTypeAsset.xQuadTrans>/g, sub, context, true);
            bucket = context.parsed.GeneratorTypeAsset;
            if (null == bucket)
                context.parsed.GeneratorTypeAsset = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Catalogue of generic types of assets (TypeAsset) that may be used for design purposes.
         *
         * It is not associated with a particular manufacturer.
         *
         */
        function parse_TypeAssetCatalogue (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TypeAssetCatalogue";
            obj["status"] = base.parse_element (/<cim:TypeAssetCatalogue.status>([\s\S]*?)<\/cim:TypeAssetCatalogue.status>/g, sub, context, true);
            bucket = context.parsed.TypeAssetCatalogue;
            if (null == bucket)
                context.parsed.TypeAssetCatalogue = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_GeneratorTypeAsset: parse_GeneratorTypeAsset,
                parse_TypeAssetCatalogue: parse_TypeAssetCatalogue
            }
        );
    }
);