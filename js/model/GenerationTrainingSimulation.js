define
(
    ["model/base", "model/Core"],
    /**
     * The Generation Dynamics package contains prime movers, such as turbines and boilers, which are needed for simulation and educational purposes.
     */
    function (base, Core)
    {

        /**
         * Once-through supercritical boiler.
         */
        function parse_Supercritical (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_FossilSteamSupply (context, sub);
            obj.cls = "Supercritical";
            bucket = context.parsed.Supercritical;
            if (null == bucket)
                context.parsed.Supercritical = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Pressurized water reactor used as a steam supply to a steam turbine.
         */
        function parse_PWRSteamSupply (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_SteamSupply (context, sub);
            obj.cls = "PWRSteamSupply";
            /**
             * Cold leg feedback lag time constant.
             */
            obj["coldLegFBLagTC"] = base.parse_element (/<cim:PWRSteamSupply.coldLegFBLagTC>([\s\S]*?)<\/cim:PWRSteamSupply.coldLegFBLagTC>/g, sub, context, true);
            /**
             * Cold leg feedback lead time constant.
             */
            obj["coldLegFBLeadTC1"] = base.parse_element (/<cim:PWRSteamSupply.coldLegFBLeadTC1>([\s\S]*?)<\/cim:PWRSteamSupply.coldLegFBLeadTC1>/g, sub, context, true);
            /**
             * Cold leg feedback lead time constant.
             */
            obj["coldLegFBLeadTC2"] = base.parse_element (/<cim:PWRSteamSupply.coldLegFBLeadTC2>([\s\S]*?)<\/cim:PWRSteamSupply.coldLegFBLeadTC2>/g, sub, context, true);
            /**
             * Cold leg feedback gain 1.
             */
            obj["coldLegFG1"] = base.parse_element (/<cim:PWRSteamSupply.coldLegFG1>([\s\S]*?)<\/cim:PWRSteamSupply.coldLegFG1>/g, sub, context, true);
            /**
             * Cold leg feedback gain 2.
             */
            obj["coldLegFG2"] = base.parse_element (/<cim:PWRSteamSupply.coldLegFG2>([\s\S]*?)<\/cim:PWRSteamSupply.coldLegFG2>/g, sub, context, true);
            /**
             * Cold leg lag time constant.
             */
            obj["coldLegLagTC"] = base.parse_element (/<cim:PWRSteamSupply.coldLegLagTC>([\s\S]*?)<\/cim:PWRSteamSupply.coldLegLagTC>/g, sub, context, true);
            /**
             * Core heat transfer lag time constant.
             */
            obj["coreHTLagTC1"] = base.parse_element (/<cim:PWRSteamSupply.coreHTLagTC1>([\s\S]*?)<\/cim:PWRSteamSupply.coreHTLagTC1>/g, sub, context, true);
            /**
             * Core heat transfer lag time constant.
             */
            obj["coreHTLagTC2"] = base.parse_element (/<cim:PWRSteamSupply.coreHTLagTC2>([\s\S]*?)<\/cim:PWRSteamSupply.coreHTLagTC2>/g, sub, context, true);
            /**
             * Core neutronics effective time constant.
             */
            obj["coreNeutronicsEffTC"] = base.parse_element (/<cim:PWRSteamSupply.coreNeutronicsEffTC>([\s\S]*?)<\/cim:PWRSteamSupply.coreNeutronicsEffTC>/g, sub, context, true);
            /**
             * Core neutronics and heat transfer.
             */
            obj["coreNeutronicsHT"] = base.parse_element (/<cim:PWRSteamSupply.coreNeutronicsHT>([\s\S]*?)<\/cim:PWRSteamSupply.coreNeutronicsHT>/g, sub, context, true);
            /**
             * Feedback factor.
             */
            obj["feedbackFactor"] = base.parse_element (/<cim:PWRSteamSupply.feedbackFactor>([\s\S]*?)<\/cim:PWRSteamSupply.feedbackFactor>/g, sub, context, true);
            /**
             * Hot leg lag time constant.
             */
            obj["hotLegLagTC"] = base.parse_element (/<cim:PWRSteamSupply.hotLegLagTC>([\s\S]*?)<\/cim:PWRSteamSupply.hotLegLagTC>/g, sub, context, true);
            /**
             * Hot leg steam gain.
             */
            obj["hotLegSteamGain"] = base.parse_element (/<cim:PWRSteamSupply.hotLegSteamGain>([\s\S]*?)<\/cim:PWRSteamSupply.hotLegSteamGain>/g, sub, context, true);
            /**
             * Hot leg to cold leg gain.
             */
            obj["hotLegToColdLegGain"] = base.parse_element (/<cim:PWRSteamSupply.hotLegToColdLegGain>([\s\S]*?)<\/cim:PWRSteamSupply.hotLegToColdLegGain>/g, sub, context, true);
            /**
             * Pressure control gain.
             */
            obj["pressureCG"] = base.parse_element (/<cim:PWRSteamSupply.pressureCG>([\s\S]*?)<\/cim:PWRSteamSupply.pressureCG>/g, sub, context, true);
            /**
             * Steam flow feedback gain.
             */
            obj["steamFlowFG"] = base.parse_element (/<cim:PWRSteamSupply.steamFlowFG>([\s\S]*?)<\/cim:PWRSteamSupply.steamFlowFG>/g, sub, context, true);
            /**
             * Steam pressure drop lag time constant.
             */
            obj["steamPressureDropLagTC"] = base.parse_element (/<cim:PWRSteamSupply.steamPressureDropLagTC>([\s\S]*?)<\/cim:PWRSteamSupply.steamPressureDropLagTC>/g, sub, context, true);
            /**
             * Steam pressure feedback gain.
             */
            obj["steamPressureFG"] = base.parse_element (/<cim:PWRSteamSupply.steamPressureFG>([\s\S]*?)<\/cim:PWRSteamSupply.steamPressureFG>/g, sub, context, true);
            /**
             * Throttle pressure factor.
             */
            obj["throttlePressureFactor"] = base.parse_element (/<cim:PWRSteamSupply.throttlePressureFactor>([\s\S]*?)<\/cim:PWRSteamSupply.throttlePressureFactor>/g, sub, context, true);
            /**
             * Throttle pressure setpoint.
             */
            obj["throttlePressureSP"] = base.parse_element (/<cim:PWRSteamSupply.throttlePressureSP>([\s\S]*?)<\/cim:PWRSteamSupply.throttlePressureSP>/g, sub, context, true);
            bucket = context.parsed.PWRSteamSupply;
            if (null == bucket)
                context.parsed.PWRSteamSupply = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Relationship between the combustion turbine's power output rating in gross active power (X-axis) and the ambient air temperature (Y-axis).
         */
        function parse_CTTempActivePowerCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "CTTempActivePowerCurve";
            /**
             * A combustion turbine may have an active power versus ambient temperature relationship.
             */
            obj["CombustionTurbine"] = base.parse_attribute (/<cim:CTTempActivePowerCurve.CombustionTurbine\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.CTTempActivePowerCurve;
            if (null == bucket)
                context.parsed.CTTempActivePowerCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The heat recovery system associated with combustion turbines in order to produce steam for combined cycle plants.
         */
        function parse_HeatRecoveryBoiler (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_FossilSteamSupply (context, sub);
            obj.cls = "HeatRecoveryBoiler";
            /**
             * The steam supply rating in kilopounds per hour, if dual pressure boiler.
             */
            obj["steamSupplyRating2"] = base.to_float (base.parse_element (/<cim:HeatRecoveryBoiler.steamSupplyRating2>([\s\S]*?)<\/cim:HeatRecoveryBoiler.steamSupplyRating2>/g, sub, context, true));
            bucket = context.parsed.HeatRecoveryBoiler;
            if (null == bucket)
                context.parsed.HeatRecoveryBoiler = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Type of turbine.
         */
        function parse_TurbineType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TurbineType";
            /**
             * Francis.
             */
            obj["francis"] = base.parse_element (/<cim:TurbineType.francis>([\s\S]*?)<\/cim:TurbineType.francis>/g, sub, context, true);
            /**
             * Pelton.
             */
            obj["pelton"] = base.parse_element (/<cim:TurbineType.pelton>([\s\S]*?)<\/cim:TurbineType.pelton>/g, sub, context, true);
            /**
             * Kaplan.
             */
            obj["kaplan"] = base.parse_element (/<cim:TurbineType.kaplan>([\s\S]*?)<\/cim:TurbineType.kaplan>/g, sub, context, true);
            bucket = context.parsed.TurbineType;
            if (null == bucket)
                context.parsed.TurbineType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A water driven prime mover.
         * Typical turbine types are: Francis, Kaplan, and Pelton.
         */
        function parse_HydroTurbine (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PrimeMover (context, sub);
            obj.cls = "HydroTurbine";
            /**
             * Gate rate limit.
             */
            obj["gateRateLimit"] = base.to_float (base.parse_element (/<cim:HydroTurbine.gateRateLimit>([\s\S]*?)<\/cim:HydroTurbine.gateRateLimit>/g, sub, context, true));
            /**
             * Gate upper limit.
             */
            obj["gateUpperLimit"] = base.parse_element (/<cim:HydroTurbine.gateUpperLimit>([\s\S]*?)<\/cim:HydroTurbine.gateUpperLimit>/g, sub, context, true);
            /**
             * Maximum efficiency active power at maximum head conditions.
             */
            obj["maxHeadMaxP"] = base.parse_element (/<cim:HydroTurbine.maxHeadMaxP>([\s\S]*?)<\/cim:HydroTurbine.maxHeadMaxP>/g, sub, context, true);
            /**
             * Maximum efficiency active power at minimum head conditions.
             */
            obj["minHeadMaxP"] = base.parse_element (/<cim:HydroTurbine.minHeadMaxP>([\s\S]*?)<\/cim:HydroTurbine.minHeadMaxP>/g, sub, context, true);
            /**
             * Rated speed in number of revolutions.
             */
            obj["speedRating"] = base.parse_element (/<cim:HydroTurbine.speedRating>([\s\S]*?)<\/cim:HydroTurbine.speedRating>/g, sub, context, true);
            /**
             * Speed regulation.
             */
            obj["speedRegulation"] = base.parse_element (/<cim:HydroTurbine.speedRegulation>([\s\S]*?)<\/cim:HydroTurbine.speedRegulation>/g, sub, context, true);
            /**
             * Transient droop time constant.
             */
            obj["transientDroopTime"] = base.parse_element (/<cim:HydroTurbine.transientDroopTime>([\s\S]*?)<\/cim:HydroTurbine.transientDroopTime>/g, sub, context, true);
            /**
             * Transient regulation.
             */
            obj["transientRegulation"] = base.parse_element (/<cim:HydroTurbine.transientRegulation>([\s\S]*?)<\/cim:HydroTurbine.transientRegulation>/g, sub, context, true);
            /**
             * Rated turbine active power.
             */
            obj["turbineRating"] = base.parse_element (/<cim:HydroTurbine.turbineRating>([\s\S]*?)<\/cim:HydroTurbine.turbineRating>/g, sub, context, true);
            /**
             * Type of turbine.
             */
            obj["turbineType"] = base.parse_element (/<cim:HydroTurbine.turbineType>([\s\S]*?)<\/cim:HydroTurbine.turbineType>/g, sub, context, true);
            /**
             * Water starting time.
             */
            obj["waterStartingTime"] = base.parse_element (/<cim:HydroTurbine.waterStartingTime>([\s\S]*?)<\/cim:HydroTurbine.waterStartingTime>/g, sub, context, true);
            bucket = context.parsed.HydroTurbine;
            if (null == bucket)
                context.parsed.HydroTurbine = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Drum boiler.
         */
        function parse_DrumBoiler (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_FossilSteamSupply (context, sub);
            obj.cls = "DrumBoiler";
            /**
             * Rating of drum boiler in steam units.
             */
            obj["drumBoilerRating"] = base.to_float (base.parse_element (/<cim:DrumBoiler.drumBoilerRating>([\s\S]*?)<\/cim:DrumBoiler.drumBoilerRating>/g, sub, context, true));
            bucket = context.parsed.DrumBoiler;
            if (null == bucket)
                context.parsed.DrumBoiler = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Steam turbine.
         */
        function parse_SteamTurbine (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PrimeMover (context, sub);
            obj.cls = "SteamTurbine";
            /**
             * Crossover time constant.
             */
            obj["crossoverTC"] = base.parse_element (/<cim:SteamTurbine.crossoverTC>([\s\S]*?)<\/cim:SteamTurbine.crossoverTC>/g, sub, context, true);
            /**
             * First reheater time constant.
             */
            obj["reheater1TC"] = base.parse_element (/<cim:SteamTurbine.reheater1TC>([\s\S]*?)<\/cim:SteamTurbine.reheater1TC>/g, sub, context, true);
            /**
             * Second reheater time constant.
             */
            obj["reheater2TC"] = base.parse_element (/<cim:SteamTurbine.reheater2TC>([\s\S]*?)<\/cim:SteamTurbine.reheater2TC>/g, sub, context, true);
            /**
             * Fraction of power from shaft 1 high pressure turbine output.
             */
            obj["shaft1PowerHP"] = base.to_float (base.parse_element (/<cim:SteamTurbine.shaft1PowerHP>([\s\S]*?)<\/cim:SteamTurbine.shaft1PowerHP>/g, sub, context, true));
            /**
             * Fraction of power from shaft 1 intermediate pressure turbine output.
             */
            obj["shaft1PowerIP"] = base.to_float (base.parse_element (/<cim:SteamTurbine.shaft1PowerIP>([\s\S]*?)<\/cim:SteamTurbine.shaft1PowerIP>/g, sub, context, true));
            /**
             * Fraction of power from shaft 1 first low pressure turbine output.
             */
            obj["shaft1PowerLP1"] = base.to_float (base.parse_element (/<cim:SteamTurbine.shaft1PowerLP1>([\s\S]*?)<\/cim:SteamTurbine.shaft1PowerLP1>/g, sub, context, true));
            /**
             * Fraction of power from shaft 1 second low pressure turbine output.
             */
            obj["shaft1PowerLP2"] = base.to_float (base.parse_element (/<cim:SteamTurbine.shaft1PowerLP2>([\s\S]*?)<\/cim:SteamTurbine.shaft1PowerLP2>/g, sub, context, true));
            /**
             * Fraction of power from shaft 2 high pressure turbine output.
             */
            obj["shaft2PowerHP"] = base.to_float (base.parse_element (/<cim:SteamTurbine.shaft2PowerHP>([\s\S]*?)<\/cim:SteamTurbine.shaft2PowerHP>/g, sub, context, true));
            /**
             * Fraction of power from shaft 2 intermediate pressure turbine output.
             */
            obj["shaft2PowerIP"] = base.to_float (base.parse_element (/<cim:SteamTurbine.shaft2PowerIP>([\s\S]*?)<\/cim:SteamTurbine.shaft2PowerIP>/g, sub, context, true));
            /**
             * Fraction of power from shaft 2 first low pressure turbine output.
             */
            obj["shaft2PowerLP1"] = base.to_float (base.parse_element (/<cim:SteamTurbine.shaft2PowerLP1>([\s\S]*?)<\/cim:SteamTurbine.shaft2PowerLP1>/g, sub, context, true));
            /**
             * Fraction of power from shaft 2 second low pressure turbine output.
             */
            obj["shaft2PowerLP2"] = base.to_float (base.parse_element (/<cim:SteamTurbine.shaft2PowerLP2>([\s\S]*?)<\/cim:SteamTurbine.shaft2PowerLP2>/g, sub, context, true));
            /**
             * Steam chest time constant.
             */
            obj["steamChestTC"] = base.parse_element (/<cim:SteamTurbine.steamChestTC>([\s\S]*?)<\/cim:SteamTurbine.steamChestTC>/g, sub, context, true);
            bucket = context.parsed.SteamTurbine;
            if (null == bucket)
                context.parsed.SteamTurbine = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A prime mover that is typically fueled by gas or light oil.
         */
        function parse_CombustionTurbine (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PrimeMover (context, sub);
            obj.cls = "CombustionTurbine";
            /**
             * Default ambient temperature to be used in modeling applications.
             */
            obj["ambientTemp"] = base.parse_element (/<cim:CombustionTurbine.ambientTemp>([\s\S]*?)<\/cim:CombustionTurbine.ambientTemp>/g, sub, context, true);
            /**
             * Off-nominal frequency effect on turbine auxiliaries.
             * Per unit reduction in auxiliary active power consumption versus per unit reduction in frequency (from rated frequency).
             */
            obj["auxPowerVersusFrequency"] = base.parse_element (/<cim:CombustionTurbine.auxPowerVersusFrequency>([\s\S]*?)<\/cim:CombustionTurbine.auxPowerVersusFrequency>/g, sub, context, true);
            /**
             * Off-nominal voltage effect on turbine auxiliaries.
             * Per unit reduction in auxiliary active power consumption versus per unit reduction in auxiliary bus voltage (from a specified voltage level).
             */
            obj["auxPowerVersusVoltage"] = base.parse_element (/<cim:CombustionTurbine.auxPowerVersusVoltage>([\s\S]*?)<\/cim:CombustionTurbine.auxPowerVersusVoltage>/g, sub, context, true);
            /**
             * Off-nominal frequency effect on turbine capability.
             * Per unit reduction in unit active power capability versus per unit reduction in frequency (from rated frequency).
             */
            obj["capabilityVersusFrequency"] = base.parse_element (/<cim:CombustionTurbine.capabilityVersusFrequency>([\s\S]*?)<\/cim:CombustionTurbine.capabilityVersusFrequency>/g, sub, context, true);
            /**
             * Flag that is set to true if the combustion turbine is associated with a heat recovery boiler.
             */
            obj["heatRecoveryFlag"] = base.to_boolean (base.parse_element (/<cim:CombustionTurbine.heatRecoveryFlag>([\s\S]*?)<\/cim:CombustionTurbine.heatRecoveryFlag>/g, sub, context, true));
            /**
             * Per unit change in power per (versus) unit change in ambient temperature.
             */
            obj["powerVariationByTemp"] = base.parse_element (/<cim:CombustionTurbine.powerVariationByTemp>([\s\S]*?)<\/cim:CombustionTurbine.powerVariationByTemp>/g, sub, context, true);
            /**
             * Reference temperature at which the output of the turbine was defined.
             */
            obj["referenceTemp"] = base.parse_element (/<cim:CombustionTurbine.referenceTemp>([\s\S]*?)<\/cim:CombustionTurbine.referenceTemp>/g, sub, context, true);
            /**
             * The time constant for the turbine.
             */
            obj["timeConstant"] = base.parse_element (/<cim:CombustionTurbine.timeConstant>([\s\S]*?)<\/cim:CombustionTurbine.timeConstant>/g, sub, context, true);
            /**
             * A CAES air compressor is driven by combustion turbine.
             */
            obj["AirCompressor"] = base.parse_attribute (/<cim:CombustionTurbine.AirCompressor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * A combustion turbine may have a heat recovery boiler for making steam.
             */
            obj["HeatRecoveryBoiler"] = base.parse_attribute (/<cim:CombustionTurbine.HeatRecoveryBoiler\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * A combustion turbine may have an active power versus ambient temperature relationship.
             */
            obj["CTTempActivePowerCurve"] = base.parse_attribute (/<cim:CombustionTurbine.CTTempActivePowerCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.CombustionTurbine;
            if (null == bucket)
                context.parsed.CombustionTurbine = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Boiler control mode.
         */
        function parse_BoilerControlMode (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "BoilerControlMode";
            /**
             * Following.
             */
            obj["following"] = base.parse_element (/<cim:BoilerControlMode.following>([\s\S]*?)<\/cim:BoilerControlMode.following>/g, sub, context, true);
            /**
             * Coordinated.
             */
            obj["coordinated"] = base.parse_element (/<cim:BoilerControlMode.coordinated>([\s\S]*?)<\/cim:BoilerControlMode.coordinated>/g, sub, context, true);
            bucket = context.parsed.BoilerControlMode;
            if (null == bucket)
                context.parsed.BoilerControlMode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Once-through subcritical boiler.
         */
        function parse_Subcritical (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_FossilSteamSupply (context, sub);
            obj.cls = "Subcritical";
            bucket = context.parsed.Subcritical;
            if (null == bucket)
                context.parsed.Subcritical = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Steam supply for steam turbine.
         */
        function parse_SteamSupply (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "SteamSupply";
            /**
             * Rating of steam supply.
             */
            obj["steamSupplyRating"] = base.to_float (base.parse_element (/<cim:SteamSupply.steamSupplyRating>([\s\S]*?)<\/cim:SteamSupply.steamSupplyRating>/g, sub, context, true));
            bucket = context.parsed.SteamSupply;
            if (null == bucket)
                context.parsed.SteamSupply = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The machine used to develop mechanical energy used to drive a generator.
         */
        function parse_PrimeMover (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "PrimeMover";
            /**
             * Rating of prime mover.
             */
            obj["primeMoverRating"] = base.to_float (base.parse_element (/<cim:PrimeMover.primeMoverRating>([\s\S]*?)<\/cim:PrimeMover.primeMoverRating>/g, sub, context, true));
            bucket = context.parsed.PrimeMover;
            if (null == bucket)
                context.parsed.PrimeMover = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Boiling water reactor used as a steam supply to a steam turbine.
         */
        function parse_BWRSteamSupply (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_SteamSupply (context, sub);
            obj.cls = "BWRSteamSupply";
            /**
             * High power limit.
             */
            obj["highPowerLimit"] = base.parse_element (/<cim:BWRSteamSupply.highPowerLimit>([\s\S]*?)<\/cim:BWRSteamSupply.highPowerLimit>/g, sub, context, true);
            /**
             * In-core thermal time constant.
             */
            obj["inCoreThermalTC"] = base.parse_element (/<cim:BWRSteamSupply.inCoreThermalTC>([\s\S]*?)<\/cim:BWRSteamSupply.inCoreThermalTC>/g, sub, context, true);
            /**
             * Integral gain.
             */
            obj["integralGain"] = base.to_float (base.parse_element (/<cim:BWRSteamSupply.integralGain>([\s\S]*?)<\/cim:BWRSteamSupply.integralGain>/g, sub, context, true));
            /**
             * Initial lower limit.
             */
            obj["lowerLimit"] = base.parse_element (/<cim:BWRSteamSupply.lowerLimit>([\s\S]*?)<\/cim:BWRSteamSupply.lowerLimit>/g, sub, context, true);
            /**
             * Low power limit.
             */
            obj["lowPowerLimit"] = base.parse_element (/<cim:BWRSteamSupply.lowPowerLimit>([\s\S]*?)<\/cim:BWRSteamSupply.lowPowerLimit>/g, sub, context, true);
            /**
             * Pressure limit.
             */
            obj["pressureLimit"] = base.parse_element (/<cim:BWRSteamSupply.pressureLimit>([\s\S]*?)<\/cim:BWRSteamSupply.pressureLimit>/g, sub, context, true);
            /**
             * Pressure setpoint gain adjuster.
             */
            obj["pressureSetpointGA"] = base.to_float (base.parse_element (/<cim:BWRSteamSupply.pressureSetpointGA>([\s\S]*?)<\/cim:BWRSteamSupply.pressureSetpointGA>/g, sub, context, true));
            /**
             * Pressure setpoint time constant.
             */
            obj["pressureSetpointTC1"] = base.parse_element (/<cim:BWRSteamSupply.pressureSetpointTC1>([\s\S]*?)<\/cim:BWRSteamSupply.pressureSetpointTC1>/g, sub, context, true);
            /**
             * Pressure setpoint time constant.
             */
            obj["pressureSetpointTC2"] = base.parse_element (/<cim:BWRSteamSupply.pressureSetpointTC2>([\s\S]*?)<\/cim:BWRSteamSupply.pressureSetpointTC2>/g, sub, context, true);
            /**
             * Proportional gain.
             */
            obj["proportionalGain"] = base.to_float (base.parse_element (/<cim:BWRSteamSupply.proportionalGain>([\s\S]*?)<\/cim:BWRSteamSupply.proportionalGain>/g, sub, context, true));
            /**
             * Coefficient for modeling the effect of off-nominal frequency and voltage on recirculation and core flow, which affects the BWR power output.
             */
            obj["rfAux1"] = base.parse_element (/<cim:BWRSteamSupply.rfAux1>([\s\S]*?)<\/cim:BWRSteamSupply.rfAux1>/g, sub, context, true);
            /**
             * Coefficient for modeling the effect of off-nominal frequency and voltage on recirculation and core flow, which affects the BWR power output.
             */
            obj["rfAux2"] = base.parse_element (/<cim:BWRSteamSupply.rfAux2>([\s\S]*?)<\/cim:BWRSteamSupply.rfAux2>/g, sub, context, true);
            /**
             * Coefficient for modeling the effect of off-nominal frequency and voltage on recirculation and core flow, which affects the BWR power output.
             */
            obj["rfAux3"] = base.parse_element (/<cim:BWRSteamSupply.rfAux3>([\s\S]*?)<\/cim:BWRSteamSupply.rfAux3>/g, sub, context, true);
            /**
             * Coefficient for modeling the effect of off-nominal frequency and voltage on recirculation and core flow, which affects the BWR power output.
             */
            obj["rfAux4"] = base.parse_element (/<cim:BWRSteamSupply.rfAux4>([\s\S]*?)<\/cim:BWRSteamSupply.rfAux4>/g, sub, context, true);
            /**
             * Coefficient for modeling the effect of off-nominal frequency and voltage on recirculation and core flow, which affects the BWR power output.
             */
            obj["rfAux5"] = base.parse_element (/<cim:BWRSteamSupply.rfAux5>([\s\S]*?)<\/cim:BWRSteamSupply.rfAux5>/g, sub, context, true);
            /**
             * Coefficient for modeling the effect of off-nominal frequency and voltage on recirculation and core flow, which affects the BWR power output.
             */
            obj["rfAux6"] = base.parse_element (/<cim:BWRSteamSupply.rfAux6>([\s\S]*?)<\/cim:BWRSteamSupply.rfAux6>/g, sub, context, true);
            /**
             * Coefficient for modeling the effect of off-nominal frequency and voltage on recirculation and core flow, which affects the BWR power output.
             */
            obj["rfAux7"] = base.parse_element (/<cim:BWRSteamSupply.rfAux7>([\s\S]*?)<\/cim:BWRSteamSupply.rfAux7>/g, sub, context, true);
            /**
             * Coefficient for modeling the effect of off-nominal frequency and voltage on recirculation and core flow, which affects the BWR power output.
             */
            obj["rfAux8"] = base.parse_element (/<cim:BWRSteamSupply.rfAux8>([\s\S]*?)<\/cim:BWRSteamSupply.rfAux8>/g, sub, context, true);
            /**
             * Rod pattern.
             */
            obj["rodPattern"] = base.parse_element (/<cim:BWRSteamSupply.rodPattern>([\s\S]*?)<\/cim:BWRSteamSupply.rodPattern>/g, sub, context, true);
            /**
             * Constant associated with rod pattern.
             */
            obj["rodPatternConstant"] = base.to_float (base.parse_element (/<cim:BWRSteamSupply.rodPatternConstant>([\s\S]*?)<\/cim:BWRSteamSupply.rodPatternConstant>/g, sub, context, true));
            /**
             * Initial upper limit.
             */
            obj["upperLimit"] = base.parse_element (/<cim:BWRSteamSupply.upperLimit>([\s\S]*?)<\/cim:BWRSteamSupply.upperLimit>/g, sub, context, true);
            bucket = context.parsed.BWRSteamSupply;
            if (null == bucket)
                context.parsed.BWRSteamSupply = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Fossil fueled boiler (e.g., coal, oil, gas).
         */
        function parse_FossilSteamSupply (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_SteamSupply (context, sub);
            obj.cls = "FossilSteamSupply";
            /**
             * Off nominal frequency effect on auxiliary real power.
             * Per unit active power variation versus per unit frequency variation.
             */
            obj["auxPowerVersusFrequency"] = base.parse_element (/<cim:FossilSteamSupply.auxPowerVersusFrequency>([\s\S]*?)<\/cim:FossilSteamSupply.auxPowerVersusFrequency>/g, sub, context, true);
            /**
             * Off nominal voltage effect on auxiliary real power.
             * Per unit active power variation versus per unit voltage variation.
             */
            obj["auxPowerVersusVoltage"] = base.parse_element (/<cim:FossilSteamSupply.auxPowerVersusVoltage>([\s\S]*?)<\/cim:FossilSteamSupply.auxPowerVersusVoltage>/g, sub, context, true);
            /**
             * The control mode of the boiler.
             */
            obj["boilerControlMode"] = base.parse_element (/<cim:FossilSteamSupply.boilerControlMode>([\s\S]*?)<\/cim:FossilSteamSupply.boilerControlMode>/g, sub, context, true);
            /**
             * Active power error bias ratio.
             */
            obj["controlErrorBiasP"] = base.to_float (base.parse_element (/<cim:FossilSteamSupply.controlErrorBiasP>([\s\S]*?)<\/cim:FossilSteamSupply.controlErrorBiasP>/g, sub, context, true));
            /**
             * Integral constant.
             */
            obj["controlIC"] = base.to_float (base.parse_element (/<cim:FossilSteamSupply.controlIC>([\s\S]*?)<\/cim:FossilSteamSupply.controlIC>/g, sub, context, true));
            /**
             * Proportional constant.
             */
            obj["controlPC"] = base.to_float (base.parse_element (/<cim:FossilSteamSupply.controlPC>([\s\S]*?)<\/cim:FossilSteamSupply.controlPC>/g, sub, context, true));
            /**
             * Pressure error bias ratio.
             */
            obj["controlPEB"] = base.to_float (base.parse_element (/<cim:FossilSteamSupply.controlPEB>([\s\S]*?)<\/cim:FossilSteamSupply.controlPEB>/g, sub, context, true));
            /**
             * Pressure error deadband.
             */
            obj["controlPED"] = base.parse_element (/<cim:FossilSteamSupply.controlPED>([\s\S]*?)<\/cim:FossilSteamSupply.controlPED>/g, sub, context, true);
            /**
             * Time constant.
             */
            obj["controlTC"] = base.to_float (base.parse_element (/<cim:FossilSteamSupply.controlTC>([\s\S]*?)<\/cim:FossilSteamSupply.controlTC>/g, sub, context, true));
            /**
             * Feedwater integral gain ratio.
             */
            obj["feedWaterIG"] = base.to_float (base.parse_element (/<cim:FossilSteamSupply.feedWaterIG>([\s\S]*?)<\/cim:FossilSteamSupply.feedWaterIG>/g, sub, context, true));
            /**
             * Feedwater proportional gain ratio.
             */
            obj["feedWaterPG"] = base.to_float (base.parse_element (/<cim:FossilSteamSupply.feedWaterPG>([\s\S]*?)<\/cim:FossilSteamSupply.feedWaterPG>/g, sub, context, true));
            /**
             * Feedwater time constant rato.
             */
            obj["feedWaterTC"] = base.parse_element (/<cim:FossilSteamSupply.feedWaterTC>([\s\S]*?)<\/cim:FossilSteamSupply.feedWaterTC>/g, sub, context, true);
            /**
             * Fuel demand limit.
             */
            obj["fuelDemandLimit"] = base.parse_element (/<cim:FossilSteamSupply.fuelDemandLimit>([\s\S]*?)<\/cim:FossilSteamSupply.fuelDemandLimit>/g, sub, context, true);
            /**
             * Fuel delay.
             */
            obj["fuelSupplyDelay"] = base.parse_element (/<cim:FossilSteamSupply.fuelSupplyDelay>([\s\S]*?)<\/cim:FossilSteamSupply.fuelSupplyDelay>/g, sub, context, true);
            /**
             * Fuel supply time constant.
             */
            obj["fuelSupplyTC"] = base.parse_element (/<cim:FossilSteamSupply.fuelSupplyTC>([\s\S]*?)<\/cim:FossilSteamSupply.fuelSupplyTC>/g, sub, context, true);
            /**
             * Active power maximum error rate limit.
             */
            obj["maxErrorRateP"] = base.to_float (base.parse_element (/<cim:FossilSteamSupply.maxErrorRateP>([\s\S]*?)<\/cim:FossilSteamSupply.maxErrorRateP>/g, sub, context, true));
            /**
             * Mechanical power sensor lag.
             */
            obj["mechPowerSensorLag"] = base.parse_element (/<cim:FossilSteamSupply.mechPowerSensorLag>([\s\S]*?)<\/cim:FossilSteamSupply.mechPowerSensorLag>/g, sub, context, true);
            /**
             * Active power minimum error rate limit.
             */
            obj["minErrorRateP"] = base.to_float (base.parse_element (/<cim:FossilSteamSupply.minErrorRateP>([\s\S]*?)<\/cim:FossilSteamSupply.minErrorRateP>/g, sub, context, true));
            /**
             * Pressure control derivative gain ratio.
             */
            obj["pressureCtrlDG"] = base.to_float (base.parse_element (/<cim:FossilSteamSupply.pressureCtrlDG>([\s\S]*?)<\/cim:FossilSteamSupply.pressureCtrlDG>/g, sub, context, true));
            /**
             * Pressure control integral gain ratio.
             */
            obj["pressureCtrlIG"] = base.to_float (base.parse_element (/<cim:FossilSteamSupply.pressureCtrlIG>([\s\S]*?)<\/cim:FossilSteamSupply.pressureCtrlIG>/g, sub, context, true));
            /**
             * Pressure control proportional gain ratio.
             */
            obj["pressureCtrlPG"] = base.to_float (base.parse_element (/<cim:FossilSteamSupply.pressureCtrlPG>([\s\S]*?)<\/cim:FossilSteamSupply.pressureCtrlPG>/g, sub, context, true));
            /**
             * Pressure feedback indicator.
             */
            obj["pressureFeedback"] = base.parse_element (/<cim:FossilSteamSupply.pressureFeedback>([\s\S]*?)<\/cim:FossilSteamSupply.pressureFeedback>/g, sub, context, true);
            /**
             * Drum/primary superheater capacity.
             */
            obj["superHeater1Capacity"] = base.to_float (base.parse_element (/<cim:FossilSteamSupply.superHeater1Capacity>([\s\S]*?)<\/cim:FossilSteamSupply.superHeater1Capacity>/g, sub, context, true));
            /**
             * Secondary superheater capacity.
             */
            obj["superHeater2Capacity"] = base.to_float (base.parse_element (/<cim:FossilSteamSupply.superHeater2Capacity>([\s\S]*?)<\/cim:FossilSteamSupply.superHeater2Capacity>/g, sub, context, true));
            /**
             * Superheater pipe pressure drop constant.
             */
            obj["superHeaterPipePD"] = base.to_float (base.parse_element (/<cim:FossilSteamSupply.superHeaterPipePD>([\s\S]*?)<\/cim:FossilSteamSupply.superHeaterPipePD>/g, sub, context, true));
            /**
             * Throttle pressure setpoint.
             */
            obj["throttlePressureSP"] = base.parse_element (/<cim:FossilSteamSupply.throttlePressureSP>([\s\S]*?)<\/cim:FossilSteamSupply.throttlePressureSP>/g, sub, context, true);
            bucket = context.parsed.FossilSteamSupply;
            if (null == bucket)
                context.parsed.FossilSteamSupply = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_BWRSteamSupply: parse_BWRSteamSupply,
                parse_DrumBoiler: parse_DrumBoiler,
                parse_CTTempActivePowerCurve: parse_CTTempActivePowerCurve,
                parse_TurbineType: parse_TurbineType,
                parse_CombustionTurbine: parse_CombustionTurbine,
                parse_HeatRecoveryBoiler: parse_HeatRecoveryBoiler,
                parse_BoilerControlMode: parse_BoilerControlMode,
                parse_Supercritical: parse_Supercritical,
                parse_SteamTurbine: parse_SteamTurbine,
                parse_PrimeMover: parse_PrimeMover,
                parse_FossilSteamSupply: parse_FossilSteamSupply,
                parse_HydroTurbine: parse_HydroTurbine,
                parse_Subcritical: parse_Subcritical,
                parse_PWRSteamSupply: parse_PWRSteamSupply,
                parse_SteamSupply: parse_SteamSupply
            }
        );
    }
);