/**
 * @fileOverview Package Assets CIM model.
 * @name model/assets
 * @author Derrick Oswald
 * @version 1.0
 */
define
(
    ["model/base", "model/core"],
    /**
     * @summary Package Assets CIM model.
     * @description
     * @name model/assets
     * @exports model/assets
     * @version 1.0
     */
    function (base, core)
    {
        /*
         * Package Assets
         */

        /**
         * Parse an Asset.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Asset - the list of Asset elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/protection
         */
        function parse_Asset (context, sub)
        {
            var obj;
            var assets;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "Asset";
            obj.critical = base.parse_element (/<cim:Asset.critical>([\s\S]*?)<\/cim:Asset.critical>/g, sub, context, true);
            obj.initialCondition = base.parse_element (/<cim:Asset.initialCondition>([\s\S]*?)<\/cim:Asset.initialCondition>/g, sub, context, true);
            obj.initialLossOfLife = base.parse_element (/<cim:Asset.initialLossOfLife>([\s\S]*?)<\/cim:Asset.initialLossOfLife>/g, sub, context, true);
            obj.lotNumber = base.parse_element (/<cim:Asset.lotNumber>([\s\S]*?)<\/cim:Asset.lotNumber>/g, sub, context, true);
            obj.purchasePrice = base.parse_element (/<cim:Asset.purchasePrice>([\s\S]*?)<\/cim:Asset.purchasePrice>/g, sub, context, true);
            obj.serialNumber = base.parse_element (/<cim:Asset.serialNumber>([\s\S]*?)<\/cim:Asset.serialNumber>/g, sub, context, true);
            obj.type = base.parse_element (/<cim:Asset.type>([\s\S]*?)<\/cim:Asset.type>/g, sub, context, true);
            obj.utcNumber = base.parse_element (/<cim:Asset.utcNumber>([\s\S]*?)<\/cim:Asset.utcNumber>/g, sub, context, true);
            obj.AssetContainer = base.parse_attribute (/<cim:Asset.AssetContainer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.AssetInfo = base.parse_attribute (/<cim:Asset.AssetInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ErpInventory = base.parse_attribute (/<cim:Asset.ErpInventory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ErpItemMaster = base.parse_attribute (/<cim:Asset.ErpItemMaster\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.FinancialInfo = base.parse_attribute (/<cim:Asset.FinancialInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.Location = base.parse_attribute (/<cim:Asset.Location\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.acceptanceTest = base.parse_attribute (/<cim:Asset.acceptanceTest\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.electronicAddress = base.parse_attribute (/<cim:Asset.electronicAddress\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.lifecycle = base.parse_attribute (/<cim:Asset.lifecycle\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.status = base.parse_attribute (/<cim:Asset.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            assets = context.parsed.Asset;
            if (null == assets)
                context.parsed.Asset = assets = {};
            assets[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse an AssetContainer.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.AssetContainer - the list of AssetContainer elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/protection
         */
        function parse_AssetContainer (context, sub)
        {
            var obj;
            var containers;

            obj = parse_Asset (context, sub);
            obj.cls = "AssetContainer";
            containers = context.parsed.AssetContainer;
            if (null == containers)
                context.parsed.AssetContainer = containers = {};
            containers[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse an AssetFunction.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.AssetFunction - the list of AssetFunction elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/protection
         */
        function parse_AssetFunction (context, sub)
        {
            var obj;
            var functions;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "AssetFunction";
            obj.configID = base.parse_element (/<cim:AssetFunction.configID>([\s\S]*?)<\/cim:AssetFunction.configID>/g, sub, context, true);
            obj.firmwareID = base.parse_element (/<cim:AssetFunction.firmwareID>([\s\S]*?)<\/cim:AssetFunction.firmwareID>/g, sub, context, true);
            obj.hardwareID = base.parse_element (/<cim:AssetFunction.hardwareID>([\s\S]*?)<\/cim:AssetFunction.hardwareID>/g, sub, context, true);
            obj.password = base.parse_element (/<cim:AssetFunction.password>([\s\S]*?)<\/cim:AssetFunction.password>/g, sub, context, true);
            obj.programID = base.parse_element (/<cim:AssetFunction.programID>([\s\S]*?)<\/cim:AssetFunction.programID>/g, sub, context, true);
            functions = context.parsed.AssetFunction;
            if (null == functions)
                context.parsed.AssetFunction = functions = {};
            functions[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse an AssetInfo.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.AssetInfo - the list of AssetInfo elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/protection
         */
        function parse_AssetInfo (context, sub)
        {
            var obj;
            var infos;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "AssetInfo";
            obj.AssetModel = base.parse_attribute (/<cim:AssetInfo.AssetModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            infos = context.parsed.AssetInfo;
            if (null == infos)
                context.parsed.AssetInfo = infos = {};
            infos[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_Asset: parse_Asset,
                parse_AssetContainer: parse_AssetContainer,
                parse_AssetFunction: parse_AssetFunction,
                parse_AssetInfo: parse_AssetInfo
            }
        );
    }
);
