define
(
    ["model/base", "model/StandardModels"],
    /**
     * The power system stabilizer (PSS) model provides an input (Vs) to the excitation system model to improve damping of system oscillations.
     *
     * A variety of input signals may be used depending on the particular design.
     *
     */
    function (base, StandardModels)
    {

        /**
         * Single input power system stabilizer.
         *
         * It is a modified version in order to allow representation of various vendors' implementations on PSS type 1A.
         *
         */
        function parse_Pss1A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PowerSystemStabilizerDynamics (context, sub);
            obj.cls = "Pss1A";
            /**
             * Notch filter parameter (A1).
             *
             */
            base.parse_element (/<cim:Pss1A.a1>([\s\S]*?)<\/cim:Pss1A.a1>/g, obj, "a1", base.to_string, sub, context);

            /**
             * Notch filter parameter (A2).
             *
             */
            base.parse_element (/<cim:Pss1A.a2>([\s\S]*?)<\/cim:Pss1A.a2>/g, obj, "a2", base.to_string, sub, context);

            /**
             * Notch filter parameter (A3).
             *
             */
            base.parse_element (/<cim:Pss1A.a3>([\s\S]*?)<\/cim:Pss1A.a3>/g, obj, "a3", base.to_string, sub, context);

            /**
             * Notch filter parameter (A4).
             *
             */
            base.parse_element (/<cim:Pss1A.a4>([\s\S]*?)<\/cim:Pss1A.a4>/g, obj, "a4", base.to_string, sub, context);

            /**
             * Notch filter parameter (A5).
             *
             */
            base.parse_element (/<cim:Pss1A.a5>([\s\S]*?)<\/cim:Pss1A.a5>/g, obj, "a5", base.to_string, sub, context);

            /**
             * Notch filter parameter (A6).
             *
             */
            base.parse_element (/<cim:Pss1A.a6>([\s\S]*?)<\/cim:Pss1A.a6>/g, obj, "a6", base.to_string, sub, context);

            /**
             * Notch filter parameter (A7).
             *
             */
            base.parse_element (/<cim:Pss1A.a7>([\s\S]*?)<\/cim:Pss1A.a7>/g, obj, "a7", base.to_string, sub, context);

            /**
             * Notch filter parameter (A8).
             *
             */
            base.parse_element (/<cim:Pss1A.a8>([\s\S]*?)<\/cim:Pss1A.a8>/g, obj, "a8", base.to_string, sub, context);

            /**
             * Type of input signal.
             *
             */
            base.parse_element (/<cim:Pss1A.inputSignalType>([\s\S]*?)<\/cim:Pss1A.inputSignalType>/g, obj, "inputSignalType", base.to_string, sub, context);

            /**
             * Selector (Kd).
             * true = e<sup>-sTdelay</sup> used
             *
             * false = e<sup>-sTdelay</sup> not used.
             *
             */
            base.parse_element (/<cim:Pss1A.kd>([\s\S]*?)<\/cim:Pss1A.kd>/g, obj, "kd", base.to_boolean, sub, context);

            /**
             * Stabilizer gain (Ks).
             *
             */
            base.parse_element (/<cim:Pss1A.ks>([\s\S]*?)<\/cim:Pss1A.ks>/g, obj, "ks", base.to_string, sub, context);

            /**
             * Lead/lag time constant (T1).
             *
             */
            base.parse_element (/<cim:Pss1A.t1>([\s\S]*?)<\/cim:Pss1A.t1>/g, obj, "t1", base.to_string, sub, context);

            /**
             * Lead/lag time constant (T2).
             *
             */
            base.parse_element (/<cim:Pss1A.t2>([\s\S]*?)<\/cim:Pss1A.t2>/g, obj, "t2", base.to_string, sub, context);

            /**
             * Lead/lag time constant (T3).
             *
             */
            base.parse_element (/<cim:Pss1A.t3>([\s\S]*?)<\/cim:Pss1A.t3>/g, obj, "t3", base.to_string, sub, context);

            /**
             * Lead/lag time constant (T4).
             *
             */
            base.parse_element (/<cim:Pss1A.t4>([\s\S]*?)<\/cim:Pss1A.t4>/g, obj, "t4", base.to_string, sub, context);

            /**
             * Washout time constant (T5).
             *
             */
            base.parse_element (/<cim:Pss1A.t5>([\s\S]*?)<\/cim:Pss1A.t5>/g, obj, "t5", base.to_string, sub, context);

            /**
             * Transducer time constant (T6).
             *
             */
            base.parse_element (/<cim:Pss1A.t6>([\s\S]*?)<\/cim:Pss1A.t6>/g, obj, "t6", base.to_string, sub, context);

            /**
             * Time constant (Tdelay).
             *
             */
            base.parse_element (/<cim:Pss1A.tdelay>([\s\S]*?)<\/cim:Pss1A.tdelay>/g, obj, "tdelay", base.to_string, sub, context);

            /**
             * Stabilizer input cutoff threshold (Vcl).
             *
             */
            base.parse_element (/<cim:Pss1A.vcl>([\s\S]*?)<\/cim:Pss1A.vcl>/g, obj, "vcl", base.to_string, sub, context);

            /**
             * Stabilizer input cutoff threshold (Vcu).
             *
             */
            base.parse_element (/<cim:Pss1A.vcu>([\s\S]*?)<\/cim:Pss1A.vcu>/g, obj, "vcu", base.to_string, sub, context);

            /**
             * Maximum stabilizer output (Vrmax).
             *
             */
            base.parse_element (/<cim:Pss1A.vrmax>([\s\S]*?)<\/cim:Pss1A.vrmax>/g, obj, "vrmax", base.to_string, sub, context);

            /**
             * Minimum stabilizer output (Vrmin).
             *
             */
            base.parse_element (/<cim:Pss1A.vrmin>([\s\S]*?)<\/cim:Pss1A.vrmin>/g, obj, "vrmin", base.to_string, sub, context);

            bucket = context.parsed.Pss1A;
            if (null == bucket)
                context.parsed.Pss1A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * PSS Slovakian type � three inputs.
         *
         */
        function parse_PssSK (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PowerSystemStabilizerDynamics (context, sub);
            obj.cls = "PssSK";
            /**
             * Gain P (K1).
             *
             * Typical Value = -0.3.
             *
             */
            base.parse_element (/<cim:PssSK.k1>([\s\S]*?)<\/cim:PssSK.k1>/g, obj, "k1", base.to_string, sub, context);

            /**
             * Gain fe (K2).
             *
             * Typical Value = -0.15.
             *
             */
            base.parse_element (/<cim:PssSK.k2>([\s\S]*?)<\/cim:PssSK.k2>/g, obj, "k2", base.to_string, sub, context);

            /**
             * Gain If (K3).
             *
             * Typical Value = 10.
             *
             */
            base.parse_element (/<cim:PssSK.k3>([\s\S]*?)<\/cim:PssSK.k3>/g, obj, "k3", base.to_string, sub, context);

            /**
             * Denominator time constant (T1).
             *
             * Typical Value = 0.3.
             *
             */
            base.parse_element (/<cim:PssSK.t1>([\s\S]*?)<\/cim:PssSK.t1>/g, obj, "t1", base.to_string, sub, context);

            /**
             * Filter time constant (T2).
             *
             * Typical Value = 0.35.
             *
             */
            base.parse_element (/<cim:PssSK.t2>([\s\S]*?)<\/cim:PssSK.t2>/g, obj, "t2", base.to_string, sub, context);

            /**
             * Denominator time constant (T3).
             *
             * Typical Value = 0.22.
             *
             */
            base.parse_element (/<cim:PssSK.t3>([\s\S]*?)<\/cim:PssSK.t3>/g, obj, "t3", base.to_string, sub, context);

            /**
             * Filter time constant (T4).
             *
             * Typical Value = 0.02.
             *
             */
            base.parse_element (/<cim:PssSK.t4>([\s\S]*?)<\/cim:PssSK.t4>/g, obj, "t4", base.to_string, sub, context);

            /**
             * Denominator time constant (T5).
             *
             * Typical Value = 0.02.
             *
             */
            base.parse_element (/<cim:PssSK.t5>([\s\S]*?)<\/cim:PssSK.t5>/g, obj, "t5", base.to_string, sub, context);

            /**
             * Filter time constant (T6).
             *
             * Typical Value = 0.02.
             *
             */
            base.parse_element (/<cim:PssSK.t6>([\s\S]*?)<\/cim:PssSK.t6>/g, obj, "t6", base.to_string, sub, context);

            /**
             * Stabilizer output max limit (Vsmax).
             *
             * Typical Value = 0.4.
             *
             */
            base.parse_element (/<cim:PssSK.vsmax>([\s\S]*?)<\/cim:PssSK.vsmax>/g, obj, "vsmax", base.to_string, sub, context);

            /**
             * Stabilizer output min limit (Vsmin).
             *
             * Typical Value = -0.4.
             *
             */
            base.parse_element (/<cim:PssSK.vsmin>([\s\S]*?)<\/cim:PssSK.vsmin>/g, obj, "vsmin", base.to_string, sub, context);

            bucket = context.parsed.PssSK;
            if (null == bucket)
                context.parsed.PssSK = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type PSS1A power system stabilizer model.
         *
         * PSS1A is the generalized form of a PSS with a single input. Some common stabilizer input signals are speed, frequency, and power.
         *
         */
        function parse_PssIEEE1A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PowerSystemStabilizerDynamics (context, sub);
            obj.cls = "PssIEEE1A";
            /**
             * PSS signal conditioning frequency filter constant (A1).
             *
             * Typical Value = 0.061.
             *
             */
            base.parse_element (/<cim:PssIEEE1A.a1>([\s\S]*?)<\/cim:PssIEEE1A.a1>/g, obj, "a1", base.to_string, sub, context);

            /**
             * PSS signal conditioning frequency filter constant (A2).
             *
             * Typical Value = 0.0017.
             *
             */
            base.parse_element (/<cim:PssIEEE1A.a2>([\s\S]*?)<\/cim:PssIEEE1A.a2>/g, obj, "a2", base.to_string, sub, context);

            /**
             * Type of input signal.
             *
             * Typical Value = rotorAngularFrequencyDeviation.
             *
             */
            base.parse_element (/<cim:PssIEEE1A.inputSignalType>([\s\S]*?)<\/cim:PssIEEE1A.inputSignalType>/g, obj, "inputSignalType", base.to_string, sub, context);

            /**
             * Stabilizer gain (Ks).
             *
             * Typical Value = 5.
             *
             */
            base.parse_element (/<cim:PssIEEE1A.ks>([\s\S]*?)<\/cim:PssIEEE1A.ks>/g, obj, "ks", base.to_string, sub, context);

            /**
             * Lead/lag time constant (T1).
             *
             * Typical Value = 0.3.
             *
             */
            base.parse_element (/<cim:PssIEEE1A.t1>([\s\S]*?)<\/cim:PssIEEE1A.t1>/g, obj, "t1", base.to_string, sub, context);

            /**
             * Lead/lag time constant (T2).
             *
             * Typical Value = 0.03.
             *
             */
            base.parse_element (/<cim:PssIEEE1A.t2>([\s\S]*?)<\/cim:PssIEEE1A.t2>/g, obj, "t2", base.to_string, sub, context);

            /**
             * Lead/lag time constant (T3).
             *
             * Typical Value = 0.3.
             *
             */
            base.parse_element (/<cim:PssIEEE1A.t3>([\s\S]*?)<\/cim:PssIEEE1A.t3>/g, obj, "t3", base.to_string, sub, context);

            /**
             * Lead/lag time constant (T4).
             *
             * Typical Value = 0.03.
             *
             */
            base.parse_element (/<cim:PssIEEE1A.t4>([\s\S]*?)<\/cim:PssIEEE1A.t4>/g, obj, "t4", base.to_string, sub, context);

            /**
             * Washout time constant (T5).
             *
             * Typical Value = 10.
             *
             */
            base.parse_element (/<cim:PssIEEE1A.t5>([\s\S]*?)<\/cim:PssIEEE1A.t5>/g, obj, "t5", base.to_string, sub, context);

            /**
             * Transducer time constant (T6).
             *
             * Typical Value = 0.01.
             *
             */
            base.parse_element (/<cim:PssIEEE1A.t6>([\s\S]*?)<\/cim:PssIEEE1A.t6>/g, obj, "t6", base.to_string, sub, context);

            /**
             * Maximum stabilizer output (Vrmax).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:PssIEEE1A.vrmax>([\s\S]*?)<\/cim:PssIEEE1A.vrmax>/g, obj, "vrmax", base.to_string, sub, context);

            /**
             * Minimum stabilizer output (Vrmin).
             *
             * Typical Value = -0.05.
             *
             */
            base.parse_element (/<cim:PssIEEE1A.vrmin>([\s\S]*?)<\/cim:PssIEEE1A.vrmin>/g, obj, "vrmin", base.to_string, sub, context);

            bucket = context.parsed.PssIEEE1A;
            if (null == bucket)
                context.parsed.PssIEEE1A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * PTI Microprocessor-Based Stabilizer type 3.
         *
         */
        function parse_PssPTIST3 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PowerSystemStabilizerDynamics (context, sub);
            obj.cls = "PssPTIST3";
            /**
             * Filter coefficient (A0).
             *
             */
            base.parse_element (/<cim:PssPTIST3.a0>([\s\S]*?)<\/cim:PssPTIST3.a0>/g, obj, "a0", base.to_string, sub, context);

            /**
             * Limiter (Al).
             *
             */
            base.parse_element (/<cim:PssPTIST3.a1>([\s\S]*?)<\/cim:PssPTIST3.a1>/g, obj, "a1", base.to_string, sub, context);

            /**
             * Filter coefficient (A2).
             *
             */
            base.parse_element (/<cim:PssPTIST3.a2>([\s\S]*?)<\/cim:PssPTIST3.a2>/g, obj, "a2", base.to_string, sub, context);

            /**
             * Filter coefficient (A3).
             *
             */
            base.parse_element (/<cim:PssPTIST3.a3>([\s\S]*?)<\/cim:PssPTIST3.a3>/g, obj, "a3", base.to_string, sub, context);

            /**
             * Filter coefficient (A4).
             *
             */
            base.parse_element (/<cim:PssPTIST3.a4>([\s\S]*?)<\/cim:PssPTIST3.a4>/g, obj, "a4", base.to_string, sub, context);

            /**
             * Filter coefficient (A5).
             *
             */
            base.parse_element (/<cim:PssPTIST3.a5>([\s\S]*?)<\/cim:PssPTIST3.a5>/g, obj, "a5", base.to_string, sub, context);

            /**
             * Limiter (Al).
             *
             */
            base.parse_element (/<cim:PssPTIST3.al>([\s\S]*?)<\/cim:PssPTIST3.al>/g, obj, "al", base.to_string, sub, context);

            /**
             * Threshold value above which output averaging will be bypassed (Athres).
             *
             * Typical Value = 0.005.
             *
             */
            base.parse_element (/<cim:PssPTIST3.athres>([\s\S]*?)<\/cim:PssPTIST3.athres>/g, obj, "athres", base.to_string, sub, context);

            /**
             * Filter coefficient (B0).
             *
             */
            base.parse_element (/<cim:PssPTIST3.b0>([\s\S]*?)<\/cim:PssPTIST3.b0>/g, obj, "b0", base.to_string, sub, context);

            /**
             * Filter coefficient (B1).
             *
             */
            base.parse_element (/<cim:PssPTIST3.b1>([\s\S]*?)<\/cim:PssPTIST3.b1>/g, obj, "b1", base.to_string, sub, context);

            /**
             * Filter coefficient (B2).
             *
             */
            base.parse_element (/<cim:PssPTIST3.b2>([\s\S]*?)<\/cim:PssPTIST3.b2>/g, obj, "b2", base.to_string, sub, context);

            /**
             * Filter coefficient (B3).
             *
             */
            base.parse_element (/<cim:PssPTIST3.b3>([\s\S]*?)<\/cim:PssPTIST3.b3>/g, obj, "b3", base.to_string, sub, context);

            /**
             * Filter coefficient (B4).
             *
             */
            base.parse_element (/<cim:PssPTIST3.b4>([\s\S]*?)<\/cim:PssPTIST3.b4>/g, obj, "b4", base.to_string, sub, context);

            /**
             * Filter coefficient (B5).
             *
             */
            base.parse_element (/<cim:PssPTIST3.b5>([\s\S]*?)<\/cim:PssPTIST3.b5>/g, obj, "b5", base.to_string, sub, context);

            /**
             * Limiter (Dl).
             *
             */
            base.parse_element (/<cim:PssPTIST3.dl>([\s\S]*?)<\/cim:PssPTIST3.dl>/g, obj, "dl", base.to_string, sub, context);

            /**
             * Time step related to activation of controls (0.03 for 50 Hz) (Dtc).
             *
             * Typical Value = 0.025.
             *
             */
            base.parse_element (/<cim:PssPTIST3.dtc>([\s\S]*?)<\/cim:PssPTIST3.dtc>/g, obj, "dtc", base.to_string, sub, context);

            /**
             * Time step frequency calculation (0.03 for 50 Hz) (Dtf).
             *
             * Typical Value = 0.025.
             *
             */
            base.parse_element (/<cim:PssPTIST3.dtf>([\s\S]*?)<\/cim:PssPTIST3.dtf>/g, obj, "dtf", base.to_string, sub, context);

            /**
             * Time step active power calculation (0.015 for 50 Hz) (Dtp).
             *
             * Typical Value = 0.0125.
             *
             */
            base.parse_element (/<cim:PssPTIST3.dtp>([\s\S]*?)<\/cim:PssPTIST3.dtp>/g, obj, "dtp", base.to_string, sub, context);

            /**
             * Digital/analog output switch (Isw).
             * true = produce analog output
             *
             * false = convert to digital output, using tap selection table.
             *
             */
            base.parse_element (/<cim:PssPTIST3.isw>([\s\S]*?)<\/cim:PssPTIST3.isw>/g, obj, "isw", base.to_boolean, sub, context);

            /**
             * Gain (K).
             *
             * Typical Value = 9.
             *
             */
            base.parse_element (/<cim:PssPTIST3.k>([\s\S]*?)<\/cim:PssPTIST3.k>/g, obj, "k", base.to_string, sub, context);

            /**
             * Threshold value (Lthres).
             *
             */
            base.parse_element (/<cim:PssPTIST3.lthres>([\s\S]*?)<\/cim:PssPTIST3.lthres>/g, obj, "lthres", base.to_string, sub, context);

            /**
             * (M).
             *
             * M=2*H.  Typical Value = 5.
             *
             */
            base.parse_element (/<cim:PssPTIST3.m>([\s\S]*?)<\/cim:PssPTIST3.m>/g, obj, "m", base.to_string, sub, context);

            /**
             * Number of control outputs to average (Nav) (1 &lt;= Nav &lt;= 16).
             *
             * Typical Value = 4.
             *
             */
            base.parse_element (/<cim:PssPTIST3.nav>([\s\S]*?)<\/cim:PssPTIST3.nav>/g, obj, "nav", base.to_float, sub, context);

            /**
             * Number of counts at limit to active limit function (Ncl) (&gt;0).
             *
             */
            base.parse_element (/<cim:PssPTIST3.ncl>([\s\S]*?)<\/cim:PssPTIST3.ncl>/g, obj, "ncl", base.to_float, sub, context);

            /**
             * Number of counts until reset after limit function is triggered (Ncr).
             *
             */
            base.parse_element (/<cim:PssPTIST3.ncr>([\s\S]*?)<\/cim:PssPTIST3.ncr>/g, obj, "ncr", base.to_float, sub, context);

            /**
             * (Pmin).
             *
             */
            base.parse_element (/<cim:PssPTIST3.pmin>([\s\S]*?)<\/cim:PssPTIST3.pmin>/g, obj, "pmin", base.to_string, sub, context);

            /**
             * Time constant (T1).
             *
             * Typical Value = 0.3.
             *
             */
            base.parse_element (/<cim:PssPTIST3.t1>([\s\S]*?)<\/cim:PssPTIST3.t1>/g, obj, "t1", base.to_string, sub, context);

            /**
             * Time constant (T2).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:PssPTIST3.t2>([\s\S]*?)<\/cim:PssPTIST3.t2>/g, obj, "t2", base.to_string, sub, context);

            /**
             * Time constant (T3).
             *
             * Typical Value = 0.2.
             *
             */
            base.parse_element (/<cim:PssPTIST3.t3>([\s\S]*?)<\/cim:PssPTIST3.t3>/g, obj, "t3", base.to_string, sub, context);

            /**
             * Time constant (T4).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:PssPTIST3.t4>([\s\S]*?)<\/cim:PssPTIST3.t4>/g, obj, "t4", base.to_string, sub, context);

            /**
             * Time constant (T5).
             *
             */
            base.parse_element (/<cim:PssPTIST3.t5>([\s\S]*?)<\/cim:PssPTIST3.t5>/g, obj, "t5", base.to_string, sub, context);

            /**
             * Time constant (T6).
             *
             */
            base.parse_element (/<cim:PssPTIST3.t6>([\s\S]*?)<\/cim:PssPTIST3.t6>/g, obj, "t6", base.to_string, sub, context);

            /**
             * Time constant (Tf).
             *
             * Typical Value = 0.2.
             *
             */
            base.parse_element (/<cim:PssPTIST3.tf>([\s\S]*?)<\/cim:PssPTIST3.tf>/g, obj, "tf", base.to_string, sub, context);

            /**
             * Time constant (Tp).
             *
             * Typical Value = 0.2.
             *
             */
            base.parse_element (/<cim:PssPTIST3.tp>([\s\S]*?)<\/cim:PssPTIST3.tp>/g, obj, "tp", base.to_string, sub, context);

            bucket = context.parsed.PssPTIST3;
            if (null == bucket)
                context.parsed.PssPTIST3 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type PSS2B power system stabilizer model.
         *
         * The PSS4B model represents a structure based on multiple working frequency bands. Three separate bands, respectively dedicated to the low-, intermediate- and high-frequency modes of oscillations, are used in this delta-omega (speed input) PSS.
         *
         */
        function parse_PssIEEE4B (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PowerSystemStabilizerDynamics (context, sub);
            obj.cls = "PssIEEE4B";
            /**
             * Notch filter 1 (high-frequency band): Three dB bandwidth (B<sub>wi</sub>).
             *
             */
            base.parse_element (/<cim:PssIEEE4B.bwh1>([\s\S]*?)<\/cim:PssIEEE4B.bwh1>/g, obj, "bwh1", base.to_float, sub, context);

            /**
             * Notch filter 2 (high-frequency band): Three dB bandwidth (B<sub>wi</sub>).
             *
             */
            base.parse_element (/<cim:PssIEEE4B.bwh2>([\s\S]*?)<\/cim:PssIEEE4B.bwh2>/g, obj, "bwh2", base.to_float, sub, context);

            /**
             * Notch filter 1 (low-frequency band): Three dB bandwidth (B<sub>wi</sub>).
             *
             */
            base.parse_element (/<cim:PssIEEE4B.bwl1>([\s\S]*?)<\/cim:PssIEEE4B.bwl1>/g, obj, "bwl1", base.to_float, sub, context);

            /**
             * Notch filter 2 (low-frequency band): Three dB bandwidth (B<sub>wi</sub>).
             *
             */
            base.parse_element (/<cim:PssIEEE4B.bwl2>([\s\S]*?)<\/cim:PssIEEE4B.bwl2>/g, obj, "bwl2", base.to_float, sub, context);

            /**
             * High band gain (K<sub>H</sub>).
             *
             * Typical Value = 120.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.kh>([\s\S]*?)<\/cim:PssIEEE4B.kh>/g, obj, "kh", base.to_string, sub, context);

            /**
             * High band differential filter gain (K<sub>H1</sub>).
             *
             * Typical Value = 66.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.kh1>([\s\S]*?)<\/cim:PssIEEE4B.kh1>/g, obj, "kh1", base.to_string, sub, context);

            /**
             * High band first lead-lag blocks coefficient (K<sub>H11</sub>).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.kh11>([\s\S]*?)<\/cim:PssIEEE4B.kh11>/g, obj, "kh11", base.to_string, sub, context);

            /**
             * High band first lead-lag blocks coefficient (K<sub>H17</sub>).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.kh17>([\s\S]*?)<\/cim:PssIEEE4B.kh17>/g, obj, "kh17", base.to_string, sub, context);

            /**
             * High band differential filter gain (K<sub>H2</sub>).
             *
             * Typical Value = 66.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.kh2>([\s\S]*?)<\/cim:PssIEEE4B.kh2>/g, obj, "kh2", base.to_string, sub, context);

            /**
             * Intermediate band gain (K<sub>I</sub>).
             *
             * Typical Value = 30.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.ki>([\s\S]*?)<\/cim:PssIEEE4B.ki>/g, obj, "ki", base.to_string, sub, context);

            /**
             * Intermediate band differential filter gain (K<sub>I1</sub>).
             *
             * Typical Value = 66.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.ki1>([\s\S]*?)<\/cim:PssIEEE4B.ki1>/g, obj, "ki1", base.to_string, sub, context);

            /**
             * Intermediate band first lead-lag blocks coefficient (K<sub>I11</sub>).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.ki11>([\s\S]*?)<\/cim:PssIEEE4B.ki11>/g, obj, "ki11", base.to_string, sub, context);

            /**
             * Intermediate band first lead-lag blocks coefficient (K<sub>I17</sub>).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.ki17>([\s\S]*?)<\/cim:PssIEEE4B.ki17>/g, obj, "ki17", base.to_string, sub, context);

            /**
             * Intermediate band differential filter gain (K<sub>I2</sub>).
             *
             * Typical Value = 66.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.ki2>([\s\S]*?)<\/cim:PssIEEE4B.ki2>/g, obj, "ki2", base.to_string, sub, context);

            /**
             * Low band gain (K<sub>L</sub>).
             *
             * Typical Value = 7.5.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.kl>([\s\S]*?)<\/cim:PssIEEE4B.kl>/g, obj, "kl", base.to_string, sub, context);

            /**
             * Low band differential filter gain (K<sub>L1</sub>).
             *
             * Typical Value = 66.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.kl1>([\s\S]*?)<\/cim:PssIEEE4B.kl1>/g, obj, "kl1", base.to_string, sub, context);

            /**
             * Low band first lead-lag blocks coefficient (K<sub>L11</sub>).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.kl11>([\s\S]*?)<\/cim:PssIEEE4B.kl11>/g, obj, "kl11", base.to_string, sub, context);

            /**
             * Low band first lead-lag blocks coefficient (K<sub>L17</sub>).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.kl17>([\s\S]*?)<\/cim:PssIEEE4B.kl17>/g, obj, "kl17", base.to_string, sub, context);

            /**
             * Low band differential filter gain (K<sub>L2</sub>).
             *
             * Typical Value = 66.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.kl2>([\s\S]*?)<\/cim:PssIEEE4B.kl2>/g, obj, "kl2", base.to_string, sub, context);

            /**
             * Notch filter 1 (high-frequency band): filter frequency (omega<sub>ni</sub>).
             *
             */
            base.parse_element (/<cim:PssIEEE4B.omeganh1>([\s\S]*?)<\/cim:PssIEEE4B.omeganh1>/g, obj, "omeganh1", base.to_float, sub, context);

            /**
             * Notch filter 2 (high-frequency band): filter frequency (omega<sub>ni</sub>).
             *
             */
            base.parse_element (/<cim:PssIEEE4B.omeganh2>([\s\S]*?)<\/cim:PssIEEE4B.omeganh2>/g, obj, "omeganh2", base.to_float, sub, context);

            /**
             * Notch filter 1 (low-frequency band): filter frequency (omega<sub>ni</sub>).
             *
             */
            base.parse_element (/<cim:PssIEEE4B.omeganl1>([\s\S]*?)<\/cim:PssIEEE4B.omeganl1>/g, obj, "omeganl1", base.to_float, sub, context);

            /**
             * Notch filter 2 (low-frequency band): filter frequency (omega<sub>ni</sub>).
             *
             */
            base.parse_element (/<cim:PssIEEE4B.omeganl2>([\s\S]*?)<\/cim:PssIEEE4B.omeganl2>/g, obj, "omeganl2", base.to_float, sub, context);

            /**
             * High band time constant (T<sub>H1</sub>).
             *
             * Typical Value = 0.01513.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.th1>([\s\S]*?)<\/cim:PssIEEE4B.th1>/g, obj, "th1", base.to_string, sub, context);

            /**
             * High band time constant (T<sub>H10</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.th10>([\s\S]*?)<\/cim:PssIEEE4B.th10>/g, obj, "th10", base.to_string, sub, context);

            /**
             * High band time constant (T<sub>H11</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.th11>([\s\S]*?)<\/cim:PssIEEE4B.th11>/g, obj, "th11", base.to_string, sub, context);

            /**
             * High band time constant (T<sub>H12</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.th12>([\s\S]*?)<\/cim:PssIEEE4B.th12>/g, obj, "th12", base.to_string, sub, context);

            /**
             * High band time constant (T<sub>H2</sub>).
             *
             * Typical Value = 0.01816.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.th2>([\s\S]*?)<\/cim:PssIEEE4B.th2>/g, obj, "th2", base.to_string, sub, context);

            /**
             * High band time constant (T<sub>H3</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.th3>([\s\S]*?)<\/cim:PssIEEE4B.th3>/g, obj, "th3", base.to_string, sub, context);

            /**
             * High band time constant (T<sub>H4</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.th4>([\s\S]*?)<\/cim:PssIEEE4B.th4>/g, obj, "th4", base.to_string, sub, context);

            /**
             * High band time constant (T<sub>H5</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.th5>([\s\S]*?)<\/cim:PssIEEE4B.th5>/g, obj, "th5", base.to_string, sub, context);

            /**
             * High band time constant (T<sub>H6</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.th6>([\s\S]*?)<\/cim:PssIEEE4B.th6>/g, obj, "th6", base.to_string, sub, context);

            /**
             * High band time constant (T<sub>H7</sub>).
             *
             * Typical Value = 0.01816.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.th7>([\s\S]*?)<\/cim:PssIEEE4B.th7>/g, obj, "th7", base.to_string, sub, context);

            /**
             * High band time constant (T<sub>H8</sub>).
             *
             * Typical Value = 0.02179.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.th8>([\s\S]*?)<\/cim:PssIEEE4B.th8>/g, obj, "th8", base.to_string, sub, context);

            /**
             * High band time constant (T<sub>H9</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.th9>([\s\S]*?)<\/cim:PssIEEE4B.th9>/g, obj, "th9", base.to_string, sub, context);

            /**
             * Intermediate band time constant (T<sub>I1</sub>).
             *
             * Typical Value = 0.173.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.ti1>([\s\S]*?)<\/cim:PssIEEE4B.ti1>/g, obj, "ti1", base.to_string, sub, context);

            /**
             * Intermediate band time constant (T<sub>I11</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.ti10>([\s\S]*?)<\/cim:PssIEEE4B.ti10>/g, obj, "ti10", base.to_string, sub, context);

            /**
             * Intermediate band time constant (T<sub>I11</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.ti11>([\s\S]*?)<\/cim:PssIEEE4B.ti11>/g, obj, "ti11", base.to_string, sub, context);

            /**
             * Intermediate band time constant (T<sub>I2</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.ti12>([\s\S]*?)<\/cim:PssIEEE4B.ti12>/g, obj, "ti12", base.to_string, sub, context);

            /**
             * Intermediate band time constant (T<sub>I2</sub>).
             *
             * Typical Value = 0.2075.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.ti2>([\s\S]*?)<\/cim:PssIEEE4B.ti2>/g, obj, "ti2", base.to_string, sub, context);

            /**
             * Intermediate band time constant (T<sub>I3</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.ti3>([\s\S]*?)<\/cim:PssIEEE4B.ti3>/g, obj, "ti3", base.to_string, sub, context);

            /**
             * Intermediate band time constant (T<sub>I4</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.ti4>([\s\S]*?)<\/cim:PssIEEE4B.ti4>/g, obj, "ti4", base.to_string, sub, context);

            /**
             * Intermediate band time constant (T<sub>I5</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.ti5>([\s\S]*?)<\/cim:PssIEEE4B.ti5>/g, obj, "ti5", base.to_string, sub, context);

            /**
             * Intermediate band time constant (T<sub>I6</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.ti6>([\s\S]*?)<\/cim:PssIEEE4B.ti6>/g, obj, "ti6", base.to_string, sub, context);

            /**
             * Intermediate band time constant (T<sub>I7</sub>).
             *
             * Typical Value = 0.2075.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.ti7>([\s\S]*?)<\/cim:PssIEEE4B.ti7>/g, obj, "ti7", base.to_string, sub, context);

            /**
             * Intermediate band time constant (T<sub>I8</sub>).
             *
             * Typical Value = 0.2491.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.ti8>([\s\S]*?)<\/cim:PssIEEE4B.ti8>/g, obj, "ti8", base.to_string, sub, context);

            /**
             * Intermediate band time constant (T<sub>I9</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.ti9>([\s\S]*?)<\/cim:PssIEEE4B.ti9>/g, obj, "ti9", base.to_string, sub, context);

            /**
             * Low band time constant (T<sub>L1</sub>).
             *
             * Typical Value = 1.73.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.tl1>([\s\S]*?)<\/cim:PssIEEE4B.tl1>/g, obj, "tl1", base.to_string, sub, context);

            /**
             * Low band time constant (T<sub>L10</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.tl10>([\s\S]*?)<\/cim:PssIEEE4B.tl10>/g, obj, "tl10", base.to_string, sub, context);

            /**
             * Low band time constant (T<sub>L11</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.tl11>([\s\S]*?)<\/cim:PssIEEE4B.tl11>/g, obj, "tl11", base.to_string, sub, context);

            /**
             * Low band time constant (T<sub>L12</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.tl12>([\s\S]*?)<\/cim:PssIEEE4B.tl12>/g, obj, "tl12", base.to_string, sub, context);

            /**
             * Low band time constant (T<sub>L2</sub>).
             *
             * Typical Value = 2.075.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.tl2>([\s\S]*?)<\/cim:PssIEEE4B.tl2>/g, obj, "tl2", base.to_string, sub, context);

            /**
             * Low band time constant (T<sub>L3</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.tl3>([\s\S]*?)<\/cim:PssIEEE4B.tl3>/g, obj, "tl3", base.to_string, sub, context);

            /**
             * Low band time constant (T<sub>L4</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.tl4>([\s\S]*?)<\/cim:PssIEEE4B.tl4>/g, obj, "tl4", base.to_string, sub, context);

            /**
             * Low band time constant (T<sub>L5</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.tl5>([\s\S]*?)<\/cim:PssIEEE4B.tl5>/g, obj, "tl5", base.to_string, sub, context);

            /**
             * Low band time constant (T<sub>L6</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.tl6>([\s\S]*?)<\/cim:PssIEEE4B.tl6>/g, obj, "tl6", base.to_string, sub, context);

            /**
             * Low band time constant (T<sub>L7</sub>).
             *
             * Typical Value = 2.075.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.tl7>([\s\S]*?)<\/cim:PssIEEE4B.tl7>/g, obj, "tl7", base.to_string, sub, context);

            /**
             * Low band time constant (T<sub>L8</sub>).
             *
             * Typical Value = 2.491.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.tl8>([\s\S]*?)<\/cim:PssIEEE4B.tl8>/g, obj, "tl8", base.to_string, sub, context);

            /**
             * Low band time constant (T<sub>L9</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.tl9>([\s\S]*?)<\/cim:PssIEEE4B.tl9>/g, obj, "tl9", base.to_string, sub, context);

            /**
             * High band output maximum limit (V<sub>Hmax</sub>).
             *
             * Typical Value = 0.6.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.vhmax>([\s\S]*?)<\/cim:PssIEEE4B.vhmax>/g, obj, "vhmax", base.to_string, sub, context);

            /**
             * High band output minimum limit (V<sub>Hmin</sub>).
             *
             * Typical Value = -0.6.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.vhmin>([\s\S]*?)<\/cim:PssIEEE4B.vhmin>/g, obj, "vhmin", base.to_string, sub, context);

            /**
             * Intermediate band output maximum limit (V<sub>Imax</sub>).
             *
             * Typical Value = 0.6.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.vimax>([\s\S]*?)<\/cim:PssIEEE4B.vimax>/g, obj, "vimax", base.to_string, sub, context);

            /**
             * Intermediate band output minimum limit (V<sub>Imin</sub>).
             *
             * Typical Value = -0.6.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.vimin>([\s\S]*?)<\/cim:PssIEEE4B.vimin>/g, obj, "vimin", base.to_string, sub, context);

            /**
             * Low band output maximum limit (V<sub>Lmax</sub>).
             *
             * Typical Value = 0.075.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.vlmax>([\s\S]*?)<\/cim:PssIEEE4B.vlmax>/g, obj, "vlmax", base.to_string, sub, context);

            /**
             * Low band output minimum limit (V<sub>Lmin</sub>).
             *
             * Typical Value = -0.075.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.vlmin>([\s\S]*?)<\/cim:PssIEEE4B.vlmin>/g, obj, "vlmin", base.to_string, sub, context);

            /**
             * PSS output maximum limit (V<sub>STmax</sub>).
             *
             * Typical Value = 0.15.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.vstmax>([\s\S]*?)<\/cim:PssIEEE4B.vstmax>/g, obj, "vstmax", base.to_string, sub, context);

            /**
             * PSS output minimum limit (V<sub>STmin</sub>).
             *
             * Typical Value = -0.15.
             *
             */
            base.parse_element (/<cim:PssIEEE4B.vstmin>([\s\S]*?)<\/cim:PssIEEE4B.vstmin>/g, obj, "vstmin", base.to_string, sub, context);

            bucket = context.parsed.PssIEEE4B;
            if (null == bucket)
                context.parsed.PssIEEE4B = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Italian PSS - Detailed PSS.
         *
         */
        function parse_Pss5 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PowerSystemStabilizerDynamics (context, sub);
            obj.cls = "Pss5";
            /**
             * Selector for Second washout enabling (C<sub>TW2</sub>).
             * true = second washout filter is bypassed
             * false = second washout filter in use.
             *
             * Typical Value = true.
             *
             */
            base.parse_element (/<cim:Pss5.ctw2>([\s\S]*?)<\/cim:Pss5.ctw2>/g, obj, "ctw2", base.to_boolean, sub, context);

            /**
             * Stabilizer output dead band (DeadBand).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:Pss5.deadband>([\s\S]*?)<\/cim:Pss5.deadband>/g, obj, "deadband", base.to_string, sub, context);

            /**
             * Selector for Frequency/shaft speed input (IsFreq).
             * true = speed
             * false = frequency.
             *
             * Typical Value = true.
             *
             */
            base.parse_element (/<cim:Pss5.isfreq>([\s\S]*?)<\/cim:Pss5.isfreq>/g, obj, "isfreq", base.to_boolean, sub, context);

            /**
             * Frequency/shaft speed input gain (K<sub>F</sub>).
             *
             * Typical Value = 5.
             *
             */
            base.parse_element (/<cim:Pss5.kf>([\s\S]*?)<\/cim:Pss5.kf>/g, obj, "kf", base.to_float, sub, context);

            /**
             * Electric power input gain (K<sub>PE</sub>).
             *
             * Typical Value = 0.3.
             *
             */
            base.parse_element (/<cim:Pss5.kpe>([\s\S]*?)<\/cim:Pss5.kpe>/g, obj, "kpe", base.to_float, sub, context);

            /**
             * PSS gain (K<sub>PSS</sub>).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:Pss5.kpss>([\s\S]*?)<\/cim:Pss5.kpss>/g, obj, "kpss", base.to_float, sub, context);

            /**
             * Minimum power PSS enabling (P<sub>mn</sub>).
             *
             * Typical Value = 0.25.
             *
             */
            base.parse_element (/<cim:Pss5.pmm>([\s\S]*?)<\/cim:Pss5.pmm>/g, obj, "pmm", base.to_string, sub, context);

            /**
             * Lead/lag time constant (T<sub>L1</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:Pss5.tl1>([\s\S]*?)<\/cim:Pss5.tl1>/g, obj, "tl1", base.to_string, sub, context);

            /**
             * Lead/lag time constant (T<sub>L2</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:Pss5.tl2>([\s\S]*?)<\/cim:Pss5.tl2>/g, obj, "tl2", base.to_string, sub, context);

            /**
             * Lead/lag time constant (T<sub>L3</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:Pss5.tl3>([\s\S]*?)<\/cim:Pss5.tl3>/g, obj, "tl3", base.to_string, sub, context);

            /**
             * Lead/lag time constant (T<sub>L4</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:Pss5.tl4>([\s\S]*?)<\/cim:Pss5.tl4>/g, obj, "tl4", base.to_string, sub, context);

            /**
             * Electric power filter time constant (T<sub>PE</sub>).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:Pss5.tpe>([\s\S]*?)<\/cim:Pss5.tpe>/g, obj, "tpe", base.to_string, sub, context);

            /**
             * First WashOut (T<sub>w1</sub>).
             *
             * Typical Value = 3.5.
             *
             */
            base.parse_element (/<cim:Pss5.tw1>([\s\S]*?)<\/cim:Pss5.tw1>/g, obj, "tw1", base.to_string, sub, context);

            /**
             * Second WashOut (T<sub>w2</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:Pss5.tw2>([\s\S]*?)<\/cim:Pss5.tw2>/g, obj, "tw2", base.to_string, sub, context);

            /**
             * <font color="#0f0f0f">Signal selector (V<sub>adAtt</sub>).</font>
             * <font color="#0f0f0f">true = closed (Generator Power is greater than Pmin)</font>
             * <font color="#0f0f0f">false = open (Pe is smaller than Pmin).</font>
             *
             * <font color="#0f0f0f">Typical Value = true.</font>
             *
             */
            base.parse_element (/<cim:Pss5.vadat>([\s\S]*?)<\/cim:Pss5.vadat>/g, obj, "vadat", base.to_boolean, sub, context);

            /**
             * Stabilizer output max limit (V<sub>SMN</sub>).
             *
             * Typical Value = -0.1.
             *
             */
            base.parse_element (/<cim:Pss5.vsmn>([\s\S]*?)<\/cim:Pss5.vsmn>/g, obj, "vsmn", base.to_string, sub, context);

            /**
             * Stabilizer output min limit (V<sub>SMX</sub>).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:Pss5.vsmx>([\s\S]*?)<\/cim:Pss5.vsmx>/g, obj, "vsmx", base.to_string, sub, context);

            bucket = context.parsed.Pss5;
            if (null == bucket)
                context.parsed.Pss5 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Power sensitive stabilizer model.
         *
         */
        function parse_PssSB4 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PowerSystemStabilizerDynamics (context, sub);
            obj.cls = "PssSB4";
            /**
             * Gain (Kx).
             *
             */
            base.parse_element (/<cim:PssSB4.kx>([\s\S]*?)<\/cim:PssSB4.kx>/g, obj, "kx", base.to_string, sub, context);

            /**
             * Time constant (Ta).
             *
             */
            base.parse_element (/<cim:PssSB4.ta>([\s\S]*?)<\/cim:PssSB4.ta>/g, obj, "ta", base.to_string, sub, context);

            /**
             * Time constant (Tb).
             *
             */
            base.parse_element (/<cim:PssSB4.tb>([\s\S]*?)<\/cim:PssSB4.tb>/g, obj, "tb", base.to_string, sub, context);

            /**
             * Time constant (Tc).
             *
             */
            base.parse_element (/<cim:PssSB4.tc>([\s\S]*?)<\/cim:PssSB4.tc>/g, obj, "tc", base.to_string, sub, context);

            /**
             * Time constant (Td).
             *
             */
            base.parse_element (/<cim:PssSB4.td>([\s\S]*?)<\/cim:PssSB4.td>/g, obj, "td", base.to_string, sub, context);

            /**
             * Time constant (Te).
             *
             */
            base.parse_element (/<cim:PssSB4.te>([\s\S]*?)<\/cim:PssSB4.te>/g, obj, "te", base.to_string, sub, context);

            /**
             * Time constant (Tt).
             *
             */
            base.parse_element (/<cim:PssSB4.tt>([\s\S]*?)<\/cim:PssSB4.tt>/g, obj, "tt", base.to_string, sub, context);

            /**
             * Reset time constant (Tx1).
             *
             */
            base.parse_element (/<cim:PssSB4.tx1>([\s\S]*?)<\/cim:PssSB4.tx1>/g, obj, "tx1", base.to_string, sub, context);

            /**
             * Time constant (Tx2).
             *
             */
            base.parse_element (/<cim:PssSB4.tx2>([\s\S]*?)<\/cim:PssSB4.tx2>/g, obj, "tx2", base.to_string, sub, context);

            /**
             * Limiter (Vsmax).
             *
             */
            base.parse_element (/<cim:PssSB4.vsmax>([\s\S]*?)<\/cim:PssSB4.vsmax>/g, obj, "vsmax", base.to_string, sub, context);

            /**
             * Limiter (Vsmin).
             *
             */
            base.parse_element (/<cim:PssSB4.vsmin>([\s\S]*?)<\/cim:PssSB4.vsmin>/g, obj, "vsmin", base.to_string, sub, context);

            bucket = context.parsed.PssSB4;
            if (null == bucket)
                context.parsed.PssSB4 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type PSS3B power system stabilizer model.
         *
         * The PSS model PSS3B has dual inputs of electrical power and rotor angular frequency deviation. The signals are used to derive an equivalent mechanical power signal.
         *
         */
        function parse_PssIEEE3B (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PowerSystemStabilizerDynamics (context, sub);
            obj.cls = "PssIEEE3B";
            /**
             * Notch filter parameter (A1).
             *
             * Typical Value = 0.359.
             *
             */
            base.parse_element (/<cim:PssIEEE3B.a1>([\s\S]*?)<\/cim:PssIEEE3B.a1>/g, obj, "a1", base.to_string, sub, context);

            /**
             * Notch filter parameter (A2).
             *
             * Typical Value = 0.586.
             *
             */
            base.parse_element (/<cim:PssIEEE3B.a2>([\s\S]*?)<\/cim:PssIEEE3B.a2>/g, obj, "a2", base.to_string, sub, context);

            /**
             * Notch filter parameter (A3).
             *
             * Typical Value = 0.429.
             *
             */
            base.parse_element (/<cim:PssIEEE3B.a3>([\s\S]*?)<\/cim:PssIEEE3B.a3>/g, obj, "a3", base.to_string, sub, context);

            /**
             * Notch filter parameter (A4).
             *
             * Typical Value = 0.564.
             *
             */
            base.parse_element (/<cim:PssIEEE3B.a4>([\s\S]*?)<\/cim:PssIEEE3B.a4>/g, obj, "a4", base.to_string, sub, context);

            /**
             * Notch filter parameter (A5).
             *
             * Typical Value = 0.001.
             *
             */
            base.parse_element (/<cim:PssIEEE3B.a5>([\s\S]*?)<\/cim:PssIEEE3B.a5>/g, obj, "a5", base.to_string, sub, context);

            /**
             * Notch filter parameter (A6).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssIEEE3B.a6>([\s\S]*?)<\/cim:PssIEEE3B.a6>/g, obj, "a6", base.to_string, sub, context);

            /**
             * Notch filter parameter (A7).
             *
             * Typical Value = 0.031.
             *
             */
            base.parse_element (/<cim:PssIEEE3B.a7>([\s\S]*?)<\/cim:PssIEEE3B.a7>/g, obj, "a7", base.to_string, sub, context);

            /**
             * Notch filter parameter (A8).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssIEEE3B.a8>([\s\S]*?)<\/cim:PssIEEE3B.a8>/g, obj, "a8", base.to_string, sub, context);

            /**
             * Type of input signal #1.
             *
             * Typical Value = generatorElectricalPower.
             *
             */
            base.parse_element (/<cim:PssIEEE3B.inputSignal1Type>([\s\S]*?)<\/cim:PssIEEE3B.inputSignal1Type>/g, obj, "inputSignal1Type", base.to_string, sub, context);

            /**
             * Type of input signal #2.
             *
             * Typical Value = rotorSpeed.
             *
             */
            base.parse_element (/<cim:PssIEEE3B.inputSignal2Type>([\s\S]*?)<\/cim:PssIEEE3B.inputSignal2Type>/g, obj, "inputSignal2Type", base.to_string, sub, context);

            /**
             * Gain on signal # 1 (Ks1).
             *
             * Typical Value = -0.602.
             *
             */
            base.parse_element (/<cim:PssIEEE3B.ks1>([\s\S]*?)<\/cim:PssIEEE3B.ks1>/g, obj, "ks1", base.to_string, sub, context);

            /**
             * Gain on signal # 2 (Ks2).
             *
             * Typical Value = 30.12.
             *
             */
            base.parse_element (/<cim:PssIEEE3B.ks2>([\s\S]*?)<\/cim:PssIEEE3B.ks2>/g, obj, "ks2", base.to_string, sub, context);

            /**
             * Transducer time constant (T1).
             *
             * Typical Value = 0.012.
             *
             */
            base.parse_element (/<cim:PssIEEE3B.t1>([\s\S]*?)<\/cim:PssIEEE3B.t1>/g, obj, "t1", base.to_string, sub, context);

            /**
             * Transducer time constant (T2).
             *
             * Typical Value = 0.012.
             *
             */
            base.parse_element (/<cim:PssIEEE3B.t2>([\s\S]*?)<\/cim:PssIEEE3B.t2>/g, obj, "t2", base.to_string, sub, context);

            /**
             * Washout time constant (Tw1).
             *
             * Typical Value = 0.3.
             *
             */
            base.parse_element (/<cim:PssIEEE3B.tw1>([\s\S]*?)<\/cim:PssIEEE3B.tw1>/g, obj, "tw1", base.to_string, sub, context);

            /**
             * Washout time constant (Tw2).
             *
             * Typical Value = 0.3.
             *
             */
            base.parse_element (/<cim:PssIEEE3B.tw2>([\s\S]*?)<\/cim:PssIEEE3B.tw2>/g, obj, "tw2", base.to_string, sub, context);

            /**
             * Washout time constant (Tw3).
             *
             * Typical Value = 0.6.
             *
             */
            base.parse_element (/<cim:PssIEEE3B.tw3>([\s\S]*?)<\/cim:PssIEEE3B.tw3>/g, obj, "tw3", base.to_string, sub, context);

            /**
             * Stabilizer output max limit (Vstmax).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:PssIEEE3B.vstmax>([\s\S]*?)<\/cim:PssIEEE3B.vstmax>/g, obj, "vstmax", base.to_string, sub, context);

            /**
             * Stabilizer output min limit (Vstmin).
             *
             * Typical Value = -0.1.
             *
             */
            base.parse_element (/<cim:PssIEEE3B.vstmin>([\s\S]*?)<\/cim:PssIEEE3B.vstmin>/g, obj, "vstmin", base.to_string, sub, context);

            bucket = context.parsed.PssIEEE3B;
            if (null == bucket)
                context.parsed.PssIEEE3B = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Power system stabilizer typically associated with ExcELIN2 (though PssIEEE2B or Pss2B can also be used).
         *
         */
        function parse_PssELIN2 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PowerSystemStabilizerDynamics (context, sub);
            obj.cls = "PssELIN2";
            /**
             * Coefficient (a_PSS).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:PssELIN2.apss>([\s\S]*?)<\/cim:PssELIN2.apss>/g, obj, "apss", base.to_string, sub, context);

            /**
             * Gain (Ks1).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:PssELIN2.ks1>([\s\S]*?)<\/cim:PssELIN2.ks1>/g, obj, "ks1", base.to_string, sub, context);

            /**
             * Gain (Ks2).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:PssELIN2.ks2>([\s\S]*?)<\/cim:PssELIN2.ks2>/g, obj, "ks2", base.to_string, sub, context);

            /**
             * Coefficient (p_PSS) (&gt;=0 and &lt;=4).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:PssELIN2.ppss>([\s\S]*?)<\/cim:PssELIN2.ppss>/g, obj, "ppss", base.to_string, sub, context);

            /**
             * PSS limiter (psslim).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:PssELIN2.psslim>([\s\S]*?)<\/cim:PssELIN2.psslim>/g, obj, "psslim", base.to_string, sub, context);

            /**
             * Time constant (Ts1).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssELIN2.ts1>([\s\S]*?)<\/cim:PssELIN2.ts1>/g, obj, "ts1", base.to_string, sub, context);

            /**
             * Time constant (Ts2).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:PssELIN2.ts2>([\s\S]*?)<\/cim:PssELIN2.ts2>/g, obj, "ts2", base.to_string, sub, context);

            /**
             * Time constant (Ts3).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:PssELIN2.ts3>([\s\S]*?)<\/cim:PssELIN2.ts3>/g, obj, "ts3", base.to_string, sub, context);

            /**
             * Time constant (Ts4).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:PssELIN2.ts4>([\s\S]*?)<\/cim:PssELIN2.ts4>/g, obj, "ts4", base.to_string, sub, context);

            /**
             * Time constant (Ts5).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssELIN2.ts5>([\s\S]*?)<\/cim:PssELIN2.ts5>/g, obj, "ts5", base.to_string, sub, context);

            /**
             * Time constant (Ts6).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:PssELIN2.ts6>([\s\S]*?)<\/cim:PssELIN2.ts6>/g, obj, "ts6", base.to_string, sub, context);

            bucket = context.parsed.PssELIN2;
            if (null == bucket)
                context.parsed.PssELIN2 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Modified IEEE PSS2B Model.
         *
         * Extra lead/lag (or rate) block added at end (up to 4 lead/lags total).
         *
         */
        function parse_Pss2B (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PowerSystemStabilizerDynamics (context, sub);
            obj.cls = "Pss2B";
            /**
             * Numerator constant (a).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:Pss2B.a>([\s\S]*?)<\/cim:Pss2B.a>/g, obj, "a", base.to_float, sub, context);

            /**
             * Type of input signal #1.
             *
             * Typical Value = rotorSpeed.
             *
             */
            base.parse_element (/<cim:Pss2B.inputSignal1Type>([\s\S]*?)<\/cim:Pss2B.inputSignal1Type>/g, obj, "inputSignal1Type", base.to_string, sub, context);

            /**
             * Type of input signal #2.
             *
             * Typical Value = generatorElectricalPower.
             *
             */
            base.parse_element (/<cim:Pss2B.inputSignal2Type>([\s\S]*?)<\/cim:Pss2B.inputSignal2Type>/g, obj, "inputSignal2Type", base.to_string, sub, context);

            /**
             * Stabilizer gain (Ks1).
             *
             * Typical Value = 12.
             *
             */
            base.parse_element (/<cim:Pss2B.ks1>([\s\S]*?)<\/cim:Pss2B.ks1>/g, obj, "ks1", base.to_string, sub, context);

            /**
             * Gain on signal #2 (Ks2).
             *
             * Typical Value = 0.2.
             *
             */
            base.parse_element (/<cim:Pss2B.ks2>([\s\S]*?)<\/cim:Pss2B.ks2>/g, obj, "ks2", base.to_string, sub, context);

            /**
             * Gain on signal #2 input before ramp-tracking filter (Ks3).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:Pss2B.ks3>([\s\S]*?)<\/cim:Pss2B.ks3>/g, obj, "ks3", base.to_string, sub, context);

            /**
             * Gain on signal #2 input after ramp-tracking filter (Ks4).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:Pss2B.ks4>([\s\S]*?)<\/cim:Pss2B.ks4>/g, obj, "ks4", base.to_string, sub, context);

            /**
             * Denominator order of ramp tracking filter (M).
             *
             * Typical Value = 5.
             *
             */
            base.parse_element (/<cim:Pss2B.m>([\s\S]*?)<\/cim:Pss2B.m>/g, obj, "m", base.to_string, sub, context);

            /**
             * Order of ramp tracking filter (N).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:Pss2B.n>([\s\S]*?)<\/cim:Pss2B.n>/g, obj, "n", base.to_string, sub, context);

            /**
             * Lead/lag time constant (T1).
             *
             * Typical Value = 0.12.
             *
             */
            base.parse_element (/<cim:Pss2B.t1>([\s\S]*?)<\/cim:Pss2B.t1>/g, obj, "t1", base.to_string, sub, context);

            /**
             * Lead/lag time constant (T10).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:Pss2B.t10>([\s\S]*?)<\/cim:Pss2B.t10>/g, obj, "t10", base.to_string, sub, context);

            /**
             * Lead/lag time constant (T11).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:Pss2B.t11>([\s\S]*?)<\/cim:Pss2B.t11>/g, obj, "t11", base.to_string, sub, context);

            /**
             * Lead/lag time constant (T2).
             *
             * Typical Value = 0.02.
             *
             */
            base.parse_element (/<cim:Pss2B.t2>([\s\S]*?)<\/cim:Pss2B.t2>/g, obj, "t2", base.to_string, sub, context);

            /**
             * Lead/lag time constant (T3).
             *
             * Typical Value = 0.3.
             *
             */
            base.parse_element (/<cim:Pss2B.t3>([\s\S]*?)<\/cim:Pss2B.t3>/g, obj, "t3", base.to_string, sub, context);

            /**
             * Lead/lag time constant (T4).
             *
             * Typical Value = 0.02.
             *
             */
            base.parse_element (/<cim:Pss2B.t4>([\s\S]*?)<\/cim:Pss2B.t4>/g, obj, "t4", base.to_string, sub, context);

            /**
             * Time constant on signal #1 (T6).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:Pss2B.t6>([\s\S]*?)<\/cim:Pss2B.t6>/g, obj, "t6", base.to_string, sub, context);

            /**
             * Time constant on signal #2 (T7).
             *
             * Typical Value = 2.
             *
             */
            base.parse_element (/<cim:Pss2B.t7>([\s\S]*?)<\/cim:Pss2B.t7>/g, obj, "t7", base.to_string, sub, context);

            /**
             * Lead of ramp tracking filter (T8).
             *
             * Typical Value = 0.2.
             *
             */
            base.parse_element (/<cim:Pss2B.t8>([\s\S]*?)<\/cim:Pss2B.t8>/g, obj, "t8", base.to_string, sub, context);

            /**
             * Lag of ramp tracking filter (T9).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:Pss2B.t9>([\s\S]*?)<\/cim:Pss2B.t9>/g, obj, "t9", base.to_string, sub, context);

            /**
             * Lead constant (Ta).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:Pss2B.ta>([\s\S]*?)<\/cim:Pss2B.ta>/g, obj, "ta", base.to_string, sub, context);

            /**
             * Lag time constant (Tb).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:Pss2B.tb>([\s\S]*?)<\/cim:Pss2B.tb>/g, obj, "tb", base.to_string, sub, context);

            /**
             * First washout on signal #1 (Tw1).
             *
             * Typical Value = 2.
             *
             */
            base.parse_element (/<cim:Pss2B.tw1>([\s\S]*?)<\/cim:Pss2B.tw1>/g, obj, "tw1", base.to_string, sub, context);

            /**
             * Second washout on signal #1 (Tw2).
             *
             * Typical Value = 2.
             *
             */
            base.parse_element (/<cim:Pss2B.tw2>([\s\S]*?)<\/cim:Pss2B.tw2>/g, obj, "tw2", base.to_string, sub, context);

            /**
             * First washout on signal #2 (Tw3).
             *
             * Typical Value = 2.
             *
             */
            base.parse_element (/<cim:Pss2B.tw3>([\s\S]*?)<\/cim:Pss2B.tw3>/g, obj, "tw3", base.to_string, sub, context);

            /**
             * Second washout on signal #2 (Tw4).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:Pss2B.tw4>([\s\S]*?)<\/cim:Pss2B.tw4>/g, obj, "tw4", base.to_string, sub, context);

            /**
             * Input signal #1 max limit (Vsi1max).
             *
             * Typical Value = 2.
             *
             */
            base.parse_element (/<cim:Pss2B.vsi1max>([\s\S]*?)<\/cim:Pss2B.vsi1max>/g, obj, "vsi1max", base.to_string, sub, context);

            /**
             * Input signal #1 min limit (Vsi1min).
             *
             * Typical Value = -2.
             *
             */
            base.parse_element (/<cim:Pss2B.vsi1min>([\s\S]*?)<\/cim:Pss2B.vsi1min>/g, obj, "vsi1min", base.to_string, sub, context);

            /**
             * Input signal #2 max limit (Vsi2max).
             *
             * Typical Value = 2.
             *
             */
            base.parse_element (/<cim:Pss2B.vsi2max>([\s\S]*?)<\/cim:Pss2B.vsi2max>/g, obj, "vsi2max", base.to_string, sub, context);

            /**
             * Input signal #2 min limit (Vsi2min).
             *
             * Typical Value = -2.
             *
             */
            base.parse_element (/<cim:Pss2B.vsi2min>([\s\S]*?)<\/cim:Pss2B.vsi2min>/g, obj, "vsi2min", base.to_string, sub, context);

            /**
             * Stabilizer output max limit (Vstmax).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:Pss2B.vstmax>([\s\S]*?)<\/cim:Pss2B.vstmax>/g, obj, "vstmax", base.to_string, sub, context);

            /**
             * Stabilizer output min limit (Vstmin).
             *
             * Typical Value = -0.1.
             *
             */
            base.parse_element (/<cim:Pss2B.vstmin>([\s\S]*?)<\/cim:Pss2B.vstmin>/g, obj, "vstmin", base.to_string, sub, context);

            bucket = context.parsed.Pss2B;
            if (null == bucket)
                context.parsed.Pss2B = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Dual input Power System Stabilizer, based on IEEE type 2, with modified output limiter defined by WECC (Western Electricity Coordinating Council, USA).
         *
         */
        function parse_PssWECC (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PowerSystemStabilizerDynamics (context, sub);
            obj.cls = "PssWECC";
            /**
             * Type of input signal #1.
             *
             */
            base.parse_element (/<cim:PssWECC.inputSignal1Type>([\s\S]*?)<\/cim:PssWECC.inputSignal1Type>/g, obj, "inputSignal1Type", base.to_string, sub, context);

            /**
             * Type of input signal #2.
             *
             */
            base.parse_element (/<cim:PssWECC.inputSignal2Type>([\s\S]*?)<\/cim:PssWECC.inputSignal2Type>/g, obj, "inputSignal2Type", base.to_string, sub, context);

            /**
             * Input signal 1 gain  (K<sub>1</sub>).
             *
             */
            base.parse_element (/<cim:PssWECC.k1>([\s\S]*?)<\/cim:PssWECC.k1>/g, obj, "k1", base.to_string, sub, context);

            /**
             * Input signal 2 gain (K<sub>2</sub>).
             *
             */
            base.parse_element (/<cim:PssWECC.k2>([\s\S]*?)<\/cim:PssWECC.k2>/g, obj, "k2", base.to_string, sub, context);

            /**
             * Input signal 1 transducer time constant (T<sub>1</sub>).
             *
             */
            base.parse_element (/<cim:PssWECC.t1>([\s\S]*?)<\/cim:PssWECC.t1>/g, obj, "t1", base.to_string, sub, context);

            /**
             * Lag time constant (T<sub>10</sub>).
             *
             */
            base.parse_element (/<cim:PssWECC.t10>([\s\S]*?)<\/cim:PssWECC.t10>/g, obj, "t10", base.to_string, sub, context);

            /**
             * Input signal 2 transducer time constant (T<sub>2</sub>).
             *
             */
            base.parse_element (/<cim:PssWECC.t2>([\s\S]*?)<\/cim:PssWECC.t2>/g, obj, "t2", base.to_string, sub, context);

            /**
             * Stabilizer washout time constant (T<sub>3</sub>).
             *
             */
            base.parse_element (/<cim:PssWECC.t3>([\s\S]*?)<\/cim:PssWECC.t3>/g, obj, "t3", base.to_string, sub, context);

            /**
             * Stabilizer washout time lag constant (T<sub>4</sub>) (&gt;0).
             *
             */
            base.parse_element (/<cim:PssWECC.t4>([\s\S]*?)<\/cim:PssWECC.t4>/g, obj, "t4", base.to_string, sub, context);

            /**
             * Lead time constant (T<sub>5</sub>).
             *
             */
            base.parse_element (/<cim:PssWECC.t5>([\s\S]*?)<\/cim:PssWECC.t5>/g, obj, "t5", base.to_string, sub, context);

            /**
             * Lag time constant (T<sub>6</sub>).
             *
             */
            base.parse_element (/<cim:PssWECC.t6>([\s\S]*?)<\/cim:PssWECC.t6>/g, obj, "t6", base.to_string, sub, context);

            /**
             * Lead time constant (T<sub>7</sub>).
             *
             */
            base.parse_element (/<cim:PssWECC.t7>([\s\S]*?)<\/cim:PssWECC.t7>/g, obj, "t7", base.to_string, sub, context);

            /**
             * Lag time constant (T<sub>8</sub>).
             *
             */
            base.parse_element (/<cim:PssWECC.t8>([\s\S]*?)<\/cim:PssWECC.t8>/g, obj, "t8", base.to_string, sub, context);

            /**
             * Lead time constant (T<sub>9</sub>).
             *
             */
            base.parse_element (/<cim:PssWECC.t9>([\s\S]*?)<\/cim:PssWECC.t9>/g, obj, "t9", base.to_string, sub, context);

            /**
             * Minimum value for voltage compensator output (V<sub>CL</sub>).
             *
             */
            base.parse_element (/<cim:PssWECC.vcl>([\s\S]*?)<\/cim:PssWECC.vcl>/g, obj, "vcl", base.to_string, sub, context);

            /**
             * Maximum value for voltage compensator output (V<sub>CU</sub>).
             *
             */
            base.parse_element (/<cim:PssWECC.vcu>([\s\S]*?)<\/cim:PssWECC.vcu>/g, obj, "vcu", base.to_string, sub, context);

            /**
             * Maximum output signal (Vsmax).
             *
             */
            base.parse_element (/<cim:PssWECC.vsmax>([\s\S]*?)<\/cim:PssWECC.vsmax>/g, obj, "vsmax", base.to_string, sub, context);

            /**
             * Minimum output signal (Vsmin).
             *
             */
            base.parse_element (/<cim:PssWECC.vsmin>([\s\S]*?)<\/cim:PssWECC.vsmin>/g, obj, "vsmin", base.to_string, sub, context);

            bucket = context.parsed.PssWECC;
            if (null == bucket)
                context.parsed.PssWECC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Power system stabilizer function block whose behaviour is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         *
         */
        function parse_PowerSystemStabilizerDynamics (context, sub)
        {
            var obj;
            var bucket;

            obj = StandardModels.parse_DynamicsFunctionBlock (context, sub);
            obj.cls = "PowerSystemStabilizerDynamics";
            /**
             * Excitation system model with which this power system stabilizer model is associated.
             *
             */
            base.parse_attribute (/<cim:PowerSystemStabilizerDynamics.ExcitationSystemDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExcitationSystemDynamics", sub, context, true);

            bucket = context.parsed.PowerSystemStabilizerDynamics;
            if (null == bucket)
                context.parsed.PowerSystemStabilizerDynamics = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * PTI Microprocessor-Based Stabilizer type 1.
         *
         */
        function parse_PssPTIST1 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PowerSystemStabilizerDynamics (context, sub);
            obj.cls = "PssPTIST1";
            /**
             * Time step related to activation of controls (Dtc).
             *
             * Typical Value = 0.025.
             *
             */
            base.parse_element (/<cim:PssPTIST1.dtc>([\s\S]*?)<\/cim:PssPTIST1.dtc>/g, obj, "dtc", base.to_string, sub, context);

            /**
             * Time step frequency calculation (Dtf).
             *
             * Typical Value = 0.025.
             *
             */
            base.parse_element (/<cim:PssPTIST1.dtf>([\s\S]*?)<\/cim:PssPTIST1.dtf>/g, obj, "dtf", base.to_string, sub, context);

            /**
             * Time step active power calculation (Dtp).
             *
             * Typical Value = 0.0125.
             *
             */
            base.parse_element (/<cim:PssPTIST1.dtp>([\s\S]*?)<\/cim:PssPTIST1.dtp>/g, obj, "dtp", base.to_string, sub, context);

            /**
             * Gain (K).
             *
             * Typical Value = 9.
             *
             */
            base.parse_element (/<cim:PssPTIST1.k>([\s\S]*?)<\/cim:PssPTIST1.k>/g, obj, "k", base.to_string, sub, context);

            /**
             * (M).
             *
             * M=2*H.  Typical Value = 5.
             *
             */
            base.parse_element (/<cim:PssPTIST1.m>([\s\S]*?)<\/cim:PssPTIST1.m>/g, obj, "m", base.to_string, sub, context);

            /**
             * Time constant (T1).
             *
             * Typical Value = 0.3.
             *
             */
            base.parse_element (/<cim:PssPTIST1.t1>([\s\S]*?)<\/cim:PssPTIST1.t1>/g, obj, "t1", base.to_string, sub, context);

            /**
             * Time constant (T2).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:PssPTIST1.t2>([\s\S]*?)<\/cim:PssPTIST1.t2>/g, obj, "t2", base.to_string, sub, context);

            /**
             * Time constant (T3).
             *
             * Typical Value = 0.2.
             *
             */
            base.parse_element (/<cim:PssPTIST1.t3>([\s\S]*?)<\/cim:PssPTIST1.t3>/g, obj, "t3", base.to_string, sub, context);

            /**
             * Time constant (T4).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:PssPTIST1.t4>([\s\S]*?)<\/cim:PssPTIST1.t4>/g, obj, "t4", base.to_string, sub, context);

            /**
             * Time constant (Tf).
             *
             * Typical Value = 0.2.
             *
             */
            base.parse_element (/<cim:PssPTIST1.tf>([\s\S]*?)<\/cim:PssPTIST1.tf>/g, obj, "tf", base.to_string, sub, context);

            /**
             * Time constant (Tp).
             *
             * Typical Value = 0.2.
             *
             */
            base.parse_element (/<cim:PssPTIST1.tp>([\s\S]*?)<\/cim:PssPTIST1.tp>/g, obj, "tp", base.to_string, sub, context);

            bucket = context.parsed.PssPTIST1;
            if (null == bucket)
                context.parsed.PssPTIST1 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type PSS2B power system stabilizer model.
         *
         * This stabilizer model is designed to represent a variety of dual-input stabilizers, which normally use combinations of power and speed or frequency to derive the stabilizing signal.
         *
         */
        function parse_PssIEEE2B (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PowerSystemStabilizerDynamics (context, sub);
            obj.cls = "PssIEEE2B";
            /**
             * Type of input signal #1.
             *
             * Typical Value = rotorSpeed.
             *
             */
            base.parse_element (/<cim:PssIEEE2B.inputSignal1Type>([\s\S]*?)<\/cim:PssIEEE2B.inputSignal1Type>/g, obj, "inputSignal1Type", base.to_string, sub, context);

            /**
             * Type of input signal #2.
             *
             * Typical Value = generatorElectricalPower.
             *
             */
            base.parse_element (/<cim:PssIEEE2B.inputSignal2Type>([\s\S]*?)<\/cim:PssIEEE2B.inputSignal2Type>/g, obj, "inputSignal2Type", base.to_string, sub, context);

            /**
             * Stabilizer gain (Ks1).
             *
             * Typical Value = 12.
             *
             */
            base.parse_element (/<cim:PssIEEE2B.ks1>([\s\S]*?)<\/cim:PssIEEE2B.ks1>/g, obj, "ks1", base.to_string, sub, context);

            /**
             * Gain on signal #2 (Ks2).
             *
             * Typical Value = 0.2.
             *
             */
            base.parse_element (/<cim:PssIEEE2B.ks2>([\s\S]*?)<\/cim:PssIEEE2B.ks2>/g, obj, "ks2", base.to_string, sub, context);

            /**
             * Gain on signal #2 input before ramp-tracking filter (Ks3).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:PssIEEE2B.ks3>([\s\S]*?)<\/cim:PssIEEE2B.ks3>/g, obj, "ks3", base.to_string, sub, context);

            /**
             * Denominator order of ramp tracking filter (M).
             *
             * Typical Value = 5.
             *
             */
            base.parse_element (/<cim:PssIEEE2B.m>([\s\S]*?)<\/cim:PssIEEE2B.m>/g, obj, "m", base.to_string, sub, context);

            /**
             * Order of ramp tracking filter (N).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:PssIEEE2B.n>([\s\S]*?)<\/cim:PssIEEE2B.n>/g, obj, "n", base.to_string, sub, context);

            /**
             * Lead/lag time constant (T1).
             *
             * Typical Value = 0.12.
             *
             */
            base.parse_element (/<cim:PssIEEE2B.t1>([\s\S]*?)<\/cim:PssIEEE2B.t1>/g, obj, "t1", base.to_string, sub, context);

            /**
             * Lead/lag time constant (T10).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssIEEE2B.t10>([\s\S]*?)<\/cim:PssIEEE2B.t10>/g, obj, "t10", base.to_string, sub, context);

            /**
             * Lead/lag time constant (T11).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssIEEE2B.t11>([\s\S]*?)<\/cim:PssIEEE2B.t11>/g, obj, "t11", base.to_string, sub, context);

            /**
             * Lead/lag time constant (T2).
             *
             * Typical Value = 0.02.
             *
             */
            base.parse_element (/<cim:PssIEEE2B.t2>([\s\S]*?)<\/cim:PssIEEE2B.t2>/g, obj, "t2", base.to_string, sub, context);

            /**
             * Lead/lag time constant (T3).
             *
             * Typical Value = 0.3.
             *
             */
            base.parse_element (/<cim:PssIEEE2B.t3>([\s\S]*?)<\/cim:PssIEEE2B.t3>/g, obj, "t3", base.to_string, sub, context);

            /**
             * Lead/lag time constant (T4).
             *
             * Typical Value = 0.02.
             *
             */
            base.parse_element (/<cim:PssIEEE2B.t4>([\s\S]*?)<\/cim:PssIEEE2B.t4>/g, obj, "t4", base.to_string, sub, context);

            /**
             * Time constant on signal #1 (T6).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssIEEE2B.t6>([\s\S]*?)<\/cim:PssIEEE2B.t6>/g, obj, "t6", base.to_string, sub, context);

            /**
             * Time constant on signal #2 (T7).
             *
             * Typical Value = 2.
             *
             */
            base.parse_element (/<cim:PssIEEE2B.t7>([\s\S]*?)<\/cim:PssIEEE2B.t7>/g, obj, "t7", base.to_string, sub, context);

            /**
             * Lead of ramp tracking filter (T8).
             *
             * Typical Value = 0.2.
             *
             */
            base.parse_element (/<cim:PssIEEE2B.t8>([\s\S]*?)<\/cim:PssIEEE2B.t8>/g, obj, "t8", base.to_string, sub, context);

            /**
             * Lag of ramp tracking filter (T9).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:PssIEEE2B.t9>([\s\S]*?)<\/cim:PssIEEE2B.t9>/g, obj, "t9", base.to_string, sub, context);

            /**
             * First washout on signal #1 (Tw1).
             *
             * Typical Value = 2.
             *
             */
            base.parse_element (/<cim:PssIEEE2B.tw1>([\s\S]*?)<\/cim:PssIEEE2B.tw1>/g, obj, "tw1", base.to_string, sub, context);

            /**
             * Second washout on signal #1 (Tw2).
             *
             * Typical Value = 2.
             *
             */
            base.parse_element (/<cim:PssIEEE2B.tw2>([\s\S]*?)<\/cim:PssIEEE2B.tw2>/g, obj, "tw2", base.to_string, sub, context);

            /**
             * First washout on signal #2 (Tw3).
             *
             * Typical Value = 2.
             *
             */
            base.parse_element (/<cim:PssIEEE2B.tw3>([\s\S]*?)<\/cim:PssIEEE2B.tw3>/g, obj, "tw3", base.to_string, sub, context);

            /**
             * Second washout on signal #2 (Tw4).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:PssIEEE2B.tw4>([\s\S]*?)<\/cim:PssIEEE2B.tw4>/g, obj, "tw4", base.to_string, sub, context);

            /**
             * Input signal #1 max limit (Vsi1max).
             *
             * Typical Value = 2.
             *
             */
            base.parse_element (/<cim:PssIEEE2B.vsi1max>([\s\S]*?)<\/cim:PssIEEE2B.vsi1max>/g, obj, "vsi1max", base.to_string, sub, context);

            /**
             * Input signal #1 min limit (Vsi1min).
             *
             * Typical Value = -2.
             *
             */
            base.parse_element (/<cim:PssIEEE2B.vsi1min>([\s\S]*?)<\/cim:PssIEEE2B.vsi1min>/g, obj, "vsi1min", base.to_string, sub, context);

            /**
             * Input signal #2 max limit (Vsi2max).
             *
             * Typical Value = 2.
             *
             */
            base.parse_element (/<cim:PssIEEE2B.vsi2max>([\s\S]*?)<\/cim:PssIEEE2B.vsi2max>/g, obj, "vsi2max", base.to_string, sub, context);

            /**
             * Input signal #2 min limit (Vsi2min).
             *
             * Typical Value = -2.
             *
             */
            base.parse_element (/<cim:PssIEEE2B.vsi2min>([\s\S]*?)<\/cim:PssIEEE2B.vsi2min>/g, obj, "vsi2min", base.to_string, sub, context);

            /**
             * Stabilizer output max limit (Vstmax).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:PssIEEE2B.vstmax>([\s\S]*?)<\/cim:PssIEEE2B.vstmax>/g, obj, "vstmax", base.to_string, sub, context);

            /**
             * Stabilizer output min limit (Vstmin).
             *
             * Typical Value = -0.1.
             *
             */
            base.parse_element (/<cim:PssIEEE2B.vstmin>([\s\S]*?)<\/cim:PssIEEE2B.vstmin>/g, obj, "vstmin", base.to_string, sub, context);

            bucket = context.parsed.PssIEEE2B;
            if (null == bucket)
                context.parsed.PssIEEE2B = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * PTI Microprocessor-Based Stabilizer type 1.
         *
         */
        function parse_Pss2ST (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PowerSystemStabilizerDynamics (context, sub);
            obj.cls = "Pss2ST";
            /**
             * Type of input signal #1.
             *
             * Typical Value = rotorAngularFrequencyDeviation.
             *
             */
            base.parse_element (/<cim:Pss2ST.inputSignal1Type>([\s\S]*?)<\/cim:Pss2ST.inputSignal1Type>/g, obj, "inputSignal1Type", base.to_string, sub, context);

            /**
             * Type of input signal #2.
             *
             * Typical Value = generatorElectricalPower.
             *
             */
            base.parse_element (/<cim:Pss2ST.inputSignal2Type>([\s\S]*?)<\/cim:Pss2ST.inputSignal2Type>/g, obj, "inputSignal2Type", base.to_string, sub, context);

            /**
             * Gain (K1).
             *
             */
            base.parse_element (/<cim:Pss2ST.k1>([\s\S]*?)<\/cim:Pss2ST.k1>/g, obj, "k1", base.to_string, sub, context);

            /**
             * Gain (K2).
             *
             */
            base.parse_element (/<cim:Pss2ST.k2>([\s\S]*?)<\/cim:Pss2ST.k2>/g, obj, "k2", base.to_string, sub, context);

            /**
             * Limiter (Lsmax).
             *
             */
            base.parse_element (/<cim:Pss2ST.lsmax>([\s\S]*?)<\/cim:Pss2ST.lsmax>/g, obj, "lsmax", base.to_string, sub, context);

            /**
             * Limiter (Lsmin).
             *
             */
            base.parse_element (/<cim:Pss2ST.lsmin>([\s\S]*?)<\/cim:Pss2ST.lsmin>/g, obj, "lsmin", base.to_string, sub, context);

            /**
             * Time constant (T1).
             *
             */
            base.parse_element (/<cim:Pss2ST.t1>([\s\S]*?)<\/cim:Pss2ST.t1>/g, obj, "t1", base.to_string, sub, context);

            /**
             * Time constant (T10).
             *
             */
            base.parse_element (/<cim:Pss2ST.t10>([\s\S]*?)<\/cim:Pss2ST.t10>/g, obj, "t10", base.to_string, sub, context);

            /**
             * Time constant (T2).
             *
             */
            base.parse_element (/<cim:Pss2ST.t2>([\s\S]*?)<\/cim:Pss2ST.t2>/g, obj, "t2", base.to_string, sub, context);

            /**
             * Time constant (T3).
             *
             */
            base.parse_element (/<cim:Pss2ST.t3>([\s\S]*?)<\/cim:Pss2ST.t3>/g, obj, "t3", base.to_string, sub, context);

            /**
             * Time constant (T4).
             *
             */
            base.parse_element (/<cim:Pss2ST.t4>([\s\S]*?)<\/cim:Pss2ST.t4>/g, obj, "t4", base.to_string, sub, context);

            /**
             * Time constant (T5).
             *
             */
            base.parse_element (/<cim:Pss2ST.t5>([\s\S]*?)<\/cim:Pss2ST.t5>/g, obj, "t5", base.to_string, sub, context);

            /**
             * Time constant (T6).
             *
             */
            base.parse_element (/<cim:Pss2ST.t6>([\s\S]*?)<\/cim:Pss2ST.t6>/g, obj, "t6", base.to_string, sub, context);

            /**
             * Time constant (T7).
             *
             */
            base.parse_element (/<cim:Pss2ST.t7>([\s\S]*?)<\/cim:Pss2ST.t7>/g, obj, "t7", base.to_string, sub, context);

            /**
             * Time constant (T8).
             *
             */
            base.parse_element (/<cim:Pss2ST.t8>([\s\S]*?)<\/cim:Pss2ST.t8>/g, obj, "t8", base.to_string, sub, context);

            /**
             * Time constant (T9).
             *
             */
            base.parse_element (/<cim:Pss2ST.t9>([\s\S]*?)<\/cim:Pss2ST.t9>/g, obj, "t9", base.to_string, sub, context);

            /**
             * Cutoff limiter (Vcl).
             *
             */
            base.parse_element (/<cim:Pss2ST.vcl>([\s\S]*?)<\/cim:Pss2ST.vcl>/g, obj, "vcl", base.to_string, sub, context);

            /**
             * Cutoff limiter (Vcu).
             *
             */
            base.parse_element (/<cim:Pss2ST.vcu>([\s\S]*?)<\/cim:Pss2ST.vcu>/g, obj, "vcu", base.to_string, sub, context);

            bucket = context.parsed.Pss2ST;
            if (null == bucket)
                context.parsed.Pss2ST = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Input signal type.
         *
         * In Dynamics modelling, commonly represented by j parameter.
         *
         */
        function parse_InputSignalKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "InputSignalKind";
            /**
             * Input signal is rotor or shaft speed (angular frequency).
             *
             */
            base.parse_element (/<cim:InputSignalKind.rotorSpeed>([\s\S]*?)<\/cim:InputSignalKind.rotorSpeed>/g, obj, "rotorSpeed", base.to_string, sub, context);

            /**
             * Input signal is rotor or shaft angular frequency deviation.
             *
             */
            base.parse_element (/<cim:InputSignalKind.rotorAngularFrequencyDeviation>([\s\S]*?)<\/cim:InputSignalKind.rotorAngularFrequencyDeviation>/g, obj, "rotorAngularFrequencyDeviation", base.to_string, sub, context);

            /**
             * Input signal is bus voltage fr<font color="#0f0f0f">equency.
             *
             * This could be a terminal frequency or remote frequency.</font>
             *
             */
            base.parse_element (/<cim:InputSignalKind.busFrequency>([\s\S]*?)<\/cim:InputSignalKind.busFrequency>/g, obj, "busFrequency", base.to_string, sub, context);

            /**
             * Input signal is deviation of bus voltage frequ<font color="#0f0f0f">ency.
             *
             * This could be a terminal frequency deviation or remote frequency deviation.</font>
             *
             */
            base.parse_element (/<cim:InputSignalKind.busFrequencyDeviation>([\s\S]*?)<\/cim:InputSignalKind.busFrequencyDeviation>/g, obj, "busFrequencyDeviation", base.to_string, sub, context);

            /**
             * Input signal is generator electrical power on rated S.
             *
             */
            base.parse_element (/<cim:InputSignalKind.generatorElectricalPower>([\s\S]*?)<\/cim:InputSignalKind.generatorElectricalPower>/g, obj, "generatorElectricalPower", base.to_string, sub, context);

            /**
             * Input signal is generating accelerating power.
             *
             */
            base.parse_element (/<cim:InputSignalKind.generatorAcceleratingPower>([\s\S]*?)<\/cim:InputSignalKind.generatorAcceleratingPower>/g, obj, "generatorAcceleratingPower", base.to_string, sub, context);

            /**
             * Input signal <font color="#0f0f0f">is bus voltage.
             *
             * This could be a terminal voltage or remote voltage.</font>
             *
             */
            base.parse_element (/<cim:InputSignalKind.busVoltage>([\s\S]*?)<\/cim:InputSignalKind.busVoltage>/g, obj, "busVoltage", base.to_string, sub, context);

            /**
             * Input signal is derivative of bus voltag<font color="#0f0f0f">e.
             *
             * This could be a terminal voltage derivative or remote voltage derivative.</font>
             *
             */
            base.parse_element (/<cim:InputSignalKind.busVoltageDerivative>([\s\S]*?)<\/cim:InputSignalKind.busVoltageDerivative>/g, obj, "busVoltageDerivative", base.to_string, sub, context);

            /**
             * Input signal is amplitude of remote branch current.
             *
             */
            base.parse_element (/<cim:InputSignalKind.branchCurrent>([\s\S]*?)<\/cim:InputSignalKind.branchCurrent>/g, obj, "branchCurrent", base.to_string, sub, context);

            /**
             * Input signal is generator field current.
             *
             */
            base.parse_element (/<cim:InputSignalKind.fieldCurrent>([\s\S]*?)<\/cim:InputSignalKind.fieldCurrent>/g, obj, "fieldCurrent", base.to_string, sub, context);

            bucket = context.parsed.InputSignalKind;
            if (null == bucket)
                context.parsed.InputSignalKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Italian PSS - three input PSS (speed, frequency, power).
         *
         */
        function parse_Pss1 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PowerSystemStabilizerDynamics (context, sub);
            obj.cls = "Pss1";
            /**
             * Frequency power input gain (K<sub>F</sub>).
             *
             * Typical Value = 5.
             *
             */
            base.parse_element (/<cim:Pss1.kf>([\s\S]*?)<\/cim:Pss1.kf>/g, obj, "kf", base.to_float, sub, context);

            /**
             * Electric power input gain (K<sub>PE</sub>).
             *
             * Typical Value = 0.3.
             *
             */
            base.parse_element (/<cim:Pss1.kpe>([\s\S]*?)<\/cim:Pss1.kpe>/g, obj, "kpe", base.to_float, sub, context);

            /**
             * PSS gain (K<sub>S</sub>).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:Pss1.ks>([\s\S]*?)<\/cim:Pss1.ks>/g, obj, "ks", base.to_float, sub, context);

            /**
             * Shaft speed power input gain (K<sub>W</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:Pss1.kw>([\s\S]*?)<\/cim:Pss1.kw>/g, obj, "kw", base.to_float, sub, context);

            /**
             * Minimum power PSS enabling (P<sub>MIN</sub>).
             *
             * Typical Value = 0.25.
             *
             */
            base.parse_element (/<cim:Pss1.pmin>([\s\S]*?)<\/cim:Pss1.pmin>/g, obj, "pmin", base.to_string, sub, context);

            /**
             * Lead/lag time constant (T<sub>10</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:Pss1.t10>([\s\S]*?)<\/cim:Pss1.t10>/g, obj, "t10", base.to_string, sub, context);

            /**
             * Washout (T<sub>5</sub>).
             *
             * Typical Value = 3.5.
             *
             */
            base.parse_element (/<cim:Pss1.t5>([\s\S]*?)<\/cim:Pss1.t5>/g, obj, "t5", base.to_string, sub, context);

            /**
             * Filter time constant (T<sub>6</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:Pss1.t6>([\s\S]*?)<\/cim:Pss1.t6>/g, obj, "t6", base.to_string, sub, context);

            /**
             * Lead/lag time constant (T<sub>7</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:Pss1.t7>([\s\S]*?)<\/cim:Pss1.t7>/g, obj, "t7", base.to_string, sub, context);

            /**
             * Lead/lag time constant (T<sub>8</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:Pss1.t8>([\s\S]*?)<\/cim:Pss1.t8>/g, obj, "t8", base.to_string, sub, context);

            /**
             * Lead/lag time constant (T<sub>9</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:Pss1.t9>([\s\S]*?)<\/cim:Pss1.t9>/g, obj, "t9", base.to_string, sub, context);

            /**
             * Electric power filter time constant (T<sub>PE</sub>).
             *
             * Typical Value = 0.05.
             *
             */
            base.parse_element (/<cim:Pss1.tpe>([\s\S]*?)<\/cim:Pss1.tpe>/g, obj, "tpe", base.to_string, sub, context);

            /**
             * <font color="#0f0f0f">Signal selector (V<sub>adAt</sub>).</font>
             * <font color="#0f0f0f">true = closed (Generator Power is greater than Pmin)</font>
             * <font color="#0f0f0f">false = open (Pe is smaller than Pmin).</font>
             *
             * <font color="#0f0f0f">Typical Value = true.</font>
             *
             */
            base.parse_element (/<cim:Pss1.vadat>([\s\S]*?)<\/cim:Pss1.vadat>/g, obj, "vadat", base.to_boolean, sub, context);

            /**
             * Stabilizer output max limit (V<sub>SMN</sub>).
             *
             * Typical Value = -0.06.
             *
             */
            base.parse_element (/<cim:Pss1.vsmn>([\s\S]*?)<\/cim:Pss1.vsmn>/g, obj, "vsmn", base.to_string, sub, context);

            /**
             * Stabilizer output min limit (V<sub>SMX</sub>).
             *
             * Typical Value = 0.06.
             *
             */
            base.parse_element (/<cim:Pss1.vsmx>([\s\S]*?)<\/cim:Pss1.vsmx>/g, obj, "vsmx", base.to_string, sub, context);

            bucket = context.parsed.Pss1;
            if (null == bucket)
                context.parsed.Pss1 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model for Siemens �H infinity� power system stabilizer with generator electrical power input.
         *
         */
        function parse_PssSH (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PowerSystemStabilizerDynamics (context, sub);
            obj.cls = "PssSH";
            /**
             * Main gain (K).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:PssSH.k>([\s\S]*?)<\/cim:PssSH.k>/g, obj, "k", base.to_string, sub, context);

            /**
             * Gain 0 (K0).
             *
             * Typical Value = 0.012.
             *
             */
            base.parse_element (/<cim:PssSH.k0>([\s\S]*?)<\/cim:PssSH.k0>/g, obj, "k0", base.to_string, sub, context);

            /**
             * Gain 1 (K1).
             *
             * Typical Value = 0.488.
             *
             */
            base.parse_element (/<cim:PssSH.k1>([\s\S]*?)<\/cim:PssSH.k1>/g, obj, "k1", base.to_string, sub, context);

            /**
             * Gain 2 (K2).
             *
             * Typical Value = 0.064.
             *
             */
            base.parse_element (/<cim:PssSH.k2>([\s\S]*?)<\/cim:PssSH.k2>/g, obj, "k2", base.to_string, sub, context);

            /**
             * Gain 3 (K3).
             *
             * Typical Value = 0.224.
             *
             */
            base.parse_element (/<cim:PssSH.k3>([\s\S]*?)<\/cim:PssSH.k3>/g, obj, "k3", base.to_string, sub, context);

            /**
             * Gain 4 (K4).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:PssSH.k4>([\s\S]*?)<\/cim:PssSH.k4>/g, obj, "k4", base.to_string, sub, context);

            /**
             * Time constant 1 (T1).
             *
             * Typical Value = 0.076.
             *
             */
            base.parse_element (/<cim:PssSH.t1>([\s\S]*?)<\/cim:PssSH.t1>/g, obj, "t1", base.to_string, sub, context);

            /**
             * Time constant 2 (T2).
             *
             * Typical Value = 0.086.
             *
             */
            base.parse_element (/<cim:PssSH.t2>([\s\S]*?)<\/cim:PssSH.t2>/g, obj, "t2", base.to_string, sub, context);

            /**
             * Time constant 3 (T3).
             *
             * Typical Value = 1.068.
             *
             */
            base.parse_element (/<cim:PssSH.t3>([\s\S]*?)<\/cim:PssSH.t3>/g, obj, "t3", base.to_string, sub, context);

            /**
             * Time constant 4 (T4).
             *
             * Typical Value = 1.913.
             *
             */
            base.parse_element (/<cim:PssSH.t4>([\s\S]*?)<\/cim:PssSH.t4>/g, obj, "t4", base.to_string, sub, context);

            /**
             * Input time constant (Td).
             *
             * Typical Value = 10.
             *
             */
            base.parse_element (/<cim:PssSH.td>([\s\S]*?)<\/cim:PssSH.td>/g, obj, "td", base.to_string, sub, context);

            /**
             * Output maximum limit (Vsmax).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:PssSH.vsmax>([\s\S]*?)<\/cim:PssSH.vsmax>/g, obj, "vsmax", base.to_string, sub, context);

            /**
             * Output minimum limit (Vsmin).
             *
             * Typical Value = -0.1.
             *
             */
            base.parse_element (/<cim:PssSH.vsmin>([\s\S]*?)<\/cim:PssSH.vsmin>/g, obj, "vsmin", base.to_string, sub, context);

            bucket = context.parsed.PssSH;
            if (null == bucket)
                context.parsed.PssSH = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_PssSK: parse_PssSK,
                parse_PssSH: parse_PssSH,
                parse_Pss5: parse_Pss5,
                parse_PssWECC: parse_PssWECC,
                parse_Pss2B: parse_Pss2B,
                parse_PssPTIST1: parse_PssPTIST1,
                parse_PssIEEE4B: parse_PssIEEE4B,
                parse_PssPTIST3: parse_PssPTIST3,
                parse_PssIEEE1A: parse_PssIEEE1A,
                parse_PssIEEE3B: parse_PssIEEE3B,
                parse_Pss2ST: parse_Pss2ST,
                parse_PssELIN2: parse_PssELIN2,
                parse_PssIEEE2B: parse_PssIEEE2B,
                parse_PssSB4: parse_PssSB4,
                parse_InputSignalKind: parse_InputSignalKind,
                parse_Pss1: parse_Pss1,
                parse_PowerSystemStabilizerDynamics: parse_PowerSystemStabilizerDynamics,
                parse_Pss1A: parse_Pss1A
            }
        );
    }
);