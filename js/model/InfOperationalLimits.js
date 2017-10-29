define
(
    ["model/base", "model/Core"],
    /**
     * The description of computed or dynamic limits.
     *
     * These classes would likely go into the OperationalLimits package.
     *
     */
    function (base, Core)
    {

        /**
         * A voltage limit value for a scheduled time.
         *
         */
        function parse_ScheduledVoltageLimitValue (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ScheduledLimitValue (context, sub);
            obj.cls = "ScheduledVoltageLimitValue";
            base.parse_element (/<cim:ScheduledVoltageLimitValue.value>([\s\S]*?)<\/cim:ScheduledVoltageLimitValue.value>/g, obj, "value", base.to_string, sub, context);
            bucket = context.parsed.ScheduledVoltageLimitValue;
            if (null == bucket)
                context.parsed.ScheduledVoltageLimitValue = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ScheduledVoltageLimitValue (obj, exporters, full)
        {
            var fields = exporters["ScheduledLimitValue"](obj, exporters, false);

            base.export_element (obj, "ScheduledVoltageLimitValue", "value", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_ScheduledActivePowerLimitValue (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ScheduledLimitValue (context, sub);
            obj.cls = "ScheduledActivePowerLimitValue";
            base.parse_element (/<cim:ScheduledActivePowerLimitValue.value>([\s\S]*?)<\/cim:ScheduledActivePowerLimitValue.value>/g, obj, "value", base.to_string, sub, context);
            bucket = context.parsed.ScheduledActivePowerLimitValue;
            if (null == bucket)
                context.parsed.ScheduledActivePowerLimitValue = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ScheduledActivePowerLimitValue (obj, exporters, full)
        {
            var fields = exporters["ScheduledLimitValue"](obj, exporters, false);

            base.export_element (obj, "ScheduledActivePowerLimitValue", "value", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A time scheduled value for apparent power limit.
         *
         */
        function parse_ScheduledApparentPowerLimitValue (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ScheduledLimitValue (context, sub);
            obj.cls = "ScheduledApparentPowerLimitValue";
            base.parse_element (/<cim:ScheduledApparentPowerLimitValue.value>([\s\S]*?)<\/cim:ScheduledApparentPowerLimitValue.value>/g, obj, "value", base.to_string, sub, context);
            bucket = context.parsed.ScheduledApparentPowerLimitValue;
            if (null == bucket)
                context.parsed.ScheduledApparentPowerLimitValue = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ScheduledApparentPowerLimitValue (obj, exporters, full)
        {
            var fields = exporters["ScheduledLimitValue"](obj, exporters, false);

            base.export_element (obj, "ScheduledApparentPowerLimitValue", "value", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Limit based on most restrictive series equipment limit.
         *
         * A specification of  of equipment that determines the calculated operational limit values based upon other equipment and their ratings.  The most restrictive limit connected in series within the group is used.   The physical connection based on switch status for example may also impact which elements in the group are considered. Any equipment in the group that are presently connected in series with the equipment of the directly associated operational limit are used.   This provides a means to indicate which potentially series equipment limits are considered for a computed operational limit. The operational limit of the same operational limit type is assumed to be used from the grouped equipment.   It is also possible to make assumptions or calculations regarding how flow might split if the equipment is not simply in series.
         *
         */
        function parse_SeriesEquipmentDependentLimit (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_LimitDependency (context, sub);
            obj.cls = "SeriesEquipmentDependentLimit";
            bucket = context.parsed.SeriesEquipmentDependentLimit;
            if (null == bucket)
                context.parsed.SeriesEquipmentDependentLimit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SeriesEquipmentDependentLimit (obj, exporters, full)
        {
            var fields = exporters["LimitDependency"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A point on a table of limit verses temperature.
         *
         */
        function parse_TemperatureDependentLimitPoint (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TemperatureDependentLimitPoint";
            base.parse_element (/<cim:TemperatureDependentLimitPoint.limitPercent>([\s\S]*?)<\/cim:TemperatureDependentLimitPoint.limitPercent>/g, obj, "limitPercent", base.to_string, sub, context);
            base.parse_element (/<cim:TemperatureDependentLimitPoint.temperature>([\s\S]*?)<\/cim:TemperatureDependentLimitPoint.temperature>/g, obj, "temperature", base.to_string, sub, context);
            base.parse_attribute (/<cim:TemperatureDependentLimitPoint.TemperatureDependentLimitTable\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TemperatureDependentLimitTable", sub, context);
            bucket = context.parsed.TemperatureDependentLimitPoint;
            if (null == bucket)
                context.parsed.TemperatureDependentLimitPoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TemperatureDependentLimitPoint (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "TemperatureDependentLimitPoint", "limitPercent", base.from_string, fields);
            base.export_element (obj, "TemperatureDependentLimitPoint", "temperature", base.from_string, fields);
            base.export_attribute (obj, "TemperatureDependentLimitPoint", "TemperatureDependentLimitTable", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * One operational limit type scales values of another operational limit type when under the same operational limit set.
         *
         * This applies to any operational limit assigned to the target operational limit type and without other limit dependency models.
         *
         */
        function parse_OperatonalLimitTypeScaling (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OperatonalLimitTypeScaling";
            base.parse_element (/<cim:OperatonalLimitTypeScaling.scalingPercent>([\s\S]*?)<\/cim:OperatonalLimitTypeScaling.scalingPercent>/g, obj, "scalingPercent", base.to_string, sub, context);
            base.parse_attribute (/<cim:OperatonalLimitTypeScaling.SourceOperationalLimitType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SourceOperationalLimitType", sub, context);
            base.parse_attribute (/<cim:OperatonalLimitTypeScaling.TargetOperationalLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TargetOperationalLimit", sub, context);
            bucket = context.parsed.OperatonalLimitTypeScaling;
            if (null == bucket)
                context.parsed.OperatonalLimitTypeScaling = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OperatonalLimitTypeScaling (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "OperatonalLimitTypeScaling", "scalingPercent", base.from_string, fields);
            base.export_attribute (obj, "OperatonalLimitTypeScaling", "SourceOperationalLimitType", fields);
            base.export_attribute (obj, "OperatonalLimitTypeScaling", "TargetOperationalLimit", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A limit that is applicable during a scheduled time period.
         *
         */
        function parse_ScheduledLimitValue (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ScheduledLimitValue";
            base.parse_attribute (/<cim:ScheduledLimitValue.Season\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Season", sub, context);
            base.parse_attribute (/<cim:ScheduledLimitValue.ScheduledLimitDependency\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ScheduledLimitDependency", sub, context);
            bucket = context.parsed.ScheduledLimitValue;
            if (null == bucket)
                context.parsed.ScheduledLimitValue = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ScheduledLimitValue (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_attribute (obj, "ScheduledLimitValue", "Season", fields);
            base.export_attribute (obj, "ScheduledLimitValue", "ScheduledLimitDependency", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A current limit that is scheduled.
         *
         */
        function parse_ScheduledCurrentLimitValue (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ScheduledLimitValue (context, sub);
            obj.cls = "ScheduledCurrentLimitValue";
            base.parse_element (/<cim:ScheduledCurrentLimitValue.value>([\s\S]*?)<\/cim:ScheduledCurrentLimitValue.value>/g, obj, "value", base.to_string, sub, context);
            bucket = context.parsed.ScheduledCurrentLimitValue;
            if (null == bucket)
                context.parsed.ScheduledCurrentLimitValue = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ScheduledCurrentLimitValue (obj, exporters, full)
        {
            var fields = exporters["ScheduledLimitValue"](obj, exporters, false);

            base.export_element (obj, "ScheduledCurrentLimitValue", "value", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * This represents a source of ambient temperature.
         *
         */
        function parse_WeatherStation (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "WeatherStation";
            bucket = context.parsed.WeatherStation;
            if (null == bucket)
                context.parsed.WeatherStation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_WeatherStation (obj, exporters, full)
        {
            var fields = exporters["PowerSystemResource"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A limit calculation model used to compute an operational limit based on external input such as temperature.
         *
         * These are intended to be shared among operational limits with the same calculation form that apply to a piece of equipment..
         *
         */
        function parse_LimitDependency (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "LimitDependency";
            base.parse_attribute (/<cim:LimitDependency.Equipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Equipment", sub, context);
            bucket = context.parsed.LimitDependency;
            if (null == bucket)
                context.parsed.LimitDependency = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_LimitDependency (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_attribute (obj, "LimitDependency", "Equipment", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * This represents one instance of an equipment that contributes to the calculation of an operational limit.
         *
         */
        function parse_EquipmentLimitSeriesComponent (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "EquipmentLimitSeriesComponent";
            base.parse_attribute (/<cim:EquipmentLimitSeriesComponent.SeriesEquipmentDependentLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SeriesEquipmentDependentLimit", sub, context);
            base.parse_attribute (/<cim:EquipmentLimitSeriesComponent.Equipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Equipment", sub, context);
            bucket = context.parsed.EquipmentLimitSeriesComponent;
            if (null == bucket)
                context.parsed.EquipmentLimitSeriesComponent = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_EquipmentLimitSeriesComponent (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_attribute (obj, "EquipmentLimitSeriesComponent", "SeriesEquipmentDependentLimit", fields);
            base.export_attribute (obj, "EquipmentLimitSeriesComponent", "Equipment", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * This describes the coefficients of a polynomial function that has temperature as input and calculates limit values as output.
         *
         */
        function parse_TemperaturePolynomialLimit (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_EnvironmentalDependentLimit (context, sub);
            obj.cls = "TemperaturePolynomialLimit";
            base.parse_element (/<cim:TemperaturePolynomialLimit.coefficient0>([\s\S]*?)<\/cim:TemperaturePolynomialLimit.coefficient0>/g, obj, "coefficient0", base.to_float, sub, context);
            base.parse_element (/<cim:TemperaturePolynomialLimit.coefficient1>([\s\S]*?)<\/cim:TemperaturePolynomialLimit.coefficient1>/g, obj, "coefficient1", base.to_float, sub, context);
            base.parse_element (/<cim:TemperaturePolynomialLimit.coefficient2>([\s\S]*?)<\/cim:TemperaturePolynomialLimit.coefficient2>/g, obj, "coefficient2", base.to_float, sub, context);
            base.parse_element (/<cim:TemperaturePolynomialLimit.coefficient3>([\s\S]*?)<\/cim:TemperaturePolynomialLimit.coefficient3>/g, obj, "coefficient3", base.to_float, sub, context);
            base.parse_element (/<cim:TemperaturePolynomialLimit.coefficient4>([\s\S]*?)<\/cim:TemperaturePolynomialLimit.coefficient4>/g, obj, "coefficient4", base.to_float, sub, context);
            bucket = context.parsed.TemperaturePolynomialLimit;
            if (null == bucket)
                context.parsed.TemperaturePolynomialLimit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TemperaturePolynomialLimit (obj, exporters, full)
        {
            var fields = exporters["EnvironmentalDependentLimit"](obj, exporters, false);

            base.export_element (obj, "TemperaturePolynomialLimit", "coefficient0", base.from_float, fields);
            base.export_element (obj, "TemperaturePolynomialLimit", "coefficient1", base.from_float, fields);
            base.export_element (obj, "TemperaturePolynomialLimit", "coefficient2", base.from_float, fields);
            base.export_element (obj, "TemperaturePolynomialLimit", "coefficient3", base.from_float, fields);
            base.export_element (obj, "TemperaturePolynomialLimit", "coefficient4", base.from_float, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Specifies an operational  limit is calculated by scaling another operational limit.
         *
         */
        function parse_LimitScalingLimit (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_LimitDependency (context, sub);
            obj.cls = "LimitScalingLimit";
            base.parse_element (/<cim:LimitScalingLimit.limitScalingPercent>([\s\S]*?)<\/cim:LimitScalingLimit.limitScalingPercent>/g, obj, "limitScalingPercent", base.to_string, sub, context);
            base.parse_attribute (/<cim:LimitScalingLimit.SourceOperationalLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SourceOperationalLimit", sub, context);
            bucket = context.parsed.LimitScalingLimit;
            if (null == bucket)
                context.parsed.LimitScalingLimit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_LimitScalingLimit (obj, exporters, full)
        {
            var fields = exporters["LimitDependency"](obj, exporters, false);

            base.export_element (obj, "LimitScalingLimit", "limitScalingPercent", base.from_string, fields);
            base.export_attribute (obj, "LimitScalingLimit", "SourceOperationalLimit", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * This is a table lookup that provides limit values corresponding to a temperature input.
         *
         */
        function parse_TemperatureDependentLimitTable (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_EnvironmentalDependentLimit (context, sub);
            obj.cls = "TemperatureDependentLimitTable";
            bucket = context.parsed.TemperatureDependentLimitTable;
            if (null == bucket)
                context.parsed.TemperatureDependentLimitTable = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TemperatureDependentLimitTable (obj, exporters, full)
        {
            var fields = exporters["EnvironmentalDependentLimit"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * This is a environmental based limit dependency model for calculating operational limits.
         *
         */
        function parse_EnvironmentalDependentLimit (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_LimitDependency (context, sub);
            obj.cls = "EnvironmentalDependentLimit";
            bucket = context.parsed.EnvironmentalDependentLimit;
            if (null == bucket)
                context.parsed.EnvironmentalDependentLimit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_EnvironmentalDependentLimit (obj, exporters, full)
        {
            var fields = exporters["LimitDependency"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_ScheduledLimitDependency (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_LimitDependency (context, sub);
            obj.cls = "ScheduledLimitDependency";
            bucket = context.parsed.ScheduledLimitDependency;
            if (null == bucket)
                context.parsed.ScheduledLimitDependency = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ScheduledLimitDependency (obj, exporters, full)
        {
            var fields = exporters["LimitDependency"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                export_TemperaturePolynomialLimit: export_TemperaturePolynomialLimit,
                parse_ScheduledLimitValue: parse_ScheduledLimitValue,
                export_TemperatureDependentLimitPoint: export_TemperatureDependentLimitPoint,
                parse_ScheduledCurrentLimitValue: parse_ScheduledCurrentLimitValue,
                export_ScheduledLimitDependency: export_ScheduledLimitDependency,
                parse_ScheduledApparentPowerLimitValue: parse_ScheduledApparentPowerLimitValue,
                parse_TemperatureDependentLimitTable: parse_TemperatureDependentLimitTable,
                export_EnvironmentalDependentLimit: export_EnvironmentalDependentLimit,
                parse_EquipmentLimitSeriesComponent: parse_EquipmentLimitSeriesComponent,
                export_TemperatureDependentLimitTable: export_TemperatureDependentLimitTable,
                export_WeatherStation: export_WeatherStation,
                parse_EnvironmentalDependentLimit: parse_EnvironmentalDependentLimit,
                export_SeriesEquipmentDependentLimit: export_SeriesEquipmentDependentLimit,
                parse_ScheduledActivePowerLimitValue: parse_ScheduledActivePowerLimitValue,
                parse_WeatherStation: parse_WeatherStation,
                parse_OperatonalLimitTypeScaling: parse_OperatonalLimitTypeScaling,
                export_ScheduledCurrentLimitValue: export_ScheduledCurrentLimitValue,
                parse_LimitDependency: parse_LimitDependency,
                export_EquipmentLimitSeriesComponent: export_EquipmentLimitSeriesComponent,
                export_LimitDependency: export_LimitDependency,
                export_ScheduledVoltageLimitValue: export_ScheduledVoltageLimitValue,
                parse_SeriesEquipmentDependentLimit: parse_SeriesEquipmentDependentLimit,
                parse_TemperaturePolynomialLimit: parse_TemperaturePolynomialLimit,
                parse_ScheduledVoltageLimitValue: parse_ScheduledVoltageLimitValue,
                export_ScheduledActivePowerLimitValue: export_ScheduledActivePowerLimitValue,
                parse_TemperatureDependentLimitPoint: parse_TemperatureDependentLimitPoint,
                export_ScheduledApparentPowerLimitValue: export_ScheduledApparentPowerLimitValue,
                export_ScheduledLimitValue: export_ScheduledLimitValue,
                parse_LimitScalingLimit: parse_LimitScalingLimit,
                export_OperatonalLimitTypeScaling: export_OperatonalLimitTypeScaling,
                export_LimitScalingLimit: export_LimitScalingLimit,
                parse_ScheduledLimitDependency: parse_ScheduledLimitDependency
            }
        );
    }
);