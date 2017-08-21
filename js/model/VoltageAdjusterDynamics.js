define
(
    ["model/base", "model/StandardModels"],
    /**
     * <font color="#0f0f0f">A voltage adjuster is a reference adjuster that uses inputs from a reactive power or power factor controller to modify the voltage regulator set point to maintain the synchronous machine steady-state power factor or reactive power at a predetermined value. </font>
     *
     * <font color="#0f0f0f">For additional information please refer to IEEE Standard 421.5-2005, Section 11.</font>
     *
     */
    function (base, StandardModels)
    {

        /**
         * The class represents IEEE Voltage Adjuster which is used to represent the voltage adjuster in either a power factor or var control system.
         *
         * Reference: IEEE Standard 421.5-2005 Section 11.1.
         *
         */
        function parse_VAdjIEEE (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_VoltageAdjusterDynamics (context, sub);
            obj.cls = "VAdjIEEE";
            /**
             * Rate at which output of adjuster changes (<i>ADJ_SLEW</i>).
             *
             * Unit = sec./PU.  Typical Value = 300.
             *
             */
            obj["adjslew"] = base.to_float (base.parse_element (/<cim:VAdjIEEE.adjslew>([\s\S]*?)<\/cim:VAdjIEEE.adjslew>/g, sub, context, true));
            /**
             * Time that adjuster pulses are off (<i>T</i><i><sub>AOFF</sub></i>).
             *
             * Typical Value = 0.5.
             *
             */
            obj["taoff"] = base.parse_element (/<cim:VAdjIEEE.taoff>([\s\S]*?)<\/cim:VAdjIEEE.taoff>/g, sub, context, true);
            /**
             * Time that adjuster pulses are on (<i>T</i><i><sub>AON</sub></i>).
             *
             * Typical Value = 0.1.
             *
             */
            obj["taon"] = base.parse_element (/<cim:VAdjIEEE.taon>([\s\S]*?)<\/cim:VAdjIEEE.taon>/g, sub, context, true);
            /**
             * Set high to provide a continuous raise or lower (<i>V</i><i><sub>ADJF</sub></i>).
             *
             */
            obj["vadjf"] = base.to_float (base.parse_element (/<cim:VAdjIEEE.vadjf>([\s\S]*?)<\/cim:VAdjIEEE.vadjf>/g, sub, context, true));
            /**
             * Maximum output of the adjuster (<i>V</i><i><sub>ADJMAX</sub></i>).
             *
             * Typical Value = 1.1.
             *
             */
            obj["vadjmax"] = base.parse_element (/<cim:VAdjIEEE.vadjmax>([\s\S]*?)<\/cim:VAdjIEEE.vadjmax>/g, sub, context, true);
            /**
             * Minimum output of the adjuster (<i>V</i><i><sub>ADJMIN</sub></i>).
             *
             * Typical Value = 0.9.
             *
             */
            obj["vadjmin"] = base.parse_element (/<cim:VAdjIEEE.vadjmin>([\s\S]*?)<\/cim:VAdjIEEE.vadjmin>/g, sub, context, true);
            bucket = context.parsed.VAdjIEEE;
            if (null == bucket)
                context.parsed.VAdjIEEE = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Voltage adjuster function block whose behaviour is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         *
         */
        function parse_VoltageAdjusterDynamics (context, sub)
        {
            var obj;
            var bucket;

            obj = StandardModels.parse_DynamicsFunctionBlock (context, sub);
            obj.cls = "VoltageAdjusterDynamics";
            /**
             * Power Factor or VAr controller Type I model with which this voltage adjuster is associated.
             *
             */
            obj["PFVArControllerType1Dynamics"] = base.parse_attribute (/<cim:VoltageAdjusterDynamics.PFVArControllerType1Dynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.VoltageAdjusterDynamics;
            if (null == bucket)
                context.parsed.VoltageAdjusterDynamics = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_VAdjIEEE: parse_VAdjIEEE,
                parse_VoltageAdjusterDynamics: parse_VoltageAdjusterDynamics
            }
        );
    }
);