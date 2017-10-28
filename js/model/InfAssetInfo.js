define
(
    ["model/base", "model/AssetInfo", "model/Assets", "model/Common", "model/Core"],
    function (base, AssetInfo, Assets, Common, Core)
    {

        /**
         * Kind of transformer construction.
         *
         */
        function parse_TransformerCoreKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TransformerCoreKind";
            base.parse_element (/<cim:TransformerCoreKind.core>([\s\S]*?)<\/cim:TransformerCoreKind.core>/g, obj, "core", base.to_string, sub, context);

            base.parse_element (/<cim:TransformerCoreKind.shell>([\s\S]*?)<\/cim:TransformerCoreKind.shell>/g, obj, "shell", base.to_string, sub, context);

            bucket = context.parsed.TransformerCoreKind;
            if (null == bucket)
                context.parsed.TransformerCoreKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Properties of recloser assets.
         *
         */
        function parse_RecloserInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_OldSwitchInfo (context, sub);
            obj.cls = "RecloserInfo";
            /**
             * True if device has ground trip capability.
             *
             */
            base.parse_element (/<cim:RecloserInfo.groundTripCapable>([\s\S]*?)<\/cim:RecloserInfo.groundTripCapable>/g, obj, "groundTripCapable", base.to_boolean, sub, context);

            /**
             * True if normal status of ground trip is enabled.
             *
             */
            base.parse_element (/<cim:RecloserInfo.groundTripNormalEnabled>([\s\S]*?)<\/cim:RecloserInfo.groundTripNormalEnabled>/g, obj, "groundTripNormalEnabled", base.to_boolean, sub, context);

            /**
             * Ground trip rating.
             *
             */
            base.parse_element (/<cim:RecloserInfo.groundTripRating>([\s\S]*?)<\/cim:RecloserInfo.groundTripRating>/g, obj, "groundTripRating", base.to_string, sub, context);

            /**
             * Phase trip rating.
             *
             */
            base.parse_element (/<cim:RecloserInfo.phaseTripRating>([\s\S]*?)<\/cim:RecloserInfo.phaseTripRating>/g, obj, "phaseTripRating", base.to_string, sub, context);

            /**
             * Total number of phase reclose operations.
             *
             */
            base.parse_element (/<cim:RecloserInfo.recloseLockoutCount>([\s\S]*?)<\/cim:RecloserInfo.recloseLockoutCount>/g, obj, "recloseLockoutCount", base.to_string, sub, context);

            bucket = context.parsed.RecloserInfo;
            if (null == bucket)
                context.parsed.RecloserInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of control for shunt impedance.
         *
         */
        function parse_ShuntImpedanceControlKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ShuntImpedanceControlKind";
            base.parse_element (/<cim:ShuntImpedanceControlKind.fixed>([\s\S]*?)<\/cim:ShuntImpedanceControlKind.fixed>/g, obj, "fixed", base.to_string, sub, context);

            base.parse_element (/<cim:ShuntImpedanceControlKind.localOnly>([\s\S]*?)<\/cim:ShuntImpedanceControlKind.localOnly>/g, obj, "localOnly", base.to_string, sub, context);

            base.parse_element (/<cim:ShuntImpedanceControlKind.remoteOnly>([\s\S]*?)<\/cim:ShuntImpedanceControlKind.remoteOnly>/g, obj, "remoteOnly", base.to_string, sub, context);

            base.parse_element (/<cim:ShuntImpedanceControlKind.remoteWithLocalOverride>([\s\S]*?)<\/cim:ShuntImpedanceControlKind.remoteWithLocalOverride>/g, obj, "remoteWithLocalOverride", base.to_string, sub, context);

            bucket = context.parsed.ShuntImpedanceControlKind;
            if (null == bucket)
                context.parsed.ShuntImpedanceControlKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Parameters of fault indicator asset.
         *
         */
        function parse_FaultIndicatorInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetInfo (context, sub);
            obj.cls = "FaultIndicatorInfo";
            /**
             * Kind of reset mechanisim of this fault indicator.
             *
             */
            base.parse_element (/<cim:FaultIndicatorInfo.resetKind>([\s\S]*?)<\/cim:FaultIndicatorInfo.resetKind>/g, obj, "resetKind", base.to_string, sub, context);

            bucket = context.parsed.FaultIndicatorInfo;
            if (null == bucket)
                context.parsed.FaultIndicatorInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Properties of breaker assets.
         *
         */
        function parse_BreakerInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_OldSwitchInfo (context, sub);
            obj.cls = "BreakerInfo";
            /**
             * Phase trip rating.
             *
             */
            base.parse_element (/<cim:BreakerInfo.phaseTrip>([\s\S]*?)<\/cim:BreakerInfo.phaseTrip>/g, obj, "phaseTrip", base.to_string, sub, context);

            bucket = context.parsed.BreakerInfo;
            if (null == bucket)
                context.parsed.BreakerInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Provides pricing and other relevant information about a specific manufacturer's product (i.e., AssetModel), and its price from a given supplier.
         *
         * A single AssetModel may be availble from multiple suppliers. Note that manufacturer and supplier are both types of organisation, which the association is inherited from Document.
         *
         */
        function parse_AssetModelCatalogueItem (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "AssetModelCatalogueItem";
            /**
             * Unit cost for an asset model from a specific supplier, either for a unit cost or cost per unit length.
             *
             * Cost is for material or asset only and does not include labor to install/construct or configure it.
             *
             */
            base.parse_element (/<cim:AssetModelCatalogueItem.unitCost>([\s\S]*?)<\/cim:AssetModelCatalogueItem.unitCost>/g, obj, "unitCost", base.to_string, sub, context);

            base.parse_attribute (/<cim:AssetModelCatalogueItem.AssetModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetModel", sub, context, true);

            base.parse_attribute (/<cim:AssetModelCatalogueItem.AssetModelCatalogue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetModelCatalogue", sub, context, true);

            bucket = context.parsed.AssetModelCatalogueItem;
            if (null == bucket)
                context.parsed.AssetModelCatalogueItem = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Properties of switch assets.
         *
         */
        function parse_OldSwitchInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = AssetInfo.parse_SwitchInfo (context, sub);
            obj.cls = "OldSwitchInfo";
            /**
             * The maximum rms voltage that may be applied across an open contact without breaking down the dielectric properties of the switch in the open position.
             *
             */
            base.parse_element (/<cim:OldSwitchInfo.dielectricStrength>([\s\S]*?)<\/cim:OldSwitchInfo.dielectricStrength>/g, obj, "dielectricStrength", base.to_string, sub, context);

            /**
             * True if switch has load breaking capabiity.
             *
             * Unless specified false, this is always assumed to be true for breakers and reclosers.
             *
             */
            base.parse_element (/<cim:OldSwitchInfo.loadBreak>([\s\S]*?)<\/cim:OldSwitchInfo.loadBreak>/g, obj, "loadBreak", base.to_boolean, sub, context);

            /**
             * The highest value of current the switch can make at the rated voltage under specified operating conditions without suffering significant deterioration of its performance.
             *
             */
            base.parse_element (/<cim:OldSwitchInfo.makingCapacity>([\s\S]*?)<\/cim:OldSwitchInfo.makingCapacity>/g, obj, "makingCapacity", base.to_string, sub, context);

            /**
             * The lowest value of current that the switch can make, carry and break in uninterrupted duty at the rated voltage under specified operating conditions without suffering significant deterioration of its performance.
             *
             */
            base.parse_element (/<cim:OldSwitchInfo.minimumCurrent>([\s\S]*?)<\/cim:OldSwitchInfo.minimumCurrent>/g, obj, "minimumCurrent", base.to_string, sub, context);

            /**
             * Number of poles (i.e. of current carrying conductors that are switched).
             *
             */
            base.parse_element (/<cim:OldSwitchInfo.poleCount>([\s\S]*?)<\/cim:OldSwitchInfo.poleCount>/g, obj, "poleCount", base.to_string, sub, context);

            /**
             * True if device is capable of being operated by remote control.
             *
             */
            base.parse_element (/<cim:OldSwitchInfo.remote>([\s\S]*?)<\/cim:OldSwitchInfo.remote>/g, obj, "remote", base.to_boolean, sub, context);

            /**
             * The highest value of current the switch can carry in the closed position at the rated voltage under specified operating conditions without suffering significant deterioration of its performance.
             *
             */
            base.parse_element (/<cim:OldSwitchInfo.withstandCurrent>([\s\S]*?)<\/cim:OldSwitchInfo.withstandCurrent>/g, obj, "withstandCurrent", base.to_string, sub, context);

            bucket = context.parsed.OldSwitchInfo;
            if (null == bucket)
                context.parsed.OldSwitchInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Properties of current transformer asset.
         *
         */
        function parse_CurrentTransformerInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetInfo (context, sub);
            obj.cls = "CurrentTransformerInfo";
            /**
             * CT accuracy classification.
             *
             */
            base.parse_element (/<cim:CurrentTransformerInfo.accuracyClass>([\s\S]*?)<\/cim:CurrentTransformerInfo.accuracyClass>/g, obj, "accuracyClass", base.to_string, sub, context);

            /**
             * Accuracy limit.
             *
             */
            base.parse_element (/<cim:CurrentTransformerInfo.accuracyLimit>([\s\S]*?)<\/cim:CurrentTransformerInfo.accuracyLimit>/g, obj, "accuracyLimit", base.to_string, sub, context);

            /**
             * Number of cores.
             *
             */
            base.parse_element (/<cim:CurrentTransformerInfo.coreCount>([\s\S]*?)<\/cim:CurrentTransformerInfo.coreCount>/g, obj, "coreCount", base.to_string, sub, context);

            base.parse_element (/<cim:CurrentTransformerInfo.ctClass>([\s\S]*?)<\/cim:CurrentTransformerInfo.ctClass>/g, obj, "ctClass", base.to_string, sub, context);

            /**
             * Maximum primary current where the CT still displays linear characteristicts.
             *
             */
            base.parse_element (/<cim:CurrentTransformerInfo.kneePointCurrent>([\s\S]*?)<\/cim:CurrentTransformerInfo.kneePointCurrent>/g, obj, "kneePointCurrent", base.to_string, sub, context);

            /**
             * Maximum voltage across the secondary terminals where the CT still displays linear characteristicts.
             *
             */
            base.parse_element (/<cim:CurrentTransformerInfo.kneePointVoltage>([\s\S]*?)<\/cim:CurrentTransformerInfo.kneePointVoltage>/g, obj, "kneePointVoltage", base.to_string, sub, context);

            /**
             * Maximum ratio between the primary and secondary current.
             *
             */
            base.parse_element (/<cim:CurrentTransformerInfo.maxRatio>([\s\S]*?)<\/cim:CurrentTransformerInfo.maxRatio>/g, obj, "maxRatio", base.to_string, sub, context);

            /**
             * Nominal ratio between the primary and secondary current; i.e. 100:5.
             *
             */
            base.parse_element (/<cim:CurrentTransformerInfo.nominalRatio>([\s\S]*?)<\/cim:CurrentTransformerInfo.nominalRatio>/g, obj, "nominalRatio", base.to_string, sub, context);

            /**
             * Full load secondary (FLS) rating for primary winding.
             *
             */
            base.parse_element (/<cim:CurrentTransformerInfo.primaryFlsRating>([\s\S]*?)<\/cim:CurrentTransformerInfo.primaryFlsRating>/g, obj, "primaryFlsRating", base.to_string, sub, context);

            /**
             * Ratio for the primary winding tap changer.
             *
             */
            base.parse_element (/<cim:CurrentTransformerInfo.primaryRatio>([\s\S]*?)<\/cim:CurrentTransformerInfo.primaryRatio>/g, obj, "primaryRatio", base.to_string, sub, context);

            /**
             * Rated current on the primary side.
             *
             */
            base.parse_element (/<cim:CurrentTransformerInfo.ratedCurrent>([\s\S]*?)<\/cim:CurrentTransformerInfo.ratedCurrent>/g, obj, "ratedCurrent", base.to_string, sub, context);

            /**
             * Full load secondary (FLS) rating for secondary winding.
             *
             */
            base.parse_element (/<cim:CurrentTransformerInfo.secondaryFlsRating>([\s\S]*?)<\/cim:CurrentTransformerInfo.secondaryFlsRating>/g, obj, "secondaryFlsRating", base.to_string, sub, context);

            /**
             * Ratio for the secondary winding tap changer.
             *
             */
            base.parse_element (/<cim:CurrentTransformerInfo.secondaryRatio>([\s\S]*?)<\/cim:CurrentTransformerInfo.secondaryRatio>/g, obj, "secondaryRatio", base.to_string, sub, context);

            /**
             * Full load secondary (FLS) rating for tertiary winding.
             *
             */
            base.parse_element (/<cim:CurrentTransformerInfo.tertiaryFlsRating>([\s\S]*?)<\/cim:CurrentTransformerInfo.tertiaryFlsRating>/g, obj, "tertiaryFlsRating", base.to_string, sub, context);

            /**
             * Ratio for the tertiary winding tap changer.
             *
             */
            base.parse_element (/<cim:CurrentTransformerInfo.tertiaryRatio>([\s\S]*?)<\/cim:CurrentTransformerInfo.tertiaryRatio>/g, obj, "tertiaryRatio", base.to_string, sub, context);

            /**
             * Usage: eg. metering, protection, etc.
             *
             */
            base.parse_element (/<cim:CurrentTransformerInfo.usage>([\s\S]*?)<\/cim:CurrentTransformerInfo.usage>/g, obj, "usage", base.to_string, sub, context);

            bucket = context.parsed.CurrentTransformerInfo;
            if (null == bucket)
                context.parsed.CurrentTransformerInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Properties of surge arrester.
         *
         */
        function parse_SurgeArresterInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetInfo (context, sub);
            obj.cls = "SurgeArresterInfo";
            /**
             * Maximum continuous power frequency voltage allowed on the surge arrester.
             *
             */
            base.parse_element (/<cim:SurgeArresterInfo.continuousOperatingVoltage>([\s\S]*?)<\/cim:SurgeArresterInfo.continuousOperatingVoltage>/g, obj, "continuousOperatingVoltage", base.to_string, sub, context);

            /**
             * If true, the arrester has a polymer housing, porcelain otherwise.
             *
             */
            base.parse_element (/<cim:SurgeArresterInfo.isPolymer>([\s\S]*?)<\/cim:SurgeArresterInfo.isPolymer>/g, obj, "isPolymer", base.to_boolean, sub, context);

            /**
             * Residual voltage during an 8x20 microsecond current impulse at the nominal discharge current level.
             *
             */
            base.parse_element (/<cim:SurgeArresterInfo.lightningImpulseDischargeVoltage>([\s\S]*?)<\/cim:SurgeArresterInfo.lightningImpulseDischargeVoltage>/g, obj, "lightningImpulseDischargeVoltage", base.to_string, sub, context);

            /**
             * Determines the arrester energy discharge capability.
             *
             * Choices are limited to 0 (none) through 5 (highest) by IEC 60099. Classes 1..3 require a 10-kA nominal discharge current. Classes 4..5 require a 20-kA nominal discharge current. Lower nominal discharge currents must use class 0.
             *
             */
            base.parse_element (/<cim:SurgeArresterInfo.lineDischargeClass>([\s\S]*?)<\/cim:SurgeArresterInfo.lineDischargeClass>/g, obj, "lineDischargeClass", base.to_string, sub, context);

            /**
             * The lightning discharge current used to classify the arrester.
             *
             * Choices are limited to 1.5, 2.5, 5, 10, and 20 kA by IEC 60099.
             *
             */
            base.parse_element (/<cim:SurgeArresterInfo.nominalDischargeCurrent>([\s\S]*?)<\/cim:SurgeArresterInfo.nominalDischargeCurrent>/g, obj, "nominalDischargeCurrent", base.to_string, sub, context);

            /**
             * Fault current level at which all parts of the failed arrester lie within a circle prescribed by IEC 60099.
             *
             */
            base.parse_element (/<cim:SurgeArresterInfo.pressureReliefClass>([\s\S]*?)<\/cim:SurgeArresterInfo.pressureReliefClass>/g, obj, "pressureReliefClass", base.to_string, sub, context);

            /**
             * The temporary overvoltage (TOV) level at power frequency that the surge arrester withstands for 10 seconds.
             *
             */
            base.parse_element (/<cim:SurgeArresterInfo.ratedVoltage>([\s\S]*?)<\/cim:SurgeArresterInfo.ratedVoltage>/g, obj, "ratedVoltage", base.to_string, sub, context);

            /**
             * Residual voltage during a current impulse with front time of 1 microsecond, and magnitude equal to the nominal discharge current level.
             *
             */
            base.parse_element (/<cim:SurgeArresterInfo.steepFrontDischargeVoltage>([\s\S]*?)<\/cim:SurgeArresterInfo.steepFrontDischargeVoltage>/g, obj, "steepFrontDischargeVoltage", base.to_string, sub, context);

            /**
             * Residual voltage during a current impulse with front time of at least 30 microseconds, and magnitude specified in IEC 60099 for the line discharge class.
             *
             * Does not apply to line discharge class 0.
             *
             */
            base.parse_element (/<cim:SurgeArresterInfo.switchingImpulseDischargeVoltage>([\s\S]*?)<\/cim:SurgeArresterInfo.switchingImpulseDischargeVoltage>/g, obj, "switchingImpulseDischargeVoltage", base.to_string, sub, context);

            bucket = context.parsed.SurgeArresterInfo;
            if (null == bucket)
                context.parsed.SurgeArresterInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of composite switch.
         *
         */
        function parse_CompositeSwitchKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CompositeSwitchKind";
            base.parse_element (/<cim:CompositeSwitchKind.throwOver>([\s\S]*?)<\/cim:CompositeSwitchKind.throwOver>/g, obj, "throwOver", base.to_string, sub, context);

            base.parse_element (/<cim:CompositeSwitchKind.escoThrowOver>([\s\S]*?)<\/cim:CompositeSwitchKind.escoThrowOver>/g, obj, "escoThrowOver", base.to_string, sub, context);

            base.parse_element (/<cim:CompositeSwitchKind.ral>([\s\S]*?)<\/cim:CompositeSwitchKind.ral>/g, obj, "ral", base.to_string, sub, context);

            base.parse_element (/<cim:CompositeSwitchKind.gral>([\s\S]*?)<\/cim:CompositeSwitchKind.gral>/g, obj, "gral", base.to_string, sub, context);

            base.parse_element (/<cim:CompositeSwitchKind.regulatorBypass>([\s\S]*?)<\/cim:CompositeSwitchKind.regulatorBypass>/g, obj, "regulatorBypass", base.to_string, sub, context);

            base.parse_element (/<cim:CompositeSwitchKind.ugMultiSwitch>([\s\S]*?)<\/cim:CompositeSwitchKind.ugMultiSwitch>/g, obj, "ugMultiSwitch", base.to_string, sub, context);

            base.parse_element (/<cim:CompositeSwitchKind.other>([\s\S]*?)<\/cim:CompositeSwitchKind.other>/g, obj, "other", base.to_string, sub, context);

            bucket = context.parsed.CompositeSwitchKind;
            if (null == bucket)
                context.parsed.CompositeSwitchKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Catalogue of available types of products and materials that are used to build or install, maintain or operate an Asset.
         *
         * Each catalogue item is for a specific product (AssetModel) available from a specific supplier.
         *
         */
        function parse_AssetModelCatalogue (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "AssetModelCatalogue";
            base.parse_element (/<cim:AssetModelCatalogue.status>([\s\S]*?)<\/cim:AssetModelCatalogue.status>/g, obj, "status", base.to_string, sub, context);

            bucket = context.parsed.AssetModelCatalogue;
            if (null == bucket)
                context.parsed.AssetModelCatalogue = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Properties of protection equipment asset.
         *
         */
        function parse_ProtectionEquipmentInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetInfo (context, sub);
            obj.cls = "ProtectionEquipmentInfo";
            /**
             * Actual ground trip for this type of relay, if applicable.
             *
             */
            base.parse_element (/<cim:ProtectionEquipmentInfo.groundTrip>([\s\S]*?)<\/cim:ProtectionEquipmentInfo.groundTrip>/g, obj, "groundTrip", base.to_string, sub, context);

            /**
             * Actual phase trip for this type of relay, if applicable.
             *
             */
            base.parse_element (/<cim:ProtectionEquipmentInfo.phaseTrip>([\s\S]*?)<\/cim:ProtectionEquipmentInfo.phaseTrip>/g, obj, "phaseTrip", base.to_string, sub, context);

            bucket = context.parsed.ProtectionEquipmentInfo;
            if (null == bucket)
                context.parsed.ProtectionEquipmentInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of transformer construction.
         *
         */
        function parse_TransformerConstructionKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TransformerConstructionKind";
            base.parse_element (/<cim:TransformerConstructionKind.onePhase>([\s\S]*?)<\/cim:TransformerConstructionKind.onePhase>/g, obj, "onePhase", base.to_string, sub, context);

            base.parse_element (/<cim:TransformerConstructionKind.threePhase>([\s\S]*?)<\/cim:TransformerConstructionKind.threePhase>/g, obj, "threePhase", base.to_string, sub, context);

            base.parse_element (/<cim:TransformerConstructionKind.aerial>([\s\S]*?)<\/cim:TransformerConstructionKind.aerial>/g, obj, "aerial", base.to_string, sub, context);

            base.parse_element (/<cim:TransformerConstructionKind.overhead>([\s\S]*?)<\/cim:TransformerConstructionKind.overhead>/g, obj, "overhead", base.to_string, sub, context);

            base.parse_element (/<cim:TransformerConstructionKind.dryType>([\s\S]*?)<\/cim:TransformerConstructionKind.dryType>/g, obj, "dryType", base.to_string, sub, context);

            base.parse_element (/<cim:TransformerConstructionKind.network>([\s\S]*?)<\/cim:TransformerConstructionKind.network>/g, obj, "network", base.to_string, sub, context);

            base.parse_element (/<cim:TransformerConstructionKind.padmountDeadFront>([\s\S]*?)<\/cim:TransformerConstructionKind.padmountDeadFront>/g, obj, "padmountDeadFront", base.to_string, sub, context);

            base.parse_element (/<cim:TransformerConstructionKind.padmountFeedThrough>([\s\S]*?)<\/cim:TransformerConstructionKind.padmountFeedThrough>/g, obj, "padmountFeedThrough", base.to_string, sub, context);

            base.parse_element (/<cim:TransformerConstructionKind.padmountLiveFront>([\s\S]*?)<\/cim:TransformerConstructionKind.padmountLiveFront>/g, obj, "padmountLiveFront", base.to_string, sub, context);

            base.parse_element (/<cim:TransformerConstructionKind.padmountLoopThrough>([\s\S]*?)<\/cim:TransformerConstructionKind.padmountLoopThrough>/g, obj, "padmountLoopThrough", base.to_string, sub, context);

            base.parse_element (/<cim:TransformerConstructionKind.padmounted>([\s\S]*?)<\/cim:TransformerConstructionKind.padmounted>/g, obj, "padmounted", base.to_string, sub, context);

            base.parse_element (/<cim:TransformerConstructionKind.subway>([\s\S]*?)<\/cim:TransformerConstructionKind.subway>/g, obj, "subway", base.to_string, sub, context);

            base.parse_element (/<cim:TransformerConstructionKind.underground>([\s\S]*?)<\/cim:TransformerConstructionKind.underground>/g, obj, "underground", base.to_string, sub, context);

            base.parse_element (/<cim:TransformerConstructionKind.vault>([\s\S]*?)<\/cim:TransformerConstructionKind.vault>/g, obj, "vault", base.to_string, sub, context);

            base.parse_element (/<cim:TransformerConstructionKind.vaultThreePhase>([\s\S]*?)<\/cim:TransformerConstructionKind.vaultThreePhase>/g, obj, "vaultThreePhase", base.to_string, sub, context);

            base.parse_element (/<cim:TransformerConstructionKind.unknown>([\s\S]*?)<\/cim:TransformerConstructionKind.unknown>/g, obj, "unknown", base.to_string, sub, context);

            bucket = context.parsed.TransformerConstructionKind;
            if (null == bucket)
                context.parsed.TransformerConstructionKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Insulation kind for windings.
         *
         */
        function parse_WindingInsulationKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "WindingInsulationKind";
            base.parse_element (/<cim:WindingInsulationKind.paper>([\s\S]*?)<\/cim:WindingInsulationKind.paper>/g, obj, "paper", base.to_string, sub, context);

            base.parse_element (/<cim:WindingInsulationKind.thermallyUpgradedPaper>([\s\S]*?)<\/cim:WindingInsulationKind.thermallyUpgradedPaper>/g, obj, "thermallyUpgradedPaper", base.to_string, sub, context);

            base.parse_element (/<cim:WindingInsulationKind.nomex>([\s\S]*?)<\/cim:WindingInsulationKind.nomex>/g, obj, "nomex", base.to_string, sub, context);

            base.parse_element (/<cim:WindingInsulationKind.other>([\s\S]*?)<\/cim:WindingInsulationKind.other>/g, obj, "other", base.to_string, sub, context);

            bucket = context.parsed.WindingInsulationKind;
            if (null == bucket)
                context.parsed.WindingInsulationKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_OldTransformerTankInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = AssetInfo.parse_TransformerTankInfo (context, sub);
            obj.cls = "OldTransformerTankInfo";
            /**
             * Kind of construction for this transformer.
             *
             */
            base.parse_element (/<cim:OldTransformerTankInfo.constructionKind>([\s\S]*?)<\/cim:OldTransformerTankInfo.constructionKind>/g, obj, "constructionKind", base.to_string, sub, context);

            /**
             * Weight of core and coils in transformer.
             *
             */
            base.parse_element (/<cim:OldTransformerTankInfo.coreCoilsWeight>([\s\S]*?)<\/cim:OldTransformerTankInfo.coreCoilsWeight>/g, obj, "coreCoilsWeight", base.to_string, sub, context);

            /**
             * Core kind of this transformer product.
             *
             */
            base.parse_element (/<cim:OldTransformerTankInfo.coreKind>([\s\S]*?)<\/cim:OldTransformerTankInfo.coreKind>/g, obj, "coreKind", base.to_string, sub, context);

            /**
             * Function of this transformer.
             *
             */
            base.parse_element (/<cim:OldTransformerTankInfo.function>([\s\S]*?)<\/cim:OldTransformerTankInfo.function>/g, obj, "function", base.to_string, sub, context);

            /**
             * Basic insulation level of neutral.
             *
             */
            base.parse_element (/<cim:OldTransformerTankInfo.neutralBIL>([\s\S]*?)<\/cim:OldTransformerTankInfo.neutralBIL>/g, obj, "neutralBIL", base.to_string, sub, context);

            /**
             * Kind of oil preservation system.
             *
             */
            base.parse_element (/<cim:OldTransformerTankInfo.oilPreservationKind>([\s\S]*?)<\/cim:OldTransformerTankInfo.oilPreservationKind>/g, obj, "oilPreservationKind", base.to_string, sub, context);

            bucket = context.parsed.OldTransformerTankInfo;
            if (null == bucket)
                context.parsed.OldTransformerTankInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Properties of a composite switch.
         *
         */
        function parse_CompositeSwitchInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetInfo (context, sub);
            obj.cls = "CompositeSwitchInfo";
            /**
             * True if multi-phase switch controls all phases concurrently.
             *
             */
            base.parse_element (/<cim:CompositeSwitchInfo.ganged>([\s\S]*?)<\/cim:CompositeSwitchInfo.ganged>/g, obj, "ganged", base.to_boolean, sub, context);

            /**
             * Initial operating mode, with the following values: Automatic, Manual.
             *
             */
            base.parse_element (/<cim:CompositeSwitchInfo.initOpMode>([\s\S]*?)<\/cim:CompositeSwitchInfo.initOpMode>/g, obj, "initOpMode", base.to_string, sub, context);

            /**
             * Breaking capacity, or short circuit rating, is the maximum rated current which the device can safely interrupt at the rated voltage.
             *
             */
            base.parse_element (/<cim:CompositeSwitchInfo.interruptingRating>([\s\S]*?)<\/cim:CompositeSwitchInfo.interruptingRating>/g, obj, "interruptingRating", base.to_string, sub, context);

            /**
             * Kind of composite switch.
             *
             */
            base.parse_element (/<cim:CompositeSwitchInfo.kind>([\s\S]*?)<\/cim:CompositeSwitchInfo.kind>/g, obj, "kind", base.to_string, sub, context);

            /**
             * Phases carried, if applicable.
             *
             */
            base.parse_element (/<cim:CompositeSwitchInfo.phaseCode>([\s\S]*?)<\/cim:CompositeSwitchInfo.phaseCode>/g, obj, "phaseCode", base.to_string, sub, context);

            /**
             * Supported number of phases, typically 0, 1 or 3.
             *
             */
            base.parse_element (/<cim:CompositeSwitchInfo.phaseCount>([\s\S]*?)<\/cim:CompositeSwitchInfo.phaseCount>/g, obj, "phaseCount", base.to_string, sub, context);

            /**
             * Rated voltage.
             *
             */
            base.parse_element (/<cim:CompositeSwitchInfo.ratedVoltage>([\s\S]*?)<\/cim:CompositeSwitchInfo.ratedVoltage>/g, obj, "ratedVoltage", base.to_string, sub, context);

            /**
             * True if device is capable of being operated by remote control.
             *
             */
            base.parse_element (/<cim:CompositeSwitchInfo.remote>([\s\S]*?)<\/cim:CompositeSwitchInfo.remote>/g, obj, "remote", base.to_boolean, sub, context);

            /**
             * Number of switch states represented by the composite switch.
             *
             */
            base.parse_element (/<cim:CompositeSwitchInfo.switchStateCount>([\s\S]*?)<\/cim:CompositeSwitchInfo.switchStateCount>/g, obj, "switchStateCount", base.to_string, sub, context);

            bucket = context.parsed.CompositeSwitchInfo;
            if (null == bucket)
                context.parsed.CompositeSwitchInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of local control for shunt impedance.
         *
         */
        function parse_ShuntImpedanceLocalControlKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ShuntImpedanceLocalControlKind";
            base.parse_element (/<cim:ShuntImpedanceLocalControlKind.none>([\s\S]*?)<\/cim:ShuntImpedanceLocalControlKind.none>/g, obj, "none", base.to_string, sub, context);

            base.parse_element (/<cim:ShuntImpedanceLocalControlKind.powerFactor>([\s\S]*?)<\/cim:ShuntImpedanceLocalControlKind.powerFactor>/g, obj, "powerFactor", base.to_string, sub, context);

            base.parse_element (/<cim:ShuntImpedanceLocalControlKind.time>([\s\S]*?)<\/cim:ShuntImpedanceLocalControlKind.time>/g, obj, "time", base.to_string, sub, context);

            base.parse_element (/<cim:ShuntImpedanceLocalControlKind.temperature>([\s\S]*?)<\/cim:ShuntImpedanceLocalControlKind.temperature>/g, obj, "temperature", base.to_string, sub, context);

            base.parse_element (/<cim:ShuntImpedanceLocalControlKind.reactivePower>([\s\S]*?)<\/cim:ShuntImpedanceLocalControlKind.reactivePower>/g, obj, "reactivePower", base.to_string, sub, context);

            base.parse_element (/<cim:ShuntImpedanceLocalControlKind.current>([\s\S]*?)<\/cim:ShuntImpedanceLocalControlKind.current>/g, obj, "current", base.to_string, sub, context);

            base.parse_element (/<cim:ShuntImpedanceLocalControlKind.voltage>([\s\S]*?)<\/cim:ShuntImpedanceLocalControlKind.voltage>/g, obj, "voltage", base.to_string, sub, context);

            bucket = context.parsed.ShuntImpedanceLocalControlKind;
            if (null == bucket)
                context.parsed.ShuntImpedanceLocalControlKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of resetting the fault indicators.
         *
         */
        function parse_FaultIndicatorResetKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "FaultIndicatorResetKind";
            base.parse_element (/<cim:FaultIndicatorResetKind.automatic>([\s\S]*?)<\/cim:FaultIndicatorResetKind.automatic>/g, obj, "automatic", base.to_string, sub, context);

            base.parse_element (/<cim:FaultIndicatorResetKind.manual>([\s\S]*?)<\/cim:FaultIndicatorResetKind.manual>/g, obj, "manual", base.to_string, sub, context);

            base.parse_element (/<cim:FaultIndicatorResetKind.remote>([\s\S]*?)<\/cim:FaultIndicatorResetKind.remote>/g, obj, "remote", base.to_string, sub, context);

            base.parse_element (/<cim:FaultIndicatorResetKind.other>([\s\S]*?)<\/cim:FaultIndicatorResetKind.other>/g, obj, "other", base.to_string, sub, context);

            bucket = context.parsed.FaultIndicatorResetKind;
            if (null == bucket)
                context.parsed.FaultIndicatorResetKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Properties of potential transformer asset.
         *
         */
        function parse_PotentialTransformerInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetInfo (context, sub);
            obj.cls = "PotentialTransformerInfo";
            base.parse_element (/<cim:PotentialTransformerInfo.accuracyClass>([\s\S]*?)<\/cim:PotentialTransformerInfo.accuracyClass>/g, obj, "accuracyClass", base.to_string, sub, context);

            base.parse_element (/<cim:PotentialTransformerInfo.nominalRatio>([\s\S]*?)<\/cim:PotentialTransformerInfo.nominalRatio>/g, obj, "nominalRatio", base.to_string, sub, context);

            /**
             * Ratio for the primary winding tap changer.
             *
             */
            base.parse_element (/<cim:PotentialTransformerInfo.primaryRatio>([\s\S]*?)<\/cim:PotentialTransformerInfo.primaryRatio>/g, obj, "primaryRatio", base.to_string, sub, context);

            base.parse_element (/<cim:PotentialTransformerInfo.ptClass>([\s\S]*?)<\/cim:PotentialTransformerInfo.ptClass>/g, obj, "ptClass", base.to_string, sub, context);

            /**
             * Rated voltage on the primary side.
             *
             */
            base.parse_element (/<cim:PotentialTransformerInfo.ratedVoltage>([\s\S]*?)<\/cim:PotentialTransformerInfo.ratedVoltage>/g, obj, "ratedVoltage", base.to_string, sub, context);

            /**
             * Ratio for the secondary winding tap changer.
             *
             */
            base.parse_element (/<cim:PotentialTransformerInfo.secondaryRatio>([\s\S]*?)<\/cim:PotentialTransformerInfo.secondaryRatio>/g, obj, "secondaryRatio", base.to_string, sub, context);

            /**
             * Ratio for the tertiary winding tap changer.
             *
             */
            base.parse_element (/<cim:PotentialTransformerInfo.tertiaryRatio>([\s\S]*?)<\/cim:PotentialTransformerInfo.tertiaryRatio>/g, obj, "tertiaryRatio", base.to_string, sub, context);

            bucket = context.parsed.PotentialTransformerInfo;
            if (null == bucket)
                context.parsed.PotentialTransformerInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Function of a transformer.
         *
         */
        function parse_TransformerFunctionKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TransformerFunctionKind";
            base.parse_element (/<cim:TransformerFunctionKind.powerTransformer>([\s\S]*?)<\/cim:TransformerFunctionKind.powerTransformer>/g, obj, "powerTransformer", base.to_string, sub, context);

            base.parse_element (/<cim:TransformerFunctionKind.voltageRegulator>([\s\S]*?)<\/cim:TransformerFunctionKind.voltageRegulator>/g, obj, "voltageRegulator", base.to_string, sub, context);

            base.parse_element (/<cim:TransformerFunctionKind.autotransformer>([\s\S]*?)<\/cim:TransformerFunctionKind.autotransformer>/g, obj, "autotransformer", base.to_string, sub, context);

            base.parse_element (/<cim:TransformerFunctionKind.secondaryTransformer>([\s\S]*?)<\/cim:TransformerFunctionKind.secondaryTransformer>/g, obj, "secondaryTransformer", base.to_string, sub, context);

            base.parse_element (/<cim:TransformerFunctionKind.other>([\s\S]*?)<\/cim:TransformerFunctionKind.other>/g, obj, "other", base.to_string, sub, context);

            bucket = context.parsed.TransformerFunctionKind;
            if (null == bucket)
                context.parsed.TransformerFunctionKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_OldTransformerEndInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = AssetInfo.parse_TransformerEndInfo (context, sub);
            obj.cls = "OldTransformerEndInfo";
            /**
             * Overload rating for 24 hours.
             *
             */
            base.parse_element (/<cim:OldTransformerEndInfo.dayOverLoadRating>([\s\S]*?)<\/cim:OldTransformerEndInfo.dayOverLoadRating>/g, obj, "dayOverLoadRating", base.to_string, sub, context);

            /**
             * Overload rating for 1 hour.
             *
             */
            base.parse_element (/<cim:OldTransformerEndInfo.hourOverLoadRating>([\s\S]*?)<\/cim:OldTransformerEndInfo.hourOverLoadRating>/g, obj, "hourOverLoadRating", base.to_string, sub, context);

            /**
             * Weight of solid insultation in transformer.
             *
             */
            base.parse_element (/<cim:OldTransformerEndInfo.solidInsulationWeight>([\s\S]*?)<\/cim:OldTransformerEndInfo.solidInsulationWeight>/g, obj, "solidInsulationWeight", base.to_string, sub, context);

            /**
             * Type of insultation used for transformer windings.
             *
             */
            base.parse_element (/<cim:OldTransformerEndInfo.windingInsulationKind>([\s\S]*?)<\/cim:OldTransformerEndInfo.windingInsulationKind>/g, obj, "windingInsulationKind", base.to_string, sub, context);

            bucket = context.parsed.OldTransformerEndInfo;
            if (null == bucket)
                context.parsed.OldTransformerEndInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of regulation branch for shunt impedance.
         *
         */
        function parse_RegulationBranchKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "RegulationBranchKind";
            base.parse_element (/<cim:RegulationBranchKind.line>([\s\S]*?)<\/cim:RegulationBranchKind.line>/g, obj, "line", base.to_string, sub, context);

            base.parse_element (/<cim:RegulationBranchKind.transformer>([\s\S]*?)<\/cim:RegulationBranchKind.transformer>/g, obj, "transformer", base.to_string, sub, context);

            base.parse_element (/<cim:RegulationBranchKind.switch>([\s\S]*?)<\/cim:RegulationBranchKind.switch>/g, obj, "switch", base.to_string, sub, context);

            base.parse_element (/<cim:RegulationBranchKind.breaker>([\s\S]*?)<\/cim:RegulationBranchKind.breaker>/g, obj, "breaker", base.to_string, sub, context);

            base.parse_element (/<cim:RegulationBranchKind.recloser>([\s\S]*?)<\/cim:RegulationBranchKind.recloser>/g, obj, "recloser", base.to_string, sub, context);

            base.parse_element (/<cim:RegulationBranchKind.fuse>([\s\S]*?)<\/cim:RegulationBranchKind.fuse>/g, obj, "fuse", base.to_string, sub, context);

            base.parse_element (/<cim:RegulationBranchKind.sectionner>([\s\S]*?)<\/cim:RegulationBranchKind.sectionner>/g, obj, "sectionner", base.to_string, sub, context);

            base.parse_element (/<cim:RegulationBranchKind.other>([\s\S]*?)<\/cim:RegulationBranchKind.other>/g, obj, "other", base.to_string, sub, context);

            bucket = context.parsed.RegulationBranchKind;
            if (null == bucket)
                context.parsed.RegulationBranchKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of oil preservation.
         *
         */
        function parse_OilPreservationKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OilPreservationKind";
            base.parse_element (/<cim:OilPreservationKind.freeBreathing>([\s\S]*?)<\/cim:OilPreservationKind.freeBreathing>/g, obj, "freeBreathing", base.to_string, sub, context);

            base.parse_element (/<cim:OilPreservationKind.nitrogenBlanket>([\s\S]*?)<\/cim:OilPreservationKind.nitrogenBlanket>/g, obj, "nitrogenBlanket", base.to_string, sub, context);

            base.parse_element (/<cim:OilPreservationKind.conservator>([\s\S]*?)<\/cim:OilPreservationKind.conservator>/g, obj, "conservator", base.to_string, sub, context);

            base.parse_element (/<cim:OilPreservationKind.other>([\s\S]*?)<\/cim:OilPreservationKind.other>/g, obj, "other", base.to_string, sub, context);

            bucket = context.parsed.OilPreservationKind;
            if (null == bucket)
                context.parsed.OilPreservationKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_CompositeSwitchKind: parse_CompositeSwitchKind,
                parse_PotentialTransformerInfo: parse_PotentialTransformerInfo,
                parse_AssetModelCatalogue: parse_AssetModelCatalogue,
                parse_OldTransformerTankInfo: parse_OldTransformerTankInfo,
                parse_AssetModelCatalogueItem: parse_AssetModelCatalogueItem,
                parse_FaultIndicatorInfo: parse_FaultIndicatorInfo,
                parse_BreakerInfo: parse_BreakerInfo,
                parse_RegulationBranchKind: parse_RegulationBranchKind,
                parse_OldTransformerEndInfo: parse_OldTransformerEndInfo,
                parse_TransformerCoreKind: parse_TransformerCoreKind,
                parse_OilPreservationKind: parse_OilPreservationKind,
                parse_ShuntImpedanceControlKind: parse_ShuntImpedanceControlKind,
                parse_TransformerFunctionKind: parse_TransformerFunctionKind,
                parse_OldSwitchInfo: parse_OldSwitchInfo,
                parse_ShuntImpedanceLocalControlKind: parse_ShuntImpedanceLocalControlKind,
                parse_CompositeSwitchInfo: parse_CompositeSwitchInfo,
                parse_TransformerConstructionKind: parse_TransformerConstructionKind,
                parse_WindingInsulationKind: parse_WindingInsulationKind,
                parse_RecloserInfo: parse_RecloserInfo,
                parse_CurrentTransformerInfo: parse_CurrentTransformerInfo,
                parse_FaultIndicatorResetKind: parse_FaultIndicatorResetKind,
                parse_SurgeArresterInfo: parse_SurgeArresterInfo,
                parse_ProtectionEquipmentInfo: parse_ProtectionEquipmentInfo
            }
        );
    }
);