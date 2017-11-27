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
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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