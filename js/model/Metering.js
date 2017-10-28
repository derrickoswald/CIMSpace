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
         * Demand response program.
         *
         */
        function parse_DemandResponseProgram (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "DemandResponseProgram";
            /**
             * Type of demand response program; examples are CPP (critical-peak pricing), RTP (real-time pricing), DLC (direct load control), DBP (demand bidding program), BIP (base interruptible program).
             *
             * Note that possible types change a lot and it would be impossible to enumerate them all.
             *
             */
            base.parse_element (/<cim:DemandResponseProgram.type>([\s\S]*?)<\/cim:DemandResponseProgram.type>/g, obj, "type", base.to_string, sub, context);

            /**
             * Interval within which the program is valid.
             *
             */
            base.parse_element (/<cim:DemandResponseProgram.validityInterval>([\s\S]*?)<\/cim:DemandResponseProgram.validityInterval>/g, obj, "validityInterval", base.to_string, sub, context);

            bucket = context.parsed.DemandResponseProgram;
            if (null == bucket)
                context.parsed.DemandResponseProgram = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Abstraction for management of group communications within a two-way AMR system or the data for a group of related end devices.
         *
         * Commands can be issued to all of the end devices that belong to the group using a defined group address and the underlying AMR communication infrastructure.
         *
         */
        function parse_EndDeviceGroup (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "EndDeviceGroup";
            /**
             * Type of this group.
             *
             */
            base.parse_element (/<cim:EndDeviceGroup.type>([\s\S]*?)<\/cim:EndDeviceGroup.type>/g, obj, "type", base.to_string, sub, context);

            bucket = context.parsed.EndDeviceGroup;
            if (null == bucket)
                context.parsed.EndDeviceGroup = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Appliance controlled with a PAN device control.
         *
         */
        function parse_ControlledAppliance (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ControlledAppliance";
            /**
             * True if the appliance is an electric vehicle.
             *
             */
            base.parse_element (/<cim:ControlledAppliance.isElectricVehicle>([\s\S]*?)<\/cim:ControlledAppliance.isElectricVehicle>/g, obj, "isElectricVehicle", base.to_boolean, sub, context);

            /**
             * True if the appliance is exterior lighting.
             *
             */
            base.parse_element (/<cim:ControlledAppliance.isExteriorLighting>([\s\S]*?)<\/cim:ControlledAppliance.isExteriorLighting>/g, obj, "isExteriorLighting", base.to_boolean, sub, context);

            /**
             * True if the appliance is a generation system.
             *
             */
            base.parse_element (/<cim:ControlledAppliance.isGenerationSystem>([\s\S]*?)<\/cim:ControlledAppliance.isGenerationSystem>/g, obj, "isGenerationSystem", base.to_boolean, sub, context);

            /**
             * True if the appliance is HVAC compressor or furnace.
             *
             */
            base.parse_element (/<cim:ControlledAppliance.isHvacCompressorOrFurnace>([\s\S]*?)<\/cim:ControlledAppliance.isHvacCompressorOrFurnace>/g, obj, "isHvacCompressorOrFurnace", base.to_boolean, sub, context);

            /**
             * True if the appliance is interior lighting.
             *
             */
            base.parse_element (/<cim:ControlledAppliance.isInteriorLighting>([\s\S]*?)<\/cim:ControlledAppliance.isInteriorLighting>/g, obj, "isInteriorLighting", base.to_boolean, sub, context);

            /**
             * True if the appliance is an irrigation pump.
             *
             */
            base.parse_element (/<cim:ControlledAppliance.isIrrigationPump>([\s\S]*?)<\/cim:ControlledAppliance.isIrrigationPump>/g, obj, "isIrrigationPump", base.to_boolean, sub, context);

            /**
             * True if the appliance is managed commercial or industrial load.
             *
             */
            base.parse_element (/<cim:ControlledAppliance.isManagedCommercialIndustrialLoad>([\s\S]*?)<\/cim:ControlledAppliance.isManagedCommercialIndustrialLoad>/g, obj, "isManagedCommercialIndustrialLoad", base.to_boolean, sub, context);

            /**
             * True if the appliance is a pool, pump, spa or jacuzzi.
             *
             */
            base.parse_element (/<cim:ControlledAppliance.isPoolPumpSpaJacuzzi>([\s\S]*?)<\/cim:ControlledAppliance.isPoolPumpSpaJacuzzi>/g, obj, "isPoolPumpSpaJacuzzi", base.to_boolean, sub, context);

            /**
             * True if the appliance is a simple miscellaneous load.
             *
             */
            base.parse_element (/<cim:ControlledAppliance.isSimpleMiscLoad>([\s\S]*?)<\/cim:ControlledAppliance.isSimpleMiscLoad>/g, obj, "isSimpleMiscLoad", base.to_boolean, sub, context);

            /**
             * True if the appliance is a smart appliance.
             *
             */
            base.parse_element (/<cim:ControlledAppliance.isSmartAppliance>([\s\S]*?)<\/cim:ControlledAppliance.isSmartAppliance>/g, obj, "isSmartAppliance", base.to_boolean, sub, context);

            /**
             * True if the appliance is a stip or baseboard heater.
             *
             */
            base.parse_element (/<cim:ControlledAppliance.isStripAndBaseboardHeater>([\s\S]*?)<\/cim:ControlledAppliance.isStripAndBaseboardHeater>/g, obj, "isStripAndBaseboardHeater", base.to_boolean, sub, context);

            /**
             * True if the appliance is a water heater.
             *
             */
            base.parse_element (/<cim:ControlledAppliance.isWaterHeater>([\s\S]*?)<\/cim:ControlledAppliance.isWaterHeater>/g, obj, "isWaterHeater", base.to_boolean, sub, context);

            bucket = context.parsed.ControlledAppliance;
            if (null == bucket)
                context.parsed.ControlledAppliance = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * PAN control used to issue action/command to PAN devices during a demand response/load control event.
         *
         */
        function parse_PanDemandResponse (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_EndDeviceAction (context, sub);
            obj.cls = "PanDemandResponse";
            /**
             * Appliance being controlled.
             *
             */
            base.parse_element (/<cim:PanDemandResponse.appliance>([\s\S]*?)<\/cim:PanDemandResponse.appliance>/g, obj, "appliance", base.to_string, sub, context);

            /**
             * Used to define a maximum energy usage limit as a percentage of the client implementations specific average energy usage.
             *
             * The load adjustment percentage is added to 100% creating a percentage limit applied to the client implementations specific average energy usage. A -10% load adjustment percentage will establish an energy usage limit equal to 90% of the client implementations specific average energy usage. Each load adjustment percentage is referenced to the client implementations specific average energy usage. There are no cumulative effects.
             *
             */
            base.parse_element (/<cim:PanDemandResponse.avgLoadAdjustment>([\s\S]*?)<\/cim:PanDemandResponse.avgLoadAdjustment>/g, obj, "avgLoadAdjustment", base.to_string, sub, context);

            /**
             * Encoding of cancel control.
             *
             */
            base.parse_element (/<cim:PanDemandResponse.cancelControlMode>([\s\S]*?)<\/cim:PanDemandResponse.cancelControlMode>/g, obj, "cancelControlMode", base.to_string, sub, context);

            /**
             * Timestamp when a canceling of the event is scheduled to start.
             *
             */
            base.parse_element (/<cim:PanDemandResponse.cancelDateTime>([\s\S]*?)<\/cim:PanDemandResponse.cancelDateTime>/g, obj, "cancelDateTime", base.to_datetime, sub, context);

            /**
             * If true, a canceling of the event should start immediately.
             *
             */
            base.parse_element (/<cim:PanDemandResponse.cancelNow>([\s\S]*?)<\/cim:PanDemandResponse.cancelNow>/g, obj, "cancelNow", base.to_boolean, sub, context);

            /**
             * Requested offset to apply to the normal cooling setpoint at the time of the start of the event.
             *
             * It represents a temperature change that will be applied to the associated cooling set point. The temperature offsets will be calculated per the local temperature in the thermostat. The calculated temperature will be interpreted as the number of degrees to be added to the cooling set point. Sequential demand response events are not cumulative. The offset shall be applied to the normal setpoint.
             *
             */
            base.parse_element (/<cim:PanDemandResponse.coolingOffset>([\s\S]*?)<\/cim:PanDemandResponse.coolingOffset>/g, obj, "coolingOffset", base.to_string, sub, context);

            /**
             * Requested cooling set point.
             *
             * Temperature set point is typically defined and calculated based on local temperature.
             *
             */
            base.parse_element (/<cim:PanDemandResponse.coolingSetpoint>([\s\S]*?)<\/cim:PanDemandResponse.coolingSetpoint>/g, obj, "coolingSetpoint", base.to_string, sub, context);

            /**
             * Level of criticality for the action of this control.
             *
             * The action taken by load control devices for an event can be solely based on this value, or in combination with other load control event fields supported by the device.
             *
             */
            base.parse_element (/<cim:PanDemandResponse.criticalityLevel>([\s\S]*?)<\/cim:PanDemandResponse.criticalityLevel>/g, obj, "criticalityLevel", base.to_string, sub, context);

            /**
             * Maximum "on" state duty cycle as a percentage of time.
             *
             * For example, if the value is 80, the device would be in an "on" state for 80% of the time for the duration of the action.
             *
             */
            base.parse_element (/<cim:PanDemandResponse.dutyCycle>([\s\S]*?)<\/cim:PanDemandResponse.dutyCycle>/g, obj, "dutyCycle", base.to_string, sub, context);

            /**
             * Provides a mechanism to direct load control actions to groups of PAN devices.
             *
             * It can be used in conjunction with the PAN device types.
             *
             */
            base.parse_element (/<cim:PanDemandResponse.enrollmentGroup>([\s\S]*?)<\/cim:PanDemandResponse.enrollmentGroup>/g, obj, "enrollmentGroup", base.to_string, sub, context);

            /**
             * Requested offset to apply to the normal heating setpoint at the time of the start of the event.
             *
             * It represents a temperature change that will be applied to the associated heating set point. The temperature offsets will be calculated per the local temperature in the thermostat. The calculated temperature will be interpreted as the number of degrees to be subtracted from the heating set point. Sequential demand response events are not cumulative. The offset shall be applied to the normal setpoint.
             *
             */
            base.parse_element (/<cim:PanDemandResponse.heatingOffset>([\s\S]*?)<\/cim:PanDemandResponse.heatingOffset>/g, obj, "heatingOffset", base.to_string, sub, context);

            /**
             * Requested heating set point.
             *
             * Temperature set point is typically defined and calculated based on local temperature.
             *
             */
            base.parse_element (/<cim:PanDemandResponse.heatingSetpoint>([\s\S]*?)<\/cim:PanDemandResponse.heatingSetpoint>/g, obj, "heatingSetpoint", base.to_string, sub, context);

            bucket = context.parsed.PanDemandResponse;
            if (null == bucket)
                context.parsed.PanDemandResponse = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A device that indicates or records units of the commodity or other quantity measured.
         *
         */
        function parse_Register (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Register";
            /**
             * If true, the data it produces is  calculated or measured by a device other than a physical end device/meter.
             *
             * Otherwise, any data streams it produces are measured by the hardware of the end device/meter itself.
             *
             */
            base.parse_element (/<cim:Register.isVirtual>([\s\S]*?)<\/cim:Register.isVirtual>/g, obj, "isVirtual", base.to_boolean, sub, context);

            /**
             * Number of digits (dials on a mechanical meter) to the left of the decimal place; default is normally 5.
             *
             */
            base.parse_element (/<cim:Register.leftDigitCount>([\s\S]*?)<\/cim:Register.leftDigitCount>/g, obj, "leftDigitCount", base.to_string, sub, context);

            /**
             * Number of digits (dials on a mechanical meter) to the right of the decimal place.
             *
             */
            base.parse_element (/<cim:Register.rightDigitCount>([\s\S]*?)<\/cim:Register.rightDigitCount>/g, obj, "rightDigitCount", base.to_string, sub, context);

            /**
             * Clock time interval for register to beging/cease accumulating time of usage (e.g., start at 8:00 am, stop at 5:00 pm).
             *
             */
            base.parse_element (/<cim:Register.touTier>([\s\S]*?)<\/cim:Register.touTier>/g, obj, "touTier", base.to_string, sub, context);

            /**
             * Name used for the time of use tier (also known as bin or bucket).
             *
             * For example, "peak", "off-peak", "TOU Category A", etc.
             *
             */
            base.parse_element (/<cim:Register.touTierName>([\s\S]*?)<\/cim:Register.touTierName>/g, obj, "touTierName", base.to_string, sub, context);

            /**
             * End device function metering quantities displayed by this register.
             *
             */
            base.parse_attribute (/<cim:Register.EndDeviceFunction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceFunction", sub, context, true);

            bucket = context.parsed.Register;
            if (null == bucket)
                context.parsed.Register = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Instructs an end device (or an end device group) to perform a specified action.
         *
         */
        function parse_EndDeviceControl (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "EndDeviceControl";
            /**
             * Level of a demand response program request, where 0=emergency.
             *
             * Note: Attribute is not defined on DemandResponseProgram as it is not its inherent property (it serves to control it).
             *
             */
            base.parse_element (/<cim:EndDeviceControl.drProgramLevel>([\s\S]*?)<\/cim:EndDeviceControl.drProgramLevel>/g, obj, "drProgramLevel", base.to_string, sub, context);

            /**
             * Whether a demand response program request is mandatory.
             *
             * Note: Attribute is not defined on DemandResponseProgram as it is not its inherent property (it serves to control it).
             *
             */
            base.parse_element (/<cim:EndDeviceControl.drProgramMandatory>([\s\S]*?)<\/cim:EndDeviceControl.drProgramMandatory>/g, obj, "drProgramMandatory", base.to_boolean, sub, context);

            /**
             * Unique identifier of the business entity originating an end device control.
             *
             */
            base.parse_element (/<cim:EndDeviceControl.issuerID>([\s\S]*?)<\/cim:EndDeviceControl.issuerID>/g, obj, "issuerID", base.to_string, sub, context);

            /**
             * Identifier assigned by the initiator (e.g. retail electric provider) of an end device control action to uniquely identify the demand response event, text message, or other subject of the control action.
             *
             * Can be used when cancelling an event or text message request or to identify the originating event or text message in a consequential end device event.
             *
             */
            base.parse_element (/<cim:EndDeviceControl.issuerTrackingID>([\s\S]*?)<\/cim:EndDeviceControl.issuerTrackingID>/g, obj, "issuerTrackingID", base.to_string, sub, context);

            /**
             * (if applicable) Price signal used as parameter for this end device control.
             *
             */
            base.parse_element (/<cim:EndDeviceControl.priceSignal>([\s\S]*?)<\/cim:EndDeviceControl.priceSignal>/g, obj, "priceSignal", base.to_string, sub, context);

            /**
             * Timing for the control actions performed on the device identified in the end device control.
             *
             */
            base.parse_element (/<cim:EndDeviceControl.primaryDeviceTiming>([\s\S]*?)<\/cim:EndDeviceControl.primaryDeviceTiming>/g, obj, "primaryDeviceTiming", base.to_string, sub, context);

            /**
             * Reason for the control action that allows to determine how to continue processing.
             *
             * For example, disconnect meter command may require different processing by the receiving system if it has been issued for a network-related reason (protection) or for a payment-related reason.
             *
             */
            base.parse_element (/<cim:EndDeviceControl.reason>([\s\S]*?)<\/cim:EndDeviceControl.reason>/g, obj, "reason", base.to_string, sub, context);

            /**
             * (if control has scheduled duration) Date and time interval the control has been scheduled to execute within.
             *
             */
            base.parse_element (/<cim:EndDeviceControl.scheduledInterval>([\s\S]*?)<\/cim:EndDeviceControl.scheduledInterval>/g, obj, "scheduledInterval", base.to_string, sub, context);

            /**
             * Timing for the control actions performed by devices that are responding to event related information sent to the primary device indicated in the end device control.
             *
             * For example, load control actions performed by a PAN device in response to demand response event information sent to a PAN gateway server.
             *
             */
            base.parse_element (/<cim:EndDeviceControl.secondaryDeviceTiming>([\s\S]*?)<\/cim:EndDeviceControl.secondaryDeviceTiming>/g, obj, "secondaryDeviceTiming", base.to_string, sub, context);

            /**
             * Type of this end device control.
             *
             */
            base.parse_attribute (/<cim:EndDeviceControl.EndDeviceControlType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceControlType", sub, context, true);

            /**
             * End device action issued by this end device control.
             *
             */
            base.parse_attribute (/<cim:EndDeviceControl.EndDeviceAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceAction", sub, context, true);

            bucket = context.parsed.EndDeviceControl;
            if (null == bucket)
                context.parsed.EndDeviceControl = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Data captured at regular intervals of time.
         *
         * Interval data could be captured as incremental data, absolute data, or relative data. The source for the data is usually a tariff quantity or an engineering quantity. Data is typically captured in time-tagged, uniform, fixed-length intervals of 5 min, 10 min, 15 min, 30 min, or 60 min.
         *
         */
        function parse_IntervalReading (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_BaseReading (context, sub);
            obj.cls = "IntervalReading";
            bucket = context.parsed.IntervalReading;
            if (null == bucket)
                context.parsed.IntervalReading = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Detail for a single price command/action.
         *
         */
        function parse_PanPricingDetail (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PanPricingDetail";
            /**
             * Alternative measure of the cost of the energy consumed.
             *
             * An example might be the emissions of CO2 for each kWh of electricity consumed providing a measure of the environmental cost.
             *
             */
            base.parse_element (/<cim:PanPricingDetail.alternateCostDelivered>([\s\S]*?)<\/cim:PanPricingDetail.alternateCostDelivered>/g, obj, "alternateCostDelivered", base.to_float, sub, context);

            /**
             * Cost unit for the alternate cost delivered field.
             *
             * One example is kg of CO2 per unit of measure.
             *
             */
            base.parse_element (/<cim:PanPricingDetail.alternateCostUnit>([\s\S]*?)<\/cim:PanPricingDetail.alternateCostUnit>/g, obj, "alternateCostUnit", base.to_string, sub, context);

            /**
             * Current time as determined by a PAN device.
             *
             */
            base.parse_element (/<cim:PanPricingDetail.currentTimeDate>([\s\S]*?)<\/cim:PanPricingDetail.currentTimeDate>/g, obj, "currentTimeDate", base.to_datetime, sub, context);

            /**
             * Price of the commodity measured in base unit of currency per 'unitOfMeasure'.
             *
             */
            base.parse_element (/<cim:PanPricingDetail.generationPrice>([\s\S]*?)<\/cim:PanPricingDetail.generationPrice>/g, obj, "generationPrice", base.to_string, sub, context);

            /**
             * Ratio of 'generationPrice' to the "normal" price chosen by the commodity provider.
             *
             */
            base.parse_element (/<cim:PanPricingDetail.generationPriceRatio>([\s\S]*?)<\/cim:PanPricingDetail.generationPriceRatio>/g, obj, "generationPriceRatio", base.to_float, sub, context);

            /**
             * Price of the commodity measured in base unit of currency per 'unitOfMeasure'.
             *
             */
            base.parse_element (/<cim:PanPricingDetail.price>([\s\S]*?)<\/cim:PanPricingDetail.price>/g, obj, "price", base.to_string, sub, context);

            /**
             * Ratio of 'price' to the "normal" price chosen by the commodity provider.
             *
             */
            base.parse_element (/<cim:PanPricingDetail.priceRatio>([\s\S]*?)<\/cim:PanPricingDetail.priceRatio>/g, obj, "priceRatio", base.to_float, sub, context);

            /**
             * Pricing tier as chosen by the commodity provider.
             *
             */
            base.parse_element (/<cim:PanPricingDetail.priceTier>([\s\S]*?)<\/cim:PanPricingDetail.priceTier>/g, obj, "priceTier", base.to_string, sub, context);

            /**
             * Maximum number of price tiers available.
             *
             */
            base.parse_element (/<cim:PanPricingDetail.priceTierCount>([\s\S]*?)<\/cim:PanPricingDetail.priceTierCount>/g, obj, "priceTierCount", base.to_string, sub, context);

            /**
             * Label for price tier.
             *
             */
            base.parse_element (/<cim:PanPricingDetail.priceTierLabel>([\s\S]*?)<\/cim:PanPricingDetail.priceTierLabel>/g, obj, "priceTierLabel", base.to_string, sub, context);

            /**
             * Label of the current billing rate specified by commodity provider.
             *
             */
            base.parse_element (/<cim:PanPricingDetail.rateLabel>([\s\S]*?)<\/cim:PanPricingDetail.rateLabel>/g, obj, "rateLabel", base.to_string, sub, context);

            /**
             * Register tier accumulating usage information.
             *
             */
            base.parse_element (/<cim:PanPricingDetail.registerTier>([\s\S]*?)<\/cim:PanPricingDetail.registerTier>/g, obj, "registerTier", base.to_string, sub, context);

            /**
             * Defines commodity as well as its base unit of measure.
             *
             */
            base.parse_element (/<cim:PanPricingDetail.unitOfMeasure>([\s\S]*?)<\/cim:PanPricingDetail.unitOfMeasure>/g, obj, "unitOfMeasure", base.to_string, sub, context);

            /**
             * PAN pricing command/action issuing this price detail.
             *
             */
            base.parse_attribute (/<cim:PanPricingDetail.PanPricing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PanPricing", sub, context, true);

            bucket = context.parsed.PanPricingDetail;
            if (null == bucket)
                context.parsed.PanPricingDetail = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Logical or physical point in the network to which readings or events may be attributed.
         *
         * Used at the place where a physical or virtual meter may be located; however, it is not required that a meter be present.
         *
         */
        function parse_UsagePoint (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "UsagePoint";
            /**
             * Tracks the lifecycle of the metering installation at a usage point with respect to readiness for billing via advanced metering infrastructure reads.
             *
             */
            base.parse_element (/<cim:UsagePoint.amiBillingReady>([\s\S]*?)<\/cim:UsagePoint.amiBillingReady>/g, obj, "amiBillingReady", base.to_string, sub, context);

            /**
             * True if as a result of an inspection or otherwise, there is a reason to suspect that a previous billing may have been performed with erroneous data.
             *
             * Value should be reset once this potential discrepancy has been resolved.
             *
             */
            base.parse_element (/<cim:UsagePoint.checkBilling>([\s\S]*?)<\/cim:UsagePoint.checkBilling>/g, obj, "checkBilling", base.to_boolean, sub, context);

            /**
             * State of the usage point with respect to connection to the network.
             *
             */
            base.parse_element (/<cim:UsagePoint.connectionState>([\s\S]*?)<\/cim:UsagePoint.connectionState>/g, obj, "connectionState", base.to_string, sub, context);

            /**
             * Estimated load.
             *
             */
            base.parse_element (/<cim:UsagePoint.estimatedLoad>([\s\S]*?)<\/cim:UsagePoint.estimatedLoad>/g, obj, "estimatedLoad", base.to_string, sub, context);

            /**
             * True if grounded.
             *
             */
            base.parse_element (/<cim:UsagePoint.grounded>([\s\S]*?)<\/cim:UsagePoint.grounded>/g, obj, "grounded", base.to_boolean, sub, context);

            /**
             * If true, this usage point is a service delivery point, i.e., a usage point where the ownership of the service changes hands.
             *
             */
            base.parse_element (/<cim:UsagePoint.isSdp>([\s\S]*?)<\/cim:UsagePoint.isSdp>/g, obj, "isSdp", base.to_boolean, sub, context);

            /**
             * If true, this usage point is virtual, i.e., no physical location exists in the network where a meter could be located to collect the meter readings.
             *
             * For example, one may define a virtual usage point to serve as an aggregation of usage for all of a company's premises distributed widely across the distribution territory. Otherwise, the usage point is physical, i.e., there is a logical point in the network where a meter could be located to collect meter readings.
             *
             */
            base.parse_element (/<cim:UsagePoint.isVirtual>([\s\S]*?)<\/cim:UsagePoint.isVirtual>/g, obj, "isVirtual", base.to_boolean, sub, context);

            /**
             * If true, minimal or zero usage is expected at this usage point for situations such as premises vacancy, logical or physical disconnect.
             *
             * It is used for readings validation and estimation.
             *
             */
            base.parse_element (/<cim:UsagePoint.minimalUsageExpected>([\s\S]*?)<\/cim:UsagePoint.minimalUsageExpected>/g, obj, "minimalUsageExpected", base.to_boolean, sub, context);

            /**
             * Nominal service voltage.
             *
             */
            base.parse_element (/<cim:UsagePoint.nominalServiceVoltage>([\s\S]*?)<\/cim:UsagePoint.nominalServiceVoltage>/g, obj, "nominalServiceVoltage", base.to_string, sub, context);

            /**
             * Outage region in which this usage point is located.
             *
             */
            base.parse_element (/<cim:UsagePoint.outageRegion>([\s\S]*?)<\/cim:UsagePoint.outageRegion>/g, obj, "outageRegion", base.to_string, sub, context);

            /**
             * Phase code.
             *
             * Number of wires and specific nominal phases can be deduced from enumeration literal values. For example, ABCN is three-phase, four-wire, s12n (splitSecondary12N) is single-phase, three-wire, and s1n and s2n are single-phase, two-wire.
             *
             */
            base.parse_element (/<cim:UsagePoint.phaseCode>([\s\S]*?)<\/cim:UsagePoint.phaseCode>/g, obj, "phaseCode", base.to_string, sub, context);

            /**
             * Current flow that this usage point is configured to deliver.
             *
             */
            base.parse_element (/<cim:UsagePoint.ratedCurrent>([\s\S]*?)<\/cim:UsagePoint.ratedCurrent>/g, obj, "ratedCurrent", base.to_string, sub, context);

            /**
             * Active power that this usage point is configured to deliver.
             *
             */
            base.parse_element (/<cim:UsagePoint.ratedPower>([\s\S]*?)<\/cim:UsagePoint.ratedPower>/g, obj, "ratedPower", base.to_string, sub, context);

            /**
             * Cycle day on which the meter for this usage point will normally be read.
             *
             * Usually correlated with the billing cycle.
             *
             */
            base.parse_element (/<cim:UsagePoint.readCycle>([\s\S]*?)<\/cim:UsagePoint.readCycle>/g, obj, "readCycle", base.to_string, sub, context);

            /**
             * Identifier of the route to which this usage point is assigned for purposes of meter reading.
             *
             * Typically used to configure hand held meter reading systems prior to collection of reads.
             *
             */
            base.parse_element (/<cim:UsagePoint.readRoute>([\s\S]*?)<\/cim:UsagePoint.readRoute>/g, obj, "readRoute", base.to_string, sub, context);

            /**
             * Remarks about this usage point, for example the reason for it being rated with a non-nominal priority.
             *
             */
            base.parse_element (/<cim:UsagePoint.serviceDeliveryRemark>([\s\S]*?)<\/cim:UsagePoint.serviceDeliveryRemark>/g, obj, "serviceDeliveryRemark", base.to_string, sub, context);

            /**
             * Priority of service for this usage point.
             *
             * Note that usage points at the same service location can have different priorities.
             *
             */
            base.parse_element (/<cim:UsagePoint.servicePriority>([\s\S]*?)<\/cim:UsagePoint.servicePriority>/g, obj, "servicePriority", base.to_string, sub, context);

            /**
             * Customer agreement regulating this service delivery point.
             *
             */
            base.parse_attribute (/<cim:UsagePoint.CustomerAgreement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAgreement", sub, context, true);

            /**
             * ServiceSupplier (utility) utilising this usage point to deliver a service.
             *
             */
            base.parse_attribute (/<cim:UsagePoint.ServiceSupplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ServiceSupplier", sub, context, true);

            /**
             * Location of this usage point.
             *
             */
            base.parse_attribute (/<cim:UsagePoint.UsagePointLocation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UsagePointLocation", sub, context, true);

            /**
             * Service category delivered by this usage point.
             *
             */
            base.parse_attribute (/<cim:UsagePoint.ServiceCategory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ServiceCategory", sub, context, true);

            /**
             * Service location where the service delivered by this usage point is consumed.
             *
             */
            base.parse_attribute (/<cim:UsagePoint.ServiceLocation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ServiceLocation", sub, context, true);

            bucket = context.parsed.UsagePoint;
            if (null == bucket)
                context.parsed.UsagePoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of meter multiplier.
         *
         */
        function parse_MeterMultiplierKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MeterMultiplierKind";
            /**
             * Meter kh (watthour) constant.
             *
             * The number of watthours that must be applied to the meter to cause one disk revolution for an electromechanical meter or the number of watthours represented by one increment pulse for an electronic meter.
             *
             */
            base.parse_element (/<cim:MeterMultiplierKind.kH>([\s\S]*?)<\/cim:MeterMultiplierKind.kH>/g, obj, "kH", base.to_string, sub, context);

            /**
             * Register multiplier.
             *
             * The number to multiply the register reading by in order to get kWh.
             *
             */
            base.parse_element (/<cim:MeterMultiplierKind.kR>([\s\S]*?)<\/cim:MeterMultiplierKind.kR>/g, obj, "kR", base.to_string, sub, context);

            /**
             * Test constant.
             *
             */
            base.parse_element (/<cim:MeterMultiplierKind.kE>([\s\S]*?)<\/cim:MeterMultiplierKind.kE>/g, obj, "kE", base.to_string, sub, context);

            /**
             * Current transformer ratio used to convert associated quantities to real measurements.
             *
             */
            base.parse_element (/<cim:MeterMultiplierKind.ctRatio>([\s\S]*?)<\/cim:MeterMultiplierKind.ctRatio>/g, obj, "ctRatio", base.to_string, sub, context);

            /**
             * Potential transformer ratio used to convert associated quantities to real measurements.
             *
             */
            base.parse_element (/<cim:MeterMultiplierKind.ptRatio>([\s\S]*?)<\/cim:MeterMultiplierKind.ptRatio>/g, obj, "ptRatio", base.to_string, sub, context);

            /**
             * Product of the CT ratio and PT ratio.
             *
             */
            base.parse_element (/<cim:MeterMultiplierKind.transformerRatio>([\s\S]*?)<\/cim:MeterMultiplierKind.transformerRatio>/g, obj, "transformerRatio", base.to_string, sub, context);

            bucket = context.parsed.MeterMultiplierKind;
            if (null == bucket)
                context.parsed.MeterMultiplierKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Rational number = 'numerator' / 'denominator'.
         *
         */
        function parse_RationalNumber (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "RationalNumber";
            /**
             * Denominator.
             *
             * Value 1 indicates the number is a simple integer.
             *
             */
            base.parse_element (/<cim:RationalNumber.denominator>([\s\S]*?)<\/cim:RationalNumber.denominator>/g, obj, "denominator", base.to_string, sub, context);

            /**
             * Numerator.
             *
             */
            base.parse_element (/<cim:RationalNumber.numerator>([\s\S]*?)<\/cim:RationalNumber.numerator>/g, obj, "numerator", base.to_string, sub, context);

            bucket = context.parsed.RationalNumber;
            if (null == bucket)
                context.parsed.RationalNumber = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Name-value pair, specific to end device events.
         *
         */
        function parse_EndDeviceEventDetail (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "EndDeviceEventDetail";
            /**
             * Name.
             *
             */
            base.parse_element (/<cim:EndDeviceEventDetail.name>([\s\S]*?)<\/cim:EndDeviceEventDetail.name>/g, obj, "name", base.to_string, sub, context);

            /**
             * Value, including unit information.
             *
             */
            base.parse_element (/<cim:EndDeviceEventDetail.value>([\s\S]*?)<\/cim:EndDeviceEventDetail.value>/g, obj, "value", base.to_string, sub, context);

            /**
             * End device owning this detail.
             *
             */
            base.parse_attribute (/<cim:EndDeviceEventDetail.EndDeviceEvent\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceEvent", sub, context, true);

            bucket = context.parsed.EndDeviceEventDetail;
            if (null == bucket)
                context.parsed.EndDeviceEventDetail = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Set of values obtained from the meter.
         *
         */
        function parse_MeterReading (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "MeterReading";
            /**
             * If true, this meter reading is the meter reading for which other coincident meter readings are requested or provided.
             *
             */
            base.parse_element (/<cim:MeterReading.isCoincidentTrigger>([\s\S]*?)<\/cim:MeterReading.isCoincidentTrigger>/g, obj, "isCoincidentTrigger", base.to_boolean, sub, context);

            /**
             * Date and time interval of the data items contained within this meter reading.
             *
             */
            base.parse_element (/<cim:MeterReading.valuesInterval>([\s\S]*?)<\/cim:MeterReading.valuesInterval>/g, obj, "valuesInterval", base.to_string, sub, context);

            /**
             * Usage point from which this meter reading (set of values) has been obtained.
             *
             */
            base.parse_attribute (/<cim:MeterReading.UsagePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UsagePoint", sub, context, true);

            /**
             * Meter providing this reading.
             *
             */
            base.parse_attribute (/<cim:MeterReading.Meter\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Meter", sub, context, true);

            /**
             * (could be deprecated in the future) Customer agreement for this meter reading.
             *
             */
            base.parse_attribute (/<cim:MeterReading.CustomerAgreement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerAgreement", sub, context, true);

            bucket = context.parsed.MeterReading;
            if (null == bucket)
                context.parsed.MeterReading = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A single path for the collection or reporting of register values over a period of time.
         *
         * For example, a register which measures forward energy can have two channels, one providing bulk quantity readings and the other providing interval readings of a fixed interval size.
         *
         */
        function parse_Channel (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Channel";
            /**
             * If true, the data is being calculated by an enterprise system rather than metered directly.
             *
             */
            base.parse_element (/<cim:Channel.isVirtual>([\s\S]*?)<\/cim:Channel.isVirtual>/g, obj, "isVirtual", base.to_boolean, sub, context);

            /**
             * Register whose values are collected/reported by this channel.
             *
             */
            base.parse_attribute (/<cim:Channel.Register\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Register", sub, context, true);

            /**
             * Reading type for register values reported/collected by this channel.
             *
             */
            base.parse_attribute (/<cim:Channel.ReadingType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReadingType", sub, context, true);

            bucket = context.parsed.Channel;
            if (null == bucket)
                context.parsed.Channel = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of service multiplier.
         *
         */
        function parse_ServiceMultiplierKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ServiceMultiplierKind";
            /**
             * Current transformer ratio used to convert associated quantities to real measurements.
             *
             */
            base.parse_element (/<cim:ServiceMultiplierKind.ctRatio>([\s\S]*?)<\/cim:ServiceMultiplierKind.ctRatio>/g, obj, "ctRatio", base.to_string, sub, context);

            /**
             * Voltage transformer ratio used to convert associated quantities to real measurements.
             *
             */
            base.parse_element (/<cim:ServiceMultiplierKind.ptRatio>([\s\S]*?)<\/cim:ServiceMultiplierKind.ptRatio>/g, obj, "ptRatio", base.to_string, sub, context);

            /**
             * Product of the CT ratio and PT ratio.
             *
             */
            base.parse_element (/<cim:ServiceMultiplierKind.transformerRatio>([\s\S]*?)<\/cim:ServiceMultiplierKind.transformerRatio>/g, obj, "transformerRatio", base.to_string, sub, context);

            bucket = context.parsed.ServiceMultiplierKind;
            if (null == bucket)
                context.parsed.ServiceMultiplierKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Quality of a specific reading value or interval reading value.
         *
         * Note that more than one quality may be applicable to a given reading. Typically not used unless problems or unusual conditions occur (i.e., quality for each reading is assumed to be good unless stated otherwise in associated reading quality type). It can also be used with the corresponding reading quality type to indicate that the validation has been performed and succeeded.
         *
         */
        function parse_ReadingQuality (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ReadingQuality";
            /**
             * Elaboration on the quality code.
             *
             */
            base.parse_element (/<cim:ReadingQuality.comment>([\s\S]*?)<\/cim:ReadingQuality.comment>/g, obj, "comment", base.to_string, sub, context);

            /**
             * System acting as the source of the quality code.
             *
             */
            base.parse_element (/<cim:ReadingQuality.source>([\s\S]*?)<\/cim:ReadingQuality.source>/g, obj, "source", base.to_string, sub, context);

            /**
             * Date and time at which the quality code was assigned or ascertained.
             *
             */
            base.parse_element (/<cim:ReadingQuality.timeStamp>([\s\S]*?)<\/cim:ReadingQuality.timeStamp>/g, obj, "timeStamp", base.to_datetime, sub, context);

            /**
             * Type of this reading quality.
             *
             */
            base.parse_attribute (/<cim:ReadingQuality.ReadingQualityType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReadingQualityType", sub, context, true);

            /**
             * Reading value to which this quality applies.
             *
             */
            base.parse_attribute (/<cim:ReadingQuality.Reading\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Reading", sub, context, true);

            bucket = context.parsed.ReadingQuality;
            if (null == bucket)
                context.parsed.ReadingQuality = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of communication direction.
         *
         */
        function parse_ComDirectionKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ComDirectionKind";
            /**
             * Communication is from device.
             *
             */
            base.parse_element (/<cim:ComDirectionKind.fromDevice>([\s\S]*?)<\/cim:ComDirectionKind.fromDevice>/g, obj, "fromDevice", base.to_string, sub, context);

            /**
             * Communication is to device.
             *
             */
            base.parse_element (/<cim:ComDirectionKind.toDevice>([\s\S]*?)<\/cim:ComDirectionKind.toDevice>/g, obj, "toDevice", base.to_string, sub, context);

            /**
             * Communication with the device is bi-directional.
             *
             */
            base.parse_element (/<cim:ComDirectionKind.biDirectional>([\s\S]*?)<\/cim:ComDirectionKind.biDirectional>/g, obj, "biDirectional", base.to_string, sub, context);

            bucket = context.parsed.ComDirectionKind;
            if (null == bucket)
                context.parsed.ComDirectionKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Multiplier applied at the meter.
         *
         */
        function parse_MeterMultiplier (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "MeterMultiplier";
            /**
             * Kind of multiplier.
             *
             */
            base.parse_element (/<cim:MeterMultiplier.kind>([\s\S]*?)<\/cim:MeterMultiplier.kind>/g, obj, "kind", base.to_string, sub, context);

            /**
             * Multiplier value.
             *
             */
            base.parse_element (/<cim:MeterMultiplier.value>([\s\S]*?)<\/cim:MeterMultiplier.value>/g, obj, "value", base.to_float, sub, context);

            /**
             * Meter applying this multiplier.
             *
             */
            base.parse_attribute (/<cim:MeterMultiplier.Meter\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Meter", sub, context, true);

            bucket = context.parsed.MeterMultiplier;
            if (null == bucket)
                context.parsed.MeterMultiplier = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Specific value measured by a meter or other asset, or calculated by a system.
         *
         * Each Reading is associated with a specific ReadingType.
         *
         */
        function parse_Reading (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_BaseReading (context, sub);
            obj.cls = "Reading";
            /**
             * Reason for this reading being taken.
             *
             */
            base.parse_element (/<cim:Reading.reason>([\s\S]*?)<\/cim:Reading.reason>/g, obj, "reason", base.to_string, sub, context);

            /**
             * Type information for this reading value.
             *
             */
            base.parse_attribute (/<cim:Reading.ReadingType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReadingType", sub, context, true);

            bucket = context.parsed.Reading;
            if (null == bucket)
                context.parsed.Reading = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Location of an individual usage point.
         *
         */
        function parse_UsagePointLocation (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Location (context, sub);
            obj.cls = "UsagePointLocation";
            /**
             * Method for the service person to access this usage point location.
             *
             * For example, a description of where to obtain a key if the facility is unmanned and secured.
             *
             */
            base.parse_element (/<cim:UsagePointLocation.accessMethod>([\s\S]*?)<\/cim:UsagePointLocation.accessMethod>/g, obj, "accessMethod", base.to_string, sub, context);

            /**
             * Remarks about this location.
             *
             */
            base.parse_element (/<cim:UsagePointLocation.remark>([\s\S]*?)<\/cim:UsagePointLocation.remark>/g, obj, "remark", base.to_string, sub, context);

            /**
             * Problems previously encountered when visiting or performing work at this location.
             *
             * Examples include: bad dog, violent customer, verbally abusive occupant, obstructions, safety hazards, etc.
             *
             */
            base.parse_element (/<cim:UsagePointLocation.siteAccessProblem>([\s\S]*?)<\/cim:UsagePointLocation.siteAccessProblem>/g, obj, "siteAccessProblem", base.to_string, sub, context);

            bucket = context.parsed.UsagePointLocation;
            if (null == bucket)
                context.parsed.UsagePointLocation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Lifecycle states of the metering installation at a usage point with respect to readiness for billing via advanced metering infrastructure reads.
         *
         */
        function parse_AmiBillingReadyKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AmiBillingReadyKind";
            /**
             * Usage point is equipped with an AMI capable meter having communications capability.
             *
             */
            base.parse_element (/<cim:AmiBillingReadyKind.enabled>([\s\S]*?)<\/cim:AmiBillingReadyKind.enabled>/g, obj, "enabled", base.to_string, sub, context);

            /**
             * Usage point is equipped with an AMI capable meter that is functioning and communicating with the AMI network.
             *
             */
            base.parse_element (/<cim:AmiBillingReadyKind.operable>([\s\S]*?)<\/cim:AmiBillingReadyKind.operable>/g, obj, "operable", base.to_string, sub, context);

            /**
             * Usage point is equipped with an operating AMI capable meter and accuracy has been certified for billing purposes.
             *
             */
            base.parse_element (/<cim:AmiBillingReadyKind.billingApproved>([\s\S]*?)<\/cim:AmiBillingReadyKind.billingApproved>/g, obj, "billingApproved", base.to_string, sub, context);

            /**
             * Usage point is equipped with a non AMI capable meter.
             *
             */
            base.parse_element (/<cim:AmiBillingReadyKind.nonAmi>([\s\S]*?)<\/cim:AmiBillingReadyKind.nonAmi>/g, obj, "nonAmi", base.to_string, sub, context);

            /**
             * Usage point is equipped with an AMI capable meter; however, the AMI functionality has been disabled or is not being used.
             *
             */
            base.parse_element (/<cim:AmiBillingReadyKind.amiDisabled>([\s\S]*?)<\/cim:AmiBillingReadyKind.amiDisabled>/g, obj, "amiDisabled", base.to_string, sub, context);

            /**
             * Usage point is equipped with an AMI capable meter that is not yet currently equipped with a communications module.
             *
             */
            base.parse_element (/<cim:AmiBillingReadyKind.amiCapable>([\s\S]*?)<\/cim:AmiBillingReadyKind.amiCapable>/g, obj, "amiCapable", base.to_string, sub, context);

            /**
             * Usage point is not currently equipped with a meter.
             *
             */
            base.parse_element (/<cim:AmiBillingReadyKind.nonMetered>([\s\S]*?)<\/cim:AmiBillingReadyKind.nonMetered>/g, obj, "nonMetered", base.to_string, sub, context);

            bucket = context.parsed.AmiBillingReadyKind;
            if (null == bucket)
                context.parsed.AmiBillingReadyKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A specification of the metering requirements for a particular point within a network.
         *
         */
        function parse_MetrologyRequirement (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "MetrologyRequirement";
            /**
             * Reason for this metrology requirement being specified.
             *
             */
            base.parse_element (/<cim:MetrologyRequirement.reason>([\s\S]*?)<\/cim:MetrologyRequirement.reason>/g, obj, "reason", base.to_string, sub, context);

            bucket = context.parsed.MetrologyRequirement;
            if (null == bucket)
                context.parsed.MetrologyRequirement = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Function performed by an end device such as a meter, communication equipment, controllers, etc.
         *
         */
        function parse_EndDeviceFunction (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetFunction (context, sub);
            obj.cls = "EndDeviceFunction";
            /**
             * True if the function is enabled.
             *
             */
            base.parse_element (/<cim:EndDeviceFunction.enabled>([\s\S]*?)<\/cim:EndDeviceFunction.enabled>/g, obj, "enabled", base.to_boolean, sub, context);

            /**
             * End device that performs this function.
             *
             */
            base.parse_attribute (/<cim:EndDeviceFunction.EndDevice\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDevice", sub, context, true);

            bucket = context.parsed.EndDeviceFunction;
            if (null == bucket)
                context.parsed.EndDeviceFunction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An asset having communications capabilities that can be paired with a meter or other end device to provide the device with communication ability, through associated communication function.
         *
         * An end device that has communications capabilities through embedded hardware can use that function directly (without the communication module), or combine embedded communication function with additional communication functions provided through an external communication module (e.g. zigbee).
         *
         */
        function parse_ComModule (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_Asset (context, sub);
            obj.cls = "ComModule";
            /**
             * Automated meter reading (AMR) system communicating with this com module.
             *
             */
            base.parse_element (/<cim:ComModule.amrSystem>([\s\S]*?)<\/cim:ComModule.amrSystem>/g, obj, "amrSystem", base.to_string, sub, context);

            /**
             * If true, autonomous daylight saving time (DST) function is supported.
             *
             */
            base.parse_element (/<cim:ComModule.supportsAutonomousDst>([\s\S]*?)<\/cim:ComModule.supportsAutonomousDst>/g, obj, "supportsAutonomousDst", base.to_boolean, sub, context);

            /**
             * Time zone offset relative to GMT for the location of this com module.
             *
             */
            base.parse_element (/<cim:ComModule.timeZoneOffset>([\s\S]*?)<\/cim:ComModule.timeZoneOffset>/g, obj, "timeZoneOffset", base.to_string, sub, context);

            bucket = context.parsed.ComModule;
            if (null == bucket)
                context.parsed.ComModule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * State of the usage point with respect to connection to the network.
         *
         */
        function parse_UsagePointConnectedKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "UsagePointConnectedKind";
            /**
             * The usage point is connected to the network and able to receive or send the applicable commodity (electricity, gas, water, etc.).
             *
             */
            base.parse_element (/<cim:UsagePointConnectedKind.connected>([\s\S]*?)<\/cim:UsagePointConnectedKind.connected>/g, obj, "connected", base.to_string, sub, context);

            /**
             * The usage point has been disconnected from the network at a point upstream of the meter.
             *
             * The usage point is unable to receive or send the applicable commodity (electricity, gas, water, etc.). A physical disconnect is often achieved by utilising a field crew.
             *
             */
            base.parse_element (/<cim:UsagePointConnectedKind.physicallyDisconnected>([\s\S]*?)<\/cim:UsagePointConnectedKind.physicallyDisconnected>/g, obj, "physicallyDisconnected", base.to_string, sub, context);

            /**
             * The usage point has been disconnected through operation of a disconnect function within the meter present at the usage point.
             *
             * The usage point is unable to receive or send the applicable commodity (electricity, gas, water, etc.)  A logical disconnect can often be achieved without utilising a field crew.
             *
             */
            base.parse_element (/<cim:UsagePointConnectedKind.logicallyDisconnected>([\s\S]*?)<\/cim:UsagePointConnectedKind.logicallyDisconnected>/g, obj, "logicallyDisconnected", base.to_string, sub, context);

            bucket = context.parsed.UsagePointConnectedKind;
            if (null == bucket)
                context.parsed.UsagePointConnectedKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Detailed description for a type of a reading value.
         *
         * Values in attributes allow for the creation of recommended codes to be used for identifying reading value types as follows: &lt;macroPeriod&gt;.&lt;aggregate&gt;.&lt;measuringPeriod&gt;.&lt;accumulation&gt;.&lt;flowDirection&gt;.&lt;commodity&gt;.&lt;measurementKind&gt;.&lt;interharmonic.numerator&gt;.&lt;interharmonic.denominator&gt;.&lt;argument.numerator&gt;.&lt;argument.denominator&gt;.&lt;tou&gt;.&lt;cpp&gt;.&lt;consumptionTier&gt;.&lt;phases&gt;.&lt;multiplier&gt;.&lt;unit&gt;.&lt;currency&gt;.
         *
         */
        function parse_ReadingType (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ReadingType";
            /**
             * Accumulation behaviour of a reading over time, usually 'measuringPeriod', to be used with individual endpoints (as opposed to 'macroPeriod' and 'aggregate' that are used to describe aggregations of data from individual endpoints).
             *
             */
            base.parse_element (/<cim:ReadingType.accumulation>([\s\S]*?)<\/cim:ReadingType.accumulation>/g, obj, "accumulation", base.to_string, sub, context);

            /**
             * Salient attribute of the reading data aggregated from individual endpoints.
             *
             * This is mainly used to define a mathematical operation carried out over 'macroPeriod', but may also be used to describe an attribute of the data when the 'macroPeriod' is not defined.
             *
             */
            base.parse_element (/<cim:ReadingType.aggregate>([\s\S]*?)<\/cim:ReadingType.aggregate>/g, obj, "aggregate", base.to_string, sub, context);

            /**
             * Argument used to introduce numbers into the unit of measure description where they are needed (e.g., 4 where the measure needs an argument such as CEMI(n=4)).
             *
             * Most arguments used in practice however will be integers (i.e., 'denominator'=1).
             *
             */
            base.parse_element (/<cim:ReadingType.argument>([\s\S]*?)<\/cim:ReadingType.argument>/g, obj, "argument", base.to_string, sub, context);

            /**
             * Commodity being measured.
             *
             */
            base.parse_element (/<cim:ReadingType.commodity>([\s\S]*?)<\/cim:ReadingType.commodity>/g, obj, "commodity", base.to_string, sub, context);

            /**
             * In case of common flat-rate pricing for power, in which all purchases are at a given rate, 'consumptionTier'=0.
             *
             * Otherwise, the value indicates the consumption tier, which can be used in conjunction with TOU or CPP pricing.
             *
             */
            base.parse_element (/<cim:ReadingType.consumptionTier>([\s\S]*?)<\/cim:ReadingType.consumptionTier>/g, obj, "consumptionTier", base.to_string, sub, context);

            /**
             * Critical peak period (CPP) bucket the reading value is attributed to.
             *
             * Value 0 means not applicable. Even though CPP is usually considered a specialised form of time of use 'tou', this attribute is defined explicitly for flexibility.
             *
             */
            base.parse_element (/<cim:ReadingType.cpp>([\s\S]*?)<\/cim:ReadingType.cpp>/g, obj, "cpp", base.to_string, sub, context);

            /**
             * Metering-specific currency.
             *
             */
            base.parse_element (/<cim:ReadingType.currency>([\s\S]*?)<\/cim:ReadingType.currency>/g, obj, "currency", base.to_string, sub, context);

            /**
             * Flow direction for a reading where the direction of flow of the commodity is important (for electricity measurements this includes current, energy, power, and demand).
             *
             */
            base.parse_element (/<cim:ReadingType.flowDirection>([\s\S]*?)<\/cim:ReadingType.flowDirection>/g, obj, "flowDirection", base.to_string, sub, context);

            /**
             * Indication of a "harmonic" or "interharmonic" basis for the measurement.
             *
             * Value 0 in 'numerator' and 'denominator' means not applicable.
             *
             */
            base.parse_element (/<cim:ReadingType.interharmonic>([\s\S]*?)<\/cim:ReadingType.interharmonic>/g, obj, "interharmonic", base.to_string, sub, context);

            /**
             * Time period of interest that reflects how the reading is viewed or captured over a long period of time.
             *
             */
            base.parse_element (/<cim:ReadingType.macroPeriod>([\s\S]*?)<\/cim:ReadingType.macroPeriod>/g, obj, "macroPeriod", base.to_string, sub, context);

            /**
             * Identifies "what" is being measured, as refinement of 'commodity'.
             *
             * When combined with 'unit', it provides detail to the unit of measure. For example, 'energy' with a unit of measure of 'kWh' indicates to the user that active energy is being measured, while with 'kVAh' or 'kVArh', it indicates apparent energy and reactive energy, respectively. 'power' can be combined in a similar way with various power units of measure: Distortion power ('distortionVoltAmperes') with 'kVA' is different from 'power' with 'kVA'.
             *
             */
            base.parse_element (/<cim:ReadingType.measurementKind>([\s\S]*?)<\/cim:ReadingType.measurementKind>/g, obj, "measurementKind", base.to_string, sub, context);

            /**
             * Time attribute inherent or fundamental to the reading value (as opposed to 'macroPeriod' that supplies an "adjective" to describe aspects of a time period with regard to the measurement).
             *
             * It refers to the way the value was originally measured and not to the frequency at which it is reported or presented. For example, an hourly interval of consumption data would have value 'hourly' as an attribute. However in the case of an hourly sampled voltage value, the meterReadings schema would carry the 'hourly' interval size information.
             *
             */
            base.parse_element (/<cim:ReadingType.measuringPeriod>([\s\S]*?)<\/cim:ReadingType.measuringPeriod>/g, obj, "measuringPeriod", base.to_string, sub, context);

            /**
             * Metering-specific multiplier.
             *
             */
            base.parse_element (/<cim:ReadingType.multiplier>([\s\S]*?)<\/cim:ReadingType.multiplier>/g, obj, "multiplier", base.to_string, sub, context);

            /**
             * Metering-specific phase code.
             *
             */
            base.parse_element (/<cim:ReadingType.phases>([\s\S]*?)<\/cim:ReadingType.phases>/g, obj, "phases", base.to_string, sub, context);

            /**
             * Time of use (TOU) bucket the reading value is attributed to.
             *
             * Value 0 means not applicable.
             *
             */
            base.parse_element (/<cim:ReadingType.tou>([\s\S]*?)<\/cim:ReadingType.tou>/g, obj, "tou", base.to_string, sub, context);

            /**
             * Metering-specific unit.
             *
             */
            base.parse_element (/<cim:ReadingType.unit>([\s\S]*?)<\/cim:ReadingType.unit>/g, obj, "unit", base.to_string, sub, context);

            /**
             * Pending calculation that produced this reading type.
             *
             */
            base.parse_attribute (/<cim:ReadingType.PendingCalculation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PendingCalculation", sub, context, true);

            /**
             * Channel reporting/collecting register values with this type information.
             *
             */
            base.parse_attribute (/<cim:ReadingType.Channel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Channel", sub, context, true);

            bucket = context.parsed.ReadingType;
            if (null == bucket)
                context.parsed.ReadingType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Time sequence of readings of the same reading type.
         *
         * Contained interval readings may need conversion through the application of an offset and a scalar defined in associated pending.
         *
         */
        function parse_IntervalBlock (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "IntervalBlock";
            /**
             * Pending calculation to apply to interval reading values contained by this block (after which the resulting reading type is different than the original because it reflects the conversion result).
             *
             */
            base.parse_attribute (/<cim:IntervalBlock.PendingCalculation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PendingCalculation", sub, context, true);

            /**
             * Type information for interval reading values contained in this block.
             *
             */
            base.parse_attribute (/<cim:IntervalBlock.ReadingType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReadingType", sub, context, true);

            /**
             * Meter reading containing this interval block.
             *
             */
            base.parse_attribute (/<cim:IntervalBlock.MeterReading\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MeterReading", sub, context, true);

            bucket = context.parsed.IntervalBlock;
            if (null == bucket)
                context.parsed.IntervalBlock = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * PAN action/command used to issue pricing information to a PAN device.
         *
         */
        function parse_PanPricing (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_EndDeviceAction (context, sub);
            obj.cls = "PanPricing";
            /**
             * Unique identifier for the commodity provider.
             *
             */
            base.parse_element (/<cim:PanPricing.providerID>([\s\S]*?)<\/cim:PanPricing.providerID>/g, obj, "providerID", base.to_string, sub, context);

            bucket = context.parsed.PanPricing;
            if (null == bucket)
                context.parsed.PanPricing = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Simple end device function distinguished by 'kind'.
         *
         * Use this class for instances that cannot be represented by another end device function specialisations.
         *
         */
        function parse_SimpleEndDeviceFunction (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_EndDeviceFunction (context, sub);
            obj.cls = "SimpleEndDeviceFunction";
            /**
             * Kind of this function.
             *
             */
            base.parse_element (/<cim:SimpleEndDeviceFunction.kind>([\s\S]*?)<\/cim:SimpleEndDeviceFunction.kind>/g, obj, "kind", base.to_string, sub, context);

            bucket = context.parsed.SimpleEndDeviceFunction;
            if (null == bucket)
                context.parsed.SimpleEndDeviceFunction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of end device function.
         *
         */
        function parse_EndDeviceFunctionKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "EndDeviceFunctionKind";
            /**
             * Detection and monitoring of reverse flow.
             *
             */
            base.parse_element (/<cim:EndDeviceFunctionKind.reverseFlow>([\s\S]*?)<\/cim:EndDeviceFunctionKind.reverseFlow>/g, obj, "reverseFlow", base.to_string, sub, context);

            /**
             * Demand response functions.
             *
             */
            base.parse_element (/<cim:EndDeviceFunctionKind.demandResponse>([\s\S]*?)<\/cim:EndDeviceFunctionKind.demandResponse>/g, obj, "demandResponse", base.to_string, sub, context);

            /**
             * Presentation of metered values to a user or another system (always a function of a meter, but might not be supported by a load control unit).
             *
             */
            base.parse_element (/<cim:EndDeviceFunctionKind.metrology>([\s\S]*?)<\/cim:EndDeviceFunctionKind.metrology>/g, obj, "metrology", base.to_string, sub, context);

            /**
             * Reporting historical power interruption data.
             *
             */
            base.parse_element (/<cim:EndDeviceFunctionKind.outageHistory>([\s\S]*?)<\/cim:EndDeviceFunctionKind.outageHistory>/g, obj, "outageHistory", base.to_string, sub, context);

            /**
             * Support for one or more relays that may be programmable in the meter (and tied to TOU, time pulse, load control or other functions).
             *
             */
            base.parse_element (/<cim:EndDeviceFunctionKind.relaysProgramming>([\s\S]*?)<\/cim:EndDeviceFunctionKind.relaysProgramming>/g, obj, "relaysProgramming", base.to_string, sub, context);

            /**
             * On-request reads.
             *
             */
            base.parse_element (/<cim:EndDeviceFunctionKind.onRequestRead>([\s\S]*?)<\/cim:EndDeviceFunctionKind.onRequestRead>/g, obj, "onRequestRead", base.to_string, sub, context);

            /**
             * Autonomous application of daylight saving time (DST).
             *
             */
            base.parse_element (/<cim:EndDeviceFunctionKind.autonomousDst>([\s\S]*?)<\/cim:EndDeviceFunctionKind.autonomousDst>/g, obj, "autonomousDst", base.to_string, sub, context);

            /**
             * Electricity metering.
             *
             */
            base.parse_element (/<cim:EndDeviceFunctionKind.electricMetering>([\s\S]*?)<\/cim:EndDeviceFunctionKind.electricMetering>/g, obj, "electricMetering", base.to_string, sub, context);

            /**
             * Gas metering.
             *
             */
            base.parse_element (/<cim:EndDeviceFunctionKind.gasMetering>([\s\S]*?)<\/cim:EndDeviceFunctionKind.gasMetering>/g, obj, "gasMetering", base.to_string, sub, context);

            /**
             * Water metering.
             *
             */
            base.parse_element (/<cim:EndDeviceFunctionKind.waterMetering>([\s\S]*?)<\/cim:EndDeviceFunctionKind.waterMetering>/g, obj, "waterMetering", base.to_string, sub, context);

            bucket = context.parsed.EndDeviceFunctionKind;
            if (null == bucket)
                context.parsed.EndDeviceFunctionKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Timing for the control actions of end devices.
         *
         */
        function parse_EndDeviceTiming (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "EndDeviceTiming";
            /**
             * Duration of the end device control action or the business event that is the subject of the end device control.
             *
             */
            base.parse_element (/<cim:EndDeviceTiming.duration>([\s\S]*?)<\/cim:EndDeviceTiming.duration>/g, obj, "duration", base.to_string, sub, context);

            /**
             * True if 'duration' is indefinite.
             *
             */
            base.parse_element (/<cim:EndDeviceTiming.durationIndefinite>([\s\S]*?)<\/cim:EndDeviceTiming.durationIndefinite>/g, obj, "durationIndefinite", base.to_boolean, sub, context);

            /**
             * Start and end time of an interval during which end device control actions are to be executed.
             *
             */
            base.parse_element (/<cim:EndDeviceTiming.interval>([\s\S]*?)<\/cim:EndDeviceTiming.interval>/g, obj, "interval", base.to_string, sub, context);

            /**
             * Kind of randomisation to be applied to the end device control actions to be executed.
             *
             */
            base.parse_element (/<cim:EndDeviceTiming.randomisation>([\s\S]*?)<\/cim:EndDeviceTiming.randomisation>/g, obj, "randomisation", base.to_string, sub, context);

            bucket = context.parsed.EndDeviceTiming;
            if (null == bucket)
                context.parsed.EndDeviceTiming = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Action/command performed by an end device on a device other than the end device.
         *
         */
        function parse_EndDeviceAction (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "EndDeviceAction";
            /**
             * Command text.
             *
             */
            base.parse_element (/<cim:EndDeviceAction.command>([\s\S]*?)<\/cim:EndDeviceAction.command>/g, obj, "command", base.to_string, sub, context);

            /**
             * Amount of time the action of this control is to remain active.
             *
             */
            base.parse_element (/<cim:EndDeviceAction.duration>([\s\S]*?)<\/cim:EndDeviceAction.duration>/g, obj, "duration", base.to_string, sub, context);

            /**
             * True if the action of this control is indefinite.
             *
             */
            base.parse_element (/<cim:EndDeviceAction.durationIndefinite>([\s\S]*?)<\/cim:EndDeviceAction.durationIndefinite>/g, obj, "durationIndefinite", base.to_boolean, sub, context);

            /**
             * Start date and time for action of this control.
             *
             */
            base.parse_element (/<cim:EndDeviceAction.startDateTime>([\s\S]*?)<\/cim:EndDeviceAction.startDateTime>/g, obj, "startDateTime", base.to_datetime, sub, context);

            /**
             * End device control issuing this end device action.
             *
             */
            base.parse_attribute (/<cim:EndDeviceAction.EndDeviceControl\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceControl", sub, context, true);

            bucket = context.parsed.EndDeviceAction;
            if (null == bucket)
                context.parsed.EndDeviceAction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Common representation for reading values.
         *
         * Note that a reading value may have multiple qualities, as produced by various systems ('ReadingQuality.source').
         *
         */
        function parse_BaseReading (context, sub)
        {
            var obj;
            var bucket;

            obj = Meas.parse_MeasurementValue (context, sub);
            obj.cls = "BaseReading";
            /**
             * (used only when there are detailed auditing requirements) Date and time at which the reading was first delivered to the metering system.
             *
             */
            base.parse_element (/<cim:BaseReading.reportedDateTime>([\s\S]*?)<\/cim:BaseReading.reportedDateTime>/g, obj, "reportedDateTime", base.to_datetime, sub, context);

            /**
             * System that originally supplied the reading (e.g., customer, AMI system, handheld reading system, another enterprise system, etc.).
             *
             */
            base.parse_element (/<cim:BaseReading.source>([\s\S]*?)<\/cim:BaseReading.source>/g, obj, "source", base.to_string, sub, context);

            /**
             * Start and end of the period for those readings whose type has a time attribute such as 'billing', seasonal' or 'forTheSpecifiedPeriod'.
             *
             */
            base.parse_element (/<cim:BaseReading.timePeriod>([\s\S]*?)<\/cim:BaseReading.timePeriod>/g, obj, "timePeriod", base.to_string, sub, context);

            /**
             * Value of this reading.
             *
             */
            base.parse_element (/<cim:BaseReading.value>([\s\S]*?)<\/cim:BaseReading.value>/g, obj, "value", base.to_string, sub, context);

            bucket = context.parsed.BaseReading;
            if (null == bucket)
                context.parsed.BaseReading = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Event detected by a device function associated with the end device.
         *
         */
        function parse_EndDeviceEvent (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_ActivityRecord (context, sub);
            obj.cls = "EndDeviceEvent";
            /**
             * Unique identifier of the business entity originating an end device control.
             *
             */
            base.parse_element (/<cim:EndDeviceEvent.issuerID>([\s\S]*?)<\/cim:EndDeviceEvent.issuerID>/g, obj, "issuerID", base.to_string, sub, context);

            /**
             * Identifier assigned by the initiator (e.g. retail electric provider) of an end device control action to uniquely identify the demand response event, text message, or other subject of the control action.
             *
             * Can be used when cancelling an event or text message request or to identify the originating event or text message in a consequential end device event.
             *
             */
            base.parse_element (/<cim:EndDeviceEvent.issuerTrackingID>([\s\S]*?)<\/cim:EndDeviceEvent.issuerTrackingID>/g, obj, "issuerTrackingID", base.to_string, sub, context);

            /**
             * (if user initiated) ID of user who initiated this end device event.
             *
             */
            base.parse_element (/<cim:EndDeviceEvent.userID>([\s\S]*?)<\/cim:EndDeviceEvent.userID>/g, obj, "userID", base.to_string, sub, context);

            /**
             * End device that reported this end device event.
             *
             */
            base.parse_attribute (/<cim:EndDeviceEvent.EndDevice\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDevice", sub, context, true);

            /**
             * Usage point for which this end device event is reported.
             *
             */
            base.parse_attribute (/<cim:EndDeviceEvent.UsagePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UsagePoint", sub, context, true);

            /**
             * Set of measured values to which this event applies.
             *
             */
            base.parse_attribute (/<cim:EndDeviceEvent.MeterReading\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MeterReading", sub, context, true);

            /**
             * Type of this end device event.
             *
             */
            base.parse_attribute (/<cim:EndDeviceEvent.EndDeviceEventType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceEventType", sub, context, true);

            bucket = context.parsed.EndDeviceEvent;
            if (null == bucket)
                context.parsed.EndDeviceEvent = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Reason for the reading being taken.
         *
         */
        function parse_ReadingReasonKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ReadingReasonKind";
            /**
             * Reading(s) taken or to be taken in conjunction with installation of a meter.
             *
             */
            base.parse_element (/<cim:ReadingReasonKind.installation>([\s\S]*?)<\/cim:ReadingReasonKind.installation>/g, obj, "installation", base.to_string, sub, context);

            /**
             * Reading(s) taken or to be taken in conjunction with removal of a meter.
             *
             */
            base.parse_element (/<cim:ReadingReasonKind.removal>([\s\S]*?)<\/cim:ReadingReasonKind.removal>/g, obj, "removal", base.to_string, sub, context);

            /**
             * Reading(s) taken or to be taken in response to an inquiry by a customer or other party.
             *
             */
            base.parse_element (/<cim:ReadingReasonKind.inquiry>([\s\S]*?)<\/cim:ReadingReasonKind.inquiry>/g, obj, "inquiry", base.to_string, sub, context);

            /**
             * Reading(s) taken or to be taken in response to a billing-related inquiry by a customer or other party.
             *
             * A variant of 'inquiry'.
             *
             */
            base.parse_element (/<cim:ReadingReasonKind.billing>([\s\S]*?)<\/cim:ReadingReasonKind.billing>/g, obj, "billing", base.to_string, sub, context);

            /**
             * Reading(s) taken or to be taken in conjunction with a customer move-in event.
             *
             */
            base.parse_element (/<cim:ReadingReasonKind.moveIn>([\s\S]*?)<\/cim:ReadingReasonKind.moveIn>/g, obj, "moveIn", base.to_string, sub, context);

            /**
             * Reading(s) taken or to be taken in conjunction with a customer move-out event.
             *
             */
            base.parse_element (/<cim:ReadingReasonKind.moveOut>([\s\S]*?)<\/cim:ReadingReasonKind.moveOut>/g, obj, "moveOut", base.to_string, sub, context);

            /**
             * Reading(s) taken or to be taken in conjunction with the resetting of one or more demand registers in a meter.
             *
             */
            base.parse_element (/<cim:ReadingReasonKind.demandReset>([\s\S]*?)<\/cim:ReadingReasonKind.demandReset>/g, obj, "demandReset", base.to_string, sub, context);

            /**
             * Reading(s) taken or to be taken in conjunction with a disconnection of service.
             *
             */
            base.parse_element (/<cim:ReadingReasonKind.serviceDisconnect>([\s\S]*?)<\/cim:ReadingReasonKind.serviceDisconnect>/g, obj, "serviceDisconnect", base.to_string, sub, context);

            /**
             * Reading(s) taken or to be taken in conjunction with a connection or re-connection of service.
             *
             */
            base.parse_element (/<cim:ReadingReasonKind.serviceConnect>([\s\S]*?)<\/cim:ReadingReasonKind.serviceConnect>/g, obj, "serviceConnect", base.to_string, sub, context);

            /**
             * Reading(s) taken or to be taken to support management of loads on distribution networks or devices.
             *
             */
            base.parse_element (/<cim:ReadingReasonKind.loadManagement>([\s\S]*?)<\/cim:ReadingReasonKind.loadManagement>/g, obj, "loadManagement", base.to_string, sub, context);

            /**
             * Reading(s) taken or to be taken to support research and analysis of loads on distribution networks or devices.
             *
             */
            base.parse_element (/<cim:ReadingReasonKind.loadResearch>([\s\S]*?)<\/cim:ReadingReasonKind.loadResearch>/g, obj, "loadResearch", base.to_string, sub, context);

            /**
             * Reading(s) taken or to be taken for some other reason or purpose.
             *
             */
            base.parse_element (/<cim:ReadingReasonKind.other>([\s\S]*?)<\/cim:ReadingReasonKind.other>/g, obj, "other", base.to_string, sub, context);

            bucket = context.parsed.ReadingReasonKind;
            if (null == bucket)
                context.parsed.ReadingReasonKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Multiplier applied at the usage point.
         *
         */
        function parse_ServiceMultiplier (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ServiceMultiplier";
            /**
             * Kind of multiplier.
             *
             */
            base.parse_element (/<cim:ServiceMultiplier.kind>([\s\S]*?)<\/cim:ServiceMultiplier.kind>/g, obj, "kind", base.to_string, sub, context);

            /**
             * Multiplier value.
             *
             */
            base.parse_element (/<cim:ServiceMultiplier.value>([\s\S]*?)<\/cim:ServiceMultiplier.value>/g, obj, "value", base.to_float, sub, context);

            /**
             * Usage point applying this multiplier.
             *
             */
            base.parse_attribute (/<cim:ServiceMultiplier.UsagePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UsagePoint", sub, context, true);

            bucket = context.parsed.ServiceMultiplier;
            if (null == bucket)
                context.parsed.ServiceMultiplier = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Physical asset that performs the metering role of the usage point.
         *
         * Used for measuring consumption and detection of events.
         *
         */
        function parse_Meter (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_EndDevice (context, sub);
            obj.cls = "Meter";
            /**
             * Meter form designation per ANSI C12.10 or other applicable standard.
             *
             * An alphanumeric designation denoting the circuit arrangement for which the meter is applicable and its specific terminal arrangement.
             *
             */
            base.parse_element (/<cim:Meter.formNumber>([\s\S]*?)<\/cim:Meter.formNumber>/g, obj, "formNumber", base.to_string, sub, context);

            bucket = context.parsed.Meter;
            if (null == bucket)
                context.parsed.Meter = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * When present, a scalar conversion that needs to be applied to every IntervalReading.value contained in IntervalBlock.
         *
         * This conversion results in a new associated ReadingType, reflecting the true dimensions of IntervalReading values after the conversion.
         *
         */
        function parse_PendingCalculation (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PendingCalculation";
            /**
             * Whether scalars should be applied before adding the 'offset'.
             *
             */
            base.parse_element (/<cim:PendingCalculation.multiplyBeforeAdd>([\s\S]*?)<\/cim:PendingCalculation.multiplyBeforeAdd>/g, obj, "multiplyBeforeAdd", base.to_boolean, sub, context);

            /**
             * (if applicable) Offset to be added as well as multiplication using scalars.
             *
             */
            base.parse_element (/<cim:PendingCalculation.offset>([\s\S]*?)<\/cim:PendingCalculation.offset>/g, obj, "offset", base.to_string, sub, context);

            /**
             * (if scalar is rational number) When 'IntervalReading.value' is multiplied by 'scalarNumerator' and divided by this value, it causes a unit of measure conversion to occur, resulting in the 'ReadingType.unit'.
             *
             */
            base.parse_element (/<cim:PendingCalculation.scalarDenominator>([\s\S]*?)<\/cim:PendingCalculation.scalarDenominator>/g, obj, "scalarDenominator", base.to_string, sub, context);

            /**
             * (if scalar is floating number) When multiplied with 'IntervalReading.value', it causes a unit of measure conversion to occur, according to the 'ReadingType.unit'.
             *
             */
            base.parse_element (/<cim:PendingCalculation.scalarFloat>([\s\S]*?)<\/cim:PendingCalculation.scalarFloat>/g, obj, "scalarFloat", base.to_float, sub, context);

            /**
             * (if scalar is integer or rational number)  When the scalar is a simple integer, and this attribute is presented alone and multiplied with 'IntervalReading.value', it causes a unit of measure conversion to occur, resulting in the 'ReadingType.unit'.
             *
             * It is never used in conjunction with 'scalarFloat', only with 'scalarDenominator'.
             *
             */
            base.parse_element (/<cim:PendingCalculation.scalarNumerator>([\s\S]*?)<\/cim:PendingCalculation.scalarNumerator>/g, obj, "scalarNumerator", base.to_string, sub, context);

            /**
             * Reading type resulting from this pending conversion.
             *
             */
            base.parse_attribute (/<cim:PendingCalculation.ReadingType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReadingType", sub, context, true);

            bucket = context.parsed.PendingCalculation;
            if (null == bucket)
                context.parsed.PendingCalculation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Interharmonics are represented as a rational number 'numerator' / 'denominator', and harmonics are represented using the same mechanism and identified by 'denominator'=1.
         *
         */
        function parse_ReadingInterharmonic (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ReadingInterharmonic";
            /**
             * Interharmonic denominator.
             *
             * Value 0 means not applicable. Value 2 is used in combination with 'numerator'=1 to represent interharmonic 1/2. Finally, value 1 indicates the harmonic of the order specified with 'numerator'.
             *
             */
            base.parse_element (/<cim:ReadingInterharmonic.denominator>([\s\S]*?)<\/cim:ReadingInterharmonic.denominator>/g, obj, "denominator", base.to_string, sub, context);

            /**
             * Interharmonic numerator.
             *
             * Value 0 means not applicable. Value 1 is used in combination with 'denominator'=2 to represent interharmonic 1/2, and with 'denominator'=1 it represents fundamental frequency. Finally, values greater than 1 indicate the harmonic of that order (e.g., 'numerator'=5 is the fifth harmonic).
             *
             */
            base.parse_element (/<cim:ReadingInterharmonic.numerator>([\s\S]*?)<\/cim:ReadingInterharmonic.numerator>/g, obj, "numerator", base.to_string, sub, context);

            bucket = context.parsed.ReadingInterharmonic;
            if (null == bucket)
                context.parsed.ReadingInterharmonic = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Detailed description for a control produced by an end device.
         *
         * Values in attributes allow for creation of recommended codes to be used for identifying end device controls as follows: &lt;type&gt;.&lt;domain&gt;.&lt;subDomain&gt;.&lt;eventOrAction&gt;.
         *
         */
        function parse_EndDeviceControlType (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "EndDeviceControlType";
            /**
             * High-level nature of the control.
             *
             */
            base.parse_element (/<cim:EndDeviceControlType.domain>([\s\S]*?)<\/cim:EndDeviceControlType.domain>/g, obj, "domain", base.to_string, sub, context);

            /**
             * The most specific part of this control type.
             *
             * It is mainly in the form of a verb that gives action to the control that just occurred.
             *
             */
            base.parse_element (/<cim:EndDeviceControlType.eventOrAction>([\s\S]*?)<\/cim:EndDeviceControlType.eventOrAction>/g, obj, "eventOrAction", base.to_string, sub, context);

            /**
             * More specific nature of the control, as a further sub-categorisation of 'domain'.
             *
             */
            base.parse_element (/<cim:EndDeviceControlType.subDomain>([\s\S]*?)<\/cim:EndDeviceControlType.subDomain>/g, obj, "subDomain", base.to_string, sub, context);

            /**
             * Type of physical device from which the control was created.
             *
             * A value of zero (0) can be used when the source is unknown.
             *
             */
            base.parse_element (/<cim:EndDeviceControlType.type>([\s\S]*?)<\/cim:EndDeviceControlType.type>/g, obj, "type", base.to_string, sub, context);

            bucket = context.parsed.EndDeviceControlType;
            if (null == bucket)
                context.parsed.EndDeviceControlType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of randomisation to be applied to control the timing of end device control commands and/or the definition of demand response and load control events.
         *
         * Value other than 'none' is typically used to mitigate potential deleterious effects of simultaneous operation of multiple devices.
         *
         */
        function parse_RandomisationKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "RandomisationKind";
            /**
             * Start time of an event or control action affecting one or more multiple devices is randomised.
             *
             */
            base.parse_element (/<cim:RandomisationKind.start>([\s\S]*?)<\/cim:RandomisationKind.start>/g, obj, "start", base.to_string, sub, context);

            /**
             * End time of an event or control action affecting one or more devices is randomised to prevent simultaneous operation.
             *
             */
            base.parse_element (/<cim:RandomisationKind.end>([\s\S]*?)<\/cim:RandomisationKind.end>/g, obj, "end", base.to_string, sub, context);

            /**
             * Both the start time and the end time of an event or control action affecting one or more devices are randomised to prevent simultaneous operation.
             *
             */
            base.parse_element (/<cim:RandomisationKind.startAndEnd>([\s\S]*?)<\/cim:RandomisationKind.startAndEnd>/g, obj, "startAndEnd", base.to_string, sub, context);

            /**
             * Randomisation of start and/or end times involving the operation of one or more devices is controlled by default settings for the device(s).
             *
             */
            base.parse_element (/<cim:RandomisationKind.default>([\s\S]*?)<\/cim:RandomisationKind.default>/g, obj, "default", base.to_string, sub, context);

            /**
             * Neither the start time nor the end time of an event or control action affecting one or more devices is randomised.
             *
             */
            base.parse_element (/<cim:RandomisationKind.none>([\s\S]*?)<\/cim:RandomisationKind.none>/g, obj, "none", base.to_string, sub, context);

            bucket = context.parsed.RandomisationKind;
            if (null == bucket)
                context.parsed.RandomisationKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Abstraction for management of group communications within a two-way AMR system or the data for a group of related usage points.
         *
         * Commands can be issued to all of the usage points that belong to a usage point group using a defined group address and the underlying AMR communication infrastructure.
         *
         */
        function parse_UsagePointGroup (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "UsagePointGroup";
            /**
             * Type of this group.
             *
             */
            base.parse_element (/<cim:UsagePointGroup.type>([\s\S]*?)<\/cim:UsagePointGroup.type>/g, obj, "type", base.to_string, sub, context);

            bucket = context.parsed.UsagePointGroup;
            if (null == bucket)
                context.parsed.UsagePointGroup = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Work involving meters.
         *
         */
        function parse_MeterServiceWork (context, sub)
        {
            var obj;
            var bucket;

            obj = Work.parse_Work (context, sub);
            obj.cls = "MeterServiceWork";
            /**
             * Meter on which this non-replacement work is performed.
             *
             */
            base.parse_attribute (/<cim:MeterServiceWork.Meter\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Meter", sub, context, true);

            /**
             * Old meter replaced by this work.
             *
             */
            base.parse_attribute (/<cim:MeterServiceWork.OldMeter\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OldMeter", sub, context, true);

            /**
             * Usage point to which this meter service work applies.
             *
             */
            base.parse_attribute (/<cim:MeterServiceWork.UsagePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UsagePoint", sub, context, true);

            bucket = context.parsed.MeterServiceWork;
            if (null == bucket)
                context.parsed.MeterServiceWork = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Transmission mode for end device display controls, applicable to premises area network (PAN) devices.
         *
         */
        function parse_TransmissionModeKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TransmissionModeKind";
            /**
             * Message transmission mode whereby messages or commands are sent to specific devices.
             *
             */
            base.parse_element (/<cim:TransmissionModeKind.normal>([\s\S]*?)<\/cim:TransmissionModeKind.normal>/g, obj, "normal", base.to_string, sub, context);

            /**
             * Message transmission mode whereby messages or commands are broadcast to unspecified devices listening for such communications.
             *
             */
            base.parse_element (/<cim:TransmissionModeKind.anonymous>([\s\S]*?)<\/cim:TransmissionModeKind.anonymous>/g, obj, "anonymous", base.to_string, sub, context);

            /**
             * Message transmission mode whereby messages or commands are sent by both 'normal' and 'anonymous' methods.
             *
             */
            base.parse_element (/<cim:TransmissionModeKind.both>([\s\S]*?)<\/cim:TransmissionModeKind.both>/g, obj, "both", base.to_string, sub, context);

            bucket = context.parsed.TransmissionModeKind;
            if (null == bucket)
                context.parsed.TransmissionModeKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Detailed description for a quality of a reading value, produced by an end device or a system.
         *
         * Values in attributes allow for creation of the recommended codes to be used for identifying reading value quality codes as follows: &lt;systemId&gt;.&lt;category&gt;.&lt;subCategory&gt;.
         *
         */
        function parse_ReadingQualityType (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ReadingQualityType";
            /**
             * High-level nature of the reading value quality.
             *
             */
            base.parse_element (/<cim:ReadingQualityType.category>([\s\S]*?)<\/cim:ReadingQualityType.category>/g, obj, "category", base.to_string, sub, context);

            /**
             * More specific nature of the reading value quality, as a further sub-categorisation of 'category'.
             *
             */
            base.parse_element (/<cim:ReadingQualityType.subCategory>([\s\S]*?)<\/cim:ReadingQualityType.subCategory>/g, obj, "subCategory", base.to_string, sub, context);

            /**
             * Identification of the system which has declared the issue with the data or provided commentary on the data.
             *
             */
            base.parse_element (/<cim:ReadingQualityType.systemId>([\s\S]*?)<\/cim:ReadingQualityType.systemId>/g, obj, "systemId", base.to_string, sub, context);

            bucket = context.parsed.ReadingQualityType;
            if (null == bucket)
                context.parsed.ReadingQualityType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Communication function of communication equipment or a device such as a meter.
         *
         */
        function parse_ComFunction (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_EndDeviceFunction (context, sub);
            obj.cls = "ComFunction";
            /**
             * Communication ID number (e.g. serial number, IP address, telephone number, etc.) of the AMR module which serves this meter.
             *
             */
            base.parse_element (/<cim:ComFunction.amrAddress>([\s\S]*?)<\/cim:ComFunction.amrAddress>/g, obj, "amrAddress", base.to_string, sub, context);

            /**
             * Communication ID number (e.g. port number, serial number, data collector ID, etc.) of the parent device associated to this AMR module.
             *
             */
            base.parse_element (/<cim:ComFunction.amrRouter>([\s\S]*?)<\/cim:ComFunction.amrRouter>/g, obj, "amrRouter", base.to_string, sub, context);

            /**
             * Kind of communication direction.
             *
             */
            base.parse_element (/<cim:ComFunction.direction>([\s\S]*?)<\/cim:ComFunction.direction>/g, obj, "direction", base.to_string, sub, context);

            /**
             * Kind of communication technology.
             *
             */
            base.parse_element (/<cim:ComFunction.technology>([\s\S]*?)<\/cim:ComFunction.technology>/g, obj, "technology", base.to_string, sub, context);

            /**
             * Module performing this communication function.
             *
             */
            base.parse_attribute (/<cim:ComFunction.ComModule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ComModule", sub, context, true);

            bucket = context.parsed.ComFunction;
            if (null == bucket)
                context.parsed.ComFunction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Detailed description for an event produced by an end device.
         *
         * Values in attributes allow for creation of recommended codes to be used for identifying end device events as follows: &lt;type&gt;.&lt;domain&gt;.&lt;subDomain&gt;.&lt;eventOrAction&gt;.
         *
         */
        function parse_EndDeviceEventType (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "EndDeviceEventType";
            /**
             * High-level nature of the event.
             *
             * By properly classifying events by a small set of domain codes, a system can more easily run reports based on the types of events that have occurred or been received.
             *
             */
            base.parse_element (/<cim:EndDeviceEventType.domain>([\s\S]*?)<\/cim:EndDeviceEventType.domain>/g, obj, "domain", base.to_string, sub, context);

            /**
             * The most specific part of this event type.
             *
             * It is mainly in the form of a verb that gives action to the event that just occurred.
             *
             */
            base.parse_element (/<cim:EndDeviceEventType.eventOrAction>([\s\S]*?)<\/cim:EndDeviceEventType.eventOrAction>/g, obj, "eventOrAction", base.to_string, sub, context);

            /**
             * More specific nature of the event, as a further sub-categorisation of 'domain'.
             *
             */
            base.parse_element (/<cim:EndDeviceEventType.subDomain>([\s\S]*?)<\/cim:EndDeviceEventType.subDomain>/g, obj, "subDomain", base.to_string, sub, context);

            /**
             * Type of physical device from which the event was created.
             *
             * A value of zero (0) can be used when the source is unknown.
             *
             */
            base.parse_element (/<cim:EndDeviceEventType.type>([\s\S]*?)<\/cim:EndDeviceEventType.type>/g, obj, "type", base.to_string, sub, context);

            bucket = context.parsed.EndDeviceEventType;
            if (null == bucket)
                context.parsed.EndDeviceEventType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Asset container that performs one or more end device functions.
         *
         * One type of end device is a meter which can perform metering, load management, connect/disconnect, accounting functions, etc. Some end devices, such as ones monitoring and controlling air conditioners, refrigerators, pool pumps may be connected to a meter. All end devices may have communication capability defined by the associated communication function(s). An end device may be owned by a consumer, a service provider, utility or otherwise.
         *
         */
        function parse_EndDevice (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetContainer (context, sub);
            obj.cls = "EndDevice";
            /**
             * Automated meter reading (AMR) or other communication system responsible for communications to this end device.
             *
             */
            base.parse_element (/<cim:EndDevice.amrSystem>([\s\S]*?)<\/cim:EndDevice.amrSystem>/g, obj, "amrSystem", base.to_string, sub, context);

            /**
             * Installation code.
             *
             */
            base.parse_element (/<cim:EndDevice.installCode>([\s\S]*?)<\/cim:EndDevice.installCode>/g, obj, "installCode", base.to_string, sub, context);

            /**
             * If true, this is a premises area network (PAN) device.
             *
             */
            base.parse_element (/<cim:EndDevice.isPan>([\s\S]*?)<\/cim:EndDevice.isPan>/g, obj, "isPan", base.to_boolean, sub, context);

            /**
             * If true, there is no physical device.
             *
             * As an example, a virtual meter can be defined to aggregate the consumption for two or more physical meters. Otherwise, this is a physical hardware device.
             *
             */
            base.parse_element (/<cim:EndDevice.isVirtual>([\s\S]*?)<\/cim:EndDevice.isVirtual>/g, obj, "isVirtual", base.to_boolean, sub, context);

            /**
             * Time zone offset relative to GMT for the location of this end device.
             *
             */
            base.parse_element (/<cim:EndDevice.timeZoneOffset>([\s\S]*?)<\/cim:EndDevice.timeZoneOffset>/g, obj, "timeZoneOffset", base.to_string, sub, context);

            /**
             * End device data.
             *
             */
            base.parse_attribute (/<cim:EndDevice.EndDeviceInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceInfo", sub, context, true);

            /**
             * Service location whose service delivery is measured by this end device.
             *
             */
            base.parse_attribute (/<cim:EndDevice.ServiceLocation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ServiceLocation", sub, context, true);

            /**
             * Customer owning this end device.
             *
             */
            base.parse_attribute (/<cim:EndDevice.Customer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Customer", sub, context, true);

            /**
             * Usage point to which this end device belongs.
             *
             */
            base.parse_attribute (/<cim:EndDevice.UsagePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UsagePoint", sub, context, true);

            bucket = context.parsed.EndDevice;
            if (null == bucket)
                context.parsed.EndDevice = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of communication technology.
         *
         */
        function parse_ComTechnologyKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ComTechnologyKind";
            /**
             * Communicates using a public cellular radio network.
             *
             * A specific variant of 'rf'.
             *
             */
            base.parse_element (/<cim:ComTechnologyKind.cellular>([\s\S]*?)<\/cim:ComTechnologyKind.cellular>/g, obj, "cellular", base.to_string, sub, context);

            /**
             * Communicates using one or more of a family of frame-based computer networking technologies conforming to the IEEE 802.3 standard.
             *
             */
            base.parse_element (/<cim:ComTechnologyKind.ethernet>([\s\S]*?)<\/cim:ComTechnologyKind.ethernet>/g, obj, "ethernet", base.to_string, sub, context);

            /**
             * Communicates using power line communication technologies conforming to the standards established by the HomePlug Powerline Alliance.
             *
             * A specific variant of 'plc'.
             *
             */
            base.parse_element (/<cim:ComTechnologyKind.homePlug>([\s\S]*?)<\/cim:ComTechnologyKind.homePlug>/g, obj, "homePlug", base.to_string, sub, context);

            /**
             * Communicates using a public one-way or two-way radio-based paging network.
             *
             * A specific variant of 'rf'.
             *
             */
            base.parse_element (/<cim:ComTechnologyKind.pager>([\s\S]*?)<\/cim:ComTechnologyKind.pager>/g, obj, "pager", base.to_string, sub, context);

            /**
             * Communicates using a basic, wireline telephone system.
             *
             */
            base.parse_element (/<cim:ComTechnologyKind.phone>([\s\S]*?)<\/cim:ComTechnologyKind.phone>/g, obj, "phone", base.to_string, sub, context);

            /**
             * Communicates using power line communication technologies.
             *
             */
            base.parse_element (/<cim:ComTechnologyKind.plc>([\s\S]*?)<\/cim:ComTechnologyKind.plc>/g, obj, "plc", base.to_string, sub, context);

            /**
             * Communicates using private or public radio-based technology.
             *
             */
            base.parse_element (/<cim:ComTechnologyKind.rf>([\s\S]*?)<\/cim:ComTechnologyKind.rf>/g, obj, "rf", base.to_string, sub, context);

            /**
             * Communicates using a mesh radio technology.
             *
             * A specific variant of 'rf'.
             *
             */
            base.parse_element (/<cim:ComTechnologyKind.rfMesh>([\s\S]*?)<\/cim:ComTechnologyKind.rfMesh>/g, obj, "rfMesh", base.to_string, sub, context);

            /**
             * Communicates using radio communication technologies conforming to the standards established by the ZigBee.
             *
             * A specific variant of 'rf'.
             *
             */
            base.parse_element (/<cim:ComTechnologyKind.zigbee>([\s\S]*?)<\/cim:ComTechnologyKind.zigbee>/g, obj, "zigbee", base.to_string, sub, context);

            bucket = context.parsed.ComTechnologyKind;
            if (null == bucket)
                context.parsed.ComTechnologyKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Inherent capabilities of an end device (i.e., the functions it supports).
         *
         */
        function parse_EndDeviceCapability (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "EndDeviceCapability";
            /**
             * True if autonomous DST (daylight saving time) function is supported.
             *
             */
            base.parse_element (/<cim:EndDeviceCapability.autonomousDst>([\s\S]*?)<\/cim:EndDeviceCapability.autonomousDst>/g, obj, "autonomousDst", base.to_boolean, sub, context);

            /**
             * True if communication function is supported.
             *
             */
            base.parse_element (/<cim:EndDeviceCapability.communication>([\s\S]*?)<\/cim:EndDeviceCapability.communication>/g, obj, "communication", base.to_boolean, sub, context);

            /**
             * True if connect and disconnect function is supported.
             *
             */
            base.parse_element (/<cim:EndDeviceCapability.connectDisconnect>([\s\S]*?)<\/cim:EndDeviceCapability.connectDisconnect>/g, obj, "connectDisconnect", base.to_boolean, sub, context);

            /**
             * True if demand response function is supported.
             *
             */
            base.parse_element (/<cim:EndDeviceCapability.demandResponse>([\s\S]*?)<\/cim:EndDeviceCapability.demandResponse>/g, obj, "demandResponse", base.to_boolean, sub, context);

            /**
             * True if electric metering function is supported.
             *
             */
            base.parse_element (/<cim:EndDeviceCapability.electricMetering>([\s\S]*?)<\/cim:EndDeviceCapability.electricMetering>/g, obj, "electricMetering", base.to_boolean, sub, context);

            /**
             * True if gas metering function is supported.
             *
             */
            base.parse_element (/<cim:EndDeviceCapability.gasMetering>([\s\S]*?)<\/cim:EndDeviceCapability.gasMetering>/g, obj, "gasMetering", base.to_boolean, sub, context);

            /**
             * True if metrology function is supported.
             *
             */
            base.parse_element (/<cim:EndDeviceCapability.metrology>([\s\S]*?)<\/cim:EndDeviceCapability.metrology>/g, obj, "metrology", base.to_boolean, sub, context);

            /**
             * True if on request read function is supported.
             *
             */
            base.parse_element (/<cim:EndDeviceCapability.onRequestRead>([\s\S]*?)<\/cim:EndDeviceCapability.onRequestRead>/g, obj, "onRequestRead", base.to_boolean, sub, context);

            /**
             * True if outage history function is supported.
             *
             */
            base.parse_element (/<cim:EndDeviceCapability.outageHistory>([\s\S]*?)<\/cim:EndDeviceCapability.outageHistory>/g, obj, "outageHistory", base.to_boolean, sub, context);

            /**
             * True if device performs pressure compensation for metered quantities.
             *
             */
            base.parse_element (/<cim:EndDeviceCapability.pressureCompensation>([\s\S]*?)<\/cim:EndDeviceCapability.pressureCompensation>/g, obj, "pressureCompensation", base.to_boolean, sub, context);

            /**
             * True if pricing information is supported.
             *
             */
            base.parse_element (/<cim:EndDeviceCapability.pricingInfo>([\s\S]*?)<\/cim:EndDeviceCapability.pricingInfo>/g, obj, "pricingInfo", base.to_boolean, sub, context);

            /**
             * True if device produces pulse outputs.
             *
             */
            base.parse_element (/<cim:EndDeviceCapability.pulseOutput>([\s\S]*?)<\/cim:EndDeviceCapability.pulseOutput>/g, obj, "pulseOutput", base.to_boolean, sub, context);

            /**
             * True if relays programming function is supported.
             *
             */
            base.parse_element (/<cim:EndDeviceCapability.relaysProgramming>([\s\S]*?)<\/cim:EndDeviceCapability.relaysProgramming>/g, obj, "relaysProgramming", base.to_boolean, sub, context);

            /**
             * True if reverse flow function is supported.
             *
             */
            base.parse_element (/<cim:EndDeviceCapability.reverseFlow>([\s\S]*?)<\/cim:EndDeviceCapability.reverseFlow>/g, obj, "reverseFlow", base.to_boolean, sub, context);

            /**
             * True if device performs super compressibility compensation for metered quantities.
             *
             */
            base.parse_element (/<cim:EndDeviceCapability.superCompressibilityCompensation>([\s\S]*?)<\/cim:EndDeviceCapability.superCompressibilityCompensation>/g, obj, "superCompressibilityCompensation", base.to_boolean, sub, context);

            /**
             * True if device performs temperature compensation for metered quantities.
             *
             */
            base.parse_element (/<cim:EndDeviceCapability.temperatureCompensation>([\s\S]*?)<\/cim:EndDeviceCapability.temperatureCompensation>/g, obj, "temperatureCompensation", base.to_boolean, sub, context);

            /**
             * True if the displaying of text messages is supported.
             *
             */
            base.parse_element (/<cim:EndDeviceCapability.textMessage>([\s\S]*?)<\/cim:EndDeviceCapability.textMessage>/g, obj, "textMessage", base.to_boolean, sub, context);

            /**
             * True if water metering function is supported.
             *
             */
            base.parse_element (/<cim:EndDeviceCapability.waterMetering>([\s\S]*?)<\/cim:EndDeviceCapability.waterMetering>/g, obj, "waterMetering", base.to_boolean, sub, context);

            bucket = context.parsed.EndDeviceCapability;
            if (null == bucket)
                context.parsed.EndDeviceCapability = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * PAN action/command used to issue the displaying of text messages on PAN devices.
         *
         */
        function parse_PanDisplay (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_EndDeviceAction (context, sub);
            obj.cls = "PanDisplay";
            /**
             * If true, the requesting entity (e.g. retail electric provider) requires confirmation of the successful display of the text message.
             *
             */
            base.parse_element (/<cim:PanDisplay.confirmationRequired>([\s\S]*?)<\/cim:PanDisplay.confirmationRequired>/g, obj, "confirmationRequired", base.to_boolean, sub, context);

            /**
             * Priority associated with the text message to be displayed.
             *
             */
            base.parse_element (/<cim:PanDisplay.priority>([\s\S]*?)<\/cim:PanDisplay.priority>/g, obj, "priority", base.to_string, sub, context);

            /**
             * Text to be displayed by a PAN device.
             *
             */
            base.parse_element (/<cim:PanDisplay.textMessage>([\s\S]*?)<\/cim:PanDisplay.textMessage>/g, obj, "textMessage", base.to_string, sub, context);

            /**
             * Transmission mode to be used for this PAN display control.
             *
             */
            base.parse_element (/<cim:PanDisplay.transmissionMode>([\s\S]*?)<\/cim:PanDisplay.transmissionMode>/g, obj, "transmissionMode", base.to_string, sub, context);

            bucket = context.parsed.PanDisplay;
            if (null == bucket)
                context.parsed.PanDisplay = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * End device data.
         *
         */
        function parse_EndDeviceInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_AssetInfo (context, sub);
            obj.cls = "EndDeviceInfo";
            /**
             * Inherent capabilities of the device (i.e., the functions it supports).
             *
             */
            base.parse_element (/<cim:EndDeviceInfo.capability>([\s\S]*?)<\/cim:EndDeviceInfo.capability>/g, obj, "capability", base.to_string, sub, context);

            /**
             * If true, this is a solid state end device (as opposed to a mechanical or electromechanical device).
             *
             */
            base.parse_element (/<cim:EndDeviceInfo.isSolidState>([\s\S]*?)<\/cim:EndDeviceInfo.isSolidState>/g, obj, "isSolidState", base.to_boolean, sub, context);

            /**
             * Number of potential phases the end device supports, typically 0, 1 or 3.
             *
             */
            base.parse_element (/<cim:EndDeviceInfo.phaseCount>([\s\S]*?)<\/cim:EndDeviceInfo.phaseCount>/g, obj, "phaseCount", base.to_string, sub, context);

            /**
             * Rated current.
             *
             */
            base.parse_element (/<cim:EndDeviceInfo.ratedCurrent>([\s\S]*?)<\/cim:EndDeviceInfo.ratedCurrent>/g, obj, "ratedCurrent", base.to_string, sub, context);

            /**
             * Rated voltage.
             *
             */
            base.parse_element (/<cim:EndDeviceInfo.ratedVoltage>([\s\S]*?)<\/cim:EndDeviceInfo.ratedVoltage>/g, obj, "ratedVoltage", base.to_string, sub, context);

            bucket = context.parsed.EndDeviceInfo;
            if (null == bucket)
                context.parsed.EndDeviceInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_ComModule: parse_ComModule,
                parse_MeterServiceWork: parse_MeterServiceWork,
                parse_MeterMultiplierKind: parse_MeterMultiplierKind,
                parse_SimpleEndDeviceFunction: parse_SimpleEndDeviceFunction,
                parse_Channel: parse_Channel,
                parse_MeterReading: parse_MeterReading,
                parse_EndDeviceFunction: parse_EndDeviceFunction,
                parse_EndDeviceGroup: parse_EndDeviceGroup,
                parse_EndDevice: parse_EndDevice,
                parse_IntervalReading: parse_IntervalReading,
                parse_UsagePoint: parse_UsagePoint,
                parse_RandomisationKind: parse_RandomisationKind,
                parse_PanDisplay: parse_PanDisplay,
                parse_IntervalBlock: parse_IntervalBlock,
                parse_PanPricing: parse_PanPricing,
                parse_ReadingType: parse_ReadingType,
                parse_EndDeviceInfo: parse_EndDeviceInfo,
                parse_EndDeviceEventDetail: parse_EndDeviceEventDetail,
                parse_EndDeviceControl: parse_EndDeviceControl,
                parse_ReadingInterharmonic: parse_ReadingInterharmonic,
                parse_EndDeviceFunctionKind: parse_EndDeviceFunctionKind,
                parse_Register: parse_Register,
                parse_UsagePointGroup: parse_UsagePointGroup,
                parse_ControlledAppliance: parse_ControlledAppliance,
                parse_RationalNumber: parse_RationalNumber,
                parse_Meter: parse_Meter,
                parse_PanPricingDetail: parse_PanPricingDetail,
                parse_MeterMultiplier: parse_MeterMultiplier,
                parse_EndDeviceTiming: parse_EndDeviceTiming,
                parse_Reading: parse_Reading,
                parse_ReadingQualityType: parse_ReadingQualityType,
                parse_EndDeviceAction: parse_EndDeviceAction,
                parse_BaseReading: parse_BaseReading,
                parse_ReadingReasonKind: parse_ReadingReasonKind,
                parse_EndDeviceEventType: parse_EndDeviceEventType,
                parse_UsagePointLocation: parse_UsagePointLocation,
                parse_ServiceMultiplierKind: parse_ServiceMultiplierKind,
                parse_PanDemandResponse: parse_PanDemandResponse,
                parse_UsagePointConnectedKind: parse_UsagePointConnectedKind,
                parse_EndDeviceEvent: parse_EndDeviceEvent,
                parse_TransmissionModeKind: parse_TransmissionModeKind,
                parse_EndDeviceControlType: parse_EndDeviceControlType,
                parse_ReadingQuality: parse_ReadingQuality,
                parse_ComFunction: parse_ComFunction,
                parse_ComTechnologyKind: parse_ComTechnologyKind,
                parse_PendingCalculation: parse_PendingCalculation,
                parse_AmiBillingReadyKind: parse_AmiBillingReadyKind,
                parse_DemandResponseProgram: parse_DemandResponseProgram,
                parse_ServiceMultiplier: parse_ServiceMultiplier,
                parse_EndDeviceCapability: parse_EndDeviceCapability,
                parse_MetrologyRequirement: parse_MetrologyRequirement,
                parse_ComDirectionKind: parse_ComDirectionKind
            }
        );
    }
);