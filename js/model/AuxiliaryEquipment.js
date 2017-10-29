define
(
    ["model/base", "model/Core"],
    /**
     * Contains equipment which is not normal conducting equipment such as sensors, fault locators, and surge protectors.
     *
     * These devices do not define power carrying topological connections as conducting equipment, but are associated to terminals of other conducting equipment.
     *
     */
    function (base, Core)
    {

        /**
         * Shunt device, installed on the network, usually in the proximity of electrical equipment in order to protect the said equipment against transient voltage transients caused by lightning or switching activity.
         *
         */
        function parse_SurgeArrester (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_AuxiliaryEquipment (context, sub);
            obj.cls = "SurgeArrester";
            bucket = context.parsed.SurgeArrester;
            if (null == bucket)
                context.parsed.SurgeArrester = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SurgeArrester (obj, exporters, full)
        {
            var fields = exporters["AuxiliaryEquipment"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * AuxiliaryEquipment describe equipment that is not performing any primary functions but support for the equipment performing the primary function.
         *
         * AuxiliaryEquipment is attached to primary eqipment via an association with Terminal.
         *
         */
        function parse_AuxiliaryEquipment (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Equipment (context, sub);
            obj.cls = "AuxiliaryEquipment";
            base.parse_attribute (/<cim:AuxiliaryEquipment.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context);
            bucket = context.parsed.AuxiliaryEquipment;
            if (null == bucket)
                context.parsed.AuxiliaryEquipment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AuxiliaryEquipment (obj, exporters, full)
        {
            var fields = exporters["Equipment"](obj, exporters, false);

            base.export_attribute (obj, "AuxiliaryEquipment", "Terminal", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The construction kind of the potential transformer.
         *
         */
        function parse_PotentialTransformerKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PotentialTransformerKind";
            base.parse_element (/<cim:PotentialTransformerKind.inductive>([\s\S]*?)<\/cim:PotentialTransformerKind.inductive>/g, obj, "inductive", base.to_string, sub, context);
            base.parse_element (/<cim:PotentialTransformerKind.capacitiveCoupling>([\s\S]*?)<\/cim:PotentialTransformerKind.capacitiveCoupling>/g, obj, "capacitiveCoupling", base.to_string, sub, context);
            bucket = context.parsed.PotentialTransformerKind;
            if (null == bucket)
                context.parsed.PotentialTransformerKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PotentialTransformerKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "PotentialTransformerKind", "inductive", base.from_string, fields);
            base.export_element (obj, "PotentialTransformerKind", "capacitiveCoupling", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * This class describe devices that transform a measured quantity into signals that can be presented at displays, used in control or be recorded.
         *
         */
        function parse_Sensor (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_AuxiliaryEquipment (context, sub);
            obj.cls = "Sensor";
            bucket = context.parsed.Sensor;
            if (null == bucket)
                context.parsed.Sensor = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Sensor (obj, exporters, full)
        {
            var fields = exporters["AuxiliaryEquipment"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Line traps are devices that impede high frequency power line carrier signals yet present a negligible impedance at the main power frequency.
         *
         */
        function parse_WaveTrap (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_AuxiliaryEquipment (context, sub);
            obj.cls = "WaveTrap";
            bucket = context.parsed.WaveTrap;
            if (null == bucket)
                context.parsed.WaveTrap = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_WaveTrap (obj, exporters, full)
        {
            var fields = exporters["AuxiliaryEquipment"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Instrument transformer (also known as Voltage Transformer) used to measure electrical qualities of the circuit that is being protected and/or monitored.
         *
         * Typically used as voltage transducer for the purpose of metering, protection, or sometimes auxiliary substation supply. A typical secondary voltage rating would be 120V.
         *
         */
        function parse_PotentialTransformer (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Sensor (context, sub);
            obj.cls = "PotentialTransformer";
            base.parse_element (/<cim:PotentialTransformer.accuracyClass>([\s\S]*?)<\/cim:PotentialTransformer.accuracyClass>/g, obj, "accuracyClass", base.to_string, sub, context);
            base.parse_element (/<cim:PotentialTransformer.nominalRatio>([\s\S]*?)<\/cim:PotentialTransformer.nominalRatio>/g, obj, "nominalRatio", base.to_float, sub, context);
            base.parse_element (/<cim:PotentialTransformer.ptClass>([\s\S]*?)<\/cim:PotentialTransformer.ptClass>/g, obj, "ptClass", base.to_string, sub, context);
            base.parse_element (/<cim:PotentialTransformer.type>([\s\S]*?)<\/cim:PotentialTransformer.type>/g, obj, "type", base.to_string, sub, context);
            bucket = context.parsed.PotentialTransformer;
            if (null == bucket)
                context.parsed.PotentialTransformer = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PotentialTransformer (obj, exporters, full)
        {
            var fields = exporters["Sensor"](obj, exporters, false);

            base.export_element (obj, "PotentialTransformer", "accuracyClass", base.from_string, fields);
            base.export_element (obj, "PotentialTransformer", "nominalRatio", base.from_float, fields);
            base.export_element (obj, "PotentialTransformer", "ptClass", base.from_string, fields);
            base.export_element (obj, "PotentialTransformer", "type", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A FaultIndicator is typically only an indicator (which may or may not be remotely monitored), and not a piece of equipment that actually initiates a protection event.
         *
         * It is used for FLISR (Fault Location, Isolation and Restoration) purposes, assisting with the dispatch of crews to "most likely" part of the network (i.e. assists with determining circuit section where the fault most likely happened).
         *
         */
        function parse_FaultIndicator (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_AuxiliaryEquipment (context, sub);
            obj.cls = "FaultIndicator";
            bucket = context.parsed.FaultIndicator;
            if (null == bucket)
                context.parsed.FaultIndicator = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_FaultIndicator (obj, exporters, full)
        {
            var fields = exporters["AuxiliaryEquipment"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Instrument transformer used to measure electrical qualities of the circuit that is being protected and/or monitored.
         *
         * Typically used as current transducer for the purpose of metering or protection. A typical secondary current rating would be 5A.
         *
         */
        function parse_CurrentTransformer (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Sensor (context, sub);
            obj.cls = "CurrentTransformer";
            base.parse_element (/<cim:CurrentTransformer.accuracyClass>([\s\S]*?)<\/cim:CurrentTransformer.accuracyClass>/g, obj, "accuracyClass", base.to_string, sub, context);
            base.parse_element (/<cim:CurrentTransformer.accuracyLimit>([\s\S]*?)<\/cim:CurrentTransformer.accuracyLimit>/g, obj, "accuracyLimit", base.to_string, sub, context);
            base.parse_element (/<cim:CurrentTransformer.ctClass>([\s\S]*?)<\/cim:CurrentTransformer.ctClass>/g, obj, "ctClass", base.to_string, sub, context);
            base.parse_element (/<cim:CurrentTransformer.usage>([\s\S]*?)<\/cim:CurrentTransformer.usage>/g, obj, "usage", base.to_string, sub, context);
            base.parse_element (/<cim:CurrentTransformer.coreBurden>([\s\S]*?)<\/cim:CurrentTransformer.coreBurden>/g, obj, "coreBurden", base.to_string, sub, context);
            bucket = context.parsed.CurrentTransformer;
            if (null == bucket)
                context.parsed.CurrentTransformer = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CurrentTransformer (obj, exporters, full)
        {
            var fields = exporters["Sensor"](obj, exporters, false);

            base.export_element (obj, "CurrentTransformer", "accuracyClass", base.from_string, fields);
            base.export_element (obj, "CurrentTransformer", "accuracyLimit", base.from_string, fields);
            base.export_element (obj, "CurrentTransformer", "ctClass", base.from_string, fields);
            base.export_element (obj, "CurrentTransformer", "usage", base.from_string, fields);
            base.export_element (obj, "CurrentTransformer", "coreBurden", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A sensor used mainly in overhead distribution networks as the source of both current and voltage measurements.
         *
         */
        function parse_PostLineSensor (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Sensor (context, sub);
            obj.cls = "PostLineSensor";
            bucket = context.parsed.PostLineSensor;
            if (null == bucket)
                context.parsed.PostLineSensor = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PostLineSensor (obj, exporters, full)
        {
            var fields = exporters["Sensor"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                export_FaultIndicator: export_FaultIndicator,
                export_PostLineSensor: export_PostLineSensor,
                parse_PotentialTransformerKind: parse_PotentialTransformerKind,
                parse_Sensor: parse_Sensor,
                export_PotentialTransformer: export_PotentialTransformer,
                parse_SurgeArrester: parse_SurgeArrester,
                parse_PotentialTransformer: parse_PotentialTransformer,
                export_PotentialTransformerKind: export_PotentialTransformerKind,
                export_Sensor: export_Sensor,
                parse_PostLineSensor: parse_PostLineSensor,
                parse_AuxiliaryEquipment: parse_AuxiliaryEquipment,
                parse_CurrentTransformer: parse_CurrentTransformer,
                export_AuxiliaryEquipment: export_AuxiliaryEquipment,
                export_CurrentTransformer: export_CurrentTransformer,
                export_WaveTrap: export_WaveTrap,
                parse_WaveTrap: parse_WaveTrap,
                parse_FaultIndicator: parse_FaultIndicator,
                export_SurgeArrester: export_SurgeArrester
            }
        );
    }
);