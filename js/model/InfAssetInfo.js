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

        function export_TransformerCoreKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "TransformerCoreKind", "core", base.from_string, fields);
            base.export_element (obj, "TransformerCoreKind", "shell", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:RecloserInfo.groundTripCapable>([\s\S]*?)<\/cim:RecloserInfo.groundTripCapable>/g, obj, "groundTripCapable", base.to_boolean, sub, context);
            base.parse_element (/<cim:RecloserInfo.groundTripNormalEnabled>([\s\S]*?)<\/cim:RecloserInfo.groundTripNormalEnabled>/g, obj, "groundTripNormalEnabled", base.to_boolean, sub, context);
            base.parse_element (/<cim:RecloserInfo.groundTripRating>([\s\S]*?)<\/cim:RecloserInfo.groundTripRating>/g, obj, "groundTripRating", base.to_string, sub, context);
            base.parse_element (/<cim:RecloserInfo.phaseTripRating>([\s\S]*?)<\/cim:RecloserInfo.phaseTripRating>/g, obj, "phaseTripRating", base.to_string, sub, context);
            base.parse_element (/<cim:RecloserInfo.recloseLockoutCount>([\s\S]*?)<\/cim:RecloserInfo.recloseLockoutCount>/g, obj, "recloseLockoutCount", base.to_string, sub, context);
            bucket = context.parsed.RecloserInfo;
            if (null == bucket)
                context.parsed.RecloserInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_RecloserInfo (obj, exporters, full)
        {
            var fields = exporters["OldSwitchInfo"](obj, exporters, false);

            base.export_element (obj, "RecloserInfo", "groundTripCapable", base.from_boolean, fields);
            base.export_element (obj, "RecloserInfo", "groundTripNormalEnabled", base.from_boolean, fields);
            base.export_element (obj, "RecloserInfo", "groundTripRating", base.from_string, fields);
            base.export_element (obj, "RecloserInfo", "phaseTripRating", base.from_string, fields);
            base.export_element (obj, "RecloserInfo", "recloseLockoutCount", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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

        function export_ShuntImpedanceControlKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ShuntImpedanceControlKind", "fixed", base.from_string, fields);
            base.export_element (obj, "ShuntImpedanceControlKind", "localOnly", base.from_string, fields);
            base.export_element (obj, "ShuntImpedanceControlKind", "remoteOnly", base.from_string, fields);
            base.export_element (obj, "ShuntImpedanceControlKind", "remoteWithLocalOverride", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:FaultIndicatorInfo.resetKind>([\s\S]*?)<\/cim:FaultIndicatorInfo.resetKind>/g, obj, "resetKind", base.to_string, sub, context);
            bucket = context.parsed.FaultIndicatorInfo;
            if (null == bucket)
                context.parsed.FaultIndicatorInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_FaultIndicatorInfo (obj, exporters, full)
        {
            var fields = exporters["AssetInfo"](obj, exporters, false);

            base.export_element (obj, "FaultIndicatorInfo", "resetKind", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:BreakerInfo.phaseTrip>([\s\S]*?)<\/cim:BreakerInfo.phaseTrip>/g, obj, "phaseTrip", base.to_string, sub, context);
            bucket = context.parsed.BreakerInfo;
            if (null == bucket)
                context.parsed.BreakerInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_BreakerInfo (obj, exporters, full)
        {
            var fields = exporters["OldSwitchInfo"](obj, exporters, false);

            base.export_element (obj, "BreakerInfo", "phaseTrip", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:AssetModelCatalogueItem.unitCost>([\s\S]*?)<\/cim:AssetModelCatalogueItem.unitCost>/g, obj, "unitCost", base.to_string, sub, context);
            base.parse_attribute (/<cim:AssetModelCatalogueItem.AssetModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetModel", sub, context);
            base.parse_attribute (/<cim:AssetModelCatalogueItem.AssetModelCatalogue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetModelCatalogue", sub, context);
            bucket = context.parsed.AssetModelCatalogueItem;
            if (null == bucket)
                context.parsed.AssetModelCatalogueItem = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AssetModelCatalogueItem (obj, exporters, full)
        {
            var fields = exporters["Document"](obj, exporters, false);

            base.export_element (obj, "AssetModelCatalogueItem", "unitCost", base.from_string, fields);
            base.export_attribute (obj, "AssetModelCatalogueItem", "AssetModel", fields);
            base.export_attribute (obj, "AssetModelCatalogueItem", "AssetModelCatalogue", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:OldSwitchInfo.dielectricStrength>([\s\S]*?)<\/cim:OldSwitchInfo.dielectricStrength>/g, obj, "dielectricStrength", base.to_string, sub, context);
            base.parse_element (/<cim:OldSwitchInfo.loadBreak>([\s\S]*?)<\/cim:OldSwitchInfo.loadBreak>/g, obj, "loadBreak", base.to_boolean, sub, context);
            base.parse_element (/<cim:OldSwitchInfo.makingCapacity>([\s\S]*?)<\/cim:OldSwitchInfo.makingCapacity>/g, obj, "makingCapacity", base.to_string, sub, context);
            base.parse_element (/<cim:OldSwitchInfo.minimumCurrent>([\s\S]*?)<\/cim:OldSwitchInfo.minimumCurrent>/g, obj, "minimumCurrent", base.to_string, sub, context);
            base.parse_element (/<cim:OldSwitchInfo.poleCount>([\s\S]*?)<\/cim:OldSwitchInfo.poleCount>/g, obj, "poleCount", base.to_string, sub, context);
            base.parse_element (/<cim:OldSwitchInfo.remote>([\s\S]*?)<\/cim:OldSwitchInfo.remote>/g, obj, "remote", base.to_boolean, sub, context);
            base.parse_element (/<cim:OldSwitchInfo.withstandCurrent>([\s\S]*?)<\/cim:OldSwitchInfo.withstandCurrent>/g, obj, "withstandCurrent", base.to_string, sub, context);
            bucket = context.parsed.OldSwitchInfo;
            if (null == bucket)
                context.parsed.OldSwitchInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OldSwitchInfo (obj, exporters, full)
        {
            var fields = exporters["SwitchInfo"](obj, exporters, false);

            base.export_element (obj, "OldSwitchInfo", "dielectricStrength", base.from_string, fields);
            base.export_element (obj, "OldSwitchInfo", "loadBreak", base.from_boolean, fields);
            base.export_element (obj, "OldSwitchInfo", "makingCapacity", base.from_string, fields);
            base.export_element (obj, "OldSwitchInfo", "minimumCurrent", base.from_string, fields);
            base.export_element (obj, "OldSwitchInfo", "poleCount", base.from_string, fields);
            base.export_element (obj, "OldSwitchInfo", "remote", base.from_boolean, fields);
            base.export_element (obj, "OldSwitchInfo", "withstandCurrent", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:CurrentTransformerInfo.accuracyClass>([\s\S]*?)<\/cim:CurrentTransformerInfo.accuracyClass>/g, obj, "accuracyClass", base.to_string, sub, context);
            base.parse_element (/<cim:CurrentTransformerInfo.accuracyLimit>([\s\S]*?)<\/cim:CurrentTransformerInfo.accuracyLimit>/g, obj, "accuracyLimit", base.to_string, sub, context);
            base.parse_element (/<cim:CurrentTransformerInfo.coreCount>([\s\S]*?)<\/cim:CurrentTransformerInfo.coreCount>/g, obj, "coreCount", base.to_string, sub, context);
            base.parse_element (/<cim:CurrentTransformerInfo.ctClass>([\s\S]*?)<\/cim:CurrentTransformerInfo.ctClass>/g, obj, "ctClass", base.to_string, sub, context);
            base.parse_element (/<cim:CurrentTransformerInfo.kneePointCurrent>([\s\S]*?)<\/cim:CurrentTransformerInfo.kneePointCurrent>/g, obj, "kneePointCurrent", base.to_string, sub, context);
            base.parse_element (/<cim:CurrentTransformerInfo.kneePointVoltage>([\s\S]*?)<\/cim:CurrentTransformerInfo.kneePointVoltage>/g, obj, "kneePointVoltage", base.to_string, sub, context);
            base.parse_element (/<cim:CurrentTransformerInfo.maxRatio>([\s\S]*?)<\/cim:CurrentTransformerInfo.maxRatio>/g, obj, "maxRatio", base.to_string, sub, context);
            base.parse_element (/<cim:CurrentTransformerInfo.nominalRatio>([\s\S]*?)<\/cim:CurrentTransformerInfo.nominalRatio>/g, obj, "nominalRatio", base.to_string, sub, context);
            base.parse_element (/<cim:CurrentTransformerInfo.primaryFlsRating>([\s\S]*?)<\/cim:CurrentTransformerInfo.primaryFlsRating>/g, obj, "primaryFlsRating", base.to_string, sub, context);
            base.parse_element (/<cim:CurrentTransformerInfo.primaryRatio>([\s\S]*?)<\/cim:CurrentTransformerInfo.primaryRatio>/g, obj, "primaryRatio", base.to_string, sub, context);
            base.parse_element (/<cim:CurrentTransformerInfo.ratedCurrent>([\s\S]*?)<\/cim:CurrentTransformerInfo.ratedCurrent>/g, obj, "ratedCurrent", base.to_string, sub, context);
            base.parse_element (/<cim:CurrentTransformerInfo.secondaryFlsRating>([\s\S]*?)<\/cim:CurrentTransformerInfo.secondaryFlsRating>/g, obj, "secondaryFlsRating", base.to_string, sub, context);
            base.parse_element (/<cim:CurrentTransformerInfo.secondaryRatio>([\s\S]*?)<\/cim:CurrentTransformerInfo.secondaryRatio>/g, obj, "secondaryRatio", base.to_string, sub, context);
            base.parse_element (/<cim:CurrentTransformerInfo.tertiaryFlsRating>([\s\S]*?)<\/cim:CurrentTransformerInfo.tertiaryFlsRating>/g, obj, "tertiaryFlsRating", base.to_string, sub, context);
            base.parse_element (/<cim:CurrentTransformerInfo.tertiaryRatio>([\s\S]*?)<\/cim:CurrentTransformerInfo.tertiaryRatio>/g, obj, "tertiaryRatio", base.to_string, sub, context);
            base.parse_element (/<cim:CurrentTransformerInfo.usage>([\s\S]*?)<\/cim:CurrentTransformerInfo.usage>/g, obj, "usage", base.to_string, sub, context);
            bucket = context.parsed.CurrentTransformerInfo;
            if (null == bucket)
                context.parsed.CurrentTransformerInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CurrentTransformerInfo (obj, exporters, full)
        {
            var fields = exporters["AssetInfo"](obj, exporters, false);

            base.export_element (obj, "CurrentTransformerInfo", "accuracyClass", base.from_string, fields);
            base.export_element (obj, "CurrentTransformerInfo", "accuracyLimit", base.from_string, fields);
            base.export_element (obj, "CurrentTransformerInfo", "coreCount", base.from_string, fields);
            base.export_element (obj, "CurrentTransformerInfo", "ctClass", base.from_string, fields);
            base.export_element (obj, "CurrentTransformerInfo", "kneePointCurrent", base.from_string, fields);
            base.export_element (obj, "CurrentTransformerInfo", "kneePointVoltage", base.from_string, fields);
            base.export_element (obj, "CurrentTransformerInfo", "maxRatio", base.from_string, fields);
            base.export_element (obj, "CurrentTransformerInfo", "nominalRatio", base.from_string, fields);
            base.export_element (obj, "CurrentTransformerInfo", "primaryFlsRating", base.from_string, fields);
            base.export_element (obj, "CurrentTransformerInfo", "primaryRatio", base.from_string, fields);
            base.export_element (obj, "CurrentTransformerInfo", "ratedCurrent", base.from_string, fields);
            base.export_element (obj, "CurrentTransformerInfo", "secondaryFlsRating", base.from_string, fields);
            base.export_element (obj, "CurrentTransformerInfo", "secondaryRatio", base.from_string, fields);
            base.export_element (obj, "CurrentTransformerInfo", "tertiaryFlsRating", base.from_string, fields);
            base.export_element (obj, "CurrentTransformerInfo", "tertiaryRatio", base.from_string, fields);
            base.export_element (obj, "CurrentTransformerInfo", "usage", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:SurgeArresterInfo.continuousOperatingVoltage>([\s\S]*?)<\/cim:SurgeArresterInfo.continuousOperatingVoltage>/g, obj, "continuousOperatingVoltage", base.to_string, sub, context);
            base.parse_element (/<cim:SurgeArresterInfo.isPolymer>([\s\S]*?)<\/cim:SurgeArresterInfo.isPolymer>/g, obj, "isPolymer", base.to_boolean, sub, context);
            base.parse_element (/<cim:SurgeArresterInfo.lightningImpulseDischargeVoltage>([\s\S]*?)<\/cim:SurgeArresterInfo.lightningImpulseDischargeVoltage>/g, obj, "lightningImpulseDischargeVoltage", base.to_string, sub, context);
            base.parse_element (/<cim:SurgeArresterInfo.lineDischargeClass>([\s\S]*?)<\/cim:SurgeArresterInfo.lineDischargeClass>/g, obj, "lineDischargeClass", base.to_string, sub, context);
            base.parse_element (/<cim:SurgeArresterInfo.nominalDischargeCurrent>([\s\S]*?)<\/cim:SurgeArresterInfo.nominalDischargeCurrent>/g, obj, "nominalDischargeCurrent", base.to_string, sub, context);
            base.parse_element (/<cim:SurgeArresterInfo.pressureReliefClass>([\s\S]*?)<\/cim:SurgeArresterInfo.pressureReliefClass>/g, obj, "pressureReliefClass", base.to_string, sub, context);
            base.parse_element (/<cim:SurgeArresterInfo.ratedVoltage>([\s\S]*?)<\/cim:SurgeArresterInfo.ratedVoltage>/g, obj, "ratedVoltage", base.to_string, sub, context);
            base.parse_element (/<cim:SurgeArresterInfo.steepFrontDischargeVoltage>([\s\S]*?)<\/cim:SurgeArresterInfo.steepFrontDischargeVoltage>/g, obj, "steepFrontDischargeVoltage", base.to_string, sub, context);
            base.parse_element (/<cim:SurgeArresterInfo.switchingImpulseDischargeVoltage>([\s\S]*?)<\/cim:SurgeArresterInfo.switchingImpulseDischargeVoltage>/g, obj, "switchingImpulseDischargeVoltage", base.to_string, sub, context);
            bucket = context.parsed.SurgeArresterInfo;
            if (null == bucket)
                context.parsed.SurgeArresterInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SurgeArresterInfo (obj, exporters, full)
        {
            var fields = exporters["AssetInfo"](obj, exporters, false);

            base.export_element (obj, "SurgeArresterInfo", "continuousOperatingVoltage", base.from_string, fields);
            base.export_element (obj, "SurgeArresterInfo", "isPolymer", base.from_boolean, fields);
            base.export_element (obj, "SurgeArresterInfo", "lightningImpulseDischargeVoltage", base.from_string, fields);
            base.export_element (obj, "SurgeArresterInfo", "lineDischargeClass", base.from_string, fields);
            base.export_element (obj, "SurgeArresterInfo", "nominalDischargeCurrent", base.from_string, fields);
            base.export_element (obj, "SurgeArresterInfo", "pressureReliefClass", base.from_string, fields);
            base.export_element (obj, "SurgeArresterInfo", "ratedVoltage", base.from_string, fields);
            base.export_element (obj, "SurgeArresterInfo", "steepFrontDischargeVoltage", base.from_string, fields);
            base.export_element (obj, "SurgeArresterInfo", "switchingImpulseDischargeVoltage", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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

        function export_CompositeSwitchKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "CompositeSwitchKind", "throwOver", base.from_string, fields);
            base.export_element (obj, "CompositeSwitchKind", "escoThrowOver", base.from_string, fields);
            base.export_element (obj, "CompositeSwitchKind", "ral", base.from_string, fields);
            base.export_element (obj, "CompositeSwitchKind", "gral", base.from_string, fields);
            base.export_element (obj, "CompositeSwitchKind", "regulatorBypass", base.from_string, fields);
            base.export_element (obj, "CompositeSwitchKind", "ugMultiSwitch", base.from_string, fields);
            base.export_element (obj, "CompositeSwitchKind", "other", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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

        function export_AssetModelCatalogue (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "AssetModelCatalogue", "status", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:ProtectionEquipmentInfo.groundTrip>([\s\S]*?)<\/cim:ProtectionEquipmentInfo.groundTrip>/g, obj, "groundTrip", base.to_string, sub, context);
            base.parse_element (/<cim:ProtectionEquipmentInfo.phaseTrip>([\s\S]*?)<\/cim:ProtectionEquipmentInfo.phaseTrip>/g, obj, "phaseTrip", base.to_string, sub, context);
            bucket = context.parsed.ProtectionEquipmentInfo;
            if (null == bucket)
                context.parsed.ProtectionEquipmentInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ProtectionEquipmentInfo (obj, exporters, full)
        {
            var fields = exporters["AssetInfo"](obj, exporters, false);

            base.export_element (obj, "ProtectionEquipmentInfo", "groundTrip", base.from_string, fields);
            base.export_element (obj, "ProtectionEquipmentInfo", "phaseTrip", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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

        function export_TransformerConstructionKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "TransformerConstructionKind", "onePhase", base.from_string, fields);
            base.export_element (obj, "TransformerConstructionKind", "threePhase", base.from_string, fields);
            base.export_element (obj, "TransformerConstructionKind", "aerial", base.from_string, fields);
            base.export_element (obj, "TransformerConstructionKind", "overhead", base.from_string, fields);
            base.export_element (obj, "TransformerConstructionKind", "dryType", base.from_string, fields);
            base.export_element (obj, "TransformerConstructionKind", "network", base.from_string, fields);
            base.export_element (obj, "TransformerConstructionKind", "padmountDeadFront", base.from_string, fields);
            base.export_element (obj, "TransformerConstructionKind", "padmountFeedThrough", base.from_string, fields);
            base.export_element (obj, "TransformerConstructionKind", "padmountLiveFront", base.from_string, fields);
            base.export_element (obj, "TransformerConstructionKind", "padmountLoopThrough", base.from_string, fields);
            base.export_element (obj, "TransformerConstructionKind", "padmounted", base.from_string, fields);
            base.export_element (obj, "TransformerConstructionKind", "subway", base.from_string, fields);
            base.export_element (obj, "TransformerConstructionKind", "underground", base.from_string, fields);
            base.export_element (obj, "TransformerConstructionKind", "vault", base.from_string, fields);
            base.export_element (obj, "TransformerConstructionKind", "vaultThreePhase", base.from_string, fields);
            base.export_element (obj, "TransformerConstructionKind", "unknown", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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

        function export_WindingInsulationKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "WindingInsulationKind", "paper", base.from_string, fields);
            base.export_element (obj, "WindingInsulationKind", "thermallyUpgradedPaper", base.from_string, fields);
            base.export_element (obj, "WindingInsulationKind", "nomex", base.from_string, fields);
            base.export_element (obj, "WindingInsulationKind", "other", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_OldTransformerTankInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = AssetInfo.parse_TransformerTankInfo (context, sub);
            obj.cls = "OldTransformerTankInfo";
            base.parse_element (/<cim:OldTransformerTankInfo.constructionKind>([\s\S]*?)<\/cim:OldTransformerTankInfo.constructionKind>/g, obj, "constructionKind", base.to_string, sub, context);
            base.parse_element (/<cim:OldTransformerTankInfo.coreCoilsWeight>([\s\S]*?)<\/cim:OldTransformerTankInfo.coreCoilsWeight>/g, obj, "coreCoilsWeight", base.to_string, sub, context);
            base.parse_element (/<cim:OldTransformerTankInfo.coreKind>([\s\S]*?)<\/cim:OldTransformerTankInfo.coreKind>/g, obj, "coreKind", base.to_string, sub, context);
            base.parse_element (/<cim:OldTransformerTankInfo.function>([\s\S]*?)<\/cim:OldTransformerTankInfo.function>/g, obj, "function", base.to_string, sub, context);
            base.parse_element (/<cim:OldTransformerTankInfo.neutralBIL>([\s\S]*?)<\/cim:OldTransformerTankInfo.neutralBIL>/g, obj, "neutralBIL", base.to_string, sub, context);
            base.parse_element (/<cim:OldTransformerTankInfo.oilPreservationKind>([\s\S]*?)<\/cim:OldTransformerTankInfo.oilPreservationKind>/g, obj, "oilPreservationKind", base.to_string, sub, context);
            bucket = context.parsed.OldTransformerTankInfo;
            if (null == bucket)
                context.parsed.OldTransformerTankInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OldTransformerTankInfo (obj, exporters, full)
        {
            var fields = exporters["TransformerTankInfo"](obj, exporters, false);

            base.export_element (obj, "OldTransformerTankInfo", "constructionKind", base.from_string, fields);
            base.export_element (obj, "OldTransformerTankInfo", "coreCoilsWeight", base.from_string, fields);
            base.export_element (obj, "OldTransformerTankInfo", "coreKind", base.from_string, fields);
            base.export_element (obj, "OldTransformerTankInfo", "function", base.from_string, fields);
            base.export_element (obj, "OldTransformerTankInfo", "neutralBIL", base.from_string, fields);
            base.export_element (obj, "OldTransformerTankInfo", "oilPreservationKind", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:CompositeSwitchInfo.ganged>([\s\S]*?)<\/cim:CompositeSwitchInfo.ganged>/g, obj, "ganged", base.to_boolean, sub, context);
            base.parse_element (/<cim:CompositeSwitchInfo.initOpMode>([\s\S]*?)<\/cim:CompositeSwitchInfo.initOpMode>/g, obj, "initOpMode", base.to_string, sub, context);
            base.parse_element (/<cim:CompositeSwitchInfo.interruptingRating>([\s\S]*?)<\/cim:CompositeSwitchInfo.interruptingRating>/g, obj, "interruptingRating", base.to_string, sub, context);
            base.parse_element (/<cim:CompositeSwitchInfo.kind>([\s\S]*?)<\/cim:CompositeSwitchInfo.kind>/g, obj, "kind", base.to_string, sub, context);
            base.parse_element (/<cim:CompositeSwitchInfo.phaseCode>([\s\S]*?)<\/cim:CompositeSwitchInfo.phaseCode>/g, obj, "phaseCode", base.to_string, sub, context);
            base.parse_element (/<cim:CompositeSwitchInfo.phaseCount>([\s\S]*?)<\/cim:CompositeSwitchInfo.phaseCount>/g, obj, "phaseCount", base.to_string, sub, context);
            base.parse_element (/<cim:CompositeSwitchInfo.ratedVoltage>([\s\S]*?)<\/cim:CompositeSwitchInfo.ratedVoltage>/g, obj, "ratedVoltage", base.to_string, sub, context);
            base.parse_element (/<cim:CompositeSwitchInfo.remote>([\s\S]*?)<\/cim:CompositeSwitchInfo.remote>/g, obj, "remote", base.to_boolean, sub, context);
            base.parse_element (/<cim:CompositeSwitchInfo.switchStateCount>([\s\S]*?)<\/cim:CompositeSwitchInfo.switchStateCount>/g, obj, "switchStateCount", base.to_string, sub, context);
            bucket = context.parsed.CompositeSwitchInfo;
            if (null == bucket)
                context.parsed.CompositeSwitchInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CompositeSwitchInfo (obj, exporters, full)
        {
            var fields = exporters["AssetInfo"](obj, exporters, false);

            base.export_element (obj, "CompositeSwitchInfo", "ganged", base.from_boolean, fields);
            base.export_element (obj, "CompositeSwitchInfo", "initOpMode", base.from_string, fields);
            base.export_element (obj, "CompositeSwitchInfo", "interruptingRating", base.from_string, fields);
            base.export_element (obj, "CompositeSwitchInfo", "kind", base.from_string, fields);
            base.export_element (obj, "CompositeSwitchInfo", "phaseCode", base.from_string, fields);
            base.export_element (obj, "CompositeSwitchInfo", "phaseCount", base.from_string, fields);
            base.export_element (obj, "CompositeSwitchInfo", "ratedVoltage", base.from_string, fields);
            base.export_element (obj, "CompositeSwitchInfo", "remote", base.from_boolean, fields);
            base.export_element (obj, "CompositeSwitchInfo", "switchStateCount", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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

        function export_ShuntImpedanceLocalControlKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ShuntImpedanceLocalControlKind", "none", base.from_string, fields);
            base.export_element (obj, "ShuntImpedanceLocalControlKind", "powerFactor", base.from_string, fields);
            base.export_element (obj, "ShuntImpedanceLocalControlKind", "time", base.from_string, fields);
            base.export_element (obj, "ShuntImpedanceLocalControlKind", "temperature", base.from_string, fields);
            base.export_element (obj, "ShuntImpedanceLocalControlKind", "reactivePower", base.from_string, fields);
            base.export_element (obj, "ShuntImpedanceLocalControlKind", "current", base.from_string, fields);
            base.export_element (obj, "ShuntImpedanceLocalControlKind", "voltage", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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

        function export_FaultIndicatorResetKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "FaultIndicatorResetKind", "automatic", base.from_string, fields);
            base.export_element (obj, "FaultIndicatorResetKind", "manual", base.from_string, fields);
            base.export_element (obj, "FaultIndicatorResetKind", "remote", base.from_string, fields);
            base.export_element (obj, "FaultIndicatorResetKind", "other", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:PotentialTransformerInfo.primaryRatio>([\s\S]*?)<\/cim:PotentialTransformerInfo.primaryRatio>/g, obj, "primaryRatio", base.to_string, sub, context);
            base.parse_element (/<cim:PotentialTransformerInfo.ptClass>([\s\S]*?)<\/cim:PotentialTransformerInfo.ptClass>/g, obj, "ptClass", base.to_string, sub, context);
            base.parse_element (/<cim:PotentialTransformerInfo.ratedVoltage>([\s\S]*?)<\/cim:PotentialTransformerInfo.ratedVoltage>/g, obj, "ratedVoltage", base.to_string, sub, context);
            base.parse_element (/<cim:PotentialTransformerInfo.secondaryRatio>([\s\S]*?)<\/cim:PotentialTransformerInfo.secondaryRatio>/g, obj, "secondaryRatio", base.to_string, sub, context);
            base.parse_element (/<cim:PotentialTransformerInfo.tertiaryRatio>([\s\S]*?)<\/cim:PotentialTransformerInfo.tertiaryRatio>/g, obj, "tertiaryRatio", base.to_string, sub, context);
            bucket = context.parsed.PotentialTransformerInfo;
            if (null == bucket)
                context.parsed.PotentialTransformerInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PotentialTransformerInfo (obj, exporters, full)
        {
            var fields = exporters["AssetInfo"](obj, exporters, false);

            base.export_element (obj, "PotentialTransformerInfo", "accuracyClass", base.from_string, fields);
            base.export_element (obj, "PotentialTransformerInfo", "nominalRatio", base.from_string, fields);
            base.export_element (obj, "PotentialTransformerInfo", "primaryRatio", base.from_string, fields);
            base.export_element (obj, "PotentialTransformerInfo", "ptClass", base.from_string, fields);
            base.export_element (obj, "PotentialTransformerInfo", "ratedVoltage", base.from_string, fields);
            base.export_element (obj, "PotentialTransformerInfo", "secondaryRatio", base.from_string, fields);
            base.export_element (obj, "PotentialTransformerInfo", "tertiaryRatio", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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

        function export_TransformerFunctionKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "TransformerFunctionKind", "powerTransformer", base.from_string, fields);
            base.export_element (obj, "TransformerFunctionKind", "voltageRegulator", base.from_string, fields);
            base.export_element (obj, "TransformerFunctionKind", "autotransformer", base.from_string, fields);
            base.export_element (obj, "TransformerFunctionKind", "secondaryTransformer", base.from_string, fields);
            base.export_element (obj, "TransformerFunctionKind", "other", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_OldTransformerEndInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = AssetInfo.parse_TransformerEndInfo (context, sub);
            obj.cls = "OldTransformerEndInfo";
            base.parse_element (/<cim:OldTransformerEndInfo.dayOverLoadRating>([\s\S]*?)<\/cim:OldTransformerEndInfo.dayOverLoadRating>/g, obj, "dayOverLoadRating", base.to_string, sub, context);
            base.parse_element (/<cim:OldTransformerEndInfo.hourOverLoadRating>([\s\S]*?)<\/cim:OldTransformerEndInfo.hourOverLoadRating>/g, obj, "hourOverLoadRating", base.to_string, sub, context);
            base.parse_element (/<cim:OldTransformerEndInfo.solidInsulationWeight>([\s\S]*?)<\/cim:OldTransformerEndInfo.solidInsulationWeight>/g, obj, "solidInsulationWeight", base.to_string, sub, context);
            base.parse_element (/<cim:OldTransformerEndInfo.windingInsulationKind>([\s\S]*?)<\/cim:OldTransformerEndInfo.windingInsulationKind>/g, obj, "windingInsulationKind", base.to_string, sub, context);
            bucket = context.parsed.OldTransformerEndInfo;
            if (null == bucket)
                context.parsed.OldTransformerEndInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OldTransformerEndInfo (obj, exporters, full)
        {
            var fields = exporters["TransformerEndInfo"](obj, exporters, false);

            base.export_element (obj, "OldTransformerEndInfo", "dayOverLoadRating", base.from_string, fields);
            base.export_element (obj, "OldTransformerEndInfo", "hourOverLoadRating", base.from_string, fields);
            base.export_element (obj, "OldTransformerEndInfo", "solidInsulationWeight", base.from_string, fields);
            base.export_element (obj, "OldTransformerEndInfo", "windingInsulationKind", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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

        function export_RegulationBranchKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "RegulationBranchKind", "line", base.from_string, fields);
            base.export_element (obj, "RegulationBranchKind", "transformer", base.from_string, fields);
            base.export_element (obj, "RegulationBranchKind", "switch", base.from_string, fields);
            base.export_element (obj, "RegulationBranchKind", "breaker", base.from_string, fields);
            base.export_element (obj, "RegulationBranchKind", "recloser", base.from_string, fields);
            base.export_element (obj, "RegulationBranchKind", "fuse", base.from_string, fields);
            base.export_element (obj, "RegulationBranchKind", "sectionner", base.from_string, fields);
            base.export_element (obj, "RegulationBranchKind", "other", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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

        function export_OilPreservationKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "OilPreservationKind", "freeBreathing", base.from_string, fields);
            base.export_element (obj, "OilPreservationKind", "nitrogenBlanket", base.from_string, fields);
            base.export_element (obj, "OilPreservationKind", "conservator", base.from_string, fields);
            base.export_element (obj, "OilPreservationKind", "other", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                export_TransformerConstructionKind: export_TransformerConstructionKind,
                export_PotentialTransformerInfo: export_PotentialTransformerInfo,
                export_SurgeArresterInfo: export_SurgeArresterInfo,
                export_ProtectionEquipmentInfo: export_ProtectionEquipmentInfo,
                parse_RegulationBranchKind: parse_RegulationBranchKind,
                parse_ShuntImpedanceControlKind: parse_ShuntImpedanceControlKind,
                export_ShuntImpedanceLocalControlKind: export_ShuntImpedanceLocalControlKind,
                export_WindingInsulationKind: export_WindingInsulationKind,
                parse_ShuntImpedanceLocalControlKind: parse_ShuntImpedanceLocalControlKind,
                parse_WindingInsulationKind: parse_WindingInsulationKind,
                export_RecloserInfo: export_RecloserInfo,
                parse_ProtectionEquipmentInfo: parse_ProtectionEquipmentInfo,
                export_AssetModelCatalogueItem: export_AssetModelCatalogueItem,
                export_CompositeSwitchInfo: export_CompositeSwitchInfo,
                export_ShuntImpedanceControlKind: export_ShuntImpedanceControlKind,
                parse_CompositeSwitchKind: parse_CompositeSwitchKind,
                parse_PotentialTransformerInfo: parse_PotentialTransformerInfo,
                export_AssetModelCatalogue: export_AssetModelCatalogue,
                export_OilPreservationKind: export_OilPreservationKind,
                export_FaultIndicatorInfo: export_FaultIndicatorInfo,
                parse_OldTransformerTankInfo: parse_OldTransformerTankInfo,
                parse_AssetModelCatalogue: parse_AssetModelCatalogue,
                parse_AssetModelCatalogueItem: parse_AssetModelCatalogueItem,
                export_TransformerCoreKind: export_TransformerCoreKind,
                parse_FaultIndicatorInfo: parse_FaultIndicatorInfo,
                parse_BreakerInfo: parse_BreakerInfo,
                export_FaultIndicatorResetKind: export_FaultIndicatorResetKind,
                export_TransformerFunctionKind: export_TransformerFunctionKind,
                export_BreakerInfo: export_BreakerInfo,
                export_OldSwitchInfo: export_OldSwitchInfo,
                parse_OldTransformerEndInfo: parse_OldTransformerEndInfo,
                export_RegulationBranchKind: export_RegulationBranchKind,
                parse_TransformerCoreKind: parse_TransformerCoreKind,
                parse_OilPreservationKind: parse_OilPreservationKind,
                export_CurrentTransformerInfo: export_CurrentTransformerInfo,
                export_CompositeSwitchKind: export_CompositeSwitchKind,
                export_OldTransformerEndInfo: export_OldTransformerEndInfo,
                parse_OldSwitchInfo: parse_OldSwitchInfo,
                parse_CompositeSwitchInfo: parse_CompositeSwitchInfo,
                parse_TransformerConstructionKind: parse_TransformerConstructionKind,
                parse_TransformerFunctionKind: parse_TransformerFunctionKind,
                parse_RecloserInfo: parse_RecloserInfo,
                export_OldTransformerTankInfo: export_OldTransformerTankInfo,
                parse_CurrentTransformerInfo: parse_CurrentTransformerInfo,
                parse_FaultIndicatorResetKind: parse_FaultIndicatorResetKind,
                parse_SurgeArresterInfo: parse_SurgeArresterInfo
            }
        );
    }
);