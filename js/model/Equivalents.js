define
(
    ["model/base", "model/Core"],
    /**
     * The equivalents package models equivalent networks.
     *
     */
    function (base, Core)
    {

        /**
         * A class that represents an external meshed network that has been reduced to an electrically equivalent model.
         *
         * The ConnectivityNodes contained in the equivalent are intended to reflect internal nodes of the equivalent. The boundary Connectivity nodes where the equivalent connects outside itself are NOT contained by the equivalent.
         *
         */
        function parse_EquivalentNetwork (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_ConnectivityNodeContainer (context, sub);
            obj.cls = "EquivalentNetwork";
            bucket = context.parsed.EquivalentNetwork;
            if (null == bucket)
                context.parsed.EquivalentNetwork = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_EquivalentNetwork (obj, exporters, full)
        {
            var fields = exporters["ConnectivityNodeContainer"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * This class represents equivalent injections (generation or load).
         *
         * Voltage regulation is allowed only at the point of connection.
         *
         */
        function parse_EquivalentInjection (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_EquivalentEquipment (context, sub);
            obj.cls = "EquivalentInjection";
            base.parse_element (/<cim:EquivalentInjection.maxP>([\s\S]*?)<\/cim:EquivalentInjection.maxP>/g, obj, "maxP", base.to_string, sub, context);
            base.parse_element (/<cim:EquivalentInjection.maxQ>([\s\S]*?)<\/cim:EquivalentInjection.maxQ>/g, obj, "maxQ", base.to_string, sub, context);
            base.parse_element (/<cim:EquivalentInjection.minP>([\s\S]*?)<\/cim:EquivalentInjection.minP>/g, obj, "minP", base.to_string, sub, context);
            base.parse_element (/<cim:EquivalentInjection.minQ>([\s\S]*?)<\/cim:EquivalentInjection.minQ>/g, obj, "minQ", base.to_string, sub, context);
            base.parse_element (/<cim:EquivalentInjection.r>([\s\S]*?)<\/cim:EquivalentInjection.r>/g, obj, "r", base.to_string, sub, context);
            base.parse_element (/<cim:EquivalentInjection.r0>([\s\S]*?)<\/cim:EquivalentInjection.r0>/g, obj, "r0", base.to_string, sub, context);
            base.parse_element (/<cim:EquivalentInjection.r2>([\s\S]*?)<\/cim:EquivalentInjection.r2>/g, obj, "r2", base.to_string, sub, context);
            base.parse_element (/<cim:EquivalentInjection.regulationCapability>([\s\S]*?)<\/cim:EquivalentInjection.regulationCapability>/g, obj, "regulationCapability", base.to_boolean, sub, context);
            base.parse_element (/<cim:EquivalentInjection.regulationStatus>([\s\S]*?)<\/cim:EquivalentInjection.regulationStatus>/g, obj, "regulationStatus", base.to_boolean, sub, context);
            base.parse_element (/<cim:EquivalentInjection.regulationTarget>([\s\S]*?)<\/cim:EquivalentInjection.regulationTarget>/g, obj, "regulationTarget", base.to_string, sub, context);
            base.parse_element (/<cim:EquivalentInjection.x>([\s\S]*?)<\/cim:EquivalentInjection.x>/g, obj, "x", base.to_string, sub, context);
            base.parse_element (/<cim:EquivalentInjection.x0>([\s\S]*?)<\/cim:EquivalentInjection.x0>/g, obj, "x0", base.to_string, sub, context);
            base.parse_element (/<cim:EquivalentInjection.x2>([\s\S]*?)<\/cim:EquivalentInjection.x2>/g, obj, "x2", base.to_string, sub, context);
            base.parse_element (/<cim:EquivalentInjection.p>([\s\S]*?)<\/cim:EquivalentInjection.p>/g, obj, "p", base.to_string, sub, context);
            base.parse_element (/<cim:EquivalentInjection.q>([\s\S]*?)<\/cim:EquivalentInjection.q>/g, obj, "q", base.to_string, sub, context);
            base.parse_attribute (/<cim:EquivalentInjection.ReactiveCapabilityCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReactiveCapabilityCurve", sub, context);
            bucket = context.parsed.EquivalentInjection;
            if (null == bucket)
                context.parsed.EquivalentInjection = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_EquivalentInjection (obj, exporters, full)
        {
            var fields = exporters["EquivalentEquipment"](obj, exporters, false);

            base.export_element (obj, "EquivalentInjection", "maxP", base.from_string, fields);
            base.export_element (obj, "EquivalentInjection", "maxQ", base.from_string, fields);
            base.export_element (obj, "EquivalentInjection", "minP", base.from_string, fields);
            base.export_element (obj, "EquivalentInjection", "minQ", base.from_string, fields);
            base.export_element (obj, "EquivalentInjection", "r", base.from_string, fields);
            base.export_element (obj, "EquivalentInjection", "r0", base.from_string, fields);
            base.export_element (obj, "EquivalentInjection", "r2", base.from_string, fields);
            base.export_element (obj, "EquivalentInjection", "regulationCapability", base.from_boolean, fields);
            base.export_element (obj, "EquivalentInjection", "regulationStatus", base.from_boolean, fields);
            base.export_element (obj, "EquivalentInjection", "regulationTarget", base.from_string, fields);
            base.export_element (obj, "EquivalentInjection", "x", base.from_string, fields);
            base.export_element (obj, "EquivalentInjection", "x0", base.from_string, fields);
            base.export_element (obj, "EquivalentInjection", "x2", base.from_string, fields);
            base.export_element (obj, "EquivalentInjection", "p", base.from_string, fields);
            base.export_element (obj, "EquivalentInjection", "q", base.from_string, fields);
            base.export_attribute (obj, "EquivalentInjection", "ReactiveCapabilityCurve", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The class represents equivalent objects that are the result of a network reduction.
         *
         * The class is the base for equivalent objects of different types.
         *
         */
        function parse_EquivalentEquipment (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_ConductingEquipment (context, sub);
            obj.cls = "EquivalentEquipment";
            base.parse_attribute (/<cim:EquivalentEquipment.EquivalentNetwork\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EquivalentNetwork", sub, context);
            bucket = context.parsed.EquivalentEquipment;
            if (null == bucket)
                context.parsed.EquivalentEquipment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_EquivalentEquipment (obj, exporters, full)
        {
            var fields = exporters["ConductingEquipment"](obj, exporters, false);

            base.export_attribute (obj, "EquivalentEquipment", "EquivalentNetwork", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The class represents equivalent shunts.
         *
         */
        function parse_EquivalentShunt (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_EquivalentEquipment (context, sub);
            obj.cls = "EquivalentShunt";
            base.parse_element (/<cim:EquivalentShunt.b>([\s\S]*?)<\/cim:EquivalentShunt.b>/g, obj, "b", base.to_string, sub, context);
            base.parse_element (/<cim:EquivalentShunt.g>([\s\S]*?)<\/cim:EquivalentShunt.g>/g, obj, "g", base.to_string, sub, context);
            bucket = context.parsed.EquivalentShunt;
            if (null == bucket)
                context.parsed.EquivalentShunt = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_EquivalentShunt (obj, exporters, full)
        {
            var fields = exporters["EquivalentEquipment"](obj, exporters, false);

            base.export_element (obj, "EquivalentShunt", "b", base.from_string, fields);
            base.export_element (obj, "EquivalentShunt", "g", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The class represents equivalent branches.
         *
         */
        function parse_EquivalentBranch (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_EquivalentEquipment (context, sub);
            obj.cls = "EquivalentBranch";
            base.parse_element (/<cim:EquivalentBranch.negativeR12>([\s\S]*?)<\/cim:EquivalentBranch.negativeR12>/g, obj, "negativeR12", base.to_string, sub, context);
            base.parse_element (/<cim:EquivalentBranch.negativeR21>([\s\S]*?)<\/cim:EquivalentBranch.negativeR21>/g, obj, "negativeR21", base.to_string, sub, context);
            base.parse_element (/<cim:EquivalentBranch.negativeX12>([\s\S]*?)<\/cim:EquivalentBranch.negativeX12>/g, obj, "negativeX12", base.to_string, sub, context);
            base.parse_element (/<cim:EquivalentBranch.negativeX21>([\s\S]*?)<\/cim:EquivalentBranch.negativeX21>/g, obj, "negativeX21", base.to_string, sub, context);
            base.parse_element (/<cim:EquivalentBranch.positiveR12>([\s\S]*?)<\/cim:EquivalentBranch.positiveR12>/g, obj, "positiveR12", base.to_string, sub, context);
            base.parse_element (/<cim:EquivalentBranch.positiveR21>([\s\S]*?)<\/cim:EquivalentBranch.positiveR21>/g, obj, "positiveR21", base.to_string, sub, context);
            base.parse_element (/<cim:EquivalentBranch.positiveX12>([\s\S]*?)<\/cim:EquivalentBranch.positiveX12>/g, obj, "positiveX12", base.to_string, sub, context);
            base.parse_element (/<cim:EquivalentBranch.positiveX21>([\s\S]*?)<\/cim:EquivalentBranch.positiveX21>/g, obj, "positiveX21", base.to_string, sub, context);
            base.parse_element (/<cim:EquivalentBranch.r>([\s\S]*?)<\/cim:EquivalentBranch.r>/g, obj, "r", base.to_string, sub, context);
            base.parse_element (/<cim:EquivalentBranch.r21>([\s\S]*?)<\/cim:EquivalentBranch.r21>/g, obj, "r21", base.to_string, sub, context);
            base.parse_element (/<cim:EquivalentBranch.x>([\s\S]*?)<\/cim:EquivalentBranch.x>/g, obj, "x", base.to_string, sub, context);
            base.parse_element (/<cim:EquivalentBranch.x21>([\s\S]*?)<\/cim:EquivalentBranch.x21>/g, obj, "x21", base.to_string, sub, context);
            base.parse_element (/<cim:EquivalentBranch.zeroR12>([\s\S]*?)<\/cim:EquivalentBranch.zeroR12>/g, obj, "zeroR12", base.to_string, sub, context);
            base.parse_element (/<cim:EquivalentBranch.zeroR21>([\s\S]*?)<\/cim:EquivalentBranch.zeroR21>/g, obj, "zeroR21", base.to_string, sub, context);
            base.parse_element (/<cim:EquivalentBranch.zeroX12>([\s\S]*?)<\/cim:EquivalentBranch.zeroX12>/g, obj, "zeroX12", base.to_string, sub, context);
            base.parse_element (/<cim:EquivalentBranch.zeroX21>([\s\S]*?)<\/cim:EquivalentBranch.zeroX21>/g, obj, "zeroX21", base.to_string, sub, context);
            bucket = context.parsed.EquivalentBranch;
            if (null == bucket)
                context.parsed.EquivalentBranch = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_EquivalentBranch (obj, exporters, full)
        {
            var fields = exporters["EquivalentEquipment"](obj, exporters, false);

            base.export_element (obj, "EquivalentBranch", "negativeR12", base.from_string, fields);
            base.export_element (obj, "EquivalentBranch", "negativeR21", base.from_string, fields);
            base.export_element (obj, "EquivalentBranch", "negativeX12", base.from_string, fields);
            base.export_element (obj, "EquivalentBranch", "negativeX21", base.from_string, fields);
            base.export_element (obj, "EquivalentBranch", "positiveR12", base.from_string, fields);
            base.export_element (obj, "EquivalentBranch", "positiveR21", base.from_string, fields);
            base.export_element (obj, "EquivalentBranch", "positiveX12", base.from_string, fields);
            base.export_element (obj, "EquivalentBranch", "positiveX21", base.from_string, fields);
            base.export_element (obj, "EquivalentBranch", "r", base.from_string, fields);
            base.export_element (obj, "EquivalentBranch", "r21", base.from_string, fields);
            base.export_element (obj, "EquivalentBranch", "x", base.from_string, fields);
            base.export_element (obj, "EquivalentBranch", "x21", base.from_string, fields);
            base.export_element (obj, "EquivalentBranch", "zeroR12", base.from_string, fields);
            base.export_element (obj, "EquivalentBranch", "zeroR21", base.from_string, fields);
            base.export_element (obj, "EquivalentBranch", "zeroX12", base.from_string, fields);
            base.export_element (obj, "EquivalentBranch", "zeroX21", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                parse_EquivalentShunt: parse_EquivalentShunt,
                export_EquivalentShunt: export_EquivalentShunt,
                parse_EquivalentInjection: parse_EquivalentInjection,
                export_EquivalentBranch: export_EquivalentBranch,
                parse_EquivalentNetwork: parse_EquivalentNetwork,
                parse_EquivalentBranch: parse_EquivalentBranch,
                parse_EquivalentEquipment: parse_EquivalentEquipment,
                export_EquivalentNetwork: export_EquivalentNetwork,
                export_EquivalentInjection: export_EquivalentInjection,
                export_EquivalentEquipment: export_EquivalentEquipment
            }
        );
    }
);