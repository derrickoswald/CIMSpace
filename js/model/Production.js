define
(
    ["model/base", "model/Core"],
    /**
     * The production package is responsible for classes which describe various kinds of generators.
     *
     * These classes also provide production costing information which is used to economically allocate demand among committed units and calculate reserve quantities.
     *
     */
    function (base, Core)
    {

        /**
         * A generating unit whose prime mover is a hydraulic turbine (e.g., Francis, Pelton, Kaplan).
         *
         */
        function parse_HydroGeneratingUnit (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_GeneratingUnit (context, sub);
            obj.cls = "HydroGeneratingUnit";
            base.parse_element (/<cim:HydroGeneratingUnit.energyConversionCapability>([\s\S]*?)<\/cim:HydroGeneratingUnit.energyConversionCapability>/g, obj, "energyConversionCapability", base.to_string, sub, context);
            base.parse_element (/<cim:HydroGeneratingUnit.hydroUnitWaterCost>([\s\S]*?)<\/cim:HydroGeneratingUnit.hydroUnitWaterCost>/g, obj, "hydroUnitWaterCost", base.to_string, sub, context);
            base.parse_attribute (/<cim:HydroGeneratingUnit.PenstockLossCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PenstockLossCurve", sub, context);
            base.parse_attribute (/<cim:HydroGeneratingUnit.HydroPowerPlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HydroPowerPlant", sub, context);
            bucket = context.parsed.HydroGeneratingUnit;
            if (null == bucket)
                context.parsed.HydroGeneratingUnit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_HydroGeneratingUnit (obj, exporters, full)
        {
            var fields = exporters["GeneratingUnit"](obj, exporters, false);

            base.export_element (obj, "HydroGeneratingUnit", "energyConversionCapability", base.from_string, fields);
            base.export_element (obj, "HydroGeneratingUnit", "hydroUnitWaterCost", base.from_string, fields);
            base.export_attribute (obj, "HydroGeneratingUnit", "PenstockLossCurve", fields);
            base.export_attribute (obj, "HydroGeneratingUnit", "HydroPowerPlant", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Specifies the capability of the hydro generating unit to convert energy as a generator or pump.
         *
         */
        function parse_HydroEnergyConversionKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "HydroEnergyConversionKind";
            base.parse_element (/<cim:HydroEnergyConversionKind.generator>([\s\S]*?)<\/cim:HydroEnergyConversionKind.generator>/g, obj, "generator", base.to_string, sub, context);
            base.parse_element (/<cim:HydroEnergyConversionKind.pumpAndGenerator>([\s\S]*?)<\/cim:HydroEnergyConversionKind.pumpAndGenerator>/g, obj, "pumpAndGenerator", base.to_string, sub, context);
            bucket = context.parsed.HydroEnergyConversionKind;
            if (null == bucket)
                context.parsed.HydroEnergyConversionKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_HydroEnergyConversionKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "HydroEnergyConversionKind", "generator", base.from_string, fields);
            base.export_element (obj, "HydroEnergyConversionKind", "pumpAndGenerator", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A wind driven generating unit.
         *
         * May be used to represent a single turbine or an aggregation.
         *
         */
        function parse_WindGeneratingUnit (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_GeneratingUnit (context, sub);
            obj.cls = "WindGeneratingUnit";
            base.parse_element (/<cim:WindGeneratingUnit.windGenUnitType>([\s\S]*?)<\/cim:WindGeneratingUnit.windGenUnitType>/g, obj, "windGenUnitType", base.to_string, sub, context);
            bucket = context.parsed.WindGeneratingUnit;
            if (null == bucket)
                context.parsed.WindGeneratingUnit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_WindGeneratingUnit (obj, exporters, full)
        {
            var fields = exporters["GeneratingUnit"](obj, exporters, false);

            base.export_element (obj, "WindGeneratingUnit", "windGenUnitType", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Quantity of emission per fuel heat content.
         *
         */
        function parse_Emission (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "Emission";
            base.parse_element (/<cim:Emission.denominatorMultiplier>([\s\S]*?)<\/cim:Emission.denominatorMultiplier>/g, obj, "denominatorMultiplier", base.to_string, sub, context);
            base.parse_element (/<cim:Emission.denominatorUnit>([\s\S]*?)<\/cim:Emission.denominatorUnit>/g, obj, "denominatorUnit", base.to_string, sub, context);
            base.parse_element (/<cim:Emission.multiplier>([\s\S]*?)<\/cim:Emission.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
            base.parse_element (/<cim:Emission.unit>([\s\S]*?)<\/cim:Emission.unit>/g, obj, "unit", base.to_string, sub, context);
            base.parse_element (/<cim:Emission.value>([\s\S]*?)<\/cim:Emission.value>/g, obj, "value", base.to_float, sub, context);
            bucket = context.parsed.Emission;
            if (null == bucket)
                context.parsed.Emission = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Emission (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "Emission", "denominatorMultiplier", base.from_string, fields);
            base.export_element (obj, "Emission", "denominatorUnit", base.from_string, fields);
            base.export_element (obj, "Emission", "multiplier", base.from_string, fields);
            base.export_element (obj, "Emission", "unit", base.from_string, fields);
            base.export_element (obj, "Emission", "value", base.from_float, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Kind of wind generating unit.
         *
         */
        function parse_WindGenUnitKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "WindGenUnitKind";
            base.parse_element (/<cim:WindGenUnitKind.offshore>([\s\S]*?)<\/cim:WindGenUnitKind.offshore>/g, obj, "offshore", base.to_string, sub, context);
            base.parse_element (/<cim:WindGenUnitKind.onshore>([\s\S]*?)<\/cim:WindGenUnitKind.onshore>/g, obj, "onshore", base.to_string, sub, context);
            bucket = context.parsed.WindGenUnitKind;
            if (null == bucket)
                context.parsed.WindGenUnitKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_WindGenUnitKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "WindGenUnitKind", "offshore", base.from_string, fields);
            base.export_element (obj, "WindGenUnitKind", "onshore", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A synchronous motor-driven pump, typically associated with a pumped storage plant.
         *
         */
        function parse_HydroPump (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Equipment (context, sub);
            obj.cls = "HydroPump";
            base.parse_element (/<cim:HydroPump.pumpDischAtMaxHead>([\s\S]*?)<\/cim:HydroPump.pumpDischAtMaxHead>/g, obj, "pumpDischAtMaxHead", base.to_string, sub, context);
            base.parse_element (/<cim:HydroPump.pumpDischAtMinHead>([\s\S]*?)<\/cim:HydroPump.pumpDischAtMinHead>/g, obj, "pumpDischAtMinHead", base.to_string, sub, context);
            base.parse_element (/<cim:HydroPump.pumpPowerAtMaxHead>([\s\S]*?)<\/cim:HydroPump.pumpPowerAtMaxHead>/g, obj, "pumpPowerAtMaxHead", base.to_string, sub, context);
            base.parse_element (/<cim:HydroPump.pumpPowerAtMinHead>([\s\S]*?)<\/cim:HydroPump.pumpPowerAtMinHead>/g, obj, "pumpPowerAtMinHead", base.to_string, sub, context);
            base.parse_attribute (/<cim:HydroPump.RotatingMachine\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RotatingMachine", sub, context);
            base.parse_attribute (/<cim:HydroPump.HydroPumpOpSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HydroPumpOpSchedule", sub, context);
            base.parse_attribute (/<cim:HydroPump.HydroPowerPlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HydroPowerPlant", sub, context);
            bucket = context.parsed.HydroPump;
            if (null == bucket)
                context.parsed.HydroPump = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_HydroPump (obj, exporters, full)
        {
            var fields = exporters["Equipment"](obj, exporters, false);

            base.export_element (obj, "HydroPump", "pumpDischAtMaxHead", base.from_string, fields);
            base.export_element (obj, "HydroPump", "pumpDischAtMinHead", base.from_string, fields);
            base.export_element (obj, "HydroPump", "pumpPowerAtMaxHead", base.from_string, fields);
            base.export_element (obj, "HydroPump", "pumpPowerAtMinHead", base.from_string, fields);
            base.export_attribute (obj, "HydroPump", "RotatingMachine", fields);
            base.export_attribute (obj, "HydroPump", "HydroPumpOpSchedule", fields);
            base.export_attribute (obj, "HydroPump", "HydroPowerPlant", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Relationship between penstock head loss (in meters) and  total discharge through the penstock (in cubic meters per second).
         *
         * One or more turbines may be connected to the same penstock.
         *
         */
        function parse_PenstockLossCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "PenstockLossCurve";
            base.parse_attribute (/<cim:PenstockLossCurve.HydroGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HydroGeneratingUnit", sub, context);
            bucket = context.parsed.PenstockLossCurve;
            if (null == bucket)
                context.parsed.PenstockLossCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PenstockLossCurve (obj, exporters, full)
        {
            var fields = exporters["Curve"](obj, exporters, false);

            base.export_attribute (obj, "PenstockLossCurve", "HydroGeneratingUnit", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A set of thermal generating units for the production of electrical energy and process steam (usually from the output of the steam turbines).
         *
         * The steam sendout is typically used for industrial purposes or for municipal heating and cooling.
         *
         */
        function parse_CogenerationPlant (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "CogenerationPlant";
            base.parse_element (/<cim:CogenerationPlant.cogenHPSendoutRating>([\s\S]*?)<\/cim:CogenerationPlant.cogenHPSendoutRating>/g, obj, "cogenHPSendoutRating", base.to_float, sub, context);
            base.parse_element (/<cim:CogenerationPlant.cogenHPSteamRating>([\s\S]*?)<\/cim:CogenerationPlant.cogenHPSteamRating>/g, obj, "cogenHPSteamRating", base.to_float, sub, context);
            base.parse_element (/<cim:CogenerationPlant.cogenLPSendoutRating>([\s\S]*?)<\/cim:CogenerationPlant.cogenLPSendoutRating>/g, obj, "cogenLPSendoutRating", base.to_float, sub, context);
            base.parse_element (/<cim:CogenerationPlant.cogenLPSteamRating>([\s\S]*?)<\/cim:CogenerationPlant.cogenLPSteamRating>/g, obj, "cogenLPSteamRating", base.to_float, sub, context);
            base.parse_element (/<cim:CogenerationPlant.ratedP>([\s\S]*?)<\/cim:CogenerationPlant.ratedP>/g, obj, "ratedP", base.to_string, sub, context);
            base.parse_attribute (/<cim:CogenerationPlant.SteamSendoutSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SteamSendoutSchedule", sub, context);
            bucket = context.parsed.CogenerationPlant;
            if (null == bucket)
                context.parsed.CogenerationPlant = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CogenerationPlant (obj, exporters, full)
        {
            var fields = exporters["PowerSystemResource"](obj, exporters, false);

            base.export_element (obj, "CogenerationPlant", "cogenHPSendoutRating", base.from_float, fields);
            base.export_element (obj, "CogenerationPlant", "cogenHPSteamRating", base.from_float, fields);
            base.export_element (obj, "CogenerationPlant", "cogenLPSendoutRating", base.from_float, fields);
            base.export_element (obj, "CogenerationPlant", "cogenLPSteamRating", base.from_float, fields);
            base.export_element (obj, "CogenerationPlant", "ratedP", base.from_string, fields);
            base.export_attribute (obj, "CogenerationPlant", "SteamSendoutSchedule", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Relationship between unit incremental heat rate in (delta energy/time) per (delta active power) and unit output in active power.
         *
         * The IHR curve represents the slope of the HeatInputCurve. Note that the "incremental heat rate" and the "heat rate" have the same engineering units.
         *
         */
        function parse_IncrementalHeatRateCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "IncrementalHeatRateCurve";
            base.parse_element (/<cim:IncrementalHeatRateCurve.isNetGrossP>([\s\S]*?)<\/cim:IncrementalHeatRateCurve.isNetGrossP>/g, obj, "isNetGrossP", base.to_boolean, sub, context);
            base.parse_attribute (/<cim:IncrementalHeatRateCurve.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context);
            bucket = context.parsed.IncrementalHeatRateCurve;
            if (null == bucket)
                context.parsed.IncrementalHeatRateCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_IncrementalHeatRateCurve (obj, exporters, full)
        {
            var fields = exporters["Curve"](obj, exporters, false);

            base.export_element (obj, "IncrementalHeatRateCurve", "isNetGrossP", base.from_boolean, fields);
            base.export_attribute (obj, "IncrementalHeatRateCurve", "ThermalGeneratingUnit", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The type of hydro power plant.
         *
         */
        function parse_HydroPlantStorageKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "HydroPlantStorageKind";
            base.parse_element (/<cim:HydroPlantStorageKind.runOfRiver>([\s\S]*?)<\/cim:HydroPlantStorageKind.runOfRiver>/g, obj, "runOfRiver", base.to_string, sub, context);
            base.parse_element (/<cim:HydroPlantStorageKind.pumpedStorage>([\s\S]*?)<\/cim:HydroPlantStorageKind.pumpedStorage>/g, obj, "pumpedStorage", base.to_string, sub, context);
            base.parse_element (/<cim:HydroPlantStorageKind.storage>([\s\S]*?)<\/cim:HydroPlantStorageKind.storage>/g, obj, "storage", base.to_string, sub, context);
            bucket = context.parsed.HydroPlantStorageKind;
            if (null == bucket)
                context.parsed.HydroPlantStorageKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_HydroPlantStorageKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "HydroPlantStorageKind", "runOfRiver", base.from_string, fields);
            base.export_element (obj, "HydroPlantStorageKind", "pumpedStorage", base.from_string, fields);
            base.export_element (obj, "HydroPlantStorageKind", "storage", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A water storage facility within a hydro system, including: ponds, lakes, lagoons, and rivers.
         *
         * The storage is usually behind some type of dam.
         *
         */
        function parse_Reservoir (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "Reservoir";
            base.parse_element (/<cim:Reservoir.activeStorageCapacity>([\s\S]*?)<\/cim:Reservoir.activeStorageCapacity>/g, obj, "activeStorageCapacity", base.to_string, sub, context);
            base.parse_element (/<cim:Reservoir.energyStorageRating>([\s\S]*?)<\/cim:Reservoir.energyStorageRating>/g, obj, "energyStorageRating", base.to_float, sub, context);
            base.parse_element (/<cim:Reservoir.fullSupplyLevel>([\s\S]*?)<\/cim:Reservoir.fullSupplyLevel>/g, obj, "fullSupplyLevel", base.to_string, sub, context);
            base.parse_element (/<cim:Reservoir.grossCapacity>([\s\S]*?)<\/cim:Reservoir.grossCapacity>/g, obj, "grossCapacity", base.to_string, sub, context);
            base.parse_element (/<cim:Reservoir.normalMinOperateLevel>([\s\S]*?)<\/cim:Reservoir.normalMinOperateLevel>/g, obj, "normalMinOperateLevel", base.to_string, sub, context);
            base.parse_element (/<cim:Reservoir.riverOutletWorks>([\s\S]*?)<\/cim:Reservoir.riverOutletWorks>/g, obj, "riverOutletWorks", base.to_string, sub, context);
            base.parse_element (/<cim:Reservoir.spillTravelDelay>([\s\S]*?)<\/cim:Reservoir.spillTravelDelay>/g, obj, "spillTravelDelay", base.to_string, sub, context);
            base.parse_element (/<cim:Reservoir.spillwayCapacity>([\s\S]*?)<\/cim:Reservoir.spillwayCapacity>/g, obj, "spillwayCapacity", base.to_float, sub, context);
            base.parse_element (/<cim:Reservoir.spillwayCrestLength>([\s\S]*?)<\/cim:Reservoir.spillwayCrestLength>/g, obj, "spillwayCrestLength", base.to_string, sub, context);
            base.parse_element (/<cim:Reservoir.spillwayCrestLevel>([\s\S]*?)<\/cim:Reservoir.spillwayCrestLevel>/g, obj, "spillwayCrestLevel", base.to_string, sub, context);
            base.parse_element (/<cim:Reservoir.spillWayGateType>([\s\S]*?)<\/cim:Reservoir.spillWayGateType>/g, obj, "spillWayGateType", base.to_string, sub, context);
            base.parse_attribute (/<cim:Reservoir.TargetLevelSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TargetLevelSchedule", sub, context);
            base.parse_attribute (/<cim:Reservoir.SpillsFromReservoir\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SpillsFromReservoir", sub, context);
            bucket = context.parsed.Reservoir;
            if (null == bucket)
                context.parsed.Reservoir = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Reservoir (obj, exporters, full)
        {
            var fields = exporters["PowerSystemResource"](obj, exporters, false);

            base.export_element (obj, "Reservoir", "activeStorageCapacity", base.from_string, fields);
            base.export_element (obj, "Reservoir", "energyStorageRating", base.from_float, fields);
            base.export_element (obj, "Reservoir", "fullSupplyLevel", base.from_string, fields);
            base.export_element (obj, "Reservoir", "grossCapacity", base.from_string, fields);
            base.export_element (obj, "Reservoir", "normalMinOperateLevel", base.from_string, fields);
            base.export_element (obj, "Reservoir", "riverOutletWorks", base.from_string, fields);
            base.export_element (obj, "Reservoir", "spillTravelDelay", base.from_string, fields);
            base.export_element (obj, "Reservoir", "spillwayCapacity", base.from_float, fields);
            base.export_element (obj, "Reservoir", "spillwayCrestLength", base.from_string, fields);
            base.export_element (obj, "Reservoir", "spillwayCrestLevel", base.from_string, fields);
            base.export_element (obj, "Reservoir", "spillWayGateType", base.from_string, fields);
            base.export_attribute (obj, "Reservoir", "TargetLevelSchedule", fields);
            base.export_attribute (obj, "Reservoir", "SpillsFromReservoir", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Classification of level.
         *
         * Specify as 1..n, with 1 being the most detailed, highest priority, etc as described on the attribue using this data type.
         *
         */
        function parse_Classification (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "Classification";
            base.parse_element (/<cim:Classification.multiplier>([\s\S]*?)<\/cim:Classification.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
            base.parse_element (/<cim:Classification.unit>([\s\S]*?)<\/cim:Classification.unit>/g, obj, "unit", base.to_string, sub, context);
            base.parse_element (/<cim:Classification.value>([\s\S]*?)<\/cim:Classification.value>/g, obj, "value", base.to_string, sub, context);
            bucket = context.parsed.Classification;
            if (null == bucket)
                context.parsed.Classification = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Classification (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "Classification", "multiplier", base.from_string, fields);
            base.export_element (obj, "Classification", "unit", base.from_string, fields);
            base.export_element (obj, "Classification", "value", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The quantity of ignition fuel (Y-axis) used to restart and repay the auxiliary power consumed versus the number of hours (X-axis) the unit was off line.
         *
         */
        function parse_StartIgnFuelCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "StartIgnFuelCurve";
            base.parse_element (/<cim:StartIgnFuelCurve.ignitionFuelType>([\s\S]*?)<\/cim:StartIgnFuelCurve.ignitionFuelType>/g, obj, "ignitionFuelType", base.to_string, sub, context);
            base.parse_attribute (/<cim:StartIgnFuelCurve.StartupModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StartupModel", sub, context);
            bucket = context.parsed.StartIgnFuelCurve;
            if (null == bucket)
                context.parsed.StartIgnFuelCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_StartIgnFuelCurve (obj, exporters, full)
        {
            var fields = exporters["Curve"](obj, exporters, false);

            base.export_element (obj, "StartIgnFuelCurve", "ignitionFuelType", base.from_string, fields);
            base.export_attribute (obj, "StartIgnFuelCurve", "StartupModel", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Relationship between reservoir volume and reservoir level.
         *
         * The  volume is at the y-axis and the reservoir level at the x-axis.
         *
         */
        function parse_LevelVsVolumeCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "LevelVsVolumeCurve";
            base.parse_attribute (/<cim:LevelVsVolumeCurve.Reservoir\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Reservoir", sub, context);
            bucket = context.parsed.LevelVsVolumeCurve;
            if (null == bucket)
                context.parsed.LevelVsVolumeCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_LevelVsVolumeCurve (obj, exporters, full)
        {
            var fields = exporters["Curve"](obj, exporters, false);

            base.export_attribute (obj, "LevelVsVolumeCurve", "Reservoir", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Relationship between the generating unit's gross active power output on the X-axis (measured at the terminals of the machine(s)) and the generating unit's net active power output on the Y-axis (based on utility-defined measurements at the power station).
         *
         * Station service loads, when modeled, should be treated as non-conforming bus loads. There may be more than one curve, depending on the auxiliary equipment that is in service.
         *
         */
        function parse_GrossToNetActivePowerCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "GrossToNetActivePowerCurve";
            base.parse_attribute (/<cim:GrossToNetActivePowerCurve.GeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingUnit", sub, context);
            bucket = context.parsed.GrossToNetActivePowerCurve;
            if (null == bucket)
                context.parsed.GrossToNetActivePowerCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GrossToNetActivePowerCurve (obj, exporters, full)
        {
            var fields = exporters["Curve"](obj, exporters, false);

            base.export_attribute (obj, "GrossToNetActivePowerCurve", "GeneratingUnit", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Combustion turbine air compressor which is an integral part of a compressed air energy storage (CAES) plant.
         *
         */
        function parse_AirCompressor (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "AirCompressor";
            base.parse_element (/<cim:AirCompressor.airCompressorRating>([\s\S]*?)<\/cim:AirCompressor.airCompressorRating>/g, obj, "airCompressorRating", base.to_float, sub, context);
            base.parse_attribute (/<cim:AirCompressor.CombustionTurbine\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CombustionTurbine", sub, context);
            base.parse_attribute (/<cim:AirCompressor.CAESPlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CAESPlant", sub, context);
            bucket = context.parsed.AirCompressor;
            if (null == bucket)
                context.parsed.AirCompressor = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AirCompressor (obj, exporters, full)
        {
            var fields = exporters["PowerSystemResource"](obj, exporters, false);

            base.export_element (obj, "AirCompressor", "airCompressorRating", base.from_float, fields);
            base.export_attribute (obj, "AirCompressor", "CombustionTurbine", fields);
            base.export_attribute (obj, "AirCompressor", "CAESPlant", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Heat generated, in energy pertime unit of elapsed time.
         *
         */
        function parse_HeatRate (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "HeatRate";
            base.parse_element (/<cim:HeatRate.denominatorMultiplier>([\s\S]*?)<\/cim:HeatRate.denominatorMultiplier>/g, obj, "denominatorMultiplier", base.to_string, sub, context);
            base.parse_element (/<cim:HeatRate.denominatorUnit>([\s\S]*?)<\/cim:HeatRate.denominatorUnit>/g, obj, "denominatorUnit", base.to_string, sub, context);
            base.parse_element (/<cim:HeatRate.multiplier>([\s\S]*?)<\/cim:HeatRate.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
            base.parse_element (/<cim:HeatRate.unit>([\s\S]*?)<\/cim:HeatRate.unit>/g, obj, "unit", base.to_string, sub, context);
            base.parse_element (/<cim:HeatRate.value>([\s\S]*?)<\/cim:HeatRate.value>/g, obj, "value", base.to_float, sub, context);
            bucket = context.parsed.HeatRate;
            if (null == bucket)
                context.parsed.HeatRate = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_HeatRate (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "HeatRate", "denominatorMultiplier", base.from_string, fields);
            base.export_element (obj, "HeatRate", "denominatorUnit", base.from_string, fields);
            base.export_element (obj, "HeatRate", "multiplier", base.from_string, fields);
            base.export_element (obj, "HeatRate", "unit", base.from_string, fields);
            base.export_element (obj, "HeatRate", "value", base.from_float, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The amount of fuel of a given type which is allocated for consumption over a specified period of time.
         *
         */
        function parse_FuelAllocationSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "FuelAllocationSchedule";
            base.parse_element (/<cim:FuelAllocationSchedule.fuelAllocationEndDate>([\s\S]*?)<\/cim:FuelAllocationSchedule.fuelAllocationEndDate>/g, obj, "fuelAllocationEndDate", base.to_datetime, sub, context);
            base.parse_element (/<cim:FuelAllocationSchedule.fuelAllocationStartDate>([\s\S]*?)<\/cim:FuelAllocationSchedule.fuelAllocationStartDate>/g, obj, "fuelAllocationStartDate", base.to_datetime, sub, context);
            base.parse_element (/<cim:FuelAllocationSchedule.fuelType>([\s\S]*?)<\/cim:FuelAllocationSchedule.fuelType>/g, obj, "fuelType", base.to_string, sub, context);
            base.parse_element (/<cim:FuelAllocationSchedule.maxFuelAllocation>([\s\S]*?)<\/cim:FuelAllocationSchedule.maxFuelAllocation>/g, obj, "maxFuelAllocation", base.to_float, sub, context);
            base.parse_element (/<cim:FuelAllocationSchedule.minFuelAllocation>([\s\S]*?)<\/cim:FuelAllocationSchedule.minFuelAllocation>/g, obj, "minFuelAllocation", base.to_float, sub, context);
            base.parse_attribute (/<cim:FuelAllocationSchedule.FossilFuel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FossilFuel", sub, context);
            base.parse_attribute (/<cim:FuelAllocationSchedule.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context);
            bucket = context.parsed.FuelAllocationSchedule;
            if (null == bucket)
                context.parsed.FuelAllocationSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_FuelAllocationSchedule (obj, exporters, full)
        {
            var fields = exporters["Curve"](obj, exporters, false);

            base.export_element (obj, "FuelAllocationSchedule", "fuelAllocationEndDate", base.from_datetime, fields);
            base.export_element (obj, "FuelAllocationSchedule", "fuelAllocationStartDate", base.from_datetime, fields);
            base.export_element (obj, "FuelAllocationSchedule", "fuelType", base.from_string, fields);
            base.export_element (obj, "FuelAllocationSchedule", "maxFuelAllocation", base.from_float, fields);
            base.export_element (obj, "FuelAllocationSchedule", "minFuelAllocation", base.from_float, fields);
            base.export_attribute (obj, "FuelAllocationSchedule", "FossilFuel", fields);
            base.export_attribute (obj, "FuelAllocationSchedule", "ThermalGeneratingUnit", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The source of controls for a generating unit.
         *
         */
        function parse_GeneratorControlSource (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "GeneratorControlSource";
            base.parse_element (/<cim:GeneratorControlSource.unavailable>([\s\S]*?)<\/cim:GeneratorControlSource.unavailable>/g, obj, "unavailable", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratorControlSource.offAGC>([\s\S]*?)<\/cim:GeneratorControlSource.offAGC>/g, obj, "offAGC", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratorControlSource.onAGC>([\s\S]*?)<\/cim:GeneratorControlSource.onAGC>/g, obj, "onAGC", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratorControlSource.plantControl>([\s\S]*?)<\/cim:GeneratorControlSource.plantControl>/g, obj, "plantControl", base.to_string, sub, context);
            bucket = context.parsed.GeneratorControlSource;
            if (null == bucket)
                context.parsed.GeneratorControlSource = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GeneratorControlSource (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "GeneratorControlSource", "unavailable", base.from_string, fields);
            base.export_element (obj, "GeneratorControlSource", "offAGC", base.from_string, fields);
            base.export_element (obj, "GeneratorControlSource", "onAGC", base.from_string, fields);
            base.export_element (obj, "GeneratorControlSource", "plantControl", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The type of emission.
         *
         */
        function parse_EmissionType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "EmissionType";
            base.parse_element (/<cim:EmissionType.sulfurDioxide>([\s\S]*?)<\/cim:EmissionType.sulfurDioxide>/g, obj, "sulfurDioxide", base.to_string, sub, context);
            base.parse_element (/<cim:EmissionType.carbonDioxide>([\s\S]*?)<\/cim:EmissionType.carbonDioxide>/g, obj, "carbonDioxide", base.to_string, sub, context);
            base.parse_element (/<cim:EmissionType.nitrogenOxide>([\s\S]*?)<\/cim:EmissionType.nitrogenOxide>/g, obj, "nitrogenOxide", base.to_string, sub, context);
            base.parse_element (/<cim:EmissionType.hydrogenSulfide>([\s\S]*?)<\/cim:EmissionType.hydrogenSulfide>/g, obj, "hydrogenSulfide", base.to_string, sub, context);
            base.parse_element (/<cim:EmissionType.chlorine>([\s\S]*?)<\/cim:EmissionType.chlorine>/g, obj, "chlorine", base.to_string, sub, context);
            base.parse_element (/<cim:EmissionType.carbonDisulfide>([\s\S]*?)<\/cim:EmissionType.carbonDisulfide>/g, obj, "carbonDisulfide", base.to_string, sub, context);
            bucket = context.parsed.EmissionType;
            if (null == bucket)
                context.parsed.EmissionType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_EmissionType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "EmissionType", "sulfurDioxide", base.from_string, fields);
            base.export_element (obj, "EmissionType", "carbonDioxide", base.from_string, fields);
            base.export_element (obj, "EmissionType", "nitrogenOxide", base.from_string, fields);
            base.export_element (obj, "EmissionType", "hydrogenSulfide", base.from_string, fields);
            base.export_element (obj, "EmissionType", "chlorine", base.from_string, fields);
            base.export_element (obj, "EmissionType", "carbonDisulfide", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Relationship between unit efficiency in percent and unit output active power for a given net head in meters.
         *
         * The relationship between efficiency, discharge, head, and power output is expressed as follows:   E =KP/HQ
         *
         */
        function parse_HydroGeneratingEfficiencyCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "HydroGeneratingEfficiencyCurve";
            base.parse_attribute (/<cim:HydroGeneratingEfficiencyCurve.HydroGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HydroGeneratingUnit", sub, context);
            bucket = context.parsed.HydroGeneratingEfficiencyCurve;
            if (null == bucket)
                context.parsed.HydroGeneratingEfficiencyCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_HydroGeneratingEfficiencyCurve (obj, exporters, full)
        {
            var fields = exporters["Curve"](obj, exporters, false);

            base.export_attribute (obj, "HydroGeneratingEfficiencyCurve", "HydroGeneratingUnit", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The generating unit's Operator-approved current operating schedule (or plan), typically produced with the aid of unit commitment type analyses.
         *
         * The X-axis represents absolute time. The Y1-axis represents the status (0=off-line and unavailable: 1=available: 2=must run: 3=must run at fixed power value: etc.). The Y2-axis represents the must run fixed power value where required.
         *
         */
        function parse_GenUnitOpSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_RegularIntervalSchedule (context, sub);
            obj.cls = "GenUnitOpSchedule";
            base.parse_attribute (/<cim:GenUnitOpSchedule.GeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingUnit", sub, context);
            bucket = context.parsed.GenUnitOpSchedule;
            if (null == bucket)
                context.parsed.GenUnitOpSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GenUnitOpSchedule (obj, exporters, full)
        {
            var fields = exporters["RegularIntervalSchedule"](obj, exporters, false);

            base.export_attribute (obj, "GenUnitOpSchedule", "GeneratingUnit", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Relationship between unit heat rate per active power (Y-axis) and  unit output (X-axis).
         *
         * The heat input is from all fuels.
         *
         */
        function parse_HeatRateCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "HeatRateCurve";
            base.parse_element (/<cim:HeatRateCurve.isNetGrossP>([\s\S]*?)<\/cim:HeatRateCurve.isNetGrossP>/g, obj, "isNetGrossP", base.to_boolean, sub, context);
            base.parse_attribute (/<cim:HeatRateCurve.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context);
            bucket = context.parsed.HeatRateCurve;
            if (null == bucket)
                context.parsed.HeatRateCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_HeatRateCurve (obj, exporters, full)
        {
            var fields = exporters["Curve"](obj, exporters, false);

            base.export_element (obj, "HeatRateCurve", "isNetGrossP", base.from_boolean, fields);
            base.export_attribute (obj, "HeatRateCurve", "ThermalGeneratingUnit", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Type of fuel.
         *
         */
        function parse_FuelType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "FuelType";
            base.parse_element (/<cim:FuelType.coal>([\s\S]*?)<\/cim:FuelType.coal>/g, obj, "coal", base.to_string, sub, context);
            base.parse_element (/<cim:FuelType.oil>([\s\S]*?)<\/cim:FuelType.oil>/g, obj, "oil", base.to_string, sub, context);
            base.parse_element (/<cim:FuelType.gas>([\s\S]*?)<\/cim:FuelType.gas>/g, obj, "gas", base.to_string, sub, context);
            base.parse_element (/<cim:FuelType.lignite>([\s\S]*?)<\/cim:FuelType.lignite>/g, obj, "lignite", base.to_string, sub, context);
            base.parse_element (/<cim:FuelType.hardCoal>([\s\S]*?)<\/cim:FuelType.hardCoal>/g, obj, "hardCoal", base.to_string, sub, context);
            base.parse_element (/<cim:FuelType.oilShale>([\s\S]*?)<\/cim:FuelType.oilShale>/g, obj, "oilShale", base.to_string, sub, context);
            bucket = context.parsed.FuelType;
            if (null == bucket)
                context.parsed.FuelType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_FuelType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "FuelType", "coal", base.from_string, fields);
            base.export_element (obj, "FuelType", "oil", base.from_string, fields);
            base.export_element (obj, "FuelType", "gas", base.from_string, fields);
            base.export_element (obj, "FuelType", "lignite", base.from_string, fields);
            base.export_element (obj, "FuelType", "hardCoal", base.from_string, fields);
            base.export_element (obj, "FuelType", "oilShale", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Relationship between unit operating cost (Y-axis) and unit output active power (X-axis).
         *
         * The operating cost curve for thermal units is derived from heat input and fuel costs. The operating cost curve for hydro units is derived from water flow rates and equivalent water costs.
         *
         */
        function parse_GenUnitOpCostCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "GenUnitOpCostCurve";
            base.parse_element (/<cim:GenUnitOpCostCurve.isNetGrossP>([\s\S]*?)<\/cim:GenUnitOpCostCurve.isNetGrossP>/g, obj, "isNetGrossP", base.to_boolean, sub, context);
            base.parse_attribute (/<cim:GenUnitOpCostCurve.GeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingUnit", sub, context);
            bucket = context.parsed.GenUnitOpCostCurve;
            if (null == bucket)
                context.parsed.GenUnitOpCostCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GenUnitOpCostCurve (obj, exporters, full)
        {
            var fields = exporters["Curve"](obj, exporters, false);

            base.export_element (obj, "GenUnitOpCostCurve", "isNetGrossP", base.from_boolean, fields);
            base.export_attribute (obj, "GenUnitOpCostCurve", "GeneratingUnit", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The cogeneration plant's steam sendout schedule in volume per time unit.
         *
         */
        function parse_SteamSendoutSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_RegularIntervalSchedule (context, sub);
            obj.cls = "SteamSendoutSchedule";
            base.parse_attribute (/<cim:SteamSendoutSchedule.CogenerationPlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CogenerationPlant", sub, context);
            bucket = context.parsed.SteamSendoutSchedule;
            if (null == bucket)
                context.parsed.SteamSendoutSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SteamSendoutSchedule (obj, exporters, full)
        {
            var fields = exporters["RegularIntervalSchedule"](obj, exporters, false);

            base.export_attribute (obj, "SteamSendoutSchedule", "CogenerationPlant", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Relationship between tailbay head loss hight (y-axis) and the total discharge into the power station's tailbay volume per time unit (x-axis) .
         *
         * There could be more than one curve depending on the level of the tailbay reservoir or river level.
         *
         */
        function parse_TailbayLossCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "TailbayLossCurve";
            base.parse_attribute (/<cim:TailbayLossCurve.HydroGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HydroGeneratingUnit", sub, context);
            bucket = context.parsed.TailbayLossCurve;
            if (null == bucket)
                context.parsed.TailbayLossCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TailbayLossCurve (obj, exporters, full)
        {
            var fields = exporters["Curve"](obj, exporters, false);

            base.export_attribute (obj, "TailbayLossCurve", "HydroGeneratingUnit", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Compressed air energy storage plant.
         *
         */
        function parse_CAESPlant (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "CAESPlant";
            base.parse_element (/<cim:CAESPlant.energyStorageCapacity>([\s\S]*?)<\/cim:CAESPlant.energyStorageCapacity>/g, obj, "energyStorageCapacity", base.to_string, sub, context);
            base.parse_element (/<cim:CAESPlant.ratedCapacityP>([\s\S]*?)<\/cim:CAESPlant.ratedCapacityP>/g, obj, "ratedCapacityP", base.to_string, sub, context);
            base.parse_attribute (/<cim:CAESPlant.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context);
            base.parse_attribute (/<cim:CAESPlant.AirCompressor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AirCompressor", sub, context);
            bucket = context.parsed.CAESPlant;
            if (null == bucket)
                context.parsed.CAESPlant = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CAESPlant (obj, exporters, full)
        {
            var fields = exporters["PowerSystemResource"](obj, exporters, false);

            base.export_element (obj, "CAESPlant", "energyStorageCapacity", base.from_string, fields);
            base.export_element (obj, "CAESPlant", "ratedCapacityP", base.from_string, fields);
            base.export_attribute (obj, "CAESPlant", "ThermalGeneratingUnit", fields);
            base.export_attribute (obj, "CAESPlant", "AirCompressor", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A nuclear generating unit.
         *
         */
        function parse_NuclearGeneratingUnit (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_GeneratingUnit (context, sub);
            obj.cls = "NuclearGeneratingUnit";
            bucket = context.parsed.NuclearGeneratingUnit;
            if (null == bucket)
                context.parsed.NuclearGeneratingUnit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_NuclearGeneratingUnit (obj, exporters, full)
        {
            var fields = exporters["GeneratingUnit"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The source of the emission value.
         *
         */
        function parse_EmissionValueSource (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "EmissionValueSource";
            base.parse_element (/<cim:EmissionValueSource.measured>([\s\S]*?)<\/cim:EmissionValueSource.measured>/g, obj, "measured", base.to_string, sub, context);
            base.parse_element (/<cim:EmissionValueSource.calculated>([\s\S]*?)<\/cim:EmissionValueSource.calculated>/g, obj, "calculated", base.to_string, sub, context);
            bucket = context.parsed.EmissionValueSource;
            if (null == bucket)
                context.parsed.EmissionValueSource = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_EmissionValueSource (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "EmissionValueSource", "measured", base.from_string, fields);
            base.export_element (obj, "EmissionValueSource", "calculated", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Relationship between the unit's emission rate in units of mass per hour (Y-axis) and output active power (X-axis) for a given type of emission.
         *
         * This curve applies when only one type of fuel is being burned.
         *
         */
        function parse_EmissionCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "EmissionCurve";
            base.parse_element (/<cim:EmissionCurve.emissionContent>([\s\S]*?)<\/cim:EmissionCurve.emissionContent>/g, obj, "emissionContent", base.to_string, sub, context);
            base.parse_element (/<cim:EmissionCurve.emissionType>([\s\S]*?)<\/cim:EmissionCurve.emissionType>/g, obj, "emissionType", base.to_string, sub, context);
            base.parse_element (/<cim:EmissionCurve.isNetGrossP>([\s\S]*?)<\/cim:EmissionCurve.isNetGrossP>/g, obj, "isNetGrossP", base.to_boolean, sub, context);
            base.parse_attribute (/<cim:EmissionCurve.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context);
            bucket = context.parsed.EmissionCurve;
            if (null == bucket)
                context.parsed.EmissionCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_EmissionCurve (obj, exporters, full)
        {
            var fields = exporters["Curve"](obj, exporters, false);

            base.export_element (obj, "EmissionCurve", "emissionContent", base.from_string, fields);
            base.export_element (obj, "EmissionCurve", "emissionType", base.from_string, fields);
            base.export_element (obj, "EmissionCurve", "isNetGrossP", base.from_boolean, fields);
            base.export_attribute (obj, "EmissionCurve", "ThermalGeneratingUnit", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Unit control modes.
         *
         */
        function parse_GeneratorControlMode (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "GeneratorControlMode";
            base.parse_element (/<cim:GeneratorControlMode.setpoint>([\s\S]*?)<\/cim:GeneratorControlMode.setpoint>/g, obj, "setpoint", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratorControlMode.pulse>([\s\S]*?)<\/cim:GeneratorControlMode.pulse>/g, obj, "pulse", base.to_string, sub, context);
            bucket = context.parsed.GeneratorControlMode;
            if (null == bucket)
                context.parsed.GeneratorControlMode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GeneratorControlMode (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "GeneratorControlMode", "setpoint", base.from_string, fields);
            base.export_element (obj, "GeneratorControlMode", "pulse", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A solar thermal generating unit.
         *
         */
        function parse_SolarGeneratingUnit (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_GeneratingUnit (context, sub);
            obj.cls = "SolarGeneratingUnit";
            bucket = context.parsed.SolarGeneratingUnit;
            if (null == bucket)
                context.parsed.SolarGeneratingUnit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SolarGeneratingUnit (obj, exporters, full)
        {
            var fields = exporters["GeneratingUnit"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The quantity of main fuel (Y-axis) used to restart and repay the auxiliary power consumed versus the number of hours (X-axis) the unit was off line.
         *
         */
        function parse_StartMainFuelCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "StartMainFuelCurve";
            base.parse_element (/<cim:StartMainFuelCurve.mainFuelType>([\s\S]*?)<\/cim:StartMainFuelCurve.mainFuelType>/g, obj, "mainFuelType", base.to_string, sub, context);
            base.parse_attribute (/<cim:StartMainFuelCurve.StartupModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StartupModel", sub, context);
            bucket = context.parsed.StartMainFuelCurve;
            if (null == bucket)
                context.parsed.StartMainFuelCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_StartMainFuelCurve (obj, exporters, full)
        {
            var fields = exporters["Curve"](obj, exporters, false);

            base.export_element (obj, "StartMainFuelCurve", "mainFuelType", base.from_string, fields);
            base.export_attribute (obj, "StartMainFuelCurve", "StartupModel", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Rate in gross active power/minute (Y-axis) at which a unit can be loaded versus the number of hours (X-axis) the unit was off line.
         *
         */
        function parse_StartRampCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "StartRampCurve";
            base.parse_element (/<cim:StartRampCurve.hotStandbyRamp>([\s\S]*?)<\/cim:StartRampCurve.hotStandbyRamp>/g, obj, "hotStandbyRamp", base.to_string, sub, context);
            base.parse_attribute (/<cim:StartRampCurve.StartupModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StartupModel", sub, context);
            bucket = context.parsed.StartRampCurve;
            if (null == bucket)
                context.parsed.StartRampCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_StartRampCurve (obj, exporters, full)
        {
            var fields = exporters["Curve"](obj, exporters, false);

            base.export_element (obj, "StartRampCurve", "hotStandbyRamp", base.from_string, fields);
            base.export_attribute (obj, "StartRampCurve", "StartupModel", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The fossil fuel consumed by the non-nuclear thermal generating unit.
         *
         * For example, coal, oil, gas, etc.   This a the specific fuels that the generating unit can consume.
         *
         */
        function parse_FossilFuel (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "FossilFuel";
            base.parse_element (/<cim:FossilFuel.fossilFuelType>([\s\S]*?)<\/cim:FossilFuel.fossilFuelType>/g, obj, "fossilFuelType", base.to_string, sub, context);
            base.parse_element (/<cim:FossilFuel.fuelCost>([\s\S]*?)<\/cim:FossilFuel.fuelCost>/g, obj, "fuelCost", base.to_string, sub, context);
            base.parse_element (/<cim:FossilFuel.fuelDispatchCost>([\s\S]*?)<\/cim:FossilFuel.fuelDispatchCost>/g, obj, "fuelDispatchCost", base.to_string, sub, context);
            base.parse_element (/<cim:FossilFuel.fuelEffFactor>([\s\S]*?)<\/cim:FossilFuel.fuelEffFactor>/g, obj, "fuelEffFactor", base.to_string, sub, context);
            base.parse_element (/<cim:FossilFuel.fuelHandlingCost>([\s\S]*?)<\/cim:FossilFuel.fuelHandlingCost>/g, obj, "fuelHandlingCost", base.to_string, sub, context);
            base.parse_element (/<cim:FossilFuel.fuelHeatContent>([\s\S]*?)<\/cim:FossilFuel.fuelHeatContent>/g, obj, "fuelHeatContent", base.to_float, sub, context);
            base.parse_element (/<cim:FossilFuel.fuelMixture>([\s\S]*?)<\/cim:FossilFuel.fuelMixture>/g, obj, "fuelMixture", base.to_string, sub, context);
            base.parse_element (/<cim:FossilFuel.fuelSulfur>([\s\S]*?)<\/cim:FossilFuel.fuelSulfur>/g, obj, "fuelSulfur", base.to_string, sub, context);
            base.parse_element (/<cim:FossilFuel.highBreakpointP>([\s\S]*?)<\/cim:FossilFuel.highBreakpointP>/g, obj, "highBreakpointP", base.to_string, sub, context);
            base.parse_element (/<cim:FossilFuel.lowBreakpointP>([\s\S]*?)<\/cim:FossilFuel.lowBreakpointP>/g, obj, "lowBreakpointP", base.to_string, sub, context);
            base.parse_attribute (/<cim:FossilFuel.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context);
            bucket = context.parsed.FossilFuel;
            if (null == bucket)
                context.parsed.FossilFuel = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_FossilFuel (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "FossilFuel", "fossilFuelType", base.from_string, fields);
            base.export_element (obj, "FossilFuel", "fuelCost", base.from_string, fields);
            base.export_element (obj, "FossilFuel", "fuelDispatchCost", base.from_string, fields);
            base.export_element (obj, "FossilFuel", "fuelEffFactor", base.from_string, fields);
            base.export_element (obj, "FossilFuel", "fuelHandlingCost", base.from_string, fields);
            base.export_element (obj, "FossilFuel", "fuelHeatContent", base.from_float, fields);
            base.export_element (obj, "FossilFuel", "fuelMixture", base.from_string, fields);
            base.export_element (obj, "FossilFuel", "fuelSulfur", base.from_string, fields);
            base.export_element (obj, "FossilFuel", "highBreakpointP", base.from_string, fields);
            base.export_element (obj, "FossilFuel", "lowBreakpointP", base.from_string, fields);
            base.export_attribute (obj, "FossilFuel", "ThermalGeneratingUnit", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A single or set of synchronous machines for converting mechanical power into alternating-current power.
         *
         * For example, individual machines within a set may be defined for scheduling purposes while a single control signal is derived for the set. In this case there would be a GeneratingUnit for each member of the set and an additional GeneratingUnit corresponding to the set.
         *
         */
        function parse_GeneratingUnit (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Equipment (context, sub);
            obj.cls = "GeneratingUnit";
            base.parse_element (/<cim:GeneratingUnit.allocSpinResP>([\s\S]*?)<\/cim:GeneratingUnit.allocSpinResP>/g, obj, "allocSpinResP", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratingUnit.autoCntrlMarginP>([\s\S]*?)<\/cim:GeneratingUnit.autoCntrlMarginP>/g, obj, "autoCntrlMarginP", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratingUnit.baseP>([\s\S]*?)<\/cim:GeneratingUnit.baseP>/g, obj, "baseP", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratingUnit.controlDeadband>([\s\S]*?)<\/cim:GeneratingUnit.controlDeadband>/g, obj, "controlDeadband", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratingUnit.controlPulseHigh>([\s\S]*?)<\/cim:GeneratingUnit.controlPulseHigh>/g, obj, "controlPulseHigh", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratingUnit.controlPulseLow>([\s\S]*?)<\/cim:GeneratingUnit.controlPulseLow>/g, obj, "controlPulseLow", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratingUnit.controlResponseRate>([\s\S]*?)<\/cim:GeneratingUnit.controlResponseRate>/g, obj, "controlResponseRate", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratingUnit.efficiency>([\s\S]*?)<\/cim:GeneratingUnit.efficiency>/g, obj, "efficiency", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratingUnit.genControlMode>([\s\S]*?)<\/cim:GeneratingUnit.genControlMode>/g, obj, "genControlMode", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratingUnit.genControlSource>([\s\S]*?)<\/cim:GeneratingUnit.genControlSource>/g, obj, "genControlSource", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratingUnit.governorMPL>([\s\S]*?)<\/cim:GeneratingUnit.governorMPL>/g, obj, "governorMPL", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratingUnit.governorSCD>([\s\S]*?)<\/cim:GeneratingUnit.governorSCD>/g, obj, "governorSCD", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratingUnit.highControlLimit>([\s\S]*?)<\/cim:GeneratingUnit.highControlLimit>/g, obj, "highControlLimit", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratingUnit.initialP>([\s\S]*?)<\/cim:GeneratingUnit.initialP>/g, obj, "initialP", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratingUnit.longPF>([\s\S]*?)<\/cim:GeneratingUnit.longPF>/g, obj, "longPF", base.to_float, sub, context);
            base.parse_element (/<cim:GeneratingUnit.lowControlLimit>([\s\S]*?)<\/cim:GeneratingUnit.lowControlLimit>/g, obj, "lowControlLimit", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratingUnit.lowerRampRate>([\s\S]*?)<\/cim:GeneratingUnit.lowerRampRate>/g, obj, "lowerRampRate", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratingUnit.maxEconomicP>([\s\S]*?)<\/cim:GeneratingUnit.maxEconomicP>/g, obj, "maxEconomicP", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratingUnit.maximumAllowableSpinningReserve>([\s\S]*?)<\/cim:GeneratingUnit.maximumAllowableSpinningReserve>/g, obj, "maximumAllowableSpinningReserve", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratingUnit.maxOperatingP>([\s\S]*?)<\/cim:GeneratingUnit.maxOperatingP>/g, obj, "maxOperatingP", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratingUnit.minEconomicP>([\s\S]*?)<\/cim:GeneratingUnit.minEconomicP>/g, obj, "minEconomicP", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratingUnit.minimumOffTime>([\s\S]*?)<\/cim:GeneratingUnit.minimumOffTime>/g, obj, "minimumOffTime", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratingUnit.minOperatingP>([\s\S]*?)<\/cim:GeneratingUnit.minOperatingP>/g, obj, "minOperatingP", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratingUnit.modelDetail>([\s\S]*?)<\/cim:GeneratingUnit.modelDetail>/g, obj, "modelDetail", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratingUnit.nominalP>([\s\S]*?)<\/cim:GeneratingUnit.nominalP>/g, obj, "nominalP", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratingUnit.normalPF>([\s\S]*?)<\/cim:GeneratingUnit.normalPF>/g, obj, "normalPF", base.to_float, sub, context);
            base.parse_element (/<cim:GeneratingUnit.penaltyFactor>([\s\S]*?)<\/cim:GeneratingUnit.penaltyFactor>/g, obj, "penaltyFactor", base.to_float, sub, context);
            base.parse_element (/<cim:GeneratingUnit.raiseRampRate>([\s\S]*?)<\/cim:GeneratingUnit.raiseRampRate>/g, obj, "raiseRampRate", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratingUnit.ratedGrossMaxP>([\s\S]*?)<\/cim:GeneratingUnit.ratedGrossMaxP>/g, obj, "ratedGrossMaxP", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratingUnit.ratedGrossMinP>([\s\S]*?)<\/cim:GeneratingUnit.ratedGrossMinP>/g, obj, "ratedGrossMinP", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratingUnit.ratedNetMaxP>([\s\S]*?)<\/cim:GeneratingUnit.ratedNetMaxP>/g, obj, "ratedNetMaxP", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratingUnit.shortPF>([\s\S]*?)<\/cim:GeneratingUnit.shortPF>/g, obj, "shortPF", base.to_float, sub, context);
            base.parse_element (/<cim:GeneratingUnit.startupCost>([\s\S]*?)<\/cim:GeneratingUnit.startupCost>/g, obj, "startupCost", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratingUnit.startupTime>([\s\S]*?)<\/cim:GeneratingUnit.startupTime>/g, obj, "startupTime", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratingUnit.tieLinePF>([\s\S]*?)<\/cim:GeneratingUnit.tieLinePF>/g, obj, "tieLinePF", base.to_float, sub, context);
            base.parse_element (/<cim:GeneratingUnit.variableCost>([\s\S]*?)<\/cim:GeneratingUnit.variableCost>/g, obj, "variableCost", base.to_string, sub, context);
            base.parse_element (/<cim:GeneratingUnit.totalEfficiency>([\s\S]*?)<\/cim:GeneratingUnit.totalEfficiency>/g, obj, "totalEfficiency", base.to_string, sub, context);
            base.parse_attribute (/<cim:GeneratingUnit.GenUnitOpSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GenUnitOpSchedule", sub, context);
            bucket = context.parsed.GeneratingUnit;
            if (null == bucket)
                context.parsed.GeneratingUnit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GeneratingUnit (obj, exporters, full)
        {
            var fields = exporters["Equipment"](obj, exporters, false);

            base.export_element (obj, "GeneratingUnit", "allocSpinResP", base.from_string, fields);
            base.export_element (obj, "GeneratingUnit", "autoCntrlMarginP", base.from_string, fields);
            base.export_element (obj, "GeneratingUnit", "baseP", base.from_string, fields);
            base.export_element (obj, "GeneratingUnit", "controlDeadband", base.from_string, fields);
            base.export_element (obj, "GeneratingUnit", "controlPulseHigh", base.from_string, fields);
            base.export_element (obj, "GeneratingUnit", "controlPulseLow", base.from_string, fields);
            base.export_element (obj, "GeneratingUnit", "controlResponseRate", base.from_string, fields);
            base.export_element (obj, "GeneratingUnit", "efficiency", base.from_string, fields);
            base.export_element (obj, "GeneratingUnit", "genControlMode", base.from_string, fields);
            base.export_element (obj, "GeneratingUnit", "genControlSource", base.from_string, fields);
            base.export_element (obj, "GeneratingUnit", "governorMPL", base.from_string, fields);
            base.export_element (obj, "GeneratingUnit", "governorSCD", base.from_string, fields);
            base.export_element (obj, "GeneratingUnit", "highControlLimit", base.from_string, fields);
            base.export_element (obj, "GeneratingUnit", "initialP", base.from_string, fields);
            base.export_element (obj, "GeneratingUnit", "longPF", base.from_float, fields);
            base.export_element (obj, "GeneratingUnit", "lowControlLimit", base.from_string, fields);
            base.export_element (obj, "GeneratingUnit", "lowerRampRate", base.from_string, fields);
            base.export_element (obj, "GeneratingUnit", "maxEconomicP", base.from_string, fields);
            base.export_element (obj, "GeneratingUnit", "maximumAllowableSpinningReserve", base.from_string, fields);
            base.export_element (obj, "GeneratingUnit", "maxOperatingP", base.from_string, fields);
            base.export_element (obj, "GeneratingUnit", "minEconomicP", base.from_string, fields);
            base.export_element (obj, "GeneratingUnit", "minimumOffTime", base.from_string, fields);
            base.export_element (obj, "GeneratingUnit", "minOperatingP", base.from_string, fields);
            base.export_element (obj, "GeneratingUnit", "modelDetail", base.from_string, fields);
            base.export_element (obj, "GeneratingUnit", "nominalP", base.from_string, fields);
            base.export_element (obj, "GeneratingUnit", "normalPF", base.from_float, fields);
            base.export_element (obj, "GeneratingUnit", "penaltyFactor", base.from_float, fields);
            base.export_element (obj, "GeneratingUnit", "raiseRampRate", base.from_string, fields);
            base.export_element (obj, "GeneratingUnit", "ratedGrossMaxP", base.from_string, fields);
            base.export_element (obj, "GeneratingUnit", "ratedGrossMinP", base.from_string, fields);
            base.export_element (obj, "GeneratingUnit", "ratedNetMaxP", base.from_string, fields);
            base.export_element (obj, "GeneratingUnit", "shortPF", base.from_float, fields);
            base.export_element (obj, "GeneratingUnit", "startupCost", base.from_string, fields);
            base.export_element (obj, "GeneratingUnit", "startupTime", base.from_string, fields);
            base.export_element (obj, "GeneratingUnit", "tieLinePF", base.from_float, fields);
            base.export_element (obj, "GeneratingUnit", "variableCost", base.from_string, fields);
            base.export_element (obj, "GeneratingUnit", "totalEfficiency", base.from_string, fields);
            base.export_attribute (obj, "GeneratingUnit", "GenUnitOpSchedule", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A hydro power station which can generate or pump.
         *
         * When generating, the generator turbines receive water from an upper reservoir. When pumping, the pumps receive their water from a lower reservoir.
         *
         */
        function parse_HydroPowerPlant (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "HydroPowerPlant";
            base.parse_element (/<cim:HydroPowerPlant.dischargeTravelDelay>([\s\S]*?)<\/cim:HydroPowerPlant.dischargeTravelDelay>/g, obj, "dischargeTravelDelay", base.to_string, sub, context);
            base.parse_element (/<cim:HydroPowerPlant.genRatedP>([\s\S]*?)<\/cim:HydroPowerPlant.genRatedP>/g, obj, "genRatedP", base.to_string, sub, context);
            base.parse_element (/<cim:HydroPowerPlant.hydroPlantStorageType>([\s\S]*?)<\/cim:HydroPowerPlant.hydroPlantStorageType>/g, obj, "hydroPlantStorageType", base.to_string, sub, context);
            base.parse_element (/<cim:HydroPowerPlant.penstockType>([\s\S]*?)<\/cim:HydroPowerPlant.penstockType>/g, obj, "penstockType", base.to_string, sub, context);
            base.parse_element (/<cim:HydroPowerPlant.plantDischargeCapacity>([\s\S]*?)<\/cim:HydroPowerPlant.plantDischargeCapacity>/g, obj, "plantDischargeCapacity", base.to_string, sub, context);
            base.parse_element (/<cim:HydroPowerPlant.plantRatedHead>([\s\S]*?)<\/cim:HydroPowerPlant.plantRatedHead>/g, obj, "plantRatedHead", base.to_string, sub, context);
            base.parse_element (/<cim:HydroPowerPlant.pumpRatedP>([\s\S]*?)<\/cim:HydroPowerPlant.pumpRatedP>/g, obj, "pumpRatedP", base.to_string, sub, context);
            base.parse_element (/<cim:HydroPowerPlant.surgeTankCode>([\s\S]*?)<\/cim:HydroPowerPlant.surgeTankCode>/g, obj, "surgeTankCode", base.to_string, sub, context);
            base.parse_element (/<cim:HydroPowerPlant.surgeTankCrestLevel>([\s\S]*?)<\/cim:HydroPowerPlant.surgeTankCrestLevel>/g, obj, "surgeTankCrestLevel", base.to_string, sub, context);
            base.parse_attribute (/<cim:HydroPowerPlant.Reservoir\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Reservoir", sub, context);
            base.parse_attribute (/<cim:HydroPowerPlant.GenSourcePumpDischargeReservoir\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GenSourcePumpDischargeReservoir", sub, context);
            bucket = context.parsed.HydroPowerPlant;
            if (null == bucket)
                context.parsed.HydroPowerPlant = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_HydroPowerPlant (obj, exporters, full)
        {
            var fields = exporters["PowerSystemResource"](obj, exporters, false);

            base.export_element (obj, "HydroPowerPlant", "dischargeTravelDelay", base.from_string, fields);
            base.export_element (obj, "HydroPowerPlant", "genRatedP", base.from_string, fields);
            base.export_element (obj, "HydroPowerPlant", "hydroPlantStorageType", base.from_string, fields);
            base.export_element (obj, "HydroPowerPlant", "penstockType", base.from_string, fields);
            base.export_element (obj, "HydroPowerPlant", "plantDischargeCapacity", base.from_string, fields);
            base.export_element (obj, "HydroPowerPlant", "plantRatedHead", base.from_string, fields);
            base.export_element (obj, "HydroPowerPlant", "pumpRatedP", base.from_string, fields);
            base.export_element (obj, "HydroPowerPlant", "surgeTankCode", base.from_string, fields);
            base.export_element (obj, "HydroPowerPlant", "surgeTankCrestLevel", base.from_string, fields);
            base.export_attribute (obj, "HydroPowerPlant", "Reservoir", fields);
            base.export_attribute (obj, "HydroPowerPlant", "GenSourcePumpDischargeReservoir", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The hydro pump's Operator-approved current operating schedule (or plan), typically produced with the aid of unit commitment type analyses.
         *
         * The unit's operating schedule status is typically given as: (0=unavailable) (1=avilable to startup or shutdown)  (2=must pump).
         *
         */
        function parse_HydroPumpOpSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_RegularIntervalSchedule (context, sub);
            obj.cls = "HydroPumpOpSchedule";
            base.parse_attribute (/<cim:HydroPumpOpSchedule.HydroPump\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HydroPump", sub, context);
            bucket = context.parsed.HydroPumpOpSchedule;
            if (null == bucket)
                context.parsed.HydroPumpOpSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_HydroPumpOpSchedule (obj, exporters, full)
        {
            var fields = exporters["RegularIntervalSchedule"](obj, exporters, false);

            base.export_attribute (obj, "HydroPumpOpSchedule", "HydroPump", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Relationship between the rate in gross active power/minute (Y-axis) at which a unit should be shutdown and its present gross MW output (X-axis).
         *
         */
        function parse_ShutdownCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "ShutdownCurve";
            base.parse_element (/<cim:ShutdownCurve.shutdownCost>([\s\S]*?)<\/cim:ShutdownCurve.shutdownCost>/g, obj, "shutdownCost", base.to_string, sub, context);
            base.parse_element (/<cim:ShutdownCurve.shutdownDate>([\s\S]*?)<\/cim:ShutdownCurve.shutdownDate>/g, obj, "shutdownDate", base.to_datetime, sub, context);
            base.parse_attribute (/<cim:ShutdownCurve.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context);
            bucket = context.parsed.ShutdownCurve;
            if (null == bucket)
                context.parsed.ShutdownCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ShutdownCurve (obj, exporters, full)
        {
            var fields = exporters["Curve"](obj, exporters, false);

            base.export_element (obj, "ShutdownCurve", "shutdownCost", base.from_string, fields);
            base.export_element (obj, "ShutdownCurve", "shutdownDate", base.from_datetime, fields);
            base.export_attribute (obj, "ShutdownCurve", "ThermalGeneratingUnit", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Accounts for tracking emissions usage and credits for thermal generating units.
         *
         * A unit may have zero or more emission accounts, and will typically have one for tracking usage and one for tracking credits.
         *
         */
        function parse_EmissionAccount (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "EmissionAccount";
            base.parse_element (/<cim:EmissionAccount.emissionType>([\s\S]*?)<\/cim:EmissionAccount.emissionType>/g, obj, "emissionType", base.to_string, sub, context);
            base.parse_element (/<cim:EmissionAccount.emissionValueSource>([\s\S]*?)<\/cim:EmissionAccount.emissionValueSource>/g, obj, "emissionValueSource", base.to_string, sub, context);
            base.parse_attribute (/<cim:EmissionAccount.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context);
            bucket = context.parsed.EmissionAccount;
            if (null == bucket)
                context.parsed.EmissionAccount = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_EmissionAccount (obj, exporters, full)
        {
            var fields = exporters["Curve"](obj, exporters, false);

            base.export_element (obj, "EmissionAccount", "emissionType", base.from_string, fields);
            base.export_element (obj, "EmissionAccount", "emissionValueSource", base.from_string, fields);
            base.export_attribute (obj, "EmissionAccount", "ThermalGeneratingUnit", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Relationship between unit heat input in energy per time for main fuel (Y1-axis) and supplemental fuel (Y2-axis) versus unit output in active power (X-axis).
         *
         * The quantity of main fuel used to sustain generation at this output level is prorated for throttling between definition points. The quantity of supplemental fuel used at this output level is fixed and not prorated.
         *
         */
        function parse_HeatInputCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "HeatInputCurve";
            base.parse_element (/<cim:HeatInputCurve.auxPowerMult>([\s\S]*?)<\/cim:HeatInputCurve.auxPowerMult>/g, obj, "auxPowerMult", base.to_string, sub, context);
            base.parse_element (/<cim:HeatInputCurve.auxPowerOffset>([\s\S]*?)<\/cim:HeatInputCurve.auxPowerOffset>/g, obj, "auxPowerOffset", base.to_string, sub, context);
            base.parse_element (/<cim:HeatInputCurve.heatInputEff>([\s\S]*?)<\/cim:HeatInputCurve.heatInputEff>/g, obj, "heatInputEff", base.to_string, sub, context);
            base.parse_element (/<cim:HeatInputCurve.heatInputOffset>([\s\S]*?)<\/cim:HeatInputCurve.heatInputOffset>/g, obj, "heatInputOffset", base.to_string, sub, context);
            base.parse_element (/<cim:HeatInputCurve.isNetGrossP>([\s\S]*?)<\/cim:HeatInputCurve.isNetGrossP>/g, obj, "isNetGrossP", base.to_boolean, sub, context);
            base.parse_attribute (/<cim:HeatInputCurve.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context);
            bucket = context.parsed.HeatInputCurve;
            if (null == bucket)
                context.parsed.HeatInputCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_HeatInputCurve (obj, exporters, full)
        {
            var fields = exporters["Curve"](obj, exporters, false);

            base.export_element (obj, "HeatInputCurve", "auxPowerMult", base.from_string, fields);
            base.export_element (obj, "HeatInputCurve", "auxPowerOffset", base.from_string, fields);
            base.export_element (obj, "HeatInputCurve", "heatInputEff", base.from_string, fields);
            base.export_element (obj, "HeatInputCurve", "heatInputOffset", base.from_string, fields);
            base.export_element (obj, "HeatInputCurve", "isNetGrossP", base.from_boolean, fields);
            base.export_attribute (obj, "HeatInputCurve", "ThermalGeneratingUnit", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Unit start up characteristics depending on how long the unit has been off line.
         *
         */
        function parse_StartupModel (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "StartupModel";
            base.parse_element (/<cim:StartupModel.fixedMaintCost>([\s\S]*?)<\/cim:StartupModel.fixedMaintCost>/g, obj, "fixedMaintCost", base.to_string, sub, context);
            base.parse_element (/<cim:StartupModel.hotStandbyHeat>([\s\S]*?)<\/cim:StartupModel.hotStandbyHeat>/g, obj, "hotStandbyHeat", base.to_string, sub, context);
            base.parse_element (/<cim:StartupModel.incrementalMaintCost>([\s\S]*?)<\/cim:StartupModel.incrementalMaintCost>/g, obj, "incrementalMaintCost", base.to_string, sub, context);
            base.parse_element (/<cim:StartupModel.minimumDownTime>([\s\S]*?)<\/cim:StartupModel.minimumDownTime>/g, obj, "minimumDownTime", base.to_string, sub, context);
            base.parse_element (/<cim:StartupModel.minimumRunTime>([\s\S]*?)<\/cim:StartupModel.minimumRunTime>/g, obj, "minimumRunTime", base.to_string, sub, context);
            base.parse_element (/<cim:StartupModel.riskFactorCost>([\s\S]*?)<\/cim:StartupModel.riskFactorCost>/g, obj, "riskFactorCost", base.to_string, sub, context);
            base.parse_element (/<cim:StartupModel.startupCost>([\s\S]*?)<\/cim:StartupModel.startupCost>/g, obj, "startupCost", base.to_string, sub, context);
            base.parse_element (/<cim:StartupModel.startupDate>([\s\S]*?)<\/cim:StartupModel.startupDate>/g, obj, "startupDate", base.to_datetime, sub, context);
            base.parse_element (/<cim:StartupModel.startupPriority>([\s\S]*?)<\/cim:StartupModel.startupPriority>/g, obj, "startupPriority", base.to_string, sub, context);
            base.parse_element (/<cim:StartupModel.stbyAuxP>([\s\S]*?)<\/cim:StartupModel.stbyAuxP>/g, obj, "stbyAuxP", base.to_string, sub, context);
            base.parse_attribute (/<cim:StartupModel.StartIgnFuelCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StartIgnFuelCurve", sub, context);
            base.parse_attribute (/<cim:StartupModel.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context);
            base.parse_attribute (/<cim:StartupModel.StartMainFuelCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StartMainFuelCurve", sub, context);
            base.parse_attribute (/<cim:StartupModel.StartRampCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StartRampCurve", sub, context);
            bucket = context.parsed.StartupModel;
            if (null == bucket)
                context.parsed.StartupModel = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_StartupModel (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "StartupModel", "fixedMaintCost", base.from_string, fields);
            base.export_element (obj, "StartupModel", "hotStandbyHeat", base.from_string, fields);
            base.export_element (obj, "StartupModel", "incrementalMaintCost", base.from_string, fields);
            base.export_element (obj, "StartupModel", "minimumDownTime", base.from_string, fields);
            base.export_element (obj, "StartupModel", "minimumRunTime", base.from_string, fields);
            base.export_element (obj, "StartupModel", "riskFactorCost", base.from_string, fields);
            base.export_element (obj, "StartupModel", "startupCost", base.from_string, fields);
            base.export_element (obj, "StartupModel", "startupDate", base.from_datetime, fields);
            base.export_element (obj, "StartupModel", "startupPriority", base.from_string, fields);
            base.export_element (obj, "StartupModel", "stbyAuxP", base.from_string, fields);
            base.export_attribute (obj, "StartupModel", "StartIgnFuelCurve", fields);
            base.export_attribute (obj, "StartupModel", "ThermalGeneratingUnit", fields);
            base.export_attribute (obj, "StartupModel", "StartMainFuelCurve", fields);
            base.export_attribute (obj, "StartupModel", "StartRampCurve", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Cost, in units of currency, per quantity of heat generated.
         *
         */
        function parse_CostPerHeatUnit (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CostPerHeatUnit";
            base.parse_element (/<cim:CostPerHeatUnit.denominatorMultiplier>([\s\S]*?)<\/cim:CostPerHeatUnit.denominatorMultiplier>/g, obj, "denominatorMultiplier", base.to_string, sub, context);
            base.parse_element (/<cim:CostPerHeatUnit.denominatorUnit>([\s\S]*?)<\/cim:CostPerHeatUnit.denominatorUnit>/g, obj, "denominatorUnit", base.to_string, sub, context);
            base.parse_element (/<cim:CostPerHeatUnit.multiplier>([\s\S]*?)<\/cim:CostPerHeatUnit.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
            base.parse_element (/<cim:CostPerHeatUnit.unit>([\s\S]*?)<\/cim:CostPerHeatUnit.unit>/g, obj, "unit", base.to_string, sub, context);
            base.parse_element (/<cim:CostPerHeatUnit.value>([\s\S]*?)<\/cim:CostPerHeatUnit.value>/g, obj, "value", base.to_float, sub, context);
            bucket = context.parsed.CostPerHeatUnit;
            if (null == bucket)
                context.parsed.CostPerHeatUnit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CostPerHeatUnit (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "CostPerHeatUnit", "denominatorMultiplier", base.from_string, fields);
            base.export_element (obj, "CostPerHeatUnit", "denominatorUnit", base.from_string, fields);
            base.export_element (obj, "CostPerHeatUnit", "multiplier", base.from_string, fields);
            base.export_element (obj, "CostPerHeatUnit", "unit", base.from_string, fields);
            base.export_element (obj, "CostPerHeatUnit", "value", base.from_float, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A set of combustion turbines and steam turbines where the exhaust heat from the combustion turbines is recovered to make steam for the steam turbines, resulting in greater overall plant efficiency.
         *
         */
        function parse_CombinedCyclePlant (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "CombinedCyclePlant";
            base.parse_element (/<cim:CombinedCyclePlant.combCyclePlantRating>([\s\S]*?)<\/cim:CombinedCyclePlant.combCyclePlantRating>/g, obj, "combCyclePlantRating", base.to_string, sub, context);
            bucket = context.parsed.CombinedCyclePlant;
            if (null == bucket)
                context.parsed.CombinedCyclePlant = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CombinedCyclePlant (obj, exporters, full)
        {
            var fields = exporters["PowerSystemResource"](obj, exporters, false);

            base.export_element (obj, "CombinedCyclePlant", "combCyclePlantRating", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Reservoir water level targets from advanced studies or "rule curves".
         *
         * Typically in one hour increments for up to 10 days.
         *
         */
        function parse_TargetLevelSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "TargetLevelSchedule";
            base.parse_element (/<cim:TargetLevelSchedule.highLevelLimit>([\s\S]*?)<\/cim:TargetLevelSchedule.highLevelLimit>/g, obj, "highLevelLimit", base.to_string, sub, context);
            base.parse_element (/<cim:TargetLevelSchedule.lowLevelLimit>([\s\S]*?)<\/cim:TargetLevelSchedule.lowLevelLimit>/g, obj, "lowLevelLimit", base.to_string, sub, context);
            base.parse_attribute (/<cim:TargetLevelSchedule.Reservoir\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Reservoir", sub, context);
            bucket = context.parsed.TargetLevelSchedule;
            if (null == bucket)
                context.parsed.TargetLevelSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TargetLevelSchedule (obj, exporters, full)
        {
            var fields = exporters["Curve"](obj, exporters, false);

            base.export_element (obj, "TargetLevelSchedule", "highLevelLimit", base.from_string, fields);
            base.export_element (obj, "TargetLevelSchedule", "lowLevelLimit", base.from_string, fields);
            base.export_attribute (obj, "TargetLevelSchedule", "Reservoir", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A generating unit whose prime mover could be a steam turbine, combustion turbine, or diesel engine.
         *
         */
        function parse_ThermalGeneratingUnit (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_GeneratingUnit (context, sub);
            obj.cls = "ThermalGeneratingUnit";
            base.parse_element (/<cim:ThermalGeneratingUnit.oMCost>([\s\S]*?)<\/cim:ThermalGeneratingUnit.oMCost>/g, obj, "oMCost", base.to_string, sub, context);
            base.parse_attribute (/<cim:ThermalGeneratingUnit.ShutdownCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ShutdownCurve", sub, context);
            base.parse_attribute (/<cim:ThermalGeneratingUnit.CogenerationPlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CogenerationPlant", sub, context);
            base.parse_attribute (/<cim:ThermalGeneratingUnit.HeatRateCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HeatRateCurve", sub, context);
            base.parse_attribute (/<cim:ThermalGeneratingUnit.CAESPlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CAESPlant", sub, context);
            base.parse_attribute (/<cim:ThermalGeneratingUnit.StartupModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StartupModel", sub, context);
            base.parse_attribute (/<cim:ThermalGeneratingUnit.CombinedCyclePlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CombinedCyclePlant", sub, context);
            base.parse_attribute (/<cim:ThermalGeneratingUnit.IncrementalHeatRateCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "IncrementalHeatRateCurve", sub, context);
            base.parse_attribute (/<cim:ThermalGeneratingUnit.HeatInputCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HeatInputCurve", sub, context);
            bucket = context.parsed.ThermalGeneratingUnit;
            if (null == bucket)
                context.parsed.ThermalGeneratingUnit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ThermalGeneratingUnit (obj, exporters, full)
        {
            var fields = exporters["GeneratingUnit"](obj, exporters, false);

            base.export_element (obj, "ThermalGeneratingUnit", "oMCost", base.from_string, fields);
            base.export_attribute (obj, "ThermalGeneratingUnit", "ShutdownCurve", fields);
            base.export_attribute (obj, "ThermalGeneratingUnit", "CogenerationPlant", fields);
            base.export_attribute (obj, "ThermalGeneratingUnit", "HeatRateCurve", fields);
            base.export_attribute (obj, "ThermalGeneratingUnit", "CAESPlant", fields);
            base.export_attribute (obj, "ThermalGeneratingUnit", "StartupModel", fields);
            base.export_attribute (obj, "ThermalGeneratingUnit", "CombinedCyclePlant", fields);
            base.export_attribute (obj, "ThermalGeneratingUnit", "IncrementalHeatRateCurve", fields);
            base.export_attribute (obj, "ThermalGeneratingUnit", "HeatInputCurve", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Natural water inflow to a reservoir, usually forecasted from predicted rain and snowmelt.
         *
         * Typically in one hour increments for up to 10 days. The forecast is given in average cubic meters per second over the time increment.
         *
         */
        function parse_InflowForecast (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_RegularIntervalSchedule (context, sub);
            obj.cls = "InflowForecast";
            base.parse_attribute (/<cim:InflowForecast.Reservoir\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Reservoir", sub, context);
            bucket = context.parsed.InflowForecast;
            if (null == bucket)
                context.parsed.InflowForecast = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_InflowForecast (obj, exporters, full)
        {
            var fields = exporters["RegularIntervalSchedule"](obj, exporters, false);

            base.export_attribute (obj, "InflowForecast", "Reservoir", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                parse_Emission: parse_Emission,
                parse_StartMainFuelCurve: parse_StartMainFuelCurve,
                parse_TailbayLossCurve: parse_TailbayLossCurve,
                export_CAESPlant: export_CAESPlant,
                export_FossilFuel: export_FossilFuel,
                export_ShutdownCurve: export_ShutdownCurve,
                parse_GenUnitOpSchedule: parse_GenUnitOpSchedule,
                parse_SteamSendoutSchedule: parse_SteamSendoutSchedule,
                parse_EmissionAccount: parse_EmissionAccount,
                export_TailbayLossCurve: export_TailbayLossCurve,
                export_FuelType: export_FuelType,
                export_InflowForecast: export_InflowForecast,
                parse_FuelType: parse_FuelType,
                parse_CogenerationPlant: parse_CogenerationPlant,
                parse_InflowForecast: parse_InflowForecast,
                export_HeatRate: export_HeatRate,
                parse_HydroPumpOpSchedule: parse_HydroPumpOpSchedule,
                export_EmissionType: export_EmissionType,
                parse_HydroPowerPlant: parse_HydroPowerPlant,
                export_GrossToNetActivePowerCurve: export_GrossToNetActivePowerCurve,
                export_EmissionCurve: export_EmissionCurve,
                parse_HydroEnergyConversionKind: parse_HydroEnergyConversionKind,
                parse_AirCompressor: parse_AirCompressor,
                parse_FossilFuel: parse_FossilFuel,
                parse_GenUnitOpCostCurve: parse_GenUnitOpCostCurve,
                parse_SolarGeneratingUnit: parse_SolarGeneratingUnit,
                parse_NuclearGeneratingUnit: parse_NuclearGeneratingUnit,
                parse_HeatRate: parse_HeatRate,
                export_TargetLevelSchedule: export_TargetLevelSchedule,
                parse_Reservoir: parse_Reservoir,
                export_EmissionValueSource: export_EmissionValueSource,
                parse_HeatInputCurve: parse_HeatInputCurve,
                export_StartIgnFuelCurve: export_StartIgnFuelCurve,
                parse_GrossToNetActivePowerCurve: parse_GrossToNetActivePowerCurve,
                parse_ThermalGeneratingUnit: parse_ThermalGeneratingUnit,
                export_HydroGeneratingUnit: export_HydroGeneratingUnit,
                parse_IncrementalHeatRateCurve: parse_IncrementalHeatRateCurve,
                export_StartRampCurve: export_StartRampCurve,
                export_StartMainFuelCurve: export_StartMainFuelCurve,
                export_StartupModel: export_StartupModel,
                export_CombinedCyclePlant: export_CombinedCyclePlant,
                export_NuclearGeneratingUnit: export_NuclearGeneratingUnit,
                export_GenUnitOpCostCurve: export_GenUnitOpCostCurve,
                export_GeneratorControlSource: export_GeneratorControlSource,
                parse_TargetLevelSchedule: parse_TargetLevelSchedule,
                export_CogenerationPlant: export_CogenerationPlant,
                export_WindGenUnitKind: export_WindGenUnitKind,
                export_GeneratorControlMode: export_GeneratorControlMode,
                parse_StartRampCurve: parse_StartRampCurve,
                parse_Classification: parse_Classification,
                export_Emission: export_Emission,
                export_HeatRateCurve: export_HeatRateCurve,
                export_GenUnitOpSchedule: export_GenUnitOpSchedule,
                export_CostPerHeatUnit: export_CostPerHeatUnit,
                export_PenstockLossCurve: export_PenstockLossCurve,
                parse_GeneratorControlSource: parse_GeneratorControlSource,
                export_Reservoir: export_Reservoir,
                parse_CostPerHeatUnit: parse_CostPerHeatUnit,
                export_LevelVsVolumeCurve: export_LevelVsVolumeCurve,
                parse_HydroPlantStorageKind: parse_HydroPlantStorageKind,
                parse_PenstockLossCurve: parse_PenstockLossCurve,
                export_SolarGeneratingUnit: export_SolarGeneratingUnit,
                parse_StartupModel: parse_StartupModel,
                parse_ShutdownCurve: parse_ShutdownCurve,
                parse_CombinedCyclePlant: parse_CombinedCyclePlant,
                parse_HydroGeneratingEfficiencyCurve: parse_HydroGeneratingEfficiencyCurve,
                export_AirCompressor: export_AirCompressor,
                parse_HydroGeneratingUnit: parse_HydroGeneratingUnit,
                parse_WindGenUnitKind: parse_WindGenUnitKind,
                export_HydroPumpOpSchedule: export_HydroPumpOpSchedule,
                parse_EmissionValueSource: parse_EmissionValueSource,
                parse_GeneratorControlMode: parse_GeneratorControlMode,
                export_WindGeneratingUnit: export_WindGeneratingUnit,
                export_HydroPump: export_HydroPump,
                export_Classification: export_Classification,
                parse_EmissionType: parse_EmissionType,
                export_IncrementalHeatRateCurve: export_IncrementalHeatRateCurve,
                parse_EmissionCurve: parse_EmissionCurve,
                export_FuelAllocationSchedule: export_FuelAllocationSchedule,
                export_EmissionAccount: export_EmissionAccount,
                export_HydroGeneratingEfficiencyCurve: export_HydroGeneratingEfficiencyCurve,
                parse_GeneratingUnit: parse_GeneratingUnit,
                parse_HydroPump: parse_HydroPump,
                parse_StartIgnFuelCurve: parse_StartIgnFuelCurve,
                export_HydroPlantStorageKind: export_HydroPlantStorageKind,
                parse_CAESPlant: parse_CAESPlant,
                parse_LevelVsVolumeCurve: parse_LevelVsVolumeCurve,
                parse_FuelAllocationSchedule: parse_FuelAllocationSchedule,
                export_ThermalGeneratingUnit: export_ThermalGeneratingUnit,
                export_GeneratingUnit: export_GeneratingUnit,
                export_HydroEnergyConversionKind: export_HydroEnergyConversionKind,
                export_SteamSendoutSchedule: export_SteamSendoutSchedule,
                parse_HeatRateCurve: parse_HeatRateCurve,
                parse_WindGeneratingUnit: parse_WindGeneratingUnit,
                export_HydroPowerPlant: export_HydroPowerPlant,
                export_HeatInputCurve: export_HeatInputCurve
            }
        );
    }
);