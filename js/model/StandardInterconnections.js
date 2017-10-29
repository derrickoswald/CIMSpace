define
(
    ["model/base", "model/Core"],
    /**
     * This section describes the standard interconnections for various types of equipment.
     *
     * These interconnections are understood by the application programs and can be identified based on the presence of one of the key classes with a relationship to the static power flow model: SynchronousMachineDynamics, AsynchronousMachineDynamics, EnergyConsumerDynamics or WindTurbineType3or4Dynamics.
     *
     */
    function (base, Core)
    {

        /**
         * Type of input signal coming from remote bus.
         *
         */
        function parse_RemoteSignalKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "RemoteSignalKind";
            base.parse_element (/<cim:RemoteSignalKind.remoteBusVoltageFrequency>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBusVoltageFrequency>/g, obj, "remoteBusVoltageFrequency", base.to_string, sub, context);
            base.parse_element (/<cim:RemoteSignalKind.remoteBusVoltageFrequencyDeviation>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBusVoltageFrequencyDeviation>/g, obj, "remoteBusVoltageFrequencyDeviation", base.to_string, sub, context);
            base.parse_element (/<cim:RemoteSignalKind.remoteBusFrequency>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBusFrequency>/g, obj, "remoteBusFrequency", base.to_string, sub, context);
            base.parse_element (/<cim:RemoteSignalKind.remoteBusFrequencyDeviation>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBusFrequencyDeviation>/g, obj, "remoteBusFrequencyDeviation", base.to_string, sub, context);
            base.parse_element (/<cim:RemoteSignalKind.remoteBusVoltageAmplitude>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBusVoltageAmplitude>/g, obj, "remoteBusVoltageAmplitude", base.to_string, sub, context);
            base.parse_element (/<cim:RemoteSignalKind.remoteBusVoltage>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBusVoltage>/g, obj, "remoteBusVoltage", base.to_string, sub, context);
            base.parse_element (/<cim:RemoteSignalKind.remoteBranchCurrentAmplitude>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBranchCurrentAmplitude>/g, obj, "remoteBranchCurrentAmplitude", base.to_string, sub, context);
            base.parse_element (/<cim:RemoteSignalKind.remoteBusVoltageAmplitudeDerivative>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBusVoltageAmplitudeDerivative>/g, obj, "remoteBusVoltageAmplitudeDerivative", base.to_string, sub, context);
            base.parse_element (/<cim:RemoteSignalKind.remotePuBusVoltageDerivative>([\s\S]*?)<\/cim:RemoteSignalKind.remotePuBusVoltageDerivative>/g, obj, "remotePuBusVoltageDerivative", base.to_string, sub, context);
            bucket = context.parsed.RemoteSignalKind;
            if (null == bucket)
                context.parsed.RemoteSignalKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_RemoteSignalKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "RemoteSignalKind", "remoteBusVoltageFrequency", base.from_string, fields);
            base.export_element (obj, "RemoteSignalKind", "remoteBusVoltageFrequencyDeviation", base.from_string, fields);
            base.export_element (obj, "RemoteSignalKind", "remoteBusFrequency", base.from_string, fields);
            base.export_element (obj, "RemoteSignalKind", "remoteBusFrequencyDeviation", base.from_string, fields);
            base.export_element (obj, "RemoteSignalKind", "remoteBusVoltageAmplitude", base.from_string, fields);
            base.export_element (obj, "RemoteSignalKind", "remoteBusVoltage", base.from_string, fields);
            base.export_element (obj, "RemoteSignalKind", "remoteBranchCurrentAmplitude", base.from_string, fields);
            base.export_element (obj, "RemoteSignalKind", "remoteBusVoltageAmplitudeDerivative", base.from_string, fields);
            base.export_element (obj, "RemoteSignalKind", "remotePuBusVoltageDerivative", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Supports connection to a terminal associated with a remote bus from which an input signal of a specific type is coming.
         *
         */
        function parse_RemoteInputSignal (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "RemoteInputSignal";
            base.parse_element (/<cim:RemoteInputSignal.remoteSignalType>([\s\S]*?)<\/cim:RemoteInputSignal.remoteSignalType>/g, obj, "remoteSignalType", base.to_string, sub, context);
            base.parse_attribute (/<cim:RemoteInputSignal.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context);
            base.parse_attribute (/<cim:RemoteInputSignal.VoltageCompensatorDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "VoltageCompensatorDynamics", sub, context);
            base.parse_attribute (/<cim:RemoteInputSignal.WindPlantDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPlantDynamics", sub, context);
            base.parse_attribute (/<cim:RemoteInputSignal.PowerSystemStabilizerDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemStabilizerDynamics", sub, context);
            base.parse_attribute (/<cim:RemoteInputSignal.WindTurbineType3or4Dynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3or4Dynamics", sub, context);
            base.parse_attribute (/<cim:RemoteInputSignal.UnderexcitationLimiterDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UnderexcitationLimiterDynamics", sub, context);
            base.parse_attribute (/<cim:RemoteInputSignal.WindTurbineType1or2Dynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType1or2Dynamics", sub, context);
            base.parse_attribute (/<cim:RemoteInputSignal.PFVArControllerType1Dynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PFVArControllerType1Dynamics", sub, context);
            base.parse_attribute (/<cim:RemoteInputSignal.DiscontinuousExcitationControlDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DiscontinuousExcitationControlDynamics", sub, context);
            bucket = context.parsed.RemoteInputSignal;
            if (null == bucket)
                context.parsed.RemoteInputSignal = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_RemoteInputSignal (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "RemoteInputSignal", "remoteSignalType", base.from_string, fields);
            base.export_attribute (obj, "RemoteInputSignal", "Terminal", fields);
            base.export_attribute (obj, "RemoteInputSignal", "VoltageCompensatorDynamics", fields);
            base.export_attribute (obj, "RemoteInputSignal", "WindPlantDynamics", fields);
            base.export_attribute (obj, "RemoteInputSignal", "PowerSystemStabilizerDynamics", fields);
            base.export_attribute (obj, "RemoteInputSignal", "WindTurbineType3or4Dynamics", fields);
            base.export_attribute (obj, "RemoteInputSignal", "UnderexcitationLimiterDynamics", fields);
            base.export_attribute (obj, "RemoteInputSignal", "WindTurbineType1or2Dynamics", fields);
            base.export_attribute (obj, "RemoteInputSignal", "PFVArControllerType1Dynamics", fields);
            base.export_attribute (obj, "RemoteInputSignal", "DiscontinuousExcitationControlDynamics", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                parse_RemoteInputSignal: parse_RemoteInputSignal,
                export_RemoteInputSignal: export_RemoteInputSignal,
                export_RemoteSignalKind: export_RemoteSignalKind,
                parse_RemoteSignalKind: parse_RemoteSignalKind
            }
        );
    }
);