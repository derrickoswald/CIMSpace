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
                this._id = template.id;
                var bucket = cim_data.DemandResponseProgram;
                if (null == bucket)
                   cim_data.DemandResponseProgram = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DemandResponseProgram[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "DemandResponseProgram";
                base.parse_element (/<cim:DemandResponseProgram.type>([\s\S]*?)<\/cim:DemandResponseProgram.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_element (/<cim:DemandResponseProgram.validityInterval>([\s\S]*?)<\/cim:DemandResponseProgram.validityInterval>/g, obj, "validityInterval", base.to_string, sub, context);

                var bucket = context.parsed.DemandResponseProgram;
                if (null == bucket)
                   context.parsed.DemandResponseProgram = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "DemandResponseProgram", "type", base.from_string, fields);
                base.export_element (obj, "DemandResponseProgram", "validityInterval", base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DemandResponseProgram_collapse" aria-expanded="true" aria-controls="DemandResponseProgram_collapse" style="margin-left: 10px;">DemandResponseProgram</a></legend>
                    <div id="DemandResponseProgram_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='type'>type: </label><div class='col-sm-8'><input id='type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='validityInterval'>validityInterval: </label><div class='col-sm-8'><input id='validityInterval' class='form-control' type='text'{{#validityInterval}} value='{{validityInterval}}'{{/validityInterval}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.EndDeviceGroup;
                if (null == bucket)
                   cim_data.EndDeviceGroup = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EndDeviceGroup[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "EndDeviceGroup";
                base.parse_element (/<cim:EndDeviceGroup.type>([\s\S]*?)<\/cim:EndDeviceGroup.type>/g, obj, "type", base.to_string, sub, context);

                var bucket = context.parsed.EndDeviceGroup;
                if (null == bucket)
                   context.parsed.EndDeviceGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "EndDeviceGroup", "type", base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EndDeviceGroup_collapse" aria-expanded="true" aria-controls="EndDeviceGroup_collapse" style="margin-left: 10px;">EndDeviceGroup</a></legend>
                    <div id="EndDeviceGroup_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='type'>type: </label><div class='col-sm-8'><input id='type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.ControlledAppliance;
                if (null == bucket)
                   cim_data.ControlledAppliance = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ControlledAppliance[this._id];
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

                base.export_element (obj, "ControlledAppliance", "isElectricVehicle", base.from_boolean, fields);
                base.export_element (obj, "ControlledAppliance", "isExteriorLighting", base.from_boolean, fields);
                base.export_element (obj, "ControlledAppliance", "isGenerationSystem", base.from_boolean, fields);
                base.export_element (obj, "ControlledAppliance", "isHvacCompressorOrFurnace", base.from_boolean, fields);
                base.export_element (obj, "ControlledAppliance", "isInteriorLighting", base.from_boolean, fields);
                base.export_element (obj, "ControlledAppliance", "isIrrigationPump", base.from_boolean, fields);
                base.export_element (obj, "ControlledAppliance", "isManagedCommercialIndustrialLoad", base.from_boolean, fields);
                base.export_element (obj, "ControlledAppliance", "isPoolPumpSpaJacuzzi", base.from_boolean, fields);
                base.export_element (obj, "ControlledAppliance", "isSimpleMiscLoad", base.from_boolean, fields);
                base.export_element (obj, "ControlledAppliance", "isSmartAppliance", base.from_boolean, fields);
                base.export_element (obj, "ControlledAppliance", "isStripAndBaseboardHeater", base.from_boolean, fields);
                base.export_element (obj, "ControlledAppliance", "isWaterHeater", base.from_boolean, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ControlledAppliance_collapse" aria-expanded="true" aria-controls="ControlledAppliance_collapse" style="margin-left: 10px;">ControlledAppliance</a></legend>
                    <div id="ControlledAppliance_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isElectricVehicle'>isElectricVehicle: </label><div class='col-sm-8'><input id='isElectricVehicle' class='form-check-input' type='checkbox'{{#isElectricVehicle}} checked{{/isElectricVehicle}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isExteriorLighting'>isExteriorLighting: </label><div class='col-sm-8'><input id='isExteriorLighting' class='form-check-input' type='checkbox'{{#isExteriorLighting}} checked{{/isExteriorLighting}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isGenerationSystem'>isGenerationSystem: </label><div class='col-sm-8'><input id='isGenerationSystem' class='form-check-input' type='checkbox'{{#isGenerationSystem}} checked{{/isGenerationSystem}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isHvacCompressorOrFurnace'>isHvacCompressorOrFurnace: </label><div class='col-sm-8'><input id='isHvacCompressorOrFurnace' class='form-check-input' type='checkbox'{{#isHvacCompressorOrFurnace}} checked{{/isHvacCompressorOrFurnace}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isInteriorLighting'>isInteriorLighting: </label><div class='col-sm-8'><input id='isInteriorLighting' class='form-check-input' type='checkbox'{{#isInteriorLighting}} checked{{/isInteriorLighting}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isIrrigationPump'>isIrrigationPump: </label><div class='col-sm-8'><input id='isIrrigationPump' class='form-check-input' type='checkbox'{{#isIrrigationPump}} checked{{/isIrrigationPump}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isManagedCommercialIndustrialLoad'>isManagedCommercialIndustrialLoad: </label><div class='col-sm-8'><input id='isManagedCommercialIndustrialLoad' class='form-check-input' type='checkbox'{{#isManagedCommercialIndustrialLoad}} checked{{/isManagedCommercialIndustrialLoad}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isPoolPumpSpaJacuzzi'>isPoolPumpSpaJacuzzi: </label><div class='col-sm-8'><input id='isPoolPumpSpaJacuzzi' class='form-check-input' type='checkbox'{{#isPoolPumpSpaJacuzzi}} checked{{/isPoolPumpSpaJacuzzi}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isSimpleMiscLoad'>isSimpleMiscLoad: </label><div class='col-sm-8'><input id='isSimpleMiscLoad' class='form-check-input' type='checkbox'{{#isSimpleMiscLoad}} checked{{/isSimpleMiscLoad}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isSmartAppliance'>isSmartAppliance: </label><div class='col-sm-8'><input id='isSmartAppliance' class='form-check-input' type='checkbox'{{#isSmartAppliance}} checked{{/isSmartAppliance}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isStripAndBaseboardHeater'>isStripAndBaseboardHeater: </label><div class='col-sm-8'><input id='isStripAndBaseboardHeater' class='form-check-input' type='checkbox'{{#isStripAndBaseboardHeater}} checked{{/isStripAndBaseboardHeater}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isWaterHeater'>isWaterHeater: </label><div class='col-sm-8'><input id='isWaterHeater' class='form-check-input' type='checkbox'{{#isWaterHeater}} checked{{/isWaterHeater}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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
                this._id = template.id;
                var bucket = cim_data.Register;
                if (null == bucket)
                   cim_data.Register = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Register[this._id];
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

                var bucket = context.parsed.Register;
                if (null == bucket)
                   context.parsed.Register = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Register", "isVirtual", base.from_boolean, fields);
                base.export_element (obj, "Register", "leftDigitCount", base.from_string, fields);
                base.export_element (obj, "Register", "rightDigitCount", base.from_string, fields);
                base.export_element (obj, "Register", "touTier", base.from_string, fields);
                base.export_element (obj, "Register", "touTierName", base.from_string, fields);
                base.export_attribute (obj, "Register", "EndDeviceFunction", fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Register_collapse" aria-expanded="true" aria-controls="Register_collapse" style="margin-left: 10px;">Register</a></legend>
                    <div id="Register_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isVirtual'>isVirtual: </label><div class='col-sm-8'><input id='isVirtual' class='form-check-input' type='checkbox'{{#isVirtual}} checked{{/isVirtual}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='leftDigitCount'>leftDigitCount: </label><div class='col-sm-8'><input id='leftDigitCount' class='form-control' type='text'{{#leftDigitCount}} value='{{leftDigitCount}}'{{/leftDigitCount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rightDigitCount'>rightDigitCount: </label><div class='col-sm-8'><input id='rightDigitCount' class='form-control' type='text'{{#rightDigitCount}} value='{{rightDigitCount}}'{{/rightDigitCount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='touTier'>touTier: </label><div class='col-sm-8'><input id='touTier' class='form-control' type='text'{{#touTier}} value='{{touTier}}'{{/touTier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='touTierName'>touTierName: </label><div class='col-sm-8'><input id='touTierName' class='form-control' type='text'{{#touTierName}} value='{{touTierName}}'{{/touTierName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='EndDeviceFunction'>EndDeviceFunction: </label><div class='col-sm-8'><input id='EndDeviceFunction' class='form-control' type='text'{{#EndDeviceFunction}} value='{{EndDeviceFunction}}'{{/EndDeviceFunction}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.EndDeviceControl;
                if (null == bucket)
                   cim_data.EndDeviceControl = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EndDeviceControl[this._id];
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
                base.parse_attribute (/<cim:EndDeviceControl.EndDeviceControlType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceControlType", sub, context);
                base.parse_attribute (/<cim:EndDeviceControl.EndDeviceAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceAction", sub, context);

                var bucket = context.parsed.EndDeviceControl;
                if (null == bucket)
                   context.parsed.EndDeviceControl = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "EndDeviceControl", "drProgramLevel", base.from_string, fields);
                base.export_element (obj, "EndDeviceControl", "drProgramMandatory", base.from_boolean, fields);
                base.export_element (obj, "EndDeviceControl", "issuerID", base.from_string, fields);
                base.export_element (obj, "EndDeviceControl", "issuerTrackingID", base.from_string, fields);
                base.export_element (obj, "EndDeviceControl", "priceSignal", base.from_string, fields);
                base.export_element (obj, "EndDeviceControl", "primaryDeviceTiming", base.from_string, fields);
                base.export_element (obj, "EndDeviceControl", "reason", base.from_string, fields);
                base.export_element (obj, "EndDeviceControl", "scheduledInterval", base.from_string, fields);
                base.export_element (obj, "EndDeviceControl", "secondaryDeviceTiming", base.from_string, fields);
                base.export_attribute (obj, "EndDeviceControl", "EndDeviceControlType", fields);
                base.export_attribute (obj, "EndDeviceControl", "EndDeviceAction", fields);
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
                    {{#EndDeviceControlType}}<div><b>EndDeviceControlType</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EndDeviceControlType}}&quot;);})'>{{EndDeviceControlType}}</a></div>{{/EndDeviceControlType}}
                    {{#EndDeviceAction}}<div><b>EndDeviceAction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EndDeviceAction}}&quot;);})'>{{EndDeviceAction}}</a></div>{{/EndDeviceAction}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EndDeviceControl_collapse" aria-expanded="true" aria-controls="EndDeviceControl_collapse" style="margin-left: 10px;">EndDeviceControl</a></legend>
                    <div id="EndDeviceControl_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='drProgramLevel'>drProgramLevel: </label><div class='col-sm-8'><input id='drProgramLevel' class='form-control' type='text'{{#drProgramLevel}} value='{{drProgramLevel}}'{{/drProgramLevel}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='drProgramMandatory'>drProgramMandatory: </label><div class='col-sm-8'><input id='drProgramMandatory' class='form-check-input' type='checkbox'{{#drProgramMandatory}} checked{{/drProgramMandatory}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='issuerID'>issuerID: </label><div class='col-sm-8'><input id='issuerID' class='form-control' type='text'{{#issuerID}} value='{{issuerID}}'{{/issuerID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='issuerTrackingID'>issuerTrackingID: </label><div class='col-sm-8'><input id='issuerTrackingID' class='form-control' type='text'{{#issuerTrackingID}} value='{{issuerTrackingID}}'{{/issuerTrackingID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='priceSignal'>priceSignal: </label><div class='col-sm-8'><input id='priceSignal' class='form-control' type='text'{{#priceSignal}} value='{{priceSignal}}'{{/priceSignal}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='primaryDeviceTiming'>primaryDeviceTiming: </label><div class='col-sm-8'><input id='primaryDeviceTiming' class='form-control' type='text'{{#primaryDeviceTiming}} value='{{primaryDeviceTiming}}'{{/primaryDeviceTiming}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='reason'>reason: </label><div class='col-sm-8'><input id='reason' class='form-control' type='text'{{#reason}} value='{{reason}}'{{/reason}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='scheduledInterval'>scheduledInterval: </label><div class='col-sm-8'><input id='scheduledInterval' class='form-control' type='text'{{#scheduledInterval}} value='{{scheduledInterval}}'{{/scheduledInterval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='secondaryDeviceTiming'>secondaryDeviceTiming: </label><div class='col-sm-8'><input id='secondaryDeviceTiming' class='form-control' type='text'{{#secondaryDeviceTiming}} value='{{secondaryDeviceTiming}}'{{/secondaryDeviceTiming}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='EndDeviceControlType'>EndDeviceControlType: </label><div class='col-sm-8'><input id='EndDeviceControlType' class='form-control' type='text'{{#EndDeviceControlType}} value='{{EndDeviceControlType}}'{{/EndDeviceControlType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='EndDeviceAction'>EndDeviceAction: </label><div class='col-sm-8'><input id='EndDeviceAction' class='form-control' type='text'{{#EndDeviceAction}} value='{{EndDeviceAction}}'{{/EndDeviceAction}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.PanPricingDetail;
                if (null == bucket)
                   cim_data.PanPricingDetail = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PanPricingDetail[this._id];
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

                base.export_element (obj, "PanPricingDetail", "alternateCostDelivered", base.from_float, fields);
                base.export_element (obj, "PanPricingDetail", "alternateCostUnit", base.from_string, fields);
                base.export_element (obj, "PanPricingDetail", "currentTimeDate", base.from_datetime, fields);
                base.export_element (obj, "PanPricingDetail", "generationPrice", base.from_string, fields);
                base.export_element (obj, "PanPricingDetail", "generationPriceRatio", base.from_float, fields);
                base.export_element (obj, "PanPricingDetail", "price", base.from_string, fields);
                base.export_element (obj, "PanPricingDetail", "priceRatio", base.from_float, fields);
                base.export_element (obj, "PanPricingDetail", "priceTier", base.from_string, fields);
                base.export_element (obj, "PanPricingDetail", "priceTierCount", base.from_string, fields);
                base.export_element (obj, "PanPricingDetail", "priceTierLabel", base.from_string, fields);
                base.export_element (obj, "PanPricingDetail", "rateLabel", base.from_string, fields);
                base.export_element (obj, "PanPricingDetail", "registerTier", base.from_string, fields);
                base.export_element (obj, "PanPricingDetail", "unitOfMeasure", base.from_string, fields);
                base.export_attribute (obj, "PanPricingDetail", "PanPricing", fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PanPricingDetail_collapse" aria-expanded="true" aria-controls="PanPricingDetail_collapse" style="margin-left: 10px;">PanPricingDetail</a></legend>
                    <div id="PanPricingDetail_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='alternateCostDelivered'>alternateCostDelivered: </label><div class='col-sm-8'><input id='alternateCostDelivered' class='form-control' type='text'{{#alternateCostDelivered}} value='{{alternateCostDelivered}}'{{/alternateCostDelivered}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='alternateCostUnit'>alternateCostUnit: </label><div class='col-sm-8'><input id='alternateCostUnit' class='form-control' type='text'{{#alternateCostUnit}} value='{{alternateCostUnit}}'{{/alternateCostUnit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='currentTimeDate'>currentTimeDate: </label><div class='col-sm-8'><input id='currentTimeDate' class='form-control' type='text'{{#currentTimeDate}} value='{{currentTimeDate}}'{{/currentTimeDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='generationPrice'>generationPrice: </label><div class='col-sm-8'><input id='generationPrice' class='form-control' type='text'{{#generationPrice}} value='{{generationPrice}}'{{/generationPrice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='generationPriceRatio'>generationPriceRatio: </label><div class='col-sm-8'><input id='generationPriceRatio' class='form-control' type='text'{{#generationPriceRatio}} value='{{generationPriceRatio}}'{{/generationPriceRatio}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='price'>price: </label><div class='col-sm-8'><input id='price' class='form-control' type='text'{{#price}} value='{{price}}'{{/price}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='priceRatio'>priceRatio: </label><div class='col-sm-8'><input id='priceRatio' class='form-control' type='text'{{#priceRatio}} value='{{priceRatio}}'{{/priceRatio}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='priceTier'>priceTier: </label><div class='col-sm-8'><input id='priceTier' class='form-control' type='text'{{#priceTier}} value='{{priceTier}}'{{/priceTier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='priceTierCount'>priceTierCount: </label><div class='col-sm-8'><input id='priceTierCount' class='form-control' type='text'{{#priceTierCount}} value='{{priceTierCount}}'{{/priceTierCount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='priceTierLabel'>priceTierLabel: </label><div class='col-sm-8'><input id='priceTierLabel' class='form-control' type='text'{{#priceTierLabel}} value='{{priceTierLabel}}'{{/priceTierLabel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rateLabel'>rateLabel: </label><div class='col-sm-8'><input id='rateLabel' class='form-control' type='text'{{#rateLabel}} value='{{rateLabel}}'{{/rateLabel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='registerTier'>registerTier: </label><div class='col-sm-8'><input id='registerTier' class='form-control' type='text'{{#registerTier}} value='{{registerTier}}'{{/registerTier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='unitOfMeasure'>unitOfMeasure: </label><div class='col-sm-8'><input id='unitOfMeasure' class='form-control' type='text'{{#unitOfMeasure}} value='{{unitOfMeasure}}'{{/unitOfMeasure}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='PanPricing'>PanPricing: </label><div class='col-sm-8'><input id='PanPricing' class='form-control' type='text'{{#PanPricing}} value='{{PanPricing}}'{{/PanPricing}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.UsagePoint;
                if (null == bucket)
                   cim_data.UsagePoint = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.UsagePoint[this._id];
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
                base.parse_attribute (/<cim:UsagePoint.CustomerAgreement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAgreement", sub, context);
                base.parse_attribute (/<cim:UsagePoint.ServiceSupplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ServiceSupplier", sub, context);
                base.parse_attribute (/<cim:UsagePoint.UsagePointLocation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UsagePointLocation", sub, context);
                base.parse_attribute (/<cim:UsagePoint.ServiceCategory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ServiceCategory", sub, context);
                base.parse_attribute (/<cim:UsagePoint.ServiceLocation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ServiceLocation", sub, context);

                var bucket = context.parsed.UsagePoint;
                if (null == bucket)
                   context.parsed.UsagePoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "UsagePoint", "amiBillingReady", base.from_string, fields);
                base.export_element (obj, "UsagePoint", "checkBilling", base.from_boolean, fields);
                base.export_element (obj, "UsagePoint", "connectionState", base.from_string, fields);
                base.export_element (obj, "UsagePoint", "estimatedLoad", base.from_string, fields);
                base.export_element (obj, "UsagePoint", "grounded", base.from_boolean, fields);
                base.export_element (obj, "UsagePoint", "isSdp", base.from_boolean, fields);
                base.export_element (obj, "UsagePoint", "isVirtual", base.from_boolean, fields);
                base.export_element (obj, "UsagePoint", "minimalUsageExpected", base.from_boolean, fields);
                base.export_element (obj, "UsagePoint", "nominalServiceVoltage", base.from_string, fields);
                base.export_element (obj, "UsagePoint", "outageRegion", base.from_string, fields);
                base.export_element (obj, "UsagePoint", "phaseCode", base.from_string, fields);
                base.export_element (obj, "UsagePoint", "ratedCurrent", base.from_string, fields);
                base.export_element (obj, "UsagePoint", "ratedPower", base.from_string, fields);
                base.export_element (obj, "UsagePoint", "readCycle", base.from_string, fields);
                base.export_element (obj, "UsagePoint", "readRoute", base.from_string, fields);
                base.export_element (obj, "UsagePoint", "serviceDeliveryRemark", base.from_string, fields);
                base.export_element (obj, "UsagePoint", "servicePriority", base.from_string, fields);
                base.export_attribute (obj, "UsagePoint", "CustomerAgreement", fields);
                base.export_attribute (obj, "UsagePoint", "ServiceSupplier", fields);
                base.export_attribute (obj, "UsagePoint", "UsagePointLocation", fields);
                base.export_attribute (obj, "UsagePoint", "ServiceCategory", fields);
                base.export_attribute (obj, "UsagePoint", "ServiceLocation", fields);
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
                    {{#UsagePointLocation}}<div><b>UsagePointLocation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{UsagePointLocation}}&quot;);})'>{{UsagePointLocation}}</a></div>{{/UsagePointLocation}}
                    {{#ServiceCategory}}<div><b>ServiceCategory</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ServiceCategory}}&quot;);})'>{{ServiceCategory}}</a></div>{{/ServiceCategory}}
                    {{#CustomerAgreement}}<div><b>CustomerAgreement</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CustomerAgreement}}&quot;);})'>{{CustomerAgreement}}</a></div>{{/CustomerAgreement}}
                    {{#ServiceLocation}}<div><b>ServiceLocation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ServiceLocation}}&quot;);})'>{{ServiceLocation}}</a></div>{{/ServiceLocation}}
                    {{#ServiceSupplier}}<div><b>ServiceSupplier</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ServiceSupplier}}&quot;);})'>{{ServiceSupplier}}</a></div>{{/ServiceSupplier}}
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
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.AmiBillingReadyKind;
                delete obj.UsagePointConnectedKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#UsagePoint_collapse" aria-expanded="true" aria-controls="UsagePoint_collapse" style="margin-left: 10px;">UsagePoint</a></legend>
                    <div id="UsagePoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='amiBillingReady'>amiBillingReady: </label><div class='col-sm-8'><select id='amiBillingReady' class='form-control'>{{#AmiBillingReadyKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/AmiBillingReadyKind}}</select></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='checkBilling'>checkBilling: </label><div class='col-sm-8'><input id='checkBilling' class='form-check-input' type='checkbox'{{#checkBilling}} checked{{/checkBilling}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='connectionState'>connectionState: </label><div class='col-sm-8'><select id='connectionState' class='form-control'>{{#UsagePointConnectedKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UsagePointConnectedKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='estimatedLoad'>estimatedLoad: </label><div class='col-sm-8'><input id='estimatedLoad' class='form-control' type='text'{{#estimatedLoad}} value='{{estimatedLoad}}'{{/estimatedLoad}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='grounded'>grounded: </label><div class='col-sm-8'><input id='grounded' class='form-check-input' type='checkbox'{{#grounded}} checked{{/grounded}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isSdp'>isSdp: </label><div class='col-sm-8'><input id='isSdp' class='form-check-input' type='checkbox'{{#isSdp}} checked{{/isSdp}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isVirtual'>isVirtual: </label><div class='col-sm-8'><input id='isVirtual' class='form-check-input' type='checkbox'{{#isVirtual}} checked{{/isVirtual}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='minimalUsageExpected'>minimalUsageExpected: </label><div class='col-sm-8'><input id='minimalUsageExpected' class='form-check-input' type='checkbox'{{#minimalUsageExpected}} checked{{/minimalUsageExpected}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='nominalServiceVoltage'>nominalServiceVoltage: </label><div class='col-sm-8'><input id='nominalServiceVoltage' class='form-control' type='text'{{#nominalServiceVoltage}} value='{{nominalServiceVoltage}}'{{/nominalServiceVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='outageRegion'>outageRegion: </label><div class='col-sm-8'><input id='outageRegion' class='form-control' type='text'{{#outageRegion}} value='{{outageRegion}}'{{/outageRegion}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='phaseCode'>phaseCode: </label><div class='col-sm-8'><input id='phaseCode' class='form-control' type='text'{{#phaseCode}} value='{{phaseCode}}'{{/phaseCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ratedCurrent'>ratedCurrent: </label><div class='col-sm-8'><input id='ratedCurrent' class='form-control' type='text'{{#ratedCurrent}} value='{{ratedCurrent}}'{{/ratedCurrent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ratedPower'>ratedPower: </label><div class='col-sm-8'><input id='ratedPower' class='form-control' type='text'{{#ratedPower}} value='{{ratedPower}}'{{/ratedPower}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='readCycle'>readCycle: </label><div class='col-sm-8'><input id='readCycle' class='form-control' type='text'{{#readCycle}} value='{{readCycle}}'{{/readCycle}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='readRoute'>readRoute: </label><div class='col-sm-8'><input id='readRoute' class='form-control' type='text'{{#readRoute}} value='{{readRoute}}'{{/readRoute}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='serviceDeliveryRemark'>serviceDeliveryRemark: </label><div class='col-sm-8'><input id='serviceDeliveryRemark' class='form-control' type='text'{{#serviceDeliveryRemark}} value='{{serviceDeliveryRemark}}'{{/serviceDeliveryRemark}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='servicePriority'>servicePriority: </label><div class='col-sm-8'><input id='servicePriority' class='form-control' type='text'{{#servicePriority}} value='{{servicePriority}}'{{/servicePriority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='UsagePointLocation'>UsagePointLocation: </label><div class='col-sm-8'><input id='UsagePointLocation' class='form-control' type='text'{{#UsagePointLocation}} value='{{UsagePointLocation}}'{{/UsagePointLocation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ServiceCategory'>ServiceCategory: </label><div class='col-sm-8'><input id='ServiceCategory' class='form-control' type='text'{{#ServiceCategory}} value='{{ServiceCategory}}'{{/ServiceCategory}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CustomerAgreement'>CustomerAgreement: </label><div class='col-sm-8'><input id='CustomerAgreement' class='form-control' type='text'{{#CustomerAgreement}} value='{{CustomerAgreement}}'{{/CustomerAgreement}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ServiceLocation'>ServiceLocation: </label><div class='col-sm-8'><input id='ServiceLocation' class='form-control' type='text'{{#ServiceLocation}} value='{{ServiceLocation}}'{{/ServiceLocation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ServiceSupplier'>ServiceSupplier: </label><div class='col-sm-8'><input id='ServiceSupplier' class='form-control' type='text'{{#ServiceSupplier}} value='{{ServiceSupplier}}'{{/ServiceSupplier}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.RationalNumber;
                if (null == bucket)
                   cim_data.RationalNumber = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RationalNumber[this._id];
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

                base.export_element (obj, "RationalNumber", "denominator", base.from_string, fields);
                base.export_element (obj, "RationalNumber", "numerator", base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RationalNumber_collapse" aria-expanded="true" aria-controls="RationalNumber_collapse" style="margin-left: 10px;">RationalNumber</a></legend>
                    <div id="RationalNumber_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='denominator'>denominator: </label><div class='col-sm-8'><input id='denominator' class='form-control' type='text'{{#denominator}} value='{{denominator}}'{{/denominator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='numerator'>numerator: </label><div class='col-sm-8'><input id='numerator' class='form-control' type='text'{{#numerator}} value='{{numerator}}'{{/numerator}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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
                this._id = template.id;
                var bucket = cim_data.EndDeviceEventDetail;
                if (null == bucket)
                   cim_data.EndDeviceEventDetail = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EndDeviceEventDetail[this._id];
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

                base.export_element (obj, "EndDeviceEventDetail", "name", base.from_string, fields);
                base.export_element (obj, "EndDeviceEventDetail", "value", base.from_string, fields);
                base.export_attribute (obj, "EndDeviceEventDetail", "EndDeviceEvent", fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EndDeviceEventDetail_collapse" aria-expanded="true" aria-controls="EndDeviceEventDetail_collapse" style="margin-left: 10px;">EndDeviceEventDetail</a></legend>
                    <div id="EndDeviceEventDetail_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='name'>name: </label><div class='col-sm-8'><input id='name' class='form-control' type='text'{{#name}} value='{{name}}'{{/name}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value'>value: </label><div class='col-sm-8'><input id='value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='EndDeviceEvent'>EndDeviceEvent: </label><div class='col-sm-8'><input id='EndDeviceEvent' class='form-control' type='text'{{#EndDeviceEvent}} value='{{EndDeviceEvent}}'{{/EndDeviceEvent}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.MeterReading;
                if (null == bucket)
                   cim_data.MeterReading = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MeterReading[this._id];
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
                base.parse_attribute (/<cim:MeterReading.CustomerAgreement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAgreement", sub, context);

                var bucket = context.parsed.MeterReading;
                if (null == bucket)
                   context.parsed.MeterReading = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "MeterReading", "isCoincidentTrigger", base.from_boolean, fields);
                base.export_element (obj, "MeterReading", "valuesInterval", base.from_string, fields);
                base.export_attribute (obj, "MeterReading", "UsagePoint", fields);
                base.export_attribute (obj, "MeterReading", "Meter", fields);
                base.export_attribute (obj, "MeterReading", "CustomerAgreement", fields);
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
                    {{#CustomerAgreement}}<div><b>CustomerAgreement</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CustomerAgreement}}&quot;);})'>{{CustomerAgreement}}</a></div>{{/CustomerAgreement}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MeterReading_collapse" aria-expanded="true" aria-controls="MeterReading_collapse" style="margin-left: 10px;">MeterReading</a></legend>
                    <div id="MeterReading_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isCoincidentTrigger'>isCoincidentTrigger: </label><div class='col-sm-8'><input id='isCoincidentTrigger' class='form-check-input' type='checkbox'{{#isCoincidentTrigger}} checked{{/isCoincidentTrigger}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='valuesInterval'>valuesInterval: </label><div class='col-sm-8'><input id='valuesInterval' class='form-control' type='text'{{#valuesInterval}} value='{{valuesInterval}}'{{/valuesInterval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='UsagePoint'>UsagePoint: </label><div class='col-sm-8'><input id='UsagePoint' class='form-control' type='text'{{#UsagePoint}} value='{{UsagePoint}}'{{/UsagePoint}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Meter'>Meter: </label><div class='col-sm-8'><input id='Meter' class='form-control' type='text'{{#Meter}} value='{{Meter}}'{{/Meter}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CustomerAgreement'>CustomerAgreement: </label><div class='col-sm-8'><input id='CustomerAgreement' class='form-control' type='text'{{#CustomerAgreement}} value='{{CustomerAgreement}}'{{/CustomerAgreement}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.Channel;
                if (null == bucket)
                   cim_data.Channel = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Channel[this._id];
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

                base.export_element (obj, "Channel", "isVirtual", base.from_boolean, fields);
                base.export_attribute (obj, "Channel", "Register", fields);
                base.export_attribute (obj, "Channel", "ReadingType", fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Channel_collapse" aria-expanded="true" aria-controls="Channel_collapse" style="margin-left: 10px;">Channel</a></legend>
                    <div id="Channel_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isVirtual'>isVirtual: </label><div class='col-sm-8'><input id='isVirtual' class='form-check-input' type='checkbox'{{#isVirtual}} checked{{/isVirtual}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Register'>Register: </label><div class='col-sm-8'><input id='Register' class='form-control' type='text'{{#Register}} value='{{Register}}'{{/Register}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ReadingType'>ReadingType: </label><div class='col-sm-8'><input id='ReadingType' class='form-control' type='text'{{#ReadingType}} value='{{ReadingType}}'{{/ReadingType}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.ReadingQuality;
                if (null == bucket)
                   cim_data.ReadingQuality = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ReadingQuality[this._id];
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

                base.export_element (obj, "ReadingQuality", "comment", base.from_string, fields);
                base.export_element (obj, "ReadingQuality", "source", base.from_string, fields);
                base.export_element (obj, "ReadingQuality", "timeStamp", base.from_datetime, fields);
                base.export_attribute (obj, "ReadingQuality", "ReadingQualityType", fields);
                base.export_attribute (obj, "ReadingQuality", "Reading", fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ReadingQuality_collapse" aria-expanded="true" aria-controls="ReadingQuality_collapse" style="margin-left: 10px;">ReadingQuality</a></legend>
                    <div id="ReadingQuality_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='comment'>comment: </label><div class='col-sm-8'><input id='comment' class='form-control' type='text'{{#comment}} value='{{comment}}'{{/comment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='source'>source: </label><div class='col-sm-8'><input id='source' class='form-control' type='text'{{#source}} value='{{source}}'{{/source}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='timeStamp'>timeStamp: </label><div class='col-sm-8'><input id='timeStamp' class='form-control' type='text'{{#timeStamp}} value='{{timeStamp}}'{{/timeStamp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ReadingQualityType'>ReadingQualityType: </label><div class='col-sm-8'><input id='ReadingQualityType' class='form-control' type='text'{{#ReadingQualityType}} value='{{ReadingQualityType}}'{{/ReadingQualityType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Reading'>Reading: </label><div class='col-sm-8'><input id='Reading' class='form-control' type='text'{{#Reading}} value='{{Reading}}'{{/Reading}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.MeterMultiplier;
                if (null == bucket)
                   cim_data.MeterMultiplier = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MeterMultiplier[this._id];
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

                base.export_element (obj, "MeterMultiplier", "kind", base.from_string, fields);
                base.export_element (obj, "MeterMultiplier", "value", base.from_float, fields);
                base.export_attribute (obj, "MeterMultiplier", "Meter", fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MeterMultiplier_collapse" aria-expanded="true" aria-controls="MeterMultiplier_collapse" style="margin-left: 10px;">MeterMultiplier</a></legend>
                    <div id="MeterMultiplier_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#MeterMultiplierKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/MeterMultiplierKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value'>value: </label><div class='col-sm-8'><input id='value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Meter'>Meter: </label><div class='col-sm-8'><input id='Meter' class='form-control' type='text'{{#Meter}} value='{{Meter}}'{{/Meter}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.UsagePointLocation;
                if (null == bucket)
                   cim_data.UsagePointLocation = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.UsagePointLocation[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Location.prototype.parse.call (this, context, sub);
                obj.cls = "UsagePointLocation";
                base.parse_element (/<cim:UsagePointLocation.accessMethod>([\s\S]*?)<\/cim:UsagePointLocation.accessMethod>/g, obj, "accessMethod", base.to_string, sub, context);
                base.parse_element (/<cim:UsagePointLocation.remark>([\s\S]*?)<\/cim:UsagePointLocation.remark>/g, obj, "remark", base.to_string, sub, context);
                base.parse_element (/<cim:UsagePointLocation.siteAccessProblem>([\s\S]*?)<\/cim:UsagePointLocation.siteAccessProblem>/g, obj, "siteAccessProblem", base.to_string, sub, context);

                var bucket = context.parsed.UsagePointLocation;
                if (null == bucket)
                   context.parsed.UsagePointLocation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Location.prototype.export.call (this, obj, false);

                base.export_element (obj, "UsagePointLocation", "accessMethod", base.from_string, fields);
                base.export_element (obj, "UsagePointLocation", "remark", base.from_string, fields);
                base.export_element (obj, "UsagePointLocation", "siteAccessProblem", base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#UsagePointLocation_collapse" aria-expanded="true" aria-controls="UsagePointLocation_collapse" style="margin-left: 10px;">UsagePointLocation</a></legend>
                    <div id="UsagePointLocation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Location.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='accessMethod'>accessMethod: </label><div class='col-sm-8'><input id='accessMethod' class='form-control' type='text'{{#accessMethod}} value='{{accessMethod}}'{{/accessMethod}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='remark'>remark: </label><div class='col-sm-8'><input id='remark' class='form-control' type='text'{{#remark}} value='{{remark}}'{{/remark}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='siteAccessProblem'>siteAccessProblem: </label><div class='col-sm-8'><input id='siteAccessProblem' class='form-control' type='text'{{#siteAccessProblem}} value='{{siteAccessProblem}}'{{/siteAccessProblem}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.MetrologyRequirement;
                if (null == bucket)
                   cim_data.MetrologyRequirement = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MetrologyRequirement[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MetrologyRequirement";
                base.parse_attribute (/<cim:MetrologyRequirement.reason\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "reason", sub, context);

                var bucket = context.parsed.MetrologyRequirement;
                if (null == bucket)
                   context.parsed.MetrologyRequirement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "MetrologyRequirement", "reason", base.from_string, fields);
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
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ReadingReasonKind = []; if (!obj.reason) obj.ReadingReasonKind.push ({ id: '', selected: true}); for (var property in ReadingReasonKind) obj.ReadingReasonKind.push ({ id: property, selected: obj.reason && obj.reason.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ReadingReasonKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MetrologyRequirement_collapse" aria-expanded="true" aria-controls="MetrologyRequirement_collapse" style="margin-left: 10px;">MetrologyRequirement</a></legend>
                    <div id="MetrologyRequirement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='reason'>reason: </label><div class='col-sm-8'><select id='reason' class='form-control'>{{#ReadingReasonKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ReadingReasonKind}}</select></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.EndDeviceFunction;
                if (null == bucket)
                   cim_data.EndDeviceFunction = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EndDeviceFunction[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Assets.AssetFunction.prototype.parse.call (this, context, sub);
                obj.cls = "EndDeviceFunction";
                base.parse_element (/<cim:EndDeviceFunction.enabled>([\s\S]*?)<\/cim:EndDeviceFunction.enabled>/g, obj, "enabled", base.to_boolean, sub, context);
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

                base.export_element (obj, "EndDeviceFunction", "enabled", base.from_boolean, fields);
                base.export_attribute (obj, "EndDeviceFunction", "EndDevice", fields);
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
                    {{#EndDevice}}<div><b>EndDevice</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EndDevice}}&quot;);})'>{{EndDevice}}</a></div>{{/EndDevice}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EndDeviceFunction_collapse" aria-expanded="true" aria-controls="EndDeviceFunction_collapse" style="margin-left: 10px;">EndDeviceFunction</a></legend>
                    <div id="EndDeviceFunction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.AssetFunction.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='enabled'>enabled: </label><div class='col-sm-8'><input id='enabled' class='form-check-input' type='checkbox'{{#enabled}} checked{{/enabled}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='EndDevice'>EndDevice: </label><div class='col-sm-8'><input id='EndDevice' class='form-control' type='text'{{#EndDevice}} value='{{EndDevice}}'{{/EndDevice}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.ComModule;
                if (null == bucket)
                   cim_data.ComModule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ComModule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Assets.Asset.prototype.parse.call (this, context, sub);
                obj.cls = "ComModule";
                base.parse_element (/<cim:ComModule.amrSystem>([\s\S]*?)<\/cim:ComModule.amrSystem>/g, obj, "amrSystem", base.to_string, sub, context);
                base.parse_element (/<cim:ComModule.supportsAutonomousDst>([\s\S]*?)<\/cim:ComModule.supportsAutonomousDst>/g, obj, "supportsAutonomousDst", base.to_boolean, sub, context);
                base.parse_element (/<cim:ComModule.timeZoneOffset>([\s\S]*?)<\/cim:ComModule.timeZoneOffset>/g, obj, "timeZoneOffset", base.to_string, sub, context);

                var bucket = context.parsed.ComModule;
                if (null == bucket)
                   context.parsed.ComModule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Assets.Asset.prototype.export.call (this, obj, false);

                base.export_element (obj, "ComModule", "amrSystem", base.from_string, fields);
                base.export_element (obj, "ComModule", "supportsAutonomousDst", base.from_boolean, fields);
                base.export_element (obj, "ComModule", "timeZoneOffset", base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ComModule_collapse" aria-expanded="true" aria-controls="ComModule_collapse" style="margin-left: 10px;">ComModule</a></legend>
                    <div id="ComModule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.Asset.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='amrSystem'>amrSystem: </label><div class='col-sm-8'><input id='amrSystem' class='form-control' type='text'{{#amrSystem}} value='{{amrSystem}}'{{/amrSystem}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='supportsAutonomousDst'>supportsAutonomousDst: </label><div class='col-sm-8'><input id='supportsAutonomousDst' class='form-check-input' type='checkbox'{{#supportsAutonomousDst}} checked{{/supportsAutonomousDst}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='timeZoneOffset'>timeZoneOffset: </label><div class='col-sm-8'><input id='timeZoneOffset' class='form-control' type='text'{{#timeZoneOffset}} value='{{timeZoneOffset}}'{{/timeZoneOffset}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.ReadingType;
                if (null == bucket)
                   cim_data.ReadingType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ReadingType[this._id];
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
                base.parse_attribute (/<cim:ReadingType.PendingCalculation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PendingCalculation", sub, context);
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

                base.export_element (obj, "ReadingType", "accumulation", base.from_string, fields);
                base.export_element (obj, "ReadingType", "aggregate", base.from_string, fields);
                base.export_element (obj, "ReadingType", "argument", base.from_string, fields);
                base.export_element (obj, "ReadingType", "commodity", base.from_string, fields);
                base.export_element (obj, "ReadingType", "consumptionTier", base.from_string, fields);
                base.export_element (obj, "ReadingType", "cpp", base.from_string, fields);
                base.export_element (obj, "ReadingType", "currency", base.from_string, fields);
                base.export_element (obj, "ReadingType", "flowDirection", base.from_string, fields);
                base.export_element (obj, "ReadingType", "interharmonic", base.from_string, fields);
                base.export_element (obj, "ReadingType", "macroPeriod", base.from_string, fields);
                base.export_element (obj, "ReadingType", "measurementKind", base.from_string, fields);
                base.export_element (obj, "ReadingType", "measuringPeriod", base.from_string, fields);
                base.export_element (obj, "ReadingType", "multiplier", base.from_string, fields);
                base.export_element (obj, "ReadingType", "phases", base.from_string, fields);
                base.export_element (obj, "ReadingType", "tou", base.from_string, fields);
                base.export_element (obj, "ReadingType", "unit", base.from_string, fields);
                base.export_attribute (obj, "ReadingType", "PendingCalculation", fields);
                base.export_attribute (obj, "ReadingType", "Channel", fields);
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
                    {{#PendingCalculation}}<div><b>PendingCalculation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PendingCalculation}}&quot;);})'>{{PendingCalculation}}</a></div>{{/PendingCalculation}}
                    {{#Channel}}<div><b>Channel</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Channel}}&quot;);})'>{{Channel}}</a></div>{{/Channel}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ReadingType_collapse" aria-expanded="true" aria-controls="ReadingType_collapse" style="margin-left: 10px;">ReadingType</a></legend>
                    <div id="ReadingType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='accumulation'>accumulation: </label><div class='col-sm-8'><input id='accumulation' class='form-control' type='text'{{#accumulation}} value='{{accumulation}}'{{/accumulation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='aggregate'>aggregate: </label><div class='col-sm-8'><input id='aggregate' class='form-control' type='text'{{#aggregate}} value='{{aggregate}}'{{/aggregate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='argument'>argument: </label><div class='col-sm-8'><input id='argument' class='form-control' type='text'{{#argument}} value='{{argument}}'{{/argument}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='commodity'>commodity: </label><div class='col-sm-8'><input id='commodity' class='form-control' type='text'{{#commodity}} value='{{commodity}}'{{/commodity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='consumptionTier'>consumptionTier: </label><div class='col-sm-8'><input id='consumptionTier' class='form-control' type='text'{{#consumptionTier}} value='{{consumptionTier}}'{{/consumptionTier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='cpp'>cpp: </label><div class='col-sm-8'><input id='cpp' class='form-control' type='text'{{#cpp}} value='{{cpp}}'{{/cpp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='currency'>currency: </label><div class='col-sm-8'><input id='currency' class='form-control' type='text'{{#currency}} value='{{currency}}'{{/currency}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='flowDirection'>flowDirection: </label><div class='col-sm-8'><input id='flowDirection' class='form-control' type='text'{{#flowDirection}} value='{{flowDirection}}'{{/flowDirection}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='interharmonic'>interharmonic: </label><div class='col-sm-8'><input id='interharmonic' class='form-control' type='text'{{#interharmonic}} value='{{interharmonic}}'{{/interharmonic}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='macroPeriod'>macroPeriod: </label><div class='col-sm-8'><input id='macroPeriod' class='form-control' type='text'{{#macroPeriod}} value='{{macroPeriod}}'{{/macroPeriod}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='measurementKind'>measurementKind: </label><div class='col-sm-8'><input id='measurementKind' class='form-control' type='text'{{#measurementKind}} value='{{measurementKind}}'{{/measurementKind}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='measuringPeriod'>measuringPeriod: </label><div class='col-sm-8'><input id='measuringPeriod' class='form-control' type='text'{{#measuringPeriod}} value='{{measuringPeriod}}'{{/measuringPeriod}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='multiplier'>multiplier: </label><div class='col-sm-8'><input id='multiplier' class='form-control' type='text'{{#multiplier}} value='{{multiplier}}'{{/multiplier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='phases'>phases: </label><div class='col-sm-8'><input id='phases' class='form-control' type='text'{{#phases}} value='{{phases}}'{{/phases}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tou'>tou: </label><div class='col-sm-8'><input id='tou' class='form-control' type='text'{{#tou}} value='{{tou}}'{{/tou}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='unit'>unit: </label><div class='col-sm-8'><input id='unit' class='form-control' type='text'{{#unit}} value='{{unit}}'{{/unit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='PendingCalculation'>PendingCalculation: </label><div class='col-sm-8'><input id='PendingCalculation' class='form-control' type='text'{{#PendingCalculation}} value='{{PendingCalculation}}'{{/PendingCalculation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Channel'>Channel: </label><div class='col-sm-8'><input id='Channel' class='form-control' type='text'{{#Channel}} value='{{Channel}}'{{/Channel}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.IntervalBlock;
                if (null == bucket)
                   cim_data.IntervalBlock = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.IntervalBlock[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "IntervalBlock";
                base.parse_attribute (/<cim:IntervalBlock.PendingCalculation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PendingCalculation", sub, context);
                base.parse_attribute (/<cim:IntervalBlock.ReadingType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReadingType", sub, context);
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

                base.export_attribute (obj, "IntervalBlock", "PendingCalculation", fields);
                base.export_attribute (obj, "IntervalBlock", "ReadingType", fields);
                base.export_attribute (obj, "IntervalBlock", "MeterReading", fields);
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
                    {{#MeterReading}}<div><b>MeterReading</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MeterReading}}&quot;);})'>{{MeterReading}}</a></div>{{/MeterReading}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#IntervalBlock_collapse" aria-expanded="true" aria-controls="IntervalBlock_collapse" style="margin-left: 10px;">IntervalBlock</a></legend>
                    <div id="IntervalBlock_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='PendingCalculation'>PendingCalculation: </label><div class='col-sm-8'><input id='PendingCalculation' class='form-control' type='text'{{#PendingCalculation}} value='{{PendingCalculation}}'{{/PendingCalculation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ReadingType'>ReadingType: </label><div class='col-sm-8'><input id='ReadingType' class='form-control' type='text'{{#ReadingType}} value='{{ReadingType}}'{{/ReadingType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MeterReading'>MeterReading: </label><div class='col-sm-8'><input id='MeterReading' class='form-control' type='text'{{#MeterReading}} value='{{MeterReading}}'{{/MeterReading}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.EndDeviceTiming;
                if (null == bucket)
                   cim_data.EndDeviceTiming = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EndDeviceTiming[this._id];
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

                base.export_element (obj, "EndDeviceTiming", "duration", base.from_string, fields);
                base.export_element (obj, "EndDeviceTiming", "durationIndefinite", base.from_boolean, fields);
                base.export_element (obj, "EndDeviceTiming", "interval", base.from_string, fields);
                base.export_element (obj, "EndDeviceTiming", "randomisation", base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EndDeviceTiming_collapse" aria-expanded="true" aria-controls="EndDeviceTiming_collapse" style="margin-left: 10px;">EndDeviceTiming</a></legend>
                    <div id="EndDeviceTiming_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='duration'>duration: </label><div class='col-sm-8'><input id='duration' class='form-control' type='text'{{#duration}} value='{{duration}}'{{/duration}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='durationIndefinite'>durationIndefinite: </label><div class='col-sm-8'><input id='durationIndefinite' class='form-check-input' type='checkbox'{{#durationIndefinite}} checked{{/durationIndefinite}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='interval'>interval: </label><div class='col-sm-8'><input id='interval' class='form-control' type='text'{{#interval}} value='{{interval}}'{{/interval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='randomisation'>randomisation: </label><div class='col-sm-8'><select id='randomisation' class='form-control'>{{#RandomisationKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/RandomisationKind}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
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
                this._id = template.id;
                var bucket = cim_data.EndDeviceAction;
                if (null == bucket)
                   cim_data.EndDeviceAction = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EndDeviceAction[this._id];
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

                base.export_element (obj, "EndDeviceAction", "command", base.from_string, fields);
                base.export_element (obj, "EndDeviceAction", "duration", base.from_string, fields);
                base.export_element (obj, "EndDeviceAction", "durationIndefinite", base.from_boolean, fields);
                base.export_element (obj, "EndDeviceAction", "startDateTime", base.from_datetime, fields);
                base.export_attribute (obj, "EndDeviceAction", "EndDeviceControl", fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EndDeviceAction_collapse" aria-expanded="true" aria-controls="EndDeviceAction_collapse" style="margin-left: 10px;">EndDeviceAction</a></legend>
                    <div id="EndDeviceAction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='command'>command: </label><div class='col-sm-8'><input id='command' class='form-control' type='text'{{#command}} value='{{command}}'{{/command}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='duration'>duration: </label><div class='col-sm-8'><input id='duration' class='form-control' type='text'{{#duration}} value='{{duration}}'{{/duration}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='durationIndefinite'>durationIndefinite: </label><div class='col-sm-8'><input id='durationIndefinite' class='form-check-input' type='checkbox'{{#durationIndefinite}} checked{{/durationIndefinite}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startDateTime'>startDateTime: </label><div class='col-sm-8'><input id='startDateTime' class='form-control' type='text'{{#startDateTime}} value='{{startDateTime}}'{{/startDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='EndDeviceControl'>EndDeviceControl: </label><div class='col-sm-8'><input id='EndDeviceControl' class='form-control' type='text'{{#EndDeviceControl}} value='{{EndDeviceControl}}'{{/EndDeviceControl}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.BaseReading;
                if (null == bucket)
                   cim_data.BaseReading = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BaseReading[this._id];
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

                var bucket = context.parsed.BaseReading;
                if (null == bucket)
                   context.parsed.BaseReading = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Meas.MeasurementValue.prototype.export.call (this, obj, false);

                base.export_element (obj, "BaseReading", "reportedDateTime", base.from_datetime, fields);
                base.export_element (obj, "BaseReading", "source", base.from_string, fields);
                base.export_element (obj, "BaseReading", "timePeriod", base.from_string, fields);
                base.export_element (obj, "BaseReading", "value", base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BaseReading_collapse" aria-expanded="true" aria-controls="BaseReading_collapse" style="margin-left: 10px;">BaseReading</a></legend>
                    <div id="BaseReading_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Meas.MeasurementValue.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='reportedDateTime'>reportedDateTime: </label><div class='col-sm-8'><input id='reportedDateTime' class='form-control' type='text'{{#reportedDateTime}} value='{{reportedDateTime}}'{{/reportedDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='source'>source: </label><div class='col-sm-8'><input id='source' class='form-control' type='text'{{#source}} value='{{source}}'{{/source}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='timePeriod'>timePeriod: </label><div class='col-sm-8'><input id='timePeriod' class='form-control' type='text'{{#timePeriod}} value='{{timePeriod}}'{{/timePeriod}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value'>value: </label><div class='col-sm-8'><input id='value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.EndDeviceEvent;
                if (null == bucket)
                   cim_data.EndDeviceEvent = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EndDeviceEvent[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.ActivityRecord.prototype.parse.call (this, context, sub);
                obj.cls = "EndDeviceEvent";
                base.parse_element (/<cim:EndDeviceEvent.issuerID>([\s\S]*?)<\/cim:EndDeviceEvent.issuerID>/g, obj, "issuerID", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceEvent.issuerTrackingID>([\s\S]*?)<\/cim:EndDeviceEvent.issuerTrackingID>/g, obj, "issuerTrackingID", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceEvent.userID>([\s\S]*?)<\/cim:EndDeviceEvent.userID>/g, obj, "userID", base.to_string, sub, context);
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

                base.export_element (obj, "EndDeviceEvent", "issuerID", base.from_string, fields);
                base.export_element (obj, "EndDeviceEvent", "issuerTrackingID", base.from_string, fields);
                base.export_element (obj, "EndDeviceEvent", "userID", base.from_string, fields);
                base.export_attribute (obj, "EndDeviceEvent", "EndDevice", fields);
                base.export_attribute (obj, "EndDeviceEvent", "UsagePoint", fields);
                base.export_attribute (obj, "EndDeviceEvent", "MeterReading", fields);
                base.export_attribute (obj, "EndDeviceEvent", "EndDeviceEventType", fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EndDeviceEvent_collapse" aria-expanded="true" aria-controls="EndDeviceEvent_collapse" style="margin-left: 10px;">EndDeviceEvent</a></legend>
                    <div id="EndDeviceEvent_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.ActivityRecord.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='issuerID'>issuerID: </label><div class='col-sm-8'><input id='issuerID' class='form-control' type='text'{{#issuerID}} value='{{issuerID}}'{{/issuerID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='issuerTrackingID'>issuerTrackingID: </label><div class='col-sm-8'><input id='issuerTrackingID' class='form-control' type='text'{{#issuerTrackingID}} value='{{issuerTrackingID}}'{{/issuerTrackingID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='userID'>userID: </label><div class='col-sm-8'><input id='userID' class='form-control' type='text'{{#userID}} value='{{userID}}'{{/userID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='EndDevice'>EndDevice: </label><div class='col-sm-8'><input id='EndDevice' class='form-control' type='text'{{#EndDevice}} value='{{EndDevice}}'{{/EndDevice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='UsagePoint'>UsagePoint: </label><div class='col-sm-8'><input id='UsagePoint' class='form-control' type='text'{{#UsagePoint}} value='{{UsagePoint}}'{{/UsagePoint}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MeterReading'>MeterReading: </label><div class='col-sm-8'><input id='MeterReading' class='form-control' type='text'{{#MeterReading}} value='{{MeterReading}}'{{/MeterReading}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='EndDeviceEventType'>EndDeviceEventType: </label><div class='col-sm-8'><input id='EndDeviceEventType' class='form-control' type='text'{{#EndDeviceEventType}} value='{{EndDeviceEventType}}'{{/EndDeviceEventType}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.ServiceMultiplier;
                if (null == bucket)
                   cim_data.ServiceMultiplier = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ServiceMultiplier[this._id];
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

                base.export_element (obj, "ServiceMultiplier", "kind", base.from_string, fields);
                base.export_element (obj, "ServiceMultiplier", "value", base.from_float, fields);
                base.export_attribute (obj, "ServiceMultiplier", "UsagePoint", fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ServiceMultiplier_collapse" aria-expanded="true" aria-controls="ServiceMultiplier_collapse" style="margin-left: 10px;">ServiceMultiplier</a></legend>
                    <div id="ServiceMultiplier_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#ServiceMultiplierKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ServiceMultiplierKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value'>value: </label><div class='col-sm-8'><input id='value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='UsagePoint'>UsagePoint: </label><div class='col-sm-8'><input id='UsagePoint' class='form-control' type='text'{{#UsagePoint}} value='{{UsagePoint}}'{{/UsagePoint}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.PendingCalculation;
                if (null == bucket)
                   cim_data.PendingCalculation = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PendingCalculation[this._id];
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

                var bucket = context.parsed.PendingCalculation;
                if (null == bucket)
                   context.parsed.PendingCalculation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "PendingCalculation", "multiplyBeforeAdd", base.from_boolean, fields);
                base.export_element (obj, "PendingCalculation", "offset", base.from_string, fields);
                base.export_element (obj, "PendingCalculation", "scalarDenominator", base.from_string, fields);
                base.export_element (obj, "PendingCalculation", "scalarFloat", base.from_float, fields);
                base.export_element (obj, "PendingCalculation", "scalarNumerator", base.from_string, fields);
                base.export_attribute (obj, "PendingCalculation", "ReadingType", fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PendingCalculation_collapse" aria-expanded="true" aria-controls="PendingCalculation_collapse" style="margin-left: 10px;">PendingCalculation</a></legend>
                    <div id="PendingCalculation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='multiplyBeforeAdd'>multiplyBeforeAdd: </label><div class='col-sm-8'><input id='multiplyBeforeAdd' class='form-check-input' type='checkbox'{{#multiplyBeforeAdd}} checked{{/multiplyBeforeAdd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='offset'>offset: </label><div class='col-sm-8'><input id='offset' class='form-control' type='text'{{#offset}} value='{{offset}}'{{/offset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='scalarDenominator'>scalarDenominator: </label><div class='col-sm-8'><input id='scalarDenominator' class='form-control' type='text'{{#scalarDenominator}} value='{{scalarDenominator}}'{{/scalarDenominator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='scalarFloat'>scalarFloat: </label><div class='col-sm-8'><input id='scalarFloat' class='form-control' type='text'{{#scalarFloat}} value='{{scalarFloat}}'{{/scalarFloat}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='scalarNumerator'>scalarNumerator: </label><div class='col-sm-8'><input id='scalarNumerator' class='form-control' type='text'{{#scalarNumerator}} value='{{scalarNumerator}}'{{/scalarNumerator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ReadingType'>ReadingType: </label><div class='col-sm-8'><input id='ReadingType' class='form-control' type='text'{{#ReadingType}} value='{{ReadingType}}'{{/ReadingType}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.ReadingInterharmonic;
                if (null == bucket)
                   cim_data.ReadingInterharmonic = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ReadingInterharmonic[this._id];
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

                base.export_element (obj, "ReadingInterharmonic", "denominator", base.from_string, fields);
                base.export_element (obj, "ReadingInterharmonic", "numerator", base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ReadingInterharmonic_collapse" aria-expanded="true" aria-controls="ReadingInterharmonic_collapse" style="margin-left: 10px;">ReadingInterharmonic</a></legend>
                    <div id="ReadingInterharmonic_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='denominator'>denominator: </label><div class='col-sm-8'><input id='denominator' class='form-control' type='text'{{#denominator}} value='{{denominator}}'{{/denominator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='numerator'>numerator: </label><div class='col-sm-8'><input id='numerator' class='form-control' type='text'{{#numerator}} value='{{numerator}}'{{/numerator}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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
                this._id = template.id;
                var bucket = cim_data.EndDeviceControlType;
                if (null == bucket)
                   cim_data.EndDeviceControlType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EndDeviceControlType[this._id];
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

                var bucket = context.parsed.EndDeviceControlType;
                if (null == bucket)
                   context.parsed.EndDeviceControlType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "EndDeviceControlType", "domain", base.from_string, fields);
                base.export_element (obj, "EndDeviceControlType", "eventOrAction", base.from_string, fields);
                base.export_element (obj, "EndDeviceControlType", "subDomain", base.from_string, fields);
                base.export_element (obj, "EndDeviceControlType", "type", base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EndDeviceControlType_collapse" aria-expanded="true" aria-controls="EndDeviceControlType_collapse" style="margin-left: 10px;">EndDeviceControlType</a></legend>
                    <div id="EndDeviceControlType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='domain'>domain: </label><div class='col-sm-8'><input id='domain' class='form-control' type='text'{{#domain}} value='{{domain}}'{{/domain}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='eventOrAction'>eventOrAction: </label><div class='col-sm-8'><input id='eventOrAction' class='form-control' type='text'{{#eventOrAction}} value='{{eventOrAction}}'{{/eventOrAction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='subDomain'>subDomain: </label><div class='col-sm-8'><input id='subDomain' class='form-control' type='text'{{#subDomain}} value='{{subDomain}}'{{/subDomain}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='type'>type: </label><div class='col-sm-8'><input id='type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.UsagePointGroup;
                if (null == bucket)
                   cim_data.UsagePointGroup = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.UsagePointGroup[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "UsagePointGroup";
                base.parse_element (/<cim:UsagePointGroup.type>([\s\S]*?)<\/cim:UsagePointGroup.type>/g, obj, "type", base.to_string, sub, context);

                var bucket = context.parsed.UsagePointGroup;
                if (null == bucket)
                   context.parsed.UsagePointGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "UsagePointGroup", "type", base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#UsagePointGroup_collapse" aria-expanded="true" aria-controls="UsagePointGroup_collapse" style="margin-left: 10px;">UsagePointGroup</a></legend>
                    <div id="UsagePointGroup_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='type'>type: </label><div class='col-sm-8'><input id='type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.MeterServiceWork;
                if (null == bucket)
                   cim_data.MeterServiceWork = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MeterServiceWork[this._id];
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

                base.export_attribute (obj, "MeterServiceWork", "Meter", fields);
                base.export_attribute (obj, "MeterServiceWork", "OldMeter", fields);
                base.export_attribute (obj, "MeterServiceWork", "UsagePoint", fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MeterServiceWork_collapse" aria-expanded="true" aria-controls="MeterServiceWork_collapse" style="margin-left: 10px;">MeterServiceWork</a></legend>
                    <div id="MeterServiceWork_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Work.Work.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Meter'>Meter: </label><div class='col-sm-8'><input id='Meter' class='form-control' type='text'{{#Meter}} value='{{Meter}}'{{/Meter}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='OldMeter'>OldMeter: </label><div class='col-sm-8'><input id='OldMeter' class='form-control' type='text'{{#OldMeter}} value='{{OldMeter}}'{{/OldMeter}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='UsagePoint'>UsagePoint: </label><div class='col-sm-8'><input id='UsagePoint' class='form-control' type='text'{{#UsagePoint}} value='{{UsagePoint}}'{{/UsagePoint}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.ReadingQualityType;
                if (null == bucket)
                   cim_data.ReadingQualityType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ReadingQualityType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ReadingQualityType";
                base.parse_element (/<cim:ReadingQualityType.category>([\s\S]*?)<\/cim:ReadingQualityType.category>/g, obj, "category", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingQualityType.subCategory>([\s\S]*?)<\/cim:ReadingQualityType.subCategory>/g, obj, "subCategory", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingQualityType.systemId>([\s\S]*?)<\/cim:ReadingQualityType.systemId>/g, obj, "systemId", base.to_string, sub, context);

                var bucket = context.parsed.ReadingQualityType;
                if (null == bucket)
                   context.parsed.ReadingQualityType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ReadingQualityType", "category", base.from_string, fields);
                base.export_element (obj, "ReadingQualityType", "subCategory", base.from_string, fields);
                base.export_element (obj, "ReadingQualityType", "systemId", base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ReadingQualityType_collapse" aria-expanded="true" aria-controls="ReadingQualityType_collapse" style="margin-left: 10px;">ReadingQualityType</a></legend>
                    <div id="ReadingQualityType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='category'>category: </label><div class='col-sm-8'><input id='category' class='form-control' type='text'{{#category}} value='{{category}}'{{/category}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='subCategory'>subCategory: </label><div class='col-sm-8'><input id='subCategory' class='form-control' type='text'{{#subCategory}} value='{{subCategory}}'{{/subCategory}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='systemId'>systemId: </label><div class='col-sm-8'><input id='systemId' class='form-control' type='text'{{#systemId}} value='{{systemId}}'{{/systemId}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.EndDeviceEventType;
                if (null == bucket)
                   cim_data.EndDeviceEventType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EndDeviceEventType[this._id];
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

                var bucket = context.parsed.EndDeviceEventType;
                if (null == bucket)
                   context.parsed.EndDeviceEventType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "EndDeviceEventType", "domain", base.from_string, fields);
                base.export_element (obj, "EndDeviceEventType", "eventOrAction", base.from_string, fields);
                base.export_element (obj, "EndDeviceEventType", "subDomain", base.from_string, fields);
                base.export_element (obj, "EndDeviceEventType", "type", base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EndDeviceEventType_collapse" aria-expanded="true" aria-controls="EndDeviceEventType_collapse" style="margin-left: 10px;">EndDeviceEventType</a></legend>
                    <div id="EndDeviceEventType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='domain'>domain: </label><div class='col-sm-8'><input id='domain' class='form-control' type='text'{{#domain}} value='{{domain}}'{{/domain}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='eventOrAction'>eventOrAction: </label><div class='col-sm-8'><input id='eventOrAction' class='form-control' type='text'{{#eventOrAction}} value='{{eventOrAction}}'{{/eventOrAction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='subDomain'>subDomain: </label><div class='col-sm-8'><input id='subDomain' class='form-control' type='text'{{#subDomain}} value='{{subDomain}}'{{/subDomain}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='type'>type: </label><div class='col-sm-8'><input id='type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.EndDevice;
                if (null == bucket)
                   cim_data.EndDevice = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EndDevice[this._id];
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
                base.parse_attribute (/<cim:EndDevice.EndDeviceInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceInfo", sub, context);
                base.parse_attribute (/<cim:EndDevice.ServiceLocation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ServiceLocation", sub, context);
                base.parse_attribute (/<cim:EndDevice.Customer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Customer", sub, context);
                base.parse_attribute (/<cim:EndDevice.UsagePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UsagePoint", sub, context);

                var bucket = context.parsed.EndDevice;
                if (null == bucket)
                   context.parsed.EndDevice = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Assets.AssetContainer.prototype.export.call (this, obj, false);

                base.export_element (obj, "EndDevice", "amrSystem", base.from_string, fields);
                base.export_element (obj, "EndDevice", "installCode", base.from_string, fields);
                base.export_element (obj, "EndDevice", "isPan", base.from_boolean, fields);
                base.export_element (obj, "EndDevice", "isVirtual", base.from_boolean, fields);
                base.export_element (obj, "EndDevice", "timeZoneOffset", base.from_string, fields);
                base.export_attribute (obj, "EndDevice", "EndDeviceInfo", fields);
                base.export_attribute (obj, "EndDevice", "ServiceLocation", fields);
                base.export_attribute (obj, "EndDevice", "Customer", fields);
                base.export_attribute (obj, "EndDevice", "UsagePoint", fields);
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
                    {{#EndDeviceInfo}}<div><b>EndDeviceInfo</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EndDeviceInfo}}&quot;);})'>{{EndDeviceInfo}}</a></div>{{/EndDeviceInfo}}
                    {{#ServiceLocation}}<div><b>ServiceLocation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ServiceLocation}}&quot;);})'>{{ServiceLocation}}</a></div>{{/ServiceLocation}}
                    {{#Customer}}<div><b>Customer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Customer}}&quot;);})'>{{Customer}}</a></div>{{/Customer}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EndDevice_collapse" aria-expanded="true" aria-controls="EndDevice_collapse" style="margin-left: 10px;">EndDevice</a></legend>
                    <div id="EndDevice_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.AssetContainer.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='amrSystem'>amrSystem: </label><div class='col-sm-8'><input id='amrSystem' class='form-control' type='text'{{#amrSystem}} value='{{amrSystem}}'{{/amrSystem}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='installCode'>installCode: </label><div class='col-sm-8'><input id='installCode' class='form-control' type='text'{{#installCode}} value='{{installCode}}'{{/installCode}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isPan'>isPan: </label><div class='col-sm-8'><input id='isPan' class='form-check-input' type='checkbox'{{#isPan}} checked{{/isPan}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isVirtual'>isVirtual: </label><div class='col-sm-8'><input id='isVirtual' class='form-check-input' type='checkbox'{{#isVirtual}} checked{{/isVirtual}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='timeZoneOffset'>timeZoneOffset: </label><div class='col-sm-8'><input id='timeZoneOffset' class='form-control' type='text'{{#timeZoneOffset}} value='{{timeZoneOffset}}'{{/timeZoneOffset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='EndDeviceInfo'>EndDeviceInfo: </label><div class='col-sm-8'><input id='EndDeviceInfo' class='form-control' type='text'{{#EndDeviceInfo}} value='{{EndDeviceInfo}}'{{/EndDeviceInfo}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ServiceLocation'>ServiceLocation: </label><div class='col-sm-8'><input id='ServiceLocation' class='form-control' type='text'{{#ServiceLocation}} value='{{ServiceLocation}}'{{/ServiceLocation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Customer'>Customer: </label><div class='col-sm-8'><input id='Customer' class='form-control' type='text'{{#Customer}} value='{{Customer}}'{{/Customer}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='UsagePoint'>UsagePoint: </label><div class='col-sm-8'><input id='UsagePoint' class='form-control' type='text'{{#UsagePoint}} value='{{UsagePoint}}'{{/UsagePoint}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.EndDeviceCapability;
                if (null == bucket)
                   cim_data.EndDeviceCapability = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EndDeviceCapability[this._id];
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

                base.export_element (obj, "EndDeviceCapability", "autonomousDst", base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "communication", base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "connectDisconnect", base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "demandResponse", base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "electricMetering", base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "gasMetering", base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "metrology", base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "onRequestRead", base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "outageHistory", base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "pressureCompensation", base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "pricingInfo", base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "pulseOutput", base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "relaysProgramming", base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "reverseFlow", base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "superCompressibilityCompensation", base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "temperatureCompensation", base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "textMessage", base.from_boolean, fields);
                base.export_element (obj, "EndDeviceCapability", "waterMetering", base.from_boolean, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EndDeviceCapability_collapse" aria-expanded="true" aria-controls="EndDeviceCapability_collapse" style="margin-left: 10px;">EndDeviceCapability</a></legend>
                    <div id="EndDeviceCapability_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='autonomousDst'>autonomousDst: </label><div class='col-sm-8'><input id='autonomousDst' class='form-check-input' type='checkbox'{{#autonomousDst}} checked{{/autonomousDst}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='communication'>communication: </label><div class='col-sm-8'><input id='communication' class='form-check-input' type='checkbox'{{#communication}} checked{{/communication}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='connectDisconnect'>connectDisconnect: </label><div class='col-sm-8'><input id='connectDisconnect' class='form-check-input' type='checkbox'{{#connectDisconnect}} checked{{/connectDisconnect}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='demandResponse'>demandResponse: </label><div class='col-sm-8'><input id='demandResponse' class='form-check-input' type='checkbox'{{#demandResponse}} checked{{/demandResponse}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='electricMetering'>electricMetering: </label><div class='col-sm-8'><input id='electricMetering' class='form-check-input' type='checkbox'{{#electricMetering}} checked{{/electricMetering}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='gasMetering'>gasMetering: </label><div class='col-sm-8'><input id='gasMetering' class='form-check-input' type='checkbox'{{#gasMetering}} checked{{/gasMetering}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='metrology'>metrology: </label><div class='col-sm-8'><input id='metrology' class='form-check-input' type='checkbox'{{#metrology}} checked{{/metrology}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='onRequestRead'>onRequestRead: </label><div class='col-sm-8'><input id='onRequestRead' class='form-check-input' type='checkbox'{{#onRequestRead}} checked{{/onRequestRead}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='outageHistory'>outageHistory: </label><div class='col-sm-8'><input id='outageHistory' class='form-check-input' type='checkbox'{{#outageHistory}} checked{{/outageHistory}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='pressureCompensation'>pressureCompensation: </label><div class='col-sm-8'><input id='pressureCompensation' class='form-check-input' type='checkbox'{{#pressureCompensation}} checked{{/pressureCompensation}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='pricingInfo'>pricingInfo: </label><div class='col-sm-8'><input id='pricingInfo' class='form-check-input' type='checkbox'{{#pricingInfo}} checked{{/pricingInfo}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='pulseOutput'>pulseOutput: </label><div class='col-sm-8'><input id='pulseOutput' class='form-check-input' type='checkbox'{{#pulseOutput}} checked{{/pulseOutput}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='relaysProgramming'>relaysProgramming: </label><div class='col-sm-8'><input id='relaysProgramming' class='form-check-input' type='checkbox'{{#relaysProgramming}} checked{{/relaysProgramming}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='reverseFlow'>reverseFlow: </label><div class='col-sm-8'><input id='reverseFlow' class='form-check-input' type='checkbox'{{#reverseFlow}} checked{{/reverseFlow}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='superCompressibilityCompensation'>superCompressibilityCompensation: </label><div class='col-sm-8'><input id='superCompressibilityCompensation' class='form-check-input' type='checkbox'{{#superCompressibilityCompensation}} checked{{/superCompressibilityCompensation}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='temperatureCompensation'>temperatureCompensation: </label><div class='col-sm-8'><input id='temperatureCompensation' class='form-check-input' type='checkbox'{{#temperatureCompensation}} checked{{/temperatureCompensation}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='textMessage'>textMessage: </label><div class='col-sm-8'><input id='textMessage' class='form-check-input' type='checkbox'{{#textMessage}} checked{{/textMessage}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='waterMetering'>waterMetering: </label><div class='col-sm-8'><input id='waterMetering' class='form-check-input' type='checkbox'{{#waterMetering}} checked{{/waterMetering}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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
                this._id = template.id;
                var bucket = cim_data.EndDeviceInfo;
                if (null == bucket)
                   cim_data.EndDeviceInfo = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EndDeviceInfo[this._id];
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

                var bucket = context.parsed.EndDeviceInfo;
                if (null == bucket)
                   context.parsed.EndDeviceInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Assets.AssetInfo.prototype.export.call (this, obj, false);

                base.export_element (obj, "EndDeviceInfo", "capability", base.from_string, fields);
                base.export_element (obj, "EndDeviceInfo", "isSolidState", base.from_boolean, fields);
                base.export_element (obj, "EndDeviceInfo", "phaseCount", base.from_string, fields);
                base.export_element (obj, "EndDeviceInfo", "ratedCurrent", base.from_string, fields);
                base.export_element (obj, "EndDeviceInfo", "ratedVoltage", base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EndDeviceInfo_collapse" aria-expanded="true" aria-controls="EndDeviceInfo_collapse" style="margin-left: 10px;">EndDeviceInfo</a></legend>
                    <div id="EndDeviceInfo_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='capability'>capability: </label><div class='col-sm-8'><input id='capability' class='form-control' type='text'{{#capability}} value='{{capability}}'{{/capability}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isSolidState'>isSolidState: </label><div class='col-sm-8'><input id='isSolidState' class='form-check-input' type='checkbox'{{#isSolidState}} checked{{/isSolidState}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='phaseCount'>phaseCount: </label><div class='col-sm-8'><input id='phaseCount' class='form-control' type='text'{{#phaseCount}} value='{{phaseCount}}'{{/phaseCount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ratedCurrent'>ratedCurrent: </label><div class='col-sm-8'><input id='ratedCurrent' class='form-control' type='text'{{#ratedCurrent}} value='{{ratedCurrent}}'{{/ratedCurrent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ratedVoltage'>ratedVoltage: </label><div class='col-sm-8'><input id='ratedVoltage' class='form-control' type='text'{{#ratedVoltage}} value='{{ratedVoltage}}'{{/ratedVoltage}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.SimpleEndDeviceFunction;
                if (null == bucket)
                   cim_data.SimpleEndDeviceFunction = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SimpleEndDeviceFunction[this._id];
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

                base.export_element (obj, "SimpleEndDeviceFunction", "kind", base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SimpleEndDeviceFunction_collapse" aria-expanded="true" aria-controls="SimpleEndDeviceFunction_collapse" style="margin-left: 10px;">SimpleEndDeviceFunction</a></legend>
                    <div id="SimpleEndDeviceFunction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EndDeviceFunction.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#EndDeviceFunctionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/EndDeviceFunctionKind}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
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
                this._id = template.id;
                var bucket = cim_data.ComFunction;
                if (null == bucket)
                   cim_data.ComFunction = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ComFunction[this._id];
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

                base.export_element (obj, "ComFunction", "amrAddress", base.from_string, fields);
                base.export_element (obj, "ComFunction", "amrRouter", base.from_string, fields);
                base.export_element (obj, "ComFunction", "direction", base.from_string, fields);
                base.export_element (obj, "ComFunction", "technology", base.from_string, fields);
                base.export_attribute (obj, "ComFunction", "ComModule", fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ComFunction_collapse" aria-expanded="true" aria-controls="ComFunction_collapse" style="margin-left: 10px;">ComFunction</a></legend>
                    <div id="ComFunction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EndDeviceFunction.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='amrAddress'>amrAddress: </label><div class='col-sm-8'><input id='amrAddress' class='form-control' type='text'{{#amrAddress}} value='{{amrAddress}}'{{/amrAddress}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='amrRouter'>amrRouter: </label><div class='col-sm-8'><input id='amrRouter' class='form-control' type='text'{{#amrRouter}} value='{{amrRouter}}'{{/amrRouter}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='direction'>direction: </label><div class='col-sm-8'><select id='direction' class='form-control'>{{#ComDirectionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ComDirectionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='technology'>technology: </label><div class='col-sm-8'><select id='technology' class='form-control'>{{#ComTechnologyKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ComTechnologyKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ComModule'>ComModule: </label><div class='col-sm-8'><input id='ComModule' class='form-control' type='text'{{#ComModule}} value='{{ComModule}}'{{/ComModule}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.PanDisplay;
                if (null == bucket)
                   cim_data.PanDisplay = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PanDisplay[this._id];
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

                base.export_element (obj, "PanDisplay", "confirmationRequired", base.from_boolean, fields);
                base.export_element (obj, "PanDisplay", "priority", base.from_string, fields);
                base.export_element (obj, "PanDisplay", "textMessage", base.from_string, fields);
                base.export_element (obj, "PanDisplay", "transmissionMode", base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PanDisplay_collapse" aria-expanded="true" aria-controls="PanDisplay_collapse" style="margin-left: 10px;">PanDisplay</a></legend>
                    <div id="PanDisplay_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EndDeviceAction.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='confirmationRequired'>confirmationRequired: </label><div class='col-sm-8'><input id='confirmationRequired' class='form-check-input' type='checkbox'{{#confirmationRequired}} checked{{/confirmationRequired}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='priority'>priority: </label><div class='col-sm-8'><input id='priority' class='form-control' type='text'{{#priority}} value='{{priority}}'{{/priority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='textMessage'>textMessage: </label><div class='col-sm-8'><input id='textMessage' class='form-control' type='text'{{#textMessage}} value='{{textMessage}}'{{/textMessage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='transmissionMode'>transmissionMode: </label><div class='col-sm-8'><select id='transmissionMode' class='form-control'>{{#TransmissionModeKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/TransmissionModeKind}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
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
                this._id = template.id;
                var bucket = cim_data.PanDemandResponse;
                if (null == bucket)
                   cim_data.PanDemandResponse = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PanDemandResponse[this._id];
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

                base.export_element (obj, "PanDemandResponse", "appliance", base.from_string, fields);
                base.export_element (obj, "PanDemandResponse", "avgLoadAdjustment", base.from_string, fields);
                base.export_element (obj, "PanDemandResponse", "cancelControlMode", base.from_string, fields);
                base.export_element (obj, "PanDemandResponse", "cancelDateTime", base.from_datetime, fields);
                base.export_element (obj, "PanDemandResponse", "cancelNow", base.from_boolean, fields);
                base.export_element (obj, "PanDemandResponse", "coolingOffset", base.from_string, fields);
                base.export_element (obj, "PanDemandResponse", "coolingSetpoint", base.from_string, fields);
                base.export_element (obj, "PanDemandResponse", "criticalityLevel", base.from_string, fields);
                base.export_element (obj, "PanDemandResponse", "dutyCycle", base.from_string, fields);
                base.export_element (obj, "PanDemandResponse", "enrollmentGroup", base.from_string, fields);
                base.export_element (obj, "PanDemandResponse", "heatingOffset", base.from_string, fields);
                base.export_element (obj, "PanDemandResponse", "heatingSetpoint", base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PanDemandResponse_collapse" aria-expanded="true" aria-controls="PanDemandResponse_collapse" style="margin-left: 10px;">PanDemandResponse</a></legend>
                    <div id="PanDemandResponse_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EndDeviceAction.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='appliance'>appliance: </label><div class='col-sm-8'><input id='appliance' class='form-control' type='text'{{#appliance}} value='{{appliance}}'{{/appliance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='avgLoadAdjustment'>avgLoadAdjustment: </label><div class='col-sm-8'><input id='avgLoadAdjustment' class='form-control' type='text'{{#avgLoadAdjustment}} value='{{avgLoadAdjustment}}'{{/avgLoadAdjustment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='cancelControlMode'>cancelControlMode: </label><div class='col-sm-8'><input id='cancelControlMode' class='form-control' type='text'{{#cancelControlMode}} value='{{cancelControlMode}}'{{/cancelControlMode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='cancelDateTime'>cancelDateTime: </label><div class='col-sm-8'><input id='cancelDateTime' class='form-control' type='text'{{#cancelDateTime}} value='{{cancelDateTime}}'{{/cancelDateTime}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='cancelNow'>cancelNow: </label><div class='col-sm-8'><input id='cancelNow' class='form-check-input' type='checkbox'{{#cancelNow}} checked{{/cancelNow}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='coolingOffset'>coolingOffset: </label><div class='col-sm-8'><input id='coolingOffset' class='form-control' type='text'{{#coolingOffset}} value='{{coolingOffset}}'{{/coolingOffset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='coolingSetpoint'>coolingSetpoint: </label><div class='col-sm-8'><input id='coolingSetpoint' class='form-control' type='text'{{#coolingSetpoint}} value='{{coolingSetpoint}}'{{/coolingSetpoint}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='criticalityLevel'>criticalityLevel: </label><div class='col-sm-8'><input id='criticalityLevel' class='form-control' type='text'{{#criticalityLevel}} value='{{criticalityLevel}}'{{/criticalityLevel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dutyCycle'>dutyCycle: </label><div class='col-sm-8'><input id='dutyCycle' class='form-control' type='text'{{#dutyCycle}} value='{{dutyCycle}}'{{/dutyCycle}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='enrollmentGroup'>enrollmentGroup: </label><div class='col-sm-8'><input id='enrollmentGroup' class='form-control' type='text'{{#enrollmentGroup}} value='{{enrollmentGroup}}'{{/enrollmentGroup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='heatingOffset'>heatingOffset: </label><div class='col-sm-8'><input id='heatingOffset' class='form-control' type='text'{{#heatingOffset}} value='{{heatingOffset}}'{{/heatingOffset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='heatingSetpoint'>heatingSetpoint: </label><div class='col-sm-8'><input id='heatingSetpoint' class='form-control' type='text'{{#heatingSetpoint}} value='{{heatingSetpoint}}'{{/heatingSetpoint}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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
                this._id = template.id;
                var bucket = cim_data.PanPricing;
                if (null == bucket)
                   cim_data.PanPricing = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PanPricing[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = EndDeviceAction.prototype.parse.call (this, context, sub);
                obj.cls = "PanPricing";
                base.parse_element (/<cim:PanPricing.providerID>([\s\S]*?)<\/cim:PanPricing.providerID>/g, obj, "providerID", base.to_string, sub, context);

                var bucket = context.parsed.PanPricing;
                if (null == bucket)
                   context.parsed.PanPricing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = EndDeviceAction.prototype.export.call (this, obj, false);

                base.export_element (obj, "PanPricing", "providerID", base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PanPricing_collapse" aria-expanded="true" aria-controls="PanPricing_collapse" style="margin-left: 10px;">PanPricing</a></legend>
                    <div id="PanPricing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EndDeviceAction.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='providerID'>providerID: </label><div class='col-sm-8'><input id='providerID' class='form-control' type='text'{{#providerID}} value='{{providerID}}'{{/providerID}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.IntervalReading;
                if (null == bucket)
                   cim_data.IntervalReading = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.IntervalReading[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = BaseReading.prototype.parse.call (this, context, sub);
                obj.cls = "IntervalReading";

                var bucket = context.parsed.IntervalReading;
                if (null == bucket)
                   context.parsed.IntervalReading = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = BaseReading.prototype.export.call (this, obj, false);

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#IntervalReading_collapse" aria-expanded="true" aria-controls="IntervalReading_collapse" style="margin-left: 10px;">IntervalReading</a></legend>
                    <div id="IntervalReading_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + BaseReading.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.Reading;
                if (null == bucket)
                   cim_data.Reading = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Reading[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = BaseReading.prototype.parse.call (this, context, sub);
                obj.cls = "Reading";
                base.parse_attribute (/<cim:Reading.reason\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "reason", sub, context);
                base.parse_attribute (/<cim:Reading.ReadingType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReadingType", sub, context);

                var bucket = context.parsed.Reading;
                if (null == bucket)
                   context.parsed.Reading = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = BaseReading.prototype.export.call (this, obj, false);

                base.export_element (obj, "Reading", "reason", base.from_string, fields);
                base.export_attribute (obj, "Reading", "ReadingType", fields);
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
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ReadingReasonKind = []; if (!obj.reason) obj.ReadingReasonKind.push ({ id: '', selected: true}); for (var property in ReadingReasonKind) obj.ReadingReasonKind.push ({ id: property, selected: obj.reason && obj.reason.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ReadingReasonKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Reading_collapse" aria-expanded="true" aria-controls="Reading_collapse" style="margin-left: 10px;">Reading</a></legend>
                    <div id="Reading_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + BaseReading.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='reason'>reason: </label><div class='col-sm-8'><select id='reason' class='form-control'>{{#ReadingReasonKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ReadingReasonKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ReadingType'>ReadingType: </label><div class='col-sm-8'><input id='ReadingType' class='form-control' type='text'{{#ReadingType}} value='{{ReadingType}}'{{/ReadingType}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.Meter;
                if (null == bucket)
                   cim_data.Meter = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Meter[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = EndDevice.prototype.parse.call (this, context, sub);
                obj.cls = "Meter";
                base.parse_element (/<cim:Meter.formNumber>([\s\S]*?)<\/cim:Meter.formNumber>/g, obj, "formNumber", base.to_string, sub, context);

                var bucket = context.parsed.Meter;
                if (null == bucket)
                   context.parsed.Meter = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = EndDevice.prototype.export.call (this, obj, false);

                base.export_element (obj, "Meter", "formNumber", base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Meter_collapse" aria-expanded="true" aria-controls="Meter_collapse" style="margin-left: 10px;">Meter</a></legend>
                    <div id="Meter_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EndDevice.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='formNumber'>formNumber: </label><div class='col-sm-8'><input id='formNumber' class='form-control' type='text'{{#formNumber}} value='{{formNumber}}'{{/formNumber}}></div></div>
                    </div>
                    <fieldset>
                    `
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