define
(
    ["model/base", "model/Core"],
    function (base, Core)
    {

        let EnergyTypeKind =
        {
            "IndustrialLoad": "IndustrialLoad",
            "PVpark": "PVpark",
            "WindPark": "WindPark",
            "ConsumerLoad": "ConsumerLoad",
            "Other": "Other"
        };
        Object.freeze (EnergyTypeKind);

        class EnergyTypeReference extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.EnergyTypeReference;
                if (null == bucket)
                   cim_data.EnergyTypeReference = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EnergyTypeReference[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "EnergyTypeReference";
                base.parse_attribute (/<cim:EnergyTypeReference.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                let bucket = context.parsed.EnergyTypeReference;
                if (null == bucket)
                   context.parsed.EnergyTypeReference = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "EnergyTypeReference", "kind", "kind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EnergyTypeReference_collapse" aria-expanded="true" aria-controls="EnergyTypeReference_collapse" style="margin-left: 10px;">EnergyTypeReference</a></legend>
                    <div id="EnergyTypeReference_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindEnergyTypeKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in EnergyTypeKind) obj["kindEnergyTypeKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindEnergyTypeKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EnergyTypeReference_collapse" aria-expanded="true" aria-controls="{{id}}_EnergyTypeReference_collapse" style="margin-left: 10px;">EnergyTypeReference</a></legend>
                    <div id="{{id}}_EnergyTypeReference_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindEnergyTypeKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindEnergyTypeKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "EnergyTypeReference" };
                super.submit (id, obj);
                temp = EnergyTypeKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#EnergyTypeKind." + temp; else delete obj["kind"];

                return (obj);
            }
        }

        class BlockDispatchOrder extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.BlockDispatchOrder;
                if (null == bucket)
                   cim_data.BlockDispatchOrder = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BlockDispatchOrder[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "BlockDispatchOrder";
                base.parse_element (/<cim:BlockDispatchOrder.p>([\s\S]*?)<\/cim:BlockDispatchOrder.p>/g, obj, "p", base.to_string, sub, context);
                base.parse_element (/<cim:BlockDispatchOrder.sequence>([\s\S]*?)<\/cim:BlockDispatchOrder.sequence>/g, obj, "sequence", base.to_string, sub, context);
                let bucket = context.parsed.BlockDispatchOrder;
                if (null == bucket)
                   context.parsed.BlockDispatchOrder = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "BlockDispatchOrder", "p", "p",  base.from_string, fields);
                base.export_element (obj, "BlockDispatchOrder", "sequence", "sequence",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#BlockDispatchOrder_collapse" aria-expanded="true" aria-controls="BlockDispatchOrder_collapse" style="margin-left: 10px;">BlockDispatchOrder</a></legend>
                    <div id="BlockDispatchOrder_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#p}}<div><b>p</b>: {{p}}</div>{{/p}}
                    {{#sequence}}<div><b>sequence</b>: {{sequence}}</div>{{/sequence}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_BlockDispatchOrder_collapse" aria-expanded="true" aria-controls="{{id}}_BlockDispatchOrder_collapse" style="margin-left: 10px;">BlockDispatchOrder</a></legend>
                    <div id="{{id}}_BlockDispatchOrder_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_p'>p: </label><div class='col-sm-8'><input id='{{id}}_p' class='form-control' type='text'{{#p}} value='{{p}}'{{/p}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sequence'>sequence: </label><div class='col-sm-8'><input id='{{id}}_sequence' class='form-control' type='text'{{#sequence}} value='{{sequence}}'{{/sequence}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "BlockDispatchOrder" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_p").value; if ("" !== temp) obj["p"] = temp;
                temp = document.getElementById (id + "_sequence").value; if ("" !== temp) obj["sequence"] = temp;

                return (obj);
            }
        }

        class EnergyComponent extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.EnergyComponent;
                if (null == bucket)
                   cim_data.EnergyComponent = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EnergyComponent[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "EnergyComponent";
                let bucket = context.parsed.EnergyComponent;
                if (null == bucket)
                   context.parsed.EnergyComponent = bucket = {};
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EnergyComponent_collapse" aria-expanded="true" aria-controls="EnergyComponent_collapse" style="margin-left: 10px;">EnergyComponent</a></legend>
                    <div id="EnergyComponent_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EnergyComponent_collapse" aria-expanded="true" aria-controls="{{id}}_EnergyComponent_collapse" style="margin-left: 10px;">EnergyComponent</a></legend>
                    <div id="{{id}}_EnergyComponent_collapse" class="collapse in show" style="margin-left: 10px;">
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
                obj = obj || { id: id, cls: "EnergyComponent" };
                super.submit (id, obj);

                return (obj);
            }
        }

        class BlockDispatchInstruction extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.BlockDispatchInstruction;
                if (null == bucket)
                   cim_data.BlockDispatchInstruction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BlockDispatchInstruction[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "BlockDispatchInstruction";
                let bucket = context.parsed.BlockDispatchInstruction;
                if (null == bucket)
                   context.parsed.BlockDispatchInstruction = bucket = {};
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#BlockDispatchInstruction_collapse" aria-expanded="true" aria-controls="BlockDispatchInstruction_collapse" style="margin-left: 10px;">BlockDispatchInstruction</a></legend>
                    <div id="BlockDispatchInstruction_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_BlockDispatchInstruction_collapse" aria-expanded="true" aria-controls="{{id}}_BlockDispatchInstruction_collapse" style="margin-left: 10px;">BlockDispatchInstruction</a></legend>
                    <div id="{{id}}_BlockDispatchInstruction_collapse" class="collapse in show" style="margin-left: 10px;">
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
                obj = obj || { id: id, cls: "BlockDispatchInstruction" };
                super.submit (id, obj);

                return (obj);
            }
        }

        class EnergyGroup extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.EnergyGroup;
                if (null == bucket)
                   cim_data.EnergyGroup = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EnergyGroup[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "EnergyGroup";
                base.parse_element (/<cim:EnergyGroup.p>([\s\S]*?)<\/cim:EnergyGroup.p>/g, obj, "p", base.to_string, sub, context);
                base.parse_element (/<cim:EnergyGroup.isSlack>([\s\S]*?)<\/cim:EnergyGroup.isSlack>/g, obj, "isSlack", base.to_boolean, sub, context);
                let bucket = context.parsed.EnergyGroup;
                if (null == bucket)
                   context.parsed.EnergyGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "EnergyGroup", "p", "p",  base.from_string, fields);
                base.export_element (obj, "EnergyGroup", "isSlack", "isSlack",  base.from_boolean, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EnergyGroup_collapse" aria-expanded="true" aria-controls="EnergyGroup_collapse" style="margin-left: 10px;">EnergyGroup</a></legend>
                    <div id="EnergyGroup_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#p}}<div><b>p</b>: {{p}}</div>{{/p}}
                    {{#isSlack}}<div><b>isSlack</b>: {{isSlack}}</div>{{/isSlack}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EnergyGroup_collapse" aria-expanded="true" aria-controls="{{id}}_EnergyGroup_collapse" style="margin-left: 10px;">EnergyGroup</a></legend>
                    <div id="{{id}}_EnergyGroup_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_p'>p: </label><div class='col-sm-8'><input id='{{id}}_p' class='form-control' type='text'{{#p}} value='{{p}}'{{/p}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isSlack'>isSlack: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isSlack' class='form-check-input' type='checkbox'{{#isSlack}} checked{{/isSlack}}></div></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "EnergyGroup" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_p").value; if ("" !== temp) obj["p"] = temp;
                temp = document.getElementById (id + "_isSlack").checked; if (temp) obj["isSlack"] = true;

                return (obj);
            }
        }

        class BlockDispatchComponent extends EnergyComponent
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.BlockDispatchComponent;
                if (null == bucket)
                   cim_data.BlockDispatchComponent = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BlockDispatchComponent[obj.id];
            }

            parse (context, sub)
            {
                let obj = EnergyComponent.prototype.parse.call (this, context, sub);
                obj.cls = "BlockDispatchComponent";
                let bucket = context.parsed.BlockDispatchComponent;
                if (null == bucket)
                   context.parsed.BlockDispatchComponent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = EnergyComponent.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#BlockDispatchComponent_collapse" aria-expanded="true" aria-controls="BlockDispatchComponent_collapse" style="margin-left: 10px;">BlockDispatchComponent</a></legend>
                    <div id="BlockDispatchComponent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EnergyComponent.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_BlockDispatchComponent_collapse" aria-expanded="true" aria-controls="{{id}}_BlockDispatchComponent_collapse" style="margin-left: 10px;">BlockDispatchComponent</a></legend>
                    <div id="{{id}}_BlockDispatchComponent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EnergyComponent.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "BlockDispatchComponent" };
                super.submit (id, obj);

                return (obj);
            }
        }

        class ProportionalDistributionComponent extends EnergyComponent
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ProportionalDistributionComponent;
                if (null == bucket)
                   cim_data.ProportionalDistributionComponent = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ProportionalDistributionComponent[obj.id];
            }

            parse (context, sub)
            {
                let obj = EnergyComponent.prototype.parse.call (this, context, sub);
                obj.cls = "ProportionalDistributionComponent";
                base.parse_element (/<cim:ProportionalDistributionComponent.distributionFactor>([\s\S]*?)<\/cim:ProportionalDistributionComponent.distributionFactor>/g, obj, "distributionFactor", base.to_string, sub, context);
                let bucket = context.parsed.ProportionalDistributionComponent;
                if (null == bucket)
                   context.parsed.ProportionalDistributionComponent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = EnergyComponent.prototype.export.call (this, obj, false);

                base.export_element (obj, "ProportionalDistributionComponent", "distributionFactor", "distributionFactor",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ProportionalDistributionComponent_collapse" aria-expanded="true" aria-controls="ProportionalDistributionComponent_collapse" style="margin-left: 10px;">ProportionalDistributionComponent</a></legend>
                    <div id="ProportionalDistributionComponent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EnergyComponent.prototype.template.call (this) +
                    `
                    {{#distributionFactor}}<div><b>distributionFactor</b>: {{distributionFactor}}</div>{{/distributionFactor}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ProportionalDistributionComponent_collapse" aria-expanded="true" aria-controls="{{id}}_ProportionalDistributionComponent_collapse" style="margin-left: 10px;">ProportionalDistributionComponent</a></legend>
                    <div id="{{id}}_ProportionalDistributionComponent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EnergyComponent.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_distributionFactor'>distributionFactor: </label><div class='col-sm-8'><input id='{{id}}_distributionFactor' class='form-control' type='text'{{#distributionFactor}} value='{{distributionFactor}}'{{/distributionFactor}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ProportionalDistributionComponent" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_distributionFactor").value; if ("" !== temp) obj["distributionFactor"] = temp;

                return (obj);
            }
        }

        return (
            {
                EnergyTypeKind: EnergyTypeKind,
                ProportionalDistributionComponent: ProportionalDistributionComponent,
                EnergyGroup: EnergyGroup,
                EnergyComponent: EnergyComponent,
                BlockDispatchComponent: BlockDispatchComponent,
                BlockDispatchInstruction: BlockDispatchInstruction,
                EnergyTypeReference: EnergyTypeReference,
                BlockDispatchOrder: BlockDispatchOrder
            }
        );
    }
);