/**
 * @fileOverview Package StateVariables CIM model.
 * @name model/statevariables
 * @author Derrick Oswald
 * @version 1.0
 */
define
(
    ["model/base"],
    /**
     * @summary Package StateVariables CIM model.
     * @description
     * @name model/statevariables
     * @exports model/statevariables
     * @version 1.0
     */
    function (base)
    {
        /*
         * Package StateVariables
         */

        /**
         * Parse a StateVariable.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.StateVariable - the list of StateVariable elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/statevariables
         */
        function parse_StateVariable (context, sub)
        {
            var obj;
            var variables;

            obj = base.parse_Element (context, sub);
            obj.cls = "StateVariable";
            variables = context.parsed.StateVariable;
            if (null == variables)
                context.parsed.StateVariable = variables = {};
            variables[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a SvStatus.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.SvStatus - the list of SvStatus elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/statevariables
         */
        function parse_SvStatus (context, sub)
        {
            var obj;
            var statuses;

            obj = parse_StateVariable (context, sub);
            obj.cls = "SvStatus";
            obj.inService = base.parse_element (/<cim:SvStatus.inService>([\s\S]*?)<\/cim:SvStatus.inService>/g, sub, context, true);
            obj.ConductingEquipment = base.parse_attribute (/<cim:SvStatus.ConductingEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            statuses = context.parsed.SvStatus;
            if (null == statuses)
                context.parsed.SvStatus = statuses = {};
            statuses[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_StateVariable: parse_StateVariable,
                parse_SvStatus: parse_SvStatus
            }
        );
    }
);
