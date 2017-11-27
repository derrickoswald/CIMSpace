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
         * AuxiliaryEquipment describe equipment that is not performing any primary functions but support for the equipment performing the primary function.
         *
         * AuxiliaryEquipment is attached to primary eqipment via an association with Terminal.
         *
         */
        class AuxiliaryEquipment extends Core.Equipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AuxiliaryEquipment;
                if (null == bucket)
                   cim_data.AuxiliaryEquipment = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AuxiliaryEquipment[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Equipment.prototype.parse.call (this, context, sub);
                obj.cls = "AuxiliaryEquipment";
                base.parse_attribute (/<cim:AuxiliaryEquipment.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context);

                var bucket = context.parsed.AuxiliaryEquipment;
                if (null == bucket)
                   context.parsed.AuxiliaryEquipment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Equipment.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "AuxiliaryEquipment", "Terminal", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The construction kind of the potential transformer.
         *
         */
        class PotentialTransformerKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PotentialTransformerKind;
                if (null == bucket)
                   cim_data.PotentialTransformerKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PotentialTransformerKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "PotentialTransformerKind";
                base.parse_element (/<cim:PotentialTransformerKind.inductive>([\s\S]*?)<\/cim:PotentialTransformerKind.inductive>/g, obj, "inductive", base.to_string, sub, context);
                base.parse_element (/<cim:PotentialTransformerKind.capacitiveCoupling>([\s\S]*?)<\/cim:PotentialTransformerKind.capacitiveCoupling>/g, obj, "capacitiveCoupling", base.to_string, sub, context);

                var bucket = context.parsed.PotentialTransformerKind;
                if (null == bucket)
                   context.parsed.PotentialTransformerKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "PotentialTransformerKind", "inductive", base.from_string, fields);
                base.export_element (obj, "PotentialTransformerKind", "capacitiveCoupling", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * This class describe devices that transform a measured quantity into signals that can be presented at displays, used in control or be recorded.
         *
         */
        class Sensor extends AuxiliaryEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Sensor;
                if (null == bucket)
                   cim_data.Sensor = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Sensor[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = AuxiliaryEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "Sensor";

                var bucket = context.parsed.Sensor;
                if (null == bucket)
                   context.parsed.Sensor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = AuxiliaryEquipment.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Line traps are devices that impede high frequency power line carrier signals yet present a negligible impedance at the main power frequency.
         *
         */
        class WaveTrap extends AuxiliaryEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WaveTrap;
                if (null == bucket)
                   cim_data.WaveTrap = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WaveTrap[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = AuxiliaryEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "WaveTrap";

                var bucket = context.parsed.WaveTrap;
                if (null == bucket)
                   context.parsed.WaveTrap = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = AuxiliaryEquipment.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Instrument transformer (also known as Voltage Transformer) used to measure electrical qualities of the circuit that is being protected and/or monitored.
         *
         * Typically used as voltage transducer for the purpose of metering, protection, or sometimes auxiliary substation supply. A typical secondary voltage rating would be 120V.
         *
         */
        class PotentialTransformer extends Sensor
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PotentialTransformer;
                if (null == bucket)
                   cim_data.PotentialTransformer = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PotentialTransformer[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Sensor.prototype.parse.call (this, context, sub);
                obj.cls = "PotentialTransformer";
                base.parse_element (/<cim:PotentialTransformer.accuracyClass>([\s\S]*?)<\/cim:PotentialTransformer.accuracyClass>/g, obj, "accuracyClass", base.to_string, sub, context);
                base.parse_element (/<cim:PotentialTransformer.nominalRatio>([\s\S]*?)<\/cim:PotentialTransformer.nominalRatio>/g, obj, "nominalRatio", base.to_float, sub, context);
                base.parse_element (/<cim:PotentialTransformer.ptClass>([\s\S]*?)<\/cim:PotentialTransformer.ptClass>/g, obj, "ptClass", base.to_string, sub, context);
                base.parse_element (/<cim:PotentialTransformer.type>([\s\S]*?)<\/cim:PotentialTransformer.type>/g, obj, "type", base.to_string, sub, context);

                var bucket = context.parsed.PotentialTransformer;
                if (null == bucket)
                   context.parsed.PotentialTransformer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Sensor.prototype.export.call (this, obj, false);

                base.export_element (obj, "PotentialTransformer", "accuracyClass", base.from_string, fields);
                base.export_element (obj, "PotentialTransformer", "nominalRatio", base.from_float, fields);
                base.export_element (obj, "PotentialTransformer", "ptClass", base.from_string, fields);
                base.export_element (obj, "PotentialTransformer", "type", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A FaultIndicator is typically only an indicator (which may or may not be remotely monitored), and not a piece of equipment that actually initiates a protection event.
         *
         * It is used for FLISR (Fault Location, Isolation and Restoration) purposes, assisting with the dispatch of crews to "most likely" part of the network (i.e. assists with determining circuit section where the fault most likely happened).
         *
         */
        class FaultIndicator extends AuxiliaryEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.FaultIndicator;
                if (null == bucket)
                   cim_data.FaultIndicator = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.FaultIndicator[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = AuxiliaryEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "FaultIndicator";

                var bucket = context.parsed.FaultIndicator;
                if (null == bucket)
                   context.parsed.FaultIndicator = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = AuxiliaryEquipment.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Instrument transformer used to measure electrical qualities of the circuit that is being protected and/or monitored.
         *
         * Typically used as current transducer for the purpose of metering or protection. A typical secondary current rating would be 5A.
         *
         */
        class CurrentTransformer extends Sensor
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CurrentTransformer;
                if (null == bucket)
                   cim_data.CurrentTransformer = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CurrentTransformer[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Sensor.prototype.parse.call (this, context, sub);
                obj.cls = "CurrentTransformer";
                base.parse_element (/<cim:CurrentTransformer.accuracyClass>([\s\S]*?)<\/cim:CurrentTransformer.accuracyClass>/g, obj, "accuracyClass", base.to_string, sub, context);
                base.parse_element (/<cim:CurrentTransformer.accuracyLimit>([\s\S]*?)<\/cim:CurrentTransformer.accuracyLimit>/g, obj, "accuracyLimit", base.to_string, sub, context);
                base.parse_element (/<cim:CurrentTransformer.ctClass>([\s\S]*?)<\/cim:CurrentTransformer.ctClass>/g, obj, "ctClass", base.to_string, sub, context);
                base.parse_element (/<cim:CurrentTransformer.usage>([\s\S]*?)<\/cim:CurrentTransformer.usage>/g, obj, "usage", base.to_string, sub, context);
                base.parse_element (/<cim:CurrentTransformer.coreBurden>([\s\S]*?)<\/cim:CurrentTransformer.coreBurden>/g, obj, "coreBurden", base.to_string, sub, context);

                var bucket = context.parsed.CurrentTransformer;
                if (null == bucket)
                   context.parsed.CurrentTransformer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Sensor.prototype.export.call (this, obj, false);

                base.export_element (obj, "CurrentTransformer", "accuracyClass", base.from_string, fields);
                base.export_element (obj, "CurrentTransformer", "accuracyLimit", base.from_string, fields);
                base.export_element (obj, "CurrentTransformer", "ctClass", base.from_string, fields);
                base.export_element (obj, "CurrentTransformer", "usage", base.from_string, fields);
                base.export_element (obj, "CurrentTransformer", "coreBurden", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A sensor used mainly in overhead distribution networks as the source of both current and voltage measurements.
         *
         */
        class PostLineSensor extends Sensor
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PostLineSensor;
                if (null == bucket)
                   cim_data.PostLineSensor = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PostLineSensor[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Sensor.prototype.parse.call (this, context, sub);
                obj.cls = "PostLineSensor";

                var bucket = context.parsed.PostLineSensor;
                if (null == bucket)
                   context.parsed.PostLineSensor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Sensor.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Shunt device, installed on the network, usually in the proximity of electrical equipment in order to protect the said equipment against transient voltage transients caused by lightning or switching activity.
         *
         */
        class SurgeArrester extends AuxiliaryEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SurgeArrester;
                if (null == bucket)
                   cim_data.SurgeArrester = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SurgeArrester[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = AuxiliaryEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "SurgeArrester";

                var bucket = context.parsed.SurgeArrester;
                if (null == bucket)
                   context.parsed.SurgeArrester = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = AuxiliaryEquipment.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                WaveTrap: WaveTrap,
                CurrentTransformer: CurrentTransformer,
                PotentialTransformerKind: PotentialTransformerKind,
                Sensor: Sensor,
                SurgeArrester: SurgeArrester,
                PostLineSensor: PostLineSensor,
                AuxiliaryEquipment: AuxiliaryEquipment,
                FaultIndicator: FaultIndicator,
                PotentialTransformer: PotentialTransformer
            }
        );
    }
);