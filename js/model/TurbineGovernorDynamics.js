define
(
    ["model/base", "model/StandardModels"],
    /**
     * The turbine-governor model is linked to one or two synchronous generators and determines the shaft mechanical power (Pm) or torque (Tm) for the generator model.
     *
     * Unlike IEEE standard models for other function blocks, the three IEEE turbine-governor standard models (GovHydroIEEE0, GovHydroIEEE2, GovSteamIEEE1) are documented in IEEE Transactions not in IEEE standards. For that reason, diagrams are supplied for those models.
     *
     */
    function (base, StandardModels)
    {

        /**
         * Generic turbogas with acceleration and temperature controller.
         *
         */
        function parse_GovGAST3 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovGAST3";
            /**
             * Acceleration limit set-point (Bca).
             *
             * Unit = 1/s.  Typical Value = 0.01.
             *
             */
            base.parse_element (/<cim:GovGAST3.bca>([\s\S]*?)<\/cim:GovGAST3.bca>/g, obj, "bca", base.to_float, sub, context);

            /**
             * Droop (bp).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:GovGAST3.bp>([\s\S]*?)<\/cim:GovGAST3.bp>/g, obj, "bp", base.to_string, sub, context);

            /**
             * Exhaust temperature variation due to fuel flow increasing from 0 to 1 PU (deltaTc).
             *
             * Typical Value = 390.
             *
             */
            base.parse_element (/<cim:GovGAST3.dtc>([\s\S]*?)<\/cim:GovGAST3.dtc>/g, obj, "dtc", base.to_string, sub, context);

            /**
             * Minimum fuel flow (Ka).
             *
             * Typical Value = 0.23.
             *
             */
            base.parse_element (/<cim:GovGAST3.ka>([\s\S]*?)<\/cim:GovGAST3.ka>/g, obj, "ka", base.to_string, sub, context);

            /**
             * Fuel system feedback (K<sub>AC</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovGAST3.kac>([\s\S]*?)<\/cim:GovGAST3.kac>/g, obj, "kac", base.to_float, sub, context);

            /**
             * Acceleration control integral gain (Kca).
             *
             * Unit = 1/s.  Typical Value = 100.
             *
             */
            base.parse_element (/<cim:GovGAST3.kca>([\s\S]*?)<\/cim:GovGAST3.kca>/g, obj, "kca", base.to_float, sub, context);

            /**
             * Gain of radiation shield (Ksi).
             *
             * Typical Value = 0.8.
             *
             */
            base.parse_element (/<cim:GovGAST3.ksi>([\s\S]*?)<\/cim:GovGAST3.ksi>/g, obj, "ksi", base.to_float, sub, context);

            /**
             * Coefficient of transfer function of fuel valve positioner (Ky).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovGAST3.ky>([\s\S]*?)<\/cim:GovGAST3.ky>/g, obj, "ky", base.to_float, sub, context);

            /**
             * Fuel flow maximum negative error value (MN<sub>EF</sub>).
             *
             * Typical Value = -0.05.
             *
             */
            base.parse_element (/<cim:GovGAST3.mnef>([\s\S]*?)<\/cim:GovGAST3.mnef>/g, obj, "mnef", base.to_string, sub, context);

            /**
             * Fuel flow maximum positive error value (MX<sub>EF</sub>).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:GovGAST3.mxef>([\s\S]*?)<\/cim:GovGAST3.mxef>/g, obj, "mxef", base.to_string, sub, context);

            /**
             * Minimum fuel flow (RCMN).
             *
             * Typical Value = -0.1.
             *
             */
            base.parse_element (/<cim:GovGAST3.rcmn>([\s\S]*?)<\/cim:GovGAST3.rcmn>/g, obj, "rcmn", base.to_string, sub, context);

            /**
             * Maximum fuel flow (RCMX).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovGAST3.rcmx>([\s\S]*?)<\/cim:GovGAST3.rcmx>/g, obj, "rcmx", base.to_string, sub, context);

            /**
             * Fuel control time constant (Tac).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:GovGAST3.tac>([\s\S]*?)<\/cim:GovGAST3.tac>/g, obj, "tac", base.to_string, sub, context);

            /**
             * Compressor discharge volume time constant (Tc).
             *
             * Typical Value = 0.2.
             *
             */
            base.parse_element (/<cim:GovGAST3.tc>([\s\S]*?)<\/cim:GovGAST3.tc>/g, obj, "tc", base.to_string, sub, context);

            /**
             * Temperature controller derivative gain (Td).
             *
             * Typical Value = 3.3.
             *
             */
            base.parse_element (/<cim:GovGAST3.td>([\s\S]*?)<\/cim:GovGAST3.td>/g, obj, "td", base.to_string, sub, context);

            /**
             * Turbine rated exhaust temperature correspondent to Pm=1 PU (Tfen).
             *
             * Typical Value = 540.
             *
             */
            base.parse_element (/<cim:GovGAST3.tfen>([\s\S]*?)<\/cim:GovGAST3.tfen>/g, obj, "tfen", base.to_string, sub, context);

            /**
             * Time constant of speed governor (Tg).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:GovGAST3.tg>([\s\S]*?)<\/cim:GovGAST3.tg>/g, obj, "tg", base.to_string, sub, context);

            /**
             * Time constant of radiation shield (Tsi).
             *
             * Typical Value = 15.
             *
             */
            base.parse_element (/<cim:GovGAST3.tsi>([\s\S]*?)<\/cim:GovGAST3.tsi>/g, obj, "tsi", base.to_string, sub, context);

            /**
             * Temperature controller integration rate (Tt).
             *
             * Typical Value = 250.
             *
             */
            base.parse_element (/<cim:GovGAST3.tt>([\s\S]*?)<\/cim:GovGAST3.tt>/g, obj, "tt", base.to_string, sub, context);

            /**
             * Time constant of thermocouple (Ttc).
             *
             * Typical Value = 2.5.
             *
             */
            base.parse_element (/<cim:GovGAST3.ttc>([\s\S]*?)<\/cim:GovGAST3.ttc>/g, obj, "ttc", base.to_string, sub, context);

            /**
             * Time constant of fuel valve positioner (Ty).
             *
             * Typical Value = 0.2.
             *
             */
            base.parse_element (/<cim:GovGAST3.ty>([\s\S]*?)<\/cim:GovGAST3.ty>/g, obj, "ty", base.to_string, sub, context);

            bucket = context.parsed.GovGAST3;
            if (null == bucket)
                context.parsed.GovGAST3 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Governor control flag for Francis hydro model.
         *
         */
        function parse_FrancisGovernorControlKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "FrancisGovernorControlKind";
            /**
             * Mechanic-hydraulic regulator with tacho-accelerometer (Cflag = 1).
             *
             */
            base.parse_element (/<cim:FrancisGovernorControlKind.mechanicHydrolicTachoAccelerator>([\s\S]*?)<\/cim:FrancisGovernorControlKind.mechanicHydrolicTachoAccelerator>/g, obj, "mechanicHydrolicTachoAccelerator", base.to_string, sub, context);

            /**
             * Mechanic-hydraulic regulator with transient feedback (Cflag=2).
             *
             */
            base.parse_element (/<cim:FrancisGovernorControlKind.mechanicHydraulicTransientFeedback>([\s\S]*?)<\/cim:FrancisGovernorControlKind.mechanicHydraulicTransientFeedback>/g, obj, "mechanicHydraulicTransientFeedback", base.to_string, sub, context);

            /**
             * Electromechanical and electrohydraulic regulator (Cflag=3).
             *
             */
            base.parse_element (/<cim:FrancisGovernorControlKind.electromechanicalElectrohydraulic>([\s\S]*?)<\/cim:FrancisGovernorControlKind.electromechanicalElectrohydraulic>/g, obj, "electromechanicalElectrohydraulic", base.to_string, sub, context);

            bucket = context.parsed.FrancisGovernorControlKind;
            if (null == bucket)
                context.parsed.FrancisGovernorControlKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Steam turbine governor with reheat time constants and modeling of the effects of fast valve closing to reduce mechanical power.
         *
         */
        function parse_GovSteamFV2 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovSteamFV2";
            /**
             * (Dt).
             *
             */
            base.parse_element (/<cim:GovSteamFV2.dt>([\s\S]*?)<\/cim:GovSteamFV2.dt>/g, obj, "dt", base.to_string, sub, context);

            /**
             * Fraction of the turbine power developed by turbine sections not involved in fast valving (K).
             *
             */
            base.parse_element (/<cim:GovSteamFV2.k>([\s\S]*?)<\/cim:GovSteamFV2.k>/g, obj, "k", base.to_string, sub, context);

            /**
             * Alternate Base used instead of Machine base in equipment model if necessary (MWbase) (&gt;0).
             *
             * Unit = MW.
             *
             */
            base.parse_element (/<cim:GovSteamFV2.mwbase>([\s\S]*?)<\/cim:GovSteamFV2.mwbase>/g, obj, "mwbase", base.to_string, sub, context);

            /**
             * (R).
             *
             */
            base.parse_element (/<cim:GovSteamFV2.r>([\s\S]*?)<\/cim:GovSteamFV2.r>/g, obj, "r", base.to_string, sub, context);

            /**
             * Governor time constant (T1).
             *
             */
            base.parse_element (/<cim:GovSteamFV2.t1>([\s\S]*?)<\/cim:GovSteamFV2.t1>/g, obj, "t1", base.to_string, sub, context);

            /**
             * Reheater time constant (T3).
             *
             */
            base.parse_element (/<cim:GovSteamFV2.t3>([\s\S]*?)<\/cim:GovSteamFV2.t3>/g, obj, "t3", base.to_string, sub, context);

            /**
             * Time after initial time for valve to close (Ta).
             *
             */
            base.parse_element (/<cim:GovSteamFV2.ta>([\s\S]*?)<\/cim:GovSteamFV2.ta>/g, obj, "ta", base.to_string, sub, context);

            /**
             * Time after initial time for valve to begin opening (Tb).
             *
             */
            base.parse_element (/<cim:GovSteamFV2.tb>([\s\S]*?)<\/cim:GovSteamFV2.tb>/g, obj, "tb", base.to_string, sub, context);

            /**
             * Time after initial time for valve to become fully open (Tc).
             *
             */
            base.parse_element (/<cim:GovSteamFV2.tc>([\s\S]*?)<\/cim:GovSteamFV2.tc>/g, obj, "tc", base.to_string, sub, context);

            /**
             * Initial time to begin fast valving (Ti).
             *
             */
            base.parse_element (/<cim:GovSteamFV2.ti>([\s\S]*?)<\/cim:GovSteamFV2.ti>/g, obj, "ti", base.to_string, sub, context);

            /**
             * Time constant with which power falls off after intercept valve closure (Tt).
             *
             */
            base.parse_element (/<cim:GovSteamFV2.tt>([\s\S]*?)<\/cim:GovSteamFV2.tt>/g, obj, "tt", base.to_string, sub, context);

            /**
             * (Vmax).
             *
             */
            base.parse_element (/<cim:GovSteamFV2.vmax>([\s\S]*?)<\/cim:GovSteamFV2.vmax>/g, obj, "vmax", base.to_string, sub, context);

            /**
             * (Vmin).
             *
             */
            base.parse_element (/<cim:GovSteamFV2.vmin>([\s\S]*?)<\/cim:GovSteamFV2.vmin>/g, obj, "vmin", base.to_string, sub, context);

            bucket = context.parsed.GovSteamFV2;
            if (null == bucket)
                context.parsed.GovSteamFV2 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Detailed hydro unit - Pelton model.
         *
         * This model can be used to represent the dynamic related to water tunnel and surge chamber.
         *
         */
        function parse_GovHydroPelton (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovHydroPelton";
            /**
             * Area of the surge tank (A<sub>V0</sub>).
             *
             * Unit = m<sup>2</sup>. Typical Value = 30.
             *
             */
            base.parse_element (/<cim:GovHydroPelton.av0>([\s\S]*?)<\/cim:GovHydroPelton.av0>/g, obj, "av0", base.to_string, sub, context);

            /**
             * Area of the compensation tank (A<sub>V1</sub>).
             *
             * Unit = m<sup>2</sup>. Typical Value = 700.
             *
             */
            base.parse_element (/<cim:GovHydroPelton.av1>([\s\S]*?)<\/cim:GovHydroPelton.av1>/g, obj, "av1", base.to_string, sub, context);

            /**
             * Droop (bp).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:GovHydroPelton.bp>([\s\S]*?)<\/cim:GovHydroPelton.bp>/g, obj, "bp", base.to_string, sub, context);

            /**
             * Intentional dead-band width (DB1).
             *
             * Unit = Hz.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPelton.db1>([\s\S]*?)<\/cim:GovHydroPelton.db1>/g, obj, "db1", base.to_string, sub, context);

            /**
             * Intentional dead-band width of valve opening error (DB2).
             *
             * Unit = Hz.  Typical Value = 0.01.
             *
             */
            base.parse_element (/<cim:GovHydroPelton.db2>([\s\S]*?)<\/cim:GovHydroPelton.db2>/g, obj, "db2", base.to_string, sub, context);

            /**
             * Head of compensation chamber water level with respect to the level of penstock (H<sub>1</sub>).
             *
             * Unit = m. Typical Value = 4.
             *
             */
            base.parse_element (/<cim:GovHydroPelton.h1>([\s\S]*?)<\/cim:GovHydroPelton.h1>/g, obj, "h1", base.to_string, sub, context);

            /**
             * Head of surge tank water level with respect to the level of penstock (H<sub>2</sub>).
             *
             * Unit = m. Typical Value = 40.
             *
             */
            base.parse_element (/<cim:GovHydroPelton.h2>([\s\S]*?)<\/cim:GovHydroPelton.h2>/g, obj, "h2", base.to_string, sub, context);

            /**
             * Rated hydraulic head (H<sub>n</sub>).
             *
             * Unit = m. Typical Value = 250.
             *
             */
            base.parse_element (/<cim:GovHydroPelton.hn>([\s\S]*?)<\/cim:GovHydroPelton.hn>/g, obj, "hn", base.to_string, sub, context);

            /**
             * Penstock loss coefficient (due to friction) (Kc).
             *
             * Typical Value = 0.025.
             *
             */
            base.parse_element (/<cim:GovHydroPelton.kc>([\s\S]*?)<\/cim:GovHydroPelton.kc>/g, obj, "kc", base.to_string, sub, context);

            /**
             * Water tunnel and surge chamber loss coefficient (due to friction) (Kg).
             *
             * Typical Value = -0.025.
             *
             */
            base.parse_element (/<cim:GovHydroPelton.kg>([\s\S]*?)<\/cim:GovHydroPelton.kg>/g, obj, "kg", base.to_string, sub, context);

            /**
             * No-load turbine flow at nominal head (Qc0).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:GovHydroPelton.qc0>([\s\S]*?)<\/cim:GovHydroPelton.qc0>/g, obj, "qc0", base.to_string, sub, context);

            /**
             * Rated flow (Q<sub>n</sub>).
             *
             * Unit = m<sup>3</sup>/s. Typical Value = 40.
             *
             */
            base.parse_element (/<cim:GovHydroPelton.qn>([\s\S]*?)<\/cim:GovHydroPelton.qn>/g, obj, "qn", base.to_string, sub, context);

            /**
             * Simplified Pelton model simulation (Sflag).
             * true = enable of simplified Pelton model simulation
             * false = enable of complete Pelton model simulation (non linear gain).
             *
             * Typical Value = false.
             *
             */
            base.parse_element (/<cim:GovHydroPelton.simplifiedPelton>([\s\S]*?)<\/cim:GovHydroPelton.simplifiedPelton>/g, obj, "simplifiedPelton", base.to_boolean, sub, context);

            /**
             * Static compensating characteristic (Cflag).
             * true = enable of static compensating characteristic
             * false = inhibit of static compensating characteristic.
             *
             * Typical Value = false.
             *
             */
            base.parse_element (/<cim:GovHydroPelton.staticCompensating>([\s\S]*?)<\/cim:GovHydroPelton.staticCompensating>/g, obj, "staticCompensating", base.to_boolean, sub, context);

            /**
             * Derivative gain (accelerometer time constant) (Ta).
             *
             * Typical Value = 3.
             *
             */
            base.parse_element (/<cim:GovHydroPelton.ta>([\s\S]*?)<\/cim:GovHydroPelton.ta>/g, obj, "ta", base.to_string, sub, context);

            /**
             * Gate servo time constant (Ts).
             *
             * Typical Value = 0.15.
             *
             */
            base.parse_element (/<cim:GovHydroPelton.ts>([\s\S]*?)<\/cim:GovHydroPelton.ts>/g, obj, "ts", base.to_string, sub, context);

            /**
             * Servomotor integrator time constant (TV).
             *
             * Typical Value = 0.3.
             *
             */
            base.parse_element (/<cim:GovHydroPelton.tv>([\s\S]*?)<\/cim:GovHydroPelton.tv>/g, obj, "tv", base.to_string, sub, context);

            /**
             * Water inertia time constant (Twnc).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovHydroPelton.twnc>([\s\S]*?)<\/cim:GovHydroPelton.twnc>/g, obj, "twnc", base.to_string, sub, context);

            /**
             * Water tunnel and surge chamber inertia time constant (Twng).
             *
             * Typical Value = 3.
             *
             */
            base.parse_element (/<cim:GovHydroPelton.twng>([\s\S]*?)<\/cim:GovHydroPelton.twng>/g, obj, "twng", base.to_string, sub, context);

            /**
             * Electronic integrator time constant (Tx).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovHydroPelton.tx>([\s\S]*?)<\/cim:GovHydroPelton.tx>/g, obj, "tx", base.to_string, sub, context);

            /**
             * Maximum gate opening velocity (Va).
             *
             * Unit = PU/sec.  Typical Value = 0.016.
             *
             */
            base.parse_element (/<cim:GovHydroPelton.va>([\s\S]*?)<\/cim:GovHydroPelton.va>/g, obj, "va", base.to_float, sub, context);

            /**
             * Maximum gate opening (ValvMax).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovHydroPelton.valvmax>([\s\S]*?)<\/cim:GovHydroPelton.valvmax>/g, obj, "valvmax", base.to_string, sub, context);

            /**
             * Minimum gate opening (ValvMin).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPelton.valvmin>([\s\S]*?)<\/cim:GovHydroPelton.valvmin>/g, obj, "valvmin", base.to_string, sub, context);

            /**
             * Maximum servomotor valve opening velocity (Vav).
             *
             * Typical Value = 0.017.
             *
             */
            base.parse_element (/<cim:GovHydroPelton.vav>([\s\S]*?)<\/cim:GovHydroPelton.vav>/g, obj, "vav", base.to_string, sub, context);

            /**
             * Maximum gate closing velocity (Vc).
             *
             * Unit = PU/sec.  Typical Value = -0.016.
             *
             */
            base.parse_element (/<cim:GovHydroPelton.vc>([\s\S]*?)<\/cim:GovHydroPelton.vc>/g, obj, "vc", base.to_float, sub, context);

            /**
             * Maximum servomotor valve closing velocity (Vcv).
             *
             * Typical Value = -0.017.
             *
             */
            base.parse_element (/<cim:GovHydroPelton.vcv>([\s\S]*?)<\/cim:GovHydroPelton.vcv>/g, obj, "vcv", base.to_string, sub, context);

            /**
             * Water tunnel and surge chamber simulation (Tflag).
             * true = enable of water tunnel and surge chamber simulation
             * false = inhibit of water tunnel and surge chamber simulation.
             *
             * Typical Value = false.
             *
             */
            base.parse_element (/<cim:GovHydroPelton.waterTunnelSurgeChamberSimulation>([\s\S]*?)<\/cim:GovHydroPelton.waterTunnelSurgeChamberSimulation>/g, obj, "waterTunnelSurgeChamberSimulation", base.to_boolean, sub, context);

            /**
             * Head of upper water level with respect to the level of penstock (Zsfc).
             *
             * Unit = m. Typical Value = 25.
             *
             */
            base.parse_element (/<cim:GovHydroPelton.zsfc>([\s\S]*?)<\/cim:GovHydroPelton.zsfc>/g, obj, "zsfc", base.to_string, sub, context);

            bucket = context.parsed.GovHydroPelton;
            if (null == bucket)
                context.parsed.GovHydroPelton = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * General model for any prime mover with a PID governor, used primarily for combustion turbine and combined cycle units.
         *
         * This model can be used to represent a variety of prime movers controlled by PID governors.  It is suitable, for example, for representation of
         *
         */
        function parse_GovCT1 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovCT1";
            /**
             * Acceleration limiter setpoint (Aset).
             *
             * Unit = PU/sec.  Typical Value = 0.01.
             *
             */
            base.parse_element (/<cim:GovCT1.aset>([\s\S]*?)<\/cim:GovCT1.aset>/g, obj, "aset", base.to_float, sub, context);

            /**
             * Speed governor dead band in per unit speed (db).
             *
             * In the majority of applications, it is recommended that this value be set to zero.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovCT1.db>([\s\S]*?)<\/cim:GovCT1.db>/g, obj, "db", base.to_string, sub, context);

            /**
             * Speed sensitivity coefficient (Dm).
             *
             * Dm can represent either the variation of the engine power with the shaft speed or the variation of maximum power capability with shaft speed.  If it is positive it describes the falling slope of the engine speed verses power characteristic as speed increases. A slightly falling characteristic is typical for reciprocating engines and some aero-derivative turbines.  If it is negative the engine power is assumed to be unaffected by the shaft speed, but the maximum permissible fuel flow is taken to fall with falling shaft speed. This is characteristic of single-shaft industrial turbines due to exhaust temperature limits.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovCT1.dm>([\s\S]*?)<\/cim:GovCT1.dm>/g, obj, "dm", base.to_string, sub, context);

            /**
             * Acceleration limiter gain (Ka).
             *
             * Typical Value = 10.
             *
             */
            base.parse_element (/<cim:GovCT1.ka>([\s\S]*?)<\/cim:GovCT1.ka>/g, obj, "ka", base.to_string, sub, context);

            /**
             * Governor derivative gain (Kdgov).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovCT1.kdgov>([\s\S]*?)<\/cim:GovCT1.kdgov>/g, obj, "kdgov", base.to_string, sub, context);

            /**
             * Governor integral gain (Kigov).
             *
             * Typical Value = 2.
             *
             */
            base.parse_element (/<cim:GovCT1.kigov>([\s\S]*?)<\/cim:GovCT1.kigov>/g, obj, "kigov", base.to_string, sub, context);

            /**
             * Load limiter integral gain for PI controller (Kiload).
             *
             * Typical Value = 0.67.
             *
             */
            base.parse_element (/<cim:GovCT1.kiload>([\s\S]*?)<\/cim:GovCT1.kiload>/g, obj, "kiload", base.to_string, sub, context);

            /**
             * Power controller (reset) gain (Kimw).
             *
             * The default value of 0.01 corresponds to a reset time of 100 seconds.  A value of 0.001 corresponds to a relatively slow acting load controller.  Typical Value = 0.01.
             *
             */
            base.parse_element (/<cim:GovCT1.kimw>([\s\S]*?)<\/cim:GovCT1.kimw>/g, obj, "kimw", base.to_string, sub, context);

            /**
             * Governor proportional gain (Kpgov).
             *
             * Typical Value = 10.
             *
             */
            base.parse_element (/<cim:GovCT1.kpgov>([\s\S]*?)<\/cim:GovCT1.kpgov>/g, obj, "kpgov", base.to_string, sub, context);

            /**
             * Load limiter proportional gain for PI controller (Kpload).
             *
             * Typical Value = 2.
             *
             */
            base.parse_element (/<cim:GovCT1.kpload>([\s\S]*?)<\/cim:GovCT1.kpload>/g, obj, "kpload", base.to_string, sub, context);

            /**
             * Turbine gain (Kturb) (&gt;0).
             *
             * Typical Value = 1.5.
             *
             */
            base.parse_element (/<cim:GovCT1.kturb>([\s\S]*?)<\/cim:GovCT1.kturb>/g, obj, "kturb", base.to_string, sub, context);

            /**
             * Load limiter reference value (Ldref).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovCT1.ldref>([\s\S]*?)<\/cim:GovCT1.ldref>/g, obj, "ldref", base.to_string, sub, context);

            /**
             * Maximum value for speed error signal (maxerr).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:GovCT1.maxerr>([\s\S]*?)<\/cim:GovCT1.maxerr>/g, obj, "maxerr", base.to_string, sub, context);

            /**
             * Minimum value for speed error signal (minerr).
             *
             * Typical Value = -0.05.
             *
             */
            base.parse_element (/<cim:GovCT1.minerr>([\s\S]*?)<\/cim:GovCT1.minerr>/g, obj, "minerr", base.to_string, sub, context);

            /**
             * Base for power values (MWbase) (&gt; 0).
             *
             * Unit = MW.
             *
             */
            base.parse_element (/<cim:GovCT1.mwbase>([\s\S]*?)<\/cim:GovCT1.mwbase>/g, obj, "mwbase", base.to_string, sub, context);

            /**
             * Permanent droop (R).
             *
             * Typical Value = 0.04.
             *
             */
            base.parse_element (/<cim:GovCT1.r>([\s\S]*?)<\/cim:GovCT1.r>/g, obj, "r", base.to_string, sub, context);

            /**
             * Minimum valve closing rate (Rclose).
             *
             * Unit = PU/sec.  Typical Value = -0.1.
             *
             */
            base.parse_element (/<cim:GovCT1.rclose>([\s\S]*?)<\/cim:GovCT1.rclose>/g, obj, "rclose", base.to_float, sub, context);

            /**
             * Maximum rate of load limit decrease (Rdown).
             *
             * Typical Value = -99.
             *
             */
            base.parse_element (/<cim:GovCT1.rdown>([\s\S]*?)<\/cim:GovCT1.rdown>/g, obj, "rdown", base.to_string, sub, context);

            /**
             * Maximum valve opening rate (Ropen).
             *
             * Unit = PU/sec.  Typical Value = 0.10.
             *
             */
            base.parse_element (/<cim:GovCT1.ropen>([\s\S]*?)<\/cim:GovCT1.ropen>/g, obj, "ropen", base.to_float, sub, context);

            /**
             * Feedback signal for droop (Rselect).
             *
             * Typical Value = electricalPower.
             *
             */
            base.parse_element (/<cim:GovCT1.rselect>([\s\S]*?)<\/cim:GovCT1.rselect>/g, obj, "rselect", base.to_string, sub, context);

            /**
             * Maximum rate of load limit increase (Rup).
             *
             * Typical Value = 99.
             *
             */
            base.parse_element (/<cim:GovCT1.rup>([\s\S]*?)<\/cim:GovCT1.rup>/g, obj, "rup", base.to_string, sub, context);

            /**
             * Acceleration limiter time constant (Ta) (&gt;0).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:GovCT1.ta>([\s\S]*?)<\/cim:GovCT1.ta>/g, obj, "ta", base.to_string, sub, context);

            /**
             * Actuator time constant (Tact).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovCT1.tact>([\s\S]*?)<\/cim:GovCT1.tact>/g, obj, "tact", base.to_string, sub, context);

            /**
             * Turbine lag time constant (Tb) (&gt;0).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovCT1.tb>([\s\S]*?)<\/cim:GovCT1.tb>/g, obj, "tb", base.to_string, sub, context);

            /**
             * Turbine lead time constant (Tc).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovCT1.tc>([\s\S]*?)<\/cim:GovCT1.tc>/g, obj, "tc", base.to_string, sub, context);

            /**
             * Governor derivative controller time constant (Tdgov).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovCT1.tdgov>([\s\S]*?)<\/cim:GovCT1.tdgov>/g, obj, "tdgov", base.to_string, sub, context);

            /**
             * Transport time delay for diesel engine used in representing diesel engines where there is a small but measurable transport delay between a change in fuel flow setting and the development of torque (Teng).
             *
             * Teng should be zero in all but special cases where this transport delay is of particular concern.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovCT1.teng>([\s\S]*?)<\/cim:GovCT1.teng>/g, obj, "teng", base.to_string, sub, context);

            /**
             * Load Limiter time constant (Tfload) (&gt;0).
             *
             * Typical Value = 3.
             *
             */
            base.parse_element (/<cim:GovCT1.tfload>([\s\S]*?)<\/cim:GovCT1.tfload>/g, obj, "tfload", base.to_string, sub, context);

            /**
             * Electrical power transducer time constant (Tpelec) (&gt;0).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovCT1.tpelec>([\s\S]*?)<\/cim:GovCT1.tpelec>/g, obj, "tpelec", base.to_string, sub, context);

            /**
             * Temperature detection lead time constant (Tsa).
             *
             * Typical Value = 4.
             *
             */
            base.parse_element (/<cim:GovCT1.tsa>([\s\S]*?)<\/cim:GovCT1.tsa>/g, obj, "tsa", base.to_string, sub, context);

            /**
             * Temperature detection lag time constant (Tsb).
             *
             * Typical Value = 5.
             *
             */
            base.parse_element (/<cim:GovCT1.tsb>([\s\S]*?)<\/cim:GovCT1.tsb>/g, obj, "tsb", base.to_string, sub, context);

            /**
             * Maximum valve position limit (Vmax).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovCT1.vmax>([\s\S]*?)<\/cim:GovCT1.vmax>/g, obj, "vmax", base.to_string, sub, context);

            /**
             * Minimum valve position limit (Vmin).
             *
             * Typical Value = 0.15.
             *
             */
            base.parse_element (/<cim:GovCT1.vmin>([\s\S]*?)<\/cim:GovCT1.vmin>/g, obj, "vmin", base.to_string, sub, context);

            /**
             * No load fuel flow (Wfnl).
             *
             * Typical Value = 0.2.
             *
             */
            base.parse_element (/<cim:GovCT1.wfnl>([\s\S]*?)<\/cim:GovCT1.wfnl>/g, obj, "wfnl", base.to_string, sub, context);

            /**
             * Switch for fuel source characteristic to recognize that fuel flow, for a given fuel valve stroke, can be proportional to engine speed (Wfspd).
             * true = fuel flow proportional to speed (for some gas turbines and diesel engines with positive displacement fuel injectors)
             * false = fuel control system keeps fuel flow independent of engine speed.
             *
             * Typical Value = true.
             *
             */
            base.parse_element (/<cim:GovCT1.wfspd>([\s\S]*?)<\/cim:GovCT1.wfspd>/g, obj, "wfspd", base.to_boolean, sub, context);

            bucket = context.parsed.GovCT1;
            if (null == bucket)
                context.parsed.GovCT1 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Basic Hydro turbine governor model.
         *
         */
        function parse_GovHydro1 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovHydro1";
            /**
             * Turbine gain (At) (&gt;0).
             *
             * Typical Value = 1.2.
             *
             */
            base.parse_element (/<cim:GovHydro1.at>([\s\S]*?)<\/cim:GovHydro1.at>/g, obj, "at", base.to_string, sub, context);

            /**
             * Turbine damping factor (Dturb) (&gt;=0).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovHydro1.dturb>([\s\S]*?)<\/cim:GovHydro1.dturb>/g, obj, "dturb", base.to_string, sub, context);

            /**
             * Maximum gate opening (Gmax) (&gt;0).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovHydro1.gmax>([\s\S]*?)<\/cim:GovHydro1.gmax>/g, obj, "gmax", base.to_string, sub, context);

            /**
             * Minimum gate opening (Gmin) (&gt;=0).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro1.gmin>([\s\S]*?)<\/cim:GovHydro1.gmin>/g, obj, "gmin", base.to_string, sub, context);

            /**
             * Turbine nominal head (hdam).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovHydro1.hdam>([\s\S]*?)<\/cim:GovHydro1.hdam>/g, obj, "hdam", base.to_string, sub, context);

            /**
             * Base for power values (MWbase) (&gt; 0).
             *
             * Unit = MW.
             *
             */
            base.parse_element (/<cim:GovHydro1.mwbase>([\s\S]*?)<\/cim:GovHydro1.mwbase>/g, obj, "mwbase", base.to_string, sub, context);

            /**
             * No-load flow at nominal head (qnl) (&gt;=0).
             *
             * Typical Value = 0.08.
             *
             */
            base.parse_element (/<cim:GovHydro1.qnl>([\s\S]*?)<\/cim:GovHydro1.qnl>/g, obj, "qnl", base.to_string, sub, context);

            /**
             * Permanent droop (R) (&gt;0).
             *
             * Typical Value = 0.04.
             *
             */
            base.parse_element (/<cim:GovHydro1.rperm>([\s\S]*?)<\/cim:GovHydro1.rperm>/g, obj, "rperm", base.to_string, sub, context);

            /**
             * Temporary droop (r) (&gt;R).
             *
             * Typical Value = 0.3.
             *
             */
            base.parse_element (/<cim:GovHydro1.rtemp>([\s\S]*?)<\/cim:GovHydro1.rtemp>/g, obj, "rtemp", base.to_string, sub, context);

            /**
             * Filter time constant (<i>Tf</i>) (&gt;0).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:GovHydro1.tf>([\s\S]*?)<\/cim:GovHydro1.tf>/g, obj, "tf", base.to_string, sub, context);

            /**
             * Gate servo time constant (Tg) (&gt;0).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovHydro1.tg>([\s\S]*?)<\/cim:GovHydro1.tg>/g, obj, "tg", base.to_string, sub, context);

            /**
             * Washout time constant (Tr) (&gt;0).
             *
             * Typical Value = 5.
             *
             */
            base.parse_element (/<cim:GovHydro1.tr>([\s\S]*?)<\/cim:GovHydro1.tr>/g, obj, "tr", base.to_string, sub, context);

            /**
             * Water inertia time constant (Tw) (&gt;0).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovHydro1.tw>([\s\S]*?)<\/cim:GovHydro1.tw>/g, obj, "tw", base.to_string, sub, context);

            /**
             * Maximum gate velocity (Vlem) (&gt;0).
             *
             * Typical Value = 0.2.
             *
             */
            base.parse_element (/<cim:GovHydro1.velm>([\s\S]*?)<\/cim:GovHydro1.velm>/g, obj, "velm", base.to_float, sub, context);

            bucket = context.parsed.GovHydro1;
            if (null == bucket)
                context.parsed.GovHydro1 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Simplified governor model.
         *
         */
        function parse_GovSteam2 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovSteam2";
            /**
             * Frequency dead band (DBF).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteam2.dbf>([\s\S]*?)<\/cim:GovSteam2.dbf>/g, obj, "dbf", base.to_string, sub, context);

            /**
             * Governor gain (reciprocal of droop) (K).
             *
             * Typical Value = 20.
             *
             */
            base.parse_element (/<cim:GovSteam2.k>([\s\S]*?)<\/cim:GovSteam2.k>/g, obj, "k", base.to_float, sub, context);

            /**
             * Fuel flow maximum negative error value (MN<sub>EF</sub>).
             *
             * Typical Value = -1.
             *
             */
            base.parse_element (/<cim:GovSteam2.mnef>([\s\S]*?)<\/cim:GovSteam2.mnef>/g, obj, "mnef", base.to_string, sub, context);

            /**
             * Fuel flow maximum positive error value (MX<sub>EF</sub>).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovSteam2.mxef>([\s\S]*?)<\/cim:GovSteam2.mxef>/g, obj, "mxef", base.to_string, sub, context);

            /**
             * Maximum fuel flow (P<sub>MAX</sub>).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovSteam2.pmax>([\s\S]*?)<\/cim:GovSteam2.pmax>/g, obj, "pmax", base.to_string, sub, context);

            /**
             * Minimum fuel flow (P<sub>MIN</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteam2.pmin>([\s\S]*?)<\/cim:GovSteam2.pmin>/g, obj, "pmin", base.to_string, sub, context);

            /**
             * Governor lag time constant (T<sub>1</sub>) (&gt;0).
             *
             * Typical Value = 0.45.
             *
             */
            base.parse_element (/<cim:GovSteam2.t1>([\s\S]*?)<\/cim:GovSteam2.t1>/g, obj, "t1", base.to_string, sub, context);

            /**
             * Governor lead time constant (T<sub>2</sub>) (may be 0).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteam2.t2>([\s\S]*?)<\/cim:GovSteam2.t2>/g, obj, "t2", base.to_string, sub, context);

            bucket = context.parsed.GovSteam2;
            if (null == bucket)
                context.parsed.GovSteam2 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Double derivative hydro governor and turbine.
         *
         */
        function parse_GovHydroDD (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovHydroDD";
            /**
             * Turbine numerator multiplier (Aturb) (note 3).
             *
             * Typical Value = -1.
             *
             */
            base.parse_element (/<cim:GovHydroDD.aturb>([\s\S]*?)<\/cim:GovHydroDD.aturb>/g, obj, "aturb", base.to_string, sub, context);

            /**
             * Turbine denominator multiplier (Bturb) (note 3).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovHydroDD.bturb>([\s\S]*?)<\/cim:GovHydroDD.bturb>/g, obj, "bturb", base.to_string, sub, context);

            /**
             * Intentional dead-band width (db1).
             *
             * Unit = Hz.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroDD.db1>([\s\S]*?)<\/cim:GovHydroDD.db1>/g, obj, "db1", base.to_string, sub, context);

            /**
             * Unintentional dead-band (db2).
             *
             * Unit = MW.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroDD.db2>([\s\S]*?)<\/cim:GovHydroDD.db2>/g, obj, "db2", base.to_string, sub, context);

            /**
             * Intentional db hysteresis (eps).
             *
             * Unit = Hz.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroDD.eps>([\s\S]*?)<\/cim:GovHydroDD.eps>/g, obj, "eps", base.to_string, sub, context);

            /**
             * Maximum gate opening (Gmax).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroDD.gmax>([\s\S]*?)<\/cim:GovHydroDD.gmax>/g, obj, "gmax", base.to_string, sub, context);

            /**
             * Minimum gate opening (Gmin).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroDD.gmin>([\s\S]*?)<\/cim:GovHydroDD.gmin>/g, obj, "gmin", base.to_string, sub, context);

            /**
             * Nonlinear gain point 1, PU gv (Gv1).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroDD.gv1>([\s\S]*?)<\/cim:GovHydroDD.gv1>/g, obj, "gv1", base.to_string, sub, context);

            /**
             * Nonlinear gain point 2, PU gv (Gv2).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroDD.gv2>([\s\S]*?)<\/cim:GovHydroDD.gv2>/g, obj, "gv2", base.to_string, sub, context);

            /**
             * Nonlinear gain point 3, PU gv (Gv3).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroDD.gv3>([\s\S]*?)<\/cim:GovHydroDD.gv3>/g, obj, "gv3", base.to_string, sub, context);

            /**
             * Nonlinear gain point 4, PU gv (Gv4).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroDD.gv4>([\s\S]*?)<\/cim:GovHydroDD.gv4>/g, obj, "gv4", base.to_string, sub, context);

            /**
             * Nonlinear gain point 5, PU gv (Gv5).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroDD.gv5>([\s\S]*?)<\/cim:GovHydroDD.gv5>/g, obj, "gv5", base.to_string, sub, context);

            /**
             * Nonlinear gain point 6, PU gv (Gv6).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroDD.gv6>([\s\S]*?)<\/cim:GovHydroDD.gv6>/g, obj, "gv6", base.to_string, sub, context);

            /**
             * Input signal switch (Flag).
             * true = Pe input is used
             * false = feedback is received from CV.
             *
             * Flag is normally dependent on Tt.  If Tf is zero, Flag is set to false. If Tf is not zero, Flag is set to true.
             *
             */
            base.parse_element (/<cim:GovHydroDD.inputSignal>([\s\S]*?)<\/cim:GovHydroDD.inputSignal>/g, obj, "inputSignal", base.to_boolean, sub, context);

            /**
             * Single derivative gain (K1).
             *
             * Typical Value = 3.6.
             *
             */
            base.parse_element (/<cim:GovHydroDD.k1>([\s\S]*?)<\/cim:GovHydroDD.k1>/g, obj, "k1", base.to_string, sub, context);

            /**
             * Double derivative gain (K2).
             *
             * Typical Value = 0.2.
             *
             */
            base.parse_element (/<cim:GovHydroDD.k2>([\s\S]*?)<\/cim:GovHydroDD.k2>/g, obj, "k2", base.to_string, sub, context);

            /**
             * Gate servo gain (Kg).
             *
             * Typical Value = 3.
             *
             */
            base.parse_element (/<cim:GovHydroDD.kg>([\s\S]*?)<\/cim:GovHydroDD.kg>/g, obj, "kg", base.to_string, sub, context);

            /**
             * Integral gain (Ki).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovHydroDD.ki>([\s\S]*?)<\/cim:GovHydroDD.ki>/g, obj, "ki", base.to_string, sub, context);

            /**
             * Base for power values (MWbase) (&gt;0).
             *
             * Unit = MW.
             *
             */
            base.parse_element (/<cim:GovHydroDD.mwbase>([\s\S]*?)<\/cim:GovHydroDD.mwbase>/g, obj, "mwbase", base.to_string, sub, context);

            /**
             * Nonlinear gain point 1, PU power (Pgv1).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroDD.pgv1>([\s\S]*?)<\/cim:GovHydroDD.pgv1>/g, obj, "pgv1", base.to_string, sub, context);

            /**
             * Nonlinear gain point 2, PU power (Pgv2).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroDD.pgv2>([\s\S]*?)<\/cim:GovHydroDD.pgv2>/g, obj, "pgv2", base.to_string, sub, context);

            /**
             * Nonlinear gain point 3, PU power (Pgv3).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroDD.pgv3>([\s\S]*?)<\/cim:GovHydroDD.pgv3>/g, obj, "pgv3", base.to_string, sub, context);

            /**
             * Nonlinear gain point 4, PU power (Pgv4).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroDD.pgv4>([\s\S]*?)<\/cim:GovHydroDD.pgv4>/g, obj, "pgv4", base.to_string, sub, context);

            /**
             * Nonlinear gain point 5, PU power (Pgv5).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroDD.pgv5>([\s\S]*?)<\/cim:GovHydroDD.pgv5>/g, obj, "pgv5", base.to_string, sub, context);

            /**
             * Nonlinear gain point 6, PU power (Pgv6).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroDD.pgv6>([\s\S]*?)<\/cim:GovHydroDD.pgv6>/g, obj, "pgv6", base.to_string, sub, context);

            /**
             * Maximum gate opening, PU of MWbase (Pmax).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovHydroDD.pmax>([\s\S]*?)<\/cim:GovHydroDD.pmax>/g, obj, "pmax", base.to_string, sub, context);

            /**
             * Minimum gate opening, PU of MWbase (Pmin).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroDD.pmin>([\s\S]*?)<\/cim:GovHydroDD.pmin>/g, obj, "pmin", base.to_string, sub, context);

            /**
             * Steady state droop (R).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:GovHydroDD.r>([\s\S]*?)<\/cim:GovHydroDD.r>/g, obj, "r", base.to_string, sub, context);

            /**
             * Input filter time constant (Td).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroDD.td>([\s\S]*?)<\/cim:GovHydroDD.td>/g, obj, "td", base.to_string, sub, context);

            /**
             * Washout time constant (Tf).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:GovHydroDD.tf>([\s\S]*?)<\/cim:GovHydroDD.tf>/g, obj, "tf", base.to_string, sub, context);

            /**
             * Gate servo time constant (Tp).
             *
             * Typical Value = 0.35.
             *
             */
            base.parse_element (/<cim:GovHydroDD.tp>([\s\S]*?)<\/cim:GovHydroDD.tp>/g, obj, "tp", base.to_string, sub, context);

            /**
             * Power feedback time constant (Tt).
             *
             * Typical Value = 0.02.
             *
             */
            base.parse_element (/<cim:GovHydroDD.tt>([\s\S]*?)<\/cim:GovHydroDD.tt>/g, obj, "tt", base.to_string, sub, context);

            /**
             * Turbine time constant (Tturb) (note 3).
             *
             * Typical Value = 0.8.
             *
             */
            base.parse_element (/<cim:GovHydroDD.tturb>([\s\S]*?)<\/cim:GovHydroDD.tturb>/g, obj, "tturb", base.to_string, sub, context);

            /**
             * Maximum gate closing velocity (Velcl).
             *
             * Unit = PU/sec.  Typical Value = -0.14.
             *
             */
            base.parse_element (/<cim:GovHydroDD.velcl>([\s\S]*?)<\/cim:GovHydroDD.velcl>/g, obj, "velcl", base.to_float, sub, context);

            /**
             * Maximum gate opening velocity (Velop).
             *
             * Unit = PU/sec.  Typical Value = 0.09.
             *
             */
            base.parse_element (/<cim:GovHydroDD.velop>([\s\S]*?)<\/cim:GovHydroDD.velop>/g, obj, "velop", base.to_float, sub, context);

            bucket = context.parsed.GovHydroDD;
            if (null == bucket)
                context.parsed.GovHydroDD = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * IEEE Simplified Hydro Governor-Turbine Model.
         *
         * Used for Mechanical-Hydraulic and Electro-Hydraulic turbine governors, with our without steam feedback. Typical values given are for Mechanical-Hydraulic.
         *
         */
        function parse_GovHydroIEEE0 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovHydroIEEE0";
            /**
             * Governor gain (K<i>)</i>.
             *
             */
            base.parse_element (/<cim:GovHydroIEEE0.k>([\s\S]*?)<\/cim:GovHydroIEEE0.k>/g, obj, "k", base.to_string, sub, context);

            /**
             * Base for power values (MWbase) (&gt; 0).
             *
             * Unit = MW.
             *
             */
            base.parse_element (/<cim:GovHydroIEEE0.mwbase>([\s\S]*?)<\/cim:GovHydroIEEE0.mwbase>/g, obj, "mwbase", base.to_string, sub, context);

            /**
             * Gate maximum (Pmax).
             *
             */
            base.parse_element (/<cim:GovHydroIEEE0.pmax>([\s\S]*?)<\/cim:GovHydroIEEE0.pmax>/g, obj, "pmax", base.to_string, sub, context);

            /**
             * Gate minimum (Pmin).
             *
             */
            base.parse_element (/<cim:GovHydroIEEE0.pmin>([\s\S]*?)<\/cim:GovHydroIEEE0.pmin>/g, obj, "pmin", base.to_string, sub, context);

            /**
             * Governor lag time constant (T1).
             *
             * Typical Value = 0.25.
             *
             */
            base.parse_element (/<cim:GovHydroIEEE0.t1>([\s\S]*?)<\/cim:GovHydroIEEE0.t1>/g, obj, "t1", base.to_string, sub, context);

            /**
             * Governor lead time constant (T2<i>)</i>.
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroIEEE0.t2>([\s\S]*?)<\/cim:GovHydroIEEE0.t2>/g, obj, "t2", base.to_string, sub, context);

            /**
             * Gate actuator time constant (T3).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:GovHydroIEEE0.t3>([\s\S]*?)<\/cim:GovHydroIEEE0.t3>/g, obj, "t3", base.to_string, sub, context);

            /**
             * Water starting time (T4).
             *
             */
            base.parse_element (/<cim:GovHydroIEEE0.t4>([\s\S]*?)<\/cim:GovHydroIEEE0.t4>/g, obj, "t4", base.to_string, sub, context);

            bucket = context.parsed.GovHydroIEEE0;
            if (null == bucket)
                context.parsed.GovHydroIEEE0 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A simplified steam turbine governor model.
         *
         */
        function parse_GovSteam0 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovSteam0";
            /**
             * Turbine damping coefficient (Dt).
             *
             * Unit = delta P / delta speed. Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteam0.dt>([\s\S]*?)<\/cim:GovSteam0.dt>/g, obj, "dt", base.to_string, sub, context);

            /**
             * Base for power values (MWbase)  (&gt;0).
             *
             * Unit = MW.
             *
             */
            base.parse_element (/<cim:GovSteam0.mwbase>([\s\S]*?)<\/cim:GovSteam0.mwbase>/g, obj, "mwbase", base.to_string, sub, context);

            /**
             * Permanent droop (R).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:GovSteam0.r>([\s\S]*?)<\/cim:GovSteam0.r>/g, obj, "r", base.to_string, sub, context);

            /**
             * Steam bowl time constant (T1).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovSteam0.t1>([\s\S]*?)<\/cim:GovSteam0.t1>/g, obj, "t1", base.to_string, sub, context);

            /**
             * Numerator time constant of T2/T3 block (T2).
             *
             * Typical Value = 3.
             *
             */
            base.parse_element (/<cim:GovSteam0.t2>([\s\S]*?)<\/cim:GovSteam0.t2>/g, obj, "t2", base.to_string, sub, context);

            /**
             * Reheater time constant (T3).
             *
             * Typical Value = 10.
             *
             */
            base.parse_element (/<cim:GovSteam0.t3>([\s\S]*?)<\/cim:GovSteam0.t3>/g, obj, "t3", base.to_string, sub, context);

            /**
             * Maximum valve position, PU of mwcap (Vmax).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovSteam0.vmax>([\s\S]*?)<\/cim:GovSteam0.vmax>/g, obj, "vmax", base.to_string, sub, context);

            /**
             * Minimum valve position, PU of mwcap (Vmin).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteam0.vmin>([\s\S]*?)<\/cim:GovSteam0.vmin>/g, obj, "vmin", base.to_string, sub, context);

            bucket = context.parsed.GovSteam0;
            if (null == bucket)
                context.parsed.GovSteam0 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Simplified Steam turbine governor model.
         *
         */
        function parse_GovSteamSGO (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovSteamSGO";
            /**
             * One/per unit regulation (K1).
             *
             */
            base.parse_element (/<cim:GovSteamSGO.k1>([\s\S]*?)<\/cim:GovSteamSGO.k1>/g, obj, "k1", base.to_string, sub, context);

            /**
             * Fraction (K2).
             *
             */
            base.parse_element (/<cim:GovSteamSGO.k2>([\s\S]*?)<\/cim:GovSteamSGO.k2>/g, obj, "k2", base.to_string, sub, context);

            /**
             * Fraction (K3).
             *
             */
            base.parse_element (/<cim:GovSteamSGO.k3>([\s\S]*?)<\/cim:GovSteamSGO.k3>/g, obj, "k3", base.to_string, sub, context);

            /**
             * Base for power values (MWbase) (&gt;0).
             *
             * Unit = MW.
             *
             */
            base.parse_element (/<cim:GovSteamSGO.mwbase>([\s\S]*?)<\/cim:GovSteamSGO.mwbase>/g, obj, "mwbase", base.to_string, sub, context);

            /**
             * Upper power limit (Pmax).
             *
             */
            base.parse_element (/<cim:GovSteamSGO.pmax>([\s\S]*?)<\/cim:GovSteamSGO.pmax>/g, obj, "pmax", base.to_string, sub, context);

            /**
             * Lower power limit (Pmin).
             *
             */
            base.parse_element (/<cim:GovSteamSGO.pmin>([\s\S]*?)<\/cim:GovSteamSGO.pmin>/g, obj, "pmin", base.to_string, sub, context);

            /**
             * Controller lag (T1).
             *
             */
            base.parse_element (/<cim:GovSteamSGO.t1>([\s\S]*?)<\/cim:GovSteamSGO.t1>/g, obj, "t1", base.to_string, sub, context);

            /**
             * Controller lead compensation (T2).
             *
             */
            base.parse_element (/<cim:GovSteamSGO.t2>([\s\S]*?)<\/cim:GovSteamSGO.t2>/g, obj, "t2", base.to_string, sub, context);

            /**
             * Governor lag (T3) (&gt;0).
             *
             */
            base.parse_element (/<cim:GovSteamSGO.t3>([\s\S]*?)<\/cim:GovSteamSGO.t3>/g, obj, "t3", base.to_string, sub, context);

            /**
             * Delay due to steam inlet volumes associated with steam chest and inlet piping (T4).
             *
             */
            base.parse_element (/<cim:GovSteamSGO.t4>([\s\S]*?)<\/cim:GovSteamSGO.t4>/g, obj, "t4", base.to_string, sub, context);

            /**
             * Reheater delay including hot and cold leads (T5).
             *
             */
            base.parse_element (/<cim:GovSteamSGO.t5>([\s\S]*?)<\/cim:GovSteamSGO.t5>/g, obj, "t5", base.to_string, sub, context);

            /**
             * Delay due to IP-LP turbine, crossover pipes and LP end hoods (T6).
             *
             */
            base.parse_element (/<cim:GovSteamSGO.t6>([\s\S]*?)<\/cim:GovSteamSGO.t6>/g, obj, "t6", base.to_string, sub, context);

            bucket = context.parsed.GovSteamSGO;
            if (null == bucket)
                context.parsed.GovSteamSGO = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Fourth order lead-lag governor and hydro turbine.
         *
         */
        function parse_GovHydroR (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovHydroR";
            /**
             * Turbine gain (At).
             *
             * Typical Value = 1.2.
             *
             */
            base.parse_element (/<cim:GovHydroR.at>([\s\S]*?)<\/cim:GovHydroR.at>/g, obj, "at", base.to_string, sub, context);

            /**
             * Intentional dead-band width (db1).
             *
             * Unit = Hz.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroR.db1>([\s\S]*?)<\/cim:GovHydroR.db1>/g, obj, "db1", base.to_string, sub, context);

            /**
             * Unintentional dead-band (db2).
             *
             * Unit = MW.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroR.db2>([\s\S]*?)<\/cim:GovHydroR.db2>/g, obj, "db2", base.to_string, sub, context);

            /**
             * Turbine damping factor (Dturb).
             *
             * Typical Value = 0.2.
             *
             */
            base.parse_element (/<cim:GovHydroR.dturb>([\s\S]*?)<\/cim:GovHydroR.dturb>/g, obj, "dturb", base.to_string, sub, context);

            /**
             * Intentional db hysteresis (eps).
             *
             * Unit = Hz.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroR.eps>([\s\S]*?)<\/cim:GovHydroR.eps>/g, obj, "eps", base.to_string, sub, context);

            /**
             * Maximum governor output (Gmax).
             *
             * Typical Value = 1.05.
             *
             */
            base.parse_element (/<cim:GovHydroR.gmax>([\s\S]*?)<\/cim:GovHydroR.gmax>/g, obj, "gmax", base.to_string, sub, context);

            /**
             * Minimum governor output (Gmin).
             *
             * Typical Value = -0.05.
             *
             */
            base.parse_element (/<cim:GovHydroR.gmin>([\s\S]*?)<\/cim:GovHydroR.gmin>/g, obj, "gmin", base.to_string, sub, context);

            /**
             * Nonlinear gain point 1, PU gv (Gv1).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroR.gv1>([\s\S]*?)<\/cim:GovHydroR.gv1>/g, obj, "gv1", base.to_string, sub, context);

            /**
             * Nonlinear gain point 2, PU gv (Gv2).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroR.gv2>([\s\S]*?)<\/cim:GovHydroR.gv2>/g, obj, "gv2", base.to_string, sub, context);

            /**
             * Nonlinear gain point 3, PU gv (Gv3).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroR.gv3>([\s\S]*?)<\/cim:GovHydroR.gv3>/g, obj, "gv3", base.to_string, sub, context);

            /**
             * Nonlinear gain point 4, PU gv (Gv4).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroR.gv4>([\s\S]*?)<\/cim:GovHydroR.gv4>/g, obj, "gv4", base.to_string, sub, context);

            /**
             * Nonlinear gain point 5, PU gv (Gv5).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroR.gv5>([\s\S]*?)<\/cim:GovHydroR.gv5>/g, obj, "gv5", base.to_string, sub, context);

            /**
             * Nonlinear gain point 6, PU gv (Gv6).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroR.gv6>([\s\S]*?)<\/cim:GovHydroR.gv6>/g, obj, "gv6", base.to_string, sub, context);

            /**
             * Turbine nominal head (H0).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovHydroR.h0>([\s\S]*?)<\/cim:GovHydroR.h0>/g, obj, "h0", base.to_string, sub, context);

            /**
             * Input signal switch (Flag).
             * true = Pe input is used
             * false = feedback is received from CV.
             *
             * Flag is normally dependent on Tt.  If Tf is zero, Flag is set to false. If Tf is not zero, Flag is set to true.  Typical Value = true.
             *
             */
            base.parse_element (/<cim:GovHydroR.inputSignal>([\s\S]*?)<\/cim:GovHydroR.inputSignal>/g, obj, "inputSignal", base.to_boolean, sub, context);

            /**
             * Gate servo gain (Kg).
             *
             * Typical Value = 2.
             *
             */
            base.parse_element (/<cim:GovHydroR.kg>([\s\S]*?)<\/cim:GovHydroR.kg>/g, obj, "kg", base.to_string, sub, context);

            /**
             * Integral gain (Ki).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovHydroR.ki>([\s\S]*?)<\/cim:GovHydroR.ki>/g, obj, "ki", base.to_string, sub, context);

            /**
             * Base for power values (MWbase) (&gt;0).
             *
             * Unit = MW.
             *
             */
            base.parse_element (/<cim:GovHydroR.mwbase>([\s\S]*?)<\/cim:GovHydroR.mwbase>/g, obj, "mwbase", base.to_string, sub, context);

            /**
             * Nonlinear gain point 1, PU power (Pgv1).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroR.pgv1>([\s\S]*?)<\/cim:GovHydroR.pgv1>/g, obj, "pgv1", base.to_string, sub, context);

            /**
             * Nonlinear gain point 2, PU power (Pgv2).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroR.pgv2>([\s\S]*?)<\/cim:GovHydroR.pgv2>/g, obj, "pgv2", base.to_string, sub, context);

            /**
             * Nonlinear gain point 3, PU power (Pgv3).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroR.pgv3>([\s\S]*?)<\/cim:GovHydroR.pgv3>/g, obj, "pgv3", base.to_string, sub, context);

            /**
             * Nonlinear gain point 4, PU power (Pgv4).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroR.pgv4>([\s\S]*?)<\/cim:GovHydroR.pgv4>/g, obj, "pgv4", base.to_string, sub, context);

            /**
             * Nonlinear gain point 5, PU power (Pgv5).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroR.pgv5>([\s\S]*?)<\/cim:GovHydroR.pgv5>/g, obj, "pgv5", base.to_string, sub, context);

            /**
             * Nonlinear gain point 6, PU power (Pgv6).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroR.pgv6>([\s\S]*?)<\/cim:GovHydroR.pgv6>/g, obj, "pgv6", base.to_string, sub, context);

            /**
             * Maximum gate opening, PU of MWbase (Pmax).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovHydroR.pmax>([\s\S]*?)<\/cim:GovHydroR.pmax>/g, obj, "pmax", base.to_string, sub, context);

            /**
             * Minimum gate opening, PU of MWbase (Pmin).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroR.pmin>([\s\S]*?)<\/cim:GovHydroR.pmin>/g, obj, "pmin", base.to_string, sub, context);

            /**
             * No-load turbine flow at nominal head (Qnl).
             *
             * Typical Value = 0.08.
             *
             */
            base.parse_element (/<cim:GovHydroR.qnl>([\s\S]*?)<\/cim:GovHydroR.qnl>/g, obj, "qnl", base.to_string, sub, context);

            /**
             * Steady-state droop (R).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:GovHydroR.r>([\s\S]*?)<\/cim:GovHydroR.r>/g, obj, "r", base.to_string, sub, context);

            /**
             * Lead time constant 1 (T1).
             *
             * Typical Value = 1.5.
             *
             */
            base.parse_element (/<cim:GovHydroR.t1>([\s\S]*?)<\/cim:GovHydroR.t1>/g, obj, "t1", base.to_string, sub, context);

            /**
             * Lag time constant 1 (T2).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:GovHydroR.t2>([\s\S]*?)<\/cim:GovHydroR.t2>/g, obj, "t2", base.to_string, sub, context);

            /**
             * Lead time constant 2 (T3).
             *
             * Typical Value = 1.5.
             *
             */
            base.parse_element (/<cim:GovHydroR.t3>([\s\S]*?)<\/cim:GovHydroR.t3>/g, obj, "t3", base.to_string, sub, context);

            /**
             * Lag time constant 2 (T4).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:GovHydroR.t4>([\s\S]*?)<\/cim:GovHydroR.t4>/g, obj, "t4", base.to_string, sub, context);

            /**
             * Lead time constant 3 (T5).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroR.t5>([\s\S]*?)<\/cim:GovHydroR.t5>/g, obj, "t5", base.to_string, sub, context);

            /**
             * Lag time constant 3 (T6).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:GovHydroR.t6>([\s\S]*?)<\/cim:GovHydroR.t6>/g, obj, "t6", base.to_string, sub, context);

            /**
             * Lead time constant 4 (T7).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroR.t7>([\s\S]*?)<\/cim:GovHydroR.t7>/g, obj, "t7", base.to_string, sub, context);

            /**
             * Lag time constant 4 (T8).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:GovHydroR.t8>([\s\S]*?)<\/cim:GovHydroR.t8>/g, obj, "t8", base.to_string, sub, context);

            /**
             * Input filter time constant (Td).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:GovHydroR.td>([\s\S]*?)<\/cim:GovHydroR.td>/g, obj, "td", base.to_string, sub, context);

            /**
             * Gate servo time constant (Tp).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:GovHydroR.tp>([\s\S]*?)<\/cim:GovHydroR.tp>/g, obj, "tp", base.to_string, sub, context);

            /**
             * Power feedback time constant (Tt).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroR.tt>([\s\S]*?)<\/cim:GovHydroR.tt>/g, obj, "tt", base.to_string, sub, context);

            /**
             * Water inertia time constant (Tw).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovHydroR.tw>([\s\S]*?)<\/cim:GovHydroR.tw>/g, obj, "tw", base.to_string, sub, context);

            /**
             * Maximum gate closing velocity (Velcl).
             *
             * Unit = PU/sec.  Typical Value = -0.2.
             *
             */
            base.parse_element (/<cim:GovHydroR.velcl>([\s\S]*?)<\/cim:GovHydroR.velcl>/g, obj, "velcl", base.to_float, sub, context);

            /**
             * Maximum gate opening velocity (Velop).
             *
             * Unit = PU/sec.  Typical Value = 0.2.
             *
             */
            base.parse_element (/<cim:GovHydroR.velop>([\s\S]*?)<\/cim:GovHydroR.velop>/g, obj, "velop", base.to_float, sub, context);

            bucket = context.parsed.GovHydroR;
            if (null == bucket)
                context.parsed.GovHydroR = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Hydro turbine and governor.
         *
         * Represents plants with straight-forward penstock configurations and hydraulic governors of traditional 'dashpot' type.  This model can be used to represent simple, Francis, Pelton or Kaplan turbines.
         *
         */
        function parse_GovHydro4 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovHydro4";
            /**
             * Turbine gain (At).
             *
             * Typical Value = 1.2.
             *
             */
            base.parse_element (/<cim:GovHydro4.at>([\s\S]*?)<\/cim:GovHydro4.at>/g, obj, "at", base.to_string, sub, context);

            /**
             * Kaplan blade servo point 0 (Bgv0).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro4.bgv0>([\s\S]*?)<\/cim:GovHydro4.bgv0>/g, obj, "bgv0", base.to_string, sub, context);

            /**
             * Kaplan blade servo point 1 (Bgv1).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro4.bgv1>([\s\S]*?)<\/cim:GovHydro4.bgv1>/g, obj, "bgv1", base.to_string, sub, context);

            /**
             * Kaplan blade servo point 2 (Bgv2).
             *
             * Typical Value = 0.  Typical Value Francis = 0, Kaplan = 0.1.
             *
             */
            base.parse_element (/<cim:GovHydro4.bgv2>([\s\S]*?)<\/cim:GovHydro4.bgv2>/g, obj, "bgv2", base.to_string, sub, context);

            /**
             * Kaplan blade servo point 3 (Bgv3).
             *
             * Typical Value = 0.  Typical Value Francis = 0, Kaplan = 0.667.
             *
             */
            base.parse_element (/<cim:GovHydro4.bgv3>([\s\S]*?)<\/cim:GovHydro4.bgv3>/g, obj, "bgv3", base.to_string, sub, context);

            /**
             * Kaplan blade servo point 4 (Bgv4).
             *
             * Typical Value = 0.  Typical Value Francis = 0, Kaplan = 0.9.
             *
             */
            base.parse_element (/<cim:GovHydro4.bgv4>([\s\S]*?)<\/cim:GovHydro4.bgv4>/g, obj, "bgv4", base.to_string, sub, context);

            /**
             * Kaplan blade servo point 5 (Bgv5).
             *
             * Typical Value = 0.  Typical Value Francis = 0, Kaplan = 1.
             *
             */
            base.parse_element (/<cim:GovHydro4.bgv5>([\s\S]*?)<\/cim:GovHydro4.bgv5>/g, obj, "bgv5", base.to_string, sub, context);

            /**
             * Maximum blade adjustment factor (Bmax).
             *
             * Typical Value = 0.  Typical Value Francis = 0, Kaplan = 1.1276.
             *
             */
            base.parse_element (/<cim:GovHydro4.bmax>([\s\S]*?)<\/cim:GovHydro4.bmax>/g, obj, "bmax", base.to_float, sub, context);

            /**
             * Intentional deadband width (db1).
             *
             * Unit = Hz.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro4.db1>([\s\S]*?)<\/cim:GovHydro4.db1>/g, obj, "db1", base.to_string, sub, context);

            /**
             * Unintentional dead-band (db2).
             *
             * Unit = MW.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro4.db2>([\s\S]*?)<\/cim:GovHydro4.db2>/g, obj, "db2", base.to_string, sub, context);

            /**
             * Turbine damping factor (Dturb).
             *
             * Unit = delta P (PU of MWbase) / delta speed (PU).
             *
             */
            base.parse_element (/<cim:GovHydro4.dturb>([\s\S]*?)<\/cim:GovHydro4.dturb>/g, obj, "dturb", base.to_string, sub, context);

            /**
             * Intentional db hysteresis (eps).
             *
             * Unit = Hz.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro4.eps>([\s\S]*?)<\/cim:GovHydro4.eps>/g, obj, "eps", base.to_string, sub, context);

            /**
             * Maximum gate opening, PU of MWbase (Gmax).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovHydro4.gmax>([\s\S]*?)<\/cim:GovHydro4.gmax>/g, obj, "gmax", base.to_string, sub, context);

            /**
             * Minimum gate opening, PU of MWbase (Gmin).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro4.gmin>([\s\S]*?)<\/cim:GovHydro4.gmin>/g, obj, "gmin", base.to_string, sub, context);

            /**
             * Nonlinear gain point 0, PU gv (Gv0).
             *
             * Typical Value = 0.  Typical Value Francis = 0.1, Kaplan = 0.1.
             *
             */
            base.parse_element (/<cim:GovHydro4.gv0>([\s\S]*?)<\/cim:GovHydro4.gv0>/g, obj, "gv0", base.to_string, sub, context);

            /**
             * Nonlinear gain point 1, PU gv (Gv1).
             *
             * Typical Value = 0.  Typical Value Francis = 0.4, Kaplan = 0.4.
             *
             */
            base.parse_element (/<cim:GovHydro4.gv1>([\s\S]*?)<\/cim:GovHydro4.gv1>/g, obj, "gv1", base.to_string, sub, context);

            /**
             * Nonlinear gain point 2, PU gv (Gv2).
             *
             * Typical Value = 0.  Typical Value Francis = 0.5, Kaplan = 0.5.
             *
             */
            base.parse_element (/<cim:GovHydro4.gv2>([\s\S]*?)<\/cim:GovHydro4.gv2>/g, obj, "gv2", base.to_string, sub, context);

            /**
             * Nonlinear gain point 3, PU gv (Gv3).
             *
             * Typical Value = 0.  Typical Value Francis = 0.7, Kaplan = 0.7.
             *
             */
            base.parse_element (/<cim:GovHydro4.gv3>([\s\S]*?)<\/cim:GovHydro4.gv3>/g, obj, "gv3", base.to_string, sub, context);

            /**
             * Nonlinear gain point 4, PU gv (Gv4).
             *
             * Typical Value = 0.  Typical Value Francis = 0.8, Kaplan = 0.8.
             *
             */
            base.parse_element (/<cim:GovHydro4.gv4>([\s\S]*?)<\/cim:GovHydro4.gv4>/g, obj, "gv4", base.to_string, sub, context);

            /**
             * Nonlinear gain point 5, PU gv (Gv5).
             *
             * Typical Value = 0.  Typical Value Francis = 0.9, Kaplan = 0.9.
             *
             */
            base.parse_element (/<cim:GovHydro4.gv5>([\s\S]*?)<\/cim:GovHydro4.gv5>/g, obj, "gv5", base.to_string, sub, context);

            /**
             * Head available at dam (hdam).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovHydro4.hdam>([\s\S]*?)<\/cim:GovHydro4.hdam>/g, obj, "hdam", base.to_string, sub, context);

            /**
             * Base for power values (MWbase) (&gt;0).
             *
             * Unit = MW.
             *
             */
            base.parse_element (/<cim:GovHydro4.mwbase>([\s\S]*?)<\/cim:GovHydro4.mwbase>/g, obj, "mwbase", base.to_string, sub, context);

            /**
             * Nonlinear gain point 0, PU power (Pgv0).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro4.pgv0>([\s\S]*?)<\/cim:GovHydro4.pgv0>/g, obj, "pgv0", base.to_string, sub, context);

            /**
             * Nonlinear gain point 1, PU power (Pgv1).
             *
             * Typical Value = 0.  Typical Value Francis = 0.42, Kaplan = 0.35.
             *
             */
            base.parse_element (/<cim:GovHydro4.pgv1>([\s\S]*?)<\/cim:GovHydro4.pgv1>/g, obj, "pgv1", base.to_string, sub, context);

            /**
             * Nonlinear gain point 2, PU power (Pgv2).
             *
             * Typical Value = 0.  Typical Value Francis = 0.56, Kaplan = 0.468.
             *
             */
            base.parse_element (/<cim:GovHydro4.pgv2>([\s\S]*?)<\/cim:GovHydro4.pgv2>/g, obj, "pgv2", base.to_string, sub, context);

            /**
             * Nonlinear gain point 3, PU power (Pgv3).
             *
             * Typical Value = 0.  Typical Value Francis = 0.8, Kaplan = 0.796.
             *
             */
            base.parse_element (/<cim:GovHydro4.pgv3>([\s\S]*?)<\/cim:GovHydro4.pgv3>/g, obj, "pgv3", base.to_string, sub, context);

            /**
             * Nonlinear gain point 4, PU power (Pgv4).
             *
             * Typical Value = 0.  Typical Value Francis = 0.9, Kaplan = 0.917.
             *
             */
            base.parse_element (/<cim:GovHydro4.pgv4>([\s\S]*?)<\/cim:GovHydro4.pgv4>/g, obj, "pgv4", base.to_string, sub, context);

            /**
             * Nonlinear gain point 5, PU power (Pgv5).
             *
             * Typical Value = 0.  Typical Value Francis = 0.97, Kaplan = 0.99.
             *
             */
            base.parse_element (/<cim:GovHydro4.pgv5>([\s\S]*?)<\/cim:GovHydro4.pgv5>/g, obj, "pgv5", base.to_string, sub, context);

            /**
             * No-load flow at nominal head (Qnl).
             *
             * Typical Value = 0.08.  Typical Value Francis = 0, Kaplan = 0.
             *
             */
            base.parse_element (/<cim:GovHydro4.qn1>([\s\S]*?)<\/cim:GovHydro4.qn1>/g, obj, "qn1", base.to_string, sub, context);

            /**
             * Permanent droop (Rperm).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:GovHydro4.rperm>([\s\S]*?)<\/cim:GovHydro4.rperm>/g, obj, "rperm", base.to_string, sub, context);

            /**
             * Temporary droop (Rtemp).
             *
             * Typical Value = 0.3.
             *
             */
            base.parse_element (/<cim:GovHydro4.rtemp>([\s\S]*?)<\/cim:GovHydro4.rtemp>/g, obj, "rtemp", base.to_string, sub, context);

            /**
             * Blade servo time constant (Tblade).
             *
             * Typical Value = 100.
             *
             */
            base.parse_element (/<cim:GovHydro4.tblade>([\s\S]*?)<\/cim:GovHydro4.tblade>/g, obj, "tblade", base.to_string, sub, context);

            /**
             * Gate servo time constant (Tg) (&gt;0).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovHydro4.tg>([\s\S]*?)<\/cim:GovHydro4.tg>/g, obj, "tg", base.to_string, sub, context);

            /**
             * Pilot servo time constant (Tp).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:GovHydro4.tp>([\s\S]*?)<\/cim:GovHydro4.tp>/g, obj, "tp", base.to_string, sub, context);

            /**
             * Dashpot time constant (Tr) (&gt;0).
             *
             * Typical Value = 5.
             *
             */
            base.parse_element (/<cim:GovHydro4.tr>([\s\S]*?)<\/cim:GovHydro4.tr>/g, obj, "tr", base.to_string, sub, context);

            /**
             * Water inertia time constant (Tw) (&gt;0).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovHydro4.tw>([\s\S]*?)<\/cim:GovHydro4.tw>/g, obj, "tw", base.to_string, sub, context);

            /**
             * Max gate closing velocity (Uc).
             *
             * Typical Value = 0.2.
             *
             */
            base.parse_element (/<cim:GovHydro4.uc>([\s\S]*?)<\/cim:GovHydro4.uc>/g, obj, "uc", base.to_float, sub, context);

            /**
             * Max gate opening velocity (Uo).
             *
             * Typical Value = 0.2.
             *
             */
            base.parse_element (/<cim:GovHydro4.uo>([\s\S]*?)<\/cim:GovHydro4.uo>/g, obj, "uo", base.to_float, sub, context);

            bucket = context.parsed.GovHydro4;
            if (null == bucket)
                context.parsed.GovHydro4 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Modified single shaft gas turbine.
         *
         */
        function parse_GovGAST1 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovGAST1";
            /**
             * Turbine power time constant numerator scale factor (a).
             *
             * Typical Value = 0.8.
             *
             */
            base.parse_element (/<cim:GovGAST1.a>([\s\S]*?)<\/cim:GovGAST1.a>/g, obj, "a", base.to_float, sub, context);

            /**
             * Turbine power time constant denominator scale factor (b).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovGAST1.b>([\s\S]*?)<\/cim:GovGAST1.b>/g, obj, "b", base.to_float, sub, context);

            /**
             * Intentional dead-band width (db1).
             *
             * Unit = Hz.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovGAST1.db1>([\s\S]*?)<\/cim:GovGAST1.db1>/g, obj, "db1", base.to_string, sub, context);

            /**
             * Unintentional dead-band (db2).
             *
             * Unit = MW.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovGAST1.db2>([\s\S]*?)<\/cim:GovGAST1.db2>/g, obj, "db2", base.to_string, sub, context);

            /**
             * Intentional db hysteresis (eps).
             *
             * Unit = Hz.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovGAST1.eps>([\s\S]*?)<\/cim:GovGAST1.eps>/g, obj, "eps", base.to_string, sub, context);

            /**
             * Fuel flow at zero power output (Fidle).
             *
             * Typical Value = 0.18.
             *
             */
            base.parse_element (/<cim:GovGAST1.fidle>([\s\S]*?)<\/cim:GovGAST1.fidle>/g, obj, "fidle", base.to_string, sub, context);

            /**
             * Nonlinear gain point 1, PU gv (Gv1).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovGAST1.gv1>([\s\S]*?)<\/cim:GovGAST1.gv1>/g, obj, "gv1", base.to_string, sub, context);

            /**
             * Nonlinear gain point 2,PU gv (Gv2).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovGAST1.gv2>([\s\S]*?)<\/cim:GovGAST1.gv2>/g, obj, "gv2", base.to_string, sub, context);

            /**
             * Nonlinear gain point 3, PU gv (Gv3).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovGAST1.gv3>([\s\S]*?)<\/cim:GovGAST1.gv3>/g, obj, "gv3", base.to_string, sub, context);

            /**
             * Nonlinear gain point 4, PU gv (Gv4).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovGAST1.gv4>([\s\S]*?)<\/cim:GovGAST1.gv4>/g, obj, "gv4", base.to_string, sub, context);

            /**
             * Nonlinear gain point 5, PU gv (Gv5).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovGAST1.gv5>([\s\S]*?)<\/cim:GovGAST1.gv5>/g, obj, "gv5", base.to_string, sub, context);

            /**
             * Nonlinear gain point 6, PU gv (Gv6).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovGAST1.gv6>([\s\S]*?)<\/cim:GovGAST1.gv6>/g, obj, "gv6", base.to_string, sub, context);

            /**
             * Governor gain (Ka).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovGAST1.ka>([\s\S]*?)<\/cim:GovGAST1.ka>/g, obj, "ka", base.to_string, sub, context);

            /**
             * Temperature limiter gain (Kt).
             *
             * Typical Value = 3.
             *
             */
            base.parse_element (/<cim:GovGAST1.kt>([\s\S]*?)<\/cim:GovGAST1.kt>/g, obj, "kt", base.to_string, sub, context);

            /**
             * Ambient temperature load limit (Lmax).
             *
             * Lmax is the turbine power output corresponding to the limiting exhaust gas temperature.  Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovGAST1.lmax>([\s\S]*?)<\/cim:GovGAST1.lmax>/g, obj, "lmax", base.to_string, sub, context);

            /**
             * Valve position change allowed at fast rate (Loadinc).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:GovGAST1.loadinc>([\s\S]*?)<\/cim:GovGAST1.loadinc>/g, obj, "loadinc", base.to_string, sub, context);

            /**
             * Maximum long term fuel valve opening rate (Ltrate).
             *
             * Typical Value = 0.02.
             *
             */
            base.parse_element (/<cim:GovGAST1.ltrate>([\s\S]*?)<\/cim:GovGAST1.ltrate>/g, obj, "ltrate", base.to_float, sub, context);

            /**
             * Base for power values (MWbase) (&gt; 0).
             *
             * Unit = MW.
             *
             */
            base.parse_element (/<cim:GovGAST1.mwbase>([\s\S]*?)<\/cim:GovGAST1.mwbase>/g, obj, "mwbase", base.to_string, sub, context);

            /**
             * Nonlinear gain point 1, PU power (Pgv1).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovGAST1.pgv1>([\s\S]*?)<\/cim:GovGAST1.pgv1>/g, obj, "pgv1", base.to_string, sub, context);

            /**
             * Nonlinear gain point 2, PU power (Pgv2).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovGAST1.pgv2>([\s\S]*?)<\/cim:GovGAST1.pgv2>/g, obj, "pgv2", base.to_string, sub, context);

            /**
             * Nonlinear gain point 3, PU power (Pgv3).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovGAST1.pgv3>([\s\S]*?)<\/cim:GovGAST1.pgv3>/g, obj, "pgv3", base.to_string, sub, context);

            /**
             * Nonlinear gain point 4, PU power (Pgv4).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovGAST1.pgv4>([\s\S]*?)<\/cim:GovGAST1.pgv4>/g, obj, "pgv4", base.to_string, sub, context);

            /**
             * Nonlinear gain point 5, PU power (Pgv5).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovGAST1.pgv5>([\s\S]*?)<\/cim:GovGAST1.pgv5>/g, obj, "pgv5", base.to_string, sub, context);

            /**
             * Nonlinear gain point 6, PU power (Pgv6).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovGAST1.pgv6>([\s\S]*?)<\/cim:GovGAST1.pgv6>/g, obj, "pgv6", base.to_string, sub, context);

            /**
             * Permanent droop (R).
             *
             * Typical Value = 0.04.
             *
             */
            base.parse_element (/<cim:GovGAST1.r>([\s\S]*?)<\/cim:GovGAST1.r>/g, obj, "r", base.to_string, sub, context);

            /**
             * Maximum fuel valve opening rate (Rmax).
             *
             * Unit = PU/sec.  Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovGAST1.rmax>([\s\S]*?)<\/cim:GovGAST1.rmax>/g, obj, "rmax", base.to_float, sub, context);

            /**
             * Governor mechanism time constant (T1).
             *
             * T1 represents the natural valve positioning time constant of the governor for small disturbances, as seen when rate limiting is not in effect.  Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovGAST1.t1>([\s\S]*?)<\/cim:GovGAST1.t1>/g, obj, "t1", base.to_string, sub, context);

            /**
             * Turbine power time constant (T2).
             *
             * T2 represents delay due to internal energy storage of the gas turbine engine. T2 can be used to give a rough approximation to the delay associated with acceleration of the compressor spool of a multi-shaft engine, or with the compressibility of gas in the plenum of the free power turbine of an aero-derivative unit, for example.  Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovGAST1.t2>([\s\S]*?)<\/cim:GovGAST1.t2>/g, obj, "t2", base.to_string, sub, context);

            /**
             * Turbine exhaust temperature time constant (T3).
             *
             * T3 represents delay in the exhaust temperature and load limiting system. Typical Value = 3.
             *
             */
            base.parse_element (/<cim:GovGAST1.t3>([\s\S]*?)<\/cim:GovGAST1.t3>/g, obj, "t3", base.to_string, sub, context);

            /**
             * Governor lead time constant (T4).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovGAST1.t4>([\s\S]*?)<\/cim:GovGAST1.t4>/g, obj, "t4", base.to_string, sub, context);

            /**
             * Governor lag time constant (T5).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovGAST1.t5>([\s\S]*?)<\/cim:GovGAST1.t5>/g, obj, "t5", base.to_string, sub, context);

            /**
             * Valve position averaging time constant (Tltr).
             *
             * Typical Value = 10.
             *
             */
            base.parse_element (/<cim:GovGAST1.tltr>([\s\S]*?)<\/cim:GovGAST1.tltr>/g, obj, "tltr", base.to_string, sub, context);

            /**
             * Maximum turbine power, PU of MWbase (Vmax).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovGAST1.vmax>([\s\S]*?)<\/cim:GovGAST1.vmax>/g, obj, "vmax", base.to_string, sub, context);

            /**
             * Minimum turbine power, PU of MWbase (Vmin).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovGAST1.vmin>([\s\S]*?)<\/cim:GovGAST1.vmin>/g, obj, "vmin", base.to_string, sub, context);

            bucket = context.parsed.GovGAST1;
            if (null == bucket)
                context.parsed.GovGAST1 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Steam turbine governor model, based on the GovSteamIEEE1 model  (with optional deadband and nonlinear valve gain added).
         *
         */
        function parse_GovSteam1 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovSteam1";
            /**
             * Intentional deadband width (db1).
             *
             * Unit = Hz.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteam1.db1>([\s\S]*?)<\/cim:GovSteam1.db1>/g, obj, "db1", base.to_string, sub, context);

            /**
             * Unintentional deadband (db2).
             *
             * Unit = MW.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteam1.db2>([\s\S]*?)<\/cim:GovSteam1.db2>/g, obj, "db2", base.to_string, sub, context);

            /**
             * Intentional db hysteresis (eps).
             *
             * Unit = Hz.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteam1.eps>([\s\S]*?)<\/cim:GovSteam1.eps>/g, obj, "eps", base.to_string, sub, context);

            /**
             * Nonlinear gain valve position point 1 (GV1).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteam1.gv1>([\s\S]*?)<\/cim:GovSteam1.gv1>/g, obj, "gv1", base.to_string, sub, context);

            /**
             * Nonlinear gain valve position point 2 (GV2).
             *
             * Typical Value = 0.4.
             *
             */
            base.parse_element (/<cim:GovSteam1.gv2>([\s\S]*?)<\/cim:GovSteam1.gv2>/g, obj, "gv2", base.to_string, sub, context);

            /**
             * Nonlinear gain valve position point 3 (GV3).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovSteam1.gv3>([\s\S]*?)<\/cim:GovSteam1.gv3>/g, obj, "gv3", base.to_string, sub, context);

            /**
             * Nonlinear gain valve position point 4 (GV4).
             *
             * Typical Value = 0.6.
             *
             */
            base.parse_element (/<cim:GovSteam1.gv4>([\s\S]*?)<\/cim:GovSteam1.gv4>/g, obj, "gv4", base.to_string, sub, context);

            /**
             * Nonlinear gain valve position point 5 (GV5).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovSteam1.gv5>([\s\S]*?)<\/cim:GovSteam1.gv5>/g, obj, "gv5", base.to_string, sub, context);

            /**
             * Nonlinear gain valve position point 6 (GV6).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteam1.gv6>([\s\S]*?)<\/cim:GovSteam1.gv6>/g, obj, "gv6", base.to_string, sub, context);

            /**
             * Governor gain (reciprocal of droop) (K) (&gt;0).
             *
             * Typical Value = 25.
             *
             */
            base.parse_element (/<cim:GovSteam1.k>([\s\S]*?)<\/cim:GovSteam1.k>/g, obj, "k", base.to_string, sub, context);

            /**
             * Fraction of HP shaft power after first boiler pass (K1).
             *
             * Typical Value = 0.2.
             *
             */
            base.parse_element (/<cim:GovSteam1.k1>([\s\S]*?)<\/cim:GovSteam1.k1>/g, obj, "k1", base.to_float, sub, context);

            /**
             * Fraction of LP shaft power after first boiler pass (K2).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteam1.k2>([\s\S]*?)<\/cim:GovSteam1.k2>/g, obj, "k2", base.to_float, sub, context);

            /**
             * Fraction of HP shaft power after second boiler pass (K3).
             *
             * Typical Value = 0.3.
             *
             */
            base.parse_element (/<cim:GovSteam1.k3>([\s\S]*?)<\/cim:GovSteam1.k3>/g, obj, "k3", base.to_float, sub, context);

            /**
             * Fraction of LP shaft power after second boiler pass (K4).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteam1.k4>([\s\S]*?)<\/cim:GovSteam1.k4>/g, obj, "k4", base.to_float, sub, context);

            /**
             * Fraction of HP shaft power after third boiler pass (K5).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovSteam1.k5>([\s\S]*?)<\/cim:GovSteam1.k5>/g, obj, "k5", base.to_float, sub, context);

            /**
             * Fraction of LP shaft power after third boiler pass (K6).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteam1.k6>([\s\S]*?)<\/cim:GovSteam1.k6>/g, obj, "k6", base.to_float, sub, context);

            /**
             * Fraction of HP shaft power after fourth boiler pass (K7).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteam1.k7>([\s\S]*?)<\/cim:GovSteam1.k7>/g, obj, "k7", base.to_float, sub, context);

            /**
             * Fraction of LP shaft power after fourth boiler pass (K8).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteam1.k8>([\s\S]*?)<\/cim:GovSteam1.k8>/g, obj, "k8", base.to_float, sub, context);

            /**
             * Base for power values (MWbase) (&gt;0).
             *
             * Unit = MW.
             *
             */
            base.parse_element (/<cim:GovSteam1.mwbase>([\s\S]*?)<\/cim:GovSteam1.mwbase>/g, obj, "mwbase", base.to_string, sub, context);

            /**
             * Nonlinear gain power value point 1 (Pgv1).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteam1.pgv1>([\s\S]*?)<\/cim:GovSteam1.pgv1>/g, obj, "pgv1", base.to_string, sub, context);

            /**
             * Nonlinear gain power value point 2 (Pgv2).
             *
             * Typical Value = 0.75.
             *
             */
            base.parse_element (/<cim:GovSteam1.pgv2>([\s\S]*?)<\/cim:GovSteam1.pgv2>/g, obj, "pgv2", base.to_string, sub, context);

            /**
             * Nonlinear gain power value point 3 (Pgv3).
             *
             * Typical Value = 0.91.
             *
             */
            base.parse_element (/<cim:GovSteam1.pgv3>([\s\S]*?)<\/cim:GovSteam1.pgv3>/g, obj, "pgv3", base.to_string, sub, context);

            /**
             * Nonlinear gain power value point 4 (Pgv4).
             *
             * Typical Value = 0.98.
             *
             */
            base.parse_element (/<cim:GovSteam1.pgv4>([\s\S]*?)<\/cim:GovSteam1.pgv4>/g, obj, "pgv4", base.to_string, sub, context);

            /**
             * Nonlinear gain power value point 5 (Pgv5).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovSteam1.pgv5>([\s\S]*?)<\/cim:GovSteam1.pgv5>/g, obj, "pgv5", base.to_string, sub, context);

            /**
             * Nonlinear gain power value point 6 (Pgv6).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteam1.pgv6>([\s\S]*?)<\/cim:GovSteam1.pgv6>/g, obj, "pgv6", base.to_string, sub, context);

            /**
             * Maximum valve opening (Pmax) (&gt; Pmin).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovSteam1.pmax>([\s\S]*?)<\/cim:GovSteam1.pmax>/g, obj, "pmax", base.to_string, sub, context);

            /**
             * Minimum valve opening (Pmin) (&gt;=0).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteam1.pmin>([\s\S]*?)<\/cim:GovSteam1.pmin>/g, obj, "pmin", base.to_string, sub, context);

            /**
             * Intentional deadband indicator.
             * true = intentional deadband is applied
             * false = intentional deadband is not applied.
             *
             * Typical Value = true.
             *
             */
            base.parse_element (/<cim:GovSteam1.sdb1>([\s\S]*?)<\/cim:GovSteam1.sdb1>/g, obj, "sdb1", base.to_boolean, sub, context);

            /**
             * Unintentional deadband location.
             * true = intentional deadband is applied before point "A"
             * false = intentional deadband is applied after point "A".
             *
             * Typical Value = true.
             *
             */
            base.parse_element (/<cim:GovSteam1.sdb2>([\s\S]*?)<\/cim:GovSteam1.sdb2>/g, obj, "sdb2", base.to_boolean, sub, context);

            /**
             * Governor lag time constant (T1).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteam1.t1>([\s\S]*?)<\/cim:GovSteam1.t1>/g, obj, "t1", base.to_string, sub, context);

            /**
             * Governor lead time constant (T2).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteam1.t2>([\s\S]*?)<\/cim:GovSteam1.t2>/g, obj, "t2", base.to_string, sub, context);

            /**
             * Valve positioner time constant (T3<i>) </i>(&gt;0).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:GovSteam1.t3>([\s\S]*?)<\/cim:GovSteam1.t3>/g, obj, "t3", base.to_string, sub, context);

            /**
             * Inlet piping/steam bowl time constant (T4).
             *
             * Typical Value = 0.3.
             *
             */
            base.parse_element (/<cim:GovSteam1.t4>([\s\S]*?)<\/cim:GovSteam1.t4>/g, obj, "t4", base.to_string, sub, context);

            /**
             * Time constant of second boiler pass (T5).
             *
             * Typical Value = 5.
             *
             */
            base.parse_element (/<cim:GovSteam1.t5>([\s\S]*?)<\/cim:GovSteam1.t5>/g, obj, "t5", base.to_string, sub, context);

            /**
             * Time constant of third boiler pass (T6).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovSteam1.t6>([\s\S]*?)<\/cim:GovSteam1.t6>/g, obj, "t6", base.to_string, sub, context);

            /**
             * Time constant of fourth boiler pass (T7).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteam1.t7>([\s\S]*?)<\/cim:GovSteam1.t7>/g, obj, "t7", base.to_string, sub, context);

            /**
             * Maximum valve closing velocity (Uc) (&lt;0).
             *
             * Unit = PU/sec.  Typical Value = -10.
             *
             */
            base.parse_element (/<cim:GovSteam1.uc>([\s\S]*?)<\/cim:GovSteam1.uc>/g, obj, "uc", base.to_float, sub, context);

            /**
             * Maximum valve opening velocity (Uo) (&gt;0).
             *
             * Unit = PU/sec.  Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovSteam1.uo>([\s\S]*?)<\/cim:GovSteam1.uo>/g, obj, "uo", base.to_float, sub, context);

            /**
             * Nonlinear valve characteristic.
             * true = nonlinear valve characteristic is used
             * false = nonlinear valve characteristic is not used.
             *
             * Typical Value = true.
             *
             */
            base.parse_element (/<cim:GovSteam1.valve>([\s\S]*?)<\/cim:GovSteam1.valve>/g, obj, "valve", base.to_boolean, sub, context);

            bucket = context.parsed.GovSteam1;
            if (null == bucket)
                context.parsed.GovSteam1 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Detailed hydro unit - Francis model.
         *
         * This model can be used to represent three types of governors.
         *
         */
        function parse_GovHydroFrancis (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovHydroFrancis";
            /**
             * Opening section S<sub>eff</sub> at the maximum efficiency (Am).
             *
             * Typical Value = 0.7.
             *
             */
            base.parse_element (/<cim:GovHydroFrancis.am>([\s\S]*?)<\/cim:GovHydroFrancis.am>/g, obj, "am", base.to_string, sub, context);

            /**
             * Area of the surge tank (A<sub>V0</sub>).
             *
             * Unit = m<sup>2</sup>. Typical Value = 30.
             *
             */
            base.parse_element (/<cim:GovHydroFrancis.av0>([\s\S]*?)<\/cim:GovHydroFrancis.av0>/g, obj, "av0", base.to_string, sub, context);

            /**
             * Area of the compensation tank (A<sub>V1</sub>).
             *
             * Unit = m<sup>2</sup>. Typical Value = 700.
             *
             */
            base.parse_element (/<cim:GovHydroFrancis.av1>([\s\S]*?)<\/cim:GovHydroFrancis.av1>/g, obj, "av1", base.to_string, sub, context);

            /**
             * Droop (Bp).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:GovHydroFrancis.bp>([\s\S]*?)<\/cim:GovHydroFrancis.bp>/g, obj, "bp", base.to_string, sub, context);

            /**
             * Intentional dead-band width (DB1).
             *
             * Unit = Hz.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroFrancis.db1>([\s\S]*?)<\/cim:GovHydroFrancis.db1>/g, obj, "db1", base.to_string, sub, context);

            /**
             * Maximum efficiency (EtaMax).
             *
             * Typical Value = 1.05.
             *
             */
            base.parse_element (/<cim:GovHydroFrancis.etamax>([\s\S]*?)<\/cim:GovHydroFrancis.etamax>/g, obj, "etamax", base.to_string, sub, context);

            /**
             * Governor control flag (Cflag).
             *
             * Typical Value = mechanicHydrolicTachoAccelerator.
             *
             */
            base.parse_element (/<cim:GovHydroFrancis.governorControl>([\s\S]*?)<\/cim:GovHydroFrancis.governorControl>/g, obj, "governorControl", base.to_string, sub, context);

            /**
             * Head of compensation chamber water level with respect to the level of penstock (H<sub>1</sub>).
             *
             * Unit = m. Typical Value = 4.
             *
             */
            base.parse_element (/<cim:GovHydroFrancis.h1>([\s\S]*?)<\/cim:GovHydroFrancis.h1>/g, obj, "h1", base.to_string, sub, context);

            /**
             * Head of surge tank water level with respect to the level of penstock (H<sub>2</sub>).
             *
             * Unit = m. Typical Value = 40.
             *
             */
            base.parse_element (/<cim:GovHydroFrancis.h2>([\s\S]*?)<\/cim:GovHydroFrancis.h2>/g, obj, "h2", base.to_string, sub, context);

            /**
             * Rated hydraulic head (H<sub>n</sub>).
             *
             * Unit = m. Typical Value = 250.
             *
             */
            base.parse_element (/<cim:GovHydroFrancis.hn>([\s\S]*?)<\/cim:GovHydroFrancis.hn>/g, obj, "hn", base.to_string, sub, context);

            /**
             * Penstock loss coefficient (due to friction) (Kc).
             *
             * Typical Value = 0.025.
             *
             */
            base.parse_element (/<cim:GovHydroFrancis.kc>([\s\S]*?)<\/cim:GovHydroFrancis.kc>/g, obj, "kc", base.to_string, sub, context);

            /**
             * Water tunnel and surge chamber loss coefficient (due to friction) (Kg).
             *
             * Typical Value = 0.025.
             *
             */
            base.parse_element (/<cim:GovHydroFrancis.kg>([\s\S]*?)<\/cim:GovHydroFrancis.kg>/g, obj, "kg", base.to_string, sub, context);

            /**
             * Washout gain (Kt).
             *
             * Typical Value = 0.25.
             *
             */
            base.parse_element (/<cim:GovHydroFrancis.kt>([\s\S]*?)<\/cim:GovHydroFrancis.kt>/g, obj, "kt", base.to_string, sub, context);

            /**
             * No-load turbine flow at nominal head (Qc0).
             *
             * Typical Value = 0.21.
             *
             */
            base.parse_element (/<cim:GovHydroFrancis.qc0>([\s\S]*?)<\/cim:GovHydroFrancis.qc0>/g, obj, "qc0", base.to_string, sub, context);

            /**
             * Rated flow (Q<sub>n</sub>).
             *
             * Unit = m<sup>3</sup>/s. Typical Value = 40.
             *
             */
            base.parse_element (/<cim:GovHydroFrancis.qn>([\s\S]*?)<\/cim:GovHydroFrancis.qn>/g, obj, "qn", base.to_string, sub, context);

            /**
             * Derivative gain (Ta).
             *
             * Typical Value = 3.
             *
             */
            base.parse_element (/<cim:GovHydroFrancis.ta>([\s\S]*?)<\/cim:GovHydroFrancis.ta>/g, obj, "ta", base.to_string, sub, context);

            /**
             * Washout time constant (Td).
             *
             * Typical Value = 3.
             *
             */
            base.parse_element (/<cim:GovHydroFrancis.td>([\s\S]*?)<\/cim:GovHydroFrancis.td>/g, obj, "td", base.to_string, sub, context);

            /**
             * Gate servo time constant (Ts).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovHydroFrancis.ts>([\s\S]*?)<\/cim:GovHydroFrancis.ts>/g, obj, "ts", base.to_string, sub, context);

            /**
             * Water inertia time constant (Twnc).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovHydroFrancis.twnc>([\s\S]*?)<\/cim:GovHydroFrancis.twnc>/g, obj, "twnc", base.to_string, sub, context);

            /**
             * Water tunnel and surge chamber inertia time constant (Twng).
             *
             * Typical Value = 3.
             *
             */
            base.parse_element (/<cim:GovHydroFrancis.twng>([\s\S]*?)<\/cim:GovHydroFrancis.twng>/g, obj, "twng", base.to_string, sub, context);

            /**
             * Derivative feedback gain (Tx).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovHydroFrancis.tx>([\s\S]*?)<\/cim:GovHydroFrancis.tx>/g, obj, "tx", base.to_string, sub, context);

            /**
             * Maximum gate opening velocity (Va).
             *
             * Unit = PU/sec.  Typical Value = 0.011.
             *
             */
            base.parse_element (/<cim:GovHydroFrancis.va>([\s\S]*?)<\/cim:GovHydroFrancis.va>/g, obj, "va", base.to_float, sub, context);

            /**
             * Maximum gate opening (ValvMax).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovHydroFrancis.valvmax>([\s\S]*?)<\/cim:GovHydroFrancis.valvmax>/g, obj, "valvmax", base.to_string, sub, context);

            /**
             * Minimum gate opening (ValvMin).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroFrancis.valvmin>([\s\S]*?)<\/cim:GovHydroFrancis.valvmin>/g, obj, "valvmin", base.to_string, sub, context);

            /**
             * Maximum gate closing velocity (Vc).
             *
             * Unit = PU/sec.  Typical Value = -0.011.
             *
             */
            base.parse_element (/<cim:GovHydroFrancis.vc>([\s\S]*?)<\/cim:GovHydroFrancis.vc>/g, obj, "vc", base.to_float, sub, context);

            /**
             * Water tunnel and surge chamber simulation (Tflag).
             * true = enable of water tunnel and surge chamber simulation
             * false = inhibit of water tunnel and surge chamber simulation.
             *
             * Typical Value = false.
             *
             */
            base.parse_element (/<cim:GovHydroFrancis.waterTunnelSurgeChamberSimulation>([\s\S]*?)<\/cim:GovHydroFrancis.waterTunnelSurgeChamberSimulation>/g, obj, "waterTunnelSurgeChamberSimulation", base.to_boolean, sub, context);

            /**
             * Head of upper water level with respect to the level of penstock (Zsfc).
             *
             * Unit = m.  Typical Value = 25.
             *
             */
            base.parse_element (/<cim:GovHydroFrancis.zsfc>([\s\S]*?)<\/cim:GovHydroFrancis.zsfc>/g, obj, "zsfc", base.to_string, sub, context);

            bucket = context.parsed.GovHydroFrancis;
            if (null == bucket)
                context.parsed.GovHydroFrancis = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Governor droop signal feedback source.
         *
         */
        function parse_DroopSignalFeedbackKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "DroopSignalFeedbackKind";
            /**
             * Electrical power feedback (connection indicated as 1 in the block diagrams of models, e.g.
             *
             * GovCT1, GovCT2).
             *
             */
            base.parse_element (/<cim:DroopSignalFeedbackKind.electricalPower>([\s\S]*?)<\/cim:DroopSignalFeedbackKind.electricalPower>/g, obj, "electricalPower", base.to_string, sub, context);

            /**
             * No droop signal feedback, is isochronous governor.
             *
             */
            base.parse_element (/<cim:DroopSignalFeedbackKind.none>([\s\S]*?)<\/cim:DroopSignalFeedbackKind.none>/g, obj, "none", base.to_string, sub, context);

            /**
             * Fuel valve stroke feedback (true stroke) (connection indicated as 2 in the block diagrams of model, e.g.
             *
             * GovCT1, GovCT2).
             *
             */
            base.parse_element (/<cim:DroopSignalFeedbackKind.fuelValveStroke>([\s\S]*?)<\/cim:DroopSignalFeedbackKind.fuelValveStroke>/g, obj, "fuelValveStroke", base.to_string, sub, context);

            /**
             * Governor output feedback (requested stroke) (connection indicated as 3 in the block diagrams of models, e.g.
             *
             * GovCT1, GovCT2).
             *
             */
            base.parse_element (/<cim:DroopSignalFeedbackKind.governorOutput>([\s\S]*?)<\/cim:DroopSignalFeedbackKind.governorOutput>/g, obj, "governorOutput", base.to_string, sub, context);

            bucket = context.parsed.DroopSignalFeedbackKind;
            if (null == bucket)
                context.parsed.DroopSignalFeedbackKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Generic turbogas.
         *
         */
        function parse_GovGAST4 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovGAST4";
            /**
             * Droop (bp).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:GovGAST4.bp>([\s\S]*?)<\/cim:GovGAST4.bp>/g, obj, "bp", base.to_string, sub, context);

            /**
             * Compressor gain (K<sub>tm</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovGAST4.ktm>([\s\S]*?)<\/cim:GovGAST4.ktm>/g, obj, "ktm", base.to_string, sub, context);

            /**
             * Fuel flow maximum negative error value (MN<sub>EF</sub>).
             *
             * Typical Value = -0.05.
             *
             */
            base.parse_element (/<cim:GovGAST4.mnef>([\s\S]*?)<\/cim:GovGAST4.mnef>/g, obj, "mnef", base.to_string, sub, context);

            /**
             * Fuel flow maximum positive error value (MX<sub>EF</sub>).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:GovGAST4.mxef>([\s\S]*?)<\/cim:GovGAST4.mxef>/g, obj, "mxef", base.to_string, sub, context);

            /**
             * Minimum valve opening (RYMN).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovGAST4.rymn>([\s\S]*?)<\/cim:GovGAST4.rymn>/g, obj, "rymn", base.to_string, sub, context);

            /**
             * Maximum valve opening (RYMX).
             *
             * Typical Value = 1.1.
             *
             */
            base.parse_element (/<cim:GovGAST4.rymx>([\s\S]*?)<\/cim:GovGAST4.rymx>/g, obj, "rymx", base.to_string, sub, context);

            /**
             * Maximum gate opening velocity (T<sub>A</sub>).
             *
             * Typical Value = 3.
             *
             */
            base.parse_element (/<cim:GovGAST4.ta>([\s\S]*?)<\/cim:GovGAST4.ta>/g, obj, "ta", base.to_string, sub, context);

            /**
             * Maximum gate closing velocity (T<sub>c</sub>).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovGAST4.tc>([\s\S]*?)<\/cim:GovGAST4.tc>/g, obj, "tc", base.to_string, sub, context);

            /**
             * Fuel control time constant (T<sub>cm</sub>).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:GovGAST4.tcm>([\s\S]*?)<\/cim:GovGAST4.tcm>/g, obj, "tcm", base.to_string, sub, context);

            /**
             * Compressor discharge volume time constant (T<sub>m</sub>).
             *
             * Typical Value = 0.2.
             *
             */
            base.parse_element (/<cim:GovGAST4.tm>([\s\S]*?)<\/cim:GovGAST4.tm>/g, obj, "tm", base.to_string, sub, context);

            /**
             * Time constant of fuel valve positioner (T<sub>y</sub>).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:GovGAST4.tv>([\s\S]*?)<\/cim:GovGAST4.tv>/g, obj, "tv", base.to_string, sub, context);

            bucket = context.parsed.GovGAST4;
            if (null == bucket)
                context.parsed.GovGAST4 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Simplified GovSteamIEEE1 Steam turbine governor model with Prmax limit and fast valving.
         *
         */
        function parse_GovSteamFV3 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovSteamFV3";
            /**
             * Governor gain, (reciprocal of droop) (K).
             *
             * Typical Value = 20.
             *
             */
            base.parse_element (/<cim:GovSteamFV3.k>([\s\S]*?)<\/cim:GovSteamFV3.k>/g, obj, "k", base.to_string, sub, context);

            /**
             * Fraction of turbine power developed after first boiler pass (K1).
             *
             * Typical Value = 0.2.
             *
             */
            base.parse_element (/<cim:GovSteamFV3.k1>([\s\S]*?)<\/cim:GovSteamFV3.k1>/g, obj, "k1", base.to_string, sub, context);

            /**
             * Fraction of turbine power developed after second boiler pass (K2).
             *
             * Typical Value = 0.2.
             *
             */
            base.parse_element (/<cim:GovSteamFV3.k2>([\s\S]*?)<\/cim:GovSteamFV3.k2>/g, obj, "k2", base.to_string, sub, context);

            /**
             * Fraction of hp turbine power developed after crossover or third boiler pass (K3).
             *
             * Typical Value = 0.6.
             *
             */
            base.parse_element (/<cim:GovSteamFV3.k3>([\s\S]*?)<\/cim:GovSteamFV3.k3>/g, obj, "k3", base.to_string, sub, context);

            /**
             * Base for power values (MWbase) (&gt;0).
             *
             * Unit = MW.
             *
             */
            base.parse_element (/<cim:GovSteamFV3.mwbase>([\s\S]*?)<\/cim:GovSteamFV3.mwbase>/g, obj, "mwbase", base.to_string, sub, context);

            /**
             * Maximum valve opening, PU of MWbase (Pmax).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovSteamFV3.pmax>([\s\S]*?)<\/cim:GovSteamFV3.pmax>/g, obj, "pmax", base.to_string, sub, context);

            /**
             * Minimum valve opening, PU of MWbase (Pmin).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteamFV3.pmin>([\s\S]*?)<\/cim:GovSteamFV3.pmin>/g, obj, "pmin", base.to_string, sub, context);

            /**
             * Max. pressure in reheater (Prmax).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovSteamFV3.prmax>([\s\S]*?)<\/cim:GovSteamFV3.prmax>/g, obj, "prmax", base.to_string, sub, context);

            /**
             * Governor lead time constant (T1).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteamFV3.t1>([\s\S]*?)<\/cim:GovSteamFV3.t1>/g, obj, "t1", base.to_string, sub, context);

            /**
             * Governor lag time constant (T2).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteamFV3.t2>([\s\S]*?)<\/cim:GovSteamFV3.t2>/g, obj, "t2", base.to_string, sub, context);

            /**
             * Valve positioner time constant (T3).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteamFV3.t3>([\s\S]*?)<\/cim:GovSteamFV3.t3>/g, obj, "t3", base.to_string, sub, context);

            /**
             * Inlet piping/steam bowl time constant (T4).
             *
             * Typical Value = 0.2.
             *
             */
            base.parse_element (/<cim:GovSteamFV3.t4>([\s\S]*?)<\/cim:GovSteamFV3.t4>/g, obj, "t4", base.to_string, sub, context);

            /**
             * Time constant of second boiler pass (i.e. reheater) (T5).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovSteamFV3.t5>([\s\S]*?)<\/cim:GovSteamFV3.t5>/g, obj, "t5", base.to_string, sub, context);

            /**
             * Time constant of crossover or third boiler pass (T6).
             *
             * Typical Value = 10.
             *
             */
            base.parse_element (/<cim:GovSteamFV3.t6>([\s\S]*?)<\/cim:GovSteamFV3.t6>/g, obj, "t6", base.to_string, sub, context);

            /**
             * Time to close intercept valve (IV) (Ta).
             *
             * Typical Value = 0.97.
             *
             */
            base.parse_element (/<cim:GovSteamFV3.ta>([\s\S]*?)<\/cim:GovSteamFV3.ta>/g, obj, "ta", base.to_string, sub, context);

            /**
             * Time until IV starts to reopen (Tb).
             *
             * Typical Value = 0.98.
             *
             */
            base.parse_element (/<cim:GovSteamFV3.tb>([\s\S]*?)<\/cim:GovSteamFV3.tb>/g, obj, "tb", base.to_string, sub, context);

            /**
             * Time until IV is fully open (Tc).
             *
             * Typical Value = 0.99.
             *
             */
            base.parse_element (/<cim:GovSteamFV3.tc>([\s\S]*?)<\/cim:GovSteamFV3.tc>/g, obj, "tc", base.to_string, sub, context);

            /**
             * Maximum valve closing velocity (Uc).
             *
             * Unit = PU/sec.  Typical Value = -1.
             *
             */
            base.parse_element (/<cim:GovSteamFV3.uc>([\s\S]*?)<\/cim:GovSteamFV3.uc>/g, obj, "uc", base.to_float, sub, context);

            /**
             * Maximum valve opening velocity (Uo).
             *
             * Unit = PU/sec.  Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:GovSteamFV3.uo>([\s\S]*?)<\/cim:GovSteamFV3.uo>/g, obj, "uo", base.to_float, sub, context);

            bucket = context.parsed.GovSteamFV3;
            if (null == bucket)
                context.parsed.GovSteamFV3 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Woodward Electric Hydro Governor Model.
         *
         */
        function parse_GovHydroWEH (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovHydroWEH";
            /**
             * Speed Dead Band (db).
             *
             */
            base.parse_element (/<cim:GovHydroWEH.db>([\s\S]*?)<\/cim:GovHydroWEH.db>/g, obj, "db", base.to_string, sub, context);

            /**
             * Value to allow the integral controller to advance beyond the gate limits (Dicn).
             *
             */
            base.parse_element (/<cim:GovHydroWEH.dicn>([\s\S]*?)<\/cim:GovHydroWEH.dicn>/g, obj, "dicn", base.to_string, sub, context);

            /**
             * Value to allow the Pilot valve controller to advance beyond the gate limits (Dpv).
             *
             */
            base.parse_element (/<cim:GovHydroWEH.dpv>([\s\S]*?)<\/cim:GovHydroWEH.dpv>/g, obj, "dpv", base.to_string, sub, context);

            /**
             * Turbine damping factor (Dturb).
             *
             * Unit = delta P (PU of MWbase) / delta speed (PU).
             *
             */
            base.parse_element (/<cim:GovHydroWEH.dturb>([\s\S]*?)<\/cim:GovHydroWEH.dturb>/g, obj, "dturb", base.to_string, sub, context);

            /**
             * Feedback signal selection (Sw).
             * true = PID Output (if R-Perm-Gate=droop and R-Perm-Pe=0)
             * false = Electrical Power (if R-Perm-Gate=0 and R-Perm-Pe=droop) or
             *
             * false = Gate Position (if R-Perm-Gate=droop and R-Perm-Pe=0).
             *
             */
            base.parse_element (/<cim:GovHydroWEH.feedbackSignal>([\s\S]*?)<\/cim:GovHydroWEH.feedbackSignal>/g, obj, "feedbackSignal", base.to_boolean, sub, context);

            /**
             * Flow Gate 1 (Fl1).
             *
             * Flow value for gate position point 1 for lookup table representing water flow through the turbine as a function of gate position to produce steady state flow.
             *
             */
            base.parse_element (/<cim:GovHydroWEH.fl1>([\s\S]*?)<\/cim:GovHydroWEH.fl1>/g, obj, "fl1", base.to_string, sub, context);

            /**
             * Flow Gate 2 (Fl2).
             *
             * Flow value for gate position point 2 for lookup table representing water flow through the turbine as a function of gate position to produce steady state flow.
             *
             */
            base.parse_element (/<cim:GovHydroWEH.fl2>([\s\S]*?)<\/cim:GovHydroWEH.fl2>/g, obj, "fl2", base.to_string, sub, context);

            /**
             * Flow Gate 3 (Fl3).
             *
             * Flow value for gate position point 3 for lookup table representing water flow through the turbine as a function of gate position to produce steady state flow.
             *
             */
            base.parse_element (/<cim:GovHydroWEH.fl3>([\s\S]*?)<\/cim:GovHydroWEH.fl3>/g, obj, "fl3", base.to_string, sub, context);

            /**
             * Flow Gate 4 (Fl4).
             *
             * Flow value for gate position point 4 for lookup table representing water flow through the turbine as a function of gate position to produce steady state flow.
             *
             */
            base.parse_element (/<cim:GovHydroWEH.fl4>([\s\S]*?)<\/cim:GovHydroWEH.fl4>/g, obj, "fl4", base.to_string, sub, context);

            /**
             * Flow Gate 5 (Fl5).
             *
             * Flow value for gate position point 5 for lookup table representing water flow through the turbine as a function of gate position to produce steady state flow.
             *
             */
            base.parse_element (/<cim:GovHydroWEH.fl5>([\s\S]*?)<\/cim:GovHydroWEH.fl5>/g, obj, "fl5", base.to_string, sub, context);

            /**
             * Flow P1 (Fp1).
             *
             * Turbine Flow value for point 1 for lookup table representing per unit mechanical power on machine MVA rating as a function of turbine flow.
             *
             */
            base.parse_element (/<cim:GovHydroWEH.fp1>([\s\S]*?)<\/cim:GovHydroWEH.fp1>/g, obj, "fp1", base.to_string, sub, context);

            /**
             * Flow P10 (Fp10).
             *
             * Turbine Flow value for point 10 for lookup table representing per unit mechanical power on machine MVA rating as a function of turbine flow.
             *
             */
            base.parse_element (/<cim:GovHydroWEH.fp10>([\s\S]*?)<\/cim:GovHydroWEH.fp10>/g, obj, "fp10", base.to_string, sub, context);

            /**
             * Flow P2 (Fp2).
             *
             * Turbine Flow value for point 2 for lookup table representing per unit mechanical power on machine MVA rating as a function of turbine flow.
             *
             */
            base.parse_element (/<cim:GovHydroWEH.fp2>([\s\S]*?)<\/cim:GovHydroWEH.fp2>/g, obj, "fp2", base.to_string, sub, context);

            /**
             * Flow P3 (Fp3).
             *
             * Turbine Flow value for point 3 for lookup table representing per unit mechanical power on machine MVA rating as a function of turbine flow.
             *
             */
            base.parse_element (/<cim:GovHydroWEH.fp3>([\s\S]*?)<\/cim:GovHydroWEH.fp3>/g, obj, "fp3", base.to_string, sub, context);

            /**
             * Flow P4 (Fp4).
             *
             * Turbine Flow value for point 4 for lookup table representing per unit mechanical power on machine MVA rating as a function of turbine flow.
             *
             */
            base.parse_element (/<cim:GovHydroWEH.fp4>([\s\S]*?)<\/cim:GovHydroWEH.fp4>/g, obj, "fp4", base.to_string, sub, context);

            /**
             * Flow P5 (Fp5).
             *
             * Turbine Flow value for point 5 for lookup table representing per unit mechanical power on machine MVA rating as a function of turbine flow.
             *
             */
            base.parse_element (/<cim:GovHydroWEH.fp5>([\s\S]*?)<\/cim:GovHydroWEH.fp5>/g, obj, "fp5", base.to_string, sub, context);

            /**
             * Flow P6 (Fp6).
             *
             * Turbine Flow value for point 6 for lookup table representing per unit mechanical power on machine MVA rating as a function of turbine flow.
             *
             */
            base.parse_element (/<cim:GovHydroWEH.fp6>([\s\S]*?)<\/cim:GovHydroWEH.fp6>/g, obj, "fp6", base.to_string, sub, context);

            /**
             * Flow P7 (Fp7).
             *
             * Turbine Flow value for point 7 for lookup table representing per unit mechanical power on machine MVA rating as a function of turbine flow.
             *
             */
            base.parse_element (/<cim:GovHydroWEH.fp7>([\s\S]*?)<\/cim:GovHydroWEH.fp7>/g, obj, "fp7", base.to_string, sub, context);

            /**
             * Flow P8 (Fp8).
             *
             * Turbine Flow value for point 8 for lookup table representing per unit mechanical power on machine MVA rating as a function of turbine flow.
             *
             */
            base.parse_element (/<cim:GovHydroWEH.fp8>([\s\S]*?)<\/cim:GovHydroWEH.fp8>/g, obj, "fp8", base.to_string, sub, context);

            /**
             * Flow P9 (Fp9).
             *
             * Turbine Flow value for point 9 for lookup table representing per unit mechanical power on machine MVA rating as a function of turbine flow.
             *
             */
            base.parse_element (/<cim:GovHydroWEH.fp9>([\s\S]*?)<\/cim:GovHydroWEH.fp9>/g, obj, "fp9", base.to_string, sub, context);

            /**
             * Maximum Gate Position (Gmax).
             *
             */
            base.parse_element (/<cim:GovHydroWEH.gmax>([\s\S]*?)<\/cim:GovHydroWEH.gmax>/g, obj, "gmax", base.to_string, sub, context);

            /**
             * Minimum Gate Position (Gmin).
             *
             */
            base.parse_element (/<cim:GovHydroWEH.gmin>([\s\S]*?)<\/cim:GovHydroWEH.gmin>/g, obj, "gmin", base.to_string, sub, context);

            /**
             * Maximum gate closing rate (Gtmxcl).
             *
             */
            base.parse_element (/<cim:GovHydroWEH.gtmxcl>([\s\S]*?)<\/cim:GovHydroWEH.gtmxcl>/g, obj, "gtmxcl", base.to_string, sub, context);

            /**
             * Maximum gate opening rate (Gtmxop).
             *
             */
            base.parse_element (/<cim:GovHydroWEH.gtmxop>([\s\S]*?)<\/cim:GovHydroWEH.gtmxop>/g, obj, "gtmxop", base.to_string, sub, context);

            /**
             * Gate 1 (Gv1).
             *
             * Gate Position value for point 1 for lookup table representing water flow through the turbine as a function of gate position to produce steady state flow.
             *
             */
            base.parse_element (/<cim:GovHydroWEH.gv1>([\s\S]*?)<\/cim:GovHydroWEH.gv1>/g, obj, "gv1", base.to_string, sub, context);

            /**
             * Gate 2 (Gv2).
             *
             * Gate Position value for point 2 for lookup table representing water flow through the turbine as a function of gate position to produce steady state flow.
             *
             */
            base.parse_element (/<cim:GovHydroWEH.gv2>([\s\S]*?)<\/cim:GovHydroWEH.gv2>/g, obj, "gv2", base.to_string, sub, context);

            /**
             * Gate 3 (Gv3).
             *
             * Gate Position value for point 3 for lookup table representing water flow through the turbine as a function of gate position to produce steady state flow.
             *
             */
            base.parse_element (/<cim:GovHydroWEH.gv3>([\s\S]*?)<\/cim:GovHydroWEH.gv3>/g, obj, "gv3", base.to_string, sub, context);

            /**
             * Gate 4 (Gv4).
             *
             * Gate Position value for point 4 for lookup table representing water flow through the turbine as a function of gate position to produce steady state flow.
             *
             */
            base.parse_element (/<cim:GovHydroWEH.gv4>([\s\S]*?)<\/cim:GovHydroWEH.gv4>/g, obj, "gv4", base.to_string, sub, context);

            /**
             * Gate 5 (Gv5).
             *
             * Gate Position value for point 5 for lookup table representing water flow through the turbine as a function of gate position to produce steady state flow.
             *
             */
            base.parse_element (/<cim:GovHydroWEH.gv5>([\s\S]*?)<\/cim:GovHydroWEH.gv5>/g, obj, "gv5", base.to_string, sub, context);

            /**
             * Derivative controller derivative gain (Kd).
             *
             */
            base.parse_element (/<cim:GovHydroWEH.kd>([\s\S]*?)<\/cim:GovHydroWEH.kd>/g, obj, "kd", base.to_string, sub, context);

            /**
             * Derivative controller Integral gain (Ki).
             *
             */
            base.parse_element (/<cim:GovHydroWEH.ki>([\s\S]*?)<\/cim:GovHydroWEH.ki>/g, obj, "ki", base.to_string, sub, context);

            /**
             * Derivative control gain (Kp).
             *
             */
            base.parse_element (/<cim:GovHydroWEH.kp>([\s\S]*?)<\/cim:GovHydroWEH.kp>/g, obj, "kp", base.to_string, sub, context);

            /**
             * Base for power values (MWbase) (&gt;0).
             *
             * Unit = MW.
             *
             */
            base.parse_element (/<cim:GovHydroWEH.mwbase>([\s\S]*?)<\/cim:GovHydroWEH.mwbase>/g, obj, "mwbase", base.to_string, sub, context);

            /**
             * Pmss Flow P1 (Pmss1).
             *
             * Mechanical Power output Pmss for Turbine Flow point 1 for lookup table representing per unit mechanical power on machine MVA rating as a function of turbine flow.
             *
             */
            base.parse_element (/<cim:GovHydroWEH.pmss1>([\s\S]*?)<\/cim:GovHydroWEH.pmss1>/g, obj, "pmss1", base.to_string, sub, context);

            /**
             * Pmss Flow P10 (Pmss10).
             *
             * Mechanical Power output Pmss for Turbine Flow point 10 for lookup table representing per unit mechanical power on machine MVA rating as a function of turbine flow.
             *
             */
            base.parse_element (/<cim:GovHydroWEH.pmss10>([\s\S]*?)<\/cim:GovHydroWEH.pmss10>/g, obj, "pmss10", base.to_string, sub, context);

            /**
             * Pmss Flow P2 (Pmss2).
             *
             * Mechanical Power output Pmss for Turbine Flow point 2 for lookup table representing per unit mechanical power on machine MVA rating as a function of turbine flow.
             *
             */
            base.parse_element (/<cim:GovHydroWEH.pmss2>([\s\S]*?)<\/cim:GovHydroWEH.pmss2>/g, obj, "pmss2", base.to_string, sub, context);

            /**
             * Pmss Flow P3 (Pmss3).
             *
             * Mechanical Power output Pmss for Turbine Flow point 3 for lookup table representing per unit mechanical power on machine MVA rating as a function of turbine flow.
             *
             */
            base.parse_element (/<cim:GovHydroWEH.pmss3>([\s\S]*?)<\/cim:GovHydroWEH.pmss3>/g, obj, "pmss3", base.to_string, sub, context);

            /**
             * Pmss Flow P4 (Pmss4).
             *
             * Mechanical Power output Pmss for Turbine Flow point 4 for lookup table representing per unit mechanical power on machine MVA rating as a function of turbine flow.
             *
             */
            base.parse_element (/<cim:GovHydroWEH.pmss4>([\s\S]*?)<\/cim:GovHydroWEH.pmss4>/g, obj, "pmss4", base.to_string, sub, context);

            /**
             * Pmss Flow P5 (Pmss5).
             *
             * Mechanical Power output Pmss for Turbine Flow point 5 for lookup table representing per unit mechanical power on machine MVA rating as a function of turbine flow.
             *
             */
            base.parse_element (/<cim:GovHydroWEH.pmss5>([\s\S]*?)<\/cim:GovHydroWEH.pmss5>/g, obj, "pmss5", base.to_string, sub, context);

            /**
             * Pmss Flow P6 (Pmss6).
             *
             * Mechanical Power output Pmss for Turbine Flow point 6 for lookup table representing per unit mechanical power on machine MVA rating as a function of turbine flow.
             *
             */
            base.parse_element (/<cim:GovHydroWEH.pmss6>([\s\S]*?)<\/cim:GovHydroWEH.pmss6>/g, obj, "pmss6", base.to_string, sub, context);

            /**
             * Pmss Flow P7 (Pmss7).
             *
             * Mechanical Power output Pmss for Turbine Flow point 7 for lookup table representing per unit mechanical power on machine MVA rating as a function of turbine flow.
             *
             */
            base.parse_element (/<cim:GovHydroWEH.pmss7>([\s\S]*?)<\/cim:GovHydroWEH.pmss7>/g, obj, "pmss7", base.to_string, sub, context);

            /**
             * Pmss Flow P8 (Pmss8).
             *
             * Mechanical Power output Pmss for Turbine Flow point 8 for lookup table representing per unit mechanical power on machine MVA rating as a function of turbine flow.
             *
             */
            base.parse_element (/<cim:GovHydroWEH.pmss8>([\s\S]*?)<\/cim:GovHydroWEH.pmss8>/g, obj, "pmss8", base.to_string, sub, context);

            /**
             * Pmss Flow P9 (Pmss9).
             *
             * Mechanical Power output Pmss for Turbine Flow point 9 for lookup table representing per unit mechanical power on machine MVA rating as a function of turbine flow.
             *
             */
            base.parse_element (/<cim:GovHydroWEH.pmss9>([\s\S]*?)<\/cim:GovHydroWEH.pmss9>/g, obj, "pmss9", base.to_string, sub, context);

            /**
             * Permanent droop for governor output feedback (R-Perm-Gate).
             *
             */
            base.parse_element (/<cim:GovHydroWEH.rpg>([\s\S]*?)<\/cim:GovHydroWEH.rpg>/g, obj, "rpg", base.to_float, sub, context);

            /**
             * Permanent droop for electrical power feedback (R-Perm-Pe).
             *
             */
            base.parse_element (/<cim:GovHydroWEH.rpp>([\s\S]*?)<\/cim:GovHydroWEH.rpp>/g, obj, "rpp", base.to_float, sub, context);

            /**
             * Derivative controller time constant to limit the derivative characteristic beyond a breakdown frequency to avoid amplification of high-frequency noise (Td).
             *
             */
            base.parse_element (/<cim:GovHydroWEH.td>([\s\S]*?)<\/cim:GovHydroWEH.td>/g, obj, "td", base.to_string, sub, context);

            /**
             * Distributive Valve time lag time constant (Tdv).
             *
             */
            base.parse_element (/<cim:GovHydroWEH.tdv>([\s\S]*?)<\/cim:GovHydroWEH.tdv>/g, obj, "tdv", base.to_string, sub, context);

            /**
             * Value to allow the Distribution valve controller to advance beyond the gate movement rate limit (Tg).
             *
             */
            base.parse_element (/<cim:GovHydroWEH.tg>([\s\S]*?)<\/cim:GovHydroWEH.tg>/g, obj, "tg", base.to_string, sub, context);

            /**
             * Pilot Valve time lag time constant (Tp).
             *
             */
            base.parse_element (/<cim:GovHydroWEH.tp>([\s\S]*?)<\/cim:GovHydroWEH.tp>/g, obj, "tp", base.to_string, sub, context);

            /**
             * Electrical power droop time constant (Tpe).
             *
             */
            base.parse_element (/<cim:GovHydroWEH.tpe>([\s\S]*?)<\/cim:GovHydroWEH.tpe>/g, obj, "tpe", base.to_string, sub, context);

            /**
             * Water inertia time constant (Tw) (&gt;0).
             *
             */
            base.parse_element (/<cim:GovHydroWEH.tw>([\s\S]*?)<\/cim:GovHydroWEH.tw>/g, obj, "tw", base.to_string, sub, context);

            bucket = context.parsed.GovHydroWEH;
            if (null == bucket)
                context.parsed.GovHydroWEH = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Gas turbine model.
         *
         */
        function parse_GovGAST2 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovGAST2";
            /**
             * Valve positioner (A).
             *
             */
            base.parse_element (/<cim:GovGAST2.a>([\s\S]*?)<\/cim:GovGAST2.a>/g, obj, "a", base.to_float, sub, context);

            /**
             * Exhaust temperature Parameter (Af1).
             *
             * Unit = per unit temperature.  Based on temperature in degrees C.
             *
             */
            base.parse_element (/<cim:GovGAST2.af1>([\s\S]*?)<\/cim:GovGAST2.af1>/g, obj, "af1", base.to_string, sub, context);

            /**
             * Coefficient equal to 0.5(1-speed) (Af2).
             *
             */
            base.parse_element (/<cim:GovGAST2.af2>([\s\S]*?)<\/cim:GovGAST2.af2>/g, obj, "af2", base.to_string, sub, context);

            /**
             * Valve positioner (B).
             *
             */
            base.parse_element (/<cim:GovGAST2.b>([\s\S]*?)<\/cim:GovGAST2.b>/g, obj, "b", base.to_float, sub, context);

            /**
             * (Bf1).
             *
             * Bf1 = E(1-w) where E (speed sensitivity coefficient) is 0.55 to 0.65 x Tr.  Unit = per unit temperature.  Based on temperature in degrees C.
             *
             */
            base.parse_element (/<cim:GovGAST2.bf1>([\s\S]*?)<\/cim:GovGAST2.bf1>/g, obj, "bf1", base.to_string, sub, context);

            /**
             * Turbine Torque Coefficient K<sub>hhv</sub> (depends on heating value of fuel stream in combustion chamber) (Bf2).
             *
             */
            base.parse_element (/<cim:GovGAST2.bf2>([\s\S]*?)<\/cim:GovGAST2.bf2>/g, obj, "bf2", base.to_string, sub, context);

            /**
             * Valve positioner (C).
             *
             */
            base.parse_element (/<cim:GovGAST2.c>([\s\S]*?)<\/cim:GovGAST2.c>/g, obj, "c", base.to_float, sub, context);

            /**
             * Coefficient defining fuel flow where power output is 0% (Cf2).
             *
             * Synchronous but no output.  Typically 0.23 x K<sub>hhv</sub> (23% fuel flow).
             *
             */
            base.parse_element (/<cim:GovGAST2.cf2>([\s\S]*?)<\/cim:GovGAST2.cf2>/g, obj, "cf2", base.to_string, sub, context);

            /**
             * Combustion reaction time delay (Ecr).
             *
             */
            base.parse_element (/<cim:GovGAST2.ecr>([\s\S]*?)<\/cim:GovGAST2.ecr>/g, obj, "ecr", base.to_string, sub, context);

            /**
             * Turbine and exhaust delay (Etd).
             *
             */
            base.parse_element (/<cim:GovGAST2.etd>([\s\S]*?)<\/cim:GovGAST2.etd>/g, obj, "etd", base.to_string, sub, context);

            /**
             * Ratio of Fuel Adjustment (K3).
             *
             */
            base.parse_element (/<cim:GovGAST2.k3>([\s\S]*?)<\/cim:GovGAST2.k3>/g, obj, "k3", base.to_string, sub, context);

            /**
             * Gain of radiation shield (K4).
             *
             */
            base.parse_element (/<cim:GovGAST2.k4>([\s\S]*?)<\/cim:GovGAST2.k4>/g, obj, "k4", base.to_string, sub, context);

            /**
             * Gain of radiation shield (K5).
             *
             */
            base.parse_element (/<cim:GovGAST2.k5>([\s\S]*?)<\/cim:GovGAST2.k5>/g, obj, "k5", base.to_string, sub, context);

            /**
             * Minimum fuel flow (K6).
             *
             */
            base.parse_element (/<cim:GovGAST2.k6>([\s\S]*?)<\/cim:GovGAST2.k6>/g, obj, "k6", base.to_string, sub, context);

            /**
             * Fuel system feedback (Kf).
             *
             */
            base.parse_element (/<cim:GovGAST2.kf>([\s\S]*?)<\/cim:GovGAST2.kf>/g, obj, "kf", base.to_string, sub, context);

            /**
             * Base for power values (MWbase) (&gt; 0).
             *
             * Unit = MW.
             *
             */
            base.parse_element (/<cim:GovGAST2.mwbase>([\s\S]*?)<\/cim:GovGAST2.mwbase>/g, obj, "mwbase", base.to_string, sub, context);

            /**
             * Fuel Control Time Constant (T).
             *
             */
            base.parse_element (/<cim:GovGAST2.t>([\s\S]*?)<\/cim:GovGAST2.t>/g, obj, "t", base.to_string, sub, context);

            /**
             * Radiation shield time constant (T3).
             *
             */
            base.parse_element (/<cim:GovGAST2.t3>([\s\S]*?)<\/cim:GovGAST2.t3>/g, obj, "t3", base.to_string, sub, context);

            /**
             * Thermocouple time constant (T4).
             *
             */
            base.parse_element (/<cim:GovGAST2.t4>([\s\S]*?)<\/cim:GovGAST2.t4>/g, obj, "t4", base.to_string, sub, context);

            /**
             * Temperature control time constant (T5).
             *
             */
            base.parse_element (/<cim:GovGAST2.t5>([\s\S]*?)<\/cim:GovGAST2.t5>/g, obj, "t5", base.to_string, sub, context);

            /**
             * Temperature control (Tc).
             *
             * Unit = �F or �C depending on constants Af1 and Bf1.
             *
             */
            base.parse_element (/<cim:GovGAST2.tc>([\s\S]*?)<\/cim:GovGAST2.tc>/g, obj, "tc", base.to_string, sub, context);

            /**
             * Compressor discharge time constant (Tcd).
             *
             */
            base.parse_element (/<cim:GovGAST2.tcd>([\s\S]*?)<\/cim:GovGAST2.tcd>/g, obj, "tcd", base.to_string, sub, context);

            /**
             * Fuel system time constant (Tf).
             *
             */
            base.parse_element (/<cim:GovGAST2.tf>([\s\S]*?)<\/cim:GovGAST2.tf>/g, obj, "tf", base.to_string, sub, context);

            /**
             * Maximum Turbine limit (Tmax).
             *
             */
            base.parse_element (/<cim:GovGAST2.tmax>([\s\S]*?)<\/cim:GovGAST2.tmax>/g, obj, "tmax", base.to_string, sub, context);

            /**
             * Minimum Turbine limit (Tmin).
             *
             */
            base.parse_element (/<cim:GovGAST2.tmin>([\s\S]*?)<\/cim:GovGAST2.tmin>/g, obj, "tmin", base.to_string, sub, context);

            /**
             * Rated temperature (Tr).
             *
             * Unit = �C depending on parameters Af1 and Bf1.
             *
             */
            base.parse_element (/<cim:GovGAST2.tr>([\s\S]*?)<\/cim:GovGAST2.tr>/g, obj, "tr", base.to_string, sub, context);

            /**
             * Turbine rating (Trate).
             *
             * Unit = MW.
             *
             */
            base.parse_element (/<cim:GovGAST2.trate>([\s\S]*?)<\/cim:GovGAST2.trate>/g, obj, "trate", base.to_string, sub, context);

            /**
             * Temperature controller integration rate (Tt).
             *
             */
            base.parse_element (/<cim:GovGAST2.tt>([\s\S]*?)<\/cim:GovGAST2.tt>/g, obj, "tt", base.to_string, sub, context);

            /**
             * Governor gain (1/droop) on turbine rating (W).
             *
             */
            base.parse_element (/<cim:GovGAST2.w>([\s\S]*?)<\/cim:GovGAST2.w>/g, obj, "w", base.to_string, sub, context);

            /**
             * Governor lead time constant (X).
             *
             */
            base.parse_element (/<cim:GovGAST2.x>([\s\S]*?)<\/cim:GovGAST2.x>/g, obj, "x", base.to_string, sub, context);

            /**
             * Governor lag time constant (Y) (&gt;0).
             *
             */
            base.parse_element (/<cim:GovGAST2.y>([\s\S]*?)<\/cim:GovGAST2.y>/g, obj, "y", base.to_string, sub, context);

            /**
             * Governor mode (Z).
             * true = Droop
             *
             * false = ISO.
             *
             */
            base.parse_element (/<cim:GovGAST2.z>([\s\S]*?)<\/cim:GovGAST2.z>/g, obj, "z", base.to_boolean, sub, context);

            bucket = context.parsed.GovGAST2;
            if (null == bucket)
                context.parsed.GovGAST2 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Turbine-governor function block whose behavior is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         *
         */
        function parse_TurbineGovernorDynamics (context, sub)
        {
            var obj;
            var bucket;

            obj = StandardModels.parse_DynamicsFunctionBlock (context, sub);
            obj.cls = "TurbineGovernorDynamics";
            /**
             * Asynchronous machine model with which this turbine-governor model is associated.
             *
             */
            base.parse_attribute (/<cim:TurbineGovernorDynamics.AsynchronousMachineDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AsynchronousMachineDynamics", sub, context, true);

            /**
             * Turbine load controller providing input to this turbine-governor.
             *
             */
            base.parse_attribute (/<cim:TurbineGovernorDynamics.TurbineLoadControllerDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TurbineLoadControllerDynamics", sub, context, true);

            bucket = context.parsed.TurbineGovernorDynamics;
            if (null == bucket)
                context.parsed.TurbineGovernorDynamics = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Cross compound turbine governor model.
         *
         */
        function parse_GovSteamCC (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovSteamCC";
            /**
             * HP damping factor (Dhp).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteamCC.dhp>([\s\S]*?)<\/cim:GovSteamCC.dhp>/g, obj, "dhp", base.to_string, sub, context);

            /**
             * LP damping factor (Dlp).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteamCC.dlp>([\s\S]*?)<\/cim:GovSteamCC.dlp>/g, obj, "dlp", base.to_string, sub, context);

            /**
             * Fraction of HP power ahead of reheater (Fhp).
             *
             * Typical Value = 0.3.
             *
             */
            base.parse_element (/<cim:GovSteamCC.fhp>([\s\S]*?)<\/cim:GovSteamCC.fhp>/g, obj, "fhp", base.to_string, sub, context);

            /**
             * Fraction of LP power ahead of reheater (Flp).
             *
             * Typical Value = 0.7.
             *
             */
            base.parse_element (/<cim:GovSteamCC.flp>([\s\S]*?)<\/cim:GovSteamCC.flp>/g, obj, "flp", base.to_string, sub, context);

            /**
             * Base for power values (MWbase) (&gt;0).
             *
             * Unit = MW.
             *
             */
            base.parse_element (/<cim:GovSteamCC.mwbase>([\s\S]*?)<\/cim:GovSteamCC.mwbase>/g, obj, "mwbase", base.to_string, sub, context);

            /**
             * Maximum HP value position (Pmaxhp).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovSteamCC.pmaxhp>([\s\S]*?)<\/cim:GovSteamCC.pmaxhp>/g, obj, "pmaxhp", base.to_string, sub, context);

            /**
             * Maximum LP value position (Pmaxlp).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovSteamCC.pmaxlp>([\s\S]*?)<\/cim:GovSteamCC.pmaxlp>/g, obj, "pmaxlp", base.to_string, sub, context);

            /**
             * HP governor droop (Rhp).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:GovSteamCC.rhp>([\s\S]*?)<\/cim:GovSteamCC.rhp>/g, obj, "rhp", base.to_string, sub, context);

            /**
             * LP governor droop (Rlp).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:GovSteamCC.rlp>([\s\S]*?)<\/cim:GovSteamCC.rlp>/g, obj, "rlp", base.to_string, sub, context);

            /**
             * HP governor time constant (T1hp).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:GovSteamCC.t1hp>([\s\S]*?)<\/cim:GovSteamCC.t1hp>/g, obj, "t1hp", base.to_string, sub, context);

            /**
             * LP governor time constant (T1lp).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:GovSteamCC.t1lp>([\s\S]*?)<\/cim:GovSteamCC.t1lp>/g, obj, "t1lp", base.to_string, sub, context);

            /**
             * HP turbine time constant (T3hp).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:GovSteamCC.t3hp>([\s\S]*?)<\/cim:GovSteamCC.t3hp>/g, obj, "t3hp", base.to_string, sub, context);

            /**
             * LP turbine time constant (T3lp).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:GovSteamCC.t3lp>([\s\S]*?)<\/cim:GovSteamCC.t3lp>/g, obj, "t3lp", base.to_string, sub, context);

            /**
             * HP turbine time constant (T4hp).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:GovSteamCC.t4hp>([\s\S]*?)<\/cim:GovSteamCC.t4hp>/g, obj, "t4hp", base.to_string, sub, context);

            /**
             * LP turbine time constant (T4lp).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:GovSteamCC.t4lp>([\s\S]*?)<\/cim:GovSteamCC.t4lp>/g, obj, "t4lp", base.to_string, sub, context);

            /**
             * HP reheater time constant (T5hp).
             *
             * Typical Value = 10.
             *
             */
            base.parse_element (/<cim:GovSteamCC.t5hp>([\s\S]*?)<\/cim:GovSteamCC.t5hp>/g, obj, "t5hp", base.to_string, sub, context);

            /**
             * LP reheater time constant (T5lp).
             *
             * Typical Value = 10.
             *
             */
            base.parse_element (/<cim:GovSteamCC.t5lp>([\s\S]*?)<\/cim:GovSteamCC.t5lp>/g, obj, "t5lp", base.to_string, sub, context);

            bucket = context.parsed.GovSteamCC;
            if (null == bucket)
                context.parsed.GovSteamCC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * PID governor and turbine.
         *
         */
        function parse_GovHydroPID (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovHydroPID";
            /**
             * Turbine numerator multiplier (Aturb) (note 3).
             *
             * Typical Value -1.
             *
             */
            base.parse_element (/<cim:GovHydroPID.aturb>([\s\S]*?)<\/cim:GovHydroPID.aturb>/g, obj, "aturb", base.to_string, sub, context);

            /**
             * Turbine denominator multiplier (Bturb) (note 3).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovHydroPID.bturb>([\s\S]*?)<\/cim:GovHydroPID.bturb>/g, obj, "bturb", base.to_string, sub, context);

            /**
             * Intentional dead-band width (db1).
             *
             * Unit = Hz.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID.db1>([\s\S]*?)<\/cim:GovHydroPID.db1>/g, obj, "db1", base.to_string, sub, context);

            /**
             * Unintentional dead-band (db2).
             *
             * Unit = MW.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID.db2>([\s\S]*?)<\/cim:GovHydroPID.db2>/g, obj, "db2", base.to_string, sub, context);

            /**
             * Intentional db hysteresis (eps).
             *
             * Unit = Hz.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID.eps>([\s\S]*?)<\/cim:GovHydroPID.eps>/g, obj, "eps", base.to_string, sub, context);

            /**
             * Nonlinear gain point 1, PU gv (Gv1).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID.gv1>([\s\S]*?)<\/cim:GovHydroPID.gv1>/g, obj, "gv1", base.to_string, sub, context);

            /**
             * Nonlinear gain point 2, PU gv (Gv2).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID.gv2>([\s\S]*?)<\/cim:GovHydroPID.gv2>/g, obj, "gv2", base.to_string, sub, context);

            /**
             * Nonlinear gain point 3, PU gv (Gv3).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID.gv3>([\s\S]*?)<\/cim:GovHydroPID.gv3>/g, obj, "gv3", base.to_string, sub, context);

            /**
             * Nonlinear gain point 4, PU gv (Gv4).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID.gv4>([\s\S]*?)<\/cim:GovHydroPID.gv4>/g, obj, "gv4", base.to_string, sub, context);

            /**
             * Nonlinear gain point 5, PU gv (Gv5).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID.gv5>([\s\S]*?)<\/cim:GovHydroPID.gv5>/g, obj, "gv5", base.to_string, sub, context);

            /**
             * Nonlinear gain point 6, PU gv (Gv6).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID.gv6>([\s\S]*?)<\/cim:GovHydroPID.gv6>/g, obj, "gv6", base.to_string, sub, context);

            /**
             * Input signal switch (Flag).
             * true = Pe input is used
             * false = feedback is received from CV.
             *
             * Flag is normally dependent on Tt.  If Tf is zero, Flag is set to false. If Tf is not zero, Flag is set to true.  Typical Value = true.
             *
             */
            base.parse_element (/<cim:GovHydroPID.inputSignal>([\s\S]*?)<\/cim:GovHydroPID.inputSignal>/g, obj, "inputSignal", base.to_boolean, sub, context);

            /**
             * Derivative gain (Kd).
             *
             * Typical Value = 1.11.
             *
             */
            base.parse_element (/<cim:GovHydroPID.kd>([\s\S]*?)<\/cim:GovHydroPID.kd>/g, obj, "kd", base.to_string, sub, context);

            /**
             * Gate servo gain (Kg).
             *
             * Typical Value = 2.5.
             *
             */
            base.parse_element (/<cim:GovHydroPID.kg>([\s\S]*?)<\/cim:GovHydroPID.kg>/g, obj, "kg", base.to_string, sub, context);

            /**
             * Integral gain (Ki).
             *
             * Typical Value = 0.36.
             *
             */
            base.parse_element (/<cim:GovHydroPID.ki>([\s\S]*?)<\/cim:GovHydroPID.ki>/g, obj, "ki", base.to_string, sub, context);

            /**
             * Proportional gain (Kp).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:GovHydroPID.kp>([\s\S]*?)<\/cim:GovHydroPID.kp>/g, obj, "kp", base.to_string, sub, context);

            /**
             * Base for power values (MWbase) (&gt;0).
             *
             * Unit = MW.
             *
             */
            base.parse_element (/<cim:GovHydroPID.mwbase>([\s\S]*?)<\/cim:GovHydroPID.mwbase>/g, obj, "mwbase", base.to_string, sub, context);

            /**
             * Nonlinear gain point 1, PU power (Pgv1).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID.pgv1>([\s\S]*?)<\/cim:GovHydroPID.pgv1>/g, obj, "pgv1", base.to_string, sub, context);

            /**
             * Nonlinear gain point 2, PU power (Pgv2).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID.pgv2>([\s\S]*?)<\/cim:GovHydroPID.pgv2>/g, obj, "pgv2", base.to_string, sub, context);

            /**
             * Nonlinear gain point 3, PU power (Pgv3).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID.pgv3>([\s\S]*?)<\/cim:GovHydroPID.pgv3>/g, obj, "pgv3", base.to_string, sub, context);

            /**
             * Nonlinear gain point 4, PU power (Pgv4).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID.pgv4>([\s\S]*?)<\/cim:GovHydroPID.pgv4>/g, obj, "pgv4", base.to_string, sub, context);

            /**
             * Nonlinear gain point 5, PU power (Pgv5).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID.pgv5>([\s\S]*?)<\/cim:GovHydroPID.pgv5>/g, obj, "pgv5", base.to_string, sub, context);

            /**
             * Nonlinear gain point 6, PU power (Pgv6).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID.pgv6>([\s\S]*?)<\/cim:GovHydroPID.pgv6>/g, obj, "pgv6", base.to_string, sub, context);

            /**
             * Maximum gate opening, PU of MWbase (Pmax).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovHydroPID.pmax>([\s\S]*?)<\/cim:GovHydroPID.pmax>/g, obj, "pmax", base.to_string, sub, context);

            /**
             * Minimum gate opening, PU of MWbase (Pmin).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID.pmin>([\s\S]*?)<\/cim:GovHydroPID.pmin>/g, obj, "pmin", base.to_string, sub, context);

            /**
             * Steady state droop (R).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:GovHydroPID.r>([\s\S]*?)<\/cim:GovHydroPID.r>/g, obj, "r", base.to_string, sub, context);

            /**
             * Input filter time constant (Td).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID.td>([\s\S]*?)<\/cim:GovHydroPID.td>/g, obj, "td", base.to_string, sub, context);

            /**
             * Washout time constant (Tf).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:GovHydroPID.tf>([\s\S]*?)<\/cim:GovHydroPID.tf>/g, obj, "tf", base.to_string, sub, context);

            /**
             * Gate servo time constant (Tp).
             *
             * Typical Value = 0.35.
             *
             */
            base.parse_element (/<cim:GovHydroPID.tp>([\s\S]*?)<\/cim:GovHydroPID.tp>/g, obj, "tp", base.to_string, sub, context);

            /**
             * Power feedback time constant (Tt).
             *
             * Typical Value = 0.02.
             *
             */
            base.parse_element (/<cim:GovHydroPID.tt>([\s\S]*?)<\/cim:GovHydroPID.tt>/g, obj, "tt", base.to_string, sub, context);

            /**
             * Turbine time constant (Tturb) (note 3).
             *
             * Typical Value = 0.8.
             *
             */
            base.parse_element (/<cim:GovHydroPID.tturb>([\s\S]*?)<\/cim:GovHydroPID.tturb>/g, obj, "tturb", base.to_string, sub, context);

            /**
             * Maximum gate closing velocity (Velcl).
             *
             * Unit = PU/sec.  Typical Value = -0.14.
             *
             */
            base.parse_element (/<cim:GovHydroPID.velcl>([\s\S]*?)<\/cim:GovHydroPID.velcl>/g, obj, "velcl", base.to_float, sub, context);

            /**
             * Maximum gate opening velocity (Velop).
             *
             * Unit = PU/sec.  Typical Value = 0.09.
             *
             */
            base.parse_element (/<cim:GovHydroPID.velop>([\s\S]*?)<\/cim:GovHydroPID.velop>/g, obj, "velop", base.to_float, sub, context);

            bucket = context.parsed.GovHydroPID;
            if (null == bucket)
                context.parsed.GovHydroPID = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * General governor model with frequency-dependent fuel flow limit.
         *
         * This model is a modification of the GovCT1<b> </b>model in order to represent the frequency-dependent fuel flow limit of a specific gas turbine manufacturer.
         *
         */
        function parse_GovCT2 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovCT2";
            /**
             * Acceleration limiter setpoint (Aset).
             *
             * Unit = PU/sec.  Typical Value = 10.
             *
             */
            base.parse_element (/<cim:GovCT2.aset>([\s\S]*?)<\/cim:GovCT2.aset>/g, obj, "aset", base.to_float, sub, context);

            /**
             * Speed governor dead band in per unit speed (db).
             *
             * In the majority of applications, it is recommended that this value be set to zero.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovCT2.db>([\s\S]*?)<\/cim:GovCT2.db>/g, obj, "db", base.to_string, sub, context);

            /**
             * Speed sensitivity coefficient (Dm).
             *
             * Dm can represent either the variation of the engine power with the shaft speed or the variation of maximum power capability with shaft speed.  If it is positive it describes the falling slope of the engine speed verses power characteristic as speed increases. A slightly falling characteristic is typical for reciprocating engines and some aero-derivative turbines.  If it is negative the engine power is assumed to be unaffected by the shaft speed, but the maximum permissible fuel flow is taken to fall with falling shaft speed. This is characteristic of single-shaft industrial turbines due to exhaust temperature limits.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovCT2.dm>([\s\S]*?)<\/cim:GovCT2.dm>/g, obj, "dm", base.to_string, sub, context);

            /**
             * Frequency threshold 1 (Flim1).
             *
             * Unit = Hz.  Typical Value = 59.
             *
             */
            base.parse_element (/<cim:GovCT2.flim1>([\s\S]*?)<\/cim:GovCT2.flim1>/g, obj, "flim1", base.to_string, sub, context);

            /**
             * Frequency threshold 10 (Flim10).
             *
             * Unit = Hz.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovCT2.flim10>([\s\S]*?)<\/cim:GovCT2.flim10>/g, obj, "flim10", base.to_string, sub, context);

            /**
             * Frequency threshold 2 (Flim2).
             *
             * Unit = Hz.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovCT2.flim2>([\s\S]*?)<\/cim:GovCT2.flim2>/g, obj, "flim2", base.to_string, sub, context);

            /**
             * Frequency threshold 3 (Flim3).
             *
             * Unit = Hz.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovCT2.flim3>([\s\S]*?)<\/cim:GovCT2.flim3>/g, obj, "flim3", base.to_string, sub, context);

            /**
             * Frequency threshold 4 (Flim4).
             *
             * Unit = Hz.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovCT2.flim4>([\s\S]*?)<\/cim:GovCT2.flim4>/g, obj, "flim4", base.to_string, sub, context);

            /**
             * Frequency threshold 5 (Flim5).
             *
             * Unit = Hz.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovCT2.flim5>([\s\S]*?)<\/cim:GovCT2.flim5>/g, obj, "flim5", base.to_string, sub, context);

            /**
             * Frequency threshold 6 (Flim6).
             *
             * Unit = Hz.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovCT2.flim6>([\s\S]*?)<\/cim:GovCT2.flim6>/g, obj, "flim6", base.to_string, sub, context);

            /**
             * Frequency threshold 7 (Flim7).
             *
             * Unit = Hz.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovCT2.flim7>([\s\S]*?)<\/cim:GovCT2.flim7>/g, obj, "flim7", base.to_string, sub, context);

            /**
             * Frequency threshold 8 (Flim8).
             *
             * Unit = Hz.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovCT2.flim8>([\s\S]*?)<\/cim:GovCT2.flim8>/g, obj, "flim8", base.to_string, sub, context);

            /**
             * Frequency threshold 9 (Flim9).
             *
             * Unit = Hz.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovCT2.flim9>([\s\S]*?)<\/cim:GovCT2.flim9>/g, obj, "flim9", base.to_string, sub, context);

            /**
             * Acceleration limiter Gain (Ka).
             *
             * Typical Value = 10.
             *
             */
            base.parse_element (/<cim:GovCT2.ka>([\s\S]*?)<\/cim:GovCT2.ka>/g, obj, "ka", base.to_string, sub, context);

            /**
             * Governor derivative gain (Kdgov).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovCT2.kdgov>([\s\S]*?)<\/cim:GovCT2.kdgov>/g, obj, "kdgov", base.to_string, sub, context);

            /**
             * Governor integral gain (Kigov).
             *
             * Typical Value = 0.45.
             *
             */
            base.parse_element (/<cim:GovCT2.kigov>([\s\S]*?)<\/cim:GovCT2.kigov>/g, obj, "kigov", base.to_string, sub, context);

            /**
             * Load limiter integral gain for PI controller (Kiload).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovCT2.kiload>([\s\S]*?)<\/cim:GovCT2.kiload>/g, obj, "kiload", base.to_string, sub, context);

            /**
             * Power controller (reset) gain (Kimw).
             *
             * The default value of 0.01 corresponds to a reset time of 100 seconds.  A value of 0.001 corresponds to a relatively slow acting load controller.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovCT2.kimw>([\s\S]*?)<\/cim:GovCT2.kimw>/g, obj, "kimw", base.to_string, sub, context);

            /**
             * Governor proportional gain (Kpgov).
             *
             * Typical Value = 4.
             *
             */
            base.parse_element (/<cim:GovCT2.kpgov>([\s\S]*?)<\/cim:GovCT2.kpgov>/g, obj, "kpgov", base.to_string, sub, context);

            /**
             * Load limiter proportional gain for PI controller (Kpload).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovCT2.kpload>([\s\S]*?)<\/cim:GovCT2.kpload>/g, obj, "kpload", base.to_string, sub, context);

            /**
             * Turbine gain (Kturb).
             *
             * Typical Value = 1.9168.
             *
             */
            base.parse_element (/<cim:GovCT2.kturb>([\s\S]*?)<\/cim:GovCT2.kturb>/g, obj, "kturb", base.to_string, sub, context);

            /**
             * Load limiter reference value (Ldref).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovCT2.ldref>([\s\S]*?)<\/cim:GovCT2.ldref>/g, obj, "ldref", base.to_string, sub, context);

            /**
             * Maximum value for speed error signal (Maxerr).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovCT2.maxerr>([\s\S]*?)<\/cim:GovCT2.maxerr>/g, obj, "maxerr", base.to_string, sub, context);

            /**
             * Minimum value for speed error signal (Minerr).
             *
             * Typical Value = -1.
             *
             */
            base.parse_element (/<cim:GovCT2.minerr>([\s\S]*?)<\/cim:GovCT2.minerr>/g, obj, "minerr", base.to_string, sub, context);

            /**
             * Base for power values (MWbase) (&gt; 0).
             *
             * Unit = MW.
             *
             */
            base.parse_element (/<cim:GovCT2.mwbase>([\s\S]*?)<\/cim:GovCT2.mwbase>/g, obj, "mwbase", base.to_string, sub, context);

            /**
             * Power limit 1 (Plim1).
             *
             * Typical Value = 0.8325.
             *
             */
            base.parse_element (/<cim:GovCT2.plim1>([\s\S]*?)<\/cim:GovCT2.plim1>/g, obj, "plim1", base.to_string, sub, context);

            /**
             * Power limit 10 (Plim10).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovCT2.plim10>([\s\S]*?)<\/cim:GovCT2.plim10>/g, obj, "plim10", base.to_string, sub, context);

            /**
             * Power limit 2 (Plim2).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovCT2.plim2>([\s\S]*?)<\/cim:GovCT2.plim2>/g, obj, "plim2", base.to_string, sub, context);

            /**
             * Power limit 3 (Plim3).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovCT2.plim3>([\s\S]*?)<\/cim:GovCT2.plim3>/g, obj, "plim3", base.to_string, sub, context);

            /**
             * Power limit 4 (Plim4).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovCT2.plim4>([\s\S]*?)<\/cim:GovCT2.plim4>/g, obj, "plim4", base.to_string, sub, context);

            /**
             * Power limit 5 (Plim5).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovCT2.plim5>([\s\S]*?)<\/cim:GovCT2.plim5>/g, obj, "plim5", base.to_string, sub, context);

            /**
             * Power limit 6 (Plim6).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovCT2.plim6>([\s\S]*?)<\/cim:GovCT2.plim6>/g, obj, "plim6", base.to_string, sub, context);

            /**
             * Power limit 7 (Plim7).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovCT2.plim7>([\s\S]*?)<\/cim:GovCT2.plim7>/g, obj, "plim7", base.to_string, sub, context);

            /**
             * Power limit 8 (Plim8).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovCT2.plim8>([\s\S]*?)<\/cim:GovCT2.plim8>/g, obj, "plim8", base.to_string, sub, context);

            /**
             * Power Limit 9 (Plim9).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovCT2.plim9>([\s\S]*?)<\/cim:GovCT2.plim9>/g, obj, "plim9", base.to_string, sub, context);

            /**
             * Ramp rate for frequency-dependent power limit (Prate).
             *
             * Typical Value = 0.017.
             *
             */
            base.parse_element (/<cim:GovCT2.prate>([\s\S]*?)<\/cim:GovCT2.prate>/g, obj, "prate", base.to_string, sub, context);

            /**
             * Permanent droop (R).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:GovCT2.r>([\s\S]*?)<\/cim:GovCT2.r>/g, obj, "r", base.to_string, sub, context);

            /**
             * Minimum valve closing rate (Rclose).
             *
             * Unit = PU/sec.  Typical Value = -99.
             *
             */
            base.parse_element (/<cim:GovCT2.rclose>([\s\S]*?)<\/cim:GovCT2.rclose>/g, obj, "rclose", base.to_float, sub, context);

            /**
             * Maximum rate of load limit decrease (Rdown).
             *
             * Typical Value = -99.
             *
             */
            base.parse_element (/<cim:GovCT2.rdown>([\s\S]*?)<\/cim:GovCT2.rdown>/g, obj, "rdown", base.to_string, sub, context);

            /**
             * Maximum valve opening rate (Ropen).
             *
             * Unit = PU/sec.  Typical Value = 99.
             *
             */
            base.parse_element (/<cim:GovCT2.ropen>([\s\S]*?)<\/cim:GovCT2.ropen>/g, obj, "ropen", base.to_float, sub, context);

            /**
             * Feedback signal for droop (Rselect).
             *
             * Typical Value = electricalPower.
             *
             */
            base.parse_element (/<cim:GovCT2.rselect>([\s\S]*?)<\/cim:GovCT2.rselect>/g, obj, "rselect", base.to_string, sub, context);

            /**
             * Maximum rate of load limit increase (Rup).
             *
             * Typical Value = 99.
             *
             */
            base.parse_element (/<cim:GovCT2.rup>([\s\S]*?)<\/cim:GovCT2.rup>/g, obj, "rup", base.to_string, sub, context);

            /**
             * Acceleration limiter time constant (Ta).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovCT2.ta>([\s\S]*?)<\/cim:GovCT2.ta>/g, obj, "ta", base.to_string, sub, context);

            /**
             * Actuator time constant (Tact).
             *
             * Typical Value = 0.4.
             *
             */
            base.parse_element (/<cim:GovCT2.tact>([\s\S]*?)<\/cim:GovCT2.tact>/g, obj, "tact", base.to_string, sub, context);

            /**
             * Turbine lag time constant (Tb).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:GovCT2.tb>([\s\S]*?)<\/cim:GovCT2.tb>/g, obj, "tb", base.to_string, sub, context);

            /**
             * Turbine lead time constant (Tc).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovCT2.tc>([\s\S]*?)<\/cim:GovCT2.tc>/g, obj, "tc", base.to_string, sub, context);

            /**
             * Governor derivative controller time constant (Tdgov).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovCT2.tdgov>([\s\S]*?)<\/cim:GovCT2.tdgov>/g, obj, "tdgov", base.to_string, sub, context);

            /**
             * Transport time delay for diesel engine used in representing diesel engines where there is a small but measurable transport delay between a change in fuel flow setting and the development of torque (Teng).
             *
             * Teng should be zero in all but special cases where this transport delay is of particular concern.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovCT2.teng>([\s\S]*?)<\/cim:GovCT2.teng>/g, obj, "teng", base.to_string, sub, context);

            /**
             * Load Limiter time constant (Tfload).
             *
             * Typical Value = 3.
             *
             */
            base.parse_element (/<cim:GovCT2.tfload>([\s\S]*?)<\/cim:GovCT2.tfload>/g, obj, "tfload", base.to_string, sub, context);

            /**
             * Electrical power transducer time constant (Tpelec).
             *
             * Typical Value = 2.5.
             *
             */
            base.parse_element (/<cim:GovCT2.tpelec>([\s\S]*?)<\/cim:GovCT2.tpelec>/g, obj, "tpelec", base.to_string, sub, context);

            /**
             * Temperature detection lead time constant (Tsa).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovCT2.tsa>([\s\S]*?)<\/cim:GovCT2.tsa>/g, obj, "tsa", base.to_string, sub, context);

            /**
             * Temperature detection lag time constant (Tsb).
             *
             * Typical Value = 50.
             *
             */
            base.parse_element (/<cim:GovCT2.tsb>([\s\S]*?)<\/cim:GovCT2.tsb>/g, obj, "tsb", base.to_string, sub, context);

            /**
             * Maximum valve position limit (Vmax).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovCT2.vmax>([\s\S]*?)<\/cim:GovCT2.vmax>/g, obj, "vmax", base.to_string, sub, context);

            /**
             * Minimum valve position limit (Vmin).
             *
             * Typical Value = 0.175.
             *
             */
            base.parse_element (/<cim:GovCT2.vmin>([\s\S]*?)<\/cim:GovCT2.vmin>/g, obj, "vmin", base.to_string, sub, context);

            /**
             * No load fuel flow (Wfnl).
             *
             * Typical Value = 0.187.
             *
             */
            base.parse_element (/<cim:GovCT2.wfnl>([\s\S]*?)<\/cim:GovCT2.wfnl>/g, obj, "wfnl", base.to_string, sub, context);

            /**
             * Switch for fuel source characteristic to recognize that fuel flow, for a given fuel valve stroke, can be proportional to engine speed (Wfspd).
             * true = fuel flow proportional to speed (for some gas turbines and diesel engines with positive displacement fuel injectors)
             * false = fuel control system keeps fuel flow independent of engine speed.
             *
             * Typical Value = false.
             *
             */
            base.parse_element (/<cim:GovCT2.wfspd>([\s\S]*?)<\/cim:GovCT2.wfspd>/g, obj, "wfspd", base.to_boolean, sub, context);

            bucket = context.parsed.GovCT2;
            if (null == bucket)
                context.parsed.GovCT2 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * IEEE hydro turbine governor model represents plants with straightforward penstock configurations and hydraulic-dashpot governors.
         *
         */
        function parse_GovHydro2 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovHydro2";
            /**
             * Turbine numerator multiplier (Aturb).
             *
             * Typical Value = -1.
             *
             */
            base.parse_element (/<cim:GovHydro2.aturb>([\s\S]*?)<\/cim:GovHydro2.aturb>/g, obj, "aturb", base.to_string, sub, context);

            /**
             * Turbine denominator multiplier (Bturb).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovHydro2.bturb>([\s\S]*?)<\/cim:GovHydro2.bturb>/g, obj, "bturb", base.to_string, sub, context);

            /**
             * Intentional deadband width (db1).
             *
             * Unit = Hz.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro2.db1>([\s\S]*?)<\/cim:GovHydro2.db1>/g, obj, "db1", base.to_string, sub, context);

            /**
             * Unintentional deadband (db2).
             *
             * Unit = MW.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro2.db2>([\s\S]*?)<\/cim:GovHydro2.db2>/g, obj, "db2", base.to_string, sub, context);

            /**
             * Intentional db hysteresis (eps).
             *
             * Unit = Hz.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro2.eps>([\s\S]*?)<\/cim:GovHydro2.eps>/g, obj, "eps", base.to_string, sub, context);

            /**
             * Nonlinear gain point 1, PU gv (Gv1).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro2.gv1>([\s\S]*?)<\/cim:GovHydro2.gv1>/g, obj, "gv1", base.to_string, sub, context);

            /**
             * Nonlinear gain point 2, PU gv (Gv2).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro2.gv2>([\s\S]*?)<\/cim:GovHydro2.gv2>/g, obj, "gv2", base.to_string, sub, context);

            /**
             * Nonlinear gain point 3, PU gv (Gv3).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro2.gv3>([\s\S]*?)<\/cim:GovHydro2.gv3>/g, obj, "gv3", base.to_string, sub, context);

            /**
             * Nonlinear gain point 4, PU gv (Gv4).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro2.gv4>([\s\S]*?)<\/cim:GovHydro2.gv4>/g, obj, "gv4", base.to_string, sub, context);

            /**
             * Nonlinear gain point 5, PU gv (Gv5).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro2.gv5>([\s\S]*?)<\/cim:GovHydro2.gv5>/g, obj, "gv5", base.to_string, sub, context);

            /**
             * Nonlinear gain point 6, PU gv (Gv6).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro2.gv6>([\s\S]*?)<\/cim:GovHydro2.gv6>/g, obj, "gv6", base.to_string, sub, context);

            /**
             * Turbine gain (Kturb).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovHydro2.kturb>([\s\S]*?)<\/cim:GovHydro2.kturb>/g, obj, "kturb", base.to_string, sub, context);

            /**
             * Base for power values (MWbase) (&gt; 0).
             *
             * Unit = MW.
             *
             */
            base.parse_element (/<cim:GovHydro2.mwbase>([\s\S]*?)<\/cim:GovHydro2.mwbase>/g, obj, "mwbase", base.to_string, sub, context);

            /**
             * Nonlinear gain point 1, PU power (Pgv1).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro2.pgv1>([\s\S]*?)<\/cim:GovHydro2.pgv1>/g, obj, "pgv1", base.to_string, sub, context);

            /**
             * Nonlinear gain point 2, PU power (Pgv2).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro2.pgv2>([\s\S]*?)<\/cim:GovHydro2.pgv2>/g, obj, "pgv2", base.to_string, sub, context);

            /**
             * Nonlinear gain point 3, PU power (Pgv3).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro2.pgv3>([\s\S]*?)<\/cim:GovHydro2.pgv3>/g, obj, "pgv3", base.to_string, sub, context);

            /**
             * Nonlinear gain point 4, PU power (Pgv4).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro2.pgv4>([\s\S]*?)<\/cim:GovHydro2.pgv4>/g, obj, "pgv4", base.to_string, sub, context);

            /**
             * Nonlinear gain point 5, PU power (Pgv5).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro2.pgv5>([\s\S]*?)<\/cim:GovHydro2.pgv5>/g, obj, "pgv5", base.to_string, sub, context);

            /**
             * Nonlinear gain point 6, PU power (Pgv6).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro2.pgv6>([\s\S]*?)<\/cim:GovHydro2.pgv6>/g, obj, "pgv6", base.to_string, sub, context);

            /**
             * Maximum gate opening (Pmax).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovHydro2.pmax>([\s\S]*?)<\/cim:GovHydro2.pmax>/g, obj, "pmax", base.to_string, sub, context);

            /**
             * Minimum gate opening; (<i>Pmin</i>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro2.pmin>([\s\S]*?)<\/cim:GovHydro2.pmin>/g, obj, "pmin", base.to_string, sub, context);

            /**
             * Permanent droop (Rperm).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:GovHydro2.rperm>([\s\S]*?)<\/cim:GovHydro2.rperm>/g, obj, "rperm", base.to_string, sub, context);

            /**
             * Temporary droop (Rtemp).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovHydro2.rtemp>([\s\S]*?)<\/cim:GovHydro2.rtemp>/g, obj, "rtemp", base.to_string, sub, context);

            /**
             * Gate servo time constant (Tg).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovHydro2.tg>([\s\S]*?)<\/cim:GovHydro2.tg>/g, obj, "tg", base.to_string, sub, context);

            /**
             * Pilot servo valve time constant (Tp).
             *
             * Typical Value = 0.03.
             *
             */
            base.parse_element (/<cim:GovHydro2.tp>([\s\S]*?)<\/cim:GovHydro2.tp>/g, obj, "tp", base.to_string, sub, context);

            /**
             * Dashpot time constant (Tr).
             *
             * Typical Value = 12.
             *
             */
            base.parse_element (/<cim:GovHydro2.tr>([\s\S]*?)<\/cim:GovHydro2.tr>/g, obj, "tr", base.to_string, sub, context);

            /**
             * Water inertia time constant (Tw).
             *
             * Typical Value = 2.
             *
             */
            base.parse_element (/<cim:GovHydro2.tw>([\s\S]*?)<\/cim:GovHydro2.tw>/g, obj, "tw", base.to_string, sub, context);

            /**
             * Maximum gate closing velocity (Uc) (&lt;0).
             *
             * Unit = PU/sec.   Typical Value = -0.1.
             *
             */
            base.parse_element (/<cim:GovHydro2.uc>([\s\S]*?)<\/cim:GovHydro2.uc>/g, obj, "uc", base.to_float, sub, context);

            /**
             * Maximum gate opening velocity (Uo).
             *
             * Unit = PU/sec.  Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:GovHydro2.uo>([\s\S]*?)<\/cim:GovHydro2.uo>/g, obj, "uo", base.to_float, sub, context);

            bucket = context.parsed.GovHydro2;
            if (null == bucket)
                context.parsed.GovHydro2 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * IEEE hydro turbine governor model represents plants with straightforward penstock configurations and hydraulic-dashpot governors.
         *
         * Ref<font color="#0f0f0f">erence: IEEE Transactions on Power Apparatus and Systems</font>
         *
         */
        function parse_GovHydroIEEE2 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovHydroIEEE2";
            /**
             * Turbine numerator multiplier (Aturb).
             *
             * Typical Value = -1.
             *
             */
            base.parse_element (/<cim:GovHydroIEEE2.aturb>([\s\S]*?)<\/cim:GovHydroIEEE2.aturb>/g, obj, "aturb", base.to_string, sub, context);

            /**
             * Turbine denominator multiplier (Bturb).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovHydroIEEE2.bturb>([\s\S]*?)<\/cim:GovHydroIEEE2.bturb>/g, obj, "bturb", base.to_string, sub, context);

            /**
             * Nonlinear gain point 1, PU gv (Gv1).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroIEEE2.gv1>([\s\S]*?)<\/cim:GovHydroIEEE2.gv1>/g, obj, "gv1", base.to_string, sub, context);

            /**
             * Nonlinear gain point 2, PU gv (Gv2).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroIEEE2.gv2>([\s\S]*?)<\/cim:GovHydroIEEE2.gv2>/g, obj, "gv2", base.to_string, sub, context);

            /**
             * Nonlinear gain point 3, PU gv (Gv3).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroIEEE2.gv3>([\s\S]*?)<\/cim:GovHydroIEEE2.gv3>/g, obj, "gv3", base.to_string, sub, context);

            /**
             * Nonlinear gain point 4, PU gv (Gv4).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroIEEE2.gv4>([\s\S]*?)<\/cim:GovHydroIEEE2.gv4>/g, obj, "gv4", base.to_string, sub, context);

            /**
             * Nonlinear gain point 5, PU gv (Gv5).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroIEEE2.gv5>([\s\S]*?)<\/cim:GovHydroIEEE2.gv5>/g, obj, "gv5", base.to_string, sub, context);

            /**
             * Nonlinear gain point 6, PU gv (Gv6).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroIEEE2.gv6>([\s\S]*?)<\/cim:GovHydroIEEE2.gv6>/g, obj, "gv6", base.to_string, sub, context);

            /**
             * Turbine gain (Kturb).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovHydroIEEE2.kturb>([\s\S]*?)<\/cim:GovHydroIEEE2.kturb>/g, obj, "kturb", base.to_string, sub, context);

            /**
             * Base for power values (MWbase) (&gt; 0).
             *
             * Unit = MW.
             *
             */
            base.parse_element (/<cim:GovHydroIEEE2.mwbase>([\s\S]*?)<\/cim:GovHydroIEEE2.mwbase>/g, obj, "mwbase", base.to_string, sub, context);

            /**
             * Nonlinear gain point 1, PU power (Pgv1).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroIEEE2.pgv1>([\s\S]*?)<\/cim:GovHydroIEEE2.pgv1>/g, obj, "pgv1", base.to_string, sub, context);

            /**
             * Nonlinear gain point 2, PU power (Pgv2).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroIEEE2.pgv2>([\s\S]*?)<\/cim:GovHydroIEEE2.pgv2>/g, obj, "pgv2", base.to_string, sub, context);

            /**
             * Nonlinear gain point 3, PU power (Pgv3).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroIEEE2.pgv3>([\s\S]*?)<\/cim:GovHydroIEEE2.pgv3>/g, obj, "pgv3", base.to_string, sub, context);

            /**
             * Nonlinear gain point 4, PU power (Pgv4).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroIEEE2.pgv4>([\s\S]*?)<\/cim:GovHydroIEEE2.pgv4>/g, obj, "pgv4", base.to_string, sub, context);

            /**
             * Nonlinear gain point 5, PU power (Pgv5).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroIEEE2.pgv5>([\s\S]*?)<\/cim:GovHydroIEEE2.pgv5>/g, obj, "pgv5", base.to_string, sub, context);

            /**
             * Nonlinear gain point 6, PU power (Pgv6).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroIEEE2.pgv6>([\s\S]*?)<\/cim:GovHydroIEEE2.pgv6>/g, obj, "pgv6", base.to_string, sub, context);

            /**
             * Maximum gate opening (Pmax).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovHydroIEEE2.pmax>([\s\S]*?)<\/cim:GovHydroIEEE2.pmax>/g, obj, "pmax", base.to_string, sub, context);

            /**
             * Minimum gate opening (Pmin).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroIEEE2.pmin>([\s\S]*?)<\/cim:GovHydroIEEE2.pmin>/g, obj, "pmin", base.to_string, sub, context);

            /**
             * Permanent droop (Rperm).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:GovHydroIEEE2.rperm>([\s\S]*?)<\/cim:GovHydroIEEE2.rperm>/g, obj, "rperm", base.to_string, sub, context);

            /**
             * Temporary droop (Rtemp).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovHydroIEEE2.rtemp>([\s\S]*?)<\/cim:GovHydroIEEE2.rtemp>/g, obj, "rtemp", base.to_string, sub, context);

            /**
             * Gate servo time constant (Tg).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovHydroIEEE2.tg>([\s\S]*?)<\/cim:GovHydroIEEE2.tg>/g, obj, "tg", base.to_string, sub, context);

            /**
             * Pilot servo valve time constant (Tp).
             *
             * Typical Value = 0.03.
             *
             */
            base.parse_element (/<cim:GovHydroIEEE2.tp>([\s\S]*?)<\/cim:GovHydroIEEE2.tp>/g, obj, "tp", base.to_string, sub, context);

            /**
             * Dashpot time constant (Tr).
             *
             * Typical Value = 12.
             *
             */
            base.parse_element (/<cim:GovHydroIEEE2.tr>([\s\S]*?)<\/cim:GovHydroIEEE2.tr>/g, obj, "tr", base.to_string, sub, context);

            /**
             * Water inertia time constant (Tw).
             *
             * Typical Value = 2.
             *
             */
            base.parse_element (/<cim:GovHydroIEEE2.tw>([\s\S]*?)<\/cim:GovHydroIEEE2.tw>/g, obj, "tw", base.to_string, sub, context);

            /**
             * Maximum gate closing velocity (Uc) (&lt;0).
             *
             * Typical Value = -0.1.
             *
             */
            base.parse_element (/<cim:GovHydroIEEE2.uc>([\s\S]*?)<\/cim:GovHydroIEEE2.uc>/g, obj, "uc", base.to_float, sub, context);

            /**
             * Maximum gate opening velocity (Uo).
             *
             * Unit = PU/sec.  Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:GovHydroIEEE2.uo>([\s\S]*?)<\/cim:GovHydroIEEE2.uo>/g, obj, "uo", base.to_float, sub, context);

            bucket = context.parsed.GovHydroIEEE2;
            if (null == bucket)
                context.parsed.GovHydroIEEE2 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Woodward PID Hydro Governor.
         *
         */
        function parse_GovHydroWPID (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovHydroWPID";
            /**
             * Turbine damping factor (D).
             *
             * Unit = delta P / delta speed.
             *
             */
            base.parse_element (/<cim:GovHydroWPID.d>([\s\S]*?)<\/cim:GovHydroWPID.d>/g, obj, "d", base.to_string, sub, context);

            /**
             * Gate opening Limit Maximum (Gatmax).
             *
             */
            base.parse_element (/<cim:GovHydroWPID.gatmax>([\s\S]*?)<\/cim:GovHydroWPID.gatmax>/g, obj, "gatmax", base.to_string, sub, context);

            /**
             * Gate opening Limit Minimum (Gatmin).
             *
             */
            base.parse_element (/<cim:GovHydroWPID.gatmin>([\s\S]*?)<\/cim:GovHydroWPID.gatmin>/g, obj, "gatmin", base.to_string, sub, context);

            /**
             * Gate position 1 (Gv1).
             *
             */
            base.parse_element (/<cim:GovHydroWPID.gv1>([\s\S]*?)<\/cim:GovHydroWPID.gv1>/g, obj, "gv1", base.to_string, sub, context);

            /**
             * Gate position 2 (Gv2).
             *
             */
            base.parse_element (/<cim:GovHydroWPID.gv2>([\s\S]*?)<\/cim:GovHydroWPID.gv2>/g, obj, "gv2", base.to_string, sub, context);

            /**
             * Gate position 3 (Gv3).
             *
             */
            base.parse_element (/<cim:GovHydroWPID.gv3>([\s\S]*?)<\/cim:GovHydroWPID.gv3>/g, obj, "gv3", base.to_string, sub, context);

            /**
             * Derivative gain (Kd).
             *
             * Typical Value = 1.11.
             *
             */
            base.parse_element (/<cim:GovHydroWPID.kd>([\s\S]*?)<\/cim:GovHydroWPID.kd>/g, obj, "kd", base.to_string, sub, context);

            /**
             * Reset gain (Ki).
             *
             * Typical Value = 0.36.
             *
             */
            base.parse_element (/<cim:GovHydroWPID.ki>([\s\S]*?)<\/cim:GovHydroWPID.ki>/g, obj, "ki", base.to_string, sub, context);

            /**
             * Proportional gain (Kp).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:GovHydroWPID.kp>([\s\S]*?)<\/cim:GovHydroWPID.kp>/g, obj, "kp", base.to_string, sub, context);

            /**
             * Base for power values  (MWbase) (&gt;0).
             *
             * Unit = MW.
             *
             */
            base.parse_element (/<cim:GovHydroWPID.mwbase>([\s\S]*?)<\/cim:GovHydroWPID.mwbase>/g, obj, "mwbase", base.to_string, sub, context);

            /**
             * Output at Gv1 PU of MWbase (Pgv1).
             *
             */
            base.parse_element (/<cim:GovHydroWPID.pgv1>([\s\S]*?)<\/cim:GovHydroWPID.pgv1>/g, obj, "pgv1", base.to_string, sub, context);

            /**
             * Output at Gv2 PU of MWbase (Pgv2).
             *
             */
            base.parse_element (/<cim:GovHydroWPID.pgv2>([\s\S]*?)<\/cim:GovHydroWPID.pgv2>/g, obj, "pgv2", base.to_string, sub, context);

            /**
             * Output at Gv3 PU of MWbase (Pgv3).
             *
             */
            base.parse_element (/<cim:GovHydroWPID.pgv3>([\s\S]*?)<\/cim:GovHydroWPID.pgv3>/g, obj, "pgv3", base.to_string, sub, context);

            /**
             * Maximum Power Output (Pmax).
             *
             */
            base.parse_element (/<cim:GovHydroWPID.pmax>([\s\S]*?)<\/cim:GovHydroWPID.pmax>/g, obj, "pmax", base.to_string, sub, context);

            /**
             * Minimum Power Output (Pmin).
             *
             */
            base.parse_element (/<cim:GovHydroWPID.pmin>([\s\S]*?)<\/cim:GovHydroWPID.pmin>/g, obj, "pmin", base.to_string, sub, context);

            /**
             * Permanent drop (Reg).
             *
             */
            base.parse_element (/<cim:GovHydroWPID.reg>([\s\S]*?)<\/cim:GovHydroWPID.reg>/g, obj, "reg", base.to_string, sub, context);

            /**
             * Controller time constant (Ta) (&gt;0).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroWPID.ta>([\s\S]*?)<\/cim:GovHydroWPID.ta>/g, obj, "ta", base.to_string, sub, context);

            /**
             * Gate servo time constant (Tb) (&gt;0).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroWPID.tb>([\s\S]*?)<\/cim:GovHydroWPID.tb>/g, obj, "tb", base.to_string, sub, context);

            /**
             * Speed detector time constant (Treg).
             *
             */
            base.parse_element (/<cim:GovHydroWPID.treg>([\s\S]*?)<\/cim:GovHydroWPID.treg>/g, obj, "treg", base.to_string, sub, context);

            /**
             * Water inertia time constant (Tw) (&gt;0).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroWPID.tw>([\s\S]*?)<\/cim:GovHydroWPID.tw>/g, obj, "tw", base.to_string, sub, context);

            /**
             * Maximum gate opening velocity (Velmax).
             *
             * Unit = PU/sec.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroWPID.velmax>([\s\S]*?)<\/cim:GovHydroWPID.velmax>/g, obj, "velmax", base.to_string, sub, context);

            /**
             * Maximum gate closing velocity (Velmin).
             *
             * Unit = PU/sec.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroWPID.velmin>([\s\S]*?)<\/cim:GovHydroWPID.velmin>/g, obj, "velmin", base.to_string, sub, context);

            bucket = context.parsed.GovHydroWPID;
            if (null == bucket)
                context.parsed.GovHydroWPID = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Detailed electro-hydraulic governor for steam unit.
         *
         */
        function parse_GovSteamFV4 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovSteamFV4";
            /**
             * Minimum value of pressure regulator output (Cpsmn).
             *
             * Typical Value = -1.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.cpsmn>([\s\S]*?)<\/cim:GovSteamFV4.cpsmn>/g, obj, "cpsmn", base.to_string, sub, context);

            /**
             * Maximum value of pressure regulator output (Cpsmx).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.cpsmx>([\s\S]*?)<\/cim:GovSteamFV4.cpsmx>/g, obj, "cpsmx", base.to_string, sub, context);

            /**
             * Minimum value of regulator set-point (Crmn).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.crmn>([\s\S]*?)<\/cim:GovSteamFV4.crmn>/g, obj, "crmn", base.to_string, sub, context);

            /**
             * Maximum value of regulator set-point (Crmx).
             *
             * Typical Value = 1.2.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.crmx>([\s\S]*?)<\/cim:GovSteamFV4.crmx>/g, obj, "crmx", base.to_string, sub, context);

            /**
             * Derivative gain of pressure regulator (Kdc).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.kdc>([\s\S]*?)<\/cim:GovSteamFV4.kdc>/g, obj, "kdc", base.to_string, sub, context);

            /**
             * Frequency bias (reciprocal of droop) (Kf1).
             *
             * Typical Value = 20.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.kf1>([\s\S]*?)<\/cim:GovSteamFV4.kf1>/g, obj, "kf1", base.to_string, sub, context);

            /**
             * Frequency control (reciprocal of droop) (Kf3).
             *
             * Typical Value = 20.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.kf3>([\s\S]*?)<\/cim:GovSteamFV4.kf3>/g, obj, "kf3", base.to_string, sub, context);

            /**
             * Fraction  of total turbine output generated by HP part (Khp).
             *
             * Typical Value = 0.35.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.khp>([\s\S]*?)<\/cim:GovSteamFV4.khp>/g, obj, "khp", base.to_string, sub, context);

            /**
             * Integral gain of pressure regulator (Kic).
             *
             * Typical Value = 0.0033.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.kic>([\s\S]*?)<\/cim:GovSteamFV4.kic>/g, obj, "kic", base.to_string, sub, context);

            /**
             * Integral gain of pressure feedback regulator (Kip).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.kip>([\s\S]*?)<\/cim:GovSteamFV4.kip>/g, obj, "kip", base.to_string, sub, context);

            /**
             * Integral gain of electro-hydraulic regulator (Kit).
             *
             * Typical Value = 0.04.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.kit>([\s\S]*?)<\/cim:GovSteamFV4.kit>/g, obj, "kit", base.to_string, sub, context);

            /**
             * First gain coefficient of  intercept valves characteristic (Kmp1).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.kmp1>([\s\S]*?)<\/cim:GovSteamFV4.kmp1>/g, obj, "kmp1", base.to_string, sub, context);

            /**
             * Second gain coefficient of intercept valves characteristic (Kmp2).
             *
             * Typical Value = 3.5.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.kmp2>([\s\S]*?)<\/cim:GovSteamFV4.kmp2>/g, obj, "kmp2", base.to_string, sub, context);

            /**
             * Proportional gain of pressure regulator (Kpc).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.kpc>([\s\S]*?)<\/cim:GovSteamFV4.kpc>/g, obj, "kpc", base.to_string, sub, context);

            /**
             * Proportional gain of pressure feedback regulator (Kpp).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.kpp>([\s\S]*?)<\/cim:GovSteamFV4.kpp>/g, obj, "kpp", base.to_string, sub, context);

            /**
             * Proportional gain of electro-hydraulic regulator (Kpt).
             *
             * Typical Value = 0.3.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.kpt>([\s\S]*?)<\/cim:GovSteamFV4.kpt>/g, obj, "kpt", base.to_string, sub, context);

            /**
             * Maximum variation of fuel flow (Krc).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.krc>([\s\S]*?)<\/cim:GovSteamFV4.krc>/g, obj, "krc", base.to_string, sub, context);

            /**
             * Pressure loss due to flow friction in the boiler tubes (Ksh).
             *
             * Typical Value = 0.08.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.ksh>([\s\S]*?)<\/cim:GovSteamFV4.ksh>/g, obj, "ksh", base.to_string, sub, context);

            /**
             * Maximum negative power error (Lpi).
             *
             * Typical Value = -0.15.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.lpi>([\s\S]*?)<\/cim:GovSteamFV4.lpi>/g, obj, "lpi", base.to_string, sub, context);

            /**
             * Maximum positive power error (Lps).
             *
             * Typical Value = 0.03.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.lps>([\s\S]*?)<\/cim:GovSteamFV4.lps>/g, obj, "lps", base.to_string, sub, context);

            /**
             * Lower limit for frequency correction (MN<sub>EF</sub>).
             *
             * Typical Value = -0.05.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.mnef>([\s\S]*?)<\/cim:GovSteamFV4.mnef>/g, obj, "mnef", base.to_string, sub, context);

            /**
             * Upper limit for frequency correction (MX<sub>EF</sub>).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.mxef>([\s\S]*?)<\/cim:GovSteamFV4.mxef>/g, obj, "mxef", base.to_string, sub, context);

            /**
             * First value of pressure set point static characteristic (Pr1).
             *
             * Typical Value = 0.2.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.pr1>([\s\S]*?)<\/cim:GovSteamFV4.pr1>/g, obj, "pr1", base.to_string, sub, context);

            /**
             * Second value of pressure set point static characteristic, corresponding to Ps0 = 1.0 PU (Pr2).
             *
             * Typical Value = 0.75.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.pr2>([\s\S]*?)<\/cim:GovSteamFV4.pr2>/g, obj, "pr2", base.to_string, sub, context);

            /**
             * Minimum value of pressure set point static characteristic (Psmn).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.psmn>([\s\S]*?)<\/cim:GovSteamFV4.psmn>/g, obj, "psmn", base.to_string, sub, context);

            /**
             * Minimum value of integral regulator (Rsmimn).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.rsmimn>([\s\S]*?)<\/cim:GovSteamFV4.rsmimn>/g, obj, "rsmimn", base.to_string, sub, context);

            /**
             * Maximum value of integral regulator (Rsmimx).
             *
             * Typical Value = 1.1.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.rsmimx>([\s\S]*?)<\/cim:GovSteamFV4.rsmimx>/g, obj, "rsmimx", base.to_string, sub, context);

            /**
             * Minimum value of integral regulator (Rvgmn).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.rvgmn>([\s\S]*?)<\/cim:GovSteamFV4.rvgmn>/g, obj, "rvgmn", base.to_string, sub, context);

            /**
             * Maximum value of integral regulator (Rvgmx).
             *
             * Typical Value = 1.2.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.rvgmx>([\s\S]*?)<\/cim:GovSteamFV4.rvgmx>/g, obj, "rvgmx", base.to_string, sub, context);

            /**
             * Minimum valve opening (Srmn).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.srmn>([\s\S]*?)<\/cim:GovSteamFV4.srmn>/g, obj, "srmn", base.to_string, sub, context);

            /**
             * Maximum valve opening (Srmx).
             *
             * Typical Value = 1.1.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.srmx>([\s\S]*?)<\/cim:GovSteamFV4.srmx>/g, obj, "srmx", base.to_string, sub, context);

            /**
             * Intercept valves characteristic discontinuity point (Srsmp).
             *
             * Typical Value = 0.43.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.srsmp>([\s\S]*?)<\/cim:GovSteamFV4.srsmp>/g, obj, "srsmp", base.to_string, sub, context);

            /**
             * Maximum regulator gate closing velocity (Svmn).
             *
             * Typical Value = -0.0333.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.svmn>([\s\S]*?)<\/cim:GovSteamFV4.svmn>/g, obj, "svmn", base.to_float, sub, context);

            /**
             * Maximum regulator gate opening velocity (Svmx).
             *
             * Typical Value = 0.0333.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.svmx>([\s\S]*?)<\/cim:GovSteamFV4.svmx>/g, obj, "svmx", base.to_float, sub, context);

            /**
             * Control valves rate opening time (Ta).
             *
             * Typical Value = 0.8.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.ta>([\s\S]*?)<\/cim:GovSteamFV4.ta>/g, obj, "ta", base.to_string, sub, context);

            /**
             * Intercept valves rate opening time (Tam).
             *
             * Typical Value = 0.8.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.tam>([\s\S]*?)<\/cim:GovSteamFV4.tam>/g, obj, "tam", base.to_string, sub, context);

            /**
             * Control valves rate closing time (Tc).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.tc>([\s\S]*?)<\/cim:GovSteamFV4.tc>/g, obj, "tc", base.to_string, sub, context);

            /**
             * Intercept valves rate closing time (Tcm).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.tcm>([\s\S]*?)<\/cim:GovSteamFV4.tcm>/g, obj, "tcm", base.to_string, sub, context);

            /**
             * Derivative time constant of pressure regulator (Tdc).
             *
             * Typical Value = 90.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.tdc>([\s\S]*?)<\/cim:GovSteamFV4.tdc>/g, obj, "tdc", base.to_string, sub, context);

            /**
             * Time constant of fuel regulation (Tf1).
             *
             * Typical Value = 10.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.tf1>([\s\S]*?)<\/cim:GovSteamFV4.tf1>/g, obj, "tf1", base.to_string, sub, context);

            /**
             * Time constant of steam chest (Tf2).
             *
             * Typical Value = 10.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.tf2>([\s\S]*?)<\/cim:GovSteamFV4.tf2>/g, obj, "tf2", base.to_string, sub, context);

            /**
             * High pressure (HP) time constant of the turbine (Thp).
             *
             * Typical Value = 0.15.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.thp>([\s\S]*?)<\/cim:GovSteamFV4.thp>/g, obj, "thp", base.to_string, sub, context);

            /**
             * Low pressure (LP) time constant of the turbine (Tmp).
             *
             * Typical Value = 0.4.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.tmp>([\s\S]*?)<\/cim:GovSteamFV4.tmp>/g, obj, "tmp", base.to_string, sub, context);

            /**
             * Reheater  time constant of the turbine (Trh).
             *
             * Typical Value = 10.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.trh>([\s\S]*?)<\/cim:GovSteamFV4.trh>/g, obj, "trh", base.to_string, sub, context);

            /**
             * Boiler time constant (Tv).
             *
             * Typical Value = 60.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.tv>([\s\S]*?)<\/cim:GovSteamFV4.tv>/g, obj, "tv", base.to_string, sub, context);

            /**
             * Control valves servo time constant (Ty).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.ty>([\s\S]*?)<\/cim:GovSteamFV4.ty>/g, obj, "ty", base.to_string, sub, context);

            /**
             * Coefficient of linearized equations of turbine (Stodola formulation) (Y).
             *
             * Typical Value = 0.13.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.y>([\s\S]*?)<\/cim:GovSteamFV4.y>/g, obj, "y", base.to_string, sub, context);

            /**
             * Minimum control valve position (Yhpmn).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.yhpmn>([\s\S]*?)<\/cim:GovSteamFV4.yhpmn>/g, obj, "yhpmn", base.to_string, sub, context);

            /**
             * Maximum control valve position (Yhpmx).
             *
             * Typical Value = 1.1.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.yhpmx>([\s\S]*?)<\/cim:GovSteamFV4.yhpmx>/g, obj, "yhpmx", base.to_string, sub, context);

            /**
             * Minimum intercept valve position (Ympmn).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.ympmn>([\s\S]*?)<\/cim:GovSteamFV4.ympmn>/g, obj, "ympmn", base.to_string, sub, context);

            /**
             * Maximum intercept valve position (Ympmx).
             *
             * Typical Value = 1.1.
             *
             */
            base.parse_element (/<cim:GovSteamFV4.ympmx>([\s\S]*?)<\/cim:GovSteamFV4.ympmx>/g, obj, "ympmx", base.to_string, sub, context);

            bucket = context.parsed.GovSteamFV4;
            if (null == bucket)
                context.parsed.GovSteamFV4 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Hydro turbine and governor.
         *
         * Represents plants with straight forward penstock configurations and "three term" electro-hydraulic governors (i.e. Woodard electronic).
         *
         */
        function parse_GovHydroPID2 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovHydroPID2";
            /**
             * Factor multiplying Tw (Atw).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID2.atw>([\s\S]*?)<\/cim:GovHydroPID2.atw>/g, obj, "atw", base.to_string, sub, context);

            /**
             * Turbine damping factor (D).
             *
             * Unit = delta P / delta speed.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID2.d>([\s\S]*?)<\/cim:GovHydroPID2.d>/g, obj, "d", base.to_string, sub, context);

            /**
             * Feedback signal type flag (Flag).
             * true = use gate position feedback signal
             *
             * false = use Pe.
             *
             */
            base.parse_element (/<cim:GovHydroPID2.feedbackSignal>([\s\S]*?)<\/cim:GovHydroPID2.feedbackSignal>/g, obj, "feedbackSignal", base.to_boolean, sub, context);

            /**
             * Gate opening at speed no load (G0).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID2.g0>([\s\S]*?)<\/cim:GovHydroPID2.g0>/g, obj, "g0", base.to_string, sub, context);

            /**
             * Intermediate gate opening (G1).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID2.g1>([\s\S]*?)<\/cim:GovHydroPID2.g1>/g, obj, "g1", base.to_string, sub, context);

            /**
             * Intermediate gate opening (G2).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID2.g2>([\s\S]*?)<\/cim:GovHydroPID2.g2>/g, obj, "g2", base.to_string, sub, context);

            /**
             * Maximum gate opening (Gmax).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID2.gmax>([\s\S]*?)<\/cim:GovHydroPID2.gmax>/g, obj, "gmax", base.to_string, sub, context);

            /**
             * Minimum gate opening (Gmin).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID2.gmin>([\s\S]*?)<\/cim:GovHydroPID2.gmin>/g, obj, "gmin", base.to_string, sub, context);

            /**
             * Derivative gain (Kd).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID2.kd>([\s\S]*?)<\/cim:GovHydroPID2.kd>/g, obj, "kd", base.to_string, sub, context);

            /**
             * Reset gain (Ki).
             *
             * Unit = PU/ sec.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID2.ki>([\s\S]*?)<\/cim:GovHydroPID2.ki>/g, obj, "ki", base.to_float, sub, context);

            /**
             * Proportional gain (Kp).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID2.kp>([\s\S]*?)<\/cim:GovHydroPID2.kp>/g, obj, "kp", base.to_string, sub, context);

            /**
             * Base for power values (MWbase) (&gt;0).
             *
             * Unit = MW.
             *
             */
            base.parse_element (/<cim:GovHydroPID2.mwbase>([\s\S]*?)<\/cim:GovHydroPID2.mwbase>/g, obj, "mwbase", base.to_string, sub, context);

            /**
             * Power at gate opening G1 (P1).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID2.p1>([\s\S]*?)<\/cim:GovHydroPID2.p1>/g, obj, "p1", base.to_string, sub, context);

            /**
             * Power at gate opening G2 (P2).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID2.p2>([\s\S]*?)<\/cim:GovHydroPID2.p2>/g, obj, "p2", base.to_string, sub, context);

            /**
             * Power at full opened gate (P3).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID2.p3>([\s\S]*?)<\/cim:GovHydroPID2.p3>/g, obj, "p3", base.to_string, sub, context);

            /**
             * Permanent drop (Rperm).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID2.rperm>([\s\S]*?)<\/cim:GovHydroPID2.rperm>/g, obj, "rperm", base.to_string, sub, context);

            /**
             * Controller time constant (Ta) (&gt;0).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID2.ta>([\s\S]*?)<\/cim:GovHydroPID2.ta>/g, obj, "ta", base.to_string, sub, context);

            /**
             * Gate servo time constant (Tb) (&gt;0).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID2.tb>([\s\S]*?)<\/cim:GovHydroPID2.tb>/g, obj, "tb", base.to_string, sub, context);

            /**
             * Speed detector time constant (Treg).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID2.treg>([\s\S]*?)<\/cim:GovHydroPID2.treg>/g, obj, "treg", base.to_string, sub, context);

            /**
             * Water inertia time constant (Tw) (&gt;0).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID2.tw>([\s\S]*?)<\/cim:GovHydroPID2.tw>/g, obj, "tw", base.to_string, sub, context);

            /**
             * Maximum gate opening velocity (Velmax).
             *
             * Unit = PU/sec.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID2.velmax>([\s\S]*?)<\/cim:GovHydroPID2.velmax>/g, obj, "velmax", base.to_float, sub, context);

            /**
             * Maximum gate closing velocity (Velmin).
             *
             * Unit = PU/sec.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydroPID2.velmin>([\s\S]*?)<\/cim:GovHydroPID2.velmin>/g, obj, "velmin", base.to_float, sub, context);

            bucket = context.parsed.GovHydroPID2;
            if (null == bucket)
                context.parsed.GovHydroPID2 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Single shaft gas turbine.
         *
         */
        function parse_GovGAST (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovGAST";
            /**
             * Ambient temperature load limit (Load Limit).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovGAST.at>([\s\S]*?)<\/cim:GovGAST.at>/g, obj, "at", base.to_string, sub, context);

            /**
             * Turbine damping factor (Dturb).
             *
             * Typical Value = 0.18.
             *
             */
            base.parse_element (/<cim:GovGAST.dturb>([\s\S]*?)<\/cim:GovGAST.dturb>/g, obj, "dturb", base.to_string, sub, context);

            /**
             * Temperature limiter gain (Kt).
             *
             * Typical Value = 3.
             *
             */
            base.parse_element (/<cim:GovGAST.kt>([\s\S]*?)<\/cim:GovGAST.kt>/g, obj, "kt", base.to_string, sub, context);

            /**
             * Base for power values (MWbase) (&gt; 0).
             *
             */
            base.parse_element (/<cim:GovGAST.mwbase>([\s\S]*?)<\/cim:GovGAST.mwbase>/g, obj, "mwbase", base.to_string, sub, context);

            /**
             * Permanent droop (R).
             *
             * Typical Value = 0.04.
             *
             */
            base.parse_element (/<cim:GovGAST.r>([\s\S]*?)<\/cim:GovGAST.r>/g, obj, "r", base.to_string, sub, context);

            /**
             * Governor mechanism time constant (T1).
             *
             * T1 represents the natural valve positioning time constant of the governor for small disturbances, as seen when rate limiting is not in effect.  Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovGAST.t1>([\s\S]*?)<\/cim:GovGAST.t1>/g, obj, "t1", base.to_string, sub, context);

            /**
             * Turbine power time constant (T2).
             *
             * T2 represents delay due to internal energy storage of the gas turbine engine. T2 can be used to give a rough approximation to the delay associated with acceleration of the compressor spool of a multi-shaft engine, or with the compressibility of gas in the plenum of a the free power turbine of an aero-derivative unit, for example.  Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovGAST.t2>([\s\S]*?)<\/cim:GovGAST.t2>/g, obj, "t2", base.to_string, sub, context);

            /**
             * Turbine exhaust temperature time constant (T3).
             *
             * Typical Value = 3.
             *
             */
            base.parse_element (/<cim:GovGAST.t3>([\s\S]*?)<\/cim:GovGAST.t3>/g, obj, "t3", base.to_string, sub, context);

            /**
             * Maximum turbine power, PU of MWbase (Vmax).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovGAST.vmax>([\s\S]*?)<\/cim:GovGAST.vmax>/g, obj, "vmax", base.to_string, sub, context);

            /**
             * Minimum turbine power, PU of MWbase (Vmin).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovGAST.vmin>([\s\S]*?)<\/cim:GovGAST.vmin>/g, obj, "vmin", base.to_string, sub, context);

            bucket = context.parsed.GovGAST;
            if (null == bucket)
                context.parsed.GovGAST = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Simplified model  of boiler and steam turbine with PID governor.
         *
         */
        function parse_GovSteamEU (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovSteamEU";
            /**
             * Control valves rate closing limit (Chc).
             *
             * Unit = PU/sec.  Typical Value = -3.3.
             *
             */
            base.parse_element (/<cim:GovSteamEU.chc>([\s\S]*?)<\/cim:GovSteamEU.chc>/g, obj, "chc", base.to_float, sub, context);

            /**
             * Control valves rate opening limit (Cho).
             *
             * Unit = PU/sec.  Typical Value = 0.17.
             *
             */
            base.parse_element (/<cim:GovSteamEU.cho>([\s\S]*?)<\/cim:GovSteamEU.cho>/g, obj, "cho", base.to_float, sub, context);

            /**
             * Intercept valves rate closing limit (Cic).
             *
             * Typical Value = -2.2.
             *
             */
            base.parse_element (/<cim:GovSteamEU.cic>([\s\S]*?)<\/cim:GovSteamEU.cic>/g, obj, "cic", base.to_string, sub, context);

            /**
             * Intercept valves rate opening limit (Cio).
             *
             * Typical Value = 0.123.
             *
             */
            base.parse_element (/<cim:GovSteamEU.cio>([\s\S]*?)<\/cim:GovSteamEU.cio>/g, obj, "cio", base.to_string, sub, context);

            /**
             * Dead band of the frequency corrector (db1).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteamEU.db1>([\s\S]*?)<\/cim:GovSteamEU.db1>/g, obj, "db1", base.to_string, sub, context);

            /**
             * Dead band of the speed governor (db2).
             *
             * Typical Value = 0.0004.
             *
             */
            base.parse_element (/<cim:GovSteamEU.db2>([\s\S]*?)<\/cim:GovSteamEU.db2>/g, obj, "db2", base.to_string, sub, context);

            /**
             * Maximum control valve position (Hhpmax).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovSteamEU.hhpmax>([\s\S]*?)<\/cim:GovSteamEU.hhpmax>/g, obj, "hhpmax", base.to_string, sub, context);

            /**
             * Gain of the power controller (Ke).
             *
             * Typical Value = 0.65.
             *
             */
            base.parse_element (/<cim:GovSteamEU.ke>([\s\S]*?)<\/cim:GovSteamEU.ke>/g, obj, "ke", base.to_string, sub, context);

            /**
             * Gain of the frequency corrector (Kfcor).
             *
             * Typical Value = 20.
             *
             */
            base.parse_element (/<cim:GovSteamEU.kfcor>([\s\S]*?)<\/cim:GovSteamEU.kfcor>/g, obj, "kfcor", base.to_string, sub, context);

            /**
             * Fraction of total turbine output generated by HP part (Khp).
             *
             * Typical Value = 0.277.
             *
             */
            base.parse_element (/<cim:GovSteamEU.khp>([\s\S]*?)<\/cim:GovSteamEU.khp>/g, obj, "khp", base.to_string, sub, context);

            /**
             * Fraction of total turbine output generated by HP part (Klp).
             *
             * Typical Value = 0.723.
             *
             */
            base.parse_element (/<cim:GovSteamEU.klp>([\s\S]*?)<\/cim:GovSteamEU.klp>/g, obj, "klp", base.to_string, sub, context);

            /**
             * Gain of the speed governor (Kwcor).
             *
             * Typical Value = 20.
             *
             */
            base.parse_element (/<cim:GovSteamEU.kwcor>([\s\S]*?)<\/cim:GovSteamEU.kwcor>/g, obj, "kwcor", base.to_string, sub, context);

            /**
             * Base for power values (MWbase) (&gt;0).
             *
             * Unit = MW.
             *
             */
            base.parse_element (/<cim:GovSteamEU.mwbase>([\s\S]*?)<\/cim:GovSteamEU.mwbase>/g, obj, "mwbase", base.to_string, sub, context);

            /**
             * Maximal active power of the turbine (Pmax).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovSteamEU.pmax>([\s\S]*?)<\/cim:GovSteamEU.pmax>/g, obj, "pmax", base.to_string, sub, context);

            /**
             * Maximum low pressure limit (Prhmax).
             *
             * Typical Value = 1.4.
             *
             */
            base.parse_element (/<cim:GovSteamEU.prhmax>([\s\S]*?)<\/cim:GovSteamEU.prhmax>/g, obj, "prhmax", base.to_string, sub, context);

            /**
             * Intercept valves transfer limit (Simx).
             *
             * Typical Value = 0.425.
             *
             */
            base.parse_element (/<cim:GovSteamEU.simx>([\s\S]*?)<\/cim:GovSteamEU.simx>/g, obj, "simx", base.to_string, sub, context);

            /**
             * Boiler time constant (Tb).
             *
             * Typical Value = 100.
             *
             */
            base.parse_element (/<cim:GovSteamEU.tb>([\s\S]*?)<\/cim:GovSteamEU.tb>/g, obj, "tb", base.to_string, sub, context);

            /**
             * Derivative time constant of the power controller (Tdp).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteamEU.tdp>([\s\S]*?)<\/cim:GovSteamEU.tdp>/g, obj, "tdp", base.to_string, sub, context);

            /**
             * Electro hydraulic transducer (Ten).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:GovSteamEU.ten>([\s\S]*?)<\/cim:GovSteamEU.ten>/g, obj, "ten", base.to_string, sub, context);

            /**
             * Frequency transducer time constant (Tf).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteamEU.tf>([\s\S]*?)<\/cim:GovSteamEU.tf>/g, obj, "tf", base.to_string, sub, context);

            /**
             * Time constant of the power controller (Tfp).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteamEU.tfp>([\s\S]*?)<\/cim:GovSteamEU.tfp>/g, obj, "tfp", base.to_string, sub, context);

            /**
             * High pressure (HP) time constant of the turbine (Thp).
             *
             * Typical Value = 0.31.
             *
             */
            base.parse_element (/<cim:GovSteamEU.thp>([\s\S]*?)<\/cim:GovSteamEU.thp>/g, obj, "thp", base.to_string, sub, context);

            /**
             * Integral time constant of the power controller (Tip).
             *
             * Typical Value = 2.
             *
             */
            base.parse_element (/<cim:GovSteamEU.tip>([\s\S]*?)<\/cim:GovSteamEU.tip>/g, obj, "tip", base.to_string, sub, context);

            /**
             * Low pressure(LP) time constant of the turbine (Tlp).
             *
             * Typical Value = 0.45.
             *
             */
            base.parse_element (/<cim:GovSteamEU.tlp>([\s\S]*?)<\/cim:GovSteamEU.tlp>/g, obj, "tlp", base.to_string, sub, context);

            /**
             * Power transducer time constant (Tp).
             *
             * Typical Value = 0.07.
             *
             */
            base.parse_element (/<cim:GovSteamEU.tp>([\s\S]*?)<\/cim:GovSteamEU.tp>/g, obj, "tp", base.to_string, sub, context);

            /**
             * Reheater  time constant of the turbine (Trh).
             *
             * Typical Value = 8.
             *
             */
            base.parse_element (/<cim:GovSteamEU.trh>([\s\S]*?)<\/cim:GovSteamEU.trh>/g, obj, "trh", base.to_string, sub, context);

            /**
             * Control valves servo time constant (Tvhp).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:GovSteamEU.tvhp>([\s\S]*?)<\/cim:GovSteamEU.tvhp>/g, obj, "tvhp", base.to_string, sub, context);

            /**
             * Intercept valves servo time constant (Tvip).
             *
             * Typical Value = 0.15.
             *
             */
            base.parse_element (/<cim:GovSteamEU.tvip>([\s\S]*?)<\/cim:GovSteamEU.tvip>/g, obj, "tvip", base.to_string, sub, context);

            /**
             * Speed transducer time constant (Tw).
             *
             * Typical Value = 0.02.
             *
             */
            base.parse_element (/<cim:GovSteamEU.tw>([\s\S]*?)<\/cim:GovSteamEU.tw>/g, obj, "tw", base.to_string, sub, context);

            /**
             * Upper limit for frequency correction (Wfmax).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:GovSteamEU.wfmax>([\s\S]*?)<\/cim:GovSteamEU.wfmax>/g, obj, "wfmax", base.to_string, sub, context);

            /**
             * Lower limit for frequency correction (Wfmin).
             *
             * Typical Value = -0.05.
             *
             */
            base.parse_element (/<cim:GovSteamEU.wfmin>([\s\S]*?)<\/cim:GovSteamEU.wfmin>/g, obj, "wfmin", base.to_string, sub, context);

            /**
             * Emergency speed control lower limit (wmax1).
             *
             * Typical Value = 1.025.
             *
             */
            base.parse_element (/<cim:GovSteamEU.wmax1>([\s\S]*?)<\/cim:GovSteamEU.wmax1>/g, obj, "wmax1", base.to_string, sub, context);

            /**
             * Emergency speed control upper limit (wmax2).
             *
             * Typical Value = 1.05.
             *
             */
            base.parse_element (/<cim:GovSteamEU.wmax2>([\s\S]*?)<\/cim:GovSteamEU.wmax2>/g, obj, "wmax2", base.to_string, sub, context);

            /**
             * Upper limit for the speed governor (Wwmax).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:GovSteamEU.wwmax>([\s\S]*?)<\/cim:GovSteamEU.wwmax>/g, obj, "wwmax", base.to_string, sub, context);

            /**
             * Lower limit for the speed governor frequency correction (Wwmin).
             *
             * Typical Value = -1.
             *
             */
            base.parse_element (/<cim:GovSteamEU.wwmin>([\s\S]*?)<\/cim:GovSteamEU.wwmin>/g, obj, "wwmin", base.to_string, sub, context);

            bucket = context.parsed.GovSteamEU;
            if (null == bucket)
                context.parsed.GovSteamEU = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Modified IEEE Hydro Governor-Turbine Model.
         *
         * This model differs from that defined in the IEEE modeling guideline paper in that the limits on gate position and velocity do not permit "wind up" of the upstream signals.
         *
         */
        function parse_GovHydro3 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovHydro3";
            /**
             * Turbine gain (At).
             *
             * Typical Value = 1.2.
             *
             */
            base.parse_element (/<cim:GovHydro3.at>([\s\S]*?)<\/cim:GovHydro3.at>/g, obj, "at", base.to_string, sub, context);

            /**
             * Intentional dead-band width (db1).
             *
             * Unit = Hz.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro3.db1>([\s\S]*?)<\/cim:GovHydro3.db1>/g, obj, "db1", base.to_string, sub, context);

            /**
             * Unintentional dead-band (db2).
             *
             * Unit = MW.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro3.db2>([\s\S]*?)<\/cim:GovHydro3.db2>/g, obj, "db2", base.to_string, sub, context);

            /**
             * Turbine damping factor (Dturb).
             *
             * Typical Value = 0.2.
             *
             */
            base.parse_element (/<cim:GovHydro3.dturb>([\s\S]*?)<\/cim:GovHydro3.dturb>/g, obj, "dturb", base.to_string, sub, context);

            /**
             * Intentional db hysteresis (eps).
             *
             * Unit = Hz.  Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro3.eps>([\s\S]*?)<\/cim:GovHydro3.eps>/g, obj, "eps", base.to_string, sub, context);

            /**
             * Governor control flag (Cflag).
             * true = PID control is active
             * false = double derivative control is active.
             *
             * Typical Value = true.
             *
             */
            base.parse_element (/<cim:GovHydro3.governorControl>([\s\S]*?)<\/cim:GovHydro3.governorControl>/g, obj, "governorControl", base.to_boolean, sub, context);

            /**
             * Nonlinear gain point 1, PU gv (Gv1).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro3.gv1>([\s\S]*?)<\/cim:GovHydro3.gv1>/g, obj, "gv1", base.to_string, sub, context);

            /**
             * Nonlinear gain point 2, PU gv (Gv2).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro3.gv2>([\s\S]*?)<\/cim:GovHydro3.gv2>/g, obj, "gv2", base.to_string, sub, context);

            /**
             * Nonlinear gain point 3, PU gv (Gv3).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro3.gv3>([\s\S]*?)<\/cim:GovHydro3.gv3>/g, obj, "gv3", base.to_string, sub, context);

            /**
             * Nonlinear gain point 4, PU gv (Gv4).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro3.gv4>([\s\S]*?)<\/cim:GovHydro3.gv4>/g, obj, "gv4", base.to_string, sub, context);

            /**
             * Nonlinear gain point 5, PU gv (Gv5).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro3.gv5>([\s\S]*?)<\/cim:GovHydro3.gv5>/g, obj, "gv5", base.to_string, sub, context);

            /**
             * Nonlinear gain point 6, PU gv (Gv6).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro3.gv6>([\s\S]*?)<\/cim:GovHydro3.gv6>/g, obj, "gv6", base.to_string, sub, context);

            /**
             * Turbine nominal head (H0).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovHydro3.h0>([\s\S]*?)<\/cim:GovHydro3.h0>/g, obj, "h0", base.to_string, sub, context);

            /**
             * Derivative gain (K1).
             *
             * Typical Value = 0.01.
             *
             */
            base.parse_element (/<cim:GovHydro3.k1>([\s\S]*?)<\/cim:GovHydro3.k1>/g, obj, "k1", base.to_string, sub, context);

            /**
             * Double derivative gain, if Cflag = -1 (K2).
             *
             * Typical Value = 2.5.
             *
             */
            base.parse_element (/<cim:GovHydro3.k2>([\s\S]*?)<\/cim:GovHydro3.k2>/g, obj, "k2", base.to_string, sub, context);

            /**
             * Gate servo gain (Kg).
             *
             * Typical Value = 2.
             *
             */
            base.parse_element (/<cim:GovHydro3.kg>([\s\S]*?)<\/cim:GovHydro3.kg>/g, obj, "kg", base.to_string, sub, context);

            /**
             * Integral gain (Ki).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovHydro3.ki>([\s\S]*?)<\/cim:GovHydro3.ki>/g, obj, "ki", base.to_string, sub, context);

            /**
             * Base for power values (MWbase) (&gt; 0).
             *
             * Unit = MW.
             *
             */
            base.parse_element (/<cim:GovHydro3.mwbase>([\s\S]*?)<\/cim:GovHydro3.mwbase>/g, obj, "mwbase", base.to_string, sub, context);

            /**
             * Nonlinear gain point 1, PU power (Pgv1).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro3.pgv1>([\s\S]*?)<\/cim:GovHydro3.pgv1>/g, obj, "pgv1", base.to_string, sub, context);

            /**
             * Nonlinear gain point 2, PU power (Pgv2).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro3.pgv2>([\s\S]*?)<\/cim:GovHydro3.pgv2>/g, obj, "pgv2", base.to_string, sub, context);

            /**
             * Nonlinear gain point 3, PU power (Pgv3).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro3.pgv3>([\s\S]*?)<\/cim:GovHydro3.pgv3>/g, obj, "pgv3", base.to_string, sub, context);

            /**
             * Nonlinear gain point 4, PU power (Pgv4).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro3.pgv4>([\s\S]*?)<\/cim:GovHydro3.pgv4>/g, obj, "pgv4", base.to_string, sub, context);

            /**
             * Nonlinear gain point 5, PU power (Pgv5).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro3.pgv5>([\s\S]*?)<\/cim:GovHydro3.pgv5>/g, obj, "pgv5", base.to_string, sub, context);

            /**
             * Nonlinear gain point 6, PU power (Pgv6).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro3.pgv6>([\s\S]*?)<\/cim:GovHydro3.pgv6>/g, obj, "pgv6", base.to_string, sub, context);

            /**
             * Maximum gate opening, PU of MWbase (Pmax).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovHydro3.pmax>([\s\S]*?)<\/cim:GovHydro3.pmax>/g, obj, "pmax", base.to_string, sub, context);

            /**
             * Minimum gate opening, PU of MWbase (Pmin).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro3.pmin>([\s\S]*?)<\/cim:GovHydro3.pmin>/g, obj, "pmin", base.to_string, sub, context);

            /**
             * No-load turbine flow at nominal head (Qnl).
             *
             * Typical Value = 0.08.
             *
             */
            base.parse_element (/<cim:GovHydro3.qnl>([\s\S]*?)<\/cim:GovHydro3.qnl>/g, obj, "qnl", base.to_string, sub, context);

            /**
             * Steady-state droop, PU, for electrical power feedback (Relec).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:GovHydro3.relec>([\s\S]*?)<\/cim:GovHydro3.relec>/g, obj, "relec", base.to_string, sub, context);

            /**
             * Steady-state droop, PU, for governor output feedback (Rgate).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovHydro3.rgate>([\s\S]*?)<\/cim:GovHydro3.rgate>/g, obj, "rgate", base.to_string, sub, context);

            /**
             * Input filter time constant (Td).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:GovHydro3.td>([\s\S]*?)<\/cim:GovHydro3.td>/g, obj, "td", base.to_string, sub, context);

            /**
             * Washout time constant (Tf).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:GovHydro3.tf>([\s\S]*?)<\/cim:GovHydro3.tf>/g, obj, "tf", base.to_string, sub, context);

            /**
             * Gate servo time constant (Tp).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:GovHydro3.tp>([\s\S]*?)<\/cim:GovHydro3.tp>/g, obj, "tp", base.to_string, sub, context);

            /**
             * Power feedback time constant (Tt).
             *
             * Typical Value = 0.2.
             *
             */
            base.parse_element (/<cim:GovHydro3.tt>([\s\S]*?)<\/cim:GovHydro3.tt>/g, obj, "tt", base.to_string, sub, context);

            /**
             * Water inertia time constant (Tw).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovHydro3.tw>([\s\S]*?)<\/cim:GovHydro3.tw>/g, obj, "tw", base.to_string, sub, context);

            /**
             * Maximum gate closing velocity (Velcl).
             *
             * Unit = PU/sec.  Typical Value = -0.2.
             *
             */
            base.parse_element (/<cim:GovHydro3.velcl>([\s\S]*?)<\/cim:GovHydro3.velcl>/g, obj, "velcl", base.to_float, sub, context);

            /**
             * Maximum gate opening velocity (Velop).
             *
             * Unit = PU/sec. Typical Value = 0.2.
             *
             */
            base.parse_element (/<cim:GovHydro3.velop>([\s\S]*?)<\/cim:GovHydro3.velop>/g, obj, "velop", base.to_float, sub, context);

            bucket = context.parsed.GovHydro3;
            if (null == bucket)
                context.parsed.GovHydro3 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * IEEE steam turbine governor model.
         *
         * Ref<font color="#0f0f0f">erence: IEEE Transactions on Power Apparatus and Systems</font>
         *
         */
        function parse_GovSteamIEEE1 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovSteamIEEE1";
            /**
             * Governor gain (reciprocal of droop) (K) (&gt; 0).
             *
             * Typical Value = 25.
             *
             */
            base.parse_element (/<cim:GovSteamIEEE1.k>([\s\S]*?)<\/cim:GovSteamIEEE1.k>/g, obj, "k", base.to_string, sub, context);

            /**
             * Fraction of HP shaft power after first boiler pass (K1).
             *
             * Typical Value = 0.2.
             *
             */
            base.parse_element (/<cim:GovSteamIEEE1.k1>([\s\S]*?)<\/cim:GovSteamIEEE1.k1>/g, obj, "k1", base.to_float, sub, context);

            /**
             * Fraction of LP shaft power after first boiler pass (K2).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteamIEEE1.k2>([\s\S]*?)<\/cim:GovSteamIEEE1.k2>/g, obj, "k2", base.to_float, sub, context);

            /**
             * Fraction of HP shaft power after second boiler pass (K3).
             *
             * Typical Value = 0.3.
             *
             */
            base.parse_element (/<cim:GovSteamIEEE1.k3>([\s\S]*?)<\/cim:GovSteamIEEE1.k3>/g, obj, "k3", base.to_float, sub, context);

            /**
             * Fraction of LP shaft power after second boiler pass (K4).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteamIEEE1.k4>([\s\S]*?)<\/cim:GovSteamIEEE1.k4>/g, obj, "k4", base.to_float, sub, context);

            /**
             * Fraction of HP shaft power after third boiler pass (K5).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovSteamIEEE1.k5>([\s\S]*?)<\/cim:GovSteamIEEE1.k5>/g, obj, "k5", base.to_float, sub, context);

            /**
             * Fraction of LP shaft power after third boiler pass (K6).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteamIEEE1.k6>([\s\S]*?)<\/cim:GovSteamIEEE1.k6>/g, obj, "k6", base.to_float, sub, context);

            /**
             * Fraction of HP shaft power after fourth boiler pass (K7).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteamIEEE1.k7>([\s\S]*?)<\/cim:GovSteamIEEE1.k7>/g, obj, "k7", base.to_float, sub, context);

            /**
             * Fraction of LP shaft power after fourth boiler pass (K8).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteamIEEE1.k8>([\s\S]*?)<\/cim:GovSteamIEEE1.k8>/g, obj, "k8", base.to_float, sub, context);

            /**
             * Base for power values (MWbase) (&gt; 0)<i>.</i>
             *
             */
            base.parse_element (/<cim:GovSteamIEEE1.mwbase>([\s\S]*?)<\/cim:GovSteamIEEE1.mwbase>/g, obj, "mwbase", base.to_string, sub, context);

            /**
             * Maximum valve opening (Pmax) (&gt; Pmin).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovSteamIEEE1.pmax>([\s\S]*?)<\/cim:GovSteamIEEE1.pmax>/g, obj, "pmax", base.to_string, sub, context);

            /**
             * Minimum valve opening (Pmin) (&gt;= 0).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteamIEEE1.pmin>([\s\S]*?)<\/cim:GovSteamIEEE1.pmin>/g, obj, "pmin", base.to_string, sub, context);

            /**
             * Governor lag time constant (T1).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteamIEEE1.t1>([\s\S]*?)<\/cim:GovSteamIEEE1.t1>/g, obj, "t1", base.to_string, sub, context);

            /**
             * Governor lead time constant (T2).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteamIEEE1.t2>([\s\S]*?)<\/cim:GovSteamIEEE1.t2>/g, obj, "t2", base.to_string, sub, context);

            /**
             * Valve positioner time constant (T3) (&gt; 0).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:GovSteamIEEE1.t3>([\s\S]*?)<\/cim:GovSteamIEEE1.t3>/g, obj, "t3", base.to_string, sub, context);

            /**
             * Inlet piping/steam bowl time constant (T4).
             *
             * Typical Value = 0.3.
             *
             */
            base.parse_element (/<cim:GovSteamIEEE1.t4>([\s\S]*?)<\/cim:GovSteamIEEE1.t4>/g, obj, "t4", base.to_string, sub, context);

            /**
             * Time constant of second boiler pass (T5).
             *
             * Typical Value = 5.
             *
             */
            base.parse_element (/<cim:GovSteamIEEE1.t5>([\s\S]*?)<\/cim:GovSteamIEEE1.t5>/g, obj, "t5", base.to_string, sub, context);

            /**
             * Time constant of third boiler pass (T6).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:GovSteamIEEE1.t6>([\s\S]*?)<\/cim:GovSteamIEEE1.t6>/g, obj, "t6", base.to_string, sub, context);

            /**
             * Time constant of fourth boiler pass (T7).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:GovSteamIEEE1.t7>([\s\S]*?)<\/cim:GovSteamIEEE1.t7>/g, obj, "t7", base.to_string, sub, context);

            /**
             * Maximum valve closing velocity (Uc) (&lt; 0).
             *
             * Unit = PU/sec.  Typical Value = -10.
             *
             */
            base.parse_element (/<cim:GovSteamIEEE1.uc>([\s\S]*?)<\/cim:GovSteamIEEE1.uc>/g, obj, "uc", base.to_float, sub, context);

            /**
             * Maximum valve opening velocity (Uo) (&gt; 0).
             *
             * Unit = PU/sec.  Typical Value = 1.
             *
             */
            base.parse_element (/<cim:GovSteamIEEE1.uo>([\s\S]*?)<\/cim:GovSteamIEEE1.uo>/g, obj, "uo", base.to_float, sub, context);

            bucket = context.parsed.GovSteamIEEE1;
            if (null == bucket)
                context.parsed.GovSteamIEEE1 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Woodward Gas turbine governor model.
         *
         */
        function parse_GovGASTWD (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TurbineGovernorDynamics (context, sub);
            obj.cls = "GovGASTWD";
            /**
             * Valve positioner (<i>A</i>).
             *
             */
            base.parse_element (/<cim:GovGASTWD.a>([\s\S]*?)<\/cim:GovGASTWD.a>/g, obj, "a", base.to_float, sub, context);

            /**
             * Exhaust temperature Parameter (Af1).
             *
             */
            base.parse_element (/<cim:GovGASTWD.af1>([\s\S]*?)<\/cim:GovGASTWD.af1>/g, obj, "af1", base.to_string, sub, context);

            /**
             * Coefficient equal to 0.5(1-speed) (Af2).
             *
             */
            base.parse_element (/<cim:GovGASTWD.af2>([\s\S]*?)<\/cim:GovGASTWD.af2>/g, obj, "af2", base.to_string, sub, context);

            /**
             * Valve positioner (<i>B</i>).
             *
             */
            base.parse_element (/<cim:GovGASTWD.b>([\s\S]*?)<\/cim:GovGASTWD.b>/g, obj, "b", base.to_float, sub, context);

            /**
             * (Bf1).
             *
             * Bf1 = E(1-w) where E (speed sensitivity coefficient) is 0.55 to 0.65 x Tr.
             *
             */
            base.parse_element (/<cim:GovGASTWD.bf1>([\s\S]*?)<\/cim:GovGASTWD.bf1>/g, obj, "bf1", base.to_string, sub, context);

            /**
             * Turbine Torque Coefficient K<sub>hhv</sub> (depends on heating value of fuel stream in combustion chamber) (Bf2).
             *
             */
            base.parse_element (/<cim:GovGASTWD.bf2>([\s\S]*?)<\/cim:GovGASTWD.bf2>/g, obj, "bf2", base.to_string, sub, context);

            /**
             * Valve positioner (<i>C</i>).
             *
             */
            base.parse_element (/<cim:GovGASTWD.c>([\s\S]*?)<\/cim:GovGASTWD.c>/g, obj, "c", base.to_float, sub, context);

            /**
             * Coefficient defining fuel flow where power output is 0% (Cf2).
             *
             * Synchronous but no output.  Typically 0.23 x K<sub>hhv </sub>(23% fuel flow).
             *
             */
            base.parse_element (/<cim:GovGASTWD.cf2>([\s\S]*?)<\/cim:GovGASTWD.cf2>/g, obj, "cf2", base.to_string, sub, context);

            /**
             * Combustion reaction time delay (Ecr).
             *
             */
            base.parse_element (/<cim:GovGASTWD.ecr>([\s\S]*?)<\/cim:GovGASTWD.ecr>/g, obj, "ecr", base.to_string, sub, context);

            /**
             * Turbine and exhaust delay (Etd).
             *
             */
            base.parse_element (/<cim:GovGASTWD.etd>([\s\S]*?)<\/cim:GovGASTWD.etd>/g, obj, "etd", base.to_string, sub, context);

            /**
             * Ratio of Fuel Adjustment (K3).
             *
             */
            base.parse_element (/<cim:GovGASTWD.k3>([\s\S]*?)<\/cim:GovGASTWD.k3>/g, obj, "k3", base.to_string, sub, context);

            /**
             * Gain of radiation shield (K4).
             *
             */
            base.parse_element (/<cim:GovGASTWD.k4>([\s\S]*?)<\/cim:GovGASTWD.k4>/g, obj, "k4", base.to_string, sub, context);

            /**
             * Gain of radiation shield (K5).
             *
             */
            base.parse_element (/<cim:GovGASTWD.k5>([\s\S]*?)<\/cim:GovGASTWD.k5>/g, obj, "k5", base.to_string, sub, context);

            /**
             * Minimum fuel flow (K6).
             *
             */
            base.parse_element (/<cim:GovGASTWD.k6>([\s\S]*?)<\/cim:GovGASTWD.k6>/g, obj, "k6", base.to_string, sub, context);

            /**
             * Drop Governor Gain (Kd).
             *
             */
            base.parse_element (/<cim:GovGASTWD.kd>([\s\S]*?)<\/cim:GovGASTWD.kd>/g, obj, "kd", base.to_string, sub, context);

            /**
             * (Kdroop).
             *
             */
            base.parse_element (/<cim:GovGASTWD.kdroop>([\s\S]*?)<\/cim:GovGASTWD.kdroop>/g, obj, "kdroop", base.to_string, sub, context);

            /**
             * Fuel system feedback (Kf).
             *
             */
            base.parse_element (/<cim:GovGASTWD.kf>([\s\S]*?)<\/cim:GovGASTWD.kf>/g, obj, "kf", base.to_string, sub, context);

            /**
             * Isochronous Governor Gain (Ki).
             *
             */
            base.parse_element (/<cim:GovGASTWD.ki>([\s\S]*?)<\/cim:GovGASTWD.ki>/g, obj, "ki", base.to_string, sub, context);

            /**
             * PID Proportional gain (Kp).
             *
             */
            base.parse_element (/<cim:GovGASTWD.kp>([\s\S]*?)<\/cim:GovGASTWD.kp>/g, obj, "kp", base.to_string, sub, context);

            /**
             * Base for power values (MWbase) (&gt; 0).
             *
             * Unit = MW.
             *
             */
            base.parse_element (/<cim:GovGASTWD.mwbase>([\s\S]*?)<\/cim:GovGASTWD.mwbase>/g, obj, "mwbase", base.to_string, sub, context);

            /**
             * Fuel Control Time Constant (T).
             *
             */
            base.parse_element (/<cim:GovGASTWD.t>([\s\S]*?)<\/cim:GovGASTWD.t>/g, obj, "t", base.to_string, sub, context);

            /**
             * Radiation shield time constant (T3).
             *
             */
            base.parse_element (/<cim:GovGASTWD.t3>([\s\S]*?)<\/cim:GovGASTWD.t3>/g, obj, "t3", base.to_string, sub, context);

            /**
             * Thermocouple time constant (T4).
             *
             */
            base.parse_element (/<cim:GovGASTWD.t4>([\s\S]*?)<\/cim:GovGASTWD.t4>/g, obj, "t4", base.to_string, sub, context);

            /**
             * Temperature control time constant (T5).
             *
             */
            base.parse_element (/<cim:GovGASTWD.t5>([\s\S]*?)<\/cim:GovGASTWD.t5>/g, obj, "t5", base.to_string, sub, context);

            /**
             * Temperature control (Tc).
             *
             */
            base.parse_element (/<cim:GovGASTWD.tc>([\s\S]*?)<\/cim:GovGASTWD.tc>/g, obj, "tc", base.to_string, sub, context);

            /**
             * Compressor discharge time constant (Tcd).
             *
             */
            base.parse_element (/<cim:GovGASTWD.tcd>([\s\S]*?)<\/cim:GovGASTWD.tcd>/g, obj, "tcd", base.to_string, sub, context);

            /**
             * Power transducer time constant (Td).
             *
             */
            base.parse_element (/<cim:GovGASTWD.td>([\s\S]*?)<\/cim:GovGASTWD.td>/g, obj, "td", base.to_string, sub, context);

            /**
             * Fuel system time constant (Tf).
             *
             */
            base.parse_element (/<cim:GovGASTWD.tf>([\s\S]*?)<\/cim:GovGASTWD.tf>/g, obj, "tf", base.to_string, sub, context);

            /**
             * Maximum Turbine limit (Tmax).
             *
             */
            base.parse_element (/<cim:GovGASTWD.tmax>([\s\S]*?)<\/cim:GovGASTWD.tmax>/g, obj, "tmax", base.to_string, sub, context);

            /**
             * Minimum Turbine limit (Tmin).
             *
             */
            base.parse_element (/<cim:GovGASTWD.tmin>([\s\S]*?)<\/cim:GovGASTWD.tmin>/g, obj, "tmin", base.to_string, sub, context);

            /**
             * Rated temperature (Tr).
             *
             */
            base.parse_element (/<cim:GovGASTWD.tr>([\s\S]*?)<\/cim:GovGASTWD.tr>/g, obj, "tr", base.to_string, sub, context);

            /**
             * Turbine rating (Trate).
             *
             * Unit = MW.
             *
             */
            base.parse_element (/<cim:GovGASTWD.trate>([\s\S]*?)<\/cim:GovGASTWD.trate>/g, obj, "trate", base.to_string, sub, context);

            /**
             * Temperature controller integration rate (Tt).
             *
             */
            base.parse_element (/<cim:GovGASTWD.tt>([\s\S]*?)<\/cim:GovGASTWD.tt>/g, obj, "tt", base.to_string, sub, context);

            bucket = context.parsed.GovGASTWD;
            if (null == bucket)
                context.parsed.GovGASTWD = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_GovSteamIEEE1: parse_GovSteamIEEE1,
                parse_GovHydroIEEE0: parse_GovHydroIEEE0,
                parse_GovSteam1: parse_GovSteam1,
                parse_GovGAST2: parse_GovGAST2,
                parse_GovHydroDD: parse_GovHydroDD,
                parse_GovHydro2: parse_GovHydro2,
                parse_GovHydroIEEE2: parse_GovHydroIEEE2,
                parse_GovHydroR: parse_GovHydroR,
                parse_GovGAST: parse_GovGAST,
                parse_GovSteam0: parse_GovSteam0,
                parse_GovHydroPelton: parse_GovHydroPelton,
                parse_GovHydroPID: parse_GovHydroPID,
                parse_GovSteamSGO: parse_GovSteamSGO,
                parse_GovSteamEU: parse_GovSteamEU,
                parse_GovGASTWD: parse_GovGASTWD,
                parse_GovHydro1: parse_GovHydro1,
                parse_GovGAST4: parse_GovGAST4,
                parse_GovGAST1: parse_GovGAST1,
                parse_GovSteamFV2: parse_GovSteamFV2,
                parse_GovSteamFV4: parse_GovSteamFV4,
                parse_GovHydroWPID: parse_GovHydroWPID,
                parse_GovHydroFrancis: parse_GovHydroFrancis,
                parse_GovCT1: parse_GovCT1,
                parse_TurbineGovernorDynamics: parse_TurbineGovernorDynamics,
                parse_GovHydro4: parse_GovHydro4,
                parse_DroopSignalFeedbackKind: parse_DroopSignalFeedbackKind,
                parse_GovSteamFV3: parse_GovSteamFV3,
                parse_GovGAST3: parse_GovGAST3,
                parse_FrancisGovernorControlKind: parse_FrancisGovernorControlKind,
                parse_GovSteam2: parse_GovSteam2,
                parse_GovHydroWEH: parse_GovHydroWEH,
                parse_GovHydro3: parse_GovHydro3,
                parse_GovCT2: parse_GovCT2,
                parse_GovSteamCC: parse_GovSteamCC,
                parse_GovHydroPID2: parse_GovHydroPID2
            }
        );
    }
);