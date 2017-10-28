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
        function parse_RemoteConnectDisconnectInfo (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "RemoteConnectDisconnectInfo";
            /**
             * Setting of the timeout elapsed time.
             *
             */
            base.parse_element (/<cim:RemoteConnectDisconnectInfo.armedTimeout>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.armedTimeout>/g, obj, "armedTimeout", base.to_string, sub, context);

            /**
             * Voltage limit on customer side of RCD switch above which the connect should not be made.
             *
             */
            base.parse_element (/<cim:RemoteConnectDisconnectInfo.customerVoltageLimit>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.customerVoltageLimit>/g, obj, "customerVoltageLimit", base.to_string, sub, context);

            /**
             * Limit of energy before disconnect.
             *
             */
            base.parse_element (/<cim:RemoteConnectDisconnectInfo.energyLimit>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.energyLimit>/g, obj, "energyLimit", base.to_string, sub, context);

            /**
             * Start date and time to accumulate energy for energy usage limiting.
             *
             */
            base.parse_element (/<cim:RemoteConnectDisconnectInfo.energyUsageStartDateTime>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.energyUsageStartDateTime>/g, obj, "energyUsageStartDateTime", base.to_datetime, sub, context);

            /**
             * Warning energy limit, used to trigger event code that energy usage is nearing limit.
             *
             */
            base.parse_element (/<cim:RemoteConnectDisconnectInfo.energyUsageWarning>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.energyUsageWarning>/g, obj, "energyUsageWarning", base.to_string, sub, context);

            /**
             * True if the RCD switch has to be armed before a connect action can be initiated.
             *
             */
            base.parse_element (/<cim:RemoteConnectDisconnectInfo.isArmConnect>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.isArmConnect>/g, obj, "isArmConnect", base.to_boolean, sub, context);

            /**
             * True if the RCD switch has to be armed before a disconnect action can be initiated.
             *
             */
            base.parse_element (/<cim:RemoteConnectDisconnectInfo.isArmDisconnect>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.isArmDisconnect>/g, obj, "isArmDisconnect", base.to_boolean, sub, context);

            /**
             * True if the energy usage is limited and the customer will be disconnected if they go over the limit.
             *
             */
            base.parse_element (/<cim:RemoteConnectDisconnectInfo.isEnergyLimiting>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.isEnergyLimiting>/g, obj, "isEnergyLimiting", base.to_boolean, sub, context);

            /**
             * True if load limit has to be checked to issue an immediate disconnect (after a connect) if load is over the limit.
             *
             */
            base.parse_element (/<cim:RemoteConnectDisconnectInfo.needsPowerLimitCheck>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.needsPowerLimitCheck>/g, obj, "needsPowerLimitCheck", base.to_boolean, sub, context);

            /**
             * True if voltage limit has to be checked to prevent connect if voltage is over the limit.
             *
             */
            base.parse_element (/<cim:RemoteConnectDisconnectInfo.needsVoltageLimitCheck>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.needsVoltageLimitCheck>/g, obj, "needsVoltageLimitCheck", base.to_boolean, sub, context);

            /**
             * Load limit above which the connect should either not take place or should cause an immediate disconnect.
             *
             */
            base.parse_element (/<cim:RemoteConnectDisconnectInfo.powerLimit>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.powerLimit>/g, obj, "powerLimit", base.to_string, sub, context);

            /**
             * True if pushbutton has to be used for connect.
             *
             */
            base.parse_element (/<cim:RemoteConnectDisconnectInfo.usePushbutton>([\s\S]*?)<\/cim:RemoteConnectDisconnectInfo.usePushbutton>/g, obj, "usePushbutton", base.to_boolean, sub, context);

            bucket = context.parsed.RemoteConnectDisconnectInfo;
            if (null == bucket)
                context.parsed.RemoteConnectDisconnectInfo = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A function that will disconnect and reconnect the customer's load under defined conditions.
         *
         */
        function parse_ConnectDisconnectFunction (context, sub)
        {
            var obj;
            var bucket;

            obj = Metering.parse_EndDeviceFunction (context, sub);
            obj.cls = "ConnectDisconnectFunction";
            /**
             * Running cumulative count of connect or disconnect events, for the lifetime of this function or until the value is cleared.
             *
             */
            base.parse_element (/<cim:ConnectDisconnectFunction.eventCount>([\s\S]*?)<\/cim:ConnectDisconnectFunction.eventCount>/g, obj, "eventCount", base.to_string, sub, context);

            /**
             * True if this function is in the connected state.
             *
             */
            base.parse_element (/<cim:ConnectDisconnectFunction.isConnected>([\s\S]*?)<\/cim:ConnectDisconnectFunction.isConnected>/g, obj, "isConnected", base.to_boolean, sub, context);

            /**
             * If set true, the switch may disconnect the service at the end of a specified time delay after the disconnect signal has been given.
             *
             * If set false, the switch may disconnect the service immediately after the disconnect signal has been given. This is typically the case for over current circuit-breakers which are classified as either instantaneous or slow acting.
             *
             */
            base.parse_element (/<cim:ConnectDisconnectFunction.isDelayedDiscon>([\s\S]*?)<\/cim:ConnectDisconnectFunction.isDelayedDiscon>/g, obj, "isDelayedDiscon", base.to_boolean, sub, context);

            /**
             * If set true and if disconnection can be operated locally, the operation happens automatically.
             *
             * Otherwise it happens manually.
             *
             */
            base.parse_element (/<cim:ConnectDisconnectFunction.isLocalAutoDisconOp>([\s\S]*?)<\/cim:ConnectDisconnectFunction.isLocalAutoDisconOp>/g, obj, "isLocalAutoDisconOp", base.to_boolean, sub, context);

            /**
             * If set true and if reconnection can be operated locally, then the operation happens automatically.
             *
             * Otherwise, it happens manually.
             *
             */
            base.parse_element (/<cim:ConnectDisconnectFunction.isLocalAutoReconOp>([\s\S]*?)<\/cim:ConnectDisconnectFunction.isLocalAutoReconOp>/g, obj, "isLocalAutoReconOp", base.to_boolean, sub, context);

            /**
             * If set true and if disconnection can be operated remotely, then the operation happens automatically.
             *
             * If set false and if disconnection can be operated remotely, then the operation happens manually.
             *
             */
            base.parse_element (/<cim:ConnectDisconnectFunction.isRemoteAutoDisconOp>([\s\S]*?)<\/cim:ConnectDisconnectFunction.isRemoteAutoDisconOp>/g, obj, "isRemoteAutoDisconOp", base.to_boolean, sub, context);

            /**
             * If set true and if reconnection can be operated remotely, then the operation happens automatically.
             *
             * If set false and if reconnection can be operated remotely, then the operation happens manually.
             *
             */
            base.parse_element (/<cim:ConnectDisconnectFunction.isRemoteAutoReconOp>([\s\S]*?)<\/cim:ConnectDisconnectFunction.isRemoteAutoReconOp>/g, obj, "isRemoteAutoReconOp", base.to_boolean, sub, context);

            /**
             * Information on remote connect disconnect switch.
             *
             */
            base.parse_element (/<cim:ConnectDisconnectFunction.rcdInfo>([\s\S]*?)<\/cim:ConnectDisconnectFunction.rcdInfo>/g, obj, "rcdInfo", base.to_string, sub, context);

            bucket = context.parsed.ConnectDisconnectFunction;
            if (null == bucket)
                context.parsed.ConnectDisconnectFunction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_RemoteConnectDisconnectInfo: parse_RemoteConnectDisconnectInfo,
                parse_ConnectDisconnectFunction: parse_ConnectDisconnectFunction
            }
        );
    }
);