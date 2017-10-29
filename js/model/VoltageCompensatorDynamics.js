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
            base.parse_element (/<cim:VCompIEEEType1.rc>([\s\S]*?)<\/cim:VCompIEEEType1.rc>/g, obj, "rc", base.to_string, sub, context);
            base.parse_element (/<cim:VCompIEEEType1.tr>([\s\S]*?)<\/cim:VCompIEEEType1.tr>/g, obj, "tr", base.to_string, sub, context);
            base.parse_element (/<cim:VCompIEEEType1.xc>([\s\S]*?)<\/cim:VCompIEEEType1.xc>/g, obj, "xc", base.to_string, sub, context);
            bucket = context.parsed.VCompIEEEType1;
            if (null == bucket)
                context.parsed.VCompIEEEType1 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_VCompIEEEType1 (obj, exporters, full)
        {
            var fields = exporters["VoltageCompensatorDynamics"](obj, exporters, false);

            base.export_element (obj, "VCompIEEEType1", "rc", base.from_string, fields);
            base.export_element (obj, "VCompIEEEType1", "tr", base.from_string, fields);
            base.export_element (obj, "VCompIEEEType1", "xc", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:GenICompensationForGenJ.rcij>([\s\S]*?)<\/cim:GenICompensationForGenJ.rcij>/g, obj, "rcij", base.to_string, sub, context);
            base.parse_element (/<cim:GenICompensationForGenJ.xcij>([\s\S]*?)<\/cim:GenICompensationForGenJ.xcij>/g, obj, "xcij", base.to_string, sub, context);
            base.parse_attribute (/<cim:GenICompensationForGenJ.VcompIEEEType2\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "VcompIEEEType2", sub, context);
            base.parse_attribute (/<cim:GenICompensationForGenJ.SynchronousMachineDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SynchronousMachineDynamics", sub, context);
            bucket = context.parsed.GenICompensationForGenJ;
            if (null == bucket)
                context.parsed.GenICompensationForGenJ = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GenICompensationForGenJ (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "GenICompensationForGenJ", "rcij", base.from_string, fields);
            base.export_element (obj, "GenICompensationForGenJ", "xcij", base.from_string, fields);
            base.export_attribute (obj, "GenICompensationForGenJ", "VcompIEEEType2", fields);
            base.export_attribute (obj, "GenICompensationForGenJ", "SynchronousMachineDynamics", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_attribute (/<cim:VoltageCompensatorDynamics.RemoteInputSignal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemoteInputSignal", sub, context);
            base.parse_attribute (/<cim:VoltageCompensatorDynamics.ExcitationSystemDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExcitationSystemDynamics", sub, context);
            bucket = context.parsed.VoltageCompensatorDynamics;
            if (null == bucket)
                context.parsed.VoltageCompensatorDynamics = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_VoltageCompensatorDynamics (obj, exporters, full)
        {
            var fields = exporters["DynamicsFunctionBlock"](obj, exporters, false);

            base.export_attribute (obj, "VoltageCompensatorDynamics", "RemoteInputSignal", fields);
            base.export_attribute (obj, "VoltageCompensatorDynamics", "ExcitationSystemDynamics", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:VCompIEEEType2.tr>([\s\S]*?)<\/cim:VCompIEEEType2.tr>/g, obj, "tr", base.to_string, sub, context);
            bucket = context.parsed.VCompIEEEType2;
            if (null == bucket)
                context.parsed.VCompIEEEType2 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_VCompIEEEType2 (obj, exporters, full)
        {
            var fields = exporters["VoltageCompensatorDynamics"](obj, exporters, false);

            base.export_element (obj, "VCompIEEEType2", "tr", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                export_VCompIEEEType1: export_VCompIEEEType1,
                parse_VoltageCompensatorDynamics: parse_VoltageCompensatorDynamics,
                parse_VCompIEEEType1: parse_VCompIEEEType1,
                parse_VCompIEEEType2: parse_VCompIEEEType2,
                export_VCompIEEEType2: export_VCompIEEEType2,
                export_GenICompensationForGenJ: export_GenICompensationForGenJ,
                parse_GenICompensationForGenJ: parse_GenICompensationForGenJ,
                export_VoltageCompensatorDynamics: export_VoltageCompensatorDynamics
            }
        );
    }
);