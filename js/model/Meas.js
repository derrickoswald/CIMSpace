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
         * An analog control used for supervisory control.
         *
         */
        function parse_AnalogControl (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Control (context, sub);
            obj.cls = "AnalogControl";
            /**
             * Normal value range maximum for any of the Control.value.
             *
             * Used for scaling, e.g. in bar graphs.
             *
             */
            base.parse_element (/<cim:AnalogControl.maxValue>([\s\S]*?)<\/cim:AnalogControl.maxValue>/g, obj, "maxValue", base.to_float, sub, context);

            /**
             * Normal value range minimum for any of the Control.value.
             *
             * Used for scaling, e.g. in bar graphs.
             *
             */
            base.parse_element (/<cim:AnalogControl.minValue>([\s\S]*?)<\/cim:AnalogControl.minValue>/g, obj, "minValue", base.to_float, sub, context);

            /**
             * The MeasurementValue that is controlled.
             *
             */
            base.parse_attribute (/<cim:AnalogControl.AnalogValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AnalogValue", sub, context, true);

            bucket = context.parsed.AnalogControl;
            if (null == bucket)
                context.parsed.AnalogControl = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Describes the translation of a set of values into a name and is intendend to facilitate cusom translations.
         *
         * Each ValueAliasSet has a name, description etc. A specific Measurement may represent a discrete state like Open, Closed, Intermediate etc. This requires a translation from the MeasurementValue.value number to a string, e.g. 0-&gt;"Invalid", 1-&gt;"Open", 2-&gt;"Closed", 3-&gt;"Intermediate". Each ValueToAlias member in ValueAliasSet.Value describe a mapping for one particular value to a name.
         *
         */
        function parse_ValueAliasSet (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ValueAliasSet";
            bucket = context.parsed.ValueAliasSet;
            if (null == bucket)
                context.parsed.ValueAliasSet = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An AnalogLimitSet specifies a set of Limits that are associated with an Analog measurement.
         *
         */
        function parse_AnalogLimitSet (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_LimitSet (context, sub);
            obj.cls = "AnalogLimitSet";
            bucket = context.parsed.AnalogLimitSet;
            if (null == bucket)
                context.parsed.AnalogLimitSet = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The current state for a measurement.
         *
         * A state value is an instance of a measurement from a specific source. Measurements can be associated with many state values, each representing a different source for the measurement.
         *
         */
        function parse_MeasurementValue (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "MeasurementValue";
            /**
             * The limit, expressed as a percentage of the sensor maximum, that errors will not exceed when the sensor is used under  reference conditions.
             *
             */
            base.parse_element (/<cim:MeasurementValue.sensorAccuracy>([\s\S]*?)<\/cim:MeasurementValue.sensorAccuracy>/g, obj, "sensorAccuracy", base.to_string, sub, context);

            /**
             * The time when the value was last updated
             *
             */
            base.parse_element (/<cim:MeasurementValue.timeStamp>([\s\S]*?)<\/cim:MeasurementValue.timeStamp>/g, obj, "timeStamp", base.to_datetime, sub, context);

            base.parse_attribute (/<cim:MeasurementValue.\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "", sub, context, true);

            /**
             * A reference to the type of source that updates the MeasurementValue, e.g.
             *
             * SCADA, CCLink, manual, etc. User conventions for the names of sources are contained in the introduction to IEC 61970-301.
             *
             */
            base.parse_attribute (/<cim:MeasurementValue.MeasurementValueSource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MeasurementValueSource", sub, context, true);

            base.parse_attribute (/<cim:MeasurementValue.ErpPerson\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpPerson", sub, context, true);

            /**
             * A MeasurementValue has a MeasurementValueQuality associated with it.
             *
             */
            base.parse_attribute (/<cim:MeasurementValue.MeasurementValueQuality\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MeasurementValueQuality", sub, context, true);

            /**
             * Link to the physical telemetered point associated with this measurement.
             *
             */
            base.parse_attribute (/<cim:MeasurementValue.RemoteSource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemoteSource", sub, context, true);

            bucket = context.parsed.MeasurementValue;
            if (null == bucket)
                context.parsed.MeasurementValue = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Validity for MeasurementValue.
         *
         */
        function parse_Validity (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "Validity";
            /**
             * The value is marked good if no abnormal condition of the acquisition function or the information source is detected.
             *
             */
            base.parse_element (/<cim:Validity.GOOD>([\s\S]*?)<\/cim:Validity.GOOD>/g, obj, "GOOD", base.to_string, sub, context);

            /**
             * The value is marked questionable if a supervision function detects an abnormal behaviour, however the value could still be valid.
             *
             * The client is responsible for determining whether or not values marked "questionable" should be used.
             *
             */
            base.parse_element (/<cim:Validity.QUESTIONABLE>([\s\S]*?)<\/cim:Validity.QUESTIONABLE>/g, obj, "QUESTIONABLE", base.to_string, sub, context);

            /**
             * The value is marked invalid when a supervision function recognises abnormal conditions of the acquisition function or the information source (missing or non-operating updating devices).
             *
             * The value is not defined under this condition. The mark invalid is used to indicate to the client that the value may be incorrect and shall not be used.
             *
             */
            base.parse_element (/<cim:Validity.INVALID>([\s\S]*?)<\/cim:Validity.INVALID>/g, obj, "INVALID", base.to_string, sub, context);

            bucket = context.parsed.Validity;
            if (null == bucket)
                context.parsed.Validity = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Quality flags in this class are as defined in IEC 61850, except for estimatorReplaced, which has been included in this class for convenience.
         *
         */
        function parse_Quality61850 (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "Quality61850";
            /**
             * Measurement value may be incorrect due to a reference being out of calibration.
             *
             */
            base.parse_element (/<cim:Quality61850.badReference>([\s\S]*?)<\/cim:Quality61850.badReference>/g, obj, "badReference", base.to_boolean, sub, context);

            /**
             * Value has been replaced by State Estimator. estimatorReplaced is not an IEC61850 quality bit but has been put in this class for convenience.
             *
             */
            base.parse_element (/<cim:Quality61850.estimatorReplaced>([\s\S]*?)<\/cim:Quality61850.estimatorReplaced>/g, obj, "estimatorReplaced", base.to_boolean, sub, context);

            /**
             * This identifier indicates that a supervision function has detected an internal or external failure, e.g. communication failure.
             *
             */
            base.parse_element (/<cim:Quality61850.failure>([\s\S]*?)<\/cim:Quality61850.failure>/g, obj, "failure", base.to_boolean, sub, context);

            /**
             * Measurement value is old and possibly invalid, as it has not been successfully updated during a specified time interval.
             *
             */
            base.parse_element (/<cim:Quality61850.oldData>([\s\S]*?)<\/cim:Quality61850.oldData>/g, obj, "oldData", base.to_boolean, sub, context);

            /**
             * Measurement value is blocked and hence unavailable for transmission.
             *
             */
            base.parse_element (/<cim:Quality61850.operatorBlocked>([\s\S]*?)<\/cim:Quality61850.operatorBlocked>/g, obj, "operatorBlocked", base.to_boolean, sub, context);

            /**
             * To prevent some overload of the communication it is sensible to detect and suppress oscillating (fast changing) binary inputs.
             *
             * If a signal changes in a defined time (tosc) twice in the same direction (from 0 to 1 or from 1 to 0) then oscillation is detected and the detail quality identifier "oscillatory" is set. If it is detected a configured numbers of transient changes could be passed by. In this time the validity status "questionable" is set. If after this defined numbers of changes the signal is still in the oscillating state the value shall be set either to the opposite state of the previous stable value or to a defined default value. In this case the validity status "questionable" is reset and "invalid" is set as long as the signal is oscillating. If it is configured such that no transient changes should be passed by then the validity status "invalid" is set immediately in addition to the detail quality identifier "oscillatory" (used for status information only).
             *
             */
            base.parse_element (/<cim:Quality61850.oscillatory>([\s\S]*?)<\/cim:Quality61850.oscillatory>/g, obj, "oscillatory", base.to_boolean, sub, context);

            /**
             * Measurement value is beyond a predefined range of value.
             *
             */
            base.parse_element (/<cim:Quality61850.outOfRange>([\s\S]*?)<\/cim:Quality61850.outOfRange>/g, obj, "outOfRange", base.to_boolean, sub, context);

            /**
             * Measurement value is beyond the capability of being  represented properly.
             *
             * For example, a counter value overflows from maximum count back to a value of zero.
             *
             */
            base.parse_element (/<cim:Quality61850.overFlow>([\s\S]*?)<\/cim:Quality61850.overFlow>/g, obj, "overFlow", base.to_boolean, sub, context);

            /**
             * Source gives information related to the origin of a value.
             *
             * The value may be acquired from the process, defaulted or substituted.
             *
             */
            base.parse_element (/<cim:Quality61850.source>([\s\S]*?)<\/cim:Quality61850.source>/g, obj, "source", base.to_string, sub, context);

            /**
             * A correlation function has detected that the value is not consitent with other values.
             *
             * Typically set by a network State Estimator.
             *
             */
            base.parse_element (/<cim:Quality61850.suspect>([\s\S]*?)<\/cim:Quality61850.suspect>/g, obj, "suspect", base.to_boolean, sub, context);

            /**
             * Measurement value is transmitted for test purposes.
             *
             */
            base.parse_element (/<cim:Quality61850.test>([\s\S]*?)<\/cim:Quality61850.test>/g, obj, "test", base.to_boolean, sub, context);

            /**
             * Validity of the measurement value.
             *
             */
            base.parse_element (/<cim:Quality61850.validity>([\s\S]*?)<\/cim:Quality61850.validity>/g, obj, "validity", base.to_string, sub, context);

            bucket = context.parsed.Quality61850;
            if (null == bucket)
                context.parsed.Quality61850 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Specifies one limit value for a Measurement.
         *
         * A Measurement typically has several limits that are kept together by the LimitSet class. The actual meaning and use of a Limit instance (i.e., if it is an alarm or warning limit or if it is a high or low limit) is not captured in the Limit class. However the name of a Limit instance may indicate both meaning and use.
         *
         */
        function parse_Limit (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Limit";
            bucket = context.parsed.Limit;
            if (null == bucket)
                context.parsed.Limit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A Command is a discrete control used for supervisory control.
         *
         */
        function parse_Command (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Control (context, sub);
            obj.cls = "Command";
            /**
             * Normal value for Control.value e.g. used for percentage scaling.
             *
             */
            base.parse_element (/<cim:Command.normalValue>([\s\S]*?)<\/cim:Command.normalValue>/g, obj, "normalValue", base.to_string, sub, context);

            /**
             * The value representing the actuator output.
             *
             */
            base.parse_element (/<cim:Command.value>([\s\S]*?)<\/cim:Command.value>/g, obj, "value", base.to_string, sub, context);

            /**
             * The MeasurementValue that is controlled.
             *
             */
            base.parse_attribute (/<cim:Command.DiscreteValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DiscreteValue", sub, context, true);

            /**
             * The ValueAliasSet used for translation of a Control value to a name.
             *
             */
            base.parse_attribute (/<cim:Command.ValueAliasSet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ValueAliasSet", sub, context, true);

            bucket = context.parsed.Command;
            if (null == bucket)
                context.parsed.Command = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Control is used for supervisory/device control.
         *
         * It represents control outputs that are used to change the state in a process, e.g. close or open breaker, a set point value or a raise lower command.
         *
         */
        function parse_Control (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Control";
            /**
             * Indicates that a client is currently sending control commands that has not completed.
             *
             */
            base.parse_element (/<cim:Control.operationInProgress>([\s\S]*?)<\/cim:Control.operationInProgress>/g, obj, "operationInProgress", base.to_boolean, sub, context);

            /**
             * The last time a control output was sent.
             *
             */
            base.parse_element (/<cim:Control.timeStamp>([\s\S]*?)<\/cim:Control.timeStamp>/g, obj, "timeStamp", base.to_datetime, sub, context);

            /**
             * The unit multiplier of the controlled quantity.
             *
             */
            base.parse_element (/<cim:Control.unitMultiplier>([\s\S]*?)<\/cim:Control.unitMultiplier>/g, obj, "unitMultiplier", base.to_string, sub, context);

            /**
             * The unit of measure of the controlled quantity.
             *
             */
            base.parse_element (/<cim:Control.unitSymbol>([\s\S]*?)<\/cim:Control.unitSymbol>/g, obj, "unitSymbol", base.to_string, sub, context);

            /**
             * Specifies the type of Control, e.g.
             *
             * BreakerOn/Off, GeneratorVoltageSetPoint, TieLineFlow etc. The ControlType.name shall be unique among all specified types and describe the type.
             *
             */
            base.parse_element (/<cim:Control.controlType>([\s\S]*?)<\/cim:Control.controlType>/g, obj, "controlType", base.to_string, sub, context);

            /**
             * Regulating device governed by this control output.
             *
             */
            base.parse_attribute (/<cim:Control.PowerSystemResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemResource", sub, context, true);

            /**
             * The remote point controlling the physical actuator.
             *
             */
            base.parse_attribute (/<cim:Control.RemoteControl\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemoteControl", sub, context, true);

            bucket = context.parsed.Control;
            if (null == bucket)
                context.parsed.Control = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_DiscreteCommand (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Command (context, sub);
            obj.cls = "DiscreteCommand";
            bucket = context.parsed.DiscreteCommand;
            if (null == bucket)
                context.parsed.DiscreteCommand = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Limit values for Accumulator measurements.
         *
         */
        function parse_AccumulatorLimit (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Limit (context, sub);
            obj.cls = "AccumulatorLimit";
            /**
             * The value to supervise against.
             *
             * The value is positive.
             *
             */
            base.parse_element (/<cim:AccumulatorLimit.value>([\s\S]*?)<\/cim:AccumulatorLimit.value>/g, obj, "value", base.to_string, sub, context);

            /**
             * The set of limits.
             *
             */
            base.parse_attribute (/<cim:AccumulatorLimit.LimitSet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LimitSet", sub, context, true);

            bucket = context.parsed.AccumulatorLimit;
            if (null == bucket)
                context.parsed.AccumulatorLimit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * DiscreteValue represents a discrete MeasurementValue.
         *
         */
        function parse_DiscreteValue (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_MeasurementValue (context, sub);
            obj.cls = "DiscreteValue";
            /**
             * The value to supervise.
             *
             */
            base.parse_element (/<cim:DiscreteValue.value>([\s\S]*?)<\/cim:DiscreteValue.value>/g, obj, "value", base.to_string, sub, context);

            /**
             * The Control variable associated with the MeasurementValue.
             *
             */
            base.parse_attribute (/<cim:DiscreteValue.Command\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Command", sub, context, true);

            /**
             * Measurement to which this value is connected.
             *
             */
            base.parse_attribute (/<cim:DiscreteValue.Discrete\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Discrete", sub, context, true);

            bucket = context.parsed.DiscreteValue;
            if (null == bucket)
                context.parsed.DiscreteValue = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An analog control that increase or decrease a set point value with pulses.
         *
         */
        function parse_RaiseLowerCommand (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_AnalogControl (context, sub);
            obj.cls = "RaiseLowerCommand";
            /**
             * The ValueAliasSet used for translation of a Control value to a name.
             *
             */
            base.parse_attribute (/<cim:RaiseLowerCommand.ValueAliasSet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ValueAliasSet", sub, context, true);

            bucket = context.parsed.RaiseLowerCommand;
            if (null == bucket)
                context.parsed.RaiseLowerCommand = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Analog represents an analog Measurement.
         *
         */
        function parse_Analog (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Measurement (context, sub);
            obj.cls = "Analog";
            /**
             * Normal value range maximum for any of the MeasurementValue.values.
             *
             * Used for scaling, e.g. in bar graphs or of telemetered raw values.
             *
             */
            base.parse_element (/<cim:Analog.maxValue>([\s\S]*?)<\/cim:Analog.maxValue>/g, obj, "maxValue", base.to_float, sub, context);

            /**
             * Normal value range minimum for any of the MeasurementValue.values.
             *
             * Used for scaling, e.g. in bar graphs or of telemetered raw values.
             *
             */
            base.parse_element (/<cim:Analog.minValue>([\s\S]*?)<\/cim:Analog.minValue>/g, obj, "minValue", base.to_float, sub, context);

            /**
             * Normal measurement value, e.g., used for percentage calculations.
             *
             */
            base.parse_element (/<cim:Analog.normalValue>([\s\S]*?)<\/cim:Analog.normalValue>/g, obj, "normalValue", base.to_float, sub, context);

            /**
             * If true then this measurement is an active power, reactive power or current with the convention that a positive value measured at the Terminal means power is flowing into the related PowerSystemResource.
             *
             */
            base.parse_element (/<cim:Analog.positiveFlowIn>([\s\S]*?)<\/cim:Analog.positiveFlowIn>/g, obj, "positiveFlowIn", base.to_boolean, sub, context);

            bucket = context.parsed.Analog;
            if (null == bucket)
                context.parsed.Analog = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * StringMeasurementValue represents a measurement value of type string.
         *
         */
        function parse_StringMeasurementValue (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_MeasurementValue (context, sub);
            obj.cls = "StringMeasurementValue";
            /**
             * The value to supervise.
             *
             */
            base.parse_element (/<cim:StringMeasurementValue.value>([\s\S]*?)<\/cim:StringMeasurementValue.value>/g, obj, "value", base.to_string, sub, context);

            /**
             * Measurement to which this value is connected.
             *
             */
            base.parse_attribute (/<cim:StringMeasurementValue.StringMeasurement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StringMeasurement", sub, context, true);

            bucket = context.parsed.StringMeasurementValue;
            if (null == bucket)
                context.parsed.StringMeasurementValue = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Measurement quality flags.
         *
         * Bits 0-10 are defined for substation automation in draft IEC 61850 part 7-3. Bits 11-15 are reserved for future expansion by that document. Bits 16-31 are reserved for EMS applications.
         *
         */
        function parse_MeasurementValueQuality (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Quality61850 (context, sub);
            obj.cls = "MeasurementValueQuality";
            /**
             * A MeasurementValue has a MeasurementValueQuality associated with it.
             *
             */
            base.parse_attribute (/<cim:MeasurementValueQuality.MeasurementValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MeasurementValue", sub, context, true);

            bucket = context.parsed.MeasurementValueQuality;
            if (null == bucket)
                context.parsed.MeasurementValueQuality = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An analog control that issue a set point value.
         *
         */
        function parse_SetPoint (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_AnalogControl (context, sub);
            obj.cls = "SetPoint";
            /**
             * Normal value for Control.value e.g. used for percentage scaling.
             *
             */
            base.parse_element (/<cim:SetPoint.normalValue>([\s\S]*?)<\/cim:SetPoint.normalValue>/g, obj, "normalValue", base.to_float, sub, context);

            /**
             * The value representing the actuator output.
             *
             */
            base.parse_element (/<cim:SetPoint.value>([\s\S]*?)<\/cim:SetPoint.value>/g, obj, "value", base.to_float, sub, context);

            bucket = context.parsed.SetPoint;
            if (null == bucket)
                context.parsed.SetPoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * MeasurementValueSource describes the alternative sources updating a MeasurementValue.
         *
         * User conventions for how to use the MeasurementValueSource attributes are described in the introduction to IEC 61970-301.
         *
         */
        function parse_MeasurementValueSource (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "MeasurementValueSource";
            bucket = context.parsed.MeasurementValueSource;
            if (null == bucket)
                context.parsed.MeasurementValueSource = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * AccumulatorValue represents an accumulated (counted) MeasurementValue.
         *
         */
        function parse_AccumulatorValue (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_MeasurementValue (context, sub);
            obj.cls = "AccumulatorValue";
            /**
             * The value to supervise.
             *
             * The value is positive.
             *
             */
            base.parse_element (/<cim:AccumulatorValue.value>([\s\S]*?)<\/cim:AccumulatorValue.value>/g, obj, "value", base.to_string, sub, context);

            /**
             * Measurement to which this value is connected.
             *
             */
            base.parse_attribute (/<cim:AccumulatorValue.Accumulator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Accumulator", sub, context, true);

            /**
             * The command that reset the accumulator value.
             *
             */
            base.parse_attribute (/<cim:AccumulatorValue.AccumulatorReset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AccumulatorReset", sub, context, true);

            bucket = context.parsed.AccumulatorValue;
            if (null == bucket)
                context.parsed.AccumulatorValue = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Accumulator represents an accumulated (counted) Measurement, e.g. an energy value.
         *
         */
        function parse_Accumulator (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Measurement (context, sub);
            obj.cls = "Accumulator";
            /**
             * Normal value range maximum for any of the MeasurementValue.values.
             *
             * Used for scaling, e.g. in bar graphs or of telemetered raw values.
             *
             */
            base.parse_element (/<cim:Accumulator.maxValue>([\s\S]*?)<\/cim:Accumulator.maxValue>/g, obj, "maxValue", base.to_string, sub, context);

            bucket = context.parsed.Accumulator;
            if (null == bucket)
                context.parsed.Accumulator = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * StringMeasurement represents a measurement with values of type string.
         *
         */
        function parse_StringMeasurement (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Measurement (context, sub);
            obj.cls = "StringMeasurement";
            bucket = context.parsed.StringMeasurement;
            if (null == bucket)
                context.parsed.StringMeasurement = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Limit values for Analog measurements.
         *
         */
        function parse_AnalogLimit (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Limit (context, sub);
            obj.cls = "AnalogLimit";
            /**
             * The value to supervise against.
             *
             */
            base.parse_element (/<cim:AnalogLimit.value>([\s\S]*?)<\/cim:AnalogLimit.value>/g, obj, "value", base.to_float, sub, context);

            /**
             * The set of limits.
             *
             */
            base.parse_attribute (/<cim:AnalogLimit.LimitSet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LimitSet", sub, context, true);

            bucket = context.parsed.AnalogLimit;
            if (null == bucket)
                context.parsed.AnalogLimit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * AnalogValue represents an analog MeasurementValue.
         *
         */
        function parse_AnalogValue (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_MeasurementValue (context, sub);
            obj.cls = "AnalogValue";
            /**
             * The value to supervise.
             *
             */
            base.parse_element (/<cim:AnalogValue.value>([\s\S]*?)<\/cim:AnalogValue.value>/g, obj, "value", base.to_float, sub, context);

            /**
             * Measurement to which this value is connected.
             *
             */
            base.parse_attribute (/<cim:AnalogValue.Analog\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Analog", sub, context, true);

            /**
             * The Control variable associated with the MeasurementValue.
             *
             */
            base.parse_attribute (/<cim:AnalogValue.AnalogControl\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AnalogControl", sub, context, true);

            bucket = context.parsed.AnalogValue;
            if (null == bucket)
                context.parsed.AnalogValue = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A Measurement represents any measured, calculated or non-measured non-calculated quantity.
         *
         * Any piece of equipment may contain Measurements, e.g. a substation may have temperature measurements and door open indications, a transformer may have oil temperature and tank pressure measurements, a bay may contain a number of power flow measurements and a Breaker may contain a switch status measurement.
         *
         */
        function parse_Measurement (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Measurement";
            /**
             * Specifies the type of measurement.
             *
             * For example, this specifies if the measurement represents an indoor temperature, outdoor temperature, bus voltage, line flow, etc.
             *
             */
            base.parse_element (/<cim:Measurement.measurementType>([\s\S]*?)<\/cim:Measurement.measurementType>/g, obj, "measurementType", base.to_string, sub, context);

            /**
             * Indicates to which phases the measurement applies and avoids the need to use 'measurementType' to also encode phase information (which would explode the types).
             *
             * The phase information in Measurement, along with 'measurementType' and 'phases' uniquely defines a Measurement for a device, based on normal network phase. Their meaning will not change when the computed energizing phasing is changed due to jumpers or other reasons.
             *
             */
            base.parse_element (/<cim:Measurement.phases>([\s\S]*?)<\/cim:Measurement.phases>/g, obj, "phases", base.to_string, sub, context);

            /**
             * The unit multiplier of the measured quantity.
             *
             */
            base.parse_element (/<cim:Measurement.unitMultiplier>([\s\S]*?)<\/cim:Measurement.unitMultiplier>/g, obj, "unitMultiplier", base.to_string, sub, context);

            /**
             * The unit of measure of the measured quantity.
             *
             */
            base.parse_element (/<cim:Measurement.unitSymbol>([\s\S]*?)<\/cim:Measurement.unitSymbol>/g, obj, "unitSymbol", base.to_string, sub, context);

            /**
             * One or more measurements may be associated with a terminal in the network.
             *
             */
            base.parse_attribute (/<cim:Measurement.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context, true);

            base.parse_attribute (/<cim:Measurement.Asset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context, true);

            /**
             * The power system resource that contains the measurement.
             *
             */
            base.parse_attribute (/<cim:Measurement.PowerSystemResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemResource", sub, context, true);

            bucket = context.parsed.Measurement;
            if (null == bucket)
                context.parsed.Measurement = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This command reset the counter value to zero.
         *
         */
        function parse_AccumulatorReset (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Control (context, sub);
            obj.cls = "AccumulatorReset";
            /**
             * The accumulator value that is reset by the command.
             *
             */
            base.parse_attribute (/<cim:AccumulatorReset.AccumulatorValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AccumulatorValue", sub, context, true);

            bucket = context.parsed.AccumulatorReset;
            if (null == bucket)
                context.parsed.AccumulatorReset = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Discrete represents a discrete Measurement, i.e. a Measurement representing discrete values, e.g. a Breaker position.
         *
         */
        function parse_Discrete (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Measurement (context, sub);
            obj.cls = "Discrete";
            /**
             * Normal value range maximum for any of the MeasurementValue.values.
             *
             * Used for scaling, e.g. in bar graphs or of telemetered raw values.
             *
             */
            base.parse_element (/<cim:Discrete.maxValue>([\s\S]*?)<\/cim:Discrete.maxValue>/g, obj, "maxValue", base.to_string, sub, context);

            /**
             * Normal value range minimum for any of the MeasurementValue.values.
             *
             * Used for scaling, e.g. in bar graphs or of telemetered raw values.
             *
             */
            base.parse_element (/<cim:Discrete.minValue>([\s\S]*?)<\/cim:Discrete.minValue>/g, obj, "minValue", base.to_string, sub, context);

            /**
             * Normal measurement value, e.g., used for percentage calculations.
             *
             */
            base.parse_element (/<cim:Discrete.normalValue>([\s\S]*?)<\/cim:Discrete.normalValue>/g, obj, "normalValue", base.to_string, sub, context);

            /**
             * The ValueAliasSet used for translation of a MeasurementValue.value to a name.
             *
             */
            base.parse_attribute (/<cim:Discrete.ValueAliasSet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ValueAliasSet", sub, context, true);

            bucket = context.parsed.Discrete;
            if (null == bucket)
                context.parsed.Discrete = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Specifies a set of Limits that are associated with a Measurement.
         *
         * A Measurement may have several LimitSets corresponding to seasonal or other changing conditions. The condition is captured in the name and description attributes. The same LimitSet may be used for several Measurements. In particular percentage limits are used this way.
         *
         */
        function parse_LimitSet (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "LimitSet";
            /**
             * Tells if the limit values are in percentage of normalValue or the specified Unit for Measurements and Controls.
             *
             */
            base.parse_element (/<cim:LimitSet.isPercentageLimits>([\s\S]*?)<\/cim:LimitSet.isPercentageLimits>/g, obj, "isPercentageLimits", base.to_boolean, sub, context);

            bucket = context.parsed.LimitSet;
            if (null == bucket)
                context.parsed.LimitSet = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Describes the translation of one particular value into a name, e.g. 1 as "Open".
         *
         */
        function parse_ValueToAlias (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ValueToAlias";
            /**
             * The value that is mapped.
             *
             */
            base.parse_element (/<cim:ValueToAlias.value>([\s\S]*?)<\/cim:ValueToAlias.value>/g, obj, "value", base.to_string, sub, context);

            /**
             * The ValueAliasSet having the ValueToAlias mappings.
             *
             */
            base.parse_attribute (/<cim:ValueToAlias.ValueAliasSet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ValueAliasSet", sub, context, true);

            bucket = context.parsed.ValueToAlias;
            if (null == bucket)
                context.parsed.ValueToAlias = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An AccumulatorLimitSet specifies a set of Limits that are associated with an Accumulator measurement.
         *
         */
        function parse_AccumulatorLimitSet (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_LimitSet (context, sub);
            obj.cls = "AccumulatorLimitSet";
            bucket = context.parsed.AccumulatorLimitSet;
            if (null == bucket)
                context.parsed.AccumulatorLimitSet = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_AnalogControl: parse_AnalogControl,
                parse_AccumulatorReset: parse_AccumulatorReset,
                parse_Validity: parse_Validity,
                parse_Accumulator: parse_Accumulator,
                parse_ValueToAlias: parse_ValueToAlias,
                parse_AccumulatorValue: parse_AccumulatorValue,
                parse_Analog: parse_Analog,
                parse_AnalogValue: parse_AnalogValue,
                parse_StringMeasurement: parse_StringMeasurement,
                parse_MeasurementValueSource: parse_MeasurementValueSource,
                parse_DiscreteValue: parse_DiscreteValue,
                parse_Quality61850: parse_Quality61850,
                parse_MeasurementValueQuality: parse_MeasurementValueQuality,
                parse_ValueAliasSet: parse_ValueAliasSet,
                parse_Command: parse_Command,
                parse_Limit: parse_Limit,
                parse_AccumulatorLimitSet: parse_AccumulatorLimitSet,
                parse_AnalogLimitSet: parse_AnalogLimitSet,
                parse_Control: parse_Control,
                parse_AnalogLimit: parse_AnalogLimit,
                parse_LimitSet: parse_LimitSet,
                parse_SetPoint: parse_SetPoint,
                parse_MeasurementValue: parse_MeasurementValue,
                parse_RaiseLowerCommand: parse_RaiseLowerCommand,
                parse_Discrete: parse_Discrete,
                parse_DiscreteCommand: parse_DiscreteCommand,
                parse_Measurement: parse_Measurement,
                parse_AccumulatorLimit: parse_AccumulatorLimit,
                parse_StringMeasurementValue: parse_StringMeasurementValue
            }
        );
    }
);