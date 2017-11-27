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
         * A point on a table of limit verses temperature.
         *
         */
        class TemperatureDependentLimitPoint extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TemperatureDependentLimitPoint;
                if (null == bucket)
                   cim_data.TemperatureDependentLimitPoint = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TemperatureDependentLimitPoint[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TemperatureDependentLimitPoint";
                base.parse_element (/<cim:TemperatureDependentLimitPoint.limitPercent>([\s\S]*?)<\/cim:TemperatureDependentLimitPoint.limitPercent>/g, obj, "limitPercent", base.to_string, sub, context);
                base.parse_element (/<cim:TemperatureDependentLimitPoint.temperature>([\s\S]*?)<\/cim:TemperatureDependentLimitPoint.temperature>/g, obj, "temperature", base.to_string, sub, context);
                base.parse_attribute (/<cim:TemperatureDependentLimitPoint.TemperatureDependentLimitTable\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TemperatureDependentLimitTable", sub, context);

                var bucket = context.parsed.TemperatureDependentLimitPoint;
                if (null == bucket)
                   context.parsed.TemperatureDependentLimitPoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TemperatureDependentLimitPoint", "limitPercent", base.from_string, fields);
                base.export_element (obj, "TemperatureDependentLimitPoint", "temperature", base.from_string, fields);
                base.export_attribute (obj, "TemperatureDependentLimitPoint", "TemperatureDependentLimitTable", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * One operational limit type scales values of another operational limit type when under the same operational limit set.
         *
         * This applies to any operational limit assigned to the target operational limit type and without other limit dependency models.
         *
         */
        class OperatonalLimitTypeScaling extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OperatonalLimitTypeScaling;
                if (null == bucket)
                   cim_data.OperatonalLimitTypeScaling = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OperatonalLimitTypeScaling[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "OperatonalLimitTypeScaling";
                base.parse_element (/<cim:OperatonalLimitTypeScaling.scalingPercent>([\s\S]*?)<\/cim:OperatonalLimitTypeScaling.scalingPercent>/g, obj, "scalingPercent", base.to_string, sub, context);
                base.parse_attribute (/<cim:OperatonalLimitTypeScaling.SourceOperationalLimitType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SourceOperationalLimitType", sub, context);
                base.parse_attribute (/<cim:OperatonalLimitTypeScaling.TargetOperationalLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TargetOperationalLimit", sub, context);

                var bucket = context.parsed.OperatonalLimitTypeScaling;
                if (null == bucket)
                   context.parsed.OperatonalLimitTypeScaling = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "OperatonalLimitTypeScaling", "scalingPercent", base.from_string, fields);
                base.export_attribute (obj, "OperatonalLimitTypeScaling", "SourceOperationalLimitType", fields);
                base.export_attribute (obj, "OperatonalLimitTypeScaling", "TargetOperationalLimit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A limit that is applicable during a scheduled time period.
         *
         */
        class ScheduledLimitValue extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ScheduledLimitValue;
                if (null == bucket)
                   cim_data.ScheduledLimitValue = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ScheduledLimitValue[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ScheduledLimitValue";
                base.parse_attribute (/<cim:ScheduledLimitValue.Season\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Season", sub, context);
                base.parse_attribute (/<cim:ScheduledLimitValue.ScheduledLimitDependency\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ScheduledLimitDependency", sub, context);

                var bucket = context.parsed.ScheduledLimitValue;
                if (null == bucket)
                   context.parsed.ScheduledLimitValue = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ScheduledLimitValue", "Season", fields);
                base.export_attribute (obj, "ScheduledLimitValue", "ScheduledLimitDependency", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * This represents a source of ambient temperature.
         *
         */
        class WeatherStation extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WeatherStation;
                if (null == bucket)
                   cim_data.WeatherStation = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WeatherStation[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "WeatherStation";

                var bucket = context.parsed.WeatherStation;
                if (null == bucket)
                   context.parsed.WeatherStation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A limit calculation model used to compute an operational limit based on external input such as temperature.
         *
         * These are intended to be shared among operational limits with the same calculation form that apply to a piece of equipment..
         *
         */
        class LimitDependency extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LimitDependency;
                if (null == bucket)
                   cim_data.LimitDependency = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LimitDependency[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "LimitDependency";
                base.parse_attribute (/<cim:LimitDependency.Equipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Equipment", sub, context);

                var bucket = context.parsed.LimitDependency;
                if (null == bucket)
                   context.parsed.LimitDependency = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "LimitDependency", "Equipment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * This represents one instance of an equipment that contributes to the calculation of an operational limit.
         *
         */
        class EquipmentLimitSeriesComponent extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EquipmentLimitSeriesComponent;
                if (null == bucket)
                   cim_data.EquipmentLimitSeriesComponent = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EquipmentLimitSeriesComponent[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "EquipmentLimitSeriesComponent";
                base.parse_attribute (/<cim:EquipmentLimitSeriesComponent.SeriesEquipmentDependentLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SeriesEquipmentDependentLimit", sub, context);
                base.parse_attribute (/<cim:EquipmentLimitSeriesComponent.Equipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Equipment", sub, context);

                var bucket = context.parsed.EquipmentLimitSeriesComponent;
                if (null == bucket)
                   context.parsed.EquipmentLimitSeriesComponent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "EquipmentLimitSeriesComponent", "SeriesEquipmentDependentLimit", fields);
                base.export_attribute (obj, "EquipmentLimitSeriesComponent", "Equipment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A current limit that is scheduled.
         *
         */
        class ScheduledCurrentLimitValue extends ScheduledLimitValue
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ScheduledCurrentLimitValue;
                if (null == bucket)
                   cim_data.ScheduledCurrentLimitValue = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ScheduledCurrentLimitValue[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ScheduledLimitValue.prototype.parse.call (this, context, sub);
                obj.cls = "ScheduledCurrentLimitValue";
                base.parse_element (/<cim:ScheduledCurrentLimitValue.value>([\s\S]*?)<\/cim:ScheduledCurrentLimitValue.value>/g, obj, "value", base.to_string, sub, context);

                var bucket = context.parsed.ScheduledCurrentLimitValue;
                if (null == bucket)
                   context.parsed.ScheduledCurrentLimitValue = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ScheduledLimitValue.prototype.export.call (this, obj, false);

                base.export_element (obj, "ScheduledCurrentLimitValue", "value", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A voltage limit value for a scheduled time.
         *
         */
        class ScheduledVoltageLimitValue extends ScheduledLimitValue
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ScheduledVoltageLimitValue;
                if (null == bucket)
                   cim_data.ScheduledVoltageLimitValue = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ScheduledVoltageLimitValue[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ScheduledLimitValue.prototype.parse.call (this, context, sub);
                obj.cls = "ScheduledVoltageLimitValue";
                base.parse_element (/<cim:ScheduledVoltageLimitValue.value>([\s\S]*?)<\/cim:ScheduledVoltageLimitValue.value>/g, obj, "value", base.to_string, sub, context);

                var bucket = context.parsed.ScheduledVoltageLimitValue;
                if (null == bucket)
                   context.parsed.ScheduledVoltageLimitValue = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ScheduledLimitValue.prototype.export.call (this, obj, false);

                base.export_element (obj, "ScheduledVoltageLimitValue", "value", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class ScheduledActivePowerLimitValue extends ScheduledLimitValue
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ScheduledActivePowerLimitValue;
                if (null == bucket)
                   cim_data.ScheduledActivePowerLimitValue = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ScheduledActivePowerLimitValue[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ScheduledLimitValue.prototype.parse.call (this, context, sub);
                obj.cls = "ScheduledActivePowerLimitValue";
                base.parse_element (/<cim:ScheduledActivePowerLimitValue.value>([\s\S]*?)<\/cim:ScheduledActivePowerLimitValue.value>/g, obj, "value", base.to_string, sub, context);

                var bucket = context.parsed.ScheduledActivePowerLimitValue;
                if (null == bucket)
                   context.parsed.ScheduledActivePowerLimitValue = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ScheduledLimitValue.prototype.export.call (this, obj, false);

                base.export_element (obj, "ScheduledActivePowerLimitValue", "value", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A time scheduled value for apparent power limit.
         *
         */
        class ScheduledApparentPowerLimitValue extends ScheduledLimitValue
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ScheduledApparentPowerLimitValue;
                if (null == bucket)
                   cim_data.ScheduledApparentPowerLimitValue = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ScheduledApparentPowerLimitValue[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ScheduledLimitValue.prototype.parse.call (this, context, sub);
                obj.cls = "ScheduledApparentPowerLimitValue";
                base.parse_element (/<cim:ScheduledApparentPowerLimitValue.value>([\s\S]*?)<\/cim:ScheduledApparentPowerLimitValue.value>/g, obj, "value", base.to_string, sub, context);

                var bucket = context.parsed.ScheduledApparentPowerLimitValue;
                if (null == bucket)
                   context.parsed.ScheduledApparentPowerLimitValue = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ScheduledLimitValue.prototype.export.call (this, obj, false);

                base.export_element (obj, "ScheduledApparentPowerLimitValue", "value", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Specifies an operational  limit is calculated by scaling another operational limit.
         *
         */
        class LimitScalingLimit extends LimitDependency
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LimitScalingLimit;
                if (null == bucket)
                   cim_data.LimitScalingLimit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LimitScalingLimit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = LimitDependency.prototype.parse.call (this, context, sub);
                obj.cls = "LimitScalingLimit";
                base.parse_element (/<cim:LimitScalingLimit.limitScalingPercent>([\s\S]*?)<\/cim:LimitScalingLimit.limitScalingPercent>/g, obj, "limitScalingPercent", base.to_string, sub, context);
                base.parse_attribute (/<cim:LimitScalingLimit.SourceOperationalLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SourceOperationalLimit", sub, context);

                var bucket = context.parsed.LimitScalingLimit;
                if (null == bucket)
                   context.parsed.LimitScalingLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = LimitDependency.prototype.export.call (this, obj, false);

                base.export_element (obj, "LimitScalingLimit", "limitScalingPercent", base.from_string, fields);
                base.export_attribute (obj, "LimitScalingLimit", "SourceOperationalLimit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * This is a environmental based limit dependency model for calculating operational limits.
         *
         */
        class EnvironmentalDependentLimit extends LimitDependency
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EnvironmentalDependentLimit;
                if (null == bucket)
                   cim_data.EnvironmentalDependentLimit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EnvironmentalDependentLimit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = LimitDependency.prototype.parse.call (this, context, sub);
                obj.cls = "EnvironmentalDependentLimit";

                var bucket = context.parsed.EnvironmentalDependentLimit;
                if (null == bucket)
                   context.parsed.EnvironmentalDependentLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = LimitDependency.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class ScheduledLimitDependency extends LimitDependency
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ScheduledLimitDependency;
                if (null == bucket)
                   cim_data.ScheduledLimitDependency = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ScheduledLimitDependency[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = LimitDependency.prototype.parse.call (this, context, sub);
                obj.cls = "ScheduledLimitDependency";

                var bucket = context.parsed.ScheduledLimitDependency;
                if (null == bucket)
                   context.parsed.ScheduledLimitDependency = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = LimitDependency.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Limit based on most restrictive series equipment limit.
         *
         * A specification of  of equipment that determines the calculated operational limit values based upon other equipment and their ratings.  The most restrictive limit connected in series within the group is used.   The physical connection based on switch status for example may also impact which elements in the group are considered. Any equipment in the group that are presently connected in series with the equipment of the directly associated operational limit are used.   This provides a means to indicate which potentially series equipment limits are considered for a computed operational limit. The operational limit of the same operational limit type is assumed to be used from the grouped equipment.   It is also possible to make assumptions or calculations regarding how flow might split if the equipment is not simply in series.
         *
         */
        class SeriesEquipmentDependentLimit extends LimitDependency
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SeriesEquipmentDependentLimit;
                if (null == bucket)
                   cim_data.SeriesEquipmentDependentLimit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SeriesEquipmentDependentLimit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = LimitDependency.prototype.parse.call (this, context, sub);
                obj.cls = "SeriesEquipmentDependentLimit";

                var bucket = context.parsed.SeriesEquipmentDependentLimit;
                if (null == bucket)
                   context.parsed.SeriesEquipmentDependentLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = LimitDependency.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * This describes the coefficients of a polynomial function that has temperature as input and calculates limit values as output.
         *
         */
        class TemperaturePolynomialLimit extends EnvironmentalDependentLimit
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TemperaturePolynomialLimit;
                if (null == bucket)
                   cim_data.TemperaturePolynomialLimit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TemperaturePolynomialLimit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = EnvironmentalDependentLimit.prototype.parse.call (this, context, sub);
                obj.cls = "TemperaturePolynomialLimit";
                base.parse_element (/<cim:TemperaturePolynomialLimit.coefficient0>([\s\S]*?)<\/cim:TemperaturePolynomialLimit.coefficient0>/g, obj, "coefficient0", base.to_float, sub, context);
                base.parse_element (/<cim:TemperaturePolynomialLimit.coefficient1>([\s\S]*?)<\/cim:TemperaturePolynomialLimit.coefficient1>/g, obj, "coefficient1", base.to_float, sub, context);
                base.parse_element (/<cim:TemperaturePolynomialLimit.coefficient2>([\s\S]*?)<\/cim:TemperaturePolynomialLimit.coefficient2>/g, obj, "coefficient2", base.to_float, sub, context);
                base.parse_element (/<cim:TemperaturePolynomialLimit.coefficient3>([\s\S]*?)<\/cim:TemperaturePolynomialLimit.coefficient3>/g, obj, "coefficient3", base.to_float, sub, context);
                base.parse_element (/<cim:TemperaturePolynomialLimit.coefficient4>([\s\S]*?)<\/cim:TemperaturePolynomialLimit.coefficient4>/g, obj, "coefficient4", base.to_float, sub, context);

                var bucket = context.parsed.TemperaturePolynomialLimit;
                if (null == bucket)
                   context.parsed.TemperaturePolynomialLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = EnvironmentalDependentLimit.prototype.export.call (this, obj, false);

                base.export_element (obj, "TemperaturePolynomialLimit", "coefficient0", base.from_float, fields);
                base.export_element (obj, "TemperaturePolynomialLimit", "coefficient1", base.from_float, fields);
                base.export_element (obj, "TemperaturePolynomialLimit", "coefficient2", base.from_float, fields);
                base.export_element (obj, "TemperaturePolynomialLimit", "coefficient3", base.from_float, fields);
                base.export_element (obj, "TemperaturePolynomialLimit", "coefficient4", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * This is a table lookup that provides limit values corresponding to a temperature input.
         *
         */
        class TemperatureDependentLimitTable extends EnvironmentalDependentLimit
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TemperatureDependentLimitTable;
                if (null == bucket)
                   cim_data.TemperatureDependentLimitTable = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TemperatureDependentLimitTable[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = EnvironmentalDependentLimit.prototype.parse.call (this, context, sub);
                obj.cls = "TemperatureDependentLimitTable";

                var bucket = context.parsed.TemperatureDependentLimitTable;
                if (null == bucket)
                   context.parsed.TemperatureDependentLimitTable = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = EnvironmentalDependentLimit.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                ScheduledVoltageLimitValue: ScheduledVoltageLimitValue,
                TemperatureDependentLimitTable: TemperatureDependentLimitTable,
                ScheduledLimitDependency: ScheduledLimitDependency,
                TemperaturePolynomialLimit: TemperaturePolynomialLimit,
                ScheduledActivePowerLimitValue: ScheduledActivePowerLimitValue,
                WeatherStation: WeatherStation,
                LimitScalingLimit: LimitScalingLimit,
                EquipmentLimitSeriesComponent: EquipmentLimitSeriesComponent,
                SeriesEquipmentDependentLimit: SeriesEquipmentDependentLimit,
                ScheduledLimitValue: ScheduledLimitValue,
                EnvironmentalDependentLimit: EnvironmentalDependentLimit,
                LimitDependency: LimitDependency,
                ScheduledApparentPowerLimitValue: ScheduledApparentPowerLimitValue,
                TemperatureDependentLimitPoint: TemperatureDependentLimitPoint,
                OperatonalLimitTypeScaling: OperatonalLimitTypeScaling,
                ScheduledCurrentLimitValue: ScheduledCurrentLimitValue
            }
        );
    }
);