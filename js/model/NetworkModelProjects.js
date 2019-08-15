define
(
    ["model/base", "model/Core"],
    /**
     * Defining meta-data for a change set in the functional Power System model.
     *
     */
    function (base, Core)
    {

        let DependencyKind =
        {
            "mutuallyExclusive": "mutuallyExclusive",
            "required": "required"
        };
        Object.freeze (DependencyKind);

        let ProjectStatusKind =
        {
            "draft": "draft",
            "cancelled": "cancelled",
            "frozen": "frozen",
            "closed": "closed"
        };
        Object.freeze (ProjectStatusKind);

        /**
         * A network model project version state.
         *
         * States are agreed upon by the exchange community.  Examples are "approved", "proposed", "withdrawn", "committed" etc.
         *
         */
        class NetworkModelProjectState extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.NetworkModelProjectState;
                if (null == bucket)
                   cim_data.NetworkModelProjectState = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.NetworkModelProjectState[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "NetworkModelProjectState";
                base.parse_attributes (/<cim:NetworkModelProjectState.NetworkModelProjectChangeVersion\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "NetworkModelProjectChangeVersion", sub, context);
                let bucket = context.parsed.NetworkModelProjectState;
                if (null == bucket)
                   context.parsed.NetworkModelProjectState = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "NetworkModelProjectState", "NetworkModelProjectChangeVersion", "NetworkModelProjectChangeVersion", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#NetworkModelProjectState_collapse" aria-expanded="true" aria-controls="NetworkModelProjectState_collapse" style="margin-left: 10px;">NetworkModelProjectState</a></legend>
                    <div id="NetworkModelProjectState_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#NetworkModelProjectChangeVersion}}<div><b>NetworkModelProjectChangeVersion</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/NetworkModelProjectChangeVersion}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["NetworkModelProjectChangeVersion"]) obj["NetworkModelProjectChangeVersion_string"] = obj["NetworkModelProjectChangeVersion"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["NetworkModelProjectChangeVersion_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_NetworkModelProjectState_collapse" aria-expanded="true" aria-controls="{{id}}_NetworkModelProjectState_collapse" style="margin-left: 10px;">NetworkModelProjectState</a></legend>
                    <div id="{{id}}_NetworkModelProjectState_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "NetworkModelProjectState" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["NetworkModelProjectChangeVersion", "0..*", "0..1", "NetworkModelProjectChangeVersion", "NetworkModelProjectState"]
                        ]
                    )
                );
            }
        }

        class NetworkModelProjectCollection extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.NetworkModelProjectCollection;
                if (null == bucket)
                   cim_data.NetworkModelProjectCollection = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.NetworkModelProjectCollection[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "NetworkModelProjectCollection";
                let bucket = context.parsed.NetworkModelProjectCollection;
                if (null == bucket)
                   context.parsed.NetworkModelProjectCollection = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#NetworkModelProjectCollection_collapse" aria-expanded="true" aria-controls="NetworkModelProjectCollection_collapse" style="margin-left: 10px;">NetworkModelProjectCollection</a></legend>
                    <div id="NetworkModelProjectCollection_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_NetworkModelProjectCollection_collapse" aria-expanded="true" aria-controls="{{id}}_NetworkModelProjectCollection_collapse" style="margin-left: 10px;">NetworkModelProjectCollection</a></legend>
                    <div id="{{id}}_NetworkModelProjectCollection_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "NetworkModelProjectCollection" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * Represent the base lifecycle of a functional model change that could be a construction of new elements.
         *
         */
        class PowerSystemProjectLifecycleToBeDeleted extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PowerSystemProjectLifecycleToBeDeleted;
                if (null == bucket)
                   cim_data.PowerSystemProjectLifecycleToBeDeleted = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PowerSystemProjectLifecycleToBeDeleted[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "PowerSystemProjectLifecycleToBeDeleted";
                base.parse_element (/<cim:PowerSystemProjectLifecycleToBeDeleted.cancelled>([\s\S]*?)<\/cim:PowerSystemProjectLifecycleToBeDeleted.cancelled>/g, obj, "cancelled", base.to_string, sub, context);
                base.parse_element (/<cim:PowerSystemProjectLifecycleToBeDeleted.committed>([\s\S]*?)<\/cim:PowerSystemProjectLifecycleToBeDeleted.committed>/g, obj, "committed", base.to_string, sub, context);
                base.parse_element (/<cim:PowerSystemProjectLifecycleToBeDeleted.inBuild>([\s\S]*?)<\/cim:PowerSystemProjectLifecycleToBeDeleted.inBuild>/g, obj, "inBuild", base.to_string, sub, context);
                base.parse_element (/<cim:PowerSystemProjectLifecycleToBeDeleted.inPlan>([\s\S]*?)<\/cim:PowerSystemProjectLifecycleToBeDeleted.inPlan>/g, obj, "inPlan", base.to_string, sub, context);
                let bucket = context.parsed.PowerSystemProjectLifecycleToBeDeleted;
                if (null == bucket)
                   context.parsed.PowerSystemProjectLifecycleToBeDeleted = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "PowerSystemProjectLifecycleToBeDeleted", "cancelled", "cancelled",  base.from_string, fields);
                base.export_element (obj, "PowerSystemProjectLifecycleToBeDeleted", "committed", "committed",  base.from_string, fields);
                base.export_element (obj, "PowerSystemProjectLifecycleToBeDeleted", "inBuild", "inBuild",  base.from_string, fields);
                base.export_element (obj, "PowerSystemProjectLifecycleToBeDeleted", "inPlan", "inPlan",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PowerSystemProjectLifecycleToBeDeleted_collapse" aria-expanded="true" aria-controls="PowerSystemProjectLifecycleToBeDeleted_collapse" style="margin-left: 10px;">PowerSystemProjectLifecycleToBeDeleted</a></legend>
                    <div id="PowerSystemProjectLifecycleToBeDeleted_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#cancelled}}<div><b>cancelled</b>: {{cancelled}}</div>{{/cancelled}}
                    {{#committed}}<div><b>committed</b>: {{committed}}</div>{{/committed}}
                    {{#inBuild}}<div><b>inBuild</b>: {{inBuild}}</div>{{/inBuild}}
                    {{#inPlan}}<div><b>inPlan</b>: {{inPlan}}</div>{{/inPlan}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PowerSystemProjectLifecycleToBeDeleted_collapse" aria-expanded="true" aria-controls="{{id}}_PowerSystemProjectLifecycleToBeDeleted_collapse" style="margin-left: 10px;">PowerSystemProjectLifecycleToBeDeleted</a></legend>
                    <div id="{{id}}_PowerSystemProjectLifecycleToBeDeleted_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cancelled'>cancelled: </label><div class='col-sm-8'><input id='{{id}}_cancelled' class='form-control' type='text'{{#cancelled}} value='{{cancelled}}'{{/cancelled}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_committed'>committed: </label><div class='col-sm-8'><input id='{{id}}_committed' class='form-control' type='text'{{#committed}} value='{{committed}}'{{/committed}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_inBuild'>inBuild: </label><div class='col-sm-8'><input id='{{id}}_inBuild' class='form-control' type='text'{{#inBuild}} value='{{inBuild}}'{{/inBuild}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_inPlan'>inPlan: </label><div class='col-sm-8'><input id='{{id}}_inPlan' class='form-control' type='text'{{#inPlan}} value='{{inPlan}}'{{/inPlan}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PowerSystemProjectLifecycleToBeDeleted" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_cancelled").value; if ("" !== temp) obj["cancelled"] = temp;
                temp = document.getElementById (id + "_committed").value; if ("" !== temp) obj["committed"] = temp;
                temp = document.getElementById (id + "_inBuild").value; if ("" !== temp) obj["inBuild"] = temp;
                temp = document.getElementById (id + "_inPlan").value; if ("" !== temp) obj["inPlan"] = temp;

                return (obj);
            }
        }

        /**
         * Abstract class for both a network model project and network model change.
         *
         */
        class NetworkModelProjectComponent extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.NetworkModelProjectComponent;
                if (null == bucket)
                   cim_data.NetworkModelProjectComponent = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.NetworkModelProjectComponent[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "NetworkModelProjectComponent";
                base.parse_attributes (/<cim:NetworkModelProjectComponent.ProjectARelationships\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ProjectARelationships", sub, context);
                base.parse_attributes (/<cim:NetworkModelProjectComponent.ProjectBRelationships\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ProjectBRelationships", sub, context);
                base.parse_attribute (/<cim:NetworkModelProjectComponent.ContainingProject\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ContainingProject", sub, context);
                let bucket = context.parsed.NetworkModelProjectComponent;
                if (null == bucket)
                   context.parsed.NetworkModelProjectComponent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "NetworkModelProjectComponent", "ProjectARelationships", "ProjectARelationships", fields);
                base.export_attributes (obj, "NetworkModelProjectComponent", "ProjectBRelationships", "ProjectBRelationships", fields);
                base.export_attribute (obj, "NetworkModelProjectComponent", "ContainingProject", "ContainingProject", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#NetworkModelProjectComponent_collapse" aria-expanded="true" aria-controls="NetworkModelProjectComponent_collapse" style="margin-left: 10px;">NetworkModelProjectComponent</a></legend>
                    <div id="NetworkModelProjectComponent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#ProjectARelationships}}<div><b>ProjectARelationships</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ProjectARelationships}}
                    {{#ProjectBRelationships}}<div><b>ProjectBRelationships</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ProjectBRelationships}}
                    {{#ContainingProject}}<div><b>ContainingProject</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ContainingProject}}");}); return false;'>{{ContainingProject}}</a></div>{{/ContainingProject}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ProjectARelationships"]) obj["ProjectARelationships_string"] = obj["ProjectARelationships"].join ();
                if (obj["ProjectBRelationships"]) obj["ProjectBRelationships_string"] = obj["ProjectBRelationships"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ProjectARelationships_string"];
                delete obj["ProjectBRelationships_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_NetworkModelProjectComponent_collapse" aria-expanded="true" aria-controls="{{id}}_NetworkModelProjectComponent_collapse" style="margin-left: 10px;">NetworkModelProjectComponent</a></legend>
                    <div id="{{id}}_NetworkModelProjectComponent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ContainingProject'>ContainingProject: </label><div class='col-sm-8'><input id='{{id}}_ContainingProject' class='form-control' type='text'{{#ContainingProject}} value='{{ContainingProject}}'{{/ContainingProject}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "NetworkModelProjectComponent" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ContainingProject").value; if ("" !== temp) obj["ContainingProject"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ProjectARelationships", "0..*", "1", "NetworkModelProjectRelationship", "ProjectA"],
                            ["ProjectBRelationships", "0..*", "1", "NetworkModelProjectRelationship", "ProjectB"],
                            ["ContainingProject", "1", "0..*", "NetworkModelProject", "ContainedProject"]
                        ]
                    )
                );
            }
        }

        /**
         * Describes the status and the planned implementation of the associated change set into the as-built model.
         *
         * New instances of this class with new identity are instantiated upon changes to the content of this class or changes to the associated change set.  Instances of this class are considered immutable.  The case audit trail can reference this immutable data to exactly reproduce a case.
         *
         */
        class NetworkModelProjectChangeVersion extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.NetworkModelProjectChangeVersion;
                if (null == bucket)
                   cim_data.NetworkModelProjectChangeVersion = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.NetworkModelProjectChangeVersion[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "NetworkModelProjectChangeVersion";
                base.parse_element (/<cim:NetworkModelProjectChangeVersion.effectiveDateTime>([\s\S]*?)<\/cim:NetworkModelProjectChangeVersion.effectiveDateTime>/g, obj, "effectiveDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:NetworkModelProjectChangeVersion.comment>([\s\S]*?)<\/cim:NetworkModelProjectChangeVersion.comment>/g, obj, "comment", base.to_string, sub, context);
                base.parse_element (/<cim:NetworkModelProjectChangeVersion.timeStamp>([\s\S]*?)<\/cim:NetworkModelProjectChangeVersion.timeStamp>/g, obj, "timeStamp", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:NetworkModelProjectChangeVersion.NetworkModelProjectState\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "NetworkModelProjectState", sub, context);
                base.parse_attribute (/<cim:NetworkModelProjectChangeVersion.ChangeSet\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ChangeSet", sub, context);
                base.parse_attribute (/<cim:NetworkModelProjectChangeVersion.NetworkModelProjectChange\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "NetworkModelProjectChange", sub, context);
                base.parse_attribute (/<cim:NetworkModelProjectChangeVersion.Supercedes\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Supercedes", sub, context);
                base.parse_attribute (/<cim:NetworkModelProjectChangeVersion.SupercededBy\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SupercededBy", sub, context);
                let bucket = context.parsed.NetworkModelProjectChangeVersion;
                if (null == bucket)
                   context.parsed.NetworkModelProjectChangeVersion = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "NetworkModelProjectChangeVersion", "effectiveDateTime", "effectiveDateTime",  base.from_datetime, fields);
                base.export_element (obj, "NetworkModelProjectChangeVersion", "comment", "comment",  base.from_string, fields);
                base.export_element (obj, "NetworkModelProjectChangeVersion", "timeStamp", "timeStamp",  base.from_datetime, fields);
                base.export_attribute (obj, "NetworkModelProjectChangeVersion", "NetworkModelProjectState", "NetworkModelProjectState", fields);
                base.export_attribute (obj, "NetworkModelProjectChangeVersion", "ChangeSet", "ChangeSet", fields);
                base.export_attribute (obj, "NetworkModelProjectChangeVersion", "NetworkModelProjectChange", "NetworkModelProjectChange", fields);
                base.export_attribute (obj, "NetworkModelProjectChangeVersion", "Supercedes", "Supercedes", fields);
                base.export_attribute (obj, "NetworkModelProjectChangeVersion", "SupercededBy", "SupercededBy", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#NetworkModelProjectChangeVersion_collapse" aria-expanded="true" aria-controls="NetworkModelProjectChangeVersion_collapse" style="margin-left: 10px;">NetworkModelProjectChangeVersion</a></legend>
                    <div id="NetworkModelProjectChangeVersion_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#effectiveDateTime}}<div><b>effectiveDateTime</b>: {{effectiveDateTime}}</div>{{/effectiveDateTime}}
                    {{#comment}}<div><b>comment</b>: {{comment}}</div>{{/comment}}
                    {{#timeStamp}}<div><b>timeStamp</b>: {{timeStamp}}</div>{{/timeStamp}}
                    {{#NetworkModelProjectState}}<div><b>NetworkModelProjectState</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{NetworkModelProjectState}}");}); return false;'>{{NetworkModelProjectState}}</a></div>{{/NetworkModelProjectState}}
                    {{#ChangeSet}}<div><b>ChangeSet</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ChangeSet}}");}); return false;'>{{ChangeSet}}</a></div>{{/ChangeSet}}
                    {{#NetworkModelProjectChange}}<div><b>NetworkModelProjectChange</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{NetworkModelProjectChange}}");}); return false;'>{{NetworkModelProjectChange}}</a></div>{{/NetworkModelProjectChange}}
                    {{#Supercedes}}<div><b>Supercedes</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Supercedes}}");}); return false;'>{{Supercedes}}</a></div>{{/Supercedes}}
                    {{#SupercededBy}}<div><b>SupercededBy</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{SupercededBy}}");}); return false;'>{{SupercededBy}}</a></div>{{/SupercededBy}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_NetworkModelProjectChangeVersion_collapse" aria-expanded="true" aria-controls="{{id}}_NetworkModelProjectChangeVersion_collapse" style="margin-left: 10px;">NetworkModelProjectChangeVersion</a></legend>
                    <div id="{{id}}_NetworkModelProjectChangeVersion_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_effectiveDateTime'>effectiveDateTime: </label><div class='col-sm-8'><input id='{{id}}_effectiveDateTime' class='form-control' type='text'{{#effectiveDateTime}} value='{{effectiveDateTime}}'{{/effectiveDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_comment'>comment: </label><div class='col-sm-8'><input id='{{id}}_comment' class='form-control' type='text'{{#comment}} value='{{comment}}'{{/comment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_timeStamp'>timeStamp: </label><div class='col-sm-8'><input id='{{id}}_timeStamp' class='form-control' type='text'{{#timeStamp}} value='{{timeStamp}}'{{/timeStamp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_NetworkModelProjectState'>NetworkModelProjectState: </label><div class='col-sm-8'><input id='{{id}}_NetworkModelProjectState' class='form-control' type='text'{{#NetworkModelProjectState}} value='{{NetworkModelProjectState}}'{{/NetworkModelProjectState}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ChangeSet'>ChangeSet: </label><div class='col-sm-8'><input id='{{id}}_ChangeSet' class='form-control' type='text'{{#ChangeSet}} value='{{ChangeSet}}'{{/ChangeSet}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_NetworkModelProjectChange'>NetworkModelProjectChange: </label><div class='col-sm-8'><input id='{{id}}_NetworkModelProjectChange' class='form-control' type='text'{{#NetworkModelProjectChange}} value='{{NetworkModelProjectChange}}'{{/NetworkModelProjectChange}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Supercedes'>Supercedes: </label><div class='col-sm-8'><input id='{{id}}_Supercedes' class='form-control' type='text'{{#Supercedes}} value='{{Supercedes}}'{{/Supercedes}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SupercededBy'>SupercededBy: </label><div class='col-sm-8'><input id='{{id}}_SupercededBy' class='form-control' type='text'{{#SupercededBy}} value='{{SupercededBy}}'{{/SupercededBy}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "NetworkModelProjectChangeVersion" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_effectiveDateTime").value; if ("" !== temp) obj["effectiveDateTime"] = temp;
                temp = document.getElementById (id + "_comment").value; if ("" !== temp) obj["comment"] = temp;
                temp = document.getElementById (id + "_timeStamp").value; if ("" !== temp) obj["timeStamp"] = temp;
                temp = document.getElementById (id + "_NetworkModelProjectState").value; if ("" !== temp) obj["NetworkModelProjectState"] = temp;
                temp = document.getElementById (id + "_ChangeSet").value; if ("" !== temp) obj["ChangeSet"] = temp;
                temp = document.getElementById (id + "_NetworkModelProjectChange").value; if ("" !== temp) obj["NetworkModelProjectChange"] = temp;
                temp = document.getElementById (id + "_Supercedes").value; if ("" !== temp) obj["Supercedes"] = temp;
                temp = document.getElementById (id + "_SupercededBy").value; if ("" !== temp) obj["SupercededBy"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["NetworkModelProjectState", "0..1", "0..*", "NetworkModelProjectState", "NetworkModelProjectChangeVersion"],
                            ["ChangeSet", "0..1", "0..*", "ChangeSet", "NetworkModelProjectChangeVersion"],
                            ["NetworkModelProjectChange", "1", "1..*", "NetworkModelProjectChange", "NetworkModelProjectChangeVersion"],
                            ["Supercedes", "0..1", "0..1", "NetworkModelProjectChangeVersion", "SupercededBy"],
                            ["SupercededBy", "0..1", "0..1", "NetworkModelProjectChangeVersion", "Supercedes"]
                        ]
                    )
                );
            }
        }

        class NetworkModelProjectComponent2 extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.NetworkModelProjectComponent2;
                if (null == bucket)
                   cim_data.NetworkModelProjectComponent2 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.NetworkModelProjectComponent2[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "NetworkModelProjectComponent2";
                base.parse_element (/<cim:NetworkModelProjectComponent2.version>([\s\S]*?)<\/cim:NetworkModelProjectComponent2.version>/g, obj, "version", base.to_string, sub, context);
                base.parse_element (/<cim:NetworkModelProjectComponent2.created>([\s\S]*?)<\/cim:NetworkModelProjectComponent2.created>/g, obj, "created", base.to_datetime, sub, context);
                base.parse_element (/<cim:NetworkModelProjectComponent2.closed>([\s\S]*?)<\/cim:NetworkModelProjectComponent2.closed>/g, obj, "closed", base.to_datetime, sub, context);
                base.parse_element (/<cim:NetworkModelProjectComponent2.updated>([\s\S]*?)<\/cim:NetworkModelProjectComponent2.updated>/g, obj, "updated", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:NetworkModelProjectComponent2.Parent\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Parent", sub, context);
                let bucket = context.parsed.NetworkModelProjectComponent2;
                if (null == bucket)
                   context.parsed.NetworkModelProjectComponent2 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "NetworkModelProjectComponent2", "version", "version",  base.from_string, fields);
                base.export_element (obj, "NetworkModelProjectComponent2", "created", "created",  base.from_datetime, fields);
                base.export_element (obj, "NetworkModelProjectComponent2", "closed", "closed",  base.from_datetime, fields);
                base.export_element (obj, "NetworkModelProjectComponent2", "updated", "updated",  base.from_datetime, fields);
                base.export_attribute (obj, "NetworkModelProjectComponent2", "Parent", "Parent", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#NetworkModelProjectComponent2_collapse" aria-expanded="true" aria-controls="NetworkModelProjectComponent2_collapse" style="margin-left: 10px;">NetworkModelProjectComponent2</a></legend>
                    <div id="NetworkModelProjectComponent2_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#version}}<div><b>version</b>: {{version}}</div>{{/version}}
                    {{#created}}<div><b>created</b>: {{created}}</div>{{/created}}
                    {{#closed}}<div><b>closed</b>: {{closed}}</div>{{/closed}}
                    {{#updated}}<div><b>updated</b>: {{updated}}</div>{{/updated}}
                    {{#Parent}}<div><b>Parent</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Parent}}");}); return false;'>{{Parent}}</a></div>{{/Parent}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_NetworkModelProjectComponent2_collapse" aria-expanded="true" aria-controls="{{id}}_NetworkModelProjectComponent2_collapse" style="margin-left: 10px;">NetworkModelProjectComponent2</a></legend>
                    <div id="{{id}}_NetworkModelProjectComponent2_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_version'>version: </label><div class='col-sm-8'><input id='{{id}}_version' class='form-control' type='text'{{#version}} value='{{version}}'{{/version}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_created'>created: </label><div class='col-sm-8'><input id='{{id}}_created' class='form-control' type='text'{{#created}} value='{{created}}'{{/created}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_closed'>closed: </label><div class='col-sm-8'><input id='{{id}}_closed' class='form-control' type='text'{{#closed}} value='{{closed}}'{{/closed}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_updated'>updated: </label><div class='col-sm-8'><input id='{{id}}_updated' class='form-control' type='text'{{#updated}} value='{{updated}}'{{/updated}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Parent'>Parent: </label><div class='col-sm-8'><input id='{{id}}_Parent' class='form-control' type='text'{{#Parent}} value='{{Parent}}'{{/Parent}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "NetworkModelProjectComponent2" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_version").value; if ("" !== temp) obj["version"] = temp;
                temp = document.getElementById (id + "_created").value; if ("" !== temp) obj["created"] = temp;
                temp = document.getElementById (id + "_closed").value; if ("" !== temp) obj["closed"] = temp;
                temp = document.getElementById (id + "_updated").value; if ("" !== temp) obj["updated"] = temp;
                temp = document.getElementById (id + "_Parent").value; if ("" !== temp) obj["Parent"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Parent", "0..1", "0..*", "NetworkModelProject2", "Child"]
                        ]
                    )
                );
            }
        }

        /**
         * A set of statements describing the changes in the network model.
         *
         * The statement is defined in the incremental model.
         *
         */
        class DifferentialModel extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DifferentialModel;
                if (null == bucket)
                   cim_data.DifferentialModel = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DifferentialModel[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DifferentialModel";
                let bucket = context.parsed.DifferentialModel;
                if (null == bucket)
                   context.parsed.DifferentialModel = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DifferentialModel_collapse" aria-expanded="true" aria-controls="DifferentialModel_collapse" style="margin-left: 10px;">DifferentialModel</a></legend>
                    <div id="DifferentialModel_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DifferentialModel_collapse" aria-expanded="true" aria-controls="{{id}}_DifferentialModel_collapse" style="margin-left: 10px;">DifferentialModel</a></legend>
                    <div id="{{id}}_DifferentialModel_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "DifferentialModel" };
                super.submit (id, obj);

                return (obj);
            }
        }

        class NetworkModelProjectDocument extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.NetworkModelProjectDocument;
                if (null == bucket)
                   cim_data.NetworkModelProjectDocument = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.NetworkModelProjectDocument[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "NetworkModelProjectDocument";
                let bucket = context.parsed.NetworkModelProjectDocument;
                if (null == bucket)
                   context.parsed.NetworkModelProjectDocument = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#NetworkModelProjectDocument_collapse" aria-expanded="true" aria-controls="NetworkModelProjectDocument_collapse" style="margin-left: 10px;">NetworkModelProjectDocument</a></legend>
                    <div id="NetworkModelProjectDocument_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_NetworkModelProjectDocument_collapse" aria-expanded="true" aria-controls="{{id}}_NetworkModelProjectDocument_collapse" style="margin-left: 10px;">NetworkModelProjectDocument</a></legend>
                    <div id="{{id}}_NetworkModelProjectDocument_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "NetworkModelProjectDocument" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * A relationship that assists humans and software building cases by assembling project changes in the correct sequence.
         *
         * This class may be specialized to create specific types of relationships.
         *
         */
        class NetworkModelProjectRelationship extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.NetworkModelProjectRelationship;
                if (null == bucket)
                   cim_data.NetworkModelProjectRelationship = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.NetworkModelProjectRelationship[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "NetworkModelProjectRelationship";
                base.parse_attribute (/<cim:NetworkModelProjectRelationship.ProjectA\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ProjectA", sub, context);
                base.parse_attribute (/<cim:NetworkModelProjectRelationship.ProjectB\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ProjectB", sub, context);
                let bucket = context.parsed.NetworkModelProjectRelationship;
                if (null == bucket)
                   context.parsed.NetworkModelProjectRelationship = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "NetworkModelProjectRelationship", "ProjectA", "ProjectA", fields);
                base.export_attribute (obj, "NetworkModelProjectRelationship", "ProjectB", "ProjectB", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#NetworkModelProjectRelationship_collapse" aria-expanded="true" aria-controls="NetworkModelProjectRelationship_collapse" style="margin-left: 10px;">NetworkModelProjectRelationship</a></legend>
                    <div id="NetworkModelProjectRelationship_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#ProjectA}}<div><b>ProjectA</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ProjectA}}");}); return false;'>{{ProjectA}}</a></div>{{/ProjectA}}
                    {{#ProjectB}}<div><b>ProjectB</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ProjectB}}");}); return false;'>{{ProjectB}}</a></div>{{/ProjectB}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_NetworkModelProjectRelationship_collapse" aria-expanded="true" aria-controls="{{id}}_NetworkModelProjectRelationship_collapse" style="margin-left: 10px;">NetworkModelProjectRelationship</a></legend>
                    <div id="{{id}}_NetworkModelProjectRelationship_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ProjectA'>ProjectA: </label><div class='col-sm-8'><input id='{{id}}_ProjectA' class='form-control' type='text'{{#ProjectA}} value='{{ProjectA}}'{{/ProjectA}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ProjectB'>ProjectB: </label><div class='col-sm-8'><input id='{{id}}_ProjectB' class='form-control' type='text'{{#ProjectB}} value='{{ProjectB}}'{{/ProjectB}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "NetworkModelProjectRelationship" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ProjectA").value; if ("" !== temp) obj["ProjectA"] = temp;
                temp = document.getElementById (id + "_ProjectB").value; if ("" !== temp) obj["ProjectB"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ProjectA", "1", "0..*", "NetworkModelProjectComponent", "ProjectARelationships"],
                            ["ProjectB", "1", "0..*", "NetworkModelProjectComponent", "ProjectBRelationships"]
                        ]
                    )
                );
            }
        }

        class AnnotatedProjectDependency extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AnnotatedProjectDependency;
                if (null == bucket)
                   cim_data.AnnotatedProjectDependency = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AnnotatedProjectDependency[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "AnnotatedProjectDependency";
                base.parse_attribute (/<cim:AnnotatedProjectDependency.dependencyType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "dependencyType", sub, context);
                base.parse_attribute (/<cim:AnnotatedProjectDependency.DependentOnStage\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DependentOnStage", sub, context);
                base.parse_attribute (/<cim:AnnotatedProjectDependency.DependingStage\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DependingStage", sub, context);
                let bucket = context.parsed.AnnotatedProjectDependency;
                if (null == bucket)
                   context.parsed.AnnotatedProjectDependency = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "AnnotatedProjectDependency", "dependencyType", "dependencyType", fields);
                base.export_attribute (obj, "AnnotatedProjectDependency", "DependentOnStage", "DependentOnStage", fields);
                base.export_attribute (obj, "AnnotatedProjectDependency", "DependingStage", "DependingStage", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AnnotatedProjectDependency_collapse" aria-expanded="true" aria-controls="AnnotatedProjectDependency_collapse" style="margin-left: 10px;">AnnotatedProjectDependency</a></legend>
                    <div id="AnnotatedProjectDependency_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#dependencyType}}<div><b>dependencyType</b>: {{dependencyType}}</div>{{/dependencyType}}
                    {{#DependentOnStage}}<div><b>DependentOnStage</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{DependentOnStage}}");}); return false;'>{{DependentOnStage}}</a></div>{{/DependentOnStage}}
                    {{#DependingStage}}<div><b>DependingStage</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{DependingStage}}");}); return false;'>{{DependingStage}}</a></div>{{/DependingStage}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["dependencyTypeDependencyKind"] = [{ id: '', selected: (!obj["dependencyType"])}]; for (let property in DependencyKind) obj["dependencyTypeDependencyKind"].push ({ id: property, selected: obj["dependencyType"] && obj["dependencyType"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["dependencyTypeDependencyKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AnnotatedProjectDependency_collapse" aria-expanded="true" aria-controls="{{id}}_AnnotatedProjectDependency_collapse" style="margin-left: 10px;">AnnotatedProjectDependency</a></legend>
                    <div id="{{id}}_AnnotatedProjectDependency_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dependencyType'>dependencyType: </label><div class='col-sm-8'><select id='{{id}}_dependencyType' class='form-control custom-select'>{{#dependencyTypeDependencyKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/dependencyTypeDependencyKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DependentOnStage'>DependentOnStage: </label><div class='col-sm-8'><input id='{{id}}_DependentOnStage' class='form-control' type='text'{{#DependentOnStage}} value='{{DependentOnStage}}'{{/DependentOnStage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DependingStage'>DependingStage: </label><div class='col-sm-8'><input id='{{id}}_DependingStage' class='form-control' type='text'{{#DependingStage}} value='{{DependingStage}}'{{/DependingStage}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AnnotatedProjectDependency" };
                super.submit (id, obj);
                temp = DependencyKind[document.getElementById (id + "_dependencyType").value]; if (temp) obj["dependencyType"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#DependencyKind." + temp; else delete obj["dependencyType"];
                temp = document.getElementById (id + "_DependentOnStage").value; if ("" !== temp) obj["DependentOnStage"] = temp;
                temp = document.getElementById (id + "_DependingStage").value; if ("" !== temp) obj["DependingStage"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["DependentOnStage", "1", "0..1", "NetworkModelProjectStage", "DependencyDependentOnStage"],
                            ["DependingStage", "1", "0..*", "NetworkModelProjectStage", "DenpendecyDependingStage"]
                        ]
                    )
                );
            }
        }

        class CurrentState extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.CurrentState;
                if (null == bucket)
                   cim_data.CurrentState = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CurrentState[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CurrentState";
                let bucket = context.parsed.CurrentState;
                if (null == bucket)
                   context.parsed.CurrentState = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CurrentState_collapse" aria-expanded="true" aria-controls="CurrentState_collapse" style="margin-left: 10px;">CurrentState</a></legend>
                    <div id="CurrentState_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CurrentState_collapse" aria-expanded="true" aria-controls="{{id}}_CurrentState_collapse" style="margin-left: 10px;">CurrentState</a></legend>
                    <div id="{{id}}_CurrentState_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "CurrentState" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * Network model project change described by versions of an associated change set.
         *
         * Has persistent identity over multiple versions of the associated change set.
         *
         */
        class NetworkModelProjectChange extends NetworkModelProjectComponent
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.NetworkModelProjectChange;
                if (null == bucket)
                   cim_data.NetworkModelProjectChange = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.NetworkModelProjectChange[obj.id];
            }

            parse (context, sub)
            {
                let obj = NetworkModelProjectComponent.prototype.parse.call (this, context, sub);
                obj.cls = "NetworkModelProjectChange";
                base.parse_attributes (/<cim:NetworkModelProjectChange.NetworkModelProjectChangeVersion\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "NetworkModelProjectChangeVersion", sub, context);
                let bucket = context.parsed.NetworkModelProjectChange;
                if (null == bucket)
                   context.parsed.NetworkModelProjectChange = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = NetworkModelProjectComponent.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "NetworkModelProjectChange", "NetworkModelProjectChangeVersion", "NetworkModelProjectChangeVersion", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#NetworkModelProjectChange_collapse" aria-expanded="true" aria-controls="NetworkModelProjectChange_collapse" style="margin-left: 10px;">NetworkModelProjectChange</a></legend>
                    <div id="NetworkModelProjectChange_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + NetworkModelProjectComponent.prototype.template.call (this) +
                    `
                    {{#NetworkModelProjectChangeVersion}}<div><b>NetworkModelProjectChangeVersion</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/NetworkModelProjectChangeVersion}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["NetworkModelProjectChangeVersion"]) obj["NetworkModelProjectChangeVersion_string"] = obj["NetworkModelProjectChangeVersion"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["NetworkModelProjectChangeVersion_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_NetworkModelProjectChange_collapse" aria-expanded="true" aria-controls="{{id}}_NetworkModelProjectChange_collapse" style="margin-left: 10px;">NetworkModelProjectChange</a></legend>
                    <div id="{{id}}_NetworkModelProjectChange_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + NetworkModelProjectComponent.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "NetworkModelProjectChange" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["NetworkModelProjectChangeVersion", "1..*", "1", "NetworkModelProjectChangeVersion", "NetworkModelProjectChange"]
                        ]
                    )
                );
            }
        }

        /**
         * A grouping of network model change descriptions.
         *
         * Primarily used to organize the phases of an overall project.
         *
         */
        class NetworkModelProject extends NetworkModelProjectComponent
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.NetworkModelProject;
                if (null == bucket)
                   cim_data.NetworkModelProject = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.NetworkModelProject[obj.id];
            }

            parse (context, sub)
            {
                let obj = NetworkModelProjectComponent.prototype.parse.call (this, context, sub);
                obj.cls = "NetworkModelProject";
                base.parse_attributes (/<cim:NetworkModelProject.ContainedProject\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ContainedProject", sub, context);
                let bucket = context.parsed.NetworkModelProject;
                if (null == bucket)
                   context.parsed.NetworkModelProject = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = NetworkModelProjectComponent.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "NetworkModelProject", "ContainedProject", "ContainedProject", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#NetworkModelProject_collapse" aria-expanded="true" aria-controls="NetworkModelProject_collapse" style="margin-left: 10px;">NetworkModelProject</a></legend>
                    <div id="NetworkModelProject_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + NetworkModelProjectComponent.prototype.template.call (this) +
                    `
                    {{#ContainedProject}}<div><b>ContainedProject</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ContainedProject}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ContainedProject"]) obj["ContainedProject_string"] = obj["ContainedProject"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ContainedProject_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_NetworkModelProject_collapse" aria-expanded="true" aria-controls="{{id}}_NetworkModelProject_collapse" style="margin-left: 10px;">NetworkModelProject</a></legend>
                    <div id="{{id}}_NetworkModelProject_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + NetworkModelProjectComponent.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "NetworkModelProject" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ContainedProject", "0..*", "1", "NetworkModelProjectComponent", "ContainingProject"]
                        ]
                    )
                );
            }
        }

        class NetworkModelProjectStage extends NetworkModelProjectComponent2
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.NetworkModelProjectStage;
                if (null == bucket)
                   cim_data.NetworkModelProjectStage = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.NetworkModelProjectStage[obj.id];
            }

            parse (context, sub)
            {
                let obj = NetworkModelProjectComponent2.prototype.parse.call (this, context, sub);
                obj.cls = "NetworkModelProjectStage";
                base.parse_element (/<cim:NetworkModelProjectStage.changesetVersion>([\s\S]*?)<\/cim:NetworkModelProjectStage.changesetVersion>/g, obj, "changesetVersion", base.to_string, sub, context);
                base.parse_element (/<cim:NetworkModelProjectStage.plannedCommissionedDate>([\s\S]*?)<\/cim:NetworkModelProjectStage.plannedCommissionedDate>/g, obj, "plannedCommissionedDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:NetworkModelProjectStage.commissionedDate>([\s\S]*?)<\/cim:NetworkModelProjectStage.commissionedDate>/g, obj, "commissionedDate", base.to_datetime, sub, context);
                base.parse_attributes (/<cim:NetworkModelProjectStage.ChangeSets\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ChangeSets", sub, context);
                base.parse_attribute (/<cim:NetworkModelProjectStage.DependencyDependentOnStage\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DependencyDependentOnStage", sub, context);
                base.parse_attributes (/<cim:NetworkModelProjectStage.DenpendecyDependingStage\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DenpendecyDependingStage", sub, context);
                let bucket = context.parsed.NetworkModelProjectStage;
                if (null == bucket)
                   context.parsed.NetworkModelProjectStage = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = NetworkModelProjectComponent2.prototype.export.call (this, obj, false);

                base.export_element (obj, "NetworkModelProjectStage", "changesetVersion", "changesetVersion",  base.from_string, fields);
                base.export_element (obj, "NetworkModelProjectStage", "plannedCommissionedDate", "plannedCommissionedDate",  base.from_datetime, fields);
                base.export_element (obj, "NetworkModelProjectStage", "commissionedDate", "commissionedDate",  base.from_datetime, fields);
                base.export_attributes (obj, "NetworkModelProjectStage", "ChangeSets", "ChangeSets", fields);
                base.export_attribute (obj, "NetworkModelProjectStage", "DependencyDependentOnStage", "DependencyDependentOnStage", fields);
                base.export_attributes (obj, "NetworkModelProjectStage", "DenpendecyDependingStage", "DenpendecyDependingStage", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#NetworkModelProjectStage_collapse" aria-expanded="true" aria-controls="NetworkModelProjectStage_collapse" style="margin-left: 10px;">NetworkModelProjectStage</a></legend>
                    <div id="NetworkModelProjectStage_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + NetworkModelProjectComponent2.prototype.template.call (this) +
                    `
                    {{#changesetVersion}}<div><b>changesetVersion</b>: {{changesetVersion}}</div>{{/changesetVersion}}
                    {{#plannedCommissionedDate}}<div><b>plannedCommissionedDate</b>: {{plannedCommissionedDate}}</div>{{/plannedCommissionedDate}}
                    {{#commissionedDate}}<div><b>commissionedDate</b>: {{commissionedDate}}</div>{{/commissionedDate}}
                    {{#ChangeSets}}<div><b>ChangeSets</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ChangeSets}}
                    {{#DependencyDependentOnStage}}<div><b>DependencyDependentOnStage</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{DependencyDependentOnStage}}");}); return false;'>{{DependencyDependentOnStage}}</a></div>{{/DependencyDependentOnStage}}
                    {{#DenpendecyDependingStage}}<div><b>DenpendecyDependingStage</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/DenpendecyDependingStage}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ChangeSets"]) obj["ChangeSets_string"] = obj["ChangeSets"].join ();
                if (obj["DenpendecyDependingStage"]) obj["DenpendecyDependingStage_string"] = obj["DenpendecyDependingStage"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ChangeSets_string"];
                delete obj["DenpendecyDependingStage_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_NetworkModelProjectStage_collapse" aria-expanded="true" aria-controls="{{id}}_NetworkModelProjectStage_collapse" style="margin-left: 10px;">NetworkModelProjectStage</a></legend>
                    <div id="{{id}}_NetworkModelProjectStage_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + NetworkModelProjectComponent2.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_changesetVersion'>changesetVersion: </label><div class='col-sm-8'><input id='{{id}}_changesetVersion' class='form-control' type='text'{{#changesetVersion}} value='{{changesetVersion}}'{{/changesetVersion}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_plannedCommissionedDate'>plannedCommissionedDate: </label><div class='col-sm-8'><input id='{{id}}_plannedCommissionedDate' class='form-control' type='text'{{#plannedCommissionedDate}} value='{{plannedCommissionedDate}}'{{/plannedCommissionedDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_commissionedDate'>commissionedDate: </label><div class='col-sm-8'><input id='{{id}}_commissionedDate' class='form-control' type='text'{{#commissionedDate}} value='{{commissionedDate}}'{{/commissionedDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DependencyDependentOnStage'>DependencyDependentOnStage: </label><div class='col-sm-8'><input id='{{id}}_DependencyDependentOnStage' class='form-control' type='text'{{#DependencyDependentOnStage}} value='{{DependencyDependentOnStage}}'{{/DependencyDependentOnStage}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "NetworkModelProjectStage" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_changesetVersion").value; if ("" !== temp) obj["changesetVersion"] = temp;
                temp = document.getElementById (id + "_plannedCommissionedDate").value; if ("" !== temp) obj["plannedCommissionedDate"] = temp;
                temp = document.getElementById (id + "_commissionedDate").value; if ("" !== temp) obj["commissionedDate"] = temp;
                temp = document.getElementById (id + "_DependencyDependentOnStage").value; if ("" !== temp) obj["DependencyDependentOnStage"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ChangeSets", "1..*", "0..1", "ChangeSet", "NMProjectStage"],
                            ["DependencyDependentOnStage", "0..1", "1", "AnnotatedProjectDependency", "DependentOnStage"],
                            ["DenpendecyDependingStage", "0..*", "1", "AnnotatedProjectDependency", "DependingStage"]
                        ]
                    )
                );
            }
        }

        class NetworkModelProject2 extends NetworkModelProjectComponent2
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.NetworkModelProject2;
                if (null == bucket)
                   cim_data.NetworkModelProject2 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.NetworkModelProject2[obj.id];
            }

            parse (context, sub)
            {
                let obj = NetworkModelProjectComponent2.prototype.parse.call (this, context, sub);
                obj.cls = "NetworkModelProject2";
                base.parse_attributes (/<cim:NetworkModelProject2.Child\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Child", sub, context);
                let bucket = context.parsed.NetworkModelProject2;
                if (null == bucket)
                   context.parsed.NetworkModelProject2 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = NetworkModelProjectComponent2.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "NetworkModelProject2", "Child", "Child", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#NetworkModelProject2_collapse" aria-expanded="true" aria-controls="NetworkModelProject2_collapse" style="margin-left: 10px;">NetworkModelProject2</a></legend>
                    <div id="NetworkModelProject2_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + NetworkModelProjectComponent2.prototype.template.call (this) +
                    `
                    {{#Child}}<div><b>Child</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Child}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Child"]) obj["Child_string"] = obj["Child"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Child_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_NetworkModelProject2_collapse" aria-expanded="true" aria-controls="{{id}}_NetworkModelProject2_collapse" style="margin-left: 10px;">NetworkModelProject2</a></legend>
                    <div id="{{id}}_NetworkModelProject2_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + NetworkModelProjectComponent2.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "NetworkModelProject2" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Child", "0..*", "0..1", "NetworkModelProjectComponent2", "Parent"]
                        ]
                    )
                );
            }
        }

        /**
         * Project B is an alternative to project A.
         *
         * Project A is the primary alternative.
         * Multiple project alternatives should not be selected into a single network study case.
         *
         */
        class ProjectAlternative extends NetworkModelProjectRelationship
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ProjectAlternative;
                if (null == bucket)
                   cim_data.ProjectAlternative = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ProjectAlternative[obj.id];
            }

            parse (context, sub)
            {
                let obj = NetworkModelProjectRelationship.prototype.parse.call (this, context, sub);
                obj.cls = "ProjectAlternative";
                let bucket = context.parsed.ProjectAlternative;
                if (null == bucket)
                   context.parsed.ProjectAlternative = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = NetworkModelProjectRelationship.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ProjectAlternative_collapse" aria-expanded="true" aria-controls="ProjectAlternative_collapse" style="margin-left: 10px;">ProjectAlternative</a></legend>
                    <div id="ProjectAlternative_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + NetworkModelProjectRelationship.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ProjectAlternative_collapse" aria-expanded="true" aria-controls="{{id}}_ProjectAlternative_collapse" style="margin-left: 10px;">ProjectAlternative</a></legend>
                    <div id="{{id}}_ProjectAlternative_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + NetworkModelProjectRelationship.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "ProjectAlternative" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * Project A change sets should be applied before Project B during case creation.
         *
         */
        class ProjectDependency extends NetworkModelProjectRelationship
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ProjectDependency;
                if (null == bucket)
                   cim_data.ProjectDependency = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ProjectDependency[obj.id];
            }

            parse (context, sub)
            {
                let obj = NetworkModelProjectRelationship.prototype.parse.call (this, context, sub);
                obj.cls = "ProjectDependency";
                let bucket = context.parsed.ProjectDependency;
                if (null == bucket)
                   context.parsed.ProjectDependency = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = NetworkModelProjectRelationship.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ProjectDependency_collapse" aria-expanded="true" aria-controls="ProjectDependency_collapse" style="margin-left: 10px;">ProjectDependency</a></legend>
                    <div id="ProjectDependency_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + NetworkModelProjectRelationship.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ProjectDependency_collapse" aria-expanded="true" aria-controls="{{id}}_ProjectDependency_collapse" style="margin-left: 10px;">ProjectDependency</a></legend>
                    <div id="{{id}}_ProjectDependency_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + NetworkModelProjectRelationship.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "ProjectDependency" };
                super.submit (id, obj);

                return (obj);
            }
        }

        return (
            {
                ProjectDependency: ProjectDependency,
                DifferentialModel: DifferentialModel,
                NetworkModelProjectComponent2: NetworkModelProjectComponent2,
                NetworkModelProjectComponent: NetworkModelProjectComponent,
                PowerSystemProjectLifecycleToBeDeleted: PowerSystemProjectLifecycleToBeDeleted,
                NetworkModelProject: NetworkModelProject,
                CurrentState: CurrentState,
                AnnotatedProjectDependency: AnnotatedProjectDependency,
                NetworkModelProjectStage: NetworkModelProjectStage,
                NetworkModelProject2: NetworkModelProject2,
                DependencyKind: DependencyKind,
                NetworkModelProjectDocument: NetworkModelProjectDocument,
                NetworkModelProjectChangeVersion: NetworkModelProjectChangeVersion,
                NetworkModelProjectCollection: NetworkModelProjectCollection,
                ProjectStatusKind: ProjectStatusKind,
                NetworkModelProjectChange: NetworkModelProjectChange,
                NetworkModelProjectRelationship: NetworkModelProjectRelationship,
                ProjectAlternative: ProjectAlternative,
                NetworkModelProjectState: NetworkModelProjectState
            }
        );
    }
);