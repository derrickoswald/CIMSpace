define
(
    ["model/base", "model/Core"],
    /**
     * This package is responsible for modeling the energy consumers and the system load as curves and associated curve data.
     *
     * Special circumstances that may affect the load, such as seasons and daytypes, are also included here.
     *
     */
    function (base, Core)
    {

        /**
         * A specified time period of the year.
         *
         */
        class Season extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Season;
                if (null == bucket)
                   cim_data.Season = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Season[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Season";
                base.parse_element (/<cim:Season.endDate>([\s\S]*?)<\/cim:Season.endDate>/g, obj, "endDate", base.to_string, sub, context);
                base.parse_element (/<cim:Season.startDate>([\s\S]*?)<\/cim:Season.startDate>/g, obj, "startDate", base.to_string, sub, context);

                var bucket = context.parsed.Season;
                if (null == bucket)
                   context.parsed.Season = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "Season", "endDate", base.from_string, fields);
                base.export_element (obj, "Season", "startDate", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A time schedule covering a 24 hour period, with curve data for a specific type of season and day.
         *
         */
        class SeasonDayTypeSchedule extends Core.RegularIntervalSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SeasonDayTypeSchedule;
                if (null == bucket)
                   cim_data.SeasonDayTypeSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SeasonDayTypeSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.RegularIntervalSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "SeasonDayTypeSchedule";
                base.parse_attribute (/<cim:SeasonDayTypeSchedule.Season\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Season", sub, context);
                base.parse_attribute (/<cim:SeasonDayTypeSchedule.DayType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DayType", sub, context);

                var bucket = context.parsed.SeasonDayTypeSchedule;
                if (null == bucket)
                   context.parsed.SeasonDayTypeSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["RegularIntervalSchedule"](obj, exporters, false);

                base.export_attribute (obj, "SeasonDayTypeSchedule", "Season", fields);
                base.export_attribute (obj, "SeasonDayTypeSchedule", "DayType", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The class is the third level in a hierarchical structure for grouping of loads for the purpose of load flow load scaling.
         *
         */
        class LoadGroup extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LoadGroup;
                if (null == bucket)
                   cim_data.LoadGroup = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LoadGroup[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "LoadGroup";
                base.parse_attribute (/<cim:LoadGroup.SubLoadArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SubLoadArea", sub, context);

                var bucket = context.parsed.LoadGroup;
                if (null == bucket)
                   context.parsed.LoadGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_attribute (obj, "LoadGroup", "SubLoadArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Describes an area having energy production or consumption.
         *
         * Specializations are intended to support the load allocation function as typically required in energy management systems or planning studies to allocate hypothesized load levels to individual load points for power flow analysis.  Often the energy area can be linked to both measured and forecast load levels.
         *
         */
        class EnergyArea extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EnergyArea;
                if (null == bucket)
                   cim_data.EnergyArea = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EnergyArea[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "EnergyArea";
                base.parse_attribute (/<cim:EnergyArea.ControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ControlArea", sub, context);

                var bucket = context.parsed.EnergyArea;
                if (null == bucket)
                   context.parsed.EnergyArea = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_attribute (obj, "EnergyArea", "ControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Group of similar days.
         *
         * For example it could be used to represent weekdays, weekend, or holidays.
         *
         */
        class DayType extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DayType;
                if (null == bucket)
                   cim_data.DayType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DayType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "DayType";

                var bucket = context.parsed.DayType;
                if (null == bucket)
                   context.parsed.DayType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Models the characteristic response of the load demand due to changes in system conditions such as voltage and frequency.
         *
         * This is not related to demand response.
         *
         */
        class LoadResponseCharacteristic extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LoadResponseCharacteristic;
                if (null == bucket)
                   cim_data.LoadResponseCharacteristic = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LoadResponseCharacteristic[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "LoadResponseCharacteristic";
                base.parse_element (/<cim:LoadResponseCharacteristic.exponentModel>([\s\S]*?)<\/cim:LoadResponseCharacteristic.exponentModel>/g, obj, "exponentModel", base.to_boolean, sub, context);
                base.parse_element (/<cim:LoadResponseCharacteristic.pConstantCurrent>([\s\S]*?)<\/cim:LoadResponseCharacteristic.pConstantCurrent>/g, obj, "pConstantCurrent", base.to_float, sub, context);
                base.parse_element (/<cim:LoadResponseCharacteristic.pConstantImpedance>([\s\S]*?)<\/cim:LoadResponseCharacteristic.pConstantImpedance>/g, obj, "pConstantImpedance", base.to_float, sub, context);
                base.parse_element (/<cim:LoadResponseCharacteristic.pConstantPower>([\s\S]*?)<\/cim:LoadResponseCharacteristic.pConstantPower>/g, obj, "pConstantPower", base.to_float, sub, context);
                base.parse_element (/<cim:LoadResponseCharacteristic.pFrequencyExponent>([\s\S]*?)<\/cim:LoadResponseCharacteristic.pFrequencyExponent>/g, obj, "pFrequencyExponent", base.to_float, sub, context);
                base.parse_element (/<cim:LoadResponseCharacteristic.pVoltageExponent>([\s\S]*?)<\/cim:LoadResponseCharacteristic.pVoltageExponent>/g, obj, "pVoltageExponent", base.to_float, sub, context);
                base.parse_element (/<cim:LoadResponseCharacteristic.qConstantCurrent>([\s\S]*?)<\/cim:LoadResponseCharacteristic.qConstantCurrent>/g, obj, "qConstantCurrent", base.to_float, sub, context);
                base.parse_element (/<cim:LoadResponseCharacteristic.qConstantImpedance>([\s\S]*?)<\/cim:LoadResponseCharacteristic.qConstantImpedance>/g, obj, "qConstantImpedance", base.to_float, sub, context);
                base.parse_element (/<cim:LoadResponseCharacteristic.qConstantPower>([\s\S]*?)<\/cim:LoadResponseCharacteristic.qConstantPower>/g, obj, "qConstantPower", base.to_float, sub, context);
                base.parse_element (/<cim:LoadResponseCharacteristic.qFrequencyExponent>([\s\S]*?)<\/cim:LoadResponseCharacteristic.qFrequencyExponent>/g, obj, "qFrequencyExponent", base.to_float, sub, context);
                base.parse_element (/<cim:LoadResponseCharacteristic.qVoltageExponent>([\s\S]*?)<\/cim:LoadResponseCharacteristic.qVoltageExponent>/g, obj, "qVoltageExponent", base.to_float, sub, context);

                var bucket = context.parsed.LoadResponseCharacteristic;
                if (null == bucket)
                   context.parsed.LoadResponseCharacteristic = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "LoadResponseCharacteristic", "exponentModel", base.from_boolean, fields);
                base.export_element (obj, "LoadResponseCharacteristic", "pConstantCurrent", base.from_float, fields);
                base.export_element (obj, "LoadResponseCharacteristic", "pConstantImpedance", base.from_float, fields);
                base.export_element (obj, "LoadResponseCharacteristic", "pConstantPower", base.from_float, fields);
                base.export_element (obj, "LoadResponseCharacteristic", "pFrequencyExponent", base.from_float, fields);
                base.export_element (obj, "LoadResponseCharacteristic", "pVoltageExponent", base.from_float, fields);
                base.export_element (obj, "LoadResponseCharacteristic", "qConstantCurrent", base.from_float, fields);
                base.export_element (obj, "LoadResponseCharacteristic", "qConstantImpedance", base.from_float, fields);
                base.export_element (obj, "LoadResponseCharacteristic", "qConstantPower", base.from_float, fields);
                base.export_element (obj, "LoadResponseCharacteristic", "qFrequencyExponent", base.from_float, fields);
                base.export_element (obj, "LoadResponseCharacteristic", "qVoltageExponent", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * An area or zone of the power system which is used for load shedding purposes.
         *
         */
        class PowerCutZone extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PowerCutZone;
                if (null == bucket)
                   cim_data.PowerCutZone = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PowerCutZone[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "PowerCutZone";
                base.parse_element (/<cim:PowerCutZone.cutLevel1>([\s\S]*?)<\/cim:PowerCutZone.cutLevel1>/g, obj, "cutLevel1", base.to_string, sub, context);
                base.parse_element (/<cim:PowerCutZone.cutLevel2>([\s\S]*?)<\/cim:PowerCutZone.cutLevel2>/g, obj, "cutLevel2", base.to_string, sub, context);

                var bucket = context.parsed.PowerCutZone;
                if (null == bucket)
                   context.parsed.PowerCutZone = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["PowerSystemResource"](obj, exporters, false);

                base.export_element (obj, "PowerCutZone", "cutLevel1", base.from_string, fields);
                base.export_element (obj, "PowerCutZone", "cutLevel2", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * An active power (Y1-axis) and reactive power (Y2-axis) schedule (curves) versus time (X-axis) for non-conforming loads, e.g., large industrial load or power station service (where modeled).
         *
         */
        class NonConformLoadSchedule extends SeasonDayTypeSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.NonConformLoadSchedule;
                if (null == bucket)
                   cim_data.NonConformLoadSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.NonConformLoadSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SeasonDayTypeSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "NonConformLoadSchedule";
                base.parse_attribute (/<cim:NonConformLoadSchedule.NonConformLoadGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "NonConformLoadGroup", sub, context);

                var bucket = context.parsed.NonConformLoadSchedule;
                if (null == bucket)
                   context.parsed.NonConformLoadSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["SeasonDayTypeSchedule"](obj, exporters, false);

                base.export_attribute (obj, "NonConformLoadSchedule", "NonConformLoadGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A curve of load  versus time (X-axis) showing the active power values (Y1-axis) and reactive power (Y2-axis) for each unit of the period covered.
         *
         * This curve represents a typical pattern of load over the time period for a given day type and season.
         *
         */
        class ConformLoadSchedule extends SeasonDayTypeSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ConformLoadSchedule;
                if (null == bucket)
                   cim_data.ConformLoadSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ConformLoadSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SeasonDayTypeSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "ConformLoadSchedule";
                base.parse_attribute (/<cim:ConformLoadSchedule.ConformLoadGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConformLoadGroup", sub, context);

                var bucket = context.parsed.ConformLoadSchedule;
                if (null == bucket)
                   context.parsed.ConformLoadSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["SeasonDayTypeSchedule"](obj, exporters, false);

                base.export_attribute (obj, "ConformLoadSchedule", "ConformLoadGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Loads that do not follow a daily and seasonal load variation pattern.
         *
         */
        class NonConformLoadGroup extends LoadGroup
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.NonConformLoadGroup;
                if (null == bucket)
                   cim_data.NonConformLoadGroup = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.NonConformLoadGroup[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = LoadGroup.prototype.parse.call (this, context, sub);
                obj.cls = "NonConformLoadGroup";

                var bucket = context.parsed.NonConformLoadGroup;
                if (null == bucket)
                   context.parsed.NonConformLoadGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["LoadGroup"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A group of loads conforming to an allocation pattern.
         *
         */
        class ConformLoadGroup extends LoadGroup
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ConformLoadGroup;
                if (null == bucket)
                   cim_data.ConformLoadGroup = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ConformLoadGroup[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = LoadGroup.prototype.parse.call (this, context, sub);
                obj.cls = "ConformLoadGroup";

                var bucket = context.parsed.ConformLoadGroup;
                if (null == bucket)
                   context.parsed.ConformLoadGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["LoadGroup"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The class is the second level in a hierarchical structure for grouping of loads for the purpose of load flow load scaling.
         *
         */
        class SubLoadArea extends EnergyArea
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SubLoadArea;
                if (null == bucket)
                   cim_data.SubLoadArea = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SubLoadArea[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = EnergyArea.prototype.parse.call (this, context, sub);
                obj.cls = "SubLoadArea";
                base.parse_attribute (/<cim:SubLoadArea.LoadArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadArea", sub, context);

                var bucket = context.parsed.SubLoadArea;
                if (null == bucket)
                   context.parsed.SubLoadArea = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["EnergyArea"](obj, exporters, false);

                base.export_attribute (obj, "SubLoadArea", "LoadArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The class is the root or first level in a hierarchical structure for grouping of loads for the purpose of load flow load scaling.
         *
         */
        class LoadArea extends EnergyArea
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LoadArea;
                if (null == bucket)
                   cim_data.LoadArea = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LoadArea[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = EnergyArea.prototype.parse.call (this, context, sub);
                obj.cls = "LoadArea";

                var bucket = context.parsed.LoadArea;
                if (null == bucket)
                   context.parsed.LoadArea = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["EnergyArea"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                NonConformLoadGroup: NonConformLoadGroup,
                ConformLoadSchedule: ConformLoadSchedule,
                NonConformLoadSchedule: NonConformLoadSchedule,
                ConformLoadGroup: ConformLoadGroup,
                EnergyArea: EnergyArea,
                SeasonDayTypeSchedule: SeasonDayTypeSchedule,
                DayType: DayType,
                Season: Season,
                LoadResponseCharacteristic: LoadResponseCharacteristic,
                LoadGroup: LoadGroup,
                SubLoadArea: SubLoadArea,
                PowerCutZone: PowerCutZone,
                LoadArea: LoadArea
            }
        );
    }
);