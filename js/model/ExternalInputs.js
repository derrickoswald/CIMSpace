define
(
    ["model/base", "model/Common", "model/ControlArea", "model/Core", "model/MarketPlan", "model/Meas", "model/ParticipantInterfaces", "model/Wires"],
    /**
     * Inputs to the market system from external sources.
     *
     */
    function (base, Common, ControlArea, Core, MarketPlan, Meas, ParticipantInterfaces, Wires)
    {

        /**
         * This class models the transmission (either a transmission interface or a POR/POD pair) capacity including Total Transfer Capacity (TTC), Operating Transfer Capacity (OTC), and Capacity Benefit Margin (CBM)
         *
         */
        function parse_TransmissionCapacity (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TransmissionCapacity";
            base.parse_element (/<cim:TransmissionCapacity.capacityBenefitMargin>([\s\S]*?)<\/cim:TransmissionCapacity.capacityBenefitMargin>/g, obj, "capacityBenefitMargin", base.to_float, sub, context);
            base.parse_element (/<cim:TransmissionCapacity.operationalTransmissionCapacity>([\s\S]*?)<\/cim:TransmissionCapacity.operationalTransmissionCapacity>/g, obj, "operationalTransmissionCapacity", base.to_float, sub, context);
            base.parse_element (/<cim:TransmissionCapacity.OTC15min_emergency>([\s\S]*?)<\/cim:TransmissionCapacity.OTC15min_emergency>/g, obj, "OTC15min_emergency", base.to_float, sub, context);
            base.parse_element (/<cim:TransmissionCapacity.OTCemergency>([\s\S]*?)<\/cim:TransmissionCapacity.OTCemergency>/g, obj, "OTCemergency", base.to_float, sub, context);
            base.parse_element (/<cim:TransmissionCapacity.POD>([\s\S]*?)<\/cim:TransmissionCapacity.POD>/g, obj, "POD", base.to_string, sub, context);
            base.parse_element (/<cim:TransmissionCapacity.POR>([\s\S]*?)<\/cim:TransmissionCapacity.POR>/g, obj, "POR", base.to_string, sub, context);
            base.parse_element (/<cim:TransmissionCapacity.startOperatingDate>([\s\S]*?)<\/cim:TransmissionCapacity.startOperatingDate>/g, obj, "startOperatingDate", base.to_datetime, sub, context);
            base.parse_element (/<cim:TransmissionCapacity.totalTransmissionCapacity>([\s\S]*?)<\/cim:TransmissionCapacity.totalTransmissionCapacity>/g, obj, "totalTransmissionCapacity", base.to_float, sub, context);
            base.parse_attribute (/<cim:TransmissionCapacity.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
            base.parse_attribute (/<cim:TransmissionCapacity.GenericConstraints\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GenericConstraints", sub, context);
            bucket = context.parsed.TransmissionCapacity;
            if (null == bucket)
                context.parsed.TransmissionCapacity = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TransmissionCapacity (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "TransmissionCapacity", "capacityBenefitMargin", base.from_float, fields);
            base.export_element (obj, "TransmissionCapacity", "operationalTransmissionCapacity", base.from_float, fields);
            base.export_element (obj, "TransmissionCapacity", "OTC15min_emergency", base.from_float, fields);
            base.export_element (obj, "TransmissionCapacity", "OTCemergency", base.from_float, fields);
            base.export_element (obj, "TransmissionCapacity", "POD", base.from_string, fields);
            base.export_element (obj, "TransmissionCapacity", "POR", base.from_string, fields);
            base.export_element (obj, "TransmissionCapacity", "startOperatingDate", base.from_datetime, fields);
            base.export_element (obj, "TransmissionCapacity", "totalTransmissionCapacity", base.from_float, fields);
            base.export_attribute (obj, "TransmissionCapacity", "Flowgate", fields);
            base.export_attribute (obj, "TransmissionCapacity", "GenericConstraints", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Optimal Power Flow or State Estimator Filter Bank Data for OTS.
         *
         * This is used for RealTime, Study and Maintenance Users
         *
         */
        function parse_ShuntCompensatorDynamicData (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ShuntCompensatorDynamicData";
            base.parse_element (/<cim:ShuntCompensatorDynamicData.mVARInjection>([\s\S]*?)<\/cim:ShuntCompensatorDynamicData.mVARInjection>/g, obj, "mVARInjection", base.to_float, sub, context);
            base.parse_element (/<cim:ShuntCompensatorDynamicData.connectionStatus>([\s\S]*?)<\/cim:ShuntCompensatorDynamicData.connectionStatus>/g, obj, "connectionStatus", base.to_string, sub, context);
            base.parse_element (/<cim:ShuntCompensatorDynamicData.desiredVoltage>([\s\S]*?)<\/cim:ShuntCompensatorDynamicData.desiredVoltage>/g, obj, "desiredVoltage", base.to_float, sub, context);
            base.parse_element (/<cim:ShuntCompensatorDynamicData.voltageRegulationStatus>([\s\S]*?)<\/cim:ShuntCompensatorDynamicData.voltageRegulationStatus>/g, obj, "voltageRegulationStatus", base.to_boolean, sub, context);
            base.parse_element (/<cim:ShuntCompensatorDynamicData.stepPosition>([\s\S]*?)<\/cim:ShuntCompensatorDynamicData.stepPosition>/g, obj, "stepPosition", base.to_string, sub, context);
            base.parse_attribute (/<cim:ShuntCompensatorDynamicData.MktShuntCompensator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktShuntCompensator", sub, context);
            bucket = context.parsed.ShuntCompensatorDynamicData;
            if (null == bucket)
                context.parsed.ShuntCompensatorDynamicData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ShuntCompensatorDynamicData (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ShuntCompensatorDynamicData", "mVARInjection", base.from_float, fields);
            base.export_element (obj, "ShuntCompensatorDynamicData", "connectionStatus", base.from_string, fields);
            base.export_element (obj, "ShuntCompensatorDynamicData", "desiredVoltage", base.from_float, fields);
            base.export_element (obj, "ShuntCompensatorDynamicData", "voltageRegulationStatus", base.from_boolean, fields);
            base.export_element (obj, "ShuntCompensatorDynamicData", "stepPosition", base.from_string, fields);
            base.export_attribute (obj, "ShuntCompensatorDynamicData", "MktShuntCompensator", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A Transmission Right(TR) can be a chain of TR's or on individual.
         *
         * When a transmission right is not a chain, this is formally the ETC/TOR Entitlement for each ETC/TOR contract with the inclusion of CVR(Converted Rights) as an ETC. This is the sum of all entitlements on all related transmission interfaces for the same TR.
         *
         */
        function parse_TREntitlement (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TREntitlement";
            base.parse_element (/<cim:TREntitlement.entitlement>([\s\S]*?)<\/cim:TREntitlement.entitlement>/g, obj, "entitlement", base.to_float, sub, context);
            base.parse_element (/<cim:TREntitlement.startOperatingDate>([\s\S]*?)<\/cim:TREntitlement.startOperatingDate>/g, obj, "startOperatingDate", base.to_datetime, sub, context);
            base.parse_attribute (/<cim:TREntitlement.TransmissionContractRight\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionContractRight", sub, context);
            bucket = context.parsed.TREntitlement;
            if (null == bucket)
                context.parsed.TREntitlement = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TREntitlement (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "TREntitlement", "entitlement", base.from_float, fields);
            base.export_element (obj, "TREntitlement", "startOperatingDate", base.from_datetime, fields);
            base.export_attribute (obj, "TREntitlement", "TransmissionContractRight", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Possibly time-varying max MW or MVA and optionally Min MW limit or MVA limit (Y1 and Y2, respectively) assigned to a constraint for a specific contingency.
         *
         * Use CurveSchedule XAxisUnits to specify MW or MVA.
         *
         */
        function parse_ContingencyConstraintLimit (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "ContingencyConstraintLimit";
            base.parse_attribute (/<cim:ContingencyConstraintLimit.SecurityConstraintSum\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SecurityConstraintSum", sub, context);
            base.parse_attribute (/<cim:ContingencyConstraintLimit.MktContingency\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktContingency", sub, context);
            base.parse_attribute (/<cim:ContingencyConstraintLimit.MWLimitSchedules\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MWLimitSchedules", sub, context);
            bucket = context.parsed.ContingencyConstraintLimit;
            if (null == bucket)
                context.parsed.ContingencyConstraintLimit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ContingencyConstraintLimit (obj, exporters, full)
        {
            var fields = exporters["Curve"](obj, exporters, false);

            base.export_attribute (obj, "ContingencyConstraintLimit", "SecurityConstraintSum", fields);
            base.export_attribute (obj, "ContingencyConstraintLimit", "MktContingency", fields);
            base.export_attribute (obj, "ContingencyConstraintLimit", "MWLimitSchedules", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Subclass of IEC61970:Meas:AnalogValue
         *
         */
        function parse_MktAnalogValue (context, sub)
        {
            var obj;
            var bucket;

            obj = Meas.parse_AnalogValue (context, sub);
            obj.cls = "MktAnalogValue";
            bucket = context.parsed.MktAnalogValue;
            if (null == bucket)
                context.parsed.MktAnalogValue = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MktAnalogValue (obj, exporters, full)
        {
            var fields = exporters["AnalogValue"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Optimal Power Flow or State Estimator Unit Data for Operator Training Simulator.
         *
         * This is used for RealTime, Study and Maintenance Users
         *
         */
        function parse_GeneratingUnitDynamicValues (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "GeneratingUnitDynamicValues";
            base.parse_element (/<cim:GeneratingUnitDynamicValues.lossFactor>([\s\S]*?)<\/cim:GeneratingUnitDynamicValues.lossFactor>/g, obj, "lossFactor", base.to_float, sub, context);
            base.parse_element (/<cim:GeneratingUnitDynamicValues.maximumMW>([\s\S]*?)<\/cim:GeneratingUnitDynamicValues.maximumMW>/g, obj, "maximumMW", base.to_float, sub, context);
            base.parse_element (/<cim:GeneratingUnitDynamicValues.minimumMW>([\s\S]*?)<\/cim:GeneratingUnitDynamicValues.minimumMW>/g, obj, "minimumMW", base.to_float, sub, context);
            base.parse_element (/<cim:GeneratingUnitDynamicValues.mVAR>([\s\S]*?)<\/cim:GeneratingUnitDynamicValues.mVAR>/g, obj, "mVAR", base.to_float, sub, context);
            base.parse_element (/<cim:GeneratingUnitDynamicValues.mw>([\s\S]*?)<\/cim:GeneratingUnitDynamicValues.mw>/g, obj, "mw", base.to_float, sub, context);
            base.parse_element (/<cim:GeneratingUnitDynamicValues.sensitivity>([\s\S]*?)<\/cim:GeneratingUnitDynamicValues.sensitivity>/g, obj, "sensitivity", base.to_float, sub, context);
            base.parse_attribute (/<cim:GeneratingUnitDynamicValues.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
            base.parse_attribute (/<cim:GeneratingUnitDynamicValues.MktGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktGeneratingUnit", sub, context);
            bucket = context.parsed.GeneratingUnitDynamicValues;
            if (null == bucket)
                context.parsed.GeneratingUnitDynamicValues = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GeneratingUnitDynamicValues (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "GeneratingUnitDynamicValues", "lossFactor", base.from_float, fields);
            base.export_element (obj, "GeneratingUnitDynamicValues", "maximumMW", base.from_float, fields);
            base.export_element (obj, "GeneratingUnitDynamicValues", "minimumMW", base.from_float, fields);
            base.export_element (obj, "GeneratingUnitDynamicValues", "mVAR", base.from_float, fields);
            base.export_element (obj, "GeneratingUnitDynamicValues", "mw", base.from_float, fields);
            base.export_element (obj, "GeneratingUnitDynamicValues", "sensitivity", base.from_float, fields);
            base.export_attribute (obj, "GeneratingUnitDynamicValues", "Flowgate", fields);
            base.export_attribute (obj, "GeneratingUnitDynamicValues", "MktGeneratingUnit", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * An electrical connection, link, or line consisting of one or more parallel transmission elements between two areas of the interconnected electric systems, or portions thereof.
         *
         * TransmissionCorridor and TransmissionRightOfWay refer to legal aspects. The TransmissionPath refers to the segments between a TransmissionProvider's ServicePoints.
         *
         */
        function parse_TransmissionPath (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TransmissionPath";
            base.parse_element (/<cim:TransmissionPath.availTransferCapability>([\s\S]*?)<\/cim:TransmissionPath.availTransferCapability>/g, obj, "availTransferCapability", base.to_string, sub, context);
            base.parse_element (/<cim:TransmissionPath.parallelPathFlag>([\s\S]*?)<\/cim:TransmissionPath.parallelPathFlag>/g, obj, "parallelPathFlag", base.to_boolean, sub, context);
            base.parse_element (/<cim:TransmissionPath.totalTransferCapability>([\s\S]*?)<\/cim:TransmissionPath.totalTransferCapability>/g, obj, "totalTransferCapability", base.to_string, sub, context);
            base.parse_attribute (/<cim:TransmissionPath.DeliveryPoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DeliveryPoint", sub, context);
            base.parse_attribute (/<cim:TransmissionPath.For\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "For", sub, context);
            base.parse_attribute (/<cim:TransmissionPath.PointOfReceipt\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PointOfReceipt", sub, context);
            bucket = context.parsed.TransmissionPath;
            if (null == bucket)
                context.parsed.TransmissionPath = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TransmissionPath (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "TransmissionPath", "availTransferCapability", base.from_string, fields);
            base.export_element (obj, "TransmissionPath", "parallelPathFlag", base.from_boolean, fields);
            base.export_element (obj, "TransmissionPath", "totalTransferCapability", base.from_string, fields);
            base.export_attribute (obj, "TransmissionPath", "DeliveryPoint", fields);
            base.export_attribute (obj, "TransmissionPath", "For", fields);
            base.export_attribute (obj, "TransmissionPath", "PointOfReceipt", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A constraint term is one element of a linear constraint.
         *
         */
        function parse_ConstraintTerm (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ConstraintTerm";
            base.parse_element (/<cim:ConstraintTerm.factor>([\s\S]*?)<\/cim:ConstraintTerm.factor>/g, obj, "factor", base.to_string, sub, context);
            base.parse_element (/<cim:ConstraintTerm.function>([\s\S]*?)<\/cim:ConstraintTerm.function>/g, obj, "function", base.to_string, sub, context);
            base.parse_attribute (/<cim:ConstraintTerm.SecurityConstraintSum\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SecurityConstraintSum", sub, context);
            bucket = context.parsed.ConstraintTerm;
            if (null == bucket)
                context.parsed.ConstraintTerm = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ConstraintTerm (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "ConstraintTerm", "factor", base.from_string, fields);
            base.export_element (obj, "ConstraintTerm", "function", base.from_string, fields);
            base.export_attribute (obj, "ConstraintTerm", "SecurityConstraintSum", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Subclass of IEC61970:Meas:DiscreteValue
         *
         */
        function parse_MktDiscreteValue (context, sub)
        {
            var obj;
            var bucket;

            obj = Meas.parse_DiscreteValue (context, sub);
            obj.cls = "MktDiscreteValue";
            bucket = context.parsed.MktDiscreteValue;
            if (null == bucket)
                context.parsed.MktDiscreteValue = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MktDiscreteValue (obj, exporters, full)
        {
            var fields = exporters["DiscreteValue"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Models Ancillary Service Requirements.
         *
         * Describes interval for which the requirement is applicable.
         *
         */
        function parse_ASRequirements (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ASRequirements";
            base.parse_element (/<cim:ASRequirements.intervalStartTime>([\s\S]*?)<\/cim:ASRequirements.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);
            bucket = context.parsed.ASRequirements;
            if (null == bucket)
                context.parsed.ASRequirements = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ASRequirements (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ASRequirements", "intervalStartTime", base.from_datetime, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A transmission reservation is obtained from the OASIS system to reserve transmission for a specified time period, transmission path and transmission product.
         *
         */
        function parse_TransmissionReservation (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TransmissionReservation";
            base.parse_attribute (/<cim:TransmissionReservation.EnergyTransaction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyTransaction", sub, context);
            base.parse_attribute (/<cim:TransmissionReservation.TransmissionPath\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionPath", sub, context);
            base.parse_attribute (/<cim:TransmissionReservation.Sink\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Sink", sub, context);
            base.parse_attribute (/<cim:TransmissionReservation.TransactionBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransactionBid", sub, context);
            base.parse_attribute (/<cim:TransmissionReservation.Source\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Source", sub, context);
            bucket = context.parsed.TransmissionReservation;
            if (null == bucket)
                context.parsed.TransmissionReservation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TransmissionReservation (obj, exporters, full)
        {
            var fields = [];

            base.export_attribute (obj, "TransmissionReservation", "EnergyTransaction", fields);
            base.export_attribute (obj, "TransmissionReservation", "TransmissionPath", fields);
            base.export_attribute (obj, "TransmissionReservation", "Sink", fields);
            base.export_attribute (obj, "TransmissionReservation", "TransactionBid", fields);
            base.export_attribute (obj, "TransmissionReservation", "Source", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * TNA Interface Definitions from OPF for VSA
         *
         */
        function parse_TransferInterfaceSolution (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TransferInterfaceSolution";
            base.parse_element (/<cim:TransferInterfaceSolution.interfaceMargin>([\s\S]*?)<\/cim:TransferInterfaceSolution.interfaceMargin>/g, obj, "interfaceMargin", base.to_float, sub, context);
            base.parse_element (/<cim:TransferInterfaceSolution.transferLimit>([\s\S]*?)<\/cim:TransferInterfaceSolution.transferLimit>/g, obj, "transferLimit", base.to_float, sub, context);
            base.parse_element (/<cim:TransferInterfaceSolution.postTransferMW>([\s\S]*?)<\/cim:TransferInterfaceSolution.postTransferMW>/g, obj, "postTransferMW", base.to_float, sub, context);
            base.parse_attribute (/<cim:TransferInterfaceSolution.TransferInterface\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransferInterface", sub, context);
            base.parse_attribute (/<cim:TransferInterfaceSolution.MktContingencyB\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktContingencyB", sub, context);
            base.parse_attribute (/<cim:TransferInterfaceSolution. MktContingencyA\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, " MktContingencyA", sub, context);
            bucket = context.parsed.TransferInterfaceSolution;
            if (null == bucket)
                context.parsed.TransferInterfaceSolution = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TransferInterfaceSolution (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "TransferInterfaceSolution", "interfaceMargin", base.from_float, fields);
            base.export_element (obj, "TransferInterfaceSolution", "transferLimit", base.from_float, fields);
            base.export_element (obj, "TransferInterfaceSolution", "postTransferMW", base.from_float, fields);
            base.export_attribute (obj, "TransferInterfaceSolution", "TransferInterface", fields);
            base.export_attribute (obj, "TransferInterfaceSolution", "MktContingencyB", fields);
            base.export_attribute (obj, "TransferInterfaceSolution", " MktContingencyA", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * To be used only to constrain a quantity that cannot be associated with a terminal.
         *
         * For example, a registered generating unit that is not electrically connected to the network.
         *
         */
        function parse_NodeConstraintTerm (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ConstraintTerm (context, sub);
            obj.cls = "NodeConstraintTerm";
            base.parse_attribute (/<cim:NodeConstraintTerm.MktConnectivityNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktConnectivityNode", sub, context);
            bucket = context.parsed.NodeConstraintTerm;
            if (null == bucket)
                context.parsed.NodeConstraintTerm = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_NodeConstraintTerm (obj, exporters, full)
        {
            var fields = exporters["ConstraintTerm"](obj, exporters, false);

            base.export_attribute (obj, "NodeConstraintTerm", "MktConnectivityNode", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Default bid curve for default energy bid curve and default startup curves (cost and time)
         *
         */
        function parse_DefaultBidCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "DefaultBidCurve";
            base.parse_element (/<cim:DefaultBidCurve.curveType>([\s\S]*?)<\/cim:DefaultBidCurve.curveType>/g, obj, "curveType", base.to_string, sub, context);
            base.parse_element (/<cim:DefaultBidCurve.debAdderFlag>([\s\S]*?)<\/cim:DefaultBidCurve.debAdderFlag>/g, obj, "debAdderFlag", base.to_string, sub, context);
            base.parse_attribute (/<cim:DefaultBidCurve.DefaultBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DefaultBid", sub, context);
            bucket = context.parsed.DefaultBidCurve;
            if (null == bucket)
                context.parsed.DefaultBidCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_DefaultBidCurve (obj, exporters, full)
        {
            var fields = exporters["Curve"](obj, exporters, false);

            base.export_element (obj, "DefaultBidCurve", "curveType", base.from_string, fields);
            base.export_element (obj, "DefaultBidCurve", "debAdderFlag", base.from_string, fields);
            base.export_attribute (obj, "DefaultBidCurve", "DefaultBid", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Dynamic flows and ratings associated with a branch end.
         *
         */
        function parse_BranchEndFlow (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "BranchEndFlow";
            base.parse_element (/<cim:BranchEndFlow.mwFlow>([\s\S]*?)<\/cim:BranchEndFlow.mwFlow>/g, obj, "mwFlow", base.to_float, sub, context);
            base.parse_element (/<cim:BranchEndFlow.mVARFlow>([\s\S]*?)<\/cim:BranchEndFlow.mVARFlow>/g, obj, "mVARFlow", base.to_float, sub, context);
            base.parse_element (/<cim:BranchEndFlow.normalRating>([\s\S]*?)<\/cim:BranchEndFlow.normalRating>/g, obj, "normalRating", base.to_float, sub, context);
            base.parse_element (/<cim:BranchEndFlow.longTermRating>([\s\S]*?)<\/cim:BranchEndFlow.longTermRating>/g, obj, "longTermRating", base.to_float, sub, context);
            base.parse_element (/<cim:BranchEndFlow.shortTermRating>([\s\S]*?)<\/cim:BranchEndFlow.shortTermRating>/g, obj, "shortTermRating", base.to_float, sub, context);
            base.parse_element (/<cim:BranchEndFlow.loadDumpRating>([\s\S]*?)<\/cim:BranchEndFlow.loadDumpRating>/g, obj, "loadDumpRating", base.to_float, sub, context);
            bucket = context.parsed.BranchEndFlow;
            if (null == bucket)
                context.parsed.BranchEndFlow = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_BranchEndFlow (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "BranchEndFlow", "mwFlow", base.from_float, fields);
            base.export_element (obj, "BranchEndFlow", "mVARFlow", base.from_float, fields);
            base.export_element (obj, "BranchEndFlow", "normalRating", base.from_float, fields);
            base.export_element (obj, "BranchEndFlow", "longTermRating", base.from_float, fields);
            base.export_element (obj, "BranchEndFlow", "shortTermRating", base.from_float, fields);
            base.export_element (obj, "BranchEndFlow", "loadDumpRating", base.from_float, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A profile is a simpler curve type.
         *
         */
        function parse_Profile (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Profile";
            bucket = context.parsed.Profile;
            if (null == bucket)
                context.parsed.Profile = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Profile (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Resource status at the end of a given clearing period.
         *
         */
        function parse_UnitInitialConditions (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "UnitInitialConditions";
            base.parse_element (/<cim:UnitInitialConditions.cumEnergy>([\s\S]*?)<\/cim:UnitInitialConditions.cumEnergy>/g, obj, "cumEnergy", base.to_string, sub, context);
            base.parse_element (/<cim:UnitInitialConditions.cumStatusChanges>([\s\S]*?)<\/cim:UnitInitialConditions.cumStatusChanges>/g, obj, "cumStatusChanges", base.to_string, sub, context);
            base.parse_element (/<cim:UnitInitialConditions.numberOfStartups>([\s\S]*?)<\/cim:UnitInitialConditions.numberOfStartups>/g, obj, "numberOfStartups", base.to_string, sub, context);
            base.parse_element (/<cim:UnitInitialConditions.onlineStatus>([\s\S]*?)<\/cim:UnitInitialConditions.onlineStatus>/g, obj, "onlineStatus", base.to_boolean, sub, context);
            base.parse_element (/<cim:UnitInitialConditions.resourceMW>([\s\S]*?)<\/cim:UnitInitialConditions.resourceMW>/g, obj, "resourceMW", base.to_string, sub, context);
            base.parse_element (/<cim:UnitInitialConditions.resourceStatus>([\s\S]*?)<\/cim:UnitInitialConditions.resourceStatus>/g, obj, "resourceStatus", base.to_string, sub, context);
            base.parse_element (/<cim:UnitInitialConditions.statusDate>([\s\S]*?)<\/cim:UnitInitialConditions.statusDate>/g, obj, "statusDate", base.to_datetime, sub, context);
            base.parse_element (/<cim:UnitInitialConditions.timeInStatus>([\s\S]*?)<\/cim:UnitInitialConditions.timeInStatus>/g, obj, "timeInStatus", base.to_float, sub, context);
            base.parse_element (/<cim:UnitInitialConditions.timeInterval>([\s\S]*?)<\/cim:UnitInitialConditions.timeInterval>/g, obj, "timeInterval", base.to_datetime, sub, context);
            base.parse_attribute (/<cim:UnitInitialConditions.GeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingUnit", sub, context);
            bucket = context.parsed.UnitInitialConditions;
            if (null == bucket)
                context.parsed.UnitInitialConditions = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_UnitInitialConditions (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "UnitInitialConditions", "cumEnergy", base.from_string, fields);
            base.export_element (obj, "UnitInitialConditions", "cumStatusChanges", base.from_string, fields);
            base.export_element (obj, "UnitInitialConditions", "numberOfStartups", base.from_string, fields);
            base.export_element (obj, "UnitInitialConditions", "onlineStatus", base.from_boolean, fields);
            base.export_element (obj, "UnitInitialConditions", "resourceMW", base.from_string, fields);
            base.export_element (obj, "UnitInitialConditions", "resourceStatus", base.from_string, fields);
            base.export_element (obj, "UnitInitialConditions", "statusDate", base.from_datetime, fields);
            base.export_element (obj, "UnitInitialConditions", "timeInStatus", base.from_float, fields);
            base.export_element (obj, "UnitInitialConditions", "timeInterval", base.from_datetime, fields);
            base.export_attribute (obj, "UnitInitialConditions", "GeneratingUnit", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Subclass of IEC61970:Wires:ShuntCompensator
         *
         */
        function parse_MktShuntCompensator (context, sub)
        {
            var obj;
            var bucket;

            obj = Wires.parse_ShuntCompensator (context, sub);
            obj.cls = "MktShuntCompensator";
            bucket = context.parsed.MktShuntCompensator;
            if (null == bucket)
                context.parsed.MktShuntCompensator = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MktShuntCompensator (obj, exporters, full)
        {
            var fields = exporters["ShuntCompensator"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Subclass of IEC61970:Meas:AnalogLimit
         *
         */
        function parse_MktAnalogLimit (context, sub)
        {
            var obj;
            var bucket;

            obj = Meas.parse_AnalogLimit (context, sub);
            obj.cls = "MktAnalogLimit";
            base.parse_element (/<cim:MktAnalogLimit.exceededLimit>([\s\S]*?)<\/cim:MktAnalogLimit.exceededLimit>/g, obj, "exceededLimit", base.to_boolean, sub, context);
            base.parse_element (/<cim:MktAnalogLimit.limitType>([\s\S]*?)<\/cim:MktAnalogLimit.limitType>/g, obj, "limitType", base.to_string, sub, context);
            bucket = context.parsed.MktAnalogLimit;
            if (null == bucket)
                context.parsed.MktAnalogLimit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MktAnalogLimit (obj, exporters, full)
        {
            var fields = exporters["AnalogLimit"](obj, exporters, false);

            base.export_element (obj, "MktAnalogLimit", "exceededLimit", base.from_boolean, fields);
            base.export_element (obj, "MktAnalogLimit", "limitType", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Subclass of IEC61970:Wires:SeriesCompensator
         *
         */
        function parse_MktSeriesCompensator (context, sub)
        {
            var obj;
            var bucket;

            obj = Wires.parse_SeriesCompensator (context, sub);
            obj.cls = "MktSeriesCompensator";
            base.parse_attribute (/<cim:MktSeriesCompensator.EndAFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndAFlow", sub, context);
            base.parse_attribute (/<cim:MktSeriesCompensator.EndBFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndBFlow", sub, context);
            bucket = context.parsed.MktSeriesCompensator;
            if (null == bucket)
                context.parsed.MktSeriesCompensator = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MktSeriesCompensator (obj, exporters, full)
        {
            var fields = exporters["SeriesCompensator"](obj, exporters, false);

            base.export_attribute (obj, "MktSeriesCompensator", "EndAFlow", fields);
            base.export_attribute (obj, "MktSeriesCompensator", "EndBFlow", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Indicates whether unit is eligible for treatment as a intermittent variable renewable resource
         *
         */
        function parse_IntermittentResourceEligibility (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketPlan.parse_MarketFactors (context, sub);
            obj.cls = "IntermittentResourceEligibility";
            base.parse_element (/<cim:IntermittentResourceEligibility.eligibilityStatus>([\s\S]*?)<\/cim:IntermittentResourceEligibility.eligibilityStatus>/g, obj, "eligibilityStatus", base.to_string, sub, context);
            base.parse_attribute (/<cim:IntermittentResourceEligibility.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
            bucket = context.parsed.IntermittentResourceEligibility;
            if (null == bucket)
                context.parsed.IntermittentResourceEligibility = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_IntermittentResourceEligibility (obj, exporters, full)
        {
            var fields = exporters["MarketFactors"](obj, exporters, false);

            base.export_element (obj, "IntermittentResourceEligibility", "eligibilityStatus", base.from_string, fields);
            base.export_attribute (obj, "IntermittentResourceEligibility", "RegisteredResource", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Optimal Power Flow or State Estimator Phase Shifter Data.
         *
         * This is used for RealTime, Study and Maintenance Users. SE Solution Phase Shifter Measurements from the last run of SE
         *
         */
        function parse_TapChangerDynamicData (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TapChangerDynamicData";
            base.parse_element (/<cim:TapChangerDynamicData.tapPosition>([\s\S]*?)<\/cim:TapChangerDynamicData.tapPosition>/g, obj, "tapPosition", base.to_float, sub, context);
            base.parse_element (/<cim:TapChangerDynamicData.desiredVoltage>([\s\S]*?)<\/cim:TapChangerDynamicData.desiredVoltage>/g, obj, "desiredVoltage", base.to_float, sub, context);
            base.parse_element (/<cim:TapChangerDynamicData.voltageRegulationStatus>([\s\S]*?)<\/cim:TapChangerDynamicData.voltageRegulationStatus>/g, obj, "voltageRegulationStatus", base.to_boolean, sub, context);
            base.parse_element (/<cim:TapChangerDynamicData.angleRegulationStatus>([\s\S]*?)<\/cim:TapChangerDynamicData.angleRegulationStatus>/g, obj, "angleRegulationStatus", base.to_boolean, sub, context);
            base.parse_element (/<cim:TapChangerDynamicData.desiredMW>([\s\S]*?)<\/cim:TapChangerDynamicData.desiredMW>/g, obj, "desiredMW", base.to_float, sub, context);
            base.parse_element (/<cim:TapChangerDynamicData.solvedAngle>([\s\S]*?)<\/cim:TapChangerDynamicData.solvedAngle>/g, obj, "solvedAngle", base.to_float, sub, context);
            base.parse_element (/<cim:TapChangerDynamicData.minimumAngle>([\s\S]*?)<\/cim:TapChangerDynamicData.minimumAngle>/g, obj, "minimumAngle", base.to_float, sub, context);
            base.parse_element (/<cim:TapChangerDynamicData.maximumAngle>([\s\S]*?)<\/cim:TapChangerDynamicData.maximumAngle>/g, obj, "maximumAngle", base.to_float, sub, context);
            base.parse_attribute (/<cim:TapChangerDynamicData.MktTapChanger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktTapChanger", sub, context);
            bucket = context.parsed.TapChangerDynamicData;
            if (null == bucket)
                context.parsed.TapChangerDynamicData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TapChangerDynamicData (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "TapChangerDynamicData", "tapPosition", base.from_float, fields);
            base.export_element (obj, "TapChangerDynamicData", "desiredVoltage", base.from_float, fields);
            base.export_element (obj, "TapChangerDynamicData", "voltageRegulationStatus", base.from_boolean, fields);
            base.export_element (obj, "TapChangerDynamicData", "angleRegulationStatus", base.from_boolean, fields);
            base.export_element (obj, "TapChangerDynamicData", "desiredMW", base.from_float, fields);
            base.export_element (obj, "TapChangerDynamicData", "solvedAngle", base.from_float, fields);
            base.export_element (obj, "TapChangerDynamicData", "minimumAngle", base.from_float, fields);
            base.export_element (obj, "TapChangerDynamicData", "maximumAngle", base.from_float, fields);
            base.export_attribute (obj, "TapChangerDynamicData", "MktTapChanger", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * This class models the load distribution factors.
         *
         * This class should be used in one of two ways:
         *
         */
        function parse_LoadDistributionFactor (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "LoadDistributionFactor";
            base.parse_element (/<cim:LoadDistributionFactor.pDistFactor>([\s\S]*?)<\/cim:LoadDistributionFactor.pDistFactor>/g, obj, "pDistFactor", base.to_float, sub, context);
            base.parse_element (/<cim:LoadDistributionFactor.qDistFactor>([\s\S]*?)<\/cim:LoadDistributionFactor.qDistFactor>/g, obj, "qDistFactor", base.to_float, sub, context);
            base.parse_attribute (/<cim:LoadDistributionFactor.IndividualPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "IndividualPnode", sub, context);
            base.parse_attribute (/<cim:LoadDistributionFactor.AggregatedPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AggregatedPnode", sub, context);
            bucket = context.parsed.LoadDistributionFactor;
            if (null == bucket)
                context.parsed.LoadDistributionFactor = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_LoadDistributionFactor (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "LoadDistributionFactor", "pDistFactor", base.from_float, fields);
            base.export_element (obj, "LoadDistributionFactor", "qDistFactor", base.from_float, fields);
            base.export_attribute (obj, "LoadDistributionFactor", "IndividualPnode", fields);
            base.export_attribute (obj, "LoadDistributionFactor", "AggregatedPnode", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The defined termination points of a transmission path (down to distribution level or to a customer - generation or consumption or both).
         *
         * Service points are defined from the viewpoint of the transmission service. Each service point is contained within (or on the boundary of) an interchange area. A service point is source or destination of a transaction.
         *
         */
        function parse_ServicePoint (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ServicePoint";
            bucket = context.parsed.ServicePoint;
            if (null == bucket)
                context.parsed.ServicePoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ServicePoint (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Existing Transmission Contract data for an interchange schedule
         *
         */
        function parse_InterchangeETCData (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "InterchangeETCData";
            base.parse_element (/<cim:InterchangeETCData.contractNumber>([\s\S]*?)<\/cim:InterchangeETCData.contractNumber>/g, obj, "contractNumber", base.to_string, sub, context);
            base.parse_element (/<cim:InterchangeETCData.usageMW>([\s\S]*?)<\/cim:InterchangeETCData.usageMW>/g, obj, "usageMW", base.to_float, sub, context);
            base.parse_attribute (/<cim:InterchangeETCData.InterchangeSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InterchangeSchedule", sub, context);
            bucket = context.parsed.InterchangeETCData;
            if (null == bucket)
                context.parsed.InterchangeETCData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_InterchangeETCData (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "InterchangeETCData", "contractNumber", base.from_string, fields);
            base.export_element (obj, "InterchangeETCData", "usageMW", base.from_float, fields);
            base.export_attribute (obj, "InterchangeETCData", "InterchangeSchedule", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * This class models the system distribution factors.
         *
         * This class needs to be used along with the HostControlArea and the ConnectivityNode to show the distribution of each individual party.
         *
         */
        function parse_SysLoadDistributionFactor (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SysLoadDistributionFactor";
            base.parse_element (/<cim:SysLoadDistributionFactor.factor>([\s\S]*?)<\/cim:SysLoadDistributionFactor.factor>/g, obj, "factor", base.to_float, sub, context);
            base.parse_attribute (/<cim:SysLoadDistributionFactor.HostControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HostControlArea", sub, context);
            base.parse_attribute (/<cim:SysLoadDistributionFactor.MktConnectivityNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktConnectivityNode", sub, context);
            bucket = context.parsed.SysLoadDistributionFactor;
            if (null == bucket)
                context.parsed.SysLoadDistributionFactor = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SysLoadDistributionFactor (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "SysLoadDistributionFactor", "factor", base.from_float, fields);
            base.export_attribute (obj, "SysLoadDistributionFactor", "HostControlArea", fields);
            base.export_attribute (obj, "SysLoadDistributionFactor", "MktConnectivityNode", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Specifies the schedule for energy transfers between interchange areas that are necessary to satisfy the associated interchange transaction.
         *
         */
        function parse_EnergyTransaction (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "EnergyTransaction";
            base.parse_element (/<cim:EnergyTransaction.capacityBacked>([\s\S]*?)<\/cim:EnergyTransaction.capacityBacked>/g, obj, "capacityBacked", base.to_boolean, sub, context);
            base.parse_element (/<cim:EnergyTransaction.congestChargeMax>([\s\S]*?)<\/cim:EnergyTransaction.congestChargeMax>/g, obj, "congestChargeMax", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyTransaction.deliveryPointP>([\s\S]*?)<\/cim:EnergyTransaction.deliveryPointP>/g, obj, "deliveryPointP", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyTransaction.energyMin>([\s\S]*?)<\/cim:EnergyTransaction.energyMin>/g, obj, "energyMin", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyTransaction.firmInterchangeFlag>([\s\S]*?)<\/cim:EnergyTransaction.firmInterchangeFlag>/g, obj, "firmInterchangeFlag", base.to_boolean, sub, context);
            base.parse_element (/<cim:EnergyTransaction.payCongestion>([\s\S]*?)<\/cim:EnergyTransaction.payCongestion>/g, obj, "payCongestion", base.to_boolean, sub, context);
            base.parse_element (/<cim:EnergyTransaction.reason>([\s\S]*?)<\/cim:EnergyTransaction.reason>/g, obj, "reason", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyTransaction.receiptPointP>([\s\S]*?)<\/cim:EnergyTransaction.receiptPointP>/g, obj, "receiptPointP", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyTransaction.state>([\s\S]*?)<\/cim:EnergyTransaction.state>/g, obj, "state", base.to_string, sub, context);
            base.parse_attribute (/<cim:EnergyTransaction.EnergyProduct\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyProduct", sub, context);
            base.parse_attribute (/<cim:EnergyTransaction.TransmissionReservation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionReservation", sub, context);
            base.parse_attribute (/<cim:EnergyTransaction.Export_SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Export_SubControlArea", sub, context);
            base.parse_attribute (/<cim:EnergyTransaction.Import_SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Import_SubControlArea", sub, context);
            bucket = context.parsed.EnergyTransaction;
            if (null == bucket)
                context.parsed.EnergyTransaction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_EnergyTransaction (obj, exporters, full)
        {
            var fields = exporters["Document"](obj, exporters, false);

            base.export_element (obj, "EnergyTransaction", "capacityBacked", base.from_boolean, fields);
            base.export_element (obj, "EnergyTransaction", "congestChargeMax", base.from_string, fields);
            base.export_element (obj, "EnergyTransaction", "deliveryPointP", base.from_string, fields);
            base.export_element (obj, "EnergyTransaction", "energyMin", base.from_string, fields);
            base.export_element (obj, "EnergyTransaction", "firmInterchangeFlag", base.from_boolean, fields);
            base.export_element (obj, "EnergyTransaction", "payCongestion", base.from_boolean, fields);
            base.export_element (obj, "EnergyTransaction", "reason", base.from_string, fields);
            base.export_element (obj, "EnergyTransaction", "receiptPointP", base.from_string, fields);
            base.export_element (obj, "EnergyTransaction", "state", base.from_string, fields);
            base.export_attribute (obj, "EnergyTransaction", "EnergyProduct", fields);
            base.export_attribute (obj, "EnergyTransaction", "TransmissionReservation", fields);
            base.export_attribute (obj, "EnergyTransaction", "Export_SubControlArea", fields);
            base.export_attribute (obj, "EnergyTransaction", "Import_SubControlArea", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Optimal Power Flow or State Estimator Load Data for OTS.
         *
         * This is used for RealTime, Study and Maintenance Users
         *
         */
        function parse_EnergyConsumerData (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "EnergyConsumerData";
            base.parse_element (/<cim:EnergyConsumerData.loadMVAR>([\s\S]*?)<\/cim:EnergyConsumerData.loadMVAR>/g, obj, "loadMVAR", base.to_float, sub, context);
            base.parse_element (/<cim:EnergyConsumerData.loadMW>([\s\S]*?)<\/cim:EnergyConsumerData.loadMW>/g, obj, "loadMW", base.to_float, sub, context);
            base.parse_attribute (/<cim:EnergyConsumerData.MktEnergyConsumer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktEnergyConsumer", sub, context);
            bucket = context.parsed.EnergyConsumerData;
            if (null == bucket)
                context.parsed.EnergyConsumerData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_EnergyConsumerData (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "EnergyConsumerData", "loadMVAR", base.from_float, fields);
            base.export_element (obj, "EnergyConsumerData", "loadMW", base.from_float, fields);
            base.export_attribute (obj, "EnergyConsumerData", "MktEnergyConsumer", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Typical for regional transmission operators (RTOs), these constraints include transmission as well as generation group constraints identified in both base case and critical contingency cases.
         *
         */
        function parse_SecurityConstraints (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "SecurityConstraints";
            base.parse_element (/<cim:SecurityConstraints.minMW>([\s\S]*?)<\/cim:SecurityConstraints.minMW>/g, obj, "minMW", base.to_string, sub, context);
            base.parse_element (/<cim:SecurityConstraints.maxMW>([\s\S]*?)<\/cim:SecurityConstraints.maxMW>/g, obj, "maxMW", base.to_string, sub, context);
            base.parse_element (/<cim:SecurityConstraints.actualMW>([\s\S]*?)<\/cim:SecurityConstraints.actualMW>/g, obj, "actualMW", base.to_string, sub, context);
            base.parse_attribute (/<cim:SecurityConstraints.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);
            base.parse_attribute (/<cim:SecurityConstraints.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
            base.parse_attribute (/<cim:SecurityConstraints.GeneratingBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingBid", sub, context);
            bucket = context.parsed.SecurityConstraints;
            if (null == bucket)
                context.parsed.SecurityConstraints = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SecurityConstraints (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "SecurityConstraints", "minMW", base.from_string, fields);
            base.export_element (obj, "SecurityConstraints", "maxMW", base.from_string, fields);
            base.export_element (obj, "SecurityConstraints", "actualMW", base.from_string, fields);
            base.export_attribute (obj, "SecurityConstraints", "RTO", fields);
            base.export_attribute (obj, "SecurityConstraints", "Flowgate", fields);
            base.export_attribute (obj, "SecurityConstraints", "GeneratingBid", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Typically provided by RTO systems, constraints identified in both base case and critical contingency cases have to be transferred.
         *
         * A constraint has N (&gt;=1) constraint terms. A term is represented by an
         *
         */
        function parse_SecurityConstraintSum (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketPlan.parse_MarketFactors (context, sub);
            obj.cls = "SecurityConstraintSum";
            base.parse_attribute (/<cim:SecurityConstraintSum.DefaultConstraintLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DefaultConstraintLimit", sub, context);
            base.parse_attribute (/<cim:SecurityConstraintSum.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);
            base.parse_attribute (/<cim:SecurityConstraintSum.BaseCaseConstraintLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BaseCaseConstraintLimit", sub, context);
            bucket = context.parsed.SecurityConstraintSum;
            if (null == bucket)
                context.parsed.SecurityConstraintSum = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SecurityConstraintSum (obj, exporters, full)
        {
            var fields = exporters["MarketFactors"](obj, exporters, false);

            base.export_attribute (obj, "SecurityConstraintSum", "DefaultConstraintLimit", fields);
            base.export_attribute (obj, "SecurityConstraintSum", "RTO", fields);
            base.export_attribute (obj, "SecurityConstraintSum", "BaseCaseConstraintLimit", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Maximum MW and optionally Minimum MW (Y1 and Y2, respectively)
         *
         */
        function parse_MWLimitSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MWLimitSchedule";
            base.parse_attribute (/<cim:MWLimitSchedule.SecurityConstraintLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SecurityConstraintLimit", sub, context);
            bucket = context.parsed.MWLimitSchedule;
            if (null == bucket)
                context.parsed.MWLimitSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MWLimitSchedule (obj, exporters, full)
        {
            var fields = [];

            base.export_attribute (obj, "MWLimitSchedule", "SecurityConstraintLimit", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Area load curve definition.
         *
         */
        function parse_AreaLoadCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_RegularIntervalSchedule (context, sub);
            obj.cls = "AreaLoadCurve";
            base.parse_element (/<cim:AreaLoadCurve.forecastType>([\s\S]*?)<\/cim:AreaLoadCurve.forecastType>/g, obj, "forecastType", base.to_string, sub, context);
            base.parse_attribute (/<cim:AreaLoadCurve.AggregateNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AggregateNode", sub, context);
            base.parse_attribute (/<cim:AreaLoadCurve.TACArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TACArea", sub, context);
            base.parse_attribute (/<cim:AreaLoadCurve.MktLoadArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktLoadArea", sub, context);
            bucket = context.parsed.AreaLoadCurve;
            if (null == bucket)
                context.parsed.AreaLoadCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AreaLoadCurve (obj, exporters, full)
        {
            var fields = exporters["RegularIntervalSchedule"](obj, exporters, false);

            base.export_element (obj, "AreaLoadCurve", "forecastType", base.from_string, fields);
            base.export_attribute (obj, "AreaLoadCurve", "AggregateNode", fields);
            base.export_attribute (obj, "AreaLoadCurve", "TACArea", fields);
            base.export_attribute (obj, "AreaLoadCurve", "MktLoadArea", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Reserve demand curve.
         *
         * Models maximum quantities of reserve required per Market Region and models a reserve demand curve for the minimum quantities of reserve. The ReserveDemandCurve is a relationship between unit operating reserve price in \$/MWhr (Y-axis) and unit reserves in MW (X-axis).
         *
         */
        function parse_ReserveDemandCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "ReserveDemandCurve";
            base.parse_element (/<cim:ReserveDemandCurve.reqMaxMW>([\s\S]*?)<\/cim:ReserveDemandCurve.reqMaxMW>/g, obj, "reqMaxMW", base.to_float, sub, context);
            base.parse_element (/<cim:ReserveDemandCurve.reserveRequirementType>([\s\S]*?)<\/cim:ReserveDemandCurve.reserveRequirementType>/g, obj, "reserveRequirementType", base.to_string, sub, context);
            base.parse_attribute (/<cim:ReserveDemandCurve.ASRequirements\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ASRequirements", sub, context);
            base.parse_attribute (/<cim:ReserveDemandCurve.MarketRegion\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketRegion", sub, context);
            bucket = context.parsed.ReserveDemandCurve;
            if (null == bucket)
                context.parsed.ReserveDemandCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ReserveDemandCurve (obj, exporters, full)
        {
            var fields = exporters["Curve"](obj, exporters, false);

            base.export_element (obj, "ReserveDemandCurve", "reqMaxMW", base.from_float, fields);
            base.export_element (obj, "ReserveDemandCurve", "reserveRequirementType", base.from_string, fields);
            base.export_attribute (obj, "ReserveDemandCurve", "ASRequirements", fields);
            base.export_attribute (obj, "ReserveDemandCurve", "MarketRegion", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Contains information about the update from SCADA
         *
         */
        function parse_SCADAInformation (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SCADAInformation";
            base.parse_element (/<cim:SCADAInformation.timeStamp>([\s\S]*?)<\/cim:SCADAInformation.timeStamp>/g, obj, "timeStamp", base.to_datetime, sub, context);
            bucket = context.parsed.SCADAInformation;
            if (null == bucket)
                context.parsed.SCADAInformation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SCADAInformation (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "SCADAInformation", "timeStamp", base.from_datetime, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Optimal Power Flow or State Estimator Circuit Breaker Status.
         *
         */
        function parse_SwitchStatus (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SwitchStatus";
            base.parse_element (/<cim:SwitchStatus.switchStatus>([\s\S]*?)<\/cim:SwitchStatus.switchStatus>/g, obj, "switchStatus", base.to_string, sub, context);
            base.parse_attribute (/<cim:SwitchStatus.MktSwitch\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktSwitch", sub, context);
            bucket = context.parsed.SwitchStatus;
            if (null == bucket)
                context.parsed.SwitchStatus = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SwitchStatus (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "SwitchStatus", "switchStatus", base.from_string, fields);
            base.export_attribute (obj, "SwitchStatus", "MktSwitch", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A constraint term associated with a specific terminal on a physical piece of equipment.
         *
         */
        function parse_TerminalConstraintTerm (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ConstraintTerm (context, sub);
            obj.cls = "TerminalConstraintTerm";
            base.parse_attribute (/<cim:TerminalConstraintTerm.MktTerminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktTerminal", sub, context);
            bucket = context.parsed.TerminalConstraintTerm;
            if (null == bucket)
                context.parsed.TerminalConstraintTerm = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TerminalConstraintTerm (obj, exporters, full)
        {
            var fields = exporters["ConstraintTerm"](obj, exporters, false);

            base.export_attribute (obj, "TerminalConstraintTerm", "MktTerminal", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Data for profile.
         *
         */
        function parse_ProfileData (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ProfileData";
            base.parse_element (/<cim:ProfileData.bidPrice>([\s\S]*?)<\/cim:ProfileData.bidPrice>/g, obj, "bidPrice", base.to_float, sub, context);
            base.parse_element (/<cim:ProfileData.capacityLevel>([\s\S]*?)<\/cim:ProfileData.capacityLevel>/g, obj, "capacityLevel", base.to_string, sub, context);
            base.parse_element (/<cim:ProfileData.energyLevel>([\s\S]*?)<\/cim:ProfileData.energyLevel>/g, obj, "energyLevel", base.to_string, sub, context);
            base.parse_element (/<cim:ProfileData.minimumLevel>([\s\S]*?)<\/cim:ProfileData.minimumLevel>/g, obj, "minimumLevel", base.to_float, sub, context);
            base.parse_element (/<cim:ProfileData.sequenceNumber>([\s\S]*?)<\/cim:ProfileData.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
            base.parse_element (/<cim:ProfileData.startDateTime>([\s\S]*?)<\/cim:ProfileData.startDateTime>/g, obj, "startDateTime", base.to_datetime, sub, context);
            base.parse_element (/<cim:ProfileData.stopDateTime>([\s\S]*?)<\/cim:ProfileData.stopDateTime>/g, obj, "stopDateTime", base.to_datetime, sub, context);
            bucket = context.parsed.ProfileData;
            if (null == bucket)
                context.parsed.ProfileData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ProfileData (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ProfileData", "bidPrice", base.from_float, fields);
            base.export_element (obj, "ProfileData", "capacityLevel", base.from_string, fields);
            base.export_element (obj, "ProfileData", "energyLevel", base.from_string, fields);
            base.export_element (obj, "ProfileData", "minimumLevel", base.from_float, fields);
            base.export_element (obj, "ProfileData", "sequenceNumber", base.from_string, fields);
            base.export_element (obj, "ProfileData", "startDateTime", base.from_datetime, fields);
            base.export_element (obj, "ProfileData", "stopDateTime", base.from_datetime, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Curve data for default bid curve and startup cost curve.
         *
         */
        function parse_DefaultBidCurveData (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_CurveData (context, sub);
            obj.cls = "DefaultBidCurveData";
            base.parse_element (/<cim:DefaultBidCurveData.bidSegmentCalcType>([\s\S]*?)<\/cim:DefaultBidCurveData.bidSegmentCalcType>/g, obj, "bidSegmentCalcType", base.to_string, sub, context);
            bucket = context.parsed.DefaultBidCurveData;
            if (null == bucket)
                context.parsed.DefaultBidCurveData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_DefaultBidCurveData (obj, exporters, full)
        {
            var fields = exporters["CurveData"](obj, exporters, false);

            base.export_element (obj, "DefaultBidCurveData", "bidSegmentCalcType", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Subclass of IEC61970:Wires:Switch
         *
         */
        function parse_MktSwitch (context, sub)
        {
            var obj;
            var bucket;

            obj = Wires.parse_Switch (context, sub);
            obj.cls = "MktSwitch";
            bucket = context.parsed.MktSwitch;
            if (null == bucket)
                context.parsed.MktSwitch = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MktSwitch (obj, exporters, full)
        {
            var fields = exporters["Switch"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Possibly time-varying max MW or MVA and optionally Min MW limit or MVA limit (Y1 and Y2, respectively) assigned to a contingency analysis base case.
         *
         * Use CurveSchedule XAxisUnits to specify MW or MVA. To be used only if the BaseCaseConstraintLimit differs from the DefaultConstraintLimit.
         *
         */
        function parse_BaseCaseConstraintLimit (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "BaseCaseConstraintLimit";
            base.parse_attribute (/<cim:BaseCaseConstraintLimit.SecurityConstraintSum\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SecurityConstraintSum", sub, context);
            bucket = context.parsed.BaseCaseConstraintLimit;
            if (null == bucket)
                context.parsed.BaseCaseConstraintLimit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_BaseCaseConstraintLimit (obj, exporters, full)
        {
            var fields = exporters["Curve"](obj, exporters, false);

            base.export_attribute (obj, "BaseCaseConstraintLimit", "SecurityConstraintSum", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Measurement quality flags for Discrete Values.
         *
         */
        function parse_DiscreteMeasurementValueQuality (context, sub)
        {
            var obj;
            var bucket;

            obj = Meas.parse_MeasurementValueQuality (context, sub);
            obj.cls = "DiscreteMeasurementValueQuality";
            base.parse_element (/<cim:DiscreteMeasurementValueQuality.manualReplaceIndicator>([\s\S]*?)<\/cim:DiscreteMeasurementValueQuality.manualReplaceIndicator>/g, obj, "manualReplaceIndicator", base.to_boolean, sub, context);
            base.parse_element (/<cim:DiscreteMeasurementValueQuality.removeFromOperationIndicator>([\s\S]*?)<\/cim:DiscreteMeasurementValueQuality.removeFromOperationIndicator>/g, obj, "removeFromOperationIndicator", base.to_boolean, sub, context);
            base.parse_attribute (/<cim:DiscreteMeasurementValueQuality.MktDiscreteValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktDiscreteValue", sub, context);
            bucket = context.parsed.DiscreteMeasurementValueQuality;
            if (null == bucket)
                context.parsed.DiscreteMeasurementValueQuality = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_DiscreteMeasurementValueQuality (obj, exporters, full)
        {
            var fields = exporters["MeasurementValueQuality"](obj, exporters, false);

            base.export_element (obj, "DiscreteMeasurementValueQuality", "manualReplaceIndicator", base.from_boolean, fields);
            base.export_element (obj, "DiscreteMeasurementValueQuality", "removeFromOperationIndicator", base.from_boolean, fields);
            base.export_attribute (obj, "DiscreteMeasurementValueQuality", "MktDiscreteValue", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Subclass of IEC61970:Wires:TapChanger
         *
         */
        function parse_MktTapChanger (context, sub)
        {
            var obj;
            var bucket;

            obj = Wires.parse_TapChanger (context, sub);
            obj.cls = "MktTapChanger";
            bucket = context.parsed.MktTapChanger;
            if (null == bucket)
                context.parsed.MktTapChanger = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MktTapChanger (obj, exporters, full)
        {
            var fields = exporters["TapChanger"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * DefaultBid is a generic class to hold Default Energy Bid, Default Startup Bid, and Default Minimum Load Bid:
         * 
         * Default Energy Bid
         * A Default Energy Bid is a monotonically increasing staircase function consisting at maximum 10 economic bid segments, or 10 (\$/MW, MW) pairs.
         *
         * There are three methods for determining the Default Energy Bid:
         *
         */
        function parse_DefaultBid (context, sub)
        {
            var obj;
            var bucket;

            obj = ParticipantInterfaces.parse_Bid (context, sub);
            obj.cls = "DefaultBid";
            base.parse_element (/<cim:DefaultBid.bidType>([\s\S]*?)<\/cim:DefaultBid.bidType>/g, obj, "bidType", base.to_string, sub, context);
            base.parse_element (/<cim:DefaultBid.minLoadCost>([\s\S]*?)<\/cim:DefaultBid.minLoadCost>/g, obj, "minLoadCost", base.to_string, sub, context);
            base.parse_element (/<cim:DefaultBid.peakFlag>([\s\S]*?)<\/cim:DefaultBid.peakFlag>/g, obj, "peakFlag", base.to_string, sub, context);
            base.parse_attribute (/<cim:DefaultBid.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
            base.parse_attribute (/<cim:DefaultBid.DefaultBidCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DefaultBidCurve", sub, context);
            bucket = context.parsed.DefaultBid;
            if (null == bucket)
                context.parsed.DefaultBid = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_DefaultBid (obj, exporters, full)
        {
            var fields = exporters["Bid"](obj, exporters, false);

            base.export_element (obj, "DefaultBid", "bidType", base.from_string, fields);
            base.export_element (obj, "DefaultBid", "minLoadCost", base.from_string, fields);
            base.export_element (obj, "DefaultBid", "peakFlag", base.from_string, fields);
            base.export_attribute (obj, "DefaultBid", "RegisteredResource", fields);
            base.export_attribute (obj, "DefaultBid", "DefaultBidCurve", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * This class models the generation distribution factors.
         *
         * This class needs to be used along with the AggregatedPnode and the IndividualPnode to show the distriubtion of each individual party.
         *
         */
        function parse_GenDistributionFactor (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "GenDistributionFactor";
            base.parse_element (/<cim:GenDistributionFactor.factor>([\s\S]*?)<\/cim:GenDistributionFactor.factor>/g, obj, "factor", base.to_float, sub, context);
            base.parse_attribute (/<cim:GenDistributionFactor.AggregatedPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AggregatedPnode", sub, context);
            base.parse_attribute (/<cim:GenDistributionFactor.IndividualPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "IndividualPnode", sub, context);
            bucket = context.parsed.GenDistributionFactor;
            if (null == bucket)
                context.parsed.GenDistributionFactor = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GenDistributionFactor (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "GenDistributionFactor", "factor", base.from_float, fields);
            base.export_attribute (obj, "GenDistributionFactor", "AggregatedPnode", fields);
            base.export_attribute (obj, "GenDistributionFactor", "IndividualPnode", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Specifies the start time, stop time, level for an EnergyTransaction.
         *
         */
        function parse_EnergyProfile (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Profile (context, sub);
            obj.cls = "EnergyProfile";
            base.parse_attribute (/<cim:EnergyProfile.EnergyTransaction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyTransaction", sub, context);
            base.parse_attribute (/<cim:EnergyProfile.TransactionBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransactionBid", sub, context);
            bucket = context.parsed.EnergyProfile;
            if (null == bucket)
                context.parsed.EnergyProfile = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_EnergyProfile (obj, exporters, full)
        {
            var fields = exporters["Profile"](obj, exporters, false);

            base.export_attribute (obj, "EnergyProfile", "EnergyTransaction", fields);
            base.export_attribute (obj, "EnergyProfile", "TransactionBid", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Subclass of IEC61970:Meas:AnalogLimitSet
         *
         */
        function parse_MktAnalogLimitSet (context, sub)
        {
            var obj;
            var bucket;

            obj = Meas.parse_AnalogLimitSet (context, sub);
            obj.cls = "MktAnalogLimitSet";
            base.parse_element (/<cim:MktAnalogLimitSet.ratingSet>([\s\S]*?)<\/cim:MktAnalogLimitSet.ratingSet>/g, obj, "ratingSet", base.to_string, sub, context);
            bucket = context.parsed.MktAnalogLimitSet;
            if (null == bucket)
                context.parsed.MktAnalogLimitSet = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MktAnalogLimitSet (obj, exporters, full)
        {
            var fields = exporters["AnalogLimitSet"](obj, exporters, false);

            base.export_element (obj, "MktAnalogLimitSet", "ratingSet", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Subclass of IEC61970:Wires:ACLineSegment
         *
         */
        function parse_MktACLineSegment (context, sub)
        {
            var obj;
            var bucket;

            obj = Wires.parse_ACLineSegment (context, sub);
            obj.cls = "MktACLineSegment";
            base.parse_attribute (/<cim:MktACLineSegment.EndAFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndAFlow", sub, context);
            base.parse_attribute (/<cim:MktACLineSegment.EndBFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndBFlow", sub, context);
            bucket = context.parsed.MktACLineSegment;
            if (null == bucket)
                context.parsed.MktACLineSegment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MktACLineSegment (obj, exporters, full)
        {
            var fields = exporters["ACLineSegment"](obj, exporters, false);

            base.export_attribute (obj, "MktACLineSegment", "EndAFlow", fields);
            base.export_attribute (obj, "MktACLineSegment", "EndBFlow", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A containing class that groups all the distribution factors within a market.
         *
         * This is calculated daily for DA factors and hourly for RT factors.
         *
         */
        function parse_DistributionFactorSet (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "DistributionFactorSet";
            base.parse_element (/<cim:DistributionFactorSet.intervalStartTime>([\s\S]*?)<\/cim:DistributionFactorSet.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);
            base.parse_element (/<cim:DistributionFactorSet.intervalEndTime>([\s\S]*?)<\/cim:DistributionFactorSet.intervalEndTime>/g, obj, "intervalEndTime", base.to_datetime, sub, context);
            base.parse_element (/<cim:DistributionFactorSet.marketType>([\s\S]*?)<\/cim:DistributionFactorSet.marketType>/g, obj, "marketType", base.to_string, sub, context);
            bucket = context.parsed.DistributionFactorSet;
            if (null == bucket)
                context.parsed.DistributionFactorSet = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_DistributionFactorSet (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "DistributionFactorSet", "intervalStartTime", base.from_datetime, fields);
            base.export_element (obj, "DistributionFactorSet", "intervalEndTime", base.from_datetime, fields);
            base.export_element (obj, "DistributionFactorSet", "marketType", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A Transfer Interface is made up of branches such as transmission lines and transformers.
         *
         */
        function parse_TransferInterface (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TransferInterface";
            base.parse_attribute (/<cim:TransferInterface.TransferInterfaceSolution\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransferInterfaceSolution", sub, context);
            base.parse_attribute (/<cim:TransferInterface.HostControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HostControlArea", sub, context);
            bucket = context.parsed.TransferInterface;
            if (null == bucket)
                context.parsed.TransferInterface = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TransferInterface (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_attribute (obj, "TransferInterface", "TransferInterfaceSolution", fields);
            base.export_attribute (obj, "TransferInterface", "HostControlArea", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Generic constraints can represent secure areas, voltage profile, transient stability and voltage collapse limits.
         *
         * The generic constraints can be one of the following forms:
         *
         */
        function parse_GenericConstraints (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "GenericConstraints";
            base.parse_element (/<cim:GenericConstraints.intervalEndTime>([\s\S]*?)<\/cim:GenericConstraints.intervalEndTime>/g, obj, "intervalEndTime", base.to_datetime, sub, context);
            base.parse_element (/<cim:GenericConstraints.intervalStartTime>([\s\S]*?)<\/cim:GenericConstraints.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);
            base.parse_element (/<cim:GenericConstraints.maxLimit>([\s\S]*?)<\/cim:GenericConstraints.maxLimit>/g, obj, "maxLimit", base.to_float, sub, context);
            base.parse_element (/<cim:GenericConstraints.minLimit>([\s\S]*?)<\/cim:GenericConstraints.minLimit>/g, obj, "minLimit", base.to_float, sub, context);
            bucket = context.parsed.GenericConstraints;
            if (null == bucket)
                context.parsed.GenericConstraints = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GenericConstraints (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "GenericConstraints", "intervalEndTime", base.from_datetime, fields);
            base.export_element (obj, "GenericConstraints", "intervalStartTime", base.from_datetime, fields);
            base.export_element (obj, "GenericConstraints", "maxLimit", base.from_float, fields);
            base.export_element (obj, "GenericConstraints", "minLimit", base.from_float, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * This is formally called the branch group ETC/TOR entitlement with the inclusion of CVR as ETC.
         *
         * Is used to represent the entitlements. This could be also used to represent the TR entitlement on a POR/POD.
         *
         */
        function parse_TransmissionInterfaceRightEntitlement (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TransmissionInterfaceRightEntitlement";
            base.parse_element (/<cim:TransmissionInterfaceRightEntitlement.entitlement>([\s\S]*?)<\/cim:TransmissionInterfaceRightEntitlement.entitlement>/g, obj, "entitlement", base.to_float, sub, context);
            base.parse_element (/<cim:TransmissionInterfaceRightEntitlement.POD>([\s\S]*?)<\/cim:TransmissionInterfaceRightEntitlement.POD>/g, obj, "POD", base.to_string, sub, context);
            base.parse_element (/<cim:TransmissionInterfaceRightEntitlement.POR>([\s\S]*?)<\/cim:TransmissionInterfaceRightEntitlement.POR>/g, obj, "POR", base.to_string, sub, context);
            base.parse_element (/<cim:TransmissionInterfaceRightEntitlement.startOperatingDate>([\s\S]*?)<\/cim:TransmissionInterfaceRightEntitlement.startOperatingDate>/g, obj, "startOperatingDate", base.to_datetime, sub, context);
            base.parse_attribute (/<cim:TransmissionInterfaceRightEntitlement.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
            base.parse_attribute (/<cim:TransmissionInterfaceRightEntitlement.ContractRight\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ContractRight", sub, context);
            bucket = context.parsed.TransmissionInterfaceRightEntitlement;
            if (null == bucket)
                context.parsed.TransmissionInterfaceRightEntitlement = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TransmissionInterfaceRightEntitlement (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "TransmissionInterfaceRightEntitlement", "entitlement", base.from_float, fields);
            base.export_element (obj, "TransmissionInterfaceRightEntitlement", "POD", base.from_string, fields);
            base.export_element (obj, "TransmissionInterfaceRightEntitlement", "POR", base.from_string, fields);
            base.export_element (obj, "TransmissionInterfaceRightEntitlement", "startOperatingDate", base.from_datetime, fields);
            base.export_attribute (obj, "TransmissionInterfaceRightEntitlement", "Flowgate", fields);
            base.export_attribute (obj, "TransmissionInterfaceRightEntitlement", "ContractRight", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * State Estimator Solution Pool Interchange and Losses
         *
         */
        function parse_ControlAreaSolutionData (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ControlAreaSolutionData";
            base.parse_element (/<cim:ControlAreaSolutionData.solvedLosses>([\s\S]*?)<\/cim:ControlAreaSolutionData.solvedLosses>/g, obj, "solvedLosses", base.to_float, sub, context);
            base.parse_element (/<cim:ControlAreaSolutionData.solvedInterchange>([\s\S]*?)<\/cim:ControlAreaSolutionData.solvedInterchange>/g, obj, "solvedInterchange", base.to_float, sub, context);
            base.parse_attribute (/<cim:ControlAreaSolutionData.MktControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktControlArea", sub, context);
            bucket = context.parsed.ControlAreaSolutionData;
            if (null == bucket)
                context.parsed.ControlAreaSolutionData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ControlAreaSolutionData (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ControlAreaSolutionData", "solvedLosses", base.from_float, fields);
            base.export_element (obj, "ControlAreaSolutionData", "solvedInterchange", base.from_float, fields);
            base.export_attribute (obj, "ControlAreaSolutionData", "MktControlArea", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Interchange schedule class to hold information for interchange schedules such as import export type, energy type, and etc.
         *
         */
        function parse_InterchangeSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "InterchangeSchedule";
            base.parse_element (/<cim:InterchangeSchedule.checkOutType>([\s\S]*?)<\/cim:InterchangeSchedule.checkOutType>/g, obj, "checkOutType", base.to_string, sub, context);
            base.parse_element (/<cim:InterchangeSchedule.directionType>([\s\S]*?)<\/cim:InterchangeSchedule.directionType>/g, obj, "directionType", base.to_string, sub, context);
            base.parse_element (/<cim:InterchangeSchedule.energyType>([\s\S]*?)<\/cim:InterchangeSchedule.energyType>/g, obj, "energyType", base.to_string, sub, context);
            base.parse_element (/<cim:InterchangeSchedule.intervalLength>([\s\S]*?)<\/cim:InterchangeSchedule.intervalLength>/g, obj, "intervalLength", base.to_string, sub, context);
            base.parse_element (/<cim:InterchangeSchedule.marketType>([\s\S]*?)<\/cim:InterchangeSchedule.marketType>/g, obj, "marketType", base.to_string, sub, context);
            base.parse_element (/<cim:InterchangeSchedule.operatingDate>([\s\S]*?)<\/cim:InterchangeSchedule.operatingDate>/g, obj, "operatingDate", base.to_datetime, sub, context);
            base.parse_element (/<cim:InterchangeSchedule.outOfMarketType>([\s\S]*?)<\/cim:InterchangeSchedule.outOfMarketType>/g, obj, "outOfMarketType", base.to_boolean, sub, context);
            base.parse_element (/<cim:InterchangeSchedule.scheduleType>([\s\S]*?)<\/cim:InterchangeSchedule.scheduleType>/g, obj, "scheduleType", base.to_string, sub, context);
            base.parse_element (/<cim:InterchangeSchedule.wcrID>([\s\S]*?)<\/cim:InterchangeSchedule.wcrID>/g, obj, "wcrID", base.to_string, sub, context);
            base.parse_attribute (/<cim:InterchangeSchedule.RegisteredInterTie\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredInterTie", sub, context);
            base.parse_attribute (/<cim:InterchangeSchedule.InterTie\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InterTie", sub, context);
            bucket = context.parsed.InterchangeSchedule;
            if (null == bucket)
                context.parsed.InterchangeSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_InterchangeSchedule (obj, exporters, full)
        {
            var fields = exporters["Curve"](obj, exporters, false);

            base.export_element (obj, "InterchangeSchedule", "checkOutType", base.from_string, fields);
            base.export_element (obj, "InterchangeSchedule", "directionType", base.from_string, fields);
            base.export_element (obj, "InterchangeSchedule", "energyType", base.from_string, fields);
            base.export_element (obj, "InterchangeSchedule", "intervalLength", base.from_string, fields);
            base.export_element (obj, "InterchangeSchedule", "marketType", base.from_string, fields);
            base.export_element (obj, "InterchangeSchedule", "operatingDate", base.from_datetime, fields);
            base.export_element (obj, "InterchangeSchedule", "outOfMarketType", base.from_boolean, fields);
            base.export_element (obj, "InterchangeSchedule", "scheduleType", base.from_string, fields);
            base.export_element (obj, "InterchangeSchedule", "wcrID", base.from_string, fields);
            base.export_attribute (obj, "InterchangeSchedule", "RegisteredInterTie", fields);
            base.export_attribute (obj, "InterchangeSchedule", "InterTie", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * An Energy Price Index for each Resource is valid for a period (e.g. daily) that is identified by a Valid Period Start Time and a Valid Period End Time.
         *
         * An Energy Price Index is in \$/MWh.
         *
         */
        function parse_EnergyPriceIndex (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "EnergyPriceIndex";
            base.parse_element (/<cim:EnergyPriceIndex.lastModified>([\s\S]*?)<\/cim:EnergyPriceIndex.lastModified>/g, obj, "lastModified", base.to_datetime, sub, context);
            base.parse_element (/<cim:EnergyPriceIndex.startEffectiveDate>([\s\S]*?)<\/cim:EnergyPriceIndex.startEffectiveDate>/g, obj, "startEffectiveDate", base.to_datetime, sub, context);
            base.parse_element (/<cim:EnergyPriceIndex.endEffectiveDate>([\s\S]*?)<\/cim:EnergyPriceIndex.endEffectiveDate>/g, obj, "endEffectiveDate", base.to_datetime, sub, context);
            base.parse_element (/<cim:EnergyPriceIndex.energyPriceIndex>([\s\S]*?)<\/cim:EnergyPriceIndex.energyPriceIndex>/g, obj, "energyPriceIndex", base.to_float, sub, context);
            base.parse_element (/<cim:EnergyPriceIndex.energyPriceIndexType>([\s\S]*?)<\/cim:EnergyPriceIndex.energyPriceIndexType>/g, obj, "energyPriceIndexType", base.to_string, sub, context);
            base.parse_attribute (/<cim:EnergyPriceIndex.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);
            bucket = context.parsed.EnergyPriceIndex;
            if (null == bucket)
                context.parsed.EnergyPriceIndex = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_EnergyPriceIndex (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "EnergyPriceIndex", "lastModified", base.from_datetime, fields);
            base.export_element (obj, "EnergyPriceIndex", "startEffectiveDate", base.from_datetime, fields);
            base.export_element (obj, "EnergyPriceIndex", "endEffectiveDate", base.from_datetime, fields);
            base.export_element (obj, "EnergyPriceIndex", "energyPriceIndex", base.from_float, fields);
            base.export_element (obj, "EnergyPriceIndex", "energyPriceIndexType", base.from_string, fields);
            base.export_attribute (obj, "EnergyPriceIndex", "RegisteredGenerator", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Loss sensitivity applied to a ConnectivityNode for a given time interval.
         *
         */
        function parse_LossSensitivity (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketPlan.parse_MarketFactors (context, sub);
            obj.cls = "LossSensitivity";
            base.parse_element (/<cim:LossSensitivity.lossFactor>([\s\S]*?)<\/cim:LossSensitivity.lossFactor>/g, obj, "lossFactor", base.to_float, sub, context);
            base.parse_attribute (/<cim:LossSensitivity.MktConnectivityNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktConnectivityNode", sub, context);
            bucket = context.parsed.LossSensitivity;
            if (null == bucket)
                context.parsed.LossSensitivity = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_LossSensitivity (obj, exporters, full)
        {
            var fields = exporters["MarketFactors"](obj, exporters, false);

            base.export_element (obj, "LossSensitivity", "lossFactor", base.from_float, fields);
            base.export_attribute (obj, "LossSensitivity", "MktConnectivityNode", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Measurement quality flags for Analog Values.
         *
         */
        function parse_AnalogMeasurementValueQuality (context, sub)
        {
            var obj;
            var bucket;

            obj = Meas.parse_MeasurementValueQuality (context, sub);
            obj.cls = "AnalogMeasurementValueQuality";
            base.parse_element (/<cim:AnalogMeasurementValueQuality.scadaQualityCode>([\s\S]*?)<\/cim:AnalogMeasurementValueQuality.scadaQualityCode>/g, obj, "scadaQualityCode", base.to_string, sub, context);
            base.parse_attribute (/<cim:AnalogMeasurementValueQuality.MktAnalogValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktAnalogValue", sub, context);
            bucket = context.parsed.AnalogMeasurementValueQuality;
            if (null == bucket)
                context.parsed.AnalogMeasurementValueQuality = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AnalogMeasurementValueQuality (obj, exporters, full)
        {
            var fields = exporters["MeasurementValueQuality"](obj, exporters, false);

            base.export_element (obj, "AnalogMeasurementValueQuality", "scadaQualityCode", base.from_string, fields);
            base.export_attribute (obj, "AnalogMeasurementValueQuality", "MktAnalogValue", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Possibly time-varying max MW or MVA and optionally Min MW limit or MVA limit (Y1 and Y2, respectively) applied as a default value if no specific constraint limits are specified for a contingency analysis.
         *
         * Use CurveSchedule XAxisUnits to specify MW or MVA.
         *
         */
        function parse_DefaultConstraintLimit (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "DefaultConstraintLimit";
            base.parse_attribute (/<cim:DefaultConstraintLimit.SecurityConstraintSum\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SecurityConstraintSum", sub, context);
            bucket = context.parsed.DefaultConstraintLimit;
            if (null == bucket)
                context.parsed.DefaultConstraintLimit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_DefaultConstraintLimit (obj, exporters, full)
        {
            var fields = exporters["Curve"](obj, exporters, false);

            base.export_attribute (obj, "DefaultConstraintLimit", "SecurityConstraintSum", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Market subclass of IEC61970:ControlArea
         *
         */
        function parse_MktControlArea (context, sub)
        {
            var obj;
            var bucket;

            obj = ControlArea.parse_ControlArea (context, sub);
            obj.cls = "MktControlArea";
            bucket = context.parsed.MktControlArea;
            if (null == bucket)
                context.parsed.MktControlArea = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MktControlArea (obj, exporters, full)
        {
            var fields = exporters["ControlArea"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                export_GenericConstraints: export_GenericConstraints,
                export_MktAnalogValue: export_MktAnalogValue,
                export_MktAnalogLimit: export_MktAnalogLimit,
                parse_EnergyTransaction: parse_EnergyTransaction,
                export_AnalogMeasurementValueQuality: export_AnalogMeasurementValueQuality,
                parse_MWLimitSchedule: parse_MWLimitSchedule,
                parse_DefaultBidCurve: parse_DefaultBidCurve,
                parse_ContingencyConstraintLimit: parse_ContingencyConstraintLimit,
                export_ConstraintTerm: export_ConstraintTerm,
                export_MktSwitch: export_MktSwitch,
                parse_MktSeriesCompensator: parse_MktSeriesCompensator,
                export_MWLimitSchedule: export_MWLimitSchedule,
                export_ProfileData: export_ProfileData,
                parse_SwitchStatus: parse_SwitchStatus,
                parse_MktAnalogLimitSet: parse_MktAnalogLimitSet,
                export_TransferInterface: export_TransferInterface,
                parse_DistributionFactorSet: parse_DistributionFactorSet,
                export_ContingencyConstraintLimit: export_ContingencyConstraintLimit,
                export_BranchEndFlow: export_BranchEndFlow,
                parse_SCADAInformation: parse_SCADAInformation,
                parse_MktControlArea: parse_MktControlArea,
                export_ControlAreaSolutionData: export_ControlAreaSolutionData,
                export_UnitInitialConditions: export_UnitInitialConditions,
                parse_InterchangeSchedule: parse_InterchangeSchedule,
                parse_TransmissionPath: parse_TransmissionPath,
                export_IntermittentResourceEligibility: export_IntermittentResourceEligibility,
                parse_InterchangeETCData: parse_InterchangeETCData,
                parse_ASRequirements: parse_ASRequirements,
                parse_GenDistributionFactor: parse_GenDistributionFactor,
                export_SwitchStatus: export_SwitchStatus,
                parse_TransmissionCapacity: parse_TransmissionCapacity,
                parse_TerminalConstraintTerm: parse_TerminalConstraintTerm,
                export_ReserveDemandCurve: export_ReserveDemandCurve,
                parse_MktSwitch: parse_MktSwitch,
                parse_MktShuntCompensator: parse_MktShuntCompensator,
                export_MktACLineSegment: export_MktACLineSegment,
                parse_SecurityConstraintSum: parse_SecurityConstraintSum,
                export_EnergyPriceIndex: export_EnergyPriceIndex,
                export_SecurityConstraints: export_SecurityConstraints,
                export_DefaultBidCurveData: export_DefaultBidCurveData,
                parse_AreaLoadCurve: parse_AreaLoadCurve,
                export_GeneratingUnitDynamicValues: export_GeneratingUnitDynamicValues,
                export_SysLoadDistributionFactor: export_SysLoadDistributionFactor,
                parse_GenericConstraints: parse_GenericConstraints,
                parse_DefaultConstraintLimit: parse_DefaultConstraintLimit,
                parse_Profile: parse_Profile,
                export_TransmissionPath: export_TransmissionPath,
                export_EnergyConsumerData: export_EnergyConsumerData,
                parse_ShuntCompensatorDynamicData: parse_ShuntCompensatorDynamicData,
                parse_MktTapChanger: parse_MktTapChanger,
                parse_ControlAreaSolutionData: parse_ControlAreaSolutionData,
                export_SCADAInformation: export_SCADAInformation,
                parse_ReserveDemandCurve: parse_ReserveDemandCurve,
                export_DefaultConstraintLimit: export_DefaultConstraintLimit,
                parse_MktAnalogValue: parse_MktAnalogValue,
                parse_DiscreteMeasurementValueQuality: parse_DiscreteMeasurementValueQuality,
                export_BaseCaseConstraintLimit: export_BaseCaseConstraintLimit,
                parse_GeneratingUnitDynamicValues: parse_GeneratingUnitDynamicValues,
                parse_EnergyConsumerData: parse_EnergyConsumerData,
                export_InterchangeETCData: export_InterchangeETCData,
                export_MktSeriesCompensator: export_MktSeriesCompensator,
                export_ASRequirements: export_ASRequirements,
                parse_DefaultBidCurveData: parse_DefaultBidCurveData,
                export_NodeConstraintTerm: export_NodeConstraintTerm,
                export_TREntitlement: export_TREntitlement,
                parse_AnalogMeasurementValueQuality: parse_AnalogMeasurementValueQuality,
                export_EnergyProfile: export_EnergyProfile,
                parse_MktDiscreteValue: parse_MktDiscreteValue,
                parse_TREntitlement: parse_TREntitlement,
                export_MktControlArea: export_MktControlArea,
                parse_DefaultBid: parse_DefaultBid,
                parse_SecurityConstraints: parse_SecurityConstraints,
                parse_UnitInitialConditions: parse_UnitInitialConditions,
                parse_BranchEndFlow: parse_BranchEndFlow,
                export_ServicePoint: export_ServicePoint,
                parse_LossSensitivity: parse_LossSensitivity,
                export_DistributionFactorSet: export_DistributionFactorSet,
                parse_EnergyPriceIndex: parse_EnergyPriceIndex,
                export_LossSensitivity: export_LossSensitivity,
                export_TransferInterfaceSolution: export_TransferInterfaceSolution,
                export_TransmissionReservation: export_TransmissionReservation,
                export_MktAnalogLimitSet: export_MktAnalogLimitSet,
                export_DefaultBidCurve: export_DefaultBidCurve,
                parse_BaseCaseConstraintLimit: parse_BaseCaseConstraintLimit,
                export_ShuntCompensatorDynamicData: export_ShuntCompensatorDynamicData,
                parse_LoadDistributionFactor: parse_LoadDistributionFactor,
                export_Profile: export_Profile,
                export_MktDiscreteValue: export_MktDiscreteValue,
                export_TapChangerDynamicData: export_TapChangerDynamicData,
                export_TransmissionCapacity: export_TransmissionCapacity,
                export_TerminalConstraintTerm: export_TerminalConstraintTerm,
                parse_TransmissionReservation: parse_TransmissionReservation,
                parse_MktACLineSegment: parse_MktACLineSegment,
                parse_TransferInterface: parse_TransferInterface,
                parse_TapChangerDynamicData: parse_TapChangerDynamicData,
                parse_MktAnalogLimit: parse_MktAnalogLimit,
                export_MktTapChanger: export_MktTapChanger,
                parse_IntermittentResourceEligibility: parse_IntermittentResourceEligibility,
                parse_TransmissionInterfaceRightEntitlement: parse_TransmissionInterfaceRightEntitlement,
                parse_ServicePoint: parse_ServicePoint,
                export_MktShuntCompensator: export_MktShuntCompensator,
                parse_ProfileData: parse_ProfileData,
                export_AreaLoadCurve: export_AreaLoadCurve,
                export_SecurityConstraintSum: export_SecurityConstraintSum,
                export_TransmissionInterfaceRightEntitlement: export_TransmissionInterfaceRightEntitlement,
                export_LoadDistributionFactor: export_LoadDistributionFactor,
                export_EnergyTransaction: export_EnergyTransaction,
                export_DefaultBid: export_DefaultBid,
                parse_NodeConstraintTerm: parse_NodeConstraintTerm,
                parse_EnergyProfile: parse_EnergyProfile,
                export_GenDistributionFactor: export_GenDistributionFactor,
                parse_TransferInterfaceSolution: parse_TransferInterfaceSolution,
                parse_SysLoadDistributionFactor: parse_SysLoadDistributionFactor,
                parse_ConstraintTerm: parse_ConstraintTerm,
                export_InterchangeSchedule: export_InterchangeSchedule,
                export_DiscreteMeasurementValueQuality: export_DiscreteMeasurementValueQuality
            }
        );
    }
);