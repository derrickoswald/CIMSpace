define
(
    ["model/base", "model/StandardModels"],
    /**
     * Overexcitation limiters (OELs) are also referred to as <i>maximum excitation limiters </i>and <i>field current limiters. </i>The possibility of voltage collapse in stressed power systems increases the importance of modelling these limiters in studies of system conditions that cause machines to operate at high levels of excitation for a sustained period, such as voltage collapse or system-islanding.
     *
     * Such events typically occur over a long time frame compared with transient or small-signal stability simulations.
     *
     */
    function (base, StandardModels)
    {

        /**
         * The over excitation limiter model is intended to represent the significant features of OELs necessary for some large-scale system studies.
         *
         * It is the result of a pragmatic approach to obtain a model that can be widely applied with attainable data from generator owners. An attempt to include all variations in the functionality of OELs and duplicate how they interact with the rest of the excitation systems would likely result in a level of application insufficient for the studies for which they are intended.
         *
         */
        function parse_OverexcLimIEEE (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_OverexcitationLimiterDynamics (context, sub);
            obj.cls = "OverexcLimIEEE";
            /**
             * OEL pickup/drop-out hysteresis (HYST).
             *
             * Typical Value = 0.03.
             *
             */
            base.parse_element (/<cim:OverexcLimIEEE.hyst>([\s\S]*?)<\/cim:OverexcLimIEEE.hyst>/g, obj, "hyst", base.to_string, sub, context);

            /**
             * OEL timed field current limit (I<sub>FDLIM</sub>).
             *
             * Typical Value = 1.05.
             *
             */
            base.parse_element (/<cim:OverexcLimIEEE.ifdlim>([\s\S]*?)<\/cim:OverexcLimIEEE.ifdlim>/g, obj, "ifdlim", base.to_string, sub, context);

            /**
             * OEL instantaneous field current limit (I<sub>FDMAX</sub>).
             *
             * Typical Value = 1.5.
             *
             */
            base.parse_element (/<cim:OverexcLimIEEE.ifdmax>([\s\S]*?)<\/cim:OverexcLimIEEE.ifdmax>/g, obj, "ifdmax", base.to_string, sub, context);

            /**
             * OEL timed field current limiter pickup level (I<sub>TFPU</sub>).
             *
             * Typical Value = 1.05.
             *
             */
            base.parse_element (/<cim:OverexcLimIEEE.itfpu>([\s\S]*?)<\/cim:OverexcLimIEEE.itfpu>/g, obj, "itfpu", base.to_string, sub, context);

            /**
             * OEL cooldown gain (K<sub>CD</sub>).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:OverexcLimIEEE.kcd>([\s\S]*?)<\/cim:OverexcLimIEEE.kcd>/g, obj, "kcd", base.to_string, sub, context);

            /**
             * OEL ramped limit rate (K<sub>RAMP</sub>).
             *
             * Unit = PU/sec.  Typical Value = 10.
             *
             */
            base.parse_element (/<cim:OverexcLimIEEE.kramp>([\s\S]*?)<\/cim:OverexcLimIEEE.kramp>/g, obj, "kramp", base.to_float, sub, context);

            bucket = context.parsed.OverexcLimIEEE;
            if (null == bucket)
                context.parsed.OverexcLimIEEE = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Field voltage over excitation limiter.
         *
         */
        function parse_OverexcLimX1 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_OverexcitationLimiterDynamics (context, sub);
            obj.cls = "OverexcLimX1";
            /**
             * Low voltage point on the inverse time characteristic (EFD<sub>1</sub>).
             *
             * Typical Value = 1.1.
             *
             */
            base.parse_element (/<cim:OverexcLimX1.efd1>([\s\S]*?)<\/cim:OverexcLimX1.efd1>/g, obj, "efd1", base.to_string, sub, context);

            /**
             * Mid voltage point on the inverse time characteristic (EFD<sub>2</sub>).
             *
             * Typical Value = 1.2.
             *
             */
            base.parse_element (/<cim:OverexcLimX1.efd2>([\s\S]*?)<\/cim:OverexcLimX1.efd2>/g, obj, "efd2", base.to_string, sub, context);

            /**
             * High voltage point on the inverse time characteristic (EFD<sub>3</sub>).
             *
             * Typical Value = 1.5.
             *
             */
            base.parse_element (/<cim:OverexcLimX1.efd3>([\s\S]*?)<\/cim:OverexcLimX1.efd3>/g, obj, "efd3", base.to_string, sub, context);

            /**
             * Desired field voltage (EFD<sub>DES</sub>).
             *
             * Typical Value = 0.9.
             *
             */
            base.parse_element (/<cim:OverexcLimX1.efddes>([\s\S]*?)<\/cim:OverexcLimX1.efddes>/g, obj, "efddes", base.to_string, sub, context);

            /**
             * Rated field voltage (EFD<sub>RATED</sub>).
             *
             * Typical Value = 1.05.
             *
             */
            base.parse_element (/<cim:OverexcLimX1.efdrated>([\s\S]*?)<\/cim:OverexcLimX1.efdrated>/g, obj, "efdrated", base.to_string, sub, context);

            /**
             * Gain (K<sub>MX</sub>).
             *
             * Typical Value = 0.01.
             *
             */
            base.parse_element (/<cim:OverexcLimX1.kmx>([\s\S]*?)<\/cim:OverexcLimX1.kmx>/g, obj, "kmx", base.to_string, sub, context);

            /**
             * Time to trip the exciter at the low voltage point on the inverse time characteristic (TIME<sub>1</sub>).
             *
             * Typical Value = 120.
             *
             */
            base.parse_element (/<cim:OverexcLimX1.t1>([\s\S]*?)<\/cim:OverexcLimX1.t1>/g, obj, "t1", base.to_string, sub, context);

            /**
             * Time to trip the exciter at the mid voltage point on the inverse time characteristic (TIME<sub>2</sub>).
             *
             * Typical Value = 40.
             *
             */
            base.parse_element (/<cim:OverexcLimX1.t2>([\s\S]*?)<\/cim:OverexcLimX1.t2>/g, obj, "t2", base.to_string, sub, context);

            /**
             * Time to trip the exciter at the high voltage point on the inverse time characteristic (TIME<sub>3</sub>).
             *
             * Typical Value = 15.
             *
             */
            base.parse_element (/<cim:OverexcLimX1.t3>([\s\S]*?)<\/cim:OverexcLimX1.t3>/g, obj, "t3", base.to_string, sub, context);

            /**
             * Low voltage limit (V<sub>LOW</sub>) (&gt;0).
             *
             */
            base.parse_element (/<cim:OverexcLimX1.vlow>([\s\S]*?)<\/cim:OverexcLimX1.vlow>/g, obj, "vlow", base.to_string, sub, context);

            bucket = context.parsed.OverexcLimX1;
            if (null == bucket)
                context.parsed.OverexcLimX1 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Field Voltage or Current overexcitation limiter designed to protect the generator field of an AC machine with automatic excitation control from overheating due to prolonged overexcitation.
         *
         */
        function parse_OverexcLimX2 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_OverexcitationLimiterDynamics (context, sub);
            obj.cls = "OverexcLimX2";
            /**
             * Low voltage or current point on the inverse time characteristic (EFD<sub>1</sub>).
             *
             * Typical Value = 1.1.
             *
             */
            base.parse_element (/<cim:OverexcLimX2.efd1>([\s\S]*?)<\/cim:OverexcLimX2.efd1>/g, obj, "efd1", base.to_string, sub, context);

            /**
             * Mid voltage or current point on the inverse time characteristic (EFD<sub>2</sub>).
             *
             * Typical Value = 1.2.
             *
             */
            base.parse_element (/<cim:OverexcLimX2.efd2>([\s\S]*?)<\/cim:OverexcLimX2.efd2>/g, obj, "efd2", base.to_string, sub, context);

            /**
             * High voltage or current point on the inverse time characteristic (EFD<sub>3</sub>).
             *
             * Typical Value = 1.5.
             *
             */
            base.parse_element (/<cim:OverexcLimX2.efd3>([\s\S]*?)<\/cim:OverexcLimX2.efd3>/g, obj, "efd3", base.to_string, sub, context);

            /**
             * Desired field voltage if m=F or field current if m=T (EFD<sub>DES</sub>).
             *
             * Typical Value = 1.
             *
             */
            base.parse_element (/<cim:OverexcLimX2.efddes>([\s\S]*?)<\/cim:OverexcLimX2.efddes>/g, obj, "efddes", base.to_string, sub, context);

            /**
             * Rated field voltage if m=F or field current if m=T (EFD<sub>RATED</sub>).
             *
             * Typical Value = 1.05.
             *
             */
            base.parse_element (/<cim:OverexcLimX2.efdrated>([\s\S]*?)<\/cim:OverexcLimX2.efdrated>/g, obj, "efdrated", base.to_string, sub, context);

            /**
             * Gain (K<sub>MX</sub>).
             *
             * Typical Value = 0.002.
             *
             */
            base.parse_element (/<cim:OverexcLimX2.kmx>([\s\S]*?)<\/cim:OverexcLimX2.kmx>/g, obj, "kmx", base.to_string, sub, context);

            /**
             * (m).
             * true = IFD limiting
             *
             * false = EFD limiting.
             *
             */
            base.parse_element (/<cim:OverexcLimX2.m>([\s\S]*?)<\/cim:OverexcLimX2.m>/g, obj, "m", base.to_boolean, sub, context);

            /**
             * Time to trip the exciter at the low voltage or current point on the inverse time characteristic (TIME<sub>1</sub>).
             *
             * Typical Value = 120.
             *
             */
            base.parse_element (/<cim:OverexcLimX2.t1>([\s\S]*?)<\/cim:OverexcLimX2.t1>/g, obj, "t1", base.to_string, sub, context);

            /**
             * Time to trip the exciter at the mid voltage or current point on the inverse time characteristic (TIME<sub>2</sub>).
             *
             * Typical Value = 40.
             *
             */
            base.parse_element (/<cim:OverexcLimX2.t2>([\s\S]*?)<\/cim:OverexcLimX2.t2>/g, obj, "t2", base.to_string, sub, context);

            /**
             * Time to trip the exciter at the high voltage or current point on the inverse time characteristic (TIME<sub>3</sub>).
             *
             * Typical Value = 15.
             *
             */
            base.parse_element (/<cim:OverexcLimX2.t3>([\s\S]*?)<\/cim:OverexcLimX2.t3>/g, obj, "t3", base.to_string, sub, context);

            /**
             * Low voltage limit (V<sub>LOW</sub>) (&gt;0).
             *
             */
            base.parse_element (/<cim:OverexcLimX2.vlow>([\s\S]*?)<\/cim:OverexcLimX2.vlow>/g, obj, "vlow", base.to_string, sub, context);

            bucket = context.parsed.OverexcLimX2;
            if (null == bucket)
                context.parsed.OverexcLimX2 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * <font color="#0f0f0f">O</font>Overexcitation limiter function block whose behaviour is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         *
         */
        function parse_OverexcitationLimiterDynamics (context, sub)
        {
            var obj;
            var bucket;

            obj = StandardModels.parse_DynamicsFunctionBlock (context, sub);
            obj.cls = "OverexcitationLimiterDynamics";
            /**
             * Excitation system model with which this overexcitation limiter model is associated.
             *
             */
            base.parse_attribute (/<cim:OverexcitationLimiterDynamics.ExcitationSystemDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExcitationSystemDynamics", sub, context, true);

            bucket = context.parsed.OverexcitationLimiterDynamics;
            if (null == bucket)
                context.parsed.OverexcitationLimiterDynamics = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Different from LimIEEEOEL, LimOEL2 has a fixed pickup threshold and reduces the excitation set-point by mean of non-windup integral regulator.
         *
         * Irated is the rated machine excitation current (calculated from nameplate conditions: V<sub>nom</sub>, P<sub>nom</sub>, CosPhi<sub>nom</sub>).
         *
         */
        function parse_OverexcLim2 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_OverexcitationLimiterDynamics (context, sub);
            obj.cls = "OverexcLim2";
            /**
             * Limit value of rated field current (I<sub>FDLIM</sub>).
             *
             * Typical Value = 1.05.
             *
             */
            base.parse_element (/<cim:OverexcLim2.ifdlim>([\s\S]*?)<\/cim:OverexcLim2.ifdlim>/g, obj, "ifdlim", base.to_string, sub, context);

            /**
             * Gain Over excitation limiter (K<sub>OI</sub>).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:OverexcLim2.koi>([\s\S]*?)<\/cim:OverexcLim2.koi>/g, obj, "koi", base.to_string, sub, context);

            /**
             * Maximum error signal (V<sub>OIMAX</sub>).
             *
             * Typical Value = 0.
             *
             */
            base.parse_element (/<cim:OverexcLim2.voimax>([\s\S]*?)<\/cim:OverexcLim2.voimax>/g, obj, "voimax", base.to_string, sub, context);

            /**
             * Minimum error signal (V<sub>OIMIN</sub>).
             *
             * Typical Value = -9999.
             *
             */
            base.parse_element (/<cim:OverexcLim2.voimin>([\s\S]*?)<\/cim:OverexcLim2.voimin>/g, obj, "voimin", base.to_string, sub, context);

            bucket = context.parsed.OverexcLim2;
            if (null == bucket)
                context.parsed.OverexcLim2 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_OverexcLimX2: parse_OverexcLimX2,
                parse_OverexcLim2: parse_OverexcLim2,
                parse_OverexcitationLimiterDynamics: parse_OverexcitationLimiterDynamics,
                parse_OverexcLimX1: parse_OverexcLimX1,
                parse_OverexcLimIEEE: parse_OverexcLimIEEE
            }
        );
    }
);