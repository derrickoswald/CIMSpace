define
(
    ["model/base", "model/Common", "model/ControlArea", "model/Core", "model/MarketPlan", "model/Meas", "model/ParticipantInterfaces", "model/Wires"],
    /**
     * Inputs to the market system from external sources.
     *
     */
    function (base, Common, ControlArea, Core, MarketPlan, Meas, ParticipantInterfaces, Wires)
    {

        /**
         * This class models the transmission (either a transmission interface or a POR/POD pair) capacity including Total Transfer Capacity (TTC), Operating Transfer Capacity (OTC), and Capacity Benefit Margin (CBM)
         *
         */
        class TransmissionCapacity extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TransmissionCapacity;
                if (null == bucket)
                   cim_data.TransmissionCapacity = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TransmissionCapacity[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TransmissionCapacity";
                base.parse_element (/<cim:TransmissionCapacity.capacityBenefitMargin>([\s\S]*?)<\/cim:TransmissionCapacity.capacityBenefitMargin>/g, obj, "capacityBenefitMargin", base.to_float, sub, context);
                base.parse_element (/<cim:TransmissionCapacity.operationalTransmissionCapacity>([\s\S]*?)<\/cim:TransmissionCapacity.operationalTransmissionCapacity>/g, obj, "operationalTransmissionCapacity", base.to_float, sub, context);
                base.parse_element (/<cim:TransmissionCapacity.OTC15min_emergency>([\s\S]*?)<\/cim:TransmissionCapacity.OTC15min_emergency>/g, obj, "OTC15min_emergency", base.to_float, sub, context);
                base.parse_element (/<cim:TransmissionCapacity.OTCemergency>([\s\S]*?)<\/cim:TransmissionCapacity.OTCemergency>/g, obj, "OTCemergency", base.to_float, sub, context);
                base.parse_element (/<cim:TransmissionCapacity.POD>([\s\S]*?)<\/cim:TransmissionCapacity.POD>/g, obj, "POD", base.to_string, sub, context);
                base.parse_element (/<cim:TransmissionCapacity.POR>([\s\S]*?)<\/cim:TransmissionCapacity.POR>/g, obj, "POR", base.to_string, sub, context);
                base.parse_element (/<cim:TransmissionCapacity.startOperatingDate>([\s\S]*?)<\/cim:TransmissionCapacity.startOperatingDate>/g, obj, "startOperatingDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:TransmissionCapacity.totalTransmissionCapacity>([\s\S]*?)<\/cim:TransmissionCapacity.totalTransmissionCapacity>/g, obj, "totalTransmissionCapacity", base.to_float, sub, context);
                base.parse_attribute (/<cim:TransmissionCapacity.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
                base.parse_attribute (/<cim:TransmissionCapacity.GenericConstraints\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GenericConstraints", sub, context);

                var bucket = context.parsed.TransmissionCapacity;
                if (null == bucket)
                   context.parsed.TransmissionCapacity = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TransmissionCapacity", "capacityBenefitMargin", base.from_float, fields);
                base.export_element (obj, "TransmissionCapacity", "operationalTransmissionCapacity", base.from_float, fields);
                base.export_element (obj, "TransmissionCapacity", "OTC15min_emergency", base.from_float, fields);
                base.export_element (obj, "TransmissionCapacity", "OTCemergency", base.from_float, fields);
                base.export_element (obj, "TransmissionCapacity", "POD", base.from_string, fields);
                base.export_element (obj, "TransmissionCapacity", "POR", base.from_string, fields);
                base.export_element (obj, "TransmissionCapacity", "startOperatingDate", base.from_datetime, fields);
                base.export_element (obj, "TransmissionCapacity", "totalTransmissionCapacity", base.from_float, fields);
                base.export_attribute (obj, "TransmissionCapacity", "Flowgate", fields);
                base.export_attribute (obj, "TransmissionCapacity", "GenericConstraints", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TransmissionCapacity_collapse" aria-expanded="true" aria-controls="TransmissionCapacity_collapse" style="margin-left: 10px;">TransmissionCapacity</a></legend>
                    <div id="TransmissionCapacity_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#capacityBenefitMargin}}<div><b>capacityBenefitMargin</b>: {{capacityBenefitMargin}}</div>{{/capacityBenefitMargin}}
                    {{#operationalTransmissionCapacity}}<div><b>operationalTransmissionCapacity</b>: {{operationalTransmissionCapacity}}</div>{{/operationalTransmissionCapacity}}
                    {{#OTC15min_emergency}}<div><b>OTC15min_emergency</b>: {{OTC15min_emergency}}</div>{{/OTC15min_emergency}}
                    {{#OTCemergency}}<div><b>OTCemergency</b>: {{OTCemergency}}</div>{{/OTCemergency}}
                    {{#POD}}<div><b>POD</b>: {{POD}}</div>{{/POD}}
                    {{#POR}}<div><b>POR</b>: {{POR}}</div>{{/POR}}
                    {{#startOperatingDate}}<div><b>startOperatingDate</b>: {{startOperatingDate}}</div>{{/startOperatingDate}}
                    {{#totalTransmissionCapacity}}<div><b>totalTransmissionCapacity</b>: {{totalTransmissionCapacity}}</div>{{/totalTransmissionCapacity}}
                    {{#Flowgate}}<div><b>Flowgate</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Flowgate}}&quot;);})'>{{Flowgate}}</a></div>{{/Flowgate}}
                    {{#GenericConstraints}}<div><b>GenericConstraints</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GenericConstraints}}&quot;);})'>{{GenericConstraints}}</a></div>{{/GenericConstraints}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TransmissionCapacity_collapse" aria-expanded="true" aria-controls="TransmissionCapacity_collapse" style="margin-left: 10px;">TransmissionCapacity</a></legend>
                    <div id="TransmissionCapacity_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='capacityBenefitMargin'>capacityBenefitMargin: </label><div class='col-sm-8'><input id='capacityBenefitMargin' class='form-control' type='text'{{#capacityBenefitMargin}} value='{{capacityBenefitMargin}}'{{/capacityBenefitMargin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='operationalTransmissionCapacity'>operationalTransmissionCapacity: </label><div class='col-sm-8'><input id='operationalTransmissionCapacity' class='form-control' type='text'{{#operationalTransmissionCapacity}} value='{{operationalTransmissionCapacity}}'{{/operationalTransmissionCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='OTC15min_emergency'>OTC15min_emergency: </label><div class='col-sm-8'><input id='OTC15min_emergency' class='form-control' type='text'{{#OTC15min_emergency}} value='{{OTC15min_emergency}}'{{/OTC15min_emergency}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='OTCemergency'>OTCemergency: </label><div class='col-sm-8'><input id='OTCemergency' class='form-control' type='text'{{#OTCemergency}} value='{{OTCemergency}}'{{/OTCemergency}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='POD'>POD: </label><div class='col-sm-8'><input id='POD' class='form-control' type='text'{{#POD}} value='{{POD}}'{{/POD}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='POR'>POR: </label><div class='col-sm-8'><input id='POR' class='form-control' type='text'{{#POR}} value='{{POR}}'{{/POR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startOperatingDate'>startOperatingDate: </label><div class='col-sm-8'><input id='startOperatingDate' class='form-control' type='text'{{#startOperatingDate}} value='{{startOperatingDate}}'{{/startOperatingDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='totalTransmissionCapacity'>totalTransmissionCapacity: </label><div class='col-sm-8'><input id='totalTransmissionCapacity' class='form-control' type='text'{{#totalTransmissionCapacity}} value='{{totalTransmissionCapacity}}'{{/totalTransmissionCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Flowgate'>Flowgate: </label><div class='col-sm-8'><input id='Flowgate' class='form-control' type='text'{{#Flowgate}} value='{{Flowgate}}'{{/Flowgate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='GenericConstraints'>GenericConstraints: </label><div class='col-sm-8'><input id='GenericConstraints' class='form-control' type='text'{{#GenericConstraints}} value='{{GenericConstraints}}'{{/GenericConstraints}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Optimal Power Flow or State Estimator Filter Bank Data for OTS.
         *
         * This is used for RealTime, Study and Maintenance Users
         *
         */
        class ShuntCompensatorDynamicData extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ShuntCompensatorDynamicData;
                if (null == bucket)
                   cim_data.ShuntCompensatorDynamicData = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ShuntCompensatorDynamicData[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ShuntCompensatorDynamicData";
                base.parse_element (/<cim:ShuntCompensatorDynamicData.mVARInjection>([\s\S]*?)<\/cim:ShuntCompensatorDynamicData.mVARInjection>/g, obj, "mVARInjection", base.to_float, sub, context);
                base.parse_element (/<cim:ShuntCompensatorDynamicData.connectionStatus>([\s\S]*?)<\/cim:ShuntCompensatorDynamicData.connectionStatus>/g, obj, "connectionStatus", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorDynamicData.desiredVoltage>([\s\S]*?)<\/cim:ShuntCompensatorDynamicData.desiredVoltage>/g, obj, "desiredVoltage", base.to_float, sub, context);
                base.parse_element (/<cim:ShuntCompensatorDynamicData.voltageRegulationStatus>([\s\S]*?)<\/cim:ShuntCompensatorDynamicData.voltageRegulationStatus>/g, obj, "voltageRegulationStatus", base.to_boolean, sub, context);
                base.parse_element (/<cim:ShuntCompensatorDynamicData.stepPosition>([\s\S]*?)<\/cim:ShuntCompensatorDynamicData.stepPosition>/g, obj, "stepPosition", base.to_string, sub, context);
                base.parse_attribute (/<cim:ShuntCompensatorDynamicData.MktShuntCompensator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktShuntCompensator", sub, context);

                var bucket = context.parsed.ShuntCompensatorDynamicData;
                if (null == bucket)
                   context.parsed.ShuntCompensatorDynamicData = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ShuntCompensatorDynamicData", "mVARInjection", base.from_float, fields);
                base.export_element (obj, "ShuntCompensatorDynamicData", "connectionStatus", base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorDynamicData", "desiredVoltage", base.from_float, fields);
                base.export_element (obj, "ShuntCompensatorDynamicData", "voltageRegulationStatus", base.from_boolean, fields);
                base.export_element (obj, "ShuntCompensatorDynamicData", "stepPosition", base.from_string, fields);
                base.export_attribute (obj, "ShuntCompensatorDynamicData", "MktShuntCompensator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ShuntCompensatorDynamicData_collapse" aria-expanded="true" aria-controls="ShuntCompensatorDynamicData_collapse" style="margin-left: 10px;">ShuntCompensatorDynamicData</a></legend>
                    <div id="ShuntCompensatorDynamicData_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#mVARInjection}}<div><b>mVARInjection</b>: {{mVARInjection}}</div>{{/mVARInjection}}
                    {{#connectionStatus}}<div><b>connectionStatus</b>: {{connectionStatus}}</div>{{/connectionStatus}}
                    {{#desiredVoltage}}<div><b>desiredVoltage</b>: {{desiredVoltage}}</div>{{/desiredVoltage}}
                    {{#voltageRegulationStatus}}<div><b>voltageRegulationStatus</b>: {{voltageRegulationStatus}}</div>{{/voltageRegulationStatus}}
                    {{#stepPosition}}<div><b>stepPosition</b>: {{stepPosition}}</div>{{/stepPosition}}
                    {{#MktShuntCompensator}}<div><b>MktShuntCompensator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktShuntCompensator}}&quot;);})'>{{MktShuntCompensator}}</a></div>{{/MktShuntCompensator}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ShuntCompensatorDynamicData_collapse" aria-expanded="true" aria-controls="ShuntCompensatorDynamicData_collapse" style="margin-left: 10px;">ShuntCompensatorDynamicData</a></legend>
                    <div id="ShuntCompensatorDynamicData_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='mVARInjection'>mVARInjection: </label><div class='col-sm-8'><input id='mVARInjection' class='form-control' type='text'{{#mVARInjection}} value='{{mVARInjection}}'{{/mVARInjection}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='connectionStatus'>connectionStatus: </label><div class='col-sm-8'><input id='connectionStatus' class='form-control' type='text'{{#connectionStatus}} value='{{connectionStatus}}'{{/connectionStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='desiredVoltage'>desiredVoltage: </label><div class='col-sm-8'><input id='desiredVoltage' class='form-control' type='text'{{#desiredVoltage}} value='{{desiredVoltage}}'{{/desiredVoltage}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='voltageRegulationStatus'>voltageRegulationStatus: </label><div class='col-sm-8'><input id='voltageRegulationStatus' class='form-check-input' type='checkbox'{{#voltageRegulationStatus}} checked{{/voltageRegulationStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='stepPosition'>stepPosition: </label><div class='col-sm-8'><input id='stepPosition' class='form-control' type='text'{{#stepPosition}} value='{{stepPosition}}'{{/stepPosition}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktShuntCompensator'>MktShuntCompensator: </label><div class='col-sm-8'><input id='MktShuntCompensator' class='form-control' type='text'{{#MktShuntCompensator}} value='{{MktShuntCompensator}}'{{/MktShuntCompensator}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * A Transmission Right(TR) can be a chain of TR's or on individual.
         *
         * When a transmission right is not a chain, this is formally the ETC/TOR Entitlement for each ETC/TOR contract with the inclusion of CVR(Converted Rights) as an ETC. This is the sum of all entitlements on all related transmission interfaces for the same TR.
         *
         */
        class TREntitlement extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TREntitlement;
                if (null == bucket)
                   cim_data.TREntitlement = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TREntitlement[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TREntitlement";
                base.parse_element (/<cim:TREntitlement.entitlement>([\s\S]*?)<\/cim:TREntitlement.entitlement>/g, obj, "entitlement", base.to_float, sub, context);
                base.parse_element (/<cim:TREntitlement.startOperatingDate>([\s\S]*?)<\/cim:TREntitlement.startOperatingDate>/g, obj, "startOperatingDate", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:TREntitlement.TransmissionContractRight\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionContractRight", sub, context);

                var bucket = context.parsed.TREntitlement;
                if (null == bucket)
                   context.parsed.TREntitlement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TREntitlement", "entitlement", base.from_float, fields);
                base.export_element (obj, "TREntitlement", "startOperatingDate", base.from_datetime, fields);
                base.export_attribute (obj, "TREntitlement", "TransmissionContractRight", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TREntitlement_collapse" aria-expanded="true" aria-controls="TREntitlement_collapse" style="margin-left: 10px;">TREntitlement</a></legend>
                    <div id="TREntitlement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#entitlement}}<div><b>entitlement</b>: {{entitlement}}</div>{{/entitlement}}
                    {{#startOperatingDate}}<div><b>startOperatingDate</b>: {{startOperatingDate}}</div>{{/startOperatingDate}}
                    {{#TransmissionContractRight}}<div><b>TransmissionContractRight</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TransmissionContractRight}}&quot;);})'>{{TransmissionContractRight}}</a></div>{{/TransmissionContractRight}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TREntitlement_collapse" aria-expanded="true" aria-controls="TREntitlement_collapse" style="margin-left: 10px;">TREntitlement</a></legend>
                    <div id="TREntitlement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='entitlement'>entitlement: </label><div class='col-sm-8'><input id='entitlement' class='form-control' type='text'{{#entitlement}} value='{{entitlement}}'{{/entitlement}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startOperatingDate'>startOperatingDate: </label><div class='col-sm-8'><input id='startOperatingDate' class='form-control' type='text'{{#startOperatingDate}} value='{{startOperatingDate}}'{{/startOperatingDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TransmissionContractRight'>TransmissionContractRight: </label><div class='col-sm-8'><input id='TransmissionContractRight' class='form-control' type='text'{{#TransmissionContractRight}} value='{{TransmissionContractRight}}'{{/TransmissionContractRight}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Possibly time-varying max MW or MVA and optionally Min MW limit or MVA limit (Y1 and Y2, respectively) assigned to a constraint for a specific contingency.
         *
         * Use CurveSchedule XAxisUnits to specify MW or MVA.
         *
         */
        class ContingencyConstraintLimit extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ContingencyConstraintLimit;
                if (null == bucket)
                   cim_data.ContingencyConstraintLimit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ContingencyConstraintLimit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "ContingencyConstraintLimit";
                base.parse_attribute (/<cim:ContingencyConstraintLimit.SecurityConstraintSum\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SecurityConstraintSum", sub, context);
                base.parse_attribute (/<cim:ContingencyConstraintLimit.MktContingency\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktContingency", sub, context);
                base.parse_attribute (/<cim:ContingencyConstraintLimit.MWLimitSchedules\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MWLimitSchedules", sub, context);

                var bucket = context.parsed.ContingencyConstraintLimit;
                if (null == bucket)
                   context.parsed.ContingencyConstraintLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ContingencyConstraintLimit", "SecurityConstraintSum", fields);
                base.export_attribute (obj, "ContingencyConstraintLimit", "MktContingency", fields);
                base.export_attribute (obj, "ContingencyConstraintLimit", "MWLimitSchedules", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ContingencyConstraintLimit_collapse" aria-expanded="true" aria-controls="ContingencyConstraintLimit_collapse" style="margin-left: 10px;">ContingencyConstraintLimit</a></legend>
                    <div id="ContingencyConstraintLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#SecurityConstraintSum}}<div><b>SecurityConstraintSum</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SecurityConstraintSum}}&quot;);})'>{{SecurityConstraintSum}}</a></div>{{/SecurityConstraintSum}}
                    {{#MktContingency}}<div><b>MktContingency</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktContingency}}&quot;);})'>{{MktContingency}}</a></div>{{/MktContingency}}
                    {{#MWLimitSchedules}}<div><b>MWLimitSchedules</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MWLimitSchedules}}&quot;);})'>{{MWLimitSchedules}}</a></div>{{/MWLimitSchedules}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ContingencyConstraintLimit_collapse" aria-expanded="true" aria-controls="ContingencyConstraintLimit_collapse" style="margin-left: 10px;">ContingencyConstraintLimit</a></legend>
                    <div id="ContingencyConstraintLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SecurityConstraintSum'>SecurityConstraintSum: </label><div class='col-sm-8'><input id='SecurityConstraintSum' class='form-control' type='text'{{#SecurityConstraintSum}} value='{{SecurityConstraintSum}}'{{/SecurityConstraintSum}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktContingency'>MktContingency: </label><div class='col-sm-8'><input id='MktContingency' class='form-control' type='text'{{#MktContingency}} value='{{MktContingency}}'{{/MktContingency}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MWLimitSchedules'>MWLimitSchedules: </label><div class='col-sm-8'><input id='MWLimitSchedules' class='form-control' type='text'{{#MWLimitSchedules}} value='{{MWLimitSchedules}}'{{/MWLimitSchedules}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Subclass of IEC61970:Meas:AnalogValue
         *
         */
        class MktAnalogValue extends Meas.AnalogValue
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktAnalogValue;
                if (null == bucket)
                   cim_data.MktAnalogValue = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktAnalogValue[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Meas.AnalogValue.prototype.parse.call (this, context, sub);
                obj.cls = "MktAnalogValue";

                var bucket = context.parsed.MktAnalogValue;
                if (null == bucket)
                   context.parsed.MktAnalogValue = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Meas.AnalogValue.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MktAnalogValue_collapse" aria-expanded="true" aria-controls="MktAnalogValue_collapse" style="margin-left: 10px;">MktAnalogValue</a></legend>
                    <div id="MktAnalogValue_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Meas.AnalogValue.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MktAnalogValue_collapse" aria-expanded="true" aria-controls="MktAnalogValue_collapse" style="margin-left: 10px;">MktAnalogValue</a></legend>
                    <div id="MktAnalogValue_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Meas.AnalogValue.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Optimal Power Flow or State Estimator Unit Data for Operator Training Simulator.
         *
         * This is used for RealTime, Study and Maintenance Users
         *
         */
        class GeneratingUnitDynamicValues extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GeneratingUnitDynamicValues;
                if (null == bucket)
                   cim_data.GeneratingUnitDynamicValues = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GeneratingUnitDynamicValues[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "GeneratingUnitDynamicValues";
                base.parse_element (/<cim:GeneratingUnitDynamicValues.lossFactor>([\s\S]*?)<\/cim:GeneratingUnitDynamicValues.lossFactor>/g, obj, "lossFactor", base.to_float, sub, context);
                base.parse_element (/<cim:GeneratingUnitDynamicValues.maximumMW>([\s\S]*?)<\/cim:GeneratingUnitDynamicValues.maximumMW>/g, obj, "maximumMW", base.to_float, sub, context);
                base.parse_element (/<cim:GeneratingUnitDynamicValues.minimumMW>([\s\S]*?)<\/cim:GeneratingUnitDynamicValues.minimumMW>/g, obj, "minimumMW", base.to_float, sub, context);
                base.parse_element (/<cim:GeneratingUnitDynamicValues.mVAR>([\s\S]*?)<\/cim:GeneratingUnitDynamicValues.mVAR>/g, obj, "mVAR", base.to_float, sub, context);
                base.parse_element (/<cim:GeneratingUnitDynamicValues.mw>([\s\S]*?)<\/cim:GeneratingUnitDynamicValues.mw>/g, obj, "mw", base.to_float, sub, context);
                base.parse_element (/<cim:GeneratingUnitDynamicValues.sensitivity>([\s\S]*?)<\/cim:GeneratingUnitDynamicValues.sensitivity>/g, obj, "sensitivity", base.to_float, sub, context);
                base.parse_attribute (/<cim:GeneratingUnitDynamicValues.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
                base.parse_attribute (/<cim:GeneratingUnitDynamicValues.MktGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktGeneratingUnit", sub, context);

                var bucket = context.parsed.GeneratingUnitDynamicValues;
                if (null == bucket)
                   context.parsed.GeneratingUnitDynamicValues = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "GeneratingUnitDynamicValues", "lossFactor", base.from_float, fields);
                base.export_element (obj, "GeneratingUnitDynamicValues", "maximumMW", base.from_float, fields);
                base.export_element (obj, "GeneratingUnitDynamicValues", "minimumMW", base.from_float, fields);
                base.export_element (obj, "GeneratingUnitDynamicValues", "mVAR", base.from_float, fields);
                base.export_element (obj, "GeneratingUnitDynamicValues", "mw", base.from_float, fields);
                base.export_element (obj, "GeneratingUnitDynamicValues", "sensitivity", base.from_float, fields);
                base.export_attribute (obj, "GeneratingUnitDynamicValues", "Flowgate", fields);
                base.export_attribute (obj, "GeneratingUnitDynamicValues", "MktGeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GeneratingUnitDynamicValues_collapse" aria-expanded="true" aria-controls="GeneratingUnitDynamicValues_collapse" style="margin-left: 10px;">GeneratingUnitDynamicValues</a></legend>
                    <div id="GeneratingUnitDynamicValues_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#lossFactor}}<div><b>lossFactor</b>: {{lossFactor}}</div>{{/lossFactor}}
                    {{#maximumMW}}<div><b>maximumMW</b>: {{maximumMW}}</div>{{/maximumMW}}
                    {{#minimumMW}}<div><b>minimumMW</b>: {{minimumMW}}</div>{{/minimumMW}}
                    {{#mVAR}}<div><b>mVAR</b>: {{mVAR}}</div>{{/mVAR}}
                    {{#mw}}<div><b>mw</b>: {{mw}}</div>{{/mw}}
                    {{#sensitivity}}<div><b>sensitivity</b>: {{sensitivity}}</div>{{/sensitivity}}
                    {{#Flowgate}}<div><b>Flowgate</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Flowgate}}&quot;);})'>{{Flowgate}}</a></div>{{/Flowgate}}
                    {{#MktGeneratingUnit}}<div><b>MktGeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktGeneratingUnit}}&quot;);})'>{{MktGeneratingUnit}}</a></div>{{/MktGeneratingUnit}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GeneratingUnitDynamicValues_collapse" aria-expanded="true" aria-controls="GeneratingUnitDynamicValues_collapse" style="margin-left: 10px;">GeneratingUnitDynamicValues</a></legend>
                    <div id="GeneratingUnitDynamicValues_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lossFactor'>lossFactor: </label><div class='col-sm-8'><input id='lossFactor' class='form-control' type='text'{{#lossFactor}} value='{{lossFactor}}'{{/lossFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maximumMW'>maximumMW: </label><div class='col-sm-8'><input id='maximumMW' class='form-control' type='text'{{#maximumMW}} value='{{maximumMW}}'{{/maximumMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minimumMW'>minimumMW: </label><div class='col-sm-8'><input id='minimumMW' class='form-control' type='text'{{#minimumMW}} value='{{minimumMW}}'{{/minimumMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='mVAR'>mVAR: </label><div class='col-sm-8'><input id='mVAR' class='form-control' type='text'{{#mVAR}} value='{{mVAR}}'{{/mVAR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='mw'>mw: </label><div class='col-sm-8'><input id='mw' class='form-control' type='text'{{#mw}} value='{{mw}}'{{/mw}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='sensitivity'>sensitivity: </label><div class='col-sm-8'><input id='sensitivity' class='form-control' type='text'{{#sensitivity}} value='{{sensitivity}}'{{/sensitivity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Flowgate'>Flowgate: </label><div class='col-sm-8'><input id='Flowgate' class='form-control' type='text'{{#Flowgate}} value='{{Flowgate}}'{{/Flowgate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktGeneratingUnit'>MktGeneratingUnit: </label><div class='col-sm-8'><input id='MktGeneratingUnit' class='form-control' type='text'{{#MktGeneratingUnit}} value='{{MktGeneratingUnit}}'{{/MktGeneratingUnit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * An electrical connection, link, or line consisting of one or more parallel transmission elements between two areas of the interconnected electric systems, or portions thereof.
         *
         * TransmissionCorridor and TransmissionRightOfWay refer to legal aspects. The TransmissionPath refers to the segments between a TransmissionProvider's ServicePoints.
         *
         */
        class TransmissionPath extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TransmissionPath;
                if (null == bucket)
                   cim_data.TransmissionPath = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TransmissionPath[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TransmissionPath";
                base.parse_element (/<cim:TransmissionPath.availTransferCapability>([\s\S]*?)<\/cim:TransmissionPath.availTransferCapability>/g, obj, "availTransferCapability", base.to_string, sub, context);
                base.parse_element (/<cim:TransmissionPath.parallelPathFlag>([\s\S]*?)<\/cim:TransmissionPath.parallelPathFlag>/g, obj, "parallelPathFlag", base.to_boolean, sub, context);
                base.parse_element (/<cim:TransmissionPath.totalTransferCapability>([\s\S]*?)<\/cim:TransmissionPath.totalTransferCapability>/g, obj, "totalTransferCapability", base.to_string, sub, context);
                base.parse_attribute (/<cim:TransmissionPath.DeliveryPoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DeliveryPoint", sub, context);
                base.parse_attribute (/<cim:TransmissionPath.For\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "For", sub, context);
                base.parse_attribute (/<cim:TransmissionPath.PointOfReceipt\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PointOfReceipt", sub, context);

                var bucket = context.parsed.TransmissionPath;
                if (null == bucket)
                   context.parsed.TransmissionPath = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "TransmissionPath", "availTransferCapability", base.from_string, fields);
                base.export_element (obj, "TransmissionPath", "parallelPathFlag", base.from_boolean, fields);
                base.export_element (obj, "TransmissionPath", "totalTransferCapability", base.from_string, fields);
                base.export_attribute (obj, "TransmissionPath", "DeliveryPoint", fields);
                base.export_attribute (obj, "TransmissionPath", "For", fields);
                base.export_attribute (obj, "TransmissionPath", "PointOfReceipt", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TransmissionPath_collapse" aria-expanded="true" aria-controls="TransmissionPath_collapse" style="margin-left: 10px;">TransmissionPath</a></legend>
                    <div id="TransmissionPath_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#availTransferCapability}}<div><b>availTransferCapability</b>: {{availTransferCapability}}</div>{{/availTransferCapability}}
                    {{#parallelPathFlag}}<div><b>parallelPathFlag</b>: {{parallelPathFlag}}</div>{{/parallelPathFlag}}
                    {{#totalTransferCapability}}<div><b>totalTransferCapability</b>: {{totalTransferCapability}}</div>{{/totalTransferCapability}}
                    {{#DeliveryPoint}}<div><b>DeliveryPoint</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DeliveryPoint}}&quot;);})'>{{DeliveryPoint}}</a></div>{{/DeliveryPoint}}
                    {{#For}}<div><b>For</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{For}}&quot;);})'>{{For}}</a></div>{{/For}}
                    {{#PointOfReceipt}}<div><b>PointOfReceipt</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PointOfReceipt}}&quot;);})'>{{PointOfReceipt}}</a></div>{{/PointOfReceipt}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TransmissionPath_collapse" aria-expanded="true" aria-controls="TransmissionPath_collapse" style="margin-left: 10px;">TransmissionPath</a></legend>
                    <div id="TransmissionPath_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='availTransferCapability'>availTransferCapability: </label><div class='col-sm-8'><input id='availTransferCapability' class='form-control' type='text'{{#availTransferCapability}} value='{{availTransferCapability}}'{{/availTransferCapability}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='parallelPathFlag'>parallelPathFlag: </label><div class='col-sm-8'><input id='parallelPathFlag' class='form-check-input' type='checkbox'{{#parallelPathFlag}} checked{{/parallelPathFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='totalTransferCapability'>totalTransferCapability: </label><div class='col-sm-8'><input id='totalTransferCapability' class='form-control' type='text'{{#totalTransferCapability}} value='{{totalTransferCapability}}'{{/totalTransferCapability}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='DeliveryPoint'>DeliveryPoint: </label><div class='col-sm-8'><input id='DeliveryPoint' class='form-control' type='text'{{#DeliveryPoint}} value='{{DeliveryPoint}}'{{/DeliveryPoint}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='For'>For: </label><div class='col-sm-8'><input id='For' class='form-control' type='text'{{#For}} value='{{For}}'{{/For}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='PointOfReceipt'>PointOfReceipt: </label><div class='col-sm-8'><input id='PointOfReceipt' class='form-control' type='text'{{#PointOfReceipt}} value='{{PointOfReceipt}}'{{/PointOfReceipt}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * A constraint term is one element of a linear constraint.
         *
         */
        class ConstraintTerm extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ConstraintTerm;
                if (null == bucket)
                   cim_data.ConstraintTerm = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ConstraintTerm[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ConstraintTerm";
                base.parse_element (/<cim:ConstraintTerm.factor>([\s\S]*?)<\/cim:ConstraintTerm.factor>/g, obj, "factor", base.to_string, sub, context);
                base.parse_element (/<cim:ConstraintTerm.function>([\s\S]*?)<\/cim:ConstraintTerm.function>/g, obj, "function", base.to_string, sub, context);
                base.parse_attribute (/<cim:ConstraintTerm.SecurityConstraintSum\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SecurityConstraintSum", sub, context);

                var bucket = context.parsed.ConstraintTerm;
                if (null == bucket)
                   context.parsed.ConstraintTerm = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ConstraintTerm", "factor", base.from_string, fields);
                base.export_element (obj, "ConstraintTerm", "function", base.from_string, fields);
                base.export_attribute (obj, "ConstraintTerm", "SecurityConstraintSum", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ConstraintTerm_collapse" aria-expanded="true" aria-controls="ConstraintTerm_collapse" style="margin-left: 10px;">ConstraintTerm</a></legend>
                    <div id="ConstraintTerm_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#factor}}<div><b>factor</b>: {{factor}}</div>{{/factor}}
                    {{#function}}<div><b>function</b>: {{function}}</div>{{/function}}
                    {{#SecurityConstraintSum}}<div><b>SecurityConstraintSum</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SecurityConstraintSum}}&quot;);})'>{{SecurityConstraintSum}}</a></div>{{/SecurityConstraintSum}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ConstraintTerm_collapse" aria-expanded="true" aria-controls="ConstraintTerm_collapse" style="margin-left: 10px;">ConstraintTerm</a></legend>
                    <div id="ConstraintTerm_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='factor'>factor: </label><div class='col-sm-8'><input id='factor' class='form-control' type='text'{{#factor}} value='{{factor}}'{{/factor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='function'>function: </label><div class='col-sm-8'><input id='function' class='form-control' type='text'{{#function}} value='{{function}}'{{/function}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SecurityConstraintSum'>SecurityConstraintSum: </label><div class='col-sm-8'><input id='SecurityConstraintSum' class='form-control' type='text'{{#SecurityConstraintSum}} value='{{SecurityConstraintSum}}'{{/SecurityConstraintSum}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Subclass of IEC61970:Meas:DiscreteValue
         *
         */
        class MktDiscreteValue extends Meas.DiscreteValue
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktDiscreteValue;
                if (null == bucket)
                   cim_data.MktDiscreteValue = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktDiscreteValue[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Meas.DiscreteValue.prototype.parse.call (this, context, sub);
                obj.cls = "MktDiscreteValue";

                var bucket = context.parsed.MktDiscreteValue;
                if (null == bucket)
                   context.parsed.MktDiscreteValue = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Meas.DiscreteValue.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MktDiscreteValue_collapse" aria-expanded="true" aria-controls="MktDiscreteValue_collapse" style="margin-left: 10px;">MktDiscreteValue</a></legend>
                    <div id="MktDiscreteValue_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Meas.DiscreteValue.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MktDiscreteValue_collapse" aria-expanded="true" aria-controls="MktDiscreteValue_collapse" style="margin-left: 10px;">MktDiscreteValue</a></legend>
                    <div id="MktDiscreteValue_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Meas.DiscreteValue.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Models Ancillary Service Requirements.
         *
         * Describes interval for which the requirement is applicable.
         *
         */
        class ASRequirements extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ASRequirements;
                if (null == bucket)
                   cim_data.ASRequirements = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ASRequirements[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ASRequirements";
                base.parse_element (/<cim:ASRequirements.intervalStartTime>([\s\S]*?)<\/cim:ASRequirements.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);

                var bucket = context.parsed.ASRequirements;
                if (null == bucket)
                   context.parsed.ASRequirements = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ASRequirements", "intervalStartTime", base.from_datetime, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ASRequirements_collapse" aria-expanded="true" aria-controls="ASRequirements_collapse" style="margin-left: 10px;">ASRequirements</a></legend>
                    <div id="ASRequirements_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#intervalStartTime}}<div><b>intervalStartTime</b>: {{intervalStartTime}}</div>{{/intervalStartTime}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ASRequirements_collapse" aria-expanded="true" aria-controls="ASRequirements_collapse" style="margin-left: 10px;">ASRequirements</a></legend>
                    <div id="ASRequirements_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='intervalStartTime'>intervalStartTime: </label><div class='col-sm-8'><input id='intervalStartTime' class='form-control' type='text'{{#intervalStartTime}} value='{{intervalStartTime}}'{{/intervalStartTime}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * A transmission reservation is obtained from the OASIS system to reserve transmission for a specified time period, transmission path and transmission product.
         *
         */
        class TransmissionReservation extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TransmissionReservation;
                if (null == bucket)
                   cim_data.TransmissionReservation = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TransmissionReservation[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TransmissionReservation";
                base.parse_attribute (/<cim:TransmissionReservation.EnergyTransaction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyTransaction", sub, context);
                base.parse_attribute (/<cim:TransmissionReservation.TransmissionPath\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionPath", sub, context);
                base.parse_attribute (/<cim:TransmissionReservation.Sink\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Sink", sub, context);
                base.parse_attribute (/<cim:TransmissionReservation.TransactionBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransactionBid", sub, context);
                base.parse_attribute (/<cim:TransmissionReservation.Source\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Source", sub, context);

                var bucket = context.parsed.TransmissionReservation;
                if (null == bucket)
                   context.parsed.TransmissionReservation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_attribute (obj, "TransmissionReservation", "EnergyTransaction", fields);
                base.export_attribute (obj, "TransmissionReservation", "TransmissionPath", fields);
                base.export_attribute (obj, "TransmissionReservation", "Sink", fields);
                base.export_attribute (obj, "TransmissionReservation", "TransactionBid", fields);
                base.export_attribute (obj, "TransmissionReservation", "Source", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TransmissionReservation_collapse" aria-expanded="true" aria-controls="TransmissionReservation_collapse" style="margin-left: 10px;">TransmissionReservation</a></legend>
                    <div id="TransmissionReservation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#EnergyTransaction}}<div><b>EnergyTransaction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EnergyTransaction}}&quot;);})'>{{EnergyTransaction}}</a></div>{{/EnergyTransaction}}
                    {{#TransmissionPath}}<div><b>TransmissionPath</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TransmissionPath}}&quot;);})'>{{TransmissionPath}}</a></div>{{/TransmissionPath}}
                    {{#Sink}}<div><b>Sink</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Sink}}&quot;);})'>{{Sink}}</a></div>{{/Sink}}
                    {{#TransactionBid}}<div><b>TransactionBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TransactionBid}}&quot;);})'>{{TransactionBid}}</a></div>{{/TransactionBid}}
                    {{#Source}}<div><b>Source</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Source}}&quot;);})'>{{Source}}</a></div>{{/Source}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TransmissionReservation_collapse" aria-expanded="true" aria-controls="TransmissionReservation_collapse" style="margin-left: 10px;">TransmissionReservation</a></legend>
                    <div id="TransmissionReservation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='EnergyTransaction'>EnergyTransaction: </label><div class='col-sm-8'><input id='EnergyTransaction' class='form-control' type='text'{{#EnergyTransaction}} value='{{EnergyTransaction}}'{{/EnergyTransaction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TransmissionPath'>TransmissionPath: </label><div class='col-sm-8'><input id='TransmissionPath' class='form-control' type='text'{{#TransmissionPath}} value='{{TransmissionPath}}'{{/TransmissionPath}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Sink'>Sink: </label><div class='col-sm-8'><input id='Sink' class='form-control' type='text'{{#Sink}} value='{{Sink}}'{{/Sink}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TransactionBid'>TransactionBid: </label><div class='col-sm-8'><input id='TransactionBid' class='form-control' type='text'{{#TransactionBid}} value='{{TransactionBid}}'{{/TransactionBid}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Source'>Source: </label><div class='col-sm-8'><input id='Source' class='form-control' type='text'{{#Source}} value='{{Source}}'{{/Source}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * TNA Interface Definitions from OPF for VSA
         *
         */
        class TransferInterfaceSolution extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TransferInterfaceSolution;
                if (null == bucket)
                   cim_data.TransferInterfaceSolution = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TransferInterfaceSolution[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TransferInterfaceSolution";
                base.parse_element (/<cim:TransferInterfaceSolution.interfaceMargin>([\s\S]*?)<\/cim:TransferInterfaceSolution.interfaceMargin>/g, obj, "interfaceMargin", base.to_float, sub, context);
                base.parse_element (/<cim:TransferInterfaceSolution.transferLimit>([\s\S]*?)<\/cim:TransferInterfaceSolution.transferLimit>/g, obj, "transferLimit", base.to_float, sub, context);
                base.parse_element (/<cim:TransferInterfaceSolution.postTransferMW>([\s\S]*?)<\/cim:TransferInterfaceSolution.postTransferMW>/g, obj, "postTransferMW", base.to_float, sub, context);
                base.parse_attribute (/<cim:TransferInterfaceSolution.TransferInterface\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransferInterface", sub, context);
                base.parse_attribute (/<cim:TransferInterfaceSolution.MktContingencyB\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktContingencyB", sub, context);
                base.parse_attribute (/<cim:TransferInterfaceSolution. MktContingencyA\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, " MktContingencyA", sub, context);

                var bucket = context.parsed.TransferInterfaceSolution;
                if (null == bucket)
                   context.parsed.TransferInterfaceSolution = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TransferInterfaceSolution", "interfaceMargin", base.from_float, fields);
                base.export_element (obj, "TransferInterfaceSolution", "transferLimit", base.from_float, fields);
                base.export_element (obj, "TransferInterfaceSolution", "postTransferMW", base.from_float, fields);
                base.export_attribute (obj, "TransferInterfaceSolution", "TransferInterface", fields);
                base.export_attribute (obj, "TransferInterfaceSolution", "MktContingencyB", fields);
                base.export_attribute (obj, "TransferInterfaceSolution", " MktContingencyA", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TransferInterfaceSolution_collapse" aria-expanded="true" aria-controls="TransferInterfaceSolution_collapse" style="margin-left: 10px;">TransferInterfaceSolution</a></legend>
                    <div id="TransferInterfaceSolution_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#interfaceMargin}}<div><b>interfaceMargin</b>: {{interfaceMargin}}</div>{{/interfaceMargin}}
                    {{#transferLimit}}<div><b>transferLimit</b>: {{transferLimit}}</div>{{/transferLimit}}
                    {{#postTransferMW}}<div><b>postTransferMW</b>: {{postTransferMW}}</div>{{/postTransferMW}}
                    {{#TransferInterface}}<div><b>TransferInterface</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TransferInterface}}&quot;);})'>{{TransferInterface}}</a></div>{{/TransferInterface}}
                    {{#MktContingencyB}}<div><b>MktContingencyB</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktContingencyB}}&quot;);})'>{{MktContingencyB}}</a></div>{{/MktContingencyB}}
                    {{# MktContingencyA}}<div><b> MktContingencyA</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ MktContingencyA}}&quot;);})'>{{ MktContingencyA}}</a></div>{{/ MktContingencyA}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TransferInterfaceSolution_collapse" aria-expanded="true" aria-controls="TransferInterfaceSolution_collapse" style="margin-left: 10px;">TransferInterfaceSolution</a></legend>
                    <div id="TransferInterfaceSolution_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='interfaceMargin'>interfaceMargin: </label><div class='col-sm-8'><input id='interfaceMargin' class='form-control' type='text'{{#interfaceMargin}} value='{{interfaceMargin}}'{{/interfaceMargin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='transferLimit'>transferLimit: </label><div class='col-sm-8'><input id='transferLimit' class='form-control' type='text'{{#transferLimit}} value='{{transferLimit}}'{{/transferLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='postTransferMW'>postTransferMW: </label><div class='col-sm-8'><input id='postTransferMW' class='form-control' type='text'{{#postTransferMW}} value='{{postTransferMW}}'{{/postTransferMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TransferInterface'>TransferInterface: </label><div class='col-sm-8'><input id='TransferInterface' class='form-control' type='text'{{#TransferInterface}} value='{{TransferInterface}}'{{/TransferInterface}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktContingencyB'>MktContingencyB: </label><div class='col-sm-8'><input id='MktContingencyB' class='form-control' type='text'{{#MktContingencyB}} value='{{MktContingencyB}}'{{/MktContingencyB}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for=' MktContingencyA'> MktContingencyA: </label><div class='col-sm-8'><input id=' MktContingencyA' class='form-control' type='text'{{# MktContingencyA}} value='{{ MktContingencyA}}'{{/ MktContingencyA}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Default bid curve for default energy bid curve and default startup curves (cost and time)
         *
         */
        class DefaultBidCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DefaultBidCurve;
                if (null == bucket)
                   cim_data.DefaultBidCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DefaultBidCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "DefaultBidCurve";
                base.parse_element (/<cim:DefaultBidCurve.curveType>([\s\S]*?)<\/cim:DefaultBidCurve.curveType>/g, obj, "curveType", base.to_string, sub, context);
                base.parse_element (/<cim:DefaultBidCurve.debAdderFlag>([\s\S]*?)<\/cim:DefaultBidCurve.debAdderFlag>/g, obj, "debAdderFlag", base.to_string, sub, context);
                base.parse_attribute (/<cim:DefaultBidCurve.DefaultBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DefaultBid", sub, context);

                var bucket = context.parsed.DefaultBidCurve;
                if (null == bucket)
                   context.parsed.DefaultBidCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "DefaultBidCurve", "curveType", base.from_string, fields);
                base.export_element (obj, "DefaultBidCurve", "debAdderFlag", base.from_string, fields);
                base.export_attribute (obj, "DefaultBidCurve", "DefaultBid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DefaultBidCurve_collapse" aria-expanded="true" aria-controls="DefaultBidCurve_collapse" style="margin-left: 10px;">DefaultBidCurve</a></legend>
                    <div id="DefaultBidCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#curveType}}<div><b>curveType</b>: {{curveType}}</div>{{/curveType}}
                    {{#debAdderFlag}}<div><b>debAdderFlag</b>: {{debAdderFlag}}</div>{{/debAdderFlag}}
                    {{#DefaultBid}}<div><b>DefaultBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DefaultBid}}&quot;);})'>{{DefaultBid}}</a></div>{{/DefaultBid}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DefaultBidCurve_collapse" aria-expanded="true" aria-controls="DefaultBidCurve_collapse" style="margin-left: 10px;">DefaultBidCurve</a></legend>
                    <div id="DefaultBidCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='curveType'>curveType: </label><div class='col-sm-8'><input id='curveType' class='form-control' type='text'{{#curveType}} value='{{curveType}}'{{/curveType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='debAdderFlag'>debAdderFlag: </label><div class='col-sm-8'><input id='debAdderFlag' class='form-control' type='text'{{#debAdderFlag}} value='{{debAdderFlag}}'{{/debAdderFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='DefaultBid'>DefaultBid: </label><div class='col-sm-8'><input id='DefaultBid' class='form-control' type='text'{{#DefaultBid}} value='{{DefaultBid}}'{{/DefaultBid}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Dynamic flows and ratings associated with a branch end.
         *
         */
        class BranchEndFlow extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BranchEndFlow;
                if (null == bucket)
                   cim_data.BranchEndFlow = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BranchEndFlow[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "BranchEndFlow";
                base.parse_element (/<cim:BranchEndFlow.mwFlow>([\s\S]*?)<\/cim:BranchEndFlow.mwFlow>/g, obj, "mwFlow", base.to_float, sub, context);
                base.parse_element (/<cim:BranchEndFlow.mVARFlow>([\s\S]*?)<\/cim:BranchEndFlow.mVARFlow>/g, obj, "mVARFlow", base.to_float, sub, context);
                base.parse_element (/<cim:BranchEndFlow.normalRating>([\s\S]*?)<\/cim:BranchEndFlow.normalRating>/g, obj, "normalRating", base.to_float, sub, context);
                base.parse_element (/<cim:BranchEndFlow.longTermRating>([\s\S]*?)<\/cim:BranchEndFlow.longTermRating>/g, obj, "longTermRating", base.to_float, sub, context);
                base.parse_element (/<cim:BranchEndFlow.shortTermRating>([\s\S]*?)<\/cim:BranchEndFlow.shortTermRating>/g, obj, "shortTermRating", base.to_float, sub, context);
                base.parse_element (/<cim:BranchEndFlow.loadDumpRating>([\s\S]*?)<\/cim:BranchEndFlow.loadDumpRating>/g, obj, "loadDumpRating", base.to_float, sub, context);

                var bucket = context.parsed.BranchEndFlow;
                if (null == bucket)
                   context.parsed.BranchEndFlow = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "BranchEndFlow", "mwFlow", base.from_float, fields);
                base.export_element (obj, "BranchEndFlow", "mVARFlow", base.from_float, fields);
                base.export_element (obj, "BranchEndFlow", "normalRating", base.from_float, fields);
                base.export_element (obj, "BranchEndFlow", "longTermRating", base.from_float, fields);
                base.export_element (obj, "BranchEndFlow", "shortTermRating", base.from_float, fields);
                base.export_element (obj, "BranchEndFlow", "loadDumpRating", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BranchEndFlow_collapse" aria-expanded="true" aria-controls="BranchEndFlow_collapse" style="margin-left: 10px;">BranchEndFlow</a></legend>
                    <div id="BranchEndFlow_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#mwFlow}}<div><b>mwFlow</b>: {{mwFlow}}</div>{{/mwFlow}}
                    {{#mVARFlow}}<div><b>mVARFlow</b>: {{mVARFlow}}</div>{{/mVARFlow}}
                    {{#normalRating}}<div><b>normalRating</b>: {{normalRating}}</div>{{/normalRating}}
                    {{#longTermRating}}<div><b>longTermRating</b>: {{longTermRating}}</div>{{/longTermRating}}
                    {{#shortTermRating}}<div><b>shortTermRating</b>: {{shortTermRating}}</div>{{/shortTermRating}}
                    {{#loadDumpRating}}<div><b>loadDumpRating</b>: {{loadDumpRating}}</div>{{/loadDumpRating}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BranchEndFlow_collapse" aria-expanded="true" aria-controls="BranchEndFlow_collapse" style="margin-left: 10px;">BranchEndFlow</a></legend>
                    <div id="BranchEndFlow_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='mwFlow'>mwFlow: </label><div class='col-sm-8'><input id='mwFlow' class='form-control' type='text'{{#mwFlow}} value='{{mwFlow}}'{{/mwFlow}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='mVARFlow'>mVARFlow: </label><div class='col-sm-8'><input id='mVARFlow' class='form-control' type='text'{{#mVARFlow}} value='{{mVARFlow}}'{{/mVARFlow}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='normalRating'>normalRating: </label><div class='col-sm-8'><input id='normalRating' class='form-control' type='text'{{#normalRating}} value='{{normalRating}}'{{/normalRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='longTermRating'>longTermRating: </label><div class='col-sm-8'><input id='longTermRating' class='form-control' type='text'{{#longTermRating}} value='{{longTermRating}}'{{/longTermRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='shortTermRating'>shortTermRating: </label><div class='col-sm-8'><input id='shortTermRating' class='form-control' type='text'{{#shortTermRating}} value='{{shortTermRating}}'{{/shortTermRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='loadDumpRating'>loadDumpRating: </label><div class='col-sm-8'><input id='loadDumpRating' class='form-control' type='text'{{#loadDumpRating}} value='{{loadDumpRating}}'{{/loadDumpRating}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * A profile is a simpler curve type.
         *
         */
        class Profile extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Profile;
                if (null == bucket)
                   cim_data.Profile = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Profile[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Profile";

                var bucket = context.parsed.Profile;
                if (null == bucket)
                   context.parsed.Profile = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Profile_collapse" aria-expanded="true" aria-controls="Profile_collapse" style="margin-left: 10px;">Profile</a></legend>
                    <div id="Profile_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Profile_collapse" aria-expanded="true" aria-controls="Profile_collapse" style="margin-left: 10px;">Profile</a></legend>
                    <div id="Profile_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Resource status at the end of a given clearing period.
         *
         */
        class UnitInitialConditions extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.UnitInitialConditions;
                if (null == bucket)
                   cim_data.UnitInitialConditions = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.UnitInitialConditions[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "UnitInitialConditions";
                base.parse_element (/<cim:UnitInitialConditions.cumEnergy>([\s\S]*?)<\/cim:UnitInitialConditions.cumEnergy>/g, obj, "cumEnergy", base.to_string, sub, context);
                base.parse_element (/<cim:UnitInitialConditions.cumStatusChanges>([\s\S]*?)<\/cim:UnitInitialConditions.cumStatusChanges>/g, obj, "cumStatusChanges", base.to_string, sub, context);
                base.parse_element (/<cim:UnitInitialConditions.numberOfStartups>([\s\S]*?)<\/cim:UnitInitialConditions.numberOfStartups>/g, obj, "numberOfStartups", base.to_string, sub, context);
                base.parse_element (/<cim:UnitInitialConditions.onlineStatus>([\s\S]*?)<\/cim:UnitInitialConditions.onlineStatus>/g, obj, "onlineStatus", base.to_boolean, sub, context);
                base.parse_element (/<cim:UnitInitialConditions.resourceMW>([\s\S]*?)<\/cim:UnitInitialConditions.resourceMW>/g, obj, "resourceMW", base.to_string, sub, context);
                base.parse_element (/<cim:UnitInitialConditions.resourceStatus>([\s\S]*?)<\/cim:UnitInitialConditions.resourceStatus>/g, obj, "resourceStatus", base.to_string, sub, context);
                base.parse_element (/<cim:UnitInitialConditions.statusDate>([\s\S]*?)<\/cim:UnitInitialConditions.statusDate>/g, obj, "statusDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:UnitInitialConditions.timeInStatus>([\s\S]*?)<\/cim:UnitInitialConditions.timeInStatus>/g, obj, "timeInStatus", base.to_float, sub, context);
                base.parse_element (/<cim:UnitInitialConditions.timeInterval>([\s\S]*?)<\/cim:UnitInitialConditions.timeInterval>/g, obj, "timeInterval", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:UnitInitialConditions.GeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingUnit", sub, context);

                var bucket = context.parsed.UnitInitialConditions;
                if (null == bucket)
                   context.parsed.UnitInitialConditions = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "UnitInitialConditions", "cumEnergy", base.from_string, fields);
                base.export_element (obj, "UnitInitialConditions", "cumStatusChanges", base.from_string, fields);
                base.export_element (obj, "UnitInitialConditions", "numberOfStartups", base.from_string, fields);
                base.export_element (obj, "UnitInitialConditions", "onlineStatus", base.from_boolean, fields);
                base.export_element (obj, "UnitInitialConditions", "resourceMW", base.from_string, fields);
                base.export_element (obj, "UnitInitialConditions", "resourceStatus", base.from_string, fields);
                base.export_element (obj, "UnitInitialConditions", "statusDate", base.from_datetime, fields);
                base.export_element (obj, "UnitInitialConditions", "timeInStatus", base.from_float, fields);
                base.export_element (obj, "UnitInitialConditions", "timeInterval", base.from_datetime, fields);
                base.export_attribute (obj, "UnitInitialConditions", "GeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#UnitInitialConditions_collapse" aria-expanded="true" aria-controls="UnitInitialConditions_collapse" style="margin-left: 10px;">UnitInitialConditions</a></legend>
                    <div id="UnitInitialConditions_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#cumEnergy}}<div><b>cumEnergy</b>: {{cumEnergy}}</div>{{/cumEnergy}}
                    {{#cumStatusChanges}}<div><b>cumStatusChanges</b>: {{cumStatusChanges}}</div>{{/cumStatusChanges}}
                    {{#numberOfStartups}}<div><b>numberOfStartups</b>: {{numberOfStartups}}</div>{{/numberOfStartups}}
                    {{#onlineStatus}}<div><b>onlineStatus</b>: {{onlineStatus}}</div>{{/onlineStatus}}
                    {{#resourceMW}}<div><b>resourceMW</b>: {{resourceMW}}</div>{{/resourceMW}}
                    {{#resourceStatus}}<div><b>resourceStatus</b>: {{resourceStatus}}</div>{{/resourceStatus}}
                    {{#statusDate}}<div><b>statusDate</b>: {{statusDate}}</div>{{/statusDate}}
                    {{#timeInStatus}}<div><b>timeInStatus</b>: {{timeInStatus}}</div>{{/timeInStatus}}
                    {{#timeInterval}}<div><b>timeInterval</b>: {{timeInterval}}</div>{{/timeInterval}}
                    {{#GeneratingUnit}}<div><b>GeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GeneratingUnit}}&quot;);})'>{{GeneratingUnit}}</a></div>{{/GeneratingUnit}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#UnitInitialConditions_collapse" aria-expanded="true" aria-controls="UnitInitialConditions_collapse" style="margin-left: 10px;">UnitInitialConditions</a></legend>
                    <div id="UnitInitialConditions_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='cumEnergy'>cumEnergy: </label><div class='col-sm-8'><input id='cumEnergy' class='form-control' type='text'{{#cumEnergy}} value='{{cumEnergy}}'{{/cumEnergy}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='cumStatusChanges'>cumStatusChanges: </label><div class='col-sm-8'><input id='cumStatusChanges' class='form-control' type='text'{{#cumStatusChanges}} value='{{cumStatusChanges}}'{{/cumStatusChanges}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='numberOfStartups'>numberOfStartups: </label><div class='col-sm-8'><input id='numberOfStartups' class='form-control' type='text'{{#numberOfStartups}} value='{{numberOfStartups}}'{{/numberOfStartups}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='onlineStatus'>onlineStatus: </label><div class='col-sm-8'><input id='onlineStatus' class='form-check-input' type='checkbox'{{#onlineStatus}} checked{{/onlineStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='resourceMW'>resourceMW: </label><div class='col-sm-8'><input id='resourceMW' class='form-control' type='text'{{#resourceMW}} value='{{resourceMW}}'{{/resourceMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='resourceStatus'>resourceStatus: </label><div class='col-sm-8'><input id='resourceStatus' class='form-control' type='text'{{#resourceStatus}} value='{{resourceStatus}}'{{/resourceStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='statusDate'>statusDate: </label><div class='col-sm-8'><input id='statusDate' class='form-control' type='text'{{#statusDate}} value='{{statusDate}}'{{/statusDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='timeInStatus'>timeInStatus: </label><div class='col-sm-8'><input id='timeInStatus' class='form-control' type='text'{{#timeInStatus}} value='{{timeInStatus}}'{{/timeInStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='timeInterval'>timeInterval: </label><div class='col-sm-8'><input id='timeInterval' class='form-control' type='text'{{#timeInterval}} value='{{timeInterval}}'{{/timeInterval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='GeneratingUnit'>GeneratingUnit: </label><div class='col-sm-8'><input id='GeneratingUnit' class='form-control' type='text'{{#GeneratingUnit}} value='{{GeneratingUnit}}'{{/GeneratingUnit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Subclass of IEC61970:Wires:ShuntCompensator
         *
         */
        class MktShuntCompensator extends Wires.ShuntCompensator
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktShuntCompensator;
                if (null == bucket)
                   cim_data.MktShuntCompensator = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktShuntCompensator[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Wires.ShuntCompensator.prototype.parse.call (this, context, sub);
                obj.cls = "MktShuntCompensator";

                var bucket = context.parsed.MktShuntCompensator;
                if (null == bucket)
                   context.parsed.MktShuntCompensator = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Wires.ShuntCompensator.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MktShuntCompensator_collapse" aria-expanded="true" aria-controls="MktShuntCompensator_collapse" style="margin-left: 10px;">MktShuntCompensator</a></legend>
                    <div id="MktShuntCompensator_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Wires.ShuntCompensator.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MktShuntCompensator_collapse" aria-expanded="true" aria-controls="MktShuntCompensator_collapse" style="margin-left: 10px;">MktShuntCompensator</a></legend>
                    <div id="MktShuntCompensator_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Wires.ShuntCompensator.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Subclass of IEC61970:Meas:AnalogLimit
         *
         */
        class MktAnalogLimit extends Meas.AnalogLimit
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktAnalogLimit;
                if (null == bucket)
                   cim_data.MktAnalogLimit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktAnalogLimit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Meas.AnalogLimit.prototype.parse.call (this, context, sub);
                obj.cls = "MktAnalogLimit";
                base.parse_element (/<cim:MktAnalogLimit.exceededLimit>([\s\S]*?)<\/cim:MktAnalogLimit.exceededLimit>/g, obj, "exceededLimit", base.to_boolean, sub, context);
                base.parse_element (/<cim:MktAnalogLimit.limitType>([\s\S]*?)<\/cim:MktAnalogLimit.limitType>/g, obj, "limitType", base.to_string, sub, context);

                var bucket = context.parsed.MktAnalogLimit;
                if (null == bucket)
                   context.parsed.MktAnalogLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Meas.AnalogLimit.prototype.export.call (this, obj, false);

                base.export_element (obj, "MktAnalogLimit", "exceededLimit", base.from_boolean, fields);
                base.export_element (obj, "MktAnalogLimit", "limitType", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MktAnalogLimit_collapse" aria-expanded="true" aria-controls="MktAnalogLimit_collapse" style="margin-left: 10px;">MktAnalogLimit</a></legend>
                    <div id="MktAnalogLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Meas.AnalogLimit.prototype.template.call (this) +
                    `
                    {{#exceededLimit}}<div><b>exceededLimit</b>: {{exceededLimit}}</div>{{/exceededLimit}}
                    {{#limitType}}<div><b>limitType</b>: {{limitType}}</div>{{/limitType}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MktAnalogLimit_collapse" aria-expanded="true" aria-controls="MktAnalogLimit_collapse" style="margin-left: 10px;">MktAnalogLimit</a></legend>
                    <div id="MktAnalogLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Meas.AnalogLimit.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='exceededLimit'>exceededLimit: </label><div class='col-sm-8'><input id='exceededLimit' class='form-check-input' type='checkbox'{{#exceededLimit}} checked{{/exceededLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='limitType'>limitType: </label><div class='col-sm-8'><input id='limitType' class='form-control' type='text'{{#limitType}} value='{{limitType}}'{{/limitType}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Subclass of IEC61970:Wires:SeriesCompensator
         *
         */
        class MktSeriesCompensator extends Wires.SeriesCompensator
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktSeriesCompensator;
                if (null == bucket)
                   cim_data.MktSeriesCompensator = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktSeriesCompensator[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Wires.SeriesCompensator.prototype.parse.call (this, context, sub);
                obj.cls = "MktSeriesCompensator";
                base.parse_attribute (/<cim:MktSeriesCompensator.EndAFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndAFlow", sub, context);
                base.parse_attribute (/<cim:MktSeriesCompensator.EndBFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndBFlow", sub, context);

                var bucket = context.parsed.MktSeriesCompensator;
                if (null == bucket)
                   context.parsed.MktSeriesCompensator = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Wires.SeriesCompensator.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MktSeriesCompensator", "EndAFlow", fields);
                base.export_attribute (obj, "MktSeriesCompensator", "EndBFlow", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MktSeriesCompensator_collapse" aria-expanded="true" aria-controls="MktSeriesCompensator_collapse" style="margin-left: 10px;">MktSeriesCompensator</a></legend>
                    <div id="MktSeriesCompensator_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Wires.SeriesCompensator.prototype.template.call (this) +
                    `
                    {{#EndAFlow}}<div><b>EndAFlow</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EndAFlow}}&quot;);})'>{{EndAFlow}}</a></div>{{/EndAFlow}}
                    {{#EndBFlow}}<div><b>EndBFlow</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EndBFlow}}&quot;);})'>{{EndBFlow}}</a></div>{{/EndBFlow}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MktSeriesCompensator_collapse" aria-expanded="true" aria-controls="MktSeriesCompensator_collapse" style="margin-left: 10px;">MktSeriesCompensator</a></legend>
                    <div id="MktSeriesCompensator_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Wires.SeriesCompensator.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='EndAFlow'>EndAFlow: </label><div class='col-sm-8'><input id='EndAFlow' class='form-control' type='text'{{#EndAFlow}} value='{{EndAFlow}}'{{/EndAFlow}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='EndBFlow'>EndBFlow: </label><div class='col-sm-8'><input id='EndBFlow' class='form-control' type='text'{{#EndBFlow}} value='{{EndBFlow}}'{{/EndBFlow}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Indicates whether unit is eligible for treatment as a intermittent variable renewable resource
         *
         */
        class IntermittentResourceEligibility extends MarketPlan.MarketFactors
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.IntermittentResourceEligibility;
                if (null == bucket)
                   cim_data.IntermittentResourceEligibility = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.IntermittentResourceEligibility[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "IntermittentResourceEligibility";
                base.parse_element (/<cim:IntermittentResourceEligibility.eligibilityStatus>([\s\S]*?)<\/cim:IntermittentResourceEligibility.eligibilityStatus>/g, obj, "eligibilityStatus", base.to_string, sub, context);
                base.parse_attribute (/<cim:IntermittentResourceEligibility.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);

                var bucket = context.parsed.IntermittentResourceEligibility;
                if (null == bucket)
                   context.parsed.IntermittentResourceEligibility = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_element (obj, "IntermittentResourceEligibility", "eligibilityStatus", base.from_string, fields);
                base.export_attribute (obj, "IntermittentResourceEligibility", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#IntermittentResourceEligibility_collapse" aria-expanded="true" aria-controls="IntermittentResourceEligibility_collapse" style="margin-left: 10px;">IntermittentResourceEligibility</a></legend>
                    <div id="IntermittentResourceEligibility_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.template.call (this) +
                    `
                    {{#eligibilityStatus}}<div><b>eligibilityStatus</b>: {{eligibilityStatus}}</div>{{/eligibilityStatus}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredResource}}&quot;);})'>{{RegisteredResource}}</a></div>{{/RegisteredResource}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#IntermittentResourceEligibility_collapse" aria-expanded="true" aria-controls="IntermittentResourceEligibility_collapse" style="margin-left: 10px;">IntermittentResourceEligibility</a></legend>
                    <div id="IntermittentResourceEligibility_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='eligibilityStatus'>eligibilityStatus: </label><div class='col-sm-8'><input id='eligibilityStatus' class='form-control' type='text'{{#eligibilityStatus}} value='{{eligibilityStatus}}'{{/eligibilityStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Optimal Power Flow or State Estimator Phase Shifter Data.
         *
         * This is used for RealTime, Study and Maintenance Users. SE Solution Phase Shifter Measurements from the last run of SE
         *
         */
        class TapChangerDynamicData extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TapChangerDynamicData;
                if (null == bucket)
                   cim_data.TapChangerDynamicData = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TapChangerDynamicData[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TapChangerDynamicData";
                base.parse_element (/<cim:TapChangerDynamicData.tapPosition>([\s\S]*?)<\/cim:TapChangerDynamicData.tapPosition>/g, obj, "tapPosition", base.to_float, sub, context);
                base.parse_element (/<cim:TapChangerDynamicData.desiredVoltage>([\s\S]*?)<\/cim:TapChangerDynamicData.desiredVoltage>/g, obj, "desiredVoltage", base.to_float, sub, context);
                base.parse_element (/<cim:TapChangerDynamicData.voltageRegulationStatus>([\s\S]*?)<\/cim:TapChangerDynamicData.voltageRegulationStatus>/g, obj, "voltageRegulationStatus", base.to_boolean, sub, context);
                base.parse_element (/<cim:TapChangerDynamicData.angleRegulationStatus>([\s\S]*?)<\/cim:TapChangerDynamicData.angleRegulationStatus>/g, obj, "angleRegulationStatus", base.to_boolean, sub, context);
                base.parse_element (/<cim:TapChangerDynamicData.desiredMW>([\s\S]*?)<\/cim:TapChangerDynamicData.desiredMW>/g, obj, "desiredMW", base.to_float, sub, context);
                base.parse_element (/<cim:TapChangerDynamicData.solvedAngle>([\s\S]*?)<\/cim:TapChangerDynamicData.solvedAngle>/g, obj, "solvedAngle", base.to_float, sub, context);
                base.parse_element (/<cim:TapChangerDynamicData.minimumAngle>([\s\S]*?)<\/cim:TapChangerDynamicData.minimumAngle>/g, obj, "minimumAngle", base.to_float, sub, context);
                base.parse_element (/<cim:TapChangerDynamicData.maximumAngle>([\s\S]*?)<\/cim:TapChangerDynamicData.maximumAngle>/g, obj, "maximumAngle", base.to_float, sub, context);
                base.parse_attribute (/<cim:TapChangerDynamicData.MktTapChanger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktTapChanger", sub, context);

                var bucket = context.parsed.TapChangerDynamicData;
                if (null == bucket)
                   context.parsed.TapChangerDynamicData = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TapChangerDynamicData", "tapPosition", base.from_float, fields);
                base.export_element (obj, "TapChangerDynamicData", "desiredVoltage", base.from_float, fields);
                base.export_element (obj, "TapChangerDynamicData", "voltageRegulationStatus", base.from_boolean, fields);
                base.export_element (obj, "TapChangerDynamicData", "angleRegulationStatus", base.from_boolean, fields);
                base.export_element (obj, "TapChangerDynamicData", "desiredMW", base.from_float, fields);
                base.export_element (obj, "TapChangerDynamicData", "solvedAngle", base.from_float, fields);
                base.export_element (obj, "TapChangerDynamicData", "minimumAngle", base.from_float, fields);
                base.export_element (obj, "TapChangerDynamicData", "maximumAngle", base.from_float, fields);
                base.export_attribute (obj, "TapChangerDynamicData", "MktTapChanger", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TapChangerDynamicData_collapse" aria-expanded="true" aria-controls="TapChangerDynamicData_collapse" style="margin-left: 10px;">TapChangerDynamicData</a></legend>
                    <div id="TapChangerDynamicData_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#tapPosition}}<div><b>tapPosition</b>: {{tapPosition}}</div>{{/tapPosition}}
                    {{#desiredVoltage}}<div><b>desiredVoltage</b>: {{desiredVoltage}}</div>{{/desiredVoltage}}
                    {{#voltageRegulationStatus}}<div><b>voltageRegulationStatus</b>: {{voltageRegulationStatus}}</div>{{/voltageRegulationStatus}}
                    {{#angleRegulationStatus}}<div><b>angleRegulationStatus</b>: {{angleRegulationStatus}}</div>{{/angleRegulationStatus}}
                    {{#desiredMW}}<div><b>desiredMW</b>: {{desiredMW}}</div>{{/desiredMW}}
                    {{#solvedAngle}}<div><b>solvedAngle</b>: {{solvedAngle}}</div>{{/solvedAngle}}
                    {{#minimumAngle}}<div><b>minimumAngle</b>: {{minimumAngle}}</div>{{/minimumAngle}}
                    {{#maximumAngle}}<div><b>maximumAngle</b>: {{maximumAngle}}</div>{{/maximumAngle}}
                    {{#MktTapChanger}}<div><b>MktTapChanger</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktTapChanger}}&quot;);})'>{{MktTapChanger}}</a></div>{{/MktTapChanger}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TapChangerDynamicData_collapse" aria-expanded="true" aria-controls="TapChangerDynamicData_collapse" style="margin-left: 10px;">TapChangerDynamicData</a></legend>
                    <div id="TapChangerDynamicData_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tapPosition'>tapPosition: </label><div class='col-sm-8'><input id='tapPosition' class='form-control' type='text'{{#tapPosition}} value='{{tapPosition}}'{{/tapPosition}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='desiredVoltage'>desiredVoltage: </label><div class='col-sm-8'><input id='desiredVoltage' class='form-control' type='text'{{#desiredVoltage}} value='{{desiredVoltage}}'{{/desiredVoltage}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='voltageRegulationStatus'>voltageRegulationStatus: </label><div class='col-sm-8'><input id='voltageRegulationStatus' class='form-check-input' type='checkbox'{{#voltageRegulationStatus}} checked{{/voltageRegulationStatus}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='angleRegulationStatus'>angleRegulationStatus: </label><div class='col-sm-8'><input id='angleRegulationStatus' class='form-check-input' type='checkbox'{{#angleRegulationStatus}} checked{{/angleRegulationStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='desiredMW'>desiredMW: </label><div class='col-sm-8'><input id='desiredMW' class='form-control' type='text'{{#desiredMW}} value='{{desiredMW}}'{{/desiredMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='solvedAngle'>solvedAngle: </label><div class='col-sm-8'><input id='solvedAngle' class='form-control' type='text'{{#solvedAngle}} value='{{solvedAngle}}'{{/solvedAngle}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minimumAngle'>minimumAngle: </label><div class='col-sm-8'><input id='minimumAngle' class='form-control' type='text'{{#minimumAngle}} value='{{minimumAngle}}'{{/minimumAngle}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maximumAngle'>maximumAngle: </label><div class='col-sm-8'><input id='maximumAngle' class='form-control' type='text'{{#maximumAngle}} value='{{maximumAngle}}'{{/maximumAngle}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktTapChanger'>MktTapChanger: </label><div class='col-sm-8'><input id='MktTapChanger' class='form-control' type='text'{{#MktTapChanger}} value='{{MktTapChanger}}'{{/MktTapChanger}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * This class models the load distribution factors.
         *
         * This class should be used in one of two ways:
         *
         */
        class LoadDistributionFactor extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LoadDistributionFactor;
                if (null == bucket)
                   cim_data.LoadDistributionFactor = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LoadDistributionFactor[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "LoadDistributionFactor";
                base.parse_element (/<cim:LoadDistributionFactor.pDistFactor>([\s\S]*?)<\/cim:LoadDistributionFactor.pDistFactor>/g, obj, "pDistFactor", base.to_float, sub, context);
                base.parse_element (/<cim:LoadDistributionFactor.qDistFactor>([\s\S]*?)<\/cim:LoadDistributionFactor.qDistFactor>/g, obj, "qDistFactor", base.to_float, sub, context);
                base.parse_attribute (/<cim:LoadDistributionFactor.IndividualPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "IndividualPnode", sub, context);
                base.parse_attribute (/<cim:LoadDistributionFactor.AggregatedPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AggregatedPnode", sub, context);

                var bucket = context.parsed.LoadDistributionFactor;
                if (null == bucket)
                   context.parsed.LoadDistributionFactor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "LoadDistributionFactor", "pDistFactor", base.from_float, fields);
                base.export_element (obj, "LoadDistributionFactor", "qDistFactor", base.from_float, fields);
                base.export_attribute (obj, "LoadDistributionFactor", "IndividualPnode", fields);
                base.export_attribute (obj, "LoadDistributionFactor", "AggregatedPnode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LoadDistributionFactor_collapse" aria-expanded="true" aria-controls="LoadDistributionFactor_collapse" style="margin-left: 10px;">LoadDistributionFactor</a></legend>
                    <div id="LoadDistributionFactor_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#pDistFactor}}<div><b>pDistFactor</b>: {{pDistFactor}}</div>{{/pDistFactor}}
                    {{#qDistFactor}}<div><b>qDistFactor</b>: {{qDistFactor}}</div>{{/qDistFactor}}
                    {{#IndividualPnode}}<div><b>IndividualPnode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{IndividualPnode}}&quot;);})'>{{IndividualPnode}}</a></div>{{/IndividualPnode}}
                    {{#AggregatedPnode}}<div><b>AggregatedPnode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AggregatedPnode}}&quot;);})'>{{AggregatedPnode}}</a></div>{{/AggregatedPnode}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LoadDistributionFactor_collapse" aria-expanded="true" aria-controls="LoadDistributionFactor_collapse" style="margin-left: 10px;">LoadDistributionFactor</a></legend>
                    <div id="LoadDistributionFactor_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pDistFactor'>pDistFactor: </label><div class='col-sm-8'><input id='pDistFactor' class='form-control' type='text'{{#pDistFactor}} value='{{pDistFactor}}'{{/pDistFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='qDistFactor'>qDistFactor: </label><div class='col-sm-8'><input id='qDistFactor' class='form-control' type='text'{{#qDistFactor}} value='{{qDistFactor}}'{{/qDistFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='IndividualPnode'>IndividualPnode: </label><div class='col-sm-8'><input id='IndividualPnode' class='form-control' type='text'{{#IndividualPnode}} value='{{IndividualPnode}}'{{/IndividualPnode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AggregatedPnode'>AggregatedPnode: </label><div class='col-sm-8'><input id='AggregatedPnode' class='form-control' type='text'{{#AggregatedPnode}} value='{{AggregatedPnode}}'{{/AggregatedPnode}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * The defined termination points of a transmission path (down to distribution level or to a customer - generation or consumption or both).
         *
         * Service points are defined from the viewpoint of the transmission service. Each service point is contained within (or on the boundary of) an interchange area. A service point is source or destination of a transaction.
         *
         */
        class ServicePoint extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ServicePoint;
                if (null == bucket)
                   cim_data.ServicePoint = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ServicePoint[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ServicePoint";

                var bucket = context.parsed.ServicePoint;
                if (null == bucket)
                   context.parsed.ServicePoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ServicePoint_collapse" aria-expanded="true" aria-controls="ServicePoint_collapse" style="margin-left: 10px;">ServicePoint</a></legend>
                    <div id="ServicePoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ServicePoint_collapse" aria-expanded="true" aria-controls="ServicePoint_collapse" style="margin-left: 10px;">ServicePoint</a></legend>
                    <div id="ServicePoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Existing Transmission Contract data for an interchange schedule
         *
         */
        class InterchangeETCData extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.InterchangeETCData;
                if (null == bucket)
                   cim_data.InterchangeETCData = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.InterchangeETCData[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "InterchangeETCData";
                base.parse_element (/<cim:InterchangeETCData.contractNumber>([\s\S]*?)<\/cim:InterchangeETCData.contractNumber>/g, obj, "contractNumber", base.to_string, sub, context);
                base.parse_element (/<cim:InterchangeETCData.usageMW>([\s\S]*?)<\/cim:InterchangeETCData.usageMW>/g, obj, "usageMW", base.to_float, sub, context);
                base.parse_attribute (/<cim:InterchangeETCData.InterchangeSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InterchangeSchedule", sub, context);

                var bucket = context.parsed.InterchangeETCData;
                if (null == bucket)
                   context.parsed.InterchangeETCData = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "InterchangeETCData", "contractNumber", base.from_string, fields);
                base.export_element (obj, "InterchangeETCData", "usageMW", base.from_float, fields);
                base.export_attribute (obj, "InterchangeETCData", "InterchangeSchedule", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#InterchangeETCData_collapse" aria-expanded="true" aria-controls="InterchangeETCData_collapse" style="margin-left: 10px;">InterchangeETCData</a></legend>
                    <div id="InterchangeETCData_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#contractNumber}}<div><b>contractNumber</b>: {{contractNumber}}</div>{{/contractNumber}}
                    {{#usageMW}}<div><b>usageMW</b>: {{usageMW}}</div>{{/usageMW}}
                    {{#InterchangeSchedule}}<div><b>InterchangeSchedule</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{InterchangeSchedule}}&quot;);})'>{{InterchangeSchedule}}</a></div>{{/InterchangeSchedule}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#InterchangeETCData_collapse" aria-expanded="true" aria-controls="InterchangeETCData_collapse" style="margin-left: 10px;">InterchangeETCData</a></legend>
                    <div id="InterchangeETCData_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='contractNumber'>contractNumber: </label><div class='col-sm-8'><input id='contractNumber' class='form-control' type='text'{{#contractNumber}} value='{{contractNumber}}'{{/contractNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='usageMW'>usageMW: </label><div class='col-sm-8'><input id='usageMW' class='form-control' type='text'{{#usageMW}} value='{{usageMW}}'{{/usageMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='InterchangeSchedule'>InterchangeSchedule: </label><div class='col-sm-8'><input id='InterchangeSchedule' class='form-control' type='text'{{#InterchangeSchedule}} value='{{InterchangeSchedule}}'{{/InterchangeSchedule}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * This class models the system distribution factors.
         *
         * This class needs to be used along with the HostControlArea and the ConnectivityNode to show the distribution of each individual party.
         *
         */
        class SysLoadDistributionFactor extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SysLoadDistributionFactor;
                if (null == bucket)
                   cim_data.SysLoadDistributionFactor = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SysLoadDistributionFactor[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SysLoadDistributionFactor";
                base.parse_element (/<cim:SysLoadDistributionFactor.factor>([\s\S]*?)<\/cim:SysLoadDistributionFactor.factor>/g, obj, "factor", base.to_float, sub, context);
                base.parse_attribute (/<cim:SysLoadDistributionFactor.HostControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HostControlArea", sub, context);
                base.parse_attribute (/<cim:SysLoadDistributionFactor.MktConnectivityNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktConnectivityNode", sub, context);

                var bucket = context.parsed.SysLoadDistributionFactor;
                if (null == bucket)
                   context.parsed.SysLoadDistributionFactor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "SysLoadDistributionFactor", "factor", base.from_float, fields);
                base.export_attribute (obj, "SysLoadDistributionFactor", "HostControlArea", fields);
                base.export_attribute (obj, "SysLoadDistributionFactor", "MktConnectivityNode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SysLoadDistributionFactor_collapse" aria-expanded="true" aria-controls="SysLoadDistributionFactor_collapse" style="margin-left: 10px;">SysLoadDistributionFactor</a></legend>
                    <div id="SysLoadDistributionFactor_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#factor}}<div><b>factor</b>: {{factor}}</div>{{/factor}}
                    {{#HostControlArea}}<div><b>HostControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{HostControlArea}}&quot;);})'>{{HostControlArea}}</a></div>{{/HostControlArea}}
                    {{#MktConnectivityNode}}<div><b>MktConnectivityNode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktConnectivityNode}}&quot;);})'>{{MktConnectivityNode}}</a></div>{{/MktConnectivityNode}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SysLoadDistributionFactor_collapse" aria-expanded="true" aria-controls="SysLoadDistributionFactor_collapse" style="margin-left: 10px;">SysLoadDistributionFactor</a></legend>
                    <div id="SysLoadDistributionFactor_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='factor'>factor: </label><div class='col-sm-8'><input id='factor' class='form-control' type='text'{{#factor}} value='{{factor}}'{{/factor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='HostControlArea'>HostControlArea: </label><div class='col-sm-8'><input id='HostControlArea' class='form-control' type='text'{{#HostControlArea}} value='{{HostControlArea}}'{{/HostControlArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktConnectivityNode'>MktConnectivityNode: </label><div class='col-sm-8'><input id='MktConnectivityNode' class='form-control' type='text'{{#MktConnectivityNode}} value='{{MktConnectivityNode}}'{{/MktConnectivityNode}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Specifies the schedule for energy transfers between interchange areas that are necessary to satisfy the associated interchange transaction.
         *
         */
        class EnergyTransaction extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EnergyTransaction;
                if (null == bucket)
                   cim_data.EnergyTransaction = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EnergyTransaction[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "EnergyTransaction";
                base.parse_element (/<cim:EnergyTransaction.capacityBacked>([\s\S]*?)<\/cim:EnergyTransaction.capacityBacked>/g, obj, "capacityBacked", base.to_boolean, sub, context);
                base.parse_element (/<cim:EnergyTransaction.congestChargeMax>([\s\S]*?)<\/cim:EnergyTransaction.congestChargeMax>/g, obj, "congestChargeMax", base.to_string, sub, context);
                base.parse_element (/<cim:EnergyTransaction.deliveryPointP>([\s\S]*?)<\/cim:EnergyTransaction.deliveryPointP>/g, obj, "deliveryPointP", base.to_string, sub, context);
                base.parse_element (/<cim:EnergyTransaction.energyMin>([\s\S]*?)<\/cim:EnergyTransaction.energyMin>/g, obj, "energyMin", base.to_string, sub, context);
                base.parse_element (/<cim:EnergyTransaction.firmInterchangeFlag>([\s\S]*?)<\/cim:EnergyTransaction.firmInterchangeFlag>/g, obj, "firmInterchangeFlag", base.to_boolean, sub, context);
                base.parse_element (/<cim:EnergyTransaction.payCongestion>([\s\S]*?)<\/cim:EnergyTransaction.payCongestion>/g, obj, "payCongestion", base.to_boolean, sub, context);
                base.parse_element (/<cim:EnergyTransaction.reason>([\s\S]*?)<\/cim:EnergyTransaction.reason>/g, obj, "reason", base.to_string, sub, context);
                base.parse_element (/<cim:EnergyTransaction.receiptPointP>([\s\S]*?)<\/cim:EnergyTransaction.receiptPointP>/g, obj, "receiptPointP", base.to_string, sub, context);
                base.parse_element (/<cim:EnergyTransaction.state>([\s\S]*?)<\/cim:EnergyTransaction.state>/g, obj, "state", base.to_string, sub, context);
                base.parse_attribute (/<cim:EnergyTransaction.EnergyProduct\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyProduct", sub, context);
                base.parse_attribute (/<cim:EnergyTransaction.TransmissionReservation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionReservation", sub, context);
                base.parse_attribute (/<cim:EnergyTransaction.Export_SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Export_SubControlArea", sub, context);
                base.parse_attribute (/<cim:EnergyTransaction.Import_SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Import_SubControlArea", sub, context);

                var bucket = context.parsed.EnergyTransaction;
                if (null == bucket)
                   context.parsed.EnergyTransaction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "EnergyTransaction", "capacityBacked", base.from_boolean, fields);
                base.export_element (obj, "EnergyTransaction", "congestChargeMax", base.from_string, fields);
                base.export_element (obj, "EnergyTransaction", "deliveryPointP", base.from_string, fields);
                base.export_element (obj, "EnergyTransaction", "energyMin", base.from_string, fields);
                base.export_element (obj, "EnergyTransaction", "firmInterchangeFlag", base.from_boolean, fields);
                base.export_element (obj, "EnergyTransaction", "payCongestion", base.from_boolean, fields);
                base.export_element (obj, "EnergyTransaction", "reason", base.from_string, fields);
                base.export_element (obj, "EnergyTransaction", "receiptPointP", base.from_string, fields);
                base.export_element (obj, "EnergyTransaction", "state", base.from_string, fields);
                base.export_attribute (obj, "EnergyTransaction", "EnergyProduct", fields);
                base.export_attribute (obj, "EnergyTransaction", "TransmissionReservation", fields);
                base.export_attribute (obj, "EnergyTransaction", "Export_SubControlArea", fields);
                base.export_attribute (obj, "EnergyTransaction", "Import_SubControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EnergyTransaction_collapse" aria-expanded="true" aria-controls="EnergyTransaction_collapse" style="margin-left: 10px;">EnergyTransaction</a></legend>
                    <div id="EnergyTransaction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#capacityBacked}}<div><b>capacityBacked</b>: {{capacityBacked}}</div>{{/capacityBacked}}
                    {{#congestChargeMax}}<div><b>congestChargeMax</b>: {{congestChargeMax}}</div>{{/congestChargeMax}}
                    {{#deliveryPointP}}<div><b>deliveryPointP</b>: {{deliveryPointP}}</div>{{/deliveryPointP}}
                    {{#energyMin}}<div><b>energyMin</b>: {{energyMin}}</div>{{/energyMin}}
                    {{#firmInterchangeFlag}}<div><b>firmInterchangeFlag</b>: {{firmInterchangeFlag}}</div>{{/firmInterchangeFlag}}
                    {{#payCongestion}}<div><b>payCongestion</b>: {{payCongestion}}</div>{{/payCongestion}}
                    {{#reason}}<div><b>reason</b>: {{reason}}</div>{{/reason}}
                    {{#receiptPointP}}<div><b>receiptPointP</b>: {{receiptPointP}}</div>{{/receiptPointP}}
                    {{#state}}<div><b>state</b>: {{state}}</div>{{/state}}
                    {{#EnergyProduct}}<div><b>EnergyProduct</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EnergyProduct}}&quot;);})'>{{EnergyProduct}}</a></div>{{/EnergyProduct}}
                    {{#TransmissionReservation}}<div><b>TransmissionReservation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TransmissionReservation}}&quot;);})'>{{TransmissionReservation}}</a></div>{{/TransmissionReservation}}
                    {{#Export_SubControlArea}}<div><b>Export_SubControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Export_SubControlArea}}&quot;);})'>{{Export_SubControlArea}}</a></div>{{/Export_SubControlArea}}
                    {{#Import_SubControlArea}}<div><b>Import_SubControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Import_SubControlArea}}&quot;);})'>{{Import_SubControlArea}}</a></div>{{/Import_SubControlArea}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EnergyTransaction_collapse" aria-expanded="true" aria-controls="EnergyTransaction_collapse" style="margin-left: 10px;">EnergyTransaction</a></legend>
                    <div id="EnergyTransaction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='capacityBacked'>capacityBacked: </label><div class='col-sm-8'><input id='capacityBacked' class='form-check-input' type='checkbox'{{#capacityBacked}} checked{{/capacityBacked}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='congestChargeMax'>congestChargeMax: </label><div class='col-sm-8'><input id='congestChargeMax' class='form-control' type='text'{{#congestChargeMax}} value='{{congestChargeMax}}'{{/congestChargeMax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='deliveryPointP'>deliveryPointP: </label><div class='col-sm-8'><input id='deliveryPointP' class='form-control' type='text'{{#deliveryPointP}} value='{{deliveryPointP}}'{{/deliveryPointP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='energyMin'>energyMin: </label><div class='col-sm-8'><input id='energyMin' class='form-control' type='text'{{#energyMin}} value='{{energyMin}}'{{/energyMin}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='firmInterchangeFlag'>firmInterchangeFlag: </label><div class='col-sm-8'><input id='firmInterchangeFlag' class='form-check-input' type='checkbox'{{#firmInterchangeFlag}} checked{{/firmInterchangeFlag}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='payCongestion'>payCongestion: </label><div class='col-sm-8'><input id='payCongestion' class='form-check-input' type='checkbox'{{#payCongestion}} checked{{/payCongestion}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='reason'>reason: </label><div class='col-sm-8'><input id='reason' class='form-control' type='text'{{#reason}} value='{{reason}}'{{/reason}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='receiptPointP'>receiptPointP: </label><div class='col-sm-8'><input id='receiptPointP' class='form-control' type='text'{{#receiptPointP}} value='{{receiptPointP}}'{{/receiptPointP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='state'>state: </label><div class='col-sm-8'><input id='state' class='form-control' type='text'{{#state}} value='{{state}}'{{/state}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='EnergyProduct'>EnergyProduct: </label><div class='col-sm-8'><input id='EnergyProduct' class='form-control' type='text'{{#EnergyProduct}} value='{{EnergyProduct}}'{{/EnergyProduct}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TransmissionReservation'>TransmissionReservation: </label><div class='col-sm-8'><input id='TransmissionReservation' class='form-control' type='text'{{#TransmissionReservation}} value='{{TransmissionReservation}}'{{/TransmissionReservation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Export_SubControlArea'>Export_SubControlArea: </label><div class='col-sm-8'><input id='Export_SubControlArea' class='form-control' type='text'{{#Export_SubControlArea}} value='{{Export_SubControlArea}}'{{/Export_SubControlArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Import_SubControlArea'>Import_SubControlArea: </label><div class='col-sm-8'><input id='Import_SubControlArea' class='form-control' type='text'{{#Import_SubControlArea}} value='{{Import_SubControlArea}}'{{/Import_SubControlArea}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Optimal Power Flow or State Estimator Load Data for OTS.
         *
         * This is used for RealTime, Study and Maintenance Users
         *
         */
        class EnergyConsumerData extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EnergyConsumerData;
                if (null == bucket)
                   cim_data.EnergyConsumerData = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EnergyConsumerData[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "EnergyConsumerData";
                base.parse_element (/<cim:EnergyConsumerData.loadMVAR>([\s\S]*?)<\/cim:EnergyConsumerData.loadMVAR>/g, obj, "loadMVAR", base.to_float, sub, context);
                base.parse_element (/<cim:EnergyConsumerData.loadMW>([\s\S]*?)<\/cim:EnergyConsumerData.loadMW>/g, obj, "loadMW", base.to_float, sub, context);
                base.parse_attribute (/<cim:EnergyConsumerData.MktEnergyConsumer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktEnergyConsumer", sub, context);

                var bucket = context.parsed.EnergyConsumerData;
                if (null == bucket)
                   context.parsed.EnergyConsumerData = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "EnergyConsumerData", "loadMVAR", base.from_float, fields);
                base.export_element (obj, "EnergyConsumerData", "loadMW", base.from_float, fields);
                base.export_attribute (obj, "EnergyConsumerData", "MktEnergyConsumer", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EnergyConsumerData_collapse" aria-expanded="true" aria-controls="EnergyConsumerData_collapse" style="margin-left: 10px;">EnergyConsumerData</a></legend>
                    <div id="EnergyConsumerData_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#loadMVAR}}<div><b>loadMVAR</b>: {{loadMVAR}}</div>{{/loadMVAR}}
                    {{#loadMW}}<div><b>loadMW</b>: {{loadMW}}</div>{{/loadMW}}
                    {{#MktEnergyConsumer}}<div><b>MktEnergyConsumer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktEnergyConsumer}}&quot;);})'>{{MktEnergyConsumer}}</a></div>{{/MktEnergyConsumer}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EnergyConsumerData_collapse" aria-expanded="true" aria-controls="EnergyConsumerData_collapse" style="margin-left: 10px;">EnergyConsumerData</a></legend>
                    <div id="EnergyConsumerData_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='loadMVAR'>loadMVAR: </label><div class='col-sm-8'><input id='loadMVAR' class='form-control' type='text'{{#loadMVAR}} value='{{loadMVAR}}'{{/loadMVAR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='loadMW'>loadMW: </label><div class='col-sm-8'><input id='loadMW' class='form-control' type='text'{{#loadMW}} value='{{loadMW}}'{{/loadMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktEnergyConsumer'>MktEnergyConsumer: </label><div class='col-sm-8'><input id='MktEnergyConsumer' class='form-control' type='text'{{#MktEnergyConsumer}} value='{{MktEnergyConsumer}}'{{/MktEnergyConsumer}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Typical for regional transmission operators (RTOs), these constraints include transmission as well as generation group constraints identified in both base case and critical contingency cases.
         *
         */
        class SecurityConstraints extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SecurityConstraints;
                if (null == bucket)
                   cim_data.SecurityConstraints = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SecurityConstraints[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "SecurityConstraints";
                base.parse_element (/<cim:SecurityConstraints.minMW>([\s\S]*?)<\/cim:SecurityConstraints.minMW>/g, obj, "minMW", base.to_string, sub, context);
                base.parse_element (/<cim:SecurityConstraints.maxMW>([\s\S]*?)<\/cim:SecurityConstraints.maxMW>/g, obj, "maxMW", base.to_string, sub, context);
                base.parse_element (/<cim:SecurityConstraints.actualMW>([\s\S]*?)<\/cim:SecurityConstraints.actualMW>/g, obj, "actualMW", base.to_string, sub, context);
                base.parse_attribute (/<cim:SecurityConstraints.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);
                base.parse_attribute (/<cim:SecurityConstraints.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
                base.parse_attribute (/<cim:SecurityConstraints.GeneratingBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingBid", sub, context);

                var bucket = context.parsed.SecurityConstraints;
                if (null == bucket)
                   context.parsed.SecurityConstraints = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "SecurityConstraints", "minMW", base.from_string, fields);
                base.export_element (obj, "SecurityConstraints", "maxMW", base.from_string, fields);
                base.export_element (obj, "SecurityConstraints", "actualMW", base.from_string, fields);
                base.export_attribute (obj, "SecurityConstraints", "RTO", fields);
                base.export_attribute (obj, "SecurityConstraints", "Flowgate", fields);
                base.export_attribute (obj, "SecurityConstraints", "GeneratingBid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SecurityConstraints_collapse" aria-expanded="true" aria-controls="SecurityConstraints_collapse" style="margin-left: 10px;">SecurityConstraints</a></legend>
                    <div id="SecurityConstraints_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#minMW}}<div><b>minMW</b>: {{minMW}}</div>{{/minMW}}
                    {{#maxMW}}<div><b>maxMW</b>: {{maxMW}}</div>{{/maxMW}}
                    {{#actualMW}}<div><b>actualMW</b>: {{actualMW}}</div>{{/actualMW}}
                    {{#RTO}}<div><b>RTO</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RTO}}&quot;);})'>{{RTO}}</a></div>{{/RTO}}
                    {{#Flowgate}}<div><b>Flowgate</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Flowgate}}&quot;);})'>{{Flowgate}}</a></div>{{/Flowgate}}
                    {{#GeneratingBid}}<div><b>GeneratingBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GeneratingBid}}&quot;);})'>{{GeneratingBid}}</a></div>{{/GeneratingBid}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SecurityConstraints_collapse" aria-expanded="true" aria-controls="SecurityConstraints_collapse" style="margin-left: 10px;">SecurityConstraints</a></legend>
                    <div id="SecurityConstraints_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minMW'>minMW: </label><div class='col-sm-8'><input id='minMW' class='form-control' type='text'{{#minMW}} value='{{minMW}}'{{/minMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxMW'>maxMW: </label><div class='col-sm-8'><input id='maxMW' class='form-control' type='text'{{#maxMW}} value='{{maxMW}}'{{/maxMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='actualMW'>actualMW: </label><div class='col-sm-8'><input id='actualMW' class='form-control' type='text'{{#actualMW}} value='{{actualMW}}'{{/actualMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RTO'>RTO: </label><div class='col-sm-8'><input id='RTO' class='form-control' type='text'{{#RTO}} value='{{RTO}}'{{/RTO}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Flowgate'>Flowgate: </label><div class='col-sm-8'><input id='Flowgate' class='form-control' type='text'{{#Flowgate}} value='{{Flowgate}}'{{/Flowgate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='GeneratingBid'>GeneratingBid: </label><div class='col-sm-8'><input id='GeneratingBid' class='form-control' type='text'{{#GeneratingBid}} value='{{GeneratingBid}}'{{/GeneratingBid}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Typically provided by RTO systems, constraints identified in both base case and critical contingency cases have to be transferred.
         *
         * A constraint has N (&gt;=1) constraint terms. A term is represented by an
         *
         */
        class SecurityConstraintSum extends MarketPlan.MarketFactors
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SecurityConstraintSum;
                if (null == bucket)
                   cim_data.SecurityConstraintSum = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SecurityConstraintSum[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "SecurityConstraintSum";
                base.parse_attribute (/<cim:SecurityConstraintSum.DefaultConstraintLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DefaultConstraintLimit", sub, context);
                base.parse_attribute (/<cim:SecurityConstraintSum.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);
                base.parse_attribute (/<cim:SecurityConstraintSum.BaseCaseConstraintLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BaseCaseConstraintLimit", sub, context);

                var bucket = context.parsed.SecurityConstraintSum;
                if (null == bucket)
                   context.parsed.SecurityConstraintSum = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "SecurityConstraintSum", "DefaultConstraintLimit", fields);
                base.export_attribute (obj, "SecurityConstraintSum", "RTO", fields);
                base.export_attribute (obj, "SecurityConstraintSum", "BaseCaseConstraintLimit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SecurityConstraintSum_collapse" aria-expanded="true" aria-controls="SecurityConstraintSum_collapse" style="margin-left: 10px;">SecurityConstraintSum</a></legend>
                    <div id="SecurityConstraintSum_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.template.call (this) +
                    `
                    {{#DefaultConstraintLimit}}<div><b>DefaultConstraintLimit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DefaultConstraintLimit}}&quot;);})'>{{DefaultConstraintLimit}}</a></div>{{/DefaultConstraintLimit}}
                    {{#RTO}}<div><b>RTO</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RTO}}&quot;);})'>{{RTO}}</a></div>{{/RTO}}
                    {{#BaseCaseConstraintLimit}}<div><b>BaseCaseConstraintLimit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{BaseCaseConstraintLimit}}&quot;);})'>{{BaseCaseConstraintLimit}}</a></div>{{/BaseCaseConstraintLimit}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SecurityConstraintSum_collapse" aria-expanded="true" aria-controls="SecurityConstraintSum_collapse" style="margin-left: 10px;">SecurityConstraintSum</a></legend>
                    <div id="SecurityConstraintSum_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='DefaultConstraintLimit'>DefaultConstraintLimit: </label><div class='col-sm-8'><input id='DefaultConstraintLimit' class='form-control' type='text'{{#DefaultConstraintLimit}} value='{{DefaultConstraintLimit}}'{{/DefaultConstraintLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RTO'>RTO: </label><div class='col-sm-8'><input id='RTO' class='form-control' type='text'{{#RTO}} value='{{RTO}}'{{/RTO}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='BaseCaseConstraintLimit'>BaseCaseConstraintLimit: </label><div class='col-sm-8'><input id='BaseCaseConstraintLimit' class='form-control' type='text'{{#BaseCaseConstraintLimit}} value='{{BaseCaseConstraintLimit}}'{{/BaseCaseConstraintLimit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Maximum MW and optionally Minimum MW (Y1 and Y2, respectively)
         *
         */
        class MWLimitSchedule extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MWLimitSchedule;
                if (null == bucket)
                   cim_data.MWLimitSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MWLimitSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MWLimitSchedule";
                base.parse_attribute (/<cim:MWLimitSchedule.SecurityConstraintLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SecurityConstraintLimit", sub, context);

                var bucket = context.parsed.MWLimitSchedule;
                if (null == bucket)
                   context.parsed.MWLimitSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_attribute (obj, "MWLimitSchedule", "SecurityConstraintLimit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MWLimitSchedule_collapse" aria-expanded="true" aria-controls="MWLimitSchedule_collapse" style="margin-left: 10px;">MWLimitSchedule</a></legend>
                    <div id="MWLimitSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#SecurityConstraintLimit}}<div><b>SecurityConstraintLimit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SecurityConstraintLimit}}&quot;);})'>{{SecurityConstraintLimit}}</a></div>{{/SecurityConstraintLimit}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MWLimitSchedule_collapse" aria-expanded="true" aria-controls="MWLimitSchedule_collapse" style="margin-left: 10px;">MWLimitSchedule</a></legend>
                    <div id="MWLimitSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SecurityConstraintLimit'>SecurityConstraintLimit: </label><div class='col-sm-8'><input id='SecurityConstraintLimit' class='form-control' type='text'{{#SecurityConstraintLimit}} value='{{SecurityConstraintLimit}}'{{/SecurityConstraintLimit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Area load curve definition.
         *
         */
        class AreaLoadCurve extends Core.RegularIntervalSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AreaLoadCurve;
                if (null == bucket)
                   cim_data.AreaLoadCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AreaLoadCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.RegularIntervalSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "AreaLoadCurve";
                base.parse_element (/<cim:AreaLoadCurve.forecastType>([\s\S]*?)<\/cim:AreaLoadCurve.forecastType>/g, obj, "forecastType", base.to_string, sub, context);
                base.parse_attribute (/<cim:AreaLoadCurve.AggregateNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AggregateNode", sub, context);
                base.parse_attribute (/<cim:AreaLoadCurve.TACArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TACArea", sub, context);
                base.parse_attribute (/<cim:AreaLoadCurve.MktLoadArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktLoadArea", sub, context);

                var bucket = context.parsed.AreaLoadCurve;
                if (null == bucket)
                   context.parsed.AreaLoadCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.RegularIntervalSchedule.prototype.export.call (this, obj, false);

                base.export_element (obj, "AreaLoadCurve", "forecastType", base.from_string, fields);
                base.export_attribute (obj, "AreaLoadCurve", "AggregateNode", fields);
                base.export_attribute (obj, "AreaLoadCurve", "TACArea", fields);
                base.export_attribute (obj, "AreaLoadCurve", "MktLoadArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AreaLoadCurve_collapse" aria-expanded="true" aria-controls="AreaLoadCurve_collapse" style="margin-left: 10px;">AreaLoadCurve</a></legend>
                    <div id="AreaLoadCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.RegularIntervalSchedule.prototype.template.call (this) +
                    `
                    {{#forecastType}}<div><b>forecastType</b>: {{forecastType}}</div>{{/forecastType}}
                    {{#AggregateNode}}<div><b>AggregateNode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AggregateNode}}&quot;);})'>{{AggregateNode}}</a></div>{{/AggregateNode}}
                    {{#TACArea}}<div><b>TACArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TACArea}}&quot;);})'>{{TACArea}}</a></div>{{/TACArea}}
                    {{#MktLoadArea}}<div><b>MktLoadArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktLoadArea}}&quot;);})'>{{MktLoadArea}}</a></div>{{/MktLoadArea}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AreaLoadCurve_collapse" aria-expanded="true" aria-controls="AreaLoadCurve_collapse" style="margin-left: 10px;">AreaLoadCurve</a></legend>
                    <div id="AreaLoadCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.RegularIntervalSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='forecastType'>forecastType: </label><div class='col-sm-8'><input id='forecastType' class='form-control' type='text'{{#forecastType}} value='{{forecastType}}'{{/forecastType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AggregateNode'>AggregateNode: </label><div class='col-sm-8'><input id='AggregateNode' class='form-control' type='text'{{#AggregateNode}} value='{{AggregateNode}}'{{/AggregateNode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TACArea'>TACArea: </label><div class='col-sm-8'><input id='TACArea' class='form-control' type='text'{{#TACArea}} value='{{TACArea}}'{{/TACArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktLoadArea'>MktLoadArea: </label><div class='col-sm-8'><input id='MktLoadArea' class='form-control' type='text'{{#MktLoadArea}} value='{{MktLoadArea}}'{{/MktLoadArea}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Reserve demand curve.
         *
         * Models maximum quantities of reserve required per Market Region and models a reserve demand curve for the minimum quantities of reserve. The ReserveDemandCurve is a relationship between unit operating reserve price in \$/MWhr (Y-axis) and unit reserves in MW (X-axis).
         *
         */
        class ReserveDemandCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ReserveDemandCurve;
                if (null == bucket)
                   cim_data.ReserveDemandCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ReserveDemandCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "ReserveDemandCurve";
                base.parse_element (/<cim:ReserveDemandCurve.reqMaxMW>([\s\S]*?)<\/cim:ReserveDemandCurve.reqMaxMW>/g, obj, "reqMaxMW", base.to_float, sub, context);
                base.parse_element (/<cim:ReserveDemandCurve.reserveRequirementType>([\s\S]*?)<\/cim:ReserveDemandCurve.reserveRequirementType>/g, obj, "reserveRequirementType", base.to_string, sub, context);
                base.parse_attribute (/<cim:ReserveDemandCurve.ASRequirements\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ASRequirements", sub, context);
                base.parse_attribute (/<cim:ReserveDemandCurve.MarketRegion\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketRegion", sub, context);

                var bucket = context.parsed.ReserveDemandCurve;
                if (null == bucket)
                   context.parsed.ReserveDemandCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "ReserveDemandCurve", "reqMaxMW", base.from_float, fields);
                base.export_element (obj, "ReserveDemandCurve", "reserveRequirementType", base.from_string, fields);
                base.export_attribute (obj, "ReserveDemandCurve", "ASRequirements", fields);
                base.export_attribute (obj, "ReserveDemandCurve", "MarketRegion", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ReserveDemandCurve_collapse" aria-expanded="true" aria-controls="ReserveDemandCurve_collapse" style="margin-left: 10px;">ReserveDemandCurve</a></legend>
                    <div id="ReserveDemandCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#reqMaxMW}}<div><b>reqMaxMW</b>: {{reqMaxMW}}</div>{{/reqMaxMW}}
                    {{#reserveRequirementType}}<div><b>reserveRequirementType</b>: {{reserveRequirementType}}</div>{{/reserveRequirementType}}
                    {{#ASRequirements}}<div><b>ASRequirements</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ASRequirements}}&quot;);})'>{{ASRequirements}}</a></div>{{/ASRequirements}}
                    {{#MarketRegion}}<div><b>MarketRegion</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MarketRegion}}&quot;);})'>{{MarketRegion}}</a></div>{{/MarketRegion}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ReserveDemandCurve_collapse" aria-expanded="true" aria-controls="ReserveDemandCurve_collapse" style="margin-left: 10px;">ReserveDemandCurve</a></legend>
                    <div id="ReserveDemandCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='reqMaxMW'>reqMaxMW: </label><div class='col-sm-8'><input id='reqMaxMW' class='form-control' type='text'{{#reqMaxMW}} value='{{reqMaxMW}}'{{/reqMaxMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='reserveRequirementType'>reserveRequirementType: </label><div class='col-sm-8'><input id='reserveRequirementType' class='form-control' type='text'{{#reserveRequirementType}} value='{{reserveRequirementType}}'{{/reserveRequirementType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ASRequirements'>ASRequirements: </label><div class='col-sm-8'><input id='ASRequirements' class='form-control' type='text'{{#ASRequirements}} value='{{ASRequirements}}'{{/ASRequirements}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MarketRegion'>MarketRegion: </label><div class='col-sm-8'><input id='MarketRegion' class='form-control' type='text'{{#MarketRegion}} value='{{MarketRegion}}'{{/MarketRegion}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Contains information about the update from SCADA
         *
         */
        class SCADAInformation extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SCADAInformation;
                if (null == bucket)
                   cim_data.SCADAInformation = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SCADAInformation[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SCADAInformation";
                base.parse_element (/<cim:SCADAInformation.timeStamp>([\s\S]*?)<\/cim:SCADAInformation.timeStamp>/g, obj, "timeStamp", base.to_datetime, sub, context);

                var bucket = context.parsed.SCADAInformation;
                if (null == bucket)
                   context.parsed.SCADAInformation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "SCADAInformation", "timeStamp", base.from_datetime, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SCADAInformation_collapse" aria-expanded="true" aria-controls="SCADAInformation_collapse" style="margin-left: 10px;">SCADAInformation</a></legend>
                    <div id="SCADAInformation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#timeStamp}}<div><b>timeStamp</b>: {{timeStamp}}</div>{{/timeStamp}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SCADAInformation_collapse" aria-expanded="true" aria-controls="SCADAInformation_collapse" style="margin-left: 10px;">SCADAInformation</a></legend>
                    <div id="SCADAInformation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='timeStamp'>timeStamp: </label><div class='col-sm-8'><input id='timeStamp' class='form-control' type='text'{{#timeStamp}} value='{{timeStamp}}'{{/timeStamp}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Optimal Power Flow or State Estimator Circuit Breaker Status.
         *
         */
        class SwitchStatus extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SwitchStatus;
                if (null == bucket)
                   cim_data.SwitchStatus = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SwitchStatus[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SwitchStatus";
                base.parse_element (/<cim:SwitchStatus.switchStatus>([\s\S]*?)<\/cim:SwitchStatus.switchStatus>/g, obj, "switchStatus", base.to_string, sub, context);
                base.parse_attribute (/<cim:SwitchStatus.MktSwitch\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktSwitch", sub, context);

                var bucket = context.parsed.SwitchStatus;
                if (null == bucket)
                   context.parsed.SwitchStatus = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "SwitchStatus", "switchStatus", base.from_string, fields);
                base.export_attribute (obj, "SwitchStatus", "MktSwitch", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SwitchStatus_collapse" aria-expanded="true" aria-controls="SwitchStatus_collapse" style="margin-left: 10px;">SwitchStatus</a></legend>
                    <div id="SwitchStatus_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#switchStatus}}<div><b>switchStatus</b>: {{switchStatus}}</div>{{/switchStatus}}
                    {{#MktSwitch}}<div><b>MktSwitch</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktSwitch}}&quot;);})'>{{MktSwitch}}</a></div>{{/MktSwitch}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SwitchStatus_collapse" aria-expanded="true" aria-controls="SwitchStatus_collapse" style="margin-left: 10px;">SwitchStatus</a></legend>
                    <div id="SwitchStatus_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='switchStatus'>switchStatus: </label><div class='col-sm-8'><input id='switchStatus' class='form-control' type='text'{{#switchStatus}} value='{{switchStatus}}'{{/switchStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktSwitch'>MktSwitch: </label><div class='col-sm-8'><input id='MktSwitch' class='form-control' type='text'{{#MktSwitch}} value='{{MktSwitch}}'{{/MktSwitch}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Data for profile.
         *
         */
        class ProfileData extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ProfileData;
                if (null == bucket)
                   cim_data.ProfileData = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ProfileData[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ProfileData";
                base.parse_element (/<cim:ProfileData.bidPrice>([\s\S]*?)<\/cim:ProfileData.bidPrice>/g, obj, "bidPrice", base.to_float, sub, context);
                base.parse_element (/<cim:ProfileData.capacityLevel>([\s\S]*?)<\/cim:ProfileData.capacityLevel>/g, obj, "capacityLevel", base.to_string, sub, context);
                base.parse_element (/<cim:ProfileData.energyLevel>([\s\S]*?)<\/cim:ProfileData.energyLevel>/g, obj, "energyLevel", base.to_string, sub, context);
                base.parse_element (/<cim:ProfileData.minimumLevel>([\s\S]*?)<\/cim:ProfileData.minimumLevel>/g, obj, "minimumLevel", base.to_float, sub, context);
                base.parse_element (/<cim:ProfileData.sequenceNumber>([\s\S]*?)<\/cim:ProfileData.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
                base.parse_element (/<cim:ProfileData.startDateTime>([\s\S]*?)<\/cim:ProfileData.startDateTime>/g, obj, "startDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:ProfileData.stopDateTime>([\s\S]*?)<\/cim:ProfileData.stopDateTime>/g, obj, "stopDateTime", base.to_datetime, sub, context);

                var bucket = context.parsed.ProfileData;
                if (null == bucket)
                   context.parsed.ProfileData = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ProfileData", "bidPrice", base.from_float, fields);
                base.export_element (obj, "ProfileData", "capacityLevel", base.from_string, fields);
                base.export_element (obj, "ProfileData", "energyLevel", base.from_string, fields);
                base.export_element (obj, "ProfileData", "minimumLevel", base.from_float, fields);
                base.export_element (obj, "ProfileData", "sequenceNumber", base.from_string, fields);
                base.export_element (obj, "ProfileData", "startDateTime", base.from_datetime, fields);
                base.export_element (obj, "ProfileData", "stopDateTime", base.from_datetime, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ProfileData_collapse" aria-expanded="true" aria-controls="ProfileData_collapse" style="margin-left: 10px;">ProfileData</a></legend>
                    <div id="ProfileData_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#bidPrice}}<div><b>bidPrice</b>: {{bidPrice}}</div>{{/bidPrice}}
                    {{#capacityLevel}}<div><b>capacityLevel</b>: {{capacityLevel}}</div>{{/capacityLevel}}
                    {{#energyLevel}}<div><b>energyLevel</b>: {{energyLevel}}</div>{{/energyLevel}}
                    {{#minimumLevel}}<div><b>minimumLevel</b>: {{minimumLevel}}</div>{{/minimumLevel}}
                    {{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
                    {{#startDateTime}}<div><b>startDateTime</b>: {{startDateTime}}</div>{{/startDateTime}}
                    {{#stopDateTime}}<div><b>stopDateTime</b>: {{stopDateTime}}</div>{{/stopDateTime}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ProfileData_collapse" aria-expanded="true" aria-controls="ProfileData_collapse" style="margin-left: 10px;">ProfileData</a></legend>
                    <div id="ProfileData_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='bidPrice'>bidPrice: </label><div class='col-sm-8'><input id='bidPrice' class='form-control' type='text'{{#bidPrice}} value='{{bidPrice}}'{{/bidPrice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='capacityLevel'>capacityLevel: </label><div class='col-sm-8'><input id='capacityLevel' class='form-control' type='text'{{#capacityLevel}} value='{{capacityLevel}}'{{/capacityLevel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='energyLevel'>energyLevel: </label><div class='col-sm-8'><input id='energyLevel' class='form-control' type='text'{{#energyLevel}} value='{{energyLevel}}'{{/energyLevel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minimumLevel'>minimumLevel: </label><div class='col-sm-8'><input id='minimumLevel' class='form-control' type='text'{{#minimumLevel}} value='{{minimumLevel}}'{{/minimumLevel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='sequenceNumber'>sequenceNumber: </label><div class='col-sm-8'><input id='sequenceNumber' class='form-control' type='text'{{#sequenceNumber}} value='{{sequenceNumber}}'{{/sequenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startDateTime'>startDateTime: </label><div class='col-sm-8'><input id='startDateTime' class='form-control' type='text'{{#startDateTime}} value='{{startDateTime}}'{{/startDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='stopDateTime'>stopDateTime: </label><div class='col-sm-8'><input id='stopDateTime' class='form-control' type='text'{{#stopDateTime}} value='{{stopDateTime}}'{{/stopDateTime}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Curve data for default bid curve and startup cost curve.
         *
         */
        class DefaultBidCurveData extends Core.CurveData
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DefaultBidCurveData;
                if (null == bucket)
                   cim_data.DefaultBidCurveData = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DefaultBidCurveData[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.CurveData.prototype.parse.call (this, context, sub);
                obj.cls = "DefaultBidCurveData";
                base.parse_element (/<cim:DefaultBidCurveData.bidSegmentCalcType>([\s\S]*?)<\/cim:DefaultBidCurveData.bidSegmentCalcType>/g, obj, "bidSegmentCalcType", base.to_string, sub, context);

                var bucket = context.parsed.DefaultBidCurveData;
                if (null == bucket)
                   context.parsed.DefaultBidCurveData = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.CurveData.prototype.export.call (this, obj, false);

                base.export_element (obj, "DefaultBidCurveData", "bidSegmentCalcType", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DefaultBidCurveData_collapse" aria-expanded="true" aria-controls="DefaultBidCurveData_collapse" style="margin-left: 10px;">DefaultBidCurveData</a></legend>
                    <div id="DefaultBidCurveData_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.CurveData.prototype.template.call (this) +
                    `
                    {{#bidSegmentCalcType}}<div><b>bidSegmentCalcType</b>: {{bidSegmentCalcType}}</div>{{/bidSegmentCalcType}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DefaultBidCurveData_collapse" aria-expanded="true" aria-controls="DefaultBidCurveData_collapse" style="margin-left: 10px;">DefaultBidCurveData</a></legend>
                    <div id="DefaultBidCurveData_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.CurveData.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='bidSegmentCalcType'>bidSegmentCalcType: </label><div class='col-sm-8'><input id='bidSegmentCalcType' class='form-control' type='text'{{#bidSegmentCalcType}} value='{{bidSegmentCalcType}}'{{/bidSegmentCalcType}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Subclass of IEC61970:Wires:Switch
         *
         */
        class MktSwitch extends Wires.Switch
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktSwitch;
                if (null == bucket)
                   cim_data.MktSwitch = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktSwitch[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Wires.Switch.prototype.parse.call (this, context, sub);
                obj.cls = "MktSwitch";

                var bucket = context.parsed.MktSwitch;
                if (null == bucket)
                   context.parsed.MktSwitch = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Wires.Switch.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MktSwitch_collapse" aria-expanded="true" aria-controls="MktSwitch_collapse" style="margin-left: 10px;">MktSwitch</a></legend>
                    <div id="MktSwitch_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Wires.Switch.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MktSwitch_collapse" aria-expanded="true" aria-controls="MktSwitch_collapse" style="margin-left: 10px;">MktSwitch</a></legend>
                    <div id="MktSwitch_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Wires.Switch.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Possibly time-varying max MW or MVA and optionally Min MW limit or MVA limit (Y1 and Y2, respectively) assigned to a contingency analysis base case.
         *
         * Use CurveSchedule XAxisUnits to specify MW or MVA. To be used only if the BaseCaseConstraintLimit differs from the DefaultConstraintLimit.
         *
         */
        class BaseCaseConstraintLimit extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BaseCaseConstraintLimit;
                if (null == bucket)
                   cim_data.BaseCaseConstraintLimit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BaseCaseConstraintLimit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "BaseCaseConstraintLimit";
                base.parse_attribute (/<cim:BaseCaseConstraintLimit.SecurityConstraintSum\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SecurityConstraintSum", sub, context);

                var bucket = context.parsed.BaseCaseConstraintLimit;
                if (null == bucket)
                   context.parsed.BaseCaseConstraintLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "BaseCaseConstraintLimit", "SecurityConstraintSum", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BaseCaseConstraintLimit_collapse" aria-expanded="true" aria-controls="BaseCaseConstraintLimit_collapse" style="margin-left: 10px;">BaseCaseConstraintLimit</a></legend>
                    <div id="BaseCaseConstraintLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#SecurityConstraintSum}}<div><b>SecurityConstraintSum</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SecurityConstraintSum}}&quot;);})'>{{SecurityConstraintSum}}</a></div>{{/SecurityConstraintSum}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BaseCaseConstraintLimit_collapse" aria-expanded="true" aria-controls="BaseCaseConstraintLimit_collapse" style="margin-left: 10px;">BaseCaseConstraintLimit</a></legend>
                    <div id="BaseCaseConstraintLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SecurityConstraintSum'>SecurityConstraintSum: </label><div class='col-sm-8'><input id='SecurityConstraintSum' class='form-control' type='text'{{#SecurityConstraintSum}} value='{{SecurityConstraintSum}}'{{/SecurityConstraintSum}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Measurement quality flags for Discrete Values.
         *
         */
        class DiscreteMeasurementValueQuality extends Meas.MeasurementValueQuality
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DiscreteMeasurementValueQuality;
                if (null == bucket)
                   cim_data.DiscreteMeasurementValueQuality = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DiscreteMeasurementValueQuality[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Meas.MeasurementValueQuality.prototype.parse.call (this, context, sub);
                obj.cls = "DiscreteMeasurementValueQuality";
                base.parse_element (/<cim:DiscreteMeasurementValueQuality.manualReplaceIndicator>([\s\S]*?)<\/cim:DiscreteMeasurementValueQuality.manualReplaceIndicator>/g, obj, "manualReplaceIndicator", base.to_boolean, sub, context);
                base.parse_element (/<cim:DiscreteMeasurementValueQuality.removeFromOperationIndicator>([\s\S]*?)<\/cim:DiscreteMeasurementValueQuality.removeFromOperationIndicator>/g, obj, "removeFromOperationIndicator", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:DiscreteMeasurementValueQuality.MktDiscreteValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktDiscreteValue", sub, context);

                var bucket = context.parsed.DiscreteMeasurementValueQuality;
                if (null == bucket)
                   context.parsed.DiscreteMeasurementValueQuality = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Meas.MeasurementValueQuality.prototype.export.call (this, obj, false);

                base.export_element (obj, "DiscreteMeasurementValueQuality", "manualReplaceIndicator", base.from_boolean, fields);
                base.export_element (obj, "DiscreteMeasurementValueQuality", "removeFromOperationIndicator", base.from_boolean, fields);
                base.export_attribute (obj, "DiscreteMeasurementValueQuality", "MktDiscreteValue", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DiscreteMeasurementValueQuality_collapse" aria-expanded="true" aria-controls="DiscreteMeasurementValueQuality_collapse" style="margin-left: 10px;">DiscreteMeasurementValueQuality</a></legend>
                    <div id="DiscreteMeasurementValueQuality_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Meas.MeasurementValueQuality.prototype.template.call (this) +
                    `
                    {{#manualReplaceIndicator}}<div><b>manualReplaceIndicator</b>: {{manualReplaceIndicator}}</div>{{/manualReplaceIndicator}}
                    {{#removeFromOperationIndicator}}<div><b>removeFromOperationIndicator</b>: {{removeFromOperationIndicator}}</div>{{/removeFromOperationIndicator}}
                    {{#MktDiscreteValue}}<div><b>MktDiscreteValue</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktDiscreteValue}}&quot;);})'>{{MktDiscreteValue}}</a></div>{{/MktDiscreteValue}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DiscreteMeasurementValueQuality_collapse" aria-expanded="true" aria-controls="DiscreteMeasurementValueQuality_collapse" style="margin-left: 10px;">DiscreteMeasurementValueQuality</a></legend>
                    <div id="DiscreteMeasurementValueQuality_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Meas.MeasurementValueQuality.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='manualReplaceIndicator'>manualReplaceIndicator: </label><div class='col-sm-8'><input id='manualReplaceIndicator' class='form-check-input' type='checkbox'{{#manualReplaceIndicator}} checked{{/manualReplaceIndicator}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='removeFromOperationIndicator'>removeFromOperationIndicator: </label><div class='col-sm-8'><input id='removeFromOperationIndicator' class='form-check-input' type='checkbox'{{#removeFromOperationIndicator}} checked{{/removeFromOperationIndicator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktDiscreteValue'>MktDiscreteValue: </label><div class='col-sm-8'><input id='MktDiscreteValue' class='form-control' type='text'{{#MktDiscreteValue}} value='{{MktDiscreteValue}}'{{/MktDiscreteValue}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Subclass of IEC61970:Wires:TapChanger
         *
         */
        class MktTapChanger extends Wires.TapChanger
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktTapChanger;
                if (null == bucket)
                   cim_data.MktTapChanger = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktTapChanger[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Wires.TapChanger.prototype.parse.call (this, context, sub);
                obj.cls = "MktTapChanger";

                var bucket = context.parsed.MktTapChanger;
                if (null == bucket)
                   context.parsed.MktTapChanger = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Wires.TapChanger.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MktTapChanger_collapse" aria-expanded="true" aria-controls="MktTapChanger_collapse" style="margin-left: 10px;">MktTapChanger</a></legend>
                    <div id="MktTapChanger_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Wires.TapChanger.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MktTapChanger_collapse" aria-expanded="true" aria-controls="MktTapChanger_collapse" style="margin-left: 10px;">MktTapChanger</a></legend>
                    <div id="MktTapChanger_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Wires.TapChanger.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * DefaultBid is a generic class to hold Default Energy Bid, Default Startup Bid, and Default Minimum Load Bid:
         * 
         * Default Energy Bid
         * A Default Energy Bid is a monotonically increasing staircase function consisting at maximum 10 economic bid segments, or 10 (\$/MW, MW) pairs.
         *
         * There are three methods for determining the Default Energy Bid:
         *
         */
        class DefaultBid extends ParticipantInterfaces.Bid
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DefaultBid;
                if (null == bucket)
                   cim_data.DefaultBid = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DefaultBid[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ParticipantInterfaces.Bid.prototype.parse.call (this, context, sub);
                obj.cls = "DefaultBid";
                base.parse_element (/<cim:DefaultBid.bidType>([\s\S]*?)<\/cim:DefaultBid.bidType>/g, obj, "bidType", base.to_string, sub, context);
                base.parse_element (/<cim:DefaultBid.minLoadCost>([\s\S]*?)<\/cim:DefaultBid.minLoadCost>/g, obj, "minLoadCost", base.to_string, sub, context);
                base.parse_element (/<cim:DefaultBid.peakFlag>([\s\S]*?)<\/cim:DefaultBid.peakFlag>/g, obj, "peakFlag", base.to_string, sub, context);
                base.parse_attribute (/<cim:DefaultBid.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                base.parse_attribute (/<cim:DefaultBid.DefaultBidCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DefaultBidCurve", sub, context);

                var bucket = context.parsed.DefaultBid;
                if (null == bucket)
                   context.parsed.DefaultBid = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ParticipantInterfaces.Bid.prototype.export.call (this, obj, false);

                base.export_element (obj, "DefaultBid", "bidType", base.from_string, fields);
                base.export_element (obj, "DefaultBid", "minLoadCost", base.from_string, fields);
                base.export_element (obj, "DefaultBid", "peakFlag", base.from_string, fields);
                base.export_attribute (obj, "DefaultBid", "RegisteredResource", fields);
                base.export_attribute (obj, "DefaultBid", "DefaultBidCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DefaultBid_collapse" aria-expanded="true" aria-controls="DefaultBid_collapse" style="margin-left: 10px;">DefaultBid</a></legend>
                    <div id="DefaultBid_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ParticipantInterfaces.Bid.prototype.template.call (this) +
                    `
                    {{#bidType}}<div><b>bidType</b>: {{bidType}}</div>{{/bidType}}
                    {{#minLoadCost}}<div><b>minLoadCost</b>: {{minLoadCost}}</div>{{/minLoadCost}}
                    {{#peakFlag}}<div><b>peakFlag</b>: {{peakFlag}}</div>{{/peakFlag}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredResource}}&quot;);})'>{{RegisteredResource}}</a></div>{{/RegisteredResource}}
                    {{#DefaultBidCurve}}<div><b>DefaultBidCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DefaultBidCurve}}&quot;);})'>{{DefaultBidCurve}}</a></div>{{/DefaultBidCurve}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DefaultBid_collapse" aria-expanded="true" aria-controls="DefaultBid_collapse" style="margin-left: 10px;">DefaultBid</a></legend>
                    <div id="DefaultBid_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ParticipantInterfaces.Bid.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='bidType'>bidType: </label><div class='col-sm-8'><input id='bidType' class='form-control' type='text'{{#bidType}} value='{{bidType}}'{{/bidType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minLoadCost'>minLoadCost: </label><div class='col-sm-8'><input id='minLoadCost' class='form-control' type='text'{{#minLoadCost}} value='{{minLoadCost}}'{{/minLoadCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='peakFlag'>peakFlag: </label><div class='col-sm-8'><input id='peakFlag' class='form-control' type='text'{{#peakFlag}} value='{{peakFlag}}'{{/peakFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='DefaultBidCurve'>DefaultBidCurve: </label><div class='col-sm-8'><input id='DefaultBidCurve' class='form-control' type='text'{{#DefaultBidCurve}} value='{{DefaultBidCurve}}'{{/DefaultBidCurve}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * This class models the generation distribution factors.
         *
         * This class needs to be used along with the AggregatedPnode and the IndividualPnode to show the distriubtion of each individual party.
         *
         */
        class GenDistributionFactor extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GenDistributionFactor;
                if (null == bucket)
                   cim_data.GenDistributionFactor = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GenDistributionFactor[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "GenDistributionFactor";
                base.parse_element (/<cim:GenDistributionFactor.factor>([\s\S]*?)<\/cim:GenDistributionFactor.factor>/g, obj, "factor", base.to_float, sub, context);
                base.parse_attribute (/<cim:GenDistributionFactor.AggregatedPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AggregatedPnode", sub, context);
                base.parse_attribute (/<cim:GenDistributionFactor.IndividualPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "IndividualPnode", sub, context);

                var bucket = context.parsed.GenDistributionFactor;
                if (null == bucket)
                   context.parsed.GenDistributionFactor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "GenDistributionFactor", "factor", base.from_float, fields);
                base.export_attribute (obj, "GenDistributionFactor", "AggregatedPnode", fields);
                base.export_attribute (obj, "GenDistributionFactor", "IndividualPnode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GenDistributionFactor_collapse" aria-expanded="true" aria-controls="GenDistributionFactor_collapse" style="margin-left: 10px;">GenDistributionFactor</a></legend>
                    <div id="GenDistributionFactor_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#factor}}<div><b>factor</b>: {{factor}}</div>{{/factor}}
                    {{#AggregatedPnode}}<div><b>AggregatedPnode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AggregatedPnode}}&quot;);})'>{{AggregatedPnode}}</a></div>{{/AggregatedPnode}}
                    {{#IndividualPnode}}<div><b>IndividualPnode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{IndividualPnode}}&quot;);})'>{{IndividualPnode}}</a></div>{{/IndividualPnode}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GenDistributionFactor_collapse" aria-expanded="true" aria-controls="GenDistributionFactor_collapse" style="margin-left: 10px;">GenDistributionFactor</a></legend>
                    <div id="GenDistributionFactor_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='factor'>factor: </label><div class='col-sm-8'><input id='factor' class='form-control' type='text'{{#factor}} value='{{factor}}'{{/factor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AggregatedPnode'>AggregatedPnode: </label><div class='col-sm-8'><input id='AggregatedPnode' class='form-control' type='text'{{#AggregatedPnode}} value='{{AggregatedPnode}}'{{/AggregatedPnode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='IndividualPnode'>IndividualPnode: </label><div class='col-sm-8'><input id='IndividualPnode' class='form-control' type='text'{{#IndividualPnode}} value='{{IndividualPnode}}'{{/IndividualPnode}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Subclass of IEC61970:Meas:AnalogLimitSet
         *
         */
        class MktAnalogLimitSet extends Meas.AnalogLimitSet
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktAnalogLimitSet;
                if (null == bucket)
                   cim_data.MktAnalogLimitSet = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktAnalogLimitSet[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Meas.AnalogLimitSet.prototype.parse.call (this, context, sub);
                obj.cls = "MktAnalogLimitSet";
                base.parse_element (/<cim:MktAnalogLimitSet.ratingSet>([\s\S]*?)<\/cim:MktAnalogLimitSet.ratingSet>/g, obj, "ratingSet", base.to_string, sub, context);

                var bucket = context.parsed.MktAnalogLimitSet;
                if (null == bucket)
                   context.parsed.MktAnalogLimitSet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Meas.AnalogLimitSet.prototype.export.call (this, obj, false);

                base.export_element (obj, "MktAnalogLimitSet", "ratingSet", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MktAnalogLimitSet_collapse" aria-expanded="true" aria-controls="MktAnalogLimitSet_collapse" style="margin-left: 10px;">MktAnalogLimitSet</a></legend>
                    <div id="MktAnalogLimitSet_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Meas.AnalogLimitSet.prototype.template.call (this) +
                    `
                    {{#ratingSet}}<div><b>ratingSet</b>: {{ratingSet}}</div>{{/ratingSet}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MktAnalogLimitSet_collapse" aria-expanded="true" aria-controls="MktAnalogLimitSet_collapse" style="margin-left: 10px;">MktAnalogLimitSet</a></legend>
                    <div id="MktAnalogLimitSet_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Meas.AnalogLimitSet.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ratingSet'>ratingSet: </label><div class='col-sm-8'><input id='ratingSet' class='form-control' type='text'{{#ratingSet}} value='{{ratingSet}}'{{/ratingSet}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Subclass of IEC61970:Wires:ACLineSegment
         *
         */
        class MktACLineSegment extends Wires.ACLineSegment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktACLineSegment;
                if (null == bucket)
                   cim_data.MktACLineSegment = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktACLineSegment[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Wires.ACLineSegment.prototype.parse.call (this, context, sub);
                obj.cls = "MktACLineSegment";
                base.parse_attribute (/<cim:MktACLineSegment.EndAFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndAFlow", sub, context);
                base.parse_attribute (/<cim:MktACLineSegment.EndBFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EndBFlow", sub, context);

                var bucket = context.parsed.MktACLineSegment;
                if (null == bucket)
                   context.parsed.MktACLineSegment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Wires.ACLineSegment.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MktACLineSegment", "EndAFlow", fields);
                base.export_attribute (obj, "MktACLineSegment", "EndBFlow", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MktACLineSegment_collapse" aria-expanded="true" aria-controls="MktACLineSegment_collapse" style="margin-left: 10px;">MktACLineSegment</a></legend>
                    <div id="MktACLineSegment_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Wires.ACLineSegment.prototype.template.call (this) +
                    `
                    {{#EndAFlow}}<div><b>EndAFlow</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EndAFlow}}&quot;);})'>{{EndAFlow}}</a></div>{{/EndAFlow}}
                    {{#EndBFlow}}<div><b>EndBFlow</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EndBFlow}}&quot;);})'>{{EndBFlow}}</a></div>{{/EndBFlow}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MktACLineSegment_collapse" aria-expanded="true" aria-controls="MktACLineSegment_collapse" style="margin-left: 10px;">MktACLineSegment</a></legend>
                    <div id="MktACLineSegment_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Wires.ACLineSegment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='EndAFlow'>EndAFlow: </label><div class='col-sm-8'><input id='EndAFlow' class='form-control' type='text'{{#EndAFlow}} value='{{EndAFlow}}'{{/EndAFlow}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='EndBFlow'>EndBFlow: </label><div class='col-sm-8'><input id='EndBFlow' class='form-control' type='text'{{#EndBFlow}} value='{{EndBFlow}}'{{/EndBFlow}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * A containing class that groups all the distribution factors within a market.
         *
         * This is calculated daily for DA factors and hourly for RT factors.
         *
         */
        class DistributionFactorSet extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DistributionFactorSet;
                if (null == bucket)
                   cim_data.DistributionFactorSet = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DistributionFactorSet[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DistributionFactorSet";
                base.parse_element (/<cim:DistributionFactorSet.intervalStartTime>([\s\S]*?)<\/cim:DistributionFactorSet.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:DistributionFactorSet.intervalEndTime>([\s\S]*?)<\/cim:DistributionFactorSet.intervalEndTime>/g, obj, "intervalEndTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:DistributionFactorSet.marketType>([\s\S]*?)<\/cim:DistributionFactorSet.marketType>/g, obj, "marketType", base.to_string, sub, context);

                var bucket = context.parsed.DistributionFactorSet;
                if (null == bucket)
                   context.parsed.DistributionFactorSet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "DistributionFactorSet", "intervalStartTime", base.from_datetime, fields);
                base.export_element (obj, "DistributionFactorSet", "intervalEndTime", base.from_datetime, fields);
                base.export_element (obj, "DistributionFactorSet", "marketType", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DistributionFactorSet_collapse" aria-expanded="true" aria-controls="DistributionFactorSet_collapse" style="margin-left: 10px;">DistributionFactorSet</a></legend>
                    <div id="DistributionFactorSet_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#intervalStartTime}}<div><b>intervalStartTime</b>: {{intervalStartTime}}</div>{{/intervalStartTime}}
                    {{#intervalEndTime}}<div><b>intervalEndTime</b>: {{intervalEndTime}}</div>{{/intervalEndTime}}
                    {{#marketType}}<div><b>marketType</b>: {{marketType}}</div>{{/marketType}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DistributionFactorSet_collapse" aria-expanded="true" aria-controls="DistributionFactorSet_collapse" style="margin-left: 10px;">DistributionFactorSet</a></legend>
                    <div id="DistributionFactorSet_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='intervalStartTime'>intervalStartTime: </label><div class='col-sm-8'><input id='intervalStartTime' class='form-control' type='text'{{#intervalStartTime}} value='{{intervalStartTime}}'{{/intervalStartTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='intervalEndTime'>intervalEndTime: </label><div class='col-sm-8'><input id='intervalEndTime' class='form-control' type='text'{{#intervalEndTime}} value='{{intervalEndTime}}'{{/intervalEndTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='marketType'>marketType: </label><div class='col-sm-8'><input id='marketType' class='form-control' type='text'{{#marketType}} value='{{marketType}}'{{/marketType}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * A Transfer Interface is made up of branches such as transmission lines and transformers.
         *
         */
        class TransferInterface extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TransferInterface;
                if (null == bucket)
                   cim_data.TransferInterface = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TransferInterface[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TransferInterface";
                base.parse_attribute (/<cim:TransferInterface.TransferInterfaceSolution\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransferInterfaceSolution", sub, context);
                base.parse_attribute (/<cim:TransferInterface.HostControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HostControlArea", sub, context);

                var bucket = context.parsed.TransferInterface;
                if (null == bucket)
                   context.parsed.TransferInterface = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "TransferInterface", "TransferInterfaceSolution", fields);
                base.export_attribute (obj, "TransferInterface", "HostControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TransferInterface_collapse" aria-expanded="true" aria-controls="TransferInterface_collapse" style="margin-left: 10px;">TransferInterface</a></legend>
                    <div id="TransferInterface_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#TransferInterfaceSolution}}<div><b>TransferInterfaceSolution</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TransferInterfaceSolution}}&quot;);})'>{{TransferInterfaceSolution}}</a></div>{{/TransferInterfaceSolution}}
                    {{#HostControlArea}}<div><b>HostControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{HostControlArea}}&quot;);})'>{{HostControlArea}}</a></div>{{/HostControlArea}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TransferInterface_collapse" aria-expanded="true" aria-controls="TransferInterface_collapse" style="margin-left: 10px;">TransferInterface</a></legend>
                    <div id="TransferInterface_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TransferInterfaceSolution'>TransferInterfaceSolution: </label><div class='col-sm-8'><input id='TransferInterfaceSolution' class='form-control' type='text'{{#TransferInterfaceSolution}} value='{{TransferInterfaceSolution}}'{{/TransferInterfaceSolution}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='HostControlArea'>HostControlArea: </label><div class='col-sm-8'><input id='HostControlArea' class='form-control' type='text'{{#HostControlArea}} value='{{HostControlArea}}'{{/HostControlArea}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Generic constraints can represent secure areas, voltage profile, transient stability and voltage collapse limits.
         *
         * The generic constraints can be one of the following forms:
         *
         */
        class GenericConstraints extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GenericConstraints;
                if (null == bucket)
                   cim_data.GenericConstraints = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GenericConstraints[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "GenericConstraints";
                base.parse_element (/<cim:GenericConstraints.intervalEndTime>([\s\S]*?)<\/cim:GenericConstraints.intervalEndTime>/g, obj, "intervalEndTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:GenericConstraints.intervalStartTime>([\s\S]*?)<\/cim:GenericConstraints.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:GenericConstraints.maxLimit>([\s\S]*?)<\/cim:GenericConstraints.maxLimit>/g, obj, "maxLimit", base.to_float, sub, context);
                base.parse_element (/<cim:GenericConstraints.minLimit>([\s\S]*?)<\/cim:GenericConstraints.minLimit>/g, obj, "minLimit", base.to_float, sub, context);

                var bucket = context.parsed.GenericConstraints;
                if (null == bucket)
                   context.parsed.GenericConstraints = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "GenericConstraints", "intervalEndTime", base.from_datetime, fields);
                base.export_element (obj, "GenericConstraints", "intervalStartTime", base.from_datetime, fields);
                base.export_element (obj, "GenericConstraints", "maxLimit", base.from_float, fields);
                base.export_element (obj, "GenericConstraints", "minLimit", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GenericConstraints_collapse" aria-expanded="true" aria-controls="GenericConstraints_collapse" style="margin-left: 10px;">GenericConstraints</a></legend>
                    <div id="GenericConstraints_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#intervalEndTime}}<div><b>intervalEndTime</b>: {{intervalEndTime}}</div>{{/intervalEndTime}}
                    {{#intervalStartTime}}<div><b>intervalStartTime</b>: {{intervalStartTime}}</div>{{/intervalStartTime}}
                    {{#maxLimit}}<div><b>maxLimit</b>: {{maxLimit}}</div>{{/maxLimit}}
                    {{#minLimit}}<div><b>minLimit</b>: {{minLimit}}</div>{{/minLimit}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GenericConstraints_collapse" aria-expanded="true" aria-controls="GenericConstraints_collapse" style="margin-left: 10px;">GenericConstraints</a></legend>
                    <div id="GenericConstraints_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='intervalEndTime'>intervalEndTime: </label><div class='col-sm-8'><input id='intervalEndTime' class='form-control' type='text'{{#intervalEndTime}} value='{{intervalEndTime}}'{{/intervalEndTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='intervalStartTime'>intervalStartTime: </label><div class='col-sm-8'><input id='intervalStartTime' class='form-control' type='text'{{#intervalStartTime}} value='{{intervalStartTime}}'{{/intervalStartTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxLimit'>maxLimit: </label><div class='col-sm-8'><input id='maxLimit' class='form-control' type='text'{{#maxLimit}} value='{{maxLimit}}'{{/maxLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minLimit'>minLimit: </label><div class='col-sm-8'><input id='minLimit' class='form-control' type='text'{{#minLimit}} value='{{minLimit}}'{{/minLimit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * This is formally called the branch group ETC/TOR entitlement with the inclusion of CVR as ETC.
         *
         * Is used to represent the entitlements. This could be also used to represent the TR entitlement on a POR/POD.
         *
         */
        class TransmissionInterfaceRightEntitlement extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TransmissionInterfaceRightEntitlement;
                if (null == bucket)
                   cim_data.TransmissionInterfaceRightEntitlement = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TransmissionInterfaceRightEntitlement[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TransmissionInterfaceRightEntitlement";
                base.parse_element (/<cim:TransmissionInterfaceRightEntitlement.entitlement>([\s\S]*?)<\/cim:TransmissionInterfaceRightEntitlement.entitlement>/g, obj, "entitlement", base.to_float, sub, context);
                base.parse_element (/<cim:TransmissionInterfaceRightEntitlement.POD>([\s\S]*?)<\/cim:TransmissionInterfaceRightEntitlement.POD>/g, obj, "POD", base.to_string, sub, context);
                base.parse_element (/<cim:TransmissionInterfaceRightEntitlement.POR>([\s\S]*?)<\/cim:TransmissionInterfaceRightEntitlement.POR>/g, obj, "POR", base.to_string, sub, context);
                base.parse_element (/<cim:TransmissionInterfaceRightEntitlement.startOperatingDate>([\s\S]*?)<\/cim:TransmissionInterfaceRightEntitlement.startOperatingDate>/g, obj, "startOperatingDate", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:TransmissionInterfaceRightEntitlement.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
                base.parse_attribute (/<cim:TransmissionInterfaceRightEntitlement.ContractRight\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ContractRight", sub, context);

                var bucket = context.parsed.TransmissionInterfaceRightEntitlement;
                if (null == bucket)
                   context.parsed.TransmissionInterfaceRightEntitlement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TransmissionInterfaceRightEntitlement", "entitlement", base.from_float, fields);
                base.export_element (obj, "TransmissionInterfaceRightEntitlement", "POD", base.from_string, fields);
                base.export_element (obj, "TransmissionInterfaceRightEntitlement", "POR", base.from_string, fields);
                base.export_element (obj, "TransmissionInterfaceRightEntitlement", "startOperatingDate", base.from_datetime, fields);
                base.export_attribute (obj, "TransmissionInterfaceRightEntitlement", "Flowgate", fields);
                base.export_attribute (obj, "TransmissionInterfaceRightEntitlement", "ContractRight", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TransmissionInterfaceRightEntitlement_collapse" aria-expanded="true" aria-controls="TransmissionInterfaceRightEntitlement_collapse" style="margin-left: 10px;">TransmissionInterfaceRightEntitlement</a></legend>
                    <div id="TransmissionInterfaceRightEntitlement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#entitlement}}<div><b>entitlement</b>: {{entitlement}}</div>{{/entitlement}}
                    {{#POD}}<div><b>POD</b>: {{POD}}</div>{{/POD}}
                    {{#POR}}<div><b>POR</b>: {{POR}}</div>{{/POR}}
                    {{#startOperatingDate}}<div><b>startOperatingDate</b>: {{startOperatingDate}}</div>{{/startOperatingDate}}
                    {{#Flowgate}}<div><b>Flowgate</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Flowgate}}&quot;);})'>{{Flowgate}}</a></div>{{/Flowgate}}
                    {{#ContractRight}}<div><b>ContractRight</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ContractRight}}&quot;);})'>{{ContractRight}}</a></div>{{/ContractRight}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TransmissionInterfaceRightEntitlement_collapse" aria-expanded="true" aria-controls="TransmissionInterfaceRightEntitlement_collapse" style="margin-left: 10px;">TransmissionInterfaceRightEntitlement</a></legend>
                    <div id="TransmissionInterfaceRightEntitlement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='entitlement'>entitlement: </label><div class='col-sm-8'><input id='entitlement' class='form-control' type='text'{{#entitlement}} value='{{entitlement}}'{{/entitlement}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='POD'>POD: </label><div class='col-sm-8'><input id='POD' class='form-control' type='text'{{#POD}} value='{{POD}}'{{/POD}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='POR'>POR: </label><div class='col-sm-8'><input id='POR' class='form-control' type='text'{{#POR}} value='{{POR}}'{{/POR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startOperatingDate'>startOperatingDate: </label><div class='col-sm-8'><input id='startOperatingDate' class='form-control' type='text'{{#startOperatingDate}} value='{{startOperatingDate}}'{{/startOperatingDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Flowgate'>Flowgate: </label><div class='col-sm-8'><input id='Flowgate' class='form-control' type='text'{{#Flowgate}} value='{{Flowgate}}'{{/Flowgate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ContractRight'>ContractRight: </label><div class='col-sm-8'><input id='ContractRight' class='form-control' type='text'{{#ContractRight}} value='{{ContractRight}}'{{/ContractRight}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * State Estimator Solution Pool Interchange and Losses
         *
         */
        class ControlAreaSolutionData extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ControlAreaSolutionData;
                if (null == bucket)
                   cim_data.ControlAreaSolutionData = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ControlAreaSolutionData[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ControlAreaSolutionData";
                base.parse_element (/<cim:ControlAreaSolutionData.solvedLosses>([\s\S]*?)<\/cim:ControlAreaSolutionData.solvedLosses>/g, obj, "solvedLosses", base.to_float, sub, context);
                base.parse_element (/<cim:ControlAreaSolutionData.solvedInterchange>([\s\S]*?)<\/cim:ControlAreaSolutionData.solvedInterchange>/g, obj, "solvedInterchange", base.to_float, sub, context);
                base.parse_attribute (/<cim:ControlAreaSolutionData.MktControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktControlArea", sub, context);

                var bucket = context.parsed.ControlAreaSolutionData;
                if (null == bucket)
                   context.parsed.ControlAreaSolutionData = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ControlAreaSolutionData", "solvedLosses", base.from_float, fields);
                base.export_element (obj, "ControlAreaSolutionData", "solvedInterchange", base.from_float, fields);
                base.export_attribute (obj, "ControlAreaSolutionData", "MktControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ControlAreaSolutionData_collapse" aria-expanded="true" aria-controls="ControlAreaSolutionData_collapse" style="margin-left: 10px;">ControlAreaSolutionData</a></legend>
                    <div id="ControlAreaSolutionData_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#solvedLosses}}<div><b>solvedLosses</b>: {{solvedLosses}}</div>{{/solvedLosses}}
                    {{#solvedInterchange}}<div><b>solvedInterchange</b>: {{solvedInterchange}}</div>{{/solvedInterchange}}
                    {{#MktControlArea}}<div><b>MktControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktControlArea}}&quot;);})'>{{MktControlArea}}</a></div>{{/MktControlArea}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ControlAreaSolutionData_collapse" aria-expanded="true" aria-controls="ControlAreaSolutionData_collapse" style="margin-left: 10px;">ControlAreaSolutionData</a></legend>
                    <div id="ControlAreaSolutionData_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='solvedLosses'>solvedLosses: </label><div class='col-sm-8'><input id='solvedLosses' class='form-control' type='text'{{#solvedLosses}} value='{{solvedLosses}}'{{/solvedLosses}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='solvedInterchange'>solvedInterchange: </label><div class='col-sm-8'><input id='solvedInterchange' class='form-control' type='text'{{#solvedInterchange}} value='{{solvedInterchange}}'{{/solvedInterchange}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktControlArea'>MktControlArea: </label><div class='col-sm-8'><input id='MktControlArea' class='form-control' type='text'{{#MktControlArea}} value='{{MktControlArea}}'{{/MktControlArea}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Interchange schedule class to hold information for interchange schedules such as import export type, energy type, and etc.
         *
         */
        class InterchangeSchedule extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.InterchangeSchedule;
                if (null == bucket)
                   cim_data.InterchangeSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.InterchangeSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "InterchangeSchedule";
                base.parse_element (/<cim:InterchangeSchedule.checkOutType>([\s\S]*?)<\/cim:InterchangeSchedule.checkOutType>/g, obj, "checkOutType", base.to_string, sub, context);
                base.parse_element (/<cim:InterchangeSchedule.directionType>([\s\S]*?)<\/cim:InterchangeSchedule.directionType>/g, obj, "directionType", base.to_string, sub, context);
                base.parse_element (/<cim:InterchangeSchedule.energyType>([\s\S]*?)<\/cim:InterchangeSchedule.energyType>/g, obj, "energyType", base.to_string, sub, context);
                base.parse_element (/<cim:InterchangeSchedule.intervalLength>([\s\S]*?)<\/cim:InterchangeSchedule.intervalLength>/g, obj, "intervalLength", base.to_string, sub, context);
                base.parse_element (/<cim:InterchangeSchedule.marketType>([\s\S]*?)<\/cim:InterchangeSchedule.marketType>/g, obj, "marketType", base.to_string, sub, context);
                base.parse_element (/<cim:InterchangeSchedule.operatingDate>([\s\S]*?)<\/cim:InterchangeSchedule.operatingDate>/g, obj, "operatingDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:InterchangeSchedule.outOfMarketType>([\s\S]*?)<\/cim:InterchangeSchedule.outOfMarketType>/g, obj, "outOfMarketType", base.to_boolean, sub, context);
                base.parse_element (/<cim:InterchangeSchedule.scheduleType>([\s\S]*?)<\/cim:InterchangeSchedule.scheduleType>/g, obj, "scheduleType", base.to_string, sub, context);
                base.parse_element (/<cim:InterchangeSchedule.wcrID>([\s\S]*?)<\/cim:InterchangeSchedule.wcrID>/g, obj, "wcrID", base.to_string, sub, context);
                base.parse_attribute (/<cim:InterchangeSchedule.RegisteredInterTie\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredInterTie", sub, context);
                base.parse_attribute (/<cim:InterchangeSchedule.InterTie\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InterTie", sub, context);

                var bucket = context.parsed.InterchangeSchedule;
                if (null == bucket)
                   context.parsed.InterchangeSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "InterchangeSchedule", "checkOutType", base.from_string, fields);
                base.export_element (obj, "InterchangeSchedule", "directionType", base.from_string, fields);
                base.export_element (obj, "InterchangeSchedule", "energyType", base.from_string, fields);
                base.export_element (obj, "InterchangeSchedule", "intervalLength", base.from_string, fields);
                base.export_element (obj, "InterchangeSchedule", "marketType", base.from_string, fields);
                base.export_element (obj, "InterchangeSchedule", "operatingDate", base.from_datetime, fields);
                base.export_element (obj, "InterchangeSchedule", "outOfMarketType", base.from_boolean, fields);
                base.export_element (obj, "InterchangeSchedule", "scheduleType", base.from_string, fields);
                base.export_element (obj, "InterchangeSchedule", "wcrID", base.from_string, fields);
                base.export_attribute (obj, "InterchangeSchedule", "RegisteredInterTie", fields);
                base.export_attribute (obj, "InterchangeSchedule", "InterTie", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#InterchangeSchedule_collapse" aria-expanded="true" aria-controls="InterchangeSchedule_collapse" style="margin-left: 10px;">InterchangeSchedule</a></legend>
                    <div id="InterchangeSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#checkOutType}}<div><b>checkOutType</b>: {{checkOutType}}</div>{{/checkOutType}}
                    {{#directionType}}<div><b>directionType</b>: {{directionType}}</div>{{/directionType}}
                    {{#energyType}}<div><b>energyType</b>: {{energyType}}</div>{{/energyType}}
                    {{#intervalLength}}<div><b>intervalLength</b>: {{intervalLength}}</div>{{/intervalLength}}
                    {{#marketType}}<div><b>marketType</b>: {{marketType}}</div>{{/marketType}}
                    {{#operatingDate}}<div><b>operatingDate</b>: {{operatingDate}}</div>{{/operatingDate}}
                    {{#outOfMarketType}}<div><b>outOfMarketType</b>: {{outOfMarketType}}</div>{{/outOfMarketType}}
                    {{#scheduleType}}<div><b>scheduleType</b>: {{scheduleType}}</div>{{/scheduleType}}
                    {{#wcrID}}<div><b>wcrID</b>: {{wcrID}}</div>{{/wcrID}}
                    {{#RegisteredInterTie}}<div><b>RegisteredInterTie</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredInterTie}}&quot;);})'>{{RegisteredInterTie}}</a></div>{{/RegisteredInterTie}}
                    {{#InterTie}}<div><b>InterTie</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{InterTie}}&quot;);})'>{{InterTie}}</a></div>{{/InterTie}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#InterchangeSchedule_collapse" aria-expanded="true" aria-controls="InterchangeSchedule_collapse" style="margin-left: 10px;">InterchangeSchedule</a></legend>
                    <div id="InterchangeSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='checkOutType'>checkOutType: </label><div class='col-sm-8'><input id='checkOutType' class='form-control' type='text'{{#checkOutType}} value='{{checkOutType}}'{{/checkOutType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='directionType'>directionType: </label><div class='col-sm-8'><input id='directionType' class='form-control' type='text'{{#directionType}} value='{{directionType}}'{{/directionType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='energyType'>energyType: </label><div class='col-sm-8'><input id='energyType' class='form-control' type='text'{{#energyType}} value='{{energyType}}'{{/energyType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='intervalLength'>intervalLength: </label><div class='col-sm-8'><input id='intervalLength' class='form-control' type='text'{{#intervalLength}} value='{{intervalLength}}'{{/intervalLength}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='marketType'>marketType: </label><div class='col-sm-8'><input id='marketType' class='form-control' type='text'{{#marketType}} value='{{marketType}}'{{/marketType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='operatingDate'>operatingDate: </label><div class='col-sm-8'><input id='operatingDate' class='form-control' type='text'{{#operatingDate}} value='{{operatingDate}}'{{/operatingDate}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='outOfMarketType'>outOfMarketType: </label><div class='col-sm-8'><input id='outOfMarketType' class='form-check-input' type='checkbox'{{#outOfMarketType}} checked{{/outOfMarketType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='scheduleType'>scheduleType: </label><div class='col-sm-8'><input id='scheduleType' class='form-control' type='text'{{#scheduleType}} value='{{scheduleType}}'{{/scheduleType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='wcrID'>wcrID: </label><div class='col-sm-8'><input id='wcrID' class='form-control' type='text'{{#wcrID}} value='{{wcrID}}'{{/wcrID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredInterTie'>RegisteredInterTie: </label><div class='col-sm-8'><input id='RegisteredInterTie' class='form-control' type='text'{{#RegisteredInterTie}} value='{{RegisteredInterTie}}'{{/RegisteredInterTie}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='InterTie'>InterTie: </label><div class='col-sm-8'><input id='InterTie' class='form-control' type='text'{{#InterTie}} value='{{InterTie}}'{{/InterTie}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * An Energy Price Index for each Resource is valid for a period (e.g. daily) that is identified by a Valid Period Start Time and a Valid Period End Time.
         *
         * An Energy Price Index is in \$/MWh.
         *
         */
        class EnergyPriceIndex extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EnergyPriceIndex;
                if (null == bucket)
                   cim_data.EnergyPriceIndex = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EnergyPriceIndex[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "EnergyPriceIndex";
                base.parse_element (/<cim:EnergyPriceIndex.lastModified>([\s\S]*?)<\/cim:EnergyPriceIndex.lastModified>/g, obj, "lastModified", base.to_datetime, sub, context);
                base.parse_element (/<cim:EnergyPriceIndex.startEffectiveDate>([\s\S]*?)<\/cim:EnergyPriceIndex.startEffectiveDate>/g, obj, "startEffectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:EnergyPriceIndex.endEffectiveDate>([\s\S]*?)<\/cim:EnergyPriceIndex.endEffectiveDate>/g, obj, "endEffectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:EnergyPriceIndex.energyPriceIndex>([\s\S]*?)<\/cim:EnergyPriceIndex.energyPriceIndex>/g, obj, "energyPriceIndex", base.to_float, sub, context);
                base.parse_element (/<cim:EnergyPriceIndex.energyPriceIndexType>([\s\S]*?)<\/cim:EnergyPriceIndex.energyPriceIndexType>/g, obj, "energyPriceIndexType", base.to_string, sub, context);
                base.parse_attribute (/<cim:EnergyPriceIndex.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);

                var bucket = context.parsed.EnergyPriceIndex;
                if (null == bucket)
                   context.parsed.EnergyPriceIndex = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "EnergyPriceIndex", "lastModified", base.from_datetime, fields);
                base.export_element (obj, "EnergyPriceIndex", "startEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "EnergyPriceIndex", "endEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "EnergyPriceIndex", "energyPriceIndex", base.from_float, fields);
                base.export_element (obj, "EnergyPriceIndex", "energyPriceIndexType", base.from_string, fields);
                base.export_attribute (obj, "EnergyPriceIndex", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EnergyPriceIndex_collapse" aria-expanded="true" aria-controls="EnergyPriceIndex_collapse" style="margin-left: 10px;">EnergyPriceIndex</a></legend>
                    <div id="EnergyPriceIndex_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#lastModified}}<div><b>lastModified</b>: {{lastModified}}</div>{{/lastModified}}
                    {{#startEffectiveDate}}<div><b>startEffectiveDate</b>: {{startEffectiveDate}}</div>{{/startEffectiveDate}}
                    {{#endEffectiveDate}}<div><b>endEffectiveDate</b>: {{endEffectiveDate}}</div>{{/endEffectiveDate}}
                    {{#energyPriceIndex}}<div><b>energyPriceIndex</b>: {{energyPriceIndex}}</div>{{/energyPriceIndex}}
                    {{#energyPriceIndexType}}<div><b>energyPriceIndexType</b>: {{energyPriceIndexType}}</div>{{/energyPriceIndexType}}
                    {{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredGenerator}}&quot;);})'>{{RegisteredGenerator}}</a></div>{{/RegisteredGenerator}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EnergyPriceIndex_collapse" aria-expanded="true" aria-controls="EnergyPriceIndex_collapse" style="margin-left: 10px;">EnergyPriceIndex</a></legend>
                    <div id="EnergyPriceIndex_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lastModified'>lastModified: </label><div class='col-sm-8'><input id='lastModified' class='form-control' type='text'{{#lastModified}} value='{{lastModified}}'{{/lastModified}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startEffectiveDate'>startEffectiveDate: </label><div class='col-sm-8'><input id='startEffectiveDate' class='form-control' type='text'{{#startEffectiveDate}} value='{{startEffectiveDate}}'{{/startEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='endEffectiveDate'>endEffectiveDate: </label><div class='col-sm-8'><input id='endEffectiveDate' class='form-control' type='text'{{#endEffectiveDate}} value='{{endEffectiveDate}}'{{/endEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='energyPriceIndex'>energyPriceIndex: </label><div class='col-sm-8'><input id='energyPriceIndex' class='form-control' type='text'{{#energyPriceIndex}} value='{{energyPriceIndex}}'{{/energyPriceIndex}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='energyPriceIndexType'>energyPriceIndexType: </label><div class='col-sm-8'><input id='energyPriceIndexType' class='form-control' type='text'{{#energyPriceIndexType}} value='{{energyPriceIndexType}}'{{/energyPriceIndexType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredGenerator'>RegisteredGenerator: </label><div class='col-sm-8'><input id='RegisteredGenerator' class='form-control' type='text'{{#RegisteredGenerator}} value='{{RegisteredGenerator}}'{{/RegisteredGenerator}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Loss sensitivity applied to a ConnectivityNode for a given time interval.
         *
         */
        class LossSensitivity extends MarketPlan.MarketFactors
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LossSensitivity;
                if (null == bucket)
                   cim_data.LossSensitivity = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LossSensitivity[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "LossSensitivity";
                base.parse_element (/<cim:LossSensitivity.lossFactor>([\s\S]*?)<\/cim:LossSensitivity.lossFactor>/g, obj, "lossFactor", base.to_float, sub, context);
                base.parse_attribute (/<cim:LossSensitivity.MktConnectivityNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktConnectivityNode", sub, context);

                var bucket = context.parsed.LossSensitivity;
                if (null == bucket)
                   context.parsed.LossSensitivity = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_element (obj, "LossSensitivity", "lossFactor", base.from_float, fields);
                base.export_attribute (obj, "LossSensitivity", "MktConnectivityNode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LossSensitivity_collapse" aria-expanded="true" aria-controls="LossSensitivity_collapse" style="margin-left: 10px;">LossSensitivity</a></legend>
                    <div id="LossSensitivity_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.template.call (this) +
                    `
                    {{#lossFactor}}<div><b>lossFactor</b>: {{lossFactor}}</div>{{/lossFactor}}
                    {{#MktConnectivityNode}}<div><b>MktConnectivityNode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktConnectivityNode}}&quot;);})'>{{MktConnectivityNode}}</a></div>{{/MktConnectivityNode}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LossSensitivity_collapse" aria-expanded="true" aria-controls="LossSensitivity_collapse" style="margin-left: 10px;">LossSensitivity</a></legend>
                    <div id="LossSensitivity_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lossFactor'>lossFactor: </label><div class='col-sm-8'><input id='lossFactor' class='form-control' type='text'{{#lossFactor}} value='{{lossFactor}}'{{/lossFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktConnectivityNode'>MktConnectivityNode: </label><div class='col-sm-8'><input id='MktConnectivityNode' class='form-control' type='text'{{#MktConnectivityNode}} value='{{MktConnectivityNode}}'{{/MktConnectivityNode}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Measurement quality flags for Analog Values.
         *
         */
        class AnalogMeasurementValueQuality extends Meas.MeasurementValueQuality
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AnalogMeasurementValueQuality;
                if (null == bucket)
                   cim_data.AnalogMeasurementValueQuality = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AnalogMeasurementValueQuality[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Meas.MeasurementValueQuality.prototype.parse.call (this, context, sub);
                obj.cls = "AnalogMeasurementValueQuality";
                base.parse_element (/<cim:AnalogMeasurementValueQuality.scadaQualityCode>([\s\S]*?)<\/cim:AnalogMeasurementValueQuality.scadaQualityCode>/g, obj, "scadaQualityCode", base.to_string, sub, context);
                base.parse_attribute (/<cim:AnalogMeasurementValueQuality.MktAnalogValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktAnalogValue", sub, context);

                var bucket = context.parsed.AnalogMeasurementValueQuality;
                if (null == bucket)
                   context.parsed.AnalogMeasurementValueQuality = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Meas.MeasurementValueQuality.prototype.export.call (this, obj, false);

                base.export_element (obj, "AnalogMeasurementValueQuality", "scadaQualityCode", base.from_string, fields);
                base.export_attribute (obj, "AnalogMeasurementValueQuality", "MktAnalogValue", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AnalogMeasurementValueQuality_collapse" aria-expanded="true" aria-controls="AnalogMeasurementValueQuality_collapse" style="margin-left: 10px;">AnalogMeasurementValueQuality</a></legend>
                    <div id="AnalogMeasurementValueQuality_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Meas.MeasurementValueQuality.prototype.template.call (this) +
                    `
                    {{#scadaQualityCode}}<div><b>scadaQualityCode</b>: {{scadaQualityCode}}</div>{{/scadaQualityCode}}
                    {{#MktAnalogValue}}<div><b>MktAnalogValue</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktAnalogValue}}&quot;);})'>{{MktAnalogValue}}</a></div>{{/MktAnalogValue}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AnalogMeasurementValueQuality_collapse" aria-expanded="true" aria-controls="AnalogMeasurementValueQuality_collapse" style="margin-left: 10px;">AnalogMeasurementValueQuality</a></legend>
                    <div id="AnalogMeasurementValueQuality_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Meas.MeasurementValueQuality.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='scadaQualityCode'>scadaQualityCode: </label><div class='col-sm-8'><input id='scadaQualityCode' class='form-control' type='text'{{#scadaQualityCode}} value='{{scadaQualityCode}}'{{/scadaQualityCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktAnalogValue'>MktAnalogValue: </label><div class='col-sm-8'><input id='MktAnalogValue' class='form-control' type='text'{{#MktAnalogValue}} value='{{MktAnalogValue}}'{{/MktAnalogValue}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Possibly time-varying max MW or MVA and optionally Min MW limit or MVA limit (Y1 and Y2, respectively) applied as a default value if no specific constraint limits are specified for a contingency analysis.
         *
         * Use CurveSchedule XAxisUnits to specify MW or MVA.
         *
         */
        class DefaultConstraintLimit extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DefaultConstraintLimit;
                if (null == bucket)
                   cim_data.DefaultConstraintLimit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DefaultConstraintLimit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "DefaultConstraintLimit";
                base.parse_attribute (/<cim:DefaultConstraintLimit.SecurityConstraintSum\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SecurityConstraintSum", sub, context);

                var bucket = context.parsed.DefaultConstraintLimit;
                if (null == bucket)
                   context.parsed.DefaultConstraintLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "DefaultConstraintLimit", "SecurityConstraintSum", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DefaultConstraintLimit_collapse" aria-expanded="true" aria-controls="DefaultConstraintLimit_collapse" style="margin-left: 10px;">DefaultConstraintLimit</a></legend>
                    <div id="DefaultConstraintLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#SecurityConstraintSum}}<div><b>SecurityConstraintSum</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SecurityConstraintSum}}&quot;);})'>{{SecurityConstraintSum}}</a></div>{{/SecurityConstraintSum}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DefaultConstraintLimit_collapse" aria-expanded="true" aria-controls="DefaultConstraintLimit_collapse" style="margin-left: 10px;">DefaultConstraintLimit</a></legend>
                    <div id="DefaultConstraintLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SecurityConstraintSum'>SecurityConstraintSum: </label><div class='col-sm-8'><input id='SecurityConstraintSum' class='form-control' type='text'{{#SecurityConstraintSum}} value='{{SecurityConstraintSum}}'{{/SecurityConstraintSum}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Market subclass of IEC61970:ControlArea
         *
         */
        class MktControlArea extends ControlArea.ControlArea
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktControlArea;
                if (null == bucket)
                   cim_data.MktControlArea = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktControlArea[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ControlArea.ControlArea.prototype.parse.call (this, context, sub);
                obj.cls = "MktControlArea";

                var bucket = context.parsed.MktControlArea;
                if (null == bucket)
                   context.parsed.MktControlArea = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ControlArea.ControlArea.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MktControlArea_collapse" aria-expanded="true" aria-controls="MktControlArea_collapse" style="margin-left: 10px;">MktControlArea</a></legend>
                    <div id="MktControlArea_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ControlArea.ControlArea.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MktControlArea_collapse" aria-expanded="true" aria-controls="MktControlArea_collapse" style="margin-left: 10px;">MktControlArea</a></legend>
                    <div id="MktControlArea_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ControlArea.ControlArea.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * To be used only to constrain a quantity that cannot be associated with a terminal.
         *
         * For example, a registered generating unit that is not electrically connected to the network.
         *
         */
        class NodeConstraintTerm extends ConstraintTerm
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.NodeConstraintTerm;
                if (null == bucket)
                   cim_data.NodeConstraintTerm = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.NodeConstraintTerm[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ConstraintTerm.prototype.parse.call (this, context, sub);
                obj.cls = "NodeConstraintTerm";
                base.parse_attribute (/<cim:NodeConstraintTerm.MktConnectivityNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktConnectivityNode", sub, context);

                var bucket = context.parsed.NodeConstraintTerm;
                if (null == bucket)
                   context.parsed.NodeConstraintTerm = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ConstraintTerm.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "NodeConstraintTerm", "MktConnectivityNode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#NodeConstraintTerm_collapse" aria-expanded="true" aria-controls="NodeConstraintTerm_collapse" style="margin-left: 10px;">NodeConstraintTerm</a></legend>
                    <div id="NodeConstraintTerm_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ConstraintTerm.prototype.template.call (this) +
                    `
                    {{#MktConnectivityNode}}<div><b>MktConnectivityNode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktConnectivityNode}}&quot;);})'>{{MktConnectivityNode}}</a></div>{{/MktConnectivityNode}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#NodeConstraintTerm_collapse" aria-expanded="true" aria-controls="NodeConstraintTerm_collapse" style="margin-left: 10px;">NodeConstraintTerm</a></legend>
                    <div id="NodeConstraintTerm_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ConstraintTerm.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktConnectivityNode'>MktConnectivityNode: </label><div class='col-sm-8'><input id='MktConnectivityNode' class='form-control' type='text'{{#MktConnectivityNode}} value='{{MktConnectivityNode}}'{{/MktConnectivityNode}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * A constraint term associated with a specific terminal on a physical piece of equipment.
         *
         */
        class TerminalConstraintTerm extends ConstraintTerm
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TerminalConstraintTerm;
                if (null == bucket)
                   cim_data.TerminalConstraintTerm = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TerminalConstraintTerm[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ConstraintTerm.prototype.parse.call (this, context, sub);
                obj.cls = "TerminalConstraintTerm";
                base.parse_attribute (/<cim:TerminalConstraintTerm.MktTerminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktTerminal", sub, context);

                var bucket = context.parsed.TerminalConstraintTerm;
                if (null == bucket)
                   context.parsed.TerminalConstraintTerm = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ConstraintTerm.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "TerminalConstraintTerm", "MktTerminal", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TerminalConstraintTerm_collapse" aria-expanded="true" aria-controls="TerminalConstraintTerm_collapse" style="margin-left: 10px;">TerminalConstraintTerm</a></legend>
                    <div id="TerminalConstraintTerm_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ConstraintTerm.prototype.template.call (this) +
                    `
                    {{#MktTerminal}}<div><b>MktTerminal</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktTerminal}}&quot;);})'>{{MktTerminal}}</a></div>{{/MktTerminal}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TerminalConstraintTerm_collapse" aria-expanded="true" aria-controls="TerminalConstraintTerm_collapse" style="margin-left: 10px;">TerminalConstraintTerm</a></legend>
                    <div id="TerminalConstraintTerm_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ConstraintTerm.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktTerminal'>MktTerminal: </label><div class='col-sm-8'><input id='MktTerminal' class='form-control' type='text'{{#MktTerminal}} value='{{MktTerminal}}'{{/MktTerminal}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Specifies the start time, stop time, level for an EnergyTransaction.
         *
         */
        class EnergyProfile extends Profile
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EnergyProfile;
                if (null == bucket)
                   cim_data.EnergyProfile = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EnergyProfile[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Profile.prototype.parse.call (this, context, sub);
                obj.cls = "EnergyProfile";
                base.parse_attribute (/<cim:EnergyProfile.EnergyTransaction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyTransaction", sub, context);
                base.parse_attribute (/<cim:EnergyProfile.TransactionBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransactionBid", sub, context);

                var bucket = context.parsed.EnergyProfile;
                if (null == bucket)
                   context.parsed.EnergyProfile = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Profile.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "EnergyProfile", "EnergyTransaction", fields);
                base.export_attribute (obj, "EnergyProfile", "TransactionBid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EnergyProfile_collapse" aria-expanded="true" aria-controls="EnergyProfile_collapse" style="margin-left: 10px;">EnergyProfile</a></legend>
                    <div id="EnergyProfile_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Profile.prototype.template.call (this) +
                    `
                    {{#EnergyTransaction}}<div><b>EnergyTransaction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EnergyTransaction}}&quot;);})'>{{EnergyTransaction}}</a></div>{{/EnergyTransaction}}
                    {{#TransactionBid}}<div><b>TransactionBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TransactionBid}}&quot;);})'>{{TransactionBid}}</a></div>{{/TransactionBid}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EnergyProfile_collapse" aria-expanded="true" aria-controls="EnergyProfile_collapse" style="margin-left: 10px;">EnergyProfile</a></legend>
                    <div id="EnergyProfile_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Profile.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='EnergyTransaction'>EnergyTransaction: </label><div class='col-sm-8'><input id='EnergyTransaction' class='form-control' type='text'{{#EnergyTransaction}} value='{{EnergyTransaction}}'{{/EnergyTransaction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TransactionBid'>TransactionBid: </label><div class='col-sm-8'><input id='TransactionBid' class='form-control' type='text'{{#TransactionBid}} value='{{TransactionBid}}'{{/TransactionBid}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        return (
            {
                DefaultConstraintLimit: DefaultConstraintLimit,
                DistributionFactorSet: DistributionFactorSet,
                UnitInitialConditions: UnitInitialConditions,
                MktControlArea: MktControlArea,
                TransmissionInterfaceRightEntitlement: TransmissionInterfaceRightEntitlement,
                BranchEndFlow: BranchEndFlow,
                DefaultBidCurve: DefaultBidCurve,
                Profile: Profile,
                MktSeriesCompensator: MktSeriesCompensator,
                BaseCaseConstraintLimit: BaseCaseConstraintLimit,
                TransferInterface: TransferInterface,
                MktDiscreteValue: MktDiscreteValue,
                DefaultBid: DefaultBid,
                MktACLineSegment: MktACLineSegment,
                SysLoadDistributionFactor: SysLoadDistributionFactor,
                DiscreteMeasurementValueQuality: DiscreteMeasurementValueQuality,
                TransmissionPath: TransmissionPath,
                ReserveDemandCurve: ReserveDemandCurve,
                LossSensitivity: LossSensitivity,
                ASRequirements: ASRequirements,
                AnalogMeasurementValueQuality: AnalogMeasurementValueQuality,
                MktAnalogLimit: MktAnalogLimit,
                TREntitlement: TREntitlement,
                LoadDistributionFactor: LoadDistributionFactor,
                EnergyPriceIndex: EnergyPriceIndex,
                TransmissionReservation: TransmissionReservation,
                IntermittentResourceEligibility: IntermittentResourceEligibility,
                InterchangeETCData: InterchangeETCData,
                MktAnalogValue: MktAnalogValue,
                MWLimitSchedule: MWLimitSchedule,
                TransmissionCapacity: TransmissionCapacity,
                MktTapChanger: MktTapChanger,
                GenDistributionFactor: GenDistributionFactor,
                ContingencyConstraintLimit: ContingencyConstraintLimit,
                GeneratingUnitDynamicValues: GeneratingUnitDynamicValues,
                GenericConstraints: GenericConstraints,
                MktShuntCompensator: MktShuntCompensator,
                SecurityConstraintSum: SecurityConstraintSum,
                TerminalConstraintTerm: TerminalConstraintTerm,
                SwitchStatus: SwitchStatus,
                TapChangerDynamicData: TapChangerDynamicData,
                SecurityConstraints: SecurityConstraints,
                ShuntCompensatorDynamicData: ShuntCompensatorDynamicData,
                EnergyProfile: EnergyProfile,
                SCADAInformation: SCADAInformation,
                ConstraintTerm: ConstraintTerm,
                NodeConstraintTerm: NodeConstraintTerm,
                ServicePoint: ServicePoint,
                MktSwitch: MktSwitch,
                AreaLoadCurve: AreaLoadCurve,
                EnergyTransaction: EnergyTransaction,
                MktAnalogLimitSet: MktAnalogLimitSet,
                ControlAreaSolutionData: ControlAreaSolutionData,
                DefaultBidCurveData: DefaultBidCurveData,
                ProfileData: ProfileData,
                EnergyConsumerData: EnergyConsumerData,
                TransferInterfaceSolution: TransferInterfaceSolution,
                InterchangeSchedule: InterchangeSchedule
            }
        );
    }
);