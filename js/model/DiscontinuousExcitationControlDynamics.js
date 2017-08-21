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
            obj["td1"] = base.parse_element (/<cim:DiscExcContIEEEDEC2A.td1>([\s\S]*?)<\/cim:DiscExcContIEEEDEC2A.td1>/g, sub, context, true);
            /**
             * Discontinuous controller washout time constant (<i>T</i><i><sub>D2</sub></i>).
             *
             */
            obj["td2"] = base.parse_element (/<cim:DiscExcContIEEEDEC2A.td2>([\s\S]*?)<\/cim:DiscExcContIEEEDEC2A.td2>/g, sub, context, true);
            /**
             * Limiter (<i>V</i><i><sub>DMAX</sub></i>).
             *
             */
            obj["vdmax"] = base.parse_element (/<cim:DiscExcContIEEEDEC2A.vdmax>([\s\S]*?)<\/cim:DiscExcContIEEEDEC2A.vdmax>/g, sub, context, true);
            /**
             * Limiter (<i>V</i><i><sub>DMIN</sub></i>).
             *
             */
            obj["vdmin"] = base.parse_element (/<cim:DiscExcContIEEEDEC2A.vdmin>([\s\S]*?)<\/cim:DiscExcContIEEEDEC2A.vdmin>/g, sub, context, true);
            /**
             * Discontinuous controller input reference (<i>V</i><i><sub>K</sub></i>).
             *
             */
            obj["vk"] = base.parse_element (/<cim:DiscExcContIEEEDEC2A.vk>([\s\S]*?)<\/cim:DiscExcContIEEEDEC2A.vk>/g, sub, context, true);
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
            obj["esc"] = base.parse_element (/<cim:DiscExcContIEEEDEC1A.esc>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.esc>/g, sub, context, true);
            /**
             * Discontinuous controller gain (<i>K</i><i><sub>AN</sub></i>).
             *
             * Typical Value = 400.
             *
             */
            obj["kan"] = base.parse_element (/<cim:DiscExcContIEEEDEC1A.kan>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.kan>/g, sub, context, true);
            /**
             * Terminal voltage limiter gain (<i>K</i><i><sub>ETL</sub></i>).
             *
             * Typical Value = 47.
             *
             */
            obj["ketl"] = base.parse_element (/<cim:DiscExcContIEEEDEC1A.ketl>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.ketl>/g, sub, context, true);
            /**
             * Discontinuous controller time constant (<i>T</i><i><sub>AN</sub></i>).
             *
             * Typical Value = 0.08.
             *
             */
            obj["tan"] = base.parse_element (/<cim:DiscExcContIEEEDEC1A.tan>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.tan>/g, sub, context, true);
            /**
             * Time constant (<i>T</i><i><sub>D</sub></i>).
             *
             * Typical Value = 0.03.
             *
             */
            obj["td"] = base.parse_element (/<cim:DiscExcContIEEEDEC1A.td>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.td>/g, sub, context, true);
            /**
             * Time constant (<i>T</i><i><sub>L</sub></i><sub>1</sub>).
             *
             * Typical Value = 0.025.
             *
             */
            obj["tl1"] = base.parse_element (/<cim:DiscExcContIEEEDEC1A.tl1>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.tl1>/g, sub, context, true);
            /**
             * Time constant (<i>T</i><i><sub>L</sub></i><sub>2</sub>).
             *
             * Typical Value = 1.25.
             *
             */
            obj["tl2"] = base.parse_element (/<cim:DiscExcContIEEEDEC1A.tl2>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.tl2>/g, sub, context, true);
            /**
             * DEC washout time constant (<i>T</i><i><sub>W</sub></i><sub>5</sub>).
             *
             * Typical Value = 5.
             *
             */
            obj["tw5"] = base.parse_element (/<cim:DiscExcContIEEEDEC1A.tw5>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.tw5>/g, sub, context, true);
            /**
             * Regulator voltage reference (<i>V</i><i><sub>AL</sub></i>).
             *
             * Typical Value = 5.5.
             *
             */
            obj["val"] = base.parse_element (/<cim:DiscExcContIEEEDEC1A.val>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.val>/g, sub, context, true);
            /**
             * Limiter for Van (<i>V</i><i><sub>ANMAX</sub></i>).
             *
             */
            obj["vanmax"] = base.parse_element (/<cim:DiscExcContIEEEDEC1A.vanmax>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.vanmax>/g, sub, context, true);
            /**
             * Limiter (<i>V</i><i><sub>OMAX</sub></i>).
             *
             * Typical Value = 0.3.
             *
             */
            obj["vomax"] = base.parse_element (/<cim:DiscExcContIEEEDEC1A.vomax>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.vomax>/g, sub, context, true);
            /**
             * Limiter (<i>V</i><i><sub>OMIN</sub></i>).
             *
             * Typical Value = 0.1.
             *
             */
            obj["vomin"] = base.parse_element (/<cim:DiscExcContIEEEDEC1A.vomin>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.vomin>/g, sub, context, true);
            /**
             * Limiter (<i>V</i><i><sub>SMAX</sub></i>).
             *
             * Typical Value = 0.2.
             *
             */
            obj["vsmax"] = base.parse_element (/<cim:DiscExcContIEEEDEC1A.vsmax>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.vsmax>/g, sub, context, true);
            /**
             * Limiter (<i>V</i><i><sub>SMIN</sub></i>).
             *
             * Typical Value = -0.066.
             *
             */
            obj["vsmin"] = base.parse_element (/<cim:DiscExcContIEEEDEC1A.vsmin>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.vsmin>/g, sub, context, true);
            /**
             * Terminal voltage level reference (<i>V</i><i><sub>TC</sub></i>).
             *
             * Typical Value = 0.95.
             *
             */
            obj["vtc"] = base.parse_element (/<cim:DiscExcContIEEEDEC1A.vtc>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.vtc>/g, sub, context, true);
            /**
             * Voltage reference (<i>V</i><i><sub>TLMT</sub></i>).
             *
             * Typical Value = 1.1.
             *
             */
            obj["vtlmt"] = base.parse_element (/<cim:DiscExcContIEEEDEC1A.vtlmt>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.vtlmt>/g, sub, context, true);
            /**
             * Voltage limits (<i>V</i><i><sub>TM</sub></i>).
             *
             * Typical Value = 1.13.
             *
             */
            obj["vtm"] = base.parse_element (/<cim:DiscExcContIEEEDEC1A.vtm>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.vtm>/g, sub, context, true);
            /**
             * Voltage limits (<i>V</i><i><sub>TN</sub></i>).
             *
             * Typical Value = 1.12.
             *
             */
            obj["vtn"] = base.parse_element (/<cim:DiscExcContIEEEDEC1A.vtn>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.vtn>/g, sub, context, true);
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
            obj["tdr"] = base.parse_element (/<cim:DiscExcContIEEEDEC3A.tdr>([\s\S]*?)<\/cim:DiscExcContIEEEDEC3A.tdr>/g, sub, context, true);
            /**
             * Terminal undervoltage comparison level (<i>V</i><i><sub>TMIN</sub></i>).
             *
             */
            obj["vtmin"] = base.parse_element (/<cim:DiscExcContIEEEDEC3A.vtmin>([\s\S]*?)<\/cim:DiscExcContIEEEDEC3A.vtmin>/g, sub, context, true);
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
            obj["ExcitationSystemDynamics"] = base.parse_attribute (/<cim:DiscontinuousExcitationControlDynamics.ExcitationSystemDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Remote input signal used by this discontinuous excitation control system model.
             *
             */
            obj["RemoteInputSignal"] = base.parse_attribute (/<cim:DiscontinuousExcitationControlDynamics.RemoteInputSignal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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