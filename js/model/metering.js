/**
 * @fileOverview Package Metering CIM model.
 * @name model/metering
 * @author Derrick Oswald
 * @version 1.0
 */
define
(
    ["model/base", "model/assets", "model/common", "model/core", "model/meas"],
    /**
     * @summary Package Metering CIM model.
     * @description
     * @name model/metering
     * @exports model/metering
     * @version 1.0
     */
    function (base, assets, common, core, meas)
    {

        /*
         * Package Metering
         */

        /**
         * Parse a BaseReading.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.BaseReading - the list of BaseReading elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_BaseReading (context, sub)
        {
            var obj;
            var readings;

            obj = meas.parse_MeasurementValue (context, sub);
            obj.cls = "BaseReading";
            obj.reportedDateTime = base.parse_element (/<cim:BaseReading.reportedDateTime>([\s\S]*?)<\/cim:BaseReading.reportedDateTime>/g, sub, context, true);
            obj.source = base.parse_element (/<cim:BaseReading.source>([\s\S]*?)<\/cim:BaseReading.source>/g, sub, context, true);
            obj.value = base.parse_element (/<cim:BaseReading.value>([\s\S]*?)<\/cim:BaseReading.value>/g, sub, context, true);
            obj.timePeriod = base.parse_attribute (/<cim:BaseReading.timePeriod\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            readings = context.parsed.BaseReading;
            if (null == readings)
                context.parsed.BaseReading = readings = {};
            readings[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Channel.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Channel - the list of Channel elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_Channel (context, sub)
        {
            var obj;
            var channels;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "Channel";
            obj.isVirtual = base.parse_element (/<cim:Channel.isVirtual>([\s\S]*?)<\/cim:Channel.isVirtual>/g, sub, context, true);
            obj.ReadingType = base.parse_attribute (/<cim:Channel.ReadingType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.Register = base.parse_attribute (/<cim:Channel.Register\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            channels = context.parsed.Channel;
            if (null == channels)
                context.parsed.Channel = channels = {};
            channels[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a ComFunction.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ComFunction - the list of ComFunction elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_ComFunction (context, sub)
        {
            var obj;
            var functions;

            obj = parse_EndDeviceFunction (context, sub);
            obj.cls = "ComFunction";
            obj.amrAddress = base.parse_element (/<cim:ComFunction.type>([\s\S]*?)<\/cim:ComFunction.type>/g, sub, context, true);
            obj.amrRouter = base.parse_element (/<cim:ComFunction.amrRouter>([\s\S]*?)<\/cim:ComFunction.amrRouter>/g, sub, context, true);
            obj.direction = base.parse_attribute (/<cim:ComFunction.direction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.technology = base.parse_attribute (/<cim:ComFunction.technology\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ComModule = base.parse_attribute (/<cim:ComFunction.ComModule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            functions = context.parsed.ComFunction;
            if (null == functions)
                context.parsed.ComFunction = functions = {};
            functions[obj.id] = obj;

            return (obj);
        }


        /**
         * Parse a ComModule.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ComModule - the list of ComModule elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_ComModule (context, sub)
        {
            var obj;
            var modules;

            obj = assets.parse_Asset (context, sub);
            obj.cls = "ComModule";
            obj.amrSystem = base.parse_element (/<cim:ComModule.amrSystem>([\s\S]*?)<\/cim:ComModule.amrSystem>/g, sub, context, true);
            obj.supportsAutonomousDst = base.parse_element (/<cim:ComModule.supportsAutonomousDst>([\s\S]*?)<\/cim:ComModule.supportsAutonomousDst>/g, sub, context, true);
            obj.timeZoneOffset = base.parse_element (/<cim:ComModule.timeZoneOffset>([\s\S]*?)<\/cim:ComModule.amrSystem>/g, sub, context, true);
            modules = context.parsed.ComModule;
            if (null == modules)
                context.parsed.ComModule = modules = {};
            modules[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a ControlledAppliance.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ControlledAppliance - the list of ControlledAppliance elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_ControlledAppliance (context, sub)
        {
            var obj;
            var appliances;

            obj = base.parse_Element (context, sub);
            obj.cls = "ControlledAppliance";
            obj.isElectricVehicle = base.parse_element (/<cim:ControlledAppliance.isElectricVehicle>([\s\S]*?)<\/cim:ControlledAppliance.isElectricVehicle>/g, sub, context, true);
            obj.isExteriorLighting = base.parse_element (/<cim:ControlledAppliance.isExteriorLighting>([\s\S]*?)<\/cim:ControlledAppliance.isExteriorLighting>/g, sub, context, true);
            obj.isGenerationSystem = base.parse_element (/<cim:ControlledAppliance.isGenerationSystem>([\s\S]*?)<\/cim:ControlledAppliance.isGenerationSystem>/g, sub, context, true);
            obj.isHvacCompressorOrFurnace = base.parse_element (/<cim:ControlledAppliance.isHvacCompressorOrFurnace>([\s\S]*?)<\/cim:ControlledAppliance.isHvacCompressorOrFurnace>/g, sub, context, true);
            obj.isInteriorLighting = base.parse_element (/<cim:ControlledAppliance.isInteriorLighting>([\s\S]*?)<\/cim:ControlledAppliance.isInteriorLighting>/g, sub, context, true);
            obj.isIrrigationPump = base.parse_element (/<cim:ControlledAppliance.isIrrigationPump>([\s\S]*?)<\/cim:ControlledAppliance.isIrrigationPump>/g, sub, context, true);
            obj.isManagedCommercialIndustrialLoad = base.parse_element (/<cim:ControlledAppliance.isManagedCommercialIndustrialLoad>([\s\S]*?)<\/cim:ControlledAppliance.isManagedCommercialIndustrialLoad>/g, sub, context, true);
            obj.isPoolPumpSpaJacuzzi = base.parse_element (/<cim:ControlledAppliance.isPoolPumpSpaJacuzzi>([\s\S]*?)<\/cim:ControlledAppliance.isPoolPumpSpaJacuzzi>/g, sub, context, true);
            obj.isSimpleMiscLoad = base.parse_element (/<cim:ControlledAppliance.isSimpleMiscLoad>([\s\S]*?)<\/cim:ControlledAppliance.isSimpleMiscLoad>/g, sub, context, true);
            obj.isSmartAppliance = base.parse_element (/<cim:ControlledAppliance.isSmartAppliance>([\s\S]*?)<\/cim:ControlledAppliance.isSmartAppliance>/g, sub, context, true);
            obj.isStripAndBaseboardHeater = base.parse_element (/<cim:ControlledAppliance.isStripAndBaseboardHeater>([\s\S]*?)<\/cim:ControlledAppliance.isStripAndBaseboardHeater>/g, sub, context, true);
            obj.isWaterHeater = base.parse_element (/<cim:ControlledAppliance.isWaterHeater>([\s\S]*?)<\/cim:ControlledAppliance.isWaterHeater>/g, sub, context, true);
            appliances = context.parsed.ControlledAppliance;
            if (null == appliances)
                context.parsed.ControlledAppliance = appliances = {};
            appliances[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a DemandResponseProgram.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.DemandResponseProgram - the list of DemandResponseProgram elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_DemandResponseProgram (context, sub)
        {
            var obj;
            var programs;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "DemandResponseProgram";
            obj.type = base.parse_element (/<cim:DemandResponseProgram.type>([\s\S]*?)<\/cim:DemandResponseProgram.type>/g, sub, context, true);
            obj.validityInterval = base.parse_attribute (/<cim:DemandResponseProgram.validityInterval\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            programs = context.parsed.DemandResponseProgram;
            if (null == programs)
                context.parsed.DemandResponseProgram = programs = {};
            programs[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse an EndDevice.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.EndDevice - the list of EndDevice elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_EndDevice (context, sub)
        {
            var obj;
            var devices;

            obj = assets.parse_AssetContainer (context, sub);
            obj.cls = "EndDevice";
            obj.amrSystem = base.parse_element (/<cim:EndDevice.amrSystem>([\s\S]*?)<\/cim:EndDevice.amrSystem>/g, sub, context, true);
            obj.installCode = base.parse_element (/<cim:EndDevice.installCode>([\s\S]*?)<\/cim:EndDevice.installCode>/g, sub, context, true);
            obj.isPan = base.parse_element (/<cim:EndDevice.isPan>([\s\S]*?)<\/cim:EndDevice.isPan>/g, sub, context, true);
            obj.isVirtual = base.parse_element (/<cim:EndDevice.isVirtual>([\s\S]*?)<\/cim:EndDevice.isVirtual>/g, sub, context, true);
            obj.timeZoneOffset = base.parse_element (/<cim:EndDevice.timeZoneOffset>([\s\S]*?)<\/cim:EndDevice.timeZoneOffset>/g, sub, context, true);
            obj.Customer = base.parse_attribute (/<cim:EndDevice.Customer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.EndDeviceInfo = base.parse_attribute (/<cim:EndDevice.EndDeviceInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ServiceLocation = base.parse_attribute (/<cim:EndDevice.ServiceLocation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.UsagePoint = base.parse_attribute (/<cim:EndDevice.UsagePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            devices = context.parsed.EndDevice;
            if (null == devices)
                context.parsed.EndDevice = devices = {};
            devices[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse an EndDeviceAction.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.EndDeviceAction - the list of EndDeviceAction elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_EndDeviceAction (context, sub)
        {
            var obj;
            var actions;

            obj = base.parse_Element (context, sub);
            obj.cls = "EndDeviceAction";
            obj.command = base.parse_element (/<cim:EndDeviceAction.command>([\s\S]*?)<\/cim:EndDeviceAction.command>/g, sub, context, true);
            obj.duration = base.parse_element (/<cim:EndDeviceAction.duration>([\s\S]*?)<\/cim:EndDeviceAction.duration>/g, sub, context, true);
            obj.durationIndefinite = base.parse_element (/<cim:EndDeviceAction.durationIndefinite>([\s\S]*?)<\/cim:EndDeviceAction.durationIndefinite>/g, sub, context, true);
            obj.startDateTime = base.parse_element (/<cim:EndDeviceAction.startDateTime>([\s\S]*?)<\/cim:EndDeviceAction.startDateTime>/g, sub, context, true);
            obj.EndDeviceControl = base.parse_attribute (/<cim:EndDeviceAction.EndDeviceControl\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            actions = context.parsed.EndDeviceAction;
            if (null == actions)
                context.parsed.EndDeviceAction = actions = {};
            actions[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse an EndDeviceCapability.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.EndDeviceCapability - the list of EndDeviceCapability elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_EndDeviceCapability (context, sub)
        {
            var obj;
            var capabilities;

            obj = base.parse_Element (context, sub);
            obj.cls = "EndDeviceCapability";
            obj.autonomousDst = base.parse_element (/<cim:EndDeviceCapability.autonomousDst>([\s\S]*?)<\/cim:EndDeviceCapability.autonomousDst>/g, sub, context, true);
            obj.communication = base.parse_element (/<cim:EndDeviceCapability.communication>([\s\S]*?)<\/cim:EndDeviceCapability.communication>/g, sub, context, true);
            obj.connectDisconnect = base.parse_element (/<cim:EndDeviceCapability.connectDisconnect>([\s\S]*?)<\/cim:EndDeviceCapability.connectDisconnect>/g, sub, context, true);
            obj.demandResponse = base.parse_element (/<cim:EndDeviceCapability.demandResponse>([\s\S]*?)<\/cim:EndDeviceCapability.demandResponse>/g, sub, context, true);
            obj.electricMetering = base.parse_element (/<cim:EndDeviceCapability.electricMetering>([\s\S]*?)<\/cim:EndDeviceCapability.electricMetering>/g, sub, context, true);
            obj.gasMetering = base.parse_element (/<cim:EndDeviceCapability.gasMetering>([\s\S]*?)<\/cim:EndDeviceCapability.gasMetering>/g, sub, context, true);
            obj.metrology = base.parse_element (/<cim:EndDeviceCapability.metrology>([\s\S]*?)<\/cim:EndDeviceCapability.metrology>/g, sub, context, true);
            obj.onRequestRead = base.parse_element (/<cim:EndDeviceCapability.onRequestRead>([\s\S]*?)<\/cim:EndDeviceCapability.onRequestRead>/g, sub, context, true);
            obj.outageHistory = base.parse_element (/<cim:EndDeviceCapability.outageHistory>([\s\S]*?)<\/cim:EndDeviceCapability.outageHistory>/g, sub, context, true);
            obj.pressureCompensation = base.parse_element (/<cim:EndDeviceCapability.pressureCompensation>([\s\S]*?)<\/cim:EndDeviceCapability.pressureCompensation>/g, sub, context, true);
            obj.pricingInfo = base.parse_element (/<cim:EndDeviceCapability.pricingInfo>([\s\S]*?)<\/cim:EndDeviceCapability.pricingInfo>/g, sub, context, true);
            obj.pulseOutput = base.parse_element (/<cim:EndDeviceCapability.pulseOutput>([\s\S]*?)<\/cim:EndDeviceCapability.pulseOutput>/g, sub, context, true);
            obj.relaysProgramming = base.parse_element (/<cim:EndDeviceCapability.relaysProgramming>([\s\S]*?)<\/cim:EndDeviceCapability.relaysProgramming>/g, sub, context, true);
            obj.reverseFlow = base.parse_element (/<cim:EndDeviceCapability.reverseFlow>([\s\S]*?)<\/cim:EndDeviceCapability.reverseFlow>/g, sub, context, true);
            obj.superCompressibilityCompensation = base.parse_element (/<cim:EndDeviceCapability.superCompressibilityCompensation>([\s\S]*?)<\/cim:EndDeviceCapability.superCompressibilityCompensation>/g, sub, context, true);
            obj.temperatureCompensation = base.parse_element (/<cim:EndDeviceCapability.temperatureCompensation>([\s\S]*?)<\/cim:EndDeviceCapability.temperatureCompensation>/g, sub, context, true);
            obj.textMessage = base.parse_element (/<cim:EndDeviceCapability.textMessage>([\s\S]*?)<\/cim:EndDeviceCapability.textMessage>/g, sub, context, true);
            obj.waterMetering = base.parse_element (/<cim:EndDeviceCapability.waterMetering>([\s\S]*?)<\/cim:EndDeviceCapability.waterMetering>/g, sub, context, true);
            capabilities = context.parsed.EndDeviceCapability;
            if (null == capabilities)
                context.parsed.EndDeviceCapability = capabilities = {};
            capabilities[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse an EndDeviceControl.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.EndDeviceControl - the list of EndDeviceControl elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_EndDeviceControl (context, sub)
        {
            var obj;
            var controls;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "EndDeviceControl";
            obj.drProgramLevel = base.parse_element (/<cim:EndDeviceControl.drProgramLevel>([\s\S]*?)<\/cim:EndDeviceControl.drProgramLevel>/g, sub, context, true);
            obj.drProgramMandatory = base.parse_element (/<cim:EndDeviceControl.drProgramMandatory>([\s\S]*?)<\/cim:EndDeviceControl.drProgramMandatory>/g, sub, context, true);
            obj.issuerID = base.parse_element (/<cim:EndDeviceControl.issuerID>([\s\S]*?)<\/cim:EndDeviceControl.issuerID>/g, sub, context, true);
            obj.issuerTrackingID = base.parse_element (/<cim:EndDeviceControl.issuerTrackingID>([\s\S]*?)<\/cim:EndDeviceControl.issuerTrackingID>/g, sub, context, true);
            obj.reason = base.parse_element (/<cim:EndDeviceControl.reason>([\s\S]*?)<\/cim:EndDeviceControl.reason>/g, sub, context, true);
            obj.EndDeviceAction = base.parse_attribute (/<cim:EndDeviceControl.EndDeviceAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.EndDeviceControlType = base.parse_attribute (/<cim:EndDeviceControl.EndDeviceControlType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.priceSignal = base.parse_attribute (/<cim:EndDeviceControl.priceSignal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.primaryDeviceTiming = base.parse_attribute (/<cim:EndDeviceControl.primaryDeviceTiming\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.scheduledInterval = base.parse_attribute (/<cim:EndDeviceControl.scheduledInterval\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.secondaryDeviceTiming = base.parse_attribute (/<cim:EndDeviceControl.secondaryDeviceTiming\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            controls = context.parsed.EndDeviceControl;
            if (null == controls)
                context.parsed.EndDeviceControl = controls = {};
            controls[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse an EndDeviceControlType.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.EndDeviceControlType - the list of EndDeviceControlType elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_EndDeviceControlType (context, sub)
        {
            var obj;
            var types;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "EndDeviceControlType";
            obj.domain = base.parse_element (/<cim:EndDeviceControlType.domain>([\s\S]*?)<\/cim:EndDeviceControlType.domain>/g, sub, context, true);
            obj.eventOrAction = base.parse_element (/<cim:EndDeviceControlType.eventOrAction>([\s\S]*?)<\/cim:EndDeviceControlType.eventOrAction>/g, sub, context, true);
            obj.subDomain = base.parse_element (/<cim:EndDeviceControlType.subDomain>([\s\S]*?)<\/cim:EndDeviceControlType.subDomain>/g, sub, context, true);
            obj.type = base.parse_element (/<cim:EndDeviceControlType.type>([\s\S]*?)<\/cim:EndDeviceControlType.type>/g, sub, context, true);
            types = context.parsed.EndDeviceControlType;
            if (null == types)
                context.parsed.EndDeviceControlType = types = {};
            types[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse an EndDeviceEvent.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.EndDeviceEvent - the list of EndDeviceEvent elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_EndDeviceEvent (context, sub)
        {
            var obj;
            var events;

            obj = common.parse_ActivityRecord (context, sub);
            obj.cls = "EndDeviceEvent";
            obj.issuerID = base.parse_element (/<cim:EndDeviceEvent.issuerID>([\s\S]*?)<\/cim:EndDeviceEvent.issuerID>/g, sub, context, true);
            obj.issuerTrackingID = base.parse_element (/<cim:EndDeviceEvent.issuerTrackingID>([\s\S]*?)<\/cim:EndDeviceEvent.issuerTrackingID>/g, sub, context, true);
            obj.userID = base.parse_element (/<cim:EndDeviceEvent.userID>([\s\S]*?)<\/cim:EndDeviceEvent.userID>/g, sub, context, true);
            obj.EndDevice = base.parse_attribute (/<cim:EndDeviceEvent.EndDevice\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.EndDeviceEventType = base.parse_attribute (/<cim:EndDeviceEvent.EndDeviceEventType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.MeterReading = base.parse_attribute (/<cim:EndDeviceEvent.MeterReading\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.UsagePoint = base.parse_attribute (/<cim:EndDeviceEvent.UsagePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            events = context.parsed.EndDeviceEvent;
            if (null == events)
                context.parsed.EndDeviceEvent = events = {};
            events[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse an EndDeviceEventDetail.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.EndDeviceEventDetail - the list of EndDeviceEventDetail elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_EndDeviceEventDetail (context, sub)
        {
            var obj;
            var details;

            obj = base.parse_Element (context, sub);
            obj.cls = "EndDeviceEventDetail";
            obj.name = base.parse_element (/<cim:EndDeviceEventDetail.name>([\s\S]*?)<\/cim:EndDeviceEventDetail.name>/g, sub, context, true);
            obj.EndDeviceEvent = base.parse_attribute (/<cim:EndDeviceEventDetail.EndDeviceEvent\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.value = base.parse_attribute (/<cim:EndDeviceEventDetail.value\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            details = context.parsed.EndDeviceEventDetail;
            if (null == details)
                context.parsed.EndDeviceEventDetail = details = {};
            details[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse an EndDeviceEventType.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.EndDeviceEventType - the list of EndDeviceEventType elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_EndDeviceEventType (context, sub)
        {
            var obj;
            var types;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "EndDeviceEventType";
            obj.domain = base.parse_element (/<cim:EndDeviceEventType.domain>([\s\S]*?)<\/cim:EndDeviceEventType.domain>/g, sub, context, true);
            obj.eventOrAction = base.parse_element (/<cim:EndDeviceEventType.eventOrAction>([\s\S]*?)<\/cim:EndDeviceEventType.eventOrAction>/g, sub, context, true);
            obj.subDomain = base.parse_element (/<cim:EndDeviceEventType.subDomain>([\s\S]*?)<\/cim:EndDeviceEventType.subDomain>/g, sub, context, true);
            obj.type = base.parse_element (/<cim:EndDeviceEventType.type>([\s\S]*?)<\/cim:EndDeviceEventType.type>/g, sub, context, true);
            types = context.parsed.EndDeviceEventType;
            if (null == types)
                context.parsed.EndDeviceEventType = types = {};
            types[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse an EndDeviceFunction.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.EndDeviceFunction - the list of EndDeviceFunction elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_EndDeviceFunction (context, sub)
        {
            var obj;
            var functions;

            obj = assets.parse_AssetFunction (context, sub);
            obj.cls = "EndDeviceFunction";
            obj.enabled = base.parse_element (/<cim:EndDeviceFunction.enabled>([\s\S]*?)<\/cim:EndDeviceFunction.enabled>/g, sub, context, true);
            obj.EndDevice = base.parse_attribute (/<cim:EndDeviceFunction.EndDevice\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            functions = context.parsed.EndDeviceFunction;
            if (null == functions)
                context.parsed.EndDeviceFunction = functions = {};
            functions[obj.id] = obj;

            return (obj);
        }


        /**
         * Parse an EndDeviceGroup.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.EndDeviceGroup - the list of EndDeviceGroup elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_EndDeviceGroup (context, sub)
        {
            var obj;
            var groups;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "EndDeviceGroup";
            obj.type = base.parse_element (/<cim:EndDeviceGroup.type>([\s\S]*?)<\/cim:EndDeviceGroup.type>/g, sub, context, true);
            groups = context.parsed.EndDeviceGroup;
            if (null == groups)
                context.parsed.EndDeviceGroup = groups = {};
            groups[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse an EndDeviceInfo.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.EndDeviceInfo - the list of EndDeviceInfo elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_EndDeviceInfo (context, sub)
        {
            var obj;
            var infos;

            obj = assets.parse_AssetInfo (context, sub);
            obj.cls = "EndDeviceInfo";
            obj.isSolidState = base.parse_element (/<cim:EndDeviceInfo.isSolidState>([\s\S]*?)<\/cim:EndDeviceInfo.isSolidState>/g, sub, context, true);
            obj.phaseCount = base.parse_element (/<cim:EndDeviceInfo.phaseCount>([\s\S]*?)<\/cim:EndDeviceInfo.phaseCount>/g, sub, context, true);
            obj.ratedCurrent = base.parse_element (/<cim:EndDeviceInfo.ratedCurrent>([\s\S]*?)<\/cim:EndDeviceInfo.ratedCurrent>/g, sub, context, true);
            obj.ratedVoltage = base.parse_element (/<cim:EndDeviceInfo.ratedVoltage>([\s\S]*?)<\/cim:EndDeviceInfo.ratedVoltage>/g, sub, context, true);
            obj.capability = base.parse_attribute (/<cim:EndDeviceInfo.capability\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            infos = context.parsed.EndDeviceInfo;
            if (null == infos)
                context.parsed.EndDeviceInfo = infos = {};
            infos[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse an EndDeviceTiming.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.EndDeviceTiming - the list of EndDeviceTiming elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_EndDeviceTiming (context, sub)
        {
            var obj;
            var timings;

            obj = base.parse_Element (context, sub);
            obj.cls = "EndDeviceTiming";
            obj.duration = base.parse_element (/<cim:EndDeviceTiming.duration>([\s\S]*?)<\/cim:EndDeviceTiming.duration>/g, sub, context, true);
            obj.durationIndefinite = base.parse_element (/<cim:EndDeviceTiming.durationIndefinite>([\s\S]*?)<\/cim:EndDeviceTiming.durationIndefinite>/g, sub, context, true);
            obj.randomisation = base.parse_attribute (/<cim:EndDeviceTiming.randomisation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.interval = base.parse_attribute (/<cim:EndDeviceTiming.interval\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            timings = context.parsed.EndDeviceTiming;
            if (null == timings)
                context.parsed.EndDeviceTiming = timings = {};
            timings[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse an IntervalBlock.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.IntervalBlock - the list of IntervalBlock elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_IntervalBlock (context, sub)
        {
            var obj;
            var blocks;

            obj = base.parse_Element (context, sub);
            obj.cls = "IntervalBlock";
            obj.MeterReading = base.parse_attribute (/<cim:IntervalBlock.MeterReading\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.PendingCalculation = base.parse_attribute (/<cim:IntervalBlock.PendingCalculation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ReadingType = base.parse_attribute (/<cim:IntervalBlock.ReadingType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            blocks = context.parsed.IntervalBlock;
            if (null == blocks)
                context.parsed.IntervalBlock = blocks = {};
            blocks[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse an IntervalReading.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.IntervalReading - the list of IntervalReading elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_IntervalReading (context, sub)
        {
            var obj;
            var readings;

            obj = parse_BaseReading (context, sub);
            obj.cls = "IntervalReading";
            readings = context.parsed.IntervalReading;
            if (null == readings)
                context.parsed.IntervalReading = readings = {};
            readings[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Meter.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Meter - the list of Meter elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_Meter (context, sub)
        {
            var obj;
            var meters;

            obj = parse_EndDevice (context, sub);
            obj.cls = "Meter";
            obj.formNumber = base.parse_element (/<cim:Meter.formNumber>([\s\S]*?)<\/cim:Meter.formNumber>/g, sub, context, true);
            meters = context.parsed.Meter;
            if (null == meters)
                context.parsed.Meter = meters = {};
            meters[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a MeterMultiplier.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.MeterMultiplier - the list of MeterMultiplier elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_MeterMultiplier (context, sub)
        {
            var obj;
            var multipliers;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "MeterMultiplier";
            obj.kind = base.parse_attribute (/<cim:MeterMultiplier.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.value = base.parse_element (/<cim:MeterMultiplier.value>([\s\S]*?)<\/cim:MeterMultiplier.value>/g, sub, context, true);
            obj.Meter = base.parse_attribute (/<cim:MeterMultiplier.Meter\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            multipliers = context.parsed.MeterMultiplier;
            if (null == multipliers)
                context.parsed.MeterMultiplier = multipliers = {};
            multipliers[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a MeterReading.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.MeterReading - the list of MeterReading elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_MeterReading (context, sub)
        {
            var obj;
            var readings;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "MeterReading";
            obj.isCoincidentTrigger = base.parse_element (/<cim:MeterReading.isCoincidentTrigger>([\s\S]*?)<\/cim:MeterReading.isCoincidentTrigger>/g, sub, context, true);
            obj.CustomerAgreement = base.parse_attribute (/<cim:MeterReading.CustomerAgreement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.Meter = base.parse_attribute (/<cim:MeterReading.Meter\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.UsagePoint = base.parse_attribute (/<cim:MeterReading.UsagePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.valuesInterval = base.parse_attribute (/<cim:MeterReading.valuesInterval\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            readings = context.parsed.MeterReading;
            if (null == readings)
                context.parsed.MeterReading = readings = {};
            readings[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a MeterServiceWork.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.MeterServiceWork - the list of MeterServiceWork elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_MeterServiceWork (context, sub)
        {
            var obj;
            var works;

            obj = work.parse_Work (context, sub);
            obj.cls = "MeterServiceWork";
            obj.Meter = base.parse_attribute (/<cim:MeterServiceWork.Meter\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.OldMeter = base.parse_attribute (/<cim:MeterServiceWork.OldMeter\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.UsagePoint = base.parse_attribute (/<cim:MeterServiceWork.UsagePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            works = context.parsed.MeterServiceWork;
            if (null == works)
                context.parsed.MeterServiceWork = works = {};
            works[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a MetrologyRequirement.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.MetrologyRequirement - the list of MetrologyRequirement elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_MetrologyRequirement (context, sub)
        {
            var obj;
            var requirements;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "MetrologyRequirement";
            obj.reason = base.parse_attribute (/<cim:MetrologyRequirement.reason\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            requirements = context.parsed.MetrologyRequirement;
            if (null == requirements)
                context.parsed.MetrologyRequirement = requirements = {};
            requirements[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a PanDemandResponse.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.PanDemandResponse - the list of PanDemandResponse elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_PanDemandResponse (context, sub)
        {
            var obj;
            var responses;

            obj = parse_EndDeviceAction (context, sub);
            obj.cls = "PanDemandResponse";
            obj.avgLoadAdjustment = base.parse_element (/<cim:PanDemandResponse.avgLoadAdjustment>([\s\S]*?)<\/cim:PanDemandResponse.avgLoadAdjustment>/g, sub, context, true);
            obj.cancelControlMode = base.parse_element (/<cim:PanDemandResponse.cancelControlMode>([\s\S]*?)<\/cim:PanDemandResponse.cancelControlMode>/g, sub, context, true);
            obj.cancelDateTime = base.parse_element (/<cim:PanDemandResponse.cancelDateTime>([\s\S]*?)<\/cim:PanDemandResponse.cancelDateTime>/g, sub, context, true);
            obj.cancelNow = base.parse_element (/<cim:PanDemandResponse.cancelNow>([\s\S]*?)<\/cim:PanDemandResponse.cancelNow>/g, sub, context, true);
            obj.coolingOffset = base.parse_element (/<cim:PanDemandResponse.coolingOffset>([\s\S]*?)<\/cim:PanDemandResponse.coolingOffset>/g, sub, context, true);
            obj.coolingSetpoint = base.parse_element (/<cim:PanDemandResponse.coolingSetpoint>([\s\S]*?)<\/cim:PanDemandResponse.coolingSetpoint>/g, sub, context, true);
            obj.criticalityLevel = base.parse_element (/<cim:PanDemandResponse.criticalityLevel>([\s\S]*?)<\/cim:PanDemandResponse.criticalityLevel>/g, sub, context, true);
            obj.dutyCycle = base.parse_element (/<cim:PanDemandResponse.dutyCycle>([\s\S]*?)<\/cim:PanDemandResponse.dutyCycle>/g, sub, context, true);
            obj.enrollmentGroup = base.parse_element (/<cim:PanDemandResponse.enrollmentGroup>([\s\S]*?)<\/cim:PanDemandResponse.enrollmentGroup>/g, sub, context, true);
            obj.heatingOffset = base.parse_element (/<cim:PanDemandResponse.heatingOffset>([\s\S]*?)<\/cim:PanDemandResponse.heatingOffset>/g, sub, context, true);
            obj.heatingSetpoint = base.parse_element (/<cim:PanDemandResponse.heatingSetpoint>([\s\S]*?)<\/cim:PanDemandResponse.heatingSetpoint>/g, sub, context, true);
            obj.appliance = base.parse_attribute (/<cim:PanDemandResponse.appliance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            responses = context.parsed.PanDemandResponse;
            if (null == responses)
                context.parsed.PanDemandResponse = responses = {};
            responses[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a PanDisplay.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.PanDisplay - the list of PanDisplay elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_PanDisplay (context, sub)
        {
            var obj;
            var displays;

            obj = parse_EndDeviceAction (context, sub);
            obj.cls = "PanDisplay";
            obj.confirmationRequired = base.parse_element (/<cim:PanDisplay.confirmationRequired>([\s\S]*?)<\/cim:PanDisplay.confirmationRequired>/g, sub, context, true);
            obj.priority = base.parse_element (/<cim:PanDisplay.priority>([\s\S]*?)<\/cim:PanDisplay.priority>/g, sub, context, true);
            obj.textMessage = base.parse_element (/<cim:PanDisplay.textMessage>([\s\S]*?)<\/cim:PanDisplay.textMessage>/g, sub, context, true);
            obj.scalarFloat = base.parse_element (/<cim:PanDisplay.scalarFloat>([\s\S]*?)<\/cim:PanDisplay.scalarFloat>/g, sub, context, true);
            obj.transmissionMode = base.parse_attribute (/<cim:PanDisplay.transmissionMode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            displays = context.parsed.PanDisplay;
            if (null == displays)
                context.parsed.PanDisplay = displays = {};
            displays[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a PanPricing.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.PanPricing - the list of PanPricing elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_PanPricing (context, sub)
        {
            var obj;
            var pricings;

            obj = parse_EndDeviceAction (context, sub);
            obj.cls = "PanPricing";
            obj.providerID = base.parse_element (/<cim:PanPricing.providerID>([\s\S]*?)<\/cim:PanPricing.providerID>/g, sub, context, true);
            pricings = context.parsed.PanPricing;
            if (null == pricings)
                context.parsed.PanPricing = pricings = {};
            pricings[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a PanPricingDetail.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.PanPricingDetail - the list of PanPricingDetail elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_PanPricingDetail (context, sub)
        {
            var obj;
            var details;

            obj = base.parse_Element (context, sub);
            obj.cls = "PanPricingDetail";
            obj.alternateCostDelivered = base.parse_element (/<cim:PanPricingDetail.alternateCostDelivered>([\s\S]*?)<\/cim:PanPricingDetail.alternateCostDelivered>/g, sub, context, true);
            obj.alternateCostUnit = base.parse_element (/<cim:PanPricingDetail.alternateCostUnit>([\s\S]*?)<\/cim:PanPricingDetail.alternateCostUnit>/g, sub, context, true);
            obj.currentTimeDate = base.parse_element (/<cim:PanPricingDetail.currentTimeDate>([\s\S]*?)<\/cim:PanPricingDetail.currentTimeDate>/g, sub, context, true);
            obj.generationPrice = base.parse_element (/<cim:PanPricingDetail.generationPrice>([\s\S]*?)<\/cim:PanPricingDetail.generationPrice>/g, sub, context, true);
            obj.generationPriceRatio = base.parse_element (/<cim:PanPricingDetail.generationPriceRatio>([\s\S]*?)<\/cim:PanPricingDetail.generationPriceRatio>/g, sub, context, true);
            obj.price = base.parse_element (/<cim:PanPricingDetail.price>([\s\S]*?)<\/cim:PanPricingDetail.price>/g, sub, context, true);
            obj.priceRatio = base.parse_element (/<cim:PanPricingDetail.priceRatio>([\s\S]*?)<\/cim:PanPricingDetail.priceRatio>/g, sub, context, true);
            obj.priceTier = base.parse_element (/<cim:PanPricingDetail.priceTier>([\s\S]*?)<\/cim:PanPricingDetail.priceTier>/g, sub, context, true);
            obj.priceTierCount = base.parse_element (/<cim:PanPricingDetail.priceTierCount>([\s\S]*?)<\/cim:PanPricingDetail.priceTierCount>/g, sub, context, true);
            obj.priceTierLabel = base.parse_element (/<cim:PanPricingDetail.priceTierLabel>([\s\S]*?)<\/cim:PanPricingDetail.priceTierLabel>/g, sub, context, true);
            obj.rateLabel = base.parse_element (/<cim:PanPricingDetail.rateLabel>([\s\S]*?)<\/cim:PanPricingDetail.rateLabel>/g, sub, context, true);
            obj.registerTier = base.parse_element (/<cim:PanPricingDetail.registerTier>([\s\S]*?)<\/cim:PanPricingDetail.registerTier>/g, sub, context, true);
            obj.unitOfMeasure = base.parse_element (/<cim:PanPricingDetail.unitOfMeasure>([\s\S]*?)<\/cim:PanPricingDetail.unitOfMeasure>/g, sub, context, true);
            obj.PanPricing = base.parse_attribute (/<cim:PanPricingDetail.PanPricing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            details = context.parsed.PanPricingDetail;
            if (null == details)
                context.parsed.PanPricingDetail = details = {};
            details[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a PendingCalculation.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.PendingCalculation - the list of PendingCalculation elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_PendingCalculation (context, sub)
        {
            var obj;
            var calculations;

            obj = base.parse_Element (context, sub);
            obj.cls = "PendingCalculation";
            obj.multiplyBeforeAdd = base.parse_element (/<cim:PendingCalculation.multiplyBeforeAdd>([\s\S]*?)<\/cim:PendingCalculation.multiplyBeforeAdd>/g, sub, context, true);
            obj.offset = base.parse_element (/<cim:PendingCalculation.offset>([\s\S]*?)<\/cim:PendingCalculation.offset>/g, sub, context, true);
            obj.scalarDenominator = base.parse_element (/<cim:PendingCalculation.scalarDenominator>([\s\S]*?)<\/cim:PendingCalculation.scalarDenominator>/g, sub, context, true);
            obj.scalarFloat = base.parse_element (/<cim:PendingCalculation.scalarFloat>([\s\S]*?)<\/cim:PendingCalculation.scalarFloat>/g, sub, context, true);
            obj.scalarNumerator = base.parse_element (/<cim:PendingCalculation.scalarNumerator>([\s\S]*?)<\/cim:PendingCalculation.scalarNumerator>/g, sub, context, true);
            obj.ReadingType = base.parse_attribute (/<cim:PendingCalculation.ReadingType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            calculations = context.parsed.PendingCalculation;
            if (null == calculations)
                context.parsed.PendingCalculation = calculations = {};
            calculations[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a RationalNumber.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.RationalNumber - the list of RationalNumber elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_RationalNumber (context, sub)
        {
            var obj;
            var numbers;

            obj = base.parse_Element (context, sub);
            obj.cls = "RationalNumber";
            obj.denominator = base.parse_element (/<cim:RationalNumber.denominator>([\s\S]*?)<\/cim:RationalNumber.denominator>/g, sub, context, true);
            obj.numerator = base.parse_element (/<cim:RationalNumber.numerator>([\s\S]*?)<\/cim:RationalNumber.numerator>/g, sub, context, true);
            numbers = context.parsed.RationalNumber;
            if (null == numbers)
                context.parsed.RationalNumber = numbers = {};
            numbers[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Reading.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Reading - the list of Reading elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_Reading (context, sub)
        {
            var obj;
            var readings;

            obj = parse_BaseReading (context, sub);
            obj.cls = "Reading";
            obj.reason = base.parse_attribute (/<cim:Reading.reason\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ReadingType = base.parse_attribute (/<cim:Reading.ReadingType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            readings = context.parsed.Reading;
            if (null == readings)
                context.parsed.Reading = readings = {};
            readings[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a ReadingInterharmonic.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ReadingInterharmonic - the list of ReadingInterharmonic elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_ReadingInterharmonic (context, sub)
        {
            var obj;
            var interharmonics;

            obj = base.parse_Element (context, sub);
            obj.cls = "ReadingInterharmonic";
            obj.denominator = base.parse_element (/<cim:ReadingInterharmonic.denominator>([\s\S]*?)<\/cim:ReadingInterharmonic.denominator>/g, sub, context, true);
            obj.numerator = base.parse_element (/<cim:ReadingInterharmonic.numerator>([\s\S]*?)<\/cim:ReadingInterharmonic.numerator>/g, sub, context, true);
            interharmonics = context.parsed.ReadingInterharmonic;
            if (null == interharmonics)
                context.parsed.ReadingInterharmonic = interharmonics = {};
            interharmonics[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a ReadingQuality.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ReadingQuality - the list of ReadingQuality elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */

        function parse_ReadingQuality (context, sub)
        {
            var obj;
            var qualities;

            obj = base.parse_Element (context, sub);
            obj.cls = "ReadingQuality";
            obj.comment = base.parse_element (/<cim:ReadingQuality.comment>([\s\S]*?)<\/cim:ReadingQuality.comment>/g, sub, context, true);
            obj.source = base.parse_element (/<cim:ReadingQuality.source>([\s\S]*?)<\/cim:ReadingQuality.source>/g, sub, context, true);
            obj.timeStamp = base.parse_element (/<cim:ReadingQuality.timeStamp>([\s\S]*?)<\/cim:ReadingQuality.timeStamp>/g, sub, context, true);
            obj.Reading = base.parse_attribute (/<cim:ReadingQuality.Reading\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ReadingQualityType = base.parse_attribute (/<cim:ReadingQuality.ReadingQualityType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            qualities = context.parsed.ReadingQuality;
            if (null == qualities)
                context.parsed.ReadingQuality = qualities = {};
            qualities[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a ReadingQualityType.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ReadingQualityType - the list of ReadingQualityType elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */
        function parse_ReadingQualityType (context, sub)
        {
            var obj;
            var types;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "ReadingQualityType";
            obj.category = base.parse_element (/<cim:ReadingQualityType.category>([\s\S]*?)<\/cim:ReadingQualityType.category>/g, sub, context, true);
            obj.subCategory = base.parse_element (/<cim:ReadingQualityType.subCategory>([\s\S]*?)<\/cim:ReadingQualityType.subCategory>/g, sub, context, true);
            obj.systemId = base.parse_element (/<cim:ReadingQualityType.systemId>([\s\S]*?)<\/cim:ReadingQualityType.systemId>/g, sub, context, true);
            types = context.parsed.ReadingQualityType;
            if (null == types)
                context.parsed.ReadingQualityType = types = {};
            types[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a ReadingType.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ReadingType - the list of ReadingType elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */
        function parse_ReadingType (context, sub)
        {
            var obj;
            var types;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "ReadingType";
            obj.accumulation = base.parse_element (/<cim:ReadingType.accumulation>([\s\S]*?)<\/cim:ReadingType.accumulation>/g, sub, context, true);
            obj.aggregate = base.parse_element (/<cim:ReadingType.aggregate>([\s\S]*?)<\/cim:ReadingType.aggregate>/g, sub, context, true);
            obj.commodity = base.parse_element (/<cim:ReadingType.commodity>([\s\S]*?)<\/cim:ReadingType.commodity>/g, sub, context, true);
            obj.consumptionTier = base.parse_element (/<cim:ReadingType.consumptionTier>([\s\S]*?)<\/cim:ReadingType.consumptionTier>/g, sub, context, true);
            obj.cpp = base.parse_element (/<cim:ReadingType.cpp>([\s\S]*?)<\/cim:ReadingType.cpp>/g, sub, context, true);
            obj.currency = base.parse_element (/<cim:ReadingType.currency>([\s\S]*?)<\/cim:ReadingType.currency>/g, sub, context, true);
            obj.flowDirection = base.parse_element (/<cim:ReadingType.flowDirection>([\s\S]*?)<\/cim:ReadingType.flowDirection>/g, sub, context, true);
            obj.macroPeriod = base.parse_element (/<cim:ReadingType.macroPeriod>([\s\S]*?)<\/cim:ReadingType.macroPeriod>/g, sub, context, true);
            obj.measurementKind = base.parse_element (/<cim:ReadingType.measurementKind>([\s\S]*?)<\/cim:ReadingType.measurementKind>/g, sub, context, true);
            obj.measuringPeriod = base.parse_element (/<cim:ReadingType.measuringPeriod>([\s\S]*?)<\/cim:ReadingType.measuringPeriod>/g, sub, context, true);
            obj.multiplier = base.parse_element (/<cim:ReadingType.multiplier>([\s\S]*?)<\/cim:ReadingType.multiplier>/g, sub, context, true);
            obj.phases = base.parse_element (/<cim:ReadingType.phases>([\s\S]*?)<\/cim:ReadingType.phases>/g, sub, context, true);
            obj.tou = base.parse_element (/<cim:ReadingType.tou>([\s\S]*?)<\/cim:ReadingType.tou>/g, sub, context, true);
            obj.unit = base.parse_element (/<cim:ReadingType.unit>([\s\S]*?)<\/cim:ReadingType.unit>/g, sub, context, true);
            obj.Channel = base.parse_attribute (/<cim:ReadingType.Channel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.PendingCalculation = base.parse_attribute (/<cim:ReadingType.PendingCalculation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.argument = base.parse_attribute (/<cim:ReadingType.argument\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.interharmonic = base.parse_attribute (/<cim:ReadingType.interharmonic\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            types = context.parsed.ReadingType;
            if (null == types)
                context.parsed.ReadingType = types = {};
            types[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Register.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Register - the list of Register elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */
        function parse_Register (context, sub)
        {
            var obj;
            var registers;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "Register";
            obj.isVirtual = base.parse_element (/<cim:Register.isVirtual>([\s\S]*?)<\/cim:Register.isVirtual>/g, sub, context, true);
            obj.leftDigitCount = base.parse_element (/<cim:Register.leftDigitCount>([\s\S]*?)<\/cim:Register.leftDigitCount>/g, sub, context, true);
            obj.rightDigitCount = base.parse_element (/<cim:Register.rightDigitCount>([\s\S]*?)<\/cim:Register.rightDigitCount>/g, sub, context, true);
            obj.touTierName = base.parse_element (/<cim:Register.touTierName>([\s\S]*?)<\/cim:Register.touTierName>/g, sub, context, true);
            obj.EndDeviceFunction = base.parse_attribute (/<cim:Register.EndDeviceFunction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.touTier = base.parse_attribute (/<cim:Register.touTier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            registers = context.parsed.Register;
            if (null == registers)
                context.parsed.Register = registers = {};
            registers[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a ServiceMultiplier.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ServiceMultiplier - the list of ServiceMultiplier elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */
        function parse_ServiceMultiplier (context, sub)
        {
            var obj;
            var multipliers;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "ServiceMultiplier";
            obj.kind = base.parse_attribute (/<cim:ServiceMultiplier.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.value = base.parse_element (/<cim:ServiceMultiplier.value>([\s\S]*?)<\/cim:ServiceMultiplier.value>/g, sub, context, true);
            obj.UsagePoint = base.parse_attribute (/<cim:ServiceMultiplier.UsagePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            multipliers = context.parsed.ServiceMultiplier;
            if (null == multipliers)
                context.parsed.ServiceMultiplier = multipliers = {};
            multipliers[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a SimpleEndDeviceFunction.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.SimpleEndDeviceFunction - the list of SimpleEndDeviceFunction elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */
        function parse_SimpleEndDeviceFunction (context, sub)
        {
            var obj;
            var functions;

            obj = parse_EndDeviceFunction (context, sub);
            obj.cls = "SimpleEndDeviceFunction";
            obj.kind = base.parse_attribute (/<cim:SimpleEndDeviceFunction.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            functions = context.parsed.SimpleEndDeviceFunction;
            if (null == functions)
                context.parsed.SimpleEndDeviceFunction = functions = {};
            functions[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a UsagePoint.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.UsagePoint - the list of UsagePoint elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */
        function parse_UsagePoint (context, sub)
        {
            var obj;
            var points;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "UsagePoint";
            obj.amiBillingReady = base.parse_attribute (/<cim:UsagePoint.amiBillingReady\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.checkBilling = base.parse_element (/<cim:UsagePoint.checkBilling>([\s\S]*?)<\/cim:UsagePoint.checkBilling>/g, sub, context, true);
            obj.connectionState = base.parse_attribute (/<cim:UsagePoint.connectionState\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.estimatedLoad = base.parse_element (/<cim:UsagePoint.estimatedLoad>([\s\S]*?)<\/cim:UsagePoint.estimatedLoad>/g, sub, context, true);
            obj.grounded = base.parse_element (/<cim:UsagePoint.grounded>([\s\S]*?)<\/cim:UsagePoint.grounded>/g, sub, context, true);
            obj.isSdp = base.parse_element (/<cim:UsagePoint.isSdp>([\s\S]*?)<\/cim:UsagePoint.isSdp>/g, sub, context, true);
            obj.isVirtual = base.parse_element (/<cim:UsagePoint.isVirtual>([\s\S]*?)<\/cim:UsagePoint.isVirtual>/g, sub, context, true);
            obj.minimalUsageExpected = base.parse_element (/<cim:UsagePoint.minimalUsageExpected>([\s\S]*?)<\/cim:UsagePoint.minimalUsageExpected>/g, sub, context, true);
            obj.nominalServiceVoltage = base.parse_element (/<cim:UsagePoint.nominalServiceVoltage>([\s\S]*?)<\/cim:UsagePoint.nominalServiceVoltage>/g, sub, context, true);
            obj.outageRegion = base.parse_element (/<cim:UsagePoint.outageRegion>([\s\S]*?)<\/cim:UsagePoint.outageRegion>/g, sub, context, true);
            obj.phaseCode = base.parse_attribute (/<cim:UsagePoint.phaseCode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ratedCurrent = base.parse_element (/<cim:UsagePoint.ratedCurrent>([\s\S]*?)<\/cim:UsagePoint.ratedCurrent>/g, sub, context, true);
            obj.ratedPower = base.parse_element (/<cim:UsagePoint.ratedPower>([\s\S]*?)<\/cim:UsagePoint.ratedPower>/g, sub, context, true);
            obj.readCycle = base.parse_element (/<cim:UsagePoint.readCycle>([\s\S]*?)<\/cim:UsagePoint.readCycle>/g, sub, context, true);
            obj.readRoute = base.parse_element (/<cim:UsagePoint.readRoute>([\s\S]*?)<\/cim:UsagePoint.readRoute>/g, sub, context, true);
            obj.serviceDeliveryRemark = base.parse_element (/<cim:UsagePoint.serviceDeliveryRemark>([\s\S]*?)<\/cim:UsagePoint.serviceDeliveryRemark>/g, sub, context, true);
            obj.servicePriority = base.parse_element (/<cim:UsagePoint.servicePriority>([\s\S]*?)<\/cim:UsagePoint.servicePriority>/g, sub, context, true);
            obj.CustomerAgreement = base.parse_attribute (/<cim:UsagePoint.CustomerAgreement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ServiceCategory = base.parse_attribute (/<cim:UsagePoint.ServiceCategory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ServiceLocation = base.parse_attribute (/<cim:UsagePoint.ServiceLocation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ServiceSupplier = base.parse_attribute (/<cim:UsagePoint.ServiceSupplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.UsagePointLocation = base.parse_attribute (/<cim:UsagePoint.UsagePointLocation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            points = context.parsed.UsagePoint;
            if (null == points)
                context.parsed.UsagePoint = points = {};
            points[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a UsagePointGroup.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.UsagePointGroup - the list of UsagePointGroup elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */
        function parse_UsagePointGroup (context, sub)
        {
            var obj;
            var groups;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "UsagePointGroup";
            obj.type = base.parse_element (/<cim:UsagePointGroup.type>([\s\S]*?)<\/cim:UsagePointGroup.type>/g, sub, context, true);
            groups = context.parsed.UsagePointGroup;
            if (null == groups)
                context.parsed.UsagePointGroup = groups = {};
            groups[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a UsagePointLocation.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.UsagePointLocation - the list of UsagePointLocation elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/metering
         */
        function parse_UsagePointLocation (context, sub)
        {
            var obj;
            var locations;

            obj = common.parse_Location (context, sub);
            obj.cls = "UsagePointLocation";
            obj.accessMethod = base.parse_element (/<cim:UsagePointLocation.accessMethod>([\s\S]*?)<\/cim:UsagePointLocation.accessMethod>/g, sub, context, true);
            obj.remark = base.parse_element (/<cim:UsagePointLocation.remark>([\s\S]*?)<\/cim:UsagePointLocation.remark>/g, sub, context, true);
            obj.siteAccessProblem = base.parse_element (/<cim:UsagePointLocation.siteAccessProblem>([\s\S]*?)<\/cim:UsagePointLocation.siteAccessProblem>/g, sub, context, true);
            locations = context.parsed.UsagePointLocation;
            if (null == locations)
                context.parsed.UsagePointLocation = locations = {};
            locations[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_BaseReading: parse_BaseReading,
                parse_Channel: parse_Channel,
                parse_ComFunction: parse_ComFunction,
                parse_ComModule: parse_ComModule,
                parse_ControlledAppliance: parse_ControlledAppliance,
                parse_DemandResponseProgram: parse_DemandResponseProgram,
                parse_EndDevice: parse_EndDevice,
                parse_EndDeviceAction: parse_EndDeviceAction,
                parse_EndDeviceCapability: parse_EndDeviceCapability,
                parse_EndDeviceControl: parse_EndDeviceControl,
                parse_EndDeviceControlType: parse_EndDeviceControlType,
                parse_EndDeviceEvent: parse_EndDeviceEvent,
                parse_EndDeviceEventDetail: parse_EndDeviceEventDetail,
                parse_EndDeviceEventType: parse_EndDeviceEventType,
                parse_EndDeviceFunction: parse_EndDeviceFunction,
                parse_EndDeviceGroup: parse_EndDeviceGroup,
                parse_EndDeviceInfo: parse_EndDeviceInfo,
                parse_EndDeviceTiming: parse_EndDeviceTiming,
                parse_IntervalBlock: parse_IntervalBlock,
                parse_IntervalReading: parse_IntervalReading,
                parse_Meter: parse_Meter,
                parse_MeterMultiplier: parse_MeterMultiplier,
                parse_MeterReading: parse_MeterReading,
                parse_MeterServiceWork: parse_MeterServiceWork,
                parse_MetrologyRequirement: parse_MetrologyRequirement,
                parse_PanDemandResponse: parse_PanDemandResponse,
                parse_PanDisplay: parse_PanDisplay,
                parse_PanPricing: parse_PanPricing,
                parse_PanPricingDetail: parse_PanPricingDetail,
                parse_PendingCalculation: parse_PendingCalculation,
                parse_RationalNumber: parse_RationalNumber,
                parse_Reading: parse_Reading,
                parse_ReadingInterharmonic: parse_ReadingInterharmonic,
                parse_ReadingQuality: parse_ReadingQuality,
                parse_ReadingQualityType: parse_ReadingQualityType,
                parse_ReadingType: parse_ReadingType,
                parse_Register: parse_Register,
                parse_ServiceMultiplier: parse_ServiceMultiplier,
                parse_SimpleEndDeviceFunction: parse_SimpleEndDeviceFunction,
                parse_UsagePoint: parse_UsagePoint,
                parse_UsagePointGroup: parse_UsagePointGroup,
                parse_UsagePointLocation: parse_UsagePointLocation
            }
        );
    }
);
