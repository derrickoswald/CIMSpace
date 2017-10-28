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
            /**
             * Kind of FACTS device.
             *
             */
            base.parse_element (/<cim:FACTSDevice.kind>([\s\S]*?)<\/cim:FACTSDevice.kind>/g, obj, "kind", base.to_string, sub, context);

            bucket = context.parsed.FACTSDevice;
            if (null == bucket)
                context.parsed.FACTSDevice = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * True if vault is ventilating.
             *
             */
            base.parse_element (/<cim:UndergroundStructure.hasVentilation>([\s\S]*?)<\/cim:UndergroundStructure.hasVentilation>/g, obj, "hasVentilation", base.to_boolean, sub, context);

            /**
             * True if vault is ventilating.
             *
             */
            base.parse_element (/<cim:UndergroundStructure.kind>([\s\S]*?)<\/cim:UndergroundStructure.kind>/g, obj, "kind", base.to_string, sub, context);

            /**
             * Primary material of underground structure.
             *
             */
            base.parse_element (/<cim:UndergroundStructure.material>([\s\S]*?)<\/cim:UndergroundStructure.material>/g, obj, "material", base.to_string, sub, context);

            /**
             * Date sealing warranty expires.
             *
             */
            base.parse_element (/<cim:UndergroundStructure.sealingWarrantyExpiresDate>([\s\S]*?)<\/cim:UndergroundStructure.sealingWarrantyExpiresDate>/g, obj, "sealingWarrantyExpiresDate", base.to_string, sub, context);

            bucket = context.parsed.UndergroundStructure;
            if (null == bucket)
                context.parsed.UndergroundStructure = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Code for asset failure.
             *
             */
            base.parse_element (/<cim:FailureEvent.corporateCode>([\s\S]*?)<\/cim:FailureEvent.corporateCode>/g, obj, "corporateCode", base.to_string, sub, context);

            /**
             * How the asset failure was isolated from the system.
             *
             */
            base.parse_element (/<cim:FailureEvent.failureIsolationMethod>([\s\S]*?)<\/cim:FailureEvent.failureIsolationMethod>/g, obj, "failureIsolationMethod", base.to_string, sub, context);

            /**
             * The method used for locating the faulted part of the asset.
             *
             * For example, cable options include: Cap Discharge-Thumping, Bridge Method, Visual Inspection, Other.
             *
             */
            base.parse_element (/<cim:FailureEvent.faultLocatingMethod>([\s\S]*?)<\/cim:FailureEvent.faultLocatingMethod>/g, obj, "faultLocatingMethod", base.to_string, sub, context);

            /**
             * Failure location on an object.
             *
             */
            base.parse_element (/<cim:FailureEvent.location>([\s\S]*?)<\/cim:FailureEvent.location>/g, obj, "location", base.to_string, sub, context);

            bucket = context.parsed.FailureEvent;
            if (null == bucket)
                context.parsed.FailureEvent = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Date fumigant was last applied.
             *
             */
            base.parse_element (/<cim:Structure.fumigantAppliedDate>([\s\S]*?)<\/cim:Structure.fumigantAppliedDate>/g, obj, "fumigantAppliedDate", base.to_string, sub, context);

            /**
             * Name of fumigant.
             *
             */
            base.parse_element (/<cim:Structure.fumigantName>([\s\S]*?)<\/cim:Structure.fumigantName>/g, obj, "fumigantName", base.to_string, sub, context);

            /**
             * Visible height of structure above ground level for overhead construction (e.g., Pole or Tower) or below ground level for an underground vault, manhole, etc.
             *
             * Refer to associated DimensionPropertiesInfo for other types of dimensions.
             *
             */
            base.parse_element (/<cim:Structure.height>([\s\S]*?)<\/cim:Structure.height>/g, obj, "height", base.to_string, sub, context);

            /**
             * Material this structure is made of.
             *
             */
            base.parse_element (/<cim:Structure.materialKind>([\s\S]*?)<\/cim:Structure.materialKind>/g, obj, "materialKind", base.to_string, sub, context);

            /**
             * Maximum rated voltage of the equipment that can be mounted on/contained within the structure.
             *
             */
            base.parse_element (/<cim:Structure.ratedVoltage>([\s\S]*?)<\/cim:Structure.ratedVoltage>/g, obj, "ratedVoltage", base.to_string, sub, context);

            /**
             * True if weeds are to be removed around asset.
             *
             */
            base.parse_element (/<cim:Structure.removeWeed>([\s\S]*?)<\/cim:Structure.removeWeed>/g, obj, "removeWeed", base.to_boolean, sub, context);

            /**
             * Date weed were last removed.
             *
             */
            base.parse_element (/<cim:Structure.weedRemovedDate>([\s\S]*?)<\/cim:Structure.weedRemovedDate>/g, obj, "weedRemovedDate", base.to_string, sub, context);

            bucket = context.parsed.Structure;
            if (null == bucket)
                context.parsed.Structure = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Kind of base for this pole.
             *
             */
            base.parse_element (/<cim:Pole.baseKind>([\s\S]*?)<\/cim:Pole.baseKind>/g, obj, "baseKind", base.to_string, sub, context);

            /**
             * True if a block of material has been attached to base of pole in ground for stability.
             *
             * This technique is used primarily when anchors can not be used.
             *
             */
            base.parse_element (/<cim:Pole.breastBlock>([\s\S]*?)<\/cim:Pole.breastBlock>/g, obj, "breastBlock", base.to_boolean, sub, context);

            /**
             * Pole class: 1, 2, 3, 4, 5, 6, 7, H1, H2, Other, Unknown.
             *
             */
            base.parse_element (/<cim:Pole.classification>([\s\S]*?)<\/cim:Pole.classification>/g, obj, "classification", base.to_string, sub, context);

            /**
             * The framing structure mounted on the pole.
             *
             */
            base.parse_element (/<cim:Pole.construction>([\s\S]*?)<\/cim:Pole.construction>/g, obj, "construction", base.to_string, sub, context);

            /**
             * Diameter of the pole.
             *
             */
            base.parse_element (/<cim:Pole.diameter>([\s\S]*?)<\/cim:Pole.diameter>/g, obj, "diameter", base.to_string, sub, context);

            /**
             * Joint pole agreement reference number.
             *
             */
            base.parse_element (/<cim:Pole.jpaReference>([\s\S]*?)<\/cim:Pole.jpaReference>/g, obj, "jpaReference", base.to_string, sub, context);

            /**
             * Length of the pole (inclusive of any section of the pole that may be underground post-installation).
             *
             */
            base.parse_element (/<cim:Pole.length>([\s\S]*?)<\/cim:Pole.length>/g, obj, "length", base.to_string, sub, context);

            /**
             * Kind of preservative for this pole.
             *
             */
            base.parse_element (/<cim:Pole.preservativeKind>([\s\S]*?)<\/cim:Pole.preservativeKind>/g, obj, "preservativeKind", base.to_string, sub, context);

            /**
             * Pole species.
             *
             * Aluminum, Aluminum Davit, Concrete, Fiberglass, Galvanized Davit, Galvanized, Steel Davit Primed, Steel Davit, Steel Standard Primed, Steel, Truncated, Wood-Treated, Wood-Hard, Wood-Salt Treated, Wood-Soft, Wood, Other, Unknown.
             *
             */
            base.parse_element (/<cim:Pole.speciesType>([\s\S]*?)<\/cim:Pole.speciesType>/g, obj, "speciesType", base.to_string, sub, context);

            /**
             * Date and time pole was last treated with preservative.
             *
             */
            base.parse_element (/<cim:Pole.treatedDateTime>([\s\S]*?)<\/cim:Pole.treatedDateTime>/g, obj, "treatedDateTime", base.to_datetime, sub, context);

            /**
             * Kind of treatment for this pole.
             *
             */
            base.parse_element (/<cim:Pole.treatmentKind>([\s\S]*?)<\/cim:Pole.treatmentKind>/g, obj, "treatmentKind", base.to_string, sub, context);

            bucket = context.parsed.Pole;
            if (null == bucket)
                context.parsed.Pole = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Estimated unit cost (or cost per unit length) of this type of asset.
             *
             * It does not include labor to install/construct or configure it.
             *
             */
            base.parse_element (/<cim:GenericAssetModelOrMaterial.estimatedUnitCost>([\s\S]*?)<\/cim:GenericAssetModelOrMaterial.estimatedUnitCost>/g, obj, "estimatedUnitCost", base.to_string, sub, context);

            /**
             * The value, unit of measure, and multiplier for the quantity.
             *
             */
            base.parse_element (/<cim:GenericAssetModelOrMaterial.quantity>([\s\S]*?)<\/cim:GenericAssetModelOrMaterial.quantity>/g, obj, "quantity", base.to_string, sub, context);

            /**
             * True if item is a stock item (default).
             *
             */
            base.parse_element (/<cim:GenericAssetModelOrMaterial.stockItem>([\s\S]*?)<\/cim:GenericAssetModelOrMaterial.stockItem>/g, obj, "stockItem", base.to_boolean, sub, context);

            base.parse_attribute (/<cim:GenericAssetModelOrMaterial.CUWorkEquipmentAsset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CUWorkEquipmentAsset", sub, context, true);

            base.parse_attribute (/<cim:GenericAssetModelOrMaterial.TypeAssetCatalogue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TypeAssetCatalogue", sub, context, true);

            base.parse_attribute (/<cim:GenericAssetModelOrMaterial.CUAsset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CUAsset", sub, context, true);

            bucket = context.parsed.GenericAssetModelOrMaterial;
            if (null == bucket)
                context.parsed.GenericAssetModelOrMaterial = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Kind of cooling system.
             *
             */
            base.parse_element (/<cim:CoolingPowerRating.coolingKind>([\s\S]*?)<\/cim:CoolingPowerRating.coolingKind>/g, obj, "coolingKind", base.to_string, sub, context);

            /**
             * The power rating associated with type of cooling specified for this stage.
             *
             */
            base.parse_element (/<cim:CoolingPowerRating.powerRating>([\s\S]*?)<\/cim:CoolingPowerRating.powerRating>/g, obj, "powerRating", base.to_string, sub, context);

            /**
             * Stage of cooling and associated power rating.
             *
             */
            base.parse_element (/<cim:CoolingPowerRating.stage>([\s\S]*?)<\/cim:CoolingPowerRating.stage>/g, obj, "stage", base.to_string, sub, context);

            bucket = context.parsed.CoolingPowerRating;
            if (null == bucket)
                context.parsed.CoolingPowerRating = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The account to which this actual material item is charged.
             *
             */
            base.parse_element (/<cim:FinancialInfo.account>([\s\S]*?)<\/cim:FinancialInfo.account>/g, obj, "account", base.to_string, sub, context);

            /**
             * The actual purchase cost of this particular asset.
             *
             */
            base.parse_element (/<cim:FinancialInfo.actualPurchaseCost>([\s\S]*?)<\/cim:FinancialInfo.actualPurchaseCost>/g, obj, "actualPurchaseCost", base.to_string, sub, context);

            /**
             * Description of the cost.
             *
             */
            base.parse_element (/<cim:FinancialInfo.costDescription>([\s\S]*?)<\/cim:FinancialInfo.costDescription>/g, obj, "costDescription", base.to_string, sub, context);

            /**
             * Type of cost to which this Material Item belongs.
             *
             */
            base.parse_element (/<cim:FinancialInfo.costType>([\s\S]*?)<\/cim:FinancialInfo.costType>/g, obj, "costType", base.to_string, sub, context);

            /**
             * Value of asset as of 'valueDateTime'.
             *
             */
            base.parse_element (/<cim:FinancialInfo.financialValue>([\s\S]*?)<\/cim:FinancialInfo.financialValue>/g, obj, "financialValue", base.to_string, sub, context);

            /**
             * Date and time asset's financial value was put in plant for regulatory accounting purposes (e.g., for rate base calculations).
             *
             * This is sometime referred to as the "in-service date".
             *
             */
            base.parse_element (/<cim:FinancialInfo.plantTransferDateTime>([\s\S]*?)<\/cim:FinancialInfo.plantTransferDateTime>/g, obj, "plantTransferDateTime", base.to_datetime, sub, context);

            /**
             * Date and time asset was purchased.
             *
             */
            base.parse_element (/<cim:FinancialInfo.purchaseDateTime>([\s\S]*?)<\/cim:FinancialInfo.purchaseDateTime>/g, obj, "purchaseDateTime", base.to_datetime, sub, context);

            /**
             * Purchase order identifier.
             *
             */
            base.parse_element (/<cim:FinancialInfo.purchaseOrderNumber>([\s\S]*?)<\/cim:FinancialInfo.purchaseOrderNumber>/g, obj, "purchaseOrderNumber", base.to_string, sub, context);

            /**
             * The quantity of the asset if per unit length, for example conductor.
             *
             */
            base.parse_element (/<cim:FinancialInfo.quantity>([\s\S]*?)<\/cim:FinancialInfo.quantity>/g, obj, "quantity", base.to_string, sub, context);

            /**
             * Date and time at which the financial value was last established.
             *
             */
            base.parse_element (/<cim:FinancialInfo.valueDateTime>([\s\S]*?)<\/cim:FinancialInfo.valueDateTime>/g, obj, "valueDateTime", base.to_datetime, sub, context);

            /**
             * Date and time warranty on asset expires.
             *
             */
            base.parse_element (/<cim:FinancialInfo.warrantyEndDateTime>([\s\S]*?)<\/cim:FinancialInfo.warrantyEndDateTime>/g, obj, "warrantyEndDateTime", base.to_datetime, sub, context);

            base.parse_attribute (/<cim:FinancialInfo.Asset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context, true);

            bucket = context.parsed.FinancialInfo;
            if (null == bucket)
                context.parsed.FinancialInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * (if anchor) Kind of anchor.
             *
             */
            base.parse_element (/<cim:StructureSupport.anchorKind>([\s\S]*?)<\/cim:StructureSupport.anchorKind>/g, obj, "anchorKind", base.to_string, sub, context);

            /**
             * (if anchor) Number of rods used.
             *
             */
            base.parse_element (/<cim:StructureSupport.anchorRodCount>([\s\S]*?)<\/cim:StructureSupport.anchorRodCount>/g, obj, "anchorRodCount", base.to_string, sub, context);

            /**
             * (if anchor) Length of rod used.
             *
             */
            base.parse_element (/<cim:StructureSupport.anchorRodLength>([\s\S]*?)<\/cim:StructureSupport.anchorRodLength>/g, obj, "anchorRodLength", base.to_string, sub, context);

            /**
             * Direction of this support structure.
             *
             */
            base.parse_element (/<cim:StructureSupport.direction>([\s\S]*?)<\/cim:StructureSupport.direction>/g, obj, "direction", base.to_string, sub, context);

            /**
             * Kind of structure support.
             *
             */
            base.parse_element (/<cim:StructureSupport.kind>([\s\S]*?)<\/cim:StructureSupport.kind>/g, obj, "kind", base.to_string, sub, context);

            /**
             * Length of this support structure.
             *
             */
            base.parse_element (/<cim:StructureSupport.length>([\s\S]*?)<\/cim:StructureSupport.length>/g, obj, "length", base.to_string, sub, context);

            /**
             * Size of this support structure.
             *
             */
            base.parse_element (/<cim:StructureSupport.size>([\s\S]*?)<\/cim:StructureSupport.size>/g, obj, "size", base.to_string, sub, context);

            base.parse_attribute (/<cim:StructureSupport.SecuredStructure\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SecuredStructure", sub, context, true);

            bucket = context.parsed.StructureSupport;
            if (null == bucket)
                context.parsed.StructureSupport = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Number of circuits in duct bank.
             *
             * Refer to associations between a duct (ConductorAsset) and an ACLineSegment to understand which circuits are in which ducts.
             *
             */
            base.parse_element (/<cim:DuctBank.circuitCount>([\s\S]*?)<\/cim:DuctBank.circuitCount>/g, obj, "circuitCount", base.to_string, sub, context);

            bucket = context.parsed.DuctBank;
            if (null == bucket)
                context.parsed.DuctBank = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Factory measured capacitance, measured between the power factor tap and the bushing conductor.
             *
             */
            base.parse_element (/<cim:Bushing.c1Capacitance>([\s\S]*?)<\/cim:Bushing.c1Capacitance>/g, obj, "c1Capacitance", base.to_string, sub, context);

            /**
             * Factory measured insulation power factor, measured between the power factor tap and the bushing conductor.
             *
             */
            base.parse_element (/<cim:Bushing.c1PowerFactor>([\s\S]*?)<\/cim:Bushing.c1PowerFactor>/g, obj, "c1PowerFactor", base.to_float, sub, context);

            /**
             * Factory measured capacitance measured between the power factor tap and ground.
             *
             */
            base.parse_element (/<cim:Bushing.c2Capacitance>([\s\S]*?)<\/cim:Bushing.c2Capacitance>/g, obj, "c2Capacitance", base.to_string, sub, context);

            /**
             * Factory measured insulation power factor, measured between the power factor tap and ground.
             *
             */
            base.parse_element (/<cim:Bushing.c2PowerFactor>([\s\S]*?)<\/cim:Bushing.c2PowerFactor>/g, obj, "c2PowerFactor", base.to_float, sub, context);

            /**
             * Kind of insulation.
             *
             */
            base.parse_element (/<cim:Bushing.insulationKind>([\s\S]*?)<\/cim:Bushing.insulationKind>/g, obj, "insulationKind", base.to_string, sub, context);

            base.parse_attribute (/<cim:Bushing.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context, true);

            bucket = context.parsed.Bushing;
            if (null == bucket)
                context.parsed.Bushing = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Momentary failure rate (temporary failures/kft-year).
             *
             */
            base.parse_element (/<cim:ReliabilityInfo.momFailureRate>([\s\S]*?)<\/cim:ReliabilityInfo.momFailureRate>/g, obj, "momFailureRate", base.to_string, sub, context);

            /**
             * Mean time to repair (MTTR - hours).
             *
             */
            base.parse_element (/<cim:ReliabilityInfo.mTTR>([\s\S]*?)<\/cim:ReliabilityInfo.mTTR>/g, obj, "mTTR", base.to_string, sub, context);

            base.parse_attribute (/<cim:ReliabilityInfo.Specification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Specification", sub, context, true);

            bucket = context.parsed.ReliabilityInfo;
            if (null == bucket)
                context.parsed.ReliabilityInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Power factor tap-to-ground.
             *
             */
            base.parse_element (/<cim:BushingInsulationPfTestKind.c1>([\s\S]*?)<\/cim:BushingInsulationPfTestKind.c1>/g, obj, "c1", base.to_string, sub, context);

            /**
             * Power factor tap-to-conductor.
             *
             */
            base.parse_element (/<cim:BushingInsulationPfTestKind.c2>([\s\S]*?)<\/cim:BushingInsulationPfTestKind.c2>/g, obj, "c2", base.to_string, sub, context);

            bucket = context.parsed.BushingInsulationPfTestKind;
            if (null == bucket)
                context.parsed.BushingInsulationPfTestKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Static VAr compensator.
             *
             */
            base.parse_element (/<cim:FACTSDeviceKind.svc>([\s\S]*?)<\/cim:FACTSDeviceKind.svc>/g, obj, "svc", base.to_string, sub, context);

            /**
             * Static synchronous compensator.
             *
             */
            base.parse_element (/<cim:FACTSDeviceKind.statcom>([\s\S]*?)<\/cim:FACTSDeviceKind.statcom>/g, obj, "statcom", base.to_string, sub, context);

            /**
             * Thyristor-controlled phase-angle regulator.
             *
             */
            base.parse_element (/<cim:FACTSDeviceKind.tcpar>([\s\S]*?)<\/cim:FACTSDeviceKind.tcpar>/g, obj, "tcpar", base.to_string, sub, context);

            /**
             * Thyristor-controlled series capacitor.
             *
             */
            base.parse_element (/<cim:FACTSDeviceKind.tcsc>([\s\S]*?)<\/cim:FACTSDeviceKind.tcsc>/g, obj, "tcsc", base.to_string, sub, context);

            /**
             * Thyristor-controlled voltage limiter.
             *
             */
            base.parse_element (/<cim:FACTSDeviceKind.tcvl>([\s\S]*?)<\/cim:FACTSDeviceKind.tcvl>/g, obj, "tcvl", base.to_string, sub, context);

            /**
             * Thyristor-switched braking resistor.
             *
             */
            base.parse_element (/<cim:FACTSDeviceKind.tsbr>([\s\S]*?)<\/cim:FACTSDeviceKind.tsbr>/g, obj, "tsbr", base.to_string, sub, context);

            /**
             * Thyristor-switched series capacitor.
             *
             */
            base.parse_element (/<cim:FACTSDeviceKind.tssc>([\s\S]*?)<\/cim:FACTSDeviceKind.tssc>/g, obj, "tssc", base.to_string, sub, context);

            /**
             * Unified power flow controller.
             *
             */
            base.parse_element (/<cim:FACTSDeviceKind.upfc>([\s\S]*?)<\/cim:FACTSDeviceKind.upfc>/g, obj, "upfc", base.to_string, sub, context);

            bucket = context.parsed.FACTSDeviceKind;
            if (null == bucket)
                context.parsed.FACTSDeviceKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Status of Winding Insulation Power Factor as of statusDate: Acceptable, Minor Deterioration or Moisture Absorption, Major Deterioration or Moisture Absorption, Failed.
             *
             */
            base.parse_element (/<cim:WindingInsulation.insulationPFStatus>([\s\S]*?)<\/cim:WindingInsulation.insulationPFStatus>/g, obj, "insulationPFStatus", base.to_string, sub, context);

            /**
             * For testType, status of Winding Insulation Resistance as of statusDate.
             *
             * Typical values are: Acceptable, Questionable, Failed.
             *
             */
            base.parse_element (/<cim:WindingInsulation.insulationResistance>([\s\S]*?)<\/cim:WindingInsulation.insulationResistance>/g, obj, "insulationResistance", base.to_string, sub, context);

            /**
             * As of statusDate, the leakage reactance measured at the "from" winding with the "to" winding short-circuited and all other windings open-circuited.
             *
             */
            base.parse_element (/<cim:WindingInsulation.leakageReactance>([\s\S]*?)<\/cim:WindingInsulation.leakageReactance>/g, obj, "leakageReactance", base.to_string, sub, context);

            base.parse_element (/<cim:WindingInsulation.status>([\s\S]*?)<\/cim:WindingInsulation.status>/g, obj, "status", base.to_string, sub, context);

            base.parse_attribute (/<cim:WindingInsulation.ToWinding\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ToWinding", sub, context, true);

            base.parse_attribute (/<cim:WindingInsulation.FromWinding\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FromWinding", sub, context, true);

            base.parse_attribute (/<cim:WindingInsulation.TransformerObservation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransformerObservation", sub, context, true);

            bucket = context.parsed.WindingInsulation;
            if (null == bucket)
                context.parsed.WindingInsulation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            base.parse_attribute (/<cim:AssetPropertyCurve.Specification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Specification", sub, context, true);

            bucket = context.parsed.AssetPropertyCurve;
            if (null == bucket)
                context.parsed.AssetPropertyCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * A description of the orientation of the object relative to the dimensions.
             *
             * As an example, a vault may have north-south orientation for the sizeLength measurement and sizeDepth may be the height of the vault.
             *
             */
            base.parse_element (/<cim:DimensionsInfo.orientation>([\s\S]*?)<\/cim:DimensionsInfo.orientation>/g, obj, "orientation", base.to_string, sub, context);

            /**
             * Depth measurement.
             *
             */
            base.parse_element (/<cim:DimensionsInfo.sizeDepth>([\s\S]*?)<\/cim:DimensionsInfo.sizeDepth>/g, obj, "sizeDepth", base.to_string, sub, context);

            /**
             * Diameter measurement.
             *
             */
            base.parse_element (/<cim:DimensionsInfo.sizeDiameter>([\s\S]*?)<\/cim:DimensionsInfo.sizeDiameter>/g, obj, "sizeDiameter", base.to_string, sub, context);

            /**
             * Length measurement.
             *
             */
            base.parse_element (/<cim:DimensionsInfo.sizeLength>([\s\S]*?)<\/cim:DimensionsInfo.sizeLength>/g, obj, "sizeLength", base.to_string, sub, context);

            /**
             * Width measurement.
             *
             */
            base.parse_element (/<cim:DimensionsInfo.sizeWidth>([\s\S]*?)<\/cim:DimensionsInfo.sizeWidth>/g, obj, "sizeWidth", base.to_string, sub, context);

            bucket = context.parsed.DimensionsInfo;
            if (null == bucket)
                context.parsed.DimensionsInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Bushing temperature.
             *
             */
            base.parse_element (/<cim:TransformerObservation.bushingTemp>([\s\S]*?)<\/cim:TransformerObservation.bushingTemp>/g, obj, "bushingTemp", base.to_string, sub, context);

            /**
             * Dissolved Gas Analysis.
             *
             * Typical values are: Acceptable, Overheating, Corona, Sparking, Arcing.
             *
             */
            base.parse_element (/<cim:TransformerObservation.dga>([\s\S]*?)<\/cim:TransformerObservation.dga>/g, obj, "dga", base.to_string, sub, context);

            /**
             * Frequency Response Analysis.
             *
             * Typical values are: acceptable, slight movement, significant movement, failed, near failure. A graphic of the response diagram, which is a type of document, may be associated with this analysis through the recursive document relationship of the ProcedureDataSet.
             *
             */
            base.parse_element (/<cim:TransformerObservation.freqResp>([\s\S]*?)<\/cim:TransformerObservation.freqResp>/g, obj, "freqResp", base.to_string, sub, context);

            /**
             * Overall measure of furfural in oil and mechanical strength of paper.
             *
             * DP, the degree of polymerization, is the strength of the paper. Furfural is a measure of furfural compounds, often expressed in parts per million.
             *
             */
            base.parse_element (/<cim:TransformerObservation.furfuralDP>([\s\S]*?)<\/cim:TransformerObservation.furfuralDP>/g, obj, "furfuralDP", base.to_string, sub, context);

            /**
             * Hotspot oil temperature.
             *
             */
            base.parse_element (/<cim:TransformerObservation.hotSpotTemp>([\s\S]*?)<\/cim:TransformerObservation.hotSpotTemp>/g, obj, "hotSpotTemp", base.to_string, sub, context);

            /**
             * Oil Quality Analysis-Color.
             *
             */
            base.parse_element (/<cim:TransformerObservation.oilColor>([\s\S]*?)<\/cim:TransformerObservation.oilColor>/g, obj, "oilColor", base.to_string, sub, context);

            /**
             * Oil Quality Analysis-Dielectric Strength.
             *
             */
            base.parse_element (/<cim:TransformerObservation.oilDielectricStrength>([\s\S]*?)<\/cim:TransformerObservation.oilDielectricStrength>/g, obj, "oilDielectricStrength", base.to_string, sub, context);

            /**
             * Oil Quality Analysis- inter facial tension (IFT) - number-Dynes/CM.
             *
             */
            base.parse_element (/<cim:TransformerObservation.oilIFT>([\s\S]*?)<\/cim:TransformerObservation.oilIFT>/g, obj, "oilIFT", base.to_string, sub, context);

            /**
             * The level of oil in the transformer.
             *
             */
            base.parse_element (/<cim:TransformerObservation.oilLevel>([\s\S]*?)<\/cim:TransformerObservation.oilLevel>/g, obj, "oilLevel", base.to_string, sub, context);

            /**
             * Oil Quality Analysis-Neutralization Number - Number - Mg KOH.
             *
             */
            base.parse_element (/<cim:TransformerObservation.oilNeutralizationNumber>([\s\S]*?)<\/cim:TransformerObservation.oilNeutralizationNumber>/g, obj, "oilNeutralizationNumber", base.to_string, sub, context);

            /**
             * Pump vibration, with typical values being: nominal, high.
             *
             */
            base.parse_element (/<cim:TransformerObservation.pumpVibration>([\s\S]*?)<\/cim:TransformerObservation.pumpVibration>/g, obj, "pumpVibration", base.to_string, sub, context);

            base.parse_element (/<cim:TransformerObservation.status>([\s\S]*?)<\/cim:TransformerObservation.status>/g, obj, "status", base.to_string, sub, context);

            /**
             * Top oil temperature.
             *
             */
            base.parse_element (/<cim:TransformerObservation.topOilTemp>([\s\S]*?)<\/cim:TransformerObservation.topOilTemp>/g, obj, "topOilTemp", base.to_string, sub, context);

            /**
             * Water Content expressed in parts per million.
             *
             */
            base.parse_element (/<cim:TransformerObservation.waterContent>([\s\S]*?)<\/cim:TransformerObservation.waterContent>/g, obj, "waterContent", base.to_string, sub, context);

            base.parse_attribute (/<cim:TransformerObservation.Reconditioning\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Reconditioning", sub, context, true);

            base.parse_attribute (/<cim:TransformerObservation.Transformer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Transformer", sub, context, true);

            bucket = context.parsed.TransformerObservation;
            if (null == bucket)
                context.parsed.TransformerObservation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Configuration of joint.
             *
             */
            base.parse_element (/<cim:Joint.configurationKind>([\s\S]*?)<\/cim:Joint.configurationKind>/g, obj, "configurationKind", base.to_string, sub, context);

            /**
             * Material used to fill the joint.
             *
             */
            base.parse_element (/<cim:Joint.fillKind>([\s\S]*?)<\/cim:Joint.fillKind>/g, obj, "fillKind", base.to_string, sub, context);

            /**
             * The type of insulation around the joint, classified according to the utility's asset management standards and practices.
             *
             */
            base.parse_element (/<cim:Joint.insulation>([\s\S]*?)<\/cim:Joint.insulation>/g, obj, "insulation", base.to_string, sub, context);

            bucket = context.parsed.Joint;
            if (null == bucket)
                context.parsed.Joint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Construction structure on the tower.
             *
             */
            base.parse_element (/<cim:Tower.constructionKind>([\s\S]*?)<\/cim:Tower.constructionKind>/g, obj, "constructionKind", base.to_string, sub, context);

            bucket = context.parsed.Tower;
            if (null == bucket)
                context.parsed.Tower = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Date and time this reconditioning (or a major overhaul) has been performed.
             *
             */
            base.parse_element (/<cim:Reconditioning.dateTime>([\s\S]*?)<\/cim:Reconditioning.dateTime>/g, obj, "dateTime", base.to_datetime, sub, context);

            base.parse_attribute (/<cim:Reconditioning.Asset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context, true);

            bucket = context.parsed.Reconditioning;
            if (null == bucket)
                context.parsed.Reconditioning = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Kind of this medium.
             *
             */
            base.parse_element (/<cim:Medium.kind>([\s\S]*?)<\/cim:Medium.kind>/g, obj, "kind", base.to_string, sub, context);

            /**
             * The volume of the medium specified for this application.
             *
             * Note that the actual volume is a type of measurement associated witht the asset.
             *
             */
            base.parse_element (/<cim:Medium.volumeSpec>([\s\S]*?)<\/cim:Medium.volumeSpec>/g, obj, "volumeSpec", base.to_string, sub, context);

            base.parse_attribute (/<cim:Medium.Specification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Specification", sub, context, true);

            bucket = context.parsed.Medium;
            if (null == bucket)
                context.parsed.Medium = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Kind of this facility.
             *
             */
            base.parse_element (/<cim:Facility.kind>([\s\S]*?)<\/cim:Facility.kind>/g, obj, "kind", base.to_string, sub, context);

            bucket = context.parsed.Facility;
            if (null == bucket)
                context.parsed.Facility = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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

            /**
             * Kind of test for this bushing.
             *
             */
            base.parse_element (/<cim:BushingInsulationPF.testKind>([\s\S]*?)<\/cim:BushingInsulationPF.testKind>/g, obj, "testKind", base.to_string, sub, context);

            base.parse_attribute (/<cim:BushingInsulationPF.Bushing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Bushing", sub, context, true);

            base.parse_attribute (/<cim:BushingInsulationPF.TransformerObservation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransformerObservation", sub, context, true);

            bucket = context.parsed.BushingInsulationPF;
            if (null == bucket)
                context.parsed.BushingInsulationPF = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Length of arm.
             *
             * Note that a new light may be placed on an existing arm.
             *
             */
            base.parse_element (/<cim:Streetlight.armLength>([\s\S]*?)<\/cim:Streetlight.armLength>/g, obj, "armLength", base.to_string, sub, context);

            /**
             * Lamp kind.
             *
             */
            base.parse_element (/<cim:Streetlight.lampKind>([\s\S]*?)<\/cim:Streetlight.lampKind>/g, obj, "lampKind", base.to_string, sub, context);

            /**
             * Power rating of light.
             *
             */
            base.parse_element (/<cim:Streetlight.lightRating>([\s\S]*?)<\/cim:Streetlight.lightRating>/g, obj, "lightRating", base.to_string, sub, context);

            /**
             * Pole to which thiss streetlight is attached.
             *
             */
            base.parse_attribute (/<cim:Streetlight.Pole\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Pole", sub, context, true);

            bucket = context.parsed.Streetlight;
            if (null == bucket)
                context.parsed.Streetlight = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_PoleBaseKind: parse_PoleBaseKind,
                parse_JointFillKind: parse_JointFillKind,
                parse_Pole: parse_Pole,
                parse_TowerConstructionKind: parse_TowerConstructionKind,
                parse_AnchorKind: parse_AnchorKind,
                parse_PolePreservativeKind: parse_PolePreservativeKind,
                parse_StructureMaterialKind: parse_StructureMaterialKind,
                parse_DimensionsInfo: parse_DimensionsInfo,
                parse_StructureSupport: parse_StructureSupport,
                parse_FailureIsolationMethodKind: parse_FailureIsolationMethodKind,
                parse_FinancialInfo: parse_FinancialInfo,
                parse_MediumKind: parse_MediumKind,
                parse_StreetlightLampKind: parse_StreetlightLampKind,
                parse_CoolingKind: parse_CoolingKind,
                parse_Streetlight: parse_Streetlight,
                parse_WindingInsulation: parse_WindingInsulation,
                parse_UndergroundStructureKind: parse_UndergroundStructureKind,
                parse_Medium: parse_Medium,
                parse_Cabinet: parse_Cabinet,
                parse_FailureEvent: parse_FailureEvent,
                parse_Structure: parse_Structure,
                parse_FACTSDevice: parse_FACTSDevice,
                parse_Specification: parse_Specification,
                parse_Reconditioning: parse_Reconditioning,
                parse_TransformerObservation: parse_TransformerObservation,
                parse_GenericAssetModelOrMaterial: parse_GenericAssetModelOrMaterial,
                parse_AssetPropertyCurve: parse_AssetPropertyCurve,
                parse_CoolingPowerRating: parse_CoolingPowerRating,
                parse_DuctBank: parse_DuctBank,
                parse_UndergroundStructure: parse_UndergroundStructure,
                parse_StructureSupportKind: parse_StructureSupportKind,
                parse_JointConfigurationKind: parse_JointConfigurationKind,
                parse_BushingInsulationPfTestKind: parse_BushingInsulationPfTestKind,
                parse_PoleTreatmentKind: parse_PoleTreatmentKind,
                parse_FACTSDeviceKind: parse_FACTSDeviceKind,
                parse_Joint: parse_Joint,
                parse_BushingInsulationPF: parse_BushingInsulationPF,
                parse_Facility: parse_Facility,
                parse_Tower: parse_Tower,
                parse_ReliabilityInfo: parse_ReliabilityInfo,
                parse_BushingInsulationKind: parse_BushingInsulationKind,
                parse_Bushing: parse_Bushing
            }
        );
    }
);