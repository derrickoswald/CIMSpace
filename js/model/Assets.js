define
(
    ["model/base", "model/Common", "model/Core"],
    /**
     * This package contains the core information classes that support asset management applications that deal with the physical and lifecycle aspects of various network resources (as opposed to power system resource models defined in IEC61970::Wires package, which support network applications).
     */
    function (base, Common, Core)
    {

        /**
         * Owner of the asset.
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

        /**
         * Tangible resource of the utility, including power system equipment, various end devices, cabinets, buildings, etc.
         * For electrical network equipment, the role of the asset is defined through PowerSystemResource and its subclasses, defined mainly in the Wires model (refer to IEC61970-301 and model package IEC61970::Wires). Asset description places emphasis on the physical characteristics of the equipment fulfilling that role.
         */
        function parse_Asset (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Asset";
            /**
             * Information on acceptance test.
             */
            obj["acceptanceTest"] = base.parse_element (/<cim:Asset.acceptanceTest>([\s\S]*?)<\/cim:Asset.acceptanceTest>/g, sub, context, true);
            /**
             * True if asset is considered critical for some reason (for example, a pole with critical attachments).
             */
            obj["critical"] = base.to_boolean (base.parse_element (/<cim:Asset.critical>([\s\S]*?)<\/cim:Asset.critical>/g, sub, context, true));
            /**
             * Electronic address.
             */
            obj["electronicAddress"] = base.parse_element (/<cim:Asset.electronicAddress>([\s\S]*?)<\/cim:Asset.electronicAddress>/g, sub, context, true);
            /**
             * Condition of asset in inventory or at time of installation.
             * Examples include new, rebuilt, overhaul required, other. Refer to inspection data for information on the most current condition of the asset.
             */
            obj["initialCondition"] = base.parse_element (/<cim:Asset.initialCondition>([\s\S]*?)<\/cim:Asset.initialCondition>/g, sub, context, true);
            /**
             * Whenever an asset is reconditioned, percentage of expected life for the asset when it was new; zero for new devices.
             */
            obj["initialLossOfLife"] = base.parse_element (/<cim:Asset.initialLossOfLife>([\s\S]*?)<\/cim:Asset.initialLossOfLife>/g, sub, context, true);
            /**
             * Lifecycle dates for this asset.
             */
            obj["lifecycle"] = base.parse_element (/<cim:Asset.lifecycle>([\s\S]*?)<\/cim:Asset.lifecycle>/g, sub, context, true);
            /**
             * Lot number for this asset.
             * Even for the same model and version number, many assets are manufactured in lots.
             */
            obj["lotNumber"] = base.parse_element (/<cim:Asset.lotNumber>([\s\S]*?)<\/cim:Asset.lotNumber>/g, sub, context, true);
            /**
             * Purchase price of asset.
             */
            obj["purchasePrice"] = base.parse_element (/<cim:Asset.purchasePrice>([\s\S]*?)<\/cim:Asset.purchasePrice>/g, sub, context, true);
            /**
             * Serial number of this asset.
             */
            obj["serialNumber"] = base.parse_element (/<cim:Asset.serialNumber>([\s\S]*?)<\/cim:Asset.serialNumber>/g, sub, context, true);
            /**
             * Status of this asset.
             */
            obj["status"] = base.parse_element (/<cim:Asset.status>([\s\S]*?)<\/cim:Asset.status>/g, sub, context, true);
            /**
             * Utility-specific classification of Asset and its subtypes, according to their corporate standards, practices, and existing IT systems (e.g., for management of assets, maintenance, work, outage, customers, etc.).
             */
            obj["type"] = base.parse_element (/<cim:Asset.type>([\s\S]*?)<\/cim:Asset.type>/g, sub, context, true);
            /**
             * Uniquely tracked commodity (UTC) number.
             */
            obj["utcNumber"] = base.parse_element (/<cim:Asset.utcNumber>([\s\S]*?)<\/cim:Asset.utcNumber>/g, sub, context, true);
            obj["FinancialInfo"] = base.parse_attribute (/<cim:Asset.FinancialInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["ErpItemMaster"] = base.parse_attribute (/<cim:Asset.ErpItemMaster\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Container of this asset.
             */
            obj["AssetContainer"] = base.parse_attribute (/<cim:Asset.AssetContainer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Location of this asset.
             */
            obj["Location"] = base.parse_attribute (/<cim:Asset.Location\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["ErpInventory"] = base.parse_attribute (/<cim:Asset.ErpInventory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Data applicable to this asset.
             */
            obj["AssetInfo"] = base.parse_attribute (/<cim:Asset.AssetInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.Asset;
            if (null == bucket)
                context.parsed.Asset = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Asset model by a specific manufacturer.
         */
        function parse_ProductAssetModel (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_AssetModel (context, sub);
            obj.cls = "ProductAssetModel";
            /**
             * Kind of corporate standard for this asset model.
             */
            obj["corporateStandardKind"] = base.parse_element (/<cim:ProductAssetModel.corporateStandardKind>([\s\S]*?)<\/cim:ProductAssetModel.corporateStandardKind>/g, sub, context, true);
            /**
             * Manufacturer's model number.
             */
            obj["modelNumber"] = base.parse_element (/<cim:ProductAssetModel.modelNumber>([\s\S]*?)<\/cim:ProductAssetModel.modelNumber>/g, sub, context, true);
            /**
             * Version number for product model, which indicates vintage of the product.
             */
            obj["modelVersion"] = base.parse_element (/<cim:ProductAssetModel.modelVersion>([\s\S]*?)<\/cim:ProductAssetModel.modelVersion>/g, sub, context, true);
            /**
             * Intended usage for this asset model.
             */
            obj["usageKind"] = base.parse_element (/<cim:ProductAssetModel.usageKind>([\s\S]*?)<\/cim:ProductAssetModel.usageKind>/g, sub, context, true);
            /**
             * Total manufactured weight of asset.
             */
            obj["weightTotal"] = base.parse_element (/<cim:ProductAssetModel.weightTotal>([\s\S]*?)<\/cim:ProductAssetModel.weightTotal>/g, sub, context, true);
            /**
             * Generic asset model or material satisified by this product asset model.
             */
            obj["GenericAssetModelOrMaterial"] = base.parse_attribute (/<cim:ProductAssetModel.GenericAssetModelOrMaterial\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Manufacturer of this asset model.
             */
            obj["Manufacturer"] = base.parse_attribute (/<cim:ProductAssetModel.Manufacturer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ProductAssetModel;
            if (null == bucket)
                context.parsed.ProductAssetModel = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Acceptance test for assets.
         */
        function parse_AcceptanceTest (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AcceptanceTest";
            /**
             * Date and time the asset was last tested using the 'type' of test and yielding the current status in 'success' attribute.
             */
            obj["dateTime"] = base.to_datetime (base.parse_element (/<cim:AcceptanceTest.dateTime>([\s\S]*?)<\/cim:AcceptanceTest.dateTime>/g, sub, context, true));
            /**
             * True if asset has passed acceptance test and may be placed in or is in service.
             * It is set to false if asset is removed from service and is required to be tested again before being placed back in service, possibly in a new location. Since asset may go through multiple tests during its lifecycle, the date of each acceptance test may be recorded in 'Asset.ActivityRecord.status.dateTime'.
             */
            obj["success"] = base.to_boolean (base.parse_element (/<cim:AcceptanceTest.success>([\s\S]*?)<\/cim:AcceptanceTest.success>/g, sub, context, true));
            /**
             * Type of test or group of tests that was conducted on 'dateTime'.
             */
            obj["type"] = base.parse_element (/<cim:AcceptanceTest.type>([\s\S]*?)<\/cim:AcceptanceTest.type>/g, sub, context, true);
            bucket = context.parsed.AcceptanceTest;
            if (null == bucket)
                context.parsed.AcceptanceTest = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Set of attributes of an asset, representing typical datasheet information of a physical device that can be instantiated and shared in different data exchange contexts:
        - as attributes of an asset instance (installed or in stock)
        - as attributes of an asset model (product by a manufacturer)
         * - as attributes of a type asset (generic type of an asset as used in designs/extension planning).
         */
        function parse_AssetInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "AssetInfo";
            /**
             * Asset model described by this data.
             */
            obj["AssetModel"] = base.parse_attribute (/<cim:AssetInfo.AssetModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.AssetInfo;
            if (null == bucket)
                context.parsed.AssetInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of corporate standard.
         */
        function parse_CorporateStandardKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CorporateStandardKind";
            /**
             * Asset model is used as corporate standard.
             */
            obj["standard"] = base.parse_element (/<cim:CorporateStandardKind.standard>([\s\S]*?)<\/cim:CorporateStandardKind.standard>/g, sub, context, true);
            /**
             * Asset model is used experimentally.
             */
            obj["experimental"] = base.parse_element (/<cim:CorporateStandardKind.experimental>([\s\S]*?)<\/cim:CorporateStandardKind.experimental>/g, sub, context, true);
            /**
             * Asset model usage is under evaluation.
             */
            obj["underEvaluation"] = base.parse_element (/<cim:CorporateStandardKind.underEvaluation>([\s\S]*?)<\/cim:CorporateStandardKind.underEvaluation>/g, sub, context, true);
            /**
             * Other kind of corporate standard for the asset model.
             */
            obj["other"] = base.parse_element (/<cim:CorporateStandardKind.other>([\s\S]*?)<\/cim:CorporateStandardKind.other>/g, sub, context, true);
            bucket = context.parsed.CorporateStandardKind;
            if (null == bucket)
                context.parsed.CorporateStandardKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Organisation that maintains assets.
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

        /**
         * Kind of procedure.
         */
        function parse_ProcedureKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ProcedureKind";
            obj["inspection"] = base.parse_element (/<cim:ProcedureKind.inspection>([\s\S]*?)<\/cim:ProcedureKind.inspection>/g, sub, context, true);
            obj["diagnosis"] = base.parse_element (/<cim:ProcedureKind.diagnosis>([\s\S]*?)<\/cim:ProcedureKind.diagnosis>/g, sub, context, true);
            obj["maintenance"] = base.parse_element (/<cim:ProcedureKind.maintenance>([\s\S]*?)<\/cim:ProcedureKind.maintenance>/g, sub, context, true);
            obj["test"] = base.parse_element (/<cim:ProcedureKind.test>([\s\S]*?)<\/cim:ProcedureKind.test>/g, sub, context, true);
            obj["other"] = base.parse_element (/<cim:ProcedureKind.other>([\s\S]*?)<\/cim:ProcedureKind.other>/g, sub, context, true);
            bucket = context.parsed.ProcedureKind;
            if (null == bucket)
                context.parsed.ProcedureKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Usage for an asset model.
         */
        function parse_AssetModelUsageKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AssetModelUsageKind";
            /**
             * Asset model is intended for use in distribution overhead network.
             */
            obj["distributionOverhead"] = base.parse_element (/<cim:AssetModelUsageKind.distributionOverhead>([\s\S]*?)<\/cim:AssetModelUsageKind.distributionOverhead>/g, sub, context, true);
            /**
             * Asset model is intended for use in underground distribution network.
             */
            obj["distributionUnderground"] = base.parse_element (/<cim:AssetModelUsageKind.distributionUnderground>([\s\S]*?)<\/cim:AssetModelUsageKind.distributionUnderground>/g, sub, context, true);
            /**
             * Asset model is intended for use in transmission network.
             */
            obj["transmission"] = base.parse_element (/<cim:AssetModelUsageKind.transmission>([\s\S]*?)<\/cim:AssetModelUsageKind.transmission>/g, sub, context, true);
            /**
             * Asset model is intended for use in substation.
             */
            obj["substation"] = base.parse_element (/<cim:AssetModelUsageKind.substation>([\s\S]*?)<\/cim:AssetModelUsageKind.substation>/g, sub, context, true);
            /**
             * Asset model is intended for use as streetlight.
             */
            obj["streetlight"] = base.parse_element (/<cim:AssetModelUsageKind.streetlight>([\s\S]*?)<\/cim:AssetModelUsageKind.streetlight>/g, sub, context, true);
            /**
             * Asset model is intended for use in customer substation.
             */
            obj["customerSubstation"] = base.parse_element (/<cim:AssetModelUsageKind.customerSubstation>([\s\S]*?)<\/cim:AssetModelUsageKind.customerSubstation>/g, sub, context, true);
            /**
             * Usage of the asset model is unknown.
             */
            obj["unknown"] = base.parse_element (/<cim:AssetModelUsageKind.unknown>([\s\S]*?)<\/cim:AssetModelUsageKind.unknown>/g, sub, context, true);
            /**
             * Other kind of asset model usage.
             */
            obj["other"] = base.parse_element (/<cim:AssetModelUsageKind.other>([\s\S]*?)<\/cim:AssetModelUsageKind.other>/g, sub, context, true);
            bucket = context.parsed.AssetModelUsageKind;
            if (null == bucket)
                context.parsed.AssetModelUsageKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Role an organisation plays with respect to asset.
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

        /**
         * Kind of seal.
         */
        function parse_SealKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SealKind";
            /**
             * Steel seal.
             */
            obj["steel"] = base.parse_element (/<cim:SealKind.steel>([\s\S]*?)<\/cim:SealKind.steel>/g, sub, context, true);
            /**
             * Lead seal.
             */
            obj["lead"] = base.parse_element (/<cim:SealKind.lead>([\s\S]*?)<\/cim:SealKind.lead>/g, sub, context, true);
            /**
             * Lock seal.
             */
            obj["lock"] = base.parse_element (/<cim:SealKind.lock>([\s\S]*?)<\/cim:SealKind.lock>/g, sub, context, true);
            /**
             * Other kind of seal.
             */
            obj["other"] = base.parse_element (/<cim:SealKind.other>([\s\S]*?)<\/cim:SealKind.other>/g, sub, context, true);
            bucket = context.parsed.SealKind;
            if (null == bucket)
                context.parsed.SealKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Organisation that manufactures asset products.
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

        /**
         * A data set recorded each time a procedure is executed.
         * Observed results are captured in associated measurement values and/or values for properties relevant to the type of procedure performed.
         */
        function parse_ProcedureDataSet (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "ProcedureDataSet";
            /**
             * Date and time procedure was completed.
             */
            obj["completedDateTime"] = base.to_datetime (base.parse_element (/<cim:ProcedureDataSet.completedDateTime>([\s\S]*?)<\/cim:ProcedureDataSet.completedDateTime>/g, sub, context, true));
            /**
             * Procedure capturing this data set.
             */
            obj["Procedure"] = base.parse_attribute (/<cim:ProcedureDataSet.Procedure\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ProcedureDataSet;
            if (null == bucket)
                context.parsed.ProcedureDataSet = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Function performed by an asset.
         */
        function parse_AssetFunction (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "AssetFunction";
            /**
             * Configuration specified for this function.
             */
            obj["configID"] = base.parse_element (/<cim:AssetFunction.configID>([\s\S]*?)<\/cim:AssetFunction.configID>/g, sub, context, true);
            /**
             * Firmware version.
             */
            obj["firmwareID"] = base.parse_element (/<cim:AssetFunction.firmwareID>([\s\S]*?)<\/cim:AssetFunction.firmwareID>/g, sub, context, true);
            /**
             * Hardware version.
             */
            obj["hardwareID"] = base.parse_element (/<cim:AssetFunction.hardwareID>([\s\S]*?)<\/cim:AssetFunction.hardwareID>/g, sub, context, true);
            /**
             * Password needed to access this function.
             */
            obj["password"] = base.parse_element (/<cim:AssetFunction.password>([\s\S]*?)<\/cim:AssetFunction.password>/g, sub, context, true);
            /**
             * Name of program.
             */
            obj["programID"] = base.parse_element (/<cim:AssetFunction.programID>([\s\S]*?)<\/cim:AssetFunction.programID>/g, sub, context, true);
            bucket = context.parsed.AssetFunction;
            if (null == bucket)
                context.parsed.AssetFunction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Organisation that is a user of the asset.
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

        /**
         * Asset that is aggregation of other assets such as conductors, transformers, switchgear, land, fences, buildings, equipment, vehicles, etc.
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

        /**
         * Physically controls access to AssetContainers.
         */
        function parse_Seal (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Seal";
            /**
             * Date and time this seal has been applied.
             */
            obj["appliedDateTime"] = base.to_datetime (base.parse_element (/<cim:Seal.appliedDateTime>([\s\S]*?)<\/cim:Seal.appliedDateTime>/g, sub, context, true));
            /**
             * Condition of seal.
             */
            obj["condition"] = base.parse_element (/<cim:Seal.condition>([\s\S]*?)<\/cim:Seal.condition>/g, sub, context, true);
            /**
             * Kind of seal.
             */
            obj["kind"] = base.parse_element (/<cim:Seal.kind>([\s\S]*?)<\/cim:Seal.kind>/g, sub, context, true);
            /**
             * (reserved word) Seal number.
             */
            obj["sealNumber"] = base.parse_element (/<cim:Seal.sealNumber>([\s\S]*?)<\/cim:Seal.sealNumber>/g, sub, context, true);
            /**
             * Asset container to which this seal is applied.
             */
            obj["AssetContainer"] = base.parse_attribute (/<cim:Seal.AssetContainer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.Seal;
            if (null == bucket)
                context.parsed.Seal = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Potential hazard related to the location of an asset.
         * Examples are trees growing under overhead power lines, a park being located by a substation (i.e., children climb fence to recover a ball), a lake near an overhead distribution line (fishing pole/line contacting power lines), dangerous neighbour, etc.
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

        /**
         * Dates for lifecycle events of an asset.
         */
        function parse_LifecycleDate (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "LifecycleDate";
            /**
             * (if applicable) Date current installation was completed, which may not be the same as the in-service date.
             * Asset may have been installed at other locations previously. Ignored if asset is (1) not currently installed (e.g., stored in a depot) or (2) not intended to be installed (e.g., vehicle, tool).
             */
            obj["installationDate"] = base.parse_element (/<cim:LifecycleDate.installationDate>([\s\S]*?)<\/cim:LifecycleDate.installationDate>/g, sub, context, true);
            /**
             * Date the asset was manufactured.
             */
            obj["manufacturedDate"] = base.parse_element (/<cim:LifecycleDate.manufacturedDate>([\s\S]*?)<\/cim:LifecycleDate.manufacturedDate>/g, sub, context, true);
            /**
             * Date the asset was purchased.
             * Note that even though an asset may have been purchased, it may not have been received into inventory at the time of purchase.
             */
            obj["purchaseDate"] = base.parse_element (/<cim:LifecycleDate.purchaseDate>([\s\S]*?)<\/cim:LifecycleDate.purchaseDate>/g, sub, context, true);
            /**
             * Date the asset was received and first placed into inventory.
             */
            obj["receivedDate"] = base.parse_element (/<cim:LifecycleDate.receivedDate>([\s\S]*?)<\/cim:LifecycleDate.receivedDate>/g, sub, context, true);
            /**
             * (if applicable) Date when the asset was last removed from service.
             * Ignored if (1) not intended to be in service, or (2) currently in service.
             */
            obj["removalDate"] = base.parse_element (/<cim:LifecycleDate.removalDate>([\s\S]*?)<\/cim:LifecycleDate.removalDate>/g, sub, context, true);
            /**
             * (if applicable) Date the asset is permanently retired from service and may be scheduled for disposal.
             * Ignored if asset is (1) currently in service, or (2) permanently removed from service.
             */
            obj["retiredDate"] = base.parse_element (/<cim:LifecycleDate.retiredDate>([\s\S]*?)<\/cim:LifecycleDate.retiredDate>/g, sub, context, true);
            bucket = context.parsed.LifecycleDate;
            if (null == bucket)
                context.parsed.LifecycleDate = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model of an asset, either a product of a specific manufacturer or a generic asset model or material item.
         * Datasheet characteristics are available through the associated AssetInfo subclass and can be shared with asset or power system resource instances.
         */
        function parse_AssetModel (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "AssetModel";
            /**
             * Data applicable to this asset model.
             */
            obj["AssetInfo"] = base.parse_attribute (/<cim:AssetModel.AssetInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.AssetModel;
            if (null == bucket)
                context.parsed.AssetModel = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of seal condition.
         */
        function parse_SealConditionKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SealConditionKind";
            /**
             * Seal is locked.
             */
            obj["locked"] = base.parse_element (/<cim:SealConditionKind.locked>([\s\S]*?)<\/cim:SealConditionKind.locked>/g, sub, context, true);
            /**
             * Seal is open.
             */
            obj["open"] = base.parse_element (/<cim:SealConditionKind.open>([\s\S]*?)<\/cim:SealConditionKind.open>/g, sub, context, true);
            /**
             * Seal is broken.
             */
            obj["broken"] = base.parse_element (/<cim:SealConditionKind.broken>([\s\S]*?)<\/cim:SealConditionKind.broken>/g, sub, context, true);
            /**
             * Seal is missing.
             */
            obj["missing"] = base.parse_element (/<cim:SealConditionKind.missing>([\s\S]*?)<\/cim:SealConditionKind.missing>/g, sub, context, true);
            /**
             * Other kind of seal condition.
             */
            obj["other"] = base.parse_element (/<cim:SealConditionKind.other>([\s\S]*?)<\/cim:SealConditionKind.other>/g, sub, context, true);
            bucket = context.parsed.SealConditionKind;
            if (null == bucket)
                context.parsed.SealConditionKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Communication media such as fibre optic cable, power-line, telephone, etc.
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

        /**
         * Documented procedure for various types of work or work tasks on assets.
         */
        function parse_Procedure (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "Procedure";
            /**
             * Textual description of this procedure.
             */
            obj["instruction"] = base.parse_element (/<cim:Procedure.instruction>([\s\S]*?)<\/cim:Procedure.instruction>/g, sub, context, true);
            /**
             * Kind of procedure.
             */
            obj["kind"] = base.parse_element (/<cim:Procedure.kind>([\s\S]*?)<\/cim:Procedure.kind>/g, sub, context, true);
            /**
             * Sequence number in a sequence of procedures being performed.
             */
            obj["sequenceNumber"] = base.parse_element (/<cim:Procedure.sequenceNumber>([\s\S]*?)<\/cim:Procedure.sequenceNumber>/g, sub, context, true);
            bucket = context.parsed.Procedure;
            if (null == bucket)
                context.parsed.Procedure = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_ProductAssetModel: parse_ProductAssetModel,
                parse_SealConditionKind: parse_SealConditionKind,
                parse_AssetModelUsageKind: parse_AssetModelUsageKind,
                parse_Maintainer: parse_Maintainer,
                parse_CorporateStandardKind: parse_CorporateStandardKind,
                parse_Asset: parse_Asset,
                parse_AssetInfo: parse_AssetInfo,
                parse_ProcedureKind: parse_ProcedureKind,
                parse_AssetModel: parse_AssetModel,
                parse_SealKind: parse_SealKind,
                parse_AcceptanceTest: parse_AcceptanceTest,
                parse_LifecycleDate: parse_LifecycleDate,
                parse_AssetContainer: parse_AssetContainer,
                parse_Manufacturer: parse_Manufacturer,
                parse_Seal: parse_Seal,
                parse_AssetFunction: parse_AssetFunction,
                parse_AssetOwner: parse_AssetOwner,
                parse_Procedure: parse_Procedure,
                parse_ComMedia: parse_ComMedia,
                parse_AssetLocationHazard: parse_AssetLocationHazard,
                parse_ProcedureDataSet: parse_ProcedureDataSet,
                parse_AssetUser: parse_AssetUser,
                parse_AssetOrganisationRole: parse_AssetOrganisationRole
            }
        );
    }
);