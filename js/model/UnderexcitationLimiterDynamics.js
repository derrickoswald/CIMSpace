define
(
    ["model/base", "model/StandardModels"],
    /**
     * Underexcitation limiters (UELs) act to boost excitation.
     *
     * The UEL typically senses either a combination of voltage and current of the synchronous machine or a combination of real and reactive power. Some UELs utilize a temperature or pressure recalibration feature, in which the UEL characteristic is shifted depending upon the generator cooling gas temperature or pressure.
     *
     */
    function (base, StandardModels)
    {

        /**
         * The class represents the Type UEL2 which has either a straight-line or multi-segment characteristic when plotted in terms of machine reactive power output vs. real power output.
         *
         * Reference: IEEE UEL2 421.5-2005 Section 10.2.  (Limit characteristic lookup table shown in Figure 10.4 (p 32) of the standard).
         *
         */
        function parse_UnderexcLimIEEE2 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_UnderexcitationLimiterDynamics (context, sub);
            obj.cls = "UnderexcLimIEEE2";
            /**
             * UEL terminal voltage exponent applied to real power input to UEL limit look-up table (k1).
             *
             * Typical Value = 2.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.k1>([\s\S]*?)<\/cim:UnderexcLimIEEE2.k1>/g, obj, "k1", base.to_float, sub, context);

            /**
             * UEL terminal voltage exponent applied to reactive power output from UEL limit look-up table (k2).
             *
             * Typical Value = 2.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.k2>([\s\S]*?)<\/cim:UnderexcLimIEEE2.k2>/g, obj, "k2", base.to_float, sub, context);

            /**
             * Gain associated with optional integrator feedback input signal to UEL (K<sub>FB</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.kfb>([\s\S]*?)<\/cim:UnderexcLimIEEE2.kfb>/g, obj, "kfb", base.to_string, sub, context);

            /**
             * UEL excitation system stabilizer gain (K<sub>UF</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.kuf>([\s\S]*?)<\/cim:UnderexcLimIEEE2.kuf>/g, obj, "kuf", base.to_string, sub, context);

            /**
             * UEL integral gain (K<sub>UI</sub>).
             *
             * Typical Value = 0.5.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.kui>([\s\S]*?)<\/cim:UnderexcLimIEEE2.kui>/g, obj, "kui", base.to_string, sub, context);

            /**
             * UEL proportional gain (K<sub>UL</sub>).
             *
             * Typical Value = 0.8.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.kul>([\s\S]*?)<\/cim:UnderexcLimIEEE2.kul>/g, obj, "kul", base.to_string, sub, context);

            /**
             * Real power values for endpoints (P<sub>0</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.p0>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p0>/g, obj, "p0", base.to_string, sub, context);

            /**
             * Real power values for endpoints (P<sub>1</sub>).
             *
             * Typical Value = 0.3.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.p1>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p1>/g, obj, "p1", base.to_string, sub, context);

            /**
             * Real power values for endpoints (P<sub>10</sub>).
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.p10>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p10>/g, obj, "p10", base.to_string, sub, context);

            /**
             * Real power values for endpoints (P<sub>2</sub>).
             *
             * Typical Value = 0.6.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.p2>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p2>/g, obj, "p2", base.to_string, sub, context);

            /**
             * Real power values for endpoints (P<sub>3</sub>).
             *
             * Typical Value = 0.9.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.p3>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p3>/g, obj, "p3", base.to_string, sub, context);

            /**
             * Real power values for endpoints (P<sub>4</sub>).
             *
             * Typical Value = 1.02.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.p4>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p4>/g, obj, "p4", base.to_string, sub, context);

            /**
             * Real power values for endpoints (P<sub>5</sub>).
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.p5>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p5>/g, obj, "p5", base.to_string, sub, context);

            /**
             * Real power values for endpoints (P<sub>6</sub>).
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.p6>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p6>/g, obj, "p6", base.to_string, sub, context);

            /**
             * Real power values for endpoints (P<sub>7</sub>).
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.p7>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p7>/g, obj, "p7", base.to_string, sub, context);

            /**
             * Real power values for endpoints (P<sub>8</sub>).
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.p8>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p8>/g, obj, "p8", base.to_string, sub, context);

            /**
             * Real power values for endpoints (P<sub>9</sub>).
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.p9>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p9>/g, obj, "p9", base.to_string, sub, context);

            /**
             * Reactive power values for endpoints (Q<sub>0</sub>).
             *
             * Typical Value = -0.31.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.q0>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q0>/g, obj, "q0", base.to_string, sub, context);

            /**
             * Reactive power values for endpoints (Q<sub>1</sub>).
             *
             * Typical Value = -0.31.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.q1>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q1>/g, obj, "q1", base.to_string, sub, context);

            /**
             * Reactive power values for endpoints (Q<sub>10</sub>).
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.q10>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q10>/g, obj, "q10", base.to_string, sub, context);

            /**
             * Reactive power values for endpoints (Q<sub>2</sub>).
             *
             * Typical Value = -0.28.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.q2>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q2>/g, obj, "q2", base.to_string, sub, context);

            /**
             * Reactive power values for endpoints (Q<sub>3</sub>).
             *
             * Typical Value = -0.21.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.q3>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q3>/g, obj, "q3", base.to_string, sub, context);

            /**
             * Reactive power values for endpoints (Q<sub>4</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.q4>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q4>/g, obj, "q4", base.to_string, sub, context);

            /**
             * Reactive power values for endpoints (Q<sub>5</sub>).
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.q5>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q5>/g, obj, "q5", base.to_string, sub, context);

            /**
             * Reactive power values for endpoints (Q<sub>6</sub>).
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.q6>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q6>/g, obj, "q6", base.to_string, sub, context);

            /**
             * Reactive power values for endpoints (Q<sub>7</sub>).
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.q7>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q7>/g, obj, "q7", base.to_string, sub, context);

            /**
             * Reactive power values for endpoints (Q<sub>8</sub>).
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.q8>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q8>/g, obj, "q8", base.to_string, sub, context);

            /**
             * Reactive power values for endpoints (Q<sub>9</sub>).
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.q9>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q9>/g, obj, "q9", base.to_string, sub, context);

            /**
             * UEL lead time constant (T<sub>U1</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.tu1>([\s\S]*?)<\/cim:UnderexcLimIEEE2.tu1>/g, obj, "tu1", base.to_string, sub, context);

            /**
             * UEL lag time constant (T<sub>U2</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.tu2>([\s\S]*?)<\/cim:UnderexcLimIEEE2.tu2>/g, obj, "tu2", base.to_string, sub, context);

            /**
             * UEL lead time constant (T<sub>U3</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.tu3>([\s\S]*?)<\/cim:UnderexcLimIEEE2.tu3>/g, obj, "tu3", base.to_string, sub, context);

            /**
             * UEL lag time constant (T<sub>U4</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.tu4>([\s\S]*?)<\/cim:UnderexcLimIEEE2.tu4>/g, obj, "tu4", base.to_string, sub, context);

            /**
             * Time constant associated with optional integrator feedback input signal to UEL (T<sub>UL</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.tul>([\s\S]*?)<\/cim:UnderexcLimIEEE2.tul>/g, obj, "tul", base.to_string, sub, context);

            /**
             * Real power filter time constant (T<sub>UP</sub>).
             *
             * Typical Value = 5.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.tup>([\s\S]*?)<\/cim:UnderexcLimIEEE2.tup>/g, obj, "tup", base.to_string, sub, context);

            /**
             * Reactive power filter time constant (T<sub>UQ</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.tuq>([\s\S]*?)<\/cim:UnderexcLimIEEE2.tuq>/g, obj, "tuq", base.to_string, sub, context);

            /**
             * Voltage filter time constant (T<sub>UV</sub>).
             *
             * Typical Value = 5.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.tuv>([\s\S]*?)<\/cim:UnderexcLimIEEE2.tuv>/g, obj, "tuv", base.to_string, sub, context);

            /**
             * UEL integrator output maximum limit (V<sub>UIMAX</sub>).
             *
             * Typical Value = 0.25.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.vuimax>([\s\S]*?)<\/cim:UnderexcLimIEEE2.vuimax>/g, obj, "vuimax", base.to_string, sub, context);

            /**
             * UEL integrator output minimum limit (V<sub>UIMIN</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.vuimin>([\s\S]*?)<\/cim:UnderexcLimIEEE2.vuimin>/g, obj, "vuimin", base.to_string, sub, context);

            /**
             * UEL output maximum limit (V<sub>ULMAX</sub>).
             *
             * Typical Value = 0.25.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.vulmax>([\s\S]*?)<\/cim:UnderexcLimIEEE2.vulmax>/g, obj, "vulmax", base.to_string, sub, context);

            /**
             * UEL output minimum limit (V<sub>ULMIN</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE2.vulmin>([\s\S]*?)<\/cim:UnderexcLimIEEE2.vulmin>/g, obj, "vulmin", base.to_string, sub, context);

            bucket = context.parsed.UnderexcLimIEEE2;
            if (null == bucket)
                context.parsed.UnderexcLimIEEE2 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * <font color="#0f0f0f">Allis-Chalmers minimum excitation limiter.</font>
         *
         */
        function parse_UnderexcLimX1 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_UnderexcitationLimiterDynamics (context, sub);
            obj.cls = "UnderexcLimX1";
            /**
             * Minimum excitation limit slope (K) (&gt;0).
             *
             */
            base.parse_element (/<cim:UnderexcLimX1.k>([\s\S]*?)<\/cim:UnderexcLimX1.k>/g, obj, "k", base.to_string, sub, context);

            /**
             * Differential gain (Kf2).
             *
             */
            base.parse_element (/<cim:UnderexcLimX1.kf2>([\s\S]*?)<\/cim:UnderexcLimX1.kf2>/g, obj, "kf2", base.to_string, sub, context);

            /**
             * Minimum excitation limit gain (Km).
             *
             */
            base.parse_element (/<cim:UnderexcLimX1.km>([\s\S]*?)<\/cim:UnderexcLimX1.km>/g, obj, "km", base.to_string, sub, context);

            /**
             * Minimum excitation limit value (MELMAX).
             *
             */
            base.parse_element (/<cim:UnderexcLimX1.melmax>([\s\S]*?)<\/cim:UnderexcLimX1.melmax>/g, obj, "melmax", base.to_string, sub, context);

            /**
             * Differential time constant (Tf2) (&gt;0).
             *
             */
            base.parse_element (/<cim:UnderexcLimX1.tf2>([\s\S]*?)<\/cim:UnderexcLimX1.tf2>/g, obj, "tf2", base.to_string, sub, context);

            /**
             * Minimum excitation limit time constant (Tm).
             *
             */
            base.parse_element (/<cim:UnderexcLimX1.tm>([\s\S]*?)<\/cim:UnderexcLimX1.tm>/g, obj, "tm", base.to_string, sub, context);

            bucket = context.parsed.UnderexcLimX1;
            if (null == bucket)
                context.parsed.UnderexcLimX1 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * <font color="#0f0f0f">Westinghouse minimum excitation limiter.</font>
         *
         */
        function parse_UnderexcLimX2 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_UnderexcitationLimiterDynamics (context, sub);
            obj.cls = "UnderexcLimX2";
            /**
             * Differential gain (Kf2).
             *
             */
            base.parse_element (/<cim:UnderexcLimX2.kf2>([\s\S]*?)<\/cim:UnderexcLimX2.kf2>/g, obj, "kf2", base.to_string, sub, context);

            /**
             * Minimum excitation limit gain (Km).
             *
             */
            base.parse_element (/<cim:UnderexcLimX2.km>([\s\S]*?)<\/cim:UnderexcLimX2.km>/g, obj, "km", base.to_string, sub, context);

            /**
             * Minimum excitation limit value (MELMAX).
             *
             */
            base.parse_element (/<cim:UnderexcLimX2.melmax>([\s\S]*?)<\/cim:UnderexcLimX2.melmax>/g, obj, "melmax", base.to_string, sub, context);

            /**
             * Excitation center setting (Qo).
             *
             */
            base.parse_element (/<cim:UnderexcLimX2.qo>([\s\S]*?)<\/cim:UnderexcLimX2.qo>/g, obj, "qo", base.to_string, sub, context);

            /**
             * Excitation radius (R).
             *
             */
            base.parse_element (/<cim:UnderexcLimX2.r>([\s\S]*?)<\/cim:UnderexcLimX2.r>/g, obj, "r", base.to_string, sub, context);

            /**
             * Differential time constant (Tf2) (&gt;0).
             *
             */
            base.parse_element (/<cim:UnderexcLimX2.tf2>([\s\S]*?)<\/cim:UnderexcLimX2.tf2>/g, obj, "tf2", base.to_string, sub, context);

            /**
             * Minimum excitation limit time constant (Tm).
             *
             */
            base.parse_element (/<cim:UnderexcLimX2.tm>([\s\S]*?)<\/cim:UnderexcLimX2.tm>/g, obj, "tm", base.to_string, sub, context);

            bucket = context.parsed.UnderexcLimX2;
            if (null == bucket)
                context.parsed.UnderexcLimX2 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class represents the Type UEL1 model which has a circular limit boundary when plotted in terms of machine reactive power vs. real power output.
         *
         * Reference: IEEE UEL1 421.5-2005 Section 10.1.
         *
         */
        function parse_UnderexcLimIEEE1 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_UnderexcitationLimiterDynamics (context, sub);
            obj.cls = "UnderexcLimIEEE1";
            /**
             * UEL center setting (K<sub>UC</sub>).
             *
             * Typical Value = 1.38.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE1.kuc>([\s\S]*?)<\/cim:UnderexcLimIEEE1.kuc>/g, obj, "kuc", base.to_string, sub, context);

            /**
             * UEL excitation system stabilizer gain (K<sub>UF</sub>).
             *
             * Typical Value = 3.3.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE1.kuf>([\s\S]*?)<\/cim:UnderexcLimIEEE1.kuf>/g, obj, "kuf", base.to_string, sub, context);

            /**
             * UEL integral gain (K<sub>UI</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE1.kui>([\s\S]*?)<\/cim:UnderexcLimIEEE1.kui>/g, obj, "kui", base.to_string, sub, context);

            /**
             * UEL proportional gain (K<sub>UL</sub>).
             *
             * Typical Value = 100.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE1.kul>([\s\S]*?)<\/cim:UnderexcLimIEEE1.kul>/g, obj, "kul", base.to_string, sub, context);

            /**
             * UEL radius setting (K<sub>UR</sub>).
             *
             * Typical Value = 1.95.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE1.kur>([\s\S]*?)<\/cim:UnderexcLimIEEE1.kur>/g, obj, "kur", base.to_string, sub, context);

            /**
             * UEL lead time constant (T<sub>U1</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE1.tu1>([\s\S]*?)<\/cim:UnderexcLimIEEE1.tu1>/g, obj, "tu1", base.to_string, sub, context);

            /**
             * UEL lag time constant (T<sub>U2</sub>).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE1.tu2>([\s\S]*?)<\/cim:UnderexcLimIEEE1.tu2>/g, obj, "tu2", base.to_string, sub, context);

            /**
             * UEL lead time constant (T<sub>U3</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE1.tu3>([\s\S]*?)<\/cim:UnderexcLimIEEE1.tu3>/g, obj, "tu3", base.to_string, sub, context);

            /**
             * UEL lag time constant (T<sub>U4</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE1.tu4>([\s\S]*?)<\/cim:UnderexcLimIEEE1.tu4>/g, obj, "tu4", base.to_string, sub, context);

            /**
             * UEL maximum limit for operating point phasor magnitude (V<sub>UCMAX</sub>).
             *
             * Typical Value = 5.8.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE1.vucmax>([\s\S]*?)<\/cim:UnderexcLimIEEE1.vucmax>/g, obj, "vucmax", base.to_string, sub, context);

            /**
             * UEL integrator output maximum limit (V<sub>UIMAX</sub>).
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE1.vuimax>([\s\S]*?)<\/cim:UnderexcLimIEEE1.vuimax>/g, obj, "vuimax", base.to_string, sub, context);

            /**
             * UEL integrator output minimum limit (V<sub>UIMIN</sub>).
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE1.vuimin>([\s\S]*?)<\/cim:UnderexcLimIEEE1.vuimin>/g, obj, "vuimin", base.to_string, sub, context);

            /**
             * UEL output maximum limit (V<sub>ULMAX</sub>).
             *
             * Typical Value = 18.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE1.vulmax>([\s\S]*?)<\/cim:UnderexcLimIEEE1.vulmax>/g, obj, "vulmax", base.to_string, sub, context);

            /**
             * UEL output minimum limit (V<sub>ULMIN</sub>).
             *
             * Typical Value = -18.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE1.vulmin>([\s\S]*?)<\/cim:UnderexcLimIEEE1.vulmin>/g, obj, "vulmin", base.to_string, sub, context);

            /**
             * UEL maximum limit for radius phasor magnitude (V<sub>URMAX</sub>).
             *
             * Typical Value = 5.8.
             *
             */
            base.parse_element (/<cim:UnderexcLimIEEE1.vurmax>([\s\S]*?)<\/cim:UnderexcLimIEEE1.vurmax>/g, obj, "vurmax", base.to_string, sub, context);

            bucket = context.parsed.UnderexcLimIEEE1;
            if (null == bucket)
                context.parsed.UnderexcLimIEEE1 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This model can be derived from UnderexcLimIEEE2.
         *
         * The limit characteristic (look �up table) is a single straight-line, the same as UnderexcLimIEEE2 (see Figure 10.4 (p 32), IEEE 421.5-2005 Section 10.2).
         *
         */
        function parse_UnderexcLim2Simplified (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_UnderexcitationLimiterDynamics (context, sub);
            obj.cls = "UnderexcLim2Simplified";
            /**
             * Gain Under excitation limiter (Kui).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:UnderexcLim2Simplified.kui>([\s\S]*?)<\/cim:UnderexcLim2Simplified.kui>/g, obj, "kui", base.to_string, sub, context);

            /**
             * Segment P initial point (P0).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:UnderexcLim2Simplified.p0>([\s\S]*?)<\/cim:UnderexcLim2Simplified.p0>/g, obj, "p0", base.to_string, sub, context);

            /**
             * Segment P end point (P1).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:UnderexcLim2Simplified.p1>([\s\S]*?)<\/cim:UnderexcLim2Simplified.p1>/g, obj, "p1", base.to_string, sub, context);

            /**
             * Segment Q initial point (Q0).
             *
             * Typical Value = -0.31.
             *
             */
            base.parse_element (/<cim:UnderexcLim2Simplified.q0>([\s\S]*?)<\/cim:UnderexcLim2Simplified.q0>/g, obj, "q0", base.to_string, sub, context);

            /**
             * Segment Q end point (Q1).
             *
             * Typical Value = -0.1.
             *
             */
            base.parse_element (/<cim:UnderexcLim2Simplified.q1>([\s\S]*?)<\/cim:UnderexcLim2Simplified.q1>/g, obj, "q1", base.to_string, sub, context);

            /**
             * Maximum error signal (V<sub>UImax</sub>).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:UnderexcLim2Simplified.vuimax>([\s\S]*?)<\/cim:UnderexcLim2Simplified.vuimax>/g, obj, "vuimax", base.to_string, sub, context);

            /**
             * Minimum error signal (V<sub>UImin</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:UnderexcLim2Simplified.vuimin>([\s\S]*?)<\/cim:UnderexcLim2Simplified.vuimin>/g, obj, "vuimin", base.to_string, sub, context);

            bucket = context.parsed.UnderexcLim2Simplified;
            if (null == bucket)
                context.parsed.UnderexcLim2Simplified = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Underexcitation limiter function block whose behaviour is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         *
         */
        function parse_UnderexcitationLimiterDynamics (context, sub)
        {
            var obj;
            var bucket;

            obj = StandardModels.parse_DynamicsFunctionBlock (context, sub);
            obj.cls = "UnderexcitationLimiterDynamics";
            /**
             * Excitation system model with which this underexcitation limiter model is associated.
             *
             */
            base.parse_attribute (/<cim:UnderexcitationLimiterDynamics.ExcitationSystemDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExcitationSystemDynamics", sub, context, true);

            /**
             * Remote input signal used by this underexcitation limiter model.
             *
             */
            base.parse_attribute (/<cim:UnderexcitationLimiterDynamics.RemoteInputSignal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemoteInputSignal", sub, context, true);

            bucket = context.parsed.UnderexcitationLimiterDynamics;
            if (null == bucket)
                context.parsed.UnderexcitationLimiterDynamics = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_UnderexcitationLimiterDynamics: parse_UnderexcitationLimiterDynamics,
                parse_UnderexcLim2Simplified: parse_UnderexcLim2Simplified,
                parse_UnderexcLimIEEE2: parse_UnderexcLimIEEE2,
                parse_UnderexcLimX2: parse_UnderexcLimX2,
                parse_UnderexcLimIEEE1: parse_UnderexcLimIEEE1,
                parse_UnderexcLimX1: parse_UnderexcLimX1
            }
        );
    }
);