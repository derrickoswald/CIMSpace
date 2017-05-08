define
(
    ["model/base", "model/Core"],
    /**
     * The description of computed or dynamic limits.
     * These classes would likely go into the OperationalLimits package.
     */
    function (base, Core)
    {

        /**
         * A voltage limit value for a scheduled time.
         */
        function parse_ScheduledVoltageLimitValue (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ScheduledLimitValue (context, sub);
            obj.cls = "ScheduledVoltageLimitValue";
            /**
             * The voltage limit value for the scheduled time.
             */
            obj["value"] = base.parse_element (/<cim:ScheduledVoltageLimitValue.value>([\s\S]*?)<\/cim:ScheduledVoltageLimitValue.value>/g, sub, context, true);
            bucket = context.parsed.ScheduledVoltageLimitValue;
            if (null == bucket)
                context.parsed.ScheduledVoltageLimitValue = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_ScheduledActivePowerLimitValue (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ScheduledLimitValue (context, sub);
            obj.cls = "ScheduledActivePowerLimitValue";
            obj["value"] = base.parse_element (/<cim:ScheduledActivePowerLimitValue.value>([\s\S]*?)<\/cim:ScheduledActivePowerLimitValue.value>/g, sub, context, true);
            bucket = context.parsed.ScheduledActivePowerLimitValue;
            if (null == bucket)
                context.parsed.ScheduledActivePowerLimitValue = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A time scheduled value for apparent power limit.
         */
        function parse_ScheduledApparentPowerLimitValue (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ScheduledLimitValue (context, sub);
            obj.cls = "ScheduledApparentPowerLimitValue";
            /**
             * The apparent power limit value for the scheduled time.
             */
            obj["value"] = base.parse_element (/<cim:ScheduledApparentPowerLimitValue.value>([\s\S]*?)<\/cim:ScheduledApparentPowerLimitValue.value>/g, sub, context, true);
            bucket = context.parsed.ScheduledApparentPowerLimitValue;
            if (null == bucket)
                context.parsed.ScheduledApparentPowerLimitValue = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Limit based on most restrictive series equipment limit.
         * A specification of  of equipment that determines the calculated operational limit values based upon other equipment and their ratings.  The most restrictive limit connected in series within the group is used.   The physical connection based on switch status for example may also impact which elements in the group are considered. Any equipment in the group that are presently connected in series with the equipment of the directly associated operational limit are used.   This provides a means to indicate which potentially series equipment limits are considered for a computed operational limit. The operational limit of the same operational limit type is assumed to be used from the grouped equipment.   It is also possible to make assumptions or calculations regarding how flow might split if the equipment is not simply in series.
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

        /**
         * A point on a table of limit verses temperature.
         */
        function parse_TemperatureDependentLimitPoint (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TemperatureDependentLimitPoint";
            /**
             * The scaling of the operational limit in percent.
             */
            obj["limitPercent"] = base.parse_element (/<cim:TemperatureDependentLimitPoint.limitPercent>([\s\S]*?)<\/cim:TemperatureDependentLimitPoint.limitPercent>/g, sub, context, true);
            /**
             * The temperature of the table point.
             */
            obj["temperature"] = base.parse_element (/<cim:TemperatureDependentLimitPoint.temperature>([\s\S]*?)<\/cim:TemperatureDependentLimitPoint.temperature>/g, sub, context, true);
            bucket = context.parsed.TemperatureDependentLimitPoint;
            if (null == bucket)
                context.parsed.TemperatureDependentLimitPoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * One operational limit type scales values of another operational limit type when under the same operational limit set.
         * This applies to any operational limit assigned to the target operational limit type and without other limit dependency models.
         */
        function parse_OperatonalLimitTypeScaling (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OperatonalLimitTypeScaling";
            /**
             * The percentage scaling of the source limit to compute the target limit.
             * Applys to operational limits within an operaitonal limit set when both source and target operational limit types exist.
             */
            obj["scalingPercent"] = base.parse_element (/<cim:OperatonalLimitTypeScaling.scalingPercent>([\s\S]*?)<\/cim:OperatonalLimitTypeScaling.scalingPercent>/g, sub, context, true);
            /**
             * 
             */
            obj["SourceOperationalLimitType"] = base.parse_attribute (/<cim:OperatonalLimitTypeScaling.SourceOperationalLimitType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["TargetOperationalLimit"] = base.parse_attribute (/<cim:OperatonalLimitTypeScaling.TargetOperationalLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.OperatonalLimitTypeScaling;
            if (null == bucket)
                context.parsed.OperatonalLimitTypeScaling = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A limit that is applicable during a scheduled time period.
         */
        function parse_ScheduledLimitValue (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ScheduledLimitValue";
            /**
             * The season for which the scheduled limits applies.
             * If not specified, then applicable ot any season.
             */
            obj["Season"] = base.parse_attribute (/<cim:ScheduledLimitValue.Season\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ScheduledLimitValue;
            if (null == bucket)
                context.parsed.ScheduledLimitValue = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A current limit that is scheduled.
         */
        function parse_ScheduledCurrentLimitValue (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ScheduledLimitValue (context, sub);
            obj.cls = "ScheduledCurrentLimitValue";
            /**
             * The current flow limit value applicable at the scheduled time.
             */
            obj["value"] = base.parse_element (/<cim:ScheduledCurrentLimitValue.value>([\s\S]*?)<\/cim:ScheduledCurrentLimitValue.value>/g, sub, context, true);
            bucket = context.parsed.ScheduledCurrentLimitValue;
            if (null == bucket)
                context.parsed.ScheduledCurrentLimitValue = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This represents a source of ambient temperature.
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

        /**
         * A limit calculation model used to compute an operational limit based on external input such as temperature.
         * These are intended to be shared among operational limits with the same calculation form that apply to a piece of equipment..
         */
        function parse_LimitDependency (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "LimitDependency";
            /**
             * The equipment for which this limit dependency model is organized under.
             */
            obj["Equipment"] = base.parse_attribute (/<cim:LimitDependency.Equipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.LimitDependency;
            if (null == bucket)
                context.parsed.LimitDependency = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This represents one instance of an equipment that contributes to the calculation of an operational limit.
         */
        function parse_EquipmentLimitSeriesComponent (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "EquipmentLimitSeriesComponent";
            /**
             * Equipment contributing toward the series limit.
             * The reference here is to Equipment rather than a specific limit on the equipment so the grouiping can be reused for multiple limits of different types on the same instance of equipment.
             */
            obj["Equipment"] = base.parse_attribute (/<cim:EquipmentLimitSeriesComponent.Equipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.EquipmentLimitSeriesComponent;
            if (null == bucket)
                context.parsed.EquipmentLimitSeriesComponent = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This describes the coefficients of a polynomial function that has temperature as input and calculates limit values as output.
         */
        function parse_TemperaturePolynomialLimit (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_EnvironmentalDependentLimit (context, sub);
            obj.cls = "TemperaturePolynomialLimit";
            /**
             * The polinomial coefficent of power 0.
             */
            obj["coefficient0"] = base.to_float (base.parse_element (/<cim:TemperaturePolynomialLimit.coefficient0>([\s\S]*?)<\/cim:TemperaturePolynomialLimit.coefficient0>/g, sub, context, true));
            /**
             * The polinomial coefficent of power 1.
             */
            obj["coefficient1"] = base.to_float (base.parse_element (/<cim:TemperaturePolynomialLimit.coefficient1>([\s\S]*?)<\/cim:TemperaturePolynomialLimit.coefficient1>/g, sub, context, true));
            /**
             * The polinomial coefficent of power 2.
             */
            obj["coefficient2"] = base.to_float (base.parse_element (/<cim:TemperaturePolynomialLimit.coefficient2>([\s\S]*?)<\/cim:TemperaturePolynomialLimit.coefficient2>/g, sub, context, true));
            /**
             * The polinomial coefficent of power 3.
             */
            obj["coefficient3"] = base.to_float (base.parse_element (/<cim:TemperaturePolynomialLimit.coefficient3>([\s\S]*?)<\/cim:TemperaturePolynomialLimit.coefficient3>/g, sub, context, true));
            /**
             * The polinomial coefficent of power 4.
             */
            obj["coefficient4"] = base.to_float (base.parse_element (/<cim:TemperaturePolynomialLimit.coefficient4>([\s\S]*?)<\/cim:TemperaturePolynomialLimit.coefficient4>/g, sub, context, true));
            bucket = context.parsed.TemperaturePolynomialLimit;
            if (null == bucket)
                context.parsed.TemperaturePolynomialLimit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Specifies an operational  limit is calculated by scaling another operational limit.
         */
        function parse_LimitScalingLimit (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_LimitDependency (context, sub);
            obj.cls = "LimitScalingLimit";
            /**
             * The associated source limit is scaled by this value to compute the limit of the dependency model.
             */
            obj["limitScalingPercent"] = base.parse_element (/<cim:LimitScalingLimit.limitScalingPercent>([\s\S]*?)<\/cim:LimitScalingLimit.limitScalingPercent>/g, sub, context, true);
            /**
             * 
             */
            obj["SourceOperationalLimit"] = base.parse_attribute (/<cim:LimitScalingLimit.SourceOperationalLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.LimitScalingLimit;
            if (null == bucket)
                context.parsed.LimitScalingLimit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This is a table lookup that provides limit values corresponding to a temperature input.
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

        /**
         * This is a environmental based limit dependency model for calculating operational limits.
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

        return (
            {
                parse_SeriesEquipmentDependentLimit: parse_SeriesEquipmentDependentLimit,
                parse_ScheduledLimitValue: parse_ScheduledLimitValue,
                parse_TemperaturePolynomialLimit: parse_TemperaturePolynomialLimit,
                parse_ScheduledVoltageLimitValue: parse_ScheduledVoltageLimitValue,
                parse_ScheduledCurrentLimitValue: parse_ScheduledCurrentLimitValue,
                parse_ScheduledApparentPowerLimitValue: parse_ScheduledApparentPowerLimitValue,
                parse_TemperatureDependentLimitTable: parse_TemperatureDependentLimitTable,
                parse_TemperatureDependentLimitPoint: parse_TemperatureDependentLimitPoint,
                parse_EquipmentLimitSeriesComponent: parse_EquipmentLimitSeriesComponent,
                parse_EnvironmentalDependentLimit: parse_EnvironmentalDependentLimit,
                parse_LimitScalingLimit: parse_LimitScalingLimit,
                parse_ScheduledActivePowerLimitValue: parse_ScheduledActivePowerLimitValue,
                parse_WeatherStation: parse_WeatherStation,
                parse_ScheduledLimitDependency: parse_ScheduledLimitDependency,
                parse_OperatonalLimitTypeScaling: parse_OperatonalLimitTypeScaling,
                parse_LimitDependency: parse_LimitDependency
            }
        );
    }
);