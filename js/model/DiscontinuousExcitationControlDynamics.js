define
(
    ["model/base", "model/StandardModels"],
    /**
     * <font colour="#0f0f0f">In some particular system configurations, continuous excitation control with terminal voltage and power system stabilizing regulator input signals does not ensure that the potential of the excitation system for improving system stability is fully exploited.
     *
     * For these situations, discontinuous excitation control signals may be employed to enhance stability following large transient disturbances.</font>
     *
     */
    function (base, StandardModels)
    {

        /**
         * The class represents IEEE Type DEC2A model for the discontinuous excitation control.
         *
         * This system provides transient excitation boosting via an open-loop control as initiated by a trigger signal generated remotely.
         *
         */
        function parse_DiscExcContIEEEDEC2A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_DiscontinuousExcitationControlDynamics (context, sub);
            obj.cls = "DiscExcContIEEEDEC2A";
            /**
             * Discontinuous controller time constant (<i>T</i><i><sub>D1</sub></i>).
             *
             */
            base.parse_element (/<cim:DiscExcContIEEEDEC2A.td1>([\s\S]*?)<\/cim:DiscExcContIEEEDEC2A.td1>/g, obj, "td1", base.to_string, sub, context);

            /**
             * Discontinuous controller washout time constant (<i>T</i><i><sub>D2</sub></i>).
             *
             */
            base.parse_element (/<cim:DiscExcContIEEEDEC2A.td2>([\s\S]*?)<\/cim:DiscExcContIEEEDEC2A.td2>/g, obj, "td2", base.to_string, sub, context);

            /**
             * Limiter (<i>V</i><i><sub>DMAX</sub></i>).
             *
             */
            base.parse_element (/<cim:DiscExcContIEEEDEC2A.vdmax>([\s\S]*?)<\/cim:DiscExcContIEEEDEC2A.vdmax>/g, obj, "vdmax", base.to_string, sub, context);

            /**
             * Limiter (<i>V</i><i><sub>DMIN</sub></i>).
             *
             */
            base.parse_element (/<cim:DiscExcContIEEEDEC2A.vdmin>([\s\S]*?)<\/cim:DiscExcContIEEEDEC2A.vdmin>/g, obj, "vdmin", base.to_string, sub, context);

            /**
             * Discontinuous controller input reference (<i>V</i><i><sub>K</sub></i>).
             *
             */
            base.parse_element (/<cim:DiscExcContIEEEDEC2A.vk>([\s\S]*?)<\/cim:DiscExcContIEEEDEC2A.vk>/g, obj, "vk", base.to_string, sub, context);

            bucket = context.parsed.DiscExcContIEEEDEC2A;
            if (null == bucket)
                context.parsed.DiscExcContIEEEDEC2A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class represents IEEE Type DEC1A discontinuous excitation control model that boosts generator excitation to a level higher than that demanded by the voltage regulator and stabilizer immediately following a system fault.
         *
         * Reference: IEEE Standard 421.5-2005 Section 12.2.
         *
         */
        function parse_DiscExcContIEEEDEC1A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_DiscontinuousExcitationControlDynamics (context, sub);
            obj.cls = "DiscExcContIEEEDEC1A";
            /**
             * Speed change reference (<i>E</i><i><sub>SC</sub></i>).
             *
             * Typical Value = 0.0015.
             *
             */
            base.parse_element (/<cim:DiscExcContIEEEDEC1A.esc>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.esc>/g, obj, "esc", base.to_string, sub, context);

            /**
             * Discontinuous controller gain (<i>K</i><i><sub>AN</sub></i>).
             *
             * Typical Value = 400.
             *
             */
            base.parse_element (/<cim:DiscExcContIEEEDEC1A.kan>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.kan>/g, obj, "kan", base.to_string, sub, context);

            /**
             * Terminal voltage limiter gain (<i>K</i><i><sub>ETL</sub></i>).
             *
             * Typical Value = 47.
             *
             */
            base.parse_element (/<cim:DiscExcContIEEEDEC1A.ketl>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.ketl>/g, obj, "ketl", base.to_string, sub, context);

            /**
             * Discontinuous controller time constant (<i>T</i><i><sub>AN</sub></i>).
             *
             * Typical Value = 0.08.
             *
             */
            base.parse_element (/<cim:DiscExcContIEEEDEC1A.tan>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.tan>/g, obj, "tan", base.to_string, sub, context);

            /**
             * Time constant (<i>T</i><i><sub>D</sub></i>).
             *
             * Typical Value = 0.03.
             *
             */
            base.parse_element (/<cim:DiscExcContIEEEDEC1A.td>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.td>/g, obj, "td", base.to_string, sub, context);

            /**
             * Time constant (<i>T</i><i><sub>L</sub></i><sub>1</sub>).
             *
             * Typical Value = 0.025.
             *
             */
            base.parse_element (/<cim:DiscExcContIEEEDEC1A.tl1>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.tl1>/g, obj, "tl1", base.to_string, sub, context);

            /**
             * Time constant (<i>T</i><i><sub>L</sub></i><sub>2</sub>).
             *
             * Typical Value = 1.25.
             *
             */
            base.parse_element (/<cim:DiscExcContIEEEDEC1A.tl2>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.tl2>/g, obj, "tl2", base.to_string, sub, context);

            /**
             * DEC washout time constant (<i>T</i><i><sub>W</sub></i><sub>5</sub>).
             *
             * Typical Value = 5.
             *
             */
            base.parse_element (/<cim:DiscExcContIEEEDEC1A.tw5>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.tw5>/g, obj, "tw5", base.to_string, sub, context);

            /**
             * Regulator voltage reference (<i>V</i><i><sub>AL</sub></i>).
             *
             * Typical Value = 5.5.
             *
             */
            base.parse_element (/<cim:DiscExcContIEEEDEC1A.val>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.val>/g, obj, "val", base.to_string, sub, context);

            /**
             * Limiter for Van (<i>V</i><i><sub>ANMAX</sub></i>).
             *
             */
            base.parse_element (/<cim:DiscExcContIEEEDEC1A.vanmax>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.vanmax>/g, obj, "vanmax", base.to_string, sub, context);

            /**
             * Limiter (<i>V</i><i><sub>OMAX</sub></i>).
             *
             * Typical Value = 0.3.
             *
             */
            base.parse_element (/<cim:DiscExcContIEEEDEC1A.vomax>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.vomax>/g, obj, "vomax", base.to_string, sub, context);

            /**
             * Limiter (<i>V</i><i><sub>OMIN</sub></i>).
             *
             * Typical Value = 0.1.
             *
             */
            base.parse_element (/<cim:DiscExcContIEEEDEC1A.vomin>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.vomin>/g, obj, "vomin", base.to_string, sub, context);

            /**
             * Limiter (<i>V</i><i><sub>SMAX</sub></i>).
             *
             * Typical Value = 0.2.
             *
             */
            base.parse_element (/<cim:DiscExcContIEEEDEC1A.vsmax>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.vsmax>/g, obj, "vsmax", base.to_string, sub, context);

            /**
             * Limiter (<i>V</i><i><sub>SMIN</sub></i>).
             *
             * Typical Value = -0.066.
             *
             */
            base.parse_element (/<cim:DiscExcContIEEEDEC1A.vsmin>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.vsmin>/g, obj, "vsmin", base.to_string, sub, context);

            /**
             * Terminal voltage level reference (<i>V</i><i><sub>TC</sub></i>).
             *
             * Typical Value = 0.95.
             *
             */
            base.parse_element (/<cim:DiscExcContIEEEDEC1A.vtc>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.vtc>/g, obj, "vtc", base.to_string, sub, context);

            /**
             * Voltage reference (<i>V</i><i><sub>TLMT</sub></i>).
             *
             * Typical Value = 1.1.
             *
             */
            base.parse_element (/<cim:DiscExcContIEEEDEC1A.vtlmt>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.vtlmt>/g, obj, "vtlmt", base.to_string, sub, context);

            /**
             * Voltage limits (<i>V</i><i><sub>TM</sub></i>).
             *
             * Typical Value = 1.13.
             *
             */
            base.parse_element (/<cim:DiscExcContIEEEDEC1A.vtm>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.vtm>/g, obj, "vtm", base.to_string, sub, context);

            /**
             * Voltage limits (<i>V</i><i><sub>TN</sub></i>).
             *
             * Typical Value = 1.12.
             *
             */
            base.parse_element (/<cim:DiscExcContIEEEDEC1A.vtn>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.vtn>/g, obj, "vtn", base.to_string, sub, context);

            bucket = context.parsed.DiscExcContIEEEDEC1A;
            if (null == bucket)
                context.parsed.DiscExcContIEEEDEC1A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class represents IEEE Type DEC3A model.
         *
         * In some systems, the stabilizer output is disconnected from the regulator immediately following a severe fault to prevent the stabilizer from competing with action of voltage regulator during the first swing.
         *
         */
        function parse_DiscExcContIEEEDEC3A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_DiscontinuousExcitationControlDynamics (context, sub);
            obj.cls = "DiscExcContIEEEDEC3A";
            /**
             * Reset time delay (<i>T</i><i><sub>DR</sub></i>).
             *
             */
            base.parse_element (/<cim:DiscExcContIEEEDEC3A.tdr>([\s\S]*?)<\/cim:DiscExcContIEEEDEC3A.tdr>/g, obj, "tdr", base.to_string, sub, context);

            /**
             * Terminal undervoltage comparison level (<i>V</i><i><sub>TMIN</sub></i>).
             *
             */
            base.parse_element (/<cim:DiscExcContIEEEDEC3A.vtmin>([\s\S]*?)<\/cim:DiscExcContIEEEDEC3A.vtmin>/g, obj, "vtmin", base.to_string, sub, context);

            bucket = context.parsed.DiscExcContIEEEDEC3A;
            if (null == bucket)
                context.parsed.DiscExcContIEEEDEC3A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Discontinuous excitation control function block whose behaviour is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model</font>.
         *
         */
        function parse_DiscontinuousExcitationControlDynamics (context, sub)
        {
            var obj;
            var bucket;

            obj = StandardModels.parse_DynamicsFunctionBlock (context, sub);
            obj.cls = "DiscontinuousExcitationControlDynamics";
            /**
             * Excitation system model with which this discontinuous excitation control model is associated.
             *
             */
            base.parse_attribute (/<cim:DiscontinuousExcitationControlDynamics.ExcitationSystemDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExcitationSystemDynamics", sub, context, true);

            /**
             * Remote input signal used by this discontinuous excitation control system model.
             *
             */
            base.parse_attribute (/<cim:DiscontinuousExcitationControlDynamics.RemoteInputSignal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemoteInputSignal", sub, context, true);

            bucket = context.parsed.DiscontinuousExcitationControlDynamics;
            if (null == bucket)
                context.parsed.DiscontinuousExcitationControlDynamics = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_DiscExcContIEEEDEC2A: parse_DiscExcContIEEEDEC2A,
                parse_DiscontinuousExcitationControlDynamics: parse_DiscontinuousExcitationControlDynamics,
                parse_DiscExcContIEEEDEC3A: parse_DiscExcContIEEEDEC3A,
                parse_DiscExcContIEEEDEC1A: parse_DiscExcContIEEEDEC1A
            }
        );
    }
);