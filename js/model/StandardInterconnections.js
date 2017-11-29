define
(
    ["model/base", "model/Core"],
    /**
     * This section describes the standard interconnections for various types of equipment.
     *
     * These interconnections are understood by the application programs and can be identified based on the presence of one of the key classes with a relationship to the static power flow model: SynchronousMachineDynamics, AsynchronousMachineDynamics, EnergyConsumerDynamics or WindTurbineType3or4Dynamics.
     *
     */
    function (base, Core)
    {

        /**
         * Type of input signal coming from remote bus.
         *
         */
        class RemoteSignalKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RemoteSignalKind;
                if (null == bucket)
                   cim_data.RemoteSignalKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RemoteSignalKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "RemoteSignalKind";
                base.parse_element (/<cim:RemoteSignalKind.remoteBusVoltageFrequency>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBusVoltageFrequency>/g, obj, "remoteBusVoltageFrequency", base.to_string, sub, context);
                base.parse_element (/<cim:RemoteSignalKind.remoteBusVoltageFrequencyDeviation>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBusVoltageFrequencyDeviation>/g, obj, "remoteBusVoltageFrequencyDeviation", base.to_string, sub, context);
                base.parse_element (/<cim:RemoteSignalKind.remoteBusFrequency>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBusFrequency>/g, obj, "remoteBusFrequency", base.to_string, sub, context);
                base.parse_element (/<cim:RemoteSignalKind.remoteBusFrequencyDeviation>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBusFrequencyDeviation>/g, obj, "remoteBusFrequencyDeviation", base.to_string, sub, context);
                base.parse_element (/<cim:RemoteSignalKind.remoteBusVoltageAmplitude>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBusVoltageAmplitude>/g, obj, "remoteBusVoltageAmplitude", base.to_string, sub, context);
                base.parse_element (/<cim:RemoteSignalKind.remoteBusVoltage>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBusVoltage>/g, obj, "remoteBusVoltage", base.to_string, sub, context);
                base.parse_element (/<cim:RemoteSignalKind.remoteBranchCurrentAmplitude>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBranchCurrentAmplitude>/g, obj, "remoteBranchCurrentAmplitude", base.to_string, sub, context);
                base.parse_element (/<cim:RemoteSignalKind.remoteBusVoltageAmplitudeDerivative>([\s\S]*?)<\/cim:RemoteSignalKind.remoteBusVoltageAmplitudeDerivative>/g, obj, "remoteBusVoltageAmplitudeDerivative", base.to_string, sub, context);
                base.parse_element (/<cim:RemoteSignalKind.remotePuBusVoltageDerivative>([\s\S]*?)<\/cim:RemoteSignalKind.remotePuBusVoltageDerivative>/g, obj, "remotePuBusVoltageDerivative", base.to_string, sub, context);

                var bucket = context.parsed.RemoteSignalKind;
                if (null == bucket)
                   context.parsed.RemoteSignalKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "RemoteSignalKind", "remoteBusVoltageFrequency", base.from_string, fields);
                base.export_element (obj, "RemoteSignalKind", "remoteBusVoltageFrequencyDeviation", base.from_string, fields);
                base.export_element (obj, "RemoteSignalKind", "remoteBusFrequency", base.from_string, fields);
                base.export_element (obj, "RemoteSignalKind", "remoteBusFrequencyDeviation", base.from_string, fields);
                base.export_element (obj, "RemoteSignalKind", "remoteBusVoltageAmplitude", base.from_string, fields);
                base.export_element (obj, "RemoteSignalKind", "remoteBusVoltage", base.from_string, fields);
                base.export_element (obj, "RemoteSignalKind", "remoteBranchCurrentAmplitude", base.from_string, fields);
                base.export_element (obj, "RemoteSignalKind", "remoteBusVoltageAmplitudeDerivative", base.from_string, fields);
                base.export_element (obj, "RemoteSignalKind", "remotePuBusVoltageDerivative", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#RemoteSignalKind_collapse" aria-expanded="true" aria-controls="RemoteSignalKind_collapse">RemoteSignalKind</a>
<div id="RemoteSignalKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#remoteBusVoltageFrequency}}<div><b>remoteBusVoltageFrequency</b>: {{remoteBusVoltageFrequency}}</div>{{/remoteBusVoltageFrequency}}
{{#remoteBusVoltageFrequencyDeviation}}<div><b>remoteBusVoltageFrequencyDeviation</b>: {{remoteBusVoltageFrequencyDeviation}}</div>{{/remoteBusVoltageFrequencyDeviation}}
{{#remoteBusFrequency}}<div><b>remoteBusFrequency</b>: {{remoteBusFrequency}}</div>{{/remoteBusFrequency}}
{{#remoteBusFrequencyDeviation}}<div><b>remoteBusFrequencyDeviation</b>: {{remoteBusFrequencyDeviation}}</div>{{/remoteBusFrequencyDeviation}}
{{#remoteBusVoltageAmplitude}}<div><b>remoteBusVoltageAmplitude</b>: {{remoteBusVoltageAmplitude}}</div>{{/remoteBusVoltageAmplitude}}
{{#remoteBusVoltage}}<div><b>remoteBusVoltage</b>: {{remoteBusVoltage}}</div>{{/remoteBusVoltage}}
{{#remoteBranchCurrentAmplitude}}<div><b>remoteBranchCurrentAmplitude</b>: {{remoteBranchCurrentAmplitude}}</div>{{/remoteBranchCurrentAmplitude}}
{{#remoteBusVoltageAmplitudeDerivative}}<div><b>remoteBusVoltageAmplitudeDerivative</b>: {{remoteBusVoltageAmplitudeDerivative}}</div>{{/remoteBusVoltageAmplitudeDerivative}}
{{#remotePuBusVoltageDerivative}}<div><b>remotePuBusVoltageDerivative</b>: {{remotePuBusVoltageDerivative}}</div>{{/remotePuBusVoltageDerivative}}
</div>
`
                );
           }        }

        /**
         * Supports connection to a terminal associated with a remote bus from which an input signal of a specific type is coming.
         *
         */
        class RemoteInputSignal extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RemoteInputSignal;
                if (null == bucket)
                   cim_data.RemoteInputSignal = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RemoteInputSignal[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "RemoteInputSignal";
                base.parse_element (/<cim:RemoteInputSignal.remoteSignalType>([\s\S]*?)<\/cim:RemoteInputSignal.remoteSignalType>/g, obj, "remoteSignalType", base.to_string, sub, context);
                base.parse_attribute (/<cim:RemoteInputSignal.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context);
                base.parse_attribute (/<cim:RemoteInputSignal.VoltageCompensatorDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "VoltageCompensatorDynamics", sub, context);
                base.parse_attribute (/<cim:RemoteInputSignal.WindPlantDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPlantDynamics", sub, context);
                base.parse_attribute (/<cim:RemoteInputSignal.PowerSystemStabilizerDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemStabilizerDynamics", sub, context);
                base.parse_attribute (/<cim:RemoteInputSignal.WindTurbineType3or4Dynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3or4Dynamics", sub, context);
                base.parse_attribute (/<cim:RemoteInputSignal.UnderexcitationLimiterDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UnderexcitationLimiterDynamics", sub, context);
                base.parse_attribute (/<cim:RemoteInputSignal.WindTurbineType1or2Dynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType1or2Dynamics", sub, context);
                base.parse_attribute (/<cim:RemoteInputSignal.PFVArControllerType1Dynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PFVArControllerType1Dynamics", sub, context);
                base.parse_attribute (/<cim:RemoteInputSignal.DiscontinuousExcitationControlDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DiscontinuousExcitationControlDynamics", sub, context);

                var bucket = context.parsed.RemoteInputSignal;
                if (null == bucket)
                   context.parsed.RemoteInputSignal = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "RemoteInputSignal", "remoteSignalType", base.from_string, fields);
                base.export_attribute (obj, "RemoteInputSignal", "Terminal", fields);
                base.export_attribute (obj, "RemoteInputSignal", "VoltageCompensatorDynamics", fields);
                base.export_attribute (obj, "RemoteInputSignal", "WindPlantDynamics", fields);
                base.export_attribute (obj, "RemoteInputSignal", "PowerSystemStabilizerDynamics", fields);
                base.export_attribute (obj, "RemoteInputSignal", "WindTurbineType3or4Dynamics", fields);
                base.export_attribute (obj, "RemoteInputSignal", "UnderexcitationLimiterDynamics", fields);
                base.export_attribute (obj, "RemoteInputSignal", "WindTurbineType1or2Dynamics", fields);
                base.export_attribute (obj, "RemoteInputSignal", "PFVArControllerType1Dynamics", fields);
                base.export_attribute (obj, "RemoteInputSignal", "DiscontinuousExcitationControlDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#RemoteInputSignal_collapse" aria-expanded="true" aria-controls="RemoteInputSignal_collapse">RemoteInputSignal</a>
<div id="RemoteInputSignal_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#remoteSignalType}}<div><b>remoteSignalType</b>: {{remoteSignalType}}</div>{{/remoteSignalType}}
{{#Terminal}}<div><b>Terminal</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Terminal}}&quot;);})'>{{Terminal}}</a></div>{{/Terminal}}
{{#VoltageCompensatorDynamics}}<div><b>VoltageCompensatorDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{VoltageCompensatorDynamics}}&quot;);})'>{{VoltageCompensatorDynamics}}</a></div>{{/VoltageCompensatorDynamics}}
{{#WindPlantDynamics}}<div><b>WindPlantDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindPlantDynamics}}&quot;);})'>{{WindPlantDynamics}}</a></div>{{/WindPlantDynamics}}
{{#PowerSystemStabilizerDynamics}}<div><b>PowerSystemStabilizerDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PowerSystemStabilizerDynamics}}&quot;);})'>{{PowerSystemStabilizerDynamics}}</a></div>{{/PowerSystemStabilizerDynamics}}
{{#WindTurbineType3or4Dynamics}}<div><b>WindTurbineType3or4Dynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindTurbineType3or4Dynamics}}&quot;);})'>{{WindTurbineType3or4Dynamics}}</a></div>{{/WindTurbineType3or4Dynamics}}
{{#UnderexcitationLimiterDynamics}}<div><b>UnderexcitationLimiterDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{UnderexcitationLimiterDynamics}}&quot;);})'>{{UnderexcitationLimiterDynamics}}</a></div>{{/UnderexcitationLimiterDynamics}}
{{#WindTurbineType1or2Dynamics}}<div><b>WindTurbineType1or2Dynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindTurbineType1or2Dynamics}}&quot;);})'>{{WindTurbineType1or2Dynamics}}</a></div>{{/WindTurbineType1or2Dynamics}}
{{#PFVArControllerType1Dynamics}}<div><b>PFVArControllerType1Dynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PFVArControllerType1Dynamics}}&quot;);})'>{{PFVArControllerType1Dynamics}}</a></div>{{/PFVArControllerType1Dynamics}}
{{#DiscontinuousExcitationControlDynamics}}<div><b>DiscontinuousExcitationControlDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DiscontinuousExcitationControlDynamics}}&quot;);})'>{{DiscontinuousExcitationControlDynamics}}</a></div>{{/DiscontinuousExcitationControlDynamics}}
</div>
`
                );
           }        }

        return (
            {
                RemoteInputSignal: RemoteInputSignal,
                RemoteSignalKind: RemoteSignalKind
            }
        );
    }
);