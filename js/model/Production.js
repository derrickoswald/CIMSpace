define
(
    ["model/base", "model/Core"],
    /**
     * The production package is responsible for classes which describe various kinds of generators.
     * These classes also provide production costing information which is used to economically allocate demand among committed units and calculate reserve quantities.
     */
    function (base, Core)
    {

        /**
         * A generating unit whose prime mover is a hydraulic turbine (e.g., Francis, Pelton, Kaplan).
         */
        function parse_HydroGeneratingUnit (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_GeneratingUnit (context, sub);
            obj.cls = "HydroGeneratingUnit";
            /**
             * Energy conversion capability for generating.
             */
            obj["energyConversionCapability"] = base.parse_element (/<cim:HydroGeneratingUnit.energyConversionCapability>([\s\S]*?)<\/cim:HydroGeneratingUnit.energyConversionCapability>/g, sub, context, true);
            /**
             * The equivalent cost of water that drives the hydro turbine.
             */
            obj["hydroUnitWaterCost"] = base.parse_element (/<cim:HydroGeneratingUnit.hydroUnitWaterCost>([\s\S]*?)<\/cim:HydroGeneratingUnit.hydroUnitWaterCost>/g, sub, context, true);
            /**
             * A hydro generating unit has a penstock loss curve.
             */
            obj["PenstockLossCurve"] = base.parse_attribute (/<cim:HydroGeneratingUnit.PenstockLossCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The hydro generating unit belongs to a hydro power plant.
             */
            obj["HydroPowerPlant"] = base.parse_attribute (/<cim:HydroGeneratingUnit.HydroPowerPlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.HydroGeneratingUnit;
            if (null == bucket)
                context.parsed.HydroGeneratingUnit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Specifies the capability of the hydro generating unit to convert energy as a generator or pump.
         */
        function parse_HydroEnergyConversionKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "HydroEnergyConversionKind";
            /**
             * Able to generate power, but not able to pump water for energy storage.
             */
            obj["generator"] = base.parse_element (/<cim:HydroEnergyConversionKind.generator>([\s\S]*?)<\/cim:HydroEnergyConversionKind.generator>/g, sub, context, true);
            /**
             * Able to both generate power and pump water for energy storage.
             */
            obj["pumpAndGenerator"] = base.parse_element (/<cim:HydroEnergyConversionKind.pumpAndGenerator>([\s\S]*?)<\/cim:HydroEnergyConversionKind.pumpAndGenerator>/g, sub, context, true);
            bucket = context.parsed.HydroEnergyConversionKind;
            if (null == bucket)
                context.parsed.HydroEnergyConversionKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A wind driven generating unit.
         * May be used to represent a single turbine or an aggregation.
         */
        function parse_WindGeneratingUnit (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_GeneratingUnit (context, sub);
            obj.cls = "WindGeneratingUnit";
            /**
             * The kind of wind generating unit
             */
            obj["windGenUnitType"] = base.parse_element (/<cim:WindGeneratingUnit.windGenUnitType>([\s\S]*?)<\/cim:WindGeneratingUnit.windGenUnitType>/g, sub, context, true);
            bucket = context.parsed.WindGeneratingUnit;
            if (null == bucket)
                context.parsed.WindGeneratingUnit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Quantity of emission per fuel heat content.
         */
        function parse_Emission (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "Emission";
            obj["denominatorMultiplier"] = base.parse_element (/<cim:Emission.denominatorMultiplier>([\s\S]*?)<\/cim:Emission.denominatorMultiplier>/g, sub, context, true);
            obj["denominatorUnit"] = base.parse_element (/<cim:Emission.denominatorUnit>([\s\S]*?)<\/cim:Emission.denominatorUnit>/g, sub, context, true);
            obj["multiplier"] = base.parse_element (/<cim:Emission.multiplier>([\s\S]*?)<\/cim:Emission.multiplier>/g, sub, context, true);
            obj["unit"] = base.parse_element (/<cim:Emission.unit>([\s\S]*?)<\/cim:Emission.unit>/g, sub, context, true);
            obj["value"] = base.to_float (base.parse_element (/<cim:Emission.value>([\s\S]*?)<\/cim:Emission.value>/g, sub, context, true));
            bucket = context.parsed.Emission;
            if (null == bucket)
                context.parsed.Emission = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of wind generating unit.
         */
        function parse_WindGenUnitKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "WindGenUnitKind";
            /**
             * The wind generating unit is located offshore.
             */
            obj["offshore"] = base.parse_element (/<cim:WindGenUnitKind.offshore>([\s\S]*?)<\/cim:WindGenUnitKind.offshore>/g, sub, context, true);
            /**
             * The wind generating unit is located onshore.
             */
            obj["onshore"] = base.parse_element (/<cim:WindGenUnitKind.onshore>([\s\S]*?)<\/cim:WindGenUnitKind.onshore>/g, sub, context, true);
            bucket = context.parsed.WindGenUnitKind;
            if (null == bucket)
                context.parsed.WindGenUnitKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A synchronous motor-driven pump, typically associated with a pumped storage plant.
         */
        function parse_HydroPump (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Equipment (context, sub);
            obj.cls = "HydroPump";
            /**
             * The pumping discharge under maximum head conditions, usually at full gate.
             */
            obj["pumpDischAtMaxHead"] = base.parse_element (/<cim:HydroPump.pumpDischAtMaxHead>([\s\S]*?)<\/cim:HydroPump.pumpDischAtMaxHead>/g, sub, context, true);
            /**
             * The pumping discharge under minimum head conditions, usually at full gate.
             */
            obj["pumpDischAtMinHead"] = base.parse_element (/<cim:HydroPump.pumpDischAtMinHead>([\s\S]*?)<\/cim:HydroPump.pumpDischAtMinHead>/g, sub, context, true);
            /**
             * The pumping power under maximum head conditions, usually at full gate.
             */
            obj["pumpPowerAtMaxHead"] = base.parse_element (/<cim:HydroPump.pumpPowerAtMaxHead>([\s\S]*?)<\/cim:HydroPump.pumpPowerAtMaxHead>/g, sub, context, true);
            /**
             * The pumping power under minimum head conditions, usually at full gate.
             */
            obj["pumpPowerAtMinHead"] = base.parse_element (/<cim:HydroPump.pumpPowerAtMinHead>([\s\S]*?)<\/cim:HydroPump.pumpPowerAtMinHead>/g, sub, context, true);
            /**
             * The synchronous machine drives the turbine which moves the water from a low elevation to a higher elevation.
             * The direction of machine rotation for pumping may or may not be the same as for generating.
             */
            obj["RotatingMachine"] = base.parse_attribute (/<cim:HydroPump.RotatingMachine\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The hydro pump has a pumping schedule over time, indicating when pumping is to occur.
             */
            obj["HydroPumpOpSchedule"] = base.parse_attribute (/<cim:HydroPump.HydroPumpOpSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The hydro pump may be a member of a pumped storage plant or a pump for distributing water.
             */
            obj["HydroPowerPlant"] = base.parse_attribute (/<cim:HydroPump.HydroPowerPlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.HydroPump;
            if (null == bucket)
                context.parsed.HydroPump = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Relationship between penstock head loss (in meters) and  total discharge through the penstock (in cubic meters per second).
         * One or more turbines may be connected to the same penstock.
         */
        function parse_PenstockLossCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "PenstockLossCurve";
            /**
             * A hydro generating unit has a penstock loss curve.
             */
            obj["HydroGeneratingUnit"] = base.parse_attribute (/<cim:PenstockLossCurve.HydroGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.PenstockLossCurve;
            if (null == bucket)
                context.parsed.PenstockLossCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A set of thermal generating units for the production of electrical energy and process steam (usually from the output of the steam turbines).
         * The steam sendout is typically used for industrial purposes or for municipal heating and cooling.
         */
        function parse_CogenerationPlant (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "CogenerationPlant";
            /**
             * The high pressure steam sendout.
             */
            obj["cogenHPSendoutRating"] = base.to_float (base.parse_element (/<cim:CogenerationPlant.cogenHPSendoutRating>([\s\S]*?)<\/cim:CogenerationPlant.cogenHPSendoutRating>/g, sub, context, true));
            /**
             * The high pressure steam rating.
             */
            obj["cogenHPSteamRating"] = base.to_float (base.parse_element (/<cim:CogenerationPlant.cogenHPSteamRating>([\s\S]*?)<\/cim:CogenerationPlant.cogenHPSteamRating>/g, sub, context, true));
            /**
             * The low pressure steam sendout.
             */
            obj["cogenLPSendoutRating"] = base.to_float (base.parse_element (/<cim:CogenerationPlant.cogenLPSendoutRating>([\s\S]*?)<\/cim:CogenerationPlant.cogenLPSendoutRating>/g, sub, context, true));
            /**
             * The low pressure steam rating.
             */
            obj["cogenLPSteamRating"] = base.to_float (base.parse_element (/<cim:CogenerationPlant.cogenLPSteamRating>([\s\S]*?)<\/cim:CogenerationPlant.cogenLPSteamRating>/g, sub, context, true));
            /**
             * The rated output active power of the cogeneration plant.
             */
            obj["ratedP"] = base.parse_element (/<cim:CogenerationPlant.ratedP>([\s\S]*?)<\/cim:CogenerationPlant.ratedP>/g, sub, context, true);
            /**
             * A cogeneration plant has a steam sendout schedule.
             */
            obj["SteamSendoutSchedule"] = base.parse_attribute (/<cim:CogenerationPlant.SteamSendoutSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.CogenerationPlant;
            if (null == bucket)
                context.parsed.CogenerationPlant = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Relationship between unit incremental heat rate in (delta energy/time) per (delta active power) and unit output in active power.
         * The IHR curve represents the slope of the HeatInputCurve. Note that the "incremental heat rate" and the "heat rate" have the same engineering units.
         */
        function parse_IncrementalHeatRateCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "IncrementalHeatRateCurve";
            /**
             * Flag is set to true when output is expressed in net active power.
             */
            obj["isNetGrossP"] = base.to_boolean (base.parse_element (/<cim:IncrementalHeatRateCurve.isNetGrossP>([\s\S]*?)<\/cim:IncrementalHeatRateCurve.isNetGrossP>/g, sub, context, true));
            /**
             * A thermal generating unit may have an incremental heat rate curve.
             */
            obj["ThermalGeneratingUnit"] = base.parse_attribute (/<cim:IncrementalHeatRateCurve.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.IncrementalHeatRateCurve;
            if (null == bucket)
                context.parsed.IncrementalHeatRateCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The type of hydro power plant.
         */
        function parse_HydroPlantStorageKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "HydroPlantStorageKind";
            /**
             * Run of river.
             */
            obj["runOfRiver"] = base.parse_element (/<cim:HydroPlantStorageKind.runOfRiver>([\s\S]*?)<\/cim:HydroPlantStorageKind.runOfRiver>/g, sub, context, true);
            /**
             * Pumped storage.
             */
            obj["pumpedStorage"] = base.parse_element (/<cim:HydroPlantStorageKind.pumpedStorage>([\s\S]*?)<\/cim:HydroPlantStorageKind.pumpedStorage>/g, sub, context, true);
            /**
             * Storage.
             */
            obj["storage"] = base.parse_element (/<cim:HydroPlantStorageKind.storage>([\s\S]*?)<\/cim:HydroPlantStorageKind.storage>/g, sub, context, true);
            bucket = context.parsed.HydroPlantStorageKind;
            if (null == bucket)
                context.parsed.HydroPlantStorageKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A water storage facility within a hydro system, including: ponds, lakes, lagoons, and rivers.
         * The storage is usually behind some type of dam.
         */
        function parse_Reservoir (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "Reservoir";
            /**
             * Storage volume between the full supply level and the normal minimum operating level.
             */
            obj["activeStorageCapacity"] = base.parse_element (/<cim:Reservoir.activeStorageCapacity>([\s\S]*?)<\/cim:Reservoir.activeStorageCapacity>/g, sub, context, true);
            /**
             * The reservoir's energy storage rating in energy for given head conditions.
             */
            obj["energyStorageRating"] = base.to_float (base.parse_element (/<cim:Reservoir.energyStorageRating>([\s\S]*?)<\/cim:Reservoir.energyStorageRating>/g, sub, context, true));
            /**
             * Full supply level, above which water will spill.
             * This can be the spillway crest level or the top of closed gates.
             */
            obj["fullSupplyLevel"] = base.parse_element (/<cim:Reservoir.fullSupplyLevel>([\s\S]*?)<\/cim:Reservoir.fullSupplyLevel>/g, sub, context, true);
            /**
             * Total capacity of reservoir.
             */
            obj["grossCapacity"] = base.parse_element (/<cim:Reservoir.grossCapacity>([\s\S]*?)<\/cim:Reservoir.grossCapacity>/g, sub, context, true);
            /**
             * Normal minimum operating level below which the penstocks will draw air.
             */
            obj["normalMinOperateLevel"] = base.parse_element (/<cim:Reservoir.normalMinOperateLevel>([\s\S]*?)<\/cim:Reservoir.normalMinOperateLevel>/g, sub, context, true);
            /**
             * River outlet works for riparian right releases or other purposes.
             */
            obj["riverOutletWorks"] = base.parse_element (/<cim:Reservoir.riverOutletWorks>([\s\S]*?)<\/cim:Reservoir.riverOutletWorks>/g, sub, context, true);
            /**
             * The spillway water travel delay to the next downstream reservoir.
             */
            obj["spillTravelDelay"] = base.parse_element (/<cim:Reservoir.spillTravelDelay>([\s\S]*?)<\/cim:Reservoir.spillTravelDelay>/g, sub, context, true);
            /**
             * The flow capacity of the spillway in cubic meters per second.
             */
            obj["spillwayCapacity"] = base.to_float (base.parse_element (/<cim:Reservoir.spillwayCapacity>([\s\S]*?)<\/cim:Reservoir.spillwayCapacity>/g, sub, context, true));
            /**
             * The length of the spillway crest.
             */
            obj["spillwayCrestLength"] = base.parse_element (/<cim:Reservoir.spillwayCrestLength>([\s\S]*?)<\/cim:Reservoir.spillwayCrestLength>/g, sub, context, true);
            /**
             * Spillway crest level above which water will spill.
             */
            obj["spillwayCrestLevel"] = base.parse_element (/<cim:Reservoir.spillwayCrestLevel>([\s\S]*?)<\/cim:Reservoir.spillwayCrestLevel>/g, sub, context, true);
            /**
             * Type of spillway gate, including parameters.
             */
            obj["spillWayGateType"] = base.parse_element (/<cim:Reservoir.spillWayGateType>([\s\S]*?)<\/cim:Reservoir.spillWayGateType>/g, sub, context, true);
            /**
             * A reservoir may have a water level target schedule.
             */
            obj["TargetLevelSchedule"] = base.parse_attribute (/<cim:Reservoir.TargetLevelSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * A reservoir may spill into a downstream reservoir.
             */
            obj["SpillsFromReservoir"] = base.parse_attribute (/<cim:Reservoir.SpillsFromReservoir\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.Reservoir;
            if (null == bucket)
                context.parsed.Reservoir = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Classification of level.
         * Specify as 1..n, with 1 being the most detailed, highest priority, etc as described on the attribue using this data type.
         */
        function parse_Classification (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "Classification";
            obj["multiplier"] = base.parse_element (/<cim:Classification.multiplier>([\s\S]*?)<\/cim:Classification.multiplier>/g, sub, context, true);
            obj["unit"] = base.parse_element (/<cim:Classification.unit>([\s\S]*?)<\/cim:Classification.unit>/g, sub, context, true);
            obj["value"] = base.parse_element (/<cim:Classification.value>([\s\S]*?)<\/cim:Classification.value>/g, sub, context, true);
            bucket = context.parsed.Classification;
            if (null == bucket)
                context.parsed.Classification = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The quantity of ignition fuel (Y-axis) used to restart and repay the auxiliary power consumed versus the number of hours (X-axis) the unit was off line.
         */
        function parse_StartIgnFuelCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "StartIgnFuelCurve";
            /**
             * Type of ignition fuel.
             */
            obj["ignitionFuelType"] = base.parse_element (/<cim:StartIgnFuelCurve.ignitionFuelType>([\s\S]*?)<\/cim:StartIgnFuelCurve.ignitionFuelType>/g, sub, context, true);
            /**
             * The unit's startup model may have a startup ignition fuel curve.
             */
            obj["StartupModel"] = base.parse_attribute (/<cim:StartIgnFuelCurve.StartupModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.StartIgnFuelCurve;
            if (null == bucket)
                context.parsed.StartIgnFuelCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Relationship between reservoir volume and reservoir level.
         * The  volume is at the y-axis and the reservoir level at the x-axis.
         */
        function parse_LevelVsVolumeCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "LevelVsVolumeCurve";
            /**
             * A reservoir may have a level versus volume relationship.
             */
            obj["Reservoir"] = base.parse_attribute (/<cim:LevelVsVolumeCurve.Reservoir\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.LevelVsVolumeCurve;
            if (null == bucket)
                context.parsed.LevelVsVolumeCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Relationship between the generating unit's gross active power output on the X-axis (measured at the terminals of the machine(s)) and the generating unit's net active power output on the Y-axis (based on utility-defined measurements at the power station).
         * Station service loads, when modeled, should be treated as non-conforming bus loads. There may be more than one curve, depending on the auxiliary equipment that is in service.
         */
        function parse_GrossToNetActivePowerCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "GrossToNetActivePowerCurve";
            /**
             * A generating unit may have a gross active power to net active power curve, describing the losses and auxiliary power requirements of the unit.
             */
            obj["GeneratingUnit"] = base.parse_attribute (/<cim:GrossToNetActivePowerCurve.GeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.GrossToNetActivePowerCurve;
            if (null == bucket)
                context.parsed.GrossToNetActivePowerCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Combustion turbine air compressor which is an integral part of a compressed air energy storage (CAES) plant.
         */
        function parse_AirCompressor (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "AirCompressor";
            /**
             * Rating of the CAES air compressor.
             */
            obj["airCompressorRating"] = base.to_float (base.parse_element (/<cim:AirCompressor.airCompressorRating>([\s\S]*?)<\/cim:AirCompressor.airCompressorRating>/g, sub, context, true));
            /**
             * A CAES air compressor is driven by combustion turbine.
             */
            obj["CombustionTurbine"] = base.parse_attribute (/<cim:AirCompressor.CombustionTurbine\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * An air compressor may be a member of a compressed air energy storage plant.
             */
            obj["CAESPlant"] = base.parse_attribute (/<cim:AirCompressor.CAESPlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.AirCompressor;
            if (null == bucket)
                context.parsed.AirCompressor = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Heat generated, in energy pertime unit of elapsed time.
         */
        function parse_HeatRate (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "HeatRate";
            obj["denominatorMultiplier"] = base.parse_element (/<cim:HeatRate.denominatorMultiplier>([\s\S]*?)<\/cim:HeatRate.denominatorMultiplier>/g, sub, context, true);
            obj["denominatorUnit"] = base.parse_element (/<cim:HeatRate.denominatorUnit>([\s\S]*?)<\/cim:HeatRate.denominatorUnit>/g, sub, context, true);
            obj["multiplier"] = base.parse_element (/<cim:HeatRate.multiplier>([\s\S]*?)<\/cim:HeatRate.multiplier>/g, sub, context, true);
            obj["unit"] = base.parse_element (/<cim:HeatRate.unit>([\s\S]*?)<\/cim:HeatRate.unit>/g, sub, context, true);
            obj["value"] = base.to_float (base.parse_element (/<cim:HeatRate.value>([\s\S]*?)<\/cim:HeatRate.value>/g, sub, context, true));
            bucket = context.parsed.HeatRate;
            if (null == bucket)
                context.parsed.HeatRate = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The amount of fuel of a given type which is allocated for consumption over a specified period of time.
         */
        function parse_FuelAllocationSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "FuelAllocationSchedule";
            /**
             * The end time and date of the fuel allocation schedule.
             */
            obj["fuelAllocationEndDate"] = base.to_datetime (base.parse_element (/<cim:FuelAllocationSchedule.fuelAllocationEndDate>([\s\S]*?)<\/cim:FuelAllocationSchedule.fuelAllocationEndDate>/g, sub, context, true));
            /**
             * The start time and date of the fuel allocation schedule.
             */
            obj["fuelAllocationStartDate"] = base.to_datetime (base.parse_element (/<cim:FuelAllocationSchedule.fuelAllocationStartDate>([\s\S]*?)<\/cim:FuelAllocationSchedule.fuelAllocationStartDate>/g, sub, context, true));
            /**
             * The type of fuel, which also indicates the corresponding measurement unit.
             */
            obj["fuelType"] = base.parse_element (/<cim:FuelAllocationSchedule.fuelType>([\s\S]*?)<\/cim:FuelAllocationSchedule.fuelType>/g, sub, context, true);
            /**
             * The maximum amount fuel that is allocated for consumption for the scheduled time period.
             */
            obj["maxFuelAllocation"] = base.to_float (base.parse_element (/<cim:FuelAllocationSchedule.maxFuelAllocation>([\s\S]*?)<\/cim:FuelAllocationSchedule.maxFuelAllocation>/g, sub, context, true));
            /**
             * The minimum amount fuel that is allocated for consumption for the scheduled time period, e.g., based on a "take-or-pay" contract.
             */
            obj["minFuelAllocation"] = base.to_float (base.parse_element (/<cim:FuelAllocationSchedule.minFuelAllocation>([\s\S]*?)<\/cim:FuelAllocationSchedule.minFuelAllocation>/g, sub, context, true));
            /**
             * A fuel allocation schedule must have a fossil fuel.
             */
            obj["FossilFuel"] = base.parse_attribute (/<cim:FuelAllocationSchedule.FossilFuel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * A thermal generating unit may have one or more fuel allocation schedules.
             */
            obj["ThermalGeneratingUnit"] = base.parse_attribute (/<cim:FuelAllocationSchedule.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.FuelAllocationSchedule;
            if (null == bucket)
                context.parsed.FuelAllocationSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The source of controls for a generating unit.
         */
        function parse_GeneratorControlSource (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "GeneratorControlSource";
            /**
             * Not available.
             */
            obj["unavailable"] = base.parse_element (/<cim:GeneratorControlSource.unavailable>([\s\S]*?)<\/cim:GeneratorControlSource.unavailable>/g, sub, context, true);
            /**
             * Off of automatic generation control (AGC).
             */
            obj["offAGC"] = base.parse_element (/<cim:GeneratorControlSource.offAGC>([\s\S]*?)<\/cim:GeneratorControlSource.offAGC>/g, sub, context, true);
            /**
             * On automatic generation control (AGC).
             */
            obj["onAGC"] = base.parse_element (/<cim:GeneratorControlSource.onAGC>([\s\S]*?)<\/cim:GeneratorControlSource.onAGC>/g, sub, context, true);
            /**
             * Plant is controlling.
             */
            obj["plantControl"] = base.parse_element (/<cim:GeneratorControlSource.plantControl>([\s\S]*?)<\/cim:GeneratorControlSource.plantControl>/g, sub, context, true);
            bucket = context.parsed.GeneratorControlSource;
            if (null == bucket)
                context.parsed.GeneratorControlSource = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The type of emission.
         */
        function parse_EmissionType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "EmissionType";
            /**
             * Sulfer dioxide.
             */
            obj["sulfurDioxide"] = base.parse_element (/<cim:EmissionType.sulfurDioxide>([\s\S]*?)<\/cim:EmissionType.sulfurDioxide>/g, sub, context, true);
            /**
             * Carbon diaoxide.
             */
            obj["carbonDioxide"] = base.parse_element (/<cim:EmissionType.carbonDioxide>([\s\S]*?)<\/cim:EmissionType.carbonDioxide>/g, sub, context, true);
            /**
             * Nitrogen oxide.
             */
            obj["nitrogenOxide"] = base.parse_element (/<cim:EmissionType.nitrogenOxide>([\s\S]*?)<\/cim:EmissionType.nitrogenOxide>/g, sub, context, true);
            /**
             * Hydrogen sulfide.
             */
            obj["hydrogenSulfide"] = base.parse_element (/<cim:EmissionType.hydrogenSulfide>([\s\S]*?)<\/cim:EmissionType.hydrogenSulfide>/g, sub, context, true);
            /**
             * Clorine.
             */
            obj["chlorine"] = base.parse_element (/<cim:EmissionType.chlorine>([\s\S]*?)<\/cim:EmissionType.chlorine>/g, sub, context, true);
            /**
             * Carbon disulfide.
             */
            obj["carbonDisulfide"] = base.parse_element (/<cim:EmissionType.carbonDisulfide>([\s\S]*?)<\/cim:EmissionType.carbonDisulfide>/g, sub, context, true);
            bucket = context.parsed.EmissionType;
            if (null == bucket)
                context.parsed.EmissionType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Relationship between unit efficiency in percent and unit output active power for a given net head in meters.
         * The relationship between efficiency, discharge, head, and power output is expressed as follows:   E =KP/HQ
         */
        function parse_HydroGeneratingEfficiencyCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "HydroGeneratingEfficiencyCurve";
            /**
             * A hydro generating unit has an efficiency curve.
             */
            obj["HydroGeneratingUnit"] = base.parse_attribute (/<cim:HydroGeneratingEfficiencyCurve.HydroGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.HydroGeneratingEfficiencyCurve;
            if (null == bucket)
                context.parsed.HydroGeneratingEfficiencyCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The generating unit's Operator-approved current operating schedule (or plan), typically produced with the aid of unit commitment type analyses.
         * The X-axis represents absolute time. The Y1-axis represents the status (0=off-line and unavailable: 1=available: 2=must run: 3=must run at fixed power value: etc.). The Y2-axis represents the must run fixed power value where required.
         */
        function parse_GenUnitOpSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_RegularIntervalSchedule (context, sub);
            obj.cls = "GenUnitOpSchedule";
            /**
             * A generating unit may have an operating schedule, indicating the planned operation of the unit.
             */
            obj["GeneratingUnit"] = base.parse_attribute (/<cim:GenUnitOpSchedule.GeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.GenUnitOpSchedule;
            if (null == bucket)
                context.parsed.GenUnitOpSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Relationship between unit heat rate per active power (Y-axis) and  unit output (X-axis).
         * The heat input is from all fuels.
         */
        function parse_HeatRateCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "HeatRateCurve";
            /**
             * Flag is set to true when output is expressed in net active power.
             */
            obj["isNetGrossP"] = base.to_boolean (base.parse_element (/<cim:HeatRateCurve.isNetGrossP>([\s\S]*?)<\/cim:HeatRateCurve.isNetGrossP>/g, sub, context, true));
            /**
             * A thermal generating unit may have a heat rate curve.
             */
            obj["ThermalGeneratingUnit"] = base.parse_attribute (/<cim:HeatRateCurve.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.HeatRateCurve;
            if (null == bucket)
                context.parsed.HeatRateCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Type of fuel.
         */
        function parse_FuelType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "FuelType";
            /**
             * Generic coal, not including lignite type.
             */
            obj["coal"] = base.parse_element (/<cim:FuelType.coal>([\s\S]*?)<\/cim:FuelType.coal>/g, sub, context, true);
            /**
             * Oil.
             */
            obj["oil"] = base.parse_element (/<cim:FuelType.oil>([\s\S]*?)<\/cim:FuelType.oil>/g, sub, context, true);
            /**
             * Natural gas.
             */
            obj["gas"] = base.parse_element (/<cim:FuelType.gas>([\s\S]*?)<\/cim:FuelType.gas>/g, sub, context, true);
            /**
             * The fuel is lignite coal.
             * Note that this is a special type of coal, so the other enum of coal is reserved for hard coal types or if the exact type of coal is not known.
             */
            obj["lignite"] = base.parse_element (/<cim:FuelType.lignite>([\s\S]*?)<\/cim:FuelType.lignite>/g, sub, context, true);
            /**
             * Hard coal
             */
            obj["hardCoal"] = base.parse_element (/<cim:FuelType.hardCoal>([\s\S]*?)<\/cim:FuelType.hardCoal>/g, sub, context, true);
            /**
             * Oil Shale
             */
            obj["oilShale"] = base.parse_element (/<cim:FuelType.oilShale>([\s\S]*?)<\/cim:FuelType.oilShale>/g, sub, context, true);
            bucket = context.parsed.FuelType;
            if (null == bucket)
                context.parsed.FuelType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Relationship between unit operating cost (Y-axis) and unit output active power (X-axis).
         * The operating cost curve for thermal units is derived from heat input and fuel costs. The operating cost curve for hydro units is derived from water flow rates and equivalent water costs.
         */
        function parse_GenUnitOpCostCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "GenUnitOpCostCurve";
            /**
             * Flag is set to true when output is expressed in net active power.
             */
            obj["isNetGrossP"] = base.to_boolean (base.parse_element (/<cim:GenUnitOpCostCurve.isNetGrossP>([\s\S]*?)<\/cim:GenUnitOpCostCurve.isNetGrossP>/g, sub, context, true));
            /**
             * A generating unit may have one or more cost curves, depending upon fuel mixture and fuel cost.
             */
            obj["GeneratingUnit"] = base.parse_attribute (/<cim:GenUnitOpCostCurve.GeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.GenUnitOpCostCurve;
            if (null == bucket)
                context.parsed.GenUnitOpCostCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The cogeneration plant's steam sendout schedule in volume per time unit.
         */
        function parse_SteamSendoutSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_RegularIntervalSchedule (context, sub);
            obj.cls = "SteamSendoutSchedule";
            /**
             * A cogeneration plant has a steam sendout schedule.
             */
            obj["CogenerationPlant"] = base.parse_attribute (/<cim:SteamSendoutSchedule.CogenerationPlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.SteamSendoutSchedule;
            if (null == bucket)
                context.parsed.SteamSendoutSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Relationship between tailbay head loss hight (y-axis) and the total discharge into the power station's tailbay volume per time unit (x-axis) .
         * There could be more than one curve depending on the level of the tailbay reservoir or river level.
         */
        function parse_TailbayLossCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "TailbayLossCurve";
            /**
             * A hydro generating unit has a tailbay loss curve.
             */
            obj["HydroGeneratingUnit"] = base.parse_attribute (/<cim:TailbayLossCurve.HydroGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.TailbayLossCurve;
            if (null == bucket)
                context.parsed.TailbayLossCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Compressed air energy storage plant.
         */
        function parse_CAESPlant (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "CAESPlant";
            /**
             * The rated energy storage capacity.
             */
            obj["energyStorageCapacity"] = base.parse_element (/<cim:CAESPlant.energyStorageCapacity>([\s\S]*?)<\/cim:CAESPlant.energyStorageCapacity>/g, sub, context, true);
            /**
             * The CAES plant's gross rated generating capacity.
             */
            obj["ratedCapacityP"] = base.parse_element (/<cim:CAESPlant.ratedCapacityP>([\s\S]*?)<\/cim:CAESPlant.ratedCapacityP>/g, sub, context, true);
            /**
             * A thermal generating unit may be a member of a compressed air energy storage plant.
             */
            obj["ThermalGeneratingUnit"] = base.parse_attribute (/<cim:CAESPlant.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * An air compressor may be a member of a compressed air energy storage plant.
             */
            obj["AirCompressor"] = base.parse_attribute (/<cim:CAESPlant.AirCompressor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.CAESPlant;
            if (null == bucket)
                context.parsed.CAESPlant = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A nuclear generating unit.
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
         */
        function parse_EmissionValueSource (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "EmissionValueSource";
            /**
             * Measured.
             */
            obj["measured"] = base.parse_element (/<cim:EmissionValueSource.measured>([\s\S]*?)<\/cim:EmissionValueSource.measured>/g, sub, context, true);
            /**
             * Calculated.
             */
            obj["calculated"] = base.parse_element (/<cim:EmissionValueSource.calculated>([\s\S]*?)<\/cim:EmissionValueSource.calculated>/g, sub, context, true);
            bucket = context.parsed.EmissionValueSource;
            if (null == bucket)
                context.parsed.EmissionValueSource = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Relationship between the unit's emission rate in units of mass per hour (Y-axis) and output active power (X-axis) for a given type of emission.
         * This curve applies when only one type of fuel is being burned.
         */
        function parse_EmissionCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "EmissionCurve";
            /**
             * The emission content per quantity of fuel burned.
             */
            obj["emissionContent"] = base.parse_element (/<cim:EmissionCurve.emissionContent>([\s\S]*?)<\/cim:EmissionCurve.emissionContent>/g, sub, context, true);
            /**
             * The type of emission, which also gives the production rate measurement unit.
             * The y1AxisUnits of the curve contains the unit of measure (e.g. kg) and the emissionType is the type of emission (e.g. sulfer dioxide).
             */
            obj["emissionType"] = base.parse_element (/<cim:EmissionCurve.emissionType>([\s\S]*?)<\/cim:EmissionCurve.emissionType>/g, sub, context, true);
            /**
             * Flag is set to true when output is expressed in net active power.
             */
            obj["isNetGrossP"] = base.to_boolean (base.parse_element (/<cim:EmissionCurve.isNetGrossP>([\s\S]*?)<\/cim:EmissionCurve.isNetGrossP>/g, sub, context, true));
            /**
             * A thermal generating unit may have  one or more emission curves.
             */
            obj["ThermalGeneratingUnit"] = base.parse_attribute (/<cim:EmissionCurve.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.EmissionCurve;
            if (null == bucket)
                context.parsed.EmissionCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Unit control modes.
         */
        function parse_GeneratorControlMode (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "GeneratorControlMode";
            /**
             * Setpoint control mode.
             */
            obj["setpoint"] = base.parse_element (/<cim:GeneratorControlMode.setpoint>([\s\S]*?)<\/cim:GeneratorControlMode.setpoint>/g, sub, context, true);
            /**
             * Pulse control mode.
             */
            obj["pulse"] = base.parse_element (/<cim:GeneratorControlMode.pulse>([\s\S]*?)<\/cim:GeneratorControlMode.pulse>/g, sub, context, true);
            bucket = context.parsed.GeneratorControlMode;
            if (null == bucket)
                context.parsed.GeneratorControlMode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A solar thermal generating unit.
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
         */
        function parse_StartMainFuelCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "StartMainFuelCurve";
            /**
             * Type of main fuel.
             */
            obj["mainFuelType"] = base.parse_element (/<cim:StartMainFuelCurve.mainFuelType>([\s\S]*?)<\/cim:StartMainFuelCurve.mainFuelType>/g, sub, context, true);
            /**
             * The unit's startup model may have a startup main fuel curve.
             */
            obj["StartupModel"] = base.parse_attribute (/<cim:StartMainFuelCurve.StartupModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.StartMainFuelCurve;
            if (null == bucket)
                context.parsed.StartMainFuelCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Rate in gross active power/minute (Y-axis) at which a unit can be loaded versus the number of hours (X-axis) the unit was off line.
         */
        function parse_StartRampCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "StartRampCurve";
            /**
             * The startup ramp rate in gross for a unit that is on hot standby.
             */
            obj["hotStandbyRamp"] = base.parse_element (/<cim:StartRampCurve.hotStandbyRamp>([\s\S]*?)<\/cim:StartRampCurve.hotStandbyRamp>/g, sub, context, true);
            /**
             * The unit's startup model may have a startup ramp curve.
             */
            obj["StartupModel"] = base.parse_attribute (/<cim:StartRampCurve.StartupModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.StartRampCurve;
            if (null == bucket)
                context.parsed.StartRampCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The fossil fuel consumed by the non-nuclear thermal generating unit.
         * For example, coal, oil, gas, etc.   This a the specific fuels that the generating unit can consume.
         */
        function parse_FossilFuel (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "FossilFuel";
            /**
             * The type of fossil fuel, such as coal, oil, or gas.
             */
            obj["fossilFuelType"] = base.parse_element (/<cim:FossilFuel.fossilFuelType>([\s\S]*?)<\/cim:FossilFuel.fossilFuelType>/g, sub, context, true);
            /**
             * The cost in terms of heat value for the given type of fuel.
             */
            obj["fuelCost"] = base.parse_element (/<cim:FossilFuel.fuelCost>([\s\S]*?)<\/cim:FossilFuel.fuelCost>/g, sub, context, true);
            /**
             * The cost of fuel used for economic dispatching which includes: fuel cost, transportation cost,  and incremental maintenance cost.
             */
            obj["fuelDispatchCost"] = base.parse_element (/<cim:FossilFuel.fuelDispatchCost>([\s\S]*?)<\/cim:FossilFuel.fuelDispatchCost>/g, sub, context, true);
            /**
             * The efficiency factor for the fuel (per unit) in terms of the effective energy absorbed.
             */
            obj["fuelEffFactor"] = base.parse_element (/<cim:FossilFuel.fuelEffFactor>([\s\S]*?)<\/cim:FossilFuel.fuelEffFactor>/g, sub, context, true);
            /**
             * Handling and processing cost associated with this fuel.
             */
            obj["fuelHandlingCost"] = base.parse_element (/<cim:FossilFuel.fuelHandlingCost>([\s\S]*?)<\/cim:FossilFuel.fuelHandlingCost>/g, sub, context, true);
            /**
             * The amount of heat per weight (or volume) of the given type of fuel.
             */
            obj["fuelHeatContent"] = base.to_float (base.parse_element (/<cim:FossilFuel.fuelHeatContent>([\s\S]*?)<\/cim:FossilFuel.fuelHeatContent>/g, sub, context, true));
            /**
             * Relative amount of the given type of fuel, when multiple fuels are being consumed.
             */
            obj["fuelMixture"] = base.parse_element (/<cim:FossilFuel.fuelMixture>([\s\S]*?)<\/cim:FossilFuel.fuelMixture>/g, sub, context, true);
            /**
             * The fuel's fraction of pollution credit per unit of heat content.
             */
            obj["fuelSulfur"] = base.parse_element (/<cim:FossilFuel.fuelSulfur>([\s\S]*?)<\/cim:FossilFuel.fuelSulfur>/g, sub, context, true);
            /**
             * The active power output level of the unit at which the given type of fuel is switched on.
             * This fuel (e.g., oil) is sometimes used to supplement the base fuel (e.g., coal) at high active power output levels.
             */
            obj["highBreakpointP"] = base.parse_element (/<cim:FossilFuel.highBreakpointP>([\s\S]*?)<\/cim:FossilFuel.highBreakpointP>/g, sub, context, true);
            /**
             * The active power output level of the unit at which the given type of fuel is switched off.
             * This fuel (e.g., oil) is sometimes used to stabilize the base fuel (e.g., coal) at low active power output levels.
             */
            obj["lowBreakpointP"] = base.parse_element (/<cim:FossilFuel.lowBreakpointP>([\s\S]*?)<\/cim:FossilFuel.lowBreakpointP>/g, sub, context, true);
            /**
             * A thermal generating unit may have one or more fossil fuels.
             */
            obj["ThermalGeneratingUnit"] = base.parse_attribute (/<cim:FossilFuel.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.FossilFuel;
            if (null == bucket)
                context.parsed.FossilFuel = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A single or set of synchronous machines for converting mechanical power into alternating-current power.
         * For example, individual machines within a set may be defined for scheduling purposes while a single control signal is derived for the set. In this case there would be a GeneratingUnit for each member of the set and an additional GeneratingUnit corresponding to the set.
         */
        function parse_GeneratingUnit (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Equipment (context, sub);
            obj.cls = "GeneratingUnit";
            /**
             * The planned unused capacity (spinning reserve) which can be used to support emergency load.
             */
            obj["allocSpinResP"] = base.parse_element (/<cim:GeneratingUnit.allocSpinResP>([\s\S]*?)<\/cim:GeneratingUnit.allocSpinResP>/g, sub, context, true);
            /**
             * The planned unused capacity which can be used to support automatic control overruns.
             */
            obj["autoCntrlMarginP"] = base.parse_element (/<cim:GeneratingUnit.autoCntrlMarginP>([\s\S]*?)<\/cim:GeneratingUnit.autoCntrlMarginP>/g, sub, context, true);
            /**
             * For dispatchable units, this value represents the economic active power basepoint, for units that are not dispatchable, this value represents the fixed generation value.
             * The value must be between the operating low and high limits.
             */
            obj["baseP"] = base.parse_element (/<cim:GeneratingUnit.baseP>([\s\S]*?)<\/cim:GeneratingUnit.baseP>/g, sub, context, true);
            /**
             * Unit control error deadband.
             * When a unit's desired active power change is less than this deadband, then no control pulses will be sent to the unit.
             */
            obj["controlDeadband"] = base.parse_element (/<cim:GeneratingUnit.controlDeadband>([\s\S]*?)<\/cim:GeneratingUnit.controlDeadband>/g, sub, context, true);
            /**
             * Pulse high limit which is the largest control pulse that the unit can respond to.
             */
            obj["controlPulseHigh"] = base.parse_element (/<cim:GeneratingUnit.controlPulseHigh>([\s\S]*?)<\/cim:GeneratingUnit.controlPulseHigh>/g, sub, context, true);
            /**
             * Pulse low limit which is the smallest control pulse that the unit can respond to.
             */
            obj["controlPulseLow"] = base.parse_element (/<cim:GeneratingUnit.controlPulseLow>([\s\S]*?)<\/cim:GeneratingUnit.controlPulseLow>/g, sub, context, true);
            /**
             * Unit response rate which specifies the active power change for a control pulse of one second in the most responsive loading level of the unit.
             */
            obj["controlResponseRate"] = base.parse_element (/<cim:GeneratingUnit.controlResponseRate>([\s\S]*?)<\/cim:GeneratingUnit.controlResponseRate>/g, sub, context, true);
            /**
             * The efficiency of the unit in converting mechanical energy, from the prime mover, into electrical energy.
             */
            obj["efficiency"] = base.parse_element (/<cim:GeneratingUnit.efficiency>([\s\S]*?)<\/cim:GeneratingUnit.efficiency>/g, sub, context, true);
            /**
             * The unit control mode.
             */
            obj["genControlMode"] = base.parse_element (/<cim:GeneratingUnit.genControlMode>([\s\S]*?)<\/cim:GeneratingUnit.genControlMode>/g, sub, context, true);
            /**
             * The source of controls for a generating unit.
             */
            obj["genControlSource"] = base.parse_element (/<cim:GeneratingUnit.genControlSource>([\s\S]*?)<\/cim:GeneratingUnit.genControlSource>/g, sub, context, true);
            /**
             * Governor motor position limit.
             */
            obj["governorMPL"] = base.parse_element (/<cim:GeneratingUnit.governorMPL>([\s\S]*?)<\/cim:GeneratingUnit.governorMPL>/g, sub, context, true);
            /**
             * Governor Speed Changer Droop.
             * This is the change in generator power output divided by the change in frequency normalized by the nominal power of the generator and the nominal frequency and expressed in percent and negated. A positive value of speed change droop provides additional generator output upon a drop in frequency.
             */
            obj["governorSCD"] = base.parse_element (/<cim:GeneratingUnit.governorSCD>([\s\S]*?)<\/cim:GeneratingUnit.governorSCD>/g, sub, context, true);
            /**
             * High limit for secondary (AGC) control.
             */
            obj["highControlLimit"] = base.parse_element (/<cim:GeneratingUnit.highControlLimit>([\s\S]*?)<\/cim:GeneratingUnit.highControlLimit>/g, sub, context, true);
            /**
             * Default initial active power  which is used to store a powerflow result for the initial active power for this unit in this network configuration.
             */
            obj["initialP"] = base.parse_element (/<cim:GeneratingUnit.initialP>([\s\S]*?)<\/cim:GeneratingUnit.initialP>/g, sub, context, true);
            /**
             * Generating unit long term economic participation factor.
             */
            obj["longPF"] = base.to_float (base.parse_element (/<cim:GeneratingUnit.longPF>([\s\S]*?)<\/cim:GeneratingUnit.longPF>/g, sub, context, true));
            /**
             * Low limit for secondary (AGC) control.
             */
            obj["lowControlLimit"] = base.parse_element (/<cim:GeneratingUnit.lowControlLimit>([\s\S]*?)<\/cim:GeneratingUnit.lowControlLimit>/g, sub, context, true);
            /**
             * The normal maximum rate the generating unit active power output can be lowered by control actions.
             */
            obj["lowerRampRate"] = base.parse_element (/<cim:GeneratingUnit.lowerRampRate>([\s\S]*?)<\/cim:GeneratingUnit.lowerRampRate>/g, sub, context, true);
            /**
             * Maximum high economic active power limit, that should not exceed the maximum operating active power limit.
             */
            obj["maxEconomicP"] = base.parse_element (/<cim:GeneratingUnit.maxEconomicP>([\s\S]*?)<\/cim:GeneratingUnit.maxEconomicP>/g, sub, context, true);
            /**
             * Maximum allowable spinning reserve.
             * Spinning reserve will never be considered greater than this value regardless of the current operating point.
             */
            obj["maximumAllowableSpinningReserve"] = base.parse_element (/<cim:GeneratingUnit.maximumAllowableSpinningReserve>([\s\S]*?)<\/cim:GeneratingUnit.maximumAllowableSpinningReserve>/g, sub, context, true);
            /**
             * This is the maximum operating active power limit the dispatcher can enter for this unit.
             */
            obj["maxOperatingP"] = base.parse_element (/<cim:GeneratingUnit.maxOperatingP>([\s\S]*?)<\/cim:GeneratingUnit.maxOperatingP>/g, sub, context, true);
            /**
             * Low economic active power limit that must be greater than or equal to the minimum operating active power limit.
             */
            obj["minEconomicP"] = base.parse_element (/<cim:GeneratingUnit.minEconomicP>([\s\S]*?)<\/cim:GeneratingUnit.minEconomicP>/g, sub, context, true);
            /**
             * Minimum time interval between unit shutdown and startup.
             */
            obj["minimumOffTime"] = base.parse_element (/<cim:GeneratingUnit.minimumOffTime>([\s\S]*?)<\/cim:GeneratingUnit.minimumOffTime>/g, sub, context, true);
            /**
             * This is the minimum operating active power limit the dispatcher can enter for this unit.
             */
            obj["minOperatingP"] = base.parse_element (/<cim:GeneratingUnit.minOperatingP>([\s\S]*?)<\/cim:GeneratingUnit.minOperatingP>/g, sub, context, true);
            /**
             * Detail level of the generator model data.
             */
            obj["modelDetail"] = base.parse_element (/<cim:GeneratingUnit.modelDetail>([\s\S]*?)<\/cim:GeneratingUnit.modelDetail>/g, sub, context, true);
            /**
             * The nominal power of the generating unit.
             * Used to give precise meaning to percentage based attributes such as the governor speed change droop (governorSCD attribute).
             */
            obj["nominalP"] = base.parse_element (/<cim:GeneratingUnit.nominalP>([\s\S]*?)<\/cim:GeneratingUnit.nominalP>/g, sub, context, true);
            /**
             * Generating unit economic participation factor.
             */
            obj["normalPF"] = base.to_float (base.parse_element (/<cim:GeneratingUnit.normalPF>([\s\S]*?)<\/cim:GeneratingUnit.normalPF>/g, sub, context, true));
            /**
             * Defined as: 1 / ( 1 - Incremental Transmission Loss); with the Incremental Transmission Loss expressed as a plus or minus value.
             * The typical range of penalty factors is (0.9 to 1.1).
             */
            obj["penaltyFactor"] = base.to_float (base.parse_element (/<cim:GeneratingUnit.penaltyFactor>([\s\S]*?)<\/cim:GeneratingUnit.penaltyFactor>/g, sub, context, true));
            /**
             * The normal maximum rate the generating unit active power output can be raised by control actions.
             */
            obj["raiseRampRate"] = base.parse_element (/<cim:GeneratingUnit.raiseRampRate>([\s\S]*?)<\/cim:GeneratingUnit.raiseRampRate>/g, sub, context, true);
            /**
             * The unit's gross rated maximum capacity (book value).
             */
            obj["ratedGrossMaxP"] = base.parse_element (/<cim:GeneratingUnit.ratedGrossMaxP>([\s\S]*?)<\/cim:GeneratingUnit.ratedGrossMaxP>/g, sub, context, true);
            /**
             * The gross rated minimum generation level which the unit can safely operate at while delivering power to the transmission grid.
             */
            obj["ratedGrossMinP"] = base.parse_element (/<cim:GeneratingUnit.ratedGrossMinP>([\s\S]*?)<\/cim:GeneratingUnit.ratedGrossMinP>/g, sub, context, true);
            /**
             * The net rated maximum capacity determined by subtracting the auxiliary power used to operate the internal plant machinery from the rated gross maximum capacity.
             */
            obj["ratedNetMaxP"] = base.parse_element (/<cim:GeneratingUnit.ratedNetMaxP>([\s\S]*?)<\/cim:GeneratingUnit.ratedNetMaxP>/g, sub, context, true);
            /**
             * Generating unit short term economic participation factor.
             */
            obj["shortPF"] = base.to_float (base.parse_element (/<cim:GeneratingUnit.shortPF>([\s\S]*?)<\/cim:GeneratingUnit.shortPF>/g, sub, context, true));
            /**
             * The initial startup cost incurred for each start of the GeneratingUnit.
             */
            obj["startupCost"] = base.parse_element (/<cim:GeneratingUnit.startupCost>([\s\S]*?)<\/cim:GeneratingUnit.startupCost>/g, sub, context, true);
            /**
             * Time it takes to get the unit on-line, from the time that the prime mover mechanical power is applied.
             */
            obj["startupTime"] = base.parse_element (/<cim:GeneratingUnit.startupTime>([\s\S]*?)<\/cim:GeneratingUnit.startupTime>/g, sub, context, true);
            /**
             * Generating unit economic participation factor.
             */
            obj["tieLinePF"] = base.to_float (base.parse_element (/<cim:GeneratingUnit.tieLinePF>([\s\S]*?)<\/cim:GeneratingUnit.tieLinePF>/g, sub, context, true));
            /**
             * The variable cost component of production per unit of ActivePower.
             */
            obj["variableCost"] = base.parse_element (/<cim:GeneratingUnit.variableCost>([\s\S]*?)<\/cim:GeneratingUnit.variableCost>/g, sub, context, true);
            /**
             * The efficiency of the unit in converting the fuel into electrical energy.
             */
            obj["totalEfficiency"] = base.parse_element (/<cim:GeneratingUnit.totalEfficiency>([\s\S]*?)<\/cim:GeneratingUnit.totalEfficiency>/g, sub, context, true);
            /**
             * A generating unit may have an operating schedule, indicating the planned operation of the unit.
             */
            obj["GenUnitOpSchedule"] = base.parse_attribute (/<cim:GeneratingUnit.GenUnitOpSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.GeneratingUnit;
            if (null == bucket)
                context.parsed.GeneratingUnit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A hydro power station which can generate or pump.
         * When generating, the generator turbines receive water from an upper reservoir. When pumping, the pumps receive their water from a lower reservoir.
         */
        function parse_HydroPowerPlant (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "HydroPowerPlant";
            /**
             * Water travel delay from tailbay to next downstream hydro power station.
             */
            obj["dischargeTravelDelay"] = base.parse_element (/<cim:HydroPowerPlant.dischargeTravelDelay>([\s\S]*?)<\/cim:HydroPowerPlant.dischargeTravelDelay>/g, sub, context, true);
            /**
             * The hydro plant's generating rating active power for rated head conditions.
             */
            obj["genRatedP"] = base.parse_element (/<cim:HydroPowerPlant.genRatedP>([\s\S]*?)<\/cim:HydroPowerPlant.genRatedP>/g, sub, context, true);
            /**
             * The type of hydro power plant water storage.
             */
            obj["hydroPlantStorageType"] = base.parse_element (/<cim:HydroPowerPlant.hydroPlantStorageType>([\s\S]*?)<\/cim:HydroPowerPlant.hydroPlantStorageType>/g, sub, context, true);
            /**
             * Type and configuration of hydro plant penstock(s).
             */
            obj["penstockType"] = base.parse_element (/<cim:HydroPowerPlant.penstockType>([\s\S]*?)<\/cim:HydroPowerPlant.penstockType>/g, sub, context, true);
            /**
             * Total plant discharge capacity.
             */
            obj["plantDischargeCapacity"] = base.parse_element (/<cim:HydroPowerPlant.plantDischargeCapacity>([\s\S]*?)<\/cim:HydroPowerPlant.plantDischargeCapacity>/g, sub, context, true);
            /**
             * The plant's rated gross head.
             */
            obj["plantRatedHead"] = base.parse_element (/<cim:HydroPowerPlant.plantRatedHead>([\s\S]*?)<\/cim:HydroPowerPlant.plantRatedHead>/g, sub, context, true);
            /**
             * The hydro plant's pumping rating active power for rated head conditions.
             */
            obj["pumpRatedP"] = base.parse_element (/<cim:HydroPowerPlant.pumpRatedP>([\s\S]*?)<\/cim:HydroPowerPlant.pumpRatedP>/g, sub, context, true);
            /**
             * A code describing the type (or absence) of surge tank that is associated with the hydro power plant.
             */
            obj["surgeTankCode"] = base.parse_element (/<cim:HydroPowerPlant.surgeTankCode>([\s\S]*?)<\/cim:HydroPowerPlant.surgeTankCode>/g, sub, context, true);
            /**
             * The level at which the surge tank spills.
             */
            obj["surgeTankCrestLevel"] = base.parse_element (/<cim:HydroPowerPlant.surgeTankCrestLevel>([\s\S]*?)<\/cim:HydroPowerPlant.surgeTankCrestLevel>/g, sub, context, true);
            /**
             * Generators discharge water to or pumps are supplied water from a downstream reservoir.
             */
            obj["Reservoir"] = base.parse_attribute (/<cim:HydroPowerPlant.Reservoir\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Generators are supplied water from or pumps discharge water to an upstream reservoir.
             */
            obj["GenSourcePumpDischargeReservoir"] = base.parse_attribute (/<cim:HydroPowerPlant.GenSourcePumpDischargeReservoir\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.HydroPowerPlant;
            if (null == bucket)
                context.parsed.HydroPowerPlant = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The hydro pump's Operator-approved current operating schedule (or plan), typically produced with the aid of unit commitment type analyses.
         * The unit's operating schedule status is typically given as: (0=unavailable) (1=avilable to startup or shutdown)  (2=must pump).
         */
        function parse_HydroPumpOpSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_RegularIntervalSchedule (context, sub);
            obj.cls = "HydroPumpOpSchedule";
            /**
             * The hydro pump has a pumping schedule over time, indicating when pumping is to occur.
             */
            obj["HydroPump"] = base.parse_attribute (/<cim:HydroPumpOpSchedule.HydroPump\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.HydroPumpOpSchedule;
            if (null == bucket)
                context.parsed.HydroPumpOpSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Relationship between the rate in gross active power/minute (Y-axis) at which a unit should be shutdown and its present gross MW output (X-axis).
         */
        function parse_ShutdownCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "ShutdownCurve";
            /**
             * Fixed shutdown cost.
             */
            obj["shutdownCost"] = base.parse_element (/<cim:ShutdownCurve.shutdownCost>([\s\S]*?)<\/cim:ShutdownCurve.shutdownCost>/g, sub, context, true);
            /**
             * The date and time of the most recent generating unit shutdown.
             */
            obj["shutdownDate"] = base.to_datetime (base.parse_element (/<cim:ShutdownCurve.shutdownDate>([\s\S]*?)<\/cim:ShutdownCurve.shutdownDate>/g, sub, context, true));
            /**
             * A thermal generating unit may have a shutdown curve.
             */
            obj["ThermalGeneratingUnit"] = base.parse_attribute (/<cim:ShutdownCurve.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ShutdownCurve;
            if (null == bucket)
                context.parsed.ShutdownCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Accounts for tracking emissions usage and credits for thermal generating units.
         * A unit may have zero or more emission accounts, and will typically have one for tracking usage and one for tracking credits.
         */
        function parse_EmissionAccount (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "EmissionAccount";
            /**
             * The type of emission, for example sulfur dioxide (SO2).
             * The y1AxisUnits of the curve contains the unit of measure (e.g. kg) and the emissionType is the type of emission (e.g. sulfer dioxide).
             */
            obj["emissionType"] = base.parse_element (/<cim:EmissionAccount.emissionType>([\s\S]*?)<\/cim:EmissionAccount.emissionType>/g, sub, context, true);
            /**
             * The source of the emission value.
             */
            obj["emissionValueSource"] = base.parse_element (/<cim:EmissionAccount.emissionValueSource>([\s\S]*?)<\/cim:EmissionAccount.emissionValueSource>/g, sub, context, true);
            /**
             * A thermal generating unit may have one or more emission allowance accounts.
             */
            obj["ThermalGeneratingUnit"] = base.parse_attribute (/<cim:EmissionAccount.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.EmissionAccount;
            if (null == bucket)
                context.parsed.EmissionAccount = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Relationship between unit heat input in energy per time for main fuel (Y1-axis) and supplemental fuel (Y2-axis) versus unit output in active power (X-axis).
         * The quantity of main fuel used to sustain generation at this output level is prorated for throttling between definition points. The quantity of supplemental fuel used at this output level is fixed and not prorated.
         */
        function parse_HeatInputCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "HeatInputCurve";
            /**
             * Power output - auxiliary power multiplier adjustment factor.
             */
            obj["auxPowerMult"] = base.parse_element (/<cim:HeatInputCurve.auxPowerMult>([\s\S]*?)<\/cim:HeatInputCurve.auxPowerMult>/g, sub, context, true);
            /**
             * Power output - auxiliary power offset adjustment factor.
             */
            obj["auxPowerOffset"] = base.parse_element (/<cim:HeatInputCurve.auxPowerOffset>([\s\S]*?)<\/cim:HeatInputCurve.auxPowerOffset>/g, sub, context, true);
            /**
             * Heat input - efficiency multiplier adjustment factor.
             */
            obj["heatInputEff"] = base.parse_element (/<cim:HeatInputCurve.heatInputEff>([\s\S]*?)<\/cim:HeatInputCurve.heatInputEff>/g, sub, context, true);
            /**
             * Heat input - offset adjustment factor.
             */
            obj["heatInputOffset"] = base.parse_element (/<cim:HeatInputCurve.heatInputOffset>([\s\S]*?)<\/cim:HeatInputCurve.heatInputOffset>/g, sub, context, true);
            /**
             * Flag is set to true when output is expressed in net active power.
             */
            obj["isNetGrossP"] = base.to_boolean (base.parse_element (/<cim:HeatInputCurve.isNetGrossP>([\s\S]*?)<\/cim:HeatInputCurve.isNetGrossP>/g, sub, context, true));
            /**
             * A thermal generating unit may have a heat input curve.
             */
            obj["ThermalGeneratingUnit"] = base.parse_attribute (/<cim:HeatInputCurve.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.HeatInputCurve;
            if (null == bucket)
                context.parsed.HeatInputCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Unit start up characteristics depending on how long the unit has been off line.
         */
        function parse_StartupModel (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "StartupModel";
            /**
             * Fixed maintenance cost.
             */
            obj["fixedMaintCost"] = base.parse_element (/<cim:StartupModel.fixedMaintCost>([\s\S]*?)<\/cim:StartupModel.fixedMaintCost>/g, sub, context, true);
            /**
             * The amount of heat input per time uint required for hot standby operation.
             */
            obj["hotStandbyHeat"] = base.parse_element (/<cim:StartupModel.hotStandbyHeat>([\s\S]*?)<\/cim:StartupModel.hotStandbyHeat>/g, sub, context, true);
            /**
             * Incremental maintenance cost.
             */
            obj["incrementalMaintCost"] = base.parse_element (/<cim:StartupModel.incrementalMaintCost>([\s\S]*?)<\/cim:StartupModel.incrementalMaintCost>/g, sub, context, true);
            /**
             * The minimum number of hours the unit must be down before restart.
             */
            obj["minimumDownTime"] = base.parse_element (/<cim:StartupModel.minimumDownTime>([\s\S]*?)<\/cim:StartupModel.minimumDownTime>/g, sub, context, true);
            /**
             * The minimum number of hours the unit must be operating before being allowed to shut down.
             */
            obj["minimumRunTime"] = base.parse_element (/<cim:StartupModel.minimumRunTime>([\s\S]*?)<\/cim:StartupModel.minimumRunTime>/g, sub, context, true);
            /**
             * The opportunity cost associated with the return in monetary unit.
             * This represents the restart's "share" of the unit depreciation and risk of an event which would damage the unit.
             */
            obj["riskFactorCost"] = base.parse_element (/<cim:StartupModel.riskFactorCost>([\s\S]*?)<\/cim:StartupModel.riskFactorCost>/g, sub, context, true);
            /**
             * Total miscellaneous start up costs.
             */
            obj["startupCost"] = base.parse_element (/<cim:StartupModel.startupCost>([\s\S]*?)<\/cim:StartupModel.startupCost>/g, sub, context, true);
            /**
             * The date and time of the most recent generating unit startup.
             */
            obj["startupDate"] = base.to_datetime (base.parse_element (/<cim:StartupModel.startupDate>([\s\S]*?)<\/cim:StartupModel.startupDate>/g, sub, context, true));
            /**
             * Startup priority within control area where lower numbers indicate higher priorities.
             * More than one unit in an area may be assigned the same priority.
             */
            obj["startupPriority"] = base.parse_element (/<cim:StartupModel.startupPriority>([\s\S]*?)<\/cim:StartupModel.startupPriority>/g, sub, context, true);
            /**
             * The unit's auxiliary active power consumption to maintain standby mode.
             */
            obj["stbyAuxP"] = base.parse_element (/<cim:StartupModel.stbyAuxP>([\s\S]*?)<\/cim:StartupModel.stbyAuxP>/g, sub, context, true);
            /**
             * The unit's startup model may have a startup ignition fuel curve.
             */
            obj["StartIgnFuelCurve"] = base.parse_attribute (/<cim:StartupModel.StartIgnFuelCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * A thermal generating unit may have a startup model.
             */
            obj["ThermalGeneratingUnit"] = base.parse_attribute (/<cim:StartupModel.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The unit's startup model may have a startup main fuel curve.
             */
            obj["StartMainFuelCurve"] = base.parse_attribute (/<cim:StartupModel.StartMainFuelCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The unit's startup model may have a startup ramp curve.
             */
            obj["StartRampCurve"] = base.parse_attribute (/<cim:StartupModel.StartRampCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.StartupModel;
            if (null == bucket)
                context.parsed.StartupModel = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Cost, in units of currency, per quantity of heat generated.
         */
        function parse_CostPerHeatUnit (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CostPerHeatUnit";
            obj["denominatorMultiplier"] = base.parse_element (/<cim:CostPerHeatUnit.denominatorMultiplier>([\s\S]*?)<\/cim:CostPerHeatUnit.denominatorMultiplier>/g, sub, context, true);
            obj["denominatorUnit"] = base.parse_element (/<cim:CostPerHeatUnit.denominatorUnit>([\s\S]*?)<\/cim:CostPerHeatUnit.denominatorUnit>/g, sub, context, true);
            obj["multiplier"] = base.parse_element (/<cim:CostPerHeatUnit.multiplier>([\s\S]*?)<\/cim:CostPerHeatUnit.multiplier>/g, sub, context, true);
            obj["unit"] = base.parse_element (/<cim:CostPerHeatUnit.unit>([\s\S]*?)<\/cim:CostPerHeatUnit.unit>/g, sub, context, true);
            obj["value"] = base.to_float (base.parse_element (/<cim:CostPerHeatUnit.value>([\s\S]*?)<\/cim:CostPerHeatUnit.value>/g, sub, context, true));
            bucket = context.parsed.CostPerHeatUnit;
            if (null == bucket)
                context.parsed.CostPerHeatUnit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A set of combustion turbines and steam turbines where the exhaust heat from the combustion turbines is recovered to make steam for the steam turbines, resulting in greater overall plant efficiency.
         */
        function parse_CombinedCyclePlant (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "CombinedCyclePlant";
            /**
             * The combined cycle plant's active power output rating.
             */
            obj["combCyclePlantRating"] = base.parse_element (/<cim:CombinedCyclePlant.combCyclePlantRating>([\s\S]*?)<\/cim:CombinedCyclePlant.combCyclePlantRating>/g, sub, context, true);
            bucket = context.parsed.CombinedCyclePlant;
            if (null == bucket)
                context.parsed.CombinedCyclePlant = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Reservoir water level targets from advanced studies or "rule curves".
         * Typically in one hour increments for up to 10 days.
         */
        function parse_TargetLevelSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "TargetLevelSchedule";
            /**
             * High target level limit, above which the reservoir operation will be penalized.
             */
            obj["highLevelLimit"] = base.parse_element (/<cim:TargetLevelSchedule.highLevelLimit>([\s\S]*?)<\/cim:TargetLevelSchedule.highLevelLimit>/g, sub, context, true);
            /**
             * Low target level limit, below which the reservoir operation will be penalized.
             */
            obj["lowLevelLimit"] = base.parse_element (/<cim:TargetLevelSchedule.lowLevelLimit>([\s\S]*?)<\/cim:TargetLevelSchedule.lowLevelLimit>/g, sub, context, true);
            /**
             * A reservoir may have a water level target schedule.
             */
            obj["Reservoir"] = base.parse_attribute (/<cim:TargetLevelSchedule.Reservoir\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.TargetLevelSchedule;
            if (null == bucket)
                context.parsed.TargetLevelSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A generating unit whose prime mover could be a steam turbine, combustion turbine, or diesel engine.
         */
        function parse_ThermalGeneratingUnit (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_GeneratingUnit (context, sub);
            obj.cls = "ThermalGeneratingUnit";
            /**
             * Operating and maintenance cost for the thermal unit.
             */
            obj["oMCost"] = base.parse_element (/<cim:ThermalGeneratingUnit.oMCost>([\s\S]*?)<\/cim:ThermalGeneratingUnit.oMCost>/g, sub, context, true);
            /**
             * A thermal generating unit may have a shutdown curve.
             */
            obj["ShutdownCurve"] = base.parse_attribute (/<cim:ThermalGeneratingUnit.ShutdownCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * A thermal generating unit may be a member of a cogeneration plant.
             */
            obj["CogenerationPlant"] = base.parse_attribute (/<cim:ThermalGeneratingUnit.CogenerationPlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * A thermal generating unit may have a heat rate curve.
             */
            obj["HeatRateCurve"] = base.parse_attribute (/<cim:ThermalGeneratingUnit.HeatRateCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * A thermal generating unit may be a member of a compressed air energy storage plant.
             */
            obj["CAESPlant"] = base.parse_attribute (/<cim:ThermalGeneratingUnit.CAESPlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * A thermal generating unit may have a startup model.
             */
            obj["StartupModel"] = base.parse_attribute (/<cim:ThermalGeneratingUnit.StartupModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * A thermal generating unit may be a member of a combined cycle plant.
             */
            obj["CombinedCyclePlant"] = base.parse_attribute (/<cim:ThermalGeneratingUnit.CombinedCyclePlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * A thermal generating unit may have an incremental heat rate curve.
             */
            obj["IncrementalHeatRateCurve"] = base.parse_attribute (/<cim:ThermalGeneratingUnit.IncrementalHeatRateCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * A thermal generating unit may have a heat input curve.
             */
            obj["HeatInputCurve"] = base.parse_attribute (/<cim:ThermalGeneratingUnit.HeatInputCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ThermalGeneratingUnit;
            if (null == bucket)
                context.parsed.ThermalGeneratingUnit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Natural water inflow to a reservoir, usually forecasted from predicted rain and snowmelt.
         * Typically in one hour increments for up to 10 days. The forecast is given in average cubic meters per second over the time increment.
         */
        function parse_InflowForecast (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_RegularIntervalSchedule (context, sub);
            obj.cls = "InflowForecast";
            /**
             * A reservoir may have a "natural" inflow forecast.
             */
            obj["Reservoir"] = base.parse_attribute (/<cim:InflowForecast.Reservoir\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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