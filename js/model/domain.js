/**
 * @fileOverview Package domain CIM model.
 * @name model/domain
 * @author Derrick Oswald
 * @version 1.0
 */
define
(
    ["model/base"],
    /**
     * @summary Package Domain CIM model.
     * @description
     * @name model/domain
     * @exports model/domain
     * @version 1.0
     */
    function (base)
    {
        /*
         * Package Domain
         */

        /**
         * Parse a StringQuantity.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.StringQuantity - the list of StringQuantity elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/infAssets
         */
        function parse_StringQuantity (context, sub)
        {
            var obj;
            var infos;

            obj = base.parse_Element (context, sub);
            obj.cls = "StringQuantity";
            obj.multiplier = base.parse_attribute (/<cim:StringQuantity.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.unit = base.parse_attribute (/<cim:StringQuantity.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.value = base.parse_element (/<cim:StringQuantity.value>([\s\S]*?)<\/cim:StringQuantity.value>/g, sub, context, true);
            infos = context.parsed.StringQuantity;
            if (null == infos)
                context.parsed.StringQuantity = infos = {};
            infos[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_StringQuantity: parse_StringQuantity
            }
        );
    }
);