define
(
    ["model/base", "model/Core"],
    /**
     * Contingencies to be studied.
     *
     */
    function (base, Core)
    {

        /**
         * Indicates the state which the contingency equipment is to be in when the contingency is applied.
         *
         */
        var ContingencyEquipmentStatusKind =
        {
            inService: "inService",
            outOfService: "outOfService"
        };
        Object.freeze (ContingencyEquipmentStatusKind);

        /**
         * An event threatening system reliability, consisting of one or more contingency elements.
         *
         */
        class Contingency extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Contingency;
                if (null == bucket)
                   cim_data.Contingency = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Contingency[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Contingency";
                base.parse_element (/<cim:Contingency.mustStudy>([\s\S]*?)<\/cim:Contingency.mustStudy>/g, obj, "mustStudy", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:Contingency.ContingencyElement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ContingencyElement", sub, context);
                var bucket = context.parsed.Contingency;
                if (null == bucket)
                   context.parsed.Contingency = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Contingency", "mustStudy", "mustStudy",  base.from_boolean, fields);
                base.export_attributes (obj, "Contingency", "ContingencyElement", "ContingencyElement", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Contingency_collapse" aria-expanded="true" aria-controls="Contingency_collapse" style="margin-left: 10px;">Contingency</a></legend>
                    <div id="Contingency_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#mustStudy}}<div><b>mustStudy</b>: {{mustStudy}}</div>{{/mustStudy}}
                    {{#ContingencyElement}}<div><b>ContingencyElement</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ContingencyElement}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ContingencyElement) obj.ContingencyElement_string = obj.ContingencyElement.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ContingencyElement_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Contingency_collapse" aria-expanded="true" aria-controls="{{id}}_Contingency_collapse" style="margin-left: 10px;">Contingency</a></legend>
                    <div id="{{id}}_Contingency_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_mustStudy'>mustStudy: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_mustStudy' class='form-check-input' type='checkbox'{{#mustStudy}} checked{{/mustStudy}}></div></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Contingency" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_mustStudy").checked; if (temp) obj.mustStudy = true;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ContingencyElement", "0..*", "1", "ContingencyElement", "Contingency"]
                        ]
                    )
                );
            }
        }

        /**
         * An element of a system event to be studied by contingency analysis, representing a change in status of a single piece of equipment.
         *
         */
        class ContingencyElement extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ContingencyElement;
                if (null == bucket)
                   cim_data.ContingencyElement = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ContingencyElement[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ContingencyElement";
                base.parse_attribute (/<cim:ContingencyElement.Contingency\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Contingency", sub, context);
                var bucket = context.parsed.ContingencyElement;
                if (null == bucket)
                   context.parsed.ContingencyElement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ContingencyElement", "Contingency", "Contingency", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ContingencyElement_collapse" aria-expanded="true" aria-controls="ContingencyElement_collapse" style="margin-left: 10px;">ContingencyElement</a></legend>
                    <div id="ContingencyElement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#Contingency}}<div><b>Contingency</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Contingency}}&quot;);}); return false;'>{{Contingency}}</a></div>{{/Contingency}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ContingencyElement_collapse" aria-expanded="true" aria-controls="{{id}}_ContingencyElement_collapse" style="margin-left: 10px;">ContingencyElement</a></legend>
                    <div id="{{id}}_ContingencyElement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Contingency'>Contingency: </label><div class='col-sm-8'><input id='{{id}}_Contingency' class='form-control' type='text'{{#Contingency}} value='{{Contingency}}'{{/Contingency}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ContingencyElement" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Contingency").value; if ("" != temp) obj.Contingency = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Contingency", "1", "0..*", "Contingency", "ContingencyElement"]
                        ]
                    )
                );
            }
        }

        /**
         * A equipment to which the in service status is to change such as a power transformer or AC line segment.
         *
         */
        class ContingencyEquipment extends ContingencyElement
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ContingencyEquipment;
                if (null == bucket)
                   cim_data.ContingencyEquipment = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ContingencyEquipment[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ContingencyElement.prototype.parse.call (this, context, sub);
                obj.cls = "ContingencyEquipment";
                base.parse_attribute (/<cim:ContingencyEquipment.contingentStatus\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "contingentStatus", sub, context);
                base.parse_attribute (/<cim:ContingencyEquipment.Equipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Equipment", sub, context);
                var bucket = context.parsed.ContingencyEquipment;
                if (null == bucket)
                   context.parsed.ContingencyEquipment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ContingencyElement.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ContingencyEquipment", "contingentStatus", "contingentStatus", fields);
                base.export_attribute (obj, "ContingencyEquipment", "Equipment", "Equipment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ContingencyEquipment_collapse" aria-expanded="true" aria-controls="ContingencyEquipment_collapse" style="margin-left: 10px;">ContingencyEquipment</a></legend>
                    <div id="ContingencyEquipment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ContingencyElement.prototype.template.call (this) +
                    `
                    {{#contingentStatus}}<div><b>contingentStatus</b>: {{contingentStatus}}</div>{{/contingentStatus}}
                    {{#Equipment}}<div><b>Equipment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Equipment}}&quot;);}); return false;'>{{Equipment}}</a></div>{{/Equipment}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.contingentStatusContingencyEquipmentStatusKind = [{ id: '', selected: (!obj.contingentStatus)}]; for (var property in ContingencyEquipmentStatusKind) obj.contingentStatusContingencyEquipmentStatusKind.push ({ id: property, selected: obj.contingentStatus && obj.contingentStatus.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.contingentStatusContingencyEquipmentStatusKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ContingencyEquipment_collapse" aria-expanded="true" aria-controls="{{id}}_ContingencyEquipment_collapse" style="margin-left: 10px;">ContingencyEquipment</a></legend>
                    <div id="{{id}}_ContingencyEquipment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ContingencyElement.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_contingentStatus'>contingentStatus: </label><div class='col-sm-8'><select id='{{id}}_contingentStatus' class='form-control custom-select'>{{#contingentStatusContingencyEquipmentStatusKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/contingentStatusContingencyEquipmentStatusKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Equipment'>Equipment: </label><div class='col-sm-8'><input id='{{id}}_Equipment' class='form-control' type='text'{{#Equipment}} value='{{Equipment}}'{{/Equipment}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ContingencyEquipment" };
                super.submit (id, obj);
                temp = ContingencyEquipmentStatusKind[document.getElementById (id + "_contingentStatus").value]; if (temp) obj.contingentStatus = "http://iec.ch/TC57/2013/CIM-schema-cim16#ContingencyEquipmentStatusKind." + temp; else delete obj.contingentStatus;
                temp = document.getElementById (id + "_Equipment").value; if ("" != temp) obj.Equipment = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Equipment", "1", "0..*", "Equipment", "ContingencyEquipment"]
                        ]
                    )
                );
            }
        }

        return (
            {
                Contingency: Contingency,
                ContingencyEquipment: ContingencyEquipment,
                ContingencyEquipmentStatusKind: ContingencyEquipmentStatusKind,
                ContingencyElement: ContingencyElement
            }
        );
    }
);