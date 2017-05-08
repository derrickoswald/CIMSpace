define
(
    ["model/base", "model/Assets", "model/Common", "model/Core"],
    /**
     * The package is used to define asset-level models for objects.
     * Assets may be comprised of other assets and may have relationships to other assets. Assets also have owners and values. Assets may also have a relationship to a PowerSystemResource in the Wires model.
     */
    function (base, Assets, Common, Core)
    {

        /**
         * Kind of fill for Joint.
         */
        function parse_JointFillKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "JointFillKind";
            obj["noFillPrefab"] = base.parse_element (/<cim:JointFillKind.noFillPrefab>([\s\S]*?)<\/cim:JointFillKind.noFillPrefab>/g, sub, context, true);
            obj["airNoFilling"] = base.parse_element (/<cim:JointFillKind.airNoFilling>([\s\S]*?)<\/cim:JointFillKind.airNoFilling>/g, sub, context, true);
            obj["petrolatum"] = base.parse_element (/<cim:JointFillKind.petrolatum>([\s\S]*?)<\/cim:JointFillKind.petrolatum>/g, sub, context, true);
            obj["asphaltic"] = base.parse_element (/<cim:JointFillKind.asphaltic>([\s\S]*?)<\/cim:JointFillKind.asphaltic>/g, sub, context, true);
            obj["oil"] = base.parse_element (/<cim:JointFillKind.oil>([\s\S]*?)<\/cim:JointFillKind.oil>/g, sub, context, true);
            obj["bluefill254"] = base.parse_element (/<cim:JointFillKind.bluefill254>([\s\S]*?)<\/cim:JointFillKind.bluefill254>/g, sub, context, true);
            obj["noVoid"] = base.parse_element (/<cim:JointFillKind.noVoid>([\s\S]*?)<\/cim:JointFillKind.noVoid>/g, sub, context, true);
            obj["epoxy"] = base.parse_element (/<cim:JointFillKind.epoxy>([\s\S]*?)<\/cim:JointFillKind.epoxy>/g, sub, context, true);
            obj["insoluseal"] = base.parse_element (/<cim:JointFillKind.insoluseal>([\s\S]*?)<\/cim:JointFillKind.insoluseal>/g, sub, context, true);
            obj["other"] = base.parse_element (/<cim:JointFillKind.other>([\s\S]*?)<\/cim:JointFillKind.other>/g, sub, context, true);
            bucket = context.parsed.JointFillKind;
            if (null == bucket)
                context.parsed.JointFillKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * FACTS device asset.
         */
        function parse_FACTSDevice (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_Asset (context, sub);
            obj.cls = "FACTSDevice";
            /**
             * Kind of FACTS device.
             */
            obj["kind"] = base.parse_element (/<cim:FACTSDevice.kind>([\s\S]*?)<\/cim:FACTSDevice.kind>/g, sub, context, true);
            bucket = context.parsed.FACTSDevice;
            if (null == bucket)
                context.parsed.FACTSDevice = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Underground structure.
         */
        function parse_UndergroundStructure (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Structure (context, sub);
            obj.cls = "UndergroundStructure";
            /**
             * True if vault is ventilating.
             */
            obj["hasVentilation"] = base.to_boolean (base.parse_element (/<cim:UndergroundStructure.hasVentilation>([\s\S]*?)<\/cim:UndergroundStructure.hasVentilation>/g, sub, context, true));
            /**
             * True if vault is ventilating.
             */
            obj["kind"] = base.parse_element (/<cim:UndergroundStructure.kind>([\s\S]*?)<\/cim:UndergroundStructure.kind>/g, sub, context, true);
            /**
             * Primary material of underground structure.
             */
            obj["material"] = base.parse_element (/<cim:UndergroundStructure.material>([\s\S]*?)<\/cim:UndergroundStructure.material>/g, sub, context, true);
            /**
             * Date sealing warranty expires.
             */
            obj["sealingWarrantyExpiresDate"] = base.parse_element (/<cim:UndergroundStructure.sealingWarrantyExpiresDate>([\s\S]*?)<\/cim:UndergroundStructure.sealingWarrantyExpiresDate>/g, sub, context, true);
            bucket = context.parsed.UndergroundStructure;
            if (null == bucket)
                context.parsed.UndergroundStructure = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Insulation kind for bushings.
         */
        function parse_BushingInsulationKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "BushingInsulationKind";
            obj["paperoil"] = base.parse_element (/<cim:BushingInsulationKind.paperoil>([\s\S]*?)<\/cim:BushingInsulationKind.paperoil>/g, sub, context, true);
            obj["compound"] = base.parse_element (/<cim:BushingInsulationKind.compound>([\s\S]*?)<\/cim:BushingInsulationKind.compound>/g, sub, context, true);
            obj["solidPorcelain"] = base.parse_element (/<cim:BushingInsulationKind.solidPorcelain>([\s\S]*?)<\/cim:BushingInsulationKind.solidPorcelain>/g, sub, context, true);
            obj["other"] = base.parse_element (/<cim:BushingInsulationKind.other>([\s\S]*?)<\/cim:BushingInsulationKind.other>/g, sub, context, true);
            bucket = context.parsed.BushingInsulationKind;
            if (null == bucket)
                context.parsed.BushingInsulationKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Specification can be used for various purposes relative to an asset, a logical device (PowerSystemResource), location, etc.
         * Examples include documents supplied by manufacturers such as asset installation instructions, asset maintenance instructions, etc.
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
         */
        function parse_FailureEvent (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_ActivityRecord (context, sub);
            obj.cls = "FailureEvent";
            /**
             * Code for asset failure.
             */
            obj["corporateCode"] = base.parse_element (/<cim:FailureEvent.corporateCode>([\s\S]*?)<\/cim:FailureEvent.corporateCode>/g, sub, context, true);
            /**
             * How the asset failure was isolated from the system.
             */
            obj["failureIsolationMethod"] = base.parse_element (/<cim:FailureEvent.failureIsolationMethod>([\s\S]*?)<\/cim:FailureEvent.failureIsolationMethod>/g, sub, context, true);
            /**
             * The method used for locating the faulted part of the asset.
             * For example, cable options include: Cap Discharge-Thumping, Bridge Method, Visual Inspection, Other.
             */
            obj["faultLocatingMethod"] = base.parse_element (/<cim:FailureEvent.faultLocatingMethod>([\s\S]*?)<\/cim:FailureEvent.faultLocatingMethod>/g, sub, context, true);
            /**
             * Failure location on an object.
             */
            obj["location"] = base.parse_element (/<cim:FailureEvent.location>([\s\S]*?)<\/cim:FailureEvent.location>/g, sub, context, true);
            bucket = context.parsed.FailureEvent;
            if (null == bucket)
                context.parsed.FailureEvent = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of anchor.
         */
        function parse_AnchorKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AnchorKind";
            obj["concrete"] = base.parse_element (/<cim:AnchorKind.concrete>([\s\S]*?)<\/cim:AnchorKind.concrete>/g, sub, context, true);
            obj["helix"] = base.parse_element (/<cim:AnchorKind.helix>([\s\S]*?)<\/cim:AnchorKind.helix>/g, sub, context, true);
            obj["multiHelix"] = base.parse_element (/<cim:AnchorKind.multiHelix>([\s\S]*?)<\/cim:AnchorKind.multiHelix>/g, sub, context, true);
            obj["rod"] = base.parse_element (/<cim:AnchorKind.rod>([\s\S]*?)<\/cim:AnchorKind.rod>/g, sub, context, true);
            obj["screw"] = base.parse_element (/<cim:AnchorKind.screw>([\s\S]*?)<\/cim:AnchorKind.screw>/g, sub, context, true);
            obj["unknown"] = base.parse_element (/<cim:AnchorKind.unknown>([\s\S]*?)<\/cim:AnchorKind.unknown>/g, sub, context, true);
            obj["other"] = base.parse_element (/<cim:AnchorKind.other>([\s\S]*?)<\/cim:AnchorKind.other>/g, sub, context, true);
            bucket = context.parsed.AnchorKind;
            if (null == bucket)
                context.parsed.AnchorKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Construction holding assets such as conductors, transformers, switchgear, etc.
         * Where applicable, number of conductors can be derived from the number of associated wire spacing instances.
         */
        function parse_Structure (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetContainer (context, sub);
            obj.cls = "Structure";
            /**
             * Date fumigant was last applied.
             */
            obj["fumigantAppliedDate"] = base.parse_element (/<cim:Structure.fumigantAppliedDate>([\s\S]*?)<\/cim:Structure.fumigantAppliedDate>/g, sub, context, true);
            /**
             * Name of fumigant.
             */
            obj["fumigantName"] = base.parse_element (/<cim:Structure.fumigantName>([\s\S]*?)<\/cim:Structure.fumigantName>/g, sub, context, true);
            /**
             * Visible height of structure above ground level for overhead construction (e.g., Pole or Tower) or below ground level for an underground vault, manhole, etc.
             * Refer to associated DimensionPropertiesInfo for other types of dimensions.
             */
            obj["height"] = base.parse_element (/<cim:Structure.height>([\s\S]*?)<\/cim:Structure.height>/g, sub, context, true);
            /**
             * Material this structure is made of.
             */
            obj["materialKind"] = base.parse_element (/<cim:Structure.materialKind>([\s\S]*?)<\/cim:Structure.materialKind>/g, sub, context, true);
            /**
             * Maximum rated voltage of the equipment that can be mounted on/contained within the structure.
             */
            obj["ratedVoltage"] = base.parse_element (/<cim:Structure.ratedVoltage>([\s\S]*?)<\/cim:Structure.ratedVoltage>/g, sub, context, true);
            /**
             * True if weeds are to be removed around asset.
             */
            obj["removeWeed"] = base.to_boolean (base.parse_element (/<cim:Structure.removeWeed>([\s\S]*?)<\/cim:Structure.removeWeed>/g, sub, context, true));
            /**
             * Date weed were last removed.
             */
            obj["weedRemovedDate"] = base.parse_element (/<cim:Structure.weedRemovedDate>([\s\S]*?)<\/cim:Structure.weedRemovedDate>/g, sub, context, true);
            bucket = context.parsed.Structure;
            if (null == bucket)
                context.parsed.Structure = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Pole asset.
         */
        function parse_Pole (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Structure (context, sub);
            obj.cls = "Pole";
            /**
             * Kind of base for this pole.
             */
            obj["baseKind"] = base.parse_element (/<cim:Pole.baseKind>([\s\S]*?)<\/cim:Pole.baseKind>/g, sub, context, true);
            /**
             * True if a block of material has been attached to base of pole in ground for stability.
             * This technique is used primarily when anchors can not be used.
             */
            obj["breastBlock"] = base.to_boolean (base.parse_element (/<cim:Pole.breastBlock>([\s\S]*?)<\/cim:Pole.breastBlock>/g, sub, context, true));
            /**
             * Pole class: 1, 2, 3, 4, 5, 6, 7, H1, H2, Other, Unknown.
             */
            obj["classification"] = base.parse_element (/<cim:Pole.classification>([\s\S]*?)<\/cim:Pole.classification>/g, sub, context, true);
            /**
             * The framing structure mounted on the pole.
             */
            obj["construction"] = base.parse_element (/<cim:Pole.construction>([\s\S]*?)<\/cim:Pole.construction>/g, sub, context, true);
            /**
             * Diameter of the pole.
             */
            obj["diameter"] = base.parse_element (/<cim:Pole.diameter>([\s\S]*?)<\/cim:Pole.diameter>/g, sub, context, true);
            /**
             * Joint pole agreement reference number.
             */
            obj["jpaReference"] = base.parse_element (/<cim:Pole.jpaReference>([\s\S]*?)<\/cim:Pole.jpaReference>/g, sub, context, true);
            /**
             * Length of the pole (inclusive of any section of the pole that may be underground post-installation).
             */
            obj["length"] = base.parse_element (/<cim:Pole.length>([\s\S]*?)<\/cim:Pole.length>/g, sub, context, true);
            /**
             * Kind of preservative for this pole.
             */
            obj["preservativeKind"] = base.parse_element (/<cim:Pole.preservativeKind>([\s\S]*?)<\/cim:Pole.preservativeKind>/g, sub, context, true);
            /**
             * Pole species.
             * Aluminum, Aluminum Davit, Concrete, Fiberglass, Galvanized Davit, Galvanized, Steel Davit Primed, Steel Davit, Steel Standard Primed, Steel, Truncated, Wood-Treated, Wood-Hard, Wood-Salt Treated, Wood-Soft, Wood, Other, Unknown.
             */
            obj["speciesType"] = base.parse_element (/<cim:Pole.speciesType>([\s\S]*?)<\/cim:Pole.speciesType>/g, sub, context, true);
            /**
             * Date and time pole was last treated with preservative.
             */
            obj["treatedDateTime"] = base.to_datetime (base.parse_element (/<cim:Pole.treatedDateTime>([\s\S]*?)<\/cim:Pole.treatedDateTime>/g, sub, context, true));
            /**
             * Kind of treatment for this pole.
             */
            obj["treatmentKind"] = base.parse_element (/<cim:Pole.treatmentKind>([\s\S]*?)<\/cim:Pole.treatmentKind>/g, sub, context, true);
            bucket = context.parsed.Pole;
            if (null == bucket)
                context.parsed.Pole = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of treatment for poles.
         */
        function parse_PoleTreatmentKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PoleTreatmentKind";
            obj["full"] = base.parse_element (/<cim:PoleTreatmentKind.full>([\s\S]*?)<\/cim:PoleTreatmentKind.full>/g, sub, context, true);
            obj["butt"] = base.parse_element (/<cim:PoleTreatmentKind.butt>([\s\S]*?)<\/cim:PoleTreatmentKind.butt>/g, sub, context, true);
            obj["natural"] = base.parse_element (/<cim:PoleTreatmentKind.natural>([\s\S]*?)<\/cim:PoleTreatmentKind.natural>/g, sub, context, true);
            obj["grayStain"] = base.parse_element (/<cim:PoleTreatmentKind.grayStain>([\s\S]*?)<\/cim:PoleTreatmentKind.grayStain>/g, sub, context, true);
            obj["greenStain"] = base.parse_element (/<cim:PoleTreatmentKind.greenStain>([\s\S]*?)<\/cim:PoleTreatmentKind.greenStain>/g, sub, context, true);
            obj["penta"] = base.parse_element (/<cim:PoleTreatmentKind.penta>([\s\S]*?)<\/cim:PoleTreatmentKind.penta>/g, sub, context, true);
            obj["unknown"] = base.parse_element (/<cim:PoleTreatmentKind.unknown>([\s\S]*?)<\/cim:PoleTreatmentKind.unknown>/g, sub, context, true);
            obj["other"] = base.parse_element (/<cim:PoleTreatmentKind.other>([\s\S]*?)<\/cim:PoleTreatmentKind.other>/g, sub, context, true);
            bucket = context.parsed.PoleTreatmentKind;
            if (null == bucket)
                context.parsed.PoleTreatmentKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Generic asset or material item that may be used for planning, work or design purposes.
         */
        function parse_GenericAssetModelOrMaterial (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetModel (context, sub);
            obj.cls = "GenericAssetModelOrMaterial";
            /**
             * Estimated unit cost (or cost per unit length) of this type of asset.
             * It does not include labor to install/construct or configure it.
             */
            obj["estimatedUnitCost"] = base.parse_element (/<cim:GenericAssetModelOrMaterial.estimatedUnitCost>([\s\S]*?)<\/cim:GenericAssetModelOrMaterial.estimatedUnitCost>/g, sub, context, true);
            /**
             * The value, unit of measure, and multiplier for the quantity.
             */
            obj["quantity"] = base.parse_element (/<cim:GenericAssetModelOrMaterial.quantity>([\s\S]*?)<\/cim:GenericAssetModelOrMaterial.quantity>/g, sub, context, true);
            /**
             * True if item is a stock item (default).
             */
            obj["stockItem"] = base.to_boolean (base.parse_element (/<cim:GenericAssetModelOrMaterial.stockItem>([\s\S]*?)<\/cim:GenericAssetModelOrMaterial.stockItem>/g, sub, context, true));
            /**
             * 
             */
            obj["CUWorkEquipmentAsset"] = base.parse_attribute (/<cim:GenericAssetModelOrMaterial.CUWorkEquipmentAsset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["TypeAssetCatalogue"] = base.parse_attribute (/<cim:GenericAssetModelOrMaterial.TypeAssetCatalogue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["CUAsset"] = base.parse_attribute (/<cim:GenericAssetModelOrMaterial.CUAsset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.GenericAssetModelOrMaterial;
            if (null == bucket)
                context.parsed.GenericAssetModelOrMaterial = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of cooling.
         */
        function parse_CoolingKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CoolingKind";
            obj["selfCooling"] = base.parse_element (/<cim:CoolingKind.selfCooling>([\s\S]*?)<\/cim:CoolingKind.selfCooling>/g, sub, context, true);
            obj["forcedAir"] = base.parse_element (/<cim:CoolingKind.forcedAir>([\s\S]*?)<\/cim:CoolingKind.forcedAir>/g, sub, context, true);
            obj["forcedOilAndAir"] = base.parse_element (/<cim:CoolingKind.forcedOilAndAir>([\s\S]*?)<\/cim:CoolingKind.forcedOilAndAir>/g, sub, context, true);
            obj["other"] = base.parse_element (/<cim:CoolingKind.other>([\s\S]*?)<\/cim:CoolingKind.other>/g, sub, context, true);
            bucket = context.parsed.CoolingKind;
            if (null == bucket)
                context.parsed.CoolingKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * There are often stages of power which are associated with stages of cooling.
         * For instance, a transformer may be rated 121kV on the primary, 15kV on the secondary and 4kV on the tertiary winding. These are voltage ratings and the power ratings are generally the same for all three windings and independent of the voltage ratings, there are instances where the tertiary may have a lower power rating.
         */
        function parse_CoolingPowerRating (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "CoolingPowerRating";
            /**
             * Kind of cooling system.
             */
            obj["coolingKind"] = base.parse_element (/<cim:CoolingPowerRating.coolingKind>([\s\S]*?)<\/cim:CoolingPowerRating.coolingKind>/g, sub, context, true);
            /**
             * The power rating associated with type of cooling specified for this stage.
             */
            obj["powerRating"] = base.parse_element (/<cim:CoolingPowerRating.powerRating>([\s\S]*?)<\/cim:CoolingPowerRating.powerRating>/g, sub, context, true);
            /**
             * Stage of cooling and associated power rating.
             */
            obj["stage"] = base.parse_element (/<cim:CoolingPowerRating.stage>([\s\S]*?)<\/cim:CoolingPowerRating.stage>/g, sub, context, true);
            bucket = context.parsed.CoolingPowerRating;
            if (null == bucket)
                context.parsed.CoolingPowerRating = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of structure support.
         */
        function parse_StructureSupportKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "StructureSupportKind";
            obj["anchor"] = base.parse_element (/<cim:StructureSupportKind.anchor>([\s\S]*?)<\/cim:StructureSupportKind.anchor>/g, sub, context, true);
            obj["guy"] = base.parse_element (/<cim:StructureSupportKind.guy>([\s\S]*?)<\/cim:StructureSupportKind.guy>/g, sub, context, true);
            bucket = context.parsed.StructureSupportKind;
            if (null == bucket)
                context.parsed.StructureSupportKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Various current financial properties associated with a particular asset.
         * Historical properties may be determined by ActivityRecords associated with the asset.
         */
        function parse_FinancialInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "FinancialInfo";
            /**
             * The account to which this actual material item is charged.
             */
            obj["account"] = base.parse_element (/<cim:FinancialInfo.account>([\s\S]*?)<\/cim:FinancialInfo.account>/g, sub, context, true);
            /**
             * The actual purchase cost of this particular asset.
             */
            obj["actualPurchaseCost"] = base.parse_element (/<cim:FinancialInfo.actualPurchaseCost>([\s\S]*?)<\/cim:FinancialInfo.actualPurchaseCost>/g, sub, context, true);
            /**
             * Description of the cost.
             */
            obj["costDescription"] = base.parse_element (/<cim:FinancialInfo.costDescription>([\s\S]*?)<\/cim:FinancialInfo.costDescription>/g, sub, context, true);
            /**
             * Type of cost to which this Material Item belongs.
             */
            obj["costType"] = base.parse_element (/<cim:FinancialInfo.costType>([\s\S]*?)<\/cim:FinancialInfo.costType>/g, sub, context, true);
            /**
             * Value of asset as of 'valueDateTime'.
             */
            obj["financialValue"] = base.parse_element (/<cim:FinancialInfo.financialValue>([\s\S]*?)<\/cim:FinancialInfo.financialValue>/g, sub, context, true);
            /**
             * Date and time asset's financial value was put in plant for regulatory accounting purposes (e.g., for rate base calculations).
             * This is sometime referred to as the "in-service date".
             */
            obj["plantTransferDateTime"] = base.to_datetime (base.parse_element (/<cim:FinancialInfo.plantTransferDateTime>([\s\S]*?)<\/cim:FinancialInfo.plantTransferDateTime>/g, sub, context, true));
            /**
             * Date and time asset was purchased.
             */
            obj["purchaseDateTime"] = base.to_datetime (base.parse_element (/<cim:FinancialInfo.purchaseDateTime>([\s\S]*?)<\/cim:FinancialInfo.purchaseDateTime>/g, sub, context, true));
            /**
             * Purchase order identifier.
             */
            obj["purchaseOrderNumber"] = base.parse_element (/<cim:FinancialInfo.purchaseOrderNumber>([\s\S]*?)<\/cim:FinancialInfo.purchaseOrderNumber>/g, sub, context, true);
            /**
             * The quantity of the asset if per unit length, for example conductor.
             */
            obj["quantity"] = base.parse_element (/<cim:FinancialInfo.quantity>([\s\S]*?)<\/cim:FinancialInfo.quantity>/g, sub, context, true);
            /**
             * Date and time at which the financial value was last established.
             */
            obj["valueDateTime"] = base.to_datetime (base.parse_element (/<cim:FinancialInfo.valueDateTime>([\s\S]*?)<\/cim:FinancialInfo.valueDateTime>/g, sub, context, true));
            /**
             * Date and time warranty on asset expires.
             */
            obj["warrantyEndDateTime"] = base.to_datetime (base.parse_element (/<cim:FinancialInfo.warrantyEndDateTime>([\s\S]*?)<\/cim:FinancialInfo.warrantyEndDateTime>/g, sub, context, true));
            /**
             * 
             */
            obj["Asset"] = base.parse_attribute (/<cim:FinancialInfo.Asset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.FinancialInfo;
            if (null == bucket)
                context.parsed.FinancialInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Preservative kind for poles.
         */
        function parse_PolePreservativeKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PolePreservativeKind";
            obj["creosote"] = base.parse_element (/<cim:PolePreservativeKind.creosote>([\s\S]*?)<\/cim:PolePreservativeKind.creosote>/g, sub, context, true);
            obj["cellon"] = base.parse_element (/<cim:PolePreservativeKind.cellon>([\s\S]*?)<\/cim:PolePreservativeKind.cellon>/g, sub, context, true);
            obj["naphthena"] = base.parse_element (/<cim:PolePreservativeKind.naphthena>([\s\S]*?)<\/cim:PolePreservativeKind.naphthena>/g, sub, context, true);
            obj["penta"] = base.parse_element (/<cim:PolePreservativeKind.penta>([\s\S]*?)<\/cim:PolePreservativeKind.penta>/g, sub, context, true);
            obj["chemonite"] = base.parse_element (/<cim:PolePreservativeKind.chemonite>([\s\S]*?)<\/cim:PolePreservativeKind.chemonite>/g, sub, context, true);
            obj["unknown"] = base.parse_element (/<cim:PolePreservativeKind.unknown>([\s\S]*?)<\/cim:PolePreservativeKind.unknown>/g, sub, context, true);
            obj["other"] = base.parse_element (/<cim:PolePreservativeKind.other>([\s\S]*?)<\/cim:PolePreservativeKind.other>/g, sub, context, true);
            bucket = context.parsed.PolePreservativeKind;
            if (null == bucket)
                context.parsed.PolePreservativeKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Support for structure assets.
         */
        function parse_StructureSupport (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_Asset (context, sub);
            obj.cls = "StructureSupport";
            /**
             * (if anchor) Kind of anchor.
             */
            obj["anchorKind"] = base.parse_element (/<cim:StructureSupport.anchorKind>([\s\S]*?)<\/cim:StructureSupport.anchorKind>/g, sub, context, true);
            /**
             * (if anchor) Number of rods used.
             */
            obj["anchorRodCount"] = base.parse_element (/<cim:StructureSupport.anchorRodCount>([\s\S]*?)<\/cim:StructureSupport.anchorRodCount>/g, sub, context, true);
            /**
             * (if anchor) Length of rod used.
             */
            obj["anchorRodLength"] = base.parse_element (/<cim:StructureSupport.anchorRodLength>([\s\S]*?)<\/cim:StructureSupport.anchorRodLength>/g, sub, context, true);
            /**
             * Direction of this support structure.
             */
            obj["direction"] = base.parse_element (/<cim:StructureSupport.direction>([\s\S]*?)<\/cim:StructureSupport.direction>/g, sub, context, true);
            /**
             * Kind of structure support.
             */
            obj["kind"] = base.parse_element (/<cim:StructureSupport.kind>([\s\S]*?)<\/cim:StructureSupport.kind>/g, sub, context, true);
            /**
             * Length of this support structure.
             */
            obj["length"] = base.parse_element (/<cim:StructureSupport.length>([\s\S]*?)<\/cim:StructureSupport.length>/g, sub, context, true);
            /**
             * Size of this support structure.
             */
            obj["size"] = base.parse_element (/<cim:StructureSupport.size>([\s\S]*?)<\/cim:StructureSupport.size>/g, sub, context, true);
            /**
             * 
             */
            obj["SecuredStructure"] = base.parse_attribute (/<cim:StructureSupport.SecuredStructure\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.StructureSupport;
            if (null == bucket)
                context.parsed.StructureSupport = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A duct contains individual wires in the layout as specified with associated wire spacing instances; number of them gives the number of conductors in this duct.
         */
        function parse_DuctBank (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetContainer (context, sub);
            obj.cls = "DuctBank";
            /**
             * Number of circuits in duct bank.
             * Refer to associations between a duct (ConductorAsset) and an ACLineSegment to understand which circuits are in which ducts.
             */
            obj["circuitCount"] = base.parse_element (/<cim:DuctBank.circuitCount>([\s\S]*?)<\/cim:DuctBank.circuitCount>/g, sub, context, true);
            bucket = context.parsed.DuctBank;
            if (null == bucket)
                context.parsed.DuctBank = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of configuration for joints.
         */
        function parse_JointConfigurationKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "JointConfigurationKind";
            obj["wires3to1"] = base.parse_element (/<cim:JointConfigurationKind.wires3to1>([\s\S]*?)<\/cim:JointConfigurationKind.wires3to1>/g, sub, context, true);
            obj["wires2to1"] = base.parse_element (/<cim:JointConfigurationKind.wires2to1>([\s\S]*?)<\/cim:JointConfigurationKind.wires2to1>/g, sub, context, true);
            obj["wires1to1"] = base.parse_element (/<cim:JointConfigurationKind.wires1to1>([\s\S]*?)<\/cim:JointConfigurationKind.wires1to1>/g, sub, context, true);
            obj["other"] = base.parse_element (/<cim:JointConfigurationKind.other>([\s\S]*?)<\/cim:JointConfigurationKind.other>/g, sub, context, true);
            bucket = context.parsed.JointConfigurationKind;
            if (null == bucket)
                context.parsed.JointConfigurationKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Bushing asset.
         */
        function parse_Bushing (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_Asset (context, sub);
            obj.cls = "Bushing";
            /**
             * Factory measured capacitance, measured between the power factor tap and the bushing conductor.
             */
            obj["c1Capacitance"] = base.parse_element (/<cim:Bushing.c1Capacitance>([\s\S]*?)<\/cim:Bushing.c1Capacitance>/g, sub, context, true);
            /**
             * Factory measured insulation power factor, measured between the power factor tap and the bushing conductor.
             */
            obj["c1PowerFactor"] = base.to_float (base.parse_element (/<cim:Bushing.c1PowerFactor>([\s\S]*?)<\/cim:Bushing.c1PowerFactor>/g, sub, context, true));
            /**
             * Factory measured capacitance measured between the power factor tap and ground.
             */
            obj["c2Capacitance"] = base.parse_element (/<cim:Bushing.c2Capacitance>([\s\S]*?)<\/cim:Bushing.c2Capacitance>/g, sub, context, true);
            /**
             * Factory measured insulation power factor, measured between the power factor tap and ground.
             */
            obj["c2PowerFactor"] = base.to_float (base.parse_element (/<cim:Bushing.c2PowerFactor>([\s\S]*?)<\/cim:Bushing.c2PowerFactor>/g, sub, context, true));
            /**
             * Kind of insulation.
             */
            obj["insulationKind"] = base.parse_element (/<cim:Bushing.insulationKind>([\s\S]*?)<\/cim:Bushing.insulationKind>/g, sub, context, true);
            /**
             * 
             */
            obj["Terminal"] = base.parse_attribute (/<cim:Bushing.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.Bushing;
            if (null == bucket)
                context.parsed.Bushing = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Information regarding the experienced and expected reliability of a specific asset, type of asset, or asset model.
         */
        function parse_ReliabilityInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ReliabilityInfo";
            /**
             * Momentary failure rate (temporary failures/kft-year).
             */
            obj["momFailureRate"] = base.parse_element (/<cim:ReliabilityInfo.momFailureRate>([\s\S]*?)<\/cim:ReliabilityInfo.momFailureRate>/g, sub, context, true);
            /**
             * Mean time to repair (MTTR - hours).
             */
            obj["mTTR"] = base.parse_element (/<cim:ReliabilityInfo.mTTR>([\s\S]*?)<\/cim:ReliabilityInfo.mTTR>/g, sub, context, true);
            /**
             * 
             */
            obj["Specification"] = base.parse_attribute (/<cim:ReliabilityInfo.Specification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ReliabilityInfo;
            if (null == bucket)
                context.parsed.ReliabilityInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of tower construction.
         */
        function parse_TowerConstructionKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TowerConstructionKind";
            obj["suspension"] = base.parse_element (/<cim:TowerConstructionKind.suspension>([\s\S]*?)<\/cim:TowerConstructionKind.suspension>/g, sub, context, true);
            obj["tension"] = base.parse_element (/<cim:TowerConstructionKind.tension>([\s\S]*?)<\/cim:TowerConstructionKind.tension>/g, sub, context, true);
            bucket = context.parsed.TowerConstructionKind;
            if (null == bucket)
                context.parsed.TowerConstructionKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of lamp for the streetlight.
         */
        function parse_StreetlightLampKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "StreetlightLampKind";
            obj["highPressureSodium"] = base.parse_element (/<cim:StreetlightLampKind.highPressureSodium>([\s\S]*?)<\/cim:StreetlightLampKind.highPressureSodium>/g, sub, context, true);
            obj["mercuryVapor"] = base.parse_element (/<cim:StreetlightLampKind.mercuryVapor>([\s\S]*?)<\/cim:StreetlightLampKind.mercuryVapor>/g, sub, context, true);
            obj["metalHalide"] = base.parse_element (/<cim:StreetlightLampKind.metalHalide>([\s\S]*?)<\/cim:StreetlightLampKind.metalHalide>/g, sub, context, true);
            obj["other"] = base.parse_element (/<cim:StreetlightLampKind.other>([\s\S]*?)<\/cim:StreetlightLampKind.other>/g, sub, context, true);
            bucket = context.parsed.StreetlightLampKind;
            if (null == bucket)
                context.parsed.StreetlightLampKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of PF test for bushing insulation.
         */
        function parse_BushingInsulationPfTestKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "BushingInsulationPfTestKind";
            /**
             * Power factor tap-to-ground.
             */
            obj["c1"] = base.parse_element (/<cim:BushingInsulationPfTestKind.c1>([\s\S]*?)<\/cim:BushingInsulationPfTestKind.c1>/g, sub, context, true);
            /**
             * Power factor tap-to-conductor.
             */
            obj["c2"] = base.parse_element (/<cim:BushingInsulationPfTestKind.c2>([\s\S]*?)<\/cim:BushingInsulationPfTestKind.c2>/g, sub, context, true);
            bucket = context.parsed.BushingInsulationPfTestKind;
            if (null == bucket)
                context.parsed.BushingInsulationPfTestKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of FACTS device.
         */
        function parse_FACTSDeviceKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "FACTSDeviceKind";
            /**
             * Static VAr compensator.
             */
            obj["svc"] = base.parse_element (/<cim:FACTSDeviceKind.svc>([\s\S]*?)<\/cim:FACTSDeviceKind.svc>/g, sub, context, true);
            /**
             * Static synchronous compensator.
             */
            obj["statcom"] = base.parse_element (/<cim:FACTSDeviceKind.statcom>([\s\S]*?)<\/cim:FACTSDeviceKind.statcom>/g, sub, context, true);
            /**
             * Thyristor-controlled phase-angle regulator.
             */
            obj["tcpar"] = base.parse_element (/<cim:FACTSDeviceKind.tcpar>([\s\S]*?)<\/cim:FACTSDeviceKind.tcpar>/g, sub, context, true);
            /**
             * Thyristor-controlled series capacitor.
             */
            obj["tcsc"] = base.parse_element (/<cim:FACTSDeviceKind.tcsc>([\s\S]*?)<\/cim:FACTSDeviceKind.tcsc>/g, sub, context, true);
            /**
             * Thyristor-controlled voltage limiter.
             */
            obj["tcvl"] = base.parse_element (/<cim:FACTSDeviceKind.tcvl>([\s\S]*?)<\/cim:FACTSDeviceKind.tcvl>/g, sub, context, true);
            /**
             * Thyristor-switched braking resistor.
             */
            obj["tsbr"] = base.parse_element (/<cim:FACTSDeviceKind.tsbr>([\s\S]*?)<\/cim:FACTSDeviceKind.tsbr>/g, sub, context, true);
            /**
             * Thyristor-switched series capacitor.
             */
            obj["tssc"] = base.parse_element (/<cim:FACTSDeviceKind.tssc>([\s\S]*?)<\/cim:FACTSDeviceKind.tssc>/g, sub, context, true);
            /**
             * Unified power flow controller.
             */
            obj["upfc"] = base.parse_element (/<cim:FACTSDeviceKind.upfc>([\s\S]*?)<\/cim:FACTSDeviceKind.upfc>/g, sub, context, true);
            bucket = context.parsed.FACTSDeviceKind;
            if (null == bucket)
                context.parsed.FACTSDeviceKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of medium.
         */
        function parse_MediumKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MediumKind";
            obj["gas"] = base.parse_element (/<cim:MediumKind.gas>([\s\S]*?)<\/cim:MediumKind.gas>/g, sub, context, true);
            obj["liquid"] = base.parse_element (/<cim:MediumKind.liquid>([\s\S]*?)<\/cim:MediumKind.liquid>/g, sub, context, true);
            obj["solid"] = base.parse_element (/<cim:MediumKind.solid>([\s\S]*?)<\/cim:MediumKind.solid>/g, sub, context, true);
            bucket = context.parsed.MediumKind;
            if (null == bucket)
                context.parsed.MediumKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Winding insulation condition as a result of a test.
         */
        function parse_WindingInsulation (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindingInsulation";
            /**
             * Status of Winding Insulation Power Factor as of statusDate: Acceptable, Minor Deterioration or Moisture Absorption, Major Deterioration or Moisture Absorption, Failed.
             */
            obj["insulationPFStatus"] = base.parse_element (/<cim:WindingInsulation.insulationPFStatus>([\s\S]*?)<\/cim:WindingInsulation.insulationPFStatus>/g, sub, context, true);
            /**
             * For testType, status of Winding Insulation Resistance as of statusDate.
             * Typical values are: Acceptable, Questionable, Failed.
             */
            obj["insulationResistance"] = base.parse_element (/<cim:WindingInsulation.insulationResistance>([\s\S]*?)<\/cim:WindingInsulation.insulationResistance>/g, sub, context, true);
            /**
             * As of statusDate, the leakage reactance measured at the "from" winding with the "to" winding short-circuited and all other windings open-circuited.
             */
            obj["leakageReactance"] = base.parse_element (/<cim:WindingInsulation.leakageReactance>([\s\S]*?)<\/cim:WindingInsulation.leakageReactance>/g, sub, context, true);
            obj["status"] = base.parse_element (/<cim:WindingInsulation.status>([\s\S]*?)<\/cim:WindingInsulation.status>/g, sub, context, true);
            /**
             * 
             */
            obj["ToWinding"] = base.parse_attribute (/<cim:WindingInsulation.ToWinding\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["FromWinding"] = base.parse_attribute (/<cim:WindingInsulation.FromWinding\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["TransformerObservation"] = base.parse_attribute (/<cim:WindingInsulation.TransformerObservation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindingInsulation;
            if (null == bucket)
                context.parsed.WindingInsulation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Enclosure that offers protection to the equipment it contains and/or safety to people/animals outside it.
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
         */
        function parse_UndergroundStructureKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "UndergroundStructureKind";
            obj["burd"] = base.parse_element (/<cim:UndergroundStructureKind.burd>([\s\S]*?)<\/cim:UndergroundStructureKind.burd>/g, sub, context, true);
            obj["enclosure"] = base.parse_element (/<cim:UndergroundStructureKind.enclosure>([\s\S]*?)<\/cim:UndergroundStructureKind.enclosure>/g, sub, context, true);
            obj["handhole"] = base.parse_element (/<cim:UndergroundStructureKind.handhole>([\s\S]*?)<\/cim:UndergroundStructureKind.handhole>/g, sub, context, true);
            obj["manhole"] = base.parse_element (/<cim:UndergroundStructureKind.manhole>([\s\S]*?)<\/cim:UndergroundStructureKind.manhole>/g, sub, context, true);
            obj["pad"] = base.parse_element (/<cim:UndergroundStructureKind.pad>([\s\S]*?)<\/cim:UndergroundStructureKind.pad>/g, sub, context, true);
            obj["subsurfaceEnclosure"] = base.parse_element (/<cim:UndergroundStructureKind.subsurfaceEnclosure>([\s\S]*?)<\/cim:UndergroundStructureKind.subsurfaceEnclosure>/g, sub, context, true);
            obj["trench"] = base.parse_element (/<cim:UndergroundStructureKind.trench>([\s\S]*?)<\/cim:UndergroundStructureKind.trench>/g, sub, context, true);
            obj["tunnel"] = base.parse_element (/<cim:UndergroundStructureKind.tunnel>([\s\S]*?)<\/cim:UndergroundStructureKind.tunnel>/g, sub, context, true);
            obj["vault"] = base.parse_element (/<cim:UndergroundStructureKind.vault>([\s\S]*?)<\/cim:UndergroundStructureKind.vault>/g, sub, context, true);
            obj["pullbox"] = base.parse_element (/<cim:UndergroundStructureKind.pullbox>([\s\S]*?)<\/cim:UndergroundStructureKind.pullbox>/g, sub, context, true);
            bucket = context.parsed.UndergroundStructureKind;
            if (null == bucket)
                context.parsed.UndergroundStructureKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of base for poles.
         */
        function parse_PoleBaseKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PoleBaseKind";
            obj["asphalt"] = base.parse_element (/<cim:PoleBaseKind.asphalt>([\s\S]*?)<\/cim:PoleBaseKind.asphalt>/g, sub, context, true);
            obj["cement"] = base.parse_element (/<cim:PoleBaseKind.cement>([\s\S]*?)<\/cim:PoleBaseKind.cement>/g, sub, context, true);
            obj["dirt"] = base.parse_element (/<cim:PoleBaseKind.dirt>([\s\S]*?)<\/cim:PoleBaseKind.dirt>/g, sub, context, true);
            obj["unknown"] = base.parse_element (/<cim:PoleBaseKind.unknown>([\s\S]*?)<\/cim:PoleBaseKind.unknown>/g, sub, context, true);
            obj["other"] = base.parse_element (/<cim:PoleBaseKind.other>([\s\S]*?)<\/cim:PoleBaseKind.other>/g, sub, context, true);
            bucket = context.parsed.PoleBaseKind;
            if (null == bucket)
                context.parsed.PoleBaseKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * How the failure has been isolated.
         */
        function parse_FailureIsolationMethodKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "FailureIsolationMethodKind";
            obj["breakerOperation"] = base.parse_element (/<cim:FailureIsolationMethodKind.breakerOperation>([\s\S]*?)<\/cim:FailureIsolationMethodKind.breakerOperation>/g, sub, context, true);
            obj["fuse"] = base.parse_element (/<cim:FailureIsolationMethodKind.fuse>([\s\S]*?)<\/cim:FailureIsolationMethodKind.fuse>/g, sub, context, true);
            obj["burnedInTheClear"] = base.parse_element (/<cim:FailureIsolationMethodKind.burnedInTheClear>([\s\S]*?)<\/cim:FailureIsolationMethodKind.burnedInTheClear>/g, sub, context, true);
            obj["manuallyIsolated"] = base.parse_element (/<cim:FailureIsolationMethodKind.manuallyIsolated>([\s\S]*?)<\/cim:FailureIsolationMethodKind.manuallyIsolated>/g, sub, context, true);
            obj["other"] = base.parse_element (/<cim:FailureIsolationMethodKind.other>([\s\S]*?)<\/cim:FailureIsolationMethodKind.other>/g, sub, context, true);
            bucket = context.parsed.FailureIsolationMethodKind;
            if (null == bucket)
                context.parsed.FailureIsolationMethodKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An Asset Property that is described through curves rather than as a data point.
         * The relationship is to be defined between an independent variable (X-axis) and one or two dependent variables (Y1-axis and Y2-axis).
         */
        function parse_AssetPropertyCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "AssetPropertyCurve";
            /**
             * 
             */
            obj["Specification"] = base.parse_attribute (/<cim:AssetPropertyCurve.Specification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.AssetPropertyCurve;
            if (null == bucket)
                context.parsed.AssetPropertyCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of material used for structures.
         */
        function parse_StructureMaterialKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "StructureMaterialKind";
            obj["wood"] = base.parse_element (/<cim:StructureMaterialKind.wood>([\s\S]*?)<\/cim:StructureMaterialKind.wood>/g, sub, context, true);
            obj["steel"] = base.parse_element (/<cim:StructureMaterialKind.steel>([\s\S]*?)<\/cim:StructureMaterialKind.steel>/g, sub, context, true);
            obj["concrete"] = base.parse_element (/<cim:StructureMaterialKind.concrete>([\s\S]*?)<\/cim:StructureMaterialKind.concrete>/g, sub, context, true);
            obj["other"] = base.parse_element (/<cim:StructureMaterialKind.other>([\s\S]*?)<\/cim:StructureMaterialKind.other>/g, sub, context, true);
            bucket = context.parsed.StructureMaterialKind;
            if (null == bucket)
                context.parsed.StructureMaterialKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * As applicable, the basic linear, area, or volume dimensions of an asset, asset type (AssetModel) or other type of object (such as land area).
         * Units and multipliers are specified per dimension.
         */
        function parse_DimensionsInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "DimensionsInfo";
            /**
             * A description of the orientation of the object relative to the dimensions.
             * As an example, a vault may have north-south orientation for the sizeLength measurement and sizeDepth may be the height of the vault.
             */
            obj["orientation"] = base.parse_element (/<cim:DimensionsInfo.orientation>([\s\S]*?)<\/cim:DimensionsInfo.orientation>/g, sub, context, true);
            /**
             * Depth measurement.
             */
            obj["sizeDepth"] = base.parse_element (/<cim:DimensionsInfo.sizeDepth>([\s\S]*?)<\/cim:DimensionsInfo.sizeDepth>/g, sub, context, true);
            /**
             * Diameter measurement.
             */
            obj["sizeDiameter"] = base.parse_element (/<cim:DimensionsInfo.sizeDiameter>([\s\S]*?)<\/cim:DimensionsInfo.sizeDiameter>/g, sub, context, true);
            /**
             * Length measurement.
             */
            obj["sizeLength"] = base.parse_element (/<cim:DimensionsInfo.sizeLength>([\s\S]*?)<\/cim:DimensionsInfo.sizeLength>/g, sub, context, true);
            /**
             * Width measurement.
             */
            obj["sizeWidth"] = base.parse_element (/<cim:DimensionsInfo.sizeWidth>([\s\S]*?)<\/cim:DimensionsInfo.sizeWidth>/g, sub, context, true);
            bucket = context.parsed.DimensionsInfo;
            if (null == bucket)
                context.parsed.DimensionsInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Common information captured during transformer inspections and/or diagnostics.
         * Note that some properties may be measured through other means and therefore have measurement values in addition to the observed values recorded here.
         */
        function parse_TransformerObservation (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TransformerObservation";
            /**
             * Bushing temperature.
             */
            obj["bushingTemp"] = base.parse_element (/<cim:TransformerObservation.bushingTemp>([\s\S]*?)<\/cim:TransformerObservation.bushingTemp>/g, sub, context, true);
            /**
             * Dissolved Gas Analysis.
             * Typical values are: Acceptable, Overheating, Corona, Sparking, Arcing.
             */
            obj["dga"] = base.parse_element (/<cim:TransformerObservation.dga>([\s\S]*?)<\/cim:TransformerObservation.dga>/g, sub, context, true);
            /**
             * Frequency Response Analysis.
             * Typical values are: acceptable, slight movement, significant movement, failed, near failure. A graphic of the response diagram, which is a type of document, may be associated with this analysis through the recursive document relationship of the ProcedureDataSet.
             */
            obj["freqResp"] = base.parse_element (/<cim:TransformerObservation.freqResp>([\s\S]*?)<\/cim:TransformerObservation.freqResp>/g, sub, context, true);
            /**
             * Overall measure of furfural in oil and mechanical strength of paper.
             * DP, the degree of polymerization, is the strength of the paper. Furfural is a measure of furfural compounds, often expressed in parts per million.
             */
            obj["furfuralDP"] = base.parse_element (/<cim:TransformerObservation.furfuralDP>([\s\S]*?)<\/cim:TransformerObservation.furfuralDP>/g, sub, context, true);
            /**
             * Hotspot oil temperature.
             */
            obj["hotSpotTemp"] = base.parse_element (/<cim:TransformerObservation.hotSpotTemp>([\s\S]*?)<\/cim:TransformerObservation.hotSpotTemp>/g, sub, context, true);
            /**
             * Oil Quality Analysis-Color.
             */
            obj["oilColor"] = base.parse_element (/<cim:TransformerObservation.oilColor>([\s\S]*?)<\/cim:TransformerObservation.oilColor>/g, sub, context, true);
            /**
             * Oil Quality Analysis-Dielectric Strength.
             */
            obj["oilDielectricStrength"] = base.parse_element (/<cim:TransformerObservation.oilDielectricStrength>([\s\S]*?)<\/cim:TransformerObservation.oilDielectricStrength>/g, sub, context, true);
            /**
             * Oil Quality Analysis- inter facial tension (IFT) - number-Dynes/CM.
             */
            obj["oilIFT"] = base.parse_element (/<cim:TransformerObservation.oilIFT>([\s\S]*?)<\/cim:TransformerObservation.oilIFT>/g, sub, context, true);
            /**
             * The level of oil in the transformer.
             */
            obj["oilLevel"] = base.parse_element (/<cim:TransformerObservation.oilLevel>([\s\S]*?)<\/cim:TransformerObservation.oilLevel>/g, sub, context, true);
            /**
             * Oil Quality Analysis-Neutralization Number - Number - Mg KOH.
             */
            obj["oilNeutralizationNumber"] = base.parse_element (/<cim:TransformerObservation.oilNeutralizationNumber>([\s\S]*?)<\/cim:TransformerObservation.oilNeutralizationNumber>/g, sub, context, true);
            /**
             * Pump vibration, with typical values being: nominal, high.
             */
            obj["pumpVibration"] = base.parse_element (/<cim:TransformerObservation.pumpVibration>([\s\S]*?)<\/cim:TransformerObservation.pumpVibration>/g, sub, context, true);
            obj["status"] = base.parse_element (/<cim:TransformerObservation.status>([\s\S]*?)<\/cim:TransformerObservation.status>/g, sub, context, true);
            /**
             * Top oil temperature.
             */
            obj["topOilTemp"] = base.parse_element (/<cim:TransformerObservation.topOilTemp>([\s\S]*?)<\/cim:TransformerObservation.topOilTemp>/g, sub, context, true);
            /**
             * Water Content expressed in parts per million.
             */
            obj["waterContent"] = base.parse_element (/<cim:TransformerObservation.waterContent>([\s\S]*?)<\/cim:TransformerObservation.waterContent>/g, sub, context, true);
            /**
             * 
             */
            obj["Reconditioning"] = base.parse_attribute (/<cim:TransformerObservation.Reconditioning\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["Transformer"] = base.parse_attribute (/<cim:TransformerObservation.Transformer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.TransformerObservation;
            if (null == bucket)
                context.parsed.TransformerObservation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Joint connects two or more cables.
         * It includes the portion of cable under wipes, welds, or other seals.
         */
        function parse_Joint (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_Asset (context, sub);
            obj.cls = "Joint";
            /**
             * Configuration of joint.
             */
            obj["configurationKind"] = base.parse_element (/<cim:Joint.configurationKind>([\s\S]*?)<\/cim:Joint.configurationKind>/g, sub, context, true);
            /**
             * Material used to fill the joint.
             */
            obj["fillKind"] = base.parse_element (/<cim:Joint.fillKind>([\s\S]*?)<\/cim:Joint.fillKind>/g, sub, context, true);
            /**
             * The type of insulation around the joint, classified according to the utility's asset management standards and practices.
             */
            obj["insulation"] = base.parse_element (/<cim:Joint.insulation>([\s\S]*?)<\/cim:Joint.insulation>/g, sub, context, true);
            bucket = context.parsed.Joint;
            if (null == bucket)
                context.parsed.Joint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Tower asset.
         * Dimensions of the Tower are specified in associated DimensionsInfo class.
         */
        function parse_Tower (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Structure (context, sub);
            obj.cls = "Tower";
            /**
             * Construction structure on the tower.
             */
            obj["constructionKind"] = base.parse_element (/<cim:Tower.constructionKind>([\s\S]*?)<\/cim:Tower.constructionKind>/g, sub, context, true);
            bucket = context.parsed.Tower;
            if (null == bucket)
                context.parsed.Tower = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Reconditioning information for an asset.
         */
        function parse_Reconditioning (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Reconditioning";
            /**
             * Date and time this reconditioning (or a major overhaul) has been performed.
             */
            obj["dateTime"] = base.to_datetime (base.parse_element (/<cim:Reconditioning.dateTime>([\s\S]*?)<\/cim:Reconditioning.dateTime>/g, sub, context, true));
            /**
             * 
             */
            obj["Asset"] = base.parse_attribute (/<cim:Reconditioning.Asset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.Reconditioning;
            if (null == bucket)
                context.parsed.Reconditioning = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A substance that either (1) provides the means of transmission of a force or effect, such as hydraulic fluid, or (2) is used for a surrounding or enveloping substance, such as oil in a transformer or circuit breaker.
         */
        function parse_Medium (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Medium";
            /**
             * Kind of this medium.
             */
            obj["kind"] = base.parse_element (/<cim:Medium.kind>([\s\S]*?)<\/cim:Medium.kind>/g, sub, context, true);
            /**
             * The volume of the medium specified for this application.
             * Note that the actual volume is a type of measurement associated witht the asset.
             */
            obj["volumeSpec"] = base.parse_element (/<cim:Medium.volumeSpec>([\s\S]*?)<\/cim:Medium.volumeSpec>/g, sub, context, true);
            /**
             * 
             */
            obj["Specification"] = base.parse_attribute (/<cim:Medium.Specification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.Medium;
            if (null == bucket)
                context.parsed.Medium = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A facility may contain buildings, storage facilities, switching facilities, power generation, manufacturing facilities, maintenance facilities, etc.
         */
        function parse_Facility (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetContainer (context, sub);
            obj.cls = "Facility";
            /**
             * Kind of this facility.
             */
            obj["kind"] = base.parse_element (/<cim:Facility.kind>([\s\S]*?)<\/cim:Facility.kind>/g, sub, context, true);
            bucket = context.parsed.Facility;
            if (null == bucket)
                context.parsed.Facility = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Bushing insulation power factor condition as a result of a test.
         * Typical status values are: Acceptable, Minor Deterioration or Moisture Absorption, Major Deterioration or Moisture Absorption, Failed.
         */
        function parse_BushingInsulationPF (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "BushingInsulationPF";
            obj["status"] = base.parse_element (/<cim:BushingInsulationPF.status>([\s\S]*?)<\/cim:BushingInsulationPF.status>/g, sub, context, true);
            /**
             * Kind of test for this bushing.
             */
            obj["testKind"] = base.parse_element (/<cim:BushingInsulationPF.testKind>([\s\S]*?)<\/cim:BushingInsulationPF.testKind>/g, sub, context, true);
            /**
             * 
             */
            obj["Bushing"] = base.parse_attribute (/<cim:BushingInsulationPF.Bushing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["TransformerObservation"] = base.parse_attribute (/<cim:BushingInsulationPF.TransformerObservation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.BushingInsulationPF;
            if (null == bucket)
                context.parsed.BushingInsulationPF = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Streetlight asset.
         */
        function parse_Streetlight (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_Asset (context, sub);
            obj.cls = "Streetlight";
            /**
             * Length of arm.
             * Note that a new light may be placed on an existing arm.
             */
            obj["armLength"] = base.parse_element (/<cim:Streetlight.armLength>([\s\S]*?)<\/cim:Streetlight.armLength>/g, sub, context, true);
            /**
             * Lamp kind.
             */
            obj["lampKind"] = base.parse_element (/<cim:Streetlight.lampKind>([\s\S]*?)<\/cim:Streetlight.lampKind>/g, sub, context, true);
            /**
             * Power rating of light.
             */
            obj["lightRating"] = base.parse_element (/<cim:Streetlight.lightRating>([\s\S]*?)<\/cim:Streetlight.lightRating>/g, sub, context, true);
            /**
             * Pole to which thiss streetlight is attached.
             */
            obj["Pole"] = base.parse_attribute (/<cim:Streetlight.Pole\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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