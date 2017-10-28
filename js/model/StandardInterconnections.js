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
            /**
             * Input is voltage frequency from remote terminal bus.
             *
             */
            base.parse_element (/<cim:RemoteSignalKind.remoteBusVoltageFrequency>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBusVoltageFrequency>/g, obj, "remoteBusVoltageFrequency", base.to_string, sub, context);

            /**
             * Input is voltage frequency deviation from remote terminal bus.
             *
             */
            base.parse_element (/<cim:RemoteSignalKind.remoteBusVoltageFrequencyDeviation>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBusVoltageFrequencyDeviation>/g, obj, "remoteBusVoltageFrequencyDeviation", base.to_string, sub, context);

            /**
             * Input is frequency from remote terminal bus.
             *
             */
            base.parse_element (/<cim:RemoteSignalKind.remoteBusFrequency>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBusFrequency>/g, obj, "remoteBusFrequency", base.to_string, sub, context);

            /**
             * Input is frequency deviation from remote terminal bus.
             *
             */
            base.parse_element (/<cim:RemoteSignalKind.remoteBusFrequencyDeviation>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBusFrequencyDeviation>/g, obj, "remoteBusFrequencyDeviation", base.to_string, sub, context);

            /**
             * Input is voltage amplitude from remote terminal bus.
             *
             */
            base.parse_element (/<cim:RemoteSignalKind.remoteBusVoltageAmplitude>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBusVoltageAmplitude>/g, obj, "remoteBusVoltageAmplitude", base.to_string, sub, context);

            /**
             * Input is voltage from remote terminal bus.
             *
             */
            base.parse_element (/<cim:RemoteSignalKind.remoteBusVoltage>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBusVoltage>/g, obj, "remoteBusVoltage", base.to_string, sub, context);

            /**
             * Input is branch current amplitude from remote terminal bus.
             *
             */
            base.parse_element (/<cim:RemoteSignalKind.remoteBranchCurrentAmplitude>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBranchCurrentAmplitude>/g, obj, "remoteBranchCurrentAmplitude", base.to_string, sub, context);

            /**
             * Input is branch current amplitude derivative from remote terminal bus.
             *
             */
            base.parse_element (/<cim:RemoteSignalKind.remoteBusVoltageAmplitudeDerivative>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBusVoltageAmplitudeDerivative>/g, obj, "remoteBusVoltageAmplitudeDerivative", base.to_string, sub, context);

            /**
             * Input is PU voltage derivative from remote terminal bus.
             *
             */
            base.parse_element (/<cim:RemoteSignalKind.remotePuBusVoltageDerivative>([\s\S]*?)<\/cim:RemoteSignalKind.remotePuBusVoltageDerivative>/g, obj, "remotePuBusVoltageDerivative", base.to_string, sub, context);

            bucket = context.parsed.RemoteSignalKind;
            if (null == bucket)
                context.parsed.RemoteSignalKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Type of input signal.
             *
             */
            base.parse_element (/<cim:RemoteInputSignal.remoteSignalType>([\s\S]*?)<\/cim:RemoteInputSignal.remoteSignalType>/g, obj, "remoteSignalType", base.to_string, sub, context);

            /**
             * Remote terminal with which this input signal is associated.
             *
             */
            base.parse_attribute (/<cim:RemoteInputSignal.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context, true);

            /**
             * Voltage compensator model using this remote input signal.
             *
             */
            base.parse_attribute (/<cim:RemoteInputSignal.VoltageCompensatorDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "VoltageCompensatorDynamics", sub, context, true);

            /**
             * The wind plant using the remote signal.
             *
             */
            base.parse_attribute (/<cim:RemoteInputSignal.WindPlantDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPlantDynamics", sub, context, true);

            /**
             * Power system stabilizer model using this remote input signal.
             *
             */
            base.parse_attribute (/<cim:RemoteInputSignal.PowerSystemStabilizerDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemStabilizerDynamics", sub, context, true);

            /**
             * Wind turbine Type 3 or 4 models using this remote input signal.
             *
             */
            base.parse_attribute (/<cim:RemoteInputSignal.WindTurbineType3or4Dynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3or4Dynamics", sub, context, true);

            /**
             * Underexcitation limiter model using this remote input signal.
             *
             */
            base.parse_attribute (/<cim:RemoteInputSignal.UnderexcitationLimiterDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UnderexcitationLimiterDynamics", sub, context, true);

            /**
             * Wind generator Type 1 or Type 2 model using this remote input signal.
             *
             */
            base.parse_attribute (/<cim:RemoteInputSignal.WindTurbineType1or2Dynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType1or2Dynamics", sub, context, true);

            /**
             * Power Factor or VAr controller Type I model using this remote input signal.
             *
             */
            base.parse_attribute (/<cim:RemoteInputSignal.PFVArControllerType1Dynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PFVArControllerType1Dynamics", sub, context, true);

            /**
             * Discontinuous excitation control model using this remote input signal.
             *
             */
            base.parse_attribute (/<cim:RemoteInputSignal.DiscontinuousExcitationControlDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DiscontinuousExcitationControlDynamics", sub, context, true);

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