define
(
    ["model/base", "model/Assets", "model/Common", "model/Core"],
    /**
     * This package contains the core information classes that support work management and network extension planning applications.
     */
    function (base, Assets, Common, Core)
    {

        /**
         * Document used to request, initiate, track and record work.
         */
        function parse_Work (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_BaseWork (context, sub);
            obj.cls = "Work";
            /**
             * Date and time work was requested.
             */
            obj["requestDateTime"] = base.to_datetime (base.parse_element (/<cim:Work.requestDateTime>([\s\S]*?)<\/cim:Work.requestDateTime>/g, sub, context, true));
            obj["WorkBillingInfo"] = base.parse_attribute (/<cim:Work.WorkBillingInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["Project"] = base.parse_attribute (/<cim:Work.Project\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["BusinessCase"] = base.parse_attribute (/<cim:Work.BusinessCase\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["ErpProjectAccounting"] = base.parse_attribute (/<cim:Work.ErpProjectAccounting\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.Work;
            if (null == bucket)
                context.parsed.Work = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of status, specific to work.
         */
        function parse_WorkStatusKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "WorkStatusKind";
            /**
             * Work approval is pending.
             */
            obj["waitingOnApproval"] = base.parse_element (/<cim:WorkStatusKind.waitingOnApproval>([\s\S]*?)<\/cim:WorkStatusKind.waitingOnApproval>/g, sub, context, true);
            /**
             * Work has been approved.
             */
            obj["approved"] = base.parse_element (/<cim:WorkStatusKind.approved>([\s\S]*?)<\/cim:WorkStatusKind.approved>/g, sub, context, true);
            /**
             * Work has been canceled.
             */
            obj["cancelled"] = base.parse_element (/<cim:WorkStatusKind.cancelled>([\s\S]*?)<\/cim:WorkStatusKind.cancelled>/g, sub, context, true);
            /**
             * Work needs to be scheduled.
             */
            obj["waitingToBeScheduled"] = base.parse_element (/<cim:WorkStatusKind.waitingToBeScheduled>([\s\S]*?)<\/cim:WorkStatusKind.waitingToBeScheduled>/g, sub, context, true);
            /**
             * Work has been scheduled.
             */
            obj["scheduled"] = base.parse_element (/<cim:WorkStatusKind.scheduled>([\s\S]*?)<\/cim:WorkStatusKind.scheduled>/g, sub, context, true);
            /**
             * Work has been waiting on material.
             */
            obj["waitingOnMaterial"] = base.parse_element (/<cim:WorkStatusKind.waitingOnMaterial>([\s\S]*?)<\/cim:WorkStatusKind.waitingOnMaterial>/g, sub, context, true);
            /**
             * Work is in progress.
             */
            obj["inProgress"] = base.parse_element (/<cim:WorkStatusKind.inProgress>([\s\S]*?)<\/cim:WorkStatusKind.inProgress>/g, sub, context, true);
            /**
             * Work has been completed, i.e., crew can leave the work location and is available for another work.
             */
            obj["completed"] = base.parse_element (/<cim:WorkStatusKind.completed>([\s\S]*?)<\/cim:WorkStatusKind.completed>/g, sub, context, true);
            /**
             * Work has been closed (typically by a person responsible for work management) and is ready for billing.
             */
            obj["closed"] = base.parse_element (/<cim:WorkStatusKind.closed>([\s\S]*?)<\/cim:WorkStatusKind.closed>/g, sub, context, true);
            /**
             * Crew has been dispatched.
             */
            obj["dispatched"] = base.parse_element (/<cim:WorkStatusKind.dispatched>([\s\S]*?)<\/cim:WorkStatusKind.dispatched>/g, sub, context, true);
            /**
             * Crew is 'en route'.
             */
            obj["enroute"] = base.parse_element (/<cim:WorkStatusKind.enroute>([\s\S]*?)<\/cim:WorkStatusKind.enroute>/g, sub, context, true);
            /**
             * Crew is on the site.
             */
            obj["onSite"] = base.parse_element (/<cim:WorkStatusKind.onSite>([\s\S]*?)<\/cim:WorkStatusKind.onSite>/g, sub, context, true);
            bucket = context.parsed.WorkStatusKind;
            if (null == bucket)
                context.parsed.WorkStatusKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Location where to perform maintenance work.
         */
        function parse_MaintenanceLocation (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkLocation (context, sub);
            obj.cls = "MaintenanceLocation";
            /**
             * (if applicable) Name, identifier, or description of the block in which work is to occur.
             */
            obj["block"] = base.parse_element (/<cim:MaintenanceLocation.block>([\s\S]*?)<\/cim:MaintenanceLocation.block>/g, sub, context, true);
            /**
             * (if applicable) Name, identifier, or description of the lot in which work is to occur.
             */
            obj["lot"] = base.parse_element (/<cim:MaintenanceLocation.lot>([\s\S]*?)<\/cim:MaintenanceLocation.lot>/g, sub, context, true);
            /**
             * The names of streets at the nearest intersection to work area.
             */
            obj["nearestIntersection"] = base.parse_element (/<cim:MaintenanceLocation.nearestIntersection>([\s\S]*?)<\/cim:MaintenanceLocation.nearestIntersection>/g, sub, context, true);
            /**
             * (if applicable) Name, identifier, or description of the subdivision in which work is to occur.
             */
            obj["subdivision"] = base.parse_element (/<cim:MaintenanceLocation.subdivision>([\s\S]*?)<\/cim:MaintenanceLocation.subdivision>/g, sub, context, true);
            bucket = context.parsed.MaintenanceLocation;
            if (null == bucket)
                context.parsed.MaintenanceLocation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Vehicle asset.
         */
        function parse_Vehicle (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkAsset (context, sub);
            obj.cls = "Vehicle";
            /**
             * Date and time the last odometer reading was recorded.
             */
            obj["odometerReadDateTime"] = base.to_datetime (base.parse_element (/<cim:Vehicle.odometerReadDateTime>([\s\S]*?)<\/cim:Vehicle.odometerReadDateTime>/g, sub, context, true));
            /**
             * Odometer reading of this vehicle as of the 'odometerReadingDateTime'.
             * Refer to associated ActivityRecords for earlier readings.
             */
            obj["odometerReading"] = base.parse_element (/<cim:Vehicle.odometerReading>([\s\S]*?)<\/cim:Vehicle.odometerReading>/g, sub, context, true);
            /**
             * Kind of usage of the vehicle.
             */
            obj["usageKind"] = base.parse_element (/<cim:Vehicle.usageKind>([\s\S]*?)<\/cim:Vehicle.usageKind>/g, sub, context, true);
            bucket = context.parsed.Vehicle;
            if (null == bucket)
                context.parsed.Vehicle = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Time schedule specific to work.
         */
        function parse_WorkTimeSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_TimeSchedule (context, sub);
            obj.cls = "WorkTimeSchedule";
            /**
             * Kind of this work schedule.
             */
            obj["kind"] = base.parse_element (/<cim:WorkTimeSchedule.kind>([\s\S]*?)<\/cim:WorkTimeSchedule.kind>/g, sub, context, true);
            /**
             * Time schedule for this work or work task.
             */
            obj["BaseWork"] = base.parse_attribute (/<cim:WorkTimeSchedule.BaseWork\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WorkTimeSchedule;
            if (null == bucket)
                context.parsed.WorkTimeSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of work schedule.
         */
        function parse_WorkTimeScheduleKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "WorkTimeScheduleKind";
            obj["estimate"] = base.parse_element (/<cim:WorkTimeScheduleKind.estimate>([\s\S]*?)<\/cim:WorkTimeScheduleKind.estimate>/g, sub, context, true);
            obj["request"] = base.parse_element (/<cim:WorkTimeScheduleKind.request>([\s\S]*?)<\/cim:WorkTimeScheduleKind.request>/g, sub, context, true);
            obj["actual"] = base.parse_element (/<cim:WorkTimeScheduleKind.actual>([\s\S]*?)<\/cim:WorkTimeScheduleKind.actual>/g, sub, context, true);
            obj["earliest"] = base.parse_element (/<cim:WorkTimeScheduleKind.earliest>([\s\S]*?)<\/cim:WorkTimeScheduleKind.earliest>/g, sub, context, true);
            obj["latest"] = base.parse_element (/<cim:WorkTimeScheduleKind.latest>([\s\S]*?)<\/cim:WorkTimeScheduleKind.latest>/g, sub, context, true);
            bucket = context.parsed.WorkTimeScheduleKind;
            if (null == bucket)
                context.parsed.WorkTimeScheduleKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Common representation for work and work tasks.
         */
        function parse_BaseWork (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "BaseWork";
            /**
             * Kind of work.
             */
            obj["kind"] = base.parse_element (/<cim:BaseWork.kind>([\s\S]*?)<\/cim:BaseWork.kind>/g, sub, context, true);
            /**
             * Priority of work.
             */
            obj["priority"] = base.parse_element (/<cim:BaseWork.priority>([\s\S]*?)<\/cim:BaseWork.priority>/g, sub, context, true);
            /**
             * Kind of work status.
             */
            obj["statusKind"] = base.parse_element (/<cim:BaseWork.statusKind>([\s\S]*?)<\/cim:BaseWork.statusKind>/g, sub, context, true);
            /**
             * Location for this work/task.
             */
            obj["WorkLocation"] = base.parse_attribute (/<cim:BaseWork.WorkLocation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
             */
            obj["instruction"] = base.parse_element (/<cim:WorkTask.instruction>([\s\S]*?)<\/cim:WorkTask.instruction>/g, sub, context, true);
            /**
             * If specified, override schedule and perform this task in accordance with instructions specified here.
             */
            obj["schedOverride"] = base.parse_element (/<cim:WorkTask.schedOverride>([\s\S]*?)<\/cim:WorkTask.schedOverride>/g, sub, context, true);
            /**
             * Kind of work.
             */
            obj["taskKind"] = base.parse_element (/<cim:WorkTask.taskKind>([\s\S]*?)<\/cim:WorkTask.taskKind>/g, sub, context, true);
            /**
             * Estimated time of arrival, so that customer or police/fire department can be informed when the crew will arrive.
             */
            obj["crewETA"] = base.to_datetime (base.parse_element (/<cim:WorkTask.crewETA>([\s\S]*?)<\/cim:WorkTask.crewETA>/g, sub, context, true));
            /**
             * Work this task belongs to.
             */
            obj["Work"] = base.parse_attribute (/<cim:WorkTask.Work\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Old asset replaced by this work task.
             */
            obj["OldAsset"] = base.parse_attribute (/<cim:WorkTask.OldAsset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Switching plan executed by this work task.
             */
            obj["SwitchingPlan"] = base.parse_attribute (/<cim:WorkTask.SwitchingPlan\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
             */
            obj["install"] = base.parse_element (/<cim:WorkTaskKind.install>([\s\S]*?)<\/cim:WorkTaskKind.install>/g, sub, context, true);
            /**
             * Work task deals with removal of assets.
             */
            obj["remove"] = base.parse_element (/<cim:WorkTaskKind.remove>([\s\S]*?)<\/cim:WorkTaskKind.remove>/g, sub, context, true);
            /**
             * Work task deals with exchange of assets.
             */
            obj["exchange"] = base.parse_element (/<cim:WorkTaskKind.exchange>([\s\S]*?)<\/cim:WorkTaskKind.exchange>/g, sub, context, true);
            /**
             * Work task deals with investigation about assets.
             */
            obj["investigate"] = base.parse_element (/<cim:WorkTaskKind.investigate>([\s\S]*?)<\/cim:WorkTaskKind.investigate>/g, sub, context, true);
            bucket = context.parsed.WorkTaskKind;
            if (null == bucket)
                context.parsed.WorkTaskKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Tool asset.
         */
        function parse_Tool (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkAsset (context, sub);
            obj.cls = "Tool";
            /**
             * (if applicable) Date the tool was last calibrated.
             */
            obj["lastCalibrationDate"] = base.parse_element (/<cim:Tool.lastCalibrationDate>([\s\S]*?)<\/cim:Tool.lastCalibrationDate>/g, sub, context, true);
            bucket = context.parsed.Tool;
            if (null == bucket)
                context.parsed.Tool = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Information about a particular location for various forms of work.
         */
        function parse_WorkLocation (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Location (context, sub);
            obj.cls = "WorkLocation";
            obj["OneCallRequest"] = base.parse_attribute (/<cim:WorkLocation.OneCallRequest\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WorkLocation;
            if (null == bucket)
                context.parsed.WorkLocation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of work.
         */
        function parse_WorkKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "WorkKind";
            /**
             * Construction work.
             */
            obj["construction"] = base.parse_element (/<cim:WorkKind.construction>([\s\S]*?)<\/cim:WorkKind.construction>/g, sub, context, true);
            /**
             * Inspection work.
             */
            obj["inspection"] = base.parse_element (/<cim:WorkKind.inspection>([\s\S]*?)<\/cim:WorkKind.inspection>/g, sub, context, true);
            /**
             * Maintenance work.
             */
            obj["maintenance"] = base.parse_element (/<cim:WorkKind.maintenance>([\s\S]*?)<\/cim:WorkKind.maintenance>/g, sub, context, true);
            /**
             * Repair work.
             */
            obj["repair"] = base.parse_element (/<cim:WorkKind.repair>([\s\S]*?)<\/cim:WorkKind.repair>/g, sub, context, true);
            /**
             * Test work.
             */
            obj["test"] = base.parse_element (/<cim:WorkKind.test>([\s\S]*?)<\/cim:WorkKind.test>/g, sub, context, true);
            /**
             * Service work.
             */
            obj["service"] = base.parse_element (/<cim:WorkKind.service>([\s\S]*?)<\/cim:WorkKind.service>/g, sub, context, true);
            /**
             * Disconnect work.
             */
            obj["disconnect"] = base.parse_element (/<cim:WorkKind.disconnect>([\s\S]*?)<\/cim:WorkKind.disconnect>/g, sub, context, true);
            /**
             * (use 'connect' instead) Reconnect work.
             */
            obj["reconnect"] = base.parse_element (/<cim:WorkKind.reconnect>([\s\S]*?)<\/cim:WorkKind.reconnect>/g, sub, context, true);
            /**
             * Connect work.
             */
            obj["connect"] = base.parse_element (/<cim:WorkKind.connect>([\s\S]*?)<\/cim:WorkKind.connect>/g, sub, context, true);
            /**
             * Other kind of work.
             */
            obj["other"] = base.parse_element (/<cim:WorkKind.other>([\s\S]*?)<\/cim:WorkKind.other>/g, sub, context, true);
            bucket = context.parsed.WorkKind;
            if (null == bucket)
                context.parsed.WorkKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The physical consumable supply used for work and other purposes.
         * It includes items such as nuts, bolts, brackets, glue, etc.
         */
        function parse_MaterialItem (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "MaterialItem";
            /**
             * Quantity of material used.
             */
            obj["quantity"] = base.parse_element (/<cim:MaterialItem.quantity>([\s\S]*?)<\/cim:MaterialItem.quantity>/g, sub, context, true);
            obj["TypeMaterial"] = base.parse_attribute (/<cim:MaterialItem.TypeMaterial\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["WorkTask"] = base.parse_attribute (/<cim:MaterialItem.WorkTask\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MaterialItem;
            if (null == bucket)
                context.parsed.MaterialItem = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Asset used to perform work.
         */
        function parse_WorkAsset (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_Asset (context, sub);
            obj.cls = "WorkAsset";
            /**
             * Crew using this work asset.
             */
            obj["Crew"] = base.parse_attribute (/<cim:WorkAsset.Crew\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WorkAsset;
            if (null == bucket)
                context.parsed.WorkAsset = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Usage of a vehicle.
         */
        function parse_VehicleUsageKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "VehicleUsageKind";
            obj["crew"] = base.parse_element (/<cim:VehicleUsageKind.crew>([\s\S]*?)<\/cim:VehicleUsageKind.crew>/g, sub, context, true);
            obj["user"] = base.parse_element (/<cim:VehicleUsageKind.user>([\s\S]*?)<\/cim:VehicleUsageKind.user>/g, sub, context, true);
            obj["contractor"] = base.parse_element (/<cim:VehicleUsageKind.contractor>([\s\S]*?)<\/cim:VehicleUsageKind.contractor>/g, sub, context, true);
            obj["other"] = base.parse_element (/<cim:VehicleUsageKind.other>([\s\S]*?)<\/cim:VehicleUsageKind.other>/g, sub, context, true);
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