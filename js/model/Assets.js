define
(
    ["model/base", "model/Common", "model/Core"],
    /**
     * This package contains the core information classes that support asset management applications that deal with the physical and lifecycle aspects of various network resources (as opposed to power system resource models defined in IEC61970::Wires package, which support network applications).
     *
     */
    function (base, Common, Core)
    {

        /**
         * Owner of the asset.
         *
         */
        function parse_AssetOwner (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_AssetOrganisationRole (context, sub);
            obj.cls = "AssetOwner";
            bucket = context.parsed.AssetOwner;
            if (null == bucket)
                context.parsed.AssetOwner = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AssetOwner (obj, exporters, full)
        {
            var fields = exporters["AssetOrganisationRole"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Tangible resource of the utility, including power system equipment, various end devices, cabinets, buildings, etc.
         *
         * For electrical network equipment, the role of the asset is defined through PowerSystemResource and its subclasses, defined mainly in the Wires model (refer to IEC61970-301 and model package IEC61970::Wires). Asset description places emphasis on the physical characteristics of the equipment fulfilling that role.
         *
         */
        function parse_Asset (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Asset";
            base.parse_element (/<cim:Asset.acceptanceTest>([\s\S]*?)<\/cim:Asset.acceptanceTest>/g, obj, "acceptanceTest", base.to_string, sub, context);
            base.parse_element (/<cim:Asset.critical>([\s\S]*?)<\/cim:Asset.critical>/g, obj, "critical", base.to_boolean, sub, context);
            base.parse_element (/<cim:Asset.electronicAddress>([\s\S]*?)<\/cim:Asset.electronicAddress>/g, obj, "electronicAddress", base.to_string, sub, context);
            base.parse_element (/<cim:Asset.initialCondition>([\s\S]*?)<\/cim:Asset.initialCondition>/g, obj, "initialCondition", base.to_string, sub, context);
            base.parse_element (/<cim:Asset.initialLossOfLife>([\s\S]*?)<\/cim:Asset.initialLossOfLife>/g, obj, "initialLossOfLife", base.to_string, sub, context);
            base.parse_element (/<cim:Asset.lifecycle>([\s\S]*?)<\/cim:Asset.lifecycle>/g, obj, "lifecycle", base.to_string, sub, context);
            base.parse_element (/<cim:Asset.lotNumber>([\s\S]*?)<\/cim:Asset.lotNumber>/g, obj, "lotNumber", base.to_string, sub, context);
            base.parse_element (/<cim:Asset.purchasePrice>([\s\S]*?)<\/cim:Asset.purchasePrice>/g, obj, "purchasePrice", base.to_string, sub, context);
            base.parse_element (/<cim:Asset.serialNumber>([\s\S]*?)<\/cim:Asset.serialNumber>/g, obj, "serialNumber", base.to_string, sub, context);
            base.parse_element (/<cim:Asset.status>([\s\S]*?)<\/cim:Asset.status>/g, obj, "status", base.to_string, sub, context);
            base.parse_element (/<cim:Asset.type>([\s\S]*?)<\/cim:Asset.type>/g, obj, "type", base.to_string, sub, context);
            base.parse_element (/<cim:Asset.utcNumber>([\s\S]*?)<\/cim:Asset.utcNumber>/g, obj, "utcNumber", base.to_string, sub, context);
            base.parse_attribute (/<cim:Asset.FinancialInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FinancialInfo", sub, context);
            base.parse_attribute (/<cim:Asset.ErpItemMaster\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpItemMaster", sub, context);
            base.parse_attribute (/<cim:Asset.AssetContainer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetContainer", sub, context);
            base.parse_attribute (/<cim:Asset.Location\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Location", sub, context);
            base.parse_attribute (/<cim:Asset.ErpInventory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpInventory", sub, context);
            base.parse_attribute (/<cim:Asset.AssetInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetInfo", sub, context);
            bucket = context.parsed.Asset;
            if (null == bucket)
                context.parsed.Asset = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Asset (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "Asset", "acceptanceTest", base.from_string, fields);
            base.export_element (obj, "Asset", "critical", base.from_boolean, fields);
            base.export_element (obj, "Asset", "electronicAddress", base.from_string, fields);
            base.export_element (obj, "Asset", "initialCondition", base.from_string, fields);
            base.export_element (obj, "Asset", "initialLossOfLife", base.from_string, fields);
            base.export_element (obj, "Asset", "lifecycle", base.from_string, fields);
            base.export_element (obj, "Asset", "lotNumber", base.from_string, fields);
            base.export_element (obj, "Asset", "purchasePrice", base.from_string, fields);
            base.export_element (obj, "Asset", "serialNumber", base.from_string, fields);
            base.export_element (obj, "Asset", "status", base.from_string, fields);
            base.export_element (obj, "Asset", "type", base.from_string, fields);
            base.export_element (obj, "Asset", "utcNumber", base.from_string, fields);
            base.export_attribute (obj, "Asset", "FinancialInfo", fields);
            base.export_attribute (obj, "Asset", "ErpItemMaster", fields);
            base.export_attribute (obj, "Asset", "AssetContainer", fields);
            base.export_attribute (obj, "Asset", "Location", fields);
            base.export_attribute (obj, "Asset", "ErpInventory", fields);
            base.export_attribute (obj, "Asset", "AssetInfo", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Asset model by a specific manufacturer.
         *
         */
        function parse_ProductAssetModel (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_AssetModel (context, sub);
            obj.cls = "ProductAssetModel";
            base.parse_element (/<cim:ProductAssetModel.corporateStandardKind>([\s\S]*?)<\/cim:ProductAssetModel.corporateStandardKind>/g, obj, "corporateStandardKind", base.to_string, sub, context);
            base.parse_element (/<cim:ProductAssetModel.modelNumber>([\s\S]*?)<\/cim:ProductAssetModel.modelNumber>/g, obj, "modelNumber", base.to_string, sub, context);
            base.parse_element (/<cim:ProductAssetModel.modelVersion>([\s\S]*?)<\/cim:ProductAssetModel.modelVersion>/g, obj, "modelVersion", base.to_string, sub, context);
            base.parse_element (/<cim:ProductAssetModel.usageKind>([\s\S]*?)<\/cim:ProductAssetModel.usageKind>/g, obj, "usageKind", base.to_string, sub, context);
            base.parse_element (/<cim:ProductAssetModel.weightTotal>([\s\S]*?)<\/cim:ProductAssetModel.weightTotal>/g, obj, "weightTotal", base.to_string, sub, context);
            base.parse_attribute (/<cim:ProductAssetModel.GenericAssetModelOrMaterial\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GenericAssetModelOrMaterial", sub, context);
            base.parse_attribute (/<cim:ProductAssetModel.Manufacturer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Manufacturer", sub, context);
            bucket = context.parsed.ProductAssetModel;
            if (null == bucket)
                context.parsed.ProductAssetModel = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ProductAssetModel (obj, exporters, full)
        {
            var fields = exporters["AssetModel"](obj, exporters, false);

            base.export_element (obj, "ProductAssetModel", "corporateStandardKind", base.from_string, fields);
            base.export_element (obj, "ProductAssetModel", "modelNumber", base.from_string, fields);
            base.export_element (obj, "ProductAssetModel", "modelVersion", base.from_string, fields);
            base.export_element (obj, "ProductAssetModel", "usageKind", base.from_string, fields);
            base.export_element (obj, "ProductAssetModel", "weightTotal", base.from_string, fields);
            base.export_attribute (obj, "ProductAssetModel", "GenericAssetModelOrMaterial", fields);
            base.export_attribute (obj, "ProductAssetModel", "Manufacturer", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Acceptance test for assets.
         *
         */
        function parse_AcceptanceTest (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AcceptanceTest";
            base.parse_element (/<cim:AcceptanceTest.dateTime>([\s\S]*?)<\/cim:AcceptanceTest.dateTime>/g, obj, "dateTime", base.to_datetime, sub, context);
            base.parse_element (/<cim:AcceptanceTest.success>([\s\S]*?)<\/cim:AcceptanceTest.success>/g, obj, "success", base.to_boolean, sub, context);
            base.parse_element (/<cim:AcceptanceTest.type>([\s\S]*?)<\/cim:AcceptanceTest.type>/g, obj, "type", base.to_string, sub, context);
            bucket = context.parsed.AcceptanceTest;
            if (null == bucket)
                context.parsed.AcceptanceTest = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AcceptanceTest (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "AcceptanceTest", "dateTime", base.from_datetime, fields);
            base.export_element (obj, "AcceptanceTest", "success", base.from_boolean, fields);
            base.export_element (obj, "AcceptanceTest", "type", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Set of attributes of an asset, representing typical datasheet information of a physical device that can be instantiated and shared in different data exchange contexts:
         * - as attributes of an asset instance (installed or in stock)
         * - as attributes of an asset model (product by a manufacturer)
         *
         * - as attributes of a type asset (generic type of an asset as used in designs/extension planning).
         *
         */
        function parse_AssetInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "AssetInfo";
            base.parse_attribute (/<cim:AssetInfo.AssetModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetModel", sub, context);
            bucket = context.parsed.AssetInfo;
            if (null == bucket)
                context.parsed.AssetInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AssetInfo (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_attribute (obj, "AssetInfo", "AssetModel", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Kind of corporate standard.
         *
         */
        function parse_CorporateStandardKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CorporateStandardKind";
            base.parse_element (/<cim:CorporateStandardKind.standard>([\s\S]*?)<\/cim:CorporateStandardKind.standard>/g, obj, "standard", base.to_string, sub, context);
            base.parse_element (/<cim:CorporateStandardKind.experimental>([\s\S]*?)<\/cim:CorporateStandardKind.experimental>/g, obj, "experimental", base.to_string, sub, context);
            base.parse_element (/<cim:CorporateStandardKind.underEvaluation>([\s\S]*?)<\/cim:CorporateStandardKind.underEvaluation>/g, obj, "underEvaluation", base.to_string, sub, context);
            base.parse_element (/<cim:CorporateStandardKind.other>([\s\S]*?)<\/cim:CorporateStandardKind.other>/g, obj, "other", base.to_string, sub, context);
            bucket = context.parsed.CorporateStandardKind;
            if (null == bucket)
                context.parsed.CorporateStandardKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CorporateStandardKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "CorporateStandardKind", "standard", base.from_string, fields);
            base.export_element (obj, "CorporateStandardKind", "experimental", base.from_string, fields);
            base.export_element (obj, "CorporateStandardKind", "underEvaluation", base.from_string, fields);
            base.export_element (obj, "CorporateStandardKind", "other", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Organisation that maintains assets.
         *
         */
        function parse_Maintainer (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_AssetOrganisationRole (context, sub);
            obj.cls = "Maintainer";
            bucket = context.parsed.Maintainer;
            if (null == bucket)
                context.parsed.Maintainer = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Maintainer (obj, exporters, full)
        {
            var fields = exporters["AssetOrganisationRole"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Kind of procedure.
         *
         */
        function parse_ProcedureKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ProcedureKind";
            base.parse_element (/<cim:ProcedureKind.inspection>([\s\S]*?)<\/cim:ProcedureKind.inspection>/g, obj, "inspection", base.to_string, sub, context);
            base.parse_element (/<cim:ProcedureKind.diagnosis>([\s\S]*?)<\/cim:ProcedureKind.diagnosis>/g, obj, "diagnosis", base.to_string, sub, context);
            base.parse_element (/<cim:ProcedureKind.maintenance>([\s\S]*?)<\/cim:ProcedureKind.maintenance>/g, obj, "maintenance", base.to_string, sub, context);
            base.parse_element (/<cim:ProcedureKind.test>([\s\S]*?)<\/cim:ProcedureKind.test>/g, obj, "test", base.to_string, sub, context);
            base.parse_element (/<cim:ProcedureKind.other>([\s\S]*?)<\/cim:ProcedureKind.other>/g, obj, "other", base.to_string, sub, context);
            bucket = context.parsed.ProcedureKind;
            if (null == bucket)
                context.parsed.ProcedureKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ProcedureKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ProcedureKind", "inspection", base.from_string, fields);
            base.export_element (obj, "ProcedureKind", "diagnosis", base.from_string, fields);
            base.export_element (obj, "ProcedureKind", "maintenance", base.from_string, fields);
            base.export_element (obj, "ProcedureKind", "test", base.from_string, fields);
            base.export_element (obj, "ProcedureKind", "other", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Usage for an asset model.
         *
         */
        function parse_AssetModelUsageKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AssetModelUsageKind";
            base.parse_element (/<cim:AssetModelUsageKind.distributionOverhead>([\s\S]*?)<\/cim:AssetModelUsageKind.distributionOverhead>/g, obj, "distributionOverhead", base.to_string, sub, context);
            base.parse_element (/<cim:AssetModelUsageKind.distributionUnderground>([\s\S]*?)<\/cim:AssetModelUsageKind.distributionUnderground>/g, obj, "distributionUnderground", base.to_string, sub, context);
            base.parse_element (/<cim:AssetModelUsageKind.transmission>([\s\S]*?)<\/cim:AssetModelUsageKind.transmission>/g, obj, "transmission", base.to_string, sub, context);
            base.parse_element (/<cim:AssetModelUsageKind.substation>([\s\S]*?)<\/cim:AssetModelUsageKind.substation>/g, obj, "substation", base.to_string, sub, context);
            base.parse_element (/<cim:AssetModelUsageKind.streetlight>([\s\S]*?)<\/cim:AssetModelUsageKind.streetlight>/g, obj, "streetlight", base.to_string, sub, context);
            base.parse_element (/<cim:AssetModelUsageKind.customerSubstation>([\s\S]*?)<\/cim:AssetModelUsageKind.customerSubstation>/g, obj, "customerSubstation", base.to_string, sub, context);
            base.parse_element (/<cim:AssetModelUsageKind.unknown>([\s\S]*?)<\/cim:AssetModelUsageKind.unknown>/g, obj, "unknown", base.to_string, sub, context);
            base.parse_element (/<cim:AssetModelUsageKind.other>([\s\S]*?)<\/cim:AssetModelUsageKind.other>/g, obj, "other", base.to_string, sub, context);
            bucket = context.parsed.AssetModelUsageKind;
            if (null == bucket)
                context.parsed.AssetModelUsageKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AssetModelUsageKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "AssetModelUsageKind", "distributionOverhead", base.from_string, fields);
            base.export_element (obj, "AssetModelUsageKind", "distributionUnderground", base.from_string, fields);
            base.export_element (obj, "AssetModelUsageKind", "transmission", base.from_string, fields);
            base.export_element (obj, "AssetModelUsageKind", "substation", base.from_string, fields);
            base.export_element (obj, "AssetModelUsageKind", "streetlight", base.from_string, fields);
            base.export_element (obj, "AssetModelUsageKind", "customerSubstation", base.from_string, fields);
            base.export_element (obj, "AssetModelUsageKind", "unknown", base.from_string, fields);
            base.export_element (obj, "AssetModelUsageKind", "other", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Role an organisation plays with respect to asset.
         *
         */
        function parse_AssetOrganisationRole (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_OrganisationRole (context, sub);
            obj.cls = "AssetOrganisationRole";
            bucket = context.parsed.AssetOrganisationRole;
            if (null == bucket)
                context.parsed.AssetOrganisationRole = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AssetOrganisationRole (obj, exporters, full)
        {
            var fields = exporters["OrganisationRole"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Kind of seal.
         *
         */
        function parse_SealKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SealKind";
            base.parse_element (/<cim:SealKind.steel>([\s\S]*?)<\/cim:SealKind.steel>/g, obj, "steel", base.to_string, sub, context);
            base.parse_element (/<cim:SealKind.lead>([\s\S]*?)<\/cim:SealKind.lead>/g, obj, "lead", base.to_string, sub, context);
            base.parse_element (/<cim:SealKind.lock>([\s\S]*?)<\/cim:SealKind.lock>/g, obj, "lock", base.to_string, sub, context);
            base.parse_element (/<cim:SealKind.other>([\s\S]*?)<\/cim:SealKind.other>/g, obj, "other", base.to_string, sub, context);
            bucket = context.parsed.SealKind;
            if (null == bucket)
                context.parsed.SealKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SealKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "SealKind", "steel", base.from_string, fields);
            base.export_element (obj, "SealKind", "lead", base.from_string, fields);
            base.export_element (obj, "SealKind", "lock", base.from_string, fields);
            base.export_element (obj, "SealKind", "other", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Organisation that manufactures asset products.
         *
         */
        function parse_Manufacturer (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_OrganisationRole (context, sub);
            obj.cls = "Manufacturer";
            bucket = context.parsed.Manufacturer;
            if (null == bucket)
                context.parsed.Manufacturer = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Manufacturer (obj, exporters, full)
        {
            var fields = exporters["OrganisationRole"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A data set recorded each time a procedure is executed.
         *
         * Observed results are captured in associated measurement values and/or values for properties relevant to the type of procedure performed.
         *
         */
        function parse_ProcedureDataSet (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "ProcedureDataSet";
            base.parse_element (/<cim:ProcedureDataSet.completedDateTime>([\s\S]*?)<\/cim:ProcedureDataSet.completedDateTime>/g, obj, "completedDateTime", base.to_datetime, sub, context);
            base.parse_attribute (/<cim:ProcedureDataSet.Procedure\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Procedure", sub, context);
            bucket = context.parsed.ProcedureDataSet;
            if (null == bucket)
                context.parsed.ProcedureDataSet = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ProcedureDataSet (obj, exporters, full)
        {
            var fields = exporters["Document"](obj, exporters, false);

            base.export_element (obj, "ProcedureDataSet", "completedDateTime", base.from_datetime, fields);
            base.export_attribute (obj, "ProcedureDataSet", "Procedure", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Function performed by an asset.
         *
         */
        function parse_AssetFunction (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "AssetFunction";
            base.parse_element (/<cim:AssetFunction.configID>([\s\S]*?)<\/cim:AssetFunction.configID>/g, obj, "configID", base.to_string, sub, context);
            base.parse_element (/<cim:AssetFunction.firmwareID>([\s\S]*?)<\/cim:AssetFunction.firmwareID>/g, obj, "firmwareID", base.to_string, sub, context);
            base.parse_element (/<cim:AssetFunction.hardwareID>([\s\S]*?)<\/cim:AssetFunction.hardwareID>/g, obj, "hardwareID", base.to_string, sub, context);
            base.parse_element (/<cim:AssetFunction.password>([\s\S]*?)<\/cim:AssetFunction.password>/g, obj, "password", base.to_string, sub, context);
            base.parse_element (/<cim:AssetFunction.programID>([\s\S]*?)<\/cim:AssetFunction.programID>/g, obj, "programID", base.to_string, sub, context);
            bucket = context.parsed.AssetFunction;
            if (null == bucket)
                context.parsed.AssetFunction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AssetFunction (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "AssetFunction", "configID", base.from_string, fields);
            base.export_element (obj, "AssetFunction", "firmwareID", base.from_string, fields);
            base.export_element (obj, "AssetFunction", "hardwareID", base.from_string, fields);
            base.export_element (obj, "AssetFunction", "password", base.from_string, fields);
            base.export_element (obj, "AssetFunction", "programID", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Organisation that is a user of the asset.
         *
         */
        function parse_AssetUser (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_AssetOrganisationRole (context, sub);
            obj.cls = "AssetUser";
            bucket = context.parsed.AssetUser;
            if (null == bucket)
                context.parsed.AssetUser = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AssetUser (obj, exporters, full)
        {
            var fields = exporters["AssetOrganisationRole"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Asset that is aggregation of other assets such as conductors, transformers, switchgear, land, fences, buildings, equipment, vehicles, etc.
         *
         */
        function parse_AssetContainer (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Asset (context, sub);
            obj.cls = "AssetContainer";
            bucket = context.parsed.AssetContainer;
            if (null == bucket)
                context.parsed.AssetContainer = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AssetContainer (obj, exporters, full)
        {
            var fields = exporters["Asset"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Physically controls access to AssetContainers.
         *
         */
        function parse_Seal (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Seal";
            base.parse_element (/<cim:Seal.appliedDateTime>([\s\S]*?)<\/cim:Seal.appliedDateTime>/g, obj, "appliedDateTime", base.to_datetime, sub, context);
            base.parse_element (/<cim:Seal.condition>([\s\S]*?)<\/cim:Seal.condition>/g, obj, "condition", base.to_string, sub, context);
            base.parse_element (/<cim:Seal.kind>([\s\S]*?)<\/cim:Seal.kind>/g, obj, "kind", base.to_string, sub, context);
            base.parse_element (/<cim:Seal.sealNumber>([\s\S]*?)<\/cim:Seal.sealNumber>/g, obj, "sealNumber", base.to_string, sub, context);
            base.parse_attribute (/<cim:Seal.AssetContainer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetContainer", sub, context);
            bucket = context.parsed.Seal;
            if (null == bucket)
                context.parsed.Seal = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Seal (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "Seal", "appliedDateTime", base.from_datetime, fields);
            base.export_element (obj, "Seal", "condition", base.from_string, fields);
            base.export_element (obj, "Seal", "kind", base.from_string, fields);
            base.export_element (obj, "Seal", "sealNumber", base.from_string, fields);
            base.export_attribute (obj, "Seal", "AssetContainer", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Potential hazard related to the location of an asset.
         *
         * Examples are trees growing under overhead power lines, a park being located by a substation (i.e., children climb fence to recover a ball), a lake near an overhead distribution line (fishing pole/line contacting power lines), dangerous neighbour, etc.
         *
         */
        function parse_AssetLocationHazard (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Hazard (context, sub);
            obj.cls = "AssetLocationHazard";
            bucket = context.parsed.AssetLocationHazard;
            if (null == bucket)
                context.parsed.AssetLocationHazard = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AssetLocationHazard (obj, exporters, full)
        {
            var fields = exporters["Hazard"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Dates for lifecycle events of an asset.
         *
         */
        function parse_LifecycleDate (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "LifecycleDate";
            base.parse_element (/<cim:LifecycleDate.installationDate>([\s\S]*?)<\/cim:LifecycleDate.installationDate>/g, obj, "installationDate", base.to_string, sub, context);
            base.parse_element (/<cim:LifecycleDate.manufacturedDate>([\s\S]*?)<\/cim:LifecycleDate.manufacturedDate>/g, obj, "manufacturedDate", base.to_string, sub, context);
            base.parse_element (/<cim:LifecycleDate.purchaseDate>([\s\S]*?)<\/cim:LifecycleDate.purchaseDate>/g, obj, "purchaseDate", base.to_string, sub, context);
            base.parse_element (/<cim:LifecycleDate.receivedDate>([\s\S]*?)<\/cim:LifecycleDate.receivedDate>/g, obj, "receivedDate", base.to_string, sub, context);
            base.parse_element (/<cim:LifecycleDate.removalDate>([\s\S]*?)<\/cim:LifecycleDate.removalDate>/g, obj, "removalDate", base.to_string, sub, context);
            base.parse_element (/<cim:LifecycleDate.retiredDate>([\s\S]*?)<\/cim:LifecycleDate.retiredDate>/g, obj, "retiredDate", base.to_string, sub, context);
            bucket = context.parsed.LifecycleDate;
            if (null == bucket)
                context.parsed.LifecycleDate = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_LifecycleDate (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "LifecycleDate", "installationDate", base.from_string, fields);
            base.export_element (obj, "LifecycleDate", "manufacturedDate", base.from_string, fields);
            base.export_element (obj, "LifecycleDate", "purchaseDate", base.from_string, fields);
            base.export_element (obj, "LifecycleDate", "receivedDate", base.from_string, fields);
            base.export_element (obj, "LifecycleDate", "removalDate", base.from_string, fields);
            base.export_element (obj, "LifecycleDate", "retiredDate", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Model of an asset, either a product of a specific manufacturer or a generic asset model or material item.
         *
         * Datasheet characteristics are available through the associated AssetInfo subclass and can be shared with asset or power system resource instances.
         *
         */
        function parse_AssetModel (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "AssetModel";
            base.parse_attribute (/<cim:AssetModel.AssetInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetInfo", sub, context);
            bucket = context.parsed.AssetModel;
            if (null == bucket)
                context.parsed.AssetModel = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AssetModel (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_attribute (obj, "AssetModel", "AssetInfo", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Kind of seal condition.
         *
         */
        function parse_SealConditionKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SealConditionKind";
            base.parse_element (/<cim:SealConditionKind.locked>([\s\S]*?)<\/cim:SealConditionKind.locked>/g, obj, "locked", base.to_string, sub, context);
            base.parse_element (/<cim:SealConditionKind.open>([\s\S]*?)<\/cim:SealConditionKind.open>/g, obj, "open", base.to_string, sub, context);
            base.parse_element (/<cim:SealConditionKind.broken>([\s\S]*?)<\/cim:SealConditionKind.broken>/g, obj, "broken", base.to_string, sub, context);
            base.parse_element (/<cim:SealConditionKind.missing>([\s\S]*?)<\/cim:SealConditionKind.missing>/g, obj, "missing", base.to_string, sub, context);
            base.parse_element (/<cim:SealConditionKind.other>([\s\S]*?)<\/cim:SealConditionKind.other>/g, obj, "other", base.to_string, sub, context);
            bucket = context.parsed.SealConditionKind;
            if (null == bucket)
                context.parsed.SealConditionKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SealConditionKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "SealConditionKind", "locked", base.from_string, fields);
            base.export_element (obj, "SealConditionKind", "open", base.from_string, fields);
            base.export_element (obj, "SealConditionKind", "broken", base.from_string, fields);
            base.export_element (obj, "SealConditionKind", "missing", base.from_string, fields);
            base.export_element (obj, "SealConditionKind", "other", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Communication media such as fibre optic cable, power-line, telephone, etc.
         *
         */
        function parse_ComMedia (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Asset (context, sub);
            obj.cls = "ComMedia";
            bucket = context.parsed.ComMedia;
            if (null == bucket)
                context.parsed.ComMedia = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ComMedia (obj, exporters, full)
        {
            var fields = exporters["Asset"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Documented procedure for various types of work or work tasks on assets.
         *
         */
        function parse_Procedure (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "Procedure";
            base.parse_element (/<cim:Procedure.instruction>([\s\S]*?)<\/cim:Procedure.instruction>/g, obj, "instruction", base.to_string, sub, context);
            base.parse_element (/<cim:Procedure.kind>([\s\S]*?)<\/cim:Procedure.kind>/g, obj, "kind", base.to_string, sub, context);
            base.parse_element (/<cim:Procedure.sequenceNumber>([\s\S]*?)<\/cim:Procedure.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
            bucket = context.parsed.Procedure;
            if (null == bucket)
                context.parsed.Procedure = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Procedure (obj, exporters, full)
        {
            var fields = exporters["Document"](obj, exporters, false);

            base.export_element (obj, "Procedure", "instruction", base.from_string, fields);
            base.export_element (obj, "Procedure", "kind", base.from_string, fields);
            base.export_element (obj, "Procedure", "sequenceNumber", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                export_Procedure: export_Procedure,
                export_AssetFunction: export_AssetFunction,
                export_AssetUser: export_AssetUser,
                parse_CorporateStandardKind: parse_CorporateStandardKind,
                parse_Asset: parse_Asset,
                parse_AssetInfo: parse_AssetInfo,
                export_ProcedureKind: export_ProcedureKind,
                export_Seal: export_Seal,
                parse_AcceptanceTest: parse_AcceptanceTest,
                parse_AssetContainer: parse_AssetContainer,
                export_AssetContainer: export_AssetContainer,
                parse_Seal: parse_Seal,
                parse_AssetFunction: parse_AssetFunction,
                parse_AssetOwner: parse_AssetOwner,
                parse_Procedure: parse_Procedure,
                parse_AssetLocationHazard: parse_AssetLocationHazard,
                export_AssetLocationHazard: export_AssetLocationHazard,
                parse_AssetUser: parse_AssetUser,
                export_CorporateStandardKind: export_CorporateStandardKind,
                export_LifecycleDate: export_LifecycleDate,
                export_AssetOwner: export_AssetOwner,
                export_SealConditionKind: export_SealConditionKind,
                export_AssetInfo: export_AssetInfo,
                export_AssetModel: export_AssetModel,
                export_Asset: export_Asset,
                parse_ProductAssetModel: parse_ProductAssetModel,
                export_ComMedia: export_ComMedia,
                parse_SealConditionKind: parse_SealConditionKind,
                parse_AssetModelUsageKind: parse_AssetModelUsageKind,
                parse_Maintainer: parse_Maintainer,
                export_ProcedureDataSet: export_ProcedureDataSet,
                parse_ProcedureKind: parse_ProcedureKind,
                export_SealKind: export_SealKind,
                parse_SealKind: parse_SealKind,
                parse_LifecycleDate: parse_LifecycleDate,
                parse_AssetModel: parse_AssetModel,
                parse_Manufacturer: parse_Manufacturer,
                export_ProductAssetModel: export_ProductAssetModel,
                parse_ComMedia: parse_ComMedia,
                export_AssetOrganisationRole: export_AssetOrganisationRole,
                parse_ProcedureDataSet: parse_ProcedureDataSet,
                export_Maintainer: export_Maintainer,
                parse_AssetOrganisationRole: parse_AssetOrganisationRole,
                export_AcceptanceTest: export_AcceptanceTest,
                export_AssetModelUsageKind: export_AssetModelUsageKind,
                export_Manufacturer: export_Manufacturer
            }
        );
    }
);