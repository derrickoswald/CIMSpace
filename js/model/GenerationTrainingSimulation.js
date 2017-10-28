define
(
    ["model/base", "model/Core"],
    /**
     * The Generation Dynamics package contains prime movers, such as turbines and boilers, which are needed for simulation and educational purposes.
     *
     */
    function (base, Core)
    {

        /**
         * Once-through supercritical boiler.
         *
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
         *
         */
        function parse_PWRSteamSupply (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_SteamSupply (context, sub);
            obj.cls = "PWRSteamSupply";
            /**
             * Cold leg feedback lag time constant.
             *
             */
            base.parse_element (/<cim:PWRSteamSupply.coldLegFBLagTC>([\s\S]*?)<\/cim:PWRSteamSupply.coldLegFBLagTC>/g, obj, "coldLegFBLagTC", base.to_string, sub, context);

            /**
             * Cold leg feedback lead time constant.
             *
             */
            base.parse_element (/<cim:PWRSteamSupply.coldLegFBLeadTC1>([\s\S]*?)<\/cim:PWRSteamSupply.coldLegFBLeadTC1>/g, obj, "coldLegFBLeadTC1", base.to_string, sub, context);

            /**
             * Cold leg feedback lead time constant.
             *
             */
            base.parse_element (/<cim:PWRSteamSupply.coldLegFBLeadTC2>([\s\S]*?)<\/cim:PWRSteamSupply.coldLegFBLeadTC2>/g, obj, "coldLegFBLeadTC2", base.to_string, sub, context);

            /**
             * Cold leg feedback gain 1.
             *
             */
            base.parse_element (/<cim:PWRSteamSupply.coldLegFG1>([\s\S]*?)<\/cim:PWRSteamSupply.coldLegFG1>/g, obj, "coldLegFG1", base.to_string, sub, context);

            /**
             * Cold leg feedback gain 2.
             *
             */
            base.parse_element (/<cim:PWRSteamSupply.coldLegFG2>([\s\S]*?)<\/cim:PWRSteamSupply.coldLegFG2>/g, obj, "coldLegFG2", base.to_string, sub, context);

            /**
             * Cold leg lag time constant.
             *
             */
            base.parse_element (/<cim:PWRSteamSupply.coldLegLagTC>([\s\S]*?)<\/cim:PWRSteamSupply.coldLegLagTC>/g, obj, "coldLegLagTC", base.to_string, sub, context);

            /**
             * Core heat transfer lag time constant.
             *
             */
            base.parse_element (/<cim:PWRSteamSupply.coreHTLagTC1>([\s\S]*?)<\/cim:PWRSteamSupply.coreHTLagTC1>/g, obj, "coreHTLagTC1", base.to_string, sub, context);

            /**
             * Core heat transfer lag time constant.
             *
             */
            base.parse_element (/<cim:PWRSteamSupply.coreHTLagTC2>([\s\S]*?)<\/cim:PWRSteamSupply.coreHTLagTC2>/g, obj, "coreHTLagTC2", base.to_string, sub, context);

            /**
             * Core neutronics effective time constant.
             *
             */
            base.parse_element (/<cim:PWRSteamSupply.coreNeutronicsEffTC>([\s\S]*?)<\/cim:PWRSteamSupply.coreNeutronicsEffTC>/g, obj, "coreNeutronicsEffTC", base.to_string, sub, context);

            /**
             * Core neutronics and heat transfer.
             *
             */
            base.parse_element (/<cim:PWRSteamSupply.coreNeutronicsHT>([\s\S]*?)<\/cim:PWRSteamSupply.coreNeutronicsHT>/g, obj, "coreNeutronicsHT", base.to_string, sub, context);

            /**
             * Feedback factor.
             *
             */
            base.parse_element (/<cim:PWRSteamSupply.feedbackFactor>([\s\S]*?)<\/cim:PWRSteamSupply.feedbackFactor>/g, obj, "feedbackFactor", base.to_string, sub, context);

            /**
             * Hot leg lag time constant.
             *
             */
            base.parse_element (/<cim:PWRSteamSupply.hotLegLagTC>([\s\S]*?)<\/cim:PWRSteamSupply.hotLegLagTC>/g, obj, "hotLegLagTC", base.to_string, sub, context);

            /**
             * Hot leg steam gain.
             *
             */
            base.parse_element (/<cim:PWRSteamSupply.hotLegSteamGain>([\s\S]*?)<\/cim:PWRSteamSupply.hotLegSteamGain>/g, obj, "hotLegSteamGain", base.to_string, sub, context);

            /**
             * Hot leg to cold leg gain.
             *
             */
            base.parse_element (/<cim:PWRSteamSupply.hotLegToColdLegGain>([\s\S]*?)<\/cim:PWRSteamSupply.hotLegToColdLegGain>/g, obj, "hotLegToColdLegGain", base.to_string, sub, context);

            /**
             * Pressure control gain.
             *
             */
            base.parse_element (/<cim:PWRSteamSupply.pressureCG>([\s\S]*?)<\/cim:PWRSteamSupply.pressureCG>/g, obj, "pressureCG", base.to_string, sub, context);

            /**
             * Steam flow feedback gain.
             *
             */
            base.parse_element (/<cim:PWRSteamSupply.steamFlowFG>([\s\S]*?)<\/cim:PWRSteamSupply.steamFlowFG>/g, obj, "steamFlowFG", base.to_string, sub, context);

            /**
             * Steam pressure drop lag time constant.
             *
             */
            base.parse_element (/<cim:PWRSteamSupply.steamPressureDropLagTC>([\s\S]*?)<\/cim:PWRSteamSupply.steamPressureDropLagTC>/g, obj, "steamPressureDropLagTC", base.to_string, sub, context);

            /**
             * Steam pressure feedback gain.
             *
             */
            base.parse_element (/<cim:PWRSteamSupply.steamPressureFG>([\s\S]*?)<\/cim:PWRSteamSupply.steamPressureFG>/g, obj, "steamPressureFG", base.to_string, sub, context);

            /**
             * Throttle pressure factor.
             *
             */
            base.parse_element (/<cim:PWRSteamSupply.throttlePressureFactor>([\s\S]*?)<\/cim:PWRSteamSupply.throttlePressureFactor>/g, obj, "throttlePressureFactor", base.to_string, sub, context);

            /**
             * Throttle pressure setpoint.
             *
             */
            base.parse_element (/<cim:PWRSteamSupply.throttlePressureSP>([\s\S]*?)<\/cim:PWRSteamSupply.throttlePressureSP>/g, obj, "throttlePressureSP", base.to_string, sub, context);

            bucket = context.parsed.PWRSteamSupply;
            if (null == bucket)
                context.parsed.PWRSteamSupply = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Relationship between the combustion turbine's power output rating in gross active power (X-axis) and the ambient air temperature (Y-axis).
         *
         */
        function parse_CTTempActivePowerCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "CTTempActivePowerCurve";
            /**
             * A combustion turbine may have an active power versus ambient temperature relationship.
             *
             */
            base.parse_attribute (/<cim:CTTempActivePowerCurve.CombustionTurbine\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CombustionTurbine", sub, context, true);

            bucket = context.parsed.CTTempActivePowerCurve;
            if (null == bucket)
                context.parsed.CTTempActivePowerCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The heat recovery system associated with combustion turbines in order to produce steam for combined cycle plants.
         *
         */
        function parse_HeatRecoveryBoiler (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_FossilSteamSupply (context, sub);
            obj.cls = "HeatRecoveryBoiler";
            /**
             * The steam supply rating in kilopounds per hour, if dual pressure boiler.
             *
             */
            base.parse_element (/<cim:HeatRecoveryBoiler.steamSupplyRating2>([\s\S]*?)<\/cim:HeatRecoveryBoiler.steamSupplyRating2>/g, obj, "steamSupplyRating2", base.to_float, sub, context);

            bucket = context.parsed.HeatRecoveryBoiler;
            if (null == bucket)
                context.parsed.HeatRecoveryBoiler = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Type of turbine.
         *
         */
        function parse_TurbineType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TurbineType";
            /**
             * Francis.
             *
             */
            base.parse_element (/<cim:TurbineType.francis>([\s\S]*?)<\/cim:TurbineType.francis>/g, obj, "francis", base.to_string, sub, context);

            /**
             * Pelton.
             *
             */
            base.parse_element (/<cim:TurbineType.pelton>([\s\S]*?)<\/cim:TurbineType.pelton>/g, obj, "pelton", base.to_string, sub, context);

            /**
             * Kaplan.
             *
             */
            base.parse_element (/<cim:TurbineType.kaplan>([\s\S]*?)<\/cim:TurbineType.kaplan>/g, obj, "kaplan", base.to_string, sub, context);

            bucket = context.parsed.TurbineType;
            if (null == bucket)
                context.parsed.TurbineType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A water driven prime mover.
         *
         * Typical turbine types are: Francis, Kaplan, and Pelton.
         *
         */
        function parse_HydroTurbine (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PrimeMover (context, sub);
            obj.cls = "HydroTurbine";
            /**
             * Gate rate limit.
             *
             */
            base.parse_element (/<cim:HydroTurbine.gateRateLimit>([\s\S]*?)<\/cim:HydroTurbine.gateRateLimit>/g, obj, "gateRateLimit", base.to_float, sub, context);

            /**
             * Gate upper limit.
             *
             */
            base.parse_element (/<cim:HydroTurbine.gateUpperLimit>([\s\S]*?)<\/cim:HydroTurbine.gateUpperLimit>/g, obj, "gateUpperLimit", base.to_string, sub, context);

            /**
             * Maximum efficiency active power at maximum head conditions.
             *
             */
            base.parse_element (/<cim:HydroTurbine.maxHeadMaxP>([\s\S]*?)<\/cim:HydroTurbine.maxHeadMaxP>/g, obj, "maxHeadMaxP", base.to_string, sub, context);

            /**
             * Maximum efficiency active power at minimum head conditions.
             *
             */
            base.parse_element (/<cim:HydroTurbine.minHeadMaxP>([\s\S]*?)<\/cim:HydroTurbine.minHeadMaxP>/g, obj, "minHeadMaxP", base.to_string, sub, context);

            /**
             * Rated speed in number of revolutions.
             *
             */
            base.parse_element (/<cim:HydroTurbine.speedRating>([\s\S]*?)<\/cim:HydroTurbine.speedRating>/g, obj, "speedRating", base.to_string, sub, context);

            /**
             * Speed regulation.
             *
             */
            base.parse_element (/<cim:HydroTurbine.speedRegulation>([\s\S]*?)<\/cim:HydroTurbine.speedRegulation>/g, obj, "speedRegulation", base.to_string, sub, context);

            /**
             * Transient droop time constant.
             *
             */
            base.parse_element (/<cim:HydroTurbine.transientDroopTime>([\s\S]*?)<\/cim:HydroTurbine.transientDroopTime>/g, obj, "transientDroopTime", base.to_string, sub, context);

            /**
             * Transient regulation.
             *
             */
            base.parse_element (/<cim:HydroTurbine.transientRegulation>([\s\S]*?)<\/cim:HydroTurbine.transientRegulation>/g, obj, "transientRegulation", base.to_string, sub, context);

            /**
             * Rated turbine active power.
             *
             */
            base.parse_element (/<cim:HydroTurbine.turbineRating>([\s\S]*?)<\/cim:HydroTurbine.turbineRating>/g, obj, "turbineRating", base.to_string, sub, context);

            /**
             * Type of turbine.
             *
             */
            base.parse_element (/<cim:HydroTurbine.turbineType>([\s\S]*?)<\/cim:HydroTurbine.turbineType>/g, obj, "turbineType", base.to_string, sub, context);

            /**
             * Water starting time.
             *
             */
            base.parse_element (/<cim:HydroTurbine.waterStartingTime>([\s\S]*?)<\/cim:HydroTurbine.waterStartingTime>/g, obj, "waterStartingTime", base.to_string, sub, context);

            bucket = context.parsed.HydroTurbine;
            if (null == bucket)
                context.parsed.HydroTurbine = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Drum boiler.
         *
         */
        function parse_DrumBoiler (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_FossilSteamSupply (context, sub);
            obj.cls = "DrumBoiler";
            /**
             * Rating of drum boiler in steam units.
             *
             */
            base.parse_element (/<cim:DrumBoiler.drumBoilerRating>([\s\S]*?)<\/cim:DrumBoiler.drumBoilerRating>/g, obj, "drumBoilerRating", base.to_float, sub, context);

            bucket = context.parsed.DrumBoiler;
            if (null == bucket)
                context.parsed.DrumBoiler = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Steam turbine.
         *
         */
        function parse_SteamTurbine (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PrimeMover (context, sub);
            obj.cls = "SteamTurbine";
            /**
             * Crossover time constant.
             *
             */
            base.parse_element (/<cim:SteamTurbine.crossoverTC>([\s\S]*?)<\/cim:SteamTurbine.crossoverTC>/g, obj, "crossoverTC", base.to_string, sub, context);

            /**
             * First reheater time constant.
             *
             */
            base.parse_element (/<cim:SteamTurbine.reheater1TC>([\s\S]*?)<\/cim:SteamTurbine.reheater1TC>/g, obj, "reheater1TC", base.to_string, sub, context);

            /**
             * Second reheater time constant.
             *
             */
            base.parse_element (/<cim:SteamTurbine.reheater2TC>([\s\S]*?)<\/cim:SteamTurbine.reheater2TC>/g, obj, "reheater2TC", base.to_string, sub, context);

            /**
             * Fraction of power from shaft 1 high pressure turbine output.
             *
             */
            base.parse_element (/<cim:SteamTurbine.shaft1PowerHP>([\s\S]*?)<\/cim:SteamTurbine.shaft1PowerHP>/g, obj, "shaft1PowerHP", base.to_float, sub, context);

            /**
             * Fraction of power from shaft 1 intermediate pressure turbine output.
             *
             */
            base.parse_element (/<cim:SteamTurbine.shaft1PowerIP>([\s\S]*?)<\/cim:SteamTurbine.shaft1PowerIP>/g, obj, "shaft1PowerIP", base.to_float, sub, context);

            /**
             * Fraction of power from shaft 1 first low pressure turbine output.
             *
             */
            base.parse_element (/<cim:SteamTurbine.shaft1PowerLP1>([\s\S]*?)<\/cim:SteamTurbine.shaft1PowerLP1>/g, obj, "shaft1PowerLP1", base.to_float, sub, context);

            /**
             * Fraction of power from shaft 1 second low pressure turbine output.
             *
             */
            base.parse_element (/<cim:SteamTurbine.shaft1PowerLP2>([\s\S]*?)<\/cim:SteamTurbine.shaft1PowerLP2>/g, obj, "shaft1PowerLP2", base.to_float, sub, context);

            /**
             * Fraction of power from shaft 2 high pressure turbine output.
             *
             */
            base.parse_element (/<cim:SteamTurbine.shaft2PowerHP>([\s\S]*?)<\/cim:SteamTurbine.shaft2PowerHP>/g, obj, "shaft2PowerHP", base.to_float, sub, context);

            /**
             * Fraction of power from shaft 2 intermediate pressure turbine output.
             *
             */
            base.parse_element (/<cim:SteamTurbine.shaft2PowerIP>([\s\S]*?)<\/cim:SteamTurbine.shaft2PowerIP>/g, obj, "shaft2PowerIP", base.to_float, sub, context);

            /**
             * Fraction of power from shaft 2 first low pressure turbine output.
             *
             */
            base.parse_element (/<cim:SteamTurbine.shaft2PowerLP1>([\s\S]*?)<\/cim:SteamTurbine.shaft2PowerLP1>/g, obj, "shaft2PowerLP1", base.to_float, sub, context);

            /**
             * Fraction of power from shaft 2 second low pressure turbine output.
             *
             */
            base.parse_element (/<cim:SteamTurbine.shaft2PowerLP2>([\s\S]*?)<\/cim:SteamTurbine.shaft2PowerLP2>/g, obj, "shaft2PowerLP2", base.to_float, sub, context);

            /**
             * Steam chest time constant.
             *
             */
            base.parse_element (/<cim:SteamTurbine.steamChestTC>([\s\S]*?)<\/cim:SteamTurbine.steamChestTC>/g, obj, "steamChestTC", base.to_string, sub, context);

            bucket = context.parsed.SteamTurbine;
            if (null == bucket)
                context.parsed.SteamTurbine = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A prime mover that is typically fueled by gas or light oil.
         *
         */
        function parse_CombustionTurbine (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PrimeMover (context, sub);
            obj.cls = "CombustionTurbine";
            /**
             * Default ambient temperature to be used in modeling applications.
             *
             */
            base.parse_element (/<cim:CombustionTurbine.ambientTemp>([\s\S]*?)<\/cim:CombustionTurbine.ambientTemp>/g, obj, "ambientTemp", base.to_string, sub, context);

            /**
             * Off-nominal frequency effect on turbine auxiliaries.
             *
             * Per unit reduction in auxiliary active power consumption versus per unit reduction in frequency (from rated frequency).
             *
             */
            base.parse_element (/<cim:CombustionTurbine.auxPowerVersusFrequency>([\s\S]*?)<\/cim:CombustionTurbine.auxPowerVersusFrequency>/g, obj, "auxPowerVersusFrequency", base.to_string, sub, context);

            /**
             * Off-nominal voltage effect on turbine auxiliaries.
             *
             * Per unit reduction in auxiliary active power consumption versus per unit reduction in auxiliary bus voltage (from a specified voltage level).
             *
             */
            base.parse_element (/<cim:CombustionTurbine.auxPowerVersusVoltage>([\s\S]*?)<\/cim:CombustionTurbine.auxPowerVersusVoltage>/g, obj, "auxPowerVersusVoltage", base.to_string, sub, context);

            /**
             * Off-nominal frequency effect on turbine capability.
             *
             * Per unit reduction in unit active power capability versus per unit reduction in frequency (from rated frequency).
             *
             */
            base.parse_element (/<cim:CombustionTurbine.capabilityVersusFrequency>([\s\S]*?)<\/cim:CombustionTurbine.capabilityVersusFrequency>/g, obj, "capabilityVersusFrequency", base.to_string, sub, context);

            /**
             * Flag that is set to true if the combustion turbine is associated with a heat recovery boiler.
             *
             */
            base.parse_element (/<cim:CombustionTurbine.heatRecoveryFlag>([\s\S]*?)<\/cim:CombustionTurbine.heatRecoveryFlag>/g, obj, "heatRecoveryFlag", base.to_boolean, sub, context);

            /**
             * Per unit change in power per (versus) unit change in ambient temperature.
             *
             */
            base.parse_element (/<cim:CombustionTurbine.powerVariationByTemp>([\s\S]*?)<\/cim:CombustionTurbine.powerVariationByTemp>/g, obj, "powerVariationByTemp", base.to_string, sub, context);

            /**
             * Reference temperature at which the output of the turbine was defined.
             *
             */
            base.parse_element (/<cim:CombustionTurbine.referenceTemp>([\s\S]*?)<\/cim:CombustionTurbine.referenceTemp>/g, obj, "referenceTemp", base.to_string, sub, context);

            /**
             * The time constant for the turbine.
             *
             */
            base.parse_element (/<cim:CombustionTurbine.timeConstant>([\s\S]*?)<\/cim:CombustionTurbine.timeConstant>/g, obj, "timeConstant", base.to_string, sub, context);

            /**
             * A CAES air compressor is driven by combustion turbine.
             *
             */
            base.parse_attribute (/<cim:CombustionTurbine.AirCompressor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AirCompressor", sub, context, true);

            /**
             * A combustion turbine may have a heat recovery boiler for making steam.
             *
             */
            base.parse_attribute (/<cim:CombustionTurbine.HeatRecoveryBoiler\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HeatRecoveryBoiler", sub, context, true);

            /**
             * A combustion turbine may have an active power versus ambient temperature relationship.
             *
             */
            base.parse_attribute (/<cim:CombustionTurbine.CTTempActivePowerCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CTTempActivePowerCurve", sub, context, true);

            bucket = context.parsed.CombustionTurbine;
            if (null == bucket)
                context.parsed.CombustionTurbine = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Boiler control mode.
         *
         */
        function parse_BoilerControlMode (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "BoilerControlMode";
            /**
             * Following.
             *
             */
            base.parse_element (/<cim:BoilerControlMode.following>([\s\S]*?)<\/cim:BoilerControlMode.following>/g, obj, "following", base.to_string, sub, context);

            /**
             * Coordinated.
             *
             */
            base.parse_element (/<cim:BoilerControlMode.coordinated>([\s\S]*?)<\/cim:BoilerControlMode.coordinated>/g, obj, "coordinated", base.to_string, sub, context);

            bucket = context.parsed.BoilerControlMode;
            if (null == bucket)
                context.parsed.BoilerControlMode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Once-through subcritical boiler.
         *
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
         *
         */
        function parse_SteamSupply (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "SteamSupply";
            /**
             * Rating of steam supply.
             *
             */
            base.parse_element (/<cim:SteamSupply.steamSupplyRating>([\s\S]*?)<\/cim:SteamSupply.steamSupplyRating>/g, obj, "steamSupplyRating", base.to_float, sub, context);

            bucket = context.parsed.SteamSupply;
            if (null == bucket)
                context.parsed.SteamSupply = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The machine used to develop mechanical energy used to drive a generator.
         *
         */
        function parse_PrimeMover (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "PrimeMover";
            /**
             * Rating of prime mover.
             *
             */
            base.parse_element (/<cim:PrimeMover.primeMoverRating>([\s\S]*?)<\/cim:PrimeMover.primeMoverRating>/g, obj, "primeMoverRating", base.to_float, sub, context);

            bucket = context.parsed.PrimeMover;
            if (null == bucket)
                context.parsed.PrimeMover = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Boiling water reactor used as a steam supply to a steam turbine.
         *
         */
        function parse_BWRSteamSupply (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_SteamSupply (context, sub);
            obj.cls = "BWRSteamSupply";
            /**
             * High power limit.
             *
             */
            base.parse_element (/<cim:BWRSteamSupply.highPowerLimit>([\s\S]*?)<\/cim:BWRSteamSupply.highPowerLimit>/g, obj, "highPowerLimit", base.to_string, sub, context);

            /**
             * In-core thermal time constant.
             *
             */
            base.parse_element (/<cim:BWRSteamSupply.inCoreThermalTC>([\s\S]*?)<\/cim:BWRSteamSupply.inCoreThermalTC>/g, obj, "inCoreThermalTC", base.to_string, sub, context);

            /**
             * Integral gain.
             *
             */
            base.parse_element (/<cim:BWRSteamSupply.integralGain>([\s\S]*?)<\/cim:BWRSteamSupply.integralGain>/g, obj, "integralGain", base.to_float, sub, context);

            /**
             * Initial lower limit.
             *
             */
            base.parse_element (/<cim:BWRSteamSupply.lowerLimit>([\s\S]*?)<\/cim:BWRSteamSupply.lowerLimit>/g, obj, "lowerLimit", base.to_string, sub, context);

            /**
             * Low power limit.
             *
             */
            base.parse_element (/<cim:BWRSteamSupply.lowPowerLimit>([\s\S]*?)<\/cim:BWRSteamSupply.lowPowerLimit>/g, obj, "lowPowerLimit", base.to_string, sub, context);

            /**
             * Pressure limit.
             *
             */
            base.parse_element (/<cim:BWRSteamSupply.pressureLimit>([\s\S]*?)<\/cim:BWRSteamSupply.pressureLimit>/g, obj, "pressureLimit", base.to_string, sub, context);

            /**
             * Pressure setpoint gain adjuster.
             *
             */
            base.parse_element (/<cim:BWRSteamSupply.pressureSetpointGA>([\s\S]*?)<\/cim:BWRSteamSupply.pressureSetpointGA>/g, obj, "pressureSetpointGA", base.to_float, sub, context);

            /**
             * Pressure setpoint time constant.
             *
             */
            base.parse_element (/<cim:BWRSteamSupply.pressureSetpointTC1>([\s\S]*?)<\/cim:BWRSteamSupply.pressureSetpointTC1>/g, obj, "pressureSetpointTC1", base.to_string, sub, context);

            /**
             * Pressure setpoint time constant.
             *
             */
            base.parse_element (/<cim:BWRSteamSupply.pressureSetpointTC2>([\s\S]*?)<\/cim:BWRSteamSupply.pressureSetpointTC2>/g, obj, "pressureSetpointTC2", base.to_string, sub, context);

            /**
             * Proportional gain.
             *
             */
            base.parse_element (/<cim:BWRSteamSupply.proportionalGain>([\s\S]*?)<\/cim:BWRSteamSupply.proportionalGain>/g, obj, "proportionalGain", base.to_float, sub, context);

            /**
             * Coefficient for modeling the effect of off-nominal frequency and voltage on recirculation and core flow, which affects the BWR power output.
             *
             */
            base.parse_element (/<cim:BWRSteamSupply.rfAux1>([\s\S]*?)<\/cim:BWRSteamSupply.rfAux1>/g, obj, "rfAux1", base.to_string, sub, context);

            /**
             * Coefficient for modeling the effect of off-nominal frequency and voltage on recirculation and core flow, which affects the BWR power output.
             *
             */
            base.parse_element (/<cim:BWRSteamSupply.rfAux2>([\s\S]*?)<\/cim:BWRSteamSupply.rfAux2>/g, obj, "rfAux2", base.to_string, sub, context);

            /**
             * Coefficient for modeling the effect of off-nominal frequency and voltage on recirculation and core flow, which affects the BWR power output.
             *
             */
            base.parse_element (/<cim:BWRSteamSupply.rfAux3>([\s\S]*?)<\/cim:BWRSteamSupply.rfAux3>/g, obj, "rfAux3", base.to_string, sub, context);

            /**
             * Coefficient for modeling the effect of off-nominal frequency and voltage on recirculation and core flow, which affects the BWR power output.
             *
             */
            base.parse_element (/<cim:BWRSteamSupply.rfAux4>([\s\S]*?)<\/cim:BWRSteamSupply.rfAux4>/g, obj, "rfAux4", base.to_string, sub, context);

            /**
             * Coefficient for modeling the effect of off-nominal frequency and voltage on recirculation and core flow, which affects the BWR power output.
             *
             */
            base.parse_element (/<cim:BWRSteamSupply.rfAux5>([\s\S]*?)<\/cim:BWRSteamSupply.rfAux5>/g, obj, "rfAux5", base.to_string, sub, context);

            /**
             * Coefficient for modeling the effect of off-nominal frequency and voltage on recirculation and core flow, which affects the BWR power output.
             *
             */
            base.parse_element (/<cim:BWRSteamSupply.rfAux6>([\s\S]*?)<\/cim:BWRSteamSupply.rfAux6>/g, obj, "rfAux6", base.to_string, sub, context);

            /**
             * Coefficient for modeling the effect of off-nominal frequency and voltage on recirculation and core flow, which affects the BWR power output.
             *
             */
            base.parse_element (/<cim:BWRSteamSupply.rfAux7>([\s\S]*?)<\/cim:BWRSteamSupply.rfAux7>/g, obj, "rfAux7", base.to_string, sub, context);

            /**
             * Coefficient for modeling the effect of off-nominal frequency and voltage on recirculation and core flow, which affects the BWR power output.
             *
             */
            base.parse_element (/<cim:BWRSteamSupply.rfAux8>([\s\S]*?)<\/cim:BWRSteamSupply.rfAux8>/g, obj, "rfAux8", base.to_string, sub, context);

            /**
             * Rod pattern.
             *
             */
            base.parse_element (/<cim:BWRSteamSupply.rodPattern>([\s\S]*?)<\/cim:BWRSteamSupply.rodPattern>/g, obj, "rodPattern", base.to_string, sub, context);

            /**
             * Constant associated with rod pattern.
             *
             */
            base.parse_element (/<cim:BWRSteamSupply.rodPatternConstant>([\s\S]*?)<\/cim:BWRSteamSupply.rodPatternConstant>/g, obj, "rodPatternConstant", base.to_float, sub, context);

            /**
             * Initial upper limit.
             *
             */
            base.parse_element (/<cim:BWRSteamSupply.upperLimit>([\s\S]*?)<\/cim:BWRSteamSupply.upperLimit>/g, obj, "upperLimit", base.to_string, sub, context);

            bucket = context.parsed.BWRSteamSupply;
            if (null == bucket)
                context.parsed.BWRSteamSupply = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Fossil fueled boiler (e.g., coal, oil, gas).
         *
         */
        function parse_FossilSteamSupply (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_SteamSupply (context, sub);
            obj.cls = "FossilSteamSupply";
            /**
             * Off nominal frequency effect on auxiliary real power.
             *
             * Per unit active power variation versus per unit frequency variation.
             *
             */
            base.parse_element (/<cim:FossilSteamSupply.auxPowerVersusFrequency>([\s\S]*?)<\/cim:FossilSteamSupply.auxPowerVersusFrequency>/g, obj, "auxPowerVersusFrequency", base.to_string, sub, context);

            /**
             * Off nominal voltage effect on auxiliary real power.
             *
             * Per unit active power variation versus per unit voltage variation.
             *
             */
            base.parse_element (/<cim:FossilSteamSupply.auxPowerVersusVoltage>([\s\S]*?)<\/cim:FossilSteamSupply.auxPowerVersusVoltage>/g, obj, "auxPowerVersusVoltage", base.to_string, sub, context);

            /**
             * The control mode of the boiler.
             *
             */
            base.parse_element (/<cim:FossilSteamSupply.boilerControlMode>([\s\S]*?)<\/cim:FossilSteamSupply.boilerControlMode>/g, obj, "boilerControlMode", base.to_string, sub, context);

            /**
             * Active power error bias ratio.
             *
             */
            base.parse_element (/<cim:FossilSteamSupply.controlErrorBiasP>([\s\S]*?)<\/cim:FossilSteamSupply.controlErrorBiasP>/g, obj, "controlErrorBiasP", base.to_float, sub, context);

            /**
             * Integral constant.
             *
             */
            base.parse_element (/<cim:FossilSteamSupply.controlIC>([\s\S]*?)<\/cim:FossilSteamSupply.controlIC>/g, obj, "controlIC", base.to_float, sub, context);

            /**
             * Proportional constant.
             *
             */
            base.parse_element (/<cim:FossilSteamSupply.controlPC>([\s\S]*?)<\/cim:FossilSteamSupply.controlPC>/g, obj, "controlPC", base.to_float, sub, context);

            /**
             * Pressure error bias ratio.
             *
             */
            base.parse_element (/<cim:FossilSteamSupply.controlPEB>([\s\S]*?)<\/cim:FossilSteamSupply.controlPEB>/g, obj, "controlPEB", base.to_float, sub, context);

            /**
             * Pressure error deadband.
             *
             */
            base.parse_element (/<cim:FossilSteamSupply.controlPED>([\s\S]*?)<\/cim:FossilSteamSupply.controlPED>/g, obj, "controlPED", base.to_string, sub, context);

            /**
             * Time constant.
             *
             */
            base.parse_element (/<cim:FossilSteamSupply.controlTC>([\s\S]*?)<\/cim:FossilSteamSupply.controlTC>/g, obj, "controlTC", base.to_float, sub, context);

            /**
             * Feedwater integral gain ratio.
             *
             */
            base.parse_element (/<cim:FossilSteamSupply.feedWaterIG>([\s\S]*?)<\/cim:FossilSteamSupply.feedWaterIG>/g, obj, "feedWaterIG", base.to_float, sub, context);

            /**
             * Feedwater proportional gain ratio.
             *
             */
            base.parse_element (/<cim:FossilSteamSupply.feedWaterPG>([\s\S]*?)<\/cim:FossilSteamSupply.feedWaterPG>/g, obj, "feedWaterPG", base.to_float, sub, context);

            /**
             * Feedwater time constant rato.
             *
             */
            base.parse_element (/<cim:FossilSteamSupply.feedWaterTC>([\s\S]*?)<\/cim:FossilSteamSupply.feedWaterTC>/g, obj, "feedWaterTC", base.to_string, sub, context);

            /**
             * Fuel demand limit.
             *
             */
            base.parse_element (/<cim:FossilSteamSupply.fuelDemandLimit>([\s\S]*?)<\/cim:FossilSteamSupply.fuelDemandLimit>/g, obj, "fuelDemandLimit", base.to_string, sub, context);

            /**
             * Fuel delay.
             *
             */
            base.parse_element (/<cim:FossilSteamSupply.fuelSupplyDelay>([\s\S]*?)<\/cim:FossilSteamSupply.fuelSupplyDelay>/g, obj, "fuelSupplyDelay", base.to_string, sub, context);

            /**
             * Fuel supply time constant.
             *
             */
            base.parse_element (/<cim:FossilSteamSupply.fuelSupplyTC>([\s\S]*?)<\/cim:FossilSteamSupply.fuelSupplyTC>/g, obj, "fuelSupplyTC", base.to_string, sub, context);

            /**
             * Active power maximum error rate limit.
             *
             */
            base.parse_element (/<cim:FossilSteamSupply.maxErrorRateP>([\s\S]*?)<\/cim:FossilSteamSupply.maxErrorRateP>/g, obj, "maxErrorRateP", base.to_float, sub, context);

            /**
             * Mechanical power sensor lag.
             *
             */
            base.parse_element (/<cim:FossilSteamSupply.mechPowerSensorLag>([\s\S]*?)<\/cim:FossilSteamSupply.mechPowerSensorLag>/g, obj, "mechPowerSensorLag", base.to_string, sub, context);

            /**
             * Active power minimum error rate limit.
             *
             */
            base.parse_element (/<cim:FossilSteamSupply.minErrorRateP>([\s\S]*?)<\/cim:FossilSteamSupply.minErrorRateP>/g, obj, "minErrorRateP", base.to_float, sub, context);

            /**
             * Pressure control derivative gain ratio.
             *
             */
            base.parse_element (/<cim:FossilSteamSupply.pressureCtrlDG>([\s\S]*?)<\/cim:FossilSteamSupply.pressureCtrlDG>/g, obj, "pressureCtrlDG", base.to_float, sub, context);

            /**
             * Pressure control integral gain ratio.
             *
             */
            base.parse_element (/<cim:FossilSteamSupply.pressureCtrlIG>([\s\S]*?)<\/cim:FossilSteamSupply.pressureCtrlIG>/g, obj, "pressureCtrlIG", base.to_float, sub, context);

            /**
             * Pressure control proportional gain ratio.
             *
             */
            base.parse_element (/<cim:FossilSteamSupply.pressureCtrlPG>([\s\S]*?)<\/cim:FossilSteamSupply.pressureCtrlPG>/g, obj, "pressureCtrlPG", base.to_float, sub, context);

            /**
             * Pressure feedback indicator.
             *
             */
            base.parse_element (/<cim:FossilSteamSupply.pressureFeedback>([\s\S]*?)<\/cim:FossilSteamSupply.pressureFeedback>/g, obj, "pressureFeedback", base.to_string, sub, context);

            /**
             * Drum/primary superheater capacity.
             *
             */
            base.parse_element (/<cim:FossilSteamSupply.superHeater1Capacity>([\s\S]*?)<\/cim:FossilSteamSupply.superHeater1Capacity>/g, obj, "superHeater1Capacity", base.to_float, sub, context);

            /**
             * Secondary superheater capacity.
             *
             */
            base.parse_element (/<cim:FossilSteamSupply.superHeater2Capacity>([\s\S]*?)<\/cim:FossilSteamSupply.superHeater2Capacity>/g, obj, "superHeater2Capacity", base.to_float, sub, context);

            /**
             * Superheater pipe pressure drop constant.
             *
             */
            base.parse_element (/<cim:FossilSteamSupply.superHeaterPipePD>([\s\S]*?)<\/cim:FossilSteamSupply.superHeaterPipePD>/g, obj, "superHeaterPipePD", base.to_float, sub, context);

            /**
             * Throttle pressure setpoint.
             *
             */
            base.parse_element (/<cim:FossilSteamSupply.throttlePressureSP>([\s\S]*?)<\/cim:FossilSteamSupply.throttlePressureSP>/g, obj, "throttlePressureSP", base.to_string, sub, context);

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