define
(
    ["model/base", "model/Common", "model/ControlArea", "model/Core", "model/MarketPlan", "model/Meas", "model/ParticipantInterfaces", "model/Wires"],
    /**
     * Inputs to the market system from external sources.
     */
    function (base, Common, ControlArea, Core, MarketPlan, Meas, ParticipantInterfaces, Wires)
    {

        /**
         * This class models the transmission (either a transmission interface or a POR/POD pair) capacity including Total Transfer Capacity (TTC), Operating Transfer Capacity (OTC), and Capacity Benefit Margin (CBM)
         */
        function parse_TransmissionCapacity (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TransmissionCapacity";
            /**
             * Capacity Benefit Margin (CBM) is used by Markets to calculate the transmission interface limits.
             * This number could be manually or procedurally determined. The CBM is defined per transmission interface (branch group).
             */
            obj["capacityBenefitMargin"] = base.to_float (base.parse_element (/<cim:TransmissionCapacity.capacityBenefitMargin>([\s\S]*?)<\/cim:TransmissionCapacity.capacityBenefitMargin>/g, sub, context, true));
            /**
             * The Operational Transmission Capacity (OTC) is the transmission capacity under the operating condition during a specific time period, incorporating the effects of derates and current settings of operation controls.
             * The OTCs for all transmission interface (branch group) are always provided regardless of outage or switching conditions.
             */
            obj["operationalTransmissionCapacity"] = base.to_float (base.parse_element (/<cim:TransmissionCapacity.operationalTransmissionCapacity>([\s\S]*?)<\/cim:TransmissionCapacity.operationalTransmissionCapacity>/g, sub, context, true));
            /**
             * The Operational Transmission Capacity (OTC) 15 minute Emergency Limit
             */
            obj["OTC15min_emergency"] = base.to_float (base.parse_element (/<cim:TransmissionCapacity.OTC15min_emergency>([\s\S]*?)<\/cim:TransmissionCapacity.OTC15min_emergency>/g, sub, context, true));
            /**
             * The Operational Transmission Capacity (OTC) Emergency Limit.
             */
            obj["OTCemergency"] = base.to_float (base.parse_element (/<cim:TransmissionCapacity.OTCemergency>([\s\S]*?)<\/cim:TransmissionCapacity.OTCemergency>/g, sub, context, true));
            /**
             * point of delivery
             */
            obj["POD"] = base.parse_element (/<cim:TransmissionCapacity.POD>([\s\S]*?)<\/cim:TransmissionCapacity.POD>/g, sub, context, true);
            /**
             * point of receipt
             */
            obj["POR"] = base.parse_element (/<cim:TransmissionCapacity.POR>([\s\S]*?)<\/cim:TransmissionCapacity.POR>/g, sub, context, true);
            /**
             * Operating date &amp; hour when the entitlement applies
             */
            obj["startOperatingDate"] = base.to_datetime (base.parse_element (/<cim:TransmissionCapacity.startOperatingDate>([\s\S]*?)<\/cim:TransmissionCapacity.startOperatingDate>/g, sub, context, true));
            /**
             * Total Transmission Capacity
             */
            obj["totalTransmissionCapacity"] = base.to_float (base.parse_element (/<cim:TransmissionCapacity.totalTransmissionCapacity>([\s\S]*?)<\/cim:TransmissionCapacity.totalTransmissionCapacity>/g, sub, context, true));
            obj["Flowgate"] = base.parse_attribute (/<cim:TransmissionCapacity.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["GenericConstraints"] = base.parse_attribute (/<cim:TransmissionCapacity.GenericConstraints\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.TransmissionCapacity;
            if (null == bucket)
                context.parsed.TransmissionCapacity = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Optimal Power Flow or State Estimator Filter Bank Data for OTS.
         * This is used for RealTime, Study and Maintenance Users
         */
        function parse_ShuntCompensatorDynamicData (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ShuntCompensatorDynamicData";
            /**
             * The injection of reactive power of the filter bank in the NA solution or VCS reactive power production
             */
            obj["mVARInjection"] = base.to_float (base.parse_element (/<cim:ShuntCompensatorDynamicData.mVARInjection>([\s\S]*?)<\/cim:ShuntCompensatorDynamicData.mVARInjection>/g, sub, context, true));
            /**
             * The current status for the Voltage Control Capacitor 1= Connected 0 = Disconnected
             */
            obj["connectionStatus"] = base.parse_element (/<cim:ShuntCompensatorDynamicData.connectionStatus>([\s\S]*?)<\/cim:ShuntCompensatorDynamicData.connectionStatus>/g, sub, context, true);
            /**
             * The desired voltage for the Voltage Control Capacitor
             */
            obj["desiredVoltage"] = base.to_float (base.parse_element (/<cim:ShuntCompensatorDynamicData.desiredVoltage>([\s\S]*?)<\/cim:ShuntCompensatorDynamicData.desiredVoltage>/g, sub, context, true));
            /**
             * Indicator if the voltage control this is regulating True = Yes, False = No
             */
            obj["voltageRegulationStatus"] = base.to_boolean (base.parse_element (/<cim:ShuntCompensatorDynamicData.voltageRegulationStatus>([\s\S]*?)<\/cim:ShuntCompensatorDynamicData.voltageRegulationStatus>/g, sub, context, true));
            /**
             * Voltage control capacitor step position
             */
            obj["stepPosition"] = base.parse_element (/<cim:ShuntCompensatorDynamicData.stepPosition>([\s\S]*?)<\/cim:ShuntCompensatorDynamicData.stepPosition>/g, sub, context, true);
            obj["MktShuntCompensator"] = base.parse_attribute (/<cim:ShuntCompensatorDynamicData.MktShuntCompensator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ShuntCompensatorDynamicData;
            if (null == bucket)
                context.parsed.ShuntCompensatorDynamicData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A Transmission Right(TR) can be a chain of TR's or on individual.
         * When a transmission right is not a chain, this is formally the ETC/TOR Entitlement for each ETC/TOR contract with the inclusion of CVR(Converted Rights) as an ETC. This is the sum of all entitlements on all related transmission interfaces for the same TR.
         */
        function parse_TREntitlement (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TREntitlement";
            /**
             * The entitlement
             */
            obj["entitlement"] = base.to_float (base.parse_element (/<cim:TREntitlement.entitlement>([\s\S]*?)<\/cim:TREntitlement.entitlement>/g, sub, context, true));
            /**
             * Operating date and hour when the entitlement applies
             */
            obj["startOperatingDate"] = base.to_datetime (base.parse_element (/<cim:TREntitlement.startOperatingDate>([\s\S]*?)<\/cim:TREntitlement.startOperatingDate>/g, sub, context, true));
            obj["TransmissionContractRight"] = base.parse_attribute (/<cim:TREntitlement.TransmissionContractRight\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.TREntitlement;
            if (null == bucket)
                context.parsed.TREntitlement = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Possibly time-varying max MW or MVA and optionally Min MW limit or MVA limit (Y1 and Y2, respectively) assigned to a constraint for a specific contingency.
         * Use CurveSchedule XAxisUnits to specify MW or MVA.
         */
        function parse_ContingencyConstraintLimit (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "ContingencyConstraintLimit";
            obj["SecurityConstraintSum"] = base.parse_attribute (/<cim:ContingencyConstraintLimit.SecurityConstraintSum\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["MktContingency"] = base.parse_attribute (/<cim:ContingencyConstraintLimit.MktContingency\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["MWLimitSchedules"] = base.parse_attribute (/<cim:ContingencyConstraintLimit.MWLimitSchedules\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ContingencyConstraintLimit;
            if (null == bucket)
                context.parsed.ContingencyConstraintLimit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Subclass of IEC61970:Meas:AnalogValue
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
         * This is used for RealTime, Study and Maintenance Users
         */
        function parse_GeneratingUnitDynamicValues (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "GeneratingUnitDynamicValues";
            /**
             * Loss Factor
             */
            obj["lossFactor"] = base.to_float (base.parse_element (/<cim:GeneratingUnitDynamicValues.lossFactor>([\s\S]*?)<\/cim:GeneratingUnitDynamicValues.lossFactor>/g, sub, context, true));
            /**
             * The maximum active power generation of the unit in MW
             */
            obj["maximumMW"] = base.to_float (base.parse_element (/<cim:GeneratingUnitDynamicValues.maximumMW>([\s\S]*?)<\/cim:GeneratingUnitDynamicValues.maximumMW>/g, sub, context, true));
            /**
             * The minimum active power generation of the unit in MW
             */
            obj["minimumMW"] = base.to_float (base.parse_element (/<cim:GeneratingUnitDynamicValues.minimumMW>([\s\S]*?)<\/cim:GeneratingUnitDynamicValues.minimumMW>/g, sub, context, true));
            /**
             * Unit reactive power generation in MVAR
             */
            obj["mVAR"] = base.to_float (base.parse_element (/<cim:GeneratingUnitDynamicValues.mVAR>([\s\S]*?)<\/cim:GeneratingUnitDynamicValues.mVAR>/g, sub, context, true));
            /**
             * Unit active power generation in MW
             */
            obj["mw"] = base.to_float (base.parse_element (/<cim:GeneratingUnitDynamicValues.mw>([\s\S]*?)<\/cim:GeneratingUnitDynamicValues.mw>/g, sub, context, true));
            /**
             * Unit sencivity factor.
             * The distribution factors (DFAX) for the unit
             */
            obj["sensitivity"] = base.to_float (base.parse_element (/<cim:GeneratingUnitDynamicValues.sensitivity>([\s\S]*?)<\/cim:GeneratingUnitDynamicValues.sensitivity>/g, sub, context, true));
            obj["Flowgate"] = base.parse_attribute (/<cim:GeneratingUnitDynamicValues.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["MktGeneratingUnit"] = base.parse_attribute (/<cim:GeneratingUnitDynamicValues.MktGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.GeneratingUnitDynamicValues;
            if (null == bucket)
                context.parsed.GeneratingUnitDynamicValues = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An electrical connection, link, or line consisting of one or more parallel transmission elements between two areas of the interconnected electric systems, or portions thereof.
         * TransmissionCorridor and TransmissionRightOfWay refer to legal aspects. The TransmissionPath refers to the segments between a TransmissionProvider's ServicePoints.
         */
        function parse_TransmissionPath (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TransmissionPath";
            /**
             * The available transmission capability of a transmission path for the reference direction.
             */
            obj["availTransferCapability"] = base.parse_element (/<cim:TransmissionPath.availTransferCapability>([\s\S]*?)<\/cim:TransmissionPath.availTransferCapability>/g, sub, context, true);
            /**
             * Flag which indicates if the transmission path is also a designated interconnection "parallel path".
             */
            obj["parallelPathFlag"] = base.to_boolean (base.parse_element (/<cim:TransmissionPath.parallelPathFlag>([\s\S]*?)<\/cim:TransmissionPath.parallelPathFlag>/g, sub, context, true));
            /**
             * The total transmission capability of a transmission path in the reference direction.
             */
            obj["totalTransferCapability"] = base.parse_element (/<cim:TransmissionPath.totalTransferCapability>([\s\S]*?)<\/cim:TransmissionPath.totalTransferCapability>/g, sub, context, true);
            /**
             * A transmission path has a "point-of-delivery" service point
             */
            obj["DeliveryPoint"] = base.parse_attribute (/<cim:TransmissionPath.DeliveryPoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * A TransmissionPath is contained in a TransmissionCorridor.
             */
            obj["For"] = base.parse_attribute (/<cim:TransmissionPath.For\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * A transmission path has a "point-of-receipt" service point
             */
            obj["PointOfReceipt"] = base.parse_attribute (/<cim:TransmissionPath.PointOfReceipt\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.TransmissionPath;
            if (null == bucket)
                context.parsed.TransmissionPath = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A constraint term is one element of a linear constraint.
         */
        function parse_ConstraintTerm (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ConstraintTerm";
            obj["factor"] = base.parse_element (/<cim:ConstraintTerm.factor>([\s\S]*?)<\/cim:ConstraintTerm.factor>/g, sub, context, true);
            /**
             * The function is an enumerated value that can be 'active', 'reactive', or 'VA' to indicate the type of flow.
             */
            obj["function"] = base.parse_element (/<cim:ConstraintTerm.function>([\s\S]*?)<\/cim:ConstraintTerm.function>/g, sub, context, true);
            obj["SecurityConstraintSum"] = base.parse_attribute (/<cim:ConstraintTerm.SecurityConstraintSum\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ConstraintTerm;
            if (null == bucket)
                context.parsed.ConstraintTerm = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Subclass of IEC61970:Meas:DiscreteValue
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
         * Describes interval for which the requirement is applicable.
         */
        function parse_ASRequirements (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ASRequirements";
            /**
             * The start of the time interval for which requirement is defined.
             */
            obj["intervalStartTime"] = base.to_datetime (base.parse_element (/<cim:ASRequirements.intervalStartTime>([\s\S]*?)<\/cim:ASRequirements.intervalStartTime>/g, sub, context, true));
            bucket = context.parsed.ASRequirements;
            if (null == bucket)
                context.parsed.ASRequirements = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A transmission reservation is obtained from the OASIS system to reserve transmission for a specified time period, transmission path and transmission product.
         */
        function parse_TransmissionReservation (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TransmissionReservation";
            obj["EnergyTransaction"] = base.parse_attribute (/<cim:TransmissionReservation.EnergyTransaction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["TransmissionPath"] = base.parse_attribute (/<cim:TransmissionReservation.TransmissionPath\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["Sink"] = base.parse_attribute (/<cim:TransmissionReservation.Sink\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["TransactionBid"] = base.parse_attribute (/<cim:TransmissionReservation.TransactionBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["Source"] = base.parse_attribute (/<cim:TransmissionReservation.Source\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.TransmissionReservation;
            if (null == bucket)
                context.parsed.TransmissionReservation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * TNA Interface Definitions from OPF for VSA
         */
        function parse_TransferInterfaceSolution (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TransferInterfaceSolution";
            /**
             * The margin for the interface
             */
            obj["interfaceMargin"] = base.to_float (base.parse_element (/<cim:TransferInterfaceSolution.interfaceMargin>([\s\S]*?)<\/cim:TransferInterfaceSolution.interfaceMargin>/g, sub, context, true));
            /**
             * Transfer Interface + Limit 
            Attribute Usage: The absoloute of the maximum flow on the transfer interface.
             * This is a positive MW value.
             */
            obj["transferLimit"] = base.to_float (base.parse_element (/<cim:TransferInterfaceSolution.transferLimit>([\s\S]*?)<\/cim:TransferInterfaceSolution.transferLimit>/g, sub, context, true));
            /**
             * Post Transfer MW for step
             */
            obj["postTransferMW"] = base.to_float (base.parse_element (/<cim:TransferInterfaceSolution.postTransferMW>([\s\S]*?)<\/cim:TransferInterfaceSolution.postTransferMW>/g, sub, context, true));
            obj["TransferInterface"] = base.parse_attribute (/<cim:TransferInterfaceSolution.TransferInterface\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["MktContingencyB"] = base.parse_attribute (/<cim:TransferInterfaceSolution.MktContingencyB\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj[" MktContingencyA"] = base.parse_attribute (/<cim:TransferInterfaceSolution. MktContingencyA\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.TransferInterfaceSolution;
            if (null == bucket)
                context.parsed.TransferInterfaceSolution = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * To be used only to constrain a quantity that cannot be associated with a terminal.
         * For example, a registered generating unit that is not electrically connected to the network.
         */
        function parse_NodeConstraintTerm (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ConstraintTerm (context, sub);
            obj.cls = "NodeConstraintTerm";
            obj["MktConnectivityNode"] = base.parse_attribute (/<cim:NodeConstraintTerm.MktConnectivityNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.NodeConstraintTerm;
            if (null == bucket)
                context.parsed.NodeConstraintTerm = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Default bid curve for default energy bid curve and default startup curves (cost and time)
         */
        function parse_DefaultBidCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "DefaultBidCurve";
            /**
             * To indicate a type used for a default energy bid curve, such as LMP, cost or consultative based.
             */
            obj["curveType"] = base.parse_element (/<cim:DefaultBidCurve.curveType>([\s\S]*?)<\/cim:DefaultBidCurve.curveType>/g, sub, context, true);
            /**
             * Default energy bid adder flag
             */
            obj["debAdderFlag"] = base.parse_element (/<cim:DefaultBidCurve.debAdderFlag>([\s\S]*?)<\/cim:DefaultBidCurve.debAdderFlag>/g, sub, context, true);
            obj["DefaultBid"] = base.parse_attribute (/<cim:DefaultBidCurve.DefaultBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.DefaultBidCurve;
            if (null == bucket)
                context.parsed.DefaultBidCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Dynamic flows and ratings associated with a branch end.
         */
        function parse_BranchEndFlow (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "BranchEndFlow";
            /**
             * The MW flow on the branch
             * Attribute Usage: Active power flow at the series device, transformer, phase shifter, or line end
             */
            obj["mwFlow"] = base.to_float (base.parse_element (/<cim:BranchEndFlow.mwFlow>([\s\S]*?)<\/cim:BranchEndFlow.mwFlow>/g, sub, context, true));
            /**
             * The MVAR flow on the branch
             * Attribute Usage: Reactive power flow at the series device, transformer, phase shifter, or line end
             */
            obj["mVARFlow"] = base.to_float (base.parse_element (/<cim:BranchEndFlow.mVARFlow>([\s\S]*?)<\/cim:BranchEndFlow.mVARFlow>/g, sub, context, true));
            /**
             * The Normal Rating for the branch
             */
            obj["normalRating"] = base.to_float (base.parse_element (/<cim:BranchEndFlow.normalRating>([\s\S]*?)<\/cim:BranchEndFlow.normalRating>/g, sub, context, true));
            /**
             * The Long Term Rating for the branch
             */
            obj["longTermRating"] = base.to_float (base.parse_element (/<cim:BranchEndFlow.longTermRating>([\s\S]*?)<\/cim:BranchEndFlow.longTermRating>/g, sub, context, true));
            /**
             * The Short Term Rating for the branch
             */
            obj["shortTermRating"] = base.to_float (base.parse_element (/<cim:BranchEndFlow.shortTermRating>([\s\S]*?)<\/cim:BranchEndFlow.shortTermRating>/g, sub, context, true));
            /**
             * The Load Dump Rating for the branch
             */
            obj["loadDumpRating"] = base.to_float (base.parse_element (/<cim:BranchEndFlow.loadDumpRating>([\s\S]*?)<\/cim:BranchEndFlow.loadDumpRating>/g, sub, context, true));
            bucket = context.parsed.BranchEndFlow;
            if (null == bucket)
                context.parsed.BranchEndFlow = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A profile is a simpler curve type.
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
         */
        function parse_UnitInitialConditions (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "UnitInitialConditions";
            /**
             * Cumulative energy production over trading period.
             */
            obj["cumEnergy"] = base.parse_element (/<cim:UnitInitialConditions.cumEnergy>([\s\S]*?)<\/cim:UnitInitialConditions.cumEnergy>/g, sub, context, true);
            /**
             * Cumulative number of status changes of the resource.
             */
            obj["cumStatusChanges"] = base.parse_element (/<cim:UnitInitialConditions.cumStatusChanges>([\s\S]*?)<\/cim:UnitInitialConditions.cumStatusChanges>/g, sub, context, true);
            /**
             * Number of start ups in the Operating Day until the end of previous hour.
             */
            obj["numberOfStartups"] = base.parse_element (/<cim:UnitInitialConditions.numberOfStartups>([\s\S]*?)<\/cim:UnitInitialConditions.numberOfStartups>/g, sub, context, true);
            /**
             * 'true' if the GeneratingUnit is currently On-Line
             */
            obj["onlineStatus"] = base.to_boolean (base.parse_element (/<cim:UnitInitialConditions.onlineStatus>([\s\S]*?)<\/cim:UnitInitialConditions.onlineStatus>/g, sub, context, true));
            /**
             * Resource MW output at the end of previous clearing period.
             */
            obj["resourceMW"] = base.parse_element (/<cim:UnitInitialConditions.resourceMW>([\s\S]*?)<\/cim:UnitInitialConditions.resourceMW>/g, sub, context, true);
            /**
             * Resource status at the end of previous clearing period:
            0 - off-line
            1 - on-line production
            2 - in shutdown process
             * 3 - in startup process
             */
            obj["resourceStatus"] = base.parse_element (/<cim:UnitInitialConditions.resourceStatus>([\s\S]*?)<\/cim:UnitInitialConditions.resourceStatus>/g, sub, context, true);
            /**
             * Time and date for resourceStatus
             */
            obj["statusDate"] = base.to_datetime (base.parse_element (/<cim:UnitInitialConditions.statusDate>([\s\S]*?)<\/cim:UnitInitialConditions.statusDate>/g, sub, context, true));
            /**
             * Time in market trading intervals the resource is in the state as of the end of the previous clearing period.
             */
            obj["timeInStatus"] = base.to_float (base.parse_element (/<cim:UnitInitialConditions.timeInStatus>([\s\S]*?)<\/cim:UnitInitialConditions.timeInStatus>/g, sub, context, true));
            /**
             * Time interval
             */
            obj["timeInterval"] = base.to_datetime (base.parse_element (/<cim:UnitInitialConditions.timeInterval>([\s\S]*?)<\/cim:UnitInitialConditions.timeInterval>/g, sub, context, true));
            obj["GeneratingUnit"] = base.parse_attribute (/<cim:UnitInitialConditions.GeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.UnitInitialConditions;
            if (null == bucket)
                context.parsed.UnitInitialConditions = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Subclass of IEC61970:Wires:ShuntCompensator
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
         */
        function parse_MktAnalogLimit (context, sub)
        {
            var obj;
            var bucket;

            obj = Meas.parse_AnalogLimit (context, sub);
            obj.cls = "MktAnalogLimit";
            /**
             * true if limit exceeded
             */
            obj["exceededLimit"] = base.to_boolean (base.parse_element (/<cim:MktAnalogLimit.exceededLimit>([\s\S]*?)<\/cim:MktAnalogLimit.exceededLimit>/g, sub, context, true));
            /**
             * The type of limit the value represents
            Branch Limit Types:
            Short Term
            Medium Term
            Long Term
            Voltage Limits:
            High
             * Low
             */
            obj["limitType"] = base.parse_element (/<cim:MktAnalogLimit.limitType>([\s\S]*?)<\/cim:MktAnalogLimit.limitType>/g, sub, context, true);
            bucket = context.parsed.MktAnalogLimit;
            if (null == bucket)
                context.parsed.MktAnalogLimit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Subclass of IEC61970:Wires:SeriesCompensator
         */
        function parse_MktSeriesCompensator (context, sub)
        {
            var obj;
            var bucket;

            obj = Wires.parse_SeriesCompensator (context, sub);
            obj.cls = "MktSeriesCompensator";
            obj["EndAFlow"] = base.parse_attribute (/<cim:MktSeriesCompensator.EndAFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["EndBFlow"] = base.parse_attribute (/<cim:MktSeriesCompensator.EndBFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MktSeriesCompensator;
            if (null == bucket)
                context.parsed.MktSeriesCompensator = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Indicates whether unit is eligible for treatment as a intermittent variable renewable resource
         */
        function parse_IntermittentResourceEligibility (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketPlan.parse_MarketFactors (context, sub);
            obj.cls = "IntermittentResourceEligibility";
            /**
             * Indicates whether a resource is eligible for PIRP program for a given hour
             */
            obj["eligibilityStatus"] = base.parse_element (/<cim:IntermittentResourceEligibility.eligibilityStatus>([\s\S]*?)<\/cim:IntermittentResourceEligibility.eligibilityStatus>/g, sub, context, true);
            obj["RegisteredResource"] = base.parse_attribute (/<cim:IntermittentResourceEligibility.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.IntermittentResourceEligibility;
            if (null == bucket)
                context.parsed.IntermittentResourceEligibility = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Optimal Power Flow or State Estimator Phase Shifter Data.
         * This is used for RealTime, Study and Maintenance Users. SE Solution Phase Shifter Measurements from the last run of SE
         */
        function parse_TapChangerDynamicData (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TapChangerDynamicData";
            /**
             * Tap position of the phase shifter, high-side tap position of the transformer, or  low-side tap position of the transformer
             */
            obj["tapPosition"] = base.to_float (base.parse_element (/<cim:TapChangerDynamicData.tapPosition>([\s\S]*?)<\/cim:TapChangerDynamicData.tapPosition>/g, sub, context, true));
            /**
             * The desired voltage for the LTC
             */
            obj["desiredVoltage"] = base.to_float (base.parse_element (/<cim:TapChangerDynamicData.desiredVoltage>([\s\S]*?)<\/cim:TapChangerDynamicData.desiredVoltage>/g, sub, context, true));
            /**
             * Indicator if the LTC transformer is regulating True = Yes, False = No
             */
            obj["voltageRegulationStatus"] = base.to_boolean (base.parse_element (/<cim:TapChangerDynamicData.voltageRegulationStatus>([\s\S]*?)<\/cim:TapChangerDynamicData.voltageRegulationStatus>/g, sub, context, true));
            /**
             * True means the phase shifter is regulating.
             */
            obj["angleRegulationStatus"] = base.to_boolean (base.parse_element (/<cim:TapChangerDynamicData.angleRegulationStatus>([\s\S]*?)<\/cim:TapChangerDynamicData.angleRegulationStatus>/g, sub, context, true));
            /**
             * Phase Shifter Desired MW.
             * The active power regulation setpoint of the phase shifter
             */
            obj["desiredMW"] = base.to_float (base.parse_element (/<cim:TapChangerDynamicData.desiredMW>([\s\S]*?)<\/cim:TapChangerDynamicData.desiredMW>/g, sub, context, true));
            /**
             * Phase Shifter Angle.
             * The solved phase angle shift of the phase shifter
             */
            obj["solvedAngle"] = base.to_float (base.parse_element (/<cim:TapChangerDynamicData.solvedAngle>([\s\S]*?)<\/cim:TapChangerDynamicData.solvedAngle>/g, sub, context, true));
            /**
             * The minimum phase angle shift of the phase shifter
             */
            obj["minimumAngle"] = base.to_float (base.parse_element (/<cim:TapChangerDynamicData.minimumAngle>([\s\S]*?)<\/cim:TapChangerDynamicData.minimumAngle>/g, sub, context, true));
            /**
             * The maximum phase angle shift of the phase shifter
             */
            obj["maximumAngle"] = base.to_float (base.parse_element (/<cim:TapChangerDynamicData.maximumAngle>([\s\S]*?)<\/cim:TapChangerDynamicData.maximumAngle>/g, sub, context, true));
            obj["MktTapChanger"] = base.parse_attribute (/<cim:TapChangerDynamicData.MktTapChanger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.TapChangerDynamicData;
            if (null == bucket)
                context.parsed.TapChangerDynamicData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This class models the load distribution factors.
         * This class should be used in one of two ways:
         */
        function parse_LoadDistributionFactor (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "LoadDistributionFactor";
            /**
             * Real power (MW) load distribution factor
             */
            obj["pDistFactor"] = base.to_float (base.parse_element (/<cim:LoadDistributionFactor.pDistFactor>([\s\S]*?)<\/cim:LoadDistributionFactor.pDistFactor>/g, sub, context, true));
            /**
             * Reactive power (MVAr) load distribution factor
             */
            obj["qDistFactor"] = base.to_float (base.parse_element (/<cim:LoadDistributionFactor.qDistFactor>([\s\S]*?)<\/cim:LoadDistributionFactor.qDistFactor>/g, sub, context, true));
            obj["IndividualPnode"] = base.parse_attribute (/<cim:LoadDistributionFactor.IndividualPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["AggregatedPnode"] = base.parse_attribute (/<cim:LoadDistributionFactor.AggregatedPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.LoadDistributionFactor;
            if (null == bucket)
                context.parsed.LoadDistributionFactor = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The defined termination points of a transmission path (down to distribution level or to a customer - generation or consumption or both).
         * Service points are defined from the viewpoint of the transmission service. Each service point is contained within (or on the boundary of) an interchange area. A service point is source or destination of a transaction.
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
         */
        function parse_InterchangeETCData (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "InterchangeETCData";
            /**
             * Existing transmission contract number
             */
            obj["contractNumber"] = base.parse_element (/<cim:InterchangeETCData.contractNumber>([\s\S]*?)<\/cim:InterchangeETCData.contractNumber>/g, sub, context, true);
            /**
             * Existing transmission contract usage MW value
             */
            obj["usageMW"] = base.to_float (base.parse_element (/<cim:InterchangeETCData.usageMW>([\s\S]*?)<\/cim:InterchangeETCData.usageMW>/g, sub, context, true));
            obj["InterchangeSchedule"] = base.parse_attribute (/<cim:InterchangeETCData.InterchangeSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.InterchangeETCData;
            if (null == bucket)
                context.parsed.InterchangeETCData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This class models the system distribution factors.
         * This class needs to be used along with the HostControlArea and the ConnectivityNode to show the distribution of each individual party.
         */
        function parse_SysLoadDistributionFactor (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SysLoadDistributionFactor";
            /**
             * Used to calculate load "participation" of a connectivity node in an host control area
             */
            obj["factor"] = base.to_float (base.parse_element (/<cim:SysLoadDistributionFactor.factor>([\s\S]*?)<\/cim:SysLoadDistributionFactor.factor>/g, sub, context, true));
            obj["HostControlArea"] = base.parse_attribute (/<cim:SysLoadDistributionFactor.HostControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["MktConnectivityNode"] = base.parse_attribute (/<cim:SysLoadDistributionFactor.MktConnectivityNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.SysLoadDistributionFactor;
            if (null == bucket)
                context.parsed.SysLoadDistributionFactor = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Specifies the schedule for energy transfers between interchange areas that are necessary to satisfy the associated interchange transaction.
         */
        function parse_EnergyTransaction (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "EnergyTransaction";
            /**
             * Interchange capacity flag.
             * When the flag is set to true, it indicates a transaction is capacity backed.
             */
            obj["capacityBacked"] = base.to_boolean (base.parse_element (/<cim:EnergyTransaction.capacityBacked>([\s\S]*?)<\/cim:EnergyTransaction.capacityBacked>/g, sub, context, true));
            /**
             * Maximum congestion charges in monetary units.
             */
            obj["congestChargeMax"] = base.parse_element (/<cim:EnergyTransaction.congestChargeMax>([\s\S]*?)<\/cim:EnergyTransaction.congestChargeMax>/g, sub, context, true);
            /**
             * Delivery point active power.
             */
            obj["deliveryPointP"] = base.parse_element (/<cim:EnergyTransaction.deliveryPointP>([\s\S]*?)<\/cim:EnergyTransaction.deliveryPointP>/g, sub, context, true);
            /**
             * Transaction minimum active power if dispatchable.
             */
            obj["energyMin"] = base.parse_element (/<cim:EnergyTransaction.energyMin>([\s\S]*?)<\/cim:EnergyTransaction.energyMin>/g, sub, context, true);
            /**
             * Firm interchange flag indicates whether or not this energy transaction can be changed without potential financial consequences.
             */
            obj["firmInterchangeFlag"] = base.to_boolean (base.parse_element (/<cim:EnergyTransaction.firmInterchangeFlag>([\s\S]*?)<\/cim:EnergyTransaction.firmInterchangeFlag>/g, sub, context, true));
            /**
             * Willing to Pay congestion flag
             */
            obj["payCongestion"] = base.to_boolean (base.parse_element (/<cim:EnergyTransaction.payCongestion>([\s\S]*?)<\/cim:EnergyTransaction.payCongestion>/g, sub, context, true));
            /**
             * Reason for energy transaction.
             */
            obj["reason"] = base.parse_element (/<cim:EnergyTransaction.reason>([\s\S]*?)<\/cim:EnergyTransaction.reason>/g, sub, context, true);
            /**
             * Receipt point active power.
             */
            obj["receiptPointP"] = base.parse_element (/<cim:EnergyTransaction.receiptPointP>([\s\S]*?)<\/cim:EnergyTransaction.receiptPointP>/g, sub, context, true);
            /**
             * { Approve | Deny | Study }
             */
            obj["state"] = base.parse_element (/<cim:EnergyTransaction.state>([\s\S]*?)<\/cim:EnergyTransaction.state>/g, sub, context, true);
            /**
             * The "Source" for an EnergyTransaction is an EnergyProduct which is injected into a ControlArea.
             * Typically this is a ServicePoint.
             */
            obj["EnergyProduct"] = base.parse_attribute (/<cim:EnergyTransaction.EnergyProduct\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["TransmissionReservation"] = base.parse_attribute (/<cim:EnergyTransaction.TransmissionReservation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Energy is transferred between interchange areas
             */
            obj["Export_SubControlArea"] = base.parse_attribute (/<cim:EnergyTransaction.Export_SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Energy is transferred between interchange areas
             */
            obj["Import_SubControlArea"] = base.parse_attribute (/<cim:EnergyTransaction.Import_SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.EnergyTransaction;
            if (null == bucket)
                context.parsed.EnergyTransaction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Optimal Power Flow or State Estimator Load Data for OTS.
         * This is used for RealTime, Study and Maintenance Users
         */
        function parse_EnergyConsumerData (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "EnergyConsumerData";
            /**
             * The MVAR load
             * Attribute Usage: The reactive power consumption of the load in MW
             */
            obj["loadMVAR"] = base.to_float (base.parse_element (/<cim:EnergyConsumerData.loadMVAR>([\s\S]*?)<\/cim:EnergyConsumerData.loadMVAR>/g, sub, context, true));
            /**
             * The active power consumption of the load in MW
             */
            obj["loadMW"] = base.to_float (base.parse_element (/<cim:EnergyConsumerData.loadMW>([\s\S]*?)<\/cim:EnergyConsumerData.loadMW>/g, sub, context, true));
            obj["MktEnergyConsumer"] = base.parse_attribute (/<cim:EnergyConsumerData.MktEnergyConsumer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.EnergyConsumerData;
            if (null == bucket)
                context.parsed.EnergyConsumerData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Typical for regional transmission operators (RTOs), these constraints include transmission as well as generation group constraints identified in both base case and critical contingency cases.
         */
        function parse_SecurityConstraints (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "SecurityConstraints";
            /**
             * Minimum MW limit (only for transmission constraints).
             */
            obj["minMW"] = base.parse_element (/<cim:SecurityConstraints.minMW>([\s\S]*?)<\/cim:SecurityConstraints.minMW>/g, sub, context, true);
            /**
             * Maximum MW limit
             */
            obj["maxMW"] = base.parse_element (/<cim:SecurityConstraints.maxMW>([\s\S]*?)<\/cim:SecurityConstraints.maxMW>/g, sub, context, true);
            /**
             * Actual branch or group of branches MW flow (only for transmission constraints)
             */
            obj["actualMW"] = base.parse_element (/<cim:SecurityConstraints.actualMW>([\s\S]*?)<\/cim:SecurityConstraints.actualMW>/g, sub, context, true);
            obj["RTO"] = base.parse_attribute (/<cim:SecurityConstraints.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["Flowgate"] = base.parse_attribute (/<cim:SecurityConstraints.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["GeneratingBid"] = base.parse_attribute (/<cim:SecurityConstraints.GeneratingBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.SecurityConstraints;
            if (null == bucket)
                context.parsed.SecurityConstraints = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Typically provided by RTO systems, constraints identified in both base case and critical contingency cases have to be transferred.
         * A constraint has N (&gt;=1) constraint terms. A term is represented by an
         */
        function parse_SecurityConstraintSum (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketPlan.parse_MarketFactors (context, sub);
            obj.cls = "SecurityConstraintSum";
            obj["DefaultConstraintLimit"] = base.parse_attribute (/<cim:SecurityConstraintSum.DefaultConstraintLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["RTO"] = base.parse_attribute (/<cim:SecurityConstraintSum.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["BaseCaseConstraintLimit"] = base.parse_attribute (/<cim:SecurityConstraintSum.BaseCaseConstraintLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.SecurityConstraintSum;
            if (null == bucket)
                context.parsed.SecurityConstraintSum = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Maximum MW and optionally Minimum MW (Y1 and Y2, respectively)
         */
        function parse_MWLimitSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MWLimitSchedule";
            obj["SecurityConstraintLimit"] = base.parse_attribute (/<cim:MWLimitSchedule.SecurityConstraintLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MWLimitSchedule;
            if (null == bucket)
                context.parsed.MWLimitSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Area load curve definition.
         */
        function parse_AreaLoadCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_RegularIntervalSchedule (context, sub);
            obj.cls = "AreaLoadCurve";
            /**
             * Load forecast area type.
             */
            obj["forecastType"] = base.parse_element (/<cim:AreaLoadCurve.forecastType>([\s\S]*?)<\/cim:AreaLoadCurve.forecastType>/g, sub, context, true);
            obj["AggregateNode"] = base.parse_attribute (/<cim:AreaLoadCurve.AggregateNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["TACArea"] = base.parse_attribute (/<cim:AreaLoadCurve.TACArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["MktLoadArea"] = base.parse_attribute (/<cim:AreaLoadCurve.MktLoadArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.AreaLoadCurve;
            if (null == bucket)
                context.parsed.AreaLoadCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Reserve demand curve.
         * Models maximum quantities of reserve required per Market Region and models a reserve demand curve for the minimum quantities of reserve. The ReserveDemandCurve is a relationship between unit operating reserve price in $/MWhr (Y-axis) and unit reserves in MW (X-axis).
         */
        function parse_ReserveDemandCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "ReserveDemandCurve";
            /**
             * Region requirement maximum limit
             */
            obj["reqMaxMW"] = base.to_float (base.parse_element (/<cim:ReserveDemandCurve.reqMaxMW>([\s\S]*?)<\/cim:ReserveDemandCurve.reqMaxMW>/g, sub, context, true));
            /**
             * Reserve requirement type that the max and curve apply to.
             * For example, operating reserve, regulation and contingency.
             */
            obj["reserveRequirementType"] = base.parse_element (/<cim:ReserveDemandCurve.reserveRequirementType>([\s\S]*?)<\/cim:ReserveDemandCurve.reserveRequirementType>/g, sub, context, true);
            obj["ASRequirements"] = base.parse_attribute (/<cim:ReserveDemandCurve.ASRequirements\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["MarketRegion"] = base.parse_attribute (/<cim:ReserveDemandCurve.MarketRegion\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ReserveDemandCurve;
            if (null == bucket)
                context.parsed.ReserveDemandCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Contains information about the update from SCADA
         */
        function parse_SCADAInformation (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SCADAInformation";
            /**
             * time of the update from SCADA
             */
            obj["timeStamp"] = base.to_datetime (base.parse_element (/<cim:SCADAInformation.timeStamp>([\s\S]*?)<\/cim:SCADAInformation.timeStamp>/g, sub, context, true));
            bucket = context.parsed.SCADAInformation;
            if (null == bucket)
                context.parsed.SCADAInformation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Optimal Power Flow or State Estimator Circuit Breaker Status.
         */
        function parse_SwitchStatus (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SwitchStatus";
            /**
             * Circuit Breaker Status (closed or open) of the circuit breaker from the power flow.
             */
            obj["switchStatus"] = base.parse_element (/<cim:SwitchStatus.switchStatus>([\s\S]*?)<\/cim:SwitchStatus.switchStatus>/g, sub, context, true);
            obj["MktSwitch"] = base.parse_attribute (/<cim:SwitchStatus.MktSwitch\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.SwitchStatus;
            if (null == bucket)
                context.parsed.SwitchStatus = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A constraint term associated with a specific terminal on a physical piece of equipment.
         */
        function parse_TerminalConstraintTerm (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ConstraintTerm (context, sub);
            obj.cls = "TerminalConstraintTerm";
            obj["MktTerminal"] = base.parse_attribute (/<cim:TerminalConstraintTerm.MktTerminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.TerminalConstraintTerm;
            if (null == bucket)
                context.parsed.TerminalConstraintTerm = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Data for profile.
         */
        function parse_ProfileData (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ProfileData";
            /**
             * Bid price associated with contract
             */
            obj["bidPrice"] = base.to_float (base.parse_element (/<cim:ProfileData.bidPrice>([\s\S]*?)<\/cim:ProfileData.bidPrice>/g, sub, context, true));
            /**
             * Capacity level for the profile, in MW.
             */
            obj["capacityLevel"] = base.parse_element (/<cim:ProfileData.capacityLevel>([\s\S]*?)<\/cim:ProfileData.capacityLevel>/g, sub, context, true);
            /**
             * Energy level for the profile, in MWH.
             */
            obj["energyLevel"] = base.parse_element (/<cim:ProfileData.energyLevel>([\s\S]*?)<\/cim:ProfileData.energyLevel>/g, sub, context, true);
            /**
             * Minimum MW value of contract
             */
            obj["minimumLevel"] = base.to_float (base.parse_element (/<cim:ProfileData.minimumLevel>([\s\S]*?)<\/cim:ProfileData.minimumLevel>/g, sub, context, true));
            /**
             * Sequence to provide item numbering for the profile. { greater than or equal to 1 }
             */
            obj["sequenceNumber"] = base.parse_element (/<cim:ProfileData.sequenceNumber>([\s\S]*?)<\/cim:ProfileData.sequenceNumber>/g, sub, context, true);
            /**
             * Start date/time for this profile.
             */
            obj["startDateTime"] = base.to_datetime (base.parse_element (/<cim:ProfileData.startDateTime>([\s\S]*?)<\/cim:ProfileData.startDateTime>/g, sub, context, true));
            /**
             * Stop date/time for this profile.
             */
            obj["stopDateTime"] = base.to_datetime (base.parse_element (/<cim:ProfileData.stopDateTime>([\s\S]*?)<\/cim:ProfileData.stopDateTime>/g, sub, context, true));
            bucket = context.parsed.ProfileData;
            if (null == bucket)
                context.parsed.ProfileData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Curve data for default bid curve and startup cost curve.
         */
        function parse_DefaultBidCurveData (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_CurveData (context, sub);
            obj.cls = "DefaultBidCurveData";
            /**
             * Type of calculation basis used to define the default bid segment curve.
             */
            obj["bidSegmentCalcType"] = base.parse_element (/<cim:DefaultBidCurveData.bidSegmentCalcType>([\s\S]*?)<\/cim:DefaultBidCurveData.bidSegmentCalcType>/g, sub, context, true);
            bucket = context.parsed.DefaultBidCurveData;
            if (null == bucket)
                context.parsed.DefaultBidCurveData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Subclass of IEC61970:Wires:Switch
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
         * Use CurveSchedule XAxisUnits to specify MW or MVA. To be used only if the BaseCaseConstraintLimit differs from the DefaultConstraintLimit.
         */
        function parse_BaseCaseConstraintLimit (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "BaseCaseConstraintLimit";
            obj["SecurityConstraintSum"] = base.parse_attribute (/<cim:BaseCaseConstraintLimit.SecurityConstraintSum\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.BaseCaseConstraintLimit;
            if (null == bucket)
                context.parsed.BaseCaseConstraintLimit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Measurement quality flags for Discrete Values.
         */
        function parse_DiscreteMeasurementValueQuality (context, sub)
        {
            var obj;
            var bucket;

            obj = Meas.parse_MeasurementValueQuality (context, sub);
            obj.cls = "DiscreteMeasurementValueQuality";
            /**
             * Switch Manual Replace Indicator.
             * Flag indicating that the switch is manual replace.
             */
            obj["manualReplaceIndicator"] = base.to_boolean (base.parse_element (/<cim:DiscreteMeasurementValueQuality.manualReplaceIndicator>([\s\S]*?)<\/cim:DiscreteMeasurementValueQuality.manualReplaceIndicator>/g, sub, context, true));
            /**
             * Removed From Operation Indicator.
             * Flag indicating that the switch is removed from operation.
             */
            obj["removeFromOperationIndicator"] = base.to_boolean (base.parse_element (/<cim:DiscreteMeasurementValueQuality.removeFromOperationIndicator>([\s\S]*?)<\/cim:DiscreteMeasurementValueQuality.removeFromOperationIndicator>/g, sub, context, true));
            obj["MktDiscreteValue"] = base.parse_attribute (/<cim:DiscreteMeasurementValueQuality.MktDiscreteValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.DiscreteMeasurementValueQuality;
            if (null == bucket)
                context.parsed.DiscreteMeasurementValueQuality = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Subclass of IEC61970:Wires:TapChanger
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
        
        Default Energy Bid
        A Default Energy Bid is a monotonically increasing staircase function consisting at maximum 10 economic bid segments, or 10 ($/MW, MW) pairs.
         * There are three methods for determining the Default Energy Bid:
         */
        function parse_DefaultBid (context, sub)
        {
            var obj;
            var bucket;

            obj = ParticipantInterfaces.parse_Bid (context, sub);
            obj.cls = "DefaultBid";
            /**
             * Default bid type such as Default Energy Bid, Default Minimum Load Bid, and Default Startup Bid
             */
            obj["bidType"] = base.parse_element (/<cim:DefaultBid.bidType>([\s\S]*?)<\/cim:DefaultBid.bidType>/g, sub, context, true);
            /**
             * Minimum load cost in $/hr
             */
            obj["minLoadCost"] = base.parse_element (/<cim:DefaultBid.minLoadCost>([\s\S]*?)<\/cim:DefaultBid.minLoadCost>/g, sub, context, true);
            /**
             * on-peak, off-peak, or all
             */
            obj["peakFlag"] = base.parse_element (/<cim:DefaultBid.peakFlag>([\s\S]*?)<\/cim:DefaultBid.peakFlag>/g, sub, context, true);
            obj["RegisteredResource"] = base.parse_attribute (/<cim:DefaultBid.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["DefaultBidCurve"] = base.parse_attribute (/<cim:DefaultBid.DefaultBidCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.DefaultBid;
            if (null == bucket)
                context.parsed.DefaultBid = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This class models the generation distribution factors.
         * This class needs to be used along with the AggregatedPnode and the IndividualPnode to show the distriubtion of each individual party.
         */
        function parse_GenDistributionFactor (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "GenDistributionFactor";
            /**
             * Used to calculate generation "participation" of an individual pnond in an AggregatePnode.
             */
            obj["factor"] = base.to_float (base.parse_element (/<cim:GenDistributionFactor.factor>([\s\S]*?)<\/cim:GenDistributionFactor.factor>/g, sub, context, true));
            obj["AggregatedPnode"] = base.parse_attribute (/<cim:GenDistributionFactor.AggregatedPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["IndividualPnode"] = base.parse_attribute (/<cim:GenDistributionFactor.IndividualPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.GenDistributionFactor;
            if (null == bucket)
                context.parsed.GenDistributionFactor = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Specifies the start time, stop time, level for an EnergyTransaction.
         */
        function parse_EnergyProfile (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Profile (context, sub);
            obj.cls = "EnergyProfile";
            /**
             * An EnergyTransaction shall have at least one EnergyProfile.
             */
            obj["EnergyTransaction"] = base.parse_attribute (/<cim:EnergyProfile.EnergyTransaction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["TransactionBid"] = base.parse_attribute (/<cim:EnergyProfile.TransactionBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.EnergyProfile;
            if (null == bucket)
                context.parsed.EnergyProfile = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Subclass of IEC61970:Meas:AnalogLimitSet
         */
        function parse_MktAnalogLimitSet (context, sub)
        {
            var obj;
            var bucket;

            obj = Meas.parse_AnalogLimitSet (context, sub);
            obj.cls = "MktAnalogLimitSet";
            /**
             * Rating set numbers
             */
            obj["ratingSet"] = base.parse_element (/<cim:MktAnalogLimitSet.ratingSet>([\s\S]*?)<\/cim:MktAnalogLimitSet.ratingSet>/g, sub, context, true);
            bucket = context.parsed.MktAnalogLimitSet;
            if (null == bucket)
                context.parsed.MktAnalogLimitSet = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Subclass of IEC61970:Wires:ACLineSegment
         */
        function parse_MktACLineSegment (context, sub)
        {
            var obj;
            var bucket;

            obj = Wires.parse_ACLineSegment (context, sub);
            obj.cls = "MktACLineSegment";
            obj["EndAFlow"] = base.parse_attribute (/<cim:MktACLineSegment.EndAFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["EndBFlow"] = base.parse_attribute (/<cim:MktACLineSegment.EndBFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MktACLineSegment;
            if (null == bucket)
                context.parsed.MktACLineSegment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A containing class that groups all the distribution factors within a market.
         * This is calculated daily for DA factors and hourly for RT factors.
         */
        function parse_DistributionFactorSet (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "DistributionFactorSet";
            /**
             * The start of the time interval for which requirement is defined.
             */
            obj["intervalStartTime"] = base.to_datetime (base.parse_element (/<cim:DistributionFactorSet.intervalStartTime>([\s\S]*?)<\/cim:DistributionFactorSet.intervalStartTime>/g, sub, context, true));
            /**
             * The end of the time interval for which requirement is defined.
             */
            obj["intervalEndTime"] = base.to_datetime (base.parse_element (/<cim:DistributionFactorSet.intervalEndTime>([\s\S]*?)<\/cim:DistributionFactorSet.intervalEndTime>/g, sub, context, true));
            obj["marketType"] = base.parse_element (/<cim:DistributionFactorSet.marketType>([\s\S]*?)<\/cim:DistributionFactorSet.marketType>/g, sub, context, true);
            bucket = context.parsed.DistributionFactorSet;
            if (null == bucket)
                context.parsed.DistributionFactorSet = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A Transfer Interface is made up of branches such as transmission lines and transformers.
         */
        function parse_TransferInterface (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TransferInterface";
            obj["TransferInterfaceSolution"] = base.parse_attribute (/<cim:TransferInterface.TransferInterfaceSolution\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["HostControlArea"] = base.parse_attribute (/<cim:TransferInterface.HostControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.TransferInterface;
            if (null == bucket)
                context.parsed.TransferInterface = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Generic constraints can represent secure areas, voltage profile, transient stability and voltage collapse limits.
         * The generic constraints can be one of the following forms:
         */
        function parse_GenericConstraints (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "GenericConstraints";
            /**
             * Interval End Time
             */
            obj["intervalEndTime"] = base.to_datetime (base.parse_element (/<cim:GenericConstraints.intervalEndTime>([\s\S]*?)<\/cim:GenericConstraints.intervalEndTime>/g, sub, context, true));
            /**
             * Interval Start Time
             */
            obj["intervalStartTime"] = base.to_datetime (base.parse_element (/<cim:GenericConstraints.intervalStartTime>([\s\S]*?)<\/cim:GenericConstraints.intervalStartTime>/g, sub, context, true));
            /**
             * Maximum Limit (MW)
             */
            obj["maxLimit"] = base.to_float (base.parse_element (/<cim:GenericConstraints.maxLimit>([\s\S]*?)<\/cim:GenericConstraints.maxLimit>/g, sub, context, true));
            /**
             * Minimum Limit (MW)
             */
            obj["minLimit"] = base.to_float (base.parse_element (/<cim:GenericConstraints.minLimit>([\s\S]*?)<\/cim:GenericConstraints.minLimit>/g, sub, context, true));
            bucket = context.parsed.GenericConstraints;
            if (null == bucket)
                context.parsed.GenericConstraints = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This is formally called the branch group ETC/TOR entitlement with the inclusion of CVR as ETC.
         * Is used to represent the entitlements. This could be also used to represent the TR entitlement on a POR/POD.
         */
        function parse_TransmissionInterfaceRightEntitlement (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TransmissionInterfaceRightEntitlement";
            /**
             * the entitlement
             */
            obj["entitlement"] = base.to_float (base.parse_element (/<cim:TransmissionInterfaceRightEntitlement.entitlement>([\s\S]*?)<\/cim:TransmissionInterfaceRightEntitlement.entitlement>/g, sub, context, true));
            /**
             * point of delivery
             */
            obj["POD"] = base.parse_element (/<cim:TransmissionInterfaceRightEntitlement.POD>([\s\S]*?)<\/cim:TransmissionInterfaceRightEntitlement.POD>/g, sub, context, true);
            /**
             * point of receipt
             */
            obj["POR"] = base.parse_element (/<cim:TransmissionInterfaceRightEntitlement.POR>([\s\S]*?)<\/cim:TransmissionInterfaceRightEntitlement.POR>/g, sub, context, true);
            /**
             * Operating date and hour when the entitlement applies
             */
            obj["startOperatingDate"] = base.to_datetime (base.parse_element (/<cim:TransmissionInterfaceRightEntitlement.startOperatingDate>([\s\S]*?)<\/cim:TransmissionInterfaceRightEntitlement.startOperatingDate>/g, sub, context, true));
            obj["Flowgate"] = base.parse_attribute (/<cim:TransmissionInterfaceRightEntitlement.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["ContractRight"] = base.parse_attribute (/<cim:TransmissionInterfaceRightEntitlement.ContractRight\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.TransmissionInterfaceRightEntitlement;
            if (null == bucket)
                context.parsed.TransmissionInterfaceRightEntitlement = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * State Estimator Solution Pool Interchange and Losses
         */
        function parse_ControlAreaSolutionData (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ControlAreaSolutionData";
            /**
             * Pool Losses MW
             * Attribute Usage: The active power losses of the pool in MW
             */
            obj["solvedLosses"] = base.to_float (base.parse_element (/<cim:ControlAreaSolutionData.solvedLosses>([\s\S]*?)<\/cim:ControlAreaSolutionData.solvedLosses>/g, sub, context, true));
            /**
             * Pool MW Interchange
             * Attribute Usage: The active power interchange of the pool
             */
            obj["solvedInterchange"] = base.to_float (base.parse_element (/<cim:ControlAreaSolutionData.solvedInterchange>([\s\S]*?)<\/cim:ControlAreaSolutionData.solvedInterchange>/g, sub, context, true));
            obj["MktControlArea"] = base.parse_attribute (/<cim:ControlAreaSolutionData.MktControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ControlAreaSolutionData;
            if (null == bucket)
                context.parsed.ControlAreaSolutionData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Interchange schedule class to hold information for interchange schedules such as import export type, energy type, and etc.
         */
        function parse_InterchangeSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "InterchangeSchedule";
            /**
             * To indicate a check out type such as adjusted capacity or dispatch capacity.
             */
            obj["checkOutType"] = base.parse_element (/<cim:InterchangeSchedule.checkOutType>([\s\S]*?)<\/cim:InterchangeSchedule.checkOutType>/g, sub, context, true);
            /**
             * Import or export.
             */
            obj["directionType"] = base.parse_element (/<cim:InterchangeSchedule.directionType>([\s\S]*?)<\/cim:InterchangeSchedule.directionType>/g, sub, context, true);
            /**
             * Energy product type.
             */
            obj["energyType"] = base.parse_element (/<cim:InterchangeSchedule.energyType>([\s\S]*?)<\/cim:InterchangeSchedule.energyType>/g, sub, context, true);
            /**
             * Interval length.
             */
            obj["intervalLength"] = base.parse_element (/<cim:InterchangeSchedule.intervalLength>([\s\S]*?)<\/cim:InterchangeSchedule.intervalLength>/g, sub, context, true);
            /**
             * Market type.
             */
            obj["marketType"] = base.parse_element (/<cim:InterchangeSchedule.marketType>([\s\S]*?)<\/cim:InterchangeSchedule.marketType>/g, sub, context, true);
            /**
             * Operating date, hour.
             */
            obj["operatingDate"] = base.to_datetime (base.parse_element (/<cim:InterchangeSchedule.operatingDate>([\s\S]*?)<\/cim:InterchangeSchedule.operatingDate>/g, sub, context, true));
            /**
             * To indicate an out-of-market (OOM) schedule.
             */
            obj["outOfMarketType"] = base.to_boolean (base.parse_element (/<cim:InterchangeSchedule.outOfMarketType>([\s\S]*?)<\/cim:InterchangeSchedule.outOfMarketType>/g, sub, context, true));
            /**
             * Schedule type.
             */
            obj["scheduleType"] = base.parse_element (/<cim:InterchangeSchedule.scheduleType>([\s\S]*?)<\/cim:InterchangeSchedule.scheduleType>/g, sub, context, true);
            /**
             * Wheeling Counter-Resource ID (required when Schedule Type=Wheel).
             */
            obj["wcrID"] = base.parse_element (/<cim:InterchangeSchedule.wcrID>([\s\S]*?)<\/cim:InterchangeSchedule.wcrID>/g, sub, context, true);
            obj["RegisteredInterTie"] = base.parse_attribute (/<cim:InterchangeSchedule.RegisteredInterTie\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["InterTie"] = base.parse_attribute (/<cim:InterchangeSchedule.InterTie\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.InterchangeSchedule;
            if (null == bucket)
                context.parsed.InterchangeSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An Energy Price Index for each Resource is valid for a period (e.g. daily) that is identified by a Valid Period Start Time and a Valid Period End Time.
         * An Energy Price Index is in $/MWh.
         */
        function parse_EnergyPriceIndex (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "EnergyPriceIndex";
            /**
             * Time updated
             */
            obj["lastModified"] = base.to_datetime (base.parse_element (/<cim:EnergyPriceIndex.lastModified>([\s\S]*?)<\/cim:EnergyPriceIndex.lastModified>/g, sub, context, true));
            /**
             * Start effective date
             */
            obj["startEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:EnergyPriceIndex.startEffectiveDate>([\s\S]*?)<\/cim:EnergyPriceIndex.startEffectiveDate>/g, sub, context, true));
            /**
             * End effective date
             */
            obj["endEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:EnergyPriceIndex.endEffectiveDate>([\s\S]*?)<\/cim:EnergyPriceIndex.endEffectiveDate>/g, sub, context, true));
            /**
             * Energy price index
             */
            obj["energyPriceIndex"] = base.to_float (base.parse_element (/<cim:EnergyPriceIndex.energyPriceIndex>([\s\S]*?)<\/cim:EnergyPriceIndex.energyPriceIndex>/g, sub, context, true));
            /**
             * EPI type such as wholesale or retail
             */
            obj["energyPriceIndexType"] = base.parse_element (/<cim:EnergyPriceIndex.energyPriceIndexType>([\s\S]*?)<\/cim:EnergyPriceIndex.energyPriceIndexType>/g, sub, context, true);
            obj["RegisteredGenerator"] = base.parse_attribute (/<cim:EnergyPriceIndex.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.EnergyPriceIndex;
            if (null == bucket)
                context.parsed.EnergyPriceIndex = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Loss sensitivity applied to a ConnectivityNode for a given time interval.
         */
        function parse_LossSensitivity (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketPlan.parse_MarketFactors (context, sub);
            obj.cls = "LossSensitivity";
            /**
             * Loss penalty factor.
             * Defined as: 1 / ( 1 - Incremental Transmission Loss); with the Incremental Transmission Loss expressed as a plus or minus value. The typical range of penalty factors is (0,9 to 1,1).
             */
            obj["lossFactor"] = base.to_float (base.parse_element (/<cim:LossSensitivity.lossFactor>([\s\S]*?)<\/cim:LossSensitivity.lossFactor>/g, sub, context, true));
            obj["MktConnectivityNode"] = base.parse_attribute (/<cim:LossSensitivity.MktConnectivityNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.LossSensitivity;
            if (null == bucket)
                context.parsed.LossSensitivity = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Measurement quality flags for Analog Values.
         */
        function parse_AnalogMeasurementValueQuality (context, sub)
        {
            var obj;
            var bucket;

            obj = Meas.parse_MeasurementValueQuality (context, sub);
            obj.cls = "AnalogMeasurementValueQuality";
            /**
             * The quality code for the given Analog Value.
             */
            obj["scadaQualityCode"] = base.parse_element (/<cim:AnalogMeasurementValueQuality.scadaQualityCode>([\s\S]*?)<\/cim:AnalogMeasurementValueQuality.scadaQualityCode>/g, sub, context, true);
            obj["MktAnalogValue"] = base.parse_attribute (/<cim:AnalogMeasurementValueQuality.MktAnalogValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.AnalogMeasurementValueQuality;
            if (null == bucket)
                context.parsed.AnalogMeasurementValueQuality = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Possibly time-varying max MW or MVA and optionally Min MW limit or MVA limit (Y1 and Y2, respectively) applied as a default value if no specific constraint limits are specified for a contingency analysis.
         * Use CurveSchedule XAxisUnits to specify MW or MVA.
         */
        function parse_DefaultConstraintLimit (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "DefaultConstraintLimit";
            obj["SecurityConstraintSum"] = base.parse_attribute (/<cim:DefaultConstraintLimit.SecurityConstraintSum\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.DefaultConstraintLimit;
            if (null == bucket)
                context.parsed.DefaultConstraintLimit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Market subclass of IEC61970:ControlArea
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