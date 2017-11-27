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
        class TransmissionCapacity extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TransmissionCapacity;
                if (null == bucket)
                   cim_data.TransmissionCapacity = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TransmissionCapacity[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
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

                var bucket = context.parsed.TransmissionCapacity;
                if (null == bucket)
                   context.parsed.TransmissionCapacity = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Optimal Power Flow or State Estimator Filter Bank Data for OTS.
         *
         * This is used for RealTime, Study and Maintenance Users
         *
         */
        class ShuntCompensatorDynamicData extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ShuntCompensatorDynamicData;
                if (null == bucket)
                   cim_data.ShuntCompensatorDynamicData = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ShuntCompensatorDynamicData[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ShuntCompensatorDynamicData";
                base.parse_element (/<cim:ShuntCompensatorDynamicData.mVARInjection>([\s\S]*?)<\/cim:ShuntCompensatorDynamicData.mVARInjection>/g, obj, "mVARInjection", base.to_float, sub, context);
                base.parse_element (/<cim:ShuntCompensatorDynamicData.connectionStatus>([\s\S]*?)<\/cim:ShuntCompensatorDynamicData.connectionStatus>/g, obj, "connectionStatus", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorDynamicData.desiredVoltage>([\s\S]*?)<\/cim:ShuntCompensatorDynamicData.desiredVoltage>/g, obj, "desiredVoltage", base.to_float, sub, context);
                base.parse_element (/<cim:ShuntCompensatorDynamicData.voltageRegulationStatus>([\s\S]*?)<\/cim:ShuntCompensatorDynamicData.voltageRegulationStatus>/g, obj, "voltageRegulationStatus", base.to_boolean, sub, context);
                base.parse_element (/<cim:ShuntCompensatorDynamicData.stepPosition>([\s\S]*?)<\/cim:ShuntCompensatorDynamicData.stepPosition>/g, obj, "stepPosition", base.to_string, sub, context);
                base.parse_attribute (/<cim:ShuntCompensatorDynamicData.MktShuntCompensator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktShuntCompensator", sub, context);

                var bucket = context.parsed.ShuntCompensatorDynamicData;
                if (null == bucket)
                   context.parsed.ShuntCompensatorDynamicData = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ShuntCompensatorDynamicData", "mVARInjection", base.from_float, fields);
                base.export_element (obj, "ShuntCompensatorDynamicData", "connectionStatus", base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorDynamicData", "desiredVoltage", base.from_float, fields);
                base.export_element (obj, "ShuntCompensatorDynamicData", "voltageRegulationStatus", base.from_boolean, fields);
                base.export_element (obj, "ShuntCompensatorDynamicData", "stepPosition", base.from_string, fields);
                base.export_attribute (obj, "ShuntCompensatorDynamicData", "MktShuntCompensator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A Transmission Right(TR) can be a chain of TR's or on individual.
         *
         * When a transmission right is not a chain, this is formally the ETC/TOR Entitlement for each ETC/TOR contract with the inclusion of CVR(Converted Rights) as an ETC. This is the sum of all entitlements on all related transmission interfaces for the same TR.
         *
         */
        class TREntitlement extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TREntitlement;
                if (null == bucket)
                   cim_data.TREntitlement = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TREntitlement[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TREntitlement";
                base.parse_element (/<cim:TREntitlement.entitlement>([\s\S]*?)<\/cim:TREntitlement.entitlement>/g, obj, "entitlement", base.to_float, sub, context);
                base.parse_element (/<cim:TREntitlement.startOperatingDate>([\s\S]*?)<\/cim:TREntitlement.startOperatingDate>/g, obj, "startOperatingDate", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:TREntitlement.TransmissionContractRight\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionContractRight", sub, context);

                var bucket = context.parsed.TREntitlement;
                if (null == bucket)
                   context.parsed.TREntitlement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TREntitlement", "entitlement", base.from_float, fields);
                base.export_element (obj, "TREntitlement", "startOperatingDate", base.from_datetime, fields);
                base.export_attribute (obj, "TREntitlement", "TransmissionContractRight", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Possibly time-varying max MW or MVA and optionally Min MW limit or MVA limit (Y1 and Y2, respectively) assigned to a constraint for a specific contingency.
         *
         * Use CurveSchedule XAxisUnits to specify MW or MVA.
         *
         */
        class ContingencyConstraintLimit extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ContingencyConstraintLimit;
                if (null == bucket)
                   cim_data.ContingencyConstraintLimit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ContingencyConstraintLimit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "ContingencyConstraintLimit";
                base.parse_attribute (/<cim:ContingencyConstraintLimit.SecurityConstraintSum\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SecurityConstraintSum", sub, context);
                base.parse_attribute (/<cim:ContingencyConstraintLimit.MktContingency\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktContingency", sub, context);
                base.parse_attribute (/<cim:ContingencyConstraintLimit.MWLimitSchedules\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MWLimitSchedules", sub, context);

                var bucket = context.parsed.ContingencyConstraintLimit;
                if (null == bucket)
                   context.parsed.ContingencyConstraintLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ContingencyConstraintLimit", "SecurityConstraintSum", fields);
                base.export_attribute (obj, "ContingencyConstraintLimit", "MktContingency", fields);
                base.export_attribute (obj, "ContingencyConstraintLimit", "MWLimitSchedules", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Subclass of IEC61970:Meas:AnalogValue
         *
         */
        class MktAnalogValue extends Meas.AnalogValue
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktAnalogValue;
                if (null == bucket)
                   cim_data.MktAnalogValue = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktAnalogValue[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Meas.AnalogValue.prototype.parse.call (this, context, sub);
                obj.cls = "MktAnalogValue";

                var bucket = context.parsed.MktAnalogValue;
                if (null == bucket)
                   context.parsed.MktAnalogValue = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Meas.AnalogValue.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Optimal Power Flow or State Estimator Unit Data for Operator Training Simulator.
         *
         * This is used for RealTime, Study and Maintenance Users
         *
         */
        class GeneratingUnitDynamicValues extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GeneratingUnitDynamicValues;
                if (null == bucket)
                   cim_data.GeneratingUnitDynamicValues = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GeneratingUnitDynamicValues[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "GeneratingUnitDynamicValues";
                base.parse_element (/<cim:GeneratingUnitDynamicValues.lossFactor>([\s\S]*?)<\/cim:GeneratingUnitDynamicValues.lossFactor>/g, obj, "lossFactor", base.to_float, sub, context);
                base.parse_element (/<cim:GeneratingUnitDynamicValues.maximumMW>([\s\S]*?)<\/cim:GeneratingUnitDynamicValues.maximumMW>/g, obj, "maximumMW", base.to_float, sub, context);
                base.parse_element (/<cim:GeneratingUnitDynamicValues.minimumMW>([\s\S]*?)<\/cim:GeneratingUnitDynamicValues.minimumMW>/g, obj, "minimumMW", base.to_float, sub, context);
                base.parse_element (/<cim:GeneratingUnitDynamicValues.mVAR>([\s\S]*?)<\/cim:GeneratingUnitDynamicValues.mVAR>/g, obj, "mVAR", base.to_float, sub, context);
                base.parse_element (/<cim:GeneratingUnitDynamicValues.mw>([\s\S]*?)<\/cim:GeneratingUnitDynamicValues.mw>/g, obj, "mw", base.to_float, sub, context);
                base.parse_element (/<cim:GeneratingUnitDynamicValues.sensitivity>([\s\S]*?)<\/cim:GeneratingUnitDynamicValues.sensitivity>/g, obj, "sensitivity", base.to_float, sub, context);
                base.parse_attribute (/<cim:GeneratingUnitDynamicValues.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
                base.parse_attribute (/<cim:GeneratingUnitDynamicValues.MktGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktGeneratingUnit", sub, context);

                var bucket = context.parsed.GeneratingUnitDynamicValues;
                if (null == bucket)
                   context.parsed.GeneratingUnitDynamicValues = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * An electrical connection, link, or line consisting of one or more parallel transmission elements between two areas of the interconnected electric systems, or portions thereof.
         *
         * TransmissionCorridor and TransmissionRightOfWay refer to legal aspects. The TransmissionPath refers to the segments between a TransmissionProvider's ServicePoints.
         *
         */
        class TransmissionPath extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TransmissionPath;
                if (null == bucket)
                   cim_data.TransmissionPath = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TransmissionPath[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TransmissionPath";
                base.parse_element (/<cim:TransmissionPath.availTransferCapability>([\s\S]*?)<\/cim:TransmissionPath.availTransferCapability>/g, obj, "availTransferCapability", base.to_string, sub, context);
                base.parse_element (/<cim:TransmissionPath.parallelPathFlag>([\s\S]*?)<\/cim:TransmissionPath.parallelPathFlag>/g, obj, "parallelPathFlag", base.to_boolean, sub, context);
                base.parse_element (/<cim:TransmissionPath.totalTransferCapability>([\s\S]*?)<\/cim:TransmissionPath.totalTransferCapability>/g, obj, "totalTransferCapability", base.to_string, sub, context);
                base.parse_attribute (/<cim:TransmissionPath.DeliveryPoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DeliveryPoint", sub, context);
                base.parse_attribute (/<cim:TransmissionPath.For\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "For", sub, context);
                base.parse_attribute (/<cim:TransmissionPath.PointOfReceipt\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PointOfReceipt", sub, context);

                var bucket = context.parsed.TransmissionPath;
                if (null == bucket)
                   context.parsed.TransmissionPath = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "TransmissionPath", "availTransferCapability", base.from_string, fields);
                base.export_element (obj, "TransmissionPath", "parallelPathFlag", base.from_boolean, fields);
                base.export_element (obj, "TransmissionPath", "totalTransferCapability", base.from_string, fields);
                base.export_attribute (obj, "TransmissionPath", "DeliveryPoint", fields);
                base.export_attribute (obj, "TransmissionPath", "For", fields);
                base.export_attribute (obj, "TransmissionPath", "PointOfReceipt", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A constraint term is one element of a linear constraint.
         *
         */
        class ConstraintTerm extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ConstraintTerm;
                if (null == bucket)
                   cim_data.ConstraintTerm = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ConstraintTerm[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ConstraintTerm";
                base.parse_element (/<cim:ConstraintTerm.factor>([\s\S]*?)<\/cim:ConstraintTerm.factor>/g, obj, "factor", base.to_string, sub, context);
                base.parse_element (/<cim:ConstraintTerm.function>([\s\S]*?)<\/cim:ConstraintTerm.function>/g, obj, "function", base.to_string, sub, context);
                base.parse_attribute (/<cim:ConstraintTerm.SecurityConstraintSum\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SecurityConstraintSum", sub, context);

                var bucket = context.parsed.ConstraintTerm;
                if (null == bucket)
                   context.parsed.ConstraintTerm = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ConstraintTerm", "factor", base.from_string, fields);
                base.export_element (obj, "ConstraintTerm", "function", base.from_string, fields);
                base.export_attribute (obj, "ConstraintTerm", "SecurityConstraintSum", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Subclass of IEC61970:Meas:DiscreteValue
         *
         */
        class MktDiscreteValue extends Meas.DiscreteValue
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktDiscreteValue;
                if (null == bucket)
                   cim_data.MktDiscreteValue = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktDiscreteValue[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Meas.DiscreteValue.prototype.parse.call (this, context, sub);
                obj.cls = "MktDiscreteValue";

                var bucket = context.parsed.MktDiscreteValue;
                if (null == bucket)
                   context.parsed.MktDiscreteValue = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Meas.DiscreteValue.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Models Ancillary Service Requirements.
         *
         * Describes interval for which the requirement is applicable.
         *
         */
        class ASRequirements extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ASRequirements;
                if (null == bucket)
                   cim_data.ASRequirements = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ASRequirements[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ASRequirements";
                base.parse_element (/<cim:ASRequirements.intervalStartTime>([\s\S]*?)<\/cim:ASRequirements.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);

                var bucket = context.parsed.ASRequirements;
                if (null == bucket)
                   context.parsed.ASRequirements = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ASRequirements", "intervalStartTime", base.from_datetime, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A transmission reservation is obtained from the OASIS system to reserve transmission for a specified time period, transmission path and transmission product.
         *
         */
        class TransmissionReservation extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TransmissionReservation;
                if (null == bucket)
                   cim_data.TransmissionReservation = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TransmissionReservation[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TransmissionReservation";
                base.parse_attribute (/<cim:TransmissionReservation.EnergyTransaction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyTransaction", sub, context);
                base.parse_attribute (/<cim:TransmissionReservation.TransmissionPath\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionPath", sub, context);
                base.parse_attribute (/<cim:TransmissionReservation.Sink\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Sink", sub, context);
                base.parse_attribute (/<cim:TransmissionReservation.TransactionBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransactionBid", sub, context);
                base.parse_attribute (/<cim:TransmissionReservation.Source\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Source", sub, context);

                var bucket = context.parsed.TransmissionReservation;
                if (null == bucket)
                   context.parsed.TransmissionReservation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_attribute (obj, "TransmissionReservation", "EnergyTransaction", fields);
                base.export_attribute (obj, "TransmissionReservation", "TransmissionPath", fields);
                base.export_attribute (obj, "TransmissionReservation", "Sink", fields);
                base.export_attribute (obj, "TransmissionReservation", "TransactionBid", fields);
                base.export_attribute (obj, "TransmissionReservation", "Source", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * TNA Interface Definitions from OPF for VSA
         *
         */
        class TransferInterfaceSolution extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TransferInterfaceSolution;
                if (null == bucket)
                   cim_data.TransferInterfaceSolution = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TransferInterfaceSolution[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TransferInterfaceSolution";
                base.parse_element (/<cim:TransferInterfaceSolution.interfaceMargin>([\s\S]*?)<\/cim:TransferInterfaceSolution.interfaceMargin>/g, obj, "interfaceMargin", base.to_float, sub, context);
                base.parse_element (/<cim:TransferInterfaceSolution.transferLimit>([\s\S]*?)<\/cim:TransferInterfaceSolution.transferLimit>/g, obj, "transferLimit", base.to_float, sub, context);
                base.parse_element (/<cim:TransferInterfaceSolution.postTransferMW>([\s\S]*?)<\/cim:TransferInterfaceSolution.postTransferMW>/g, obj, "postTransferMW", base.to_float, sub, context);
                base.parse_attribute (/<cim:TransferInterfaceSolution.TransferInterface\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransferInterface", sub, context);
                base.parse_attribute (/<cim:TransferInterfaceSolution.MktContingencyB\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktContingencyB", sub, context);
                base.parse_attribute (/<cim:TransferInterfaceSolution. MktContingencyA\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, " MktContingencyA", sub, context);

                var bucket = context.parsed.TransferInterfaceSolution;
                if (null == bucket)
                   context.parsed.TransferInterfaceSolution = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TransferInterfaceSolution", "interfaceMargin", base.from_float, fields);
                base.export_element (obj, "TransferInterfaceSolution", "transferLimit", base.from_float, fields);
                base.export_element (obj, "TransferInterfaceSolution", "postTransferMW", base.from_float, fields);
                base.export_attribute (obj, "TransferInterfaceSolution", "TransferInterface", fields);
                base.export_attribute (obj, "TransferInterfaceSolution", "MktContingencyB", fields);
                base.export_attribute (obj, "TransferInterfaceSolution", " MktContingencyA", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Default bid curve for default energy bid curve and default startup curves (cost and time)
         *
         */
        class DefaultBidCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DefaultBidCurve;
                if (null == bucket)
                   cim_data.DefaultBidCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DefaultBidCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "DefaultBidCurve";
                base.parse_element (/<cim:DefaultBidCurve.curveType>([\s\S]*?)<\/cim:DefaultBidCurve.curveType>/g, obj, "curveType", base.to_string, sub, context);
                base.parse_element (/<cim:DefaultBidCurve.debAdderFlag>([\s\S]*?)<\/cim:DefaultBidCurve.debAdderFlag>/g, obj, "debAdderFlag", base.to_string, sub, context);
                base.parse_attribute (/<cim:DefaultBidCurve.DefaultBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DefaultBid", sub, context);

                var bucket = context.parsed.DefaultBidCurve;
                if (null == bucket)
                   context.parsed.DefaultBidCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "DefaultBidCurve", "curveType", base.from_string, fields);
                base.export_element (obj, "DefaultBidCurve", "debAdderFlag", base.from_string, fields);
                base.export_attribute (obj, "DefaultBidCurve", "DefaultBid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Dynamic flows and ratings associated with a branch end.
         *
         */
        class BranchEndFlow extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BranchEndFlow;
                if (null == bucket)
                   cim_data.BranchEndFlow = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BranchEndFlow[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "BranchEndFlow";
                base.parse_element (/<cim:BranchEndFlow.mwFlow>([\s\S]*?)<\/cim:BranchEndFlow.mwFlow>/g, obj, "mwFlow", base.to_float, sub, context);
                base.parse_element (/<cim:BranchEndFlow.mVARFlow>([\s\S]*?)<\/cim:BranchEndFlow.mVARFlow>/g, obj, "mVARFlow", base.to_float, sub, context);
                base.parse_element (/<cim:BranchEndFlow.normalRating>([\s\S]*?)<\/cim:BranchEndFlow.normalRating>/g, obj, "normalRating", base.to_float, sub, context);
                base.parse_element (/<cim:BranchEndFlow.longTermRating>([\s\S]*?)<\/cim:BranchEndFlow.longTermRating>/g, obj, "longTermRating", base.to_float, sub, context);
                base.parse_element (/<cim:BranchEndFlow.shortTermRating>([\s\S]*?)<\/cim:BranchEndFlow.shortTermRating>/g, obj, "shortTermRating", base.to_float, sub, context);
                base.parse_element (/<cim:BranchEndFlow.loadDumpRating>([\s\S]*?)<\/cim:BranchEndFlow.loadDumpRating>/g, obj, "loadDumpRating", base.to_float, sub, context);

                var bucket = context.parsed.BranchEndFlow;
                if (null == bucket)
                   context.parsed.BranchEndFlow = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "BranchEndFlow", "mwFlow", base.from_float, fields);
                base.export_element (obj, "BranchEndFlow", "mVARFlow", base.from_float, fields);
                base.export_element (obj, "BranchEndFlow", "normalRating", base.from_float, fields);
                base.export_element (obj, "BranchEndFlow", "longTermRating", base.from_float, fields);
                base.export_element (obj, "BranchEndFlow", "shortTermRating", base.from_float, fields);
                base.export_element (obj, "BranchEndFlow", "loadDumpRating", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A profile is a simpler curve type.
         *
         */
        class Profile extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Profile;
                if (null == bucket)
                   cim_data.Profile = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Profile[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Profile";

                var bucket = context.parsed.Profile;
                if (null == bucket)
                   context.parsed.Profile = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Resource status at the end of a given clearing period.
         *
         */
        class UnitInitialConditions extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.UnitInitialConditions;
                if (null == bucket)
                   cim_data.UnitInitialConditions = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.UnitInitialConditions[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
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

                var bucket = context.parsed.UnitInitialConditions;
                if (null == bucket)
                   context.parsed.UnitInitialConditions = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Subclass of IEC61970:Wires:ShuntCompensator
         *
         */
        class MktShuntCompensator extends Wires.ShuntCompensator
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktShuntCompensator;
                if (null == bucket)
                   cim_data.MktShuntCompensator = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktShuntCompensator[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Wires.ShuntCompensator.prototype.parse.call (this, context, sub);
                obj.cls = "MktShuntCompensator";

                var bucket = context.parsed.MktShuntCompensator;
                if (null == bucket)
                   context.parsed.MktShuntCompensator = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Wires.ShuntCompensator.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Subclass of IEC61970:Meas:AnalogLimit
         *
         */
        class MktAnalogLimit extends Meas.AnalogLimit
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktAnalogLimit;
                if (null == bucket)
                   cim_data.MktAnalogLimit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktAnalogLimit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Meas.AnalogLimit.prototype.parse.call (this, context, sub);
                obj.cls = "MktAnalogLimit";
                base.parse_element (/<cim:MktAnalogLimit.exceededLimit>([\s\S]*?)<\/cim:MktAnalogLimit.exceededLimit>/g, obj, "exceededLimit", base.to_boolean, sub, context);
                base.parse_element (/<cim:MktAnalogLimit.limitType>([\s\S]*?)<\/cim:MktAnalogLimit.limitType>/g, obj, "limitType", base.to_string, sub, context);

                var bucket = context.parsed.MktAnalogLimit;
                if (null == bucket)
                   context.parsed.MktAnalogLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Meas.AnalogLimit.prototype.export.call (this, obj, false);

                base.export_element (obj, "MktAnalogLimit", "exceededLimit", base.from_boolean, fields);
                base.export_element (obj, "MktAnalogLimit", "limitType", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Subclass of IEC61970:Wires:SeriesCompensator
         *
         */
        class MktSeriesCompensator extends Wires.SeriesCompensator
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktSeriesCompensator;
                if (null == bucket)
                   cim_data.MktSeriesCompensator = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktSeriesCompensator[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Wires.SeriesCompensator.prototype.parse.call (this, context, sub);
                obj.cls = "MktSeriesCompensator";
                base.parse_attribute (/<cim:MktSeriesCompensator.EndAFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndAFlow", sub, context);
                base.parse_attribute (/<cim:MktSeriesCompensator.EndBFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndBFlow", sub, context);

                var bucket = context.parsed.MktSeriesCompensator;
                if (null == bucket)
                   context.parsed.MktSeriesCompensator = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Wires.SeriesCompensator.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MktSeriesCompensator", "EndAFlow", fields);
                base.export_attribute (obj, "MktSeriesCompensator", "EndBFlow", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Indicates whether unit is eligible for treatment as a intermittent variable renewable resource
         *
         */
        class IntermittentResourceEligibility extends MarketPlan.MarketFactors
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.IntermittentResourceEligibility;
                if (null == bucket)
                   cim_data.IntermittentResourceEligibility = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.IntermittentResourceEligibility[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "IntermittentResourceEligibility";
                base.parse_element (/<cim:IntermittentResourceEligibility.eligibilityStatus>([\s\S]*?)<\/cim:IntermittentResourceEligibility.eligibilityStatus>/g, obj, "eligibilityStatus", base.to_string, sub, context);
                base.parse_attribute (/<cim:IntermittentResourceEligibility.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);

                var bucket = context.parsed.IntermittentResourceEligibility;
                if (null == bucket)
                   context.parsed.IntermittentResourceEligibility = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_element (obj, "IntermittentResourceEligibility", "eligibilityStatus", base.from_string, fields);
                base.export_attribute (obj, "IntermittentResourceEligibility", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Optimal Power Flow or State Estimator Phase Shifter Data.
         *
         * This is used for RealTime, Study and Maintenance Users. SE Solution Phase Shifter Measurements from the last run of SE
         *
         */
        class TapChangerDynamicData extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TapChangerDynamicData;
                if (null == bucket)
                   cim_data.TapChangerDynamicData = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TapChangerDynamicData[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
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

                var bucket = context.parsed.TapChangerDynamicData;
                if (null == bucket)
                   context.parsed.TapChangerDynamicData = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * This class models the load distribution factors.
         *
         * This class should be used in one of two ways:
         *
         */
        class LoadDistributionFactor extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LoadDistributionFactor;
                if (null == bucket)
                   cim_data.LoadDistributionFactor = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LoadDistributionFactor[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "LoadDistributionFactor";
                base.parse_element (/<cim:LoadDistributionFactor.pDistFactor>([\s\S]*?)<\/cim:LoadDistributionFactor.pDistFactor>/g, obj, "pDistFactor", base.to_float, sub, context);
                base.parse_element (/<cim:LoadDistributionFactor.qDistFactor>([\s\S]*?)<\/cim:LoadDistributionFactor.qDistFactor>/g, obj, "qDistFactor", base.to_float, sub, context);
                base.parse_attribute (/<cim:LoadDistributionFactor.IndividualPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "IndividualPnode", sub, context);
                base.parse_attribute (/<cim:LoadDistributionFactor.AggregatedPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AggregatedPnode", sub, context);

                var bucket = context.parsed.LoadDistributionFactor;
                if (null == bucket)
                   context.parsed.LoadDistributionFactor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "LoadDistributionFactor", "pDistFactor", base.from_float, fields);
                base.export_element (obj, "LoadDistributionFactor", "qDistFactor", base.from_float, fields);
                base.export_attribute (obj, "LoadDistributionFactor", "IndividualPnode", fields);
                base.export_attribute (obj, "LoadDistributionFactor", "AggregatedPnode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The defined termination points of a transmission path (down to distribution level or to a customer - generation or consumption or both).
         *
         * Service points are defined from the viewpoint of the transmission service. Each service point is contained within (or on the boundary of) an interchange area. A service point is source or destination of a transaction.
         *
         */
        class ServicePoint extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ServicePoint;
                if (null == bucket)
                   cim_data.ServicePoint = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ServicePoint[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ServicePoint";

                var bucket = context.parsed.ServicePoint;
                if (null == bucket)
                   context.parsed.ServicePoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Existing Transmission Contract data for an interchange schedule
         *
         */
        class InterchangeETCData extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.InterchangeETCData;
                if (null == bucket)
                   cim_data.InterchangeETCData = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.InterchangeETCData[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "InterchangeETCData";
                base.parse_element (/<cim:InterchangeETCData.contractNumber>([\s\S]*?)<\/cim:InterchangeETCData.contractNumber>/g, obj, "contractNumber", base.to_string, sub, context);
                base.parse_element (/<cim:InterchangeETCData.usageMW>([\s\S]*?)<\/cim:InterchangeETCData.usageMW>/g, obj, "usageMW", base.to_float, sub, context);
                base.parse_attribute (/<cim:InterchangeETCData.InterchangeSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InterchangeSchedule", sub, context);

                var bucket = context.parsed.InterchangeETCData;
                if (null == bucket)
                   context.parsed.InterchangeETCData = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "InterchangeETCData", "contractNumber", base.from_string, fields);
                base.export_element (obj, "InterchangeETCData", "usageMW", base.from_float, fields);
                base.export_attribute (obj, "InterchangeETCData", "InterchangeSchedule", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * This class models the system distribution factors.
         *
         * This class needs to be used along with the HostControlArea and the ConnectivityNode to show the distribution of each individual party.
         *
         */
        class SysLoadDistributionFactor extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SysLoadDistributionFactor;
                if (null == bucket)
                   cim_data.SysLoadDistributionFactor = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SysLoadDistributionFactor[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SysLoadDistributionFactor";
                base.parse_element (/<cim:SysLoadDistributionFactor.factor>([\s\S]*?)<\/cim:SysLoadDistributionFactor.factor>/g, obj, "factor", base.to_float, sub, context);
                base.parse_attribute (/<cim:SysLoadDistributionFactor.HostControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HostControlArea", sub, context);
                base.parse_attribute (/<cim:SysLoadDistributionFactor.MktConnectivityNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktConnectivityNode", sub, context);

                var bucket = context.parsed.SysLoadDistributionFactor;
                if (null == bucket)
                   context.parsed.SysLoadDistributionFactor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "SysLoadDistributionFactor", "factor", base.from_float, fields);
                base.export_attribute (obj, "SysLoadDistributionFactor", "HostControlArea", fields);
                base.export_attribute (obj, "SysLoadDistributionFactor", "MktConnectivityNode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Specifies the schedule for energy transfers between interchange areas that are necessary to satisfy the associated interchange transaction.
         *
         */
        class EnergyTransaction extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EnergyTransaction;
                if (null == bucket)
                   cim_data.EnergyTransaction = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EnergyTransaction[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
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

                var bucket = context.parsed.EnergyTransaction;
                if (null == bucket)
                   context.parsed.EnergyTransaction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Optimal Power Flow or State Estimator Load Data for OTS.
         *
         * This is used for RealTime, Study and Maintenance Users
         *
         */
        class EnergyConsumerData extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EnergyConsumerData;
                if (null == bucket)
                   cim_data.EnergyConsumerData = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EnergyConsumerData[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "EnergyConsumerData";
                base.parse_element (/<cim:EnergyConsumerData.loadMVAR>([\s\S]*?)<\/cim:EnergyConsumerData.loadMVAR>/g, obj, "loadMVAR", base.to_float, sub, context);
                base.parse_element (/<cim:EnergyConsumerData.loadMW>([\s\S]*?)<\/cim:EnergyConsumerData.loadMW>/g, obj, "loadMW", base.to_float, sub, context);
                base.parse_attribute (/<cim:EnergyConsumerData.MktEnergyConsumer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktEnergyConsumer", sub, context);

                var bucket = context.parsed.EnergyConsumerData;
                if (null == bucket)
                   context.parsed.EnergyConsumerData = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "EnergyConsumerData", "loadMVAR", base.from_float, fields);
                base.export_element (obj, "EnergyConsumerData", "loadMW", base.from_float, fields);
                base.export_attribute (obj, "EnergyConsumerData", "MktEnergyConsumer", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Typical for regional transmission operators (RTOs), these constraints include transmission as well as generation group constraints identified in both base case and critical contingency cases.
         *
         */
        class SecurityConstraints extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SecurityConstraints;
                if (null == bucket)
                   cim_data.SecurityConstraints = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SecurityConstraints[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "SecurityConstraints";
                base.parse_element (/<cim:SecurityConstraints.minMW>([\s\S]*?)<\/cim:SecurityConstraints.minMW>/g, obj, "minMW", base.to_string, sub, context);
                base.parse_element (/<cim:SecurityConstraints.maxMW>([\s\S]*?)<\/cim:SecurityConstraints.maxMW>/g, obj, "maxMW", base.to_string, sub, context);
                base.parse_element (/<cim:SecurityConstraints.actualMW>([\s\S]*?)<\/cim:SecurityConstraints.actualMW>/g, obj, "actualMW", base.to_string, sub, context);
                base.parse_attribute (/<cim:SecurityConstraints.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);
                base.parse_attribute (/<cim:SecurityConstraints.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
                base.parse_attribute (/<cim:SecurityConstraints.GeneratingBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingBid", sub, context);

                var bucket = context.parsed.SecurityConstraints;
                if (null == bucket)
                   context.parsed.SecurityConstraints = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "SecurityConstraints", "minMW", base.from_string, fields);
                base.export_element (obj, "SecurityConstraints", "maxMW", base.from_string, fields);
                base.export_element (obj, "SecurityConstraints", "actualMW", base.from_string, fields);
                base.export_attribute (obj, "SecurityConstraints", "RTO", fields);
                base.export_attribute (obj, "SecurityConstraints", "Flowgate", fields);
                base.export_attribute (obj, "SecurityConstraints", "GeneratingBid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Typically provided by RTO systems, constraints identified in both base case and critical contingency cases have to be transferred.
         *
         * A constraint has N (&gt;=1) constraint terms. A term is represented by an
         *
         */
        class SecurityConstraintSum extends MarketPlan.MarketFactors
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SecurityConstraintSum;
                if (null == bucket)
                   cim_data.SecurityConstraintSum = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SecurityConstraintSum[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "SecurityConstraintSum";
                base.parse_attribute (/<cim:SecurityConstraintSum.DefaultConstraintLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DefaultConstraintLimit", sub, context);
                base.parse_attribute (/<cim:SecurityConstraintSum.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);
                base.parse_attribute (/<cim:SecurityConstraintSum.BaseCaseConstraintLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BaseCaseConstraintLimit", sub, context);

                var bucket = context.parsed.SecurityConstraintSum;
                if (null == bucket)
                   context.parsed.SecurityConstraintSum = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "SecurityConstraintSum", "DefaultConstraintLimit", fields);
                base.export_attribute (obj, "SecurityConstraintSum", "RTO", fields);
                base.export_attribute (obj, "SecurityConstraintSum", "BaseCaseConstraintLimit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Maximum MW and optionally Minimum MW (Y1 and Y2, respectively)
         *
         */
        class MWLimitSchedule extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MWLimitSchedule;
                if (null == bucket)
                   cim_data.MWLimitSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MWLimitSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MWLimitSchedule";
                base.parse_attribute (/<cim:MWLimitSchedule.SecurityConstraintLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SecurityConstraintLimit", sub, context);

                var bucket = context.parsed.MWLimitSchedule;
                if (null == bucket)
                   context.parsed.MWLimitSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_attribute (obj, "MWLimitSchedule", "SecurityConstraintLimit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Area load curve definition.
         *
         */
        class AreaLoadCurve extends Core.RegularIntervalSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AreaLoadCurve;
                if (null == bucket)
                   cim_data.AreaLoadCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AreaLoadCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.RegularIntervalSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "AreaLoadCurve";
                base.parse_element (/<cim:AreaLoadCurve.forecastType>([\s\S]*?)<\/cim:AreaLoadCurve.forecastType>/g, obj, "forecastType", base.to_string, sub, context);
                base.parse_attribute (/<cim:AreaLoadCurve.AggregateNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AggregateNode", sub, context);
                base.parse_attribute (/<cim:AreaLoadCurve.TACArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TACArea", sub, context);
                base.parse_attribute (/<cim:AreaLoadCurve.MktLoadArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktLoadArea", sub, context);

                var bucket = context.parsed.AreaLoadCurve;
                if (null == bucket)
                   context.parsed.AreaLoadCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.RegularIntervalSchedule.prototype.export.call (this, obj, false);

                base.export_element (obj, "AreaLoadCurve", "forecastType", base.from_string, fields);
                base.export_attribute (obj, "AreaLoadCurve", "AggregateNode", fields);
                base.export_attribute (obj, "AreaLoadCurve", "TACArea", fields);
                base.export_attribute (obj, "AreaLoadCurve", "MktLoadArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Reserve demand curve.
         *
         * Models maximum quantities of reserve required per Market Region and models a reserve demand curve for the minimum quantities of reserve. The ReserveDemandCurve is a relationship between unit operating reserve price in \$/MWhr (Y-axis) and unit reserves in MW (X-axis).
         *
         */
        class ReserveDemandCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ReserveDemandCurve;
                if (null == bucket)
                   cim_data.ReserveDemandCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ReserveDemandCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "ReserveDemandCurve";
                base.parse_element (/<cim:ReserveDemandCurve.reqMaxMW>([\s\S]*?)<\/cim:ReserveDemandCurve.reqMaxMW>/g, obj, "reqMaxMW", base.to_float, sub, context);
                base.parse_element (/<cim:ReserveDemandCurve.reserveRequirementType>([\s\S]*?)<\/cim:ReserveDemandCurve.reserveRequirementType>/g, obj, "reserveRequirementType", base.to_string, sub, context);
                base.parse_attribute (/<cim:ReserveDemandCurve.ASRequirements\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ASRequirements", sub, context);
                base.parse_attribute (/<cim:ReserveDemandCurve.MarketRegion\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketRegion", sub, context);

                var bucket = context.parsed.ReserveDemandCurve;
                if (null == bucket)
                   context.parsed.ReserveDemandCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "ReserveDemandCurve", "reqMaxMW", base.from_float, fields);
                base.export_element (obj, "ReserveDemandCurve", "reserveRequirementType", base.from_string, fields);
                base.export_attribute (obj, "ReserveDemandCurve", "ASRequirements", fields);
                base.export_attribute (obj, "ReserveDemandCurve", "MarketRegion", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Contains information about the update from SCADA
         *
         */
        class SCADAInformation extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SCADAInformation;
                if (null == bucket)
                   cim_data.SCADAInformation = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SCADAInformation[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SCADAInformation";
                base.parse_element (/<cim:SCADAInformation.timeStamp>([\s\S]*?)<\/cim:SCADAInformation.timeStamp>/g, obj, "timeStamp", base.to_datetime, sub, context);

                var bucket = context.parsed.SCADAInformation;
                if (null == bucket)
                   context.parsed.SCADAInformation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "SCADAInformation", "timeStamp", base.from_datetime, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Optimal Power Flow or State Estimator Circuit Breaker Status.
         *
         */
        class SwitchStatus extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SwitchStatus;
                if (null == bucket)
                   cim_data.SwitchStatus = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SwitchStatus[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SwitchStatus";
                base.parse_element (/<cim:SwitchStatus.switchStatus>([\s\S]*?)<\/cim:SwitchStatus.switchStatus>/g, obj, "switchStatus", base.to_string, sub, context);
                base.parse_attribute (/<cim:SwitchStatus.MktSwitch\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktSwitch", sub, context);

                var bucket = context.parsed.SwitchStatus;
                if (null == bucket)
                   context.parsed.SwitchStatus = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "SwitchStatus", "switchStatus", base.from_string, fields);
                base.export_attribute (obj, "SwitchStatus", "MktSwitch", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Data for profile.
         *
         */
        class ProfileData extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ProfileData;
                if (null == bucket)
                   cim_data.ProfileData = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ProfileData[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ProfileData";
                base.parse_element (/<cim:ProfileData.bidPrice>([\s\S]*?)<\/cim:ProfileData.bidPrice>/g, obj, "bidPrice", base.to_float, sub, context);
                base.parse_element (/<cim:ProfileData.capacityLevel>([\s\S]*?)<\/cim:ProfileData.capacityLevel>/g, obj, "capacityLevel", base.to_string, sub, context);
                base.parse_element (/<cim:ProfileData.energyLevel>([\s\S]*?)<\/cim:ProfileData.energyLevel>/g, obj, "energyLevel", base.to_string, sub, context);
                base.parse_element (/<cim:ProfileData.minimumLevel>([\s\S]*?)<\/cim:ProfileData.minimumLevel>/g, obj, "minimumLevel", base.to_float, sub, context);
                base.parse_element (/<cim:ProfileData.sequenceNumber>([\s\S]*?)<\/cim:ProfileData.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
                base.parse_element (/<cim:ProfileData.startDateTime>([\s\S]*?)<\/cim:ProfileData.startDateTime>/g, obj, "startDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:ProfileData.stopDateTime>([\s\S]*?)<\/cim:ProfileData.stopDateTime>/g, obj, "stopDateTime", base.to_datetime, sub, context);

                var bucket = context.parsed.ProfileData;
                if (null == bucket)
                   context.parsed.ProfileData = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Curve data for default bid curve and startup cost curve.
         *
         */
        class DefaultBidCurveData extends Core.CurveData
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DefaultBidCurveData;
                if (null == bucket)
                   cim_data.DefaultBidCurveData = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DefaultBidCurveData[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.CurveData.prototype.parse.call (this, context, sub);
                obj.cls = "DefaultBidCurveData";
                base.parse_element (/<cim:DefaultBidCurveData.bidSegmentCalcType>([\s\S]*?)<\/cim:DefaultBidCurveData.bidSegmentCalcType>/g, obj, "bidSegmentCalcType", base.to_string, sub, context);

                var bucket = context.parsed.DefaultBidCurveData;
                if (null == bucket)
                   context.parsed.DefaultBidCurveData = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.CurveData.prototype.export.call (this, obj, false);

                base.export_element (obj, "DefaultBidCurveData", "bidSegmentCalcType", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Subclass of IEC61970:Wires:Switch
         *
         */
        class MktSwitch extends Wires.Switch
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktSwitch;
                if (null == bucket)
                   cim_data.MktSwitch = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktSwitch[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Wires.Switch.prototype.parse.call (this, context, sub);
                obj.cls = "MktSwitch";

                var bucket = context.parsed.MktSwitch;
                if (null == bucket)
                   context.parsed.MktSwitch = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Wires.Switch.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Possibly time-varying max MW or MVA and optionally Min MW limit or MVA limit (Y1 and Y2, respectively) assigned to a contingency analysis base case.
         *
         * Use CurveSchedule XAxisUnits to specify MW or MVA. To be used only if the BaseCaseConstraintLimit differs from the DefaultConstraintLimit.
         *
         */
        class BaseCaseConstraintLimit extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BaseCaseConstraintLimit;
                if (null == bucket)
                   cim_data.BaseCaseConstraintLimit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BaseCaseConstraintLimit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "BaseCaseConstraintLimit";
                base.parse_attribute (/<cim:BaseCaseConstraintLimit.SecurityConstraintSum\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SecurityConstraintSum", sub, context);

                var bucket = context.parsed.BaseCaseConstraintLimit;
                if (null == bucket)
                   context.parsed.BaseCaseConstraintLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "BaseCaseConstraintLimit", "SecurityConstraintSum", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Measurement quality flags for Discrete Values.
         *
         */
        class DiscreteMeasurementValueQuality extends Meas.MeasurementValueQuality
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DiscreteMeasurementValueQuality;
                if (null == bucket)
                   cim_data.DiscreteMeasurementValueQuality = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DiscreteMeasurementValueQuality[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Meas.MeasurementValueQuality.prototype.parse.call (this, context, sub);
                obj.cls = "DiscreteMeasurementValueQuality";
                base.parse_element (/<cim:DiscreteMeasurementValueQuality.manualReplaceIndicator>([\s\S]*?)<\/cim:DiscreteMeasurementValueQuality.manualReplaceIndicator>/g, obj, "manualReplaceIndicator", base.to_boolean, sub, context);
                base.parse_element (/<cim:DiscreteMeasurementValueQuality.removeFromOperationIndicator>([\s\S]*?)<\/cim:DiscreteMeasurementValueQuality.removeFromOperationIndicator>/g, obj, "removeFromOperationIndicator", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:DiscreteMeasurementValueQuality.MktDiscreteValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktDiscreteValue", sub, context);

                var bucket = context.parsed.DiscreteMeasurementValueQuality;
                if (null == bucket)
                   context.parsed.DiscreteMeasurementValueQuality = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Meas.MeasurementValueQuality.prototype.export.call (this, obj, false);

                base.export_element (obj, "DiscreteMeasurementValueQuality", "manualReplaceIndicator", base.from_boolean, fields);
                base.export_element (obj, "DiscreteMeasurementValueQuality", "removeFromOperationIndicator", base.from_boolean, fields);
                base.export_attribute (obj, "DiscreteMeasurementValueQuality", "MktDiscreteValue", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Subclass of IEC61970:Wires:TapChanger
         *
         */
        class MktTapChanger extends Wires.TapChanger
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktTapChanger;
                if (null == bucket)
                   cim_data.MktTapChanger = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktTapChanger[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Wires.TapChanger.prototype.parse.call (this, context, sub);
                obj.cls = "MktTapChanger";

                var bucket = context.parsed.MktTapChanger;
                if (null == bucket)
                   context.parsed.MktTapChanger = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Wires.TapChanger.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
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
        class DefaultBid extends ParticipantInterfaces.Bid
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DefaultBid;
                if (null == bucket)
                   cim_data.DefaultBid = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DefaultBid[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ParticipantInterfaces.Bid.prototype.parse.call (this, context, sub);
                obj.cls = "DefaultBid";
                base.parse_element (/<cim:DefaultBid.bidType>([\s\S]*?)<\/cim:DefaultBid.bidType>/g, obj, "bidType", base.to_string, sub, context);
                base.parse_element (/<cim:DefaultBid.minLoadCost>([\s\S]*?)<\/cim:DefaultBid.minLoadCost>/g, obj, "minLoadCost", base.to_string, sub, context);
                base.parse_element (/<cim:DefaultBid.peakFlag>([\s\S]*?)<\/cim:DefaultBid.peakFlag>/g, obj, "peakFlag", base.to_string, sub, context);
                base.parse_attribute (/<cim:DefaultBid.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                base.parse_attribute (/<cim:DefaultBid.DefaultBidCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DefaultBidCurve", sub, context);

                var bucket = context.parsed.DefaultBid;
                if (null == bucket)
                   context.parsed.DefaultBid = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ParticipantInterfaces.Bid.prototype.export.call (this, obj, false);

                base.export_element (obj, "DefaultBid", "bidType", base.from_string, fields);
                base.export_element (obj, "DefaultBid", "minLoadCost", base.from_string, fields);
                base.export_element (obj, "DefaultBid", "peakFlag", base.from_string, fields);
                base.export_attribute (obj, "DefaultBid", "RegisteredResource", fields);
                base.export_attribute (obj, "DefaultBid", "DefaultBidCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * This class models the generation distribution factors.
         *
         * This class needs to be used along with the AggregatedPnode and the IndividualPnode to show the distriubtion of each individual party.
         *
         */
        class GenDistributionFactor extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GenDistributionFactor;
                if (null == bucket)
                   cim_data.GenDistributionFactor = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GenDistributionFactor[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "GenDistributionFactor";
                base.parse_element (/<cim:GenDistributionFactor.factor>([\s\S]*?)<\/cim:GenDistributionFactor.factor>/g, obj, "factor", base.to_float, sub, context);
                base.parse_attribute (/<cim:GenDistributionFactor.AggregatedPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AggregatedPnode", sub, context);
                base.parse_attribute (/<cim:GenDistributionFactor.IndividualPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "IndividualPnode", sub, context);

                var bucket = context.parsed.GenDistributionFactor;
                if (null == bucket)
                   context.parsed.GenDistributionFactor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "GenDistributionFactor", "factor", base.from_float, fields);
                base.export_attribute (obj, "GenDistributionFactor", "AggregatedPnode", fields);
                base.export_attribute (obj, "GenDistributionFactor", "IndividualPnode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Subclass of IEC61970:Meas:AnalogLimitSet
         *
         */
        class MktAnalogLimitSet extends Meas.AnalogLimitSet
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktAnalogLimitSet;
                if (null == bucket)
                   cim_data.MktAnalogLimitSet = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktAnalogLimitSet[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Meas.AnalogLimitSet.prototype.parse.call (this, context, sub);
                obj.cls = "MktAnalogLimitSet";
                base.parse_element (/<cim:MktAnalogLimitSet.ratingSet>([\s\S]*?)<\/cim:MktAnalogLimitSet.ratingSet>/g, obj, "ratingSet", base.to_string, sub, context);

                var bucket = context.parsed.MktAnalogLimitSet;
                if (null == bucket)
                   context.parsed.MktAnalogLimitSet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Meas.AnalogLimitSet.prototype.export.call (this, obj, false);

                base.export_element (obj, "MktAnalogLimitSet", "ratingSet", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Subclass of IEC61970:Wires:ACLineSegment
         *
         */
        class MktACLineSegment extends Wires.ACLineSegment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktACLineSegment;
                if (null == bucket)
                   cim_data.MktACLineSegment = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktACLineSegment[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Wires.ACLineSegment.prototype.parse.call (this, context, sub);
                obj.cls = "MktACLineSegment";
                base.parse_attribute (/<cim:MktACLineSegment.EndAFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndAFlow", sub, context);
                base.parse_attribute (/<cim:MktACLineSegment.EndBFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndBFlow", sub, context);

                var bucket = context.parsed.MktACLineSegment;
                if (null == bucket)
                   context.parsed.MktACLineSegment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Wires.ACLineSegment.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MktACLineSegment", "EndAFlow", fields);
                base.export_attribute (obj, "MktACLineSegment", "EndBFlow", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A containing class that groups all the distribution factors within a market.
         *
         * This is calculated daily for DA factors and hourly for RT factors.
         *
         */
        class DistributionFactorSet extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DistributionFactorSet;
                if (null == bucket)
                   cim_data.DistributionFactorSet = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DistributionFactorSet[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DistributionFactorSet";
                base.parse_element (/<cim:DistributionFactorSet.intervalStartTime>([\s\S]*?)<\/cim:DistributionFactorSet.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:DistributionFactorSet.intervalEndTime>([\s\S]*?)<\/cim:DistributionFactorSet.intervalEndTime>/g, obj, "intervalEndTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:DistributionFactorSet.marketType>([\s\S]*?)<\/cim:DistributionFactorSet.marketType>/g, obj, "marketType", base.to_string, sub, context);

                var bucket = context.parsed.DistributionFactorSet;
                if (null == bucket)
                   context.parsed.DistributionFactorSet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "DistributionFactorSet", "intervalStartTime", base.from_datetime, fields);
                base.export_element (obj, "DistributionFactorSet", "intervalEndTime", base.from_datetime, fields);
                base.export_element (obj, "DistributionFactorSet", "marketType", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A Transfer Interface is made up of branches such as transmission lines and transformers.
         *
         */
        class TransferInterface extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TransferInterface;
                if (null == bucket)
                   cim_data.TransferInterface = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TransferInterface[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TransferInterface";
                base.parse_attribute (/<cim:TransferInterface.TransferInterfaceSolution\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransferInterfaceSolution", sub, context);
                base.parse_attribute (/<cim:TransferInterface.HostControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HostControlArea", sub, context);

                var bucket = context.parsed.TransferInterface;
                if (null == bucket)
                   context.parsed.TransferInterface = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "TransferInterface", "TransferInterfaceSolution", fields);
                base.export_attribute (obj, "TransferInterface", "HostControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Generic constraints can represent secure areas, voltage profile, transient stability and voltage collapse limits.
         *
         * The generic constraints can be one of the following forms:
         *
         */
        class GenericConstraints extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GenericConstraints;
                if (null == bucket)
                   cim_data.GenericConstraints = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GenericConstraints[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "GenericConstraints";
                base.parse_element (/<cim:GenericConstraints.intervalEndTime>([\s\S]*?)<\/cim:GenericConstraints.intervalEndTime>/g, obj, "intervalEndTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:GenericConstraints.intervalStartTime>([\s\S]*?)<\/cim:GenericConstraints.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:GenericConstraints.maxLimit>([\s\S]*?)<\/cim:GenericConstraints.maxLimit>/g, obj, "maxLimit", base.to_float, sub, context);
                base.parse_element (/<cim:GenericConstraints.minLimit>([\s\S]*?)<\/cim:GenericConstraints.minLimit>/g, obj, "minLimit", base.to_float, sub, context);

                var bucket = context.parsed.GenericConstraints;
                if (null == bucket)
                   context.parsed.GenericConstraints = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "GenericConstraints", "intervalEndTime", base.from_datetime, fields);
                base.export_element (obj, "GenericConstraints", "intervalStartTime", base.from_datetime, fields);
                base.export_element (obj, "GenericConstraints", "maxLimit", base.from_float, fields);
                base.export_element (obj, "GenericConstraints", "minLimit", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * This is formally called the branch group ETC/TOR entitlement with the inclusion of CVR as ETC.
         *
         * Is used to represent the entitlements. This could be also used to represent the TR entitlement on a POR/POD.
         *
         */
        class TransmissionInterfaceRightEntitlement extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TransmissionInterfaceRightEntitlement;
                if (null == bucket)
                   cim_data.TransmissionInterfaceRightEntitlement = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TransmissionInterfaceRightEntitlement[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TransmissionInterfaceRightEntitlement";
                base.parse_element (/<cim:TransmissionInterfaceRightEntitlement.entitlement>([\s\S]*?)<\/cim:TransmissionInterfaceRightEntitlement.entitlement>/g, obj, "entitlement", base.to_float, sub, context);
                base.parse_element (/<cim:TransmissionInterfaceRightEntitlement.POD>([\s\S]*?)<\/cim:TransmissionInterfaceRightEntitlement.POD>/g, obj, "POD", base.to_string, sub, context);
                base.parse_element (/<cim:TransmissionInterfaceRightEntitlement.POR>([\s\S]*?)<\/cim:TransmissionInterfaceRightEntitlement.POR>/g, obj, "POR", base.to_string, sub, context);
                base.parse_element (/<cim:TransmissionInterfaceRightEntitlement.startOperatingDate>([\s\S]*?)<\/cim:TransmissionInterfaceRightEntitlement.startOperatingDate>/g, obj, "startOperatingDate", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:TransmissionInterfaceRightEntitlement.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
                base.parse_attribute (/<cim:TransmissionInterfaceRightEntitlement.ContractRight\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ContractRight", sub, context);

                var bucket = context.parsed.TransmissionInterfaceRightEntitlement;
                if (null == bucket)
                   context.parsed.TransmissionInterfaceRightEntitlement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TransmissionInterfaceRightEntitlement", "entitlement", base.from_float, fields);
                base.export_element (obj, "TransmissionInterfaceRightEntitlement", "POD", base.from_string, fields);
                base.export_element (obj, "TransmissionInterfaceRightEntitlement", "POR", base.from_string, fields);
                base.export_element (obj, "TransmissionInterfaceRightEntitlement", "startOperatingDate", base.from_datetime, fields);
                base.export_attribute (obj, "TransmissionInterfaceRightEntitlement", "Flowgate", fields);
                base.export_attribute (obj, "TransmissionInterfaceRightEntitlement", "ContractRight", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * State Estimator Solution Pool Interchange and Losses
         *
         */
        class ControlAreaSolutionData extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ControlAreaSolutionData;
                if (null == bucket)
                   cim_data.ControlAreaSolutionData = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ControlAreaSolutionData[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ControlAreaSolutionData";
                base.parse_element (/<cim:ControlAreaSolutionData.solvedLosses>([\s\S]*?)<\/cim:ControlAreaSolutionData.solvedLosses>/g, obj, "solvedLosses", base.to_float, sub, context);
                base.parse_element (/<cim:ControlAreaSolutionData.solvedInterchange>([\s\S]*?)<\/cim:ControlAreaSolutionData.solvedInterchange>/g, obj, "solvedInterchange", base.to_float, sub, context);
                base.parse_attribute (/<cim:ControlAreaSolutionData.MktControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktControlArea", sub, context);

                var bucket = context.parsed.ControlAreaSolutionData;
                if (null == bucket)
                   context.parsed.ControlAreaSolutionData = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ControlAreaSolutionData", "solvedLosses", base.from_float, fields);
                base.export_element (obj, "ControlAreaSolutionData", "solvedInterchange", base.from_float, fields);
                base.export_attribute (obj, "ControlAreaSolutionData", "MktControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Interchange schedule class to hold information for interchange schedules such as import export type, energy type, and etc.
         *
         */
        class InterchangeSchedule extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.InterchangeSchedule;
                if (null == bucket)
                   cim_data.InterchangeSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.InterchangeSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
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

                var bucket = context.parsed.InterchangeSchedule;
                if (null == bucket)
                   context.parsed.InterchangeSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * An Energy Price Index for each Resource is valid for a period (e.g. daily) that is identified by a Valid Period Start Time and a Valid Period End Time.
         *
         * An Energy Price Index is in \$/MWh.
         *
         */
        class EnergyPriceIndex extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EnergyPriceIndex;
                if (null == bucket)
                   cim_data.EnergyPriceIndex = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EnergyPriceIndex[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "EnergyPriceIndex";
                base.parse_element (/<cim:EnergyPriceIndex.lastModified>([\s\S]*?)<\/cim:EnergyPriceIndex.lastModified>/g, obj, "lastModified", base.to_datetime, sub, context);
                base.parse_element (/<cim:EnergyPriceIndex.startEffectiveDate>([\s\S]*?)<\/cim:EnergyPriceIndex.startEffectiveDate>/g, obj, "startEffectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:EnergyPriceIndex.endEffectiveDate>([\s\S]*?)<\/cim:EnergyPriceIndex.endEffectiveDate>/g, obj, "endEffectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:EnergyPriceIndex.energyPriceIndex>([\s\S]*?)<\/cim:EnergyPriceIndex.energyPriceIndex>/g, obj, "energyPriceIndex", base.to_float, sub, context);
                base.parse_element (/<cim:EnergyPriceIndex.energyPriceIndexType>([\s\S]*?)<\/cim:EnergyPriceIndex.energyPriceIndexType>/g, obj, "energyPriceIndexType", base.to_string, sub, context);
                base.parse_attribute (/<cim:EnergyPriceIndex.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);

                var bucket = context.parsed.EnergyPriceIndex;
                if (null == bucket)
                   context.parsed.EnergyPriceIndex = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "EnergyPriceIndex", "lastModified", base.from_datetime, fields);
                base.export_element (obj, "EnergyPriceIndex", "startEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "EnergyPriceIndex", "endEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "EnergyPriceIndex", "energyPriceIndex", base.from_float, fields);
                base.export_element (obj, "EnergyPriceIndex", "energyPriceIndexType", base.from_string, fields);
                base.export_attribute (obj, "EnergyPriceIndex", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Loss sensitivity applied to a ConnectivityNode for a given time interval.
         *
         */
        class LossSensitivity extends MarketPlan.MarketFactors
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LossSensitivity;
                if (null == bucket)
                   cim_data.LossSensitivity = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LossSensitivity[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "LossSensitivity";
                base.parse_element (/<cim:LossSensitivity.lossFactor>([\s\S]*?)<\/cim:LossSensitivity.lossFactor>/g, obj, "lossFactor", base.to_float, sub, context);
                base.parse_attribute (/<cim:LossSensitivity.MktConnectivityNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktConnectivityNode", sub, context);

                var bucket = context.parsed.LossSensitivity;
                if (null == bucket)
                   context.parsed.LossSensitivity = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_element (obj, "LossSensitivity", "lossFactor", base.from_float, fields);
                base.export_attribute (obj, "LossSensitivity", "MktConnectivityNode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Measurement quality flags for Analog Values.
         *
         */
        class AnalogMeasurementValueQuality extends Meas.MeasurementValueQuality
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AnalogMeasurementValueQuality;
                if (null == bucket)
                   cim_data.AnalogMeasurementValueQuality = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AnalogMeasurementValueQuality[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Meas.MeasurementValueQuality.prototype.parse.call (this, context, sub);
                obj.cls = "AnalogMeasurementValueQuality";
                base.parse_element (/<cim:AnalogMeasurementValueQuality.scadaQualityCode>([\s\S]*?)<\/cim:AnalogMeasurementValueQuality.scadaQualityCode>/g, obj, "scadaQualityCode", base.to_string, sub, context);
                base.parse_attribute (/<cim:AnalogMeasurementValueQuality.MktAnalogValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktAnalogValue", sub, context);

                var bucket = context.parsed.AnalogMeasurementValueQuality;
                if (null == bucket)
                   context.parsed.AnalogMeasurementValueQuality = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Meas.MeasurementValueQuality.prototype.export.call (this, obj, false);

                base.export_element (obj, "AnalogMeasurementValueQuality", "scadaQualityCode", base.from_string, fields);
                base.export_attribute (obj, "AnalogMeasurementValueQuality", "MktAnalogValue", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Possibly time-varying max MW or MVA and optionally Min MW limit or MVA limit (Y1 and Y2, respectively) applied as a default value if no specific constraint limits are specified for a contingency analysis.
         *
         * Use CurveSchedule XAxisUnits to specify MW or MVA.
         *
         */
        class DefaultConstraintLimit extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DefaultConstraintLimit;
                if (null == bucket)
                   cim_data.DefaultConstraintLimit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DefaultConstraintLimit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "DefaultConstraintLimit";
                base.parse_attribute (/<cim:DefaultConstraintLimit.SecurityConstraintSum\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SecurityConstraintSum", sub, context);

                var bucket = context.parsed.DefaultConstraintLimit;
                if (null == bucket)
                   context.parsed.DefaultConstraintLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "DefaultConstraintLimit", "SecurityConstraintSum", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Market subclass of IEC61970:ControlArea
         *
         */
        class MktControlArea extends ControlArea.ControlArea
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktControlArea;
                if (null == bucket)
                   cim_data.MktControlArea = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktControlArea[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ControlArea.ControlArea.prototype.parse.call (this, context, sub);
                obj.cls = "MktControlArea";

                var bucket = context.parsed.MktControlArea;
                if (null == bucket)
                   context.parsed.MktControlArea = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ControlArea.ControlArea.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * To be used only to constrain a quantity that cannot be associated with a terminal.
         *
         * For example, a registered generating unit that is not electrically connected to the network.
         *
         */
        class NodeConstraintTerm extends ConstraintTerm
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.NodeConstraintTerm;
                if (null == bucket)
                   cim_data.NodeConstraintTerm = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.NodeConstraintTerm[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ConstraintTerm.prototype.parse.call (this, context, sub);
                obj.cls = "NodeConstraintTerm";
                base.parse_attribute (/<cim:NodeConstraintTerm.MktConnectivityNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktConnectivityNode", sub, context);

                var bucket = context.parsed.NodeConstraintTerm;
                if (null == bucket)
                   context.parsed.NodeConstraintTerm = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ConstraintTerm.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "NodeConstraintTerm", "MktConnectivityNode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A constraint term associated with a specific terminal on a physical piece of equipment.
         *
         */
        class TerminalConstraintTerm extends ConstraintTerm
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TerminalConstraintTerm;
                if (null == bucket)
                   cim_data.TerminalConstraintTerm = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TerminalConstraintTerm[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ConstraintTerm.prototype.parse.call (this, context, sub);
                obj.cls = "TerminalConstraintTerm";
                base.parse_attribute (/<cim:TerminalConstraintTerm.MktTerminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktTerminal", sub, context);

                var bucket = context.parsed.TerminalConstraintTerm;
                if (null == bucket)
                   context.parsed.TerminalConstraintTerm = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ConstraintTerm.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "TerminalConstraintTerm", "MktTerminal", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Specifies the start time, stop time, level for an EnergyTransaction.
         *
         */
        class EnergyProfile extends Profile
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EnergyProfile;
                if (null == bucket)
                   cim_data.EnergyProfile = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EnergyProfile[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Profile.prototype.parse.call (this, context, sub);
                obj.cls = "EnergyProfile";
                base.parse_attribute (/<cim:EnergyProfile.EnergyTransaction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyTransaction", sub, context);
                base.parse_attribute (/<cim:EnergyProfile.TransactionBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransactionBid", sub, context);

                var bucket = context.parsed.EnergyProfile;
                if (null == bucket)
                   context.parsed.EnergyProfile = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Profile.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "EnergyProfile", "EnergyTransaction", fields);
                base.export_attribute (obj, "EnergyProfile", "TransactionBid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                DefaultConstraintLimit: DefaultConstraintLimit,
                DistributionFactorSet: DistributionFactorSet,
                UnitInitialConditions: UnitInitialConditions,
                MktControlArea: MktControlArea,
                TransmissionInterfaceRightEntitlement: TransmissionInterfaceRightEntitlement,
                BranchEndFlow: BranchEndFlow,
                DefaultBidCurve: DefaultBidCurve,
                Profile: Profile,
                MktSeriesCompensator: MktSeriesCompensator,
                BaseCaseConstraintLimit: BaseCaseConstraintLimit,
                TransferInterface: TransferInterface,
                MktDiscreteValue: MktDiscreteValue,
                DefaultBid: DefaultBid,
                MktACLineSegment: MktACLineSegment,
                SysLoadDistributionFactor: SysLoadDistributionFactor,
                DiscreteMeasurementValueQuality: DiscreteMeasurementValueQuality,
                TransmissionPath: TransmissionPath,
                ReserveDemandCurve: ReserveDemandCurve,
                LossSensitivity: LossSensitivity,
                ASRequirements: ASRequirements,
                AnalogMeasurementValueQuality: AnalogMeasurementValueQuality,
                MktAnalogLimit: MktAnalogLimit,
                TREntitlement: TREntitlement,
                LoadDistributionFactor: LoadDistributionFactor,
                EnergyPriceIndex: EnergyPriceIndex,
                TransmissionReservation: TransmissionReservation,
                IntermittentResourceEligibility: IntermittentResourceEligibility,
                InterchangeETCData: InterchangeETCData,
                MktAnalogValue: MktAnalogValue,
                MWLimitSchedule: MWLimitSchedule,
                TransmissionCapacity: TransmissionCapacity,
                MktTapChanger: MktTapChanger,
                GenDistributionFactor: GenDistributionFactor,
                ContingencyConstraintLimit: ContingencyConstraintLimit,
                GeneratingUnitDynamicValues: GeneratingUnitDynamicValues,
                GenericConstraints: GenericConstraints,
                MktShuntCompensator: MktShuntCompensator,
                SecurityConstraintSum: SecurityConstraintSum,
                TerminalConstraintTerm: TerminalConstraintTerm,
                SwitchStatus: SwitchStatus,
                TapChangerDynamicData: TapChangerDynamicData,
                SecurityConstraints: SecurityConstraints,
                ShuntCompensatorDynamicData: ShuntCompensatorDynamicData,
                EnergyProfile: EnergyProfile,
                SCADAInformation: SCADAInformation,
                ConstraintTerm: ConstraintTerm,
                NodeConstraintTerm: NodeConstraintTerm,
                ServicePoint: ServicePoint,
                MktSwitch: MktSwitch,
                AreaLoadCurve: AreaLoadCurve,
                EnergyTransaction: EnergyTransaction,
                MktAnalogLimitSet: MktAnalogLimitSet,
                ControlAreaSolutionData: ControlAreaSolutionData,
                DefaultBidCurveData: DefaultBidCurveData,
                ProfileData: ProfileData,
                EnergyConsumerData: EnergyConsumerData,
                TransferInterfaceSolution: TransferInterfaceSolution,
                InterchangeSchedule: InterchangeSchedule
            }
        );
    }
);