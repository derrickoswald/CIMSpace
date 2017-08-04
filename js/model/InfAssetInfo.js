define
(
    ["model/base", "model/AssetInfo", "model/Assets", "model/Common", "model/Core"],
    function (base, AssetInfo, Assets, Common, Core)
    {

        /**
         * Kind of transformer construction.
         */
        function parse_TransformerCoreKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TransformerCoreKind";
            obj["core"] = base.parse_element (/<cim:TransformerCoreKind.core>([\s\S]*?)<\/cim:TransformerCoreKind.core>/g, sub, context, true);
            obj["shell"] = base.parse_element (/<cim:TransformerCoreKind.shell>([\s\S]*?)<\/cim:TransformerCoreKind.shell>/g, sub, context, true);
            bucket = context.parsed.TransformerCoreKind;
            if (null == bucket)
                context.parsed.TransformerCoreKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Properties of recloser assets.
         */
        function parse_RecloserInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_OldSwitchInfo (context, sub);
            obj.cls = "RecloserInfo";
            /**
             * True if device has ground trip capability.
             */
            obj["groundTripCapable"] = base.to_boolean (base.parse_element (/<cim:RecloserInfo.groundTripCapable>([\s\S]*?)<\/cim:RecloserInfo.groundTripCapable>/g, sub, context, true));
            /**
             * True if normal status of ground trip is enabled.
             */
            obj["groundTripNormalEnabled"] = base.to_boolean (base.parse_element (/<cim:RecloserInfo.groundTripNormalEnabled>([\s\S]*?)<\/cim:RecloserInfo.groundTripNormalEnabled>/g, sub, context, true));
            /**
             * Ground trip rating.
             */
            obj["groundTripRating"] = base.parse_element (/<cim:RecloserInfo.groundTripRating>([\s\S]*?)<\/cim:RecloserInfo.groundTripRating>/g, sub, context, true);
            /**
             * Phase trip rating.
             */
            obj["phaseTripRating"] = base.parse_element (/<cim:RecloserInfo.phaseTripRating>([\s\S]*?)<\/cim:RecloserInfo.phaseTripRating>/g, sub, context, true);
            /**
             * Total number of phase reclose operations.
             */
            obj["recloseLockoutCount"] = base.parse_element (/<cim:RecloserInfo.recloseLockoutCount>([\s\S]*?)<\/cim:RecloserInfo.recloseLockoutCount>/g, sub, context, true);
            bucket = context.parsed.RecloserInfo;
            if (null == bucket)
                context.parsed.RecloserInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of control for shunt impedance.
         */
        function parse_ShuntImpedanceControlKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ShuntImpedanceControlKind";
            obj["fixed"] = base.parse_element (/<cim:ShuntImpedanceControlKind.fixed>([\s\S]*?)<\/cim:ShuntImpedanceControlKind.fixed>/g, sub, context, true);
            obj["localOnly"] = base.parse_element (/<cim:ShuntImpedanceControlKind.localOnly>([\s\S]*?)<\/cim:ShuntImpedanceControlKind.localOnly>/g, sub, context, true);
            obj["remoteOnly"] = base.parse_element (/<cim:ShuntImpedanceControlKind.remoteOnly>([\s\S]*?)<\/cim:ShuntImpedanceControlKind.remoteOnly>/g, sub, context, true);
            obj["remoteWithLocalOverride"] = base.parse_element (/<cim:ShuntImpedanceControlKind.remoteWithLocalOverride>([\s\S]*?)<\/cim:ShuntImpedanceControlKind.remoteWithLocalOverride>/g, sub, context, true);
            bucket = context.parsed.ShuntImpedanceControlKind;
            if (null == bucket)
                context.parsed.ShuntImpedanceControlKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Parameters of fault indicator asset.
         */
        function parse_FaultIndicatorInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetInfo (context, sub);
            obj.cls = "FaultIndicatorInfo";
            /**
             * Kind of reset mechanisim of this fault indicator.
             */
            obj["resetKind"] = base.parse_element (/<cim:FaultIndicatorInfo.resetKind>([\s\S]*?)<\/cim:FaultIndicatorInfo.resetKind>/g, sub, context, true);
            bucket = context.parsed.FaultIndicatorInfo;
            if (null == bucket)
                context.parsed.FaultIndicatorInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Properties of breaker assets.
         */
        function parse_BreakerInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_OldSwitchInfo (context, sub);
            obj.cls = "BreakerInfo";
            /**
             * Phase trip rating.
             */
            obj["phaseTrip"] = base.parse_element (/<cim:BreakerInfo.phaseTrip>([\s\S]*?)<\/cim:BreakerInfo.phaseTrip>/g, sub, context, true);
            bucket = context.parsed.BreakerInfo;
            if (null == bucket)
                context.parsed.BreakerInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Provides pricing and other relevant information about a specific manufacturer's product (i.e., AssetModel), and its price from a given supplier.
         * A single AssetModel may be availble from multiple suppliers. Note that manufacturer and supplier are both types of organisation, which the association is inherited from Document.
         */
        function parse_AssetModelCatalogueItem (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "AssetModelCatalogueItem";
            /**
             * Unit cost for an asset model from a specific supplier, either for a unit cost or cost per unit length.
             * Cost is for material or asset only and does not include labor to install/construct or configure it.
             */
            obj["unitCost"] = base.parse_element (/<cim:AssetModelCatalogueItem.unitCost>([\s\S]*?)<\/cim:AssetModelCatalogueItem.unitCost>/g, sub, context, true);
            obj["AssetModel"] = base.parse_attribute (/<cim:AssetModelCatalogueItem.AssetModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["AssetModelCatalogue"] = base.parse_attribute (/<cim:AssetModelCatalogueItem.AssetModelCatalogue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.AssetModelCatalogueItem;
            if (null == bucket)
                context.parsed.AssetModelCatalogueItem = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Properties of switch assets.
         */
        function parse_OldSwitchInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = AssetInfo.parse_SwitchInfo (context, sub);
            obj.cls = "OldSwitchInfo";
            /**
             * The maximum rms voltage that may be applied across an open contact without breaking down the dielectric properties of the switch in the open position.
             */
            obj["dielectricStrength"] = base.parse_element (/<cim:OldSwitchInfo.dielectricStrength>([\s\S]*?)<\/cim:OldSwitchInfo.dielectricStrength>/g, sub, context, true);
            /**
             * True if switch has load breaking capabiity.
             * Unless specified false, this is always assumed to be true for breakers and reclosers.
             */
            obj["loadBreak"] = base.to_boolean (base.parse_element (/<cim:OldSwitchInfo.loadBreak>([\s\S]*?)<\/cim:OldSwitchInfo.loadBreak>/g, sub, context, true));
            /**
             * The highest value of current the switch can make at the rated voltage under specified operating conditions without suffering significant deterioration of its performance.
             */
            obj["makingCapacity"] = base.parse_element (/<cim:OldSwitchInfo.makingCapacity>([\s\S]*?)<\/cim:OldSwitchInfo.makingCapacity>/g, sub, context, true);
            /**
             * The lowest value of current that the switch can make, carry and break in uninterrupted duty at the rated voltage under specified operating conditions without suffering significant deterioration of its performance.
             */
            obj["minimumCurrent"] = base.parse_element (/<cim:OldSwitchInfo.minimumCurrent>([\s\S]*?)<\/cim:OldSwitchInfo.minimumCurrent>/g, sub, context, true);
            /**
             * Number of poles (i.e. of current carrying conductors that are switched).
             */
            obj["poleCount"] = base.parse_element (/<cim:OldSwitchInfo.poleCount>([\s\S]*?)<\/cim:OldSwitchInfo.poleCount>/g, sub, context, true);
            /**
             * True if device is capable of being operated by remote control.
             */
            obj["remote"] = base.to_boolean (base.parse_element (/<cim:OldSwitchInfo.remote>([\s\S]*?)<\/cim:OldSwitchInfo.remote>/g, sub, context, true));
            /**
             * The highest value of current the switch can carry in the closed position at the rated voltage under specified operating conditions without suffering significant deterioration of its performance.
             */
            obj["withstandCurrent"] = base.parse_element (/<cim:OldSwitchInfo.withstandCurrent>([\s\S]*?)<\/cim:OldSwitchInfo.withstandCurrent>/g, sub, context, true);
            bucket = context.parsed.OldSwitchInfo;
            if (null == bucket)
                context.parsed.OldSwitchInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Properties of current transformer asset.
         */
        function parse_CurrentTransformerInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetInfo (context, sub);
            obj.cls = "CurrentTransformerInfo";
            /**
             * CT accuracy classification.
             */
            obj["accuracyClass"] = base.parse_element (/<cim:CurrentTransformerInfo.accuracyClass>([\s\S]*?)<\/cim:CurrentTransformerInfo.accuracyClass>/g, sub, context, true);
            /**
             * Accuracy limit.
             */
            obj["accuracyLimit"] = base.parse_element (/<cim:CurrentTransformerInfo.accuracyLimit>([\s\S]*?)<\/cim:CurrentTransformerInfo.accuracyLimit>/g, sub, context, true);
            /**
             * Number of cores.
             */
            obj["coreCount"] = base.parse_element (/<cim:CurrentTransformerInfo.coreCount>([\s\S]*?)<\/cim:CurrentTransformerInfo.coreCount>/g, sub, context, true);
            obj["ctClass"] = base.parse_element (/<cim:CurrentTransformerInfo.ctClass>([\s\S]*?)<\/cim:CurrentTransformerInfo.ctClass>/g, sub, context, true);
            /**
             * Maximum primary current where the CT still displays linear characteristicts.
             */
            obj["kneePointCurrent"] = base.parse_element (/<cim:CurrentTransformerInfo.kneePointCurrent>([\s\S]*?)<\/cim:CurrentTransformerInfo.kneePointCurrent>/g, sub, context, true);
            /**
             * Maximum voltage across the secondary terminals where the CT still displays linear characteristicts.
             */
            obj["kneePointVoltage"] = base.parse_element (/<cim:CurrentTransformerInfo.kneePointVoltage>([\s\S]*?)<\/cim:CurrentTransformerInfo.kneePointVoltage>/g, sub, context, true);
            /**
             * Maximum ratio between the primary and secondary current.
             */
            obj["maxRatio"] = base.parse_element (/<cim:CurrentTransformerInfo.maxRatio>([\s\S]*?)<\/cim:CurrentTransformerInfo.maxRatio>/g, sub, context, true);
            /**
             * Nominal ratio between the primary and secondary current; i.e. 100:5.
             */
            obj["nominalRatio"] = base.parse_element (/<cim:CurrentTransformerInfo.nominalRatio>([\s\S]*?)<\/cim:CurrentTransformerInfo.nominalRatio>/g, sub, context, true);
            /**
             * Full load secondary (FLS) rating for primary winding.
             */
            obj["primaryFlsRating"] = base.parse_element (/<cim:CurrentTransformerInfo.primaryFlsRating>([\s\S]*?)<\/cim:CurrentTransformerInfo.primaryFlsRating>/g, sub, context, true);
            /**
             * Ratio for the primary winding tap changer.
             */
            obj["primaryRatio"] = base.parse_element (/<cim:CurrentTransformerInfo.primaryRatio>([\s\S]*?)<\/cim:CurrentTransformerInfo.primaryRatio>/g, sub, context, true);
            /**
             * Rated current on the primary side.
             */
            obj["ratedCurrent"] = base.parse_element (/<cim:CurrentTransformerInfo.ratedCurrent>([\s\S]*?)<\/cim:CurrentTransformerInfo.ratedCurrent>/g, sub, context, true);
            /**
             * Full load secondary (FLS) rating for secondary winding.
             */
            obj["secondaryFlsRating"] = base.parse_element (/<cim:CurrentTransformerInfo.secondaryFlsRating>([\s\S]*?)<\/cim:CurrentTransformerInfo.secondaryFlsRating>/g, sub, context, true);
            /**
             * Ratio for the secondary winding tap changer.
             */
            obj["secondaryRatio"] = base.parse_element (/<cim:CurrentTransformerInfo.secondaryRatio>([\s\S]*?)<\/cim:CurrentTransformerInfo.secondaryRatio>/g, sub, context, true);
            /**
             * Full load secondary (FLS) rating for tertiary winding.
             */
            obj["tertiaryFlsRating"] = base.parse_element (/<cim:CurrentTransformerInfo.tertiaryFlsRating>([\s\S]*?)<\/cim:CurrentTransformerInfo.tertiaryFlsRating>/g, sub, context, true);
            /**
             * Ratio for the tertiary winding tap changer.
             */
            obj["tertiaryRatio"] = base.parse_element (/<cim:CurrentTransformerInfo.tertiaryRatio>([\s\S]*?)<\/cim:CurrentTransformerInfo.tertiaryRatio>/g, sub, context, true);
            /**
             * Usage: eg. metering, protection, etc.
             */
            obj["usage"] = base.parse_element (/<cim:CurrentTransformerInfo.usage>([\s\S]*?)<\/cim:CurrentTransformerInfo.usage>/g, sub, context, true);
            bucket = context.parsed.CurrentTransformerInfo;
            if (null == bucket)
                context.parsed.CurrentTransformerInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Properties of surge arrester.
         */
        function parse_SurgeArresterInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetInfo (context, sub);
            obj.cls = "SurgeArresterInfo";
            /**
             * Maximum continuous power frequency voltage allowed on the surge arrester.
             */
            obj["continuousOperatingVoltage"] = base.parse_element (/<cim:SurgeArresterInfo.continuousOperatingVoltage>([\s\S]*?)<\/cim:SurgeArresterInfo.continuousOperatingVoltage>/g, sub, context, true);
            /**
             * If true, the arrester has a polymer housing, porcelain otherwise.
             */
            obj["isPolymer"] = base.to_boolean (base.parse_element (/<cim:SurgeArresterInfo.isPolymer>([\s\S]*?)<\/cim:SurgeArresterInfo.isPolymer>/g, sub, context, true));
            /**
             * Residual voltage during an 8x20 microsecond current impulse at the nominal discharge current level.
             */
            obj["lightningImpulseDischargeVoltage"] = base.parse_element (/<cim:SurgeArresterInfo.lightningImpulseDischargeVoltage>([\s\S]*?)<\/cim:SurgeArresterInfo.lightningImpulseDischargeVoltage>/g, sub, context, true);
            /**
             * Determines the arrester energy discharge capability.
             * Choices are limited to 0 (none) through 5 (highest) by IEC 60099. Classes 1..3 require a 10-kA nominal discharge current. Classes 4..5 require a 20-kA nominal discharge current. Lower nominal discharge currents must use class 0.
             */
            obj["lineDischargeClass"] = base.parse_element (/<cim:SurgeArresterInfo.lineDischargeClass>([\s\S]*?)<\/cim:SurgeArresterInfo.lineDischargeClass>/g, sub, context, true);
            /**
             * The lightning discharge current used to classify the arrester.
             * Choices are limited to 1.5, 2.5, 5, 10, and 20 kA by IEC 60099.
             */
            obj["nominalDischargeCurrent"] = base.parse_element (/<cim:SurgeArresterInfo.nominalDischargeCurrent>([\s\S]*?)<\/cim:SurgeArresterInfo.nominalDischargeCurrent>/g, sub, context, true);
            /**
             * Fault current level at which all parts of the failed arrester lie within a circle prescribed by IEC 60099.
             */
            obj["pressureReliefClass"] = base.parse_element (/<cim:SurgeArresterInfo.pressureReliefClass>([\s\S]*?)<\/cim:SurgeArresterInfo.pressureReliefClass>/g, sub, context, true);
            /**
             * The temporary overvoltage (TOV) level at power frequency that the surge arrester withstands for 10 seconds.
             */
            obj["ratedVoltage"] = base.parse_element (/<cim:SurgeArresterInfo.ratedVoltage>([\s\S]*?)<\/cim:SurgeArresterInfo.ratedVoltage>/g, sub, context, true);
            /**
             * Residual voltage during a current impulse with front time of 1 microsecond, and magnitude equal to the nominal discharge current level.
             */
            obj["steepFrontDischargeVoltage"] = base.parse_element (/<cim:SurgeArresterInfo.steepFrontDischargeVoltage>([\s\S]*?)<\/cim:SurgeArresterInfo.steepFrontDischargeVoltage>/g, sub, context, true);
            /**
             * Residual voltage during a current impulse with front time of at least 30 microseconds, and magnitude specified in IEC 60099 for the line discharge class.
             * Does not apply to line discharge class 0.
             */
            obj["switchingImpulseDischargeVoltage"] = base.parse_element (/<cim:SurgeArresterInfo.switchingImpulseDischargeVoltage>([\s\S]*?)<\/cim:SurgeArresterInfo.switchingImpulseDischargeVoltage>/g, sub, context, true);
            bucket = context.parsed.SurgeArresterInfo;
            if (null == bucket)
                context.parsed.SurgeArresterInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of composite switch.
         */
        function parse_CompositeSwitchKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CompositeSwitchKind";
            obj["throwOver"] = base.parse_element (/<cim:CompositeSwitchKind.throwOver>([\s\S]*?)<\/cim:CompositeSwitchKind.throwOver>/g, sub, context, true);
            obj["escoThrowOver"] = base.parse_element (/<cim:CompositeSwitchKind.escoThrowOver>([\s\S]*?)<\/cim:CompositeSwitchKind.escoThrowOver>/g, sub, context, true);
            obj["ral"] = base.parse_element (/<cim:CompositeSwitchKind.ral>([\s\S]*?)<\/cim:CompositeSwitchKind.ral>/g, sub, context, true);
            obj["gral"] = base.parse_element (/<cim:CompositeSwitchKind.gral>([\s\S]*?)<\/cim:CompositeSwitchKind.gral>/g, sub, context, true);
            obj["regulatorBypass"] = base.parse_element (/<cim:CompositeSwitchKind.regulatorBypass>([\s\S]*?)<\/cim:CompositeSwitchKind.regulatorBypass>/g, sub, context, true);
            obj["ugMultiSwitch"] = base.parse_element (/<cim:CompositeSwitchKind.ugMultiSwitch>([\s\S]*?)<\/cim:CompositeSwitchKind.ugMultiSwitch>/g, sub, context, true);
            obj["other"] = base.parse_element (/<cim:CompositeSwitchKind.other>([\s\S]*?)<\/cim:CompositeSwitchKind.other>/g, sub, context, true);
            bucket = context.parsed.CompositeSwitchKind;
            if (null == bucket)
                context.parsed.CompositeSwitchKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Catalogue of available types of products and materials that are used to build or install, maintain or operate an Asset.
         * Each catalogue item is for a specific product (AssetModel) available from a specific supplier.
         */
        function parse_AssetModelCatalogue (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "AssetModelCatalogue";
            obj["status"] = base.parse_element (/<cim:AssetModelCatalogue.status>([\s\S]*?)<\/cim:AssetModelCatalogue.status>/g, sub, context, true);
            bucket = context.parsed.AssetModelCatalogue;
            if (null == bucket)
                context.parsed.AssetModelCatalogue = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Properties of protection equipment asset.
         */
        function parse_ProtectionEquipmentInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetInfo (context, sub);
            obj.cls = "ProtectionEquipmentInfo";
            /**
             * Actual ground trip for this type of relay, if applicable.
             */
            obj["groundTrip"] = base.parse_element (/<cim:ProtectionEquipmentInfo.groundTrip>([\s\S]*?)<\/cim:ProtectionEquipmentInfo.groundTrip>/g, sub, context, true);
            /**
             * Actual phase trip for this type of relay, if applicable.
             */
            obj["phaseTrip"] = base.parse_element (/<cim:ProtectionEquipmentInfo.phaseTrip>([\s\S]*?)<\/cim:ProtectionEquipmentInfo.phaseTrip>/g, sub, context, true);
            bucket = context.parsed.ProtectionEquipmentInfo;
            if (null == bucket)
                context.parsed.ProtectionEquipmentInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of transformer construction.
         */
        function parse_TransformerConstructionKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TransformerConstructionKind";
            obj["onePhase"] = base.parse_element (/<cim:TransformerConstructionKind.onePhase>([\s\S]*?)<\/cim:TransformerConstructionKind.onePhase>/g, sub, context, true);
            obj["threePhase"] = base.parse_element (/<cim:TransformerConstructionKind.threePhase>([\s\S]*?)<\/cim:TransformerConstructionKind.threePhase>/g, sub, context, true);
            obj["aerial"] = base.parse_element (/<cim:TransformerConstructionKind.aerial>([\s\S]*?)<\/cim:TransformerConstructionKind.aerial>/g, sub, context, true);
            obj["overhead"] = base.parse_element (/<cim:TransformerConstructionKind.overhead>([\s\S]*?)<\/cim:TransformerConstructionKind.overhead>/g, sub, context, true);
            obj["dryType"] = base.parse_element (/<cim:TransformerConstructionKind.dryType>([\s\S]*?)<\/cim:TransformerConstructionKind.dryType>/g, sub, context, true);
            obj["network"] = base.parse_element (/<cim:TransformerConstructionKind.network>([\s\S]*?)<\/cim:TransformerConstructionKind.network>/g, sub, context, true);
            obj["padmountDeadFront"] = base.parse_element (/<cim:TransformerConstructionKind.padmountDeadFront>([\s\S]*?)<\/cim:TransformerConstructionKind.padmountDeadFront>/g, sub, context, true);
            obj["padmountFeedThrough"] = base.parse_element (/<cim:TransformerConstructionKind.padmountFeedThrough>([\s\S]*?)<\/cim:TransformerConstructionKind.padmountFeedThrough>/g, sub, context, true);
            obj["padmountLiveFront"] = base.parse_element (/<cim:TransformerConstructionKind.padmountLiveFront>([\s\S]*?)<\/cim:TransformerConstructionKind.padmountLiveFront>/g, sub, context, true);
            obj["padmountLoopThrough"] = base.parse_element (/<cim:TransformerConstructionKind.padmountLoopThrough>([\s\S]*?)<\/cim:TransformerConstructionKind.padmountLoopThrough>/g, sub, context, true);
            obj["padmounted"] = base.parse_element (/<cim:TransformerConstructionKind.padmounted>([\s\S]*?)<\/cim:TransformerConstructionKind.padmounted>/g, sub, context, true);
            obj["subway"] = base.parse_element (/<cim:TransformerConstructionKind.subway>([\s\S]*?)<\/cim:TransformerConstructionKind.subway>/g, sub, context, true);
            obj["underground"] = base.parse_element (/<cim:TransformerConstructionKind.underground>([\s\S]*?)<\/cim:TransformerConstructionKind.underground>/g, sub, context, true);
            obj["vault"] = base.parse_element (/<cim:TransformerConstructionKind.vault>([\s\S]*?)<\/cim:TransformerConstructionKind.vault>/g, sub, context, true);
            obj["vaultThreePhase"] = base.parse_element (/<cim:TransformerConstructionKind.vaultThreePhase>([\s\S]*?)<\/cim:TransformerConstructionKind.vaultThreePhase>/g, sub, context, true);
            obj["unknown"] = base.parse_element (/<cim:TransformerConstructionKind.unknown>([\s\S]*?)<\/cim:TransformerConstructionKind.unknown>/g, sub, context, true);
            bucket = context.parsed.TransformerConstructionKind;
            if (null == bucket)
                context.parsed.TransformerConstructionKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Insulation kind for windings.
         */
        function parse_WindingInsulationKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "WindingInsulationKind";
            obj["paper"] = base.parse_element (/<cim:WindingInsulationKind.paper>([\s\S]*?)<\/cim:WindingInsulationKind.paper>/g, sub, context, true);
            obj["thermallyUpgradedPaper"] = base.parse_element (/<cim:WindingInsulationKind.thermallyUpgradedPaper>([\s\S]*?)<\/cim:WindingInsulationKind.thermallyUpgradedPaper>/g, sub, context, true);
            obj["nomex"] = base.parse_element (/<cim:WindingInsulationKind.nomex>([\s\S]*?)<\/cim:WindingInsulationKind.nomex>/g, sub, context, true);
            obj["other"] = base.parse_element (/<cim:WindingInsulationKind.other>([\s\S]*?)<\/cim:WindingInsulationKind.other>/g, sub, context, true);
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
             */
            obj["constructionKind"] = base.parse_element (/<cim:OldTransformerTankInfo.constructionKind>([\s\S]*?)<\/cim:OldTransformerTankInfo.constructionKind>/g, sub, context, true);
            /**
             * Weight of core and coils in transformer.
             */
            obj["coreCoilsWeight"] = base.parse_element (/<cim:OldTransformerTankInfo.coreCoilsWeight>([\s\S]*?)<\/cim:OldTransformerTankInfo.coreCoilsWeight>/g, sub, context, true);
            /**
             * Core kind of this transformer product.
             */
            obj["coreKind"] = base.parse_element (/<cim:OldTransformerTankInfo.coreKind>([\s\S]*?)<\/cim:OldTransformerTankInfo.coreKind>/g, sub, context, true);
            /**
             * Function of this transformer.
             */
            obj["function"] = base.parse_element (/<cim:OldTransformerTankInfo.function>([\s\S]*?)<\/cim:OldTransformerTankInfo.function>/g, sub, context, true);
            /**
             * Basic insulation level of neutral.
             */
            obj["neutralBIL"] = base.parse_element (/<cim:OldTransformerTankInfo.neutralBIL>([\s\S]*?)<\/cim:OldTransformerTankInfo.neutralBIL>/g, sub, context, true);
            /**
             * Kind of oil preservation system.
             */
            obj["oilPreservationKind"] = base.parse_element (/<cim:OldTransformerTankInfo.oilPreservationKind>([\s\S]*?)<\/cim:OldTransformerTankInfo.oilPreservationKind>/g, sub, context, true);
            bucket = context.parsed.OldTransformerTankInfo;
            if (null == bucket)
                context.parsed.OldTransformerTankInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Properties of a composite switch.
         */
        function parse_CompositeSwitchInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetInfo (context, sub);
            obj.cls = "CompositeSwitchInfo";
            /**
             * True if multi-phase switch controls all phases concurrently.
             */
            obj["ganged"] = base.to_boolean (base.parse_element (/<cim:CompositeSwitchInfo.ganged>([\s\S]*?)<\/cim:CompositeSwitchInfo.ganged>/g, sub, context, true));
            /**
             * Initial operating mode, with the following values: Automatic, Manual.
             */
            obj["initOpMode"] = base.parse_element (/<cim:CompositeSwitchInfo.initOpMode>([\s\S]*?)<\/cim:CompositeSwitchInfo.initOpMode>/g, sub, context, true);
            /**
             * Breaking capacity, or short circuit rating, is the maximum rated current which the device can safely interrupt at the rated voltage.
             */
            obj["interruptingRating"] = base.parse_element (/<cim:CompositeSwitchInfo.interruptingRating>([\s\S]*?)<\/cim:CompositeSwitchInfo.interruptingRating>/g, sub, context, true);
            /**
             * Kind of composite switch.
             */
            obj["kind"] = base.parse_element (/<cim:CompositeSwitchInfo.kind>([\s\S]*?)<\/cim:CompositeSwitchInfo.kind>/g, sub, context, true);
            /**
             * Phases carried, if applicable.
             */
            obj["phaseCode"] = base.parse_element (/<cim:CompositeSwitchInfo.phaseCode>([\s\S]*?)<\/cim:CompositeSwitchInfo.phaseCode>/g, sub, context, true);
            /**
             * Supported number of phases, typically 0, 1 or 3.
             */
            obj["phaseCount"] = base.parse_element (/<cim:CompositeSwitchInfo.phaseCount>([\s\S]*?)<\/cim:CompositeSwitchInfo.phaseCount>/g, sub, context, true);
            /**
             * Rated voltage.
             */
            obj["ratedVoltage"] = base.parse_element (/<cim:CompositeSwitchInfo.ratedVoltage>([\s\S]*?)<\/cim:CompositeSwitchInfo.ratedVoltage>/g, sub, context, true);
            /**
             * True if device is capable of being operated by remote control.
             */
            obj["remote"] = base.to_boolean (base.parse_element (/<cim:CompositeSwitchInfo.remote>([\s\S]*?)<\/cim:CompositeSwitchInfo.remote>/g, sub, context, true));
            /**
             * Number of switch states represented by the composite switch.
             */
            obj["switchStateCount"] = base.parse_element (/<cim:CompositeSwitchInfo.switchStateCount>([\s\S]*?)<\/cim:CompositeSwitchInfo.switchStateCount>/g, sub, context, true);
            bucket = context.parsed.CompositeSwitchInfo;
            if (null == bucket)
                context.parsed.CompositeSwitchInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of local control for shunt impedance.
         */
        function parse_ShuntImpedanceLocalControlKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ShuntImpedanceLocalControlKind";
            obj["none"] = base.parse_element (/<cim:ShuntImpedanceLocalControlKind.none>([\s\S]*?)<\/cim:ShuntImpedanceLocalControlKind.none>/g, sub, context, true);
            obj["powerFactor"] = base.parse_element (/<cim:ShuntImpedanceLocalControlKind.powerFactor>([\s\S]*?)<\/cim:ShuntImpedanceLocalControlKind.powerFactor>/g, sub, context, true);
            obj["time"] = base.parse_element (/<cim:ShuntImpedanceLocalControlKind.time>([\s\S]*?)<\/cim:ShuntImpedanceLocalControlKind.time>/g, sub, context, true);
            obj["temperature"] = base.parse_element (/<cim:ShuntImpedanceLocalControlKind.temperature>([\s\S]*?)<\/cim:ShuntImpedanceLocalControlKind.temperature>/g, sub, context, true);
            obj["reactivePower"] = base.parse_element (/<cim:ShuntImpedanceLocalControlKind.reactivePower>([\s\S]*?)<\/cim:ShuntImpedanceLocalControlKind.reactivePower>/g, sub, context, true);
            obj["current"] = base.parse_element (/<cim:ShuntImpedanceLocalControlKind.current>([\s\S]*?)<\/cim:ShuntImpedanceLocalControlKind.current>/g, sub, context, true);
            obj["voltage"] = base.parse_element (/<cim:ShuntImpedanceLocalControlKind.voltage>([\s\S]*?)<\/cim:ShuntImpedanceLocalControlKind.voltage>/g, sub, context, true);
            bucket = context.parsed.ShuntImpedanceLocalControlKind;
            if (null == bucket)
                context.parsed.ShuntImpedanceLocalControlKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of resetting the fault indicators.
         */
        function parse_FaultIndicatorResetKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "FaultIndicatorResetKind";
            obj["automatic"] = base.parse_element (/<cim:FaultIndicatorResetKind.automatic>([\s\S]*?)<\/cim:FaultIndicatorResetKind.automatic>/g, sub, context, true);
            obj["manual"] = base.parse_element (/<cim:FaultIndicatorResetKind.manual>([\s\S]*?)<\/cim:FaultIndicatorResetKind.manual>/g, sub, context, true);
            obj["remote"] = base.parse_element (/<cim:FaultIndicatorResetKind.remote>([\s\S]*?)<\/cim:FaultIndicatorResetKind.remote>/g, sub, context, true);
            obj["other"] = base.parse_element (/<cim:FaultIndicatorResetKind.other>([\s\S]*?)<\/cim:FaultIndicatorResetKind.other>/g, sub, context, true);
            bucket = context.parsed.FaultIndicatorResetKind;
            if (null == bucket)
                context.parsed.FaultIndicatorResetKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Properties of potential transformer asset.
         */
        function parse_PotentialTransformerInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetInfo (context, sub);
            obj.cls = "PotentialTransformerInfo";
            obj["accuracyClass"] = base.parse_element (/<cim:PotentialTransformerInfo.accuracyClass>([\s\S]*?)<\/cim:PotentialTransformerInfo.accuracyClass>/g, sub, context, true);
            obj["nominalRatio"] = base.parse_element (/<cim:PotentialTransformerInfo.nominalRatio>([\s\S]*?)<\/cim:PotentialTransformerInfo.nominalRatio>/g, sub, context, true);
            /**
             * Ratio for the primary winding tap changer.
             */
            obj["primaryRatio"] = base.parse_element (/<cim:PotentialTransformerInfo.primaryRatio>([\s\S]*?)<\/cim:PotentialTransformerInfo.primaryRatio>/g, sub, context, true);
            obj["ptClass"] = base.parse_element (/<cim:PotentialTransformerInfo.ptClass>([\s\S]*?)<\/cim:PotentialTransformerInfo.ptClass>/g, sub, context, true);
            /**
             * Rated voltage on the primary side.
             */
            obj["ratedVoltage"] = base.parse_element (/<cim:PotentialTransformerInfo.ratedVoltage>([\s\S]*?)<\/cim:PotentialTransformerInfo.ratedVoltage>/g, sub, context, true);
            /**
             * Ratio for the secondary winding tap changer.
             */
            obj["secondaryRatio"] = base.parse_element (/<cim:PotentialTransformerInfo.secondaryRatio>([\s\S]*?)<\/cim:PotentialTransformerInfo.secondaryRatio>/g, sub, context, true);
            /**
             * Ratio for the tertiary winding tap changer.
             */
            obj["tertiaryRatio"] = base.parse_element (/<cim:PotentialTransformerInfo.tertiaryRatio>([\s\S]*?)<\/cim:PotentialTransformerInfo.tertiaryRatio>/g, sub, context, true);
            bucket = context.parsed.PotentialTransformerInfo;
            if (null == bucket)
                context.parsed.PotentialTransformerInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Function of a transformer.
         */
        function parse_TransformerFunctionKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TransformerFunctionKind";
            obj["powerTransformer"] = base.parse_element (/<cim:TransformerFunctionKind.powerTransformer>([\s\S]*?)<\/cim:TransformerFunctionKind.powerTransformer>/g, sub, context, true);
            obj["voltageRegulator"] = base.parse_element (/<cim:TransformerFunctionKind.voltageRegulator>([\s\S]*?)<\/cim:TransformerFunctionKind.voltageRegulator>/g, sub, context, true);
            obj["autotransformer"] = base.parse_element (/<cim:TransformerFunctionKind.autotransformer>([\s\S]*?)<\/cim:TransformerFunctionKind.autotransformer>/g, sub, context, true);
            obj["secondaryTransformer"] = base.parse_element (/<cim:TransformerFunctionKind.secondaryTransformer>([\s\S]*?)<\/cim:TransformerFunctionKind.secondaryTransformer>/g, sub, context, true);
            obj["other"] = base.parse_element (/<cim:TransformerFunctionKind.other>([\s\S]*?)<\/cim:TransformerFunctionKind.other>/g, sub, context, true);
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
             */
            obj["dayOverLoadRating"] = base.parse_element (/<cim:OldTransformerEndInfo.dayOverLoadRating>([\s\S]*?)<\/cim:OldTransformerEndInfo.dayOverLoadRating>/g, sub, context, true);
            /**
             * Overload rating for 1 hour.
             */
            obj["hourOverLoadRating"] = base.parse_element (/<cim:OldTransformerEndInfo.hourOverLoadRating>([\s\S]*?)<\/cim:OldTransformerEndInfo.hourOverLoadRating>/g, sub, context, true);
            /**
             * Weight of solid insultation in transformer.
             */
            obj["solidInsulationWeight"] = base.parse_element (/<cim:OldTransformerEndInfo.solidInsulationWeight>([\s\S]*?)<\/cim:OldTransformerEndInfo.solidInsulationWeight>/g, sub, context, true);
            /**
             * Type of insultation used for transformer windings.
             */
            obj["windingInsulationKind"] = base.parse_element (/<cim:OldTransformerEndInfo.windingInsulationKind>([\s\S]*?)<\/cim:OldTransformerEndInfo.windingInsulationKind>/g, sub, context, true);
            bucket = context.parsed.OldTransformerEndInfo;
            if (null == bucket)
                context.parsed.OldTransformerEndInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of regulation branch for shunt impedance.
         */
        function parse_RegulationBranchKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "RegulationBranchKind";
            obj["line"] = base.parse_element (/<cim:RegulationBranchKind.line>([\s\S]*?)<\/cim:RegulationBranchKind.line>/g, sub, context, true);
            obj["transformer"] = base.parse_element (/<cim:RegulationBranchKind.transformer>([\s\S]*?)<\/cim:RegulationBranchKind.transformer>/g, sub, context, true);
            obj["switch"] = base.parse_element (/<cim:RegulationBranchKind.switch>([\s\S]*?)<\/cim:RegulationBranchKind.switch>/g, sub, context, true);
            obj["breaker"] = base.parse_element (/<cim:RegulationBranchKind.breaker>([\s\S]*?)<\/cim:RegulationBranchKind.breaker>/g, sub, context, true);
            obj["recloser"] = base.parse_element (/<cim:RegulationBranchKind.recloser>([\s\S]*?)<\/cim:RegulationBranchKind.recloser>/g, sub, context, true);
            obj["fuse"] = base.parse_element (/<cim:RegulationBranchKind.fuse>([\s\S]*?)<\/cim:RegulationBranchKind.fuse>/g, sub, context, true);
            obj["sectionner"] = base.parse_element (/<cim:RegulationBranchKind.sectionner>([\s\S]*?)<\/cim:RegulationBranchKind.sectionner>/g, sub, context, true);
            obj["other"] = base.parse_element (/<cim:RegulationBranchKind.other>([\s\S]*?)<\/cim:RegulationBranchKind.other>/g, sub, context, true);
            bucket = context.parsed.RegulationBranchKind;
            if (null == bucket)
                context.parsed.RegulationBranchKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of oil preservation.
         */
        function parse_OilPreservationKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OilPreservationKind";
            obj["freeBreathing"] = base.parse_element (/<cim:OilPreservationKind.freeBreathing>([\s\S]*?)<\/cim:OilPreservationKind.freeBreathing>/g, sub, context, true);
            obj["nitrogenBlanket"] = base.parse_element (/<cim:OilPreservationKind.nitrogenBlanket>([\s\S]*?)<\/cim:OilPreservationKind.nitrogenBlanket>/g, sub, context, true);
            obj["conservator"] = base.parse_element (/<cim:OilPreservationKind.conservator>([\s\S]*?)<\/cim:OilPreservationKind.conservator>/g, sub, context, true);
            obj["other"] = base.parse_element (/<cim:OilPreservationKind.other>([\s\S]*?)<\/cim:OilPreservationKind.other>/g, sub, context, true);
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