define
(
    ["model/base", "model/Metering"],
    /**
     * This package is an extension of the Metering package and contains the information classes that support specialised applications such as demand-side management using load control equipment.
     *
     * These classes are generally associated with the point where a service is delivered to the customer.
     *
     */
    function (base, Metering)
    {

        /**
         * Details of remote connect and disconnect function.
         *
         */
        class RemoteConnectDisconnectInfo extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RemoteConnectDisconnectInfo;
                if (null == bucket)
                   cim_data.RemoteConnectDisconnectInfo = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RemoteConnectDisconnectInfo[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "RemoteConnectDisconnectInfo";
                base.parse_element (/<cim:RemoteConnectDisconnectInfo.armedTimeout>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.armedTimeout>/g, obj, "armedTimeout", base.to_string, sub, context);
                base.parse_element (/<cim:RemoteConnectDisconnectInfo.customerVoltageLimit>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.customerVoltageLimit>/g, obj, "customerVoltageLimit", base.to_string, sub, context);
                base.parse_element (/<cim:RemoteConnectDisconnectInfo.energyLimit>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.energyLimit>/g, obj, "energyLimit", base.to_string, sub, context);
                base.parse_element (/<cim:RemoteConnectDisconnectInfo.energyUsageStartDateTime>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.energyUsageStartDateTime>/g, obj, "energyUsageStartDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:RemoteConnectDisconnectInfo.energyUsageWarning>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.energyUsageWarning>/g, obj, "energyUsageWarning", base.to_string, sub, context);
                base.parse_element (/<cim:RemoteConnectDisconnectInfo.isArmConnect>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.isArmConnect>/g, obj, "isArmConnect", base.to_boolean, sub, context);
                base.parse_element (/<cim:RemoteConnectDisconnectInfo.isArmDisconnect>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.isArmDisconnect>/g, obj, "isArmDisconnect", base.to_boolean, sub, context);
                base.parse_element (/<cim:RemoteConnectDisconnectInfo.isEnergyLimiting>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.isEnergyLimiting>/g, obj, "isEnergyLimiting", base.to_boolean, sub, context);
                base.parse_element (/<cim:RemoteConnectDisconnectInfo.needsPowerLimitCheck>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.needsPowerLimitCheck>/g, obj, "needsPowerLimitCheck", base.to_boolean, sub, context);
                base.parse_element (/<cim:RemoteConnectDisconnectInfo.needsVoltageLimitCheck>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.needsVoltageLimitCheck>/g, obj, "needsVoltageLimitCheck", base.to_boolean, sub, context);
                base.parse_element (/<cim:RemoteConnectDisconnectInfo.powerLimit>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.powerLimit>/g, obj, "powerLimit", base.to_string, sub, context);
                base.parse_element (/<cim:RemoteConnectDisconnectInfo.usePushbutton>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.usePushbutton>/g, obj, "usePushbutton", base.to_boolean, sub, context);
                var bucket = context.parsed.RemoteConnectDisconnectInfo;
                if (null == bucket)
                   context.parsed.RemoteConnectDisconnectInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "RemoteConnectDisconnectInfo", "armedTimeout", base.from_string, fields);
                base.export_element (obj, "RemoteConnectDisconnectInfo", "customerVoltageLimit", base.from_string, fields);
                base.export_element (obj, "RemoteConnectDisconnectInfo", "energyLimit", base.from_string, fields);
                base.export_element (obj, "RemoteConnectDisconnectInfo", "energyUsageStartDateTime", base.from_datetime, fields);
                base.export_element (obj, "RemoteConnectDisconnectInfo", "energyUsageWarning", base.from_string, fields);
                base.export_element (obj, "RemoteConnectDisconnectInfo", "isArmConnect", base.from_boolean, fields);
                base.export_element (obj, "RemoteConnectDisconnectInfo", "isArmDisconnect", base.from_boolean, fields);
                base.export_element (obj, "RemoteConnectDisconnectInfo", "isEnergyLimiting", base.from_boolean, fields);
                base.export_element (obj, "RemoteConnectDisconnectInfo", "needsPowerLimitCheck", base.from_boolean, fields);
                base.export_element (obj, "RemoteConnectDisconnectInfo", "needsVoltageLimitCheck", base.from_boolean, fields);
                base.export_element (obj, "RemoteConnectDisconnectInfo", "powerLimit", base.from_string, fields);
                base.export_element (obj, "RemoteConnectDisconnectInfo", "usePushbutton", base.from_boolean, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RemoteConnectDisconnectInfo_collapse" aria-expanded="true" aria-controls="RemoteConnectDisconnectInfo_collapse" style="margin-left: 10px;">RemoteConnectDisconnectInfo</a></legend>
                    <div id="RemoteConnectDisconnectInfo_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#armedTimeout}}<div><b>armedTimeout</b>: {{armedTimeout}}</div>{{/armedTimeout}}
                    {{#customerVoltageLimit}}<div><b>customerVoltageLimit</b>: {{customerVoltageLimit}}</div>{{/customerVoltageLimit}}
                    {{#energyLimit}}<div><b>energyLimit</b>: {{energyLimit}}</div>{{/energyLimit}}
                    {{#energyUsageStartDateTime}}<div><b>energyUsageStartDateTime</b>: {{energyUsageStartDateTime}}</div>{{/energyUsageStartDateTime}}
                    {{#energyUsageWarning}}<div><b>energyUsageWarning</b>: {{energyUsageWarning}}</div>{{/energyUsageWarning}}
                    {{#isArmConnect}}<div><b>isArmConnect</b>: {{isArmConnect}}</div>{{/isArmConnect}}
                    {{#isArmDisconnect}}<div><b>isArmDisconnect</b>: {{isArmDisconnect}}</div>{{/isArmDisconnect}}
                    {{#isEnergyLimiting}}<div><b>isEnergyLimiting</b>: {{isEnergyLimiting}}</div>{{/isEnergyLimiting}}
                    {{#needsPowerLimitCheck}}<div><b>needsPowerLimitCheck</b>: {{needsPowerLimitCheck}}</div>{{/needsPowerLimitCheck}}
                    {{#needsVoltageLimitCheck}}<div><b>needsVoltageLimitCheck</b>: {{needsVoltageLimitCheck}}</div>{{/needsVoltageLimitCheck}}
                    {{#powerLimit}}<div><b>powerLimit</b>: {{powerLimit}}</div>{{/powerLimit}}
                    {{#usePushbutton}}<div><b>usePushbutton</b>: {{usePushbutton}}</div>{{/usePushbutton}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RemoteConnectDisconnectInfo_collapse" aria-expanded="true" aria-controls="RemoteConnectDisconnectInfo_collapse" style="margin-left: 10px;">RemoteConnectDisconnectInfo</a></legend>
                    <div id="RemoteConnectDisconnectInfo_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='armedTimeout'>armedTimeout: </label><div class='col-sm-8'><input id='armedTimeout' class='form-control' type='text'{{#armedTimeout}} value='{{armedTimeout}}'{{/armedTimeout}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='customerVoltageLimit'>customerVoltageLimit: </label><div class='col-sm-8'><input id='customerVoltageLimit' class='form-control' type='text'{{#customerVoltageLimit}} value='{{customerVoltageLimit}}'{{/customerVoltageLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='energyLimit'>energyLimit: </label><div class='col-sm-8'><input id='energyLimit' class='form-control' type='text'{{#energyLimit}} value='{{energyLimit}}'{{/energyLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='energyUsageStartDateTime'>energyUsageStartDateTime: </label><div class='col-sm-8'><input id='energyUsageStartDateTime' class='form-control' type='text'{{#energyUsageStartDateTime}} value='{{energyUsageStartDateTime}}'{{/energyUsageStartDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='energyUsageWarning'>energyUsageWarning: </label><div class='col-sm-8'><input id='energyUsageWarning' class='form-control' type='text'{{#energyUsageWarning}} value='{{energyUsageWarning}}'{{/energyUsageWarning}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isArmConnect'>isArmConnect: </label><div class='col-sm-8'><input id='isArmConnect' class='form-check-input' type='checkbox'{{#isArmConnect}} checked{{/isArmConnect}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isArmDisconnect'>isArmDisconnect: </label><div class='col-sm-8'><input id='isArmDisconnect' class='form-check-input' type='checkbox'{{#isArmDisconnect}} checked{{/isArmDisconnect}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isEnergyLimiting'>isEnergyLimiting: </label><div class='col-sm-8'><input id='isEnergyLimiting' class='form-check-input' type='checkbox'{{#isEnergyLimiting}} checked{{/isEnergyLimiting}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='needsPowerLimitCheck'>needsPowerLimitCheck: </label><div class='col-sm-8'><input id='needsPowerLimitCheck' class='form-check-input' type='checkbox'{{#needsPowerLimitCheck}} checked{{/needsPowerLimitCheck}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='needsVoltageLimitCheck'>needsVoltageLimitCheck: </label><div class='col-sm-8'><input id='needsVoltageLimitCheck' class='form-check-input' type='checkbox'{{#needsVoltageLimitCheck}} checked{{/needsVoltageLimitCheck}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='powerLimit'>powerLimit: </label><div class='col-sm-8'><input id='powerLimit' class='form-control' type='text'{{#powerLimit}} value='{{powerLimit}}'{{/powerLimit}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='usePushbutton'>usePushbutton: </label><div class='col-sm-8'><input id='usePushbutton' class='form-check-input' type='checkbox'{{#usePushbutton}} checked{{/usePushbutton}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }
        }

        /**
         * A function that will disconnect and reconnect the customer's load under defined conditions.
         *
         */
        class ConnectDisconnectFunction extends Metering.EndDeviceFunction
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ConnectDisconnectFunction;
                if (null == bucket)
                   cim_data.ConnectDisconnectFunction = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ConnectDisconnectFunction[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Metering.EndDeviceFunction.prototype.parse.call (this, context, sub);
                obj.cls = "ConnectDisconnectFunction";
                base.parse_element (/<cim:ConnectDisconnectFunction.eventCount>([\s\S]*?)<\/cim:ConnectDisconnectFunction.eventCount>/g, obj, "eventCount", base.to_string, sub, context);
                base.parse_element (/<cim:ConnectDisconnectFunction.isConnected>([\s\S]*?)<\/cim:ConnectDisconnectFunction.isConnected>/g, obj, "isConnected", base.to_boolean, sub, context);
                base.parse_element (/<cim:ConnectDisconnectFunction.isDelayedDiscon>([\s\S]*?)<\/cim:ConnectDisconnectFunction.isDelayedDiscon>/g, obj, "isDelayedDiscon", base.to_boolean, sub, context);
                base.parse_element (/<cim:ConnectDisconnectFunction.isLocalAutoDisconOp>([\s\S]*?)<\/cim:ConnectDisconnectFunction.isLocalAutoDisconOp>/g, obj, "isLocalAutoDisconOp", base.to_boolean, sub, context);
                base.parse_element (/<cim:ConnectDisconnectFunction.isLocalAutoReconOp>([\s\S]*?)<\/cim:ConnectDisconnectFunction.isLocalAutoReconOp>/g, obj, "isLocalAutoReconOp", base.to_boolean, sub, context);
                base.parse_element (/<cim:ConnectDisconnectFunction.isRemoteAutoDisconOp>([\s\S]*?)<\/cim:ConnectDisconnectFunction.isRemoteAutoDisconOp>/g, obj, "isRemoteAutoDisconOp", base.to_boolean, sub, context);
                base.parse_element (/<cim:ConnectDisconnectFunction.isRemoteAutoReconOp>([\s\S]*?)<\/cim:ConnectDisconnectFunction.isRemoteAutoReconOp>/g, obj, "isRemoteAutoReconOp", base.to_boolean, sub, context);
                base.parse_element (/<cim:ConnectDisconnectFunction.rcdInfo>([\s\S]*?)<\/cim:ConnectDisconnectFunction.rcdInfo>/g, obj, "rcdInfo", base.to_string, sub, context);
                base.parse_attributes (/<cim:ConnectDisconnectFunction.Switches\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Switches", sub, context);
                var bucket = context.parsed.ConnectDisconnectFunction;
                if (null == bucket)
                   context.parsed.ConnectDisconnectFunction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Metering.EndDeviceFunction.prototype.export.call (this, obj, false);

                base.export_element (obj, "ConnectDisconnectFunction", "eventCount", base.from_string, fields);
                base.export_element (obj, "ConnectDisconnectFunction", "isConnected", base.from_boolean, fields);
                base.export_element (obj, "ConnectDisconnectFunction", "isDelayedDiscon", base.from_boolean, fields);
                base.export_element (obj, "ConnectDisconnectFunction", "isLocalAutoDisconOp", base.from_boolean, fields);
                base.export_element (obj, "ConnectDisconnectFunction", "isLocalAutoReconOp", base.from_boolean, fields);
                base.export_element (obj, "ConnectDisconnectFunction", "isRemoteAutoDisconOp", base.from_boolean, fields);
                base.export_element (obj, "ConnectDisconnectFunction", "isRemoteAutoReconOp", base.from_boolean, fields);
                base.export_element (obj, "ConnectDisconnectFunction", "rcdInfo", base.from_string, fields);
                base.export_attribute (obj, "export_attributes", "ConnectDisconnectFunction", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ConnectDisconnectFunction_collapse" aria-expanded="true" aria-controls="ConnectDisconnectFunction_collapse" style="margin-left: 10px;">ConnectDisconnectFunction</a></legend>
                    <div id="ConnectDisconnectFunction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Metering.EndDeviceFunction.prototype.template.call (this) +
                    `
                    {{#eventCount}}<div><b>eventCount</b>: {{eventCount}}</div>{{/eventCount}}
                    {{#isConnected}}<div><b>isConnected</b>: {{isConnected}}</div>{{/isConnected}}
                    {{#isDelayedDiscon}}<div><b>isDelayedDiscon</b>: {{isDelayedDiscon}}</div>{{/isDelayedDiscon}}
                    {{#isLocalAutoDisconOp}}<div><b>isLocalAutoDisconOp</b>: {{isLocalAutoDisconOp}}</div>{{/isLocalAutoDisconOp}}
                    {{#isLocalAutoReconOp}}<div><b>isLocalAutoReconOp</b>: {{isLocalAutoReconOp}}</div>{{/isLocalAutoReconOp}}
                    {{#isRemoteAutoDisconOp}}<div><b>isRemoteAutoDisconOp</b>: {{isRemoteAutoDisconOp}}</div>{{/isRemoteAutoDisconOp}}
                    {{#isRemoteAutoReconOp}}<div><b>isRemoteAutoReconOp</b>: {{isRemoteAutoReconOp}}</div>{{/isRemoteAutoReconOp}}
                    {{#rcdInfo}}<div><b>rcdInfo</b>: {{rcdInfo}}</div>{{/rcdInfo}}
                    {{#Switches}}<div><b>Switches</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Switches}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Switches) obj.Switches_string = obj.Switches.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Switches_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ConnectDisconnectFunction_collapse" aria-expanded="true" aria-controls="ConnectDisconnectFunction_collapse" style="margin-left: 10px;">ConnectDisconnectFunction</a></legend>
                    <div id="ConnectDisconnectFunction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Metering.EndDeviceFunction.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='eventCount'>eventCount: </label><div class='col-sm-8'><input id='eventCount' class='form-control' type='text'{{#eventCount}} value='{{eventCount}}'{{/eventCount}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isConnected'>isConnected: </label><div class='col-sm-8'><input id='isConnected' class='form-check-input' type='checkbox'{{#isConnected}} checked{{/isConnected}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isDelayedDiscon'>isDelayedDiscon: </label><div class='col-sm-8'><input id='isDelayedDiscon' class='form-check-input' type='checkbox'{{#isDelayedDiscon}} checked{{/isDelayedDiscon}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isLocalAutoDisconOp'>isLocalAutoDisconOp: </label><div class='col-sm-8'><input id='isLocalAutoDisconOp' class='form-check-input' type='checkbox'{{#isLocalAutoDisconOp}} checked{{/isLocalAutoDisconOp}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isLocalAutoReconOp'>isLocalAutoReconOp: </label><div class='col-sm-8'><input id='isLocalAutoReconOp' class='form-check-input' type='checkbox'{{#isLocalAutoReconOp}} checked{{/isLocalAutoReconOp}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isRemoteAutoDisconOp'>isRemoteAutoDisconOp: </label><div class='col-sm-8'><input id='isRemoteAutoDisconOp' class='form-check-input' type='checkbox'{{#isRemoteAutoDisconOp}} checked{{/isRemoteAutoDisconOp}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isRemoteAutoReconOp'>isRemoteAutoReconOp: </label><div class='col-sm-8'><input id='isRemoteAutoReconOp' class='form-check-input' type='checkbox'{{#isRemoteAutoReconOp}} checked{{/isRemoteAutoReconOp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rcdInfo'>rcdInfo: </label><div class='col-sm-8'><input id='rcdInfo' class='form-control' type='text'{{#rcdInfo}} value='{{rcdInfo}}'{{/rcdInfo}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Switches'>Switches: </label><div class='col-sm-8'><input id='Switches' class='form-control' type='text'{{#Switches}} value='{{Switches}}_string'{{/Switches}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["Switches", "Switch", "0..*", "0..*"]
                    ]
                );
            }
        }

        return (
            {
                RemoteConnectDisconnectInfo: RemoteConnectDisconnectInfo,
                ConnectDisconnectFunction: ConnectDisconnectFunction
            }
        );
    }
);