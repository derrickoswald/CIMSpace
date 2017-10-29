define
(
    ["model/base", "model/Assets", "model/Common", "model/Core"],
    /**
     * The package is used to define asset-level models for objects.
     *
     * Assets may be comprised of other assets and may have relationships to other assets. Assets also have owners and values. Assets may also have a relationship to a PowerSystemResource in the Wires model.
     *
     */
    function (base, Assets, Common, Core)
    {

        /**
         * Kind of fill for Joint.
         *
         */
        function parse_JointFillKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "JointFillKind";
            base.parse_element (/<cim:JointFillKind.noFillPrefab>([\s\S]*?)<\/cim:JointFillKind.noFillPrefab>/g, obj, "noFillPrefab", base.to_string, sub, context);
            base.parse_element (/<cim:JointFillKind.airNoFilling>([\s\S]*?)<\/cim:JointFillKind.airNoFilling>/g, obj, "airNoFilling", base.to_string, sub, context);
            base.parse_element (/<cim:JointFillKind.petrolatum>([\s\S]*?)<\/cim:JointFillKind.petrolatum>/g, obj, "petrolatum", base.to_string, sub, context);
            base.parse_element (/<cim:JointFillKind.asphaltic>([\s\S]*?)<\/cim:JointFillKind.asphaltic>/g, obj, "asphaltic", base.to_string, sub, context);
            base.parse_element (/<cim:JointFillKind.oil>([\s\S]*?)<\/cim:JointFillKind.oil>/g, obj, "oil", base.to_string, sub, context);
            base.parse_element (/<cim:JointFillKind.bluefill254>([\s\S]*?)<\/cim:JointFillKind.bluefill254>/g, obj, "bluefill254", base.to_string, sub, context);
            base.parse_element (/<cim:JointFillKind.noVoid>([\s\S]*?)<\/cim:JointFillKind.noVoid>/g, obj, "noVoid", base.to_string, sub, context);
            base.parse_element (/<cim:JointFillKind.epoxy>([\s\S]*?)<\/cim:JointFillKind.epoxy>/g, obj, "epoxy", base.to_string, sub, context);
            base.parse_element (/<cim:JointFillKind.insoluseal>([\s\S]*?)<\/cim:JointFillKind.insoluseal>/g, obj, "insoluseal", base.to_string, sub, context);
            base.parse_element (/<cim:JointFillKind.other>([\s\S]*?)<\/cim:JointFillKind.other>/g, obj, "other", base.to_string, sub, context);
            bucket = context.parsed.JointFillKind;
            if (null == bucket)
                context.parsed.JointFillKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_JointFillKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "JointFillKind", "noFillPrefab", base.from_string, fields);
            base.export_element (obj, "JointFillKind", "airNoFilling", base.from_string, fields);
            base.export_element (obj, "JointFillKind", "petrolatum", base.from_string, fields);
            base.export_element (obj, "JointFillKind", "asphaltic", base.from_string, fields);
            base.export_element (obj, "JointFillKind", "oil", base.from_string, fields);
            base.export_element (obj, "JointFillKind", "bluefill254", base.from_string, fields);
            base.export_element (obj, "JointFillKind", "noVoid", base.from_string, fields);
            base.export_element (obj, "JointFillKind", "epoxy", base.from_string, fields);
            base.export_element (obj, "JointFillKind", "insoluseal", base.from_string, fields);
            base.export_element (obj, "JointFillKind", "other", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * FACTS device asset.
         *
         */
        function parse_FACTSDevice (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_Asset (context, sub);
            obj.cls = "FACTSDevice";
            base.parse_element (/<cim:FACTSDevice.kind>([\s\S]*?)<\/cim:FACTSDevice.kind>/g, obj, "kind", base.to_string, sub, context);
            bucket = context.parsed.FACTSDevice;
            if (null == bucket)
                context.parsed.FACTSDevice = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_FACTSDevice (obj, exporters, full)
        {
            var fields = exporters["Asset"](obj, exporters, false);

            base.export_element (obj, "FACTSDevice", "kind", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Underground structure.
         *
         */
        function parse_UndergroundStructure (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Structure (context, sub);
            obj.cls = "UndergroundStructure";
            base.parse_element (/<cim:UndergroundStructure.hasVentilation>([\s\S]*?)<\/cim:UndergroundStructure.hasVentilation>/g, obj, "hasVentilation", base.to_boolean, sub, context);
            base.parse_element (/<cim:UndergroundStructure.kind>([\s\S]*?)<\/cim:UndergroundStructure.kind>/g, obj, "kind", base.to_string, sub, context);
            base.parse_element (/<cim:UndergroundStructure.material>([\s\S]*?)<\/cim:UndergroundStructure.material>/g, obj, "material", base.to_string, sub, context);
            base.parse_element (/<cim:UndergroundStructure.sealingWarrantyExpiresDate>([\s\S]*?)<\/cim:UndergroundStructure.sealingWarrantyExpiresDate>/g, obj, "sealingWarrantyExpiresDate", base.to_string, sub, context);
            bucket = context.parsed.UndergroundStructure;
            if (null == bucket)
                context.parsed.UndergroundStructure = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_UndergroundStructure (obj, exporters, full)
        {
            var fields = exporters["Structure"](obj, exporters, false);

            base.export_element (obj, "UndergroundStructure", "hasVentilation", base.from_boolean, fields);
            base.export_element (obj, "UndergroundStructure", "kind", base.from_string, fields);
            base.export_element (obj, "UndergroundStructure", "material", base.from_string, fields);
            base.export_element (obj, "UndergroundStructure", "sealingWarrantyExpiresDate", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Insulation kind for bushings.
         *
         */
        function parse_BushingInsulationKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "BushingInsulationKind";
            base.parse_element (/<cim:BushingInsulationKind.paperoil>([\s\S]*?)<\/cim:BushingInsulationKind.paperoil>/g, obj, "paperoil", base.to_string, sub, context);
            base.parse_element (/<cim:BushingInsulationKind.compound>([\s\S]*?)<\/cim:BushingInsulationKind.compound>/g, obj, "compound", base.to_string, sub, context);
            base.parse_element (/<cim:BushingInsulationKind.solidPorcelain>([\s\S]*?)<\/cim:BushingInsulationKind.solidPorcelain>/g, obj, "solidPorcelain", base.to_string, sub, context);
            base.parse_element (/<cim:BushingInsulationKind.other>([\s\S]*?)<\/cim:BushingInsulationKind.other>/g, obj, "other", base.to_string, sub, context);
            bucket = context.parsed.BushingInsulationKind;
            if (null == bucket)
                context.parsed.BushingInsulationKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_BushingInsulationKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "BushingInsulationKind", "paperoil", base.from_string, fields);
            base.export_element (obj, "BushingInsulationKind", "compound", base.from_string, fields);
            base.export_element (obj, "BushingInsulationKind", "solidPorcelain", base.from_string, fields);
            base.export_element (obj, "BushingInsulationKind", "other", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Specification can be used for various purposes relative to an asset, a logical device (PowerSystemResource), location, etc.
         *
         * Examples include documents supplied by manufacturers such as asset installation instructions, asset maintenance instructions, etc.
         *
         */
        function parse_Specification (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "Specification";
            bucket = context.parsed.Specification;
            if (null == bucket)
                context.parsed.Specification = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Specification (obj, exporters, full)
        {
            var fields = exporters["Document"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * An event where an asset has failed to perform its functions within specified parameters.
         *
         */
        function parse_FailureEvent (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_ActivityRecord (context, sub);
            obj.cls = "FailureEvent";
            base.parse_element (/<cim:FailureEvent.corporateCode>([\s\S]*?)<\/cim:FailureEvent.corporateCode>/g, obj, "corporateCode", base.to_string, sub, context);
            base.parse_element (/<cim:FailureEvent.failureIsolationMethod>([\s\S]*?)<\/cim:FailureEvent.failureIsolationMethod>/g, obj, "failureIsolationMethod", base.to_string, sub, context);
            base.parse_element (/<cim:FailureEvent.faultLocatingMethod>([\s\S]*?)<\/cim:FailureEvent.faultLocatingMethod>/g, obj, "faultLocatingMethod", base.to_string, sub, context);
            base.parse_element (/<cim:FailureEvent.location>([\s\S]*?)<\/cim:FailureEvent.location>/g, obj, "location", base.to_string, sub, context);
            bucket = context.parsed.FailureEvent;
            if (null == bucket)
                context.parsed.FailureEvent = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_FailureEvent (obj, exporters, full)
        {
            var fields = exporters["ActivityRecord"](obj, exporters, false);

            base.export_element (obj, "FailureEvent", "corporateCode", base.from_string, fields);
            base.export_element (obj, "FailureEvent", "failureIsolationMethod", base.from_string, fields);
            base.export_element (obj, "FailureEvent", "faultLocatingMethod", base.from_string, fields);
            base.export_element (obj, "FailureEvent", "location", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Kind of anchor.
         *
         */
        function parse_AnchorKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AnchorKind";
            base.parse_element (/<cim:AnchorKind.concrete>([\s\S]*?)<\/cim:AnchorKind.concrete>/g, obj, "concrete", base.to_string, sub, context);
            base.parse_element (/<cim:AnchorKind.helix>([\s\S]*?)<\/cim:AnchorKind.helix>/g, obj, "helix", base.to_string, sub, context);
            base.parse_element (/<cim:AnchorKind.multiHelix>([\s\S]*?)<\/cim:AnchorKind.multiHelix>/g, obj, "multiHelix", base.to_string, sub, context);
            base.parse_element (/<cim:AnchorKind.rod>([\s\S]*?)<\/cim:AnchorKind.rod>/g, obj, "rod", base.to_string, sub, context);
            base.parse_element (/<cim:AnchorKind.screw>([\s\S]*?)<\/cim:AnchorKind.screw>/g, obj, "screw", base.to_string, sub, context);
            base.parse_element (/<cim:AnchorKind.unknown>([\s\S]*?)<\/cim:AnchorKind.unknown>/g, obj, "unknown", base.to_string, sub, context);
            base.parse_element (/<cim:AnchorKind.other>([\s\S]*?)<\/cim:AnchorKind.other>/g, obj, "other", base.to_string, sub, context);
            bucket = context.parsed.AnchorKind;
            if (null == bucket)
                context.parsed.AnchorKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AnchorKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "AnchorKind", "concrete", base.from_string, fields);
            base.export_element (obj, "AnchorKind", "helix", base.from_string, fields);
            base.export_element (obj, "AnchorKind", "multiHelix", base.from_string, fields);
            base.export_element (obj, "AnchorKind", "rod", base.from_string, fields);
            base.export_element (obj, "AnchorKind", "screw", base.from_string, fields);
            base.export_element (obj, "AnchorKind", "unknown", base.from_string, fields);
            base.export_element (obj, "AnchorKind", "other", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Construction holding assets such as conductors, transformers, switchgear, etc.
         *
         * Where applicable, number of conductors can be derived from the number of associated wire spacing instances.
         *
         */
        function parse_Structure (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetContainer (context, sub);
            obj.cls = "Structure";
            base.parse_element (/<cim:Structure.fumigantAppliedDate>([\s\S]*?)<\/cim:Structure.fumigantAppliedDate>/g, obj, "fumigantAppliedDate", base.to_string, sub, context);
            base.parse_element (/<cim:Structure.fumigantName>([\s\S]*?)<\/cim:Structure.fumigantName>/g, obj, "fumigantName", base.to_string, sub, context);
            base.parse_element (/<cim:Structure.height>([\s\S]*?)<\/cim:Structure.height>/g, obj, "height", base.to_string, sub, context);
            base.parse_element (/<cim:Structure.materialKind>([\s\S]*?)<\/cim:Structure.materialKind>/g, obj, "materialKind", base.to_string, sub, context);
            base.parse_element (/<cim:Structure.ratedVoltage>([\s\S]*?)<\/cim:Structure.ratedVoltage>/g, obj, "ratedVoltage", base.to_string, sub, context);
            base.parse_element (/<cim:Structure.removeWeed>([\s\S]*?)<\/cim:Structure.removeWeed>/g, obj, "removeWeed", base.to_boolean, sub, context);
            base.parse_element (/<cim:Structure.weedRemovedDate>([\s\S]*?)<\/cim:Structure.weedRemovedDate>/g, obj, "weedRemovedDate", base.to_string, sub, context);
            bucket = context.parsed.Structure;
            if (null == bucket)
                context.parsed.Structure = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Structure (obj, exporters, full)
        {
            var fields = exporters["AssetContainer"](obj, exporters, false);

            base.export_element (obj, "Structure", "fumigantAppliedDate", base.from_string, fields);
            base.export_element (obj, "Structure", "fumigantName", base.from_string, fields);
            base.export_element (obj, "Structure", "height", base.from_string, fields);
            base.export_element (obj, "Structure", "materialKind", base.from_string, fields);
            base.export_element (obj, "Structure", "ratedVoltage", base.from_string, fields);
            base.export_element (obj, "Structure", "removeWeed", base.from_boolean, fields);
            base.export_element (obj, "Structure", "weedRemovedDate", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Pole asset.
         *
         */
        function parse_Pole (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Structure (context, sub);
            obj.cls = "Pole";
            base.parse_element (/<cim:Pole.baseKind>([\s\S]*?)<\/cim:Pole.baseKind>/g, obj, "baseKind", base.to_string, sub, context);
            base.parse_element (/<cim:Pole.breastBlock>([\s\S]*?)<\/cim:Pole.breastBlock>/g, obj, "breastBlock", base.to_boolean, sub, context);
            base.parse_element (/<cim:Pole.classification>([\s\S]*?)<\/cim:Pole.classification>/g, obj, "classification", base.to_string, sub, context);
            base.parse_element (/<cim:Pole.construction>([\s\S]*?)<\/cim:Pole.construction>/g, obj, "construction", base.to_string, sub, context);
            base.parse_element (/<cim:Pole.diameter>([\s\S]*?)<\/cim:Pole.diameter>/g, obj, "diameter", base.to_string, sub, context);
            base.parse_element (/<cim:Pole.jpaReference>([\s\S]*?)<\/cim:Pole.jpaReference>/g, obj, "jpaReference", base.to_string, sub, context);
            base.parse_element (/<cim:Pole.length>([\s\S]*?)<\/cim:Pole.length>/g, obj, "length", base.to_string, sub, context);
            base.parse_element (/<cim:Pole.preservativeKind>([\s\S]*?)<\/cim:Pole.preservativeKind>/g, obj, "preservativeKind", base.to_string, sub, context);
            base.parse_element (/<cim:Pole.speciesType>([\s\S]*?)<\/cim:Pole.speciesType>/g, obj, "speciesType", base.to_string, sub, context);
            base.parse_element (/<cim:Pole.treatedDateTime>([\s\S]*?)<\/cim:Pole.treatedDateTime>/g, obj, "treatedDateTime", base.to_datetime, sub, context);
            base.parse_element (/<cim:Pole.treatmentKind>([\s\S]*?)<\/cim:Pole.treatmentKind>/g, obj, "treatmentKind", base.to_string, sub, context);
            bucket = context.parsed.Pole;
            if (null == bucket)
                context.parsed.Pole = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Pole (obj, exporters, full)
        {
            var fields = exporters["Structure"](obj, exporters, false);

            base.export_element (obj, "Pole", "baseKind", base.from_string, fields);
            base.export_element (obj, "Pole", "breastBlock", base.from_boolean, fields);
            base.export_element (obj, "Pole", "classification", base.from_string, fields);
            base.export_element (obj, "Pole", "construction", base.from_string, fields);
            base.export_element (obj, "Pole", "diameter", base.from_string, fields);
            base.export_element (obj, "Pole", "jpaReference", base.from_string, fields);
            base.export_element (obj, "Pole", "length", base.from_string, fields);
            base.export_element (obj, "Pole", "preservativeKind", base.from_string, fields);
            base.export_element (obj, "Pole", "speciesType", base.from_string, fields);
            base.export_element (obj, "Pole", "treatedDateTime", base.from_datetime, fields);
            base.export_element (obj, "Pole", "treatmentKind", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Kind of treatment for poles.
         *
         */
        function parse_PoleTreatmentKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PoleTreatmentKind";
            base.parse_element (/<cim:PoleTreatmentKind.full>([\s\S]*?)<\/cim:PoleTreatmentKind.full>/g, obj, "full", base.to_string, sub, context);
            base.parse_element (/<cim:PoleTreatmentKind.butt>([\s\S]*?)<\/cim:PoleTreatmentKind.butt>/g, obj, "butt", base.to_string, sub, context);
            base.parse_element (/<cim:PoleTreatmentKind.natural>([\s\S]*?)<\/cim:PoleTreatmentKind.natural>/g, obj, "natural", base.to_string, sub, context);
            base.parse_element (/<cim:PoleTreatmentKind.grayStain>([\s\S]*?)<\/cim:PoleTreatmentKind.grayStain>/g, obj, "grayStain", base.to_string, sub, context);
            base.parse_element (/<cim:PoleTreatmentKind.greenStain>([\s\S]*?)<\/cim:PoleTreatmentKind.greenStain>/g, obj, "greenStain", base.to_string, sub, context);
            base.parse_element (/<cim:PoleTreatmentKind.penta>([\s\S]*?)<\/cim:PoleTreatmentKind.penta>/g, obj, "penta", base.to_string, sub, context);
            base.parse_element (/<cim:PoleTreatmentKind.unknown>([\s\S]*?)<\/cim:PoleTreatmentKind.unknown>/g, obj, "unknown", base.to_string, sub, context);
            base.parse_element (/<cim:PoleTreatmentKind.other>([\s\S]*?)<\/cim:PoleTreatmentKind.other>/g, obj, "other", base.to_string, sub, context);
            bucket = context.parsed.PoleTreatmentKind;
            if (null == bucket)
                context.parsed.PoleTreatmentKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PoleTreatmentKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "PoleTreatmentKind", "full", base.from_string, fields);
            base.export_element (obj, "PoleTreatmentKind", "butt", base.from_string, fields);
            base.export_element (obj, "PoleTreatmentKind", "natural", base.from_string, fields);
            base.export_element (obj, "PoleTreatmentKind", "grayStain", base.from_string, fields);
            base.export_element (obj, "PoleTreatmentKind", "greenStain", base.from_string, fields);
            base.export_element (obj, "PoleTreatmentKind", "penta", base.from_string, fields);
            base.export_element (obj, "PoleTreatmentKind", "unknown", base.from_string, fields);
            base.export_element (obj, "PoleTreatmentKind", "other", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Generic asset or material item that may be used for planning, work or design purposes.
         *
         */
        function parse_GenericAssetModelOrMaterial (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetModel (context, sub);
            obj.cls = "GenericAssetModelOrMaterial";
            base.parse_element (/<cim:GenericAssetModelOrMaterial.estimatedUnitCost>([\s\S]*?)<\/cim:GenericAssetModelOrMaterial.estimatedUnitCost>/g, obj, "estimatedUnitCost", base.to_string, sub, context);
            base.parse_element (/<cim:GenericAssetModelOrMaterial.quantity>([\s\S]*?)<\/cim:GenericAssetModelOrMaterial.quantity>/g, obj, "quantity", base.to_string, sub, context);
            base.parse_element (/<cim:GenericAssetModelOrMaterial.stockItem>([\s\S]*?)<\/cim:GenericAssetModelOrMaterial.stockItem>/g, obj, "stockItem", base.to_boolean, sub, context);
            base.parse_attribute (/<cim:GenericAssetModelOrMaterial.CUWorkEquipmentAsset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CUWorkEquipmentAsset", sub, context);
            base.parse_attribute (/<cim:GenericAssetModelOrMaterial.TypeAssetCatalogue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TypeAssetCatalogue", sub, context);
            base.parse_attribute (/<cim:GenericAssetModelOrMaterial.CUAsset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CUAsset", sub, context);
            bucket = context.parsed.GenericAssetModelOrMaterial;
            if (null == bucket)
                context.parsed.GenericAssetModelOrMaterial = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GenericAssetModelOrMaterial (obj, exporters, full)
        {
            var fields = exporters["AssetModel"](obj, exporters, false);

            base.export_element (obj, "GenericAssetModelOrMaterial", "estimatedUnitCost", base.from_string, fields);
            base.export_element (obj, "GenericAssetModelOrMaterial", "quantity", base.from_string, fields);
            base.export_element (obj, "GenericAssetModelOrMaterial", "stockItem", base.from_boolean, fields);
            base.export_attribute (obj, "GenericAssetModelOrMaterial", "CUWorkEquipmentAsset", fields);
            base.export_attribute (obj, "GenericAssetModelOrMaterial", "TypeAssetCatalogue", fields);
            base.export_attribute (obj, "GenericAssetModelOrMaterial", "CUAsset", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Kind of cooling.
         *
         */
        function parse_CoolingKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CoolingKind";
            base.parse_element (/<cim:CoolingKind.selfCooling>([\s\S]*?)<\/cim:CoolingKind.selfCooling>/g, obj, "selfCooling", base.to_string, sub, context);
            base.parse_element (/<cim:CoolingKind.forcedAir>([\s\S]*?)<\/cim:CoolingKind.forcedAir>/g, obj, "forcedAir", base.to_string, sub, context);
            base.parse_element (/<cim:CoolingKind.forcedOilAndAir>([\s\S]*?)<\/cim:CoolingKind.forcedOilAndAir>/g, obj, "forcedOilAndAir", base.to_string, sub, context);
            base.parse_element (/<cim:CoolingKind.other>([\s\S]*?)<\/cim:CoolingKind.other>/g, obj, "other", base.to_string, sub, context);
            bucket = context.parsed.CoolingKind;
            if (null == bucket)
                context.parsed.CoolingKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CoolingKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "CoolingKind", "selfCooling", base.from_string, fields);
            base.export_element (obj, "CoolingKind", "forcedAir", base.from_string, fields);
            base.export_element (obj, "CoolingKind", "forcedOilAndAir", base.from_string, fields);
            base.export_element (obj, "CoolingKind", "other", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * There are often stages of power which are associated with stages of cooling.
         *
         * For instance, a transformer may be rated 121kV on the primary, 15kV on the secondary and 4kV on the tertiary winding. These are voltage ratings and the power ratings are generally the same for all three windings and independent of the voltage ratings, there are instances where the tertiary may have a lower power rating.
         *
         */
        function parse_CoolingPowerRating (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "CoolingPowerRating";
            base.parse_element (/<cim:CoolingPowerRating.coolingKind>([\s\S]*?)<\/cim:CoolingPowerRating.coolingKind>/g, obj, "coolingKind", base.to_string, sub, context);
            base.parse_element (/<cim:CoolingPowerRating.powerRating>([\s\S]*?)<\/cim:CoolingPowerRating.powerRating>/g, obj, "powerRating", base.to_string, sub, context);
            base.parse_element (/<cim:CoolingPowerRating.stage>([\s\S]*?)<\/cim:CoolingPowerRating.stage>/g, obj, "stage", base.to_string, sub, context);
            bucket = context.parsed.CoolingPowerRating;
            if (null == bucket)
                context.parsed.CoolingPowerRating = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CoolingPowerRating (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "CoolingPowerRating", "coolingKind", base.from_string, fields);
            base.export_element (obj, "CoolingPowerRating", "powerRating", base.from_string, fields);
            base.export_element (obj, "CoolingPowerRating", "stage", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Kind of structure support.
         *
         */
        function parse_StructureSupportKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "StructureSupportKind";
            base.parse_element (/<cim:StructureSupportKind.anchor>([\s\S]*?)<\/cim:StructureSupportKind.anchor>/g, obj, "anchor", base.to_string, sub, context);
            base.parse_element (/<cim:StructureSupportKind.guy>([\s\S]*?)<\/cim:StructureSupportKind.guy>/g, obj, "guy", base.to_string, sub, context);
            bucket = context.parsed.StructureSupportKind;
            if (null == bucket)
                context.parsed.StructureSupportKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_StructureSupportKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "StructureSupportKind", "anchor", base.from_string, fields);
            base.export_element (obj, "StructureSupportKind", "guy", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Various current financial properties associated with a particular asset.
         *
         * Historical properties may be determined by ActivityRecords associated with the asset.
         *
         */
        function parse_FinancialInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "FinancialInfo";
            base.parse_element (/<cim:FinancialInfo.account>([\s\S]*?)<\/cim:FinancialInfo.account>/g, obj, "account", base.to_string, sub, context);
            base.parse_element (/<cim:FinancialInfo.actualPurchaseCost>([\s\S]*?)<\/cim:FinancialInfo.actualPurchaseCost>/g, obj, "actualPurchaseCost", base.to_string, sub, context);
            base.parse_element (/<cim:FinancialInfo.costDescription>([\s\S]*?)<\/cim:FinancialInfo.costDescription>/g, obj, "costDescription", base.to_string, sub, context);
            base.parse_element (/<cim:FinancialInfo.costType>([\s\S]*?)<\/cim:FinancialInfo.costType>/g, obj, "costType", base.to_string, sub, context);
            base.parse_element (/<cim:FinancialInfo.financialValue>([\s\S]*?)<\/cim:FinancialInfo.financialValue>/g, obj, "financialValue", base.to_string, sub, context);
            base.parse_element (/<cim:FinancialInfo.plantTransferDateTime>([\s\S]*?)<\/cim:FinancialInfo.plantTransferDateTime>/g, obj, "plantTransferDateTime", base.to_datetime, sub, context);
            base.parse_element (/<cim:FinancialInfo.purchaseDateTime>([\s\S]*?)<\/cim:FinancialInfo.purchaseDateTime>/g, obj, "purchaseDateTime", base.to_datetime, sub, context);
            base.parse_element (/<cim:FinancialInfo.purchaseOrderNumber>([\s\S]*?)<\/cim:FinancialInfo.purchaseOrderNumber>/g, obj, "purchaseOrderNumber", base.to_string, sub, context);
            base.parse_element (/<cim:FinancialInfo.quantity>([\s\S]*?)<\/cim:FinancialInfo.quantity>/g, obj, "quantity", base.to_string, sub, context);
            base.parse_element (/<cim:FinancialInfo.valueDateTime>([\s\S]*?)<\/cim:FinancialInfo.valueDateTime>/g, obj, "valueDateTime", base.to_datetime, sub, context);
            base.parse_element (/<cim:FinancialInfo.warrantyEndDateTime>([\s\S]*?)<\/cim:FinancialInfo.warrantyEndDateTime>/g, obj, "warrantyEndDateTime", base.to_datetime, sub, context);
            base.parse_attribute (/<cim:FinancialInfo.Asset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context);
            bucket = context.parsed.FinancialInfo;
            if (null == bucket)
                context.parsed.FinancialInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_FinancialInfo (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "FinancialInfo", "account", base.from_string, fields);
            base.export_element (obj, "FinancialInfo", "actualPurchaseCost", base.from_string, fields);
            base.export_element (obj, "FinancialInfo", "costDescription", base.from_string, fields);
            base.export_element (obj, "FinancialInfo", "costType", base.from_string, fields);
            base.export_element (obj, "FinancialInfo", "financialValue", base.from_string, fields);
            base.export_element (obj, "FinancialInfo", "plantTransferDateTime", base.from_datetime, fields);
            base.export_element (obj, "FinancialInfo", "purchaseDateTime", base.from_datetime, fields);
            base.export_element (obj, "FinancialInfo", "purchaseOrderNumber", base.from_string, fields);
            base.export_element (obj, "FinancialInfo", "quantity", base.from_string, fields);
            base.export_element (obj, "FinancialInfo", "valueDateTime", base.from_datetime, fields);
            base.export_element (obj, "FinancialInfo", "warrantyEndDateTime", base.from_datetime, fields);
            base.export_attribute (obj, "FinancialInfo", "Asset", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Preservative kind for poles.
         *
         */
        function parse_PolePreservativeKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PolePreservativeKind";
            base.parse_element (/<cim:PolePreservativeKind.creosote>([\s\S]*?)<\/cim:PolePreservativeKind.creosote>/g, obj, "creosote", base.to_string, sub, context);
            base.parse_element (/<cim:PolePreservativeKind.cellon>([\s\S]*?)<\/cim:PolePreservativeKind.cellon>/g, obj, "cellon", base.to_string, sub, context);
            base.parse_element (/<cim:PolePreservativeKind.naphthena>([\s\S]*?)<\/cim:PolePreservativeKind.naphthena>/g, obj, "naphthena", base.to_string, sub, context);
            base.parse_element (/<cim:PolePreservativeKind.penta>([\s\S]*?)<\/cim:PolePreservativeKind.penta>/g, obj, "penta", base.to_string, sub, context);
            base.parse_element (/<cim:PolePreservativeKind.chemonite>([\s\S]*?)<\/cim:PolePreservativeKind.chemonite>/g, obj, "chemonite", base.to_string, sub, context);
            base.parse_element (/<cim:PolePreservativeKind.unknown>([\s\S]*?)<\/cim:PolePreservativeKind.unknown>/g, obj, "unknown", base.to_string, sub, context);
            base.parse_element (/<cim:PolePreservativeKind.other>([\s\S]*?)<\/cim:PolePreservativeKind.other>/g, obj, "other", base.to_string, sub, context);
            bucket = context.parsed.PolePreservativeKind;
            if (null == bucket)
                context.parsed.PolePreservativeKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PolePreservativeKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "PolePreservativeKind", "creosote", base.from_string, fields);
            base.export_element (obj, "PolePreservativeKind", "cellon", base.from_string, fields);
            base.export_element (obj, "PolePreservativeKind", "naphthena", base.from_string, fields);
            base.export_element (obj, "PolePreservativeKind", "penta", base.from_string, fields);
            base.export_element (obj, "PolePreservativeKind", "chemonite", base.from_string, fields);
            base.export_element (obj, "PolePreservativeKind", "unknown", base.from_string, fields);
            base.export_element (obj, "PolePreservativeKind", "other", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Support for structure assets.
         *
         */
        function parse_StructureSupport (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_Asset (context, sub);
            obj.cls = "StructureSupport";
            base.parse_element (/<cim:StructureSupport.anchorKind>([\s\S]*?)<\/cim:StructureSupport.anchorKind>/g, obj, "anchorKind", base.to_string, sub, context);
            base.parse_element (/<cim:StructureSupport.anchorRodCount>([\s\S]*?)<\/cim:StructureSupport.anchorRodCount>/g, obj, "anchorRodCount", base.to_string, sub, context);
            base.parse_element (/<cim:StructureSupport.anchorRodLength>([\s\S]*?)<\/cim:StructureSupport.anchorRodLength>/g, obj, "anchorRodLength", base.to_string, sub, context);
            base.parse_element (/<cim:StructureSupport.direction>([\s\S]*?)<\/cim:StructureSupport.direction>/g, obj, "direction", base.to_string, sub, context);
            base.parse_element (/<cim:StructureSupport.kind>([\s\S]*?)<\/cim:StructureSupport.kind>/g, obj, "kind", base.to_string, sub, context);
            base.parse_element (/<cim:StructureSupport.length>([\s\S]*?)<\/cim:StructureSupport.length>/g, obj, "length", base.to_string, sub, context);
            base.parse_element (/<cim:StructureSupport.size>([\s\S]*?)<\/cim:StructureSupport.size>/g, obj, "size", base.to_string, sub, context);
            base.parse_attribute (/<cim:StructureSupport.SecuredStructure\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SecuredStructure", sub, context);
            bucket = context.parsed.StructureSupport;
            if (null == bucket)
                context.parsed.StructureSupport = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_StructureSupport (obj, exporters, full)
        {
            var fields = exporters["Asset"](obj, exporters, false);

            base.export_element (obj, "StructureSupport", "anchorKind", base.from_string, fields);
            base.export_element (obj, "StructureSupport", "anchorRodCount", base.from_string, fields);
            base.export_element (obj, "StructureSupport", "anchorRodLength", base.from_string, fields);
            base.export_element (obj, "StructureSupport", "direction", base.from_string, fields);
            base.export_element (obj, "StructureSupport", "kind", base.from_string, fields);
            base.export_element (obj, "StructureSupport", "length", base.from_string, fields);
            base.export_element (obj, "StructureSupport", "size", base.from_string, fields);
            base.export_attribute (obj, "StructureSupport", "SecuredStructure", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A duct contains individual wires in the layout as specified with associated wire spacing instances; number of them gives the number of conductors in this duct.
         *
         */
        function parse_DuctBank (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetContainer (context, sub);
            obj.cls = "DuctBank";
            base.parse_element (/<cim:DuctBank.circuitCount>([\s\S]*?)<\/cim:DuctBank.circuitCount>/g, obj, "circuitCount", base.to_string, sub, context);
            bucket = context.parsed.DuctBank;
            if (null == bucket)
                context.parsed.DuctBank = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_DuctBank (obj, exporters, full)
        {
            var fields = exporters["AssetContainer"](obj, exporters, false);

            base.export_element (obj, "DuctBank", "circuitCount", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Kind of configuration for joints.
         *
         */
        function parse_JointConfigurationKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "JointConfigurationKind";
            base.parse_element (/<cim:JointConfigurationKind.wires3to1>([\s\S]*?)<\/cim:JointConfigurationKind.wires3to1>/g, obj, "wires3to1", base.to_string, sub, context);
            base.parse_element (/<cim:JointConfigurationKind.wires2to1>([\s\S]*?)<\/cim:JointConfigurationKind.wires2to1>/g, obj, "wires2to1", base.to_string, sub, context);
            base.parse_element (/<cim:JointConfigurationKind.wires1to1>([\s\S]*?)<\/cim:JointConfigurationKind.wires1to1>/g, obj, "wires1to1", base.to_string, sub, context);
            base.parse_element (/<cim:JointConfigurationKind.other>([\s\S]*?)<\/cim:JointConfigurationKind.other>/g, obj, "other", base.to_string, sub, context);
            bucket = context.parsed.JointConfigurationKind;
            if (null == bucket)
                context.parsed.JointConfigurationKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_JointConfigurationKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "JointConfigurationKind", "wires3to1", base.from_string, fields);
            base.export_element (obj, "JointConfigurationKind", "wires2to1", base.from_string, fields);
            base.export_element (obj, "JointConfigurationKind", "wires1to1", base.from_string, fields);
            base.export_element (obj, "JointConfigurationKind", "other", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Bushing asset.
         *
         */
        function parse_Bushing (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_Asset (context, sub);
            obj.cls = "Bushing";
            base.parse_element (/<cim:Bushing.c1Capacitance>([\s\S]*?)<\/cim:Bushing.c1Capacitance>/g, obj, "c1Capacitance", base.to_string, sub, context);
            base.parse_element (/<cim:Bushing.c1PowerFactor>([\s\S]*?)<\/cim:Bushing.c1PowerFactor>/g, obj, "c1PowerFactor", base.to_float, sub, context);
            base.parse_element (/<cim:Bushing.c2Capacitance>([\s\S]*?)<\/cim:Bushing.c2Capacitance>/g, obj, "c2Capacitance", base.to_string, sub, context);
            base.parse_element (/<cim:Bushing.c2PowerFactor>([\s\S]*?)<\/cim:Bushing.c2PowerFactor>/g, obj, "c2PowerFactor", base.to_float, sub, context);
            base.parse_element (/<cim:Bushing.insulationKind>([\s\S]*?)<\/cim:Bushing.insulationKind>/g, obj, "insulationKind", base.to_string, sub, context);
            base.parse_attribute (/<cim:Bushing.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context);
            bucket = context.parsed.Bushing;
            if (null == bucket)
                context.parsed.Bushing = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Bushing (obj, exporters, full)
        {
            var fields = exporters["Asset"](obj, exporters, false);

            base.export_element (obj, "Bushing", "c1Capacitance", base.from_string, fields);
            base.export_element (obj, "Bushing", "c1PowerFactor", base.from_float, fields);
            base.export_element (obj, "Bushing", "c2Capacitance", base.from_string, fields);
            base.export_element (obj, "Bushing", "c2PowerFactor", base.from_float, fields);
            base.export_element (obj, "Bushing", "insulationKind", base.from_string, fields);
            base.export_attribute (obj, "Bushing", "Terminal", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Information regarding the experienced and expected reliability of a specific asset, type of asset, or asset model.
         *
         */
        function parse_ReliabilityInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ReliabilityInfo";
            base.parse_element (/<cim:ReliabilityInfo.momFailureRate>([\s\S]*?)<\/cim:ReliabilityInfo.momFailureRate>/g, obj, "momFailureRate", base.to_string, sub, context);
            base.parse_element (/<cim:ReliabilityInfo.mTTR>([\s\S]*?)<\/cim:ReliabilityInfo.mTTR>/g, obj, "mTTR", base.to_string, sub, context);
            base.parse_attribute (/<cim:ReliabilityInfo.Specification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Specification", sub, context);
            bucket = context.parsed.ReliabilityInfo;
            if (null == bucket)
                context.parsed.ReliabilityInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ReliabilityInfo (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "ReliabilityInfo", "momFailureRate", base.from_string, fields);
            base.export_element (obj, "ReliabilityInfo", "mTTR", base.from_string, fields);
            base.export_attribute (obj, "ReliabilityInfo", "Specification", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Kind of tower construction.
         *
         */
        function parse_TowerConstructionKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TowerConstructionKind";
            base.parse_element (/<cim:TowerConstructionKind.suspension>([\s\S]*?)<\/cim:TowerConstructionKind.suspension>/g, obj, "suspension", base.to_string, sub, context);
            base.parse_element (/<cim:TowerConstructionKind.tension>([\s\S]*?)<\/cim:TowerConstructionKind.tension>/g, obj, "tension", base.to_string, sub, context);
            bucket = context.parsed.TowerConstructionKind;
            if (null == bucket)
                context.parsed.TowerConstructionKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TowerConstructionKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "TowerConstructionKind", "suspension", base.from_string, fields);
            base.export_element (obj, "TowerConstructionKind", "tension", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Kind of lamp for the streetlight.
         *
         */
        function parse_StreetlightLampKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "StreetlightLampKind";
            base.parse_element (/<cim:StreetlightLampKind.highPressureSodium>([\s\S]*?)<\/cim:StreetlightLampKind.highPressureSodium>/g, obj, "highPressureSodium", base.to_string, sub, context);
            base.parse_element (/<cim:StreetlightLampKind.mercuryVapor>([\s\S]*?)<\/cim:StreetlightLampKind.mercuryVapor>/g, obj, "mercuryVapor", base.to_string, sub, context);
            base.parse_element (/<cim:StreetlightLampKind.metalHalide>([\s\S]*?)<\/cim:StreetlightLampKind.metalHalide>/g, obj, "metalHalide", base.to_string, sub, context);
            base.parse_element (/<cim:StreetlightLampKind.other>([\s\S]*?)<\/cim:StreetlightLampKind.other>/g, obj, "other", base.to_string, sub, context);
            bucket = context.parsed.StreetlightLampKind;
            if (null == bucket)
                context.parsed.StreetlightLampKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_StreetlightLampKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "StreetlightLampKind", "highPressureSodium", base.from_string, fields);
            base.export_element (obj, "StreetlightLampKind", "mercuryVapor", base.from_string, fields);
            base.export_element (obj, "StreetlightLampKind", "metalHalide", base.from_string, fields);
            base.export_element (obj, "StreetlightLampKind", "other", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Kind of PF test for bushing insulation.
         *
         */
        function parse_BushingInsulationPfTestKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "BushingInsulationPfTestKind";
            base.parse_element (/<cim:BushingInsulationPfTestKind.c1>([\s\S]*?)<\/cim:BushingInsulationPfTestKind.c1>/g, obj, "c1", base.to_string, sub, context);
            base.parse_element (/<cim:BushingInsulationPfTestKind.c2>([\s\S]*?)<\/cim:BushingInsulationPfTestKind.c2>/g, obj, "c2", base.to_string, sub, context);
            bucket = context.parsed.BushingInsulationPfTestKind;
            if (null == bucket)
                context.parsed.BushingInsulationPfTestKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_BushingInsulationPfTestKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "BushingInsulationPfTestKind", "c1", base.from_string, fields);
            base.export_element (obj, "BushingInsulationPfTestKind", "c2", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Kind of FACTS device.
         *
         */
        function parse_FACTSDeviceKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "FACTSDeviceKind";
            base.parse_element (/<cim:FACTSDeviceKind.svc>([\s\S]*?)<\/cim:FACTSDeviceKind.svc>/g, obj, "svc", base.to_string, sub, context);
            base.parse_element (/<cim:FACTSDeviceKind.statcom>([\s\S]*?)<\/cim:FACTSDeviceKind.statcom>/g, obj, "statcom", base.to_string, sub, context);
            base.parse_element (/<cim:FACTSDeviceKind.tcpar>([\s\S]*?)<\/cim:FACTSDeviceKind.tcpar>/g, obj, "tcpar", base.to_string, sub, context);
            base.parse_element (/<cim:FACTSDeviceKind.tcsc>([\s\S]*?)<\/cim:FACTSDeviceKind.tcsc>/g, obj, "tcsc", base.to_string, sub, context);
            base.parse_element (/<cim:FACTSDeviceKind.tcvl>([\s\S]*?)<\/cim:FACTSDeviceKind.tcvl>/g, obj, "tcvl", base.to_string, sub, context);
            base.parse_element (/<cim:FACTSDeviceKind.tsbr>([\s\S]*?)<\/cim:FACTSDeviceKind.tsbr>/g, obj, "tsbr", base.to_string, sub, context);
            base.parse_element (/<cim:FACTSDeviceKind.tssc>([\s\S]*?)<\/cim:FACTSDeviceKind.tssc>/g, obj, "tssc", base.to_string, sub, context);
            base.parse_element (/<cim:FACTSDeviceKind.upfc>([\s\S]*?)<\/cim:FACTSDeviceKind.upfc>/g, obj, "upfc", base.to_string, sub, context);
            bucket = context.parsed.FACTSDeviceKind;
            if (null == bucket)
                context.parsed.FACTSDeviceKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_FACTSDeviceKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "FACTSDeviceKind", "svc", base.from_string, fields);
            base.export_element (obj, "FACTSDeviceKind", "statcom", base.from_string, fields);
            base.export_element (obj, "FACTSDeviceKind", "tcpar", base.from_string, fields);
            base.export_element (obj, "FACTSDeviceKind", "tcsc", base.from_string, fields);
            base.export_element (obj, "FACTSDeviceKind", "tcvl", base.from_string, fields);
            base.export_element (obj, "FACTSDeviceKind", "tsbr", base.from_string, fields);
            base.export_element (obj, "FACTSDeviceKind", "tssc", base.from_string, fields);
            base.export_element (obj, "FACTSDeviceKind", "upfc", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Kind of medium.
         *
         */
        function parse_MediumKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MediumKind";
            base.parse_element (/<cim:MediumKind.gas>([\s\S]*?)<\/cim:MediumKind.gas>/g, obj, "gas", base.to_string, sub, context);
            base.parse_element (/<cim:MediumKind.liquid>([\s\S]*?)<\/cim:MediumKind.liquid>/g, obj, "liquid", base.to_string, sub, context);
            base.parse_element (/<cim:MediumKind.solid>([\s\S]*?)<\/cim:MediumKind.solid>/g, obj, "solid", base.to_string, sub, context);
            bucket = context.parsed.MediumKind;
            if (null == bucket)
                context.parsed.MediumKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MediumKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "MediumKind", "gas", base.from_string, fields);
            base.export_element (obj, "MediumKind", "liquid", base.from_string, fields);
            base.export_element (obj, "MediumKind", "solid", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Winding insulation condition as a result of a test.
         *
         */
        function parse_WindingInsulation (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindingInsulation";
            base.parse_element (/<cim:WindingInsulation.insulationPFStatus>([\s\S]*?)<\/cim:WindingInsulation.insulationPFStatus>/g, obj, "insulationPFStatus", base.to_string, sub, context);
            base.parse_element (/<cim:WindingInsulation.insulationResistance>([\s\S]*?)<\/cim:WindingInsulation.insulationResistance>/g, obj, "insulationResistance", base.to_string, sub, context);
            base.parse_element (/<cim:WindingInsulation.leakageReactance>([\s\S]*?)<\/cim:WindingInsulation.leakageReactance>/g, obj, "leakageReactance", base.to_string, sub, context);
            base.parse_element (/<cim:WindingInsulation.status>([\s\S]*?)<\/cim:WindingInsulation.status>/g, obj, "status", base.to_string, sub, context);
            base.parse_attribute (/<cim:WindingInsulation.ToWinding\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ToWinding", sub, context);
            base.parse_attribute (/<cim:WindingInsulation.FromWinding\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FromWinding", sub, context);
            base.parse_attribute (/<cim:WindingInsulation.TransformerObservation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransformerObservation", sub, context);
            bucket = context.parsed.WindingInsulation;
            if (null == bucket)
                context.parsed.WindingInsulation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_WindingInsulation (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "WindingInsulation", "insulationPFStatus", base.from_string, fields);
            base.export_element (obj, "WindingInsulation", "insulationResistance", base.from_string, fields);
            base.export_element (obj, "WindingInsulation", "leakageReactance", base.from_string, fields);
            base.export_element (obj, "WindingInsulation", "status", base.from_string, fields);
            base.export_attribute (obj, "WindingInsulation", "ToWinding", fields);
            base.export_attribute (obj, "WindingInsulation", "FromWinding", fields);
            base.export_attribute (obj, "WindingInsulation", "TransformerObservation", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Enclosure that offers protection to the equipment it contains and/or safety to people/animals outside it.
         *
         */
        function parse_Cabinet (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetContainer (context, sub);
            obj.cls = "Cabinet";
            bucket = context.parsed.Cabinet;
            if (null == bucket)
                context.parsed.Cabinet = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Cabinet (obj, exporters, full)
        {
            var fields = exporters["AssetContainer"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Kind of underground structure.
         *
         */
        function parse_UndergroundStructureKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "UndergroundStructureKind";
            base.parse_element (/<cim:UndergroundStructureKind.burd>([\s\S]*?)<\/cim:UndergroundStructureKind.burd>/g, obj, "burd", base.to_string, sub, context);
            base.parse_element (/<cim:UndergroundStructureKind.enclosure>([\s\S]*?)<\/cim:UndergroundStructureKind.enclosure>/g, obj, "enclosure", base.to_string, sub, context);
            base.parse_element (/<cim:UndergroundStructureKind.handhole>([\s\S]*?)<\/cim:UndergroundStructureKind.handhole>/g, obj, "handhole", base.to_string, sub, context);
            base.parse_element (/<cim:UndergroundStructureKind.manhole>([\s\S]*?)<\/cim:UndergroundStructureKind.manhole>/g, obj, "manhole", base.to_string, sub, context);
            base.parse_element (/<cim:UndergroundStructureKind.pad>([\s\S]*?)<\/cim:UndergroundStructureKind.pad>/g, obj, "pad", base.to_string, sub, context);
            base.parse_element (/<cim:UndergroundStructureKind.subsurfaceEnclosure>([\s\S]*?)<\/cim:UndergroundStructureKind.subsurfaceEnclosure>/g, obj, "subsurfaceEnclosure", base.to_string, sub, context);
            base.parse_element (/<cim:UndergroundStructureKind.trench>([\s\S]*?)<\/cim:UndergroundStructureKind.trench>/g, obj, "trench", base.to_string, sub, context);
            base.parse_element (/<cim:UndergroundStructureKind.tunnel>([\s\S]*?)<\/cim:UndergroundStructureKind.tunnel>/g, obj, "tunnel", base.to_string, sub, context);
            base.parse_element (/<cim:UndergroundStructureKind.vault>([\s\S]*?)<\/cim:UndergroundStructureKind.vault>/g, obj, "vault", base.to_string, sub, context);
            base.parse_element (/<cim:UndergroundStructureKind.pullbox>([\s\S]*?)<\/cim:UndergroundStructureKind.pullbox>/g, obj, "pullbox", base.to_string, sub, context);
            bucket = context.parsed.UndergroundStructureKind;
            if (null == bucket)
                context.parsed.UndergroundStructureKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_UndergroundStructureKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "UndergroundStructureKind", "burd", base.from_string, fields);
            base.export_element (obj, "UndergroundStructureKind", "enclosure", base.from_string, fields);
            base.export_element (obj, "UndergroundStructureKind", "handhole", base.from_string, fields);
            base.export_element (obj, "UndergroundStructureKind", "manhole", base.from_string, fields);
            base.export_element (obj, "UndergroundStructureKind", "pad", base.from_string, fields);
            base.export_element (obj, "UndergroundStructureKind", "subsurfaceEnclosure", base.from_string, fields);
            base.export_element (obj, "UndergroundStructureKind", "trench", base.from_string, fields);
            base.export_element (obj, "UndergroundStructureKind", "tunnel", base.from_string, fields);
            base.export_element (obj, "UndergroundStructureKind", "vault", base.from_string, fields);
            base.export_element (obj, "UndergroundStructureKind", "pullbox", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Kind of base for poles.
         *
         */
        function parse_PoleBaseKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PoleBaseKind";
            base.parse_element (/<cim:PoleBaseKind.asphalt>([\s\S]*?)<\/cim:PoleBaseKind.asphalt>/g, obj, "asphalt", base.to_string, sub, context);
            base.parse_element (/<cim:PoleBaseKind.cement>([\s\S]*?)<\/cim:PoleBaseKind.cement>/g, obj, "cement", base.to_string, sub, context);
            base.parse_element (/<cim:PoleBaseKind.dirt>([\s\S]*?)<\/cim:PoleBaseKind.dirt>/g, obj, "dirt", base.to_string, sub, context);
            base.parse_element (/<cim:PoleBaseKind.unknown>([\s\S]*?)<\/cim:PoleBaseKind.unknown>/g, obj, "unknown", base.to_string, sub, context);
            base.parse_element (/<cim:PoleBaseKind.other>([\s\S]*?)<\/cim:PoleBaseKind.other>/g, obj, "other", base.to_string, sub, context);
            bucket = context.parsed.PoleBaseKind;
            if (null == bucket)
                context.parsed.PoleBaseKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PoleBaseKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "PoleBaseKind", "asphalt", base.from_string, fields);
            base.export_element (obj, "PoleBaseKind", "cement", base.from_string, fields);
            base.export_element (obj, "PoleBaseKind", "dirt", base.from_string, fields);
            base.export_element (obj, "PoleBaseKind", "unknown", base.from_string, fields);
            base.export_element (obj, "PoleBaseKind", "other", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * How the failure has been isolated.
         *
         */
        function parse_FailureIsolationMethodKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "FailureIsolationMethodKind";
            base.parse_element (/<cim:FailureIsolationMethodKind.breakerOperation>([\s\S]*?)<\/cim:FailureIsolationMethodKind.breakerOperation>/g, obj, "breakerOperation", base.to_string, sub, context);
            base.parse_element (/<cim:FailureIsolationMethodKind.fuse>([\s\S]*?)<\/cim:FailureIsolationMethodKind.fuse>/g, obj, "fuse", base.to_string, sub, context);
            base.parse_element (/<cim:FailureIsolationMethodKind.burnedInTheClear>([\s\S]*?)<\/cim:FailureIsolationMethodKind.burnedInTheClear>/g, obj, "burnedInTheClear", base.to_string, sub, context);
            base.parse_element (/<cim:FailureIsolationMethodKind.manuallyIsolated>([\s\S]*?)<\/cim:FailureIsolationMethodKind.manuallyIsolated>/g, obj, "manuallyIsolated", base.to_string, sub, context);
            base.parse_element (/<cim:FailureIsolationMethodKind.other>([\s\S]*?)<\/cim:FailureIsolationMethodKind.other>/g, obj, "other", base.to_string, sub, context);
            bucket = context.parsed.FailureIsolationMethodKind;
            if (null == bucket)
                context.parsed.FailureIsolationMethodKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_FailureIsolationMethodKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "FailureIsolationMethodKind", "breakerOperation", base.from_string, fields);
            base.export_element (obj, "FailureIsolationMethodKind", "fuse", base.from_string, fields);
            base.export_element (obj, "FailureIsolationMethodKind", "burnedInTheClear", base.from_string, fields);
            base.export_element (obj, "FailureIsolationMethodKind", "manuallyIsolated", base.from_string, fields);
            base.export_element (obj, "FailureIsolationMethodKind", "other", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * An Asset Property that is described through curves rather than as a data point.
         *
         * The relationship is to be defined between an independent variable (X-axis) and one or two dependent variables (Y1-axis and Y2-axis).
         *
         */
        function parse_AssetPropertyCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "AssetPropertyCurve";
            base.parse_attribute (/<cim:AssetPropertyCurve.Specification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Specification", sub, context);
            bucket = context.parsed.AssetPropertyCurve;
            if (null == bucket)
                context.parsed.AssetPropertyCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AssetPropertyCurve (obj, exporters, full)
        {
            var fields = exporters["Curve"](obj, exporters, false);

            base.export_attribute (obj, "AssetPropertyCurve", "Specification", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Kind of material used for structures.
         *
         */
        function parse_StructureMaterialKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "StructureMaterialKind";
            base.parse_element (/<cim:StructureMaterialKind.wood>([\s\S]*?)<\/cim:StructureMaterialKind.wood>/g, obj, "wood", base.to_string, sub, context);
            base.parse_element (/<cim:StructureMaterialKind.steel>([\s\S]*?)<\/cim:StructureMaterialKind.steel>/g, obj, "steel", base.to_string, sub, context);
            base.parse_element (/<cim:StructureMaterialKind.concrete>([\s\S]*?)<\/cim:StructureMaterialKind.concrete>/g, obj, "concrete", base.to_string, sub, context);
            base.parse_element (/<cim:StructureMaterialKind.other>([\s\S]*?)<\/cim:StructureMaterialKind.other>/g, obj, "other", base.to_string, sub, context);
            bucket = context.parsed.StructureMaterialKind;
            if (null == bucket)
                context.parsed.StructureMaterialKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_StructureMaterialKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "StructureMaterialKind", "wood", base.from_string, fields);
            base.export_element (obj, "StructureMaterialKind", "steel", base.from_string, fields);
            base.export_element (obj, "StructureMaterialKind", "concrete", base.from_string, fields);
            base.export_element (obj, "StructureMaterialKind", "other", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * As applicable, the basic linear, area, or volume dimensions of an asset, asset type (AssetModel) or other type of object (such as land area).
         *
         * Units and multipliers are specified per dimension.
         *
         */
        function parse_DimensionsInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "DimensionsInfo";
            base.parse_element (/<cim:DimensionsInfo.orientation>([\s\S]*?)<\/cim:DimensionsInfo.orientation>/g, obj, "orientation", base.to_string, sub, context);
            base.parse_element (/<cim:DimensionsInfo.sizeDepth>([\s\S]*?)<\/cim:DimensionsInfo.sizeDepth>/g, obj, "sizeDepth", base.to_string, sub, context);
            base.parse_element (/<cim:DimensionsInfo.sizeDiameter>([\s\S]*?)<\/cim:DimensionsInfo.sizeDiameter>/g, obj, "sizeDiameter", base.to_string, sub, context);
            base.parse_element (/<cim:DimensionsInfo.sizeLength>([\s\S]*?)<\/cim:DimensionsInfo.sizeLength>/g, obj, "sizeLength", base.to_string, sub, context);
            base.parse_element (/<cim:DimensionsInfo.sizeWidth>([\s\S]*?)<\/cim:DimensionsInfo.sizeWidth>/g, obj, "sizeWidth", base.to_string, sub, context);
            bucket = context.parsed.DimensionsInfo;
            if (null == bucket)
                context.parsed.DimensionsInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_DimensionsInfo (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "DimensionsInfo", "orientation", base.from_string, fields);
            base.export_element (obj, "DimensionsInfo", "sizeDepth", base.from_string, fields);
            base.export_element (obj, "DimensionsInfo", "sizeDiameter", base.from_string, fields);
            base.export_element (obj, "DimensionsInfo", "sizeLength", base.from_string, fields);
            base.export_element (obj, "DimensionsInfo", "sizeWidth", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Common information captured during transformer inspections and/or diagnostics.
         *
         * Note that some properties may be measured through other means and therefore have measurement values in addition to the observed values recorded here.
         *
         */
        function parse_TransformerObservation (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TransformerObservation";
            base.parse_element (/<cim:TransformerObservation.bushingTemp>([\s\S]*?)<\/cim:TransformerObservation.bushingTemp>/g, obj, "bushingTemp", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerObservation.dga>([\s\S]*?)<\/cim:TransformerObservation.dga>/g, obj, "dga", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerObservation.freqResp>([\s\S]*?)<\/cim:TransformerObservation.freqResp>/g, obj, "freqResp", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerObservation.furfuralDP>([\s\S]*?)<\/cim:TransformerObservation.furfuralDP>/g, obj, "furfuralDP", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerObservation.hotSpotTemp>([\s\S]*?)<\/cim:TransformerObservation.hotSpotTemp>/g, obj, "hotSpotTemp", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerObservation.oilColor>([\s\S]*?)<\/cim:TransformerObservation.oilColor>/g, obj, "oilColor", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerObservation.oilDielectricStrength>([\s\S]*?)<\/cim:TransformerObservation.oilDielectricStrength>/g, obj, "oilDielectricStrength", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerObservation.oilIFT>([\s\S]*?)<\/cim:TransformerObservation.oilIFT>/g, obj, "oilIFT", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerObservation.oilLevel>([\s\S]*?)<\/cim:TransformerObservation.oilLevel>/g, obj, "oilLevel", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerObservation.oilNeutralizationNumber>([\s\S]*?)<\/cim:TransformerObservation.oilNeutralizationNumber>/g, obj, "oilNeutralizationNumber", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerObservation.pumpVibration>([\s\S]*?)<\/cim:TransformerObservation.pumpVibration>/g, obj, "pumpVibration", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerObservation.status>([\s\S]*?)<\/cim:TransformerObservation.status>/g, obj, "status", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerObservation.topOilTemp>([\s\S]*?)<\/cim:TransformerObservation.topOilTemp>/g, obj, "topOilTemp", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerObservation.waterContent>([\s\S]*?)<\/cim:TransformerObservation.waterContent>/g, obj, "waterContent", base.to_string, sub, context);
            base.parse_attribute (/<cim:TransformerObservation.Reconditioning\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Reconditioning", sub, context);
            base.parse_attribute (/<cim:TransformerObservation.Transformer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Transformer", sub, context);
            bucket = context.parsed.TransformerObservation;
            if (null == bucket)
                context.parsed.TransformerObservation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TransformerObservation (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "TransformerObservation", "bushingTemp", base.from_string, fields);
            base.export_element (obj, "TransformerObservation", "dga", base.from_string, fields);
            base.export_element (obj, "TransformerObservation", "freqResp", base.from_string, fields);
            base.export_element (obj, "TransformerObservation", "furfuralDP", base.from_string, fields);
            base.export_element (obj, "TransformerObservation", "hotSpotTemp", base.from_string, fields);
            base.export_element (obj, "TransformerObservation", "oilColor", base.from_string, fields);
            base.export_element (obj, "TransformerObservation", "oilDielectricStrength", base.from_string, fields);
            base.export_element (obj, "TransformerObservation", "oilIFT", base.from_string, fields);
            base.export_element (obj, "TransformerObservation", "oilLevel", base.from_string, fields);
            base.export_element (obj, "TransformerObservation", "oilNeutralizationNumber", base.from_string, fields);
            base.export_element (obj, "TransformerObservation", "pumpVibration", base.from_string, fields);
            base.export_element (obj, "TransformerObservation", "status", base.from_string, fields);
            base.export_element (obj, "TransformerObservation", "topOilTemp", base.from_string, fields);
            base.export_element (obj, "TransformerObservation", "waterContent", base.from_string, fields);
            base.export_attribute (obj, "TransformerObservation", "Reconditioning", fields);
            base.export_attribute (obj, "TransformerObservation", "Transformer", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Joint connects two or more cables.
         *
         * It includes the portion of cable under wipes, welds, or other seals.
         *
         */
        function parse_Joint (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_Asset (context, sub);
            obj.cls = "Joint";
            base.parse_element (/<cim:Joint.configurationKind>([\s\S]*?)<\/cim:Joint.configurationKind>/g, obj, "configurationKind", base.to_string, sub, context);
            base.parse_element (/<cim:Joint.fillKind>([\s\S]*?)<\/cim:Joint.fillKind>/g, obj, "fillKind", base.to_string, sub, context);
            base.parse_element (/<cim:Joint.insulation>([\s\S]*?)<\/cim:Joint.insulation>/g, obj, "insulation", base.to_string, sub, context);
            bucket = context.parsed.Joint;
            if (null == bucket)
                context.parsed.Joint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Joint (obj, exporters, full)
        {
            var fields = exporters["Asset"](obj, exporters, false);

            base.export_element (obj, "Joint", "configurationKind", base.from_string, fields);
            base.export_element (obj, "Joint", "fillKind", base.from_string, fields);
            base.export_element (obj, "Joint", "insulation", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Tower asset.
         *
         * Dimensions of the Tower are specified in associated DimensionsInfo class.
         *
         */
        function parse_Tower (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Structure (context, sub);
            obj.cls = "Tower";
            base.parse_element (/<cim:Tower.constructionKind>([\s\S]*?)<\/cim:Tower.constructionKind>/g, obj, "constructionKind", base.to_string, sub, context);
            bucket = context.parsed.Tower;
            if (null == bucket)
                context.parsed.Tower = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Tower (obj, exporters, full)
        {
            var fields = exporters["Structure"](obj, exporters, false);

            base.export_element (obj, "Tower", "constructionKind", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Reconditioning information for an asset.
         *
         */
        function parse_Reconditioning (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Reconditioning";
            base.parse_element (/<cim:Reconditioning.dateTime>([\s\S]*?)<\/cim:Reconditioning.dateTime>/g, obj, "dateTime", base.to_datetime, sub, context);
            base.parse_attribute (/<cim:Reconditioning.Asset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context);
            bucket = context.parsed.Reconditioning;
            if (null == bucket)
                context.parsed.Reconditioning = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Reconditioning (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "Reconditioning", "dateTime", base.from_datetime, fields);
            base.export_attribute (obj, "Reconditioning", "Asset", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A substance that either (1) provides the means of transmission of a force or effect, such as hydraulic fluid, or (2) is used for a surrounding or enveloping substance, such as oil in a transformer or circuit breaker.
         *
         */
        function parse_Medium (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Medium";
            base.parse_element (/<cim:Medium.kind>([\s\S]*?)<\/cim:Medium.kind>/g, obj, "kind", base.to_string, sub, context);
            base.parse_element (/<cim:Medium.volumeSpec>([\s\S]*?)<\/cim:Medium.volumeSpec>/g, obj, "volumeSpec", base.to_string, sub, context);
            base.parse_attribute (/<cim:Medium.Specification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Specification", sub, context);
            bucket = context.parsed.Medium;
            if (null == bucket)
                context.parsed.Medium = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Medium (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "Medium", "kind", base.from_string, fields);
            base.export_element (obj, "Medium", "volumeSpec", base.from_string, fields);
            base.export_attribute (obj, "Medium", "Specification", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A facility may contain buildings, storage facilities, switching facilities, power generation, manufacturing facilities, maintenance facilities, etc.
         *
         */
        function parse_Facility (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetContainer (context, sub);
            obj.cls = "Facility";
            base.parse_element (/<cim:Facility.kind>([\s\S]*?)<\/cim:Facility.kind>/g, obj, "kind", base.to_string, sub, context);
            bucket = context.parsed.Facility;
            if (null == bucket)
                context.parsed.Facility = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Facility (obj, exporters, full)
        {
            var fields = exporters["AssetContainer"](obj, exporters, false);

            base.export_element (obj, "Facility", "kind", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Bushing insulation power factor condition as a result of a test.
         *
         * Typical status values are: Acceptable, Minor Deterioration or Moisture Absorption, Major Deterioration or Moisture Absorption, Failed.
         *
         */
        function parse_BushingInsulationPF (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "BushingInsulationPF";
            base.parse_element (/<cim:BushingInsulationPF.status>([\s\S]*?)<\/cim:BushingInsulationPF.status>/g, obj, "status", base.to_string, sub, context);
            base.parse_element (/<cim:BushingInsulationPF.testKind>([\s\S]*?)<\/cim:BushingInsulationPF.testKind>/g, obj, "testKind", base.to_string, sub, context);
            base.parse_attribute (/<cim:BushingInsulationPF.Bushing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Bushing", sub, context);
            base.parse_attribute (/<cim:BushingInsulationPF.TransformerObservation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransformerObservation", sub, context);
            bucket = context.parsed.BushingInsulationPF;
            if (null == bucket)
                context.parsed.BushingInsulationPF = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_BushingInsulationPF (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "BushingInsulationPF", "status", base.from_string, fields);
            base.export_element (obj, "BushingInsulationPF", "testKind", base.from_string, fields);
            base.export_attribute (obj, "BushingInsulationPF", "Bushing", fields);
            base.export_attribute (obj, "BushingInsulationPF", "TransformerObservation", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Streetlight asset.
         *
         */
        function parse_Streetlight (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_Asset (context, sub);
            obj.cls = "Streetlight";
            base.parse_element (/<cim:Streetlight.armLength>([\s\S]*?)<\/cim:Streetlight.armLength>/g, obj, "armLength", base.to_string, sub, context);
            base.parse_element (/<cim:Streetlight.lampKind>([\s\S]*?)<\/cim:Streetlight.lampKind>/g, obj, "lampKind", base.to_string, sub, context);
            base.parse_element (/<cim:Streetlight.lightRating>([\s\S]*?)<\/cim:Streetlight.lightRating>/g, obj, "lightRating", base.to_string, sub, context);
            base.parse_attribute (/<cim:Streetlight.Pole\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Pole", sub, context);
            bucket = context.parsed.Streetlight;
            if (null == bucket)
                context.parsed.Streetlight = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Streetlight (obj, exporters, full)
        {
            var fields = exporters["Asset"](obj, exporters, false);

            base.export_element (obj, "Streetlight", "armLength", base.from_string, fields);
            base.export_element (obj, "Streetlight", "lampKind", base.from_string, fields);
            base.export_element (obj, "Streetlight", "lightRating", base.from_string, fields);
            base.export_attribute (obj, "Streetlight", "Pole", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                parse_PoleBaseKind: parse_PoleBaseKind,
                parse_JointFillKind: parse_JointFillKind,
                export_MediumKind: export_MediumKind,
                parse_TowerConstructionKind: parse_TowerConstructionKind,
                parse_AnchorKind: parse_AnchorKind,
                parse_DimensionsInfo: parse_DimensionsInfo,
                parse_StructureSupport: parse_StructureSupport,
                export_Cabinet: export_Cabinet,
                parse_FinancialInfo: parse_FinancialInfo,
                export_AnchorKind: export_AnchorKind,
                parse_CoolingKind: parse_CoolingKind,
                export_FACTSDeviceKind: export_FACTSDeviceKind,
                export_PoleTreatmentKind: export_PoleTreatmentKind,
                parse_Streetlight: parse_Streetlight,
                parse_WindingInsulation: parse_WindingInsulation,
                parse_Medium: parse_Medium,
                parse_UndergroundStructureKind: parse_UndergroundStructureKind,
                export_UndergroundStructure: export_UndergroundStructure,
                export_StructureSupport: export_StructureSupport,
                export_BushingInsulationKind: export_BushingInsulationKind,
                export_ReliabilityInfo: export_ReliabilityInfo,
                export_BushingInsulationPF: export_BushingInsulationPF,
                export_StructureSupportKind: export_StructureSupportKind,
                export_StreetlightLampKind: export_StreetlightLampKind,
                export_FailureIsolationMethodKind: export_FailureIsolationMethodKind,
                export_FinancialInfo: export_FinancialInfo,
                export_CoolingKind: export_CoolingKind,
                export_TransformerObservation: export_TransformerObservation,
                export_PolePreservativeKind: export_PolePreservativeKind,
                export_JointFillKind: export_JointFillKind,
                parse_UndergroundStructure: parse_UndergroundStructure,
                parse_DuctBank: parse_DuctBank,
                parse_StructureSupportKind: parse_StructureSupportKind,
                parse_JointConfigurationKind: parse_JointConfigurationKind,
                parse_BushingInsulationPfTestKind: parse_BushingInsulationPfTestKind,
                parse_PoleTreatmentKind: parse_PoleTreatmentKind,
                export_BushingInsulationPfTestKind: export_BushingInsulationPfTestKind,
                export_Reconditioning: export_Reconditioning,
                export_FACTSDevice: export_FACTSDevice,
                parse_BushingInsulationPF: parse_BushingInsulationPF,
                export_TowerConstructionKind: export_TowerConstructionKind,
                parse_ReliabilityInfo: parse_ReliabilityInfo,
                export_Bushing: export_Bushing,
                export_DimensionsInfo: export_DimensionsInfo,
                export_Facility: export_Facility,
                export_AssetPropertyCurve: export_AssetPropertyCurve,
                parse_Bushing: parse_Bushing,
                parse_Pole: parse_Pole,
                export_PoleBaseKind: export_PoleBaseKind,
                export_Streetlight: export_Streetlight,
                export_UndergroundStructureKind: export_UndergroundStructureKind,
                parse_PolePreservativeKind: parse_PolePreservativeKind,
                parse_StructureMaterialKind: parse_StructureMaterialKind,
                parse_FailureIsolationMethodKind: parse_FailureIsolationMethodKind,
                parse_MediumKind: parse_MediumKind,
                parse_StreetlightLampKind: parse_StreetlightLampKind,
                export_Medium: export_Medium,
                export_StructureMaterialKind: export_StructureMaterialKind,
                export_DuctBank: export_DuctBank,
                export_Structure: export_Structure,
                parse_Structure: parse_Structure,
                parse_Cabinet: parse_Cabinet,
                parse_FailureEvent: parse_FailureEvent,
                parse_FACTSDevice: parse_FACTSDevice,
                parse_Specification: parse_Specification,
                parse_Reconditioning: parse_Reconditioning,
                parse_TransformerObservation: parse_TransformerObservation,
                parse_GenericAssetModelOrMaterial: parse_GenericAssetModelOrMaterial,
                parse_AssetPropertyCurve: parse_AssetPropertyCurve,
                parse_CoolingPowerRating: parse_CoolingPowerRating,
                export_WindingInsulation: export_WindingInsulation,
                export_Tower: export_Tower,
                export_CoolingPowerRating: export_CoolingPowerRating,
                parse_FACTSDeviceKind: parse_FACTSDeviceKind,
                export_GenericAssetModelOrMaterial: export_GenericAssetModelOrMaterial,
                parse_Joint: parse_Joint,
                export_Pole: export_Pole,
                export_Specification: export_Specification,
                parse_Facility: parse_Facility,
                parse_Tower: parse_Tower,
                export_Joint: export_Joint,
                export_FailureEvent: export_FailureEvent,
                parse_BushingInsulationKind: parse_BushingInsulationKind,
                export_JointConfigurationKind: export_JointConfigurationKind
            }
        );
    }
);