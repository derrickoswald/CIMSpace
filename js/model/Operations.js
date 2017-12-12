define
(
    ["model/base", "model/Common"],
    /**
     * This package contains the core information classes that support operations and outage management applications.
     *
     */
    function (base, Common)
    {

        /**
         * Kind of action on switch.
         *
         */
        var SwitchActionKind =
        {
            open: "open",
            close: "close",
            disableReclosing: "disableReclosing",
            enableReclosing: "enableReclosing"
        };
        Object.freeze (SwitchActionKind);

        /**
         * Kind of action on temporary equipment (such as cut, jumper, ground, energy source).
         *
         */
        var TempEquipActionKind =
        {
            place: "place",
            remove: "remove"
        };
        Object.freeze (TempEquipActionKind);

        /**
         * Type of clearance action.
         *
         */
        var ClearanceActionKind =
        {
            issue: "issue",
            update: "update",
            release: "release"
        };
        Object.freeze (ClearanceActionKind);

        /**
         * Kind of power system resource event.
         *
         */
        var PSREventKind =
        {
            inService: "inService",
            outOfService: "outOfService",
            pendingAdd: "pendingAdd",
            pendingRemove: "pendingRemove",
            pendingReplace: "pendingReplace",
            other: "other",
            unknown: "unknown"
        };
        Object.freeze (PSREventKind);

        /**
         * Kind of action on tag.
         *
         */
        var TagActionKind =
        {
            place: "place",
            remove: "remove",
            verify: "verify"
        };
        Object.freeze (TagActionKind);

        /**
         * A logical step, grouping atomic switching steps that are important to distinguish when they may change topology (e.g. placing a jumper between two cuts).
         *
         */
        class SwitchingStepGroup extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.SwitchingStepGroup;
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
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "SwitchingStepGroup";
                base.parse_element (/<cim:SwitchingStepGroup.isFreeSequence>([\s\S]*?)<\/cim:SwitchingStepGroup.isFreeSequence>/g, obj, "isFreeSequence", base.to_boolean, sub, context);
                base.parse_element (/<cim:SwitchingStepGroup.sequenceNumber>([\s\S]*?)<\/cim:SwitchingStepGroup.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
                base.parse_attributes (/<cim:SwitchingStepGroup.CutActions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CutActions", sub, context);
                base.parse_attributes (/<cim:SwitchingStepGroup.ClearanceActions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ClearanceActions", sub, context);
                base.parse_attributes (/<cim:SwitchingStepGroup.GenericActions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GenericActions", sub, context);
                base.parse_attributes (/<cim:SwitchingStepGroup.EnergySourceActions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergySourceActions", sub, context);
                base.parse_attributes (/<cim:SwitchingStepGroup.TagActions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TagActions", sub, context);
                base.parse_attributes (/<cim:SwitchingStepGroup.JumperActions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "JumperActions", sub, context);
                base.parse_attribute (/<cim:SwitchingStepGroup.SwitchingPlan\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingPlan", sub, context);
                base.parse_attributes (/<cim:SwitchingStepGroup.SwitchActions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchActions", sub, context);
                base.parse_attributes (/<cim:SwitchingStepGroup.GroundActions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GroundActions", sub, context);
                var bucket = context.parsed.SwitchingStepGroup;
                if (null == bucket)
                   context.parsed.SwitchingStepGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "SwitchingStepGroup", "isFreeSequence", "isFreeSequence",  base.from_boolean, fields);
                base.export_element (obj, "SwitchingStepGroup", "sequenceNumber", "sequenceNumber",  base.from_string, fields);
                base.export_attributes (obj, "SwitchingStepGroup", "CutActions", "CutActions", fields);
                base.export_attributes (obj, "SwitchingStepGroup", "ClearanceActions", "ClearanceActions", fields);
                base.export_attributes (obj, "SwitchingStepGroup", "GenericActions", "GenericActions", fields);
                base.export_attributes (obj, "SwitchingStepGroup", "EnergySourceActions", "EnergySourceActions", fields);
                base.export_attributes (obj, "SwitchingStepGroup", "TagActions", "TagActions", fields);
                base.export_attributes (obj, "SwitchingStepGroup", "JumperActions", "JumperActions", fields);
                base.export_attribute (obj, "SwitchingStepGroup", "SwitchingPlan", "SwitchingPlan", fields);
                base.export_attributes (obj, "SwitchingStepGroup", "SwitchActions", "SwitchActions", fields);
                base.export_attributes (obj, "SwitchingStepGroup", "GroundActions", "GroundActions", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SwitchingStepGroup_collapse" aria-expanded="true" aria-controls="SwitchingStepGroup_collapse" style="margin-left: 10px;">SwitchingStepGroup</a></legend>
                    <div id="SwitchingStepGroup_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#isFreeSequence}}<div><b>isFreeSequence</b>: {{isFreeSequence}}</div>{{/isFreeSequence}}
                    {{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
                    {{#CutActions}}<div><b>CutActions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CutActions}}
                    {{#ClearanceActions}}<div><b>ClearanceActions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ClearanceActions}}
                    {{#GenericActions}}<div><b>GenericActions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/GenericActions}}
                    {{#EnergySourceActions}}<div><b>EnergySourceActions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EnergySourceActions}}
                    {{#TagActions}}<div><b>TagActions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/TagActions}}
                    {{#JumperActions}}<div><b>JumperActions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/JumperActions}}
                    {{#SwitchingPlan}}<div><b>SwitchingPlan</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SwitchingPlan}}&quot;);})'>{{SwitchingPlan}}</a></div>{{/SwitchingPlan}}
                    {{#SwitchActions}}<div><b>SwitchActions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/SwitchActions}}
                    {{#GroundActions}}<div><b>GroundActions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/GroundActions}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.CutActions) obj.CutActions_string = obj.CutActions.join ();
                if (obj.ClearanceActions) obj.ClearanceActions_string = obj.ClearanceActions.join ();
                if (obj.GenericActions) obj.GenericActions_string = obj.GenericActions.join ();
                if (obj.EnergySourceActions) obj.EnergySourceActions_string = obj.EnergySourceActions.join ();
                if (obj.TagActions) obj.TagActions_string = obj.TagActions.join ();
                if (obj.JumperActions) obj.JumperActions_string = obj.JumperActions.join ();
                if (obj.SwitchActions) obj.SwitchActions_string = obj.SwitchActions.join ();
                if (obj.GroundActions) obj.GroundActions_string = obj.GroundActions.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.CutActions_string;
                delete obj.ClearanceActions_string;
                delete obj.GenericActions_string;
                delete obj.EnergySourceActions_string;
                delete obj.TagActions_string;
                delete obj.JumperActions_string;
                delete obj.SwitchActions_string;
                delete obj.GroundActions_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SwitchingStepGroup_collapse" aria-expanded="true" aria-controls="SwitchingStepGroup_collapse" style="margin-left: 10px;">SwitchingStepGroup</a></legend>
                    <div id="SwitchingStepGroup_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isFreeSequence'>isFreeSequence: </label><div class='col-sm-8'><input id='isFreeSequence' class='form-check-input' type='checkbox'{{#isFreeSequence}} checked{{/isFreeSequence}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='sequenceNumber'>sequenceNumber: </label><div class='col-sm-8'><input id='sequenceNumber' class='form-control' type='text'{{#sequenceNumber}} value='{{sequenceNumber}}'{{/sequenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SwitchingPlan'>SwitchingPlan: </label><div class='col-sm-8'><input id='SwitchingPlan' class='form-control' type='text'{{#SwitchingPlan}} value='{{SwitchingPlan}}'{{/SwitchingPlan}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "SwitchingStepGroup" };
                super.submit (obj);
                temp = document.getElementById ("isFreeSequence").checked; if (temp) obj.isFreeSequence = true;
                temp = document.getElementById ("sequenceNumber").value; if ("" != temp) obj.sequenceNumber = temp;
                temp = document.getElementById ("SwitchingPlan").value; if ("" != temp) obj.SwitchingPlan = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["CutActions", "CutAction", "0..*", "0..1"],
                        ["ClearanceActions", "ClearanceAction", "0..*", "0..1"],
                        ["GenericActions", "GenericAction", "0..*", "0..1"],
                        ["EnergySourceActions", "EnergySourceAction", "0..*", "0..1"],
                        ["TagActions", "TagAction", "0..*", "0..1"],
                        ["JumperActions", "JumperAction", "0..*", "0..1"],
                        ["SwitchingPlan", "SwitchingPlan", "0..1", "0..*"],
                        ["SwitchActions", "SwitchAction", "0..*", "0..1"],
                        ["GroundActions", "GroundAction", "0..*", "0..1"]
                    ]
                );
            }
        }

        class OperationTag extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.OperationTag;
                if (null == bucket)
                   cim_data.OperationTag = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OperationTag[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "OperationTag";
                base.parse_attribute (/<cim:OperationTag.Asset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context);
                base.parse_attribute (/<cim:OperationTag.TagAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TagAction", sub, context);
                base.parse_attribute (/<cim:OperationTag.PowerSystemResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemResource", sub, context);
                var bucket = context.parsed.OperationTag;
                if (null == bucket)
                   context.parsed.OperationTag = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "OperationTag", "Asset", "Asset", fields);
                base.export_attribute (obj, "OperationTag", "TagAction", "TagAction", fields);
                base.export_attribute (obj, "OperationTag", "PowerSystemResource", "PowerSystemResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OperationTag_collapse" aria-expanded="true" aria-controls="OperationTag_collapse" style="margin-left: 10px;">OperationTag</a></legend>
                    <div id="OperationTag_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#Asset}}<div><b>Asset</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Asset}}&quot;);})'>{{Asset}}</a></div>{{/Asset}}
                    {{#TagAction}}<div><b>TagAction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TagAction}}&quot;);})'>{{TagAction}}</a></div>{{/TagAction}}
                    {{#PowerSystemResource}}<div><b>PowerSystemResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PowerSystemResource}}&quot;);})'>{{PowerSystemResource}}</a></div>{{/PowerSystemResource}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OperationTag_collapse" aria-expanded="true" aria-controls="OperationTag_collapse" style="margin-left: 10px;">OperationTag</a></legend>
                    <div id="OperationTag_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Asset'>Asset: </label><div class='col-sm-8'><input id='Asset' class='form-control' type='text'{{#Asset}} value='{{Asset}}'{{/Asset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TagAction'>TagAction: </label><div class='col-sm-8'><input id='TagAction' class='form-control' type='text'{{#TagAction}} value='{{TagAction}}'{{/TagAction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='PowerSystemResource'>PowerSystemResource: </label><div class='col-sm-8'><input id='PowerSystemResource' class='form-control' type='text'{{#PowerSystemResource}} value='{{PowerSystemResource}}'{{/PowerSystemResource}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "OperationTag" };
                super.submit (obj);
                temp = document.getElementById ("Asset").value; if ("" != temp) obj.Asset = temp;
                temp = document.getElementById ("TagAction").value; if ("" != temp) obj.TagAction = temp;
                temp = document.getElementById ("PowerSystemResource").value; if ("" != temp) obj.PowerSystemResource = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Asset", "Asset", "0..1", "0..*"],
                        ["TagAction", "TagAction", "0..1", "0..1"],
                        ["PowerSystemResource", "PowerSystemResource", "0..1", "0..*"]
                    ]
                );
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
                var bucket = cim_data.PSREvent;
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
                var obj;

                obj = Common.ActivityRecord.prototype.parse.call (this, context, sub);
                obj.cls = "PSREvent";
                base.parse_attribute (/<cim:PSREvent.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:PSREvent.PowerSystemResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemResource", sub, context);
                var bucket = context.parsed.PSREvent;
                if (null == bucket)
                   context.parsed.PSREvent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.ActivityRecord.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "PSREvent", "kind", "kind", fields);
                base.export_attribute (obj, "PSREvent", "PowerSystemResource", "PowerSystemResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PSREvent_collapse" aria-expanded="true" aria-controls="PSREvent_collapse" style="margin-left: 10px;">PSREvent</a></legend>
                    <div id="PSREvent_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.ActivityRecord.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#PowerSystemResource}}<div><b>PowerSystemResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PowerSystemResource}}&quot;);})'>{{PowerSystemResource}}</a></div>{{/PowerSystemResource}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.PSREventKind = []; if (!obj.kind) obj.PSREventKind.push ({ id: '', selected: true}); for (var property in PSREventKind) obj.PSREventKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.PSREventKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PSREvent_collapse" aria-expanded="true" aria-controls="PSREvent_collapse" style="margin-left: 10px;">PSREvent</a></legend>
                    <div id="PSREvent_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.ActivityRecord.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#PSREventKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/PSREventKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='PowerSystemResource'>PowerSystemResource: </label><div class='col-sm-8'><input id='PowerSystemResource' class='form-control' type='text'{{#PowerSystemResource}} value='{{PowerSystemResource}}'{{/PowerSystemResource}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "PSREvent" };
                super.submit (obj);
                temp = document.getElementById ("kind").value; if ("" != temp) { temp = PSREventKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#PSREventKind." + temp; }
                temp = document.getElementById ("PowerSystemResource").value; if ("" != temp) obj.PowerSystemResource = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["PowerSystemResource", "PowerSystemResource", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Document describing details of an active or planned outage in a part of the electrical network.
         *
         * A non-planned outage may be created upon:
         *
         */
        class Outage extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Outage;
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
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "Outage";
                base.parse_element (/<cim:Outage.cause>([\s\S]*?)<\/cim:Outage.cause>/g, obj, "cause", base.to_string, sub, context);
                base.parse_element (/<cim:Outage.estimatedPeriod>([\s\S]*?)<\/cim:Outage.estimatedPeriod>/g, obj, "estimatedPeriod", base.to_string, sub, context);
                base.parse_element (/<cim:Outage.isPlanned>([\s\S]*?)<\/cim:Outage.isPlanned>/g, obj, "isPlanned", base.to_boolean, sub, context);
                base.parse_element (/<cim:Outage.actualPeriod>([\s\S]*?)<\/cim:Outage.actualPeriod>/g, obj, "actualPeriod", base.to_string, sub, context);
                base.parse_element (/<cim:Outage.summary>([\s\S]*?)<\/cim:Outage.summary>/g, obj, "summary", base.to_string, sub, context);
                base.parse_element (/<cim:Outage.cancelledDateTime>([\s\S]*?)<\/cim:Outage.cancelledDateTime>/g, obj, "cancelledDateTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:Outage.OutageSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OutageSchedule", sub, context);
                base.parse_attributes (/<cim:Outage.PlannedSwitchActions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PlannedSwitchActions", sub, context);
                base.parse_attributes (/<cim:Outage.Equipments\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Equipments", sub, context);
                base.parse_attributes (/<cim:Outage.OpenedSwitches\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OpenedSwitches", sub, context);
                base.parse_attributes (/<cim:Outage.Faults\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Faults", sub, context);
                base.parse_attributes (/<cim:Outage.SwitchingPlans\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingPlans", sub, context);
                base.parse_attributes (/<cim:Outage.UpdatedRatings\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UpdatedRatings", sub, context);
                base.parse_attributes (/<cim:Outage.UsagePoints\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UsagePoints", sub, context);
                base.parse_attribute (/<cim:Outage.Incident\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Incident", sub, context);
                var bucket = context.parsed.Outage;
                if (null == bucket)
                   context.parsed.Outage = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "Outage", "cause", "cause",  base.from_string, fields);
                base.export_element (obj, "Outage", "estimatedPeriod", "estimatedPeriod",  base.from_string, fields);
                base.export_element (obj, "Outage", "isPlanned", "isPlanned",  base.from_boolean, fields);
                base.export_element (obj, "Outage", "actualPeriod", "actualPeriod",  base.from_string, fields);
                base.export_element (obj, "Outage", "summary", "summary",  base.from_string, fields);
                base.export_element (obj, "Outage", "cancelledDateTime", "cancelledDateTime",  base.from_datetime, fields);
                base.export_attribute (obj, "Outage", "OutageSchedule", "OutageSchedule", fields);
                base.export_attributes (obj, "Outage", "PlannedSwitchActions", "PlannedSwitchActions", fields);
                base.export_attributes (obj, "Outage", "Equipments", "Equipments", fields);
                base.export_attributes (obj, "Outage", "OpenedSwitches", "OpenedSwitches", fields);
                base.export_attributes (obj, "Outage", "Faults", "Faults", fields);
                base.export_attributes (obj, "Outage", "SwitchingPlans", "SwitchingPlans", fields);
                base.export_attributes (obj, "Outage", "UpdatedRatings", "UpdatedRatings", fields);
                base.export_attributes (obj, "Outage", "UsagePoints", "UsagePoints", fields);
                base.export_attribute (obj, "Outage", "Incident", "Incident", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Outage_collapse" aria-expanded="true" aria-controls="Outage_collapse" style="margin-left: 10px;">Outage</a></legend>
                    <div id="Outage_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#cause}}<div><b>cause</b>: {{cause}}</div>{{/cause}}
                    {{#estimatedPeriod}}<div><b>estimatedPeriod</b>: {{estimatedPeriod}}</div>{{/estimatedPeriod}}
                    {{#isPlanned}}<div><b>isPlanned</b>: {{isPlanned}}</div>{{/isPlanned}}
                    {{#actualPeriod}}<div><b>actualPeriod</b>: {{actualPeriod}}</div>{{/actualPeriod}}
                    {{#summary}}<div><b>summary</b>: {{summary}}</div>{{/summary}}
                    {{#cancelledDateTime}}<div><b>cancelledDateTime</b>: {{cancelledDateTime}}</div>{{/cancelledDateTime}}
                    {{#OutageSchedule}}<div><b>OutageSchedule</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{OutageSchedule}}&quot;);})'>{{OutageSchedule}}</a></div>{{/OutageSchedule}}
                    {{#PlannedSwitchActions}}<div><b>PlannedSwitchActions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/PlannedSwitchActions}}
                    {{#Equipments}}<div><b>Equipments</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Equipments}}
                    {{#OpenedSwitches}}<div><b>OpenedSwitches</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/OpenedSwitches}}
                    {{#Faults}}<div><b>Faults</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Faults}}
                    {{#SwitchingPlans}}<div><b>SwitchingPlans</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/SwitchingPlans}}
                    {{#UpdatedRatings}}<div><b>UpdatedRatings</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/UpdatedRatings}}
                    {{#UsagePoints}}<div><b>UsagePoints</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/UsagePoints}}
                    {{#Incident}}<div><b>Incident</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Incident}}&quot;);})'>{{Incident}}</a></div>{{/Incident}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.PlannedSwitchActions) obj.PlannedSwitchActions_string = obj.PlannedSwitchActions.join ();
                if (obj.Equipments) obj.Equipments_string = obj.Equipments.join ();
                if (obj.OpenedSwitches) obj.OpenedSwitches_string = obj.OpenedSwitches.join ();
                if (obj.Faults) obj.Faults_string = obj.Faults.join ();
                if (obj.SwitchingPlans) obj.SwitchingPlans_string = obj.SwitchingPlans.join ();
                if (obj.UpdatedRatings) obj.UpdatedRatings_string = obj.UpdatedRatings.join ();
                if (obj.UsagePoints) obj.UsagePoints_string = obj.UsagePoints.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.PlannedSwitchActions_string;
                delete obj.Equipments_string;
                delete obj.OpenedSwitches_string;
                delete obj.Faults_string;
                delete obj.SwitchingPlans_string;
                delete obj.UpdatedRatings_string;
                delete obj.UsagePoints_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Outage_collapse" aria-expanded="true" aria-controls="Outage_collapse" style="margin-left: 10px;">Outage</a></legend>
                    <div id="Outage_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='cause'>cause: </label><div class='col-sm-8'><input id='cause' class='form-control' type='text'{{#cause}} value='{{cause}}'{{/cause}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='estimatedPeriod'>estimatedPeriod: </label><div class='col-sm-8'><input id='estimatedPeriod' class='form-control' type='text'{{#estimatedPeriod}} value='{{estimatedPeriod}}'{{/estimatedPeriod}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isPlanned'>isPlanned: </label><div class='col-sm-8'><input id='isPlanned' class='form-check-input' type='checkbox'{{#isPlanned}} checked{{/isPlanned}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='actualPeriod'>actualPeriod: </label><div class='col-sm-8'><input id='actualPeriod' class='form-control' type='text'{{#actualPeriod}} value='{{actualPeriod}}'{{/actualPeriod}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='summary'>summary: </label><div class='col-sm-8'><input id='summary' class='form-control' type='text'{{#summary}} value='{{summary}}'{{/summary}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='cancelledDateTime'>cancelledDateTime: </label><div class='col-sm-8'><input id='cancelledDateTime' class='form-control' type='text'{{#cancelledDateTime}} value='{{cancelledDateTime}}'{{/cancelledDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='OutageSchedule'>OutageSchedule: </label><div class='col-sm-8'><input id='OutageSchedule' class='form-control' type='text'{{#OutageSchedule}} value='{{OutageSchedule}}'{{/OutageSchedule}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Equipments'>Equipments: </label><div class='col-sm-8'><input id='Equipments' class='form-control' type='text'{{#Equipments}} value='{{Equipments}}_string'{{/Equipments}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='UsagePoints'>UsagePoints: </label><div class='col-sm-8'><input id='UsagePoints' class='form-control' type='text'{{#UsagePoints}} value='{{UsagePoints}}_string'{{/UsagePoints}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Incident'>Incident: </label><div class='col-sm-8'><input id='Incident' class='form-control' type='text'{{#Incident}} value='{{Incident}}'{{/Incident}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Outage" };
                super.submit (obj);
                temp = document.getElementById ("cause").value; if ("" != temp) obj.cause = temp;
                temp = document.getElementById ("estimatedPeriod").value; if ("" != temp) obj.estimatedPeriod = temp;
                temp = document.getElementById ("isPlanned").checked; if (temp) obj.isPlanned = true;
                temp = document.getElementById ("actualPeriod").value; if ("" != temp) obj.actualPeriod = temp;
                temp = document.getElementById ("summary").value; if ("" != temp) obj.summary = temp;
                temp = document.getElementById ("cancelledDateTime").value; if ("" != temp) obj.cancelledDateTime = temp;
                temp = document.getElementById ("OutageSchedule").value; if ("" != temp) obj.OutageSchedule = temp;
                temp = document.getElementById ("Equipments").value; if ("" != temp) obj.Equipments = temp.split (",");
                temp = document.getElementById ("UsagePoints").value; if ("" != temp) obj.UsagePoints = temp.split (",");
                temp = document.getElementById ("Incident").value; if ("" != temp) obj.Incident = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["OutageSchedule", "OutageSchedule", "0..1", "0..*"],
                        ["PlannedSwitchActions", "SwitchAction", "0..*", "0..1"],
                        ["Equipments", "Equipment", "0..*", "0..*"],
                        ["OpenedSwitches", "Switch", "0..*", "0..1"],
                        ["Faults", "Fault", "0..*", "0..1"],
                        ["SwitchingPlans", "SwitchingPlan", "0..*", "0..1"],
                        ["UpdatedRatings", "OperationalUpdatedRating", "0..*", "1"],
                        ["UsagePoints", "UsagePoint", "0..*", "0..*"],
                        ["Incident", "Incident", "0..1", "0..1"]
                    ]
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
                var bucket = cim_data.Incident;
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
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "Incident";
                base.parse_element (/<cim:Incident.cause>([\s\S]*?)<\/cim:Incident.cause>/g, obj, "cause", base.to_string, sub, context);
                base.parse_attributes (/<cim:Incident.Hazards\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Hazards", sub, context);
                base.parse_attribute (/<cim:Incident.Owner\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Owner", sub, context);
                base.parse_attributes (/<cim:Incident.TroubleTickets\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TroubleTickets", sub, context);
                base.parse_attributes (/<cim:Incident.Works\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Works", sub, context);
                base.parse_attributes (/<cim:Incident.CustomerNotifications\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerNotifications", sub, context);
                base.parse_attribute (/<cim:Incident.Outage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Outage", sub, context);
                var bucket = context.parsed.Incident;
                if (null == bucket)
                   context.parsed.Incident = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "Incident", "cause", "cause",  base.from_string, fields);
                base.export_attributes (obj, "Incident", "Hazards", "Hazards", fields);
                base.export_attribute (obj, "Incident", "Owner", "Owner", fields);
                base.export_attributes (obj, "Incident", "TroubleTickets", "TroubleTickets", fields);
                base.export_attributes (obj, "Incident", "Works", "Works", fields);
                base.export_attributes (obj, "Incident", "CustomerNotifications", "CustomerNotifications", fields);
                base.export_attribute (obj, "Incident", "Outage", "Outage", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Incident_collapse" aria-expanded="true" aria-controls="Incident_collapse" style="margin-left: 10px;">Incident</a></legend>
                    <div id="Incident_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#cause}}<div><b>cause</b>: {{cause}}</div>{{/cause}}
                    {{#Hazards}}<div><b>Hazards</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Hazards}}
                    {{#Owner}}<div><b>Owner</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Owner}}&quot;);})'>{{Owner}}</a></div>{{/Owner}}
                    {{#TroubleTickets}}<div><b>TroubleTickets</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/TroubleTickets}}
                    {{#Works}}<div><b>Works</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Works}}
                    {{#CustomerNotifications}}<div><b>CustomerNotifications</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CustomerNotifications}}
                    {{#Outage}}<div><b>Outage</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Outage}}&quot;);})'>{{Outage}}</a></div>{{/Outage}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Hazards) obj.Hazards_string = obj.Hazards.join ();
                if (obj.TroubleTickets) obj.TroubleTickets_string = obj.TroubleTickets.join ();
                if (obj.Works) obj.Works_string = obj.Works.join ();
                if (obj.CustomerNotifications) obj.CustomerNotifications_string = obj.CustomerNotifications.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Hazards_string;
                delete obj.TroubleTickets_string;
                delete obj.Works_string;
                delete obj.CustomerNotifications_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Incident_collapse" aria-expanded="true" aria-controls="Incident_collapse" style="margin-left: 10px;">Incident</a></legend>
                    <div id="Incident_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='cause'>cause: </label><div class='col-sm-8'><input id='cause' class='form-control' type='text'{{#cause}} value='{{cause}}'{{/cause}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Owner'>Owner: </label><div class='col-sm-8'><input id='Owner' class='form-control' type='text'{{#Owner}} value='{{Owner}}'{{/Owner}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Works'>Works: </label><div class='col-sm-8'><input id='Works' class='form-control' type='text'{{#Works}} value='{{Works}}_string'{{/Works}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Outage'>Outage: </label><div class='col-sm-8'><input id='Outage' class='form-control' type='text'{{#Outage}} value='{{Outage}}'{{/Outage}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Incident" };
                super.submit (obj);
                temp = document.getElementById ("cause").value; if ("" != temp) obj.cause = temp;
                temp = document.getElementById ("Owner").value; if ("" != temp) obj.Owner = temp;
                temp = document.getElementById ("Works").value; if ("" != temp) obj.Works = temp.split (",");
                temp = document.getElementById ("Outage").value; if ("" != temp) obj.Outage = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Hazards", "IncidentHazard", "0..*", "0..1"],
                        ["Owner", "Operator", "0..1", "0..*"],
                        ["TroubleTickets", "TroubleTicket", "0..*", "0..1"],
                        ["Works", "Work", "0..*", "0..*"],
                        ["CustomerNotifications", "CustomerNotification", "0..*", "0..1"],
                        ["Outage", "Outage", "0..1", "0..1"]
                    ]
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
                var bucket = cim_data.OperationalRestriction;
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
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "OperationalRestriction";
                base.parse_element (/<cim:OperationalRestriction.activePeriod>([\s\S]*?)<\/cim:OperationalRestriction.activePeriod>/g, obj, "activePeriod", base.to_string, sub, context);
                base.parse_element (/<cim:OperationalRestriction.restrictedValue>([\s\S]*?)<\/cim:OperationalRestriction.restrictedValue>/g, obj, "restrictedValue", base.to_string, sub, context);
                base.parse_attributes (/<cim:OperationalRestriction.Equipments\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Equipments", sub, context);
                base.parse_attribute (/<cim:OperationalRestriction.ProductAssetModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProductAssetModel", sub, context);
                var bucket = context.parsed.OperationalRestriction;
                if (null == bucket)
                   context.parsed.OperationalRestriction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "OperationalRestriction", "activePeriod", "activePeriod",  base.from_string, fields);
                base.export_element (obj, "OperationalRestriction", "restrictedValue", "restrictedValue",  base.from_string, fields);
                base.export_attributes (obj, "OperationalRestriction", "Equipments", "Equipments", fields);
                base.export_attribute (obj, "OperationalRestriction", "ProductAssetModel", "ProductAssetModel", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OperationalRestriction_collapse" aria-expanded="true" aria-controls="OperationalRestriction_collapse" style="margin-left: 10px;">OperationalRestriction</a></legend>
                    <div id="OperationalRestriction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#activePeriod}}<div><b>activePeriod</b>: {{activePeriod}}</div>{{/activePeriod}}
                    {{#restrictedValue}}<div><b>restrictedValue</b>: {{restrictedValue}}</div>{{/restrictedValue}}
                    {{#Equipments}}<div><b>Equipments</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Equipments}}
                    {{#ProductAssetModel}}<div><b>ProductAssetModel</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ProductAssetModel}}&quot;);})'>{{ProductAssetModel}}</a></div>{{/ProductAssetModel}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Equipments) obj.Equipments_string = obj.Equipments.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Equipments_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OperationalRestriction_collapse" aria-expanded="true" aria-controls="OperationalRestriction_collapse" style="margin-left: 10px;">OperationalRestriction</a></legend>
                    <div id="OperationalRestriction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='activePeriod'>activePeriod: </label><div class='col-sm-8'><input id='activePeriod' class='form-control' type='text'{{#activePeriod}} value='{{activePeriod}}'{{/activePeriod}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='restrictedValue'>restrictedValue: </label><div class='col-sm-8'><input id='restrictedValue' class='form-control' type='text'{{#restrictedValue}} value='{{restrictedValue}}'{{/restrictedValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Equipments'>Equipments: </label><div class='col-sm-8'><input id='Equipments' class='form-control' type='text'{{#Equipments}} value='{{Equipments}}_string'{{/Equipments}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ProductAssetModel'>ProductAssetModel: </label><div class='col-sm-8'><input id='ProductAssetModel' class='form-control' type='text'{{#ProductAssetModel}} value='{{ProductAssetModel}}'{{/ProductAssetModel}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "OperationalRestriction" };
                super.submit (obj);
                temp = document.getElementById ("activePeriod").value; if ("" != temp) obj.activePeriod = temp;
                temp = document.getElementById ("restrictedValue").value; if ("" != temp) obj.restrictedValue = temp;
                temp = document.getElementById ("Equipments").value; if ("" != temp) obj.Equipments = temp.split (",");
                temp = document.getElementById ("ProductAssetModel").value; if ("" != temp) obj.ProductAssetModel = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Equipments", "Equipment", "0..*", "0..*"],
                        ["ProductAssetModel", "ProductAssetModel", "0..1", "0..*"]
                    ]
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
                var bucket = cim_data.SafetyDocument;
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
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "SafetyDocument";
                base.parse_attribute (/<cim:SafetyDocument.SwitchingPlan\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingPlan", sub, context);
                var bucket = context.parsed.SafetyDocument;
                if (null == bucket)
                   context.parsed.SafetyDocument = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "SafetyDocument", "SwitchingPlan", "SwitchingPlan", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SafetyDocument_collapse" aria-expanded="true" aria-controls="SafetyDocument_collapse" style="margin-left: 10px;">SafetyDocument</a></legend>
                    <div id="SafetyDocument_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#SwitchingPlan}}<div><b>SwitchingPlan</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SwitchingPlan}}&quot;);})'>{{SwitchingPlan}}</a></div>{{/SwitchingPlan}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SafetyDocument_collapse" aria-expanded="true" aria-controls="SafetyDocument_collapse" style="margin-left: 10px;">SafetyDocument</a></legend>
                    <div id="SafetyDocument_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SwitchingPlan'>SwitchingPlan: </label><div class='col-sm-8'><input id='SwitchingPlan' class='form-control' type='text'{{#SwitchingPlan}} value='{{SwitchingPlan}}'{{/SwitchingPlan}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "SafetyDocument" };
                super.submit (obj);
                temp = document.getElementById ("SwitchingPlan").value; if ("" != temp) obj.SwitchingPlan = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["SwitchingPlan", "SwitchingPlan", "0..1", "0..*"]
                    ]
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
                var bucket = cim_data.ServicePointOutageSummary;
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
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ServicePointOutageSummary";
                base.parse_element (/<cim:ServicePointOutageSummary.criticalCount>([\s\S]*?)<\/cim:ServicePointOutageSummary.criticalCount>/g, obj, "criticalCount", base.to_string, sub, context);
                base.parse_element (/<cim:ServicePointOutageSummary.totalCount>([\s\S]*?)<\/cim:ServicePointOutageSummary.totalCount>/g, obj, "totalCount", base.to_string, sub, context);
                var bucket = context.parsed.ServicePointOutageSummary;
                if (null == bucket)
                   context.parsed.ServicePointOutageSummary = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ServicePointOutageSummary", "criticalCount", "criticalCount",  base.from_string, fields);
                base.export_element (obj, "ServicePointOutageSummary", "totalCount", "totalCount",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ServicePointOutageSummary_collapse" aria-expanded="true" aria-controls="ServicePointOutageSummary_collapse" style="margin-left: 10px;">ServicePointOutageSummary</a></legend>
                    <div id="ServicePointOutageSummary_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#criticalCount}}<div><b>criticalCount</b>: {{criticalCount}}</div>{{/criticalCount}}
                    {{#totalCount}}<div><b>totalCount</b>: {{totalCount}}</div>{{/totalCount}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ServicePointOutageSummary_collapse" aria-expanded="true" aria-controls="ServicePointOutageSummary_collapse" style="margin-left: 10px;">ServicePointOutageSummary</a></legend>
                    <div id="ServicePointOutageSummary_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='criticalCount'>criticalCount: </label><div class='col-sm-8'><input id='criticalCount' class='form-control' type='text'{{#criticalCount}} value='{{criticalCount}}'{{/criticalCount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='totalCount'>totalCount: </label><div class='col-sm-8'><input id='totalCount' class='form-control' type='text'{{#totalCount}} value='{{totalCount}}'{{/totalCount}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ServicePointOutageSummary" };
                super.submit (obj);
                temp = document.getElementById ("criticalCount").value; if ("" != temp) obj.criticalCount = temp;
                temp = document.getElementById ("totalCount").value; if ("" != temp) obj.totalCount = temp;

                return (obj);
            }
        }

        /**
         * Document containing the definition of planned outages of equipment and/or service (delivery) points (sometimes referred to as customers).
         *
         * It is used as specification for producing switching plans.
         *
         */
        class OutageSchedule extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.OutageSchedule;
                if (null == bucket)
                   cim_data.OutageSchedule = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OutageSchedule[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "OutageSchedule";
                base.parse_attributes (/<cim:OutageSchedule.PlannedOutages\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PlannedOutages", sub, context);
                var bucket = context.parsed.OutageSchedule;
                if (null == bucket)
                   context.parsed.OutageSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "OutageSchedule", "PlannedOutages", "PlannedOutages", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OutageSchedule_collapse" aria-expanded="true" aria-controls="OutageSchedule_collapse" style="margin-left: 10px;">OutageSchedule</a></legend>
                    <div id="OutageSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#PlannedOutages}}<div><b>PlannedOutages</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/PlannedOutages}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.PlannedOutages) obj.PlannedOutages_string = obj.PlannedOutages.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.PlannedOutages_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OutageSchedule_collapse" aria-expanded="true" aria-controls="OutageSchedule_collapse" style="margin-left: 10px;">OutageSchedule</a></legend>
                    <div id="OutageSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var obj = obj || { cls: "OutageSchedule" };
                super.submit (obj);

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["PlannedOutages", "Outage", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Atomic switching step; can be part of a switching step group, or of the switching plan.
         *
         */
        class SwitchingStep extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.SwitchingStep;
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
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SwitchingStep";
                base.parse_element (/<cim:SwitchingStep.executedDateTime>([\s\S]*?)<\/cim:SwitchingStep.executedDateTime>/g, obj, "executedDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:SwitchingStep.plannedDateTime>([\s\S]*?)<\/cim:SwitchingStep.plannedDateTime>/g, obj, "plannedDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:SwitchingStep.description>([\s\S]*?)<\/cim:SwitchingStep.description>/g, obj, "description", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchingStep.isFreeSequence>([\s\S]*?)<\/cim:SwitchingStep.isFreeSequence>/g, obj, "isFreeSequence", base.to_boolean, sub, context);
                base.parse_element (/<cim:SwitchingStep.sequenceNumber>([\s\S]*?)<\/cim:SwitchingStep.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
                base.parse_attribute (/<cim:SwitchingStep.CrewMember\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CrewMember", sub, context);
                base.parse_attribute (/<cim:SwitchingStep.Operator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Operator", sub, context);
                var bucket = context.parsed.SwitchingStep;
                if (null == bucket)
                   context.parsed.SwitchingStep = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "SwitchingStep", "executedDateTime", "executedDateTime",  base.from_datetime, fields);
                base.export_element (obj, "SwitchingStep", "plannedDateTime", "plannedDateTime",  base.from_datetime, fields);
                base.export_element (obj, "SwitchingStep", "description", "description",  base.from_string, fields);
                base.export_element (obj, "SwitchingStep", "isFreeSequence", "isFreeSequence",  base.from_boolean, fields);
                base.export_element (obj, "SwitchingStep", "sequenceNumber", "sequenceNumber",  base.from_string, fields);
                base.export_attribute (obj, "SwitchingStep", "CrewMember", "CrewMember", fields);
                base.export_attribute (obj, "SwitchingStep", "Operator", "Operator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SwitchingStep_collapse" aria-expanded="true" aria-controls="SwitchingStep_collapse" style="margin-left: 10px;">SwitchingStep</a></legend>
                    <div id="SwitchingStep_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#executedDateTime}}<div><b>executedDateTime</b>: {{executedDateTime}}</div>{{/executedDateTime}}
                    {{#plannedDateTime}}<div><b>plannedDateTime</b>: {{plannedDateTime}}</div>{{/plannedDateTime}}
                    {{#description}}<div><b>description</b>: {{description}}</div>{{/description}}
                    {{#isFreeSequence}}<div><b>isFreeSequence</b>: {{isFreeSequence}}</div>{{/isFreeSequence}}
                    {{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
                    {{#CrewMember}}<div><b>CrewMember</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CrewMember}}&quot;);})'>{{CrewMember}}</a></div>{{/CrewMember}}
                    {{#Operator}}<div><b>Operator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Operator}}&quot;);})'>{{Operator}}</a></div>{{/Operator}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SwitchingStep_collapse" aria-expanded="true" aria-controls="SwitchingStep_collapse" style="margin-left: 10px;">SwitchingStep</a></legend>
                    <div id="SwitchingStep_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='executedDateTime'>executedDateTime: </label><div class='col-sm-8'><input id='executedDateTime' class='form-control' type='text'{{#executedDateTime}} value='{{executedDateTime}}'{{/executedDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='plannedDateTime'>plannedDateTime: </label><div class='col-sm-8'><input id='plannedDateTime' class='form-control' type='text'{{#plannedDateTime}} value='{{plannedDateTime}}'{{/plannedDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='description'>description: </label><div class='col-sm-8'><input id='description' class='form-control' type='text'{{#description}} value='{{description}}'{{/description}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isFreeSequence'>isFreeSequence: </label><div class='col-sm-8'><input id='isFreeSequence' class='form-check-input' type='checkbox'{{#isFreeSequence}} checked{{/isFreeSequence}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='sequenceNumber'>sequenceNumber: </label><div class='col-sm-8'><input id='sequenceNumber' class='form-control' type='text'{{#sequenceNumber}} value='{{sequenceNumber}}'{{/sequenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CrewMember'>CrewMember: </label><div class='col-sm-8'><input id='CrewMember' class='form-control' type='text'{{#CrewMember}} value='{{CrewMember}}'{{/CrewMember}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Operator'>Operator: </label><div class='col-sm-8'><input id='Operator' class='form-control' type='text'{{#Operator}} value='{{Operator}}'{{/Operator}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "SwitchingStep" };
                super.submit (obj);
                temp = document.getElementById ("executedDateTime").value; if ("" != temp) obj.executedDateTime = temp;
                temp = document.getElementById ("plannedDateTime").value; if ("" != temp) obj.plannedDateTime = temp;
                temp = document.getElementById ("description").value; if ("" != temp) obj.description = temp;
                temp = document.getElementById ("isFreeSequence").checked; if (temp) obj.isFreeSequence = true;
                temp = document.getElementById ("sequenceNumber").value; if ("" != temp) obj.sequenceNumber = temp;
                temp = document.getElementById ("CrewMember").value; if ("" != temp) obj.CrewMember = temp;
                temp = document.getElementById ("Operator").value; if ("" != temp) obj.Operator = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["CrewMember", "CrewMember", "0..1", "0..*"],
                        ["Operator", "Operator", "0..1", "0..*"]
                    ]
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
        class SwitchingPlan extends SwitchingStepGroup
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.SwitchingPlan;
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
                var obj;

                obj = SwitchingStepGroup.prototype.parse.call (this, context, sub);
                obj.cls = "SwitchingPlan";
                base.parse_element (/<cim:SwitchingPlan.rank>([\s\S]*?)<\/cim:SwitchingPlan.rank>/g, obj, "rank", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchingPlan.purpose>([\s\S]*?)<\/cim:SwitchingPlan.purpose>/g, obj, "purpose", base.to_string, sub, context);
                base.parse_attributes (/<cim:SwitchingPlan.SafetyDocuments\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SafetyDocuments", sub, context);
                base.parse_attribute (/<cim:SwitchingPlan.Outage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Outage", sub, context);
                base.parse_attributes (/<cim:SwitchingPlan.SwitchingStepGroups\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroups", sub, context);
                base.parse_attributes (/<cim:SwitchingPlan.WorkTasks\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkTasks", sub, context);
                var bucket = context.parsed.SwitchingPlan;
                if (null == bucket)
                   context.parsed.SwitchingPlan = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = SwitchingStepGroup.prototype.export.call (this, obj, false);

                base.export_element (obj, "SwitchingPlan", "rank", "rank",  base.from_string, fields);
                base.export_element (obj, "SwitchingPlan", "purpose", "purpose",  base.from_string, fields);
                base.export_attributes (obj, "SwitchingPlan", "SafetyDocuments", "SafetyDocuments", fields);
                base.export_attribute (obj, "SwitchingPlan", "Outage", "Outage", fields);
                base.export_attributes (obj, "SwitchingPlan", "SwitchingStepGroups", "SwitchingStepGroups", fields);
                base.export_attributes (obj, "SwitchingPlan", "WorkTasks", "WorkTasks", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SwitchingPlan_collapse" aria-expanded="true" aria-controls="SwitchingPlan_collapse" style="margin-left: 10px;">SwitchingPlan</a></legend>
                    <div id="SwitchingPlan_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SwitchingStepGroup.prototype.template.call (this) +
                    `
                    {{#rank}}<div><b>rank</b>: {{rank}}</div>{{/rank}}
                    {{#purpose}}<div><b>purpose</b>: {{purpose}}</div>{{/purpose}}
                    {{#SafetyDocuments}}<div><b>SafetyDocuments</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/SafetyDocuments}}
                    {{#Outage}}<div><b>Outage</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Outage}}&quot;);})'>{{Outage}}</a></div>{{/Outage}}
                    {{#SwitchingStepGroups}}<div><b>SwitchingStepGroups</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/SwitchingStepGroups}}
                    {{#WorkTasks}}<div><b>WorkTasks</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/WorkTasks}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.SafetyDocuments) obj.SafetyDocuments_string = obj.SafetyDocuments.join ();
                if (obj.SwitchingStepGroups) obj.SwitchingStepGroups_string = obj.SwitchingStepGroups.join ();
                if (obj.WorkTasks) obj.WorkTasks_string = obj.WorkTasks.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.SafetyDocuments_string;
                delete obj.SwitchingStepGroups_string;
                delete obj.WorkTasks_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SwitchingPlan_collapse" aria-expanded="true" aria-controls="SwitchingPlan_collapse" style="margin-left: 10px;">SwitchingPlan</a></legend>
                    <div id="SwitchingPlan_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SwitchingStepGroup.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rank'>rank: </label><div class='col-sm-8'><input id='rank' class='form-control' type='text'{{#rank}} value='{{rank}}'{{/rank}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='purpose'>purpose: </label><div class='col-sm-8'><input id='purpose' class='form-control' type='text'{{#purpose}} value='{{purpose}}'{{/purpose}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Outage'>Outage: </label><div class='col-sm-8'><input id='Outage' class='form-control' type='text'{{#Outage}} value='{{Outage}}'{{/Outage}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "SwitchingPlan" };
                super.submit (obj);
                temp = document.getElementById ("rank").value; if ("" != temp) obj.rank = temp;
                temp = document.getElementById ("purpose").value; if ("" != temp) obj.purpose = temp;
                temp = document.getElementById ("Outage").value; if ("" != temp) obj.Outage = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["SafetyDocuments", "SafetyDocument", "0..*", "0..1"],
                        ["Outage", "Outage", "0..1", "0..*"],
                        ["SwitchingStepGroups", "SwitchingStepGroup", "0..*", "0..1"],
                        ["WorkTasks", "WorkTask", "0..*", "0..1"]
                    ]
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
                var bucket = cim_data.OperationalUpdatedRating;
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
                var obj;

                obj = OperationalRestriction.prototype.parse.call (this, context, sub);
                obj.cls = "OperationalUpdatedRating";
                base.parse_element (/<cim:OperationalUpdatedRating.changeType>([\s\S]*?)<\/cim:OperationalUpdatedRating.changeType>/g, obj, "changeType", base.to_string, sub, context);
                base.parse_attribute (/<cim:OperationalUpdatedRating.PlannedOutage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PlannedOutage", sub, context);
                var bucket = context.parsed.OperationalUpdatedRating;
                if (null == bucket)
                   context.parsed.OperationalUpdatedRating = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = OperationalRestriction.prototype.export.call (this, obj, false);

                base.export_element (obj, "OperationalUpdatedRating", "changeType", "changeType",  base.from_string, fields);
                base.export_attribute (obj, "OperationalUpdatedRating", "PlannedOutage", "PlannedOutage", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OperationalUpdatedRating_collapse" aria-expanded="true" aria-controls="OperationalUpdatedRating_collapse" style="margin-left: 10px;">OperationalUpdatedRating</a></legend>
                    <div id="OperationalUpdatedRating_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + OperationalRestriction.prototype.template.call (this) +
                    `
                    {{#changeType}}<div><b>changeType</b>: {{changeType}}</div>{{/changeType}}
                    {{#PlannedOutage}}<div><b>PlannedOutage</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PlannedOutage}}&quot;);})'>{{PlannedOutage}}</a></div>{{/PlannedOutage}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OperationalUpdatedRating_collapse" aria-expanded="true" aria-controls="OperationalUpdatedRating_collapse" style="margin-left: 10px;">OperationalUpdatedRating</a></legend>
                    <div id="OperationalUpdatedRating_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + OperationalRestriction.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='changeType'>changeType: </label><div class='col-sm-8'><input id='changeType' class='form-control' type='text'{{#changeType}} value='{{changeType}}'{{/changeType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='PlannedOutage'>PlannedOutage: </label><div class='col-sm-8'><input id='PlannedOutage' class='form-control' type='text'{{#PlannedOutage}} value='{{PlannedOutage}}'{{/PlannedOutage}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "OperationalUpdatedRating" };
                super.submit (obj);
                temp = document.getElementById ("changeType").value; if ("" != temp) obj.changeType = temp;
                temp = document.getElementById ("PlannedOutage").value; if ("" != temp) obj.PlannedOutage = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["PlannedOutage", "Outage", "1", "0..*"]
                    ]
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
                var bucket = cim_data.ClearanceDocument;
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
                var obj;

                obj = SafetyDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ClearanceDocument";
                base.parse_element (/<cim:ClearanceDocument.mustBeDeenergised>([\s\S]*?)<\/cim:ClearanceDocument.mustBeDeenergised>/g, obj, "mustBeDeenergised", base.to_boolean, sub, context);
                base.parse_element (/<cim:ClearanceDocument.mustBeGrounded>([\s\S]*?)<\/cim:ClearanceDocument.mustBeGrounded>/g, obj, "mustBeGrounded", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:ClearanceDocument.TaggedPSRs\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TaggedPSRs", sub, context);
                base.parse_attribute (/<cim:ClearanceDocument.ClearanceAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ClearanceAction", sub, context);
                var bucket = context.parsed.ClearanceDocument;
                if (null == bucket)
                   context.parsed.ClearanceDocument = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = SafetyDocument.prototype.export.call (this, obj, false);

                base.export_element (obj, "ClearanceDocument", "mustBeDeenergised", "mustBeDeenergised",  base.from_boolean, fields);
                base.export_element (obj, "ClearanceDocument", "mustBeGrounded", "mustBeGrounded",  base.from_boolean, fields);
                base.export_attributes (obj, "ClearanceDocument", "TaggedPSRs", "TaggedPSRs", fields);
                base.export_attribute (obj, "ClearanceDocument", "ClearanceAction", "ClearanceAction", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ClearanceDocument_collapse" aria-expanded="true" aria-controls="ClearanceDocument_collapse" style="margin-left: 10px;">ClearanceDocument</a></legend>
                    <div id="ClearanceDocument_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SafetyDocument.prototype.template.call (this) +
                    `
                    {{#mustBeDeenergised}}<div><b>mustBeDeenergised</b>: {{mustBeDeenergised}}</div>{{/mustBeDeenergised}}
                    {{#mustBeGrounded}}<div><b>mustBeGrounded</b>: {{mustBeGrounded}}</div>{{/mustBeGrounded}}
                    {{#TaggedPSRs}}<div><b>TaggedPSRs</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/TaggedPSRs}}
                    {{#ClearanceAction}}<div><b>ClearanceAction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ClearanceAction}}&quot;);})'>{{ClearanceAction}}</a></div>{{/ClearanceAction}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.TaggedPSRs) obj.TaggedPSRs_string = obj.TaggedPSRs.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TaggedPSRs_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ClearanceDocument_collapse" aria-expanded="true" aria-controls="ClearanceDocument_collapse" style="margin-left: 10px;">ClearanceDocument</a></legend>
                    <div id="ClearanceDocument_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SafetyDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='mustBeDeenergised'>mustBeDeenergised: </label><div class='col-sm-8'><input id='mustBeDeenergised' class='form-check-input' type='checkbox'{{#mustBeDeenergised}} checked{{/mustBeDeenergised}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='mustBeGrounded'>mustBeGrounded: </label><div class='col-sm-8'><input id='mustBeGrounded' class='form-check-input' type='checkbox'{{#mustBeGrounded}} checked{{/mustBeGrounded}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TaggedPSRs'>TaggedPSRs: </label><div class='col-sm-8'><input id='TaggedPSRs' class='form-control' type='text'{{#TaggedPSRs}} value='{{TaggedPSRs}}_string'{{/TaggedPSRs}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ClearanceAction'>ClearanceAction: </label><div class='col-sm-8'><input id='ClearanceAction' class='form-control' type='text'{{#ClearanceAction}} value='{{ClearanceAction}}'{{/ClearanceAction}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ClearanceDocument" };
                super.submit (obj);
                temp = document.getElementById ("mustBeDeenergised").checked; if (temp) obj.mustBeDeenergised = true;
                temp = document.getElementById ("mustBeGrounded").checked; if (temp) obj.mustBeGrounded = true;
                temp = document.getElementById ("TaggedPSRs").value; if ("" != temp) obj.TaggedPSRs = temp.split (",");
                temp = document.getElementById ("ClearanceAction").value; if ("" != temp) obj.ClearanceAction = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["TaggedPSRs", "PowerSystemResource", "0..*", "0..*"],
                        ["ClearanceAction", "ClearanceAction", "0..1", "0..1"]
                    ]
                );
            }
        }

        /**
         * An arbitrary switching step.
         *
         */
        class GenericAction extends SwitchingStep
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GenericAction;
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
                var obj;

                obj = SwitchingStep.prototype.parse.call (this, context, sub);
                obj.cls = "GenericAction";
                base.parse_attribute (/<cim:GenericAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);
                var bucket = context.parsed.GenericAction;
                if (null == bucket)
                   context.parsed.GenericAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = SwitchingStep.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "GenericAction", "SwitchingStepGroup", "SwitchingStepGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GenericAction_collapse" aria-expanded="true" aria-controls="GenericAction_collapse" style="margin-left: 10px;">GenericAction</a></legend>
                    <div id="GenericAction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.template.call (this) +
                    `
                    {{#SwitchingStepGroup}}<div><b>SwitchingStepGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SwitchingStepGroup}}&quot;);})'>{{SwitchingStepGroup}}</a></div>{{/SwitchingStepGroup}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GenericAction_collapse" aria-expanded="true" aria-controls="GenericAction_collapse" style="margin-left: 10px;">GenericAction</a></legend>
                    <div id="GenericAction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SwitchingStepGroup'>SwitchingStepGroup: </label><div class='col-sm-8'><input id='SwitchingStepGroup' class='form-control' type='text'{{#SwitchingStepGroup}} value='{{SwitchingStepGroup}}'{{/SwitchingStepGroup}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "GenericAction" };
                super.submit (obj);
                temp = document.getElementById ("SwitchingStepGroup").value; if ("" != temp) obj.SwitchingStepGroup = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["SwitchingStepGroup", "SwitchingStepGroup", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Action on clearance document as a switching step.
         *
         */
        class ClearanceAction extends SwitchingStep
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ClearanceAction;
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
                var obj;

                obj = SwitchingStep.prototype.parse.call (this, context, sub);
                obj.cls = "ClearanceAction";
                base.parse_attribute (/<cim:ClearanceAction.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:ClearanceAction.Clearance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Clearance", sub, context);
                base.parse_attribute (/<cim:ClearanceAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);
                var bucket = context.parsed.ClearanceAction;
                if (null == bucket)
                   context.parsed.ClearanceAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = SwitchingStep.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ClearanceAction", "kind", "kind", fields);
                base.export_attribute (obj, "ClearanceAction", "Clearance", "Clearance", fields);
                base.export_attribute (obj, "ClearanceAction", "SwitchingStepGroup", "SwitchingStepGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ClearanceAction_collapse" aria-expanded="true" aria-controls="ClearanceAction_collapse" style="margin-left: 10px;">ClearanceAction</a></legend>
                    <div id="ClearanceAction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#Clearance}}<div><b>Clearance</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Clearance}}&quot;);})'>{{Clearance}}</a></div>{{/Clearance}}
                    {{#SwitchingStepGroup}}<div><b>SwitchingStepGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SwitchingStepGroup}}&quot;);})'>{{SwitchingStepGroup}}</a></div>{{/SwitchingStepGroup}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ClearanceActionKind = []; if (!obj.kind) obj.ClearanceActionKind.push ({ id: '', selected: true}); for (var property in ClearanceActionKind) obj.ClearanceActionKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ClearanceActionKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ClearanceAction_collapse" aria-expanded="true" aria-controls="ClearanceAction_collapse" style="margin-left: 10px;">ClearanceAction</a></legend>
                    <div id="ClearanceAction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#ClearanceActionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ClearanceActionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Clearance'>Clearance: </label><div class='col-sm-8'><input id='Clearance' class='form-control' type='text'{{#Clearance}} value='{{Clearance}}'{{/Clearance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SwitchingStepGroup'>SwitchingStepGroup: </label><div class='col-sm-8'><input id='SwitchingStepGroup' class='form-control' type='text'{{#SwitchingStepGroup}} value='{{SwitchingStepGroup}}'{{/SwitchingStepGroup}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ClearanceAction" };
                super.submit (obj);
                temp = document.getElementById ("kind").value; if ("" != temp) { temp = ClearanceActionKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#ClearanceActionKind." + temp; }
                temp = document.getElementById ("Clearance").value; if ("" != temp) obj.Clearance = temp;
                temp = document.getElementById ("SwitchingStepGroup").value; if ("" != temp) obj.SwitchingStepGroup = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Clearance", "ClearanceDocument", "0..1", "0..1"],
                        ["SwitchingStepGroup", "SwitchingStepGroup", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Action on ground as a switching step.
         *
         */
        class GroundAction extends SwitchingStep
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GroundAction;
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
                var obj;

                obj = SwitchingStep.prototype.parse.call (this, context, sub);
                obj.cls = "GroundAction";
                base.parse_attribute (/<cim:GroundAction.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:GroundAction.Ground\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Ground", sub, context);
                base.parse_attribute (/<cim:GroundAction.AlongACLineSegment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AlongACLineSegment", sub, context);
                base.parse_attribute (/<cim:GroundAction.GroundedEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GroundedEquipment", sub, context);
                base.parse_attribute (/<cim:GroundAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);
                var bucket = context.parsed.GroundAction;
                if (null == bucket)
                   context.parsed.GroundAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = SwitchingStep.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "GroundAction", "kind", "kind", fields);
                base.export_attribute (obj, "GroundAction", "Ground", "Ground", fields);
                base.export_attribute (obj, "GroundAction", "AlongACLineSegment", "AlongACLineSegment", fields);
                base.export_attribute (obj, "GroundAction", "GroundedEquipment", "GroundedEquipment", fields);
                base.export_attribute (obj, "GroundAction", "SwitchingStepGroup", "SwitchingStepGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GroundAction_collapse" aria-expanded="true" aria-controls="GroundAction_collapse" style="margin-left: 10px;">GroundAction</a></legend>
                    <div id="GroundAction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#Ground}}<div><b>Ground</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Ground}}&quot;);})'>{{Ground}}</a></div>{{/Ground}}
                    {{#AlongACLineSegment}}<div><b>AlongACLineSegment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AlongACLineSegment}}&quot;);})'>{{AlongACLineSegment}}</a></div>{{/AlongACLineSegment}}
                    {{#GroundedEquipment}}<div><b>GroundedEquipment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GroundedEquipment}}&quot;);})'>{{GroundedEquipment}}</a></div>{{/GroundedEquipment}}
                    {{#SwitchingStepGroup}}<div><b>SwitchingStepGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SwitchingStepGroup}}&quot;);})'>{{SwitchingStepGroup}}</a></div>{{/SwitchingStepGroup}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.TempEquipActionKind = []; if (!obj.kind) obj.TempEquipActionKind.push ({ id: '', selected: true}); for (var property in TempEquipActionKind) obj.TempEquipActionKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TempEquipActionKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GroundAction_collapse" aria-expanded="true" aria-controls="GroundAction_collapse" style="margin-left: 10px;">GroundAction</a></legend>
                    <div id="GroundAction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#TempEquipActionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/TempEquipActionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Ground'>Ground: </label><div class='col-sm-8'><input id='Ground' class='form-control' type='text'{{#Ground}} value='{{Ground}}'{{/Ground}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AlongACLineSegment'>AlongACLineSegment: </label><div class='col-sm-8'><input id='AlongACLineSegment' class='form-control' type='text'{{#AlongACLineSegment}} value='{{AlongACLineSegment}}'{{/AlongACLineSegment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='GroundedEquipment'>GroundedEquipment: </label><div class='col-sm-8'><input id='GroundedEquipment' class='form-control' type='text'{{#GroundedEquipment}} value='{{GroundedEquipment}}'{{/GroundedEquipment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SwitchingStepGroup'>SwitchingStepGroup: </label><div class='col-sm-8'><input id='SwitchingStepGroup' class='form-control' type='text'{{#SwitchingStepGroup}} value='{{SwitchingStepGroup}}'{{/SwitchingStepGroup}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "GroundAction" };
                super.submit (obj);
                temp = document.getElementById ("kind").value; if ("" != temp) { temp = TempEquipActionKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#TempEquipActionKind." + temp; }
                temp = document.getElementById ("Ground").value; if ("" != temp) obj.Ground = temp;
                temp = document.getElementById ("AlongACLineSegment").value; if ("" != temp) obj.AlongACLineSegment = temp;
                temp = document.getElementById ("GroundedEquipment").value; if ("" != temp) obj.GroundedEquipment = temp;
                temp = document.getElementById ("SwitchingStepGroup").value; if ("" != temp) obj.SwitchingStepGroup = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Ground", "Ground", "0..1", "0..1"],
                        ["AlongACLineSegment", "ACLineSegment", "0..1", "0..1"],
                        ["GroundedEquipment", "ConductingEquipment", "0..1", "0..1"],
                        ["SwitchingStepGroup", "SwitchingStepGroup", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Action on cut as a switching step.
         *
         */
        class CutAction extends SwitchingStep
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.CutAction;
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
                var obj;

                obj = SwitchingStep.prototype.parse.call (this, context, sub);
                obj.cls = "CutAction";
                base.parse_attribute (/<cim:CutAction.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:CutAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);
                base.parse_attribute (/<cim:CutAction.Cut\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Cut", sub, context);
                var bucket = context.parsed.CutAction;
                if (null == bucket)
                   context.parsed.CutAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = SwitchingStep.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "CutAction", "kind", "kind", fields);
                base.export_attribute (obj, "CutAction", "SwitchingStepGroup", "SwitchingStepGroup", fields);
                base.export_attribute (obj, "CutAction", "Cut", "Cut", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CutAction_collapse" aria-expanded="true" aria-controls="CutAction_collapse" style="margin-left: 10px;">CutAction</a></legend>
                    <div id="CutAction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#SwitchingStepGroup}}<div><b>SwitchingStepGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SwitchingStepGroup}}&quot;);})'>{{SwitchingStepGroup}}</a></div>{{/SwitchingStepGroup}}
                    {{#Cut}}<div><b>Cut</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Cut}}&quot;);})'>{{Cut}}</a></div>{{/Cut}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.TempEquipActionKind = []; if (!obj.kind) obj.TempEquipActionKind.push ({ id: '', selected: true}); for (var property in TempEquipActionKind) obj.TempEquipActionKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TempEquipActionKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CutAction_collapse" aria-expanded="true" aria-controls="CutAction_collapse" style="margin-left: 10px;">CutAction</a></legend>
                    <div id="CutAction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#TempEquipActionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/TempEquipActionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SwitchingStepGroup'>SwitchingStepGroup: </label><div class='col-sm-8'><input id='SwitchingStepGroup' class='form-control' type='text'{{#SwitchingStepGroup}} value='{{SwitchingStepGroup}}'{{/SwitchingStepGroup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Cut'>Cut: </label><div class='col-sm-8'><input id='Cut' class='form-control' type='text'{{#Cut}} value='{{Cut}}'{{/Cut}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "CutAction" };
                super.submit (obj);
                temp = document.getElementById ("kind").value; if ("" != temp) { temp = TempEquipActionKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#TempEquipActionKind." + temp; }
                temp = document.getElementById ("SwitchingStepGroup").value; if ("" != temp) obj.SwitchingStepGroup = temp;
                temp = document.getElementById ("Cut").value; if ("" != temp) obj.Cut = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["SwitchingStepGroup", "SwitchingStepGroup", "0..1", "0..*"],
                        ["Cut", "Cut", "0..1", "0..1"]
                    ]
                );
            }
        }

        /**
         * Action on switch as a switching step.
         *
         */
        class SwitchAction extends SwitchingStep
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.SwitchAction;
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
                var obj;

                obj = SwitchingStep.prototype.parse.call (this, context, sub);
                obj.cls = "SwitchAction";
                base.parse_attribute (/<cim:SwitchAction.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:SwitchAction.PlannedOutage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PlannedOutage", sub, context);
                base.parse_attribute (/<cim:SwitchAction.OperatedSwitch\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OperatedSwitch", sub, context);
                base.parse_attribute (/<cim:SwitchAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);
                var bucket = context.parsed.SwitchAction;
                if (null == bucket)
                   context.parsed.SwitchAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = SwitchingStep.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "SwitchAction", "kind", "kind", fields);
                base.export_attribute (obj, "SwitchAction", "PlannedOutage", "PlannedOutage", fields);
                base.export_attribute (obj, "SwitchAction", "OperatedSwitch", "OperatedSwitch", fields);
                base.export_attribute (obj, "SwitchAction", "SwitchingStepGroup", "SwitchingStepGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SwitchAction_collapse" aria-expanded="true" aria-controls="SwitchAction_collapse" style="margin-left: 10px;">SwitchAction</a></legend>
                    <div id="SwitchAction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#PlannedOutage}}<div><b>PlannedOutage</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PlannedOutage}}&quot;);})'>{{PlannedOutage}}</a></div>{{/PlannedOutage}}
                    {{#OperatedSwitch}}<div><b>OperatedSwitch</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{OperatedSwitch}}&quot;);})'>{{OperatedSwitch}}</a></div>{{/OperatedSwitch}}
                    {{#SwitchingStepGroup}}<div><b>SwitchingStepGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SwitchingStepGroup}}&quot;);})'>{{SwitchingStepGroup}}</a></div>{{/SwitchingStepGroup}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.SwitchActionKind = []; if (!obj.kind) obj.SwitchActionKind.push ({ id: '', selected: true}); for (var property in SwitchActionKind) obj.SwitchActionKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.SwitchActionKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SwitchAction_collapse" aria-expanded="true" aria-controls="SwitchAction_collapse" style="margin-left: 10px;">SwitchAction</a></legend>
                    <div id="SwitchAction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#SwitchActionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/SwitchActionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='PlannedOutage'>PlannedOutage: </label><div class='col-sm-8'><input id='PlannedOutage' class='form-control' type='text'{{#PlannedOutage}} value='{{PlannedOutage}}'{{/PlannedOutage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='OperatedSwitch'>OperatedSwitch: </label><div class='col-sm-8'><input id='OperatedSwitch' class='form-control' type='text'{{#OperatedSwitch}} value='{{OperatedSwitch}}'{{/OperatedSwitch}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SwitchingStepGroup'>SwitchingStepGroup: </label><div class='col-sm-8'><input id='SwitchingStepGroup' class='form-control' type='text'{{#SwitchingStepGroup}} value='{{SwitchingStepGroup}}'{{/SwitchingStepGroup}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "SwitchAction" };
                super.submit (obj);
                temp = document.getElementById ("kind").value; if ("" != temp) { temp = SwitchActionKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#SwitchActionKind." + temp; }
                temp = document.getElementById ("PlannedOutage").value; if ("" != temp) obj.PlannedOutage = temp;
                temp = document.getElementById ("OperatedSwitch").value; if ("" != temp) obj.OperatedSwitch = temp;
                temp = document.getElementById ("SwitchingStepGroup").value; if ("" != temp) obj.SwitchingStepGroup = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["PlannedOutage", "Outage", "0..1", "0..*"],
                        ["OperatedSwitch", "Switch", "0..1", "0..1"],
                        ["SwitchingStepGroup", "SwitchingStepGroup", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Action on jumper as a switching step.
         *
         */
        class JumperAction extends SwitchingStep
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.JumperAction;
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
                var obj;

                obj = SwitchingStep.prototype.parse.call (this, context, sub);
                obj.cls = "JumperAction";
                base.parse_attribute (/<cim:JumperAction.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attributes (/<cim:JumperAction.AlongACLineSegments\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AlongACLineSegments", sub, context);
                base.parse_attribute (/<cim:JumperAction.Jumper\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Jumper", sub, context);
                base.parse_attribute (/<cim:JumperAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);
                base.parse_attributes (/<cim:JumperAction.JumpedEquipments\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "JumpedEquipments", sub, context);
                var bucket = context.parsed.JumperAction;
                if (null == bucket)
                   context.parsed.JumperAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = SwitchingStep.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "JumperAction", "kind", "kind", fields);
                base.export_attributes (obj, "JumperAction", "AlongACLineSegments", "AlongACLineSegments", fields);
                base.export_attribute (obj, "JumperAction", "Jumper", "Jumper", fields);
                base.export_attribute (obj, "JumperAction", "SwitchingStepGroup", "SwitchingStepGroup", fields);
                base.export_attributes (obj, "JumperAction", "JumpedEquipments", "JumpedEquipments", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#JumperAction_collapse" aria-expanded="true" aria-controls="JumperAction_collapse" style="margin-left: 10px;">JumperAction</a></legend>
                    <div id="JumperAction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#AlongACLineSegments}}<div><b>AlongACLineSegments</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/AlongACLineSegments}}
                    {{#Jumper}}<div><b>Jumper</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Jumper}}&quot;);})'>{{Jumper}}</a></div>{{/Jumper}}
                    {{#SwitchingStepGroup}}<div><b>SwitchingStepGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SwitchingStepGroup}}&quot;);})'>{{SwitchingStepGroup}}</a></div>{{/SwitchingStepGroup}}
                    {{#JumpedEquipments}}<div><b>JumpedEquipments</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/JumpedEquipments}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.TempEquipActionKind = []; if (!obj.kind) obj.TempEquipActionKind.push ({ id: '', selected: true}); for (var property in TempEquipActionKind) obj.TempEquipActionKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
                if (obj.AlongACLineSegments) obj.AlongACLineSegments_string = obj.AlongACLineSegments.join ();
                if (obj.JumpedEquipments) obj.JumpedEquipments_string = obj.JumpedEquipments.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TempEquipActionKind;
                delete obj.AlongACLineSegments_string;
                delete obj.JumpedEquipments_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#JumperAction_collapse" aria-expanded="true" aria-controls="JumperAction_collapse" style="margin-left: 10px;">JumperAction</a></legend>
                    <div id="JumperAction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#TempEquipActionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/TempEquipActionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Jumper'>Jumper: </label><div class='col-sm-8'><input id='Jumper' class='form-control' type='text'{{#Jumper}} value='{{Jumper}}'{{/Jumper}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SwitchingStepGroup'>SwitchingStepGroup: </label><div class='col-sm-8'><input id='SwitchingStepGroup' class='form-control' type='text'{{#SwitchingStepGroup}} value='{{SwitchingStepGroup}}'{{/SwitchingStepGroup}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "JumperAction" };
                super.submit (obj);
                temp = document.getElementById ("kind").value; if ("" != temp) { temp = TempEquipActionKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#TempEquipActionKind." + temp; }
                temp = document.getElementById ("Jumper").value; if ("" != temp) obj.Jumper = temp;
                temp = document.getElementById ("SwitchingStepGroup").value; if ("" != temp) obj.SwitchingStepGroup = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["AlongACLineSegments", "ACLineSegment", "0..*", "0..1"],
                        ["Jumper", "Jumper", "0..1", "0..1"],
                        ["SwitchingStepGroup", "SwitchingStepGroup", "0..1", "0..*"],
                        ["JumpedEquipments", "ConductingEquipment", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Action on operation tag as a switching step.
         *
         */
        class TagAction extends SwitchingStep
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.TagAction;
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
                var obj;

                obj = SwitchingStep.prototype.parse.call (this, context, sub);
                obj.cls = "TagAction";
                base.parse_attribute (/<cim:TagAction.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:TagAction.OperationTag\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OperationTag", sub, context);
                base.parse_attribute (/<cim:TagAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);
                var bucket = context.parsed.TagAction;
                if (null == bucket)
                   context.parsed.TagAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = SwitchingStep.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "TagAction", "kind", "kind", fields);
                base.export_attribute (obj, "TagAction", "OperationTag", "OperationTag", fields);
                base.export_attribute (obj, "TagAction", "SwitchingStepGroup", "SwitchingStepGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TagAction_collapse" aria-expanded="true" aria-controls="TagAction_collapse" style="margin-left: 10px;">TagAction</a></legend>
                    <div id="TagAction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#OperationTag}}<div><b>OperationTag</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{OperationTag}}&quot;);})'>{{OperationTag}}</a></div>{{/OperationTag}}
                    {{#SwitchingStepGroup}}<div><b>SwitchingStepGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SwitchingStepGroup}}&quot;);})'>{{SwitchingStepGroup}}</a></div>{{/SwitchingStepGroup}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.TagActionKind = []; if (!obj.kind) obj.TagActionKind.push ({ id: '', selected: true}); for (var property in TagActionKind) obj.TagActionKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TagActionKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TagAction_collapse" aria-expanded="true" aria-controls="TagAction_collapse" style="margin-left: 10px;">TagAction</a></legend>
                    <div id="TagAction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#TagActionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/TagActionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='OperationTag'>OperationTag: </label><div class='col-sm-8'><input id='OperationTag' class='form-control' type='text'{{#OperationTag}} value='{{OperationTag}}'{{/OperationTag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SwitchingStepGroup'>SwitchingStepGroup: </label><div class='col-sm-8'><input id='SwitchingStepGroup' class='form-control' type='text'{{#SwitchingStepGroup}} value='{{SwitchingStepGroup}}'{{/SwitchingStepGroup}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "TagAction" };
                super.submit (obj);
                temp = document.getElementById ("kind").value; if ("" != temp) { temp = TagActionKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#TagActionKind." + temp; }
                temp = document.getElementById ("OperationTag").value; if ("" != temp) obj.OperationTag = temp;
                temp = document.getElementById ("SwitchingStepGroup").value; if ("" != temp) obj.SwitchingStepGroup = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["OperationTag", "OperationTag", "0..1", "0..1"],
                        ["SwitchingStepGroup", "SwitchingStepGroup", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Action on energy source as a switching step.
         *
         */
        class EnergySourceAction extends SwitchingStep
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.EnergySourceAction;
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
                var obj;

                obj = SwitchingStep.prototype.parse.call (this, context, sub);
                obj.cls = "EnergySourceAction";
                base.parse_attribute (/<cim:EnergySourceAction.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:EnergySourceAction.EnergySource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergySource", sub, context);
                base.parse_attribute (/<cim:EnergySourceAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);
                var bucket = context.parsed.EnergySourceAction;
                if (null == bucket)
                   context.parsed.EnergySourceAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = SwitchingStep.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "EnergySourceAction", "kind", "kind", fields);
                base.export_attribute (obj, "EnergySourceAction", "EnergySource", "EnergySource", fields);
                base.export_attribute (obj, "EnergySourceAction", "SwitchingStepGroup", "SwitchingStepGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EnergySourceAction_collapse" aria-expanded="true" aria-controls="EnergySourceAction_collapse" style="margin-left: 10px;">EnergySourceAction</a></legend>
                    <div id="EnergySourceAction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#EnergySource}}<div><b>EnergySource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EnergySource}}&quot;);})'>{{EnergySource}}</a></div>{{/EnergySource}}
                    {{#SwitchingStepGroup}}<div><b>SwitchingStepGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SwitchingStepGroup}}&quot;);})'>{{SwitchingStepGroup}}</a></div>{{/SwitchingStepGroup}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.TempEquipActionKind = []; if (!obj.kind) obj.TempEquipActionKind.push ({ id: '', selected: true}); for (var property in TempEquipActionKind) obj.TempEquipActionKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TempEquipActionKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EnergySourceAction_collapse" aria-expanded="true" aria-controls="EnergySourceAction_collapse" style="margin-left: 10px;">EnergySourceAction</a></legend>
                    <div id="EnergySourceAction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#TempEquipActionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/TempEquipActionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='EnergySource'>EnergySource: </label><div class='col-sm-8'><input id='EnergySource' class='form-control' type='text'{{#EnergySource}} value='{{EnergySource}}'{{/EnergySource}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SwitchingStepGroup'>SwitchingStepGroup: </label><div class='col-sm-8'><input id='SwitchingStepGroup' class='form-control' type='text'{{#SwitchingStepGroup}} value='{{SwitchingStepGroup}}'{{/SwitchingStepGroup}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "EnergySourceAction" };
                super.submit (obj);
                temp = document.getElementById ("kind").value; if ("" != temp) { temp = TempEquipActionKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#TempEquipActionKind." + temp; }
                temp = document.getElementById ("EnergySource").value; if ("" != temp) obj.EnergySource = temp;
                temp = document.getElementById ("SwitchingStepGroup").value; if ("" != temp) obj.SwitchingStepGroup = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["EnergySource", "EnergySource", "0..1", "0..1"],
                        ["SwitchingStepGroup", "SwitchingStepGroup", "0..1", "0..*"]
                    ]
                );
            }
        }

        return (
            {
                ClearanceAction: ClearanceAction,
                Outage: Outage,
                PSREvent: PSREvent,
                SafetyDocument: SafetyDocument,
                SwitchingPlan: SwitchingPlan,
                JumperAction: JumperAction,
                ClearanceDocument: ClearanceDocument,
                SwitchingStepGroup: SwitchingStepGroup,
                OperationalUpdatedRating: OperationalUpdatedRating,
                CutAction: CutAction,
                SwitchAction: SwitchAction,
                OperationTag: OperationTag,
                OperationalRestriction: OperationalRestriction,
                ServicePointOutageSummary: ServicePointOutageSummary,
                GenericAction: GenericAction,
                GroundAction: GroundAction,
                SwitchingStep: SwitchingStep,
                OutageSchedule: OutageSchedule,
                TagAction: TagAction,
                EnergySourceAction: EnergySourceAction,
                Incident: Incident
            }
        );
    }
);