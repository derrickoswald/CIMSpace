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
        var RemoteSignalKind =
        {
            remoteBusVoltageFrequency: "remoteBusVoltageFrequency",
            remoteBusVoltageFrequencyDeviation: "remoteBusVoltageFrequencyDeviation",
            remoteBusFrequency: "remoteBusFrequency",
            remoteBusFrequencyDeviation: "remoteBusFrequencyDeviation",
            remoteBusVoltageAmplitude: "remoteBusVoltageAmplitude",
            remoteBusVoltage: "remoteBusVoltage",
            remoteBranchCurrentAmplitude: "remoteBranchCurrentAmplitude",
            remoteBusVoltageAmplitudeDerivative: "remoteBusVoltageAmplitudeDerivative",
            remotePuBusVoltageDerivative: "remotePuBusVoltageDerivative"
        };
        Object.freeze (RemoteSignalKind);

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
                base.parse_attribute (/<cim:RemoteInputSignal.remoteSignalType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "remoteSignalType", sub, context);
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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RemoteInputSignal_collapse" aria-expanded="true" aria-controls="RemoteInputSignal_collapse" style="margin-left: 10px;">RemoteInputSignal</a></legend>
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
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.RemoteSignalKind = []; if (!obj.remoteSignalType) obj.RemoteSignalKind.push ({ id: '', selected: true}); for (var property in RemoteSignalKind) obj.RemoteSignalKind.push ({ id: property, selected: obj.remoteSignalType && obj.remoteSignalType.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.RemoteSignalKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RemoteInputSignal_collapse" aria-expanded="true" aria-controls="RemoteInputSignal_collapse" style="margin-left: 10px;">RemoteInputSignal</a></legend>
                    <div id="RemoteInputSignal_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='remoteSignalType'>remoteSignalType: </label><div class='col-sm-8'><select id='remoteSignalType' class='form-control'>{{#RemoteSignalKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/RemoteSignalKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Terminal'>Terminal: </label><div class='col-sm-8'><input id='Terminal' class='form-control' type='text'{{#Terminal}} value='{{Terminal}}'{{/Terminal}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='VoltageCompensatorDynamics'>VoltageCompensatorDynamics: </label><div class='col-sm-8'><input id='VoltageCompensatorDynamics' class='form-control' type='text'{{#VoltageCompensatorDynamics}} value='{{VoltageCompensatorDynamics}}'{{/VoltageCompensatorDynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='WindPlantDynamics'>WindPlantDynamics: </label><div class='col-sm-8'><input id='WindPlantDynamics' class='form-control' type='text'{{#WindPlantDynamics}} value='{{WindPlantDynamics}}'{{/WindPlantDynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='PowerSystemStabilizerDynamics'>PowerSystemStabilizerDynamics: </label><div class='col-sm-8'><input id='PowerSystemStabilizerDynamics' class='form-control' type='text'{{#PowerSystemStabilizerDynamics}} value='{{PowerSystemStabilizerDynamics}}'{{/PowerSystemStabilizerDynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='WindTurbineType3or4Dynamics'>WindTurbineType3or4Dynamics: </label><div class='col-sm-8'><input id='WindTurbineType3or4Dynamics' class='form-control' type='text'{{#WindTurbineType3or4Dynamics}} value='{{WindTurbineType3or4Dynamics}}'{{/WindTurbineType3or4Dynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='UnderexcitationLimiterDynamics'>UnderexcitationLimiterDynamics: </label><div class='col-sm-8'><input id='UnderexcitationLimiterDynamics' class='form-control' type='text'{{#UnderexcitationLimiterDynamics}} value='{{UnderexcitationLimiterDynamics}}'{{/UnderexcitationLimiterDynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='WindTurbineType1or2Dynamics'>WindTurbineType1or2Dynamics: </label><div class='col-sm-8'><input id='WindTurbineType1or2Dynamics' class='form-control' type='text'{{#WindTurbineType1or2Dynamics}} value='{{WindTurbineType1or2Dynamics}}'{{/WindTurbineType1or2Dynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='PFVArControllerType1Dynamics'>PFVArControllerType1Dynamics: </label><div class='col-sm-8'><input id='PFVArControllerType1Dynamics' class='form-control' type='text'{{#PFVArControllerType1Dynamics}} value='{{PFVArControllerType1Dynamics}}'{{/PFVArControllerType1Dynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='DiscontinuousExcitationControlDynamics'>DiscontinuousExcitationControlDynamics: </label><div class='col-sm-8'><input id='DiscontinuousExcitationControlDynamics' class='form-control' type='text'{{#DiscontinuousExcitationControlDynamics}} value='{{DiscontinuousExcitationControlDynamics}}'{{/DiscontinuousExcitationControlDynamics}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        return (
            {
                RemoteInputSignal: RemoteInputSignal
            }
        );
    }
);