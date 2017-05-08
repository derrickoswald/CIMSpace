define
(
    ["model/base", "model/StandardModels"],
    /**
     * Underexcitation limiters (UELs) act to boost excitation.
     * The UEL typically senses either a combination of voltage and current of the synchronous machine or a combination of real and reactive power. Some UELs utilize a temperature or pressure recalibration feature, in which the UEL characteristic is shifted depending upon the generator cooling gas temperature or pressure.
     */
    function (base, StandardModels)
    {

        /**
         * The class represents the Type UEL2 which has either a straight-line or multi-segment characteristic when plotted in terms of machine reactive power output vs. real power output.
         * Reference: IEEE UEL2 421.5-2005 Section 10.2.  (Limit characteristic lookup table shown in Figure 10.4 (p 32) of the standard).
         */
        function parse_UnderexcLimIEEE2 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_UnderexcitationLimiterDynamics (context, sub);
            obj.cls = "UnderexcLimIEEE2";
            /**
             * UEL terminal voltage exponent applied to real power input to UEL limit look-up table (k1).
             * Typical Value = 2.
             */
            obj["k1"] = base.to_float (base.parse_element (/<cim:UnderexcLimIEEE2.k1>([\s\S]*?)<\/cim:UnderexcLimIEEE2.k1>/g, sub, context, true));
            /**
             * UEL terminal voltage exponent applied to reactive power output from UEL limit look-up table (k2).
             * Typical Value = 2.
             */
            obj["k2"] = base.to_float (base.parse_element (/<cim:UnderexcLimIEEE2.k2>([\s\S]*?)<\/cim:UnderexcLimIEEE2.k2>/g, sub, context, true));
            /**
             * Gain associated with optional integrator feedback input signal to UEL (K<sub>FB</sub>).
             * Typical Value = 0.
             */
            obj["kfb"] = base.parse_element (/<cim:UnderexcLimIEEE2.kfb>([\s\S]*?)<\/cim:UnderexcLimIEEE2.kfb>/g, sub, context, true);
            /**
             * UEL excitation system stabilizer gain (K<sub>UF</sub>).
             * Typical Value = 0.
             */
            obj["kuf"] = base.parse_element (/<cim:UnderexcLimIEEE2.kuf>([\s\S]*?)<\/cim:UnderexcLimIEEE2.kuf>/g, sub, context, true);
            /**
             * UEL integral gain (K<sub>UI</sub>).
             * Typical Value = 0.5.
             */
            obj["kui"] = base.parse_element (/<cim:UnderexcLimIEEE2.kui>([\s\S]*?)<\/cim:UnderexcLimIEEE2.kui>/g, sub, context, true);
            /**
             * UEL proportional gain (K<sub>UL</sub>).
             * Typical Value = 0.8.
             */
            obj["kul"] = base.parse_element (/<cim:UnderexcLimIEEE2.kul>([\s\S]*?)<\/cim:UnderexcLimIEEE2.kul>/g, sub, context, true);
            /**
             * Real power values for endpoints (P<sub>0</sub>).
             * Typical Value = 0.
             */
            obj["p0"] = base.parse_element (/<cim:UnderexcLimIEEE2.p0>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p0>/g, sub, context, true);
            /**
             * Real power values for endpoints (P<sub>1</sub>).
             * Typical Value = 0.3.
             */
            obj["p1"] = base.parse_element (/<cim:UnderexcLimIEEE2.p1>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p1>/g, sub, context, true);
            /**
             * Real power values for endpoints (P<sub>10</sub>).
             */
            obj["p10"] = base.parse_element (/<cim:UnderexcLimIEEE2.p10>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p10>/g, sub, context, true);
            /**
             * Real power values for endpoints (P<sub>2</sub>).
             * Typical Value = 0.6.
             */
            obj["p2"] = base.parse_element (/<cim:UnderexcLimIEEE2.p2>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p2>/g, sub, context, true);
            /**
             * Real power values for endpoints (P<sub>3</sub>).
             * Typical Value = 0.9.
             */
            obj["p3"] = base.parse_element (/<cim:UnderexcLimIEEE2.p3>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p3>/g, sub, context, true);
            /**
             * Real power values for endpoints (P<sub>4</sub>).
             * Typical Value = 1.02.
             */
            obj["p4"] = base.parse_element (/<cim:UnderexcLimIEEE2.p4>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p4>/g, sub, context, true);
            /**
             * Real power values for endpoints (P<sub>5</sub>).
             */
            obj["p5"] = base.parse_element (/<cim:UnderexcLimIEEE2.p5>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p5>/g, sub, context, true);
            /**
             * Real power values for endpoints (P<sub>6</sub>).
             */
            obj["p6"] = base.parse_element (/<cim:UnderexcLimIEEE2.p6>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p6>/g, sub, context, true);
            /**
             * Real power values for endpoints (P<sub>7</sub>).
             */
            obj["p7"] = base.parse_element (/<cim:UnderexcLimIEEE2.p7>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p7>/g, sub, context, true);
            /**
             * Real power values for endpoints (P<sub>8</sub>).
             */
            obj["p8"] = base.parse_element (/<cim:UnderexcLimIEEE2.p8>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p8>/g, sub, context, true);
            /**
             * Real power values for endpoints (P<sub>9</sub>).
             */
            obj["p9"] = base.parse_element (/<cim:UnderexcLimIEEE2.p9>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p9>/g, sub, context, true);
            /**
             * Reactive power values for endpoints (Q<sub>0</sub>).
             * Typical Value = -0.31.
             */
            obj["q0"] = base.parse_element (/<cim:UnderexcLimIEEE2.q0>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q0>/g, sub, context, true);
            /**
             * Reactive power values for endpoints (Q<sub>1</sub>).
             * Typical Value = -0.31.
             */
            obj["q1"] = base.parse_element (/<cim:UnderexcLimIEEE2.q1>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q1>/g, sub, context, true);
            /**
             * Reactive power values for endpoints (Q<sub>10</sub>).
             */
            obj["q10"] = base.parse_element (/<cim:UnderexcLimIEEE2.q10>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q10>/g, sub, context, true);
            /**
             * Reactive power values for endpoints (Q<sub>2</sub>).
             * Typical Value = -0.28.
             */
            obj["q2"] = base.parse_element (/<cim:UnderexcLimIEEE2.q2>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q2>/g, sub, context, true);
            /**
             * Reactive power values for endpoints (Q<sub>3</sub>).
             * Typical Value = -0.21.
             */
            obj["q3"] = base.parse_element (/<cim:UnderexcLimIEEE2.q3>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q3>/g, sub, context, true);
            /**
             * Reactive power values for endpoints (Q<sub>4</sub>).
             * Typical Value = 0.
             */
            obj["q4"] = base.parse_element (/<cim:UnderexcLimIEEE2.q4>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q4>/g, sub, context, true);
            /**
             * Reactive power values for endpoints (Q<sub>5</sub>).
             */
            obj["q5"] = base.parse_element (/<cim:UnderexcLimIEEE2.q5>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q5>/g, sub, context, true);
            /**
             * Reactive power values for endpoints (Q<sub>6</sub>).
             */
            obj["q6"] = base.parse_element (/<cim:UnderexcLimIEEE2.q6>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q6>/g, sub, context, true);
            /**
             * Reactive power values for endpoints (Q<sub>7</sub>).
             */
            obj["q7"] = base.parse_element (/<cim:UnderexcLimIEEE2.q7>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q7>/g, sub, context, true);
            /**
             * Reactive power values for endpoints (Q<sub>8</sub>).
             */
            obj["q8"] = base.parse_element (/<cim:UnderexcLimIEEE2.q8>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q8>/g, sub, context, true);
            /**
             * Reactive power values for endpoints (Q<sub>9</sub>).
             */
            obj["q9"] = base.parse_element (/<cim:UnderexcLimIEEE2.q9>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q9>/g, sub, context, true);
            /**
             * UEL lead time constant (T<sub>U1</sub>).
             * Typical Value = 0.
             */
            obj["tu1"] = base.parse_element (/<cim:UnderexcLimIEEE2.tu1>([\s\S]*?)<\/cim:UnderexcLimIEEE2.tu1>/g, sub, context, true);
            /**
             * UEL lag time constant (T<sub>U2</sub>).
             * Typical Value = 0.
             */
            obj["tu2"] = base.parse_element (/<cim:UnderexcLimIEEE2.tu2>([\s\S]*?)<\/cim:UnderexcLimIEEE2.tu2>/g, sub, context, true);
            /**
             * UEL lead time constant (T<sub>U3</sub>).
             * Typical Value = 0.
             */
            obj["tu3"] = base.parse_element (/<cim:UnderexcLimIEEE2.tu3>([\s\S]*?)<\/cim:UnderexcLimIEEE2.tu3>/g, sub, context, true);
            /**
             * UEL lag time constant (T<sub>U4</sub>).
             * Typical Value = 0.
             */
            obj["tu4"] = base.parse_element (/<cim:UnderexcLimIEEE2.tu4>([\s\S]*?)<\/cim:UnderexcLimIEEE2.tu4>/g, sub, context, true);
            /**
             * Time constant associated with optional integrator feedback input signal to UEL (T<sub>UL</sub>).
             * Typical Value = 0.
             */
            obj["tul"] = base.parse_element (/<cim:UnderexcLimIEEE2.tul>([\s\S]*?)<\/cim:UnderexcLimIEEE2.tul>/g, sub, context, true);
            /**
             * Real power filter time constant (T<sub>UP</sub>).
             * Typical Value = 5.
             */
            obj["tup"] = base.parse_element (/<cim:UnderexcLimIEEE2.tup>([\s\S]*?)<\/cim:UnderexcLimIEEE2.tup>/g, sub, context, true);
            /**
             * Reactive power filter time constant (T<sub>UQ</sub>).
             * Typical Value = 0.
             */
            obj["tuq"] = base.parse_element (/<cim:UnderexcLimIEEE2.tuq>([\s\S]*?)<\/cim:UnderexcLimIEEE2.tuq>/g, sub, context, true);
            /**
             * Voltage filter time constant (T<sub>UV</sub>).
             * Typical Value = 5.
             */
            obj["tuv"] = base.parse_element (/<cim:UnderexcLimIEEE2.tuv>([\s\S]*?)<\/cim:UnderexcLimIEEE2.tuv>/g, sub, context, true);
            /**
             * UEL integrator output maximum limit (V<sub>UIMAX</sub>).
             * Typical Value = 0.25.
             */
            obj["vuimax"] = base.parse_element (/<cim:UnderexcLimIEEE2.vuimax>([\s\S]*?)<\/cim:UnderexcLimIEEE2.vuimax>/g, sub, context, true);
            /**
             * UEL integrator output minimum limit (V<sub>UIMIN</sub>).
             * Typical Value = 0.
             */
            obj["vuimin"] = base.parse_element (/<cim:UnderexcLimIEEE2.vuimin>([\s\S]*?)<\/cim:UnderexcLimIEEE2.vuimin>/g, sub, context, true);
            /**
             * UEL output maximum limit (V<sub>ULMAX</sub>).
             * Typical Value = 0.25.
             */
            obj["vulmax"] = base.parse_element (/<cim:UnderexcLimIEEE2.vulmax>([\s\S]*?)<\/cim:UnderexcLimIEEE2.vulmax>/g, sub, context, true);
            /**
             * UEL output minimum limit (V<sub>ULMIN</sub>).
             * Typical Value = 0.
             */
            obj["vulmin"] = base.parse_element (/<cim:UnderexcLimIEEE2.vulmin>([\s\S]*?)<\/cim:UnderexcLimIEEE2.vulmin>/g, sub, context, true);
            bucket = context.parsed.UnderexcLimIEEE2;
            if (null == bucket)
                context.parsed.UnderexcLimIEEE2 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * <font color="#0f0f0f">Allis-Chalmers minimum excitation limiter.</font>
         */
        function parse_UnderexcLimX1 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_UnderexcitationLimiterDynamics (context, sub);
            obj.cls = "UnderexcLimX1";
            /**
             * Minimum excitation limit slope (K) (&gt;0).
             */
            obj["k"] = base.parse_element (/<cim:UnderexcLimX1.k>([\s\S]*?)<\/cim:UnderexcLimX1.k>/g, sub, context, true);
            /**
             * Differential gain (Kf2).
             */
            obj["kf2"] = base.parse_element (/<cim:UnderexcLimX1.kf2>([\s\S]*?)<\/cim:UnderexcLimX1.kf2>/g, sub, context, true);
            /**
             * Minimum excitation limit gain (Km).
             */
            obj["km"] = base.parse_element (/<cim:UnderexcLimX1.km>([\s\S]*?)<\/cim:UnderexcLimX1.km>/g, sub, context, true);
            /**
             * Minimum excitation limit value (MELMAX).
             */
            obj["melmax"] = base.parse_element (/<cim:UnderexcLimX1.melmax>([\s\S]*?)<\/cim:UnderexcLimX1.melmax>/g, sub, context, true);
            /**
             * Differential time constant (Tf2) (&gt;0).
             */
            obj["tf2"] = base.parse_element (/<cim:UnderexcLimX1.tf2>([\s\S]*?)<\/cim:UnderexcLimX1.tf2>/g, sub, context, true);
            /**
             * Minimum excitation limit time constant (Tm).
             */
            obj["tm"] = base.parse_element (/<cim:UnderexcLimX1.tm>([\s\S]*?)<\/cim:UnderexcLimX1.tm>/g, sub, context, true);
            bucket = context.parsed.UnderexcLimX1;
            if (null == bucket)
                context.parsed.UnderexcLimX1 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * <font color="#0f0f0f">Westinghouse minimum excitation limiter.</font>
         */
        function parse_UnderexcLimX2 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_UnderexcitationLimiterDynamics (context, sub);
            obj.cls = "UnderexcLimX2";
            /**
             * Differential gain (Kf2).
             */
            obj["kf2"] = base.parse_element (/<cim:UnderexcLimX2.kf2>([\s\S]*?)<\/cim:UnderexcLimX2.kf2>/g, sub, context, true);
            /**
             * Minimum excitation limit gain (Km).
             */
            obj["km"] = base.parse_element (/<cim:UnderexcLimX2.km>([\s\S]*?)<\/cim:UnderexcLimX2.km>/g, sub, context, true);
            /**
             * Minimum excitation limit value (MELMAX).
             */
            obj["melmax"] = base.parse_element (/<cim:UnderexcLimX2.melmax>([\s\S]*?)<\/cim:UnderexcLimX2.melmax>/g, sub, context, true);
            /**
             * Excitation center setting (Qo).
             */
            obj["qo"] = base.parse_element (/<cim:UnderexcLimX2.qo>([\s\S]*?)<\/cim:UnderexcLimX2.qo>/g, sub, context, true);
            /**
             * Excitation radius (R).
             */
            obj["r"] = base.parse_element (/<cim:UnderexcLimX2.r>([\s\S]*?)<\/cim:UnderexcLimX2.r>/g, sub, context, true);
            /**
             * Differential time constant (Tf2) (&gt;0).
             */
            obj["tf2"] = base.parse_element (/<cim:UnderexcLimX2.tf2>([\s\S]*?)<\/cim:UnderexcLimX2.tf2>/g, sub, context, true);
            /**
             * Minimum excitation limit time constant (Tm).
             */
            obj["tm"] = base.parse_element (/<cim:UnderexcLimX2.tm>([\s\S]*?)<\/cim:UnderexcLimX2.tm>/g, sub, context, true);
            bucket = context.parsed.UnderexcLimX2;
            if (null == bucket)
                context.parsed.UnderexcLimX2 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class represents the Type UEL1 model which has a circular limit boundary when plotted in terms of machine reactive power vs. real power output.
         * Reference: IEEE UEL1 421.5-2005 Section 10.1.
         */
        function parse_UnderexcLimIEEE1 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_UnderexcitationLimiterDynamics (context, sub);
            obj.cls = "UnderexcLimIEEE1";
            /**
             * UEL center setting (K<sub>UC</sub>).
             * Typical Value = 1.38.
             */
            obj["kuc"] = base.parse_element (/<cim:UnderexcLimIEEE1.kuc>([\s\S]*?)<\/cim:UnderexcLimIEEE1.kuc>/g, sub, context, true);
            /**
             * UEL excitation system stabilizer gain (K<sub>UF</sub>).
             * Typical Value = 3.3.
             */
            obj["kuf"] = base.parse_element (/<cim:UnderexcLimIEEE1.kuf>([\s\S]*?)<\/cim:UnderexcLimIEEE1.kuf>/g, sub, context, true);
            /**
             * UEL integral gain (K<sub>UI</sub>).
             * Typical Value = 0.
             */
            obj["kui"] = base.parse_element (/<cim:UnderexcLimIEEE1.kui>([\s\S]*?)<\/cim:UnderexcLimIEEE1.kui>/g, sub, context, true);
            /**
             * UEL proportional gain (K<sub>UL</sub>).
             * Typical Value = 100.
             */
            obj["kul"] = base.parse_element (/<cim:UnderexcLimIEEE1.kul>([\s\S]*?)<\/cim:UnderexcLimIEEE1.kul>/g, sub, context, true);
            /**
             * UEL radius setting (K<sub>UR</sub>).
             * Typical Value = 1.95.
             */
            obj["kur"] = base.parse_element (/<cim:UnderexcLimIEEE1.kur>([\s\S]*?)<\/cim:UnderexcLimIEEE1.kur>/g, sub, context, true);
            /**
             * UEL lead time constant (T<sub>U1</sub>).
             * Typical Value = 0.
             */
            obj["tu1"] = base.parse_element (/<cim:UnderexcLimIEEE1.tu1>([\s\S]*?)<\/cim:UnderexcLimIEEE1.tu1>/g, sub, context, true);
            /**
             * UEL lag time constant (T<sub>U2</sub>).
             * Typical Value = 0.05.
             */
            obj["tu2"] = base.parse_element (/<cim:UnderexcLimIEEE1.tu2>([\s\S]*?)<\/cim:UnderexcLimIEEE1.tu2>/g, sub, context, true);
            /**
             * UEL lead time constant (T<sub>U3</sub>).
             * Typical Value = 0.
             */
            obj["tu3"] = base.parse_element (/<cim:UnderexcLimIEEE1.tu3>([\s\S]*?)<\/cim:UnderexcLimIEEE1.tu3>/g, sub, context, true);
            /**
             * UEL lag time constant (T<sub>U4</sub>).
             * Typical Value = 0.
             */
            obj["tu4"] = base.parse_element (/<cim:UnderexcLimIEEE1.tu4>([\s\S]*?)<\/cim:UnderexcLimIEEE1.tu4>/g, sub, context, true);
            /**
             * UEL maximum limit for operating point phasor magnitude (V<sub>UCMAX</sub>).
             * Typical Value = 5.8.
             */
            obj["vucmax"] = base.parse_element (/<cim:UnderexcLimIEEE1.vucmax>([\s\S]*?)<\/cim:UnderexcLimIEEE1.vucmax>/g, sub, context, true);
            /**
             * UEL integrator output maximum limit (V<sub>UIMAX</sub>).
             */
            obj["vuimax"] = base.parse_element (/<cim:UnderexcLimIEEE1.vuimax>([\s\S]*?)<\/cim:UnderexcLimIEEE1.vuimax>/g, sub, context, true);
            /**
             * UEL integrator output minimum limit (V<sub>UIMIN</sub>).
             */
            obj["vuimin"] = base.parse_element (/<cim:UnderexcLimIEEE1.vuimin>([\s\S]*?)<\/cim:UnderexcLimIEEE1.vuimin>/g, sub, context, true);
            /**
             * UEL output maximum limit (V<sub>ULMAX</sub>).
             * Typical Value = 18.
             */
            obj["vulmax"] = base.parse_element (/<cim:UnderexcLimIEEE1.vulmax>([\s\S]*?)<\/cim:UnderexcLimIEEE1.vulmax>/g, sub, context, true);
            /**
             * UEL output minimum limit (V<sub>ULMIN</sub>).
             * Typical Value = -18.
             */
            obj["vulmin"] = base.parse_element (/<cim:UnderexcLimIEEE1.vulmin>([\s\S]*?)<\/cim:UnderexcLimIEEE1.vulmin>/g, sub, context, true);
            /**
             * UEL maximum limit for radius phasor magnitude (V<sub>URMAX</sub>).
             * Typical Value = 5.8.
             */
            obj["vurmax"] = base.parse_element (/<cim:UnderexcLimIEEE1.vurmax>([\s\S]*?)<\/cim:UnderexcLimIEEE1.vurmax>/g, sub, context, true);
            bucket = context.parsed.UnderexcLimIEEE1;
            if (null == bucket)
                context.parsed.UnderexcLimIEEE1 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This model can be derived from UnderexcLimIEEE2.
         * The limit characteristic (look �up table) is a single straight-line, the same as UnderexcLimIEEE2 (see Figure 10.4 (p 32), IEEE 421.5-2005 Section 10.2).
         */
        function parse_UnderexcLim2Simplified (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_UnderexcitationLimiterDynamics (context, sub);
            obj.cls = "UnderexcLim2Simplified";
            /**
             * Gain Under excitation limiter (Kui).
             * Typical Value = 0.1.
             */
            obj["kui"] = base.parse_element (/<cim:UnderexcLim2Simplified.kui>([\s\S]*?)<\/cim:UnderexcLim2Simplified.kui>/g, sub, context, true);
            /**
             * Segment P initial point (P0).
             * Typical Value = 0.
             */
            obj["p0"] = base.parse_element (/<cim:UnderexcLim2Simplified.p0>([\s\S]*?)<\/cim:UnderexcLim2Simplified.p0>/g, sub, context, true);
            /**
             * Segment P end point (P1).
             * Typical Value = 1.
             */
            obj["p1"] = base.parse_element (/<cim:UnderexcLim2Simplified.p1>([\s\S]*?)<\/cim:UnderexcLim2Simplified.p1>/g, sub, context, true);
            /**
             * Segment Q initial point (Q0).
             * Typical Value = -0.31.
             */
            obj["q0"] = base.parse_element (/<cim:UnderexcLim2Simplified.q0>([\s\S]*?)<\/cim:UnderexcLim2Simplified.q0>/g, sub, context, true);
            /**
             * Segment Q end point (Q1).
             * Typical Value = -0.1.
             */
            obj["q1"] = base.parse_element (/<cim:UnderexcLim2Simplified.q1>([\s\S]*?)<\/cim:UnderexcLim2Simplified.q1>/g, sub, context, true);
            /**
             * Maximum error signal (V<sub>UImax</sub>).
             * Typical Value = 1.
             */
            obj["vuimax"] = base.parse_element (/<cim:UnderexcLim2Simplified.vuimax>([\s\S]*?)<\/cim:UnderexcLim2Simplified.vuimax>/g, sub, context, true);
            /**
             * Minimum error signal (V<sub>UImin</sub>).
             * Typical Value = 0.
             */
            obj["vuimin"] = base.parse_element (/<cim:UnderexcLim2Simplified.vuimin>([\s\S]*?)<\/cim:UnderexcLim2Simplified.vuimin>/g, sub, context, true);
            bucket = context.parsed.UnderexcLim2Simplified;
            if (null == bucket)
                context.parsed.UnderexcLim2Simplified = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Underexcitation limiter function block whose behaviour is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         */
        function parse_UnderexcitationLimiterDynamics (context, sub)
        {
            var obj;
            var bucket;

            obj = StandardModels.parse_DynamicsFunctionBlock (context, sub);
            obj.cls = "UnderexcitationLimiterDynamics";
            /**
             * Excitation system model with which this underexcitation limiter model is associated.
             */
            obj["ExcitationSystemDynamics"] = base.parse_attribute (/<cim:UnderexcitationLimiterDynamics.ExcitationSystemDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Remote input signal used by this underexcitation limiter model.
             */
            obj["RemoteInputSignal"] = base.parse_attribute (/<cim:UnderexcitationLimiterDynamics.RemoteInputSignal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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