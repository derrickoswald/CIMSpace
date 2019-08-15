define
(
    ["model/base", "model/Common", "model/Core"],
    /**
     * This package contains the core information classes that support operations and outage management applications.
     *
     */
    function (base, Common, Core)
    {

        /**
         * Kind of action on tag.
         *
         */
        let TagActionKind =
        {
            "place": "place",
            "remove": "remove",
            "verify": "verify"
        };
        Object.freeze (TagActionKind);

        /**
         * This enumeration describes the primary cause of the outage - planned, unplanned, etc.
         *
         */
        let OutageCauseKind =
        {
            "lightingStrike": "lightingStrike",
            "animal": "animal",
            "lineDown": "lineDown",
            "poleDown": "poleDown",
            "treeDown": "treeDown"
        };
        Object.freeze (OutageCauseKind);

        /**
         * Type of clearance action.
         *
         */
        let ClearanceActionKind =
        {
            "issue": "issue",
            "update": "update",
            "release": "release"
        };
        Object.freeze (ClearanceActionKind);

        /**
         * Kind of action on temporary equipment (such as cut, jumper, ground, energy source).
         *
         */
        let TempEquipActionKind =
        {
            "place": "place",
            "remove": "remove"
        };
        Object.freeze (TempEquipActionKind);

        /**
         * Enumeration for the type of area defined; e.g., county, state, parish, zipcode, etc.
         *
         */
        let AreaKind =
        {
            "borough": "borough",
            "county": "county",
            "parish": "parish",
            "serviceArea": "serviceArea",
            "state": "state",
            "township": "township",
            "ward": "ward",
            "zipcode": "zipcode"
        };
        Object.freeze (AreaKind);

        /**
         * The estimated time of restoration can have a confidence factor applied such as high or low confidence that the ERT will be accomplished.
         *
         * This confidence factor may be updated as needed during the outage period - just as the actual ERT can be updated.
         *
         */
        let ERTConfidenceKind =
        {
            "high": "high",
            "low": "low"
        };
        Object.freeze (ERTConfidenceKind);

        /**
         * This defines if the outage have been predicted or confirmed
         *
         */
        let OutageStatusKind =
        {
            "confirmed": "confirmed",
            "predicted": "predicted",
            "partiallyRestored": "partiallyRestored",
            "restored": "restored",
            "closed": "closed"
        };
        Object.freeze (OutageStatusKind);

        /**
         * Kind of action on switch.
         *
         */
        let SwitchActionKind =
        {
            "open": "open",
            "close": "close",
            "disableReclosing": "disableReclosing",
            "enableReclosing": "enableReclosing"
        };
        Object.freeze (SwitchActionKind);

        /**
         * Kind of power system resource event.
         *
         */
        let PSREventKind =
        {
            "inService": "inService",
            "outOfService": "outOfService",
            "pendingAdd": "pendingAdd",
            "pendingRemove": "pendingRemove",
            "pendingReplace": "pendingReplace",
            "other": "other",
            "unknown": "unknown"
        };
        Object.freeze (PSREventKind);

        /**
         * Event indicating the completion (success or fail) of any switching action (jumper action, cut action, tag action, etc).
         *
         * The switching action may or may not be a consequential event in response to a request to complete the action.
         *
         */
        class SwitchingEvent extends Common.ActivityRecord
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SwitchingEvent;
                if (null == bucket)
                   cim_data.SwitchingEvent = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SwitchingEvent[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.ActivityRecord.prototype.parse.call (this, context, sub);
                obj.cls = "SwitchingEvent";
                base.parse_attribute (/<cim:SwitchingEvent.SwitchingAction\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingAction", sub, context);
                let bucket = context.parsed.SwitchingEvent;
                if (null == bucket)
                   context.parsed.SwitchingEvent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.ActivityRecord.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "SwitchingEvent", "SwitchingAction", "SwitchingAction", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SwitchingEvent_collapse" aria-expanded="true" aria-controls="SwitchingEvent_collapse" style="margin-left: 10px;">SwitchingEvent</a></legend>
                    <div id="SwitchingEvent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.ActivityRecord.prototype.template.call (this) +
                    `
                    {{#SwitchingAction}}<div><b>SwitchingAction</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{SwitchingAction}}");}); return false;'>{{SwitchingAction}}</a></div>{{/SwitchingAction}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SwitchingEvent_collapse" aria-expanded="true" aria-controls="{{id}}_SwitchingEvent_collapse" style="margin-left: 10px;">SwitchingEvent</a></legend>
                    <div id="{{id}}_SwitchingEvent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.ActivityRecord.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SwitchingAction'>SwitchingAction: </label><div class='col-sm-8'><input id='{{id}}_SwitchingAction' class='form-control' type='text'{{#SwitchingAction}} value='{{SwitchingAction}}'{{/SwitchingAction}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SwitchingEvent" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_SwitchingAction").value; if ("" !== temp) obj["SwitchingAction"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["SwitchingAction", "1", "0..1", "SwitchingAction", "SwitchingEvent"]
                        ]
                    )
                );
            }
        }

        /**
         * Trouble order sends an incident to a crew to initiate a response to an unplanned outage.
         *
         */
        class TroubleOrder extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.TroubleOrder;
                if (null == bucket)
                   cim_data.TroubleOrder = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TroubleOrder[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "TroubleOrder";
                base.parse_element (/<cim:TroubleOrder.comment>([\s\S]*?)<\/cim:TroubleOrder.comment>/g, obj, "comment", base.to_string, sub, context);
                base.parse_attribute (/<cim:TroubleOrder.plannedExecutionInterval\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "plannedExecutionInterval", sub, context);
                base.parse_attribute (/<cim:TroubleOrder.Incident\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Incident", sub, context);
                base.parse_attribute (/<cim:TroubleOrder.Location\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Location", sub, context);
                let bucket = context.parsed.TroubleOrder;
                if (null == bucket)
                   context.parsed.TroubleOrder = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "TroubleOrder", "comment", "comment",  base.from_string, fields);
                base.export_attribute (obj, "TroubleOrder", "plannedExecutionInterval", "plannedExecutionInterval", fields);
                base.export_attribute (obj, "TroubleOrder", "Incident", "Incident", fields);
                base.export_attribute (obj, "TroubleOrder", "Location", "Location", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TroubleOrder_collapse" aria-expanded="true" aria-controls="TroubleOrder_collapse" style="margin-left: 10px;">TroubleOrder</a></legend>
                    <div id="TroubleOrder_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#comment}}<div><b>comment</b>: {{comment}}</div>{{/comment}}
                    {{#plannedExecutionInterval}}<div><b>plannedExecutionInterval</b>: {{plannedExecutionInterval}}</div>{{/plannedExecutionInterval}}
                    {{#Incident}}<div><b>Incident</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Incident}}");}); return false;'>{{Incident}}</a></div>{{/Incident}}
                    {{#Location}}<div><b>Location</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Location}}");}); return false;'>{{Location}}</a></div>{{/Location}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TroubleOrder_collapse" aria-expanded="true" aria-controls="{{id}}_TroubleOrder_collapse" style="margin-left: 10px;">TroubleOrder</a></legend>
                    <div id="{{id}}_TroubleOrder_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_comment'>comment: </label><div class='col-sm-8'><input id='{{id}}_comment' class='form-control' type='text'{{#comment}} value='{{comment}}'{{/comment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_plannedExecutionInterval'>plannedExecutionInterval: </label><div class='col-sm-8'><input id='{{id}}_plannedExecutionInterval' class='form-control' type='text'{{#plannedExecutionInterval}} value='{{plannedExecutionInterval}}'{{/plannedExecutionInterval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Incident'>Incident: </label><div class='col-sm-8'><input id='{{id}}_Incident' class='form-control' type='text'{{#Incident}} value='{{Incident}}'{{/Incident}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Location'>Location: </label><div class='col-sm-8'><input id='{{id}}_Location' class='form-control' type='text'{{#Location}} value='{{Location}}'{{/Location}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "TroubleOrder" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_comment").value; if ("" !== temp) obj["comment"] = temp;
                temp = document.getElementById (id + "_plannedExecutionInterval").value; if ("" !== temp) obj["plannedExecutionInterval"] = temp;
                temp = document.getElementById (id + "_Incident").value; if ("" !== temp) obj["Incident"] = temp;
                temp = document.getElementById (id + "_Location").value; if ("" !== temp) obj["Location"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Incident", "0..1", "0..1", "Incident", "TroubleOrder"],
                            ["Location", "0..1", "0..1", "Location", "TroubleOrder"]
                        ]
                    )
                );
            }
        }

        /**
         * A sequence of grouped or atomic steps intended to:
         * - de-energise equipment or part of the network for safe work, and/or
         *
         * - bring back in service previously de-energised equipment or part of the network.
         *
         */
        class SwitchingPlan extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SwitchingPlan;
                if (null == bucket)
                   cim_data.SwitchingPlan = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SwitchingPlan[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "SwitchingPlan";
                base.parse_element (/<cim:SwitchingPlan.rank>([\s\S]*?)<\/cim:SwitchingPlan.rank>/g, obj, "rank", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchingPlan.purpose>([\s\S]*?)<\/cim:SwitchingPlan.purpose>/g, obj, "purpose", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchingPlan.approvedDateTime>([\s\S]*?)<\/cim:SwitchingPlan.approvedDateTime>/g, obj, "approvedDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:SwitchingPlan.cancelledDateTime>([\s\S]*?)<\/cim:SwitchingPlan.cancelledDateTime>/g, obj, "cancelledDateTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:SwitchingPlan.plannedPeriod\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "plannedPeriod", sub, context);
                base.parse_attribute (/<cim:SwitchingPlan.SwitchingOrder\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingOrder", sub, context);
                base.parse_attribute (/<cim:SwitchingPlan.Outage\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Outage", sub, context);
                base.parse_attributes (/<cim:SwitchingPlan.WorkTasks\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkTasks", sub, context);
                base.parse_attributes (/<cim:SwitchingPlan.SafetyDocuments\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SafetyDocuments", sub, context);
                base.parse_attribute (/<cim:SwitchingPlan.OutagePlan\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OutagePlan", sub, context);
                base.parse_attributes (/<cim:SwitchingPlan.SwitchingStepGroups\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroups", sub, context);
                base.parse_attribute (/<cim:SwitchingPlan.SwitchingPlanRequest\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingPlanRequest", sub, context);
                let bucket = context.parsed.SwitchingPlan;
                if (null == bucket)
                   context.parsed.SwitchingPlan = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "SwitchingPlan", "rank", "rank",  base.from_string, fields);
                base.export_element (obj, "SwitchingPlan", "purpose", "purpose",  base.from_string, fields);
                base.export_element (obj, "SwitchingPlan", "approvedDateTime", "approvedDateTime",  base.from_datetime, fields);
                base.export_element (obj, "SwitchingPlan", "cancelledDateTime", "cancelledDateTime",  base.from_datetime, fields);
                base.export_attribute (obj, "SwitchingPlan", "plannedPeriod", "plannedPeriod", fields);
                base.export_attribute (obj, "SwitchingPlan", "SwitchingOrder", "SwitchingOrder", fields);
                base.export_attribute (obj, "SwitchingPlan", "Outage", "Outage", fields);
                base.export_attributes (obj, "SwitchingPlan", "WorkTasks", "WorkTasks", fields);
                base.export_attributes (obj, "SwitchingPlan", "SafetyDocuments", "SafetyDocuments", fields);
                base.export_attribute (obj, "SwitchingPlan", "OutagePlan", "OutagePlan", fields);
                base.export_attributes (obj, "SwitchingPlan", "SwitchingStepGroups", "SwitchingStepGroups", fields);
                base.export_attribute (obj, "SwitchingPlan", "SwitchingPlanRequest", "SwitchingPlanRequest", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SwitchingPlan_collapse" aria-expanded="true" aria-controls="SwitchingPlan_collapse" style="margin-left: 10px;">SwitchingPlan</a></legend>
                    <div id="SwitchingPlan_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#rank}}<div><b>rank</b>: {{rank}}</div>{{/rank}}
                    {{#purpose}}<div><b>purpose</b>: {{purpose}}</div>{{/purpose}}
                    {{#approvedDateTime}}<div><b>approvedDateTime</b>: {{approvedDateTime}}</div>{{/approvedDateTime}}
                    {{#cancelledDateTime}}<div><b>cancelledDateTime</b>: {{cancelledDateTime}}</div>{{/cancelledDateTime}}
                    {{#plannedPeriod}}<div><b>plannedPeriod</b>: {{plannedPeriod}}</div>{{/plannedPeriod}}
                    {{#SwitchingOrder}}<div><b>SwitchingOrder</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{SwitchingOrder}}");}); return false;'>{{SwitchingOrder}}</a></div>{{/SwitchingOrder}}
                    {{#Outage}}<div><b>Outage</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Outage}}");}); return false;'>{{Outage}}</a></div>{{/Outage}}
                    {{#WorkTasks}}<div><b>WorkTasks</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/WorkTasks}}
                    {{#SafetyDocuments}}<div><b>SafetyDocuments</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/SafetyDocuments}}
                    {{#OutagePlan}}<div><b>OutagePlan</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{OutagePlan}}");}); return false;'>{{OutagePlan}}</a></div>{{/OutagePlan}}
                    {{#SwitchingStepGroups}}<div><b>SwitchingStepGroups</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/SwitchingStepGroups}}
                    {{#SwitchingPlanRequest}}<div><b>SwitchingPlanRequest</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{SwitchingPlanRequest}}");}); return false;'>{{SwitchingPlanRequest}}</a></div>{{/SwitchingPlanRequest}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["WorkTasks"]) obj["WorkTasks_string"] = obj["WorkTasks"].join ();
                if (obj["SafetyDocuments"]) obj["SafetyDocuments_string"] = obj["SafetyDocuments"].join ();
                if (obj["SwitchingStepGroups"]) obj["SwitchingStepGroups_string"] = obj["SwitchingStepGroups"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["WorkTasks_string"];
                delete obj["SafetyDocuments_string"];
                delete obj["SwitchingStepGroups_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SwitchingPlan_collapse" aria-expanded="true" aria-controls="{{id}}_SwitchingPlan_collapse" style="margin-left: 10px;">SwitchingPlan</a></legend>
                    <div id="{{id}}_SwitchingPlan_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rank'>rank: </label><div class='col-sm-8'><input id='{{id}}_rank' class='form-control' type='text'{{#rank}} value='{{rank}}'{{/rank}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_purpose'>purpose: </label><div class='col-sm-8'><input id='{{id}}_purpose' class='form-control' type='text'{{#purpose}} value='{{purpose}}'{{/purpose}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_approvedDateTime'>approvedDateTime: </label><div class='col-sm-8'><input id='{{id}}_approvedDateTime' class='form-control' type='text'{{#approvedDateTime}} value='{{approvedDateTime}}'{{/approvedDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cancelledDateTime'>cancelledDateTime: </label><div class='col-sm-8'><input id='{{id}}_cancelledDateTime' class='form-control' type='text'{{#cancelledDateTime}} value='{{cancelledDateTime}}'{{/cancelledDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_plannedPeriod'>plannedPeriod: </label><div class='col-sm-8'><input id='{{id}}_plannedPeriod' class='form-control' type='text'{{#plannedPeriod}} value='{{plannedPeriod}}'{{/plannedPeriod}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SwitchingOrder'>SwitchingOrder: </label><div class='col-sm-8'><input id='{{id}}_SwitchingOrder' class='form-control' type='text'{{#SwitchingOrder}} value='{{SwitchingOrder}}'{{/SwitchingOrder}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Outage'>Outage: </label><div class='col-sm-8'><input id='{{id}}_Outage' class='form-control' type='text'{{#Outage}} value='{{Outage}}'{{/Outage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OutagePlan'>OutagePlan: </label><div class='col-sm-8'><input id='{{id}}_OutagePlan' class='form-control' type='text'{{#OutagePlan}} value='{{OutagePlan}}'{{/OutagePlan}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SwitchingPlanRequest'>SwitchingPlanRequest: </label><div class='col-sm-8'><input id='{{id}}_SwitchingPlanRequest' class='form-control' type='text'{{#SwitchingPlanRequest}} value='{{SwitchingPlanRequest}}'{{/SwitchingPlanRequest}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SwitchingPlan" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_rank").value; if ("" !== temp) obj["rank"] = temp;
                temp = document.getElementById (id + "_purpose").value; if ("" !== temp) obj["purpose"] = temp;
                temp = document.getElementById (id + "_approvedDateTime").value; if ("" !== temp) obj["approvedDateTime"] = temp;
                temp = document.getElementById (id + "_cancelledDateTime").value; if ("" !== temp) obj["cancelledDateTime"] = temp;
                temp = document.getElementById (id + "_plannedPeriod").value; if ("" !== temp) obj["plannedPeriod"] = temp;
                temp = document.getElementById (id + "_SwitchingOrder").value; if ("" !== temp) obj["SwitchingOrder"] = temp;
                temp = document.getElementById (id + "_Outage").value; if ("" !== temp) obj["Outage"] = temp;
                temp = document.getElementById (id + "_OutagePlan").value; if ("" !== temp) obj["OutagePlan"] = temp;
                temp = document.getElementById (id + "_SwitchingPlanRequest").value; if ("" !== temp) obj["SwitchingPlanRequest"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["SwitchingOrder", "0..1", "0..1", "SwitchingOrder", "SwitchingPlan"],
                            ["Outage", "0..1", "0..*", "Outage", "SwitchingPlans"],
                            ["WorkTasks", "0..*", "0..1", "WorkTask", "SwitchingPlan"],
                            ["SafetyDocuments", "0..*", "0..1", "SafetyDocument", "SwitchingPlan"],
                            ["OutagePlan", "0..1", "0..1", "OutagePlan", "SwitchingPlan"],
                            ["SwitchingStepGroups", "0..*", "0..1", "SwitchingStepGroup", "SwitchingPlan"],
                            ["SwitchingPlanRequest", "0..1", "0..*", "SwitchingPlanRequest", "SwitchingPlan"]
                        ]
                    )
                );
            }
        }

        /**
         * Summary counts of service points affected by an outage.
         *
         * These counts are sometimes referred to as total and critical customer count.
         *
         */
        class ServicePointOutageSummary extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ServicePointOutageSummary;
                if (null == bucket)
                   cim_data.ServicePointOutageSummary = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ServicePointOutageSummary[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ServicePointOutageSummary";
                base.parse_element (/<cim:ServicePointOutageSummary.totalCount>([\s\S]*?)<\/cim:ServicePointOutageSummary.totalCount>/g, obj, "totalCount", base.to_string, sub, context);
                base.parse_element (/<cim:ServicePointOutageSummary.criticalCount>([\s\S]*?)<\/cim:ServicePointOutageSummary.criticalCount>/g, obj, "criticalCount", base.to_string, sub, context);
                let bucket = context.parsed.ServicePointOutageSummary;
                if (null == bucket)
                   context.parsed.ServicePointOutageSummary = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "ServicePointOutageSummary", "totalCount", "totalCount",  base.from_string, fields);
                base.export_element (obj, "ServicePointOutageSummary", "criticalCount", "criticalCount",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ServicePointOutageSummary_collapse" aria-expanded="true" aria-controls="ServicePointOutageSummary_collapse" style="margin-left: 10px;">ServicePointOutageSummary</a></legend>
                    <div id="ServicePointOutageSummary_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#totalCount}}<div><b>totalCount</b>: {{totalCount}}</div>{{/totalCount}}
                    {{#criticalCount}}<div><b>criticalCount</b>: {{criticalCount}}</div>{{/criticalCount}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ServicePointOutageSummary_collapse" aria-expanded="true" aria-controls="{{id}}_ServicePointOutageSummary_collapse" style="margin-left: 10px;">ServicePointOutageSummary</a></legend>
                    <div id="{{id}}_ServicePointOutageSummary_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_totalCount'>totalCount: </label><div class='col-sm-8'><input id='{{id}}_totalCount' class='form-control' type='text'{{#totalCount}} value='{{totalCount}}'{{/totalCount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_criticalCount'>criticalCount: </label><div class='col-sm-8'><input id='{{id}}_criticalCount' class='form-control' type='text'{{#criticalCount}} value='{{criticalCount}}'{{/criticalCount}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ServicePointOutageSummary" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_totalCount").value; if ("" !== temp) obj["totalCount"] = temp;
                temp = document.getElementById (id + "_criticalCount").value; if ("" !== temp) obj["criticalCount"] = temp;

                return (obj);
            }
        }

        /**
         * Event recording the change in operational status of a power system resource; may be for an event that has already occurred or for a planned activity.
         *
         */
        class PSREvent extends Common.ActivityRecord
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PSREvent;
                if (null == bucket)
                   cim_data.PSREvent = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PSREvent[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.ActivityRecord.prototype.parse.call (this, context, sub);
                obj.cls = "PSREvent";
                base.parse_attribute (/<cim:PSREvent.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:PSREvent.PowerSystemResource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemResource", sub, context);
                let bucket = context.parsed.PSREvent;
                if (null == bucket)
                   context.parsed.PSREvent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.ActivityRecord.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "PSREvent", "kind", "kind", fields);
                base.export_attribute (obj, "PSREvent", "PowerSystemResource", "PowerSystemResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PSREvent_collapse" aria-expanded="true" aria-controls="PSREvent_collapse" style="margin-left: 10px;">PSREvent</a></legend>
                    <div id="PSREvent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.ActivityRecord.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#PowerSystemResource}}<div><b>PowerSystemResource</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{PowerSystemResource}}");}); return false;'>{{PowerSystemResource}}</a></div>{{/PowerSystemResource}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindPSREventKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in PSREventKind) obj["kindPSREventKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindPSREventKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PSREvent_collapse" aria-expanded="true" aria-controls="{{id}}_PSREvent_collapse" style="margin-left: 10px;">PSREvent</a></legend>
                    <div id="{{id}}_PSREvent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.ActivityRecord.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindPSREventKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindPSREventKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PowerSystemResource'>PowerSystemResource: </label><div class='col-sm-8'><input id='{{id}}_PowerSystemResource' class='form-control' type='text'{{#PowerSystemResource}} value='{{PowerSystemResource}}'{{/PowerSystemResource}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PSREvent" };
                super.submit (id, obj);
                temp = PSREventKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#PSREventKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_PowerSystemResource").value; if ("" !== temp) obj["PowerSystemResource"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PowerSystemResource", "0..1", "0..*", "PowerSystemResource", "PSREvents"]
                        ]
                    )
                );
            }
        }

        /**
         * Operational tag placed on a power system resource or asset in the context of switching plan execution or other work in the field.
         *
         */
        class OperationalTag extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OperationalTag;
                if (null == bucket)
                   cim_data.OperationalTag = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OperationalTag[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "OperationalTag";
                base.parse_attribute (/<cim:OperationalTag.PowerSystemResource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemResource", sub, context);
                base.parse_attribute (/<cim:OperationalTag.Asset\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context);
                base.parse_attribute (/<cim:OperationalTag.TagAction\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TagAction", sub, context);
                let bucket = context.parsed.OperationalTag;
                if (null == bucket)
                   context.parsed.OperationalTag = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "OperationalTag", "PowerSystemResource", "PowerSystemResource", fields);
                base.export_attribute (obj, "OperationalTag", "Asset", "Asset", fields);
                base.export_attribute (obj, "OperationalTag", "TagAction", "TagAction", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OperationalTag_collapse" aria-expanded="true" aria-controls="OperationalTag_collapse" style="margin-left: 10px;">OperationalTag</a></legend>
                    <div id="OperationalTag_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#PowerSystemResource}}<div><b>PowerSystemResource</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{PowerSystemResource}}");}); return false;'>{{PowerSystemResource}}</a></div>{{/PowerSystemResource}}
                    {{#Asset}}<div><b>Asset</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Asset}}");}); return false;'>{{Asset}}</a></div>{{/Asset}}
                    {{#TagAction}}<div><b>TagAction</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{TagAction}}");}); return false;'>{{TagAction}}</a></div>{{/TagAction}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OperationalTag_collapse" aria-expanded="true" aria-controls="{{id}}_OperationalTag_collapse" style="margin-left: 10px;">OperationalTag</a></legend>
                    <div id="{{id}}_OperationalTag_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PowerSystemResource'>PowerSystemResource: </label><div class='col-sm-8'><input id='{{id}}_PowerSystemResource' class='form-control' type='text'{{#PowerSystemResource}} value='{{PowerSystemResource}}'{{/PowerSystemResource}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Asset'>Asset: </label><div class='col-sm-8'><input id='{{id}}_Asset' class='form-control' type='text'{{#Asset}} value='{{Asset}}'{{/Asset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TagAction'>TagAction: </label><div class='col-sm-8'><input id='{{id}}_TagAction' class='form-control' type='text'{{#TagAction}} value='{{TagAction}}'{{/TagAction}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OperationalTag" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_PowerSystemResource").value; if ("" !== temp) obj["PowerSystemResource"] = temp;
                temp = document.getElementById (id + "_Asset").value; if ("" !== temp) obj["Asset"] = temp;
                temp = document.getElementById (id + "_TagAction").value; if ("" !== temp) obj["TagAction"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PowerSystemResource", "0..1", "0..*", "PowerSystemResource", "OperationalTags"],
                            ["Asset", "0..1", "0..*", "Asset", "OperationalTags"],
                            ["TagAction", "0..1", "0..1", "TagAction", "OperationalTag"]
                        ]
                    )
                );
            }
        }

        /**
         * Transmits an outage plan to a crew in order for the planned outage to be executed.
         *
         */
        class OutageOrder extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OutageOrder;
                if (null == bucket)
                   cim_data.OutageOrder = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OutageOrder[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "OutageOrder";
                base.parse_element (/<cim:OutageOrder.comment>([\s\S]*?)<\/cim:OutageOrder.comment>/g, obj, "comment", base.to_string, sub, context);
                base.parse_attributes (/<cim:OutageOrder.Location\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Location", sub, context);
                base.parse_attribute (/<cim:OutageOrder.OutagePlan\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OutagePlan", sub, context);
                let bucket = context.parsed.OutageOrder;
                if (null == bucket)
                   context.parsed.OutageOrder = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "OutageOrder", "comment", "comment",  base.from_string, fields);
                base.export_attributes (obj, "OutageOrder", "Location", "Location", fields);
                base.export_attribute (obj, "OutageOrder", "OutagePlan", "OutagePlan", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OutageOrder_collapse" aria-expanded="true" aria-controls="OutageOrder_collapse" style="margin-left: 10px;">OutageOrder</a></legend>
                    <div id="OutageOrder_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#comment}}<div><b>comment</b>: {{comment}}</div>{{/comment}}
                    {{#Location}}<div><b>Location</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Location}}
                    {{#OutagePlan}}<div><b>OutagePlan</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{OutagePlan}}");}); return false;'>{{OutagePlan}}</a></div>{{/OutagePlan}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Location"]) obj["Location_string"] = obj["Location"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Location_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OutageOrder_collapse" aria-expanded="true" aria-controls="{{id}}_OutageOrder_collapse" style="margin-left: 10px;">OutageOrder</a></legend>
                    <div id="{{id}}_OutageOrder_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_comment'>comment: </label><div class='col-sm-8'><input id='{{id}}_comment' class='form-control' type='text'{{#comment}} value='{{comment}}'{{/comment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OutagePlan'>OutagePlan: </label><div class='col-sm-8'><input id='{{id}}_OutagePlan' class='form-control' type='text'{{#OutagePlan}} value='{{OutagePlan}}'{{/OutagePlan}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OutageOrder" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_comment").value; if ("" !== temp) obj["comment"] = temp;
                temp = document.getElementById (id + "_OutagePlan").value; if ("" !== temp) obj["OutagePlan"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Location", "0..*", "0..1", "Location", "OutageOrder"],
                            ["OutagePlan", "0..1", "0..1", "OutagePlan", "OutageOrder"]
                        ]
                    )
                );
            }
        }

        /**
         * Transmits a switching plan to a crew in order for the plan to be executed.
         *
         */
        class SwitchingOrder extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SwitchingOrder;
                if (null == bucket)
                   cim_data.SwitchingOrder = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SwitchingOrder[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "SwitchingOrder";
                base.parse_element (/<cim:SwitchingOrder.comment>([\s\S]*?)<\/cim:SwitchingOrder.comment>/g, obj, "comment", base.to_string, sub, context);
                base.parse_attribute (/<cim:SwitchingOrder.plannedExecutionInterval\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "plannedExecutionInterval", sub, context);
                base.parse_attribute (/<cim:SwitchingOrder.SwitchingPlan\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingPlan", sub, context);
                base.parse_attributes (/<cim:SwitchingOrder.Location\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Location", sub, context);
                let bucket = context.parsed.SwitchingOrder;
                if (null == bucket)
                   context.parsed.SwitchingOrder = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "SwitchingOrder", "comment", "comment",  base.from_string, fields);
                base.export_attribute (obj, "SwitchingOrder", "plannedExecutionInterval", "plannedExecutionInterval", fields);
                base.export_attribute (obj, "SwitchingOrder", "SwitchingPlan", "SwitchingPlan", fields);
                base.export_attributes (obj, "SwitchingOrder", "Location", "Location", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SwitchingOrder_collapse" aria-expanded="true" aria-controls="SwitchingOrder_collapse" style="margin-left: 10px;">SwitchingOrder</a></legend>
                    <div id="SwitchingOrder_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#comment}}<div><b>comment</b>: {{comment}}</div>{{/comment}}
                    {{#plannedExecutionInterval}}<div><b>plannedExecutionInterval</b>: {{plannedExecutionInterval}}</div>{{/plannedExecutionInterval}}
                    {{#SwitchingPlan}}<div><b>SwitchingPlan</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{SwitchingPlan}}");}); return false;'>{{SwitchingPlan}}</a></div>{{/SwitchingPlan}}
                    {{#Location}}<div><b>Location</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Location}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Location"]) obj["Location_string"] = obj["Location"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Location_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SwitchingOrder_collapse" aria-expanded="true" aria-controls="{{id}}_SwitchingOrder_collapse" style="margin-left: 10px;">SwitchingOrder</a></legend>
                    <div id="{{id}}_SwitchingOrder_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_comment'>comment: </label><div class='col-sm-8'><input id='{{id}}_comment' class='form-control' type='text'{{#comment}} value='{{comment}}'{{/comment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_plannedExecutionInterval'>plannedExecutionInterval: </label><div class='col-sm-8'><input id='{{id}}_plannedExecutionInterval' class='form-control' type='text'{{#plannedExecutionInterval}} value='{{plannedExecutionInterval}}'{{/plannedExecutionInterval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SwitchingPlan'>SwitchingPlan: </label><div class='col-sm-8'><input id='{{id}}_SwitchingPlan' class='form-control' type='text'{{#SwitchingPlan}} value='{{SwitchingPlan}}'{{/SwitchingPlan}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SwitchingOrder" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_comment").value; if ("" !== temp) obj["comment"] = temp;
                temp = document.getElementById (id + "_plannedExecutionInterval").value; if ("" !== temp) obj["plannedExecutionInterval"] = temp;
                temp = document.getElementById (id + "_SwitchingPlan").value; if ("" !== temp) obj["SwitchingPlan"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["SwitchingPlan", "0..1", "0..1", "SwitchingPlan", "SwitchingOrder"],
                            ["Location", "0..*", "0..1", "Location", "SwitchingOrder"]
                        ]
                    )
                );
            }
        }

        /**
         * Atomic switching action.
         *
         */
        class SwitchingAction extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SwitchingAction;
                if (null == bucket)
                   cim_data.SwitchingAction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SwitchingAction[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "SwitchingAction";
                base.parse_element (/<cim:SwitchingAction.isFreeSequence>([\s\S]*?)<\/cim:SwitchingAction.isFreeSequence>/g, obj, "isFreeSequence", base.to_boolean, sub, context);
                base.parse_element (/<cim:SwitchingAction.description>([\s\S]*?)<\/cim:SwitchingAction.description>/g, obj, "description", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchingAction.plannedDateTime>([\s\S]*?)<\/cim:SwitchingAction.plannedDateTime>/g, obj, "plannedDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:SwitchingAction.executedDateTime>([\s\S]*?)<\/cim:SwitchingAction.executedDateTime>/g, obj, "executedDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:SwitchingAction.issuedDateTime>([\s\S]*?)<\/cim:SwitchingAction.issuedDateTime>/g, obj, "issuedDateTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:SwitchingAction.SwitchingStep\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStep", sub, context);
                base.parse_attribute (/<cim:SwitchingAction.Operator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Operator", sub, context);
                base.parse_attributes (/<cim:SwitchingAction.Crew\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Crew", sub, context);
                base.parse_attribute (/<cim:SwitchingAction.SwitchingEvent\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingEvent", sub, context);
                let bucket = context.parsed.SwitchingAction;
                if (null == bucket)
                   context.parsed.SwitchingAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "SwitchingAction", "isFreeSequence", "isFreeSequence",  base.from_boolean, fields);
                base.export_element (obj, "SwitchingAction", "description", "description",  base.from_string, fields);
                base.export_element (obj, "SwitchingAction", "plannedDateTime", "plannedDateTime",  base.from_datetime, fields);
                base.export_element (obj, "SwitchingAction", "executedDateTime", "executedDateTime",  base.from_datetime, fields);
                base.export_element (obj, "SwitchingAction", "issuedDateTime", "issuedDateTime",  base.from_datetime, fields);
                base.export_attribute (obj, "SwitchingAction", "SwitchingStep", "SwitchingStep", fields);
                base.export_attribute (obj, "SwitchingAction", "Operator", "Operator", fields);
                base.export_attributes (obj, "SwitchingAction", "Crew", "Crew", fields);
                base.export_attribute (obj, "SwitchingAction", "SwitchingEvent", "SwitchingEvent", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SwitchingAction_collapse" aria-expanded="true" aria-controls="SwitchingAction_collapse" style="margin-left: 10px;">SwitchingAction</a></legend>
                    <div id="SwitchingAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#isFreeSequence}}<div><b>isFreeSequence</b>: {{isFreeSequence}}</div>{{/isFreeSequence}}
                    {{#description}}<div><b>description</b>: {{description}}</div>{{/description}}
                    {{#plannedDateTime}}<div><b>plannedDateTime</b>: {{plannedDateTime}}</div>{{/plannedDateTime}}
                    {{#executedDateTime}}<div><b>executedDateTime</b>: {{executedDateTime}}</div>{{/executedDateTime}}
                    {{#issuedDateTime}}<div><b>issuedDateTime</b>: {{issuedDateTime}}</div>{{/issuedDateTime}}
                    {{#SwitchingStep}}<div><b>SwitchingStep</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{SwitchingStep}}");}); return false;'>{{SwitchingStep}}</a></div>{{/SwitchingStep}}
                    {{#Operator}}<div><b>Operator</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Operator}}");}); return false;'>{{Operator}}</a></div>{{/Operator}}
                    {{#Crew}}<div><b>Crew</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Crew}}
                    {{#SwitchingEvent}}<div><b>SwitchingEvent</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{SwitchingEvent}}");}); return false;'>{{SwitchingEvent}}</a></div>{{/SwitchingEvent}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Crew"]) obj["Crew_string"] = obj["Crew"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Crew_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SwitchingAction_collapse" aria-expanded="true" aria-controls="{{id}}_SwitchingAction_collapse" style="margin-left: 10px;">SwitchingAction</a></legend>
                    <div id="{{id}}_SwitchingAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isFreeSequence'>isFreeSequence: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isFreeSequence' class='form-check-input' type='checkbox'{{#isFreeSequence}} checked{{/isFreeSequence}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_description'>description: </label><div class='col-sm-8'><input id='{{id}}_description' class='form-control' type='text'{{#description}} value='{{description}}'{{/description}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_plannedDateTime'>plannedDateTime: </label><div class='col-sm-8'><input id='{{id}}_plannedDateTime' class='form-control' type='text'{{#plannedDateTime}} value='{{plannedDateTime}}'{{/plannedDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_executedDateTime'>executedDateTime: </label><div class='col-sm-8'><input id='{{id}}_executedDateTime' class='form-control' type='text'{{#executedDateTime}} value='{{executedDateTime}}'{{/executedDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_issuedDateTime'>issuedDateTime: </label><div class='col-sm-8'><input id='{{id}}_issuedDateTime' class='form-control' type='text'{{#issuedDateTime}} value='{{issuedDateTime}}'{{/issuedDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SwitchingStep'>SwitchingStep: </label><div class='col-sm-8'><input id='{{id}}_SwitchingStep' class='form-control' type='text'{{#SwitchingStep}} value='{{SwitchingStep}}'{{/SwitchingStep}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Operator'>Operator: </label><div class='col-sm-8'><input id='{{id}}_Operator' class='form-control' type='text'{{#Operator}} value='{{Operator}}'{{/Operator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SwitchingEvent'>SwitchingEvent: </label><div class='col-sm-8'><input id='{{id}}_SwitchingEvent' class='form-control' type='text'{{#SwitchingEvent}} value='{{SwitchingEvent}}'{{/SwitchingEvent}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SwitchingAction" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_isFreeSequence").checked; if (temp) obj["isFreeSequence"] = true;
                temp = document.getElementById (id + "_description").value; if ("" !== temp) obj["description"] = temp;
                temp = document.getElementById (id + "_plannedDateTime").value; if ("" !== temp) obj["plannedDateTime"] = temp;
                temp = document.getElementById (id + "_executedDateTime").value; if ("" !== temp) obj["executedDateTime"] = temp;
                temp = document.getElementById (id + "_issuedDateTime").value; if ("" !== temp) obj["issuedDateTime"] = temp;
                temp = document.getElementById (id + "_SwitchingStep").value; if ("" !== temp) obj["SwitchingStep"] = temp;
                temp = document.getElementById (id + "_Operator").value; if ("" !== temp) obj["Operator"] = temp;
                temp = document.getElementById (id + "_SwitchingEvent").value; if ("" !== temp) obj["SwitchingEvent"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["SwitchingStep", "0..1", "1", "SwitchingStep", "SwitchingAction"],
                            ["Operator", "0..1", "0..*", "Operator", "SwitchingSteps"],
                            ["Crew", "0..*", "1", "Crew", "SwitchingAction"],
                            ["SwitchingEvent", "0..1", "1", "SwitchingEvent", "SwitchingAction"]
                        ]
                    )
                );
            }
        }

        /**
         * The Estimated Restoration Time for a single outage
         *
         */
        class EstimatedRestorationTime extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.EstimatedRestorationTime;
                if (null == bucket)
                   cim_data.EstimatedRestorationTime = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EstimatedRestorationTime[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "EstimatedRestorationTime";
                base.parse_attribute (/<cim:EstimatedRestorationTime.confidenceKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "confidenceKind", sub, context);
                base.parse_element (/<cim:EstimatedRestorationTime.ert>([\s\S]*?)<\/cim:EstimatedRestorationTime.ert>/g, obj, "ert", base.to_datetime, sub, context);
                base.parse_element (/<cim:EstimatedRestorationTime.ertSource>([\s\S]*?)<\/cim:EstimatedRestorationTime.ertSource>/g, obj, "ertSource", base.to_string, sub, context);
                base.parse_attributes (/<cim:EstimatedRestorationTime.Outage\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Outage", sub, context);
                let bucket = context.parsed.EstimatedRestorationTime;
                if (null == bucket)
                   context.parsed.EstimatedRestorationTime = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "EstimatedRestorationTime", "confidenceKind", "confidenceKind", fields);
                base.export_element (obj, "EstimatedRestorationTime", "ert", "ert",  base.from_datetime, fields);
                base.export_element (obj, "EstimatedRestorationTime", "ertSource", "ertSource",  base.from_string, fields);
                base.export_attributes (obj, "EstimatedRestorationTime", "Outage", "Outage", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EstimatedRestorationTime_collapse" aria-expanded="true" aria-controls="EstimatedRestorationTime_collapse" style="margin-left: 10px;">EstimatedRestorationTime</a></legend>
                    <div id="EstimatedRestorationTime_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#confidenceKind}}<div><b>confidenceKind</b>: {{confidenceKind}}</div>{{/confidenceKind}}
                    {{#ert}}<div><b>ert</b>: {{ert}}</div>{{/ert}}
                    {{#ertSource}}<div><b>ertSource</b>: {{ertSource}}</div>{{/ertSource}}
                    {{#Outage}}<div><b>Outage</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Outage}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["confidenceKindERTConfidenceKind"] = [{ id: '', selected: (!obj["confidenceKind"])}]; for (let property in ERTConfidenceKind) obj["confidenceKindERTConfidenceKind"].push ({ id: property, selected: obj["confidenceKind"] && obj["confidenceKind"].endsWith ('.' + property)});
                if (obj["Outage"]) obj["Outage_string"] = obj["Outage"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["confidenceKindERTConfidenceKind"];
                delete obj["Outage_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EstimatedRestorationTime_collapse" aria-expanded="true" aria-controls="{{id}}_EstimatedRestorationTime_collapse" style="margin-left: 10px;">EstimatedRestorationTime</a></legend>
                    <div id="{{id}}_EstimatedRestorationTime_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_confidenceKind'>confidenceKind: </label><div class='col-sm-8'><select id='{{id}}_confidenceKind' class='form-control custom-select'>{{#confidenceKindERTConfidenceKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/confidenceKindERTConfidenceKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ert'>ert: </label><div class='col-sm-8'><input id='{{id}}_ert' class='form-control' type='text'{{#ert}} value='{{ert}}'{{/ert}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ertSource'>ertSource: </label><div class='col-sm-8'><input id='{{id}}_ertSource' class='form-control' type='text'{{#ertSource}} value='{{ertSource}}'{{/ertSource}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "EstimatedRestorationTime" };
                super.submit (id, obj);
                temp = ERTConfidenceKind[document.getElementById (id + "_confidenceKind").value]; if (temp) obj["confidenceKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#ERTConfidenceKind." + temp; else delete obj["confidenceKind"];
                temp = document.getElementById (id + "_ert").value; if ("" !== temp) obj["ert"] = temp;
                temp = document.getElementById (id + "_ertSource").value; if ("" !== temp) obj["ertSource"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Outage", "0..*", "0..1", "Outage", "EstimatedRestorationTime"]
                        ]
                    )
                );
            }
        }

        /**
         * Document restricting or authorising works on electrical equipment (for example a permit to work, sanction for test, limitation of access, or certificate of isolation), defined based upon organisational practices.
         *
         */
        class SafetyDocument extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SafetyDocument;
                if (null == bucket)
                   cim_data.SafetyDocument = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SafetyDocument[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "SafetyDocument";
                base.parse_element (/<cim:SafetyDocument.issuedDateTime>([\s\S]*?)<\/cim:SafetyDocument.issuedDateTime>/g, obj, "issuedDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:SafetyDocument.releasedDateTime>([\s\S]*?)<\/cim:SafetyDocument.releasedDateTime>/g, obj, "releasedDateTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:SafetyDocument.SwitchingPlan\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingPlan", sub, context);
                base.parse_attribute (/<cim:SafetyDocument.IssuedToSupervisor\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "IssuedToSupervisor", sub, context);
                base.parse_attribute (/<cim:SafetyDocument.ReleasedBySupervisor\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ReleasedBySupervisor", sub, context);
                base.parse_attribute (/<cim:SafetyDocument.IssuedBySupervisor\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "IssuedBySupervisor", sub, context);
                base.parse_attribute (/<cim:SafetyDocument.ReleasedToSupervisor\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ReleasedToSupervisor", sub, context);
                let bucket = context.parsed.SafetyDocument;
                if (null == bucket)
                   context.parsed.SafetyDocument = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "SafetyDocument", "issuedDateTime", "issuedDateTime",  base.from_datetime, fields);
                base.export_element (obj, "SafetyDocument", "releasedDateTime", "releasedDateTime",  base.from_datetime, fields);
                base.export_attribute (obj, "SafetyDocument", "SwitchingPlan", "SwitchingPlan", fields);
                base.export_attribute (obj, "SafetyDocument", "IssuedToSupervisor", "IssuedToSupervisor", fields);
                base.export_attribute (obj, "SafetyDocument", "ReleasedBySupervisor", "ReleasedBySupervisor", fields);
                base.export_attribute (obj, "SafetyDocument", "IssuedBySupervisor", "IssuedBySupervisor", fields);
                base.export_attribute (obj, "SafetyDocument", "ReleasedToSupervisor", "ReleasedToSupervisor", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SafetyDocument_collapse" aria-expanded="true" aria-controls="SafetyDocument_collapse" style="margin-left: 10px;">SafetyDocument</a></legend>
                    <div id="SafetyDocument_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#issuedDateTime}}<div><b>issuedDateTime</b>: {{issuedDateTime}}</div>{{/issuedDateTime}}
                    {{#releasedDateTime}}<div><b>releasedDateTime</b>: {{releasedDateTime}}</div>{{/releasedDateTime}}
                    {{#SwitchingPlan}}<div><b>SwitchingPlan</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{SwitchingPlan}}");}); return false;'>{{SwitchingPlan}}</a></div>{{/SwitchingPlan}}
                    {{#IssuedToSupervisor}}<div><b>IssuedToSupervisor</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{IssuedToSupervisor}}");}); return false;'>{{IssuedToSupervisor}}</a></div>{{/IssuedToSupervisor}}
                    {{#ReleasedBySupervisor}}<div><b>ReleasedBySupervisor</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ReleasedBySupervisor}}");}); return false;'>{{ReleasedBySupervisor}}</a></div>{{/ReleasedBySupervisor}}
                    {{#IssuedBySupervisor}}<div><b>IssuedBySupervisor</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{IssuedBySupervisor}}");}); return false;'>{{IssuedBySupervisor}}</a></div>{{/IssuedBySupervisor}}
                    {{#ReleasedToSupervisor}}<div><b>ReleasedToSupervisor</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ReleasedToSupervisor}}");}); return false;'>{{ReleasedToSupervisor}}</a></div>{{/ReleasedToSupervisor}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SafetyDocument_collapse" aria-expanded="true" aria-controls="{{id}}_SafetyDocument_collapse" style="margin-left: 10px;">SafetyDocument</a></legend>
                    <div id="{{id}}_SafetyDocument_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_issuedDateTime'>issuedDateTime: </label><div class='col-sm-8'><input id='{{id}}_issuedDateTime' class='form-control' type='text'{{#issuedDateTime}} value='{{issuedDateTime}}'{{/issuedDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_releasedDateTime'>releasedDateTime: </label><div class='col-sm-8'><input id='{{id}}_releasedDateTime' class='form-control' type='text'{{#releasedDateTime}} value='{{releasedDateTime}}'{{/releasedDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SwitchingPlan'>SwitchingPlan: </label><div class='col-sm-8'><input id='{{id}}_SwitchingPlan' class='form-control' type='text'{{#SwitchingPlan}} value='{{SwitchingPlan}}'{{/SwitchingPlan}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_IssuedToSupervisor'>IssuedToSupervisor: </label><div class='col-sm-8'><input id='{{id}}_IssuedToSupervisor' class='form-control' type='text'{{#IssuedToSupervisor}} value='{{IssuedToSupervisor}}'{{/IssuedToSupervisor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ReleasedBySupervisor'>ReleasedBySupervisor: </label><div class='col-sm-8'><input id='{{id}}_ReleasedBySupervisor' class='form-control' type='text'{{#ReleasedBySupervisor}} value='{{ReleasedBySupervisor}}'{{/ReleasedBySupervisor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_IssuedBySupervisor'>IssuedBySupervisor: </label><div class='col-sm-8'><input id='{{id}}_IssuedBySupervisor' class='form-control' type='text'{{#IssuedBySupervisor}} value='{{IssuedBySupervisor}}'{{/IssuedBySupervisor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ReleasedToSupervisor'>ReleasedToSupervisor: </label><div class='col-sm-8'><input id='{{id}}_ReleasedToSupervisor' class='form-control' type='text'{{#ReleasedToSupervisor}} value='{{ReleasedToSupervisor}}'{{/ReleasedToSupervisor}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SafetyDocument" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_issuedDateTime").value; if ("" !== temp) obj["issuedDateTime"] = temp;
                temp = document.getElementById (id + "_releasedDateTime").value; if ("" !== temp) obj["releasedDateTime"] = temp;
                temp = document.getElementById (id + "_SwitchingPlan").value; if ("" !== temp) obj["SwitchingPlan"] = temp;
                temp = document.getElementById (id + "_IssuedToSupervisor").value; if ("" !== temp) obj["IssuedToSupervisor"] = temp;
                temp = document.getElementById (id + "_ReleasedBySupervisor").value; if ("" !== temp) obj["ReleasedBySupervisor"] = temp;
                temp = document.getElementById (id + "_IssuedBySupervisor").value; if ("" !== temp) obj["IssuedBySupervisor"] = temp;
                temp = document.getElementById (id + "_ReleasedToSupervisor").value; if ("" !== temp) obj["ReleasedToSupervisor"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["SwitchingPlan", "0..1", "0..*", "SwitchingPlan", "SafetyDocuments"],
                            ["IssuedToSupervisor", "0..1", "0..*", "FieldSafetySupervisor", "IssuedSafetyDocuments"],
                            ["ReleasedBySupervisor", "0..1", "0..*", "FieldSafetySupervisor", "ReleasedSafetyDocuments"],
                            ["IssuedBySupervisor", "0..1", "0..*", "OperationsSafetySupervisor", "IssuedSafetyDocuments"],
                            ["ReleasedToSupervisor", "0..1", "0..*", "OperationsSafetySupervisor", "ReleasedSafetyDocuments"]
                        ]
                    )
                );
            }
        }

        /**
         * Document containing the definition of planned outages of equipment and/or usage points.
         *
         * It will reference switching plans that are used to execute the planned outage.
         *
         */
        class OutagePlan extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OutagePlan;
                if (null == bucket)
                   cim_data.OutagePlan = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OutagePlan[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "OutagePlan";
                base.parse_element (/<cim:OutagePlan.cancelledDateTime>([\s\S]*?)<\/cim:OutagePlan.cancelledDateTime>/g, obj, "cancelledDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:OutagePlan.purpose>([\s\S]*?)<\/cim:OutagePlan.purpose>/g, obj, "purpose", base.to_string, sub, context);
                base.parse_attribute (/<cim:OutagePlan.plannedPeriod\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "plannedPeriod", sub, context);
                base.parse_element (/<cim:OutagePlan.approvedDateTime>([\s\S]*?)<\/cim:OutagePlan.approvedDateTime>/g, obj, "approvedDateTime", base.to_datetime, sub, context);
                base.parse_attributes (/<cim:OutagePlan.Customer\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Customer", sub, context);
                base.parse_attribute (/<cim:OutagePlan.OutageOrder\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OutageOrder", sub, context);
                base.parse_attribute (/<cim:OutagePlan.SwitchingPlan\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingPlan", sub, context);
                base.parse_attribute (/<cim:OutagePlan.PlannedOutage\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PlannedOutage", sub, context);
                let bucket = context.parsed.OutagePlan;
                if (null == bucket)
                   context.parsed.OutagePlan = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "OutagePlan", "cancelledDateTime", "cancelledDateTime",  base.from_datetime, fields);
                base.export_element (obj, "OutagePlan", "purpose", "purpose",  base.from_string, fields);
                base.export_attribute (obj, "OutagePlan", "plannedPeriod", "plannedPeriod", fields);
                base.export_element (obj, "OutagePlan", "approvedDateTime", "approvedDateTime",  base.from_datetime, fields);
                base.export_attributes (obj, "OutagePlan", "Customer", "Customer", fields);
                base.export_attribute (obj, "OutagePlan", "OutageOrder", "OutageOrder", fields);
                base.export_attribute (obj, "OutagePlan", "SwitchingPlan", "SwitchingPlan", fields);
                base.export_attribute (obj, "OutagePlan", "PlannedOutage", "PlannedOutage", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OutagePlan_collapse" aria-expanded="true" aria-controls="OutagePlan_collapse" style="margin-left: 10px;">OutagePlan</a></legend>
                    <div id="OutagePlan_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#cancelledDateTime}}<div><b>cancelledDateTime</b>: {{cancelledDateTime}}</div>{{/cancelledDateTime}}
                    {{#purpose}}<div><b>purpose</b>: {{purpose}}</div>{{/purpose}}
                    {{#plannedPeriod}}<div><b>plannedPeriod</b>: {{plannedPeriod}}</div>{{/plannedPeriod}}
                    {{#approvedDateTime}}<div><b>approvedDateTime</b>: {{approvedDateTime}}</div>{{/approvedDateTime}}
                    {{#Customer}}<div><b>Customer</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Customer}}
                    {{#OutageOrder}}<div><b>OutageOrder</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{OutageOrder}}");}); return false;'>{{OutageOrder}}</a></div>{{/OutageOrder}}
                    {{#SwitchingPlan}}<div><b>SwitchingPlan</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{SwitchingPlan}}");}); return false;'>{{SwitchingPlan}}</a></div>{{/SwitchingPlan}}
                    {{#PlannedOutage}}<div><b>PlannedOutage</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{PlannedOutage}}");}); return false;'>{{PlannedOutage}}</a></div>{{/PlannedOutage}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Customer"]) obj["Customer_string"] = obj["Customer"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Customer_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OutagePlan_collapse" aria-expanded="true" aria-controls="{{id}}_OutagePlan_collapse" style="margin-left: 10px;">OutagePlan</a></legend>
                    <div id="{{id}}_OutagePlan_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cancelledDateTime'>cancelledDateTime: </label><div class='col-sm-8'><input id='{{id}}_cancelledDateTime' class='form-control' type='text'{{#cancelledDateTime}} value='{{cancelledDateTime}}'{{/cancelledDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_purpose'>purpose: </label><div class='col-sm-8'><input id='{{id}}_purpose' class='form-control' type='text'{{#purpose}} value='{{purpose}}'{{/purpose}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_plannedPeriod'>plannedPeriod: </label><div class='col-sm-8'><input id='{{id}}_plannedPeriod' class='form-control' type='text'{{#plannedPeriod}} value='{{plannedPeriod}}'{{/plannedPeriod}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_approvedDateTime'>approvedDateTime: </label><div class='col-sm-8'><input id='{{id}}_approvedDateTime' class='form-control' type='text'{{#approvedDateTime}} value='{{approvedDateTime}}'{{/approvedDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OutageOrder'>OutageOrder: </label><div class='col-sm-8'><input id='{{id}}_OutageOrder' class='form-control' type='text'{{#OutageOrder}} value='{{OutageOrder}}'{{/OutageOrder}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SwitchingPlan'>SwitchingPlan: </label><div class='col-sm-8'><input id='{{id}}_SwitchingPlan' class='form-control' type='text'{{#SwitchingPlan}} value='{{SwitchingPlan}}'{{/SwitchingPlan}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PlannedOutage'>PlannedOutage: </label><div class='col-sm-8'><input id='{{id}}_PlannedOutage' class='form-control' type='text'{{#PlannedOutage}} value='{{PlannedOutage}}'{{/PlannedOutage}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OutagePlan" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_cancelledDateTime").value; if ("" !== temp) obj["cancelledDateTime"] = temp;
                temp = document.getElementById (id + "_purpose").value; if ("" !== temp) obj["purpose"] = temp;
                temp = document.getElementById (id + "_plannedPeriod").value; if ("" !== temp) obj["plannedPeriod"] = temp;
                temp = document.getElementById (id + "_approvedDateTime").value; if ("" !== temp) obj["approvedDateTime"] = temp;
                temp = document.getElementById (id + "_OutageOrder").value; if ("" !== temp) obj["OutageOrder"] = temp;
                temp = document.getElementById (id + "_SwitchingPlan").value; if ("" !== temp) obj["SwitchingPlan"] = temp;
                temp = document.getElementById (id + "_PlannedOutage").value; if ("" !== temp) obj["PlannedOutage"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Customer", "0..*", "0..1", "Customer", "OutagePlan"],
                            ["OutageOrder", "0..1", "0..1", "OutageOrder", "OutagePlan"],
                            ["SwitchingPlan", "0..1", "0..1", "SwitchingPlan", "OutagePlan"],
                            ["PlannedOutage", "0..1", "0..1", "PlannedOutage", "OutagePlan"]
                        ]
                    )
                );
            }
        }

        /**
         * Crew member on work site responsible for all local safety measures for the work crew doing maintenance, construction and repair in a substation or on a power line/cable.
         *
         */
        class FieldSafetySupervisor extends Common.CrewMember
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.FieldSafetySupervisor;
                if (null == bucket)
                   cim_data.FieldSafetySupervisor = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.FieldSafetySupervisor[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.CrewMember.prototype.parse.call (this, context, sub);
                obj.cls = "FieldSafetySupervisor";
                base.parse_attributes (/<cim:FieldSafetySupervisor.IssuedSafetyDocuments\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "IssuedSafetyDocuments", sub, context);
                base.parse_attributes (/<cim:FieldSafetySupervisor.ReleasedSafetyDocuments\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ReleasedSafetyDocuments", sub, context);
                let bucket = context.parsed.FieldSafetySupervisor;
                if (null == bucket)
                   context.parsed.FieldSafetySupervisor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.CrewMember.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "FieldSafetySupervisor", "IssuedSafetyDocuments", "IssuedSafetyDocuments", fields);
                base.export_attributes (obj, "FieldSafetySupervisor", "ReleasedSafetyDocuments", "ReleasedSafetyDocuments", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#FieldSafetySupervisor_collapse" aria-expanded="true" aria-controls="FieldSafetySupervisor_collapse" style="margin-left: 10px;">FieldSafetySupervisor</a></legend>
                    <div id="FieldSafetySupervisor_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.CrewMember.prototype.template.call (this) +
                    `
                    {{#IssuedSafetyDocuments}}<div><b>IssuedSafetyDocuments</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/IssuedSafetyDocuments}}
                    {{#ReleasedSafetyDocuments}}<div><b>ReleasedSafetyDocuments</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ReleasedSafetyDocuments}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["IssuedSafetyDocuments"]) obj["IssuedSafetyDocuments_string"] = obj["IssuedSafetyDocuments"].join ();
                if (obj["ReleasedSafetyDocuments"]) obj["ReleasedSafetyDocuments_string"] = obj["ReleasedSafetyDocuments"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["IssuedSafetyDocuments_string"];
                delete obj["ReleasedSafetyDocuments_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_FieldSafetySupervisor_collapse" aria-expanded="true" aria-controls="{{id}}_FieldSafetySupervisor_collapse" style="margin-left: 10px;">FieldSafetySupervisor</a></legend>
                    <div id="{{id}}_FieldSafetySupervisor_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.CrewMember.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "FieldSafetySupervisor" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["IssuedSafetyDocuments", "0..*", "0..1", "SafetyDocument", "IssuedToSupervisor"],
                            ["ReleasedSafetyDocuments", "0..*", "0..1", "SafetyDocument", "ReleasedBySupervisor"]
                        ]
                    )
                );
            }
        }

        /**
         * A document used to request that a switching plan be created for a particular purpose.
         *
         */
        class SwitchingPlanRequest extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SwitchingPlanRequest;
                if (null == bucket)
                   cim_data.SwitchingPlanRequest = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SwitchingPlanRequest[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "SwitchingPlanRequest";
                base.parse_attribute (/<cim:SwitchingPlanRequest.forwardSwitchingDateTimeInterval\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "forwardSwitchingDateTimeInterval", sub, context);
                base.parse_attribute (/<cim:SwitchingPlanRequest.reverseSwitchingDateTimeInterval\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "reverseSwitchingDateTimeInterval", sub, context);
                base.parse_element (/<cim:SwitchingPlanRequest.switchingRequestDetails>([\s\S]*?)<\/cim:SwitchingPlanRequest.switchingRequestDetails>/g, obj, "switchingRequestDetails", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchingPlanRequest.purpose>([\s\S]*?)<\/cim:SwitchingPlanRequest.purpose>/g, obj, "purpose", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchingPlanRequest.comment>([\s\S]*?)<\/cim:SwitchingPlanRequest.comment>/g, obj, "comment", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchingPlanRequest.isolationArea>([\s\S]*?)<\/cim:SwitchingPlanRequest.isolationArea>/g, obj, "isolationArea", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchingPlanRequest.equipmentToBeIsolated>([\s\S]*?)<\/cim:SwitchingPlanRequest.equipmentToBeIsolated>/g, obj, "equipmentToBeIsolated", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchingPlanRequest.isolationPoints>([\s\S]*?)<\/cim:SwitchingPlanRequest.isolationPoints>/g, obj, "isolationPoints", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchingPlanRequest.groundingPoints>([\s\S]*?)<\/cim:SwitchingPlanRequest.groundingPoints>/g, obj, "groundingPoints", base.to_string, sub, context);
                base.parse_attribute (/<cim:SwitchingPlanRequest.outageDateTimeInterval\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "outageDateTimeInterval", sub, context);
                base.parse_attribute (/<cim:SwitchingPlanRequest.RequestingOrganization\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RequestingOrganization", sub, context);
                base.parse_attributes (/<cim:SwitchingPlanRequest.SwitchingPlan\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingPlan", sub, context);
                let bucket = context.parsed.SwitchingPlanRequest;
                if (null == bucket)
                   context.parsed.SwitchingPlanRequest = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "SwitchingPlanRequest", "forwardSwitchingDateTimeInterval", "forwardSwitchingDateTimeInterval", fields);
                base.export_attribute (obj, "SwitchingPlanRequest", "reverseSwitchingDateTimeInterval", "reverseSwitchingDateTimeInterval", fields);
                base.export_element (obj, "SwitchingPlanRequest", "switchingRequestDetails", "switchingRequestDetails",  base.from_string, fields);
                base.export_element (obj, "SwitchingPlanRequest", "purpose", "purpose",  base.from_string, fields);
                base.export_element (obj, "SwitchingPlanRequest", "comment", "comment",  base.from_string, fields);
                base.export_element (obj, "SwitchingPlanRequest", "isolationArea", "isolationArea",  base.from_string, fields);
                base.export_element (obj, "SwitchingPlanRequest", "equipmentToBeIsolated", "equipmentToBeIsolated",  base.from_string, fields);
                base.export_element (obj, "SwitchingPlanRequest", "isolationPoints", "isolationPoints",  base.from_string, fields);
                base.export_element (obj, "SwitchingPlanRequest", "groundingPoints", "groundingPoints",  base.from_string, fields);
                base.export_attribute (obj, "SwitchingPlanRequest", "outageDateTimeInterval", "outageDateTimeInterval", fields);
                base.export_attribute (obj, "SwitchingPlanRequest", "RequestingOrganization", "RequestingOrganization", fields);
                base.export_attributes (obj, "SwitchingPlanRequest", "SwitchingPlan", "SwitchingPlan", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SwitchingPlanRequest_collapse" aria-expanded="true" aria-controls="SwitchingPlanRequest_collapse" style="margin-left: 10px;">SwitchingPlanRequest</a></legend>
                    <div id="SwitchingPlanRequest_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#forwardSwitchingDateTimeInterval}}<div><b>forwardSwitchingDateTimeInterval</b>: {{forwardSwitchingDateTimeInterval}}</div>{{/forwardSwitchingDateTimeInterval}}
                    {{#reverseSwitchingDateTimeInterval}}<div><b>reverseSwitchingDateTimeInterval</b>: {{reverseSwitchingDateTimeInterval}}</div>{{/reverseSwitchingDateTimeInterval}}
                    {{#switchingRequestDetails}}<div><b>switchingRequestDetails</b>: {{switchingRequestDetails}}</div>{{/switchingRequestDetails}}
                    {{#purpose}}<div><b>purpose</b>: {{purpose}}</div>{{/purpose}}
                    {{#comment}}<div><b>comment</b>: {{comment}}</div>{{/comment}}
                    {{#isolationArea}}<div><b>isolationArea</b>: {{isolationArea}}</div>{{/isolationArea}}
                    {{#equipmentToBeIsolated}}<div><b>equipmentToBeIsolated</b>: {{equipmentToBeIsolated}}</div>{{/equipmentToBeIsolated}}
                    {{#isolationPoints}}<div><b>isolationPoints</b>: {{isolationPoints}}</div>{{/isolationPoints}}
                    {{#groundingPoints}}<div><b>groundingPoints</b>: {{groundingPoints}}</div>{{/groundingPoints}}
                    {{#outageDateTimeInterval}}<div><b>outageDateTimeInterval</b>: {{outageDateTimeInterval}}</div>{{/outageDateTimeInterval}}
                    {{#RequestingOrganization}}<div><b>RequestingOrganization</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RequestingOrganization}}");}); return false;'>{{RequestingOrganization}}</a></div>{{/RequestingOrganization}}
                    {{#SwitchingPlan}}<div><b>SwitchingPlan</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/SwitchingPlan}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["SwitchingPlan"]) obj["SwitchingPlan_string"] = obj["SwitchingPlan"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["SwitchingPlan_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SwitchingPlanRequest_collapse" aria-expanded="true" aria-controls="{{id}}_SwitchingPlanRequest_collapse" style="margin-left: 10px;">SwitchingPlanRequest</a></legend>
                    <div id="{{id}}_SwitchingPlanRequest_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_forwardSwitchingDateTimeInterval'>forwardSwitchingDateTimeInterval: </label><div class='col-sm-8'><input id='{{id}}_forwardSwitchingDateTimeInterval' class='form-control' type='text'{{#forwardSwitchingDateTimeInterval}} value='{{forwardSwitchingDateTimeInterval}}'{{/forwardSwitchingDateTimeInterval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_reverseSwitchingDateTimeInterval'>reverseSwitchingDateTimeInterval: </label><div class='col-sm-8'><input id='{{id}}_reverseSwitchingDateTimeInterval' class='form-control' type='text'{{#reverseSwitchingDateTimeInterval}} value='{{reverseSwitchingDateTimeInterval}}'{{/reverseSwitchingDateTimeInterval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_switchingRequestDetails'>switchingRequestDetails: </label><div class='col-sm-8'><input id='{{id}}_switchingRequestDetails' class='form-control' type='text'{{#switchingRequestDetails}} value='{{switchingRequestDetails}}'{{/switchingRequestDetails}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_purpose'>purpose: </label><div class='col-sm-8'><input id='{{id}}_purpose' class='form-control' type='text'{{#purpose}} value='{{purpose}}'{{/purpose}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_comment'>comment: </label><div class='col-sm-8'><input id='{{id}}_comment' class='form-control' type='text'{{#comment}} value='{{comment}}'{{/comment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_isolationArea'>isolationArea: </label><div class='col-sm-8'><input id='{{id}}_isolationArea' class='form-control' type='text'{{#isolationArea}} value='{{isolationArea}}'{{/isolationArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_equipmentToBeIsolated'>equipmentToBeIsolated: </label><div class='col-sm-8'><input id='{{id}}_equipmentToBeIsolated' class='form-control' type='text'{{#equipmentToBeIsolated}} value='{{equipmentToBeIsolated}}'{{/equipmentToBeIsolated}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_isolationPoints'>isolationPoints: </label><div class='col-sm-8'><input id='{{id}}_isolationPoints' class='form-control' type='text'{{#isolationPoints}} value='{{isolationPoints}}'{{/isolationPoints}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_groundingPoints'>groundingPoints: </label><div class='col-sm-8'><input id='{{id}}_groundingPoints' class='form-control' type='text'{{#groundingPoints}} value='{{groundingPoints}}'{{/groundingPoints}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_outageDateTimeInterval'>outageDateTimeInterval: </label><div class='col-sm-8'><input id='{{id}}_outageDateTimeInterval' class='form-control' type='text'{{#outageDateTimeInterval}} value='{{outageDateTimeInterval}}'{{/outageDateTimeInterval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RequestingOrganization'>RequestingOrganization: </label><div class='col-sm-8'><input id='{{id}}_RequestingOrganization' class='form-control' type='text'{{#RequestingOrganization}} value='{{RequestingOrganization}}'{{/RequestingOrganization}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SwitchingPlanRequest" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_forwardSwitchingDateTimeInterval").value; if ("" !== temp) obj["forwardSwitchingDateTimeInterval"] = temp;
                temp = document.getElementById (id + "_reverseSwitchingDateTimeInterval").value; if ("" !== temp) obj["reverseSwitchingDateTimeInterval"] = temp;
                temp = document.getElementById (id + "_switchingRequestDetails").value; if ("" !== temp) obj["switchingRequestDetails"] = temp;
                temp = document.getElementById (id + "_purpose").value; if ("" !== temp) obj["purpose"] = temp;
                temp = document.getElementById (id + "_comment").value; if ("" !== temp) obj["comment"] = temp;
                temp = document.getElementById (id + "_isolationArea").value; if ("" !== temp) obj["isolationArea"] = temp;
                temp = document.getElementById (id + "_equipmentToBeIsolated").value; if ("" !== temp) obj["equipmentToBeIsolated"] = temp;
                temp = document.getElementById (id + "_isolationPoints").value; if ("" !== temp) obj["isolationPoints"] = temp;
                temp = document.getElementById (id + "_groundingPoints").value; if ("" !== temp) obj["groundingPoints"] = temp;
                temp = document.getElementById (id + "_outageDateTimeInterval").value; if ("" !== temp) obj["outageDateTimeInterval"] = temp;
                temp = document.getElementById (id + "_RequestingOrganization").value; if ("" !== temp) obj["RequestingOrganization"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RequestingOrganization", "0..1", "0..*", "Organisation", "SwitchingPlanRequest"],
                            ["SwitchingPlan", "0..*", "0..1", "SwitchingPlan", "SwitchingPlanRequest"]
                        ]
                    )
                );
            }
        }

        /**
         * A logical step, grouping atomic switching steps that are important to distinguish when they may change topology (e.g. placing a jumper between two cuts).
         *
         */
        class SwitchingStepGroup extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SwitchingStepGroup;
                if (null == bucket)
                   cim_data.SwitchingStepGroup = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SwitchingStepGroup[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SwitchingStepGroup";
                base.parse_element (/<cim:SwitchingStepGroup.sequenceNumber>([\s\S]*?)<\/cim:SwitchingStepGroup.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchingStepGroup.description>([\s\S]*?)<\/cim:SwitchingStepGroup.description>/g, obj, "description", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchingStepGroup.isFreeSequence>([\s\S]*?)<\/cim:SwitchingStepGroup.isFreeSequence>/g, obj, "isFreeSequence", base.to_boolean, sub, context);
                base.parse_element (/<cim:SwitchingStepGroup.purpose>([\s\S]*?)<\/cim:SwitchingStepGroup.purpose>/g, obj, "purpose", base.to_string, sub, context);
                base.parse_attributes (/<cim:SwitchingStepGroup.SwitchingStep\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStep", sub, context);
                base.parse_attribute (/<cim:SwitchingStepGroup.SwitchingPlan\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingPlan", sub, context);
                let bucket = context.parsed.SwitchingStepGroup;
                if (null == bucket)
                   context.parsed.SwitchingStepGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "SwitchingStepGroup", "sequenceNumber", "sequenceNumber",  base.from_string, fields);
                base.export_element (obj, "SwitchingStepGroup", "description", "description",  base.from_string, fields);
                base.export_element (obj, "SwitchingStepGroup", "isFreeSequence", "isFreeSequence",  base.from_boolean, fields);
                base.export_element (obj, "SwitchingStepGroup", "purpose", "purpose",  base.from_string, fields);
                base.export_attributes (obj, "SwitchingStepGroup", "SwitchingStep", "SwitchingStep", fields);
                base.export_attribute (obj, "SwitchingStepGroup", "SwitchingPlan", "SwitchingPlan", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SwitchingStepGroup_collapse" aria-expanded="true" aria-controls="SwitchingStepGroup_collapse" style="margin-left: 10px;">SwitchingStepGroup</a></legend>
                    <div id="SwitchingStepGroup_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
                    {{#description}}<div><b>description</b>: {{description}}</div>{{/description}}
                    {{#isFreeSequence}}<div><b>isFreeSequence</b>: {{isFreeSequence}}</div>{{/isFreeSequence}}
                    {{#purpose}}<div><b>purpose</b>: {{purpose}}</div>{{/purpose}}
                    {{#SwitchingStep}}<div><b>SwitchingStep</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/SwitchingStep}}
                    {{#SwitchingPlan}}<div><b>SwitchingPlan</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{SwitchingPlan}}");}); return false;'>{{SwitchingPlan}}</a></div>{{/SwitchingPlan}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["SwitchingStep"]) obj["SwitchingStep_string"] = obj["SwitchingStep"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["SwitchingStep_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SwitchingStepGroup_collapse" aria-expanded="true" aria-controls="{{id}}_SwitchingStepGroup_collapse" style="margin-left: 10px;">SwitchingStepGroup</a></legend>
                    <div id="{{id}}_SwitchingStepGroup_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sequenceNumber'>sequenceNumber: </label><div class='col-sm-8'><input id='{{id}}_sequenceNumber' class='form-control' type='text'{{#sequenceNumber}} value='{{sequenceNumber}}'{{/sequenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_description'>description: </label><div class='col-sm-8'><input id='{{id}}_description' class='form-control' type='text'{{#description}} value='{{description}}'{{/description}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isFreeSequence'>isFreeSequence: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isFreeSequence' class='form-check-input' type='checkbox'{{#isFreeSequence}} checked{{/isFreeSequence}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_purpose'>purpose: </label><div class='col-sm-8'><input id='{{id}}_purpose' class='form-control' type='text'{{#purpose}} value='{{purpose}}'{{/purpose}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SwitchingPlan'>SwitchingPlan: </label><div class='col-sm-8'><input id='{{id}}_SwitchingPlan' class='form-control' type='text'{{#SwitchingPlan}} value='{{SwitchingPlan}}'{{/SwitchingPlan}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SwitchingStepGroup" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_sequenceNumber").value; if ("" !== temp) obj["sequenceNumber"] = temp;
                temp = document.getElementById (id + "_description").value; if ("" !== temp) obj["description"] = temp;
                temp = document.getElementById (id + "_isFreeSequence").checked; if (temp) obj["isFreeSequence"] = true;
                temp = document.getElementById (id + "_purpose").value; if ("" !== temp) obj["purpose"] = temp;
                temp = document.getElementById (id + "_SwitchingPlan").value; if ("" !== temp) obj["SwitchingPlan"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["SwitchingStep", "0..*", "0..1", "SwitchingStep", "SwitchingStepGroup"],
                            ["SwitchingPlan", "0..1", "0..*", "SwitchingPlan", "SwitchingStepGroups"]
                        ]
                    )
                );
            }
        }

        /**
         * A document that can be associated with equipment to describe any sort of restrictions compared with the original manufacturer's specification or with the usual operational practice e.g. temporary maximum loadings, maximum switching current, do not operate if bus couplers are open, etc.
         *
         * In the UK, for example, if a breaker or switch ever mal-operates, this is reported centrally and utilities use their asset systems to identify all the installed devices of the same manufacturer's type. They then apply operational restrictions in the operational systems to warn operators of potential problems. After appropriate inspection and maintenance, the operational restrictions may be removed.
         *
         */
        class OperationalRestriction extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OperationalRestriction;
                if (null == bucket)
                   cim_data.OperationalRestriction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OperationalRestriction[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "OperationalRestriction";
                base.parse_attribute (/<cim:OperationalRestriction.activePeriod\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "activePeriod", sub, context);
                base.parse_attribute (/<cim:OperationalRestriction.restrictedValue\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "restrictedValue", sub, context);
                base.parse_attributes (/<cim:OperationalRestriction.Equipments\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Equipments", sub, context);
                base.parse_attribute (/<cim:OperationalRestriction.ProductAssetModel\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ProductAssetModel", sub, context);
                let bucket = context.parsed.OperationalRestriction;
                if (null == bucket)
                   context.parsed.OperationalRestriction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "OperationalRestriction", "activePeriod", "activePeriod", fields);
                base.export_attribute (obj, "OperationalRestriction", "restrictedValue", "restrictedValue", fields);
                base.export_attributes (obj, "OperationalRestriction", "Equipments", "Equipments", fields);
                base.export_attribute (obj, "OperationalRestriction", "ProductAssetModel", "ProductAssetModel", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OperationalRestriction_collapse" aria-expanded="true" aria-controls="OperationalRestriction_collapse" style="margin-left: 10px;">OperationalRestriction</a></legend>
                    <div id="OperationalRestriction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#activePeriod}}<div><b>activePeriod</b>: {{activePeriod}}</div>{{/activePeriod}}
                    {{#restrictedValue}}<div><b>restrictedValue</b>: {{restrictedValue}}</div>{{/restrictedValue}}
                    {{#Equipments}}<div><b>Equipments</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Equipments}}
                    {{#ProductAssetModel}}<div><b>ProductAssetModel</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ProductAssetModel}}");}); return false;'>{{ProductAssetModel}}</a></div>{{/ProductAssetModel}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Equipments"]) obj["Equipments_string"] = obj["Equipments"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Equipments_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OperationalRestriction_collapse" aria-expanded="true" aria-controls="{{id}}_OperationalRestriction_collapse" style="margin-left: 10px;">OperationalRestriction</a></legend>
                    <div id="{{id}}_OperationalRestriction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_activePeriod'>activePeriod: </label><div class='col-sm-8'><input id='{{id}}_activePeriod' class='form-control' type='text'{{#activePeriod}} value='{{activePeriod}}'{{/activePeriod}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_restrictedValue'>restrictedValue: </label><div class='col-sm-8'><input id='{{id}}_restrictedValue' class='form-control' type='text'{{#restrictedValue}} value='{{restrictedValue}}'{{/restrictedValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Equipments'>Equipments: </label><div class='col-sm-8'><input id='{{id}}_Equipments' class='form-control' type='text'{{#Equipments}} value='{{Equipments_string}}'{{/Equipments}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ProductAssetModel'>ProductAssetModel: </label><div class='col-sm-8'><input id='{{id}}_ProductAssetModel' class='form-control' type='text'{{#ProductAssetModel}} value='{{ProductAssetModel}}'{{/ProductAssetModel}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OperationalRestriction" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_activePeriod").value; if ("" !== temp) obj["activePeriod"] = temp;
                temp = document.getElementById (id + "_restrictedValue").value; if ("" !== temp) obj["restrictedValue"] = temp;
                temp = document.getElementById (id + "_Equipments").value; if ("" !== temp) obj["Equipments"] = temp.split (",");
                temp = document.getElementById (id + "_ProductAssetModel").value; if ("" !== temp) obj["ProductAssetModel"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Equipments", "0..*", "0..*", "Equipment", "OperationalRestrictions"],
                            ["ProductAssetModel", "0..1", "0..*", "ProductAssetModel", "OperationalRestrictions"]
                        ]
                    )
                );
            }
        }

        /**
         * This defines the area covered by the Outage.
         *
         */
        class OutageArea extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OutageArea;
                if (null == bucket)
                   cim_data.OutageArea = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OutageArea[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "OutageArea";
                base.parse_element (/<cim:OutageArea.earliestReportedTime>([\s\S]*?)<\/cim:OutageArea.earliestReportedTime>/g, obj, "earliestReportedTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:OutageArea.metersServed>([\s\S]*?)<\/cim:OutageArea.metersServed>/g, obj, "metersServed", base.to_string, sub, context);
                base.parse_attribute (/<cim:OutageArea.outageAreaKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "outageAreaKind", sub, context);
                base.parse_attributes (/<cim:OutageArea.Outage\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Outage", sub, context);
                let bucket = context.parsed.OutageArea;
                if (null == bucket)
                   context.parsed.OutageArea = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "OutageArea", "earliestReportedTime", "earliestReportedTime",  base.from_datetime, fields);
                base.export_element (obj, "OutageArea", "metersServed", "metersServed",  base.from_string, fields);
                base.export_attribute (obj, "OutageArea", "outageAreaKind", "outageAreaKind", fields);
                base.export_attributes (obj, "OutageArea", "Outage", "Outage", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OutageArea_collapse" aria-expanded="true" aria-controls="OutageArea_collapse" style="margin-left: 10px;">OutageArea</a></legend>
                    <div id="OutageArea_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#earliestReportedTime}}<div><b>earliestReportedTime</b>: {{earliestReportedTime}}</div>{{/earliestReportedTime}}
                    {{#metersServed}}<div><b>metersServed</b>: {{metersServed}}</div>{{/metersServed}}
                    {{#outageAreaKind}}<div><b>outageAreaKind</b>: {{outageAreaKind}}</div>{{/outageAreaKind}}
                    {{#Outage}}<div><b>Outage</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Outage}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["outageAreaKindAreaKind"] = [{ id: '', selected: (!obj["outageAreaKind"])}]; for (let property in AreaKind) obj["outageAreaKindAreaKind"].push ({ id: property, selected: obj["outageAreaKind"] && obj["outageAreaKind"].endsWith ('.' + property)});
                if (obj["Outage"]) obj["Outage_string"] = obj["Outage"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["outageAreaKindAreaKind"];
                delete obj["Outage_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OutageArea_collapse" aria-expanded="true" aria-controls="{{id}}_OutageArea_collapse" style="margin-left: 10px;">OutageArea</a></legend>
                    <div id="{{id}}_OutageArea_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_earliestReportedTime'>earliestReportedTime: </label><div class='col-sm-8'><input id='{{id}}_earliestReportedTime' class='form-control' type='text'{{#earliestReportedTime}} value='{{earliestReportedTime}}'{{/earliestReportedTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_metersServed'>metersServed: </label><div class='col-sm-8'><input id='{{id}}_metersServed' class='form-control' type='text'{{#metersServed}} value='{{metersServed}}'{{/metersServed}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_outageAreaKind'>outageAreaKind: </label><div class='col-sm-8'><select id='{{id}}_outageAreaKind' class='form-control custom-select'>{{#outageAreaKindAreaKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/outageAreaKindAreaKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Outage'>Outage: </label><div class='col-sm-8'><input id='{{id}}_Outage' class='form-control' type='text'{{#Outage}} value='{{Outage_string}}'{{/Outage}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OutageArea" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_earliestReportedTime").value; if ("" !== temp) obj["earliestReportedTime"] = temp;
                temp = document.getElementById (id + "_metersServed").value; if ("" !== temp) obj["metersServed"] = temp;
                temp = AreaKind[document.getElementById (id + "_outageAreaKind").value]; if (temp) obj["outageAreaKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#AreaKind." + temp; else delete obj["outageAreaKind"];
                temp = document.getElementById (id + "_Outage").value; if ("" !== temp) obj["Outage"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Outage", "0..*", "0..*", "Outage", "OutageArea"]
                        ]
                    )
                );
            }
        }

        /**
         * Atomic switching step; can be part of a switching step group, or part of a switching plan.
         *
         */
        class SwitchingStep extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SwitchingStep;
                if (null == bucket)
                   cim_data.SwitchingStep = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SwitchingStep[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SwitchingStep";
                base.parse_element (/<cim:SwitchingStep.sequenceNumber>([\s\S]*?)<\/cim:SwitchingStep.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
                base.parse_attribute (/<cim:SwitchingStep.SwitchingAction\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingAction", sub, context);
                base.parse_attribute (/<cim:SwitchingStep.SwitchingStepGroup\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);
                let bucket = context.parsed.SwitchingStep;
                if (null == bucket)
                   context.parsed.SwitchingStep = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "SwitchingStep", "sequenceNumber", "sequenceNumber",  base.from_string, fields);
                base.export_attribute (obj, "SwitchingStep", "SwitchingAction", "SwitchingAction", fields);
                base.export_attribute (obj, "SwitchingStep", "SwitchingStepGroup", "SwitchingStepGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SwitchingStep_collapse" aria-expanded="true" aria-controls="SwitchingStep_collapse" style="margin-left: 10px;">SwitchingStep</a></legend>
                    <div id="SwitchingStep_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
                    {{#SwitchingAction}}<div><b>SwitchingAction</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{SwitchingAction}}");}); return false;'>{{SwitchingAction}}</a></div>{{/SwitchingAction}}
                    {{#SwitchingStepGroup}}<div><b>SwitchingStepGroup</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{SwitchingStepGroup}}");}); return false;'>{{SwitchingStepGroup}}</a></div>{{/SwitchingStepGroup}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SwitchingStep_collapse" aria-expanded="true" aria-controls="{{id}}_SwitchingStep_collapse" style="margin-left: 10px;">SwitchingStep</a></legend>
                    <div id="{{id}}_SwitchingStep_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sequenceNumber'>sequenceNumber: </label><div class='col-sm-8'><input id='{{id}}_sequenceNumber' class='form-control' type='text'{{#sequenceNumber}} value='{{sequenceNumber}}'{{/sequenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SwitchingAction'>SwitchingAction: </label><div class='col-sm-8'><input id='{{id}}_SwitchingAction' class='form-control' type='text'{{#SwitchingAction}} value='{{SwitchingAction}}'{{/SwitchingAction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SwitchingStepGroup'>SwitchingStepGroup: </label><div class='col-sm-8'><input id='{{id}}_SwitchingStepGroup' class='form-control' type='text'{{#SwitchingStepGroup}} value='{{SwitchingStepGroup}}'{{/SwitchingStepGroup}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SwitchingStep" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_sequenceNumber").value; if ("" !== temp) obj["sequenceNumber"] = temp;
                temp = document.getElementById (id + "_SwitchingAction").value; if ("" !== temp) obj["SwitchingAction"] = temp;
                temp = document.getElementById (id + "_SwitchingStepGroup").value; if ("" !== temp) obj["SwitchingStepGroup"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["SwitchingAction", "1", "0..1", "SwitchingAction", "SwitchingStep"],
                            ["SwitchingStepGroup", "0..1", "0..*", "SwitchingStepGroup", "SwitchingStep"]
                        ]
                    )
                );
            }
        }

        /**
         * Description of a problem in the field that may be reported in a trouble ticket or come from another source.
         *
         * It may have to do with an outage.
         *
         */
        class Incident extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Incident;
                if (null == bucket)
                   cim_data.Incident = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Incident[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "Incident";
                base.parse_element (/<cim:Incident.cause>([\s\S]*?)<\/cim:Incident.cause>/g, obj, "cause", base.to_string, sub, context);
                base.parse_attribute (/<cim:Incident.TroubleOrder\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TroubleOrder", sub, context);
                base.parse_attributes (/<cim:Incident.Works\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Works", sub, context);
                base.parse_attributes (/<cim:Incident.TroubleTickets\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TroubleTickets", sub, context);
                base.parse_attribute (/<cim:Incident.Location\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Location", sub, context);
                base.parse_attributes (/<cim:Incident.IncidentHazard\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "IncidentHazard", sub, context);
                base.parse_attribute (/<cim:Incident.Owner\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Owner", sub, context);
                base.parse_attributes (/<cim:Incident.CustomerNotifications\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CustomerNotifications", sub, context);
                base.parse_attribute (/<cim:Incident.Outage\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Outage", sub, context);
                let bucket = context.parsed.Incident;
                if (null == bucket)
                   context.parsed.Incident = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "Incident", "cause", "cause",  base.from_string, fields);
                base.export_attribute (obj, "Incident", "TroubleOrder", "TroubleOrder", fields);
                base.export_attributes (obj, "Incident", "Works", "Works", fields);
                base.export_attributes (obj, "Incident", "TroubleTickets", "TroubleTickets", fields);
                base.export_attribute (obj, "Incident", "Location", "Location", fields);
                base.export_attributes (obj, "Incident", "IncidentHazard", "IncidentHazard", fields);
                base.export_attribute (obj, "Incident", "Owner", "Owner", fields);
                base.export_attributes (obj, "Incident", "CustomerNotifications", "CustomerNotifications", fields);
                base.export_attribute (obj, "Incident", "Outage", "Outage", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Incident_collapse" aria-expanded="true" aria-controls="Incident_collapse" style="margin-left: 10px;">Incident</a></legend>
                    <div id="Incident_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#cause}}<div><b>cause</b>: {{cause}}</div>{{/cause}}
                    {{#TroubleOrder}}<div><b>TroubleOrder</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{TroubleOrder}}");}); return false;'>{{TroubleOrder}}</a></div>{{/TroubleOrder}}
                    {{#Works}}<div><b>Works</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Works}}
                    {{#TroubleTickets}}<div><b>TroubleTickets</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TroubleTickets}}
                    {{#Location}}<div><b>Location</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Location}}");}); return false;'>{{Location}}</a></div>{{/Location}}
                    {{#IncidentHazard}}<div><b>IncidentHazard</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/IncidentHazard}}
                    {{#Owner}}<div><b>Owner</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Owner}}");}); return false;'>{{Owner}}</a></div>{{/Owner}}
                    {{#CustomerNotifications}}<div><b>CustomerNotifications</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CustomerNotifications}}
                    {{#Outage}}<div><b>Outage</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Outage}}");}); return false;'>{{Outage}}</a></div>{{/Outage}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Works"]) obj["Works_string"] = obj["Works"].join ();
                if (obj["TroubleTickets"]) obj["TroubleTickets_string"] = obj["TroubleTickets"].join ();
                if (obj["IncidentHazard"]) obj["IncidentHazard_string"] = obj["IncidentHazard"].join ();
                if (obj["CustomerNotifications"]) obj["CustomerNotifications_string"] = obj["CustomerNotifications"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Works_string"];
                delete obj["TroubleTickets_string"];
                delete obj["IncidentHazard_string"];
                delete obj["CustomerNotifications_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Incident_collapse" aria-expanded="true" aria-controls="{{id}}_Incident_collapse" style="margin-left: 10px;">Incident</a></legend>
                    <div id="{{id}}_Incident_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cause'>cause: </label><div class='col-sm-8'><input id='{{id}}_cause' class='form-control' type='text'{{#cause}} value='{{cause}}'{{/cause}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TroubleOrder'>TroubleOrder: </label><div class='col-sm-8'><input id='{{id}}_TroubleOrder' class='form-control' type='text'{{#TroubleOrder}} value='{{TroubleOrder}}'{{/TroubleOrder}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Works'>Works: </label><div class='col-sm-8'><input id='{{id}}_Works' class='form-control' type='text'{{#Works}} value='{{Works_string}}'{{/Works}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Location'>Location: </label><div class='col-sm-8'><input id='{{id}}_Location' class='form-control' type='text'{{#Location}} value='{{Location}}'{{/Location}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Owner'>Owner: </label><div class='col-sm-8'><input id='{{id}}_Owner' class='form-control' type='text'{{#Owner}} value='{{Owner}}'{{/Owner}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Outage'>Outage: </label><div class='col-sm-8'><input id='{{id}}_Outage' class='form-control' type='text'{{#Outage}} value='{{Outage}}'{{/Outage}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Incident" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_cause").value; if ("" !== temp) obj["cause"] = temp;
                temp = document.getElementById (id + "_TroubleOrder").value; if ("" !== temp) obj["TroubleOrder"] = temp;
                temp = document.getElementById (id + "_Works").value; if ("" !== temp) obj["Works"] = temp.split (",");
                temp = document.getElementById (id + "_Location").value; if ("" !== temp) obj["Location"] = temp;
                temp = document.getElementById (id + "_Owner").value; if ("" !== temp) obj["Owner"] = temp;
                temp = document.getElementById (id + "_Outage").value; if ("" !== temp) obj["Outage"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TroubleOrder", "0..1", "0..1", "TroubleOrder", "Incident"],
                            ["Works", "0..*", "0..*", "Work", "Incidents"],
                            ["TroubleTickets", "0..*", "0..1", "TroubleTicket", "Incident"],
                            ["Location", "0..1", "0..1", "Location", "Incident"],
                            ["IncidentHazard", "0..*", "0..1", "IncidentHazard", "Incident"],
                            ["Owner", "0..1", "0..*", "Operator", "Incidents"],
                            ["CustomerNotifications", "0..*", "0..1", "CustomerNotification", "Incident"],
                            ["Outage", "0..1", "0..*", "Outage", "Incident"]
                        ]
                    )
                );
            }
        }

        /**
         * Document describing details of an active or planned outage in a part of the electrical network.
         *
         * A non-planned outage may be created upon:
         * - a breaker trip,
         * - a fault indicator status change,
         * - a meter event indicating customer outage,
         * - a reception of one or more customer trouble calls, or
         * - an operator command, reflecting information obtained from the field crew.
         * Outage restoration may be performed using a switching plan which complements the outage information with detailed switching activities, including the relationship to the crew and work.
         * A planned outage may be created upon:
         * - a request for service, maintenance or construction work in the field, or
         * - an operator-defined outage for what-if/contingency network analysis.
         *
         */
        class Outage extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Outage;
                if (null == bucket)
                   cim_data.Outage = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Outage[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "Outage";
                base.parse_element (/<cim:Outage.originalMetersAffected>([\s\S]*?)<\/cim:Outage.originalMetersAffected>/g, obj, "originalMetersAffected", base.to_string, sub, context);
                base.parse_element (/<cim:Outage.utilityDisclaimer>([\s\S]*?)<\/cim:Outage.utilityDisclaimer>/g, obj, "utilityDisclaimer", base.to_string, sub, context);
                base.parse_attribute (/<cim:Outage.statusKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "statusKind", sub, context);
                base.parse_attribute (/<cim:Outage.outageKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "outageKind", sub, context);
                base.parse_attribute (/<cim:Outage.actualPeriod\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "actualPeriod", sub, context);
                base.parse_attribute (/<cim:Outage.estimatedPeriod\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "estimatedPeriod", sub, context);
                base.parse_attribute (/<cim:Outage.summary\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "summary", sub, context);
                base.parse_element (/<cim:Outage.communityDescriptor>([\s\S]*?)<\/cim:Outage.communityDescriptor>/g, obj, "communityDescriptor", base.to_string, sub, context);
                base.parse_element (/<cim:Outage.customersRestored>([\s\S]*?)<\/cim:Outage.customersRestored>/g, obj, "customersRestored", base.to_string, sub, context);
                base.parse_element (/<cim:Outage.originalCustomersServed>([\s\S]*?)<\/cim:Outage.originalCustomersServed>/g, obj, "originalCustomersServed", base.to_string, sub, context);
                base.parse_element (/<cim:Outage.metersAffected>([\s\S]*?)<\/cim:Outage.metersAffected>/g, obj, "metersAffected", base.to_string, sub, context);
                base.parse_attributes (/<cim:Outage.EnergizedUsagePoint\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnergizedUsagePoint", sub, context);
                base.parse_attributes (/<cim:Outage.SwitchingPlans\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingPlans", sub, context);
                base.parse_attributes (/<cim:Outage.Faults\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Faults", sub, context);
                base.parse_attributes (/<cim:Outage.PlannedSwitchActions\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PlannedSwitchActions", sub, context);
                base.parse_attributes (/<cim:Outage.OutageArea\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OutageArea", sub, context);
                base.parse_attributes (/<cim:Outage.OpenedSwitches\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OpenedSwitches", sub, context);
                base.parse_attributes (/<cim:Outage.Equipments\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Equipments", sub, context);
                base.parse_attributes (/<cim:Outage.DeEnergizedUsagePoint\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DeEnergizedUsagePoint", sub, context);
                base.parse_attributes (/<cim:Outage.Crew\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Crew", sub, context);
                base.parse_attribute (/<cim:Outage.EstimatedRestorationTime\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EstimatedRestorationTime", sub, context);
                base.parse_attributes (/<cim:Outage.Incident\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Incident", sub, context);
                let bucket = context.parsed.Outage;
                if (null == bucket)
                   context.parsed.Outage = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "Outage", "originalMetersAffected", "originalMetersAffected",  base.from_string, fields);
                base.export_element (obj, "Outage", "utilityDisclaimer", "utilityDisclaimer",  base.from_string, fields);
                base.export_attribute (obj, "Outage", "statusKind", "statusKind", fields);
                base.export_attribute (obj, "Outage", "outageKind", "outageKind", fields);
                base.export_attribute (obj, "Outage", "actualPeriod", "actualPeriod", fields);
                base.export_attribute (obj, "Outage", "estimatedPeriod", "estimatedPeriod", fields);
                base.export_attribute (obj, "Outage", "summary", "summary", fields);
                base.export_element (obj, "Outage", "communityDescriptor", "communityDescriptor",  base.from_string, fields);
                base.export_element (obj, "Outage", "customersRestored", "customersRestored",  base.from_string, fields);
                base.export_element (obj, "Outage", "originalCustomersServed", "originalCustomersServed",  base.from_string, fields);
                base.export_element (obj, "Outage", "metersAffected", "metersAffected",  base.from_string, fields);
                base.export_attributes (obj, "Outage", "EnergizedUsagePoint", "EnergizedUsagePoint", fields);
                base.export_attributes (obj, "Outage", "SwitchingPlans", "SwitchingPlans", fields);
                base.export_attributes (obj, "Outage", "Faults", "Faults", fields);
                base.export_attributes (obj, "Outage", "PlannedSwitchActions", "PlannedSwitchActions", fields);
                base.export_attributes (obj, "Outage", "OutageArea", "OutageArea", fields);
                base.export_attributes (obj, "Outage", "OpenedSwitches", "OpenedSwitches", fields);
                base.export_attributes (obj, "Outage", "Equipments", "Equipments", fields);
                base.export_attributes (obj, "Outage", "DeEnergizedUsagePoint", "DeEnergizedUsagePoint", fields);
                base.export_attributes (obj, "Outage", "Crew", "Crew", fields);
                base.export_attribute (obj, "Outage", "EstimatedRestorationTime", "EstimatedRestorationTime", fields);
                base.export_attributes (obj, "Outage", "Incident", "Incident", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Outage_collapse" aria-expanded="true" aria-controls="Outage_collapse" style="margin-left: 10px;">Outage</a></legend>
                    <div id="Outage_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#originalMetersAffected}}<div><b>originalMetersAffected</b>: {{originalMetersAffected}}</div>{{/originalMetersAffected}}
                    {{#utilityDisclaimer}}<div><b>utilityDisclaimer</b>: {{utilityDisclaimer}}</div>{{/utilityDisclaimer}}
                    {{#statusKind}}<div><b>statusKind</b>: {{statusKind}}</div>{{/statusKind}}
                    {{#outageKind}}<div><b>outageKind</b>: {{outageKind}}</div>{{/outageKind}}
                    {{#actualPeriod}}<div><b>actualPeriod</b>: {{actualPeriod}}</div>{{/actualPeriod}}
                    {{#estimatedPeriod}}<div><b>estimatedPeriod</b>: {{estimatedPeriod}}</div>{{/estimatedPeriod}}
                    {{#summary}}<div><b>summary</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{summary}}");}); return false;'>{{summary}}</a></div>{{/summary}}
                    {{#communityDescriptor}}<div><b>communityDescriptor</b>: {{communityDescriptor}}</div>{{/communityDescriptor}}
                    {{#customersRestored}}<div><b>customersRestored</b>: {{customersRestored}}</div>{{/customersRestored}}
                    {{#originalCustomersServed}}<div><b>originalCustomersServed</b>: {{originalCustomersServed}}</div>{{/originalCustomersServed}}
                    {{#metersAffected}}<div><b>metersAffected</b>: {{metersAffected}}</div>{{/metersAffected}}
                    {{#EnergizedUsagePoint}}<div><b>EnergizedUsagePoint</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EnergizedUsagePoint}}
                    {{#SwitchingPlans}}<div><b>SwitchingPlans</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/SwitchingPlans}}
                    {{#Faults}}<div><b>Faults</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Faults}}
                    {{#PlannedSwitchActions}}<div><b>PlannedSwitchActions</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/PlannedSwitchActions}}
                    {{#OutageArea}}<div><b>OutageArea</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/OutageArea}}
                    {{#OpenedSwitches}}<div><b>OpenedSwitches</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/OpenedSwitches}}
                    {{#Equipments}}<div><b>Equipments</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Equipments}}
                    {{#DeEnergizedUsagePoint}}<div><b>DeEnergizedUsagePoint</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/DeEnergizedUsagePoint}}
                    {{#Crew}}<div><b>Crew</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Crew}}
                    {{#EstimatedRestorationTime}}<div><b>EstimatedRestorationTime</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{EstimatedRestorationTime}}");}); return false;'>{{EstimatedRestorationTime}}</a></div>{{/EstimatedRestorationTime}}
                    {{#Incident}}<div><b>Incident</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Incident}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["statusKindCrewStatusKind"] = [{ id: '', selected: (!obj["statusKind"])}]; for (let property in Common.CrewStatusKind) obj["statusKindCrewStatusKind"].push ({ id: property, selected: obj["statusKind"] && obj["statusKind"].endsWith ('.' + property)});
                obj["outageKindOutageStatusKind"] = [{ id: '', selected: (!obj["outageKind"])}]; for (let property in OutageStatusKind) obj["outageKindOutageStatusKind"].push ({ id: property, selected: obj["outageKind"] && obj["outageKind"].endsWith ('.' + property)});
                if (obj["EnergizedUsagePoint"]) obj["EnergizedUsagePoint_string"] = obj["EnergizedUsagePoint"].join ();
                if (obj["SwitchingPlans"]) obj["SwitchingPlans_string"] = obj["SwitchingPlans"].join ();
                if (obj["Faults"]) obj["Faults_string"] = obj["Faults"].join ();
                if (obj["PlannedSwitchActions"]) obj["PlannedSwitchActions_string"] = obj["PlannedSwitchActions"].join ();
                if (obj["OutageArea"]) obj["OutageArea_string"] = obj["OutageArea"].join ();
                if (obj["OpenedSwitches"]) obj["OpenedSwitches_string"] = obj["OpenedSwitches"].join ();
                if (obj["Equipments"]) obj["Equipments_string"] = obj["Equipments"].join ();
                if (obj["DeEnergizedUsagePoint"]) obj["DeEnergizedUsagePoint_string"] = obj["DeEnergizedUsagePoint"].join ();
                if (obj["Crew"]) obj["Crew_string"] = obj["Crew"].join ();
                if (obj["Incident"]) obj["Incident_string"] = obj["Incident"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["statusKindCrewStatusKind"];
                delete obj["outageKindOutageStatusKind"];
                delete obj["EnergizedUsagePoint_string"];
                delete obj["SwitchingPlans_string"];
                delete obj["Faults_string"];
                delete obj["PlannedSwitchActions_string"];
                delete obj["OutageArea_string"];
                delete obj["OpenedSwitches_string"];
                delete obj["Equipments_string"];
                delete obj["DeEnergizedUsagePoint_string"];
                delete obj["Crew_string"];
                delete obj["Incident_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Outage_collapse" aria-expanded="true" aria-controls="{{id}}_Outage_collapse" style="margin-left: 10px;">Outage</a></legend>
                    <div id="{{id}}_Outage_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_originalMetersAffected'>originalMetersAffected: </label><div class='col-sm-8'><input id='{{id}}_originalMetersAffected' class='form-control' type='text'{{#originalMetersAffected}} value='{{originalMetersAffected}}'{{/originalMetersAffected}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_utilityDisclaimer'>utilityDisclaimer: </label><div class='col-sm-8'><input id='{{id}}_utilityDisclaimer' class='form-control' type='text'{{#utilityDisclaimer}} value='{{utilityDisclaimer}}'{{/utilityDisclaimer}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_statusKind'>statusKind: </label><div class='col-sm-8'><select id='{{id}}_statusKind' class='form-control custom-select'>{{#statusKindCrewStatusKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/statusKindCrewStatusKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_outageKind'>outageKind: </label><div class='col-sm-8'><select id='{{id}}_outageKind' class='form-control custom-select'>{{#outageKindOutageStatusKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/outageKindOutageStatusKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_actualPeriod'>actualPeriod: </label><div class='col-sm-8'><input id='{{id}}_actualPeriod' class='form-control' type='text'{{#actualPeriod}} value='{{actualPeriod}}'{{/actualPeriod}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_estimatedPeriod'>estimatedPeriod: </label><div class='col-sm-8'><input id='{{id}}_estimatedPeriod' class='form-control' type='text'{{#estimatedPeriod}} value='{{estimatedPeriod}}'{{/estimatedPeriod}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_summary'>summary: </label><div class='col-sm-8'><input id='{{id}}_summary' class='form-control' type='text'{{#summary}} value='{{summary}}'{{/summary}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_communityDescriptor'>communityDescriptor: </label><div class='col-sm-8'><input id='{{id}}_communityDescriptor' class='form-control' type='text'{{#communityDescriptor}} value='{{communityDescriptor}}'{{/communityDescriptor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_customersRestored'>customersRestored: </label><div class='col-sm-8'><input id='{{id}}_customersRestored' class='form-control' type='text'{{#customersRestored}} value='{{customersRestored}}'{{/customersRestored}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_originalCustomersServed'>originalCustomersServed: </label><div class='col-sm-8'><input id='{{id}}_originalCustomersServed' class='form-control' type='text'{{#originalCustomersServed}} value='{{originalCustomersServed}}'{{/originalCustomersServed}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_metersAffected'>metersAffected: </label><div class='col-sm-8'><input id='{{id}}_metersAffected' class='form-control' type='text'{{#metersAffected}} value='{{metersAffected}}'{{/metersAffected}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnergizedUsagePoint'>EnergizedUsagePoint: </label><div class='col-sm-8'><input id='{{id}}_EnergizedUsagePoint' class='form-control' type='text'{{#EnergizedUsagePoint}} value='{{EnergizedUsagePoint_string}}'{{/EnergizedUsagePoint}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OutageArea'>OutageArea: </label><div class='col-sm-8'><input id='{{id}}_OutageArea' class='form-control' type='text'{{#OutageArea}} value='{{OutageArea_string}}'{{/OutageArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Equipments'>Equipments: </label><div class='col-sm-8'><input id='{{id}}_Equipments' class='form-control' type='text'{{#Equipments}} value='{{Equipments_string}}'{{/Equipments}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DeEnergizedUsagePoint'>DeEnergizedUsagePoint: </label><div class='col-sm-8'><input id='{{id}}_DeEnergizedUsagePoint' class='form-control' type='text'{{#DeEnergizedUsagePoint}} value='{{DeEnergizedUsagePoint_string}}'{{/DeEnergizedUsagePoint}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Crew'>Crew: </label><div class='col-sm-8'><input id='{{id}}_Crew' class='form-control' type='text'{{#Crew}} value='{{Crew_string}}'{{/Crew}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EstimatedRestorationTime'>EstimatedRestorationTime: </label><div class='col-sm-8'><input id='{{id}}_EstimatedRestorationTime' class='form-control' type='text'{{#EstimatedRestorationTime}} value='{{EstimatedRestorationTime}}'{{/EstimatedRestorationTime}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Outage" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_originalMetersAffected").value; if ("" !== temp) obj["originalMetersAffected"] = temp;
                temp = document.getElementById (id + "_utilityDisclaimer").value; if ("" !== temp) obj["utilityDisclaimer"] = temp;
                temp = Common.CrewStatusKind[document.getElementById (id + "_statusKind").value]; if (temp) obj["statusKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#CrewStatusKind." + temp; else delete obj["statusKind"];
                temp = OutageStatusKind[document.getElementById (id + "_outageKind").value]; if (temp) obj["outageKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#OutageStatusKind." + temp; else delete obj["outageKind"];
                temp = document.getElementById (id + "_actualPeriod").value; if ("" !== temp) obj["actualPeriod"] = temp;
                temp = document.getElementById (id + "_estimatedPeriod").value; if ("" !== temp) obj["estimatedPeriod"] = temp;
                temp = document.getElementById (id + "_summary").value; if ("" !== temp) obj["summary"] = temp;
                temp = document.getElementById (id + "_communityDescriptor").value; if ("" !== temp) obj["communityDescriptor"] = temp;
                temp = document.getElementById (id + "_customersRestored").value; if ("" !== temp) obj["customersRestored"] = temp;
                temp = document.getElementById (id + "_originalCustomersServed").value; if ("" !== temp) obj["originalCustomersServed"] = temp;
                temp = document.getElementById (id + "_metersAffected").value; if ("" !== temp) obj["metersAffected"] = temp;
                temp = document.getElementById (id + "_EnergizedUsagePoint").value; if ("" !== temp) obj["EnergizedUsagePoint"] = temp.split (",");
                temp = document.getElementById (id + "_OutageArea").value; if ("" !== temp) obj["OutageArea"] = temp.split (",");
                temp = document.getElementById (id + "_Equipments").value; if ("" !== temp) obj["Equipments"] = temp.split (",");
                temp = document.getElementById (id + "_DeEnergizedUsagePoint").value; if ("" !== temp) obj["DeEnergizedUsagePoint"] = temp.split (",");
                temp = document.getElementById (id + "_Crew").value; if ("" !== temp) obj["Crew"] = temp.split (",");
                temp = document.getElementById (id + "_EstimatedRestorationTime").value; if ("" !== temp) obj["EstimatedRestorationTime"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EnergizedUsagePoint", "0..*", "0..*", "UsagePoint", "Outage"],
                            ["SwitchingPlans", "0..*", "0..1", "SwitchingPlan", "Outage"],
                            ["Faults", "0..*", "0..1", "Fault", "Outage"],
                            ["PlannedSwitchActions", "0..*", "0..1", "SwitchAction", "PlannedOutage"],
                            ["OutageArea", "0..*", "0..*", "OutageArea", "Outage"],
                            ["OpenedSwitches", "0..*", "0..1", "Switch", "Outage"],
                            ["Equipments", "0..*", "0..*", "Equipment", "Outages"],
                            ["DeEnergizedUsagePoint", "0..*", "0..*", "UsagePoint", "Outage"],
                            ["Crew", "0..*", "0..*", "Crew", "Outage"],
                            ["EstimatedRestorationTime", "0..1", "0..*", "EstimatedRestorationTime", "Outage"],
                            ["Incident", "0..*", "0..1", "Incident", "Outage"]
                        ]
                    )
                );
            }
        }

        /**
         * Operator with responsibility that the work in high voltage installation is executed in a safe manner and according to safety regulation.
         *
         */
        class OperationsSafetySupervisor extends Common.Operator
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OperationsSafetySupervisor;
                if (null == bucket)
                   cim_data.OperationsSafetySupervisor = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OperationsSafetySupervisor[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Operator.prototype.parse.call (this, context, sub);
                obj.cls = "OperationsSafetySupervisor";
                base.parse_attributes (/<cim:OperationsSafetySupervisor.IssuedSafetyDocuments\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "IssuedSafetyDocuments", sub, context);
                base.parse_attributes (/<cim:OperationsSafetySupervisor.ReleasedSafetyDocuments\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ReleasedSafetyDocuments", sub, context);
                let bucket = context.parsed.OperationsSafetySupervisor;
                if (null == bucket)
                   context.parsed.OperationsSafetySupervisor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Operator.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "OperationsSafetySupervisor", "IssuedSafetyDocuments", "IssuedSafetyDocuments", fields);
                base.export_attributes (obj, "OperationsSafetySupervisor", "ReleasedSafetyDocuments", "ReleasedSafetyDocuments", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OperationsSafetySupervisor_collapse" aria-expanded="true" aria-controls="OperationsSafetySupervisor_collapse" style="margin-left: 10px;">OperationsSafetySupervisor</a></legend>
                    <div id="OperationsSafetySupervisor_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Operator.prototype.template.call (this) +
                    `
                    {{#IssuedSafetyDocuments}}<div><b>IssuedSafetyDocuments</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/IssuedSafetyDocuments}}
                    {{#ReleasedSafetyDocuments}}<div><b>ReleasedSafetyDocuments</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ReleasedSafetyDocuments}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["IssuedSafetyDocuments"]) obj["IssuedSafetyDocuments_string"] = obj["IssuedSafetyDocuments"].join ();
                if (obj["ReleasedSafetyDocuments"]) obj["ReleasedSafetyDocuments_string"] = obj["ReleasedSafetyDocuments"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["IssuedSafetyDocuments_string"];
                delete obj["ReleasedSafetyDocuments_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OperationsSafetySupervisor_collapse" aria-expanded="true" aria-controls="{{id}}_OperationsSafetySupervisor_collapse" style="margin-left: 10px;">OperationsSafetySupervisor</a></legend>
                    <div id="{{id}}_OperationsSafetySupervisor_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Operator.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "OperationsSafetySupervisor" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["IssuedSafetyDocuments", "0..*", "0..1", "SafetyDocument", "IssuedBySupervisor"],
                            ["ReleasedSafetyDocuments", "0..*", "0..1", "SafetyDocument", "ReleasedToSupervisor"]
                        ]
                    )
                );
            }
        }

        /**
         * Action on ground as a switching step.
         *
         */
        class GroundAction extends SwitchingAction
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.GroundAction;
                if (null == bucket)
                   cim_data.GroundAction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GroundAction[obj.id];
            }

            parse (context, sub)
            {
                let obj = SwitchingAction.prototype.parse.call (this, context, sub);
                obj.cls = "GroundAction";
                base.parse_attribute (/<cim:GroundAction.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:GroundAction.GroundedEquipment\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GroundedEquipment", sub, context);
                base.parse_attribute (/<cim:GroundAction.AlongACLineSegment\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AlongACLineSegment", sub, context);
                base.parse_attribute (/<cim:GroundAction.Ground\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Ground", sub, context);
                let bucket = context.parsed.GroundAction;
                if (null == bucket)
                   context.parsed.GroundAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = SwitchingAction.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "GroundAction", "kind", "kind", fields);
                base.export_attribute (obj, "GroundAction", "GroundedEquipment", "GroundedEquipment", fields);
                base.export_attribute (obj, "GroundAction", "AlongACLineSegment", "AlongACLineSegment", fields);
                base.export_attribute (obj, "GroundAction", "Ground", "Ground", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#GroundAction_collapse" aria-expanded="true" aria-controls="GroundAction_collapse" style="margin-left: 10px;">GroundAction</a></legend>
                    <div id="GroundAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingAction.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#GroundedEquipment}}<div><b>GroundedEquipment</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{GroundedEquipment}}");}); return false;'>{{GroundedEquipment}}</a></div>{{/GroundedEquipment}}
                    {{#AlongACLineSegment}}<div><b>AlongACLineSegment</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{AlongACLineSegment}}");}); return false;'>{{AlongACLineSegment}}</a></div>{{/AlongACLineSegment}}
                    {{#Ground}}<div><b>Ground</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Ground}}");}); return false;'>{{Ground}}</a></div>{{/Ground}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindTempEquipActionKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in TempEquipActionKind) obj["kindTempEquipActionKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindTempEquipActionKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_GroundAction_collapse" aria-expanded="true" aria-controls="{{id}}_GroundAction_collapse" style="margin-left: 10px;">GroundAction</a></legend>
                    <div id="{{id}}_GroundAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingAction.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindTempEquipActionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindTempEquipActionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GroundedEquipment'>GroundedEquipment: </label><div class='col-sm-8'><input id='{{id}}_GroundedEquipment' class='form-control' type='text'{{#GroundedEquipment}} value='{{GroundedEquipment}}'{{/GroundedEquipment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AlongACLineSegment'>AlongACLineSegment: </label><div class='col-sm-8'><input id='{{id}}_AlongACLineSegment' class='form-control' type='text'{{#AlongACLineSegment}} value='{{AlongACLineSegment}}'{{/AlongACLineSegment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Ground'>Ground: </label><div class='col-sm-8'><input id='{{id}}_Ground' class='form-control' type='text'{{#Ground}} value='{{Ground}}'{{/Ground}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "GroundAction" };
                super.submit (id, obj);
                temp = TempEquipActionKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#TempEquipActionKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_GroundedEquipment").value; if ("" !== temp) obj["GroundedEquipment"] = temp;
                temp = document.getElementById (id + "_AlongACLineSegment").value; if ("" !== temp) obj["AlongACLineSegment"] = temp;
                temp = document.getElementById (id + "_Ground").value; if ("" !== temp) obj["Ground"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["GroundedEquipment", "0..1", "0..1", "ConductingEquipment", "GroundingAction"],
                            ["AlongACLineSegment", "0..1", "0..1", "ACLineSegment", "LineGroundingAction"],
                            ["Ground", "0..1", "0..1", "Ground", "GroundAction"]
                        ]
                    )
                );
            }
        }

        /**
         * Action on clearance document as a switching step.
         *
         */
        class ClearanceAction extends SwitchingAction
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ClearanceAction;
                if (null == bucket)
                   cim_data.ClearanceAction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ClearanceAction[obj.id];
            }

            parse (context, sub)
            {
                let obj = SwitchingAction.prototype.parse.call (this, context, sub);
                obj.cls = "ClearanceAction";
                base.parse_attribute (/<cim:ClearanceAction.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:ClearanceAction.Clearance\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Clearance", sub, context);
                let bucket = context.parsed.ClearanceAction;
                if (null == bucket)
                   context.parsed.ClearanceAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = SwitchingAction.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ClearanceAction", "kind", "kind", fields);
                base.export_attribute (obj, "ClearanceAction", "Clearance", "Clearance", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ClearanceAction_collapse" aria-expanded="true" aria-controls="ClearanceAction_collapse" style="margin-left: 10px;">ClearanceAction</a></legend>
                    <div id="ClearanceAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingAction.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#Clearance}}<div><b>Clearance</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Clearance}}");}); return false;'>{{Clearance}}</a></div>{{/Clearance}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindClearanceActionKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in ClearanceActionKind) obj["kindClearanceActionKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindClearanceActionKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ClearanceAction_collapse" aria-expanded="true" aria-controls="{{id}}_ClearanceAction_collapse" style="margin-left: 10px;">ClearanceAction</a></legend>
                    <div id="{{id}}_ClearanceAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingAction.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindClearanceActionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindClearanceActionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Clearance'>Clearance: </label><div class='col-sm-8'><input id='{{id}}_Clearance' class='form-control' type='text'{{#Clearance}} value='{{Clearance}}'{{/Clearance}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ClearanceAction" };
                super.submit (id, obj);
                temp = ClearanceActionKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#ClearanceActionKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_Clearance").value; if ("" !== temp) obj["Clearance"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Clearance", "0..1", "0..1", "ClearanceDocument", "ClearanceAction"]
                        ]
                    )
                );
            }
        }

        /**
         * Action on switch as a switching step.
         *
         */
        class SwitchAction extends SwitchingAction
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SwitchAction;
                if (null == bucket)
                   cim_data.SwitchAction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SwitchAction[obj.id];
            }

            parse (context, sub)
            {
                let obj = SwitchingAction.prototype.parse.call (this, context, sub);
                obj.cls = "SwitchAction";
                base.parse_attribute (/<cim:SwitchAction.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:SwitchAction.OperatedSwitch\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OperatedSwitch", sub, context);
                base.parse_attribute (/<cim:SwitchAction.PlannedOutage\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PlannedOutage", sub, context);
                let bucket = context.parsed.SwitchAction;
                if (null == bucket)
                   context.parsed.SwitchAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = SwitchingAction.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "SwitchAction", "kind", "kind", fields);
                base.export_attribute (obj, "SwitchAction", "OperatedSwitch", "OperatedSwitch", fields);
                base.export_attribute (obj, "SwitchAction", "PlannedOutage", "PlannedOutage", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SwitchAction_collapse" aria-expanded="true" aria-controls="SwitchAction_collapse" style="margin-left: 10px;">SwitchAction</a></legend>
                    <div id="SwitchAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingAction.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#OperatedSwitch}}<div><b>OperatedSwitch</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{OperatedSwitch}}");}); return false;'>{{OperatedSwitch}}</a></div>{{/OperatedSwitch}}
                    {{#PlannedOutage}}<div><b>PlannedOutage</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{PlannedOutage}}");}); return false;'>{{PlannedOutage}}</a></div>{{/PlannedOutage}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindSwitchActionKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in SwitchActionKind) obj["kindSwitchActionKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindSwitchActionKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SwitchAction_collapse" aria-expanded="true" aria-controls="{{id}}_SwitchAction_collapse" style="margin-left: 10px;">SwitchAction</a></legend>
                    <div id="{{id}}_SwitchAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingAction.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindSwitchActionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindSwitchActionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OperatedSwitch'>OperatedSwitch: </label><div class='col-sm-8'><input id='{{id}}_OperatedSwitch' class='form-control' type='text'{{#OperatedSwitch}} value='{{OperatedSwitch}}'{{/OperatedSwitch}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PlannedOutage'>PlannedOutage: </label><div class='col-sm-8'><input id='{{id}}_PlannedOutage' class='form-control' type='text'{{#PlannedOutage}} value='{{PlannedOutage}}'{{/PlannedOutage}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SwitchAction" };
                super.submit (id, obj);
                temp = SwitchActionKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#SwitchActionKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_OperatedSwitch").value; if ("" !== temp) obj["OperatedSwitch"] = temp;
                temp = document.getElementById (id + "_PlannedOutage").value; if ("" !== temp) obj["PlannedOutage"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["OperatedSwitch", "0..1", "0..1", "Switch", "SwitchAction"],
                            ["PlannedOutage", "0..1", "0..*", "Outage", "PlannedSwitchActions"]
                        ]
                    )
                );
            }
        }

        /**
         * An arbitrary switching step.
         *
         */
        class GenericAction extends SwitchingAction
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.GenericAction;
                if (null == bucket)
                   cim_data.GenericAction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GenericAction[obj.id];
            }

            parse (context, sub)
            {
                let obj = SwitchingAction.prototype.parse.call (this, context, sub);
                obj.cls = "GenericAction";
                base.parse_attribute (/<cim:GenericAction.PowerSystemResource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemResource", sub, context);
                let bucket = context.parsed.GenericAction;
                if (null == bucket)
                   context.parsed.GenericAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = SwitchingAction.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "GenericAction", "PowerSystemResource", "PowerSystemResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#GenericAction_collapse" aria-expanded="true" aria-controls="GenericAction_collapse" style="margin-left: 10px;">GenericAction</a></legend>
                    <div id="GenericAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingAction.prototype.template.call (this) +
                    `
                    {{#PowerSystemResource}}<div><b>PowerSystemResource</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{PowerSystemResource}}");}); return false;'>{{PowerSystemResource}}</a></div>{{/PowerSystemResource}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_GenericAction_collapse" aria-expanded="true" aria-controls="{{id}}_GenericAction_collapse" style="margin-left: 10px;">GenericAction</a></legend>
                    <div id="{{id}}_GenericAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingAction.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PowerSystemResource'>PowerSystemResource: </label><div class='col-sm-8'><input id='{{id}}_PowerSystemResource' class='form-control' type='text'{{#PowerSystemResource}} value='{{PowerSystemResource}}'{{/PowerSystemResource}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "GenericAction" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_PowerSystemResource").value; if ("" !== temp) obj["PowerSystemResource"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PowerSystemResource", "0..1", "0..*", "PowerSystemResource", "GenericAction"]
                        ]
                    )
                );
            }
        }

        /**
         * Verification of a switch position or other condition as a switching step
         *
         */
        class VerificationAction extends SwitchingAction
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.VerificationAction;
                if (null == bucket)
                   cim_data.VerificationAction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.VerificationAction[obj.id];
            }

            parse (context, sub)
            {
                let obj = SwitchingAction.prototype.parse.call (this, context, sub);
                obj.cls = "VerificationAction";
                base.parse_element (/<cim:VerificationAction.verificationCondition>([\s\S]*?)<\/cim:VerificationAction.verificationCondition>/g, obj, "verificationCondition", base.to_string, sub, context);
                base.parse_attribute (/<cim:VerificationAction.PowerSystemResource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemResource", sub, context);
                let bucket = context.parsed.VerificationAction;
                if (null == bucket)
                   context.parsed.VerificationAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = SwitchingAction.prototype.export.call (this, obj, false);

                base.export_element (obj, "VerificationAction", "verificationCondition", "verificationCondition",  base.from_string, fields);
                base.export_attribute (obj, "VerificationAction", "PowerSystemResource", "PowerSystemResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#VerificationAction_collapse" aria-expanded="true" aria-controls="VerificationAction_collapse" style="margin-left: 10px;">VerificationAction</a></legend>
                    <div id="VerificationAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingAction.prototype.template.call (this) +
                    `
                    {{#verificationCondition}}<div><b>verificationCondition</b>: {{verificationCondition}}</div>{{/verificationCondition}}
                    {{#PowerSystemResource}}<div><b>PowerSystemResource</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{PowerSystemResource}}");}); return false;'>{{PowerSystemResource}}</a></div>{{/PowerSystemResource}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_VerificationAction_collapse" aria-expanded="true" aria-controls="{{id}}_VerificationAction_collapse" style="margin-left: 10px;">VerificationAction</a></legend>
                    <div id="{{id}}_VerificationAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingAction.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_verificationCondition'>verificationCondition: </label><div class='col-sm-8'><input id='{{id}}_verificationCondition' class='form-control' type='text'{{#verificationCondition}} value='{{verificationCondition}}'{{/verificationCondition}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PowerSystemResource'>PowerSystemResource: </label><div class='col-sm-8'><input id='{{id}}_PowerSystemResource' class='form-control' type='text'{{#PowerSystemResource}} value='{{PowerSystemResource}}'{{/PowerSystemResource}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "VerificationAction" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_verificationCondition").value; if ("" !== temp) obj["verificationCondition"] = temp;
                temp = document.getElementById (id + "_PowerSystemResource").value; if ("" !== temp) obj["PowerSystemResource"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PowerSystemResource", "0..1", "0..*", "PowerSystemResource", "VerificationAction"]
                        ]
                    )
                );
            }
        }

        /**
         * Action on energy source as a switching step.
         *
         */
        class EnergySourceAction extends SwitchingAction
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.EnergySourceAction;
                if (null == bucket)
                   cim_data.EnergySourceAction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EnergySourceAction[obj.id];
            }

            parse (context, sub)
            {
                let obj = SwitchingAction.prototype.parse.call (this, context, sub);
                obj.cls = "EnergySourceAction";
                base.parse_attribute (/<cim:EnergySourceAction.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:EnergySourceAction.EnergySource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnergySource", sub, context);
                let bucket = context.parsed.EnergySourceAction;
                if (null == bucket)
                   context.parsed.EnergySourceAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = SwitchingAction.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "EnergySourceAction", "kind", "kind", fields);
                base.export_attribute (obj, "EnergySourceAction", "EnergySource", "EnergySource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EnergySourceAction_collapse" aria-expanded="true" aria-controls="EnergySourceAction_collapse" style="margin-left: 10px;">EnergySourceAction</a></legend>
                    <div id="EnergySourceAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingAction.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#EnergySource}}<div><b>EnergySource</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{EnergySource}}");}); return false;'>{{EnergySource}}</a></div>{{/EnergySource}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindTempEquipActionKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in TempEquipActionKind) obj["kindTempEquipActionKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindTempEquipActionKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EnergySourceAction_collapse" aria-expanded="true" aria-controls="{{id}}_EnergySourceAction_collapse" style="margin-left: 10px;">EnergySourceAction</a></legend>
                    <div id="{{id}}_EnergySourceAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingAction.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindTempEquipActionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindTempEquipActionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnergySource'>EnergySource: </label><div class='col-sm-8'><input id='{{id}}_EnergySource' class='form-control' type='text'{{#EnergySource}} value='{{EnergySource}}'{{/EnergySource}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "EnergySourceAction" };
                super.submit (id, obj);
                temp = TempEquipActionKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#TempEquipActionKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_EnergySource").value; if ("" !== temp) obj["EnergySource"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EnergySource", "0..1", "0..1", "EnergySource", "EnergySourceAction"]
                        ]
                    )
                );
            }
        }

        /**
         * Action on operation tag as a switching step.
         *
         */
        class TagAction extends SwitchingAction
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.TagAction;
                if (null == bucket)
                   cim_data.TagAction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TagAction[obj.id];
            }

            parse (context, sub)
            {
                let obj = SwitchingAction.prototype.parse.call (this, context, sub);
                obj.cls = "TagAction";
                base.parse_attribute (/<cim:TagAction.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:TagAction.OperationalTag\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OperationalTag", sub, context);
                let bucket = context.parsed.TagAction;
                if (null == bucket)
                   context.parsed.TagAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = SwitchingAction.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "TagAction", "kind", "kind", fields);
                base.export_attribute (obj, "TagAction", "OperationalTag", "OperationalTag", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TagAction_collapse" aria-expanded="true" aria-controls="TagAction_collapse" style="margin-left: 10px;">TagAction</a></legend>
                    <div id="TagAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingAction.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#OperationalTag}}<div><b>OperationalTag</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{OperationalTag}}");}); return false;'>{{OperationalTag}}</a></div>{{/OperationalTag}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindTagActionKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in TagActionKind) obj["kindTagActionKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindTagActionKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TagAction_collapse" aria-expanded="true" aria-controls="{{id}}_TagAction_collapse" style="margin-left: 10px;">TagAction</a></legend>
                    <div id="{{id}}_TagAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingAction.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindTagActionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindTagActionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OperationalTag'>OperationalTag: </label><div class='col-sm-8'><input id='{{id}}_OperationalTag' class='form-control' type='text'{{#OperationalTag}} value='{{OperationalTag}}'{{/OperationalTag}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "TagAction" };
                super.submit (id, obj);
                temp = TagActionKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#TagActionKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_OperationalTag").value; if ("" !== temp) obj["OperationalTag"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["OperationalTag", "0..1", "0..1", "OperationalTag", "TagAction"]
                        ]
                    )
                );
            }
        }

        /**
         * Action on cut as a switching step.
         *
         */
        class CutAction extends SwitchingAction
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.CutAction;
                if (null == bucket)
                   cim_data.CutAction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CutAction[obj.id];
            }

            parse (context, sub)
            {
                let obj = SwitchingAction.prototype.parse.call (this, context, sub);
                obj.cls = "CutAction";
                base.parse_attribute (/<cim:CutAction.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:CutAction.Cut\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Cut", sub, context);
                let bucket = context.parsed.CutAction;
                if (null == bucket)
                   context.parsed.CutAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = SwitchingAction.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "CutAction", "kind", "kind", fields);
                base.export_attribute (obj, "CutAction", "Cut", "Cut", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CutAction_collapse" aria-expanded="true" aria-controls="CutAction_collapse" style="margin-left: 10px;">CutAction</a></legend>
                    <div id="CutAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingAction.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#Cut}}<div><b>Cut</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Cut}}");}); return false;'>{{Cut}}</a></div>{{/Cut}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindTempEquipActionKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in TempEquipActionKind) obj["kindTempEquipActionKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindTempEquipActionKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CutAction_collapse" aria-expanded="true" aria-controls="{{id}}_CutAction_collapse" style="margin-left: 10px;">CutAction</a></legend>
                    <div id="{{id}}_CutAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingAction.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindTempEquipActionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindTempEquipActionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Cut'>Cut: </label><div class='col-sm-8'><input id='{{id}}_Cut' class='form-control' type='text'{{#Cut}} value='{{Cut}}'{{/Cut}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CutAction" };
                super.submit (id, obj);
                temp = TempEquipActionKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#TempEquipActionKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_Cut").value; if ("" !== temp) obj["Cut"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Cut", "0..1", "0..1", "Cut", "CutAction"]
                        ]
                    )
                );
            }
        }

        /**
         * Action on jumper as a switching step.
         *
         */
        class JumperAction extends SwitchingAction
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.JumperAction;
                if (null == bucket)
                   cim_data.JumperAction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.JumperAction[obj.id];
            }

            parse (context, sub)
            {
                let obj = SwitchingAction.prototype.parse.call (this, context, sub);
                obj.cls = "JumperAction";
                base.parse_attribute (/<cim:JumperAction.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:JumperAction.Jumper\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Jumper", sub, context);
                base.parse_attributes (/<cim:JumperAction.JumpedEquipments\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "JumpedEquipments", sub, context);
                base.parse_attributes (/<cim:JumperAction.AlongACLineSegments\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AlongACLineSegments", sub, context);
                let bucket = context.parsed.JumperAction;
                if (null == bucket)
                   context.parsed.JumperAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = SwitchingAction.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "JumperAction", "kind", "kind", fields);
                base.export_attribute (obj, "JumperAction", "Jumper", "Jumper", fields);
                base.export_attributes (obj, "JumperAction", "JumpedEquipments", "JumpedEquipments", fields);
                base.export_attributes (obj, "JumperAction", "AlongACLineSegments", "AlongACLineSegments", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#JumperAction_collapse" aria-expanded="true" aria-controls="JumperAction_collapse" style="margin-left: 10px;">JumperAction</a></legend>
                    <div id="JumperAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingAction.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#Jumper}}<div><b>Jumper</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Jumper}}");}); return false;'>{{Jumper}}</a></div>{{/Jumper}}
                    {{#JumpedEquipments}}<div><b>JumpedEquipments</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/JumpedEquipments}}
                    {{#AlongACLineSegments}}<div><b>AlongACLineSegments</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AlongACLineSegments}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindTempEquipActionKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in TempEquipActionKind) obj["kindTempEquipActionKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
                if (obj["JumpedEquipments"]) obj["JumpedEquipments_string"] = obj["JumpedEquipments"].join ();
                if (obj["AlongACLineSegments"]) obj["AlongACLineSegments_string"] = obj["AlongACLineSegments"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindTempEquipActionKind"];
                delete obj["JumpedEquipments_string"];
                delete obj["AlongACLineSegments_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_JumperAction_collapse" aria-expanded="true" aria-controls="{{id}}_JumperAction_collapse" style="margin-left: 10px;">JumperAction</a></legend>
                    <div id="{{id}}_JumperAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingAction.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindTempEquipActionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindTempEquipActionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Jumper'>Jumper: </label><div class='col-sm-8'><input id='{{id}}_Jumper' class='form-control' type='text'{{#Jumper}} value='{{Jumper}}'{{/Jumper}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "JumperAction" };
                super.submit (id, obj);
                temp = TempEquipActionKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#TempEquipActionKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_Jumper").value; if ("" !== temp) obj["Jumper"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Jumper", "0..1", "0..1", "Jumper", "JumperAction"],
                            ["JumpedEquipments", "0..*", "0..1", "ConductingEquipment", "JumpingAction"],
                            ["AlongACLineSegments", "0..*", "0..1", "ACLineSegment", "LineJumpingAction"]
                        ]
                    )
                );
            }
        }

        /**
         * Control executed as a switching step.
         *
         */
        class ControlAction extends SwitchingAction
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ControlAction;
                if (null == bucket)
                   cim_data.ControlAction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ControlAction[obj.id];
            }

            parse (context, sub)
            {
                let obj = SwitchingAction.prototype.parse.call (this, context, sub);
                obj.cls = "ControlAction";
                base.parse_element (/<cim:ControlAction.analogValue>([\s\S]*?)<\/cim:ControlAction.analogValue>/g, obj, "analogValue", base.to_float, sub, context);
                base.parse_element (/<cim:ControlAction.discreteValue>([\s\S]*?)<\/cim:ControlAction.discreteValue>/g, obj, "discreteValue", base.to_string, sub, context);
                base.parse_attribute (/<cim:ControlAction.Control\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Control", sub, context);
                let bucket = context.parsed.ControlAction;
                if (null == bucket)
                   context.parsed.ControlAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = SwitchingAction.prototype.export.call (this, obj, false);

                base.export_element (obj, "ControlAction", "analogValue", "analogValue",  base.from_float, fields);
                base.export_element (obj, "ControlAction", "discreteValue", "discreteValue",  base.from_string, fields);
                base.export_attribute (obj, "ControlAction", "Control", "Control", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ControlAction_collapse" aria-expanded="true" aria-controls="ControlAction_collapse" style="margin-left: 10px;">ControlAction</a></legend>
                    <div id="ControlAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingAction.prototype.template.call (this) +
                    `
                    {{#analogValue}}<div><b>analogValue</b>: {{analogValue}}</div>{{/analogValue}}
                    {{#discreteValue}}<div><b>discreteValue</b>: {{discreteValue}}</div>{{/discreteValue}}
                    {{#Control}}<div><b>Control</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Control}}");}); return false;'>{{Control}}</a></div>{{/Control}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ControlAction_collapse" aria-expanded="true" aria-controls="{{id}}_ControlAction_collapse" style="margin-left: 10px;">ControlAction</a></legend>
                    <div id="{{id}}_ControlAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingAction.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_analogValue'>analogValue: </label><div class='col-sm-8'><input id='{{id}}_analogValue' class='form-control' type='text'{{#analogValue}} value='{{analogValue}}'{{/analogValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_discreteValue'>discreteValue: </label><div class='col-sm-8'><input id='{{id}}_discreteValue' class='form-control' type='text'{{#discreteValue}} value='{{discreteValue}}'{{/discreteValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Control'>Control: </label><div class='col-sm-8'><input id='{{id}}_Control' class='form-control' type='text'{{#Control}} value='{{Control}}'{{/Control}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ControlAction" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_analogValue").value; if ("" !== temp) obj["analogValue"] = temp;
                temp = document.getElementById (id + "_discreteValue").value; if ("" !== temp) obj["discreteValue"] = temp;
                temp = document.getElementById (id + "_Control").value; if ("" !== temp) obj["Control"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Control", "0..1", "0..1", "Control", "ControlAction"]
                        ]
                    )
                );
            }
        }

        /**
         * Measurement taken as a switching step.
         *
         */
        class MeasurementAction extends SwitchingAction
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MeasurementAction;
                if (null == bucket)
                   cim_data.MeasurementAction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MeasurementAction[obj.id];
            }

            parse (context, sub)
            {
                let obj = SwitchingAction.prototype.parse.call (this, context, sub);
                obj.cls = "MeasurementAction";
                base.parse_attribute (/<cim:MeasurementAction.Measurement\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Measurement", sub, context);
                let bucket = context.parsed.MeasurementAction;
                if (null == bucket)
                   context.parsed.MeasurementAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = SwitchingAction.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MeasurementAction", "Measurement", "Measurement", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MeasurementAction_collapse" aria-expanded="true" aria-controls="MeasurementAction_collapse" style="margin-left: 10px;">MeasurementAction</a></legend>
                    <div id="MeasurementAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingAction.prototype.template.call (this) +
                    `
                    {{#Measurement}}<div><b>Measurement</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Measurement}}");}); return false;'>{{Measurement}}</a></div>{{/Measurement}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MeasurementAction_collapse" aria-expanded="true" aria-controls="{{id}}_MeasurementAction_collapse" style="margin-left: 10px;">MeasurementAction</a></legend>
                    <div id="{{id}}_MeasurementAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingAction.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Measurement'>Measurement: </label><div class='col-sm-8'><input id='{{id}}_Measurement' class='form-control' type='text'{{#Measurement}} value='{{Measurement}}'{{/Measurement}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MeasurementAction" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Measurement").value; if ("" !== temp) obj["Measurement"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Measurement", "0..1", "0..1", "Measurement", "MeasurementAction"]
                        ]
                    )
                );
            }
        }

        /**
         * Safety document used to authorise work on conducting equipment in the field.
         *
         * Tagged equipment is not allowed to be operated.
         *
         */
        class ClearanceDocument extends SafetyDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ClearanceDocument;
                if (null == bucket)
                   cim_data.ClearanceDocument = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ClearanceDocument[obj.id];
            }

            parse (context, sub)
            {
                let obj = SafetyDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ClearanceDocument";
                base.parse_element (/<cim:ClearanceDocument.mustBeDeenergised>([\s\S]*?)<\/cim:ClearanceDocument.mustBeDeenergised>/g, obj, "mustBeDeenergised", base.to_boolean, sub, context);
                base.parse_element (/<cim:ClearanceDocument.mustBeGrounded>([\s\S]*?)<\/cim:ClearanceDocument.mustBeGrounded>/g, obj, "mustBeGrounded", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:ClearanceDocument.ClearanceAction\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ClearanceAction", sub, context);
                base.parse_attributes (/<cim:ClearanceDocument.TaggedPSRs\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TaggedPSRs", sub, context);
                let bucket = context.parsed.ClearanceDocument;
                if (null == bucket)
                   context.parsed.ClearanceDocument = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = SafetyDocument.prototype.export.call (this, obj, false);

                base.export_element (obj, "ClearanceDocument", "mustBeDeenergised", "mustBeDeenergised",  base.from_boolean, fields);
                base.export_element (obj, "ClearanceDocument", "mustBeGrounded", "mustBeGrounded",  base.from_boolean, fields);
                base.export_attribute (obj, "ClearanceDocument", "ClearanceAction", "ClearanceAction", fields);
                base.export_attributes (obj, "ClearanceDocument", "TaggedPSRs", "TaggedPSRs", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ClearanceDocument_collapse" aria-expanded="true" aria-controls="ClearanceDocument_collapse" style="margin-left: 10px;">ClearanceDocument</a></legend>
                    <div id="ClearanceDocument_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SafetyDocument.prototype.template.call (this) +
                    `
                    {{#mustBeDeenergised}}<div><b>mustBeDeenergised</b>: {{mustBeDeenergised}}</div>{{/mustBeDeenergised}}
                    {{#mustBeGrounded}}<div><b>mustBeGrounded</b>: {{mustBeGrounded}}</div>{{/mustBeGrounded}}
                    {{#ClearanceAction}}<div><b>ClearanceAction</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ClearanceAction}}");}); return false;'>{{ClearanceAction}}</a></div>{{/ClearanceAction}}
                    {{#TaggedPSRs}}<div><b>TaggedPSRs</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TaggedPSRs}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["TaggedPSRs"]) obj["TaggedPSRs_string"] = obj["TaggedPSRs"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["TaggedPSRs_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ClearanceDocument_collapse" aria-expanded="true" aria-controls="{{id}}_ClearanceDocument_collapse" style="margin-left: 10px;">ClearanceDocument</a></legend>
                    <div id="{{id}}_ClearanceDocument_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SafetyDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_mustBeDeenergised'>mustBeDeenergised: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_mustBeDeenergised' class='form-check-input' type='checkbox'{{#mustBeDeenergised}} checked{{/mustBeDeenergised}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_mustBeGrounded'>mustBeGrounded: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_mustBeGrounded' class='form-check-input' type='checkbox'{{#mustBeGrounded}} checked{{/mustBeGrounded}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ClearanceAction'>ClearanceAction: </label><div class='col-sm-8'><input id='{{id}}_ClearanceAction' class='form-control' type='text'{{#ClearanceAction}} value='{{ClearanceAction}}'{{/ClearanceAction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TaggedPSRs'>TaggedPSRs: </label><div class='col-sm-8'><input id='{{id}}_TaggedPSRs' class='form-control' type='text'{{#TaggedPSRs}} value='{{TaggedPSRs_string}}'{{/TaggedPSRs}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ClearanceDocument" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_mustBeDeenergised").checked; if (temp) obj["mustBeDeenergised"] = true;
                temp = document.getElementById (id + "_mustBeGrounded").checked; if (temp) obj["mustBeGrounded"] = true;
                temp = document.getElementById (id + "_ClearanceAction").value; if ("" !== temp) obj["ClearanceAction"] = temp;
                temp = document.getElementById (id + "_TaggedPSRs").value; if ("" !== temp) obj["TaggedPSRs"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ClearanceAction", "0..1", "0..1", "ClearanceAction", "Clearance"],
                            ["TaggedPSRs", "0..*", "0..*", "PowerSystemResource", "Clearances"]
                        ]
                    )
                );
            }
        }

        /**
         * Lowered capability because of deterioration or inadequacy (sometimes referred to as derating or partial outage) or other kind of operational rating change.
         *
         */
        class OperationalUpdatedRating extends OperationalRestriction
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OperationalUpdatedRating;
                if (null == bucket)
                   cim_data.OperationalUpdatedRating = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OperationalUpdatedRating[obj.id];
            }

            parse (context, sub)
            {
                let obj = OperationalRestriction.prototype.parse.call (this, context, sub);
                obj.cls = "OperationalUpdatedRating";
                base.parse_element (/<cim:OperationalUpdatedRating.changeType>([\s\S]*?)<\/cim:OperationalUpdatedRating.changeType>/g, obj, "changeType", base.to_string, sub, context);
                base.parse_attribute (/<cim:OperationalUpdatedRating.PlannedOutage\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PlannedOutage", sub, context);
                let bucket = context.parsed.OperationalUpdatedRating;
                if (null == bucket)
                   context.parsed.OperationalUpdatedRating = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = OperationalRestriction.prototype.export.call (this, obj, false);

                base.export_element (obj, "OperationalUpdatedRating", "changeType", "changeType",  base.from_string, fields);
                base.export_attribute (obj, "OperationalUpdatedRating", "PlannedOutage", "PlannedOutage", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OperationalUpdatedRating_collapse" aria-expanded="true" aria-controls="OperationalUpdatedRating_collapse" style="margin-left: 10px;">OperationalUpdatedRating</a></legend>
                    <div id="OperationalUpdatedRating_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + OperationalRestriction.prototype.template.call (this) +
                    `
                    {{#changeType}}<div><b>changeType</b>: {{changeType}}</div>{{/changeType}}
                    {{#PlannedOutage}}<div><b>PlannedOutage</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{PlannedOutage}}");}); return false;'>{{PlannedOutage}}</a></div>{{/PlannedOutage}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OperationalUpdatedRating_collapse" aria-expanded="true" aria-controls="{{id}}_OperationalUpdatedRating_collapse" style="margin-left: 10px;">OperationalUpdatedRating</a></legend>
                    <div id="{{id}}_OperationalUpdatedRating_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + OperationalRestriction.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_changeType'>changeType: </label><div class='col-sm-8'><input id='{{id}}_changeType' class='form-control' type='text'{{#changeType}} value='{{changeType}}'{{/changeType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PlannedOutage'>PlannedOutage: </label><div class='col-sm-8'><input id='{{id}}_PlannedOutage' class='form-control' type='text'{{#PlannedOutage}} value='{{PlannedOutage}}'{{/PlannedOutage}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OperationalUpdatedRating" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_changeType").value; if ("" !== temp) obj["changeType"] = temp;
                temp = document.getElementById (id + "_PlannedOutage").value; if ("" !== temp) obj["PlannedOutage"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PlannedOutage", "1", "0..*", "PlannedOutage", "UpdatedRatings"]
                        ]
                    )
                );
            }
        }

        /**
         * Document describing the consequence of an unplanned outage in a part of the electrical network.
         *
         * For the purposes of this model, an unplanned outage refers to a state where energy is not delivered; such as, customers out of service, a street light is not served, etc.
         * A unplanned outage may be created upon:
         * - impacts the SAIDI calculation
         * - a breaker trip,
         * - a fault indicator status change,
         * - a meter event indicating customer outage,
         * - a reception of one or more customer trouble calls, or
         * - an operator command, reflecting information obtained from the field crew.
         * Outage restoration may be performed using a switching plan which complements the outage information with detailed switching activities, including the relationship to the crew and work.
         *
         */
        class UnplannedOutage extends Outage
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.UnplannedOutage;
                if (null == bucket)
                   cim_data.UnplannedOutage = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.UnplannedOutage[obj.id];
            }

            parse (context, sub)
            {
                let obj = Outage.prototype.parse.call (this, context, sub);
                obj.cls = "UnplannedOutage";
                base.parse_element (/<cim:UnplannedOutage.cause>([\s\S]*?)<\/cim:UnplannedOutage.cause>/g, obj, "cause", base.to_string, sub, context);
                base.parse_attribute (/<cim:UnplannedOutage.causeKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "causeKind", sub, context);
                base.parse_element (/<cim:UnplannedOutage.reportedStartTime>([\s\S]*?)<\/cim:UnplannedOutage.reportedStartTime>/g, obj, "reportedStartTime", base.to_datetime, sub, context);
                base.parse_attributes (/<cim:UnplannedOutage.TroubleTicket\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TroubleTicket", sub, context);
                base.parse_attribute (/<cim:UnplannedOutage.FieldDispatchHistory\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FieldDispatchHistory", sub, context);
                let bucket = context.parsed.UnplannedOutage;
                if (null == bucket)
                   context.parsed.UnplannedOutage = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Outage.prototype.export.call (this, obj, false);

                base.export_element (obj, "UnplannedOutage", "cause", "cause",  base.from_string, fields);
                base.export_attribute (obj, "UnplannedOutage", "causeKind", "causeKind", fields);
                base.export_element (obj, "UnplannedOutage", "reportedStartTime", "reportedStartTime",  base.from_datetime, fields);
                base.export_attributes (obj, "UnplannedOutage", "TroubleTicket", "TroubleTicket", fields);
                base.export_attribute (obj, "UnplannedOutage", "FieldDispatchHistory", "FieldDispatchHistory", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#UnplannedOutage_collapse" aria-expanded="true" aria-controls="UnplannedOutage_collapse" style="margin-left: 10px;">UnplannedOutage</a></legend>
                    <div id="UnplannedOutage_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Outage.prototype.template.call (this) +
                    `
                    {{#cause}}<div><b>cause</b>: {{cause}}</div>{{/cause}}
                    {{#causeKind}}<div><b>causeKind</b>: {{causeKind}}</div>{{/causeKind}}
                    {{#reportedStartTime}}<div><b>reportedStartTime</b>: {{reportedStartTime}}</div>{{/reportedStartTime}}
                    {{#TroubleTicket}}<div><b>TroubleTicket</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TroubleTicket}}
                    {{#FieldDispatchHistory}}<div><b>FieldDispatchHistory</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{FieldDispatchHistory}}");}); return false;'>{{FieldDispatchHistory}}</a></div>{{/FieldDispatchHistory}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["causeKindOutageCauseKind"] = [{ id: '', selected: (!obj["causeKind"])}]; for (let property in OutageCauseKind) obj["causeKindOutageCauseKind"].push ({ id: property, selected: obj["causeKind"] && obj["causeKind"].endsWith ('.' + property)});
                if (obj["TroubleTicket"]) obj["TroubleTicket_string"] = obj["TroubleTicket"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["causeKindOutageCauseKind"];
                delete obj["TroubleTicket_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_UnplannedOutage_collapse" aria-expanded="true" aria-controls="{{id}}_UnplannedOutage_collapse" style="margin-left: 10px;">UnplannedOutage</a></legend>
                    <div id="{{id}}_UnplannedOutage_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Outage.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cause'>cause: </label><div class='col-sm-8'><input id='{{id}}_cause' class='form-control' type='text'{{#cause}} value='{{cause}}'{{/cause}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_causeKind'>causeKind: </label><div class='col-sm-8'><select id='{{id}}_causeKind' class='form-control custom-select'>{{#causeKindOutageCauseKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/causeKindOutageCauseKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_reportedStartTime'>reportedStartTime: </label><div class='col-sm-8'><input id='{{id}}_reportedStartTime' class='form-control' type='text'{{#reportedStartTime}} value='{{reportedStartTime}}'{{/reportedStartTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_FieldDispatchHistory'>FieldDispatchHistory: </label><div class='col-sm-8'><input id='{{id}}_FieldDispatchHistory' class='form-control' type='text'{{#FieldDispatchHistory}} value='{{FieldDispatchHistory}}'{{/FieldDispatchHistory}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "UnplannedOutage" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_cause").value; if ("" !== temp) obj["cause"] = temp;
                temp = OutageCauseKind[document.getElementById (id + "_causeKind").value]; if (temp) obj["causeKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#OutageCauseKind." + temp; else delete obj["causeKind"];
                temp = document.getElementById (id + "_reportedStartTime").value; if ("" !== temp) obj["reportedStartTime"] = temp;
                temp = document.getElementById (id + "_FieldDispatchHistory").value; if ("" !== temp) obj["FieldDispatchHistory"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TroubleTicket", "0..*", "0..1", "TroubleTicket", "UnplannedOutage"],
                            ["FieldDispatchHistory", "0..1", "0..1", "FieldDispatchHistory", "UnplannedOutage"]
                        ]
                    )
                );
            }
        }

        class PlannedOutage extends Outage
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PlannedOutage;
                if (null == bucket)
                   cim_data.PlannedOutage = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PlannedOutage[obj.id];
            }

            parse (context, sub)
            {
                let obj = Outage.prototype.parse.call (this, context, sub);
                obj.cls = "PlannedOutage";
                base.parse_element (/<cim:PlannedOutage.reason>([\s\S]*?)<\/cim:PlannedOutage.reason>/g, obj, "reason", base.to_string, sub, context);
                base.parse_attributes (/<cim:PlannedOutage.UpdatedRatings\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "UpdatedRatings", sub, context);
                base.parse_attribute (/<cim:PlannedOutage.FieldDispatchHistory\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FieldDispatchHistory", sub, context);
                base.parse_attribute (/<cim:PlannedOutage.OutagePlan\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OutagePlan", sub, context);
                let bucket = context.parsed.PlannedOutage;
                if (null == bucket)
                   context.parsed.PlannedOutage = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Outage.prototype.export.call (this, obj, false);

                base.export_element (obj, "PlannedOutage", "reason", "reason",  base.from_string, fields);
                base.export_attributes (obj, "PlannedOutage", "UpdatedRatings", "UpdatedRatings", fields);
                base.export_attribute (obj, "PlannedOutage", "FieldDispatchHistory", "FieldDispatchHistory", fields);
                base.export_attribute (obj, "PlannedOutage", "OutagePlan", "OutagePlan", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PlannedOutage_collapse" aria-expanded="true" aria-controls="PlannedOutage_collapse" style="margin-left: 10px;">PlannedOutage</a></legend>
                    <div id="PlannedOutage_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Outage.prototype.template.call (this) +
                    `
                    {{#reason}}<div><b>reason</b>: {{reason}}</div>{{/reason}}
                    {{#UpdatedRatings}}<div><b>UpdatedRatings</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/UpdatedRatings}}
                    {{#FieldDispatchHistory}}<div><b>FieldDispatchHistory</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{FieldDispatchHistory}}");}); return false;'>{{FieldDispatchHistory}}</a></div>{{/FieldDispatchHistory}}
                    {{#OutagePlan}}<div><b>OutagePlan</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{OutagePlan}}");}); return false;'>{{OutagePlan}}</a></div>{{/OutagePlan}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["UpdatedRatings"]) obj["UpdatedRatings_string"] = obj["UpdatedRatings"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["UpdatedRatings_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PlannedOutage_collapse" aria-expanded="true" aria-controls="{{id}}_PlannedOutage_collapse" style="margin-left: 10px;">PlannedOutage</a></legend>
                    <div id="{{id}}_PlannedOutage_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Outage.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_reason'>reason: </label><div class='col-sm-8'><input id='{{id}}_reason' class='form-control' type='text'{{#reason}} value='{{reason}}'{{/reason}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_FieldDispatchHistory'>FieldDispatchHistory: </label><div class='col-sm-8'><input id='{{id}}_FieldDispatchHistory' class='form-control' type='text'{{#FieldDispatchHistory}} value='{{FieldDispatchHistory}}'{{/FieldDispatchHistory}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OutagePlan'>OutagePlan: </label><div class='col-sm-8'><input id='{{id}}_OutagePlan' class='form-control' type='text'{{#OutagePlan}} value='{{OutagePlan}}'{{/OutagePlan}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PlannedOutage" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_reason").value; if ("" !== temp) obj["reason"] = temp;
                temp = document.getElementById (id + "_FieldDispatchHistory").value; if ("" !== temp) obj["FieldDispatchHistory"] = temp;
                temp = document.getElementById (id + "_OutagePlan").value; if ("" !== temp) obj["OutagePlan"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["UpdatedRatings", "0..*", "1", "OperationalUpdatedRating", "PlannedOutage"],
                            ["FieldDispatchHistory", "0..1", "0..1", "FieldDispatchHistory", "PlannedOutage"],
                            ["OutagePlan", "0..1", "0..1", "OutagePlan", "PlannedOutage"]
                        ]
                    )
                );
            }
        }

        return (
            {
                ClearanceAction: ClearanceAction,
                SwitchingAction: SwitchingAction,
                PSREvent: PSREvent,
                OperationsSafetySupervisor: OperationsSafetySupervisor,
                OutageCauseKind: OutageCauseKind,
                EstimatedRestorationTime: EstimatedRestorationTime,
                SwitchingPlanRequest: SwitchingPlanRequest,
                SwitchingPlan: SwitchingPlan,
                JumperAction: JumperAction,
                ClearanceDocument: ClearanceDocument,
                SwitchAction: SwitchAction,
                FieldSafetySupervisor: FieldSafetySupervisor,
                OutageStatusKind: OutageStatusKind,
                ServicePointOutageSummary: ServicePointOutageSummary,
                PlannedOutage: PlannedOutage,
                ClearanceActionKind: ClearanceActionKind,
                SwitchingEvent: SwitchingEvent,
                GenericAction: GenericAction,
                UnplannedOutage: UnplannedOutage,
                SwitchingStep: SwitchingStep,
                SwitchingOrder: SwitchingOrder,
                VerificationAction: VerificationAction,
                OutageOrder: OutageOrder,
                Incident: Incident,
                TagActionKind: TagActionKind,
                Outage: Outage,
                TroubleOrder: TroubleOrder,
                SafetyDocument: SafetyDocument,
                SwitchingStepGroup: SwitchingStepGroup,
                TempEquipActionKind: TempEquipActionKind,
                OutageArea: OutageArea,
                SwitchActionKind: SwitchActionKind,
                OperationalUpdatedRating: OperationalUpdatedRating,
                ControlAction: ControlAction,
                OperationalTag: OperationalTag,
                CutAction: CutAction,
                OutagePlan: OutagePlan,
                OperationalRestriction: OperationalRestriction,
                PSREventKind: PSREventKind,
                MeasurementAction: MeasurementAction,
                ERTConfidenceKind: ERTConfidenceKind,
                GroundAction: GroundAction,
                TagAction: TagAction,
                EnergySourceAction: EnergySourceAction,
                AreaKind: AreaKind
            }
        );
    }
);