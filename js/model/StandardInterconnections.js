define
(
    ["model/base", "model/Core"],
    /**
     * This subclause describes the standard interconnections for various types of equipment.
     *
     * These interconnections are understood by the application programs and can be identified based on the presence of one of the key classes with a relationship to the static power flow model: SynchronousMachineDynamics, AsynchronousMachineDynamics, EnergyConsumerDynamics or WindTurbineType3or4Dynamics.
     * The relationships between classes expressed in the interconnection diagrams are intended to support dynamic behaviour described by either standard models or user-defined models.
     * In the interconnection diagrams, boxes which are black in colour represent function blocks whose functionality can be provided by one of many standard models or by a user-defined model. Blue boxes represent specific standard models.  A dashed box means that the function block or specific standard model is optional.
     *
     */
    function (base, Core)
    {

        /**
         * Type of input signal coming from remote bus.
         *
         */
        let RemoteSignalKind =
        {
            "remoteBusVoltageFrequency": "remoteBusVoltageFrequency",
            "remoteBusVoltageFrequencyDeviation": "remoteBusVoltageFrequencyDeviation",
            "remoteBusFrequency": "remoteBusFrequency",
            "remoteBusFrequencyDeviation": "remoteBusFrequencyDeviation",
            "remoteBusVoltageAmplitude": "remoteBusVoltageAmplitude",
            "remoteBusVoltage": "remoteBusVoltage",
            "remoteBranchCurrentAmplitude": "remoteBranchCurrentAmplitude",
            "remoteBusVoltageAmplitudeDerivative": "remoteBusVoltageAmplitudeDerivative",
            "remotePuBusVoltageDerivative": "remotePuBusVoltageDerivative"
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
                let bucket = cim_data.RemoteInputSignal;
                if (null == bucket)
                   cim_data.RemoteInputSignal = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RemoteInputSignal[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "RemoteInputSignal";
                base.parse_attribute (/<cim:RemoteInputSignal.remoteSignalType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "remoteSignalType", sub, context);
                base.parse_attribute (/<cim:RemoteInputSignal.WindPlantDynamics\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WindPlantDynamics", sub, context);
                base.parse_attribute (/<cim:RemoteInputSignal.WindTurbineType1or2Dynamics\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType1or2Dynamics", sub, context);
                base.parse_attribute (/<cim:RemoteInputSignal.Terminal\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context);
                base.parse_attribute (/<cim:RemoteInputSignal.UnderexcitationLimiterDynamics\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "UnderexcitationLimiterDynamics", sub, context);
                base.parse_attribute (/<cim:RemoteInputSignal.PowerSystemStabilizerDynamics\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemStabilizerDynamics", sub, context);
                base.parse_attribute (/<cim:RemoteInputSignal.DiscontinuousExcitationControlDynamics\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DiscontinuousExcitationControlDynamics", sub, context);
                base.parse_attribute (/<cim:RemoteInputSignal.PFVArControllerType1Dynamics\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PFVArControllerType1Dynamics", sub, context);
                base.parse_attribute (/<cim:RemoteInputSignal.WindTurbineType3or4Dynamics\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3or4Dynamics", sub, context);
                base.parse_attribute (/<cim:RemoteInputSignal.VoltageCompensatorDynamics\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "VoltageCompensatorDynamics", sub, context);
                let bucket = context.parsed.RemoteInputSignal;
                if (null == bucket)
                   context.parsed.RemoteInputSignal = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "RemoteInputSignal", "remoteSignalType", "remoteSignalType", fields);
                base.export_attribute (obj, "RemoteInputSignal", "WindPlantDynamics", "WindPlantDynamics", fields);
                base.export_attribute (obj, "RemoteInputSignal", "WindTurbineType1or2Dynamics", "WindTurbineType1or2Dynamics", fields);
                base.export_attribute (obj, "RemoteInputSignal", "Terminal", "Terminal", fields);
                base.export_attribute (obj, "RemoteInputSignal", "UnderexcitationLimiterDynamics", "UnderexcitationLimiterDynamics", fields);
                base.export_attribute (obj, "RemoteInputSignal", "PowerSystemStabilizerDynamics", "PowerSystemStabilizerDynamics", fields);
                base.export_attribute (obj, "RemoteInputSignal", "DiscontinuousExcitationControlDynamics", "DiscontinuousExcitationControlDynamics", fields);
                base.export_attribute (obj, "RemoteInputSignal", "PFVArControllerType1Dynamics", "PFVArControllerType1Dynamics", fields);
                base.export_attribute (obj, "RemoteInputSignal", "WindTurbineType3or4Dynamics", "WindTurbineType3or4Dynamics", fields);
                base.export_attribute (obj, "RemoteInputSignal", "VoltageCompensatorDynamics", "VoltageCompensatorDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RemoteInputSignal_collapse" aria-expanded="true" aria-controls="RemoteInputSignal_collapse" style="margin-left: 10px;">RemoteInputSignal</a></legend>
                    <div id="RemoteInputSignal_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#remoteSignalType}}<div><b>remoteSignalType</b>: {{remoteSignalType}}</div>{{/remoteSignalType}}
                    {{#WindPlantDynamics}}<div><b>WindPlantDynamics</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{WindPlantDynamics}}");}); return false;'>{{WindPlantDynamics}}</a></div>{{/WindPlantDynamics}}
                    {{#WindTurbineType1or2Dynamics}}<div><b>WindTurbineType1or2Dynamics</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{WindTurbineType1or2Dynamics}}");}); return false;'>{{WindTurbineType1or2Dynamics}}</a></div>{{/WindTurbineType1or2Dynamics}}
                    {{#Terminal}}<div><b>Terminal</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Terminal}}");}); return false;'>{{Terminal}}</a></div>{{/Terminal}}
                    {{#UnderexcitationLimiterDynamics}}<div><b>UnderexcitationLimiterDynamics</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{UnderexcitationLimiterDynamics}}");}); return false;'>{{UnderexcitationLimiterDynamics}}</a></div>{{/UnderexcitationLimiterDynamics}}
                    {{#PowerSystemStabilizerDynamics}}<div><b>PowerSystemStabilizerDynamics</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{PowerSystemStabilizerDynamics}}");}); return false;'>{{PowerSystemStabilizerDynamics}}</a></div>{{/PowerSystemStabilizerDynamics}}
                    {{#DiscontinuousExcitationControlDynamics}}<div><b>DiscontinuousExcitationControlDynamics</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{DiscontinuousExcitationControlDynamics}}");}); return false;'>{{DiscontinuousExcitationControlDynamics}}</a></div>{{/DiscontinuousExcitationControlDynamics}}
                    {{#PFVArControllerType1Dynamics}}<div><b>PFVArControllerType1Dynamics</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{PFVArControllerType1Dynamics}}");}); return false;'>{{PFVArControllerType1Dynamics}}</a></div>{{/PFVArControllerType1Dynamics}}
                    {{#WindTurbineType3or4Dynamics}}<div><b>WindTurbineType3or4Dynamics</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{WindTurbineType3or4Dynamics}}");}); return false;'>{{WindTurbineType3or4Dynamics}}</a></div>{{/WindTurbineType3or4Dynamics}}
                    {{#VoltageCompensatorDynamics}}<div><b>VoltageCompensatorDynamics</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{VoltageCompensatorDynamics}}");}); return false;'>{{VoltageCompensatorDynamics}}</a></div>{{/VoltageCompensatorDynamics}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["remoteSignalTypeRemoteSignalKind"] = [{ id: '', selected: (!obj["remoteSignalType"])}]; for (let property in RemoteSignalKind) obj["remoteSignalTypeRemoteSignalKind"].push ({ id: property, selected: obj["remoteSignalType"] && obj["remoteSignalType"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["remoteSignalTypeRemoteSignalKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RemoteInputSignal_collapse" aria-expanded="true" aria-controls="{{id}}_RemoteInputSignal_collapse" style="margin-left: 10px;">RemoteInputSignal</a></legend>
                    <div id="{{id}}_RemoteInputSignal_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_remoteSignalType'>remoteSignalType: </label><div class='col-sm-8'><select id='{{id}}_remoteSignalType' class='form-control custom-select'>{{#remoteSignalTypeRemoteSignalKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/remoteSignalTypeRemoteSignalKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindPlantDynamics'>WindPlantDynamics: </label><div class='col-sm-8'><input id='{{id}}_WindPlantDynamics' class='form-control' type='text'{{#WindPlantDynamics}} value='{{WindPlantDynamics}}'{{/WindPlantDynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindTurbineType1or2Dynamics'>WindTurbineType1or2Dynamics: </label><div class='col-sm-8'><input id='{{id}}_WindTurbineType1or2Dynamics' class='form-control' type='text'{{#WindTurbineType1or2Dynamics}} value='{{WindTurbineType1or2Dynamics}}'{{/WindTurbineType1or2Dynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Terminal'>Terminal: </label><div class='col-sm-8'><input id='{{id}}_Terminal' class='form-control' type='text'{{#Terminal}} value='{{Terminal}}'{{/Terminal}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_UnderexcitationLimiterDynamics'>UnderexcitationLimiterDynamics: </label><div class='col-sm-8'><input id='{{id}}_UnderexcitationLimiterDynamics' class='form-control' type='text'{{#UnderexcitationLimiterDynamics}} value='{{UnderexcitationLimiterDynamics}}'{{/UnderexcitationLimiterDynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PowerSystemStabilizerDynamics'>PowerSystemStabilizerDynamics: </label><div class='col-sm-8'><input id='{{id}}_PowerSystemStabilizerDynamics' class='form-control' type='text'{{#PowerSystemStabilizerDynamics}} value='{{PowerSystemStabilizerDynamics}}'{{/PowerSystemStabilizerDynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DiscontinuousExcitationControlDynamics'>DiscontinuousExcitationControlDynamics: </label><div class='col-sm-8'><input id='{{id}}_DiscontinuousExcitationControlDynamics' class='form-control' type='text'{{#DiscontinuousExcitationControlDynamics}} value='{{DiscontinuousExcitationControlDynamics}}'{{/DiscontinuousExcitationControlDynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PFVArControllerType1Dynamics'>PFVArControllerType1Dynamics: </label><div class='col-sm-8'><input id='{{id}}_PFVArControllerType1Dynamics' class='form-control' type='text'{{#PFVArControllerType1Dynamics}} value='{{PFVArControllerType1Dynamics}}'{{/PFVArControllerType1Dynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindTurbineType3or4Dynamics'>WindTurbineType3or4Dynamics: </label><div class='col-sm-8'><input id='{{id}}_WindTurbineType3or4Dynamics' class='form-control' type='text'{{#WindTurbineType3or4Dynamics}} value='{{WindTurbineType3or4Dynamics}}'{{/WindTurbineType3or4Dynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_VoltageCompensatorDynamics'>VoltageCompensatorDynamics: </label><div class='col-sm-8'><input id='{{id}}_VoltageCompensatorDynamics' class='form-control' type='text'{{#VoltageCompensatorDynamics}} value='{{VoltageCompensatorDynamics}}'{{/VoltageCompensatorDynamics}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "RemoteInputSignal" };
                super.submit (id, obj);
                temp = RemoteSignalKind[document.getElementById (id + "_remoteSignalType").value]; if (temp) obj["remoteSignalType"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#RemoteSignalKind." + temp; else delete obj["remoteSignalType"];
                temp = document.getElementById (id + "_WindPlantDynamics").value; if ("" !== temp) obj["WindPlantDynamics"] = temp;
                temp = document.getElementById (id + "_WindTurbineType1or2Dynamics").value; if ("" !== temp) obj["WindTurbineType1or2Dynamics"] = temp;
                temp = document.getElementById (id + "_Terminal").value; if ("" !== temp) obj["Terminal"] = temp;
                temp = document.getElementById (id + "_UnderexcitationLimiterDynamics").value; if ("" !== temp) obj["UnderexcitationLimiterDynamics"] = temp;
                temp = document.getElementById (id + "_PowerSystemStabilizerDynamics").value; if ("" !== temp) obj["PowerSystemStabilizerDynamics"] = temp;
                temp = document.getElementById (id + "_DiscontinuousExcitationControlDynamics").value; if ("" !== temp) obj["DiscontinuousExcitationControlDynamics"] = temp;
                temp = document.getElementById (id + "_PFVArControllerType1Dynamics").value; if ("" !== temp) obj["PFVArControllerType1Dynamics"] = temp;
                temp = document.getElementById (id + "_WindTurbineType3or4Dynamics").value; if ("" !== temp) obj["WindTurbineType3or4Dynamics"] = temp;
                temp = document.getElementById (id + "_VoltageCompensatorDynamics").value; if ("" !== temp) obj["VoltageCompensatorDynamics"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindPlantDynamics", "0..1", "0..1", "WindPlantDynamics", "RemoteInputSignal"],
                            ["WindTurbineType1or2Dynamics", "0..1", "0..1", "WindTurbineType1or2Dynamics", "RemoteInputSignal"],
                            ["Terminal", "1", "0..*", "Terminal", "RemoteInputSignal"],
                            ["UnderexcitationLimiterDynamics", "0..1", "0..1", "UnderexcitationLimiterDynamics", "RemoteInputSignal"],
                            ["PowerSystemStabilizerDynamics", "0..1", "0..*", "PowerSystemStabilizerDynamics", "RemoteInputSignal"],
                            ["DiscontinuousExcitationControlDynamics", "0..1", "0..1", "DiscontinuousExcitationControlDynamics", "RemoteInputSignal"],
                            ["PFVArControllerType1Dynamics", "0..1", "0..1", "PFVArControllerType1Dynamics", "RemoteInputSignal"],
                            ["WindTurbineType3or4Dynamics", "0..1", "0..1", "WindTurbineType3or4Dynamics", "RemoteInputSignal"],
                            ["VoltageCompensatorDynamics", "0..1", "0..1", "VoltageCompensatorDynamics", "RemoteInputSignal"]
                        ]
                    )
                );
            }
        }

        return (
            {
                RemoteInputSignal: RemoteInputSignal,
                RemoteSignalKind: RemoteSignalKind
            }
        );
    }
);