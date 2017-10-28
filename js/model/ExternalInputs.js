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
            /**
             * Capacity Benefit Margin (CBM) is used by Markets to calculate the transmission interface limits.
             *
             * This number could be manually or procedurally determined. The CBM is defined per transmission interface (branch group).
             *
             */
            base.parse_element (/<cim:TransmissionCapacity.capacityBenefitMargin>([\s\S]*?)<\/cim:TransmissionCapacity.capacityBenefitMargin>/g, obj, "capacityBenefitMargin", base.to_float, sub, context);

            /**
             * The Operational Transmission Capacity (OTC) is the transmission capacity under the operating condition during a specific time period, incorporating the effects of derates and current settings of operation controls.
             *
             * The OTCs for all transmission interface (branch group) are always provided regardless of outage or switching conditions.
             *
             */
            base.parse_element (/<cim:TransmissionCapacity.operationalTransmissionCapacity>([\s\S]*?)<\/cim:TransmissionCapacity.operationalTransmissionCapacity>/g, obj, "operationalTransmissionCapacity", base.to_float, sub, context);

            /**
             * The Operational Transmission Capacity (OTC) 15 minute Emergency Limit
             *
             */
            base.parse_element (/<cim:TransmissionCapacity.OTC15min_emergency>([\s\S]*?)<\/cim:TransmissionCapacity.OTC15min_emergency>/g, obj, "OTC15min_emergency", base.to_float, sub, context);

            /**
             * The Operational Transmission Capacity (OTC) Emergency Limit.
             *
             */
            base.parse_element (/<cim:TransmissionCapacity.OTCemergency>([\s\S]*?)<\/cim:TransmissionCapacity.OTCemergency>/g, obj, "OTCemergency", base.to_float, sub, context);

            /**
             * point of delivery
             *
             */
            base.parse_element (/<cim:TransmissionCapacity.POD>([\s\S]*?)<\/cim:TransmissionCapacity.POD>/g, obj, "POD", base.to_string, sub, context);

            /**
             * point of receipt
             *
             */
            base.parse_element (/<cim:TransmissionCapacity.POR>([\s\S]*?)<\/cim:TransmissionCapacity.POR>/g, obj, "POR", base.to_string, sub, context);

            /**
             * Operating date &amp; hour when the entitlement applies
             *
             */
            base.parse_element (/<cim:TransmissionCapacity.startOperatingDate>([\s\S]*?)<\/cim:TransmissionCapacity.startOperatingDate>/g, obj, "startOperatingDate", base.to_datetime, sub, context);

            /**
             * Total Transmission Capacity
             *
             */
            base.parse_element (/<cim:TransmissionCapacity.totalTransmissionCapacity>([\s\S]*?)<\/cim:TransmissionCapacity.totalTransmissionCapacity>/g, obj, "totalTransmissionCapacity", base.to_float, sub, context);

            base.parse_attribute (/<cim:TransmissionCapacity.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context, true);

            base.parse_attribute (/<cim:TransmissionCapacity.GenericConstraints\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GenericConstraints", sub, context, true);

            bucket = context.parsed.TransmissionCapacity;
            if (null == bucket)
                context.parsed.TransmissionCapacity = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The injection of reactive power of the filter bank in the NA solution or VCS reactive power production
             *
             */
            base.parse_element (/<cim:ShuntCompensatorDynamicData.mVARInjection>([\s\S]*?)<\/cim:ShuntCompensatorDynamicData.mVARInjection>/g, obj, "mVARInjection", base.to_float, sub, context);

            /**
             * The current status for the Voltage Control Capacitor 1= Connected 0 = Disconnected
             *
             */
            base.parse_element (/<cim:ShuntCompensatorDynamicData.connectionStatus>([\s\S]*?)<\/cim:ShuntCompensatorDynamicData.connectionStatus>/g, obj, "connectionStatus", base.to_string, sub, context);

            /**
             * The desired voltage for the Voltage Control Capacitor
             *
             */
            base.parse_element (/<cim:ShuntCompensatorDynamicData.desiredVoltage>([\s\S]*?)<\/cim:ShuntCompensatorDynamicData.desiredVoltage>/g, obj, "desiredVoltage", base.to_float, sub, context);

            /**
             * Indicator if the voltage control this is regulating True = Yes, False = No
             *
             */
            base.parse_element (/<cim:ShuntCompensatorDynamicData.voltageRegulationStatus>([\s\S]*?)<\/cim:ShuntCompensatorDynamicData.voltageRegulationStatus>/g, obj, "voltageRegulationStatus", base.to_boolean, sub, context);

            /**
             * Voltage control capacitor step position
             *
             */
            base.parse_element (/<cim:ShuntCompensatorDynamicData.stepPosition>([\s\S]*?)<\/cim:ShuntCompensatorDynamicData.stepPosition>/g, obj, "stepPosition", base.to_string, sub, context);

            base.parse_attribute (/<cim:ShuntCompensatorDynamicData.MktShuntCompensator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktShuntCompensator", sub, context, true);

            bucket = context.parsed.ShuntCompensatorDynamicData;
            if (null == bucket)
                context.parsed.ShuntCompensatorDynamicData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The entitlement
             *
             */
            base.parse_element (/<cim:TREntitlement.entitlement>([\s\S]*?)<\/cim:TREntitlement.entitlement>/g, obj, "entitlement", base.to_float, sub, context);

            /**
             * Operating date and hour when the entitlement applies
             *
             */
            base.parse_element (/<cim:TREntitlement.startOperatingDate>([\s\S]*?)<\/cim:TREntitlement.startOperatingDate>/g, obj, "startOperatingDate", base.to_datetime, sub, context);

            base.parse_attribute (/<cim:TREntitlement.TransmissionContractRight\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionContractRight", sub, context, true);

            bucket = context.parsed.TREntitlement;
            if (null == bucket)
                context.parsed.TREntitlement = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            base.parse_attribute (/<cim:ContingencyConstraintLimit.SecurityConstraintSum\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SecurityConstraintSum", sub, context, true);

            base.parse_attribute (/<cim:ContingencyConstraintLimit.MktContingency\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktContingency", sub, context, true);

            base.parse_attribute (/<cim:ContingencyConstraintLimit.MWLimitSchedules\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MWLimitSchedules", sub, context, true);

            bucket = context.parsed.ContingencyConstraintLimit;
            if (null == bucket)
                context.parsed.ContingencyConstraintLimit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Loss Factor
             *
             */
            base.parse_element (/<cim:GeneratingUnitDynamicValues.lossFactor>([\s\S]*?)<\/cim:GeneratingUnitDynamicValues.lossFactor>/g, obj, "lossFactor", base.to_float, sub, context);

            /**
             * The maximum active power generation of the unit in MW
             *
             */
            base.parse_element (/<cim:GeneratingUnitDynamicValues.maximumMW>([\s\S]*?)<\/cim:GeneratingUnitDynamicValues.maximumMW>/g, obj, "maximumMW", base.to_float, sub, context);

            /**
             * The minimum active power generation of the unit in MW
             *
             */
            base.parse_element (/<cim:GeneratingUnitDynamicValues.minimumMW>([\s\S]*?)<\/cim:GeneratingUnitDynamicValues.minimumMW>/g, obj, "minimumMW", base.to_float, sub, context);

            /**
             * Unit reactive power generation in MVAR
             *
             */
            base.parse_element (/<cim:GeneratingUnitDynamicValues.mVAR>([\s\S]*?)<\/cim:GeneratingUnitDynamicValues.mVAR>/g, obj, "mVAR", base.to_float, sub, context);

            /**
             * Unit active power generation in MW
             *
             */
            base.parse_element (/<cim:GeneratingUnitDynamicValues.mw>([\s\S]*?)<\/cim:GeneratingUnitDynamicValues.mw>/g, obj, "mw", base.to_float, sub, context);

            /**
             * Unit sencivity factor.
             *
             * The distribution factors (DFAX) for the unit
             *
             */
            base.parse_element (/<cim:GeneratingUnitDynamicValues.sensitivity>([\s\S]*?)<\/cim:GeneratingUnitDynamicValues.sensitivity>/g, obj, "sensitivity", base.to_float, sub, context);

            base.parse_attribute (/<cim:GeneratingUnitDynamicValues.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context, true);

            base.parse_attribute (/<cim:GeneratingUnitDynamicValues.MktGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktGeneratingUnit", sub, context, true);

            bucket = context.parsed.GeneratingUnitDynamicValues;
            if (null == bucket)
                context.parsed.GeneratingUnitDynamicValues = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The available transmission capability of a transmission path for the reference direction.
             *
             */
            base.parse_element (/<cim:TransmissionPath.availTransferCapability>([\s\S]*?)<\/cim:TransmissionPath.availTransferCapability>/g, obj, "availTransferCapability", base.to_string, sub, context);

            /**
             * Flag which indicates if the transmission path is also a designated interconnection "parallel path".
             *
             */
            base.parse_element (/<cim:TransmissionPath.parallelPathFlag>([\s\S]*?)<\/cim:TransmissionPath.parallelPathFlag>/g, obj, "parallelPathFlag", base.to_boolean, sub, context);

            /**
             * The total transmission capability of a transmission path in the reference direction.
             *
             */
            base.parse_element (/<cim:TransmissionPath.totalTransferCapability>([\s\S]*?)<\/cim:TransmissionPath.totalTransferCapability>/g, obj, "totalTransferCapability", base.to_string, sub, context);

            /**
             * A transmission path has a "point-of-delivery" service point
             *
             */
            base.parse_attribute (/<cim:TransmissionPath.DeliveryPoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DeliveryPoint", sub, context, true);

            /**
             * A TransmissionPath is contained in a TransmissionCorridor.
             *
             */
            base.parse_attribute (/<cim:TransmissionPath.For\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "For", sub, context, true);

            /**
             * A transmission path has a "point-of-receipt" service point
             *
             */
            base.parse_attribute (/<cim:TransmissionPath.PointOfReceipt\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PointOfReceipt", sub, context, true);

            bucket = context.parsed.TransmissionPath;
            if (null == bucket)
                context.parsed.TransmissionPath = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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

            /**
             * The function is an enumerated value that can be 'active', 'reactive', or 'VA' to indicate the type of flow.
             *
             */
            base.parse_element (/<cim:ConstraintTerm.function>([\s\S]*?)<\/cim:ConstraintTerm.function>/g, obj, "function", base.to_string, sub, context);

            base.parse_attribute (/<cim:ConstraintTerm.SecurityConstraintSum\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SecurityConstraintSum", sub, context, true);

            bucket = context.parsed.ConstraintTerm;
            if (null == bucket)
                context.parsed.ConstraintTerm = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The start of the time interval for which requirement is defined.
             *
             */
            base.parse_element (/<cim:ASRequirements.intervalStartTime>([\s\S]*?)<\/cim:ASRequirements.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);

            bucket = context.parsed.ASRequirements;
            if (null == bucket)
                context.parsed.ASRequirements = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            base.parse_attribute (/<cim:TransmissionReservation.EnergyTransaction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyTransaction", sub, context, true);

            base.parse_attribute (/<cim:TransmissionReservation.TransmissionPath\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionPath", sub, context, true);

            base.parse_attribute (/<cim:TransmissionReservation.Sink\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Sink", sub, context, true);

            base.parse_attribute (/<cim:TransmissionReservation.TransactionBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransactionBid", sub, context, true);

            base.parse_attribute (/<cim:TransmissionReservation.Source\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Source", sub, context, true);

            bucket = context.parsed.TransmissionReservation;
            if (null == bucket)
                context.parsed.TransmissionReservation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The margin for the interface
             *
             */
            base.parse_element (/<cim:TransferInterfaceSolution.interfaceMargin>([\s\S]*?)<\/cim:TransferInterfaceSolution.interfaceMargin>/g, obj, "interfaceMargin", base.to_float, sub, context);

            /**
             * Transfer Interface + Limit
             * Attribute Usage: The absoloute of the maximum flow on the transfer interface.
             *
             * This is a positive MW value.
             *
             */
            base.parse_element (/<cim:TransferInterfaceSolution.transferLimit>([\s\S]*?)<\/cim:TransferInterfaceSolution.transferLimit>/g, obj, "transferLimit", base.to_float, sub, context);

            /**
             * Post Transfer MW for step
             *
             */
            base.parse_element (/<cim:TransferInterfaceSolution.postTransferMW>([\s\S]*?)<\/cim:TransferInterfaceSolution.postTransferMW>/g, obj, "postTransferMW", base.to_float, sub, context);

            base.parse_attribute (/<cim:TransferInterfaceSolution.TransferInterface\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransferInterface", sub, context, true);

            base.parse_attribute (/<cim:TransferInterfaceSolution.MktContingencyB\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktContingencyB", sub, context, true);

            base.parse_attribute (/<cim:TransferInterfaceSolution. MktContingencyA\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, " MktContingencyA", sub, context, true);

            bucket = context.parsed.TransferInterfaceSolution;
            if (null == bucket)
                context.parsed.TransferInterfaceSolution = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            base.parse_attribute (/<cim:NodeConstraintTerm.MktConnectivityNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktConnectivityNode", sub, context, true);

            bucket = context.parsed.NodeConstraintTerm;
            if (null == bucket)
                context.parsed.NodeConstraintTerm = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * To indicate a type used for a default energy bid curve, such as LMP, cost or consultative based.
             *
             */
            base.parse_element (/<cim:DefaultBidCurve.curveType>([\s\S]*?)<\/cim:DefaultBidCurve.curveType>/g, obj, "curveType", base.to_string, sub, context);

            /**
             * Default energy bid adder flag
             *
             */
            base.parse_element (/<cim:DefaultBidCurve.debAdderFlag>([\s\S]*?)<\/cim:DefaultBidCurve.debAdderFlag>/g, obj, "debAdderFlag", base.to_string, sub, context);

            base.parse_attribute (/<cim:DefaultBidCurve.DefaultBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DefaultBid", sub, context, true);

            bucket = context.parsed.DefaultBidCurve;
            if (null == bucket)
                context.parsed.DefaultBidCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The MW flow on the branch
             *
             * Attribute Usage: Active power flow at the series device, transformer, phase shifter, or line end
             *
             */
            base.parse_element (/<cim:BranchEndFlow.mwFlow>([\s\S]*?)<\/cim:BranchEndFlow.mwFlow>/g, obj, "mwFlow", base.to_float, sub, context);

            /**
             * The MVAR flow on the branch
             *
             * Attribute Usage: Reactive power flow at the series device, transformer, phase shifter, or line end
             *
             */
            base.parse_element (/<cim:BranchEndFlow.mVARFlow>([\s\S]*?)<\/cim:BranchEndFlow.mVARFlow>/g, obj, "mVARFlow", base.to_float, sub, context);

            /**
             * The Normal Rating for the branch
             *
             */
            base.parse_element (/<cim:BranchEndFlow.normalRating>([\s\S]*?)<\/cim:BranchEndFlow.normalRating>/g, obj, "normalRating", base.to_float, sub, context);

            /**
             * The Long Term Rating for the branch
             *
             */
            base.parse_element (/<cim:BranchEndFlow.longTermRating>([\s\S]*?)<\/cim:BranchEndFlow.longTermRating>/g, obj, "longTermRating", base.to_float, sub, context);

            /**
             * The Short Term Rating for the branch
             *
             */
            base.parse_element (/<cim:BranchEndFlow.shortTermRating>([\s\S]*?)<\/cim:BranchEndFlow.shortTermRating>/g, obj, "shortTermRating", base.to_float, sub, context);

            /**
             * The Load Dump Rating for the branch
             *
             */
            base.parse_element (/<cim:BranchEndFlow.loadDumpRating>([\s\S]*?)<\/cim:BranchEndFlow.loadDumpRating>/g, obj, "loadDumpRating", base.to_float, sub, context);

            bucket = context.parsed.BranchEndFlow;
            if (null == bucket)
                context.parsed.BranchEndFlow = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Cumulative energy production over trading period.
             *
             */
            base.parse_element (/<cim:UnitInitialConditions.cumEnergy>([\s\S]*?)<\/cim:UnitInitialConditions.cumEnergy>/g, obj, "cumEnergy", base.to_string, sub, context);

            /**
             * Cumulative number of status changes of the resource.
             *
             */
            base.parse_element (/<cim:UnitInitialConditions.cumStatusChanges>([\s\S]*?)<\/cim:UnitInitialConditions.cumStatusChanges>/g, obj, "cumStatusChanges", base.to_string, sub, context);

            /**
             * Number of start ups in the Operating Day until the end of previous hour.
             *
             */
            base.parse_element (/<cim:UnitInitialConditions.numberOfStartups>([\s\S]*?)<\/cim:UnitInitialConditions.numberOfStartups>/g, obj, "numberOfStartups", base.to_string, sub, context);

            /**
             * 'true' if the GeneratingUnit is currently On-Line
             *
             */
            base.parse_element (/<cim:UnitInitialConditions.onlineStatus>([\s\S]*?)<\/cim:UnitInitialConditions.onlineStatus>/g, obj, "onlineStatus", base.to_boolean, sub, context);

            /**
             * Resource MW output at the end of previous clearing period.
             *
             */
            base.parse_element (/<cim:UnitInitialConditions.resourceMW>([\s\S]*?)<\/cim:UnitInitialConditions.resourceMW>/g, obj, "resourceMW", base.to_string, sub, context);

            /**
             * Resource status at the end of previous clearing period:
             * 0 - off-line
             * 1 - on-line production
             * 2 - in shutdown process
             *
             * 3 - in startup process
             *
             */
            base.parse_element (/<cim:UnitInitialConditions.resourceStatus>([\s\S]*?)<\/cim:UnitInitialConditions.resourceStatus>/g, obj, "resourceStatus", base.to_string, sub, context);

            /**
             * Time and date for resourceStatus
             *
             */
            base.parse_element (/<cim:UnitInitialConditions.statusDate>([\s\S]*?)<\/cim:UnitInitialConditions.statusDate>/g, obj, "statusDate", base.to_datetime, sub, context);

            /**
             * Time in market trading intervals the resource is in the state as of the end of the previous clearing period.
             *
             */
            base.parse_element (/<cim:UnitInitialConditions.timeInStatus>([\s\S]*?)<\/cim:UnitInitialConditions.timeInStatus>/g, obj, "timeInStatus", base.to_float, sub, context);

            /**
             * Time interval
             *
             */
            base.parse_element (/<cim:UnitInitialConditions.timeInterval>([\s\S]*?)<\/cim:UnitInitialConditions.timeInterval>/g, obj, "timeInterval", base.to_datetime, sub, context);

            base.parse_attribute (/<cim:UnitInitialConditions.GeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingUnit", sub, context, true);

            bucket = context.parsed.UnitInitialConditions;
            if (null == bucket)
                context.parsed.UnitInitialConditions = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * true if limit exceeded
             *
             */
            base.parse_element (/<cim:MktAnalogLimit.exceededLimit>([\s\S]*?)<\/cim:MktAnalogLimit.exceededLimit>/g, obj, "exceededLimit", base.to_boolean, sub, context);

            /**
             * The type of limit the value represents
             * Branch Limit Types:
             * Short Term
             * Medium Term
             * Long Term
             * Voltage Limits:
             * High
             *
             * Low
             *
             */
            base.parse_element (/<cim:MktAnalogLimit.limitType>([\s\S]*?)<\/cim:MktAnalogLimit.limitType>/g, obj, "limitType", base.to_string, sub, context);

            bucket = context.parsed.MktAnalogLimit;
            if (null == bucket)
                context.parsed.MktAnalogLimit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            base.parse_attribute (/<cim:MktSeriesCompensator.EndAFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndAFlow", sub, context, true);

            base.parse_attribute (/<cim:MktSeriesCompensator.EndBFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndBFlow", sub, context, true);

            bucket = context.parsed.MktSeriesCompensator;
            if (null == bucket)
                context.parsed.MktSeriesCompensator = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Indicates whether a resource is eligible for PIRP program for a given hour
             *
             */
            base.parse_element (/<cim:IntermittentResourceEligibility.eligibilityStatus>([\s\S]*?)<\/cim:IntermittentResourceEligibility.eligibilityStatus>/g, obj, "eligibilityStatus", base.to_string, sub, context);

            base.parse_attribute (/<cim:IntermittentResourceEligibility.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context, true);

            bucket = context.parsed.IntermittentResourceEligibility;
            if (null == bucket)
                context.parsed.IntermittentResourceEligibility = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Tap position of the phase shifter, high-side tap position of the transformer, or  low-side tap position of the transformer
             *
             */
            base.parse_element (/<cim:TapChangerDynamicData.tapPosition>([\s\S]*?)<\/cim:TapChangerDynamicData.tapPosition>/g, obj, "tapPosition", base.to_float, sub, context);

            /**
             * The desired voltage for the LTC
             *
             */
            base.parse_element (/<cim:TapChangerDynamicData.desiredVoltage>([\s\S]*?)<\/cim:TapChangerDynamicData.desiredVoltage>/g, obj, "desiredVoltage", base.to_float, sub, context);

            /**
             * Indicator if the LTC transformer is regulating True = Yes, False = No
             *
             */
            base.parse_element (/<cim:TapChangerDynamicData.voltageRegulationStatus>([\s\S]*?)<\/cim:TapChangerDynamicData.voltageRegulationStatus>/g, obj, "voltageRegulationStatus", base.to_boolean, sub, context);

            /**
             * True means the phase shifter is regulating.
             *
             */
            base.parse_element (/<cim:TapChangerDynamicData.angleRegulationStatus>([\s\S]*?)<\/cim:TapChangerDynamicData.angleRegulationStatus>/g, obj, "angleRegulationStatus", base.to_boolean, sub, context);

            /**
             * Phase Shifter Desired MW.
             *
             * The active power regulation setpoint of the phase shifter
             *
             */
            base.parse_element (/<cim:TapChangerDynamicData.desiredMW>([\s\S]*?)<\/cim:TapChangerDynamicData.desiredMW>/g, obj, "desiredMW", base.to_float, sub, context);

            /**
             * Phase Shifter Angle.
             *
             * The solved phase angle shift of the phase shifter
             *
             */
            base.parse_element (/<cim:TapChangerDynamicData.solvedAngle>([\s\S]*?)<\/cim:TapChangerDynamicData.solvedAngle>/g, obj, "solvedAngle", base.to_float, sub, context);

            /**
             * The minimum phase angle shift of the phase shifter
             *
             */
            base.parse_element (/<cim:TapChangerDynamicData.minimumAngle>([\s\S]*?)<\/cim:TapChangerDynamicData.minimumAngle>/g, obj, "minimumAngle", base.to_float, sub, context);

            /**
             * The maximum phase angle shift of the phase shifter
             *
             */
            base.parse_element (/<cim:TapChangerDynamicData.maximumAngle>([\s\S]*?)<\/cim:TapChangerDynamicData.maximumAngle>/g, obj, "maximumAngle", base.to_float, sub, context);

            base.parse_attribute (/<cim:TapChangerDynamicData.MktTapChanger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktTapChanger", sub, context, true);

            bucket = context.parsed.TapChangerDynamicData;
            if (null == bucket)
                context.parsed.TapChangerDynamicData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Real power (MW) load distribution factor
             *
             */
            base.parse_element (/<cim:LoadDistributionFactor.pDistFactor>([\s\S]*?)<\/cim:LoadDistributionFactor.pDistFactor>/g, obj, "pDistFactor", base.to_float, sub, context);

            /**
             * Reactive power (MVAr) load distribution factor
             *
             */
            base.parse_element (/<cim:LoadDistributionFactor.qDistFactor>([\s\S]*?)<\/cim:LoadDistributionFactor.qDistFactor>/g, obj, "qDistFactor", base.to_float, sub, context);

            base.parse_attribute (/<cim:LoadDistributionFactor.IndividualPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "IndividualPnode", sub, context, true);

            base.parse_attribute (/<cim:LoadDistributionFactor.AggregatedPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AggregatedPnode", sub, context, true);

            bucket = context.parsed.LoadDistributionFactor;
            if (null == bucket)
                context.parsed.LoadDistributionFactor = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Existing transmission contract number
             *
             */
            base.parse_element (/<cim:InterchangeETCData.contractNumber>([\s\S]*?)<\/cim:InterchangeETCData.contractNumber>/g, obj, "contractNumber", base.to_string, sub, context);

            /**
             * Existing transmission contract usage MW value
             *
             */
            base.parse_element (/<cim:InterchangeETCData.usageMW>([\s\S]*?)<\/cim:InterchangeETCData.usageMW>/g, obj, "usageMW", base.to_float, sub, context);

            base.parse_attribute (/<cim:InterchangeETCData.InterchangeSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InterchangeSchedule", sub, context, true);

            bucket = context.parsed.InterchangeETCData;
            if (null == bucket)
                context.parsed.InterchangeETCData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Used to calculate load "participation" of a connectivity node in an host control area
             *
             */
            base.parse_element (/<cim:SysLoadDistributionFactor.factor>([\s\S]*?)<\/cim:SysLoadDistributionFactor.factor>/g, obj, "factor", base.to_float, sub, context);

            base.parse_attribute (/<cim:SysLoadDistributionFactor.HostControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HostControlArea", sub, context, true);

            base.parse_attribute (/<cim:SysLoadDistributionFactor.MktConnectivityNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktConnectivityNode", sub, context, true);

            bucket = context.parsed.SysLoadDistributionFactor;
            if (null == bucket)
                context.parsed.SysLoadDistributionFactor = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Interchange capacity flag.
             *
             * When the flag is set to true, it indicates a transaction is capacity backed.
             *
             */
            base.parse_element (/<cim:EnergyTransaction.capacityBacked>([\s\S]*?)<\/cim:EnergyTransaction.capacityBacked>/g, obj, "capacityBacked", base.to_boolean, sub, context);

            /**
             * Maximum congestion charges in monetary units.
             *
             */
            base.parse_element (/<cim:EnergyTransaction.congestChargeMax>([\s\S]*?)<\/cim:EnergyTransaction.congestChargeMax>/g, obj, "congestChargeMax", base.to_string, sub, context);

            /**
             * Delivery point active power.
             *
             */
            base.parse_element (/<cim:EnergyTransaction.deliveryPointP>([\s\S]*?)<\/cim:EnergyTransaction.deliveryPointP>/g, obj, "deliveryPointP", base.to_string, sub, context);

            /**
             * Transaction minimum active power if dispatchable.
             *
             */
            base.parse_element (/<cim:EnergyTransaction.energyMin>([\s\S]*?)<\/cim:EnergyTransaction.energyMin>/g, obj, "energyMin", base.to_string, sub, context);

            /**
             * Firm interchange flag indicates whether or not this energy transaction can be changed without potential financial consequences.
             *
             */
            base.parse_element (/<cim:EnergyTransaction.firmInterchangeFlag>([\s\S]*?)<\/cim:EnergyTransaction.firmInterchangeFlag>/g, obj, "firmInterchangeFlag", base.to_boolean, sub, context);

            /**
             * Willing to Pay congestion flag
             *
             */
            base.parse_element (/<cim:EnergyTransaction.payCongestion>([\s\S]*?)<\/cim:EnergyTransaction.payCongestion>/g, obj, "payCongestion", base.to_boolean, sub, context);

            /**
             * Reason for energy transaction.
             *
             */
            base.parse_element (/<cim:EnergyTransaction.reason>([\s\S]*?)<\/cim:EnergyTransaction.reason>/g, obj, "reason", base.to_string, sub, context);

            /**
             * Receipt point active power.
             *
             */
            base.parse_element (/<cim:EnergyTransaction.receiptPointP>([\s\S]*?)<\/cim:EnergyTransaction.receiptPointP>/g, obj, "receiptPointP", base.to_string, sub, context);

            /**
             * { Approve | Deny | Study }
             *
             */
            base.parse_element (/<cim:EnergyTransaction.state>([\s\S]*?)<\/cim:EnergyTransaction.state>/g, obj, "state", base.to_string, sub, context);

            /**
             * The "Source" for an EnergyTransaction is an EnergyProduct which is injected into a ControlArea.
             *
             * Typically this is a ServicePoint.
             *
             */
            base.parse_attribute (/<cim:EnergyTransaction.EnergyProduct\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyProduct", sub, context, true);

            base.parse_attribute (/<cim:EnergyTransaction.TransmissionReservation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionReservation", sub, context, true);

            /**
             * Energy is transferred between interchange areas
             *
             */
            base.parse_attribute (/<cim:EnergyTransaction.Export_SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Export_SubControlArea", sub, context, true);

            /**
             * Energy is transferred between interchange areas
             *
             */
            base.parse_attribute (/<cim:EnergyTransaction.Import_SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Import_SubControlArea", sub, context, true);

            bucket = context.parsed.EnergyTransaction;
            if (null == bucket)
                context.parsed.EnergyTransaction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The MVAR load
             *
             * Attribute Usage: The reactive power consumption of the load in MW
             *
             */
            base.parse_element (/<cim:EnergyConsumerData.loadMVAR>([\s\S]*?)<\/cim:EnergyConsumerData.loadMVAR>/g, obj, "loadMVAR", base.to_float, sub, context);

            /**
             * The active power consumption of the load in MW
             *
             */
            base.parse_element (/<cim:EnergyConsumerData.loadMW>([\s\S]*?)<\/cim:EnergyConsumerData.loadMW>/g, obj, "loadMW", base.to_float, sub, context);

            base.parse_attribute (/<cim:EnergyConsumerData.MktEnergyConsumer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktEnergyConsumer", sub, context, true);

            bucket = context.parsed.EnergyConsumerData;
            if (null == bucket)
                context.parsed.EnergyConsumerData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Minimum MW limit (only for transmission constraints).
             *
             */
            base.parse_element (/<cim:SecurityConstraints.minMW>([\s\S]*?)<\/cim:SecurityConstraints.minMW>/g, obj, "minMW", base.to_string, sub, context);

            /**
             * Maximum MW limit
             *
             */
            base.parse_element (/<cim:SecurityConstraints.maxMW>([\s\S]*?)<\/cim:SecurityConstraints.maxMW>/g, obj, "maxMW", base.to_string, sub, context);

            /**
             * Actual branch or group of branches MW flow (only for transmission constraints)
             *
             */
            base.parse_element (/<cim:SecurityConstraints.actualMW>([\s\S]*?)<\/cim:SecurityConstraints.actualMW>/g, obj, "actualMW", base.to_string, sub, context);

            base.parse_attribute (/<cim:SecurityConstraints.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context, true);

            base.parse_attribute (/<cim:SecurityConstraints.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context, true);

            base.parse_attribute (/<cim:SecurityConstraints.GeneratingBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingBid", sub, context, true);

            bucket = context.parsed.SecurityConstraints;
            if (null == bucket)
                context.parsed.SecurityConstraints = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            base.parse_attribute (/<cim:SecurityConstraintSum.DefaultConstraintLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DefaultConstraintLimit", sub, context, true);

            base.parse_attribute (/<cim:SecurityConstraintSum.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context, true);

            base.parse_attribute (/<cim:SecurityConstraintSum.BaseCaseConstraintLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BaseCaseConstraintLimit", sub, context, true);

            bucket = context.parsed.SecurityConstraintSum;
            if (null == bucket)
                context.parsed.SecurityConstraintSum = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            base.parse_attribute (/<cim:MWLimitSchedule.SecurityConstraintLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SecurityConstraintLimit", sub, context, true);

            bucket = context.parsed.MWLimitSchedule;
            if (null == bucket)
                context.parsed.MWLimitSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Load forecast area type.
             *
             */
            base.parse_element (/<cim:AreaLoadCurve.forecastType>([\s\S]*?)<\/cim:AreaLoadCurve.forecastType>/g, obj, "forecastType", base.to_string, sub, context);

            base.parse_attribute (/<cim:AreaLoadCurve.AggregateNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AggregateNode", sub, context, true);

            base.parse_attribute (/<cim:AreaLoadCurve.TACArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TACArea", sub, context, true);

            base.parse_attribute (/<cim:AreaLoadCurve.MktLoadArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktLoadArea", sub, context, true);

            bucket = context.parsed.AreaLoadCurve;
            if (null == bucket)
                context.parsed.AreaLoadCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Region requirement maximum limit
             *
             */
            base.parse_element (/<cim:ReserveDemandCurve.reqMaxMW>([\s\S]*?)<\/cim:ReserveDemandCurve.reqMaxMW>/g, obj, "reqMaxMW", base.to_float, sub, context);

            /**
             * Reserve requirement type that the max and curve apply to.
             *
             * For example, operating reserve, regulation and contingency.
             *
             */
            base.parse_element (/<cim:ReserveDemandCurve.reserveRequirementType>([\s\S]*?)<\/cim:ReserveDemandCurve.reserveRequirementType>/g, obj, "reserveRequirementType", base.to_string, sub, context);

            base.parse_attribute (/<cim:ReserveDemandCurve.ASRequirements\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ASRequirements", sub, context, true);

            base.parse_attribute (/<cim:ReserveDemandCurve.MarketRegion\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketRegion", sub, context, true);

            bucket = context.parsed.ReserveDemandCurve;
            if (null == bucket)
                context.parsed.ReserveDemandCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * time of the update from SCADA
             *
             */
            base.parse_element (/<cim:SCADAInformation.timeStamp>([\s\S]*?)<\/cim:SCADAInformation.timeStamp>/g, obj, "timeStamp", base.to_datetime, sub, context);

            bucket = context.parsed.SCADAInformation;
            if (null == bucket)
                context.parsed.SCADAInformation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Circuit Breaker Status (closed or open) of the circuit breaker from the power flow.
             *
             */
            base.parse_element (/<cim:SwitchStatus.switchStatus>([\s\S]*?)<\/cim:SwitchStatus.switchStatus>/g, obj, "switchStatus", base.to_string, sub, context);

            base.parse_attribute (/<cim:SwitchStatus.MktSwitch\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktSwitch", sub, context, true);

            bucket = context.parsed.SwitchStatus;
            if (null == bucket)
                context.parsed.SwitchStatus = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            base.parse_attribute (/<cim:TerminalConstraintTerm.MktTerminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktTerminal", sub, context, true);

            bucket = context.parsed.TerminalConstraintTerm;
            if (null == bucket)
                context.parsed.TerminalConstraintTerm = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Bid price associated with contract
             *
             */
            base.parse_element (/<cim:ProfileData.bidPrice>([\s\S]*?)<\/cim:ProfileData.bidPrice>/g, obj, "bidPrice", base.to_float, sub, context);

            /**
             * Capacity level for the profile, in MW.
             *
             */
            base.parse_element (/<cim:ProfileData.capacityLevel>([\s\S]*?)<\/cim:ProfileData.capacityLevel>/g, obj, "capacityLevel", base.to_string, sub, context);

            /**
             * Energy level for the profile, in MWH.
             *
             */
            base.parse_element (/<cim:ProfileData.energyLevel>([\s\S]*?)<\/cim:ProfileData.energyLevel>/g, obj, "energyLevel", base.to_string, sub, context);

            /**
             * Minimum MW value of contract
             *
             */
            base.parse_element (/<cim:ProfileData.minimumLevel>([\s\S]*?)<\/cim:ProfileData.minimumLevel>/g, obj, "minimumLevel", base.to_float, sub, context);

            /**
             * Sequence to provide item numbering for the profile. { greater than or equal to 1 }
             *
             */
            base.parse_element (/<cim:ProfileData.sequenceNumber>([\s\S]*?)<\/cim:ProfileData.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);

            /**
             * Start date/time for this profile.
             *
             */
            base.parse_element (/<cim:ProfileData.startDateTime>([\s\S]*?)<\/cim:ProfileData.startDateTime>/g, obj, "startDateTime", base.to_datetime, sub, context);

            /**
             * Stop date/time for this profile.
             *
             */
            base.parse_element (/<cim:ProfileData.stopDateTime>([\s\S]*?)<\/cim:ProfileData.stopDateTime>/g, obj, "stopDateTime", base.to_datetime, sub, context);

            bucket = context.parsed.ProfileData;
            if (null == bucket)
                context.parsed.ProfileData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Type of calculation basis used to define the default bid segment curve.
             *
             */
            base.parse_element (/<cim:DefaultBidCurveData.bidSegmentCalcType>([\s\S]*?)<\/cim:DefaultBidCurveData.bidSegmentCalcType>/g, obj, "bidSegmentCalcType", base.to_string, sub, context);

            bucket = context.parsed.DefaultBidCurveData;
            if (null == bucket)
                context.parsed.DefaultBidCurveData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            base.parse_attribute (/<cim:BaseCaseConstraintLimit.SecurityConstraintSum\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SecurityConstraintSum", sub, context, true);

            bucket = context.parsed.BaseCaseConstraintLimit;
            if (null == bucket)
                context.parsed.BaseCaseConstraintLimit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Switch Manual Replace Indicator.
             *
             * Flag indicating that the switch is manual replace.
             *
             */
            base.parse_element (/<cim:DiscreteMeasurementValueQuality.manualReplaceIndicator>([\s\S]*?)<\/cim:DiscreteMeasurementValueQuality.manualReplaceIndicator>/g, obj, "manualReplaceIndicator", base.to_boolean, sub, context);

            /**
             * Removed From Operation Indicator.
             *
             * Flag indicating that the switch is removed from operation.
             *
             */
            base.parse_element (/<cim:DiscreteMeasurementValueQuality.removeFromOperationIndicator>([\s\S]*?)<\/cim:DiscreteMeasurementValueQuality.removeFromOperationIndicator>/g, obj, "removeFromOperationIndicator", base.to_boolean, sub, context);

            base.parse_attribute (/<cim:DiscreteMeasurementValueQuality.MktDiscreteValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktDiscreteValue", sub, context, true);

            bucket = context.parsed.DiscreteMeasurementValueQuality;
            if (null == bucket)
                context.parsed.DiscreteMeasurementValueQuality = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Default bid type such as Default Energy Bid, Default Minimum Load Bid, and Default Startup Bid
             *
             */
            base.parse_element (/<cim:DefaultBid.bidType>([\s\S]*?)<\/cim:DefaultBid.bidType>/g, obj, "bidType", base.to_string, sub, context);

            /**
             * Minimum load cost in \$/hr
             *
             */
            base.parse_element (/<cim:DefaultBid.minLoadCost>([\s\S]*?)<\/cim:DefaultBid.minLoadCost>/g, obj, "minLoadCost", base.to_string, sub, context);

            /**
             * on-peak, off-peak, or all
             *
             */
            base.parse_element (/<cim:DefaultBid.peakFlag>([\s\S]*?)<\/cim:DefaultBid.peakFlag>/g, obj, "peakFlag", base.to_string, sub, context);

            base.parse_attribute (/<cim:DefaultBid.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context, true);

            base.parse_attribute (/<cim:DefaultBid.DefaultBidCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DefaultBidCurve", sub, context, true);

            bucket = context.parsed.DefaultBid;
            if (null == bucket)
                context.parsed.DefaultBid = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Used to calculate generation "participation" of an individual pnond in an AggregatePnode.
             *
             */
            base.parse_element (/<cim:GenDistributionFactor.factor>([\s\S]*?)<\/cim:GenDistributionFactor.factor>/g, obj, "factor", base.to_float, sub, context);

            base.parse_attribute (/<cim:GenDistributionFactor.AggregatedPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AggregatedPnode", sub, context, true);

            base.parse_attribute (/<cim:GenDistributionFactor.IndividualPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "IndividualPnode", sub, context, true);

            bucket = context.parsed.GenDistributionFactor;
            if (null == bucket)
                context.parsed.GenDistributionFactor = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * An EnergyTransaction shall have at least one EnergyProfile.
             *
             */
            base.parse_attribute (/<cim:EnergyProfile.EnergyTransaction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyTransaction", sub, context, true);

            base.parse_attribute (/<cim:EnergyProfile.TransactionBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransactionBid", sub, context, true);

            bucket = context.parsed.EnergyProfile;
            if (null == bucket)
                context.parsed.EnergyProfile = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Rating set numbers
             *
             */
            base.parse_element (/<cim:MktAnalogLimitSet.ratingSet>([\s\S]*?)<\/cim:MktAnalogLimitSet.ratingSet>/g, obj, "ratingSet", base.to_string, sub, context);

            bucket = context.parsed.MktAnalogLimitSet;
            if (null == bucket)
                context.parsed.MktAnalogLimitSet = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            base.parse_attribute (/<cim:MktACLineSegment.EndAFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndAFlow", sub, context, true);

            base.parse_attribute (/<cim:MktACLineSegment.EndBFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndBFlow", sub, context, true);

            bucket = context.parsed.MktACLineSegment;
            if (null == bucket)
                context.parsed.MktACLineSegment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The start of the time interval for which requirement is defined.
             *
             */
            base.parse_element (/<cim:DistributionFactorSet.intervalStartTime>([\s\S]*?)<\/cim:DistributionFactorSet.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);

            /**
             * The end of the time interval for which requirement is defined.
             *
             */
            base.parse_element (/<cim:DistributionFactorSet.intervalEndTime>([\s\S]*?)<\/cim:DistributionFactorSet.intervalEndTime>/g, obj, "intervalEndTime", base.to_datetime, sub, context);

            base.parse_element (/<cim:DistributionFactorSet.marketType>([\s\S]*?)<\/cim:DistributionFactorSet.marketType>/g, obj, "marketType", base.to_string, sub, context);

            bucket = context.parsed.DistributionFactorSet;
            if (null == bucket)
                context.parsed.DistributionFactorSet = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            base.parse_attribute (/<cim:TransferInterface.TransferInterfaceSolution\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransferInterfaceSolution", sub, context, true);

            base.parse_attribute (/<cim:TransferInterface.HostControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HostControlArea", sub, context, true);

            bucket = context.parsed.TransferInterface;
            if (null == bucket)
                context.parsed.TransferInterface = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Interval End Time
             *
             */
            base.parse_element (/<cim:GenericConstraints.intervalEndTime>([\s\S]*?)<\/cim:GenericConstraints.intervalEndTime>/g, obj, "intervalEndTime", base.to_datetime, sub, context);

            /**
             * Interval Start Time
             *
             */
            base.parse_element (/<cim:GenericConstraints.intervalStartTime>([\s\S]*?)<\/cim:GenericConstraints.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);

            /**
             * Maximum Limit (MW)
             *
             */
            base.parse_element (/<cim:GenericConstraints.maxLimit>([\s\S]*?)<\/cim:GenericConstraints.maxLimit>/g, obj, "maxLimit", base.to_float, sub, context);

            /**
             * Minimum Limit (MW)
             *
             */
            base.parse_element (/<cim:GenericConstraints.minLimit>([\s\S]*?)<\/cim:GenericConstraints.minLimit>/g, obj, "minLimit", base.to_float, sub, context);

            bucket = context.parsed.GenericConstraints;
            if (null == bucket)
                context.parsed.GenericConstraints = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * the entitlement
             *
             */
            base.parse_element (/<cim:TransmissionInterfaceRightEntitlement.entitlement>([\s\S]*?)<\/cim:TransmissionInterfaceRightEntitlement.entitlement>/g, obj, "entitlement", base.to_float, sub, context);

            /**
             * point of delivery
             *
             */
            base.parse_element (/<cim:TransmissionInterfaceRightEntitlement.POD>([\s\S]*?)<\/cim:TransmissionInterfaceRightEntitlement.POD>/g, obj, "POD", base.to_string, sub, context);

            /**
             * point of receipt
             *
             */
            base.parse_element (/<cim:TransmissionInterfaceRightEntitlement.POR>([\s\S]*?)<\/cim:TransmissionInterfaceRightEntitlement.POR>/g, obj, "POR", base.to_string, sub, context);

            /**
             * Operating date and hour when the entitlement applies
             *
             */
            base.parse_element (/<cim:TransmissionInterfaceRightEntitlement.startOperatingDate>([\s\S]*?)<\/cim:TransmissionInterfaceRightEntitlement.startOperatingDate>/g, obj, "startOperatingDate", base.to_datetime, sub, context);

            base.parse_attribute (/<cim:TransmissionInterfaceRightEntitlement.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context, true);

            base.parse_attribute (/<cim:TransmissionInterfaceRightEntitlement.ContractRight\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ContractRight", sub, context, true);

            bucket = context.parsed.TransmissionInterfaceRightEntitlement;
            if (null == bucket)
                context.parsed.TransmissionInterfaceRightEntitlement = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Pool Losses MW
             *
             * Attribute Usage: The active power losses of the pool in MW
             *
             */
            base.parse_element (/<cim:ControlAreaSolutionData.solvedLosses>([\s\S]*?)<\/cim:ControlAreaSolutionData.solvedLosses>/g, obj, "solvedLosses", base.to_float, sub, context);

            /**
             * Pool MW Interchange
             *
             * Attribute Usage: The active power interchange of the pool
             *
             */
            base.parse_element (/<cim:ControlAreaSolutionData.solvedInterchange>([\s\S]*?)<\/cim:ControlAreaSolutionData.solvedInterchange>/g, obj, "solvedInterchange", base.to_float, sub, context);

            base.parse_attribute (/<cim:ControlAreaSolutionData.MktControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktControlArea", sub, context, true);

            bucket = context.parsed.ControlAreaSolutionData;
            if (null == bucket)
                context.parsed.ControlAreaSolutionData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * To indicate a check out type such as adjusted capacity or dispatch capacity.
             *
             */
            base.parse_element (/<cim:InterchangeSchedule.checkOutType>([\s\S]*?)<\/cim:InterchangeSchedule.checkOutType>/g, obj, "checkOutType", base.to_string, sub, context);

            /**
             * Import or export.
             *
             */
            base.parse_element (/<cim:InterchangeSchedule.directionType>([\s\S]*?)<\/cim:InterchangeSchedule.directionType>/g, obj, "directionType", base.to_string, sub, context);

            /**
             * Energy product type.
             *
             */
            base.parse_element (/<cim:InterchangeSchedule.energyType>([\s\S]*?)<\/cim:InterchangeSchedule.energyType>/g, obj, "energyType", base.to_string, sub, context);

            /**
             * Interval length.
             *
             */
            base.parse_element (/<cim:InterchangeSchedule.intervalLength>([\s\S]*?)<\/cim:InterchangeSchedule.intervalLength>/g, obj, "intervalLength", base.to_string, sub, context);

            /**
             * Market type.
             *
             */
            base.parse_element (/<cim:InterchangeSchedule.marketType>([\s\S]*?)<\/cim:InterchangeSchedule.marketType>/g, obj, "marketType", base.to_string, sub, context);

            /**
             * Operating date, hour.
             *
             */
            base.parse_element (/<cim:InterchangeSchedule.operatingDate>([\s\S]*?)<\/cim:InterchangeSchedule.operatingDate>/g, obj, "operatingDate", base.to_datetime, sub, context);

            /**
             * To indicate an out-of-market (OOM) schedule.
             *
             */
            base.parse_element (/<cim:InterchangeSchedule.outOfMarketType>([\s\S]*?)<\/cim:InterchangeSchedule.outOfMarketType>/g, obj, "outOfMarketType", base.to_boolean, sub, context);

            /**
             * Schedule type.
             *
             */
            base.parse_element (/<cim:InterchangeSchedule.scheduleType>([\s\S]*?)<\/cim:InterchangeSchedule.scheduleType>/g, obj, "scheduleType", base.to_string, sub, context);

            /**
             * Wheeling Counter-Resource ID (required when Schedule Type=Wheel).
             *
             */
            base.parse_element (/<cim:InterchangeSchedule.wcrID>([\s\S]*?)<\/cim:InterchangeSchedule.wcrID>/g, obj, "wcrID", base.to_string, sub, context);

            base.parse_attribute (/<cim:InterchangeSchedule.RegisteredInterTie\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredInterTie", sub, context, true);

            base.parse_attribute (/<cim:InterchangeSchedule.InterTie\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InterTie", sub, context, true);

            bucket = context.parsed.InterchangeSchedule;
            if (null == bucket)
                context.parsed.InterchangeSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Time updated
             *
             */
            base.parse_element (/<cim:EnergyPriceIndex.lastModified>([\s\S]*?)<\/cim:EnergyPriceIndex.lastModified>/g, obj, "lastModified", base.to_datetime, sub, context);

            /**
             * Start effective date
             *
             */
            base.parse_element (/<cim:EnergyPriceIndex.startEffectiveDate>([\s\S]*?)<\/cim:EnergyPriceIndex.startEffectiveDate>/g, obj, "startEffectiveDate", base.to_datetime, sub, context);

            /**
             * End effective date
             *
             */
            base.parse_element (/<cim:EnergyPriceIndex.endEffectiveDate>([\s\S]*?)<\/cim:EnergyPriceIndex.endEffectiveDate>/g, obj, "endEffectiveDate", base.to_datetime, sub, context);

            /**
             * Energy price index
             *
             */
            base.parse_element (/<cim:EnergyPriceIndex.energyPriceIndex>([\s\S]*?)<\/cim:EnergyPriceIndex.energyPriceIndex>/g, obj, "energyPriceIndex", base.to_float, sub, context);

            /**
             * EPI type such as wholesale or retail
             *
             */
            base.parse_element (/<cim:EnergyPriceIndex.energyPriceIndexType>([\s\S]*?)<\/cim:EnergyPriceIndex.energyPriceIndexType>/g, obj, "energyPriceIndexType", base.to_string, sub, context);

            base.parse_attribute (/<cim:EnergyPriceIndex.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context, true);

            bucket = context.parsed.EnergyPriceIndex;
            if (null == bucket)
                context.parsed.EnergyPriceIndex = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Loss penalty factor.
             *
             * Defined as: 1 / ( 1 - Incremental Transmission Loss); with the Incremental Transmission Loss expressed as a plus or minus value. The typical range of penalty factors is (0,9 to 1,1).
             *
             */
            base.parse_element (/<cim:LossSensitivity.lossFactor>([\s\S]*?)<\/cim:LossSensitivity.lossFactor>/g, obj, "lossFactor", base.to_float, sub, context);

            base.parse_attribute (/<cim:LossSensitivity.MktConnectivityNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktConnectivityNode", sub, context, true);

            bucket = context.parsed.LossSensitivity;
            if (null == bucket)
                context.parsed.LossSensitivity = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The quality code for the given Analog Value.
             *
             */
            base.parse_element (/<cim:AnalogMeasurementValueQuality.scadaQualityCode>([\s\S]*?)<\/cim:AnalogMeasurementValueQuality.scadaQualityCode>/g, obj, "scadaQualityCode", base.to_string, sub, context);

            base.parse_attribute (/<cim:AnalogMeasurementValueQuality.MktAnalogValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktAnalogValue", sub, context, true);

            bucket = context.parsed.AnalogMeasurementValueQuality;
            if (null == bucket)
                context.parsed.AnalogMeasurementValueQuality = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            base.parse_attribute (/<cim:DefaultConstraintLimit.SecurityConstraintSum\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SecurityConstraintSum", sub, context, true);

            bucket = context.parsed.DefaultConstraintLimit;
            if (null == bucket)
                context.parsed.DefaultConstraintLimit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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

        return (
            {
                parse_UnitInitialConditions: parse_UnitInitialConditions,
                parse_BranchEndFlow: parse_BranchEndFlow,
                parse_EnergyTransaction: parse_EnergyTransaction,
                parse_LossSensitivity: parse_LossSensitivity,
                parse_MWLimitSchedule: parse_MWLimitSchedule,
                parse_DefaultBidCurve: parse_DefaultBidCurve,
                parse_ContingencyConstraintLimit: parse_ContingencyConstraintLimit,
                parse_EnergyPriceIndex: parse_EnergyPriceIndex,
                parse_MktSeriesCompensator: parse_MktSeriesCompensator,
                parse_SwitchStatus: parse_SwitchStatus,
                parse_BaseCaseConstraintLimit: parse_BaseCaseConstraintLimit,
                parse_MktAnalogLimitSet: parse_MktAnalogLimitSet,
                parse_DistributionFactorSet: parse_DistributionFactorSet,
                parse_LoadDistributionFactor: parse_LoadDistributionFactor,
                parse_SCADAInformation: parse_SCADAInformation,
                parse_MktControlArea: parse_MktControlArea,
                parse_InterchangeSchedule: parse_InterchangeSchedule,
                parse_TransmissionPath: parse_TransmissionPath,
                parse_InterchangeETCData: parse_InterchangeETCData,
                parse_ASRequirements: parse_ASRequirements,
                parse_GenDistributionFactor: parse_GenDistributionFactor,
                parse_TransmissionCapacity: parse_TransmissionCapacity,
                parse_TerminalConstraintTerm: parse_TerminalConstraintTerm,
                parse_TransmissionReservation: parse_TransmissionReservation,
                parse_MktACLineSegment: parse_MktACLineSegment,
                parse_TransferInterface: parse_TransferInterface,
                parse_MktSwitch: parse_MktSwitch,
                parse_MktShuntCompensator: parse_MktShuntCompensator,
                parse_TapChangerDynamicData: parse_TapChangerDynamicData,
                parse_SecurityConstraintSum: parse_SecurityConstraintSum,
                parse_MktAnalogLimit: parse_MktAnalogLimit,
                parse_TransmissionInterfaceRightEntitlement: parse_TransmissionInterfaceRightEntitlement,
                parse_IntermittentResourceEligibility: parse_IntermittentResourceEligibility,
                parse_AreaLoadCurve: parse_AreaLoadCurve,
                parse_ServicePoint: parse_ServicePoint,
                parse_GenericConstraints: parse_GenericConstraints,
                parse_DefaultConstraintLimit: parse_DefaultConstraintLimit,
                parse_Profile: parse_Profile,
                parse_ShuntCompensatorDynamicData: parse_ShuntCompensatorDynamicData,
                parse_MktTapChanger: parse_MktTapChanger,
                parse_ControlAreaSolutionData: parse_ControlAreaSolutionData,
                parse_ProfileData: parse_ProfileData,
                parse_ReserveDemandCurve: parse_ReserveDemandCurve,
                parse_MktAnalogValue: parse_MktAnalogValue,
                parse_DiscreteMeasurementValueQuality: parse_DiscreteMeasurementValueQuality,
                parse_GeneratingUnitDynamicValues: parse_GeneratingUnitDynamicValues,
                parse_EnergyConsumerData: parse_EnergyConsumerData,
                parse_DefaultBidCurveData: parse_DefaultBidCurveData,
                parse_AnalogMeasurementValueQuality: parse_AnalogMeasurementValueQuality,
                parse_NodeConstraintTerm: parse_NodeConstraintTerm,
                parse_MktDiscreteValue: parse_MktDiscreteValue,
                parse_EnergyProfile: parse_EnergyProfile,
                parse_TREntitlement: parse_TREntitlement,
                parse_DefaultBid: parse_DefaultBid,
                parse_TransferInterfaceSolution: parse_TransferInterfaceSolution,
                parse_SysLoadDistributionFactor: parse_SysLoadDistributionFactor,
                parse_ConstraintTerm: parse_ConstraintTerm,
                parse_SecurityConstraints: parse_SecurityConstraints
            }
        );
    }
);