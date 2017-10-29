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
            base.parse_element (/<cim:OverexcLimIEEE.hyst>([\s\S]*?)<\/cim:OverexcLimIEEE.hyst>/g, obj, "hyst", base.to_string, sub, context);
            base.parse_element (/<cim:OverexcLimIEEE.ifdlim>([\s\S]*?)<\/cim:OverexcLimIEEE.ifdlim>/g, obj, "ifdlim", base.to_string, sub, context);
            base.parse_element (/<cim:OverexcLimIEEE.ifdmax>([\s\S]*?)<\/cim:OverexcLimIEEE.ifdmax>/g, obj, "ifdmax", base.to_string, sub, context);
            base.parse_element (/<cim:OverexcLimIEEE.itfpu>([\s\S]*?)<\/cim:OverexcLimIEEE.itfpu>/g, obj, "itfpu", base.to_string, sub, context);
            base.parse_element (/<cim:OverexcLimIEEE.kcd>([\s\S]*?)<\/cim:OverexcLimIEEE.kcd>/g, obj, "kcd", base.to_string, sub, context);
            base.parse_element (/<cim:OverexcLimIEEE.kramp>([\s\S]*?)<\/cim:OverexcLimIEEE.kramp>/g, obj, "kramp", base.to_float, sub, context);
            bucket = context.parsed.OverexcLimIEEE;
            if (null == bucket)
                context.parsed.OverexcLimIEEE = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OverexcLimIEEE (obj, exporters, full)
        {
            var fields = exporters["OverexcitationLimiterDynamics"](obj, exporters, false);

            base.export_element (obj, "OverexcLimIEEE", "hyst", base.from_string, fields);
            base.export_element (obj, "OverexcLimIEEE", "ifdlim", base.from_string, fields);
            base.export_element (obj, "OverexcLimIEEE", "ifdmax", base.from_string, fields);
            base.export_element (obj, "OverexcLimIEEE", "itfpu", base.from_string, fields);
            base.export_element (obj, "OverexcLimIEEE", "kcd", base.from_string, fields);
            base.export_element (obj, "OverexcLimIEEE", "kramp", base.from_float, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:OverexcLimX1.efd1>([\s\S]*?)<\/cim:OverexcLimX1.efd1>/g, obj, "efd1", base.to_string, sub, context);
            base.parse_element (/<cim:OverexcLimX1.efd2>([\s\S]*?)<\/cim:OverexcLimX1.efd2>/g, obj, "efd2", base.to_string, sub, context);
            base.parse_element (/<cim:OverexcLimX1.efd3>([\s\S]*?)<\/cim:OverexcLimX1.efd3>/g, obj, "efd3", base.to_string, sub, context);
            base.parse_element (/<cim:OverexcLimX1.efddes>([\s\S]*?)<\/cim:OverexcLimX1.efddes>/g, obj, "efddes", base.to_string, sub, context);
            base.parse_element (/<cim:OverexcLimX1.efdrated>([\s\S]*?)<\/cim:OverexcLimX1.efdrated>/g, obj, "efdrated", base.to_string, sub, context);
            base.parse_element (/<cim:OverexcLimX1.kmx>([\s\S]*?)<\/cim:OverexcLimX1.kmx>/g, obj, "kmx", base.to_string, sub, context);
            base.parse_element (/<cim:OverexcLimX1.t1>([\s\S]*?)<\/cim:OverexcLimX1.t1>/g, obj, "t1", base.to_string, sub, context);
            base.parse_element (/<cim:OverexcLimX1.t2>([\s\S]*?)<\/cim:OverexcLimX1.t2>/g, obj, "t2", base.to_string, sub, context);
            base.parse_element (/<cim:OverexcLimX1.t3>([\s\S]*?)<\/cim:OverexcLimX1.t3>/g, obj, "t3", base.to_string, sub, context);
            base.parse_element (/<cim:OverexcLimX1.vlow>([\s\S]*?)<\/cim:OverexcLimX1.vlow>/g, obj, "vlow", base.to_string, sub, context);
            bucket = context.parsed.OverexcLimX1;
            if (null == bucket)
                context.parsed.OverexcLimX1 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OverexcLimX1 (obj, exporters, full)
        {
            var fields = exporters["OverexcitationLimiterDynamics"](obj, exporters, false);

            base.export_element (obj, "OverexcLimX1", "efd1", base.from_string, fields);
            base.export_element (obj, "OverexcLimX1", "efd2", base.from_string, fields);
            base.export_element (obj, "OverexcLimX1", "efd3", base.from_string, fields);
            base.export_element (obj, "OverexcLimX1", "efddes", base.from_string, fields);
            base.export_element (obj, "OverexcLimX1", "efdrated", base.from_string, fields);
            base.export_element (obj, "OverexcLimX1", "kmx", base.from_string, fields);
            base.export_element (obj, "OverexcLimX1", "t1", base.from_string, fields);
            base.export_element (obj, "OverexcLimX1", "t2", base.from_string, fields);
            base.export_element (obj, "OverexcLimX1", "t3", base.from_string, fields);
            base.export_element (obj, "OverexcLimX1", "vlow", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:OverexcLimX2.efd1>([\s\S]*?)<\/cim:OverexcLimX2.efd1>/g, obj, "efd1", base.to_string, sub, context);
            base.parse_element (/<cim:OverexcLimX2.efd2>([\s\S]*?)<\/cim:OverexcLimX2.efd2>/g, obj, "efd2", base.to_string, sub, context);
            base.parse_element (/<cim:OverexcLimX2.efd3>([\s\S]*?)<\/cim:OverexcLimX2.efd3>/g, obj, "efd3", base.to_string, sub, context);
            base.parse_element (/<cim:OverexcLimX2.efddes>([\s\S]*?)<\/cim:OverexcLimX2.efddes>/g, obj, "efddes", base.to_string, sub, context);
            base.parse_element (/<cim:OverexcLimX2.efdrated>([\s\S]*?)<\/cim:OverexcLimX2.efdrated>/g, obj, "efdrated", base.to_string, sub, context);
            base.parse_element (/<cim:OverexcLimX2.kmx>([\s\S]*?)<\/cim:OverexcLimX2.kmx>/g, obj, "kmx", base.to_string, sub, context);
            base.parse_element (/<cim:OverexcLimX2.m>([\s\S]*?)<\/cim:OverexcLimX2.m>/g, obj, "m", base.to_boolean, sub, context);
            base.parse_element (/<cim:OverexcLimX2.t1>([\s\S]*?)<\/cim:OverexcLimX2.t1>/g, obj, "t1", base.to_string, sub, context);
            base.parse_element (/<cim:OverexcLimX2.t2>([\s\S]*?)<\/cim:OverexcLimX2.t2>/g, obj, "t2", base.to_string, sub, context);
            base.parse_element (/<cim:OverexcLimX2.t3>([\s\S]*?)<\/cim:OverexcLimX2.t3>/g, obj, "t3", base.to_string, sub, context);
            base.parse_element (/<cim:OverexcLimX2.vlow>([\s\S]*?)<\/cim:OverexcLimX2.vlow>/g, obj, "vlow", base.to_string, sub, context);
            bucket = context.parsed.OverexcLimX2;
            if (null == bucket)
                context.parsed.OverexcLimX2 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OverexcLimX2 (obj, exporters, full)
        {
            var fields = exporters["OverexcitationLimiterDynamics"](obj, exporters, false);

            base.export_element (obj, "OverexcLimX2", "efd1", base.from_string, fields);
            base.export_element (obj, "OverexcLimX2", "efd2", base.from_string, fields);
            base.export_element (obj, "OverexcLimX2", "efd3", base.from_string, fields);
            base.export_element (obj, "OverexcLimX2", "efddes", base.from_string, fields);
            base.export_element (obj, "OverexcLimX2", "efdrated", base.from_string, fields);
            base.export_element (obj, "OverexcLimX2", "kmx", base.from_string, fields);
            base.export_element (obj, "OverexcLimX2", "m", base.from_boolean, fields);
            base.export_element (obj, "OverexcLimX2", "t1", base.from_string, fields);
            base.export_element (obj, "OverexcLimX2", "t2", base.from_string, fields);
            base.export_element (obj, "OverexcLimX2", "t3", base.from_string, fields);
            base.export_element (obj, "OverexcLimX2", "vlow", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_attribute (/<cim:OverexcitationLimiterDynamics.ExcitationSystemDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExcitationSystemDynamics", sub, context);
            bucket = context.parsed.OverexcitationLimiterDynamics;
            if (null == bucket)
                context.parsed.OverexcitationLimiterDynamics = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OverexcitationLimiterDynamics (obj, exporters, full)
        {
            var fields = exporters["DynamicsFunctionBlock"](obj, exporters, false);

            base.export_attribute (obj, "OverexcitationLimiterDynamics", "ExcitationSystemDynamics", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:OverexcLim2.ifdlim>([\s\S]*?)<\/cim:OverexcLim2.ifdlim>/g, obj, "ifdlim", base.to_string, sub, context);
            base.parse_element (/<cim:OverexcLim2.koi>([\s\S]*?)<\/cim:OverexcLim2.koi>/g, obj, "koi", base.to_string, sub, context);
            base.parse_element (/<cim:OverexcLim2.voimax>([\s\S]*?)<\/cim:OverexcLim2.voimax>/g, obj, "voimax", base.to_string, sub, context);
            base.parse_element (/<cim:OverexcLim2.voimin>([\s\S]*?)<\/cim:OverexcLim2.voimin>/g, obj, "voimin", base.to_string, sub, context);
            bucket = context.parsed.OverexcLim2;
            if (null == bucket)
                context.parsed.OverexcLim2 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OverexcLim2 (obj, exporters, full)
        {
            var fields = exporters["OverexcitationLimiterDynamics"](obj, exporters, false);

            base.export_element (obj, "OverexcLim2", "ifdlim", base.from_string, fields);
            base.export_element (obj, "OverexcLim2", "koi", base.from_string, fields);
            base.export_element (obj, "OverexcLim2", "voimax", base.from_string, fields);
            base.export_element (obj, "OverexcLim2", "voimin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                export_OverexcLimIEEE: export_OverexcLimIEEE,
                parse_OverexcLimX2: parse_OverexcLimX2,
                export_OverexcLimX2: export_OverexcLimX2,
                parse_OverexcLim2: parse_OverexcLim2,
                export_OverexcLim2: export_OverexcLim2,
                parse_OverexcitationLimiterDynamics: parse_OverexcitationLimiterDynamics,
                parse_OverexcLimX1: parse_OverexcLimX1,
                export_OverexcitationLimiterDynamics: export_OverexcitationLimiterDynamics,
                parse_OverexcLimIEEE: parse_OverexcLimIEEE,
                export_OverexcLimX1: export_OverexcLimX1
            }
        );
    }
);