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
            base.parse_element (/<cim:GeneratorTypeAsset.maxP>([\s\S]*?)<\/cim:GeneratorTypeAsset.maxP>/g, obj, "maxP", base.to_string, sub, context);

            /**
             * Maximum reactive power limit.
             *
             */
            base.parse_element (/<cim:GeneratorTypeAsset.maxQ>([\s\S]*?)<\/cim:GeneratorTypeAsset.maxQ>/g, obj, "maxQ", base.to_string, sub, context);

            /**
             * Minimum real power generated.
             *
             */
            base.parse_element (/<cim:GeneratorTypeAsset.minP>([\s\S]*?)<\/cim:GeneratorTypeAsset.minP>/g, obj, "minP", base.to_string, sub, context);

            /**
             * Minimum reactive power generated.
             *
             */
            base.parse_element (/<cim:GeneratorTypeAsset.minQ>([\s\S]*?)<\/cim:GeneratorTypeAsset.minQ>/g, obj, "minQ", base.to_string, sub, context);

            /**
             * Direct-axis subtransient resistance.
             *
             */
            base.parse_element (/<cim:GeneratorTypeAsset.rDirectSubtrans>([\s\S]*?)<\/cim:GeneratorTypeAsset.rDirectSubtrans>/g, obj, "rDirectSubtrans", base.to_string, sub, context);

            /**
             * Direct-axis synchronous resistance.
             *
             */
            base.parse_element (/<cim:GeneratorTypeAsset.rDirectSync>([\s\S]*?)<\/cim:GeneratorTypeAsset.rDirectSync>/g, obj, "rDirectSync", base.to_string, sub, context);

            /**
             * Direct-axis transient resistance.
             *
             */
            base.parse_element (/<cim:GeneratorTypeAsset.rDirectTrans>([\s\S]*?)<\/cim:GeneratorTypeAsset.rDirectTrans>/g, obj, "rDirectTrans", base.to_string, sub, context);

            /**
             * Quadrature-axis subtransient resistance.
             *
             */
            base.parse_element (/<cim:GeneratorTypeAsset.rQuadSubtrans>([\s\S]*?)<\/cim:GeneratorTypeAsset.rQuadSubtrans>/g, obj, "rQuadSubtrans", base.to_string, sub, context);

            /**
             * Quadrature-axis synchronous resistance.
             *
             */
            base.parse_element (/<cim:GeneratorTypeAsset.rQuadSync>([\s\S]*?)<\/cim:GeneratorTypeAsset.rQuadSync>/g, obj, "rQuadSync", base.to_string, sub, context);

            /**
             * Quadrature-axis transient resistance.
             *
             */
            base.parse_element (/<cim:GeneratorTypeAsset.rQuadTrans>([\s\S]*?)<\/cim:GeneratorTypeAsset.rQuadTrans>/g, obj, "rQuadTrans", base.to_string, sub, context);

            /**
             * Direct-axis subtransient reactance.
             *
             */
            base.parse_element (/<cim:GeneratorTypeAsset.xDirectSubtrans>([\s\S]*?)<\/cim:GeneratorTypeAsset.xDirectSubtrans>/g, obj, "xDirectSubtrans", base.to_string, sub, context);

            /**
             * Direct-axis synchronous reactance.
             *
             */
            base.parse_element (/<cim:GeneratorTypeAsset.xDirectSync>([\s\S]*?)<\/cim:GeneratorTypeAsset.xDirectSync>/g, obj, "xDirectSync", base.to_string, sub, context);

            /**
             * Direct-axis transient reactance.
             *
             */
            base.parse_element (/<cim:GeneratorTypeAsset.xDirectTrans>([\s\S]*?)<\/cim:GeneratorTypeAsset.xDirectTrans>/g, obj, "xDirectTrans", base.to_string, sub, context);

            /**
             * Quadrature-axis subtransient reactance.
             *
             */
            base.parse_element (/<cim:GeneratorTypeAsset.xQuadSubtrans>([\s\S]*?)<\/cim:GeneratorTypeAsset.xQuadSubtrans>/g, obj, "xQuadSubtrans", base.to_string, sub, context);

            /**
             * Quadrature-axis synchronous reactance.
             *
             */
            base.parse_element (/<cim:GeneratorTypeAsset.xQuadSync>([\s\S]*?)<\/cim:GeneratorTypeAsset.xQuadSync>/g, obj, "xQuadSync", base.to_string, sub, context);

            /**
             * Quadrature-axis transient reactance.
             *
             */
            base.parse_element (/<cim:GeneratorTypeAsset.xQuadTrans>([\s\S]*?)<\/cim:GeneratorTypeAsset.xQuadTrans>/g, obj, "xQuadTrans", base.to_string, sub, context);

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
            base.parse_element (/<cim:TypeAssetCatalogue.status>([\s\S]*?)<\/cim:TypeAssetCatalogue.status>/g, obj, "status", base.to_string, sub, context);

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