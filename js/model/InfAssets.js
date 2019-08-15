define
(
    ["model/base", "model/Common", "model/Core"],
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
    function (base, Common, Core)
    {

        /**
         * Kind of fill for Joint.
         *
         */
        let JointFillKind =
        {
            "noFillPrefab": "noFillPrefab",
            "airNoFilling": "airNoFilling",
            "petrolatum": "petrolatum",
            "asphaltic": "asphaltic",
            "oil": "oil",
            "bluefill254": "bluefill254",
            "noVoid": "noVoid",
            "epoxy": "epoxy",
            "insoluseal": "insoluseal",
            "other": "other"
        };
        Object.freeze (JointFillKind);

        /**
         * Kind of anchor.
         *
         */
        let AnchorKind =
        {
            "concrete": "concrete",
            "helix": "helix",
            "multiHelix": "multiHelix",
            "rod": "rod",
            "screw": "screw",
            "unknown": "unknown",
            "other": "other"
        };
        Object.freeze (AnchorKind);

        /**
         * Kind of tower construction.
         *
         */
        let TowerConstructionKind =
        {
            "suspension": "suspension",
            "tension": "tension"
        };
        Object.freeze (TowerConstructionKind);

        /**
         * Kind of lamp for the streetlight.
         *
         */
        let StreetlightLampKind =
        {
            "highPressureSodium": "highPressureSodium",
            "mercuryVapor": "mercuryVapor",
            "metalHalide": "metalHalide",
            "other": "other"
        };
        Object.freeze (StreetlightLampKind);

        /**
         * Kind of treatment for poles.
         *
         */
        let PoleTreatmentKind =
        {
            "full": "full",
            "butt": "butt",
            "natural": "natural",
            "grayStain": "grayStain",
            "greenStain": "greenStain",
            "penta": "penta",
            "unknown": "unknown",
            "other": "other"
        };
        Object.freeze (PoleTreatmentKind);

        /**
         * Kind of structure support.
         *
         */
        let StructureSupportKind =
        {
            "anchor": "anchor",
            "guy": "guy"
        };
        Object.freeze (StructureSupportKind);

        /**
         * Kind of cooling.
         *
         */
        let CoolingKind =
        {
            "selfCooling": "selfCooling",
            "forcedAir": "forcedAir",
            "forcedOilAndAir": "forcedOilAndAir",
            "other": "other"
        };
        Object.freeze (CoolingKind);

        /**
         * Kind of PF test for bushing insulation.
         *
         */
        let BushingInsulationPfTestKind =
        {
            "c1": "c1",
            "c2": "c2"
        };
        Object.freeze (BushingInsulationPfTestKind);

        /**
         * Kind of material used for structures.
         *
         */
        let StructureMaterialKind =
        {
            "wood": "wood",
            "steel": "steel",
            "concrete": "concrete",
            "other": "other"
        };
        Object.freeze (StructureMaterialKind);

        /**
         * Kind of underground structure.
         *
         */
        let UndergroundStructureKind =
        {
            "burd": "burd",
            "enclosure": "enclosure",
            "handhole": "handhole",
            "manhole": "manhole",
            "pad": "pad",
            "subsurfaceEnclosure": "subsurfaceEnclosure",
            "trench": "trench",
            "tunnel": "tunnel",
            "vault": "vault",
            "pullbox": "pullbox"
        };
        Object.freeze (UndergroundStructureKind);

        /**
         * Kind of base for poles.
         *
         */
        let PoleBaseKind =
        {
            "asphalt": "asphalt",
            "cement": "cement",
            "dirt": "dirt",
            "unknown": "unknown",
            "other": "other"
        };
        Object.freeze (PoleBaseKind);

        /**
         * Kind of configuration for joints.
         *
         */
        let JointConfigurationKind =
        {
            "wires3to1": "wires3to1",
            "wires2to1": "wires2to1",
            "wires1to1": "wires1to1",
            "other": "other"
        };
        Object.freeze (JointConfigurationKind);

        /**
         * Kind of FACTS device.
         *
         */
        let FACTSDeviceKind =
        {
            "svc": "svc",
            "statcom": "statcom",
            "tcpar": "tcpar",
            "tcsc": "tcsc",
            "tcvl": "tcvl",
            "tsbr": "tsbr",
            "tssc": "tssc",
            "upfc": "upfc"
        };
        Object.freeze (FACTSDeviceKind);

        /**
         * Preservative kind for poles.
         *
         */
        let PolePreservativeKind =
        {
            "creosote": "creosote",
            "cellon": "cellon",
            "naphthena": "naphthena",
            "penta": "penta",
            "chemonite": "chemonite",
            "unknown": "unknown",
            "other": "other"
        };
        Object.freeze (PolePreservativeKind);

        /**
         * Specification can be used for various purposes relative to an asset, a logical device (PowerSystemResource), location, etc.
         *
         * Examples include documents supplied by manufacturers such as asset installation instructions, asset maintenance instructions, etc.
         *
         */
        class Specification extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Specification;
                if (null == bucket)
                   cim_data.Specification = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Specification[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "Specification";
                base.parse_attributes (/<cim:Specification.Mediums\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Mediums", sub, context);
                base.parse_attributes (/<cim:Specification.AssetProperites\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AssetProperites", sub, context);
                base.parse_attributes (/<cim:Specification.DimensionsInfos\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DimensionsInfos", sub, context);
                base.parse_attributes (/<cim:Specification.AssetPropertyCurves\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AssetPropertyCurves", sub, context);
                base.parse_attributes (/<cim:Specification.QualificationRequirements\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "QualificationRequirements", sub, context);
                base.parse_attributes (/<cim:Specification.Ratings\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Ratings", sub, context);
                base.parse_attributes (/<cim:Specification.ReliabilityInfos\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ReliabilityInfos", sub, context);
                let bucket = context.parsed.Specification;
                if (null == bucket)
                   context.parsed.Specification = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "Specification", "Mediums", "Mediums", fields);
                base.export_attributes (obj, "Specification", "AssetProperites", "AssetProperites", fields);
                base.export_attributes (obj, "Specification", "DimensionsInfos", "DimensionsInfos", fields);
                base.export_attributes (obj, "Specification", "AssetPropertyCurves", "AssetPropertyCurves", fields);
                base.export_attributes (obj, "Specification", "QualificationRequirements", "QualificationRequirements", fields);
                base.export_attributes (obj, "Specification", "Ratings", "Ratings", fields);
                base.export_attributes (obj, "Specification", "ReliabilityInfos", "ReliabilityInfos", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Specification_collapse" aria-expanded="true" aria-controls="Specification_collapse" style="margin-left: 10px;">Specification</a></legend>
                    <div id="Specification_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#Mediums}}<div><b>Mediums</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Mediums}}
                    {{#AssetProperites}}<div><b>AssetProperites</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AssetProperites}}
                    {{#DimensionsInfos}}<div><b>DimensionsInfos</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/DimensionsInfos}}
                    {{#AssetPropertyCurves}}<div><b>AssetPropertyCurves</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AssetPropertyCurves}}
                    {{#QualificationRequirements}}<div><b>QualificationRequirements</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/QualificationRequirements}}
                    {{#Ratings}}<div><b>Ratings</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Ratings}}
                    {{#ReliabilityInfos}}<div><b>ReliabilityInfos</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ReliabilityInfos}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Mediums"]) obj["Mediums_string"] = obj["Mediums"].join ();
                if (obj["AssetProperites"]) obj["AssetProperites_string"] = obj["AssetProperites"].join ();
                if (obj["DimensionsInfos"]) obj["DimensionsInfos_string"] = obj["DimensionsInfos"].join ();
                if (obj["AssetPropertyCurves"]) obj["AssetPropertyCurves_string"] = obj["AssetPropertyCurves"].join ();
                if (obj["QualificationRequirements"]) obj["QualificationRequirements_string"] = obj["QualificationRequirements"].join ();
                if (obj["Ratings"]) obj["Ratings_string"] = obj["Ratings"].join ();
                if (obj["ReliabilityInfos"]) obj["ReliabilityInfos_string"] = obj["ReliabilityInfos"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Mediums_string"];
                delete obj["AssetProperites_string"];
                delete obj["DimensionsInfos_string"];
                delete obj["AssetPropertyCurves_string"];
                delete obj["QualificationRequirements_string"];
                delete obj["Ratings_string"];
                delete obj["ReliabilityInfos_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Specification_collapse" aria-expanded="true" aria-controls="{{id}}_Specification_collapse" style="margin-left: 10px;">Specification</a></legend>
                    <div id="{{id}}_Specification_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DimensionsInfos'>DimensionsInfos: </label><div class='col-sm-8'><input id='{{id}}_DimensionsInfos' class='form-control' type='text'{{#DimensionsInfos}} value='{{DimensionsInfos_string}}'{{/DimensionsInfos}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_QualificationRequirements'>QualificationRequirements: </label><div class='col-sm-8'><input id='{{id}}_QualificationRequirements' class='form-control' type='text'{{#QualificationRequirements}} value='{{QualificationRequirements_string}}'{{/QualificationRequirements}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Specification" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_DimensionsInfos").value; if ("" !== temp) obj["DimensionsInfos"] = temp.split (",");
                temp = document.getElementById (id + "_QualificationRequirements").value; if ("" !== temp) obj["QualificationRequirements"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Mediums", "0..*", "0..1", "Medium", "Specification"],
                            ["AssetProperites", "0..*", "0..1", "UserAttribute", "PropertySpecification"],
                            ["DimensionsInfos", "0..*", "0..*", "DimensionsInfo", "Specifications"],
                            ["AssetPropertyCurves", "0..*", "0..1", "AssetPropertyCurve", "Specification"],
                            ["QualificationRequirements", "0..*", "0..*", "QualificationRequirement", "Specifications"],
                            ["Ratings", "0..*", "0..1", "UserAttribute", "RatingSpecification"],
                            ["ReliabilityInfos", "0..*", "0..1", "ReliabilityInfo", "Specification"]
                        ]
                    )
                );
            }
        }

        /**
         * As applicable, the basic linear, area, or volume dimensions of an asset, asset type (AssetModel) or other type of object (such as land area).
         *
         * Units and multipliers are specified per dimension.
         *
         */
        class DimensionsInfo extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DimensionsInfo;
                if (null == bucket)
                   cim_data.DimensionsInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DimensionsInfo[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "DimensionsInfo";
                base.parse_element (/<cim:DimensionsInfo.sizeLength>([\s\S]*?)<\/cim:DimensionsInfo.sizeLength>/g, obj, "sizeLength", base.to_string, sub, context);
                base.parse_element (/<cim:DimensionsInfo.sizeDepth>([\s\S]*?)<\/cim:DimensionsInfo.sizeDepth>/g, obj, "sizeDepth", base.to_string, sub, context);
                base.parse_element (/<cim:DimensionsInfo.sizeWidth>([\s\S]*?)<\/cim:DimensionsInfo.sizeWidth>/g, obj, "sizeWidth", base.to_string, sub, context);
                base.parse_element (/<cim:DimensionsInfo.sizeDiameter>([\s\S]*?)<\/cim:DimensionsInfo.sizeDiameter>/g, obj, "sizeDiameter", base.to_string, sub, context);
                base.parse_element (/<cim:DimensionsInfo.orientation>([\s\S]*?)<\/cim:DimensionsInfo.orientation>/g, obj, "orientation", base.to_string, sub, context);
                base.parse_attributes (/<cim:DimensionsInfo.Specifications\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Specifications", sub, context);
                let bucket = context.parsed.DimensionsInfo;
                if (null == bucket)
                   context.parsed.DimensionsInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "DimensionsInfo", "sizeLength", "sizeLength",  base.from_string, fields);
                base.export_element (obj, "DimensionsInfo", "sizeDepth", "sizeDepth",  base.from_string, fields);
                base.export_element (obj, "DimensionsInfo", "sizeWidth", "sizeWidth",  base.from_string, fields);
                base.export_element (obj, "DimensionsInfo", "sizeDiameter", "sizeDiameter",  base.from_string, fields);
                base.export_element (obj, "DimensionsInfo", "orientation", "orientation",  base.from_string, fields);
                base.export_attributes (obj, "DimensionsInfo", "Specifications", "Specifications", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DimensionsInfo_collapse" aria-expanded="true" aria-controls="DimensionsInfo_collapse" style="margin-left: 10px;">DimensionsInfo</a></legend>
                    <div id="DimensionsInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#sizeLength}}<div><b>sizeLength</b>: {{sizeLength}}</div>{{/sizeLength}}
                    {{#sizeDepth}}<div><b>sizeDepth</b>: {{sizeDepth}}</div>{{/sizeDepth}}
                    {{#sizeWidth}}<div><b>sizeWidth</b>: {{sizeWidth}}</div>{{/sizeWidth}}
                    {{#sizeDiameter}}<div><b>sizeDiameter</b>: {{sizeDiameter}}</div>{{/sizeDiameter}}
                    {{#orientation}}<div><b>orientation</b>: {{orientation}}</div>{{/orientation}}
                    {{#Specifications}}<div><b>Specifications</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Specifications}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Specifications"]) obj["Specifications_string"] = obj["Specifications"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Specifications_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DimensionsInfo_collapse" aria-expanded="true" aria-controls="{{id}}_DimensionsInfo_collapse" style="margin-left: 10px;">DimensionsInfo</a></legend>
                    <div id="{{id}}_DimensionsInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sizeLength'>sizeLength: </label><div class='col-sm-8'><input id='{{id}}_sizeLength' class='form-control' type='text'{{#sizeLength}} value='{{sizeLength}}'{{/sizeLength}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sizeDepth'>sizeDepth: </label><div class='col-sm-8'><input id='{{id}}_sizeDepth' class='form-control' type='text'{{#sizeDepth}} value='{{sizeDepth}}'{{/sizeDepth}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sizeWidth'>sizeWidth: </label><div class='col-sm-8'><input id='{{id}}_sizeWidth' class='form-control' type='text'{{#sizeWidth}} value='{{sizeWidth}}'{{/sizeWidth}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sizeDiameter'>sizeDiameter: </label><div class='col-sm-8'><input id='{{id}}_sizeDiameter' class='form-control' type='text'{{#sizeDiameter}} value='{{sizeDiameter}}'{{/sizeDiameter}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_orientation'>orientation: </label><div class='col-sm-8'><input id='{{id}}_orientation' class='form-control' type='text'{{#orientation}} value='{{orientation}}'{{/orientation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Specifications'>Specifications: </label><div class='col-sm-8'><input id='{{id}}_Specifications' class='form-control' type='text'{{#Specifications}} value='{{Specifications_string}}'{{/Specifications}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DimensionsInfo" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_sizeLength").value; if ("" !== temp) obj["sizeLength"] = temp;
                temp = document.getElementById (id + "_sizeDepth").value; if ("" !== temp) obj["sizeDepth"] = temp;
                temp = document.getElementById (id + "_sizeWidth").value; if ("" !== temp) obj["sizeWidth"] = temp;
                temp = document.getElementById (id + "_sizeDiameter").value; if ("" !== temp) obj["sizeDiameter"] = temp;
                temp = document.getElementById (id + "_orientation").value; if ("" !== temp) obj["orientation"] = temp;
                temp = document.getElementById (id + "_Specifications").value; if ("" !== temp) obj["Specifications"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Specifications", "0..*", "0..*", "Specification", "DimensionsInfos"]
                        ]
                    )
                );
            }
        }

        /**
         * Reconditioning information for an asset.
         *
         */
        class Reconditioning extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Reconditioning;
                if (null == bucket)
                   cim_data.Reconditioning = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Reconditioning[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Reconditioning";
                base.parse_element (/<cim:Reconditioning.dateTime>([\s\S]*?)<\/cim:Reconditioning.dateTime>/g, obj, "dateTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:Reconditioning.Asset\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context);
                base.parse_attributes (/<cim:Reconditioning.PowerRatings\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PowerRatings", sub, context);
                base.parse_attributes (/<cim:Reconditioning.TransformerObservations\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TransformerObservations", sub, context);
                let bucket = context.parsed.Reconditioning;
                if (null == bucket)
                   context.parsed.Reconditioning = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Reconditioning", "dateTime", "dateTime",  base.from_datetime, fields);
                base.export_attribute (obj, "Reconditioning", "Asset", "Asset", fields);
                base.export_attributes (obj, "Reconditioning", "PowerRatings", "PowerRatings", fields);
                base.export_attributes (obj, "Reconditioning", "TransformerObservations", "TransformerObservations", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Reconditioning_collapse" aria-expanded="true" aria-controls="Reconditioning_collapse" style="margin-left: 10px;">Reconditioning</a></legend>
                    <div id="Reconditioning_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#dateTime}}<div><b>dateTime</b>: {{dateTime}}</div>{{/dateTime}}
                    {{#Asset}}<div><b>Asset</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Asset}}");}); return false;'>{{Asset}}</a></div>{{/Asset}}
                    {{#PowerRatings}}<div><b>PowerRatings</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/PowerRatings}}
                    {{#TransformerObservations}}<div><b>TransformerObservations</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TransformerObservations}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["PowerRatings"]) obj["PowerRatings_string"] = obj["PowerRatings"].join ();
                if (obj["TransformerObservations"]) obj["TransformerObservations_string"] = obj["TransformerObservations"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["PowerRatings_string"];
                delete obj["TransformerObservations_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Reconditioning_collapse" aria-expanded="true" aria-controls="{{id}}_Reconditioning_collapse" style="margin-left: 10px;">Reconditioning</a></legend>
                    <div id="{{id}}_Reconditioning_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dateTime'>dateTime: </label><div class='col-sm-8'><input id='{{id}}_dateTime' class='form-control' type='text'{{#dateTime}} value='{{dateTime}}'{{/dateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Asset'>Asset: </label><div class='col-sm-8'><input id='{{id}}_Asset' class='form-control' type='text'{{#Asset}} value='{{Asset}}'{{/Asset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PowerRatings'>PowerRatings: </label><div class='col-sm-8'><input id='{{id}}_PowerRatings' class='form-control' type='text'{{#PowerRatings}} value='{{PowerRatings_string}}'{{/PowerRatings}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Reconditioning" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_dateTime").value; if ("" !== temp) obj["dateTime"] = temp;
                temp = document.getElementById (id + "_Asset").value; if ("" !== temp) obj["Asset"] = temp;
                temp = document.getElementById (id + "_PowerRatings").value; if ("" !== temp) obj["PowerRatings"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Asset", "0..1", "0..*", "Asset", "Reconditionings"],
                            ["PowerRatings", "0..*", "0..*", "CoolingPowerRating", "Reconditionings"],
                            ["TransformerObservations", "0..*", "1", "TransformerObservation", "Reconditioning"]
                        ]
                    )
                );
            }
        }

        /**
         * An Asset Property that is described through curves rather than as a data point.
         *
         * The relationship is to be defined between an independent variable (X-axis) and one or two dependent variables (Y1-axis and Y2-axis).
         *
         */
        class AssetPropertyCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AssetPropertyCurve;
                if (null == bucket)
                   cim_data.AssetPropertyCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AssetPropertyCurve[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "AssetPropertyCurve";
                base.parse_attributes (/<cim:AssetPropertyCurve.Assets\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Assets", sub, context);
                base.parse_attribute (/<cim:AssetPropertyCurve.Specification\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Specification", sub, context);
                let bucket = context.parsed.AssetPropertyCurve;
                if (null == bucket)
                   context.parsed.AssetPropertyCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "AssetPropertyCurve", "Assets", "Assets", fields);
                base.export_attribute (obj, "AssetPropertyCurve", "Specification", "Specification", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AssetPropertyCurve_collapse" aria-expanded="true" aria-controls="AssetPropertyCurve_collapse" style="margin-left: 10px;">AssetPropertyCurve</a></legend>
                    <div id="AssetPropertyCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#Assets}}<div><b>Assets</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Assets}}
                    {{#Specification}}<div><b>Specification</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Specification}}");}); return false;'>{{Specification}}</a></div>{{/Specification}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Assets"]) obj["Assets_string"] = obj["Assets"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Assets_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AssetPropertyCurve_collapse" aria-expanded="true" aria-controls="{{id}}_AssetPropertyCurve_collapse" style="margin-left: 10px;">AssetPropertyCurve</a></legend>
                    <div id="{{id}}_AssetPropertyCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Assets'>Assets: </label><div class='col-sm-8'><input id='{{id}}_Assets' class='form-control' type='text'{{#Assets}} value='{{Assets_string}}'{{/Assets}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Specification'>Specification: </label><div class='col-sm-8'><input id='{{id}}_Specification' class='form-control' type='text'{{#Specification}} value='{{Specification}}'{{/Specification}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AssetPropertyCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Assets").value; if ("" !== temp) obj["Assets"] = temp.split (",");
                temp = document.getElementById (id + "_Specification").value; if ("" !== temp) obj["Specification"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Assets", "0..*", "0..*", "Asset", "AssetPropertyCurves"],
                            ["Specification", "0..1", "0..*", "Specification", "AssetPropertyCurves"]
                        ]
                    )
                );
            }
        }

        /**
         * Winding insulation condition as a result of a test.
         *
         */
        class WindingInsulation extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.WindingInsulation;
                if (null == bucket)
                   cim_data.WindingInsulation = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindingInsulation[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindingInsulation";
                base.parse_element (/<cim:WindingInsulation.insulationPFStatus>([\s\S]*?)<\/cim:WindingInsulation.insulationPFStatus>/g, obj, "insulationPFStatus", base.to_string, sub, context);
                base.parse_element (/<cim:WindingInsulation.insulationResistance>([\s\S]*?)<\/cim:WindingInsulation.insulationResistance>/g, obj, "insulationResistance", base.to_string, sub, context);
                base.parse_element (/<cim:WindingInsulation.leakageReactance>([\s\S]*?)<\/cim:WindingInsulation.leakageReactance>/g, obj, "leakageReactance", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindingInsulation.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attribute (/<cim:WindingInsulation.TransformerObservation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TransformerObservation", sub, context);
                base.parse_attribute (/<cim:WindingInsulation.FromWinding\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FromWinding", sub, context);
                base.parse_attribute (/<cim:WindingInsulation.ToWinding\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ToWinding", sub, context);
                let bucket = context.parsed.WindingInsulation;
                if (null == bucket)
                   context.parsed.WindingInsulation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "WindingInsulation", "insulationPFStatus", "insulationPFStatus",  base.from_string, fields);
                base.export_element (obj, "WindingInsulation", "insulationResistance", "insulationResistance",  base.from_string, fields);
                base.export_element (obj, "WindingInsulation", "leakageReactance", "leakageReactance",  base.from_string, fields);
                base.export_attribute (obj, "WindingInsulation", "status", "status", fields);
                base.export_attribute (obj, "WindingInsulation", "TransformerObservation", "TransformerObservation", fields);
                base.export_attribute (obj, "WindingInsulation", "FromWinding", "FromWinding", fields);
                base.export_attribute (obj, "WindingInsulation", "ToWinding", "ToWinding", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#WindingInsulation_collapse" aria-expanded="true" aria-controls="WindingInsulation_collapse" style="margin-left: 10px;">WindingInsulation</a></legend>
                    <div id="WindingInsulation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#insulationPFStatus}}<div><b>insulationPFStatus</b>: {{insulationPFStatus}}</div>{{/insulationPFStatus}}
                    {{#insulationResistance}}<div><b>insulationResistance</b>: {{insulationResistance}}</div>{{/insulationResistance}}
                    {{#leakageReactance}}<div><b>leakageReactance</b>: {{leakageReactance}}</div>{{/leakageReactance}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{status}}");}); return false;'>{{status}}</a></div>{{/status}}
                    {{#TransformerObservation}}<div><b>TransformerObservation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{TransformerObservation}}");}); return false;'>{{TransformerObservation}}</a></div>{{/TransformerObservation}}
                    {{#FromWinding}}<div><b>FromWinding</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{FromWinding}}");}); return false;'>{{FromWinding}}</a></div>{{/FromWinding}}
                    {{#ToWinding}}<div><b>ToWinding</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ToWinding}}");}); return false;'>{{ToWinding}}</a></div>{{/ToWinding}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_WindingInsulation_collapse" aria-expanded="true" aria-controls="{{id}}_WindingInsulation_collapse" style="margin-left: 10px;">WindingInsulation</a></legend>
                    <div id="{{id}}_WindingInsulation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_insulationPFStatus'>insulationPFStatus: </label><div class='col-sm-8'><input id='{{id}}_insulationPFStatus' class='form-control' type='text'{{#insulationPFStatus}} value='{{insulationPFStatus}}'{{/insulationPFStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_insulationResistance'>insulationResistance: </label><div class='col-sm-8'><input id='{{id}}_insulationResistance' class='form-control' type='text'{{#insulationResistance}} value='{{insulationResistance}}'{{/insulationResistance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_leakageReactance'>leakageReactance: </label><div class='col-sm-8'><input id='{{id}}_leakageReactance' class='form-control' type='text'{{#leakageReactance}} value='{{leakageReactance}}'{{/leakageReactance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TransformerObservation'>TransformerObservation: </label><div class='col-sm-8'><input id='{{id}}_TransformerObservation' class='form-control' type='text'{{#TransformerObservation}} value='{{TransformerObservation}}'{{/TransformerObservation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_FromWinding'>FromWinding: </label><div class='col-sm-8'><input id='{{id}}_FromWinding' class='form-control' type='text'{{#FromWinding}} value='{{FromWinding}}'{{/FromWinding}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ToWinding'>ToWinding: </label><div class='col-sm-8'><input id='{{id}}_ToWinding' class='form-control' type='text'{{#ToWinding}} value='{{ToWinding}}'{{/ToWinding}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "WindingInsulation" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_insulationPFStatus").value; if ("" !== temp) obj["insulationPFStatus"] = temp;
                temp = document.getElementById (id + "_insulationResistance").value; if ("" !== temp) obj["insulationResistance"] = temp;
                temp = document.getElementById (id + "_leakageReactance").value; if ("" !== temp) obj["leakageReactance"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_TransformerObservation").value; if ("" !== temp) obj["TransformerObservation"] = temp;
                temp = document.getElementById (id + "_FromWinding").value; if ("" !== temp) obj["FromWinding"] = temp;
                temp = document.getElementById (id + "_ToWinding").value; if ("" !== temp) obj["ToWinding"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TransformerObservation", "0..1", "0..*", "TransformerObservation", "WindingInsulationPFs"],
                            ["FromWinding", "1", "0..*", "TransformerEnd", "FromWindingInsulations"],
                            ["ToWinding", "1", "0..*", "TransformerEnd", "ToWindingInsulations"]
                        ]
                    )
                );
            }
        }

        /**
         * Information regarding the experienced and expected reliability of a specific asset, type of asset, or asset model.
         *
         */
        class ReliabilityInfo extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ReliabilityInfo;
                if (null == bucket)
                   cim_data.ReliabilityInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ReliabilityInfo[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ReliabilityInfo";
                base.parse_element (/<cim:ReliabilityInfo.momFailureRate>([\s\S]*?)<\/cim:ReliabilityInfo.momFailureRate>/g, obj, "momFailureRate", base.to_string, sub, context);
                base.parse_element (/<cim:ReliabilityInfo.mTTR>([\s\S]*?)<\/cim:ReliabilityInfo.mTTR>/g, obj, "mTTR", base.to_string, sub, context);
                base.parse_attributes (/<cim:ReliabilityInfo.Assets\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Assets", sub, context);
                base.parse_attribute (/<cim:ReliabilityInfo.Specification\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Specification", sub, context);
                let bucket = context.parsed.ReliabilityInfo;
                if (null == bucket)
                   context.parsed.ReliabilityInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ReliabilityInfo", "momFailureRate", "momFailureRate",  base.from_string, fields);
                base.export_element (obj, "ReliabilityInfo", "mTTR", "mTTR",  base.from_string, fields);
                base.export_attributes (obj, "ReliabilityInfo", "Assets", "Assets", fields);
                base.export_attribute (obj, "ReliabilityInfo", "Specification", "Specification", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ReliabilityInfo_collapse" aria-expanded="true" aria-controls="ReliabilityInfo_collapse" style="margin-left: 10px;">ReliabilityInfo</a></legend>
                    <div id="ReliabilityInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#momFailureRate}}<div><b>momFailureRate</b>: {{momFailureRate}}</div>{{/momFailureRate}}
                    {{#mTTR}}<div><b>mTTR</b>: {{mTTR}}</div>{{/mTTR}}
                    {{#Assets}}<div><b>Assets</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Assets}}
                    {{#Specification}}<div><b>Specification</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Specification}}");}); return false;'>{{Specification}}</a></div>{{/Specification}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Assets"]) obj["Assets_string"] = obj["Assets"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Assets_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ReliabilityInfo_collapse" aria-expanded="true" aria-controls="{{id}}_ReliabilityInfo_collapse" style="margin-left: 10px;">ReliabilityInfo</a></legend>
                    <div id="{{id}}_ReliabilityInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_momFailureRate'>momFailureRate: </label><div class='col-sm-8'><input id='{{id}}_momFailureRate' class='form-control' type='text'{{#momFailureRate}} value='{{momFailureRate}}'{{/momFailureRate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mTTR'>mTTR: </label><div class='col-sm-8'><input id='{{id}}_mTTR' class='form-control' type='text'{{#mTTR}} value='{{mTTR}}'{{/mTTR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Assets'>Assets: </label><div class='col-sm-8'><input id='{{id}}_Assets' class='form-control' type='text'{{#Assets}} value='{{Assets_string}}'{{/Assets}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Specification'>Specification: </label><div class='col-sm-8'><input id='{{id}}_Specification' class='form-control' type='text'{{#Specification}} value='{{Specification}}'{{/Specification}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ReliabilityInfo" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_momFailureRate").value; if ("" !== temp) obj["momFailureRate"] = temp;
                temp = document.getElementById (id + "_mTTR").value; if ("" !== temp) obj["mTTR"] = temp;
                temp = document.getElementById (id + "_Assets").value; if ("" !== temp) obj["Assets"] = temp.split (",");
                temp = document.getElementById (id + "_Specification").value; if ("" !== temp) obj["Specification"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Assets", "0..*", "0..*", "Asset", "ReliabilityInfos"],
                            ["Specification", "0..1", "0..*", "Specification", "ReliabilityInfos"]
                        ]
                    )
                );
            }
        }

        /**
         * Common information captured during transformer inspections and/or diagnostics.
         *
         * Note that some properties may be measured through other means and therefore have measurement values in addition to the observed values recorded here.
         *
         */
        class TransformerObservation extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.TransformerObservation;
                if (null == bucket)
                   cim_data.TransformerObservation = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TransformerObservation[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TransformerObservation";
                base.parse_element (/<cim:TransformerObservation.dga>([\s\S]*?)<\/cim:TransformerObservation.dga>/g, obj, "dga", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerObservation.waterContent>([\s\S]*?)<\/cim:TransformerObservation.waterContent>/g, obj, "waterContent", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerObservation.oilColor>([\s\S]*?)<\/cim:TransformerObservation.oilColor>/g, obj, "oilColor", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerObservation.oilDielectricStrength>([\s\S]*?)<\/cim:TransformerObservation.oilDielectricStrength>/g, obj, "oilDielectricStrength", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerObservation.oilNeutralizationNumber>([\s\S]*?)<\/cim:TransformerObservation.oilNeutralizationNumber>/g, obj, "oilNeutralizationNumber", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerObservation.oilIFT>([\s\S]*?)<\/cim:TransformerObservation.oilIFT>/g, obj, "oilIFT", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerObservation.hotSpotTemp>([\s\S]*?)<\/cim:TransformerObservation.hotSpotTemp>/g, obj, "hotSpotTemp", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerObservation.topOilTemp>([\s\S]*?)<\/cim:TransformerObservation.topOilTemp>/g, obj, "topOilTemp", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerObservation.bushingTemp>([\s\S]*?)<\/cim:TransformerObservation.bushingTemp>/g, obj, "bushingTemp", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerObservation.pumpVibration>([\s\S]*?)<\/cim:TransformerObservation.pumpVibration>/g, obj, "pumpVibration", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerObservation.oilLevel>([\s\S]*?)<\/cim:TransformerObservation.oilLevel>/g, obj, "oilLevel", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerObservation.freqResp>([\s\S]*?)<\/cim:TransformerObservation.freqResp>/g, obj, "freqResp", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerObservation.furfuralDP>([\s\S]*?)<\/cim:TransformerObservation.furfuralDP>/g, obj, "furfuralDP", base.to_string, sub, context);
                base.parse_attribute (/<cim:TransformerObservation.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attribute (/<cim:TransformerObservation.Transformer\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Transformer", sub, context);
                base.parse_attributes (/<cim:TransformerObservation.BushingInsultationPFs\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BushingInsultationPFs", sub, context);
                base.parse_attributes (/<cim:TransformerObservation.WindingInsulationPFs\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WindingInsulationPFs", sub, context);
                base.parse_attributes (/<cim:TransformerObservation.ProcedureDataSets\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ProcedureDataSets", sub, context);
                base.parse_attribute (/<cim:TransformerObservation.Reconditioning\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Reconditioning", sub, context);
                let bucket = context.parsed.TransformerObservation;
                if (null == bucket)
                   context.parsed.TransformerObservation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "TransformerObservation", "dga", "dga",  base.from_string, fields);
                base.export_element (obj, "TransformerObservation", "waterContent", "waterContent",  base.from_string, fields);
                base.export_element (obj, "TransformerObservation", "oilColor", "oilColor",  base.from_string, fields);
                base.export_element (obj, "TransformerObservation", "oilDielectricStrength", "oilDielectricStrength",  base.from_string, fields);
                base.export_element (obj, "TransformerObservation", "oilNeutralizationNumber", "oilNeutralizationNumber",  base.from_string, fields);
                base.export_element (obj, "TransformerObservation", "oilIFT", "oilIFT",  base.from_string, fields);
                base.export_element (obj, "TransformerObservation", "hotSpotTemp", "hotSpotTemp",  base.from_string, fields);
                base.export_element (obj, "TransformerObservation", "topOilTemp", "topOilTemp",  base.from_string, fields);
                base.export_element (obj, "TransformerObservation", "bushingTemp", "bushingTemp",  base.from_string, fields);
                base.export_element (obj, "TransformerObservation", "pumpVibration", "pumpVibration",  base.from_string, fields);
                base.export_element (obj, "TransformerObservation", "oilLevel", "oilLevel",  base.from_string, fields);
                base.export_element (obj, "TransformerObservation", "freqResp", "freqResp",  base.from_string, fields);
                base.export_element (obj, "TransformerObservation", "furfuralDP", "furfuralDP",  base.from_string, fields);
                base.export_attribute (obj, "TransformerObservation", "status", "status", fields);
                base.export_attribute (obj, "TransformerObservation", "Transformer", "Transformer", fields);
                base.export_attributes (obj, "TransformerObservation", "BushingInsultationPFs", "BushingInsultationPFs", fields);
                base.export_attributes (obj, "TransformerObservation", "WindingInsulationPFs", "WindingInsulationPFs", fields);
                base.export_attributes (obj, "TransformerObservation", "ProcedureDataSets", "ProcedureDataSets", fields);
                base.export_attribute (obj, "TransformerObservation", "Reconditioning", "Reconditioning", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TransformerObservation_collapse" aria-expanded="true" aria-controls="TransformerObservation_collapse" style="margin-left: 10px;">TransformerObservation</a></legend>
                    <div id="TransformerObservation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#dga}}<div><b>dga</b>: {{dga}}</div>{{/dga}}
                    {{#waterContent}}<div><b>waterContent</b>: {{waterContent}}</div>{{/waterContent}}
                    {{#oilColor}}<div><b>oilColor</b>: {{oilColor}}</div>{{/oilColor}}
                    {{#oilDielectricStrength}}<div><b>oilDielectricStrength</b>: {{oilDielectricStrength}}</div>{{/oilDielectricStrength}}
                    {{#oilNeutralizationNumber}}<div><b>oilNeutralizationNumber</b>: {{oilNeutralizationNumber}}</div>{{/oilNeutralizationNumber}}
                    {{#oilIFT}}<div><b>oilIFT</b>: {{oilIFT}}</div>{{/oilIFT}}
                    {{#hotSpotTemp}}<div><b>hotSpotTemp</b>: {{hotSpotTemp}}</div>{{/hotSpotTemp}}
                    {{#topOilTemp}}<div><b>topOilTemp</b>: {{topOilTemp}}</div>{{/topOilTemp}}
                    {{#bushingTemp}}<div><b>bushingTemp</b>: {{bushingTemp}}</div>{{/bushingTemp}}
                    {{#pumpVibration}}<div><b>pumpVibration</b>: {{pumpVibration}}</div>{{/pumpVibration}}
                    {{#oilLevel}}<div><b>oilLevel</b>: {{oilLevel}}</div>{{/oilLevel}}
                    {{#freqResp}}<div><b>freqResp</b>: {{freqResp}}</div>{{/freqResp}}
                    {{#furfuralDP}}<div><b>furfuralDP</b>: {{furfuralDP}}</div>{{/furfuralDP}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{status}}");}); return false;'>{{status}}</a></div>{{/status}}
                    {{#Transformer}}<div><b>Transformer</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Transformer}}");}); return false;'>{{Transformer}}</a></div>{{/Transformer}}
                    {{#BushingInsultationPFs}}<div><b>BushingInsultationPFs</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/BushingInsultationPFs}}
                    {{#WindingInsulationPFs}}<div><b>WindingInsulationPFs</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/WindingInsulationPFs}}
                    {{#ProcedureDataSets}}<div><b>ProcedureDataSets</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ProcedureDataSets}}
                    {{#Reconditioning}}<div><b>Reconditioning</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Reconditioning}}");}); return false;'>{{Reconditioning}}</a></div>{{/Reconditioning}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["BushingInsultationPFs"]) obj["BushingInsultationPFs_string"] = obj["BushingInsultationPFs"].join ();
                if (obj["WindingInsulationPFs"]) obj["WindingInsulationPFs_string"] = obj["WindingInsulationPFs"].join ();
                if (obj["ProcedureDataSets"]) obj["ProcedureDataSets_string"] = obj["ProcedureDataSets"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["BushingInsultationPFs_string"];
                delete obj["WindingInsulationPFs_string"];
                delete obj["ProcedureDataSets_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TransformerObservation_collapse" aria-expanded="true" aria-controls="{{id}}_TransformerObservation_collapse" style="margin-left: 10px;">TransformerObservation</a></legend>
                    <div id="{{id}}_TransformerObservation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dga'>dga: </label><div class='col-sm-8'><input id='{{id}}_dga' class='form-control' type='text'{{#dga}} value='{{dga}}'{{/dga}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_waterContent'>waterContent: </label><div class='col-sm-8'><input id='{{id}}_waterContent' class='form-control' type='text'{{#waterContent}} value='{{waterContent}}'{{/waterContent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_oilColor'>oilColor: </label><div class='col-sm-8'><input id='{{id}}_oilColor' class='form-control' type='text'{{#oilColor}} value='{{oilColor}}'{{/oilColor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_oilDielectricStrength'>oilDielectricStrength: </label><div class='col-sm-8'><input id='{{id}}_oilDielectricStrength' class='form-control' type='text'{{#oilDielectricStrength}} value='{{oilDielectricStrength}}'{{/oilDielectricStrength}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_oilNeutralizationNumber'>oilNeutralizationNumber: </label><div class='col-sm-8'><input id='{{id}}_oilNeutralizationNumber' class='form-control' type='text'{{#oilNeutralizationNumber}} value='{{oilNeutralizationNumber}}'{{/oilNeutralizationNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_oilIFT'>oilIFT: </label><div class='col-sm-8'><input id='{{id}}_oilIFT' class='form-control' type='text'{{#oilIFT}} value='{{oilIFT}}'{{/oilIFT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_hotSpotTemp'>hotSpotTemp: </label><div class='col-sm-8'><input id='{{id}}_hotSpotTemp' class='form-control' type='text'{{#hotSpotTemp}} value='{{hotSpotTemp}}'{{/hotSpotTemp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_topOilTemp'>topOilTemp: </label><div class='col-sm-8'><input id='{{id}}_topOilTemp' class='form-control' type='text'{{#topOilTemp}} value='{{topOilTemp}}'{{/topOilTemp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bushingTemp'>bushingTemp: </label><div class='col-sm-8'><input id='{{id}}_bushingTemp' class='form-control' type='text'{{#bushingTemp}} value='{{bushingTemp}}'{{/bushingTemp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pumpVibration'>pumpVibration: </label><div class='col-sm-8'><input id='{{id}}_pumpVibration' class='form-control' type='text'{{#pumpVibration}} value='{{pumpVibration}}'{{/pumpVibration}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_oilLevel'>oilLevel: </label><div class='col-sm-8'><input id='{{id}}_oilLevel' class='form-control' type='text'{{#oilLevel}} value='{{oilLevel}}'{{/oilLevel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_freqResp'>freqResp: </label><div class='col-sm-8'><input id='{{id}}_freqResp' class='form-control' type='text'{{#freqResp}} value='{{freqResp}}'{{/freqResp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_furfuralDP'>furfuralDP: </label><div class='col-sm-8'><input id='{{id}}_furfuralDP' class='form-control' type='text'{{#furfuralDP}} value='{{furfuralDP}}'{{/furfuralDP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Transformer'>Transformer: </label><div class='col-sm-8'><input id='{{id}}_Transformer' class='form-control' type='text'{{#Transformer}} value='{{Transformer}}'{{/Transformer}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ProcedureDataSets'>ProcedureDataSets: </label><div class='col-sm-8'><input id='{{id}}_ProcedureDataSets' class='form-control' type='text'{{#ProcedureDataSets}} value='{{ProcedureDataSets_string}}'{{/ProcedureDataSets}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Reconditioning'>Reconditioning: </label><div class='col-sm-8'><input id='{{id}}_Reconditioning' class='form-control' type='text'{{#Reconditioning}} value='{{Reconditioning}}'{{/Reconditioning}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "TransformerObservation" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_dga").value; if ("" !== temp) obj["dga"] = temp;
                temp = document.getElementById (id + "_waterContent").value; if ("" !== temp) obj["waterContent"] = temp;
                temp = document.getElementById (id + "_oilColor").value; if ("" !== temp) obj["oilColor"] = temp;
                temp = document.getElementById (id + "_oilDielectricStrength").value; if ("" !== temp) obj["oilDielectricStrength"] = temp;
                temp = document.getElementById (id + "_oilNeutralizationNumber").value; if ("" !== temp) obj["oilNeutralizationNumber"] = temp;
                temp = document.getElementById (id + "_oilIFT").value; if ("" !== temp) obj["oilIFT"] = temp;
                temp = document.getElementById (id + "_hotSpotTemp").value; if ("" !== temp) obj["hotSpotTemp"] = temp;
                temp = document.getElementById (id + "_topOilTemp").value; if ("" !== temp) obj["topOilTemp"] = temp;
                temp = document.getElementById (id + "_bushingTemp").value; if ("" !== temp) obj["bushingTemp"] = temp;
                temp = document.getElementById (id + "_pumpVibration").value; if ("" !== temp) obj["pumpVibration"] = temp;
                temp = document.getElementById (id + "_oilLevel").value; if ("" !== temp) obj["oilLevel"] = temp;
                temp = document.getElementById (id + "_freqResp").value; if ("" !== temp) obj["freqResp"] = temp;
                temp = document.getElementById (id + "_furfuralDP").value; if ("" !== temp) obj["furfuralDP"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_Transformer").value; if ("" !== temp) obj["Transformer"] = temp;
                temp = document.getElementById (id + "_ProcedureDataSets").value; if ("" !== temp) obj["ProcedureDataSets"] = temp.split (",");
                temp = document.getElementById (id + "_Reconditioning").value; if ("" !== temp) obj["Reconditioning"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Transformer", "0..1", "0..*", "TransformerTank", "TransformerObservations"],
                            ["BushingInsultationPFs", "0..*", "0..1", "BushingInsulationPF", "TransformerObservation"],
                            ["WindingInsulationPFs", "0..*", "0..1", "WindingInsulation", "TransformerObservation"],
                            ["ProcedureDataSets", "0..*", "0..*", "ProcedureDataSet", "TransformerObservations"],
                            ["Reconditioning", "1", "0..*", "Reconditioning", "TransformerObservations"]
                        ]
                    )
                );
            }
        }

        /**
         * There are often stages of power which are associated with stages of cooling.
         *
         * For instance, a transformer may be rated 121kV on the primary, 15kV on the secondary and 4kV on the tertiary winding. These are voltage ratings and the power ratings are generally the same for all three windings and independent of the voltage ratings, there are instances where the tertiary may have a lower power rating.
         * For example, for three stages, the power rating may be 15/20/25 MVA and the cooling is OA/FA/FOA. The 15 MVA rating goes with the OA cooling (Oil and Air cooling). This is called the self cooled rating as there are no external cooling enhancements. The 20 MVA rating goes with the FA cooling (Forced Air cooling), this means that when the fans are running and thus enhancing the cooling characteristics, the transformer can operate at a power level of 20 MVA. The 25 MVA rating goes with the FOA cooling (Forced Oil and Air cooling), this means that when the fans and pumps are running and thus enhancing the cooling characteristics even more than before, the transformer can operate at a power level of 25 MVA. This 15/20/25 MVA does not state how the power is split between the various windings. It may be 25 MVA input on the primary, 25 MVA output on the secondary and 0 MVA output on the tertiary. It may also operate at 25 MVA input on the primary, 17 MVA output on the secondary and 8 MVA output on the tertiary.
         *
         */
        class CoolingPowerRating extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.CoolingPowerRating;
                if (null == bucket)
                   cim_data.CoolingPowerRating = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CoolingPowerRating[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CoolingPowerRating";
                base.parse_attribute (/<cim:CoolingPowerRating.coolingKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "coolingKind", sub, context);
                base.parse_element (/<cim:CoolingPowerRating.stage>([\s\S]*?)<\/cim:CoolingPowerRating.stage>/g, obj, "stage", base.to_string, sub, context);
                base.parse_element (/<cim:CoolingPowerRating.powerRating>([\s\S]*?)<\/cim:CoolingPowerRating.powerRating>/g, obj, "powerRating", base.to_string, sub, context);
                base.parse_attributes (/<cim:CoolingPowerRating.Reconditionings\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Reconditionings", sub, context);
                let bucket = context.parsed.CoolingPowerRating;
                if (null == bucket)
                   context.parsed.CoolingPowerRating = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "CoolingPowerRating", "coolingKind", "coolingKind", fields);
                base.export_element (obj, "CoolingPowerRating", "stage", "stage",  base.from_string, fields);
                base.export_element (obj, "CoolingPowerRating", "powerRating", "powerRating",  base.from_string, fields);
                base.export_attributes (obj, "CoolingPowerRating", "Reconditionings", "Reconditionings", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CoolingPowerRating_collapse" aria-expanded="true" aria-controls="CoolingPowerRating_collapse" style="margin-left: 10px;">CoolingPowerRating</a></legend>
                    <div id="CoolingPowerRating_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#coolingKind}}<div><b>coolingKind</b>: {{coolingKind}}</div>{{/coolingKind}}
                    {{#stage}}<div><b>stage</b>: {{stage}}</div>{{/stage}}
                    {{#powerRating}}<div><b>powerRating</b>: {{powerRating}}</div>{{/powerRating}}
                    {{#Reconditionings}}<div><b>Reconditionings</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Reconditionings}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["coolingKindCoolingKind"] = [{ id: '', selected: (!obj["coolingKind"])}]; for (let property in CoolingKind) obj["coolingKindCoolingKind"].push ({ id: property, selected: obj["coolingKind"] && obj["coolingKind"].endsWith ('.' + property)});
                if (obj["Reconditionings"]) obj["Reconditionings_string"] = obj["Reconditionings"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["coolingKindCoolingKind"];
                delete obj["Reconditionings_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CoolingPowerRating_collapse" aria-expanded="true" aria-controls="{{id}}_CoolingPowerRating_collapse" style="margin-left: 10px;">CoolingPowerRating</a></legend>
                    <div id="{{id}}_CoolingPowerRating_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_coolingKind'>coolingKind: </label><div class='col-sm-8'><select id='{{id}}_coolingKind' class='form-control custom-select'>{{#coolingKindCoolingKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/coolingKindCoolingKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_stage'>stage: </label><div class='col-sm-8'><input id='{{id}}_stage' class='form-control' type='text'{{#stage}} value='{{stage}}'{{/stage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_powerRating'>powerRating: </label><div class='col-sm-8'><input id='{{id}}_powerRating' class='form-control' type='text'{{#powerRating}} value='{{powerRating}}'{{/powerRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Reconditionings'>Reconditionings: </label><div class='col-sm-8'><input id='{{id}}_Reconditionings' class='form-control' type='text'{{#Reconditionings}} value='{{Reconditionings_string}}'{{/Reconditionings}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CoolingPowerRating" };
                super.submit (id, obj);
                temp = CoolingKind[document.getElementById (id + "_coolingKind").value]; if (temp) obj["coolingKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#CoolingKind." + temp; else delete obj["coolingKind"];
                temp = document.getElementById (id + "_stage").value; if ("" !== temp) obj["stage"] = temp;
                temp = document.getElementById (id + "_powerRating").value; if ("" !== temp) obj["powerRating"] = temp;
                temp = document.getElementById (id + "_Reconditionings").value; if ("" !== temp) obj["Reconditionings"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Reconditionings", "0..*", "0..*", "Reconditioning", "PowerRatings"]
                        ]
                    )
                );
            }
        }

        /**
         * Bushing insulation power factor condition as a result of a test.
         *
         * Typical status values are: Acceptable, Minor Deterioration or Moisture Absorption, Major Deterioration or Moisture Absorption, Failed.
         *
         */
        class BushingInsulationPF extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.BushingInsulationPF;
                if (null == bucket)
                   cim_data.BushingInsulationPF = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BushingInsulationPF[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "BushingInsulationPF";
                base.parse_attribute (/<cim:BushingInsulationPF.testKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "testKind", sub, context);
                base.parse_attribute (/<cim:BushingInsulationPF.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attribute (/<cim:BushingInsulationPF.Bushing\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Bushing", sub, context);
                base.parse_attribute (/<cim:BushingInsulationPF.TransformerObservation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TransformerObservation", sub, context);
                let bucket = context.parsed.BushingInsulationPF;
                if (null == bucket)
                   context.parsed.BushingInsulationPF = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "BushingInsulationPF", "testKind", "testKind", fields);
                base.export_attribute (obj, "BushingInsulationPF", "status", "status", fields);
                base.export_attribute (obj, "BushingInsulationPF", "Bushing", "Bushing", fields);
                base.export_attribute (obj, "BushingInsulationPF", "TransformerObservation", "TransformerObservation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#BushingInsulationPF_collapse" aria-expanded="true" aria-controls="BushingInsulationPF_collapse" style="margin-left: 10px;">BushingInsulationPF</a></legend>
                    <div id="BushingInsulationPF_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#testKind}}<div><b>testKind</b>: {{testKind}}</div>{{/testKind}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{status}}");}); return false;'>{{status}}</a></div>{{/status}}
                    {{#Bushing}}<div><b>Bushing</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Bushing}}");}); return false;'>{{Bushing}}</a></div>{{/Bushing}}
                    {{#TransformerObservation}}<div><b>TransformerObservation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{TransformerObservation}}");}); return false;'>{{TransformerObservation}}</a></div>{{/TransformerObservation}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["testKindBushingInsulationPfTestKind"] = [{ id: '', selected: (!obj["testKind"])}]; for (let property in BushingInsulationPfTestKind) obj["testKindBushingInsulationPfTestKind"].push ({ id: property, selected: obj["testKind"] && obj["testKind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["testKindBushingInsulationPfTestKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_BushingInsulationPF_collapse" aria-expanded="true" aria-controls="{{id}}_BushingInsulationPF_collapse" style="margin-left: 10px;">BushingInsulationPF</a></legend>
                    <div id="{{id}}_BushingInsulationPF_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_testKind'>testKind: </label><div class='col-sm-8'><select id='{{id}}_testKind' class='form-control custom-select'>{{#testKindBushingInsulationPfTestKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/testKindBushingInsulationPfTestKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Bushing'>Bushing: </label><div class='col-sm-8'><input id='{{id}}_Bushing' class='form-control' type='text'{{#Bushing}} value='{{Bushing}}'{{/Bushing}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TransformerObservation'>TransformerObservation: </label><div class='col-sm-8'><input id='{{id}}_TransformerObservation' class='form-control' type='text'{{#TransformerObservation}} value='{{TransformerObservation}}'{{/TransformerObservation}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "BushingInsulationPF" };
                super.submit (id, obj);
                temp = BushingInsulationPfTestKind[document.getElementById (id + "_testKind").value]; if (temp) obj["testKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#BushingInsulationPfTestKind." + temp; else delete obj["testKind"];
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_Bushing").value; if ("" !== temp) obj["Bushing"] = temp;
                temp = document.getElementById (id + "_TransformerObservation").value; if ("" !== temp) obj["TransformerObservation"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Bushing", "0..1", "0..*", "Bushing", "BushingInsulationPFs"],
                            ["TransformerObservation", "0..1", "0..*", "TransformerObservation", "BushingInsultationPFs"]
                        ]
                    )
                );
            }
        }

        return (
            {
                TowerConstructionKind: TowerConstructionKind,
                JointConfigurationKind: JointConfigurationKind,
                BushingInsulationPfTestKind: BushingInsulationPfTestKind,
                JointFillKind: JointFillKind,
                AnchorKind: AnchorKind,
                Specification: Specification,
                UndergroundStructureKind: UndergroundStructureKind,
                BushingInsulationPF: BushingInsulationPF,
                CoolingKind: CoolingKind,
                StructureSupportKind: StructureSupportKind,
                WindingInsulation: WindingInsulation,
                FACTSDeviceKind: FACTSDeviceKind,
                ReliabilityInfo: ReliabilityInfo,
                TransformerObservation: TransformerObservation,
                AssetPropertyCurve: AssetPropertyCurve,
                CoolingPowerRating: CoolingPowerRating,
                Reconditioning: Reconditioning,
                StreetlightLampKind: StreetlightLampKind,
                PoleBaseKind: PoleBaseKind,
                PoleTreatmentKind: PoleTreatmentKind,
                DimensionsInfo: DimensionsInfo,
                StructureMaterialKind: StructureMaterialKind,
                PolePreservativeKind: PolePreservativeKind
            }
        );
    }
);