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
            obj["maxP"] = base.parse_element (/<cim:EquivalentInjection.maxP>([\s\S]*?)<\/cim:EquivalentInjection.maxP>/g, sub, context, true);
            /**
             * Used for modeling of infeed for load flow exchange.
             *
             * Not used for short circuit modeling.  If maxQ and minQ are not used ReactiveCapabilityCurve can be used.
             *
             */
            obj["maxQ"] = base.parse_element (/<cim:EquivalentInjection.maxQ>([\s\S]*?)<\/cim:EquivalentInjection.maxQ>/g, sub, context, true);
            /**
             * Minimum active power of the injection.
             *
             */
            obj["minP"] = base.parse_element (/<cim:EquivalentInjection.minP>([\s\S]*?)<\/cim:EquivalentInjection.minP>/g, sub, context, true);
            /**
             * Used for modeling of infeed for load flow exchange.
             *
             * Not used for short circuit modeling.  If maxQ and minQ are not used ReactiveCapabilityCurve can be used.
             *
             */
            obj["minQ"] = base.parse_element (/<cim:EquivalentInjection.minQ>([\s\S]*?)<\/cim:EquivalentInjection.minQ>/g, sub, context, true);
            /**
             * Positive sequence resistance.
             *
             * Used to represent Extended-Ward (IEC 60909).
             *
             */
            obj["r"] = base.parse_element (/<cim:EquivalentInjection.r>([\s\S]*?)<\/cim:EquivalentInjection.r>/g, sub, context, true);
            /**
             * Zero sequence resistance.
             *
             * Used to represent Extended-Ward (IEC 60909).
             *
             */
            obj["r0"] = base.parse_element (/<cim:EquivalentInjection.r0>([\s\S]*?)<\/cim:EquivalentInjection.r0>/g, sub, context, true);
            /**
             * Negative sequence resistance.
             *
             * Used to represent Extended-Ward (IEC 60909).
             *
             */
            obj["r2"] = base.parse_element (/<cim:EquivalentInjection.r2>([\s\S]*?)<\/cim:EquivalentInjection.r2>/g, sub, context, true);
            /**
             * Specifies whether or not the EquivalentInjection has the capability to regulate the local voltage.
             *
             */
            obj["regulationCapability"] = base.to_boolean (base.parse_element (/<cim:EquivalentInjection.regulationCapability>([\s\S]*?)<\/cim:EquivalentInjection.regulationCapability>/g, sub, context, true));
            /**
             * Specifies the default regulation status of the EquivalentInjection.
             *
             * True is regulating.  False is not regulating.
             *
             */
            obj["regulationStatus"] = base.to_boolean (base.parse_element (/<cim:EquivalentInjection.regulationStatus>([\s\S]*?)<\/cim:EquivalentInjection.regulationStatus>/g, sub, context, true));
            /**
             * The target voltage for voltage regulation.
             *
             */
            obj["regulationTarget"] = base.parse_element (/<cim:EquivalentInjection.regulationTarget>([\s\S]*?)<\/cim:EquivalentInjection.regulationTarget>/g, sub, context, true);
            /**
             * Positive sequence reactance.
             *
             * Used to represent Extended-Ward (IEC 60909).
             *
             */
            obj["x"] = base.parse_element (/<cim:EquivalentInjection.x>([\s\S]*?)<\/cim:EquivalentInjection.x>/g, sub, context, true);
            /**
             * Zero sequence reactance.
             *
             * Used to represent Extended-Ward (IEC 60909).
             *
             */
            obj["x0"] = base.parse_element (/<cim:EquivalentInjection.x0>([\s\S]*?)<\/cim:EquivalentInjection.x0>/g, sub, context, true);
            /**
             * Negative sequence reactance.
             *
             * Used to represent Extended-Ward (IEC 60909).
             *
             */
            obj["x2"] = base.parse_element (/<cim:EquivalentInjection.x2>([\s\S]*?)<\/cim:EquivalentInjection.x2>/g, sub, context, true);
            /**
             * Equivalent active power injection.
             *
             * Load sign convention is used, i.e. positive sign means flow out from a node.
             *
             */
            obj["p"] = base.parse_element (/<cim:EquivalentInjection.p>([\s\S]*?)<\/cim:EquivalentInjection.p>/g, sub, context, true);
            /**
             * Equivalent reactive power injection.
             *
             * Load sign convention is used, i.e. positive sign means flow out from a node.
             *
             */
            obj["q"] = base.parse_element (/<cim:EquivalentInjection.q>([\s\S]*?)<\/cim:EquivalentInjection.q>/g, sub, context, true);
            /**
             * The reactive capability curve used by this equivalent injection.
             *
             */
            obj["ReactiveCapabilityCurve"] = base.parse_attribute (/<cim:EquivalentInjection.ReactiveCapabilityCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["EquivalentNetwork"] = base.parse_attribute (/<cim:EquivalentEquipment.EquivalentNetwork\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["b"] = base.parse_element (/<cim:EquivalentShunt.b>([\s\S]*?)<\/cim:EquivalentShunt.b>/g, sub, context, true);
            /**
             * Positive sequence shunt conductance.
             *
             */
            obj["g"] = base.parse_element (/<cim:EquivalentShunt.g>([\s\S]*?)<\/cim:EquivalentShunt.g>/g, sub, context, true);
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
            obj["negativeR12"] = base.parse_element (/<cim:EquivalentBranch.negativeR12>([\s\S]*?)<\/cim:EquivalentBranch.negativeR12>/g, sub, context, true);
            /**
             * Negative sequence series resistance from terminal sequence 2 to terminal sequence 1.
             *
             * Used for short circuit data exchange according to IEC 60909
             *
             */
            obj["negativeR21"] = base.parse_element (/<cim:EquivalentBranch.negativeR21>([\s\S]*?)<\/cim:EquivalentBranch.negativeR21>/g, sub, context, true);
            /**
             * Negative sequence series reactance from terminal sequence  1 to terminal sequence 2.
             *
             * Used for short circuit data exchange according to IEC 60909
             *
             */
            obj["negativeX12"] = base.parse_element (/<cim:EquivalentBranch.negativeX12>([\s\S]*?)<\/cim:EquivalentBranch.negativeX12>/g, sub, context, true);
            /**
             * Negative sequence series reactance from terminal sequence 2 to terminal sequence 1.
             *
             * Used for short circuit data exchange according to IEC 60909.
             *
             */
            obj["negativeX21"] = base.parse_element (/<cim:EquivalentBranch.negativeX21>([\s\S]*?)<\/cim:EquivalentBranch.negativeX21>/g, sub, context, true);
            /**
             * Positive sequence series resistance from terminal sequence  1 to terminal sequence 2 .
             *
             * Used for short circuit data exchange according to IEC 60909.
             *
             */
            obj["positiveR12"] = base.parse_element (/<cim:EquivalentBranch.positiveR12>([\s\S]*?)<\/cim:EquivalentBranch.positiveR12>/g, sub, context, true);
            /**
             * Positive sequence series resistance from terminal sequence 2 to terminal sequence 1.
             *
             * Used for short circuit data exchange according to IEC 60909
             *
             */
            obj["positiveR21"] = base.parse_element (/<cim:EquivalentBranch.positiveR21>([\s\S]*?)<\/cim:EquivalentBranch.positiveR21>/g, sub, context, true);
            /**
             * Positive sequence series reactance from terminal sequence  1 to terminal sequence 2.
             *
             * Used for short circuit data exchange according to IEC 60909
             *
             */
            obj["positiveX12"] = base.parse_element (/<cim:EquivalentBranch.positiveX12>([\s\S]*?)<\/cim:EquivalentBranch.positiveX12>/g, sub, context, true);
            /**
             * Positive sequence series reactance from terminal sequence 2 to terminal sequence 1.
             *
             * Used for short circuit data exchange according to IEC 60909
             *
             */
            obj["positiveX21"] = base.parse_element (/<cim:EquivalentBranch.positiveX21>([\s\S]*?)<\/cim:EquivalentBranch.positiveX21>/g, sub, context, true);
            /**
             * Positive sequence series resistance of the reduced branch.
             *
             */
            obj["r"] = base.parse_element (/<cim:EquivalentBranch.r>([\s\S]*?)<\/cim:EquivalentBranch.r>/g, sub, context, true);
            /**
             * Resistance from terminal sequence 2 to terminal sequence 1 .
             *
             * Used for steady state power flow. This attribute is optional and represent unbalanced network such as off-nominal phase shifter. If only EquivalentBranch.r is given, then EquivalentBranch.r21 is assumed equal to EquivalentBranch.r.
             *
             */
            obj["r21"] = base.parse_element (/<cim:EquivalentBranch.r21>([\s\S]*?)<\/cim:EquivalentBranch.r21>/g, sub, context, true);
            /**
             * Positive sequence series reactance of the reduced branch.
             *
             */
            obj["x"] = base.parse_element (/<cim:EquivalentBranch.x>([\s\S]*?)<\/cim:EquivalentBranch.x>/g, sub, context, true);
            /**
             * Reactance from terminal sequence 2 to terminal sequence 1 .
             *
             * Used for steady state power flow. This attribute is optional and represent unbalanced network such as off-nominal phase shifter. If only EquivalentBranch.x is given, then EquivalentBranch.x21 is assumed equal to EquivalentBranch.x.
             *
             */
            obj["x21"] = base.parse_element (/<cim:EquivalentBranch.x21>([\s\S]*?)<\/cim:EquivalentBranch.x21>/g, sub, context, true);
            /**
             * Zero sequence series resistance from terminal sequence  1 to terminal sequence 2.
             *
             * Used for short circuit data exchange according to IEC 60909
             *
             */
            obj["zeroR12"] = base.parse_element (/<cim:EquivalentBranch.zeroR12>([\s\S]*?)<\/cim:EquivalentBranch.zeroR12>/g, sub, context, true);
            /**
             * Zero sequence series resistance from terminal sequence  2 to terminal sequence 1.
             *
             * Used for short circuit data exchange according to IEC 60909
             *
             */
            obj["zeroR21"] = base.parse_element (/<cim:EquivalentBranch.zeroR21>([\s\S]*?)<\/cim:EquivalentBranch.zeroR21>/g, sub, context, true);
            /**
             * Zero sequence series reactance from terminal sequence  1 to terminal sequence 2.
             *
             * Used for short circuit data exchange according to IEC 60909
             *
             */
            obj["zeroX12"] = base.parse_element (/<cim:EquivalentBranch.zeroX12>([\s\S]*?)<\/cim:EquivalentBranch.zeroX12>/g, sub, context, true);
            /**
             * Zero sequence series reactance from terminal sequence 2 to terminal sequence 1.
             *
             * Used for short circuit data exchange according to IEC 60909
             *
             */
            obj["zeroX21"] = base.parse_element (/<cim:EquivalentBranch.zeroX21>([\s\S]*?)<\/cim:EquivalentBranch.zeroX21>/g, sub, context, true);
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