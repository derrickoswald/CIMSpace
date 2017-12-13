define
(
    ["model/base", "model/Assets", "model/Common", "model/Core", "model/Meas", "model/Work"],
    /**
     * This package contains the core information classes that support end device applications with specialized classes for metering and premises area network devices, and remote reading functions.
     *
     * These classes are generally associated with the point where a service is delivered to the customer.
     *
     */
    function (base, Assets, Common, Core, Meas, Work)
    {

        /**
         * Kind of meter multiplier.
         *
         */
        var MeterMultiplierKind =
        {
            kH: "kH",
            kR: "kR",
            kE: "kE",
            ctRatio: "ctRatio",
            ptRatio: "ptRatio",
            transformerRatio: "transformerRatio"
        };
        Object.freeze (MeterMultiplierKind);

        /**
         * Kind of service multiplier.
         *
         */
        var ServiceMultiplierKind =
        {
            ctRatio: "ctRatio",
            ptRatio: "ptRatio",
            transformerRatio: "transformerRatio"
        };
        Object.freeze (ServiceMultiplierKind);

        /**
         * Kind of communication direction.
         *
         */
        var ComDirectionKind =
        {
            fromDevice: "fromDevice",
            toDevice: "toDevice",
            biDirectional: "biDirectional"
        };
        Object.freeze (ComDirectionKind);

        /**
         * Lifecycle states of the metering installation at a usage point with respect to readiness for billing via advanced metering infrastructure reads.
         *
         */
        var AmiBillingReadyKind =
        {
            enabled: "enabled",
            operable: "operable",
            billingApproved: "billingApproved",
            nonAmi: "nonAmi",
            amiDisabled: "amiDisabled",
            amiCapable: "amiCapable",
            nonMetered: "nonMetered"
        };
        Object.freeze (AmiBillingReadyKind);

        /**
         * State of the usage point with respect to connection to the network.
         *
         */
        var UsagePointConnectedKind =
        {
            connected: "connected",
            physicallyDisconnected: "physicallyDisconnected",
            logicallyDisconnected: "logicallyDisconnected"
        };
        Object.freeze (UsagePointConnectedKind);

        /**
         * Kind of end device function.
         *
         */
        var EndDeviceFunctionKind =
        {
            reverseFlow: "reverseFlow",
            demandResponse: "demandResponse",
            metrology: "metrology",
            outageHistory: "outageHistory",
            relaysProgramming: "relaysProgramming",
            onRequestRead: "onRequestRead",
            autonomousDst: "autonomousDst",
            electricMetering: "electricMetering",
            gasMetering: "gasMetering",
            waterMetering: "waterMetering"
        };
        Object.freeze (EndDeviceFunctionKind);

        /**
         * Reason for the reading being taken.
         *
         */
        var ReadingReasonKind =
        {
            installation: "installation",
            removal: "removal",
            inquiry: "inquiry",
            billing: "billing",
            moveIn: "moveIn",
            moveOut: "moveOut",
            demandReset: "demandReset",
            serviceDisconnect: "serviceDisconnect",
            serviceConnect: "serviceConnect",
            loadManagement: "loadManagement",
            loadResearch: "loadResearch",
            other: "other"
        };
        Object.freeze (ReadingReasonKind);

        /**
         * Kind of randomisation to be applied to control the timing of end device control commands and/or the definition of demand response and load control events.
         *
         * Value other than 'none' is typically used to mitigate potential deleterious effects of simultaneous operation of multiple devices.
         *
         */
        var RandomisationKind =
        {
            start: "start",
            end: "end",
            startAndEnd: "startAndEnd",
            default: "default",
            none: "none"
        };
        Object.freeze (RandomisationKind);

        /**
         * Transmission mode for end device display controls, applicable to premises area network (PAN) devices.
         *
         */
        var TransmissionModeKind =
        {
            normal: "normal",
            anonymous: "anonymous",
            both: "both"
        };
        Object.freeze (TransmissionModeKind);

        /**
         * Kind of communication technology.
         *
         */
        var ComTechnologyKind =
        {
            cellular: "cellular",
            ethernet: "ethernet",
            homePlug: "homePlug",
            pager: "pager",
            phone: "phone",
            plc: "plc",
            rf: "rf",
            rfMesh: "rfMesh",
            zigbee: "zigbee"
        };
        Object.freeze (ComTechnologyKind);

        /**
         * Demand response program.
         *
         */
        class DemandResponseProgram extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.DemandResponseProgram;
                if (null == bucket)
                   cim_data.DemandResponseProgram = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DemandResponseProgram[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "DemandResponseProgram";
                base.parse_element (/<cim:DemandResponseProgram.type>([\s\S]*?)<\/cim:DemandResponseProgram.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_element (/<cim:DemandResponseProgram.validityInterval>([\s\S]*?)<\/cim:DemandResponseProgram.validityInterval>/g, obj, "validityInterval", base.to_string, sub, context);
                base.parse_attributes (/<cim:DemandResponseProgram.EndDeviceGroups\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceGroups", sub, context);
                base.parse_attributes (/<cim:DemandResponseProgram.CustomerAgreements\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAgreements", sub, context);
                base.parse_attributes (/<cim:DemandResponseProgram.UsagePointGroups\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UsagePointGroups", sub, context);
                var bucket = context.parsed.DemandResponseProgram;
                if (null == bucket)
                   context.parsed.DemandResponseProgram = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "DemandResponseProgram", "type", "type",  base.from_string, fields);
                base.export_element (obj, "DemandResponseProgram", "validityInterval", "validityInterval",  base.from_string, fields);
                base.export_attributes (obj, "DemandResponseProgram", "EndDeviceGroups", "EndDeviceGroups", fields);
                base.export_attributes (obj, "DemandResponseProgram", "CustomerAgreements", "CustomerAgreements", fields);
                base.export_attributes (obj, "DemandResponseProgram", "UsagePointGroups", "UsagePointGroups", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DemandResponseProgram_collapse" aria-expanded="true" aria-controls="DemandResponseProgram_collapse" style="margin-left: 10px;">DemandResponseProgram</a></legend>
                    <div id="DemandResponseProgram_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#validityInterval}}<div><b>validityInterval</b>: {{validityInterval}}</div>{{/validityInterval}}
                    {{#EndDeviceGroups}}<div><b>EndDeviceGroups</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EndDeviceGroups}}
                    {{#CustomerAgreements}}<div><b>CustomerAgreements</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CustomerAgreements}}
                    {{#UsagePointGroups}}<div><b>UsagePointGroups</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/UsagePointGroups}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.EndDeviceGroups) obj.EndDeviceGroups_string = obj.EndDeviceGroups.join ();
                if (obj.CustomerAgreements) obj.CustomerAgreements_string = obj.CustomerAgreements.join ();
                if (obj.UsagePointGroups) obj.UsagePointGroups_string = obj.UsagePointGroups.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.EndDeviceGroups_string;
                delete obj.CustomerAgreements_string;
                delete obj.UsagePointGroups_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_DemandResponseProgram_collapse" aria-expanded="true" aria-controls="{{id}}_DemandResponseProgram_collapse" style="margin-left: 10px;">DemandResponseProgram</a></legend>
                    <div id="{{id}}_DemandResponseProgram_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_validityInterval'>validityInterval: </label><div class='col-sm-8'><input id='{{id}}_validityInterval' class='form-control' type='text'{{#validityInterval}} value='{{validityInterval}}'{{/validityInterval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EndDeviceGroups'>EndDeviceGroups: </label><div class='col-sm-8'><input id='{{id}}_EndDeviceGroups' class='form-control' type='text'{{#EndDeviceGroups}} value='{{EndDeviceGroups}}_string'{{/EndDeviceGroups}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CustomerAgreements'>CustomerAgreements: </label><div class='col-sm-8'><input id='{{id}}_CustomerAgreements' class='form-control' type='text'{{#CustomerAgreements}} value='{{CustomerAgreements}}_string'{{/CustomerAgreements}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_UsagePointGroups'>UsagePointGroups: </label><div class='col-sm-8'><input id='{{id}}_UsagePointGroups' class='form-control' type='text'{{#UsagePointGroups}} value='{{UsagePointGroups}}_string'{{/UsagePointGroups}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "DemandResponseProgram" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_type").value; if ("" != temp) obj.type = temp;
                temp = document.getElementById (id + "_validityInterval").value; if ("" != temp) obj.validityInterval = temp;
                temp = document.getElementById (id + "_EndDeviceGroups").value; if ("" != temp) obj.EndDeviceGroups = temp.split (",");
                temp = document.getElementById (id + "_CustomerAgreements").value; if ("" != temp) obj.CustomerAgreements = temp.split (",");
                temp = document.getElementById (id + "_UsagePointGroups").value; if ("" != temp) obj.UsagePointGroups = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EndDeviceGroups", "0..*", "0..*", "EndDeviceGroup", "DemandResponsePrograms"],
                            ["CustomerAgreements", "0..*", "0..*", "CustomerAgreement", "DemandResponsePrograms"],
                            ["UsagePointGroups", "0..*", "0..*", "UsagePointGroup", "DemandResponsePrograms"]
                        ]
                    )
                );
            }
        }

        /**
         * Abstraction for management of group communications within a two-way AMR system or the data for a group of related end devices.
         *
         * Commands can be issued to all of the end devices that belong to the group using a defined group address and the underlying AMR communication infrastructure.
         *
         */
        class EndDeviceGroup extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.EndDeviceGroup;
                if (null == bucket)
                   cim_data.EndDeviceGroup = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EndDeviceGroup[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "EndDeviceGroup";
                base.parse_element (/<cim:EndDeviceGroup.type>([\s\S]*?)<\/cim:EndDeviceGroup.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_attributes (/<cim:EndDeviceGroup.DemandResponsePrograms\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DemandResponsePrograms", sub, context);
                base.parse_attributes (/<cim:EndDeviceGroup.EndDeviceControls\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceControls", sub, context);
                base.parse_attributes (/<cim:EndDeviceGroup.EndDevices\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDevices", sub, context);
                var bucket = context.parsed.EndDeviceGroup;
                if (null == bucket)
                   context.parsed.EndDeviceGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "EndDeviceGroup", "type", "type",  base.from_string, fields);
                base.export_attributes (obj, "EndDeviceGroup", "DemandResponsePrograms", "DemandResponsePrograms", fields);
                base.export_attributes (obj, "EndDeviceGroup", "EndDeviceControls", "EndDeviceControls", fields);
                base.export_attributes (obj, "EndDeviceGroup", "EndDevices", "EndDevices", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EndDeviceGroup_collapse" aria-expanded="true" aria-controls="EndDeviceGroup_collapse" style="margin-left: 10px;">EndDeviceGroup</a></legend>
                    <div id="EndDeviceGroup_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#DemandResponsePrograms}}<div><b>DemandResponsePrograms</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/DemandResponsePrograms}}
                    {{#EndDeviceControls}}<div><b>EndDeviceControls</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EndDeviceControls}}
                    {{#EndDevices}}<div><b>EndDevices</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EndDevices}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.DemandResponsePrograms) obj.DemandResponsePrograms_string = obj.DemandResponsePrograms.join ();
                if (obj.EndDeviceControls) obj.EndDeviceControls_string = obj.EndDeviceControls.join ();
                if (obj.EndDevices) obj.EndDevices_string = obj.EndDevices.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.DemandResponsePrograms_string;
                delete obj.EndDeviceControls_string;
                delete obj.EndDevices_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_EndDeviceGroup_collapse" aria-expanded="true" aria-controls="{{id}}_EndDeviceGroup_collapse" style="margin-left: 10px;">EndDeviceGroup</a></legend>
                    <div id="{{id}}_EndDeviceGroup_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DemandResponsePrograms'>DemandResponsePrograms: </label><div class='col-sm-8'><input id='{{id}}_DemandResponsePrograms' class='form-control' type='text'{{#DemandResponsePrograms}} value='{{DemandResponsePrograms}}_string'{{/DemandResponsePrograms}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EndDeviceControls'>EndDeviceControls: </label><div class='col-sm-8'><input id='{{id}}_EndDeviceControls' class='form-control' type='text'{{#EndDeviceControls}} value='{{EndDeviceControls}}_string'{{/EndDeviceControls}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EndDevices'>EndDevices: </label><div class='col-sm-8'><input id='{{id}}_EndDevices' class='form-control' type='text'{{#EndDevices}} value='{{EndDevices}}_string'{{/EndDevices}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "EndDeviceGroup" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_type").value; if ("" != temp) obj.type = temp;
                temp = document.getElementById (id + "_DemandResponsePrograms").value; if ("" != temp) obj.DemandResponsePrograms = temp.split (",");
                temp = document.getElementById (id + "_EndDeviceControls").value; if ("" != temp) obj.EndDeviceControls = temp.split (",");
                temp = document.getElementById (id + "_EndDevices").value; if ("" != temp) obj.EndDevices = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["DemandResponsePrograms", "0..*", "0..*", "DemandResponseProgram", "EndDeviceGroups"],
                            ["EndDeviceControls", "0..*", "0..*", "EndDeviceControl", "EndDeviceGroups"],
                            ["EndDevices", "0..*", "0..*", "EndDevice", "EndDeviceGroups"]
                        ]
                    )
                );
            }
        }

        /**
         * Appliance controlled with a PAN device control.
         *
         */
        class ControlledAppliance extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ControlledAppliance;
                if (null == bucket)
                   cim_data.ControlledAppliance = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ControlledAppliance[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ControlledAppliance";
                base.parse_element (/<cim:ControlledAppliance.isElectricVehicle>([\s\S]*?)<\/cim:ControlledAppliance.isElectricVehicle>/g, obj, "isElectricVehicle", base.to_boolean, sub, context);
                base.parse_element (/<cim:ControlledAppliance.isExteriorLighting>([\s\S]*?)<\/cim:ControlledAppliance.isExteriorLighting>/g, obj, "isExteriorLighting", base.to_boolean, sub, context);
                base.parse_element (/<cim:ControlledAppliance.isGenerationSystem>([\s\S]*?)<\/cim:ControlledAppliance.isGenerationSystem>/g, obj, "isGenerationSystem", base.to_boolean, sub, context);
                base.parse_element (/<cim:ControlledAppliance.isHvacCompressorOrFurnace>([\s\S]*?)<\/cim:ControlledAppliance.isHvacCompressorOrFurnace>/g, obj, "isHvacCompressorOrFurnace", base.to_boolean, sub, context);
                base.parse_element (/<cim:ControlledAppliance.isInteriorLighting>([\s\S]*?)<\/cim:ControlledAppliance.isInteriorLighting>/g, obj, "isInteriorLighting", base.to_boolean, sub, context);
                base.parse_element (/<cim:ControlledAppliance.isIrrigationPump>([\s\S]*?)<\/cim:ControlledAppliance.isIrrigationPump>/g, obj, "isIrrigationPump", base.to_boolean, sub, context);
                base.parse_element (/<cim:ControlledAppliance.isManagedCommercialIndustrialLoad>([\s\S]*?)<\/cim:ControlledAppliance.isManagedCommercialIndustrialLoad>/g, obj, "isManagedCommercialIndustrialLoad", base.to_boolean, sub, context);
                base.parse_element (/<cim:ControlledAppliance.isPoolPumpSpaJacuzzi>([\s\S]*?)<\/cim:ControlledAppliance.isPoolPumpSpaJacuzzi>/g, obj, "isPoolPumpSpaJacuzzi", base.to_boolean, sub, context);
                base.parse_element (/<cim:ControlledAppliance.isSimpleMiscLoad>([\s\S]*?)<\/cim:ControlledAppliance.isSimpleMiscLoad>/g, obj, "isSimpleMiscLoad", base.to_boolean, sub, context);
                base.parse_element (/<cim:ControlledAppliance.isSmartAppliance>([\s\S]*?)<\/cim:ControlledAppliance.isSmartAppliance>/g, obj, "isSmartAppliance", base.to_boolean, sub, context);
                base.parse_element (/<cim:ControlledAppliance.isStripAndBaseboardHeater>([\s\S]*?)<\/cim:ControlledAppliance.isStripAndBaseboardHeater>/g, obj, "isStripAndBaseboardHeater", base.to_boolean, sub, context);
                base.parse_element (/<cim:ControlledAppliance.isWaterHeater>([\s\S]*?)<\/cim:ControlledAppliance.isWaterHeater>/g, obj, "isWaterHeater", base.to_boolean, sub, context);
                var bucket = context.parsed.ControlledAppliance;
                if (null == bucket)
                   context.parsed.ControlledAppliance = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ControlledAppliance", "isElectricVehicle", "isElectricVehicle",  base.from_boolean, fields);
                base.export_element (obj, "ControlledAppliance", "isExteriorLighting", "isExteriorLighting",  base.from_boolean, fields);
                base.export_element (obj, "ControlledAppliance", "isGenerationSystem", "isGenerationSystem",  base.from_boolean, fields);
                base.export_element (obj, "ControlledAppliance", "isHvacCompressorOrFurnace", "isHvacCompressorOrFurnace",  base.from_boolean, fields);
                base.export_element (obj, "ControlledAppliance", "isInteriorLighting", "isInteriorLighting",  base.from_boolean, fields);
                base.export_element (obj, "ControlledAppliance", "isIrrigationPump", "isIrrigationPump",  base.from_boolean, fields);
                base.export_element (obj, "ControlledAppliance", "isManagedCommercialIndustrialLoad", "isManagedCommercialIndustrialLoad",  base.from_boolean, fields);
                base.export_element (obj, "ControlledAppliance", "isPoolPumpSpaJacuzzi", "isPoolPumpSpaJacuzzi",  base.from_boolean, fields);
                base.export_element (obj, "ControlledAppliance", "isSimpleMiscLoad", "isSimpleMiscLoad",  base.from_boolean, fields);
                base.export_element (obj, "ControlledAppliance", "isSmartAppliance", "isSmartAppliance",  base.from_boolean, fields);
                base.export_element (obj, "ControlledAppliance", "isStripAndBaseboardHeater", "isStripAndBaseboardHeater",  base.from_boolean, fields);
                base.export_element (obj, "ControlledAppliance", "isWaterHeater", "isWaterHeater",  base.from_boolean, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ControlledAppliance_collapse" aria-expanded="true" aria-controls="ControlledAppliance_collapse" style="margin-left: 10px;">ControlledAppliance</a></legend>
                    <div id="ControlledAppliance_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#isElectricVehicle}}<div><b>isElectricVehicle</b>: {{isElectricVehicle}}</div>{{/isElectricVehicle}}
                    {{#isExteriorLighting}}<div><b>isExteriorLighting</b>: {{isExteriorLighting}}</div>{{/isExteriorLighting}}
                    {{#isGenerationSystem}}<div><b>isGenerationSystem</b>: {{isGenerationSystem}}</div>{{/isGenerationSystem}}
                    {{#isHvacCompressorOrFurnace}}<div><b>isHvacCompressorOrFurnace</b>: {{isHvacCompressorOrFurnace}}</div>{{/isHvacCompressorOrFurnace}}
                    {{#isInteriorLighting}}<div><b>isInteriorLighting</b>: {{isInteriorLighting}}</div>{{/isInteriorLighting}}
                    {{#isIrrigationPump}}<div><b>isIrrigationPump</b>: {{isIrrigationPump}}</div>{{/isIrrigationPump}}
                    {{#isManagedCommercialIndustrialLoad}}<div><b>isManagedCommercialIndustrialLoad</b>: {{isManagedCommercialIndustrialLoad}}</div>{{/isManagedCommercialIndustrialLoad}}
                    {{#isPoolPumpSpaJacuzzi}}<div><b>isPoolPumpSpaJacuzzi</b>: {{isPoolPumpSpaJacuzzi}}</div>{{/isPoolPumpSpaJacuzzi}}
                    {{#isSimpleMiscLoad}}<div><b>isSimpleMiscLoad</b>: {{isSimpleMiscLoad}}</div>{{/isSimpleMiscLoad}}
                    {{#isSmartAppliance}}<div><b>isSmartAppliance</b>: {{isSmartAppliance}}</div>{{/isSmartAppliance}}
                    {{#isStripAndBaseboardHeater}}<div><b>isStripAndBaseboardHeater</b>: {{isStripAndBaseboardHeater}}</div>{{/isStripAndBaseboardHeater}}
                    {{#isWaterHeater}}<div><b>isWaterHeater</b>: {{isWaterHeater}}</div>{{/isWaterHeater}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_ControlledAppliance_collapse" aria-expanded="true" aria-controls="{{id}}_ControlledAppliance_collapse" style="margin-left: 10px;">ControlledAppliance</a></legend>
                    <div id="{{id}}_ControlledAppliance_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_isElectricVehicle'>isElectricVehicle: </label><div class='col-sm-8'><input id='{{id}}_isElectricVehicle' class='form-check-input' type='checkbox'{{#isElectricVehicle}} checked{{/isElectricVehicle}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_isExteriorLighting'>isExteriorLighting: </label><div class='col-sm-8'><input id='{{id}}_isExteriorLighting' class='form-check-input' type='checkbox'{{#isExteriorLighting}} checked{{/isExteriorLighting}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_isGenerationSystem'>isGenerationSystem: </label><div class='col-sm-8'><input id='{{id}}_isGenerationSystem' class='form-check-input' type='checkbox'{{#isGenerationSystem}} checked{{/isGenerationSystem}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_isHvacCompressorOrFurnace'>isHvacCompressorOrFurnace: </label><div class='col-sm-8'><input id='{{id}}_isHvacCompressorOrFurnace' class='form-check-input' type='checkbox'{{#isHvacCompressorOrFurnace}} checked{{/isHvacCompressorOrFurnace}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_isInteriorLighting'>isInteriorLighting: </label><div class='col-sm-8'><input id='{{id}}_isInteriorLighting' class='form-check-input' type='checkbox'{{#isInteriorLighting}} checked{{/isInteriorLighting}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_isIrrigationPump'>isIrrigationPump: </label><div class='col-sm-8'><input id='{{id}}_isIrrigationPump' class='form-check-input' type='checkbox'{{#isIrrigationPump}} checked{{/isIrrigationPump}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_isManagedCommercialIndustrialLoad'>isManagedCommercialIndustrialLoad: </label><div class='col-sm-8'><input id='{{id}}_isManagedCommercialIndustrialLoad' class='form-check-input' type='checkbox'{{#isManagedCommercialIndustrialLoad}} checked{{/isManagedCommercialIndustrialLoad}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_isPoolPumpSpaJacuzzi'>isPoolPumpSpaJacuzzi: </label><div class='col-sm-8'><input id='{{id}}_isPoolPumpSpaJacuzzi' class='form-check-input' type='checkbox'{{#isPoolPumpSpaJacuzzi}} checked{{/isPoolPumpSpaJacuzzi}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_isSimpleMiscLoad'>isSimpleMiscLoad: </label><div class='col-sm-8'><input id='{{id}}_isSimpleMiscLoad' class='form-check-input' type='checkbox'{{#isSimpleMiscLoad}} checked{{/isSimpleMiscLoad}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_isSmartAppliance'>isSmartAppliance: </label><div class='col-sm-8'><input id='{{id}}_isSmartAppliance' class='form-check-input' type='checkbox'{{#isSmartAppliance}} checked{{/isSmartAppliance}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_isStripAndBaseboardHeater'>isStripAndBaseboardHeater: </label><div class='col-sm-8'><input id='{{id}}_isStripAndBaseboardHeater' class='form-check-input' type='checkbox'{{#isStripAndBaseboardHeater}} checked{{/isStripAndBaseboardHeater}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_isWaterHeater'>isWaterHeater: </label><div class='col-sm-8'><input id='{{id}}_isWaterHeater' class='form-check-input' type='checkbox'{{#isWaterHeater}} checked{{/isWaterHeater}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ControlledAppliance" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_isElectricVehicle").checked; if (temp) obj.isElectricVehicle = true;
                temp = document.getElementById (id + "_isExteriorLighting").checked; if (temp) obj.isExteriorLighting = true;
                temp = document.getElementById (id + "_isGenerationSystem").checked; if (temp) obj.isGenerationSystem = true;
                temp = document.getElementById (id + "_isHvacCompressorOrFurnace").checked; if (temp) obj.isHvacCompressorOrFurnace = true;
                temp = document.getElementById (id + "_isInteriorLighting").checked; if (temp) obj.isInteriorLighting = true;
                temp = document.getElementById (id + "_isIrrigationPump").checked; if (temp) obj.isIrrigationPump = true;
                temp = document.getElementById (id + "_isManagedCommercialIndustrialLoad").checked; if (temp) obj.isManagedCommercialIndustrialLoad = true;
                temp = document.getElementById (id + "_isPoolPumpSpaJacuzzi").checked; if (temp) obj.isPoolPumpSpaJacuzzi = true;
                temp = document.getElementById (id + "_isSimpleMiscLoad").checked; if (temp) obj.isSimpleMiscLoad = true;
                temp = document.getElementById (id + "_isSmartAppliance").checked; if (temp) obj.isSmartAppliance = true;
                temp = document.getElementById (id + "_isStripAndBaseboardHeater").checked; if (temp) obj.isStripAndBaseboardHeater = true;
                temp = document.getElementById (id + "_isWaterHeater").checked; if (temp) obj.isWaterHeater = true;

                return (obj);
            }
        }

        /**
         * A device that indicates or records units of the commodity or other quantity measured.
         *
         */
        class Register extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Register;
                if (null == bucket)
                   cim_data.Register = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Register[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Register";
                base.parse_element (/<cim:Register.isVirtual>([\s\S]*?)<\/cim:Register.isVirtual>/g, obj, "isVirtual", base.to_boolean, sub, context);
                base.parse_element (/<cim:Register.leftDigitCount>([\s\S]*?)<\/cim:Register.leftDigitCount>/g, obj, "leftDigitCount", base.to_string, sub, context);
                base.parse_element (/<cim:Register.rightDigitCount>([\s\S]*?)<\/cim:Register.rightDigitCount>/g, obj, "rightDigitCount", base.to_string, sub, context);
                base.parse_element (/<cim:Register.touTier>([\s\S]*?)<\/cim:Register.touTier>/g, obj, "touTier", base.to_string, sub, context);
                base.parse_element (/<cim:Register.touTierName>([\s\S]*?)<\/cim:Register.touTierName>/g, obj, "touTierName", base.to_string, sub, context);
                base.parse_attribute (/<cim:Register.EndDeviceFunction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceFunction", sub, context);
                base.parse_attributes (/<cim:Register.Channels\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Channels", sub, context);
                var bucket = context.parsed.Register;
                if (null == bucket)
                   context.parsed.Register = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Register", "isVirtual", "isVirtual",  base.from_boolean, fields);
                base.export_element (obj, "Register", "leftDigitCount", "leftDigitCount",  base.from_string, fields);
                base.export_element (obj, "Register", "rightDigitCount", "rightDigitCount",  base.from_string, fields);
                base.export_element (obj, "Register", "touTier", "touTier",  base.from_string, fields);
                base.export_element (obj, "Register", "touTierName", "touTierName",  base.from_string, fields);
                base.export_attribute (obj, "Register", "EndDeviceFunction", "EndDeviceFunction", fields);
                base.export_attributes (obj, "Register", "Channels", "Channels", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Register_collapse" aria-expanded="true" aria-controls="Register_collapse" style="margin-left: 10px;">Register</a></legend>
                    <div id="Register_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#isVirtual}}<div><b>isVirtual</b>: {{isVirtual}}</div>{{/isVirtual}}
                    {{#leftDigitCount}}<div><b>leftDigitCount</b>: {{leftDigitCount}}</div>{{/leftDigitCount}}
                    {{#rightDigitCount}}<div><b>rightDigitCount</b>: {{rightDigitCount}}</div>{{/rightDigitCount}}
                    {{#touTier}}<div><b>touTier</b>: {{touTier}}</div>{{/touTier}}
                    {{#touTierName}}<div><b>touTierName</b>: {{touTierName}}</div>{{/touTierName}}
                    {{#EndDeviceFunction}}<div><b>EndDeviceFunction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EndDeviceFunction}}&quot;);})'>{{EndDeviceFunction}}</a></div>{{/EndDeviceFunction}}
                    {{#Channels}}<div><b>Channels</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Channels}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Channels) obj.Channels_string = obj.Channels.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Channels_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Register_collapse" aria-expanded="true" aria-controls="{{id}}_Register_collapse" style="margin-left: 10px;">Register</a></legend>
                    <div id="{{id}}_Register_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_isVirtual'>isVirtual: </label><div class='col-sm-8'><input id='{{id}}_isVirtual' class='form-check-input' type='checkbox'{{#isVirtual}} checked{{/isVirtual}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_leftDigitCount'>leftDigitCount: </label><div class='col-sm-8'><input id='{{id}}_leftDigitCount' class='form-control' type='text'{{#leftDigitCount}} value='{{leftDigitCount}}'{{/leftDigitCount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rightDigitCount'>rightDigitCount: </label><div class='col-sm-8'><input id='{{id}}_rightDigitCount' class='form-control' type='text'{{#rightDigitCount}} value='{{rightDigitCount}}'{{/rightDigitCount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_touTier'>touTier: </label><div class='col-sm-8'><input id='{{id}}_touTier' class='form-control' type='text'{{#touTier}} value='{{touTier}}'{{/touTier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_touTierName'>touTierName: </label><div class='col-sm-8'><input id='{{id}}_touTierName' class='form-control' type='text'{{#touTierName}} value='{{touTierName}}'{{/touTierName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EndDeviceFunction'>EndDeviceFunction: </label><div class='col-sm-8'><input id='{{id}}_EndDeviceFunction' class='form-control' type='text'{{#EndDeviceFunction}} value='{{EndDeviceFunction}}'{{/EndDeviceFunction}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Register" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_isVirtual").checked; if (temp) obj.isVirtual = true;
                temp = document.getElementById (id + "_leftDigitCount").value; if ("" != temp) obj.leftDigitCount = temp;
                temp = document.getElementById (id + "_rightDigitCount").value; if ("" != temp) obj.rightDigitCount = temp;
                temp = document.getElementById (id + "_touTier").value; if ("" != temp) obj.touTier = temp;
                temp = document.getElementById (id + "_touTierName").value; if ("" != temp) obj.touTierName = temp;
                temp = document.getElementById (id + "_EndDeviceFunction").value; if ("" != temp) obj.EndDeviceFunction = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EndDeviceFunction", "0..1", "0..*", "EndDeviceFunction", "Registers"],
                            ["Channels", "0..*", "0..1", "Channel", "Register"]
                        ]
                    )
                );
            }
        }

        /**
         * Instructs an end device (or an end device group) to perform a specified action.
         *
         */
        class EndDeviceControl extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.EndDeviceControl;
                if (null == bucket)
                   cim_data.EndDeviceControl = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EndDeviceControl[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "EndDeviceControl";
                base.parse_element (/<cim:EndDeviceControl.drProgramLevel>([\s\S]*?)<\/cim:EndDeviceControl.drProgramLevel>/g, obj, "drProgramLevel", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceControl.drProgramMandatory>([\s\S]*?)<\/cim:EndDeviceControl.drProgramMandatory>/g, obj, "drProgramMandatory", base.to_boolean, sub, context);
                base.parse_element (/<cim:EndDeviceControl.issuerID>([\s\S]*?)<\/cim:EndDeviceControl.issuerID>/g, obj, "issuerID", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceControl.issuerTrackingID>([\s\S]*?)<\/cim:EndDeviceControl.issuerTrackingID>/g, obj, "issuerTrackingID", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceControl.priceSignal>([\s\S]*?)<\/cim:EndDeviceControl.priceSignal>/g, obj, "priceSignal", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceControl.primaryDeviceTiming>([\s\S]*?)<\/cim:EndDeviceControl.primaryDeviceTiming>/g, obj, "primaryDeviceTiming", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceControl.reason>([\s\S]*?)<\/cim:EndDeviceControl.reason>/g, obj, "reason", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceControl.scheduledInterval>([\s\S]*?)<\/cim:EndDeviceControl.scheduledInterval>/g, obj, "scheduledInterval", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceControl.secondaryDeviceTiming>([\s\S]*?)<\/cim:EndDeviceControl.secondaryDeviceTiming>/g, obj, "secondaryDeviceTiming", base.to_string, sub, context);
                base.parse_attributes (/<cim:EndDeviceControl.EndDeviceGroups\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceGroups", sub, context);
                base.parse_attribute (/<cim:EndDeviceControl.EndDeviceControlType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceControlType", sub, context);
                base.parse_attribute (/<cim:EndDeviceControl.EndDeviceAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceAction", sub, context);
                base.parse_attributes (/<cim:EndDeviceControl.UsagePoints\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UsagePoints", sub, context);
                base.parse_attributes (/<cim:EndDeviceControl.UsagePointGroups\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UsagePointGroups", sub, context);
                base.parse_attributes (/<cim:EndDeviceControl.EndDevices\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDevices", sub, context);
                var bucket = context.parsed.EndDeviceControl;
                if (null == bucket)
                   context.parsed.EndDeviceControl = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "EndDeviceControl", "drProgramLevel", "drProgramLevel",  base.from_string, fields);
                base.export_element (obj, "EndDeviceControl", "drProgramMandatory", "drProgramMandatory",  base.from_boolean, fields);
                base.export_element (obj, "EndDeviceControl", "issuerID", "issuerID",  base.from_string, fields);
                base.export_element (obj, "EndDeviceControl", "issuerTrackingID", "issuerTrackingID",  base.from_string, fields);
                base.export_element (obj, "EndDeviceControl", "priceSignal", "priceSignal",  base.from_string, fields);
                base.export_element (obj, "EndDeviceControl", "primaryDeviceTiming", "primaryDeviceTiming",  base.from_string, fields);
                base.export_element (obj, "EndDeviceControl", "reason", "reason",  base.from_string, fields);
                base.export_element (obj, "EndDeviceControl", "scheduledInterval", "scheduledInterval",  base.from_string, fields);
                base.export_element (obj, "EndDeviceControl", "secondaryDeviceTiming", "secondaryDeviceTiming",  base.from_string, fields);
                base.export_attributes (obj, "EndDeviceControl", "EndDeviceGroups", "EndDeviceGroups", fields);
                base.export_attribute (obj, "EndDeviceControl", "EndDeviceControlType", "EndDeviceControlType", fields);
                base.export_attribute (obj, "EndDeviceControl", "EndDeviceAction", "EndDeviceAction", fields);
                base.export_attributes (obj, "EndDeviceControl", "UsagePoints", "UsagePoints", fields);
                base.export_attributes (obj, "EndDeviceControl", "UsagePointGroups", "UsagePointGroups", fields);
                base.export_attributes (obj, "EndDeviceControl", "EndDevices", "EndDevices", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EndDeviceControl_collapse" aria-expanded="true" aria-controls="EndDeviceControl_collapse" style="margin-left: 10px;">EndDeviceControl</a></legend>
                    <div id="EndDeviceControl_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#drProgramLevel}}<div><b>drProgramLevel</b>: {{drProgramLevel}}</div>{{/drProgramLevel}}
                    {{#drProgramMandatory}}<div><b>drProgramMandatory</b>: {{drProgramMandatory}}</div>{{/drProgramMandatory}}
                    {{#issuerID}}<div><b>issuerID</b>: {{issuerID}}</div>{{/issuerID}}
                    {{#issuerTrackingID}}<div><b>issuerTrackingID</b>: {{issuerTrackingID}}</div>{{/issuerTrackingID}}
                    {{#priceSignal}}<div><b>priceSignal</b>: {{priceSignal}}</div>{{/priceSignal}}
                    {{#primaryDeviceTiming}}<div><b>primaryDeviceTiming</b>: {{primaryDeviceTiming}}</div>{{/primaryDeviceTiming}}
                    {{#reason}}<div><b>reason</b>: {{reason}}</div>{{/reason}}
                    {{#scheduledInterval}}<div><b>scheduledInterval</b>: {{scheduledInterval}}</div>{{/scheduledInterval}}
                    {{#secondaryDeviceTiming}}<div><b>secondaryDeviceTiming</b>: {{secondaryDeviceTiming}}</div>{{/secondaryDeviceTiming}}
                    {{#EndDeviceGroups}}<div><b>EndDeviceGroups</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EndDeviceGroups}}
                    {{#EndDeviceControlType}}<div><b>EndDeviceControlType</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EndDeviceControlType}}&quot;);})'>{{EndDeviceControlType}}</a></div>{{/EndDeviceControlType}}
                    {{#EndDeviceAction}}<div><b>EndDeviceAction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EndDeviceAction}}&quot;);})'>{{EndDeviceAction}}</a></div>{{/EndDeviceAction}}
                    {{#UsagePoints}}<div><b>UsagePoints</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/UsagePoints}}
                    {{#UsagePointGroups}}<div><b>UsagePointGroups</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/UsagePointGroups}}
                    {{#EndDevices}}<div><b>EndDevices</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EndDevices}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.EndDeviceGroups) obj.EndDeviceGroups_string = obj.EndDeviceGroups.join ();
                if (obj.UsagePoints) obj.UsagePoints_string = obj.UsagePoints.join ();
                if (obj.UsagePointGroups) obj.UsagePointGroups_string = obj.UsagePointGroups.join ();
                if (obj.EndDevices) obj.EndDevices_string = obj.EndDevices.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.EndDeviceGroups_string;
                delete obj.UsagePoints_string;
                delete obj.UsagePointGroups_string;
                delete obj.EndDevices_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_EndDeviceControl_collapse" aria-expanded="true" aria-controls="{{id}}_EndDeviceControl_collapse" style="margin-left: 10px;">EndDeviceControl</a></legend>
                    <div id="{{id}}_EndDeviceControl_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_drProgramLevel'>drProgramLevel: </label><div class='col-sm-8'><input id='{{id}}_drProgramLevel' class='form-control' type='text'{{#drProgramLevel}} value='{{drProgramLevel}}'{{/drProgramLevel}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_drProgramMandatory'>drProgramMandatory: </label><div class='col-sm-8'><input id='{{id}}_drProgramMandatory' class='form-check-input' type='checkbox'{{#drProgramMandatory}} checked{{/drProgramMandatory}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_issuerID'>issuerID: </label><div class='col-sm-8'><input id='{{id}}_issuerID' class='form-control' type='text'{{#issuerID}} value='{{issuerID}}'{{/issuerID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_issuerTrackingID'>issuerTrackingID: </label><div class='col-sm-8'><input id='{{id}}_issuerTrackingID' class='form-control' type='text'{{#issuerTrackingID}} value='{{issuerTrackingID}}'{{/issuerTrackingID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_priceSignal'>priceSignal: </label><div class='col-sm-8'><input id='{{id}}_priceSignal' class='form-control' type='text'{{#priceSignal}} value='{{priceSignal}}'{{/priceSignal}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_primaryDeviceTiming'>primaryDeviceTiming: </label><div class='col-sm-8'><input id='{{id}}_primaryDeviceTiming' class='form-control' type='text'{{#primaryDeviceTiming}} value='{{primaryDeviceTiming}}'{{/primaryDeviceTiming}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_reason'>reason: </label><div class='col-sm-8'><input id='{{id}}_reason' class='form-control' type='text'{{#reason}} value='{{reason}}'{{/reason}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_scheduledInterval'>scheduledInterval: </label><div class='col-sm-8'><input id='{{id}}_scheduledInterval' class='form-control' type='text'{{#scheduledInterval}} value='{{scheduledInterval}}'{{/scheduledInterval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_secondaryDeviceTiming'>secondaryDeviceTiming: </label><div class='col-sm-8'><input id='{{id}}_secondaryDeviceTiming' class='form-control' type='text'{{#secondaryDeviceTiming}} value='{{secondaryDeviceTiming}}'{{/secondaryDeviceTiming}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EndDeviceGroups'>EndDeviceGroups: </label><div class='col-sm-8'><input id='{{id}}_EndDeviceGroups' class='form-control' type='text'{{#EndDeviceGroups}} value='{{EndDeviceGroups}}_string'{{/EndDeviceGroups}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EndDeviceControlType'>EndDeviceControlType: </label><div class='col-sm-8'><input id='{{id}}_EndDeviceControlType' class='form-control' type='text'{{#EndDeviceControlType}} value='{{EndDeviceControlType}}'{{/EndDeviceControlType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EndDeviceAction'>EndDeviceAction: </label><div class='col-sm-8'><input id='{{id}}_EndDeviceAction' class='form-control' type='text'{{#EndDeviceAction}} value='{{EndDeviceAction}}'{{/EndDeviceAction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_UsagePoints'>UsagePoints: </label><div class='col-sm-8'><input id='{{id}}_UsagePoints' class='form-control' type='text'{{#UsagePoints}} value='{{UsagePoints}}_string'{{/UsagePoints}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_UsagePointGroups'>UsagePointGroups: </label><div class='col-sm-8'><input id='{{id}}_UsagePointGroups' class='form-control' type='text'{{#UsagePointGroups}} value='{{UsagePointGroups}}_string'{{/UsagePointGroups}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EndDevices'>EndDevices: </label><div class='col-sm-8'><input id='{{id}}_EndDevices' class='form-control' type='text'{{#EndDevices}} value='{{EndDevices}}_string'{{/EndDevices}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "EndDeviceControl" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_drProgramLevel").value; if ("" != temp) obj.drProgramLevel = temp;
                temp = document.getElementById (id + "_drProgramMandatory").checked; if (temp) obj.drProgramMandatory = true;
                temp = document.getElementById (id + "_issuerID").value; if ("" != temp) obj.issuerID = temp;
                temp = document.getElementById (id + "_issuerTrackingID").value; if ("" != temp) obj.issuerTrackingID = temp;
                temp = document.getElementById (id + "_priceSignal").value; if ("" != temp) obj.priceSignal = temp;
                temp = document.getElementById (id + "_primaryDeviceTiming").value; if ("" != temp) obj.primaryDeviceTiming = temp;
                temp = document.getElementById (id + "_reason").value; if ("" != temp) obj.reason = temp;
                temp = document.getElementById (id + "_scheduledInterval").value; if ("" != temp) obj.scheduledInterval = temp;
                temp = document.getElementById (id + "_secondaryDeviceTiming").value; if ("" != temp) obj.secondaryDeviceTiming = temp;
                temp = document.getElementById (id + "_EndDeviceGroups").value; if ("" != temp) obj.EndDeviceGroups = temp.split (",");
                temp = document.getElementById (id + "_EndDeviceControlType").value; if ("" != temp) obj.EndDeviceControlType = temp;
                temp = document.getElementById (id + "_EndDeviceAction").value; if ("" != temp) obj.EndDeviceAction = temp;
                temp = document.getElementById (id + "_UsagePoints").value; if ("" != temp) obj.UsagePoints = temp.split (",");
                temp = document.getElementById (id + "_UsagePointGroups").value; if ("" != temp) obj.UsagePointGroups = temp.split (",");
                temp = document.getElementById (id + "_EndDevices").value; if ("" != temp) obj.EndDevices = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EndDeviceGroups", "0..*", "0..*", "EndDeviceGroup", "EndDeviceControls"],
                            ["EndDeviceControlType", "1", "0..*", "EndDeviceControlType", "EndDeviceControls"],
                            ["EndDeviceAction", "0..1", "0..1", "EndDeviceAction", "EndDeviceControl"],
                            ["UsagePoints", "0..*", "0..*", "UsagePoint", "EndDeviceControls"],
                            ["UsagePointGroups", "0..*", "0..*", "UsagePointGroup", "EndDeviceControls"],
                            ["EndDevices", "0..*", "0..*", "EndDevice", "EndDeviceControls"]
                        ]
                    )
                );
            }
        }

        /**
         * Detail for a single price command/action.
         *
         */
        class PanPricingDetail extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PanPricingDetail;
                if (null == bucket)
                   cim_data.PanPricingDetail = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PanPricingDetail[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "PanPricingDetail";
                base.parse_element (/<cim:PanPricingDetail.alternateCostDelivered>([\s\S]*?)<\/cim:PanPricingDetail.alternateCostDelivered>/g, obj, "alternateCostDelivered", base.to_float, sub, context);
                base.parse_element (/<cim:PanPricingDetail.alternateCostUnit>([\s\S]*?)<\/cim:PanPricingDetail.alternateCostUnit>/g, obj, "alternateCostUnit", base.to_string, sub, context);
                base.parse_element (/<cim:PanPricingDetail.currentTimeDate>([\s\S]*?)<\/cim:PanPricingDetail.currentTimeDate>/g, obj, "currentTimeDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:PanPricingDetail.generationPrice>([\s\S]*?)<\/cim:PanPricingDetail.generationPrice>/g, obj, "generationPrice", base.to_string, sub, context);
                base.parse_element (/<cim:PanPricingDetail.generationPriceRatio>([\s\S]*?)<\/cim:PanPricingDetail.generationPriceRatio>/g, obj, "generationPriceRatio", base.to_float, sub, context);
                base.parse_element (/<cim:PanPricingDetail.price>([\s\S]*?)<\/cim:PanPricingDetail.price>/g, obj, "price", base.to_string, sub, context);
                base.parse_element (/<cim:PanPricingDetail.priceRatio>([\s\S]*?)<\/cim:PanPricingDetail.priceRatio>/g, obj, "priceRatio", base.to_float, sub, context);
                base.parse_element (/<cim:PanPricingDetail.priceTier>([\s\S]*?)<\/cim:PanPricingDetail.priceTier>/g, obj, "priceTier", base.to_string, sub, context);
                base.parse_element (/<cim:PanPricingDetail.priceTierCount>([\s\S]*?)<\/cim:PanPricingDetail.priceTierCount>/g, obj, "priceTierCount", base.to_string, sub, context);
                base.parse_element (/<cim:PanPricingDetail.priceTierLabel>([\s\S]*?)<\/cim:PanPricingDetail.priceTierLabel>/g, obj, "priceTierLabel", base.to_string, sub, context);
                base.parse_element (/<cim:PanPricingDetail.rateLabel>([\s\S]*?)<\/cim:PanPricingDetail.rateLabel>/g, obj, "rateLabel", base.to_string, sub, context);
                base.parse_element (/<cim:PanPricingDetail.registerTier>([\s\S]*?)<\/cim:PanPricingDetail.registerTier>/g, obj, "registerTier", base.to_string, sub, context);
                base.parse_element (/<cim:PanPricingDetail.unitOfMeasure>([\s\S]*?)<\/cim:PanPricingDetail.unitOfMeasure>/g, obj, "unitOfMeasure", base.to_string, sub, context);
                base.parse_attribute (/<cim:PanPricingDetail.PanPricing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PanPricing", sub, context);
                var bucket = context.parsed.PanPricingDetail;
                if (null == bucket)
                   context.parsed.PanPricingDetail = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "PanPricingDetail", "alternateCostDelivered", "alternateCostDelivered",  base.from_float, fields);
                base.export_element (obj, "PanPricingDetail", "alternateCostUnit", "alternateCostUnit",  base.from_string, fields);
                base.export_element (obj, "PanPricingDetail", "currentTimeDate", "currentTimeDate",  base.from_datetime, fields);
                base.export_element (obj, "PanPricingDetail", "generationPrice", "generationPrice",  base.from_string, fields);
                base.export_element (obj, "PanPricingDetail", "generationPriceRatio", "generationPriceRatio",  base.from_float, fields);
                base.export_element (obj, "PanPricingDetail", "price", "price",  base.from_string, fields);
                base.export_element (obj, "PanPricingDetail", "priceRatio", "priceRatio",  base.from_float, fields);
                base.export_element (obj, "PanPricingDetail", "priceTier", "priceTier",  base.from_string, fields);
                base.export_element (obj, "PanPricingDetail", "priceTierCount", "priceTierCount",  base.from_string, fields);
                base.export_element (obj, "PanPricingDetail", "priceTierLabel", "priceTierLabel",  base.from_string, fields);
                base.export_element (obj, "PanPricingDetail", "rateLabel", "rateLabel",  base.from_string, fields);
                base.export_element (obj, "PanPricingDetail", "registerTier", "registerTier",  base.from_string, fields);
                base.export_element (obj, "PanPricingDetail", "unitOfMeasure", "unitOfMeasure",  base.from_string, fields);
                base.export_attribute (obj, "PanPricingDetail", "PanPricing", "PanPricing", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PanPricingDetail_collapse" aria-expanded="true" aria-controls="PanPricingDetail_collapse" style="margin-left: 10px;">PanPricingDetail</a></legend>
                    <div id="PanPricingDetail_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#alternateCostDelivered}}<div><b>alternateCostDelivered</b>: {{alternateCostDelivered}}</div>{{/alternateCostDelivered}}
                    {{#alternateCostUnit}}<div><b>alternateCostUnit</b>: {{alternateCostUnit}}</div>{{/alternateCostUnit}}
                    {{#currentTimeDate}}<div><b>currentTimeDate</b>: {{currentTimeDate}}</div>{{/currentTimeDate}}
                    {{#generationPrice}}<div><b>generationPrice</b>: {{generationPrice}}</div>{{/generationPrice}}
                    {{#generationPriceRatio}}<div><b>generationPriceRatio</b>: {{generationPriceRatio}}</div>{{/generationPriceRatio}}
                    {{#price}}<div><b>price</b>: {{price}}</div>{{/price}}
                    {{#priceRatio}}<div><b>priceRatio</b>: {{priceRatio}}</div>{{/priceRatio}}
                    {{#priceTier}}<div><b>priceTier</b>: {{priceTier}}</div>{{/priceTier}}
                    {{#priceTierCount}}<div><b>priceTierCount</b>: {{priceTierCount}}</div>{{/priceTierCount}}
                    {{#priceTierLabel}}<div><b>priceTierLabel</b>: {{priceTierLabel}}</div>{{/priceTierLabel}}
                    {{#rateLabel}}<div><b>rateLabel</b>: {{rateLabel}}</div>{{/rateLabel}}
                    {{#registerTier}}<div><b>registerTier</b>: {{registerTier}}</div>{{/registerTier}}
                    {{#unitOfMeasure}}<div><b>unitOfMeasure</b>: {{unitOfMeasure}}</div>{{/unitOfMeasure}}
                    {{#PanPricing}}<div><b>PanPricing</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PanPricing}}&quot;);})'>{{PanPricing}}</a></div>{{/PanPricing}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_PanPricingDetail_collapse" aria-expanded="true" aria-controls="{{id}}_PanPricingDetail_collapse" style="margin-left: 10px;">PanPricingDetail</a></legend>
                    <div id="{{id}}_PanPricingDetail_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_alternateCostDelivered'>alternateCostDelivered: </label><div class='col-sm-8'><input id='{{id}}_alternateCostDelivered' class='form-control' type='text'{{#alternateCostDelivered}} value='{{alternateCostDelivered}}'{{/alternateCostDelivered}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_alternateCostUnit'>alternateCostUnit: </label><div class='col-sm-8'><input id='{{id}}_alternateCostUnit' class='form-control' type='text'{{#alternateCostUnit}} value='{{alternateCostUnit}}'{{/alternateCostUnit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_currentTimeDate'>currentTimeDate: </label><div class='col-sm-8'><input id='{{id}}_currentTimeDate' class='form-control' type='text'{{#currentTimeDate}} value='{{currentTimeDate}}'{{/currentTimeDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_generationPrice'>generationPrice: </label><div class='col-sm-8'><input id='{{id}}_generationPrice' class='form-control' type='text'{{#generationPrice}} value='{{generationPrice}}'{{/generationPrice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_generationPriceRatio'>generationPriceRatio: </label><div class='col-sm-8'><input id='{{id}}_generationPriceRatio' class='form-control' type='text'{{#generationPriceRatio}} value='{{generationPriceRatio}}'{{/generationPriceRatio}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_price'>price: </label><div class='col-sm-8'><input id='{{id}}_price' class='form-control' type='text'{{#price}} value='{{price}}'{{/price}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_priceRatio'>priceRatio: </label><div class='col-sm-8'><input id='{{id}}_priceRatio' class='form-control' type='text'{{#priceRatio}} value='{{priceRatio}}'{{/priceRatio}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_priceTier'>priceTier: </label><div class='col-sm-8'><input id='{{id}}_priceTier' class='form-control' type='text'{{#priceTier}} value='{{priceTier}}'{{/priceTier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_priceTierCount'>priceTierCount: </label><div class='col-sm-8'><input id='{{id}}_priceTierCount' class='form-control' type='text'{{#priceTierCount}} value='{{priceTierCount}}'{{/priceTierCount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_priceTierLabel'>priceTierLabel: </label><div class='col-sm-8'><input id='{{id}}_priceTierLabel' class='form-control' type='text'{{#priceTierLabel}} value='{{priceTierLabel}}'{{/priceTierLabel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rateLabel'>rateLabel: </label><div class='col-sm-8'><input id='{{id}}_rateLabel' class='form-control' type='text'{{#rateLabel}} value='{{rateLabel}}'{{/rateLabel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_registerTier'>registerTier: </label><div class='col-sm-8'><input id='{{id}}_registerTier' class='form-control' type='text'{{#registerTier}} value='{{registerTier}}'{{/registerTier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unitOfMeasure'>unitOfMeasure: </label><div class='col-sm-8'><input id='{{id}}_unitOfMeasure' class='form-control' type='text'{{#unitOfMeasure}} value='{{unitOfMeasure}}'{{/unitOfMeasure}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PanPricing'>PanPricing: </label><div class='col-sm-8'><input id='{{id}}_PanPricing' class='form-control' type='text'{{#PanPricing}} value='{{PanPricing}}'{{/PanPricing}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PanPricingDetail" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_alternateCostDelivered").value; if ("" != temp) obj.alternateCostDelivered = temp;
                temp = document.getElementById (id + "_alternateCostUnit").value; if ("" != temp) obj.alternateCostUnit = temp;
                temp = document.getElementById (id + "_currentTimeDate").value; if ("" != temp) obj.currentTimeDate = temp;
                temp = document.getElementById (id + "_generationPrice").value; if ("" != temp) obj.generationPrice = temp;
                temp = document.getElementById (id + "_generationPriceRatio").value; if ("" != temp) obj.generationPriceRatio = temp;
                temp = document.getElementById (id + "_price").value; if ("" != temp) obj.price = temp;
                temp = document.getElementById (id + "_priceRatio").value; if ("" != temp) obj.priceRatio = temp;
                temp = document.getElementById (id + "_priceTier").value; if ("" != temp) obj.priceTier = temp;
                temp = document.getElementById (id + "_priceTierCount").value; if ("" != temp) obj.priceTierCount = temp;
                temp = document.getElementById (id + "_priceTierLabel").value; if ("" != temp) obj.priceTierLabel = temp;
                temp = document.getElementById (id + "_rateLabel").value; if ("" != temp) obj.rateLabel = temp;
                temp = document.getElementById (id + "_registerTier").value; if ("" != temp) obj.registerTier = temp;
                temp = document.getElementById (id + "_unitOfMeasure").value; if ("" != temp) obj.unitOfMeasure = temp;
                temp = document.getElementById (id + "_PanPricing").value; if ("" != temp) obj.PanPricing = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PanPricing", "0..1", "0..*", "PanPricing", "PanPricingDetails"]
                        ]
                    )
                );
            }
        }

        /**
         * Logical or physical point in the network to which readings or events may be attributed.
         *
         * Used at the place where a physical or virtual meter may be located; however, it is not required that a meter be present.
         *
         */
        class UsagePoint extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.UsagePoint;
                if (null == bucket)
                   cim_data.UsagePoint = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.UsagePoint[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "UsagePoint";
                base.parse_attribute (/<cim:UsagePoint.amiBillingReady\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "amiBillingReady", sub, context);
                base.parse_element (/<cim:UsagePoint.checkBilling>([\s\S]*?)<\/cim:UsagePoint.checkBilling>/g, obj, "checkBilling", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:UsagePoint.connectionState\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "connectionState", sub, context);
                base.parse_element (/<cim:UsagePoint.estimatedLoad>([\s\S]*?)<\/cim:UsagePoint.estimatedLoad>/g, obj, "estimatedLoad", base.to_string, sub, context);
                base.parse_element (/<cim:UsagePoint.grounded>([\s\S]*?)<\/cim:UsagePoint.grounded>/g, obj, "grounded", base.to_boolean, sub, context);
                base.parse_element (/<cim:UsagePoint.isSdp>([\s\S]*?)<\/cim:UsagePoint.isSdp>/g, obj, "isSdp", base.to_boolean, sub, context);
                base.parse_element (/<cim:UsagePoint.isVirtual>([\s\S]*?)<\/cim:UsagePoint.isVirtual>/g, obj, "isVirtual", base.to_boolean, sub, context);
                base.parse_element (/<cim:UsagePoint.minimalUsageExpected>([\s\S]*?)<\/cim:UsagePoint.minimalUsageExpected>/g, obj, "minimalUsageExpected", base.to_boolean, sub, context);
                base.parse_element (/<cim:UsagePoint.nominalServiceVoltage>([\s\S]*?)<\/cim:UsagePoint.nominalServiceVoltage>/g, obj, "nominalServiceVoltage", base.to_string, sub, context);
                base.parse_element (/<cim:UsagePoint.outageRegion>([\s\S]*?)<\/cim:UsagePoint.outageRegion>/g, obj, "outageRegion", base.to_string, sub, context);
                base.parse_element (/<cim:UsagePoint.phaseCode>([\s\S]*?)<\/cim:UsagePoint.phaseCode>/g, obj, "phaseCode", base.to_string, sub, context);
                base.parse_element (/<cim:UsagePoint.ratedCurrent>([\s\S]*?)<\/cim:UsagePoint.ratedCurrent>/g, obj, "ratedCurrent", base.to_string, sub, context);
                base.parse_element (/<cim:UsagePoint.ratedPower>([\s\S]*?)<\/cim:UsagePoint.ratedPower>/g, obj, "ratedPower", base.to_string, sub, context);
                base.parse_element (/<cim:UsagePoint.readCycle>([\s\S]*?)<\/cim:UsagePoint.readCycle>/g, obj, "readCycle", base.to_string, sub, context);
                base.parse_element (/<cim:UsagePoint.readRoute>([\s\S]*?)<\/cim:UsagePoint.readRoute>/g, obj, "readRoute", base.to_string, sub, context);
                base.parse_element (/<cim:UsagePoint.serviceDeliveryRemark>([\s\S]*?)<\/cim:UsagePoint.serviceDeliveryRemark>/g, obj, "serviceDeliveryRemark", base.to_string, sub, context);
                base.parse_element (/<cim:UsagePoint.servicePriority>([\s\S]*?)<\/cim:UsagePoint.servicePriority>/g, obj, "servicePriority", base.to_string, sub, context);
                base.parse_attributes (/<cim:UsagePoint.Equipments\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Equipments", sub, context);
                base.parse_attributes (/<cim:UsagePoint.MeterReadings\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MeterReadings", sub, context);
                base.parse_attribute (/<cim:UsagePoint.CustomerAgreement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAgreement", sub, context);
                base.parse_attributes (/<cim:UsagePoint.PricingStructures\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PricingStructures", sub, context);
                base.parse_attribute (/<cim:UsagePoint.ServiceSupplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ServiceSupplier", sub, context);
                base.parse_attributes (/<cim:UsagePoint.ConfigurationEvents\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConfigurationEvents", sub, context);
                base.parse_attributes (/<cim:UsagePoint.EndDevices\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDevices", sub, context);
                base.parse_attributes (/<cim:UsagePoint.Outages\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Outages", sub, context);
                base.parse_attributes (/<cim:UsagePoint.MeterServiceWorks\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MeterServiceWorks", sub, context);
                base.parse_attributes (/<cim:UsagePoint.MetrologyRequirements\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MetrologyRequirements", sub, context);
                base.parse_attributes (/<cim:UsagePoint.ServiceMultipliers\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ServiceMultipliers", sub, context);
                base.parse_attribute (/<cim:UsagePoint.UsagePointLocation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UsagePointLocation", sub, context);
                base.parse_attributes (/<cim:UsagePoint.EndDeviceEvents\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceEvents", sub, context);
                base.parse_attribute (/<cim:UsagePoint.ServiceCategory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ServiceCategory", sub, context);
                base.parse_attribute (/<cim:UsagePoint.ServiceLocation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ServiceLocation", sub, context);
                base.parse_attributes (/<cim:UsagePoint.UsagePointGroups\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UsagePointGroups", sub, context);
                base.parse_attributes (/<cim:UsagePoint.EndDeviceControls\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceControls", sub, context);
                var bucket = context.parsed.UsagePoint;
                if (null == bucket)
                   context.parsed.UsagePoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "UsagePoint", "amiBillingReady", "amiBillingReady", fields);
                base.export_element (obj, "UsagePoint", "checkBilling", "checkBilling",  base.from_boolean, fields);
                base.export_attribute (obj, "UsagePoint", "connectionState", "connectionState", fields);
                base.export_element (obj, "UsagePoint", "estimatedLoad", "estimatedLoad",  base.from_string, fields);
                base.export_element (obj, "UsagePoint", "grounded", "grounded",  base.from_boolean, fields);
                base.export_element (obj, "UsagePoint", "isSdp", "isSdp",  base.from_boolean, fields);
                base.export_element (obj, "UsagePoint", "isVirtual", "isVirtual",  base.from_boolean, fields);
                base.export_element (obj, "UsagePoint", "minimalUsageExpected", "minimalUsageExpected",  base.from_boolean, fields);
                base.export_element (obj, "UsagePoint", "nominalServiceVoltage", "nominalServiceVoltage",  base.from_string, fields);
                base.export_element (obj, "UsagePoint", "outageRegion", "outageRegion",  base.from_string, fields);
                base.export_element (obj, "UsagePoint", "phaseCode", "phaseCode",  base.from_string, fields);
                base.export_element (obj, "UsagePoint", "ratedCurrent", "ratedCurrent",  base.from_string, fields);
                base.export_element (obj, "UsagePoint", "ratedPower", "ratedPower",  base.from_string, fields);
                base.export_element (obj, "UsagePoint", "readCycle", "readCycle",  base.from_string, fields);
                base.export_element (obj, "UsagePoint", "readRoute", "readRoute",  base.from_string, fields);
                base.export_element (obj, "UsagePoint", "serviceDeliveryRemark", "serviceDeliveryRemark",  base.from_string, fields);
                base.export_element (obj, "UsagePoint", "servicePriority", "servicePriority",  base.from_string, fields);
                base.export_attributes (obj, "UsagePoint", "Equipments", "Equipments", fields);
                base.export_attributes (obj, "UsagePoint", "MeterReadings", "MeterReadings", fields);
                base.export_attribute (obj, "UsagePoint", "CustomerAgreement", "CustomerAgreement", fields);
                base.export_attributes (obj, "UsagePoint", "PricingStructures", "PricingStructures", fields);
                base.export_attribute (obj, "UsagePoint", "ServiceSupplier", "ServiceSupplier", fields);
                base.export_attributes (obj, "UsagePoint", "ConfigurationEvents", "ConfigurationEvents", fields);
                base.export_attributes (obj, "UsagePoint", "EndDevices", "EndDevices", fields);
                base.export_attributes (obj, "UsagePoint", "Outages", "Outages", fields);
                base.export_attributes (obj, "UsagePoint", "MeterServiceWorks", "MeterServiceWorks", fields);
                base.export_attributes (obj, "UsagePoint", "MetrologyRequirements", "MetrologyRequirements", fields);
                base.export_attributes (obj, "UsagePoint", "ServiceMultipliers", "ServiceMultipliers", fields);
                base.export_attribute (obj, "UsagePoint", "UsagePointLocation", "UsagePointLocation", fields);
                base.export_attributes (obj, "UsagePoint", "EndDeviceEvents", "EndDeviceEvents", fields);
                base.export_attribute (obj, "UsagePoint", "ServiceCategory", "ServiceCategory", fields);
                base.export_attribute (obj, "UsagePoint", "ServiceLocation", "ServiceLocation", fields);
                base.export_attributes (obj, "UsagePoint", "UsagePointGroups", "UsagePointGroups", fields);
                base.export_attributes (obj, "UsagePoint", "EndDeviceControls", "EndDeviceControls", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#UsagePoint_collapse" aria-expanded="true" aria-controls="UsagePoint_collapse" style="margin-left: 10px;">UsagePoint</a></legend>
                    <div id="UsagePoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#amiBillingReady}}<div><b>amiBillingReady</b>: {{amiBillingReady}}</div>{{/amiBillingReady}}
                    {{#checkBilling}}<div><b>checkBilling</b>: {{checkBilling}}</div>{{/checkBilling}}
                    {{#connectionState}}<div><b>connectionState</b>: {{connectionState}}</div>{{/connectionState}}
                    {{#estimatedLoad}}<div><b>estimatedLoad</b>: {{estimatedLoad}}</div>{{/estimatedLoad}}
                    {{#grounded}}<div><b>grounded</b>: {{grounded}}</div>{{/grounded}}
                    {{#isSdp}}<div><b>isSdp</b>: {{isSdp}}</div>{{/isSdp}}
                    {{#isVirtual}}<div><b>isVirtual</b>: {{isVirtual}}</div>{{/isVirtual}}
                    {{#minimalUsageExpected}}<div><b>minimalUsageExpected</b>: {{minimalUsageExpected}}</div>{{/minimalUsageExpected}}
                    {{#nominalServiceVoltage}}<div><b>nominalServiceVoltage</b>: {{nominalServiceVoltage}}</div>{{/nominalServiceVoltage}}
                    {{#outageRegion}}<div><b>outageRegion</b>: {{outageRegion}}</div>{{/outageRegion}}
                    {{#phaseCode}}<div><b>phaseCode</b>: {{phaseCode}}</div>{{/phaseCode}}
                    {{#ratedCurrent}}<div><b>ratedCurrent</b>: {{ratedCurrent}}</div>{{/ratedCurrent}}
                    {{#ratedPower}}<div><b>ratedPower</b>: {{ratedPower}}</div>{{/ratedPower}}
                    {{#readCycle}}<div><b>readCycle</b>: {{readCycle}}</div>{{/readCycle}}
                    {{#readRoute}}<div><b>readRoute</b>: {{readRoute}}</div>{{/readRoute}}
                    {{#serviceDeliveryRemark}}<div><b>serviceDeliveryRemark</b>: {{serviceDeliveryRemark}}</div>{{/serviceDeliveryRemark}}
                    {{#servicePriority}}<div><b>servicePriority</b>: {{servicePriority}}</div>{{/servicePriority}}
                    {{#Equipments}}<div><b>Equipments</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Equipments}}
                    {{#MeterReadings}}<div><b>MeterReadings</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MeterReadings}}
                    {{#CustomerAgreement}}<div><b>CustomerAgreement</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CustomerAgreement}}&quot;);})'>{{CustomerAgreement}}</a></div>{{/CustomerAgreement}}
                    {{#PricingStructures}}<div><b>PricingStructures</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/PricingStructures}}
                    {{#ServiceSupplier}}<div><b>ServiceSupplier</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ServiceSupplier}}&quot;);})'>{{ServiceSupplier}}</a></div>{{/ServiceSupplier}}
                    {{#ConfigurationEvents}}<div><b>ConfigurationEvents</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ConfigurationEvents}}
                    {{#EndDevices}}<div><b>EndDevices</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EndDevices}}
                    {{#Outages}}<div><b>Outages</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Outages}}
                    {{#MeterServiceWorks}}<div><b>MeterServiceWorks</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MeterServiceWorks}}
                    {{#MetrologyRequirements}}<div><b>MetrologyRequirements</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MetrologyRequirements}}
                    {{#ServiceMultipliers}}<div><b>ServiceMultipliers</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ServiceMultipliers}}
                    {{#UsagePointLocation}}<div><b>UsagePointLocation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{UsagePointLocation}}&quot;);})'>{{UsagePointLocation}}</a></div>{{/UsagePointLocation}}
                    {{#EndDeviceEvents}}<div><b>EndDeviceEvents</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EndDeviceEvents}}
                    {{#ServiceCategory}}<div><b>ServiceCategory</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ServiceCategory}}&quot;);})'>{{ServiceCategory}}</a></div>{{/ServiceCategory}}
                    {{#ServiceLocation}}<div><b>ServiceLocation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ServiceLocation}}&quot;);})'>{{ServiceLocation}}</a></div>{{/ServiceLocation}}
                    {{#UsagePointGroups}}<div><b>UsagePointGroups</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/UsagePointGroups}}
                    {{#EndDeviceControls}}<div><b>EndDeviceControls</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EndDeviceControls}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.AmiBillingReadyKind = []; if (!obj.amiBillingReady) obj.AmiBillingReadyKind.push ({ id: '', selected: true}); for (var property in AmiBillingReadyKind) obj.AmiBillingReadyKind.push ({ id: property, selected: obj.amiBillingReady && obj.amiBillingReady.endsWith ('.' + property)});
                obj.UsagePointConnectedKind = []; if (!obj.connectionState) obj.UsagePointConnectedKind.push ({ id: '', selected: true}); for (var property in UsagePointConnectedKind) obj.UsagePointConnectedKind.push ({ id: property, selected: obj.connectionState && obj.connectionState.endsWith ('.' + property)});
                if (obj.Equipments) obj.Equipments_string = obj.Equipments.join ();
                if (obj.MeterReadings) obj.MeterReadings_string = obj.MeterReadings.join ();
                if (obj.PricingStructures) obj.PricingStructures_string = obj.PricingStructures.join ();
                if (obj.ConfigurationEvents) obj.ConfigurationEvents_string = obj.ConfigurationEvents.join ();
                if (obj.EndDevices) obj.EndDevices_string = obj.EndDevices.join ();
                if (obj.Outages) obj.Outages_string = obj.Outages.join ();
                if (obj.MeterServiceWorks) obj.MeterServiceWorks_string = obj.MeterServiceWorks.join ();
                if (obj.MetrologyRequirements) obj.MetrologyRequirements_string = obj.MetrologyRequirements.join ();
                if (obj.ServiceMultipliers) obj.ServiceMultipliers_string = obj.ServiceMultipliers.join ();
                if (obj.EndDeviceEvents) obj.EndDeviceEvents_string = obj.EndDeviceEvents.join ();
                if (obj.UsagePointGroups) obj.UsagePointGroups_string = obj.UsagePointGroups.join ();
                if (obj.EndDeviceControls) obj.EndDeviceControls_string = obj.EndDeviceControls.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.AmiBillingReadyKind;
                delete obj.UsagePointConnectedKind;
                delete obj.Equipments_string;
                delete obj.MeterReadings_string;
                delete obj.PricingStructures_string;
                delete obj.ConfigurationEvents_string;
                delete obj.EndDevices_string;
                delete obj.Outages_string;
                delete obj.MeterServiceWorks_string;
                delete obj.MetrologyRequirements_string;
                delete obj.ServiceMultipliers_string;
                delete obj.EndDeviceEvents_string;
                delete obj.UsagePointGroups_string;
                delete obj.EndDeviceControls_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_UsagePoint_collapse" aria-expanded="true" aria-controls="{{id}}_UsagePoint_collapse" style="margin-left: 10px;">UsagePoint</a></legend>
                    <div id="{{id}}_UsagePoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_amiBillingReady'>amiBillingReady: </label><div class='col-sm-8'><select id='{{id}}_amiBillingReady' class='form-control'>{{#AmiBillingReadyKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/AmiBillingReadyKind}}</select></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_checkBilling'>checkBilling: </label><div class='col-sm-8'><input id='{{id}}_checkBilling' class='form-check-input' type='checkbox'{{#checkBilling}} checked{{/checkBilling}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_connectionState'>connectionState: </label><div class='col-sm-8'><select id='{{id}}_connectionState' class='form-control'>{{#UsagePointConnectedKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UsagePointConnectedKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_estimatedLoad'>estimatedLoad: </label><div class='col-sm-8'><input id='{{id}}_estimatedLoad' class='form-control' type='text'{{#estimatedLoad}} value='{{estimatedLoad}}'{{/estimatedLoad}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_grounded'>grounded: </label><div class='col-sm-8'><input id='{{id}}_grounded' class='form-check-input' type='checkbox'{{#grounded}} checked{{/grounded}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_isSdp'>isSdp: </label><div class='col-sm-8'><input id='{{id}}_isSdp' class='form-check-input' type='checkbox'{{#isSdp}} checked{{/isSdp}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_isVirtual'>isVirtual: </label><div class='col-sm-8'><input id='{{id}}_isVirtual' class='form-check-input' type='checkbox'{{#isVirtual}} checked{{/isVirtual}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_minimalUsageExpected'>minimalUsageExpected: </label><div class='col-sm-8'><input id='{{id}}_minimalUsageExpected' class='form-check-input' type='checkbox'{{#minimalUsageExpected}} checked{{/minimalUsageExpected}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_nominalServiceVoltage'>nominalServiceVoltage: </label><div class='col-sm-8'><input id='{{id}}_nominalServiceVoltage' class='form-control' type='text'{{#nominalServiceVoltage}} value='{{nominalServiceVoltage}}'{{/nominalServiceVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_outageRegion'>outageRegion: </label><div class='col-sm-8'><input id='{{id}}_outageRegion' class='form-control' type='text'{{#outageRegion}} value='{{outageRegion}}'{{/outageRegion}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_phaseCode'>phaseCode: </label><div class='col-sm-8'><input id='{{id}}_phaseCode' class='form-control' type='text'{{#phaseCode}} value='{{phaseCode}}'{{/phaseCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedCurrent'>ratedCurrent: </label><div class='col-sm-8'><input id='{{id}}_ratedCurrent' class='form-control' type='text'{{#ratedCurrent}} value='{{ratedCurrent}}'{{/ratedCurrent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedPower'>ratedPower: </label><div class='col-sm-8'><input id='{{id}}_ratedPower' class='form-control' type='text'{{#ratedPower}} value='{{ratedPower}}'{{/ratedPower}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_readCycle'>readCycle: </label><div class='col-sm-8'><input id='{{id}}_readCycle' class='form-control' type='text'{{#readCycle}} value='{{readCycle}}'{{/readCycle}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_readRoute'>readRoute: </label><div class='col-sm-8'><input id='{{id}}_readRoute' class='form-control' type='text'{{#readRoute}} value='{{readRoute}}'{{/readRoute}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_serviceDeliveryRemark'>serviceDeliveryRemark: </label><div class='col-sm-8'><input id='{{id}}_serviceDeliveryRemark' class='form-control' type='text'{{#serviceDeliveryRemark}} value='{{serviceDeliveryRemark}}'{{/serviceDeliveryRemark}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_servicePriority'>servicePriority: </label><div class='col-sm-8'><input id='{{id}}_servicePriority' class='form-control' type='text'{{#servicePriority}} value='{{servicePriority}}'{{/servicePriority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Equipments'>Equipments: </label><div class='col-sm-8'><input id='{{id}}_Equipments' class='form-control' type='text'{{#Equipments}} value='{{Equipments}}_string'{{/Equipments}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CustomerAgreement'>CustomerAgreement: </label><div class='col-sm-8'><input id='{{id}}_CustomerAgreement' class='form-control' type='text'{{#CustomerAgreement}} value='{{CustomerAgreement}}'{{/CustomerAgreement}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PricingStructures'>PricingStructures: </label><div class='col-sm-8'><input id='{{id}}_PricingStructures' class='form-control' type='text'{{#PricingStructures}} value='{{PricingStructures}}_string'{{/PricingStructures}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ServiceSupplier'>ServiceSupplier: </label><div class='col-sm-8'><input id='{{id}}_ServiceSupplier' class='form-control' type='text'{{#ServiceSupplier}} value='{{ServiceSupplier}}'{{/ServiceSupplier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Outages'>Outages: </label><div class='col-sm-8'><input id='{{id}}_Outages' class='form-control' type='text'{{#Outages}} value='{{Outages}}_string'{{/Outages}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MetrologyRequirements'>MetrologyRequirements: </label><div class='col-sm-8'><input id='{{id}}_MetrologyRequirements' class='form-control' type='text'{{#MetrologyRequirements}} value='{{MetrologyRequirements}}_string'{{/MetrologyRequirements}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_UsagePointLocation'>UsagePointLocation: </label><div class='col-sm-8'><input id='{{id}}_UsagePointLocation' class='form-control' type='text'{{#UsagePointLocation}} value='{{UsagePointLocation}}'{{/UsagePointLocation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ServiceCategory'>ServiceCategory: </label><div class='col-sm-8'><input id='{{id}}_ServiceCategory' class='form-control' type='text'{{#ServiceCategory}} value='{{ServiceCategory}}'{{/ServiceCategory}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ServiceLocation'>ServiceLocation: </label><div class='col-sm-8'><input id='{{id}}_ServiceLocation' class='form-control' type='text'{{#ServiceLocation}} value='{{ServiceLocation}}'{{/ServiceLocation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_UsagePointGroups'>UsagePointGroups: </label><div class='col-sm-8'><input id='{{id}}_UsagePointGroups' class='form-control' type='text'{{#UsagePointGroups}} value='{{UsagePointGroups}}_string'{{/UsagePointGroups}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EndDeviceControls'>EndDeviceControls: </label><div class='col-sm-8'><input id='{{id}}_EndDeviceControls' class='form-control' type='text'{{#EndDeviceControls}} value='{{EndDeviceControls}}_string'{{/EndDeviceControls}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "UsagePoint" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_amiBillingReady").value; if ("" != temp) { temp = AmiBillingReadyKind[temp]; if ("undefined" != typeof (temp)) obj.amiBillingReady = "#http://iec.ch/TC57/2013/CIM-schema-cim16#AmiBillingReadyKind." + temp; }
                temp = document.getElementById (id + "_checkBilling").checked; if (temp) obj.checkBilling = true;
                temp = document.getElementById (id + "_connectionState").value; if ("" != temp) { temp = UsagePointConnectedKind[temp]; if ("undefined" != typeof (temp)) obj.connectionState = "#http://iec.ch/TC57/2013/CIM-schema-cim16#UsagePointConnectedKind." + temp; }
                temp = document.getElementById (id + "_estimatedLoad").value; if ("" != temp) obj.estimatedLoad = temp;
                temp = document.getElementById (id + "_grounded").checked; if (temp) obj.grounded = true;
                temp = document.getElementById (id + "_isSdp").checked; if (temp) obj.isSdp = true;
                temp = document.getElementById (id + "_isVirtual").checked; if (temp) obj.isVirtual = true;
                temp = document.getElementById (id + "_minimalUsageExpected").checked; if (temp) obj.minimalUsageExpected = true;
                temp = document.getElementById (id + "_nominalServiceVoltage").value; if ("" != temp) obj.nominalServiceVoltage = temp;
                temp = document.getElementById (id + "_outageRegion").value; if ("" != temp) obj.outageRegion = temp;
                temp = document.getElementById (id + "_phaseCode").value; if ("" != temp) obj.phaseCode = temp;
                temp = document.getElementById (id + "_ratedCurrent").value; if ("" != temp) obj.ratedCurrent = temp;
                temp = document.getElementById (id + "_ratedPower").value; if ("" != temp) obj.ratedPower = temp;
                temp = document.getElementById (id + "_readCycle").value; if ("" != temp) obj.readCycle = temp;
                temp = document.getElementById (id + "_readRoute").value; if ("" != temp) obj.readRoute = temp;
                temp = document.getElementById (id + "_serviceDeliveryRemark").value; if ("" != temp) obj.serviceDeliveryRemark = temp;
                temp = document.getElementById (id + "_servicePriority").value; if ("" != temp) obj.servicePriority = temp;
                temp = document.getElementById (id + "_Equipments").value; if ("" != temp) obj.Equipments = temp.split (",");
                temp = document.getElementById (id + "_CustomerAgreement").value; if ("" != temp) obj.CustomerAgreement = temp;
                temp = document.getElementById (id + "_PricingStructures").value; if ("" != temp) obj.PricingStructures = temp.split (",");
                temp = document.getElementById (id + "_ServiceSupplier").value; if ("" != temp) obj.ServiceSupplier = temp;
                temp = document.getElementById (id + "_Outages").value; if ("" != temp) obj.Outages = temp.split (",");
                temp = document.getElementById (id + "_MetrologyRequirements").value; if ("" != temp) obj.MetrologyRequirements = temp.split (",");
                temp = document.getElementById (id + "_UsagePointLocation").value; if ("" != temp) obj.UsagePointLocation = temp;
                temp = document.getElementById (id + "_ServiceCategory").value; if ("" != temp) obj.ServiceCategory = temp;
                temp = document.getElementById (id + "_ServiceLocation").value; if ("" != temp) obj.ServiceLocation = temp;
                temp = document.getElementById (id + "_UsagePointGroups").value; if ("" != temp) obj.UsagePointGroups = temp.split (",");
                temp = document.getElementById (id + "_EndDeviceControls").value; if ("" != temp) obj.EndDeviceControls = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Equipments", "0..*", "0..*", "Equipment", "UsagePoints"],
                            ["MeterReadings", "0..*", "0..1", "MeterReading", "UsagePoint"],
                            ["CustomerAgreement", "0..1", "0..*", "CustomerAgreement", "UsagePoints"],
                            ["PricingStructures", "0..*", "0..*", "PricingStructure", "UsagePoints"],
                            ["ServiceSupplier", "0..1", "0..*", "ServiceSupplier", "UsagePoints"],
                            ["ConfigurationEvents", "0..*", "0..1", "ConfigurationEvent", "ChangedUsagePoint"],
                            ["EndDevices", "0..*", "0..1", "EndDevice", "UsagePoint"],
                            ["Outages", "0..*", "0..*", "Outage", "UsagePoints"],
                            ["MeterServiceWorks", "0..*", "0..1", "MeterServiceWork", "UsagePoint"],
                            ["MetrologyRequirements", "0..*", "0..*", "MetrologyRequirement", "UsagePoints"],
                            ["ServiceMultipliers", "0..*", "0..1", "ServiceMultiplier", "UsagePoint"],
                            ["UsagePointLocation", "0..1", "0..*", "UsagePointLocation", "UsagePoints"],
                            ["EndDeviceEvents", "0..*", "0..1", "EndDeviceEvent", "UsagePoint"],
                            ["ServiceCategory", "0..1", "0..*", "ServiceCategory", "UsagePoints"],
                            ["ServiceLocation", "0..1", "0..*", "ServiceLocation", "UsagePoints"],
                            ["UsagePointGroups", "0..*", "0..*", "UsagePointGroup", "UsagePoints"],
                            ["EndDeviceControls", "0..*", "0..*", "EndDeviceControl", "UsagePoints"]
                        ]
                    )
                );
            }
        }

        /**
         * Rational number = 'numerator' / 'denominator'.
         *
         */
        class RationalNumber extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.RationalNumber;
                if (null == bucket)
                   cim_data.RationalNumber = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RationalNumber[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "RationalNumber";
                base.parse_element (/<cim:RationalNumber.denominator>([\s\S]*?)<\/cim:RationalNumber.denominator>/g, obj, "denominator", base.to_string, sub, context);
                base.parse_element (/<cim:RationalNumber.numerator>([\s\S]*?)<\/cim:RationalNumber.numerator>/g, obj, "numerator", base.to_string, sub, context);
                var bucket = context.parsed.RationalNumber;
                if (null == bucket)
                   context.parsed.RationalNumber = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "RationalNumber", "denominator", "denominator",  base.from_string, fields);
                base.export_element (obj, "RationalNumber", "numerator", "numerator",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RationalNumber_collapse" aria-expanded="true" aria-controls="RationalNumber_collapse" style="margin-left: 10px;">RationalNumber</a></legend>
                    <div id="RationalNumber_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#denominator}}<div><b>denominator</b>: {{denominator}}</div>{{/denominator}}
                    {{#numerator}}<div><b>numerator</b>: {{numerator}}</div>{{/numerator}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_RationalNumber_collapse" aria-expanded="true" aria-controls="{{id}}_RationalNumber_collapse" style="margin-left: 10px;">RationalNumber</a></legend>
                    <div id="{{id}}_RationalNumber_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominator'>denominator: </label><div class='col-sm-8'><input id='{{id}}_denominator' class='form-control' type='text'{{#denominator}} value='{{denominator}}'{{/denominator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_numerator'>numerator: </label><div class='col-sm-8'><input id='{{id}}_numerator' class='form-control' type='text'{{#numerator}} value='{{numerator}}'{{/numerator}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "RationalNumber" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_denominator").value; if ("" != temp) obj.denominator = temp;
                temp = document.getElementById (id + "_numerator").value; if ("" != temp) obj.numerator = temp;

                return (obj);
            }
        }

        /**
         * Name-value pair, specific to end device events.
         *
         */
        class EndDeviceEventDetail extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.EndDeviceEventDetail;
                if (null == bucket)
                   cim_data.EndDeviceEventDetail = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EndDeviceEventDetail[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "EndDeviceEventDetail";
                base.parse_element (/<cim:EndDeviceEventDetail.name>([\s\S]*?)<\/cim:EndDeviceEventDetail.name>/g, obj, "name", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceEventDetail.value>([\s\S]*?)<\/cim:EndDeviceEventDetail.value>/g, obj, "value", base.to_string, sub, context);
                base.parse_attribute (/<cim:EndDeviceEventDetail.EndDeviceEvent\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceEvent", sub, context);
                var bucket = context.parsed.EndDeviceEventDetail;
                if (null == bucket)
                   context.parsed.EndDeviceEventDetail = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "EndDeviceEventDetail", "name", "name",  base.from_string, fields);
                base.export_element (obj, "EndDeviceEventDetail", "value", "value",  base.from_string, fields);
                base.export_attribute (obj, "EndDeviceEventDetail", "EndDeviceEvent", "EndDeviceEvent", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EndDeviceEventDetail_collapse" aria-expanded="true" aria-controls="EndDeviceEventDetail_collapse" style="margin-left: 10px;">EndDeviceEventDetail</a></legend>
                    <div id="EndDeviceEventDetail_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#name}}<div><b>name</b>: {{name}}</div>{{/name}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    {{#EndDeviceEvent}}<div><b>EndDeviceEvent</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EndDeviceEvent}}&quot;);})'>{{EndDeviceEvent}}</a></div>{{/EndDeviceEvent}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_EndDeviceEventDetail_collapse" aria-expanded="true" aria-controls="{{id}}_EndDeviceEventDetail_collapse" style="margin-left: 10px;">EndDeviceEventDetail</a></legend>
                    <div id="{{id}}_EndDeviceEventDetail_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_name'>name: </label><div class='col-sm-8'><input id='{{id}}_name' class='form-control' type='text'{{#name}} value='{{name}}'{{/name}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EndDeviceEvent'>EndDeviceEvent: </label><div class='col-sm-8'><input id='{{id}}_EndDeviceEvent' class='form-control' type='text'{{#EndDeviceEvent}} value='{{EndDeviceEvent}}'{{/EndDeviceEvent}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "EndDeviceEventDetail" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_name").value; if ("" != temp) obj.name = temp;
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;
                temp = document.getElementById (id + "_EndDeviceEvent").value; if ("" != temp) obj.EndDeviceEvent = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EndDeviceEvent", "0..1", "0..*", "EndDeviceEvent", "EndDeviceEventDetails"]
                        ]
                    )
                );
            }
        }

        /**
         * Set of values obtained from the meter.
         *
         */
        class MeterReading extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.MeterReading;
                if (null == bucket)
                   cim_data.MeterReading = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MeterReading[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MeterReading";
                base.parse_element (/<cim:MeterReading.isCoincidentTrigger>([\s\S]*?)<\/cim:MeterReading.isCoincidentTrigger>/g, obj, "isCoincidentTrigger", base.to_boolean, sub, context);
                base.parse_element (/<cim:MeterReading.valuesInterval>([\s\S]*?)<\/cim:MeterReading.valuesInterval>/g, obj, "valuesInterval", base.to_string, sub, context);
                base.parse_attribute (/<cim:MeterReading.UsagePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UsagePoint", sub, context);
                base.parse_attribute (/<cim:MeterReading.Meter\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Meter", sub, context);
                base.parse_attributes (/<cim:MeterReading.Readings\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Readings", sub, context);
                base.parse_attributes (/<cim:MeterReading.EndDeviceEvents\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceEvents", sub, context);
                base.parse_attribute (/<cim:MeterReading.CustomerAgreement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAgreement", sub, context);
                base.parse_attributes (/<cim:MeterReading.IntervalBlocks\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "IntervalBlocks", sub, context);
                var bucket = context.parsed.MeterReading;
                if (null == bucket)
                   context.parsed.MeterReading = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "MeterReading", "isCoincidentTrigger", "isCoincidentTrigger",  base.from_boolean, fields);
                base.export_element (obj, "MeterReading", "valuesInterval", "valuesInterval",  base.from_string, fields);
                base.export_attribute (obj, "MeterReading", "UsagePoint", "UsagePoint", fields);
                base.export_attribute (obj, "MeterReading", "Meter", "Meter", fields);
                base.export_attributes (obj, "MeterReading", "Readings", "Readings", fields);
                base.export_attributes (obj, "MeterReading", "EndDeviceEvents", "EndDeviceEvents", fields);
                base.export_attribute (obj, "MeterReading", "CustomerAgreement", "CustomerAgreement", fields);
                base.export_attributes (obj, "MeterReading", "IntervalBlocks", "IntervalBlocks", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MeterReading_collapse" aria-expanded="true" aria-controls="MeterReading_collapse" style="margin-left: 10px;">MeterReading</a></legend>
                    <div id="MeterReading_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#isCoincidentTrigger}}<div><b>isCoincidentTrigger</b>: {{isCoincidentTrigger}}</div>{{/isCoincidentTrigger}}
                    {{#valuesInterval}}<div><b>valuesInterval</b>: {{valuesInterval}}</div>{{/valuesInterval}}
                    {{#UsagePoint}}<div><b>UsagePoint</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{UsagePoint}}&quot;);})'>{{UsagePoint}}</a></div>{{/UsagePoint}}
                    {{#Meter}}<div><b>Meter</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Meter}}&quot;);})'>{{Meter}}</a></div>{{/Meter}}
                    {{#Readings}}<div><b>Readings</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Readings}}
                    {{#EndDeviceEvents}}<div><b>EndDeviceEvents</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EndDeviceEvents}}
                    {{#CustomerAgreement}}<div><b>CustomerAgreement</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CustomerAgreement}}&quot;);})'>{{CustomerAgreement}}</a></div>{{/CustomerAgreement}}
                    {{#IntervalBlocks}}<div><b>IntervalBlocks</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/IntervalBlocks}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Readings) obj.Readings_string = obj.Readings.join ();
                if (obj.EndDeviceEvents) obj.EndDeviceEvents_string = obj.EndDeviceEvents.join ();
                if (obj.IntervalBlocks) obj.IntervalBlocks_string = obj.IntervalBlocks.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Readings_string;
                delete obj.EndDeviceEvents_string;
                delete obj.IntervalBlocks_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_MeterReading_collapse" aria-expanded="true" aria-controls="{{id}}_MeterReading_collapse" style="margin-left: 10px;">MeterReading</a></legend>
                    <div id="{{id}}_MeterReading_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_isCoincidentTrigger'>isCoincidentTrigger: </label><div class='col-sm-8'><input id='{{id}}_isCoincidentTrigger' class='form-check-input' type='checkbox'{{#isCoincidentTrigger}} checked{{/isCoincidentTrigger}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_valuesInterval'>valuesInterval: </label><div class='col-sm-8'><input id='{{id}}_valuesInterval' class='form-control' type='text'{{#valuesInterval}} value='{{valuesInterval}}'{{/valuesInterval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_UsagePoint'>UsagePoint: </label><div class='col-sm-8'><input id='{{id}}_UsagePoint' class='form-control' type='text'{{#UsagePoint}} value='{{UsagePoint}}'{{/UsagePoint}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Meter'>Meter: </label><div class='col-sm-8'><input id='{{id}}_Meter' class='form-control' type='text'{{#Meter}} value='{{Meter}}'{{/Meter}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Readings'>Readings: </label><div class='col-sm-8'><input id='{{id}}_Readings' class='form-control' type='text'{{#Readings}} value='{{Readings}}_string'{{/Readings}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CustomerAgreement'>CustomerAgreement: </label><div class='col-sm-8'><input id='{{id}}_CustomerAgreement' class='form-control' type='text'{{#CustomerAgreement}} value='{{CustomerAgreement}}'{{/CustomerAgreement}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "MeterReading" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_isCoincidentTrigger").checked; if (temp) obj.isCoincidentTrigger = true;
                temp = document.getElementById (id + "_valuesInterval").value; if ("" != temp) obj.valuesInterval = temp;
                temp = document.getElementById (id + "_UsagePoint").value; if ("" != temp) obj.UsagePoint = temp;
                temp = document.getElementById (id + "_Meter").value; if ("" != temp) obj.Meter = temp;
                temp = document.getElementById (id + "_Readings").value; if ("" != temp) obj.Readings = temp.split (",");
                temp = document.getElementById (id + "_CustomerAgreement").value; if ("" != temp) obj.CustomerAgreement = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["UsagePoint", "0..1", "0..*", "UsagePoint", "MeterReadings"],
                            ["Meter", "0..1", "0..*", "Meter", "MeterReadings"],
                            ["Readings", "0..*", "0..*", "Reading", "MeterReadings"],
                            ["EndDeviceEvents", "0..*", "0..1", "EndDeviceEvent", "MeterReading"],
                            ["CustomerAgreement", "0..1", "0..*", "CustomerAgreement", "MeterReadings"],
                            ["IntervalBlocks", "0..*", "0..1", "IntervalBlock", "MeterReading"]
                        ]
                    )
                );
            }
        }

        /**
         * A single path for the collection or reporting of register values over a period of time.
         *
         * For example, a register which measures forward energy can have two channels, one providing bulk quantity readings and the other providing interval readings of a fixed interval size.
         *
         */
        class Channel extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Channel;
                if (null == bucket)
                   cim_data.Channel = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Channel[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Channel";
                base.parse_element (/<cim:Channel.isVirtual>([\s\S]*?)<\/cim:Channel.isVirtual>/g, obj, "isVirtual", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:Channel.Register\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Register", sub, context);
                base.parse_attribute (/<cim:Channel.ReadingType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReadingType", sub, context);
                var bucket = context.parsed.Channel;
                if (null == bucket)
                   context.parsed.Channel = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Channel", "isVirtual", "isVirtual",  base.from_boolean, fields);
                base.export_attribute (obj, "Channel", "Register", "Register", fields);
                base.export_attribute (obj, "Channel", "ReadingType", "ReadingType", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Channel_collapse" aria-expanded="true" aria-controls="Channel_collapse" style="margin-left: 10px;">Channel</a></legend>
                    <div id="Channel_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#isVirtual}}<div><b>isVirtual</b>: {{isVirtual}}</div>{{/isVirtual}}
                    {{#Register}}<div><b>Register</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Register}}&quot;);})'>{{Register}}</a></div>{{/Register}}
                    {{#ReadingType}}<div><b>ReadingType</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ReadingType}}&quot;);})'>{{ReadingType}}</a></div>{{/ReadingType}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Channel_collapse" aria-expanded="true" aria-controls="{{id}}_Channel_collapse" style="margin-left: 10px;">Channel</a></legend>
                    <div id="{{id}}_Channel_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_isVirtual'>isVirtual: </label><div class='col-sm-8'><input id='{{id}}_isVirtual' class='form-check-input' type='checkbox'{{#isVirtual}} checked{{/isVirtual}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Register'>Register: </label><div class='col-sm-8'><input id='{{id}}_Register' class='form-control' type='text'{{#Register}} value='{{Register}}'{{/Register}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ReadingType'>ReadingType: </label><div class='col-sm-8'><input id='{{id}}_ReadingType' class='form-control' type='text'{{#ReadingType}} value='{{ReadingType}}'{{/ReadingType}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Channel" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_isVirtual").checked; if (temp) obj.isVirtual = true;
                temp = document.getElementById (id + "_Register").value; if ("" != temp) obj.Register = temp;
                temp = document.getElementById (id + "_ReadingType").value; if ("" != temp) obj.ReadingType = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Register", "0..1", "0..*", "Register", "Channels"],
                            ["ReadingType", "0..1", "0..1", "ReadingType", "Channel"]
                        ]
                    )
                );
            }
        }

        /**
         * Quality of a specific reading value or interval reading value.
         *
         * Note that more than one quality may be applicable to a given reading. Typically not used unless problems or unusual conditions occur (i.e., quality for each reading is assumed to be good unless stated otherwise in associated reading quality type). It can also be used with the corresponding reading quality type to indicate that the validation has been performed and succeeded.
         *
         */
        class ReadingQuality extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ReadingQuality;
                if (null == bucket)
                   cim_data.ReadingQuality = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ReadingQuality[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ReadingQuality";
                base.parse_element (/<cim:ReadingQuality.comment>([\s\S]*?)<\/cim:ReadingQuality.comment>/g, obj, "comment", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingQuality.source>([\s\S]*?)<\/cim:ReadingQuality.source>/g, obj, "source", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingQuality.timeStamp>([\s\S]*?)<\/cim:ReadingQuality.timeStamp>/g, obj, "timeStamp", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:ReadingQuality.ReadingQualityType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReadingQualityType", sub, context);
                base.parse_attribute (/<cim:ReadingQuality.Reading\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Reading", sub, context);
                var bucket = context.parsed.ReadingQuality;
                if (null == bucket)
                   context.parsed.ReadingQuality = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ReadingQuality", "comment", "comment",  base.from_string, fields);
                base.export_element (obj, "ReadingQuality", "source", "source",  base.from_string, fields);
                base.export_element (obj, "ReadingQuality", "timeStamp", "timeStamp",  base.from_datetime, fields);
                base.export_attribute (obj, "ReadingQuality", "ReadingQualityType", "ReadingQualityType", fields);
                base.export_attribute (obj, "ReadingQuality", "Reading", "Reading", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ReadingQuality_collapse" aria-expanded="true" aria-controls="ReadingQuality_collapse" style="margin-left: 10px;">ReadingQuality</a></legend>
                    <div id="ReadingQuality_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#comment}}<div><b>comment</b>: {{comment}}</div>{{/comment}}
                    {{#source}}<div><b>source</b>: {{source}}</div>{{/source}}
                    {{#timeStamp}}<div><b>timeStamp</b>: {{timeStamp}}</div>{{/timeStamp}}
                    {{#ReadingQualityType}}<div><b>ReadingQualityType</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ReadingQualityType}}&quot;);})'>{{ReadingQualityType}}</a></div>{{/ReadingQualityType}}
                    {{#Reading}}<div><b>Reading</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Reading}}&quot;);})'>{{Reading}}</a></div>{{/Reading}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_ReadingQuality_collapse" aria-expanded="true" aria-controls="{{id}}_ReadingQuality_collapse" style="margin-left: 10px;">ReadingQuality</a></legend>
                    <div id="{{id}}_ReadingQuality_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_comment'>comment: </label><div class='col-sm-8'><input id='{{id}}_comment' class='form-control' type='text'{{#comment}} value='{{comment}}'{{/comment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_source'>source: </label><div class='col-sm-8'><input id='{{id}}_source' class='form-control' type='text'{{#source}} value='{{source}}'{{/source}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_timeStamp'>timeStamp: </label><div class='col-sm-8'><input id='{{id}}_timeStamp' class='form-control' type='text'{{#timeStamp}} value='{{timeStamp}}'{{/timeStamp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ReadingQualityType'>ReadingQualityType: </label><div class='col-sm-8'><input id='{{id}}_ReadingQualityType' class='form-control' type='text'{{#ReadingQualityType}} value='{{ReadingQualityType}}'{{/ReadingQualityType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Reading'>Reading: </label><div class='col-sm-8'><input id='{{id}}_Reading' class='form-control' type='text'{{#Reading}} value='{{Reading}}'{{/Reading}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ReadingQuality" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_comment").value; if ("" != temp) obj.comment = temp;
                temp = document.getElementById (id + "_source").value; if ("" != temp) obj.source = temp;
                temp = document.getElementById (id + "_timeStamp").value; if ("" != temp) obj.timeStamp = temp;
                temp = document.getElementById (id + "_ReadingQualityType").value; if ("" != temp) obj.ReadingQualityType = temp;
                temp = document.getElementById (id + "_Reading").value; if ("" != temp) obj.Reading = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ReadingQualityType", "1", "0..*", "ReadingQualityType", "ReadingQualities"],
                            ["Reading", "0..1", "0..*", "BaseReading", "ReadingQualities"]
                        ]
                    )
                );
            }
        }

        /**
         * Multiplier applied at the meter.
         *
         */
        class MeterMultiplier extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.MeterMultiplier;
                if (null == bucket)
                   cim_data.MeterMultiplier = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MeterMultiplier[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MeterMultiplier";
                base.parse_attribute (/<cim:MeterMultiplier.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:MeterMultiplier.value>([\s\S]*?)<\/cim:MeterMultiplier.value>/g, obj, "value", base.to_float, sub, context);
                base.parse_attribute (/<cim:MeterMultiplier.Meter\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Meter", sub, context);
                var bucket = context.parsed.MeterMultiplier;
                if (null == bucket)
                   context.parsed.MeterMultiplier = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MeterMultiplier", "kind", "kind", fields);
                base.export_element (obj, "MeterMultiplier", "value", "value",  base.from_float, fields);
                base.export_attribute (obj, "MeterMultiplier", "Meter", "Meter", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MeterMultiplier_collapse" aria-expanded="true" aria-controls="MeterMultiplier_collapse" style="margin-left: 10px;">MeterMultiplier</a></legend>
                    <div id="MeterMultiplier_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    {{#Meter}}<div><b>Meter</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Meter}}&quot;);})'>{{Meter}}</a></div>{{/Meter}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.MeterMultiplierKind = []; if (!obj.kind) obj.MeterMultiplierKind.push ({ id: '', selected: true}); for (var property in MeterMultiplierKind) obj.MeterMultiplierKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.MeterMultiplierKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_MeterMultiplier_collapse" aria-expanded="true" aria-controls="{{id}}_MeterMultiplier_collapse" style="margin-left: 10px;">MeterMultiplier</a></legend>
                    <div id="{{id}}_MeterMultiplier_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control'>{{#MeterMultiplierKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/MeterMultiplierKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Meter'>Meter: </label><div class='col-sm-8'><input id='{{id}}_Meter' class='form-control' type='text'{{#Meter}} value='{{Meter}}'{{/Meter}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "MeterMultiplier" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_kind").value; if ("" != temp) { temp = MeterMultiplierKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#MeterMultiplierKind." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;
                temp = document.getElementById (id + "_Meter").value; if ("" != temp) obj.Meter = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Meter", "0..1", "0..*", "Meter", "MeterMultipliers"]
                        ]
                    )
                );
            }
        }

        /**
         * Location of an individual usage point.
         *
         */
        class UsagePointLocation extends Common.Location
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.UsagePointLocation;
                if (null == bucket)
                   cim_data.UsagePointLocation = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.UsagePointLocation[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Location.prototype.parse.call (this, context, sub);
                obj.cls = "UsagePointLocation";
                base.parse_element (/<cim:UsagePointLocation.accessMethod>([\s\S]*?)<\/cim:UsagePointLocation.accessMethod>/g, obj, "accessMethod", base.to_string, sub, context);
                base.parse_element (/<cim:UsagePointLocation.remark>([\s\S]*?)<\/cim:UsagePointLocation.remark>/g, obj, "remark", base.to_string, sub, context);
                base.parse_element (/<cim:UsagePointLocation.siteAccessProblem>([\s\S]*?)<\/cim:UsagePointLocation.siteAccessProblem>/g, obj, "siteAccessProblem", base.to_string, sub, context);
                base.parse_attributes (/<cim:UsagePointLocation.UsagePoints\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UsagePoints", sub, context);
                var bucket = context.parsed.UsagePointLocation;
                if (null == bucket)
                   context.parsed.UsagePointLocation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Location.prototype.export.call (this, obj, false);

                base.export_element (obj, "UsagePointLocation", "accessMethod", "accessMethod",  base.from_string, fields);
                base.export_element (obj, "UsagePointLocation", "remark", "remark",  base.from_string, fields);
                base.export_element (obj, "UsagePointLocation", "siteAccessProblem", "siteAccessProblem",  base.from_string, fields);
                base.export_attributes (obj, "UsagePointLocation", "UsagePoints", "UsagePoints", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#UsagePointLocation_collapse" aria-expanded="true" aria-controls="UsagePointLocation_collapse" style="margin-left: 10px;">UsagePointLocation</a></legend>
                    <div id="UsagePointLocation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Location.prototype.template.call (this) +
                    `
                    {{#accessMethod}}<div><b>accessMethod</b>: {{accessMethod}}</div>{{/accessMethod}}
                    {{#remark}}<div><b>remark</b>: {{remark}}</div>{{/remark}}
                    {{#siteAccessProblem}}<div><b>siteAccessProblem</b>: {{siteAccessProblem}}</div>{{/siteAccessProblem}}
                    {{#UsagePoints}}<div><b>UsagePoints</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/UsagePoints}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.UsagePoints) obj.UsagePoints_string = obj.UsagePoints.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UsagePoints_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_UsagePointLocation_collapse" aria-expanded="true" aria-controls="{{id}}_UsagePointLocation_collapse" style="margin-left: 10px;">UsagePointLocation</a></legend>
                    <div id="{{id}}_UsagePointLocation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Location.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_accessMethod'>accessMethod: </label><div class='col-sm-8'><input id='{{id}}_accessMethod' class='form-control' type='text'{{#accessMethod}} value='{{accessMethod}}'{{/accessMethod}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_remark'>remark: </label><div class='col-sm-8'><input id='{{id}}_remark' class='form-control' type='text'{{#remark}} value='{{remark}}'{{/remark}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_siteAccessProblem'>siteAccessProblem: </label><div class='col-sm-8'><input id='{{id}}_siteAccessProblem' class='form-control' type='text'{{#siteAccessProblem}} value='{{siteAccessProblem}}'{{/siteAccessProblem}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "UsagePointLocation" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_accessMethod").value; if ("" != temp) obj.accessMethod = temp;
                temp = document.getElementById (id + "_remark").value; if ("" != temp) obj.remark = temp;
                temp = document.getElementById (id + "_siteAccessProblem").value; if ("" != temp) obj.siteAccessProblem = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["UsagePoints", "0..*", "0..1", "UsagePoint", "UsagePointLocation"]
                        ]
                    )
                );
            }
        }

        /**
         * A specification of the metering requirements for a particular point within a network.
         *
         */
        class MetrologyRequirement extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.MetrologyRequirement;
                if (null == bucket)
                   cim_data.MetrologyRequirement = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MetrologyRequirement[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MetrologyRequirement";
                base.parse_attribute (/<cim:MetrologyRequirement.reason\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "reason", sub, context);
                base.parse_attributes (/<cim:MetrologyRequirement.ReadingTypes\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReadingTypes", sub, context);
                base.parse_attributes (/<cim:MetrologyRequirement.UsagePoints\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UsagePoints", sub, context);
                var bucket = context.parsed.MetrologyRequirement;
                if (null == bucket)
                   context.parsed.MetrologyRequirement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MetrologyRequirement", "reason", "reason", fields);
                base.export_attributes (obj, "MetrologyRequirement", "ReadingTypes", "ReadingTypes", fields);
                base.export_attributes (obj, "MetrologyRequirement", "UsagePoints", "UsagePoints", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MetrologyRequirement_collapse" aria-expanded="true" aria-controls="MetrologyRequirement_collapse" style="margin-left: 10px;">MetrologyRequirement</a></legend>
                    <div id="MetrologyRequirement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#reason}}<div><b>reason</b>: {{reason}}</div>{{/reason}}
                    {{#ReadingTypes}}<div><b>ReadingTypes</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ReadingTypes}}
                    {{#UsagePoints}}<div><b>UsagePoints</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/UsagePoints}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ReadingReasonKind = []; if (!obj.reason) obj.ReadingReasonKind.push ({ id: '', selected: true}); for (var property in ReadingReasonKind) obj.ReadingReasonKind.push ({ id: property, selected: obj.reason && obj.reason.endsWith ('.' + property)});
                if (obj.ReadingTypes) obj.ReadingTypes_string = obj.ReadingTypes.join ();
                if (obj.UsagePoints) obj.UsagePoints_string = obj.UsagePoints.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ReadingReasonKind;
                delete obj.ReadingTypes_string;
                delete obj.UsagePoints_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_MetrologyRequirement_collapse" aria-expanded="true" aria-controls="{{id}}_MetrologyRequirement_collapse" style="margin-left: 10px;">MetrologyRequirement</a></legend>
                    <div id="{{id}}_MetrologyRequirement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_reason'>reason: </label><div class='col-sm-8'><select id='{{id}}_reason' class='form-control'>{{#ReadingReasonKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ReadingReasonKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ReadingTypes'>ReadingTypes: </label><div class='col-sm-8'><input id='{{id}}_ReadingTypes' class='form-control' type='text'{{#ReadingTypes}} value='{{ReadingTypes}}_string'{{/ReadingTypes}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_UsagePoints'>UsagePoints: </label><div class='col-sm-8'><input id='{{id}}_UsagePoints' class='form-control' type='text'{{#UsagePoints}} value='{{UsagePoints}}_string'{{/UsagePoints}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "MetrologyRequirement" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_reason").value; if ("" != temp) { temp = ReadingReasonKind[temp]; if ("undefined" != typeof (temp)) obj.reason = "#http://iec.ch/TC57/2013/CIM-schema-cim16#ReadingReasonKind." + temp; }
                temp = document.getElementById (id + "_ReadingTypes").value; if ("" != temp) obj.ReadingTypes = temp.split (",");
                temp = document.getElementById (id + "_UsagePoints").value; if ("" != temp) obj.UsagePoints = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ReadingTypes", "1..*", "0..*", "ReadingType", "MetrologyRequirements"],
                            ["UsagePoints", "0..*", "0..*", "UsagePoint", "MetrologyRequirements"]
                        ]
                    )
                );
            }
        }

        /**
         * Function performed by an end device such as a meter, communication equipment, controllers, etc.
         *
         */
        class EndDeviceFunction extends Assets.AssetFunction
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.EndDeviceFunction;
                if (null == bucket)
                   cim_data.EndDeviceFunction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EndDeviceFunction[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Assets.AssetFunction.prototype.parse.call (this, context, sub);
                obj.cls = "EndDeviceFunction";
                base.parse_element (/<cim:EndDeviceFunction.enabled>([\s\S]*?)<\/cim:EndDeviceFunction.enabled>/g, obj, "enabled", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:EndDeviceFunction.Registers\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Registers", sub, context);
                base.parse_attribute (/<cim:EndDeviceFunction.EndDevice\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDevice", sub, context);
                var bucket = context.parsed.EndDeviceFunction;
                if (null == bucket)
                   context.parsed.EndDeviceFunction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Assets.AssetFunction.prototype.export.call (this, obj, false);

                base.export_element (obj, "EndDeviceFunction", "enabled", "enabled",  base.from_boolean, fields);
                base.export_attributes (obj, "EndDeviceFunction", "Registers", "Registers", fields);
                base.export_attribute (obj, "EndDeviceFunction", "EndDevice", "EndDevice", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EndDeviceFunction_collapse" aria-expanded="true" aria-controls="EndDeviceFunction_collapse" style="margin-left: 10px;">EndDeviceFunction</a></legend>
                    <div id="EndDeviceFunction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.AssetFunction.prototype.template.call (this) +
                    `
                    {{#enabled}}<div><b>enabled</b>: {{enabled}}</div>{{/enabled}}
                    {{#Registers}}<div><b>Registers</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Registers}}
                    {{#EndDevice}}<div><b>EndDevice</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EndDevice}}&quot;);})'>{{EndDevice}}</a></div>{{/EndDevice}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Registers) obj.Registers_string = obj.Registers.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Registers_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_EndDeviceFunction_collapse" aria-expanded="true" aria-controls="{{id}}_EndDeviceFunction_collapse" style="margin-left: 10px;">EndDeviceFunction</a></legend>
                    <div id="{{id}}_EndDeviceFunction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.AssetFunction.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_enabled'>enabled: </label><div class='col-sm-8'><input id='{{id}}_enabled' class='form-check-input' type='checkbox'{{#enabled}} checked{{/enabled}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EndDevice'>EndDevice: </label><div class='col-sm-8'><input id='{{id}}_EndDevice' class='form-control' type='text'{{#EndDevice}} value='{{EndDevice}}'{{/EndDevice}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "EndDeviceFunction" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_enabled").checked; if (temp) obj.enabled = true;
                temp = document.getElementById (id + "_EndDevice").value; if ("" != temp) obj.EndDevice = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Registers", "0..*", "0..1", "Register", "EndDeviceFunction"],
                            ["EndDevice", "0..1", "0..*", "EndDevice", "EndDeviceFunctions"]
                        ]
                    )
                );
            }
        }

        /**
         * An asset having communications capabilities that can be paired with a meter or other end device to provide the device with communication ability, through associated communication function.
         *
         * An end device that has communications capabilities through embedded hardware can use that function directly (without the communication module), or combine embedded communication function with additional communication functions provided through an external communication module (e.g. zigbee).
         *
         */
        class ComModule extends Assets.Asset
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ComModule;
                if (null == bucket)
                   cim_data.ComModule = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ComModule[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Assets.Asset.prototype.parse.call (this, context, sub);
                obj.cls = "ComModule";
                base.parse_element (/<cim:ComModule.amrSystem>([\s\S]*?)<\/cim:ComModule.amrSystem>/g, obj, "amrSystem", base.to_string, sub, context);
                base.parse_element (/<cim:ComModule.supportsAutonomousDst>([\s\S]*?)<\/cim:ComModule.supportsAutonomousDst>/g, obj, "supportsAutonomousDst", base.to_boolean, sub, context);
                base.parse_element (/<cim:ComModule.timeZoneOffset>([\s\S]*?)<\/cim:ComModule.timeZoneOffset>/g, obj, "timeZoneOffset", base.to_string, sub, context);
                base.parse_attributes (/<cim:ComModule.ComFunctions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ComFunctions", sub, context);
                var bucket = context.parsed.ComModule;
                if (null == bucket)
                   context.parsed.ComModule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Assets.Asset.prototype.export.call (this, obj, false);

                base.export_element (obj, "ComModule", "amrSystem", "amrSystem",  base.from_string, fields);
                base.export_element (obj, "ComModule", "supportsAutonomousDst", "supportsAutonomousDst",  base.from_boolean, fields);
                base.export_element (obj, "ComModule", "timeZoneOffset", "timeZoneOffset",  base.from_string, fields);
                base.export_attributes (obj, "ComModule", "ComFunctions", "ComFunctions", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ComModule_collapse" aria-expanded="true" aria-controls="ComModule_collapse" style="margin-left: 10px;">ComModule</a></legend>
                    <div id="ComModule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.Asset.prototype.template.call (this) +
                    `
                    {{#amrSystem}}<div><b>amrSystem</b>: {{amrSystem}}</div>{{/amrSystem}}
                    {{#supportsAutonomousDst}}<div><b>supportsAutonomousDst</b>: {{supportsAutonomousDst}}</div>{{/supportsAutonomousDst}}
                    {{#timeZoneOffset}}<div><b>timeZoneOffset</b>: {{timeZoneOffset}}</div>{{/timeZoneOffset}}
                    {{#ComFunctions}}<div><b>ComFunctions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ComFunctions}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ComFunctions) obj.ComFunctions_string = obj.ComFunctions.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ComFunctions_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_ComModule_collapse" aria-expanded="true" aria-controls="{{id}}_ComModule_collapse" style="margin-left: 10px;">ComModule</a></legend>
                    <div id="{{id}}_ComModule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.Asset.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_amrSystem'>amrSystem: </label><div class='col-sm-8'><input id='{{id}}_amrSystem' class='form-control' type='text'{{#amrSystem}} value='{{amrSystem}}'{{/amrSystem}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_supportsAutonomousDst'>supportsAutonomousDst: </label><div class='col-sm-8'><input id='{{id}}_supportsAutonomousDst' class='form-check-input' type='checkbox'{{#supportsAutonomousDst}} checked{{/supportsAutonomousDst}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_timeZoneOffset'>timeZoneOffset: </label><div class='col-sm-8'><input id='{{id}}_timeZoneOffset' class='form-control' type='text'{{#timeZoneOffset}} value='{{timeZoneOffset}}'{{/timeZoneOffset}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ComModule" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_amrSystem").value; if ("" != temp) obj.amrSystem = temp;
                temp = document.getElementById (id + "_supportsAutonomousDst").checked; if (temp) obj.supportsAutonomousDst = true;
                temp = document.getElementById (id + "_timeZoneOffset").value; if ("" != temp) obj.timeZoneOffset = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ComFunctions", "0..*", "0..1", "ComFunction", "ComModule"]
                        ]
                    )
                );
            }
        }

        /**
         * Detailed description for a type of a reading value.
         *
         * Values in attributes allow for the creation of recommended codes to be used for identifying reading value types as follows: &lt;macroPeriod&gt;.&lt;aggregate&gt;.&lt;measuringPeriod&gt;.&lt;accumulation&gt;.&lt;flowDirection&gt;.&lt;commodity&gt;.&lt;measurementKind&gt;.&lt;interharmonic.numerator&gt;.&lt;interharmonic.denominator&gt;.&lt;argument.numerator&gt;.&lt;argument.denominator&gt;.&lt;tou&gt;.&lt;cpp&gt;.&lt;consumptionTier&gt;.&lt;phases&gt;.&lt;multiplier&gt;.&lt;unit&gt;.&lt;currency&gt;.
         *
         */
        class ReadingType extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ReadingType;
                if (null == bucket)
                   cim_data.ReadingType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ReadingType[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ReadingType";
                base.parse_element (/<cim:ReadingType.accumulation>([\s\S]*?)<\/cim:ReadingType.accumulation>/g, obj, "accumulation", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingType.aggregate>([\s\S]*?)<\/cim:ReadingType.aggregate>/g, obj, "aggregate", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingType.argument>([\s\S]*?)<\/cim:ReadingType.argument>/g, obj, "argument", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingType.commodity>([\s\S]*?)<\/cim:ReadingType.commodity>/g, obj, "commodity", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingType.consumptionTier>([\s\S]*?)<\/cim:ReadingType.consumptionTier>/g, obj, "consumptionTier", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingType.cpp>([\s\S]*?)<\/cim:ReadingType.cpp>/g, obj, "cpp", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingType.currency>([\s\S]*?)<\/cim:ReadingType.currency>/g, obj, "currency", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingType.flowDirection>([\s\S]*?)<\/cim:ReadingType.flowDirection>/g, obj, "flowDirection", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingType.interharmonic>([\s\S]*?)<\/cim:ReadingType.interharmonic>/g, obj, "interharmonic", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingType.macroPeriod>([\s\S]*?)<\/cim:ReadingType.macroPeriod>/g, obj, "macroPeriod", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingType.measurementKind>([\s\S]*?)<\/cim:ReadingType.measurementKind>/g, obj, "measurementKind", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingType.measuringPeriod>([\s\S]*?)<\/cim:ReadingType.measuringPeriod>/g, obj, "measuringPeriod", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingType.multiplier>([\s\S]*?)<\/cim:ReadingType.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingType.phases>([\s\S]*?)<\/cim:ReadingType.phases>/g, obj, "phases", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingType.tou>([\s\S]*?)<\/cim:ReadingType.tou>/g, obj, "tou", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingType.unit>([\s\S]*?)<\/cim:ReadingType.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_attributes (/<cim:ReadingType.Readings\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Readings", sub, context);
                base.parse_attribute (/<cim:ReadingType.PendingCalculation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PendingCalculation", sub, context);
                base.parse_attributes (/<cim:ReadingType.IntervalBlocks\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "IntervalBlocks", sub, context);
                base.parse_attributes (/<cim:ReadingType.MetrologyRequirements\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MetrologyRequirements", sub, context);
                base.parse_attribute (/<cim:ReadingType.Channel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Channel", sub, context);
                var bucket = context.parsed.ReadingType;
                if (null == bucket)
                   context.parsed.ReadingType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ReadingType", "accumulation", "accumulation",  base.from_string, fields);
                base.export_element (obj, "ReadingType", "aggregate", "aggregate",  base.from_string, fields);
                base.export_element (obj, "ReadingType", "argument", "argument",  base.from_string, fields);
                base.export_element (obj, "ReadingType", "commodity", "commodity",  base.from_string, fields);
                base.export_element (obj, "ReadingType", "consumptionTier", "consumptionTier",  base.from_string, fields);
                base.export_element (obj, "ReadingType", "cpp", "cpp",  base.from_string, fields);
                base.export_element (obj, "ReadingType", "currency", "currency",  base.from_string, fields);
                base.export_element (obj, "ReadingType", "flowDirection", "flowDirection",  base.from_string, fields);
                base.export_element (obj, "ReadingType", "interharmonic", "interharmonic",  base.from_string, fields);
                base.export_element (obj, "ReadingType", "macroPeriod", "macroPeriod",  base.from_string, fields);
                base.export_element (obj, "ReadingType", "measurementKind", "measurementKind",  base.from_string, fields);
                base.export_element (obj, "ReadingType", "measuringPeriod", "measuringPeriod",  base.from_string, fields);
                base.export_element (obj, "ReadingType", "multiplier", "multiplier",  base.from_string, fields);
                base.export_element (obj, "ReadingType", "phases", "phases",  base.from_string, fields);
                base.export_element (obj, "ReadingType", "tou", "tou",  base.from_string, fields);
                base.export_element (obj, "ReadingType", "unit", "unit",  base.from_string, fields);
                base.export_attributes (obj, "ReadingType", "Readings", "Readings", fields);
                base.export_attribute (obj, "ReadingType", "PendingCalculation", "PendingCalculation", fields);
                base.export_attributes (obj, "ReadingType", "IntervalBlocks", "IntervalBlocks", fields);
                base.export_attributes (obj, "ReadingType", "MetrologyRequirements", "MetrologyRequirements", fields);
                base.export_attribute (obj, "ReadingType", "Channel", "Channel", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ReadingType_collapse" aria-expanded="true" aria-controls="ReadingType_collapse" style="margin-left: 10px;">ReadingType</a></legend>
                    <div id="ReadingType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#accumulation}}<div><b>accumulation</b>: {{accumulation}}</div>{{/accumulation}}
                    {{#aggregate}}<div><b>aggregate</b>: {{aggregate}}</div>{{/aggregate}}
                    {{#argument}}<div><b>argument</b>: {{argument}}</div>{{/argument}}
                    {{#commodity}}<div><b>commodity</b>: {{commodity}}</div>{{/commodity}}
                    {{#consumptionTier}}<div><b>consumptionTier</b>: {{consumptionTier}}</div>{{/consumptionTier}}
                    {{#cpp}}<div><b>cpp</b>: {{cpp}}</div>{{/cpp}}
                    {{#currency}}<div><b>currency</b>: {{currency}}</div>{{/currency}}
                    {{#flowDirection}}<div><b>flowDirection</b>: {{flowDirection}}</div>{{/flowDirection}}
                    {{#interharmonic}}<div><b>interharmonic</b>: {{interharmonic}}</div>{{/interharmonic}}
                    {{#macroPeriod}}<div><b>macroPeriod</b>: {{macroPeriod}}</div>{{/macroPeriod}}
                    {{#measurementKind}}<div><b>measurementKind</b>: {{measurementKind}}</div>{{/measurementKind}}
                    {{#measuringPeriod}}<div><b>measuringPeriod</b>: {{measuringPeriod}}</div>{{/measuringPeriod}}
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#phases}}<div><b>phases</b>: {{phases}}</div>{{/phases}}
                    {{#tou}}<div><b>tou</b>: {{tou}}</div>{{/tou}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#Readings}}<div><b>Readings</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Readings}}
                    {{#PendingCalculation}}<div><b>PendingCalculation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PendingCalculation}}&quot;);})'>{{PendingCalculation}}</a></div>{{/PendingCalculation}}
                    {{#IntervalBlocks}}<div><b>IntervalBlocks</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/IntervalBlocks}}
                    {{#MetrologyRequirements}}<div><b>MetrologyRequirements</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MetrologyRequirements}}
                    {{#Channel}}<div><b>Channel</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Channel}}&quot;);})'>{{Channel}}</a></div>{{/Channel}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Readings) obj.Readings_string = obj.Readings.join ();
                if (obj.IntervalBlocks) obj.IntervalBlocks_string = obj.IntervalBlocks.join ();
                if (obj.MetrologyRequirements) obj.MetrologyRequirements_string = obj.MetrologyRequirements.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Readings_string;
                delete obj.IntervalBlocks_string;
                delete obj.MetrologyRequirements_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_ReadingType_collapse" aria-expanded="true" aria-controls="{{id}}_ReadingType_collapse" style="margin-left: 10px;">ReadingType</a></legend>
                    <div id="{{id}}_ReadingType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_accumulation'>accumulation: </label><div class='col-sm-8'><input id='{{id}}_accumulation' class='form-control' type='text'{{#accumulation}} value='{{accumulation}}'{{/accumulation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_aggregate'>aggregate: </label><div class='col-sm-8'><input id='{{id}}_aggregate' class='form-control' type='text'{{#aggregate}} value='{{aggregate}}'{{/aggregate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_argument'>argument: </label><div class='col-sm-8'><input id='{{id}}_argument' class='form-control' type='text'{{#argument}} value='{{argument}}'{{/argument}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_commodity'>commodity: </label><div class='col-sm-8'><input id='{{id}}_commodity' class='form-control' type='text'{{#commodity}} value='{{commodity}}'{{/commodity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_consumptionTier'>consumptionTier: </label><div class='col-sm-8'><input id='{{id}}_consumptionTier' class='form-control' type='text'{{#consumptionTier}} value='{{consumptionTier}}'{{/consumptionTier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cpp'>cpp: </label><div class='col-sm-8'><input id='{{id}}_cpp' class='form-control' type='text'{{#cpp}} value='{{cpp}}'{{/cpp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_currency'>currency: </label><div class='col-sm-8'><input id='{{id}}_currency' class='form-control' type='text'{{#currency}} value='{{currency}}'{{/currency}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_flowDirection'>flowDirection: </label><div class='col-sm-8'><input id='{{id}}_flowDirection' class='form-control' type='text'{{#flowDirection}} value='{{flowDirection}}'{{/flowDirection}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_interharmonic'>interharmonic: </label><div class='col-sm-8'><input id='{{id}}_interharmonic' class='form-control' type='text'{{#interharmonic}} value='{{interharmonic}}'{{/interharmonic}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_macroPeriod'>macroPeriod: </label><div class='col-sm-8'><input id='{{id}}_macroPeriod' class='form-control' type='text'{{#macroPeriod}} value='{{macroPeriod}}'{{/macroPeriod}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_measurementKind'>measurementKind: </label><div class='col-sm-8'><input id='{{id}}_measurementKind' class='form-control' type='text'{{#measurementKind}} value='{{measurementKind}}'{{/measurementKind}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_measuringPeriod'>measuringPeriod: </label><div class='col-sm-8'><input id='{{id}}_measuringPeriod' class='form-control' type='text'{{#measuringPeriod}} value='{{measuringPeriod}}'{{/measuringPeriod}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><input id='{{id}}_multiplier' class='form-control' type='text'{{#multiplier}} value='{{multiplier}}'{{/multiplier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_phases'>phases: </label><div class='col-sm-8'><input id='{{id}}_phases' class='form-control' type='text'{{#phases}} value='{{phases}}'{{/phases}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tou'>tou: </label><div class='col-sm-8'><input id='{{id}}_tou' class='form-control' type='text'{{#tou}} value='{{tou}}'{{/tou}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><input id='{{id}}_unit' class='form-control' type='text'{{#unit}} value='{{unit}}'{{/unit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PendingCalculation'>PendingCalculation: </label><div class='col-sm-8'><input id='{{id}}_PendingCalculation' class='form-control' type='text'{{#PendingCalculation}} value='{{PendingCalculation}}'{{/PendingCalculation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MetrologyRequirements'>MetrologyRequirements: </label><div class='col-sm-8'><input id='{{id}}_MetrologyRequirements' class='form-control' type='text'{{#MetrologyRequirements}} value='{{MetrologyRequirements}}_string'{{/MetrologyRequirements}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Channel'>Channel: </label><div class='col-sm-8'><input id='{{id}}_Channel' class='form-control' type='text'{{#Channel}} value='{{Channel}}'{{/Channel}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ReadingType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_accumulation").value; if ("" != temp) obj.accumulation = temp;
                temp = document.getElementById (id + "_aggregate").value; if ("" != temp) obj.aggregate = temp;
                temp = document.getElementById (id + "_argument").value; if ("" != temp) obj.argument = temp;
                temp = document.getElementById (id + "_commodity").value; if ("" != temp) obj.commodity = temp;
                temp = document.getElementById (id + "_consumptionTier").value; if ("" != temp) obj.consumptionTier = temp;
                temp = document.getElementById (id + "_cpp").value; if ("" != temp) obj.cpp = temp;
                temp = document.getElementById (id + "_currency").value; if ("" != temp) obj.currency = temp;
                temp = document.getElementById (id + "_flowDirection").value; if ("" != temp) obj.flowDirection = temp;
                temp = document.getElementById (id + "_interharmonic").value; if ("" != temp) obj.interharmonic = temp;
                temp = document.getElementById (id + "_macroPeriod").value; if ("" != temp) obj.macroPeriod = temp;
                temp = document.getElementById (id + "_measurementKind").value; if ("" != temp) obj.measurementKind = temp;
                temp = document.getElementById (id + "_measuringPeriod").value; if ("" != temp) obj.measuringPeriod = temp;
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) obj.multiplier = temp;
                temp = document.getElementById (id + "_phases").value; if ("" != temp) obj.phases = temp;
                temp = document.getElementById (id + "_tou").value; if ("" != temp) obj.tou = temp;
                temp = document.getElementById (id + "_unit").value; if ("" != temp) obj.unit = temp;
                temp = document.getElementById (id + "_PendingCalculation").value; if ("" != temp) obj.PendingCalculation = temp;
                temp = document.getElementById (id + "_MetrologyRequirements").value; if ("" != temp) obj.MetrologyRequirements = temp.split (",");
                temp = document.getElementById (id + "_Channel").value; if ("" != temp) obj.Channel = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Readings", "0..*", "1", "Reading", "ReadingType"],
                            ["PendingCalculation", "0..1", "1", "PendingCalculation", "ReadingType"],
                            ["IntervalBlocks", "0..*", "1", "IntervalBlock", "ReadingType"],
                            ["MetrologyRequirements", "0..*", "1..*", "MetrologyRequirement", "ReadingTypes"],
                            ["Channel", "0..1", "0..1", "Channel", "ReadingType"]
                        ]
                    )
                );
            }
        }

        /**
         * Time sequence of readings of the same reading type.
         *
         * Contained interval readings may need conversion through the application of an offset and a scalar defined in associated pending.
         *
         */
        class IntervalBlock extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.IntervalBlock;
                if (null == bucket)
                   cim_data.IntervalBlock = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.IntervalBlock[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "IntervalBlock";
                base.parse_attribute (/<cim:IntervalBlock.PendingCalculation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PendingCalculation", sub, context);
                base.parse_attribute (/<cim:IntervalBlock.ReadingType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReadingType", sub, context);
                base.parse_attributes (/<cim:IntervalBlock.IntervalReadings\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "IntervalReadings", sub, context);
                base.parse_attribute (/<cim:IntervalBlock.MeterReading\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MeterReading", sub, context);
                var bucket = context.parsed.IntervalBlock;
                if (null == bucket)
                   context.parsed.IntervalBlock = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_attribute (obj, "IntervalBlock", "PendingCalculation", "PendingCalculation", fields);
                base.export_attribute (obj, "IntervalBlock", "ReadingType", "ReadingType", fields);
                base.export_attributes (obj, "IntervalBlock", "IntervalReadings", "IntervalReadings", fields);
                base.export_attribute (obj, "IntervalBlock", "MeterReading", "MeterReading", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#IntervalBlock_collapse" aria-expanded="true" aria-controls="IntervalBlock_collapse" style="margin-left: 10px;">IntervalBlock</a></legend>
                    <div id="IntervalBlock_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#PendingCalculation}}<div><b>PendingCalculation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PendingCalculation}}&quot;);})'>{{PendingCalculation}}</a></div>{{/PendingCalculation}}
                    {{#ReadingType}}<div><b>ReadingType</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ReadingType}}&quot;);})'>{{ReadingType}}</a></div>{{/ReadingType}}
                    {{#IntervalReadings}}<div><b>IntervalReadings</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/IntervalReadings}}
                    {{#MeterReading}}<div><b>MeterReading</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MeterReading}}&quot;);})'>{{MeterReading}}</a></div>{{/MeterReading}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.IntervalReadings) obj.IntervalReadings_string = obj.IntervalReadings.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.IntervalReadings_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_IntervalBlock_collapse" aria-expanded="true" aria-controls="{{id}}_IntervalBlock_collapse" style="margin-left: 10px;">IntervalBlock</a></legend>
                    <div id="{{id}}_IntervalBlock_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PendingCalculation'>PendingCalculation: </label><div class='col-sm-8'><input id='{{id}}_PendingCalculation' class='form-control' type='text'{{#PendingCalculation}} value='{{PendingCalculation}}'{{/PendingCalculation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ReadingType'>ReadingType: </label><div class='col-sm-8'><input id='{{id}}_ReadingType' class='form-control' type='text'{{#ReadingType}} value='{{ReadingType}}'{{/ReadingType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_IntervalReadings'>IntervalReadings: </label><div class='col-sm-8'><input id='{{id}}_IntervalReadings' class='form-control' type='text'{{#IntervalReadings}} value='{{IntervalReadings}}_string'{{/IntervalReadings}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MeterReading'>MeterReading: </label><div class='col-sm-8'><input id='{{id}}_MeterReading' class='form-control' type='text'{{#MeterReading}} value='{{MeterReading}}'{{/MeterReading}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "IntervalBlock" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_PendingCalculation").value; if ("" != temp) obj.PendingCalculation = temp;
                temp = document.getElementById (id + "_ReadingType").value; if ("" != temp) obj.ReadingType = temp;
                temp = document.getElementById (id + "_IntervalReadings").value; if ("" != temp) obj.IntervalReadings = temp.split (",");
                temp = document.getElementById (id + "_MeterReading").value; if ("" != temp) obj.MeterReading = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PendingCalculation", "0..1", "0..*", "PendingCalculation", "IntervalBlocks"],
                            ["ReadingType", "1", "0..*", "ReadingType", "IntervalBlocks"],
                            ["IntervalReadings", "0..*", "0..*", "IntervalReading", "IntervalBlocks"],
                            ["MeterReading", "0..1", "0..*", "MeterReading", "IntervalBlocks"]
                        ]
                    )
                );
            }
        }

        /**
         * Timing for the control actions of end devices.
         *
         */
        class EndDeviceTiming extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.EndDeviceTiming;
                if (null == bucket)
                   cim_data.EndDeviceTiming = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EndDeviceTiming[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "EndDeviceTiming";
                base.parse_element (/<cim:EndDeviceTiming.duration>([\s\S]*?)<\/cim:EndDeviceTiming.duration>/g, obj, "duration", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceTiming.durationIndefinite>([\s\S]*?)<\/cim:EndDeviceTiming.durationIndefinite>/g, obj, "durationIndefinite", base.to_boolean, sub, context);
                base.parse_element (/<cim:EndDeviceTiming.interval>([\s\S]*?)<\/cim:EndDeviceTiming.interval>/g, obj, "interval", base.to_string, sub, context);
                base.parse_attribute (/<cim:EndDeviceTiming.randomisation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "randomisation", sub, context);
                var bucket = context.parsed.EndDeviceTiming;
                if (null == bucket)
                   context.parsed.EndDeviceTiming = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "EndDeviceTiming", "duration", "duration",  base.from_string, fields);
                base.export_element (obj, "EndDeviceTiming", "durationIndefinite", "durationIndefinite",  base.from_boolean, fields);
                base.export_element (obj, "EndDeviceTiming", "interval", "interval",  base.from_string, fields);
                base.export_attribute (obj, "EndDeviceTiming", "randomisation", "randomisation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EndDeviceTiming_collapse" aria-expanded="true" aria-controls="EndDeviceTiming_collapse" style="margin-left: 10px;">EndDeviceTiming</a></legend>
                    <div id="EndDeviceTiming_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#duration}}<div><b>duration</b>: {{duration}}</div>{{/duration}}
                    {{#durationIndefinite}}<div><b>durationIndefinite</b>: {{durationIndefinite}}</div>{{/durationIndefinite}}
                    {{#interval}}<div><b>interval</b>: {{interval}}</div>{{/interval}}
                    {{#randomisation}}<div><b>randomisation</b>: {{randomisation}}</div>{{/randomisation}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.RandomisationKind = []; if (!obj.randomisation) obj.RandomisationKind.push ({ id: '', selected: true}); for (var property in RandomisationKind) obj.RandomisationKind.push ({ id: property, selected: obj.randomisation && obj.randomisation.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.RandomisationKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_EndDeviceTiming_collapse" aria-expanded="true" aria-controls="{{id}}_EndDeviceTiming_collapse" style="margin-left: 10px;">EndDeviceTiming</a></legend>
                    <div id="{{id}}_EndDeviceTiming_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_duration'>duration: </label><div class='col-sm-8'><input id='{{id}}_duration' class='form-control' type='text'{{#duration}} value='{{duration}}'{{/duration}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_durationIndefinite'>durationIndefinite: </label><div class='col-sm-8'><input id='{{id}}_durationIndefinite' class='form-check-input' type='checkbox'{{#durationIndefinite}} checked{{/durationIndefinite}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_interval'>interval: </label><div class='col-sm-8'><input id='{{id}}_interval' class='form-control' type='text'{{#interval}} value='{{interval}}'{{/interval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_randomisation'>randomisation: </label><div class='col-sm-8'><select id='{{id}}_randomisation' class='form-control'>{{#RandomisationKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/RandomisationKind}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "EndDeviceTiming" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_duration").value; if ("" != temp) obj.duration = temp;
                temp = document.getElementById (id + "_durationIndefinite").checked; if (temp) obj.durationIndefinite = true;
                temp = document.getElementById (id + "_interval").value; if ("" != temp) obj.interval = temp;
                temp = document.getElementById (id + "_randomisation").value; if ("" != temp) { temp = RandomisationKind[temp]; if ("undefined" != typeof (temp)) obj.randomisation = "#http://iec.ch/TC57/2013/CIM-schema-cim16#RandomisationKind." + temp; }

                return (obj);
            }
        }

        /**
         * Action/command performed by an end device on a device other than the end device.
         *
         */
        class EndDeviceAction extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.EndDeviceAction;
                if (null == bucket)
                   cim_data.EndDeviceAction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EndDeviceAction[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "EndDeviceAction";
                base.parse_element (/<cim:EndDeviceAction.command>([\s\S]*?)<\/cim:EndDeviceAction.command>/g, obj, "command", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceAction.duration>([\s\S]*?)<\/cim:EndDeviceAction.duration>/g, obj, "duration", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceAction.durationIndefinite>([\s\S]*?)<\/cim:EndDeviceAction.durationIndefinite>/g, obj, "durationIndefinite", base.to_boolean, sub, context);
                base.parse_element (/<cim:EndDeviceAction.startDateTime>([\s\S]*?)<\/cim:EndDeviceAction.startDateTime>/g, obj, "startDateTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:EndDeviceAction.EndDeviceControl\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceControl", sub, context);
                var bucket = context.parsed.EndDeviceAction;
                if (null == bucket)
                   context.parsed.EndDeviceAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "EndDeviceAction", "command", "command",  base.from_string, fields);
                base.export_element (obj, "EndDeviceAction", "duration", "duration",  base.from_string, fields);
                base.export_element (obj, "EndDeviceAction", "durationIndefinite", "durationIndefinite",  base.from_boolean, fields);
                base.export_element (obj, "EndDeviceAction", "startDateTime", "startDateTime",  base.from_datetime, fields);
                base.export_attribute (obj, "EndDeviceAction", "EndDeviceControl", "EndDeviceControl", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EndDeviceAction_collapse" aria-expanded="true" aria-controls="EndDeviceAction_collapse" style="margin-left: 10px;">EndDeviceAction</a></legend>
                    <div id="EndDeviceAction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#command}}<div><b>command</b>: {{command}}</div>{{/command}}
                    {{#duration}}<div><b>duration</b>: {{duration}}</div>{{/duration}}
                    {{#durationIndefinite}}<div><b>durationIndefinite</b>: {{durationIndefinite}}</div>{{/durationIndefinite}}
                    {{#startDateTime}}<div><b>startDateTime</b>: {{startDateTime}}</div>{{/startDateTime}}
                    {{#EndDeviceControl}}<div><b>EndDeviceControl</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EndDeviceControl}}&quot;);})'>{{EndDeviceControl}}</a></div>{{/EndDeviceControl}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_EndDeviceAction_collapse" aria-expanded="true" aria-controls="{{id}}_EndDeviceAction_collapse" style="margin-left: 10px;">EndDeviceAction</a></legend>
                    <div id="{{id}}_EndDeviceAction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_command'>command: </label><div class='col-sm-8'><input id='{{id}}_command' class='form-control' type='text'{{#command}} value='{{command}}'{{/command}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_duration'>duration: </label><div class='col-sm-8'><input id='{{id}}_duration' class='form-control' type='text'{{#duration}} value='{{duration}}'{{/duration}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_durationIndefinite'>durationIndefinite: </label><div class='col-sm-8'><input id='{{id}}_durationIndefinite' class='form-check-input' type='checkbox'{{#durationIndefinite}} checked{{/durationIndefinite}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_startDateTime'>startDateTime: </label><div class='col-sm-8'><input id='{{id}}_startDateTime' class='form-control' type='text'{{#startDateTime}} value='{{startDateTime}}'{{/startDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EndDeviceControl'>EndDeviceControl: </label><div class='col-sm-8'><input id='{{id}}_EndDeviceControl' class='form-control' type='text'{{#EndDeviceControl}} value='{{EndDeviceControl}}'{{/EndDeviceControl}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "EndDeviceAction" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_command").value; if ("" != temp) obj.command = temp;
                temp = document.getElementById (id + "_duration").value; if ("" != temp) obj.duration = temp;
                temp = document.getElementById (id + "_durationIndefinite").checked; if (temp) obj.durationIndefinite = true;
                temp = document.getElementById (id + "_startDateTime").value; if ("" != temp) obj.startDateTime = temp;
                temp = document.getElementById (id + "_EndDeviceControl").value; if ("" != temp) obj.EndDeviceControl = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EndDeviceControl", "0..1", "0..1", "EndDeviceControl", "EndDeviceAction"]
                        ]
                    )
                );
            }
        }

        /**
         * Common representation for reading values.
         *
         * Note that a reading value may have multiple qualities, as produced by various systems ('ReadingQuality.source').
         *
         */
        class BaseReading extends Meas.MeasurementValue
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.BaseReading;
                if (null == bucket)
                   cim_data.BaseReading = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BaseReading[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Meas.MeasurementValue.prototype.parse.call (this, context, sub);
                obj.cls = "BaseReading";
                base.parse_element (/<cim:BaseReading.reportedDateTime>([\s\S]*?)<\/cim:BaseReading.reportedDateTime>/g, obj, "reportedDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:BaseReading.source>([\s\S]*?)<\/cim:BaseReading.source>/g, obj, "source", base.to_string, sub, context);
                base.parse_element (/<cim:BaseReading.timePeriod>([\s\S]*?)<\/cim:BaseReading.timePeriod>/g, obj, "timePeriod", base.to_string, sub, context);
                base.parse_element (/<cim:BaseReading.value>([\s\S]*?)<\/cim:BaseReading.value>/g, obj, "value", base.to_string, sub, context);
                base.parse_attributes (/<cim:BaseReading.ReadingQualities\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReadingQualities", sub, context);
                var bucket = context.parsed.BaseReading;
                if (null == bucket)
                   context.parsed.BaseReading = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Meas.MeasurementValue.prototype.export.call (this, obj, false);

                base.export_element (obj, "BaseReading", "reportedDateTime", "reportedDateTime",  base.from_datetime, fields);
                base.export_element (obj, "BaseReading", "source", "source",  base.from_string, fields);
                base.export_element (obj, "BaseReading", "timePeriod", "timePeriod",  base.from_string, fields);
                base.export_element (obj, "BaseReading", "value", "value",  base.from_string, fields);
                base.export_attributes (obj, "BaseReading", "ReadingQualities", "ReadingQualities", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BaseReading_collapse" aria-expanded="true" aria-controls="BaseReading_collapse" style="margin-left: 10px;">BaseReading</a></legend>
                    <div id="BaseReading_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Meas.MeasurementValue.prototype.template.call (this) +
                    `
                    {{#reportedDateTime}}<div><b>reportedDateTime</b>: {{reportedDateTime}}</div>{{/reportedDateTime}}
                    {{#source}}<div><b>source</b>: {{source}}</div>{{/source}}
                    {{#timePeriod}}<div><b>timePeriod</b>: {{timePeriod}}</div>{{/timePeriod}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    {{#ReadingQualities}}<div><b>ReadingQualities</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ReadingQualities}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ReadingQualities) obj.ReadingQualities_string = obj.ReadingQualities.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ReadingQualities_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_BaseReading_collapse" aria-expanded="true" aria-controls="{{id}}_BaseReading_collapse" style="margin-left: 10px;">BaseReading</a></legend>
                    <div id="{{id}}_BaseReading_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Meas.MeasurementValue.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_reportedDateTime'>reportedDateTime: </label><div class='col-sm-8'><input id='{{id}}_reportedDateTime' class='form-control' type='text'{{#reportedDateTime}} value='{{reportedDateTime}}'{{/reportedDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_source'>source: </label><div class='col-sm-8'><input id='{{id}}_source' class='form-control' type='text'{{#source}} value='{{source}}'{{/source}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_timePeriod'>timePeriod: </label><div class='col-sm-8'><input id='{{id}}_timePeriod' class='form-control' type='text'{{#timePeriod}} value='{{timePeriod}}'{{/timePeriod}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "BaseReading" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_reportedDateTime").value; if ("" != temp) obj.reportedDateTime = temp;
                temp = document.getElementById (id + "_source").value; if ("" != temp) obj.source = temp;
                temp = document.getElementById (id + "_timePeriod").value; if ("" != temp) obj.timePeriod = temp;
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ReadingQualities", "0..*", "0..1", "ReadingQuality", "Reading"]
                        ]
                    )
                );
            }
        }

        /**
         * Event detected by a device function associated with the end device.
         *
         */
        class EndDeviceEvent extends Common.ActivityRecord
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.EndDeviceEvent;
                if (null == bucket)
                   cim_data.EndDeviceEvent = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EndDeviceEvent[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.ActivityRecord.prototype.parse.call (this, context, sub);
                obj.cls = "EndDeviceEvent";
                base.parse_element (/<cim:EndDeviceEvent.issuerID>([\s\S]*?)<\/cim:EndDeviceEvent.issuerID>/g, obj, "issuerID", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceEvent.issuerTrackingID>([\s\S]*?)<\/cim:EndDeviceEvent.issuerTrackingID>/g, obj, "issuerTrackingID", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceEvent.userID>([\s\S]*?)<\/cim:EndDeviceEvent.userID>/g, obj, "userID", base.to_string, sub, context);
                base.parse_attributes (/<cim:EndDeviceEvent.EndDeviceEventDetails\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceEventDetails", sub, context);
                base.parse_attribute (/<cim:EndDeviceEvent.EndDevice\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDevice", sub, context);
                base.parse_attribute (/<cim:EndDeviceEvent.UsagePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UsagePoint", sub, context);
                base.parse_attribute (/<cim:EndDeviceEvent.MeterReading\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MeterReading", sub, context);
                base.parse_attribute (/<cim:EndDeviceEvent.EndDeviceEventType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceEventType", sub, context);
                var bucket = context.parsed.EndDeviceEvent;
                if (null == bucket)
                   context.parsed.EndDeviceEvent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.ActivityRecord.prototype.export.call (this, obj, false);

                base.export_element (obj, "EndDeviceEvent", "issuerID", "issuerID",  base.from_string, fields);
                base.export_element (obj, "EndDeviceEvent", "issuerTrackingID", "issuerTrackingID",  base.from_string, fields);
                base.export_element (obj, "EndDeviceEvent", "userID", "userID",  base.from_string, fields);
                base.export_attributes (obj, "EndDeviceEvent", "EndDeviceEventDetails", "EndDeviceEventDetails", fields);
                base.export_attribute (obj, "EndDeviceEvent", "EndDevice", "EndDevice", fields);
                base.export_attribute (obj, "EndDeviceEvent", "UsagePoint", "UsagePoint", fields);
                base.export_attribute (obj, "EndDeviceEvent", "MeterReading", "MeterReading", fields);
                base.export_attribute (obj, "EndDeviceEvent", "EndDeviceEventType", "EndDeviceEventType", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EndDeviceEvent_collapse" aria-expanded="true" aria-controls="EndDeviceEvent_collapse" style="margin-left: 10px;">EndDeviceEvent</a></legend>
                    <div id="EndDeviceEvent_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.ActivityRecord.prototype.template.call (this) +
                    `
                    {{#issuerID}}<div><b>issuerID</b>: {{issuerID}}</div>{{/issuerID}}
                    {{#issuerTrackingID}}<div><b>issuerTrackingID</b>: {{issuerTrackingID}}</div>{{/issuerTrackingID}}
                    {{#userID}}<div><b>userID</b>: {{userID}}</div>{{/userID}}
                    {{#EndDeviceEventDetails}}<div><b>EndDeviceEventDetails</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EndDeviceEventDetails}}
                    {{#EndDevice}}<div><b>EndDevice</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EndDevice}}&quot;);})'>{{EndDevice}}</a></div>{{/EndDevice}}
                    {{#UsagePoint}}<div><b>UsagePoint</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{UsagePoint}}&quot;);})'>{{UsagePoint}}</a></div>{{/UsagePoint}}
                    {{#MeterReading}}<div><b>MeterReading</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MeterReading}}&quot;);})'>{{MeterReading}}</a></div>{{/MeterReading}}
                    {{#EndDeviceEventType}}<div><b>EndDeviceEventType</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EndDeviceEventType}}&quot;);})'>{{EndDeviceEventType}}</a></div>{{/EndDeviceEventType}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.EndDeviceEventDetails) obj.EndDeviceEventDetails_string = obj.EndDeviceEventDetails.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.EndDeviceEventDetails_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_EndDeviceEvent_collapse" aria-expanded="true" aria-controls="{{id}}_EndDeviceEvent_collapse" style="margin-left: 10px;">EndDeviceEvent</a></legend>
                    <div id="{{id}}_EndDeviceEvent_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.ActivityRecord.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_issuerID'>issuerID: </label><div class='col-sm-8'><input id='{{id}}_issuerID' class='form-control' type='text'{{#issuerID}} value='{{issuerID}}'{{/issuerID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_issuerTrackingID'>issuerTrackingID: </label><div class='col-sm-8'><input id='{{id}}_issuerTrackingID' class='form-control' type='text'{{#issuerTrackingID}} value='{{issuerTrackingID}}'{{/issuerTrackingID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_userID'>userID: </label><div class='col-sm-8'><input id='{{id}}_userID' class='form-control' type='text'{{#userID}} value='{{userID}}'{{/userID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EndDevice'>EndDevice: </label><div class='col-sm-8'><input id='{{id}}_EndDevice' class='form-control' type='text'{{#EndDevice}} value='{{EndDevice}}'{{/EndDevice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_UsagePoint'>UsagePoint: </label><div class='col-sm-8'><input id='{{id}}_UsagePoint' class='form-control' type='text'{{#UsagePoint}} value='{{UsagePoint}}'{{/UsagePoint}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MeterReading'>MeterReading: </label><div class='col-sm-8'><input id='{{id}}_MeterReading' class='form-control' type='text'{{#MeterReading}} value='{{MeterReading}}'{{/MeterReading}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EndDeviceEventType'>EndDeviceEventType: </label><div class='col-sm-8'><input id='{{id}}_EndDeviceEventType' class='form-control' type='text'{{#EndDeviceEventType}} value='{{EndDeviceEventType}}'{{/EndDeviceEventType}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "EndDeviceEvent" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_issuerID").value; if ("" != temp) obj.issuerID = temp;
                temp = document.getElementById (id + "_issuerTrackingID").value; if ("" != temp) obj.issuerTrackingID = temp;
                temp = document.getElementById (id + "_userID").value; if ("" != temp) obj.userID = temp;
                temp = document.getElementById (id + "_EndDevice").value; if ("" != temp) obj.EndDevice = temp;
                temp = document.getElementById (id + "_UsagePoint").value; if ("" != temp) obj.UsagePoint = temp;
                temp = document.getElementById (id + "_MeterReading").value; if ("" != temp) obj.MeterReading = temp;
                temp = document.getElementById (id + "_EndDeviceEventType").value; if ("" != temp) obj.EndDeviceEventType = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EndDeviceEventDetails", "0..*", "0..1", "EndDeviceEventDetail", "EndDeviceEvent"],
                            ["EndDevice", "0..1", "0..*", "EndDevice", "EndDeviceEvents"],
                            ["UsagePoint", "0..1", "0..*", "UsagePoint", "EndDeviceEvents"],
                            ["MeterReading", "0..1", "0..*", "MeterReading", "EndDeviceEvents"],
                            ["EndDeviceEventType", "1", "0..*", "EndDeviceEventType", "EndDeviceEvents"]
                        ]
                    )
                );
            }
        }

        /**
         * Multiplier applied at the usage point.
         *
         */
        class ServiceMultiplier extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ServiceMultiplier;
                if (null == bucket)
                   cim_data.ServiceMultiplier = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ServiceMultiplier[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ServiceMultiplier";
                base.parse_attribute (/<cim:ServiceMultiplier.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:ServiceMultiplier.value>([\s\S]*?)<\/cim:ServiceMultiplier.value>/g, obj, "value", base.to_float, sub, context);
                base.parse_attribute (/<cim:ServiceMultiplier.UsagePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UsagePoint", sub, context);
                var bucket = context.parsed.ServiceMultiplier;
                if (null == bucket)
                   context.parsed.ServiceMultiplier = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ServiceMultiplier", "kind", "kind", fields);
                base.export_element (obj, "ServiceMultiplier", "value", "value",  base.from_float, fields);
                base.export_attribute (obj, "ServiceMultiplier", "UsagePoint", "UsagePoint", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ServiceMultiplier_collapse" aria-expanded="true" aria-controls="ServiceMultiplier_collapse" style="margin-left: 10px;">ServiceMultiplier</a></legend>
                    <div id="ServiceMultiplier_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    {{#UsagePoint}}<div><b>UsagePoint</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{UsagePoint}}&quot;);})'>{{UsagePoint}}</a></div>{{/UsagePoint}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ServiceMultiplierKind = []; if (!obj.kind) obj.ServiceMultiplierKind.push ({ id: '', selected: true}); for (var property in ServiceMultiplierKind) obj.ServiceMultiplierKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ServiceMultiplierKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_ServiceMultiplier_collapse" aria-expanded="true" aria-controls="{{id}}_ServiceMultiplier_collapse" style="margin-left: 10px;">ServiceMultiplier</a></legend>
                    <div id="{{id}}_ServiceMultiplier_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control'>{{#ServiceMultiplierKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ServiceMultiplierKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_UsagePoint'>UsagePoint: </label><div class='col-sm-8'><input id='{{id}}_UsagePoint' class='form-control' type='text'{{#UsagePoint}} value='{{UsagePoint}}'{{/UsagePoint}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ServiceMultiplier" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_kind").value; if ("" != temp) { temp = ServiceMultiplierKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#ServiceMultiplierKind." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;
                temp = document.getElementById (id + "_UsagePoint").value; if ("" != temp) obj.UsagePoint = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["UsagePoint", "0..1", "0..*", "UsagePoint", "ServiceMultipliers"]
                        ]
                    )
                );
            }
        }

        /**
         * When present, a scalar conversion that needs to be applied to every IntervalReading.value contained in IntervalBlock.
         *
         * This conversion results in a new associated ReadingType, reflecting the true dimensions of IntervalReading values after the conversion.
         *
         */
        class PendingCalculation extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PendingCalculation;
                if (null == bucket)
                   cim_data.PendingCalculation = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PendingCalculation[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "PendingCalculation";
                base.parse_element (/<cim:PendingCalculation.multiplyBeforeAdd>([\s\S]*?)<\/cim:PendingCalculation.multiplyBeforeAdd>/g, obj, "multiplyBeforeAdd", base.to_boolean, sub, context);
                base.parse_element (/<cim:PendingCalculation.offset>([\s\S]*?)<\/cim:PendingCalculation.offset>/g, obj, "offset", base.to_string, sub, context);
                base.parse_element (/<cim:PendingCalculation.scalarDenominator>([\s\S]*?)<\/cim:PendingCalculation.scalarDenominator>/g, obj, "scalarDenominator", base.to_string, sub, context);
                base.parse_element (/<cim:PendingCalculation.scalarFloat>([\s\S]*?)<\/cim:PendingCalculation.scalarFloat>/g, obj, "scalarFloat", base.to_float, sub, context);
                base.parse_element (/<cim:PendingCalculation.scalarNumerator>([\s\S]*?)<\/cim:PendingCalculation.scalarNumerator>/g, obj, "scalarNumerator", base.to_string, sub, context);
                base.parse_attribute (/<cim:PendingCalculation.ReadingType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReadingType", sub, context);
                base.parse_attributes (/<cim:PendingCalculation.IntervalBlocks\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "IntervalBlocks", sub, context);
                var bucket = context.parsed.PendingCalculation;
                if (null == bucket)
                   context.parsed.PendingCalculation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "PendingCalculation", "multiplyBeforeAdd", "multiplyBeforeAdd",  base.from_boolean, fields);
                base.export_element (obj, "PendingCalculation", "offset", "offset",  base.from_string, fields);
                base.export_element (obj, "PendingCalculation", "scalarDenominator", "scalarDenominator",  base.from_string, fields);
                base.export_element (obj, "PendingCalculation", "scalarFloat", "scalarFloat",  base.from_float, fields);
                base.export_element (obj, "PendingCalculation", "scalarNumerator", "scalarNumerator",  base.from_string, fields);
                base.export_attribute (obj, "PendingCalculation", "ReadingType", "ReadingType", fields);
                base.export_attributes (obj, "PendingCalculation", "IntervalBlocks", "IntervalBlocks", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PendingCalculation_collapse" aria-expanded="true" aria-controls="PendingCalculation_collapse" style="margin-left: 10px;">PendingCalculation</a></legend>
                    <div id="PendingCalculation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplyBeforeAdd}}<div><b>multiplyBeforeAdd</b>: {{multiplyBeforeAdd}}</div>{{/multiplyBeforeAdd}}
                    {{#offset}}<div><b>offset</b>: {{offset}}</div>{{/offset}}
                    {{#scalarDenominator}}<div><b>scalarDenominator</b>: {{scalarDenominator}}</div>{{/scalarDenominator}}
                    {{#scalarFloat}}<div><b>scalarFloat</b>: {{scalarFloat}}</div>{{/scalarFloat}}
                    {{#scalarNumerator}}<div><b>scalarNumerator</b>: {{scalarNumerator}}</div>{{/scalarNumerator}}
                    {{#ReadingType}}<div><b>ReadingType</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ReadingType}}&quot;);})'>{{ReadingType}}</a></div>{{/ReadingType}}
                    {{#IntervalBlocks}}<div><b>IntervalBlocks</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/IntervalBlocks}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.IntervalBlocks) obj.IntervalBlocks_string = obj.IntervalBlocks.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.IntervalBlocks_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_PendingCalculation_collapse" aria-expanded="true" aria-controls="{{id}}_PendingCalculation_collapse" style="margin-left: 10px;">PendingCalculation</a></legend>
                    <div id="{{id}}_PendingCalculation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_multiplyBeforeAdd'>multiplyBeforeAdd: </label><div class='col-sm-8'><input id='{{id}}_multiplyBeforeAdd' class='form-check-input' type='checkbox'{{#multiplyBeforeAdd}} checked{{/multiplyBeforeAdd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_offset'>offset: </label><div class='col-sm-8'><input id='{{id}}_offset' class='form-control' type='text'{{#offset}} value='{{offset}}'{{/offset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_scalarDenominator'>scalarDenominator: </label><div class='col-sm-8'><input id='{{id}}_scalarDenominator' class='form-control' type='text'{{#scalarDenominator}} value='{{scalarDenominator}}'{{/scalarDenominator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_scalarFloat'>scalarFloat: </label><div class='col-sm-8'><input id='{{id}}_scalarFloat' class='form-control' type='text'{{#scalarFloat}} value='{{scalarFloat}}'{{/scalarFloat}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_scalarNumerator'>scalarNumerator: </label><div class='col-sm-8'><input id='{{id}}_scalarNumerator' class='form-control' type='text'{{#scalarNumerator}} value='{{scalarNumerator}}'{{/scalarNumerator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ReadingType'>ReadingType: </label><div class='col-sm-8'><input id='{{id}}_ReadingType' class='form-control' type='text'{{#ReadingType}} value='{{ReadingType}}'{{/ReadingType}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PendingCalculation" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplyBeforeAdd").checked; if (temp) obj.multiplyBeforeAdd = true;
                temp = document.getElementById (id + "_offset").value; if ("" != temp) obj.offset = temp;
                temp = document.getElementById (id + "_scalarDenominator").value; if ("" != temp) obj.scalarDenominator = temp;
                temp = document.getElementById (id + "_scalarFloat").value; if ("" != temp) obj.scalarFloat = temp;
                temp = document.getElementById (id + "_scalarNumerator").value; if ("" != temp) obj.scalarNumerator = temp;
                temp = document.getElementById (id + "_ReadingType").value; if ("" != temp) obj.ReadingType = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ReadingType", "1", "0..1", "ReadingType", "PendingCalculation"],
                            ["IntervalBlocks", "0..*", "0..1", "IntervalBlock", "PendingCalculation"]
                        ]
                    )
                );
            }
        }

        /**
         * Interharmonics are represented as a rational number 'numerator' / 'denominator', and harmonics are represented using the same mechanism and identified by 'denominator'=1.
         *
         */
        class ReadingInterharmonic extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ReadingInterharmonic;
                if (null == bucket)
                   cim_data.ReadingInterharmonic = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ReadingInterharmonic[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ReadingInterharmonic";
                base.parse_element (/<cim:ReadingInterharmonic.denominator>([\s\S]*?)<\/cim:ReadingInterharmonic.denominator>/g, obj, "denominator", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingInterharmonic.numerator>([\s\S]*?)<\/cim:ReadingInterharmonic.numerator>/g, obj, "numerator", base.to_string, sub, context);
                var bucket = context.parsed.ReadingInterharmonic;
                if (null == bucket)
                   context.parsed.ReadingInterharmonic = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ReadingInterharmonic", "denominator", "denominator",  base.from_string, fields);
                base.export_element (obj, "ReadingInterharmonic", "numerator", "numerator",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ReadingInterharmonic_collapse" aria-expanded="true" aria-controls="ReadingInterharmonic_collapse" style="margin-left: 10px;">ReadingInterharmonic</a></legend>
                    <div id="ReadingInterharmonic_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#denominator}}<div><b>denominator</b>: {{denominator}}</div>{{/denominator}}
                    {{#numerator}}<div><b>numerator</b>: {{numerator}}</div>{{/numerator}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_ReadingInterharmonic_collapse" aria-expanded="true" aria-controls="{{id}}_ReadingInterharmonic_collapse" style="margin-left: 10px;">ReadingInterharmonic</a></legend>
                    <div id="{{id}}_ReadingInterharmonic_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominator'>denominator: </label><div class='col-sm-8'><input id='{{id}}_denominator' class='form-control' type='text'{{#denominator}} value='{{denominator}}'{{/denominator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_numerator'>numerator: </label><div class='col-sm-8'><input id='{{id}}_numerator' class='form-control' type='text'{{#numerator}} value='{{numerator}}'{{/numerator}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ReadingInterharmonic" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_denominator").value; if ("" != temp) obj.denominator = temp;
                temp = document.getElementById (id + "_numerator").value; if ("" != temp) obj.numerator = temp;

                return (obj);
            }
        }

        /**
         * Detailed description for a control produced by an end device.
         *
         * Values in attributes allow for creation of recommended codes to be used for identifying end device controls as follows: &lt;type&gt;.&lt;domain&gt;.&lt;subDomain&gt;.&lt;eventOrAction&gt;.
         *
         */
        class EndDeviceControlType extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.EndDeviceControlType;
                if (null == bucket)
                   cim_data.EndDeviceControlType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EndDeviceControlType[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "EndDeviceControlType";
                base.parse_element (/<cim:EndDeviceControlType.domain>([\s\S]*?)<\/cim:EndDeviceControlType.domain>/g, obj, "domain", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceControlType.eventOrAction>([\s\S]*?)<\/cim:EndDeviceControlType.eventOrAction>/g, obj, "eventOrAction", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceControlType.subDomain>([\s\S]*?)<\/cim:EndDeviceControlType.subDomain>/g, obj, "subDomain", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceControlType.type>([\s\S]*?)<\/cim:EndDeviceControlType.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_attributes (/<cim:EndDeviceControlType.EndDeviceControls\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceControls", sub, context);
                var bucket = context.parsed.EndDeviceControlType;
                if (null == bucket)
                   context.parsed.EndDeviceControlType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "EndDeviceControlType", "domain", "domain",  base.from_string, fields);
                base.export_element (obj, "EndDeviceControlType", "eventOrAction", "eventOrAction",  base.from_string, fields);
                base.export_element (obj, "EndDeviceControlType", "subDomain", "subDomain",  base.from_string, fields);
                base.export_element (obj, "EndDeviceControlType", "type", "type",  base.from_string, fields);
                base.export_attributes (obj, "EndDeviceControlType", "EndDeviceControls", "EndDeviceControls", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EndDeviceControlType_collapse" aria-expanded="true" aria-controls="EndDeviceControlType_collapse" style="margin-left: 10px;">EndDeviceControlType</a></legend>
                    <div id="EndDeviceControlType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#domain}}<div><b>domain</b>: {{domain}}</div>{{/domain}}
                    {{#eventOrAction}}<div><b>eventOrAction</b>: {{eventOrAction}}</div>{{/eventOrAction}}
                    {{#subDomain}}<div><b>subDomain</b>: {{subDomain}}</div>{{/subDomain}}
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#EndDeviceControls}}<div><b>EndDeviceControls</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EndDeviceControls}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.EndDeviceControls) obj.EndDeviceControls_string = obj.EndDeviceControls.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.EndDeviceControls_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_EndDeviceControlType_collapse" aria-expanded="true" aria-controls="{{id}}_EndDeviceControlType_collapse" style="margin-left: 10px;">EndDeviceControlType</a></legend>
                    <div id="{{id}}_EndDeviceControlType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_domain'>domain: </label><div class='col-sm-8'><input id='{{id}}_domain' class='form-control' type='text'{{#domain}} value='{{domain}}'{{/domain}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_eventOrAction'>eventOrAction: </label><div class='col-sm-8'><input id='{{id}}_eventOrAction' class='form-control' type='text'{{#eventOrAction}} value='{{eventOrAction}}'{{/eventOrAction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_subDomain'>subDomain: </label><div class='col-sm-8'><input id='{{id}}_subDomain' class='form-control' type='text'{{#subDomain}} value='{{subDomain}}'{{/subDomain}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "EndDeviceControlType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_domain").value; if ("" != temp) obj.domain = temp;
                temp = document.getElementById (id + "_eventOrAction").value; if ("" != temp) obj.eventOrAction = temp;
                temp = document.getElementById (id + "_subDomain").value; if ("" != temp) obj.subDomain = temp;
                temp = document.getElementById (id + "_type").value; if ("" != temp) obj.type = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EndDeviceControls", "0..*", "1", "EndDeviceControl", "EndDeviceControlType"]
                        ]
                    )
                );
            }
        }

        /**
         * Abstraction for management of group communications within a two-way AMR system or the data for a group of related usage points.
         *
         * Commands can be issued to all of the usage points that belong to a usage point group using a defined group address and the underlying AMR communication infrastructure.
         *
         */
        class UsagePointGroup extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.UsagePointGroup;
                if (null == bucket)
                   cim_data.UsagePointGroup = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.UsagePointGroup[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "UsagePointGroup";
                base.parse_element (/<cim:UsagePointGroup.type>([\s\S]*?)<\/cim:UsagePointGroup.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_attributes (/<cim:UsagePointGroup.UsagePoints\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UsagePoints", sub, context);
                base.parse_attributes (/<cim:UsagePointGroup.EndDeviceControls\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceControls", sub, context);
                base.parse_attributes (/<cim:UsagePointGroup.DemandResponsePrograms\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DemandResponsePrograms", sub, context);
                var bucket = context.parsed.UsagePointGroup;
                if (null == bucket)
                   context.parsed.UsagePointGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "UsagePointGroup", "type", "type",  base.from_string, fields);
                base.export_attributes (obj, "UsagePointGroup", "UsagePoints", "UsagePoints", fields);
                base.export_attributes (obj, "UsagePointGroup", "EndDeviceControls", "EndDeviceControls", fields);
                base.export_attributes (obj, "UsagePointGroup", "DemandResponsePrograms", "DemandResponsePrograms", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#UsagePointGroup_collapse" aria-expanded="true" aria-controls="UsagePointGroup_collapse" style="margin-left: 10px;">UsagePointGroup</a></legend>
                    <div id="UsagePointGroup_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#UsagePoints}}<div><b>UsagePoints</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/UsagePoints}}
                    {{#EndDeviceControls}}<div><b>EndDeviceControls</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EndDeviceControls}}
                    {{#DemandResponsePrograms}}<div><b>DemandResponsePrograms</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/DemandResponsePrograms}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.UsagePoints) obj.UsagePoints_string = obj.UsagePoints.join ();
                if (obj.EndDeviceControls) obj.EndDeviceControls_string = obj.EndDeviceControls.join ();
                if (obj.DemandResponsePrograms) obj.DemandResponsePrograms_string = obj.DemandResponsePrograms.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UsagePoints_string;
                delete obj.EndDeviceControls_string;
                delete obj.DemandResponsePrograms_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_UsagePointGroup_collapse" aria-expanded="true" aria-controls="{{id}}_UsagePointGroup_collapse" style="margin-left: 10px;">UsagePointGroup</a></legend>
                    <div id="{{id}}_UsagePointGroup_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_UsagePoints'>UsagePoints: </label><div class='col-sm-8'><input id='{{id}}_UsagePoints' class='form-control' type='text'{{#UsagePoints}} value='{{UsagePoints}}_string'{{/UsagePoints}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EndDeviceControls'>EndDeviceControls: </label><div class='col-sm-8'><input id='{{id}}_EndDeviceControls' class='form-control' type='text'{{#EndDeviceControls}} value='{{EndDeviceControls}}_string'{{/EndDeviceControls}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DemandResponsePrograms'>DemandResponsePrograms: </label><div class='col-sm-8'><input id='{{id}}_DemandResponsePrograms' class='form-control' type='text'{{#DemandResponsePrograms}} value='{{DemandResponsePrograms}}_string'{{/DemandResponsePrograms}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "UsagePointGroup" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_type").value; if ("" != temp) obj.type = temp;
                temp = document.getElementById (id + "_UsagePoints").value; if ("" != temp) obj.UsagePoints = temp.split (",");
                temp = document.getElementById (id + "_EndDeviceControls").value; if ("" != temp) obj.EndDeviceControls = temp.split (",");
                temp = document.getElementById (id + "_DemandResponsePrograms").value; if ("" != temp) obj.DemandResponsePrograms = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["UsagePoints", "0..*", "0..*", "UsagePoint", "UsagePointGroups"],
                            ["EndDeviceControls", "0..*", "0..*", "EndDeviceControl", "UsagePointGroups"],
                            ["DemandResponsePrograms", "0..*", "0..*", "DemandResponseProgram", "UsagePointGroups"]
                        ]
                    )
                );
            }
        }

        /**
         * Work involving meters.
         *
         */
        class MeterServiceWork extends Work.Work
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.MeterServiceWork;
                if (null == bucket)
                   cim_data.MeterServiceWork = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MeterServiceWork[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Work.Work.prototype.parse.call (this, context, sub);
                obj.cls = "MeterServiceWork";
                base.parse_attribute (/<cim:MeterServiceWork.Meter\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Meter", sub, context);
                base.parse_attribute (/<cim:MeterServiceWork.OldMeter\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OldMeter", sub, context);
                base.parse_attribute (/<cim:MeterServiceWork.UsagePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UsagePoint", sub, context);
                var bucket = context.parsed.MeterServiceWork;
                if (null == bucket)
                   context.parsed.MeterServiceWork = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Work.Work.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MeterServiceWork", "Meter", "Meter", fields);
                base.export_attribute (obj, "MeterServiceWork", "OldMeter", "OldMeter", fields);
                base.export_attribute (obj, "MeterServiceWork", "UsagePoint", "UsagePoint", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MeterServiceWork_collapse" aria-expanded="true" aria-controls="MeterServiceWork_collapse" style="margin-left: 10px;">MeterServiceWork</a></legend>
                    <div id="MeterServiceWork_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Work.Work.prototype.template.call (this) +
                    `
                    {{#Meter}}<div><b>Meter</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Meter}}&quot;);})'>{{Meter}}</a></div>{{/Meter}}
                    {{#OldMeter}}<div><b>OldMeter</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{OldMeter}}&quot;);})'>{{OldMeter}}</a></div>{{/OldMeter}}
                    {{#UsagePoint}}<div><b>UsagePoint</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{UsagePoint}}&quot;);})'>{{UsagePoint}}</a></div>{{/UsagePoint}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_MeterServiceWork_collapse" aria-expanded="true" aria-controls="{{id}}_MeterServiceWork_collapse" style="margin-left: 10px;">MeterServiceWork</a></legend>
                    <div id="{{id}}_MeterServiceWork_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Work.Work.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Meter'>Meter: </label><div class='col-sm-8'><input id='{{id}}_Meter' class='form-control' type='text'{{#Meter}} value='{{Meter}}'{{/Meter}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OldMeter'>OldMeter: </label><div class='col-sm-8'><input id='{{id}}_OldMeter' class='form-control' type='text'{{#OldMeter}} value='{{OldMeter}}'{{/OldMeter}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_UsagePoint'>UsagePoint: </label><div class='col-sm-8'><input id='{{id}}_UsagePoint' class='form-control' type='text'{{#UsagePoint}} value='{{UsagePoint}}'{{/UsagePoint}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "MeterServiceWork" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Meter").value; if ("" != temp) obj.Meter = temp;
                temp = document.getElementById (id + "_OldMeter").value; if ("" != temp) obj.OldMeter = temp;
                temp = document.getElementById (id + "_UsagePoint").value; if ("" != temp) obj.UsagePoint = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Meter", "0..1", "0..*", "Meter", "MeterServiceWorks"],
                            ["OldMeter", "0..1", "0..*", "Meter", "MeterReplacementWorks"],
                            ["UsagePoint", "0..1", "0..*", "UsagePoint", "MeterServiceWorks"]
                        ]
                    )
                );
            }
        }

        /**
         * Detailed description for a quality of a reading value, produced by an end device or a system.
         *
         * Values in attributes allow for creation of the recommended codes to be used for identifying reading value quality codes as follows: &lt;systemId&gt;.&lt;category&gt;.&lt;subCategory&gt;.
         *
         */
        class ReadingQualityType extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ReadingQualityType;
                if (null == bucket)
                   cim_data.ReadingQualityType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ReadingQualityType[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ReadingQualityType";
                base.parse_element (/<cim:ReadingQualityType.category>([\s\S]*?)<\/cim:ReadingQualityType.category>/g, obj, "category", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingQualityType.subCategory>([\s\S]*?)<\/cim:ReadingQualityType.subCategory>/g, obj, "subCategory", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingQualityType.systemId>([\s\S]*?)<\/cim:ReadingQualityType.systemId>/g, obj, "systemId", base.to_string, sub, context);
                base.parse_attributes (/<cim:ReadingQualityType.ReadingQualities\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReadingQualities", sub, context);
                var bucket = context.parsed.ReadingQualityType;
                if (null == bucket)
                   context.parsed.ReadingQualityType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ReadingQualityType", "category", "category",  base.from_string, fields);
                base.export_element (obj, "ReadingQualityType", "subCategory", "subCategory",  base.from_string, fields);
                base.export_element (obj, "ReadingQualityType", "systemId", "systemId",  base.from_string, fields);
                base.export_attributes (obj, "ReadingQualityType", "ReadingQualities", "ReadingQualities", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ReadingQualityType_collapse" aria-expanded="true" aria-controls="ReadingQualityType_collapse" style="margin-left: 10px;">ReadingQualityType</a></legend>
                    <div id="ReadingQualityType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#category}}<div><b>category</b>: {{category}}</div>{{/category}}
                    {{#subCategory}}<div><b>subCategory</b>: {{subCategory}}</div>{{/subCategory}}
                    {{#systemId}}<div><b>systemId</b>: {{systemId}}</div>{{/systemId}}
                    {{#ReadingQualities}}<div><b>ReadingQualities</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ReadingQualities}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ReadingQualities) obj.ReadingQualities_string = obj.ReadingQualities.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ReadingQualities_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_ReadingQualityType_collapse" aria-expanded="true" aria-controls="{{id}}_ReadingQualityType_collapse" style="margin-left: 10px;">ReadingQualityType</a></legend>
                    <div id="{{id}}_ReadingQualityType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_category'>category: </label><div class='col-sm-8'><input id='{{id}}_category' class='form-control' type='text'{{#category}} value='{{category}}'{{/category}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_subCategory'>subCategory: </label><div class='col-sm-8'><input id='{{id}}_subCategory' class='form-control' type='text'{{#subCategory}} value='{{subCategory}}'{{/subCategory}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_systemId'>systemId: </label><div class='col-sm-8'><input id='{{id}}_systemId' class='form-control' type='text'{{#systemId}} value='{{systemId}}'{{/systemId}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ReadingQualityType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_category").value; if ("" != temp) obj.category = temp;
                temp = document.getElementById (id + "_subCategory").value; if ("" != temp) obj.subCategory = temp;
                temp = document.getElementById (id + "_systemId").value; if ("" != temp) obj.systemId = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ReadingQualities", "0..*", "1", "ReadingQuality", "ReadingQualityType"]
                        ]
                    )
                );
            }
        }

        /**
         * Detailed description for an event produced by an end device.
         *
         * Values in attributes allow for creation of recommended codes to be used for identifying end device events as follows: &lt;type&gt;.&lt;domain&gt;.&lt;subDomain&gt;.&lt;eventOrAction&gt;.
         *
         */
        class EndDeviceEventType extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.EndDeviceEventType;
                if (null == bucket)
                   cim_data.EndDeviceEventType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EndDeviceEventType[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "EndDeviceEventType";
                base.parse_element (/<cim:EndDeviceEventType.domain>([\s\S]*?)<\/cim:EndDeviceEventType.domain>/g, obj, "domain", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceEventType.eventOrAction>([\s\S]*?)<\/cim:EndDeviceEventType.eventOrAction>/g, obj, "eventOrAction", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceEventType.subDomain>([\s\S]*?)<\/cim:EndDeviceEventType.subDomain>/g, obj, "subDomain", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceEventType.type>([\s\S]*?)<\/cim:EndDeviceEventType.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_attributes (/<cim:EndDeviceEventType.EndDeviceEvents\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceEvents", sub, context);
                var bucket = context.parsed.EndDeviceEventType;
                if (null == bucket)
                   context.parsed.EndDeviceEventType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "EndDeviceEventType", "domain", "domain",  base.from_string, fields);
                base.export_element (obj, "EndDeviceEventType", "eventOrAction", "eventOrAction",  base.from_string, fields);
                base.export_element (obj, "EndDeviceEventType", "subDomain", "subDomain",  base.from_string, fields);
                base.export_element (obj, "EndDeviceEventType", "type", "type",  base.from_string, fields);
                base.export_attributes (obj, "EndDeviceEventType", "EndDeviceEvents", "EndDeviceEvents", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EndDeviceEventType_collapse" aria-expanded="true" aria-controls="EndDeviceEventType_collapse" style="margin-left: 10px;">EndDeviceEventType</a></legend>
                    <div id="EndDeviceEventType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#domain}}<div><b>domain</b>: {{domain}}</div>{{/domain}}
                    {{#eventOrAction}}<div><b>eventOrAction</b>: {{eventOrAction}}</div>{{/eventOrAction}}
                    {{#subDomain}}<div><b>subDomain</b>: {{subDomain}}</div>{{/subDomain}}
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#EndDeviceEvents}}<div><b>EndDeviceEvents</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EndDeviceEvents}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.EndDeviceEvents) obj.EndDeviceEvents_string = obj.EndDeviceEvents.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.EndDeviceEvents_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_EndDeviceEventType_collapse" aria-expanded="true" aria-controls="{{id}}_EndDeviceEventType_collapse" style="margin-left: 10px;">EndDeviceEventType</a></legend>
                    <div id="{{id}}_EndDeviceEventType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_domain'>domain: </label><div class='col-sm-8'><input id='{{id}}_domain' class='form-control' type='text'{{#domain}} value='{{domain}}'{{/domain}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_eventOrAction'>eventOrAction: </label><div class='col-sm-8'><input id='{{id}}_eventOrAction' class='form-control' type='text'{{#eventOrAction}} value='{{eventOrAction}}'{{/eventOrAction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_subDomain'>subDomain: </label><div class='col-sm-8'><input id='{{id}}_subDomain' class='form-control' type='text'{{#subDomain}} value='{{subDomain}}'{{/subDomain}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "EndDeviceEventType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_domain").value; if ("" != temp) obj.domain = temp;
                temp = document.getElementById (id + "_eventOrAction").value; if ("" != temp) obj.eventOrAction = temp;
                temp = document.getElementById (id + "_subDomain").value; if ("" != temp) obj.subDomain = temp;
                temp = document.getElementById (id + "_type").value; if ("" != temp) obj.type = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EndDeviceEvents", "0..*", "1", "EndDeviceEvent", "EndDeviceEventType"]
                        ]
                    )
                );
            }
        }

        /**
         * Asset container that performs one or more end device functions.
         *
         * One type of end device is a meter which can perform metering, load management, connect/disconnect, accounting functions, etc. Some end devices, such as ones monitoring and controlling air conditioners, refrigerators, pool pumps may be connected to a meter. All end devices may have communication capability defined by the associated communication function(s). An end device may be owned by a consumer, a service provider, utility or otherwise.
         *
         */
        class EndDevice extends Assets.AssetContainer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.EndDevice;
                if (null == bucket)
                   cim_data.EndDevice = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EndDevice[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Assets.AssetContainer.prototype.parse.call (this, context, sub);
                obj.cls = "EndDevice";
                base.parse_element (/<cim:EndDevice.amrSystem>([\s\S]*?)<\/cim:EndDevice.amrSystem>/g, obj, "amrSystem", base.to_string, sub, context);
                base.parse_element (/<cim:EndDevice.installCode>([\s\S]*?)<\/cim:EndDevice.installCode>/g, obj, "installCode", base.to_string, sub, context);
                base.parse_element (/<cim:EndDevice.isPan>([\s\S]*?)<\/cim:EndDevice.isPan>/g, obj, "isPan", base.to_boolean, sub, context);
                base.parse_element (/<cim:EndDevice.isVirtual>([\s\S]*?)<\/cim:EndDevice.isVirtual>/g, obj, "isVirtual", base.to_boolean, sub, context);
                base.parse_element (/<cim:EndDevice.timeZoneOffset>([\s\S]*?)<\/cim:EndDevice.timeZoneOffset>/g, obj, "timeZoneOffset", base.to_string, sub, context);
                base.parse_attributes (/<cim:EndDevice.EndDeviceFunctions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceFunctions", sub, context);
                base.parse_attribute (/<cim:EndDevice.EndDeviceInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceInfo", sub, context);
                base.parse_attributes (/<cim:EndDevice.EndDeviceEvents\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceEvents", sub, context);
                base.parse_attribute (/<cim:EndDevice.ServiceLocation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ServiceLocation", sub, context);
                base.parse_attribute (/<cim:EndDevice.Customer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Customer", sub, context);
                base.parse_attribute (/<cim:EndDevice.UsagePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UsagePoint", sub, context);
                base.parse_attributes (/<cim:EndDevice.EndDeviceGroups\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceGroups", sub, context);
                base.parse_attributes (/<cim:EndDevice.EndDeviceControls\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceControls", sub, context);
                var bucket = context.parsed.EndDevice;
                if (null == bucket)
                   context.parsed.EndDevice = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Assets.AssetContainer.prototype.export.call (this, obj, false);

                base.export_element (obj, "EndDevice", "amrSystem", "amrSystem",  base.from_string, fields);
                base.export_element (obj, "EndDevice", "installCode", "installCode",  base.from_string, fields);
                base.export_element (obj, "EndDevice", "isPan", "isPan",  base.from_boolean, fields);
                base.export_element (obj, "EndDevice", "isVirtual", "isVirtual",  base.from_boolean, fields);
                base.export_element (obj, "EndDevice", "timeZoneOffset", "timeZoneOffset",  base.from_string, fields);
                base.export_attributes (obj, "EndDevice", "EndDeviceFunctions", "EndDeviceFunctions", fields);
                base.export_attribute (obj, "EndDevice", "EndDeviceInfo", "EndDeviceInfo", fields);
                base.export_attributes (obj, "EndDevice", "EndDeviceEvents", "EndDeviceEvents", fields);
                base.export_attribute (obj, "EndDevice", "ServiceLocation", "ServiceLocation", fields);
                base.export_attribute (obj, "EndDevice", "Customer", "Customer", fields);
                base.export_attribute (obj, "EndDevice", "UsagePoint", "UsagePoint", fields);
                base.export_attributes (obj, "EndDevice", "EndDeviceGroups", "EndDeviceGroups", fields);
                base.export_attributes (obj, "EndDevice", "EndDeviceControls", "EndDeviceControls", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EndDevice_collapse" aria-expanded="true" aria-controls="EndDevice_collapse" style="margin-left: 10px;">EndDevice</a></legend>
                    <div id="EndDevice_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.AssetContainer.prototype.template.call (this) +
                    `
                    {{#amrSystem}}<div><b>amrSystem</b>: {{amrSystem}}</div>{{/amrSystem}}
                    {{#installCode}}<div><b>installCode</b>: {{installCode}}</div>{{/installCode}}
                    {{#isPan}}<div><b>isPan</b>: {{isPan}}</div>{{/isPan}}
                    {{#isVirtual}}<div><b>isVirtual</b>: {{isVirtual}}</div>{{/isVirtual}}
                    {{#timeZoneOffset}}<div><b>timeZoneOffset</b>: {{timeZoneOffset}}</div>{{/timeZoneOffset}}
                    {{#EndDeviceFunctions}}<div><b>EndDeviceFunctions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EndDeviceFunctions}}
                    {{#EndDeviceInfo}}<div><b>EndDeviceInfo</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EndDeviceInfo}}&quot;);})'>{{EndDeviceInfo}}</a></div>{{/EndDeviceInfo}}
                    {{#EndDeviceEvents}}<div><b>EndDeviceEvents</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EndDeviceEvents}}
                    {{#ServiceLocation}}<div><b>ServiceLocation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ServiceLocation}}&quot;);})'>{{ServiceLocation}}</a></div>{{/ServiceLocation}}
                    {{#Customer}}<div><b>Customer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Customer}}&quot;);})'>{{Customer}}</a></div>{{/Customer}}
                    {{#UsagePoint}}<div><b>UsagePoint</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{UsagePoint}}&quot;);})'>{{UsagePoint}}</a></div>{{/UsagePoint}}
                    {{#EndDeviceGroups}}<div><b>EndDeviceGroups</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EndDeviceGroups}}
                    {{#EndDeviceControls}}<div><b>EndDeviceControls</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EndDeviceControls}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.EndDeviceFunctions) obj.EndDeviceFunctions_string = obj.EndDeviceFunctions.join ();
                if (obj.EndDeviceEvents) obj.EndDeviceEvents_string = obj.EndDeviceEvents.join ();
                if (obj.EndDeviceGroups) obj.EndDeviceGroups_string = obj.EndDeviceGroups.join ();
                if (obj.EndDeviceControls) obj.EndDeviceControls_string = obj.EndDeviceControls.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.EndDeviceFunctions_string;
                delete obj.EndDeviceEvents_string;
                delete obj.EndDeviceGroups_string;
                delete obj.EndDeviceControls_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_EndDevice_collapse" aria-expanded="true" aria-controls="{{id}}_EndDevice_collapse" style="margin-left: 10px;">EndDevice</a></legend>
                    <div id="{{id}}_EndDevice_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.AssetContainer.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_amrSystem'>amrSystem: </label><div class='col-sm-8'><input id='{{id}}_amrSystem' class='form-control' type='text'{{#amrSystem}} value='{{amrSystem}}'{{/amrSystem}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_installCode'>installCode: </label><div class='col-sm-8'><input id='{{id}}_installCode' class='form-control' type='text'{{#installCode}} value='{{installCode}}'{{/installCode}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_isPan'>isPan: </label><div class='col-sm-8'><input id='{{id}}_isPan' class='form-check-input' type='checkbox'{{#isPan}} checked{{/isPan}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_isVirtual'>isVirtual: </label><div class='col-sm-8'><input id='{{id}}_isVirtual' class='form-check-input' type='checkbox'{{#isVirtual}} checked{{/isVirtual}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_timeZoneOffset'>timeZoneOffset: </label><div class='col-sm-8'><input id='{{id}}_timeZoneOffset' class='form-control' type='text'{{#timeZoneOffset}} value='{{timeZoneOffset}}'{{/timeZoneOffset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EndDeviceInfo'>EndDeviceInfo: </label><div class='col-sm-8'><input id='{{id}}_EndDeviceInfo' class='form-control' type='text'{{#EndDeviceInfo}} value='{{EndDeviceInfo}}'{{/EndDeviceInfo}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ServiceLocation'>ServiceLocation: </label><div class='col-sm-8'><input id='{{id}}_ServiceLocation' class='form-control' type='text'{{#ServiceLocation}} value='{{ServiceLocation}}'{{/ServiceLocation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Customer'>Customer: </label><div class='col-sm-8'><input id='{{id}}_Customer' class='form-control' type='text'{{#Customer}} value='{{Customer}}'{{/Customer}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_UsagePoint'>UsagePoint: </label><div class='col-sm-8'><input id='{{id}}_UsagePoint' class='form-control' type='text'{{#UsagePoint}} value='{{UsagePoint}}'{{/UsagePoint}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EndDeviceGroups'>EndDeviceGroups: </label><div class='col-sm-8'><input id='{{id}}_EndDeviceGroups' class='form-control' type='text'{{#EndDeviceGroups}} value='{{EndDeviceGroups}}_string'{{/EndDeviceGroups}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EndDeviceControls'>EndDeviceControls: </label><div class='col-sm-8'><input id='{{id}}_EndDeviceControls' class='form-control' type='text'{{#EndDeviceControls}} value='{{EndDeviceControls}}_string'{{/EndDeviceControls}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "EndDevice" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_amrSystem").value; if ("" != temp) obj.amrSystem = temp;
                temp = document.getElementById (id + "_installCode").value; if ("" != temp) obj.installCode = temp;
                temp = document.getElementById (id + "_isPan").checked; if (temp) obj.isPan = true;
                temp = document.getElementById (id + "_isVirtual").checked; if (temp) obj.isVirtual = true;
                temp = document.getElementById (id + "_timeZoneOffset").value; if ("" != temp) obj.timeZoneOffset = temp;
                temp = document.getElementById (id + "_EndDeviceInfo").value; if ("" != temp) obj.EndDeviceInfo = temp;
                temp = document.getElementById (id + "_ServiceLocation").value; if ("" != temp) obj.ServiceLocation = temp;
                temp = document.getElementById (id + "_Customer").value; if ("" != temp) obj.Customer = temp;
                temp = document.getElementById (id + "_UsagePoint").value; if ("" != temp) obj.UsagePoint = temp;
                temp = document.getElementById (id + "_EndDeviceGroups").value; if ("" != temp) obj.EndDeviceGroups = temp.split (",");
                temp = document.getElementById (id + "_EndDeviceControls").value; if ("" != temp) obj.EndDeviceControls = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EndDeviceFunctions", "0..*", "0..1", "EndDeviceFunction", "EndDevice"],
                            ["EndDeviceInfo", "0..1", "0..*", "EndDeviceInfo", "EndDevices"],
                            ["EndDeviceEvents", "0..*", "0..1", "EndDeviceEvent", "EndDevice"],
                            ["ServiceLocation", "0..1", "0..*", "ServiceLocation", "EndDevices"],
                            ["Customer", "0..1", "0..*", "Customer", "EndDevices"],
                            ["UsagePoint", "0..1", "0..*", "UsagePoint", "EndDevices"],
                            ["EndDeviceGroups", "0..*", "0..*", "EndDeviceGroup", "EndDevices"],
                            ["EndDeviceControls", "0..*", "0..*", "EndDeviceControl", "EndDevices"]
                        ]
                    )
                );
            }
        }

        /**
         * Inherent capabilities of an end device (i.e., the functions it supports).
         *
         */
        class EndDeviceCapability extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.EndDeviceCapability;
                if (null == bucket)
                   cim_data.EndDeviceCapability = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EndDeviceCapability[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "EndDeviceCapability";
                base.parse_element (/<cim:EndDeviceCapability.autonomousDst>([\s\S]*?)<\/cim:EndDeviceCapability.autonomousDst>/g, obj, "autonomousDst", base.to_boolean, sub, context);
                base.parse_element (/<cim:EndDeviceCapability.communication>([\s\S]*?)<\/cim:EndDeviceCapability.communication>/g, obj, "communication", base.to_boolean, sub, context);
                base.parse_element (/<cim:EndDeviceCapability.connectDisconnect>([\s\S]*?)<\/cim:EndDeviceCapability.connectDisconnect>/g, obj, "connectDisconnect", base.to_boolean, sub, context);
                base.parse_element (/<cim:EndDeviceCapability.demandResponse>([\s\S]*?)<\/cim:EndDeviceCapability.demandResponse>/g, obj, "demandResponse", base.to_boolean, sub, context);
                base.parse_element (/<cim:EndDeviceCapability.electricMetering>([\s\S]*?)<\/cim:EndDeviceCapability.electricMetering>/g, obj, "electricMetering", base.to_boolean, sub, context);
                base.parse_element (/<cim:EndDeviceCapability.gasMetering>([\s\S]*?)<\/cim:EndDeviceCapability.gasMetering>/g, obj, "gasMetering", base.to_boolean, sub, context);
                base.parse_element (/<cim:EndDeviceCapability.metrology>([\s\S]*?)<\/cim:EndDeviceCapability.metrology>/g, obj, "metrology", base.to_boolean, sub, context);
                base.parse_element (/<cim:EndDeviceCapability.onRequestRead>([\s\S]*?)<\/cim:EndDeviceCapability.onRequestRead>/g, obj, "onRequestRead", base.to_boolean, sub, context);
                base.parse_element (/<cim:EndDeviceCapability.outageHistory>([\s\S]*?)<\/cim:EndDeviceCapability.outageHistory>/g, obj, "outageHistory", base.to_boolean, sub, context);
                base.parse_element (/<cim:EndDeviceCapability.pressureCompensation>([\s\S]*?)<\/cim:EndDeviceCapability.pressureCompensation>/g, obj, "pressureCompensation", base.to_boolean, sub, context);
                base.parse_element (/<cim:EndDeviceCapability.pricingInfo>([\s\S]*?)<\/cim:EndDeviceCapability.pricingInfo>/g, obj, "pricingInfo", base.to_boolean, sub, context);
                base.parse_element (/<cim:EndDeviceCapability.pulseOutput>([\s\S]*?)<\/cim:EndDeviceCapability.pulseOutput>/g, obj, "pulseOutput", base.to_boolean, sub, context);
                base.parse_element (/<cim:EndDeviceCapability.relaysProgramming>([\s\S]*?)<\/cim:EndDeviceCapability.relaysProgramming>/g, obj, "relaysProgramming", base.to_boolean, sub, context);
                base.parse_element (/<cim:EndDeviceCapability.reverseFlow>([\s\S]*?)<\/cim:EndDeviceCapability.reverseFlow>/g, obj, "reverseFlow", base.to_boolean, sub, context);
                base.parse_element (/<cim:EndDeviceCapability.superCompressibilityCompensation>([\s\S]*?)<\/cim:EndDeviceCapability.superCompressibilityCompensation>/g, obj, "superCompressibilityCompensation", base.to_boolean, sub, context);
                base.parse_element (/<cim:EndDeviceCapability.temperatureCompensation>([\s\S]*?)<\/cim:EndDeviceCapability.temperatureCompensation>/g, obj, "temperatureCompensation", base.to_boolean, sub, context);
                base.parse_element (/<cim:EndDeviceCapability.textMessage>([\s\S]*?)<\/cim:EndDeviceCapability.textMessage>/g, obj, "textMessage", base.to_boolean, sub, context);
                base.parse_element (/<cim:EndDeviceCapability.waterMetering>([\s\S]*?)<\/cim:EndDeviceCapability.waterMetering>/g, obj, "waterMetering", base.to_boolean, sub, context);
                var bucket = context.parsed.EndDeviceCapability;
                if (null == bucket)
                   context.parsed.EndDeviceCapability = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "EndDeviceCapability", "autonomousDst", "autonomousDst",  base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "communication", "communication",  base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "connectDisconnect", "connectDisconnect",  base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "demandResponse", "demandResponse",  base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "electricMetering", "electricMetering",  base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "gasMetering", "gasMetering",  base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "metrology", "metrology",  base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "onRequestRead", "onRequestRead",  base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "outageHistory", "outageHistory",  base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "pressureCompensation", "pressureCompensation",  base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "pricingInfo", "pricingInfo",  base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "pulseOutput", "pulseOutput",  base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "relaysProgramming", "relaysProgramming",  base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "reverseFlow", "reverseFlow",  base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "superCompressibilityCompensation", "superCompressibilityCompensation",  base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "temperatureCompensation", "temperatureCompensation",  base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "textMessage", "textMessage",  base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "waterMetering", "waterMetering",  base.from_boolean, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EndDeviceCapability_collapse" aria-expanded="true" aria-controls="EndDeviceCapability_collapse" style="margin-left: 10px;">EndDeviceCapability</a></legend>
                    <div id="EndDeviceCapability_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#autonomousDst}}<div><b>autonomousDst</b>: {{autonomousDst}}</div>{{/autonomousDst}}
                    {{#communication}}<div><b>communication</b>: {{communication}}</div>{{/communication}}
                    {{#connectDisconnect}}<div><b>connectDisconnect</b>: {{connectDisconnect}}</div>{{/connectDisconnect}}
                    {{#demandResponse}}<div><b>demandResponse</b>: {{demandResponse}}</div>{{/demandResponse}}
                    {{#electricMetering}}<div><b>electricMetering</b>: {{electricMetering}}</div>{{/electricMetering}}
                    {{#gasMetering}}<div><b>gasMetering</b>: {{gasMetering}}</div>{{/gasMetering}}
                    {{#metrology}}<div><b>metrology</b>: {{metrology}}</div>{{/metrology}}
                    {{#onRequestRead}}<div><b>onRequestRead</b>: {{onRequestRead}}</div>{{/onRequestRead}}
                    {{#outageHistory}}<div><b>outageHistory</b>: {{outageHistory}}</div>{{/outageHistory}}
                    {{#pressureCompensation}}<div><b>pressureCompensation</b>: {{pressureCompensation}}</div>{{/pressureCompensation}}
                    {{#pricingInfo}}<div><b>pricingInfo</b>: {{pricingInfo}}</div>{{/pricingInfo}}
                    {{#pulseOutput}}<div><b>pulseOutput</b>: {{pulseOutput}}</div>{{/pulseOutput}}
                    {{#relaysProgramming}}<div><b>relaysProgramming</b>: {{relaysProgramming}}</div>{{/relaysProgramming}}
                    {{#reverseFlow}}<div><b>reverseFlow</b>: {{reverseFlow}}</div>{{/reverseFlow}}
                    {{#superCompressibilityCompensation}}<div><b>superCompressibilityCompensation</b>: {{superCompressibilityCompensation}}</div>{{/superCompressibilityCompensation}}
                    {{#temperatureCompensation}}<div><b>temperatureCompensation</b>: {{temperatureCompensation}}</div>{{/temperatureCompensation}}
                    {{#textMessage}}<div><b>textMessage</b>: {{textMessage}}</div>{{/textMessage}}
                    {{#waterMetering}}<div><b>waterMetering</b>: {{waterMetering}}</div>{{/waterMetering}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_EndDeviceCapability_collapse" aria-expanded="true" aria-controls="{{id}}_EndDeviceCapability_collapse" style="margin-left: 10px;">EndDeviceCapability</a></legend>
                    <div id="{{id}}_EndDeviceCapability_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_autonomousDst'>autonomousDst: </label><div class='col-sm-8'><input id='{{id}}_autonomousDst' class='form-check-input' type='checkbox'{{#autonomousDst}} checked{{/autonomousDst}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_communication'>communication: </label><div class='col-sm-8'><input id='{{id}}_communication' class='form-check-input' type='checkbox'{{#communication}} checked{{/communication}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_connectDisconnect'>connectDisconnect: </label><div class='col-sm-8'><input id='{{id}}_connectDisconnect' class='form-check-input' type='checkbox'{{#connectDisconnect}} checked{{/connectDisconnect}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_demandResponse'>demandResponse: </label><div class='col-sm-8'><input id='{{id}}_demandResponse' class='form-check-input' type='checkbox'{{#demandResponse}} checked{{/demandResponse}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_electricMetering'>electricMetering: </label><div class='col-sm-8'><input id='{{id}}_electricMetering' class='form-check-input' type='checkbox'{{#electricMetering}} checked{{/electricMetering}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_gasMetering'>gasMetering: </label><div class='col-sm-8'><input id='{{id}}_gasMetering' class='form-check-input' type='checkbox'{{#gasMetering}} checked{{/gasMetering}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_metrology'>metrology: </label><div class='col-sm-8'><input id='{{id}}_metrology' class='form-check-input' type='checkbox'{{#metrology}} checked{{/metrology}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_onRequestRead'>onRequestRead: </label><div class='col-sm-8'><input id='{{id}}_onRequestRead' class='form-check-input' type='checkbox'{{#onRequestRead}} checked{{/onRequestRead}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_outageHistory'>outageHistory: </label><div class='col-sm-8'><input id='{{id}}_outageHistory' class='form-check-input' type='checkbox'{{#outageHistory}} checked{{/outageHistory}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_pressureCompensation'>pressureCompensation: </label><div class='col-sm-8'><input id='{{id}}_pressureCompensation' class='form-check-input' type='checkbox'{{#pressureCompensation}} checked{{/pressureCompensation}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_pricingInfo'>pricingInfo: </label><div class='col-sm-8'><input id='{{id}}_pricingInfo' class='form-check-input' type='checkbox'{{#pricingInfo}} checked{{/pricingInfo}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_pulseOutput'>pulseOutput: </label><div class='col-sm-8'><input id='{{id}}_pulseOutput' class='form-check-input' type='checkbox'{{#pulseOutput}} checked{{/pulseOutput}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_relaysProgramming'>relaysProgramming: </label><div class='col-sm-8'><input id='{{id}}_relaysProgramming' class='form-check-input' type='checkbox'{{#relaysProgramming}} checked{{/relaysProgramming}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_reverseFlow'>reverseFlow: </label><div class='col-sm-8'><input id='{{id}}_reverseFlow' class='form-check-input' type='checkbox'{{#reverseFlow}} checked{{/reverseFlow}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_superCompressibilityCompensation'>superCompressibilityCompensation: </label><div class='col-sm-8'><input id='{{id}}_superCompressibilityCompensation' class='form-check-input' type='checkbox'{{#superCompressibilityCompensation}} checked{{/superCompressibilityCompensation}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_temperatureCompensation'>temperatureCompensation: </label><div class='col-sm-8'><input id='{{id}}_temperatureCompensation' class='form-check-input' type='checkbox'{{#temperatureCompensation}} checked{{/temperatureCompensation}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_textMessage'>textMessage: </label><div class='col-sm-8'><input id='{{id}}_textMessage' class='form-check-input' type='checkbox'{{#textMessage}} checked{{/textMessage}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_waterMetering'>waterMetering: </label><div class='col-sm-8'><input id='{{id}}_waterMetering' class='form-check-input' type='checkbox'{{#waterMetering}} checked{{/waterMetering}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "EndDeviceCapability" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_autonomousDst").checked; if (temp) obj.autonomousDst = true;
                temp = document.getElementById (id + "_communication").checked; if (temp) obj.communication = true;
                temp = document.getElementById (id + "_connectDisconnect").checked; if (temp) obj.connectDisconnect = true;
                temp = document.getElementById (id + "_demandResponse").checked; if (temp) obj.demandResponse = true;
                temp = document.getElementById (id + "_electricMetering").checked; if (temp) obj.electricMetering = true;
                temp = document.getElementById (id + "_gasMetering").checked; if (temp) obj.gasMetering = true;
                temp = document.getElementById (id + "_metrology").checked; if (temp) obj.metrology = true;
                temp = document.getElementById (id + "_onRequestRead").checked; if (temp) obj.onRequestRead = true;
                temp = document.getElementById (id + "_outageHistory").checked; if (temp) obj.outageHistory = true;
                temp = document.getElementById (id + "_pressureCompensation").checked; if (temp) obj.pressureCompensation = true;
                temp = document.getElementById (id + "_pricingInfo").checked; if (temp) obj.pricingInfo = true;
                temp = document.getElementById (id + "_pulseOutput").checked; if (temp) obj.pulseOutput = true;
                temp = document.getElementById (id + "_relaysProgramming").checked; if (temp) obj.relaysProgramming = true;
                temp = document.getElementById (id + "_reverseFlow").checked; if (temp) obj.reverseFlow = true;
                temp = document.getElementById (id + "_superCompressibilityCompensation").checked; if (temp) obj.superCompressibilityCompensation = true;
                temp = document.getElementById (id + "_temperatureCompensation").checked; if (temp) obj.temperatureCompensation = true;
                temp = document.getElementById (id + "_textMessage").checked; if (temp) obj.textMessage = true;
                temp = document.getElementById (id + "_waterMetering").checked; if (temp) obj.waterMetering = true;

                return (obj);
            }
        }

        /**
         * End device data.
         *
         */
        class EndDeviceInfo extends Assets.AssetInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.EndDeviceInfo;
                if (null == bucket)
                   cim_data.EndDeviceInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EndDeviceInfo[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Assets.AssetInfo.prototype.parse.call (this, context, sub);
                obj.cls = "EndDeviceInfo";
                base.parse_element (/<cim:EndDeviceInfo.capability>([\s\S]*?)<\/cim:EndDeviceInfo.capability>/g, obj, "capability", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceInfo.isSolidState>([\s\S]*?)<\/cim:EndDeviceInfo.isSolidState>/g, obj, "isSolidState", base.to_boolean, sub, context);
                base.parse_element (/<cim:EndDeviceInfo.phaseCount>([\s\S]*?)<\/cim:EndDeviceInfo.phaseCount>/g, obj, "phaseCount", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceInfo.ratedCurrent>([\s\S]*?)<\/cim:EndDeviceInfo.ratedCurrent>/g, obj, "ratedCurrent", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceInfo.ratedVoltage>([\s\S]*?)<\/cim:EndDeviceInfo.ratedVoltage>/g, obj, "ratedVoltage", base.to_string, sub, context);
                base.parse_attributes (/<cim:EndDeviceInfo.EndDevices\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDevices", sub, context);
                var bucket = context.parsed.EndDeviceInfo;
                if (null == bucket)
                   context.parsed.EndDeviceInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Assets.AssetInfo.prototype.export.call (this, obj, false);

                base.export_element (obj, "EndDeviceInfo", "capability", "capability",  base.from_string, fields);
                base.export_element (obj, "EndDeviceInfo", "isSolidState", "isSolidState",  base.from_boolean, fields);
                base.export_element (obj, "EndDeviceInfo", "phaseCount", "phaseCount",  base.from_string, fields);
                base.export_element (obj, "EndDeviceInfo", "ratedCurrent", "ratedCurrent",  base.from_string, fields);
                base.export_element (obj, "EndDeviceInfo", "ratedVoltage", "ratedVoltage",  base.from_string, fields);
                base.export_attributes (obj, "EndDeviceInfo", "EndDevices", "EndDevices", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EndDeviceInfo_collapse" aria-expanded="true" aria-controls="EndDeviceInfo_collapse" style="margin-left: 10px;">EndDeviceInfo</a></legend>
                    <div id="EndDeviceInfo_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.template.call (this) +
                    `
                    {{#capability}}<div><b>capability</b>: {{capability}}</div>{{/capability}}
                    {{#isSolidState}}<div><b>isSolidState</b>: {{isSolidState}}</div>{{/isSolidState}}
                    {{#phaseCount}}<div><b>phaseCount</b>: {{phaseCount}}</div>{{/phaseCount}}
                    {{#ratedCurrent}}<div><b>ratedCurrent</b>: {{ratedCurrent}}</div>{{/ratedCurrent}}
                    {{#ratedVoltage}}<div><b>ratedVoltage</b>: {{ratedVoltage}}</div>{{/ratedVoltage}}
                    {{#EndDevices}}<div><b>EndDevices</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EndDevices}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.EndDevices) obj.EndDevices_string = obj.EndDevices.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.EndDevices_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_EndDeviceInfo_collapse" aria-expanded="true" aria-controls="{{id}}_EndDeviceInfo_collapse" style="margin-left: 10px;">EndDeviceInfo</a></legend>
                    <div id="{{id}}_EndDeviceInfo_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_capability'>capability: </label><div class='col-sm-8'><input id='{{id}}_capability' class='form-control' type='text'{{#capability}} value='{{capability}}'{{/capability}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_isSolidState'>isSolidState: </label><div class='col-sm-8'><input id='{{id}}_isSolidState' class='form-check-input' type='checkbox'{{#isSolidState}} checked{{/isSolidState}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_phaseCount'>phaseCount: </label><div class='col-sm-8'><input id='{{id}}_phaseCount' class='form-control' type='text'{{#phaseCount}} value='{{phaseCount}}'{{/phaseCount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedCurrent'>ratedCurrent: </label><div class='col-sm-8'><input id='{{id}}_ratedCurrent' class='form-control' type='text'{{#ratedCurrent}} value='{{ratedCurrent}}'{{/ratedCurrent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedVoltage'>ratedVoltage: </label><div class='col-sm-8'><input id='{{id}}_ratedVoltage' class='form-control' type='text'{{#ratedVoltage}} value='{{ratedVoltage}}'{{/ratedVoltage}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "EndDeviceInfo" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_capability").value; if ("" != temp) obj.capability = temp;
                temp = document.getElementById (id + "_isSolidState").checked; if (temp) obj.isSolidState = true;
                temp = document.getElementById (id + "_phaseCount").value; if ("" != temp) obj.phaseCount = temp;
                temp = document.getElementById (id + "_ratedCurrent").value; if ("" != temp) obj.ratedCurrent = temp;
                temp = document.getElementById (id + "_ratedVoltage").value; if ("" != temp) obj.ratedVoltage = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EndDevices", "0..*", "0..1", "EndDevice", "EndDeviceInfo"]
                        ]
                    )
                );
            }
        }

        /**
         * Simple end device function distinguished by 'kind'.
         *
         * Use this class for instances that cannot be represented by another end device function specialisations.
         *
         */
        class SimpleEndDeviceFunction extends EndDeviceFunction
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.SimpleEndDeviceFunction;
                if (null == bucket)
                   cim_data.SimpleEndDeviceFunction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SimpleEndDeviceFunction[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = EndDeviceFunction.prototype.parse.call (this, context, sub);
                obj.cls = "SimpleEndDeviceFunction";
                base.parse_attribute (/<cim:SimpleEndDeviceFunction.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                var bucket = context.parsed.SimpleEndDeviceFunction;
                if (null == bucket)
                   context.parsed.SimpleEndDeviceFunction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = EndDeviceFunction.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "SimpleEndDeviceFunction", "kind", "kind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SimpleEndDeviceFunction_collapse" aria-expanded="true" aria-controls="SimpleEndDeviceFunction_collapse" style="margin-left: 10px;">SimpleEndDeviceFunction</a></legend>
                    <div id="SimpleEndDeviceFunction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EndDeviceFunction.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.EndDeviceFunctionKind = []; if (!obj.kind) obj.EndDeviceFunctionKind.push ({ id: '', selected: true}); for (var property in EndDeviceFunctionKind) obj.EndDeviceFunctionKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.EndDeviceFunctionKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_SimpleEndDeviceFunction_collapse" aria-expanded="true" aria-controls="{{id}}_SimpleEndDeviceFunction_collapse" style="margin-left: 10px;">SimpleEndDeviceFunction</a></legend>
                    <div id="{{id}}_SimpleEndDeviceFunction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EndDeviceFunction.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control'>{{#EndDeviceFunctionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/EndDeviceFunctionKind}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "SimpleEndDeviceFunction" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_kind").value; if ("" != temp) { temp = EndDeviceFunctionKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#EndDeviceFunctionKind." + temp; }

                return (obj);
            }
        }

        /**
         * Communication function of communication equipment or a device such as a meter.
         *
         */
        class ComFunction extends EndDeviceFunction
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ComFunction;
                if (null == bucket)
                   cim_data.ComFunction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ComFunction[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = EndDeviceFunction.prototype.parse.call (this, context, sub);
                obj.cls = "ComFunction";
                base.parse_element (/<cim:ComFunction.amrAddress>([\s\S]*?)<\/cim:ComFunction.amrAddress>/g, obj, "amrAddress", base.to_string, sub, context);
                base.parse_element (/<cim:ComFunction.amrRouter>([\s\S]*?)<\/cim:ComFunction.amrRouter>/g, obj, "amrRouter", base.to_string, sub, context);
                base.parse_attribute (/<cim:ComFunction.direction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "direction", sub, context);
                base.parse_attribute (/<cim:ComFunction.technology\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "technology", sub, context);
                base.parse_attribute (/<cim:ComFunction.ComModule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ComModule", sub, context);
                var bucket = context.parsed.ComFunction;
                if (null == bucket)
                   context.parsed.ComFunction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = EndDeviceFunction.prototype.export.call (this, obj, false);

                base.export_element (obj, "ComFunction", "amrAddress", "amrAddress",  base.from_string, fields);
                base.export_element (obj, "ComFunction", "amrRouter", "amrRouter",  base.from_string, fields);
                base.export_attribute (obj, "ComFunction", "direction", "direction", fields);
                base.export_attribute (obj, "ComFunction", "technology", "technology", fields);
                base.export_attribute (obj, "ComFunction", "ComModule", "ComModule", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ComFunction_collapse" aria-expanded="true" aria-controls="ComFunction_collapse" style="margin-left: 10px;">ComFunction</a></legend>
                    <div id="ComFunction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EndDeviceFunction.prototype.template.call (this) +
                    `
                    {{#amrAddress}}<div><b>amrAddress</b>: {{amrAddress}}</div>{{/amrAddress}}
                    {{#amrRouter}}<div><b>amrRouter</b>: {{amrRouter}}</div>{{/amrRouter}}
                    {{#direction}}<div><b>direction</b>: {{direction}}</div>{{/direction}}
                    {{#technology}}<div><b>technology</b>: {{technology}}</div>{{/technology}}
                    {{#ComModule}}<div><b>ComModule</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ComModule}}&quot;);})'>{{ComModule}}</a></div>{{/ComModule}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ComDirectionKind = []; if (!obj.direction) obj.ComDirectionKind.push ({ id: '', selected: true}); for (var property in ComDirectionKind) obj.ComDirectionKind.push ({ id: property, selected: obj.direction && obj.direction.endsWith ('.' + property)});
                obj.ComTechnologyKind = []; if (!obj.technology) obj.ComTechnologyKind.push ({ id: '', selected: true}); for (var property in ComTechnologyKind) obj.ComTechnologyKind.push ({ id: property, selected: obj.technology && obj.technology.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ComDirectionKind;
                delete obj.ComTechnologyKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_ComFunction_collapse" aria-expanded="true" aria-controls="{{id}}_ComFunction_collapse" style="margin-left: 10px;">ComFunction</a></legend>
                    <div id="{{id}}_ComFunction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EndDeviceFunction.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_amrAddress'>amrAddress: </label><div class='col-sm-8'><input id='{{id}}_amrAddress' class='form-control' type='text'{{#amrAddress}} value='{{amrAddress}}'{{/amrAddress}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_amrRouter'>amrRouter: </label><div class='col-sm-8'><input id='{{id}}_amrRouter' class='form-control' type='text'{{#amrRouter}} value='{{amrRouter}}'{{/amrRouter}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_direction'>direction: </label><div class='col-sm-8'><select id='{{id}}_direction' class='form-control'>{{#ComDirectionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ComDirectionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_technology'>technology: </label><div class='col-sm-8'><select id='{{id}}_technology' class='form-control'>{{#ComTechnologyKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ComTechnologyKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ComModule'>ComModule: </label><div class='col-sm-8'><input id='{{id}}_ComModule' class='form-control' type='text'{{#ComModule}} value='{{ComModule}}'{{/ComModule}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ComFunction" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_amrAddress").value; if ("" != temp) obj.amrAddress = temp;
                temp = document.getElementById (id + "_amrRouter").value; if ("" != temp) obj.amrRouter = temp;
                temp = document.getElementById (id + "_direction").value; if ("" != temp) { temp = ComDirectionKind[temp]; if ("undefined" != typeof (temp)) obj.direction = "#http://iec.ch/TC57/2013/CIM-schema-cim16#ComDirectionKind." + temp; }
                temp = document.getElementById (id + "_technology").value; if ("" != temp) { temp = ComTechnologyKind[temp]; if ("undefined" != typeof (temp)) obj.technology = "#http://iec.ch/TC57/2013/CIM-schema-cim16#ComTechnologyKind." + temp; }
                temp = document.getElementById (id + "_ComModule").value; if ("" != temp) obj.ComModule = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ComModule", "0..1", "0..*", "ComModule", "ComFunctions"]
                        ]
                    )
                );
            }
        }

        /**
         * PAN action/command used to issue the displaying of text messages on PAN devices.
         *
         */
        class PanDisplay extends EndDeviceAction
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PanDisplay;
                if (null == bucket)
                   cim_data.PanDisplay = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PanDisplay[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = EndDeviceAction.prototype.parse.call (this, context, sub);
                obj.cls = "PanDisplay";
                base.parse_element (/<cim:PanDisplay.confirmationRequired>([\s\S]*?)<\/cim:PanDisplay.confirmationRequired>/g, obj, "confirmationRequired", base.to_boolean, sub, context);
                base.parse_element (/<cim:PanDisplay.priority>([\s\S]*?)<\/cim:PanDisplay.priority>/g, obj, "priority", base.to_string, sub, context);
                base.parse_element (/<cim:PanDisplay.textMessage>([\s\S]*?)<\/cim:PanDisplay.textMessage>/g, obj, "textMessage", base.to_string, sub, context);
                base.parse_attribute (/<cim:PanDisplay.transmissionMode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "transmissionMode", sub, context);
                var bucket = context.parsed.PanDisplay;
                if (null == bucket)
                   context.parsed.PanDisplay = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = EndDeviceAction.prototype.export.call (this, obj, false);

                base.export_element (obj, "PanDisplay", "confirmationRequired", "confirmationRequired",  base.from_boolean, fields);
                base.export_element (obj, "PanDisplay", "priority", "priority",  base.from_string, fields);
                base.export_element (obj, "PanDisplay", "textMessage", "textMessage",  base.from_string, fields);
                base.export_attribute (obj, "PanDisplay", "transmissionMode", "transmissionMode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PanDisplay_collapse" aria-expanded="true" aria-controls="PanDisplay_collapse" style="margin-left: 10px;">PanDisplay</a></legend>
                    <div id="PanDisplay_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EndDeviceAction.prototype.template.call (this) +
                    `
                    {{#confirmationRequired}}<div><b>confirmationRequired</b>: {{confirmationRequired}}</div>{{/confirmationRequired}}
                    {{#priority}}<div><b>priority</b>: {{priority}}</div>{{/priority}}
                    {{#textMessage}}<div><b>textMessage</b>: {{textMessage}}</div>{{/textMessage}}
                    {{#transmissionMode}}<div><b>transmissionMode</b>: {{transmissionMode}}</div>{{/transmissionMode}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.TransmissionModeKind = []; if (!obj.transmissionMode) obj.TransmissionModeKind.push ({ id: '', selected: true}); for (var property in TransmissionModeKind) obj.TransmissionModeKind.push ({ id: property, selected: obj.transmissionMode && obj.transmissionMode.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TransmissionModeKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_PanDisplay_collapse" aria-expanded="true" aria-controls="{{id}}_PanDisplay_collapse" style="margin-left: 10px;">PanDisplay</a></legend>
                    <div id="{{id}}_PanDisplay_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EndDeviceAction.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_confirmationRequired'>confirmationRequired: </label><div class='col-sm-8'><input id='{{id}}_confirmationRequired' class='form-check-input' type='checkbox'{{#confirmationRequired}} checked{{/confirmationRequired}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_priority'>priority: </label><div class='col-sm-8'><input id='{{id}}_priority' class='form-control' type='text'{{#priority}} value='{{priority}}'{{/priority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_textMessage'>textMessage: </label><div class='col-sm-8'><input id='{{id}}_textMessage' class='form-control' type='text'{{#textMessage}} value='{{textMessage}}'{{/textMessage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_transmissionMode'>transmissionMode: </label><div class='col-sm-8'><select id='{{id}}_transmissionMode' class='form-control'>{{#TransmissionModeKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/TransmissionModeKind}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PanDisplay" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_confirmationRequired").checked; if (temp) obj.confirmationRequired = true;
                temp = document.getElementById (id + "_priority").value; if ("" != temp) obj.priority = temp;
                temp = document.getElementById (id + "_textMessage").value; if ("" != temp) obj.textMessage = temp;
                temp = document.getElementById (id + "_transmissionMode").value; if ("" != temp) { temp = TransmissionModeKind[temp]; if ("undefined" != typeof (temp)) obj.transmissionMode = "#http://iec.ch/TC57/2013/CIM-schema-cim16#TransmissionModeKind." + temp; }

                return (obj);
            }
        }

        /**
         * PAN control used to issue action/command to PAN devices during a demand response/load control event.
         *
         */
        class PanDemandResponse extends EndDeviceAction
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PanDemandResponse;
                if (null == bucket)
                   cim_data.PanDemandResponse = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PanDemandResponse[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = EndDeviceAction.prototype.parse.call (this, context, sub);
                obj.cls = "PanDemandResponse";
                base.parse_element (/<cim:PanDemandResponse.appliance>([\s\S]*?)<\/cim:PanDemandResponse.appliance>/g, obj, "appliance", base.to_string, sub, context);
                base.parse_element (/<cim:PanDemandResponse.avgLoadAdjustment>([\s\S]*?)<\/cim:PanDemandResponse.avgLoadAdjustment>/g, obj, "avgLoadAdjustment", base.to_string, sub, context);
                base.parse_element (/<cim:PanDemandResponse.cancelControlMode>([\s\S]*?)<\/cim:PanDemandResponse.cancelControlMode>/g, obj, "cancelControlMode", base.to_string, sub, context);
                base.parse_element (/<cim:PanDemandResponse.cancelDateTime>([\s\S]*?)<\/cim:PanDemandResponse.cancelDateTime>/g, obj, "cancelDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:PanDemandResponse.cancelNow>([\s\S]*?)<\/cim:PanDemandResponse.cancelNow>/g, obj, "cancelNow", base.to_boolean, sub, context);
                base.parse_element (/<cim:PanDemandResponse.coolingOffset>([\s\S]*?)<\/cim:PanDemandResponse.coolingOffset>/g, obj, "coolingOffset", base.to_string, sub, context);
                base.parse_element (/<cim:PanDemandResponse.coolingSetpoint>([\s\S]*?)<\/cim:PanDemandResponse.coolingSetpoint>/g, obj, "coolingSetpoint", base.to_string, sub, context);
                base.parse_element (/<cim:PanDemandResponse.criticalityLevel>([\s\S]*?)<\/cim:PanDemandResponse.criticalityLevel>/g, obj, "criticalityLevel", base.to_string, sub, context);
                base.parse_element (/<cim:PanDemandResponse.dutyCycle>([\s\S]*?)<\/cim:PanDemandResponse.dutyCycle>/g, obj, "dutyCycle", base.to_string, sub, context);
                base.parse_element (/<cim:PanDemandResponse.enrollmentGroup>([\s\S]*?)<\/cim:PanDemandResponse.enrollmentGroup>/g, obj, "enrollmentGroup", base.to_string, sub, context);
                base.parse_element (/<cim:PanDemandResponse.heatingOffset>([\s\S]*?)<\/cim:PanDemandResponse.heatingOffset>/g, obj, "heatingOffset", base.to_string, sub, context);
                base.parse_element (/<cim:PanDemandResponse.heatingSetpoint>([\s\S]*?)<\/cim:PanDemandResponse.heatingSetpoint>/g, obj, "heatingSetpoint", base.to_string, sub, context);
                var bucket = context.parsed.PanDemandResponse;
                if (null == bucket)
                   context.parsed.PanDemandResponse = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = EndDeviceAction.prototype.export.call (this, obj, false);

                base.export_element (obj, "PanDemandResponse", "appliance", "appliance",  base.from_string, fields);
                base.export_element (obj, "PanDemandResponse", "avgLoadAdjustment", "avgLoadAdjustment",  base.from_string, fields);
                base.export_element (obj, "PanDemandResponse", "cancelControlMode", "cancelControlMode",  base.from_string, fields);
                base.export_element (obj, "PanDemandResponse", "cancelDateTime", "cancelDateTime",  base.from_datetime, fields);
                base.export_element (obj, "PanDemandResponse", "cancelNow", "cancelNow",  base.from_boolean, fields);
                base.export_element (obj, "PanDemandResponse", "coolingOffset", "coolingOffset",  base.from_string, fields);
                base.export_element (obj, "PanDemandResponse", "coolingSetpoint", "coolingSetpoint",  base.from_string, fields);
                base.export_element (obj, "PanDemandResponse", "criticalityLevel", "criticalityLevel",  base.from_string, fields);
                base.export_element (obj, "PanDemandResponse", "dutyCycle", "dutyCycle",  base.from_string, fields);
                base.export_element (obj, "PanDemandResponse", "enrollmentGroup", "enrollmentGroup",  base.from_string, fields);
                base.export_element (obj, "PanDemandResponse", "heatingOffset", "heatingOffset",  base.from_string, fields);
                base.export_element (obj, "PanDemandResponse", "heatingSetpoint", "heatingSetpoint",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PanDemandResponse_collapse" aria-expanded="true" aria-controls="PanDemandResponse_collapse" style="margin-left: 10px;">PanDemandResponse</a></legend>
                    <div id="PanDemandResponse_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EndDeviceAction.prototype.template.call (this) +
                    `
                    {{#appliance}}<div><b>appliance</b>: {{appliance}}</div>{{/appliance}}
                    {{#avgLoadAdjustment}}<div><b>avgLoadAdjustment</b>: {{avgLoadAdjustment}}</div>{{/avgLoadAdjustment}}
                    {{#cancelControlMode}}<div><b>cancelControlMode</b>: {{cancelControlMode}}</div>{{/cancelControlMode}}
                    {{#cancelDateTime}}<div><b>cancelDateTime</b>: {{cancelDateTime}}</div>{{/cancelDateTime}}
                    {{#cancelNow}}<div><b>cancelNow</b>: {{cancelNow}}</div>{{/cancelNow}}
                    {{#coolingOffset}}<div><b>coolingOffset</b>: {{coolingOffset}}</div>{{/coolingOffset}}
                    {{#coolingSetpoint}}<div><b>coolingSetpoint</b>: {{coolingSetpoint}}</div>{{/coolingSetpoint}}
                    {{#criticalityLevel}}<div><b>criticalityLevel</b>: {{criticalityLevel}}</div>{{/criticalityLevel}}
                    {{#dutyCycle}}<div><b>dutyCycle</b>: {{dutyCycle}}</div>{{/dutyCycle}}
                    {{#enrollmentGroup}}<div><b>enrollmentGroup</b>: {{enrollmentGroup}}</div>{{/enrollmentGroup}}
                    {{#heatingOffset}}<div><b>heatingOffset</b>: {{heatingOffset}}</div>{{/heatingOffset}}
                    {{#heatingSetpoint}}<div><b>heatingSetpoint</b>: {{heatingSetpoint}}</div>{{/heatingSetpoint}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_PanDemandResponse_collapse" aria-expanded="true" aria-controls="{{id}}_PanDemandResponse_collapse" style="margin-left: 10px;">PanDemandResponse</a></legend>
                    <div id="{{id}}_PanDemandResponse_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EndDeviceAction.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_appliance'>appliance: </label><div class='col-sm-8'><input id='{{id}}_appliance' class='form-control' type='text'{{#appliance}} value='{{appliance}}'{{/appliance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_avgLoadAdjustment'>avgLoadAdjustment: </label><div class='col-sm-8'><input id='{{id}}_avgLoadAdjustment' class='form-control' type='text'{{#avgLoadAdjustment}} value='{{avgLoadAdjustment}}'{{/avgLoadAdjustment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cancelControlMode'>cancelControlMode: </label><div class='col-sm-8'><input id='{{id}}_cancelControlMode' class='form-control' type='text'{{#cancelControlMode}} value='{{cancelControlMode}}'{{/cancelControlMode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cancelDateTime'>cancelDateTime: </label><div class='col-sm-8'><input id='{{id}}_cancelDateTime' class='form-control' type='text'{{#cancelDateTime}} value='{{cancelDateTime}}'{{/cancelDateTime}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_cancelNow'>cancelNow: </label><div class='col-sm-8'><input id='{{id}}_cancelNow' class='form-check-input' type='checkbox'{{#cancelNow}} checked{{/cancelNow}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_coolingOffset'>coolingOffset: </label><div class='col-sm-8'><input id='{{id}}_coolingOffset' class='form-control' type='text'{{#coolingOffset}} value='{{coolingOffset}}'{{/coolingOffset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_coolingSetpoint'>coolingSetpoint: </label><div class='col-sm-8'><input id='{{id}}_coolingSetpoint' class='form-control' type='text'{{#coolingSetpoint}} value='{{coolingSetpoint}}'{{/coolingSetpoint}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_criticalityLevel'>criticalityLevel: </label><div class='col-sm-8'><input id='{{id}}_criticalityLevel' class='form-control' type='text'{{#criticalityLevel}} value='{{criticalityLevel}}'{{/criticalityLevel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dutyCycle'>dutyCycle: </label><div class='col-sm-8'><input id='{{id}}_dutyCycle' class='form-control' type='text'{{#dutyCycle}} value='{{dutyCycle}}'{{/dutyCycle}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_enrollmentGroup'>enrollmentGroup: </label><div class='col-sm-8'><input id='{{id}}_enrollmentGroup' class='form-control' type='text'{{#enrollmentGroup}} value='{{enrollmentGroup}}'{{/enrollmentGroup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_heatingOffset'>heatingOffset: </label><div class='col-sm-8'><input id='{{id}}_heatingOffset' class='form-control' type='text'{{#heatingOffset}} value='{{heatingOffset}}'{{/heatingOffset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_heatingSetpoint'>heatingSetpoint: </label><div class='col-sm-8'><input id='{{id}}_heatingSetpoint' class='form-control' type='text'{{#heatingSetpoint}} value='{{heatingSetpoint}}'{{/heatingSetpoint}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PanDemandResponse" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_appliance").value; if ("" != temp) obj.appliance = temp;
                temp = document.getElementById (id + "_avgLoadAdjustment").value; if ("" != temp) obj.avgLoadAdjustment = temp;
                temp = document.getElementById (id + "_cancelControlMode").value; if ("" != temp) obj.cancelControlMode = temp;
                temp = document.getElementById (id + "_cancelDateTime").value; if ("" != temp) obj.cancelDateTime = temp;
                temp = document.getElementById (id + "_cancelNow").checked; if (temp) obj.cancelNow = true;
                temp = document.getElementById (id + "_coolingOffset").value; if ("" != temp) obj.coolingOffset = temp;
                temp = document.getElementById (id + "_coolingSetpoint").value; if ("" != temp) obj.coolingSetpoint = temp;
                temp = document.getElementById (id + "_criticalityLevel").value; if ("" != temp) obj.criticalityLevel = temp;
                temp = document.getElementById (id + "_dutyCycle").value; if ("" != temp) obj.dutyCycle = temp;
                temp = document.getElementById (id + "_enrollmentGroup").value; if ("" != temp) obj.enrollmentGroup = temp;
                temp = document.getElementById (id + "_heatingOffset").value; if ("" != temp) obj.heatingOffset = temp;
                temp = document.getElementById (id + "_heatingSetpoint").value; if ("" != temp) obj.heatingSetpoint = temp;

                return (obj);
            }
        }

        /**
         * PAN action/command used to issue pricing information to a PAN device.
         *
         */
        class PanPricing extends EndDeviceAction
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PanPricing;
                if (null == bucket)
                   cim_data.PanPricing = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PanPricing[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = EndDeviceAction.prototype.parse.call (this, context, sub);
                obj.cls = "PanPricing";
                base.parse_element (/<cim:PanPricing.providerID>([\s\S]*?)<\/cim:PanPricing.providerID>/g, obj, "providerID", base.to_string, sub, context);
                base.parse_attributes (/<cim:PanPricing.PanPricingDetails\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PanPricingDetails", sub, context);
                var bucket = context.parsed.PanPricing;
                if (null == bucket)
                   context.parsed.PanPricing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = EndDeviceAction.prototype.export.call (this, obj, false);

                base.export_element (obj, "PanPricing", "providerID", "providerID",  base.from_string, fields);
                base.export_attributes (obj, "PanPricing", "PanPricingDetails", "PanPricingDetails", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PanPricing_collapse" aria-expanded="true" aria-controls="PanPricing_collapse" style="margin-left: 10px;">PanPricing</a></legend>
                    <div id="PanPricing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EndDeviceAction.prototype.template.call (this) +
                    `
                    {{#providerID}}<div><b>providerID</b>: {{providerID}}</div>{{/providerID}}
                    {{#PanPricingDetails}}<div><b>PanPricingDetails</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/PanPricingDetails}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.PanPricingDetails) obj.PanPricingDetails_string = obj.PanPricingDetails.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.PanPricingDetails_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_PanPricing_collapse" aria-expanded="true" aria-controls="{{id}}_PanPricing_collapse" style="margin-left: 10px;">PanPricing</a></legend>
                    <div id="{{id}}_PanPricing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EndDeviceAction.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_providerID'>providerID: </label><div class='col-sm-8'><input id='{{id}}_providerID' class='form-control' type='text'{{#providerID}} value='{{providerID}}'{{/providerID}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PanPricing" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_providerID").value; if ("" != temp) obj.providerID = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PanPricingDetails", "0..*", "0..1", "PanPricingDetail", "PanPricing"]
                        ]
                    )
                );
            }
        }

        /**
         * Data captured at regular intervals of time.
         *
         * Interval data could be captured as incremental data, absolute data, or relative data. The source for the data is usually a tariff quantity or an engineering quantity. Data is typically captured in time-tagged, uniform, fixed-length intervals of 5 min, 10 min, 15 min, 30 min, or 60 min.
         *
         */
        class IntervalReading extends BaseReading
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.IntervalReading;
                if (null == bucket)
                   cim_data.IntervalReading = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.IntervalReading[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = BaseReading.prototype.parse.call (this, context, sub);
                obj.cls = "IntervalReading";
                base.parse_attributes (/<cim:IntervalReading.IntervalBlocks\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "IntervalBlocks", sub, context);
                var bucket = context.parsed.IntervalReading;
                if (null == bucket)
                   context.parsed.IntervalReading = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = BaseReading.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "IntervalReading", "IntervalBlocks", "IntervalBlocks", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#IntervalReading_collapse" aria-expanded="true" aria-controls="IntervalReading_collapse" style="margin-left: 10px;">IntervalReading</a></legend>
                    <div id="IntervalReading_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + BaseReading.prototype.template.call (this) +
                    `
                    {{#IntervalBlocks}}<div><b>IntervalBlocks</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/IntervalBlocks}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.IntervalBlocks) obj.IntervalBlocks_string = obj.IntervalBlocks.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.IntervalBlocks_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_IntervalReading_collapse" aria-expanded="true" aria-controls="{{id}}_IntervalReading_collapse" style="margin-left: 10px;">IntervalReading</a></legend>
                    <div id="{{id}}_IntervalReading_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + BaseReading.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_IntervalBlocks'>IntervalBlocks: </label><div class='col-sm-8'><input id='{{id}}_IntervalBlocks' class='form-control' type='text'{{#IntervalBlocks}} value='{{IntervalBlocks}}_string'{{/IntervalBlocks}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "IntervalReading" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_IntervalBlocks").value; if ("" != temp) obj.IntervalBlocks = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["IntervalBlocks", "0..*", "0..*", "IntervalBlock", "IntervalReadings"]
                        ]
                    )
                );
            }
        }

        /**
         * Specific value measured by a meter or other asset, or calculated by a system.
         *
         * Each Reading is associated with a specific ReadingType.
         *
         */
        class Reading extends BaseReading
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Reading;
                if (null == bucket)
                   cim_data.Reading = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Reading[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = BaseReading.prototype.parse.call (this, context, sub);
                obj.cls = "Reading";
                base.parse_attribute (/<cim:Reading.reason\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "reason", sub, context);
                base.parse_attribute (/<cim:Reading.ReadingType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReadingType", sub, context);
                base.parse_attributes (/<cim:Reading.MeterReadings\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MeterReadings", sub, context);
                var bucket = context.parsed.Reading;
                if (null == bucket)
                   context.parsed.Reading = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = BaseReading.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Reading", "reason", "reason", fields);
                base.export_attribute (obj, "Reading", "ReadingType", "ReadingType", fields);
                base.export_attributes (obj, "Reading", "MeterReadings", "MeterReadings", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Reading_collapse" aria-expanded="true" aria-controls="Reading_collapse" style="margin-left: 10px;">Reading</a></legend>
                    <div id="Reading_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + BaseReading.prototype.template.call (this) +
                    `
                    {{#reason}}<div><b>reason</b>: {{reason}}</div>{{/reason}}
                    {{#ReadingType}}<div><b>ReadingType</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ReadingType}}&quot;);})'>{{ReadingType}}</a></div>{{/ReadingType}}
                    {{#MeterReadings}}<div><b>MeterReadings</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MeterReadings}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ReadingReasonKind = []; if (!obj.reason) obj.ReadingReasonKind.push ({ id: '', selected: true}); for (var property in ReadingReasonKind) obj.ReadingReasonKind.push ({ id: property, selected: obj.reason && obj.reason.endsWith ('.' + property)});
                if (obj.MeterReadings) obj.MeterReadings_string = obj.MeterReadings.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ReadingReasonKind;
                delete obj.MeterReadings_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Reading_collapse" aria-expanded="true" aria-controls="{{id}}_Reading_collapse" style="margin-left: 10px;">Reading</a></legend>
                    <div id="{{id}}_Reading_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + BaseReading.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_reason'>reason: </label><div class='col-sm-8'><select id='{{id}}_reason' class='form-control'>{{#ReadingReasonKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ReadingReasonKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ReadingType'>ReadingType: </label><div class='col-sm-8'><input id='{{id}}_ReadingType' class='form-control' type='text'{{#ReadingType}} value='{{ReadingType}}'{{/ReadingType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MeterReadings'>MeterReadings: </label><div class='col-sm-8'><input id='{{id}}_MeterReadings' class='form-control' type='text'{{#MeterReadings}} value='{{MeterReadings}}_string'{{/MeterReadings}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Reading" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_reason").value; if ("" != temp) { temp = ReadingReasonKind[temp]; if ("undefined" != typeof (temp)) obj.reason = "#http://iec.ch/TC57/2013/CIM-schema-cim16#ReadingReasonKind." + temp; }
                temp = document.getElementById (id + "_ReadingType").value; if ("" != temp) obj.ReadingType = temp;
                temp = document.getElementById (id + "_MeterReadings").value; if ("" != temp) obj.MeterReadings = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ReadingType", "1", "0..*", "ReadingType", "Readings"],
                            ["MeterReadings", "0..*", "0..*", "MeterReading", "Readings"]
                        ]
                    )
                );
            }
        }

        /**
         * Physical asset that performs the metering role of the usage point.
         *
         * Used for measuring consumption and detection of events.
         *
         */
        class Meter extends EndDevice
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Meter;
                if (null == bucket)
                   cim_data.Meter = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Meter[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = EndDevice.prototype.parse.call (this, context, sub);
                obj.cls = "Meter";
                base.parse_element (/<cim:Meter.formNumber>([\s\S]*?)<\/cim:Meter.formNumber>/g, obj, "formNumber", base.to_string, sub, context);
                base.parse_attributes (/<cim:Meter.MeterServiceWorks\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MeterServiceWorks", sub, context);
                base.parse_attributes (/<cim:Meter.MeterReadings\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MeterReadings", sub, context);
                base.parse_attributes (/<cim:Meter.MeterMultipliers\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MeterMultipliers", sub, context);
                base.parse_attributes (/<cim:Meter.MeterReplacementWorks\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MeterReplacementWorks", sub, context);
                base.parse_attributes (/<cim:Meter.VendingTransactions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "VendingTransactions", sub, context);
                var bucket = context.parsed.Meter;
                if (null == bucket)
                   context.parsed.Meter = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = EndDevice.prototype.export.call (this, obj, false);

                base.export_element (obj, "Meter", "formNumber", "formNumber",  base.from_string, fields);
                base.export_attributes (obj, "Meter", "MeterServiceWorks", "MeterServiceWorks", fields);
                base.export_attributes (obj, "Meter", "MeterReadings", "MeterReadings", fields);
                base.export_attributes (obj, "Meter", "MeterMultipliers", "MeterMultipliers", fields);
                base.export_attributes (obj, "Meter", "MeterReplacementWorks", "MeterReplacementWorks", fields);
                base.export_attributes (obj, "Meter", "VendingTransactions", "VendingTransactions", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Meter_collapse" aria-expanded="true" aria-controls="Meter_collapse" style="margin-left: 10px;">Meter</a></legend>
                    <div id="Meter_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EndDevice.prototype.template.call (this) +
                    `
                    {{#formNumber}}<div><b>formNumber</b>: {{formNumber}}</div>{{/formNumber}}
                    {{#MeterServiceWorks}}<div><b>MeterServiceWorks</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MeterServiceWorks}}
                    {{#MeterReadings}}<div><b>MeterReadings</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MeterReadings}}
                    {{#MeterMultipliers}}<div><b>MeterMultipliers</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MeterMultipliers}}
                    {{#MeterReplacementWorks}}<div><b>MeterReplacementWorks</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MeterReplacementWorks}}
                    {{#VendingTransactions}}<div><b>VendingTransactions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/VendingTransactions}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.MeterServiceWorks) obj.MeterServiceWorks_string = obj.MeterServiceWorks.join ();
                if (obj.MeterReadings) obj.MeterReadings_string = obj.MeterReadings.join ();
                if (obj.MeterMultipliers) obj.MeterMultipliers_string = obj.MeterMultipliers.join ();
                if (obj.MeterReplacementWorks) obj.MeterReplacementWorks_string = obj.MeterReplacementWorks.join ();
                if (obj.VendingTransactions) obj.VendingTransactions_string = obj.VendingTransactions.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.MeterServiceWorks_string;
                delete obj.MeterReadings_string;
                delete obj.MeterMultipliers_string;
                delete obj.MeterReplacementWorks_string;
                delete obj.VendingTransactions_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Meter_collapse" aria-expanded="true" aria-controls="{{id}}_Meter_collapse" style="margin-left: 10px;">Meter</a></legend>
                    <div id="{{id}}_Meter_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EndDevice.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_formNumber'>formNumber: </label><div class='col-sm-8'><input id='{{id}}_formNumber' class='form-control' type='text'{{#formNumber}} value='{{formNumber}}'{{/formNumber}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Meter" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_formNumber").value; if ("" != temp) obj.formNumber = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MeterServiceWorks", "0..*", "0..1", "MeterServiceWork", "Meter"],
                            ["MeterReadings", "0..*", "0..1", "MeterReading", "Meter"],
                            ["MeterMultipliers", "0..*", "0..1", "MeterMultiplier", "Meter"],
                            ["MeterReplacementWorks", "0..*", "0..1", "MeterServiceWork", "OldMeter"],
                            ["VendingTransactions", "0..*", "0..1", "Transaction", "Meter"]
                        ]
                    )
                );
            }
        }

        return (
            {
                PanPricingDetail: PanPricingDetail,
                EndDeviceEvent: EndDeviceEvent,
                EndDevice: EndDevice,
                PanDisplay: PanDisplay,
                ReadingInterharmonic: ReadingInterharmonic,
                ComFunction: ComFunction,
                EndDeviceTiming: EndDeviceTiming,
                SimpleEndDeviceFunction: SimpleEndDeviceFunction,
                EndDeviceControlType: EndDeviceControlType,
                MetrologyRequirement: MetrologyRequirement,
                ReadingQuality: ReadingQuality,
                UsagePoint: UsagePoint,
                MeterMultiplier: MeterMultiplier,
                EndDeviceFunction: EndDeviceFunction,
                RationalNumber: RationalNumber,
                BaseReading: BaseReading,
                DemandResponseProgram: DemandResponseProgram,
                ReadingQualityType: ReadingQualityType,
                EndDeviceCapability: EndDeviceCapability,
                EndDeviceInfo: EndDeviceInfo,
                IntervalBlock: IntervalBlock,
                EndDeviceGroup: EndDeviceGroup,
                PanDemandResponse: PanDemandResponse,
                ComModule: ComModule,
                EndDeviceEventDetail: EndDeviceEventDetail,
                UsagePointGroup: UsagePointGroup,
                UsagePointLocation: UsagePointLocation,
                IntervalReading: IntervalReading,
                EndDeviceControl: EndDeviceControl,
                Register: Register,
                ControlledAppliance: ControlledAppliance,
                ServiceMultiplier: ServiceMultiplier,
                Channel: Channel,
                ReadingType: ReadingType,
                EndDeviceAction: EndDeviceAction,
                PendingCalculation: PendingCalculation,
                Meter: Meter,
                EndDeviceEventType: EndDeviceEventType,
                PanPricing: PanPricing,
                MeterReading: MeterReading,
                Reading: Reading,
                MeterServiceWork: MeterServiceWork
            }
        );
    }
);