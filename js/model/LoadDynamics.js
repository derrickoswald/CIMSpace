define
(
    ["model/base", "model/Core"],
    /**
     * Dynamic load models are used to represent the dynamic real and reactive load behaviour of a load from the static power flow model.
     *
     * Dynamic load models can be defined as applying either to a single load (energy consumer) or to a group of energy consumers.
     *
     */
    function (base, Core)
    {

        /**
         * Aggregate induction motor load.
         *
         * This model  is used to represent a fraction of an ordinary load as "induction motor load".  It allows load that is treated as ordinary constant power in power flow analysis to be represented by an induction motor in dynamic simulation.  If <b>Lpp</b> = 0. or <b>Lpp</b> = <b>Lp</b>, or <b>Tppo</b> = 0.,  only one cage is represented. Magnetic saturation is not modelled. Either a "one-cage" or "two-cage" model of the induction machine can be modelled. Magnetic saturation is not modelled.
         *
         */
        function parse_LoadMotor (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "LoadMotor";
            /**
             * Damping factor (D).
             *
             * Unit = delta P/delta speed.  Typical Value = 2.
             *
             */
            base.parse_element (/<cim:LoadMotor.d>([\s\S]*?)<\/cim:LoadMotor.d>/g, obj, "d", base.to_float, sub, context);

            /**
             * Inertia constant (H) (not=0).
             *
             * Typical Value = 0.4.
             *
             */
            base.parse_element (/<cim:LoadMotor.h>([\s\S]*?)<\/cim:LoadMotor.h>/g, obj, "h", base.to_string, sub, context);

            /**
             * Loading factor � ratio of initial P to motor MVA base (Lfac).
             *
             * Typical Value = 0.8.
             *
             */
            base.parse_element (/<cim:LoadMotor.lfac>([\s\S]*?)<\/cim:LoadMotor.lfac>/g, obj, "lfac", base.to_float, sub, context);

            /**
             * Transient reactance (Lp).
             *
             * Typical Value = 0.15.
             *
             */
            base.parse_element (/<cim:LoadMotor.lp>([\s\S]*?)<\/cim:LoadMotor.lp>/g, obj, "lp", base.to_string, sub, context);

            /**
             * Subtransient reactance (Lpp).
             *
             * Typical Value = 0.15.
             *
             */
            base.parse_element (/<cim:LoadMotor.lpp>([\s\S]*?)<\/cim:LoadMotor.lpp>/g, obj, "lpp", base.to_string, sub, context);

            /**
             * Synchronous reactance (Ls).
             *
             * Typical Value = 3.2.
             *
             */
            base.parse_element (/<cim:LoadMotor.ls>([\s\S]*?)<\/cim:LoadMotor.ls>/g, obj, "ls", base.to_string, sub, context);

            /**
             * Fraction of constant-power load to be represented by this motor model (Pfrac) (&gt;=0.0 and &lt;=1.0).
             *
             * Typical Value = 0.3.
             *
             */
            base.parse_element (/<cim:LoadMotor.pfrac>([\s\S]*?)<\/cim:LoadMotor.pfrac>/g, obj, "pfrac", base.to_float, sub, context);

            /**
             * Stator resistance (Ra).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:LoadMotor.ra>([\s\S]*?)<\/cim:LoadMotor.ra>/g, obj, "ra", base.to_string, sub, context);

            /**
             * Circuit breaker operating time (Tbkr).
             *
             * Typical Value = 0.08.
             *
             */
            base.parse_element (/<cim:LoadMotor.tbkr>([\s\S]*?)<\/cim:LoadMotor.tbkr>/g, obj, "tbkr", base.to_string, sub, context);

            /**
             * Transient rotor time constant (Tpo) (not=0).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:LoadMotor.tpo>([\s\S]*?)<\/cim:LoadMotor.tpo>/g, obj, "tpo", base.to_string, sub, context);

            /**
             * Subtransient rotor time constant (Tppo).
             *
             * Typical Value = 0.02.
             *
             */
            base.parse_element (/<cim:LoadMotor.tppo>([\s\S]*?)<\/cim:LoadMotor.tppo>/g, obj, "tppo", base.to_string, sub, context);

            /**
             * Voltage trip pickup time (Tv).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:LoadMotor.tv>([\s\S]*?)<\/cim:LoadMotor.tv>/g, obj, "tv", base.to_string, sub, context);

            /**
             * Voltage threshold for tripping (Vt).
             *
             * Typical Value = 0.7.
             *
             */
            base.parse_element (/<cim:LoadMotor.vt>([\s\S]*?)<\/cim:LoadMotor.vt>/g, obj, "vt", base.to_string, sub, context);

            /**
             * Aggregate load to which this aggregate motor (dynamic) load belongs.
             *
             */
            base.parse_attribute (/<cim:LoadMotor.LoadAggregate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadAggregate", sub, context, true);

            bucket = context.parsed.LoadMotor;
            if (null == bucket)
                context.parsed.LoadMotor = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Type of generic non-linear load model.
         *
         */
        function parse_GenericNonLinearLoadModelKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "GenericNonLinearLoadModelKind";
            /**
             * Exponential recovery model.
             *
             */
            base.parse_element (/<cim:GenericNonLinearLoadModelKind.exponentialRecovery>([\s\S]*?)<\/cim:GenericNonLinearLoadModelKind.exponentialRecovery>/g, obj, "exponentialRecovery", base.to_string, sub, context);

            /**
             * Load adaptive model.
             *
             */
            base.parse_element (/<cim:GenericNonLinearLoadModelKind.loadAdaptive>([\s\S]*?)<\/cim:GenericNonLinearLoadModelKind.loadAdaptive>/g, obj, "loadAdaptive", base.to_string, sub, context);

            bucket = context.parsed.GenericNonLinearLoadModelKind;
            if (null == bucket)
                context.parsed.GenericNonLinearLoadModelKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Load whose behaviour is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         * 
         * A standard feature of dynamic load behaviour modelling is the ability to associate the same behaviour to multiple energy consumers by means of a single aggregate load definition.
         *
         * Aggregate loads are used to represent all or part of the real and reactive load from one or more loads in the static (power flow) data. This load is usually the aggregation of many individual load devices and the load model is approximate representation of the aggregate response of the load devices to system disturbances. The load model is always applied to individual bus loads (energy consumers) but a single set of load model parameters can used for all loads in the grouping.
         *
         */
        function parse_LoadDynamics (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "LoadDynamics";
            bucket = context.parsed.LoadDynamics;
            if (null == bucket)
                context.parsed.LoadDynamics = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * General static load model representing the sensitivity of the real and reactive power consumed by the load to the amplitude and frequency of the bus voltage.
         *
         */
        function parse_LoadStatic (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "LoadStatic";
            /**
             * First term voltage exponent for active power (Ep1).
             *
             * Used only when .staticLoadModelType = exponential.
             *
             */
            base.parse_element (/<cim:LoadStatic.ep1>([\s\S]*?)<\/cim:LoadStatic.ep1>/g, obj, "ep1", base.to_float, sub, context);

            /**
             * Second term voltage exponent for active power (Ep2).
             *
             * Used only when .staticLoadModelType = exponential.
             *
             */
            base.parse_element (/<cim:LoadStatic.ep2>([\s\S]*?)<\/cim:LoadStatic.ep2>/g, obj, "ep2", base.to_float, sub, context);

            /**
             * Third term voltage exponent for active power (Ep3).
             *
             * Used only when .staticLoadModelType = exponential.
             *
             */
            base.parse_element (/<cim:LoadStatic.ep3>([\s\S]*?)<\/cim:LoadStatic.ep3>/g, obj, "ep3", base.to_float, sub, context);

            /**
             * First term voltage exponent for reactive power (Eq1).
             *
             * Used only when .staticLoadModelType = exponential.
             *
             */
            base.parse_element (/<cim:LoadStatic.eq1>([\s\S]*?)<\/cim:LoadStatic.eq1>/g, obj, "eq1", base.to_float, sub, context);

            /**
             * Second term voltage exponent for reactive power (Eq2).
             *
             * Used only when .staticLoadModelType = exponential.
             *
             */
            base.parse_element (/<cim:LoadStatic.eq2>([\s\S]*?)<\/cim:LoadStatic.eq2>/g, obj, "eq2", base.to_float, sub, context);

            /**
             * Third term voltage exponent for reactive power (Eq3).
             *
             * Used only when .staticLoadModelType = exponential.
             *
             */
            base.parse_element (/<cim:LoadStatic.eq3>([\s\S]*?)<\/cim:LoadStatic.eq3>/g, obj, "eq3", base.to_float, sub, context);

            /**
             * First term voltage coefficient for active power (Kp1).
             *
             * Not used when .staticLoadModelType = constantZ.
             *
             */
            base.parse_element (/<cim:LoadStatic.kp1>([\s\S]*?)<\/cim:LoadStatic.kp1>/g, obj, "kp1", base.to_float, sub, context);

            /**
             * Second term voltage coefficient for active power (Kp2).
             *
             * Not used when .staticLoadModelType = constantZ.
             *
             */
            base.parse_element (/<cim:LoadStatic.kp2>([\s\S]*?)<\/cim:LoadStatic.kp2>/g, obj, "kp2", base.to_float, sub, context);

            /**
             * Third term voltage coefficient for active power (Kp3).
             *
             * Not used when .staticLoadModelType = constantZ.
             *
             */
            base.parse_element (/<cim:LoadStatic.kp3>([\s\S]*?)<\/cim:LoadStatic.kp3>/g, obj, "kp3", base.to_float, sub, context);

            /**
             * Frequency coefficient for active power (Kp4).
             *
             * Must be non-zero when .staticLoadModelType = ZIP2.  Not used for all other values of .staticLoadModelType.
             *
             */
            base.parse_element (/<cim:LoadStatic.kp4>([\s\S]*?)<\/cim:LoadStatic.kp4>/g, obj, "kp4", base.to_float, sub, context);

            /**
             * Frequency deviation coefficient for active power (Kpf).
             *
             * Not used when .staticLoadModelType = constantZ.
             *
             */
            base.parse_element (/<cim:LoadStatic.kpf>([\s\S]*?)<\/cim:LoadStatic.kpf>/g, obj, "kpf", base.to_float, sub, context);

            /**
             * First term voltage coefficient for reactive power (Kq1).
             *
             * Not used when .staticLoadModelType = constantZ.
             *
             */
            base.parse_element (/<cim:LoadStatic.kq1>([\s\S]*?)<\/cim:LoadStatic.kq1>/g, obj, "kq1", base.to_float, sub, context);

            /**
             * Second term voltage coefficient for reactive power (Kq2).
             *
             * Not used when .staticLoadModelType = constantZ.
             *
             */
            base.parse_element (/<cim:LoadStatic.kq2>([\s\S]*?)<\/cim:LoadStatic.kq2>/g, obj, "kq2", base.to_float, sub, context);

            /**
             * Third term voltage coefficient for reactive power (Kq3).
             *
             * Not used when .staticLoadModelType = constantZ.
             *
             */
            base.parse_element (/<cim:LoadStatic.kq3>([\s\S]*?)<\/cim:LoadStatic.kq3>/g, obj, "kq3", base.to_float, sub, context);

            /**
             * Frequency coefficient for reactive power (Kq4).
             *
             * Must be non-zero when .staticLoadModelType = ZIP2.  Not used for all other values of .staticLoadModelType.
             *
             */
            base.parse_element (/<cim:LoadStatic.kq4>([\s\S]*?)<\/cim:LoadStatic.kq4>/g, obj, "kq4", base.to_float, sub, context);

            /**
             * Frequency deviation coefficient for reactive power (Kqf).
             *
             * Not used when .staticLoadModelType = constantZ.
             *
             */
            base.parse_element (/<cim:LoadStatic.kqf>([\s\S]*?)<\/cim:LoadStatic.kqf>/g, obj, "kqf", base.to_float, sub, context);

            /**
             * Type of static load model.
             *
             * Typical Value = constantZ.
             *
             */
            base.parse_element (/<cim:LoadStatic.staticLoadModelType>([\s\S]*?)<\/cim:LoadStatic.staticLoadModelType>/g, obj, "staticLoadModelType", base.to_string, sub, context);

            /**
             * Aggregate load to which this aggregate static load belongs.
             *
             */
            base.parse_attribute (/<cim:LoadStatic.LoadAggregate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadAggregate", sub, context, true);

            bucket = context.parsed.LoadStatic;
            if (null == bucket)
                context.parsed.LoadStatic = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This model combines static load and induction motor load effects.
         *
         * The dynamics of the motor are simplified by linearizing the induction machine equations.
         *
         */
        function parse_LoadComposite (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_LoadDynamics (context, sub);
            obj.cls = "LoadComposite";
            /**
             * Active load-frequency dependence index (dynamic) (Epfd).
             *
             * Typical Value = 1.5.
             *
             */
            base.parse_element (/<cim:LoadComposite.epfd>([\s\S]*?)<\/cim:LoadComposite.epfd>/g, obj, "epfd", base.to_float, sub, context);

            /**
             * Active load-frequency dependence index (static) (Epfs).
             *
             * Typical Value = 1.5.
             *
             */
            base.parse_element (/<cim:LoadComposite.epfs>([\s\S]*?)<\/cim:LoadComposite.epfs>/g, obj, "epfs", base.to_float, sub, context);

            /**
             * Active load-voltage dependence index (dynamic) (Epvd).
             *
             * Typical Value = 0.7.
             *
             */
            base.parse_element (/<cim:LoadComposite.epvd>([\s\S]*?)<\/cim:LoadComposite.epvd>/g, obj, "epvd", base.to_float, sub, context);

            /**
             * Active load-voltage dependence index (static) (Epvs).
             *
             * Typical Value = 0.7.
             *
             */
            base.parse_element (/<cim:LoadComposite.epvs>([\s\S]*?)<\/cim:LoadComposite.epvs>/g, obj, "epvs", base.to_float, sub, context);

            /**
             * Reactive load-frequency dependence index (dynamic) (Eqfd).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:LoadComposite.eqfd>([\s\S]*?)<\/cim:LoadComposite.eqfd>/g, obj, "eqfd", base.to_float, sub, context);

            /**
             * Reactive load-frequency dependence index (static) (Eqfs).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:LoadComposite.eqfs>([\s\S]*?)<\/cim:LoadComposite.eqfs>/g, obj, "eqfs", base.to_float, sub, context);

            /**
             * Reactive load-voltage dependence index (dynamic) (Eqvd).
             *
             * Typical Value = 2.
             *
             */
            base.parse_element (/<cim:LoadComposite.eqvd>([\s\S]*?)<\/cim:LoadComposite.eqvd>/g, obj, "eqvd", base.to_float, sub, context);

            /**
             * Reactive load-voltage dependence index (static) (Eqvs).
             *
             * Typical Value = 2.
             *
             */
            base.parse_element (/<cim:LoadComposite.eqvs>([\s\S]*?)<\/cim:LoadComposite.eqvs>/g, obj, "eqvs", base.to_float, sub, context);

            /**
             * Inertia constant (H).
             *
             * Typical Value = 2.5.
             *
             */
            base.parse_element (/<cim:LoadComposite.h>([\s\S]*?)<\/cim:LoadComposite.h>/g, obj, "h", base.to_string, sub, context);

            /**
             * Loading factor � ratio of initial P to motor MVA base (Lfrac).
             *
             * Typical Value = 0.8.
             *
             */
            base.parse_element (/<cim:LoadComposite.lfrac>([\s\S]*?)<\/cim:LoadComposite.lfrac>/g, obj, "lfrac", base.to_float, sub, context);

            /**
             * Fraction of constant-power load to be represented by this motor model (Pfrac) (&gt;=0.0 and &lt;=1.0).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:LoadComposite.pfrac>([\s\S]*?)<\/cim:LoadComposite.pfrac>/g, obj, "pfrac", base.to_float, sub, context);

            bucket = context.parsed.LoadComposite;
            if (null == bucket)
                context.parsed.LoadComposite = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Type of static load model.
         *
         */
        function parse_StaticLoadModelKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "StaticLoadModelKind";
            /**
             * Exponential P and Q equations are used and the following attributes are required:
             * kp1, kp2, kp3, kpf, ep1, ep2, ep3
             *
             * kq1, kq2, kq3, kqf, eq1, eq2, eq3.
             *
             */
            base.parse_element (/<cim:StaticLoadModelKind.exponential>([\s\S]*?)<\/cim:StaticLoadModelKind.exponential>/g, obj, "exponential", base.to_string, sub, context);

            /**
             * ZIP1 P and Q equations are used and the following attributes are required:
             * kp1, kp2, kp3, kpf
             *
             * kq1, kq2, kq3, kqf.
             *
             */
            base.parse_element (/<cim:StaticLoadModelKind.zIP1>([\s\S]*?)<\/cim:StaticLoadModelKind.zIP1>/g, obj, "zIP1", base.to_string, sub, context);

            /**
             * This model separates the frequency-dependent load (primarily motors) from other load.
             *
             * ZIP2 P and Q equations are used and the following attributes are required:
             *
             */
            base.parse_element (/<cim:StaticLoadModelKind.zIP2>([\s\S]*?)<\/cim:StaticLoadModelKind.zIP2>/g, obj, "zIP2", base.to_string, sub, context);

            /**
             * The load is represented as a constant impedance.
             *
             * ConstantZ P and Q equations are used and no attributes are required.
             *
             */
            base.parse_element (/<cim:StaticLoadModelKind.constantZ>([\s\S]*?)<\/cim:StaticLoadModelKind.constantZ>/g, obj, "constantZ", base.to_string, sub, context);

            bucket = context.parsed.StaticLoadModelKind;
            if (null == bucket)
                context.parsed.StaticLoadModelKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * These load models (known also as generic non-linear dynamic (GNLD) load models) can be used in mid-term and long-term voltage stability simulations (i.e., to study voltage collapse), as they can replace a more detailed representation of aggregate load, including induction motors, thermostatically controlled and static loads.
         *
         */
        function parse_LoadGenericNonLinear (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_LoadDynamics (context, sub);
            obj.cls = "LoadGenericNonLinear";
            /**
             * Steady state voltage index for reactive power (BS).
             *
             */
            base.parse_element (/<cim:LoadGenericNonLinear.bs>([\s\S]*?)<\/cim:LoadGenericNonLinear.bs>/g, obj, "bs", base.to_float, sub, context);

            /**
             * Transient voltage index for reactive power (BT).
             *
             */
            base.parse_element (/<cim:LoadGenericNonLinear.bt>([\s\S]*?)<\/cim:LoadGenericNonLinear.bt>/g, obj, "bt", base.to_float, sub, context);

            /**
             * Type of generic non-linear load model.
             *
             */
            base.parse_element (/<cim:LoadGenericNonLinear.genericNonLinearLoadModelType>([\s\S]*?)<\/cim:LoadGenericNonLinear.genericNonLinearLoadModelType>/g, obj, "genericNonLinearLoadModelType", base.to_string, sub, context);

            /**
             * Steady state voltage index for active power (LS).
             *
             */
            base.parse_element (/<cim:LoadGenericNonLinear.ls>([\s\S]*?)<\/cim:LoadGenericNonLinear.ls>/g, obj, "ls", base.to_float, sub, context);

            /**
             * Transient voltage index for active power (LT).
             *
             */
            base.parse_element (/<cim:LoadGenericNonLinear.lt>([\s\S]*?)<\/cim:LoadGenericNonLinear.lt>/g, obj, "lt", base.to_float, sub, context);

            /**
             * Dynamic portion of active load (P<sub>T</sub>).
             *
             */
            base.parse_element (/<cim:LoadGenericNonLinear.pt>([\s\S]*?)<\/cim:LoadGenericNonLinear.pt>/g, obj, "pt", base.to_float, sub, context);

            /**
             * Dynamic portion of reactive load (Q<sub>T</sub>).
             *
             */
            base.parse_element (/<cim:LoadGenericNonLinear.qt>([\s\S]*?)<\/cim:LoadGenericNonLinear.qt>/g, obj, "qt", base.to_float, sub, context);

            /**
             * Time constant of lag function of active power (T<sub>P</sub>).
             *
             */
            base.parse_element (/<cim:LoadGenericNonLinear.tp>([\s\S]*?)<\/cim:LoadGenericNonLinear.tp>/g, obj, "tp", base.to_string, sub, context);

            /**
             * Time constant of lag function of reactive power (T<sub>Q</sub>).
             *
             */
            base.parse_element (/<cim:LoadGenericNonLinear.tq>([\s\S]*?)<\/cim:LoadGenericNonLinear.tq>/g, obj, "tq", base.to_string, sub, context);

            bucket = context.parsed.LoadGenericNonLinear;
            if (null == bucket)
                context.parsed.LoadGenericNonLinear = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Standard aggregate load model comprised of static and/or dynamic components.
         *
         * A static load model represents the sensitivity of the real and reactive power consumed by the load to the amplitude and frequency of the bus voltage. A dynamic load model can used to represent the aggregate response of the motor components of the load.
         *
         */
        function parse_LoadAggregate (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_LoadDynamics (context, sub);
            obj.cls = "LoadAggregate";
            /**
             * Aggregate motor (dynamic) load associated with this aggregate load.
             *
             */
            base.parse_attribute (/<cim:LoadAggregate.LoadMotor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadMotor", sub, context, true);

            /**
             * Aggregate static load associated with this aggregate load.
             *
             */
            base.parse_attribute (/<cim:LoadAggregate.LoadStatic\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadStatic", sub, context, true);

            bucket = context.parsed.LoadAggregate;
            if (null == bucket)
                context.parsed.LoadAggregate = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_StaticLoadModelKind: parse_StaticLoadModelKind,
                parse_GenericNonLinearLoadModelKind: parse_GenericNonLinearLoadModelKind,
                parse_LoadDynamics: parse_LoadDynamics,
                parse_LoadMotor: parse_LoadMotor,
                parse_LoadStatic: parse_LoadStatic,
                parse_LoadGenericNonLinear: parse_LoadGenericNonLinear,
                parse_LoadComposite: parse_LoadComposite,
                parse_LoadAggregate: parse_LoadAggregate
            }
        );
    }
);