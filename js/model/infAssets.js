/**
 * @fileOverview Package infAssets CIM model.
 * @name model/infAssets
 * @author Derrick Oswald
 * @version 1.0
 */
define
(
    ["model/base", "model/assets"],
    /**
     * @summary Package Assets CIM model.
     * @description
     * @name model/assets
     * @exports model/infAssets
     * @version 1.0
     */
    function (base, assets)
    {
        /*
         * Package infAssets
         */

        /**
         * Parse a Cabinet.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Cabinet - the list of Cabinet elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/infAssets
         */
        function parse_Cabinet (context, sub)
        {
            var obj;
            var infos;

            obj = assets.parse_AssetContainer (context, sub);
            obj.cls = "Cabinet";
            infos = context.parsed.Cabinet;
            if (null == infos)
                context.parsed.Cabinet = infos = {};
            infos[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Facility.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Facility - the list of Facility elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/infAssets
         */
        function parse_Facility (context, sub)
        {
            var obj;
            var infos;

            obj = assets.parse_AssetContainer (context, sub);
            obj.cls = "Facility";
            obj.kind = base.parse_element (/<cim:Facility.kind>([\s\S]*?)<\/cim:Facility.kind>/g, sub, context, true);
            infos = context.parsed.Facility;
            if (null == infos)
                context.parsed.Facility = infos = {};
            infos[obj.id] = obj;

            return (obj);
        }


        /**
         * Parse a Pole.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Pole - the list of Pole elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/infAssets
         */
        function parse_Pole (context, sub)
        {
            var obj;
            var infos;

            obj = assets.parse_AssetContainer (context, sub);
            obj.cls = "Pole";
            obj.baseKind = base.parse_attribute (/<cim:Pole.baseKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.breastBlock = base.parse_element (/<cim:Pole.breastBlock>([\s\S]*?)<\/cim:Pole.breastBlock>/g, sub, context, true);
            obj.classification = base.parse_element (/<cim:Pole.classification>([\s\S]*?)<\/cim:Pole.classification>/g, sub, context, true);
            obj.construction = base.parse_element (/<cim:Pole.construction>([\s\S]*?)<\/cim:Pole.construction>/g, sub, context, true);
            obj.diameter = base.parse_element (/<cim:Pole.diameter>([\s\S]*?)<\/cim:Pole.diameter>/g, sub, context, true);
            obj.jpaReference = base.parse_element (/<cim:Pole.jpaReference>([\s\S]*?)<\/cim:Pole.jpaReference>/g, sub, context, true);
            obj.length = base.parse_element (/<cim:Pole.length>([\s\S]*?)<\/cim:Pole.length>/g, sub, context, true);
            obj.preservativeKind = base.parse_attribute (/<cim:Pole.preservativeKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.speciesType = base.parse_element (/<cim:Pole.speciesType>([\s\S]*?)<\/cim:Pole.speciesType>/g, sub, context, true);
            obj.treatedDateTime = base.parse_element (/<cim:Pole.treatedDateTime>([\s\S]*?)<\/cim:Pole.treatedDateTime>/g, sub, context, true);
            obj.treatmentKind = base.parse_attribute (/<cim:Pole.treatmentKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            infos = context.parsed.Pole;
            if (null == infos)
                context.parsed.Pole = infos = {};
            infos[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Streetlight.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Streetlight - the list of Streetlight elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/infAssets
         */
        function parse_Streetlight (context, sub)
        {
            var obj;
            var infos;

            obj = assets.parse_Asset (context, sub);
            obj.cls = "Streetlight";
            obj.armLength = base.parse_element (/<cim:Streetlight.armLength>([\s\S]*?)<\/cim:Streetlight.armLength>/g, sub, context, true);
            obj.lampKind = base.parse_attribute (/<cim:Streetlight.lampKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.lightRating = base.parse_element (/<cim:Streetlight.lightRating>([\s\S]*?)<\/cim:Streetlight.lightRating>/g, sub, context, true);
            obj.Pole = base.parse_attribute (/<cim:Streetlight.Pole\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            infos = context.parsed.Streetlight;
            if (null == infos)
                context.parsed.Streetlight = infos = {};
            infos[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Structure.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Structure - the list of Structure elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/infAssets
         */
        function parse_Structure (context, sub)
        {
            var obj;
            var infos;

            obj = assets.parse_AssetContainer (context, sub);
            obj.cls = "Structure";
            obj.fumigantAppliedDate = base.parse_element (/<cim:Structure.fumigantAppliedDate>([\s\S]*?)<\/cim:Structure.fumigantAppliedDate>/g, sub, context, true);
            obj.fumigantName = base.parse_element (/<cim:Structure.fumigantName>([\s\S]*?)<\/cim:Structure.fumigantName>/g, sub, context, true);
            obj.height = base.parse_element (/<cim:Structure.height>([\s\S]*?)<\/cim:Structure.height>/g, sub, context, true);
            obj.materialKind = base.parse_attribute (/<cim:Structure.materialKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ratedVoltage = base.parse_element (/<cim:Structure.ratedVoltage>([\s\S]*?)<\/cim:Structure.ratedVoltage>/g, sub, context, true);
            obj.removeWeed = base.parse_element (/<cim:Structure.removeWeed>([\s\S]*?)<\/cim:Structure.removeWeed>/g, sub, context, true);
            obj.weedRemovedDate = base.parse_element (/<cim:Structure.weedRemovedDate>([\s\S]*?)<\/cim:Structure.weedRemovedDate>/g, sub, context, true);
            if (null != obj.removeWeed) obj.removeWeed = base.to_boolean (obj.removeWeed);
            infos = context.parsed.Structure;
            if (null == infos)
                context.parsed.Structure = infos = {};
            infos[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a UndergroundStructure.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.UndergroundStructure - the list of UndergroundStructure elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/infAssets
         */
        function parse_UndergroundStructure (context, sub)
        {
            var obj;
            var infos;

            obj = parse_Structure (context, sub);
            obj.cls = "UndergroundStructure";
            obj.hasVentilation = base.parse_element (/<cim:UndergroundStructure.hasVentilation>([\s\S]*?)<\/cim:UndergroundStructure.hasVentilation>/g, sub, context, true);
            obj.kind = base.parse_attribute (/<cim:UndergroundStructure.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.material = base.parse_element (/<cim:UndergroundStructure.material>([\s\S]*?)<\/cim:UndergroundStructure.material>/g, sub, context, true);
            obj.sealingWarrantyExpiresDate = base.parse_element (/<cim:UndergroundStructure.sealingWarrantyExpiresDate>([\s\S]*?)<\/cim:UndergroundStructure.sealingWarrantyExpiresDate>/g, sub, context, true);
            infos = context.parsed.UndergroundStructure;
            if (null == infos)
                context.parsed.UndergroundStructure = infos = {};
            infos[obj.id] = obj;

            return (obj);
        }
        return (
            {
                parse_Cabinet: parse_Cabinet,
                parse_Facility: parse_Facility,
                parse_Pole: parse_Pole,
                parse_Streetlight: parse_Streetlight,
                parse_Structure: parse_Structure,
                parse_UndergroundStructure: parse_UndergroundStructure
            }
        );
    }
);