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
            obj["type"] = base.parse_element (/<cim:DemandResponseProgram.type>([\s\S]*?)<\/cim:DemandResponseProgram.type>/g, sub, context, true);
            /**
             * Interval within which the program is valid.
             *
             */
            obj["validityInterval"] = base.parse_element (/<cim:DemandResponseProgram.validityInterval>([\s\S]*?)<\/cim:DemandResponseProgram.validityInterval>/g, sub, context, true);
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
            obj["type"] = base.parse_element (/<cim:EndDeviceGroup.type>([\s\S]*?)<\/cim:EndDeviceGroup.type>/g, sub, context, true);
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
            obj["isElectricVehicle"] = base.to_boolean (base.parse_element (/<cim:ControlledAppliance.isElectricVehicle>([\s\S]*?)<\/cim:ControlledAppliance.isElectricVehicle>/g, sub, context, true));
            /**
             * True if the appliance is exterior lighting.
             *
             */
            obj["isExteriorLighting"] = base.to_boolean (base.parse_element (/<cim:ControlledAppliance.isExteriorLighting>([\s\S]*?)<\/cim:ControlledAppliance.isExteriorLighting>/g, sub, context, true));
            /**
             * True if the appliance is a generation system.
             *
             */
            obj["isGenerationSystem"] = base.to_boolean (base.parse_element (/<cim:ControlledAppliance.isGenerationSystem>([\s\S]*?)<\/cim:ControlledAppliance.isGenerationSystem>/g, sub, context, true));
            /**
             * True if the appliance is HVAC compressor or furnace.
             *
             */
            obj["isHvacCompressorOrFurnace"] = base.to_boolean (base.parse_element (/<cim:ControlledAppliance.isHvacCompressorOrFurnace>([\s\S]*?)<\/cim:ControlledAppliance.isHvacCompressorOrFurnace>/g, sub, context, true));
            /**
             * True if the appliance is interior lighting.
             *
             */
            obj["isInteriorLighting"] = base.to_boolean (base.parse_element (/<cim:ControlledAppliance.isInteriorLighting>([\s\S]*?)<\/cim:ControlledAppliance.isInteriorLighting>/g, sub, context, true));
            /**
             * True if the appliance is an irrigation pump.
             *
             */
            obj["isIrrigationPump"] = base.to_boolean (base.parse_element (/<cim:ControlledAppliance.isIrrigationPump>([\s\S]*?)<\/cim:ControlledAppliance.isIrrigationPump>/g, sub, context, true));
            /**
             * True if the appliance is managed commercial or industrial load.
             *
             */
            obj["isManagedCommercialIndustrialLoad"] = base.to_boolean (base.parse_element (/<cim:ControlledAppliance.isManagedCommercialIndustrialLoad>([\s\S]*?)<\/cim:ControlledAppliance.isManagedCommercialIndustrialLoad>/g, sub, context, true));
            /**
             * True if the appliance is a pool, pump, spa or jacuzzi.
             *
             */
            obj["isPoolPumpSpaJacuzzi"] = base.to_boolean (base.parse_element (/<cim:ControlledAppliance.isPoolPumpSpaJacuzzi>([\s\S]*?)<\/cim:ControlledAppliance.isPoolPumpSpaJacuzzi>/g, sub, context, true));
            /**
             * True if the appliance is a simple miscellaneous load.
             *
             */
            obj["isSimpleMiscLoad"] = base.to_boolean (base.parse_element (/<cim:ControlledAppliance.isSimpleMiscLoad>([\s\S]*?)<\/cim:ControlledAppliance.isSimpleMiscLoad>/g, sub, context, true));
            /**
             * True if the appliance is a smart appliance.
             *
             */
            obj["isSmartAppliance"] = base.to_boolean (base.parse_element (/<cim:ControlledAppliance.isSmartAppliance>([\s\S]*?)<\/cim:ControlledAppliance.isSmartAppliance>/g, sub, context, true));
            /**
             * True if the appliance is a stip or baseboard heater.
             *
             */
            obj["isStripAndBaseboardHeater"] = base.to_boolean (base.parse_element (/<cim:ControlledAppliance.isStripAndBaseboardHeater>([\s\S]*?)<\/cim:ControlledAppliance.isStripAndBaseboardHeater>/g, sub, context, true));
            /**
             * True if the appliance is a water heater.
             *
             */
            obj["isWaterHeater"] = base.to_boolean (base.parse_element (/<cim:ControlledAppliance.isWaterHeater>([\s\S]*?)<\/cim:ControlledAppliance.isWaterHeater>/g, sub, context, true));
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
            obj["appliance"] = base.parse_element (/<cim:PanDemandResponse.appliance>([\s\S]*?)<\/cim:PanDemandResponse.appliance>/g, sub, context, true);
            /**
             * Used to define a maximum energy usage limit as a percentage of the client implementations specific average energy usage.
             *
             * The load adjustment percentage is added to 100% creating a percentage limit applied to the client implementations specific average energy usage. A -10% load adjustment percentage will establish an energy usage limit equal to 90% of the client implementations specific average energy usage. Each load adjustment percentage is referenced to the client implementations specific average energy usage. There are no cumulative effects.
             *
             */
            obj["avgLoadAdjustment"] = base.parse_element (/<cim:PanDemandResponse.avgLoadAdjustment>([\s\S]*?)<\/cim:PanDemandResponse.avgLoadAdjustment>/g, sub, context, true);
            /**
             * Encoding of cancel control.
             *
             */
            obj["cancelControlMode"] = base.parse_element (/<cim:PanDemandResponse.cancelControlMode>([\s\S]*?)<\/cim:PanDemandResponse.cancelControlMode>/g, sub, context, true);
            /**
             * Timestamp when a canceling of the event is scheduled to start.
             *
             */
            obj["cancelDateTime"] = base.to_datetime (base.parse_element (/<cim:PanDemandResponse.cancelDateTime>([\s\S]*?)<\/cim:PanDemandResponse.cancelDateTime>/g, sub, context, true));
            /**
             * If true, a canceling of the event should start immediately.
             *
             */
            obj["cancelNow"] = base.to_boolean (base.parse_element (/<cim:PanDemandResponse.cancelNow>([\s\S]*?)<\/cim:PanDemandResponse.cancelNow>/g, sub, context, true));
            /**
             * Requested offset to apply to the normal cooling setpoint at the time of the start of the event.
             *
             * It represents a temperature change that will be applied to the associated cooling set point. The temperature offsets will be calculated per the local temperature in the thermostat. The calculated temperature will be interpreted as the number of degrees to be added to the cooling set point. Sequential demand response events are not cumulative. The offset shall be applied to the normal setpoint.
             *
             */
            obj["coolingOffset"] = base.parse_element (/<cim:PanDemandResponse.coolingOffset>([\s\S]*?)<\/cim:PanDemandResponse.coolingOffset>/g, sub, context, true);
            /**
             * Requested cooling set point.
             *
             * Temperature set point is typically defined and calculated based on local temperature.
             *
             */
            obj["coolingSetpoint"] = base.parse_element (/<cim:PanDemandResponse.coolingSetpoint>([\s\S]*?)<\/cim:PanDemandResponse.coolingSetpoint>/g, sub, context, true);
            /**
             * Level of criticality for the action of this control.
             *
             * The action taken by load control devices for an event can be solely based on this value, or in combination with other load control event fields supported by the device.
             *
             */
            obj["criticalityLevel"] = base.parse_element (/<cim:PanDemandResponse.criticalityLevel>([\s\S]*?)<\/cim:PanDemandResponse.criticalityLevel>/g, sub, context, true);
            /**
             * Maximum "on" state duty cycle as a percentage of time.
             *
             * For example, if the value is 80, the device would be in an "on" state for 80% of the time for the duration of the action.
             *
             */
            obj["dutyCycle"] = base.parse_element (/<cim:PanDemandResponse.dutyCycle>([\s\S]*?)<\/cim:PanDemandResponse.dutyCycle>/g, sub, context, true);
            /**
             * Provides a mechanism to direct load control actions to groups of PAN devices.
             *
             * It can be used in conjunction with the PAN device types.
             *
             */
            obj["enrollmentGroup"] = base.parse_element (/<cim:PanDemandResponse.enrollmentGroup>([\s\S]*?)<\/cim:PanDemandResponse.enrollmentGroup>/g, sub, context, true);
            /**
             * Requested offset to apply to the normal heating setpoint at the time of the start of the event.
             *
             * It represents a temperature change that will be applied to the associated heating set point. The temperature offsets will be calculated per the local temperature in the thermostat. The calculated temperature will be interpreted as the number of degrees to be subtracted from the heating set point. Sequential demand response events are not cumulative. The offset shall be applied to the normal setpoint.
             *
             */
            obj["heatingOffset"] = base.parse_element (/<cim:PanDemandResponse.heatingOffset>([\s\S]*?)<\/cim:PanDemandResponse.heatingOffset>/g, sub, context, true);
            /**
             * Requested heating set point.
             *
             * Temperature set point is typically defined and calculated based on local temperature.
             *
             */
            obj["heatingSetpoint"] = base.parse_element (/<cim:PanDemandResponse.heatingSetpoint>([\s\S]*?)<\/cim:PanDemandResponse.heatingSetpoint>/g, sub, context, true);
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
            obj["isVirtual"] = base.to_boolean (base.parse_element (/<cim:Register.isVirtual>([\s\S]*?)<\/cim:Register.isVirtual>/g, sub, context, true));
            /**
             * Number of digits (dials on a mechanical meter) to the left of the decimal place; default is normally 5.
             *
             */
            obj["leftDigitCount"] = base.parse_element (/<cim:Register.leftDigitCount>([\s\S]*?)<\/cim:Register.leftDigitCount>/g, sub, context, true);
            /**
             * Number of digits (dials on a mechanical meter) to the right of the decimal place.
             *
             */
            obj["rightDigitCount"] = base.parse_element (/<cim:Register.rightDigitCount>([\s\S]*?)<\/cim:Register.rightDigitCount>/g, sub, context, true);
            /**
             * Clock time interval for register to beging/cease accumulating time of usage (e.g., start at 8:00 am, stop at 5:00 pm).
             *
             */
            obj["touTier"] = base.parse_element (/<cim:Register.touTier>([\s\S]*?)<\/cim:Register.touTier>/g, sub, context, true);
            /**
             * Name used for the time of use tier (also known as bin or bucket).
             *
             * For example, "peak", "off-peak", "TOU Category A", etc.
             *
             */
            obj["touTierName"] = base.parse_element (/<cim:Register.touTierName>([\s\S]*?)<\/cim:Register.touTierName>/g, sub, context, true);
            /**
             * End device function metering quantities displayed by this register.
             *
             */
            obj["EndDeviceFunction"] = base.parse_attribute (/<cim:Register.EndDeviceFunction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["drProgramLevel"] = base.parse_element (/<cim:EndDeviceControl.drProgramLevel>([\s\S]*?)<\/cim:EndDeviceControl.drProgramLevel>/g, sub, context, true);
            /**
             * Whether a demand response program request is mandatory.
             *
             * Note: Attribute is not defined on DemandResponseProgram as it is not its inherent property (it serves to control it).
             *
             */
            obj["drProgramMandatory"] = base.to_boolean (base.parse_element (/<cim:EndDeviceControl.drProgramMandatory>([\s\S]*?)<\/cim:EndDeviceControl.drProgramMandatory>/g, sub, context, true));
            /**
             * Unique identifier of the business entity originating an end device control.
             *
             */
            obj["issuerID"] = base.parse_element (/<cim:EndDeviceControl.issuerID>([\s\S]*?)<\/cim:EndDeviceControl.issuerID>/g, sub, context, true);
            /**
             * Identifier assigned by the initiator (e.g. retail electric provider) of an end device control action to uniquely identify the demand response event, text message, or other subject of the control action.
             *
             * Can be used when cancelling an event or text message request or to identify the originating event or text message in a consequential end device event.
             *
             */
            obj["issuerTrackingID"] = base.parse_element (/<cim:EndDeviceControl.issuerTrackingID>([\s\S]*?)<\/cim:EndDeviceControl.issuerTrackingID>/g, sub, context, true);
            /**
             * (if applicable) Price signal used as parameter for this end device control.
             *
             */
            obj["priceSignal"] = base.parse_element (/<cim:EndDeviceControl.priceSignal>([\s\S]*?)<\/cim:EndDeviceControl.priceSignal>/g, sub, context, true);
            /**
             * Timing for the control actions performed on the device identified in the end device control.
             *
             */
            obj["primaryDeviceTiming"] = base.parse_element (/<cim:EndDeviceControl.primaryDeviceTiming>([\s\S]*?)<\/cim:EndDeviceControl.primaryDeviceTiming>/g, sub, context, true);
            /**
             * Reason for the control action that allows to determine how to continue processing.
             *
             * For example, disconnect meter command may require different processing by the receiving system if it has been issued for a network-related reason (protection) or for a payment-related reason.
             *
             */
            obj["reason"] = base.parse_element (/<cim:EndDeviceControl.reason>([\s\S]*?)<\/cim:EndDeviceControl.reason>/g, sub, context, true);
            /**
             * (if control has scheduled duration) Date and time interval the control has been scheduled to execute within.
             *
             */
            obj["scheduledInterval"] = base.parse_element (/<cim:EndDeviceControl.scheduledInterval>([\s\S]*?)<\/cim:EndDeviceControl.scheduledInterval>/g, sub, context, true);
            /**
             * Timing for the control actions performed by devices that are responding to event related information sent to the primary device indicated in the end device control.
             *
             * For example, load control actions performed by a PAN device in response to demand response event information sent to a PAN gateway server.
             *
             */
            obj["secondaryDeviceTiming"] = base.parse_element (/<cim:EndDeviceControl.secondaryDeviceTiming>([\s\S]*?)<\/cim:EndDeviceControl.secondaryDeviceTiming>/g, sub, context, true);
            /**
             * Type of this end device control.
             *
             */
            obj["EndDeviceControlType"] = base.parse_attribute (/<cim:EndDeviceControl.EndDeviceControlType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * End device action issued by this end device control.
             *
             */
            obj["EndDeviceAction"] = base.parse_attribute (/<cim:EndDeviceControl.EndDeviceAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["alternateCostDelivered"] = base.to_float (base.parse_element (/<cim:PanPricingDetail.alternateCostDelivered>([\s\S]*?)<\/cim:PanPricingDetail.alternateCostDelivered>/g, sub, context, true));
            /**
             * Cost unit for the alternate cost delivered field.
             *
             * One example is kg of CO2 per unit of measure.
             *
             */
            obj["alternateCostUnit"] = base.parse_element (/<cim:PanPricingDetail.alternateCostUnit>([\s\S]*?)<\/cim:PanPricingDetail.alternateCostUnit>/g, sub, context, true);
            /**
             * Current time as determined by a PAN device.
             *
             */
            obj["currentTimeDate"] = base.to_datetime (base.parse_element (/<cim:PanPricingDetail.currentTimeDate>([\s\S]*?)<\/cim:PanPricingDetail.currentTimeDate>/g, sub, context, true));
            /**
             * Price of the commodity measured in base unit of currency per 'unitOfMeasure'.
             *
             */
            obj["generationPrice"] = base.parse_element (/<cim:PanPricingDetail.generationPrice>([\s\S]*?)<\/cim:PanPricingDetail.generationPrice>/g, sub, context, true);
            /**
             * Ratio of 'generationPrice' to the "normal" price chosen by the commodity provider.
             *
             */
            obj["generationPriceRatio"] = base.to_float (base.parse_element (/<cim:PanPricingDetail.generationPriceRatio>([\s\S]*?)<\/cim:PanPricingDetail.generationPriceRatio>/g, sub, context, true));
            /**
             * Price of the commodity measured in base unit of currency per 'unitOfMeasure'.
             *
             */
            obj["price"] = base.parse_element (/<cim:PanPricingDetail.price>([\s\S]*?)<\/cim:PanPricingDetail.price>/g, sub, context, true);
            /**
             * Ratio of 'price' to the "normal" price chosen by the commodity provider.
             *
             */
            obj["priceRatio"] = base.to_float (base.parse_element (/<cim:PanPricingDetail.priceRatio>([\s\S]*?)<\/cim:PanPricingDetail.priceRatio>/g, sub, context, true));
            /**
             * Pricing tier as chosen by the commodity provider.
             *
             */
            obj["priceTier"] = base.parse_element (/<cim:PanPricingDetail.priceTier>([\s\S]*?)<\/cim:PanPricingDetail.priceTier>/g, sub, context, true);
            /**
             * Maximum number of price tiers available.
             *
             */
            obj["priceTierCount"] = base.parse_element (/<cim:PanPricingDetail.priceTierCount>([\s\S]*?)<\/cim:PanPricingDetail.priceTierCount>/g, sub, context, true);
            /**
             * Label for price tier.
             *
             */
            obj["priceTierLabel"] = base.parse_element (/<cim:PanPricingDetail.priceTierLabel>([\s\S]*?)<\/cim:PanPricingDetail.priceTierLabel>/g, sub, context, true);
            /**
             * Label of the current billing rate specified by commodity provider.
             *
             */
            obj["rateLabel"] = base.parse_element (/<cim:PanPricingDetail.rateLabel>([\s\S]*?)<\/cim:PanPricingDetail.rateLabel>/g, sub, context, true);
            /**
             * Register tier accumulating usage information.
             *
             */
            obj["registerTier"] = base.parse_element (/<cim:PanPricingDetail.registerTier>([\s\S]*?)<\/cim:PanPricingDetail.registerTier>/g, sub, context, true);
            /**
             * Defines commodity as well as its base unit of measure.
             *
             */
            obj["unitOfMeasure"] = base.parse_element (/<cim:PanPricingDetail.unitOfMeasure>([\s\S]*?)<\/cim:PanPricingDetail.unitOfMeasure>/g, sub, context, true);
            /**
             * PAN pricing command/action issuing this price detail.
             *
             */
            obj["PanPricing"] = base.parse_attribute (/<cim:PanPricingDetail.PanPricing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["amiBillingReady"] = base.parse_element (/<cim:UsagePoint.amiBillingReady>([\s\S]*?)<\/cim:UsagePoint.amiBillingReady>/g, sub, context, true);
            /**
             * True if as a result of an inspection or otherwise, there is a reason to suspect that a previous billing may have been performed with erroneous data.
             *
             * Value should be reset once this potential discrepancy has been resolved.
             *
             */
            obj["checkBilling"] = base.to_boolean (base.parse_element (/<cim:UsagePoint.checkBilling>([\s\S]*?)<\/cim:UsagePoint.checkBilling>/g, sub, context, true));
            /**
             * State of the usage point with respect to connection to the network.
             *
             */
            obj["connectionState"] = base.parse_element (/<cim:UsagePoint.connectionState>([\s\S]*?)<\/cim:UsagePoint.connectionState>/g, sub, context, true);
            /**
             * Estimated load.
             *
             */
            obj["estimatedLoad"] = base.parse_element (/<cim:UsagePoint.estimatedLoad>([\s\S]*?)<\/cim:UsagePoint.estimatedLoad>/g, sub, context, true);
            /**
             * True if grounded.
             *
             */
            obj["grounded"] = base.to_boolean (base.parse_element (/<cim:UsagePoint.grounded>([\s\S]*?)<\/cim:UsagePoint.grounded>/g, sub, context, true));
            /**
             * If true, this usage point is a service delivery point, i.e., a usage point where the ownership of the service changes hands.
             *
             */
            obj["isSdp"] = base.to_boolean (base.parse_element (/<cim:UsagePoint.isSdp>([\s\S]*?)<\/cim:UsagePoint.isSdp>/g, sub, context, true));
            /**
             * If true, this usage point is virtual, i.e., no physical location exists in the network where a meter could be located to collect the meter readings.
             *
             * For example, one may define a virtual usage point to serve as an aggregation of usage for all of a company's premises distributed widely across the distribution territory. Otherwise, the usage point is physical, i.e., there is a logical point in the network where a meter could be located to collect meter readings.
             *
             */
            obj["isVirtual"] = base.to_boolean (base.parse_element (/<cim:UsagePoint.isVirtual>([\s\S]*?)<\/cim:UsagePoint.isVirtual>/g, sub, context, true));
            /**
             * If true, minimal or zero usage is expected at this usage point for situations such as premises vacancy, logical or physical disconnect.
             *
             * It is used for readings validation and estimation.
             *
             */
            obj["minimalUsageExpected"] = base.to_boolean (base.parse_element (/<cim:UsagePoint.minimalUsageExpected>([\s\S]*?)<\/cim:UsagePoint.minimalUsageExpected>/g, sub, context, true));
            /**
             * Nominal service voltage.
             *
             */
            obj["nominalServiceVoltage"] = base.parse_element (/<cim:UsagePoint.nominalServiceVoltage>([\s\S]*?)<\/cim:UsagePoint.nominalServiceVoltage>/g, sub, context, true);
            /**
             * Outage region in which this usage point is located.
             *
             */
            obj["outageRegion"] = base.parse_element (/<cim:UsagePoint.outageRegion>([\s\S]*?)<\/cim:UsagePoint.outageRegion>/g, sub, context, true);
            /**
             * Phase code.
             *
             * Number of wires and specific nominal phases can be deduced from enumeration literal values. For example, ABCN is three-phase, four-wire, s12n (splitSecondary12N) is single-phase, three-wire, and s1n and s2n are single-phase, two-wire.
             *
             */
            obj["phaseCode"] = base.parse_element (/<cim:UsagePoint.phaseCode>([\s\S]*?)<\/cim:UsagePoint.phaseCode>/g, sub, context, true);
            /**
             * Current flow that this usage point is configured to deliver.
             *
             */
            obj["ratedCurrent"] = base.parse_element (/<cim:UsagePoint.ratedCurrent>([\s\S]*?)<\/cim:UsagePoint.ratedCurrent>/g, sub, context, true);
            /**
             * Active power that this usage point is configured to deliver.
             *
             */
            obj["ratedPower"] = base.parse_element (/<cim:UsagePoint.ratedPower>([\s\S]*?)<\/cim:UsagePoint.ratedPower>/g, sub, context, true);
            /**
             * Cycle day on which the meter for this usage point will normally be read.
             *
             * Usually correlated with the billing cycle.
             *
             */
            obj["readCycle"] = base.parse_element (/<cim:UsagePoint.readCycle>([\s\S]*?)<\/cim:UsagePoint.readCycle>/g, sub, context, true);
            /**
             * Identifier of the route to which this usage point is assigned for purposes of meter reading.
             *
             * Typically used to configure hand held meter reading systems prior to collection of reads.
             *
             */
            obj["readRoute"] = base.parse_element (/<cim:UsagePoint.readRoute>([\s\S]*?)<\/cim:UsagePoint.readRoute>/g, sub, context, true);
            /**
             * Remarks about this usage point, for example the reason for it being rated with a non-nominal priority.
             *
             */
            obj["serviceDeliveryRemark"] = base.parse_element (/<cim:UsagePoint.serviceDeliveryRemark>([\s\S]*?)<\/cim:UsagePoint.serviceDeliveryRemark>/g, sub, context, true);
            /**
             * Priority of service for this usage point.
             *
             * Note that usage points at the same service location can have different priorities.
             *
             */
            obj["servicePriority"] = base.parse_element (/<cim:UsagePoint.servicePriority>([\s\S]*?)<\/cim:UsagePoint.servicePriority>/g, sub, context, true);
            /**
             * Customer agreement regulating this service delivery point.
             *
             */
            obj["CustomerAgreement"] = base.parse_attribute (/<cim:UsagePoint.CustomerAgreement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * ServiceSupplier (utility) utilising this usage point to deliver a service.
             *
             */
            obj["ServiceSupplier"] = base.parse_attribute (/<cim:UsagePoint.ServiceSupplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Location of this usage point.
             *
             */
            obj["UsagePointLocation"] = base.parse_attribute (/<cim:UsagePoint.UsagePointLocation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Service category delivered by this usage point.
             *
             */
            obj["ServiceCategory"] = base.parse_attribute (/<cim:UsagePoint.ServiceCategory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Service location where the service delivered by this usage point is consumed.
             *
             */
            obj["ServiceLocation"] = base.parse_attribute (/<cim:UsagePoint.ServiceLocation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["kH"] = base.parse_element (/<cim:MeterMultiplierKind.kH>([\s\S]*?)<\/cim:MeterMultiplierKind.kH>/g, sub, context, true);
            /**
             * Register multiplier.
             *
             * The number to multiply the register reading by in order to get kWh.
             *
             */
            obj["kR"] = base.parse_element (/<cim:MeterMultiplierKind.kR>([\s\S]*?)<\/cim:MeterMultiplierKind.kR>/g, sub, context, true);
            /**
             * Test constant.
             *
             */
            obj["kE"] = base.parse_element (/<cim:MeterMultiplierKind.kE>([\s\S]*?)<\/cim:MeterMultiplierKind.kE>/g, sub, context, true);
            /**
             * Current transformer ratio used to convert associated quantities to real measurements.
             *
             */
            obj["ctRatio"] = base.parse_element (/<cim:MeterMultiplierKind.ctRatio>([\s\S]*?)<\/cim:MeterMultiplierKind.ctRatio>/g, sub, context, true);
            /**
             * Potential transformer ratio used to convert associated quantities to real measurements.
             *
             */
            obj["ptRatio"] = base.parse_element (/<cim:MeterMultiplierKind.ptRatio>([\s\S]*?)<\/cim:MeterMultiplierKind.ptRatio>/g, sub, context, true);
            /**
             * Product of the CT ratio and PT ratio.
             *
             */
            obj["transformerRatio"] = base.parse_element (/<cim:MeterMultiplierKind.transformerRatio>([\s\S]*?)<\/cim:MeterMultiplierKind.transformerRatio>/g, sub, context, true);
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
            obj["denominator"] = base.parse_element (/<cim:RationalNumber.denominator>([\s\S]*?)<\/cim:RationalNumber.denominator>/g, sub, context, true);
            /**
             * Numerator.
             *
             */
            obj["numerator"] = base.parse_element (/<cim:RationalNumber.numerator>([\s\S]*?)<\/cim:RationalNumber.numerator>/g, sub, context, true);
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
            obj["name"] = base.parse_element (/<cim:EndDeviceEventDetail.name>([\s\S]*?)<\/cim:EndDeviceEventDetail.name>/g, sub, context, true);
            /**
             * Value, including unit information.
             *
             */
            obj["value"] = base.parse_element (/<cim:EndDeviceEventDetail.value>([\s\S]*?)<\/cim:EndDeviceEventDetail.value>/g, sub, context, true);
            /**
             * End device owning this detail.
             *
             */
            obj["EndDeviceEvent"] = base.parse_attribute (/<cim:EndDeviceEventDetail.EndDeviceEvent\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["isCoincidentTrigger"] = base.to_boolean (base.parse_element (/<cim:MeterReading.isCoincidentTrigger>([\s\S]*?)<\/cim:MeterReading.isCoincidentTrigger>/g, sub, context, true));
            /**
             * Date and time interval of the data items contained within this meter reading.
             *
             */
            obj["valuesInterval"] = base.parse_element (/<cim:MeterReading.valuesInterval>([\s\S]*?)<\/cim:MeterReading.valuesInterval>/g, sub, context, true);
            /**
             * Usage point from which this meter reading (set of values) has been obtained.
             *
             */
            obj["UsagePoint"] = base.parse_attribute (/<cim:MeterReading.UsagePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Meter providing this reading.
             *
             */
            obj["Meter"] = base.parse_attribute (/<cim:MeterReading.Meter\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * (could be deprecated in the future) Customer agreement for this meter reading.
             *
             */
            obj["CustomerAgreement"] = base.parse_attribute (/<cim:MeterReading.CustomerAgreement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["isVirtual"] = base.to_boolean (base.parse_element (/<cim:Channel.isVirtual>([\s\S]*?)<\/cim:Channel.isVirtual>/g, sub, context, true));
            /**
             * Register whose values are collected/reported by this channel.
             *
             */
            obj["Register"] = base.parse_attribute (/<cim:Channel.Register\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Reading type for register values reported/collected by this channel.
             *
             */
            obj["ReadingType"] = base.parse_attribute (/<cim:Channel.ReadingType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["ctRatio"] = base.parse_element (/<cim:ServiceMultiplierKind.ctRatio>([\s\S]*?)<\/cim:ServiceMultiplierKind.ctRatio>/g, sub, context, true);
            /**
             * Voltage transformer ratio used to convert associated quantities to real measurements.
             *
             */
            obj["ptRatio"] = base.parse_element (/<cim:ServiceMultiplierKind.ptRatio>([\s\S]*?)<\/cim:ServiceMultiplierKind.ptRatio>/g, sub, context, true);
            /**
             * Product of the CT ratio and PT ratio.
             *
             */
            obj["transformerRatio"] = base.parse_element (/<cim:ServiceMultiplierKind.transformerRatio>([\s\S]*?)<\/cim:ServiceMultiplierKind.transformerRatio>/g, sub, context, true);
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
            obj["comment"] = base.parse_element (/<cim:ReadingQuality.comment>([\s\S]*?)<\/cim:ReadingQuality.comment>/g, sub, context, true);
            /**
             * System acting as the source of the quality code.
             *
             */
            obj["source"] = base.parse_element (/<cim:ReadingQuality.source>([\s\S]*?)<\/cim:ReadingQuality.source>/g, sub, context, true);
            /**
             * Date and time at which the quality code was assigned or ascertained.
             *
             */
            obj["timeStamp"] = base.to_datetime (base.parse_element (/<cim:ReadingQuality.timeStamp>([\s\S]*?)<\/cim:ReadingQuality.timeStamp>/g, sub, context, true));
            /**
             * Type of this reading quality.
             *
             */
            obj["ReadingQualityType"] = base.parse_attribute (/<cim:ReadingQuality.ReadingQualityType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Reading value to which this quality applies.
             *
             */
            obj["Reading"] = base.parse_attribute (/<cim:ReadingQuality.Reading\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["fromDevice"] = base.parse_element (/<cim:ComDirectionKind.fromDevice>([\s\S]*?)<\/cim:ComDirectionKind.fromDevice>/g, sub, context, true);
            /**
             * Communication is to device.
             *
             */
            obj["toDevice"] = base.parse_element (/<cim:ComDirectionKind.toDevice>([\s\S]*?)<\/cim:ComDirectionKind.toDevice>/g, sub, context, true);
            /**
             * Communication with the device is bi-directional.
             *
             */
            obj["biDirectional"] = base.parse_element (/<cim:ComDirectionKind.biDirectional>([\s\S]*?)<\/cim:ComDirectionKind.biDirectional>/g, sub, context, true);
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
            obj["kind"] = base.parse_element (/<cim:MeterMultiplier.kind>([\s\S]*?)<\/cim:MeterMultiplier.kind>/g, sub, context, true);
            /**
             * Multiplier value.
             *
             */
            obj["value"] = base.to_float (base.parse_element (/<cim:MeterMultiplier.value>([\s\S]*?)<\/cim:MeterMultiplier.value>/g, sub, context, true));
            /**
             * Meter applying this multiplier.
             *
             */
            obj["Meter"] = base.parse_attribute (/<cim:MeterMultiplier.Meter\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["reason"] = base.parse_element (/<cim:Reading.reason>([\s\S]*?)<\/cim:Reading.reason>/g, sub, context, true);
            /**
             * Type information for this reading value.
             *
             */
            obj["ReadingType"] = base.parse_attribute (/<cim:Reading.ReadingType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["accessMethod"] = base.parse_element (/<cim:UsagePointLocation.accessMethod>([\s\S]*?)<\/cim:UsagePointLocation.accessMethod>/g, sub, context, true);
            /**
             * Remarks about this location.
             *
             */
            obj["remark"] = base.parse_element (/<cim:UsagePointLocation.remark>([\s\S]*?)<\/cim:UsagePointLocation.remark>/g, sub, context, true);
            /**
             * Problems previously encountered when visiting or performing work at this location.
             *
             * Examples include: bad dog, violent customer, verbally abusive occupant, obstructions, safety hazards, etc.
             *
             */
            obj["siteAccessProblem"] = base.parse_element (/<cim:UsagePointLocation.siteAccessProblem>([\s\S]*?)<\/cim:UsagePointLocation.siteAccessProblem>/g, sub, context, true);
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
            obj["enabled"] = base.parse_element (/<cim:AmiBillingReadyKind.enabled>([\s\S]*?)<\/cim:AmiBillingReadyKind.enabled>/g, sub, context, true);
            /**
             * Usage point is equipped with an AMI capable meter that is functioning and communicating with the AMI network.
             *
             */
            obj["operable"] = base.parse_element (/<cim:AmiBillingReadyKind.operable>([\s\S]*?)<\/cim:AmiBillingReadyKind.operable>/g, sub, context, true);
            /**
             * Usage point is equipped with an operating AMI capable meter and accuracy has been certified for billing purposes.
             *
             */
            obj["billingApproved"] = base.parse_element (/<cim:AmiBillingReadyKind.billingApproved>([\s\S]*?)<\/cim:AmiBillingReadyKind.billingApproved>/g, sub, context, true);
            /**
             * Usage point is equipped with a non AMI capable meter.
             *
             */
            obj["nonAmi"] = base.parse_element (/<cim:AmiBillingReadyKind.nonAmi>([\s\S]*?)<\/cim:AmiBillingReadyKind.nonAmi>/g, sub, context, true);
            /**
             * Usage point is equipped with an AMI capable meter; however, the AMI functionality has been disabled or is not being used.
             *
             */
            obj["amiDisabled"] = base.parse_element (/<cim:AmiBillingReadyKind.amiDisabled>([\s\S]*?)<\/cim:AmiBillingReadyKind.amiDisabled>/g, sub, context, true);
            /**
             * Usage point is equipped with an AMI capable meter that is not yet currently equipped with a communications module.
             *
             */
            obj["amiCapable"] = base.parse_element (/<cim:AmiBillingReadyKind.amiCapable>([\s\S]*?)<\/cim:AmiBillingReadyKind.amiCapable>/g, sub, context, true);
            /**
             * Usage point is not currently equipped with a meter.
             *
             */
            obj["nonMetered"] = base.parse_element (/<cim:AmiBillingReadyKind.nonMetered>([\s\S]*?)<\/cim:AmiBillingReadyKind.nonMetered>/g, sub, context, true);
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
            obj["reason"] = base.parse_element (/<cim:MetrologyRequirement.reason>([\s\S]*?)<\/cim:MetrologyRequirement.reason>/g, sub, context, true);
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
            obj["enabled"] = base.to_boolean (base.parse_element (/<cim:EndDeviceFunction.enabled>([\s\S]*?)<\/cim:EndDeviceFunction.enabled>/g, sub, context, true));
            /**
             * End device that performs this function.
             *
             */
            obj["EndDevice"] = base.parse_attribute (/<cim:EndDeviceFunction.EndDevice\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["amrSystem"] = base.parse_element (/<cim:ComModule.amrSystem>([\s\S]*?)<\/cim:ComModule.amrSystem>/g, sub, context, true);
            /**
             * If true, autonomous daylight saving time (DST) function is supported.
             *
             */
            obj["supportsAutonomousDst"] = base.to_boolean (base.parse_element (/<cim:ComModule.supportsAutonomousDst>([\s\S]*?)<\/cim:ComModule.supportsAutonomousDst>/g, sub, context, true));
            /**
             * Time zone offset relative to GMT for the location of this com module.
             *
             */
            obj["timeZoneOffset"] = base.parse_element (/<cim:ComModule.timeZoneOffset>([\s\S]*?)<\/cim:ComModule.timeZoneOffset>/g, sub, context, true);
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
            obj["connected"] = base.parse_element (/<cim:UsagePointConnectedKind.connected>([\s\S]*?)<\/cim:UsagePointConnectedKind.connected>/g, sub, context, true);
            /**
             * The usage point has been disconnected from the network at a point upstream of the meter.
             *
             * The usage point is unable to receive or send the applicable commodity (electricity, gas, water, etc.). A physical disconnect is often achieved by utilising a field crew.
             *
             */
            obj["physicallyDisconnected"] = base.parse_element (/<cim:UsagePointConnectedKind.physicallyDisconnected>([\s\S]*?)<\/cim:UsagePointConnectedKind.physicallyDisconnected>/g, sub, context, true);
            /**
             * The usage point has been disconnected through operation of a disconnect function within the meter present at the usage point.
             *
             * The usage point is unable to receive or send the applicable commodity (electricity, gas, water, etc.)  A logical disconnect can often be achieved without utilising a field crew.
             *
             */
            obj["logicallyDisconnected"] = base.parse_element (/<cim:UsagePointConnectedKind.logicallyDisconnected>([\s\S]*?)<\/cim:UsagePointConnectedKind.logicallyDisconnected>/g, sub, context, true);
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
            obj["accumulation"] = base.parse_element (/<cim:ReadingType.accumulation>([\s\S]*?)<\/cim:ReadingType.accumulation>/g, sub, context, true);
            /**
             * Salient attribute of the reading data aggregated from individual endpoints.
             *
             * This is mainly used to define a mathematical operation carried out over 'macroPeriod', but may also be used to describe an attribute of the data when the 'macroPeriod' is not defined.
             *
             */
            obj["aggregate"] = base.parse_element (/<cim:ReadingType.aggregate>([\s\S]*?)<\/cim:ReadingType.aggregate>/g, sub, context, true);
            /**
             * Argument used to introduce numbers into the unit of measure description where they are needed (e.g., 4 where the measure needs an argument such as CEMI(n=4)).
             *
             * Most arguments used in practice however will be integers (i.e., 'denominator'=1).
             *
             */
            obj["argument"] = base.parse_element (/<cim:ReadingType.argument>([\s\S]*?)<\/cim:ReadingType.argument>/g, sub, context, true);
            /**
             * Commodity being measured.
             *
             */
            obj["commodity"] = base.parse_element (/<cim:ReadingType.commodity>([\s\S]*?)<\/cim:ReadingType.commodity>/g, sub, context, true);
            /**
             * In case of common flat-rate pricing for power, in which all purchases are at a given rate, 'consumptionTier'=0.
             *
             * Otherwise, the value indicates the consumption tier, which can be used in conjunction with TOU or CPP pricing.
             *
             */
            obj["consumptionTier"] = base.parse_element (/<cim:ReadingType.consumptionTier>([\s\S]*?)<\/cim:ReadingType.consumptionTier>/g, sub, context, true);
            /**
             * Critical peak period (CPP) bucket the reading value is attributed to.
             *
             * Value 0 means not applicable. Even though CPP is usually considered a specialised form of time of use 'tou', this attribute is defined explicitly for flexibility.
             *
             */
            obj["cpp"] = base.parse_element (/<cim:ReadingType.cpp>([\s\S]*?)<\/cim:ReadingType.cpp>/g, sub, context, true);
            /**
             * Metering-specific currency.
             *
             */
            obj["currency"] = base.parse_element (/<cim:ReadingType.currency>([\s\S]*?)<\/cim:ReadingType.currency>/g, sub, context, true);
            /**
             * Flow direction for a reading where the direction of flow of the commodity is important (for electricity measurements this includes current, energy, power, and demand).
             *
             */
            obj["flowDirection"] = base.parse_element (/<cim:ReadingType.flowDirection>([\s\S]*?)<\/cim:ReadingType.flowDirection>/g, sub, context, true);
            /**
             * Indication of a "harmonic" or "interharmonic" basis for the measurement.
             *
             * Value 0 in 'numerator' and 'denominator' means not applicable.
             *
             */
            obj["interharmonic"] = base.parse_element (/<cim:ReadingType.interharmonic>([\s\S]*?)<\/cim:ReadingType.interharmonic>/g, sub, context, true);
            /**
             * Time period of interest that reflects how the reading is viewed or captured over a long period of time.
             *
             */
            obj["macroPeriod"] = base.parse_element (/<cim:ReadingType.macroPeriod>([\s\S]*?)<\/cim:ReadingType.macroPeriod>/g, sub, context, true);
            /**
             * Identifies "what" is being measured, as refinement of 'commodity'.
             *
             * When combined with 'unit', it provides detail to the unit of measure. For example, 'energy' with a unit of measure of 'kWh' indicates to the user that active energy is being measured, while with 'kVAh' or 'kVArh', it indicates apparent energy and reactive energy, respectively. 'power' can be combined in a similar way with various power units of measure: Distortion power ('distortionVoltAmperes') with 'kVA' is different from 'power' with 'kVA'.
             *
             */
            obj["measurementKind"] = base.parse_element (/<cim:ReadingType.measurementKind>([\s\S]*?)<\/cim:ReadingType.measurementKind>/g, sub, context, true);
            /**
             * Time attribute inherent or fundamental to the reading value (as opposed to 'macroPeriod' that supplies an "adjective" to describe aspects of a time period with regard to the measurement).
             *
             * It refers to the way the value was originally measured and not to the frequency at which it is reported or presented. For example, an hourly interval of consumption data would have value 'hourly' as an attribute. However in the case of an hourly sampled voltage value, the meterReadings schema would carry the 'hourly' interval size information.
             *
             */
            obj["measuringPeriod"] = base.parse_element (/<cim:ReadingType.measuringPeriod>([\s\S]*?)<\/cim:ReadingType.measuringPeriod>/g, sub, context, true);
            /**
             * Metering-specific multiplier.
             *
             */
            obj["multiplier"] = base.parse_element (/<cim:ReadingType.multiplier>([\s\S]*?)<\/cim:ReadingType.multiplier>/g, sub, context, true);
            /**
             * Metering-specific phase code.
             *
             */
            obj["phases"] = base.parse_element (/<cim:ReadingType.phases>([\s\S]*?)<\/cim:ReadingType.phases>/g, sub, context, true);
            /**
             * Time of use (TOU) bucket the reading value is attributed to.
             *
             * Value 0 means not applicable.
             *
             */
            obj["tou"] = base.parse_element (/<cim:ReadingType.tou>([\s\S]*?)<\/cim:ReadingType.tou>/g, sub, context, true);
            /**
             * Metering-specific unit.
             *
             */
            obj["unit"] = base.parse_element (/<cim:ReadingType.unit>([\s\S]*?)<\/cim:ReadingType.unit>/g, sub, context, true);
            /**
             * Pending calculation that produced this reading type.
             *
             */
            obj["PendingCalculation"] = base.parse_attribute (/<cim:ReadingType.PendingCalculation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Channel reporting/collecting register values with this type information.
             *
             */
            obj["Channel"] = base.parse_attribute (/<cim:ReadingType.Channel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["PendingCalculation"] = base.parse_attribute (/<cim:IntervalBlock.PendingCalculation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Type information for interval reading values contained in this block.
             *
             */
            obj["ReadingType"] = base.parse_attribute (/<cim:IntervalBlock.ReadingType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Meter reading containing this interval block.
             *
             */
            obj["MeterReading"] = base.parse_attribute (/<cim:IntervalBlock.MeterReading\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["providerID"] = base.parse_element (/<cim:PanPricing.providerID>([\s\S]*?)<\/cim:PanPricing.providerID>/g, sub, context, true);
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
            obj["kind"] = base.parse_element (/<cim:SimpleEndDeviceFunction.kind>([\s\S]*?)<\/cim:SimpleEndDeviceFunction.kind>/g, sub, context, true);
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
            obj["reverseFlow"] = base.parse_element (/<cim:EndDeviceFunctionKind.reverseFlow>([\s\S]*?)<\/cim:EndDeviceFunctionKind.reverseFlow>/g, sub, context, true);
            /**
             * Demand response functions.
             *
             */
            obj["demandResponse"] = base.parse_element (/<cim:EndDeviceFunctionKind.demandResponse>([\s\S]*?)<\/cim:EndDeviceFunctionKind.demandResponse>/g, sub, context, true);
            /**
             * Presentation of metered values to a user or another system (always a function of a meter, but might not be supported by a load control unit).
             *
             */
            obj["metrology"] = base.parse_element (/<cim:EndDeviceFunctionKind.metrology>([\s\S]*?)<\/cim:EndDeviceFunctionKind.metrology>/g, sub, context, true);
            /**
             * Reporting historical power interruption data.
             *
             */
            obj["outageHistory"] = base.parse_element (/<cim:EndDeviceFunctionKind.outageHistory>([\s\S]*?)<\/cim:EndDeviceFunctionKind.outageHistory>/g, sub, context, true);
            /**
             * Support for one or more relays that may be programmable in the meter (and tied to TOU, time pulse, load control or other functions).
             *
             */
            obj["relaysProgramming"] = base.parse_element (/<cim:EndDeviceFunctionKind.relaysProgramming>([\s\S]*?)<\/cim:EndDeviceFunctionKind.relaysProgramming>/g, sub, context, true);
            /**
             * On-request reads.
             *
             */
            obj["onRequestRead"] = base.parse_element (/<cim:EndDeviceFunctionKind.onRequestRead>([\s\S]*?)<\/cim:EndDeviceFunctionKind.onRequestRead>/g, sub, context, true);
            /**
             * Autonomous application of daylight saving time (DST).
             *
             */
            obj["autonomousDst"] = base.parse_element (/<cim:EndDeviceFunctionKind.autonomousDst>([\s\S]*?)<\/cim:EndDeviceFunctionKind.autonomousDst>/g, sub, context, true);
            /**
             * Electricity metering.
             *
             */
            obj["electricMetering"] = base.parse_element (/<cim:EndDeviceFunctionKind.electricMetering>([\s\S]*?)<\/cim:EndDeviceFunctionKind.electricMetering>/g, sub, context, true);
            /**
             * Gas metering.
             *
             */
            obj["gasMetering"] = base.parse_element (/<cim:EndDeviceFunctionKind.gasMetering>([\s\S]*?)<\/cim:EndDeviceFunctionKind.gasMetering>/g, sub, context, true);
            /**
             * Water metering.
             *
             */
            obj["waterMetering"] = base.parse_element (/<cim:EndDeviceFunctionKind.waterMetering>([\s\S]*?)<\/cim:EndDeviceFunctionKind.waterMetering>/g, sub, context, true);
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
            obj["duration"] = base.parse_element (/<cim:EndDeviceTiming.duration>([\s\S]*?)<\/cim:EndDeviceTiming.duration>/g, sub, context, true);
            /**
             * True if 'duration' is indefinite.
             *
             */
            obj["durationIndefinite"] = base.to_boolean (base.parse_element (/<cim:EndDeviceTiming.durationIndefinite>([\s\S]*?)<\/cim:EndDeviceTiming.durationIndefinite>/g, sub, context, true));
            /**
             * Start and end time of an interval during which end device control actions are to be executed.
             *
             */
            obj["interval"] = base.parse_element (/<cim:EndDeviceTiming.interval>([\s\S]*?)<\/cim:EndDeviceTiming.interval>/g, sub, context, true);
            /**
             * Kind of randomisation to be applied to the end device control actions to be executed.
             *
             */
            obj["randomisation"] = base.parse_element (/<cim:EndDeviceTiming.randomisation>([\s\S]*?)<\/cim:EndDeviceTiming.randomisation>/g, sub, context, true);
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
            obj["command"] = base.parse_element (/<cim:EndDeviceAction.command>([\s\S]*?)<\/cim:EndDeviceAction.command>/g, sub, context, true);
            /**
             * Amount of time the action of this control is to remain active.
             *
             */
            obj["duration"] = base.parse_element (/<cim:EndDeviceAction.duration>([\s\S]*?)<\/cim:EndDeviceAction.duration>/g, sub, context, true);
            /**
             * True if the action of this control is indefinite.
             *
             */
            obj["durationIndefinite"] = base.to_boolean (base.parse_element (/<cim:EndDeviceAction.durationIndefinite>([\s\S]*?)<\/cim:EndDeviceAction.durationIndefinite>/g, sub, context, true));
            /**
             * Start date and time for action of this control.
             *
             */
            obj["startDateTime"] = base.to_datetime (base.parse_element (/<cim:EndDeviceAction.startDateTime>([\s\S]*?)<\/cim:EndDeviceAction.startDateTime>/g, sub, context, true));
            /**
             * End device control issuing this end device action.
             *
             */
            obj["EndDeviceControl"] = base.parse_attribute (/<cim:EndDeviceAction.EndDeviceControl\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["reportedDateTime"] = base.to_datetime (base.parse_element (/<cim:BaseReading.reportedDateTime>([\s\S]*?)<\/cim:BaseReading.reportedDateTime>/g, sub, context, true));
            /**
             * System that originally supplied the reading (e.g., customer, AMI system, handheld reading system, another enterprise system, etc.).
             *
             */
            obj["source"] = base.parse_element (/<cim:BaseReading.source>([\s\S]*?)<\/cim:BaseReading.source>/g, sub, context, true);
            /**
             * Start and end of the period for those readings whose type has a time attribute such as 'billing', seasonal' or 'forTheSpecifiedPeriod'.
             *
             */
            obj["timePeriod"] = base.parse_element (/<cim:BaseReading.timePeriod>([\s\S]*?)<\/cim:BaseReading.timePeriod>/g, sub, context, true);
            /**
             * Value of this reading.
             *
             */
            obj["value"] = base.parse_element (/<cim:BaseReading.value>([\s\S]*?)<\/cim:BaseReading.value>/g, sub, context, true);
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
            obj["issuerID"] = base.parse_element (/<cim:EndDeviceEvent.issuerID>([\s\S]*?)<\/cim:EndDeviceEvent.issuerID>/g, sub, context, true);
            /**
             * Identifier assigned by the initiator (e.g. retail electric provider) of an end device control action to uniquely identify the demand response event, text message, or other subject of the control action.
             *
             * Can be used when cancelling an event or text message request or to identify the originating event or text message in a consequential end device event.
             *
             */
            obj["issuerTrackingID"] = base.parse_element (/<cim:EndDeviceEvent.issuerTrackingID>([\s\S]*?)<\/cim:EndDeviceEvent.issuerTrackingID>/g, sub, context, true);
            /**
             * (if user initiated) ID of user who initiated this end device event.
             *
             */
            obj["userID"] = base.parse_element (/<cim:EndDeviceEvent.userID>([\s\S]*?)<\/cim:EndDeviceEvent.userID>/g, sub, context, true);
            /**
             * End device that reported this end device event.
             *
             */
            obj["EndDevice"] = base.parse_attribute (/<cim:EndDeviceEvent.EndDevice\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Usage point for which this end device event is reported.
             *
             */
            obj["UsagePoint"] = base.parse_attribute (/<cim:EndDeviceEvent.UsagePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Set of measured values to which this event applies.
             *
             */
            obj["MeterReading"] = base.parse_attribute (/<cim:EndDeviceEvent.MeterReading\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Type of this end device event.
             *
             */
            obj["EndDeviceEventType"] = base.parse_attribute (/<cim:EndDeviceEvent.EndDeviceEventType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["installation"] = base.parse_element (/<cim:ReadingReasonKind.installation>([\s\S]*?)<\/cim:ReadingReasonKind.installation>/g, sub, context, true);
            /**
             * Reading(s) taken or to be taken in conjunction with removal of a meter.
             *
             */
            obj["removal"] = base.parse_element (/<cim:ReadingReasonKind.removal>([\s\S]*?)<\/cim:ReadingReasonKind.removal>/g, sub, context, true);
            /**
             * Reading(s) taken or to be taken in response to an inquiry by a customer or other party.
             *
             */
            obj["inquiry"] = base.parse_element (/<cim:ReadingReasonKind.inquiry>([\s\S]*?)<\/cim:ReadingReasonKind.inquiry>/g, sub, context, true);
            /**
             * Reading(s) taken or to be taken in response to a billing-related inquiry by a customer or other party.
             *
             * A variant of 'inquiry'.
             *
             */
            obj["billing"] = base.parse_element (/<cim:ReadingReasonKind.billing>([\s\S]*?)<\/cim:ReadingReasonKind.billing>/g, sub, context, true);
            /**
             * Reading(s) taken or to be taken in conjunction with a customer move-in event.
             *
             */
            obj["moveIn"] = base.parse_element (/<cim:ReadingReasonKind.moveIn>([\s\S]*?)<\/cim:ReadingReasonKind.moveIn>/g, sub, context, true);
            /**
             * Reading(s) taken or to be taken in conjunction with a customer move-out event.
             *
             */
            obj["moveOut"] = base.parse_element (/<cim:ReadingReasonKind.moveOut>([\s\S]*?)<\/cim:ReadingReasonKind.moveOut>/g, sub, context, true);
            /**
             * Reading(s) taken or to be taken in conjunction with the resetting of one or more demand registers in a meter.
             *
             */
            obj["demandReset"] = base.parse_element (/<cim:ReadingReasonKind.demandReset>([\s\S]*?)<\/cim:ReadingReasonKind.demandReset>/g, sub, context, true);
            /**
             * Reading(s) taken or to be taken in conjunction with a disconnection of service.
             *
             */
            obj["serviceDisconnect"] = base.parse_element (/<cim:ReadingReasonKind.serviceDisconnect>([\s\S]*?)<\/cim:ReadingReasonKind.serviceDisconnect>/g, sub, context, true);
            /**
             * Reading(s) taken or to be taken in conjunction with a connection or re-connection of service.
             *
             */
            obj["serviceConnect"] = base.parse_element (/<cim:ReadingReasonKind.serviceConnect>([\s\S]*?)<\/cim:ReadingReasonKind.serviceConnect>/g, sub, context, true);
            /**
             * Reading(s) taken or to be taken to support management of loads on distribution networks or devices.
             *
             */
            obj["loadManagement"] = base.parse_element (/<cim:ReadingReasonKind.loadManagement>([\s\S]*?)<\/cim:ReadingReasonKind.loadManagement>/g, sub, context, true);
            /**
             * Reading(s) taken or to be taken to support research and analysis of loads on distribution networks or devices.
             *
             */
            obj["loadResearch"] = base.parse_element (/<cim:ReadingReasonKind.loadResearch>([\s\S]*?)<\/cim:ReadingReasonKind.loadResearch>/g, sub, context, true);
            /**
             * Reading(s) taken or to be taken for some other reason or purpose.
             *
             */
            obj["other"] = base.parse_element (/<cim:ReadingReasonKind.other>([\s\S]*?)<\/cim:ReadingReasonKind.other>/g, sub, context, true);
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
            obj["kind"] = base.parse_element (/<cim:ServiceMultiplier.kind>([\s\S]*?)<\/cim:ServiceMultiplier.kind>/g, sub, context, true);
            /**
             * Multiplier value.
             *
             */
            obj["value"] = base.to_float (base.parse_element (/<cim:ServiceMultiplier.value>([\s\S]*?)<\/cim:ServiceMultiplier.value>/g, sub, context, true));
            /**
             * Usage point applying this multiplier.
             *
             */
            obj["UsagePoint"] = base.parse_attribute (/<cim:ServiceMultiplier.UsagePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["formNumber"] = base.parse_element (/<cim:Meter.formNumber>([\s\S]*?)<\/cim:Meter.formNumber>/g, sub, context, true);
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
            obj["multiplyBeforeAdd"] = base.to_boolean (base.parse_element (/<cim:PendingCalculation.multiplyBeforeAdd>([\s\S]*?)<\/cim:PendingCalculation.multiplyBeforeAdd>/g, sub, context, true));
            /**
             * (if applicable) Offset to be added as well as multiplication using scalars.
             *
             */
            obj["offset"] = base.parse_element (/<cim:PendingCalculation.offset>([\s\S]*?)<\/cim:PendingCalculation.offset>/g, sub, context, true);
            /**
             * (if scalar is rational number) When 'IntervalReading.value' is multiplied by 'scalarNumerator' and divided by this value, it causes a unit of measure conversion to occur, resulting in the 'ReadingType.unit'.
             *
             */
            obj["scalarDenominator"] = base.parse_element (/<cim:PendingCalculation.scalarDenominator>([\s\S]*?)<\/cim:PendingCalculation.scalarDenominator>/g, sub, context, true);
            /**
             * (if scalar is floating number) When multiplied with 'IntervalReading.value', it causes a unit of measure conversion to occur, according to the 'ReadingType.unit'.
             *
             */
            obj["scalarFloat"] = base.to_float (base.parse_element (/<cim:PendingCalculation.scalarFloat>([\s\S]*?)<\/cim:PendingCalculation.scalarFloat>/g, sub, context, true));
            /**
             * (if scalar is integer or rational number)  When the scalar is a simple integer, and this attribute is presented alone and multiplied with 'IntervalReading.value', it causes a unit of measure conversion to occur, resulting in the 'ReadingType.unit'.
             *
             * It is never used in conjunction with 'scalarFloat', only with 'scalarDenominator'.
             *
             */
            obj["scalarNumerator"] = base.parse_element (/<cim:PendingCalculation.scalarNumerator>([\s\S]*?)<\/cim:PendingCalculation.scalarNumerator>/g, sub, context, true);
            /**
             * Reading type resulting from this pending conversion.
             *
             */
            obj["ReadingType"] = base.parse_attribute (/<cim:PendingCalculation.ReadingType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["denominator"] = base.parse_element (/<cim:ReadingInterharmonic.denominator>([\s\S]*?)<\/cim:ReadingInterharmonic.denominator>/g, sub, context, true);
            /**
             * Interharmonic numerator.
             *
             * Value 0 means not applicable. Value 1 is used in combination with 'denominator'=2 to represent interharmonic 1/2, and with 'denominator'=1 it represents fundamental frequency. Finally, values greater than 1 indicate the harmonic of that order (e.g., 'numerator'=5 is the fifth harmonic).
             *
             */
            obj["numerator"] = base.parse_element (/<cim:ReadingInterharmonic.numerator>([\s\S]*?)<\/cim:ReadingInterharmonic.numerator>/g, sub, context, true);
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
            obj["domain"] = base.parse_element (/<cim:EndDeviceControlType.domain>([\s\S]*?)<\/cim:EndDeviceControlType.domain>/g, sub, context, true);
            /**
             * The most specific part of this control type.
             *
             * It is mainly in the form of a verb that gives action to the control that just occurred.
             *
             */
            obj["eventOrAction"] = base.parse_element (/<cim:EndDeviceControlType.eventOrAction>([\s\S]*?)<\/cim:EndDeviceControlType.eventOrAction>/g, sub, context, true);
            /**
             * More specific nature of the control, as a further sub-categorisation of 'domain'.
             *
             */
            obj["subDomain"] = base.parse_element (/<cim:EndDeviceControlType.subDomain>([\s\S]*?)<\/cim:EndDeviceControlType.subDomain>/g, sub, context, true);
            /**
             * Type of physical device from which the control was created.
             *
             * A value of zero (0) can be used when the source is unknown.
             *
             */
            obj["type"] = base.parse_element (/<cim:EndDeviceControlType.type>([\s\S]*?)<\/cim:EndDeviceControlType.type>/g, sub, context, true);
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
            obj["start"] = base.parse_element (/<cim:RandomisationKind.start>([\s\S]*?)<\/cim:RandomisationKind.start>/g, sub, context, true);
            /**
             * End time of an event or control action affecting one or more devices is randomised to prevent simultaneous operation.
             *
             */
            obj["end"] = base.parse_element (/<cim:RandomisationKind.end>([\s\S]*?)<\/cim:RandomisationKind.end>/g, sub, context, true);
            /**
             * Both the start time and the end time of an event or control action affecting one or more devices are randomised to prevent simultaneous operation.
             *
             */
            obj["startAndEnd"] = base.parse_element (/<cim:RandomisationKind.startAndEnd>([\s\S]*?)<\/cim:RandomisationKind.startAndEnd>/g, sub, context, true);
            /**
             * Randomisation of start and/or end times involving the operation of one or more devices is controlled by default settings for the device(s).
             *
             */
            obj["default"] = base.parse_element (/<cim:RandomisationKind.default>([\s\S]*?)<\/cim:RandomisationKind.default>/g, sub, context, true);
            /**
             * Neither the start time nor the end time of an event or control action affecting one or more devices is randomised.
             *
             */
            obj["none"] = base.parse_element (/<cim:RandomisationKind.none>([\s\S]*?)<\/cim:RandomisationKind.none>/g, sub, context, true);
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
            obj["type"] = base.parse_element (/<cim:UsagePointGroup.type>([\s\S]*?)<\/cim:UsagePointGroup.type>/g, sub, context, true);
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
            obj["Meter"] = base.parse_attribute (/<cim:MeterServiceWork.Meter\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Old meter replaced by this work.
             *
             */
            obj["OldMeter"] = base.parse_attribute (/<cim:MeterServiceWork.OldMeter\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Usage point to which this meter service work applies.
             *
             */
            obj["UsagePoint"] = base.parse_attribute (/<cim:MeterServiceWork.UsagePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["normal"] = base.parse_element (/<cim:TransmissionModeKind.normal>([\s\S]*?)<\/cim:TransmissionModeKind.normal>/g, sub, context, true);
            /**
             * Message transmission mode whereby messages or commands are broadcast to unspecified devices listening for such communications.
             *
             */
            obj["anonymous"] = base.parse_element (/<cim:TransmissionModeKind.anonymous>([\s\S]*?)<\/cim:TransmissionModeKind.anonymous>/g, sub, context, true);
            /**
             * Message transmission mode whereby messages or commands are sent by both 'normal' and 'anonymous' methods.
             *
             */
            obj["both"] = base.parse_element (/<cim:TransmissionModeKind.both>([\s\S]*?)<\/cim:TransmissionModeKind.both>/g, sub, context, true);
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
            obj["category"] = base.parse_element (/<cim:ReadingQualityType.category>([\s\S]*?)<\/cim:ReadingQualityType.category>/g, sub, context, true);
            /**
             * More specific nature of the reading value quality, as a further sub-categorisation of 'category'.
             *
             */
            obj["subCategory"] = base.parse_element (/<cim:ReadingQualityType.subCategory>([\s\S]*?)<\/cim:ReadingQualityType.subCategory>/g, sub, context, true);
            /**
             * Identification of the system which has declared the issue with the data or provided commentary on the data.
             *
             */
            obj["systemId"] = base.parse_element (/<cim:ReadingQualityType.systemId>([\s\S]*?)<\/cim:ReadingQualityType.systemId>/g, sub, context, true);
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
            obj["amrAddress"] = base.parse_element (/<cim:ComFunction.amrAddress>([\s\S]*?)<\/cim:ComFunction.amrAddress>/g, sub, context, true);
            /**
             * Communication ID number (e.g. port number, serial number, data collector ID, etc.) of the parent device associated to this AMR module.
             *
             */
            obj["amrRouter"] = base.parse_element (/<cim:ComFunction.amrRouter>([\s\S]*?)<\/cim:ComFunction.amrRouter>/g, sub, context, true);
            /**
             * Kind of communication direction.
             *
             */
            obj["direction"] = base.parse_element (/<cim:ComFunction.direction>([\s\S]*?)<\/cim:ComFunction.direction>/g, sub, context, true);
            /**
             * Kind of communication technology.
             *
             */
            obj["technology"] = base.parse_element (/<cim:ComFunction.technology>([\s\S]*?)<\/cim:ComFunction.technology>/g, sub, context, true);
            /**
             * Module performing this communication function.
             *
             */
            obj["ComModule"] = base.parse_attribute (/<cim:ComFunction.ComModule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["domain"] = base.parse_element (/<cim:EndDeviceEventType.domain>([\s\S]*?)<\/cim:EndDeviceEventType.domain>/g, sub, context, true);
            /**
             * The most specific part of this event type.
             *
             * It is mainly in the form of a verb that gives action to the event that just occurred.
             *
             */
            obj["eventOrAction"] = base.parse_element (/<cim:EndDeviceEventType.eventOrAction>([\s\S]*?)<\/cim:EndDeviceEventType.eventOrAction>/g, sub, context, true);
            /**
             * More specific nature of the event, as a further sub-categorisation of 'domain'.
             *
             */
            obj["subDomain"] = base.parse_element (/<cim:EndDeviceEventType.subDomain>([\s\S]*?)<\/cim:EndDeviceEventType.subDomain>/g, sub, context, true);
            /**
             * Type of physical device from which the event was created.
             *
             * A value of zero (0) can be used when the source is unknown.
             *
             */
            obj["type"] = base.parse_element (/<cim:EndDeviceEventType.type>([\s\S]*?)<\/cim:EndDeviceEventType.type>/g, sub, context, true);
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
            obj["amrSystem"] = base.parse_element (/<cim:EndDevice.amrSystem>([\s\S]*?)<\/cim:EndDevice.amrSystem>/g, sub, context, true);
            /**
             * Installation code.
             *
             */
            obj["installCode"] = base.parse_element (/<cim:EndDevice.installCode>([\s\S]*?)<\/cim:EndDevice.installCode>/g, sub, context, true);
            /**
             * If true, this is a premises area network (PAN) device.
             *
             */
            obj["isPan"] = base.to_boolean (base.parse_element (/<cim:EndDevice.isPan>([\s\S]*?)<\/cim:EndDevice.isPan>/g, sub, context, true));
            /**
             * If true, there is no physical device.
             *
             * As an example, a virtual meter can be defined to aggregate the consumption for two or more physical meters. Otherwise, this is a physical hardware device.
             *
             */
            obj["isVirtual"] = base.to_boolean (base.parse_element (/<cim:EndDevice.isVirtual>([\s\S]*?)<\/cim:EndDevice.isVirtual>/g, sub, context, true));
            /**
             * Time zone offset relative to GMT for the location of this end device.
             *
             */
            obj["timeZoneOffset"] = base.parse_element (/<cim:EndDevice.timeZoneOffset>([\s\S]*?)<\/cim:EndDevice.timeZoneOffset>/g, sub, context, true);
            /**
             * End device data.
             *
             */
            obj["EndDeviceInfo"] = base.parse_attribute (/<cim:EndDevice.EndDeviceInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Service location whose service delivery is measured by this end device.
             *
             */
            obj["ServiceLocation"] = base.parse_attribute (/<cim:EndDevice.ServiceLocation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Customer owning this end device.
             *
             */
            obj["Customer"] = base.parse_attribute (/<cim:EndDevice.Customer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Usage point to which this end device belongs.
             *
             */
            obj["UsagePoint"] = base.parse_attribute (/<cim:EndDevice.UsagePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["cellular"] = base.parse_element (/<cim:ComTechnologyKind.cellular>([\s\S]*?)<\/cim:ComTechnologyKind.cellular>/g, sub, context, true);
            /**
             * Communicates using one or more of a family of frame-based computer networking technologies conforming to the IEEE 802.3 standard.
             *
             */
            obj["ethernet"] = base.parse_element (/<cim:ComTechnologyKind.ethernet>([\s\S]*?)<\/cim:ComTechnologyKind.ethernet>/g, sub, context, true);
            /**
             * Communicates using power line communication technologies conforming to the standards established by the HomePlug Powerline Alliance.
             *
             * A specific variant of 'plc'.
             *
             */
            obj["homePlug"] = base.parse_element (/<cim:ComTechnologyKind.homePlug>([\s\S]*?)<\/cim:ComTechnologyKind.homePlug>/g, sub, context, true);
            /**
             * Communicates using a public one-way or two-way radio-based paging network.
             *
             * A specific variant of 'rf'.
             *
             */
            obj["pager"] = base.parse_element (/<cim:ComTechnologyKind.pager>([\s\S]*?)<\/cim:ComTechnologyKind.pager>/g, sub, context, true);
            /**
             * Communicates using a basic, wireline telephone system.
             *
             */
            obj["phone"] = base.parse_element (/<cim:ComTechnologyKind.phone>([\s\S]*?)<\/cim:ComTechnologyKind.phone>/g, sub, context, true);
            /**
             * Communicates using power line communication technologies.
             *
             */
            obj["plc"] = base.parse_element (/<cim:ComTechnologyKind.plc>([\s\S]*?)<\/cim:ComTechnologyKind.plc>/g, sub, context, true);
            /**
             * Communicates using private or public radio-based technology.
             *
             */
            obj["rf"] = base.parse_element (/<cim:ComTechnologyKind.rf>([\s\S]*?)<\/cim:ComTechnologyKind.rf>/g, sub, context, true);
            /**
             * Communicates using a mesh radio technology.
             *
             * A specific variant of 'rf'.
             *
             */
            obj["rfMesh"] = base.parse_element (/<cim:ComTechnologyKind.rfMesh>([\s\S]*?)<\/cim:ComTechnologyKind.rfMesh>/g, sub, context, true);
            /**
             * Communicates using radio communication technologies conforming to the standards established by the ZigBee.
             *
             * A specific variant of 'rf'.
             *
             */
            obj["zigbee"] = base.parse_element (/<cim:ComTechnologyKind.zigbee>([\s\S]*?)<\/cim:ComTechnologyKind.zigbee>/g, sub, context, true);
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
            obj["autonomousDst"] = base.to_boolean (base.parse_element (/<cim:EndDeviceCapability.autonomousDst>([\s\S]*?)<\/cim:EndDeviceCapability.autonomousDst>/g, sub, context, true));
            /**
             * True if communication function is supported.
             *
             */
            obj["communication"] = base.to_boolean (base.parse_element (/<cim:EndDeviceCapability.communication>([\s\S]*?)<\/cim:EndDeviceCapability.communication>/g, sub, context, true));
            /**
             * True if connect and disconnect function is supported.
             *
             */
            obj["connectDisconnect"] = base.to_boolean (base.parse_element (/<cim:EndDeviceCapability.connectDisconnect>([\s\S]*?)<\/cim:EndDeviceCapability.connectDisconnect>/g, sub, context, true));
            /**
             * True if demand response function is supported.
             *
             */
            obj["demandResponse"] = base.to_boolean (base.parse_element (/<cim:EndDeviceCapability.demandResponse>([\s\S]*?)<\/cim:EndDeviceCapability.demandResponse>/g, sub, context, true));
            /**
             * True if electric metering function is supported.
             *
             */
            obj["electricMetering"] = base.to_boolean (base.parse_element (/<cim:EndDeviceCapability.electricMetering>([\s\S]*?)<\/cim:EndDeviceCapability.electricMetering>/g, sub, context, true));
            /**
             * True if gas metering function is supported.
             *
             */
            obj["gasMetering"] = base.to_boolean (base.parse_element (/<cim:EndDeviceCapability.gasMetering>([\s\S]*?)<\/cim:EndDeviceCapability.gasMetering>/g, sub, context, true));
            /**
             * True if metrology function is supported.
             *
             */
            obj["metrology"] = base.to_boolean (base.parse_element (/<cim:EndDeviceCapability.metrology>([\s\S]*?)<\/cim:EndDeviceCapability.metrology>/g, sub, context, true));
            /**
             * True if on request read function is supported.
             *
             */
            obj["onRequestRead"] = base.to_boolean (base.parse_element (/<cim:EndDeviceCapability.onRequestRead>([\s\S]*?)<\/cim:EndDeviceCapability.onRequestRead>/g, sub, context, true));
            /**
             * True if outage history function is supported.
             *
             */
            obj["outageHistory"] = base.to_boolean (base.parse_element (/<cim:EndDeviceCapability.outageHistory>([\s\S]*?)<\/cim:EndDeviceCapability.outageHistory>/g, sub, context, true));
            /**
             * True if device performs pressure compensation for metered quantities.
             *
             */
            obj["pressureCompensation"] = base.to_boolean (base.parse_element (/<cim:EndDeviceCapability.pressureCompensation>([\s\S]*?)<\/cim:EndDeviceCapability.pressureCompensation>/g, sub, context, true));
            /**
             * True if pricing information is supported.
             *
             */
            obj["pricingInfo"] = base.to_boolean (base.parse_element (/<cim:EndDeviceCapability.pricingInfo>([\s\S]*?)<\/cim:EndDeviceCapability.pricingInfo>/g, sub, context, true));
            /**
             * True if device produces pulse outputs.
             *
             */
            obj["pulseOutput"] = base.to_boolean (base.parse_element (/<cim:EndDeviceCapability.pulseOutput>([\s\S]*?)<\/cim:EndDeviceCapability.pulseOutput>/g, sub, context, true));
            /**
             * True if relays programming function is supported.
             *
             */
            obj["relaysProgramming"] = base.to_boolean (base.parse_element (/<cim:EndDeviceCapability.relaysProgramming>([\s\S]*?)<\/cim:EndDeviceCapability.relaysProgramming>/g, sub, context, true));
            /**
             * True if reverse flow function is supported.
             *
             */
            obj["reverseFlow"] = base.to_boolean (base.parse_element (/<cim:EndDeviceCapability.reverseFlow>([\s\S]*?)<\/cim:EndDeviceCapability.reverseFlow>/g, sub, context, true));
            /**
             * True if device performs super compressibility compensation for metered quantities.
             *
             */
            obj["superCompressibilityCompensation"] = base.to_boolean (base.parse_element (/<cim:EndDeviceCapability.superCompressibilityCompensation>([\s\S]*?)<\/cim:EndDeviceCapability.superCompressibilityCompensation>/g, sub, context, true));
            /**
             * True if device performs temperature compensation for metered quantities.
             *
             */
            obj["temperatureCompensation"] = base.to_boolean (base.parse_element (/<cim:EndDeviceCapability.temperatureCompensation>([\s\S]*?)<\/cim:EndDeviceCapability.temperatureCompensation>/g, sub, context, true));
            /**
             * True if the displaying of text messages is supported.
             *
             */
            obj["textMessage"] = base.to_boolean (base.parse_element (/<cim:EndDeviceCapability.textMessage>([\s\S]*?)<\/cim:EndDeviceCapability.textMessage>/g, sub, context, true));
            /**
             * True if water metering function is supported.
             *
             */
            obj["waterMetering"] = base.to_boolean (base.parse_element (/<cim:EndDeviceCapability.waterMetering>([\s\S]*?)<\/cim:EndDeviceCapability.waterMetering>/g, sub, context, true));
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
            obj["confirmationRequired"] = base.to_boolean (base.parse_element (/<cim:PanDisplay.confirmationRequired>([\s\S]*?)<\/cim:PanDisplay.confirmationRequired>/g, sub, context, true));
            /**
             * Priority associated with the text message to be displayed.
             *
             */
            obj["priority"] = base.parse_element (/<cim:PanDisplay.priority>([\s\S]*?)<\/cim:PanDisplay.priority>/g, sub, context, true);
            /**
             * Text to be displayed by a PAN device.
             *
             */
            obj["textMessage"] = base.parse_element (/<cim:PanDisplay.textMessage>([\s\S]*?)<\/cim:PanDisplay.textMessage>/g, sub, context, true);
            /**
             * Transmission mode to be used for this PAN display control.
             *
             */
            obj["transmissionMode"] = base.parse_element (/<cim:PanDisplay.transmissionMode>([\s\S]*?)<\/cim:PanDisplay.transmissionMode>/g, sub, context, true);
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
            obj["capability"] = base.parse_element (/<cim:EndDeviceInfo.capability>([\s\S]*?)<\/cim:EndDeviceInfo.capability>/g, sub, context, true);
            /**
             * If true, this is a solid state end device (as opposed to a mechanical or electromechanical device).
             *
             */
            obj["isSolidState"] = base.to_boolean (base.parse_element (/<cim:EndDeviceInfo.isSolidState>([\s\S]*?)<\/cim:EndDeviceInfo.isSolidState>/g, sub, context, true));
            /**
             * Number of potential phases the end device supports, typically 0, 1 or 3.
             *
             */
            obj["phaseCount"] = base.parse_element (/<cim:EndDeviceInfo.phaseCount>([\s\S]*?)<\/cim:EndDeviceInfo.phaseCount>/g, sub, context, true);
            /**
             * Rated current.
             *
             */
            obj["ratedCurrent"] = base.parse_element (/<cim:EndDeviceInfo.ratedCurrent>([\s\S]*?)<\/cim:EndDeviceInfo.ratedCurrent>/g, sub, context, true);
            /**
             * Rated voltage.
             *
             */
            obj["ratedVoltage"] = base.parse_element (/<cim:EndDeviceInfo.ratedVoltage>([\s\S]*?)<\/cim:EndDeviceInfo.ratedVoltage>/g, sub, context, true);
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