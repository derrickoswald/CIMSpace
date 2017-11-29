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
<a data-toggle="collapse" href="#DemandResponseProgram_collapse" aria-expanded="true" aria-controls="DemandResponseProgram_collapse">DemandResponseProgram</a>
<div id="DemandResponseProgram_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
{{#validityInterval}}<div><b>validityInterval</b>: {{validityInterval}}</div>{{/validityInterval}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#EndDeviceGroup_collapse" aria-expanded="true" aria-controls="EndDeviceGroup_collapse">EndDeviceGroup</a>
<div id="EndDeviceGroup_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#ControlledAppliance_collapse" aria-expanded="true" aria-controls="ControlledAppliance_collapse">ControlledAppliance</a>
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
`
                );
           }        }

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
<a data-toggle="collapse" href="#Register_collapse" aria-expanded="true" aria-controls="Register_collapse">Register</a>
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
`
                );
           }        }

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
<a data-toggle="collapse" href="#EndDeviceControl_collapse" aria-expanded="true" aria-controls="EndDeviceControl_collapse">EndDeviceControl</a>
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
`
                );
           }        }

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
<a data-toggle="collapse" href="#PanPricingDetail_collapse" aria-expanded="true" aria-controls="PanPricingDetail_collapse">PanPricingDetail</a>
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
`
                );
           }        }

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
                base.parse_element (/<cim:UsagePoint.amiBillingReady>([\s\S]*?)<\/cim:UsagePoint.amiBillingReady>/g, obj, "amiBillingReady", base.to_string, sub, context);
                base.parse_element (/<cim:UsagePoint.checkBilling>([\s\S]*?)<\/cim:UsagePoint.checkBilling>/g, obj, "checkBilling", base.to_boolean, sub, context);
                base.parse_element (/<cim:UsagePoint.connectionState>([\s\S]*?)<\/cim:UsagePoint.connectionState>/g, obj, "connectionState", base.to_string, sub, context);
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
<a data-toggle="collapse" href="#UsagePoint_collapse" aria-expanded="true" aria-controls="UsagePoint_collapse">UsagePoint</a>
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
{{#CustomerAgreement}}<div><b>CustomerAgreement</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CustomerAgreement}}&quot;);})'>{{CustomerAgreement}}</a></div>{{/CustomerAgreement}}
{{#ServiceSupplier}}<div><b>ServiceSupplier</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ServiceSupplier}}&quot;);})'>{{ServiceSupplier}}</a></div>{{/ServiceSupplier}}
{{#UsagePointLocation}}<div><b>UsagePointLocation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{UsagePointLocation}}&quot;);})'>{{UsagePointLocation}}</a></div>{{/UsagePointLocation}}
{{#ServiceCategory}}<div><b>ServiceCategory</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ServiceCategory}}&quot;);})'>{{ServiceCategory}}</a></div>{{/ServiceCategory}}
{{#ServiceLocation}}<div><b>ServiceLocation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ServiceLocation}}&quot;);})'>{{ServiceLocation}}</a></div>{{/ServiceLocation}}
</div>
`
                );
           }        }

        /**
         * Kind of meter multiplier.
         *
         */
        class MeterMultiplierKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MeterMultiplierKind;
                if (null == bucket)
                   cim_data.MeterMultiplierKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MeterMultiplierKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MeterMultiplierKind";
                base.parse_element (/<cim:MeterMultiplierKind.kH>([\s\S]*?)<\/cim:MeterMultiplierKind.kH>/g, obj, "kH", base.to_string, sub, context);
                base.parse_element (/<cim:MeterMultiplierKind.kR>([\s\S]*?)<\/cim:MeterMultiplierKind.kR>/g, obj, "kR", base.to_string, sub, context);
                base.parse_element (/<cim:MeterMultiplierKind.kE>([\s\S]*?)<\/cim:MeterMultiplierKind.kE>/g, obj, "kE", base.to_string, sub, context);
                base.parse_element (/<cim:MeterMultiplierKind.ctRatio>([\s\S]*?)<\/cim:MeterMultiplierKind.ctRatio>/g, obj, "ctRatio", base.to_string, sub, context);
                base.parse_element (/<cim:MeterMultiplierKind.ptRatio>([\s\S]*?)<\/cim:MeterMultiplierKind.ptRatio>/g, obj, "ptRatio", base.to_string, sub, context);
                base.parse_element (/<cim:MeterMultiplierKind.transformerRatio>([\s\S]*?)<\/cim:MeterMultiplierKind.transformerRatio>/g, obj, "transformerRatio", base.to_string, sub, context);

                var bucket = context.parsed.MeterMultiplierKind;
                if (null == bucket)
                   context.parsed.MeterMultiplierKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "MeterMultiplierKind", "kH", base.from_string, fields);
                base.export_element (obj, "MeterMultiplierKind", "kR", base.from_string, fields);
                base.export_element (obj, "MeterMultiplierKind", "kE", base.from_string, fields);
                base.export_element (obj, "MeterMultiplierKind", "ctRatio", base.from_string, fields);
                base.export_element (obj, "MeterMultiplierKind", "ptRatio", base.from_string, fields);
                base.export_element (obj, "MeterMultiplierKind", "transformerRatio", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MeterMultiplierKind_collapse" aria-expanded="true" aria-controls="MeterMultiplierKind_collapse">MeterMultiplierKind</a>
<div id="MeterMultiplierKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#kH}}<div><b>kH</b>: {{kH}}</div>{{/kH}}
{{#kR}}<div><b>kR</b>: {{kR}}</div>{{/kR}}
{{#kE}}<div><b>kE</b>: {{kE}}</div>{{/kE}}
{{#ctRatio}}<div><b>ctRatio</b>: {{ctRatio}}</div>{{/ctRatio}}
{{#ptRatio}}<div><b>ptRatio</b>: {{ptRatio}}</div>{{/ptRatio}}
{{#transformerRatio}}<div><b>transformerRatio</b>: {{transformerRatio}}</div>{{/transformerRatio}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#RationalNumber_collapse" aria-expanded="true" aria-controls="RationalNumber_collapse">RationalNumber</a>
<div id="RationalNumber_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#denominator}}<div><b>denominator</b>: {{denominator}}</div>{{/denominator}}
{{#numerator}}<div><b>numerator</b>: {{numerator}}</div>{{/numerator}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#EndDeviceEventDetail_collapse" aria-expanded="true" aria-controls="EndDeviceEventDetail_collapse">EndDeviceEventDetail</a>
<div id="EndDeviceEventDetail_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#name}}<div><b>name</b>: {{name}}</div>{{/name}}
{{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
{{#EndDeviceEvent}}<div><b>EndDeviceEvent</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EndDeviceEvent}}&quot;);})'>{{EndDeviceEvent}}</a></div>{{/EndDeviceEvent}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#MeterReading_collapse" aria-expanded="true" aria-controls="MeterReading_collapse">MeterReading</a>
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
`
                );
           }        }

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
<a data-toggle="collapse" href="#Channel_collapse" aria-expanded="true" aria-controls="Channel_collapse">Channel</a>
<div id="Channel_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#isVirtual}}<div><b>isVirtual</b>: {{isVirtual}}</div>{{/isVirtual}}
{{#Register}}<div><b>Register</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Register}}&quot;);})'>{{Register}}</a></div>{{/Register}}
{{#ReadingType}}<div><b>ReadingType</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ReadingType}}&quot;);})'>{{ReadingType}}</a></div>{{/ReadingType}}
</div>
`
                );
           }        }

        /**
         * Kind of service multiplier.
         *
         */
        class ServiceMultiplierKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ServiceMultiplierKind;
                if (null == bucket)
                   cim_data.ServiceMultiplierKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ServiceMultiplierKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ServiceMultiplierKind";
                base.parse_element (/<cim:ServiceMultiplierKind.ctRatio>([\s\S]*?)<\/cim:ServiceMultiplierKind.ctRatio>/g, obj, "ctRatio", base.to_string, sub, context);
                base.parse_element (/<cim:ServiceMultiplierKind.ptRatio>([\s\S]*?)<\/cim:ServiceMultiplierKind.ptRatio>/g, obj, "ptRatio", base.to_string, sub, context);
                base.parse_element (/<cim:ServiceMultiplierKind.transformerRatio>([\s\S]*?)<\/cim:ServiceMultiplierKind.transformerRatio>/g, obj, "transformerRatio", base.to_string, sub, context);

                var bucket = context.parsed.ServiceMultiplierKind;
                if (null == bucket)
                   context.parsed.ServiceMultiplierKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ServiceMultiplierKind", "ctRatio", base.from_string, fields);
                base.export_element (obj, "ServiceMultiplierKind", "ptRatio", base.from_string, fields);
                base.export_element (obj, "ServiceMultiplierKind", "transformerRatio", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ServiceMultiplierKind_collapse" aria-expanded="true" aria-controls="ServiceMultiplierKind_collapse">ServiceMultiplierKind</a>
<div id="ServiceMultiplierKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#ctRatio}}<div><b>ctRatio</b>: {{ctRatio}}</div>{{/ctRatio}}
{{#ptRatio}}<div><b>ptRatio</b>: {{ptRatio}}</div>{{/ptRatio}}
{{#transformerRatio}}<div><b>transformerRatio</b>: {{transformerRatio}}</div>{{/transformerRatio}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#ReadingQuality_collapse" aria-expanded="true" aria-controls="ReadingQuality_collapse">ReadingQuality</a>
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
`
                );
           }        }

        /**
         * Kind of communication direction.
         *
         */
        class ComDirectionKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ComDirectionKind;
                if (null == bucket)
                   cim_data.ComDirectionKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ComDirectionKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ComDirectionKind";
                base.parse_element (/<cim:ComDirectionKind.fromDevice>([\s\S]*?)<\/cim:ComDirectionKind.fromDevice>/g, obj, "fromDevice", base.to_string, sub, context);
                base.parse_element (/<cim:ComDirectionKind.toDevice>([\s\S]*?)<\/cim:ComDirectionKind.toDevice>/g, obj, "toDevice", base.to_string, sub, context);
                base.parse_element (/<cim:ComDirectionKind.biDirectional>([\s\S]*?)<\/cim:ComDirectionKind.biDirectional>/g, obj, "biDirectional", base.to_string, sub, context);

                var bucket = context.parsed.ComDirectionKind;
                if (null == bucket)
                   context.parsed.ComDirectionKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ComDirectionKind", "fromDevice", base.from_string, fields);
                base.export_element (obj, "ComDirectionKind", "toDevice", base.from_string, fields);
                base.export_element (obj, "ComDirectionKind", "biDirectional", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ComDirectionKind_collapse" aria-expanded="true" aria-controls="ComDirectionKind_collapse">ComDirectionKind</a>
<div id="ComDirectionKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#fromDevice}}<div><b>fromDevice</b>: {{fromDevice}}</div>{{/fromDevice}}
{{#toDevice}}<div><b>toDevice</b>: {{toDevice}}</div>{{/toDevice}}
{{#biDirectional}}<div><b>biDirectional</b>: {{biDirectional}}</div>{{/biDirectional}}
</div>
`
                );
           }        }

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
                base.parse_element (/<cim:MeterMultiplier.kind>([\s\S]*?)<\/cim:MeterMultiplier.kind>/g, obj, "kind", base.to_string, sub, context);
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
<a data-toggle="collapse" href="#MeterMultiplier_collapse" aria-expanded="true" aria-controls="MeterMultiplier_collapse">MeterMultiplier</a>
<div id="MeterMultiplier_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
{{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
{{#Meter}}<div><b>Meter</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Meter}}&quot;);})'>{{Meter}}</a></div>{{/Meter}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#UsagePointLocation_collapse" aria-expanded="true" aria-controls="UsagePointLocation_collapse">UsagePointLocation</a>
<div id="UsagePointLocation_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.Location.prototype.template.call (this) +
`
{{#accessMethod}}<div><b>accessMethod</b>: {{accessMethod}}</div>{{/accessMethod}}
{{#remark}}<div><b>remark</b>: {{remark}}</div>{{/remark}}
{{#siteAccessProblem}}<div><b>siteAccessProblem</b>: {{siteAccessProblem}}</div>{{/siteAccessProblem}}
</div>
`
                );
           }        }

        /**
         * Lifecycle states of the metering installation at a usage point with respect to readiness for billing via advanced metering infrastructure reads.
         *
         */
        class AmiBillingReadyKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AmiBillingReadyKind;
                if (null == bucket)
                   cim_data.AmiBillingReadyKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AmiBillingReadyKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AmiBillingReadyKind";
                base.parse_element (/<cim:AmiBillingReadyKind.enabled>([\s\S]*?)<\/cim:AmiBillingReadyKind.enabled>/g, obj, "enabled", base.to_string, sub, context);
                base.parse_element (/<cim:AmiBillingReadyKind.operable>([\s\S]*?)<\/cim:AmiBillingReadyKind.operable>/g, obj, "operable", base.to_string, sub, context);
                base.parse_element (/<cim:AmiBillingReadyKind.billingApproved>([\s\S]*?)<\/cim:AmiBillingReadyKind.billingApproved>/g, obj, "billingApproved", base.to_string, sub, context);
                base.parse_element (/<cim:AmiBillingReadyKind.nonAmi>([\s\S]*?)<\/cim:AmiBillingReadyKind.nonAmi>/g, obj, "nonAmi", base.to_string, sub, context);
                base.parse_element (/<cim:AmiBillingReadyKind.amiDisabled>([\s\S]*?)<\/cim:AmiBillingReadyKind.amiDisabled>/g, obj, "amiDisabled", base.to_string, sub, context);
                base.parse_element (/<cim:AmiBillingReadyKind.amiCapable>([\s\S]*?)<\/cim:AmiBillingReadyKind.amiCapable>/g, obj, "amiCapable", base.to_string, sub, context);
                base.parse_element (/<cim:AmiBillingReadyKind.nonMetered>([\s\S]*?)<\/cim:AmiBillingReadyKind.nonMetered>/g, obj, "nonMetered", base.to_string, sub, context);

                var bucket = context.parsed.AmiBillingReadyKind;
                if (null == bucket)
                   context.parsed.AmiBillingReadyKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "AmiBillingReadyKind", "enabled", base.from_string, fields);
                base.export_element (obj, "AmiBillingReadyKind", "operable", base.from_string, fields);
                base.export_element (obj, "AmiBillingReadyKind", "billingApproved", base.from_string, fields);
                base.export_element (obj, "AmiBillingReadyKind", "nonAmi", base.from_string, fields);
                base.export_element (obj, "AmiBillingReadyKind", "amiDisabled", base.from_string, fields);
                base.export_element (obj, "AmiBillingReadyKind", "amiCapable", base.from_string, fields);
                base.export_element (obj, "AmiBillingReadyKind", "nonMetered", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#AmiBillingReadyKind_collapse" aria-expanded="true" aria-controls="AmiBillingReadyKind_collapse">AmiBillingReadyKind</a>
<div id="AmiBillingReadyKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#enabled}}<div><b>enabled</b>: {{enabled}}</div>{{/enabled}}
{{#operable}}<div><b>operable</b>: {{operable}}</div>{{/operable}}
{{#billingApproved}}<div><b>billingApproved</b>: {{billingApproved}}</div>{{/billingApproved}}
{{#nonAmi}}<div><b>nonAmi</b>: {{nonAmi}}</div>{{/nonAmi}}
{{#amiDisabled}}<div><b>amiDisabled</b>: {{amiDisabled}}</div>{{/amiDisabled}}
{{#amiCapable}}<div><b>amiCapable</b>: {{amiCapable}}</div>{{/amiCapable}}
{{#nonMetered}}<div><b>nonMetered</b>: {{nonMetered}}</div>{{/nonMetered}}
</div>
`
                );
           }        }

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
                base.parse_element (/<cim:MetrologyRequirement.reason>([\s\S]*?)<\/cim:MetrologyRequirement.reason>/g, obj, "reason", base.to_string, sub, context);

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
<a data-toggle="collapse" href="#MetrologyRequirement_collapse" aria-expanded="true" aria-controls="MetrologyRequirement_collapse">MetrologyRequirement</a>
<div id="MetrologyRequirement_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#reason}}<div><b>reason</b>: {{reason}}</div>{{/reason}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#EndDeviceFunction_collapse" aria-expanded="true" aria-controls="EndDeviceFunction_collapse">EndDeviceFunction</a>
<div id="EndDeviceFunction_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Assets.AssetFunction.prototype.template.call (this) +
`
{{#enabled}}<div><b>enabled</b>: {{enabled}}</div>{{/enabled}}
{{#EndDevice}}<div><b>EndDevice</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EndDevice}}&quot;);})'>{{EndDevice}}</a></div>{{/EndDevice}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#ComModule_collapse" aria-expanded="true" aria-controls="ComModule_collapse">ComModule</a>
<div id="ComModule_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Assets.Asset.prototype.template.call (this) +
`
{{#amrSystem}}<div><b>amrSystem</b>: {{amrSystem}}</div>{{/amrSystem}}
{{#supportsAutonomousDst}}<div><b>supportsAutonomousDst</b>: {{supportsAutonomousDst}}</div>{{/supportsAutonomousDst}}
{{#timeZoneOffset}}<div><b>timeZoneOffset</b>: {{timeZoneOffset}}</div>{{/timeZoneOffset}}
</div>
`
                );
           }        }

        /**
         * State of the usage point with respect to connection to the network.
         *
         */
        class UsagePointConnectedKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.UsagePointConnectedKind;
                if (null == bucket)
                   cim_data.UsagePointConnectedKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.UsagePointConnectedKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "UsagePointConnectedKind";
                base.parse_element (/<cim:UsagePointConnectedKind.connected>([\s\S]*?)<\/cim:UsagePointConnectedKind.connected>/g, obj, "connected", base.to_string, sub, context);
                base.parse_element (/<cim:UsagePointConnectedKind.physicallyDisconnected>([\s\S]*?)<\/cim:UsagePointConnectedKind.physicallyDisconnected>/g, obj, "physicallyDisconnected", base.to_string, sub, context);
                base.parse_element (/<cim:UsagePointConnectedKind.logicallyDisconnected>([\s\S]*?)<\/cim:UsagePointConnectedKind.logicallyDisconnected>/g, obj, "logicallyDisconnected", base.to_string, sub, context);

                var bucket = context.parsed.UsagePointConnectedKind;
                if (null == bucket)
                   context.parsed.UsagePointConnectedKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "UsagePointConnectedKind", "connected", base.from_string, fields);
                base.export_element (obj, "UsagePointConnectedKind", "physicallyDisconnected", base.from_string, fields);
                base.export_element (obj, "UsagePointConnectedKind", "logicallyDisconnected", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#UsagePointConnectedKind_collapse" aria-expanded="true" aria-controls="UsagePointConnectedKind_collapse">UsagePointConnectedKind</a>
<div id="UsagePointConnectedKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#connected}}<div><b>connected</b>: {{connected}}</div>{{/connected}}
{{#physicallyDisconnected}}<div><b>physicallyDisconnected</b>: {{physicallyDisconnected}}</div>{{/physicallyDisconnected}}
{{#logicallyDisconnected}}<div><b>logicallyDisconnected</b>: {{logicallyDisconnected}}</div>{{/logicallyDisconnected}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#ReadingType_collapse" aria-expanded="true" aria-controls="ReadingType_collapse">ReadingType</a>
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
`
                );
           }        }

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
<a data-toggle="collapse" href="#IntervalBlock_collapse" aria-expanded="true" aria-controls="IntervalBlock_collapse">IntervalBlock</a>
<div id="IntervalBlock_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#PendingCalculation}}<div><b>PendingCalculation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PendingCalculation}}&quot;);})'>{{PendingCalculation}}</a></div>{{/PendingCalculation}}
{{#ReadingType}}<div><b>ReadingType</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ReadingType}}&quot;);})'>{{ReadingType}}</a></div>{{/ReadingType}}
{{#MeterReading}}<div><b>MeterReading</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MeterReading}}&quot;);})'>{{MeterReading}}</a></div>{{/MeterReading}}
</div>
`
                );
           }        }

        /**
         * Kind of end device function.
         *
         */
        class EndDeviceFunctionKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EndDeviceFunctionKind;
                if (null == bucket)
                   cim_data.EndDeviceFunctionKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EndDeviceFunctionKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "EndDeviceFunctionKind";
                base.parse_element (/<cim:EndDeviceFunctionKind.reverseFlow>([\s\S]*?)<\/cim:EndDeviceFunctionKind.reverseFlow>/g, obj, "reverseFlow", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceFunctionKind.demandResponse>([\s\S]*?)<\/cim:EndDeviceFunctionKind.demandResponse>/g, obj, "demandResponse", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceFunctionKind.metrology>([\s\S]*?)<\/cim:EndDeviceFunctionKind.metrology>/g, obj, "metrology", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceFunctionKind.outageHistory>([\s\S]*?)<\/cim:EndDeviceFunctionKind.outageHistory>/g, obj, "outageHistory", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceFunctionKind.relaysProgramming>([\s\S]*?)<\/cim:EndDeviceFunctionKind.relaysProgramming>/g, obj, "relaysProgramming", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceFunctionKind.onRequestRead>([\s\S]*?)<\/cim:EndDeviceFunctionKind.onRequestRead>/g, obj, "onRequestRead", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceFunctionKind.autonomousDst>([\s\S]*?)<\/cim:EndDeviceFunctionKind.autonomousDst>/g, obj, "autonomousDst", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceFunctionKind.electricMetering>([\s\S]*?)<\/cim:EndDeviceFunctionKind.electricMetering>/g, obj, "electricMetering", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceFunctionKind.gasMetering>([\s\S]*?)<\/cim:EndDeviceFunctionKind.gasMetering>/g, obj, "gasMetering", base.to_string, sub, context);
                base.parse_element (/<cim:EndDeviceFunctionKind.waterMetering>([\s\S]*?)<\/cim:EndDeviceFunctionKind.waterMetering>/g, obj, "waterMetering", base.to_string, sub, context);

                var bucket = context.parsed.EndDeviceFunctionKind;
                if (null == bucket)
                   context.parsed.EndDeviceFunctionKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "EndDeviceFunctionKind", "reverseFlow", base.from_string, fields);
                base.export_element (obj, "EndDeviceFunctionKind", "demandResponse", base.from_string, fields);
                base.export_element (obj, "EndDeviceFunctionKind", "metrology", base.from_string, fields);
                base.export_element (obj, "EndDeviceFunctionKind", "outageHistory", base.from_string, fields);
                base.export_element (obj, "EndDeviceFunctionKind", "relaysProgramming", base.from_string, fields);
                base.export_element (obj, "EndDeviceFunctionKind", "onRequestRead", base.from_string, fields);
                base.export_element (obj, "EndDeviceFunctionKind", "autonomousDst", base.from_string, fields);
                base.export_element (obj, "EndDeviceFunctionKind", "electricMetering", base.from_string, fields);
                base.export_element (obj, "EndDeviceFunctionKind", "gasMetering", base.from_string, fields);
                base.export_element (obj, "EndDeviceFunctionKind", "waterMetering", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#EndDeviceFunctionKind_collapse" aria-expanded="true" aria-controls="EndDeviceFunctionKind_collapse">EndDeviceFunctionKind</a>
<div id="EndDeviceFunctionKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#reverseFlow}}<div><b>reverseFlow</b>: {{reverseFlow}}</div>{{/reverseFlow}}
{{#demandResponse}}<div><b>demandResponse</b>: {{demandResponse}}</div>{{/demandResponse}}
{{#metrology}}<div><b>metrology</b>: {{metrology}}</div>{{/metrology}}
{{#outageHistory}}<div><b>outageHistory</b>: {{outageHistory}}</div>{{/outageHistory}}
{{#relaysProgramming}}<div><b>relaysProgramming</b>: {{relaysProgramming}}</div>{{/relaysProgramming}}
{{#onRequestRead}}<div><b>onRequestRead</b>: {{onRequestRead}}</div>{{/onRequestRead}}
{{#autonomousDst}}<div><b>autonomousDst</b>: {{autonomousDst}}</div>{{/autonomousDst}}
{{#electricMetering}}<div><b>electricMetering</b>: {{electricMetering}}</div>{{/electricMetering}}
{{#gasMetering}}<div><b>gasMetering</b>: {{gasMetering}}</div>{{/gasMetering}}
{{#waterMetering}}<div><b>waterMetering</b>: {{waterMetering}}</div>{{/waterMetering}}
</div>
`
                );
           }        }

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
                base.parse_element (/<cim:EndDeviceTiming.randomisation>([\s\S]*?)<\/cim:EndDeviceTiming.randomisation>/g, obj, "randomisation", base.to_string, sub, context);

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
<a data-toggle="collapse" href="#EndDeviceTiming_collapse" aria-expanded="true" aria-controls="EndDeviceTiming_collapse">EndDeviceTiming</a>
<div id="EndDeviceTiming_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#duration}}<div><b>duration</b>: {{duration}}</div>{{/duration}}
{{#durationIndefinite}}<div><b>durationIndefinite</b>: {{durationIndefinite}}</div>{{/durationIndefinite}}
{{#interval}}<div><b>interval</b>: {{interval}}</div>{{/interval}}
{{#randomisation}}<div><b>randomisation</b>: {{randomisation}}</div>{{/randomisation}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#EndDeviceAction_collapse" aria-expanded="true" aria-controls="EndDeviceAction_collapse">EndDeviceAction</a>
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
`
                );
           }        }

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
<a data-toggle="collapse" href="#BaseReading_collapse" aria-expanded="true" aria-controls="BaseReading_collapse">BaseReading</a>
<div id="BaseReading_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Meas.MeasurementValue.prototype.template.call (this) +
`
{{#reportedDateTime}}<div><b>reportedDateTime</b>: {{reportedDateTime}}</div>{{/reportedDateTime}}
{{#source}}<div><b>source</b>: {{source}}</div>{{/source}}
{{#timePeriod}}<div><b>timePeriod</b>: {{timePeriod}}</div>{{/timePeriod}}
{{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#EndDeviceEvent_collapse" aria-expanded="true" aria-controls="EndDeviceEvent_collapse">EndDeviceEvent</a>
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
`
                );
           }        }

        /**
         * Reason for the reading being taken.
         *
         */
        class ReadingReasonKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ReadingReasonKind;
                if (null == bucket)
                   cim_data.ReadingReasonKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ReadingReasonKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ReadingReasonKind";
                base.parse_element (/<cim:ReadingReasonKind.installation>([\s\S]*?)<\/cim:ReadingReasonKind.installation>/g, obj, "installation", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingReasonKind.removal>([\s\S]*?)<\/cim:ReadingReasonKind.removal>/g, obj, "removal", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingReasonKind.inquiry>([\s\S]*?)<\/cim:ReadingReasonKind.inquiry>/g, obj, "inquiry", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingReasonKind.billing>([\s\S]*?)<\/cim:ReadingReasonKind.billing>/g, obj, "billing", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingReasonKind.moveIn>([\s\S]*?)<\/cim:ReadingReasonKind.moveIn>/g, obj, "moveIn", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingReasonKind.moveOut>([\s\S]*?)<\/cim:ReadingReasonKind.moveOut>/g, obj, "moveOut", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingReasonKind.demandReset>([\s\S]*?)<\/cim:ReadingReasonKind.demandReset>/g, obj, "demandReset", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingReasonKind.serviceDisconnect>([\s\S]*?)<\/cim:ReadingReasonKind.serviceDisconnect>/g, obj, "serviceDisconnect", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingReasonKind.serviceConnect>([\s\S]*?)<\/cim:ReadingReasonKind.serviceConnect>/g, obj, "serviceConnect", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingReasonKind.loadManagement>([\s\S]*?)<\/cim:ReadingReasonKind.loadManagement>/g, obj, "loadManagement", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingReasonKind.loadResearch>([\s\S]*?)<\/cim:ReadingReasonKind.loadResearch>/g, obj, "loadResearch", base.to_string, sub, context);
                base.parse_element (/<cim:ReadingReasonKind.other>([\s\S]*?)<\/cim:ReadingReasonKind.other>/g, obj, "other", base.to_string, sub, context);

                var bucket = context.parsed.ReadingReasonKind;
                if (null == bucket)
                   context.parsed.ReadingReasonKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ReadingReasonKind", "installation", base.from_string, fields);
                base.export_element (obj, "ReadingReasonKind", "removal", base.from_string, fields);
                base.export_element (obj, "ReadingReasonKind", "inquiry", base.from_string, fields);
                base.export_element (obj, "ReadingReasonKind", "billing", base.from_string, fields);
                base.export_element (obj, "ReadingReasonKind", "moveIn", base.from_string, fields);
                base.export_element (obj, "ReadingReasonKind", "moveOut", base.from_string, fields);
                base.export_element (obj, "ReadingReasonKind", "demandReset", base.from_string, fields);
                base.export_element (obj, "ReadingReasonKind", "serviceDisconnect", base.from_string, fields);
                base.export_element (obj, "ReadingReasonKind", "serviceConnect", base.from_string, fields);
                base.export_element (obj, "ReadingReasonKind", "loadManagement", base.from_string, fields);
                base.export_element (obj, "ReadingReasonKind", "loadResearch", base.from_string, fields);
                base.export_element (obj, "ReadingReasonKind", "other", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ReadingReasonKind_collapse" aria-expanded="true" aria-controls="ReadingReasonKind_collapse">ReadingReasonKind</a>
<div id="ReadingReasonKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#installation}}<div><b>installation</b>: {{installation}}</div>{{/installation}}
{{#removal}}<div><b>removal</b>: {{removal}}</div>{{/removal}}
{{#inquiry}}<div><b>inquiry</b>: {{inquiry}}</div>{{/inquiry}}
{{#billing}}<div><b>billing</b>: {{billing}}</div>{{/billing}}
{{#moveIn}}<div><b>moveIn</b>: {{moveIn}}</div>{{/moveIn}}
{{#moveOut}}<div><b>moveOut</b>: {{moveOut}}</div>{{/moveOut}}
{{#demandReset}}<div><b>demandReset</b>: {{demandReset}}</div>{{/demandReset}}
{{#serviceDisconnect}}<div><b>serviceDisconnect</b>: {{serviceDisconnect}}</div>{{/serviceDisconnect}}
{{#serviceConnect}}<div><b>serviceConnect</b>: {{serviceConnect}}</div>{{/serviceConnect}}
{{#loadManagement}}<div><b>loadManagement</b>: {{loadManagement}}</div>{{/loadManagement}}
{{#loadResearch}}<div><b>loadResearch</b>: {{loadResearch}}</div>{{/loadResearch}}
{{#other}}<div><b>other</b>: {{other}}</div>{{/other}}
</div>
`
                );
           }        }

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
                base.parse_element (/<cim:ServiceMultiplier.kind>([\s\S]*?)<\/cim:ServiceMultiplier.kind>/g, obj, "kind", base.to_string, sub, context);
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
<a data-toggle="collapse" href="#ServiceMultiplier_collapse" aria-expanded="true" aria-controls="ServiceMultiplier_collapse">ServiceMultiplier</a>
<div id="ServiceMultiplier_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
{{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
{{#UsagePoint}}<div><b>UsagePoint</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{UsagePoint}}&quot;);})'>{{UsagePoint}}</a></div>{{/UsagePoint}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#PendingCalculation_collapse" aria-expanded="true" aria-controls="PendingCalculation_collapse">PendingCalculation</a>
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
`
                );
           }        }

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
<a data-toggle="collapse" href="#ReadingInterharmonic_collapse" aria-expanded="true" aria-controls="ReadingInterharmonic_collapse">ReadingInterharmonic</a>
<div id="ReadingInterharmonic_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#denominator}}<div><b>denominator</b>: {{denominator}}</div>{{/denominator}}
{{#numerator}}<div><b>numerator</b>: {{numerator}}</div>{{/numerator}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#EndDeviceControlType_collapse" aria-expanded="true" aria-controls="EndDeviceControlType_collapse">EndDeviceControlType</a>
<div id="EndDeviceControlType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#domain}}<div><b>domain</b>: {{domain}}</div>{{/domain}}
{{#eventOrAction}}<div><b>eventOrAction</b>: {{eventOrAction}}</div>{{/eventOrAction}}
{{#subDomain}}<div><b>subDomain</b>: {{subDomain}}</div>{{/subDomain}}
{{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
</div>
`
                );
           }        }

        /**
         * Kind of randomisation to be applied to control the timing of end device control commands and/or the definition of demand response and load control events.
         *
         * Value other than 'none' is typically used to mitigate potential deleterious effects of simultaneous operation of multiple devices.
         *
         */
        class RandomisationKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RandomisationKind;
                if (null == bucket)
                   cim_data.RandomisationKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RandomisationKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "RandomisationKind";
                base.parse_element (/<cim:RandomisationKind.start>([\s\S]*?)<\/cim:RandomisationKind.start>/g, obj, "start", base.to_string, sub, context);
                base.parse_element (/<cim:RandomisationKind.end>([\s\S]*?)<\/cim:RandomisationKind.end>/g, obj, "end", base.to_string, sub, context);
                base.parse_element (/<cim:RandomisationKind.startAndEnd>([\s\S]*?)<\/cim:RandomisationKind.startAndEnd>/g, obj, "startAndEnd", base.to_string, sub, context);
                base.parse_element (/<cim:RandomisationKind.default>([\s\S]*?)<\/cim:RandomisationKind.default>/g, obj, "default", base.to_string, sub, context);
                base.parse_element (/<cim:RandomisationKind.none>([\s\S]*?)<\/cim:RandomisationKind.none>/g, obj, "none", base.to_string, sub, context);

                var bucket = context.parsed.RandomisationKind;
                if (null == bucket)
                   context.parsed.RandomisationKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "RandomisationKind", "start", base.from_string, fields);
                base.export_element (obj, "RandomisationKind", "end", base.from_string, fields);
                base.export_element (obj, "RandomisationKind", "startAndEnd", base.from_string, fields);
                base.export_element (obj, "RandomisationKind", "default", base.from_string, fields);
                base.export_element (obj, "RandomisationKind", "none", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#RandomisationKind_collapse" aria-expanded="true" aria-controls="RandomisationKind_collapse">RandomisationKind</a>
<div id="RandomisationKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#start}}<div><b>start</b>: {{start}}</div>{{/start}}
{{#end}}<div><b>end</b>: {{end}}</div>{{/end}}
{{#startAndEnd}}<div><b>startAndEnd</b>: {{startAndEnd}}</div>{{/startAndEnd}}
{{#default}}<div><b>default</b>: {{default}}</div>{{/default}}
{{#none}}<div><b>none</b>: {{none}}</div>{{/none}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#UsagePointGroup_collapse" aria-expanded="true" aria-controls="UsagePointGroup_collapse">UsagePointGroup</a>
<div id="UsagePointGroup_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#MeterServiceWork_collapse" aria-expanded="true" aria-controls="MeterServiceWork_collapse">MeterServiceWork</a>
<div id="MeterServiceWork_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Work.Work.prototype.template.call (this) +
`
{{#Meter}}<div><b>Meter</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Meter}}&quot;);})'>{{Meter}}</a></div>{{/Meter}}
{{#OldMeter}}<div><b>OldMeter</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{OldMeter}}&quot;);})'>{{OldMeter}}</a></div>{{/OldMeter}}
{{#UsagePoint}}<div><b>UsagePoint</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{UsagePoint}}&quot;);})'>{{UsagePoint}}</a></div>{{/UsagePoint}}
</div>
`
                );
           }        }

        /**
         * Transmission mode for end device display controls, applicable to premises area network (PAN) devices.
         *
         */
        class TransmissionModeKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TransmissionModeKind;
                if (null == bucket)
                   cim_data.TransmissionModeKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TransmissionModeKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TransmissionModeKind";
                base.parse_element (/<cim:TransmissionModeKind.normal>([\s\S]*?)<\/cim:TransmissionModeKind.normal>/g, obj, "normal", base.to_string, sub, context);
                base.parse_element (/<cim:TransmissionModeKind.anonymous>([\s\S]*?)<\/cim:TransmissionModeKind.anonymous>/g, obj, "anonymous", base.to_string, sub, context);
                base.parse_element (/<cim:TransmissionModeKind.both>([\s\S]*?)<\/cim:TransmissionModeKind.both>/g, obj, "both", base.to_string, sub, context);

                var bucket = context.parsed.TransmissionModeKind;
                if (null == bucket)
                   context.parsed.TransmissionModeKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TransmissionModeKind", "normal", base.from_string, fields);
                base.export_element (obj, "TransmissionModeKind", "anonymous", base.from_string, fields);
                base.export_element (obj, "TransmissionModeKind", "both", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TransmissionModeKind_collapse" aria-expanded="true" aria-controls="TransmissionModeKind_collapse">TransmissionModeKind</a>
<div id="TransmissionModeKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#normal}}<div><b>normal</b>: {{normal}}</div>{{/normal}}
{{#anonymous}}<div><b>anonymous</b>: {{anonymous}}</div>{{/anonymous}}
{{#both}}<div><b>both</b>: {{both}}</div>{{/both}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#ReadingQualityType_collapse" aria-expanded="true" aria-controls="ReadingQualityType_collapse">ReadingQualityType</a>
<div id="ReadingQualityType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#category}}<div><b>category</b>: {{category}}</div>{{/category}}
{{#subCategory}}<div><b>subCategory</b>: {{subCategory}}</div>{{/subCategory}}
{{#systemId}}<div><b>systemId</b>: {{systemId}}</div>{{/systemId}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#EndDeviceEventType_collapse" aria-expanded="true" aria-controls="EndDeviceEventType_collapse">EndDeviceEventType</a>
<div id="EndDeviceEventType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#domain}}<div><b>domain</b>: {{domain}}</div>{{/domain}}
{{#eventOrAction}}<div><b>eventOrAction</b>: {{eventOrAction}}</div>{{/eventOrAction}}
{{#subDomain}}<div><b>subDomain</b>: {{subDomain}}</div>{{/subDomain}}
{{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#EndDevice_collapse" aria-expanded="true" aria-controls="EndDevice_collapse">EndDevice</a>
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
`
                );
           }        }

        /**
         * Kind of communication technology.
         *
         */
        class ComTechnologyKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ComTechnologyKind;
                if (null == bucket)
                   cim_data.ComTechnologyKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ComTechnologyKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ComTechnologyKind";
                base.parse_element (/<cim:ComTechnologyKind.cellular>([\s\S]*?)<\/cim:ComTechnologyKind.cellular>/g, obj, "cellular", base.to_string, sub, context);
                base.parse_element (/<cim:ComTechnologyKind.ethernet>([\s\S]*?)<\/cim:ComTechnologyKind.ethernet>/g, obj, "ethernet", base.to_string, sub, context);
                base.parse_element (/<cim:ComTechnologyKind.homePlug>([\s\S]*?)<\/cim:ComTechnologyKind.homePlug>/g, obj, "homePlug", base.to_string, sub, context);
                base.parse_element (/<cim:ComTechnologyKind.pager>([\s\S]*?)<\/cim:ComTechnologyKind.pager>/g, obj, "pager", base.to_string, sub, context);
                base.parse_element (/<cim:ComTechnologyKind.phone>([\s\S]*?)<\/cim:ComTechnologyKind.phone>/g, obj, "phone", base.to_string, sub, context);
                base.parse_element (/<cim:ComTechnologyKind.plc>([\s\S]*?)<\/cim:ComTechnologyKind.plc>/g, obj, "plc", base.to_string, sub, context);
                base.parse_element (/<cim:ComTechnologyKind.rf>([\s\S]*?)<\/cim:ComTechnologyKind.rf>/g, obj, "rf", base.to_string, sub, context);
                base.parse_element (/<cim:ComTechnologyKind.rfMesh>([\s\S]*?)<\/cim:ComTechnologyKind.rfMesh>/g, obj, "rfMesh", base.to_string, sub, context);
                base.parse_element (/<cim:ComTechnologyKind.zigbee>([\s\S]*?)<\/cim:ComTechnologyKind.zigbee>/g, obj, "zigbee", base.to_string, sub, context);

                var bucket = context.parsed.ComTechnologyKind;
                if (null == bucket)
                   context.parsed.ComTechnologyKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ComTechnologyKind", "cellular", base.from_string, fields);
                base.export_element (obj, "ComTechnologyKind", "ethernet", base.from_string, fields);
                base.export_element (obj, "ComTechnologyKind", "homePlug", base.from_string, fields);
                base.export_element (obj, "ComTechnologyKind", "pager", base.from_string, fields);
                base.export_element (obj, "ComTechnologyKind", "phone", base.from_string, fields);
                base.export_element (obj, "ComTechnologyKind", "plc", base.from_string, fields);
                base.export_element (obj, "ComTechnologyKind", "rf", base.from_string, fields);
                base.export_element (obj, "ComTechnologyKind", "rfMesh", base.from_string, fields);
                base.export_element (obj, "ComTechnologyKind", "zigbee", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ComTechnologyKind_collapse" aria-expanded="true" aria-controls="ComTechnologyKind_collapse">ComTechnologyKind</a>
<div id="ComTechnologyKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#cellular}}<div><b>cellular</b>: {{cellular}}</div>{{/cellular}}
{{#ethernet}}<div><b>ethernet</b>: {{ethernet}}</div>{{/ethernet}}
{{#homePlug}}<div><b>homePlug</b>: {{homePlug}}</div>{{/homePlug}}
{{#pager}}<div><b>pager</b>: {{pager}}</div>{{/pager}}
{{#phone}}<div><b>phone</b>: {{phone}}</div>{{/phone}}
{{#plc}}<div><b>plc</b>: {{plc}}</div>{{/plc}}
{{#rf}}<div><b>rf</b>: {{rf}}</div>{{/rf}}
{{#rfMesh}}<div><b>rfMesh</b>: {{rfMesh}}</div>{{/rfMesh}}
{{#zigbee}}<div><b>zigbee</b>: {{zigbee}}</div>{{/zigbee}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#EndDeviceCapability_collapse" aria-expanded="true" aria-controls="EndDeviceCapability_collapse">EndDeviceCapability</a>
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
`
                );
           }        }

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
<a data-toggle="collapse" href="#EndDeviceInfo_collapse" aria-expanded="true" aria-controls="EndDeviceInfo_collapse">EndDeviceInfo</a>
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
`
                );
           }        }

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
                base.parse_element (/<cim:SimpleEndDeviceFunction.kind>([\s\S]*?)<\/cim:SimpleEndDeviceFunction.kind>/g, obj, "kind", base.to_string, sub, context);

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
<a data-toggle="collapse" href="#SimpleEndDeviceFunction_collapse" aria-expanded="true" aria-controls="SimpleEndDeviceFunction_collapse">SimpleEndDeviceFunction</a>
<div id="SimpleEndDeviceFunction_collapse" class="collapse in" style="margin-left: 10px;">
`
      + EndDeviceFunction.prototype.template.call (this) +
`
{{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
</div>
`
                );
           }        }

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
                base.parse_element (/<cim:ComFunction.direction>([\s\S]*?)<\/cim:ComFunction.direction>/g, obj, "direction", base.to_string, sub, context);
                base.parse_element (/<cim:ComFunction.technology>([\s\S]*?)<\/cim:ComFunction.technology>/g, obj, "technology", base.to_string, sub, context);
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
<a data-toggle="collapse" href="#ComFunction_collapse" aria-expanded="true" aria-controls="ComFunction_collapse">ComFunction</a>
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
`
                );
           }        }

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
                base.parse_element (/<cim:PanDisplay.transmissionMode>([\s\S]*?)<\/cim:PanDisplay.transmissionMode>/g, obj, "transmissionMode", base.to_string, sub, context);

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
<a data-toggle="collapse" href="#PanDisplay_collapse" aria-expanded="true" aria-controls="PanDisplay_collapse">PanDisplay</a>
<div id="PanDisplay_collapse" class="collapse in" style="margin-left: 10px;">
`
      + EndDeviceAction.prototype.template.call (this) +
`
{{#confirmationRequired}}<div><b>confirmationRequired</b>: {{confirmationRequired}}</div>{{/confirmationRequired}}
{{#priority}}<div><b>priority</b>: {{priority}}</div>{{/priority}}
{{#textMessage}}<div><b>textMessage</b>: {{textMessage}}</div>{{/textMessage}}
{{#transmissionMode}}<div><b>transmissionMode</b>: {{transmissionMode}}</div>{{/transmissionMode}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#PanDemandResponse_collapse" aria-expanded="true" aria-controls="PanDemandResponse_collapse">PanDemandResponse</a>
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
`
                );
           }        }

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
<a data-toggle="collapse" href="#PanPricing_collapse" aria-expanded="true" aria-controls="PanPricing_collapse">PanPricing</a>
<div id="PanPricing_collapse" class="collapse in" style="margin-left: 10px;">
`
      + EndDeviceAction.prototype.template.call (this) +
`
{{#providerID}}<div><b>providerID</b>: {{providerID}}</div>{{/providerID}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#IntervalReading_collapse" aria-expanded="true" aria-controls="IntervalReading_collapse">IntervalReading</a>
<div id="IntervalReading_collapse" class="collapse in" style="margin-left: 10px;">
`
      + BaseReading.prototype.template.call (this) +
`
</div>
`
                );
           }        }

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
                base.parse_element (/<cim:Reading.reason>([\s\S]*?)<\/cim:Reading.reason>/g, obj, "reason", base.to_string, sub, context);
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
<a data-toggle="collapse" href="#Reading_collapse" aria-expanded="true" aria-controls="Reading_collapse">Reading</a>
<div id="Reading_collapse" class="collapse in" style="margin-left: 10px;">
`
      + BaseReading.prototype.template.call (this) +
`
{{#reason}}<div><b>reason</b>: {{reason}}</div>{{/reason}}
{{#ReadingType}}<div><b>ReadingType</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ReadingType}}&quot;);})'>{{ReadingType}}</a></div>{{/ReadingType}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#Meter_collapse" aria-expanded="true" aria-controls="Meter_collapse">Meter</a>
<div id="Meter_collapse" class="collapse in" style="margin-left: 10px;">
`
      + EndDevice.prototype.template.call (this) +
`
{{#formNumber}}<div><b>formNumber</b>: {{formNumber}}</div>{{/formNumber}}
</div>
`
                );
           }        }

        return (
            {
                PanPricingDetail: PanPricingDetail,
                EndDeviceEvent: EndDeviceEvent,
                EndDevice: EndDevice,
                PanDisplay: PanDisplay,
                ReadingInterharmonic: ReadingInterharmonic,
                ComFunction: ComFunction,
                ServiceMultiplierKind: ServiceMultiplierKind,
                EndDeviceTiming: EndDeviceTiming,
                SimpleEndDeviceFunction: SimpleEndDeviceFunction,
                EndDeviceControlType: EndDeviceControlType,
                UsagePointConnectedKind: UsagePointConnectedKind,
                MetrologyRequirement: MetrologyRequirement,
                ReadingReasonKind: ReadingReasonKind,
                ComTechnologyKind: ComTechnologyKind,
                ReadingQuality: ReadingQuality,
                UsagePoint: UsagePoint,
                AmiBillingReadyKind: AmiBillingReadyKind,
                MeterMultiplier: MeterMultiplier,
                TransmissionModeKind: TransmissionModeKind,
                ComDirectionKind: ComDirectionKind,
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
                RandomisationKind: RandomisationKind,
                EndDeviceEventType: EndDeviceEventType,
                PanPricing: PanPricing,
                MeterReading: MeterReading,
                EndDeviceFunctionKind: EndDeviceFunctionKind,
                MeterMultiplierKind: MeterMultiplierKind,
                Reading: Reading,
                MeterServiceWork: MeterServiceWork
            }
        );
    }
);