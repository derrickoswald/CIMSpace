define
(
    ["model/base", "model/Core"],
    /**
     * This section describes the standard interconnections for various types of equipment.
     * These interconnections are understood by the application programs and can be identified based on the presence of one of the key classes with a relationship to the static power flow model: SynchronousMachineDynamics, AsynchronousMachineDynamics, EnergyConsumerDynamics or WindTurbineType3or4Dynamics.
     */
    function (base, Core)
    {

        /**
         * Type of input signal coming from remote bus.
         */
        function parse_RemoteSignalKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "RemoteSignalKind";
            /**
             * Input is voltage frequency from remote terminal bus.
             */
            obj["remoteBusVoltageFrequency"] = base.parse_element (/<cim:RemoteSignalKind.remoteBusVoltageFrequency>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBusVoltageFrequency>/g, sub, context, true);
            /**
             * Input is voltage frequency deviation from remote terminal bus.
             */
            obj["remoteBusVoltageFrequencyDeviation"] = base.parse_element (/<cim:RemoteSignalKind.remoteBusVoltageFrequencyDeviation>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBusVoltageFrequencyDeviation>/g, sub, context, true);
            /**
             * Input is frequency from remote terminal bus.
             */
            obj["remoteBusFrequency"] = base.parse_element (/<cim:RemoteSignalKind.remoteBusFrequency>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBusFrequency>/g, sub, context, true);
            /**
             * Input is frequency deviation from remote terminal bus.
             */
            obj["remoteBusFrequencyDeviation"] = base.parse_element (/<cim:RemoteSignalKind.remoteBusFrequencyDeviation>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBusFrequencyDeviation>/g, sub, context, true);
            /**
             * Input is voltage amplitude from remote terminal bus.
             */
            obj["remoteBusVoltageAmplitude"] = base.parse_element (/<cim:RemoteSignalKind.remoteBusVoltageAmplitude>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBusVoltageAmplitude>/g, sub, context, true);
            /**
             * Input is voltage from remote terminal bus.
             */
            obj["remoteBusVoltage"] = base.parse_element (/<cim:RemoteSignalKind.remoteBusVoltage>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBusVoltage>/g, sub, context, true);
            /**
             * Input is branch current amplitude from remote terminal bus.
             */
            obj["remoteBranchCurrentAmplitude"] = base.parse_element (/<cim:RemoteSignalKind.remoteBranchCurrentAmplitude>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBranchCurrentAmplitude>/g, sub, context, true);
            /**
             * Input is branch current amplitude derivative from remote terminal bus.
             */
            obj["remoteBusVoltageAmplitudeDerivative"] = base.parse_element (/<cim:RemoteSignalKind.remoteBusVoltageAmplitudeDerivative>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBusVoltageAmplitudeDerivative>/g, sub, context, true);
            /**
             * Input is PU voltage derivative from remote terminal bus.
             */
            obj["remotePuBusVoltageDerivative"] = base.parse_element (/<cim:RemoteSignalKind.remotePuBusVoltageDerivative>([\s\S]*?)<\/cim:RemoteSignalKind.remotePuBusVoltageDerivative>/g, sub, context, true);
            bucket = context.parsed.RemoteSignalKind;
            if (null == bucket)
                context.parsed.RemoteSignalKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Supports connection to a terminal associated with a remote bus from which an input signal of a specific type is coming.
         */
        function parse_RemoteInputSignal (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "RemoteInputSignal";
            /**
             * Type of input signal.
             */
            obj["remoteSignalType"] = base.parse_element (/<cim:RemoteInputSignal.remoteSignalType>([\s\S]*?)<\/cim:RemoteInputSignal.remoteSignalType>/g, sub, context, true);
            /**
             * Remote terminal with which this input signal is associated.
             */
            obj["Terminal"] = base.parse_attribute (/<cim:RemoteInputSignal.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Voltage compensator model using this remote input signal.
             */
            obj["VoltageCompensatorDynamics"] = base.parse_attribute (/<cim:RemoteInputSignal.VoltageCompensatorDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The wind plant using the remote signal.
             */
            obj["WindPlantDynamics"] = base.parse_attribute (/<cim:RemoteInputSignal.WindPlantDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Power system stabilizer model using this remote input signal.
             */
            obj["PowerSystemStabilizerDynamics"] = base.parse_attribute (/<cim:RemoteInputSignal.PowerSystemStabilizerDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Wind turbine Type 3 or 4 models using this remote input signal.
             */
            obj["WindTurbineType3or4Dynamics"] = base.parse_attribute (/<cim:RemoteInputSignal.WindTurbineType3or4Dynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Underexcitation limiter model using this remote input signal.
             */
            obj["UnderexcitationLimiterDynamics"] = base.parse_attribute (/<cim:RemoteInputSignal.UnderexcitationLimiterDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Wind generator Type 1 or Type 2 model using this remote input signal.
             */
            obj["WindTurbineType1or2Dynamics"] = base.parse_attribute (/<cim:RemoteInputSignal.WindTurbineType1or2Dynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Power Factor or VAr controller Type I model using this remote input signal.
             */
            obj["PFVArControllerType1Dynamics"] = base.parse_attribute (/<cim:RemoteInputSignal.PFVArControllerType1Dynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Discontinuous excitation control model using this remote input signal.
             */
            obj["DiscontinuousExcitationControlDynamics"] = base.parse_attribute (/<cim:RemoteInputSignal.DiscontinuousExcitationControlDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.RemoteInputSignal;
            if (null == bucket)
                context.parsed.RemoteInputSignal = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_RemoteInputSignal: parse_RemoteInputSignal,
                parse_RemoteSignalKind: parse_RemoteSignalKind
            }
        );
    }
);