/**
 * @fileOverview Package assetInfo CIM model.
 * @name model/assetInfo
 * @author Derrick Oswald
 * @version 1.0
 */
define
(
    ["model/base", "model/assets"],
    /**
     * @summary Package AssetInfo CIM model.
     * @description
     * @name model/assetInfo
     * @exports model/assetInfo
     * @version 1.0
     */
    function (base, assets)
    {
        /*
         * Package AssetInfo
         */

        /**
         * Parse a BusbarSectionInfo.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.BusbarSectionInfo - the list of BusbarSectionInfo elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/infAssets
         */
        function parse_BusbarSectionInfo (context, sub)
        {
            var obj;
            var infos;

            obj = assets.parse_AssetInfo (context, sub);
            obj.cls = "BusbarSectionInfo";
            obj.ratedCurrent = base.parse_element (/<cim:BusbarSectionInfo.ratedCurrent>([\s\S]*?)<\/cim:BusbarSectionInfo.ratedCurrent>/g, sub, context, true);
            obj.ratedVoltage = base.parse_element (/<cim:BusbarSectionInfo.ratedVoltage>([\s\S]*?)<\/cim:BusbarSectionInfo.ratedVoltage>/g, sub, context, true);
            infos = context.parsed.BusbarSectionInfo;
            if (null == infos)
                context.parsed.BusbarSectionInfo = infos = {};
            infos[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a OverheadWireInfo.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.OverheadWireInfo - the list of OverheadWireInfo elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/infAssets
         */
        function parse_OverheadWireInfo (context, sub)
        {
            var obj;
            var infos;

            obj = parse_WireInfo (context, sub);
            obj.cls = "OverheadWireInfo";
            infos = context.parsed.OverheadWireInfo;
            if (null == infos)
                context.parsed.OverheadWireInfo = infos = {};
            infos[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a PowerTransformerInfo.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.PowerTransformerInfo - the list of PowerTransformerInfo elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/infAssets
         */
        function parse_PowerTransformerInfo (context, sub)
        {
            var obj;
            var infos;

            obj = assets.parse_AssetInfo (context, sub);
            obj.cls = "PowerTransformerInfo";
            infos = context.parsed.PowerTransformerInfo;
            if (null == infos)
                context.parsed.PowerTransformerInfo = infos = {};
            infos[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a SwitchInfo.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.SwitchInfo - the list of SwitchInfo elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/infAssets
         */
        function parse_SwitchInfo (context, sub)
        {
            var obj;
            var infos;

            obj = assets.parse_AssetInfo (context, sub);
            obj.cls = "SwitchInfo";
            obj.breakingCapacity = base.parse_element (/<cim:SwitchInfo.breakingCapacity>([\s\S]*?)<\/cim:SwitchInfo.breakingCapacity>/g, sub, context, true);
            obj.isSinglePhase = base.parse_element (/<cim:SwitchInfo.isSinglePhase>([\s\S]*?)<\/cim:SwitchInfo.isSinglePhase>/g, sub, context, true);
            obj.isUnganged = base.parse_element (/<cim:SwitchInfo.isUnganged>([\s\S]*?)<\/cim:SwitchInfo.isUnganged>/g, sub, context, true);
            obj.ratedCurrent = base.parse_element (/<cim:SwitchInfo.ratedCurrent>([\s\S]*?)<\/cim:SwitchInfo.ratedCurrent>/g, sub, context, true);
            obj.ratedVoltage = base.parse_element (/<cim:SwitchInfo.ratedVoltage>([\s\S]*?)<\/cim:SwitchInfo.ratedVoltage>/g, sub, context, true);
            if (null != obj.isSinglePhase) obj.isSinglePhase = base.to_boolean (obj.isSinglePhase);
            if (null != obj.isUnganged) obj.isUnganged = base.to_boolean (obj.isUnganged);
            infos = context.parsed.SwitchInfo;
            if (null == infos)
                context.parsed.SwitchInfo = infos = {};
            infos[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a WireInfo.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.WireInfo - the list of WireInfo elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/infAssets
         */
        function parse_WireInfo (context, sub)
        {
            var obj;
            var infos;

            obj = assets.parse_AssetInfo (context, sub);
            obj.cls = "WireInfo";
            obj.coreRadius = base.parse_element (/<cim:WireInfo.coreRadius>([\s\S]*?)<\/cim:WireInfo.coreRadius>/g, sub, context, true);
            obj.coreStrandCount = base.parse_element (/<cim:WireInfo.coreStrandCount>([\s\S]*?)<\/cim:WireInfo.coreStrandCount>/g, sub, context, true);
            obj.gmr = base.parse_element (/<cim:WireInfo.gmr>([\s\S]*?)<\/cim:WireInfo.gmr>/g, sub, context, true);
            obj.insulated = base.parse_element (/<cim:WireInfo.insulated>([\s\S]*?)<\/cim:WireInfo.insulated>/g, sub, context, true);
            obj.insulationMaterial = base.parse_attribute (/<cim:WireInfo.insulationMaterial\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.insulationThickness = base.parse_element (/<cim:WireInfo.insulationThickness>([\s\S]*?)<\/cim:WireInfo.insulationThickness>/g, sub, context, true);
            obj.material = base.parse_attribute (/<cim:WireInfo.material\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.rAC25 = base.parse_element (/<cim:WireInfo.rAC25>([\s\S]*?)<\/cim:WireInfo.rAC25>/g, sub, context, true);
            obj.rAC50 = base.parse_element (/<cim:WireInfo.rAC50>([\s\S]*?)<\/cim:WireInfo.rAC50>/g, sub, context, true);
            obj.rAC75 = base.parse_element (/<cim:WireInfo.rAC75>([\s\S]*?)<\/cim:WireInfo.rAC75>/g, sub, context, true);
            obj.rDC20 = base.parse_element (/<cim:WireInfo.rDC20>([\s\S]*?)<\/cim:WireInfo.rDC20>/g, sub, context, true);
            obj.radius = base.parse_element (/<cim:WireInfo.radius>([\s\S]*?)<\/cim:WireInfo.radius>/g, sub, context, true);
            obj.ratedCurrent = base.parse_element (/<cim:WireInfo.ratedCurrent>([\s\S]*?)<\/cim:WireInfo.ratedCurrent>/g, sub, context, true);
            obj.sizeDescription = base.parse_element (/<cim:WireInfo.sizeDescription>([\s\S]*?)<\/cim:WireInfo.sizeDescription>/g, sub, context, true);
            obj.strandCount = base.parse_element (/<cim:WireInfo.strandCount>([\s\S]*?)<\/cim:WireInfo.strandCount>/g, sub, context, true);
            if (null != obj.insulated) obj.insulated = base.to_boolean (obj.insulated);
            infos = context.parsed.WireInfo;
            if (null == infos)
                context.parsed.WireInfo = infos = {};
            infos[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_BusbarSectionInfo: parse_BusbarSectionInfo,
                parse_PowerTransformerInfo: parse_PowerTransformerInfo,
                parse_SwitchInfo: parse_SwitchInfo,
                parse_OverheadWireInfo: parse_OverheadWireInfo,
                parse_WireInfo: parse_WireInfo
            }
        );
    }
);