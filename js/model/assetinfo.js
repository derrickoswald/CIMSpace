/**
 * @fileOverview Package AssetInfo CIM model.
 * @name model/assetinfo
 * @author Derrick Oswald
 * @version 1.0
 */
define
(
    ["model/base", "model/core", "model/assets"],
    /**
     * @summary Package AssetInfo CIM model.
     * @description
     * @name model/assetinfo
     * @exports model/assetinfo
     * @version 1.0
     */
    function (base, core, assets)
    {
        /*
         * Package AssetInfo
         */

        /**
         * Parse a WireInfo.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.AssetInfo - the list of AssetInfo elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/protection
         */
        function parse_WireInfo (context, sub)
        {
            var obj;
            var infos;

            obj = assets.parse_AssetInfo (context, sub);
            obj.cls = "WireInfo";
            obj.coreRadius = base.parse_attribute (/<cim:WireInfo.coreRadius\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.coreStrandCount = base.parse_attribute (/<cim:WireInfo.coreStrandCount\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.gmr = base.parse_attribute (/<cim:WireInfo.gmr\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.insulated = base.parse_attribute (/<cim:WireInfo.insulated\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.insulationMaterial = base.parse_element (/<cim:Asset.insulationMaterial>([\s\S]*?)<\/cim:Asset.insulationMaterial>/g, sub, context, true);
            obj.insulationThickness = base.parse_attribute (/<cim:WireInfo.insulationThickness\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.material = base.parse_element (/<cim:Asset.material>([\s\S]*?)<\/cim:Asset.material>/g, sub, context, true);
            obj.rAC25 = base.parse_attribute (/<cim:WireInfo.rAC25\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.rAC50 = base.parse_attribute (/<cim:WireInfo.rAC50\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.rAC75 = base.parse_attribute (/<cim:WireInfo.rAC75\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.rDC20 = base.parse_attribute (/<cim:WireInfo.rDC20\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.radius = base.parse_attribute (/<cim:WireInfo.radius\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ratedCurrent = base.parse_attribute (/<cim:WireInfo.ratedCurrent\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.sizeDescription = base.parse_attribute (/<cim:WireInfo.sizeDescription\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.strandCount = base.parse_attribute (/<cim:WireInfo.strandCount\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            infos = context.parsed.AssetInfo;
            if (null == infos)
                context.parsed.AssetInfo = infos = {};
            infos[obj.id] = obj;

            return (obj);
        }


        return (
            {
                parse_WireInfo: parse_WireInfo
            }
        );
    }
);
