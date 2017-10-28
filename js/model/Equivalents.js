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
            /**
             * Maximum active power of the injection.
             *
             */
            base.parse_element (/<cim:EquivalentInjection.maxP>([\s\S]*?)<\/cim:EquivalentInjection.maxP>/g, obj, "maxP", base.to_string, sub, context);

            /**
             * Used for modeling of infeed for load flow exchange.
             *
             * Not used for short circuit modeling.  If maxQ and minQ are not used ReactiveCapabilityCurve can be used.
             *
             */
            base.parse_element (/<cim:EquivalentInjection.maxQ>([\s\S]*?)<\/cim:EquivalentInjection.maxQ>/g, obj, "maxQ", base.to_string, sub, context);

            /**
             * Minimum active power of the injection.
             *
             */
            base.parse_element (/<cim:EquivalentInjection.minP>([\s\S]*?)<\/cim:EquivalentInjection.minP>/g, obj, "minP", base.to_string, sub, context);

            /**
             * Used for modeling of infeed for load flow exchange.
             *
             * Not used for short circuit modeling.  If maxQ and minQ are not used ReactiveCapabilityCurve can be used.
             *
             */
            base.parse_element (/<cim:EquivalentInjection.minQ>([\s\S]*?)<\/cim:EquivalentInjection.minQ>/g, obj, "minQ", base.to_string, sub, context);

            /**
             * Positive sequence resistance.
             *
             * Used to represent Extended-Ward (IEC 60909).
             *
             */
            base.parse_element (/<cim:EquivalentInjection.r>([\s\S]*?)<\/cim:EquivalentInjection.r>/g, obj, "r", base.to_string, sub, context);

            /**
             * Zero sequence resistance.
             *
             * Used to represent Extended-Ward (IEC 60909).
             *
             */
            base.parse_element (/<cim:EquivalentInjection.r0>([\s\S]*?)<\/cim:EquivalentInjection.r0>/g, obj, "r0", base.to_string, sub, context);

            /**
             * Negative sequence resistance.
             *
             * Used to represent Extended-Ward (IEC 60909).
             *
             */
            base.parse_element (/<cim:EquivalentInjection.r2>([\s\S]*?)<\/cim:EquivalentInjection.r2>/g, obj, "r2", base.to_string, sub, context);

            /**
             * Specifies whether or not the EquivalentInjection has the capability to regulate the local voltage.
             *
             */
            base.parse_element (/<cim:EquivalentInjection.regulationCapability>([\s\S]*?)<\/cim:EquivalentInjection.regulationCapability>/g, obj, "regulationCapability", base.to_boolean, sub, context);

            /**
             * Specifies the default regulation status of the EquivalentInjection.
             *
             * True is regulating.  False is not regulating.
             *
             */
            base.parse_element (/<cim:EquivalentInjection.regulationStatus>([\s\S]*?)<\/cim:EquivalentInjection.regulationStatus>/g, obj, "regulationStatus", base.to_boolean, sub, context);

            /**
             * The target voltage for voltage regulation.
             *
             */
            base.parse_element (/<cim:EquivalentInjection.regulationTarget>([\s\S]*?)<\/cim:EquivalentInjection.regulationTarget>/g, obj, "regulationTarget", base.to_string, sub, context);

            /**
             * Positive sequence reactance.
             *
             * Used to represent Extended-Ward (IEC 60909).
             *
             */
            base.parse_element (/<cim:EquivalentInjection.x>([\s\S]*?)<\/cim:EquivalentInjection.x>/g, obj, "x", base.to_string, sub, context);

            /**
             * Zero sequence reactance.
             *
             * Used to represent Extended-Ward (IEC 60909).
             *
             */
            base.parse_element (/<cim:EquivalentInjection.x0>([\s\S]*?)<\/cim:EquivalentInjection.x0>/g, obj, "x0", base.to_string, sub, context);

            /**
             * Negative sequence reactance.
             *
             * Used to represent Extended-Ward (IEC 60909).
             *
             */
            base.parse_element (/<cim:EquivalentInjection.x2>([\s\S]*?)<\/cim:EquivalentInjection.x2>/g, obj, "x2", base.to_string, sub, context);

            /**
             * Equivalent active power injection.
             *
             * Load sign convention is used, i.e. positive sign means flow out from a node.
             *
             */
            base.parse_element (/<cim:EquivalentInjection.p>([\s\S]*?)<\/cim:EquivalentInjection.p>/g, obj, "p", base.to_string, sub, context);

            /**
             * Equivalent reactive power injection.
             *
             * Load sign convention is used, i.e. positive sign means flow out from a node.
             *
             */
            base.parse_element (/<cim:EquivalentInjection.q>([\s\S]*?)<\/cim:EquivalentInjection.q>/g, obj, "q", base.to_string, sub, context);

            /**
             * The reactive capability curve used by this equivalent injection.
             *
             */
            base.parse_attribute (/<cim:EquivalentInjection.ReactiveCapabilityCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReactiveCapabilityCurve", sub, context, true);

            bucket = context.parsed.EquivalentInjection;
            if (null == bucket)
                context.parsed.EquivalentInjection = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The equivalent where the reduced model belongs.
             *
             */
            base.parse_attribute (/<cim:EquivalentEquipment.EquivalentNetwork\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EquivalentNetwork", sub, context, true);

            bucket = context.parsed.EquivalentEquipment;
            if (null == bucket)
                context.parsed.EquivalentEquipment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Positive sequence shunt susceptance.
             *
             */
            base.parse_element (/<cim:EquivalentShunt.b>([\s\S]*?)<\/cim:EquivalentShunt.b>/g, obj, "b", base.to_string, sub, context);

            /**
             * Positive sequence shunt conductance.
             *
             */
            base.parse_element (/<cim:EquivalentShunt.g>([\s\S]*?)<\/cim:EquivalentShunt.g>/g, obj, "g", base.to_string, sub, context);

            bucket = context.parsed.EquivalentShunt;
            if (null == bucket)
                context.parsed.EquivalentShunt = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Negative sequence series resistance from terminal sequence  1 to terminal sequence 2.
             *
             * Used for short circuit data exchange according to IEC 60909
             *
             */
            base.parse_element (/<cim:EquivalentBranch.negativeR12>([\s\S]*?)<\/cim:EquivalentBranch.negativeR12>/g, obj, "negativeR12", base.to_string, sub, context);

            /**
             * Negative sequence series resistance from terminal sequence 2 to terminal sequence 1.
             *
             * Used for short circuit data exchange according to IEC 60909
             *
             */
            base.parse_element (/<cim:EquivalentBranch.negativeR21>([\s\S]*?)<\/cim:EquivalentBranch.negativeR21>/g, obj, "negativeR21", base.to_string, sub, context);

            /**
             * Negative sequence series reactance from terminal sequence  1 to terminal sequence 2.
             *
             * Used for short circuit data exchange according to IEC 60909
             *
             */
            base.parse_element (/<cim:EquivalentBranch.negativeX12>([\s\S]*?)<\/cim:EquivalentBranch.negativeX12>/g, obj, "negativeX12", base.to_string, sub, context);

            /**
             * Negative sequence series reactance from terminal sequence 2 to terminal sequence 1.
             *
             * Used for short circuit data exchange according to IEC 60909.
             *
             */
            base.parse_element (/<cim:EquivalentBranch.negativeX21>([\s\S]*?)<\/cim:EquivalentBranch.negativeX21>/g, obj, "negativeX21", base.to_string, sub, context);

            /**
             * Positive sequence series resistance from terminal sequence  1 to terminal sequence 2 .
             *
             * Used for short circuit data exchange according to IEC 60909.
             *
             */
            base.parse_element (/<cim:EquivalentBranch.positiveR12>([\s\S]*?)<\/cim:EquivalentBranch.positiveR12>/g, obj, "positiveR12", base.to_string, sub, context);

            /**
             * Positive sequence series resistance from terminal sequence 2 to terminal sequence 1.
             *
             * Used for short circuit data exchange according to IEC 60909
             *
             */
            base.parse_element (/<cim:EquivalentBranch.positiveR21>([\s\S]*?)<\/cim:EquivalentBranch.positiveR21>/g, obj, "positiveR21", base.to_string, sub, context);

            /**
             * Positive sequence series reactance from terminal sequence  1 to terminal sequence 2.
             *
             * Used for short circuit data exchange according to IEC 60909
             *
             */
            base.parse_element (/<cim:EquivalentBranch.positiveX12>([\s\S]*?)<\/cim:EquivalentBranch.positiveX12>/g, obj, "positiveX12", base.to_string, sub, context);

            /**
             * Positive sequence series reactance from terminal sequence 2 to terminal sequence 1.
             *
             * Used for short circuit data exchange according to IEC 60909
             *
             */
            base.parse_element (/<cim:EquivalentBranch.positiveX21>([\s\S]*?)<\/cim:EquivalentBranch.positiveX21>/g, obj, "positiveX21", base.to_string, sub, context);

            /**
             * Positive sequence series resistance of the reduced branch.
             *
             */
            base.parse_element (/<cim:EquivalentBranch.r>([\s\S]*?)<\/cim:EquivalentBranch.r>/g, obj, "r", base.to_string, sub, context);

            /**
             * Resistance from terminal sequence 2 to terminal sequence 1 .
             *
             * Used for steady state power flow. This attribute is optional and represent unbalanced network such as off-nominal phase shifter. If only EquivalentBranch.r is given, then EquivalentBranch.r21 is assumed equal to EquivalentBranch.r.
             *
             */
            base.parse_element (/<cim:EquivalentBranch.r21>([\s\S]*?)<\/cim:EquivalentBranch.r21>/g, obj, "r21", base.to_string, sub, context);

            /**
             * Positive sequence series reactance of the reduced branch.
             *
             */
            base.parse_element (/<cim:EquivalentBranch.x>([\s\S]*?)<\/cim:EquivalentBranch.x>/g, obj, "x", base.to_string, sub, context);

            /**
             * Reactance from terminal sequence 2 to terminal sequence 1 .
             *
             * Used for steady state power flow. This attribute is optional and represent unbalanced network such as off-nominal phase shifter. If only EquivalentBranch.x is given, then EquivalentBranch.x21 is assumed equal to EquivalentBranch.x.
             *
             */
            base.parse_element (/<cim:EquivalentBranch.x21>([\s\S]*?)<\/cim:EquivalentBranch.x21>/g, obj, "x21", base.to_string, sub, context);

            /**
             * Zero sequence series resistance from terminal sequence  1 to terminal sequence 2.
             *
             * Used for short circuit data exchange according to IEC 60909
             *
             */
            base.parse_element (/<cim:EquivalentBranch.zeroR12>([\s\S]*?)<\/cim:EquivalentBranch.zeroR12>/g, obj, "zeroR12", base.to_string, sub, context);

            /**
             * Zero sequence series resistance from terminal sequence  2 to terminal sequence 1.
             *
             * Used for short circuit data exchange according to IEC 60909
             *
             */
            base.parse_element (/<cim:EquivalentBranch.zeroR21>([\s\S]*?)<\/cim:EquivalentBranch.zeroR21>/g, obj, "zeroR21", base.to_string, sub, context);

            /**
             * Zero sequence series reactance from terminal sequence  1 to terminal sequence 2.
             *
             * Used for short circuit data exchange according to IEC 60909
             *
             */
            base.parse_element (/<cim:EquivalentBranch.zeroX12>([\s\S]*?)<\/cim:EquivalentBranch.zeroX12>/g, obj, "zeroX12", base.to_string, sub, context);

            /**
             * Zero sequence series reactance from terminal sequence 2 to terminal sequence 1.
             *
             * Used for short circuit data exchange according to IEC 60909
             *
             */
            base.parse_element (/<cim:EquivalentBranch.zeroX21>([\s\S]*?)<\/cim:EquivalentBranch.zeroX21>/g, obj, "zeroX21", base.to_string, sub, context);

            bucket = context.parsed.EquivalentBranch;
            if (null == bucket)
                context.parsed.EquivalentBranch = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_EquivalentShunt: parse_EquivalentShunt,
                parse_EquivalentInjection: parse_EquivalentInjection,
                parse_EquivalentNetwork: parse_EquivalentNetwork,
                parse_EquivalentBranch: parse_EquivalentBranch,
                parse_EquivalentEquipment: parse_EquivalentEquipment
            }
        );
    }
);