/**
 * @fileOverview Package Meas CIM model.
 * @name model/meas
 * @author Derrick Oswald
 * @version 1.0
 */
define
(
    ["model/base", "model/core"],
    /**
     * @summary Package Meas CIM model.
     * @description
     * @name model/meas
     * @exports model/meas
     * @version 1.0
     */
    function (base, core)
    {
        /*
         * Package Meas
         */

        /**
         * Parse a MeasurementValue.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.MeasurementValue - the list of MeasurementValue elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */
        function parse_MeasurementValue (context, sub)
        {
            var obj;
            var values;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "MeasurementValue";
            obj.sensorAccuracy = base.parse_element (/<cim:MeasurementValue.sensorAccuracy>([\s\S]*?)<\/cim:MeasurementValue.sensorAccuracy>/g, sub, context, true);
            obj.timeStamp = base.parse_element (/<cim:MeasurementValue.timeStamp>([\s\S]*?)<\/cim:MeasurementValue.timeStamp>/g, sub, context, true);
            obj.ErpPerson = base.parse_attribute (/<cim:MeasurementValue.ErpPerson\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.MeasurementValueQuality = base.parse_attribute (/<cim:MeasurementValue.MeasurementValueQuality\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.MeasurementValueSource = base.parse_attribute (/<cim:MeasurementValue.MeasurementValueSource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.RemoteSource = base.parse_attribute (/<cim:MeasurementValue.RemoteSource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            values = context.parsed.MeasurementValue;
            if (null == values)
                context.parsed.MeasurementValue = values = {};
            values[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_MeasurementValue: parse_MeasurementValue
            }
        );
    }
);
