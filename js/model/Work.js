define
(
    ["model/base", "model/Assets", "model/Common", "model/Core"],
    /**
     * This package contains the core information classes that support work management and network extension planning applications.
     *
     */
    function (base, Assets, Common, Core)
    {

        /**
         * Document used to request, initiate, track and record work.
         *
         */
        function parse_Work (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_BaseWork (context, sub);
            obj.cls = "Work";
            /**
             * Date and time work was requested.
             *
             */
            base.parse_element (/<cim:Work.requestDateTime>([\s\S]*?)<\/cim:Work.requestDateTime>/g, obj, "requestDateTime", base.to_datetime, sub, context);

            base.parse_attribute (/<cim:Work.WorkBillingInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkBillingInfo", sub, context, true);

            base.parse_attribute (/<cim:Work.Project\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Project", sub, context, true);

            base.parse_attribute (/<cim:Work.BusinessCase\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BusinessCase", sub, context, true);

            base.parse_attribute (/<cim:Work.ErpProjectAccounting\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpProjectAccounting", sub, context, true);

            bucket = context.parsed.Work;
            if (null == bucket)
                context.parsed.Work = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of status, specific to work.
         *
         */
        function parse_WorkStatusKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "WorkStatusKind";
            /**
             * Work approval is pending.
             *
             */
            base.parse_element (/<cim:WorkStatusKind.waitingOnApproval>([\s\S]*?)<\/cim:WorkStatusKind.waitingOnApproval>/g, obj, "waitingOnApproval", base.to_string, sub, context);

            /**
             * Work has been approved.
             *
             */
            base.parse_element (/<cim:WorkStatusKind.approved>([\s\S]*?)<\/cim:WorkStatusKind.approved>/g, obj, "approved", base.to_string, sub, context);

            /**
             * Work has been canceled.
             *
             */
            base.parse_element (/<cim:WorkStatusKind.cancelled>([\s\S]*?)<\/cim:WorkStatusKind.cancelled>/g, obj, "cancelled", base.to_string, sub, context);

            /**
             * Work needs to be scheduled.
             *
             */
            base.parse_element (/<cim:WorkStatusKind.waitingToBeScheduled>([\s\S]*?)<\/cim:WorkStatusKind.waitingToBeScheduled>/g, obj, "waitingToBeScheduled", base.to_string, sub, context);

            /**
             * Work has been scheduled.
             *
             */
            base.parse_element (/<cim:WorkStatusKind.scheduled>([\s\S]*?)<\/cim:WorkStatusKind.scheduled>/g, obj, "scheduled", base.to_string, sub, context);

            /**
             * Work has been waiting on material.
             *
             */
            base.parse_element (/<cim:WorkStatusKind.waitingOnMaterial>([\s\S]*?)<\/cim:WorkStatusKind.waitingOnMaterial>/g, obj, "waitingOnMaterial", base.to_string, sub, context);

            /**
             * Work is in progress.
             *
             */
            base.parse_element (/<cim:WorkStatusKind.inProgress>([\s\S]*?)<\/cim:WorkStatusKind.inProgress>/g, obj, "inProgress", base.to_string, sub, context);

            /**
             * Work has been completed, i.e., crew can leave the work location and is available for another work.
             *
             */
            base.parse_element (/<cim:WorkStatusKind.completed>([\s\S]*?)<\/cim:WorkStatusKind.completed>/g, obj, "completed", base.to_string, sub, context);

            /**
             * Work has been closed (typically by a person responsible for work management) and is ready for billing.
             *
             */
            base.parse_element (/<cim:WorkStatusKind.closed>([\s\S]*?)<\/cim:WorkStatusKind.closed>/g, obj, "closed", base.to_string, sub, context);

            /**
             * Crew has been dispatched.
             *
             */
            base.parse_element (/<cim:WorkStatusKind.dispatched>([\s\S]*?)<\/cim:WorkStatusKind.dispatched>/g, obj, "dispatched", base.to_string, sub, context);

            /**
             * Crew is 'en route'.
             *
             */
            base.parse_element (/<cim:WorkStatusKind.enroute>([\s\S]*?)<\/cim:WorkStatusKind.enroute>/g, obj, "enroute", base.to_string, sub, context);

            /**
             * Crew is on the site.
             *
             */
            base.parse_element (/<cim:WorkStatusKind.onSite>([\s\S]*?)<\/cim:WorkStatusKind.onSite>/g, obj, "onSite", base.to_string, sub, context);

            bucket = context.parsed.WorkStatusKind;
            if (null == bucket)
                context.parsed.WorkStatusKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Location where to perform maintenance work.
         *
         */
        function parse_MaintenanceLocation (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkLocation (context, sub);
            obj.cls = "MaintenanceLocation";
            /**
             * (if applicable) Name, identifier, or description of the block in which work is to occur.
             *
             */
            base.parse_element (/<cim:MaintenanceLocation.block>([\s\S]*?)<\/cim:MaintenanceLocation.block>/g, obj, "block", base.to_string, sub, context);

            /**
             * (if applicable) Name, identifier, or description of the lot in which work is to occur.
             *
             */
            base.parse_element (/<cim:MaintenanceLocation.lot>([\s\S]*?)<\/cim:MaintenanceLocation.lot>/g, obj, "lot", base.to_string, sub, context);

            /**
             * The names of streets at the nearest intersection to work area.
             *
             */
            base.parse_element (/<cim:MaintenanceLocation.nearestIntersection>([\s\S]*?)<\/cim:MaintenanceLocation.nearestIntersection>/g, obj, "nearestIntersection", base.to_string, sub, context);

            /**
             * (if applicable) Name, identifier, or description of the subdivision in which work is to occur.
             *
             */
            base.parse_element (/<cim:MaintenanceLocation.subdivision>([\s\S]*?)<\/cim:MaintenanceLocation.subdivision>/g, obj, "subdivision", base.to_string, sub, context);

            bucket = context.parsed.MaintenanceLocation;
            if (null == bucket)
                context.parsed.MaintenanceLocation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Vehicle asset.
         *
         */
        function parse_Vehicle (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkAsset (context, sub);
            obj.cls = "Vehicle";
            /**
             * Date and time the last odometer reading was recorded.
             *
             */
            base.parse_element (/<cim:Vehicle.odometerReadDateTime>([\s\S]*?)<\/cim:Vehicle.odometerReadDateTime>/g, obj, "odometerReadDateTime", base.to_datetime, sub, context);

            /**
             * Odometer reading of this vehicle as of the 'odometerReadingDateTime'.
             *
             * Refer to associated ActivityRecords for earlier readings.
             *
             */
            base.parse_element (/<cim:Vehicle.odometerReading>([\s\S]*?)<\/cim:Vehicle.odometerReading>/g, obj, "odometerReading", base.to_string, sub, context);

            /**
             * Kind of usage of the vehicle.
             *
             */
            base.parse_element (/<cim:Vehicle.usageKind>([\s\S]*?)<\/cim:Vehicle.usageKind>/g, obj, "usageKind", base.to_string, sub, context);

            bucket = context.parsed.Vehicle;
            if (null == bucket)
                context.parsed.Vehicle = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Time schedule specific to work.
         *
         */
        function parse_WorkTimeSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_TimeSchedule (context, sub);
            obj.cls = "WorkTimeSchedule";
            /**
             * Kind of this work schedule.
             *
             */
            base.parse_element (/<cim:WorkTimeSchedule.kind>([\s\S]*?)<\/cim:WorkTimeSchedule.kind>/g, obj, "kind", base.to_string, sub, context);

            /**
             * Time schedule for this work or work task.
             *
             */
            base.parse_attribute (/<cim:WorkTimeSchedule.BaseWork\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BaseWork", sub, context, true);

            bucket = context.parsed.WorkTimeSchedule;
            if (null == bucket)
                context.parsed.WorkTimeSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of work schedule.
         *
         */
        function parse_WorkTimeScheduleKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "WorkTimeScheduleKind";
            base.parse_element (/<cim:WorkTimeScheduleKind.estimate>([\s\S]*?)<\/cim:WorkTimeScheduleKind.estimate>/g, obj, "estimate", base.to_string, sub, context);

            base.parse_element (/<cim:WorkTimeScheduleKind.request>([\s\S]*?)<\/cim:WorkTimeScheduleKind.request>/g, obj, "request", base.to_string, sub, context);

            base.parse_element (/<cim:WorkTimeScheduleKind.actual>([\s\S]*?)<\/cim:WorkTimeScheduleKind.actual>/g, obj, "actual", base.to_string, sub, context);

            base.parse_element (/<cim:WorkTimeScheduleKind.earliest>([\s\S]*?)<\/cim:WorkTimeScheduleKind.earliest>/g, obj, "earliest", base.to_string, sub, context);

            base.parse_element (/<cim:WorkTimeScheduleKind.latest>([\s\S]*?)<\/cim:WorkTimeScheduleKind.latest>/g, obj, "latest", base.to_string, sub, context);

            bucket = context.parsed.WorkTimeScheduleKind;
            if (null == bucket)
                context.parsed.WorkTimeScheduleKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Common representation for work and work tasks.
         *
         */
        function parse_BaseWork (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "BaseWork";
            /**
             * Kind of work.
             *
             */
            base.parse_element (/<cim:BaseWork.kind>([\s\S]*?)<\/cim:BaseWork.kind>/g, obj, "kind", base.to_string, sub, context);

            /**
             * Priority of work.
             *
             */
            base.parse_element (/<cim:BaseWork.priority>([\s\S]*?)<\/cim:BaseWork.priority>/g, obj, "priority", base.to_string, sub, context);

            /**
             * Kind of work status.
             *
             */
            base.parse_element (/<cim:BaseWork.statusKind>([\s\S]*?)<\/cim:BaseWork.statusKind>/g, obj, "statusKind", base.to_string, sub, context);

            /**
             * Location for this work/task.
             *
             */
            base.parse_attribute (/<cim:BaseWork.WorkLocation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkLocation", sub, context, true);

            bucket = context.parsed.BaseWork;
            if (null == bucket)
                context.parsed.BaseWork = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_WorkTask (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_BaseWork (context, sub);
            obj.cls = "WorkTask";
            /**
             * Instructions for performing this task.
             *
             */
            base.parse_element (/<cim:WorkTask.instruction>([\s\S]*?)<\/cim:WorkTask.instruction>/g, obj, "instruction", base.to_string, sub, context);

            /**
             * If specified, override schedule and perform this task in accordance with instructions specified here.
             *
             */
            base.parse_element (/<cim:WorkTask.schedOverride>([\s\S]*?)<\/cim:WorkTask.schedOverride>/g, obj, "schedOverride", base.to_string, sub, context);

            /**
             * Kind of work.
             *
             */
            base.parse_element (/<cim:WorkTask.taskKind>([\s\S]*?)<\/cim:WorkTask.taskKind>/g, obj, "taskKind", base.to_string, sub, context);

            /**
             * Estimated time of arrival, so that customer or police/fire department can be informed when the crew will arrive.
             *
             */
            base.parse_element (/<cim:WorkTask.crewETA>([\s\S]*?)<\/cim:WorkTask.crewETA>/g, obj, "crewETA", base.to_datetime, sub, context);

            /**
             * Work this task belongs to.
             *
             */
            base.parse_attribute (/<cim:WorkTask.Work\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Work", sub, context, true);

            /**
             * Old asset replaced by this work task.
             *
             */
            base.parse_attribute (/<cim:WorkTask.OldAsset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OldAsset", sub, context, true);

            /**
             * Switching plan executed by this work task.
             *
             */
            base.parse_attribute (/<cim:WorkTask.SwitchingPlan\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingPlan", sub, context, true);

            bucket = context.parsed.WorkTask;
            if (null == bucket)
                context.parsed.WorkTask = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_WorkTaskKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "WorkTaskKind";
            /**
             * Work task deals with installation of assets.
             *
             */
            base.parse_element (/<cim:WorkTaskKind.install>([\s\S]*?)<\/cim:WorkTaskKind.install>/g, obj, "install", base.to_string, sub, context);

            /**
             * Work task deals with removal of assets.
             *
             */
            base.parse_element (/<cim:WorkTaskKind.remove>([\s\S]*?)<\/cim:WorkTaskKind.remove>/g, obj, "remove", base.to_string, sub, context);

            /**
             * Work task deals with exchange of assets.
             *
             */
            base.parse_element (/<cim:WorkTaskKind.exchange>([\s\S]*?)<\/cim:WorkTaskKind.exchange>/g, obj, "exchange", base.to_string, sub, context);

            /**
             * Work task deals with investigation about assets.
             *
             */
            base.parse_element (/<cim:WorkTaskKind.investigate>([\s\S]*?)<\/cim:WorkTaskKind.investigate>/g, obj, "investigate", base.to_string, sub, context);

            bucket = context.parsed.WorkTaskKind;
            if (null == bucket)
                context.parsed.WorkTaskKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Tool asset.
         *
         */
        function parse_Tool (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkAsset (context, sub);
            obj.cls = "Tool";
            /**
             * (if applicable) Date the tool was last calibrated.
             *
             */
            base.parse_element (/<cim:Tool.lastCalibrationDate>([\s\S]*?)<\/cim:Tool.lastCalibrationDate>/g, obj, "lastCalibrationDate", base.to_string, sub, context);

            bucket = context.parsed.Tool;
            if (null == bucket)
                context.parsed.Tool = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Information about a particular location for various forms of work.
         *
         */
        function parse_WorkLocation (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Location (context, sub);
            obj.cls = "WorkLocation";
            base.parse_attribute (/<cim:WorkLocation.OneCallRequest\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OneCallRequest", sub, context, true);

            bucket = context.parsed.WorkLocation;
            if (null == bucket)
                context.parsed.WorkLocation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of work.
         *
         */
        function parse_WorkKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "WorkKind";
            /**
             * Construction work.
             *
             */
            base.parse_element (/<cim:WorkKind.construction>([\s\S]*?)<\/cim:WorkKind.construction>/g, obj, "construction", base.to_string, sub, context);

            /**
             * Inspection work.
             *
             */
            base.parse_element (/<cim:WorkKind.inspection>([\s\S]*?)<\/cim:WorkKind.inspection>/g, obj, "inspection", base.to_string, sub, context);

            /**
             * Maintenance work.
             *
             */
            base.parse_element (/<cim:WorkKind.maintenance>([\s\S]*?)<\/cim:WorkKind.maintenance>/g, obj, "maintenance", base.to_string, sub, context);

            /**
             * Repair work.
             *
             */
            base.parse_element (/<cim:WorkKind.repair>([\s\S]*?)<\/cim:WorkKind.repair>/g, obj, "repair", base.to_string, sub, context);

            /**
             * Test work.
             *
             */
            base.parse_element (/<cim:WorkKind.test>([\s\S]*?)<\/cim:WorkKind.test>/g, obj, "test", base.to_string, sub, context);

            /**
             * Service work.
             *
             */
            base.parse_element (/<cim:WorkKind.service>([\s\S]*?)<\/cim:WorkKind.service>/g, obj, "service", base.to_string, sub, context);

            /**
             * Disconnect work.
             *
             */
            base.parse_element (/<cim:WorkKind.disconnect>([\s\S]*?)<\/cim:WorkKind.disconnect>/g, obj, "disconnect", base.to_string, sub, context);

            /**
             * (use 'connect' instead) Reconnect work.
             *
             */
            base.parse_element (/<cim:WorkKind.reconnect>([\s\S]*?)<\/cim:WorkKind.reconnect>/g, obj, "reconnect", base.to_string, sub, context);

            /**
             * Connect work.
             *
             */
            base.parse_element (/<cim:WorkKind.connect>([\s\S]*?)<\/cim:WorkKind.connect>/g, obj, "connect", base.to_string, sub, context);

            /**
             * Other kind of work.
             *
             */
            base.parse_element (/<cim:WorkKind.other>([\s\S]*?)<\/cim:WorkKind.other>/g, obj, "other", base.to_string, sub, context);

            bucket = context.parsed.WorkKind;
            if (null == bucket)
                context.parsed.WorkKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The physical consumable supply used for work and other purposes.
         *
         * It includes items such as nuts, bolts, brackets, glue, etc.
         *
         */
        function parse_MaterialItem (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "MaterialItem";
            /**
             * Quantity of material used.
             *
             */
            base.parse_element (/<cim:MaterialItem.quantity>([\s\S]*?)<\/cim:MaterialItem.quantity>/g, obj, "quantity", base.to_string, sub, context);

            base.parse_attribute (/<cim:MaterialItem.TypeMaterial\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TypeMaterial", sub, context, true);

            base.parse_attribute (/<cim:MaterialItem.WorkTask\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkTask", sub, context, true);

            bucket = context.parsed.MaterialItem;
            if (null == bucket)
                context.parsed.MaterialItem = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Asset used to perform work.
         *
         */
        function parse_WorkAsset (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_Asset (context, sub);
            obj.cls = "WorkAsset";
            /**
             * Crew using this work asset.
             *
             */
            base.parse_attribute (/<cim:WorkAsset.Crew\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Crew", sub, context, true);

            bucket = context.parsed.WorkAsset;
            if (null == bucket)
                context.parsed.WorkAsset = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Usage of a vehicle.
         *
         */
        function parse_VehicleUsageKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "VehicleUsageKind";
            base.parse_element (/<cim:VehicleUsageKind.crew>([\s\S]*?)<\/cim:VehicleUsageKind.crew>/g, obj, "crew", base.to_string, sub, context);

            base.parse_element (/<cim:VehicleUsageKind.user>([\s\S]*?)<\/cim:VehicleUsageKind.user>/g, obj, "user", base.to_string, sub, context);

            base.parse_element (/<cim:VehicleUsageKind.contractor>([\s\S]*?)<\/cim:VehicleUsageKind.contractor>/g, obj, "contractor", base.to_string, sub, context);

            base.parse_element (/<cim:VehicleUsageKind.other>([\s\S]*?)<\/cim:VehicleUsageKind.other>/g, obj, "other", base.to_string, sub, context);

            bucket = context.parsed.VehicleUsageKind;
            if (null == bucket)
                context.parsed.VehicleUsageKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_WorkAsset: parse_WorkAsset,
                parse_Work: parse_Work,
                parse_WorkTimeSchedule: parse_WorkTimeSchedule,
                parse_MaintenanceLocation: parse_MaintenanceLocation,
                parse_MaterialItem: parse_MaterialItem,
                parse_Tool: parse_Tool,
                parse_WorkKind: parse_WorkKind,
                parse_WorkStatusKind: parse_WorkStatusKind,
                parse_VehicleUsageKind: parse_VehicleUsageKind,
                parse_WorkTask: parse_WorkTask,
                parse_WorkTaskKind: parse_WorkTaskKind,
                parse_WorkLocation: parse_WorkLocation,
                parse_WorkTimeScheduleKind: parse_WorkTimeScheduleKind,
                parse_Vehicle: parse_Vehicle,
                parse_BaseWork: parse_BaseWork
            }
        );
    }
);