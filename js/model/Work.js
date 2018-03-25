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
         * Kind of status, specific to work.
         *
         */
        var WorkStatusKind =
        {
            waitingOnApproval: "waitingOnApproval",
            approved: "approved",
            cancelled: "cancelled",
            waitingToBeScheduled: "waitingToBeScheduled",
            scheduled: "scheduled",
            waitingOnMaterial: "waitingOnMaterial",
            inProgress: "inProgress",
            completed: "completed",
            closed: "closed",
            dispatched: "dispatched",
            enroute: "enroute",
            onSite: "onSite"
        };
        Object.freeze (WorkStatusKind);

        /**
         * Kind of work schedule.
         *
         */
        var WorkTimeScheduleKind =
        {
            estimate: "estimate",
            request: "request",
            actual: "actual",
            earliest: "earliest",
            latest: "latest"
        };
        Object.freeze (WorkTimeScheduleKind);

        var WorkTaskKind =
        {
            install: "install",
            remove: "remove",
            exchange: "exchange",
            investigate: "investigate"
        };
        Object.freeze (WorkTaskKind);

        /**
         * Kind of work.
         *
         */
        var WorkKind =
        {
            construction: "construction",
            inspection: "inspection",
            maintenance: "maintenance",
            repair: "repair",
            test: "test",
            service: "service",
            disconnect: "disconnect",
            reconnect: "reconnect",
            connect: "connect",
            other: "other"
        };
        Object.freeze (WorkKind);

        /**
         * Usage of a vehicle.
         *
         */
        var VehicleUsageKind =
        {
            crew: "crew",
            user: "user",
            contractor: "contractor",
            other: "other"
        };
        Object.freeze (VehicleUsageKind);

        /**
         * Time schedule specific to work.
         *
         */
        class WorkTimeSchedule extends Common.TimeSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WorkTimeSchedule;
                if (null == bucket)
                   cim_data.WorkTimeSchedule = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WorkTimeSchedule[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.TimeSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "WorkTimeSchedule";
                base.parse_attribute (/<cim:WorkTimeSchedule.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:WorkTimeSchedule.BaseWork\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BaseWork", sub, context);
                var bucket = context.parsed.WorkTimeSchedule;
                if (null == bucket)
                   context.parsed.WorkTimeSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.TimeSchedule.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "WorkTimeSchedule", "kind", "kind", fields);
                base.export_attribute (obj, "WorkTimeSchedule", "BaseWork", "BaseWork", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#WorkTimeSchedule_collapse" aria-expanded="true" aria-controls="WorkTimeSchedule_collapse" style="margin-left: 10px;">WorkTimeSchedule</a></legend>
                    <div id="WorkTimeSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.TimeSchedule.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#BaseWork}}<div><b>BaseWork</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{BaseWork}}&quot;);}); return false;'>{{BaseWork}}</a></div>{{/BaseWork}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.WorkTimeScheduleKind = []; if (!obj.kind) obj.WorkTimeScheduleKind.push ({ id: '', selected: true}); for (var property in WorkTimeScheduleKind) obj.WorkTimeScheduleKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.WorkTimeScheduleKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_WorkTimeSchedule_collapse" aria-expanded="true" aria-controls="{{id}}_WorkTimeSchedule_collapse" style="margin-left: 10px;">WorkTimeSchedule</a></legend>
                    <div id="{{id}}_WorkTimeSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.TimeSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#WorkTimeScheduleKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/WorkTimeScheduleKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BaseWork'>BaseWork: </label><div class='col-sm-8'><input id='{{id}}_BaseWork' class='form-control' type='text'{{#BaseWork}} value='{{BaseWork}}'{{/BaseWork}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WorkTimeSchedule" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_kind").value; if ("" != temp) { temp = WorkTimeScheduleKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "http://iec.ch/TC57/2013/CIM-schema-cim16#WorkTimeScheduleKind." + temp; }
                temp = document.getElementById (id + "_BaseWork").value; if ("" != temp) obj.BaseWork = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["BaseWork", "0..1", "0..*", "BaseWork", "TimeSchedules"]
                        ]
                    )
                );
            }
        }

        /**
         * Common representation for work and work tasks.
         *
         */
        class BaseWork extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.BaseWork;
                if (null == bucket)
                   cim_data.BaseWork = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BaseWork[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "BaseWork";
                base.parse_attribute (/<cim:BaseWork.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:BaseWork.priority\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "priority", sub, context);
                base.parse_attribute (/<cim:BaseWork.statusKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "statusKind", sub, context);
                base.parse_attribute (/<cim:BaseWork.WorkLocation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkLocation", sub, context);
                base.parse_attributes (/<cim:BaseWork.TimeSchedules\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TimeSchedules", sub, context);
                var bucket = context.parsed.BaseWork;
                if (null == bucket)
                   context.parsed.BaseWork = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "BaseWork", "kind", "kind", fields);
                base.export_attribute (obj, "BaseWork", "priority", "priority", fields);
                base.export_attribute (obj, "BaseWork", "statusKind", "statusKind", fields);
                base.export_attribute (obj, "BaseWork", "WorkLocation", "WorkLocation", fields);
                base.export_attributes (obj, "BaseWork", "TimeSchedules", "TimeSchedules", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#BaseWork_collapse" aria-expanded="true" aria-controls="BaseWork_collapse" style="margin-left: 10px;">BaseWork</a></legend>
                    <div id="BaseWork_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#priority}}<div><b>priority</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{priority}}&quot;);}); return false;'>{{priority}}</a></div>{{/priority}}\n                    {{#statusKind}}<div><b>statusKind</b>: {{statusKind}}</div>{{/statusKind}}
                    {{#WorkLocation}}<div><b>WorkLocation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WorkLocation}}&quot;);}); return false;'>{{WorkLocation}}</a></div>{{/WorkLocation}}
                    {{#TimeSchedules}}<div><b>TimeSchedules</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/TimeSchedules}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.WorkKind = []; if (!obj.kind) obj.WorkKind.push ({ id: '', selected: true}); for (var property in WorkKind) obj.WorkKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
                obj.Priority = []; if (!obj.priority) obj.Priority.push ({ id: '', selected: true}); for (var property in Priority) obj.Priority.push ({ id: property, selected: obj.priority && obj.priority.endsWith ('.' + property)});
                obj.WorkStatusKind = []; if (!obj.statusKind) obj.WorkStatusKind.push ({ id: '', selected: true}); for (var property in WorkStatusKind) obj.WorkStatusKind.push ({ id: property, selected: obj.statusKind && obj.statusKind.endsWith ('.' + property)});
                if (obj.TimeSchedules) obj.TimeSchedules_string = obj.TimeSchedules.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.WorkKind;
                delete obj.Priority;
                delete obj.WorkStatusKind;
                delete obj.TimeSchedules_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_BaseWork_collapse" aria-expanded="true" aria-controls="{{id}}_BaseWork_collapse" style="margin-left: 10px;">BaseWork</a></legend>
                    <div id="{{id}}_BaseWork_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#WorkKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/WorkKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_priority'>priority: </label><div class='col-sm-8'><select id='{{id}}_priority' class='form-control custom-select'>{{#Priority}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/Priority}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_statusKind'>statusKind: </label><div class='col-sm-8'><select id='{{id}}_statusKind' class='form-control custom-select'>{{#WorkStatusKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/WorkStatusKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WorkLocation'>WorkLocation: </label><div class='col-sm-8'><input id='{{id}}_WorkLocation' class='form-control' type='text'{{#WorkLocation}} value='{{WorkLocation}}'{{/WorkLocation}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "BaseWork" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_kind").value; if ("" != temp) { temp = WorkKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "http://iec.ch/TC57/2013/CIM-schema-cim16#WorkKind." + temp; }
                temp = document.getElementById (id + "_priority").value; if ("" != temp) { temp = Priority[temp]; if ("undefined" != typeof (temp)) obj.priority = "http://iec.ch/TC57/2013/CIM-schema-cim16#Priority." + temp; }
                temp = document.getElementById (id + "_statusKind").value; if ("" != temp) { temp = WorkStatusKind[temp]; if ("undefined" != typeof (temp)) obj.statusKind = "http://iec.ch/TC57/2013/CIM-schema-cim16#WorkStatusKind." + temp; }
                temp = document.getElementById (id + "_WorkLocation").value; if ("" != temp) obj.WorkLocation = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WorkLocation", "0..1", "0..*", "WorkLocation", "BaseWorks"],
                            ["TimeSchedules", "0..*", "0..1", "WorkTimeSchedule", "BaseWork"]
                        ]
                    )
                );
            }
        }

        /**
         * Information about a particular location for various forms of work.
         *
         */
        class WorkLocation extends Common.Location
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WorkLocation;
                if (null == bucket)
                   cim_data.WorkLocation = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WorkLocation[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Location.prototype.parse.call (this, context, sub);
                obj.cls = "WorkLocation";
                base.parse_attribute (/<cim:WorkLocation.OneCallRequest\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OneCallRequest", sub, context);
                base.parse_attributes (/<cim:WorkLocation.BaseWorks\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BaseWorks", sub, context);
                base.parse_attributes (/<cim:WorkLocation.DesignLocations\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DesignLocations", sub, context);
                var bucket = context.parsed.WorkLocation;
                if (null == bucket)
                   context.parsed.WorkLocation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Location.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "WorkLocation", "OneCallRequest", "OneCallRequest", fields);
                base.export_attributes (obj, "WorkLocation", "BaseWorks", "BaseWorks", fields);
                base.export_attributes (obj, "WorkLocation", "DesignLocations", "DesignLocations", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#WorkLocation_collapse" aria-expanded="true" aria-controls="WorkLocation_collapse" style="margin-left: 10px;">WorkLocation</a></legend>
                    <div id="WorkLocation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Location.prototype.template.call (this) +
                    `
                    {{#OneCallRequest}}<div><b>OneCallRequest</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{OneCallRequest}}&quot;);}); return false;'>{{OneCallRequest}}</a></div>{{/OneCallRequest}}
                    {{#BaseWorks}}<div><b>BaseWorks</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/BaseWorks}}
                    {{#DesignLocations}}<div><b>DesignLocations</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/DesignLocations}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.BaseWorks) obj.BaseWorks_string = obj.BaseWorks.join ();
                if (obj.DesignLocations) obj.DesignLocations_string = obj.DesignLocations.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.BaseWorks_string;
                delete obj.DesignLocations_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_WorkLocation_collapse" aria-expanded="true" aria-controls="{{id}}_WorkLocation_collapse" style="margin-left: 10px;">WorkLocation</a></legend>
                    <div id="{{id}}_WorkLocation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Location.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OneCallRequest'>OneCallRequest: </label><div class='col-sm-8'><input id='{{id}}_OneCallRequest' class='form-control' type='text'{{#OneCallRequest}} value='{{OneCallRequest}}'{{/OneCallRequest}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DesignLocations'>DesignLocations: </label><div class='col-sm-8'><input id='{{id}}_DesignLocations' class='form-control' type='text'{{#DesignLocations}} value='{{DesignLocations_string}}'{{/DesignLocations}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WorkLocation" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_OneCallRequest").value; if ("" != temp) obj.OneCallRequest = temp;
                temp = document.getElementById (id + "_DesignLocations").value; if ("" != temp) obj.DesignLocations = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["OneCallRequest", "0..1", "0..*", "OneCallRequest", "WorkLocations"],
                            ["BaseWorks", "0..*", "0..1", "BaseWork", "WorkLocation"],
                            ["DesignLocations", "0..*", "1..*", "DesignLocation", "WorkLocations"]
                        ]
                    )
                );
            }
        }

        /**
         * The physical consumable supply used for work and other purposes.
         *
         * It includes items such as nuts, bolts, brackets, glue, etc.
         *
         */
        class MaterialItem extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.MaterialItem;
                if (null == bucket)
                   cim_data.MaterialItem = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MaterialItem[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MaterialItem";
                base.parse_attribute (/<cim:MaterialItem.quantity\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "quantity", sub, context);
                base.parse_attribute (/<cim:MaterialItem.TypeMaterial\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TypeMaterial", sub, context);
                base.parse_attribute (/<cim:MaterialItem.WorkTask\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkTask", sub, context);
                var bucket = context.parsed.MaterialItem;
                if (null == bucket)
                   context.parsed.MaterialItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MaterialItem", "quantity", "quantity", fields);
                base.export_attribute (obj, "MaterialItem", "TypeMaterial", "TypeMaterial", fields);
                base.export_attribute (obj, "MaterialItem", "WorkTask", "WorkTask", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MaterialItem_collapse" aria-expanded="true" aria-controls="MaterialItem_collapse" style="margin-left: 10px;">MaterialItem</a></legend>
                    <div id="MaterialItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#quantity}}<div><b>quantity</b>: {{quantity}}</div>{{/quantity}}
                    {{#TypeMaterial}}<div><b>TypeMaterial</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TypeMaterial}}&quot;);}); return false;'>{{TypeMaterial}}</a></div>{{/TypeMaterial}}
                    {{#WorkTask}}<div><b>WorkTask</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WorkTask}}&quot;);}); return false;'>{{WorkTask}}</a></div>{{/WorkTask}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.IntegerQuantity = []; if (!obj.quantity) obj.IntegerQuantity.push ({ id: '', selected: true}); for (var property in IntegerQuantity) obj.IntegerQuantity.push ({ id: property, selected: obj.quantity && obj.quantity.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.IntegerQuantity;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MaterialItem_collapse" aria-expanded="true" aria-controls="{{id}}_MaterialItem_collapse" style="margin-left: 10px;">MaterialItem</a></legend>
                    <div id="{{id}}_MaterialItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_quantity'>quantity: </label><div class='col-sm-8'><select id='{{id}}_quantity' class='form-control custom-select'>{{#IntegerQuantity}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/IntegerQuantity}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TypeMaterial'>TypeMaterial: </label><div class='col-sm-8'><input id='{{id}}_TypeMaterial' class='form-control' type='text'{{#TypeMaterial}} value='{{TypeMaterial}}'{{/TypeMaterial}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WorkTask'>WorkTask: </label><div class='col-sm-8'><input id='{{id}}_WorkTask' class='form-control' type='text'{{#WorkTask}} value='{{WorkTask}}'{{/WorkTask}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "MaterialItem" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_quantity").value; if ("" != temp) { temp = IntegerQuantity[temp]; if ("undefined" != typeof (temp)) obj.quantity = "http://iec.ch/TC57/2013/CIM-schema-cim16#IntegerQuantity." + temp; }
                temp = document.getElementById (id + "_TypeMaterial").value; if ("" != temp) obj.TypeMaterial = temp;
                temp = document.getElementById (id + "_WorkTask").value; if ("" != temp) obj.WorkTask = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TypeMaterial", "0..1", "0..*", "TypeMaterial", "MaterialItems"],
                            ["WorkTask", "0..1", "0..*", "WorkTask", "MaterialItems"]
                        ]
                    )
                );
            }
        }

        /**
         * Asset used to perform work.
         *
         */
        class WorkAsset extends Assets.Asset
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WorkAsset;
                if (null == bucket)
                   cim_data.WorkAsset = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WorkAsset[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Assets.Asset.prototype.parse.call (this, context, sub);
                obj.cls = "WorkAsset";
                base.parse_attribute (/<cim:WorkAsset.Crew\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Crew", sub, context);
                var bucket = context.parsed.WorkAsset;
                if (null == bucket)
                   context.parsed.WorkAsset = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Assets.Asset.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "WorkAsset", "Crew", "Crew", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#WorkAsset_collapse" aria-expanded="true" aria-controls="WorkAsset_collapse" style="margin-left: 10px;">WorkAsset</a></legend>
                    <div id="WorkAsset_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.Asset.prototype.template.call (this) +
                    `
                    {{#Crew}}<div><b>Crew</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Crew}}&quot;);}); return false;'>{{Crew}}</a></div>{{/Crew}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_WorkAsset_collapse" aria-expanded="true" aria-controls="{{id}}_WorkAsset_collapse" style="margin-left: 10px;">WorkAsset</a></legend>
                    <div id="{{id}}_WorkAsset_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.Asset.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Crew'>Crew: </label><div class='col-sm-8'><input id='{{id}}_Crew' class='form-control' type='text'{{#Crew}} value='{{Crew}}'{{/Crew}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WorkAsset" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Crew").value; if ("" != temp) obj.Crew = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Crew", "0..1", "0..*", "Crew", "WorkAssets"]
                        ]
                    )
                );
            }
        }

        class WorkTask extends BaseWork
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WorkTask;
                if (null == bucket)
                   cim_data.WorkTask = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WorkTask[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = BaseWork.prototype.parse.call (this, context, sub);
                obj.cls = "WorkTask";
                base.parse_element (/<cim:WorkTask.instruction>([\s\S]*?)<\/cim:WorkTask.instruction>/g, obj, "instruction", base.to_string, sub, context);
                base.parse_element (/<cim:WorkTask.schedOverride>([\s\S]*?)<\/cim:WorkTask.schedOverride>/g, obj, "schedOverride", base.to_string, sub, context);
                base.parse_attribute (/<cim:WorkTask.taskKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "taskKind", sub, context);
                base.parse_element (/<cim:WorkTask.crewETA>([\s\S]*?)<\/cim:WorkTask.crewETA>/g, obj, "crewETA", base.to_datetime, sub, context);
                base.parse_attributes (/<cim:WorkTask.Crews\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Crews", sub, context);
                base.parse_attributes (/<cim:WorkTask.Assets\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Assets", sub, context);
                base.parse_attribute (/<cim:WorkTask.Work\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Work", sub, context);
                base.parse_attributes (/<cim:WorkTask.MaterialItems\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MaterialItems", sub, context);
                base.parse_attribute (/<cim:WorkTask.OldAsset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OldAsset", sub, context);
                base.parse_attribute (/<cim:WorkTask.SwitchingPlan\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingPlan", sub, context);
                var bucket = context.parsed.WorkTask;
                if (null == bucket)
                   context.parsed.WorkTask = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = BaseWork.prototype.export.call (this, obj, false);

                base.export_element (obj, "WorkTask", "instruction", "instruction",  base.from_string, fields);
                base.export_element (obj, "WorkTask", "schedOverride", "schedOverride",  base.from_string, fields);
                base.export_attribute (obj, "WorkTask", "taskKind", "taskKind", fields);
                base.export_element (obj, "WorkTask", "crewETA", "crewETA",  base.from_datetime, fields);
                base.export_attributes (obj, "WorkTask", "Crews", "Crews", fields);
                base.export_attributes (obj, "WorkTask", "Assets", "Assets", fields);
                base.export_attribute (obj, "WorkTask", "Work", "Work", fields);
                base.export_attributes (obj, "WorkTask", "MaterialItems", "MaterialItems", fields);
                base.export_attribute (obj, "WorkTask", "OldAsset", "OldAsset", fields);
                base.export_attribute (obj, "WorkTask", "SwitchingPlan", "SwitchingPlan", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#WorkTask_collapse" aria-expanded="true" aria-controls="WorkTask_collapse" style="margin-left: 10px;">WorkTask</a></legend>
                    <div id="WorkTask_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + BaseWork.prototype.template.call (this) +
                    `
                    {{#instruction}}<div><b>instruction</b>: {{instruction}}</div>{{/instruction}}
                    {{#schedOverride}}<div><b>schedOverride</b>: {{schedOverride}}</div>{{/schedOverride}}
                    {{#taskKind}}<div><b>taskKind</b>: {{taskKind}}</div>{{/taskKind}}
                    {{#crewETA}}<div><b>crewETA</b>: {{crewETA}}</div>{{/crewETA}}
                    {{#Crews}}<div><b>Crews</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Crews}}
                    {{#Assets}}<div><b>Assets</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Assets}}
                    {{#Work}}<div><b>Work</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Work}}&quot;);}); return false;'>{{Work}}</a></div>{{/Work}}
                    {{#MaterialItems}}<div><b>MaterialItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/MaterialItems}}
                    {{#OldAsset}}<div><b>OldAsset</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{OldAsset}}&quot;);}); return false;'>{{OldAsset}}</a></div>{{/OldAsset}}
                    {{#SwitchingPlan}}<div><b>SwitchingPlan</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SwitchingPlan}}&quot;);}); return false;'>{{SwitchingPlan}}</a></div>{{/SwitchingPlan}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.WorkTaskKind = []; if (!obj.taskKind) obj.WorkTaskKind.push ({ id: '', selected: true}); for (var property in WorkTaskKind) obj.WorkTaskKind.push ({ id: property, selected: obj.taskKind && obj.taskKind.endsWith ('.' + property)});
                if (obj.Crews) obj.Crews_string = obj.Crews.join ();
                if (obj.Assets) obj.Assets_string = obj.Assets.join ();
                if (obj.MaterialItems) obj.MaterialItems_string = obj.MaterialItems.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.WorkTaskKind;
                delete obj.Crews_string;
                delete obj.Assets_string;
                delete obj.MaterialItems_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_WorkTask_collapse" aria-expanded="true" aria-controls="{{id}}_WorkTask_collapse" style="margin-left: 10px;">WorkTask</a></legend>
                    <div id="{{id}}_WorkTask_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + BaseWork.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_instruction'>instruction: </label><div class='col-sm-8'><input id='{{id}}_instruction' class='form-control' type='text'{{#instruction}} value='{{instruction}}'{{/instruction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_schedOverride'>schedOverride: </label><div class='col-sm-8'><input id='{{id}}_schedOverride' class='form-control' type='text'{{#schedOverride}} value='{{schedOverride}}'{{/schedOverride}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_taskKind'>taskKind: </label><div class='col-sm-8'><select id='{{id}}_taskKind' class='form-control custom-select'>{{#WorkTaskKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/WorkTaskKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_crewETA'>crewETA: </label><div class='col-sm-8'><input id='{{id}}_crewETA' class='form-control' type='text'{{#crewETA}} value='{{crewETA}}'{{/crewETA}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Crews'>Crews: </label><div class='col-sm-8'><input id='{{id}}_Crews' class='form-control' type='text'{{#Crews}} value='{{Crews_string}}'{{/Crews}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Assets'>Assets: </label><div class='col-sm-8'><input id='{{id}}_Assets' class='form-control' type='text'{{#Assets}} value='{{Assets_string}}'{{/Assets}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Work'>Work: </label><div class='col-sm-8'><input id='{{id}}_Work' class='form-control' type='text'{{#Work}} value='{{Work}}'{{/Work}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OldAsset'>OldAsset: </label><div class='col-sm-8'><input id='{{id}}_OldAsset' class='form-control' type='text'{{#OldAsset}} value='{{OldAsset}}'{{/OldAsset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SwitchingPlan'>SwitchingPlan: </label><div class='col-sm-8'><input id='{{id}}_SwitchingPlan' class='form-control' type='text'{{#SwitchingPlan}} value='{{SwitchingPlan}}'{{/SwitchingPlan}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WorkTask" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_instruction").value; if ("" != temp) obj.instruction = temp;
                temp = document.getElementById (id + "_schedOverride").value; if ("" != temp) obj.schedOverride = temp;
                temp = document.getElementById (id + "_taskKind").value; if ("" != temp) { temp = WorkTaskKind[temp]; if ("undefined" != typeof (temp)) obj.taskKind = "http://iec.ch/TC57/2013/CIM-schema-cim16#WorkTaskKind." + temp; }
                temp = document.getElementById (id + "_crewETA").value; if ("" != temp) obj.crewETA = temp;
                temp = document.getElementById (id + "_Crews").value; if ("" != temp) obj.Crews = temp.split (",");
                temp = document.getElementById (id + "_Assets").value; if ("" != temp) obj.Assets = temp.split (",");
                temp = document.getElementById (id + "_Work").value; if ("" != temp) obj.Work = temp;
                temp = document.getElementById (id + "_OldAsset").value; if ("" != temp) obj.OldAsset = temp;
                temp = document.getElementById (id + "_SwitchingPlan").value; if ("" != temp) obj.SwitchingPlan = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Crews", "0..*", "0..*", "Crew", "WorkTasks"],
                            ["Assets", "0..*", "0..*", "Asset", "WorkTasks"],
                            ["Work", "1", "0..*", "Work", "WorkTasks"],
                            ["MaterialItems", "0..*", "0..1", "MaterialItem", "WorkTask"],
                            ["OldAsset", "0..1", "0..*", "Asset", "ReplacementWorkTasks"],
                            ["SwitchingPlan", "0..1", "0..*", "SwitchingPlan", "WorkTasks"]
                        ]
                    )
                );
            }
        }

        /**
         * Document used to request, initiate, track and record work.
         *
         */
        class Work extends BaseWork
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Work;
                if (null == bucket)
                   cim_data.Work = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Work[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = BaseWork.prototype.parse.call (this, context, sub);
                obj.cls = "Work";
                base.parse_element (/<cim:Work.requestDateTime>([\s\S]*?)<\/cim:Work.requestDateTime>/g, obj, "requestDateTime", base.to_datetime, sub, context);
                base.parse_attributes (/<cim:Work.Appointments\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Appointments", sub, context);
                base.parse_attributes (/<cim:Work.Designs\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Designs", sub, context);
                base.parse_attributes (/<cim:Work.Customers\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Customers", sub, context);
                base.parse_attributes (/<cim:Work.WorkFlowSteps\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkFlowSteps", sub, context);
                base.parse_attribute (/<cim:Work.WorkBillingInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkBillingInfo", sub, context);
                base.parse_attribute (/<cim:Work.Project\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Project", sub, context);
                base.parse_attributes (/<cim:Work.WorkTasks\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkTasks", sub, context);
                base.parse_attributes (/<cim:Work.Incidents\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Incidents", sub, context);
                base.parse_attribute (/<cim:Work.BusinessCase\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BusinessCase", sub, context);
                base.parse_attributes (/<cim:Work.WorkCostDetails\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkCostDetails", sub, context);
                base.parse_attribute (/<cim:Work.ErpProjectAccounting\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpProjectAccounting", sub, context);
                var bucket = context.parsed.Work;
                if (null == bucket)
                   context.parsed.Work = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = BaseWork.prototype.export.call (this, obj, false);

                base.export_element (obj, "Work", "requestDateTime", "requestDateTime",  base.from_datetime, fields);
                base.export_attributes (obj, "Work", "Appointments", "Appointments", fields);
                base.export_attributes (obj, "Work", "Designs", "Designs", fields);
                base.export_attributes (obj, "Work", "Customers", "Customers", fields);
                base.export_attributes (obj, "Work", "WorkFlowSteps", "WorkFlowSteps", fields);
                base.export_attribute (obj, "Work", "WorkBillingInfo", "WorkBillingInfo", fields);
                base.export_attribute (obj, "Work", "Project", "Project", fields);
                base.export_attributes (obj, "Work", "WorkTasks", "WorkTasks", fields);
                base.export_attributes (obj, "Work", "Incidents", "Incidents", fields);
                base.export_attribute (obj, "Work", "BusinessCase", "BusinessCase", fields);
                base.export_attributes (obj, "Work", "WorkCostDetails", "WorkCostDetails", fields);
                base.export_attribute (obj, "Work", "ErpProjectAccounting", "ErpProjectAccounting", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Work_collapse" aria-expanded="true" aria-controls="Work_collapse" style="margin-left: 10px;">Work</a></legend>
                    <div id="Work_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + BaseWork.prototype.template.call (this) +
                    `
                    {{#requestDateTime}}<div><b>requestDateTime</b>: {{requestDateTime}}</div>{{/requestDateTime}}
                    {{#Appointments}}<div><b>Appointments</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Appointments}}
                    {{#Designs}}<div><b>Designs</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Designs}}
                    {{#Customers}}<div><b>Customers</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Customers}}
                    {{#WorkFlowSteps}}<div><b>WorkFlowSteps</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/WorkFlowSteps}}
                    {{#WorkBillingInfo}}<div><b>WorkBillingInfo</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WorkBillingInfo}}&quot;);}); return false;'>{{WorkBillingInfo}}</a></div>{{/WorkBillingInfo}}
                    {{#Project}}<div><b>Project</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Project}}&quot;);}); return false;'>{{Project}}</a></div>{{/Project}}
                    {{#WorkTasks}}<div><b>WorkTasks</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/WorkTasks}}
                    {{#Incidents}}<div><b>Incidents</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Incidents}}
                    {{#BusinessCase}}<div><b>BusinessCase</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{BusinessCase}}&quot;);}); return false;'>{{BusinessCase}}</a></div>{{/BusinessCase}}
                    {{#WorkCostDetails}}<div><b>WorkCostDetails</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/WorkCostDetails}}
                    {{#ErpProjectAccounting}}<div><b>ErpProjectAccounting</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpProjectAccounting}}&quot;);}); return false;'>{{ErpProjectAccounting}}</a></div>{{/ErpProjectAccounting}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Appointments) obj.Appointments_string = obj.Appointments.join ();
                if (obj.Designs) obj.Designs_string = obj.Designs.join ();
                if (obj.Customers) obj.Customers_string = obj.Customers.join ();
                if (obj.WorkFlowSteps) obj.WorkFlowSteps_string = obj.WorkFlowSteps.join ();
                if (obj.WorkTasks) obj.WorkTasks_string = obj.WorkTasks.join ();
                if (obj.Incidents) obj.Incidents_string = obj.Incidents.join ();
                if (obj.WorkCostDetails) obj.WorkCostDetails_string = obj.WorkCostDetails.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Appointments_string;
                delete obj.Designs_string;
                delete obj.Customers_string;
                delete obj.WorkFlowSteps_string;
                delete obj.WorkTasks_string;
                delete obj.Incidents_string;
                delete obj.WorkCostDetails_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Work_collapse" aria-expanded="true" aria-controls="{{id}}_Work_collapse" style="margin-left: 10px;">Work</a></legend>
                    <div id="{{id}}_Work_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + BaseWork.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_requestDateTime'>requestDateTime: </label><div class='col-sm-8'><input id='{{id}}_requestDateTime' class='form-control' type='text'{{#requestDateTime}} value='{{requestDateTime}}'{{/requestDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Appointments'>Appointments: </label><div class='col-sm-8'><input id='{{id}}_Appointments' class='form-control' type='text'{{#Appointments}} value='{{Appointments_string}}'{{/Appointments}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Customers'>Customers: </label><div class='col-sm-8'><input id='{{id}}_Customers' class='form-control' type='text'{{#Customers}} value='{{Customers_string}}'{{/Customers}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WorkBillingInfo'>WorkBillingInfo: </label><div class='col-sm-8'><input id='{{id}}_WorkBillingInfo' class='form-control' type='text'{{#WorkBillingInfo}} value='{{WorkBillingInfo}}'{{/WorkBillingInfo}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Project'>Project: </label><div class='col-sm-8'><input id='{{id}}_Project' class='form-control' type='text'{{#Project}} value='{{Project}}'{{/Project}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Incidents'>Incidents: </label><div class='col-sm-8'><input id='{{id}}_Incidents' class='form-control' type='text'{{#Incidents}} value='{{Incidents_string}}'{{/Incidents}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BusinessCase'>BusinessCase: </label><div class='col-sm-8'><input id='{{id}}_BusinessCase' class='form-control' type='text'{{#BusinessCase}} value='{{BusinessCase}}'{{/BusinessCase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WorkCostDetails'>WorkCostDetails: </label><div class='col-sm-8'><input id='{{id}}_WorkCostDetails' class='form-control' type='text'{{#WorkCostDetails}} value='{{WorkCostDetails_string}}'{{/WorkCostDetails}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpProjectAccounting'>ErpProjectAccounting: </label><div class='col-sm-8'><input id='{{id}}_ErpProjectAccounting' class='form-control' type='text'{{#ErpProjectAccounting}} value='{{ErpProjectAccounting}}'{{/ErpProjectAccounting}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Work" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_requestDateTime").value; if ("" != temp) obj.requestDateTime = temp;
                temp = document.getElementById (id + "_Appointments").value; if ("" != temp) obj.Appointments = temp.split (",");
                temp = document.getElementById (id + "_Customers").value; if ("" != temp) obj.Customers = temp.split (",");
                temp = document.getElementById (id + "_WorkBillingInfo").value; if ("" != temp) obj.WorkBillingInfo = temp;
                temp = document.getElementById (id + "_Project").value; if ("" != temp) obj.Project = temp;
                temp = document.getElementById (id + "_Incidents").value; if ("" != temp) obj.Incidents = temp.split (",");
                temp = document.getElementById (id + "_BusinessCase").value; if ("" != temp) obj.BusinessCase = temp;
                temp = document.getElementById (id + "_WorkCostDetails").value; if ("" != temp) obj.WorkCostDetails = temp.split (",");
                temp = document.getElementById (id + "_ErpProjectAccounting").value; if ("" != temp) obj.ErpProjectAccounting = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Appointments", "0..*", "0..*", "Appointment", "Works"],
                            ["Designs", "0..*", "0..1", "Design", "Work"],
                            ["Customers", "0..*", "0..*", "Customer", "Works"],
                            ["WorkFlowSteps", "0..*", "0..1", "WorkFlowStep", "Work"],
                            ["WorkBillingInfo", "0..1", "0..*", "WorkBillingInfo", "Works"],
                            ["Project", "0..1", "0..*", "Project", "Works"],
                            ["WorkTasks", "0..*", "1", "WorkTask", "Work"],
                            ["Incidents", "0..*", "0..*", "Incident", "Works"],
                            ["BusinessCase", "0..1", "0..*", "BusinessCase", "Works"],
                            ["WorkCostDetails", "0..*", "0..*", "WorkCostDetail", "Works"],
                            ["ErpProjectAccounting", "0..1", "0..*", "ErpProjectAccounting", "Works"]
                        ]
                    )
                );
            }
        }

        /**
         * Location where to perform maintenance work.
         *
         */
        class MaintenanceLocation extends WorkLocation
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.MaintenanceLocation;
                if (null == bucket)
                   cim_data.MaintenanceLocation = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MaintenanceLocation[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkLocation.prototype.parse.call (this, context, sub);
                obj.cls = "MaintenanceLocation";
                base.parse_element (/<cim:MaintenanceLocation.block>([\s\S]*?)<\/cim:MaintenanceLocation.block>/g, obj, "block", base.to_string, sub, context);
                base.parse_element (/<cim:MaintenanceLocation.lot>([\s\S]*?)<\/cim:MaintenanceLocation.lot>/g, obj, "lot", base.to_string, sub, context);
                base.parse_element (/<cim:MaintenanceLocation.nearestIntersection>([\s\S]*?)<\/cim:MaintenanceLocation.nearestIntersection>/g, obj, "nearestIntersection", base.to_string, sub, context);
                base.parse_element (/<cim:MaintenanceLocation.subdivision>([\s\S]*?)<\/cim:MaintenanceLocation.subdivision>/g, obj, "subdivision", base.to_string, sub, context);
                var bucket = context.parsed.MaintenanceLocation;
                if (null == bucket)
                   context.parsed.MaintenanceLocation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkLocation.prototype.export.call (this, obj, false);

                base.export_element (obj, "MaintenanceLocation", "block", "block",  base.from_string, fields);
                base.export_element (obj, "MaintenanceLocation", "lot", "lot",  base.from_string, fields);
                base.export_element (obj, "MaintenanceLocation", "nearestIntersection", "nearestIntersection",  base.from_string, fields);
                base.export_element (obj, "MaintenanceLocation", "subdivision", "subdivision",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MaintenanceLocation_collapse" aria-expanded="true" aria-controls="MaintenanceLocation_collapse" style="margin-left: 10px;">MaintenanceLocation</a></legend>
                    <div id="MaintenanceLocation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkLocation.prototype.template.call (this) +
                    `
                    {{#block}}<div><b>block</b>: {{block}}</div>{{/block}}
                    {{#lot}}<div><b>lot</b>: {{lot}}</div>{{/lot}}
                    {{#nearestIntersection}}<div><b>nearestIntersection</b>: {{nearestIntersection}}</div>{{/nearestIntersection}}
                    {{#subdivision}}<div><b>subdivision</b>: {{subdivision}}</div>{{/subdivision}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MaintenanceLocation_collapse" aria-expanded="true" aria-controls="{{id}}_MaintenanceLocation_collapse" style="margin-left: 10px;">MaintenanceLocation</a></legend>
                    <div id="{{id}}_MaintenanceLocation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkLocation.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_block'>block: </label><div class='col-sm-8'><input id='{{id}}_block' class='form-control' type='text'{{#block}} value='{{block}}'{{/block}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lot'>lot: </label><div class='col-sm-8'><input id='{{id}}_lot' class='form-control' type='text'{{#lot}} value='{{lot}}'{{/lot}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_nearestIntersection'>nearestIntersection: </label><div class='col-sm-8'><input id='{{id}}_nearestIntersection' class='form-control' type='text'{{#nearestIntersection}} value='{{nearestIntersection}}'{{/nearestIntersection}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_subdivision'>subdivision: </label><div class='col-sm-8'><input id='{{id}}_subdivision' class='form-control' type='text'{{#subdivision}} value='{{subdivision}}'{{/subdivision}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "MaintenanceLocation" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_block").value; if ("" != temp) obj.block = temp;
                temp = document.getElementById (id + "_lot").value; if ("" != temp) obj.lot = temp;
                temp = document.getElementById (id + "_nearestIntersection").value; if ("" != temp) obj.nearestIntersection = temp;
                temp = document.getElementById (id + "_subdivision").value; if ("" != temp) obj.subdivision = temp;

                return (obj);
            }
        }

        /**
         * Vehicle asset.
         *
         */
        class Vehicle extends WorkAsset
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Vehicle;
                if (null == bucket)
                   cim_data.Vehicle = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Vehicle[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkAsset.prototype.parse.call (this, context, sub);
                obj.cls = "Vehicle";
                base.parse_element (/<cim:Vehicle.odometerReadDateTime>([\s\S]*?)<\/cim:Vehicle.odometerReadDateTime>/g, obj, "odometerReadDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:Vehicle.odometerReading>([\s\S]*?)<\/cim:Vehicle.odometerReading>/g, obj, "odometerReading", base.to_string, sub, context);
                base.parse_attribute (/<cim:Vehicle.usageKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "usageKind", sub, context);
                var bucket = context.parsed.Vehicle;
                if (null == bucket)
                   context.parsed.Vehicle = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkAsset.prototype.export.call (this, obj, false);

                base.export_element (obj, "Vehicle", "odometerReadDateTime", "odometerReadDateTime",  base.from_datetime, fields);
                base.export_element (obj, "Vehicle", "odometerReading", "odometerReading",  base.from_string, fields);
                base.export_attribute (obj, "Vehicle", "usageKind", "usageKind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Vehicle_collapse" aria-expanded="true" aria-controls="Vehicle_collapse" style="margin-left: 10px;">Vehicle</a></legend>
                    <div id="Vehicle_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkAsset.prototype.template.call (this) +
                    `
                    {{#odometerReadDateTime}}<div><b>odometerReadDateTime</b>: {{odometerReadDateTime}}</div>{{/odometerReadDateTime}}
                    {{#odometerReading}}<div><b>odometerReading</b>: {{odometerReading}}</div>{{/odometerReading}}
                    {{#usageKind}}<div><b>usageKind</b>: {{usageKind}}</div>{{/usageKind}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.VehicleUsageKind = []; if (!obj.usageKind) obj.VehicleUsageKind.push ({ id: '', selected: true}); for (var property in VehicleUsageKind) obj.VehicleUsageKind.push ({ id: property, selected: obj.usageKind && obj.usageKind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.VehicleUsageKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Vehicle_collapse" aria-expanded="true" aria-controls="{{id}}_Vehicle_collapse" style="margin-left: 10px;">Vehicle</a></legend>
                    <div id="{{id}}_Vehicle_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkAsset.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_odometerReadDateTime'>odometerReadDateTime: </label><div class='col-sm-8'><input id='{{id}}_odometerReadDateTime' class='form-control' type='text'{{#odometerReadDateTime}} value='{{odometerReadDateTime}}'{{/odometerReadDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_odometerReading'>odometerReading: </label><div class='col-sm-8'><input id='{{id}}_odometerReading' class='form-control' type='text'{{#odometerReading}} value='{{odometerReading}}'{{/odometerReading}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_usageKind'>usageKind: </label><div class='col-sm-8'><select id='{{id}}_usageKind' class='form-control custom-select'>{{#VehicleUsageKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/VehicleUsageKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Vehicle" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_odometerReadDateTime").value; if ("" != temp) obj.odometerReadDateTime = temp;
                temp = document.getElementById (id + "_odometerReading").value; if ("" != temp) obj.odometerReading = temp;
                temp = document.getElementById (id + "_usageKind").value; if ("" != temp) { temp = VehicleUsageKind[temp]; if ("undefined" != typeof (temp)) obj.usageKind = "http://iec.ch/TC57/2013/CIM-schema-cim16#VehicleUsageKind." + temp; }

                return (obj);
            }
        }

        /**
         * Tool asset.
         *
         */
        class Tool extends WorkAsset
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Tool;
                if (null == bucket)
                   cim_data.Tool = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Tool[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkAsset.prototype.parse.call (this, context, sub);
                obj.cls = "Tool";
                base.parse_element (/<cim:Tool.lastCalibrationDate>([\s\S]*?)<\/cim:Tool.lastCalibrationDate>/g, obj, "lastCalibrationDate", base.to_string, sub, context);
                var bucket = context.parsed.Tool;
                if (null == bucket)
                   context.parsed.Tool = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkAsset.prototype.export.call (this, obj, false);

                base.export_element (obj, "Tool", "lastCalibrationDate", "lastCalibrationDate",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Tool_collapse" aria-expanded="true" aria-controls="Tool_collapse" style="margin-left: 10px;">Tool</a></legend>
                    <div id="Tool_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkAsset.prototype.template.call (this) +
                    `
                    {{#lastCalibrationDate}}<div><b>lastCalibrationDate</b>: {{lastCalibrationDate}}</div>{{/lastCalibrationDate}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Tool_collapse" aria-expanded="true" aria-controls="{{id}}_Tool_collapse" style="margin-left: 10px;">Tool</a></legend>
                    <div id="{{id}}_Tool_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkAsset.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lastCalibrationDate'>lastCalibrationDate: </label><div class='col-sm-8'><input id='{{id}}_lastCalibrationDate' class='form-control' type='text'{{#lastCalibrationDate}} value='{{lastCalibrationDate}}'{{/lastCalibrationDate}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Tool" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_lastCalibrationDate").value; if ("" != temp) obj.lastCalibrationDate = temp;

                return (obj);
            }
        }

        return (
            {
                Tool: Tool,
                Work: Work,
                Vehicle: Vehicle,
                WorkAsset: WorkAsset,
                WorkTimeSchedule: WorkTimeSchedule,
                MaintenanceLocation: MaintenanceLocation,
                WorkLocation: WorkLocation,
                MaterialItem: MaterialItem,
                WorkTask: WorkTask,
                BaseWork: BaseWork
            }
        );
    }
);