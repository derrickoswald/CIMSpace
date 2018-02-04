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
                var bucket = cim_data.TransmissionCapacity;
                if (null == bucket)
                   cim_data.TransmissionCapacity = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TransmissionCapacity[obj.id];
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

                base.export_element (obj, "TransmissionCapacity", "capacityBenefitMargin", "capacityBenefitMargin",  base.from_float, fields);
                base.export_element (obj, "TransmissionCapacity", "operationalTransmissionCapacity", "operationalTransmissionCapacity",  base.from_float, fields);
                base.export_element (obj, "TransmissionCapacity", "OTC15min_emergency", "OTC15min_emergency",  base.from_float, fields);
                base.export_element (obj, "TransmissionCapacity", "OTCemergency", "OTCemergency",  base.from_float, fields);
                base.export_element (obj, "TransmissionCapacity", "POD", "POD",  base.from_string, fields);
                base.export_element (obj, "TransmissionCapacity", "POR", "POR",  base.from_string, fields);
                base.export_element (obj, "TransmissionCapacity", "startOperatingDate", "startOperatingDate",  base.from_datetime, fields);
                base.export_element (obj, "TransmissionCapacity", "totalTransmissionCapacity", "totalTransmissionCapacity",  base.from_float, fields);
                base.export_attribute (obj, "TransmissionCapacity", "Flowgate", "Flowgate", fields);
                base.export_attribute (obj, "TransmissionCapacity", "GenericConstraints", "GenericConstraints", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TransmissionCapacity_collapse" aria-expanded="true" aria-controls="TransmissionCapacity_collapse" style="margin-left: 10px;">TransmissionCapacity</a></legend>
                    <div id="TransmissionCapacity_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TransmissionCapacity_collapse" aria-expanded="true" aria-controls="{{id}}_TransmissionCapacity_collapse" style="margin-left: 10px;">TransmissionCapacity</a></legend>
                    <div id="{{id}}_TransmissionCapacity_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_capacityBenefitMargin'>capacityBenefitMargin: </label><div class='col-sm-8'><input id='{{id}}_capacityBenefitMargin' class='form-control' type='text'{{#capacityBenefitMargin}} value='{{capacityBenefitMargin}}'{{/capacityBenefitMargin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_operationalTransmissionCapacity'>operationalTransmissionCapacity: </label><div class='col-sm-8'><input id='{{id}}_operationalTransmissionCapacity' class='form-control' type='text'{{#operationalTransmissionCapacity}} value='{{operationalTransmissionCapacity}}'{{/operationalTransmissionCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OTC15min_emergency'>OTC15min_emergency: </label><div class='col-sm-8'><input id='{{id}}_OTC15min_emergency' class='form-control' type='text'{{#OTC15min_emergency}} value='{{OTC15min_emergency}}'{{/OTC15min_emergency}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OTCemergency'>OTCemergency: </label><div class='col-sm-8'><input id='{{id}}_OTCemergency' class='form-control' type='text'{{#OTCemergency}} value='{{OTCemergency}}'{{/OTCemergency}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_POD'>POD: </label><div class='col-sm-8'><input id='{{id}}_POD' class='form-control' type='text'{{#POD}} value='{{POD}}'{{/POD}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_POR'>POR: </label><div class='col-sm-8'><input id='{{id}}_POR' class='form-control' type='text'{{#POR}} value='{{POR}}'{{/POR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_startOperatingDate'>startOperatingDate: </label><div class='col-sm-8'><input id='{{id}}_startOperatingDate' class='form-control' type='text'{{#startOperatingDate}} value='{{startOperatingDate}}'{{/startOperatingDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_totalTransmissionCapacity'>totalTransmissionCapacity: </label><div class='col-sm-8'><input id='{{id}}_totalTransmissionCapacity' class='form-control' type='text'{{#totalTransmissionCapacity}} value='{{totalTransmissionCapacity}}'{{/totalTransmissionCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Flowgate'>Flowgate: </label><div class='col-sm-8'><input id='{{id}}_Flowgate' class='form-control' type='text'{{#Flowgate}} value='{{Flowgate}}'{{/Flowgate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GenericConstraints'>GenericConstraints: </label><div class='col-sm-8'><input id='{{id}}_GenericConstraints' class='form-control' type='text'{{#GenericConstraints}} value='{{GenericConstraints}}'{{/GenericConstraints}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TransmissionCapacity" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_capacityBenefitMargin").value; if ("" != temp) obj.capacityBenefitMargin = temp;
                temp = document.getElementById (id + "_operationalTransmissionCapacity").value; if ("" != temp) obj.operationalTransmissionCapacity = temp;
                temp = document.getElementById (id + "_OTC15min_emergency").value; if ("" != temp) obj.OTC15min_emergency = temp;
                temp = document.getElementById (id + "_OTCemergency").value; if ("" != temp) obj.OTCemergency = temp;
                temp = document.getElementById (id + "_POD").value; if ("" != temp) obj.POD = temp;
                temp = document.getElementById (id + "_POR").value; if ("" != temp) obj.POR = temp;
                temp = document.getElementById (id + "_startOperatingDate").value; if ("" != temp) obj.startOperatingDate = temp;
                temp = document.getElementById (id + "_totalTransmissionCapacity").value; if ("" != temp) obj.totalTransmissionCapacity = temp;
                temp = document.getElementById (id + "_Flowgate").value; if ("" != temp) obj.Flowgate = temp;
                temp = document.getElementById (id + "_GenericConstraints").value; if ("" != temp) obj.GenericConstraints = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Flowgate", "0..1", "0..*", "Flowgate", "TransmissionCapacity"],
                            ["GenericConstraints", "0..1", "0..*", "GenericConstraints", "TransmissionCapacity"]
                        ]
                    )
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
                var bucket = cim_data.ShuntCompensatorDynamicData;
                if (null == bucket)
                   cim_data.ShuntCompensatorDynamicData = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ShuntCompensatorDynamicData[obj.id];
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

                base.export_element (obj, "ShuntCompensatorDynamicData", "mVARInjection", "mVARInjection",  base.from_float, fields);
                base.export_element (obj, "ShuntCompensatorDynamicData", "connectionStatus", "connectionStatus",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorDynamicData", "desiredVoltage", "desiredVoltage",  base.from_float, fields);
                base.export_element (obj, "ShuntCompensatorDynamicData", "voltageRegulationStatus", "voltageRegulationStatus",  base.from_boolean, fields);
                base.export_element (obj, "ShuntCompensatorDynamicData", "stepPosition", "stepPosition",  base.from_string, fields);
                base.export_attribute (obj, "ShuntCompensatorDynamicData", "MktShuntCompensator", "MktShuntCompensator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ShuntCompensatorDynamicData_collapse" aria-expanded="true" aria-controls="ShuntCompensatorDynamicData_collapse" style="margin-left: 10px;">ShuntCompensatorDynamicData</a></legend>
                    <div id="ShuntCompensatorDynamicData_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ShuntCompensatorDynamicData_collapse" aria-expanded="true" aria-controls="{{id}}_ShuntCompensatorDynamicData_collapse" style="margin-left: 10px;">ShuntCompensatorDynamicData</a></legend>
                    <div id="{{id}}_ShuntCompensatorDynamicData_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mVARInjection'>mVARInjection: </label><div class='col-sm-8'><input id='{{id}}_mVARInjection' class='form-control' type='text'{{#mVARInjection}} value='{{mVARInjection}}'{{/mVARInjection}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_connectionStatus'>connectionStatus: </label><div class='col-sm-8'><input id='{{id}}_connectionStatus' class='form-control' type='text'{{#connectionStatus}} value='{{connectionStatus}}'{{/connectionStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_desiredVoltage'>desiredVoltage: </label><div class='col-sm-8'><input id='{{id}}_desiredVoltage' class='form-control' type='text'{{#desiredVoltage}} value='{{desiredVoltage}}'{{/desiredVoltage}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_voltageRegulationStatus'>voltageRegulationStatus: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_voltageRegulationStatus' class='form-check-input' type='checkbox'{{#voltageRegulationStatus}} checked{{/voltageRegulationStatus}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_stepPosition'>stepPosition: </label><div class='col-sm-8'><input id='{{id}}_stepPosition' class='form-control' type='text'{{#stepPosition}} value='{{stepPosition}}'{{/stepPosition}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MktShuntCompensator'>MktShuntCompensator: </label><div class='col-sm-8'><input id='{{id}}_MktShuntCompensator' class='form-control' type='text'{{#MktShuntCompensator}} value='{{MktShuntCompensator}}'{{/MktShuntCompensator}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ShuntCompensatorDynamicData" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_mVARInjection").value; if ("" != temp) obj.mVARInjection = temp;
                temp = document.getElementById (id + "_connectionStatus").value; if ("" != temp) obj.connectionStatus = temp;
                temp = document.getElementById (id + "_desiredVoltage").value; if ("" != temp) obj.desiredVoltage = temp;
                temp = document.getElementById (id + "_voltageRegulationStatus").checked; if (temp) obj.voltageRegulationStatus = true;
                temp = document.getElementById (id + "_stepPosition").value; if ("" != temp) obj.stepPosition = temp;
                temp = document.getElementById (id + "_MktShuntCompensator").value; if ("" != temp) obj.MktShuntCompensator = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MktShuntCompensator", "1", "0..*", "MktShuntCompensator", "ShuntCompensatorDynamicData"]
                        ]
                    )
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
                var bucket = cim_data.TREntitlement;
                if (null == bucket)
                   cim_data.TREntitlement = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TREntitlement[obj.id];
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

                base.export_element (obj, "TREntitlement", "entitlement", "entitlement",  base.from_float, fields);
                base.export_element (obj, "TREntitlement", "startOperatingDate", "startOperatingDate",  base.from_datetime, fields);
                base.export_attribute (obj, "TREntitlement", "TransmissionContractRight", "TransmissionContractRight", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TREntitlement_collapse" aria-expanded="true" aria-controls="TREntitlement_collapse" style="margin-left: 10px;">TREntitlement</a></legend>
                    <div id="TREntitlement_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TREntitlement_collapse" aria-expanded="true" aria-controls="{{id}}_TREntitlement_collapse" style="margin-left: 10px;">TREntitlement</a></legend>
                    <div id="{{id}}_TREntitlement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_entitlement'>entitlement: </label><div class='col-sm-8'><input id='{{id}}_entitlement' class='form-control' type='text'{{#entitlement}} value='{{entitlement}}'{{/entitlement}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_startOperatingDate'>startOperatingDate: </label><div class='col-sm-8'><input id='{{id}}_startOperatingDate' class='form-control' type='text'{{#startOperatingDate}} value='{{startOperatingDate}}'{{/startOperatingDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TransmissionContractRight'>TransmissionContractRight: </label><div class='col-sm-8'><input id='{{id}}_TransmissionContractRight' class='form-control' type='text'{{#TransmissionContractRight}} value='{{TransmissionContractRight}}'{{/TransmissionContractRight}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TREntitlement" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_entitlement").value; if ("" != temp) obj.entitlement = temp;
                temp = document.getElementById (id + "_startOperatingDate").value; if ("" != temp) obj.startOperatingDate = temp;
                temp = document.getElementById (id + "_TransmissionContractRight").value; if ("" != temp) obj.TransmissionContractRight = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TransmissionContractRight", "1", "0..*", "ContractRight", "TREntitlement"]
                        ]
                    )
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
                var bucket = cim_data.ContingencyConstraintLimit;
                if (null == bucket)
                   cim_data.ContingencyConstraintLimit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ContingencyConstraintLimit[obj.id];
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

                base.export_attribute (obj, "ContingencyConstraintLimit", "SecurityConstraintSum", "SecurityConstraintSum", fields);
                base.export_attribute (obj, "ContingencyConstraintLimit", "MktContingency", "MktContingency", fields);
                base.export_attribute (obj, "ContingencyConstraintLimit", "MWLimitSchedules", "MWLimitSchedules", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ContingencyConstraintLimit_collapse" aria-expanded="true" aria-controls="ContingencyConstraintLimit_collapse" style="margin-left: 10px;">ContingencyConstraintLimit</a></legend>
                    <div id="ContingencyConstraintLimit_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ContingencyConstraintLimit_collapse" aria-expanded="true" aria-controls="{{id}}_ContingencyConstraintLimit_collapse" style="margin-left: 10px;">ContingencyConstraintLimit</a></legend>
                    <div id="{{id}}_ContingencyConstraintLimit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SecurityConstraintSum'>SecurityConstraintSum: </label><div class='col-sm-8'><input id='{{id}}_SecurityConstraintSum' class='form-control' type='text'{{#SecurityConstraintSum}} value='{{SecurityConstraintSum}}'{{/SecurityConstraintSum}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MktContingency'>MktContingency: </label><div class='col-sm-8'><input id='{{id}}_MktContingency' class='form-control' type='text'{{#MktContingency}} value='{{MktContingency}}'{{/MktContingency}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MWLimitSchedules'>MWLimitSchedules: </label><div class='col-sm-8'><input id='{{id}}_MWLimitSchedules' class='form-control' type='text'{{#MWLimitSchedules}} value='{{MWLimitSchedules}}'{{/MWLimitSchedules}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ContingencyConstraintLimit" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_SecurityConstraintSum").value; if ("" != temp) obj.SecurityConstraintSum = temp;
                temp = document.getElementById (id + "_MktContingency").value; if ("" != temp) obj.MktContingency = temp;
                temp = document.getElementById (id + "_MWLimitSchedules").value; if ("" != temp) obj.MWLimitSchedules = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["SecurityConstraintSum", "1", "0..*", "SecurityConstraintSum", "ContingencyConstraintLimits"],
                            ["MktContingency", "1", "0..*", "MktContingency", "ContingencyConstraintLimit"],
                            ["MWLimitSchedules", "1", "1", "MWLimitSchedule", "SecurityConstraintLimit"]
                        ]
                    )
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
                var bucket = cim_data.MktAnalogValue;
                if (null == bucket)
                   cim_data.MktAnalogValue = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MktAnalogValue[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Meas.AnalogValue.prototype.parse.call (this, context, sub);
                obj.cls = "MktAnalogValue";
                base.parse_attributes (/<cim:MktAnalogValue.AnalogMeasurementValueQuality\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AnalogMeasurementValueQuality", sub, context);
                var bucket = context.parsed.MktAnalogValue;
                if (null == bucket)
                   context.parsed.MktAnalogValue = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Meas.AnalogValue.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "MktAnalogValue", "AnalogMeasurementValueQuality", "AnalogMeasurementValueQuality", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MktAnalogValue_collapse" aria-expanded="true" aria-controls="MktAnalogValue_collapse" style="margin-left: 10px;">MktAnalogValue</a></legend>
                    <div id="MktAnalogValue_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Meas.AnalogValue.prototype.template.call (this) +
                    `
                    {{#AnalogMeasurementValueQuality}}<div><b>AnalogMeasurementValueQuality</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/AnalogMeasurementValueQuality}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.AnalogMeasurementValueQuality) obj.AnalogMeasurementValueQuality_string = obj.AnalogMeasurementValueQuality.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.AnalogMeasurementValueQuality_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MktAnalogValue_collapse" aria-expanded="true" aria-controls="{{id}}_MktAnalogValue_collapse" style="margin-left: 10px;">MktAnalogValue</a></legend>
                    <div id="{{id}}_MktAnalogValue_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Meas.AnalogValue.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "MktAnalogValue" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AnalogMeasurementValueQuality", "0..*", "1", "AnalogMeasurementValueQuality", "MktAnalogValue"]
                        ]
                    )
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
                var bucket = cim_data.GeneratingUnitDynamicValues;
                if (null == bucket)
                   cim_data.GeneratingUnitDynamicValues = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GeneratingUnitDynamicValues[obj.id];
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

                base.export_element (obj, "GeneratingUnitDynamicValues", "lossFactor", "lossFactor",  base.from_float, fields);
                base.export_element (obj, "GeneratingUnitDynamicValues", "maximumMW", "maximumMW",  base.from_float, fields);
                base.export_element (obj, "GeneratingUnitDynamicValues", "minimumMW", "minimumMW",  base.from_float, fields);
                base.export_element (obj, "GeneratingUnitDynamicValues", "mVAR", "mVAR",  base.from_float, fields);
                base.export_element (obj, "GeneratingUnitDynamicValues", "mw", "mw",  base.from_float, fields);
                base.export_element (obj, "GeneratingUnitDynamicValues", "sensitivity", "sensitivity",  base.from_float, fields);
                base.export_attribute (obj, "GeneratingUnitDynamicValues", "Flowgate", "Flowgate", fields);
                base.export_attribute (obj, "GeneratingUnitDynamicValues", "MktGeneratingUnit", "MktGeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#GeneratingUnitDynamicValues_collapse" aria-expanded="true" aria-controls="GeneratingUnitDynamicValues_collapse" style="margin-left: 10px;">GeneratingUnitDynamicValues</a></legend>
                    <div id="GeneratingUnitDynamicValues_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_GeneratingUnitDynamicValues_collapse" aria-expanded="true" aria-controls="{{id}}_GeneratingUnitDynamicValues_collapse" style="margin-left: 10px;">GeneratingUnitDynamicValues</a></legend>
                    <div id="{{id}}_GeneratingUnitDynamicValues_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lossFactor'>lossFactor: </label><div class='col-sm-8'><input id='{{id}}_lossFactor' class='form-control' type='text'{{#lossFactor}} value='{{lossFactor}}'{{/lossFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maximumMW'>maximumMW: </label><div class='col-sm-8'><input id='{{id}}_maximumMW' class='form-control' type='text'{{#maximumMW}} value='{{maximumMW}}'{{/maximumMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minimumMW'>minimumMW: </label><div class='col-sm-8'><input id='{{id}}_minimumMW' class='form-control' type='text'{{#minimumMW}} value='{{minimumMW}}'{{/minimumMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mVAR'>mVAR: </label><div class='col-sm-8'><input id='{{id}}_mVAR' class='form-control' type='text'{{#mVAR}} value='{{mVAR}}'{{/mVAR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mw'>mw: </label><div class='col-sm-8'><input id='{{id}}_mw' class='form-control' type='text'{{#mw}} value='{{mw}}'{{/mw}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sensitivity'>sensitivity: </label><div class='col-sm-8'><input id='{{id}}_sensitivity' class='form-control' type='text'{{#sensitivity}} value='{{sensitivity}}'{{/sensitivity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Flowgate'>Flowgate: </label><div class='col-sm-8'><input id='{{id}}_Flowgate' class='form-control' type='text'{{#Flowgate}} value='{{Flowgate}}'{{/Flowgate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MktGeneratingUnit'>MktGeneratingUnit: </label><div class='col-sm-8'><input id='{{id}}_MktGeneratingUnit' class='form-control' type='text'{{#MktGeneratingUnit}} value='{{MktGeneratingUnit}}'{{/MktGeneratingUnit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GeneratingUnitDynamicValues" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_lossFactor").value; if ("" != temp) obj.lossFactor = temp;
                temp = document.getElementById (id + "_maximumMW").value; if ("" != temp) obj.maximumMW = temp;
                temp = document.getElementById (id + "_minimumMW").value; if ("" != temp) obj.minimumMW = temp;
                temp = document.getElementById (id + "_mVAR").value; if ("" != temp) obj.mVAR = temp;
                temp = document.getElementById (id + "_mw").value; if ("" != temp) obj.mw = temp;
                temp = document.getElementById (id + "_sensitivity").value; if ("" != temp) obj.sensitivity = temp;
                temp = document.getElementById (id + "_Flowgate").value; if ("" != temp) obj.Flowgate = temp;
                temp = document.getElementById (id + "_MktGeneratingUnit").value; if ("" != temp) obj.MktGeneratingUnit = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Flowgate", "0..1", "0..*", "Flowgate", "GeneratingUnitDynamicValues"],
                            ["MktGeneratingUnit", "1", "0..*", "MktGeneratingUnit", "GeneratingUnitDynamicValues"]
                        ]
                    )
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
                var bucket = cim_data.TransmissionPath;
                if (null == bucket)
                   cim_data.TransmissionPath = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TransmissionPath[obj.id];
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
                base.parse_attributes (/<cim:TransmissionPath.TransmissionReservation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionReservation", sub, context);
                base.parse_attribute (/<cim:TransmissionPath.For\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "For", sub, context);
                base.parse_attributes (/<cim:TransmissionPath.LocatedOn\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LocatedOn", sub, context);
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

                base.export_element (obj, "TransmissionPath", "availTransferCapability", "availTransferCapability",  base.from_string, fields);
                base.export_element (obj, "TransmissionPath", "parallelPathFlag", "parallelPathFlag",  base.from_boolean, fields);
                base.export_element (obj, "TransmissionPath", "totalTransferCapability", "totalTransferCapability",  base.from_string, fields);
                base.export_attribute (obj, "TransmissionPath", "DeliveryPoint", "DeliveryPoint", fields);
                base.export_attributes (obj, "TransmissionPath", "TransmissionReservation", "TransmissionReservation", fields);
                base.export_attribute (obj, "TransmissionPath", "For", "For", fields);
                base.export_attributes (obj, "TransmissionPath", "LocatedOn", "LocatedOn", fields);
                base.export_attribute (obj, "TransmissionPath", "PointOfReceipt", "PointOfReceipt", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TransmissionPath_collapse" aria-expanded="true" aria-controls="TransmissionPath_collapse" style="margin-left: 10px;">TransmissionPath</a></legend>
                    <div id="TransmissionPath_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#availTransferCapability}}<div><b>availTransferCapability</b>: {{availTransferCapability}}</div>{{/availTransferCapability}}
                    {{#parallelPathFlag}}<div><b>parallelPathFlag</b>: {{parallelPathFlag}}</div>{{/parallelPathFlag}}
                    {{#totalTransferCapability}}<div><b>totalTransferCapability</b>: {{totalTransferCapability}}</div>{{/totalTransferCapability}}
                    {{#DeliveryPoint}}<div><b>DeliveryPoint</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DeliveryPoint}}&quot;);})'>{{DeliveryPoint}}</a></div>{{/DeliveryPoint}}
                    {{#TransmissionReservation}}<div><b>TransmissionReservation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/TransmissionReservation}}
                    {{#For}}<div><b>For</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{For}}&quot;);})'>{{For}}</a></div>{{/For}}
                    {{#LocatedOn}}<div><b>LocatedOn</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/LocatedOn}}
                    {{#PointOfReceipt}}<div><b>PointOfReceipt</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PointOfReceipt}}&quot;);})'>{{PointOfReceipt}}</a></div>{{/PointOfReceipt}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.TransmissionReservation) obj.TransmissionReservation_string = obj.TransmissionReservation.join ();
                if (obj.LocatedOn) obj.LocatedOn_string = obj.LocatedOn.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TransmissionReservation_string;
                delete obj.LocatedOn_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TransmissionPath_collapse" aria-expanded="true" aria-controls="{{id}}_TransmissionPath_collapse" style="margin-left: 10px;">TransmissionPath</a></legend>
                    <div id="{{id}}_TransmissionPath_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_availTransferCapability'>availTransferCapability: </label><div class='col-sm-8'><input id='{{id}}_availTransferCapability' class='form-control' type='text'{{#availTransferCapability}} value='{{availTransferCapability}}'{{/availTransferCapability}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_parallelPathFlag'>parallelPathFlag: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_parallelPathFlag' class='form-check-input' type='checkbox'{{#parallelPathFlag}} checked{{/parallelPathFlag}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_totalTransferCapability'>totalTransferCapability: </label><div class='col-sm-8'><input id='{{id}}_totalTransferCapability' class='form-control' type='text'{{#totalTransferCapability}} value='{{totalTransferCapability}}'{{/totalTransferCapability}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DeliveryPoint'>DeliveryPoint: </label><div class='col-sm-8'><input id='{{id}}_DeliveryPoint' class='form-control' type='text'{{#DeliveryPoint}} value='{{DeliveryPoint}}'{{/DeliveryPoint}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_For'>For: </label><div class='col-sm-8'><input id='{{id}}_For' class='form-control' type='text'{{#For}} value='{{For}}'{{/For}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LocatedOn'>LocatedOn: </label><div class='col-sm-8'><input id='{{id}}_LocatedOn' class='form-control' type='text'{{#LocatedOn}} value='{{LocatedOn}}_string'{{/LocatedOn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PointOfReceipt'>PointOfReceipt: </label><div class='col-sm-8'><input id='{{id}}_PointOfReceipt' class='form-control' type='text'{{#PointOfReceipt}} value='{{PointOfReceipt}}'{{/PointOfReceipt}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TransmissionPath" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_availTransferCapability").value; if ("" != temp) obj.availTransferCapability = temp;
                temp = document.getElementById (id + "_parallelPathFlag").checked; if (temp) obj.parallelPathFlag = true;
                temp = document.getElementById (id + "_totalTransferCapability").value; if ("" != temp) obj.totalTransferCapability = temp;
                temp = document.getElementById (id + "_DeliveryPoint").value; if ("" != temp) obj.DeliveryPoint = temp;
                temp = document.getElementById (id + "_For").value; if ("" != temp) obj.For = temp;
                temp = document.getElementById (id + "_LocatedOn").value; if ("" != temp) obj.LocatedOn = temp.split (",");
                temp = document.getElementById (id + "_PointOfReceipt").value; if ("" != temp) obj.PointOfReceipt = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["DeliveryPoint", "1", "0..*", "ServicePoint", "PODTransmissionPath"],
                            ["TransmissionReservation", "0..*", "1", "TransmissionReservation", "TransmissionPath"],
                            ["For", "1", "0..*", "TransmissionCorridor", "ContainedIn"],
                            ["LocatedOn", "0..*", "0..*", "TransmissionProduct", "LocationFor"],
                            ["PointOfReceipt", "1", "0..*", "ServicePoint", "PORTransmissionPath"]
                        ]
                    )
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
                var bucket = cim_data.ConstraintTerm;
                if (null == bucket)
                   cim_data.ConstraintTerm = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ConstraintTerm[obj.id];
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

                base.export_element (obj, "ConstraintTerm", "factor", "factor",  base.from_string, fields);
                base.export_element (obj, "ConstraintTerm", "function", "function",  base.from_string, fields);
                base.export_attribute (obj, "ConstraintTerm", "SecurityConstraintSum", "SecurityConstraintSum", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ConstraintTerm_collapse" aria-expanded="true" aria-controls="ConstraintTerm_collapse" style="margin-left: 10px;">ConstraintTerm</a></legend>
                    <div id="ConstraintTerm_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ConstraintTerm_collapse" aria-expanded="true" aria-controls="{{id}}_ConstraintTerm_collapse" style="margin-left: 10px;">ConstraintTerm</a></legend>
                    <div id="{{id}}_ConstraintTerm_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_factor'>factor: </label><div class='col-sm-8'><input id='{{id}}_factor' class='form-control' type='text'{{#factor}} value='{{factor}}'{{/factor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_function'>function: </label><div class='col-sm-8'><input id='{{id}}_function' class='form-control' type='text'{{#function}} value='{{function}}'{{/function}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SecurityConstraintSum'>SecurityConstraintSum: </label><div class='col-sm-8'><input id='{{id}}_SecurityConstraintSum' class='form-control' type='text'{{#SecurityConstraintSum}} value='{{SecurityConstraintSum}}'{{/SecurityConstraintSum}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ConstraintTerm" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_factor").value; if ("" != temp) obj.factor = temp;
                temp = document.getElementById (id + "_function").value; if ("" != temp) obj.function = temp;
                temp = document.getElementById (id + "_SecurityConstraintSum").value; if ("" != temp) obj.SecurityConstraintSum = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["SecurityConstraintSum", "1", "0..*", "SecurityConstraintSum", "ConstraintTerms"]
                        ]
                    )
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
                var bucket = cim_data.MktDiscreteValue;
                if (null == bucket)
                   cim_data.MktDiscreteValue = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MktDiscreteValue[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Meas.DiscreteValue.prototype.parse.call (this, context, sub);
                obj.cls = "MktDiscreteValue";
                base.parse_attributes (/<cim:MktDiscreteValue.DiscreteMeasurementValueQuality\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DiscreteMeasurementValueQuality", sub, context);
                var bucket = context.parsed.MktDiscreteValue;
                if (null == bucket)
                   context.parsed.MktDiscreteValue = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Meas.DiscreteValue.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "MktDiscreteValue", "DiscreteMeasurementValueQuality", "DiscreteMeasurementValueQuality", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MktDiscreteValue_collapse" aria-expanded="true" aria-controls="MktDiscreteValue_collapse" style="margin-left: 10px;">MktDiscreteValue</a></legend>
                    <div id="MktDiscreteValue_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Meas.DiscreteValue.prototype.template.call (this) +
                    `
                    {{#DiscreteMeasurementValueQuality}}<div><b>DiscreteMeasurementValueQuality</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/DiscreteMeasurementValueQuality}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.DiscreteMeasurementValueQuality) obj.DiscreteMeasurementValueQuality_string = obj.DiscreteMeasurementValueQuality.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.DiscreteMeasurementValueQuality_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MktDiscreteValue_collapse" aria-expanded="true" aria-controls="{{id}}_MktDiscreteValue_collapse" style="margin-left: 10px;">MktDiscreteValue</a></legend>
                    <div id="{{id}}_MktDiscreteValue_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Meas.DiscreteValue.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "MktDiscreteValue" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["DiscreteMeasurementValueQuality", "0..*", "1", "DiscreteMeasurementValueQuality", "MktDiscreteValue"]
                        ]
                    )
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
                var bucket = cim_data.ASRequirements;
                if (null == bucket)
                   cim_data.ASRequirements = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ASRequirements[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ASRequirements";
                base.parse_element (/<cim:ASRequirements.intervalStartTime>([\s\S]*?)<\/cim:ASRequirements.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);
                base.parse_attributes (/<cim:ASRequirements.ReserveDemandCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReserveDemandCurve", sub, context);
                var bucket = context.parsed.ASRequirements;
                if (null == bucket)
                   context.parsed.ASRequirements = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ASRequirements", "intervalStartTime", "intervalStartTime",  base.from_datetime, fields);
                base.export_attributes (obj, "ASRequirements", "ReserveDemandCurve", "ReserveDemandCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ASRequirements_collapse" aria-expanded="true" aria-controls="ASRequirements_collapse" style="margin-left: 10px;">ASRequirements</a></legend>
                    <div id="ASRequirements_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#intervalStartTime}}<div><b>intervalStartTime</b>: {{intervalStartTime}}</div>{{/intervalStartTime}}
                    {{#ReserveDemandCurve}}<div><b>ReserveDemandCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ReserveDemandCurve}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ReserveDemandCurve) obj.ReserveDemandCurve_string = obj.ReserveDemandCurve.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ReserveDemandCurve_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ASRequirements_collapse" aria-expanded="true" aria-controls="{{id}}_ASRequirements_collapse" style="margin-left: 10px;">ASRequirements</a></legend>
                    <div id="{{id}}_ASRequirements_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_intervalStartTime'>intervalStartTime: </label><div class='col-sm-8'><input id='{{id}}_intervalStartTime' class='form-control' type='text'{{#intervalStartTime}} value='{{intervalStartTime}}'{{/intervalStartTime}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ASRequirements" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_intervalStartTime").value; if ("" != temp) obj.intervalStartTime = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ReserveDemandCurve", "1..*", "1", "ReserveDemandCurve", "ASRequirements"]
                        ]
                    )
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
                var bucket = cim_data.TransmissionReservation;
                if (null == bucket)
                   cim_data.TransmissionReservation = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TransmissionReservation[obj.id];
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

                base.export_attribute (obj, "TransmissionReservation", "EnergyTransaction", "EnergyTransaction", fields);
                base.export_attribute (obj, "TransmissionReservation", "TransmissionPath", "TransmissionPath", fields);
                base.export_attribute (obj, "TransmissionReservation", "Sink", "Sink", fields);
                base.export_attribute (obj, "TransmissionReservation", "TransactionBid", "TransactionBid", fields);
                base.export_attribute (obj, "TransmissionReservation", "Source", "Source", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TransmissionReservation_collapse" aria-expanded="true" aria-controls="TransmissionReservation_collapse" style="margin-left: 10px;">TransmissionReservation</a></legend>
                    <div id="TransmissionReservation_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TransmissionReservation_collapse" aria-expanded="true" aria-controls="{{id}}_TransmissionReservation_collapse" style="margin-left: 10px;">TransmissionReservation</a></legend>
                    <div id="{{id}}_TransmissionReservation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnergyTransaction'>EnergyTransaction: </label><div class='col-sm-8'><input id='{{id}}_EnergyTransaction' class='form-control' type='text'{{#EnergyTransaction}} value='{{EnergyTransaction}}'{{/EnergyTransaction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TransmissionPath'>TransmissionPath: </label><div class='col-sm-8'><input id='{{id}}_TransmissionPath' class='form-control' type='text'{{#TransmissionPath}} value='{{TransmissionPath}}'{{/TransmissionPath}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Sink'>Sink: </label><div class='col-sm-8'><input id='{{id}}_Sink' class='form-control' type='text'{{#Sink}} value='{{Sink}}'{{/Sink}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TransactionBid'>TransactionBid: </label><div class='col-sm-8'><input id='{{id}}_TransactionBid' class='form-control' type='text'{{#TransactionBid}} value='{{TransactionBid}}'{{/TransactionBid}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Source'>Source: </label><div class='col-sm-8'><input id='{{id}}_Source' class='form-control' type='text'{{#Source}} value='{{Source}}'{{/Source}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TransmissionReservation" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_EnergyTransaction").value; if ("" != temp) obj.EnergyTransaction = temp;
                temp = document.getElementById (id + "_TransmissionPath").value; if ("" != temp) obj.TransmissionPath = temp;
                temp = document.getElementById (id + "_Sink").value; if ("" != temp) obj.Sink = temp;
                temp = document.getElementById (id + "_TransactionBid").value; if ("" != temp) obj.TransactionBid = temp;
                temp = document.getElementById (id + "_Source").value; if ("" != temp) obj.Source = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EnergyTransaction", "0..1", "0..1", "EnergyTransaction", "TransmissionReservation"],
                            ["TransmissionPath", "1", "0..*", "TransmissionPath", "TransmissionReservation"],
                            ["Sink", "0..1", "0..*", "ServicePoint", "SinkReservation"],
                            ["TransactionBid", "0..1", "0..1", "TransactionBid", "TransmissionReservation"],
                            ["Source", "0..1", "0..*", "ServicePoint", "SourceReservation"]
                        ]
                    )
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
                var bucket = cim_data.TransferInterfaceSolution;
                if (null == bucket)
                   cim_data.TransferInterfaceSolution = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TransferInterfaceSolution[obj.id];
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
                base.parse_attribute (/<cim:TransferInterfaceSolution._MktContingencyA\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, " MktContingencyA", sub, context);
                var bucket = context.parsed.TransferInterfaceSolution;
                if (null == bucket)
                   context.parsed.TransferInterfaceSolution = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TransferInterfaceSolution", "interfaceMargin", "interfaceMargin",  base.from_float, fields);
                base.export_element (obj, "TransferInterfaceSolution", "transferLimit", "transferLimit",  base.from_float, fields);
                base.export_element (obj, "TransferInterfaceSolution", "postTransferMW", "postTransferMW",  base.from_float, fields);
                base.export_attribute (obj, "TransferInterfaceSolution", "TransferInterface", "TransferInterface", fields);
                base.export_attribute (obj, "TransferInterfaceSolution", "MktContingencyB", "MktContingencyB", fields);
                base.export_attribute (obj, "TransferInterfaceSolution", " MktContingencyA", "_MktContingencyA", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TransferInterfaceSolution_collapse" aria-expanded="true" aria-controls="TransferInterfaceSolution_collapse" style="margin-left: 10px;">TransferInterfaceSolution</a></legend>
                    <div id="TransferInterfaceSolution_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TransferInterfaceSolution_collapse" aria-expanded="true" aria-controls="{{id}}_TransferInterfaceSolution_collapse" style="margin-left: 10px;">TransferInterfaceSolution</a></legend>
                    <div id="{{id}}_TransferInterfaceSolution_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_interfaceMargin'>interfaceMargin: </label><div class='col-sm-8'><input id='{{id}}_interfaceMargin' class='form-control' type='text'{{#interfaceMargin}} value='{{interfaceMargin}}'{{/interfaceMargin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_transferLimit'>transferLimit: </label><div class='col-sm-8'><input id='{{id}}_transferLimit' class='form-control' type='text'{{#transferLimit}} value='{{transferLimit}}'{{/transferLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_postTransferMW'>postTransferMW: </label><div class='col-sm-8'><input id='{{id}}_postTransferMW' class='form-control' type='text'{{#postTransferMW}} value='{{postTransferMW}}'{{/postTransferMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TransferInterface'>TransferInterface: </label><div class='col-sm-8'><input id='{{id}}_TransferInterface' class='form-control' type='text'{{#TransferInterface}} value='{{TransferInterface}}'{{/TransferInterface}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MktContingencyB'>MktContingencyB: </label><div class='col-sm-8'><input id='{{id}}_MktContingencyB' class='form-control' type='text'{{#MktContingencyB}} value='{{MktContingencyB}}'{{/MktContingencyB}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ MktContingencyA'> MktContingencyA: </label><div class='col-sm-8'><input id='{{id}}_ MktContingencyA' class='form-control' type='text'{{# MktContingencyA}} value='{{ MktContingencyA}}'{{/ MktContingencyA}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TransferInterfaceSolution" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_interfaceMargin").value; if ("" != temp) obj.interfaceMargin = temp;
                temp = document.getElementById (id + "_transferLimit").value; if ("" != temp) obj.transferLimit = temp;
                temp = document.getElementById (id + "_postTransferMW").value; if ("" != temp) obj.postTransferMW = temp;
                temp = document.getElementById (id + "_TransferInterface").value; if ("" != temp) obj.TransferInterface = temp;
                temp = document.getElementById (id + "_MktContingencyB").value; if ("" != temp) obj.MktContingencyB = temp;
                temp = document.getElementById (id + "_ MktContingencyA").value; if ("" != temp) obj. MktContingencyA = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TransferInterface", "1", "1", "TransferInterface", "TransferInterfaceSolution"],
                            ["MktContingencyB", "0..1", "0..1", "MktContingency", "TransferInterfaceSolutionB"],
                            ["_MktContingencyA", "0..1", "0..1", "MktContingency", "TransferInterfaceSolutionA"]
                        ]
                    )
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
                var bucket = cim_data.DefaultBidCurve;
                if (null == bucket)
                   cim_data.DefaultBidCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DefaultBidCurve[obj.id];
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

                base.export_element (obj, "DefaultBidCurve", "curveType", "curveType",  base.from_string, fields);
                base.export_element (obj, "DefaultBidCurve", "debAdderFlag", "debAdderFlag",  base.from_string, fields);
                base.export_attribute (obj, "DefaultBidCurve", "DefaultBid", "DefaultBid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DefaultBidCurve_collapse" aria-expanded="true" aria-controls="DefaultBidCurve_collapse" style="margin-left: 10px;">DefaultBidCurve</a></legend>
                    <div id="DefaultBidCurve_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DefaultBidCurve_collapse" aria-expanded="true" aria-controls="{{id}}_DefaultBidCurve_collapse" style="margin-left: 10px;">DefaultBidCurve</a></legend>
                    <div id="{{id}}_DefaultBidCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_curveType'>curveType: </label><div class='col-sm-8'><input id='{{id}}_curveType' class='form-control' type='text'{{#curveType}} value='{{curveType}}'{{/curveType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_debAdderFlag'>debAdderFlag: </label><div class='col-sm-8'><input id='{{id}}_debAdderFlag' class='form-control' type='text'{{#debAdderFlag}} value='{{debAdderFlag}}'{{/debAdderFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DefaultBid'>DefaultBid: </label><div class='col-sm-8'><input id='{{id}}_DefaultBid' class='form-control' type='text'{{#DefaultBid}} value='{{DefaultBid}}'{{/DefaultBid}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "DefaultBidCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_curveType").value; if ("" != temp) obj.curveType = temp;
                temp = document.getElementById (id + "_debAdderFlag").value; if ("" != temp) obj.debAdderFlag = temp;
                temp = document.getElementById (id + "_DefaultBid").value; if ("" != temp) obj.DefaultBid = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["DefaultBid", "0..1", "0..1", "DefaultBid", "DefaultBidCurve"]
                        ]
                    )
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
                var bucket = cim_data.BranchEndFlow;
                if (null == bucket)
                   cim_data.BranchEndFlow = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BranchEndFlow[obj.id];
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
                base.parse_attributes (/<cim:BranchEndFlow.MktPowerTransformerEndBFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktPowerTransformerEndBFlow", sub, context);
                base.parse_attributes (/<cim:BranchEndFlow.MktPowerTransformerEndAFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktPowerTransformerEndAFlow", sub, context);
                base.parse_attributes (/<cim:BranchEndFlow.MktACLineSegmentEndAFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktACLineSegmentEndAFlow", sub, context);
                base.parse_attributes (/<cim:BranchEndFlow.MktSeriresCompensatorEndAFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktSeriresCompensatorEndAFlow", sub, context);
                base.parse_attributes (/<cim:BranchEndFlow.MktSeriesCompensatorEndBFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktSeriesCompensatorEndBFlow", sub, context);
                base.parse_attributes (/<cim:BranchEndFlow.MktACLineSegmentEndBFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktACLineSegmentEndBFlow", sub, context);
                var bucket = context.parsed.BranchEndFlow;
                if (null == bucket)
                   context.parsed.BranchEndFlow = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "BranchEndFlow", "mwFlow", "mwFlow",  base.from_float, fields);
                base.export_element (obj, "BranchEndFlow", "mVARFlow", "mVARFlow",  base.from_float, fields);
                base.export_element (obj, "BranchEndFlow", "normalRating", "normalRating",  base.from_float, fields);
                base.export_element (obj, "BranchEndFlow", "longTermRating", "longTermRating",  base.from_float, fields);
                base.export_element (obj, "BranchEndFlow", "shortTermRating", "shortTermRating",  base.from_float, fields);
                base.export_element (obj, "BranchEndFlow", "loadDumpRating", "loadDumpRating",  base.from_float, fields);
                base.export_attributes (obj, "BranchEndFlow", "MktPowerTransformerEndBFlow", "MktPowerTransformerEndBFlow", fields);
                base.export_attributes (obj, "BranchEndFlow", "MktPowerTransformerEndAFlow", "MktPowerTransformerEndAFlow", fields);
                base.export_attributes (obj, "BranchEndFlow", "MktACLineSegmentEndAFlow", "MktACLineSegmentEndAFlow", fields);
                base.export_attributes (obj, "BranchEndFlow", "MktSeriresCompensatorEndAFlow", "MktSeriresCompensatorEndAFlow", fields);
                base.export_attributes (obj, "BranchEndFlow", "MktSeriesCompensatorEndBFlow", "MktSeriesCompensatorEndBFlow", fields);
                base.export_attributes (obj, "BranchEndFlow", "MktACLineSegmentEndBFlow", "MktACLineSegmentEndBFlow", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#BranchEndFlow_collapse" aria-expanded="true" aria-controls="BranchEndFlow_collapse" style="margin-left: 10px;">BranchEndFlow</a></legend>
                    <div id="BranchEndFlow_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#mwFlow}}<div><b>mwFlow</b>: {{mwFlow}}</div>{{/mwFlow}}
                    {{#mVARFlow}}<div><b>mVARFlow</b>: {{mVARFlow}}</div>{{/mVARFlow}}
                    {{#normalRating}}<div><b>normalRating</b>: {{normalRating}}</div>{{/normalRating}}
                    {{#longTermRating}}<div><b>longTermRating</b>: {{longTermRating}}</div>{{/longTermRating}}
                    {{#shortTermRating}}<div><b>shortTermRating</b>: {{shortTermRating}}</div>{{/shortTermRating}}
                    {{#loadDumpRating}}<div><b>loadDumpRating</b>: {{loadDumpRating}}</div>{{/loadDumpRating}}
                    {{#MktPowerTransformerEndBFlow}}<div><b>MktPowerTransformerEndBFlow</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MktPowerTransformerEndBFlow}}
                    {{#MktPowerTransformerEndAFlow}}<div><b>MktPowerTransformerEndAFlow</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MktPowerTransformerEndAFlow}}
                    {{#MktACLineSegmentEndAFlow}}<div><b>MktACLineSegmentEndAFlow</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MktACLineSegmentEndAFlow}}
                    {{#MktSeriresCompensatorEndAFlow}}<div><b>MktSeriresCompensatorEndAFlow</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MktSeriresCompensatorEndAFlow}}
                    {{#MktSeriesCompensatorEndBFlow}}<div><b>MktSeriesCompensatorEndBFlow</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MktSeriesCompensatorEndBFlow}}
                    {{#MktACLineSegmentEndBFlow}}<div><b>MktACLineSegmentEndBFlow</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MktACLineSegmentEndBFlow}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.MktPowerTransformerEndBFlow) obj.MktPowerTransformerEndBFlow_string = obj.MktPowerTransformerEndBFlow.join ();
                if (obj.MktPowerTransformerEndAFlow) obj.MktPowerTransformerEndAFlow_string = obj.MktPowerTransformerEndAFlow.join ();
                if (obj.MktACLineSegmentEndAFlow) obj.MktACLineSegmentEndAFlow_string = obj.MktACLineSegmentEndAFlow.join ();
                if (obj.MktSeriresCompensatorEndAFlow) obj.MktSeriresCompensatorEndAFlow_string = obj.MktSeriresCompensatorEndAFlow.join ();
                if (obj.MktSeriesCompensatorEndBFlow) obj.MktSeriesCompensatorEndBFlow_string = obj.MktSeriesCompensatorEndBFlow.join ();
                if (obj.MktACLineSegmentEndBFlow) obj.MktACLineSegmentEndBFlow_string = obj.MktACLineSegmentEndBFlow.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.MktPowerTransformerEndBFlow_string;
                delete obj.MktPowerTransformerEndAFlow_string;
                delete obj.MktACLineSegmentEndAFlow_string;
                delete obj.MktSeriresCompensatorEndAFlow_string;
                delete obj.MktSeriesCompensatorEndBFlow_string;
                delete obj.MktACLineSegmentEndBFlow_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_BranchEndFlow_collapse" aria-expanded="true" aria-controls="{{id}}_BranchEndFlow_collapse" style="margin-left: 10px;">BranchEndFlow</a></legend>
                    <div id="{{id}}_BranchEndFlow_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mwFlow'>mwFlow: </label><div class='col-sm-8'><input id='{{id}}_mwFlow' class='form-control' type='text'{{#mwFlow}} value='{{mwFlow}}'{{/mwFlow}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mVARFlow'>mVARFlow: </label><div class='col-sm-8'><input id='{{id}}_mVARFlow' class='form-control' type='text'{{#mVARFlow}} value='{{mVARFlow}}'{{/mVARFlow}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_normalRating'>normalRating: </label><div class='col-sm-8'><input id='{{id}}_normalRating' class='form-control' type='text'{{#normalRating}} value='{{normalRating}}'{{/normalRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_longTermRating'>longTermRating: </label><div class='col-sm-8'><input id='{{id}}_longTermRating' class='form-control' type='text'{{#longTermRating}} value='{{longTermRating}}'{{/longTermRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_shortTermRating'>shortTermRating: </label><div class='col-sm-8'><input id='{{id}}_shortTermRating' class='form-control' type='text'{{#shortTermRating}} value='{{shortTermRating}}'{{/shortTermRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_loadDumpRating'>loadDumpRating: </label><div class='col-sm-8'><input id='{{id}}_loadDumpRating' class='form-control' type='text'{{#loadDumpRating}} value='{{loadDumpRating}}'{{/loadDumpRating}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "BranchEndFlow" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_mwFlow").value; if ("" != temp) obj.mwFlow = temp;
                temp = document.getElementById (id + "_mVARFlow").value; if ("" != temp) obj.mVARFlow = temp;
                temp = document.getElementById (id + "_normalRating").value; if ("" != temp) obj.normalRating = temp;
                temp = document.getElementById (id + "_longTermRating").value; if ("" != temp) obj.longTermRating = temp;
                temp = document.getElementById (id + "_shortTermRating").value; if ("" != temp) obj.shortTermRating = temp;
                temp = document.getElementById (id + "_loadDumpRating").value; if ("" != temp) obj.loadDumpRating = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MktPowerTransformerEndBFlow", "0..*", "0..1", "MktPowerTransformer", "EndBFlow"],
                            ["MktPowerTransformerEndAFlow", "0..*", "0..1", "MktPowerTransformer", "EndAFlow"],
                            ["MktACLineSegmentEndAFlow", "0..*", "0..1", "MktACLineSegment", "EndAFlow"],
                            ["MktSeriresCompensatorEndAFlow", "0..*", "0..1", "MktSeriesCompensator", "EndAFlow"],
                            ["MktSeriesCompensatorEndBFlow", "0..*", "0..1", "MktSeriesCompensator", "EndBFlow"],
                            ["MktACLineSegmentEndBFlow", "0..*", "0..1", "MktACLineSegment", "EndBFlow"]
                        ]
                    )
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
                var bucket = cim_data.Profile;
                if (null == bucket)
                   cim_data.Profile = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Profile[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Profile";
                base.parse_attributes (/<cim:Profile.ProfileDatas\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProfileDatas", sub, context);
                var bucket = context.parsed.Profile;
                if (null == bucket)
                   context.parsed.Profile = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "Profile", "ProfileDatas", "ProfileDatas", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Profile_collapse" aria-expanded="true" aria-controls="Profile_collapse" style="margin-left: 10px;">Profile</a></legend>
                    <div id="Profile_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#ProfileDatas}}<div><b>ProfileDatas</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ProfileDatas}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ProfileDatas) obj.ProfileDatas_string = obj.ProfileDatas.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ProfileDatas_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Profile_collapse" aria-expanded="true" aria-controls="{{id}}_Profile_collapse" style="margin-left: 10px;">Profile</a></legend>
                    <div id="{{id}}_Profile_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ProfileDatas'>ProfileDatas: </label><div class='col-sm-8'><input id='{{id}}_ProfileDatas' class='form-control' type='text'{{#ProfileDatas}} value='{{ProfileDatas}}_string'{{/ProfileDatas}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Profile" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ProfileDatas").value; if ("" != temp) obj.ProfileDatas = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ProfileDatas", "0..*", "0..*", "ProfileData", "Profile"]
                        ]
                    )
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
                var bucket = cim_data.UnitInitialConditions;
                if (null == bucket)
                   cim_data.UnitInitialConditions = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.UnitInitialConditions[obj.id];
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

                base.export_element (obj, "UnitInitialConditions", "cumEnergy", "cumEnergy",  base.from_string, fields);
                base.export_element (obj, "UnitInitialConditions", "cumStatusChanges", "cumStatusChanges",  base.from_string, fields);
                base.export_element (obj, "UnitInitialConditions", "numberOfStartups", "numberOfStartups",  base.from_string, fields);
                base.export_element (obj, "UnitInitialConditions", "onlineStatus", "onlineStatus",  base.from_boolean, fields);
                base.export_element (obj, "UnitInitialConditions", "resourceMW", "resourceMW",  base.from_string, fields);
                base.export_element (obj, "UnitInitialConditions", "resourceStatus", "resourceStatus",  base.from_string, fields);
                base.export_element (obj, "UnitInitialConditions", "statusDate", "statusDate",  base.from_datetime, fields);
                base.export_element (obj, "UnitInitialConditions", "timeInStatus", "timeInStatus",  base.from_float, fields);
                base.export_element (obj, "UnitInitialConditions", "timeInterval", "timeInterval",  base.from_datetime, fields);
                base.export_attribute (obj, "UnitInitialConditions", "GeneratingUnit", "GeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#UnitInitialConditions_collapse" aria-expanded="true" aria-controls="UnitInitialConditions_collapse" style="margin-left: 10px;">UnitInitialConditions</a></legend>
                    <div id="UnitInitialConditions_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_UnitInitialConditions_collapse" aria-expanded="true" aria-controls="{{id}}_UnitInitialConditions_collapse" style="margin-left: 10px;">UnitInitialConditions</a></legend>
                    <div id="{{id}}_UnitInitialConditions_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cumEnergy'>cumEnergy: </label><div class='col-sm-8'><input id='{{id}}_cumEnergy' class='form-control' type='text'{{#cumEnergy}} value='{{cumEnergy}}'{{/cumEnergy}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cumStatusChanges'>cumStatusChanges: </label><div class='col-sm-8'><input id='{{id}}_cumStatusChanges' class='form-control' type='text'{{#cumStatusChanges}} value='{{cumStatusChanges}}'{{/cumStatusChanges}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_numberOfStartups'>numberOfStartups: </label><div class='col-sm-8'><input id='{{id}}_numberOfStartups' class='form-control' type='text'{{#numberOfStartups}} value='{{numberOfStartups}}'{{/numberOfStartups}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_onlineStatus'>onlineStatus: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_onlineStatus' class='form-check-input' type='checkbox'{{#onlineStatus}} checked{{/onlineStatus}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_resourceMW'>resourceMW: </label><div class='col-sm-8'><input id='{{id}}_resourceMW' class='form-control' type='text'{{#resourceMW}} value='{{resourceMW}}'{{/resourceMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_resourceStatus'>resourceStatus: </label><div class='col-sm-8'><input id='{{id}}_resourceStatus' class='form-control' type='text'{{#resourceStatus}} value='{{resourceStatus}}'{{/resourceStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_statusDate'>statusDate: </label><div class='col-sm-8'><input id='{{id}}_statusDate' class='form-control' type='text'{{#statusDate}} value='{{statusDate}}'{{/statusDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_timeInStatus'>timeInStatus: </label><div class='col-sm-8'><input id='{{id}}_timeInStatus' class='form-control' type='text'{{#timeInStatus}} value='{{timeInStatus}}'{{/timeInStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_timeInterval'>timeInterval: </label><div class='col-sm-8'><input id='{{id}}_timeInterval' class='form-control' type='text'{{#timeInterval}} value='{{timeInterval}}'{{/timeInterval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GeneratingUnit'>GeneratingUnit: </label><div class='col-sm-8'><input id='{{id}}_GeneratingUnit' class='form-control' type='text'{{#GeneratingUnit}} value='{{GeneratingUnit}}'{{/GeneratingUnit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "UnitInitialConditions" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_cumEnergy").value; if ("" != temp) obj.cumEnergy = temp;
                temp = document.getElementById (id + "_cumStatusChanges").value; if ("" != temp) obj.cumStatusChanges = temp;
                temp = document.getElementById (id + "_numberOfStartups").value; if ("" != temp) obj.numberOfStartups = temp;
                temp = document.getElementById (id + "_onlineStatus").checked; if (temp) obj.onlineStatus = true;
                temp = document.getElementById (id + "_resourceMW").value; if ("" != temp) obj.resourceMW = temp;
                temp = document.getElementById (id + "_resourceStatus").value; if ("" != temp) obj.resourceStatus = temp;
                temp = document.getElementById (id + "_statusDate").value; if ("" != temp) obj.statusDate = temp;
                temp = document.getElementById (id + "_timeInStatus").value; if ("" != temp) obj.timeInStatus = temp;
                temp = document.getElementById (id + "_timeInterval").value; if ("" != temp) obj.timeInterval = temp;
                temp = document.getElementById (id + "_GeneratingUnit").value; if ("" != temp) obj.GeneratingUnit = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["GeneratingUnit", "0..1", "0..*", "RegisteredGenerator", "UnitInitialConditions"]
                        ]
                    )
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
                var bucket = cim_data.MktShuntCompensator;
                if (null == bucket)
                   cim_data.MktShuntCompensator = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MktShuntCompensator[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Wires.ShuntCompensator.prototype.parse.call (this, context, sub);
                obj.cls = "MktShuntCompensator";
                base.parse_attributes (/<cim:MktShuntCompensator.ShuntCompensatorDynamicData\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ShuntCompensatorDynamicData", sub, context);
                var bucket = context.parsed.MktShuntCompensator;
                if (null == bucket)
                   context.parsed.MktShuntCompensator = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Wires.ShuntCompensator.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "MktShuntCompensator", "ShuntCompensatorDynamicData", "ShuntCompensatorDynamicData", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MktShuntCompensator_collapse" aria-expanded="true" aria-controls="MktShuntCompensator_collapse" style="margin-left: 10px;">MktShuntCompensator</a></legend>
                    <div id="MktShuntCompensator_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Wires.ShuntCompensator.prototype.template.call (this) +
                    `
                    {{#ShuntCompensatorDynamicData}}<div><b>ShuntCompensatorDynamicData</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ShuntCompensatorDynamicData}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ShuntCompensatorDynamicData) obj.ShuntCompensatorDynamicData_string = obj.ShuntCompensatorDynamicData.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ShuntCompensatorDynamicData_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MktShuntCompensator_collapse" aria-expanded="true" aria-controls="{{id}}_MktShuntCompensator_collapse" style="margin-left: 10px;">MktShuntCompensator</a></legend>
                    <div id="{{id}}_MktShuntCompensator_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Wires.ShuntCompensator.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "MktShuntCompensator" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ShuntCompensatorDynamicData", "0..*", "1", "ShuntCompensatorDynamicData", "MktShuntCompensator"]
                        ]
                    )
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
                var bucket = cim_data.MktAnalogLimit;
                if (null == bucket)
                   cim_data.MktAnalogLimit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MktAnalogLimit[obj.id];
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

                base.export_element (obj, "MktAnalogLimit", "exceededLimit", "exceededLimit",  base.from_boolean, fields);
                base.export_element (obj, "MktAnalogLimit", "limitType", "limitType",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MktAnalogLimit_collapse" aria-expanded="true" aria-controls="MktAnalogLimit_collapse" style="margin-left: 10px;">MktAnalogLimit</a></legend>
                    <div id="MktAnalogLimit_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MktAnalogLimit_collapse" aria-expanded="true" aria-controls="{{id}}_MktAnalogLimit_collapse" style="margin-left: 10px;">MktAnalogLimit</a></legend>
                    <div id="{{id}}_MktAnalogLimit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Meas.AnalogLimit.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_exceededLimit'>exceededLimit: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_exceededLimit' class='form-check-input' type='checkbox'{{#exceededLimit}} checked{{/exceededLimit}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_limitType'>limitType: </label><div class='col-sm-8'><input id='{{id}}_limitType' class='form-control' type='text'{{#limitType}} value='{{limitType}}'{{/limitType}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "MktAnalogLimit" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_exceededLimit").checked; if (temp) obj.exceededLimit = true;
                temp = document.getElementById (id + "_limitType").value; if ("" != temp) obj.limitType = temp;

                return (obj);
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
                var bucket = cim_data.MktSeriesCompensator;
                if (null == bucket)
                   cim_data.MktSeriesCompensator = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MktSeriesCompensator[obj.id];
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

                base.export_attribute (obj, "MktSeriesCompensator", "EndAFlow", "EndAFlow", fields);
                base.export_attribute (obj, "MktSeriesCompensator", "EndBFlow", "EndBFlow", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MktSeriesCompensator_collapse" aria-expanded="true" aria-controls="MktSeriesCompensator_collapse" style="margin-left: 10px;">MktSeriesCompensator</a></legend>
                    <div id="MktSeriesCompensator_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MktSeriesCompensator_collapse" aria-expanded="true" aria-controls="{{id}}_MktSeriesCompensator_collapse" style="margin-left: 10px;">MktSeriesCompensator</a></legend>
                    <div id="{{id}}_MktSeriesCompensator_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Wires.SeriesCompensator.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EndAFlow'>EndAFlow: </label><div class='col-sm-8'><input id='{{id}}_EndAFlow' class='form-control' type='text'{{#EndAFlow}} value='{{EndAFlow}}'{{/EndAFlow}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EndBFlow'>EndBFlow: </label><div class='col-sm-8'><input id='{{id}}_EndBFlow' class='form-control' type='text'{{#EndBFlow}} value='{{EndBFlow}}'{{/EndBFlow}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "MktSeriesCompensator" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_EndAFlow").value; if ("" != temp) obj.EndAFlow = temp;
                temp = document.getElementById (id + "_EndBFlow").value; if ("" != temp) obj.EndBFlow = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EndAFlow", "0..1", "0..*", "BranchEndFlow", "MktSeriresCompensatorEndAFlow"],
                            ["EndBFlow", "0..1", "0..*", "BranchEndFlow", "MktSeriesCompensatorEndBFlow"]
                        ]
                    )
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
                var bucket = cim_data.IntermittentResourceEligibility;
                if (null == bucket)
                   cim_data.IntermittentResourceEligibility = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.IntermittentResourceEligibility[obj.id];
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

                base.export_element (obj, "IntermittentResourceEligibility", "eligibilityStatus", "eligibilityStatus",  base.from_string, fields);
                base.export_attribute (obj, "IntermittentResourceEligibility", "RegisteredResource", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#IntermittentResourceEligibility_collapse" aria-expanded="true" aria-controls="IntermittentResourceEligibility_collapse" style="margin-left: 10px;">IntermittentResourceEligibility</a></legend>
                    <div id="IntermittentResourceEligibility_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_IntermittentResourceEligibility_collapse" aria-expanded="true" aria-controls="{{id}}_IntermittentResourceEligibility_collapse" style="margin-left: 10px;">IntermittentResourceEligibility</a></legend>
                    <div id="{{id}}_IntermittentResourceEligibility_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_eligibilityStatus'>eligibilityStatus: </label><div class='col-sm-8'><input id='{{id}}_eligibilityStatus' class='form-control' type='text'{{#eligibilityStatus}} value='{{eligibilityStatus}}'{{/eligibilityStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='{{id}}_RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "IntermittentResourceEligibility" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_eligibilityStatus").value; if ("" != temp) obj.eligibilityStatus = temp;
                temp = document.getElementById (id + "_RegisteredResource").value; if ("" != temp) obj.RegisteredResource = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegisteredResource", "1", "0..*", "RegisteredResource", "IntermittentResourceEligibility"]
                        ]
                    )
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
                var bucket = cim_data.TapChangerDynamicData;
                if (null == bucket)
                   cim_data.TapChangerDynamicData = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TapChangerDynamicData[obj.id];
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

                base.export_element (obj, "TapChangerDynamicData", "tapPosition", "tapPosition",  base.from_float, fields);
                base.export_element (obj, "TapChangerDynamicData", "desiredVoltage", "desiredVoltage",  base.from_float, fields);
                base.export_element (obj, "TapChangerDynamicData", "voltageRegulationStatus", "voltageRegulationStatus",  base.from_boolean, fields);
                base.export_element (obj, "TapChangerDynamicData", "angleRegulationStatus", "angleRegulationStatus",  base.from_boolean, fields);
                base.export_element (obj, "TapChangerDynamicData", "desiredMW", "desiredMW",  base.from_float, fields);
                base.export_element (obj, "TapChangerDynamicData", "solvedAngle", "solvedAngle",  base.from_float, fields);
                base.export_element (obj, "TapChangerDynamicData", "minimumAngle", "minimumAngle",  base.from_float, fields);
                base.export_element (obj, "TapChangerDynamicData", "maximumAngle", "maximumAngle",  base.from_float, fields);
                base.export_attribute (obj, "TapChangerDynamicData", "MktTapChanger", "MktTapChanger", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TapChangerDynamicData_collapse" aria-expanded="true" aria-controls="TapChangerDynamicData_collapse" style="margin-left: 10px;">TapChangerDynamicData</a></legend>
                    <div id="TapChangerDynamicData_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TapChangerDynamicData_collapse" aria-expanded="true" aria-controls="{{id}}_TapChangerDynamicData_collapse" style="margin-left: 10px;">TapChangerDynamicData</a></legend>
                    <div id="{{id}}_TapChangerDynamicData_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tapPosition'>tapPosition: </label><div class='col-sm-8'><input id='{{id}}_tapPosition' class='form-control' type='text'{{#tapPosition}} value='{{tapPosition}}'{{/tapPosition}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_desiredVoltage'>desiredVoltage: </label><div class='col-sm-8'><input id='{{id}}_desiredVoltage' class='form-control' type='text'{{#desiredVoltage}} value='{{desiredVoltage}}'{{/desiredVoltage}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_voltageRegulationStatus'>voltageRegulationStatus: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_voltageRegulationStatus' class='form-check-input' type='checkbox'{{#voltageRegulationStatus}} checked{{/voltageRegulationStatus}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_angleRegulationStatus'>angleRegulationStatus: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_angleRegulationStatus' class='form-check-input' type='checkbox'{{#angleRegulationStatus}} checked{{/angleRegulationStatus}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_desiredMW'>desiredMW: </label><div class='col-sm-8'><input id='{{id}}_desiredMW' class='form-control' type='text'{{#desiredMW}} value='{{desiredMW}}'{{/desiredMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_solvedAngle'>solvedAngle: </label><div class='col-sm-8'><input id='{{id}}_solvedAngle' class='form-control' type='text'{{#solvedAngle}} value='{{solvedAngle}}'{{/solvedAngle}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minimumAngle'>minimumAngle: </label><div class='col-sm-8'><input id='{{id}}_minimumAngle' class='form-control' type='text'{{#minimumAngle}} value='{{minimumAngle}}'{{/minimumAngle}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maximumAngle'>maximumAngle: </label><div class='col-sm-8'><input id='{{id}}_maximumAngle' class='form-control' type='text'{{#maximumAngle}} value='{{maximumAngle}}'{{/maximumAngle}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MktTapChanger'>MktTapChanger: </label><div class='col-sm-8'><input id='{{id}}_MktTapChanger' class='form-control' type='text'{{#MktTapChanger}} value='{{MktTapChanger}}'{{/MktTapChanger}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TapChangerDynamicData" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_tapPosition").value; if ("" != temp) obj.tapPosition = temp;
                temp = document.getElementById (id + "_desiredVoltage").value; if ("" != temp) obj.desiredVoltage = temp;
                temp = document.getElementById (id + "_voltageRegulationStatus").checked; if (temp) obj.voltageRegulationStatus = true;
                temp = document.getElementById (id + "_angleRegulationStatus").checked; if (temp) obj.angleRegulationStatus = true;
                temp = document.getElementById (id + "_desiredMW").value; if ("" != temp) obj.desiredMW = temp;
                temp = document.getElementById (id + "_solvedAngle").value; if ("" != temp) obj.solvedAngle = temp;
                temp = document.getElementById (id + "_minimumAngle").value; if ("" != temp) obj.minimumAngle = temp;
                temp = document.getElementById (id + "_maximumAngle").value; if ("" != temp) obj.maximumAngle = temp;
                temp = document.getElementById (id + "_MktTapChanger").value; if ("" != temp) obj.MktTapChanger = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MktTapChanger", "1", "0..*", "MktTapChanger", "TapChangerDynamicData"]
                        ]
                    )
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
                var bucket = cim_data.LoadDistributionFactor;
                if (null == bucket)
                   cim_data.LoadDistributionFactor = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LoadDistributionFactor[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "LoadDistributionFactor";
                base.parse_element (/<cim:LoadDistributionFactor.pDistFactor>([\s\S]*?)<\/cim:LoadDistributionFactor.pDistFactor>/g, obj, "pDistFactor", base.to_float, sub, context);
                base.parse_element (/<cim:LoadDistributionFactor.qDistFactor>([\s\S]*?)<\/cim:LoadDistributionFactor.qDistFactor>/g, obj, "qDistFactor", base.to_float, sub, context);
                base.parse_attribute (/<cim:LoadDistributionFactor.IndividualPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "IndividualPnode", sub, context);
                base.parse_attributes (/<cim:LoadDistributionFactor.DistributionFactorSet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DistributionFactorSet", sub, context);
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

                base.export_element (obj, "LoadDistributionFactor", "pDistFactor", "pDistFactor",  base.from_float, fields);
                base.export_element (obj, "LoadDistributionFactor", "qDistFactor", "qDistFactor",  base.from_float, fields);
                base.export_attribute (obj, "LoadDistributionFactor", "IndividualPnode", "IndividualPnode", fields);
                base.export_attributes (obj, "LoadDistributionFactor", "DistributionFactorSet", "DistributionFactorSet", fields);
                base.export_attribute (obj, "LoadDistributionFactor", "AggregatedPnode", "AggregatedPnode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#LoadDistributionFactor_collapse" aria-expanded="true" aria-controls="LoadDistributionFactor_collapse" style="margin-left: 10px;">LoadDistributionFactor</a></legend>
                    <div id="LoadDistributionFactor_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#pDistFactor}}<div><b>pDistFactor</b>: {{pDistFactor}}</div>{{/pDistFactor}}
                    {{#qDistFactor}}<div><b>qDistFactor</b>: {{qDistFactor}}</div>{{/qDistFactor}}
                    {{#IndividualPnode}}<div><b>IndividualPnode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{IndividualPnode}}&quot;);})'>{{IndividualPnode}}</a></div>{{/IndividualPnode}}
                    {{#DistributionFactorSet}}<div><b>DistributionFactorSet</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/DistributionFactorSet}}
                    {{#AggregatedPnode}}<div><b>AggregatedPnode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AggregatedPnode}}&quot;);})'>{{AggregatedPnode}}</a></div>{{/AggregatedPnode}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.DistributionFactorSet) obj.DistributionFactorSet_string = obj.DistributionFactorSet.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.DistributionFactorSet_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_LoadDistributionFactor_collapse" aria-expanded="true" aria-controls="{{id}}_LoadDistributionFactor_collapse" style="margin-left: 10px;">LoadDistributionFactor</a></legend>
                    <div id="{{id}}_LoadDistributionFactor_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pDistFactor'>pDistFactor: </label><div class='col-sm-8'><input id='{{id}}_pDistFactor' class='form-control' type='text'{{#pDistFactor}} value='{{pDistFactor}}'{{/pDistFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_qDistFactor'>qDistFactor: </label><div class='col-sm-8'><input id='{{id}}_qDistFactor' class='form-control' type='text'{{#qDistFactor}} value='{{qDistFactor}}'{{/qDistFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_IndividualPnode'>IndividualPnode: </label><div class='col-sm-8'><input id='{{id}}_IndividualPnode' class='form-control' type='text'{{#IndividualPnode}} value='{{IndividualPnode}}'{{/IndividualPnode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DistributionFactorSet'>DistributionFactorSet: </label><div class='col-sm-8'><input id='{{id}}_DistributionFactorSet' class='form-control' type='text'{{#DistributionFactorSet}} value='{{DistributionFactorSet}}_string'{{/DistributionFactorSet}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AggregatedPnode'>AggregatedPnode: </label><div class='col-sm-8'><input id='{{id}}_AggregatedPnode' class='form-control' type='text'{{#AggregatedPnode}} value='{{AggregatedPnode}}'{{/AggregatedPnode}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "LoadDistributionFactor" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_pDistFactor").value; if ("" != temp) obj.pDistFactor = temp;
                temp = document.getElementById (id + "_qDistFactor").value; if ("" != temp) obj.qDistFactor = temp;
                temp = document.getElementById (id + "_IndividualPnode").value; if ("" != temp) obj.IndividualPnode = temp;
                temp = document.getElementById (id + "_DistributionFactorSet").value; if ("" != temp) obj.DistributionFactorSet = temp.split (",");
                temp = document.getElementById (id + "_AggregatedPnode").value; if ("" != temp) obj.AggregatedPnode = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["IndividualPnode", "0..1", "0..1", "IndividualPnode", "LoadDistributionFactor"],
                            ["DistributionFactorSet", "0..*", "0..*", "DistributionFactorSet", "LoadDistributionFactor"],
                            ["AggregatedPnode", "0..1", "1..*", "AggregatedPnode", "LoadDistributionFactor"]
                        ]
                    )
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
                var bucket = cim_data.ServicePoint;
                if (null == bucket)
                   cim_data.ServicePoint = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ServicePoint[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ServicePoint";
                base.parse_attributes (/<cim:ServicePoint.PODTransmissionPath\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PODTransmissionPath", sub, context);
                base.parse_attributes (/<cim:ServicePoint.SinkReservation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SinkReservation", sub, context);
                base.parse_attributes (/<cim:ServicePoint.PORTransmissionPath\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PORTransmissionPath", sub, context);
                base.parse_attributes (/<cim:ServicePoint.SourceReservation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SourceReservation", sub, context);
                var bucket = context.parsed.ServicePoint;
                if (null == bucket)
                   context.parsed.ServicePoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ServicePoint", "PODTransmissionPath", "PODTransmissionPath", fields);
                base.export_attributes (obj, "ServicePoint", "SinkReservation", "SinkReservation", fields);
                base.export_attributes (obj, "ServicePoint", "PORTransmissionPath", "PORTransmissionPath", fields);
                base.export_attributes (obj, "ServicePoint", "SourceReservation", "SourceReservation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ServicePoint_collapse" aria-expanded="true" aria-controls="ServicePoint_collapse" style="margin-left: 10px;">ServicePoint</a></legend>
                    <div id="ServicePoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#PODTransmissionPath}}<div><b>PODTransmissionPath</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/PODTransmissionPath}}
                    {{#SinkReservation}}<div><b>SinkReservation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/SinkReservation}}
                    {{#PORTransmissionPath}}<div><b>PORTransmissionPath</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/PORTransmissionPath}}
                    {{#SourceReservation}}<div><b>SourceReservation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/SourceReservation}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.PODTransmissionPath) obj.PODTransmissionPath_string = obj.PODTransmissionPath.join ();
                if (obj.SinkReservation) obj.SinkReservation_string = obj.SinkReservation.join ();
                if (obj.PORTransmissionPath) obj.PORTransmissionPath_string = obj.PORTransmissionPath.join ();
                if (obj.SourceReservation) obj.SourceReservation_string = obj.SourceReservation.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.PODTransmissionPath_string;
                delete obj.SinkReservation_string;
                delete obj.PORTransmissionPath_string;
                delete obj.SourceReservation_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ServicePoint_collapse" aria-expanded="true" aria-controls="{{id}}_ServicePoint_collapse" style="margin-left: 10px;">ServicePoint</a></legend>
                    <div id="{{id}}_ServicePoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "ServicePoint" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PODTransmissionPath", "0..*", "1", "TransmissionPath", "DeliveryPoint"],
                            ["SinkReservation", "0..*", "0..1", "TransmissionReservation", "Sink"],
                            ["PORTransmissionPath", "0..*", "1", "TransmissionPath", "PointOfReceipt"],
                            ["SourceReservation", "0..*", "0..1", "TransmissionReservation", "Source"]
                        ]
                    )
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
                var bucket = cim_data.InterchangeETCData;
                if (null == bucket)
                   cim_data.InterchangeETCData = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.InterchangeETCData[obj.id];
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

                base.export_element (obj, "InterchangeETCData", "contractNumber", "contractNumber",  base.from_string, fields);
                base.export_element (obj, "InterchangeETCData", "usageMW", "usageMW",  base.from_float, fields);
                base.export_attribute (obj, "InterchangeETCData", "InterchangeSchedule", "InterchangeSchedule", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#InterchangeETCData_collapse" aria-expanded="true" aria-controls="InterchangeETCData_collapse" style="margin-left: 10px;">InterchangeETCData</a></legend>
                    <div id="InterchangeETCData_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_InterchangeETCData_collapse" aria-expanded="true" aria-controls="{{id}}_InterchangeETCData_collapse" style="margin-left: 10px;">InterchangeETCData</a></legend>
                    <div id="{{id}}_InterchangeETCData_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_contractNumber'>contractNumber: </label><div class='col-sm-8'><input id='{{id}}_contractNumber' class='form-control' type='text'{{#contractNumber}} value='{{contractNumber}}'{{/contractNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_usageMW'>usageMW: </label><div class='col-sm-8'><input id='{{id}}_usageMW' class='form-control' type='text'{{#usageMW}} value='{{usageMW}}'{{/usageMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_InterchangeSchedule'>InterchangeSchedule: </label><div class='col-sm-8'><input id='{{id}}_InterchangeSchedule' class='form-control' type='text'{{#InterchangeSchedule}} value='{{InterchangeSchedule}}'{{/InterchangeSchedule}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "InterchangeETCData" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_contractNumber").value; if ("" != temp) obj.contractNumber = temp;
                temp = document.getElementById (id + "_usageMW").value; if ("" != temp) obj.usageMW = temp;
                temp = document.getElementById (id + "_InterchangeSchedule").value; if ("" != temp) obj.InterchangeSchedule = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["InterchangeSchedule", "0..1", "0..*", "InterchangeSchedule", "InterchangeETCData"]
                        ]
                    )
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
                var bucket = cim_data.SysLoadDistributionFactor;
                if (null == bucket)
                   cim_data.SysLoadDistributionFactor = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SysLoadDistributionFactor[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SysLoadDistributionFactor";
                base.parse_element (/<cim:SysLoadDistributionFactor.factor>([\s\S]*?)<\/cim:SysLoadDistributionFactor.factor>/g, obj, "factor", base.to_float, sub, context);
                base.parse_attributes (/<cim:SysLoadDistributionFactor.DistributionFactorSet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DistributionFactorSet", sub, context);
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

                base.export_element (obj, "SysLoadDistributionFactor", "factor", "factor",  base.from_float, fields);
                base.export_attributes (obj, "SysLoadDistributionFactor", "DistributionFactorSet", "DistributionFactorSet", fields);
                base.export_attribute (obj, "SysLoadDistributionFactor", "HostControlArea", "HostControlArea", fields);
                base.export_attribute (obj, "SysLoadDistributionFactor", "MktConnectivityNode", "MktConnectivityNode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SysLoadDistributionFactor_collapse" aria-expanded="true" aria-controls="SysLoadDistributionFactor_collapse" style="margin-left: 10px;">SysLoadDistributionFactor</a></legend>
                    <div id="SysLoadDistributionFactor_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#factor}}<div><b>factor</b>: {{factor}}</div>{{/factor}}
                    {{#DistributionFactorSet}}<div><b>DistributionFactorSet</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/DistributionFactorSet}}
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
                if (obj.DistributionFactorSet) obj.DistributionFactorSet_string = obj.DistributionFactorSet.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.DistributionFactorSet_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SysLoadDistributionFactor_collapse" aria-expanded="true" aria-controls="{{id}}_SysLoadDistributionFactor_collapse" style="margin-left: 10px;">SysLoadDistributionFactor</a></legend>
                    <div id="{{id}}_SysLoadDistributionFactor_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_factor'>factor: </label><div class='col-sm-8'><input id='{{id}}_factor' class='form-control' type='text'{{#factor}} value='{{factor}}'{{/factor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DistributionFactorSet'>DistributionFactorSet: </label><div class='col-sm-8'><input id='{{id}}_DistributionFactorSet' class='form-control' type='text'{{#DistributionFactorSet}} value='{{DistributionFactorSet}}_string'{{/DistributionFactorSet}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_HostControlArea'>HostControlArea: </label><div class='col-sm-8'><input id='{{id}}_HostControlArea' class='form-control' type='text'{{#HostControlArea}} value='{{HostControlArea}}'{{/HostControlArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MktConnectivityNode'>MktConnectivityNode: </label><div class='col-sm-8'><input id='{{id}}_MktConnectivityNode' class='form-control' type='text'{{#MktConnectivityNode}} value='{{MktConnectivityNode}}'{{/MktConnectivityNode}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "SysLoadDistributionFactor" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_factor").value; if ("" != temp) obj.factor = temp;
                temp = document.getElementById (id + "_DistributionFactorSet").value; if ("" != temp) obj.DistributionFactorSet = temp.split (",");
                temp = document.getElementById (id + "_HostControlArea").value; if ("" != temp) obj.HostControlArea = temp;
                temp = document.getElementById (id + "_MktConnectivityNode").value; if ("" != temp) obj.MktConnectivityNode = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["DistributionFactorSet", "0..*", "0..*", "DistributionFactorSet", "SysLoadDistribuFactor"],
                            ["HostControlArea", "1", "0..*", "HostControlArea", "SysLoadDistribuFactor"],
                            ["MktConnectivityNode", "1", "0..1", "MktConnectivityNode", "SysLoadDistribuFactor"]
                        ]
                    )
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
                var bucket = cim_data.EnergyTransaction;
                if (null == bucket)
                   cim_data.EnergyTransaction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EnergyTransaction[obj.id];
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
                base.parse_attributes (/<cim:EnergyTransaction.EnergyPriceCurves\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyPriceCurves", sub, context);
                base.parse_attributes (/<cim:EnergyTransaction.EnergyProfiles\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyProfiles", sub, context);
                base.parse_attribute (/<cim:EnergyTransaction.TransmissionReservation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionReservation", sub, context);
                base.parse_attribute (/<cim:EnergyTransaction.Export_SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Export_SubControlArea", sub, context);
                base.parse_attributes (/<cim:EnergyTransaction.TieLines\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TieLines", sub, context);
                base.parse_attributes (/<cim:EnergyTransaction.LossProfiles\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LossProfiles", sub, context);
                base.parse_attribute (/<cim:EnergyTransaction.Import_SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Import_SubControlArea", sub, context);
                base.parse_attributes (/<cim:EnergyTransaction.CurtailmentProfiles\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CurtailmentProfiles", sub, context);
                var bucket = context.parsed.EnergyTransaction;
                if (null == bucket)
                   context.parsed.EnergyTransaction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "EnergyTransaction", "capacityBacked", "capacityBacked",  base.from_boolean, fields);
                base.export_element (obj, "EnergyTransaction", "congestChargeMax", "congestChargeMax",  base.from_string, fields);
                base.export_element (obj, "EnergyTransaction", "deliveryPointP", "deliveryPointP",  base.from_string, fields);
                base.export_element (obj, "EnergyTransaction", "energyMin", "energyMin",  base.from_string, fields);
                base.export_element (obj, "EnergyTransaction", "firmInterchangeFlag", "firmInterchangeFlag",  base.from_boolean, fields);
                base.export_element (obj, "EnergyTransaction", "payCongestion", "payCongestion",  base.from_boolean, fields);
                base.export_element (obj, "EnergyTransaction", "reason", "reason",  base.from_string, fields);
                base.export_element (obj, "EnergyTransaction", "receiptPointP", "receiptPointP",  base.from_string, fields);
                base.export_element (obj, "EnergyTransaction", "state", "state",  base.from_string, fields);
                base.export_attribute (obj, "EnergyTransaction", "EnergyProduct", "EnergyProduct", fields);
                base.export_attributes (obj, "EnergyTransaction", "EnergyPriceCurves", "EnergyPriceCurves", fields);
                base.export_attributes (obj, "EnergyTransaction", "EnergyProfiles", "EnergyProfiles", fields);
                base.export_attribute (obj, "EnergyTransaction", "TransmissionReservation", "TransmissionReservation", fields);
                base.export_attribute (obj, "EnergyTransaction", "Export_SubControlArea", "Export_SubControlArea", fields);
                base.export_attributes (obj, "EnergyTransaction", "TieLines", "TieLines", fields);
                base.export_attributes (obj, "EnergyTransaction", "LossProfiles", "LossProfiles", fields);
                base.export_attribute (obj, "EnergyTransaction", "Import_SubControlArea", "Import_SubControlArea", fields);
                base.export_attributes (obj, "EnergyTransaction", "CurtailmentProfiles", "CurtailmentProfiles", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EnergyTransaction_collapse" aria-expanded="true" aria-controls="EnergyTransaction_collapse" style="margin-left: 10px;">EnergyTransaction</a></legend>
                    <div id="EnergyTransaction_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    {{#EnergyPriceCurves}}<div><b>EnergyPriceCurves</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EnergyPriceCurves}}
                    {{#EnergyProfiles}}<div><b>EnergyProfiles</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EnergyProfiles}}
                    {{#TransmissionReservation}}<div><b>TransmissionReservation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TransmissionReservation}}&quot;);})'>{{TransmissionReservation}}</a></div>{{/TransmissionReservation}}
                    {{#Export_SubControlArea}}<div><b>Export_SubControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Export_SubControlArea}}&quot;);})'>{{Export_SubControlArea}}</a></div>{{/Export_SubControlArea}}
                    {{#TieLines}}<div><b>TieLines</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/TieLines}}
                    {{#LossProfiles}}<div><b>LossProfiles</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/LossProfiles}}
                    {{#Import_SubControlArea}}<div><b>Import_SubControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Import_SubControlArea}}&quot;);})'>{{Import_SubControlArea}}</a></div>{{/Import_SubControlArea}}
                    {{#CurtailmentProfiles}}<div><b>CurtailmentProfiles</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CurtailmentProfiles}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.EnergyPriceCurves) obj.EnergyPriceCurves_string = obj.EnergyPriceCurves.join ();
                if (obj.EnergyProfiles) obj.EnergyProfiles_string = obj.EnergyProfiles.join ();
                if (obj.TieLines) obj.TieLines_string = obj.TieLines.join ();
                if (obj.LossProfiles) obj.LossProfiles_string = obj.LossProfiles.join ();
                if (obj.CurtailmentProfiles) obj.CurtailmentProfiles_string = obj.CurtailmentProfiles.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.EnergyPriceCurves_string;
                delete obj.EnergyProfiles_string;
                delete obj.TieLines_string;
                delete obj.LossProfiles_string;
                delete obj.CurtailmentProfiles_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EnergyTransaction_collapse" aria-expanded="true" aria-controls="{{id}}_EnergyTransaction_collapse" style="margin-left: 10px;">EnergyTransaction</a></legend>
                    <div id="{{id}}_EnergyTransaction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_capacityBacked'>capacityBacked: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_capacityBacked' class='form-check-input' type='checkbox'{{#capacityBacked}} checked{{/capacityBacked}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_congestChargeMax'>congestChargeMax: </label><div class='col-sm-8'><input id='{{id}}_congestChargeMax' class='form-control' type='text'{{#congestChargeMax}} value='{{congestChargeMax}}'{{/congestChargeMax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_deliveryPointP'>deliveryPointP: </label><div class='col-sm-8'><input id='{{id}}_deliveryPointP' class='form-control' type='text'{{#deliveryPointP}} value='{{deliveryPointP}}'{{/deliveryPointP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_energyMin'>energyMin: </label><div class='col-sm-8'><input id='{{id}}_energyMin' class='form-control' type='text'{{#energyMin}} value='{{energyMin}}'{{/energyMin}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_firmInterchangeFlag'>firmInterchangeFlag: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_firmInterchangeFlag' class='form-check-input' type='checkbox'{{#firmInterchangeFlag}} checked{{/firmInterchangeFlag}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_payCongestion'>payCongestion: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_payCongestion' class='form-check-input' type='checkbox'{{#payCongestion}} checked{{/payCongestion}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_reason'>reason: </label><div class='col-sm-8'><input id='{{id}}_reason' class='form-control' type='text'{{#reason}} value='{{reason}}'{{/reason}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_receiptPointP'>receiptPointP: </label><div class='col-sm-8'><input id='{{id}}_receiptPointP' class='form-control' type='text'{{#receiptPointP}} value='{{receiptPointP}}'{{/receiptPointP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_state'>state: </label><div class='col-sm-8'><input id='{{id}}_state' class='form-control' type='text'{{#state}} value='{{state}}'{{/state}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnergyProduct'>EnergyProduct: </label><div class='col-sm-8'><input id='{{id}}_EnergyProduct' class='form-control' type='text'{{#EnergyProduct}} value='{{EnergyProduct}}'{{/EnergyProduct}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnergyPriceCurves'>EnergyPriceCurves: </label><div class='col-sm-8'><input id='{{id}}_EnergyPriceCurves' class='form-control' type='text'{{#EnergyPriceCurves}} value='{{EnergyPriceCurves}}_string'{{/EnergyPriceCurves}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TransmissionReservation'>TransmissionReservation: </label><div class='col-sm-8'><input id='{{id}}_TransmissionReservation' class='form-control' type='text'{{#TransmissionReservation}} value='{{TransmissionReservation}}'{{/TransmissionReservation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Export_SubControlArea'>Export_SubControlArea: </label><div class='col-sm-8'><input id='{{id}}_Export_SubControlArea' class='form-control' type='text'{{#Export_SubControlArea}} value='{{Export_SubControlArea}}'{{/Export_SubControlArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Import_SubControlArea'>Import_SubControlArea: </label><div class='col-sm-8'><input id='{{id}}_Import_SubControlArea' class='form-control' type='text'{{#Import_SubControlArea}} value='{{Import_SubControlArea}}'{{/Import_SubControlArea}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "EnergyTransaction" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_capacityBacked").checked; if (temp) obj.capacityBacked = true;
                temp = document.getElementById (id + "_congestChargeMax").value; if ("" != temp) obj.congestChargeMax = temp;
                temp = document.getElementById (id + "_deliveryPointP").value; if ("" != temp) obj.deliveryPointP = temp;
                temp = document.getElementById (id + "_energyMin").value; if ("" != temp) obj.energyMin = temp;
                temp = document.getElementById (id + "_firmInterchangeFlag").checked; if (temp) obj.firmInterchangeFlag = true;
                temp = document.getElementById (id + "_payCongestion").checked; if (temp) obj.payCongestion = true;
                temp = document.getElementById (id + "_reason").value; if ("" != temp) obj.reason = temp;
                temp = document.getElementById (id + "_receiptPointP").value; if ("" != temp) obj.receiptPointP = temp;
                temp = document.getElementById (id + "_state").value; if ("" != temp) obj.state = temp;
                temp = document.getElementById (id + "_EnergyProduct").value; if ("" != temp) obj.EnergyProduct = temp;
                temp = document.getElementById (id + "_EnergyPriceCurves").value; if ("" != temp) obj.EnergyPriceCurves = temp.split (",");
                temp = document.getElementById (id + "_TransmissionReservation").value; if ("" != temp) obj.TransmissionReservation = temp;
                temp = document.getElementById (id + "_Export_SubControlArea").value; if ("" != temp) obj.Export_SubControlArea = temp;
                temp = document.getElementById (id + "_Import_SubControlArea").value; if ("" != temp) obj.Import_SubControlArea = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EnergyProduct", "1", "1..*", "EnergyProduct", "EnergyTransactions"],
                            ["EnergyPriceCurves", "0..*", "0..*", "EnergyPriceCurve", "EnergyTransactions"],
                            ["EnergyProfiles", "1..*", "1", "EnergyProfile", "EnergyTransaction"],
                            ["TransmissionReservation", "0..1", "0..1", "TransmissionReservation", "EnergyTransaction"],
                            ["Export_SubControlArea", "1", "0..*", "SubControlArea", "Export_EnergyTransactions"],
                            ["TieLines", "0..*", "0..1", "TieLine", "EnergyTransaction"],
                            ["LossProfiles", "0..*", "1", "LossProfile", "EnergyTransaction"],
                            ["Import_SubControlArea", "1", "0..*", "SubControlArea", "Import_EnergyTransactions"],
                            ["CurtailmentProfiles", "0..*", "1", "CurtailmentProfile", "EnergyTransaction"]
                        ]
                    )
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
                var bucket = cim_data.EnergyConsumerData;
                if (null == bucket)
                   cim_data.EnergyConsumerData = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EnergyConsumerData[obj.id];
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

                base.export_element (obj, "EnergyConsumerData", "loadMVAR", "loadMVAR",  base.from_float, fields);
                base.export_element (obj, "EnergyConsumerData", "loadMW", "loadMW",  base.from_float, fields);
                base.export_attribute (obj, "EnergyConsumerData", "MktEnergyConsumer", "MktEnergyConsumer", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EnergyConsumerData_collapse" aria-expanded="true" aria-controls="EnergyConsumerData_collapse" style="margin-left: 10px;">EnergyConsumerData</a></legend>
                    <div id="EnergyConsumerData_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EnergyConsumerData_collapse" aria-expanded="true" aria-controls="{{id}}_EnergyConsumerData_collapse" style="margin-left: 10px;">EnergyConsumerData</a></legend>
                    <div id="{{id}}_EnergyConsumerData_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_loadMVAR'>loadMVAR: </label><div class='col-sm-8'><input id='{{id}}_loadMVAR' class='form-control' type='text'{{#loadMVAR}} value='{{loadMVAR}}'{{/loadMVAR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_loadMW'>loadMW: </label><div class='col-sm-8'><input id='{{id}}_loadMW' class='form-control' type='text'{{#loadMW}} value='{{loadMW}}'{{/loadMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MktEnergyConsumer'>MktEnergyConsumer: </label><div class='col-sm-8'><input id='{{id}}_MktEnergyConsumer' class='form-control' type='text'{{#MktEnergyConsumer}} value='{{MktEnergyConsumer}}'{{/MktEnergyConsumer}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "EnergyConsumerData" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_loadMVAR").value; if ("" != temp) obj.loadMVAR = temp;
                temp = document.getElementById (id + "_loadMW").value; if ("" != temp) obj.loadMW = temp;
                temp = document.getElementById (id + "_MktEnergyConsumer").value; if ("" != temp) obj.MktEnergyConsumer = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MktEnergyConsumer", "1", "0..*", "MktEnergyConsumer", "EnergyConsumerData"]
                        ]
                    )
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
                var bucket = cim_data.SecurityConstraints;
                if (null == bucket)
                   cim_data.SecurityConstraints = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SecurityConstraints[obj.id];
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

                base.export_element (obj, "SecurityConstraints", "minMW", "minMW",  base.from_string, fields);
                base.export_element (obj, "SecurityConstraints", "maxMW", "maxMW",  base.from_string, fields);
                base.export_element (obj, "SecurityConstraints", "actualMW", "actualMW",  base.from_string, fields);
                base.export_attribute (obj, "SecurityConstraints", "RTO", "RTO", fields);
                base.export_attribute (obj, "SecurityConstraints", "Flowgate", "Flowgate", fields);
                base.export_attribute (obj, "SecurityConstraints", "GeneratingBid", "GeneratingBid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SecurityConstraints_collapse" aria-expanded="true" aria-controls="SecurityConstraints_collapse" style="margin-left: 10px;">SecurityConstraints</a></legend>
                    <div id="SecurityConstraints_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SecurityConstraints_collapse" aria-expanded="true" aria-controls="{{id}}_SecurityConstraints_collapse" style="margin-left: 10px;">SecurityConstraints</a></legend>
                    <div id="{{id}}_SecurityConstraints_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minMW'>minMW: </label><div class='col-sm-8'><input id='{{id}}_minMW' class='form-control' type='text'{{#minMW}} value='{{minMW}}'{{/minMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxMW'>maxMW: </label><div class='col-sm-8'><input id='{{id}}_maxMW' class='form-control' type='text'{{#maxMW}} value='{{maxMW}}'{{/maxMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_actualMW'>actualMW: </label><div class='col-sm-8'><input id='{{id}}_actualMW' class='form-control' type='text'{{#actualMW}} value='{{actualMW}}'{{/actualMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RTO'>RTO: </label><div class='col-sm-8'><input id='{{id}}_RTO' class='form-control' type='text'{{#RTO}} value='{{RTO}}'{{/RTO}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Flowgate'>Flowgate: </label><div class='col-sm-8'><input id='{{id}}_Flowgate' class='form-control' type='text'{{#Flowgate}} value='{{Flowgate}}'{{/Flowgate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GeneratingBid'>GeneratingBid: </label><div class='col-sm-8'><input id='{{id}}_GeneratingBid' class='form-control' type='text'{{#GeneratingBid}} value='{{GeneratingBid}}'{{/GeneratingBid}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "SecurityConstraints" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_minMW").value; if ("" != temp) obj.minMW = temp;
                temp = document.getElementById (id + "_maxMW").value; if ("" != temp) obj.maxMW = temp;
                temp = document.getElementById (id + "_actualMW").value; if ("" != temp) obj.actualMW = temp;
                temp = document.getElementById (id + "_RTO").value; if ("" != temp) obj.RTO = temp;
                temp = document.getElementById (id + "_Flowgate").value; if ("" != temp) obj.Flowgate = temp;
                temp = document.getElementById (id + "_GeneratingBid").value; if ("" != temp) obj.GeneratingBid = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RTO", "0..1", "0..*", "RTO", "SecurityConstraints"],
                            ["Flowgate", "0..1", "0..1", "Flowgate", "SecurityConstraints"],
                            ["GeneratingBid", "0..1", "0..*", "GeneratingBid", "SecurityConstraints"]
                        ]
                    )
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
                var bucket = cim_data.SecurityConstraintSum;
                if (null == bucket)
                   cim_data.SecurityConstraintSum = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SecurityConstraintSum[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "SecurityConstraintSum";
                base.parse_attributes (/<cim:SecurityConstraintSum.ContingencyConstraintLimits\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ContingencyConstraintLimits", sub, context);
                base.parse_attribute (/<cim:SecurityConstraintSum.DefaultConstraintLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DefaultConstraintLimit", sub, context);
                base.parse_attributes (/<cim:SecurityConstraintSum.ConstraintTerms\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConstraintTerms", sub, context);
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

                base.export_attributes (obj, "SecurityConstraintSum", "ContingencyConstraintLimits", "ContingencyConstraintLimits", fields);
                base.export_attribute (obj, "SecurityConstraintSum", "DefaultConstraintLimit", "DefaultConstraintLimit", fields);
                base.export_attributes (obj, "SecurityConstraintSum", "ConstraintTerms", "ConstraintTerms", fields);
                base.export_attribute (obj, "SecurityConstraintSum", "RTO", "RTO", fields);
                base.export_attribute (obj, "SecurityConstraintSum", "BaseCaseConstraintLimit", "BaseCaseConstraintLimit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SecurityConstraintSum_collapse" aria-expanded="true" aria-controls="SecurityConstraintSum_collapse" style="margin-left: 10px;">SecurityConstraintSum</a></legend>
                    <div id="SecurityConstraintSum_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.template.call (this) +
                    `
                    {{#ContingencyConstraintLimits}}<div><b>ContingencyConstraintLimits</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ContingencyConstraintLimits}}
                    {{#DefaultConstraintLimit}}<div><b>DefaultConstraintLimit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DefaultConstraintLimit}}&quot;);})'>{{DefaultConstraintLimit}}</a></div>{{/DefaultConstraintLimit}}
                    {{#ConstraintTerms}}<div><b>ConstraintTerms</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ConstraintTerms}}
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
                if (obj.ContingencyConstraintLimits) obj.ContingencyConstraintLimits_string = obj.ContingencyConstraintLimits.join ();
                if (obj.ConstraintTerms) obj.ConstraintTerms_string = obj.ConstraintTerms.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ContingencyConstraintLimits_string;
                delete obj.ConstraintTerms_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SecurityConstraintSum_collapse" aria-expanded="true" aria-controls="{{id}}_SecurityConstraintSum_collapse" style="margin-left: 10px;">SecurityConstraintSum</a></legend>
                    <div id="{{id}}_SecurityConstraintSum_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DefaultConstraintLimit'>DefaultConstraintLimit: </label><div class='col-sm-8'><input id='{{id}}_DefaultConstraintLimit' class='form-control' type='text'{{#DefaultConstraintLimit}} value='{{DefaultConstraintLimit}}'{{/DefaultConstraintLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RTO'>RTO: </label><div class='col-sm-8'><input id='{{id}}_RTO' class='form-control' type='text'{{#RTO}} value='{{RTO}}'{{/RTO}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BaseCaseConstraintLimit'>BaseCaseConstraintLimit: </label><div class='col-sm-8'><input id='{{id}}_BaseCaseConstraintLimit' class='form-control' type='text'{{#BaseCaseConstraintLimit}} value='{{BaseCaseConstraintLimit}}'{{/BaseCaseConstraintLimit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "SecurityConstraintSum" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_DefaultConstraintLimit").value; if ("" != temp) obj.DefaultConstraintLimit = temp;
                temp = document.getElementById (id + "_RTO").value; if ("" != temp) obj.RTO = temp;
                temp = document.getElementById (id + "_BaseCaseConstraintLimit").value; if ("" != temp) obj.BaseCaseConstraintLimit = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ContingencyConstraintLimits", "0..*", "1", "ContingencyConstraintLimit", "SecurityConstraintSum"],
                            ["DefaultConstraintLimit", "0..1", "1", "DefaultConstraintLimit", "SecurityConstraintSum"],
                            ["ConstraintTerms", "0..*", "1", "ConstraintTerm", "SecurityConstraintSum"],
                            ["RTO", "0..1", "0..*", "RTO", "SecurityConstraintsLinear"],
                            ["BaseCaseConstraintLimit", "0..1", "1", "BaseCaseConstraintLimit", "SecurityConstraintSum"]
                        ]
                    )
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
                var bucket = cim_data.MWLimitSchedule;
                if (null == bucket)
                   cim_data.MWLimitSchedule = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MWLimitSchedule[obj.id];
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

                base.export_attribute (obj, "MWLimitSchedule", "SecurityConstraintLimit", "SecurityConstraintLimit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MWLimitSchedule_collapse" aria-expanded="true" aria-controls="MWLimitSchedule_collapse" style="margin-left: 10px;">MWLimitSchedule</a></legend>
                    <div id="MWLimitSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MWLimitSchedule_collapse" aria-expanded="true" aria-controls="{{id}}_MWLimitSchedule_collapse" style="margin-left: 10px;">MWLimitSchedule</a></legend>
                    <div id="{{id}}_MWLimitSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SecurityConstraintLimit'>SecurityConstraintLimit: </label><div class='col-sm-8'><input id='{{id}}_SecurityConstraintLimit' class='form-control' type='text'{{#SecurityConstraintLimit}} value='{{SecurityConstraintLimit}}'{{/SecurityConstraintLimit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "MWLimitSchedule" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_SecurityConstraintLimit").value; if ("" != temp) obj.SecurityConstraintLimit = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["SecurityConstraintLimit", "1", "1", "ContingencyConstraintLimit", "MWLimitSchedules"]
                        ]
                    )
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
                var bucket = cim_data.AreaLoadCurve;
                if (null == bucket)
                   cim_data.AreaLoadCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AreaLoadCurve[obj.id];
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

                base.export_element (obj, "AreaLoadCurve", "forecastType", "forecastType",  base.from_string, fields);
                base.export_attribute (obj, "AreaLoadCurve", "AggregateNode", "AggregateNode", fields);
                base.export_attribute (obj, "AreaLoadCurve", "TACArea", "TACArea", fields);
                base.export_attribute (obj, "AreaLoadCurve", "MktLoadArea", "MktLoadArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AreaLoadCurve_collapse" aria-expanded="true" aria-controls="AreaLoadCurve_collapse" style="margin-left: 10px;">AreaLoadCurve</a></legend>
                    <div id="AreaLoadCurve_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AreaLoadCurve_collapse" aria-expanded="true" aria-controls="{{id}}_AreaLoadCurve_collapse" style="margin-left: 10px;">AreaLoadCurve</a></legend>
                    <div id="{{id}}_AreaLoadCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.RegularIntervalSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_forecastType'>forecastType: </label><div class='col-sm-8'><input id='{{id}}_forecastType' class='form-control' type='text'{{#forecastType}} value='{{forecastType}}'{{/forecastType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AggregateNode'>AggregateNode: </label><div class='col-sm-8'><input id='{{id}}_AggregateNode' class='form-control' type='text'{{#AggregateNode}} value='{{AggregateNode}}'{{/AggregateNode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TACArea'>TACArea: </label><div class='col-sm-8'><input id='{{id}}_TACArea' class='form-control' type='text'{{#TACArea}} value='{{TACArea}}'{{/TACArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MktLoadArea'>MktLoadArea: </label><div class='col-sm-8'><input id='{{id}}_MktLoadArea' class='form-control' type='text'{{#MktLoadArea}} value='{{MktLoadArea}}'{{/MktLoadArea}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "AreaLoadCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_forecastType").value; if ("" != temp) obj.forecastType = temp;
                temp = document.getElementById (id + "_AggregateNode").value; if ("" != temp) obj.AggregateNode = temp;
                temp = document.getElementById (id + "_TACArea").value; if ("" != temp) obj.TACArea = temp;
                temp = document.getElementById (id + "_MktLoadArea").value; if ("" != temp) obj.MktLoadArea = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AggregateNode", "0..1", "0..*", "AggregateNode", "AreaLoadCurve"],
                            ["TACArea", "0..1", "0..*", "TACArea", "AreaLoadCurve"],
                            ["MktLoadArea", "0..1", "0..*", "MktLoadArea", "AreaLoadCurve"]
                        ]
                    )
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
                var bucket = cim_data.ReserveDemandCurve;
                if (null == bucket)
                   cim_data.ReserveDemandCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ReserveDemandCurve[obj.id];
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

                base.export_element (obj, "ReserveDemandCurve", "reqMaxMW", "reqMaxMW",  base.from_float, fields);
                base.export_element (obj, "ReserveDemandCurve", "reserveRequirementType", "reserveRequirementType",  base.from_string, fields);
                base.export_attribute (obj, "ReserveDemandCurve", "ASRequirements", "ASRequirements", fields);
                base.export_attribute (obj, "ReserveDemandCurve", "MarketRegion", "MarketRegion", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ReserveDemandCurve_collapse" aria-expanded="true" aria-controls="ReserveDemandCurve_collapse" style="margin-left: 10px;">ReserveDemandCurve</a></legend>
                    <div id="ReserveDemandCurve_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ReserveDemandCurve_collapse" aria-expanded="true" aria-controls="{{id}}_ReserveDemandCurve_collapse" style="margin-left: 10px;">ReserveDemandCurve</a></legend>
                    <div id="{{id}}_ReserveDemandCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_reqMaxMW'>reqMaxMW: </label><div class='col-sm-8'><input id='{{id}}_reqMaxMW' class='form-control' type='text'{{#reqMaxMW}} value='{{reqMaxMW}}'{{/reqMaxMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_reserveRequirementType'>reserveRequirementType: </label><div class='col-sm-8'><input id='{{id}}_reserveRequirementType' class='form-control' type='text'{{#reserveRequirementType}} value='{{reserveRequirementType}}'{{/reserveRequirementType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ASRequirements'>ASRequirements: </label><div class='col-sm-8'><input id='{{id}}_ASRequirements' class='form-control' type='text'{{#ASRequirements}} value='{{ASRequirements}}'{{/ASRequirements}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketRegion'>MarketRegion: </label><div class='col-sm-8'><input id='{{id}}_MarketRegion' class='form-control' type='text'{{#MarketRegion}} value='{{MarketRegion}}'{{/MarketRegion}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ReserveDemandCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_reqMaxMW").value; if ("" != temp) obj.reqMaxMW = temp;
                temp = document.getElementById (id + "_reserveRequirementType").value; if ("" != temp) obj.reserveRequirementType = temp;
                temp = document.getElementById (id + "_ASRequirements").value; if ("" != temp) obj.ASRequirements = temp;
                temp = document.getElementById (id + "_MarketRegion").value; if ("" != temp) obj.MarketRegion = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ASRequirements", "1", "1..*", "ASRequirements", "ReserveDemandCurve"],
                            ["MarketRegion", "1", "0..*", "MarketRegion", "ReserveDemandCurve"]
                        ]
                    )
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
                var bucket = cim_data.SCADAInformation;
                if (null == bucket)
                   cim_data.SCADAInformation = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SCADAInformation[obj.id];
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

                base.export_element (obj, "SCADAInformation", "timeStamp", "timeStamp",  base.from_datetime, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SCADAInformation_collapse" aria-expanded="true" aria-controls="SCADAInformation_collapse" style="margin-left: 10px;">SCADAInformation</a></legend>
                    <div id="SCADAInformation_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SCADAInformation_collapse" aria-expanded="true" aria-controls="{{id}}_SCADAInformation_collapse" style="margin-left: 10px;">SCADAInformation</a></legend>
                    <div id="{{id}}_SCADAInformation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_timeStamp'>timeStamp: </label><div class='col-sm-8'><input id='{{id}}_timeStamp' class='form-control' type='text'{{#timeStamp}} value='{{timeStamp}}'{{/timeStamp}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "SCADAInformation" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_timeStamp").value; if ("" != temp) obj.timeStamp = temp;

                return (obj);
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
                var bucket = cim_data.SwitchStatus;
                if (null == bucket)
                   cim_data.SwitchStatus = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SwitchStatus[obj.id];
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

                base.export_element (obj, "SwitchStatus", "switchStatus", "switchStatus",  base.from_string, fields);
                base.export_attribute (obj, "SwitchStatus", "MktSwitch", "MktSwitch", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SwitchStatus_collapse" aria-expanded="true" aria-controls="SwitchStatus_collapse" style="margin-left: 10px;">SwitchStatus</a></legend>
                    <div id="SwitchStatus_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SwitchStatus_collapse" aria-expanded="true" aria-controls="{{id}}_SwitchStatus_collapse" style="margin-left: 10px;">SwitchStatus</a></legend>
                    <div id="{{id}}_SwitchStatus_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_switchStatus'>switchStatus: </label><div class='col-sm-8'><input id='{{id}}_switchStatus' class='form-control' type='text'{{#switchStatus}} value='{{switchStatus}}'{{/switchStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MktSwitch'>MktSwitch: </label><div class='col-sm-8'><input id='{{id}}_MktSwitch' class='form-control' type='text'{{#MktSwitch}} value='{{MktSwitch}}'{{/MktSwitch}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "SwitchStatus" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_switchStatus").value; if ("" != temp) obj.switchStatus = temp;
                temp = document.getElementById (id + "_MktSwitch").value; if ("" != temp) obj.MktSwitch = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MktSwitch", "1", "0..*", "MktSwitch", "SwitchStatus"]
                        ]
                    )
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
                var bucket = cim_data.ProfileData;
                if (null == bucket)
                   cim_data.ProfileData = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ProfileData[obj.id];
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
                base.parse_attributes (/<cim:ProfileData.Profile\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Profile", sub, context);
                var bucket = context.parsed.ProfileData;
                if (null == bucket)
                   context.parsed.ProfileData = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ProfileData", "bidPrice", "bidPrice",  base.from_float, fields);
                base.export_element (obj, "ProfileData", "capacityLevel", "capacityLevel",  base.from_string, fields);
                base.export_element (obj, "ProfileData", "energyLevel", "energyLevel",  base.from_string, fields);
                base.export_element (obj, "ProfileData", "minimumLevel", "minimumLevel",  base.from_float, fields);
                base.export_element (obj, "ProfileData", "sequenceNumber", "sequenceNumber",  base.from_string, fields);
                base.export_element (obj, "ProfileData", "startDateTime", "startDateTime",  base.from_datetime, fields);
                base.export_element (obj, "ProfileData", "stopDateTime", "stopDateTime",  base.from_datetime, fields);
                base.export_attributes (obj, "ProfileData", "Profile", "Profile", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ProfileData_collapse" aria-expanded="true" aria-controls="ProfileData_collapse" style="margin-left: 10px;">ProfileData</a></legend>
                    <div id="ProfileData_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    {{#Profile}}<div><b>Profile</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Profile}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Profile) obj.Profile_string = obj.Profile.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Profile_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ProfileData_collapse" aria-expanded="true" aria-controls="{{id}}_ProfileData_collapse" style="margin-left: 10px;">ProfileData</a></legend>
                    <div id="{{id}}_ProfileData_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bidPrice'>bidPrice: </label><div class='col-sm-8'><input id='{{id}}_bidPrice' class='form-control' type='text'{{#bidPrice}} value='{{bidPrice}}'{{/bidPrice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_capacityLevel'>capacityLevel: </label><div class='col-sm-8'><input id='{{id}}_capacityLevel' class='form-control' type='text'{{#capacityLevel}} value='{{capacityLevel}}'{{/capacityLevel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_energyLevel'>energyLevel: </label><div class='col-sm-8'><input id='{{id}}_energyLevel' class='form-control' type='text'{{#energyLevel}} value='{{energyLevel}}'{{/energyLevel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minimumLevel'>minimumLevel: </label><div class='col-sm-8'><input id='{{id}}_minimumLevel' class='form-control' type='text'{{#minimumLevel}} value='{{minimumLevel}}'{{/minimumLevel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sequenceNumber'>sequenceNumber: </label><div class='col-sm-8'><input id='{{id}}_sequenceNumber' class='form-control' type='text'{{#sequenceNumber}} value='{{sequenceNumber}}'{{/sequenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_startDateTime'>startDateTime: </label><div class='col-sm-8'><input id='{{id}}_startDateTime' class='form-control' type='text'{{#startDateTime}} value='{{startDateTime}}'{{/startDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_stopDateTime'>stopDateTime: </label><div class='col-sm-8'><input id='{{id}}_stopDateTime' class='form-control' type='text'{{#stopDateTime}} value='{{stopDateTime}}'{{/stopDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Profile'>Profile: </label><div class='col-sm-8'><input id='{{id}}_Profile' class='form-control' type='text'{{#Profile}} value='{{Profile}}_string'{{/Profile}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ProfileData" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_bidPrice").value; if ("" != temp) obj.bidPrice = temp;
                temp = document.getElementById (id + "_capacityLevel").value; if ("" != temp) obj.capacityLevel = temp;
                temp = document.getElementById (id + "_energyLevel").value; if ("" != temp) obj.energyLevel = temp;
                temp = document.getElementById (id + "_minimumLevel").value; if ("" != temp) obj.minimumLevel = temp;
                temp = document.getElementById (id + "_sequenceNumber").value; if ("" != temp) obj.sequenceNumber = temp;
                temp = document.getElementById (id + "_startDateTime").value; if ("" != temp) obj.startDateTime = temp;
                temp = document.getElementById (id + "_stopDateTime").value; if ("" != temp) obj.stopDateTime = temp;
                temp = document.getElementById (id + "_Profile").value; if ("" != temp) obj.Profile = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Profile", "0..*", "0..*", "Profile", "ProfileDatas"]
                        ]
                    )
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
                var bucket = cim_data.DefaultBidCurveData;
                if (null == bucket)
                   cim_data.DefaultBidCurveData = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DefaultBidCurveData[obj.id];
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

                base.export_element (obj, "DefaultBidCurveData", "bidSegmentCalcType", "bidSegmentCalcType",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DefaultBidCurveData_collapse" aria-expanded="true" aria-controls="DefaultBidCurveData_collapse" style="margin-left: 10px;">DefaultBidCurveData</a></legend>
                    <div id="DefaultBidCurveData_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DefaultBidCurveData_collapse" aria-expanded="true" aria-controls="{{id}}_DefaultBidCurveData_collapse" style="margin-left: 10px;">DefaultBidCurveData</a></legend>
                    <div id="{{id}}_DefaultBidCurveData_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.CurveData.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bidSegmentCalcType'>bidSegmentCalcType: </label><div class='col-sm-8'><input id='{{id}}_bidSegmentCalcType' class='form-control' type='text'{{#bidSegmentCalcType}} value='{{bidSegmentCalcType}}'{{/bidSegmentCalcType}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "DefaultBidCurveData" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_bidSegmentCalcType").value; if ("" != temp) obj.bidSegmentCalcType = temp;

                return (obj);
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
                var bucket = cim_data.MktSwitch;
                if (null == bucket)
                   cim_data.MktSwitch = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MktSwitch[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Wires.Switch.prototype.parse.call (this, context, sub);
                obj.cls = "MktSwitch";
                base.parse_attributes (/<cim:MktSwitch.SwitchStatus\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchStatus", sub, context);
                var bucket = context.parsed.MktSwitch;
                if (null == bucket)
                   context.parsed.MktSwitch = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Wires.Switch.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "MktSwitch", "SwitchStatus", "SwitchStatus", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MktSwitch_collapse" aria-expanded="true" aria-controls="MktSwitch_collapse" style="margin-left: 10px;">MktSwitch</a></legend>
                    <div id="MktSwitch_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Wires.Switch.prototype.template.call (this) +
                    `
                    {{#SwitchStatus}}<div><b>SwitchStatus</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/SwitchStatus}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.SwitchStatus) obj.SwitchStatus_string = obj.SwitchStatus.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.SwitchStatus_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MktSwitch_collapse" aria-expanded="true" aria-controls="{{id}}_MktSwitch_collapse" style="margin-left: 10px;">MktSwitch</a></legend>
                    <div id="{{id}}_MktSwitch_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Wires.Switch.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "MktSwitch" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["SwitchStatus", "0..*", "1", "SwitchStatus", "MktSwitch"]
                        ]
                    )
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
                var bucket = cim_data.BaseCaseConstraintLimit;
                if (null == bucket)
                   cim_data.BaseCaseConstraintLimit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BaseCaseConstraintLimit[obj.id];
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

                base.export_attribute (obj, "BaseCaseConstraintLimit", "SecurityConstraintSum", "SecurityConstraintSum", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#BaseCaseConstraintLimit_collapse" aria-expanded="true" aria-controls="BaseCaseConstraintLimit_collapse" style="margin-left: 10px;">BaseCaseConstraintLimit</a></legend>
                    <div id="BaseCaseConstraintLimit_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_BaseCaseConstraintLimit_collapse" aria-expanded="true" aria-controls="{{id}}_BaseCaseConstraintLimit_collapse" style="margin-left: 10px;">BaseCaseConstraintLimit</a></legend>
                    <div id="{{id}}_BaseCaseConstraintLimit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SecurityConstraintSum'>SecurityConstraintSum: </label><div class='col-sm-8'><input id='{{id}}_SecurityConstraintSum' class='form-control' type='text'{{#SecurityConstraintSum}} value='{{SecurityConstraintSum}}'{{/SecurityConstraintSum}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "BaseCaseConstraintLimit" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_SecurityConstraintSum").value; if ("" != temp) obj.SecurityConstraintSum = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["SecurityConstraintSum", "1", "0..1", "SecurityConstraintSum", "BaseCaseConstraintLimit"]
                        ]
                    )
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
                var bucket = cim_data.DiscreteMeasurementValueQuality;
                if (null == bucket)
                   cim_data.DiscreteMeasurementValueQuality = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DiscreteMeasurementValueQuality[obj.id];
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

                base.export_element (obj, "DiscreteMeasurementValueQuality", "manualReplaceIndicator", "manualReplaceIndicator",  base.from_boolean, fields);
                base.export_element (obj, "DiscreteMeasurementValueQuality", "removeFromOperationIndicator", "removeFromOperationIndicator",  base.from_boolean, fields);
                base.export_attribute (obj, "DiscreteMeasurementValueQuality", "MktDiscreteValue", "MktDiscreteValue", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DiscreteMeasurementValueQuality_collapse" aria-expanded="true" aria-controls="DiscreteMeasurementValueQuality_collapse" style="margin-left: 10px;">DiscreteMeasurementValueQuality</a></legend>
                    <div id="DiscreteMeasurementValueQuality_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DiscreteMeasurementValueQuality_collapse" aria-expanded="true" aria-controls="{{id}}_DiscreteMeasurementValueQuality_collapse" style="margin-left: 10px;">DiscreteMeasurementValueQuality</a></legend>
                    <div id="{{id}}_DiscreteMeasurementValueQuality_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Meas.MeasurementValueQuality.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_manualReplaceIndicator'>manualReplaceIndicator: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_manualReplaceIndicator' class='form-check-input' type='checkbox'{{#manualReplaceIndicator}} checked{{/manualReplaceIndicator}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_removeFromOperationIndicator'>removeFromOperationIndicator: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_removeFromOperationIndicator' class='form-check-input' type='checkbox'{{#removeFromOperationIndicator}} checked{{/removeFromOperationIndicator}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MktDiscreteValue'>MktDiscreteValue: </label><div class='col-sm-8'><input id='{{id}}_MktDiscreteValue' class='form-control' type='text'{{#MktDiscreteValue}} value='{{MktDiscreteValue}}'{{/MktDiscreteValue}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "DiscreteMeasurementValueQuality" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_manualReplaceIndicator").checked; if (temp) obj.manualReplaceIndicator = true;
                temp = document.getElementById (id + "_removeFromOperationIndicator").checked; if (temp) obj.removeFromOperationIndicator = true;
                temp = document.getElementById (id + "_MktDiscreteValue").value; if ("" != temp) obj.MktDiscreteValue = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MktDiscreteValue", "1", "0..*", "MktDiscreteValue", "DiscreteMeasurementValueQuality"]
                        ]
                    )
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
                var bucket = cim_data.MktTapChanger;
                if (null == bucket)
                   cim_data.MktTapChanger = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MktTapChanger[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Wires.TapChanger.prototype.parse.call (this, context, sub);
                obj.cls = "MktTapChanger";
                base.parse_attributes (/<cim:MktTapChanger.TapChangerDynamicData\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TapChangerDynamicData", sub, context);
                var bucket = context.parsed.MktTapChanger;
                if (null == bucket)
                   context.parsed.MktTapChanger = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Wires.TapChanger.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "MktTapChanger", "TapChangerDynamicData", "TapChangerDynamicData", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MktTapChanger_collapse" aria-expanded="true" aria-controls="MktTapChanger_collapse" style="margin-left: 10px;">MktTapChanger</a></legend>
                    <div id="MktTapChanger_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Wires.TapChanger.prototype.template.call (this) +
                    `
                    {{#TapChangerDynamicData}}<div><b>TapChangerDynamicData</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/TapChangerDynamicData}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.TapChangerDynamicData) obj.TapChangerDynamicData_string = obj.TapChangerDynamicData.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TapChangerDynamicData_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MktTapChanger_collapse" aria-expanded="true" aria-controls="{{id}}_MktTapChanger_collapse" style="margin-left: 10px;">MktTapChanger</a></legend>
                    <div id="{{id}}_MktTapChanger_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Wires.TapChanger.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "MktTapChanger" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TapChangerDynamicData", "0..*", "1", "TapChangerDynamicData", "MktTapChanger"]
                        ]
                    )
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
                var bucket = cim_data.DefaultBid;
                if (null == bucket)
                   cim_data.DefaultBid = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DefaultBid[obj.id];
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

                base.export_element (obj, "DefaultBid", "bidType", "bidType",  base.from_string, fields);
                base.export_element (obj, "DefaultBid", "minLoadCost", "minLoadCost",  base.from_string, fields);
                base.export_element (obj, "DefaultBid", "peakFlag", "peakFlag",  base.from_string, fields);
                base.export_attribute (obj, "DefaultBid", "RegisteredResource", "RegisteredResource", fields);
                base.export_attribute (obj, "DefaultBid", "DefaultBidCurve", "DefaultBidCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DefaultBid_collapse" aria-expanded="true" aria-controls="DefaultBid_collapse" style="margin-left: 10px;">DefaultBid</a></legend>
                    <div id="DefaultBid_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DefaultBid_collapse" aria-expanded="true" aria-controls="{{id}}_DefaultBid_collapse" style="margin-left: 10px;">DefaultBid</a></legend>
                    <div id="{{id}}_DefaultBid_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ParticipantInterfaces.Bid.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bidType'>bidType: </label><div class='col-sm-8'><input id='{{id}}_bidType' class='form-control' type='text'{{#bidType}} value='{{bidType}}'{{/bidType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minLoadCost'>minLoadCost: </label><div class='col-sm-8'><input id='{{id}}_minLoadCost' class='form-control' type='text'{{#minLoadCost}} value='{{minLoadCost}}'{{/minLoadCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_peakFlag'>peakFlag: </label><div class='col-sm-8'><input id='{{id}}_peakFlag' class='form-control' type='text'{{#peakFlag}} value='{{peakFlag}}'{{/peakFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='{{id}}_RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DefaultBidCurve'>DefaultBidCurve: </label><div class='col-sm-8'><input id='{{id}}_DefaultBidCurve' class='form-control' type='text'{{#DefaultBidCurve}} value='{{DefaultBidCurve}}'{{/DefaultBidCurve}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "DefaultBid" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_bidType").value; if ("" != temp) obj.bidType = temp;
                temp = document.getElementById (id + "_minLoadCost").value; if ("" != temp) obj.minLoadCost = temp;
                temp = document.getElementById (id + "_peakFlag").value; if ("" != temp) obj.peakFlag = temp;
                temp = document.getElementById (id + "_RegisteredResource").value; if ("" != temp) obj.RegisteredResource = temp;
                temp = document.getElementById (id + "_DefaultBidCurve").value; if ("" != temp) obj.DefaultBidCurve = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegisteredResource", "1", "0..1", "RegisteredResource", "DefaultBid"],
                            ["DefaultBidCurve", "0..1", "0..1", "DefaultBidCurve", "DefaultBid"]
                        ]
                    )
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
                var bucket = cim_data.GenDistributionFactor;
                if (null == bucket)
                   cim_data.GenDistributionFactor = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GenDistributionFactor[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "GenDistributionFactor";
                base.parse_element (/<cim:GenDistributionFactor.factor>([\s\S]*?)<\/cim:GenDistributionFactor.factor>/g, obj, "factor", base.to_float, sub, context);
                base.parse_attribute (/<cim:GenDistributionFactor.AggregatedPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AggregatedPnode", sub, context);
                base.parse_attribute (/<cim:GenDistributionFactor.IndividualPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "IndividualPnode", sub, context);
                base.parse_attributes (/<cim:GenDistributionFactor.DistributionFactorSet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DistributionFactorSet", sub, context);
                var bucket = context.parsed.GenDistributionFactor;
                if (null == bucket)
                   context.parsed.GenDistributionFactor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "GenDistributionFactor", "factor", "factor",  base.from_float, fields);
                base.export_attribute (obj, "GenDistributionFactor", "AggregatedPnode", "AggregatedPnode", fields);
                base.export_attribute (obj, "GenDistributionFactor", "IndividualPnode", "IndividualPnode", fields);
                base.export_attributes (obj, "GenDistributionFactor", "DistributionFactorSet", "DistributionFactorSet", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#GenDistributionFactor_collapse" aria-expanded="true" aria-controls="GenDistributionFactor_collapse" style="margin-left: 10px;">GenDistributionFactor</a></legend>
                    <div id="GenDistributionFactor_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#factor}}<div><b>factor</b>: {{factor}}</div>{{/factor}}
                    {{#AggregatedPnode}}<div><b>AggregatedPnode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AggregatedPnode}}&quot;);})'>{{AggregatedPnode}}</a></div>{{/AggregatedPnode}}
                    {{#IndividualPnode}}<div><b>IndividualPnode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{IndividualPnode}}&quot;);})'>{{IndividualPnode}}</a></div>{{/IndividualPnode}}
                    {{#DistributionFactorSet}}<div><b>DistributionFactorSet</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/DistributionFactorSet}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.DistributionFactorSet) obj.DistributionFactorSet_string = obj.DistributionFactorSet.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.DistributionFactorSet_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_GenDistributionFactor_collapse" aria-expanded="true" aria-controls="{{id}}_GenDistributionFactor_collapse" style="margin-left: 10px;">GenDistributionFactor</a></legend>
                    <div id="{{id}}_GenDistributionFactor_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_factor'>factor: </label><div class='col-sm-8'><input id='{{id}}_factor' class='form-control' type='text'{{#factor}} value='{{factor}}'{{/factor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AggregatedPnode'>AggregatedPnode: </label><div class='col-sm-8'><input id='{{id}}_AggregatedPnode' class='form-control' type='text'{{#AggregatedPnode}} value='{{AggregatedPnode}}'{{/AggregatedPnode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_IndividualPnode'>IndividualPnode: </label><div class='col-sm-8'><input id='{{id}}_IndividualPnode' class='form-control' type='text'{{#IndividualPnode}} value='{{IndividualPnode}}'{{/IndividualPnode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DistributionFactorSet'>DistributionFactorSet: </label><div class='col-sm-8'><input id='{{id}}_DistributionFactorSet' class='form-control' type='text'{{#DistributionFactorSet}} value='{{DistributionFactorSet}}_string'{{/DistributionFactorSet}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GenDistributionFactor" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_factor").value; if ("" != temp) obj.factor = temp;
                temp = document.getElementById (id + "_AggregatedPnode").value; if ("" != temp) obj.AggregatedPnode = temp;
                temp = document.getElementById (id + "_IndividualPnode").value; if ("" != temp) obj.IndividualPnode = temp;
                temp = document.getElementById (id + "_DistributionFactorSet").value; if ("" != temp) obj.DistributionFactorSet = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AggregatedPnode", "0..1", "1..*", "AggregatedPnode", "GenDistributionFactor"],
                            ["IndividualPnode", "0..1", "0..1", "IndividualPnode", "GenDistributionFactor"],
                            ["DistributionFactorSet", "0..*", "0..*", "DistributionFactorSet", "GenDistributionFactor"]
                        ]
                    )
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
                var bucket = cim_data.MktAnalogLimitSet;
                if (null == bucket)
                   cim_data.MktAnalogLimitSet = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MktAnalogLimitSet[obj.id];
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

                base.export_element (obj, "MktAnalogLimitSet", "ratingSet", "ratingSet",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MktAnalogLimitSet_collapse" aria-expanded="true" aria-controls="MktAnalogLimitSet_collapse" style="margin-left: 10px;">MktAnalogLimitSet</a></legend>
                    <div id="MktAnalogLimitSet_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MktAnalogLimitSet_collapse" aria-expanded="true" aria-controls="{{id}}_MktAnalogLimitSet_collapse" style="margin-left: 10px;">MktAnalogLimitSet</a></legend>
                    <div id="{{id}}_MktAnalogLimitSet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Meas.AnalogLimitSet.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratingSet'>ratingSet: </label><div class='col-sm-8'><input id='{{id}}_ratingSet' class='form-control' type='text'{{#ratingSet}} value='{{ratingSet}}'{{/ratingSet}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "MktAnalogLimitSet" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ratingSet").value; if ("" != temp) obj.ratingSet = temp;

                return (obj);
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
                var bucket = cim_data.MktACLineSegment;
                if (null == bucket)
                   cim_data.MktACLineSegment = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MktACLineSegment[obj.id];
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

                base.export_attribute (obj, "MktACLineSegment", "EndAFlow", "EndAFlow", fields);
                base.export_attribute (obj, "MktACLineSegment", "EndBFlow", "EndBFlow", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MktACLineSegment_collapse" aria-expanded="true" aria-controls="MktACLineSegment_collapse" style="margin-left: 10px;">MktACLineSegment</a></legend>
                    <div id="MktACLineSegment_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MktACLineSegment_collapse" aria-expanded="true" aria-controls="{{id}}_MktACLineSegment_collapse" style="margin-left: 10px;">MktACLineSegment</a></legend>
                    <div id="{{id}}_MktACLineSegment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Wires.ACLineSegment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EndAFlow'>EndAFlow: </label><div class='col-sm-8'><input id='{{id}}_EndAFlow' class='form-control' type='text'{{#EndAFlow}} value='{{EndAFlow}}'{{/EndAFlow}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EndBFlow'>EndBFlow: </label><div class='col-sm-8'><input id='{{id}}_EndBFlow' class='form-control' type='text'{{#EndBFlow}} value='{{EndBFlow}}'{{/EndBFlow}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "MktACLineSegment" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_EndAFlow").value; if ("" != temp) obj.EndAFlow = temp;
                temp = document.getElementById (id + "_EndBFlow").value; if ("" != temp) obj.EndBFlow = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EndAFlow", "0..1", "0..*", "BranchEndFlow", "MktACLineSegmentEndAFlow"],
                            ["EndBFlow", "0..1", "0..*", "BranchEndFlow", "MktACLineSegmentEndBFlow"]
                        ]
                    )
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
                var bucket = cim_data.DistributionFactorSet;
                if (null == bucket)
                   cim_data.DistributionFactorSet = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DistributionFactorSet[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DistributionFactorSet";
                base.parse_element (/<cim:DistributionFactorSet.intervalStartTime>([\s\S]*?)<\/cim:DistributionFactorSet.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:DistributionFactorSet.intervalEndTime>([\s\S]*?)<\/cim:DistributionFactorSet.intervalEndTime>/g, obj, "intervalEndTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:DistributionFactorSet.marketType>([\s\S]*?)<\/cim:DistributionFactorSet.marketType>/g, obj, "marketType", base.to_string, sub, context);
                base.parse_attributes (/<cim:DistributionFactorSet.SysLoadDistribuFactor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SysLoadDistribuFactor", sub, context);
                base.parse_attributes (/<cim:DistributionFactorSet.GenDistributionFactor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GenDistributionFactor", sub, context);
                base.parse_attributes (/<cim:DistributionFactorSet.LoadDistributionFactor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadDistributionFactor", sub, context);
                var bucket = context.parsed.DistributionFactorSet;
                if (null == bucket)
                   context.parsed.DistributionFactorSet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "DistributionFactorSet", "intervalStartTime", "intervalStartTime",  base.from_datetime, fields);
                base.export_element (obj, "DistributionFactorSet", "intervalEndTime", "intervalEndTime",  base.from_datetime, fields);
                base.export_element (obj, "DistributionFactorSet", "marketType", "marketType",  base.from_string, fields);
                base.export_attributes (obj, "DistributionFactorSet", "SysLoadDistribuFactor", "SysLoadDistribuFactor", fields);
                base.export_attributes (obj, "DistributionFactorSet", "GenDistributionFactor", "GenDistributionFactor", fields);
                base.export_attributes (obj, "DistributionFactorSet", "LoadDistributionFactor", "LoadDistributionFactor", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DistributionFactorSet_collapse" aria-expanded="true" aria-controls="DistributionFactorSet_collapse" style="margin-left: 10px;">DistributionFactorSet</a></legend>
                    <div id="DistributionFactorSet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#intervalStartTime}}<div><b>intervalStartTime</b>: {{intervalStartTime}}</div>{{/intervalStartTime}}
                    {{#intervalEndTime}}<div><b>intervalEndTime</b>: {{intervalEndTime}}</div>{{/intervalEndTime}}
                    {{#marketType}}<div><b>marketType</b>: {{marketType}}</div>{{/marketType}}
                    {{#SysLoadDistribuFactor}}<div><b>SysLoadDistribuFactor</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/SysLoadDistribuFactor}}
                    {{#GenDistributionFactor}}<div><b>GenDistributionFactor</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/GenDistributionFactor}}
                    {{#LoadDistributionFactor}}<div><b>LoadDistributionFactor</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/LoadDistributionFactor}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.SysLoadDistribuFactor) obj.SysLoadDistribuFactor_string = obj.SysLoadDistribuFactor.join ();
                if (obj.GenDistributionFactor) obj.GenDistributionFactor_string = obj.GenDistributionFactor.join ();
                if (obj.LoadDistributionFactor) obj.LoadDistributionFactor_string = obj.LoadDistributionFactor.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.SysLoadDistribuFactor_string;
                delete obj.GenDistributionFactor_string;
                delete obj.LoadDistributionFactor_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DistributionFactorSet_collapse" aria-expanded="true" aria-controls="{{id}}_DistributionFactorSet_collapse" style="margin-left: 10px;">DistributionFactorSet</a></legend>
                    <div id="{{id}}_DistributionFactorSet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_intervalStartTime'>intervalStartTime: </label><div class='col-sm-8'><input id='{{id}}_intervalStartTime' class='form-control' type='text'{{#intervalStartTime}} value='{{intervalStartTime}}'{{/intervalStartTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_intervalEndTime'>intervalEndTime: </label><div class='col-sm-8'><input id='{{id}}_intervalEndTime' class='form-control' type='text'{{#intervalEndTime}} value='{{intervalEndTime}}'{{/intervalEndTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_marketType'>marketType: </label><div class='col-sm-8'><input id='{{id}}_marketType' class='form-control' type='text'{{#marketType}} value='{{marketType}}'{{/marketType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SysLoadDistribuFactor'>SysLoadDistribuFactor: </label><div class='col-sm-8'><input id='{{id}}_SysLoadDistribuFactor' class='form-control' type='text'{{#SysLoadDistribuFactor}} value='{{SysLoadDistribuFactor}}_string'{{/SysLoadDistribuFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GenDistributionFactor'>GenDistributionFactor: </label><div class='col-sm-8'><input id='{{id}}_GenDistributionFactor' class='form-control' type='text'{{#GenDistributionFactor}} value='{{GenDistributionFactor}}_string'{{/GenDistributionFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LoadDistributionFactor'>LoadDistributionFactor: </label><div class='col-sm-8'><input id='{{id}}_LoadDistributionFactor' class='form-control' type='text'{{#LoadDistributionFactor}} value='{{LoadDistributionFactor}}_string'{{/LoadDistributionFactor}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "DistributionFactorSet" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_intervalStartTime").value; if ("" != temp) obj.intervalStartTime = temp;
                temp = document.getElementById (id + "_intervalEndTime").value; if ("" != temp) obj.intervalEndTime = temp;
                temp = document.getElementById (id + "_marketType").value; if ("" != temp) obj.marketType = temp;
                temp = document.getElementById (id + "_SysLoadDistribuFactor").value; if ("" != temp) obj.SysLoadDistribuFactor = temp.split (",");
                temp = document.getElementById (id + "_GenDistributionFactor").value; if ("" != temp) obj.GenDistributionFactor = temp.split (",");
                temp = document.getElementById (id + "_LoadDistributionFactor").value; if ("" != temp) obj.LoadDistributionFactor = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["SysLoadDistribuFactor", "0..*", "0..*", "SysLoadDistributionFactor", "DistributionFactorSet"],
                            ["GenDistributionFactor", "0..*", "0..*", "GenDistributionFactor", "DistributionFactorSet"],
                            ["LoadDistributionFactor", "0..*", "0..*", "LoadDistributionFactor", "DistributionFactorSet"]
                        ]
                    )
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
                var bucket = cim_data.TransferInterface;
                if (null == bucket)
                   cim_data.TransferInterface = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TransferInterface[obj.id];
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

                base.export_attribute (obj, "TransferInterface", "TransferInterfaceSolution", "TransferInterfaceSolution", fields);
                base.export_attribute (obj, "TransferInterface", "HostControlArea", "HostControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TransferInterface_collapse" aria-expanded="true" aria-controls="TransferInterface_collapse" style="margin-left: 10px;">TransferInterface</a></legend>
                    <div id="TransferInterface_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TransferInterface_collapse" aria-expanded="true" aria-controls="{{id}}_TransferInterface_collapse" style="margin-left: 10px;">TransferInterface</a></legend>
                    <div id="{{id}}_TransferInterface_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TransferInterfaceSolution'>TransferInterfaceSolution: </label><div class='col-sm-8'><input id='{{id}}_TransferInterfaceSolution' class='form-control' type='text'{{#TransferInterfaceSolution}} value='{{TransferInterfaceSolution}}'{{/TransferInterfaceSolution}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_HostControlArea'>HostControlArea: </label><div class='col-sm-8'><input id='{{id}}_HostControlArea' class='form-control' type='text'{{#HostControlArea}} value='{{HostControlArea}}'{{/HostControlArea}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TransferInterface" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_TransferInterfaceSolution").value; if ("" != temp) obj.TransferInterfaceSolution = temp;
                temp = document.getElementById (id + "_HostControlArea").value; if ("" != temp) obj.HostControlArea = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TransferInterfaceSolution", "1", "1", "TransferInterfaceSolution", "TransferInterface"],
                            ["HostControlArea", "0..1", "0..*", "HostControlArea", "TransferInterface"]
                        ]
                    )
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
                var bucket = cim_data.GenericConstraints;
                if (null == bucket)
                   cim_data.GenericConstraints = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GenericConstraints[obj.id];
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
                base.parse_attributes (/<cim:GenericConstraints.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
                base.parse_attributes (/<cim:GenericConstraints.TransmissionCapacity\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionCapacity", sub, context);
                var bucket = context.parsed.GenericConstraints;
                if (null == bucket)
                   context.parsed.GenericConstraints = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "GenericConstraints", "intervalEndTime", "intervalEndTime",  base.from_datetime, fields);
                base.export_element (obj, "GenericConstraints", "intervalStartTime", "intervalStartTime",  base.from_datetime, fields);
                base.export_element (obj, "GenericConstraints", "maxLimit", "maxLimit",  base.from_float, fields);
                base.export_element (obj, "GenericConstraints", "minLimit", "minLimit",  base.from_float, fields);
                base.export_attributes (obj, "GenericConstraints", "Flowgate", "Flowgate", fields);
                base.export_attributes (obj, "GenericConstraints", "TransmissionCapacity", "TransmissionCapacity", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#GenericConstraints_collapse" aria-expanded="true" aria-controls="GenericConstraints_collapse" style="margin-left: 10px;">GenericConstraints</a></legend>
                    <div id="GenericConstraints_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#intervalEndTime}}<div><b>intervalEndTime</b>: {{intervalEndTime}}</div>{{/intervalEndTime}}
                    {{#intervalStartTime}}<div><b>intervalStartTime</b>: {{intervalStartTime}}</div>{{/intervalStartTime}}
                    {{#maxLimit}}<div><b>maxLimit</b>: {{maxLimit}}</div>{{/maxLimit}}
                    {{#minLimit}}<div><b>minLimit</b>: {{minLimit}}</div>{{/minLimit}}
                    {{#Flowgate}}<div><b>Flowgate</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Flowgate}}
                    {{#TransmissionCapacity}}<div><b>TransmissionCapacity</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/TransmissionCapacity}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Flowgate) obj.Flowgate_string = obj.Flowgate.join ();
                if (obj.TransmissionCapacity) obj.TransmissionCapacity_string = obj.TransmissionCapacity.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Flowgate_string;
                delete obj.TransmissionCapacity_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_GenericConstraints_collapse" aria-expanded="true" aria-controls="{{id}}_GenericConstraints_collapse" style="margin-left: 10px;">GenericConstraints</a></legend>
                    <div id="{{id}}_GenericConstraints_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_intervalEndTime'>intervalEndTime: </label><div class='col-sm-8'><input id='{{id}}_intervalEndTime' class='form-control' type='text'{{#intervalEndTime}} value='{{intervalEndTime}}'{{/intervalEndTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_intervalStartTime'>intervalStartTime: </label><div class='col-sm-8'><input id='{{id}}_intervalStartTime' class='form-control' type='text'{{#intervalStartTime}} value='{{intervalStartTime}}'{{/intervalStartTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxLimit'>maxLimit: </label><div class='col-sm-8'><input id='{{id}}_maxLimit' class='form-control' type='text'{{#maxLimit}} value='{{maxLimit}}'{{/maxLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minLimit'>minLimit: </label><div class='col-sm-8'><input id='{{id}}_minLimit' class='form-control' type='text'{{#minLimit}} value='{{minLimit}}'{{/minLimit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GenericConstraints" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_intervalEndTime").value; if ("" != temp) obj.intervalEndTime = temp;
                temp = document.getElementById (id + "_intervalStartTime").value; if ("" != temp) obj.intervalStartTime = temp;
                temp = document.getElementById (id + "_maxLimit").value; if ("" != temp) obj.maxLimit = temp;
                temp = document.getElementById (id + "_minLimit").value; if ("" != temp) obj.minLimit = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Flowgate", "0..*", "0..1", "Flowgate", "GenericConstraints"],
                            ["TransmissionCapacity", "0..*", "0..1", "TransmissionCapacity", "GenericConstraints"]
                        ]
                    )
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
                var bucket = cim_data.TransmissionInterfaceRightEntitlement;
                if (null == bucket)
                   cim_data.TransmissionInterfaceRightEntitlement = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TransmissionInterfaceRightEntitlement[obj.id];
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

                base.export_element (obj, "TransmissionInterfaceRightEntitlement", "entitlement", "entitlement",  base.from_float, fields);
                base.export_element (obj, "TransmissionInterfaceRightEntitlement", "POD", "POD",  base.from_string, fields);
                base.export_element (obj, "TransmissionInterfaceRightEntitlement", "POR", "POR",  base.from_string, fields);
                base.export_element (obj, "TransmissionInterfaceRightEntitlement", "startOperatingDate", "startOperatingDate",  base.from_datetime, fields);
                base.export_attribute (obj, "TransmissionInterfaceRightEntitlement", "Flowgate", "Flowgate", fields);
                base.export_attribute (obj, "TransmissionInterfaceRightEntitlement", "ContractRight", "ContractRight", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TransmissionInterfaceRightEntitlement_collapse" aria-expanded="true" aria-controls="TransmissionInterfaceRightEntitlement_collapse" style="margin-left: 10px;">TransmissionInterfaceRightEntitlement</a></legend>
                    <div id="TransmissionInterfaceRightEntitlement_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TransmissionInterfaceRightEntitlement_collapse" aria-expanded="true" aria-controls="{{id}}_TransmissionInterfaceRightEntitlement_collapse" style="margin-left: 10px;">TransmissionInterfaceRightEntitlement</a></legend>
                    <div id="{{id}}_TransmissionInterfaceRightEntitlement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_entitlement'>entitlement: </label><div class='col-sm-8'><input id='{{id}}_entitlement' class='form-control' type='text'{{#entitlement}} value='{{entitlement}}'{{/entitlement}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_POD'>POD: </label><div class='col-sm-8'><input id='{{id}}_POD' class='form-control' type='text'{{#POD}} value='{{POD}}'{{/POD}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_POR'>POR: </label><div class='col-sm-8'><input id='{{id}}_POR' class='form-control' type='text'{{#POR}} value='{{POR}}'{{/POR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_startOperatingDate'>startOperatingDate: </label><div class='col-sm-8'><input id='{{id}}_startOperatingDate' class='form-control' type='text'{{#startOperatingDate}} value='{{startOperatingDate}}'{{/startOperatingDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Flowgate'>Flowgate: </label><div class='col-sm-8'><input id='{{id}}_Flowgate' class='form-control' type='text'{{#Flowgate}} value='{{Flowgate}}'{{/Flowgate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ContractRight'>ContractRight: </label><div class='col-sm-8'><input id='{{id}}_ContractRight' class='form-control' type='text'{{#ContractRight}} value='{{ContractRight}}'{{/ContractRight}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TransmissionInterfaceRightEntitlement" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_entitlement").value; if ("" != temp) obj.entitlement = temp;
                temp = document.getElementById (id + "_POD").value; if ("" != temp) obj.POD = temp;
                temp = document.getElementById (id + "_POR").value; if ("" != temp) obj.POR = temp;
                temp = document.getElementById (id + "_startOperatingDate").value; if ("" != temp) obj.startOperatingDate = temp;
                temp = document.getElementById (id + "_Flowgate").value; if ("" != temp) obj.Flowgate = temp;
                temp = document.getElementById (id + "_ContractRight").value; if ("" != temp) obj.ContractRight = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Flowgate", "0..1", "0..*", "Flowgate", "TranmissionRightEntitlement"],
                            ["ContractRight", "1", "0..*", "ContractRight", "TransmissionInterfaceEntitlement"]
                        ]
                    )
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
                var bucket = cim_data.ControlAreaSolutionData;
                if (null == bucket)
                   cim_data.ControlAreaSolutionData = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ControlAreaSolutionData[obj.id];
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

                base.export_element (obj, "ControlAreaSolutionData", "solvedLosses", "solvedLosses",  base.from_float, fields);
                base.export_element (obj, "ControlAreaSolutionData", "solvedInterchange", "solvedInterchange",  base.from_float, fields);
                base.export_attribute (obj, "ControlAreaSolutionData", "MktControlArea", "MktControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ControlAreaSolutionData_collapse" aria-expanded="true" aria-controls="ControlAreaSolutionData_collapse" style="margin-left: 10px;">ControlAreaSolutionData</a></legend>
                    <div id="ControlAreaSolutionData_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ControlAreaSolutionData_collapse" aria-expanded="true" aria-controls="{{id}}_ControlAreaSolutionData_collapse" style="margin-left: 10px;">ControlAreaSolutionData</a></legend>
                    <div id="{{id}}_ControlAreaSolutionData_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_solvedLosses'>solvedLosses: </label><div class='col-sm-8'><input id='{{id}}_solvedLosses' class='form-control' type='text'{{#solvedLosses}} value='{{solvedLosses}}'{{/solvedLosses}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_solvedInterchange'>solvedInterchange: </label><div class='col-sm-8'><input id='{{id}}_solvedInterchange' class='form-control' type='text'{{#solvedInterchange}} value='{{solvedInterchange}}'{{/solvedInterchange}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MktControlArea'>MktControlArea: </label><div class='col-sm-8'><input id='{{id}}_MktControlArea' class='form-control' type='text'{{#MktControlArea}} value='{{MktControlArea}}'{{/MktControlArea}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ControlAreaSolutionData" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_solvedLosses").value; if ("" != temp) obj.solvedLosses = temp;
                temp = document.getElementById (id + "_solvedInterchange").value; if ("" != temp) obj.solvedInterchange = temp;
                temp = document.getElementById (id + "_MktControlArea").value; if ("" != temp) obj.MktControlArea = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MktControlArea", "0..1", "0..*", "MktControlArea", "ControlAreaSolutionData"]
                        ]
                    )
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
                var bucket = cim_data.InterchangeSchedule;
                if (null == bucket)
                   cim_data.InterchangeSchedule = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.InterchangeSchedule[obj.id];
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
                base.parse_attributes (/<cim:InterchangeSchedule.InterchangeETCData\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InterchangeETCData", sub, context);
                var bucket = context.parsed.InterchangeSchedule;
                if (null == bucket)
                   context.parsed.InterchangeSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "InterchangeSchedule", "checkOutType", "checkOutType",  base.from_string, fields);
                base.export_element (obj, "InterchangeSchedule", "directionType", "directionType",  base.from_string, fields);
                base.export_element (obj, "InterchangeSchedule", "energyType", "energyType",  base.from_string, fields);
                base.export_element (obj, "InterchangeSchedule", "intervalLength", "intervalLength",  base.from_string, fields);
                base.export_element (obj, "InterchangeSchedule", "marketType", "marketType",  base.from_string, fields);
                base.export_element (obj, "InterchangeSchedule", "operatingDate", "operatingDate",  base.from_datetime, fields);
                base.export_element (obj, "InterchangeSchedule", "outOfMarketType", "outOfMarketType",  base.from_boolean, fields);
                base.export_element (obj, "InterchangeSchedule", "scheduleType", "scheduleType",  base.from_string, fields);
                base.export_element (obj, "InterchangeSchedule", "wcrID", "wcrID",  base.from_string, fields);
                base.export_attribute (obj, "InterchangeSchedule", "RegisteredInterTie", "RegisteredInterTie", fields);
                base.export_attribute (obj, "InterchangeSchedule", "InterTie", "InterTie", fields);
                base.export_attributes (obj, "InterchangeSchedule", "InterchangeETCData", "InterchangeETCData", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#InterchangeSchedule_collapse" aria-expanded="true" aria-controls="InterchangeSchedule_collapse" style="margin-left: 10px;">InterchangeSchedule</a></legend>
                    <div id="InterchangeSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    {{#InterchangeETCData}}<div><b>InterchangeETCData</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/InterchangeETCData}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.InterchangeETCData) obj.InterchangeETCData_string = obj.InterchangeETCData.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.InterchangeETCData_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_InterchangeSchedule_collapse" aria-expanded="true" aria-controls="{{id}}_InterchangeSchedule_collapse" style="margin-left: 10px;">InterchangeSchedule</a></legend>
                    <div id="{{id}}_InterchangeSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_checkOutType'>checkOutType: </label><div class='col-sm-8'><input id='{{id}}_checkOutType' class='form-control' type='text'{{#checkOutType}} value='{{checkOutType}}'{{/checkOutType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_directionType'>directionType: </label><div class='col-sm-8'><input id='{{id}}_directionType' class='form-control' type='text'{{#directionType}} value='{{directionType}}'{{/directionType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_energyType'>energyType: </label><div class='col-sm-8'><input id='{{id}}_energyType' class='form-control' type='text'{{#energyType}} value='{{energyType}}'{{/energyType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_intervalLength'>intervalLength: </label><div class='col-sm-8'><input id='{{id}}_intervalLength' class='form-control' type='text'{{#intervalLength}} value='{{intervalLength}}'{{/intervalLength}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_marketType'>marketType: </label><div class='col-sm-8'><input id='{{id}}_marketType' class='form-control' type='text'{{#marketType}} value='{{marketType}}'{{/marketType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_operatingDate'>operatingDate: </label><div class='col-sm-8'><input id='{{id}}_operatingDate' class='form-control' type='text'{{#operatingDate}} value='{{operatingDate}}'{{/operatingDate}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_outOfMarketType'>outOfMarketType: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_outOfMarketType' class='form-check-input' type='checkbox'{{#outOfMarketType}} checked{{/outOfMarketType}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_scheduleType'>scheduleType: </label><div class='col-sm-8'><input id='{{id}}_scheduleType' class='form-control' type='text'{{#scheduleType}} value='{{scheduleType}}'{{/scheduleType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_wcrID'>wcrID: </label><div class='col-sm-8'><input id='{{id}}_wcrID' class='form-control' type='text'{{#wcrID}} value='{{wcrID}}'{{/wcrID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredInterTie'>RegisteredInterTie: </label><div class='col-sm-8'><input id='{{id}}_RegisteredInterTie' class='form-control' type='text'{{#RegisteredInterTie}} value='{{RegisteredInterTie}}'{{/RegisteredInterTie}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_InterTie'>InterTie: </label><div class='col-sm-8'><input id='{{id}}_InterTie' class='form-control' type='text'{{#InterTie}} value='{{InterTie}}'{{/InterTie}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "InterchangeSchedule" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_checkOutType").value; if ("" != temp) obj.checkOutType = temp;
                temp = document.getElementById (id + "_directionType").value; if ("" != temp) obj.directionType = temp;
                temp = document.getElementById (id + "_energyType").value; if ("" != temp) obj.energyType = temp;
                temp = document.getElementById (id + "_intervalLength").value; if ("" != temp) obj.intervalLength = temp;
                temp = document.getElementById (id + "_marketType").value; if ("" != temp) obj.marketType = temp;
                temp = document.getElementById (id + "_operatingDate").value; if ("" != temp) obj.operatingDate = temp;
                temp = document.getElementById (id + "_outOfMarketType").checked; if (temp) obj.outOfMarketType = true;
                temp = document.getElementById (id + "_scheduleType").value; if ("" != temp) obj.scheduleType = temp;
                temp = document.getElementById (id + "_wcrID").value; if ("" != temp) obj.wcrID = temp;
                temp = document.getElementById (id + "_RegisteredInterTie").value; if ("" != temp) obj.RegisteredInterTie = temp;
                temp = document.getElementById (id + "_InterTie").value; if ("" != temp) obj.InterTie = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegisteredInterTie", "0..1", "0..*", "RegisteredInterTie", "InterchangeSchedule"],
                            ["InterTie", "0..1", "0..*", "SchedulingPoint", "InterchangeSchedule"],
                            ["InterchangeETCData", "0..*", "0..1", "InterchangeETCData", "InterchangeSchedule"]
                        ]
                    )
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
                var bucket = cim_data.EnergyPriceIndex;
                if (null == bucket)
                   cim_data.EnergyPriceIndex = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EnergyPriceIndex[obj.id];
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

                base.export_element (obj, "EnergyPriceIndex", "lastModified", "lastModified",  base.from_datetime, fields);
                base.export_element (obj, "EnergyPriceIndex", "startEffectiveDate", "startEffectiveDate",  base.from_datetime, fields);
                base.export_element (obj, "EnergyPriceIndex", "endEffectiveDate", "endEffectiveDate",  base.from_datetime, fields);
                base.export_element (obj, "EnergyPriceIndex", "energyPriceIndex", "energyPriceIndex",  base.from_float, fields);
                base.export_element (obj, "EnergyPriceIndex", "energyPriceIndexType", "energyPriceIndexType",  base.from_string, fields);
                base.export_attribute (obj, "EnergyPriceIndex", "RegisteredGenerator", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EnergyPriceIndex_collapse" aria-expanded="true" aria-controls="EnergyPriceIndex_collapse" style="margin-left: 10px;">EnergyPriceIndex</a></legend>
                    <div id="EnergyPriceIndex_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EnergyPriceIndex_collapse" aria-expanded="true" aria-controls="{{id}}_EnergyPriceIndex_collapse" style="margin-left: 10px;">EnergyPriceIndex</a></legend>
                    <div id="{{id}}_EnergyPriceIndex_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lastModified'>lastModified: </label><div class='col-sm-8'><input id='{{id}}_lastModified' class='form-control' type='text'{{#lastModified}} value='{{lastModified}}'{{/lastModified}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_startEffectiveDate'>startEffectiveDate: </label><div class='col-sm-8'><input id='{{id}}_startEffectiveDate' class='form-control' type='text'{{#startEffectiveDate}} value='{{startEffectiveDate}}'{{/startEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_endEffectiveDate'>endEffectiveDate: </label><div class='col-sm-8'><input id='{{id}}_endEffectiveDate' class='form-control' type='text'{{#endEffectiveDate}} value='{{endEffectiveDate}}'{{/endEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_energyPriceIndex'>energyPriceIndex: </label><div class='col-sm-8'><input id='{{id}}_energyPriceIndex' class='form-control' type='text'{{#energyPriceIndex}} value='{{energyPriceIndex}}'{{/energyPriceIndex}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_energyPriceIndexType'>energyPriceIndexType: </label><div class='col-sm-8'><input id='{{id}}_energyPriceIndexType' class='form-control' type='text'{{#energyPriceIndexType}} value='{{energyPriceIndexType}}'{{/energyPriceIndexType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredGenerator'>RegisteredGenerator: </label><div class='col-sm-8'><input id='{{id}}_RegisteredGenerator' class='form-control' type='text'{{#RegisteredGenerator}} value='{{RegisteredGenerator}}'{{/RegisteredGenerator}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "EnergyPriceIndex" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_lastModified").value; if ("" != temp) obj.lastModified = temp;
                temp = document.getElementById (id + "_startEffectiveDate").value; if ("" != temp) obj.startEffectiveDate = temp;
                temp = document.getElementById (id + "_endEffectiveDate").value; if ("" != temp) obj.endEffectiveDate = temp;
                temp = document.getElementById (id + "_energyPriceIndex").value; if ("" != temp) obj.energyPriceIndex = temp;
                temp = document.getElementById (id + "_energyPriceIndexType").value; if ("" != temp) obj.energyPriceIndexType = temp;
                temp = document.getElementById (id + "_RegisteredGenerator").value; if ("" != temp) obj.RegisteredGenerator = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegisteredGenerator", "1", "1", "RegisteredGenerator", "EnergyPriceIndex"]
                        ]
                    )
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
                var bucket = cim_data.LossSensitivity;
                if (null == bucket)
                   cim_data.LossSensitivity = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LossSensitivity[obj.id];
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

                base.export_element (obj, "LossSensitivity", "lossFactor", "lossFactor",  base.from_float, fields);
                base.export_attribute (obj, "LossSensitivity", "MktConnectivityNode", "MktConnectivityNode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#LossSensitivity_collapse" aria-expanded="true" aria-controls="LossSensitivity_collapse" style="margin-left: 10px;">LossSensitivity</a></legend>
                    <div id="LossSensitivity_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_LossSensitivity_collapse" aria-expanded="true" aria-controls="{{id}}_LossSensitivity_collapse" style="margin-left: 10px;">LossSensitivity</a></legend>
                    <div id="{{id}}_LossSensitivity_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lossFactor'>lossFactor: </label><div class='col-sm-8'><input id='{{id}}_lossFactor' class='form-control' type='text'{{#lossFactor}} value='{{lossFactor}}'{{/lossFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MktConnectivityNode'>MktConnectivityNode: </label><div class='col-sm-8'><input id='{{id}}_MktConnectivityNode' class='form-control' type='text'{{#MktConnectivityNode}} value='{{MktConnectivityNode}}'{{/MktConnectivityNode}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "LossSensitivity" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_lossFactor").value; if ("" != temp) obj.lossFactor = temp;
                temp = document.getElementById (id + "_MktConnectivityNode").value; if ("" != temp) obj.MktConnectivityNode = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MktConnectivityNode", "1", "0..*", "MktConnectivityNode", "LossPenaltyFactor"]
                        ]
                    )
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
                var bucket = cim_data.AnalogMeasurementValueQuality;
                if (null == bucket)
                   cim_data.AnalogMeasurementValueQuality = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AnalogMeasurementValueQuality[obj.id];
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

                base.export_element (obj, "AnalogMeasurementValueQuality", "scadaQualityCode", "scadaQualityCode",  base.from_string, fields);
                base.export_attribute (obj, "AnalogMeasurementValueQuality", "MktAnalogValue", "MktAnalogValue", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AnalogMeasurementValueQuality_collapse" aria-expanded="true" aria-controls="AnalogMeasurementValueQuality_collapse" style="margin-left: 10px;">AnalogMeasurementValueQuality</a></legend>
                    <div id="AnalogMeasurementValueQuality_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AnalogMeasurementValueQuality_collapse" aria-expanded="true" aria-controls="{{id}}_AnalogMeasurementValueQuality_collapse" style="margin-left: 10px;">AnalogMeasurementValueQuality</a></legend>
                    <div id="{{id}}_AnalogMeasurementValueQuality_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Meas.MeasurementValueQuality.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_scadaQualityCode'>scadaQualityCode: </label><div class='col-sm-8'><input id='{{id}}_scadaQualityCode' class='form-control' type='text'{{#scadaQualityCode}} value='{{scadaQualityCode}}'{{/scadaQualityCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MktAnalogValue'>MktAnalogValue: </label><div class='col-sm-8'><input id='{{id}}_MktAnalogValue' class='form-control' type='text'{{#MktAnalogValue}} value='{{MktAnalogValue}}'{{/MktAnalogValue}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "AnalogMeasurementValueQuality" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_scadaQualityCode").value; if ("" != temp) obj.scadaQualityCode = temp;
                temp = document.getElementById (id + "_MktAnalogValue").value; if ("" != temp) obj.MktAnalogValue = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MktAnalogValue", "1", "0..*", "MktAnalogValue", "AnalogMeasurementValueQuality"]
                        ]
                    )
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
                var bucket = cim_data.DefaultConstraintLimit;
                if (null == bucket)
                   cim_data.DefaultConstraintLimit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DefaultConstraintLimit[obj.id];
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

                base.export_attribute (obj, "DefaultConstraintLimit", "SecurityConstraintSum", "SecurityConstraintSum", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DefaultConstraintLimit_collapse" aria-expanded="true" aria-controls="DefaultConstraintLimit_collapse" style="margin-left: 10px;">DefaultConstraintLimit</a></legend>
                    <div id="DefaultConstraintLimit_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DefaultConstraintLimit_collapse" aria-expanded="true" aria-controls="{{id}}_DefaultConstraintLimit_collapse" style="margin-left: 10px;">DefaultConstraintLimit</a></legend>
                    <div id="{{id}}_DefaultConstraintLimit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SecurityConstraintSum'>SecurityConstraintSum: </label><div class='col-sm-8'><input id='{{id}}_SecurityConstraintSum' class='form-control' type='text'{{#SecurityConstraintSum}} value='{{SecurityConstraintSum}}'{{/SecurityConstraintSum}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "DefaultConstraintLimit" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_SecurityConstraintSum").value; if ("" != temp) obj.SecurityConstraintSum = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["SecurityConstraintSum", "1", "0..1", "SecurityConstraintSum", "DefaultConstraintLimit"]
                        ]
                    )
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
                var bucket = cim_data.MktControlArea;
                if (null == bucket)
                   cim_data.MktControlArea = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MktControlArea[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ControlArea.ControlArea.prototype.parse.call (this, context, sub);
                obj.cls = "MktControlArea";
                base.parse_attributes (/<cim:MktControlArea.ControlAreaSolutionData\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ControlAreaSolutionData", sub, context);
                var bucket = context.parsed.MktControlArea;
                if (null == bucket)
                   context.parsed.MktControlArea = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ControlArea.ControlArea.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "MktControlArea", "ControlAreaSolutionData", "ControlAreaSolutionData", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MktControlArea_collapse" aria-expanded="true" aria-controls="MktControlArea_collapse" style="margin-left: 10px;">MktControlArea</a></legend>
                    <div id="MktControlArea_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ControlArea.ControlArea.prototype.template.call (this) +
                    `
                    {{#ControlAreaSolutionData}}<div><b>ControlAreaSolutionData</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ControlAreaSolutionData}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ControlAreaSolutionData) obj.ControlAreaSolutionData_string = obj.ControlAreaSolutionData.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ControlAreaSolutionData_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MktControlArea_collapse" aria-expanded="true" aria-controls="{{id}}_MktControlArea_collapse" style="margin-left: 10px;">MktControlArea</a></legend>
                    <div id="{{id}}_MktControlArea_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ControlArea.ControlArea.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "MktControlArea" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ControlAreaSolutionData", "0..*", "0..1", "ControlAreaSolutionData", "MktControlArea"]
                        ]
                    )
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
                var bucket = cim_data.NodeConstraintTerm;
                if (null == bucket)
                   cim_data.NodeConstraintTerm = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.NodeConstraintTerm[obj.id];
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

                base.export_attribute (obj, "NodeConstraintTerm", "MktConnectivityNode", "MktConnectivityNode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#NodeConstraintTerm_collapse" aria-expanded="true" aria-controls="NodeConstraintTerm_collapse" style="margin-left: 10px;">NodeConstraintTerm</a></legend>
                    <div id="NodeConstraintTerm_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_NodeConstraintTerm_collapse" aria-expanded="true" aria-controls="{{id}}_NodeConstraintTerm_collapse" style="margin-left: 10px;">NodeConstraintTerm</a></legend>
                    <div id="{{id}}_NodeConstraintTerm_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ConstraintTerm.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MktConnectivityNode'>MktConnectivityNode: </label><div class='col-sm-8'><input id='{{id}}_MktConnectivityNode' class='form-control' type='text'{{#MktConnectivityNode}} value='{{MktConnectivityNode}}'{{/MktConnectivityNode}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "NodeConstraintTerm" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_MktConnectivityNode").value; if ("" != temp) obj.MktConnectivityNode = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MktConnectivityNode", "1", "0..*", "MktConnectivityNode", "NodeConstraintTerm"]
                        ]
                    )
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
                var bucket = cim_data.TerminalConstraintTerm;
                if (null == bucket)
                   cim_data.TerminalConstraintTerm = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TerminalConstraintTerm[obj.id];
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

                base.export_attribute (obj, "TerminalConstraintTerm", "MktTerminal", "MktTerminal", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TerminalConstraintTerm_collapse" aria-expanded="true" aria-controls="TerminalConstraintTerm_collapse" style="margin-left: 10px;">TerminalConstraintTerm</a></legend>
                    <div id="TerminalConstraintTerm_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TerminalConstraintTerm_collapse" aria-expanded="true" aria-controls="{{id}}_TerminalConstraintTerm_collapse" style="margin-left: 10px;">TerminalConstraintTerm</a></legend>
                    <div id="{{id}}_TerminalConstraintTerm_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ConstraintTerm.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MktTerminal'>MktTerminal: </label><div class='col-sm-8'><input id='{{id}}_MktTerminal' class='form-control' type='text'{{#MktTerminal}} value='{{MktTerminal}}'{{/MktTerminal}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TerminalConstraintTerm" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_MktTerminal").value; if ("" != temp) obj.MktTerminal = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MktTerminal", "1", "0..*", "MktTerminal", "TerminalConstraintTerm"]
                        ]
                    )
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
                var bucket = cim_data.EnergyProfile;
                if (null == bucket)
                   cim_data.EnergyProfile = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EnergyProfile[obj.id];
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

                base.export_attribute (obj, "EnergyProfile", "EnergyTransaction", "EnergyTransaction", fields);
                base.export_attribute (obj, "EnergyProfile", "TransactionBid", "TransactionBid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EnergyProfile_collapse" aria-expanded="true" aria-controls="EnergyProfile_collapse" style="margin-left: 10px;">EnergyProfile</a></legend>
                    <div id="EnergyProfile_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EnergyProfile_collapse" aria-expanded="true" aria-controls="{{id}}_EnergyProfile_collapse" style="margin-left: 10px;">EnergyProfile</a></legend>
                    <div id="{{id}}_EnergyProfile_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Profile.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnergyTransaction'>EnergyTransaction: </label><div class='col-sm-8'><input id='{{id}}_EnergyTransaction' class='form-control' type='text'{{#EnergyTransaction}} value='{{EnergyTransaction}}'{{/EnergyTransaction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TransactionBid'>TransactionBid: </label><div class='col-sm-8'><input id='{{id}}_TransactionBid' class='form-control' type='text'{{#TransactionBid}} value='{{TransactionBid}}'{{/TransactionBid}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "EnergyProfile" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_EnergyTransaction").value; if ("" != temp) obj.EnergyTransaction = temp;
                temp = document.getElementById (id + "_TransactionBid").value; if ("" != temp) obj.TransactionBid = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EnergyTransaction", "1", "1..*", "EnergyTransaction", "EnergyProfiles"],
                            ["TransactionBid", "1", "1..*", "TransactionBid", "EnergyProfiles"]
                        ]
                    )
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