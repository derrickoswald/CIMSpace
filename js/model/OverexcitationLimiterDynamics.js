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
            obj["hyst"] = base.parse_element (/<cim:OverexcLimIEEE.hyst>([\s\S]*?)<\/cim:OverexcLimIEEE.hyst>/g, sub, context, true);
            /**
             * OEL timed field current limit (I<sub>FDLIM</sub>).
             *
             * Typical Value = 1.05.
             *
             */
            obj["ifdlim"] = base.parse_element (/<cim:OverexcLimIEEE.ifdlim>([\s\S]*?)<\/cim:OverexcLimIEEE.ifdlim>/g, sub, context, true);
            /**
             * OEL instantaneous field current limit (I<sub>FDMAX</sub>).
             *
             * Typical Value = 1.5.
             *
             */
            obj["ifdmax"] = base.parse_element (/<cim:OverexcLimIEEE.ifdmax>([\s\S]*?)<\/cim:OverexcLimIEEE.ifdmax>/g, sub, context, true);
            /**
             * OEL timed field current limiter pickup level (I<sub>TFPU</sub>).
             *
             * Typical Value = 1.05.
             *
             */
            obj["itfpu"] = base.parse_element (/<cim:OverexcLimIEEE.itfpu>([\s\S]*?)<\/cim:OverexcLimIEEE.itfpu>/g, sub, context, true);
            /**
             * OEL cooldown gain (K<sub>CD</sub>).
             *
             * Typical Value = 1.
             *
             */
            obj["kcd"] = base.parse_element (/<cim:OverexcLimIEEE.kcd>([\s\S]*?)<\/cim:OverexcLimIEEE.kcd>/g, sub, context, true);
            /**
             * OEL ramped limit rate (K<sub>RAMP</sub>).
             *
             * Unit = PU/sec.  Typical Value = 10.
             *
             */
            obj["kramp"] = base.to_float (base.parse_element (/<cim:OverexcLimIEEE.kramp>([\s\S]*?)<\/cim:OverexcLimIEEE.kramp>/g, sub, context, true));
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
            obj["efd1"] = base.parse_element (/<cim:OverexcLimX1.efd1>([\s\S]*?)<\/cim:OverexcLimX1.efd1>/g, sub, context, true);
            /**
             * Mid voltage point on the inverse time characteristic (EFD<sub>2</sub>).
             *
             * Typical Value = 1.2.
             *
             */
            obj["efd2"] = base.parse_element (/<cim:OverexcLimX1.efd2>([\s\S]*?)<\/cim:OverexcLimX1.efd2>/g, sub, context, true);
            /**
             * High voltage point on the inverse time characteristic (EFD<sub>3</sub>).
             *
             * Typical Value = 1.5.
             *
             */
            obj["efd3"] = base.parse_element (/<cim:OverexcLimX1.efd3>([\s\S]*?)<\/cim:OverexcLimX1.efd3>/g, sub, context, true);
            /**
             * Desired field voltage (EFD<sub>DES</sub>).
             *
             * Typical Value = 0.9.
             *
             */
            obj["efddes"] = base.parse_element (/<cim:OverexcLimX1.efddes>([\s\S]*?)<\/cim:OverexcLimX1.efddes>/g, sub, context, true);
            /**
             * Rated field voltage (EFD<sub>RATED</sub>).
             *
             * Typical Value = 1.05.
             *
             */
            obj["efdrated"] = base.parse_element (/<cim:OverexcLimX1.efdrated>([\s\S]*?)<\/cim:OverexcLimX1.efdrated>/g, sub, context, true);
            /**
             * Gain (K<sub>MX</sub>).
             *
             * Typical Value = 0.01.
             *
             */
            obj["kmx"] = base.parse_element (/<cim:OverexcLimX1.kmx>([\s\S]*?)<\/cim:OverexcLimX1.kmx>/g, sub, context, true);
            /**
             * Time to trip the exciter at the low voltage point on the inverse time characteristic (TIME<sub>1</sub>).
             *
             * Typical Value = 120.
             *
             */
            obj["t1"] = base.parse_element (/<cim:OverexcLimX1.t1>([\s\S]*?)<\/cim:OverexcLimX1.t1>/g, sub, context, true);
            /**
             * Time to trip the exciter at the mid voltage point on the inverse time characteristic (TIME<sub>2</sub>).
             *
             * Typical Value = 40.
             *
             */
            obj["t2"] = base.parse_element (/<cim:OverexcLimX1.t2>([\s\S]*?)<\/cim:OverexcLimX1.t2>/g, sub, context, true);
            /**
             * Time to trip the exciter at the high voltage point on the inverse time characteristic (TIME<sub>3</sub>).
             *
             * Typical Value = 15.
             *
             */
            obj["t3"] = base.parse_element (/<cim:OverexcLimX1.t3>([\s\S]*?)<\/cim:OverexcLimX1.t3>/g, sub, context, true);
            /**
             * Low voltage limit (V<sub>LOW</sub>) (&gt;0).
             *
             */
            obj["vlow"] = base.parse_element (/<cim:OverexcLimX1.vlow>([\s\S]*?)<\/cim:OverexcLimX1.vlow>/g, sub, context, true);
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
            obj["efd1"] = base.parse_element (/<cim:OverexcLimX2.efd1>([\s\S]*?)<\/cim:OverexcLimX2.efd1>/g, sub, context, true);
            /**
             * Mid voltage or current point on the inverse time characteristic (EFD<sub>2</sub>).
             *
             * Typical Value = 1.2.
             *
             */
            obj["efd2"] = base.parse_element (/<cim:OverexcLimX2.efd2>([\s\S]*?)<\/cim:OverexcLimX2.efd2>/g, sub, context, true);
            /**
             * High voltage or current point on the inverse time characteristic (EFD<sub>3</sub>).
             *
             * Typical Value = 1.5.
             *
             */
            obj["efd3"] = base.parse_element (/<cim:OverexcLimX2.efd3>([\s\S]*?)<\/cim:OverexcLimX2.efd3>/g, sub, context, true);
            /**
             * Desired field voltage if m=F or field current if m=T (EFD<sub>DES</sub>).
             *
             * Typical Value = 1.
             *
             */
            obj["efddes"] = base.parse_element (/<cim:OverexcLimX2.efddes>([\s\S]*?)<\/cim:OverexcLimX2.efddes>/g, sub, context, true);
            /**
             * Rated field voltage if m=F or field current if m=T (EFD<sub>RATED</sub>).
             *
             * Typical Value = 1.05.
             *
             */
            obj["efdrated"] = base.parse_element (/<cim:OverexcLimX2.efdrated>([\s\S]*?)<\/cim:OverexcLimX2.efdrated>/g, sub, context, true);
            /**
             * Gain (K<sub>MX</sub>).
             *
             * Typical Value = 0.002.
             *
             */
            obj["kmx"] = base.parse_element (/<cim:OverexcLimX2.kmx>([\s\S]*?)<\/cim:OverexcLimX2.kmx>/g, sub, context, true);
            /**
             * (m).
             * true = IFD limiting
             *
             * false = EFD limiting.
             *
             */
            obj["m"] = base.to_boolean (base.parse_element (/<cim:OverexcLimX2.m>([\s\S]*?)<\/cim:OverexcLimX2.m>/g, sub, context, true));
            /**
             * Time to trip the exciter at the low voltage or current point on the inverse time characteristic (TIME<sub>1</sub>).
             *
             * Typical Value = 120.
             *
             */
            obj["t1"] = base.parse_element (/<cim:OverexcLimX2.t1>([\s\S]*?)<\/cim:OverexcLimX2.t1>/g, sub, context, true);
            /**
             * Time to trip the exciter at the mid voltage or current point on the inverse time characteristic (TIME<sub>2</sub>).
             *
             * Typical Value = 40.
             *
             */
            obj["t2"] = base.parse_element (/<cim:OverexcLimX2.t2>([\s\S]*?)<\/cim:OverexcLimX2.t2>/g, sub, context, true);
            /**
             * Time to trip the exciter at the high voltage or current point on the inverse time characteristic (TIME<sub>3</sub>).
             *
             * Typical Value = 15.
             *
             */
            obj["t3"] = base.parse_element (/<cim:OverexcLimX2.t3>([\s\S]*?)<\/cim:OverexcLimX2.t3>/g, sub, context, true);
            /**
             * Low voltage limit (V<sub>LOW</sub>) (&gt;0).
             *
             */
            obj["vlow"] = base.parse_element (/<cim:OverexcLimX2.vlow>([\s\S]*?)<\/cim:OverexcLimX2.vlow>/g, sub, context, true);
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
            obj["ExcitationSystemDynamics"] = base.parse_attribute (/<cim:OverexcitationLimiterDynamics.ExcitationSystemDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["ifdlim"] = base.parse_element (/<cim:OverexcLim2.ifdlim>([\s\S]*?)<\/cim:OverexcLim2.ifdlim>/g, sub, context, true);
            /**
             * Gain Over excitation limiter (K<sub>OI</sub>).
             *
             * Typical Value = 0.1.
             *
             */
            obj["koi"] = base.parse_element (/<cim:OverexcLim2.koi>([\s\S]*?)<\/cim:OverexcLim2.koi>/g, sub, context, true);
            /**
             * Maximum error signal (V<sub>OIMAX</sub>).
             *
             * Typical Value = 0.
             *
             */
            obj["voimax"] = base.parse_element (/<cim:OverexcLim2.voimax>([\s\S]*?)<\/cim:OverexcLim2.voimax>/g, sub, context, true);
            /**
             * Minimum error signal (V<sub>OIMIN</sub>).
             *
             * Typical Value = -9999.
             *
             */
            obj["voimin"] = base.parse_element (/<cim:OverexcLim2.voimin>([\s\S]*?)<\/cim:OverexcLim2.voimin>/g, sub, context, true);
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