define
(
    ["model/base", "model/Core"],
    /**
     * Contains entities to model information used by Supervisory Control and Data Acquisition (SCADA) applications.
     *
     * Supervisory control supports operator control of equipment, such as opening or closing a breaker. Data acquisition gathers telemetered data from various sources.  The subtypes of the Telemetry entity deliberately match the UCA and IEC 61850 definitions.
     *
     */
    function (base, Core)
    {

        /**
         * Remote controls are ouputs that are sent by the remote unit to actuators in the process.
         *
         */
        function parse_RemoteControl (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_RemotePoint (context, sub);
            obj.cls = "RemoteControl";
            /**
             * The maximum set point value accepted by the remote control point.
             *
             */
            base.parse_element (/<cim:RemoteControl.actuatorMaximum>([\s\S]*?)<\/cim:RemoteControl.actuatorMaximum>/g, obj, "actuatorMaximum", base.to_float, sub, context);

            /**
             * The minimum set point value accepted by the remote control point.
             *
             */
            base.parse_element (/<cim:RemoteControl.actuatorMinimum>([\s\S]*?)<\/cim:RemoteControl.actuatorMinimum>/g, obj, "actuatorMinimum", base.to_float, sub, context);

            /**
             * Set to true if the actuator is remotely controlled.
             *
             */
            base.parse_element (/<cim:RemoteControl.remoteControlled>([\s\S]*?)<\/cim:RemoteControl.remoteControlled>/g, obj, "remoteControlled", base.to_boolean, sub, context);

            /**
             * The Control for the RemoteControl point.
             *
             */
            base.parse_attribute (/<cim:RemoteControl.Control\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Control", sub, context, true);

            bucket = context.parsed.RemoteControl;
            if (null == bucket)
                context.parsed.RemoteControl = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Type of remote unit.
         *
         */
        function parse_RemoteUnitType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "RemoteUnitType";
            /**
             * Remote terminal unit.
             *
             */
            base.parse_element (/<cim:RemoteUnitType.RTU>([\s\S]*?)<\/cim:RemoteUnitType.RTU>/g, obj, "RTU", base.to_string, sub, context);

            /**
             * Substation control system.
             *
             */
            base.parse_element (/<cim:RemoteUnitType.SubstationControlSystem>([\s\S]*?)<\/cim:RemoteUnitType.SubstationControlSystem>/g, obj, "SubstationControlSystem", base.to_string, sub, context);

            /**
             * Control center.
             *
             */
            base.parse_element (/<cim:RemoteUnitType.ControlCenter>([\s\S]*?)<\/cim:RemoteUnitType.ControlCenter>/g, obj, "ControlCenter", base.to_string, sub, context);

            /**
             * Intelligent electronic device (IED).
             *
             */
            base.parse_element (/<cim:RemoteUnitType.IED>([\s\S]*?)<\/cim:RemoteUnitType.IED>/g, obj, "IED", base.to_string, sub, context);

            bucket = context.parsed.RemoteUnitType;
            if (null == bucket)
                context.parsed.RemoteUnitType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For a RTU remote points correspond to telemetered values or control outputs.
         *
         * Other units (e.g. control centers) usually also contain calculated values.
         *
         */
        function parse_RemotePoint (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "RemotePoint";
            /**
             * Remote unit this point belongs to.
             *
             */
            base.parse_attribute (/<cim:RemotePoint.RemoteUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemoteUnit", sub, context, true);

            bucket = context.parsed.RemotePoint;
            if (null == bucket)
                context.parsed.RemotePoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A remote unit can be a RTU, IED, substation control system, control center etc.
         *
         * The communication with the remote unit can be through various standard protocols (e.g. IEC 61870, IEC 61850) or non standard protocols (e.g. DNP, RP570 etc.). A remote unit contain remote data points that might be telemetered, collected or calculated. The RemoteUnit class inherit PowerSystemResource. The intention is to allow RemotUnits to have Measurements. These Measurements can be used to model unit status as operational, out of service, unit failure etc.
         *
         */
        function parse_RemoteUnit (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "RemoteUnit";
            /**
             * Type of remote unit.
             *
             */
            base.parse_element (/<cim:RemoteUnit.remoteUnitType>([\s\S]*?)<\/cim:RemoteUnit.remoteUnitType>/g, obj, "remoteUnitType", base.to_string, sub, context);

            bucket = context.parsed.RemoteUnit;
            if (null == bucket)
                context.parsed.RemoteUnit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Remote sources are state variables that are telemetered or calculated within the remote unit.
         *
         */
        function parse_RemoteSource (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_RemotePoint (context, sub);
            obj.cls = "RemoteSource";
            /**
             * The smallest change in value to be reported.
             *
             */
            base.parse_element (/<cim:RemoteSource.deadband>([\s\S]*?)<\/cim:RemoteSource.deadband>/g, obj, "deadband", base.to_float, sub, context);

            /**
             * The time interval between scans.
             *
             */
            base.parse_element (/<cim:RemoteSource.scanInterval>([\s\S]*?)<\/cim:RemoteSource.scanInterval>/g, obj, "scanInterval", base.to_string, sub, context);

            /**
             * The maximum value the telemetry item can return.
             *
             */
            base.parse_element (/<cim:RemoteSource.sensorMaximum>([\s\S]*?)<\/cim:RemoteSource.sensorMaximum>/g, obj, "sensorMaximum", base.to_float, sub, context);

            /**
             * The minimum value the telemetry item can return.
             *
             */
            base.parse_element (/<cim:RemoteSource.sensorMinimum>([\s\S]*?)<\/cim:RemoteSource.sensorMinimum>/g, obj, "sensorMinimum", base.to_float, sub, context);

            /**
             * Link to the physical telemetered point associated with this measurement.
             *
             */
            base.parse_attribute (/<cim:RemoteSource.MeasurementValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MeasurementValue", sub, context, true);

            bucket = context.parsed.RemoteSource;
            if (null == bucket)
                context.parsed.RemoteSource = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Source gives information related to the origin of a value.
         *
         */
        function parse_Source (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "Source";
            /**
             * The value is provided by input from the process I/O or being calculated from some function.
             *
             */
            base.parse_element (/<cim:Source.PROCESS>([\s\S]*?)<\/cim:Source.PROCESS>/g, obj, "PROCESS", base.to_string, sub, context);

            /**
             * The value contains a default value.
             *
             */
            base.parse_element (/<cim:Source.DEFAULTED>([\s\S]*?)<\/cim:Source.DEFAULTED>/g, obj, "DEFAULTED", base.to_string, sub, context);

            /**
             * The value is provided by input of an operator or by an automatic source.
             *
             */
            base.parse_element (/<cim:Source.SUBSTITUTED>([\s\S]*?)<\/cim:Source.SUBSTITUTED>/g, obj, "SUBSTITUTED", base.to_string, sub, context);

            bucket = context.parsed.Source;
            if (null == bucket)
                context.parsed.Source = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The connection to remote units is through one or more communication links.
         *
         * Reduntant links may exist. The CommunicationLink class inherit PowerSystemResource. The intention is to allow CommunicationLinks to have Measurements. These Measurements can be used to model link status as operational, out of service, unit failure etc.
         *
         */
        function parse_CommunicationLink (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "CommunicationLink";
            bucket = context.parsed.CommunicationLink;
            if (null == bucket)
                context.parsed.CommunicationLink = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_RemoteUnitType: parse_RemoteUnitType,
                parse_RemoteUnit: parse_RemoteUnit,
                parse_RemoteSource: parse_RemoteSource,
                parse_RemotePoint: parse_RemotePoint,
                parse_RemoteControl: parse_RemoteControl,
                parse_Source: parse_Source,
                parse_CommunicationLink: parse_CommunicationLink
            }
        );
    }
);