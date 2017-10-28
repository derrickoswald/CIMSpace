define
(
    ["model/base", "model/Core", "model/StandardModels"],
    /**
     * <font color="#0f0f0f">Synchronous machine terminal voltage transducer and current compensator models</font> adjust the terminal voltage feedback to the excitation system by adding a quantity that is proportional to the terminal current of the generator.
     *
     * It is linked to a specific generator (synchronous machine).
     *
     */
    function (base, Core, StandardModels)
    {

        /**
         * <font color="#0f0f0f">The class represents the terminal voltage transducer and the load compensator as defined in the IEEE Std 421.5-2005, Section 4.
         *
         * This model is common to all excitation system models described in the IEEE Standard. </font>
         *
         */
        function parse_VCompIEEEType1 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_VoltageCompensatorDynamics (context, sub);
            obj.cls = "VCompIEEEType1";
            /**
             * <font color="#0f0f0f">Resistive component of compensation of a generator (Rc).</font>
             *
             */
            base.parse_element (/<cim:VCompIEEEType1.rc>([\s\S]*?)<\/cim:VCompIEEEType1.rc>/g, obj, "rc", base.to_string, sub, context);

            /**
             * <font color="#0f0f0f">Time constant which is used for the combined voltage sensing and compensation signal (Tr).</font>
             *
             */
            base.parse_element (/<cim:VCompIEEEType1.tr>([\s\S]*?)<\/cim:VCompIEEEType1.tr>/g, obj, "tr", base.to_string, sub, context);

            /**
             * <font color="#0f0f0f">Reactive component of compensation of a generator (Xc).</font>
             *
             */
            base.parse_element (/<cim:VCompIEEEType1.xc>([\s\S]*?)<\/cim:VCompIEEEType1.xc>/g, obj, "xc", base.to_string, sub, context);

            bucket = context.parsed.VCompIEEEType1;
            if (null == bucket)
                context.parsed.VCompIEEEType1 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This class provides the resistive and reactive components of compensation for the generator associated with the IEEE Type 2 voltage compensator for current flow out of one of the other generators in the interconnection.
         *
         */
        function parse_GenICompensationForGenJ (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "GenICompensationForGenJ";
            /**
             * <font color="#0f0f0f">Resistive component of compensation of generator associated with this IEEE Type 2 voltage compensator for current flow out of another generator (Rcij).</font>
             *
             */
            base.parse_element (/<cim:GenICompensationForGenJ.rcij>([\s\S]*?)<\/cim:GenICompensationForGenJ.rcij>/g, obj, "rcij", base.to_string, sub, context);

            /**
             * <font color="#0f0f0f">Reactive component of compensation of generator associated with this IEEE Type 2 voltage compensator for current flow out of another generator (Xcij).</font>
             *
             */
            base.parse_element (/<cim:GenICompensationForGenJ.xcij>([\s\S]*?)<\/cim:GenICompensationForGenJ.xcij>/g, obj, "xcij", base.to_string, sub, context);

            /**
             * The standard IEEE Type 2 voltage compensator of this compensation.
             *
             */
            base.parse_attribute (/<cim:GenICompensationForGenJ.VcompIEEEType2\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "VcompIEEEType2", sub, context, true);

            /**
             * Standard synchronous machine out of which current flow is being compensated for.
             *
             */
            base.parse_attribute (/<cim:GenICompensationForGenJ.SynchronousMachineDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SynchronousMachineDynamics", sub, context, true);

            bucket = context.parsed.GenICompensationForGenJ;
            if (null == bucket)
                context.parsed.GenICompensationForGenJ = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Voltage compensator function block whose behaviour is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         *
         */
        function parse_VoltageCompensatorDynamics (context, sub)
        {
            var obj;
            var bucket;

            obj = StandardModels.parse_DynamicsFunctionBlock (context, sub);
            obj.cls = "VoltageCompensatorDynamics";
            /**
             * Remote input signal used by this voltage compensator model.
             *
             */
            base.parse_attribute (/<cim:VoltageCompensatorDynamics.RemoteInputSignal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemoteInputSignal", sub, context, true);

            /**
             * Excitation system model with which this voltage compensator is associated.
             *
             */
            base.parse_attribute (/<cim:VoltageCompensatorDynamics.ExcitationSystemDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExcitationSystemDynamics", sub, context, true);

            bucket = context.parsed.VoltageCompensatorDynamics;
            if (null == bucket)
                context.parsed.VoltageCompensatorDynamics = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * <font color="#0f0f0f">The class represents the terminal voltage transducer and the load compensator as defined in the IEEE Std 421.5-2005, Section 4.
         *
         * This model is designed to cover the following types of compensation: </font>
         *
         */
        function parse_VCompIEEEType2 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_VoltageCompensatorDynamics (context, sub);
            obj.cls = "VCompIEEEType2";
            /**
             * <font color="#0f0f0f">Time constant which is used for the combined voltage sensing and compensation signal (Tr).</font>
             *
             */
            base.parse_element (/<cim:VCompIEEEType2.tr>([\s\S]*?)<\/cim:VCompIEEEType2.tr>/g, obj, "tr", base.to_string, sub, context);

            bucket = context.parsed.VCompIEEEType2;
            if (null == bucket)
                context.parsed.VCompIEEEType2 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_VoltageCompensatorDynamics: parse_VoltageCompensatorDynamics,
                parse_VCompIEEEType1: parse_VCompIEEEType1,
                parse_VCompIEEEType2: parse_VCompIEEEType2,
                parse_GenICompensationForGenJ: parse_GenICompensationForGenJ
            }
        );
    }
);