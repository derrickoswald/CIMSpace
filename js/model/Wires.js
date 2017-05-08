define
(
    ["model/base", "model/Core", "model/LoadModel"],
    /**
     * An extension to the Core and Topology package that models information on the electrical characteristics of Transmission and Distribution networks.
     * This package is used by network applications such as State Estimation, Load Flow and Optimal Power Flow.
     */
    function (base, Core, LoadModel)
    {

        /**
         * Transformer star impedance (Pi-model) that accurately reflects impedance for transformers with 2 or 3 windings.
         * For transformers with 4 or more windings, you must use TransformerMeshImpedance class.
         */
        function parse_TransformerStarImpedance (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TransformerStarImpedance";
            /**
             * Resistance of the transformer end.
             */
            obj["r"] = base.parse_element (/<cim:TransformerStarImpedance.r>([\s\S]*?)<\/cim:TransformerStarImpedance.r>/g, sub, context, true);
            /**
             * Zero sequence series resistance of the transformer end.
             */
            obj["r0"] = base.parse_element (/<cim:TransformerStarImpedance.r0>([\s\S]*?)<\/cim:TransformerStarImpedance.r0>/g, sub, context, true);
            /**
             * Positive sequence series reactance of the transformer end.
             */
            obj["x"] = base.parse_element (/<cim:TransformerStarImpedance.x>([\s\S]*?)<\/cim:TransformerStarImpedance.x>/g, sub, context, true);
            /**
             * Zero sequence series reactance of the transformer end.
             */
            obj["x0"] = base.parse_element (/<cim:TransformerStarImpedance.x0>([\s\S]*?)<\/cim:TransformerStarImpedance.x0>/g, sub, context, true);
            /**
             * Transformer end datasheet used to calculate this transformer star impedance.
             */
            obj["TransformerEndInfo"] = base.parse_attribute (/<cim:TransformerStarImpedance.TransformerEndInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.TransformerStarImpedance;
            if (null == bucket)
                context.parsed.TransformerStarImpedance = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Describes a symmetrical phase shifting transformer tap model in which the secondary side voltage magnitude is the same as at the primary side.
         * The difference voltage magnitude is the base in an equal-sided triangle where the sides corresponds to the primary and secondary voltages. The phase angle difference corresponds to the top angle and can be expressed as twice the arctangent of half the total difference voltage.
         */
        function parse_PhaseTapChangerSymmetrical (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PhaseTapChangerNonLinear (context, sub);
            obj.cls = "PhaseTapChangerSymmetrical";
            bucket = context.parsed.PhaseTapChangerSymmetrical;
            if (null == bucket)
                context.parsed.PhaseTapChangerSymmetrical = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A manually operated or motor operated mechanical switching device used for changing the connections in a circuit, or for isolating a circuit or equipment from a source of power.
         * It is required to open or close circuits when negligible current is broken or made.
         */
        function parse_Disconnector (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Switch (context, sub);
            obj.cls = "Disconnector";
            bucket = context.parsed.Disconnector;
            if (null == bucket)
                context.parsed.Disconnector = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A transformer phase shifting tap model that controls the phase angle difference across the power transformer and potentially the active power flow through the power transformer.
         * This phase tap model may also impact the voltage magnitude.
         */
        function parse_PhaseTapChanger (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TapChanger (context, sub);
            obj.cls = "PhaseTapChanger";
            /**
             * Transformer end to which this phase tap changer belongs.
             */
            obj["TransformerEnd"] = base.parse_attribute (/<cim:PhaseTapChanger.TransformerEnd\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.PhaseTapChanger;
            if (null == bucket)
                context.parsed.PhaseTapChanger = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This class represents the zero sequence line mutual coupling.
         */
        function parse_MutualCoupling (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "MutualCoupling";
            /**
             * Zero sequence mutual coupling shunt (charging) susceptance, uniformly distributed, of the entire line section.
             */
            obj["b0ch"] = base.parse_element (/<cim:MutualCoupling.b0ch>([\s\S]*?)<\/cim:MutualCoupling.b0ch>/g, sub, context, true);
            /**
             * Distance to the start of the coupled region from the first line's terminal having sequence number equal to 1.
             */
            obj["distance11"] = base.parse_element (/<cim:MutualCoupling.distance11>([\s\S]*?)<\/cim:MutualCoupling.distance11>/g, sub, context, true);
            /**
             * Distance to the end of the coupled region from the first line's terminal with sequence number equal to 1.
             */
            obj["distance12"] = base.parse_element (/<cim:MutualCoupling.distance12>([\s\S]*?)<\/cim:MutualCoupling.distance12>/g, sub, context, true);
            /**
             * Distance to the start of coupled region from the second line's terminal with sequence number equal to 1.
             */
            obj["distance21"] = base.parse_element (/<cim:MutualCoupling.distance21>([\s\S]*?)<\/cim:MutualCoupling.distance21>/g, sub, context, true);
            /**
             * Distance to the end of coupled region from the second line's terminal with sequence number equal to 1.
             */
            obj["distance22"] = base.parse_element (/<cim:MutualCoupling.distance22>([\s\S]*?)<\/cim:MutualCoupling.distance22>/g, sub, context, true);
            /**
             * Zero sequence mutual coupling shunt (charging) conductance, uniformly distributed, of the entire line section.
             */
            obj["g0ch"] = base.parse_element (/<cim:MutualCoupling.g0ch>([\s\S]*?)<\/cim:MutualCoupling.g0ch>/g, sub, context, true);
            /**
             * Zero sequence branch-to-branch mutual impedance coupling, resistance.
             */
            obj["r0"] = base.parse_element (/<cim:MutualCoupling.r0>([\s\S]*?)<\/cim:MutualCoupling.r0>/g, sub, context, true);
            /**
             * Zero sequence branch-to-branch mutual impedance coupling, reactance.
             */
            obj["x0"] = base.parse_element (/<cim:MutualCoupling.x0>([\s\S]*?)<\/cim:MutualCoupling.x0>/g, sub, context, true);
            /**
             * The starting terminal for the calculation of distances along the second branch of the mutual coupling.
             */
            obj["Second_Terminal"] = base.parse_attribute (/<cim:MutualCoupling.Second_Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The starting terminal for the calculation of distances along the first branch of the mutual coupling.
             * Normally MutualCoupling would only be used for terminals of AC line segments.  The first and second terminals of a mutual coupling should point to different AC line segments.
             */
            obj["First_Terminal"] = base.parse_attribute (/<cim:MutualCoupling.First_Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MutualCoupling;
            if (null == bucket)
                context.parsed.MutualCoupling = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Generic user of energy - a  point of consumption on the power system model.
         */
        function parse_EnergyConsumer (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_ConductingEquipment (context, sub);
            obj.cls = "EnergyConsumer";
            /**
             * Number of individual customers represented by this demand.
             */
            obj["customerCount"] = base.parse_element (/<cim:EnergyConsumer.customerCount>([\s\S]*?)<\/cim:EnergyConsumer.customerCount>/g, sub, context, true);
            /**
             * Used for Yn and Zn connections.
             * True if the neutral is solidly grounded.
             */
            obj["grounded"] = base.to_boolean (base.parse_element (/<cim:EnergyConsumer.grounded>([\s\S]*?)<\/cim:EnergyConsumer.grounded>/g, sub, context, true));
            /**
             * Active power of the load that is a fixed quantity.
             * Load sign convention is used, i.e. positive sign means flow out from a node.
             */
            obj["pfixed"] = base.parse_element (/<cim:EnergyConsumer.pfixed>([\s\S]*?)<\/cim:EnergyConsumer.pfixed>/g, sub, context, true);
            /**
             * Fixed active power as per cent of load group fixed active power.
             * Load sign convention is used, i.e. positive sign means flow out from a node.
             */
            obj["pfixedPct"] = base.parse_element (/<cim:EnergyConsumer.pfixedPct>([\s\S]*?)<\/cim:EnergyConsumer.pfixedPct>/g, sub, context, true);
            /**
             * The type of phase connection, such as wye or delta.
             */
            obj["phaseConnection"] = base.parse_element (/<cim:EnergyConsumer.phaseConnection>([\s\S]*?)<\/cim:EnergyConsumer.phaseConnection>/g, sub, context, true);
            /**
             * Reactive power of the load that is a fixed quantity.
             * Load sign convention is used, i.e. positive sign means flow out from a node.
             */
            obj["qfixed"] = base.parse_element (/<cim:EnergyConsumer.qfixed>([\s\S]*?)<\/cim:EnergyConsumer.qfixed>/g, sub, context, true);
            /**
             * Fixed reactive power as per cent of load group fixed reactive power.
             * Load sign convention is used, i.e. positive sign means flow out from a node.
             */
            obj["qfixedPct"] = base.parse_element (/<cim:EnergyConsumer.qfixedPct>([\s\S]*?)<\/cim:EnergyConsumer.qfixedPct>/g, sub, context, true);
            /**
             * Active power of the load.
             * Load sign convention is used, i.e. positive sign means flow out from a node.
             */
            obj["p"] = base.parse_element (/<cim:EnergyConsumer.p>([\s\S]*?)<\/cim:EnergyConsumer.p>/g, sub, context, true);
            /**
             * Reactive power of the load.
             * Load sign convention is used, i.e. positive sign means flow out from a node.
             */
            obj["q"] = base.parse_element (/<cim:EnergyConsumer.q>([\s\S]*?)<\/cim:EnergyConsumer.q>/g, sub, context, true);
            /**
             * The  energy consumer is assigned to this power cut zone.
             */
            obj["PowerCutZone"] = base.parse_attribute (/<cim:EnergyConsumer.PowerCutZone\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Load dynamics model used to describe dynamic behavior of this energy consumer.
             */
            obj["LoadDynamics"] = base.parse_attribute (/<cim:EnergyConsumer.LoadDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The load response characteristic of this load.
             * If missing, this load is assumed to be constant power.
             */
            obj["LoadResponse"] = base.parse_attribute (/<cim:EnergyConsumer.LoadResponse\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.EnergyConsumer;
            if (null == bucket)
                context.parsed.EnergyConsumer = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The mode of operation for a Petersen coil.
         */
        function parse_PetersenCoilModeKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PetersenCoilModeKind";
            /**
             * Fixed position.
             */
            obj["fixed"] = base.parse_element (/<cim:PetersenCoilModeKind.fixed>([\s\S]*?)<\/cim:PetersenCoilModeKind.fixed>/g, sub, context, true);
            /**
             * Manual positioning.
             */
            obj["manual"] = base.parse_element (/<cim:PetersenCoilModeKind.manual>([\s\S]*?)<\/cim:PetersenCoilModeKind.manual>/g, sub, context, true);
            /**
             * Automatic positioning.
             */
            obj["automaticPositioning"] = base.parse_element (/<cim:PetersenCoilModeKind.automaticPositioning>([\s\S]*?)<\/cim:PetersenCoilModeKind.automaticPositioning>/g, sub, context, true);
            bucket = context.parsed.PetersenCoilModeKind;
            if (null == bucket)
                context.parsed.PetersenCoilModeKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A Series Compensator is a series capacitor or reactor or an AC transmission line without charging susceptance.
         * It is a two terminal device.
         */
        function parse_SeriesCompensator (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_ConductingEquipment (context, sub);
            obj.cls = "SeriesCompensator";
            /**
             * Positive sequence resistance.
             */
            obj["r"] = base.parse_element (/<cim:SeriesCompensator.r>([\s\S]*?)<\/cim:SeriesCompensator.r>/g, sub, context, true);
            /**
             * Zero sequence resistance.
             */
            obj["r0"] = base.parse_element (/<cim:SeriesCompensator.r0>([\s\S]*?)<\/cim:SeriesCompensator.r0>/g, sub, context, true);
            /**
             * Positive sequence reactance.
             */
            obj["x"] = base.parse_element (/<cim:SeriesCompensator.x>([\s\S]*?)<\/cim:SeriesCompensator.x>/g, sub, context, true);
            /**
             * Zero sequence reactance.
             */
            obj["x0"] = base.parse_element (/<cim:SeriesCompensator.x0>([\s\S]*?)<\/cim:SeriesCompensator.x0>/g, sub, context, true);
            /**
             * Describe if a metal oxide varistor (mov) for over voltage protection is configured at the series compensator.
             */
            obj["varistorPresent"] = base.to_boolean (base.parse_element (/<cim:SeriesCompensator.varistorPresent>([\s\S]*?)<\/cim:SeriesCompensator.varistorPresent>/g, sub, context, true));
            /**
             * The maximum current the varistor is designed to handle at specified duration.
             */
            obj["varistorRatedCurrent"] = base.parse_element (/<cim:SeriesCompensator.varistorRatedCurrent>([\s\S]*?)<\/cim:SeriesCompensator.varistorRatedCurrent>/g, sub, context, true);
            /**
             * The dc voltage at which the varistor start conducting.
             */
            obj["varistorVoltageThreshold"] = base.parse_element (/<cim:SeriesCompensator.varistorVoltageThreshold>([\s\S]*?)<\/cim:SeriesCompensator.varistorVoltageThreshold>/g, sub, context, true);
            bucket = context.parsed.SeriesCompensator;
            if (null == bucket)
                context.parsed.SeriesCompensator = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A rotating machine which may be used as a generator or motor.
         */
        function parse_RotatingMachine (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_RegulatingCondEq (context, sub);
            obj.cls = "RotatingMachine";
            /**
             * Power factor (nameplate data).
             * It is primarily used for short circuit data exchange according to IEC 60909.
             */
            obj["ratedPowerFactor"] = base.to_float (base.parse_element (/<cim:RotatingMachine.ratedPowerFactor>([\s\S]*?)<\/cim:RotatingMachine.ratedPowerFactor>/g, sub, context, true));
            /**
             * Nameplate apparent power rating for the unit.
             * The attribute shall have a positive value.
             */
            obj["ratedS"] = base.parse_element (/<cim:RotatingMachine.ratedS>([\s\S]*?)<\/cim:RotatingMachine.ratedS>/g, sub, context, true);
            /**
             * Rated voltage (nameplate data, Ur in IEC 60909-0).
             * It is primarily used for short circuit data exchange according to IEC 60909.
             */
            obj["ratedU"] = base.parse_element (/<cim:RotatingMachine.ratedU>([\s\S]*?)<\/cim:RotatingMachine.ratedU>/g, sub, context, true);
            /**
             * Active power injection.
             * Load sign convention is used, i.e. positive sign means flow out from a node.
             */
            obj["p"] = base.parse_element (/<cim:RotatingMachine.p>([\s\S]*?)<\/cim:RotatingMachine.p>/g, sub, context, true);
            /**
             * Reactive power injection.
             * Load sign convention is used, i.e. positive sign means flow out from a node.
             */
            obj["q"] = base.parse_element (/<cim:RotatingMachine.q>([\s\S]*?)<\/cim:RotatingMachine.q>/g, sub, context, true);
            /**
             * A synchronous machine may operate as a generator and as such becomes a member of a generating unit.
             */
            obj["GeneratingUnit"] = base.parse_attribute (/<cim:RotatingMachine.GeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The synchronous machine drives the turbine which moves the water from a low elevation to a higher elevation.
             * The direction of machine rotation for pumping may or may not be the same as for generating.
             */
            obj["HydroPump"] = base.parse_attribute (/<cim:RotatingMachine.HydroPump\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.RotatingMachine;
            if (null == bucket)
                context.parsed.RotatingMachine = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A generic device designed to close, or open, or both, one or more electric circuits.
         * All switches are two terminal devices including grounding switches.
         */
        function parse_Switch (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_ConductingEquipment (context, sub);
            obj.cls = "Switch";
            /**
             * The attribute is used in cases when no Measurement for the status value is present.
             * If the Switch has a status measurement the Discrete.normalValue is expected to match with the Switch.normalOpen.
             */
            obj["normalOpen"] = base.to_boolean (base.parse_element (/<cim:Switch.normalOpen>([\s\S]*?)<\/cim:Switch.normalOpen>/g, sub, context, true));
            /**
             * The maximum continuous current carrying capacity in amps governed by the device material and construction.
             */
            obj["ratedCurrent"] = base.parse_element (/<cim:Switch.ratedCurrent>([\s\S]*?)<\/cim:Switch.ratedCurrent>/g, sub, context, true);
            /**
             * Branch is retained in a bus branch model.
             * The flow through retained switches will normally be calculated in power flow.
             */
            obj["retained"] = base.to_boolean (base.parse_element (/<cim:Switch.retained>([\s\S]*?)<\/cim:Switch.retained>/g, sub, context, true));
            /**
             * The switch on count since the switch was last reset or initialized.
             */
            obj["switchOnCount"] = base.parse_element (/<cim:Switch.switchOnCount>([\s\S]*?)<\/cim:Switch.switchOnCount>/g, sub, context, true);
            /**
             * The date and time when the switch was last switched on.
             */
            obj["switchOnDate"] = base.to_datetime (base.parse_element (/<cim:Switch.switchOnDate>([\s\S]*?)<\/cim:Switch.switchOnDate>/g, sub, context, true));
            /**
             * The attribute tells if the switch is considered open when used as input to topology processing.
             */
            obj["open"] = base.to_boolean (base.parse_element (/<cim:Switch.open>([\s\S]*?)<\/cim:Switch.open>/g, sub, context, true));
            /**
             * Current outage of this protective device.
             */
            obj["Outage"] = base.parse_attribute (/<cim:Switch.Outage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Composite switch to which this Switch belongs.
             */
            obj["CompositeSwitch"] = base.parse_attribute (/<cim:Switch.CompositeSwitch\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Action changing status of this switch.
             */
            obj["SwitchAction"] = base.parse_attribute (/<cim:Switch.SwitchAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.Switch;
            if (null == bucket)
                context.parsed.Switch = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The transformer core admittance.
         * Used to specify the core admittance of a transformer in a manner that can be shared among power transformers.
         */
        function parse_TransformerCoreAdmittance (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TransformerCoreAdmittance";
            /**
             * Magnetizing branch susceptance (B mag).
             * The value can be positive or negative.
             */
            obj["b"] = base.parse_element (/<cim:TransformerCoreAdmittance.b>([\s\S]*?)<\/cim:TransformerCoreAdmittance.b>/g, sub, context, true);
            /**
             * Zero sequence magnetizing branch susceptance.
             */
            obj["b0"] = base.parse_element (/<cim:TransformerCoreAdmittance.b0>([\s\S]*?)<\/cim:TransformerCoreAdmittance.b0>/g, sub, context, true);
            /**
             * Magnetizing branch conductance (G mag).
             */
            obj["g"] = base.parse_element (/<cim:TransformerCoreAdmittance.g>([\s\S]*?)<\/cim:TransformerCoreAdmittance.g>/g, sub, context, true);
            /**
             * Zero sequence magnetizing branch conductance.
             */
            obj["g0"] = base.parse_element (/<cim:TransformerCoreAdmittance.g0>([\s\S]*?)<\/cim:TransformerCoreAdmittance.g0>/g, sub, context, true);
            /**
             * Transformer end datasheet used to calculate this core admittance.
             */
            obj["TransformerEndInfo"] = base.parse_attribute (/<cim:TransformerCoreAdmittance.TransformerEndInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.TransformerCoreAdmittance;
            if (null == bucket)
                context.parsed.TransformerCoreAdmittance = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An area of the power system network which is defined for secondary voltage control purposes.
         * A voltage control zone consists of a collection of substations with a designated bus bar section whose voltage will be controlled.
         */
        function parse_VoltageControlZone (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "VoltageControlZone";
            /**
             * A VoltageControlZone may have a  voltage regulation schedule.
             */
            obj["RegulationSchedule"] = base.parse_attribute (/<cim:VoltageControlZone.RegulationSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * A VoltageControlZone is controlled by a designated BusbarSection.
             */
            obj["BusbarSection"] = base.parse_attribute (/<cim:VoltageControlZone.BusbarSection\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.VoltageControlZone;
            if (null == bucket)
                context.parsed.VoltageControlZone = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Impedance and admittance parameters per unit length for n-wire unbalanced lines, in matrix form.
         */
        function parse_PerLengthPhaseImpedance (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PerLengthImpedance (context, sub);
            obj.cls = "PerLengthPhaseImpedance";
            /**
             * Number of phase, neutral, and other wires retained.
             * Constrains the number of matrix elements and the phase codes that can be used with this matrix.
             */
            obj["conductorCount"] = base.parse_element (/<cim:PerLengthPhaseImpedance.conductorCount>([\s\S]*?)<\/cim:PerLengthPhaseImpedance.conductorCount>/g, sub, context, true);
            bucket = context.parsed.PerLengthPhaseImpedance;
            if (null == bucket)
                context.parsed.PerLengthPhaseImpedance = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Control modes for a transformer.
         */
        function parse_TransformerControlMode (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TransformerControlMode";
            /**
             * Voltage control
             */
            obj["volt"] = base.parse_element (/<cim:TransformerControlMode.volt>([\s\S]*?)<\/cim:TransformerControlMode.volt>/g, sub, context, true);
            /**
             * Reactive power flow control
             */
            obj["reactive"] = base.parse_element (/<cim:TransformerControlMode.reactive>([\s\S]*?)<\/cim:TransformerControlMode.reactive>/g, sub, context, true);
            bucket = context.parsed.TransformerControlMode;
            if (null == bucket)
                context.parsed.TransformerControlMode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Transformer mesh impedance (Delta-model) between transformer ends.
         * The typical case is that this class describes the impedance between two transformer ends pair-wise, i.e. the cardinalities at both tranformer end associations are 1. But in cases where two or more transformer ends are modeled the cardinalities are larger than 1.
         */
        function parse_TransformerMeshImpedance (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TransformerMeshImpedance";
            /**
             * Resistance between the 'from' and the 'to' end, seen from the 'from' end.
             */
            obj["r"] = base.parse_element (/<cim:TransformerMeshImpedance.r>([\s\S]*?)<\/cim:TransformerMeshImpedance.r>/g, sub, context, true);
            /**
             * Zero-sequence resistance between the 'from' and the 'to' end, seen from the 'from' end.
             */
            obj["r0"] = base.parse_element (/<cim:TransformerMeshImpedance.r0>([\s\S]*?)<\/cim:TransformerMeshImpedance.r0>/g, sub, context, true);
            /**
             * Reactance between the 'from' and the 'to' end, seen from the 'from' end.
             */
            obj["x"] = base.parse_element (/<cim:TransformerMeshImpedance.x>([\s\S]*?)<\/cim:TransformerMeshImpedance.x>/g, sub, context, true);
            /**
             * Zero-sequence reactance between the 'from' and the 'to' end, seen from the 'from' end.
             */
            obj["x0"] = base.parse_element (/<cim:TransformerMeshImpedance.x0>([\s\S]*?)<\/cim:TransformerMeshImpedance.x0>/g, sub, context, true);
            /**
             * 'from' transformer end datasheet this mesh impedance is calculated from.
             * It determines the voltage reference.
             */
            obj["FromTransformerEndInfo"] = base.parse_attribute (/<cim:TransformerMeshImpedance.FromTransformerEndInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * From end this mesh impedance is connected to.
             * It determines the voltage reference.
             */
            obj["FromTransformerEnd"] = base.parse_attribute (/<cim:TransformerMeshImpedance.FromTransformerEnd\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.TransformerMeshImpedance;
            if (null == bucket)
                context.parsed.TransformerMeshImpedance = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A non linear shunt compensator bank or section admittance value.
         */
        function parse_NonlinearShuntCompensatorPoint (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "NonlinearShuntCompensatorPoint";
            /**
             * Positive sequence shunt (charging) conductance per section
             */
            obj["g"] = base.parse_element (/<cim:NonlinearShuntCompensatorPoint.g>([\s\S]*?)<\/cim:NonlinearShuntCompensatorPoint.g>/g, sub, context, true);
            /**
             * Zero sequence shunt (charging) susceptance per section
             */
            obj["b0"] = base.parse_element (/<cim:NonlinearShuntCompensatorPoint.b0>([\s\S]*?)<\/cim:NonlinearShuntCompensatorPoint.b0>/g, sub, context, true);
            /**
             * Positive sequence shunt (charging) susceptance per section
             */
            obj["b"] = base.parse_element (/<cim:NonlinearShuntCompensatorPoint.b>([\s\S]*?)<\/cim:NonlinearShuntCompensatorPoint.b>/g, sub, context, true);
            /**
             * Zero sequence shunt (charging) conductance per section
             */
            obj["g0"] = base.parse_element (/<cim:NonlinearShuntCompensatorPoint.g0>([\s\S]*?)<\/cim:NonlinearShuntCompensatorPoint.g0>/g, sub, context, true);
            /**
             * The number of the section.
             */
            obj["sectionNumber"] = base.parse_element (/<cim:NonlinearShuntCompensatorPoint.sectionNumber>([\s\S]*?)<\/cim:NonlinearShuntCompensatorPoint.sectionNumber>/g, sub, context, true);
            bucket = context.parsed.NonlinearShuntCompensatorPoint;
            if (null == bucket)
                context.parsed.NonlinearShuntCompensatorPoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A conductor, or group of conductors, with negligible impedance, that serve to connect other conducting equipment within a single substation.
         * Voltage measurements are typically obtained from VoltageTransformers that are connected to busbar sections. A bus bar section may have many physical terminals but for analysis is modelled with exactly one logical terminal.
         */
        function parse_BusbarSection (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Connector (context, sub);
            obj.cls = "BusbarSection";
            /**
             * Maximum allowable peak short-circuit current of busbar (Ipmax in the IEC 60909-0).
             * Mechanical limit of the busbar in the substation itself. Used for short circuit data exchange according to IEC 60909
             */
            obj["ipMax"] = base.parse_element (/<cim:BusbarSection.ipMax>([\s\S]*?)<\/cim:BusbarSection.ipMax>/g, sub, context, true);
            /**
             * A VoltageControlZone is controlled by a designated BusbarSection.
             */
            obj["VoltageControlZone"] = base.parse_attribute (/<cim:BusbarSection.VoltageControlZone\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.BusbarSection;
            if (null == bucket)
                context.parsed.BusbarSection = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A per phase non linear shunt compensator bank or section admittance value.
         */
        function parse_NonlinearShuntCompensatorPhasePoint (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "NonlinearShuntCompensatorPhasePoint";
            /**
             * The number of the section.
             */
            obj["sectionNumber"] = base.parse_element (/<cim:NonlinearShuntCompensatorPhasePoint.sectionNumber>([\s\S]*?)<\/cim:NonlinearShuntCompensatorPhasePoint.sectionNumber>/g, sub, context, true);
            /**
             * Positive sequence shunt (charging) susceptance per section
             */
            obj["b"] = base.parse_element (/<cim:NonlinearShuntCompensatorPhasePoint.b>([\s\S]*?)<\/cim:NonlinearShuntCompensatorPhasePoint.b>/g, sub, context, true);
            /**
             * Positive sequence shunt (charging) conductance per section
             */
            obj["g"] = base.parse_element (/<cim:NonlinearShuntCompensatorPhasePoint.g>([\s\S]*?)<\/cim:NonlinearShuntCompensatorPhasePoint.g>/g, sub, context, true);
            bucket = context.parsed.NonlinearShuntCompensatorPhasePoint;
            if (null == bucket)
                context.parsed.NonlinearShuntCompensatorPhasePoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_TapChangerTablePoint (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TapChangerTablePoint";
            /**
             * The magnetizing branch susceptance deviation in percent of nominal value.
             * The actual susceptance is calculated as follows:
             */
            obj["b"] = base.parse_element (/<cim:TapChangerTablePoint.b>([\s\S]*?)<\/cim:TapChangerTablePoint.b>/g, sub, context, true);
            /**
             * The magnetizing branch conductance deviation in percent of nominal value.
             * The actual conductance is calculated as follows:
             */
            obj["g"] = base.parse_element (/<cim:TapChangerTablePoint.g>([\s\S]*?)<\/cim:TapChangerTablePoint.g>/g, sub, context, true);
            /**
             * The resistance deviation in percent of nominal value.
             * The actual reactance is calculated as follows:
             */
            obj["r"] = base.parse_element (/<cim:TapChangerTablePoint.r>([\s\S]*?)<\/cim:TapChangerTablePoint.r>/g, sub, context, true);
            /**
             * The voltage ratio in per unit.
             * Hence this is a value close to one.
             */
            obj["ratio"] = base.to_float (base.parse_element (/<cim:TapChangerTablePoint.ratio>([\s\S]*?)<\/cim:TapChangerTablePoint.ratio>/g, sub, context, true));
            /**
             * The tap step.
             */
            obj["step"] = base.parse_element (/<cim:TapChangerTablePoint.step>([\s\S]*?)<\/cim:TapChangerTablePoint.step>/g, sub, context, true);
            /**
             * The series reactance deviation in percent of nominal value.
             * The actual reactance is calculated as follows:
             */
            obj["x"] = base.parse_element (/<cim:TapChangerTablePoint.x>([\s\S]*?)<\/cim:TapChangerTablePoint.x>/g, sub, context, true);
            bucket = context.parsed.TapChangerTablePoint;
            if (null == bucket)
                context.parsed.TapChangerTablePoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of Asynchronous Machine.
         */
        function parse_AsynchronousMachineKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AsynchronousMachineKind";
            /**
             * The Asynchronous Machine is a generator.
             */
            obj["generator"] = base.parse_element (/<cim:AsynchronousMachineKind.generator>([\s\S]*?)<\/cim:AsynchronousMachineKind.generator>/g, sub, context, true);
            /**
             * The Asynchronous Machine is a motor.
             */
            obj["motor"] = base.parse_element (/<cim:AsynchronousMachineKind.motor>([\s\S]*?)<\/cim:AsynchronousMachineKind.motor>/g, sub, context, true);
            bucket = context.parsed.AsynchronousMachineKind;
            if (null == bucket)
                context.parsed.AsynchronousMachineKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Reactive power rating envelope versus the synchronous machine's active power, in both the generating and motoring modes.
         * For each active power value there is a corresponding high and low reactive power limit  value. Typically there will be a separate curve for each coolant condition, such as hydrogen pressure.  The Y1 axis values represent reactive minimum and the Y2 axis values represent reactive maximum.
         */
        function parse_ReactiveCapabilityCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "ReactiveCapabilityCurve";
            /**
             * The machine's coolant temperature (e.g., ambient air or stator circulating water).
             */
            obj["coolantTemperature"] = base.parse_element (/<cim:ReactiveCapabilityCurve.coolantTemperature>([\s\S]*?)<\/cim:ReactiveCapabilityCurve.coolantTemperature>/g, sub, context, true);
            /**
             * The hydrogen coolant pressure
             */
            obj["hydrogenPressure"] = base.parse_element (/<cim:ReactiveCapabilityCurve.hydrogenPressure>([\s\S]*?)<\/cim:ReactiveCapabilityCurve.hydrogenPressure>/g, sub, context, true);
            bucket = context.parsed.ReactiveCapabilityCurve;
            if (null == bucket)
                context.parsed.ReactiveCapabilityCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A conductor, or group of conductors, with negligible impedance, that serve to connect other conducting equipment within a single substation and are modelled with a single logical terminal.
         */
        function parse_Connector (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_ConductingEquipment (context, sub);
            obj.cls = "Connector";
            bucket = context.parsed.Connector;
            if (null == bucket)
                context.parsed.Connector = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Automatic switch that will lock open to isolate a faulted section.
         * It may, or may not, have load breaking capability. Its primary purpose is to provide fault sectionalising at locations where the fault current is either too high, or too low, for proper coordination of fuses.
         */
        function parse_Sectionaliser (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Switch (context, sub);
            obj.cls = "Sectionaliser";
            bucket = context.parsed.Sectionaliser;
            if (null == bucket)
                context.parsed.Sectionaliser = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Describes a tap changer with a linear relation between the tap step and the phase angle difference across the transformer.
         * This is a mathematical model that is an approximation of a real phase tap changer.
         */
        function parse_PhaseTapChangerLinear (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PhaseTapChanger (context, sub);
            obj.cls = "PhaseTapChangerLinear";
            /**
             * Phase shift per step position.
             * A positive value indicates a positive phase shift from the winding where the tap is located to the other winding (for a two-winding transformer).
             */
            obj["stepPhaseShiftIncrement"] = base.parse_element (/<cim:PhaseTapChangerLinear.stepPhaseShiftIncrement>([\s\S]*?)<\/cim:PhaseTapChangerLinear.stepPhaseShiftIncrement>/g, sub, context, true);
            /**
             * The reactance depend on the tap position according to a "u" shaped curve.
             * The maximum reactance (xMax) appear at the low and high tap positions.
             */
            obj["xMax"] = base.parse_element (/<cim:PhaseTapChangerLinear.xMax>([\s\S]*?)<\/cim:PhaseTapChangerLinear.xMax>/g, sub, context, true);
            /**
             * The reactance depend on the tap position according to a "u" shaped curve.
             * The minimum reactance (xMin) appear at the mid tap position.
             */
            obj["xMin"] = base.parse_element (/<cim:PhaseTapChangerLinear.xMin>([\s\S]*?)<\/cim:PhaseTapChangerLinear.xMin>/g, sub, context, true);
            bucket = context.parsed.PhaseTapChangerLinear;
            if (null == bucket)
                context.parsed.PhaseTapChangerLinear = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A fixed impedance device used for grounding.
         */
        function parse_GroundingImpedance (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_EarthFaultCompensator (context, sub);
            obj.cls = "GroundingImpedance";
            /**
             * Reactance of device.
             */
            obj["x"] = base.parse_element (/<cim:GroundingImpedance.x>([\s\S]*?)<\/cim:GroundingImpedance.x>/g, sub, context, true);
            bucket = context.parsed.GroundingImpedance;
            if (null == bucket)
                context.parsed.GroundingImpedance = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Describes a curve for how the voltage magnitude and impedance varies with the tap step.
         */
        function parse_RatioTapChangerTable (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "RatioTapChangerTable";
            bucket = context.parsed.RatioTapChangerTable;
            if (null == bucket)
                context.parsed.RatioTapChangerTable = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An overcurrent protective device with a circuit opening fusible part that is heated and severed by the passage of overcurrent through it.
         * A fuse is considered a switching device because it breaks current.
         */
        function parse_Fuse (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Switch (context, sub);
            obj.cls = "Fuse";
            bucket = context.parsed.Fuse;
            if (null == bucket)
                context.parsed.Fuse = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A wire or combination of wires, with consistent electrical characteristics, building a single electrical system, used to carry alternating current between points in the power system.
         * For symmetrical, transposed 3ph lines, it is sufficient to use  attributes of the line segment, which describe impedances and admittances for the entire length of the segment.  Additionally impedances can be computed by using length and associated per length impedances.
         */
        function parse_ACLineSegment (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Conductor (context, sub);
            obj.cls = "ACLineSegment";
            /**
             * Zero sequence shunt (charging) susceptance, uniformly distributed, of the entire line section.
             */
            obj["b0ch"] = base.parse_element (/<cim:ACLineSegment.b0ch>([\s\S]*?)<\/cim:ACLineSegment.b0ch>/g, sub, context, true);
            /**
             * Positive sequence shunt (charging) susceptance, uniformly distributed, of the entire line section.
             * This value represents the full charging over the full length of the line.
             */
            obj["bch"] = base.parse_element (/<cim:ACLineSegment.bch>([\s\S]*?)<\/cim:ACLineSegment.bch>/g, sub, context, true);
            /**
             * Zero sequence shunt (charging) conductance, uniformly distributed, of the entire line section.
             */
            obj["g0ch"] = base.parse_element (/<cim:ACLineSegment.g0ch>([\s\S]*?)<\/cim:ACLineSegment.g0ch>/g, sub, context, true);
            /**
             * Positive sequence shunt (charging) conductance, uniformly distributed, of the entire line section.
             */
            obj["gch"] = base.parse_element (/<cim:ACLineSegment.gch>([\s\S]*?)<\/cim:ACLineSegment.gch>/g, sub, context, true);
            /**
             * Positive sequence series resistance of the entire line section.
             */
            obj["r"] = base.parse_element (/<cim:ACLineSegment.r>([\s\S]*?)<\/cim:ACLineSegment.r>/g, sub, context, true);
            /**
             * Zero sequence series resistance of the entire line section.
             */
            obj["r0"] = base.parse_element (/<cim:ACLineSegment.r0>([\s\S]*?)<\/cim:ACLineSegment.r0>/g, sub, context, true);
            /**
             * Maximum permitted temperature at the end of SC for the calculation of minimum short-circuit currents.
             * Used for short circuit data exchange according to IEC 60909
             */
            obj["shortCircuitEndTemperature"] = base.parse_element (/<cim:ACLineSegment.shortCircuitEndTemperature>([\s\S]*?)<\/cim:ACLineSegment.shortCircuitEndTemperature>/g, sub, context, true);
            /**
             * Positive sequence series reactance of the entire line section.
             */
            obj["x"] = base.parse_element (/<cim:ACLineSegment.x>([\s\S]*?)<\/cim:ACLineSegment.x>/g, sub, context, true);
            /**
             * Zero sequence series reactance of the entire line section.
             */
            obj["x0"] = base.parse_element (/<cim:ACLineSegment.x0>([\s\S]*?)<\/cim:ACLineSegment.x0>/g, sub, context, true);
            /**
             * Ground action involving clamp usage (for the case when the ground is applied along the line segment instead of at its terminals).
             */
            obj["LineGroundingAction"] = base.parse_attribute (/<cim:ACLineSegment.LineGroundingAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Jumper action involving clamp usage (for the case when the jumper is applied along the line segment instead of at its terminals).
             */
            obj["LineJumpingAction"] = base.parse_attribute (/<cim:ACLineSegment.LineJumpingAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Per-length impedance of this line segment.
             */
            obj["PerLengthImpedance"] = base.parse_attribute (/<cim:ACLineSegment.PerLengthImpedance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ACLineSegment;
            if (null == bucket)
                context.parsed.ACLineSegment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A device to convert from one frequency to another (e.g., frequency F1 to F2) comprises a pair of FrequencyConverter instances.
         * One converts from F1 to DC, the other converts the DC to F2.
         */
        function parse_FrequencyConverter (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_RegulatingCondEq (context, sub);
            obj.cls = "FrequencyConverter";
            /**
             * Frequency on the AC side.
             */
            obj["frequency"] = base.parse_element (/<cim:FrequencyConverter.frequency>([\s\S]*?)<\/cim:FrequencyConverter.frequency>/g, sub, context, true);
            /**
             * The maximum active power on the DC side at which the frequence converter should operate.
             */
            obj["maxP"] = base.parse_element (/<cim:FrequencyConverter.maxP>([\s\S]*?)<\/cim:FrequencyConverter.maxP>/g, sub, context, true);
            /**
             * The maximum voltage on the DC side at which the frequency converter should operate.
             */
            obj["maxU"] = base.parse_element (/<cim:FrequencyConverter.maxU>([\s\S]*?)<\/cim:FrequencyConverter.maxU>/g, sub, context, true);
            /**
             * The minimum active power on the DC side at which the frequence converter should operate.
             */
            obj["minP"] = base.parse_element (/<cim:FrequencyConverter.minP>([\s\S]*?)<\/cim:FrequencyConverter.minP>/g, sub, context, true);
            /**
             * The minimum voltage on the DC side at which the frequency converter should operate.
             */
            obj["minU"] = base.parse_element (/<cim:FrequencyConverter.minU>([\s\S]*?)<\/cim:FrequencyConverter.minU>/g, sub, context, true);
            bucket = context.parsed.FrequencyConverter;
            if (null == bucket)
                context.parsed.FrequencyConverter = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An electrical device consisting of  two or more coupled windings, with or without a magnetic core, for introducing mutual coupling between electric circuits.
         * Transformers can be used to control voltage and phase shift (active power flow).
         */
        function parse_PowerTransformer (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_ConductingEquipment (context, sub);
            obj.cls = "PowerTransformer";
            /**
             * The highest operating current (Ib in the IEC 60909-0) before short circuit (depends on network configuration and relevant reliability philosophy).
             * It is used for calculation of the impedance correction factor KT defined in IEC 60909-0.
             */
            obj["beforeShCircuitHighestOperatingCurrent"] = base.parse_element (/<cim:PowerTransformer.beforeShCircuitHighestOperatingCurrent>([\s\S]*?)<\/cim:PowerTransformer.beforeShCircuitHighestOperatingCurrent>/g, sub, context, true);
            /**
             * The highest operating voltage (Ub in the IEC 60909-0) before short circuit.
             * It is used for calculation of the impedance correction factor KT defined in IEC 60909-0. This is worst case voltage on the low side winding (Section 3.7.1 in the standard). Used to define operating conditions.
             */
            obj["beforeShCircuitHighestOperatingVoltage"] = base.parse_element (/<cim:PowerTransformer.beforeShCircuitHighestOperatingVoltage>([\s\S]*?)<\/cim:PowerTransformer.beforeShCircuitHighestOperatingVoltage>/g, sub, context, true);
            /**
             * The angle of power factor before short circuit (phib in the IEC 60909-0).
             * It is used for calculation of the impedance correction factor KT defined in IEC 60909-0. This is the worst case power factor. Used to define operating conditions.
             */
            obj["beforeShortCircuitAnglePf"] = base.parse_element (/<cim:PowerTransformer.beforeShortCircuitAnglePf>([\s\S]*?)<\/cim:PowerTransformer.beforeShortCircuitAnglePf>/g, sub, context, true);
            /**
             * The minimum operating voltage (uQmin in the IEC 60909-0) at the high voltage side (Q side) of the unit transformer of the power station unit.
             * A value well established from long-term operating experience of the system. It is used for calculation of the impedance correction factor KG defined in IEC 60909-0
             */
            obj["highSideMinOperatingU"] = base.parse_element (/<cim:PowerTransformer.highSideMinOperatingU>([\s\S]*?)<\/cim:PowerTransformer.highSideMinOperatingU>/g, sub, context, true);
            /**
             * Indicates whether the machine is part of a power station unit.
             * Used for short circuit data exchange according to IEC 60909
             */
            obj["isPartOfGeneratorUnit"] = base.to_boolean (base.parse_element (/<cim:PowerTransformer.isPartOfGeneratorUnit>([\s\S]*?)<\/cim:PowerTransformer.isPartOfGeneratorUnit>/g, sub, context, true));
            /**
             * It is used to define if the data (other attributes related to short circuit data exchange) defines long term operational conditions or not.
             * Used for short circuit data exchange according to IEC 60909.
             */
            obj["operationalValuesConsidered"] = base.to_boolean (base.parse_element (/<cim:PowerTransformer.operationalValuesConsidered>([\s\S]*?)<\/cim:PowerTransformer.operationalValuesConsidered>/g, sub, context, true));
            /**
             * Vector group of the transformer for protective relaying, e.g., Dyn1.
             * For unbalanced transformers, this may not be simply determined from the constituent winding connections and phase angle dispacements.
             */
            obj["vectorGroup"] = base.parse_element (/<cim:PowerTransformer.vectorGroup>([\s\S]*?)<\/cim:PowerTransformer.vectorGroup>/g, sub, context, true);
            bucket = context.parsed.PowerTransformer;
            if (null == bucket)
                context.parsed.PowerTransformer = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A PowerTransformerEnd is associated with each Terminal of a PowerTransformer.
         * The impedance values r, r0, x, and x0 of a PowerTransformerEnd represents a star equivalent as follows
         */
        function parse_PowerTransformerEnd (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TransformerEnd (context, sub);
            obj.cls = "PowerTransformerEnd";
            /**
             * Magnetizing branch susceptance (B mag).
             * The value can be positive or negative.
             */
            obj["b"] = base.parse_element (/<cim:PowerTransformerEnd.b>([\s\S]*?)<\/cim:PowerTransformerEnd.b>/g, sub, context, true);
            /**
             * Zero sequence magnetizing branch susceptance.
             */
            obj["b0"] = base.parse_element (/<cim:PowerTransformerEnd.b0>([\s\S]*?)<\/cim:PowerTransformerEnd.b0>/g, sub, context, true);
            /**
             * Kind of connection.
             */
            obj["connectionKind"] = base.parse_element (/<cim:PowerTransformerEnd.connectionKind>([\s\S]*?)<\/cim:PowerTransformerEnd.connectionKind>/g, sub, context, true);
            /**
             * Magnetizing branch conductance.
             */
            obj["g"] = base.parse_element (/<cim:PowerTransformerEnd.g>([\s\S]*?)<\/cim:PowerTransformerEnd.g>/g, sub, context, true);
            /**
             * Zero sequence magnetizing branch conductance (star-model).
             */
            obj["g0"] = base.parse_element (/<cim:PowerTransformerEnd.g0>([\s\S]*?)<\/cim:PowerTransformerEnd.g0>/g, sub, context, true);
            /**
             * Terminal voltage phase angle displacement where 360 degrees are represented with clock hours.
             * The valid values are 0 to 11. For example, for the secondary side end of a transformer with vector group code of 'Dyn11', specify the connection kind as wye with neutral and specify the phase angle of the clock as 11.  The clock value of the transformer end number specified as 1, is assumed to be zero.  Note the transformer end number is not assumed to be the same as the terminal sequence number.
             */
            obj["phaseAngleClock"] = base.parse_element (/<cim:PowerTransformerEnd.phaseAngleClock>([\s\S]*?)<\/cim:PowerTransformerEnd.phaseAngleClock>/g, sub, context, true);
            /**
             * Resistance (star-model) of the transformer end.
             * The attribute shall be equal or greater than zero for non-equivalent transformers.
             */
            obj["r"] = base.parse_element (/<cim:PowerTransformerEnd.r>([\s\S]*?)<\/cim:PowerTransformerEnd.r>/g, sub, context, true);
            /**
             * Zero sequence series resistance (star-model) of the transformer end.
             */
            obj["r0"] = base.parse_element (/<cim:PowerTransformerEnd.r0>([\s\S]*?)<\/cim:PowerTransformerEnd.r0>/g, sub, context, true);
            /**
             * Normal apparent power rating.
             * The attribute shall be a positive value. For a two-winding transformer the values for the high and low voltage sides shall be identical.
             */
            obj["ratedS"] = base.parse_element (/<cim:PowerTransformerEnd.ratedS>([\s\S]*?)<\/cim:PowerTransformerEnd.ratedS>/g, sub, context, true);
            /**
             * Rated voltage: phase-phase for three-phase windings, and either phase-phase or phase-neutral for single-phase windings.
             * A high voltage side, as given by TransformerEnd.endNumber, shall have a ratedU that is greater or equal than ratedU for the lower voltage sides.
             */
            obj["ratedU"] = base.parse_element (/<cim:PowerTransformerEnd.ratedU>([\s\S]*?)<\/cim:PowerTransformerEnd.ratedU>/g, sub, context, true);
            /**
             * Positive sequence series reactance (star-model) of the transformer end.
             */
            obj["x"] = base.parse_element (/<cim:PowerTransformerEnd.x>([\s\S]*?)<\/cim:PowerTransformerEnd.x>/g, sub, context, true);
            /**
             * Zero sequence series reactance of the transformer end.
             */
            obj["x0"] = base.parse_element (/<cim:PowerTransformerEnd.x0>([\s\S]*?)<\/cim:PowerTransformerEnd.x0>/g, sub, context, true);
            /**
             * The power transformer of this power transformer end.
             */
            obj["PowerTransformer"] = base.parse_attribute (/<cim:PowerTransformerEnd.PowerTransformer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.PowerTransformerEnd;
            if (null == bucket)
                context.parsed.PowerTransformerEnd = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A tap changer that changes the voltage ratio impacting the voltage magnitude but not the phase angle across the transformer.
         */
        function parse_RatioTapChanger (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TapChanger (context, sub);
            obj.cls = "RatioTapChanger";
            /**
             * Tap step increment, in per cent of nominal voltage, per step position.
             */
            obj["stepVoltageIncrement"] = base.parse_element (/<cim:RatioTapChanger.stepVoltageIncrement>([\s\S]*?)<\/cim:RatioTapChanger.stepVoltageIncrement>/g, sub, context, true);
            /**
             * Specifies the regulation control mode (voltage or reactive) of the RatioTapChanger.
             */
            obj["tculControlMode"] = base.parse_element (/<cim:RatioTapChanger.tculControlMode>([\s\S]*?)<\/cim:RatioTapChanger.tculControlMode>/g, sub, context, true);
            /**
             * The tap ratio table for this ratio  tap changer.
             */
            obj["RatioTapChangerTable"] = base.parse_attribute (/<cim:RatioTapChanger.RatioTapChangerTable\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Transformer end to which this ratio tap changer belongs.
             */
            obj["TransformerEnd"] = base.parse_attribute (/<cim:RatioTapChanger.TransformerEnd\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.RatioTapChanger;
            if (null == bucket)
                context.parsed.RatioTapChanger = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A single phase of an energy consumer.
         */
        function parse_EnergyConsumerPhase (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "EnergyConsumerPhase";
            /**
             * Active power of the load that is a fixed quantity.
             * Load sign convention is used, i.e. positive sign means flow out from a node.
             */
            obj["pfixed"] = base.parse_element (/<cim:EnergyConsumerPhase.pfixed>([\s\S]*?)<\/cim:EnergyConsumerPhase.pfixed>/g, sub, context, true);
            /**
             * Fixed active power as per cent of load group fixed active power.
             * Load sign convention is used, i.e. positive sign means flow out from a node.
             */
            obj["pfixedPct"] = base.parse_element (/<cim:EnergyConsumerPhase.pfixedPct>([\s\S]*?)<\/cim:EnergyConsumerPhase.pfixedPct>/g, sub, context, true);
            /**
             * Phase of this energy consumer component.
             * If the energy consumer is wye connected, the connection is from the indicated phase to the central ground or neutral point.  If the energy consumer is delta connected, the phase indicates an energy consumer connected from the indicated phase to the next logical non-neutral phase.
             */
            obj["phase"] = base.parse_element (/<cim:EnergyConsumerPhase.phase>([\s\S]*?)<\/cim:EnergyConsumerPhase.phase>/g, sub, context, true);
            /**
             * Reactive power of the load that is a fixed quantity.
             * Load sign convention is used, i.e. positive sign means flow out from a node.
             */
            obj["qfixed"] = base.parse_element (/<cim:EnergyConsumerPhase.qfixed>([\s\S]*?)<\/cim:EnergyConsumerPhase.qfixed>/g, sub, context, true);
            /**
             * Fixed reactive power as per cent of load group fixed reactive power.
             * Load sign convention is used, i.e. positive sign means flow out from a node.
             */
            obj["qfixedPct"] = base.parse_element (/<cim:EnergyConsumerPhase.qfixedPct>([\s\S]*?)<\/cim:EnergyConsumerPhase.qfixedPct>/g, sub, context, true);
            /**
             * The energy consumer to which this phase belongs.
             */
            obj["EnergyConsumer"] = base.parse_attribute (/<cim:EnergyConsumerPhase.EnergyConsumer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.EnergyConsumerPhase;
            if (null == bucket)
                context.parsed.EnergyConsumerPhase = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An electromechanical device that operates with shaft rotating synchronously with the network.
         * It is a single machine operating either as a generator or synchronous condenser or pump.
         */
        function parse_SynchronousMachine (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_RotatingMachine (context, sub);
            obj.cls = "SynchronousMachine";
            /**
             * Time delay required when switching from Automatic Voltage Regulation (AVR) to Manual for a lagging MVAr violation.
             */
            obj["aVRToManualLag"] = base.parse_element (/<cim:SynchronousMachine.aVRToManualLag>([\s\S]*?)<\/cim:SynchronousMachine.aVRToManualLag>/g, sub, context, true);
            /**
             * Time delay required when switching from Automatic Voltage Regulation (AVR) to Manual for a leading MVAr violation.
             */
            obj["aVRToManualLead"] = base.parse_element (/<cim:SynchronousMachine.aVRToManualLead>([\s\S]*?)<\/cim:SynchronousMachine.aVRToManualLead>/g, sub, context, true);
            /**
             * Default base reactive power value.
             * This value represents the initial reactive power that can be used by any application function.
             */
            obj["baseQ"] = base.parse_element (/<cim:SynchronousMachine.baseQ>([\s\S]*?)<\/cim:SynchronousMachine.baseQ>/g, sub, context, true);
            /**
             * Active power consumed when in condenser mode operation.
             */
            obj["condenserP"] = base.parse_element (/<cim:SynchronousMachine.condenserP>([\s\S]*?)<\/cim:SynchronousMachine.condenserP>/g, sub, context, true);
            /**
             * Temperature or pressure of coolant medium
             */
            obj["coolantCondition"] = base.to_float (base.parse_element (/<cim:SynchronousMachine.coolantCondition>([\s\S]*?)<\/cim:SynchronousMachine.coolantCondition>/g, sub, context, true));
            /**
             * Method of cooling the machine.
             */
            obj["coolantType"] = base.parse_element (/<cim:SynchronousMachine.coolantType>([\s\S]*?)<\/cim:SynchronousMachine.coolantType>/g, sub, context, true);
            /**
             * Indicates whether or not the generator is earthed.
             * Used for short circuit data exchange according to IEC 60909
             */
            obj["earthing"] = base.to_boolean (base.parse_element (/<cim:SynchronousMachine.earthing>([\s\S]*?)<\/cim:SynchronousMachine.earthing>/g, sub, context, true));
            /**
             * Generator star point earthing resistance (Re).
             * Used for short circuit data exchange according to IEC 60909
             */
            obj["earthingStarPointR"] = base.parse_element (/<cim:SynchronousMachine.earthingStarPointR>([\s\S]*?)<\/cim:SynchronousMachine.earthingStarPointR>/g, sub, context, true);
            /**
             * Generator star point earthing reactance (Xe).
             * Used for short circuit data exchange according to IEC 60909
             */
            obj["earthingStarPointX"] = base.parse_element (/<cim:SynchronousMachine.earthingStarPointX>([\s\S]*?)<\/cim:SynchronousMachine.earthingStarPointX>/g, sub, context, true);
            /**
             * Steady-state short-circuit current (in A for the profile) of generator with compound excitation during 3-phase short circuit.
            - Ikk=0: Generator with no compound excitation.
            - Ikk?0: Generator with compound excitation.
             * Ikk is used to calculate the minimum steady-state short-circuit current for generators with compound excitation
             */
            obj["ikk"] = base.parse_element (/<cim:SynchronousMachine.ikk>([\s\S]*?)<\/cim:SynchronousMachine.ikk>/g, sub, context, true);
            /**
             * Time delay required when switching from Manual to Automatic Voltage Regulation.
             * This value is used in the accelerating power reference frame for powerflow solutions
             */
            obj["manualToAVR"] = base.parse_element (/<cim:SynchronousMachine.manualToAVR>([\s\S]*?)<\/cim:SynchronousMachine.manualToAVR>/g, sub, context, true);
            /**
             * Maximum reactive power limit.
             * This is the maximum (nameplate) limit for the unit.
             */
            obj["maxQ"] = base.parse_element (/<cim:SynchronousMachine.maxQ>([\s\S]*?)<\/cim:SynchronousMachine.maxQ>/g, sub, context, true);
            /**
             * Maximum voltage limit for the unit.
             */
            obj["maxU"] = base.parse_element (/<cim:SynchronousMachine.maxU>([\s\S]*?)<\/cim:SynchronousMachine.maxU>/g, sub, context, true);
            /**
             * Minimum reactive power limit for the unit.
             */
            obj["minQ"] = base.parse_element (/<cim:SynchronousMachine.minQ>([\s\S]*?)<\/cim:SynchronousMachine.minQ>/g, sub, context, true);
            /**
             * Minimum voltage  limit for the unit.
             */
            obj["minU"] = base.parse_element (/<cim:SynchronousMachine.minU>([\s\S]*?)<\/cim:SynchronousMachine.minU>/g, sub, context, true);
            /**
             * Factor to calculate the breaking current (Section 4.5.2.1 in the IEC 60909-0).
             * Used only for single fed short circuit on a generator (Section 4.3.4.2. in the IEC 60909-0).
             */
            obj["mu"] = base.to_float (base.parse_element (/<cim:SynchronousMachine.mu>([\s\S]*?)<\/cim:SynchronousMachine.mu>/g, sub, context, true));
            /**
             * Current mode of operation.
             */
            obj["operatingMode"] = base.parse_element (/<cim:SynchronousMachine.operatingMode>([\s\S]*?)<\/cim:SynchronousMachine.operatingMode>/g, sub, context, true);
            /**
             * Percent of the coordinated reactive control that comes from this machine.
             */
            obj["qPercent"] = base.parse_element (/<cim:SynchronousMachine.qPercent>([\s\S]*?)<\/cim:SynchronousMachine.qPercent>/g, sub, context, true);
            /**
             * Equivalent resistance (RG) of generator.
             * RG is considered for the calculation of all currents, except for the calculation of the peak current ip. Used for short circuit data exchange according to IEC 60909
             */
            obj["r"] = base.parse_element (/<cim:SynchronousMachine.r>([\s\S]*?)<\/cim:SynchronousMachine.r>/g, sub, context, true);
            /**
             * Zero sequence resistance of the synchronous machine.
             */
            obj["r0"] = base.parse_element (/<cim:SynchronousMachine.r0>([\s\S]*?)<\/cim:SynchronousMachine.r0>/g, sub, context, true);
            /**
             * Negative sequence resistance.
             */
            obj["r2"] = base.parse_element (/<cim:SynchronousMachine.r2>([\s\S]*?)<\/cim:SynchronousMachine.r2>/g, sub, context, true);
            /**
             * Priority of unit for use as powerflow voltage phase angle reference bus selection. 0 = don t care (default) 1 = highest priority. 2 is less than 1 and so on.
             */
            obj["referencePriority"] = base.parse_element (/<cim:SynchronousMachine.referencePriority>([\s\S]*?)<\/cim:SynchronousMachine.referencePriority>/g, sub, context, true);
            /**
             * Direct-axis subtransient reactance saturated, also known as Xd"sat.
             */
            obj["satDirectSubtransX"] = base.parse_element (/<cim:SynchronousMachine.satDirectSubtransX>([\s\S]*?)<\/cim:SynchronousMachine.satDirectSubtransX>/g, sub, context, true);
            /**
             * Direct-axes saturated synchronous reactance (xdsat); reciprocal of short-circuit ration.
             * Used for short circuit data exchange, only for single fed short circuit on a generator. (Section 4.3.4.2. in the IEC 60909-0).
             */
            obj["satDirectSyncX"] = base.parse_element (/<cim:SynchronousMachine.satDirectSyncX>([\s\S]*?)<\/cim:SynchronousMachine.satDirectSyncX>/g, sub, context, true);
            /**
             * Saturated Direct-axis transient reactance.
             * The attribute is primarily used for short circuit calculations according to ANSI.
             */
            obj["satDirectTransX"] = base.parse_element (/<cim:SynchronousMachine.satDirectTransX>([\s\S]*?)<\/cim:SynchronousMachine.satDirectTransX>/g, sub, context, true);
            /**
             * Type of rotor, used by short circuit applications, only for single fed short circuit according to IEC 60909.
             */
            obj["shortCircuitRotorType"] = base.parse_element (/<cim:SynchronousMachine.shortCircuitRotorType>([\s\S]*?)<\/cim:SynchronousMachine.shortCircuitRotorType>/g, sub, context, true);
            /**
             * Modes that this synchronous machine can operate in.
             */
            obj["type"] = base.parse_element (/<cim:SynchronousMachine.type>([\s\S]*?)<\/cim:SynchronousMachine.type>/g, sub, context, true);
            /**
             * Range of generator voltage regulation (PG in the IEC 60909-0) used for calculation of the impedance correction factor KG defined in IEC 60909-0
             * This attribute is used to describe the operating voltage of the generating unit.
             */
            obj["voltageRegulationRange"] = base.parse_element (/<cim:SynchronousMachine.voltageRegulationRange>([\s\S]*?)<\/cim:SynchronousMachine.voltageRegulationRange>/g, sub, context, true);
            /**
             * Zero sequence reactance of the synchronous machine.
             */
            obj["x0"] = base.parse_element (/<cim:SynchronousMachine.x0>([\s\S]*?)<\/cim:SynchronousMachine.x0>/g, sub, context, true);
            /**
             * Negative sequence reactance.
             */
            obj["x2"] = base.parse_element (/<cim:SynchronousMachine.x2>([\s\S]*?)<\/cim:SynchronousMachine.x2>/g, sub, context, true);
            /**
             * Synchronous machine dynamics model used to describe dynamic behavior of this synchronous machine.
             */
            obj["SynchronousMachineDynamics"] = base.parse_attribute (/<cim:SynchronousMachine.SynchronousMachineDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The default reactive capability curve for use by a synchronous machine.
             */
            obj["InitialReactiveCapabilityCurve"] = base.parse_attribute (/<cim:SynchronousMachine.InitialReactiveCapabilityCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.SynchronousMachine;
            if (null == bucket)
                context.parsed.SynchronousMachine = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Common type for per-length electrical catalogues describing line parameters.
         */
        function parse_PerLengthLineParameter (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "PerLengthLineParameter";
            /**
             * Wire spacing datasheet used to calculate this per-length parameter.
             */
            obj["WireSpacingInfo"] = base.parse_attribute (/<cim:PerLengthLineParameter.WireSpacingInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.PerLengthLineParameter;
            if (null == bucket)
                context.parsed.PerLengthLineParameter = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Type of rotor, used by short circuit applications.
         */
        function parse_ShortCircuitRotorKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ShortCircuitRotorKind";
            /**
             * Salient pole 1 in the IEC 60909
             */
            obj["salientPole1"] = base.parse_element (/<cim:ShortCircuitRotorKind.salientPole1>([\s\S]*?)<\/cim:ShortCircuitRotorKind.salientPole1>/g, sub, context, true);
            /**
             * Salient pole 2 in IEC 60909
             */
            obj["salientPole2"] = base.parse_element (/<cim:ShortCircuitRotorKind.salientPole2>([\s\S]*?)<\/cim:ShortCircuitRotorKind.salientPole2>/g, sub, context, true);
            /**
             * Turbo Series 1 in the IEC 60909
             */
            obj["turboSeries1"] = base.parse_element (/<cim:ShortCircuitRotorKind.turboSeries1>([\s\S]*?)<\/cim:ShortCircuitRotorKind.turboSeries1>/g, sub, context, true);
            /**
             * Turbo series 2 in IEC 60909
             */
            obj["turboSeries2"] = base.parse_element (/<cim:ShortCircuitRotorKind.turboSeries2>([\s\S]*?)<\/cim:ShortCircuitRotorKind.turboSeries2>/g, sub, context, true);
            bucket = context.parsed.ShortCircuitRotorKind;
            if (null == bucket)
                context.parsed.ShortCircuitRotorKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Triplet of resistance, reactance, and susceptance matrix element values.
         */
        function parse_PhaseImpedanceData (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PhaseImpedanceData";
            /**
             * Susceptance matrix element value, per length of unit.
             */
            obj["b"] = base.parse_element (/<cim:PhaseImpedanceData.b>([\s\S]*?)<\/cim:PhaseImpedanceData.b>/g, sub, context, true);
            /**
             * Resistance matrix element value, per length of unit.
             */
            obj["r"] = base.parse_element (/<cim:PhaseImpedanceData.r>([\s\S]*?)<\/cim:PhaseImpedanceData.r>/g, sub, context, true);
            /**
             * Column-wise element index, assuming a symmetrical matrix.
             * Ranges from 1 to N + N*(N-1)/2.
             */
            obj["sequenceNumber"] = base.parse_element (/<cim:PhaseImpedanceData.sequenceNumber>([\s\S]*?)<\/cim:PhaseImpedanceData.sequenceNumber>/g, sub, context, true);
            /**
             * Reactance matrix element value, per length of unit.
             */
            obj["x"] = base.parse_element (/<cim:PhaseImpedanceData.x>([\s\S]*?)<\/cim:PhaseImpedanceData.x>/g, sub, context, true);
            /**
             * Conductor phase impedance to which this data belongs.
             */
            obj["PhaseImpedance"] = base.parse_attribute (/<cim:PhaseImpedanceData.PhaseImpedance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.PhaseImpedanceData;
            if (null == bucket)
                context.parsed.PhaseImpedanceData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A facility for providing variable and controllable shunt reactive power.
         * The SVC typically consists of a stepdown transformer, filter, thyristor-controlled reactor, and thyristor-switched capacitor arms.
         */
        function parse_StaticVarCompensator (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_RegulatingCondEq (context, sub);
            obj.cls = "StaticVarCompensator";
            /**
             * Maximum available capacitive reactance.
             */
            obj["capacitiveRating"] = base.parse_element (/<cim:StaticVarCompensator.capacitiveRating>([\s\S]*?)<\/cim:StaticVarCompensator.capacitiveRating>/g, sub, context, true);
            /**
             * Maximum available inductive reactance.
             */
            obj["inductiveRating"] = base.parse_element (/<cim:StaticVarCompensator.inductiveRating>([\s\S]*?)<\/cim:StaticVarCompensator.inductiveRating>/g, sub, context, true);
            /**
             * The characteristics slope of an SVC defines how the reactive power output changes in proportion to the difference between the regulated bus voltage and the voltage setpoint.
             */
            obj["slope"] = base.parse_element (/<cim:StaticVarCompensator.slope>([\s\S]*?)<\/cim:StaticVarCompensator.slope>/g, sub, context, true);
            /**
             * SVC control mode.
             */
            obj["sVCControlMode"] = base.parse_element (/<cim:StaticVarCompensator.sVCControlMode>([\s\S]*?)<\/cim:StaticVarCompensator.sVCControlMode>/g, sub, context, true);
            /**
             * The reactive power output of the SVC is proportional to the difference between the voltage at the regulated bus and the voltage setpoint.
             * When the regulated bus voltage is equal to the voltage setpoint, the reactive power output is zero.
             */
            obj["voltageSetPoint"] = base.parse_element (/<cim:StaticVarCompensator.voltageSetPoint>([\s\S]*?)<\/cim:StaticVarCompensator.voltageSetPoint>/g, sub, context, true);
            /**
             * Reactive power injection.
             * Load sign convention is used, i.e. positive sign means flow out from a node.
             */
            obj["q"] = base.parse_element (/<cim:StaticVarCompensator.q>([\s\S]*?)<\/cim:StaticVarCompensator.q>/g, sub, context, true);
            bucket = context.parsed.StaticVarCompensator;
            if (null == bucket)
                context.parsed.StaticVarCompensator = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Describes a tabular curve for how the phase angle difference and impedance varies with the tap step.
         */
        function parse_PhaseTapChangerTable (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "PhaseTapChangerTable";
            bucket = context.parsed.PhaseTapChangerTable;
            if (null == bucket)
                context.parsed.PhaseTapChangerTable = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Transformer tank end represents an individual winding for unbalanced models or for transformer tanks connected into a bank (and bank is modelled with the PowerTransformer).
         */
        function parse_TransformerTankEnd (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TransformerEnd (context, sub);
            obj.cls = "TransformerTankEnd";
            /**
             * Describes the phases carried by a conducting equipment.
             */
            obj["phases"] = base.parse_element (/<cim:TransformerTankEnd.phases>([\s\S]*?)<\/cim:TransformerTankEnd.phases>/g, sub, context, true);
            /**
             * Transformer this winding belongs to.
             */
            obj["TransformerTank"] = base.parse_attribute (/<cim:TransformerTankEnd.TransformerTank\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.TransformerTankEnd;
            if (null == bucket)
                context.parsed.TransformerTankEnd = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Contains equipment beyond a substation belonging to a power transmission line.
         */
        function parse_Line (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_EquipmentContainer (context, sub);
            obj.cls = "Line";
            /**
             * The sub-geographical region of the line.
             */
            obj["Region"] = base.parse_attribute (/<cim:Line.Region\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.Line;
            if (null == bucket)
                context.parsed.Line = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The non-linear phase tap changer describes the non-linear behavior of a phase tap changer.
         * This is a base class for the symmetrical and asymmetrical phase tap changer models. The details of these models can be found in the IEC 61970-301 document.
         */
        function parse_PhaseTapChangerNonLinear (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PhaseTapChanger (context, sub);
            obj.cls = "PhaseTapChangerNonLinear";
            /**
             * The voltage step increment on the out of phase winding specified in percent of nominal voltage of the transformer end.
             */
            obj["voltageStepIncrement"] = base.parse_element (/<cim:PhaseTapChangerNonLinear.voltageStepIncrement>([\s\S]*?)<\/cim:PhaseTapChangerNonLinear.voltageStepIncrement>/g, sub, context, true);
            /**
             * The reactance depend on the tap position according to a "u" shaped curve.
             * The maximum reactance (xMax) appear at the low and high tap positions.
             */
            obj["xMax"] = base.parse_element (/<cim:PhaseTapChangerNonLinear.xMax>([\s\S]*?)<\/cim:PhaseTapChangerNonLinear.xMax>/g, sub, context, true);
            /**
             * The reactance depend on the tap position according to a "u" shaped curve.
             * The minimum reactance (xMin) appear at the mid tap position.
             */
            obj["xMin"] = base.parse_element (/<cim:PhaseTapChangerNonLinear.xMin>([\s\S]*?)<\/cim:PhaseTapChangerNonLinear.xMin>/g, sub, context, true);
            bucket = context.parsed.PhaseTapChangerNonLinear;
            if (null == bucket)
                context.parsed.PhaseTapChangerNonLinear = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An assembly of two or more coupled windings that transform electrical power between voltage levels.
         * These windings are bound on a common core and place in the same tank. Transformer tank can be used to model both single-phase and 3-phase transformers.
         */
        function parse_TransformerTank (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Equipment (context, sub);
            obj.cls = "TransformerTank";
            /**
             * Bank this transformer belongs to.
             */
            obj["PowerTransformer"] = base.parse_attribute (/<cim:TransformerTank.PowerTransformer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.TransformerTank;
            if (null == bucket)
                context.parsed.TransformerTank = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A mechanical switching device capable of making, carrying, and breaking currents under normal operating conditions.
         */
        function parse_LoadBreakSwitch (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ProtectedSwitch (context, sub);
            obj.cls = "LoadBreakSwitch";
            bucket = context.parsed.LoadBreakSwitch;
            if (null == bucket)
                context.parsed.LoadBreakSwitch = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A per phase non linear shunt compensator has bank or section admittance values that differs.
         */
        function parse_NonlinearShuntCompensatorPhase (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ShuntCompensatorPhase (context, sub);
            obj.cls = "NonlinearShuntCompensatorPhase";
            bucket = context.parsed.NonlinearShuntCompensatorPhase;
            if (null == bucket)
                context.parsed.NonlinearShuntCompensatorPhase = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A pre-established pattern over time for a tap step.
         */
        function parse_TapSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = LoadModel.parse_SeasonDayTypeSchedule (context, sub);
            obj.cls = "TapSchedule";
            /**
             * A TapSchedule is associated with a TapChanger.
             */
            obj["TapChanger"] = base.parse_attribute (/<cim:TapSchedule.TapChanger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.TapSchedule;
            if (null == bucket)
                context.parsed.TapSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_PhaseTapChangerTabular (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PhaseTapChanger (context, sub);
            obj.cls = "PhaseTapChangerTabular";
            /**
             * The phase tap changer table for this phase tap changer.
             */
            obj["PhaseTapChangerTable"] = base.parse_attribute (/<cim:PhaseTapChangerTabular.PhaseTapChangerTable\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.PhaseTapChangerTabular;
            if (null == bucket)
                context.parsed.PhaseTapChangerTabular = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A manually operated or motor operated mechanical switching device used for isolating a circuit or equipment from ground.
         */
        function parse_GroundDisconnector (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Switch (context, sub);
            obj.cls = "GroundDisconnector";
            bucket = context.parsed.GroundDisconnector;
            if (null == bucket)
                context.parsed.GroundDisconnector = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Sequence impedance and admittance parameters per unit length, for transposed lines of 1, 2, or 3 phases.
         * For 1-phase lines, define x=x0=xself. For 2-phase lines, define x=xs-xm and x0=xs+xm.
         */
        function parse_PerLengthSequenceImpedance (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PerLengthImpedance (context, sub);
            obj.cls = "PerLengthSequenceImpedance";
            /**
             * Zero sequence shunt (charging) susceptance, per unit of length.
             */
            obj["b0ch"] = base.parse_element (/<cim:PerLengthSequenceImpedance.b0ch>([\s\S]*?)<\/cim:PerLengthSequenceImpedance.b0ch>/g, sub, context, true);
            /**
             * Positive sequence shunt (charging) susceptance, per unit of length.
             */
            obj["bch"] = base.parse_element (/<cim:PerLengthSequenceImpedance.bch>([\s\S]*?)<\/cim:PerLengthSequenceImpedance.bch>/g, sub, context, true);
            /**
             * Zero sequence shunt (charging) conductance, per unit of length.
             */
            obj["g0ch"] = base.parse_element (/<cim:PerLengthSequenceImpedance.g0ch>([\s\S]*?)<\/cim:PerLengthSequenceImpedance.g0ch>/g, sub, context, true);
            /**
             * Positive sequence shunt (charging) conductance, per unit of length.
             */
            obj["gch"] = base.parse_element (/<cim:PerLengthSequenceImpedance.gch>([\s\S]*?)<\/cim:PerLengthSequenceImpedance.gch>/g, sub, context, true);
            /**
             * Positive sequence series resistance, per unit of length.
             */
            obj["r"] = base.parse_element (/<cim:PerLengthSequenceImpedance.r>([\s\S]*?)<\/cim:PerLengthSequenceImpedance.r>/g, sub, context, true);
            /**
             * Zero sequence series resistance, per unit of length.
             */
            obj["r0"] = base.parse_element (/<cim:PerLengthSequenceImpedance.r0>([\s\S]*?)<\/cim:PerLengthSequenceImpedance.r0>/g, sub, context, true);
            /**
             * Positive sequence series reactance, per unit of length.
             */
            obj["x"] = base.parse_element (/<cim:PerLengthSequenceImpedance.x>([\s\S]*?)<\/cim:PerLengthSequenceImpedance.x>/g, sub, context, true);
            /**
             * Zero sequence series reactance, per unit of length.
             */
            obj["x0"] = base.parse_element (/<cim:PerLengthSequenceImpedance.x0>([\s\S]*?)<\/cim:PerLengthSequenceImpedance.x0>/g, sub, context, true);
            bucket = context.parsed.PerLengthSequenceImpedance;
            if (null == bucket)
                context.parsed.PerLengthSequenceImpedance = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A non linear shunt compensator has bank or section admittance values that differs.
         */
        function parse_NonlinearShuntCompensator (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ShuntCompensator (context, sub);
            obj.cls = "NonlinearShuntCompensator";
            bucket = context.parsed.NonlinearShuntCompensator;
            if (null == bucket)
                context.parsed.NonlinearShuntCompensator = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A conducting equipment used to represent a connection to ground which is typically used to compensate earth faults..
         * An earth fault compensator device modeled with a single terminal implies a second terminal solidly connected to ground.  If two terminals are modeled, the ground is not assumed and normal connection rules apply.
         */
        function parse_EarthFaultCompensator (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_ConductingEquipment (context, sub);
            obj.cls = "EarthFaultCompensator";
            /**
             * Nominal resistance of device.
             */
            obj["r"] = base.parse_element (/<cim:EarthFaultCompensator.r>([\s\S]*?)<\/cim:EarthFaultCompensator.r>/g, sub, context, true);
            bucket = context.parsed.EarthFaultCompensator;
            if (null == bucket)
                context.parsed.EarthFaultCompensator = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A Clamp is a galvanic connection at a line segment where other equipment is connected.
         * A Clamp does not cut the line segment.
         */
        function parse_Clamp (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_ConductingEquipment (context, sub);
            obj.cls = "Clamp";
            /**
             * The length to the place where the clamp is located starting from side one of the line segment, i.e. the line segment terminal with sequence number equal to 1.
             */
            obj["lengthFromTerminal1"] = base.parse_element (/<cim:Clamp.lengthFromTerminal1>([\s\S]*?)<\/cim:Clamp.lengthFromTerminal1>/g, sub, context, true);
            /**
             * The line segment to which the clamp is connected.
             */
            obj["ACLineSegment"] = base.parse_attribute (/<cim:Clamp.ACLineSegment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.Clamp;
            if (null == bucket)
                context.parsed.Clamp = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Describes each tap step in the phase tap changer tabular curve.
         */
        function parse_PhaseTapChangerTablePoint (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TapChangerTablePoint (context, sub);
            obj.cls = "PhaseTapChangerTablePoint";
            /**
             * The angle difference in degrees.
             */
            obj["angle"] = base.parse_element (/<cim:PhaseTapChangerTablePoint.angle>([\s\S]*?)<\/cim:PhaseTapChangerTablePoint.angle>/g, sub, context, true);
            /**
             * The table of this point.
             */
            obj["PhaseTapChangerTable"] = base.parse_attribute (/<cim:PhaseTapChangerTablePoint.PhaseTapChangerTable\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.PhaseTapChangerTablePoint;
            if (null == bucket)
                context.parsed.PhaseTapChangerTablePoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A ProtectedSwitch is a switching device that can be operated by ProtectionEquipment.
         */
        function parse_ProtectedSwitch (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Switch (context, sub);
            obj.cls = "ProtectedSwitch";
            /**
             * The maximum fault current a breaking device can break safely under prescribed conditions of use.
             */
            obj["breakingCapacity"] = base.parse_element (/<cim:ProtectedSwitch.breakingCapacity>([\s\S]*?)<\/cim:ProtectedSwitch.breakingCapacity>/g, sub, context, true);
            bucket = context.parsed.ProtectedSwitch;
            if (null == bucket)
                context.parsed.ProtectedSwitch = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Synchronous machine type.
         */
        function parse_SynchronousMachineKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SynchronousMachineKind";
            obj["generator"] = base.parse_element (/<cim:SynchronousMachineKind.generator>([\s\S]*?)<\/cim:SynchronousMachineKind.generator>/g, sub, context, true);
            obj["condenser"] = base.parse_element (/<cim:SynchronousMachineKind.condenser>([\s\S]*?)<\/cim:SynchronousMachineKind.condenser>/g, sub, context, true);
            obj["generatorOrCondenser"] = base.parse_element (/<cim:SynchronousMachineKind.generatorOrCondenser>([\s\S]*?)<\/cim:SynchronousMachineKind.generatorOrCondenser>/g, sub, context, true);
            obj["motor"] = base.parse_element (/<cim:SynchronousMachineKind.motor>([\s\S]*?)<\/cim:SynchronousMachineKind.motor>/g, sub, context, true);
            obj["generatorOrMotor"] = base.parse_element (/<cim:SynchronousMachineKind.generatorOrMotor>([\s\S]*?)<\/cim:SynchronousMachineKind.generatorOrMotor>/g, sub, context, true);
            obj["motorOrCondenser"] = base.parse_element (/<cim:SynchronousMachineKind.motorOrCondenser>([\s\S]*?)<\/cim:SynchronousMachineKind.motorOrCondenser>/g, sub, context, true);
            obj["generatorOrCondenserOrMotor"] = base.parse_element (/<cim:SynchronousMachineKind.generatorOrCondenserOrMotor>([\s\S]*?)<\/cim:SynchronousMachineKind.generatorOrCondenserOrMotor>/g, sub, context, true);
            bucket = context.parsed.SynchronousMachineKind;
            if (null == bucket)
                context.parsed.SynchronousMachineKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The configuration of phase connections for a single terminal device such as a load or capactitor.
         */
        function parse_PhaseShuntConnectionKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PhaseShuntConnectionKind";
            /**
             * Delta connection.
             */
            obj["D"] = base.parse_element (/<cim:PhaseShuntConnectionKind.D>([\s\S]*?)<\/cim:PhaseShuntConnectionKind.D>/g, sub, context, true);
            /**
             * Wye connection.
             */
            obj["Y"] = base.parse_element (/<cim:PhaseShuntConnectionKind.Y>([\s\S]*?)<\/cim:PhaseShuntConnectionKind.Y>/g, sub, context, true);
            /**
             * Wye, with neutral brought out for grounding.
             */
            obj["Yn"] = base.parse_element (/<cim:PhaseShuntConnectionKind.Yn>([\s\S]*?)<\/cim:PhaseShuntConnectionKind.Yn>/g, sub, context, true);
            /**
             * Independent winding, for single-phase connections.
             */
            obj["I"] = base.parse_element (/<cim:PhaseShuntConnectionKind.I>([\s\S]*?)<\/cim:PhaseShuntConnectionKind.I>/g, sub, context, true);
            bucket = context.parsed.PhaseShuntConnectionKind;
            if (null == bucket)
                context.parsed.PhaseShuntConnectionKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A cut separates a line segment into two parts.
         * The cut appears as a switch inserted between these two parts and connects them together. As the cut is normally open there is no galvanic connection between the two line segment parts. But it is possible to close the cut to get galvanic connection.
         */
        function parse_Cut (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Switch (context, sub);
            obj.cls = "Cut";
            /**
             * The length to the place where the cut is located starting from side one of the cut line segment, i.e. the line segment Terminal with sequenceNumber equal to 1.
             */
            obj["lengthFromTerminal1"] = base.parse_element (/<cim:Cut.lengthFromTerminal1>([\s\S]*?)<\/cim:Cut.lengthFromTerminal1>/g, sub, context, true);
            /**
             * The line segment to which the cut is applied.
             */
            obj["ACLineSegment"] = base.parse_attribute (/<cim:Cut.ACLineSegment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Action taken with this cut.
             */
            obj["CutAction"] = base.parse_attribute (/<cim:Cut.CutAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.Cut;
            if (null == bucket)
                context.parsed.Cut = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A pre-established pattern over time for a controlled variable, e.g., busbar voltage.
         */
        function parse_RegulationSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = LoadModel.parse_SeasonDayTypeSchedule (context, sub);
            obj.cls = "RegulationSchedule";
            /**
             * Regulating controls that have this Schedule.
             */
            obj["RegulatingControl"] = base.parse_attribute (/<cim:RegulationSchedule.RegulatingControl\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.RegulationSchedule;
            if (null == bucket)
                context.parsed.RegulationSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Represents a single wire of an alternating current line segment.
         */
        function parse_ACLineSegmentPhase (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "ACLineSegmentPhase";
            /**
             * The phase connection of the wire at both ends.
             */
            obj["phase"] = base.parse_element (/<cim:ACLineSegmentPhase.phase>([\s\S]*?)<\/cim:ACLineSegmentPhase.phase>/g, sub, context, true);
            /**
             * The line segment to which the phase belongs.
             */
            obj["ACLineSegment"] = base.parse_attribute (/<cim:ACLineSegmentPhase.ACLineSegment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ACLineSegmentPhase;
            if (null == bucket)
                context.parsed.ACLineSegmentPhase = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A mechanical switching device capable of making, carrying, and breaking currents under normal circuit conditions and also making, carrying for a specified time, and breaking currents under specified abnormal circuit conditions e.g.  those of short circuit.
         */
        function parse_Breaker (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ProtectedSwitch (context, sub);
            obj.cls = "Breaker";
            /**
             * The transition time from open to close.
             */
            obj["inTransitTime"] = base.parse_element (/<cim:Breaker.inTransitTime>([\s\S]*?)<\/cim:Breaker.inTransitTime>/g, sub, context, true);
            bucket = context.parsed.Breaker;
            if (null == bucket)
                context.parsed.Breaker = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A short section of conductor with negligible impedance which can be manually removed and replaced if the circuit is de-energized.
         * Note that zero-impedance branches can potentially be modeled by other equipment types.
         */
        function parse_Jumper (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Switch (context, sub);
            obj.cls = "Jumper";
            /**
             * Action taken with this jumper.
             */
            obj["JumperAction"] = base.parse_attribute (/<cim:Jumper.JumperAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.Jumper;
            if (null == bucket)
                context.parsed.Jumper = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A conducting connection point of a power transformer.
         * It corresponds to a physical transformer winding terminal.  In earlier CIM versions, the TransformerWinding class served a similar purpose, but this class is more flexible because it associates to terminal but is not a specialization of ConductingEquipment.
         */
        function parse_TransformerEnd (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TransformerEnd";
            /**
             * Core shunt magnetizing susceptance in the saturation region.
             */
            obj["bmagSat"] = base.parse_element (/<cim:TransformerEnd.bmagSat>([\s\S]*?)<\/cim:TransformerEnd.bmagSat>/g, sub, context, true);
            /**
             * Number for this transformer end, corresponding to the end's order in the power transformer vector group or phase angle clock number.
             * Highest voltage winding should be 1.  Each end within a power transformer should have a unique subsequent end number.   Note the transformer end number need not match the terminal sequence number.
             */
            obj["endNumber"] = base.parse_element (/<cim:TransformerEnd.endNumber>([\s\S]*?)<\/cim:TransformerEnd.endNumber>/g, sub, context, true);
            /**
             * (for Yn and Zn connections) True if the neutral is solidly grounded.
             */
            obj["grounded"] = base.to_boolean (base.parse_element (/<cim:TransformerEnd.grounded>([\s\S]*?)<\/cim:TransformerEnd.grounded>/g, sub, context, true));
            /**
             * The reference voltage at which the magnetizing saturation measurements were made
             */
            obj["magBaseU"] = base.parse_element (/<cim:TransformerEnd.magBaseU>([\s\S]*?)<\/cim:TransformerEnd.magBaseU>/g, sub, context, true);
            /**
             * Core magnetizing saturation curve knee flux level.
             */
            obj["magSatFlux"] = base.parse_element (/<cim:TransformerEnd.magSatFlux>([\s\S]*?)<\/cim:TransformerEnd.magSatFlux>/g, sub, context, true);
            /**
             * (for Yn and Zn connections) Resistance part of neutral impedance where 'grounded' is true.
             */
            obj["rground"] = base.parse_element (/<cim:TransformerEnd.rground>([\s\S]*?)<\/cim:TransformerEnd.rground>/g, sub, context, true);
            /**
             * (for Yn and Zn connections) Reactive part of neutral impedance where 'grounded' is true.
             */
            obj["xground"] = base.parse_element (/<cim:TransformerEnd.xground>([\s\S]*?)<\/cim:TransformerEnd.xground>/g, sub, context, true);
            /**
             * Core admittance of this transformer end, representing magnetising current and core losses.
             * The full values of the transformer should be supplied for one transformer end only.
             */
            obj["CoreAdmittance"] = base.parse_attribute (/<cim:TransformerEnd.CoreAdmittance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Phase tap changer associated with this transformer end.
             */
            obj["PhaseTapChanger"] = base.parse_attribute (/<cim:TransformerEnd.PhaseTapChanger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Base voltage of the transformer end.
             * This is essential for PU calculation.
             */
            obj["BaseVoltage"] = base.parse_attribute (/<cim:TransformerEnd.BaseVoltage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Ratio tap changer associated with this transformer end.
             */
            obj["RatioTapChanger"] = base.parse_attribute (/<cim:TransformerEnd.RatioTapChanger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * (accurate for 2- or 3-winding transformers only) Pi-model impedances of this transformer end.
             * By convention, for a two winding transformer, the full values of the transformer should be entered on the high voltage end (endNumber=1).
             */
            obj["StarImpedance"] = base.parse_attribute (/<cim:TransformerEnd.StarImpedance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Terminal of the power transformer to which this transformer end belongs.
             */
            obj["Terminal"] = base.parse_attribute (/<cim:TransformerEnd.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.TransformerEnd;
            if (null == bucket)
                context.parsed.TransformerEnd = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A point where one or more conducting equipments are connected with zero resistance.
         */
        function parse_Junction (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Connector (context, sub);
            obj.cls = "Junction";
            bucket = context.parsed.Junction;
            if (null == bucket)
                context.parsed.Junction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Common type for per-length impedance electrical catalogues.
         */
        function parse_PerLengthImpedance (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PerLengthLineParameter (context, sub);
            obj.cls = "PerLengthImpedance";
            bucket = context.parsed.PerLengthImpedance;
            if (null == bucket)
                context.parsed.PerLengthImpedance = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A schedule of switch positions.
         * If RegularTimePoint.value1 is 0, the switch is open.  If 1, the switch is closed.
         */
        function parse_SwitchSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = LoadModel.parse_SeasonDayTypeSchedule (context, sub);
            obj.cls = "SwitchSchedule";
            /**
             * A SwitchSchedule is associated with a Switch.
             */
            obj["Switch"] = base.parse_attribute (/<cim:SwitchSchedule.Switch\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.SwitchSchedule;
            if (null == bucket)
                context.parsed.SwitchSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Specifies a set of equipment that works together to control a power system quantity such as voltage or flow.
         * Remote bus voltage control is possible by specifying the controlled terminal located at some place remote from the controlling equipment.
         */
        function parse_RegulatingControl (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "RegulatingControl";
            /**
             * The regulation is performed in a discrete mode.
             * This applies to equipment with discrete controls, e.g. tap changers and shunt compensators.
             */
            obj["discrete"] = base.to_boolean (base.parse_element (/<cim:RegulatingControl.discrete>([\s\S]*?)<\/cim:RegulatingControl.discrete>/g, sub, context, true));
            /**
             * The regulating control mode presently available.
             * This specification allows for determining the kind of regulation without need for obtaining the units from a schedule.
             */
            obj["mode"] = base.parse_element (/<cim:RegulatingControl.mode>([\s\S]*?)<\/cim:RegulatingControl.mode>/g, sub, context, true);
            /**
             * Phase voltage controlling this regulator, measured at regulator location.
             */
            obj["monitoredPhase"] = base.parse_element (/<cim:RegulatingControl.monitoredPhase>([\s\S]*?)<\/cim:RegulatingControl.monitoredPhase>/g, sub, context, true);
            /**
             * This is a deadband used with discrete control to avoid excessive update of controls like tap changers and shunt compensator banks while regulating.
             * The units of those appropriate for the mode.
             */
            obj["targetDeadband"] = base.to_float (base.parse_element (/<cim:RegulatingControl.targetDeadband>([\s\S]*?)<\/cim:RegulatingControl.targetDeadband>/g, sub, context, true));
            /**
             * The target value specified for case input.
             * This value can be used for the target value without the use of schedules. The value has the units appropriate to the mode attribute.
             */
            obj["targetValue"] = base.to_float (base.parse_element (/<cim:RegulatingControl.targetValue>([\s\S]*?)<\/cim:RegulatingControl.targetValue>/g, sub, context, true));
            /**
             * Specify the multiplier for used for the targetValue.
             */
            obj["targetValueUnitMultiplier"] = base.parse_element (/<cim:RegulatingControl.targetValueUnitMultiplier>([\s\S]*?)<\/cim:RegulatingControl.targetValueUnitMultiplier>/g, sub, context, true);
            /**
             * The flag tells if regulation is enabled.
             */
            obj["enabled"] = base.to_boolean (base.parse_element (/<cim:RegulatingControl.enabled>([\s\S]*?)<\/cim:RegulatingControl.enabled>/g, sub, context, true));
            /**
             * The terminal associated with this regulating control.
             * The terminal is associated instead of a node, since the terminal could connect into either a topological node (bus in bus-branch model) or a connectivity node (detailed switch model).  Sometimes it is useful to model regulation at a terminal of a bus bar object since the bus bar can be present in both a bus-branch model or a model with switch detail.
             */
            obj["Terminal"] = base.parse_attribute (/<cim:RegulatingControl.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.RegulatingControl;
            if (null == bucket)
                context.parsed.RegulatingControl = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Mechanism for changing transformer winding tap positions.
         */
        function parse_TapChanger (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "TapChanger";
            /**
             * Highest possible tap step position, advance from neutral.
             * The attribute shall be greater than lowStep.
             */
            obj["highStep"] = base.parse_element (/<cim:TapChanger.highStep>([\s\S]*?)<\/cim:TapChanger.highStep>/g, sub, context, true);
            /**
             * For an LTC, the delay for initial tap changer operation (first step change)
             */
            obj["initialDelay"] = base.parse_element (/<cim:TapChanger.initialDelay>([\s\S]*?)<\/cim:TapChanger.initialDelay>/g, sub, context, true);
            /**
             * Lowest possible tap step position, retard from neutral
             */
            obj["lowStep"] = base.parse_element (/<cim:TapChanger.lowStep>([\s\S]*?)<\/cim:TapChanger.lowStep>/g, sub, context, true);
            /**
             * Specifies whether or not a TapChanger has load tap changing capabilities.
             */
            obj["ltcFlag"] = base.to_boolean (base.parse_element (/<cim:TapChanger.ltcFlag>([\s\S]*?)<\/cim:TapChanger.ltcFlag>/g, sub, context, true));
            /**
             * The neutral tap step position for this winding.
             * The attribute shall be equal or greater than lowStep and equal or less than highStep.
             */
            obj["neutralStep"] = base.parse_element (/<cim:TapChanger.neutralStep>([\s\S]*?)<\/cim:TapChanger.neutralStep>/g, sub, context, true);
            /**
             * Voltage at which the winding operates at the neutral tap setting.
             */
            obj["neutralU"] = base.parse_element (/<cim:TapChanger.neutralU>([\s\S]*?)<\/cim:TapChanger.neutralU>/g, sub, context, true);
            /**
             * The tap step position used in "normal" network operation for this winding.
             * For a "Fixed" tap changer indicates the current physical tap setting.
             */
            obj["normalStep"] = base.parse_element (/<cim:TapChanger.normalStep>([\s\S]*?)<\/cim:TapChanger.normalStep>/g, sub, context, true);
            /**
             * For an LTC, the delay for subsequent tap changer operation (second and later step changes)
             */
            obj["subsequentDelay"] = base.parse_element (/<cim:TapChanger.subsequentDelay>([\s\S]*?)<\/cim:TapChanger.subsequentDelay>/g, sub, context, true);
            /**
             * Specifies the regulation status of the equipment.
             * True is regulating, false is not regulating.
             */
            obj["controlEnabled"] = base.to_boolean (base.parse_element (/<cim:TapChanger.controlEnabled>([\s\S]*?)<\/cim:TapChanger.controlEnabled>/g, sub, context, true));
            /**
             * Tap changer position.
             * Starting step for a steady state solution. Non integer values are allowed to support continuous tap variables. The reasons for continuous value are to support study cases where no discrete tap changers has yet been designed, a solutions where a narrow voltage band force the tap step to oscillate or accommodate for a continuous solution as input.
             */
            obj["step"] = base.to_float (base.parse_element (/<cim:TapChanger.step>([\s\S]*?)<\/cim:TapChanger.step>/g, sub, context, true));
            /**
             * The regulating control scheme in which this tap changer participates.
             */
            obj["TapChangerControl"] = base.parse_attribute (/<cim:TapChanger.TapChangerControl\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The tap step state associated with the tap changer.
             */
            obj["SvTapStep"] = base.parse_attribute (/<cim:TapChanger.SvTapStep\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.TapChanger;
            if (null == bucket)
                context.parsed.TapChanger = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A generic equivalent for an energy supplier on a transmission or distribution voltage level.
         */
        function parse_EnergySource (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_ConductingEquipment (context, sub);
            obj.cls = "EnergySource";
            /**
             * High voltage source active injection.
             * Load sign convention is used, i.e. positive sign means flow out from a node.
             */
            obj["activePower"] = base.parse_element (/<cim:EnergySource.activePower>([\s\S]*?)<\/cim:EnergySource.activePower>/g, sub, context, true);
            /**
             * Phase-to-phase nominal voltage.
             */
            obj["nominalVoltage"] = base.parse_element (/<cim:EnergySource.nominalVoltage>([\s\S]*?)<\/cim:EnergySource.nominalVoltage>/g, sub, context, true);
            /**
             * Positive sequence Thevenin resistance.
             */
            obj["r"] = base.parse_element (/<cim:EnergySource.r>([\s\S]*?)<\/cim:EnergySource.r>/g, sub, context, true);
            /**
             * Zero sequence Thevenin resistance.
             */
            obj["r0"] = base.parse_element (/<cim:EnergySource.r0>([\s\S]*?)<\/cim:EnergySource.r0>/g, sub, context, true);
            /**
             * Negative sequence Thevenin resistance.
             */
            obj["rn"] = base.parse_element (/<cim:EnergySource.rn>([\s\S]*?)<\/cim:EnergySource.rn>/g, sub, context, true);
            /**
             * Phase angle of a-phase open circuit.
             */
            obj["voltageAngle"] = base.parse_element (/<cim:EnergySource.voltageAngle>([\s\S]*?)<\/cim:EnergySource.voltageAngle>/g, sub, context, true);
            /**
             * Phase-to-phase open circuit voltage magnitude.
             */
            obj["voltageMagnitude"] = base.parse_element (/<cim:EnergySource.voltageMagnitude>([\s\S]*?)<\/cim:EnergySource.voltageMagnitude>/g, sub, context, true);
            /**
             * Positive sequence Thevenin reactance.
             */
            obj["x"] = base.parse_element (/<cim:EnergySource.x>([\s\S]*?)<\/cim:EnergySource.x>/g, sub, context, true);
            /**
             * Zero sequence Thevenin reactance.
             */
            obj["x0"] = base.parse_element (/<cim:EnergySource.x0>([\s\S]*?)<\/cim:EnergySource.x0>/g, sub, context, true);
            /**
             * Negative sequence Thevenin reactance.
             */
            obj["xn"] = base.parse_element (/<cim:EnergySource.xn>([\s\S]*?)<\/cim:EnergySource.xn>/g, sub, context, true);
            /**
             * High voltage source reactive injection.
             * Load sign convention is used, i.e. positive sign means flow out from a node.
             */
            obj["reactivePower"] = base.parse_element (/<cim:EnergySource.reactivePower>([\s\S]*?)<\/cim:EnergySource.reactivePower>/g, sub, context, true);
            /**
             * Wind generator Type 3 or 4 dynamics model associated with this energy source.
             */
            obj["WindTurbineType3or4Dynamics"] = base.parse_attribute (/<cim:EnergySource.WindTurbineType3or4Dynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Action taken with this energy source.
             */
            obj["EnergySourceAction"] = base.parse_attribute (/<cim:EnergySource.EnergySourceAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Energy Scheduling Type of an Energy Source
             */
            obj["EnergySchedulingType"] = base.parse_attribute (/<cim:EnergySource.EnergySchedulingType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.EnergySource;
            if (null == bucket)
                context.parsed.EnergySource = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Static VAr Compensator control mode.
         */
        function parse_SVCControlMode (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SVCControlMode";
            obj["reactivePower"] = base.parse_element (/<cim:SVCControlMode.reactivePower>([\s\S]*?)<\/cim:SVCControlMode.reactivePower>/g, sub, context, true);
            obj["voltage"] = base.parse_element (/<cim:SVCControlMode.voltage>([\s\S]*?)<\/cim:SVCControlMode.voltage>/g, sub, context, true);
            bucket = context.parsed.SVCControlMode;
            if (null == bucket)
                context.parsed.SVCControlMode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Describes each tap step in the ratio tap changer tabular curve.
         */
        function parse_RatioTapChangerTablePoint (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TapChangerTablePoint (context, sub);
            obj.cls = "RatioTapChangerTablePoint";
            /**
             * Table of this point.
             */
            obj["RatioTapChangerTable"] = base.parse_attribute (/<cim:RatioTapChangerTablePoint.RatioTapChangerTable\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.RatioTapChangerTablePoint;
            if (null == bucket)
                context.parsed.RatioTapChangerTablePoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Single phase of a multi-phase shunt compensator when its attributes might be different per phase.
         */
        function parse_ShuntCompensatorPhase (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "ShuntCompensatorPhase";
            /**
             * The maximum number of sections that may be switched in for this phase.
             */
            obj["maximumSections"] = base.parse_element (/<cim:ShuntCompensatorPhase.maximumSections>([\s\S]*?)<\/cim:ShuntCompensatorPhase.maximumSections>/g, sub, context, true);
            /**
             * For the capacitor phase, the normal number of sections switched in.
             */
            obj["normalSections"] = base.parse_element (/<cim:ShuntCompensatorPhase.normalSections>([\s\S]*?)<\/cim:ShuntCompensatorPhase.normalSections>/g, sub, context, true);
            /**
             * Phase of this shunt compensator component.
             * If the shunt compensator is wye connected, the connection is from the indicated phase to the central ground or neutral point.  If the shunt compensator is delta connected, the phase indicates a shunt compensator connected from the indicated phase to the next logical non-neutral phase.
             */
            obj["phase"] = base.parse_element (/<cim:ShuntCompensatorPhase.phase>([\s\S]*?)<\/cim:ShuntCompensatorPhase.phase>/g, sub, context, true);
            /**
             * Shunt compensator of this shunt compensator phase.
             */
            obj["ShuntCompensator"] = base.parse_attribute (/<cim:ShuntCompensatorPhase.ShuntCompensator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ShuntCompensatorPhase;
            if (null == bucket)
                context.parsed.ShuntCompensatorPhase = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Single phase of a multi-phase switch when its attributes might be different per phase.
         */
        function parse_SwitchPhase (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "SwitchPhase";
            /**
             * Used in cases when no Measurement for the status value is present.
             * If the SwitchPhase has a status measurement the Discrete.normalValue is expected to match with this value.
             */
            obj["normalOpen"] = base.to_boolean (base.parse_element (/<cim:SwitchPhase.normalOpen>([\s\S]*?)<\/cim:SwitchPhase.normalOpen>/g, sub, context, true));
            /**
             * Phase of this SwitchPhase on the side with terminal sequence number equal 1.
             * Should be a phase contained in that terminal&rsquo;s phases attribute.
             */
            obj["phaseSide1"] = base.parse_element (/<cim:SwitchPhase.phaseSide1>([\s\S]*?)<\/cim:SwitchPhase.phaseSide1>/g, sub, context, true);
            /**
             * Phase of this SwitchPhase on the side with terminal sequence number equal 2.
             * Should be a phase contained in that terminal&rsquo;s Terminal.phases attribute.
             */
            obj["phaseSide2"] = base.parse_element (/<cim:SwitchPhase.phaseSide2>([\s\S]*?)<\/cim:SwitchPhase.phaseSide2>/g, sub, context, true);
            /**
             * The attribute tells if the switch is considered closed when used as input to topology processing.
             */
            obj["closed"] = base.to_boolean (base.parse_element (/<cim:SwitchPhase.closed>([\s\S]*?)<\/cim:SwitchPhase.closed>/g, sub, context, true));
            /**
             * The switch of the switch phase.
             */
            obj["Switch"] = base.parse_attribute (/<cim:SwitchPhase.Switch\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.SwitchPhase;
            if (null == bucket)
                context.parsed.SwitchPhase = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This class represents external network and it is used for IEC 60909 calculations.
         */
        function parse_ExternalNetworkInjection (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_RegulatingCondEq (context, sub);
            obj.cls = "ExternalNetworkInjection";
            /**
             * Power Frequency Bias.
             * This is the change in power injection divided by the change in frequency and negated.  A positive value of the power frequency bias provides additional power injection upon a drop in frequency.
             */
            obj["governorSCD"] = base.parse_element (/<cim:ExternalNetworkInjection.governorSCD>([\s\S]*?)<\/cim:ExternalNetworkInjection.governorSCD>/g, sub, context, true);
            /**
             * Indicates whether initial symmetrical short-circuit current and power have been calculated according to IEC (Ik").
             */
            obj["ikSecond"] = base.to_boolean (base.parse_element (/<cim:ExternalNetworkInjection.ikSecond>([\s\S]*?)<\/cim:ExternalNetworkInjection.ikSecond>/g, sub, context, true));
            /**
             * Maximum initial symmetrical short-circuit currents (Ik" max) in A (Ik" = Sk"/(SQRT(3) Un)).
             * Used for short circuit data exchange according to IEC 60909
             */
            obj["maxInitialSymShCCurrent"] = base.parse_element (/<cim:ExternalNetworkInjection.maxInitialSymShCCurrent>([\s\S]*?)<\/cim:ExternalNetworkInjection.maxInitialSymShCCurrent>/g, sub, context, true);
            /**
             * Maximum active power of the injection.
             */
            obj["maxP"] = base.parse_element (/<cim:ExternalNetworkInjection.maxP>([\s\S]*?)<\/cim:ExternalNetworkInjection.maxP>/g, sub, context, true);
            /**
             * Not for short circuit modelling; It is used for modelling of infeed for load flow exchange.
             * If maxQ and minQ are not used ReactiveCapabilityCurve can be used
             */
            obj["maxQ"] = base.parse_element (/<cim:ExternalNetworkInjection.maxQ>([\s\S]*?)<\/cim:ExternalNetworkInjection.maxQ>/g, sub, context, true);
            /**
             * Maximum ratio of zero sequence resistance of Network Feeder to its zero sequence reactance (R(0)/X(0) max).
             * Used for short circuit data exchange according to IEC 60909
             */
            obj["maxR0ToX0Ratio"] = base.to_float (base.parse_element (/<cim:ExternalNetworkInjection.maxR0ToX0Ratio>([\s\S]*?)<\/cim:ExternalNetworkInjection.maxR0ToX0Ratio>/g, sub, context, true));
            /**
             * Maximum ratio of positive sequence resistance of Network Feeder to its positive sequence reactance (R(1)/X(1) max).
             * Used for short circuit data exchange according to IEC 60909
             */
            obj["maxR1ToX1Ratio"] = base.to_float (base.parse_element (/<cim:ExternalNetworkInjection.maxR1ToX1Ratio>([\s\S]*?)<\/cim:ExternalNetworkInjection.maxR1ToX1Ratio>/g, sub, context, true));
            /**
             * Maximum ratio of zero sequence impedance to its positive sequence impedance (Z(0)/Z(1) max).
             * Used for short circuit data exchange according to IEC 60909
             */
            obj["maxZ0ToZ1Ratio"] = base.to_float (base.parse_element (/<cim:ExternalNetworkInjection.maxZ0ToZ1Ratio>([\s\S]*?)<\/cim:ExternalNetworkInjection.maxZ0ToZ1Ratio>/g, sub, context, true));
            /**
             * Minimum initial symmetrical short-circuit currents (Ik" min) in A (Ik" = Sk"/(SQRT(3) Un)).
             * Used for short circuit data exchange according to IEC 60909
             */
            obj["minInitialSymShCCurrent"] = base.parse_element (/<cim:ExternalNetworkInjection.minInitialSymShCCurrent>([\s\S]*?)<\/cim:ExternalNetworkInjection.minInitialSymShCCurrent>/g, sub, context, true);
            /**
             * Minimum active power of the injection.
             */
            obj["minP"] = base.parse_element (/<cim:ExternalNetworkInjection.minP>([\s\S]*?)<\/cim:ExternalNetworkInjection.minP>/g, sub, context, true);
            /**
             * Not for short circuit modelling; It is used for modelling of infeed for load flow exchange.
             * If maxQ and minQ are not used ReactiveCapabilityCurve can be used
             */
            obj["minQ"] = base.parse_element (/<cim:ExternalNetworkInjection.minQ>([\s\S]*?)<\/cim:ExternalNetworkInjection.minQ>/g, sub, context, true);
            /**
             * Indicates whether initial symmetrical short-circuit current and power have been calculated according to IEC (Ik").
             * Used for short circuit data exchange according to IEC 6090
             */
            obj["minR0ToX0Ratio"] = base.to_float (base.parse_element (/<cim:ExternalNetworkInjection.minR0ToX0Ratio>([\s\S]*?)<\/cim:ExternalNetworkInjection.minR0ToX0Ratio>/g, sub, context, true));
            /**
             * Minimum ratio of positive sequence resistance of Network Feeder to its positive sequence reactance (R(1)/X(1) min).
             * Used for short circuit data exchange according to IEC 60909
             */
            obj["minR1ToX1Ratio"] = base.to_float (base.parse_element (/<cim:ExternalNetworkInjection.minR1ToX1Ratio>([\s\S]*?)<\/cim:ExternalNetworkInjection.minR1ToX1Ratio>/g, sub, context, true));
            /**
             * Minimum ratio of zero sequence impedance to its positive sequence impedance (Z(0)/Z(1) min).
             * Used for short circuit data exchange according to IEC 60909
             */
            obj["minZ0ToZ1Ratio"] = base.to_float (base.parse_element (/<cim:ExternalNetworkInjection.minZ0ToZ1Ratio>([\s\S]*?)<\/cim:ExternalNetworkInjection.minZ0ToZ1Ratio>/g, sub, context, true));
            /**
             * Priority of unit for use as powerflow voltage phase angle reference bus selection. 0 = don t care (default) 1 = highest priority. 2 is less than 1 and so on.
             */
            obj["referencePriority"] = base.parse_element (/<cim:ExternalNetworkInjection.referencePriority>([\s\S]*?)<\/cim:ExternalNetworkInjection.referencePriority>/g, sub, context, true);
            /**
             * Voltage factor in pu, which was used to calculate short-circuit current Ik" and power Sk".
             */
            obj["voltageFactor"] = base.parse_element (/<cim:ExternalNetworkInjection.voltageFactor>([\s\S]*?)<\/cim:ExternalNetworkInjection.voltageFactor>/g, sub, context, true);
            /**
             * Active power injection.
             * Load sign convention is used, i.e. positive sign means flow out from a node.
             */
            obj["p"] = base.parse_element (/<cim:ExternalNetworkInjection.p>([\s\S]*?)<\/cim:ExternalNetworkInjection.p>/g, sub, context, true);
            /**
             * Reactive power injection.
             * Load sign convention is used, i.e. positive sign means flow out from a node.
             */
            obj["q"] = base.parse_element (/<cim:ExternalNetworkInjection.q>([\s\S]*?)<\/cim:ExternalNetworkInjection.q>/g, sub, context, true);
            bucket = context.parsed.ExternalNetworkInjection;
            if (null == bucket)
                context.parsed.ExternalNetworkInjection = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Describes behavior specific to tap changers, e.g. how the voltage at the end of a line varies with the load level and compensation of the voltage drop by tap adjustment.
         */
        function parse_TapChangerControl (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_RegulatingControl (context, sub);
            obj.cls = "TapChangerControl";
            /**
             * Maximum allowed regulated voltage on the PT secondary, regardless of line drop compensation.
             * Sometimes referred to as first-house protection.
             */
            obj["limitVoltage"] = base.parse_element (/<cim:TapChangerControl.limitVoltage>([\s\S]*?)<\/cim:TapChangerControl.limitVoltage>/g, sub, context, true);
            /**
             * If true, the line drop compensation is to be applied.
             */
            obj["lineDropCompensation"] = base.to_boolean (base.parse_element (/<cim:TapChangerControl.lineDropCompensation>([\s\S]*?)<\/cim:TapChangerControl.lineDropCompensation>/g, sub, context, true));
            /**
             * Line drop compensator resistance setting for normal (forward) power flow.
             */
            obj["lineDropR"] = base.parse_element (/<cim:TapChangerControl.lineDropR>([\s\S]*?)<\/cim:TapChangerControl.lineDropR>/g, sub, context, true);
            /**
             * Line drop compensator reactance setting for normal (forward) power flow.
             */
            obj["lineDropX"] = base.parse_element (/<cim:TapChangerControl.lineDropX>([\s\S]*?)<\/cim:TapChangerControl.lineDropX>/g, sub, context, true);
            /**
             * Line drop compensator resistance setting for reverse power flow.
             */
            obj["reverseLineDropR"] = base.parse_element (/<cim:TapChangerControl.reverseLineDropR>([\s\S]*?)<\/cim:TapChangerControl.reverseLineDropR>/g, sub, context, true);
            /**
             * Line drop compensator reactance setting for reverse power flow.
             */
            obj["reverseLineDropX"] = base.parse_element (/<cim:TapChangerControl.reverseLineDropX>([\s\S]*?)<\/cim:TapChangerControl.reverseLineDropX>/g, sub, context, true);
            bucket = context.parsed.TapChangerControl;
            if (null == bucket)
                context.parsed.TapChangerControl = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Enumeration of single phase identifiers.
         * Allows designation of single phases for both transmission and distribution equipment, circuits and loads.
         */
        function parse_SinglePhaseKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SinglePhaseKind";
            /**
             * Phase A.
             */
            obj["A"] = base.parse_element (/<cim:SinglePhaseKind.A>([\s\S]*?)<\/cim:SinglePhaseKind.A>/g, sub, context, true);
            /**
             * Phase B.
             */
            obj["B"] = base.parse_element (/<cim:SinglePhaseKind.B>([\s\S]*?)<\/cim:SinglePhaseKind.B>/g, sub, context, true);
            /**
             * Phase C.
             */
            obj["C"] = base.parse_element (/<cim:SinglePhaseKind.C>([\s\S]*?)<\/cim:SinglePhaseKind.C>/g, sub, context, true);
            /**
             * Neutral.
             */
            obj["N"] = base.parse_element (/<cim:SinglePhaseKind.N>([\s\S]*?)<\/cim:SinglePhaseKind.N>/g, sub, context, true);
            /**
             * Secondary phase 1.
             */
            obj["s1"] = base.parse_element (/<cim:SinglePhaseKind.s1>([\s\S]*?)<\/cim:SinglePhaseKind.s1>/g, sub, context, true);
            /**
             * Secondary phase 2.
             */
            obj["s2"] = base.parse_element (/<cim:SinglePhaseKind.s2>([\s\S]*?)<\/cim:SinglePhaseKind.s2>/g, sub, context, true);
            bucket = context.parsed.SinglePhaseKind;
            if (null == bucket)
                context.parsed.SinglePhaseKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A model of a set of individual Switches normally enclosed within the same cabinet and possibly with interlocks that restrict the combination of switch positions.
         * These are typically found in medium voltage distribution networks.
         */
        function parse_CompositeSwitch (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Equipment (context, sub);
            obj.cls = "CompositeSwitch";
            /**
             * An alphanumeric code that can be used as a reference to extra information such as the description of the interlocking scheme if any.
             */
            obj["compositeSwitchType"] = base.parse_element (/<cim:CompositeSwitch.compositeSwitchType>([\s\S]*?)<\/cim:CompositeSwitch.compositeSwitchType>/g, sub, context, true);
            bucket = context.parsed.CompositeSwitch;
            if (null == bucket)
                context.parsed.CompositeSwitch = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A per phase linear shunt compensator has banks or sections with equal admittance values.
         */
        function parse_LinearShuntCompensatorPhase (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ShuntCompensatorPhase (context, sub);
            obj.cls = "LinearShuntCompensatorPhase";
            /**
             * Conductance per section for this phase if shunt compensator is wye connected.
             * Conductance per section phase to phase if shunt compensator is delta connected.
             */
            obj["gPerSection"] = base.parse_element (/<cim:LinearShuntCompensatorPhase.gPerSection>([\s\S]*?)<\/cim:LinearShuntCompensatorPhase.gPerSection>/g, sub, context, true);
            /**
             * Susceptance per section of the phase if shunt compensator is wye connected.
             * Susceptance per section phase to phase if shunt compensator is delta connected.
             */
            obj["bPerSection"] = base.parse_element (/<cim:LinearShuntCompensatorPhase.bPerSection>([\s\S]*?)<\/cim:LinearShuntCompensatorPhase.bPerSection>/g, sub, context, true);
            bucket = context.parsed.LinearShuntCompensatorPhase;
            if (null == bucket)
                context.parsed.LinearShuntCompensatorPhase = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A type of conducting equipment that can regulate a quantity (i.e. voltage or flow) at a specific point in the network.
         */
        function parse_RegulatingCondEq (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_ConductingEquipment (context, sub);
            obj.cls = "RegulatingCondEq";
            /**
             * Specifies the regulation status of the equipment.
             * True is regulating, false is not regulating.
             */
            obj["controlEnabled"] = base.to_boolean (base.parse_element (/<cim:RegulatingCondEq.controlEnabled>([\s\S]*?)<\/cim:RegulatingCondEq.controlEnabled>/g, sub, context, true));
            /**
             * The regulating control scheme in which this equipment participates.
             */
            obj["RegulatingControl"] = base.parse_attribute (/<cim:RegulatingCondEq.RegulatingControl\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.RegulatingCondEq;
            if (null == bucket)
                context.parsed.RegulatingCondEq = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A point where the system is grounded used for connecting conducting equipment to ground.
         * The power system model can have any number of grounds.
         */
        function parse_Ground (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_ConductingEquipment (context, sub);
            obj.cls = "Ground";
            /**
             * Action taken with this ground.
             */
            obj["GroundAction"] = base.parse_attribute (/<cim:Ground.GroundAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.Ground;
            if (null == bucket)
                context.parsed.Ground = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A linear shunt compensator has banks or sections with equal admittance values.
         */
        function parse_LinearShuntCompensator (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ShuntCompensator (context, sub);
            obj.cls = "LinearShuntCompensator";
            /**
             * Zero sequence shunt (charging) susceptance per section
             */
            obj["b0PerSection"] = base.parse_element (/<cim:LinearShuntCompensator.b0PerSection>([\s\S]*?)<\/cim:LinearShuntCompensator.b0PerSection>/g, sub, context, true);
            /**
             * Positive sequence shunt (charging) susceptance per section
             */
            obj["bPerSection"] = base.parse_element (/<cim:LinearShuntCompensator.bPerSection>([\s\S]*?)<\/cim:LinearShuntCompensator.bPerSection>/g, sub, context, true);
            /**
             * Zero sequence shunt (charging) conductance per section
             */
            obj["g0PerSection"] = base.parse_element (/<cim:LinearShuntCompensator.g0PerSection>([\s\S]*?)<\/cim:LinearShuntCompensator.g0PerSection>/g, sub, context, true);
            /**
             * Positive sequence shunt (charging) conductance per section
             */
            obj["gPerSection"] = base.parse_element (/<cim:LinearShuntCompensator.gPerSection>([\s\S]*?)<\/cim:LinearShuntCompensator.gPerSection>/g, sub, context, true);
            bucket = context.parsed.LinearShuntCompensator;
            if (null == bucket)
                context.parsed.LinearShuntCompensator = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A rotating machine whose shaft rotates asynchronously with the electrical field.
         * Also known as an induction machine with no external connection to the rotor windings, e.g squirrel-cage induction machine.
         */
        function parse_AsynchronousMachine (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_RotatingMachine (context, sub);
            obj.cls = "AsynchronousMachine";
            /**
             * Indicates whether the machine is a converter fed drive.
             * Used for short circuit data exchange according to IEC 60909
             */
            obj["converterFedDrive"] = base.to_boolean (base.parse_element (/<cim:AsynchronousMachine.converterFedDrive>([\s\S]*?)<\/cim:AsynchronousMachine.converterFedDrive>/g, sub, context, true));
            /**
             * Efficiency of the asynchronous machine at nominal operation in percent.
             * Indicator for converter drive motors. Used for short circuit data exchange according to IEC 60909
             */
            obj["efficiency"] = base.parse_element (/<cim:AsynchronousMachine.efficiency>([\s\S]*?)<\/cim:AsynchronousMachine.efficiency>/g, sub, context, true);
            /**
             * Ratio of locked-rotor current to the rated current of the motor (Ia/Ir).
             * Used for short circuit data exchange according to IEC 60909
             */
            obj["iaIrRatio"] = base.to_float (base.parse_element (/<cim:AsynchronousMachine.iaIrRatio>([\s\S]*?)<\/cim:AsynchronousMachine.iaIrRatio>/g, sub, context, true));
            /**
             * Nameplate data indicates if the machine is 50 or 60 Hz.
             */
            obj["nominalFrequency"] = base.parse_element (/<cim:AsynchronousMachine.nominalFrequency>([\s\S]*?)<\/cim:AsynchronousMachine.nominalFrequency>/g, sub, context, true);
            /**
             * Nameplate data.
             * Depends on the slip and number of pole pairs.
             */
            obj["nominalSpeed"] = base.parse_element (/<cim:AsynchronousMachine.nominalSpeed>([\s\S]*?)<\/cim:AsynchronousMachine.nominalSpeed>/g, sub, context, true);
            /**
             * Number of pole pairs of stator.
             * Used for short circuit data exchange according to IEC 60909
             */
            obj["polePairNumber"] = base.parse_element (/<cim:AsynchronousMachine.polePairNumber>([\s\S]*?)<\/cim:AsynchronousMachine.polePairNumber>/g, sub, context, true);
            /**
             * Rated mechanical power (Pr in the IEC 60909-0).
             * Used for short circuit data exchange according to IEC 60909.
             */
            obj["ratedMechanicalPower"] = base.parse_element (/<cim:AsynchronousMachine.ratedMechanicalPower>([\s\S]*?)<\/cim:AsynchronousMachine.ratedMechanicalPower>/g, sub, context, true);
            /**
             * Indicates for converter drive motors if the power can be reversible.
             * Used for short circuit data exchange according to IEC 60909
             */
            obj["reversible"] = base.to_boolean (base.parse_element (/<cim:AsynchronousMachine.reversible>([\s\S]*?)<\/cim:AsynchronousMachine.reversible>/g, sub, context, true));
            /**
             * Damper 1 winding resistance.
             */
            obj["rr1"] = base.parse_element (/<cim:AsynchronousMachine.rr1>([\s\S]*?)<\/cim:AsynchronousMachine.rr1>/g, sub, context, true);
            /**
             * Damper 2 winding resistance.
             */
            obj["rr2"] = base.parse_element (/<cim:AsynchronousMachine.rr2>([\s\S]*?)<\/cim:AsynchronousMachine.rr2>/g, sub, context, true);
            /**
             * Locked rotor ratio (R/X).
             * Used for short circuit data exchange according to IEC 60909
             */
            obj["rxLockedRotorRatio"] = base.to_float (base.parse_element (/<cim:AsynchronousMachine.rxLockedRotorRatio>([\s\S]*?)<\/cim:AsynchronousMachine.rxLockedRotorRatio>/g, sub, context, true));
            /**
             * Transient rotor time constant (greater than tppo).
             */
            obj["tpo"] = base.parse_element (/<cim:AsynchronousMachine.tpo>([\s\S]*?)<\/cim:AsynchronousMachine.tpo>/g, sub, context, true);
            /**
             * Sub-transient rotor time constant (greater than 0).
             */
            obj["tppo"] = base.parse_element (/<cim:AsynchronousMachine.tppo>([\s\S]*?)<\/cim:AsynchronousMachine.tppo>/g, sub, context, true);
            /**
             * Damper 1 winding leakage reactance.
             */
            obj["xlr1"] = base.parse_element (/<cim:AsynchronousMachine.xlr1>([\s\S]*?)<\/cim:AsynchronousMachine.xlr1>/g, sub, context, true);
            /**
             * Damper 2 winding leakage reactance.
             */
            obj["xlr2"] = base.parse_element (/<cim:AsynchronousMachine.xlr2>([\s\S]*?)<\/cim:AsynchronousMachine.xlr2>/g, sub, context, true);
            /**
             * Magnetizing reactance.
             */
            obj["xm"] = base.parse_element (/<cim:AsynchronousMachine.xm>([\s\S]*?)<\/cim:AsynchronousMachine.xm>/g, sub, context, true);
            /**
             * Transient reactance (unsaturated) (greater than or equal to xpp).
             */
            obj["xp"] = base.parse_element (/<cim:AsynchronousMachine.xp>([\s\S]*?)<\/cim:AsynchronousMachine.xp>/g, sub, context, true);
            /**
             * Sub-transient reactance (unsaturated) (greather than Xl).
             */
            obj["xpp"] = base.parse_element (/<cim:AsynchronousMachine.xpp>([\s\S]*?)<\/cim:AsynchronousMachine.xpp>/g, sub, context, true);
            /**
             * Synchronous reactance (greather than xp).
             */
            obj["xs"] = base.parse_element (/<cim:AsynchronousMachine.xs>([\s\S]*?)<\/cim:AsynchronousMachine.xs>/g, sub, context, true);
            /**
             * Indicates the type of Asynchronous Machine (motor or generator).
             */
            obj["asynchronousMachineType"] = base.parse_element (/<cim:AsynchronousMachine.asynchronousMachineType>([\s\S]*?)<\/cim:AsynchronousMachine.asynchronousMachineType>/g, sub, context, true);
            /**
             * Asynchronous machine dynamics model used to describe dynamic behavior of this asynchronous machine.
             */
            obj["AsynchronousMachineDynamics"] = base.parse_attribute (/<cim:AsynchronousMachine.AsynchronousMachineDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.AsynchronousMachine;
            if (null == bucket)
                context.parsed.AsynchronousMachine = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Combination of conducting material with consistent electrical characteristics, building a single electrical system, used to carry current between points in the power system.
         */
        function parse_Conductor (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_ConductingEquipment (context, sub);
            obj.cls = "Conductor";
            /**
             * Segment length for calculating line section capabilities
             */
            obj["length"] = base.parse_element (/<cim:Conductor.length>([\s\S]*?)<\/cim:Conductor.length>/g, sub, context, true);
            bucket = context.parsed.Conductor;
            if (null == bucket)
                context.parsed.Conductor = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Winding connection type.
         */
        function parse_WindingConnection (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "WindingConnection";
            /**
             * Delta
             */
            obj["D"] = base.parse_element (/<cim:WindingConnection.D>([\s\S]*?)<\/cim:WindingConnection.D>/g, sub, context, true);
            /**
             * Wye
             */
            obj["Y"] = base.parse_element (/<cim:WindingConnection.Y>([\s\S]*?)<\/cim:WindingConnection.Y>/g, sub, context, true);
            /**
             * ZigZag
             */
            obj["Z"] = base.parse_element (/<cim:WindingConnection.Z>([\s\S]*?)<\/cim:WindingConnection.Z>/g, sub, context, true);
            /**
             * Wye, with neutral brought out for grounding.
             */
            obj["Yn"] = base.parse_element (/<cim:WindingConnection.Yn>([\s\S]*?)<\/cim:WindingConnection.Yn>/g, sub, context, true);
            /**
             * ZigZag, with neutral brought out for grounding.
             */
            obj["Zn"] = base.parse_element (/<cim:WindingConnection.Zn>([\s\S]*?)<\/cim:WindingConnection.Zn>/g, sub, context, true);
            /**
             * Autotransformer common winding
             */
            obj["A"] = base.parse_element (/<cim:WindingConnection.A>([\s\S]*?)<\/cim:WindingConnection.A>/g, sub, context, true);
            /**
             * Independent winding, for single-phase connections
             */
            obj["I"] = base.parse_element (/<cim:WindingConnection.I>([\s\S]*?)<\/cim:WindingConnection.I>/g, sub, context, true);
            bucket = context.parsed.WindingConnection;
            if (null == bucket)
                context.parsed.WindingConnection = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A Plant is a collection of equipment for purposes of generation.
         */
        function parse_Plant (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_EquipmentContainer (context, sub);
            obj.cls = "Plant";
            bucket = context.parsed.Plant;
            if (null == bucket)
                context.parsed.Plant = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Method of cooling a machine.
         */
        function parse_CoolantType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CoolantType";
            /**
             * Air.
             */
            obj["air"] = base.parse_element (/<cim:CoolantType.air>([\s\S]*?)<\/cim:CoolantType.air>/g, sub, context, true);
            /**
             * Hydrogen gas.
             */
            obj["hydrogenGas"] = base.parse_element (/<cim:CoolantType.hydrogenGas>([\s\S]*?)<\/cim:CoolantType.hydrogenGas>/g, sub, context, true);
            /**
             * Water.
             */
            obj["water"] = base.parse_element (/<cim:CoolantType.water>([\s\S]*?)<\/cim:CoolantType.water>/g, sub, context, true);
            bucket = context.parsed.CoolantType;
            if (null == bucket)
                context.parsed.CoolantType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A shunt capacitor or reactor or switchable bank of shunt capacitors or reactors.
         * A section of a shunt compensator is an individual capacitor or reactor.  A negative value for reactivePerSection indicates that the compensator is a reactor. ShuntCompensator is a single terminal device.  Ground is implied.
         */
        function parse_ShuntCompensator (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_RegulatingCondEq (context, sub);
            obj.cls = "ShuntCompensator";
            /**
             * Time delay required for the device to be connected or disconnected by automatic voltage regulation (AVR).
             */
            obj["aVRDelay"] = base.parse_element (/<cim:ShuntCompensator.aVRDelay>([\s\S]*?)<\/cim:ShuntCompensator.aVRDelay>/g, sub, context, true);
            /**
             * Used for Yn and Zn connections.
             * True if the neutral is solidly grounded.
             */
            obj["grounded"] = base.to_boolean (base.parse_element (/<cim:ShuntCompensator.grounded>([\s\S]*?)<\/cim:ShuntCompensator.grounded>/g, sub, context, true));
            /**
             * The maximum number of sections that may be switched in.
             */
            obj["maximumSections"] = base.parse_element (/<cim:ShuntCompensator.maximumSections>([\s\S]*?)<\/cim:ShuntCompensator.maximumSections>/g, sub, context, true);
            /**
             * The voltage at which the nominal reactive power may be calculated.
             * This should normally be within 10% of the voltage at which the capacitor is connected to the network.
             */
            obj["nomU"] = base.parse_element (/<cim:ShuntCompensator.nomU>([\s\S]*?)<\/cim:ShuntCompensator.nomU>/g, sub, context, true);
            /**
             * The normal number of sections switched in.
             */
            obj["normalSections"] = base.parse_element (/<cim:ShuntCompensator.normalSections>([\s\S]*?)<\/cim:ShuntCompensator.normalSections>/g, sub, context, true);
            /**
             * The type of phase connection, such as wye or delta.
             */
            obj["phaseConnection"] = base.parse_element (/<cim:ShuntCompensator.phaseConnection>([\s\S]*?)<\/cim:ShuntCompensator.phaseConnection>/g, sub, context, true);
            /**
             * The switch on count since the capacitor count was last reset or initialized.
             */
            obj["switchOnCount"] = base.parse_element (/<cim:ShuntCompensator.switchOnCount>([\s\S]*?)<\/cim:ShuntCompensator.switchOnCount>/g, sub, context, true);
            /**
             * The date and time when the capacitor bank was last switched on.
             */
            obj["switchOnDate"] = base.to_datetime (base.parse_element (/<cim:ShuntCompensator.switchOnDate>([\s\S]*?)<\/cim:ShuntCompensator.switchOnDate>/g, sub, context, true));
            /**
             * Voltage sensitivity required for the device to regulate the bus voltage, in voltage/reactive power.
             */
            obj["voltageSensitivity"] = base.parse_element (/<cim:ShuntCompensator.voltageSensitivity>([\s\S]*?)<\/cim:ShuntCompensator.voltageSensitivity>/g, sub, context, true);
            /**
             * Shunt compensator sections in use.
             * Starting value for steady state solution. Non integer values are allowed to support continuous variables. The reasons for continuous value are to support study cases where no discrete shunt compensators has yet been designed, a solutions where a narrow voltage band force the sections to oscillate or accommodate for a continuous solution as input.
             */
            obj["sections"] = base.to_float (base.parse_element (/<cim:ShuntCompensator.sections>([\s\S]*?)<\/cim:ShuntCompensator.sections>/g, sub, context, true));
            /**
             * The state for the number of shunt compensator sections in service.
             */
            obj["SvShuntCompensatorSections"] = base.parse_attribute (/<cim:ShuntCompensator.SvShuntCompensatorSections\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ShuntCompensator;
            if (null == bucket)
                context.parsed.ShuntCompensator = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Synchronous machine operating mode.
         */
        function parse_SynchronousMachineOperatingMode (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SynchronousMachineOperatingMode";
            obj["generator"] = base.parse_element (/<cim:SynchronousMachineOperatingMode.generator>([\s\S]*?)<\/cim:SynchronousMachineOperatingMode.generator>/g, sub, context, true);
            obj["condenser"] = base.parse_element (/<cim:SynchronousMachineOperatingMode.condenser>([\s\S]*?)<\/cim:SynchronousMachineOperatingMode.condenser>/g, sub, context, true);
            obj["motor"] = base.parse_element (/<cim:SynchronousMachineOperatingMode.motor>([\s\S]*?)<\/cim:SynchronousMachineOperatingMode.motor>/g, sub, context, true);
            bucket = context.parsed.SynchronousMachineOperatingMode;
            if (null == bucket)
                context.parsed.SynchronousMachineOperatingMode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The kind of regulation model.
         * For example regulating voltage, reactive power, active power, etc.
         */
        function parse_RegulatingControlModeKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "RegulatingControlModeKind";
            /**
             * Voltage is specified.
             */
            obj["voltage"] = base.parse_element (/<cim:RegulatingControlModeKind.voltage>([\s\S]*?)<\/cim:RegulatingControlModeKind.voltage>/g, sub, context, true);
            /**
             * Active power is specified.
             */
            obj["activePower"] = base.parse_element (/<cim:RegulatingControlModeKind.activePower>([\s\S]*?)<\/cim:RegulatingControlModeKind.activePower>/g, sub, context, true);
            /**
             * Reactive power is specified.
             */
            obj["reactivePower"] = base.parse_element (/<cim:RegulatingControlModeKind.reactivePower>([\s\S]*?)<\/cim:RegulatingControlModeKind.reactivePower>/g, sub, context, true);
            /**
             * Current flow is specified.
             */
            obj["currentFlow"] = base.parse_element (/<cim:RegulatingControlModeKind.currentFlow>([\s\S]*?)<\/cim:RegulatingControlModeKind.currentFlow>/g, sub, context, true);
            /**
             * Admittance is specified.
             */
            obj["admittance"] = base.parse_element (/<cim:RegulatingControlModeKind.admittance>([\s\S]*?)<\/cim:RegulatingControlModeKind.admittance>/g, sub, context, true);
            /**
             * Control switches on/off by time of day.
             * The times may change on the weekend, or in different seasons.
             */
            obj["timeScheduled"] = base.parse_element (/<cim:RegulatingControlModeKind.timeScheduled>([\s\S]*?)<\/cim:RegulatingControlModeKind.timeScheduled>/g, sub, context, true);
            /**
             * Control switches on/off based on the local temperature (i.e., a thermostat).
             */
            obj["temperature"] = base.parse_element (/<cim:RegulatingControlModeKind.temperature>([\s\S]*?)<\/cim:RegulatingControlModeKind.temperature>/g, sub, context, true);
            /**
             * Power factor is specified.
             */
            obj["powerFactor"] = base.parse_element (/<cim:RegulatingControlModeKind.powerFactor>([\s\S]*?)<\/cim:RegulatingControlModeKind.powerFactor>/g, sub, context, true);
            bucket = context.parsed.RegulatingControlModeKind;
            if (null == bucket)
                context.parsed.RegulatingControlModeKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Pole-mounted fault interrupter with built-in phase and ground relays, current transformer (CT), and supplemental controls.
         */
        function parse_Recloser (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ProtectedSwitch (context, sub);
            obj.cls = "Recloser";
            bucket = context.parsed.Recloser;
            if (null == bucket)
                context.parsed.Recloser = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A tunable impedance device normally used to offset line charging during single line faults in an ungrounded section of network.
         */
        function parse_PetersenCoil (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_EarthFaultCompensator (context, sub);
            obj.cls = "PetersenCoil";
            /**
             * The mode of operation of the Petersen coil.
             */
            obj["mode"] = base.parse_element (/<cim:PetersenCoil.mode>([\s\S]*?)<\/cim:PetersenCoil.mode>/g, sub, context, true);
            /**
             * The nominal voltage for which the coil is designed.
             */
            obj["nominalU"] = base.parse_element (/<cim:PetersenCoil.nominalU>([\s\S]*?)<\/cim:PetersenCoil.nominalU>/g, sub, context, true);
            /**
             * The offset current that the Petersen coil controller is operating from the resonant point.
             * This is normally a fixed amount for which the controller is configured and could be positive or negative.  Typically 0 to 60 Amperes depending on voltage and resonance conditions.
             */
            obj["offsetCurrent"] = base.parse_element (/<cim:PetersenCoil.offsetCurrent>([\s\S]*?)<\/cim:PetersenCoil.offsetCurrent>/g, sub, context, true);
            /**
             * The control current used to control the Petersen coil also known as the position current.
             * Typically in the range of 20-200mA.
             */
            obj["positionCurrent"] = base.parse_element (/<cim:PetersenCoil.positionCurrent>([\s\S]*?)<\/cim:PetersenCoil.positionCurrent>/g, sub, context, true);
            /**
             * The maximum reactance.
             */
            obj["xGroundMax"] = base.parse_element (/<cim:PetersenCoil.xGroundMax>([\s\S]*?)<\/cim:PetersenCoil.xGroundMax>/g, sub, context, true);
            /**
             * The minimum reactance.
             */
            obj["xGroundMin"] = base.parse_element (/<cim:PetersenCoil.xGroundMin>([\s\S]*?)<\/cim:PetersenCoil.xGroundMin>/g, sub, context, true);
            /**
             * The nominal reactance.
             * This is the operating point (normally over compensation) that is defined based on the resonance point in the healthy network condition.  The impedance is calculated based on nominal voltage divided by position current.
             */
            obj["xGroundNominal"] = base.parse_element (/<cim:PetersenCoil.xGroundNominal>([\s\S]*?)<\/cim:PetersenCoil.xGroundNominal>/g, sub, context, true);
            bucket = context.parsed.PetersenCoil;
            if (null == bucket)
                context.parsed.PetersenCoil = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Describes the tap model for an asymmetrical phase shifting transformer in which the difference voltage vector adds to the primary side voltage.
         * The angle between the primary side voltage and the difference voltage is named the winding connection angle. The phase shift depends on both the difference voltage magnitude and the winding connection angle.
         */
        function parse_PhaseTapChangerAsymmetrical (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PhaseTapChangerNonLinear (context, sub);
            obj.cls = "PhaseTapChangerAsymmetrical";
            /**
             * The phase angle between the in-phase winding and the out-of -phase winding used for creating phase shift.
             * The out-of-phase winding produces what is known as the difference voltage.  Setting this angle to 90 degrees is not the same as a symmemtrical transformer.
             */
            obj["windingConnectionAngle"] = base.parse_element (/<cim:PhaseTapChangerAsymmetrical.windingConnectionAngle>([\s\S]*?)<\/cim:PhaseTapChangerAsymmetrical.windingConnectionAngle>/g, sub, context, true);
            bucket = context.parsed.PhaseTapChangerAsymmetrical;
            if (null == bucket)
                context.parsed.PhaseTapChangerAsymmetrical = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_TapChangerControl: parse_TapChangerControl,
                parse_ShuntCompensator: parse_ShuntCompensator,
                parse_TransformerControlMode: parse_TransformerControlMode,
                parse_GroundDisconnector: parse_GroundDisconnector,
                parse_ShuntCompensatorPhase: parse_ShuntCompensatorPhase,
                parse_AsynchronousMachine: parse_AsynchronousMachine,
                parse_LoadBreakSwitch: parse_LoadBreakSwitch,
                parse_AsynchronousMachineKind: parse_AsynchronousMachineKind,
                parse_LinearShuntCompensator: parse_LinearShuntCompensator,
                parse_PhaseImpedanceData: parse_PhaseImpedanceData,
                parse_SVCControlMode: parse_SVCControlMode,
                parse_SynchronousMachineKind: parse_SynchronousMachineKind,
                parse_NonlinearShuntCompensator: parse_NonlinearShuntCompensator,
                parse_ACLineSegment: parse_ACLineSegment,
                parse_ProtectedSwitch: parse_ProtectedSwitch,
                parse_PowerTransformer: parse_PowerTransformer,
                parse_SwitchSchedule: parse_SwitchSchedule,
                parse_Fuse: parse_Fuse,
                parse_GroundingImpedance: parse_GroundingImpedance,
                parse_SynchronousMachine: parse_SynchronousMachine,
                parse_TapChanger: parse_TapChanger,
                parse_SinglePhaseKind: parse_SinglePhaseKind,
                parse_PhaseTapChangerTable: parse_PhaseTapChangerTable,
                parse_ReactiveCapabilityCurve: parse_ReactiveCapabilityCurve,
                parse_PhaseShuntConnectionKind: parse_PhaseShuntConnectionKind,
                parse_RegulationSchedule: parse_RegulationSchedule,
                parse_RotatingMachine: parse_RotatingMachine,
                parse_EnergyConsumer: parse_EnergyConsumer,
                parse_RatioTapChangerTablePoint: parse_RatioTapChangerTablePoint,
                parse_Breaker: parse_Breaker,
                parse_Sectionaliser: parse_Sectionaliser,
                parse_RegulatingCondEq: parse_RegulatingCondEq,
                parse_Connector: parse_Connector,
                parse_Ground: parse_Ground,
                parse_RegulatingControl: parse_RegulatingControl,
                parse_ShortCircuitRotorKind: parse_ShortCircuitRotorKind,
                parse_EnergyConsumerPhase: parse_EnergyConsumerPhase,
                parse_PhaseTapChanger: parse_PhaseTapChanger,
                parse_TapSchedule: parse_TapSchedule,
                parse_PhaseTapChangerLinear: parse_PhaseTapChangerLinear,
                parse_CompositeSwitch: parse_CompositeSwitch,
                parse_LinearShuntCompensatorPhase: parse_LinearShuntCompensatorPhase,
                parse_MutualCoupling: parse_MutualCoupling,
                parse_Recloser: parse_Recloser,
                parse_PerLengthPhaseImpedance: parse_PerLengthPhaseImpedance,
                parse_Switch: parse_Switch,
                parse_PerLengthSequenceImpedance: parse_PerLengthSequenceImpedance,
                parse_VoltageControlZone: parse_VoltageControlZone,
                parse_PhaseTapChangerAsymmetrical: parse_PhaseTapChangerAsymmetrical,
                parse_TransformerCoreAdmittance: parse_TransformerCoreAdmittance,
                parse_RegulatingControlModeKind: parse_RegulatingControlModeKind,
                parse_PhaseTapChangerTablePoint: parse_PhaseTapChangerTablePoint,
                parse_PerLengthImpedance: parse_PerLengthImpedance,
                parse_Junction: parse_Junction,
                parse_Conductor: parse_Conductor,
                parse_PetersenCoilModeKind: parse_PetersenCoilModeKind,
                parse_ACLineSegmentPhase: parse_ACLineSegmentPhase,
                parse_WindingConnection: parse_WindingConnection,
                parse_EnergySource: parse_EnergySource,
                parse_Line: parse_Line,
                parse_RatioTapChanger: parse_RatioTapChanger,
                parse_Jumper: parse_Jumper,
                parse_Cut: parse_Cut,
                parse_PhaseTapChangerTabular: parse_PhaseTapChangerTabular,
                parse_Disconnector: parse_Disconnector,
                parse_Clamp: parse_Clamp,
                parse_PhaseTapChangerNonLinear: parse_PhaseTapChangerNonLinear,
                parse_EarthFaultCompensator: parse_EarthFaultCompensator,
                parse_TransformerStarImpedance: parse_TransformerStarImpedance,
                parse_TransformerTank: parse_TransformerTank,
                parse_TapChangerTablePoint: parse_TapChangerTablePoint,
                parse_Plant: parse_Plant,
                parse_PetersenCoil: parse_PetersenCoil,
                parse_NonlinearShuntCompensatorPhase: parse_NonlinearShuntCompensatorPhase,
                parse_FrequencyConverter: parse_FrequencyConverter,
                parse_BusbarSection: parse_BusbarSection,
                parse_StaticVarCompensator: parse_StaticVarCompensator,
                parse_TransformerTankEnd: parse_TransformerTankEnd,
                parse_PhaseTapChangerSymmetrical: parse_PhaseTapChangerSymmetrical,
                parse_ExternalNetworkInjection: parse_ExternalNetworkInjection,
                parse_SeriesCompensator: parse_SeriesCompensator,
                parse_SynchronousMachineOperatingMode: parse_SynchronousMachineOperatingMode,
                parse_CoolantType: parse_CoolantType,
                parse_SwitchPhase: parse_SwitchPhase,
                parse_NonlinearShuntCompensatorPoint: parse_NonlinearShuntCompensatorPoint,
                parse_RatioTapChangerTable: parse_RatioTapChangerTable,
                parse_PowerTransformerEnd: parse_PowerTransformerEnd,
                parse_NonlinearShuntCompensatorPhasePoint: parse_NonlinearShuntCompensatorPhasePoint,
                parse_TransformerMeshImpedance: parse_TransformerMeshImpedance,
                parse_TransformerEnd: parse_TransformerEnd,
                parse_PerLengthLineParameter: parse_PerLengthLineParameter
            }
        );
    }
);