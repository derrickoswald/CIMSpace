define
(
    ["model/base", "model/Core"],
    /**
     * Contains entities that describe dynamic measurement data exchanged between applications.
     *
     */
    function (base, Core)
    {

        /**
         * Describes the translation of a set of values into a name and is intendend to facilitate cusom translations.
         *
         * Each ValueAliasSet has a name, description etc. A specific Measurement may represent a discrete state like Open, Closed, Intermediate etc. This requires a translation from the MeasurementValue.value number to a string, e.g. 0-&gt;"Invalid", 1-&gt;"Open", 2-&gt;"Closed", 3-&gt;"Intermediate". Each ValueToAlias member in ValueAliasSet.Value describe a mapping for one particular value to a name.
         *
         */
        class ValueAliasSet extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ValueAliasSet;
                if (null == bucket)
                   cim_data.ValueAliasSet = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ValueAliasSet[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ValueAliasSet";

                var bucket = context.parsed.ValueAliasSet;
                if (null == bucket)
                   context.parsed.ValueAliasSet = bucket = {};
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
         * The current state for a measurement.
         *
         * A state value is an instance of a measurement from a specific source. Measurements can be associated with many state values, each representing a different source for the measurement.
         *
         */
        class MeasurementValue extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MeasurementValue;
                if (null == bucket)
                   cim_data.MeasurementValue = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MeasurementValue[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MeasurementValue";
                base.parse_element (/<cim:MeasurementValue.sensorAccuracy>([\s\S]*?)<\/cim:MeasurementValue.sensorAccuracy>/g, obj, "sensorAccuracy", base.to_string, sub, context);
                base.parse_element (/<cim:MeasurementValue.timeStamp>([\s\S]*?)<\/cim:MeasurementValue.timeStamp>/g, obj, "timeStamp", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:MeasurementValue.\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "", sub, context);
                base.parse_attribute (/<cim:MeasurementValue.MeasurementValueSource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MeasurementValueSource", sub, context);
                base.parse_attribute (/<cim:MeasurementValue.ErpPerson\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpPerson", sub, context);
                base.parse_attribute (/<cim:MeasurementValue.MeasurementValueQuality\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MeasurementValueQuality", sub, context);
                base.parse_attribute (/<cim:MeasurementValue.RemoteSource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemoteSource", sub, context);

                var bucket = context.parsed.MeasurementValue;
                if (null == bucket)
                   context.parsed.MeasurementValue = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "MeasurementValue", "sensorAccuracy", base.from_string, fields);
                base.export_element (obj, "MeasurementValue", "timeStamp", base.from_datetime, fields);
                base.export_attribute (obj, "MeasurementValue", "", fields);
                base.export_attribute (obj, "MeasurementValue", "MeasurementValueSource", fields);
                base.export_attribute (obj, "MeasurementValue", "ErpPerson", fields);
                base.export_attribute (obj, "MeasurementValue", "MeasurementValueQuality", fields);
                base.export_attribute (obj, "MeasurementValue", "RemoteSource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Validity for MeasurementValue.
         *
         */
        class Validity extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Validity;
                if (null == bucket)
                   cim_data.Validity = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Validity[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Validity";
                base.parse_element (/<cim:Validity.GOOD>([\s\S]*?)<\/cim:Validity.GOOD>/g, obj, "GOOD", base.to_string, sub, context);
                base.parse_element (/<cim:Validity.QUESTIONABLE>([\s\S]*?)<\/cim:Validity.QUESTIONABLE>/g, obj, "QUESTIONABLE", base.to_string, sub, context);
                base.parse_element (/<cim:Validity.INVALID>([\s\S]*?)<\/cim:Validity.INVALID>/g, obj, "INVALID", base.to_string, sub, context);

                var bucket = context.parsed.Validity;
                if (null == bucket)
                   context.parsed.Validity = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Validity", "GOOD", base.from_string, fields);
                base.export_element (obj, "Validity", "QUESTIONABLE", base.from_string, fields);
                base.export_element (obj, "Validity", "INVALID", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Quality flags in this class are as defined in IEC 61850, except for estimatorReplaced, which has been included in this class for convenience.
         *
         */
        class Quality61850 extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Quality61850;
                if (null == bucket)
                   cim_data.Quality61850 = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Quality61850[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Quality61850";
                base.parse_element (/<cim:Quality61850.badReference>([\s\S]*?)<\/cim:Quality61850.badReference>/g, obj, "badReference", base.to_boolean, sub, context);
                base.parse_element (/<cim:Quality61850.estimatorReplaced>([\s\S]*?)<\/cim:Quality61850.estimatorReplaced>/g, obj, "estimatorReplaced", base.to_boolean, sub, context);
                base.parse_element (/<cim:Quality61850.failure>([\s\S]*?)<\/cim:Quality61850.failure>/g, obj, "failure", base.to_boolean, sub, context);
                base.parse_element (/<cim:Quality61850.oldData>([\s\S]*?)<\/cim:Quality61850.oldData>/g, obj, "oldData", base.to_boolean, sub, context);
                base.parse_element (/<cim:Quality61850.operatorBlocked>([\s\S]*?)<\/cim:Quality61850.operatorBlocked>/g, obj, "operatorBlocked", base.to_boolean, sub, context);
                base.parse_element (/<cim:Quality61850.oscillatory>([\s\S]*?)<\/cim:Quality61850.oscillatory>/g, obj, "oscillatory", base.to_boolean, sub, context);
                base.parse_element (/<cim:Quality61850.outOfRange>([\s\S]*?)<\/cim:Quality61850.outOfRange>/g, obj, "outOfRange", base.to_boolean, sub, context);
                base.parse_element (/<cim:Quality61850.overFlow>([\s\S]*?)<\/cim:Quality61850.overFlow>/g, obj, "overFlow", base.to_boolean, sub, context);
                base.parse_element (/<cim:Quality61850.source>([\s\S]*?)<\/cim:Quality61850.source>/g, obj, "source", base.to_string, sub, context);
                base.parse_element (/<cim:Quality61850.suspect>([\s\S]*?)<\/cim:Quality61850.suspect>/g, obj, "suspect", base.to_boolean, sub, context);
                base.parse_element (/<cim:Quality61850.test>([\s\S]*?)<\/cim:Quality61850.test>/g, obj, "test", base.to_boolean, sub, context);
                base.parse_element (/<cim:Quality61850.validity>([\s\S]*?)<\/cim:Quality61850.validity>/g, obj, "validity", base.to_string, sub, context);

                var bucket = context.parsed.Quality61850;
                if (null == bucket)
                   context.parsed.Quality61850 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Quality61850", "badReference", base.from_boolean, fields);
                base.export_element (obj, "Quality61850", "estimatorReplaced", base.from_boolean, fields);
                base.export_element (obj, "Quality61850", "failure", base.from_boolean, fields);
                base.export_element (obj, "Quality61850", "oldData", base.from_boolean, fields);
                base.export_element (obj, "Quality61850", "operatorBlocked", base.from_boolean, fields);
                base.export_element (obj, "Quality61850", "oscillatory", base.from_boolean, fields);
                base.export_element (obj, "Quality61850", "outOfRange", base.from_boolean, fields);
                base.export_element (obj, "Quality61850", "overFlow", base.from_boolean, fields);
                base.export_element (obj, "Quality61850", "source", base.from_string, fields);
                base.export_element (obj, "Quality61850", "suspect", base.from_boolean, fields);
                base.export_element (obj, "Quality61850", "test", base.from_boolean, fields);
                base.export_element (obj, "Quality61850", "validity", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Specifies one limit value for a Measurement.
         *
         * A Measurement typically has several limits that are kept together by the LimitSet class. The actual meaning and use of a Limit instance (i.e., if it is an alarm or warning limit or if it is a high or low limit) is not captured in the Limit class. However the name of a Limit instance may indicate both meaning and use.
         *
         */
        class Limit extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Limit;
                if (null == bucket)
                   cim_data.Limit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Limit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Limit";

                var bucket = context.parsed.Limit;
                if (null == bucket)
                   context.parsed.Limit = bucket = {};
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
         * Control is used for supervisory/device control.
         *
         * It represents control outputs that are used to change the state in a process, e.g. close or open breaker, a set point value or a raise lower command.
         *
         */
        class Control extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Control;
                if (null == bucket)
                   cim_data.Control = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Control[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Control";
                base.parse_element (/<cim:Control.operationInProgress>([\s\S]*?)<\/cim:Control.operationInProgress>/g, obj, "operationInProgress", base.to_boolean, sub, context);
                base.parse_element (/<cim:Control.timeStamp>([\s\S]*?)<\/cim:Control.timeStamp>/g, obj, "timeStamp", base.to_datetime, sub, context);
                base.parse_element (/<cim:Control.unitMultiplier>([\s\S]*?)<\/cim:Control.unitMultiplier>/g, obj, "unitMultiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Control.unitSymbol>([\s\S]*?)<\/cim:Control.unitSymbol>/g, obj, "unitSymbol", base.to_string, sub, context);
                base.parse_element (/<cim:Control.controlType>([\s\S]*?)<\/cim:Control.controlType>/g, obj, "controlType", base.to_string, sub, context);
                base.parse_attribute (/<cim:Control.PowerSystemResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemResource", sub, context);
                base.parse_attribute (/<cim:Control.RemoteControl\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemoteControl", sub, context);

                var bucket = context.parsed.Control;
                if (null == bucket)
                   context.parsed.Control = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Control", "operationInProgress", base.from_boolean, fields);
                base.export_element (obj, "Control", "timeStamp", base.from_datetime, fields);
                base.export_element (obj, "Control", "unitMultiplier", base.from_string, fields);
                base.export_element (obj, "Control", "unitSymbol", base.from_string, fields);
                base.export_element (obj, "Control", "controlType", base.from_string, fields);
                base.export_attribute (obj, "Control", "PowerSystemResource", fields);
                base.export_attribute (obj, "Control", "RemoteControl", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * MeasurementValueSource describes the alternative sources updating a MeasurementValue.
         *
         * User conventions for how to use the MeasurementValueSource attributes are described in the introduction to IEC 61970-301.
         *
         */
        class MeasurementValueSource extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MeasurementValueSource;
                if (null == bucket)
                   cim_data.MeasurementValueSource = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MeasurementValueSource[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MeasurementValueSource";

                var bucket = context.parsed.MeasurementValueSource;
                if (null == bucket)
                   context.parsed.MeasurementValueSource = bucket = {};
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
         * A Measurement represents any measured, calculated or non-measured non-calculated quantity.
         *
         * Any piece of equipment may contain Measurements, e.g. a substation may have temperature measurements and door open indications, a transformer may have oil temperature and tank pressure measurements, a bay may contain a number of power flow measurements and a Breaker may contain a switch status measurement.
         *
         */
        class Measurement extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Measurement;
                if (null == bucket)
                   cim_data.Measurement = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Measurement[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Measurement";
                base.parse_element (/<cim:Measurement.measurementType>([\s\S]*?)<\/cim:Measurement.measurementType>/g, obj, "measurementType", base.to_string, sub, context);
                base.parse_element (/<cim:Measurement.phases>([\s\S]*?)<\/cim:Measurement.phases>/g, obj, "phases", base.to_string, sub, context);
                base.parse_element (/<cim:Measurement.unitMultiplier>([\s\S]*?)<\/cim:Measurement.unitMultiplier>/g, obj, "unitMultiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Measurement.unitSymbol>([\s\S]*?)<\/cim:Measurement.unitSymbol>/g, obj, "unitSymbol", base.to_string, sub, context);
                base.parse_attribute (/<cim:Measurement.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context);
                base.parse_attribute (/<cim:Measurement.Asset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context);
                base.parse_attribute (/<cim:Measurement.PowerSystemResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemResource", sub, context);

                var bucket = context.parsed.Measurement;
                if (null == bucket)
                   context.parsed.Measurement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Measurement", "measurementType", base.from_string, fields);
                base.export_element (obj, "Measurement", "phases", base.from_string, fields);
                base.export_element (obj, "Measurement", "unitMultiplier", base.from_string, fields);
                base.export_element (obj, "Measurement", "unitSymbol", base.from_string, fields);
                base.export_attribute (obj, "Measurement", "Terminal", fields);
                base.export_attribute (obj, "Measurement", "Asset", fields);
                base.export_attribute (obj, "Measurement", "PowerSystemResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Specifies a set of Limits that are associated with a Measurement.
         *
         * A Measurement may have several LimitSets corresponding to seasonal or other changing conditions. The condition is captured in the name and description attributes. The same LimitSet may be used for several Measurements. In particular percentage limits are used this way.
         *
         */
        class LimitSet extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LimitSet;
                if (null == bucket)
                   cim_data.LimitSet = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LimitSet[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "LimitSet";
                base.parse_element (/<cim:LimitSet.isPercentageLimits>([\s\S]*?)<\/cim:LimitSet.isPercentageLimits>/g, obj, "isPercentageLimits", base.to_boolean, sub, context);

                var bucket = context.parsed.LimitSet;
                if (null == bucket)
                   context.parsed.LimitSet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "LimitSet", "isPercentageLimits", base.from_boolean, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Describes the translation of one particular value into a name, e.g. 1 as "Open".
         *
         */
        class ValueToAlias extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ValueToAlias;
                if (null == bucket)
                   cim_data.ValueToAlias = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ValueToAlias[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ValueToAlias";
                base.parse_element (/<cim:ValueToAlias.value>([\s\S]*?)<\/cim:ValueToAlias.value>/g, obj, "value", base.to_string, sub, context);
                base.parse_attribute (/<cim:ValueToAlias.ValueAliasSet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ValueAliasSet", sub, context);

                var bucket = context.parsed.ValueToAlias;
                if (null == bucket)
                   context.parsed.ValueToAlias = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ValueToAlias", "value", base.from_string, fields);
                base.export_attribute (obj, "ValueToAlias", "ValueAliasSet", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * DiscreteValue represents a discrete MeasurementValue.
         *
         */
        class DiscreteValue extends MeasurementValue
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DiscreteValue;
                if (null == bucket)
                   cim_data.DiscreteValue = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DiscreteValue[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MeasurementValue.prototype.parse.call (this, context, sub);
                obj.cls = "DiscreteValue";
                base.parse_element (/<cim:DiscreteValue.value>([\s\S]*?)<\/cim:DiscreteValue.value>/g, obj, "value", base.to_string, sub, context);
                base.parse_attribute (/<cim:DiscreteValue.Command\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Command", sub, context);
                base.parse_attribute (/<cim:DiscreteValue.Discrete\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Discrete", sub, context);

                var bucket = context.parsed.DiscreteValue;
                if (null == bucket)
                   context.parsed.DiscreteValue = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MeasurementValue.prototype.export.call (this, obj, false);

                base.export_element (obj, "DiscreteValue", "value", base.from_string, fields);
                base.export_attribute (obj, "DiscreteValue", "Command", fields);
                base.export_attribute (obj, "DiscreteValue", "Discrete", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * StringMeasurementValue represents a measurement value of type string.
         *
         */
        class StringMeasurementValue extends MeasurementValue
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.StringMeasurementValue;
                if (null == bucket)
                   cim_data.StringMeasurementValue = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.StringMeasurementValue[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MeasurementValue.prototype.parse.call (this, context, sub);
                obj.cls = "StringMeasurementValue";
                base.parse_element (/<cim:StringMeasurementValue.value>([\s\S]*?)<\/cim:StringMeasurementValue.value>/g, obj, "value", base.to_string, sub, context);
                base.parse_attribute (/<cim:StringMeasurementValue.StringMeasurement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StringMeasurement", sub, context);

                var bucket = context.parsed.StringMeasurementValue;
                if (null == bucket)
                   context.parsed.StringMeasurementValue = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MeasurementValue.prototype.export.call (this, obj, false);

                base.export_element (obj, "StringMeasurementValue", "value", base.from_string, fields);
                base.export_attribute (obj, "StringMeasurementValue", "StringMeasurement", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * AccumulatorValue represents an accumulated (counted) MeasurementValue.
         *
         */
        class AccumulatorValue extends MeasurementValue
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AccumulatorValue;
                if (null == bucket)
                   cim_data.AccumulatorValue = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AccumulatorValue[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MeasurementValue.prototype.parse.call (this, context, sub);
                obj.cls = "AccumulatorValue";
                base.parse_element (/<cim:AccumulatorValue.value>([\s\S]*?)<\/cim:AccumulatorValue.value>/g, obj, "value", base.to_string, sub, context);
                base.parse_attribute (/<cim:AccumulatorValue.Accumulator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Accumulator", sub, context);
                base.parse_attribute (/<cim:AccumulatorValue.AccumulatorReset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AccumulatorReset", sub, context);

                var bucket = context.parsed.AccumulatorValue;
                if (null == bucket)
                   context.parsed.AccumulatorValue = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MeasurementValue.prototype.export.call (this, obj, false);

                base.export_element (obj, "AccumulatorValue", "value", base.from_string, fields);
                base.export_attribute (obj, "AccumulatorValue", "Accumulator", fields);
                base.export_attribute (obj, "AccumulatorValue", "AccumulatorReset", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * AnalogValue represents an analog MeasurementValue.
         *
         */
        class AnalogValue extends MeasurementValue
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AnalogValue;
                if (null == bucket)
                   cim_data.AnalogValue = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AnalogValue[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MeasurementValue.prototype.parse.call (this, context, sub);
                obj.cls = "AnalogValue";
                base.parse_element (/<cim:AnalogValue.value>([\s\S]*?)<\/cim:AnalogValue.value>/g, obj, "value", base.to_float, sub, context);
                base.parse_attribute (/<cim:AnalogValue.Analog\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Analog", sub, context);
                base.parse_attribute (/<cim:AnalogValue.AnalogControl\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AnalogControl", sub, context);

                var bucket = context.parsed.AnalogValue;
                if (null == bucket)
                   context.parsed.AnalogValue = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MeasurementValue.prototype.export.call (this, obj, false);

                base.export_element (obj, "AnalogValue", "value", base.from_float, fields);
                base.export_attribute (obj, "AnalogValue", "Analog", fields);
                base.export_attribute (obj, "AnalogValue", "AnalogControl", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Measurement quality flags.
         *
         * Bits 0-10 are defined for substation automation in draft IEC 61850 part 7-3. Bits 11-15 are reserved for future expansion by that document. Bits 16-31 are reserved for EMS applications.
         *
         */
        class MeasurementValueQuality extends Quality61850
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MeasurementValueQuality;
                if (null == bucket)
                   cim_data.MeasurementValueQuality = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MeasurementValueQuality[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Quality61850.prototype.parse.call (this, context, sub);
                obj.cls = "MeasurementValueQuality";
                base.parse_attribute (/<cim:MeasurementValueQuality.MeasurementValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MeasurementValue", sub, context);

                var bucket = context.parsed.MeasurementValueQuality;
                if (null == bucket)
                   context.parsed.MeasurementValueQuality = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Quality61850.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MeasurementValueQuality", "MeasurementValue", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Limit values for Accumulator measurements.
         *
         */
        class AccumulatorLimit extends Limit
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AccumulatorLimit;
                if (null == bucket)
                   cim_data.AccumulatorLimit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AccumulatorLimit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Limit.prototype.parse.call (this, context, sub);
                obj.cls = "AccumulatorLimit";
                base.parse_element (/<cim:AccumulatorLimit.value>([\s\S]*?)<\/cim:AccumulatorLimit.value>/g, obj, "value", base.to_string, sub, context);
                base.parse_attribute (/<cim:AccumulatorLimit.LimitSet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LimitSet", sub, context);

                var bucket = context.parsed.AccumulatorLimit;
                if (null == bucket)
                   context.parsed.AccumulatorLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Limit.prototype.export.call (this, obj, false);

                base.export_element (obj, "AccumulatorLimit", "value", base.from_string, fields);
                base.export_attribute (obj, "AccumulatorLimit", "LimitSet", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Limit values for Analog measurements.
         *
         */
        class AnalogLimit extends Limit
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AnalogLimit;
                if (null == bucket)
                   cim_data.AnalogLimit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AnalogLimit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Limit.prototype.parse.call (this, context, sub);
                obj.cls = "AnalogLimit";
                base.parse_element (/<cim:AnalogLimit.value>([\s\S]*?)<\/cim:AnalogLimit.value>/g, obj, "value", base.to_float, sub, context);
                base.parse_attribute (/<cim:AnalogLimit.LimitSet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LimitSet", sub, context);

                var bucket = context.parsed.AnalogLimit;
                if (null == bucket)
                   context.parsed.AnalogLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Limit.prototype.export.call (this, obj, false);

                base.export_element (obj, "AnalogLimit", "value", base.from_float, fields);
                base.export_attribute (obj, "AnalogLimit", "LimitSet", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * This command reset the counter value to zero.
         *
         */
        class AccumulatorReset extends Control
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AccumulatorReset;
                if (null == bucket)
                   cim_data.AccumulatorReset = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AccumulatorReset[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Control.prototype.parse.call (this, context, sub);
                obj.cls = "AccumulatorReset";
                base.parse_attribute (/<cim:AccumulatorReset.AccumulatorValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AccumulatorValue", sub, context);

                var bucket = context.parsed.AccumulatorReset;
                if (null == bucket)
                   context.parsed.AccumulatorReset = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Control.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "AccumulatorReset", "AccumulatorValue", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * An analog control used for supervisory control.
         *
         */
        class AnalogControl extends Control
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AnalogControl;
                if (null == bucket)
                   cim_data.AnalogControl = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AnalogControl[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Control.prototype.parse.call (this, context, sub);
                obj.cls = "AnalogControl";
                base.parse_element (/<cim:AnalogControl.maxValue>([\s\S]*?)<\/cim:AnalogControl.maxValue>/g, obj, "maxValue", base.to_float, sub, context);
                base.parse_element (/<cim:AnalogControl.minValue>([\s\S]*?)<\/cim:AnalogControl.minValue>/g, obj, "minValue", base.to_float, sub, context);
                base.parse_attribute (/<cim:AnalogControl.AnalogValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AnalogValue", sub, context);

                var bucket = context.parsed.AnalogControl;
                if (null == bucket)
                   context.parsed.AnalogControl = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Control.prototype.export.call (this, obj, false);

                base.export_element (obj, "AnalogControl", "maxValue", base.from_float, fields);
                base.export_element (obj, "AnalogControl", "minValue", base.from_float, fields);
                base.export_attribute (obj, "AnalogControl", "AnalogValue", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A Command is a discrete control used for supervisory control.
         *
         */
        class Command extends Control
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Command;
                if (null == bucket)
                   cim_data.Command = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Command[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Control.prototype.parse.call (this, context, sub);
                obj.cls = "Command";
                base.parse_element (/<cim:Command.normalValue>([\s\S]*?)<\/cim:Command.normalValue>/g, obj, "normalValue", base.to_string, sub, context);
                base.parse_element (/<cim:Command.value>([\s\S]*?)<\/cim:Command.value>/g, obj, "value", base.to_string, sub, context);
                base.parse_attribute (/<cim:Command.DiscreteValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DiscreteValue", sub, context);
                base.parse_attribute (/<cim:Command.ValueAliasSet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ValueAliasSet", sub, context);

                var bucket = context.parsed.Command;
                if (null == bucket)
                   context.parsed.Command = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Control.prototype.export.call (this, obj, false);

                base.export_element (obj, "Command", "normalValue", base.from_string, fields);
                base.export_element (obj, "Command", "value", base.from_string, fields);
                base.export_attribute (obj, "Command", "DiscreteValue", fields);
                base.export_attribute (obj, "Command", "ValueAliasSet", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class DiscreteCommand extends Command
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DiscreteCommand;
                if (null == bucket)
                   cim_data.DiscreteCommand = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DiscreteCommand[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Command.prototype.parse.call (this, context, sub);
                obj.cls = "DiscreteCommand";

                var bucket = context.parsed.DiscreteCommand;
                if (null == bucket)
                   context.parsed.DiscreteCommand = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Command.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * An analog control that increase or decrease a set point value with pulses.
         *
         */
        class RaiseLowerCommand extends AnalogControl
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RaiseLowerCommand;
                if (null == bucket)
                   cim_data.RaiseLowerCommand = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RaiseLowerCommand[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = AnalogControl.prototype.parse.call (this, context, sub);
                obj.cls = "RaiseLowerCommand";
                base.parse_attribute (/<cim:RaiseLowerCommand.ValueAliasSet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ValueAliasSet", sub, context);

                var bucket = context.parsed.RaiseLowerCommand;
                if (null == bucket)
                   context.parsed.RaiseLowerCommand = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = AnalogControl.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "RaiseLowerCommand", "ValueAliasSet", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * An analog control that issue a set point value.
         *
         */
        class SetPoint extends AnalogControl
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SetPoint;
                if (null == bucket)
                   cim_data.SetPoint = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SetPoint[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = AnalogControl.prototype.parse.call (this, context, sub);
                obj.cls = "SetPoint";
                base.parse_element (/<cim:SetPoint.normalValue>([\s\S]*?)<\/cim:SetPoint.normalValue>/g, obj, "normalValue", base.to_float, sub, context);
                base.parse_element (/<cim:SetPoint.value>([\s\S]*?)<\/cim:SetPoint.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.SetPoint;
                if (null == bucket)
                   context.parsed.SetPoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = AnalogControl.prototype.export.call (this, obj, false);

                base.export_element (obj, "SetPoint", "normalValue", base.from_float, fields);
                base.export_element (obj, "SetPoint", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Discrete represents a discrete Measurement, i.e. a Measurement representing discrete values, e.g. a Breaker position.
         *
         */
        class Discrete extends Measurement
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Discrete;
                if (null == bucket)
                   cim_data.Discrete = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Discrete[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Measurement.prototype.parse.call (this, context, sub);
                obj.cls = "Discrete";
                base.parse_element (/<cim:Discrete.maxValue>([\s\S]*?)<\/cim:Discrete.maxValue>/g, obj, "maxValue", base.to_string, sub, context);
                base.parse_element (/<cim:Discrete.minValue>([\s\S]*?)<\/cim:Discrete.minValue>/g, obj, "minValue", base.to_string, sub, context);
                base.parse_element (/<cim:Discrete.normalValue>([\s\S]*?)<\/cim:Discrete.normalValue>/g, obj, "normalValue", base.to_string, sub, context);
                base.parse_attribute (/<cim:Discrete.ValueAliasSet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ValueAliasSet", sub, context);

                var bucket = context.parsed.Discrete;
                if (null == bucket)
                   context.parsed.Discrete = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Measurement.prototype.export.call (this, obj, false);

                base.export_element (obj, "Discrete", "maxValue", base.from_string, fields);
                base.export_element (obj, "Discrete", "minValue", base.from_string, fields);
                base.export_element (obj, "Discrete", "normalValue", base.from_string, fields);
                base.export_attribute (obj, "Discrete", "ValueAliasSet", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Analog represents an analog Measurement.
         *
         */
        class Analog extends Measurement
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Analog;
                if (null == bucket)
                   cim_data.Analog = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Analog[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Measurement.prototype.parse.call (this, context, sub);
                obj.cls = "Analog";
                base.parse_element (/<cim:Analog.maxValue>([\s\S]*?)<\/cim:Analog.maxValue>/g, obj, "maxValue", base.to_float, sub, context);
                base.parse_element (/<cim:Analog.minValue>([\s\S]*?)<\/cim:Analog.minValue>/g, obj, "minValue", base.to_float, sub, context);
                base.parse_element (/<cim:Analog.normalValue>([\s\S]*?)<\/cim:Analog.normalValue>/g, obj, "normalValue", base.to_float, sub, context);
                base.parse_element (/<cim:Analog.positiveFlowIn>([\s\S]*?)<\/cim:Analog.positiveFlowIn>/g, obj, "positiveFlowIn", base.to_boolean, sub, context);

                var bucket = context.parsed.Analog;
                if (null == bucket)
                   context.parsed.Analog = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Measurement.prototype.export.call (this, obj, false);

                base.export_element (obj, "Analog", "maxValue", base.from_float, fields);
                base.export_element (obj, "Analog", "minValue", base.from_float, fields);
                base.export_element (obj, "Analog", "normalValue", base.from_float, fields);
                base.export_element (obj, "Analog", "positiveFlowIn", base.from_boolean, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Accumulator represents an accumulated (counted) Measurement, e.g. an energy value.
         *
         */
        class Accumulator extends Measurement
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Accumulator;
                if (null == bucket)
                   cim_data.Accumulator = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Accumulator[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Measurement.prototype.parse.call (this, context, sub);
                obj.cls = "Accumulator";
                base.parse_element (/<cim:Accumulator.maxValue>([\s\S]*?)<\/cim:Accumulator.maxValue>/g, obj, "maxValue", base.to_string, sub, context);

                var bucket = context.parsed.Accumulator;
                if (null == bucket)
                   context.parsed.Accumulator = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Measurement.prototype.export.call (this, obj, false);

                base.export_element (obj, "Accumulator", "maxValue", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * StringMeasurement represents a measurement with values of type string.
         *
         */
        class StringMeasurement extends Measurement
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.StringMeasurement;
                if (null == bucket)
                   cim_data.StringMeasurement = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.StringMeasurement[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Measurement.prototype.parse.call (this, context, sub);
                obj.cls = "StringMeasurement";

                var bucket = context.parsed.StringMeasurement;
                if (null == bucket)
                   context.parsed.StringMeasurement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Measurement.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * An AccumulatorLimitSet specifies a set of Limits that are associated with an Accumulator measurement.
         *
         */
        class AccumulatorLimitSet extends LimitSet
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AccumulatorLimitSet;
                if (null == bucket)
                   cim_data.AccumulatorLimitSet = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AccumulatorLimitSet[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = LimitSet.prototype.parse.call (this, context, sub);
                obj.cls = "AccumulatorLimitSet";

                var bucket = context.parsed.AccumulatorLimitSet;
                if (null == bucket)
                   context.parsed.AccumulatorLimitSet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = LimitSet.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * An AnalogLimitSet specifies a set of Limits that are associated with an Analog measurement.
         *
         */
        class AnalogLimitSet extends LimitSet
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AnalogLimitSet;
                if (null == bucket)
                   cim_data.AnalogLimitSet = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AnalogLimitSet[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = LimitSet.prototype.parse.call (this, context, sub);
                obj.cls = "AnalogLimitSet";

                var bucket = context.parsed.AnalogLimitSet;
                if (null == bucket)
                   context.parsed.AnalogLimitSet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = LimitSet.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                RaiseLowerCommand: RaiseLowerCommand,
                Command: Command,
                ValueToAlias: ValueToAlias,
                ValueAliasSet: ValueAliasSet,
                Analog: Analog,
                LimitSet: LimitSet,
                Measurement: Measurement,
                MeasurementValue: MeasurementValue,
                AccumulatorLimit: AccumulatorLimit,
                AnalogControl: AnalogControl,
                StringMeasurementValue: StringMeasurementValue,
                MeasurementValueQuality: MeasurementValueQuality,
                AnalogLimitSet: AnalogLimitSet,
                Validity: Validity,
                Discrete: Discrete,
                AccumulatorLimitSet: AccumulatorLimitSet,
                AnalogValue: AnalogValue,
                AnalogLimit: AnalogLimit,
                SetPoint: SetPoint,
                AccumulatorReset: AccumulatorReset,
                DiscreteValue: DiscreteValue,
                AccumulatorValue: AccumulatorValue,
                StringMeasurement: StringMeasurement,
                MeasurementValueSource: MeasurementValueSource,
                Control: Control,
                DiscreteCommand: DiscreteCommand,
                Limit: Limit,
                Accumulator: Accumulator,
                Quality61850: Quality61850
            }
        );
    }
);