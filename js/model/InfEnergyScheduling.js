define
(
    ["model/base", "model/Common", "model/Core", "model/ExternalInputs"],
    /**
     * This package provides the capability to schedule and account for transactions for the exchange of electric power between companies.
     * It includes transations for megawatts which are generated, consumed, lost, passed through, sold and purchased. These classes are used by Accounting and Billing for Energy, Generation Capacity, Transmission, and Ancillary Services.
     */
    function (base, Common, Core, ExternalInputs)
    {

        function parse_TieLine (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TieLine";
            /**
             * The SubControlArea is on the A side of a collection of metered points which define the SubControlArea's boundary for a ControlAreaOperator or CustomerConsumer.
             */
            obj["SideA_SubControlArea"] = base.parse_attribute (/<cim:TieLine.SideA_SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * A dynamic energy transaction can act as a pseudo tie line.
             */
            obj["EnergyTransaction"] = base.parse_attribute (/<cim:TieLine.EnergyTransaction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * A CustomerConsumer may ring its perimeter with metering, which can create a unique SubControlArea at the collection of metering points, called a TieLine.
             */
            obj["ParentOfB"] = base.parse_attribute (/<cim:TieLine.ParentOfB\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The SubControlArea is on the B side of a collection of metered points which define the SubControlArea's boundary for a ControlAreaOperator or CustomerConsumer.
             */
            obj["SideB_SubControlArea"] = base.parse_attribute (/<cim:TieLine.SideB_SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.TieLine;
            if (null == bucket)
                context.parsed.TieLine = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Curtailing entity must be providing at least one service to the EnergyTransaction.
         * The CurtailmentProfile must be completely contained within the EnergyProfile timeframe for this EnergyTransaction.
         */
        function parse_CurtailmentProfile (context, sub)
        {
            var obj;
            var bucket;

            obj = ExternalInputs.parse_Profile (context, sub);
            obj.cls = "CurtailmentProfile";
            /**
             * An EnergyTransaction may be curtailed by any of the participating entities.
             */
            obj["EnergyTransaction"] = base.parse_attribute (/<cim:CurtailmentProfile.EnergyTransaction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.CurtailmentProfile;
            if (null == bucket)
                context.parsed.CurtailmentProfile = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A corridor containing one or more rights of way
         */
        function parse_TransmissionCorridor (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "TransmissionCorridor";
            bucket = context.parsed.TransmissionCorridor;
            if (null == bucket)
                context.parsed.TransmissionCorridor = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An account for tracking inadvertent interchange versus time for each control area.
         * A control area may have more than one inadvertent account in order to track inadvertent over one or more specific tie points in addition to the usual overall net inadvertent. Separate accounts would also be used to track designated time periods, such as on-peak and off-peak.
         */
        function parse_InadvertentAccount (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "InadvertentAccount";
            /**
             * A control area can have one or more net inadvertent interchange accounts
             */
            obj["SubControlArea"] = base.parse_attribute (/<cim:InadvertentAccount.SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.InadvertentAccount;
            if (null == bucket)
                context.parsed.InadvertentAccount = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * LossProfile is associated with an EnerrgyTransaction and must be completely contained within the time frame of the EnergyProfile associated with this EnergyTransaction.
         */
        function parse_LossProfile (context, sub)
        {
            var obj;
            var bucket;

            obj = ExternalInputs.parse_Profile (context, sub);
            obj.cls = "LossProfile";
            /**
             * Part of the LossProfile for an EnergyTransaction may be a loss for a TransmissionProvider.
             * If so, the TransmissionProvider must be one of the participating entities in the EnergyTransaction.
             */
            obj["HasLoss_"] = base.parse_attribute (/<cim:LossProfile.HasLoss_\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * An EnergyTransaction may have a LossProfile.
             */
            obj["EnergyTransaction"] = base.parse_attribute (/<cim:LossProfile.EnergyTransaction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.LossProfile;
            if (null == bucket)
                context.parsed.LossProfile = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Control area current net tie (scheduled interchange) sent to real time dispatch.
         */
        function parse_CurrentScheduledInterchange (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CurrentScheduledInterchange";
            /**
             * Current control area net tie MW (the sum of the tie line flows, i.e the sum of flows into and out of the control area), the current instantaneous scheduled interchange.
             */
            obj["currentNetTieMW"] = base.to_float (base.parse_element (/<cim:CurrentScheduledInterchange.currentNetTieMW>([\s\S]*?)<\/cim:CurrentScheduledInterchange.currentNetTieMW>/g, sub, context, true));
            /**
             * Use Emergency Schedule
             * Attribute Usage: Emergency use indicator, false = Emergency Schedular OFF, true = Emergency Schedular ON.
             */
            obj["useEmergencySchedule"] = base.to_boolean (base.parse_element (/<cim:CurrentScheduledInterchange.useEmergencySchedule>([\s\S]*?)<\/cim:CurrentScheduledInterchange.useEmergencySchedule>/g, sub, context, true));
            obj["InternalControlArea"] = base.parse_attribute (/<cim:CurrentScheduledInterchange.InternalControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.CurrentScheduledInterchange;
            if (null == bucket)
                context.parsed.CurrentScheduledInterchange = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Control area emergency schedules
         */
        function parse_CurrentEmergencyScheduledInterchange (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "CurrentEmergencyScheduledInterchange";
            /**
             * Net tie MW.
             * These are three entries, the current emergency schedule interchange and the two future schedules if they exist.
             */
            obj["emergencyScheduleMW"] = base.to_float (base.parse_element (/<cim:CurrentEmergencyScheduledInterchange.emergencyScheduleMW>([\s\S]*?)<\/cim:CurrentEmergencyScheduledInterchange.emergencyScheduleMW>/g, sub, context, true));
            /**
             * Net tie time,  the start time for a schedule.
             * This is calculated as the current time if a schedule is ramping.
             */
            obj["emergencyScheduleStartTime"] = base.to_datetime (base.parse_element (/<cim:CurrentEmergencyScheduledInterchange.emergencyScheduleStartTime>([\s\S]*?)<\/cim:CurrentEmergencyScheduledInterchange.emergencyScheduleStartTime>/g, sub, context, true));
            /**
             * Ramp time, the ramping time for a schedule.
             * This is calculated as the remaining time to ramp if a schedule is ramping. Measured in seconds, but can be negattive.
             */
            obj["emergencyScheduleRampTime"] = base.parse_element (/<cim:CurrentEmergencyScheduledInterchange.emergencyScheduleRampTime>([\s\S]*?)<\/cim:CurrentEmergencyScheduledInterchange.emergencyScheduleRampTime>/g, sub, context, true);
            obj["InternalControlArea"] = base.parse_attribute (/<cim:CurrentEmergencyScheduledInterchange.InternalControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.CurrentEmergencyScheduledInterchange;
            if (null == bucket)
                context.parsed.CurrentEmergencyScheduledInterchange = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The control area's reserve specification.
         */
        function parse_AreaReserveSpec (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AreaReserveSpec";
            /**
             * Description of the object or instance.
             */
            obj["Description"] = base.parse_element (/<cim:AreaReserveSpec.Description>([\s\S]*?)<\/cim:AreaReserveSpec.Description>/g, sub, context, true);
            /**
             * Lower regulating margin requirement in MW, the amount of generation that can be dropped by control in 10 minutes
             */
            obj["lowerRegMarginReqt"] = base.parse_element (/<cim:AreaReserveSpec.lowerRegMarginReqt>([\s\S]*?)<\/cim:AreaReserveSpec.lowerRegMarginReqt>/g, sub, context, true);
            /**
             * Operating reserve requirement in MW, where operating reserve is the generating capability that is fully available within 30 minutes.
             * Operating reserve is composed of primary reserve (t less than 10 min) and secondary reserve (10 less than t less than 30 min).
             */
            obj["opReserveReqt"] = base.parse_element (/<cim:AreaReserveSpec.opReserveReqt>([\s\S]*?)<\/cim:AreaReserveSpec.opReserveReqt>/g, sub, context, true);
            /**
             * Primary reserve requirement in MW, where primary reserve is generating capability that is fully available within 10 minutes.
             * Primary reserve is composed of spinning reserve and quick-start reserve.
             */
            obj["primaryReserveReqt"] = base.parse_element (/<cim:AreaReserveSpec.primaryReserveReqt>([\s\S]*?)<\/cim:AreaReserveSpec.primaryReserveReqt>/g, sub, context, true);
            /**
             * Raise regulating margin requirement in MW, the amount of generation that can be picked up by control in 10 minutes
             */
            obj["raiseRegMarginReqt"] = base.parse_element (/<cim:AreaReserveSpec.raiseRegMarginReqt>([\s\S]*?)<\/cim:AreaReserveSpec.raiseRegMarginReqt>/g, sub, context, true);
            /**
             * Spinning reserve requirement in MW, spinning reserve is generating capability that is presently synchronized to the network and is fully available within 10 minutes
             */
            obj["spinningReserveReqt"] = base.parse_element (/<cim:AreaReserveSpec.spinningReserveReqt>([\s\S]*?)<\/cim:AreaReserveSpec.spinningReserveReqt>/g, sub, context, true);
            bucket = context.parsed.AreaReserveSpec;
            if (null == bucket)
                context.parsed.AreaReserveSpec = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A continuously variable component of a control area's MW net interchange schedule.
         * Dynamic schedules are sent and received by control areas.
         */
        function parse_DynamicSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_BasicIntervalSchedule (context, sub);
            obj.cls = "DynamicSchedule";
            /**
             * Dynamic schedule sign reversal required (true/false)
             */
            obj["dynSchedSignRev"] = base.to_boolean (base.parse_element (/<cim:DynamicSchedule.dynSchedSignRev>([\s\S]*?)<\/cim:DynamicSchedule.dynSchedSignRev>/g, sub, context, true));
            /**
             * The "active" or "inactive" status of the dynamic schedule
             */
            obj["dynSchedStatus"] = base.parse_element (/<cim:DynamicSchedule.dynSchedStatus>([\s\S]*?)<\/cim:DynamicSchedule.dynSchedStatus>/g, sub, context, true);
            obj["MktMeasurement"] = base.parse_attribute (/<cim:DynamicSchedule.MktMeasurement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * A control area can receive dynamic schedules from other control areas
             */
            obj["Receive_SubControlArea"] = base.parse_attribute (/<cim:DynamicSchedule.Receive_SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * A control area can send dynamic schedules to other control areas
             */
            obj["Send_SubControlArea"] = base.parse_attribute (/<cim:DynamicSchedule.Send_SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.DynamicSchedule;
            if (null == bucket)
                context.parsed.DynamicSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An EnergyProduct is offered commercially as a ContractOrTariff.
         */
        function parse_EnergyProduct (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Agreement (context, sub);
            obj.cls = "EnergyProduct";
            obj["GenerationProvider"] = base.parse_attribute (/<cim:EnergyProduct.GenerationProvider\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * A Marketer holds title to an EnergyProduct.
             */
            obj["TitleHeldBy_Marketer"] = base.parse_attribute (/<cim:EnergyProduct.TitleHeldBy_Marketer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.EnergyProduct;
            if (null == bucket)
                context.parsed.EnergyProduct = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A collection of transmission lines that are close proximity to each other.
         */
        function parse_TransmissionRightOfWay (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "TransmissionRightOfWay";
            /**
             * A transmission right-of-way is a member of a transmission corridor
             */
            obj["TransmissionCorridor"] = base.parse_attribute (/<cim:TransmissionRightOfWay.TransmissionCorridor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.TransmissionRightOfWay;
            if (null == bucket)
                context.parsed.TransmissionRightOfWay = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * There is one internal control area in the system, which is the single control area in the primary network company.
         * Real time generation control affects only the internal control area.
         */
        function parse_InternalControlArea (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "InternalControlArea";
            obj["CurrentScheduledInterchange"] = base.parse_attribute (/<cim:InternalControlArea.CurrentScheduledInterchange\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.InternalControlArea;
            if (null == bucket)
                context.parsed.InternalControlArea = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_TieLine: parse_TieLine,
                parse_DynamicSchedule: parse_DynamicSchedule,
                parse_CurtailmentProfile: parse_CurtailmentProfile,
                parse_AreaReserveSpec: parse_AreaReserveSpec,
                parse_TransmissionRightOfWay: parse_TransmissionRightOfWay,
                parse_InternalControlArea: parse_InternalControlArea,
                parse_CurrentEmergencyScheduledInterchange: parse_CurrentEmergencyScheduledInterchange,
                parse_LossProfile: parse_LossProfile,
                parse_InadvertentAccount: parse_InadvertentAccount,
                parse_TransmissionCorridor: parse_TransmissionCorridor,
                parse_CurrentScheduledInterchange: parse_CurrentScheduledInterchange,
                parse_EnergyProduct: parse_EnergyProduct
            }
        );
    }
);