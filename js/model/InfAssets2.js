define
(
    ["model/base", "model/Assets", "model/InfAssets"],
    /**
     * The package is used to define asset-level models for objects.
     *
     * Assets may be comprised of other assets and may have relationships to other assets. Assets also have owners and values. Assets may also have a relationship to a PowerSystemResource in the Wires model.
     *
     * TODO: The following has been copied from a very old version of draft Part 11, so the references are wrong, but we store the knowledge here to reuse later:
     * "Assets are the basic units which define a physical infrastructure. PowerSystemResources are logical objects meaningful to operations which are constructed from one or more Assets, although PowerSystemResources are not required to specifiy their component Assets.
     * The Asset package is comprosed of several packages. The key concepts of an Asset are as follows:
     * <ul>
     * <li>Assets can have names, through inheritance to the Naming package</li>
     * <li>Assets are physical entities which have a lifecycle</li>
     * <li>One or more assets can be associated to create a PowerSystemResource</li>
     * <li>Assets can be grouped (aggregated) with other Assets</li>
     * <li>Assets are typically either 'point' or 'linear' assets, which relate to physical geometry</li>
     * <li>Assets have a close relationship to Work as a consequence of their lifecycle</li>
     * </ul>
     * The following sections describe the packages in the Assets package.
     * The AssetBasics package defines the relationship between Asset and other classes, such as Organization, PowerSystemResource and Document.
     * Point assets are those assets whose physical location can be described in terms of a single coordinate, such as a pole or a switch.
     * Linear assets are those assets whose physical location is best described in terms of a line, plyline or polygon.
     * Asset work triggers are used to determine when inspection and/or maintenance are required for assets".
     *
     */
    function (base, Assets, InfAssets)
    {
        /**
         * Pole asset.
         *
         */
        class Pole extends Assets.Structure
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Pole;
                if (null == bucket)
                   cim_data.Pole = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Pole[obj.id];
            }

            parse (context, sub)
            {
                let obj = Assets.Structure.prototype.parse.call (this, context, sub);
                obj.cls = "Pole";
                base.parse_attribute (/<cim:Pole.baseKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "baseKind", sub, context);
                base.parse_element (/<cim:Pole.breastBlock>([\s\S]*?)<\/cim:Pole.breastBlock>/g, obj, "breastBlock", base.to_boolean, sub, context);
                base.parse_element (/<cim:Pole.classification>([\s\S]*?)<\/cim:Pole.classification>/g, obj, "classification", base.to_string, sub, context);
                base.parse_element (/<cim:Pole.construction>([\s\S]*?)<\/cim:Pole.construction>/g, obj, "construction", base.to_string, sub, context);
                base.parse_element (/<cim:Pole.diameter>([\s\S]*?)<\/cim:Pole.diameter>/g, obj, "diameter", base.to_string, sub, context);
                base.parse_element (/<cim:Pole.jpaReference>([\s\S]*?)<\/cim:Pole.jpaReference>/g, obj, "jpaReference", base.to_string, sub, context);
                base.parse_element (/<cim:Pole.length>([\s\S]*?)<\/cim:Pole.length>/g, obj, "length", base.to_string, sub, context);
                base.parse_attribute (/<cim:Pole.preservativeKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "preservativeKind", sub, context);
                base.parse_element (/<cim:Pole.speciesType>([\s\S]*?)<\/cim:Pole.speciesType>/g, obj, "speciesType", base.to_string, sub, context);
                base.parse_element (/<cim:Pole.treatedDateTime>([\s\S]*?)<\/cim:Pole.treatedDateTime>/g, obj, "treatedDateTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:Pole.treatmentKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "treatmentKind", sub, context);
                base.parse_attributes (/<cim:Pole.Streetlights\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Streetlights", sub, context);
                let bucket = context.parsed.Pole;
                if (null == bucket)
                   context.parsed.Pole = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Assets.Structure.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Pole", "baseKind", "baseKind", fields);
                base.export_element (obj, "Pole", "breastBlock", "breastBlock",  base.from_boolean, fields);
                base.export_element (obj, "Pole", "classification", "classification",  base.from_string, fields);
                base.export_element (obj, "Pole", "construction", "construction",  base.from_string, fields);
                base.export_element (obj, "Pole", "diameter", "diameter",  base.from_string, fields);
                base.export_element (obj, "Pole", "jpaReference", "jpaReference",  base.from_string, fields);
                base.export_element (obj, "Pole", "length", "length",  base.from_string, fields);
                base.export_attribute (obj, "Pole", "preservativeKind", "preservativeKind", fields);
                base.export_element (obj, "Pole", "speciesType", "speciesType",  base.from_string, fields);
                base.export_element (obj, "Pole", "treatedDateTime", "treatedDateTime",  base.from_datetime, fields);
                base.export_attribute (obj, "Pole", "treatmentKind", "treatmentKind", fields);
                base.export_attributes (obj, "Pole", "Streetlights", "Streetlights", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Pole_collapse" aria-expanded="true" aria-controls="Pole_collapse" style="margin-left: 10px;">Pole</a></legend>
                    <div id="Pole_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.Structure.prototype.template.call (this) +
                    `
                    {{#baseKind}}<div><b>baseKind</b>: {{baseKind}}</div>{{/baseKind}}
                    {{#breastBlock}}<div><b>breastBlock</b>: {{breastBlock}}</div>{{/breastBlock}}
                    {{#classification}}<div><b>classification</b>: {{classification}}</div>{{/classification}}
                    {{#construction}}<div><b>construction</b>: {{construction}}</div>{{/construction}}
                    {{#diameter}}<div><b>diameter</b>: {{diameter}}</div>{{/diameter}}
                    {{#jpaReference}}<div><b>jpaReference</b>: {{jpaReference}}</div>{{/jpaReference}}
                    {{#length}}<div><b>length</b>: {{length}}</div>{{/length}}
                    {{#preservativeKind}}<div><b>preservativeKind</b>: {{preservativeKind}}</div>{{/preservativeKind}}
                    {{#speciesType}}<div><b>speciesType</b>: {{speciesType}}</div>{{/speciesType}}
                    {{#treatedDateTime}}<div><b>treatedDateTime</b>: {{treatedDateTime}}</div>{{/treatedDateTime}}
                    {{#treatmentKind}}<div><b>treatmentKind</b>: {{treatmentKind}}</div>{{/treatmentKind}}
                    {{#Streetlights}}<div><b>Streetlights</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Streetlights}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["baseKindPoleBaseKind"] = [{ id: '', selected: (!obj["baseKind"])}]; for (let property in InfAssets.PoleBaseKind) obj["baseKindPoleBaseKind"].push ({ id: property, selected: obj["baseKind"] && obj["baseKind"].endsWith ('.' + property)});
                obj["preservativeKindPolePreservativeKind"] = [{ id: '', selected: (!obj["preservativeKind"])}]; for (let property in InfAssets.PolePreservativeKind) obj["preservativeKindPolePreservativeKind"].push ({ id: property, selected: obj["preservativeKind"] && obj["preservativeKind"].endsWith ('.' + property)});
                obj["treatmentKindPoleTreatmentKind"] = [{ id: '', selected: (!obj["treatmentKind"])}]; for (let property in InfAssets.PoleTreatmentKind) obj["treatmentKindPoleTreatmentKind"].push ({ id: property, selected: obj["treatmentKind"] && obj["treatmentKind"].endsWith ('.' + property)});
                if (obj["Streetlights"]) obj["Streetlights_string"] = obj["Streetlights"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["baseKindPoleBaseKind"];
                delete obj["preservativeKindPolePreservativeKind"];
                delete obj["treatmentKindPoleTreatmentKind"];
                delete obj["Streetlights_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Pole_collapse" aria-expanded="true" aria-controls="{{id}}_Pole_collapse" style="margin-left: 10px;">Pole</a></legend>
                    <div id="{{id}}_Pole_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.Structure.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_baseKind'>baseKind: </label><div class='col-sm-8'><select id='{{id}}_baseKind' class='form-control custom-select'>{{#baseKindPoleBaseKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/baseKindPoleBaseKind}}</select></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_breastBlock'>breastBlock: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_breastBlock' class='form-check-input' type='checkbox'{{#breastBlock}} checked{{/breastBlock}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_classification'>classification: </label><div class='col-sm-8'><input id='{{id}}_classification' class='form-control' type='text'{{#classification}} value='{{classification}}'{{/classification}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_construction'>construction: </label><div class='col-sm-8'><input id='{{id}}_construction' class='form-control' type='text'{{#construction}} value='{{construction}}'{{/construction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_diameter'>diameter: </label><div class='col-sm-8'><input id='{{id}}_diameter' class='form-control' type='text'{{#diameter}} value='{{diameter}}'{{/diameter}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_jpaReference'>jpaReference: </label><div class='col-sm-8'><input id='{{id}}_jpaReference' class='form-control' type='text'{{#jpaReference}} value='{{jpaReference}}'{{/jpaReference}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_length'>length: </label><div class='col-sm-8'><input id='{{id}}_length' class='form-control' type='text'{{#length}} value='{{length}}'{{/length}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_preservativeKind'>preservativeKind: </label><div class='col-sm-8'><select id='{{id}}_preservativeKind' class='form-control custom-select'>{{#preservativeKindPolePreservativeKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/preservativeKindPolePreservativeKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_speciesType'>speciesType: </label><div class='col-sm-8'><input id='{{id}}_speciesType' class='form-control' type='text'{{#speciesType}} value='{{speciesType}}'{{/speciesType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_treatedDateTime'>treatedDateTime: </label><div class='col-sm-8'><input id='{{id}}_treatedDateTime' class='form-control' type='text'{{#treatedDateTime}} value='{{treatedDateTime}}'{{/treatedDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_treatmentKind'>treatmentKind: </label><div class='col-sm-8'><select id='{{id}}_treatmentKind' class='form-control custom-select'>{{#treatmentKindPoleTreatmentKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/treatmentKindPoleTreatmentKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Pole" };
                super.submit (id, obj);
                temp = InfAssets.PoleBaseKind[document.getElementById (id + "_baseKind").value]; if (temp) obj["baseKind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#PoleBaseKind." + temp; else delete obj["baseKind"];
                temp = document.getElementById (id + "_breastBlock").checked; if (temp) obj["breastBlock"] = true;
                temp = document.getElementById (id + "_classification").value; if ("" !== temp) obj["classification"] = temp;
                temp = document.getElementById (id + "_construction").value; if ("" !== temp) obj["construction"] = temp;
                temp = document.getElementById (id + "_diameter").value; if ("" !== temp) obj["diameter"] = temp;
                temp = document.getElementById (id + "_jpaReference").value; if ("" !== temp) obj["jpaReference"] = temp;
                temp = document.getElementById (id + "_length").value; if ("" !== temp) obj["length"] = temp;
                temp = InfAssets.PolePreservativeKind[document.getElementById (id + "_preservativeKind").value]; if (temp) obj["preservativeKind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#PolePreservativeKind." + temp; else delete obj["preservativeKind"];
                temp = document.getElementById (id + "_speciesType").value; if ("" !== temp) obj["speciesType"] = temp;
                temp = document.getElementById (id + "_treatedDateTime").value; if ("" !== temp) obj["treatedDateTime"] = temp;
                temp = InfAssets.PoleTreatmentKind[document.getElementById (id + "_treatmentKind").value]; if (temp) obj["treatmentKind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#PoleTreatmentKind." + temp; else delete obj["treatmentKind"];

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Streetlights", "0..*", "0..1", "Streetlight", "Pole"]
                        ]
                    )
                );
            }
        }

        /**
         * Tower asset.
         *
         * Dimensions of the Tower are specified in associated DimensionsInfo class.
         * When used for planning purposes, a transmission tower carrying two 3-phase circuits will have 2 instances of Connection, each of which will have 3 MountingPoint instances, one for each phase all with coordinates relative to a common origin on the tower. (It may also have a 3rd Connection with a single MountingPoint for the Neutral line).
         *
         */
        class Tower extends Assets.Structure
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Tower;
                if (null == bucket)
                   cim_data.Tower = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Tower[obj.id];
            }

            parse (context, sub)
            {
                let obj = Assets.Structure.prototype.parse.call (this, context, sub);
                obj.cls = "Tower";
                base.parse_attribute (/<cim:Tower.constructionKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "constructionKind", sub, context);
                let bucket = context.parsed.Tower;
                if (null == bucket)
                   context.parsed.Tower = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Assets.Structure.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Tower", "constructionKind", "constructionKind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Tower_collapse" aria-expanded="true" aria-controls="Tower_collapse" style="margin-left: 10px;">Tower</a></legend>
                    <div id="Tower_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.Structure.prototype.template.call (this) +
                    `
                    {{#constructionKind}}<div><b>constructionKind</b>: {{constructionKind}}</div>{{/constructionKind}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["constructionKindTowerConstructionKind"] = [{ id: '', selected: (!obj["constructionKind"])}]; for (let property in InfAssets.TowerConstructionKind) obj["constructionKindTowerConstructionKind"].push ({ id: property, selected: obj["constructionKind"] && obj["constructionKind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["constructionKindTowerConstructionKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Tower_collapse" aria-expanded="true" aria-controls="{{id}}_Tower_collapse" style="margin-left: 10px;">Tower</a></legend>
                    <div id="{{id}}_Tower_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.Structure.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_constructionKind'>constructionKind: </label><div class='col-sm-8'><select id='{{id}}_constructionKind' class='form-control custom-select'>{{#constructionKindTowerConstructionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/constructionKindTowerConstructionKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Tower" };
                super.submit (id, obj);
                temp = InfAssets.TowerConstructionKind[document.getElementById (id + "_constructionKind").value]; if (temp) obj["constructionKind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#TowerConstructionKind." + temp; else delete obj["constructionKind"];

                return (obj);
            }
        }

        /**
         * Underground structure.
         *
         */
        class UndergroundStructure extends Assets.Structure
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.UndergroundStructure;
                if (null == bucket)
                   cim_data.UndergroundStructure = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.UndergroundStructure[obj.id];
            }

            parse (context, sub)
            {
                let obj = Assets.Structure.prototype.parse.call (this, context, sub);
                obj.cls = "UndergroundStructure";
                base.parse_element (/<cim:UndergroundStructure.hasVentilation>([\s\S]*?)<\/cim:UndergroundStructure.hasVentilation>/g, obj, "hasVentilation", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:UndergroundStructure.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:UndergroundStructure.material>([\s\S]*?)<\/cim:UndergroundStructure.material>/g, obj, "material", base.to_string, sub, context);
                base.parse_element (/<cim:UndergroundStructure.sealingWarrantyExpiresDate>([\s\S]*?)<\/cim:UndergroundStructure.sealingWarrantyExpiresDate>/g, obj, "sealingWarrantyExpiresDate", base.to_string, sub, context);
                let bucket = context.parsed.UndergroundStructure;
                if (null == bucket)
                   context.parsed.UndergroundStructure = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Assets.Structure.prototype.export.call (this, obj, false);

                base.export_element (obj, "UndergroundStructure", "hasVentilation", "hasVentilation",  base.from_boolean, fields);
                base.export_attribute (obj, "UndergroundStructure", "kind", "kind", fields);
                base.export_element (obj, "UndergroundStructure", "material", "material",  base.from_string, fields);
                base.export_element (obj, "UndergroundStructure", "sealingWarrantyExpiresDate", "sealingWarrantyExpiresDate",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#UndergroundStructure_collapse" aria-expanded="true" aria-controls="UndergroundStructure_collapse" style="margin-left: 10px;">UndergroundStructure</a></legend>
                    <div id="UndergroundStructure_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.Structure.prototype.template.call (this) +
                    `
                    {{#hasVentilation}}<div><b>hasVentilation</b>: {{hasVentilation}}</div>{{/hasVentilation}}
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#material}}<div><b>material</b>: {{material}}</div>{{/material}}
                    {{#sealingWarrantyExpiresDate}}<div><b>sealingWarrantyExpiresDate</b>: {{sealingWarrantyExpiresDate}}</div>{{/sealingWarrantyExpiresDate}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindUndergroundStructureKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in InfAssets.UndergroundStructureKind) obj["kindUndergroundStructureKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindUndergroundStructureKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_UndergroundStructure_collapse" aria-expanded="true" aria-controls="{{id}}_UndergroundStructure_collapse" style="margin-left: 10px;">UndergroundStructure</a></legend>
                    <div id="{{id}}_UndergroundStructure_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.Structure.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_hasVentilation'>hasVentilation: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_hasVentilation' class='form-check-input' type='checkbox'{{#hasVentilation}} checked{{/hasVentilation}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindUndergroundStructureKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindUndergroundStructureKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_material'>material: </label><div class='col-sm-8'><input id='{{id}}_material' class='form-control' type='text'{{#material}} value='{{material}}'{{/material}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sealingWarrantyExpiresDate'>sealingWarrantyExpiresDate: </label><div class='col-sm-8'><input id='{{id}}_sealingWarrantyExpiresDate' class='form-control' type='text'{{#sealingWarrantyExpiresDate}} value='{{sealingWarrantyExpiresDate}}'{{/sealingWarrantyExpiresDate}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "UndergroundStructure" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_hasVentilation").checked; if (temp) obj["hasVentilation"] = true;
                temp = InfAssets.UndergroundStructureKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#UndergroundStructureKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_material").value; if ("" !== temp) obj["material"] = temp;
                temp = document.getElementById (id + "_sealingWarrantyExpiresDate").value; if ("" !== temp) obj["sealingWarrantyExpiresDate"] = temp;

                return (obj);
            }
        }

        return (
            {
                Pole: Pole,
                Tower: Tower,
                UndergroundStructure: UndergroundStructure
            }
        );
    }
);