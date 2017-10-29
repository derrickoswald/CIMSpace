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
            base.parse_element (/<cim:GovGAST3.bca>([\s\S]*?)<\/cim:GovGAST3.bca>/g, obj, "bca", base.to_float, sub, context);
            base.parse_element (/<cim:GovGAST3.bp>([\s\S]*?)<\/cim:GovGAST3.bp>/g, obj, "bp", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST3.dtc>([\s\S]*?)<\/cim:GovGAST3.dtc>/g, obj, "dtc", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST3.ka>([\s\S]*?)<\/cim:GovGAST3.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST3.kac>([\s\S]*?)<\/cim:GovGAST3.kac>/g, obj, "kac", base.to_float, sub, context);
            base.parse_element (/<cim:GovGAST3.kca>([\s\S]*?)<\/cim:GovGAST3.kca>/g, obj, "kca", base.to_float, sub, context);
            base.parse_element (/<cim:GovGAST3.ksi>([\s\S]*?)<\/cim:GovGAST3.ksi>/g, obj, "ksi", base.to_float, sub, context);
            base.parse_element (/<cim:GovGAST3.ky>([\s\S]*?)<\/cim:GovGAST3.ky>/g, obj, "ky", base.to_float, sub, context);
            base.parse_element (/<cim:GovGAST3.mnef>([\s\S]*?)<\/cim:GovGAST3.mnef>/g, obj, "mnef", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST3.mxef>([\s\S]*?)<\/cim:GovGAST3.mxef>/g, obj, "mxef", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST3.rcmn>([\s\S]*?)<\/cim:GovGAST3.rcmn>/g, obj, "rcmn", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST3.rcmx>([\s\S]*?)<\/cim:GovGAST3.rcmx>/g, obj, "rcmx", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST3.tac>([\s\S]*?)<\/cim:GovGAST3.tac>/g, obj, "tac", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST3.tc>([\s\S]*?)<\/cim:GovGAST3.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST3.td>([\s\S]*?)<\/cim:GovGAST3.td>/g, obj, "td", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST3.tfen>([\s\S]*?)<\/cim:GovGAST3.tfen>/g, obj, "tfen", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST3.tg>([\s\S]*?)<\/cim:GovGAST3.tg>/g, obj, "tg", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST3.tsi>([\s\S]*?)<\/cim:GovGAST3.tsi>/g, obj, "tsi", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST3.tt>([\s\S]*?)<\/cim:GovGAST3.tt>/g, obj, "tt", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST3.ttc>([\s\S]*?)<\/cim:GovGAST3.ttc>/g, obj, "ttc", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST3.ty>([\s\S]*?)<\/cim:GovGAST3.ty>/g, obj, "ty", base.to_string, sub, context);
            bucket = context.parsed.GovGAST3;
            if (null == bucket)
                context.parsed.GovGAST3 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovGAST3 (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovGAST3", "bca", base.from_float, fields);
            base.export_element (obj, "GovGAST3", "bp", base.from_string, fields);
            base.export_element (obj, "GovGAST3", "dtc", base.from_string, fields);
            base.export_element (obj, "GovGAST3", "ka", base.from_string, fields);
            base.export_element (obj, "GovGAST3", "kac", base.from_float, fields);
            base.export_element (obj, "GovGAST3", "kca", base.from_float, fields);
            base.export_element (obj, "GovGAST3", "ksi", base.from_float, fields);
            base.export_element (obj, "GovGAST3", "ky", base.from_float, fields);
            base.export_element (obj, "GovGAST3", "mnef", base.from_string, fields);
            base.export_element (obj, "GovGAST3", "mxef", base.from_string, fields);
            base.export_element (obj, "GovGAST3", "rcmn", base.from_string, fields);
            base.export_element (obj, "GovGAST3", "rcmx", base.from_string, fields);
            base.export_element (obj, "GovGAST3", "tac", base.from_string, fields);
            base.export_element (obj, "GovGAST3", "tc", base.from_string, fields);
            base.export_element (obj, "GovGAST3", "td", base.from_string, fields);
            base.export_element (obj, "GovGAST3", "tfen", base.from_string, fields);
            base.export_element (obj, "GovGAST3", "tg", base.from_string, fields);
            base.export_element (obj, "GovGAST3", "tsi", base.from_string, fields);
            base.export_element (obj, "GovGAST3", "tt", base.from_string, fields);
            base.export_element (obj, "GovGAST3", "ttc", base.from_string, fields);
            base.export_element (obj, "GovGAST3", "ty", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:FrancisGovernorControlKind.mechanicHydrolicTachoAccelerator>([\s\S]*?)<\/cim:FrancisGovernorControlKind.mechanicHydrolicTachoAccelerator>/g, obj, "mechanicHydrolicTachoAccelerator", base.to_string, sub, context);
            base.parse_element (/<cim:FrancisGovernorControlKind.mechanicHydraulicTransientFeedback>([\s\S]*?)<\/cim:FrancisGovernorControlKind.mechanicHydraulicTransientFeedback>/g, obj, "mechanicHydraulicTransientFeedback", base.to_string, sub, context);
            base.parse_element (/<cim:FrancisGovernorControlKind.electromechanicalElectrohydraulic>([\s\S]*?)<\/cim:FrancisGovernorControlKind.electromechanicalElectrohydraulic>/g, obj, "electromechanicalElectrohydraulic", base.to_string, sub, context);
            bucket = context.parsed.FrancisGovernorControlKind;
            if (null == bucket)
                context.parsed.FrancisGovernorControlKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_FrancisGovernorControlKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "FrancisGovernorControlKind", "mechanicHydrolicTachoAccelerator", base.from_string, fields);
            base.export_element (obj, "FrancisGovernorControlKind", "mechanicHydraulicTransientFeedback", base.from_string, fields);
            base.export_element (obj, "FrancisGovernorControlKind", "electromechanicalElectrohydraulic", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GovSteamFV2.dt>([\s\S]*?)<\/cim:GovSteamFV2.dt>/g, obj, "dt", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV2.k>([\s\S]*?)<\/cim:GovSteamFV2.k>/g, obj, "k", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV2.mwbase>([\s\S]*?)<\/cim:GovSteamFV2.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV2.r>([\s\S]*?)<\/cim:GovSteamFV2.r>/g, obj, "r", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV2.t1>([\s\S]*?)<\/cim:GovSteamFV2.t1>/g, obj, "t1", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV2.t3>([\s\S]*?)<\/cim:GovSteamFV2.t3>/g, obj, "t3", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV2.ta>([\s\S]*?)<\/cim:GovSteamFV2.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV2.tb>([\s\S]*?)<\/cim:GovSteamFV2.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV2.tc>([\s\S]*?)<\/cim:GovSteamFV2.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV2.ti>([\s\S]*?)<\/cim:GovSteamFV2.ti>/g, obj, "ti", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV2.tt>([\s\S]*?)<\/cim:GovSteamFV2.tt>/g, obj, "tt", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV2.vmax>([\s\S]*?)<\/cim:GovSteamFV2.vmax>/g, obj, "vmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV2.vmin>([\s\S]*?)<\/cim:GovSteamFV2.vmin>/g, obj, "vmin", base.to_string, sub, context);
            bucket = context.parsed.GovSteamFV2;
            if (null == bucket)
                context.parsed.GovSteamFV2 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovSteamFV2 (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovSteamFV2", "dt", base.from_string, fields);
            base.export_element (obj, "GovSteamFV2", "k", base.from_string, fields);
            base.export_element (obj, "GovSteamFV2", "mwbase", base.from_string, fields);
            base.export_element (obj, "GovSteamFV2", "r", base.from_string, fields);
            base.export_element (obj, "GovSteamFV2", "t1", base.from_string, fields);
            base.export_element (obj, "GovSteamFV2", "t3", base.from_string, fields);
            base.export_element (obj, "GovSteamFV2", "ta", base.from_string, fields);
            base.export_element (obj, "GovSteamFV2", "tb", base.from_string, fields);
            base.export_element (obj, "GovSteamFV2", "tc", base.from_string, fields);
            base.export_element (obj, "GovSteamFV2", "ti", base.from_string, fields);
            base.export_element (obj, "GovSteamFV2", "tt", base.from_string, fields);
            base.export_element (obj, "GovSteamFV2", "vmax", base.from_string, fields);
            base.export_element (obj, "GovSteamFV2", "vmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GovHydroPelton.av0>([\s\S]*?)<\/cim:GovHydroPelton.av0>/g, obj, "av0", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPelton.av1>([\s\S]*?)<\/cim:GovHydroPelton.av1>/g, obj, "av1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPelton.bp>([\s\S]*?)<\/cim:GovHydroPelton.bp>/g, obj, "bp", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPelton.db1>([\s\S]*?)<\/cim:GovHydroPelton.db1>/g, obj, "db1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPelton.db2>([\s\S]*?)<\/cim:GovHydroPelton.db2>/g, obj, "db2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPelton.h1>([\s\S]*?)<\/cim:GovHydroPelton.h1>/g, obj, "h1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPelton.h2>([\s\S]*?)<\/cim:GovHydroPelton.h2>/g, obj, "h2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPelton.hn>([\s\S]*?)<\/cim:GovHydroPelton.hn>/g, obj, "hn", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPelton.kc>([\s\S]*?)<\/cim:GovHydroPelton.kc>/g, obj, "kc", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPelton.kg>([\s\S]*?)<\/cim:GovHydroPelton.kg>/g, obj, "kg", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPelton.qc0>([\s\S]*?)<\/cim:GovHydroPelton.qc0>/g, obj, "qc0", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPelton.qn>([\s\S]*?)<\/cim:GovHydroPelton.qn>/g, obj, "qn", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPelton.simplifiedPelton>([\s\S]*?)<\/cim:GovHydroPelton.simplifiedPelton>/g, obj, "simplifiedPelton", base.to_boolean, sub, context);
            base.parse_element (/<cim:GovHydroPelton.staticCompensating>([\s\S]*?)<\/cim:GovHydroPelton.staticCompensating>/g, obj, "staticCompensating", base.to_boolean, sub, context);
            base.parse_element (/<cim:GovHydroPelton.ta>([\s\S]*?)<\/cim:GovHydroPelton.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPelton.ts>([\s\S]*?)<\/cim:GovHydroPelton.ts>/g, obj, "ts", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPelton.tv>([\s\S]*?)<\/cim:GovHydroPelton.tv>/g, obj, "tv", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPelton.twnc>([\s\S]*?)<\/cim:GovHydroPelton.twnc>/g, obj, "twnc", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPelton.twng>([\s\S]*?)<\/cim:GovHydroPelton.twng>/g, obj, "twng", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPelton.tx>([\s\S]*?)<\/cim:GovHydroPelton.tx>/g, obj, "tx", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPelton.va>([\s\S]*?)<\/cim:GovHydroPelton.va>/g, obj, "va", base.to_float, sub, context);
            base.parse_element (/<cim:GovHydroPelton.valvmax>([\s\S]*?)<\/cim:GovHydroPelton.valvmax>/g, obj, "valvmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPelton.valvmin>([\s\S]*?)<\/cim:GovHydroPelton.valvmin>/g, obj, "valvmin", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPelton.vav>([\s\S]*?)<\/cim:GovHydroPelton.vav>/g, obj, "vav", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPelton.vc>([\s\S]*?)<\/cim:GovHydroPelton.vc>/g, obj, "vc", base.to_float, sub, context);
            base.parse_element (/<cim:GovHydroPelton.vcv>([\s\S]*?)<\/cim:GovHydroPelton.vcv>/g, obj, "vcv", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPelton.waterTunnelSurgeChamberSimulation>([\s\S]*?)<\/cim:GovHydroPelton.waterTunnelSurgeChamberSimulation>/g, obj, "waterTunnelSurgeChamberSimulation", base.to_boolean, sub, context);
            base.parse_element (/<cim:GovHydroPelton.zsfc>([\s\S]*?)<\/cim:GovHydroPelton.zsfc>/g, obj, "zsfc", base.to_string, sub, context);
            bucket = context.parsed.GovHydroPelton;
            if (null == bucket)
                context.parsed.GovHydroPelton = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovHydroPelton (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovHydroPelton", "av0", base.from_string, fields);
            base.export_element (obj, "GovHydroPelton", "av1", base.from_string, fields);
            base.export_element (obj, "GovHydroPelton", "bp", base.from_string, fields);
            base.export_element (obj, "GovHydroPelton", "db1", base.from_string, fields);
            base.export_element (obj, "GovHydroPelton", "db2", base.from_string, fields);
            base.export_element (obj, "GovHydroPelton", "h1", base.from_string, fields);
            base.export_element (obj, "GovHydroPelton", "h2", base.from_string, fields);
            base.export_element (obj, "GovHydroPelton", "hn", base.from_string, fields);
            base.export_element (obj, "GovHydroPelton", "kc", base.from_string, fields);
            base.export_element (obj, "GovHydroPelton", "kg", base.from_string, fields);
            base.export_element (obj, "GovHydroPelton", "qc0", base.from_string, fields);
            base.export_element (obj, "GovHydroPelton", "qn", base.from_string, fields);
            base.export_element (obj, "GovHydroPelton", "simplifiedPelton", base.from_boolean, fields);
            base.export_element (obj, "GovHydroPelton", "staticCompensating", base.from_boolean, fields);
            base.export_element (obj, "GovHydroPelton", "ta", base.from_string, fields);
            base.export_element (obj, "GovHydroPelton", "ts", base.from_string, fields);
            base.export_element (obj, "GovHydroPelton", "tv", base.from_string, fields);
            base.export_element (obj, "GovHydroPelton", "twnc", base.from_string, fields);
            base.export_element (obj, "GovHydroPelton", "twng", base.from_string, fields);
            base.export_element (obj, "GovHydroPelton", "tx", base.from_string, fields);
            base.export_element (obj, "GovHydroPelton", "va", base.from_float, fields);
            base.export_element (obj, "GovHydroPelton", "valvmax", base.from_string, fields);
            base.export_element (obj, "GovHydroPelton", "valvmin", base.from_string, fields);
            base.export_element (obj, "GovHydroPelton", "vav", base.from_string, fields);
            base.export_element (obj, "GovHydroPelton", "vc", base.from_float, fields);
            base.export_element (obj, "GovHydroPelton", "vcv", base.from_string, fields);
            base.export_element (obj, "GovHydroPelton", "waterTunnelSurgeChamberSimulation", base.from_boolean, fields);
            base.export_element (obj, "GovHydroPelton", "zsfc", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GovCT1.aset>([\s\S]*?)<\/cim:GovCT1.aset>/g, obj, "aset", base.to_float, sub, context);
            base.parse_element (/<cim:GovCT1.db>([\s\S]*?)<\/cim:GovCT1.db>/g, obj, "db", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT1.dm>([\s\S]*?)<\/cim:GovCT1.dm>/g, obj, "dm", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT1.ka>([\s\S]*?)<\/cim:GovCT1.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT1.kdgov>([\s\S]*?)<\/cim:GovCT1.kdgov>/g, obj, "kdgov", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT1.kigov>([\s\S]*?)<\/cim:GovCT1.kigov>/g, obj, "kigov", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT1.kiload>([\s\S]*?)<\/cim:GovCT1.kiload>/g, obj, "kiload", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT1.kimw>([\s\S]*?)<\/cim:GovCT1.kimw>/g, obj, "kimw", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT1.kpgov>([\s\S]*?)<\/cim:GovCT1.kpgov>/g, obj, "kpgov", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT1.kpload>([\s\S]*?)<\/cim:GovCT1.kpload>/g, obj, "kpload", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT1.kturb>([\s\S]*?)<\/cim:GovCT1.kturb>/g, obj, "kturb", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT1.ldref>([\s\S]*?)<\/cim:GovCT1.ldref>/g, obj, "ldref", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT1.maxerr>([\s\S]*?)<\/cim:GovCT1.maxerr>/g, obj, "maxerr", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT1.minerr>([\s\S]*?)<\/cim:GovCT1.minerr>/g, obj, "minerr", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT1.mwbase>([\s\S]*?)<\/cim:GovCT1.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT1.r>([\s\S]*?)<\/cim:GovCT1.r>/g, obj, "r", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT1.rclose>([\s\S]*?)<\/cim:GovCT1.rclose>/g, obj, "rclose", base.to_float, sub, context);
            base.parse_element (/<cim:GovCT1.rdown>([\s\S]*?)<\/cim:GovCT1.rdown>/g, obj, "rdown", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT1.ropen>([\s\S]*?)<\/cim:GovCT1.ropen>/g, obj, "ropen", base.to_float, sub, context);
            base.parse_element (/<cim:GovCT1.rselect>([\s\S]*?)<\/cim:GovCT1.rselect>/g, obj, "rselect", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT1.rup>([\s\S]*?)<\/cim:GovCT1.rup>/g, obj, "rup", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT1.ta>([\s\S]*?)<\/cim:GovCT1.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT1.tact>([\s\S]*?)<\/cim:GovCT1.tact>/g, obj, "tact", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT1.tb>([\s\S]*?)<\/cim:GovCT1.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT1.tc>([\s\S]*?)<\/cim:GovCT1.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT1.tdgov>([\s\S]*?)<\/cim:GovCT1.tdgov>/g, obj, "tdgov", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT1.teng>([\s\S]*?)<\/cim:GovCT1.teng>/g, obj, "teng", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT1.tfload>([\s\S]*?)<\/cim:GovCT1.tfload>/g, obj, "tfload", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT1.tpelec>([\s\S]*?)<\/cim:GovCT1.tpelec>/g, obj, "tpelec", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT1.tsa>([\s\S]*?)<\/cim:GovCT1.tsa>/g, obj, "tsa", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT1.tsb>([\s\S]*?)<\/cim:GovCT1.tsb>/g, obj, "tsb", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT1.vmax>([\s\S]*?)<\/cim:GovCT1.vmax>/g, obj, "vmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT1.vmin>([\s\S]*?)<\/cim:GovCT1.vmin>/g, obj, "vmin", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT1.wfnl>([\s\S]*?)<\/cim:GovCT1.wfnl>/g, obj, "wfnl", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT1.wfspd>([\s\S]*?)<\/cim:GovCT1.wfspd>/g, obj, "wfspd", base.to_boolean, sub, context);
            bucket = context.parsed.GovCT1;
            if (null == bucket)
                context.parsed.GovCT1 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovCT1 (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovCT1", "aset", base.from_float, fields);
            base.export_element (obj, "GovCT1", "db", base.from_string, fields);
            base.export_element (obj, "GovCT1", "dm", base.from_string, fields);
            base.export_element (obj, "GovCT1", "ka", base.from_string, fields);
            base.export_element (obj, "GovCT1", "kdgov", base.from_string, fields);
            base.export_element (obj, "GovCT1", "kigov", base.from_string, fields);
            base.export_element (obj, "GovCT1", "kiload", base.from_string, fields);
            base.export_element (obj, "GovCT1", "kimw", base.from_string, fields);
            base.export_element (obj, "GovCT1", "kpgov", base.from_string, fields);
            base.export_element (obj, "GovCT1", "kpload", base.from_string, fields);
            base.export_element (obj, "GovCT1", "kturb", base.from_string, fields);
            base.export_element (obj, "GovCT1", "ldref", base.from_string, fields);
            base.export_element (obj, "GovCT1", "maxerr", base.from_string, fields);
            base.export_element (obj, "GovCT1", "minerr", base.from_string, fields);
            base.export_element (obj, "GovCT1", "mwbase", base.from_string, fields);
            base.export_element (obj, "GovCT1", "r", base.from_string, fields);
            base.export_element (obj, "GovCT1", "rclose", base.from_float, fields);
            base.export_element (obj, "GovCT1", "rdown", base.from_string, fields);
            base.export_element (obj, "GovCT1", "ropen", base.from_float, fields);
            base.export_element (obj, "GovCT1", "rselect", base.from_string, fields);
            base.export_element (obj, "GovCT1", "rup", base.from_string, fields);
            base.export_element (obj, "GovCT1", "ta", base.from_string, fields);
            base.export_element (obj, "GovCT1", "tact", base.from_string, fields);
            base.export_element (obj, "GovCT1", "tb", base.from_string, fields);
            base.export_element (obj, "GovCT1", "tc", base.from_string, fields);
            base.export_element (obj, "GovCT1", "tdgov", base.from_string, fields);
            base.export_element (obj, "GovCT1", "teng", base.from_string, fields);
            base.export_element (obj, "GovCT1", "tfload", base.from_string, fields);
            base.export_element (obj, "GovCT1", "tpelec", base.from_string, fields);
            base.export_element (obj, "GovCT1", "tsa", base.from_string, fields);
            base.export_element (obj, "GovCT1", "tsb", base.from_string, fields);
            base.export_element (obj, "GovCT1", "vmax", base.from_string, fields);
            base.export_element (obj, "GovCT1", "vmin", base.from_string, fields);
            base.export_element (obj, "GovCT1", "wfnl", base.from_string, fields);
            base.export_element (obj, "GovCT1", "wfspd", base.from_boolean, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GovHydro1.at>([\s\S]*?)<\/cim:GovHydro1.at>/g, obj, "at", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro1.dturb>([\s\S]*?)<\/cim:GovHydro1.dturb>/g, obj, "dturb", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro1.gmax>([\s\S]*?)<\/cim:GovHydro1.gmax>/g, obj, "gmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro1.gmin>([\s\S]*?)<\/cim:GovHydro1.gmin>/g, obj, "gmin", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro1.hdam>([\s\S]*?)<\/cim:GovHydro1.hdam>/g, obj, "hdam", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro1.mwbase>([\s\S]*?)<\/cim:GovHydro1.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro1.qnl>([\s\S]*?)<\/cim:GovHydro1.qnl>/g, obj, "qnl", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro1.rperm>([\s\S]*?)<\/cim:GovHydro1.rperm>/g, obj, "rperm", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro1.rtemp>([\s\S]*?)<\/cim:GovHydro1.rtemp>/g, obj, "rtemp", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro1.tf>([\s\S]*?)<\/cim:GovHydro1.tf>/g, obj, "tf", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro1.tg>([\s\S]*?)<\/cim:GovHydro1.tg>/g, obj, "tg", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro1.tr>([\s\S]*?)<\/cim:GovHydro1.tr>/g, obj, "tr", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro1.tw>([\s\S]*?)<\/cim:GovHydro1.tw>/g, obj, "tw", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro1.velm>([\s\S]*?)<\/cim:GovHydro1.velm>/g, obj, "velm", base.to_float, sub, context);
            bucket = context.parsed.GovHydro1;
            if (null == bucket)
                context.parsed.GovHydro1 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovHydro1 (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovHydro1", "at", base.from_string, fields);
            base.export_element (obj, "GovHydro1", "dturb", base.from_string, fields);
            base.export_element (obj, "GovHydro1", "gmax", base.from_string, fields);
            base.export_element (obj, "GovHydro1", "gmin", base.from_string, fields);
            base.export_element (obj, "GovHydro1", "hdam", base.from_string, fields);
            base.export_element (obj, "GovHydro1", "mwbase", base.from_string, fields);
            base.export_element (obj, "GovHydro1", "qnl", base.from_string, fields);
            base.export_element (obj, "GovHydro1", "rperm", base.from_string, fields);
            base.export_element (obj, "GovHydro1", "rtemp", base.from_string, fields);
            base.export_element (obj, "GovHydro1", "tf", base.from_string, fields);
            base.export_element (obj, "GovHydro1", "tg", base.from_string, fields);
            base.export_element (obj, "GovHydro1", "tr", base.from_string, fields);
            base.export_element (obj, "GovHydro1", "tw", base.from_string, fields);
            base.export_element (obj, "GovHydro1", "velm", base.from_float, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GovSteam2.dbf>([\s\S]*?)<\/cim:GovSteam2.dbf>/g, obj, "dbf", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam2.k>([\s\S]*?)<\/cim:GovSteam2.k>/g, obj, "k", base.to_float, sub, context);
            base.parse_element (/<cim:GovSteam2.mnef>([\s\S]*?)<\/cim:GovSteam2.mnef>/g, obj, "mnef", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam2.mxef>([\s\S]*?)<\/cim:GovSteam2.mxef>/g, obj, "mxef", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam2.pmax>([\s\S]*?)<\/cim:GovSteam2.pmax>/g, obj, "pmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam2.pmin>([\s\S]*?)<\/cim:GovSteam2.pmin>/g, obj, "pmin", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam2.t1>([\s\S]*?)<\/cim:GovSteam2.t1>/g, obj, "t1", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam2.t2>([\s\S]*?)<\/cim:GovSteam2.t2>/g, obj, "t2", base.to_string, sub, context);
            bucket = context.parsed.GovSteam2;
            if (null == bucket)
                context.parsed.GovSteam2 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovSteam2 (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovSteam2", "dbf", base.from_string, fields);
            base.export_element (obj, "GovSteam2", "k", base.from_float, fields);
            base.export_element (obj, "GovSteam2", "mnef", base.from_string, fields);
            base.export_element (obj, "GovSteam2", "mxef", base.from_string, fields);
            base.export_element (obj, "GovSteam2", "pmax", base.from_string, fields);
            base.export_element (obj, "GovSteam2", "pmin", base.from_string, fields);
            base.export_element (obj, "GovSteam2", "t1", base.from_string, fields);
            base.export_element (obj, "GovSteam2", "t2", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GovHydroDD.aturb>([\s\S]*?)<\/cim:GovHydroDD.aturb>/g, obj, "aturb", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.bturb>([\s\S]*?)<\/cim:GovHydroDD.bturb>/g, obj, "bturb", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.db1>([\s\S]*?)<\/cim:GovHydroDD.db1>/g, obj, "db1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.db2>([\s\S]*?)<\/cim:GovHydroDD.db2>/g, obj, "db2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.eps>([\s\S]*?)<\/cim:GovHydroDD.eps>/g, obj, "eps", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.gmax>([\s\S]*?)<\/cim:GovHydroDD.gmax>/g, obj, "gmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.gmin>([\s\S]*?)<\/cim:GovHydroDD.gmin>/g, obj, "gmin", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.gv1>([\s\S]*?)<\/cim:GovHydroDD.gv1>/g, obj, "gv1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.gv2>([\s\S]*?)<\/cim:GovHydroDD.gv2>/g, obj, "gv2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.gv3>([\s\S]*?)<\/cim:GovHydroDD.gv3>/g, obj, "gv3", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.gv4>([\s\S]*?)<\/cim:GovHydroDD.gv4>/g, obj, "gv4", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.gv5>([\s\S]*?)<\/cim:GovHydroDD.gv5>/g, obj, "gv5", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.gv6>([\s\S]*?)<\/cim:GovHydroDD.gv6>/g, obj, "gv6", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.inputSignal>([\s\S]*?)<\/cim:GovHydroDD.inputSignal>/g, obj, "inputSignal", base.to_boolean, sub, context);
            base.parse_element (/<cim:GovHydroDD.k1>([\s\S]*?)<\/cim:GovHydroDD.k1>/g, obj, "k1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.k2>([\s\S]*?)<\/cim:GovHydroDD.k2>/g, obj, "k2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.kg>([\s\S]*?)<\/cim:GovHydroDD.kg>/g, obj, "kg", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.ki>([\s\S]*?)<\/cim:GovHydroDD.ki>/g, obj, "ki", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.mwbase>([\s\S]*?)<\/cim:GovHydroDD.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.pgv1>([\s\S]*?)<\/cim:GovHydroDD.pgv1>/g, obj, "pgv1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.pgv2>([\s\S]*?)<\/cim:GovHydroDD.pgv2>/g, obj, "pgv2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.pgv3>([\s\S]*?)<\/cim:GovHydroDD.pgv3>/g, obj, "pgv3", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.pgv4>([\s\S]*?)<\/cim:GovHydroDD.pgv4>/g, obj, "pgv4", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.pgv5>([\s\S]*?)<\/cim:GovHydroDD.pgv5>/g, obj, "pgv5", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.pgv6>([\s\S]*?)<\/cim:GovHydroDD.pgv6>/g, obj, "pgv6", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.pmax>([\s\S]*?)<\/cim:GovHydroDD.pmax>/g, obj, "pmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.pmin>([\s\S]*?)<\/cim:GovHydroDD.pmin>/g, obj, "pmin", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.r>([\s\S]*?)<\/cim:GovHydroDD.r>/g, obj, "r", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.td>([\s\S]*?)<\/cim:GovHydroDD.td>/g, obj, "td", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.tf>([\s\S]*?)<\/cim:GovHydroDD.tf>/g, obj, "tf", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.tp>([\s\S]*?)<\/cim:GovHydroDD.tp>/g, obj, "tp", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.tt>([\s\S]*?)<\/cim:GovHydroDD.tt>/g, obj, "tt", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.tturb>([\s\S]*?)<\/cim:GovHydroDD.tturb>/g, obj, "tturb", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroDD.velcl>([\s\S]*?)<\/cim:GovHydroDD.velcl>/g, obj, "velcl", base.to_float, sub, context);
            base.parse_element (/<cim:GovHydroDD.velop>([\s\S]*?)<\/cim:GovHydroDD.velop>/g, obj, "velop", base.to_float, sub, context);
            bucket = context.parsed.GovHydroDD;
            if (null == bucket)
                context.parsed.GovHydroDD = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovHydroDD (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovHydroDD", "aturb", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "bturb", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "db1", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "db2", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "eps", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "gmax", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "gmin", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "gv1", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "gv2", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "gv3", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "gv4", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "gv5", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "gv6", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "inputSignal", base.from_boolean, fields);
            base.export_element (obj, "GovHydroDD", "k1", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "k2", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "kg", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "ki", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "mwbase", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "pgv1", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "pgv2", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "pgv3", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "pgv4", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "pgv5", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "pgv6", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "pmax", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "pmin", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "r", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "td", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "tf", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "tp", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "tt", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "tturb", base.from_string, fields);
            base.export_element (obj, "GovHydroDD", "velcl", base.from_float, fields);
            base.export_element (obj, "GovHydroDD", "velop", base.from_float, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GovHydroIEEE0.k>([\s\S]*?)<\/cim:GovHydroIEEE0.k>/g, obj, "k", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroIEEE0.mwbase>([\s\S]*?)<\/cim:GovHydroIEEE0.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroIEEE0.pmax>([\s\S]*?)<\/cim:GovHydroIEEE0.pmax>/g, obj, "pmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroIEEE0.pmin>([\s\S]*?)<\/cim:GovHydroIEEE0.pmin>/g, obj, "pmin", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroIEEE0.t1>([\s\S]*?)<\/cim:GovHydroIEEE0.t1>/g, obj, "t1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroIEEE0.t2>([\s\S]*?)<\/cim:GovHydroIEEE0.t2>/g, obj, "t2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroIEEE0.t3>([\s\S]*?)<\/cim:GovHydroIEEE0.t3>/g, obj, "t3", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroIEEE0.t4>([\s\S]*?)<\/cim:GovHydroIEEE0.t4>/g, obj, "t4", base.to_string, sub, context);
            bucket = context.parsed.GovHydroIEEE0;
            if (null == bucket)
                context.parsed.GovHydroIEEE0 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovHydroIEEE0 (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovHydroIEEE0", "k", base.from_string, fields);
            base.export_element (obj, "GovHydroIEEE0", "mwbase", base.from_string, fields);
            base.export_element (obj, "GovHydroIEEE0", "pmax", base.from_string, fields);
            base.export_element (obj, "GovHydroIEEE0", "pmin", base.from_string, fields);
            base.export_element (obj, "GovHydroIEEE0", "t1", base.from_string, fields);
            base.export_element (obj, "GovHydroIEEE0", "t2", base.from_string, fields);
            base.export_element (obj, "GovHydroIEEE0", "t3", base.from_string, fields);
            base.export_element (obj, "GovHydroIEEE0", "t4", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GovSteam0.dt>([\s\S]*?)<\/cim:GovSteam0.dt>/g, obj, "dt", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam0.mwbase>([\s\S]*?)<\/cim:GovSteam0.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam0.r>([\s\S]*?)<\/cim:GovSteam0.r>/g, obj, "r", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam0.t1>([\s\S]*?)<\/cim:GovSteam0.t1>/g, obj, "t1", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam0.t2>([\s\S]*?)<\/cim:GovSteam0.t2>/g, obj, "t2", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam0.t3>([\s\S]*?)<\/cim:GovSteam0.t3>/g, obj, "t3", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam0.vmax>([\s\S]*?)<\/cim:GovSteam0.vmax>/g, obj, "vmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam0.vmin>([\s\S]*?)<\/cim:GovSteam0.vmin>/g, obj, "vmin", base.to_string, sub, context);
            bucket = context.parsed.GovSteam0;
            if (null == bucket)
                context.parsed.GovSteam0 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovSteam0 (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovSteam0", "dt", base.from_string, fields);
            base.export_element (obj, "GovSteam0", "mwbase", base.from_string, fields);
            base.export_element (obj, "GovSteam0", "r", base.from_string, fields);
            base.export_element (obj, "GovSteam0", "t1", base.from_string, fields);
            base.export_element (obj, "GovSteam0", "t2", base.from_string, fields);
            base.export_element (obj, "GovSteam0", "t3", base.from_string, fields);
            base.export_element (obj, "GovSteam0", "vmax", base.from_string, fields);
            base.export_element (obj, "GovSteam0", "vmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GovSteamSGO.k1>([\s\S]*?)<\/cim:GovSteamSGO.k1>/g, obj, "k1", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamSGO.k2>([\s\S]*?)<\/cim:GovSteamSGO.k2>/g, obj, "k2", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamSGO.k3>([\s\S]*?)<\/cim:GovSteamSGO.k3>/g, obj, "k3", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamSGO.mwbase>([\s\S]*?)<\/cim:GovSteamSGO.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamSGO.pmax>([\s\S]*?)<\/cim:GovSteamSGO.pmax>/g, obj, "pmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamSGO.pmin>([\s\S]*?)<\/cim:GovSteamSGO.pmin>/g, obj, "pmin", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamSGO.t1>([\s\S]*?)<\/cim:GovSteamSGO.t1>/g, obj, "t1", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamSGO.t2>([\s\S]*?)<\/cim:GovSteamSGO.t2>/g, obj, "t2", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamSGO.t3>([\s\S]*?)<\/cim:GovSteamSGO.t3>/g, obj, "t3", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamSGO.t4>([\s\S]*?)<\/cim:GovSteamSGO.t4>/g, obj, "t4", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamSGO.t5>([\s\S]*?)<\/cim:GovSteamSGO.t5>/g, obj, "t5", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamSGO.t6>([\s\S]*?)<\/cim:GovSteamSGO.t6>/g, obj, "t6", base.to_string, sub, context);
            bucket = context.parsed.GovSteamSGO;
            if (null == bucket)
                context.parsed.GovSteamSGO = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovSteamSGO (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovSteamSGO", "k1", base.from_string, fields);
            base.export_element (obj, "GovSteamSGO", "k2", base.from_string, fields);
            base.export_element (obj, "GovSteamSGO", "k3", base.from_string, fields);
            base.export_element (obj, "GovSteamSGO", "mwbase", base.from_string, fields);
            base.export_element (obj, "GovSteamSGO", "pmax", base.from_string, fields);
            base.export_element (obj, "GovSteamSGO", "pmin", base.from_string, fields);
            base.export_element (obj, "GovSteamSGO", "t1", base.from_string, fields);
            base.export_element (obj, "GovSteamSGO", "t2", base.from_string, fields);
            base.export_element (obj, "GovSteamSGO", "t3", base.from_string, fields);
            base.export_element (obj, "GovSteamSGO", "t4", base.from_string, fields);
            base.export_element (obj, "GovSteamSGO", "t5", base.from_string, fields);
            base.export_element (obj, "GovSteamSGO", "t6", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GovHydroR.at>([\s\S]*?)<\/cim:GovHydroR.at>/g, obj, "at", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.db1>([\s\S]*?)<\/cim:GovHydroR.db1>/g, obj, "db1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.db2>([\s\S]*?)<\/cim:GovHydroR.db2>/g, obj, "db2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.dturb>([\s\S]*?)<\/cim:GovHydroR.dturb>/g, obj, "dturb", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.eps>([\s\S]*?)<\/cim:GovHydroR.eps>/g, obj, "eps", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.gmax>([\s\S]*?)<\/cim:GovHydroR.gmax>/g, obj, "gmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.gmin>([\s\S]*?)<\/cim:GovHydroR.gmin>/g, obj, "gmin", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.gv1>([\s\S]*?)<\/cim:GovHydroR.gv1>/g, obj, "gv1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.gv2>([\s\S]*?)<\/cim:GovHydroR.gv2>/g, obj, "gv2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.gv3>([\s\S]*?)<\/cim:GovHydroR.gv3>/g, obj, "gv3", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.gv4>([\s\S]*?)<\/cim:GovHydroR.gv4>/g, obj, "gv4", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.gv5>([\s\S]*?)<\/cim:GovHydroR.gv5>/g, obj, "gv5", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.gv6>([\s\S]*?)<\/cim:GovHydroR.gv6>/g, obj, "gv6", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.h0>([\s\S]*?)<\/cim:GovHydroR.h0>/g, obj, "h0", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.inputSignal>([\s\S]*?)<\/cim:GovHydroR.inputSignal>/g, obj, "inputSignal", base.to_boolean, sub, context);
            base.parse_element (/<cim:GovHydroR.kg>([\s\S]*?)<\/cim:GovHydroR.kg>/g, obj, "kg", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.ki>([\s\S]*?)<\/cim:GovHydroR.ki>/g, obj, "ki", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.mwbase>([\s\S]*?)<\/cim:GovHydroR.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.pgv1>([\s\S]*?)<\/cim:GovHydroR.pgv1>/g, obj, "pgv1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.pgv2>([\s\S]*?)<\/cim:GovHydroR.pgv2>/g, obj, "pgv2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.pgv3>([\s\S]*?)<\/cim:GovHydroR.pgv3>/g, obj, "pgv3", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.pgv4>([\s\S]*?)<\/cim:GovHydroR.pgv4>/g, obj, "pgv4", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.pgv5>([\s\S]*?)<\/cim:GovHydroR.pgv5>/g, obj, "pgv5", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.pgv6>([\s\S]*?)<\/cim:GovHydroR.pgv6>/g, obj, "pgv6", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.pmax>([\s\S]*?)<\/cim:GovHydroR.pmax>/g, obj, "pmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.pmin>([\s\S]*?)<\/cim:GovHydroR.pmin>/g, obj, "pmin", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.qnl>([\s\S]*?)<\/cim:GovHydroR.qnl>/g, obj, "qnl", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.r>([\s\S]*?)<\/cim:GovHydroR.r>/g, obj, "r", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.t1>([\s\S]*?)<\/cim:GovHydroR.t1>/g, obj, "t1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.t2>([\s\S]*?)<\/cim:GovHydroR.t2>/g, obj, "t2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.t3>([\s\S]*?)<\/cim:GovHydroR.t3>/g, obj, "t3", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.t4>([\s\S]*?)<\/cim:GovHydroR.t4>/g, obj, "t4", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.t5>([\s\S]*?)<\/cim:GovHydroR.t5>/g, obj, "t5", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.t6>([\s\S]*?)<\/cim:GovHydroR.t6>/g, obj, "t6", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.t7>([\s\S]*?)<\/cim:GovHydroR.t7>/g, obj, "t7", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.t8>([\s\S]*?)<\/cim:GovHydroR.t8>/g, obj, "t8", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.td>([\s\S]*?)<\/cim:GovHydroR.td>/g, obj, "td", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.tp>([\s\S]*?)<\/cim:GovHydroR.tp>/g, obj, "tp", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.tt>([\s\S]*?)<\/cim:GovHydroR.tt>/g, obj, "tt", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.tw>([\s\S]*?)<\/cim:GovHydroR.tw>/g, obj, "tw", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroR.velcl>([\s\S]*?)<\/cim:GovHydroR.velcl>/g, obj, "velcl", base.to_float, sub, context);
            base.parse_element (/<cim:GovHydroR.velop>([\s\S]*?)<\/cim:GovHydroR.velop>/g, obj, "velop", base.to_float, sub, context);
            bucket = context.parsed.GovHydroR;
            if (null == bucket)
                context.parsed.GovHydroR = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovHydroR (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovHydroR", "at", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "db1", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "db2", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "dturb", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "eps", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "gmax", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "gmin", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "gv1", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "gv2", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "gv3", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "gv4", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "gv5", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "gv6", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "h0", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "inputSignal", base.from_boolean, fields);
            base.export_element (obj, "GovHydroR", "kg", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "ki", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "mwbase", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "pgv1", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "pgv2", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "pgv3", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "pgv4", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "pgv5", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "pgv6", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "pmax", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "pmin", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "qnl", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "r", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "t1", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "t2", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "t3", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "t4", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "t5", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "t6", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "t7", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "t8", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "td", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "tp", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "tt", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "tw", base.from_string, fields);
            base.export_element (obj, "GovHydroR", "velcl", base.from_float, fields);
            base.export_element (obj, "GovHydroR", "velop", base.from_float, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GovHydro4.at>([\s\S]*?)<\/cim:GovHydro4.at>/g, obj, "at", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.bgv0>([\s\S]*?)<\/cim:GovHydro4.bgv0>/g, obj, "bgv0", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.bgv1>([\s\S]*?)<\/cim:GovHydro4.bgv1>/g, obj, "bgv1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.bgv2>([\s\S]*?)<\/cim:GovHydro4.bgv2>/g, obj, "bgv2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.bgv3>([\s\S]*?)<\/cim:GovHydro4.bgv3>/g, obj, "bgv3", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.bgv4>([\s\S]*?)<\/cim:GovHydro4.bgv4>/g, obj, "bgv4", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.bgv5>([\s\S]*?)<\/cim:GovHydro4.bgv5>/g, obj, "bgv5", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.bmax>([\s\S]*?)<\/cim:GovHydro4.bmax>/g, obj, "bmax", base.to_float, sub, context);
            base.parse_element (/<cim:GovHydro4.db1>([\s\S]*?)<\/cim:GovHydro4.db1>/g, obj, "db1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.db2>([\s\S]*?)<\/cim:GovHydro4.db2>/g, obj, "db2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.dturb>([\s\S]*?)<\/cim:GovHydro4.dturb>/g, obj, "dturb", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.eps>([\s\S]*?)<\/cim:GovHydro4.eps>/g, obj, "eps", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.gmax>([\s\S]*?)<\/cim:GovHydro4.gmax>/g, obj, "gmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.gmin>([\s\S]*?)<\/cim:GovHydro4.gmin>/g, obj, "gmin", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.gv0>([\s\S]*?)<\/cim:GovHydro4.gv0>/g, obj, "gv0", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.gv1>([\s\S]*?)<\/cim:GovHydro4.gv1>/g, obj, "gv1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.gv2>([\s\S]*?)<\/cim:GovHydro4.gv2>/g, obj, "gv2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.gv3>([\s\S]*?)<\/cim:GovHydro4.gv3>/g, obj, "gv3", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.gv4>([\s\S]*?)<\/cim:GovHydro4.gv4>/g, obj, "gv4", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.gv5>([\s\S]*?)<\/cim:GovHydro4.gv5>/g, obj, "gv5", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.hdam>([\s\S]*?)<\/cim:GovHydro4.hdam>/g, obj, "hdam", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.mwbase>([\s\S]*?)<\/cim:GovHydro4.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.pgv0>([\s\S]*?)<\/cim:GovHydro4.pgv0>/g, obj, "pgv0", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.pgv1>([\s\S]*?)<\/cim:GovHydro4.pgv1>/g, obj, "pgv1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.pgv2>([\s\S]*?)<\/cim:GovHydro4.pgv2>/g, obj, "pgv2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.pgv3>([\s\S]*?)<\/cim:GovHydro4.pgv3>/g, obj, "pgv3", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.pgv4>([\s\S]*?)<\/cim:GovHydro4.pgv4>/g, obj, "pgv4", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.pgv5>([\s\S]*?)<\/cim:GovHydro4.pgv5>/g, obj, "pgv5", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.qn1>([\s\S]*?)<\/cim:GovHydro4.qn1>/g, obj, "qn1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.rperm>([\s\S]*?)<\/cim:GovHydro4.rperm>/g, obj, "rperm", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.rtemp>([\s\S]*?)<\/cim:GovHydro4.rtemp>/g, obj, "rtemp", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.tblade>([\s\S]*?)<\/cim:GovHydro4.tblade>/g, obj, "tblade", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.tg>([\s\S]*?)<\/cim:GovHydro4.tg>/g, obj, "tg", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.tp>([\s\S]*?)<\/cim:GovHydro4.tp>/g, obj, "tp", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.tr>([\s\S]*?)<\/cim:GovHydro4.tr>/g, obj, "tr", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.tw>([\s\S]*?)<\/cim:GovHydro4.tw>/g, obj, "tw", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro4.uc>([\s\S]*?)<\/cim:GovHydro4.uc>/g, obj, "uc", base.to_float, sub, context);
            base.parse_element (/<cim:GovHydro4.uo>([\s\S]*?)<\/cim:GovHydro4.uo>/g, obj, "uo", base.to_float, sub, context);
            bucket = context.parsed.GovHydro4;
            if (null == bucket)
                context.parsed.GovHydro4 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovHydro4 (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovHydro4", "at", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "bgv0", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "bgv1", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "bgv2", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "bgv3", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "bgv4", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "bgv5", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "bmax", base.from_float, fields);
            base.export_element (obj, "GovHydro4", "db1", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "db2", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "dturb", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "eps", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "gmax", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "gmin", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "gv0", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "gv1", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "gv2", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "gv3", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "gv4", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "gv5", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "hdam", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "mwbase", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "pgv0", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "pgv1", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "pgv2", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "pgv3", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "pgv4", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "pgv5", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "qn1", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "rperm", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "rtemp", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "tblade", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "tg", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "tp", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "tr", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "tw", base.from_string, fields);
            base.export_element (obj, "GovHydro4", "uc", base.from_float, fields);
            base.export_element (obj, "GovHydro4", "uo", base.from_float, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GovGAST1.a>([\s\S]*?)<\/cim:GovGAST1.a>/g, obj, "a", base.to_float, sub, context);
            base.parse_element (/<cim:GovGAST1.b>([\s\S]*?)<\/cim:GovGAST1.b>/g, obj, "b", base.to_float, sub, context);
            base.parse_element (/<cim:GovGAST1.db1>([\s\S]*?)<\/cim:GovGAST1.db1>/g, obj, "db1", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST1.db2>([\s\S]*?)<\/cim:GovGAST1.db2>/g, obj, "db2", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST1.eps>([\s\S]*?)<\/cim:GovGAST1.eps>/g, obj, "eps", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST1.fidle>([\s\S]*?)<\/cim:GovGAST1.fidle>/g, obj, "fidle", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST1.gv1>([\s\S]*?)<\/cim:GovGAST1.gv1>/g, obj, "gv1", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST1.gv2>([\s\S]*?)<\/cim:GovGAST1.gv2>/g, obj, "gv2", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST1.gv3>([\s\S]*?)<\/cim:GovGAST1.gv3>/g, obj, "gv3", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST1.gv4>([\s\S]*?)<\/cim:GovGAST1.gv4>/g, obj, "gv4", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST1.gv5>([\s\S]*?)<\/cim:GovGAST1.gv5>/g, obj, "gv5", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST1.gv6>([\s\S]*?)<\/cim:GovGAST1.gv6>/g, obj, "gv6", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST1.ka>([\s\S]*?)<\/cim:GovGAST1.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST1.kt>([\s\S]*?)<\/cim:GovGAST1.kt>/g, obj, "kt", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST1.lmax>([\s\S]*?)<\/cim:GovGAST1.lmax>/g, obj, "lmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST1.loadinc>([\s\S]*?)<\/cim:GovGAST1.loadinc>/g, obj, "loadinc", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST1.ltrate>([\s\S]*?)<\/cim:GovGAST1.ltrate>/g, obj, "ltrate", base.to_float, sub, context);
            base.parse_element (/<cim:GovGAST1.mwbase>([\s\S]*?)<\/cim:GovGAST1.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST1.pgv1>([\s\S]*?)<\/cim:GovGAST1.pgv1>/g, obj, "pgv1", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST1.pgv2>([\s\S]*?)<\/cim:GovGAST1.pgv2>/g, obj, "pgv2", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST1.pgv3>([\s\S]*?)<\/cim:GovGAST1.pgv3>/g, obj, "pgv3", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST1.pgv4>([\s\S]*?)<\/cim:GovGAST1.pgv4>/g, obj, "pgv4", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST1.pgv5>([\s\S]*?)<\/cim:GovGAST1.pgv5>/g, obj, "pgv5", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST1.pgv6>([\s\S]*?)<\/cim:GovGAST1.pgv6>/g, obj, "pgv6", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST1.r>([\s\S]*?)<\/cim:GovGAST1.r>/g, obj, "r", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST1.rmax>([\s\S]*?)<\/cim:GovGAST1.rmax>/g, obj, "rmax", base.to_float, sub, context);
            base.parse_element (/<cim:GovGAST1.t1>([\s\S]*?)<\/cim:GovGAST1.t1>/g, obj, "t1", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST1.t2>([\s\S]*?)<\/cim:GovGAST1.t2>/g, obj, "t2", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST1.t3>([\s\S]*?)<\/cim:GovGAST1.t3>/g, obj, "t3", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST1.t4>([\s\S]*?)<\/cim:GovGAST1.t4>/g, obj, "t4", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST1.t5>([\s\S]*?)<\/cim:GovGAST1.t5>/g, obj, "t5", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST1.tltr>([\s\S]*?)<\/cim:GovGAST1.tltr>/g, obj, "tltr", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST1.vmax>([\s\S]*?)<\/cim:GovGAST1.vmax>/g, obj, "vmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST1.vmin>([\s\S]*?)<\/cim:GovGAST1.vmin>/g, obj, "vmin", base.to_string, sub, context);
            bucket = context.parsed.GovGAST1;
            if (null == bucket)
                context.parsed.GovGAST1 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovGAST1 (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovGAST1", "a", base.from_float, fields);
            base.export_element (obj, "GovGAST1", "b", base.from_float, fields);
            base.export_element (obj, "GovGAST1", "db1", base.from_string, fields);
            base.export_element (obj, "GovGAST1", "db2", base.from_string, fields);
            base.export_element (obj, "GovGAST1", "eps", base.from_string, fields);
            base.export_element (obj, "GovGAST1", "fidle", base.from_string, fields);
            base.export_element (obj, "GovGAST1", "gv1", base.from_string, fields);
            base.export_element (obj, "GovGAST1", "gv2", base.from_string, fields);
            base.export_element (obj, "GovGAST1", "gv3", base.from_string, fields);
            base.export_element (obj, "GovGAST1", "gv4", base.from_string, fields);
            base.export_element (obj, "GovGAST1", "gv5", base.from_string, fields);
            base.export_element (obj, "GovGAST1", "gv6", base.from_string, fields);
            base.export_element (obj, "GovGAST1", "ka", base.from_string, fields);
            base.export_element (obj, "GovGAST1", "kt", base.from_string, fields);
            base.export_element (obj, "GovGAST1", "lmax", base.from_string, fields);
            base.export_element (obj, "GovGAST1", "loadinc", base.from_string, fields);
            base.export_element (obj, "GovGAST1", "ltrate", base.from_float, fields);
            base.export_element (obj, "GovGAST1", "mwbase", base.from_string, fields);
            base.export_element (obj, "GovGAST1", "pgv1", base.from_string, fields);
            base.export_element (obj, "GovGAST1", "pgv2", base.from_string, fields);
            base.export_element (obj, "GovGAST1", "pgv3", base.from_string, fields);
            base.export_element (obj, "GovGAST1", "pgv4", base.from_string, fields);
            base.export_element (obj, "GovGAST1", "pgv5", base.from_string, fields);
            base.export_element (obj, "GovGAST1", "pgv6", base.from_string, fields);
            base.export_element (obj, "GovGAST1", "r", base.from_string, fields);
            base.export_element (obj, "GovGAST1", "rmax", base.from_float, fields);
            base.export_element (obj, "GovGAST1", "t1", base.from_string, fields);
            base.export_element (obj, "GovGAST1", "t2", base.from_string, fields);
            base.export_element (obj, "GovGAST1", "t3", base.from_string, fields);
            base.export_element (obj, "GovGAST1", "t4", base.from_string, fields);
            base.export_element (obj, "GovGAST1", "t5", base.from_string, fields);
            base.export_element (obj, "GovGAST1", "tltr", base.from_string, fields);
            base.export_element (obj, "GovGAST1", "vmax", base.from_string, fields);
            base.export_element (obj, "GovGAST1", "vmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GovSteam1.db1>([\s\S]*?)<\/cim:GovSteam1.db1>/g, obj, "db1", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam1.db2>([\s\S]*?)<\/cim:GovSteam1.db2>/g, obj, "db2", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam1.eps>([\s\S]*?)<\/cim:GovSteam1.eps>/g, obj, "eps", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam1.gv1>([\s\S]*?)<\/cim:GovSteam1.gv1>/g, obj, "gv1", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam1.gv2>([\s\S]*?)<\/cim:GovSteam1.gv2>/g, obj, "gv2", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam1.gv3>([\s\S]*?)<\/cim:GovSteam1.gv3>/g, obj, "gv3", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam1.gv4>([\s\S]*?)<\/cim:GovSteam1.gv4>/g, obj, "gv4", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam1.gv5>([\s\S]*?)<\/cim:GovSteam1.gv5>/g, obj, "gv5", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam1.gv6>([\s\S]*?)<\/cim:GovSteam1.gv6>/g, obj, "gv6", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam1.k>([\s\S]*?)<\/cim:GovSteam1.k>/g, obj, "k", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam1.k1>([\s\S]*?)<\/cim:GovSteam1.k1>/g, obj, "k1", base.to_float, sub, context);
            base.parse_element (/<cim:GovSteam1.k2>([\s\S]*?)<\/cim:GovSteam1.k2>/g, obj, "k2", base.to_float, sub, context);
            base.parse_element (/<cim:GovSteam1.k3>([\s\S]*?)<\/cim:GovSteam1.k3>/g, obj, "k3", base.to_float, sub, context);
            base.parse_element (/<cim:GovSteam1.k4>([\s\S]*?)<\/cim:GovSteam1.k4>/g, obj, "k4", base.to_float, sub, context);
            base.parse_element (/<cim:GovSteam1.k5>([\s\S]*?)<\/cim:GovSteam1.k5>/g, obj, "k5", base.to_float, sub, context);
            base.parse_element (/<cim:GovSteam1.k6>([\s\S]*?)<\/cim:GovSteam1.k6>/g, obj, "k6", base.to_float, sub, context);
            base.parse_element (/<cim:GovSteam1.k7>([\s\S]*?)<\/cim:GovSteam1.k7>/g, obj, "k7", base.to_float, sub, context);
            base.parse_element (/<cim:GovSteam1.k8>([\s\S]*?)<\/cim:GovSteam1.k8>/g, obj, "k8", base.to_float, sub, context);
            base.parse_element (/<cim:GovSteam1.mwbase>([\s\S]*?)<\/cim:GovSteam1.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam1.pgv1>([\s\S]*?)<\/cim:GovSteam1.pgv1>/g, obj, "pgv1", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam1.pgv2>([\s\S]*?)<\/cim:GovSteam1.pgv2>/g, obj, "pgv2", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam1.pgv3>([\s\S]*?)<\/cim:GovSteam1.pgv3>/g, obj, "pgv3", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam1.pgv4>([\s\S]*?)<\/cim:GovSteam1.pgv4>/g, obj, "pgv4", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam1.pgv5>([\s\S]*?)<\/cim:GovSteam1.pgv5>/g, obj, "pgv5", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam1.pgv6>([\s\S]*?)<\/cim:GovSteam1.pgv6>/g, obj, "pgv6", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam1.pmax>([\s\S]*?)<\/cim:GovSteam1.pmax>/g, obj, "pmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam1.pmin>([\s\S]*?)<\/cim:GovSteam1.pmin>/g, obj, "pmin", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam1.sdb1>([\s\S]*?)<\/cim:GovSteam1.sdb1>/g, obj, "sdb1", base.to_boolean, sub, context);
            base.parse_element (/<cim:GovSteam1.sdb2>([\s\S]*?)<\/cim:GovSteam1.sdb2>/g, obj, "sdb2", base.to_boolean, sub, context);
            base.parse_element (/<cim:GovSteam1.t1>([\s\S]*?)<\/cim:GovSteam1.t1>/g, obj, "t1", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam1.t2>([\s\S]*?)<\/cim:GovSteam1.t2>/g, obj, "t2", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam1.t3>([\s\S]*?)<\/cim:GovSteam1.t3>/g, obj, "t3", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam1.t4>([\s\S]*?)<\/cim:GovSteam1.t4>/g, obj, "t4", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam1.t5>([\s\S]*?)<\/cim:GovSteam1.t5>/g, obj, "t5", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam1.t6>([\s\S]*?)<\/cim:GovSteam1.t6>/g, obj, "t6", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam1.t7>([\s\S]*?)<\/cim:GovSteam1.t7>/g, obj, "t7", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteam1.uc>([\s\S]*?)<\/cim:GovSteam1.uc>/g, obj, "uc", base.to_float, sub, context);
            base.parse_element (/<cim:GovSteam1.uo>([\s\S]*?)<\/cim:GovSteam1.uo>/g, obj, "uo", base.to_float, sub, context);
            base.parse_element (/<cim:GovSteam1.valve>([\s\S]*?)<\/cim:GovSteam1.valve>/g, obj, "valve", base.to_boolean, sub, context);
            bucket = context.parsed.GovSteam1;
            if (null == bucket)
                context.parsed.GovSteam1 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovSteam1 (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovSteam1", "db1", base.from_string, fields);
            base.export_element (obj, "GovSteam1", "db2", base.from_string, fields);
            base.export_element (obj, "GovSteam1", "eps", base.from_string, fields);
            base.export_element (obj, "GovSteam1", "gv1", base.from_string, fields);
            base.export_element (obj, "GovSteam1", "gv2", base.from_string, fields);
            base.export_element (obj, "GovSteam1", "gv3", base.from_string, fields);
            base.export_element (obj, "GovSteam1", "gv4", base.from_string, fields);
            base.export_element (obj, "GovSteam1", "gv5", base.from_string, fields);
            base.export_element (obj, "GovSteam1", "gv6", base.from_string, fields);
            base.export_element (obj, "GovSteam1", "k", base.from_string, fields);
            base.export_element (obj, "GovSteam1", "k1", base.from_float, fields);
            base.export_element (obj, "GovSteam1", "k2", base.from_float, fields);
            base.export_element (obj, "GovSteam1", "k3", base.from_float, fields);
            base.export_element (obj, "GovSteam1", "k4", base.from_float, fields);
            base.export_element (obj, "GovSteam1", "k5", base.from_float, fields);
            base.export_element (obj, "GovSteam1", "k6", base.from_float, fields);
            base.export_element (obj, "GovSteam1", "k7", base.from_float, fields);
            base.export_element (obj, "GovSteam1", "k8", base.from_float, fields);
            base.export_element (obj, "GovSteam1", "mwbase", base.from_string, fields);
            base.export_element (obj, "GovSteam1", "pgv1", base.from_string, fields);
            base.export_element (obj, "GovSteam1", "pgv2", base.from_string, fields);
            base.export_element (obj, "GovSteam1", "pgv3", base.from_string, fields);
            base.export_element (obj, "GovSteam1", "pgv4", base.from_string, fields);
            base.export_element (obj, "GovSteam1", "pgv5", base.from_string, fields);
            base.export_element (obj, "GovSteam1", "pgv6", base.from_string, fields);
            base.export_element (obj, "GovSteam1", "pmax", base.from_string, fields);
            base.export_element (obj, "GovSteam1", "pmin", base.from_string, fields);
            base.export_element (obj, "GovSteam1", "sdb1", base.from_boolean, fields);
            base.export_element (obj, "GovSteam1", "sdb2", base.from_boolean, fields);
            base.export_element (obj, "GovSteam1", "t1", base.from_string, fields);
            base.export_element (obj, "GovSteam1", "t2", base.from_string, fields);
            base.export_element (obj, "GovSteam1", "t3", base.from_string, fields);
            base.export_element (obj, "GovSteam1", "t4", base.from_string, fields);
            base.export_element (obj, "GovSteam1", "t5", base.from_string, fields);
            base.export_element (obj, "GovSteam1", "t6", base.from_string, fields);
            base.export_element (obj, "GovSteam1", "t7", base.from_string, fields);
            base.export_element (obj, "GovSteam1", "uc", base.from_float, fields);
            base.export_element (obj, "GovSteam1", "uo", base.from_float, fields);
            base.export_element (obj, "GovSteam1", "valve", base.from_boolean, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GovHydroFrancis.am>([\s\S]*?)<\/cim:GovHydroFrancis.am>/g, obj, "am", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroFrancis.av0>([\s\S]*?)<\/cim:GovHydroFrancis.av0>/g, obj, "av0", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroFrancis.av1>([\s\S]*?)<\/cim:GovHydroFrancis.av1>/g, obj, "av1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroFrancis.bp>([\s\S]*?)<\/cim:GovHydroFrancis.bp>/g, obj, "bp", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroFrancis.db1>([\s\S]*?)<\/cim:GovHydroFrancis.db1>/g, obj, "db1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroFrancis.etamax>([\s\S]*?)<\/cim:GovHydroFrancis.etamax>/g, obj, "etamax", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroFrancis.governorControl>([\s\S]*?)<\/cim:GovHydroFrancis.governorControl>/g, obj, "governorControl", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroFrancis.h1>([\s\S]*?)<\/cim:GovHydroFrancis.h1>/g, obj, "h1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroFrancis.h2>([\s\S]*?)<\/cim:GovHydroFrancis.h2>/g, obj, "h2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroFrancis.hn>([\s\S]*?)<\/cim:GovHydroFrancis.hn>/g, obj, "hn", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroFrancis.kc>([\s\S]*?)<\/cim:GovHydroFrancis.kc>/g, obj, "kc", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroFrancis.kg>([\s\S]*?)<\/cim:GovHydroFrancis.kg>/g, obj, "kg", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroFrancis.kt>([\s\S]*?)<\/cim:GovHydroFrancis.kt>/g, obj, "kt", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroFrancis.qc0>([\s\S]*?)<\/cim:GovHydroFrancis.qc0>/g, obj, "qc0", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroFrancis.qn>([\s\S]*?)<\/cim:GovHydroFrancis.qn>/g, obj, "qn", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroFrancis.ta>([\s\S]*?)<\/cim:GovHydroFrancis.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroFrancis.td>([\s\S]*?)<\/cim:GovHydroFrancis.td>/g, obj, "td", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroFrancis.ts>([\s\S]*?)<\/cim:GovHydroFrancis.ts>/g, obj, "ts", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroFrancis.twnc>([\s\S]*?)<\/cim:GovHydroFrancis.twnc>/g, obj, "twnc", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroFrancis.twng>([\s\S]*?)<\/cim:GovHydroFrancis.twng>/g, obj, "twng", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroFrancis.tx>([\s\S]*?)<\/cim:GovHydroFrancis.tx>/g, obj, "tx", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroFrancis.va>([\s\S]*?)<\/cim:GovHydroFrancis.va>/g, obj, "va", base.to_float, sub, context);
            base.parse_element (/<cim:GovHydroFrancis.valvmax>([\s\S]*?)<\/cim:GovHydroFrancis.valvmax>/g, obj, "valvmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroFrancis.valvmin>([\s\S]*?)<\/cim:GovHydroFrancis.valvmin>/g, obj, "valvmin", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroFrancis.vc>([\s\S]*?)<\/cim:GovHydroFrancis.vc>/g, obj, "vc", base.to_float, sub, context);
            base.parse_element (/<cim:GovHydroFrancis.waterTunnelSurgeChamberSimulation>([\s\S]*?)<\/cim:GovHydroFrancis.waterTunnelSurgeChamberSimulation>/g, obj, "waterTunnelSurgeChamberSimulation", base.to_boolean, sub, context);
            base.parse_element (/<cim:GovHydroFrancis.zsfc>([\s\S]*?)<\/cim:GovHydroFrancis.zsfc>/g, obj, "zsfc", base.to_string, sub, context);
            bucket = context.parsed.GovHydroFrancis;
            if (null == bucket)
                context.parsed.GovHydroFrancis = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovHydroFrancis (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovHydroFrancis", "am", base.from_string, fields);
            base.export_element (obj, "GovHydroFrancis", "av0", base.from_string, fields);
            base.export_element (obj, "GovHydroFrancis", "av1", base.from_string, fields);
            base.export_element (obj, "GovHydroFrancis", "bp", base.from_string, fields);
            base.export_element (obj, "GovHydroFrancis", "db1", base.from_string, fields);
            base.export_element (obj, "GovHydroFrancis", "etamax", base.from_string, fields);
            base.export_element (obj, "GovHydroFrancis", "governorControl", base.from_string, fields);
            base.export_element (obj, "GovHydroFrancis", "h1", base.from_string, fields);
            base.export_element (obj, "GovHydroFrancis", "h2", base.from_string, fields);
            base.export_element (obj, "GovHydroFrancis", "hn", base.from_string, fields);
            base.export_element (obj, "GovHydroFrancis", "kc", base.from_string, fields);
            base.export_element (obj, "GovHydroFrancis", "kg", base.from_string, fields);
            base.export_element (obj, "GovHydroFrancis", "kt", base.from_string, fields);
            base.export_element (obj, "GovHydroFrancis", "qc0", base.from_string, fields);
            base.export_element (obj, "GovHydroFrancis", "qn", base.from_string, fields);
            base.export_element (obj, "GovHydroFrancis", "ta", base.from_string, fields);
            base.export_element (obj, "GovHydroFrancis", "td", base.from_string, fields);
            base.export_element (obj, "GovHydroFrancis", "ts", base.from_string, fields);
            base.export_element (obj, "GovHydroFrancis", "twnc", base.from_string, fields);
            base.export_element (obj, "GovHydroFrancis", "twng", base.from_string, fields);
            base.export_element (obj, "GovHydroFrancis", "tx", base.from_string, fields);
            base.export_element (obj, "GovHydroFrancis", "va", base.from_float, fields);
            base.export_element (obj, "GovHydroFrancis", "valvmax", base.from_string, fields);
            base.export_element (obj, "GovHydroFrancis", "valvmin", base.from_string, fields);
            base.export_element (obj, "GovHydroFrancis", "vc", base.from_float, fields);
            base.export_element (obj, "GovHydroFrancis", "waterTunnelSurgeChamberSimulation", base.from_boolean, fields);
            base.export_element (obj, "GovHydroFrancis", "zsfc", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:DroopSignalFeedbackKind.electricalPower>([\s\S]*?)<\/cim:DroopSignalFeedbackKind.electricalPower>/g, obj, "electricalPower", base.to_string, sub, context);
            base.parse_element (/<cim:DroopSignalFeedbackKind.none>([\s\S]*?)<\/cim:DroopSignalFeedbackKind.none>/g, obj, "none", base.to_string, sub, context);
            base.parse_element (/<cim:DroopSignalFeedbackKind.fuelValveStroke>([\s\S]*?)<\/cim:DroopSignalFeedbackKind.fuelValveStroke>/g, obj, "fuelValveStroke", base.to_string, sub, context);
            base.parse_element (/<cim:DroopSignalFeedbackKind.governorOutput>([\s\S]*?)<\/cim:DroopSignalFeedbackKind.governorOutput>/g, obj, "governorOutput", base.to_string, sub, context);
            bucket = context.parsed.DroopSignalFeedbackKind;
            if (null == bucket)
                context.parsed.DroopSignalFeedbackKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_DroopSignalFeedbackKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "DroopSignalFeedbackKind", "electricalPower", base.from_string, fields);
            base.export_element (obj, "DroopSignalFeedbackKind", "none", base.from_string, fields);
            base.export_element (obj, "DroopSignalFeedbackKind", "fuelValveStroke", base.from_string, fields);
            base.export_element (obj, "DroopSignalFeedbackKind", "governorOutput", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GovGAST4.bp>([\s\S]*?)<\/cim:GovGAST4.bp>/g, obj, "bp", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST4.ktm>([\s\S]*?)<\/cim:GovGAST4.ktm>/g, obj, "ktm", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST4.mnef>([\s\S]*?)<\/cim:GovGAST4.mnef>/g, obj, "mnef", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST4.mxef>([\s\S]*?)<\/cim:GovGAST4.mxef>/g, obj, "mxef", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST4.rymn>([\s\S]*?)<\/cim:GovGAST4.rymn>/g, obj, "rymn", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST4.rymx>([\s\S]*?)<\/cim:GovGAST4.rymx>/g, obj, "rymx", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST4.ta>([\s\S]*?)<\/cim:GovGAST4.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST4.tc>([\s\S]*?)<\/cim:GovGAST4.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST4.tcm>([\s\S]*?)<\/cim:GovGAST4.tcm>/g, obj, "tcm", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST4.tm>([\s\S]*?)<\/cim:GovGAST4.tm>/g, obj, "tm", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST4.tv>([\s\S]*?)<\/cim:GovGAST4.tv>/g, obj, "tv", base.to_string, sub, context);
            bucket = context.parsed.GovGAST4;
            if (null == bucket)
                context.parsed.GovGAST4 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovGAST4 (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovGAST4", "bp", base.from_string, fields);
            base.export_element (obj, "GovGAST4", "ktm", base.from_string, fields);
            base.export_element (obj, "GovGAST4", "mnef", base.from_string, fields);
            base.export_element (obj, "GovGAST4", "mxef", base.from_string, fields);
            base.export_element (obj, "GovGAST4", "rymn", base.from_string, fields);
            base.export_element (obj, "GovGAST4", "rymx", base.from_string, fields);
            base.export_element (obj, "GovGAST4", "ta", base.from_string, fields);
            base.export_element (obj, "GovGAST4", "tc", base.from_string, fields);
            base.export_element (obj, "GovGAST4", "tcm", base.from_string, fields);
            base.export_element (obj, "GovGAST4", "tm", base.from_string, fields);
            base.export_element (obj, "GovGAST4", "tv", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GovSteamFV3.k>([\s\S]*?)<\/cim:GovSteamFV3.k>/g, obj, "k", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV3.k1>([\s\S]*?)<\/cim:GovSteamFV3.k1>/g, obj, "k1", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV3.k2>([\s\S]*?)<\/cim:GovSteamFV3.k2>/g, obj, "k2", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV3.k3>([\s\S]*?)<\/cim:GovSteamFV3.k3>/g, obj, "k3", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV3.mwbase>([\s\S]*?)<\/cim:GovSteamFV3.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV3.pmax>([\s\S]*?)<\/cim:GovSteamFV3.pmax>/g, obj, "pmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV3.pmin>([\s\S]*?)<\/cim:GovSteamFV3.pmin>/g, obj, "pmin", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV3.prmax>([\s\S]*?)<\/cim:GovSteamFV3.prmax>/g, obj, "prmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV3.t1>([\s\S]*?)<\/cim:GovSteamFV3.t1>/g, obj, "t1", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV3.t2>([\s\S]*?)<\/cim:GovSteamFV3.t2>/g, obj, "t2", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV3.t3>([\s\S]*?)<\/cim:GovSteamFV3.t3>/g, obj, "t3", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV3.t4>([\s\S]*?)<\/cim:GovSteamFV3.t4>/g, obj, "t4", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV3.t5>([\s\S]*?)<\/cim:GovSteamFV3.t5>/g, obj, "t5", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV3.t6>([\s\S]*?)<\/cim:GovSteamFV3.t6>/g, obj, "t6", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV3.ta>([\s\S]*?)<\/cim:GovSteamFV3.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV3.tb>([\s\S]*?)<\/cim:GovSteamFV3.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV3.tc>([\s\S]*?)<\/cim:GovSteamFV3.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV3.uc>([\s\S]*?)<\/cim:GovSteamFV3.uc>/g, obj, "uc", base.to_float, sub, context);
            base.parse_element (/<cim:GovSteamFV3.uo>([\s\S]*?)<\/cim:GovSteamFV3.uo>/g, obj, "uo", base.to_float, sub, context);
            bucket = context.parsed.GovSteamFV3;
            if (null == bucket)
                context.parsed.GovSteamFV3 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovSteamFV3 (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovSteamFV3", "k", base.from_string, fields);
            base.export_element (obj, "GovSteamFV3", "k1", base.from_string, fields);
            base.export_element (obj, "GovSteamFV3", "k2", base.from_string, fields);
            base.export_element (obj, "GovSteamFV3", "k3", base.from_string, fields);
            base.export_element (obj, "GovSteamFV3", "mwbase", base.from_string, fields);
            base.export_element (obj, "GovSteamFV3", "pmax", base.from_string, fields);
            base.export_element (obj, "GovSteamFV3", "pmin", base.from_string, fields);
            base.export_element (obj, "GovSteamFV3", "prmax", base.from_string, fields);
            base.export_element (obj, "GovSteamFV3", "t1", base.from_string, fields);
            base.export_element (obj, "GovSteamFV3", "t2", base.from_string, fields);
            base.export_element (obj, "GovSteamFV3", "t3", base.from_string, fields);
            base.export_element (obj, "GovSteamFV3", "t4", base.from_string, fields);
            base.export_element (obj, "GovSteamFV3", "t5", base.from_string, fields);
            base.export_element (obj, "GovSteamFV3", "t6", base.from_string, fields);
            base.export_element (obj, "GovSteamFV3", "ta", base.from_string, fields);
            base.export_element (obj, "GovSteamFV3", "tb", base.from_string, fields);
            base.export_element (obj, "GovSteamFV3", "tc", base.from_string, fields);
            base.export_element (obj, "GovSteamFV3", "uc", base.from_float, fields);
            base.export_element (obj, "GovSteamFV3", "uo", base.from_float, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GovHydroWEH.db>([\s\S]*?)<\/cim:GovHydroWEH.db>/g, obj, "db", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.dicn>([\s\S]*?)<\/cim:GovHydroWEH.dicn>/g, obj, "dicn", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.dpv>([\s\S]*?)<\/cim:GovHydroWEH.dpv>/g, obj, "dpv", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.dturb>([\s\S]*?)<\/cim:GovHydroWEH.dturb>/g, obj, "dturb", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.feedbackSignal>([\s\S]*?)<\/cim:GovHydroWEH.feedbackSignal>/g, obj, "feedbackSignal", base.to_boolean, sub, context);
            base.parse_element (/<cim:GovHydroWEH.fl1>([\s\S]*?)<\/cim:GovHydroWEH.fl1>/g, obj, "fl1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.fl2>([\s\S]*?)<\/cim:GovHydroWEH.fl2>/g, obj, "fl2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.fl3>([\s\S]*?)<\/cim:GovHydroWEH.fl3>/g, obj, "fl3", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.fl4>([\s\S]*?)<\/cim:GovHydroWEH.fl4>/g, obj, "fl4", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.fl5>([\s\S]*?)<\/cim:GovHydroWEH.fl5>/g, obj, "fl5", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.fp1>([\s\S]*?)<\/cim:GovHydroWEH.fp1>/g, obj, "fp1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.fp10>([\s\S]*?)<\/cim:GovHydroWEH.fp10>/g, obj, "fp10", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.fp2>([\s\S]*?)<\/cim:GovHydroWEH.fp2>/g, obj, "fp2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.fp3>([\s\S]*?)<\/cim:GovHydroWEH.fp3>/g, obj, "fp3", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.fp4>([\s\S]*?)<\/cim:GovHydroWEH.fp4>/g, obj, "fp4", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.fp5>([\s\S]*?)<\/cim:GovHydroWEH.fp5>/g, obj, "fp5", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.fp6>([\s\S]*?)<\/cim:GovHydroWEH.fp6>/g, obj, "fp6", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.fp7>([\s\S]*?)<\/cim:GovHydroWEH.fp7>/g, obj, "fp7", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.fp8>([\s\S]*?)<\/cim:GovHydroWEH.fp8>/g, obj, "fp8", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.fp9>([\s\S]*?)<\/cim:GovHydroWEH.fp9>/g, obj, "fp9", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.gmax>([\s\S]*?)<\/cim:GovHydroWEH.gmax>/g, obj, "gmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.gmin>([\s\S]*?)<\/cim:GovHydroWEH.gmin>/g, obj, "gmin", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.gtmxcl>([\s\S]*?)<\/cim:GovHydroWEH.gtmxcl>/g, obj, "gtmxcl", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.gtmxop>([\s\S]*?)<\/cim:GovHydroWEH.gtmxop>/g, obj, "gtmxop", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.gv1>([\s\S]*?)<\/cim:GovHydroWEH.gv1>/g, obj, "gv1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.gv2>([\s\S]*?)<\/cim:GovHydroWEH.gv2>/g, obj, "gv2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.gv3>([\s\S]*?)<\/cim:GovHydroWEH.gv3>/g, obj, "gv3", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.gv4>([\s\S]*?)<\/cim:GovHydroWEH.gv4>/g, obj, "gv4", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.gv5>([\s\S]*?)<\/cim:GovHydroWEH.gv5>/g, obj, "gv5", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.kd>([\s\S]*?)<\/cim:GovHydroWEH.kd>/g, obj, "kd", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.ki>([\s\S]*?)<\/cim:GovHydroWEH.ki>/g, obj, "ki", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.kp>([\s\S]*?)<\/cim:GovHydroWEH.kp>/g, obj, "kp", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.mwbase>([\s\S]*?)<\/cim:GovHydroWEH.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.pmss1>([\s\S]*?)<\/cim:GovHydroWEH.pmss1>/g, obj, "pmss1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.pmss10>([\s\S]*?)<\/cim:GovHydroWEH.pmss10>/g, obj, "pmss10", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.pmss2>([\s\S]*?)<\/cim:GovHydroWEH.pmss2>/g, obj, "pmss2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.pmss3>([\s\S]*?)<\/cim:GovHydroWEH.pmss3>/g, obj, "pmss3", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.pmss4>([\s\S]*?)<\/cim:GovHydroWEH.pmss4>/g, obj, "pmss4", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.pmss5>([\s\S]*?)<\/cim:GovHydroWEH.pmss5>/g, obj, "pmss5", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.pmss6>([\s\S]*?)<\/cim:GovHydroWEH.pmss6>/g, obj, "pmss6", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.pmss7>([\s\S]*?)<\/cim:GovHydroWEH.pmss7>/g, obj, "pmss7", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.pmss8>([\s\S]*?)<\/cim:GovHydroWEH.pmss8>/g, obj, "pmss8", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.pmss9>([\s\S]*?)<\/cim:GovHydroWEH.pmss9>/g, obj, "pmss9", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.rpg>([\s\S]*?)<\/cim:GovHydroWEH.rpg>/g, obj, "rpg", base.to_float, sub, context);
            base.parse_element (/<cim:GovHydroWEH.rpp>([\s\S]*?)<\/cim:GovHydroWEH.rpp>/g, obj, "rpp", base.to_float, sub, context);
            base.parse_element (/<cim:GovHydroWEH.td>([\s\S]*?)<\/cim:GovHydroWEH.td>/g, obj, "td", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.tdv>([\s\S]*?)<\/cim:GovHydroWEH.tdv>/g, obj, "tdv", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.tg>([\s\S]*?)<\/cim:GovHydroWEH.tg>/g, obj, "tg", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.tp>([\s\S]*?)<\/cim:GovHydroWEH.tp>/g, obj, "tp", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.tpe>([\s\S]*?)<\/cim:GovHydroWEH.tpe>/g, obj, "tpe", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWEH.tw>([\s\S]*?)<\/cim:GovHydroWEH.tw>/g, obj, "tw", base.to_string, sub, context);
            bucket = context.parsed.GovHydroWEH;
            if (null == bucket)
                context.parsed.GovHydroWEH = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovHydroWEH (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovHydroWEH", "db", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "dicn", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "dpv", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "dturb", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "feedbackSignal", base.from_boolean, fields);
            base.export_element (obj, "GovHydroWEH", "fl1", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "fl2", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "fl3", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "fl4", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "fl5", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "fp1", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "fp10", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "fp2", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "fp3", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "fp4", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "fp5", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "fp6", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "fp7", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "fp8", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "fp9", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "gmax", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "gmin", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "gtmxcl", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "gtmxop", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "gv1", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "gv2", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "gv3", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "gv4", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "gv5", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "kd", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "ki", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "kp", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "mwbase", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "pmss1", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "pmss10", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "pmss2", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "pmss3", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "pmss4", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "pmss5", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "pmss6", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "pmss7", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "pmss8", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "pmss9", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "rpg", base.from_float, fields);
            base.export_element (obj, "GovHydroWEH", "rpp", base.from_float, fields);
            base.export_element (obj, "GovHydroWEH", "td", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "tdv", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "tg", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "tp", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "tpe", base.from_string, fields);
            base.export_element (obj, "GovHydroWEH", "tw", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GovGAST2.a>([\s\S]*?)<\/cim:GovGAST2.a>/g, obj, "a", base.to_float, sub, context);
            base.parse_element (/<cim:GovGAST2.af1>([\s\S]*?)<\/cim:GovGAST2.af1>/g, obj, "af1", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST2.af2>([\s\S]*?)<\/cim:GovGAST2.af2>/g, obj, "af2", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST2.b>([\s\S]*?)<\/cim:GovGAST2.b>/g, obj, "b", base.to_float, sub, context);
            base.parse_element (/<cim:GovGAST2.bf1>([\s\S]*?)<\/cim:GovGAST2.bf1>/g, obj, "bf1", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST2.bf2>([\s\S]*?)<\/cim:GovGAST2.bf2>/g, obj, "bf2", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST2.c>([\s\S]*?)<\/cim:GovGAST2.c>/g, obj, "c", base.to_float, sub, context);
            base.parse_element (/<cim:GovGAST2.cf2>([\s\S]*?)<\/cim:GovGAST2.cf2>/g, obj, "cf2", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST2.ecr>([\s\S]*?)<\/cim:GovGAST2.ecr>/g, obj, "ecr", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST2.etd>([\s\S]*?)<\/cim:GovGAST2.etd>/g, obj, "etd", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST2.k3>([\s\S]*?)<\/cim:GovGAST2.k3>/g, obj, "k3", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST2.k4>([\s\S]*?)<\/cim:GovGAST2.k4>/g, obj, "k4", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST2.k5>([\s\S]*?)<\/cim:GovGAST2.k5>/g, obj, "k5", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST2.k6>([\s\S]*?)<\/cim:GovGAST2.k6>/g, obj, "k6", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST2.kf>([\s\S]*?)<\/cim:GovGAST2.kf>/g, obj, "kf", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST2.mwbase>([\s\S]*?)<\/cim:GovGAST2.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST2.t>([\s\S]*?)<\/cim:GovGAST2.t>/g, obj, "t", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST2.t3>([\s\S]*?)<\/cim:GovGAST2.t3>/g, obj, "t3", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST2.t4>([\s\S]*?)<\/cim:GovGAST2.t4>/g, obj, "t4", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST2.t5>([\s\S]*?)<\/cim:GovGAST2.t5>/g, obj, "t5", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST2.tc>([\s\S]*?)<\/cim:GovGAST2.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST2.tcd>([\s\S]*?)<\/cim:GovGAST2.tcd>/g, obj, "tcd", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST2.tf>([\s\S]*?)<\/cim:GovGAST2.tf>/g, obj, "tf", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST2.tmax>([\s\S]*?)<\/cim:GovGAST2.tmax>/g, obj, "tmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST2.tmin>([\s\S]*?)<\/cim:GovGAST2.tmin>/g, obj, "tmin", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST2.tr>([\s\S]*?)<\/cim:GovGAST2.tr>/g, obj, "tr", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST2.trate>([\s\S]*?)<\/cim:GovGAST2.trate>/g, obj, "trate", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST2.tt>([\s\S]*?)<\/cim:GovGAST2.tt>/g, obj, "tt", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST2.w>([\s\S]*?)<\/cim:GovGAST2.w>/g, obj, "w", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST2.x>([\s\S]*?)<\/cim:GovGAST2.x>/g, obj, "x", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST2.y>([\s\S]*?)<\/cim:GovGAST2.y>/g, obj, "y", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST2.z>([\s\S]*?)<\/cim:GovGAST2.z>/g, obj, "z", base.to_boolean, sub, context);
            bucket = context.parsed.GovGAST2;
            if (null == bucket)
                context.parsed.GovGAST2 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovGAST2 (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovGAST2", "a", base.from_float, fields);
            base.export_element (obj, "GovGAST2", "af1", base.from_string, fields);
            base.export_element (obj, "GovGAST2", "af2", base.from_string, fields);
            base.export_element (obj, "GovGAST2", "b", base.from_float, fields);
            base.export_element (obj, "GovGAST2", "bf1", base.from_string, fields);
            base.export_element (obj, "GovGAST2", "bf2", base.from_string, fields);
            base.export_element (obj, "GovGAST2", "c", base.from_float, fields);
            base.export_element (obj, "GovGAST2", "cf2", base.from_string, fields);
            base.export_element (obj, "GovGAST2", "ecr", base.from_string, fields);
            base.export_element (obj, "GovGAST2", "etd", base.from_string, fields);
            base.export_element (obj, "GovGAST2", "k3", base.from_string, fields);
            base.export_element (obj, "GovGAST2", "k4", base.from_string, fields);
            base.export_element (obj, "GovGAST2", "k5", base.from_string, fields);
            base.export_element (obj, "GovGAST2", "k6", base.from_string, fields);
            base.export_element (obj, "GovGAST2", "kf", base.from_string, fields);
            base.export_element (obj, "GovGAST2", "mwbase", base.from_string, fields);
            base.export_element (obj, "GovGAST2", "t", base.from_string, fields);
            base.export_element (obj, "GovGAST2", "t3", base.from_string, fields);
            base.export_element (obj, "GovGAST2", "t4", base.from_string, fields);
            base.export_element (obj, "GovGAST2", "t5", base.from_string, fields);
            base.export_element (obj, "GovGAST2", "tc", base.from_string, fields);
            base.export_element (obj, "GovGAST2", "tcd", base.from_string, fields);
            base.export_element (obj, "GovGAST2", "tf", base.from_string, fields);
            base.export_element (obj, "GovGAST2", "tmax", base.from_string, fields);
            base.export_element (obj, "GovGAST2", "tmin", base.from_string, fields);
            base.export_element (obj, "GovGAST2", "tr", base.from_string, fields);
            base.export_element (obj, "GovGAST2", "trate", base.from_string, fields);
            base.export_element (obj, "GovGAST2", "tt", base.from_string, fields);
            base.export_element (obj, "GovGAST2", "w", base.from_string, fields);
            base.export_element (obj, "GovGAST2", "x", base.from_string, fields);
            base.export_element (obj, "GovGAST2", "y", base.from_string, fields);
            base.export_element (obj, "GovGAST2", "z", base.from_boolean, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_attribute (/<cim:TurbineGovernorDynamics.AsynchronousMachineDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AsynchronousMachineDynamics", sub, context);
            base.parse_attribute (/<cim:TurbineGovernorDynamics.TurbineLoadControllerDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TurbineLoadControllerDynamics", sub, context);
            bucket = context.parsed.TurbineGovernorDynamics;
            if (null == bucket)
                context.parsed.TurbineGovernorDynamics = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TurbineGovernorDynamics (obj, exporters, full)
        {
            var fields = exporters["DynamicsFunctionBlock"](obj, exporters, false);

            base.export_attribute (obj, "TurbineGovernorDynamics", "AsynchronousMachineDynamics", fields);
            base.export_attribute (obj, "TurbineGovernorDynamics", "TurbineLoadControllerDynamics", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GovSteamCC.dhp>([\s\S]*?)<\/cim:GovSteamCC.dhp>/g, obj, "dhp", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamCC.dlp>([\s\S]*?)<\/cim:GovSteamCC.dlp>/g, obj, "dlp", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamCC.fhp>([\s\S]*?)<\/cim:GovSteamCC.fhp>/g, obj, "fhp", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamCC.flp>([\s\S]*?)<\/cim:GovSteamCC.flp>/g, obj, "flp", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamCC.mwbase>([\s\S]*?)<\/cim:GovSteamCC.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamCC.pmaxhp>([\s\S]*?)<\/cim:GovSteamCC.pmaxhp>/g, obj, "pmaxhp", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamCC.pmaxlp>([\s\S]*?)<\/cim:GovSteamCC.pmaxlp>/g, obj, "pmaxlp", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamCC.rhp>([\s\S]*?)<\/cim:GovSteamCC.rhp>/g, obj, "rhp", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamCC.rlp>([\s\S]*?)<\/cim:GovSteamCC.rlp>/g, obj, "rlp", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamCC.t1hp>([\s\S]*?)<\/cim:GovSteamCC.t1hp>/g, obj, "t1hp", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamCC.t1lp>([\s\S]*?)<\/cim:GovSteamCC.t1lp>/g, obj, "t1lp", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamCC.t3hp>([\s\S]*?)<\/cim:GovSteamCC.t3hp>/g, obj, "t3hp", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamCC.t3lp>([\s\S]*?)<\/cim:GovSteamCC.t3lp>/g, obj, "t3lp", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamCC.t4hp>([\s\S]*?)<\/cim:GovSteamCC.t4hp>/g, obj, "t4hp", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamCC.t4lp>([\s\S]*?)<\/cim:GovSteamCC.t4lp>/g, obj, "t4lp", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamCC.t5hp>([\s\S]*?)<\/cim:GovSteamCC.t5hp>/g, obj, "t5hp", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamCC.t5lp>([\s\S]*?)<\/cim:GovSteamCC.t5lp>/g, obj, "t5lp", base.to_string, sub, context);
            bucket = context.parsed.GovSteamCC;
            if (null == bucket)
                context.parsed.GovSteamCC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovSteamCC (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovSteamCC", "dhp", base.from_string, fields);
            base.export_element (obj, "GovSteamCC", "dlp", base.from_string, fields);
            base.export_element (obj, "GovSteamCC", "fhp", base.from_string, fields);
            base.export_element (obj, "GovSteamCC", "flp", base.from_string, fields);
            base.export_element (obj, "GovSteamCC", "mwbase", base.from_string, fields);
            base.export_element (obj, "GovSteamCC", "pmaxhp", base.from_string, fields);
            base.export_element (obj, "GovSteamCC", "pmaxlp", base.from_string, fields);
            base.export_element (obj, "GovSteamCC", "rhp", base.from_string, fields);
            base.export_element (obj, "GovSteamCC", "rlp", base.from_string, fields);
            base.export_element (obj, "GovSteamCC", "t1hp", base.from_string, fields);
            base.export_element (obj, "GovSteamCC", "t1lp", base.from_string, fields);
            base.export_element (obj, "GovSteamCC", "t3hp", base.from_string, fields);
            base.export_element (obj, "GovSteamCC", "t3lp", base.from_string, fields);
            base.export_element (obj, "GovSteamCC", "t4hp", base.from_string, fields);
            base.export_element (obj, "GovSteamCC", "t4lp", base.from_string, fields);
            base.export_element (obj, "GovSteamCC", "t5hp", base.from_string, fields);
            base.export_element (obj, "GovSteamCC", "t5lp", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GovHydroPID.aturb>([\s\S]*?)<\/cim:GovHydroPID.aturb>/g, obj, "aturb", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID.bturb>([\s\S]*?)<\/cim:GovHydroPID.bturb>/g, obj, "bturb", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID.db1>([\s\S]*?)<\/cim:GovHydroPID.db1>/g, obj, "db1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID.db2>([\s\S]*?)<\/cim:GovHydroPID.db2>/g, obj, "db2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID.eps>([\s\S]*?)<\/cim:GovHydroPID.eps>/g, obj, "eps", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID.gv1>([\s\S]*?)<\/cim:GovHydroPID.gv1>/g, obj, "gv1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID.gv2>([\s\S]*?)<\/cim:GovHydroPID.gv2>/g, obj, "gv2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID.gv3>([\s\S]*?)<\/cim:GovHydroPID.gv3>/g, obj, "gv3", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID.gv4>([\s\S]*?)<\/cim:GovHydroPID.gv4>/g, obj, "gv4", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID.gv5>([\s\S]*?)<\/cim:GovHydroPID.gv5>/g, obj, "gv5", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID.gv6>([\s\S]*?)<\/cim:GovHydroPID.gv6>/g, obj, "gv6", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID.inputSignal>([\s\S]*?)<\/cim:GovHydroPID.inputSignal>/g, obj, "inputSignal", base.to_boolean, sub, context);
            base.parse_element (/<cim:GovHydroPID.kd>([\s\S]*?)<\/cim:GovHydroPID.kd>/g, obj, "kd", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID.kg>([\s\S]*?)<\/cim:GovHydroPID.kg>/g, obj, "kg", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID.ki>([\s\S]*?)<\/cim:GovHydroPID.ki>/g, obj, "ki", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID.kp>([\s\S]*?)<\/cim:GovHydroPID.kp>/g, obj, "kp", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID.mwbase>([\s\S]*?)<\/cim:GovHydroPID.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID.pgv1>([\s\S]*?)<\/cim:GovHydroPID.pgv1>/g, obj, "pgv1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID.pgv2>([\s\S]*?)<\/cim:GovHydroPID.pgv2>/g, obj, "pgv2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID.pgv3>([\s\S]*?)<\/cim:GovHydroPID.pgv3>/g, obj, "pgv3", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID.pgv4>([\s\S]*?)<\/cim:GovHydroPID.pgv4>/g, obj, "pgv4", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID.pgv5>([\s\S]*?)<\/cim:GovHydroPID.pgv5>/g, obj, "pgv5", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID.pgv6>([\s\S]*?)<\/cim:GovHydroPID.pgv6>/g, obj, "pgv6", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID.pmax>([\s\S]*?)<\/cim:GovHydroPID.pmax>/g, obj, "pmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID.pmin>([\s\S]*?)<\/cim:GovHydroPID.pmin>/g, obj, "pmin", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID.r>([\s\S]*?)<\/cim:GovHydroPID.r>/g, obj, "r", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID.td>([\s\S]*?)<\/cim:GovHydroPID.td>/g, obj, "td", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID.tf>([\s\S]*?)<\/cim:GovHydroPID.tf>/g, obj, "tf", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID.tp>([\s\S]*?)<\/cim:GovHydroPID.tp>/g, obj, "tp", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID.tt>([\s\S]*?)<\/cim:GovHydroPID.tt>/g, obj, "tt", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID.tturb>([\s\S]*?)<\/cim:GovHydroPID.tturb>/g, obj, "tturb", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID.velcl>([\s\S]*?)<\/cim:GovHydroPID.velcl>/g, obj, "velcl", base.to_float, sub, context);
            base.parse_element (/<cim:GovHydroPID.velop>([\s\S]*?)<\/cim:GovHydroPID.velop>/g, obj, "velop", base.to_float, sub, context);
            bucket = context.parsed.GovHydroPID;
            if (null == bucket)
                context.parsed.GovHydroPID = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovHydroPID (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovHydroPID", "aturb", base.from_string, fields);
            base.export_element (obj, "GovHydroPID", "bturb", base.from_string, fields);
            base.export_element (obj, "GovHydroPID", "db1", base.from_string, fields);
            base.export_element (obj, "GovHydroPID", "db2", base.from_string, fields);
            base.export_element (obj, "GovHydroPID", "eps", base.from_string, fields);
            base.export_element (obj, "GovHydroPID", "gv1", base.from_string, fields);
            base.export_element (obj, "GovHydroPID", "gv2", base.from_string, fields);
            base.export_element (obj, "GovHydroPID", "gv3", base.from_string, fields);
            base.export_element (obj, "GovHydroPID", "gv4", base.from_string, fields);
            base.export_element (obj, "GovHydroPID", "gv5", base.from_string, fields);
            base.export_element (obj, "GovHydroPID", "gv6", base.from_string, fields);
            base.export_element (obj, "GovHydroPID", "inputSignal", base.from_boolean, fields);
            base.export_element (obj, "GovHydroPID", "kd", base.from_string, fields);
            base.export_element (obj, "GovHydroPID", "kg", base.from_string, fields);
            base.export_element (obj, "GovHydroPID", "ki", base.from_string, fields);
            base.export_element (obj, "GovHydroPID", "kp", base.from_string, fields);
            base.export_element (obj, "GovHydroPID", "mwbase", base.from_string, fields);
            base.export_element (obj, "GovHydroPID", "pgv1", base.from_string, fields);
            base.export_element (obj, "GovHydroPID", "pgv2", base.from_string, fields);
            base.export_element (obj, "GovHydroPID", "pgv3", base.from_string, fields);
            base.export_element (obj, "GovHydroPID", "pgv4", base.from_string, fields);
            base.export_element (obj, "GovHydroPID", "pgv5", base.from_string, fields);
            base.export_element (obj, "GovHydroPID", "pgv6", base.from_string, fields);
            base.export_element (obj, "GovHydroPID", "pmax", base.from_string, fields);
            base.export_element (obj, "GovHydroPID", "pmin", base.from_string, fields);
            base.export_element (obj, "GovHydroPID", "r", base.from_string, fields);
            base.export_element (obj, "GovHydroPID", "td", base.from_string, fields);
            base.export_element (obj, "GovHydroPID", "tf", base.from_string, fields);
            base.export_element (obj, "GovHydroPID", "tp", base.from_string, fields);
            base.export_element (obj, "GovHydroPID", "tt", base.from_string, fields);
            base.export_element (obj, "GovHydroPID", "tturb", base.from_string, fields);
            base.export_element (obj, "GovHydroPID", "velcl", base.from_float, fields);
            base.export_element (obj, "GovHydroPID", "velop", base.from_float, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GovCT2.aset>([\s\S]*?)<\/cim:GovCT2.aset>/g, obj, "aset", base.to_float, sub, context);
            base.parse_element (/<cim:GovCT2.db>([\s\S]*?)<\/cim:GovCT2.db>/g, obj, "db", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.dm>([\s\S]*?)<\/cim:GovCT2.dm>/g, obj, "dm", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.flim1>([\s\S]*?)<\/cim:GovCT2.flim1>/g, obj, "flim1", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.flim10>([\s\S]*?)<\/cim:GovCT2.flim10>/g, obj, "flim10", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.flim2>([\s\S]*?)<\/cim:GovCT2.flim2>/g, obj, "flim2", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.flim3>([\s\S]*?)<\/cim:GovCT2.flim3>/g, obj, "flim3", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.flim4>([\s\S]*?)<\/cim:GovCT2.flim4>/g, obj, "flim4", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.flim5>([\s\S]*?)<\/cim:GovCT2.flim5>/g, obj, "flim5", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.flim6>([\s\S]*?)<\/cim:GovCT2.flim6>/g, obj, "flim6", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.flim7>([\s\S]*?)<\/cim:GovCT2.flim7>/g, obj, "flim7", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.flim8>([\s\S]*?)<\/cim:GovCT2.flim8>/g, obj, "flim8", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.flim9>([\s\S]*?)<\/cim:GovCT2.flim9>/g, obj, "flim9", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.ka>([\s\S]*?)<\/cim:GovCT2.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.kdgov>([\s\S]*?)<\/cim:GovCT2.kdgov>/g, obj, "kdgov", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.kigov>([\s\S]*?)<\/cim:GovCT2.kigov>/g, obj, "kigov", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.kiload>([\s\S]*?)<\/cim:GovCT2.kiload>/g, obj, "kiload", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.kimw>([\s\S]*?)<\/cim:GovCT2.kimw>/g, obj, "kimw", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.kpgov>([\s\S]*?)<\/cim:GovCT2.kpgov>/g, obj, "kpgov", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.kpload>([\s\S]*?)<\/cim:GovCT2.kpload>/g, obj, "kpload", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.kturb>([\s\S]*?)<\/cim:GovCT2.kturb>/g, obj, "kturb", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.ldref>([\s\S]*?)<\/cim:GovCT2.ldref>/g, obj, "ldref", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.maxerr>([\s\S]*?)<\/cim:GovCT2.maxerr>/g, obj, "maxerr", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.minerr>([\s\S]*?)<\/cim:GovCT2.minerr>/g, obj, "minerr", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.mwbase>([\s\S]*?)<\/cim:GovCT2.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.plim1>([\s\S]*?)<\/cim:GovCT2.plim1>/g, obj, "plim1", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.plim10>([\s\S]*?)<\/cim:GovCT2.plim10>/g, obj, "plim10", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.plim2>([\s\S]*?)<\/cim:GovCT2.plim2>/g, obj, "plim2", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.plim3>([\s\S]*?)<\/cim:GovCT2.plim3>/g, obj, "plim3", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.plim4>([\s\S]*?)<\/cim:GovCT2.plim4>/g, obj, "plim4", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.plim5>([\s\S]*?)<\/cim:GovCT2.plim5>/g, obj, "plim5", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.plim6>([\s\S]*?)<\/cim:GovCT2.plim6>/g, obj, "plim6", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.plim7>([\s\S]*?)<\/cim:GovCT2.plim7>/g, obj, "plim7", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.plim8>([\s\S]*?)<\/cim:GovCT2.plim8>/g, obj, "plim8", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.plim9>([\s\S]*?)<\/cim:GovCT2.plim9>/g, obj, "plim9", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.prate>([\s\S]*?)<\/cim:GovCT2.prate>/g, obj, "prate", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.r>([\s\S]*?)<\/cim:GovCT2.r>/g, obj, "r", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.rclose>([\s\S]*?)<\/cim:GovCT2.rclose>/g, obj, "rclose", base.to_float, sub, context);
            base.parse_element (/<cim:GovCT2.rdown>([\s\S]*?)<\/cim:GovCT2.rdown>/g, obj, "rdown", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.ropen>([\s\S]*?)<\/cim:GovCT2.ropen>/g, obj, "ropen", base.to_float, sub, context);
            base.parse_element (/<cim:GovCT2.rselect>([\s\S]*?)<\/cim:GovCT2.rselect>/g, obj, "rselect", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.rup>([\s\S]*?)<\/cim:GovCT2.rup>/g, obj, "rup", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.ta>([\s\S]*?)<\/cim:GovCT2.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.tact>([\s\S]*?)<\/cim:GovCT2.tact>/g, obj, "tact", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.tb>([\s\S]*?)<\/cim:GovCT2.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.tc>([\s\S]*?)<\/cim:GovCT2.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.tdgov>([\s\S]*?)<\/cim:GovCT2.tdgov>/g, obj, "tdgov", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.teng>([\s\S]*?)<\/cim:GovCT2.teng>/g, obj, "teng", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.tfload>([\s\S]*?)<\/cim:GovCT2.tfload>/g, obj, "tfload", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.tpelec>([\s\S]*?)<\/cim:GovCT2.tpelec>/g, obj, "tpelec", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.tsa>([\s\S]*?)<\/cim:GovCT2.tsa>/g, obj, "tsa", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.tsb>([\s\S]*?)<\/cim:GovCT2.tsb>/g, obj, "tsb", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.vmax>([\s\S]*?)<\/cim:GovCT2.vmax>/g, obj, "vmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.vmin>([\s\S]*?)<\/cim:GovCT2.vmin>/g, obj, "vmin", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.wfnl>([\s\S]*?)<\/cim:GovCT2.wfnl>/g, obj, "wfnl", base.to_string, sub, context);
            base.parse_element (/<cim:GovCT2.wfspd>([\s\S]*?)<\/cim:GovCT2.wfspd>/g, obj, "wfspd", base.to_boolean, sub, context);
            bucket = context.parsed.GovCT2;
            if (null == bucket)
                context.parsed.GovCT2 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovCT2 (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovCT2", "aset", base.from_float, fields);
            base.export_element (obj, "GovCT2", "db", base.from_string, fields);
            base.export_element (obj, "GovCT2", "dm", base.from_string, fields);
            base.export_element (obj, "GovCT2", "flim1", base.from_string, fields);
            base.export_element (obj, "GovCT2", "flim10", base.from_string, fields);
            base.export_element (obj, "GovCT2", "flim2", base.from_string, fields);
            base.export_element (obj, "GovCT2", "flim3", base.from_string, fields);
            base.export_element (obj, "GovCT2", "flim4", base.from_string, fields);
            base.export_element (obj, "GovCT2", "flim5", base.from_string, fields);
            base.export_element (obj, "GovCT2", "flim6", base.from_string, fields);
            base.export_element (obj, "GovCT2", "flim7", base.from_string, fields);
            base.export_element (obj, "GovCT2", "flim8", base.from_string, fields);
            base.export_element (obj, "GovCT2", "flim9", base.from_string, fields);
            base.export_element (obj, "GovCT2", "ka", base.from_string, fields);
            base.export_element (obj, "GovCT2", "kdgov", base.from_string, fields);
            base.export_element (obj, "GovCT2", "kigov", base.from_string, fields);
            base.export_element (obj, "GovCT2", "kiload", base.from_string, fields);
            base.export_element (obj, "GovCT2", "kimw", base.from_string, fields);
            base.export_element (obj, "GovCT2", "kpgov", base.from_string, fields);
            base.export_element (obj, "GovCT2", "kpload", base.from_string, fields);
            base.export_element (obj, "GovCT2", "kturb", base.from_string, fields);
            base.export_element (obj, "GovCT2", "ldref", base.from_string, fields);
            base.export_element (obj, "GovCT2", "maxerr", base.from_string, fields);
            base.export_element (obj, "GovCT2", "minerr", base.from_string, fields);
            base.export_element (obj, "GovCT2", "mwbase", base.from_string, fields);
            base.export_element (obj, "GovCT2", "plim1", base.from_string, fields);
            base.export_element (obj, "GovCT2", "plim10", base.from_string, fields);
            base.export_element (obj, "GovCT2", "plim2", base.from_string, fields);
            base.export_element (obj, "GovCT2", "plim3", base.from_string, fields);
            base.export_element (obj, "GovCT2", "plim4", base.from_string, fields);
            base.export_element (obj, "GovCT2", "plim5", base.from_string, fields);
            base.export_element (obj, "GovCT2", "plim6", base.from_string, fields);
            base.export_element (obj, "GovCT2", "plim7", base.from_string, fields);
            base.export_element (obj, "GovCT2", "plim8", base.from_string, fields);
            base.export_element (obj, "GovCT2", "plim9", base.from_string, fields);
            base.export_element (obj, "GovCT2", "prate", base.from_string, fields);
            base.export_element (obj, "GovCT2", "r", base.from_string, fields);
            base.export_element (obj, "GovCT2", "rclose", base.from_float, fields);
            base.export_element (obj, "GovCT2", "rdown", base.from_string, fields);
            base.export_element (obj, "GovCT2", "ropen", base.from_float, fields);
            base.export_element (obj, "GovCT2", "rselect", base.from_string, fields);
            base.export_element (obj, "GovCT2", "rup", base.from_string, fields);
            base.export_element (obj, "GovCT2", "ta", base.from_string, fields);
            base.export_element (obj, "GovCT2", "tact", base.from_string, fields);
            base.export_element (obj, "GovCT2", "tb", base.from_string, fields);
            base.export_element (obj, "GovCT2", "tc", base.from_string, fields);
            base.export_element (obj, "GovCT2", "tdgov", base.from_string, fields);
            base.export_element (obj, "GovCT2", "teng", base.from_string, fields);
            base.export_element (obj, "GovCT2", "tfload", base.from_string, fields);
            base.export_element (obj, "GovCT2", "tpelec", base.from_string, fields);
            base.export_element (obj, "GovCT2", "tsa", base.from_string, fields);
            base.export_element (obj, "GovCT2", "tsb", base.from_string, fields);
            base.export_element (obj, "GovCT2", "vmax", base.from_string, fields);
            base.export_element (obj, "GovCT2", "vmin", base.from_string, fields);
            base.export_element (obj, "GovCT2", "wfnl", base.from_string, fields);
            base.export_element (obj, "GovCT2", "wfspd", base.from_boolean, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GovHydro2.aturb>([\s\S]*?)<\/cim:GovHydro2.aturb>/g, obj, "aturb", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro2.bturb>([\s\S]*?)<\/cim:GovHydro2.bturb>/g, obj, "bturb", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro2.db1>([\s\S]*?)<\/cim:GovHydro2.db1>/g, obj, "db1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro2.db2>([\s\S]*?)<\/cim:GovHydro2.db2>/g, obj, "db2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro2.eps>([\s\S]*?)<\/cim:GovHydro2.eps>/g, obj, "eps", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro2.gv1>([\s\S]*?)<\/cim:GovHydro2.gv1>/g, obj, "gv1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro2.gv2>([\s\S]*?)<\/cim:GovHydro2.gv2>/g, obj, "gv2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro2.gv3>([\s\S]*?)<\/cim:GovHydro2.gv3>/g, obj, "gv3", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro2.gv4>([\s\S]*?)<\/cim:GovHydro2.gv4>/g, obj, "gv4", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro2.gv5>([\s\S]*?)<\/cim:GovHydro2.gv5>/g, obj, "gv5", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro2.gv6>([\s\S]*?)<\/cim:GovHydro2.gv6>/g, obj, "gv6", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro2.kturb>([\s\S]*?)<\/cim:GovHydro2.kturb>/g, obj, "kturb", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro2.mwbase>([\s\S]*?)<\/cim:GovHydro2.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro2.pgv1>([\s\S]*?)<\/cim:GovHydro2.pgv1>/g, obj, "pgv1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro2.pgv2>([\s\S]*?)<\/cim:GovHydro2.pgv2>/g, obj, "pgv2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro2.pgv3>([\s\S]*?)<\/cim:GovHydro2.pgv3>/g, obj, "pgv3", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro2.pgv4>([\s\S]*?)<\/cim:GovHydro2.pgv4>/g, obj, "pgv4", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro2.pgv5>([\s\S]*?)<\/cim:GovHydro2.pgv5>/g, obj, "pgv5", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro2.pgv6>([\s\S]*?)<\/cim:GovHydro2.pgv6>/g, obj, "pgv6", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro2.pmax>([\s\S]*?)<\/cim:GovHydro2.pmax>/g, obj, "pmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro2.pmin>([\s\S]*?)<\/cim:GovHydro2.pmin>/g, obj, "pmin", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro2.rperm>([\s\S]*?)<\/cim:GovHydro2.rperm>/g, obj, "rperm", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro2.rtemp>([\s\S]*?)<\/cim:GovHydro2.rtemp>/g, obj, "rtemp", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro2.tg>([\s\S]*?)<\/cim:GovHydro2.tg>/g, obj, "tg", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro2.tp>([\s\S]*?)<\/cim:GovHydro2.tp>/g, obj, "tp", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro2.tr>([\s\S]*?)<\/cim:GovHydro2.tr>/g, obj, "tr", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro2.tw>([\s\S]*?)<\/cim:GovHydro2.tw>/g, obj, "tw", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro2.uc>([\s\S]*?)<\/cim:GovHydro2.uc>/g, obj, "uc", base.to_float, sub, context);
            base.parse_element (/<cim:GovHydro2.uo>([\s\S]*?)<\/cim:GovHydro2.uo>/g, obj, "uo", base.to_float, sub, context);
            bucket = context.parsed.GovHydro2;
            if (null == bucket)
                context.parsed.GovHydro2 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovHydro2 (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovHydro2", "aturb", base.from_string, fields);
            base.export_element (obj, "GovHydro2", "bturb", base.from_string, fields);
            base.export_element (obj, "GovHydro2", "db1", base.from_string, fields);
            base.export_element (obj, "GovHydro2", "db2", base.from_string, fields);
            base.export_element (obj, "GovHydro2", "eps", base.from_string, fields);
            base.export_element (obj, "GovHydro2", "gv1", base.from_string, fields);
            base.export_element (obj, "GovHydro2", "gv2", base.from_string, fields);
            base.export_element (obj, "GovHydro2", "gv3", base.from_string, fields);
            base.export_element (obj, "GovHydro2", "gv4", base.from_string, fields);
            base.export_element (obj, "GovHydro2", "gv5", base.from_string, fields);
            base.export_element (obj, "GovHydro2", "gv6", base.from_string, fields);
            base.export_element (obj, "GovHydro2", "kturb", base.from_string, fields);
            base.export_element (obj, "GovHydro2", "mwbase", base.from_string, fields);
            base.export_element (obj, "GovHydro2", "pgv1", base.from_string, fields);
            base.export_element (obj, "GovHydro2", "pgv2", base.from_string, fields);
            base.export_element (obj, "GovHydro2", "pgv3", base.from_string, fields);
            base.export_element (obj, "GovHydro2", "pgv4", base.from_string, fields);
            base.export_element (obj, "GovHydro2", "pgv5", base.from_string, fields);
            base.export_element (obj, "GovHydro2", "pgv6", base.from_string, fields);
            base.export_element (obj, "GovHydro2", "pmax", base.from_string, fields);
            base.export_element (obj, "GovHydro2", "pmin", base.from_string, fields);
            base.export_element (obj, "GovHydro2", "rperm", base.from_string, fields);
            base.export_element (obj, "GovHydro2", "rtemp", base.from_string, fields);
            base.export_element (obj, "GovHydro2", "tg", base.from_string, fields);
            base.export_element (obj, "GovHydro2", "tp", base.from_string, fields);
            base.export_element (obj, "GovHydro2", "tr", base.from_string, fields);
            base.export_element (obj, "GovHydro2", "tw", base.from_string, fields);
            base.export_element (obj, "GovHydro2", "uc", base.from_float, fields);
            base.export_element (obj, "GovHydro2", "uo", base.from_float, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GovHydroIEEE2.aturb>([\s\S]*?)<\/cim:GovHydroIEEE2.aturb>/g, obj, "aturb", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroIEEE2.bturb>([\s\S]*?)<\/cim:GovHydroIEEE2.bturb>/g, obj, "bturb", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroIEEE2.gv1>([\s\S]*?)<\/cim:GovHydroIEEE2.gv1>/g, obj, "gv1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroIEEE2.gv2>([\s\S]*?)<\/cim:GovHydroIEEE2.gv2>/g, obj, "gv2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroIEEE2.gv3>([\s\S]*?)<\/cim:GovHydroIEEE2.gv3>/g, obj, "gv3", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroIEEE2.gv4>([\s\S]*?)<\/cim:GovHydroIEEE2.gv4>/g, obj, "gv4", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroIEEE2.gv5>([\s\S]*?)<\/cim:GovHydroIEEE2.gv5>/g, obj, "gv5", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroIEEE2.gv6>([\s\S]*?)<\/cim:GovHydroIEEE2.gv6>/g, obj, "gv6", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroIEEE2.kturb>([\s\S]*?)<\/cim:GovHydroIEEE2.kturb>/g, obj, "kturb", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroIEEE2.mwbase>([\s\S]*?)<\/cim:GovHydroIEEE2.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroIEEE2.pgv1>([\s\S]*?)<\/cim:GovHydroIEEE2.pgv1>/g, obj, "pgv1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroIEEE2.pgv2>([\s\S]*?)<\/cim:GovHydroIEEE2.pgv2>/g, obj, "pgv2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroIEEE2.pgv3>([\s\S]*?)<\/cim:GovHydroIEEE2.pgv3>/g, obj, "pgv3", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroIEEE2.pgv4>([\s\S]*?)<\/cim:GovHydroIEEE2.pgv4>/g, obj, "pgv4", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroIEEE2.pgv5>([\s\S]*?)<\/cim:GovHydroIEEE2.pgv5>/g, obj, "pgv5", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroIEEE2.pgv6>([\s\S]*?)<\/cim:GovHydroIEEE2.pgv6>/g, obj, "pgv6", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroIEEE2.pmax>([\s\S]*?)<\/cim:GovHydroIEEE2.pmax>/g, obj, "pmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroIEEE2.pmin>([\s\S]*?)<\/cim:GovHydroIEEE2.pmin>/g, obj, "pmin", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroIEEE2.rperm>([\s\S]*?)<\/cim:GovHydroIEEE2.rperm>/g, obj, "rperm", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroIEEE2.rtemp>([\s\S]*?)<\/cim:GovHydroIEEE2.rtemp>/g, obj, "rtemp", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroIEEE2.tg>([\s\S]*?)<\/cim:GovHydroIEEE2.tg>/g, obj, "tg", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroIEEE2.tp>([\s\S]*?)<\/cim:GovHydroIEEE2.tp>/g, obj, "tp", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroIEEE2.tr>([\s\S]*?)<\/cim:GovHydroIEEE2.tr>/g, obj, "tr", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroIEEE2.tw>([\s\S]*?)<\/cim:GovHydroIEEE2.tw>/g, obj, "tw", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroIEEE2.uc>([\s\S]*?)<\/cim:GovHydroIEEE2.uc>/g, obj, "uc", base.to_float, sub, context);
            base.parse_element (/<cim:GovHydroIEEE2.uo>([\s\S]*?)<\/cim:GovHydroIEEE2.uo>/g, obj, "uo", base.to_float, sub, context);
            bucket = context.parsed.GovHydroIEEE2;
            if (null == bucket)
                context.parsed.GovHydroIEEE2 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovHydroIEEE2 (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovHydroIEEE2", "aturb", base.from_string, fields);
            base.export_element (obj, "GovHydroIEEE2", "bturb", base.from_string, fields);
            base.export_element (obj, "GovHydroIEEE2", "gv1", base.from_string, fields);
            base.export_element (obj, "GovHydroIEEE2", "gv2", base.from_string, fields);
            base.export_element (obj, "GovHydroIEEE2", "gv3", base.from_string, fields);
            base.export_element (obj, "GovHydroIEEE2", "gv4", base.from_string, fields);
            base.export_element (obj, "GovHydroIEEE2", "gv5", base.from_string, fields);
            base.export_element (obj, "GovHydroIEEE2", "gv6", base.from_string, fields);
            base.export_element (obj, "GovHydroIEEE2", "kturb", base.from_string, fields);
            base.export_element (obj, "GovHydroIEEE2", "mwbase", base.from_string, fields);
            base.export_element (obj, "GovHydroIEEE2", "pgv1", base.from_string, fields);
            base.export_element (obj, "GovHydroIEEE2", "pgv2", base.from_string, fields);
            base.export_element (obj, "GovHydroIEEE2", "pgv3", base.from_string, fields);
            base.export_element (obj, "GovHydroIEEE2", "pgv4", base.from_string, fields);
            base.export_element (obj, "GovHydroIEEE2", "pgv5", base.from_string, fields);
            base.export_element (obj, "GovHydroIEEE2", "pgv6", base.from_string, fields);
            base.export_element (obj, "GovHydroIEEE2", "pmax", base.from_string, fields);
            base.export_element (obj, "GovHydroIEEE2", "pmin", base.from_string, fields);
            base.export_element (obj, "GovHydroIEEE2", "rperm", base.from_string, fields);
            base.export_element (obj, "GovHydroIEEE2", "rtemp", base.from_string, fields);
            base.export_element (obj, "GovHydroIEEE2", "tg", base.from_string, fields);
            base.export_element (obj, "GovHydroIEEE2", "tp", base.from_string, fields);
            base.export_element (obj, "GovHydroIEEE2", "tr", base.from_string, fields);
            base.export_element (obj, "GovHydroIEEE2", "tw", base.from_string, fields);
            base.export_element (obj, "GovHydroIEEE2", "uc", base.from_float, fields);
            base.export_element (obj, "GovHydroIEEE2", "uo", base.from_float, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GovHydroWPID.d>([\s\S]*?)<\/cim:GovHydroWPID.d>/g, obj, "d", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWPID.gatmax>([\s\S]*?)<\/cim:GovHydroWPID.gatmax>/g, obj, "gatmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWPID.gatmin>([\s\S]*?)<\/cim:GovHydroWPID.gatmin>/g, obj, "gatmin", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWPID.gv1>([\s\S]*?)<\/cim:GovHydroWPID.gv1>/g, obj, "gv1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWPID.gv2>([\s\S]*?)<\/cim:GovHydroWPID.gv2>/g, obj, "gv2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWPID.gv3>([\s\S]*?)<\/cim:GovHydroWPID.gv3>/g, obj, "gv3", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWPID.kd>([\s\S]*?)<\/cim:GovHydroWPID.kd>/g, obj, "kd", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWPID.ki>([\s\S]*?)<\/cim:GovHydroWPID.ki>/g, obj, "ki", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWPID.kp>([\s\S]*?)<\/cim:GovHydroWPID.kp>/g, obj, "kp", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWPID.mwbase>([\s\S]*?)<\/cim:GovHydroWPID.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWPID.pgv1>([\s\S]*?)<\/cim:GovHydroWPID.pgv1>/g, obj, "pgv1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWPID.pgv2>([\s\S]*?)<\/cim:GovHydroWPID.pgv2>/g, obj, "pgv2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWPID.pgv3>([\s\S]*?)<\/cim:GovHydroWPID.pgv3>/g, obj, "pgv3", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWPID.pmax>([\s\S]*?)<\/cim:GovHydroWPID.pmax>/g, obj, "pmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWPID.pmin>([\s\S]*?)<\/cim:GovHydroWPID.pmin>/g, obj, "pmin", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWPID.reg>([\s\S]*?)<\/cim:GovHydroWPID.reg>/g, obj, "reg", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWPID.ta>([\s\S]*?)<\/cim:GovHydroWPID.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWPID.tb>([\s\S]*?)<\/cim:GovHydroWPID.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWPID.treg>([\s\S]*?)<\/cim:GovHydroWPID.treg>/g, obj, "treg", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWPID.tw>([\s\S]*?)<\/cim:GovHydroWPID.tw>/g, obj, "tw", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWPID.velmax>([\s\S]*?)<\/cim:GovHydroWPID.velmax>/g, obj, "velmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroWPID.velmin>([\s\S]*?)<\/cim:GovHydroWPID.velmin>/g, obj, "velmin", base.to_string, sub, context);
            bucket = context.parsed.GovHydroWPID;
            if (null == bucket)
                context.parsed.GovHydroWPID = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovHydroWPID (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovHydroWPID", "d", base.from_string, fields);
            base.export_element (obj, "GovHydroWPID", "gatmax", base.from_string, fields);
            base.export_element (obj, "GovHydroWPID", "gatmin", base.from_string, fields);
            base.export_element (obj, "GovHydroWPID", "gv1", base.from_string, fields);
            base.export_element (obj, "GovHydroWPID", "gv2", base.from_string, fields);
            base.export_element (obj, "GovHydroWPID", "gv3", base.from_string, fields);
            base.export_element (obj, "GovHydroWPID", "kd", base.from_string, fields);
            base.export_element (obj, "GovHydroWPID", "ki", base.from_string, fields);
            base.export_element (obj, "GovHydroWPID", "kp", base.from_string, fields);
            base.export_element (obj, "GovHydroWPID", "mwbase", base.from_string, fields);
            base.export_element (obj, "GovHydroWPID", "pgv1", base.from_string, fields);
            base.export_element (obj, "GovHydroWPID", "pgv2", base.from_string, fields);
            base.export_element (obj, "GovHydroWPID", "pgv3", base.from_string, fields);
            base.export_element (obj, "GovHydroWPID", "pmax", base.from_string, fields);
            base.export_element (obj, "GovHydroWPID", "pmin", base.from_string, fields);
            base.export_element (obj, "GovHydroWPID", "reg", base.from_string, fields);
            base.export_element (obj, "GovHydroWPID", "ta", base.from_string, fields);
            base.export_element (obj, "GovHydroWPID", "tb", base.from_string, fields);
            base.export_element (obj, "GovHydroWPID", "treg", base.from_string, fields);
            base.export_element (obj, "GovHydroWPID", "tw", base.from_string, fields);
            base.export_element (obj, "GovHydroWPID", "velmax", base.from_string, fields);
            base.export_element (obj, "GovHydroWPID", "velmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GovSteamFV4.cpsmn>([\s\S]*?)<\/cim:GovSteamFV4.cpsmn>/g, obj, "cpsmn", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.cpsmx>([\s\S]*?)<\/cim:GovSteamFV4.cpsmx>/g, obj, "cpsmx", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.crmn>([\s\S]*?)<\/cim:GovSteamFV4.crmn>/g, obj, "crmn", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.crmx>([\s\S]*?)<\/cim:GovSteamFV4.crmx>/g, obj, "crmx", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.kdc>([\s\S]*?)<\/cim:GovSteamFV4.kdc>/g, obj, "kdc", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.kf1>([\s\S]*?)<\/cim:GovSteamFV4.kf1>/g, obj, "kf1", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.kf3>([\s\S]*?)<\/cim:GovSteamFV4.kf3>/g, obj, "kf3", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.khp>([\s\S]*?)<\/cim:GovSteamFV4.khp>/g, obj, "khp", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.kic>([\s\S]*?)<\/cim:GovSteamFV4.kic>/g, obj, "kic", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.kip>([\s\S]*?)<\/cim:GovSteamFV4.kip>/g, obj, "kip", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.kit>([\s\S]*?)<\/cim:GovSteamFV4.kit>/g, obj, "kit", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.kmp1>([\s\S]*?)<\/cim:GovSteamFV4.kmp1>/g, obj, "kmp1", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.kmp2>([\s\S]*?)<\/cim:GovSteamFV4.kmp2>/g, obj, "kmp2", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.kpc>([\s\S]*?)<\/cim:GovSteamFV4.kpc>/g, obj, "kpc", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.kpp>([\s\S]*?)<\/cim:GovSteamFV4.kpp>/g, obj, "kpp", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.kpt>([\s\S]*?)<\/cim:GovSteamFV4.kpt>/g, obj, "kpt", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.krc>([\s\S]*?)<\/cim:GovSteamFV4.krc>/g, obj, "krc", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.ksh>([\s\S]*?)<\/cim:GovSteamFV4.ksh>/g, obj, "ksh", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.lpi>([\s\S]*?)<\/cim:GovSteamFV4.lpi>/g, obj, "lpi", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.lps>([\s\S]*?)<\/cim:GovSteamFV4.lps>/g, obj, "lps", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.mnef>([\s\S]*?)<\/cim:GovSteamFV4.mnef>/g, obj, "mnef", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.mxef>([\s\S]*?)<\/cim:GovSteamFV4.mxef>/g, obj, "mxef", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.pr1>([\s\S]*?)<\/cim:GovSteamFV4.pr1>/g, obj, "pr1", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.pr2>([\s\S]*?)<\/cim:GovSteamFV4.pr2>/g, obj, "pr2", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.psmn>([\s\S]*?)<\/cim:GovSteamFV4.psmn>/g, obj, "psmn", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.rsmimn>([\s\S]*?)<\/cim:GovSteamFV4.rsmimn>/g, obj, "rsmimn", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.rsmimx>([\s\S]*?)<\/cim:GovSteamFV4.rsmimx>/g, obj, "rsmimx", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.rvgmn>([\s\S]*?)<\/cim:GovSteamFV4.rvgmn>/g, obj, "rvgmn", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.rvgmx>([\s\S]*?)<\/cim:GovSteamFV4.rvgmx>/g, obj, "rvgmx", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.srmn>([\s\S]*?)<\/cim:GovSteamFV4.srmn>/g, obj, "srmn", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.srmx>([\s\S]*?)<\/cim:GovSteamFV4.srmx>/g, obj, "srmx", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.srsmp>([\s\S]*?)<\/cim:GovSteamFV4.srsmp>/g, obj, "srsmp", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.svmn>([\s\S]*?)<\/cim:GovSteamFV4.svmn>/g, obj, "svmn", base.to_float, sub, context);
            base.parse_element (/<cim:GovSteamFV4.svmx>([\s\S]*?)<\/cim:GovSteamFV4.svmx>/g, obj, "svmx", base.to_float, sub, context);
            base.parse_element (/<cim:GovSteamFV4.ta>([\s\S]*?)<\/cim:GovSteamFV4.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.tam>([\s\S]*?)<\/cim:GovSteamFV4.tam>/g, obj, "tam", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.tc>([\s\S]*?)<\/cim:GovSteamFV4.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.tcm>([\s\S]*?)<\/cim:GovSteamFV4.tcm>/g, obj, "tcm", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.tdc>([\s\S]*?)<\/cim:GovSteamFV4.tdc>/g, obj, "tdc", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.tf1>([\s\S]*?)<\/cim:GovSteamFV4.tf1>/g, obj, "tf1", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.tf2>([\s\S]*?)<\/cim:GovSteamFV4.tf2>/g, obj, "tf2", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.thp>([\s\S]*?)<\/cim:GovSteamFV4.thp>/g, obj, "thp", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.tmp>([\s\S]*?)<\/cim:GovSteamFV4.tmp>/g, obj, "tmp", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.trh>([\s\S]*?)<\/cim:GovSteamFV4.trh>/g, obj, "trh", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.tv>([\s\S]*?)<\/cim:GovSteamFV4.tv>/g, obj, "tv", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.ty>([\s\S]*?)<\/cim:GovSteamFV4.ty>/g, obj, "ty", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.y>([\s\S]*?)<\/cim:GovSteamFV4.y>/g, obj, "y", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.yhpmn>([\s\S]*?)<\/cim:GovSteamFV4.yhpmn>/g, obj, "yhpmn", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.yhpmx>([\s\S]*?)<\/cim:GovSteamFV4.yhpmx>/g, obj, "yhpmx", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.ympmn>([\s\S]*?)<\/cim:GovSteamFV4.ympmn>/g, obj, "ympmn", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamFV4.ympmx>([\s\S]*?)<\/cim:GovSteamFV4.ympmx>/g, obj, "ympmx", base.to_string, sub, context);
            bucket = context.parsed.GovSteamFV4;
            if (null == bucket)
                context.parsed.GovSteamFV4 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovSteamFV4 (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovSteamFV4", "cpsmn", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "cpsmx", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "crmn", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "crmx", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "kdc", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "kf1", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "kf3", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "khp", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "kic", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "kip", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "kit", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "kmp1", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "kmp2", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "kpc", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "kpp", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "kpt", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "krc", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "ksh", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "lpi", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "lps", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "mnef", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "mxef", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "pr1", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "pr2", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "psmn", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "rsmimn", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "rsmimx", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "rvgmn", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "rvgmx", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "srmn", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "srmx", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "srsmp", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "svmn", base.from_float, fields);
            base.export_element (obj, "GovSteamFV4", "svmx", base.from_float, fields);
            base.export_element (obj, "GovSteamFV4", "ta", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "tam", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "tc", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "tcm", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "tdc", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "tf1", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "tf2", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "thp", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "tmp", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "trh", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "tv", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "ty", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "y", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "yhpmn", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "yhpmx", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "ympmn", base.from_string, fields);
            base.export_element (obj, "GovSteamFV4", "ympmx", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GovHydroPID2.atw>([\s\S]*?)<\/cim:GovHydroPID2.atw>/g, obj, "atw", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID2.d>([\s\S]*?)<\/cim:GovHydroPID2.d>/g, obj, "d", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID2.feedbackSignal>([\s\S]*?)<\/cim:GovHydroPID2.feedbackSignal>/g, obj, "feedbackSignal", base.to_boolean, sub, context);
            base.parse_element (/<cim:GovHydroPID2.g0>([\s\S]*?)<\/cim:GovHydroPID2.g0>/g, obj, "g0", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID2.g1>([\s\S]*?)<\/cim:GovHydroPID2.g1>/g, obj, "g1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID2.g2>([\s\S]*?)<\/cim:GovHydroPID2.g2>/g, obj, "g2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID2.gmax>([\s\S]*?)<\/cim:GovHydroPID2.gmax>/g, obj, "gmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID2.gmin>([\s\S]*?)<\/cim:GovHydroPID2.gmin>/g, obj, "gmin", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID2.kd>([\s\S]*?)<\/cim:GovHydroPID2.kd>/g, obj, "kd", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID2.ki>([\s\S]*?)<\/cim:GovHydroPID2.ki>/g, obj, "ki", base.to_float, sub, context);
            base.parse_element (/<cim:GovHydroPID2.kp>([\s\S]*?)<\/cim:GovHydroPID2.kp>/g, obj, "kp", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID2.mwbase>([\s\S]*?)<\/cim:GovHydroPID2.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID2.p1>([\s\S]*?)<\/cim:GovHydroPID2.p1>/g, obj, "p1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID2.p2>([\s\S]*?)<\/cim:GovHydroPID2.p2>/g, obj, "p2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID2.p3>([\s\S]*?)<\/cim:GovHydroPID2.p3>/g, obj, "p3", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID2.rperm>([\s\S]*?)<\/cim:GovHydroPID2.rperm>/g, obj, "rperm", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID2.ta>([\s\S]*?)<\/cim:GovHydroPID2.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID2.tb>([\s\S]*?)<\/cim:GovHydroPID2.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID2.treg>([\s\S]*?)<\/cim:GovHydroPID2.treg>/g, obj, "treg", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID2.tw>([\s\S]*?)<\/cim:GovHydroPID2.tw>/g, obj, "tw", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydroPID2.velmax>([\s\S]*?)<\/cim:GovHydroPID2.velmax>/g, obj, "velmax", base.to_float, sub, context);
            base.parse_element (/<cim:GovHydroPID2.velmin>([\s\S]*?)<\/cim:GovHydroPID2.velmin>/g, obj, "velmin", base.to_float, sub, context);
            bucket = context.parsed.GovHydroPID2;
            if (null == bucket)
                context.parsed.GovHydroPID2 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovHydroPID2 (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovHydroPID2", "atw", base.from_string, fields);
            base.export_element (obj, "GovHydroPID2", "d", base.from_string, fields);
            base.export_element (obj, "GovHydroPID2", "feedbackSignal", base.from_boolean, fields);
            base.export_element (obj, "GovHydroPID2", "g0", base.from_string, fields);
            base.export_element (obj, "GovHydroPID2", "g1", base.from_string, fields);
            base.export_element (obj, "GovHydroPID2", "g2", base.from_string, fields);
            base.export_element (obj, "GovHydroPID2", "gmax", base.from_string, fields);
            base.export_element (obj, "GovHydroPID2", "gmin", base.from_string, fields);
            base.export_element (obj, "GovHydroPID2", "kd", base.from_string, fields);
            base.export_element (obj, "GovHydroPID2", "ki", base.from_float, fields);
            base.export_element (obj, "GovHydroPID2", "kp", base.from_string, fields);
            base.export_element (obj, "GovHydroPID2", "mwbase", base.from_string, fields);
            base.export_element (obj, "GovHydroPID2", "p1", base.from_string, fields);
            base.export_element (obj, "GovHydroPID2", "p2", base.from_string, fields);
            base.export_element (obj, "GovHydroPID2", "p3", base.from_string, fields);
            base.export_element (obj, "GovHydroPID2", "rperm", base.from_string, fields);
            base.export_element (obj, "GovHydroPID2", "ta", base.from_string, fields);
            base.export_element (obj, "GovHydroPID2", "tb", base.from_string, fields);
            base.export_element (obj, "GovHydroPID2", "treg", base.from_string, fields);
            base.export_element (obj, "GovHydroPID2", "tw", base.from_string, fields);
            base.export_element (obj, "GovHydroPID2", "velmax", base.from_float, fields);
            base.export_element (obj, "GovHydroPID2", "velmin", base.from_float, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GovGAST.at>([\s\S]*?)<\/cim:GovGAST.at>/g, obj, "at", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST.dturb>([\s\S]*?)<\/cim:GovGAST.dturb>/g, obj, "dturb", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST.kt>([\s\S]*?)<\/cim:GovGAST.kt>/g, obj, "kt", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST.mwbase>([\s\S]*?)<\/cim:GovGAST.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST.r>([\s\S]*?)<\/cim:GovGAST.r>/g, obj, "r", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST.t1>([\s\S]*?)<\/cim:GovGAST.t1>/g, obj, "t1", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST.t2>([\s\S]*?)<\/cim:GovGAST.t2>/g, obj, "t2", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST.t3>([\s\S]*?)<\/cim:GovGAST.t3>/g, obj, "t3", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST.vmax>([\s\S]*?)<\/cim:GovGAST.vmax>/g, obj, "vmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovGAST.vmin>([\s\S]*?)<\/cim:GovGAST.vmin>/g, obj, "vmin", base.to_string, sub, context);
            bucket = context.parsed.GovGAST;
            if (null == bucket)
                context.parsed.GovGAST = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovGAST (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovGAST", "at", base.from_string, fields);
            base.export_element (obj, "GovGAST", "dturb", base.from_string, fields);
            base.export_element (obj, "GovGAST", "kt", base.from_string, fields);
            base.export_element (obj, "GovGAST", "mwbase", base.from_string, fields);
            base.export_element (obj, "GovGAST", "r", base.from_string, fields);
            base.export_element (obj, "GovGAST", "t1", base.from_string, fields);
            base.export_element (obj, "GovGAST", "t2", base.from_string, fields);
            base.export_element (obj, "GovGAST", "t3", base.from_string, fields);
            base.export_element (obj, "GovGAST", "vmax", base.from_string, fields);
            base.export_element (obj, "GovGAST", "vmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GovSteamEU.chc>([\s\S]*?)<\/cim:GovSteamEU.chc>/g, obj, "chc", base.to_float, sub, context);
            base.parse_element (/<cim:GovSteamEU.cho>([\s\S]*?)<\/cim:GovSteamEU.cho>/g, obj, "cho", base.to_float, sub, context);
            base.parse_element (/<cim:GovSteamEU.cic>([\s\S]*?)<\/cim:GovSteamEU.cic>/g, obj, "cic", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.cio>([\s\S]*?)<\/cim:GovSteamEU.cio>/g, obj, "cio", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.db1>([\s\S]*?)<\/cim:GovSteamEU.db1>/g, obj, "db1", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.db2>([\s\S]*?)<\/cim:GovSteamEU.db2>/g, obj, "db2", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.hhpmax>([\s\S]*?)<\/cim:GovSteamEU.hhpmax>/g, obj, "hhpmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.ke>([\s\S]*?)<\/cim:GovSteamEU.ke>/g, obj, "ke", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.kfcor>([\s\S]*?)<\/cim:GovSteamEU.kfcor>/g, obj, "kfcor", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.khp>([\s\S]*?)<\/cim:GovSteamEU.khp>/g, obj, "khp", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.klp>([\s\S]*?)<\/cim:GovSteamEU.klp>/g, obj, "klp", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.kwcor>([\s\S]*?)<\/cim:GovSteamEU.kwcor>/g, obj, "kwcor", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.mwbase>([\s\S]*?)<\/cim:GovSteamEU.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.pmax>([\s\S]*?)<\/cim:GovSteamEU.pmax>/g, obj, "pmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.prhmax>([\s\S]*?)<\/cim:GovSteamEU.prhmax>/g, obj, "prhmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.simx>([\s\S]*?)<\/cim:GovSteamEU.simx>/g, obj, "simx", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.tb>([\s\S]*?)<\/cim:GovSteamEU.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.tdp>([\s\S]*?)<\/cim:GovSteamEU.tdp>/g, obj, "tdp", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.ten>([\s\S]*?)<\/cim:GovSteamEU.ten>/g, obj, "ten", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.tf>([\s\S]*?)<\/cim:GovSteamEU.tf>/g, obj, "tf", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.tfp>([\s\S]*?)<\/cim:GovSteamEU.tfp>/g, obj, "tfp", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.thp>([\s\S]*?)<\/cim:GovSteamEU.thp>/g, obj, "thp", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.tip>([\s\S]*?)<\/cim:GovSteamEU.tip>/g, obj, "tip", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.tlp>([\s\S]*?)<\/cim:GovSteamEU.tlp>/g, obj, "tlp", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.tp>([\s\S]*?)<\/cim:GovSteamEU.tp>/g, obj, "tp", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.trh>([\s\S]*?)<\/cim:GovSteamEU.trh>/g, obj, "trh", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.tvhp>([\s\S]*?)<\/cim:GovSteamEU.tvhp>/g, obj, "tvhp", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.tvip>([\s\S]*?)<\/cim:GovSteamEU.tvip>/g, obj, "tvip", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.tw>([\s\S]*?)<\/cim:GovSteamEU.tw>/g, obj, "tw", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.wfmax>([\s\S]*?)<\/cim:GovSteamEU.wfmax>/g, obj, "wfmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.wfmin>([\s\S]*?)<\/cim:GovSteamEU.wfmin>/g, obj, "wfmin", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.wmax1>([\s\S]*?)<\/cim:GovSteamEU.wmax1>/g, obj, "wmax1", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.wmax2>([\s\S]*?)<\/cim:GovSteamEU.wmax2>/g, obj, "wmax2", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.wwmax>([\s\S]*?)<\/cim:GovSteamEU.wwmax>/g, obj, "wwmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamEU.wwmin>([\s\S]*?)<\/cim:GovSteamEU.wwmin>/g, obj, "wwmin", base.to_string, sub, context);
            bucket = context.parsed.GovSteamEU;
            if (null == bucket)
                context.parsed.GovSteamEU = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovSteamEU (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovSteamEU", "chc", base.from_float, fields);
            base.export_element (obj, "GovSteamEU", "cho", base.from_float, fields);
            base.export_element (obj, "GovSteamEU", "cic", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "cio", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "db1", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "db2", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "hhpmax", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "ke", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "kfcor", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "khp", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "klp", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "kwcor", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "mwbase", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "pmax", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "prhmax", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "simx", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "tb", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "tdp", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "ten", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "tf", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "tfp", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "thp", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "tip", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "tlp", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "tp", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "trh", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "tvhp", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "tvip", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "tw", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "wfmax", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "wfmin", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "wmax1", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "wmax2", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "wwmax", base.from_string, fields);
            base.export_element (obj, "GovSteamEU", "wwmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GovHydro3.at>([\s\S]*?)<\/cim:GovHydro3.at>/g, obj, "at", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.db1>([\s\S]*?)<\/cim:GovHydro3.db1>/g, obj, "db1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.db2>([\s\S]*?)<\/cim:GovHydro3.db2>/g, obj, "db2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.dturb>([\s\S]*?)<\/cim:GovHydro3.dturb>/g, obj, "dturb", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.eps>([\s\S]*?)<\/cim:GovHydro3.eps>/g, obj, "eps", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.governorControl>([\s\S]*?)<\/cim:GovHydro3.governorControl>/g, obj, "governorControl", base.to_boolean, sub, context);
            base.parse_element (/<cim:GovHydro3.gv1>([\s\S]*?)<\/cim:GovHydro3.gv1>/g, obj, "gv1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.gv2>([\s\S]*?)<\/cim:GovHydro3.gv2>/g, obj, "gv2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.gv3>([\s\S]*?)<\/cim:GovHydro3.gv3>/g, obj, "gv3", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.gv4>([\s\S]*?)<\/cim:GovHydro3.gv4>/g, obj, "gv4", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.gv5>([\s\S]*?)<\/cim:GovHydro3.gv5>/g, obj, "gv5", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.gv6>([\s\S]*?)<\/cim:GovHydro3.gv6>/g, obj, "gv6", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.h0>([\s\S]*?)<\/cim:GovHydro3.h0>/g, obj, "h0", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.k1>([\s\S]*?)<\/cim:GovHydro3.k1>/g, obj, "k1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.k2>([\s\S]*?)<\/cim:GovHydro3.k2>/g, obj, "k2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.kg>([\s\S]*?)<\/cim:GovHydro3.kg>/g, obj, "kg", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.ki>([\s\S]*?)<\/cim:GovHydro3.ki>/g, obj, "ki", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.mwbase>([\s\S]*?)<\/cim:GovHydro3.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.pgv1>([\s\S]*?)<\/cim:GovHydro3.pgv1>/g, obj, "pgv1", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.pgv2>([\s\S]*?)<\/cim:GovHydro3.pgv2>/g, obj, "pgv2", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.pgv3>([\s\S]*?)<\/cim:GovHydro3.pgv3>/g, obj, "pgv3", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.pgv4>([\s\S]*?)<\/cim:GovHydro3.pgv4>/g, obj, "pgv4", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.pgv5>([\s\S]*?)<\/cim:GovHydro3.pgv5>/g, obj, "pgv5", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.pgv6>([\s\S]*?)<\/cim:GovHydro3.pgv6>/g, obj, "pgv6", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.pmax>([\s\S]*?)<\/cim:GovHydro3.pmax>/g, obj, "pmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.pmin>([\s\S]*?)<\/cim:GovHydro3.pmin>/g, obj, "pmin", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.qnl>([\s\S]*?)<\/cim:GovHydro3.qnl>/g, obj, "qnl", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.relec>([\s\S]*?)<\/cim:GovHydro3.relec>/g, obj, "relec", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.rgate>([\s\S]*?)<\/cim:GovHydro3.rgate>/g, obj, "rgate", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.td>([\s\S]*?)<\/cim:GovHydro3.td>/g, obj, "td", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.tf>([\s\S]*?)<\/cim:GovHydro3.tf>/g, obj, "tf", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.tp>([\s\S]*?)<\/cim:GovHydro3.tp>/g, obj, "tp", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.tt>([\s\S]*?)<\/cim:GovHydro3.tt>/g, obj, "tt", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.tw>([\s\S]*?)<\/cim:GovHydro3.tw>/g, obj, "tw", base.to_string, sub, context);
            base.parse_element (/<cim:GovHydro3.velcl>([\s\S]*?)<\/cim:GovHydro3.velcl>/g, obj, "velcl", base.to_float, sub, context);
            base.parse_element (/<cim:GovHydro3.velop>([\s\S]*?)<\/cim:GovHydro3.velop>/g, obj, "velop", base.to_float, sub, context);
            bucket = context.parsed.GovHydro3;
            if (null == bucket)
                context.parsed.GovHydro3 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovHydro3 (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovHydro3", "at", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "db1", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "db2", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "dturb", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "eps", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "governorControl", base.from_boolean, fields);
            base.export_element (obj, "GovHydro3", "gv1", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "gv2", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "gv3", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "gv4", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "gv5", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "gv6", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "h0", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "k1", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "k2", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "kg", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "ki", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "mwbase", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "pgv1", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "pgv2", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "pgv3", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "pgv4", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "pgv5", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "pgv6", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "pmax", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "pmin", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "qnl", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "relec", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "rgate", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "td", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "tf", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "tp", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "tt", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "tw", base.from_string, fields);
            base.export_element (obj, "GovHydro3", "velcl", base.from_float, fields);
            base.export_element (obj, "GovHydro3", "velop", base.from_float, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GovSteamIEEE1.k>([\s\S]*?)<\/cim:GovSteamIEEE1.k>/g, obj, "k", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamIEEE1.k1>([\s\S]*?)<\/cim:GovSteamIEEE1.k1>/g, obj, "k1", base.to_float, sub, context);
            base.parse_element (/<cim:GovSteamIEEE1.k2>([\s\S]*?)<\/cim:GovSteamIEEE1.k2>/g, obj, "k2", base.to_float, sub, context);
            base.parse_element (/<cim:GovSteamIEEE1.k3>([\s\S]*?)<\/cim:GovSteamIEEE1.k3>/g, obj, "k3", base.to_float, sub, context);
            base.parse_element (/<cim:GovSteamIEEE1.k4>([\s\S]*?)<\/cim:GovSteamIEEE1.k4>/g, obj, "k4", base.to_float, sub, context);
            base.parse_element (/<cim:GovSteamIEEE1.k5>([\s\S]*?)<\/cim:GovSteamIEEE1.k5>/g, obj, "k5", base.to_float, sub, context);
            base.parse_element (/<cim:GovSteamIEEE1.k6>([\s\S]*?)<\/cim:GovSteamIEEE1.k6>/g, obj, "k6", base.to_float, sub, context);
            base.parse_element (/<cim:GovSteamIEEE1.k7>([\s\S]*?)<\/cim:GovSteamIEEE1.k7>/g, obj, "k7", base.to_float, sub, context);
            base.parse_element (/<cim:GovSteamIEEE1.k8>([\s\S]*?)<\/cim:GovSteamIEEE1.k8>/g, obj, "k8", base.to_float, sub, context);
            base.parse_element (/<cim:GovSteamIEEE1.mwbase>([\s\S]*?)<\/cim:GovSteamIEEE1.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamIEEE1.pmax>([\s\S]*?)<\/cim:GovSteamIEEE1.pmax>/g, obj, "pmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamIEEE1.pmin>([\s\S]*?)<\/cim:GovSteamIEEE1.pmin>/g, obj, "pmin", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamIEEE1.t1>([\s\S]*?)<\/cim:GovSteamIEEE1.t1>/g, obj, "t1", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamIEEE1.t2>([\s\S]*?)<\/cim:GovSteamIEEE1.t2>/g, obj, "t2", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamIEEE1.t3>([\s\S]*?)<\/cim:GovSteamIEEE1.t3>/g, obj, "t3", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamIEEE1.t4>([\s\S]*?)<\/cim:GovSteamIEEE1.t4>/g, obj, "t4", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamIEEE1.t5>([\s\S]*?)<\/cim:GovSteamIEEE1.t5>/g, obj, "t5", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamIEEE1.t6>([\s\S]*?)<\/cim:GovSteamIEEE1.t6>/g, obj, "t6", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamIEEE1.t7>([\s\S]*?)<\/cim:GovSteamIEEE1.t7>/g, obj, "t7", base.to_string, sub, context);
            base.parse_element (/<cim:GovSteamIEEE1.uc>([\s\S]*?)<\/cim:GovSteamIEEE1.uc>/g, obj, "uc", base.to_float, sub, context);
            base.parse_element (/<cim:GovSteamIEEE1.uo>([\s\S]*?)<\/cim:GovSteamIEEE1.uo>/g, obj, "uo", base.to_float, sub, context);
            bucket = context.parsed.GovSteamIEEE1;
            if (null == bucket)
                context.parsed.GovSteamIEEE1 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovSteamIEEE1 (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovSteamIEEE1", "k", base.from_string, fields);
            base.export_element (obj, "GovSteamIEEE1", "k1", base.from_float, fields);
            base.export_element (obj, "GovSteamIEEE1", "k2", base.from_float, fields);
            base.export_element (obj, "GovSteamIEEE1", "k3", base.from_float, fields);
            base.export_element (obj, "GovSteamIEEE1", "k4", base.from_float, fields);
            base.export_element (obj, "GovSteamIEEE1", "k5", base.from_float, fields);
            base.export_element (obj, "GovSteamIEEE1", "k6", base.from_float, fields);
            base.export_element (obj, "GovSteamIEEE1", "k7", base.from_float, fields);
            base.export_element (obj, "GovSteamIEEE1", "k8", base.from_float, fields);
            base.export_element (obj, "GovSteamIEEE1", "mwbase", base.from_string, fields);
            base.export_element (obj, "GovSteamIEEE1", "pmax", base.from_string, fields);
            base.export_element (obj, "GovSteamIEEE1", "pmin", base.from_string, fields);
            base.export_element (obj, "GovSteamIEEE1", "t1", base.from_string, fields);
            base.export_element (obj, "GovSteamIEEE1", "t2", base.from_string, fields);
            base.export_element (obj, "GovSteamIEEE1", "t3", base.from_string, fields);
            base.export_element (obj, "GovSteamIEEE1", "t4", base.from_string, fields);
            base.export_element (obj, "GovSteamIEEE1", "t5", base.from_string, fields);
            base.export_element (obj, "GovSteamIEEE1", "t6", base.from_string, fields);
            base.export_element (obj, "GovSteamIEEE1", "t7", base.from_string, fields);
            base.export_element (obj, "GovSteamIEEE1", "uc", base.from_float, fields);
            base.export_element (obj, "GovSteamIEEE1", "uo", base.from_float, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GovGASTWD.a>([\s\S]*?)<\/cim:GovGASTWD.a>/g, obj, "a", base.to_float, sub, context);
            base.parse_element (/<cim:GovGASTWD.af1>([\s\S]*?)<\/cim:GovGASTWD.af1>/g, obj, "af1", base.to_string, sub, context);
            base.parse_element (/<cim:GovGASTWD.af2>([\s\S]*?)<\/cim:GovGASTWD.af2>/g, obj, "af2", base.to_string, sub, context);
            base.parse_element (/<cim:GovGASTWD.b>([\s\S]*?)<\/cim:GovGASTWD.b>/g, obj, "b", base.to_float, sub, context);
            base.parse_element (/<cim:GovGASTWD.bf1>([\s\S]*?)<\/cim:GovGASTWD.bf1>/g, obj, "bf1", base.to_string, sub, context);
            base.parse_element (/<cim:GovGASTWD.bf2>([\s\S]*?)<\/cim:GovGASTWD.bf2>/g, obj, "bf2", base.to_string, sub, context);
            base.parse_element (/<cim:GovGASTWD.c>([\s\S]*?)<\/cim:GovGASTWD.c>/g, obj, "c", base.to_float, sub, context);
            base.parse_element (/<cim:GovGASTWD.cf2>([\s\S]*?)<\/cim:GovGASTWD.cf2>/g, obj, "cf2", base.to_string, sub, context);
            base.parse_element (/<cim:GovGASTWD.ecr>([\s\S]*?)<\/cim:GovGASTWD.ecr>/g, obj, "ecr", base.to_string, sub, context);
            base.parse_element (/<cim:GovGASTWD.etd>([\s\S]*?)<\/cim:GovGASTWD.etd>/g, obj, "etd", base.to_string, sub, context);
            base.parse_element (/<cim:GovGASTWD.k3>([\s\S]*?)<\/cim:GovGASTWD.k3>/g, obj, "k3", base.to_string, sub, context);
            base.parse_element (/<cim:GovGASTWD.k4>([\s\S]*?)<\/cim:GovGASTWD.k4>/g, obj, "k4", base.to_string, sub, context);
            base.parse_element (/<cim:GovGASTWD.k5>([\s\S]*?)<\/cim:GovGASTWD.k5>/g, obj, "k5", base.to_string, sub, context);
            base.parse_element (/<cim:GovGASTWD.k6>([\s\S]*?)<\/cim:GovGASTWD.k6>/g, obj, "k6", base.to_string, sub, context);
            base.parse_element (/<cim:GovGASTWD.kd>([\s\S]*?)<\/cim:GovGASTWD.kd>/g, obj, "kd", base.to_string, sub, context);
            base.parse_element (/<cim:GovGASTWD.kdroop>([\s\S]*?)<\/cim:GovGASTWD.kdroop>/g, obj, "kdroop", base.to_string, sub, context);
            base.parse_element (/<cim:GovGASTWD.kf>([\s\S]*?)<\/cim:GovGASTWD.kf>/g, obj, "kf", base.to_string, sub, context);
            base.parse_element (/<cim:GovGASTWD.ki>([\s\S]*?)<\/cim:GovGASTWD.ki>/g, obj, "ki", base.to_string, sub, context);
            base.parse_element (/<cim:GovGASTWD.kp>([\s\S]*?)<\/cim:GovGASTWD.kp>/g, obj, "kp", base.to_string, sub, context);
            base.parse_element (/<cim:GovGASTWD.mwbase>([\s\S]*?)<\/cim:GovGASTWD.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
            base.parse_element (/<cim:GovGASTWD.t>([\s\S]*?)<\/cim:GovGASTWD.t>/g, obj, "t", base.to_string, sub, context);
            base.parse_element (/<cim:GovGASTWD.t3>([\s\S]*?)<\/cim:GovGASTWD.t3>/g, obj, "t3", base.to_string, sub, context);
            base.parse_element (/<cim:GovGASTWD.t4>([\s\S]*?)<\/cim:GovGASTWD.t4>/g, obj, "t4", base.to_string, sub, context);
            base.parse_element (/<cim:GovGASTWD.t5>([\s\S]*?)<\/cim:GovGASTWD.t5>/g, obj, "t5", base.to_string, sub, context);
            base.parse_element (/<cim:GovGASTWD.tc>([\s\S]*?)<\/cim:GovGASTWD.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:GovGASTWD.tcd>([\s\S]*?)<\/cim:GovGASTWD.tcd>/g, obj, "tcd", base.to_string, sub, context);
            base.parse_element (/<cim:GovGASTWD.td>([\s\S]*?)<\/cim:GovGASTWD.td>/g, obj, "td", base.to_string, sub, context);
            base.parse_element (/<cim:GovGASTWD.tf>([\s\S]*?)<\/cim:GovGASTWD.tf>/g, obj, "tf", base.to_string, sub, context);
            base.parse_element (/<cim:GovGASTWD.tmax>([\s\S]*?)<\/cim:GovGASTWD.tmax>/g, obj, "tmax", base.to_string, sub, context);
            base.parse_element (/<cim:GovGASTWD.tmin>([\s\S]*?)<\/cim:GovGASTWD.tmin>/g, obj, "tmin", base.to_string, sub, context);
            base.parse_element (/<cim:GovGASTWD.tr>([\s\S]*?)<\/cim:GovGASTWD.tr>/g, obj, "tr", base.to_string, sub, context);
            base.parse_element (/<cim:GovGASTWD.trate>([\s\S]*?)<\/cim:GovGASTWD.trate>/g, obj, "trate", base.to_string, sub, context);
            base.parse_element (/<cim:GovGASTWD.tt>([\s\S]*?)<\/cim:GovGASTWD.tt>/g, obj, "tt", base.to_string, sub, context);
            bucket = context.parsed.GovGASTWD;
            if (null == bucket)
                context.parsed.GovGASTWD = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GovGASTWD (obj, exporters, full)
        {
            var fields = exporters["TurbineGovernorDynamics"](obj, exporters, false);

            base.export_element (obj, "GovGASTWD", "a", base.from_float, fields);
            base.export_element (obj, "GovGASTWD", "af1", base.from_string, fields);
            base.export_element (obj, "GovGASTWD", "af2", base.from_string, fields);
            base.export_element (obj, "GovGASTWD", "b", base.from_float, fields);
            base.export_element (obj, "GovGASTWD", "bf1", base.from_string, fields);
            base.export_element (obj, "GovGASTWD", "bf2", base.from_string, fields);
            base.export_element (obj, "GovGASTWD", "c", base.from_float, fields);
            base.export_element (obj, "GovGASTWD", "cf2", base.from_string, fields);
            base.export_element (obj, "GovGASTWD", "ecr", base.from_string, fields);
            base.export_element (obj, "GovGASTWD", "etd", base.from_string, fields);
            base.export_element (obj, "GovGASTWD", "k3", base.from_string, fields);
            base.export_element (obj, "GovGASTWD", "k4", base.from_string, fields);
            base.export_element (obj, "GovGASTWD", "k5", base.from_string, fields);
            base.export_element (obj, "GovGASTWD", "k6", base.from_string, fields);
            base.export_element (obj, "GovGASTWD", "kd", base.from_string, fields);
            base.export_element (obj, "GovGASTWD", "kdroop", base.from_string, fields);
            base.export_element (obj, "GovGASTWD", "kf", base.from_string, fields);
            base.export_element (obj, "GovGASTWD", "ki", base.from_string, fields);
            base.export_element (obj, "GovGASTWD", "kp", base.from_string, fields);
            base.export_element (obj, "GovGASTWD", "mwbase", base.from_string, fields);
            base.export_element (obj, "GovGASTWD", "t", base.from_string, fields);
            base.export_element (obj, "GovGASTWD", "t3", base.from_string, fields);
            base.export_element (obj, "GovGASTWD", "t4", base.from_string, fields);
            base.export_element (obj, "GovGASTWD", "t5", base.from_string, fields);
            base.export_element (obj, "GovGASTWD", "tc", base.from_string, fields);
            base.export_element (obj, "GovGASTWD", "tcd", base.from_string, fields);
            base.export_element (obj, "GovGASTWD", "td", base.from_string, fields);
            base.export_element (obj, "GovGASTWD", "tf", base.from_string, fields);
            base.export_element (obj, "GovGASTWD", "tmax", base.from_string, fields);
            base.export_element (obj, "GovGASTWD", "tmin", base.from_string, fields);
            base.export_element (obj, "GovGASTWD", "tr", base.from_string, fields);
            base.export_element (obj, "GovGASTWD", "trate", base.from_string, fields);
            base.export_element (obj, "GovGASTWD", "tt", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                export_FrancisGovernorControlKind: export_FrancisGovernorControlKind,
                parse_GovHydroIEEE0: parse_GovHydroIEEE0,
                parse_GovSteam1: parse_GovSteam1,
                export_DroopSignalFeedbackKind: export_DroopSignalFeedbackKind,
                parse_GovGAST2: parse_GovGAST2,
                export_GovSteam1: export_GovSteam1,
                export_TurbineGovernorDynamics: export_TurbineGovernorDynamics,
                parse_GovHydro2: parse_GovHydro2,
                parse_GovHydroIEEE2: parse_GovHydroIEEE2,
                parse_GovHydroR: parse_GovHydroR,
                parse_GovSteam0: parse_GovSteam0,
                parse_GovHydroPelton: parse_GovHydroPelton,
                parse_GovSteamSGO: parse_GovSteamSGO,
                parse_GovHydro1: parse_GovHydro1,
                parse_GovGASTWD: parse_GovGASTWD,
                export_GovHydroPelton: export_GovHydroPelton,
                parse_GovGAST1: parse_GovGAST1,
                parse_GovSteamFV4: parse_GovSteamFV4,
                export_GovGAST4: export_GovGAST4,
                export_GovHydroDD: export_GovHydroDD,
                export_GovSteamFV4: export_GovSteamFV4,
                export_GovHydro2: export_GovHydro2,
                export_GovCT1: export_GovCT1,
                export_GovGAST3: export_GovGAST3,
                parse_TurbineGovernorDynamics: parse_TurbineGovernorDynamics,
                export_GovHydroPID2: export_GovHydroPID2,
                parse_DroopSignalFeedbackKind: parse_DroopSignalFeedbackKind,
                export_GovCT2: export_GovCT2,
                export_GovSteam0: export_GovSteam0,
                export_GovSteamEU: export_GovSteamEU,
                export_GovHydroFrancis: export_GovHydroFrancis,
                export_GovGAST2: export_GovGAST2,
                export_GovGAST: export_GovGAST,
                export_GovSteamCC: export_GovSteamCC,
                export_GovSteamIEEE1: export_GovSteamIEEE1,
                parse_GovHydroWEH: parse_GovHydroWEH,
                parse_GovSteamCC: parse_GovSteamCC,
                parse_GovSteamIEEE1: parse_GovSteamIEEE1,
                export_GovHydroIEEE0: export_GovHydroIEEE0,
                export_GovGASTWD: export_GovGASTWD,
                parse_GovHydroDD: parse_GovHydroDD,
                export_GovGAST1: export_GovGAST1,
                parse_GovGAST: parse_GovGAST,
                export_GovSteamSGO: export_GovSteamSGO,
                export_GovHydro4: export_GovHydro4,
                parse_GovHydroPID: parse_GovHydroPID,
                export_GovHydro1: export_GovHydro1,
                parse_GovSteamEU: parse_GovSteamEU,
                parse_GovGAST4: parse_GovGAST4,
                parse_GovSteamFV2: parse_GovSteamFV2,
                export_GovSteamFV2: export_GovSteamFV2,
                export_GovHydroPID: export_GovHydroPID,
                parse_GovHydroWPID: parse_GovHydroWPID,
                parse_GovHydroFrancis: parse_GovHydroFrancis,
                export_GovHydroWEH: export_GovHydroWEH,
                export_GovHydroIEEE2: export_GovHydroIEEE2,
                parse_GovCT1: parse_GovCT1,
                export_GovHydroR: export_GovHydroR,
                parse_GovHydro4: parse_GovHydro4,
                parse_GovSteamFV3: parse_GovSteamFV3,
                parse_GovGAST3: parse_GovGAST3,
                export_GovHydroWPID: export_GovHydroWPID,
                export_GovSteam2: export_GovSteam2,
                parse_FrancisGovernorControlKind: parse_FrancisGovernorControlKind,
                export_GovSteamFV3: export_GovSteamFV3,
                parse_GovSteam2: parse_GovSteam2,
                parse_GovHydro3: parse_GovHydro3,
                export_GovHydro3: export_GovHydro3,
                parse_GovCT2: parse_GovCT2,
                parse_GovHydroPID2: parse_GovHydroPID2
            }
        );
    }
);