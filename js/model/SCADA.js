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
         * Type of remote unit.
         *
         */
        class RemoteUnitType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RemoteUnitType;
                if (null == bucket)
                   cim_data.RemoteUnitType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RemoteUnitType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "RemoteUnitType";
                base.parse_element (/<cim:RemoteUnitType.RTU>([\s\S]*?)<\/cim:RemoteUnitType.RTU>/g, obj, "RTU", base.to_string, sub, context);
                base.parse_element (/<cim:RemoteUnitType.SubstationControlSystem>([\s\S]*?)<\/cim:RemoteUnitType.SubstationControlSystem>/g, obj, "SubstationControlSystem", base.to_string, sub, context);
                base.parse_element (/<cim:RemoteUnitType.ControlCenter>([\s\S]*?)<\/cim:RemoteUnitType.ControlCenter>/g, obj, "ControlCenter", base.to_string, sub, context);
                base.parse_element (/<cim:RemoteUnitType.IED>([\s\S]*?)<\/cim:RemoteUnitType.IED>/g, obj, "IED", base.to_string, sub, context);

                var bucket = context.parsed.RemoteUnitType;
                if (null == bucket)
                   context.parsed.RemoteUnitType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "RemoteUnitType", "RTU", base.from_string, fields);
                base.export_element (obj, "RemoteUnitType", "SubstationControlSystem", base.from_string, fields);
                base.export_element (obj, "RemoteUnitType", "ControlCenter", base.from_string, fields);
                base.export_element (obj, "RemoteUnitType", "IED", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#RemoteUnitType_collapse" aria-expanded="true" aria-controls="RemoteUnitType_collapse">RemoteUnitType</a>
<div id="RemoteUnitType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#RTU}}<div><b>RTU</b>: {{RTU}}</div>{{/RTU}}
{{#SubstationControlSystem}}<div><b>SubstationControlSystem</b>: {{SubstationControlSystem}}</div>{{/SubstationControlSystem}}
{{#ControlCenter}}<div><b>ControlCenter</b>: {{ControlCenter}}</div>{{/ControlCenter}}
{{#IED}}<div><b>IED</b>: {{IED}}</div>{{/IED}}
</div>
`
                );
           }        }

        /**
         * For a RTU remote points correspond to telemetered values or control outputs.
         *
         * Other units (e.g. control centers) usually also contain calculated values.
         *
         */
        class RemotePoint extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RemotePoint;
                if (null == bucket)
                   cim_data.RemotePoint = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RemotePoint[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "RemotePoint";
                base.parse_attribute (/<cim:RemotePoint.RemoteUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemoteUnit", sub, context);

                var bucket = context.parsed.RemotePoint;
                if (null == bucket)
                   context.parsed.RemotePoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "RemotePoint", "RemoteUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#RemotePoint_collapse" aria-expanded="true" aria-controls="RemotePoint_collapse">RemotePoint</a>
<div id="RemotePoint_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#RemoteUnit}}<div><b>RemoteUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RemoteUnit}}&quot;);})'>{{RemoteUnit}}</a></div>{{/RemoteUnit}}
</div>
`
                );
           }        }

        /**
         * A remote unit can be a RTU, IED, substation control system, control center etc.
         *
         * The communication with the remote unit can be through various standard protocols (e.g. IEC 61870, IEC 61850) or non standard protocols (e.g. DNP, RP570 etc.). A remote unit contain remote data points that might be telemetered, collected or calculated. The RemoteUnit class inherit PowerSystemResource. The intention is to allow RemotUnits to have Measurements. These Measurements can be used to model unit status as operational, out of service, unit failure etc.
         *
         */
        class RemoteUnit extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RemoteUnit;
                if (null == bucket)
                   cim_data.RemoteUnit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RemoteUnit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "RemoteUnit";
                base.parse_element (/<cim:RemoteUnit.remoteUnitType>([\s\S]*?)<\/cim:RemoteUnit.remoteUnitType>/g, obj, "remoteUnitType", base.to_string, sub, context);

                var bucket = context.parsed.RemoteUnit;
                if (null == bucket)
                   context.parsed.RemoteUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "RemoteUnit", "remoteUnitType", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#RemoteUnit_collapse" aria-expanded="true" aria-controls="RemoteUnit_collapse">RemoteUnit</a>
<div id="RemoteUnit_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.PowerSystemResource.prototype.template.call (this) +
`
{{#remoteUnitType}}<div><b>remoteUnitType</b>: {{remoteUnitType}}</div>{{/remoteUnitType}}
</div>
`
                );
           }        }

        /**
         * Source gives information related to the origin of a value.
         *
         */
        class Source extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Source;
                if (null == bucket)
                   cim_data.Source = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Source[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Source";
                base.parse_element (/<cim:Source.PROCESS>([\s\S]*?)<\/cim:Source.PROCESS>/g, obj, "PROCESS", base.to_string, sub, context);
                base.parse_element (/<cim:Source.DEFAULTED>([\s\S]*?)<\/cim:Source.DEFAULTED>/g, obj, "DEFAULTED", base.to_string, sub, context);
                base.parse_element (/<cim:Source.SUBSTITUTED>([\s\S]*?)<\/cim:Source.SUBSTITUTED>/g, obj, "SUBSTITUTED", base.to_string, sub, context);

                var bucket = context.parsed.Source;
                if (null == bucket)
                   context.parsed.Source = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Source", "PROCESS", base.from_string, fields);
                base.export_element (obj, "Source", "DEFAULTED", base.from_string, fields);
                base.export_element (obj, "Source", "SUBSTITUTED", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Source_collapse" aria-expanded="true" aria-controls="Source_collapse">Source</a>
<div id="Source_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#PROCESS}}<div><b>PROCESS</b>: {{PROCESS}}</div>{{/PROCESS}}
{{#DEFAULTED}}<div><b>DEFAULTED</b>: {{DEFAULTED}}</div>{{/DEFAULTED}}
{{#SUBSTITUTED}}<div><b>SUBSTITUTED</b>: {{SUBSTITUTED}}</div>{{/SUBSTITUTED}}
</div>
`
                );
           }        }

        /**
         * The connection to remote units is through one or more communication links.
         *
         * Reduntant links may exist. The CommunicationLink class inherit PowerSystemResource. The intention is to allow CommunicationLinks to have Measurements. These Measurements can be used to model link status as operational, out of service, unit failure etc.
         *
         */
        class CommunicationLink extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CommunicationLink;
                if (null == bucket)
                   cim_data.CommunicationLink = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CommunicationLink[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "CommunicationLink";

                var bucket = context.parsed.CommunicationLink;
                if (null == bucket)
                   context.parsed.CommunicationLink = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#CommunicationLink_collapse" aria-expanded="true" aria-controls="CommunicationLink_collapse">CommunicationLink</a>
<div id="CommunicationLink_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.PowerSystemResource.prototype.template.call (this) +
`
</div>
`
                );
           }        }

        /**
         * Remote sources are state variables that are telemetered or calculated within the remote unit.
         *
         */
        class RemoteSource extends RemotePoint
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RemoteSource;
                if (null == bucket)
                   cim_data.RemoteSource = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RemoteSource[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = RemotePoint.prototype.parse.call (this, context, sub);
                obj.cls = "RemoteSource";
                base.parse_element (/<cim:RemoteSource.deadband>([\s\S]*?)<\/cim:RemoteSource.deadband>/g, obj, "deadband", base.to_float, sub, context);
                base.parse_element (/<cim:RemoteSource.scanInterval>([\s\S]*?)<\/cim:RemoteSource.scanInterval>/g, obj, "scanInterval", base.to_string, sub, context);
                base.parse_element (/<cim:RemoteSource.sensorMaximum>([\s\S]*?)<\/cim:RemoteSource.sensorMaximum>/g, obj, "sensorMaximum", base.to_float, sub, context);
                base.parse_element (/<cim:RemoteSource.sensorMinimum>([\s\S]*?)<\/cim:RemoteSource.sensorMinimum>/g, obj, "sensorMinimum", base.to_float, sub, context);
                base.parse_attribute (/<cim:RemoteSource.MeasurementValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MeasurementValue", sub, context);

                var bucket = context.parsed.RemoteSource;
                if (null == bucket)
                   context.parsed.RemoteSource = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = RemotePoint.prototype.export.call (this, obj, false);

                base.export_element (obj, "RemoteSource", "deadband", base.from_float, fields);
                base.export_element (obj, "RemoteSource", "scanInterval", base.from_string, fields);
                base.export_element (obj, "RemoteSource", "sensorMaximum", base.from_float, fields);
                base.export_element (obj, "RemoteSource", "sensorMinimum", base.from_float, fields);
                base.export_attribute (obj, "RemoteSource", "MeasurementValue", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#RemoteSource_collapse" aria-expanded="true" aria-controls="RemoteSource_collapse">RemoteSource</a>
<div id="RemoteSource_collapse" class="collapse in" style="margin-left: 10px;">
`
      + RemotePoint.prototype.template.call (this) +
`
{{#deadband}}<div><b>deadband</b>: {{deadband}}</div>{{/deadband}}
{{#scanInterval}}<div><b>scanInterval</b>: {{scanInterval}}</div>{{/scanInterval}}
{{#sensorMaximum}}<div><b>sensorMaximum</b>: {{sensorMaximum}}</div>{{/sensorMaximum}}
{{#sensorMinimum}}<div><b>sensorMinimum</b>: {{sensorMinimum}}</div>{{/sensorMinimum}}
{{#MeasurementValue}}<div><b>MeasurementValue</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MeasurementValue}}&quot;);})'>{{MeasurementValue}}</a></div>{{/MeasurementValue}}
</div>
`
                );
           }        }

        /**
         * Remote controls are ouputs that are sent by the remote unit to actuators in the process.
         *
         */
        class RemoteControl extends RemotePoint
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RemoteControl;
                if (null == bucket)
                   cim_data.RemoteControl = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RemoteControl[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = RemotePoint.prototype.parse.call (this, context, sub);
                obj.cls = "RemoteControl";
                base.parse_element (/<cim:RemoteControl.actuatorMaximum>([\s\S]*?)<\/cim:RemoteControl.actuatorMaximum>/g, obj, "actuatorMaximum", base.to_float, sub, context);
                base.parse_element (/<cim:RemoteControl.actuatorMinimum>([\s\S]*?)<\/cim:RemoteControl.actuatorMinimum>/g, obj, "actuatorMinimum", base.to_float, sub, context);
                base.parse_element (/<cim:RemoteControl.remoteControlled>([\s\S]*?)<\/cim:RemoteControl.remoteControlled>/g, obj, "remoteControlled", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:RemoteControl.Control\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Control", sub, context);

                var bucket = context.parsed.RemoteControl;
                if (null == bucket)
                   context.parsed.RemoteControl = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = RemotePoint.prototype.export.call (this, obj, false);

                base.export_element (obj, "RemoteControl", "actuatorMaximum", base.from_float, fields);
                base.export_element (obj, "RemoteControl", "actuatorMinimum", base.from_float, fields);
                base.export_element (obj, "RemoteControl", "remoteControlled", base.from_boolean, fields);
                base.export_attribute (obj, "RemoteControl", "Control", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#RemoteControl_collapse" aria-expanded="true" aria-controls="RemoteControl_collapse">RemoteControl</a>
<div id="RemoteControl_collapse" class="collapse in" style="margin-left: 10px;">
`
      + RemotePoint.prototype.template.call (this) +
`
{{#actuatorMaximum}}<div><b>actuatorMaximum</b>: {{actuatorMaximum}}</div>{{/actuatorMaximum}}
{{#actuatorMinimum}}<div><b>actuatorMinimum</b>: {{actuatorMinimum}}</div>{{/actuatorMinimum}}
{{#remoteControlled}}<div><b>remoteControlled</b>: {{remoteControlled}}</div>{{/remoteControlled}}
{{#Control}}<div><b>Control</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Control}}&quot;);})'>{{Control}}</a></div>{{/Control}}
</div>
`
                );
           }        }

        return (
            {
                CommunicationLink: CommunicationLink,
                RemoteSource: RemoteSource,
                RemoteUnit: RemoteUnit,
                RemotePoint: RemotePoint,
                RemoteControl: RemoteControl,
                Source: Source,
                RemoteUnitType: RemoteUnitType
            }
        );
    }
);