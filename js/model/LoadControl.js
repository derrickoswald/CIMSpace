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
                let bucket = cim_data.RemoteConnectDisconnectInfo;
                if (null == bucket)
                   cim_data.RemoteConnectDisconnectInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RemoteConnectDisconnectInfo[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "RemoteConnectDisconnectInfo";
                base.parse_element (/<cim:RemoteConnectDisconnectInfo.isArmConnect>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.isArmConnect>/g, obj, "isArmConnect", base.to_boolean, sub, context);
                base.parse_element (/<cim:RemoteConnectDisconnectInfo.isArmDisconnect>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.isArmDisconnect>/g, obj, "isArmDisconnect", base.to_boolean, sub, context);
                base.parse_element (/<cim:RemoteConnectDisconnectInfo.armedTimeout>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.armedTimeout>/g, obj, "armedTimeout", base.to_string, sub, context);
                base.parse_element (/<cim:RemoteConnectDisconnectInfo.needsVoltageLimitCheck>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.needsVoltageLimitCheck>/g, obj, "needsVoltageLimitCheck", base.to_boolean, sub, context);
                base.parse_element (/<cim:RemoteConnectDisconnectInfo.needsPowerLimitCheck>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.needsPowerLimitCheck>/g, obj, "needsPowerLimitCheck", base.to_boolean, sub, context);
                base.parse_element (/<cim:RemoteConnectDisconnectInfo.customerVoltageLimit>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.customerVoltageLimit>/g, obj, "customerVoltageLimit", base.to_string, sub, context);
                base.parse_element (/<cim:RemoteConnectDisconnectInfo.powerLimit>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.powerLimit>/g, obj, "powerLimit", base.to_string, sub, context);
                base.parse_element (/<cim:RemoteConnectDisconnectInfo.usePushbutton>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.usePushbutton>/g, obj, "usePushbutton", base.to_boolean, sub, context);
                base.parse_element (/<cim:RemoteConnectDisconnectInfo.isEnergyLimiting>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.isEnergyLimiting>/g, obj, "isEnergyLimiting", base.to_boolean, sub, context);
                base.parse_element (/<cim:RemoteConnectDisconnectInfo.energyLimit>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.energyLimit>/g, obj, "energyLimit", base.to_string, sub, context);
                base.parse_element (/<cim:RemoteConnectDisconnectInfo.energyUsageWarning>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.energyUsageWarning>/g, obj, "energyUsageWarning", base.to_string, sub, context);
                base.parse_element (/<cim:RemoteConnectDisconnectInfo.energyUsageStartDateTime>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.energyUsageStartDateTime>/g, obj, "energyUsageStartDateTime", base.to_datetime, sub, context);
                let bucket = context.parsed.RemoteConnectDisconnectInfo;
                if (null == bucket)
                   context.parsed.RemoteConnectDisconnectInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "RemoteConnectDisconnectInfo", "isArmConnect", "isArmConnect",  base.from_boolean, fields);
                base.export_element (obj, "RemoteConnectDisconnectInfo", "isArmDisconnect", "isArmDisconnect",  base.from_boolean, fields);
                base.export_element (obj, "RemoteConnectDisconnectInfo", "armedTimeout", "armedTimeout",  base.from_string, fields);
                base.export_element (obj, "RemoteConnectDisconnectInfo", "needsVoltageLimitCheck", "needsVoltageLimitCheck",  base.from_boolean, fields);
                base.export_element (obj, "RemoteConnectDisconnectInfo", "needsPowerLimitCheck", "needsPowerLimitCheck",  base.from_boolean, fields);
                base.export_element (obj, "RemoteConnectDisconnectInfo", "customerVoltageLimit", "customerVoltageLimit",  base.from_string, fields);
                base.export_element (obj, "RemoteConnectDisconnectInfo", "powerLimit", "powerLimit",  base.from_string, fields);
                base.export_element (obj, "RemoteConnectDisconnectInfo", "usePushbutton", "usePushbutton",  base.from_boolean, fields);
                base.export_element (obj, "RemoteConnectDisconnectInfo", "isEnergyLimiting", "isEnergyLimiting",  base.from_boolean, fields);
                base.export_element (obj, "RemoteConnectDisconnectInfo", "energyLimit", "energyLimit",  base.from_string, fields);
                base.export_element (obj, "RemoteConnectDisconnectInfo", "energyUsageWarning", "energyUsageWarning",  base.from_string, fields);
                base.export_element (obj, "RemoteConnectDisconnectInfo", "energyUsageStartDateTime", "energyUsageStartDateTime",  base.from_datetime, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RemoteConnectDisconnectInfo_collapse" aria-expanded="true" aria-controls="RemoteConnectDisconnectInfo_collapse" style="margin-left: 10px;">RemoteConnectDisconnectInfo</a></legend>
                    <div id="RemoteConnectDisconnectInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#isArmConnect}}<div><b>isArmConnect</b>: {{isArmConnect}}</div>{{/isArmConnect}}
                    {{#isArmDisconnect}}<div><b>isArmDisconnect</b>: {{isArmDisconnect}}</div>{{/isArmDisconnect}}
                    {{#armedTimeout}}<div><b>armedTimeout</b>: {{armedTimeout}}</div>{{/armedTimeout}}
                    {{#needsVoltageLimitCheck}}<div><b>needsVoltageLimitCheck</b>: {{needsVoltageLimitCheck}}</div>{{/needsVoltageLimitCheck}}
                    {{#needsPowerLimitCheck}}<div><b>needsPowerLimitCheck</b>: {{needsPowerLimitCheck}}</div>{{/needsPowerLimitCheck}}
                    {{#customerVoltageLimit}}<div><b>customerVoltageLimit</b>: {{customerVoltageLimit}}</div>{{/customerVoltageLimit}}
                    {{#powerLimit}}<div><b>powerLimit</b>: {{powerLimit}}</div>{{/powerLimit}}
                    {{#usePushbutton}}<div><b>usePushbutton</b>: {{usePushbutton}}</div>{{/usePushbutton}}
                    {{#isEnergyLimiting}}<div><b>isEnergyLimiting</b>: {{isEnergyLimiting}}</div>{{/isEnergyLimiting}}
                    {{#energyLimit}}<div><b>energyLimit</b>: {{energyLimit}}</div>{{/energyLimit}}
                    {{#energyUsageWarning}}<div><b>energyUsageWarning</b>: {{energyUsageWarning}}</div>{{/energyUsageWarning}}
                    {{#energyUsageStartDateTime}}<div><b>energyUsageStartDateTime</b>: {{energyUsageStartDateTime}}</div>{{/energyUsageStartDateTime}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RemoteConnectDisconnectInfo_collapse" aria-expanded="true" aria-controls="{{id}}_RemoteConnectDisconnectInfo_collapse" style="margin-left: 10px;">RemoteConnectDisconnectInfo</a></legend>
                    <div id="{{id}}_RemoteConnectDisconnectInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isArmConnect'>isArmConnect: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isArmConnect' class='form-check-input' type='checkbox'{{#isArmConnect}} checked{{/isArmConnect}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isArmDisconnect'>isArmDisconnect: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isArmDisconnect' class='form-check-input' type='checkbox'{{#isArmDisconnect}} checked{{/isArmDisconnect}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_armedTimeout'>armedTimeout: </label><div class='col-sm-8'><input id='{{id}}_armedTimeout' class='form-control' type='text'{{#armedTimeout}} value='{{armedTimeout}}'{{/armedTimeout}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_needsVoltageLimitCheck'>needsVoltageLimitCheck: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_needsVoltageLimitCheck' class='form-check-input' type='checkbox'{{#needsVoltageLimitCheck}} checked{{/needsVoltageLimitCheck}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_needsPowerLimitCheck'>needsPowerLimitCheck: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_needsPowerLimitCheck' class='form-check-input' type='checkbox'{{#needsPowerLimitCheck}} checked{{/needsPowerLimitCheck}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_customerVoltageLimit'>customerVoltageLimit: </label><div class='col-sm-8'><input id='{{id}}_customerVoltageLimit' class='form-control' type='text'{{#customerVoltageLimit}} value='{{customerVoltageLimit}}'{{/customerVoltageLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_powerLimit'>powerLimit: </label><div class='col-sm-8'><input id='{{id}}_powerLimit' class='form-control' type='text'{{#powerLimit}} value='{{powerLimit}}'{{/powerLimit}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_usePushbutton'>usePushbutton: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_usePushbutton' class='form-check-input' type='checkbox'{{#usePushbutton}} checked{{/usePushbutton}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isEnergyLimiting'>isEnergyLimiting: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isEnergyLimiting' class='form-check-input' type='checkbox'{{#isEnergyLimiting}} checked{{/isEnergyLimiting}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_energyLimit'>energyLimit: </label><div class='col-sm-8'><input id='{{id}}_energyLimit' class='form-control' type='text'{{#energyLimit}} value='{{energyLimit}}'{{/energyLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_energyUsageWarning'>energyUsageWarning: </label><div class='col-sm-8'><input id='{{id}}_energyUsageWarning' class='form-control' type='text'{{#energyUsageWarning}} value='{{energyUsageWarning}}'{{/energyUsageWarning}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_energyUsageStartDateTime'>energyUsageStartDateTime: </label><div class='col-sm-8'><input id='{{id}}_energyUsageStartDateTime' class='form-control' type='text'{{#energyUsageStartDateTime}} value='{{energyUsageStartDateTime}}'{{/energyUsageStartDateTime}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "RemoteConnectDisconnectInfo" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_isArmConnect").checked; if (temp) obj["isArmConnect"] = true;
                temp = document.getElementById (id + "_isArmDisconnect").checked; if (temp) obj["isArmDisconnect"] = true;
                temp = document.getElementById (id + "_armedTimeout").value; if ("" !== temp) obj["armedTimeout"] = temp;
                temp = document.getElementById (id + "_needsVoltageLimitCheck").checked; if (temp) obj["needsVoltageLimitCheck"] = true;
                temp = document.getElementById (id + "_needsPowerLimitCheck").checked; if (temp) obj["needsPowerLimitCheck"] = true;
                temp = document.getElementById (id + "_customerVoltageLimit").value; if ("" !== temp) obj["customerVoltageLimit"] = temp;
                temp = document.getElementById (id + "_powerLimit").value; if ("" !== temp) obj["powerLimit"] = temp;
                temp = document.getElementById (id + "_usePushbutton").checked; if (temp) obj["usePushbutton"] = true;
                temp = document.getElementById (id + "_isEnergyLimiting").checked; if (temp) obj["isEnergyLimiting"] = true;
                temp = document.getElementById (id + "_energyLimit").value; if ("" !== temp) obj["energyLimit"] = temp;
                temp = document.getElementById (id + "_energyUsageWarning").value; if ("" !== temp) obj["energyUsageWarning"] = temp;
                temp = document.getElementById (id + "_energyUsageStartDateTime").value; if ("" !== temp) obj["energyUsageStartDateTime"] = temp;

                return (obj);
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
                let bucket = cim_data.ConnectDisconnectFunction;
                if (null == bucket)
                   cim_data.ConnectDisconnectFunction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ConnectDisconnectFunction[obj.id];
            }

            parse (context, sub)
            {
                let obj = Metering.EndDeviceFunction.prototype.parse.call (this, context, sub);
                obj.cls = "ConnectDisconnectFunction";
                base.parse_element (/<cim:ConnectDisconnectFunction.isLocalAutoDisconOp>([\s\S]*?)<\/cim:ConnectDisconnectFunction.isLocalAutoDisconOp>/g, obj, "isLocalAutoDisconOp", base.to_boolean, sub, context);
                base.parse_element (/<cim:ConnectDisconnectFunction.isLocalAutoReconOp>([\s\S]*?)<\/cim:ConnectDisconnectFunction.isLocalAutoReconOp>/g, obj, "isLocalAutoReconOp", base.to_boolean, sub, context);
                base.parse_element (/<cim:ConnectDisconnectFunction.isRemoteAutoDisconOp>([\s\S]*?)<\/cim:ConnectDisconnectFunction.isRemoteAutoDisconOp>/g, obj, "isRemoteAutoDisconOp", base.to_boolean, sub, context);
                base.parse_element (/<cim:ConnectDisconnectFunction.isRemoteAutoReconOp>([\s\S]*?)<\/cim:ConnectDisconnectFunction.isRemoteAutoReconOp>/g, obj, "isRemoteAutoReconOp", base.to_boolean, sub, context);
                base.parse_element (/<cim:ConnectDisconnectFunction.isDelayedDiscon>([\s\S]*?)<\/cim:ConnectDisconnectFunction.isDelayedDiscon>/g, obj, "isDelayedDiscon", base.to_boolean, sub, context);
                base.parse_element (/<cim:ConnectDisconnectFunction.eventCount>([\s\S]*?)<\/cim:ConnectDisconnectFunction.eventCount>/g, obj, "eventCount", base.to_string, sub, context);
                base.parse_element (/<cim:ConnectDisconnectFunction.isConnected>([\s\S]*?)<\/cim:ConnectDisconnectFunction.isConnected>/g, obj, "isConnected", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:ConnectDisconnectFunction.rcdInfo\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "rcdInfo", sub, context);
                base.parse_attributes (/<cim:ConnectDisconnectFunction.Switches\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Switches", sub, context);
                let bucket = context.parsed.ConnectDisconnectFunction;
                if (null == bucket)
                   context.parsed.ConnectDisconnectFunction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Metering.EndDeviceFunction.prototype.export.call (this, obj, false);

                base.export_element (obj, "ConnectDisconnectFunction", "isLocalAutoDisconOp", "isLocalAutoDisconOp",  base.from_boolean, fields);
                base.export_element (obj, "ConnectDisconnectFunction", "isLocalAutoReconOp", "isLocalAutoReconOp",  base.from_boolean, fields);
                base.export_element (obj, "ConnectDisconnectFunction", "isRemoteAutoDisconOp", "isRemoteAutoDisconOp",  base.from_boolean, fields);
                base.export_element (obj, "ConnectDisconnectFunction", "isRemoteAutoReconOp", "isRemoteAutoReconOp",  base.from_boolean, fields);
                base.export_element (obj, "ConnectDisconnectFunction", "isDelayedDiscon", "isDelayedDiscon",  base.from_boolean, fields);
                base.export_element (obj, "ConnectDisconnectFunction", "eventCount", "eventCount",  base.from_string, fields);
                base.export_element (obj, "ConnectDisconnectFunction", "isConnected", "isConnected",  base.from_boolean, fields);
                base.export_attribute (obj, "ConnectDisconnectFunction", "rcdInfo", "rcdInfo", fields);
                base.export_attributes (obj, "ConnectDisconnectFunction", "Switches", "Switches", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ConnectDisconnectFunction_collapse" aria-expanded="true" aria-controls="ConnectDisconnectFunction_collapse" style="margin-left: 10px;">ConnectDisconnectFunction</a></legend>
                    <div id="ConnectDisconnectFunction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Metering.EndDeviceFunction.prototype.template.call (this) +
                    `
                    {{#isLocalAutoDisconOp}}<div><b>isLocalAutoDisconOp</b>: {{isLocalAutoDisconOp}}</div>{{/isLocalAutoDisconOp}}
                    {{#isLocalAutoReconOp}}<div><b>isLocalAutoReconOp</b>: {{isLocalAutoReconOp}}</div>{{/isLocalAutoReconOp}}
                    {{#isRemoteAutoDisconOp}}<div><b>isRemoteAutoDisconOp</b>: {{isRemoteAutoDisconOp}}</div>{{/isRemoteAutoDisconOp}}
                    {{#isRemoteAutoReconOp}}<div><b>isRemoteAutoReconOp</b>: {{isRemoteAutoReconOp}}</div>{{/isRemoteAutoReconOp}}
                    {{#isDelayedDiscon}}<div><b>isDelayedDiscon</b>: {{isDelayedDiscon}}</div>{{/isDelayedDiscon}}
                    {{#eventCount}}<div><b>eventCount</b>: {{eventCount}}</div>{{/eventCount}}
                    {{#isConnected}}<div><b>isConnected</b>: {{isConnected}}</div>{{/isConnected}}
                    {{#rcdInfo}}<div><b>rcdInfo</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{rcdInfo}}&quot;);}); return false;'>{{rcdInfo}}</a></div>{{/rcdInfo}}\n                    {{#Switches}}<div><b>Switches</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Switches}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Switches"]) obj["Switches_string"] = obj["Switches"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Switches_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ConnectDisconnectFunction_collapse" aria-expanded="true" aria-controls="{{id}}_ConnectDisconnectFunction_collapse" style="margin-left: 10px;">ConnectDisconnectFunction</a></legend>
                    <div id="{{id}}_ConnectDisconnectFunction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Metering.EndDeviceFunction.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isLocalAutoDisconOp'>isLocalAutoDisconOp: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isLocalAutoDisconOp' class='form-check-input' type='checkbox'{{#isLocalAutoDisconOp}} checked{{/isLocalAutoDisconOp}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isLocalAutoReconOp'>isLocalAutoReconOp: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isLocalAutoReconOp' class='form-check-input' type='checkbox'{{#isLocalAutoReconOp}} checked{{/isLocalAutoReconOp}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isRemoteAutoDisconOp'>isRemoteAutoDisconOp: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isRemoteAutoDisconOp' class='form-check-input' type='checkbox'{{#isRemoteAutoDisconOp}} checked{{/isRemoteAutoDisconOp}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isRemoteAutoReconOp'>isRemoteAutoReconOp: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isRemoteAutoReconOp' class='form-check-input' type='checkbox'{{#isRemoteAutoReconOp}} checked{{/isRemoteAutoReconOp}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isDelayedDiscon'>isDelayedDiscon: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isDelayedDiscon' class='form-check-input' type='checkbox'{{#isDelayedDiscon}} checked{{/isDelayedDiscon}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_eventCount'>eventCount: </label><div class='col-sm-8'><input id='{{id}}_eventCount' class='form-control' type='text'{{#eventCount}} value='{{eventCount}}'{{/eventCount}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isConnected'>isConnected: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isConnected' class='form-check-input' type='checkbox'{{#isConnected}} checked{{/isConnected}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rcdInfo'>rcdInfo: </label><div class='col-sm-8'><input id='{{id}}_rcdInfo' class='form-control' type='text'{{#rcdInfo}} value='{{rcdInfo}}'{{/rcdInfo}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Switches'>Switches: </label><div class='col-sm-8'><input id='{{id}}_Switches' class='form-control' type='text'{{#Switches}} value='{{Switches_string}}'{{/Switches}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ConnectDisconnectFunction" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_isLocalAutoDisconOp").checked; if (temp) obj["isLocalAutoDisconOp"] = true;
                temp = document.getElementById (id + "_isLocalAutoReconOp").checked; if (temp) obj["isLocalAutoReconOp"] = true;
                temp = document.getElementById (id + "_isRemoteAutoDisconOp").checked; if (temp) obj["isRemoteAutoDisconOp"] = true;
                temp = document.getElementById (id + "_isRemoteAutoReconOp").checked; if (temp) obj["isRemoteAutoReconOp"] = true;
                temp = document.getElementById (id + "_isDelayedDiscon").checked; if (temp) obj["isDelayedDiscon"] = true;
                temp = document.getElementById (id + "_eventCount").value; if ("" !== temp) obj["eventCount"] = temp;
                temp = document.getElementById (id + "_isConnected").checked; if (temp) obj["isConnected"] = true;
                temp = document.getElementById (id + "_rcdInfo").value; if ("" !== temp) obj["rcdInfo"] = temp;
                temp = document.getElementById (id + "_Switches").value; if ("" !== temp) obj["Switches"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Switches", "0..*", "0..*", "Switch", "ConnectDisconnectFunctions"]
                        ]
                    )
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