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
                this._id = template.id;
                var bucket = cim_data.Contingency;
                if (null == bucket)
                   cim_data.Contingency = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Contingency[this._id];
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

                base.export_element (obj, "Contingency", "mustStudy", base.from_boolean, fields);
                base.export_attribute (obj, "export_attributes", "Contingency", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Contingency_collapse" aria-expanded="true" aria-controls="Contingency_collapse" style="margin-left: 10px;">Contingency</a></legend>
                    <div id="Contingency_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#mustStudy}}<div><b>mustStudy</b>: {{mustStudy}}</div>{{/mustStudy}}
                    {{#ContingencyElement}}<div><b>ContingencyElement</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ContingencyElement}}
                    </div>
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Contingency_collapse" aria-expanded="true" aria-controls="Contingency_collapse" style="margin-left: 10px;">Contingency</a></legend>
                    <div id="Contingency_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='mustStudy'>mustStudy: </label><div class='col-sm-8'><input id='mustStudy' class='form-check-input' type='checkbox'{{#mustStudy}} checked{{/mustStudy}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["ContingencyElement", "ContingencyElement", "0..*", "1"]
                    ]
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
                this._id = template.id;
                var bucket = cim_data.ContingencyElement;
                if (null == bucket)
                   cim_data.ContingencyElement = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ContingencyElement[this._id];
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

                base.export_attribute (obj, "export_attribute", "ContingencyElement", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ContingencyElement_collapse" aria-expanded="true" aria-controls="ContingencyElement_collapse" style="margin-left: 10px;">ContingencyElement</a></legend>
                    <div id="ContingencyElement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#Contingency}}<div><b>Contingency</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Contingency}}&quot;);})'>{{Contingency}}</a></div>{{/Contingency}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ContingencyElement_collapse" aria-expanded="true" aria-controls="ContingencyElement_collapse" style="margin-left: 10px;">ContingencyElement</a></legend>
                    <div id="ContingencyElement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Contingency'>Contingency: </label><div class='col-sm-8'><input id='Contingency' class='form-control' type='text'{{#Contingency}} value='{{Contingency}}'{{/Contingency}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["Contingency", "Contingency", "1", "0..*"]
                    ]
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
                this._id = template.id;
                var bucket = cim_data.ContingencyEquipment;
                if (null == bucket)
                   cim_data.ContingencyEquipment = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ContingencyEquipment[this._id];
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

                base.export_element (obj, "ContingencyEquipment", "contingentStatus", base.from_string, fields);
                base.export_attribute (obj, "export_attribute", "ContingencyEquipment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ContingencyEquipment_collapse" aria-expanded="true" aria-controls="ContingencyEquipment_collapse" style="margin-left: 10px;">ContingencyEquipment</a></legend>
                    <div id="ContingencyEquipment_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ContingencyElement.prototype.template.call (this) +
                    `
                    {{#contingentStatus}}<div><b>contingentStatus</b>: {{contingentStatus}}</div>{{/contingentStatus}}
                    {{#Equipment}}<div><b>Equipment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Equipment}}&quot;);})'>{{Equipment}}</a></div>{{/Equipment}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ContingencyEquipmentStatusKind = []; if (!obj.contingentStatus) obj.ContingencyEquipmentStatusKind.push ({ id: '', selected: true}); for (var property in ContingencyEquipmentStatusKind) obj.ContingencyEquipmentStatusKind.push ({ id: property, selected: obj.contingentStatus && obj.contingentStatus.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ContingencyEquipmentStatusKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ContingencyEquipment_collapse" aria-expanded="true" aria-controls="ContingencyEquipment_collapse" style="margin-left: 10px;">ContingencyEquipment</a></legend>
                    <div id="ContingencyEquipment_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ContingencyElement.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='contingentStatus'>contingentStatus: </label><div class='col-sm-8'><select id='contingentStatus' class='form-control'>{{#ContingencyEquipmentStatusKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ContingencyEquipmentStatusKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Equipment'>Equipment: </label><div class='col-sm-8'><input id='Equipment' class='form-control' type='text'{{#Equipment}} value='{{Equipment}}'{{/Equipment}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["Equipment", "Equipment", "1", "0..*"]
                    ]
                );
            }
        }

        return (
            {
                Contingency: Contingency,
                ContingencyEquipment: ContingencyEquipment,
                ContingencyElement: ContingencyElement
            }
        );
    }
);