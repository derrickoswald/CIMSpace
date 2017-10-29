define
(
    ["model/base", "model/Common", "model/Core", "model/ExternalInputs"],
    /**
     * This package provides the capability to schedule and account for transactions for the exchange of electric power between companies.
     *
     * It includes transations for megawatts which are generated, consumed, lost, passed through, sold and purchased. These classes are used by Accounting and Billing for Energy, Generation Capacity, Transmission, and Ancillary Services.
     *
     */
    function (base, Common, Core, ExternalInputs)
    {

        function parse_TieLine (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TieLine";
            base.parse_attribute (/<cim:TieLine.SideA_SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SideA_SubControlArea", sub, context);
            base.parse_attribute (/<cim:TieLine.EnergyTransaction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyTransaction", sub, context);
            base.parse_attribute (/<cim:TieLine.ParentOfB\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ParentOfB", sub, context);
            base.parse_attribute (/<cim:TieLine.SideB_SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SideB_SubControlArea", sub, context);
            bucket = context.parsed.TieLine;
            if (null == bucket)
                context.parsed.TieLine = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TieLine (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_attribute (obj, "TieLine", "SideA_SubControlArea", fields);
            base.export_attribute (obj, "TieLine", "EnergyTransaction", fields);
            base.export_attribute (obj, "TieLine", "ParentOfB", fields);
            base.export_attribute (obj, "TieLine", "SideB_SubControlArea", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Curtailing entity must be providing at least one service to the EnergyTransaction.
         *
         * The CurtailmentProfile must be completely contained within the EnergyProfile timeframe for this EnergyTransaction.
         *
         */
        function parse_CurtailmentProfile (context, sub)
        {
            var obj;
            var bucket;

            obj = ExternalInputs.parse_Profile (context, sub);
            obj.cls = "CurtailmentProfile";
            base.parse_attribute (/<cim:CurtailmentProfile.EnergyTransaction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyTransaction", sub, context);
            bucket = context.parsed.CurtailmentProfile;
            if (null == bucket)
                context.parsed.CurtailmentProfile = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CurtailmentProfile (obj, exporters, full)
        {
            var fields = exporters["Profile"](obj, exporters, false);

            base.export_attribute (obj, "CurtailmentProfile", "EnergyTransaction", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A corridor containing one or more rights of way
         *
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

        function export_TransmissionCorridor (obj, exporters, full)
        {
            var fields = exporters["PowerSystemResource"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * An account for tracking inadvertent interchange versus time for each control area.
         *
         * A control area may have more than one inadvertent account in order to track inadvertent over one or more specific tie points in addition to the usual overall net inadvertent. Separate accounts would also be used to track designated time periods, such as on-peak and off-peak.
         *
         */
        function parse_InadvertentAccount (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "InadvertentAccount";
            base.parse_attribute (/<cim:InadvertentAccount.SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SubControlArea", sub, context);
            bucket = context.parsed.InadvertentAccount;
            if (null == bucket)
                context.parsed.InadvertentAccount = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_InadvertentAccount (obj, exporters, full)
        {
            var fields = [];

            base.export_attribute (obj, "InadvertentAccount", "SubControlArea", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * LossProfile is associated with an EnerrgyTransaction and must be completely contained within the time frame of the EnergyProfile associated with this EnergyTransaction.
         *
         */
        function parse_LossProfile (context, sub)
        {
            var obj;
            var bucket;

            obj = ExternalInputs.parse_Profile (context, sub);
            obj.cls = "LossProfile";
            base.parse_attribute (/<cim:LossProfile.HasLoss_\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HasLoss_", sub, context);
            base.parse_attribute (/<cim:LossProfile.EnergyTransaction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyTransaction", sub, context);
            bucket = context.parsed.LossProfile;
            if (null == bucket)
                context.parsed.LossProfile = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_LossProfile (obj, exporters, full)
        {
            var fields = exporters["Profile"](obj, exporters, false);

            base.export_attribute (obj, "LossProfile", "HasLoss_", fields);
            base.export_attribute (obj, "LossProfile", "EnergyTransaction", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Control area current net tie (scheduled interchange) sent to real time dispatch.
         *
         */
        function parse_CurrentScheduledInterchange (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CurrentScheduledInterchange";
            base.parse_element (/<cim:CurrentScheduledInterchange.currentNetTieMW>([\s\S]*?)<\/cim:CurrentScheduledInterchange.currentNetTieMW>/g, obj, "currentNetTieMW", base.to_float, sub, context);
            base.parse_element (/<cim:CurrentScheduledInterchange.useEmergencySchedule>([\s\S]*?)<\/cim:CurrentScheduledInterchange.useEmergencySchedule>/g, obj, "useEmergencySchedule", base.to_boolean, sub, context);
            base.parse_attribute (/<cim:CurrentScheduledInterchange.InternalControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InternalControlArea", sub, context);
            bucket = context.parsed.CurrentScheduledInterchange;
            if (null == bucket)
                context.parsed.CurrentScheduledInterchange = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CurrentScheduledInterchange (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "CurrentScheduledInterchange", "currentNetTieMW", base.from_float, fields);
            base.export_element (obj, "CurrentScheduledInterchange", "useEmergencySchedule", base.from_boolean, fields);
            base.export_attribute (obj, "CurrentScheduledInterchange", "InternalControlArea", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Control area emergency schedules
         *
         */
        function parse_CurrentEmergencyScheduledInterchange (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "CurrentEmergencyScheduledInterchange";
            base.parse_element (/<cim:CurrentEmergencyScheduledInterchange.emergencyScheduleMW>([\s\S]*?)<\/cim:CurrentEmergencyScheduledInterchange.emergencyScheduleMW>/g, obj, "emergencyScheduleMW", base.to_float, sub, context);
            base.parse_element (/<cim:CurrentEmergencyScheduledInterchange.emergencyScheduleStartTime>([\s\S]*?)<\/cim:CurrentEmergencyScheduledInterchange.emergencyScheduleStartTime>/g, obj, "emergencyScheduleStartTime", base.to_datetime, sub, context);
            base.parse_element (/<cim:CurrentEmergencyScheduledInterchange.emergencyScheduleRampTime>([\s\S]*?)<\/cim:CurrentEmergencyScheduledInterchange.emergencyScheduleRampTime>/g, obj, "emergencyScheduleRampTime", base.to_string, sub, context);
            base.parse_attribute (/<cim:CurrentEmergencyScheduledInterchange.InternalControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InternalControlArea", sub, context);
            bucket = context.parsed.CurrentEmergencyScheduledInterchange;
            if (null == bucket)
                context.parsed.CurrentEmergencyScheduledInterchange = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CurrentEmergencyScheduledInterchange (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "CurrentEmergencyScheduledInterchange", "emergencyScheduleMW", base.from_float, fields);
            base.export_element (obj, "CurrentEmergencyScheduledInterchange", "emergencyScheduleStartTime", base.from_datetime, fields);
            base.export_element (obj, "CurrentEmergencyScheduledInterchange", "emergencyScheduleRampTime", base.from_string, fields);
            base.export_attribute (obj, "CurrentEmergencyScheduledInterchange", "InternalControlArea", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The control area's reserve specification.
         *
         */
        function parse_AreaReserveSpec (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AreaReserveSpec";
            base.parse_element (/<cim:AreaReserveSpec.Description>([\s\S]*?)<\/cim:AreaReserveSpec.Description>/g, obj, "Description", base.to_string, sub, context);
            base.parse_element (/<cim:AreaReserveSpec.lowerRegMarginReqt>([\s\S]*?)<\/cim:AreaReserveSpec.lowerRegMarginReqt>/g, obj, "lowerRegMarginReqt", base.to_string, sub, context);
            base.parse_element (/<cim:AreaReserveSpec.opReserveReqt>([\s\S]*?)<\/cim:AreaReserveSpec.opReserveReqt>/g, obj, "opReserveReqt", base.to_string, sub, context);
            base.parse_element (/<cim:AreaReserveSpec.primaryReserveReqt>([\s\S]*?)<\/cim:AreaReserveSpec.primaryReserveReqt>/g, obj, "primaryReserveReqt", base.to_string, sub, context);
            base.parse_element (/<cim:AreaReserveSpec.raiseRegMarginReqt>([\s\S]*?)<\/cim:AreaReserveSpec.raiseRegMarginReqt>/g, obj, "raiseRegMarginReqt", base.to_string, sub, context);
            base.parse_element (/<cim:AreaReserveSpec.spinningReserveReqt>([\s\S]*?)<\/cim:AreaReserveSpec.spinningReserveReqt>/g, obj, "spinningReserveReqt", base.to_string, sub, context);
            bucket = context.parsed.AreaReserveSpec;
            if (null == bucket)
                context.parsed.AreaReserveSpec = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AreaReserveSpec (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "AreaReserveSpec", "Description", base.from_string, fields);
            base.export_element (obj, "AreaReserveSpec", "lowerRegMarginReqt", base.from_string, fields);
            base.export_element (obj, "AreaReserveSpec", "opReserveReqt", base.from_string, fields);
            base.export_element (obj, "AreaReserveSpec", "primaryReserveReqt", base.from_string, fields);
            base.export_element (obj, "AreaReserveSpec", "raiseRegMarginReqt", base.from_string, fields);
            base.export_element (obj, "AreaReserveSpec", "spinningReserveReqt", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A continuously variable component of a control area's MW net interchange schedule.
         *
         * Dynamic schedules are sent and received by control areas.
         *
         */
        function parse_DynamicSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_BasicIntervalSchedule (context, sub);
            obj.cls = "DynamicSchedule";
            base.parse_element (/<cim:DynamicSchedule.dynSchedSignRev>([\s\S]*?)<\/cim:DynamicSchedule.dynSchedSignRev>/g, obj, "dynSchedSignRev", base.to_boolean, sub, context);
            base.parse_element (/<cim:DynamicSchedule.dynSchedStatus>([\s\S]*?)<\/cim:DynamicSchedule.dynSchedStatus>/g, obj, "dynSchedStatus", base.to_string, sub, context);
            base.parse_attribute (/<cim:DynamicSchedule.MktMeasurement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktMeasurement", sub, context);
            base.parse_attribute (/<cim:DynamicSchedule.Receive_SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Receive_SubControlArea", sub, context);
            base.parse_attribute (/<cim:DynamicSchedule.Send_SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Send_SubControlArea", sub, context);
            bucket = context.parsed.DynamicSchedule;
            if (null == bucket)
                context.parsed.DynamicSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_DynamicSchedule (obj, exporters, full)
        {
            var fields = exporters["BasicIntervalSchedule"](obj, exporters, false);

            base.export_element (obj, "DynamicSchedule", "dynSchedSignRev", base.from_boolean, fields);
            base.export_element (obj, "DynamicSchedule", "dynSchedStatus", base.from_string, fields);
            base.export_attribute (obj, "DynamicSchedule", "MktMeasurement", fields);
            base.export_attribute (obj, "DynamicSchedule", "Receive_SubControlArea", fields);
            base.export_attribute (obj, "DynamicSchedule", "Send_SubControlArea", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * An EnergyProduct is offered commercially as a ContractOrTariff.
         *
         */
        function parse_EnergyProduct (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Agreement (context, sub);
            obj.cls = "EnergyProduct";
            base.parse_attribute (/<cim:EnergyProduct.GenerationProvider\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GenerationProvider", sub, context);
            base.parse_attribute (/<cim:EnergyProduct.TitleHeldBy_Marketer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TitleHeldBy_Marketer", sub, context);
            bucket = context.parsed.EnergyProduct;
            if (null == bucket)
                context.parsed.EnergyProduct = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_EnergyProduct (obj, exporters, full)
        {
            var fields = exporters["Agreement"](obj, exporters, false);

            base.export_attribute (obj, "EnergyProduct", "GenerationProvider", fields);
            base.export_attribute (obj, "EnergyProduct", "TitleHeldBy_Marketer", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A collection of transmission lines that are close proximity to each other.
         *
         */
        function parse_TransmissionRightOfWay (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "TransmissionRightOfWay";
            base.parse_attribute (/<cim:TransmissionRightOfWay.TransmissionCorridor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionCorridor", sub, context);
            bucket = context.parsed.TransmissionRightOfWay;
            if (null == bucket)
                context.parsed.TransmissionRightOfWay = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TransmissionRightOfWay (obj, exporters, full)
        {
            var fields = exporters["PowerSystemResource"](obj, exporters, false);

            base.export_attribute (obj, "TransmissionRightOfWay", "TransmissionCorridor", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * There is one internal control area in the system, which is the single control area in the primary network company.
         *
         * Real time generation control affects only the internal control area.
         *
         */
        function parse_InternalControlArea (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "InternalControlArea";
            base.parse_attribute (/<cim:InternalControlArea.CurrentScheduledInterchange\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CurrentScheduledInterchange", sub, context);
            bucket = context.parsed.InternalControlArea;
            if (null == bucket)
                context.parsed.InternalControlArea = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_InternalControlArea (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_attribute (obj, "InternalControlArea", "CurrentScheduledInterchange", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                parse_DynamicSchedule: parse_DynamicSchedule,
                parse_CurtailmentProfile: parse_CurtailmentProfile,
                export_InadvertentAccount: export_InadvertentAccount,
                parse_AreaReserveSpec: parse_AreaReserveSpec,
                parse_InternalControlArea: parse_InternalControlArea,
                export_DynamicSchedule: export_DynamicSchedule,
                export_InternalControlArea: export_InternalControlArea,
                export_EnergyProduct: export_EnergyProduct,
                export_CurtailmentProfile: export_CurtailmentProfile,
                export_CurrentScheduledInterchange: export_CurrentScheduledInterchange,
                export_LossProfile: export_LossProfile,
                parse_EnergyProduct: parse_EnergyProduct,
                export_CurrentEmergencyScheduledInterchange: export_CurrentEmergencyScheduledInterchange,
                parse_TieLine: parse_TieLine,
                parse_TransmissionRightOfWay: parse_TransmissionRightOfWay,
                export_TransmissionRightOfWay: export_TransmissionRightOfWay,
                export_AreaReserveSpec: export_AreaReserveSpec,
                export_TransmissionCorridor: export_TransmissionCorridor,
                parse_CurrentEmergencyScheduledInterchange: parse_CurrentEmergencyScheduledInterchange,
                export_TieLine: export_TieLine,
                parse_LossProfile: parse_LossProfile,
                parse_InadvertentAccount: parse_InadvertentAccount,
                parse_TransmissionCorridor: parse_TransmissionCorridor,
                parse_CurrentScheduledInterchange: parse_CurrentScheduledInterchange
            }
        );
    }
);