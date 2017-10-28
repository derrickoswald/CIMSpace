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
            /**
             * Energy conversion capability for generating.
             *
             */
            base.parse_element (/<cim:HydroGeneratingUnit.energyConversionCapability>([\s\S]*?)<\/cim:HydroGeneratingUnit.energyConversionCapability>/g, obj, "energyConversionCapability", base.to_string, sub, context);

            /**
             * The equivalent cost of water that drives the hydro turbine.
             *
             */
            base.parse_element (/<cim:HydroGeneratingUnit.hydroUnitWaterCost>([\s\S]*?)<\/cim:HydroGeneratingUnit.hydroUnitWaterCost>/g, obj, "hydroUnitWaterCost", base.to_string, sub, context);

            /**
             * A hydro generating unit has a penstock loss curve.
             *
             */
            base.parse_attribute (/<cim:HydroGeneratingUnit.PenstockLossCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PenstockLossCurve", sub, context, true);

            /**
             * The hydro generating unit belongs to a hydro power plant.
             *
             */
            base.parse_attribute (/<cim:HydroGeneratingUnit.HydroPowerPlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HydroPowerPlant", sub, context, true);

            bucket = context.parsed.HydroGeneratingUnit;
            if (null == bucket)
                context.parsed.HydroGeneratingUnit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Able to generate power, but not able to pump water for energy storage.
             *
             */
            base.parse_element (/<cim:HydroEnergyConversionKind.generator>([\s\S]*?)<\/cim:HydroEnergyConversionKind.generator>/g, obj, "generator", base.to_string, sub, context);

            /**
             * Able to both generate power and pump water for energy storage.
             *
             */
            base.parse_element (/<cim:HydroEnergyConversionKind.pumpAndGenerator>([\s\S]*?)<\/cim:HydroEnergyConversionKind.pumpAndGenerator>/g, obj, "pumpAndGenerator", base.to_string, sub, context);

            bucket = context.parsed.HydroEnergyConversionKind;
            if (null == bucket)
                context.parsed.HydroEnergyConversionKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The kind of wind generating unit
             *
             */
            base.parse_element (/<cim:WindGeneratingUnit.windGenUnitType>([\s\S]*?)<\/cim:WindGeneratingUnit.windGenUnitType>/g, obj, "windGenUnitType", base.to_string, sub, context);

            bucket = context.parsed.WindGeneratingUnit;
            if (null == bucket)
                context.parsed.WindGeneratingUnit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The wind generating unit is located offshore.
             *
             */
            base.parse_element (/<cim:WindGenUnitKind.offshore>([\s\S]*?)<\/cim:WindGenUnitKind.offshore>/g, obj, "offshore", base.to_string, sub, context);

            /**
             * The wind generating unit is located onshore.
             *
             */
            base.parse_element (/<cim:WindGenUnitKind.onshore>([\s\S]*?)<\/cim:WindGenUnitKind.onshore>/g, obj, "onshore", base.to_string, sub, context);

            bucket = context.parsed.WindGenUnitKind;
            if (null == bucket)
                context.parsed.WindGenUnitKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The pumping discharge under maximum head conditions, usually at full gate.
             *
             */
            base.parse_element (/<cim:HydroPump.pumpDischAtMaxHead>([\s\S]*?)<\/cim:HydroPump.pumpDischAtMaxHead>/g, obj, "pumpDischAtMaxHead", base.to_string, sub, context);

            /**
             * The pumping discharge under minimum head conditions, usually at full gate.
             *
             */
            base.parse_element (/<cim:HydroPump.pumpDischAtMinHead>([\s\S]*?)<\/cim:HydroPump.pumpDischAtMinHead>/g, obj, "pumpDischAtMinHead", base.to_string, sub, context);

            /**
             * The pumping power under maximum head conditions, usually at full gate.
             *
             */
            base.parse_element (/<cim:HydroPump.pumpPowerAtMaxHead>([\s\S]*?)<\/cim:HydroPump.pumpPowerAtMaxHead>/g, obj, "pumpPowerAtMaxHead", base.to_string, sub, context);

            /**
             * The pumping power under minimum head conditions, usually at full gate.
             *
             */
            base.parse_element (/<cim:HydroPump.pumpPowerAtMinHead>([\s\S]*?)<\/cim:HydroPump.pumpPowerAtMinHead>/g, obj, "pumpPowerAtMinHead", base.to_string, sub, context);

            /**
             * The synchronous machine drives the turbine which moves the water from a low elevation to a higher elevation.
             *
             * The direction of machine rotation for pumping may or may not be the same as for generating.
             *
             */
            base.parse_attribute (/<cim:HydroPump.RotatingMachine\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RotatingMachine", sub, context, true);

            /**
             * The hydro pump has a pumping schedule over time, indicating when pumping is to occur.
             *
             */
            base.parse_attribute (/<cim:HydroPump.HydroPumpOpSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HydroPumpOpSchedule", sub, context, true);

            /**
             * The hydro pump may be a member of a pumped storage plant or a pump for distributing water.
             *
             */
            base.parse_attribute (/<cim:HydroPump.HydroPowerPlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HydroPowerPlant", sub, context, true);

            bucket = context.parsed.HydroPump;
            if (null == bucket)
                context.parsed.HydroPump = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * A hydro generating unit has a penstock loss curve.
             *
             */
            base.parse_attribute (/<cim:PenstockLossCurve.HydroGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HydroGeneratingUnit", sub, context, true);

            bucket = context.parsed.PenstockLossCurve;
            if (null == bucket)
                context.parsed.PenstockLossCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The high pressure steam sendout.
             *
             */
            base.parse_element (/<cim:CogenerationPlant.cogenHPSendoutRating>([\s\S]*?)<\/cim:CogenerationPlant.cogenHPSendoutRating>/g, obj, "cogenHPSendoutRating", base.to_float, sub, context);

            /**
             * The high pressure steam rating.
             *
             */
            base.parse_element (/<cim:CogenerationPlant.cogenHPSteamRating>([\s\S]*?)<\/cim:CogenerationPlant.cogenHPSteamRating>/g, obj, "cogenHPSteamRating", base.to_float, sub, context);

            /**
             * The low pressure steam sendout.
             *
             */
            base.parse_element (/<cim:CogenerationPlant.cogenLPSendoutRating>([\s\S]*?)<\/cim:CogenerationPlant.cogenLPSendoutRating>/g, obj, "cogenLPSendoutRating", base.to_float, sub, context);

            /**
             * The low pressure steam rating.
             *
             */
            base.parse_element (/<cim:CogenerationPlant.cogenLPSteamRating>([\s\S]*?)<\/cim:CogenerationPlant.cogenLPSteamRating>/g, obj, "cogenLPSteamRating", base.to_float, sub, context);

            /**
             * The rated output active power of the cogeneration plant.
             *
             */
            base.parse_element (/<cim:CogenerationPlant.ratedP>([\s\S]*?)<\/cim:CogenerationPlant.ratedP>/g, obj, "ratedP", base.to_string, sub, context);

            /**
             * A cogeneration plant has a steam sendout schedule.
             *
             */
            base.parse_attribute (/<cim:CogenerationPlant.SteamSendoutSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SteamSendoutSchedule", sub, context, true);

            bucket = context.parsed.CogenerationPlant;
            if (null == bucket)
                context.parsed.CogenerationPlant = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Flag is set to true when output is expressed in net active power.
             *
             */
            base.parse_element (/<cim:IncrementalHeatRateCurve.isNetGrossP>([\s\S]*?)<\/cim:IncrementalHeatRateCurve.isNetGrossP>/g, obj, "isNetGrossP", base.to_boolean, sub, context);

            /**
             * A thermal generating unit may have an incremental heat rate curve.
             *
             */
            base.parse_attribute (/<cim:IncrementalHeatRateCurve.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context, true);

            bucket = context.parsed.IncrementalHeatRateCurve;
            if (null == bucket)
                context.parsed.IncrementalHeatRateCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Run of river.
             *
             */
            base.parse_element (/<cim:HydroPlantStorageKind.runOfRiver>([\s\S]*?)<\/cim:HydroPlantStorageKind.runOfRiver>/g, obj, "runOfRiver", base.to_string, sub, context);

            /**
             * Pumped storage.
             *
             */
            base.parse_element (/<cim:HydroPlantStorageKind.pumpedStorage>([\s\S]*?)<\/cim:HydroPlantStorageKind.pumpedStorage>/g, obj, "pumpedStorage", base.to_string, sub, context);

            /**
             * Storage.
             *
             */
            base.parse_element (/<cim:HydroPlantStorageKind.storage>([\s\S]*?)<\/cim:HydroPlantStorageKind.storage>/g, obj, "storage", base.to_string, sub, context);

            bucket = context.parsed.HydroPlantStorageKind;
            if (null == bucket)
                context.parsed.HydroPlantStorageKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Storage volume between the full supply level and the normal minimum operating level.
             *
             */
            base.parse_element (/<cim:Reservoir.activeStorageCapacity>([\s\S]*?)<\/cim:Reservoir.activeStorageCapacity>/g, obj, "activeStorageCapacity", base.to_string, sub, context);

            /**
             * The reservoir's energy storage rating in energy for given head conditions.
             *
             */
            base.parse_element (/<cim:Reservoir.energyStorageRating>([\s\S]*?)<\/cim:Reservoir.energyStorageRating>/g, obj, "energyStorageRating", base.to_float, sub, context);

            /**
             * Full supply level, above which water will spill.
             *
             * This can be the spillway crest level or the top of closed gates.
             *
             */
            base.parse_element (/<cim:Reservoir.fullSupplyLevel>([\s\S]*?)<\/cim:Reservoir.fullSupplyLevel>/g, obj, "fullSupplyLevel", base.to_string, sub, context);

            /**
             * Total capacity of reservoir.
             *
             */
            base.parse_element (/<cim:Reservoir.grossCapacity>([\s\S]*?)<\/cim:Reservoir.grossCapacity>/g, obj, "grossCapacity", base.to_string, sub, context);

            /**
             * Normal minimum operating level below which the penstocks will draw air.
             *
             */
            base.parse_element (/<cim:Reservoir.normalMinOperateLevel>([\s\S]*?)<\/cim:Reservoir.normalMinOperateLevel>/g, obj, "normalMinOperateLevel", base.to_string, sub, context);

            /**
             * River outlet works for riparian right releases or other purposes.
             *
             */
            base.parse_element (/<cim:Reservoir.riverOutletWorks>([\s\S]*?)<\/cim:Reservoir.riverOutletWorks>/g, obj, "riverOutletWorks", base.to_string, sub, context);

            /**
             * The spillway water travel delay to the next downstream reservoir.
             *
             */
            base.parse_element (/<cim:Reservoir.spillTravelDelay>([\s\S]*?)<\/cim:Reservoir.spillTravelDelay>/g, obj, "spillTravelDelay", base.to_string, sub, context);

            /**
             * The flow capacity of the spillway in cubic meters per second.
             *
             */
            base.parse_element (/<cim:Reservoir.spillwayCapacity>([\s\S]*?)<\/cim:Reservoir.spillwayCapacity>/g, obj, "spillwayCapacity", base.to_float, sub, context);

            /**
             * The length of the spillway crest.
             *
             */
            base.parse_element (/<cim:Reservoir.spillwayCrestLength>([\s\S]*?)<\/cim:Reservoir.spillwayCrestLength>/g, obj, "spillwayCrestLength", base.to_string, sub, context);

            /**
             * Spillway crest level above which water will spill.
             *
             */
            base.parse_element (/<cim:Reservoir.spillwayCrestLevel>([\s\S]*?)<\/cim:Reservoir.spillwayCrestLevel>/g, obj, "spillwayCrestLevel", base.to_string, sub, context);

            /**
             * Type of spillway gate, including parameters.
             *
             */
            base.parse_element (/<cim:Reservoir.spillWayGateType>([\s\S]*?)<\/cim:Reservoir.spillWayGateType>/g, obj, "spillWayGateType", base.to_string, sub, context);

            /**
             * A reservoir may have a water level target schedule.
             *
             */
            base.parse_attribute (/<cim:Reservoir.TargetLevelSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TargetLevelSchedule", sub, context, true);

            /**
             * A reservoir may spill into a downstream reservoir.
             *
             */
            base.parse_attribute (/<cim:Reservoir.SpillsFromReservoir\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SpillsFromReservoir", sub, context, true);

            bucket = context.parsed.Reservoir;
            if (null == bucket)
                context.parsed.Reservoir = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Type of ignition fuel.
             *
             */
            base.parse_element (/<cim:StartIgnFuelCurve.ignitionFuelType>([\s\S]*?)<\/cim:StartIgnFuelCurve.ignitionFuelType>/g, obj, "ignitionFuelType", base.to_string, sub, context);

            /**
             * The unit's startup model may have a startup ignition fuel curve.
             *
             */
            base.parse_attribute (/<cim:StartIgnFuelCurve.StartupModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StartupModel", sub, context, true);

            bucket = context.parsed.StartIgnFuelCurve;
            if (null == bucket)
                context.parsed.StartIgnFuelCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * A reservoir may have a level versus volume relationship.
             *
             */
            base.parse_attribute (/<cim:LevelVsVolumeCurve.Reservoir\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Reservoir", sub, context, true);

            bucket = context.parsed.LevelVsVolumeCurve;
            if (null == bucket)
                context.parsed.LevelVsVolumeCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * A generating unit may have a gross active power to net active power curve, describing the losses and auxiliary power requirements of the unit.
             *
             */
            base.parse_attribute (/<cim:GrossToNetActivePowerCurve.GeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingUnit", sub, context, true);

            bucket = context.parsed.GrossToNetActivePowerCurve;
            if (null == bucket)
                context.parsed.GrossToNetActivePowerCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Rating of the CAES air compressor.
             *
             */
            base.parse_element (/<cim:AirCompressor.airCompressorRating>([\s\S]*?)<\/cim:AirCompressor.airCompressorRating>/g, obj, "airCompressorRating", base.to_float, sub, context);

            /**
             * A CAES air compressor is driven by combustion turbine.
             *
             */
            base.parse_attribute (/<cim:AirCompressor.CombustionTurbine\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CombustionTurbine", sub, context, true);

            /**
             * An air compressor may be a member of a compressed air energy storage plant.
             *
             */
            base.parse_attribute (/<cim:AirCompressor.CAESPlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CAESPlant", sub, context, true);

            bucket = context.parsed.AirCompressor;
            if (null == bucket)
                context.parsed.AirCompressor = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The end time and date of the fuel allocation schedule.
             *
             */
            base.parse_element (/<cim:FuelAllocationSchedule.fuelAllocationEndDate>([\s\S]*?)<\/cim:FuelAllocationSchedule.fuelAllocationEndDate>/g, obj, "fuelAllocationEndDate", base.to_datetime, sub, context);

            /**
             * The start time and date of the fuel allocation schedule.
             *
             */
            base.parse_element (/<cim:FuelAllocationSchedule.fuelAllocationStartDate>([\s\S]*?)<\/cim:FuelAllocationSchedule.fuelAllocationStartDate>/g, obj, "fuelAllocationStartDate", base.to_datetime, sub, context);

            /**
             * The type of fuel, which also indicates the corresponding measurement unit.
             *
             */
            base.parse_element (/<cim:FuelAllocationSchedule.fuelType>([\s\S]*?)<\/cim:FuelAllocationSchedule.fuelType>/g, obj, "fuelType", base.to_string, sub, context);

            /**
             * The maximum amount fuel that is allocated for consumption for the scheduled time period.
             *
             */
            base.parse_element (/<cim:FuelAllocationSchedule.maxFuelAllocation>([\s\S]*?)<\/cim:FuelAllocationSchedule.maxFuelAllocation>/g, obj, "maxFuelAllocation", base.to_float, sub, context);

            /**
             * The minimum amount fuel that is allocated for consumption for the scheduled time period, e.g., based on a "take-or-pay" contract.
             *
             */
            base.parse_element (/<cim:FuelAllocationSchedule.minFuelAllocation>([\s\S]*?)<\/cim:FuelAllocationSchedule.minFuelAllocation>/g, obj, "minFuelAllocation", base.to_float, sub, context);

            /**
             * A fuel allocation schedule must have a fossil fuel.
             *
             */
            base.parse_attribute (/<cim:FuelAllocationSchedule.FossilFuel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FossilFuel", sub, context, true);

            /**
             * A thermal generating unit may have one or more fuel allocation schedules.
             *
             */
            base.parse_attribute (/<cim:FuelAllocationSchedule.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context, true);

            bucket = context.parsed.FuelAllocationSchedule;
            if (null == bucket)
                context.parsed.FuelAllocationSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Not available.
             *
             */
            base.parse_element (/<cim:GeneratorControlSource.unavailable>([\s\S]*?)<\/cim:GeneratorControlSource.unavailable>/g, obj, "unavailable", base.to_string, sub, context);

            /**
             * Off of automatic generation control (AGC).
             *
             */
            base.parse_element (/<cim:GeneratorControlSource.offAGC>([\s\S]*?)<\/cim:GeneratorControlSource.offAGC>/g, obj, "offAGC", base.to_string, sub, context);

            /**
             * On automatic generation control (AGC).
             *
             */
            base.parse_element (/<cim:GeneratorControlSource.onAGC>([\s\S]*?)<\/cim:GeneratorControlSource.onAGC>/g, obj, "onAGC", base.to_string, sub, context);

            /**
             * Plant is controlling.
             *
             */
            base.parse_element (/<cim:GeneratorControlSource.plantControl>([\s\S]*?)<\/cim:GeneratorControlSource.plantControl>/g, obj, "plantControl", base.to_string, sub, context);

            bucket = context.parsed.GeneratorControlSource;
            if (null == bucket)
                context.parsed.GeneratorControlSource = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Sulfer dioxide.
             *
             */
            base.parse_element (/<cim:EmissionType.sulfurDioxide>([\s\S]*?)<\/cim:EmissionType.sulfurDioxide>/g, obj, "sulfurDioxide", base.to_string, sub, context);

            /**
             * Carbon diaoxide.
             *
             */
            base.parse_element (/<cim:EmissionType.carbonDioxide>([\s\S]*?)<\/cim:EmissionType.carbonDioxide>/g, obj, "carbonDioxide", base.to_string, sub, context);

            /**
             * Nitrogen oxide.
             *
             */
            base.parse_element (/<cim:EmissionType.nitrogenOxide>([\s\S]*?)<\/cim:EmissionType.nitrogenOxide>/g, obj, "nitrogenOxide", base.to_string, sub, context);

            /**
             * Hydrogen sulfide.
             *
             */
            base.parse_element (/<cim:EmissionType.hydrogenSulfide>([\s\S]*?)<\/cim:EmissionType.hydrogenSulfide>/g, obj, "hydrogenSulfide", base.to_string, sub, context);

            /**
             * Clorine.
             *
             */
            base.parse_element (/<cim:EmissionType.chlorine>([\s\S]*?)<\/cim:EmissionType.chlorine>/g, obj, "chlorine", base.to_string, sub, context);

            /**
             * Carbon disulfide.
             *
             */
            base.parse_element (/<cim:EmissionType.carbonDisulfide>([\s\S]*?)<\/cim:EmissionType.carbonDisulfide>/g, obj, "carbonDisulfide", base.to_string, sub, context);

            bucket = context.parsed.EmissionType;
            if (null == bucket)
                context.parsed.EmissionType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * A hydro generating unit has an efficiency curve.
             *
             */
            base.parse_attribute (/<cim:HydroGeneratingEfficiencyCurve.HydroGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HydroGeneratingUnit", sub, context, true);

            bucket = context.parsed.HydroGeneratingEfficiencyCurve;
            if (null == bucket)
                context.parsed.HydroGeneratingEfficiencyCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * A generating unit may have an operating schedule, indicating the planned operation of the unit.
             *
             */
            base.parse_attribute (/<cim:GenUnitOpSchedule.GeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingUnit", sub, context, true);

            bucket = context.parsed.GenUnitOpSchedule;
            if (null == bucket)
                context.parsed.GenUnitOpSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Flag is set to true when output is expressed in net active power.
             *
             */
            base.parse_element (/<cim:HeatRateCurve.isNetGrossP>([\s\S]*?)<\/cim:HeatRateCurve.isNetGrossP>/g, obj, "isNetGrossP", base.to_boolean, sub, context);

            /**
             * A thermal generating unit may have a heat rate curve.
             *
             */
            base.parse_attribute (/<cim:HeatRateCurve.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context, true);

            bucket = context.parsed.HeatRateCurve;
            if (null == bucket)
                context.parsed.HeatRateCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Generic coal, not including lignite type.
             *
             */
            base.parse_element (/<cim:FuelType.coal>([\s\S]*?)<\/cim:FuelType.coal>/g, obj, "coal", base.to_string, sub, context);

            /**
             * Oil.
             *
             */
            base.parse_element (/<cim:FuelType.oil>([\s\S]*?)<\/cim:FuelType.oil>/g, obj, "oil", base.to_string, sub, context);

            /**
             * Natural gas.
             *
             */
            base.parse_element (/<cim:FuelType.gas>([\s\S]*?)<\/cim:FuelType.gas>/g, obj, "gas", base.to_string, sub, context);

            /**
             * The fuel is lignite coal.
             *
             * Note that this is a special type of coal, so the other enum of coal is reserved for hard coal types or if the exact type of coal is not known.
             *
             */
            base.parse_element (/<cim:FuelType.lignite>([\s\S]*?)<\/cim:FuelType.lignite>/g, obj, "lignite", base.to_string, sub, context);

            /**
             * Hard coal
             *
             */
            base.parse_element (/<cim:FuelType.hardCoal>([\s\S]*?)<\/cim:FuelType.hardCoal>/g, obj, "hardCoal", base.to_string, sub, context);

            /**
             * Oil Shale
             *
             */
            base.parse_element (/<cim:FuelType.oilShale>([\s\S]*?)<\/cim:FuelType.oilShale>/g, obj, "oilShale", base.to_string, sub, context);

            bucket = context.parsed.FuelType;
            if (null == bucket)
                context.parsed.FuelType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Flag is set to true when output is expressed in net active power.
             *
             */
            base.parse_element (/<cim:GenUnitOpCostCurve.isNetGrossP>([\s\S]*?)<\/cim:GenUnitOpCostCurve.isNetGrossP>/g, obj, "isNetGrossP", base.to_boolean, sub, context);

            /**
             * A generating unit may have one or more cost curves, depending upon fuel mixture and fuel cost.
             *
             */
            base.parse_attribute (/<cim:GenUnitOpCostCurve.GeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingUnit", sub, context, true);

            bucket = context.parsed.GenUnitOpCostCurve;
            if (null == bucket)
                context.parsed.GenUnitOpCostCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * A cogeneration plant has a steam sendout schedule.
             *
             */
            base.parse_attribute (/<cim:SteamSendoutSchedule.CogenerationPlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CogenerationPlant", sub, context, true);

            bucket = context.parsed.SteamSendoutSchedule;
            if (null == bucket)
                context.parsed.SteamSendoutSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * A hydro generating unit has a tailbay loss curve.
             *
             */
            base.parse_attribute (/<cim:TailbayLossCurve.HydroGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HydroGeneratingUnit", sub, context, true);

            bucket = context.parsed.TailbayLossCurve;
            if (null == bucket)
                context.parsed.TailbayLossCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The rated energy storage capacity.
             *
             */
            base.parse_element (/<cim:CAESPlant.energyStorageCapacity>([\s\S]*?)<\/cim:CAESPlant.energyStorageCapacity>/g, obj, "energyStorageCapacity", base.to_string, sub, context);

            /**
             * The CAES plant's gross rated generating capacity.
             *
             */
            base.parse_element (/<cim:CAESPlant.ratedCapacityP>([\s\S]*?)<\/cim:CAESPlant.ratedCapacityP>/g, obj, "ratedCapacityP", base.to_string, sub, context);

            /**
             * A thermal generating unit may be a member of a compressed air energy storage plant.
             *
             */
            base.parse_attribute (/<cim:CAESPlant.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context, true);

            /**
             * An air compressor may be a member of a compressed air energy storage plant.
             *
             */
            base.parse_attribute (/<cim:CAESPlant.AirCompressor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AirCompressor", sub, context, true);

            bucket = context.parsed.CAESPlant;
            if (null == bucket)
                context.parsed.CAESPlant = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Measured.
             *
             */
            base.parse_element (/<cim:EmissionValueSource.measured>([\s\S]*?)<\/cim:EmissionValueSource.measured>/g, obj, "measured", base.to_string, sub, context);

            /**
             * Calculated.
             *
             */
            base.parse_element (/<cim:EmissionValueSource.calculated>([\s\S]*?)<\/cim:EmissionValueSource.calculated>/g, obj, "calculated", base.to_string, sub, context);

            bucket = context.parsed.EmissionValueSource;
            if (null == bucket)
                context.parsed.EmissionValueSource = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The emission content per quantity of fuel burned.
             *
             */
            base.parse_element (/<cim:EmissionCurve.emissionContent>([\s\S]*?)<\/cim:EmissionCurve.emissionContent>/g, obj, "emissionContent", base.to_string, sub, context);

            /**
             * The type of emission, which also gives the production rate measurement unit.
             *
             * The y1AxisUnits of the curve contains the unit of measure (e.g. kg) and the emissionType is the type of emission (e.g. sulfer dioxide).
             *
             */
            base.parse_element (/<cim:EmissionCurve.emissionType>([\s\S]*?)<\/cim:EmissionCurve.emissionType>/g, obj, "emissionType", base.to_string, sub, context);

            /**
             * Flag is set to true when output is expressed in net active power.
             *
             */
            base.parse_element (/<cim:EmissionCurve.isNetGrossP>([\s\S]*?)<\/cim:EmissionCurve.isNetGrossP>/g, obj, "isNetGrossP", base.to_boolean, sub, context);

            /**
             * A thermal generating unit may have  one or more emission curves.
             *
             */
            base.parse_attribute (/<cim:EmissionCurve.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context, true);

            bucket = context.parsed.EmissionCurve;
            if (null == bucket)
                context.parsed.EmissionCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Setpoint control mode.
             *
             */
            base.parse_element (/<cim:GeneratorControlMode.setpoint>([\s\S]*?)<\/cim:GeneratorControlMode.setpoint>/g, obj, "setpoint", base.to_string, sub, context);

            /**
             * Pulse control mode.
             *
             */
            base.parse_element (/<cim:GeneratorControlMode.pulse>([\s\S]*?)<\/cim:GeneratorControlMode.pulse>/g, obj, "pulse", base.to_string, sub, context);

            bucket = context.parsed.GeneratorControlMode;
            if (null == bucket)
                context.parsed.GeneratorControlMode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Type of main fuel.
             *
             */
            base.parse_element (/<cim:StartMainFuelCurve.mainFuelType>([\s\S]*?)<\/cim:StartMainFuelCurve.mainFuelType>/g, obj, "mainFuelType", base.to_string, sub, context);

            /**
             * The unit's startup model may have a startup main fuel curve.
             *
             */
            base.parse_attribute (/<cim:StartMainFuelCurve.StartupModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StartupModel", sub, context, true);

            bucket = context.parsed.StartMainFuelCurve;
            if (null == bucket)
                context.parsed.StartMainFuelCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The startup ramp rate in gross for a unit that is on hot standby.
             *
             */
            base.parse_element (/<cim:StartRampCurve.hotStandbyRamp>([\s\S]*?)<\/cim:StartRampCurve.hotStandbyRamp>/g, obj, "hotStandbyRamp", base.to_string, sub, context);

            /**
             * The unit's startup model may have a startup ramp curve.
             *
             */
            base.parse_attribute (/<cim:StartRampCurve.StartupModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StartupModel", sub, context, true);

            bucket = context.parsed.StartRampCurve;
            if (null == bucket)
                context.parsed.StartRampCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The type of fossil fuel, such as coal, oil, or gas.
             *
             */
            base.parse_element (/<cim:FossilFuel.fossilFuelType>([\s\S]*?)<\/cim:FossilFuel.fossilFuelType>/g, obj, "fossilFuelType", base.to_string, sub, context);

            /**
             * The cost in terms of heat value for the given type of fuel.
             *
             */
            base.parse_element (/<cim:FossilFuel.fuelCost>([\s\S]*?)<\/cim:FossilFuel.fuelCost>/g, obj, "fuelCost", base.to_string, sub, context);

            /**
             * The cost of fuel used for economic dispatching which includes: fuel cost, transportation cost,  and incremental maintenance cost.
             *
             */
            base.parse_element (/<cim:FossilFuel.fuelDispatchCost>([\s\S]*?)<\/cim:FossilFuel.fuelDispatchCost>/g, obj, "fuelDispatchCost", base.to_string, sub, context);

            /**
             * The efficiency factor for the fuel (per unit) in terms of the effective energy absorbed.
             *
             */
            base.parse_element (/<cim:FossilFuel.fuelEffFactor>([\s\S]*?)<\/cim:FossilFuel.fuelEffFactor>/g, obj, "fuelEffFactor", base.to_string, sub, context);

            /**
             * Handling and processing cost associated with this fuel.
             *
             */
            base.parse_element (/<cim:FossilFuel.fuelHandlingCost>([\s\S]*?)<\/cim:FossilFuel.fuelHandlingCost>/g, obj, "fuelHandlingCost", base.to_string, sub, context);

            /**
             * The amount of heat per weight (or volume) of the given type of fuel.
             *
             */
            base.parse_element (/<cim:FossilFuel.fuelHeatContent>([\s\S]*?)<\/cim:FossilFuel.fuelHeatContent>/g, obj, "fuelHeatContent", base.to_float, sub, context);

            /**
             * Relative amount of the given type of fuel, when multiple fuels are being consumed.
             *
             */
            base.parse_element (/<cim:FossilFuel.fuelMixture>([\s\S]*?)<\/cim:FossilFuel.fuelMixture>/g, obj, "fuelMixture", base.to_string, sub, context);

            /**
             * The fuel's fraction of pollution credit per unit of heat content.
             *
             */
            base.parse_element (/<cim:FossilFuel.fuelSulfur>([\s\S]*?)<\/cim:FossilFuel.fuelSulfur>/g, obj, "fuelSulfur", base.to_string, sub, context);

            /**
             * The active power output level of the unit at which the given type of fuel is switched on.
             *
             * This fuel (e.g., oil) is sometimes used to supplement the base fuel (e.g., coal) at high active power output levels.
             *
             */
            base.parse_element (/<cim:FossilFuel.highBreakpointP>([\s\S]*?)<\/cim:FossilFuel.highBreakpointP>/g, obj, "highBreakpointP", base.to_string, sub, context);

            /**
             * The active power output level of the unit at which the given type of fuel is switched off.
             *
             * This fuel (e.g., oil) is sometimes used to stabilize the base fuel (e.g., coal) at low active power output levels.
             *
             */
            base.parse_element (/<cim:FossilFuel.lowBreakpointP>([\s\S]*?)<\/cim:FossilFuel.lowBreakpointP>/g, obj, "lowBreakpointP", base.to_string, sub, context);

            /**
             * A thermal generating unit may have one or more fossil fuels.
             *
             */
            base.parse_attribute (/<cim:FossilFuel.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context, true);

            bucket = context.parsed.FossilFuel;
            if (null == bucket)
                context.parsed.FossilFuel = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The planned unused capacity (spinning reserve) which can be used to support emergency load.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.allocSpinResP>([\s\S]*?)<\/cim:GeneratingUnit.allocSpinResP>/g, obj, "allocSpinResP", base.to_string, sub, context);

            /**
             * The planned unused capacity which can be used to support automatic control overruns.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.autoCntrlMarginP>([\s\S]*?)<\/cim:GeneratingUnit.autoCntrlMarginP>/g, obj, "autoCntrlMarginP", base.to_string, sub, context);

            /**
             * For dispatchable units, this value represents the economic active power basepoint, for units that are not dispatchable, this value represents the fixed generation value.
             *
             * The value must be between the operating low and high limits.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.baseP>([\s\S]*?)<\/cim:GeneratingUnit.baseP>/g, obj, "baseP", base.to_string, sub, context);

            /**
             * Unit control error deadband.
             *
             * When a unit's desired active power change is less than this deadband, then no control pulses will be sent to the unit.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.controlDeadband>([\s\S]*?)<\/cim:GeneratingUnit.controlDeadband>/g, obj, "controlDeadband", base.to_string, sub, context);

            /**
             * Pulse high limit which is the largest control pulse that the unit can respond to.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.controlPulseHigh>([\s\S]*?)<\/cim:GeneratingUnit.controlPulseHigh>/g, obj, "controlPulseHigh", base.to_string, sub, context);

            /**
             * Pulse low limit which is the smallest control pulse that the unit can respond to.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.controlPulseLow>([\s\S]*?)<\/cim:GeneratingUnit.controlPulseLow>/g, obj, "controlPulseLow", base.to_string, sub, context);

            /**
             * Unit response rate which specifies the active power change for a control pulse of one second in the most responsive loading level of the unit.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.controlResponseRate>([\s\S]*?)<\/cim:GeneratingUnit.controlResponseRate>/g, obj, "controlResponseRate", base.to_string, sub, context);

            /**
             * The efficiency of the unit in converting mechanical energy, from the prime mover, into electrical energy.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.efficiency>([\s\S]*?)<\/cim:GeneratingUnit.efficiency>/g, obj, "efficiency", base.to_string, sub, context);

            /**
             * The unit control mode.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.genControlMode>([\s\S]*?)<\/cim:GeneratingUnit.genControlMode>/g, obj, "genControlMode", base.to_string, sub, context);

            /**
             * The source of controls for a generating unit.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.genControlSource>([\s\S]*?)<\/cim:GeneratingUnit.genControlSource>/g, obj, "genControlSource", base.to_string, sub, context);

            /**
             * Governor motor position limit.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.governorMPL>([\s\S]*?)<\/cim:GeneratingUnit.governorMPL>/g, obj, "governorMPL", base.to_string, sub, context);

            /**
             * Governor Speed Changer Droop.
             *
             * This is the change in generator power output divided by the change in frequency normalized by the nominal power of the generator and the nominal frequency and expressed in percent and negated. A positive value of speed change droop provides additional generator output upon a drop in frequency.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.governorSCD>([\s\S]*?)<\/cim:GeneratingUnit.governorSCD>/g, obj, "governorSCD", base.to_string, sub, context);

            /**
             * High limit for secondary (AGC) control.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.highControlLimit>([\s\S]*?)<\/cim:GeneratingUnit.highControlLimit>/g, obj, "highControlLimit", base.to_string, sub, context);

            /**
             * Default initial active power  which is used to store a powerflow result for the initial active power for this unit in this network configuration.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.initialP>([\s\S]*?)<\/cim:GeneratingUnit.initialP>/g, obj, "initialP", base.to_string, sub, context);

            /**
             * Generating unit long term economic participation factor.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.longPF>([\s\S]*?)<\/cim:GeneratingUnit.longPF>/g, obj, "longPF", base.to_float, sub, context);

            /**
             * Low limit for secondary (AGC) control.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.lowControlLimit>([\s\S]*?)<\/cim:GeneratingUnit.lowControlLimit>/g, obj, "lowControlLimit", base.to_string, sub, context);

            /**
             * The normal maximum rate the generating unit active power output can be lowered by control actions.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.lowerRampRate>([\s\S]*?)<\/cim:GeneratingUnit.lowerRampRate>/g, obj, "lowerRampRate", base.to_string, sub, context);

            /**
             * Maximum high economic active power limit, that should not exceed the maximum operating active power limit.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.maxEconomicP>([\s\S]*?)<\/cim:GeneratingUnit.maxEconomicP>/g, obj, "maxEconomicP", base.to_string, sub, context);

            /**
             * Maximum allowable spinning reserve.
             *
             * Spinning reserve will never be considered greater than this value regardless of the current operating point.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.maximumAllowableSpinningReserve>([\s\S]*?)<\/cim:GeneratingUnit.maximumAllowableSpinningReserve>/g, obj, "maximumAllowableSpinningReserve", base.to_string, sub, context);

            /**
             * This is the maximum operating active power limit the dispatcher can enter for this unit.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.maxOperatingP>([\s\S]*?)<\/cim:GeneratingUnit.maxOperatingP>/g, obj, "maxOperatingP", base.to_string, sub, context);

            /**
             * Low economic active power limit that must be greater than or equal to the minimum operating active power limit.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.minEconomicP>([\s\S]*?)<\/cim:GeneratingUnit.minEconomicP>/g, obj, "minEconomicP", base.to_string, sub, context);

            /**
             * Minimum time interval between unit shutdown and startup.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.minimumOffTime>([\s\S]*?)<\/cim:GeneratingUnit.minimumOffTime>/g, obj, "minimumOffTime", base.to_string, sub, context);

            /**
             * This is the minimum operating active power limit the dispatcher can enter for this unit.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.minOperatingP>([\s\S]*?)<\/cim:GeneratingUnit.minOperatingP>/g, obj, "minOperatingP", base.to_string, sub, context);

            /**
             * Detail level of the generator model data.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.modelDetail>([\s\S]*?)<\/cim:GeneratingUnit.modelDetail>/g, obj, "modelDetail", base.to_string, sub, context);

            /**
             * The nominal power of the generating unit.
             *
             * Used to give precise meaning to percentage based attributes such as the governor speed change droop (governorSCD attribute).
             *
             */
            base.parse_element (/<cim:GeneratingUnit.nominalP>([\s\S]*?)<\/cim:GeneratingUnit.nominalP>/g, obj, "nominalP", base.to_string, sub, context);

            /**
             * Generating unit economic participation factor.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.normalPF>([\s\S]*?)<\/cim:GeneratingUnit.normalPF>/g, obj, "normalPF", base.to_float, sub, context);

            /**
             * Defined as: 1 / ( 1 - Incremental Transmission Loss); with the Incremental Transmission Loss expressed as a plus or minus value.
             *
             * The typical range of penalty factors is (0.9 to 1.1).
             *
             */
            base.parse_element (/<cim:GeneratingUnit.penaltyFactor>([\s\S]*?)<\/cim:GeneratingUnit.penaltyFactor>/g, obj, "penaltyFactor", base.to_float, sub, context);

            /**
             * The normal maximum rate the generating unit active power output can be raised by control actions.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.raiseRampRate>([\s\S]*?)<\/cim:GeneratingUnit.raiseRampRate>/g, obj, "raiseRampRate", base.to_string, sub, context);

            /**
             * The unit's gross rated maximum capacity (book value).
             *
             */
            base.parse_element (/<cim:GeneratingUnit.ratedGrossMaxP>([\s\S]*?)<\/cim:GeneratingUnit.ratedGrossMaxP>/g, obj, "ratedGrossMaxP", base.to_string, sub, context);

            /**
             * The gross rated minimum generation level which the unit can safely operate at while delivering power to the transmission grid.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.ratedGrossMinP>([\s\S]*?)<\/cim:GeneratingUnit.ratedGrossMinP>/g, obj, "ratedGrossMinP", base.to_string, sub, context);

            /**
             * The net rated maximum capacity determined by subtracting the auxiliary power used to operate the internal plant machinery from the rated gross maximum capacity.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.ratedNetMaxP>([\s\S]*?)<\/cim:GeneratingUnit.ratedNetMaxP>/g, obj, "ratedNetMaxP", base.to_string, sub, context);

            /**
             * Generating unit short term economic participation factor.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.shortPF>([\s\S]*?)<\/cim:GeneratingUnit.shortPF>/g, obj, "shortPF", base.to_float, sub, context);

            /**
             * The initial startup cost incurred for each start of the GeneratingUnit.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.startupCost>([\s\S]*?)<\/cim:GeneratingUnit.startupCost>/g, obj, "startupCost", base.to_string, sub, context);

            /**
             * Time it takes to get the unit on-line, from the time that the prime mover mechanical power is applied.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.startupTime>([\s\S]*?)<\/cim:GeneratingUnit.startupTime>/g, obj, "startupTime", base.to_string, sub, context);

            /**
             * Generating unit economic participation factor.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.tieLinePF>([\s\S]*?)<\/cim:GeneratingUnit.tieLinePF>/g, obj, "tieLinePF", base.to_float, sub, context);

            /**
             * The variable cost component of production per unit of ActivePower.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.variableCost>([\s\S]*?)<\/cim:GeneratingUnit.variableCost>/g, obj, "variableCost", base.to_string, sub, context);

            /**
             * The efficiency of the unit in converting the fuel into electrical energy.
             *
             */
            base.parse_element (/<cim:GeneratingUnit.totalEfficiency>([\s\S]*?)<\/cim:GeneratingUnit.totalEfficiency>/g, obj, "totalEfficiency", base.to_string, sub, context);

            /**
             * A generating unit may have an operating schedule, indicating the planned operation of the unit.
             *
             */
            base.parse_attribute (/<cim:GeneratingUnit.GenUnitOpSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GenUnitOpSchedule", sub, context, true);

            bucket = context.parsed.GeneratingUnit;
            if (null == bucket)
                context.parsed.GeneratingUnit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Water travel delay from tailbay to next downstream hydro power station.
             *
             */
            base.parse_element (/<cim:HydroPowerPlant.dischargeTravelDelay>([\s\S]*?)<\/cim:HydroPowerPlant.dischargeTravelDelay>/g, obj, "dischargeTravelDelay", base.to_string, sub, context);

            /**
             * The hydro plant's generating rating active power for rated head conditions.
             *
             */
            base.parse_element (/<cim:HydroPowerPlant.genRatedP>([\s\S]*?)<\/cim:HydroPowerPlant.genRatedP>/g, obj, "genRatedP", base.to_string, sub, context);

            /**
             * The type of hydro power plant water storage.
             *
             */
            base.parse_element (/<cim:HydroPowerPlant.hydroPlantStorageType>([\s\S]*?)<\/cim:HydroPowerPlant.hydroPlantStorageType>/g, obj, "hydroPlantStorageType", base.to_string, sub, context);

            /**
             * Type and configuration of hydro plant penstock(s).
             *
             */
            base.parse_element (/<cim:HydroPowerPlant.penstockType>([\s\S]*?)<\/cim:HydroPowerPlant.penstockType>/g, obj, "penstockType", base.to_string, sub, context);

            /**
             * Total plant discharge capacity.
             *
             */
            base.parse_element (/<cim:HydroPowerPlant.plantDischargeCapacity>([\s\S]*?)<\/cim:HydroPowerPlant.plantDischargeCapacity>/g, obj, "plantDischargeCapacity", base.to_string, sub, context);

            /**
             * The plant's rated gross head.
             *
             */
            base.parse_element (/<cim:HydroPowerPlant.plantRatedHead>([\s\S]*?)<\/cim:HydroPowerPlant.plantRatedHead>/g, obj, "plantRatedHead", base.to_string, sub, context);

            /**
             * The hydro plant's pumping rating active power for rated head conditions.
             *
             */
            base.parse_element (/<cim:HydroPowerPlant.pumpRatedP>([\s\S]*?)<\/cim:HydroPowerPlant.pumpRatedP>/g, obj, "pumpRatedP", base.to_string, sub, context);

            /**
             * A code describing the type (or absence) of surge tank that is associated with the hydro power plant.
             *
             */
            base.parse_element (/<cim:HydroPowerPlant.surgeTankCode>([\s\S]*?)<\/cim:HydroPowerPlant.surgeTankCode>/g, obj, "surgeTankCode", base.to_string, sub, context);

            /**
             * The level at which the surge tank spills.
             *
             */
            base.parse_element (/<cim:HydroPowerPlant.surgeTankCrestLevel>([\s\S]*?)<\/cim:HydroPowerPlant.surgeTankCrestLevel>/g, obj, "surgeTankCrestLevel", base.to_string, sub, context);

            /**
             * Generators discharge water to or pumps are supplied water from a downstream reservoir.
             *
             */
            base.parse_attribute (/<cim:HydroPowerPlant.Reservoir\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Reservoir", sub, context, true);

            /**
             * Generators are supplied water from or pumps discharge water to an upstream reservoir.
             *
             */
            base.parse_attribute (/<cim:HydroPowerPlant.GenSourcePumpDischargeReservoir\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GenSourcePumpDischargeReservoir", sub, context, true);

            bucket = context.parsed.HydroPowerPlant;
            if (null == bucket)
                context.parsed.HydroPowerPlant = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The hydro pump has a pumping schedule over time, indicating when pumping is to occur.
             *
             */
            base.parse_attribute (/<cim:HydroPumpOpSchedule.HydroPump\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HydroPump", sub, context, true);

            bucket = context.parsed.HydroPumpOpSchedule;
            if (null == bucket)
                context.parsed.HydroPumpOpSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Fixed shutdown cost.
             *
             */
            base.parse_element (/<cim:ShutdownCurve.shutdownCost>([\s\S]*?)<\/cim:ShutdownCurve.shutdownCost>/g, obj, "shutdownCost", base.to_string, sub, context);

            /**
             * The date and time of the most recent generating unit shutdown.
             *
             */
            base.parse_element (/<cim:ShutdownCurve.shutdownDate>([\s\S]*?)<\/cim:ShutdownCurve.shutdownDate>/g, obj, "shutdownDate", base.to_datetime, sub, context);

            /**
             * A thermal generating unit may have a shutdown curve.
             *
             */
            base.parse_attribute (/<cim:ShutdownCurve.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context, true);

            bucket = context.parsed.ShutdownCurve;
            if (null == bucket)
                context.parsed.ShutdownCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The type of emission, for example sulfur dioxide (SO2).
             *
             * The y1AxisUnits of the curve contains the unit of measure (e.g. kg) and the emissionType is the type of emission (e.g. sulfer dioxide).
             *
             */
            base.parse_element (/<cim:EmissionAccount.emissionType>([\s\S]*?)<\/cim:EmissionAccount.emissionType>/g, obj, "emissionType", base.to_string, sub, context);

            /**
             * The source of the emission value.
             *
             */
            base.parse_element (/<cim:EmissionAccount.emissionValueSource>([\s\S]*?)<\/cim:EmissionAccount.emissionValueSource>/g, obj, "emissionValueSource", base.to_string, sub, context);

            /**
             * A thermal generating unit may have one or more emission allowance accounts.
             *
             */
            base.parse_attribute (/<cim:EmissionAccount.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context, true);

            bucket = context.parsed.EmissionAccount;
            if (null == bucket)
                context.parsed.EmissionAccount = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Power output - auxiliary power multiplier adjustment factor.
             *
             */
            base.parse_element (/<cim:HeatInputCurve.auxPowerMult>([\s\S]*?)<\/cim:HeatInputCurve.auxPowerMult>/g, obj, "auxPowerMult", base.to_string, sub, context);

            /**
             * Power output - auxiliary power offset adjustment factor.
             *
             */
            base.parse_element (/<cim:HeatInputCurve.auxPowerOffset>([\s\S]*?)<\/cim:HeatInputCurve.auxPowerOffset>/g, obj, "auxPowerOffset", base.to_string, sub, context);

            /**
             * Heat input - efficiency multiplier adjustment factor.
             *
             */
            base.parse_element (/<cim:HeatInputCurve.heatInputEff>([\s\S]*?)<\/cim:HeatInputCurve.heatInputEff>/g, obj, "heatInputEff", base.to_string, sub, context);

            /**
             * Heat input - offset adjustment factor.
             *
             */
            base.parse_element (/<cim:HeatInputCurve.heatInputOffset>([\s\S]*?)<\/cim:HeatInputCurve.heatInputOffset>/g, obj, "heatInputOffset", base.to_string, sub, context);

            /**
             * Flag is set to true when output is expressed in net active power.
             *
             */
            base.parse_element (/<cim:HeatInputCurve.isNetGrossP>([\s\S]*?)<\/cim:HeatInputCurve.isNetGrossP>/g, obj, "isNetGrossP", base.to_boolean, sub, context);

            /**
             * A thermal generating unit may have a heat input curve.
             *
             */
            base.parse_attribute (/<cim:HeatInputCurve.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context, true);

            bucket = context.parsed.HeatInputCurve;
            if (null == bucket)
                context.parsed.HeatInputCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Fixed maintenance cost.
             *
             */
            base.parse_element (/<cim:StartupModel.fixedMaintCost>([\s\S]*?)<\/cim:StartupModel.fixedMaintCost>/g, obj, "fixedMaintCost", base.to_string, sub, context);

            /**
             * The amount of heat input per time uint required for hot standby operation.
             *
             */
            base.parse_element (/<cim:StartupModel.hotStandbyHeat>([\s\S]*?)<\/cim:StartupModel.hotStandbyHeat>/g, obj, "hotStandbyHeat", base.to_string, sub, context);

            /**
             * Incremental maintenance cost.
             *
             */
            base.parse_element (/<cim:StartupModel.incrementalMaintCost>([\s\S]*?)<\/cim:StartupModel.incrementalMaintCost>/g, obj, "incrementalMaintCost", base.to_string, sub, context);

            /**
             * The minimum number of hours the unit must be down before restart.
             *
             */
            base.parse_element (/<cim:StartupModel.minimumDownTime>([\s\S]*?)<\/cim:StartupModel.minimumDownTime>/g, obj, "minimumDownTime", base.to_string, sub, context);

            /**
             * The minimum number of hours the unit must be operating before being allowed to shut down.
             *
             */
            base.parse_element (/<cim:StartupModel.minimumRunTime>([\s\S]*?)<\/cim:StartupModel.minimumRunTime>/g, obj, "minimumRunTime", base.to_string, sub, context);

            /**
             * The opportunity cost associated with the return in monetary unit.
             *
             * This represents the restart's "share" of the unit depreciation and risk of an event which would damage the unit.
             *
             */
            base.parse_element (/<cim:StartupModel.riskFactorCost>([\s\S]*?)<\/cim:StartupModel.riskFactorCost>/g, obj, "riskFactorCost", base.to_string, sub, context);

            /**
             * Total miscellaneous start up costs.
             *
             */
            base.parse_element (/<cim:StartupModel.startupCost>([\s\S]*?)<\/cim:StartupModel.startupCost>/g, obj, "startupCost", base.to_string, sub, context);

            /**
             * The date and time of the most recent generating unit startup.
             *
             */
            base.parse_element (/<cim:StartupModel.startupDate>([\s\S]*?)<\/cim:StartupModel.startupDate>/g, obj, "startupDate", base.to_datetime, sub, context);

            /**
             * Startup priority within control area where lower numbers indicate higher priorities.
             *
             * More than one unit in an area may be assigned the same priority.
             *
             */
            base.parse_element (/<cim:StartupModel.startupPriority>([\s\S]*?)<\/cim:StartupModel.startupPriority>/g, obj, "startupPriority", base.to_string, sub, context);

            /**
             * The unit's auxiliary active power consumption to maintain standby mode.
             *
             */
            base.parse_element (/<cim:StartupModel.stbyAuxP>([\s\S]*?)<\/cim:StartupModel.stbyAuxP>/g, obj, "stbyAuxP", base.to_string, sub, context);

            /**
             * The unit's startup model may have a startup ignition fuel curve.
             *
             */
            base.parse_attribute (/<cim:StartupModel.StartIgnFuelCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StartIgnFuelCurve", sub, context, true);

            /**
             * A thermal generating unit may have a startup model.
             *
             */
            base.parse_attribute (/<cim:StartupModel.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context, true);

            /**
             * The unit's startup model may have a startup main fuel curve.
             *
             */
            base.parse_attribute (/<cim:StartupModel.StartMainFuelCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StartMainFuelCurve", sub, context, true);

            /**
             * The unit's startup model may have a startup ramp curve.
             *
             */
            base.parse_attribute (/<cim:StartupModel.StartRampCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StartRampCurve", sub, context, true);

            bucket = context.parsed.StartupModel;
            if (null == bucket)
                context.parsed.StartupModel = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The combined cycle plant's active power output rating.
             *
             */
            base.parse_element (/<cim:CombinedCyclePlant.combCyclePlantRating>([\s\S]*?)<\/cim:CombinedCyclePlant.combCyclePlantRating>/g, obj, "combCyclePlantRating", base.to_string, sub, context);

            bucket = context.parsed.CombinedCyclePlant;
            if (null == bucket)
                context.parsed.CombinedCyclePlant = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * High target level limit, above which the reservoir operation will be penalized.
             *
             */
            base.parse_element (/<cim:TargetLevelSchedule.highLevelLimit>([\s\S]*?)<\/cim:TargetLevelSchedule.highLevelLimit>/g, obj, "highLevelLimit", base.to_string, sub, context);

            /**
             * Low target level limit, below which the reservoir operation will be penalized.
             *
             */
            base.parse_element (/<cim:TargetLevelSchedule.lowLevelLimit>([\s\S]*?)<\/cim:TargetLevelSchedule.lowLevelLimit>/g, obj, "lowLevelLimit", base.to_string, sub, context);

            /**
             * A reservoir may have a water level target schedule.
             *
             */
            base.parse_attribute (/<cim:TargetLevelSchedule.Reservoir\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Reservoir", sub, context, true);

            bucket = context.parsed.TargetLevelSchedule;
            if (null == bucket)
                context.parsed.TargetLevelSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Operating and maintenance cost for the thermal unit.
             *
             */
            base.parse_element (/<cim:ThermalGeneratingUnit.oMCost>([\s\S]*?)<\/cim:ThermalGeneratingUnit.oMCost>/g, obj, "oMCost", base.to_string, sub, context);

            /**
             * A thermal generating unit may have a shutdown curve.
             *
             */
            base.parse_attribute (/<cim:ThermalGeneratingUnit.ShutdownCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ShutdownCurve", sub, context, true);

            /**
             * A thermal generating unit may be a member of a cogeneration plant.
             *
             */
            base.parse_attribute (/<cim:ThermalGeneratingUnit.CogenerationPlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CogenerationPlant", sub, context, true);

            /**
             * A thermal generating unit may have a heat rate curve.
             *
             */
            base.parse_attribute (/<cim:ThermalGeneratingUnit.HeatRateCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HeatRateCurve", sub, context, true);

            /**
             * A thermal generating unit may be a member of a compressed air energy storage plant.
             *
             */
            base.parse_attribute (/<cim:ThermalGeneratingUnit.CAESPlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CAESPlant", sub, context, true);

            /**
             * A thermal generating unit may have a startup model.
             *
             */
            base.parse_attribute (/<cim:ThermalGeneratingUnit.StartupModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StartupModel", sub, context, true);

            /**
             * A thermal generating unit may be a member of a combined cycle plant.
             *
             */
            base.parse_attribute (/<cim:ThermalGeneratingUnit.CombinedCyclePlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CombinedCyclePlant", sub, context, true);

            /**
             * A thermal generating unit may have an incremental heat rate curve.
             *
             */
            base.parse_attribute (/<cim:ThermalGeneratingUnit.IncrementalHeatRateCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "IncrementalHeatRateCurve", sub, context, true);

            /**
             * A thermal generating unit may have a heat input curve.
             *
             */
            base.parse_attribute (/<cim:ThermalGeneratingUnit.HeatInputCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HeatInputCurve", sub, context, true);

            bucket = context.parsed.ThermalGeneratingUnit;
            if (null == bucket)
                context.parsed.ThermalGeneratingUnit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * A reservoir may have a "natural" inflow forecast.
             *
             */
            base.parse_attribute (/<cim:InflowForecast.Reservoir\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Reservoir", sub, context, true);

            bucket = context.parsed.InflowForecast;
            if (null == bucket)
                context.parsed.InflowForecast = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_TargetLevelSchedule: parse_TargetLevelSchedule,
                parse_Emission: parse_Emission,
                parse_StartMainFuelCurve: parse_StartMainFuelCurve,
                parse_TailbayLossCurve: parse_TailbayLossCurve,
                parse_StartRampCurve: parse_StartRampCurve,
                parse_Classification: parse_Classification,
                parse_GenUnitOpSchedule: parse_GenUnitOpSchedule,
                parse_SteamSendoutSchedule: parse_SteamSendoutSchedule,
                parse_EmissionAccount: parse_EmissionAccount,
                parse_GeneratorControlSource: parse_GeneratorControlSource,
                parse_CostPerHeatUnit: parse_CostPerHeatUnit,
                parse_FuelType: parse_FuelType,
                parse_HydroPlantStorageKind: parse_HydroPlantStorageKind,
                parse_CogenerationPlant: parse_CogenerationPlant,
                parse_InflowForecast: parse_InflowForecast,
                parse_PenstockLossCurve: parse_PenstockLossCurve,
                parse_HydroPowerPlant: parse_HydroPowerPlant,
                parse_StartupModel: parse_StartupModel,
                parse_HydroPumpOpSchedule: parse_HydroPumpOpSchedule,
                parse_ShutdownCurve: parse_ShutdownCurve,
                parse_HydroGeneratingEfficiencyCurve: parse_HydroGeneratingEfficiencyCurve,
                parse_CombinedCyclePlant: parse_CombinedCyclePlant,
                parse_HydroGeneratingUnit: parse_HydroGeneratingUnit,
                parse_HydroEnergyConversionKind: parse_HydroEnergyConversionKind,
                parse_AirCompressor: parse_AirCompressor,
                parse_WindGenUnitKind: parse_WindGenUnitKind,
                parse_EmissionValueSource: parse_EmissionValueSource,
                parse_FossilFuel: parse_FossilFuel,
                parse_GenUnitOpCostCurve: parse_GenUnitOpCostCurve,
                parse_GeneratorControlMode: parse_GeneratorControlMode,
                parse_SolarGeneratingUnit: parse_SolarGeneratingUnit,
                parse_NuclearGeneratingUnit: parse_NuclearGeneratingUnit,
                parse_HeatRate: parse_HeatRate,
                parse_EmissionType: parse_EmissionType,
                parse_Reservoir: parse_Reservoir,
                parse_EmissionCurve: parse_EmissionCurve,
                parse_HeatInputCurve: parse_HeatInputCurve,
                parse_GeneratingUnit: parse_GeneratingUnit,
                parse_HydroPump: parse_HydroPump,
                parse_StartIgnFuelCurve: parse_StartIgnFuelCurve,
                parse_GrossToNetActivePowerCurve: parse_GrossToNetActivePowerCurve,
                parse_CAESPlant: parse_CAESPlant,
                parse_LevelVsVolumeCurve: parse_LevelVsVolumeCurve,
                parse_ThermalGeneratingUnit: parse_ThermalGeneratingUnit,
                parse_IncrementalHeatRateCurve: parse_IncrementalHeatRateCurve,
                parse_FuelAllocationSchedule: parse_FuelAllocationSchedule,
                parse_HeatRateCurve: parse_HeatRateCurve,
                parse_WindGeneratingUnit: parse_WindGeneratingUnit
            }
        );
    }
);