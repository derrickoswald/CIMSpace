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
            base.parse_element (/<cim:RemoteControl.actuatorMaximum>([\s\S]*?)<\/cim:RemoteControl.actuatorMaximum>/g, obj, "actuatorMaximum", base.to_float, sub, context);
            base.parse_element (/<cim:RemoteControl.actuatorMinimum>([\s\S]*?)<\/cim:RemoteControl.actuatorMinimum>/g, obj, "actuatorMinimum", base.to_float, sub, context);
            base.parse_element (/<cim:RemoteControl.remoteControlled>([\s\S]*?)<\/cim:RemoteControl.remoteControlled>/g, obj, "remoteControlled", base.to_boolean, sub, context);
            base.parse_attribute (/<cim:RemoteControl.Control\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Control", sub, context);
            bucket = context.parsed.RemoteControl;
            if (null == bucket)
                context.parsed.RemoteControl = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_RemoteControl (obj, exporters, full)
        {
            var fields = exporters["RemotePoint"](obj, exporters, false);

            base.export_element (obj, "RemoteControl", "actuatorMaximum", base.from_float, fields);
            base.export_element (obj, "RemoteControl", "actuatorMinimum", base.from_float, fields);
            base.export_element (obj, "RemoteControl", "remoteControlled", base.from_boolean, fields);
            base.export_attribute (obj, "RemoteControl", "Control", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:RemoteUnitType.RTU>([\s\S]*?)<\/cim:RemoteUnitType.RTU>/g, obj, "RTU", base.to_string, sub, context);
            base.parse_element (/<cim:RemoteUnitType.SubstationControlSystem>([\s\S]*?)<\/cim:RemoteUnitType.SubstationControlSystem>/g, obj, "SubstationControlSystem", base.to_string, sub, context);
            base.parse_element (/<cim:RemoteUnitType.ControlCenter>([\s\S]*?)<\/cim:RemoteUnitType.ControlCenter>/g, obj, "ControlCenter", base.to_string, sub, context);
            base.parse_element (/<cim:RemoteUnitType.IED>([\s\S]*?)<\/cim:RemoteUnitType.IED>/g, obj, "IED", base.to_string, sub, context);
            bucket = context.parsed.RemoteUnitType;
            if (null == bucket)
                context.parsed.RemoteUnitType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_RemoteUnitType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "RemoteUnitType", "RTU", base.from_string, fields);
            base.export_element (obj, "RemoteUnitType", "SubstationControlSystem", base.from_string, fields);
            base.export_element (obj, "RemoteUnitType", "ControlCenter", base.from_string, fields);
            base.export_element (obj, "RemoteUnitType", "IED", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_attribute (/<cim:RemotePoint.RemoteUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemoteUnit", sub, context);
            bucket = context.parsed.RemotePoint;
            if (null == bucket)
                context.parsed.RemotePoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_RemotePoint (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_attribute (obj, "RemotePoint", "RemoteUnit", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:RemoteUnit.remoteUnitType>([\s\S]*?)<\/cim:RemoteUnit.remoteUnitType>/g, obj, "remoteUnitType", base.to_string, sub, context);
            bucket = context.parsed.RemoteUnit;
            if (null == bucket)
                context.parsed.RemoteUnit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_RemoteUnit (obj, exporters, full)
        {
            var fields = exporters["PowerSystemResource"](obj, exporters, false);

            base.export_element (obj, "RemoteUnit", "remoteUnitType", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:RemoteSource.deadband>([\s\S]*?)<\/cim:RemoteSource.deadband>/g, obj, "deadband", base.to_float, sub, context);
            base.parse_element (/<cim:RemoteSource.scanInterval>([\s\S]*?)<\/cim:RemoteSource.scanInterval>/g, obj, "scanInterval", base.to_string, sub, context);
            base.parse_element (/<cim:RemoteSource.sensorMaximum>([\s\S]*?)<\/cim:RemoteSource.sensorMaximum>/g, obj, "sensorMaximum", base.to_float, sub, context);
            base.parse_element (/<cim:RemoteSource.sensorMinimum>([\s\S]*?)<\/cim:RemoteSource.sensorMinimum>/g, obj, "sensorMinimum", base.to_float, sub, context);
            base.parse_attribute (/<cim:RemoteSource.MeasurementValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MeasurementValue", sub, context);
            bucket = context.parsed.RemoteSource;
            if (null == bucket)
                context.parsed.RemoteSource = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_RemoteSource (obj, exporters, full)
        {
            var fields = exporters["RemotePoint"](obj, exporters, false);

            base.export_element (obj, "RemoteSource", "deadband", base.from_float, fields);
            base.export_element (obj, "RemoteSource", "scanInterval", base.from_string, fields);
            base.export_element (obj, "RemoteSource", "sensorMaximum", base.from_float, fields);
            base.export_element (obj, "RemoteSource", "sensorMinimum", base.from_float, fields);
            base.export_attribute (obj, "RemoteSource", "MeasurementValue", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:Source.PROCESS>([\s\S]*?)<\/cim:Source.PROCESS>/g, obj, "PROCESS", base.to_string, sub, context);
            base.parse_element (/<cim:Source.DEFAULTED>([\s\S]*?)<\/cim:Source.DEFAULTED>/g, obj, "DEFAULTED", base.to_string, sub, context);
            base.parse_element (/<cim:Source.SUBSTITUTED>([\s\S]*?)<\/cim:Source.SUBSTITUTED>/g, obj, "SUBSTITUTED", base.to_string, sub, context);
            bucket = context.parsed.Source;
            if (null == bucket)
                context.parsed.Source = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Source (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "Source", "PROCESS", base.from_string, fields);
            base.export_element (obj, "Source", "DEFAULTED", base.from_string, fields);
            base.export_element (obj, "Source", "SUBSTITUTED", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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

        function export_CommunicationLink (obj, exporters, full)
        {
            var fields = exporters["PowerSystemResource"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                export_RemoteUnit: export_RemoteUnit,
                parse_RemoteSource: parse_RemoteSource,
                parse_RemoteUnitType: parse_RemoteUnitType,
                parse_RemoteControl: parse_RemoteControl,
                export_Source: export_Source,
                parse_Source: parse_Source,
                parse_CommunicationLink: parse_CommunicationLink,
                export_RemotePoint: export_RemotePoint,
                parse_RemoteUnit: parse_RemoteUnit,
                parse_RemotePoint: parse_RemotePoint,
                export_RemoteSource: export_RemoteSource,
                export_RemoteControl: export_RemoteControl,
                export_RemoteUnitType: export_RemoteUnitType,
                export_CommunicationLink: export_CommunicationLink
            }
        );
    }
);