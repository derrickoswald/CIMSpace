define
(
    ["model/base", "model/Core", "model/Wires"],
    /**
     * This package is responsible for modeling the energy consumers and the system load as curves and associated curve data.
     *
     * Special circumstances that may affect the load, such as seasons and daytypes, are also included here.
     *
     */
    function (base, Core, Wires)
    {

        /**
         * The class is the second level in a hierarchical structure for grouping of loads for the purpose of load flow load scaling.
         *
         */
        function parse_SubLoadArea (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_EnergyArea (context, sub);
            obj.cls = "SubLoadArea";
            /**
             * The LoadArea where the SubLoadArea belongs.
             *
             */
            base.parse_attribute (/<cim:SubLoadArea.LoadArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadArea", sub, context, true);

            bucket = context.parsed.SubLoadArea;
            if (null == bucket)
                context.parsed.SubLoadArea = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A specified time period of the year.
         *
         */
        function parse_Season (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Season";
            /**
             * Date season ends.
             *
             */
            base.parse_element (/<cim:Season.endDate>([\s\S]*?)<\/cim:Season.endDate>/g, obj, "endDate", base.to_string, sub, context);

            /**
             * Date season starts.
             *
             */
            base.parse_element (/<cim:Season.startDate>([\s\S]*?)<\/cim:Season.startDate>/g, obj, "startDate", base.to_string, sub, context);

            bucket = context.parsed.Season;
            if (null == bucket)
                context.parsed.Season = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A time schedule covering a 24 hour period, with curve data for a specific type of season and day.
         *
         */
        function parse_SeasonDayTypeSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_RegularIntervalSchedule (context, sub);
            obj.cls = "SeasonDayTypeSchedule";
            /**
             * Season for the Schedule.
             *
             */
            base.parse_attribute (/<cim:SeasonDayTypeSchedule.Season\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Season", sub, context, true);

            /**
             * DayType for the Schedule.
             *
             */
            base.parse_attribute (/<cim:SeasonDayTypeSchedule.DayType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DayType", sub, context, true);

            bucket = context.parsed.SeasonDayTypeSchedule;
            if (null == bucket)
                context.parsed.SeasonDayTypeSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class is the third level in a hierarchical structure for grouping of loads for the purpose of load flow load scaling.
         *
         */
        function parse_LoadGroup (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "LoadGroup";
            /**
             * The SubLoadArea where the Loadgroup belongs.
             *
             */
            base.parse_attribute (/<cim:LoadGroup.SubLoadArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SubLoadArea", sub, context, true);

            bucket = context.parsed.LoadGroup;
            if (null == bucket)
                context.parsed.LoadGroup = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class is the root or first level in a hierarchical structure for grouping of loads for the purpose of load flow load scaling.
         *
         */
        function parse_LoadArea (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_EnergyArea (context, sub);
            obj.cls = "LoadArea";
            bucket = context.parsed.LoadArea;
            if (null == bucket)
                context.parsed.LoadArea = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Describes an area having energy production or consumption.
         *
         * Specializations are intended to support the load allocation function as typically required in energy management systems or planning studies to allocate hypothesized load levels to individual load points for power flow analysis.  Often the energy area can be linked to both measured and forecast load levels.
         *
         */
        function parse_EnergyArea (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "EnergyArea";
            /**
             * The control area specification that is used for the load forecast.
             *
             */
            base.parse_attribute (/<cim:EnergyArea.ControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ControlArea", sub, context, true);

            bucket = context.parsed.EnergyArea;
            if (null == bucket)
                context.parsed.EnergyArea = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * NonConformLoad represent loads that do not follow a daily load change pattern and changes are not correlated with the daily load change pattern.
         *
         */
        function parse_NonConformLoad (context, sub)
        {
            var obj;
            var bucket;

            obj = Wires.parse_EnergyConsumer (context, sub);
            obj.cls = "NonConformLoad";
            /**
             * Group of this ConformLoad.
             *
             */
            base.parse_attribute (/<cim:NonConformLoad.LoadGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadGroup", sub, context, true);

            bucket = context.parsed.NonConformLoad;
            if (null == bucket)
                context.parsed.NonConformLoad = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Group of similar days.
         *
         * For example it could be used to represent weekdays, weekend, or holidays.
         *
         */
        function parse_DayType (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "DayType";
            bucket = context.parsed.DayType;
            if (null == bucket)
                context.parsed.DayType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * ConformLoad represent loads that follow a daily load change pattern where the pattern can be used to scale the load with a system load.
         *
         */
        function parse_ConformLoad (context, sub)
        {
            var obj;
            var bucket;

            obj = Wires.parse_EnergyConsumer (context, sub);
            obj.cls = "ConformLoad";
            /**
             * Group of this ConformLoad.
             *
             */
            base.parse_attribute (/<cim:ConformLoad.LoadGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadGroup", sub, context, true);

            bucket = context.parsed.ConformLoad;
            if (null == bucket)
                context.parsed.ConformLoad = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An active power (Y1-axis) and reactive power (Y2-axis) schedule (curves) versus time (X-axis) for non-conforming loads, e.g., large industrial load or power station service (where modeled).
         *
         */
        function parse_NonConformLoadSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_SeasonDayTypeSchedule (context, sub);
            obj.cls = "NonConformLoadSchedule";
            /**
             * The NonConformLoadGroup where the NonConformLoadSchedule belongs.
             *
             */
            base.parse_attribute (/<cim:NonConformLoadSchedule.NonConformLoadGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "NonConformLoadGroup", sub, context, true);

            bucket = context.parsed.NonConformLoadSchedule;
            if (null == bucket)
                context.parsed.NonConformLoadSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Station supply with load derived from the station output.
         *
         */
        function parse_StationSupply (context, sub)
        {
            var obj;
            var bucket;

            obj = Wires.parse_EnergyConsumer (context, sub);
            obj.cls = "StationSupply";
            bucket = context.parsed.StationSupply;
            if (null == bucket)
                context.parsed.StationSupply = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Loads that do not follow a daily and seasonal load variation pattern.
         *
         */
        function parse_NonConformLoadGroup (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_LoadGroup (context, sub);
            obj.cls = "NonConformLoadGroup";
            bucket = context.parsed.NonConformLoadGroup;
            if (null == bucket)
                context.parsed.NonConformLoadGroup = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Models the characteristic response of the load demand due to changes in system conditions such as voltage and frequency.
         *
         * This is not related to demand response.
         *
         */
        function parse_LoadResponseCharacteristic (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "LoadResponseCharacteristic";
            /**
             * Indicates the exponential voltage dependency model is to be used.
             *
             * If false, the coefficient model is to be used.
             *
             */
            base.parse_element (/<cim:LoadResponseCharacteristic.exponentModel>([\s\S]*?)<\/cim:LoadResponseCharacteristic.exponentModel>/g, obj, "exponentModel", base.to_boolean, sub, context);

            /**
             * Portion of active power load modeled as constant current.
             *
             */
            base.parse_element (/<cim:LoadResponseCharacteristic.pConstantCurrent>([\s\S]*?)<\/cim:LoadResponseCharacteristic.pConstantCurrent>/g, obj, "pConstantCurrent", base.to_float, sub, context);

            /**
             * Portion of active power load modeled as constant impedance.
             *
             */
            base.parse_element (/<cim:LoadResponseCharacteristic.pConstantImpedance>([\s\S]*?)<\/cim:LoadResponseCharacteristic.pConstantImpedance>/g, obj, "pConstantImpedance", base.to_float, sub, context);

            /**
             * Portion of active power load modeled as constant power.
             *
             */
            base.parse_element (/<cim:LoadResponseCharacteristic.pConstantPower>([\s\S]*?)<\/cim:LoadResponseCharacteristic.pConstantPower>/g, obj, "pConstantPower", base.to_float, sub, context);

            /**
             * Exponent of per unit frequency effecting active power.
             *
             */
            base.parse_element (/<cim:LoadResponseCharacteristic.pFrequencyExponent>([\s\S]*?)<\/cim:LoadResponseCharacteristic.pFrequencyExponent>/g, obj, "pFrequencyExponent", base.to_float, sub, context);

            /**
             * Exponent of per unit voltage effecting real power.
             *
             */
            base.parse_element (/<cim:LoadResponseCharacteristic.pVoltageExponent>([\s\S]*?)<\/cim:LoadResponseCharacteristic.pVoltageExponent>/g, obj, "pVoltageExponent", base.to_float, sub, context);

            /**
             * Portion of reactive power load modeled as constant current.
             *
             */
            base.parse_element (/<cim:LoadResponseCharacteristic.qConstantCurrent>([\s\S]*?)<\/cim:LoadResponseCharacteristic.qConstantCurrent>/g, obj, "qConstantCurrent", base.to_float, sub, context);

            /**
             * Portion of reactive power load modeled as constant impedance.
             *
             */
            base.parse_element (/<cim:LoadResponseCharacteristic.qConstantImpedance>([\s\S]*?)<\/cim:LoadResponseCharacteristic.qConstantImpedance>/g, obj, "qConstantImpedance", base.to_float, sub, context);

            /**
             * Portion of reactive power load modeled as constant power.
             *
             */
            base.parse_element (/<cim:LoadResponseCharacteristic.qConstantPower>([\s\S]*?)<\/cim:LoadResponseCharacteristic.qConstantPower>/g, obj, "qConstantPower", base.to_float, sub, context);

            /**
             * Exponent of per unit frequency effecting reactive power.
             *
             */
            base.parse_element (/<cim:LoadResponseCharacteristic.qFrequencyExponent>([\s\S]*?)<\/cim:LoadResponseCharacteristic.qFrequencyExponent>/g, obj, "qFrequencyExponent", base.to_float, sub, context);

            /**
             * Exponent of per unit voltage effecting reactive power.
             *
             */
            base.parse_element (/<cim:LoadResponseCharacteristic.qVoltageExponent>([\s\S]*?)<\/cim:LoadResponseCharacteristic.qVoltageExponent>/g, obj, "qVoltageExponent", base.to_float, sub, context);

            bucket = context.parsed.LoadResponseCharacteristic;
            if (null == bucket)
                context.parsed.LoadResponseCharacteristic = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An area or zone of the power system which is used for load shedding purposes.
         *
         */
        function parse_PowerCutZone (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "PowerCutZone";
            /**
             * First level (amount) of load to cut as a percentage of total zone load.
             *
             */
            base.parse_element (/<cim:PowerCutZone.cutLevel1>([\s\S]*?)<\/cim:PowerCutZone.cutLevel1>/g, obj, "cutLevel1", base.to_string, sub, context);

            /**
             * Second level (amount) of load to cut as a percentage of total zone load.
             *
             */
            base.parse_element (/<cim:PowerCutZone.cutLevel2>([\s\S]*?)<\/cim:PowerCutZone.cutLevel2>/g, obj, "cutLevel2", base.to_string, sub, context);

            bucket = context.parsed.PowerCutZone;
            if (null == bucket)
                context.parsed.PowerCutZone = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A group of loads conforming to an allocation pattern.
         *
         */
        function parse_ConformLoadGroup (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_LoadGroup (context, sub);
            obj.cls = "ConformLoadGroup";
            bucket = context.parsed.ConformLoadGroup;
            if (null == bucket)
                context.parsed.ConformLoadGroup = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A curve of load  versus time (X-axis) showing the active power values (Y1-axis) and reactive power (Y2-axis) for each unit of the period covered.
         *
         * This curve represents a typical pattern of load over the time period for a given day type and season.
         *
         */
        function parse_ConformLoadSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_SeasonDayTypeSchedule (context, sub);
            obj.cls = "ConformLoadSchedule";
            /**
             * The ConformLoadGroup where the ConformLoadSchedule belongs.
             *
             */
            base.parse_attribute (/<cim:ConformLoadSchedule.ConformLoadGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConformLoadGroup", sub, context, true);

            bucket = context.parsed.ConformLoadSchedule;
            if (null == bucket)
                context.parsed.ConformLoadSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_DayType: parse_DayType,
                parse_ConformLoad: parse_ConformLoad,
                parse_LoadGroup: parse_LoadGroup,
                parse_NonConformLoad: parse_NonConformLoad,
                parse_ConformLoadSchedule: parse_ConformLoadSchedule,
                parse_SeasonDayTypeSchedule: parse_SeasonDayTypeSchedule,
                parse_LoadResponseCharacteristic: parse_LoadResponseCharacteristic,
                parse_LoadArea: parse_LoadArea,
                parse_ConformLoadGroup: parse_ConformLoadGroup,
                parse_Season: parse_Season,
                parse_NonConformLoadSchedule: parse_NonConformLoadSchedule,
                parse_SubLoadArea: parse_SubLoadArea,
                parse_EnergyArea: parse_EnergyArea,
                parse_PowerCutZone: parse_PowerCutZone,
                parse_StationSupply: parse_StationSupply,
                parse_NonConformLoadGroup: parse_NonConformLoadGroup
            }
        );
    }
);