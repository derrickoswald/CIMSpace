/**
 * @fileOverview Package Work CIM model.
 * @name model/work
 * @author Derrick Oswald
 * @version 1.0
 */
define
(
    ["model/base", "model/common"],
    /**
     * @summary Package Work CIM model.
     * @description
     * @name model/work
     * @exports model/work
     * @version 1.0
     */
    function (base, common)
    {

        /*
         * Package Work
         */

        /**
         * Parse a WorkLocation.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.WorkLocation - the list of WorkLocation elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/work
         */
        function parse_WorkLocation (context, sub)
        {
            var obj;
            var locations;

            obj = common.parse_Location (context, sub);
            obj.cls = "WorkLocation";
            obj.OneCallRequest = base.parse_attribute (/<cim:WorkLocation.OneCallRequest\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            locations = context.parsed.WorkLocation;
            if (null == locations)
                context.parsed.WorkLocation = locations = {};
            locations[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_WorkLocation: parse_WorkLocation
            }
        );
    }
);
